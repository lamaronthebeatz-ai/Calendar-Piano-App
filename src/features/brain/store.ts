import { useSyncExternalStore } from 'react'
import { secureStore } from '../../lib/secureStore'

/**
 * Lamar's own notes — the free-standing cards of the second brain, beside highlights (reader/notes.ts) and projects
 * (research/store.ts). Markdown of the library with links of every kind (links.ts). Encrypted with the vault, in the backup.
 */
export interface BrainNote {
  id: string
  title: string
  body: string
  created: number
  updated: number
}

const valid = (n: unknown): n is BrainNote => !!n && typeof (n as BrainNote).id === 'string' && typeof (n as BrainNote).body === 'string'
const store = secureStore<BrainNote[]>('brain:notes', [], (v) => (Array.isArray(v) ? v.filter(valid) : null))
let state = store.get()
const listeners = new Set<() => void>()
store.subscribe(() => {
  state = store.get()
  listeners.forEach((l) => l())
})

export const useBrainNotes = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state,
  )
export const allBrainNotes = () => state
export const brainLocked = () => store.locked()
export const findBrainNote = (id: string) => state.find((n) => n.id === id)

export function createBrainNote(title = '', body = ''): BrainNote {
  const now = Date.now()
  const n: BrainNote = { id: now.toString(36) + Math.random().toString(36).slice(2, 5), title, body, created: now, updated: now }
  store.set([n, ...state])
  return n
}
export const updateBrainNote = (id: string, patch: Partial<Pick<BrainNote, 'title' | 'body'>>) =>
  store.set(state.map((n) => (n.id === id ? { ...n, ...patch, updated: Date.now() } : n)))
export const removeBrainNote = (id: string) => store.set(state.filter((n) => n.id !== id))

/** The title as shown: its own, else the first line of the text. */
export const titleOf = (n: BrainNote) => n.title.trim() || n.body.trim().split('\n')[0].replace(/[#*[\]]/g, '').slice(0, 60) || 'Ghi chú chưa đặt tên'

/** From a backup: replace all, or add the notes this device does not have (kept the newer by id). */
export function importBrainNotes(data: unknown, mode: 'replace' | 'merge') {
  if (!Array.isArray(data)) return
  const incoming = data.filter(valid)
  if (mode === 'replace') return store.set(incoming)
  const byId = new Map(state.map((n) => [n.id, n]))
  for (const n of incoming) if (!byId.has(n.id) || byId.get(n.id)!.updated < n.updated) byId.set(n.id, n)
  store.set([...byId.values()].sort((a, b) => b.updated - a.updated))
}
