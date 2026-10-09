import type { ReactElement } from 'react'
import { LETTERS, NOTE_RE, parseNote, PITCH_CLASS } from './notation'

/** Theory diagrams drawn in SVG so they stay crisp, offline and theme-aware. */

const INK = 'var(--color-ink)'
const ACCENT = 'var(--color-accent)'

const MUSIC_FONT = "'Noto Music', 'Segoe UI Symbol', 'Apple Symbols', serif"

/** Piano keyboard; highlighted keys are filled with the accent colour. */
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

  return (
    <svg viewBox={`-1 -1 ${count * 7 * W + 2} 122`} className="w-full" style={{ maxWidth: count * 7 * W * 1.4 }} role="img" aria-label={`Bàn phím: ${notes.join(', ')}`}>
      {whites.map((k) => (
        <g key={k.midi}>
          <rect x={k.x} y={0} width={W} height={120} rx={3} fill={lit.has(k.midi) ? ACCENT : '#fff'} stroke="#8a8478" />
          <text x={k.x + W / 2} y={110} textAnchor="middle" fontSize={10} fill={lit.has(k.midi) ? 'var(--color-accent-ink)' : '#8a8478'}>
            {k.letter}
          </text>
        </g>
      ))}
      {blacks.map((k) => (
        <rect key={k.midi} x={k.x} y={0} width={14} height={74} rx={2} fill={lit.has(k.midi) ? ACCENT : '#222'} stroke="#222" />
      ))}
    </svg>
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
              <text x={x - 18} y={yOf(positions[j]) + 5} fontSize={15} fill={ACCENT} fontFamily={n.accidental.length > 1 ? MUSIC_FONT : undefined}>
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

const Label = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <text x={x} y={y} textAnchor="middle" fontSize={10.5} fill="var(--color-ink-muted)">
    {text}
  </text>
)

/**
 * Five-line staff of whole notes. Columns: "C4", "C4+E4+G4" (chord), optional "=label" shown underneath
 * (e.g. a Roman numeral; underscores become spaces). An optional "k:3#" / "k:2b" adds a key signature.
 */
export function Staff({ clef: clefArg, keySig = 0, notes }: { clef: Clef; keySig?: number; notes: string[] }) {
  const clef = clefArg in CLEFS ? clefArg : 'treble'
  const cols = notes.map(parseColumn)
  const step = cols.some((c) => c.label && c.label.length > 3) ? 40 : 32
  const start = 70 + Math.abs(keySig) * SIG_W
  const width = start + cols.length * step
  return (
    <svg viewBox={`0 0 ${width} 110`} className="w-full" style={{ maxWidth: width * 1.5 }} role="img" aria-label={`Khuông nhạc: ${notes.join(', ')}`}>
      <StaffLines clef={clef} keySig={keySig} bottom={70} width={width} />
      {cols.map((col, i) => {
        const x = start + i * step
        const text = col.label ?? (col.notes.length === 1 ? prettyNote(notes[i]) : undefined)
        return (
          <g key={i}>
            <Notes col={col} x={x} clef={clef} bottom={70} />
            {text && <Label x={x} y={104} text={text} />}
          </g>
        )
      })}
    </svg>
  )
}

/** Grand staff (treble over bass) of whole-note columns "upper/lower=label", e.g. "E5+C5/C3+G3=I". */
export function GrandStaff({ keySig = 0, columns }: { keySig?: number; columns: string[] }) {
  const cols = columns.map((c) => {
    const [body, label] = c.split('=')
    const [upper = '', lower = ''] = body.split('/')
    return { upper: parseColumn(upper), lower: parseColumn(lower), label: label?.replace(/_/g, ' ') }
  })
  const step = cols.some((c) => c.label && c.label.length > 3) ? 44 : 34
  const start = 74 + Math.abs(keySig) * SIG_W
  const width = start + cols.length * step
  return (
    <svg viewBox={`0 0 ${width} 200`} className="w-full" style={{ maxWidth: width * 1.5 }} role="img" aria-label={`Khuông kép: ${columns.join(', ')}`}>
      <line x1={0.5} x2={0.5} y1={30} y2={160} stroke={INK} strokeWidth={1.5} />
      <StaffLines clef="treble" keySig={keySig} bottom={70} width={width} />
      <StaffLines clef="bass" keySig={keySig} bottom={160} width={width} />
      {cols.map((col, i) => {
        const x = start + i * step
        return (
          <g key={i}>
            <Notes col={col.upper} x={x} clef="treble" bottom={70} />
            <Notes col={col.lower} x={x} clef="bass" bottom={160} />
            {col.label && <Label x={x} y={194} text={col.label} />}
          </g>
        )
      })}
    </svg>
  )
}

const DURATIONS = { w: 4, h: 2, q: 1, e: 0.5, s: 0.25 } as const
const RESTS = { w: '𝄻', h: '𝄼', q: '𝄽', e: '𝄾', s: '𝄿' } as const
/**
 * Rhythm on a one-line staff: "4/4 q e-e >q. e / h~ q rq". Notes joined by "-" are beamed; "3[e-e-e]" is a triplet;
 * "/" is a barline, "//" a final barline; ":ta" under a note shows a counting syllable.
 */
export function Rhythm({ tokens }: { tokens: string[] }) {
  const Y = 50
  const TOP = 22
  let x = 12
  const items: ReactElement[] = []
  const heads: { x: number; tie: boolean }[] = []
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
    group.forEach(([, accent, rest, d, dot, tie, syl], k) => {
      const dur = d as keyof typeof DURATIONS
      const cx = x + 6
      xs.push(cx)
      const key = `${ti}-${k}`
      if (rest) {
        items.push(<text key={key} x={cx} y={Y + (dur === 'w' ? 2 : dur === 'h' ? 6 : 10)} textAnchor="middle" fontSize={dur === 'w' || dur === 'h' ? 26 : 28} fill={INK} fontFamily={MUSIC_FONT}>{RESTS[dur]}</text>)
      } else {
        const hollow = dur === 'w' || dur === 'h'
        items.push(<ellipse key={key} cx={cx} cy={Y} rx={6} ry={4.4} transform={`rotate(-20 ${cx} ${Y})`} fill={hollow ? 'none' : ACCENT} stroke={ACCENT} strokeWidth={hollow ? 2 : 1} />)
        if (dur !== 'w') items.push(<line key={key + 's'} x1={cx + 5.4} x2={cx + 5.4} y1={Y - 2} y2={TOP} stroke={ACCENT} strokeWidth={1.3} />)
        const flags = dur === 'e' ? 1 : dur === 's' ? 2 : 0
        if (group.length === 1)
          for (let f = 0; f < flags; f++)
            items.push(<path key={key + 'f' + f} d={`M${cx + 5.4} ${TOP + f * 6} q 7 5 6 14`} fill="none" stroke={ACCENT} strokeWidth={1.6} />)
        if (accent) items.push(<path key={key + 'a'} d={`M${cx - 5} ${Y + 9} L${cx + 5} ${Y + 12} L${cx - 5} ${Y + 15}`} fill="none" stroke={INK} strokeWidth={1.3} />)
        heads.push({ x: cx, tie: !!tie })
      }
      if (dot) items.push(<circle key={key + 'd'} cx={cx + 11} cy={Y - 3} r={1.8} fill={rest ? INK : ACCENT} />)
      if (syl) items.push(<text key={key + 'l'} x={cx} y={Y + 34} textAnchor="middle" fontSize={12} fill="var(--color-ink-muted)">{syl}</text>)
      x += Math.max(18, 26 * Math.sqrt(DURATIONS[dur])) * (dot ? 1.25 : 1) + 6
    })
    // Beams: the primary beam joins the whole group; a second beam joins neighbouring sixteenths (or a stub).
    const notes = group.map((m, k) => ({ d: m[3], rest: m[2], x: xs[k] + 5.4 }))
    if (group.length > 1 && notes.every((n) => !n.rest)) {
      items.push(<line key={ti + 'b1'} x1={notes[0].x} x2={notes.at(-1)!.x} y1={TOP} y2={TOP} stroke={ACCENT} strokeWidth={3.5} />)
      notes.forEach((n, k) => {
        if (n.d !== 's') return
        if (notes[k + 1]?.d === 's') items.push(<line key={`${ti}b2${k}`} x1={n.x} x2={notes[k + 1].x} y1={TOP + 6} y2={TOP + 6} stroke={ACCENT} strokeWidth={3.5} />)
        else if (notes[k - 1]?.d !== 's') items.push(<line key={`${ti}b2${k}`} x1={n.x} x2={k === notes.length - 1 ? n.x - 8 : n.x + 8} y1={TOP + 6} y2={TOP + 6} stroke={ACCENT} strokeWidth={3.5} />)
      })
    }
    if (triplet && xs.length) {
      const [a, b] = [xs[0] - 4, xs.at(-1)! + 10]
      items.push(
        <g key={ti + 't'} stroke={INK} fill="none" strokeWidth={1}>
          <path d={`M${a} ${TOP - 4} V${TOP - 9} H${b} V${TOP - 4}`} />
          <text x={(a + b) / 2} y={TOP - 11} textAnchor="middle" fontSize={10} fill={INK} stroke="none">3</text>
        </g>,
      )
    }
    x += 4
  })
  // Ties arc from a note to the next one.
  heads.forEach((h, i) => {
    const next = heads[i + 1]
    if (h.tie && next) items.push(<path key={'tie' + i} d={`M${h.x + 3} ${Y + 7} Q${(h.x + next.x) / 2} ${Y + 16} ${next.x - 3} ${Y + 7}`} fill="none" stroke={ACCENT} strokeWidth={1.4} />)
  })
  const width = x + 8
  return (
    <svg viewBox={`0 0 ${width} 92`} className="w-full" style={{ maxWidth: width * 1.5 }} role="img" aria-label={`Tiết tấu: ${tokens.join(' ')}`}>
      <line x1={0} x2={width} y1={Y} y2={Y} stroke={INK} strokeWidth={1} />
      {items}
    </svg>
  )
}

const MAJORS = ['C', 'G', 'D', 'A', 'E', 'B', 'F♯/G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F']
const MINORS = ['a', 'e', 'b', 'f♯', 'c♯', 'g♯', 'd♯/e♭', 'b♭', 'f', 'c', 'g', 'd']
const SIGNATURES = ['0', '1♯', '2♯', '3♯', '4♯', '5♯', '6♯/6♭', '5♭', '4♭', '3♭', '2♭', '1♭']

/** Circle of fifths: major keys (outer), relative minors (inner), key signatures (rim). */
export function CircleOfFifths() {
  const at = (i: number, r: number) => {
    const a = (i * 30 - 90) * (Math.PI / 180)
    return { x: 150 + r * Math.cos(a), y: 150 + r * Math.sin(a) }
  }
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs" role="img" aria-label="Vòng quãng năm">
      {[140, 105, 70].map((r) => (
        <circle key={r} cx={150} cy={150} r={r} fill="none" stroke="var(--color-border-strong)" />
      ))}
      {MAJORS.map((key, i) => {
        const outer = at(i, 87)
        const inner = at(i, 52)
        const rim = at(i, 123)
        const edge1 = at(i + 0.5, 70)
        const edge2 = at(i + 0.5, 140)
        return (
          <g key={key}>
            <line x1={edge1.x} y1={edge1.y} x2={edge2.x} y2={edge2.y} stroke="var(--color-border-strong)" />
            <text x={outer.x} y={outer.y + 5} textAnchor="middle" fontSize={key.length > 2 ? 11 : 15} fontWeight={600} fill={INK}>
              {key}
            </text>
            <text x={inner.x} y={inner.y + 4} textAnchor="middle" fontSize={11} fill={ACCENT}>
              {MINORS[i]}
            </text>
            <text x={rim.x} y={rim.y + 4} textAnchor="middle" fontSize={9} fill="var(--color-ink-muted)">
              {SIGNATURES[i]}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
