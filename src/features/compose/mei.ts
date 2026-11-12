import { dn, lanesOf, layout, meter, midiOf, piecesIn, sigAlter, type Bar, type Clef, type Ev, type Jump, type Meter, type Score } from './model'

/** What a drawn element stands for: the event it belongs to and the stretch of time it covers. */
/** `staff` is the lane (a voice on a staff, the index into `Score.staves`); `phys` the staff it is drawn on. */
export type PieceInfo = { staff: number; phys: number; evId: string; start: number; dur: number; note?: number; bar: number }

const CLEF: Record<Clef, [string, number]> = { treble: ['G', 2], treble8: ['G', 2], bass: ['F', 4], alto: ['C', 3], tenor: ['C', 4] }
const DIS = (c: Clef, pre = 'clef.') => (c === 'treble8' ? ` ${pre}dis="8" ${pre}dis.place="below"` : '')
const ACCID: Record<number, string> = { [-2]: 'ff', [-1]: 'f', 0: 'n', 1: 's', 2: 'x' }
const sigAttr = (k: number) => (k === 0 ? '0' : k > 0 ? `${k}s` : `${-k}f`)

/**
 * The score as MEI for Verovio. Every drawn note, chord and rest carries an id (`ev`, then `ev_1`, `ev_2`… for the
 * tied pieces of an event split at bar lines or into written values; `…-j` for the j-th note of a chord), and `pieces`
 * says what each id stands for — the editor maps a tapped element back to the event through it.
 */
export function toMei(s: Score): { mei: string; pieces: Map<string, PieceInfo> } {
  const bars = layout(s)
  const pieces = new Map<string, PieceInfo>()
  // per staff, per bar: the layer's XML
  const lanes = lanesOf(s)
  const phys = (lane: number) => lanes[lane]?.staff ?? lane
  // what each voice writes in each bar, in order; beams are added once a bar is complete (beamed)
  const layers: Item[][][] = s.staves.map(() => bars.map(() => []))
  const meters = bars.map((b) => meter(b.time))
  // the written values of one bar-slice of an event: tuplet notes as they look, others grouped by the meter
  const piecesOf = (ev: Ev, sg: { bar: number; start: number; len: number }) => piecesIn(ev, bars[sg.bar], sg.start, sg.len, meters[sg.bar])
  // control events (dynamics, ornaments, slurs, text…) go after the staves of the bar where they start
  const ctrl: string[] = bars.map(() => '')
  const firstBar = new Map<string, number>()
  const lastPiece = new Map<string, string>()

  s.staves.forEach((evs, st) => {
    // accidentals shown so far in the bar, by staff position
    let shown = new Map<number, number>()
    let shownBar = -1
    evs.forEach((ev, ei) => {
      const prev = evs[ei - 1]
      const next = evs[ei + 1]
      const segs = segments(ev, bars)
      let k = 0
      const count = segs.reduce((n, sg) => n + piecesOf(ev, sg).length, 0)
      if (ev.tup && prev?.tup?.g !== ev.tup.g) layers[st][segs[0].bar].push({ xml: `<tuplet num="${ev.tup.n}" numbase="${ev.tup.base}">`, mark: 'open' })
      for (const sg of segs) {
        const bar = bars[sg.bar]
        if (sg.bar !== shownBar) {
          shown = new Map()
          shownBar = sg.bar
        }
        // a rest filling a whole bar is drawn as a bar rest
        if (!firstBar.has(ev.id)) firstBar.set(ev.id, sg.bar)
        if (!ev.notes.length && !ev.tup && sg.start === bar.start && sg.len === bar.len) {
          const id = k === 0 ? ev.id : `${ev.id}_${k}`
          pieces.set(id, { staff: st, phys: phys(st), evId: ev.id, start: sg.start, dur: sg.len, bar: sg.bar })
          layers[st][sg.bar].push({ xml: `<mRest xml:id="${id}"/>` })
          k += piecesOf(ev, sg).length
          continue
        }
        let t = sg.start
        for (const p of piecesOf(ev, sg)) {
          const id = k === 0 ? ev.id : `${ev.id}_${k}`
          const dur = `dur="${p.dur}"${p.dots ? ` dots="${p.dots}"` : ''}`
          const real = ev.tup ? (p.ticks * ev.tup.base) / ev.tup.n : p.ticks
          pieces.set(id, { staff: st, phys: phys(st), evId: ev.id, start: t, dur: real, bar: sg.bar })
          lastPiece.set(ev.id, id)
          const artic = k === 0 && ev.artic?.length ? ` artic="${ev.artic.join(' ')}"` : ''
          if (!ev.notes.length) layers[st][sg.bar].push({ xml: `<rest xml:id="${id}" ${dur}/>` })
          else {
            const notes = ev.notes.map((n, j) => {
              const incoming = k > 0 || (!!prev && prev.start + prev.dur === ev.start && prev.notes.some((x) => x.tie && midiOf(x) === midiOf(n)))
              const outgoing = k < count - 1 || (!!n.tie && !!next && next.start === ev.start + ev.dur && next.notes.some((x) => midiOf(x) === midiOf(n)))
              const tie = incoming && outgoing ? ' tie="m"' : outgoing ? ' tie="i"' : incoming ? ' tie="t"' : ''
              const pos = dn(n)
              const was = shown.get(pos) ?? sigAlter(bar.key, n.step)
              let acc = ''
              if (!incoming && was !== n.alter) acc = ` accid="${ACCID[n.alter]}"`
              else if (n.alter) acc = ` accid.ges="${ACCID[n.alter]}"`
              shown.set(pos, n.alter)
              const nid = ev.notes.length > 1 ? `${id}-${j}` : id
              if (ev.notes.length > 1) pieces.set(nid, { staff: st, phys: phys(st), evId: ev.id, start: t, dur: p.ticks, note: j, bar: sg.bar })
              // the lyric sits on the first note of the event's first piece; a hyphen joins it to the next syllable
              const verse = k === 0 && j === 0 && ev.lyric?.text ? `<verse n="1"><syl${sylAttrs(ev, evs.slice(0, ei))}>${esc(ev.lyric.text)}</syl></verse>` : ''
              return `<note xml:id="${nid}" pname="${'cdefgab'[n.step]}" oct="${n.oct}"${acc}${tie}${ev.notes.length > 1 ? '' : ` ${dur}${artic}`}${ev.draft ? ' color="#9a968f"' : ''}>${verse}</note>`
            })
            layers[st][sg.bar].push({
              xml: ev.notes.length > 1 ? `<chord xml:id="${id}" ${dur}${artic}>${notes.join('')}</chord>` : notes[0],
              beam: p.dur >= 8 ? { t: t - bar.start, eighth: p.dur === 8 && !p.dots && !ev.tup, tup: ev.tup?.g } : undefined,
            })
          }
          t += real
          k++
        }
      }
      if (ev.tup && next?.tup?.g !== ev.tup.g) layers[st][segs[segs.length - 1].bar].push({ xml: '</tuplet>', mark: 'close' })
    })
  })

  // marks that hang on an event: written in the bar where the event starts, pointing at its first drawn piece
  s.staves.forEach((evs, st) => {
    for (const ev of evs) {
      const bar = firstBar.get(ev.id)
      if (bar === undefined || (!ev.notes.length && !ev.harm)) continue
      const at = `startid="#${ev.id}" staff="${phys(st) + 1}"`
      if (ev.harm) ctrl[bar] += `<harm ${at} place="above">${esc(chordText(ev.harm))}</harm>`
      if (ev.fermata) ctrl[bar] += `<fermata ${at}/>`
      if (ev.orn === 'trill') ctrl[bar] += `<trill ${at}/>`
      if (ev.orn === 'mordent') ctrl[bar] += `<mordent ${at} form="lower"/>`
      if (ev.orn === 'mordentInv') ctrl[bar] += `<mordent ${at} form="upper"/>`
      if (ev.orn === 'turn') ctrl[bar] += `<turn ${at}/>`
      if (ev.arpeg && ev.notes.length > 1) ctrl[bar] += `<arpeg plist="#${ev.id}"/>`
      if (ev.dyn) ctrl[bar] += `<dynam ${at} place="below">${ev.dyn}</dynam>`
      if (ev.text?.kind === 'tempo') ctrl[bar] += `<tempo ${at} place="above">${esc(ev.text.text)}</tempo>`
      if (ev.text?.kind === 'expr') ctrl[bar] += `<dir ${at} place="above"><rend fontstyle="italic">${esc(ev.text.text)}</rend></dir>`
    }
  })
  for (const sp of s.spans ?? []) {
    const bar = firstBar.get(sp.from)
    const end = lastPiece.get(sp.to)
    if (bar === undefined || !end) continue
    const ends = `startid="#${sp.from}" endid="#${end}" staff="${phys(sp.staff) + 1}"`
    ctrl[bar] += sp.kind === 'slur' ? `<slur ${ends}/>` : `<hairpin ${ends} form="${sp.kind}" place="below"/>`
  }

  const grand = s.clefs.length > 1
  const choir = !!s.labels?.length
  const staffDefs = s.clefs
    .map((c, i) => `<staffDef n="${i + 1}" lines="5" clef.shape="${CLEF[c][0]}" clef.line="${CLEF[c][1]}"${DIS(c)}>${s.labels?.[i] ? `<label>${esc(s.labels[i])}</label>` : ''}</staffDef>`)
    .join('')
  let body = ''
  bars.forEach((b, i) => {
    const prev = bars[i - 1]
    if (prev && (prev.key !== b.key || prev.time[0] !== b.time[0] || prev.time[1] !== b.time[1])) {
      body += `<scoreDef${prev.key !== b.key ? ` key.sig="${sigAttr(b.key)}"` : ''}${prev.time !== b.time ? ` meter.count="${b.time[0]}" meter.unit="${b.time[1]}"` : ''}/>`
    }
    const attrs = `${b.left ? ` left="${b.left}"` : ''}${b.right && b.right !== 'single' ? ` right="${b.right}"` : ''}`
    body += `<measure n="${i + 1}" xml:id="m${i}"${attrs}>`
    s.clefs.forEach((_, st) => {
      const clefChange = prev && prev.clefs[st] !== b.clefs[st] ? `<clef shape="${CLEF[b.clefs[st]][0]}" line="${CLEF[b.clefs[st]][1]}"${DIS(b.clefs[st], '')}/>` : ''
      // the voices of this staff; a second voice with nothing in the bar is left blank, not filled with rests
      const voices = lanes.map((l, lane) => ({ ...l, lane })).filter((l) => l.staff === st).sort((a, c) => a.voice - c.voice)
      body += `<staff n="${st + 1}">`
      for (const v of voices) {
        const xml = beamed(layers[v.lane][i], meters[i])
        const empty = v.voice > 1 && !/<note|<chord/.test(xml)
        body += `<layer n="${v.voice}">${v.voice === voices[0].voice ? clefChange : ''}${empty ? '<mSpace/>' : xml}</layer>`
      }
      body += '</staff>'
    })
    body += ctrl[i] + navigation(s.attrs[i], b)
    body += '</measure>'
  })
  const mei =
    `<?xml version="1.0" encoding="UTF-8"?><mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="5.0"><meiHead><fileDesc><titleStmt><title>${esc(s.title)}</title></titleStmt><pubStmt/></fileDesc></meiHead>` +
    `<music><body><mdiv><score><scoreDef meter.count="${s.time[0]}" meter.unit="${s.time[1]}" key.sig="${sigAttr(s.key)}">` +
    `<staffGrp${grand ? (choir ? ' symbol="bracket" bar.thru="false"' : ' symbol="brace" bar.thru="true"') : ''}>${staffDefs}</staffGrp></scoreDef><section>${body}</section></score></mdiv></body></music></mei>`
  return { mei, pieces }
}

type Item = { xml: string; mark?: 'open' | 'close'; beam?: { t: number; eighth: boolean; tup?: string } }

/**
 * A bar of one voice with its beams: eighths and shorter are beamed beat by beat (a tuplet as a whole); a rest, a
 * longer note or a tuplet's edge breaks a beam. Where half a bar of 4/4, or a whole bar of 2/4 or 3/4, is nothing but
 * plain eighths, they are beamed as one group, as engravers do.
 */
function beamed(items: Item[], m: Meter): string {
  const beatOf = (t: number) => m.beats.findIndex(([b0, b1]) => t >= b0 && t < b1)
  const keys = items.map((it) => (it.beam ? (it.beam.tup ? `t${it.beam.tup}` : `b${beatOf(it.beam.t)}`) : null))
  m.wide.forEach(([w0, w1], wi) => {
    if (w1 - w0 <= (m.beats[0][1] - m.beats[0][0])) return
    const inside = items.map((it, i) => ({ it, i })).filter(({ it }) => it.beam && it.beam.t >= w0 && it.beam.t < w1)
    if (inside.length * 120 === w1 - w0 && inside.every(({ it }) => it.beam!.eighth) && inside.every(({ i }, j) => j === 0 || i === inside[j - 1].i + 1))
      for (const { i } of inside) keys[i] = `w${wi}`
  })
  let out = ''
  let i = 0
  while (i < items.length) {
    let j = i
    while (keys[i] && j + 1 < items.length && keys[j + 1] === keys[i]) j++
    const run = items.slice(i, j + 1).map((x) => x.xml).join('')
    out += j > i ? `<beam>${run}</beam>` : run
    i = j + 1
  }
  return out
}

/** An event cut at the bar lines it crosses. */
export function segments(ev: Ev, bars: Bar[]) {
  const out: { bar: number; start: number; len: number }[] = []
  let t = ev.start
  const end = ev.start + ev.dur
  for (const b of bars) {
    if (t >= end) break
    const bEnd = b.start + b.len
    if (bEnd <= t) continue
    const len = Math.min(end, bEnd) - t
    out.push({ bar: b.index, start: t, len })
    t += len
  }
  return out
}

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const JUMP_TEXT: Record<Jump, string> = {
  fine: 'Fine',
  dc: 'D.C.',
  dcfine: 'D.C. al Fine',
  dccoda: 'D.C. al Coda',
  ds: 'D.S.',
  dsfine: 'D.S. al Fine',
  dscoda: 'D.S. al Coda',
  tocoda: 'To Coda',
}
/** Segno and coda at the start of a bar; Fine, D.C., D.S. and To Coda at its end. */
function navigation(a: Score['attrs'][number] | undefined, b: Bar): string {
  if (!a) return ''
  const endBeat = b.time[0] + 0.99
  let out = ''
  if (a.segno) out += '<repeatMark func="segno" tstamp="1" staff="1" place="above"/>'
  if (a.coda) out += '<repeatMark func="coda" tstamp="1" staff="1" place="above"/>'
  if (a.jump === 'fine') out += `<repeatMark func="fine" tstamp="${endBeat}" staff="1" place="above"/>`
  else if (a.jump === 'tocoda') out += `<dir tstamp="${endBeat}" staff="1" place="above"><rend fontstyle="italic">To Coda</rend></dir><repeatMark func="coda" tstamp="${endBeat}" staff="1" place="above"/>`
  else if (a.jump) out += `<dir tstamp="${endBeat}" staff="1" place="above"><rend fontstyle="italic">${JUMP_TEXT[a.jump]}</rend></dir>`
  return out
}

/** Chord symbols as typed (Bb7, F#m7b5) with real flat and sharp signs. */
export const chordText = (t: string) => t.replace(/(?<=^[A-G])b|(?<=[0-9(/])b(?=[0-9])|(?<=\/[A-G])b/g, '♭').replace(/#/g, '♯')

/** Where a syllable sits in its word, from whether it and the syllable before it carry a hyphen. */
function sylAttrs(ev: Ev, before: Ev[]): string {
  const prev = [...before].reverse().find((e) => e.lyric?.text)
  const joinedFrom = !!prev?.lyric?.hyph
  const joinsOn = !!ev.lyric?.hyph
  if (joinsOn) return ` con="d" wordpos="${joinedFrom ? 'm' : 'i'}"`
  return joinedFrom ? ' wordpos="t"' : ''
}
