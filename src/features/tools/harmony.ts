/**
 * Small harmony engine for the calculators. Notes are spelled by letter + accidental, and every interval carries a
 * number of letter steps as well as semitones, so a key's chords come out spelled the way a musician writes them
 * (D♭7, not C♯7, as the tritone substitute in C).
 */
export interface Note {
  l: number // letter 0–6: C D E F G A B
  a: number // accidental: -2 … 2
}
/** [letter steps, semitones] from a root. */
export type Iv = readonly [number, number]

const LET = 'CDEFGAB'
const NAT = [0, 2, 4, 5, 7, 9, 11]
const ACC: Record<number, string> = { [-2]: '𝄫', [-1]: '♭', 0: '', 1: '♯', 2: '𝄪' }

export const pc = (n: Note) => (((NAT[n.l] + n.a) % 12) + 12) % 12
export const name = (n: Note) => LET[n.l] + ACC[n.a]

export function up(n: Note, [steps, semis]: Iv): Note {
  const l = (((n.l + steps) % 7) + 7) % 7
  let a = (pc(n) + semis - NAT[l]) % 12
  if (a > 6) a -= 12
  if (a < -6) a += 12
  return { l, a }
}

/** Chromatic chords read better with the plain spelling: F♭7 → E7, C♭m7 → Bm7 (accidental direction kept). */
export function simplify(n: Note): Note {
  const odd = Math.abs(n.a) === 2 || (n.a === -1 && (n.l === 3 || n.l === 0)) || (n.a === 1 && (n.l === 2 || n.l === 6))
  if (!odd) return n
  const p = pc(n)
  const l = NAT.indexOf(p)
  if (l >= 0) return { l, a: 0 }
  const flat = n.a < 0
  return flat ? { l: NAT.indexOf(p + 1), a: -1 } : { l: NAT.indexOf(p - 1), a: 1 }
}

export function parse(s: string): Note | null {
  const m = /^([A-Ga-g])(𝄪|##|x|♯|#|𝄫|bb|♭|b)?/.exec(s.trim())
  if (!m) return null
  const acc = m[2] ?? ''
  const a = /𝄪|##|x/.test(acc) ? 2 : /𝄫|bb/.test(acc) ? -2 : /♯|#/.test(acc) ? 1 : /♭|b/.test(acc) ? -1 : 0
  return { l: LET.indexOf(m[1].toUpperCase()), a }
}

/** MIDI numbers for a chord or scale rooted near middle C. */
export function midis(root: Note, ivs: readonly Iv[]) {
  let base = 60 + pc(root)
  if (base > 66) base -= 12
  return ivs.map(([, s]) => base + s)
}

/** Keys in circle-of-fifths order, as the key picker shows them. */
export const KEYS: Note[] = ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'].map((k) => parse(k)!)

/* ----------------------------------------------------------------- chords */

export interface Quality {
  id: string
  label: string
  ivs: Iv[]
}
const R: Iv = [0, 0]
export const QUALITIES: Quality[] = [
  { id: '', label: 'trưởng', ivs: [R, [2, 4], [4, 7]] },
  { id: 'm', label: 'thứ', ivs: [R, [2, 3], [4, 7]] },
  { id: '°', label: 'giảm', ivs: [R, [2, 3], [4, 6]] },
  { id: '+', label: 'tăng', ivs: [R, [2, 4], [4, 8]] },
  { id: 'sus2', label: 'sus2', ivs: [R, [1, 2], [4, 7]] },
  { id: 'sus4', label: 'sus4', ivs: [R, [3, 5], [4, 7]] },
  { id: '6', label: 'sáu', ivs: [R, [2, 4], [4, 7], [5, 9]] },
  { id: 'm6', label: 'thứ sáu', ivs: [R, [2, 3], [4, 7], [5, 9]] },
  { id: 'maj7', label: 'bảy trưởng', ivs: [R, [2, 4], [4, 7], [6, 11]] },
  { id: '7', label: 'bảy át', ivs: [R, [2, 4], [4, 7], [6, 10]] },
  { id: 'm7', label: 'thứ bảy', ivs: [R, [2, 3], [4, 7], [6, 10]] },
  { id: 'mMaj7', label: 'thứ – bảy trưởng', ivs: [R, [2, 3], [4, 7], [6, 11]] },
  { id: 'ø7', label: 'nửa giảm (m7♭5)', ivs: [R, [2, 3], [4, 6], [6, 10]] },
  { id: '°7', label: 'giảm bảy', ivs: [R, [2, 3], [4, 6], [6, 9]] },
  { id: '7sus4', label: 'bảy sus4', ivs: [R, [3, 5], [4, 7], [6, 10]] },
  { id: 'maj7♯5', label: 'bảy trưởng tăng', ivs: [R, [2, 4], [4, 8], [6, 11]] },
  { id: 'add9', label: 'thêm 9', ivs: [R, [2, 4], [4, 7], [8, 14]] },
  { id: 'maj9', label: 'chín trưởng', ivs: [R, [2, 4], [4, 7], [6, 11], [8, 14]] },
  { id: '9', label: 'chín át', ivs: [R, [2, 4], [4, 7], [6, 10], [8, 14]] },
  { id: 'm9', label: 'thứ chín', ivs: [R, [2, 3], [4, 7], [6, 10], [8, 14]] },
  { id: '7♭9', label: 'bảy ♭9', ivs: [R, [2, 4], [4, 7], [6, 10], [8, 13]] },
  { id: '7♯9', label: 'bảy ♯9', ivs: [R, [2, 4], [4, 7], [6, 10], [8, 15]] },
  { id: '7♯11', label: 'bảy ♯11', ivs: [R, [2, 4], [4, 7], [6, 10], [10, 18]] },
  { id: '13', label: 'mười ba', ivs: [R, [2, 4], [4, 7], [6, 10], [8, 14], [12, 21]] },
  { id: '7alt', label: 'alt (♭9 ♯9 ♯11 ♭13)', ivs: [R, [2, 4], [6, 10], [8, 13], [8, 15], [10, 18], [12, 20]] },
]
const Q = Object.fromEntries(QUALITIES.map((q) => [q.id, q]))

export interface Chord {
  root: Note
  q: string
  /** Roman numeral or role, e.g. "ii", "V7/V", "subV". */
  role?: string
  fn?: 'T' | 'S' | 'D'
}
export const symbol = (c: Chord) => name(c.root) + c.q
export const chordNotes = (c: Chord) => Q[c.q].ivs.map((iv) => up(c.root, iv))
export const chordMidis = (c: Chord) => midis(c.root, Q[c.q].ivs)

/** Name a set of pitch classes as a chord, trying every root and quality (simplest qualities first). */
export function identify(pcs: number[]): Chord[] {
  const set = new Set(pcs.map((p) => ((p % 12) + 12) % 12))
  if (set.size < 2) return []
  const out: Chord[] = []
  for (const q of QUALITIES) {
    if (q.ivs.length !== set.size) continue
    for (const root of KEYS.concat(['C♯', 'G♭', 'D♯', 'G♯', 'A♯'].map((k) => parse(k)!))) {
      const want = new Set(q.ivs.map(([, s]) => (pc(root) + s) % 12))
      if ([...want].every((p) => set.has(p))) out.push({ root, q: q.id })
    }
  }
  // One spelling per root pitch class.
  return out.filter((c, i) => out.findIndex((d) => pc(d.root) === pc(c.root) && d.q === c.q) === i)
}

/* ----------------------------------------------------------------- scales */

export interface Scale {
  id: string
  label: string
  ivs: Iv[]
}
const MAJOR: Iv[] = [R, [1, 2], [2, 4], [3, 5], [4, 7], [5, 9], [6, 11]]
const rotate = (base: Iv[], k: number): Iv[] => {
  const [s0, m0] = base[k]
  return base.map((_, i) => base[(i + k) % 7]).map(([s, m]) => [(s - s0 + 7) % 7, (m - m0 + 12) % 12] as Iv)
}
export const SCALES: Scale[] = [
  { id: 'major', label: 'Trưởng (Ionian)', ivs: MAJOR },
  { id: 'minor', label: 'Thứ tự nhiên (Aeolian)', ivs: rotate(MAJOR, 5) },
  { id: 'harmonic', label: 'Thứ hoà thanh', ivs: [R, [1, 2], [2, 3], [3, 5], [4, 7], [5, 8], [6, 11]] },
  { id: 'melodic', label: 'Thứ giai điệu (đi lên)', ivs: [R, [1, 2], [2, 3], [3, 5], [4, 7], [5, 9], [6, 11]] },
  { id: 'dorian', label: 'Dorian', ivs: rotate(MAJOR, 1) },
  { id: 'phrygian', label: 'Phrygian', ivs: rotate(MAJOR, 2) },
  { id: 'lydian', label: 'Lydian', ivs: rotate(MAJOR, 3) },
  { id: 'mixolydian', label: 'Mixolydian', ivs: rotate(MAJOR, 4) },
  { id: 'locrian', label: 'Locrian', ivs: rotate(MAJOR, 6) },
  { id: 'penta', label: 'Ngũ cung trưởng', ivs: [R, [1, 2], [2, 4], [4, 7], [5, 9]] },
  { id: 'pentam', label: 'Ngũ cung thứ', ivs: [R, [2, 3], [3, 5], [4, 7], [6, 10]] },
  { id: 'blues', label: 'Blues', ivs: [R, [2, 3], [3, 5], [4, 6], [4, 7], [6, 10]] },
  { id: 'whole', label: 'Toàn cung', ivs: [R, [1, 2], [2, 4], [3, 6], [4, 8], [5, 10]] },
  { id: 'dimHW', label: 'Giảm (nửa – nguyên)', ivs: [R, [1, 1], [2, 3], [2, 4], [3, 6], [4, 7], [5, 9], [6, 10]] },
  { id: 'bebop', label: 'Bebop át', ivs: [R, [1, 2], [2, 4], [3, 5], [4, 7], [5, 9], [6, 10], [6, 11]] },
  { id: 'altered', label: 'Altered (super-locrian)', ivs: [R, [1, 1], [2, 3], [2, 4], [4, 6], [5, 8], [6, 10]] },
]
export const scaleNotes = (tonic: Note, s: Scale) => s.ivs.map((iv) => up(tonic, iv))

/* ------------------------------------------------------- chords of a key */

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const triadQ = (a: number, b: number) => (a === 4 && b === 7 ? '' : a === 3 && b === 7 ? 'm' : a === 3 && b === 6 ? '°' : a === 4 && b === 8 ? '+' : null)
const seventhQ = (a: number, b: number, c: number) =>
  ({ '4711': 'maj7', '4710': '7', '3710': 'm7', '3711': 'mMaj7', '3610': 'ø7', '369': '°7', '4811': 'maj7♯5' } as Record<string, string>)[`${a}${b}${c}`] ?? null

function roman(degree: number, semis: number, q: string) {
  const diff = semis - MAJOR[degree][1]
  const acc = diff < 0 ? '♭' : diff > 0 ? '♯' : ''
  const minorish = /^(m(?!aj)|°|ø)/.test(q)
  const r = minorish ? ROMAN[degree].toLowerCase() : ROMAN[degree]
  const suffix = q === '°' ? '°' : q === '+' ? '+' : q === 'm' || q === '' ? '' : q === 'm7' ? '7' : q === 'mMaj7' ? '(maj7)' : q
  return acc + r + suffix
}
const FUNCTION: ('T' | 'S' | 'D')[] = ['T', 'S', 'T', 'S', 'D', 'T', 'D']

/** Triads and seventh chords built on each degree of a heptatonic scale. */
export function diatonic(tonic: Note, s: Scale, sevenths: boolean): Chord[] {
  if (s.ivs.length !== 7) return []
  const iv = s.ivs
  return iv.map((_, d) => {
    const at = (k: number) => iv[(d + k) % 7][1] + (d + k >= 7 ? 12 : 0) - iv[d][1]
    const q = sevenths ? seventhQ(at(2), at(4), at(6)) : triadQ(at(2), at(4))
    const root = up(tonic, iv[d])
    return { root, q: q ?? (sevenths ? '7' : ''), role: roman(d, iv[d][1], q ?? ''), fn: FUNCTION[d] }
  })
}

/* ----------------------------------------------------------- jazz tools */

export interface Progression {
  title: string
  note: string
  chords: Chord[]
}
const c = (root: Note, q: string, role: string): Chord => ({ root: simplify(root), q, role })

export function jazz(T: Note): Progression[] {
  const at = (iv: Iv) => up(T, iv)
  return [
    { title: 'ii – V – I trưởng', note: 'Vòng hoà thanh cơ bản nhất của jazz.', chords: [c(at([1, 2]), 'm7', 'iim7'), c(at([4, 7]), '7', 'V7'), c(T, 'maj7', 'Imaj7')] },
    { title: 'ii – V – i thứ', note: 'Bậc ii nửa giảm, át có ♭9, chủ thứ.', chords: [c(at([1, 2]), 'ø7', 'iiø7'), c(at([4, 7]), '7♭9', 'V7♭9'), c(T, 'm6', 'im6')] },
    { title: 'Thay thế tritone (subV)', note: 'Át V7 thay bằng hợp âm bảy át cách nó một quãng ba cung; bè trầm đi nửa cung xuống chủ.', chords: [c(at([1, 2]), 'm7', 'iim7'), c(at([1, 1]), '7', 'subV7'), c(T, 'maj7', 'Imaj7')] },
    { title: 'ii – subV liên quan', note: 'Bậc ii của chính hợp âm thay thế (ii liên quan của subV).', chords: [c(at([5, 8]), 'm7', 'ii/subV'), c(at([1, 1]), '7', 'subV7'), c(T, 'maj7', 'Imaj7')] },
    { title: 'Backdoor ii – V', note: 'Từ giọng thứ cùng tên: iv thứ bảy rồi ♭VII7 về chủ.', chords: [c(at([3, 5]), 'm7', 'ivm7'), c(at([6, 10]), '7', '♭VII7'), c(T, 'maj7', 'Imaj7')] },
    { title: 'Turnaround I – vi – ii – V', note: 'Vòng quay về đầu ở cuối đoạn.', chords: [c(T, 'maj7', 'Imaj7'), c(at([5, 9]), 'm7', 'vim7'), c(at([1, 2]), 'm7', 'iim7'), c(at([4, 7]), '7', 'V7')] },
    { title: 'Turnaround I – VI7 – ii – V', note: 'vi đổi thành át phụ của ii.', chords: [c(T, 'maj7', 'Imaj7'), c(at([5, 9]), '7', 'VI7'), c(at([1, 2]), 'm7', 'iim7'), c(at([4, 7]), '7', 'V7')] },
    { title: 'Turnaround iii – VI7 – ii – V', note: 'Bắt đầu từ iii (thay cho I).', chords: [c(at([2, 4]), 'm7', 'iiim7'), c(at([5, 9]), '7', 'VI7'), c(at([1, 2]), 'm7', 'iim7'), c(at([4, 7]), '7', 'V7')] },
    { title: 'Turnaround tritone', note: 'Mọi át đều thay tritone: I – ♭III7 – ♭VI7 – ♭II7.', chords: [c(T, 'maj7', 'Imaj7'), c(at([2, 3]), '7', '♭III7'), c(at([5, 8]), '7', '♭VI7'), c(at([1, 1]), '7', '♭II7')] },
    { title: 'Blues 12 ô (jazz)', note: 'I7 | IV7 | I7 | I7 | IV7 | IV7 | I7 | VI7 | ii | V | I7 VI7 | ii V — mỗi hợp âm một ô (rút gọn).', chords: [c(T, '7', 'I7'), c(at([3, 5]), '7', 'IV7'), c(T, '7', 'I7'), c(at([5, 9]), '7', 'VI7'), c(at([1, 2]), 'm7', 'iim7'), c(at([4, 7]), '7', 'V7')] },
  ]
}

/** Secondary dominants of each diatonic target, with their tritone substitutes and related ii. */
export function secondary(T: Note) {
  const targets: [Iv, string, boolean][] = [
    [[1, 2], 'ii', true],
    [[2, 4], 'iii', true],
    [[3, 5], 'IV', false],
    [[4, 7], 'V', false],
    [[5, 9], 'vi', true],
  ]
  return targets.map(([iv, label, minor]) => {
    const t = up(T, iv)
    return {
      target: c(t, minor ? 'm7' : iv[0] === 3 ? 'maj7' : '7', label),
      ii: c(up(t, [1, 2]), minor ? 'ø7' : 'm7', `ii/${label}`),
      dom: c(up(t, [4, 7]), minor ? '7♭9' : '7', `V7/${label}`),
      sub: c(up(t, [1, 1]), '7', `subV/${label}`),
    }
  })
}

/** Chords borrowed from the parallel minor (modal interchange). */
export function borrowed(T: Note): Chord[] {
  const at = (iv: Iv) => up(T, iv)
  return [c(at([3, 5]), 'm', 'iv'), c(at([3, 5]), 'm6', 'ivm6'), c(at([5, 8]), 'maj7', '♭VImaj7'), c(at([6, 10]), '7', '♭VII7'), c(at([2, 3]), 'maj7', '♭IIImaj7'), c(at([1, 2]), 'ø7', 'iiø7'), c(at([1, 1]), 'maj7', '♭IImaj7 (Napoli)')]
}

/* -------------------------------------------------------------- intervals */

const IV_NAMES: Record<string, string> = {
  '0,0': 'đồng âm', '0,1': 'đồng âm tăng', '1,1': '2 thứ', '1,2': '2 trưởng', '1,3': '2 tăng', '2,2': '3 giảm', '2,3': '3 thứ', '2,4': '3 trưởng', '2,5': '3 tăng',
  '3,4': '4 giảm', '3,5': '4 đúng', '3,6': '4 tăng', '4,6': '5 giảm', '4,7': '5 đúng', '4,8': '5 tăng', '5,7': '6 giảm', '5,8': '6 thứ', '5,9': '6 trưởng', '5,10': '6 tăng',
  '6,9': '7 giảm', '6,10': '7 thứ', '6,11': '7 trưởng',
}
/** The interval from a up to b (within an octave), named the Vietnamese way: "3 trưởng", "5 đúng"… */
export function interval(a: Note, b: Note) {
  const steps = (b.l - a.l + 7) % 7
  const semis = (pc(b) - pc(a) + 12) % 12
  return { steps, semis, name: IV_NAMES[`${steps},${semis}`] ?? `${steps + 1} (${semis} nửa cung)` }
}

/* -------------------------------------------------------------- transpose */

/** Transpose chord symbols in free text ("C Am7 F/G G7") from one key to another, spelling roots in the new key. */
export function transpose(text: string, from: Note, to: Note) {
  const iv: Iv = [(to.l - from.l + 7) % 7, (pc(to) - pc(from) + 12) % 12]
  return text.replace(/(^|[\s|(/–-])([A-G](?:𝄪|##|♯|#|𝄫|bb|♭|b)?)/g, (_, pre: string, n: string) => pre + name(up(parse(n)!, iv)))
}

export function tempoName(bpm: number) {
  return bpm < 40 ? 'Grave' : bpm < 60 ? 'Largo' : bpm < 66 ? 'Larghetto' : bpm < 76 ? 'Adagio' : bpm < 108 ? 'Andante' : bpm < 120 ? 'Moderato' : bpm < 156 ? 'Allegro' : bpm < 176 ? 'Vivace' : bpm < 200 ? 'Presto' : 'Prestissimo'
}
