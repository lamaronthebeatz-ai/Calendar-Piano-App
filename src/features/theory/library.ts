import { useSyncExternalStore } from 'react'

/**
 * Per-device reading state for the theory library: reader preferences, saved articles and
 * recently read ones, and every article ever opened (for reading progress on the musicology map). Kept in localStorage (a convenience, so every access tolerates it failing).
 */
export interface LibraryState {
  size: number
  serif: boolean
  /** Line height of the article body. */
  leading: number
  saved: string[]
  recent: string[]
  read: string[]
  /** Lessons the learner ticked off as studied (curriculum progress); unlike `read`, set and cleared by hand. */
  done: string[]
}

const KEY = 'theory:library'
const DEFAULTS: LibraryState = { size: 16, serif: false, leading: 1.75, saved: [], recent: [], read: [], done: [] }

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

/** Ticks a lesson off as studied, or clears the tick. */
export const toggleDone = (slug: string) =>
  updateLibrary((s) => ({ done: s.done.includes(slug) ? s.done.filter((x) => x !== slug) : [...s.done, slug] }))

export const markRead = (slug: string) =>
  updateLibrary((s) =>
    s.recent[0] === slug && s.read.includes(slug)
      ? {}
      : { recent: [slug, ...s.recent.filter((x) => x !== slug)].slice(0, 12), read: s.read.includes(slug) ? s.read : [...s.read, slug] },
  )

/**
 * How far into each article the reader got (0 – 1), for "continue reading". Kept apart from the
 * library state on purpose: it changes on every visit and nothing needs to re-render when it does.
 */
const POS_KEY = 'theory:positions'
let positions: Record<string, number> = (() => {
  try {
    return JSON.parse(localStorage.getItem(POS_KEY) ?? '{}')
  } catch {
    return {}
  }
})()

export const readingPosition = (slug: string) => positions[slug] ?? 0

export function saveReadingPosition(slug: string, ratio: number) {
  // Keep the 300 most recent so the store stays small.
  const { [slug]: _, ...rest } = positions
  positions = Object.fromEntries([...Object.entries(rest).slice(-299), [slug, Math.round(ratio * 1000) / 1000]])
  try {
    localStorage.setItem(POS_KEY, JSON.stringify(positions))
  } catch {
    // Storage unavailable: progress is kept for this session only.
  }
}
