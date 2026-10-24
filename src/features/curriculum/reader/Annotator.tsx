import { useEffect, useLayoutEffect, useMemo, useRef, useState, type RefObject } from 'react'
import clsx from 'clsx'
import { CopyIcon, DownloadIcon, NoteIcon, SearchIcon, TrashIcon } from '../../../components/icons'
import { normalize } from '../../theory/wiki'
import type { ReaderBook, ReaderItem } from './model'
import { addNote, cite, COLOR_LABEL, COLORS, flatten, locate, offsetOf, rangeAt, removeNote, toMarkdown, updateNote, useNotes, type Note, type NoteColor } from './notes'

type HighlightCtor = new (...r: Range[]) => unknown
const registry = () => (CSS as unknown as { highlights?: Map<string, unknown> }).highlights
const HighlightClass = () => (globalThis as unknown as { Highlight?: HighlightCtor }).Highlight

interface Selection {
  start: number
  end: number
  text: string
  before: string
  x: number
  y: number
  below: boolean
}

/**
 * Highlighting and notes inside the reader: paints the book's highlights with the CSS Custom Highlight API (no DOM
 * changes, so pagination is untouched), offers a toolbar over a text selection, and opens a note card when a
 * highlight is tapped.
 */
export function Annotator({ flow, book, item, layout, ratio }: { flow: RefObject<HTMLDivElement | null>; book: ReaderBook; item: ReaderItem; layout: string; ratio: () => number }) {
  const notes = useNotes(book.id)
  const layoutRef = useRef(layout)
  useEffect(() => {
    layoutRef.current = layout
  }, [layout])
  const mine = useMemo(() => notes.filter((n) => n.key === item.key), [notes, item.key])
  // Both belong to one layout: after a page turn or re-layout they simply stop showing.
  const [selState, setSel] = useState<(Selection & { layout: string }) | null>(null)
  const [openState, setOpen] = useState<{ id: string; x: number; y: number; layout: string } | null>(null)
  const sel = selState?.layout === layout ? selState : null
  const open = openState?.layout === layout ? openState : null

  // Paint.
  useLayoutEffect(() => {
    const reg = registry()
    const H = HighlightClass()
    const root = flow.current
    if (!reg || !H || !root) return
    const flat = flatten(root)
    const by: Record<string, Range[]> = {}
    for (const n of mine) {
      const at = locate(flat, n)
      const r = at && rangeAt(flat, at[0], at[1])
      if (!r) continue
      ;(by[`rn-${n.color}`] ??= []).push(r)
      if (n.note) (by['rn-noted'] ??= []).push(r.cloneRange())
    }
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
        setSel({ layout: layoutRef.current, start, end, text, before: flat.text.slice(Math.max(0, start - 40), start), x: rect.left + rect.width / 2, y: below ? rect.bottom + 12 : rect.top - 12, below })
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

  const create = (color: NoteColor, withNote = false) => {
    if (!sel) return
    const n = addNote(book.id, { key: item.key, text: sel.text, before: sel.before, color, ratio: ratio() })
    document.getSelection()?.removeAllRanges()
    setSel(null)
    if (withNote) setOpen({ id: n.id, x: sel.x, y: sel.below ? sel.y : sel.y + 24, layout })
  }

  const note = open && notes.find((n) => n.id === open.id)
  return (
    <>
      {sel && (
        <div
          className={clsx('rn-bar fixed z-50 flex items-center gap-1 rounded-full px-1.5 py-1', sel.below ? 'is-below' : 'is-above')}
          style={{ left: clampX(sel.x, 300), top: sel.y }}
          onPointerDown={(e) => e.preventDefault()}
        >
          {COLORS.map((c) => (
            <button key={c} aria-label={`Tô ${COLOR_LABEL[c]}`} title={COLOR_LABEL[c]} onClick={() => create(c)} className={`rn-swatch rn-c-${c}`} />
          ))}
          <span className="mx-0.5 h-5 w-px bg-white/20" />
          <button onClick={() => create('yellow', true)} className="rn-tool" title="Tô và ghi chú">
            <NoteIcon width={15} height={15} /> <span className="hidden sm:inline">Ghi chú</span>
          </button>
          <button
            onClick={() => {
              void navigator.clipboard?.writeText(cite(book, item, sel.text))
              document.getSelection()?.removeAllRanges()
              setSel(null)
            }}
            className="rn-tool"
            title="Sao chép kèm nguồn"
          >
            <CopyIcon width={15} height={15} />
          </button>
        </div>
      )}
      {note && open && <NoteCard book={book} item={item} note={note} x={open.x} y={open.y} onClose={() => setOpen(null)} />}
    </>
  )
}

function NoteCard({ book, item, note, x, y, onClose }: { book: ReaderBook; item: ReaderItem; note: Note; x: number; y: number; onClose: () => void }) {
  const [text, setText] = useState(note.note ?? '')
  const save = () => {
    if ((note.note ?? '') !== text.trim()) updateNote(book.id, note.id, { note: text.trim() || undefined })
    onClose()
  }
  const top = Math.min(y, innerHeight - 290)
  return (
    <>
      <div className="fixed inset-0 z-50" onClick={save} />
      <div className="rn-card fixed z-50 w-[min(340px,calc(100vw-24px))] rounded-2xl p-3.5" style={{ left: clampX(x, 340), top }} onClick={(e) => e.stopPropagation()}>
        <p className={`rn-quote rn-q-${note.color} line-clamp-3 text-[13px] leading-relaxed`}>{note.text}</p>
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) save()
            e.stopPropagation()
          }}
          placeholder="Ghi chú, liên hệ, câu hỏi nghiên cứu…"
          rows={4}
          className="rn-input mt-2.5 w-full resize-none rounded-xl px-3 py-2 text-[13.5px] leading-relaxed outline-none"
        />
        <div className="mt-2.5 flex items-center gap-1.5">
          {COLORS.map((c) => (
            <button key={c} aria-label={COLOR_LABEL[c]} onClick={() => updateNote(book.id, note.id, { color: c })} className={clsx(`rn-swatch rn-c-${c}`, note.color === c && 'is-on')} />
          ))}
          <span className="flex-1" />
          <button onClick={() => void navigator.clipboard?.writeText(cite(book, item, note.text) + (text.trim() ? `\n\nGhi chú: ${text.trim()}` : ''))} className="reader-btn" aria-label="Sao chép kèm nguồn" title="Sao chép kèm nguồn">
            <CopyIcon width={15} height={15} />
          </button>
          <button
            onClick={() => {
              removeNote(book.id, note.id)
              onClose()
            }}
            className="reader-btn"
            aria-label="Xoá đánh dấu"
            title="Xoá đánh dấu"
          >
            <TrashIcon width={15} height={15} />
          </button>
          <button onClick={save} className="ml-1 h-8 rounded-full bg-[var(--tint)] px-3.5 text-[12.5px] font-medium text-white">
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
