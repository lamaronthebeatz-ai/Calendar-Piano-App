import { useSyncExternalStore } from 'react'

/** Reader preferences, last position and bookmarks per book. Kept in localStorage (every access tolerates it failing). */
export type ReaderTheme = 'paper' | 'sepia' | 'night' | 'app'
export type ReaderFont = 'serif' | 'sans' | 'classic'
export type ReaderMargin = 'narrow' | 'normal' | 'wide'
export type ReaderTurn = 'slide' | 'fade' | 'curl' | 'none'

export interface ReaderPrefs {
  size: number
  font: ReaderFont
  leading: number
  margin: ReaderMargin
  theme: ReaderTheme
  /** Two pages side by side on wide screens. */
  spread: boolean
  justify: boolean
  turn: ReaderTurn
}

export interface Position {
  key: string
  /** How far through the item, 0 – 1. */
  ratio: number
}

export interface Bookmark extends Position {
  label: string
  at: number
}

interface ReaderState {
  prefs: ReaderPrefs
  positions: Record<string, Position>
  bookmarks: Record<string, Bookmark[]>
}

const KEY = 'reader:state'
const DEFAULT_PREFS: ReaderPrefs = { size: 18, font: 'serif', leading: 1.7, margin: 'normal', theme: 'paper', spread: true, justify: true, turn: 'slide' }

function load(): ReaderState {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? '{}')
    return { prefs: { ...DEFAULT_PREFS, ...raw.prefs }, positions: raw.positions ?? {}, bookmarks: raw.bookmarks ?? {} }
  } catch {
    return { prefs: DEFAULT_PREFS, positions: {}, bookmarks: {} }
  }
}

let state = load()
const listeners = new Set<() => void>()

function update(patch: (s: ReaderState) => Partial<ReaderState>) {
  state = { ...state, ...patch(state) }
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

export const useReader = () => useSyncExternalStore(subscribe, () => state)

export const setPrefs = (p: Partial<ReaderPrefs>) => update((s) => ({ prefs: { ...s.prefs, ...p } }))

export const savePosition = (book: string, pos: Position) => update((s) => ({ positions: { ...s.positions, [book]: pos } }))

export const getPosition = (book: string): Position | undefined => state.positions[book]

/** Adds a bookmark at a position, or removes the one already on that page. */
export function toggleBookmark(book: string, mark: Bookmark, step: number) {
  update((s) => {
    const list = s.bookmarks[book] ?? []
    const hit = list.find((b) => b.key === mark.key && Math.abs(b.ratio - mark.ratio) < step / 2)
    return { bookmarks: { ...s.bookmarks, [book]: hit ? list.filter((b) => b !== hit) : [...list, mark].sort((a, b) => b.at - a.at) } }
  })
}

export const removeBookmark = (book: string, mark: Bookmark) =>
  update((s) => ({ bookmarks: { ...s.bookmarks, [book]: (s.bookmarks[book] ?? []).filter((b) => b !== mark) } }))
