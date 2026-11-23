import type { Rulebook } from '../rulebook/rulebook'
import type { ValidationResult } from '../validation/types'

/**
 * Optimization, kept apart from search: the search's value ordering (heuristic) only decides what is tried first and
 * constraints only prune; this ranks solutions ALREADY judged valid, by the rulebook's soft-rule weights. A ranking
 * never turns an invalid answer valid nor drops a valid one.
 */
export type Rank = { readonly penalty: number; readonly faults: readonly { readonly ruleId: string; readonly count: number; readonly weight: number }[] }

export function rankOf(v: ValidationResult, rb: Rulebook): Rank {
  const faults: { ruleId: string; count: number; weight: number }[] = []
  for (const o of v.outcomes) {
    if (o.severity !== 'soft' || o.outcome !== 'fail') continue
    const count = Math.max(0, ...o.checkers.map((c) => c.faults))
    const weight = rb.rules.find((r) => r.id === o.ruleId)?.weight ?? 1
    if (count) faults.push({ ruleId: o.ruleId, count, weight })
  }
  return { penalty: faults.reduce((s, f) => s + f.count * f.weight, 0), faults }
}

/** Stable order by penalty (ties keep the solver's order, so results stay deterministic). */
export function rankSolutions<T extends { validation: ValidationResult }>(xs: readonly T[], rb: Rulebook): (T & { rank: Rank })[] {
  return xs.map((x, i) => ({ x: { ...x, rank: rankOf(x.validation, rb) }, i })).sort((a, b) => a.x.rank.penalty - b.x.rank.penalty || a.i - b.i).map((y) => y.x)
}
