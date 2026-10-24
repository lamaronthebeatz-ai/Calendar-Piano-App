import type { ReaderBook } from './reader/model'

export interface Opening {
  book: ReaderBook
  from: DOMRect
  to: string
}

let current: Opening | null = null
export const peek = () => current
export const listeners = new Set<() => void>()
export const set = (v: Opening | null) => {
  current = v
  listeners.forEach((l) => l())
}

export function openBook(book: ReaderBook, from: Element, to: string, navigate: (to: string) => void) {
  if (current) return
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return navigate(to)
  set({ book, from: from.getBoundingClientRect(), to })
}

