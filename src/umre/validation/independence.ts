import type { ValidationResult } from './types'

/**
 * Is a VALID verdict confirmed by something OTHER than what the solver already ran? A solver declares the checkers it
 * consults while searching (`SolverDescriptor.consults`); a hard rule counts as independently confirmed only when a
 * checker that is independent, not consulted by that solver, and complete for the task (every version) passed it.
 * Rules whose faults are reported under other rules (`subsumed`) are confirmed when those rules are.
 */
export type Confirmation = { readonly independent: boolean; readonly unconfirmed: readonly string[]; readonly by: Readonly<Record<string, readonly string[]>> }

const SUBSUMED_BY: Record<string, readonly string[]> = { suspension: ['dis-strong', 'dis-weak'] }

export function confirmation(v: ValidationResult, consulted: readonly string[]): Confirmation {
  const by: Record<string, string[]> = {}
  const hard = v.outcomes.filter((o) => o.severity === 'hard' && o.outcome !== 'not-applicable')
  for (const o of hard)
    by[o.ruleId] = o.outcome === 'pass' ? o.checkers.filter((c) => c.independent && c.complete && !c.faults && !consulted.includes(c.id)).map((c) => c.id) : []
  for (const o of hard)
    if (o.outcome === 'subsumed') by[o.ruleId] = (SUBSUMED_BY[o.ruleId] ?? []).every((r) => by[r]?.length) ? ['(qua ' + SUBSUMED_BY[o.ruleId].join(', ') + ')'] : []
  const unconfirmed = hard.filter((o) => !by[o.ruleId]?.length).map((o) => o.ruleId)
  return { independent: v.status === 'VALID' && !unconfirmed.length, unconfirmed, by }
}
