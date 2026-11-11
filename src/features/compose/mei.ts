import { dn, layout, midiOf, sigAlter, spell, type Bar, type Clef, type Ev, type Score } from './model'

/** What a drawn element stands for: the event it belongs to and the stretch of time it covers. */
export type PieceInfo = { staff: number; evId: string; start: number; dur: number; note?: number; bar: number }

const CLEF: Record<Clef, [string, number]> = { treble: ['G', 2], bass: ['F', 4], alto: ['C', 3], tenor: ['C', 4] }
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
  const layers: string[][] = s.staves.map(() => bars.map(() => ''))

  s.staves.forEach((evs, st) => {
    // accidentals shown so far in the bar, by staff position
    let shown = new Map<number, number>()
    let shownBar = -1
    evs.forEach((ev, ei) => {
      const prev = evs[ei - 1]
      const next = evs[ei + 1]
      const segs = segments(ev, bars)
      let k = 0
      const count = segs.reduce((n, sg) => n + spell(sg.len).length, 0)
      for (const sg of segs) {
        const bar = bars[sg.bar]
        if (sg.bar !== shownBar) {
          shown = new Map()
          shownBar = sg.bar
        }
        // a rest filling a whole bar is drawn as a bar rest
        if (!ev.notes.length && sg.start === bar.start && sg.len === bar.len) {
          const id = k === 0 ? ev.id : `${ev.id}_${k}`
          pieces.set(id, { staff: st, evId: ev.id, start: sg.start, dur: sg.len, bar: sg.bar })
          layers[st][sg.bar] += `<mRest xml:id="${id}"/>`
          k += spell(sg.len).length
          continue
        }
        let t = sg.start
        for (const p of spell(sg.len)) {
          const id = k === 0 ? ev.id : `${ev.id}_${k}`
          const dur = `dur="${p.dur}"${p.dots ? ` dots="${p.dots}"` : ''}`
          pieces.set(id, { staff: st, evId: ev.id, start: t, dur: p.ticks, bar: sg.bar })
          if (!ev.notes.length) layers[st][sg.bar] += `<rest xml:id="${id}" ${dur}/>`
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
              if (ev.notes.length > 1) pieces.set(nid, { staff: st, evId: ev.id, start: t, dur: p.ticks, note: j, bar: sg.bar })
              return `<note xml:id="${nid}" pname="${'cdefgab'[n.step]}" oct="${n.oct}"${acc}${tie}${ev.notes.length > 1 ? '' : ` ${dur}`}/>`
            })
            layers[st][sg.bar] += ev.notes.length > 1 ? `<chord xml:id="${id}" ${dur}>${notes.join('')}</chord>` : notes[0]
          }
          t += p.ticks
          k++
        }
      }
    })
  })

  const grand = s.staves.length > 1
  const staffDefs = s.clefs.map((c, i) => `<staffDef n="${i + 1}" lines="5" clef.shape="${CLEF[c][0]}" clef.line="${CLEF[c][1]}"/>`).join('')
  let body = ''
  bars.forEach((b, i) => {
    const prev = bars[i - 1]
    if (prev && (prev.key !== b.key || prev.time[0] !== b.time[0] || prev.time[1] !== b.time[1])) {
      body += `<scoreDef${prev.key !== b.key ? ` key.sig="${sigAttr(b.key)}"` : ''}${prev.time !== b.time ? ` meter.count="${b.time[0]}" meter.unit="${b.time[1]}"` : ''}/>`
    }
    const attrs = `${b.left ? ` left="${b.left}"` : ''}${b.right && b.right !== 'single' ? ` right="${b.right}"` : ''}`
    body += `<measure n="${i + 1}" xml:id="m${i}"${attrs}>`
    s.staves.forEach((_, st) => {
      const clefChange = prev && prev.clefs[st] !== b.clefs[st] ? `<clef shape="${CLEF[b.clefs[st]][0]}" line="${CLEF[b.clefs[st]][1]}"/>` : ''
      body += `<staff n="${st + 1}"><layer n="1">${clefChange}${layers[st][i]}</layer></staff>`
    })
    body += '</measure>'
  })
  const mei =
    `<?xml version="1.0" encoding="UTF-8"?><mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="5.0"><meiHead><fileDesc><titleStmt><title/></titleStmt><pubStmt/></fileDesc></meiHead>` +
    `<music><body><mdiv><score><scoreDef meter.count="${s.time[0]}" meter.unit="${s.time[1]}" key.sig="${sigAttr(s.key)}">` +
    `<staffGrp${grand ? ' symbol="brace" bar.thru="true"' : ''}>${staffDefs}</staffGrp></scoreDef><section>${body}</section></score></mdiv></body></music></mei>`
  return { mei, pieces }
}

/** An event cut at the bar lines it crosses. */
function segments(ev: Ev, bars: Bar[]) {
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
