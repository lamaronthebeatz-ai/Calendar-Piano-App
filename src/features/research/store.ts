import { useSyncExternalStore } from 'react'
import { secureStore } from '../../lib/secureStore'

/**
 * Research projects (giai đoạn 5): a question, a draft, and what it draws on. Notes join a project by its tag —
 * tag a highlight anywhere in the books or the library and it appears here — so nothing is copied. Kept in
 * localStorage like the notes, and included in the backup (services/backup.ts).
 */
export interface Project {
  id: string
  title: string
  question: string
  /** notes carrying this tag belong to the project */
  tag: string
  /** Markdown of the library: ## headings, **bold**, [[slug]] links, [^source, tr. n] citations */
  draft: string
  /** bibliography ids the project keeps at hand (cited or not) */
  sources: string[]
  /** library articles kept at hand */
  articles: string[]
  /** people (knowledge-graph ids = page slugs) and works (Wikidata ids) the project is about; absent in old projects */
  people?: string[]
  works?: string[]
  created: number
  updated: number
}

// encrypted with the vault once it is open (lib/secureStore)
const store = secureStore<Project[]>('research:projects', [], (v) => (Array.isArray(v) ? v : null))
let state = store.get()
const listeners = new Set<() => void>()
store.subscribe(() => {
  state = store.get()
  listeners.forEach((l) => l())
})

const commit = (next: Project[]) => store.set(next)

export const useProjects = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state,
  )
export const allProjects = () => state
export const projectsLocked = () => store.locked()

/** "Nhạc Việt 1930 – 1945" → "nhac-viet-1930-1945" (the tag notes use). */
export const tagOf = (title: string) =>
  title.normalize('NFD').replace(/\p{M}/gu, '').replace(/[đĐ]/g, 'd').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function createProject(title: string): Project {
  const now = Date.now()
  const p: Project = { id: `de-tai-${now.toString(36)}`, title, question: '', tag: tagOf(title) || `de-tai-${now.toString(36)}`, draft: '', sources: [], articles: [], created: now, updated: now }
  commit([p, ...state])
  return p
}

export const updateProject = (id: string, patch: Partial<Project>) => commit(state.map((p) => (p.id === id ? { ...p, ...patch, updated: Date.now() } : p)))
export const removeProject = (id: string) => commit(state.filter((p) => p.id !== id))

/** From a backup: replace all, or add the projects not already here. */
export function importProjects(data: unknown, mode: 'replace' | 'merge') {
  if (!Array.isArray(data)) return
  const incoming = data.filter((p): p is Project => !!p && typeof p.id === 'string' && typeof p.title === 'string')
  commit(mode === 'replace' ? incoming : [...state, ...incoming.filter((p) => !state.some((s) => s.id === p.id))])
}
