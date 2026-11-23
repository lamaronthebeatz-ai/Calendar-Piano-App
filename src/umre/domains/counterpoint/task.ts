import type { Seg } from '../../../features/counterpoint/model'
import type { MProblem, MVersion } from '../../../features/counterpoint/multi'
import type { Problem, VersionSpec } from '../../../features/counterpoint/rules'
import { fromCounterpoint, toCounterpoint } from '../../repr/adapters/counterpoint'
import { isRational, toQuarters, type Rational } from '../../repr/rational'
import { notesOf, type Score } from '../../repr/score'
import { validateScore } from '../../repr/validate'
import type { Task } from '../../task'

/**
 * The counterpoint tasks UMRE understands, as data on a UMRE score, and the exact mapping to the counterpoint
 * module's own problem types (rules.ts Problem, multi.ts MProblem). Versions keep the module's own description
 * (shift / ih / mirror; steps / order): UMRE does not re-model them yet.
 */
export const TWO_VOICE = 'counterpoint.two-voice'
export const MULTI_VOICE = 'counterpoint.multi-voice'
export const ROLE_GIVEN = 'given'
export const ROLE_FREE = 'counterpoint'

/** Two voices: the score holds ONE voice, the đề. */
export type TwoVoiceParams = {
  readonly givenIs: 'I' | 'II'
  /** positions (whole notes) where the original must sound a dissonance (✱) */
  readonly stars: readonly Rational[]
  readonly versions: readonly VersionSpec[]
  readonly starsOnly: boolean
  /** the teacher's allowance: a quarter note may prepare a suspension */
  readonly quarterPrep?: boolean
}
/** Three or four voices: the score holds every voice top to bottom; a free voice is empty. */
export type MultiVoiceParams = { readonly free: readonly boolean[]; readonly versions: readonly MVersion[] }

const structural = (s: Score) => validateScore(s).filter((i) => i.severity === 'error').map((i) => `${i.code}: ${i.message} (${i.path})`)

/** Input check for a two-voice task. Empty list = acceptable. */
export function checkTwoVoiceTask(t: Task): string[] {
  const out = structural(t.score)
  const p = t.params as Partial<TwoVoiceParams> | undefined
  if (t.type !== TWO_VOICE) out.push(`loại bài phải là ${TWO_VOICE}`)
  if (t.score.voices.length !== 1) out.push('bài hai bè: tổng phổ của đề phải có đúng một bè (bè đề)')
  else if (!notesOf(t.score.voices[0]).length) out.push('bè đề không có nốt')
  if (t.score.voices[0]?.events.some((e) => e.kind === 'rest')) out.push('bè đề không được có dấu lặng (mô-đun phức điệu không có dấu lặng)')
  const m = t.score.meters[0]?.meter
  if (!m || (m.den !== 2 && m.den !== 4) || t.score.meters.length > 1) out.push('chỉ nhận một số chỉ nhịp, mẫu số 2 hoặc 4')
  if (!p || (p.givenIs !== 'I' && p.givenIs !== 'II')) out.push('params.givenIs phải là "I" hoặc "II"')
  if (!p || !Array.isArray(p.stars) || !p.stars.every(isRational)) out.push('params.stars phải là danh sách vị trí (số hữu tỉ)')
  if (!p || !Array.isArray(p.versions)) out.push('params.versions phải là danh sách')
  if (!p || typeof p.starsOnly !== 'boolean') out.push('params.starsOnly phải là true/false')
  return out
}

export function checkMultiVoiceTask(t: Task): string[] {
  const out = structural(t.score)
  const p = t.params as Partial<MultiVoiceParams> | undefined
  const n = t.score.voices.length
  if (t.type !== MULTI_VOICE) out.push(`loại bài phải là ${MULTI_VOICE}`)
  if (n < 3 || n > 4) out.push('bài nhiều bè: 3 hoặc 4 bè')
  const m = t.score.meters[0]?.meter
  if (!m || (m.den !== 2 && m.den !== 4) || t.score.meters.length > 1) out.push('chỉ nhận một số chỉ nhịp, mẫu số 2 hoặc 4')
  if (!p || !Array.isArray(p.free) || p.free.length !== n) out.push('params.free phải có một giá trị cho mỗi bè')
  else {
    if (!p.free.some(Boolean)) out.push('phải có ít nhất một bè tự do')
    t.score.voices.forEach((v, i) => {
      if (p.free![i] && v.events.length) out.push(`bè ${i + 1} là bè tự do nên phải để trống`)
      if (!p.free![i] && !notesOf(v).length) out.push(`bè ${i + 1} là bè đề nhưng không có nốt`)
    })
  }
  if (!p || !Array.isArray(p.versions) || !p.versions.every((v) => v.steps?.length === n && v.order?.length === n)) out.push('params.versions: mỗi biến thể cần steps và order cho mọi bè')
  return out
}

export function toProblem(t: Task<TwoVoiceParams>): Problem {
  const cp = toCounterpoint(t.score)
  return {
    key: cp.key, meter: cp.meter, given: cp.lines[0], givenIs: t.params.givenIs, stars: t.params.stars.map(toQuarters),
    versions: t.params.versions.map((v) => ({ ...v })), starsOnly: t.params.starsOnly, ...(t.params.quarterPrep ? { quarterPrep: true } : {}),
  }
}
export function toMProblem(t: Task<MultiVoiceParams>): MProblem {
  const cp = toCounterpoint(t.score)
  return { key: cp.key, meter: cp.meter, voices: cp.lines, free: [...t.params.free], versions: t.params.versions.map((v) => ({ ...v, steps: [...v.steps], order: [...v.order] })) }
}

/** The solution score: voice I above voice II, roles marking the đề and the counterpoint. */
export function twoVoiceSolution(t: Task<TwoVoiceParams>, cp: Seg[], n = 1): Score {
  const p = toProblem(t)
  const lines = p.givenIs === 'I' ? [p.given, cp] : [cp, p.given]
  const roles = p.givenIs === 'I' ? [ROLE_GIVEN, ROLE_FREE] : [ROLE_FREE, ROLE_GIVEN]
  return fromCounterpoint({ key: p.key, meter: p.meter, lines, roles, names: ['Bè I', 'Bè II'], id: `${t.id}-s${n}` })
}
export function multiSolution(t: Task<MultiVoiceParams>, lines: Seg[][], n = 1): Score {
  const mp = toMProblem(t)
  return fromCounterpoint({
    key: mp.key, meter: mp.meter, lines, roles: mp.free.map((f) => (f ? ROLE_FREE : ROLE_GIVEN)),
    names: lines.map((_, i) => `Bè ${['I', 'II', 'III', 'IV'][i]}`), id: `${t.id}-s${n}`,
  })
}
