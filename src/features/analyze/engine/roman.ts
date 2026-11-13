import { chordPcs, type Chord } from './chords'
import { keyPc, type Key } from './key'
import { accText, intervalOf, mod, pcOf } from './pitch'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const MAJOR = [0, 2, 4, 5, 7, 9, 11]
const MINOR = [0, 2, 3, 5, 7, 8, 10]

export type Special = 'N' | 'It' | 'Fr' | 'Ger' | 'K64'
/** A chord read in a key. */
export type Reading = {
  /** scale degree 0–6 of the root (the letter distance from the tonic) */
  degree: number
  /** the root's alteration against the mode (−1 = ♭II …); in minor the raised 7th counts as natural */
  alter: number
  /** applied chord: the degree it leads to (V/x, VII/x) */
  of?: number
  special?: Special
  /** T, S, D, or none (chromatic, mediants) */
  fn?: 'T' | 'S' | 'D'
  /** "D65", "II7♯3", "IV♯65♭3"… — the Russian–Soviet notation of the app's library */
  ru: string
  /** "V6/5", "V7/V", "Ger65"… — international Roman numerals */
  rn: string
  /** figure: '', '6', '64', '7', '65', '43', '2' */
  fig: string
}

const figOf = (c: Chord) => {
  const seventh = ['7', 'M7', 'm7', 'ø7', 'o7', 'mM7', '9', 'b9'].includes(c.quality)
  return seventh ? ['7', '65', '43', '2', '2'][c.inversion] ?? '7' : ['', '6', '64'][c.inversion] ?? ''
}
const rnFig = (f: string) => ({ '': '', '6': '6', '64': '64', '7': '7', '65': '65', '43': '43', '2': '42' })[f] ?? f

/** Degree and alteration of a root in a key (letters, so F♯ in C is ♯IV, G♭ is ♭V). */
function degreeOf(c: Chord, k: Key) {
  const [steps, semis] = intervalOf(k.tonic, c.rootName)
  const scale = k.minor ? MINOR : MAJOR
  let alter = mod(semis - scale[steps] + 6, 12) - 6
  if (k.minor && steps === 6 && alter === 1) alter = 0 // leading tone of minor
  if (k.minor && steps === 5 && alter === 1) alter = 0 // raised sixth (melodic minor) keeps its numeral
  return { degree: steps, alter }
}

const isMajorish = (q: string) => q === 'M' || q === '7' || q === '9' || q === 'b9'
const isDimish = (q: string) => q === 'd' || q === 'o7' || q === 'ø7'

/** A chord's tones all in the key (minor: harmonic and melodic forms count). */
export function diatonic(c: Chord, k: Key) {
  const t = keyPc(k)
  const scale = k.minor ? [0, 2, 3, 5, 7, 8, 9, 10, 11] : MAJOR
  return chordPcs(c).every((p) => scale.includes(mod(p - t, 12)))
}

/**
 * Read a chord in its key, looking at the next chord for applied dominants and the cadential six-four.
 * The Russian labels follow the library's table (essay on Scriabin's Sonata no. 2, table 1.1): T/S/D for the main
 * functions with their inversions, K64, degree numerals for the rest, II♯3 for V/V, D→x for applied dominants,
 * II♭6 for the Neapolitan, IV♯6♭3 / II43♯3♭5 / IV♯65♭3 for the Italian / French / German sixths.
 */
export function readChord(c: Chord, k: Key, next?: Chord, prev?: Chord): Reading {
  const { degree, alter } = degreeOf(c, k)
  const t = keyPc(k)
  const fig = figOf(c)
  const q = c.quality
  const base: Omit<Reading, 'ru' | 'rn'> = { degree, alter, fig }
  const bassRel = mod(c.bassPc - t, 12)
  const has = (semi: number) => chordPcs(c).some((p) => mod(p - t, 12) === semi)
  const raised4 = c.tones.some((x) => intervalOf(k.tonic, x)[0] === 3 && mod(pcOf(x) - t, 12) === 6)

  // augmented sixths: ♭6 in the bass with ♯4 above
  if (bassRel === 8 && (raised4 || has(6)) && (q === 'Fr' || q === '7' || q === 'M' || q === 'd' || q === 'ø7' || has(6))) {
    const fifth = has(3)
    const second = has(2)
    const kind: Special = q === 'Fr' || (second && !fifth) ? 'Fr' : fifth ? 'Ger' : 'It'
    const ru = kind === 'It' ? 'IV♯6♭3' : kind === 'Fr' ? 'II43♯3♭5' : 'IV♯65♭3'
    const rn = kind === 'It' ? 'It6' : kind === 'Fr' ? 'Fr43' : 'Ger65'
    return { ...base, special: kind, fn: 'D', ru, rn }
  }
  // Neapolitan: major triad on the lowered second degree
  if (degree === 1 && alter === -1 && q === 'M') return { ...base, special: 'N', fn: 'S', ru: `II♭${fig}`, rn: `N${rnFig(fig)}` }
  // cadential six-four: tonic in second inversion going to the dominant
  if (degree === 0 && alter === 0 && c.inversion === 2 && (q === 'M' || q === 'm') && next && mod(next.root - t, 12) === 7)
    return { ...base, special: 'K64', fn: 'D', ru: 'K64', rn: 'Cad64' }

  // applied (secondary) dominants and leading-tone chords: chromatic, resolving a fifth down / a semitone up
  const target = next ? degreeOf(next, k) : null
  const applied = !diatonic(c, k) && next && target && target.alter === 0 && target.degree !== 0
  if (applied && isMajorish(q) && mod(next!.root - c.root, 12) === 5) {
    const of = target!.degree
    const d = q === 'M' ? `D${fig}` : `D${fig === '7' ? '7' : fig}`
    const ru = of === 4 ? `II${fig === '' ? '' : fig}♯3` : `${d}→${ROMAN[of]}`
    return { ...base, of, fn: 'D', ru, rn: `V${rnFig(fig)}/${ROMAN[of]}` }
  }
  if (applied && isDimish(q) && mod(next!.root - c.root, 12) === 1) {
    const of = target!.degree
    return { ...base, of, fn: 'D', ru: `VII${fig}→${ROMAN[of]}`, rn: `vii${q === 'd' ? '°' : q === 'o7' ? '°' : 'ø'}${rnFig(fig)}/${ROMAN[of]}` }
  }

  // main functions
  const minorTriad = q === 'm' || q === 'm7'
  const rnBase = ROMAN[degree]
  const caseRn = q === 'm' || q === 'm7' || q === 'mM7' || isDimish(q) ? rnBase.toLowerCase() : rnBase
  const qRn = q === 'd' ? '°' : q === 'o7' ? '°' : q === 'ø7' ? 'ø' : q === 'A' ? '+' : ''
  const acc = alter ? accText(alter) : ''
  const rn = `${acc}${caseRn}${qRn}${rnFig(fig)}`
  if (alter === 0) {
    if (degree === 0 && (q === 'M' || q === 'm')) return { ...base, fn: 'T', ru: `${q === 'm' ? 't' : 'T'}${fig}`, rn }
    if (degree === 3 && (q === 'M' || q === 'm')) return { ...base, fn: 'S', ru: `${q === 'm' ? 's' : 'S'}${fig}`, rn }
    if (degree === 4 && (q === 'M' || q === 'm')) return { ...base, fn: 'D', ru: `${q === 'm' ? 'd' : 'D'}${fig}`, rn }
    if (degree === 4 && q === '7') return { ...base, fn: 'D', ru: `D${fig}`, rn }
    if (degree === 4 && (q === '9' || q === 'b9')) return { ...base, fn: 'D', ru: q === '9' ? 'D9' : 'D9♭', rn: `V${q === '9' ? '9' : '♭9'}` }
    if (degree === 6 && isDimish(q)) return { ...base, fn: 'D', ru: `VII${fig}`, rn }
    if (degree === 1) return { ...base, fn: 'S', ru: `II${fig}`, rn }
    if (degree === 5 || degree === 2) return { ...base, fn: degree === 5 ? undefined : undefined, ru: `${ROMAN[degree]}${fig}`, rn }
  }
  // chromatic or mixture: degree numeral with the root's alteration written after it (VI♭, III♭…)
  void minorTriad
  void prev
  return { ...base, ru: `${ROMAN[degree]}${acc}${fig}`, rn }
}
