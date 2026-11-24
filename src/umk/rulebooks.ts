import type { EntityId } from '../features/knowledge/ids'
import { RULES, type RuleId } from '../features/counterpoint/rules'
import { COUNTERPOINT_RULEBOOK_ID, counterpointRulebook } from '../umre/rulebook/counterpoint'
import { HARMONY_RULEBOOK_ID, harmonyRulebook } from '../umre/rulebook/harmony'
import type { Rulebook, RulebookRef } from '../umre/rulebook/rulebook'
import { HARMONY_RULE_ARTICLES } from '../umre/theorySlugs'
import { fromUmreEvidence } from './provenance'
import type { RuleEntry, RulebookRecord, RuleStanding } from './schema'
type Id = EntityId

/**
 * The rulebook registry of record. Every rulebook the app reasons with is registered HERE, once, with what UMK adds:
 * the theoretical tradition it belongs to, its place in the taxonomy, the articles that state each rule and the
 * tests that check it. UMRE gets its rulebooks from this registry (engine, solvers, the counterpoint page, the theory
 * page) — no module builds its own copy.
 *
 * The rule definitions themselves stay in src/umre/rulebook/*: each rule there is bound to the checker logic that
 * evaluates it (rule-language definitions, checker ids), and the binding is tested where it lives. Moving the files
 * would change nothing a reader sees and break those tests; the registry is where ownership is decided.
 *
 * Traditions are never merged: a rulebook belongs to one tradition, and one tradition's rule is not evidence for
 * another's. A second harmony tradition (Sposobin, Schenker…) is a second rulebook, not new rules in this one.
 */
type Registered = { readonly build: () => Rulebook; readonly tradition: string; readonly domains: readonly EntityId[]; readonly tests: readonly string[]; readonly articlesOf: (ruleId: string) => string[] }

const harmonyArticles = new Map<string, string[]>()
for (const [slug, ids] of Object.entries(HARMONY_RULE_ARTICLES)) for (const id of ids) harmonyArticles.set(id, [...(harmonyArticles.get(id) ?? []), slug])

const REGISTERED: Record<string, Registered> = {
  [COUNTERPOINT_RULEBOOK_ID]: {
    build: counterpointRulebook,
    // the rulebook's single source names it: the Hanoi Conservatory textbook written in Taneyev's system
    tradition: 'Phức điệu nghiêm khắc hệ Taneyev — giáo trình Phạm Tú Hương (Nhạc viện Hà Nội, 1991)',
    domains: ['d:ly-thuyet', 'd:umre.counterpoint'],
    tests: ['src/umre/rulebook/rulebook.test.ts', 'src/umre/rulebook/verification.test.ts', 'src/umre/validation/validation.test.ts', 'docs/umre/ACADEMIC_VERIFICATION.md'],
    articlesOf: (id) => (id in RULES ? [RULES[id as RuleId].ref] : []),
  },
  [HARMONY_RULEBOOK_ID]: {
    build: harmonyRulebook,
    tradition: 'Hoà âm thực hành trường Petersburg — Rimsky-Korsakov, Giáo trình hoà âm thực hành (1886)',
    domains: ['d:ly-thuyet', 'd:umre.harmony'],
    tests: ['src/umre/rulebook/rulebook.test.ts', 'src/umre/rulebook/verification.test.ts', 'src/umre/domains/harmony/harmony.test.ts', 'docs/umre/ACADEMIC_VERIFICATION.md'],
    articlesOf: (id) => harmonyArticles.get(id) ?? [],
  },
}

const built = new Map<string, Rulebook>()
/** A registered rulebook, built once and shared (rulebooks are immutable data). */
export function rulebook(id: string): Rulebook {
  let r = built.get(id)
  if (!r) {
    const reg = REGISTERED[id]
    if (!reg) throw new Error(`UMK: không có sổ luật "${id}"`)
    built.set(id, (r = reg.build()))
  }
  return r
}
export const rulebookIds = () => Object.keys(REGISTERED)
/** Every registered rulebook (UMRE's engine registers these). */
export const allRulebooks = () => rulebookIds().map(rulebook)
export const rulebookByRef = (ref: RulebookRef) => {
  const r = REGISTERED[ref.id] ? rulebook(ref.id) : undefined
  return r && r.version === ref.version ? r : undefined
}
export const rulebookId = (r: Pick<Rulebook, 'id' | 'version'>) => `rb:${r.id}@${r.version}` as Id
export const entryId = (rb: string, local: string) => `r:${rb}/${local}` as Id

const records = new Map<string, RulebookRecord>()
/** The rulebook as UMK describes it: every entry with standing, statement, scope, articles and provenance. */
export function rulebookRecord(id: string): RulebookRecord {
  const hit = records.get(id)
  if (hit) return hit
  const rb = rulebook(id)
  const reg = REGISTERED[id]
  const rid = rulebookId(rb)
  const prov = (citations: readonly string[]) => {
    const cs = citations.map((c) => rb.evidence.citation(c))
    // the weakest citation decides (a rule is only as checked as its least checked support)
    const worst = cs.reduce<(typeof cs)[number] | undefined>((w, c) => (!w || rank(c.verification) < rank(w.verification) ? c : w), undefined)
    const src = worst ? rb.evidence.source(worst.sourceId) : undefined
    const sources = [...new Set(cs.map((c) => rb.evidence.source(c.sourceId)).filter((s) => s.origin === 'curated').map((s) => `s:${s.id}` as Id))]
    const locator = cs.map((c) => c.locator).filter(Boolean).join(', ') || null
    return fromUmreEvidence(src?.type ?? 'unverified-claim', worst?.verification ?? 'unverified', sources, locator, cs.some((c) => c.checkedBy === 'assistant') ? 'đối chiếu bởi trợ lý máy với bản scan, chưa có người duyệt' : undefined)
  }
  const arts = (local: string) => reg.articlesOf(local).map((s) => `a:${s}` as Id)
  const e = (local: string, standing: RuleStanding, name: string, statement: string, scope: string, citations: readonly string[], relates: string[], evaluatedBy: readonly string[], caveat?: string): RuleEntry => ({
    id: entryId(rb.id, local), rulebook: rid, local, standing, name, statement, scope, ...(caveat ? { caveat } : {}),
    relates: relates.map((x) => entryId(rb.id, x)), articles: arts(local), provenance: prov(citations), evaluatedBy,
  })
  const entries: RuleEntry[] = [
    ...rb.rules.map((r) => e(r.id, r.severity === 'hard' ? 'hard' : 'recommendation', r.name ?? r.id, r.statement, r.scope, r.citations, [], [...(r.logic?.ruleLanguage ?? []), ...(r.logic?.checkers ?? [])], r.caveat)),
    ...rb.exceptions.map((x) => e(x.id, 'exception', short(x.statement), x.statement, x.scope, x.citations, [...x.lifts], [])),
    ...(rb.permitted ?? []).map((x) => e(x.id, 'permitted', short(x.statement), x.statement, x.scope, x.citations, [...x.within], [])),
    ...(rb.ambiguous ?? []).map((x) => e(x.id, 'ambiguous', short(x.question), x.question, `cách đọc hiện tại: ${x.currentReading}`, x.citations, [...x.affects], [])),
    ...rb.definitions.map((x) => e(x.id, 'definition', short(x.statement), x.statement, 'định nghĩa', x.citations, [], [], x.caveat)),
  ]
  const rec: RulebookRecord = {
    id: rid, ref: { id: rb.id, version: rb.version }, title: rb.title, domain: rb.domain, tradition: reg.tradition, domains: reg.domains, entries,
    sources: rb.evidence.allSources().map((s) => ({ id: s.id, title: s.title, authors: s.authors, ...(s.year ? { year: s.year } : {}), type: s.type, verification: s.verification, origin: s.origin })),
    tests: reg.tests,
  }
  records.set(id, rec)
  return rec
}
/** a readable name for entries the rulebook names only by id: the start of their statement */
const short = (t: string) => (t.length > 70 ? `${t.slice(0, 67).replace(/\s+\S*$/, '')}…` : t)
const rank = (v: string) => (v === 'verified' ? 2 : v === 'partially-verified' ? 1 : 0)
