import type { EvidenceRegistry } from '../evidence/evidence'

/**
 * The minimal rulebook contract Wave B needs (stage 2 of the plan is not built in full: no rule language, no
 * generic rule evaluation). A rulebook names its rules with stable ids, says which are hard, and links each to
 * citations in its evidence registry. Checkers live elsewhere and say which rule ids they cover.
 */
export type Severity = 'hard' | 'soft'

export type RuleSpec = {
  readonly id: string
  readonly statement: string
  readonly severity: Severity
  /** citation ids in the rulebook's evidence registry */
  readonly citations: readonly string[]
  /** where the rule applies (voices, versions, exercise types) */
  readonly scope: string
  /** a reading the source does not state outright (a threshold, a page not pinned) — shown as a hypothesis */
  readonly caveat?: string
  /** short name */
  readonly name?: string
  /** soft rules: penalty of one fault when ranking valid solutions (optimization, never a constraint) */
  readonly weight?: number
  /** where the rule is EVALUATED: rule-language definitions and/or hand-written checkers (by checker id) */
  readonly logic?: { readonly ruleLanguage?: readonly string[]; readonly checkers?: readonly string[] }
}

/**
 * What a source PERMITS (a licence that is not an exception to a rule but part of its statement), and what it leaves
 * UNCLEAR. Neither is evaluated as a constraint; both are listed so explanations and reviewers see them.
 */
export type PermittedSpec = { readonly id: string; readonly statement: string; readonly citations: readonly string[]; readonly scope: string; readonly within: readonly string[] }
export type AmbiguousSpec = { readonly id: string; readonly question: string; readonly citations: readonly string[]; readonly currentReading: string; readonly affects: readonly string[] }

/** Standing of a rulebook entry (Wave C classification). */
export type Standing = 'hard' | 'permitted' | 'recommendation' | 'exception' | 'ambiguous'

/** An allowance that lifts a rule in a stated scope only. */
export type ExceptionSpec = {
  readonly id: string
  readonly statement: string
  readonly lifts: readonly string[]
  readonly scope: string
  readonly citations: readonly string[]
  /** 'task-option': the exercise switches it on; 'context': it follows from the texture (e.g. an upper pair) */
  readonly enabledBy: 'task-option' | 'context'
}

/** A definition the rules depend on (what counts as a dissonance, which beat is strong). */
/** `data`: the machine form a checker reads (e.g. a consonance table), so a definition lives in one place. */
export type Definition = { readonly id: string; readonly statement: string; readonly citations: readonly string[]; readonly caveat?: string; readonly data?: unknown }

export type Rulebook = {
  readonly id: string
  readonly version: string
  readonly domain: string
  readonly title: string
  readonly rules: readonly RuleSpec[]
  readonly exceptions: readonly ExceptionSpec[]
  readonly definitions: readonly Definition[]
  readonly permitted?: readonly PermittedSpec[]
  readonly ambiguous?: readonly AmbiguousSpec[]
  readonly evidence: EvidenceRegistry
}
export type RulebookRef = { readonly id: string; readonly version: string }

export const refOf = (r: Rulebook): RulebookRef => ({ id: r.id, version: r.version })
export const ruleOf = (r: Rulebook, id: string) => r.rules.find((x) => x.id === id)
export const hardRules = (r: Rulebook) => r.rules.filter((x) => x.severity === 'hard')

/** Every rule, exception and definition must cite something that exists; ids must be unique. Returns problems. */
export function auditRulebook(r: Rulebook): string[] {
  const out: string[] = []
  const seen = new Set<string>()
  for (const x of [...r.rules, ...r.exceptions, ...r.definitions, ...(r.permitted ?? []), ...(r.ambiguous ?? [])]) {
    if (seen.has(x.id)) out.push(`id trùng: ${x.id}`)
    seen.add(x.id)
    if (!x.citations.length) out.push(`${x.id}: không có trích dẫn`)
    for (const c of x.citations) if (!r.evidence.hasCitation(c)) out.push(`${x.id}: trích dẫn "${c}" không có`)
  }
  for (const e of r.exceptions) for (const l of e.lifts) if (!ruleOf(r, l)) out.push(`${e.id}: nới luật không có "${l}"`)
  for (const p of r.permitted ?? []) for (const w of p.within) if (!ruleOf(r, w)) out.push(`${p.id}: thuộc luật không có "${w}"`)
  for (const a of r.ambiguous ?? []) for (const w of a.affects) if (!ruleOf(r, w)) out.push(`${a.id}: ảnh hưởng luật không có "${w}"`)
  return out
}

/** Registry of rulebooks by id and version. */
export class RulebookRegistry {
  private books = new Map<string, Rulebook>()
  add(r: Rulebook) {
    const k = `${r.id}@${r.version}`
    if (this.books.has(k)) throw new Error(`sổ luật trùng: ${k}`)
    const problems = auditRulebook(r)
    if (problems.length) throw new Error(`sổ luật ${k} không hợp lệ: ${problems.join('; ')}`)
    this.books.set(k, r)
  }
  get = (ref: RulebookRef) => this.books.get(`${ref.id}@${ref.version}`)
  list = () => [...this.books.values()]
}

/** Every entry of a rulebook with its standing — the classification reviewers and explanations read. */
export function entries(r: Rulebook): { id: string; standing: Standing; text: string }[] {
  return [
    ...r.rules.map((x) => ({ id: x.id, standing: (x.severity === 'hard' ? 'hard' : 'recommendation') as Standing, text: x.statement })),
    ...(r.permitted ?? []).map((x) => ({ id: x.id, standing: 'permitted' as Standing, text: x.statement })),
    ...r.exceptions.map((x) => ({ id: x.id, standing: 'exception' as Standing, text: x.statement })),
    ...(r.ambiguous ?? []).map((x) => ({ id: x.id, standing: 'ambiguous' as Standing, text: x.question })),
  ]
}
