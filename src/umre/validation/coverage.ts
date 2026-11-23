import { COUNTERPOINT_RULES } from '../rules/counterpoint'
import { NATIVE_ORIGINAL_ONLY, NATIVE_RULES } from './native'

/**
 * Which independent checker judges which counterpoint rule — one table, read by the validator (verdicts) and by the
 * rulebook (each rule's `logic`), so the published coverage cannot drift from what actually runs.
 */
/** Hard rules verify.ts judges (its fault names mapped below). `suspension` is judged inside the dissonance rules. */
export const VERIFY_HARD = new Set(['crossing', 'dis-strong', 'dis-weak', 'star', 'star-extra', 'parallel', 'leap', 'leap-response', 'leap3-response', 'repeat3', 'seg-place', 'tie', 'rhythm-change', 'end', 'perfects3', 'hidden-hard', 'no-gap'])
const RULE_IDS = new Set(COUNTERPOINT_RULES.map((r) => r.id))
/** The independent checkers, what each covers, and which of them look at the original only. */
export const INDEPENDENT: { id: string; covers: (rule: string) => boolean; originalOnly: (rule: string) => boolean }[] = [
  { id: 'verify', covers: (r) => VERIFY_HARD.has(r), originalOnly: () => false },
  { id: 'umre-native', covers: (r) => (NATIVE_RULES as readonly string[]).includes(r), originalOnly: (r) => NATIVE_ORIGINAL_ONLY.has(r) },
  // versions are built by domains/counterpoint/versions.ts, so the rule checker sees every version
  { id: 'umre-rules', covers: (r) => RULE_IDS.has(r), originalOnly: () => false },
]

/** Ids of the independent checkers that judge a rule (all versions or original only). */
// `suspension` is judged inside the dissonance rules (a wrong suspension is a strong-beat dissonance that is not one)
export const judgedAs = (rule: string) => (rule === 'suspension' ? 'dis-strong' : rule)
export const checkersOf = (rule: string) => INDEPENDENT.filter((x) => x.covers(judgedAs(rule))).map((x) => x.id)
