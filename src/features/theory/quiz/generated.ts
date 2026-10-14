import type { QuizQuestion } from './types'

/**
 * Questions computed from music theory itself (intervals, triads, key signatures, relative keys, scale degrees),
 * so they are correct by construction. Each points to the library article that teaches the rule.
 */

const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const
const SOLFEGE = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si'] as const
const NATURAL = [0, 2, 4, 5, 7, 9, 11]

interface Note {
  letter: number // 0–6
  acc: number // -2…2
}

const ACC = (n: number) => (n === 2 ? '𝄪' : n === 1 ? '♯' : n === -1 ? '♭' : n === -2 ? '𝄫' : '')
const spell = (n: Note) => LETTERS[n.letter] + ACC(n.acc)
const solfa = (n: Note) => SOLFEGE[n.letter] + ACC(n.acc)
const pc = (n: Note) => (((NATURAL[n.letter] + n.acc) % 12) + 12) % 12
const parse = (s: string): Note => ({ letter: LETTERS.indexOf(s[0] as (typeof LETTERS)[number]), acc: s.includes('♯') ? 1 : s.includes('♭') ? -1 : 0 })

/** The note `steps` letters above `from` that lies `semis` semitones above it. */
function above(from: Note, steps: number, semis: number): Note {
  const letter = (from.letter + steps) % 7
  const natural = (NATURAL[letter] - NATURAL[from.letter] + 12) % 12
  let acc = semis - natural + from.acc
  if (acc > 6) acc -= 12
  if (acc < -6) acc += 12
  return { letter, acc }
}

/** Deterministic shuffle (so the generated bank is the same on every load). */
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
}

const pick3 = <T,>(pool: T[], not: T[], rnd: () => number): T[] => {
  const rest = pool.filter((p) => !not.includes(p))
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[rest[i], rest[j]] = [rest[j], rest[i]]
  }
  return rest.slice(0, 3)
}

const q = (question: string, answer: string, wrong: string[], slug: string): QuizQuestion => ({ q: question, a: answer, w: wrong.slice(0, 3) as QuizQuestion['w'], slug })

/* -------------------------------------------------------------- intervals */

const MAJOR_OR_PERFECT = [0, 0, 2, 4, 5, 7, 9, 11, 12] // by interval number 1–8
const PERFECT = new Set([1, 4, 5, 8])

function intervalName(lo: Note, hi: Note): string | null {
  const number = ((hi.letter - lo.letter + 7) % 7) + 1
  const semis = (pc(hi) - pc(lo) + 12) % 12
  const base = MAJOR_OR_PERFECT[number] % 12
  let diff = semis - base
  if (diff > 6) diff -= 12
  if (diff < -6) diff += 12
  const quality = PERFECT.has(number)
    ? { [-1]: 'giảm', 0: 'đúng', 1: 'tăng' }[diff]
    : { [-2]: 'giảm', [-1]: 'thứ', 0: 'trưởng', 1: 'tăng' }[diff]
  if (!quality || number === 1 || number === 8) return null
  return `quãng ${number} ${quality}`
}

function intervals(): QuizQuestion[] {
  const rnd = seeded(7)
  const lows = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'B♭', 'E♭', 'F♯', 'A♭', 'C♯', 'D♭', 'G♯'].map(parse)
  const out: QuizQuestion[] = []
  const seen = new Set<string>()
  for (const lo of lows) {
    for (let steps = 1; steps <= 6; steps++) {
      for (const acc of [-1, 0, 1]) {
        const letter = (lo.letter + steps) % 7
        const hi = { letter, acc }
        const name = intervalName(lo, hi)
        if (!name || pc(lo) === pc(hi) || seen.has(spell(lo) + spell(hi)) || rnd() > 0.42) continue
        seen.add(spell(lo) + spell(hi))
        const number = steps + 1
        const qualities = PERFECT.has(number) ? ['đúng', 'tăng', 'giảm'] : ['trưởng', 'thứ', 'tăng', 'giảm']
        const near = [number - 1, number + 1].filter((n) => n >= 2 && n <= 7).map((n) => `quãng ${n} ${PERFECT.has(n) ? 'đúng' : rnd() < 0.5 ? 'trưởng' : 'thứ'}`)
        const pool = [...qualities.map((x) => `quãng ${number} ${x}`), ...near]
        out.push(q(`Quãng từ ${spell(lo)} đi lên ${spell(hi)} là quãng gì?`, name, pick3(pool, [name], rnd), 'quang'))
      }
    }
  }
  return out
}

/* ---------------------------------------------------------------- triads */

const TRIADS = {
  trưởng: [4, 7],
  thứ: [3, 7],
  tăng: [4, 8],
  giảm: [3, 6],
} as const
type Quality = keyof typeof TRIADS

const triad = (root: Note, quality: Quality) => [root, above(root, 2, TRIADS[quality][0]), above(root, 4, TRIADS[quality][1])]
const spellChord = (notes: Note[]) => notes.map(spell).join(' – ')
const plain = (notes: Note[]) => notes.every((n) => Math.abs(n.acc) < 2)

function triads(): QuizQuestion[] {
  const rnd = seeded(11)
  const out: QuizQuestion[] = []
  const roots: [string, Quality][] = [
    ...['C', 'D', 'E', 'F', 'G', 'A', 'B♭', 'E♭', 'A♭', 'D♭'].map((r) => [r, 'trưởng'] as [string, Quality]),
    ...['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C♯', 'F♯', 'G♯'].map((r) => [r, 'thứ'] as [string, Quality]),
  ]
  for (const [r, quality] of roots) {
    const root = parse(r)
    const right = triad(root, quality)
    const others = (Object.keys(TRIADS) as Quality[]).filter((k) => k !== quality).map((k) => triad(root, k)).filter(plain).map(spellChord)
    if (others.length >= 3) out.push(q(`Hợp âm ${solfa(root)} ${quality} (${spell(root)}${quality === 'thứ' ? 'm' : ''}) gồm những nốt nào?`, spellChord(right), others, 'hop-am-ba'))
    const names = (Object.keys(TRIADS) as Quality[]).map((k) => `${solfa(root)} ${k}`)
    const third = right[1]
    names.push(`${solfa(third)} ${quality === 'trưởng' ? 'thứ' : 'trưởng'}`)
    out.push(q(`Ba nốt ${spellChord(right)} tạo thành hợp âm nào?`, `${solfa(root)} ${quality}`, pick3(names, [`${solfa(root)} ${quality}`], rnd), 'hop-am-ba'))
  }
  for (const r of ['C', 'D', 'G', 'A', 'B', 'E']) {
    const root = parse(r)
    for (const quality of ['tăng', 'giảm'] as Quality[]) {
      const right = triad(root, quality)
      if (!plain(right)) continue
      const others = (Object.keys(TRIADS) as Quality[]).filter((k) => k !== quality).map((k) => triad(root, k)).filter(plain).map(spellChord)
      if (others.length >= 3) out.push(q(`Hợp âm ${spell(root)} ${quality} gồm những nốt nào?`, spellChord(right), pick3(others, [], rnd), quality === 'tăng' ? 'hop-am-ba-tang' : 'hop-am-ba'))
    }
  }
  return out
}

/* --------------------------------------------------------- keys & degrees */

const SHARP_KEYS = ['G', 'D', 'A', 'E', 'B', 'F♯', 'C♯']
const FLAT_KEYS = ['F', 'B♭', 'E♭', 'A♭', 'D♭', 'G♭', 'C♭']
const sigName = (n: number, sharp: boolean) => `${n} dấu ${sharp ? 'thăng' : 'giáng'}`
const relMinor = (major: Note) => above(major, 5, 9)
const DEGREES = ['Chủ âm', 'Thượng chủ âm', 'Trung âm', 'Hạ át âm', 'Át âm', 'Hạ trung âm', 'Cảm âm']
const MAJOR_STEPS = [0, 2, 4, 5, 7, 9, 11]

function keys(): QuizQuestion[] {
  const rnd = seeded(23)
  const out: QuizQuestion[] = []
  const all: { key: Note; n: number; sharp: boolean }[] = [
    ...SHARP_KEYS.map((k, i) => ({ key: parse(k), n: i + 1, sharp: true })),
    ...FLAT_KEYS.map((k, i) => ({ key: parse(k), n: i + 1, sharp: false })),
  ]
  const sigPool = (n: number, sharp: boolean) => [sigName(n - 1 || n + 2, sharp), sigName(n + 1 > 7 ? n - 2 : n + 1, sharp), sigName(n, !sharp), sigName(Math.max(1, n === 1 ? 2 : n - 1), !sharp)]
  for (const { key, n, sharp } of all) {
    const ans = sigName(n, sharp)
    out.push(q(`Hoá biểu của giọng ${solfa(key)} trưởng có mấy dấu hoá?`, ans, pick3(sigPool(n, sharp), [ans], rnd), 'hoa-bieu'))
    const minor = relMinor(key)
    out.push(q(`Hoá biểu của giọng ${solfa(minor)} thứ có mấy dấu hoá?`, ans, pick3(sigPool(n, sharp), [ans], rnd), 'hoa-bieu'))
    const majors = all.filter((x) => x !== all.find((y) => y.key === key)).map((x) => `${solfa(x.key)} trưởng`)
    out.push(q(`Giọng trưởng nào có hoá biểu ${ans}?`, `${solfa(key)} trưởng`, pick3(majors.filter((m) => !m.startsWith(solfa(minor) + ' ')), [], rnd), 'vong-quang-nam'))
    const wrongMinors = [above(key, 2, 4), above(key, 3, 5), above(key, 1, 2), above(key, 4, 7)].map((x) => `${solfa(x)} thứ`)
    out.push(q(`Giọng thứ song song của ${solfa(key)} trưởng là giọng nào?`, `${solfa(minor)} thứ`, pick3(wrongMinors, [`${solfa(minor)} thứ`], rnd), 'giong-song-song'))
    if (n <= 5) {
      const wrongMajors = [above(minor, 3, 5), above(minor, 4, 7), above(minor, 1, 2), above(minor, 5, 9)].map((x) => `${solfa(x)} trưởng`)
      out.push(q(`Giọng trưởng song song của ${solfa(minor)} thứ là giọng nào?`, `${solfa(key)} trưởng`, pick3(wrongMajors, [`${solfa(key)} trưởng`], rnd), 'giong-song-song'))
      const dom = above(key, 4, 7)
      const sub = above(key, 3, 5)
      const sup = above(key, 1, 2)
      const lead = above(key, 6, 11)
      out.push(q(`Át âm (bậc V) của giọng ${solfa(key)} trưởng là nốt nào?`, spell(dom), [spell(sub), spell(sup), spell(lead)], 'bac-am-giai'))
      out.push(q(`Cảm âm (bậc VII) của giọng ${solfa(key)} trưởng là nốt nào?`, spell(lead), [spell(above(key, 6, 10)), spell(dom), spell(above(key, 5, 9))], 'bac-am-giai'))
    }
  }
  // Scale-degree names both ways (Đô trưởng as the reference).
  const c = parse('C')
  DEGREES.forEach((name, i) => {
    const note = above(c, i, MAJOR_STEPS[i])
    out.push(q(`Trong giọng trưởng, bậc ${['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][i]} gọi là gì?`, name, pick3(DEGREES, [name], rnd), 'bac-am-giai'))
    out.push(q(`Trong Đô trưởng, nốt nào là ${name.toLowerCase()}?`, spell(note), pick3(LETTERS.slice(), [spell(note)], rnd), 'bac-am-giai'))
  })
  // Harmonic minor raises the 7th degree.
  for (const r of ['A', 'E', 'D', 'B', 'G', 'C']) {
    const tonic = parse(r)
    const raised = above(tonic, 6, 11)
    const natural = above(tonic, 6, 10)
    out.push(q(`Âm giai ${solfa(tonic)} thứ hoà âm nâng bậc 7 thành nốt nào?`, spell(raised), [spell(natural), spell(above(tonic, 5, 9)), spell(above(tonic, 5, 8))], 'am-giai-thu'))
  }
  return out
}

/* ------------------------------------------------------- rhythm basics */

const RHYTHM: QuizQuestion[] = [
  q('Một nốt tròn bằng bao nhiêu nốt đen?', '4 nốt đen', ['2 nốt đen', '3 nốt đen', '8 nốt đen'], 'truong-do'),
  q('Một nốt trắng bằng bao nhiêu nốt móc đơn?', '4 nốt móc đơn', ['2 nốt móc đơn', '6 nốt móc đơn', '8 nốt móc đơn'], 'truong-do'),
  q('Một nốt đen bằng bao nhiêu nốt móc kép?', '4 nốt móc kép', ['2 nốt móc kép', '3 nốt móc kép', '8 nốt móc kép'], 'truong-do'),
  q('Một nốt móc đơn bằng bao nhiêu nốt móc kép?', '2 nốt móc kép', ['3 nốt móc kép', '4 nốt móc kép', '1 nốt móc kép'], 'truong-do'),
  q('Một nốt tròn bằng bao nhiêu nốt móc kép?', '16 nốt móc kép', ['8 nốt móc kép', '12 nốt móc kép', '32 nốt móc kép'], 'truong-do'),
  q('Nốt đen chấm dôi dài bằng bao nhiêu nốt móc đơn?', '3 nốt móc đơn', ['2 nốt móc đơn', '4 nốt móc đơn', '6 nốt móc đơn'], 'cham-doi-dau-noi'),
  q('Nốt trắng chấm dôi dài bằng bao nhiêu nốt đen?', '3 nốt đen', ['2 nốt đen', '4 nốt đen', '5 nốt đen'], 'cham-doi-dau-noi'),
  q('Chấm dôi cộng thêm bao nhiêu giá trị của nốt?', 'Một nửa giá trị nốt', ['Gấp đôi giá trị nốt', 'Một phần tư giá trị nốt', 'Đúng bằng giá trị nốt'], 'cham-doi-dau-noi'),
  q('Số chỉ nhịp 3/4 cho biết mỗi ô nhịp có gì?', '3 phách, mỗi phách là nốt đen', ['4 phách, mỗi phách là nốt móc đơn', '3 phách, mỗi phách là nốt trắng', '3 phách, mỗi phách là nốt đen chấm dôi'], 'so-chi-nhip'),
  q('Mỗi ô nhịp 6/8 có tổng trường độ bằng bao nhiêu nốt móc đơn?', '6 nốt móc đơn', ['8 nốt móc đơn', '3 nốt móc đơn', '12 nốt móc đơn'], 'so-chi-nhip'),
  q('Nhịp 6/8 thường được đếm thành mấy phách lớn mỗi ô?', '2 phách (nốt đen chấm dôi)', ['6 phách (nốt móc đơn)', '3 phách (nốt đen)', '4 phách (nốt móc đơn)'], 'so-chi-nhip'),
  q('Nhịp 2/2 (alla breve) lấy nốt gì làm một phách?', 'Nốt trắng', ['Nốt đen', 'Nốt tròn', 'Nốt móc đơn'], 'so-chi-nhip'),
  q('Liên ba móc đơn chiếm trường độ bằng bao nhiêu móc đơn thường?', '2 móc đơn', ['3 móc đơn', '4 móc đơn', '1 móc đơn'], 'lien-ba'),
  q('Mỗi ô nhịp 3/8 có tổng trường độ bằng nốt nào?', 'Nốt đen chấm dôi', ['Nốt trắng', 'Nốt đen', 'Nốt trắng chấm dôi'], 'so-chi-nhip'),
  q('Mỗi ô nhịp 4/4 có tổng trường độ bằng nốt nào?', 'Nốt tròn', ['Nốt trắng', 'Nốt trắng chấm dôi', 'Nốt đen chấm dôi'], 'so-chi-nhip'),
]

export const GENERATED: QuizQuestion[] = [...intervals(), ...triads(), ...keys(), ...RHYTHM]
