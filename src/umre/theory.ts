import { RULES, type RuleId } from '../features/counterpoint/rules'
import { COUNTERPOINT_RULEBOOK_ID } from './rulebook/counterpoint'
import { HARMONY_RULEBOOK_ID } from './rulebook/harmony'
import { rulebook } from '../umk/rulebooks'
import { entries, type Rulebook } from './rulebook/rulebook'
import { HARMONY_RULE_ARTICLES } from './theorySlugs'

/** For a library article: the rulebook entries it states, as the engine holds and applies them, with their source. */
export type RuleView = {
  readonly id: string
  readonly standing: string
  readonly name: string
  readonly statement: string
  readonly scope: string
  readonly caveat?: string
  readonly source: string
  readonly pages: string
  readonly verification: string
  readonly rulebook: string
  readonly applied: string
}
let books: Rulebook[] | null = null

export function rulesForArticle(slug: string): RuleView[] {
  // the same rulebook objects UMRE reasons with, from the UMK registry
  books ??= [rulebook(COUNTERPOINT_RULEBOOK_ID), rulebook(HARMONY_RULEBOOK_ID)]
  const [cp, h] = books
  const ids = new Set<string>([
    ...(Object.keys(RULES) as RuleId[]).filter((id) => RULES[id].ref === slug),
    ...(HARMONY_RULE_ARTICLES[slug] ?? []),
  ])
  const out: RuleView[] = []
  for (const rb of [cp, h]) {
    const standing = new Map(entries(rb).map((e) => [e.id, e.standing]))
    for (const r of rb.rules.filter((x) => ids.has(x.id))) {
      const cites = r.citations.map((c) => rb.evidence.citation(c))
      out.push({
        id: r.id, standing: standing.get(r.id) ?? r.severity, name: r.name ?? r.id, statement: r.statement, scope: r.scope, ...(r.caveat ? { caveat: r.caveat } : {}),
        source: [...new Set(cites.map((c) => rb.evidence.source(c.sourceId).title))].join('; '),
        pages: cites.map((c) => c.locator).filter(Boolean).join(', ') || '—',
        verification: [...new Set(cites.map((c) => `${c.verification === 'verified' ? 'đã đối chiếu' : c.verification === 'partially-verified' ? 'đối chiếu một phần' : 'chưa xác minh'}${c.checkedBy === 'assistant' ? ' (trợ lý máy đọc scan, chưa chuyên gia duyệt)' : ''}`))].join('; '),
        rulebook: `${rb.id}@${rb.version}`,
        applied: (r.logic?.checkers ?? []).length ? `kiểm bởi ${r.logic!.checkers!.join(', ')}` : rb.domain === 'harmony' ? 'kiểm bởi umre-rules, harmony-native' : '',
      })
    }
  }
  return out
}
