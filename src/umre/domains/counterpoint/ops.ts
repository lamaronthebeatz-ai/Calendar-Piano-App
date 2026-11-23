import { barQ, type Seg } from '../../../features/counterpoint/model'
import { generate, hints, rescue, splitScan, starCheck, type Level } from '../../../features/counterpoint/solver'
import { fromCounterpoint, toCounterpoint } from '../../repr/adapters/counterpoint'
import { fromQuarters, toQuarters } from '../../repr/rational'
import type { Score } from '../../repr/score'
import type { Rulebook } from '../../rulebook/rulebook'
import { COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION } from '../../rulebook/counterpoint'
import type { Task } from '../../task'
import { twoVoiceValidator } from '../../validation/counterpoint'
import { confirmation, type Confirmation } from '../../validation/independence'
import type { ValidationResult } from '../../validation/types'
import { ROLE_GIVEN, ROLE_FREE, TWO_VOICE, toProblem, twoVoiceSolution, type TwoVoiceParams } from './task'

/**
 * The counterpoint page's other capabilities behind UMRE types, without re-implementing any of them: exercise
 * generation, next-note hints, and diagnosis of an exercise with no answer (✱ that cannot be dissonant, a teacher's
 * allowance that would help, the nearest lines). Everything the module produces as an ANSWER is re-judged by the
 * independent validator here — the generator's own check never certifies its answer.
 */
const CONSULTS = ['search-rules', 'verify']

export type Exercise = {
  readonly task: Task<TwoVoiceParams>
  readonly answer: Score
  readonly validation: ValidationResult
  readonly confirmation: Confirmation
  /** the interval of the required version (Iv −7 / −14) */
  readonly iv: number
}

/** A new exercise with a guaranteed answer; null when none was found in the time given. */
export function generateExercise(level: Level, seed: number, timeMs: number, rb: Rulebook, id = `gen-${level}-${seed}`): Exercise | null {
  const g = generate(level, seed, timeMs)
  if (!g) return null
  const task: Task<TwoVoiceParams> = {
    id, type: TWO_VOICE, domain: 'counterpoint', rulebook: { id: COUNTERPOINT_RULEBOOK_ID, version: COUNTERPOINT_RULEBOOK_VERSION },
    score: fromCounterpoint({ key: g.key, meter: g.meter, lines: [g.given], roles: [ROLE_GIVEN], id: `${id}-de` }),
    params: { givenIs: g.givenIs, stars: g.stars.map(fromQuarters), versions: g.versions, starsOnly: true },
  }
  const answer = twoVoiceSolution(task, g.answer.cp)
  const validation = twoVoiceValidator.validate(task, answer, rb)
  return { task, answer, validation, confirmation: confirmation(validation, CONSULTS), iv: g.iv }
}

export type NextNote = { readonly note: Score; readonly start: number; readonly dur: number; readonly status: 'ok' | 'dead' | 'unknown' }

/** The counterpoint written so far, from a partial solution score (voice I or II by the task's givenIs). */
function prefixOf(t: Task<TwoVoiceParams>, partial: Score | null): Seg[] {
  if (!partial) return []
  const lines = toCounterpoint(partial).lines
  return lines[t.params.givenIs === 'I' ? 1 : 0] ?? []
}

/**
 * Every lawful next note and whether a full answer still exists from it: ok (one was found), dead (the search was
 * exhausted — proven within the module's search domain), unknown (time ran out).
 */
export function nextNotes(t: Task<TwoVoiceParams>, partial: Score | null, timeMs: number): NextNote[] {
  const p = toProblem(t)
  return hints(p, prefixOf(t, partial), timeMs).map((h) => ({
    note: fromCounterpoint({ key: p.key, meter: p.meter, lines: [[h.seg]], roles: [ROLE_FREE], id: `hint-${h.seg.start}-${h.seg.p.midi}` }),
    start: h.seg.start, dur: h.seg.dur, status: h.status,
  }))
}

export type Diagnosis = {
  /** ✱ that cannot be a lawful dissonance whatever the counterpoint (proved by enumerating the pitch domain) */
  readonly impossibleStars: readonly { readonly at: number; readonly bar: number; readonly reason: string }[]
  /** what would make the exercise solvable — each with answers re-judged independently */
  readonly relaxations: readonly { readonly id: 'quarterPrep' | 'noStar'; readonly at?: number; readonly label: string; readonly answers: readonly Score[]; readonly validAnswers: number; readonly exhausted: boolean }[]
  /** failing those, the lines breaking the fewest hard rules, and how many */
  readonly near: readonly Score[]
  readonly nearFaults: number
  /** for exercises with a required version: which splits of the interval have an answer */
  readonly splits?: readonly { readonly I: number; readonly II: number; readonly status: 'ok' | 'none' | 'unknown'; readonly reason?: string }[]
}

/** Why an exercise has no answer, and what would give it one (the đề itself is never altered). */
export function diagnose(t: Task<TwoVoiceParams>, timeMs: number, rb: Rulebook, iv?: number): Diagnosis {
  const p = toProblem(t)
  const B = barQ(p.meter)
  const r = rescue(p, iv === undefined ? timeMs : timeMs * 0.7)
  const relaxations = r.relax.map((x) => {
    const relaxed: Task<TwoVoiceParams> = x.id === 'quarterPrep'
      ? { ...t, params: { ...t.params, quarterPrep: true } }
      : { ...t, params: { ...t.params, stars: t.params.stars.filter((s) => toQuarters(s) !== x.t) } }
    const answers = x.solutions.map((s, i) => twoVoiceSolution(relaxed, s.cp, i + 1))
    const validAnswers = answers.filter((a) => twoVoiceValidator.validate(relaxed, a, rb).status === 'VALID').length
    const label = x.id === 'noStar' ? `Nếu chỗ ✱ ô ${Math.floor(x.t! / B) + 1} được để quãng thuận` : x.label
    return { id: x.id, ...(x.t !== undefined ? { at: x.t } : {}), label, answers, validAnswers, exhausted: x.exhausted }
  })
  return {
    impossibleStars: r.stars.map((s) => ({ at: s.t, bar: Math.floor(s.t / B) + 1, reason: s.reason })),
    relaxations,
    near: r.near.map((s, i) => twoVoiceSolution(t, s.cp, i + 1)),
    nearFaults: r.nearFaults,
    ...(iv !== undefined ? { splits: splitScan(p, iv, timeMs * 0.3) } : {}),
  }
}

/** ✱ that no counterpoint can make a lawful dissonance (cheap; runs before any search). */
export const impossibleStars = (t: Task<TwoVoiceParams>) => starCheck(toProblem(t))
