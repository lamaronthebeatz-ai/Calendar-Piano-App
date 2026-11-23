/**
 * Spelled pitch. A pitch is a LETTER, an ALTERATION and an OCTAVE (scientific: C4 = middle C = MIDI 60), never just a
 * MIDI number — C♯ and D♭ are different notes in tonal theory and every rulebook depends on the spelling.
 */

export type Letter = 0 | 1 | 2 | 3 | 4 | 5 | 6 // C D E F G A B
/** A spelling without octave: a pitch-class name (C♯, D♭). */
export type Spelling = { readonly letter: Letter; readonly alter: number }
export type Pitch = { readonly letter: Letter; readonly alter: number; readonly octave: number }

export class PitchError extends Error {}

/** Alterations beyond a triple sharp or flat do not occur in notated music; refusing them catches bad arithmetic. */
export const MAX_ALTER = 3
export const LETTERS = 'CDEFGAB'
export const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si'] as const
/** Semitones of each natural letter above C. */
export const NATURAL = [0, 2, 4, 5, 7, 9, 11] as const

const mod = (a: number, m: number) => ((a % m) + m) % m
export const isLetter = (x: unknown): x is Letter => Number.isInteger(x) && (x as number) >= 0 && (x as number) <= 6

export function spelling(letter: number, alter = 0): Spelling {
  if (!isLetter(letter)) throw new PitchError(`chữ cái nốt không hợp lệ: ${letter}`)
  if (!Number.isInteger(alter) || Math.abs(alter) > MAX_ALTER) throw new PitchError(`dấu hoá không hợp lệ: ${alter}`)
  return { letter, alter }
}
export function pitch(letter: number, alter: number, octave: number): Pitch {
  const s = spelling(letter, alter)
  if (!Number.isInteger(octave) || octave < -1 || octave > 9) throw new PitchError(`quãng tám ngoài khoảng −1 … 9: ${octave}`)
  return { ...s, octave }
}

/** Diatonic index: octave × 7 + letter (C4 = 28). Counts letter steps, ignoring alterations. */
export const diatonic = (p: Pitch) => p.octave * 7 + p.letter
export const fromDiatonic = (d: number, alter = 0) => pitch(mod(d, 7), alter, Math.floor(d / 7))
export const midi = (p: Pitch) => 12 * (p.octave + 1) + NATURAL[p.letter] + p.alter
/** Pitch class 0–11 (C = 0). */
export const pitchClass = (p: Spelling) => mod(NATURAL[p.letter] + p.alter, 12)
export const spellingOf = (p: Pitch): Spelling => ({ letter: p.letter, alter: p.alter })
export const withOctave = (s: Spelling, octave: number) => pitch(s.letter, s.alter, octave)
export const samePitch = (a: Pitch, b: Pitch) => a.letter === b.letter && a.alter === b.alter && a.octave === b.octave
export const sameSpelling = (a: Spelling, b: Spelling) => a.letter === b.letter && a.alter === b.alter
/** Same sound, any spelling (C♯4 ≡ D♭4). */
export const enharmonic = (a: Pitch, b: Pitch) => midi(a) === midi(b)

/** The same sounding pitch written with another letter (C♯4 → D♭4); null when that needs more than a triple accidental. */
export function respell(p: Pitch, letter: Letter): Pitch | null {
  const m = midi(p)
  // octave of the new letter: the nearest one that keeps the alteration small
  for (const octave of [p.octave - 1, p.octave, p.octave + 1]) {
    const alter = m - (12 * (octave + 1) + NATURAL[letter])
    if (Math.abs(alter) <= MAX_ALTER && octave >= -1 && octave <= 9) return { letter, alter, octave }
  }
  return null
}

/* ---------- from MIDI: spelling must be chosen, so the policy is explicit ---------- */

const SHARP_SPELL: [Letter, number][] = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [3, 0], [3, 1], [4, 0], [4, 1], [5, 0], [5, 1], [6, 0]]
const FLAT_SPELL: [Letter, number][] = [[0, 0], [1, -1], [1, 0], [2, -1], [2, 0], [3, 0], [4, -1], [4, 0], [5, -1], [5, 0], [6, -1], [6, 0]]
/**
 * A pitch for a MIDI number. MIDI carries no spelling, so the caller says how to spell black keys: 'sharps',
 * 'flats', or a key signature in fifths (sharps for ≥ 0, flats for < 0). The result is a convention, not a fact.
 */
export function fromMidi(m: number, policy: 'sharps' | 'flats' | { fifths: number } = 'sharps'): Pitch {
  if (!Number.isInteger(m) || m < 0 || m > 127) throw new PitchError(`số MIDI ngoài 0 … 127: ${m}`)
  const flats = policy === 'flats' || (typeof policy === 'object' && policy.fifths < 0)
  const [letter, alter] = (flats ? FLAT_SPELL : SHARP_SPELL)[m % 12]
  return pitch(letter, alter, Math.floor(m / 12) - 1)
}

/* ---------- text ---------- */

const ACC_EN: Record<number, string> = { [-3]: 'bbb', [-2]: 'bb', [-1]: 'b', 0: '', 1: '#', 2: '##', 3: '###' }
const ACC_SYM: Record<number, string> = { [-3]: '♭𝄫', [-2]: '𝄫', [-1]: '♭', 0: '', 1: '♯', 2: '𝄪', 3: '♯𝄪' }
/** 'C#4' (en, ASCII), 'C♯4' (sym) or 'Đô♯4' (vi). */
export function formatPitch(p: Pitch, style: 'en' | 'sym' | 'vi' = 'sym'): string {
  return formatSpelling(p, style) + p.octave
}
export function formatSpelling(s: Spelling, style: 'en' | 'sym' | 'vi' = 'sym'): string {
  if (style === 'en') return LETTERS[s.letter] + ACC_EN[s.alter]
  return (style === 'vi' ? SOLFA[s.letter] : LETTERS[s.letter]) + ACC_SYM[s.alter]
}
/** 'C4', 'F#3', 'Bb2', 'E♭5', 'F𝄪4', 'Dbb4'. Octave optional for a spelling via parseSpelling. */
export function parsePitch(text: string): Pitch {
  const m = /^\s*([A-Ga-g])((?:#|♯|x|𝄪|b|♭|𝄫)*)(-?\d)\s*$/.exec(text)
  if (!m) throw new PitchError(`không đọc được cao độ: "${text}"`)
  return pitch(LETTERS.indexOf(m[1].toUpperCase()), alterOf(m[2]), +m[3])
}
export function parseSpelling(text: string): Spelling {
  const m = /^\s*([A-Ga-g])((?:#|♯|x|𝄪|b|♭|𝄫)*)\s*$/.exec(text)
  if (!m) throw new PitchError(`không đọc được tên nốt: "${text}"`)
  return spelling(LETTERS.indexOf(m[1].toUpperCase()), alterOf(m[2]))
}
function alterOf(acc: string): number {
  let a = 0
  for (const ch of acc) a += ch === '#' || ch === '♯' ? 1 : ch === 'x' || ch === '𝄪' ? 2 : ch === 'b' || ch === '♭' ? -1 : ch === '𝄫' ? -2 : 0
  return a
}

/** Structural check for data from outside. */
export const isPitch = (x: unknown): x is Pitch => {
  const p = x as Pitch
  return !!p && isLetter(p.letter) && Number.isInteger(p.alter) && Math.abs(p.alter) <= MAX_ALTER && Number.isInteger(p.octave) && p.octave >= -1 && p.octave <= 9
}
