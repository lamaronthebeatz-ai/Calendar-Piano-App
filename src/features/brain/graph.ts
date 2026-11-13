import { useMemo } from 'react'
import { findArticle } from '../theory/wiki'
import { CURATED_BY_ID, shortCite } from '../sources/data'
import { LIBRARY, useAllNotes } from '../curriculum/reader/notes'
import { useProjects } from '../research/store'
import { findBrainNote, titleOf, useBrainNotes } from './store'
import { edgesOf, type Edge, type NodeKey } from './links'

export const resolveArticle = (ref: string) => findArticle(ref)?.slug

/**
 * Everything Lamar wrote, as linkable documents: free notes, projects (question + draft) and the notes on highlights
 * in library articles (they connect that article to what they mention). The whole personal graph, live.
 */
export function useBrainGraph() {
  const notes = useBrainNotes()
  const projects = useProjects()
  const highlights = useAllNotes()
  return useMemo(() => {
    const docs: { key: NodeKey; text: string }[] = [
      ...notes.map((n) => ({ key: `n:${n.id}` as NodeKey, text: `${n.title}\n${n.body}` })),
      ...projects.map((p) => ({ key: `p:${p.id}` as NodeKey, text: `${p.question}\n${p.draft}` })),
      ...(highlights[LIBRARY] ?? []).filter((h) => h.note?.includes('[[')).map((h) => ({ key: `a:${h.key}` as NodeKey, text: h.note! })),
    ]
    const edges: Edge[] = edgesOf(docs, resolveArticle)
    const into = new Map<NodeKey, Set<NodeKey>>()
    const out = new Map<NodeKey, Set<NodeKey>>()
    for (const e of edges) {
      if (!into.has(e.to)) into.set(e.to, new Set())
      into.get(e.to)!.add(e.from)
      if (!out.has(e.from)) out.set(e.from, new Set())
      out.get(e.from)!.add(e.to)
    }
    return { docs, edges, into: (k: NodeKey) => [...(into.get(k) ?? [])], out: (k: NodeKey) => [...(out.get(k) ?? [])] }
  }, [notes, projects, highlights])
}

/** Name and address of a node, or null when it no longer exists (a deleted note). */
export function nodeInfo(k: NodeKey, projects: { id: string; title: string }[]): { label: string; href: string; kind: string } | null {
  const id = k.slice(2)
  switch (k[0]) {
    case 'a': {
      const a = findArticle(id)
      return a ? { label: a.title, href: `/theory/${a.slug}`, kind: a.person ? 'Người' : 'Bài' } : null
    }
    case 'n': {
      const n = findBrainNote(id)
      return n ? { label: titleOf(n), href: `/brain/${id}`, kind: 'Ghi chú' } : null
    }
    case 'p': {
      const p = projects.find((x) => x.id === id)
      return p ? { label: p.title, href: `/research/${id}`, kind: 'Đề tài' } : null
    }
    default: {
      const c = CURATED_BY_ID.get(id)
      return { label: c ? `${shortCite(c)} — ${c.title}` : id, href: `/sources/${id}`, kind: 'Nguồn' }
    }
  }
}
