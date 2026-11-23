import { transposeSpelling, type Interval } from './interval'
import { NATURAL, spelling, type Letter, type Spelling } from './pitch'

/**
 * Modes, scales, keys and key signatures. Two things are kept apart on purpose:
 * - a KEY SIGNATURE is notation (how many sharps or flats are written at the clef);
 * - a KEY is an analytical claim (tonic + mode), which a score may or may not state.
 * A signature of one sharp is G major or E minor (or a mode); only analysis or the source decides.
 */

export type ModeId =
  | 'major' | 'natural-minor' | 'harmonic-minor' | 'melodic-minor'
  | 'ionian' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'aeolian' | 'locrian'

const iv = (steps: number, semitones: number): Interval => ({ steps, semitones })
const DIATONIC = (rot: number): Interval[] => {
  const nat = [0, 2, 4, 5, 7, 9, 11]
  return nat.map((_, k) => iv(k, (nat[(k + rot) % 7] - nat[rot] + 12) % 12))
}

/**
 * Each mode as the interval of its seven degrees above the tonic. `signatureOffset`: fifths relative to the tonic's
 * major signature (Dorian is two fifths flatter than major on the same tonic). Harmonic and melodic minor have the
 * natural-minor signature; their raised degrees are written as accidentals.
 */
export const MODES: Record<ModeId, { vi: string; degrees: Interval[]; signatureOffset: number }> = {
  major: { vi: 'trưởng', degrees: DIATONIC(0), signatureOffset: 0 },
  'natural-minor': { vi: 'thứ tự nhiên', degrees: DIATONIC(5), signatureOffset: -3 },
  'harmonic-minor': { vi: 'thứ hoà thanh', degrees: [iv(0, 0), iv(1, 2), iv(2, 3), iv(3, 5), iv(4, 7), iv(5, 8), iv(6, 11)], signatureOffset: -3 },
  'melodic-minor': { vi: 'thứ giai điệu (đi lên)', degrees: [iv(0, 0), iv(1, 2), iv(2, 3), iv(3, 5), iv(4, 7), iv(5, 9), iv(6, 11)], signatureOffset: -3 },
  ionian: { vi: 'Ionian', degrees: DIATONIC(0), signatureOffset: 0 },
  dorian: { vi: 'Dorian', degrees: DIATONIC(1), signatureOffset: -2 },
  phrygian: { vi: 'Phrygian', degrees: DIATONIC(2), signatureOffset: -4 },
  lydian: { vi: 'Lydian', degrees: DIATONIC(3), signatureOffset: 1 },
  mixolydian: { vi: 'Mixolydian', degrees: DIATONIC(4), signatureOffset: -1 },
  aeolian: { vi: 'Aeolian', degrees: DIATONIC(5), signatureOffset: -3 },
  locrian: { vi: 'Locrian', degrees: DIATONIC(6), signatureOffset: -5 },
}
export const isModeId = (x: unknown): x is ModeId => typeof x === 'string' && x in MODES

/** A key: tonic spelling + mode. 'natural-minor' is THE minor key; harmonic/melodic are scale forms within it. */
export type Key = { readonly tonic: Spelling; readonly mode: ModeId }

/** Position of a letter on the line of fifths (C = 0, G = 1, F = −1). */
const LETTER_FIFTHS = [0, 2, 4, -1, 1, 3, 5]
/** Line-of-fifths position of a spelling: C = 0, G = 1, F♯ = 6, B♭ = −2. */
export const fifthsOf = (s: Spelling) => LETTER_FIFTHS[s.letter] + 7 * s.alter

/** Key signature in fifths (+ sharps, − flats) of a key. Beyond ±7 it is a theoretical key (e.g. G♯ major = 8). */
export const signatureOf = (k: Key) => fifthsOf(k.tonic) + MODES[k.mode].signatureOffset

/** Sharp order F C G D A E B; flat order B E A D G C F. */
const SHARP_ORDER: Letter[] = [3, 0, 4, 1, 5, 2, 6]
/** Alteration a key signature (in fifths, any size) gives to a letter. */
export function signatureAlter(fifths: number, letter: Letter): number {
  if (!Number.isInteger(fifths)) throw new Error(`hoá biểu không hợp lệ: ${fifths}`)
  // each block of 7 fifths adds one sharp (or flat) to every letter
  const pos = SHARP_ORDER.indexOf(letter)
  if (fifths >= 0) return Math.floor(fifths / 7) + (pos < fifths % 7 ? 1 : 0)
  const f = -fifths
  const flatPos = 6 - pos // B is first flat
  return -(Math.floor(f / 7) + (flatPos < f % 7 ? 1 : 0)) || 0
}

/** The seven spellings of a mode on a tonic, degree 1 first. */
export const scaleOf = (tonic: Spelling, mode: ModeId): Spelling[] => MODES[mode].degrees.map((d) => transposeSpelling(tonic, d))
export const keyScale = (k: Key) => scaleOf(k.tonic, k.mode)

/**
 * Scale degree of a spelling in a key: 1–7 and the alteration relative to the key's own note on that degree
 * (F♯ in C major is degree 4 raised by 1). The degree follows the LETTER, as in tonal theory.
 */
export function degreeOf(s: Spelling, k: Key): { degree: number; alteration: number } {
  const scale = keyScale(k)
  const i = scale.findIndex((x) => x.letter === s.letter)
  return { degree: i + 1, alteration: s.alter - scale[i].alter }
}

/** Relative minor / major (same signature): C major ↔ A minor. */
export function relative(k: Key): Key {
  const sc = keyScale(k)
  if (k.mode === 'major' || k.mode === 'ionian') return { tonic: sc[5], mode: 'natural-minor' }
  if (k.mode === 'natural-minor' || k.mode === 'aeolian' || k.mode === 'harmonic-minor' || k.mode === 'melodic-minor') return { tonic: sc[2], mode: 'major' }
  throw new Error('chỉ có quan hệ song song trưởng – thứ cho giọng trưởng hoặc thứ')
}
export const keyName = (k: Key, style: 'vi' | 'en' = 'vi') => {
  const t = style === 'vi' ? ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si'][k.tonic.letter] : 'CDEFGAB'[k.tonic.letter]
  const acc = k.tonic.alter > 0 ? '♯'.repeat(k.tonic.alter) : '♭'.repeat(-k.tonic.alter)
  return `${t}${acc} ${style === 'vi' ? MODES[k.mode].vi : k.mode}`
}
/** Tonic pitch class 0–11. */
export const tonicPc = (k: Key) => (((NATURAL[k.tonic.letter] + k.tonic.alter) % 12) + 12) % 12
export const key = (letter: number, alter: number, mode: ModeId): Key => ({ tonic: spelling(letter, alter), mode })
