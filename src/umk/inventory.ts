import { CURATED } from '../features/sources/curated'
import { ARTICLES, CATEGORIES } from '../features/theory/articles'
import { RESOLVED } from '../features/musicology/taxonomy'
import { METHODS } from '../features/knowledge/methods'
import { getKnowledge, staticEdges } from './api'
import { rulebook, rulebookIds, rulebookRecord } from './rulebooks'
import { taxonomy } from './taxonomy'
import { glossaryTerms, termConflicts } from './terminology'
import type { KnowledgeGap } from './schema'
import { basisLabel } from './provenance'

/**
 * What UMK serves, counted against the homes it reads from — the integrity check of the consolidation: nothing the
 * sources hold may be missing from UMK, and every edge must land on a unit UMK can resolve.
 */
export function inventory() {
  const books = rulebookIds().map((id) => {
    const src = rulebook(id)
    const rec = rulebookRecord(id)
    return {
      id: `${src.id}@${src.version}`,
      source: src.rules.length + src.exceptions.length + src.definitions.length + (src.permitted?.length ?? 0) + (src.ambiguous?.length ?? 0),
      umk: rec.entries.length,
      citations: src.evidence.allCitations().length,
      sources: src.evidence.allSources().length,
    }
  })
  const edges = staticEdges()
  const byRel: Record<string, number> = {}
  for (const e of edges) byRel[e.rel] = (byRel[e.rel] ?? 0) + 1
  return {
    articles: ARTICLES.length,
    libraryTopics: Object.keys(CATEGORIES).length,
    mapBranches: RESOLVED.length,
    taxonomyNodes: taxonomy().length,
    glossary: glossaryTerms().length,
    glossaryWithArticle: glossaryTerms().filter((t) => t.article).length,
    curatedSources: CURATED.length,
    methods: METHODS.length,
    rulebooks: books,
    edges: edges.length,
    edgesByRel: byRel,
  }
}

/** Edge ends UMK cannot resolve to a unit (should be empty). People records, works and Lamar's data live elsewhere. */
export function danglingEdges() {
  const ok = (id: string) => !/^(a|x|r|rb|d|s|m):/.test(id) || !!getKnowledge(id as never)
  return staticEdges().filter((e) => !ok(e.from) || !ok(e.to))
}

/** Gaps UMK can see from what it holds: glossary forms pointing two ways, rulebook entries with no checked source.
 *  The library's own `::verify` markers come with the bibliography (`libraryGaps`). */
export function knowledgeGaps(): KnowledgeGap[] {
  const out: KnowledgeGap[] = [...termConflicts()]
  for (const id of rulebookIds())
    for (const e of rulebookRecord(id).entries)
      if (e.standing === 'ambiguous') out.push({ id: `open:${e.id}`, kind: 'open-question', about: e.id, text: e.statement, origin: 'umk' })
      else if (e.provenance.verification === 'unverified' && e.standing !== 'definition') out.push({ id: `unverified:${e.id}`, kind: 'unverified-source', about: e.id, text: `"${e.name}" chưa có nguồn đã đối chiếu (${basisLabel(e.provenance.kind)})`, origin: 'umk' })
  for (const t of glossaryTerms()) if (!t.article) out.push({ id: `term-no-article:${t.id}`, kind: 'missing-definition', about: t.id, text: `Thuật ngữ "${t.preferred}" chưa có bài thư viện riêng (chỉ có định nghĩa trong bảng thuật ngữ)`, origin: 'umk' })
  return out
}

/** The library's own markers of what is still to check (`::verify` lines, "chưa đối chiếu" sentences). */
export async function libraryGaps(): Promise<KnowledgeGap[]> {
  const { loadBibliography } = await import('../features/sources/data')
  const bib = await loadBibliography()
  return bib.open.map((o, i) => ({ id: `library:${o.slug}:${i}`, kind: o.kind === 'verify' ? 'unverified-source' : 'missing-source', about: `a:${o.slug}` as never, text: o.text, origin: 'library' }))
}
