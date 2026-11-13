import { useSyncExternalStore } from 'react'
import { secureStore } from '../../lib/secureStore'
import type { Score } from '../compose/model'

/** Scores Lamar brought in to analyse (imports, copies from the editor): on this device, encrypted with the vault. */
export type Lens = 'classical' | 'jazz' | 'xx'
export type Saved = { id: string; title: string; from: 'import' | 'compose'; score: Score; created: number; lens?: Lens }

const valid = (x: unknown): x is Saved => !!x && typeof (x as Saved).id === 'string' && !!(x as Saved).score
const store = secureStore<Saved[]>('analyze:scores', [], (v) => (Array.isArray(v) ? v.filter(valid) : null))
let state = store.get()
const listeners = new Set<() => void>()
store.subscribe(() => {
  state = store.get()
  listeners.forEach((l) => l())
})

export const useSaved = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state,
  )
export const allSaved = () => state
export const savedLocked = () => store.locked()

export function addSaved(score: Score, from: Saved['from']): Saved {
  const x: Saved = { id: `ps-${Date.now().toString(36)}`, title: score.title || 'Bản nhạc', from, score, created: Date.now() }
  store.set([x, ...state])
  return x
}
export const updateSaved = (id: string, patch: Partial<Saved>) => store.set(state.map((x) => (x.id === id ? { ...x, ...patch } : x)))
export const removeSaved = (id: string) => store.set(state.filter((x) => x.id !== id))
export function importSaved(data: unknown, mode: 'replace' | 'merge') {
  if (!Array.isArray(data)) return
  const incoming = data.filter(valid)
  store.set(mode === 'replace' ? incoming : [...state, ...incoming.filter((x) => !state.some((y) => y.id === x.id))])
}
