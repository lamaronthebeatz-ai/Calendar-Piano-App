import { diatonic, midi, NATURAL, pitch, type Letter, type Pitch, type Spelling } from './pitch'

/**
 * An interval is two counts: letter STEPS (0 = unison, 7 = octave; this is the Taneyev number used by the counterpoint
 * textbook) and SEMITONES. Quality and name follow from both. Consonance is deliberately NOT here: whether a fourth is
 * consonant depends on the rulebook (strict two-voice counterpoint: no; upper pair in three voices: yes).
 */
export type Interval = { readonly steps: number; readonly semitones: number }
export type Quality = 'P' | 'M' | 'm' | 'A' | 'd' | 'AA' | 'dd' | 'AAA' | 'ddd'

const mod = (a: number, m: number) => ((a % m) + m) % m
/** The perfect-type generic classes: unison, fourth, fifth. */
const PERFECT = new Set([0, 3, 4])

export const interval = (steps: number, semitones: number): Interval => ({ steps, semitones })
/** From `lower` to `upper`: signed (negative when "upper" is below). */
export const between = (lower: Pitch, upper: Pitch): Interval => ({ steps: diatonic(upper) - diatonic(lower), semitones: midi(upper) - midi(lower) })

/** Semitones of the major / perfect interval with this many steps (any octave). */
const reference = (steps: number) => 12 * Math.floor(steps / 7) + NATURAL[mod(steps, 7)]

/** Quality of an interval measured upward (direction is ignored). Null for impossible combinations (a "second" of 9 semitones). */
export function quality(iv: Interval): Quality | null {
  const steps = Math.abs(iv.steps)
  const semis = iv.steps < 0 || (iv.steps === 0 && iv.semitones < 0) ? -iv.semitones : iv.semitones
  const dev = semis - reference(steps)
  if (PERFECT.has(mod(steps, 7))) return ({ [-3]: 'ddd', [-2]: 'dd', [-1]: 'd', 0: 'P', 1: 'A', 2: 'AA', 3: 'AAA' } as Record<number, Quality>)[dev] ?? null
  return ({ [-4]: 'ddd', [-3]: 'dd', [-2]: 'd', [-1]: 'm', 0: 'M', 1: 'A', 2: 'AA', 3: 'AAA' } as Record<number, Quality>)[dev] ?? null
}
/** Traditional number: unison 1, second 2, octave 8, tenth 10. */
export const ordinal = (iv: Interval) => Math.abs(iv.steps) + 1
export const isCompound = (iv: Interval) => Math.abs(iv.steps) >= 7
/** Reduce to within an octave, keeping direction (a tenth → a third). An octave stays an octave. */
export function simple(iv: Interval): Interval {
  const sign = iv.steps < 0 ? -1 : 1
  const steps = Math.abs(iv.steps)
  if (steps < 7 || steps % 7 !== 0) {
    const s = steps % 7
    const oct = Math.floor(steps / 7)
    return { steps: sign * s, semitones: sign * (Math.abs(iv.semitones) - 12 * oct) }
  }
  return { steps: sign * 7, semitones: sign * (Math.abs(iv.semitones) - 12 * (steps / 7 - 1)) }
}
/** Inversion within the octave (M3 → m6, P4 → P5); the interval must be simple and upward. */
export function invert(iv: Interval): Interval {
  if (iv.steps < 0 || iv.steps > 7) throw new Error('chỉ đảo quãng đơn đi lên')
  return { steps: 7 - iv.steps, semitones: 12 - iv.semitones }
}
/** 'M3', 'P5', 'A4', 'm10'; '-m3' when descending. */
export function intervalName(iv: Interval): string {
  const q = quality(iv)
  const down = iv.steps < 0 || (iv.steps === 0 && iv.semitones < 0)
  return `${down ? '-' : ''}${q ?? '?'}${ordinal(iv)}`
}
/** Parse 'M3', 'P5', 'd7', 'A4', '-m2'. */
export function parseInterval(text: string): Interval {
  const m = /^\s*(-?)(P|M|m|AAA|AA|A|ddd|dd|d)(\d+)\s*$/.exec(text)
  if (!m) throw new Error(`không đọc được quãng: "${text}"`)
  const steps = +m[3] - 1
  if (steps < 0) throw new Error(`số quãng phải ≥ 1: "${text}"`)
  const perfect = PERFECT.has(mod(steps, 7))
  const q = m[2]
  const dev = perfect
    ? ({ P: 0, A: 1, AA: 2, AAA: 3, d: -1, dd: -2, ddd: -3 } as Record<string, number>)[q]
    : ({ M: 0, m: -1, A: 1, AA: 2, AAA: 3, d: -2, dd: -3, ddd: -4 } as Record<string, number>)[q]
  if (dev === undefined || (perfect && (q === 'M' || q === 'm'))) throw new Error(`chất lượng "${q}" không dùng cho quãng ${steps + 1}`)
  // a "diminished unison" is read here as a descending augmented unison (direction follows the sound); see KNOWN_LIMITATIONS
  if (steps === 0 && dev < 0) throw new Error('quãng đồng âm giảm không dùng: viết là quãng đồng âm tăng đi xuống (-A1)')
  const iv = { steps, semitones: reference(steps) + dev }
  return m[1] ? { steps: -iv.steps || 0, semitones: -iv.semitones || 0 } : iv
}

/** Move a pitch by an interval, spelling the result by letter steps (C4 + A4 = F♯4, not G♭4). */
export function transpose(p: Pitch, iv: Interval): Pitch {
  const d = diatonic(p) + iv.steps
  const letter = mod(d, 7) as Letter
  const octave = Math.floor(d / 7)
  const alter = midi(p) + iv.semitones - (12 * (octave + 1) + NATURAL[letter])
  return pitch(letter, alter, octave)
}
/** Same for a spelling (octave-free). */
export function transposeSpelling(s: Spelling, iv: Interval): Spelling {
  const p = transpose(pitch(s.letter, s.alter, 4), simple(iv.steps < 0 ? { steps: iv.steps + 70, semitones: iv.semitones + 120 } : iv))
  return { letter: p.letter, alter: p.alter }
}
