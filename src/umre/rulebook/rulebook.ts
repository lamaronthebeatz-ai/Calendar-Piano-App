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
}

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
export type Definition = { readonly id: string; readonly statement: string; readonly citations: readonly string[]; readonly caveat?: string }

export type Rulebook = {
  readonly id: string
  readonly version: string
  readonly domain: string
  readonly title: string
  readonly rules: readonly RuleSpec[]
  readonly exceptions: readonly ExceptionSpec[]
  readonly definitions: readonly Definition[]
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
  for (const x of [...r.rules, ...r.exceptions, ...r.definitions]) {
    if (seen.has(x.id)) out.push(`id trùng: ${x.id}`)
    seen.add(x.id)
    if (!x.citations.length) out.push(`${x.id}: không có trích dẫn`)
    for (const c of x.citations) if (!r.evidence.hasCitation(c)) out.push(`${x.id}: trích dẫn "${c}" không có`)
  }
  for (const e of r.exceptions) for (const l of e.lifts) if (!ruleOf(r, l)) out.push(`${e.id}: nới luật không có "${l}"`)
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
