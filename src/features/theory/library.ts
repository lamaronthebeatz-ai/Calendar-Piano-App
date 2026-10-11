import { useSyncExternalStore } from 'react'

/**
 * Per-device reading state for the theory library: reader preferences, saved articles and
 * recently read ones, and every article ever opened (for reading progress on the musicology map). Kept in localStorage (a convenience, so every access tolerates it failing).
 */
export interface LibraryState {
  size: number
  serif: boolean
  saved: string[]
  recent: string[]
  read: string[]
}

const KEY = 'theory:library'
const DEFAULTS: LibraryState = { size: 16, serif: false, saved: [], recent: [], read: [] }

function load(): LibraryState {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') }
  } catch {
    return DEFAULTS
  }
}

let state = load()
const listeners = new Set<() => void>()

export function updateLibrary(patch: Partial<LibraryState> | ((s: LibraryState) => Partial<LibraryState>)) {
  state = { ...state, ...(typeof patch === 'function' ? patch(state) : patch) }
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Private mode or full storage: keep the change for this session only.
  }
  for (const l of listeners) l()
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export const useLibrary = () => useSyncExternalStore(subscribe, () => state)

export const toggleSaved = (slug: string) =>
  updateLibrary((s) => ({ saved: s.saved.includes(slug) ? s.saved.filter((x) => x !== slug) : [slug, ...s.saved] }))

export const markRead = (slug: string) =>
  updateLibrary((s) =>
    s.recent[0] === slug && s.read.includes(slug)
      ? {}
      : { recent: [slug, ...s.recent.filter((x) => x !== slug)].slice(0, 12), read: s.read.includes(slug) ? s.read : [...s.read, slug] },
  )
