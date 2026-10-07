/** Theory diagrams drawn in SVG so they stay crisp, offline and theme-aware. */

const LETTERS = 'CDEFGAB'
const PITCH_CLASS = [0, 2, 4, 5, 7, 9, 11]
const INK = 'var(--color-ink)'
const ACCENT = 'var(--color-accent)'

/** Parse "C#4", "Bb3" or "E" (octave defaults to 4). */
function parseNote(name: string) {
  const m = /^([A-G])([#b]?)(\d)?$/.exec(name)
  if (!m) return null
  const step = LETTERS.indexOf(m[1])
  const octave = Number(m[3] ?? 4)
  const shift = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0
  return { step, octave, accidental: m[2], midi: 12 * (octave + 1) + PITCH_CLASS[step] + shift, diatonic: octave * 7 + step }
}

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
  treble: { base: 30, glyph: '𝄞', size: 58, dy: 9 },
  bass: { base: 18, glyph: '𝄢', size: 38, dy: -13 },
  alto: { base: 24, glyph: '𝄡', size: 41, dy: 0 },
}
export type Clef = keyof typeof CLEFS

/** Five-line staff of whole notes; "C4+E4+G4" stacks notes into a chord (chords are named in the caption). */
export function Staff({ clef, notes }: { clef: Clef; notes: string[] }) {
  const GAP = 10
  const BOTTOM = 70 // y of the bottom staff line
  const c = CLEFS[clef] ?? CLEFS.treble
  const yOf = (pos: number) => BOTTOM - (pos * GAP) / 2
  const width = 70 + notes.length * 30

  return (
    <svg viewBox={`0 0 ${width} 110`} className="w-full" style={{ maxWidth: width * 1.5 }} role="img" aria-label={`Khuông nhạc: ${notes.join(', ')}`}>
      {[0, 2, 4, 6, 8].map((p) => (
        <line key={p} x1={0} x2={width} y1={yOf(p)} y2={yOf(p)} stroke={INK} strokeWidth={1} />
      ))}
      <text x={4} y={BOTTOM + c.dy} fontSize={c.size} fill={INK} fontFamily="'Noto Music', 'Segoe UI Symbol', 'Apple Symbols', serif">
        {c.glyph}
      </text>
      {notes.map((column, i) => {
        const x = 70 + i * 30
        const chord = column.split('+').map(parseNote).filter((n) => n !== null)
        const positions = chord.map((n) => n.diatonic - c.base)
        const ledgers = []
        for (let p = -2; p >= Math.min(...positions); p -= 2) ledgers.push(p)
        for (let p = 10; p <= Math.max(...positions); p += 2) ledgers.push(p)
        return (
          <g key={i}>
            {ledgers.map((p) => (
              <line key={p} x1={x - 10} x2={x + 10} y1={yOf(p)} y2={yOf(p)} stroke={INK} />
            ))}
            {chord.map((n, j) => (
              <g key={j}>
                <ellipse cx={x} cy={yOf(positions[j])} rx={6.5} ry={4.6} transform={`rotate(-20 ${x} ${yOf(positions[j])})`} fill="none" stroke={ACCENT} strokeWidth={2} />
                {n.accidental && (
                  <text x={x - 18} y={yOf(positions[j]) + 5} fontSize={15} fill={ACCENT}>
                    {n.accidental === '#' ? '♯' : '♭'}
                  </text>
                )}
              </g>
            ))}
            {chord.length === 1 && (
              <text x={x} y={104} textAnchor="middle" fontSize={10} fill="var(--color-ink-muted)">
                {column}
              </text>
            )}
          </g>
        )
      })}
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
