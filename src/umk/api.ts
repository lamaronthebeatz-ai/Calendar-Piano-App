import { THEORY } from '../features/analyze/links'
import { articleKind, parseId, type EntityId } from '../features/knowledge/ids'
import { methodEdges, schoolEdges } from '../features/knowledge/graph'
import { METHODS } from '../features/knowledge/methods'
import { RELATIONS, type Edge, type Rel } from '../features/knowledge/relations'
import { CURATED } from '../features/sources/curated'
import { ARTICLES } from '../features/theory/articles'
import { findArticle, normalize } from '../features/theory/wiki'
import { umkEdges } from './edges'
import { fromCuratedAccess, libraryArticle, umkDerived } from './provenance'
import { rulebookIds, rulebookRecord } from './rulebooks'
import type { DomainNode, KnowledgeUnit, RuleEntry, RulebookRecord, Term, UnitKind } from './schema'
import { domainsOf, node, taxonomy } from './taxonomy'
import { glossaryTerms, term, termOfArticle } from './terminology'

/**
 * UMK's read side: one way to get any unit of music knowledge the app holds, by id, by search, by relation, by
 * domain. Synchronous over what the app has in memory (the library index, the rulebooks, the taxonomy, the glossary
 * once `loadGlossary` has run); the bibliography and article texts are fetched by their own loaders and are reached
 * through the async helpers at the end. Nothing here writes knowledge.
 */
const asId = (x: string) => x as EntityId

/* --------------------------------------------------------------- one unit */

export function getKnowledge(id: EntityId): KnowledgeUnit | null {
  const p = parseId(id)
  if (!p) return null
  switch (p.prefix) {
    case 'a': {
      const art = findArticle(p.local)
      if (!art || art.slug !== p.local) return null
      return { id, kind: articleKind(art) as UnitKind, title: art.title, summary: art.summary, domains: domainsOf(id), provenance: libraryArticle(), href: `/theory/${art.slug}` }
    }
    case 'x': {
      const t = term(id)
      return t ? { id, kind: 'glossary', title: t.preferred, ...(t.definition ? { summary: t.definition } : {}), domains: t.domains, provenance: t.provenance, href: t.article ? `/theory/${t.article.slice(2)}` : '/terms' } : null
    }
    case 'rb': {
      const rb = rulebookIds().map(rulebookRecord).find((r) => r.id === id)
      return rb ? { id, kind: 'rulebook', title: rb.title, summary: rb.tradition, domains: rb.domains, provenance: umkDerived('registry'), href: `/umk?id=${encodeURIComponent(id)}` } : null
    }
    case 'r': {
      const e = ruleEntry(id)
      return e ? { id, kind: 'rule', title: e.name, summary: e.statement, domains: rulebookIds().map(rulebookRecord).find((r) => r.id === e.rulebook)?.domains ?? [], provenance: e.provenance, href: `/umk?id=${encodeURIComponent(id)}` } : null
    }
    case 'd': {
      const n = node(id)
      return n ? { id, kind: 'domain', title: n.title, summary: n.summary, domains: n.parent ? [n.parent] : [], provenance: umkDerived('taxonomy'), href: `/umk?id=${encodeURIComponent(id)}` } : null
    }
    case 'm': {
      const m = METHODS.find((x) => x.id === p.local)
      return m ? { id, kind: 'method', title: m.title, summary: m.how, domains: ['d:phan-tich' as EntityId], provenance: { ...umkDerived('methods'), note: m.basis }, href: '/analyze' } : null
    }
    case 's': {
      const c = CURATED.find((x) => x.id === p.local)
      return c ? { id, kind: 'source', title: c.title, summary: [c.authors.join('; '), c.year].filter(Boolean).join(', '), domains: [], provenance: fromCuratedAccess(c.access, c.id), href: `/sources/${c.id}` } : null
    }
    default:
      // works, people records, Lamar's own data live in the knowledge graph and research stores (their own pages)
      return null
  }
}

export function ruleEntry(id: EntityId): RuleEntry | undefined {
  for (const rb of rulebookIds()) {
    const e = rulebookRecord(rb).entries.find((x) => x.id === id)
    if (e) return e
  }
  return undefined
}

/* --------------------------------------------------------------- search */

export type Hit = { id: EntityId; kind: UnitKind; title: string; summary?: string; why: string; score: number }
/**
 * Search every unit UMK serves: articles (title, aliases, foreign names), glossary forms, rulebook entries, taxonomy
 * nodes, methods. `domain` keeps units placed in that node or under it (the map's branch, a library topic).
 */
export function searchKnowledge(query: string, opts: { domain?: EntityId; kinds?: UnitKind[]; limit?: number } = {}): Hit[] {
  const q = normalize(query)
  if (!q) return []
  const score = (text: string | undefined) => {
    const t = normalize(text ?? '')
    return !t ? 0 : t === q ? 100 : t.startsWith(q) ? 60 : t.includes(q) ? 30 : 0
  }
  const hits: Hit[] = []
  for (const a of ARTICLES) {
    const s = Math.max(score(a.title), ...(a.aliases ?? []).map((x) => score(x) - 5), ...(a.xl ?? '').split('|').map((x) => score(x.slice(3)) - 10), score(a.summary) / 3)
    if (s > 0) hits.push({ id: asId(`a:${a.slug}`), kind: articleKind(a) as UnitKind, title: a.title, summary: a.summary, why: 'bài thư viện', score: s })
  }
  for (const t of glossaryTerms()) {
    const best = t.forms.reduce((m, f) => Math.max(m, score(f.text) - (f.relation === 'preferred' ? 0 : 8)), 0)
    if (best > 0) hits.push({ id: t.id, kind: 'glossary', title: t.preferred, ...(t.definition ? { summary: t.definition.slice(0, 200) } : {}), why: 'thuật ngữ đa ngữ', score: best - 2 })
  }
  for (const rb of rulebookIds().map(rulebookRecord))
    for (const e of rb.entries) {
      const s = Math.max(score(e.name), score(e.statement) / 2, score(e.local))
      if (s > 0) hits.push({ id: e.id, kind: 'rule', title: e.name, summary: e.statement, why: `${STANDING[e.standing]} · ${rb.title}`, score: s - 4 })
    }
  for (const n of taxonomy()) {
    const s = Math.max(score(n.title), score(n.en))
    if (s > 0) hits.push({ id: n.id, kind: 'domain', title: n.title, summary: n.summary, why: 'lĩnh vực', score: s })
  }
  for (const m of METHODS) {
    const s = score(m.title)
    if (s > 0) hits.push({ id: asId(`m:${m.id}`), kind: 'method', title: m.title, summary: m.how, why: 'phương pháp phân tích', score: s })
  }
  const inDomain = opts.domain ? underDomain(opts.domain) : null
  return hits
    .filter((h) => (!opts.kinds || opts.kinds.includes(h.kind)) && (!inDomain || inDomain(h.id)))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'vi'))
    .slice(0, opts.limit ?? 40)
}

/** Is a unit placed in `domain` or any node below it? */
function underDomain(domain: EntityId) {
  const below = new Set<EntityId>([domain])
  for (let grew = true; grew; ) {
    grew = false
    for (const n of taxonomy())
      if (n.parent && below.has(n.parent) && !below.has(n.id)) {
        below.add(n.id)
        grew = true
      }
  }
  // a rule entry sits where its rulebook sits
  const bookDomains = new Map(rulebookIds().map(rulebookRecord).map((r) => [r.id, r.domains]))
  return (id: EntityId) => below.has(id) || domainsOf(id).some((d) => below.has(d)) || (bookDomains.get(ruleEntry(id)?.rulebook ?? ('' as EntityId)) ?? []).some((d) => below.has(d))
}

/* --------------------------------------------------------------- concepts and relations */

export type Concept = { unit: KnowledgeUnit; term: Term | null; domains: DomainNode[]; rules: RuleEntry[]; methods: { id: EntityId; title: string }[]; analysisLabels: string[] }
/** A concept with what UMK knows around it: its glossary term, places in the taxonomy, rules stating it, methods
 *  applying it, and the /analyze labels that lead to it. */
export function getConcept(id: EntityId): Concept | null {
  const unit = getKnowledge(id)
  if (!unit) return null
  const slug = id.startsWith('a:') ? id.slice(2) : null
  return {
    unit,
    term: id.startsWith('x:') ? (term(id) ?? null) : termOfArticle(id) ?? null,
    domains: unit.domains.map((d) => node(d)).filter((n): n is DomainNode => !!n),
    rules: slug ? rulebookIds().flatMap((r) => rulebookRecord(r).entries.filter((e) => e.articles.includes(id))) : [],
    methods: slug ? METHODS.filter((m) => m.concepts.some((c) => THEORY[c] === slug) || m.read.includes(slug)).map((m) => ({ id: asId(`m:${m.id}`), title: m.title })) : [],
    analysisLabels: slug ? Object.entries(THEORY).filter(([, s]) => s === slug).map(([k]) => k) : [],
  }
}

let edges: Edge[] | null = null
/** Every edge UMK can answer from memory: UMK's own plus the graph's schools and methods. */
export function staticEdges(): Edge[] {
  return (edges ??= [...umkEdges(), ...schoolEdges(), ...methodEdges()])
}
export const resetEdges = () => {
  edges = null
}
export type Related = { rel: Rel; dir: 'out' | 'in'; label: string; other: EntityId; title: string; prov: Edge['prov']; page?: string; note?: string }
/** Units related to `id`, by relation, both directions, with the provenance of each edge. `bodyLinks`: the article's
 *  own links and backlinks when the caller has its text (articles keep them with the text, not in the index). */
export function getRelatedConcepts(id: EntityId, opts: { rels?: Rel[]; bodyLinks?: { links: string[]; backlinks: string[] } } = {}): Related[] {
  const out: Related[] = []
  const title = (x: EntityId) => getKnowledge(x)?.title ?? x
  for (const e of staticEdges()) {
    if (opts.rels && !opts.rels.includes(e.rel)) continue
    const dir = e.from === id ? 'out' : e.to === id ? 'in' : null
    if (!dir) continue
    const other = dir === 'out' ? e.to : e.from
    out.push({ rel: e.rel, dir, label: RELATIONS[e.rel][dir], other, title: title(other), prov: e.prov, ...(e.page ? { page: e.page } : {}), ...(e.note ? { note: e.note } : {}) })
  }
  if (opts.bodyLinks && (!opts.rels || opts.rels.includes('links'))) {
    for (const s of opts.bodyLinks.links) out.push({ rel: 'links', dir: 'out', label: RELATIONS.links.out, other: asId(`a:${s}`), title: title(asId(`a:${s}`)), prov: 'library' })
    for (const s of opts.bodyLinks.backlinks) out.push({ rel: 'links', dir: 'in', label: RELATIONS.links.in, other: asId(`a:${s}`), title: title(asId(`a:${s}`)), prov: 'library' })
  }
  return out
}

/* --------------------------------------------------------------- rulebooks and rules */

export const STANDING: Record<RuleEntry['standing'], string> = { hard: 'luật bắt buộc', recommendation: 'khuyến nghị', permitted: 'được phép', exception: 'ngoại lệ', ambiguous: 'câu hỏi mở', definition: 'định nghĩa' }

export const listRulebooks = (): RulebookRecord[] => rulebookIds().map(rulebookRecord)
export function getRulebook(id: string): RulebookRecord | null {
  const key = id.startsWith('rb:') ? id.slice(3).split('@')[0] : id
  return rulebookIds().includes(key) ? rulebookRecord(key) : null
}

/**
 * The rules that apply to a problem, by reasoning domain — one group per rulebook, never merged: each group is one
 * tradition with its own premises. With several traditions for a domain and none chosen, all are returned and
 * `choose` says the caller must pick one (UMRE never mixes them). Exceptions, permissions and open questions of a rule
 * travel with it.
 */
export function getApplicableRules(q: { domain: string; tradition?: string; articles?: EntityId[] }): { groups: { rulebook: RulebookRecord; rules: RuleEntry[]; related: RuleEntry[] }[]; choose: boolean } {
  const books = listRulebooks().filter((r) => r.domain === q.domain && (!q.tradition || r.tradition === q.tradition || r.ref.id === q.tradition))
  const groups = books.map((rulebook) => {
    const rules = rulebook.entries.filter((e) => (e.standing === 'hard' || e.standing === 'recommendation' || e.standing === 'definition') && (!q.articles || e.articles.some((a) => q.articles!.includes(a))))
    const ids = new Set(rules.map((r) => r.id))
    const related = rulebook.entries.filter((e) => e.relates.some((x) => ids.has(x)))
    return { rulebook, rules, related }
  })
  return { groups, choose: groups.length > 1 }
}

/* --------------------------------------------------------------- sources */

export type SourceRef = { id: EntityId; title: string; authors: string[]; year?: string; locator?: string; provenance: KnowledgeUnit['provenance'] }
/** The sources a unit rests on, as recorded (bibliography records only — UMK never writes a reference itself). */
export function getSources(id: EntityId): SourceRef[] {
  const e = id.startsWith('r:') ? ruleEntry(id) : undefined
  const ids = e ? e.provenance.sources : id.startsWith('s:') ? [id] : []
  return ids.flatMap((sid) => {
    const c = CURATED.find((x) => `s:${x.id}` === sid)
    return c ? [{ id: sid, title: c.title, authors: c.authors, ...(c.year ? { year: c.year } : {}), ...(e?.provenance.locator ? { locator: e.provenance.locator } : {}), provenance: fromCuratedAccess(c.access, c.id) }] : []
  })
}
/** An article's sources from the built bibliography (fetched once by the sources page's loader). */
export async function getArticleSources(slug: string): Promise<SourceRef[]> {
  const { loadBibliography } = await import('../features/sources/data')
  const bib = await loadBibliography()
  return bib.sources
    .filter((s) => s.uses.includes(slug))
    .map((s) => ({ id: asId(`s:${s.id}`), title: s.title ?? s.labels[0] ?? s.id, authors: s.authors ?? [], ...(s.year ? { year: s.year } : {}), ...(s.pages?.[slug] ? { locator: s.pages[slug].join(', ') } : {}), provenance: fromCuratedAccess(s.access, s.id) }))
}
