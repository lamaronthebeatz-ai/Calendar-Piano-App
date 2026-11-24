import type { EntityId } from '../features/knowledge/ids'
import type { Edge } from '../features/knowledge/relations'
import { REASONING_DOMAINS } from './taxonomy'
import { rulebookIds, rulebookRecord } from './rulebooks'
import { glossaryTerms } from './terminology'

/**
 * UMK's relations, as edges of the one knowledge graph (features/knowledge): the graph page, article pages and UMK
 * queries all read the same edges. What UMK adds to the graph:
 *   article ─states→ rule entry      (the article sets the rule out — rulebook articles map, counterpoint rule refs)
 *   rulebook ─inRulebook→ entry
 *   entry ─cites→ source (page)      (citations of the rulebook's evidence registry; curated sources only)
 *   exception ─lifts→ rule · permission ─within→ rule · open question ─affects→ rule
 *   glossary term ─names→ article
 *   d:umre.<domain> ─formalizes→ d:<branch> · rulebook ─formalizes→ d:umre.<domain>
 * Methods → concepts (which already carry /analyze's label → article map, analyze/links.ts) and school views are
 * already in the graph (knowledge/graph.ts) and are not duplicated.
 */
export function umkEdges(): Edge[] {
  const out: Edge[] = []
  for (const id of rulebookIds()) {
    const rb = rulebookRecord(id)
    for (const dom of rb.domains.filter((x) => x.startsWith('d:umre.'))) out.push({ from: rb.id, to: dom, rel: 'formalizes', prov: 'library' })
    for (const e of rb.entries) {
      out.push({ from: rb.id, to: e.id, rel: 'inRulebook', prov: 'library' })
      for (const art of e.articles) out.push({ from: art, to: e.id, rel: 'states', prov: 'library' })
      for (const s of e.provenance.sources) out.push({ from: e.id, to: s, rel: 'cites', prov: 'library', ...(e.provenance.locator ? { page: e.provenance.locator } : {}) })
      const rel = e.standing === 'exception' ? 'lifts' : e.standing === 'permitted' ? 'within' : e.standing === 'ambiguous' ? 'affects' : null
      if (rel) for (const r of e.relates) out.push({ from: e.id, to: r, rel, prov: 'library' })
    }
  }
  for (const r of REASONING_DOMAINS) for (const b of r.branches) out.push({ from: `d:umre.${r.id}` as EntityId, to: `d:${b}` as EntityId, rel: 'formalizes', prov: 'library' })
  for (const t of glossaryTerms()) if (t.article) out.push({ from: t.id, to: t.article, rel: 'names', prov: 'library' })
  return out
}
