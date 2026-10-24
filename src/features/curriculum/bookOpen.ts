import type { ReaderBook } from './reader/model'

export type Opening =
  | { mode: 'open'; book: ReaderBook; from: DOMRect; to: string }
  /** Leaving the reader: the book closes and flies back to its cover on the shelf. */
  | { mode: 'close'; book: ReaderBook; to: string }

/** sessionStorage key for the Cover Flow's centred book. */
export const COVERFLOW_KEY = 'coverflow-index'

let current: Opening | null = null
export const peek = () => current
export const listeners = new Set<() => void>()
export const set = (v: Opening | null) => {
  current = v
  listeners.forEach((l) => l())
}

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches

export function openBook(book: ReaderBook, from: Element, to: string, navigate: (to: string) => void) {
  if (current) return
  if (reduced()) return navigate(to)
  set({ mode: 'open', book, from: from.getBoundingClientRect(), to })
}

export function closeBook(book: ReaderBook, to: string, navigate: (to: string) => void) {
  if (current) return
  if (reduced()) return navigate(to)
  set({ mode: 'close', book, to })
}
