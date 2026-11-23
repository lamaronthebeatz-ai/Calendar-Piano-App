import type { Rational } from '../repr/rational'
import type { Score } from '../repr/score'
import type { Rulebook, RulebookRef, Severity } from '../rulebook/rulebook'
import type { Task } from '../task'

/**
 * The validation contract. A validator judges ONE candidate solution of ONE task under ONE rulebook, from the
 * score alone — never from what a solver said about it. Its status is about that solution:
 *  VALID       every hard rule of the rulebook was checked by at least one independent checker and none failed;
 *  INVALID     at least one hard rule fails (definitely, by every independent checker that covers it);
 *  INCOMPLETE  the solution lacks data needed to judge it (a missing voice, a line that stops early);
 *  UNKNOWN     cannot be decided: a hard rule no checker covers, checkers that disagree, an unsupported rulebook.
 * Whether a PROBLEM has a solution (proven unsat, timeout) is a solver outcome, not a validation status.
 */
export type ValidationStatus = 'VALID' | 'INVALID' | 'INCOMPLETE' | 'UNKNOWN'

export type Location = {
  /** whole notes from the start */
  readonly at: Rational
  /** 1-based bar and the offset inside it (whole notes) */
  readonly measure: number
  readonly offset: Rational
  /** the counterpoint module's label of the version ("Nguyên thể", "Iv = −7 …", "Nguyên thể · I–III") */
  readonly version?: string
  readonly voices: readonly string[]
  readonly eventIds: readonly string[]
}

export type Violation = {
  readonly ruleId: string
  readonly rulebookId: string
  readonly rulebookVersion: string
  readonly severity: Severity
  readonly location: Location
  /** what the score has there, computed from the score (pitches, interval) */
  readonly actual: string
  /** the rule's requirement, from the rulebook */
  readonly expected: string
  readonly description: string
  /** citation ids (rulebook evidence) */
  readonly citations: readonly string[]
  /** checkers that report it; `independent` ones decide the status */
  readonly checkers: readonly string[]
  /** an exception that would lift this rule elsewhere but does not apply here */
  readonly exceptionOutOfScope?: string
}

/** pass / fail / disputed (independent checkers disagree) / subsumed (its faults are reported under another rule) /
 *  not-applicable (outside the task's scope) / not-checked (no checker covers it) */
export type RuleOutcome = {
  readonly ruleId: string
  readonly severity: Severity
  readonly outcome: 'pass' | 'fail' | 'disputed' | 'subsumed' | 'not-applicable' | 'not-checked'
  /** `complete`: this checker judged the rule everywhere the task needs it (every version), not only the original */
  readonly checkers: readonly { readonly id: string; readonly independent: boolean; readonly faults: number; readonly complete: boolean }[]
  readonly note?: string
}

export type AppliedException = { readonly exceptionId: string; readonly location: Location; readonly detail: string }

export type Coverage = {
  readonly hardRules: number
  readonly checked: number
  readonly passed: number
  readonly violated: number
  readonly uncheckable: number
  readonly disputed: number
  readonly notApplicable: number
  /** soft rules, judged by the search's own checker only (not independent) */
  readonly softChecked: number
  readonly exceptionsApplied: readonly AppliedException[]
  /** checked ÷ (hard rules − not applicable) */
  readonly ratio: number
}

export type CheckerInfo = { readonly id: string; readonly independent: boolean; readonly description: string }

export type ValidationResult = {
  readonly status: ValidationStatus
  readonly reasons: readonly string[]
  readonly taskId: string
  readonly rulebook: RulebookRef
  readonly validator: { readonly id: string; readonly version: string }
  readonly checkers: readonly CheckerInfo[]
  readonly violations: readonly Violation[]
  /** soft-rule notes (never affect the status) */
  readonly advisories: readonly Violation[]
  /** faults found in an incomplete solution: shown, not counted */
  readonly provisional: readonly Violation[]
  readonly outcomes: readonly RuleOutcome[]
  readonly coverage: Coverage
  /** FNV-1a of the canonical JSON of (task, solution, rulebook ref): the same digest must give the same result */
  readonly inputDigest: string
}

export interface Validator {
  readonly id: string
  readonly version: string
  readonly taskTypes: readonly string[]
  /** rulebook id → versions this validator knows how to check */
  readonly rulebooks: Readonly<Record<string, readonly string[]>>
  validate(task: Task, solution: Score, rulebook: Rulebook): ValidationResult
}

/** Stable JSON (sorted keys) and FNV-1a 32-bit, for digests that do not depend on key order. */
export function canonical(x: unknown): string {
  if (Array.isArray(x)) return `[${x.map(canonical).join(',')}]`
  if (x && typeof x === 'object') return `{${Object.keys(x).sort().filter((k) => (x as Record<string, unknown>)[k] !== undefined).map((k) => `${JSON.stringify(k)}:${canonical((x as Record<string, unknown>)[k])}`).join(',')}}`
  return JSON.stringify(x)
}
export function digest(x: unknown): string {
  let h = 0x811c9dc5
  const s = canonical(x)
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(16).padStart(8, '0')
}
