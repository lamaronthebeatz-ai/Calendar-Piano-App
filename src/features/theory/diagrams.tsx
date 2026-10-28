import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type KeyboardEvent as ReactKeyboardEvent, type ReactElement, type ReactNode, type RefObject } from 'react'
import { LETTERS, NOTE_RE, parseNote, PITCH_CLASS } from './notation'
import { playNow, type Step } from './audio'
import { lightStep, reducedMotion, usePlayer, useReveal } from './musicMotion'

/** Theory diagrams drawn in SVG so they stay crisp, offline and theme-aware. */

const INK = 'var(--color-ink)'
const ACCENT = 'var(--color-accent)'

const MUSIC_FONT = "'Noto Music', 'Segoe UI Symbol', 'Apple Symbols', serif"

/** Stagger delay for entrance animations, capped so long charts don't keep the reader waiting. */
const delay = (i: number, step = 60, base = 0) => ({ '--d': `${base + Math.min(i * step, 1400)}ms` }) as CSSProperties

function PlayButton({ playing, onClick, label = 'Nghe' }: { playing: boolean; onClick: () => void; label?: string }) {
  return (
    <button type="button" onClick={onClick} className="mm-play print:hidden" aria-pressed={playing} aria-label={playing ? 'Dừng' : `${label} ví dụ`}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {playing ? <rect x="5" y="5" width="14" height="14" rx="2" /> : <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />}
      </svg>
      {playing ? 'Dừng' : label}
    </button>
  )
}

/** Piano keyboard; highlighted keys are filled with the accent colour. Keys sound when pressed (or swept across). */
export function Keyboard({ notes }: { notes: string[] }) {
  const parsed = notes.map(parseNote).filter((n) => n !== null)
  const lit = new Set(parsed.map((n) => n.midi))
  const octaves = parsed.map((n) => n.octave)
  const low = octaves.length ? Math.min(...octaves) : 4
  const count = octaves.length ? Math.max(...octaves) - low + 1 : 1
  const W = 24
  const whites = Array.from({ length: count * 7 }, (_, i) => ({
    x: i * W,
    letter: LETTERS[i % 7],
    midi: 12 * (low + 1 + Math.floor(i / 7)) + PITCH_CLASS[i % 7],
  }))
  // A black key sits after every white key except E and B.
  const blacks = whites.filter((w) => w.letter !== 'E' && w.letter !== 'B').map((w) => ({ x: w.x + W - 7, midi: w.midi + 1 }))
  const uid = useId().replace(/:/g, '')
  const svg = useRef<SVGSVGElement>(null)
  const held = useRef<number | null>(null)
  const { playing, toggle } = usePlayer()

  const keyAt = (x: number, y: number) => (document.elementFromPoint(x, y)?.closest('[data-midi]') as SVGGElement | null) ?? null
  const press = (key: SVGGElement | null, e: ReactPointerEvent) => {
    const midi = Number(key?.dataset.midi)
    if (!key || !svg.current || midi === held.current) return
    release()
    held.current = midi
    key.classList.add('is-down')
    playNow([midi])
    if (reducedMotion()) return
    // Ripple from the touch point, clipped to the key.
    const pt = svg.current.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const p = pt.matrixTransform(svg.current.getScreenCTM()?.inverse())
    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    ring.setAttribute('cx', String(p.x))
    ring.setAttribute('cy', String(p.y))
    ring.setAttribute('r', '16')
    ring.setAttribute('class', 'mm-ripple')
    ring.addEventListener('animationend', () => ring.remove())
    key.querySelector('.mm-ripples')?.appendChild(ring)
  }
  const release = () => {
    svg.current?.querySelectorAll('.is-down').forEach((k) => k.classList.remove('is-down'))
    held.current = null
  }
  const onDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    press(keyAt(e.clientX, e.clientY), e)
  }
  const onMove = (e: ReactPointerEvent<SVGSVGElement>) => held.current !== null && press(keyAt(e.clientX, e.clientY), e)

  const play = () => {
    const sorted = [...lit].sort((a, b) => a - b)
    const steps: Step[] = sorted.map((m, i) => ({ at: i * 0.32, dur: 0.6, midis: [m] }))
    if (sorted.length > 1) steps.push({ at: sorted.length * 0.32 + 0.1, dur: 1.6, midis: sorted })
    toggle(steps, {
      onStep: (i) => {
        svg.current?.querySelectorAll('.is-on').forEach((k) => k.classList.remove('is-on'))
        steps[i]?.midis?.forEach((m) => svg.current?.querySelector(`[data-midi="${m}"]`)?.classList.add('is-on'))
      },
    })
  }

  const key = (k: { x: number; midi: number }, black: boolean, label?: string) => (
    <g key={k.midi} data-midi={k.midi} className="mm-key">
      <clipPath id={`${uid}k${k.midi}`}>
        <rect x={k.x} y={0} width={black ? 14 : W} height={black ? 74 : 120} rx={black ? 2 : 3} />
      </clipPath>
      <g className="mm-key-face">
        <rect x={k.x} y={0} width={black ? 14 : W} height={black ? 74 : 120} rx={black ? 2 : 3} fill={lit.has(k.midi) ? ACCENT : black ? '#222' : '#fff'} stroke={black ? '#222' : '#8a8478'} />
        <rect className="mm-key-glow" x={k.x} y={0} width={black ? 14 : W} height={black ? 74 : 120} rx={black ? 2 : 3} />
        <g className="mm-ripples" clipPath={`url(#${uid}k${k.midi})`} />
        {label && (
          <text x={k.x + W / 2} y={110} textAnchor="middle" fontSize={10} fill={lit.has(k.midi) ? 'var(--color-accent-ink)' : '#8a8478'} pointerEvents="none">
            {label}
          </text>
        )}
      </g>
    </g>
  )

  return (
    <div className="mm-playable">
      <svg
        ref={svg}
        viewBox={`-1 -1 ${count * 7 * W + 2} 122`}
        className="mm-keyboard w-full"
        style={{ maxWidth: count * 7 * W * 1.4 }}
        role="img"
        aria-label={`Bàn phím: ${notes.join(', ')}`}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={release}
        onPointerCancel={release}
        onLostPointerCapture={release}
      >
        {whites.map((k) => key(k, false, k.letter))}
        {blacks.map((k) => key(k, true))}
      </svg>
      {lit.size > 0 && <PlayButton playing={playing} onClick={play} />}
    </div>
  )
}

const CLEFS = {
  // base: diatonic index of the bottom line (E4 / G2 / F3); glyph metrics are tuned per clef.
  treble: { base: 30, glyph: '𝄞', size: 58, dy: 9, sig: 0 },
  bass: { base: 18, glyph: '𝄢', size: 38, dy: -13, sig: -14 },
  alto: { base: 24, glyph: '𝄡', size: 41, dy: 0, sig: -7 },
}
export type Clef = keyof typeof CLEFS

// Key-signature accidentals in order, as diatonic indices on the treble staff (F5 C5 G5 D5 A4 E5 B4 / B4 E5 A4 D5 G4 C5 F4).
const SHARPS = [38, 35, 39, 36, 33, 37, 34]
const FLATS = [34, 37, 33, 36, 32, 35, 31]


/** "C4+E4+G4=V7/V" → notes and an optional label (underscores read as spaces). */
const parseColumn = (column: string) => {
  const [notes, label] = column.split('=')
  return { notes: notes ? notes.split('+').map(parseNote).filter((n) => n !== null) : [], label: label?.replace(/_/g, ' ') }
}
type Column = ReturnType<typeof parseColumn>

const GAP = 10
const SIG_W = 9

/** Five lines, a clef and a key signature, with the bottom line at y = bottom. */
function StaffLines({ clef, keySig, bottom, width }: { clef: Clef; keySig: number; bottom: number; width: number }) {
  const c = CLEFS[clef]
  const yOf = (pos: number) => bottom - (pos * GAP) / 2
  const sig = (keySig > 0 ? SHARPS : FLATS).slice(0, Math.abs(keySig))
  return (
    <g>
      {[0, 2, 4, 6, 8].map((p) => (
        <line key={p} x1={0} x2={width} y1={yOf(p)} y2={yOf(p)} stroke={INK} strokeWidth={1} />
      ))}
      <text x={4} y={bottom + c.dy} fontSize={c.size} fill={INK} fontFamily={MUSIC_FONT}>
        {c.glyph}
      </text>
      {sig.map((d, i) => (
        <text key={i} x={48 + i * SIG_W} y={yOf(d + c.sig - c.base) + 5} fontSize={15} fill={INK}>
          {keySig > 0 ? '♯' : '♭'}
        </text>
      ))}
    </g>
  )
}

/** Accidentals of a chord, top down: each goes in the first column (0 = nearest the notes) whose last accidental is a sixth or more above. */
function accidentalColumns(col: Column, clef: Clef) {
  const out = new Map<number, number>()
  const columns: number[] = []
  const order = col.notes.map((n, i) => ({ p: n.diatonic - CLEFS[clef].base, i })).sort((a, b) => b.p - a.p)
  for (const { p, i } of order) {
    if (!col.notes[i].accidental) continue
    let c = columns.findIndex((last) => last - p >= 6)
    if (c < 0) c = columns.push(p) - 1
    else columns[c] = p
    out.set(i, c)
  }
  return out
}
/** Extra room a column needs on its left for stacked accidentals. */
const accidentalPad = (col: Column, clef: Clef) => Math.max(0, ...accidentalColumns(col, clef).values()) * 10

/** Whole notes of one column (a single note or a chord), with ledger lines and accidentals. */
function Notes({ col, x, clef, bottom }: { col: Column; x: number; clef: Clef; bottom: number }) {
  const yOf = (pos: number) => bottom - (pos * GAP) / 2
  const positions = col.notes.map((n) => n.diatonic - CLEFS[clef].base)
  const ledgers = []
  for (let p = -2; p >= Math.min(...positions); p -= 2) ledgers.push(p)
  for (let p = 10; p <= Math.max(...positions); p += 2) ledgers.push(p)
  // Seconds in a chord: put the upper note on the other side of the stem line so the heads don't overlap.
  const sorted = positions.map((p, i) => ({ p, i })).sort((a, b) => a.p - b.p)
  const shifted = new Set<number>()
  sorted.forEach(({ p, i }, k) => k > 0 && p - sorted[k - 1].p === 1 && !shifted.has(sorted[k - 1].i) && shifted.add(i))
  const acc = accidentalColumns(col, clef)
  return (
    <g>
      {ledgers.map((p) => (
        <line key={p} x1={x - 10} x2={x + 10} y1={yOf(p)} y2={yOf(p)} stroke={INK} />
      ))}
      {col.notes.map((n, j) => {
        const cx = shifted.has(j) ? x + 12 : x
        return (
          <g key={j}>
            <ellipse cx={cx} cy={yOf(positions[j])} rx={6.5} ry={4.6} transform={`rotate(-20 ${cx} ${yOf(positions[j])})`} fill="none" stroke={ACCENT} strokeWidth={2} />
            {n.accidental && (
              <text x={x - 18 - (acc.get(j) ?? 0) * 10} y={yOf(positions[j]) + 5} fontSize={15} fill={ACCENT} fontFamily={n.accidental.length > 1 ? MUSIC_FONT : undefined}>
                {n.accidental}
              </text>
            )}
          </g>
        )
      })}
    </g>
  )
}

/** "C#5" → "C♯5", "Fn3" → "F♮3". */
const prettyNote = (n: string) => n.replace(/^([A-G])(##|bb|#|b|n)/, (_, l: string, a: string) => l + ({ '#': '♯', b: '♭', '##': '𝄪', bb: '𝄫', n: '♮' } as Record<string, string>)[a])

/** Column spacing wide enough for the longest label (about 6 units per character at the label's font size). */
const columnStep = (labels: (string | undefined)[], min: number) => Math.max(min, ...labels.map((l) => (l ? l.length * 6.2 + 8 : 0)))

const Label = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <text x={x} y={y} textAnchor="middle" fontSize={10.5} fill="var(--color-ink-muted)">
    {text}
  </text>
)

const NOTE_GAP = 0.62

/**
 * Plays whole-note columns one after another (they carry no rhythm, so they are evenly spaced), lighting each
 * column and sliding a playhead between them.
 */
function useColumnPlayer(columns: { x: number; midis: number[] }[]) {
  const svg = useRef<SVGSVGElement>(null)
  const head = useRef<SVGLineElement>(null)
  const { playing, toggle } = usePlayer()
  const play = () => {
    const steps: Step[] = columns.map((c, i) => ({ at: i * NOTE_GAP, dur: i === columns.length - 1 ? 1.6 : 0.9, midis: c.midis }))
    toggle(steps, {
      onStep: (i) => lightStep(svg.current, i),
      onFrame: (t) => {
        const i = Math.min(columns.length - 1, Math.floor(t / NOTE_GAP))
        const next = columns[i + 1] ?? columns[i]
        const x = columns[i].x + (next.x - columns[i].x) * Math.min(1, t / NOTE_GAP - i)
        head.current?.setAttribute('transform', `translate(${x} 0)`)
      },
    })
  }
  return { svg, head, playing, play }
}

const Playhead = ({ head, playing, top, bottom }: { head: RefObject<SVGLineElement | null>; playing: boolean; top: number; bottom: number }) => (
  <line ref={head} className={playing ? 'mm-playhead is-playing' : 'mm-playhead'} x1={0} x2={0} y1={top} y2={bottom} />
)

/**
 * Five-line staff of whole notes. Columns: "C4", "C4+E4+G4" (chord), optional "=label" shown underneath
 * (e.g. a Roman numeral; underscores become spaces); "/" draws a barline. An optional "k:3#" / "k:2b" adds a key signature.
 */
export function Staff({ clef: clefArg, keySig = 0, notes, image }: { clef: Clef; keySig?: number; notes: string[]; image?: ReactNode }) {
  const clef = clefArg in CLEFS ? clefArg : 'treble'
  const cols = notes.map(parseColumn)
  const step = columnStep(cols.map((c) => c.label), 32)
  // "/" is a barline: it takes a narrow slot of its own.
  const xs: number[] = []
  let x = 70 + Math.abs(keySig) * SIG_W
  notes.forEach((n, i) => {
    if (n !== '/') x += accidentalPad(cols[i], clef)
    xs.push(n === '/' ? x - step / 2 + 8 : x)
    x += n === '/' ? 16 : step
  })
  const width = x - step / 2 + 18
  // Push the labels below the lowest note head (ledger notes under the staff would otherwise collide with them).
  const lowest = Math.min(0, ...cols.flatMap((c) => c.notes.map((n) => n.diatonic - CLEFS[clef].base)))
  const labelY = Math.max(104, 70 - (lowest * GAP) / 2 + 15)
  const sounding = cols.map((c, i) => ({ x: xs[i], midis: c.notes.map((n) => n.midi) })).filter((c, i) => notes[i] !== '/' && c.midis.length)
  const { svg, head, playing, play } = useColumnPlayer(sounding)
  let n = 0
  return (
    <div className="mm-playable">
      {image ?? (
      <svg ref={svg} viewBox={`0 0 ${width} ${labelY + 6}`} className="w-full" style={{ maxWidth: width * 1.5 }} role="img" aria-label={`Khuông nhạc: ${notes.join(', ')}`}>
        <StaffLines clef={clef} keySig={keySig} bottom={70} width={width} />
        <Playhead head={head} playing={playing} top={18} bottom={82} />
        {cols.map((col, i) => {
          if (notes[i] === '/') return <line key={i} x1={xs[i]} x2={xs[i]} y1={30} y2={70} stroke={INK} />
          const text = col.label ?? (col.notes.length === 1 ? prettyNote(notes[i]) : undefined)
          return (
            <g key={i} className="mm-col" data-step={col.notes.length ? n++ : undefined}>
              <Notes col={col} x={xs[i]} clef={clef} bottom={70} />
              {text && <Label x={xs[i]} y={labelY} text={text} />}
            </g>
          )
        })}
      </svg>)}
      {sounding.length > 0 && <PlayButton playing={playing} onClick={play} />}
    </div>
  )
}

/** Grand staff (treble over bass) of whole-note columns "upper/lower=label", e.g. "E5+C5/C3+G3=I". */
export function GrandStaff({ keySig = 0, columns, image }: { keySig?: number; columns: string[]; image?: ReactNode }) {
  const cols = columns.map((c) => {
    const [body, label] = c.split('=')
    const [upper = '', lower = ''] = body.split('/')
    return { upper: parseColumn(upper), lower: parseColumn(lower), label: label?.replace(/_/g, ' ') }
  })
  const step = columnStep(cols.map((c) => c.label), 34)
  const xs: number[] = []
  let x = 74 + Math.abs(keySig) * SIG_W
  for (const c of cols) {
    x += Math.max(accidentalPad(c.upper, 'treble'), accidentalPad(c.lower, 'bass'))
    xs.push(x)
    x += step
  }
  const width = x - step / 2 + 18
  const midis = cols.map((c) => [...c.upper.notes, ...c.lower.notes].map((n) => n.midi))
  const sounding = midis.map((m, i) => ({ x: xs[i], midis: m })).filter((c) => c.midis.length)
  const { svg, head, playing, play } = useColumnPlayer(sounding)
  let k = 0
  return (
    <div className="mm-playable">
      {image ?? (
      <svg ref={svg} viewBox={`0 0 ${width} 200`} className="w-full" style={{ maxWidth: width * 1.5 }} role="img" aria-label={`Khuông kép: ${columns.join(', ')}`}>
        <line x1={0.5} x2={0.5} y1={30} y2={160} stroke={INK} strokeWidth={1.5} />
        <StaffLines clef="treble" keySig={keySig} bottom={70} width={width} />
        <StaffLines clef="bass" keySig={keySig} bottom={160} width={width} />
        <Playhead head={head} playing={playing} top={18} bottom={172} />
        {cols.map((col, i) => {
          const x = xs[i]
          return (
            <g key={i} className="mm-col" data-step={midis[i].length ? k++ : undefined}>
              <Notes col={col.upper} x={x} clef="treble" bottom={70} />
              <Notes col={col.lower} x={x} clef="bass" bottom={160} />
              {col.label && <Label x={x} y={194} text={col.label} />}
            </g>
          )
        })}
      </svg>)}
      {sounding.length > 0 && <PlayButton playing={playing} onClick={play} />}
    </div>
  )
}

const DURATIONS = { w: 4, h: 2, q: 1, e: 0.5, s: 0.25 } as const
/** Seconds per quarter note when a rhythm is tapped out (♩ = 92). */
const SPB = 60 / 92
const RESTS = { w: '𝄻', h: '𝄼', q: '𝄽', e: '𝄾', s: '𝄿' } as const
/**
 * Rhythm on a one-line staff: "4/4 q e-e >q. e / h~ q rq". Notes joined by "-" are beamed; "3[e-e-e]" is a triplet;
 * "/" is a barline, "//" a final barline; ":ta" under a note shows a counting syllable.
 */
export function Rhythm({ tokens, image }: { tokens: string[]; image?: ReactNode }) {
  const Y = 50
  const TOP = 22
  let x = 12
  const items: ReactElement[] = []
  const heads: { x: number; tie: boolean }[] = []
  const steps: Step[] = []
  let beat = 0
  let tiedIn = false
  tokens.forEach((tok, ti) => {
    const meter = /^(\d+)\/(\d+)$/.exec(tok)
    if (meter) {
      items.push(
        <g key={ti} fontSize={17} fontWeight={700} fill={INK} textAnchor="middle">
          <text x={x + 6} y={Y - 3}>{meter[1]}</text>
          <text x={x + 6} y={Y + 15}>{meter[2]}</text>
        </g>,
      )
      x += 26
      return
    }
    if (tok === '/' || tok === '//') {
      items.push(<line key={ti} x1={x} x2={x} y1={Y - 14} y2={Y + 14} stroke={INK} strokeWidth={1} />)
      if (tok === '//') items.push(<line key={ti + 'b'} x1={x + 4} x2={x + 4} y1={Y - 14} y2={Y + 14} stroke={INK} strokeWidth={3} />)
      x += 14
      return
    }
    const triplet = tok.startsWith('3[')
    const group = tok.replace(/^3\[|\]$/g, '').split('-').map((n) => NOTE_RE.exec(n)).filter((m) => m !== null)
    const xs: number[] = []
    const groupStart = steps.length
    group.forEach(([, accent, rest, d, dot, tie, syl], k) => {
      const dur = d as keyof typeof DURATIONS
      const cx = x + 6
      xs.push(cx)
      const key = `${ti}-${k}`
      const out: ReactElement[] = []
      const first = steps.length
      // Triplets take two thirds of their written value; a note tied from the previous one is not struck again.
      const beats = DURATIONS[dur] * (dot ? 1.5 : 1) * (triplet ? 2 / 3 : 1)
      steps.push({ at: beat * SPB, dur: beats * SPB, tick: rest || tiedIn ? undefined : accent ? 'accent' : 'beat' })
      beat += beats
      if (!rest) tiedIn = !!tie
      if (rest) {
        out.push(<text key={key} x={cx} y={Y + (dur === 'w' ? 2 : dur === 'h' ? 6 : 10)} textAnchor="middle" fontSize={dur === 'w' || dur === 'h' ? 26 : 28} fill={INK} fontFamily={MUSIC_FONT}>{RESTS[dur]}</text>)
      } else {
        const hollow = dur === 'w' || dur === 'h'
        out.push(<ellipse key={key} cx={cx} cy={Y} rx={6} ry={4.4} transform={`rotate(-20 ${cx} ${Y})`} fill={hollow ? 'none' : ACCENT} stroke={ACCENT} strokeWidth={hollow ? 2 : 1} />)
        if (dur !== 'w') out.push(<line key={key + 's'} x1={cx + 5.4} x2={cx + 5.4} y1={Y - 2} y2={TOP} stroke={ACCENT} strokeWidth={1.3} />)
        const flags = dur === 'e' ? 1 : dur === 's' ? 2 : 0
        if (group.length === 1 || group.some((g) => g[2] || (g[3] !== 'e' && g[3] !== 's')))
          for (let f = 0; f < flags; f++)
            out.push(<path key={key + 'f' + f} d={`M${cx + 5.4} ${TOP + f * 6} q 7 5 6 14`} fill="none" stroke={ACCENT} strokeWidth={1.6} />)
        if (accent) out.push(<path key={key + 'a'} d={`M${cx - 5} ${Y + 9} L${cx + 5} ${Y + 12} L${cx - 5} ${Y + 15}`} fill="none" stroke={INK} strokeWidth={1.3} />)
        heads.push({ x: cx, tie: !!tie })
      }
      if (dot) out.push(<circle key={key + 'd'} cx={cx + 11} cy={Y - 3} r={1.8} fill={rest ? INK : ACCENT} />)
      if (syl) out.push(<text key={key + 'l'} x={cx} y={Y + 34} textAnchor="middle" fontSize={12} fill="var(--color-ink-muted)">{syl}</text>)
      items.push(<g key={key + 'g'} className="mm-note" data-step={first} style={delay(first, 45)}>{out}</g>)
      x += Math.max(18, 26 * Math.sqrt(DURATIONS[dur])) * (dot ? 1.25 : 1) + 6
    })
    const deco: ReactElement[] = []
    // Beams: the primary beam joins the whole group; a second beam joins neighbouring sixteenths (or a stub).
    const notes = group.map((m, k) => ({ d: m[3], rest: m[2], x: xs[k] + 5.4 }))
    if (group.length > 1 && notes.every((n) => !n.rest && (n.d === 'e' || n.d === 's'))) {
      deco.push(<line key={ti + 'b1'} x1={notes[0].x} x2={notes.at(-1)!.x} y1={TOP} y2={TOP} stroke={ACCENT} strokeWidth={3.5} />)
      notes.forEach((n, k) => {
        if (n.d !== 's') return
        if (notes[k + 1]?.d === 's') deco.push(<line key={`${ti}b2${k}`} x1={n.x} x2={notes[k + 1].x} y1={TOP + 6} y2={TOP + 6} stroke={ACCENT} strokeWidth={3.5} />)
        else if (notes[k - 1]?.d !== 's') deco.push(<line key={`${ti}b2${k}`} x1={n.x} x2={k === notes.length - 1 ? n.x - 8 : n.x + 8} y1={TOP + 6} y2={TOP + 6} stroke={ACCENT} strokeWidth={3.5} />)
      })
    }
    if (triplet && xs.length) {
      const [a, b] = [xs[0] - 4, xs.at(-1)! + 10]
      deco.push(
        <g key={ti + 't'} stroke={INK} fill="none" strokeWidth={1}>
          <path d={`M${a} ${TOP - 4} V${TOP - 9} H${b} V${TOP - 4}`} />
          <text x={(a + b) / 2} y={TOP - 11} textAnchor="middle" fontSize={10} fill={INK} stroke="none">3</text>
        </g>,
      )
    }
    if (deco.length) items.push(<g key={ti + 'deco'} className="mm-note" style={delay(groupStart, 45)}>{deco}</g>)
    x += 4
  })
  // Ties arc from a note to the next one.
  heads.forEach((h, i) => {
    const next = heads[i + 1]
    if (h.tie && next) items.push(<path key={'tie' + i} className="mm-note" style={delay(steps.length, 45)} d={`M${h.x + 3} ${Y + 7} Q${(h.x + next.x) / 2} ${Y + 16} ${next.x - 3} ${Y + 7}`} fill="none" stroke={ACCENT} strokeWidth={1.4} />)
  })
  const width = x + 8
  const reveal = useReveal<SVGSVGElement>()
  const { playing, toggle } = usePlayer()
  const sounding = steps.some((st) => st.tick)
  return (
    <div className="mm-playable">
      {image ?? (
      <svg ref={reveal} viewBox={`0 0 ${width} 92`} className="mm-rhythm w-full" style={{ maxWidth: width * 1.5 }} role="img" aria-label={`Tiết tấu: ${tokens.join(' ')}`}>
        <line x1={0} x2={width} y1={Y} y2={Y} stroke={INK} strokeWidth={1} />
        {items}
      </svg>)}
      {sounding && <PlayButton playing={playing} onClick={() => toggle(steps, { onStep: (i) => lightStep(reveal.current, i) })} label="Gõ nhịp" />}
    </div>
  )
}

const MAJORS = ['C', 'G', 'D', 'A', 'E', 'B', 'F♯/G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F']
const MINORS = ['a', 'e', 'b', 'f♯', 'c♯', 'g♯', 'd♯/e♭', 'b♭', 'f', 'c', 'g', 'd']
const SIGNATURES = ['0', '1♯', '2♯', '3♯', '4♯', '5♯', '6♯/6♭', '5♭', '4♭', '3♭', '2♭', '1♭']

/** Root of the major key at position i of the circle, voiced around middle C (G3–F♯4). */
const tonicRoot = (i: number) => 55 + ((((i * 7) % 12) - 7 + 12) % 12)
const angleOf = (x: number, y: number) => (Math.atan2(y, x) * 180) / Math.PI

/**
 * Circle of fifths: major keys (outer), relative minors (inner), key signatures (rim). The wheel turns under a
 * finger or the mouse, coasts, and settles with a key at the top; tapping a key brings it up and sounds its tonic triad.
 */
/** `value`/`onSelect`: optional control from outside (the calculators page), as an index into MAJORS (circle order). */
export function CircleOfFifths({ value, onSelect }: { value?: number; onSelect?: (i: number) => void } = {}) {
  const at = (i: number, r: number) => {
    const a = (i * 30 - 90) * (Math.PI / 180)
    return { x: 150 + r * Math.cos(a), y: 150 + r * Math.sin(a) }
  }
  const svg = useRef<SVGSVGElement>(null)
  const [selected, setSelected] = useState(0)
  const [moving, setMoving] = useState(false)
  // Rotation in degrees and the drag/coast state live in a ref: frames write the CSS variable, not React state.
  const st = useRef({ rot: 0, raf: 0, drag: null as null | { start: number; rot: number; last: number; t: number; v: number; moved: number } })

  // SVG transform attributes with explicit pivots: Safari mis-places CSS transforms (transform-box) on SVG text.
  const paint = (rot: number) => {
    st.current.rot = rot
    const el = svg.current
    if (!el) return
    el.querySelector('.mm-rotor')?.setAttribute('transform', `rotate(${rot} 150 150)`)
    el.querySelectorAll<SVGTextElement>('[data-cx]').forEach((t) => t.setAttribute('transform', `rotate(${-rot} ${t.dataset.cx} ${t.dataset.cy})`))
  }
  const indexAt = (rot: number) => (((Math.round(-rot / 30) % 12) + 12) % 12)
  const settle = (target: number, then?: () => void) => {
    cancelAnimationFrame(st.current.raf)
    const done = () => {
      paint(target)
      setMoving(false)
      setSelected(indexAt(target))
      onSelect?.(indexAt(target))
      then?.()
    }
    if (reducedMotion()) return done()
    const from = st.current.rot
    const t0 = performance.now()
    const frame = (now: number) => {
      const k = Math.min(1, (now - t0) / 420)
      // easeOutBack: a small overshoot reads as the wheel clicking into place.
      const e = 1 + 2.2 * (k - 1) ** 3 + 1.2 * (k - 1) ** 2
      paint(from + (target - from) * e)
      if (k < 1) st.current.raf = requestAnimationFrame(frame)
      else done()
    }
    st.current.raf = requestAnimationFrame(frame)
  }
  // Follow a key chosen elsewhere, turning the short way round, silently.
  useEffect(() => {
    if (value == null || value === indexAt(st.current.rot)) return
    let target = -value * 30
    target += Math.round((st.current.rot - target) / 360) * 360
    settle(target)
    // settle only reads refs; react to the value alone.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  const nearest = (rot: number) => Math.round(rot / 30) * 30
  const choose = (i: number, minor = false) => {
    // Turn the short way round to bring key i to the top.
    const cur = st.current.rot
    let target = -i * 30
    target += Math.round((cur - target) / 360) * 360
    setMoving(true)
    settle(target)
    const r = tonicRoot(i)
    playNow(minor ? [r - 3, r, r + 4, r + 9] : [r, r + 4, r + 7, r + 12], 1.8, 0.025)
  }

  const local = (e: ReactPointerEvent) => {
    const box = svg.current!.getBoundingClientRect()
    const k = 300 / box.width
    return { x: (e.clientX - box.left) * k - 150, y: (e.clientY - box.top) * k - 150 }
  }
  const onDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    const p = local(e)
    if (Math.hypot(p.x, p.y) > 142) return
    cancelAnimationFrame(st.current.raf)
    e.currentTarget.setPointerCapture(e.pointerId)
    const a = angleOf(p.x, p.y)
    st.current.drag = { start: a, rot: st.current.rot, last: a, t: performance.now(), v: 0, moved: 0 }
  }
  const onMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    const d = st.current.drag
    if (!d) return
    const p = local(e)
    const a = angleOf(p.x, p.y)
    let delta = a - d.last
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360
    const now = performance.now()
    d.v = 0.7 * d.v + 0.3 * (delta / Math.max(1, now - d.t))
    d.last = a
    d.t = now
    d.moved += Math.abs(delta)
    if (d.moved > 3 && !moving) setMoving(true)
    paint(st.current.rot + delta)
  }
  const onUp = (e: ReactPointerEvent<SVGSVGElement>) => {
    const d = st.current.drag
    st.current.drag = null
    if (!d) return
    if (d.moved <= 3) {
      // A tap: which key, and on which ring?
      const p = local(e)
      const dist = Math.hypot(p.x, p.y)
      if (dist < 34) return choose(indexAt(st.current.rot))
      const i = (((Math.round((angleOf(p.x, p.y) + 90 - st.current.rot) / 30) % 12) + 12) % 12)
      return choose(i, dist < 70)
    }
    let v = performance.now() - d.t > 80 ? 0 : d.v
    if (reducedMotion() || Math.abs(v) < 0.05) return settle(nearest(st.current.rot))
    let t = performance.now()
    const coast = (now: number) => {
      const dt = now - t
      t = now
      v *= Math.pow(0.994, dt)
      paint(st.current.rot + v * dt)
      if (Math.abs(v) > 0.04) st.current.raf = requestAnimationFrame(coast)
      // Settle on the key the wheel is drifting towards.
      else settle(nearest(st.current.rot + v * 60))
    }
    st.current.raf = requestAnimationFrame(coast)
  }
  const onKey = (e: ReactKeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      choose((selected + (e.key === 'ArrowRight' ? 1 : 11)) % 12)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      choose(selected)
    }
  }

  return (
    <svg
      ref={svg}
      viewBox="0 0 300 300"
      className={moving ? 'mm-circle w-full max-w-xs is-moving' : 'mm-circle w-full max-w-xs'}
      role="slider"
      tabIndex={0}
      aria-label="Vòng quãng 5 — kéo để xoay, chạm một giọng để nghe hợp âm chủ"
      aria-valuemin={0}
      aria-valuemax={11}
      aria-valuenow={selected}
      aria-valuetext={`${MAJORS[selected]} trưởng / ${MINORS[selected]} thứ, ${SIGNATURES[selected]}`}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={() => {
        st.current.drag = null
        settle(nearest(st.current.rot))
      }}
      onKeyDown={onKey}
    >
      {/* The selected key's wedge stays at the top while the wheel turns beneath it. */}
      <path className="mm-circle-sel" d={`M${at(-0.5, 36).x} ${at(-0.5, 36).y} L${at(-0.5, 140).x} ${at(-0.5, 140).y} A140 140 0 0 1 ${at(0.5, 140).x} ${at(0.5, 140).y} L${at(0.5, 36).x} ${at(0.5, 36).y} A36 36 0 0 0 ${at(-0.5, 36).x} ${at(-0.5, 36).y}Z`} />
      {[140, 105, 70].map((r) => (
        <circle key={r} cx={150} cy={150} r={r} fill="none" stroke="var(--color-border-strong)" />
      ))}
      <g className="mm-rotor">
        {MAJORS.map((key, i) => {
          const outer = at(i, 87)
          const inner = at(i, 52)
          const rim = at(i, 123)
          const edge1 = at(i + 0.5, 70)
          const edge2 = at(i + 0.5, 140)
          return (
            <g key={key} className={i === selected ? 'mm-sector is-sel' : 'mm-sector'}>
              <line x1={edge1.x} y1={edge1.y} x2={edge2.x} y2={edge2.y} stroke="var(--color-border-strong)" />
              <text className="mm-major" data-cx={outer.x} data-cy={outer.y} x={outer.x} y={outer.y + 5} textAnchor="middle" fontSize={key.length > 2 ? 11 : 15} fontWeight={600} fill={INK}>
                {key}
              </text>
              <text data-cx={inner.x} data-cy={inner.y} x={inner.x} y={inner.y + 4} textAnchor="middle" fontSize={11} fill={ACCENT}>
                {MINORS[i]}
              </text>
              <text data-cx={rim.x} data-cy={rim.y} x={rim.x} y={rim.y + 4} textAnchor="middle" fontSize={9} fill="var(--color-ink-muted)">
                {SIGNATURES[i]}
              </text>
            </g>
          )
        })}
      </g>
      <circle className="mm-circle-hub" cx={150} cy={150} r={22} />
      <text x={150} y={154} textAnchor="middle" fontSize={11} fontWeight={600} fill={INK} pointerEvents="none">
        {MAJORS[selected].split('/')[0]}
      </text>
      <path d="M150 4 l-5 -4 h10 z" fill="var(--color-gold)" transform="translate(0 2)" />
    </svg>
  )
}

const PC_NAMES = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B']

/** Pitch-class clock (C = 0 at the top): the set's members are lit and joined, so symmetry and shape are visible. */
export function PitchClock({ set }: { set: number[] }) {
  const at = (pc: number, r: number) => {
    const a = (pc * 30 - 90) * (Math.PI / 180)
    return { x: 110 + r * Math.cos(a), y: 110 + r * Math.sin(a) }
  }
  const lit = new Set(set)
  const polygon = set.map((pc) => at(pc, 72)).map((p) => `${p.x},${p.y}`).join(' ')
  return (
    <svg viewBox="0 0 220 220" className="w-full max-w-[15rem]" role="img" aria-label={`Đồng hồ lớp cao độ: ${set.join(', ')}`}>
      <circle cx={110} cy={110} r={72} fill="none" stroke="var(--color-border-strong)" />
      <polygon points={polygon} fill="color-mix(in oklch, var(--color-accent) 18%, transparent)" stroke={ACCENT} strokeWidth={1.5} />
      {PC_NAMES.map((name, pc) => {
        const dot = at(pc, 72)
        const label = at(pc, 94)
        return (
          <g key={pc}>
            <circle cx={dot.x} cy={dot.y} r={lit.has(pc) ? 9 : 3} fill={lit.has(pc) ? ACCENT : 'var(--color-border-strong)'} />
            {lit.has(pc) && (
              <text x={dot.x} y={dot.y + 3.5} textAnchor="middle" fontSize={10} fontWeight={600} fill="var(--color-accent-ink)">
                {pc}
              </text>
            )}
            <text x={label.x} y={label.y + 4} textAnchor="middle" fontSize={11} fill={lit.has(pc) ? INK : 'var(--color-ink-muted)'}>
              {name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

const FORM_HUES = [250, 25, 145, 300, 75, 190]

/**
 * Form chart: "A:8 A:8 B:8 A:8" — one block per section, width proportional to its length; sections with the
 * same name (ignoring primes and trailing numbers, so A and A' match) share a colour. Underscores become spaces.
 */
/** Largest font size (up to 11) at which a label fits its box, assuming ~0.56em per character. */
const labelSize = (label: string, width: number) => Math.max(5.5, Math.min(11, (width - 6) / (label.length * 0.56)))

export function FormChart({ sections }: { sections: string[] }) {
  const parts = sections.map((s) => {
    const [name, len] = s.split(':')
    return { name: name.replace(/_/g, ' '), len: Number(len) || 1 }
  })
  const keys = [...new Set(parts.map((p) => p.name.replace(/['’\d]+$/, '')))]
  const total = parts.reduce((s, p) => s + p.len, 0)
  const W = 320
  const starts = parts.map((_, i) => (parts.slice(0, i).reduce((s, p) => s + p.len, 0) / total) * W)
  const reveal = useReveal<SVGSVGElement>()
  return (
    <svg ref={reveal} viewBox={`0 0 ${W} 54`} className="mm-form w-full max-w-xl" role="img" aria-label={`Sơ đồ hình thức: ${parts.map((p) => p.name).join(' – ')}`}>
      {parts.map((p, i) => {
        const x = starts[i]
        const w = (p.len / total) * W
        const hue = FORM_HUES[keys.indexOf(p.name.replace(/['’\d]+$/, '')) % FORM_HUES.length]
        return (
          <g key={i} className="mm-slide" style={delay(i, 90)}>
            <rect x={x + 1} y={4} width={w - 2} height={30} rx={5} fill={`oklch(0.85 0.07 ${hue})`} stroke={`oklch(0.55 0.1 ${hue})`} />
            <text x={x + w / 2} y={23.5} textAnchor="middle" fontSize={labelSize(p.name, w)} fontWeight={600} fill="oklch(0.25 0.03 260)">
              {p.name}
            </text>
            <text x={x + w / 2} y={48} textAnchor="middle" fontSize={9} fill="var(--color-ink-muted)">
              {sections[i].includes(':') ? p.len : ''}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/**
 * A timeline: `start-end=Label` draws a span (lanes stack when spans overlap), `year=Label` a dated
 * event (labels stagger onto extra rows so they never collide). Negative years are BCE; underscores
 * become spaces.
 */
export function Timeline({ items }: { items: string[] }) {
  const parsed = items.flatMap((s) => {
    const m = s.match(/^(-?\d+)(?:-(-?\d+))?=(.+)$/)
    return m ? [{ from: +m[1], to: m[2] === undefined ? undefined : +m[2], label: m[3].replace(/_/g, ' ') }] : []
  })
  const spans = parsed.filter((p) => p.to !== undefined) as { from: number; to: number; label: string }[]
  const events = parsed.filter((p) => p.to === undefined)
  const years = parsed.flatMap((p) => [p.from, p.to ?? p.from])
  const [lo, hi] = [Math.min(...years), Math.max(...years)]
  const W = 360
  const pad = 14
  const x = (y: number) => pad + ((y - lo) / Math.max(1, hi - lo)) * (W - 2 * pad)
  const fmt = (y: number) => (y < 0 ? `${-y} TCN` : String(y))

  // Greedy lanes: a span or label goes to the first row where it does not overlap what is there.
  const place = <T,>(list: T[], range: (t: T) => [number, number]) => {
    const rows: [number, number][][] = []
    return list.map((t) => {
      const [a, b] = range(t)
      let r = rows.findIndex((row) => row.every(([c, d]) => b + 2 <= c || a >= d + 2))
      if (r < 0) r = rows.push([]) - 1
      rows[r].push([a, b])
      return r
    })
  }
  const spanRow = place(spans, (s) => [x(s.from), x(s.to)])
  const spanRows = Math.max(0, ...spanRow.map((r) => r + 1))
  const labelW = (t: string) => t.length * 7.5 * 0.55 + 6
  const sorted = [...events].sort((a, b) => a.from - b.from)
  const text = (e: { from: number; label: string }) => `${fmt(e.from)} ${e.label}`
  // Labels near either end slide inwards so they are never cut off by the frame.
  const labelX = (e: { from: number; label: string }) => {
    const half = labelW(text(e)) / 2
    return Math.min(W - half - 1, Math.max(half + 1, x(e.from)))
  }
  const eventRow = place(sorted, (e) => [labelX(e) - labelW(text(e)) / 2, labelX(e) + labelW(text(e)) / 2])

  const spanTop = 4
  const axisY = spanTop + spanRows * 22 + 6
  const eventTop = axisY + 22
  const H = eventTop + Math.max(0, ...eventRow.map((r) => r + 1)) * 13 + 4

  const span = hi - lo
  const step = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000].find((s) => span / s <= 7) ?? 10000
  const ticks: number[] = []
  for (let t = Math.ceil(lo / step) * step; t <= hi; t += step) ticks.push(t)
  const reveal = useReveal<SVGSVGElement>()
  // The axis draws itself left to right in DRAW ms; each span and event appears as the line passes its year.
  const DRAW = 900
  const when = (year: number, extra = 0) => ({ '--d': `${Math.round(((year - lo) / Math.max(1, hi - lo)) * DRAW) + extra}ms` }) as CSSProperties

  return (
    <svg ref={reveal} viewBox={`0 0 ${W} ${H}`} className="mm-timeline w-full max-w-2xl" role="img" aria-label={`Trục thời gian: ${parsed.map((p) => p.label).join(', ')}`}>
      {spans.map((s, i) => {
        const hue = FORM_HUES[i % FORM_HUES.length]
        const [a, b] = [x(s.from), x(s.to)]
        const y = spanTop + spanRow[i] * 22
        return (
          <g key={`s${i}`} className="mm-tl-span" style={when(s.from, 60)}>
            <rect x={a + 0.5} y={y} width={Math.max(2, b - a - 1)} height={18} rx={4} fill={`oklch(0.85 0.07 ${hue})`} stroke={`oklch(0.55 0.1 ${hue})`} />
            <text x={(a + b) / 2} y={y + 12.5} textAnchor="middle" fontSize={labelSize(s.label, b - a)} fontWeight={600} fill="oklch(0.25 0.03 260)">
              {s.label}
            </text>
          </g>
        )
      })}
      <line className="mm-tl-axis" x1={pad - 4} x2={W - pad + 4} y1={axisY} y2={axisY} stroke="var(--color-ink-muted)" strokeWidth={1} />
      {ticks.map((t) => (
        <g key={`t${t}`} className="mm-tl-tick" style={when(t)}>
          <line x1={x(t)} x2={x(t)} y1={axisY - 3} y2={axisY + 3} stroke="var(--color-ink-muted)" />
          <text x={x(t)} y={axisY + 12} textAnchor="middle" fontSize={7.5} fill="var(--color-ink-muted)">{fmt(t)}</text>
        </g>
      ))}
      {sorted.map((e, i) => {
        const ex = x(e.from)
        const y = eventTop + eventRow[i] * 13
        return (
          <g key={`e${i}`} className="mm-tl-ev" style={when(e.from, 120 + Math.min(i, 12) * 25)}>
            <line className="mm-tl-stem" x1={ex} x2={ex} y1={axisY} y2={y + 2} stroke="var(--color-gold)" strokeWidth={0.8} strokeDasharray="1.5 1.5" />
            <circle className="mm-tl-dot" cx={ex} cy={axisY} r={2.4} fill="var(--color-gold)" />
            <text className="mm-tl-label" x={labelX(e)} y={y + 9} textAnchor="middle" fontSize={7.5} fill="var(--color-ink)">
              <tspan fontWeight={600}>{fmt(e.from)}</tspan> {e.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/**
 * A column chart: `label=v` (one series) or `label=v1/v2` (two series), with optional `series=A/B`
 * names and `max=N` for the axis top. Colours are the validated chart tokens; each bar has a hover
 * title, and two series always get a legend. Underscores become spaces.
 */
export function Bars({ items }: { items: string[] }) {
  const opts = Object.fromEntries(items.filter((s) => /^(series|max)=/.test(s)).map((s) => s.split('=') as [string, string]))
  const data = items
    .filter((s) => !/^(series|max)=/.test(s))
    .map((s) => {
      const i = s.lastIndexOf('=')
      return { label: s.slice(0, i).replace(/_/g, ' '), values: s.slice(i + 1).split('/').map(Number) }
    })
  const names = opts.series?.split('/').map((n) => n.replace(/_/g, ' ')) ?? []
  const nSeries = Math.max(...data.map((d) => d.values.length))
  const peak = Math.max(...data.flatMap((d) => d.values))
  const step = [0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000].find((s) => peak / s <= 6) ?? 1000
  const top = Number(opts.max) || Math.ceil(peak / step) * step
  const W = 360
  const legendH = nSeries > 1 ? 16 : 0
  // Long category labels wrap onto two lines rather than shrinking or colliding.
  const slotW = (W - 30) / data.length
  const lines = (label: string) => {
    if (label.length * 8 * 0.56 <= slotW - 4) return [label]
    const words = label.split(' ')
    let best = [label, '']
    for (let i = 1; i < words.length; i++) {
      const pair = [words.slice(0, i).join(' '), words.slice(i).join(' ')]
      if (Math.max(...pair.map((s) => s.length)) < Math.max(...best.map((s) => s.length))) best = pair
    }
    return best.filter(Boolean)
  }
  const twoLines = data.some((d) => lines(d.label).length > 1)
  const [padL, padR, padT, padB] = [24, 6, 6 + legendH, twoLines ? 28 : 20]
  const H = 150 + legendH + (twoLines ? 8 : 0)
  const plotW = W - padL - padR
  const plotH = H - padT - padB
  const y = (v: number) => padT + plotH - (v / top) * plotH
  const slot = plotW / data.length
  const barW = Math.min(14, (slot * 0.72 - 2 * (nSeries - 1)) / nSeries)
  const colors = ['var(--chart-1)', 'var(--chart-2)']
  const ticks: number[] = []
  for (let t = 0; t <= top + 1e-9; t += step) ticks.push(+t.toFixed(4))
  // Column with a 4px-style rounded data end and a square foot on the baseline.
  const bar = (x: number, v: number) => {
    const y0 = y(0)
    const y1 = y(v)
    const r = Math.min(2.5, barW / 2, y0 - y1)
    return `M${x},${y0}V${y1 + r}Q${x},${y1} ${x + r},${y1}H${x + barW - r}Q${x + barW},${y1} ${x + barW},${y1 + r}V${y0}Z`
  }
  const reveal = useReveal<SVGSVGElement>()
  return (
    <svg ref={reveal} viewBox={`0 0 ${W} ${H}`} className="mm-bars w-full max-w-2xl" role="img" aria-label={`Biểu đồ cột: ${data.map((d) => `${d.label} ${d.values.join('/')}`).join(', ')}`}>
      {nSeries > 1 &&
        names.map((n, i) => (
          <g key={n} transform={`translate(${padL + i * 90},4)`}>
            <rect width={9} height={9} rx={2} fill={colors[i]} />
            <text x={13} y={8} fontSize={8.5} fill="var(--color-ink-muted)">{n}</text>
          </g>
        ))}
      {ticks.map((t) => (
        <g key={t}>
          <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke="var(--color-border)" strokeWidth={t === 0 ? 1 : 0.6} />
          <text x={padL - 4} y={y(t) + 2.5} textAnchor="end" fontSize={7.5} fill="var(--color-ink-muted)">{t}</text>
        </g>
      ))}
      {data.map((d, i) => {
        const groupW = nSeries * barW + (nSeries - 1) * 2
        const x0 = padL + i * slot + (slot - groupW) / 2
        return (
          <g key={d.label + i}>
            {d.values.map((v, j) => (
              <path key={j} className="mm-bar" style={delay(i * nSeries + j, 55)} d={bar(x0 + j * (barW + 2), v)} fill={colors[j]}>
                <title>{`${d.label}${names[j] ? ` — ${names[j]}` : ''}: ${v}`}</title>
              </path>
            ))}
            {lines(d.label).map((line, k, all) => (
              <text key={k} x={padL + i * slot + slot / 2} y={H - 7 - (all.length - 1 - k) * 9} textAnchor="middle" fontSize={Math.min(8.5, ...all.map((l) => labelSize(l, slot + 4)))} fill="var(--color-ink)">
                {line}
              </text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Ranges against the 88-key piano (A0–C8): `low-high=Label` per row, e.g. `G3-A7=Violin`. A note
 * outside the piano is clamped to its edge and marked with an arrow. Underscores become spaces.
 */
export function RangeChart({ items }: { items: string[] }) {
  const rows = items.flatMap((s) => {
    const m = s.match(/^([A-G](?:##|bb|#|b)?\d)-([A-G](?:##|bb|#|b)?\d)=(.+)$/)
    const [lo, hi] = m ? [parseNote(m[1]), parseNote(m[2])] : [null, null]
    return m && lo && hi ? [{ lo: lo.midi, hi: hi.midi, from: m[1], to: m[2], label: m[3].replace(/_/g, ' ') }] : []
  })
  // White-key geometry: 52 whites from A0 (midi 21) to C8 (midi 108).
  const KW = 7
  const whiteIndex = (midi: number) => {
    let n = 0
    for (let k = 21; k < midi; k++) if (![1, 3, 6, 8, 10].includes(k % 12)) n++
    return n
  }
  const isBlack = (midi: number) => [1, 3, 6, 8, 10].includes(midi % 12)
  const left = (midi: number) => (isBlack(midi) ? whiteIndex(midi) * KW - 2 : whiteIndex(midi) * KW)
  const right = (midi: number) => (isBlack(midi) ? whiteIndex(midi) * KW + 2 : (whiteIndex(midi) + 1) * KW)
  const clamp = (m: number) => Math.max(21, Math.min(108, m))
  const labelW = 64
  const W = labelW + 52 * KW
  const rowH = 13
  const kbY = rows.length * rowH + 4
  const H = kbY + 30
  const reveal = useReveal<SVGSVGElement>()
  const glyph = (n: string) => n.replace('##', '𝄪').replace('bb', '𝄫').replace('#', '♯').replace(/(?<=[A-G])b/, '♭')
  return (
    <svg ref={reveal} viewBox={`0 0 ${W} ${H}`} className="mm-range w-full max-w-2xl" role="img" aria-label={`Âm vực: ${rows.map((r) => `${r.label} ${r.from}–${r.to}`).join(', ')}`}>
      {rows.map((r, i) => {
        const [a, b] = [labelW + left(clamp(r.lo)), labelW + right(clamp(r.hi))]
        const y = i * rowH + 2
        return (
          <g key={r.label + i}>
            <text x={labelW - 4} y={y + 8} textAnchor="end" fontSize={7.5} fill="var(--color-ink)">{r.label}</text>
            <rect className="mm-grow-x" style={delay(i, 70)} x={a} y={y} width={Math.max(3, b - a)} height={10} rx={3} fill={i % 2 ? 'var(--chart-2)' : 'var(--chart-1)'}>
              <title>{`${r.label}: ${glyph(r.from)} – ${glyph(r.to)}`}</title>
            </rect>
            <text x={a - 2} y={y + 8} textAnchor="end" fontSize={6} fill="var(--color-ink-muted)">{r.lo < 21 ? '◂' : ''}</text>
            <text x={b + 2} y={y + 8} fontSize={6} fill="var(--color-ink-muted)">{r.hi > 108 ? '▸' : ''}</text>
          </g>
        )
      })}
      {Array.from({ length: 88 }, (_, i) => 21 + i)
        .filter((m) => !isBlack(m))
        .map((m) => (
          <rect key={m} x={labelW + left(m)} y={kbY} width={KW} height={22} fill="#fff" stroke="#8a8478" strokeWidth={0.5} />
        ))}
      {Array.from({ length: 88 }, (_, i) => 21 + i)
        .filter(isBlack)
        .map((m) => (
          <rect key={m} x={labelW + left(m)} y={kbY} width={4} height={13} fill="#222" />
        ))}
      {[24, 36, 48, 60, 72, 84, 96, 108].map((m) => (
        <text key={m} x={labelW + left(m) + KW / 2} y={kbY + 19} textAnchor="middle" fontSize={4.5} fill={m === 60 ? 'var(--color-accent)' : '#8a8478'} fontWeight={m === 60 ? 700 : 400}>
          C{m / 12 - 1}
        </text>
      ))}
      <text x={labelW - 4} y={kbY + 14} textAnchor="end" fontSize={7.5} fill="var(--color-ink-muted)">Piano</text>
    </svg>
  )
}
