import { useEffect, useMemo, useState } from 'react'
import { findArticle } from '../theory/wiki'
import { loadPeople, loadRelations, loadWorks, type People, type Person, type Relations, type Work } from '../explore/data'
import { CURATED_BY_ID, loadBibliography, shortCite, sourceTitle, type Bibliography } from '../sources/data'
import { useProjects } from '../research/store'
import { titleOf, useBrainNotes } from '../brain/store'
import { resolveArticle } from '../brain/graph'
import { parseId, type EntityId } from './ids'
import { STANCE } from './model'
import { useKnowledge } from './store'
import { METHOD_BY_ID } from './methods'
import { bibliographyEdges, EdgeIndex, lineageEdges, methodEdges, peopleEdges, personIndex, schoolEdges, userEdges, workEdges } from './graph'
import type { Edge } from './relations'

export interface Base {
  people: People
  person: Map<string, Person>
  works: Work[]
  work: Map<string, Work>
  rel: Relations
  bib?: Bibliography
  /** UMK: rulebooks, rule entries, glossary terms, taxonomy (src/umk) */
  umk?: { edges: Edge[]; title: (id: EntityId) => string | undefined }
}

let baseLoad: Promise<Base> | null = null
/** The build-time datasets the graph is made of (each already cached by its own loader). */
export const loadBase = () =>
  (baseLoad ??= Promise.all([loadPeople() as Promise<People>, loadWorks() as Promise<Work[]>, (loadRelations() as Promise<Relations>).catch(() => ({}) as Relations), loadBibliography().catch(() => undefined), import('../../umk/graphBridge').then((m) => m.umkGraph()).catch(() => undefined)])
    .then(([people, works, rel, bib, umk]): Base => ({ people, person: personIndex(people), works, work: new Map(works.map((w) => [w.id, w])), rel, bib, umk }))
    .catch((e) => {
      baseLoad = null
      throw e
    }))

let staticIndex: { base: Base; index: EdgeIndex } | null = null
const indexOf = (base: Base) => {
  if (staticIndex?.base !== base)
    staticIndex = { base, index: new EdgeIndex().add([...peopleEdges(base.people), ...workEdges(base.works), ...lineageEdges(base.rel), ...(base.bib ? bibliographyEdges(base.bib) : []), ...schoolEdges(), ...methodEdges(), ...(base.umk?.edges ?? [])]) }
  return staticIndex.index
}

/** The whole graph, live: build-time data indexed once, Lamar's records re-read whenever they change. */
export function useKnowledgeGraph() {
  const [base, setBase] = useState<Base>()
  const [error, setError] = useState(false)
  useEffect(() => {
    let live = true
    loadBase().then(
      (b) => live && setBase(b),
      () => live && setError(true),
    )
    return () => {
      live = false
    }
  }, [])
  const k = useKnowledge()
  const projects = useProjects()
  const notes = useBrainNotes()
  const user = useMemo(() => new EdgeIndex().add(userEdges(k, projects, notes, resolveArticle)), [k, projects, notes])

  const label = (id: EntityId): string => {
    const p = parseId(id)
    if (!p) return id
    const { prefix, local } = p
    switch (prefix) {
      case 'a':
        return findArticle(local)?.title ?? base?.person.get(local)?.name ?? local
      case 'w': {
        const w = base?.work.get(local)
        return w ? (w.vi ?? w.en) : local
      }
      case 's': {
        const c = CURATED_BY_ID.get(local)
        if (c) return `${shortCite(c)} — ${c.title}`
        const s = base?.bib?.byId.get(local)
        return s ? sourceTitle(s) : local
      }
      case 'ms':
        return k.sources.find((s) => s.id === local)?.title ?? 'Tài liệu đã xoá'
      case 'p':
        return projects.find((x) => x.id === local)?.title ?? 'Đề tài đã xoá'
      case 'n': {
        const n = notes.find((x) => x.id === local)
        return n ? titleOf(n) : 'Ghi chú đã xoá'
      }
      case 'c':
        return k.claims.find((c) => c.id === local)?.text ?? 'Luận điểm đã xoá'
      case 'e': {
        const e = k.evidence.find((x) => x.id === local)
        return e ? `${STANCE[e.stance]}${e.page ? ` · tr. ${e.page}` : ''}${e.quote ? ` · “${e.quote.slice(0, 60)}”` : ''}` : 'Bằng chứng đã xoá'
      }
      case 'm':
        return METHOD_BY_ID.get(local)?.title ?? local
      default:
        return base?.umk?.title(id) ?? local
    }
  }

  /** Does the id name something that exists (an article, a known work, a record)? */
  const exists = (id: EntityId) => {
    const p = parseId(id)
    if (!p) return false
    switch (p.prefix) {
      case 'a':
        return !!findArticle(p.local) || !!base?.person.has(p.local)
      case 'w':
        return !!base?.work.has(p.local)
      case 's':
        return CURATED_BY_ID.has(p.local) || !!base?.bib?.byId.has(p.local)
      case 'ms':
        return k.sources.some((s) => s.id === p.local)
      case 'p':
        return projects.some((x) => x.id === p.local)
      case 'n':
        return notes.some((x) => x.id === p.local)
      case 'c':
        return k.claims.some((x) => x.id === p.local)
      case 'e':
        return k.evidence.some((x) => x.id === p.local)
      case 'm':
        return METHOD_BY_ID.has(p.local)
      case 'x':
      case 'd':
      case 'rb':
      case 'r':
        return !!base?.umk?.title(id)
      default:
        return true
    }
  }

  const edgesOf = (id: EntityId): Edge[] => [...(base ? indexOf(base).of(id) : []), ...user.of(id)]
  return { base, error, label, exists, edgesOf, k, projects, notes }
}
export type Graph = ReturnType<typeof useKnowledgeGraph>
