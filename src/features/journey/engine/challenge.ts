import { HEXACHORDS, keyNotes, figuredNotes, noteAt, scaleSet, syllableOf, FIGURES, type Figure, type FiguredContent, type HexachordContent, type NeumeContent, type ScaleContent } from './puzzles'
import type { PuzzleDef } from './types'

/**
 * A music challenge for every story stop, after the stop's question: the skill of its era (đọc neume, hexachord, bè trầm
 * có số, dựng thang âm). Built from the stop's id so it is the same every visit; the answer is always worked out by the
 * puzzle kinds' own functions, never written by hand.
 */
const hash = (s: string) => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0, 2166136261)
function rng(seed: string) {
  let x = hash(seed) || 1
  return () => ((x = (Math.imul(x, 1103515245) + 12345) >>> 0) / 4294967296)
}
const pickOf = (r: () => number) => <T,>(xs: readonly T[]) => xs[Math.floor(r() * xs.length)]
const LETTER = 'CDEFGAB'
const spell = (n: { l: number; a: number }) => LETTER[n.l] + (n.a > 0 ? '#'.repeat(n.a) : 'b'.repeat(-n.a))
const ID = 'abcdef'

type Gen = (id: string, r: () => number, level: number) => PuzzleDef
const SCALE_NAME: Record<string, string> = { major: 'trưởng', minor: 'thứ tự nhiên', harmonic: 'thứ hoà thanh', dorian: 'Dorian', phrygian: 'Phrygian', mixolydian: 'Mixolydian', penta: 'ngũ cung trưởng', pentam: 'ngũ cung thứ' }
const VI: Record<string, string> = { C: 'Đô', D: 'Rê', E: 'Mi', F: 'Fa', G: 'Sol', A: 'La', B: 'Si' }
const tonicName = (t: string) => VI[t[0]] + (t[1] === '#' ? '♯' : t[1] === 'b' ? '♭' : '')

const neume: Gen = (id, r, level) => {
  const pick = pickOf(r)
  const clef: NeumeContent['clef'] = { type: pick(['c', 'f'] as const), line: pick([2, 3, 4] as const) }
  // a chant-like line: mostly steps, now and then a third, inside the four-line staff
  const notes: number[] = [Math.floor(r() * 8)]
  while (notes.length < 4 + level) {
    const p = notes[notes.length - 1] + pick([-2, -1, -1, 1, 1, 2])
    notes.push(Math.max(0, Math.min(7, p)))
  }
  const answer = notes.map((p) => noteAt(clef, p))
  const name = clef.type === 'c' ? 'Đô' : 'Fa'
  return {
    id, type: 'neume', difficulty: (2 + Math.min(level, 2)) as 2 | 3 | 4, title: 'Đọc một dòng neume',
    instructions: `Khoá ${name} ở dòng thứ ${clef.line} (tính từ dưới). Gọi tên ${notes.length} nốt, từ trái sang phải.`,
    content: { ask: 'Gọi tên các nốt (Đô, Rê, Mi…).', clef, notes }, answer,
    hints: [`Nốt nằm đúng trên dòng có khoá ${name} là ${name}.`, 'Mỗi bước dòng → khe → dòng là lên một bậc.'],
    explanation: `Khoá ${name} ở dòng ${clef.line} nên nốt trên dòng đó là ${name}; đếm lên xuống từng bậc: ${answer.join(' – ')}.`,
    skills: ['theory'], links: ['a:ky-am-binh-ca-gregorian'],
  }
}

const hexachord: Gen = (id, r, level) => {
  const pick = pickOf(r)
  const seen = new Set<string>()
  const items: HexachordContent['items'] = []
  while (items.length < 3 + Math.min(level, 2)) {
    const h = pick(Object.keys(HEXACHORDS) as (keyof typeof HEXACHORDS)[])
    const note = pick(HEXACHORDS[h])
    if (seen.has(h + note)) continue
    seen.add(h + note)
    items.push({ id: ID[items.length], note, hexachord: h })
  }
  const answer = Object.fromEntries(items.map((x) => [x.id, syllableOf(x.note, x.hexachord)!]))
  return {
    id, type: 'hexachord', difficulty: 3, title: 'Gọi tên âm tiết theo hexachord',
    instructions: 'Mỗi nốt nằm trong một hexachord. Gọi tên âm tiết của nó (ut, re, mi, fa, sol, la).',
    content: { ask: 'Âm tiết của từng nốt.', items }, answer,
    hints: ['Âm tiết tính từ nốt đầu của hexachord: naturale từ Đô, durum từ Sol, molle từ Fa.', 'Nửa cung duy nhất trong hexachord luôn là mi – fa.'],
    explanation: items.map((x) => `${x.note} trong hexachord ${x.hexachord} là ${answer[x.id]}`).join('; ') + '.',
    skills: ['theory'], links: ['a:hexachord-va-ban-tay-guido'],
  }
}

const figuredIn = (keys: string[]): Gen => (id, r, level) => {
  const pick = pickOf(r)
  const key = pick(keys)
  const scale = keyNotes(key)
  const figs = (level < 1 ? ['5/3', '6'] : level < 3 ? ['5/3', '6', '6/4'] : Object.keys(FIGURES)) as Figure[]
  const items: FiguredContent['items'] = []
  while (items.length < 3) {
    const bass = spell(scale[Math.floor(r() * 7)])
    const figure = pick(figs)
    if (items.some((x) => x.bass === bass && x.figure === figure)) continue
    items.push({ id: ID[items.length], bass, figure })
  }
  const answer = Object.fromEntries(items.map((x) => [x.id, figuredNotes(key, x.bass, x.figure)!]))
  return {
    id, type: 'figured', difficulty: 3, title: 'Đệm theo bè trầm có số',
    instructions: `Giọng ${tonicName(key)} trưởng. Với mỗi nốt trầm và con số, chọn các nốt phải chơi phía trên (không tính lại nốt trầm).`,
    content: { ask: 'Các nốt phía trên bè trầm.', key, items }, answer,
    hints: ['Con số là quãng tính từ nốt trầm, theo các nốt của giọng.', '5/3: quãng 3 và quãng 5; 6: quãng 3 và quãng 6; 6/4: quãng 4 và quãng 6.'],
    explanation: items.map((x) => `${tonicName(x.bass)} – ${x.figure}: ${answer[x.id].join(', ')}`).join('; ') + '.',
    skills: ['theory'], links: ['a:bass-so'],
  }
}

const scalesIn = (tonics: string[], scales: string[], link: `a:${string}`): Gen => (id, r) => {
  const pick = pickOf(r)
  const items: ScaleContent['items'] = []
  while (items.length < 2) {
    const tonic = pick(tonics)
    const scale = pick(scales)
    if (items.some((x) => x.tonic === tonic && x.scale === scale)) continue
    items.push({ id: ID[items.length], tonic, scale })
  }
  const answer = Object.fromEntries(items.map((x) => [x.id, scaleSet(x.tonic, x.scale)!]))
  return {
    id, type: 'scale', difficulty: 3, title: 'Dựng thang âm',
    instructions: 'Chọn đủ các nốt của từng thang âm, tính từ chủ âm.',
    content: { ask: 'Các nốt của thang âm.', items }, answer,
    hints: ['Bắt đầu từ chủ âm rồi đi theo công thức cung – nửa cung của thang.', 'Ngũ cung chỉ có năm nốt: bỏ hai bậc tạo nửa cung của âm giai bảy nốt.'],
    explanation: items.map((x) => `${SCALE_NAME[x.scale]} trên ${tonicName(x.tonic)}: ${answer[x.id].join(' – ')}`).join('; ') + '.',
    skills: ['theory'], links: [link],
  }
}

const VN = scalesIn(['C', 'D', 'F', 'G', 'A'], ['penta', 'pentam'], 'a:am-giai-ngu-cung')
const BY_CHAPTER: Record<string, Gen> = {
  'trung-co': neume,
  'phuc-hung': hexachord,
  baroque: figuredIn(['C', 'G', 'F']),
  'co-dien': figuredIn(['C', 'G', 'F', 'D', 'Bb']),
  'lang-man': scalesIn(['C', 'D', 'E', 'G', 'A'], ['major', 'minor', 'harmonic'], 'a:am-giai-thu'),
  'quoc-gia': scalesIn(['D', 'E', 'G', 'A'], ['dorian', 'mixolydian', 'penta', 'pentam'], 'a:dieu-thuc'),
}

/** The challenge of a story stop (null for a chapter with no musical skill set yet). */
export function sceneChallenge(chapter: string, scene: string, index: number): PuzzleDef | null {
  const gen = BY_CHAPTER[chapter] ?? (chapter.startsWith('vn-') ? VN : undefined)
  return gen ? gen(`pz:ch/${chapter}/${scene}`, rng(`${chapter}/${scene}`), index) : null
}
