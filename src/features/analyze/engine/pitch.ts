/** Spelled pitches: a letter (0–6 = C–B) and an alteration, as written. Analysis keeps the spelling: F♯ is not G♭. */
export type Spelled = { step: number; alter: number }

export const NAT = [0, 2, 4, 5, 7, 9, 11]
export const LETTERS = 'CDEFGAB'
const ACC: Record<number, string> = { [-2]: '𝄫', [-1]: '♭', 0: '', 1: '♯', 2: '𝄪' }
export const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']

export const mod = (n: number, m: number) => ((n % m) + m) % m
export const pcOf = (p: Spelled) => mod(NAT[p.step] + p.alter, 12)
export const accText = (a: number) => ACC[a] ?? (a > 0 ? '♯'.repeat(a) : '♭'.repeat(-a))
export const nameOf = (p: Spelled) => LETTERS[p.step] + accText(p.alter)
export const solfaOf = (p: Spelled) => SOLFA[p.step] + accText(p.alter)

/** The spelled pitch `steps` letters and `semis` semitones above `p`. */
export function above(p: Spelled, steps: number, semis: number): Spelled {
  const step = mod(p.step + steps, 7)
  let alter = mod(pcOf(p) + semis - NAT[step], 12)
  if (alter > 6) alter -= 12
  return { step, alter }
}

/** [letter steps, semitones] from a up to b, within an octave. */
export const intervalOf = (a: Spelled, b: Spelled): [number, number] => [mod(b.step - a.step, 7), mod(pcOf(b) - pcOf(a), 12)]

/** The plainest spelling of a pitch class, sharps or flats. */
export function plainSpelling(pc: number, flats: boolean): Spelled {
  const exact = NAT.indexOf(pc)
  if (exact >= 0) return { step: exact, alter: 0 }
  return flats ? { step: NAT.indexOf(pc + 1), alter: -1 } : { step: NAT.indexOf(pc - 1), alter: 1 }
}

/** Key signature (sharps +, flats −) → the major key's tonic. */
export const majorOfSig = (fifths: number): Spelled => {
  let p: Spelled = { step: 0, alter: 0 }
  for (let i = 0; i < Math.abs(fifths); i++) p = fifths > 0 ? above(p, 4, 7) : above(p, 3, 5)
  return p
}
/** Letters altered by a key signature: the alteration of each letter. */
export function sigAlters(fifths: number): number[] {
  const out = [0, 0, 0, 0, 0, 0, 0]
  const sharps = [3, 0, 4, 1, 5, 2, 6]
  const flats = [6, 2, 5, 1, 4, 0, 3]
  for (let i = 0; i < Math.min(7, Math.abs(fifths)); i++) out[(fifths > 0 ? sharps : flats)[i]] = fifths > 0 ? 1 : -1
  return out
}
