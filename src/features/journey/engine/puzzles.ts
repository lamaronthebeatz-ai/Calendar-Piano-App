import { normalize } from '../../theory/keyIndex'
import type { PuzzleDef } from './types'

/**
 * Puzzle types. Each knows how to check an answer (`check`) and whether a puzzle's own answer is well formed and
 * solves it (`valid` — the validator runs it on every puzzle, so no puzzle ships without a reachable answer).
 * `wrong` names the parts that are off, so the screen can mark them and the player retries only those.
 */
export interface Result {
  ok: boolean
  /** parts that are wrong (choice index, item ids, blank ids) */
  wrong: string[]
  /** key of a specific explanation in `feedback` */
  feedback?: string
}

interface Kind<C, A> {
  check: (c: C, answer: A, given: A, accept?: A[]) => Result
  valid: (c: C, answer: A) => string | null
}

type Item = { id: string; text: string }
export type ChoiceContent = { ask: string; choices: string[] }
export type OrderContent = { ask: string; items: Item[] }
export type MatchContent = { ask: string; left: Item[]; right: Item[] }
export type ClassifyContent = { ask: string; items: Item[]; labels: { id: string; text: string }[] }
/** `text` holds blanks as {id}; answers per blank, alternatives allowed */
export type BlankContent = { ask: string; text: string }

const loose = (x: string) => normalize(x).replace(/[^a-z0-9]+/g, '')
const ids = (xs: Item[]) => xs.map((x) => x.id)
const sameSet = (a: string[], b: string[]) => a.length === b.length && a.every((x) => b.includes(x))

const choice: Kind<ChoiceContent, number> = {
  check: (_c, answer, given, accept) => {
    const ok = given === answer || !!accept?.includes(given)
    return { ok, wrong: ok ? [] : [String(given)], feedback: ok ? undefined : String(given) }
  },
  valid: (c, a) => (Number.isInteger(a) && a >= 0 && a < c.choices.length ? (new Set(c.choices).size === c.choices.length ? null : 'lựa chọn trùng nhau') : 'đáp án ngoài khoảng'),
}

const order: Kind<OrderContent, string[]> = {
  check: (_c, answer, given) => {
    const wrong = given.filter((id, i) => answer[i] !== id)
    return { ok: !wrong.length && given.length === answer.length, wrong }
  },
  valid: (c, a) => (sameSet(a, ids(c.items)) ? null : 'thứ tự đáp án không phải hoán vị của các mục'),
}

const match: Kind<MatchContent, Record<string, string>> = {
  check: (c, answer, given) => {
    const wrong = c.left.map((l) => l.id).filter((l) => given[l] !== answer[l])
    return { ok: !wrong.length, wrong }
  },
  valid: (c, a) =>
    !sameSet(Object.keys(a), ids(c.left))
      ? 'mỗi mục bên trái cần đúng một cặp'
      : Object.values(a).some((r) => !ids(c.right).includes(r))
        ? 'cặp trỏ tới mục không có bên phải'
        : null,
}

const classify: Kind<ClassifyContent, Record<string, string>> = {
  check: (c, answer, given) => {
    const wrong = c.items.map((x) => x.id).filter((x) => given[x] !== answer[x])
    return { ok: !wrong.length, wrong }
  },
  valid: (c, a) =>
    !sameSet(Object.keys(a), ids(c.items))
      ? 'mỗi mục cần đúng một nhãn'
      : Object.values(a).some((l) => !c.labels.some((x) => x.id === l))
        ? 'nhãn không có trong danh sách'
        : null,
}

const blanksOf = (text: string) => [...text.matchAll(/\{([a-z0-9-]+)\}/g)].map((m) => m[1])
const blank: Kind<BlankContent, Record<string, string | string[]>> = {
  check: (c, answer, given) => {
    const wrong = blanksOf(c.text).filter((b) => {
      const ok = ([] as string[]).concat(answer[b])
      const g = ([] as string[]).concat(given[b] ?? '')[0]
      return !ok.some((x) => loose(x) === loose(g))
    })
    return { ok: !wrong.length, wrong }
  },
  valid: (c, a) => {
    const bs = blanksOf(c.text)
    if (!bs.length) return 'không có ô trống'
    return sameSet(Object.keys(a), bs) && bs.every((b) => ([] as string[]).concat(a[b]).some((x) => loose(x))) ? null : 'mỗi ô cần đáp án'
  },
}

/**
 * Plainchant staff: four lines, positions counted from the bottom line (0 = line 1, 1 = space above it, … 6 = line 4,
 * 7 = space above the staff). A C clef on line L puts *do* there, an F clef puts *fa* (ky-am-binh-ca-gregorian).
 */
export type NeumeContent = { ask: string; clef: { type: 'c' | 'f'; line: 1 | 2 | 3 | 4 }; notes: number[] }
export const NOTE_NAMES = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si'] as const
export const noteAt = (clef: NeumeContent['clef'], pos: number) => NOTE_NAMES[((((clef.type === 'c' ? 0 : 3) + pos - 2 * (clef.line - 1)) % 7) + 7) % 7]

const neume: Kind<NeumeContent, string[]> = {
  check: (c, _answer, given) => {
    const wrong = c.notes.map((p, i) => (loose(given[i] ?? '') === loose(noteAt(c.clef, p)) ? null : String(i))).filter((x): x is string => x !== null)
    return { ok: !wrong.length, wrong }
  },
  // the answer is not trusted: it must be what the clef says
  valid: (c, a) => (a.length === c.notes.length && c.notes.every((p, i) => p >= -1 && p <= 8 && loose(a[i]) === loose(noteAt(c.clef, p))) ? null : 'đáp án không khớp với khoá và vị trí nốt'),
}

/** The three hexachords (Guidonian hand): where each starts, and its six notes. */
export const HEXACHORDS = {
  naturale: ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La'],
  durum: ['Sol', 'La', 'Si', 'Đô', 'Rê', 'Mi'],
  molle: ['Fa', 'Sol', 'La', 'Si♭', 'Đô', 'Rê'],
} as const
export const SYLLABLES = ['ut', 're', 'mi', 'fa', 'sol', 'la'] as const
export type HexachordContent = { ask: string; items: { id: string; note: string; hexachord: keyof typeof HEXACHORDS }[] }
export const syllableOf = (note: string, h: keyof typeof HEXACHORDS) => {
  const i = (HEXACHORDS[h] as readonly string[]).indexOf(note)
  return i < 0 ? null : SYLLABLES[i]
}
const hexachord: Kind<HexachordContent, Record<string, string>> = {
  check: (c, _a, given) => {
    const wrong = c.items.filter((x) => loose(given[x.id] ?? '') !== loose(syllableOf(x.note, x.hexachord) ?? '?')).map((x) => x.id)
    return { ok: !wrong.length, wrong }
  },
  valid: (c, a) => (c.items.every((x) => syllableOf(x.note, x.hexachord) && loose(a[x.id] ?? '') === loose(syllableOf(x.note, x.hexachord)!)) ? null : 'âm tiết không khớp với hexachord'),
}

/**
 * Listening: clips of real recordings (a MUSIC key + seconds). Either put them in order (`order`, answer = clip ids)
 * or sort them under labels (`classify`, answer = clip id → label).
 */
export type Clip = { id: string; track: string; start: number; end: number; caption?: string }
export type AuralContent = { ask: string; mode: 'order' | 'classify'; clips: Clip[]; labels?: { id: string; text: string }[] }
const aural: Kind<AuralContent, string[] | Record<string, string>> = {
  check: (c, answer, given) =>
    c.mode === 'order'
      ? order.check({ ask: c.ask, items: c.clips.map((x) => ({ id: x.id, text: '' })) }, answer as string[], given as string[])
      : classify.check({ ask: c.ask, items: c.clips.map((x) => ({ id: x.id, text: '' })), labels: c.labels ?? [] }, answer as Record<string, string>, given as Record<string, string>),
  valid: (c, a) => {
    if (c.clips.some((x) => !(x.end > x.start))) return 'đoạn nghe sai thời điểm'
    const items = c.clips.map((x) => ({ id: x.id, text: '' }))
    return c.mode === 'order' ? order.valid({ ask: c.ask, items }, a as string[]) : classify.valid({ ask: c.ask, items, labels: c.labels ?? [] }, a as Record<string, string>)
  },
}

/**
 * A conclusion is chosen together with the evidence offered for it. Right means: the best-supported conclusion, all
 * the evidence it needs, and none of the evidence that cannot carry it (an anecdote offered as proof).
 */
export type InvestigationContent = { question: string; conclusions: { id: string; text: string }[]; evidence: string[]; min: number }
export type InvestigationAnswer = { conclusion: string; support: string[]; reject: string[] }
export type InvestigationGiven = { conclusion: string; evidence: string[] }
const investigation: Kind<InvestigationContent, InvestigationAnswer> = {
  check: (c, a, g0) => {
    const g = g0 as unknown as InvestigationGiven
    if (g.conclusion !== a.conclusion) return { ok: false, wrong: [g.conclusion], feedback: `ket-luan:${g.conclusion}` }
    const missing = a.support.filter((e) => !g.evidence.includes(e))
    const weak = a.reject.filter((e) => g.evidence.includes(e))
    const few = g.evidence.length < c.min
    return { ok: !missing.length && !weak.length && !few, wrong: [...missing, ...weak], feedback: weak.length ? `yeu:${weak[0]}` : missing.length ? 'thieu' : few ? 'thieu' : undefined }
  },
  valid: (c, a) =>
    !c.conclusions.some((x) => x.id === a.conclusion)
      ? 'kết luận đúng không có trong danh sách'
      : [...a.support, ...a.reject].some((e) => !c.evidence.includes(e))
        ? 'chứng cứ ngoài danh sách'
        : a.support.length < c.min
          ? 'chứng cứ đỡ kết luận ít hơn số tối thiểu'
          : null,
}

/**
 * A debate: speakers take turns; at each turn the player answers with one of several replies (accept, rebut with
 * evidence, a reply that sounds right but proves nothing). Every turn has one sound reply; the wrong ones carry
 * their own explanation (`feedback` key `<turn>:<option>`).
 */
export type DebateContent = { topic: string; turns: { id: string; speaker: string; text: string; options: { id: string; text: string }[] }[] }
const debate: Kind<DebateContent, Record<string, string>> = {
  check: (c, a, given) => {
    const wrong = c.turns.map((t) => t.id).filter((t) => given[t] !== a[t])
    const first = wrong[0]
    return { ok: !wrong.length, wrong, feedback: first && given[first] ? `${first}:${given[first]}` : undefined }
  },
  valid: (c, a) => (c.turns.length && c.turns.every((t) => t.options.some((o) => o.id === a[t.id])) && Object.keys(a).length === c.turns.length ? null : 'mỗi lượt cần đúng một câu đáp có trong danh sách'),
}

export const PUZZLE_KINDS = { choice, order, match, classify, blank, neume, hexachord, aural, investigation, debate } as const
export type PuzzleType = keyof typeof PUZZLE_KINDS

export function checkPuzzle(p: PuzzleDef, given: unknown): Result {
  const k = PUZZLE_KINDS[p.type as PuzzleType] as Kind<unknown, unknown> | undefined
  if (!k) return { ok: false, wrong: [] }
  const r = k.check(p.content, p.answer, given, p.accept)
  return { ...r, feedback: r.feedback && p.feedback?.some((f) => f.key === r.feedback) ? r.feedback : undefined }
}

/** Why a puzzle cannot ship (unknown type, malformed answer, its own answer does not solve it), or null. */
export function puzzleProblem(p: PuzzleDef): string | null {
  const k = PUZZLE_KINDS[p.type as PuzzleType] as Kind<unknown, unknown> | undefined
  if (!k) return `dạng ${p.type} chưa có`
  if (!p.explanation.trim()) return 'thiếu giải thích'
  if (!p.hints.length) return 'thiếu gợi ý'
  const bad = k.valid(p.content, p.answer)
  if (bad) return bad
  // an investigation is answered with a conclusion and evidence, not with the answer key itself
  const self = p.type === 'investigation' ? { conclusion: (p.answer as InvestigationAnswer).conclusion, evidence: (p.answer as InvestigationAnswer).support } : p.answer
  return k.check(p.content, p.answer, self, p.accept).ok ? null : 'đáp án không giải được chính câu đố'
}
