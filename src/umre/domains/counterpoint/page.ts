import type { Problem } from '../../../features/counterpoint/rules'
import type { SolveResult } from '../../../features/counterpoint/solver'
import { rankOf } from '../../orchestration/rank'
import { fromCounterpoint } from '../../repr/adapters/counterpoint'
import { fromQuarters } from '../../repr/rational'
import { counterpointRulebook, COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION } from '../../rulebook/counterpoint'
import type { Task } from '../../task'
import { twoVoiceValidator } from '../../validation/counterpoint'
import { confirmation } from '../../validation/independence'
import { UMRE_ENGINE_VERSION } from '../../version'
import { ROLE_GIVEN, TWO_VOICE, twoVoiceSolution, type TwoVoiceParams } from './task'

/** The counterpoint page's problem as a UMRE task (the inverse of `toProblem`). */
export function taskFromProblem(p: Problem, id = 'trang'): Task<TwoVoiceParams> {
  return {
    id, type: TWO_VOICE, domain: 'counterpoint', rulebook: { id: COUNTERPOINT_RULEBOOK_ID, version: COUNTERPOINT_RULEBOOK_VERSION },
    score: fromCounterpoint({ key: p.key, meter: p.meter, lines: [p.given], roles: [ROLE_GIVEN], id: `${id}-de` }),
    params: { givenIs: p.givenIs, stars: p.stars.map(fromQuarters), versions: p.versions, starsOnly: p.starsOnly, ...(p.quarterPrep ? { quarterPrep: true } : {}) },
  }
}

export type PageCheck = {
  readonly engine: string
  /** answers the independent UMRE checkers confirmed (the page shows only these) */
  readonly confirmed: number
  /** answers the search returned that UMRE did not confirm, with why */
  readonly rejected: readonly string[]
  /** independent checkers that confirmed every hard rule, over all shown answers */
  readonly checkers: readonly string[]
}

const CONSULTS = ['search-rules', 'verify'] // what solveMany runs itself (solver.ts)
let rb: ReturnType<typeof counterpointRulebook> | null = null

/**
 * The page's search result, re-judged by UMRE: every answer goes through the independent validator and must be
 * confirmed by checkers the search did not run; confirmed answers are ranked by the rulebook's soft-rule weights
 * (optimization after validation). An answer UMRE does not confirm is withheld and counted as disputed — never shown
 * as correct. Unsat and timeout results pass through unchanged (there is nothing to check).
 */
export function confirmForPage(p: Problem, r: SolveResult): SolveResult & { umre: PageCheck } {
  rb ??= counterpointRulebook()
  if (!r.solutions.length) return { ...r, umre: { engine: UMRE_ENGINE_VERSION, confirmed: 0, rejected: [], checkers: [] } }
  const t = taskFromProblem(p)
  const judged = r.solutions.map((s, i) => {
    const v = twoVoiceValidator.validate(t, twoVoiceSolution(t, s.cp, i + 1), rb!)
    const c = confirmation(v, CONSULTS)
    return { s, i, v, c, ok: v.status === 'VALID' && c.independent, rank: rankOf(v, rb!) }
  })
  const kept = judged.filter((x) => x.ok).sort((a, b) => a.rank.penalty - b.rank.penalty || a.i - b.i)
  const rejected = judged.filter((x) => !x.ok).map((x) => `lời giải ${x.i + 1}: ${x.v.status}${x.c.unconfirmed.length ? `, chưa được xác nhận độc lập: ${x.c.unconfirmed.join(', ')}` : ''}${x.v.reasons.length ? ` — ${x.v.reasons.join('; ')}` : ''}`)
  const checkers = [...new Set(kept.flatMap((x) => Object.values(x.c.by).flat()))].sort()
  const solutions = kept.map((x) => x.s)
  return {
    ...r, solutions,
    status: solutions.length ? 'valid' : 'unknown',
    disputed: (r.disputed ?? 0) + rejected.length,
    umre: { engine: UMRE_ENGINE_VERSION, confirmed: solutions.length, rejected, checkers },
  }
}

export type PageGrade = { readonly status: string; readonly rules: readonly string[]; readonly checkers: readonly string[]; readonly disputed: readonly string[] }
/** A student's line judged by UMRE's independent validator (beside the page's own grading). */
export function gradeForPage(p: Problem, mine: import('../../../features/counterpoint/model').Seg[]): PageGrade {
  rb ??= counterpointRulebook()
  const t = taskFromProblem(p)
  const v = twoVoiceValidator.validate(t, twoVoiceSolution(t, mine), rb)
  return {
    status: v.status,
    rules: [...new Set(v.violations.map((x) => `${x.ruleId} (ô ${x.location.measure})`))],
    checkers: [...new Set(v.outcomes.flatMap((o) => o.checkers.filter((c) => c.independent).map((c) => c.id)))].sort(),
    disputed: v.reasons,
  }
}
