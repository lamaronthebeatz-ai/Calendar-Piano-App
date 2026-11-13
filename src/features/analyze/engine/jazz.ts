import { core, type Chord } from './chords'
import { keyPc, type Key } from './key'
import { accText, intervalOf, mod } from './pitch'
import { QUALITY_SYMBOL } from './symbols'

const NUM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const MAJOR = [0, 2, 4, 5, 7, 9, 11]

/** A chord read the jazz way. */
export type JazzReading = {
  /** "IIm7", "V7", "♭VII7", "SubV7/II"… numerals counted from the major scale of the key's tonic */
  rn: string
  /** the scale to play over it (Levine), and its tones */
  scale: string
  /** guide tones: third and seventh, the notes that define the chord */
  guide: string
  role?: 'II' | 'V' | 'I' | 'subV' | 'secV' | 'backdoor' | 'dim'
}
export type Pattern = { kind: 'II–V–I' | 'II–V' | 'SubV' | 'V/x' | 'backdoor' | 'turnaround'; from: number; to: number; target?: string }

/** Numeral of a root in a key, counted from the tonic's major scale (♭III, ♭VII…) — the jazz convention. */
function numeral(c: Chord, k: Key) {
  const [steps, semis] = intervalOf(k.tonic, c.rootName)
  const alter = mod(semis - MAJOR[steps] + 6, 12) - 6
  return `${alter ? accText(alter) : ''}${NUM[steps]}`
}

/**
 * The chord-scale of a chord in its context, after Mark Levine's *The Jazz Theory Book*: II → Dorian, III →
 * Phrygian, VI → Aeolian, I and maj7 → Ionian (Lydian on IV or with ♯11), V7 → Mixolydian, altered or ♭9 dominants →
 * altered / half-whole diminished, a dominant resolving to minor → Phrygian dominant (Mixolydian ♭9 ♭13), ø7 → Locrian
 * ♮2, °7 → whole-half diminished, sus → Mixolydian sus, m(maj7) → melodic minor.
 */
function scaleOf(c: Chord, k: Key, deg: number, nextMinor: boolean): string {
  const q = c.quality
  if (q === 'M7' || q === 'M9' || q === '6' || q === '69' || q === 'M') return deg === 3 ? 'Lydian' : 'Ionian (trưởng)'
  if (q === 'm7' || q === 'm9' || q === 'm11' || q === 'm' || q === 'm6') return deg === 2 ? 'Phrygian' : deg === 5 ? 'Aeolian' : 'Dorian'
  if (q === 'mM7') return 'thứ giai điệu'
  if (q === 'ø7') return 'Locrian ♮2'
  if (q === 'o7' || q === 'd') return 'giảm (cung – nửa cung)'
  if (q === '7sus4' || q === 'sus4') return 'Mixolydian (sus)'
  if (q === '7alt' || q === '#9') return 'altered (thứ giai điệu từ bậc VII)'
  if (q === 'b9') return 'giảm (nửa cung – cung)'
  if (q === '7#11') return 'Lydian ♭7 (Lydian dominant)'
  if (core(q) === '7') return nextMinor ? 'Mixolydian ♭9 ♭13 (Phrygian dominant)' : 'Mixolydian'
  void k
  return 'Ionian (trưởng)'
}

export function readJazz(c: Chord, k: Key, next?: Chord): JazzReading {
  const t = keyPc(k)
  const deg = intervalOf(k.tonic, c.rootName)[0]
  const sym = QUALITY_SYMBOL[c.quality]
  const nextMinor = !!next && core(next.quality) === 'm'
  let rn = `${numeral(c, k)}${sym}`
  let role: JazzReading['role']
  const q = core(c.quality)
  if (next && q === '7' && mod(next.root - c.root, 12) === 11) {
    rn = `SubV${sym === '7' ? '7' : sym}/${numeral(next, k)}`
    role = 'subV'
  } else if (next && q === '7' && mod(next.root - c.root, 12) === 5 && mod(c.root - t, 12) !== 7 && mod(c.root - t, 12) !== 0) {
    rn = `V${sym}/${numeral(next, k)}`
    role = 'secV'
  } else if (q === '7' && mod(c.root - t, 12) === 10 && next && mod(next.root - t, 12) === 0) role = 'backdoor'
  else if (q === '7' && mod(c.root - t, 12) === 7) role = 'V'
  else if (q === 'm' && mod(c.root - t, 12) === 2) role = 'II'
  else if (mod(c.root - t, 12) === 0) role = 'I'
  else if (q === 'd') role = 'dim'
  return { rn, scale: scaleOf(c, k, deg, nextMinor), guide: guideTones(c), role }
}

/** Guide tones: the third and seventh (the sixth on sixth chords); a triad has only its third to define it. */
function guideTones(c: Chord): string {
  const third = c.tones.find((x) => intervalOf(c.rootName, x)[0] === 2)
  const seventh = c.tones.find((x) => intervalOf(c.rootName, x)[0] === 6) ?? c.tones.find((x) => intervalOf(c.rootName, x)[0] === 5)
  const nm = (x: { step: number; alter: number }) => 'CDEFGAB'[x.step] + accText(x.alter)
  if (third && seventh) return `${nm(third)} – ${nm(seventh)}`
  return third ? `${nm(third)} (hợp âm ba: chỉ quãng 3)` : seventh ? nm(seventh) : '—'
}

/**
 * Progressions jazz players name: II–V(–I) (a minor-seventh or half-diminished chord, then a dominant a fourth up,
 * then its target), tritone substitutes (a dominant falling a semitone), secondary dominants, the backdoor ♭VII7 → I,
 * and the I–VI–II–V turnaround.
 */
export function patternsOf(chords: Chord[], keys: Key[]): Pattern[] {
  const out: Pattern[] = []
  for (let i = 0; i + 1 < chords.length; i++) {
    const a = chords[i]
    const b = chords[i + 1]
    const c = chords[i + 2]
    const qa = core(a.quality)
    const qb = core(b.quality)
    if ((qa === 'm' || a.quality === 'ø7') && qb === '7' && mod(b.root - a.root, 12) === 5) {
      const resolves = !!c && mod(c.root - b.root, 12) === 5
      out.push({ kind: resolves ? 'II–V–I' : 'II–V', from: i, to: resolves ? i + 2 : i + 1, target: resolves ? `${'CDEFGAB'[c!.rootName.step]}${accText(c!.rootName.alter)}${core(c!.quality) === 'm' ? 'm' : ''}` : undefined })
      continue
    }
    if (qa === '7' && mod(b.root - a.root, 12) === 11) out.push({ kind: 'SubV', from: i, to: i + 1 })
    else if (qa === '7' && mod(b.root - a.root, 12) === 5 && ![0, 7].includes(mod(a.root - keyPc(keys[i]), 12))) out.push({ kind: 'V/x', from: i, to: i + 1 })
    else if (qa === '7' && mod(a.root - keyPc(keys[i]), 12) === 10 && mod(b.root - keyPc(keys[i]), 12) === 0) out.push({ kind: 'backdoor', from: i, to: i + 1 })
  }
  // I – VI – II – V turnarounds
  for (let i = 0; i + 3 < chords.length; i++) {
    const t = keyPc(keys[i])
    const r = [0, 1, 2, 3].map((d) => mod(chords[i + d].root - t, 12))
    if (r[0] === 0 && r[1] === 9 && r[2] === 2 && r[3] === 7) out.push({ kind: 'turnaround', from: i, to: i + 3 })
  }
  return out.sort((x, y) => x.from - y.from)
}
