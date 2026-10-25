import { useSyncExternalStore } from 'react'
import type { ReaderBook, ReaderItem } from './model'
import { splitOldJazz } from '../books'

/** Highlights and notes per book, anchored by the quoted text (plus a little of what precedes it) so they survive re-pagination. */
export const COLORS = ['yellow', 'green', 'blue', 'pink', 'purple'] as const
export type NoteColor = (typeof COLORS)[number]
export const COLOR_LABEL: Record<NoteColor, string> = { yellow: 'Vàng', green: 'Xanh lá', blue: 'Xanh dương', pink: 'Hồng', purple: 'Tím' }

export interface Note {
  id: string
  /** Reader item key (the chapter's slug, "loi-noi-dau"…). */
  key: string
  text: string
  /** Up to 40 characters before the quote, to tell repeated phrases apart. */
  before: string
  color: NoteColor
  note?: string
  /** Position through the item when it was made, 0 – 1: a fallback for jumping back to it. */
  ratio: number
  at: number
  /** Research topics, free text. */
  tags?: string[]
}

/** Scope of the library articles (books use their own id). */
export const LIBRARY = 'thu-vien'

const KEY = 'reader:notes'
let state: Record<string, Note[]> = load()
const listeners = new Set<() => void>()

function load(): Record<string, Note[]> {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '{}')
    return v && typeof v === 'object' ? splitOldJazz(v) : {}
  } catch {
    return {}
  }
}

function commit(book: string, notes: Note[]) {
  state = { ...state, [book]: notes }
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Storage full or blocked: keep the change for this session.
  }
  listeners.forEach((l) => l())
}

const EMPTY: Note[] = []
export const useNotes = (book: string) =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state[book] ?? EMPTY,
  )

const ALL_EMPTY: Record<string, Note[]> = {}
export const useAllNotes = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state ?? ALL_EMPTY,
  )
export const allNotes = () => state

/** Restore from a backup: replace everything, or add notes this device doesn't have yet (matched by id). */
export function importNotes(data: Record<string, Note[]>, mode: 'replace' | 'merge') {
  const next: Record<string, Note[]> = mode === 'replace' ? {} : { ...state }
  for (const [book, list] of Object.entries(splitOldJazz(data))) {
    if (!Array.isArray(list)) continue
    const have = new Map((next[book] ?? []).map((n) => [n.id, n]))
    for (const n of list) if (n && typeof n.text === 'string' && n.text && typeof n.id === 'string') have.set(n.id, n)
    next[book] = [...have.values()]
  }
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    /* keep for this session */
  }
  listeners.forEach((l) => l())
}

/** Note ids whose quotes overlap [start, end) in the flat text. */
export function overlapping(flat: Flat, notes: Note[], start: number, end: number) {
  return notes.filter((n) => {
    const at = locate(flat, n)
    return at && at[0] < end && start < at[1]
  })
}

export function addNote(book: string, n: Omit<Note, 'id' | 'at'>): Note {
  const note = { ...n, id: Math.random().toString(36).slice(2, 10), at: Date.now() }
  commit(book, [...(state[book] ?? []), note])
  return note
}
export const updateNote = (book: string, id: string, patch: Partial<Note>) => commit(book, (state[book] ?? []).map((n) => (n.id === id ? { ...n, ...patch } : n)))
export const removeNote = (book: string, id: string) => commit(book, (state[book] ?? []).filter((n) => n.id !== id))

/* ------------------------------------------------------------ anchoring */

export interface Flat {
  text: string
  nodes: { node: Text; start: number }[]
}

/** All text of a rendered item as one string, with where each text node starts in it. */
export function flatten(root: HTMLElement): Flat {
  const nodes: Flat['nodes'] = []
  let text = ''
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  for (let n = walk.nextNode() as Text | null; n; n = walk.nextNode() as Text | null) {
    nodes.push({ node: n, start: text.length })
    text += n.data
  }
  return { text, nodes }
}

function point(flat: Flat, offset: number): [Text, number] | null {
  let lo = 0
  let hi = flat.nodes.length - 1
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (flat.nodes[mid].start <= offset) lo = mid
    else hi = mid - 1
  }
  const n = flat.nodes[lo]
  return n ? [n.node, Math.min(offset - n.start, n.node.data.length)] : null
}

export function rangeAt(flat: Flat, start: number, end: number): Range | null {
  const a = point(flat, start)
  const b = point(flat, end)
  if (!a || !b) return null
  const r = document.createRange()
  r.setStart(a[0], a[1])
  r.setEnd(b[0], b[1])
  return r
}

/** Offset in the flat text of a DOM position. */
export function offsetOf(flat: Flat, node: Node, offset: number): number {
  if (node.nodeType === Node.TEXT_NODE) {
    const n = flat.nodes.find((x) => x.node === node)
    return n ? n.start + offset : -1
  }
  // An element position: the start of its offset-th child's first text.
  const child = node.childNodes[offset] ?? node
  const walk = document.createTreeWalker(child, NodeFilter.SHOW_TEXT)
  const first = walk.nextNode()
  const n = first && flat.nodes.find((x) => x.node === first)
  return n ? n.start : -1
}

/** Where a note sits in the flat text: the occurrence of its quote whose preceding text matches best. */
export function locate(flat: Flat, n: Note): [number, number] | null {
  // An empty quote would match everywhere, and indexOf('', past the end) never moves on: the loop would never stop.
  if (typeof n.text !== 'string' || !n.text) return null
  const before = typeof n.before === 'string' ? n.before : ''
  let best = -1
  let bestScore = -1
  for (let i = flat.text.indexOf(n.text); i >= 0; i = flat.text.indexOf(n.text, i + 1)) {
    const prev = flat.text.slice(Math.max(0, i - before.length), i)
    let s = 0
    while (s < prev.length && prev[prev.length - 1 - s] === before[before.length - 1 - s]) s++
    if (s > bestScore) {
      best = i
      bestScore = s
    }
  }
  return best < 0 ? null : [best, best + n.text.length]
}

/* --------------------------------------------------------------- export */

export function toMarkdown(bookTitle: string, notes: Note[], titleOf: (key: string) => string) {
  const groups = new Map<string, Note[]>()
  for (const n of notes) groups.set(n.key, [...(groups.get(n.key) ?? []), n])
  let md = `# ${bookTitle} — ghi chú và đánh dấu\n\n`
  for (const [key, list] of groups) {
    md += `## ${titleOf(key)}\n\n`
    for (const n of list) {
      md += `> ${n.text.replace(/\n+/g, ' ')}\n\n`
      if (n.note) md += `${n.note}\n\n`
      if (n.tags?.length) md += n.tags.map((t) => `#${t.replace(/\s+/g, '-')}`).join(' ') + '\n\n'
      md += `*${COLOR_LABEL[n.color]} · ${new Date(n.at).toLocaleDateString('vi-VN')}*\n\n`
    }
  }
  return md
}

/** How a quote is cited when copied: "…" — Book, Lesson. */
export const cite = (book: ReaderBook, item: ReaderItem | undefined, text: string) =>
  `“${text.trim()}”\n— ${book.title}${book.volume ? ` (${book.volume})` : ''}${item && item.kind === 'chapter' ? `, Bài ${item.n}: ${item.title}` : item ? `, ${item.title}` : ''}`
