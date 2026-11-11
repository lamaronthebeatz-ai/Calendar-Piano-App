import {
  type Artic, type Clef, type Dyn, type Ev, type Jump, type Note, type Orn, type Score,
  TPQ, barLen, lanesOf, layout, midiOf, newId, normalized, soundOf, spell,
} from './model'
import { JUMP_TEXT, segments } from './mei'

/* ---------- MusicXML out: what Sibelius, MuseScore, Finale and Dorico all open ---------- */

const TYPE: Record<number, string> = { 1: 'whole', 2: 'half', 4: 'quarter', 8: 'eighth', 16: '16th', 32: '32nd', 64: '64th' }
const CLEF_XML: Record<Clef, string> = {
  treble: '<sign>G</sign><line>2</line>',
  treble8: '<sign>G</sign><line>2</line><clef-octave-change>-1</clef-octave-change>',
  bass: '<sign>F</sign><line>4</line>',
  alto: '<sign>C</sign><line>3</line>',
  tenor: '<sign>C</sign><line>4</line>',
}
const ARTIC_XML: Record<Artic, string> = { stacc: 'staccato', stacciss: 'staccatissimo', ten: 'tenuto', acc: 'accent', marc: 'strong-accent' }
const ORN_XML: Record<Orn, string> = { trill: 'trill-mark', mordent: 'mordent', mordentInv: 'inverted-mordent', turn: 'turn' }
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** "Bb7", "F#m7b5/E" as a MusicXML harmony: root, the rest shown as typed, bass. */
function harmonyXml(t: string, staffTag: string): string {
  const m = /^([A-G])([b#]?)(.*?)(?:\/([A-G])([b#]?))?$/.exec(t.trim())
  if (!m) return `<harmony print-frame="no"><root><root-step>C</root-step></root><kind text="${esc(t)}">none</kind>${staffTag}</harmony>`
  const alter = (a: string) => (a === 'b' ? '<root-alter>-1</root-alter>' : a === '#' ? '<root-alter>1</root-alter>' : '')
  const bass = m[4] ? `<bass><bass-step>${m[4]}</bass-step>${alter(m[5]).replace(/root/g, 'bass')}</bass>` : ''
  const rest = m[3]
  const kind = rest === '' ? 'major' : rest === 'm' ? 'minor' : rest === '7' ? 'dominant' : 'other'
  return `<harmony print-frame="no"><root><root-step>${m[1]}</root-step>${alter(m[2])}</root><kind text="${esc(rest)}">${kind}</kind>${bass}${staffTag}</harmony>`
}

/**
 * Choir scores: one part per staff, named by its label. Piano and single staves: one part holding every staff.
 * Voices are numbered 1–4 on a part's first staff and 5–8 on its second, as notation programs expect.
 */
export function toMusicXml(s: Score): string {
  const bars = layout(s)
  const lanes = lanesOf(s)
  const parts: number[][] = s.labels?.length ? s.clefs.map((_, i) => [i]) : [s.clefs.map((_, i) => i)]
  const slurStart = new Map<string, number>()
  const slurStop = new Map<string, number>()
  const wedgeStart = new Map<string, 'crescendo' | 'diminuendo'>()
  const wedgeStop = new Set<string>()
  ;(s.spans ?? []).forEach((sp, i) => {
    if (sp.kind === 'slur') {
      slurStart.set(sp.from, (i % 6) + 1)
      slurStop.set(sp.to, (i % 6) + 1)
    } else {
      wedgeStart.set(sp.from, sp.kind === 'cres' ? 'crescendo' : 'diminuendo')
      wedgeStop.add(sp.to)
    }
  })

  const partList = parts
    .map((p, i) => `<score-part id="P${i + 1}"><part-name>${esc(s.labels?.[p[0]] ?? (p.length > 1 ? 'Piano' : 'Giai điệu'))}</part-name></score-part>`)
    .join('')

  const body = parts.map((staves, pi) => {
    let xml = `<part id="P${pi + 1}">`
    bars.forEach((b, bi) => {
      const prev = bars[bi - 1]
      const a = s.attrs[bi] ?? {}
      xml += `<measure number="${bi + 1}">`
      if (b.left === 'rptstart') xml += '<barline location="left"><bar-style>heavy-light</bar-style><repeat direction="forward"/></barline>'
      const attrs: string[] = []
      if (!prev) attrs.push(`<divisions>${TPQ}</divisions>`)
      if (!prev || prev.key !== b.key) attrs.push(`<key><fifths>${b.key}</fifths></key>`)
      if (!prev || prev.time[0] !== b.time[0] || prev.time[1] !== b.time[1]) attrs.push(`<time><beats>${b.time[0]}</beats><beat-type>${b.time[1]}</beat-type></time>`)
      if (!prev && staves.length > 1) attrs.push(`<staves>${staves.length}</staves>`)
      staves.forEach((st, k) => {
        if (!prev || prev.clefs[st] !== b.clefs[st]) attrs.push(`<clef${staves.length > 1 ? ` number="${k + 1}"` : ''}>${CLEF_XML[b.clefs[st]]}</clef>`)
      })
      if (attrs.length) xml += `<attributes>${attrs.join('')}</attributes>`
      if (bi === 0) xml += `<direction placement="above"><direction-type><metronome><beat-unit>quarter</beat-unit><per-minute>${s.tempo}</per-minute></metronome></direction-type><sound tempo="${s.tempo}"/></direction>`
      if (pi === 0 && a.segno) xml += '<direction placement="above"><direction-type><segno/></direction-type><sound segno="segno"/></direction>'
      if (pi === 0 && a.coda) xml += '<direction placement="above"><direction-type><coda/></direction-type><sound coda="coda"/></direction>'

      // every voice of every staff in turn, stepping back to the bar's start between them
      const voices = lanes.map((l, lane) => ({ ...l, lane })).filter((l) => staves.includes(l.staff)).sort((x, y) => x.staff - y.staff || x.voice - y.voice)
      voices.forEach((v, vi) => {
        const k = staves.indexOf(v.staff)
        const voiceNo = k * 4 + v.voice
        const staffTag = staves.length > 1 ? `<staff>${k + 1}</staff>` : ''
        const evs = s.staves[v.lane]
        if (vi > 0) xml += `<backup><duration>${b.len}</duration></backup>`
        if (v.voice > 1 && !evs.some((e) => e.notes.length && e.start < b.start + b.len && e.start + e.dur > b.start)) {
          xml += `<forward><duration>${b.len}</duration><voice>${voiceNo}</voice>${staffTag}</forward>`
          return
        }
        evs.forEach((ev, ei) => {
          const segs = segments(ev, bars)
          const total = segs.reduce((n, sg) => n + spell(ev.tup ? (sg.len * ev.tup.n) / ev.tup.base : sg.len).length, 0)
          let piece = 0
          for (const sg of segs) {
            if (sg.bar !== bi) {
              piece += spell(ev.tup ? (sg.len * ev.tup.n) / ev.tup.base : sg.len).length
              continue
            }
            const first = piece === 0
            if (first) {
              const dir = (inner: string, place = 'below', sound = '') => `<direction placement="${place}"><direction-type>${inner}</direction-type>${staffTag}${sound}</direction>`
              if (ev.harm) xml += harmonyXml(ev.harm, staffTag)
              if (ev.dyn) xml += dir(`<dynamics><${ev.dyn}/></dynamics>`)
              if (ev.text) xml += dir(`<words${ev.text.kind === 'tempo' ? ' font-weight="bold"' : ' font-style="italic"'}>${esc(ev.text.text)}</words>`, 'above', ev.text.bpm ? `<sound tempo="${ev.text.bpm}"/>` : '')
              const w = wedgeStart.get(ev.id)
              if (w) xml += dir(`<wedge type="${w}"/>`)
            }
            const written = ev.tup ? (sg.len * ev.tup.n) / ev.tup.base : sg.len
            const ps = spell(written)
            const wholeBarRest = !ev.notes.length && !ev.tup && sg.len === b.len && sg.start === b.start
            ps.forEach((p) => {
              const real = ev.tup ? (p.ticks * ev.tup.base) / ev.tup.n : p.ticks
              const isFirst = piece === 0
              const isLast = piece === total - 1
              const prevEv = evs[ei - 1]
              const nextEv = evs[ei + 1]
              const tm = ev.tup ? `<time-modification><actual-notes>${ev.tup.n}</actual-notes><normal-notes>${ev.tup.base}</normal-notes></time-modification>` : ''
              const notesOf = ev.notes.length ? ev.notes : [null]
              notesOf.forEach((n: Note | null, j) => {
                const nots: string[] = []
                let ties = ''
                if (n) {
                  const incoming = !isFirst || (!!prevEv && prevEv.start + prevEv.dur === ev.start && prevEv.notes.some((x) => x.tie && midiOf(x) === midiOf(n)))
                  const outgoing = !isLast || (!!n.tie && !!nextEv && nextEv.start === ev.start + ev.dur && nextEv.notes.some((x) => midiOf(x) === midiOf(n)))
                  if (incoming) {
                    ties += '<tie type="stop"/>'
                    nots.push('<tied type="stop"/>')
                  }
                  if (outgoing) {
                    ties += '<tie type="start"/>'
                    nots.push('<tied type="start"/>')
                  }
                }
                if (j === 0) {
                  if (ev.tup && isFirst && prevEv?.tup?.g !== ev.tup.g) nots.push('<tuplet type="start" bracket="yes"/>')
                  if (ev.tup && isLast && nextEv?.tup?.g !== ev.tup.g) nots.push('<tuplet type="stop"/>')
                  if (isFirst && slurStart.has(ev.id)) nots.push(`<slur type="start" number="${slurStart.get(ev.id)}"/>`)
                  if (isLast && slurStop.has(ev.id)) nots.push(`<slur type="stop" number="${slurStop.get(ev.id)}"/>`)
                  if (isFirst && ev.artic?.length) nots.push(`<articulations>${ev.artic.map((x) => `<${ARTIC_XML[x]}/>`).join('')}</articulations>`)
                  if (isFirst && ev.orn) nots.push(`<ornaments><${ORN_XML[ev.orn]}/></ornaments>`)
                  if (isFirst && ev.fermata) nots.push('<fermata type="upright"/>')
                }
                if (isFirst && ev.arpeg && n && ev.notes.length > 1) nots.push('<arpeggiate/>')
                const pitch = n
                  ? `<pitch><step>${'CDEFGAB'[n.step]}</step>${n.alter ? `<alter>${n.alter}</alter>` : ''}<octave>${n.oct}</octave></pitch>`
                  : `<rest${wholeBarRest ? ' measure="yes"' : ''}/>`
                const syl = n && j === 0 && isFirst && ev.lyric?.text ? lyricXml(ev, evs.slice(0, ei)) : ''
                xml +=
                  `<note>${j > 0 ? '<chord/>' : ''}${pitch}<duration>${real}</duration>${ties}<voice>${voiceNo}</voice>` +
                  `${wholeBarRest ? '' : `<type>${TYPE[p.dur]}</type>${'<dot/>'.repeat(p.dots)}`}${tm}${staffTag}` +
                  `${nots.length ? `<notations>${nots.join('')}</notations>` : ''}${syl}</note>`
              })
              if (isLast && wedgeStop.has(ev.id)) xml += `<direction><direction-type><wedge type="stop"/></direction-type>${staffTag}</direction>`
              piece++
            })
          }
        })
      })
      if (pi === 0 && a.jump) {
        const jump = a.jump as Jump
        const sound = jump === 'fine' ? '<sound fine="yes"/>' : jump.startsWith('dc') ? '<sound dacapo="yes"/>' : jump.startsWith('ds') ? '<sound dalsegno="segno"/>' : '<sound tocoda="coda"/>'
        xml += `<direction placement="above"><direction-type><words font-style="italic">${JUMP_TEXT[jump]}</words></direction-type>${sound}</direction>`
      }
      const right = b.right
      if (right === 'rptend') xml += '<barline location="right"><bar-style>light-heavy</bar-style><repeat direction="backward"/></barline>'
      else if (right === 'end') xml += '<barline location="right"><bar-style>light-heavy</bar-style></barline>'
      else if (right === 'dbl') xml += '<barline location="right"><bar-style>light-light</bar-style></barline>'
      xml += '</measure>'
    })
    return xml + '</part>'
  })

  return (
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
    '<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\n' +
    `<score-partwise version="4.0"><work><work-title>${esc(s.title)}</work-title></work>` +
    `<identification><encoding><software>Trung tâm lý thuyết âm nhạc học</software></encoding></identification>` +
    `<part-list>${partList}</part-list>${body.join('')}</score-partwise>`
  )
}

function lyricXml(ev: Ev, before: Ev[]): string {
  const prev = [...before].reverse().find((e) => e.lyric?.text)
  const from = !!prev?.lyric?.hyph
  const on = !!ev.lyric?.hyph
  const syllabic = on ? (from ? 'middle' : 'begin') : from ? 'end' : 'single'
  return `<lyric number="1"><syllabic>${syllabic}</syllabic><text>${esc(ev.lyric!.text)}</text></lyric>`
}

/* ---------- MusicXML in ---------- */

const CLEF_IN = (sign: string, line: number, oct: number): Clef =>
  sign === 'F' ? 'bass' : sign === 'C' ? (line === 4 ? 'tenor' : 'alto') : oct === -1 ? 'treble8' : 'treble'
const ARTIC_IN: Record<string, Artic> = { staccato: 'stacc', staccatissimo: 'stacciss', tenuto: 'ten', accent: 'acc', 'strong-accent': 'marc' }
const ORN_IN: Record<string, Orn> = { 'trill-mark': 'trill', mordent: 'mordent', 'inverted-mordent': 'mordentInv', turn: 'turn' }
const DYNS = new Set(['ppp', 'pp', 'p', 'mp', 'mf', 'f', 'ff', 'fff', 'sf', 'sfz', 'fp'])

/**
 * A partwise MusicXML file as a score. Kept: pitches, rests, chords, ties, dots, tuplets, voices, staves, clefs, keys,
 * times, repeats, lyrics (verse 1), chord symbols, dynamics, slurs, articulations, ornaments, fermatas, words.
 * Grace and cue notes are left out; a pickup bar becomes a full bar with rests before its notes.
 */
export function fromMusicXml(text: string, fallbackTitle = 'Bản nhập'): Score {
  const doc = new DOMParser().parseFromString(text, 'application/xml')
  if (doc.querySelector('parsererror') || !doc.querySelector('score-partwise')) throw new Error('Không đọc được: tệp không phải MusicXML dạng partwise.')
  const kids = (el: Element, name: string) => [...el.children].filter((c) => c.tagName === name)
  const kid = (el: Element | null | undefined, name: string) => (el ? [...el.children].find((c) => c.tagName === name) : undefined)
  const num = (el: Element | null | undefined, name: string, d = 0) => {
    const v = kid(el, name)?.textContent
    return v == null || v.trim() === '' ? d : +v
  }

  const title = doc.querySelector('work > work-title')?.textContent?.trim() || doc.querySelector('movement-title')?.textContent?.trim() || fallbackTitle
  const partEls = [...doc.querySelectorAll('score-partwise > part')]
  const names = new Map([...doc.querySelectorAll('part-list > score-part')].map((p) => [p.getAttribute('id'), kid(p, 'part-name')?.textContent?.trim() ?? '']))

  let key = 0
  let time: [number, number] = [4, 4]
  let tempo = 80
  const clefs: Clef[] = []
  const labels: string[] = []
  const attrs: Score['attrs'] = {}
  const laneKey = new Map<string, number>() // "staff:voice" → lane
  const lanes: { staff: number; voice: number }[] = []
  const staves: Ev[][] = []
  const spans: Score['spans'] = []
  // our bars, laid out as the file goes (the first part decides): files may split a bar in two (3 + 3a) or open with
  // a pickup, so notes go by the real length of each file measure and marks go to the bar of ours they fall in
  const grid: { start: number; len: number }[] = []
  let gridTime: [number, number] = [4, 4]
  const barIdx = (t: number) => {
    for (;;) {
      const i = grid.findIndex((g) => t >= g.start && t < g.start + g.len)
      if (i >= 0) return i
      const l = grid[grid.length - 1]
      grid.push({ start: l ? l.start + l.len : 0, len: barLen(gridTime) })
    }
  }
  const lens: number[] = [] // real length of each file measure, from the first part
  let end = 0
  let firstPart = true

  for (const part of partEls) {
    const nStaves = Math.max(1, ...[...part.querySelectorAll('attributes > staves')].map((e) => +(e.textContent ?? 1)))
    const base = clefs.length
    for (let k = 0; k < nStaves; k++) {
      clefs.push('treble')
      labels.push(nStaves > 1 ? '' : names.get(part.getAttribute('id')) ?? '')
    }
    const voiceMap = new Map<string, number>() // file voice → our voice on its staff
    const laneOf = (staff: number, fileVoice: string) => {
      const vk = `${staff}:${fileVoice}`
      if (!voiceMap.has(vk)) voiceMap.set(vk, [...voiceMap.keys()].filter((x) => x.startsWith(`${staff}:`)).length + 1)
      const voice = voiceMap.get(vk)!
      const lk = `${staff}:${voice}`
      if (!laneKey.has(lk)) {
        laneKey.set(lk, lanes.length)
        lanes.push({ staff, voice })
        staves.push([])
      }
      return laneKey.get(lk)!
    }
    let div = 1
    let mStart = 0
    let curTime: [number, number] = time
    let lastEv: Ev | null = null
    const pending = new Map<number, Partial<Ev>>() // staff → marks waiting for its next note
    const openSlur = new Map<string, { lane: number; id: string }>()
    const tupGroup = new Map<number, string>()
    const measureEls = kids(part, 'measure')
    measureEls.forEach((m, mi) => {
      const at = () => (attrs[barIdx(mStart)] ??= {})
      let pos = 0
      let longest = 0
      const before = staves.map((l) => l.length)
      const ticks = (el: Element) => Math.round((num(el, 'duration') * TPQ) / div)
      for (const el of [...m.children]) {
        if (el.tagName === 'attributes') {
          div = num(el, 'divisions', div) || div
          const fifths = kid(kid(el, 'key'), 'fifths')
          const t = kid(el, 'time')
          if (fifths && firstPart) {
            if (mStart === 0) key = +fifths.textContent!
            else at().key = +fifths.textContent!
          }
          if (t) {
            const tt: [number, number] = [num(t, 'beats', 4), num(t, 'beat-type', 4)]
            curTime = tt
            if (firstPart) {
              if (mStart === 0) {
                time = tt
                grid.length = 0
              }
              else {
                grid.length = barIdx(mStart)
                gridTime = tt
                at().time = tt
              }
              gridTime = tt
            }
          }
          for (const c of kids(el, 'clef')) {
            const k = +(c.getAttribute('number') ?? 1) - 1
            const cl = CLEF_IN(kid(c, 'sign')?.textContent ?? 'G', num(c, 'line', 2), num(c, 'clef-octave-change', 0))
            if (mStart === 0 && pos === 0) clefs[base + k] = cl
            else (at().clefs ??= {})[base + k] = cl
          }
        } else if (el.tagName === 'backup') pos -= ticks(el)
        else if (el.tagName === 'forward') pos += ticks(el)
        else if (el.tagName === 'barline' && firstPart) {
          const rep = kid(el, 'repeat')?.getAttribute('direction')
          const style = kid(el, 'bar-style')?.textContent
          const a = (attrs[barIdx(el.getAttribute('location') === 'left' ? mStart : mStart + Math.max(pos, 1) - 1)] ??= {})
          if (rep === 'forward') a.left = 'rptstart'
          else if (rep === 'backward') a.right = 'rptend'
          else if (style === 'light-heavy' && mi < measureEls.length - 1) a.right = 'end'
          else if (style === 'light-light') a.right = 'dbl'
        } else if (el.tagName === 'harmony') {
          const st = base + num(el, 'staff', 1) - 1
          const r = kid(el, 'root')
          if (r) {
            const alt = num(r, 'root-alter')
            const kindEl = kid(el, 'kind')
            const kindText = kindEl?.getAttribute('text') ?? KIND_TEXT[kindEl?.textContent ?? ''] ?? ''
            const bass = kid(el, 'bass')
            const name =
              `${kid(r, 'root-step')?.textContent}${alt < 0 ? 'b' : alt > 0 ? '#' : ''}${kindText}` +
              (bass ? `/${kid(bass, 'bass-step')?.textContent}${num(bass, 'bass-alter') < 0 ? 'b' : num(bass, 'bass-alter') > 0 ? '#' : ''}` : '')
            pending.set(st, { ...pending.get(st), harm: name })
          }
        } else if (el.tagName === 'direction') {
          const st = base + num(el, 'staff', 1) - 1
          const dt = [...el.querySelectorAll('direction-type > *')]
          const sound = kid(el, 'sound')
          for (const d of dt) {
            if (d.tagName === 'dynamics') {
              const dy = d.children[0]?.tagName
              if (dy && DYNS.has(dy)) pending.set(st, { ...pending.get(st), dyn: dy as Dyn })
            } else if (d.tagName === 'words' && d.textContent?.trim()) {
              const w = d.textContent.trim()
              const jump = (Object.entries(JUMP_TEXT) as [Jump, string][]).find(([, v]) => v.toLowerCase() === w.toLowerCase())?.[0]
              if (jump && firstPart) at().jump = jump
              else {
                const bpm = sound?.getAttribute('tempo') ? Math.round(+sound.getAttribute('tempo')!) : undefined
                pending.set(st, { ...pending.get(st), text: { kind: d.getAttribute('font-weight') === 'bold' || bpm ? 'tempo' : 'expr', text: w, bpm } })
              }
            } else if (d.tagName === 'segno' && firstPart) at().segno = true
            else if (d.tagName === 'coda' && firstPart) at().coda = true
          }
          if (sound?.getAttribute('tempo') && mStart === 0 && pos === 0) tempo = Math.round(+sound.getAttribute('tempo')!)
        } else if (el.tagName === 'note') {
          if (kid(el, 'grace') || kid(el, 'cue')) continue
          const st = base + num(el, 'staff', 1) - 1
          const lane = laneOf(st, kid(el, 'voice')?.textContent ?? '1')
          const isChord = !!kid(el, 'chord')
          const dur = ticks(el)
          const p = kid(el, 'pitch')
          const note: Note | null = p
            ? { step: 'CDEFGAB'.indexOf(kid(p, 'step')?.textContent ?? 'C'), oct: num(p, 'octave', 4), alter: Math.round(num(p, 'alter')), ...(kids(el, 'tie').some((t) => t.getAttribute('type') === 'start') ? { tie: true } : {}) }
            : null
          if (isChord && lastEv && note) {
            lastEv.notes.push(note)
            if (kid(el, 'notations')?.querySelector('arpeggiate')) lastEv.arpeg = true
            continue
          }
          const ev: Ev = { id: newId(), start: mStart + pos, dur, notes: note ? [note] : [] }
          const nots = kid(el, 'notations')
          const tm = kid(el, 'time-modification')
          if (tm) {
            const n = num(tm, 'actual-notes', 3)
            const b = num(tm, 'normal-notes', 2)
            if (nots?.querySelector('tuplet[type="start"]') || !tupGroup.has(lane)) tupGroup.set(lane, newId())
            ev.tup = { n, base: b, g: tupGroup.get(lane)! }
            if (nots?.querySelector('tuplet[type="stop"]')) tupGroup.delete(lane)
          } else tupGroup.delete(lane)
          if (note) {
            Object.assign(ev, pending.get(st) ?? {})
            pending.delete(st)
            const ar = [...(nots?.querySelectorAll('articulations > *') ?? [])].map((x) => ARTIC_IN[x.tagName]).filter(Boolean)
            if (ar.length) ev.artic = ar
            const orn = [...(nots?.querySelectorAll('ornaments > *') ?? [])].map((x) => ORN_IN[x.tagName]).find(Boolean)
            if (orn) ev.orn = orn
            if (nots?.querySelector('fermata')) ev.fermata = true
            if (nots?.querySelector('arpeggiate')) ev.arpeg = true
            const ly = kids(el, 'lyric').find((l) => (l.getAttribute('number') ?? '1') === '1') ?? kid(el, 'lyric')
            const lt = ly ? kids(ly, 'text').map((t) => t.textContent).join('') : ''
            if (lt) ev.lyric = { text: lt, ...(/begin|middle/.test(kid(ly, 'syllabic')?.textContent ?? '') ? { hyph: true } : {}) }
            for (const sl of [...(nots?.querySelectorAll('slur') ?? [])]) {
              const k = `${sl.getAttribute('number') ?? '1'}`
              if (sl.getAttribute('type') === 'start') openSlur.set(k, { lane, id: ev.id })
              else if (sl.getAttribute('type') === 'stop') {
                const o = openSlur.get(k)
                if (o && o.lane === lane) spans.push({ id: newId(), kind: 'slur', staff: lane, from: o.id, to: ev.id })
                openSlur.delete(k)
              }
            }
          }
          staves[lane].push(ev)
          lastEv = ev
          pos += dur
        }
        longest = Math.max(longest, pos)
      }
      // a pickup bar: our bars are always full, so its notes move to the end, after rests
      const full = barLen(curTime)
      if (firstPart) lens[mi] = mi === 0 || !longest ? full : longest
      const short = full - longest
      if (mi === 0 && short > 0 && longest > 0) staves.forEach((l, i) => l.slice(before[i] ?? 0).forEach((e) => (e.start += short)))
      mStart += lens[mi] ?? full
      end = Math.max(end, mStart)
    })
    firstPart = false
  }

  // each staff has a first voice
  clefs.forEach((_, st) => {
    if (!laneKey.has(`${st}:1`)) {
      laneKey.set(`${st}:1`, lanes.length)
      lanes.push({ staff: st, voice: 1 })
      staves.push([])
    }
  })
  // overlapping events in one voice (a file that layers notes oddly) — keep the earlier, cut the later in
  for (const evs of staves) {
    evs.sort((a, b) => a.start - b.start)
    for (let i = 1; i < evs.length; i++) {
      const p = evs[i - 1]
      if (evs[i].start < p.start + p.dur) p.dur = evs[i].start - p.start
    }
  }
  const plain = lanes.every((l, i) => l.staff === i && l.voice === 1)
  const s: Score = {
    id: `s${Date.now().toString(36)}`,
    title,
    clefs,
    key,
    time,
    tempo,
    measures: barIdx(Math.max(1, end) - 1) + 1,
    attrs,
    staves: staves.map((evs) => evs.filter((e) => e.dur > 0)),
    ...(plain ? {} : { lanes }),
    ...(labels.some(Boolean) && clefs.length > 1 ? { labels } : {}),
    spans,
    v: 2,
    updated: Date.now(),
  }
  return normalized(s)
}

const KIND_TEXT: Record<string, string> = {
  major: '', minor: 'm', augmented: '+', diminished: 'dim', dominant: '7', 'major-seventh': 'maj7', 'minor-seventh': 'm7',
  'diminished-seventh': 'dim7', 'augmented-seventh': '+7', 'half-diminished': 'm7b5', 'major-minor': 'm(maj7)', 'major-sixth': '6',
  'minor-sixth': 'm6', 'dominant-ninth': '9', 'major-ninth': 'maj9', 'minor-ninth': 'm9', 'suspended-fourth': 'sus4', 'suspended-second': 'sus2',
  power: '5', none: '',
}

/** .mxl is a zip: read its container to find the score, inflate it with the browser's own decompressor. */
export async function unzipMxl(buf: ArrayBuffer): Promise<string> {
  const v = new DataView(buf)
  const files = new Map<string, Uint8Array>()
  let eocd = -1
  for (let i = buf.byteLength - 22; i >= Math.max(0, buf.byteLength - 65557); i--) if (v.getUint32(i, true) === 0x06054b50) { eocd = i; break }
  if (eocd < 0) throw new Error('Tệp .mxl hỏng.')
  let p = v.getUint32(eocd + 16, true)
  const n = v.getUint16(eocd + 10, true)
  for (let i = 0; i < n; i++) {
    const method = v.getUint16(p + 10, true)
    const size = v.getUint32(p + 20, true)
    const nameLen = v.getUint16(p + 28, true)
    const extra = v.getUint16(p + 30, true)
    const comment = v.getUint16(p + 32, true)
    const local = v.getUint32(p + 42, true)
    const name = new TextDecoder().decode(new Uint8Array(buf, p + 46, nameLen))
    const dataAt = local + 30 + v.getUint16(local + 26, true) + v.getUint16(local + 28, true)
    const raw = new Uint8Array(buf, dataAt, size)
    files.set(name, method === 0 ? raw : new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer()))
    p += 46 + nameLen + extra + comment
  }
  const text = (u?: Uint8Array) => (u ? new TextDecoder().decode(u) : '')
  const root = /full-path="([^"]+)"/.exec(text(files.get('META-INF/container.xml')))?.[1]
  const main = (root && files.get(root)) || [...files].find(([k]) => !k.startsWith('META-INF') && /\.(xml|musicxml)$/i.test(k))?.[1]
  if (!main) throw new Error('Không thấy bản nhạc trong tệp .mxl.')
  return text(main)
}

/* ---------- MIDI out: what you hear in the editor, repeats and all ---------- */

export function toMidi(s: Score): Uint8Array<ArrayBuffer> {
  const { steps } = soundOf(s)
  const PPQ = 480
  const tick = (sec: number) => Math.round(sec * PPQ * 2) // tempo 120: one second is two quarters
  const evs: { t: number; on: boolean; m: number }[] = []
  for (const st of steps) for (const m of st.midis) {
    evs.push({ t: tick(st.at), on: true, m })
    evs.push({ t: Math.max(tick(st.at) + 1, tick(st.at + st.dur) - 1), on: false, m })
  }
  evs.sort((a, b) => a.t - b.t || (a.on === b.on ? 0 : a.on ? 1 : -1))
  const out: number[] = []
  const vlq = (n: number) => {
    const bytes = [n & 0x7f]
    while ((n >>= 7)) bytes.unshift((n & 0x7f) | 0x80)
    out.push(...bytes)
  }
  const name = new TextEncoder().encode(s.title)
  vlq(0)
  out.push(0xff, 0x03)
  vlq(name.length)
  out.push(...name)
  out.push(0, 0xff, 0x51, 0x03, 0x07, 0xa1, 0x20) // 500 000 µs per quarter
  out.push(0, 0xc0, 0) // piano
  let last = 0
  for (const e of evs) {
    vlq(e.t - last)
    last = e.t
    out.push(e.on ? 0x90 : 0x80, e.m, e.on ? 84 : 0)
  }
  out.push(0, 0xff, 0x2f, 0)
  const head = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, PPQ >> 8, PPQ & 0xff]
  const len = out.length
  return new Uint8Array([...head, 0x4d, 0x54, 0x72, 0x6b, (len >>> 24) & 0xff, (len >>> 16) & 0xff, (len >>> 8) & 0xff, len & 0xff, ...out])
}

export const fileName = (s: Score, ext: string) => `${s.title.replace(/[\\/:*?"<>|]+/g, ' ').trim() || 'ban-nhac'}.${ext}`
