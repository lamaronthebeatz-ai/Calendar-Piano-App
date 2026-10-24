import { useEffect, useLayoutEffect, useMemo, useRef, useState, type RefObject } from 'react'
import clsx from 'clsx'
import { CopyIcon, DownloadIcon, NoteIcon, SearchIcon, TrashIcon, XIcon } from '../../../components/icons'
import { normalize } from '../../theory/wiki'
import type { ReaderBook } from './model'
import { addNote, cite, COLOR_LABEL, COLORS, flatten, locate, offsetOf, overlapping, rangeAt, removeNote, toMarkdown, updateNote, useNotes, type Note, type NoteColor } from './notes'

type HighlightCtor = new (...r: Range[]) => unknown
const registry = () => (CSS as unknown as { highlights?: Map<string, unknown> }).highlights
const HighlightClass = () => (globalThis as unknown as { Highlight?: HighlightCtor }).Highlight

/** Note id to bring into view once its page paints (set by the research notebook before navigating). */
export const FOCUS_KEY = 'rn-focus'

interface Selection {
  start: number
  end: number
  text: string
  before: string
  /** Highlights the selection touches, so they can be cleared from the toolbar. */
  hits: string[]
  x: number
  y: number
  below: boolean
}

interface AnnotatorProps {
  /** Element holding the text. */
  flow: RefObject<HTMLElement | null>
  /** Where the notes are stored: a book id, or LIBRARY for the library articles. */
  scope: string
  /** Reader item key or article slug. */
  itemKey: string
  /** Changes whenever the text is laid out again (page, size, font). */
  layout: string
  ratio: () => number
  cite: (text: string) => string
}

/**
 * Highlighting and notes on a page of text (the book reader and the library articles): paints the highlights with
 * the CSS Custom Highlight API (no DOM changes, so pagination is untouched), offers a toolbar over a text selection,
 * and opens a note card when a highlight is tapped.
 */
export function Annotator({ flow, scope, itemKey, layout, ratio, cite: citeText }: AnnotatorProps) {
  const notes = useNotes(scope)
  const layoutRef = useRef(layout)
  useEffect(() => {
    layoutRef.current = layout
  }, [layout])
  const mine = useMemo(() => notes.filter((n) => n.key === itemKey), [notes, itemKey])
  const mineRef = useRef(mine)
  useEffect(() => {
    mineRef.current = mine
  }, [mine])
  // Both belong to one layout: after a page turn or re-layout they simply stop showing.
  const [selState, setSel] = useState<(Selection & { layout: string }) | null>(null)
  const [openState, setOpen] = useState<{ id: string; x: number; y: number; layout: string } | null>(null)
  const sel = selState?.layout === layout ? selState : null
  const open = openState?.layout === layout ? openState : null

  // Paint, and bring a note asked for by the notebook into view.
  useLayoutEffect(() => {
    const reg = registry()
    const H = HighlightClass()
    const root = flow.current
    if (!root) return
    const flat = flatten(root)
    const focus = sessionStorage.getItem(FOCUS_KEY)
    const by: Record<string, Range[]> = {}
    for (const n of mine) {
      const at = locate(flat, n)
      const r = at && rangeAt(flat, at[0], at[1])
      if (!r) continue
      ;(by[`rn-${n.color}`] ??= []).push(r)
      if (n.note) (by['rn-noted'] ??= []).push(r.cloneRange())
      if (n.id === focus) {
        sessionStorage.removeItem(FOCUS_KEY)
        ;(r.startContainer.parentElement as HTMLElement | null)?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }
    }
    if (!reg || !H) return
    const names = [...COLORS.map((c) => `rn-${c}`), 'rn-noted']
    for (const k of names) {
      if (by[k]?.length) reg.set(k, new H(...by[k]))
      else reg.delete(k)
    }
    return () => names.forEach((k) => reg.delete(k))
  }, [mine, layout, flow])

  // Selection toolbar.
  useEffect(() => {
    let raf = 0
    const read = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const s = document.getSelection()
        const root = flow.current
        if (!s || s.isCollapsed || !s.rangeCount || !root) return setSel(null)
        const r = s.getRangeAt(0)
        if (!root.contains(r.commonAncestorContainer)) return setSel(null)
        const flat = flatten(root)
        const start = offsetOf(flat, r.startContainer, r.startOffset)
        const end = offsetOf(flat, r.endContainer, r.endOffset)
        if (start < 0 || end <= start) return setSel(null)
        const text = flat.text.slice(start, end)
        if (!text.trim()) return setSel(null)
        const rect = r.getBoundingClientRect()
        // On touch screens the system menu sits above the selection, so the toolbar goes below.
        const below = matchMedia('(pointer: coarse)').matches || rect.top < 90
        const hits = overlapping(flat, mineRef.current, start, end).map((n) => n.id)
        setSel({ layout: layoutRef.current, start, end, text, before: flat.text.slice(Math.max(0, start - 40), start), hits, x: rect.left + rect.width / 2, y: below ? rect.bottom + 12 : rect.top - 12, below })
        setOpen(null)
      })
    }
    document.addEventListener('selectionchange', read)
    return () => {
      document.removeEventListener('selectionchange', read)
      cancelAnimationFrame(raf)
    }
  }, [flow])

  // Taps: on a highlight open its card; with a selection, never turn the page.
  useEffect(() => {
    const root = flow.current
    if (!root) return
    const onClick = (e: MouseEvent) => {
      const s = document.getSelection()
      if (s && !s.isCollapsed && root.contains(s.anchorNode)) {
        e.stopPropagation()
        return
      }
      if ((e.target as HTMLElement).closest('a, button, input, figure')) return
      const pos = caretAt(e.clientX, e.clientY)
      if (!pos) return
      const flat = flatten(root)
      const off = offsetOf(flat, pos[0], pos[1])
      const hit = mine.find((n) => {
        const at = locate(flat, n)
        return at && off >= at[0] && off < at[1]
      })
      if (!hit) return
      e.stopPropagation()
      setOpen({ id: hit.id, x: e.clientX, y: e.clientY + 14, layout })
    }
    root.addEventListener('click', onClick, true)
    return () => root.removeEventListener('click', onClick, true)
  }, [flow, mine, layout])

  const clearSelection = () => {
    document.getSelection()?.removeAllRanges()
    setSel(null)
  }
  const create = (color: NoteColor, withNote = false) => {
    if (!sel) return
    // Re-colouring exactly what is already highlighted changes it rather than stacking a second highlight.
    const same = sel.hits.length === 1 && mine.find((n) => n.id === sel.hits[0] && n.text === sel.text)
    const n = same ? (updateNote(scope, same.id, { color }), same) : addNote(scope, { key: itemKey, text: sel.text, before: sel.before, color, ratio: ratio() })
    clearSelection()
    if (withNote) setOpen({ id: n.id, x: sel.x, y: sel.below ? sel.y : sel.y + 24, layout })
  }

  const note = open && notes.find((n) => n.id === open.id)
  return (
    <>
      {sel && (
        <div
          className={clsx('rn-bar fixed z-[75] flex items-center gap-1 rounded-full px-1.5 py-1', sel.below ? 'is-below' : 'is-above')}
          style={{ left: clampX(sel.x, sel.hits.length ? 360 : 300), top: sel.y }}
          onPointerDown={(e) => e.preventDefault()}
        >
          {COLORS.map((c) => (
            <button key={c} aria-label={`Tô ${COLOR_LABEL[c]}`} title={COLOR_LABEL[c]} onClick={() => create(c)} className={`rn-swatch rn-c-${c}`} />
          ))}
          <span className="mx-0.5 h-5 w-px bg-white/20" />
          <button onClick={() => create('yellow', true)} className="rn-tool" title="Tô và ghi chú">
            <NoteIcon width={15} height={15} /> <span className="hidden sm:inline">Ghi chú</span>
          </button>
          {sel.hits.length > 0 && (
            <button
              onClick={() => {
                sel.hits.forEach((id) => removeNote(scope, id))
                clearSelection()
              }}
              className="rn-tool text-[#ffb4a8]"
              title="Bỏ tô đoạn đã chọn"
            >
              <XIcon width={14} height={14} /> Bỏ tô
            </button>
          )}
          <button
            onClick={() => {
              void navigator.clipboard?.writeText(citeText(sel.text))
              clearSelection()
            }}
            className="rn-tool"
            title="Sao chép kèm nguồn"
          >
            <CopyIcon width={15} height={15} />
          </button>
        </div>
      )}
      {note && open && <NoteCard scope={scope} cite={citeText} note={note} x={open.x} y={open.y} onClose={() => setOpen(null)} />}
    </>
  )
}

const parseTags = (s: string) => [...new Set(s.split(/[,#]/).map((t) => t.trim()).filter(Boolean))]

function NoteCard({ scope, cite: citeText, note, x, y, onClose }: { scope: string; cite: (text: string) => string; note: Note; x: number; y: number; onClose: () => void }) {
  const [text, setText] = useState(note.note ?? '')
  const [tags, setTags] = useState((note.tags ?? []).join(', '))
  const save = () => {
    const t = parseTags(tags)
    if ((note.note ?? '') !== text.trim() || t.join() !== (note.tags ?? []).join()) updateNote(scope, note.id, { note: text.trim() || undefined, tags: t.length ? t : undefined })
    onClose()
  }
  const top = Math.min(y, innerHeight - 340)
  const keys = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) save()
    e.stopPropagation()
  }
  return (
    <>
      <div className="fixed inset-0 z-[75]" onClick={save} />
      <div className="rn-card fixed z-[76] w-[min(350px,calc(100vw-24px))] rounded-2xl p-3.5" style={{ left: clampX(x, 350), top }} onClick={(e) => e.stopPropagation()}>
        <p className={`rn-quote rn-q-${note.color} line-clamp-3 text-[13px] leading-relaxed`}>{note.text}</p>
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={keys}
          placeholder="Ghi chú, liên hệ, câu hỏi nghiên cứu…"
          rows={4}
          className="rn-input mt-2.5 w-full resize-none rounded-xl px-3 py-2 text-[13.5px] leading-relaxed outline-none"
        />
        <input value={tags} onChange={(e) => setTags(e.target.value)} onKeyDown={keys} placeholder="Thẻ đề tài, cách nhau dấu phẩy (vd. âm sắc, rubato)" className="rn-input mt-2 h-9 w-full rounded-xl px-3 text-[12.5px] outline-none" />
        <div className="mt-2.5 flex items-center gap-1.5">
          {COLORS.map((c) => (
            <button key={c} aria-label={COLOR_LABEL[c]} onClick={() => updateNote(scope, note.id, { color: c })} className={clsx(`rn-swatch rn-c-${c}`, note.color === c && 'is-on')} />
          ))}
          <span className="flex-1" />
          <button onClick={() => void navigator.clipboard?.writeText(citeText(note.text) + (text.trim() ? `\n\nGhi chú: ${text.trim()}` : ''))} className="reader-btn" aria-label="Sao chép kèm nguồn" title="Sao chép kèm nguồn">
            <CopyIcon width={15} height={15} />
          </button>
        </div>
        <div className="mt-2.5 flex items-center gap-2 border-t border-[var(--color-border)] pt-2.5">
          <button
            onClick={() => {
              removeNote(scope, note.id)
              onClose()
            }}
            className="rn-remove flex h-8 items-center gap-1.5 rounded-full px-3 text-[12.5px] font-medium"
          >
            <TrashIcon width={14} height={14} /> Bỏ tô
          </button>
          <span className="flex-1" />
          <button onClick={save} className="h-8 rounded-full bg-[var(--tint,var(--color-accent))] px-4 text-[12.5px] font-medium text-white">
            Xong
          </button>
        </div>
      </div>
    </>
  )
}

/** Everything highlighted or noted in a book: filter, search, jump back, export. */
export function NotesPanel({ book, onGo }: { book: ReaderBook; onGo: (index: number, n: Note) => void }) {
  const notes = useNotes(book.id)
  const [color, setColor] = useState<NoteColor | 'all' | 'noted'>('all')
  const [q, setQ] = useState('')
  const titleOf = (key: string) => {
    const it = book.items.find((i) => i.key === key)
    return it ? (it.kind === 'chapter' ? `Bài ${it.n}. ${it.title}` : it.title) : key
  }
  const order = new Map(book.items.map((it, i) => [it.key, i]))
  const nq = normalize(q.trim())
  const shown = notes
    .filter((n) => (color === 'all' ? true : color === 'noted' ? !!n.note : n.color === color))
    .filter((n) => !nq || normalize(`${n.text} ${n.note ?? ''}`).includes(nq))
    .sort((a, b) => (order.get(a.key) ?? 0) - (order.get(b.key) ?? 0) || a.ratio - b.ratio)

  const exportMd = () => {
    const blob = new Blob([toMarkdown(book.title + (book.volume ? ` — ${book.volume}` : ''), shown, titleOf)], { type: 'text/markdown' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `ghi-chu-${book.id}.md`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="space-y-2.5 border-b border-[var(--color-border)] px-4 pb-3">
        <div className="relative">
          <SearchIcon width={15} height={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm trong ghi chú…" className="rn-input h-9 w-full rounded-xl pl-9 pr-3 text-[13px] outline-none" />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <button onClick={() => setColor('all')} className={clsx('rn-chip', color === 'all' && 'is-on')}>Tất cả {notes.length}</button>
          <button onClick={() => setColor('noted')} className={clsx('rn-chip', color === 'noted' && 'is-on')}>Có ghi chú</button>
          {COLORS.map((c) => (
            <button key={c} aria-label={COLOR_LABEL[c]} onClick={() => setColor(color === c ? 'all' : c)} className={clsx(`rn-swatch rn-c-${c}`, color === c && 'is-on')} />
          ))}
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-2">
        {shown.length === 0 && (
          <p className="px-2 py-10 text-center text-[13px] leading-relaxed opacity-60">
            {notes.length ? 'Không có ghi chú khớp bộ lọc.' : 'Bôi chọn một đoạn văn để tô màu hoặc ghi chú. Mọi đánh dấu của sách sẽ hiện ở đây.'}
          </p>
        )}
        {shown.map((n, i) => {
          const head = n.key !== shown[i - 1]?.key ? n.key : null
          return (
            <div key={n.id}>
              {head && <p className="pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] opacity-55">{titleOf(head)}</p>}
              <div className="group relative rounded-xl px-2 py-2 hover:bg-[var(--color-surface-sunken)]">
                <button onClick={() => onGo(order.get(n.key) ?? 0, n)} className="block w-full text-left">
                  <p className={`rn-quote rn-q-${n.color} line-clamp-4 text-[13px] leading-relaxed`}>{n.text}</p>
                  {n.note && <p className="mt-1.5 whitespace-pre-wrap pl-3 text-[12.5px] leading-relaxed opacity-80">{n.note}</p>}
                </button>
                <div className="mt-1 flex items-center gap-1 pl-3 text-[11px] opacity-55">
                  {new Date(n.at).toLocaleDateString('vi-VN')}
                  <span className="flex-1" />
                  <button onClick={() => void navigator.clipboard?.writeText(cite(book, book.items[order.get(n.key) ?? 0], n.text) + (n.note ? `\n\nGhi chú: ${n.note}` : ''))} className="reader-btn h-7 w-7" aria-label="Sao chép kèm nguồn">
                    <CopyIcon width={13} height={13} />
                  </button>
                  <button onClick={() => removeNote(book.id, n.id)} className="reader-btn h-7 w-7" aria-label="Xoá">
                    <TrashIcon width={13} height={13} />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <a href="#/notes" className="mx-4 mt-2 flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-[var(--color-border-strong)] py-2 text-[12.5px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
        <NoteIcon width={14} height={14} /> Mở Sổ nghiên cứu — ghi chú của mọi sách, gắn thẻ đề tài
      </a>
      {notes.length > 0 && (
        <div className="flex gap-2 border-t border-[var(--color-border)] px-4 py-3">
          <button onClick={exportMd} className="rn-chip flex-1 justify-center gap-1.5">
            <DownloadIcon width={14} height={14} /> Xuất Markdown
          </button>
          <button onClick={() => void navigator.clipboard?.writeText(toMarkdown(book.title, shown, titleOf))} className="rn-chip flex-1 justify-center gap-1.5">
            <CopyIcon width={14} height={14} /> Sao chép tất cả
          </button>
        </div>
      )}
    </div>
  )
}

function caretAt(x: number, y: number): [Node, number] | null {
  const d = document as Document & { caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null; caretRangeFromPoint?: (x: number, y: number) => Range | null }
  const p = d.caretPositionFromPoint?.(x, y)
  if (p) return [p.offsetNode, p.offset]
  const r = d.caretRangeFromPoint?.(x, y)
  return r ? [r.startContainer, r.startOffset] : null
}

const clampX = (x: number, w: number) => Math.max(12, Math.min(innerWidth - w - 12, x - w / 2))
