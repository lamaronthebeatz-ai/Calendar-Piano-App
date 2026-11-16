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

export const PUZZLE_KINDS = { choice, order, match, classify, blank } as const
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
  return k.check(p.content, p.answer, p.answer, p.accept).ok ? null : 'đáp án không giải được chính câu đố'
}
