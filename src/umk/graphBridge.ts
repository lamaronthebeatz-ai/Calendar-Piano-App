import type { EntityId } from '../features/knowledge/ids'
import { getKnowledge, resetEdges } from './api'
import { umkEdges } from './edges'
import { loadGlossary } from './terminology'

/** What the knowledge graph (/graph) takes from UMK, loaded with the graph's other build-time data. */
export async function umkGraph() {
  // without the glossary the graph still gets rulebooks and domains; term edges come when it loads
  await loadGlossary().catch(() => undefined)
  resetEdges()
  return { edges: umkEdges(), title: (id: EntityId) => getKnowledge(id)?.title }
}
