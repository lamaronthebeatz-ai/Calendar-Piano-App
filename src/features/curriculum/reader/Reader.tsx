import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent, type ReactNode, type WheelEvent as ReactWheelEvent } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowLeftIcon, BookmarkIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, DownloadIcon, ExpandIcon, GraduationIcon, ListIcon, SearchIcon, TypeIcon, XIcon } from '../../../components/icons'
import { Markup } from '../../theory/Markup'
import { CATEGORIES } from '../../theory/articles'
import { findArticle, normalize } from '../../theory/wiki'
import { markRead, toggleDone, useLibrary } from '../../theory/library'
import { Cover } from './Cover'
import { chaptersOf, hueTint, roman, type ReaderBook, type ReaderItem } from './model'
import { getPosition, removeBookmark, savePosition, setPrefs, toggleBookmark, useReader, type Bookmark, type ReaderPrefs } from './store'

const GAP = 64
const MARGINS: Record<ReaderPrefs['margin'], [number, number]> = { narrow: [18, 28], normal: [26, 48], wide: [34, 72] }
const FONTS: Record<ReaderPrefs['font'], string> = { serif: 'var(--font-serif)', sans: 'var(--font-sans)', classic: 'var(--font-display)' }

type Panel = 'toc' | 'settings' | 'search' | null

/**
 * A paginated book reader. Each item (cover, preface, contents, part opener, chapter) is laid out in
 * CSS columns exactly one page wide (two on wide screens), and a page turn slides the column strip by
 * one page. Swipe, tap the page edges, use the arrow keys or the wheel to turn; the bars show and hide
 * with a tap in the middle. The address of a chapter is its library slug.
 */
export function Reader({ book, itemKey }: { book: ReaderBook; itemKey?: string }) {
  const navigate = useNavigate()
  const { prefs, bookmarks } = useReader()
  const items = book.items
  const keyIndex = (k?: string) => (k ? items.findIndex((i) => i.key === k) : -1)

  const [index, setIndex] = useState(() => {
    const fromUrl = keyIndex(itemKey)
    if (fromUrl >= 0) return fromUrl
    return Math.max(0, keyIndex(getPosition(book.id)?.key))
  })
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [chrome, setChrome] = useState(true)
  const [panel, setPanel] = useState<Panel>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [deskW, setDeskW] = useState(() => innerWidth)
  // No slide while an item is being laid out (a new chapter, a new type size): jump straight to the page.
  const [instant, setInstant] = useState(true)

  // Where to land once the next item is measured: a ratio through it, its last page, or the page holding a search hit.
  const pending = useRef<number | 'last' | { find: string } | null>(itemKey && keyIndex(itemKey) >= 0 ? 0 : (getPosition(book.id)?.ratio ?? 0))
  const ratio = useRef(0)
  const dir = useRef<1 | -1>(1)
  const viewport = useRef<HTMLDivElement>(null)
  const desk = useRef<HTMLElement>(null)
  const flow = useRef<HTMLDivElement>(null)
  const sentinel = useRef<HTMLSpanElement>(null)

  const item = items[index]
  const isCover = item.kind === 'cover'
  // Two pages when the desk is wide enough (decided on the desk, not the page, whose width depends on it).
  const wide = deskW >= 1080 && prefs.spread && !isCover
  const [padY, padX] = MARGINS[prefs.margin]
  const mobile = size.w < 640
  const px = mobile ? Math.round(padX * 0.55) : padX
  const pageW = Math.max(0, size.w - px * 2)
  const pageH = Math.max(0, size.h - padY * 2)
  const colW = wide ? (pageW - GAP) / 2 : pageW
  const step = pageW + GAP

  // Viewport size.
  useLayoutEffect(() => {
    const el = viewport.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setSize({ w: el.clientWidth, h: el.clientHeight })
      if (desk.current) setDeskW(desk.current.clientWidth)
    })
    ro.observe(el)
    if (desk.current) ro.observe(desk.current)
    return () => ro.disconnect()
  }, [])

  const measure = useCallback(() => {
    const f = flow.current
    const s = sentinel.current
    if (!f || !s || !step) return
    const n = isCover ? 1 : Math.max(1, Math.floor((s.getBoundingClientRect().left - f.getBoundingClientRect().left - 1) / step) + 1)
    setPages(n)
    const want = pending.current
    pending.current = null
    let target: number
    if (want === 'last') target = n - 1
    else if (typeof want === 'number') target = Math.floor(want * n + 1e-6)
    else if (want && typeof want === 'object') target = findPage(f, want.find, step)
    else target = Math.floor(ratio.current * n + 1e-6)
    setInstant(true)
    setPage(Math.min(n - 1, Math.max(0, target)))
    requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)))
  }, [isCover, step])

  // Re-measure when the item, the page size or the type changes, and when content (images, fonts) grows.
  useLayoutEffect(() => {
    measure()
  }, [measure, index, prefs.size, prefs.font, prefs.leading, prefs.justify, colW, pageH])
  useEffect(() => {
    const f = flow.current
    if (!f) return
    const ro = new ResizeObserver(() => measure())
    ro.observe(f)
    document.fonts?.ready.then(() => measure())
    return () => ro.disconnect()
  }, [measure, index])

  useEffect(() => {
    ratio.current = pages ? page / pages : 0
    savePosition(book.id, { key: item.key, ratio: ratio.current })
  }, [book.id, item.key, page, pages])

  // Keep the address in step with the item; follow the address when it changes from outside (a link).
  useEffect(() => {
    if (item.key !== itemKey) navigate(`/curriculum/${book.id}/${item.key}`, { replace: true })
    if (item.kind === 'chapter') markRead(item.slug)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.key])
  useEffect(() => {
    const i = keyIndex(itemKey)
    if (i >= 0 && i !== index) go(i)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemKey])

  const go = useCallback(
    (i: number, where: number | 'last' | { find: string } = 0) => {
      if (i < 0 || i >= items.length) return
      dir.current = i >= index ? 1 : -1
      pending.current = where
      if (i === index) measure()
      else {
        setInstant(true)
        setIndex(i)
      }
      setPanel(null)
    },
    [index, items.length, measure],
  )
  const next = useCallback(() => {
    if (page < pages - 1) setPage(page + 1)
    else if (index < items.length - 1) go(index + 1, 0)
  }, [page, pages, index, items.length, go])
  const prev = useCallback(() => {
    if (page > 0) setPage(page - 1)
    else if (index > 0) go(index - 1, 'last')
  }, [page, index, go])

  // Keyboard.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest('input, textarea')) return
      if (e.key === 'Escape') return panel ? setPanel(null) : setChrome(true)
      if (panel) return
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        next()
      }
      if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        prev()
      }
      if (e.key === 'Home') go(0)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [next, prev, go, panel])

  // Wheel and trackpad: one turn per gesture.
  const wheelLock = useRef(0)
  const onWheel = (e: ReactWheelEvent) => {
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
    if (Math.abs(d) < 24 || Date.now() < wheelLock.current) return
    wheelLock.current = Date.now() + 450
    if (d > 0) next()
    else prev()
  }

  // Swipe: follow the finger, then turn if the drag went far or fast enough.
  const start = useRef<{ x: number; y: number; t: number; id: number } | null>(null)
  const moved = useRef(false)
  const atStart = index === 0 && page === 0
  const atEnd = index === items.length - 1 && page === pages - 1
  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.button !== 0 || panel) return
    start.current = { x: e.clientX, y: e.clientY, t: Date.now(), id: e.pointerId }
    moved.current = false
  }
  const onPointerMove = (e: ReactPointerEvent) => {
    const s = start.current
    if (!s || s.id !== e.pointerId) return
    const dx = e.clientX - s.x
    if (!dragging) {
      if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(e.clientY - s.y)) return
      setDragging(true)
      moved.current = true
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    }
    // Resist at the two ends of the book.
    setDrag((dx > 0 && atStart) || (dx < 0 && atEnd) ? dx * 0.25 : dx)
  }
  const onPointerUp = (e: ReactPointerEvent) => {
    const s = start.current
    start.current = null
    if (!s || !dragging) return
    const dx = e.clientX - s.x
    const fast = Math.abs(dx) / Math.max(1, Date.now() - s.t) > 0.45
    setDragging(false)
    setDrag(0)
    if (Math.abs(dx) > size.w * 0.18 || (fast && Math.abs(dx) > 30)) (dx < 0 ? next : prev)()
  }

  const onClick = (e: ReactMouseEvent) => {
    if (moved.current) {
      moved.current = false
      return
    }
    const t = e.target as HTMLElement
    const link = t.closest<HTMLAnchorElement>('a[data-slug]')
    if (link) {
      const i = keyIndex(link.dataset.slug)
      if (i >= 0) {
        e.preventDefault()
        go(i)
      }
      return
    }
    if (t.closest('a, button, input, select, figure, iframe, summary, [role=button], table')) return
    const r = viewport.current!.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    if (x < 0.28) prev()
    else if (x > 0.72) next()
    else setChrome((c) => !c)
  }

  const fullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.()
    else document.documentElement.requestFullscreen?.().catch(() => undefined)
  }

  const marks = bookmarks[book.id] ?? []
  const here = pages ? page / pages : 0
  const marked = marks.some((b) => b.key === item.key && Math.abs(b.ratio - here) < 0.5 / pages)
  const progress = (index + (page + 1) / pages) / items.length
  const chapter = item.kind === 'cover' ? undefined : item
  const turn = prefs.turn

  const style = {
    ...hueTint(book.hue),
    '--reader-size': `${prefs.size}px`,
    '--reader-leading': prefs.leading,
    '--reader-font': FONTS[prefs.font],
    '--page-h': `${pageH}px`,
  } as CSSProperties

  // Rendered at the root so it covers the whole app (side bar and bottom navigation included).
  return createPortal(
    <div className="reader fixed inset-0 z-[70] flex flex-col overflow-hidden" data-rtheme={prefs.theme} style={style}>
      {/* Top bar */}
      <header className={clsx('reader-bar absolute inset-x-0 top-0 z-20 flex h-14 items-center gap-1 px-2 pt-[env(safe-area-inset-top)] transition-all duration-500 sm:px-4', !chrome && '-translate-y-full opacity-0')}>
        <Link to="/curriculum" aria-label="Về giá sách" className="reader-btn">
          <ArrowLeftIcon width={18} height={18} />
        </Link>
        <button onClick={() => setPanel(panel === 'toc' ? null : 'toc')} aria-label="Mục lục" className={clsx('reader-btn', panel === 'toc' && 'is-on')}>
          <ListIcon width={18} height={18} />
        </button>
        <div className="min-w-0 flex-1 px-2 text-center">
          <p className="truncate font-display text-[14.5px] font-semibold leading-tight text-[var(--color-ink)]">
            {book.title}
            {book.volume && <span className="font-normal text-[var(--color-ink-muted)]"> · {book.volume}</span>}
          </p>
          <p className="truncate text-[11.5px] leading-tight text-[var(--color-ink-faint)]">{chapter ? chapter.title : book.subtitle}</p>
        </div>
        <button onClick={() => setPanel(panel === 'search' ? null : 'search')} aria-label="Tìm trong sách" className={clsx('reader-btn', panel === 'search' && 'is-on')}>
          <SearchIcon width={18} height={18} />
        </button>
        <button onClick={() => setPanel(panel === 'settings' ? null : 'settings')} aria-label="Cỡ chữ và giao diện" className={clsx('reader-btn', panel === 'settings' && 'is-on')}>
          <TypeIcon width={18} height={18} />
        </button>
        <button
          onClick={() => toggleBookmark(book.id, { key: item.key, ratio: here, label: item.title, at: Date.now() }, 1 / pages)}
          aria-label={marked ? 'Bỏ dấu trang' : 'Đặt dấu trang'}
          aria-pressed={marked}
          className={clsx('reader-btn', marked && 'text-[var(--color-gold)]')}
        >
          <BookmarkIcon width={18} height={18} fill={marked ? 'currentColor' : 'none'} />
        </button>
        <Link to={`/curriculum/${book.id}/in`} aria-label="Xuất PDF" title="Xuất PDF" className="reader-btn hidden sm:flex">
          <DownloadIcon width={18} height={18} />
        </Link>
        {book.kind === 'course' && (
          <Link to={`/curriculum/${book.id}/tong-quan`} aria-label="Tổng quan và tiến độ" title="Tổng quan và tiến độ" className="reader-btn hidden sm:flex">
            <GraduationIcon width={18} height={18} />
          </Link>
        )}
        <button onClick={fullscreen} aria-label="Toàn màn hình" className="reader-btn hidden sm:flex">
          <ExpandIcon width={17} height={17} />
        </button>
      </header>

      {/* The page */}
      <main ref={desk} className="reader-desk relative flex min-h-0 flex-1 items-stretch justify-center px-2 pb-16 pt-14 sm:px-6">
        <div className={clsx('reader-page relative my-2 w-full overflow-hidden', wide ? 'max-w-[1240px] is-spread' : 'max-w-[780px]')}>
          <div
            ref={viewport}
            className="absolute inset-0 touch-pan-y select-text"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClick={onClick}
            onWheel={onWheel}
          >
            <div style={{ padding: `${padY}px ${px}px` }} className="h-full">
              <div
                key={item.key}
                className={clsx('reader-enter h-full', turn !== 'none' && (dir.current > 0 ? 'from-right' : 'from-left'), turn === 'fade' && 'is-fade')}
              >
                <div
                  ref={flow}
                  className={clsx('reader-flow', prefs.justify && 'is-justified', isCover && 'is-cover')}
                  style={{
                    width: pageW,
                    height: pageH,
                    columnWidth: isCover ? undefined : colW,
                    columnGap: GAP,
                    transform: `translate3d(${-page * step + drag}px,0,0)`,
                    transition: dragging || instant || turn === 'none' ? 'none' : turn === 'fade' ? 'transform 0ms' : 'transform 520ms cubic-bezier(0.22, 0.8, 0.2, 1)',
                  }}
                >
                  <ItemView book={book} item={item} onGo={(k) => go(keyIndex(k))} />
                  <span ref={sentinel} className="block h-px w-px" />
                </div>
              </div>
            </div>
          </div>
          {wide && <span aria-hidden className="reader-gutter pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2" />}
        </div>
        <button onClick={prev} aria-label="Trang trước" disabled={atStart} className={clsx('reader-turn left-1 lg:left-4', !chrome && 'opacity-0')}>
          <ChevronLeftIcon width={22} height={22} />
        </button>
        <button onClick={next} aria-label="Trang sau" disabled={atEnd} className={clsx('reader-turn right-1 lg:right-4', !chrome && 'opacity-0')}>
          <ChevronRightIcon width={22} height={22} />
        </button>
      </main>

      {/* Bottom bar */}
      <footer className={clsx('reader-bar absolute inset-x-0 bottom-0 z-20 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 transition-all duration-500 sm:px-6', !chrome && 'translate-y-full opacity-0')}>
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <span className="w-16 shrink-0 text-[11.5px] tabular-nums text-[var(--color-ink-faint)]">
            {isCover ? 'Bìa' : `Tr. ${page + 1}/${pages}`}
          </span>
          <input
            type="range"
            min={0}
            max={items.length - 1}
            value={index}
            onChange={(e) => go(Number(e.target.value))}
            aria-label="Đi tới chương"
            className="reader-range flex-1"
            style={{ '--fill': `${progress * 100}%` } as CSSProperties}
          />
          <span className="w-12 shrink-0 text-right text-[11.5px] tabular-nums text-[var(--color-ink-faint)]">{Math.round(progress * 100)}%</span>
        </div>
      </footer>
      <div aria-hidden className="reader-thread pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[2px]" style={{ transform: `scaleX(${progress})` }} />

      {panel === 'toc' && <Toc book={book} current={index} marks={marks} onGo={go} onClose={() => setPanel(null)} />}
      {panel === 'settings' && <Settings book={book} prefs={prefs} onClose={() => setPanel(null)} />}
      {panel === 'search' && <Search book={book} onGo={(i, q) => go(i, { find: q })} onClose={() => setPanel(null)} />}
    </div>,
    document.body,
  )
}

/** The page of the first text node that contains `q` (accent-insensitive), and briefly highlights it. */
function findPage(root: HTMLElement, q: string, step: number) {
  const nq = normalize(q)
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const base = root.getBoundingClientRect().left
  for (let n = walk.nextNode(); n; n = walk.nextNode()) {
    const text = n.textContent ?? ''
    const at = normalize(text).indexOf(nq)
    if (at < 0) continue
    const range = document.createRange()
    // normalize() drops combining marks only, so offsets in the NFC text stay close; clamp to be safe.
    range.setStart(n, Math.min(at, text.length))
    range.setEnd(n, Math.min(at + q.length, text.length))
    const reg = (CSS as unknown as { highlights?: Map<string, unknown> }).highlights
    const H = (globalThis as unknown as { Highlight?: new (r: Range) => unknown }).Highlight
    if (reg && H) {
      reg.set('reader-find', new H(range))
      setTimeout(() => reg.delete('reader-find'), 5000)
    }
    const left = range.getBoundingClientRect().left - base
    return Math.max(0, Math.floor(left / step))
  }
  return 0
}

/* ------------------------------------------------------------------ items */

function ItemView({ book, item, onGo }: { book: ReaderBook; item: ReaderItem; onGo: (key: string) => void }) {
  switch (item.kind) {
    case 'cover':
      return <CoverPage book={book} onStart={() => onGo(book.items[1].key)} />
    case 'front':
      return (
        <article className="reader-article">
          <p className="reader-kicker">{book.title}{book.volume ? ` · ${book.volume}` : ''}</p>
          <h1 className="reader-title">{item.title}</h1>
          <Markup source={item.body} />
          <p className="mt-8 text-right font-display text-[1.1em] italic text-[var(--color-ink-muted)]">— {book.author}</p>
        </article>
      )
    case 'toc':
      return <TocPage book={book} onGo={onGo} />
    case 'part':
      return <PartPage book={book} item={item} onGo={onGo} />
    case 'chapter':
      return <ChapterPage book={book} item={item} onGo={onGo} />
  }
}

function CoverPage({ book, onStart }: { book: ReaderBook; onStart: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 py-4">
      <div className="reader-cover-3d w-[min(78%,calc(var(--page-h)*0.72),440px)]">
        <Cover book={book} size={1.15} className="rounded-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),0_8px_20px_-8px_rgba(0,0,0,0.25)]" />
      </div>
      <p className="max-w-md text-center font-sans text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">{book.subtitle}</p>
      <button onClick={onStart} className="reader-cta">
        Bắt đầu đọc <ChevronRightIcon width={16} height={16} />
      </button>
    </div>
  )
}

function TocPage({ book, onGo }: { book: ReaderBook; onGo: (key: string) => void }) {
  const { done } = useLibrary()
  return (
    <article className="reader-article">
      <p className="reader-kicker">{book.title}{book.volume ? ` · ${book.volume}` : ''}</p>
      <h1 className="reader-title">Mục lục</h1>
      <ol className="space-y-1 font-sans">
        {book.items.map((it) => {
          if (it.kind === 'cover' || it.kind === 'toc') return null
          if (it.kind === 'part')
            return (
              <li key={it.key} className="break-after-avoid pt-4">
                <button onClick={() => onGo(it.key)} className="reader-toc-part">
                  <span className="text-[0.72em] font-semibold uppercase tracking-[0.18em] text-[var(--tint)]">{it.label}</span>
                  <span className="block font-display text-[1.15em] font-semibold text-[var(--color-ink)]">{it.title}</span>
                </button>
              </li>
            )
          const isDone = it.kind === 'chapter' && done.includes(it.slug)
          return (
            <li key={it.key}>
              <button onClick={() => onGo(it.key)} className="reader-toc-row">
                <span className="w-8 shrink-0 text-right font-display tabular-nums text-[var(--color-ink-faint)]">{it.kind === 'chapter' ? it.n : '·'}</span>
                <span className="min-w-0 flex-1 text-[0.92em] text-[var(--color-ink)]">{it.title}</span>
                {isDone && <CheckIcon width={13} height={13} strokeWidth={3} className="shrink-0 text-[var(--color-status-completed)]" />}
              </button>
            </li>
          )
        })}
      </ol>
    </article>
  )
}

function PartPage({ book, item, onGo }: { book: ReaderBook; item: Extract<ReaderItem, { kind: 'part' }>; onGo: (key: string) => void }) {
  const chapters = chaptersOf(book).filter((c) => c.part === item.n)
  return (
    <article className="reader-article">
      <div className="reader-part-head">
        <span aria-hidden className="reader-part-numeral">{roman(item.n)}</span>
        <p className="reader-kicker">{item.label}</p>
        <h1 className="reader-title !mt-1">{item.title}</h1>
        <p className="reader-lead">{item.intro}</p>
      </div>
      {chapters.length > 0 && (
        <ol className="my-6 space-y-1 font-sans">
          {chapters.map((c) => (
            <li key={c.key}>
              <button onClick={() => onGo(c.key)} className="reader-toc-row">
                <span className="w-8 shrink-0 text-right font-display tabular-nums text-[var(--tint)]">{c.n}</span>
                <span className="min-w-0 flex-1 text-[0.92em] text-[var(--color-ink)]">{c.title}</span>
              </button>
            </li>
          ))}
        </ol>
      )}
      {item.body && <Markup source={item.body} />}
    </article>
  )
}

function ChapterPage({ book, item, onGo }: { book: ReaderBook; item: Extract<ReaderItem, { kind: 'chapter' }>; onGo: (key: string) => void }) {
  const a = findArticle(item.slug)!
  const { done } = useLibrary()
  const isDone = done.includes(a.slug)
  const all = chaptersOf(book)
  const nextChapter = all[all.findIndex((c) => c.key === item.key) + 1]
  const part = book.items.find((i) => i.kind === 'part' && i.n === item.part)
  return (
    <article className="reader-article">
      <p className="reader-kicker">
        Chương {item.n}
        {part && part.kind === 'part' && <span className="text-[var(--color-ink-faint)]"> · {part.label.split(' · ')[0]}</span>}
      </p>
      <h1 className="reader-title">{a.title}</h1>
      <p className="reader-lead">{a.summary}</p>
      {item.focus && (
        <p className="reader-focus">
          <span className="font-sans text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[var(--tint)]">Trọng tâm</span>
          <span className="block">{item.focus}</span>
        </p>
      )}
      <div className="reader-body">
        <Markup source={a.body} />
      </div>
      {a.refs && a.refs.length > 0 && (
        <section className="reader-refs">
          <h2>Nguồn</h2>
          <ol>
            {a.refs.map(([t, u]) => (
              <li key={u}>
                <a href={u} target="_blank" rel="noreferrer">{t}</a>
              </li>
            ))}
          </ol>
        </section>
      )}
      <footer className="reader-end">
        <button onClick={() => toggleDone(a.slug)} aria-pressed={isDone} className={clsx('reader-cta', isDone && 'is-done')}>
          {isDone ? <><CheckIcon width={15} height={15} strokeWidth={3} /> Đã học</> : 'Đánh dấu đã học'}
        </button>
        <Link to={`/theory/${a.slug}`} className="text-[0.8em] font-medium text-[var(--color-ink-muted)] underline-offset-4 hover:underline">
          Mở ở thư viện · {CATEGORIES[a.category].title}
        </Link>
        {nextChapter && (
          <button onClick={() => onGo(nextChapter.key)} className="reader-next">
            <span className="text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">Chương tiếp · {nextChapter.n}</span>
            <span className="block font-display text-[1.05em] font-semibold text-[var(--color-ink)]">{nextChapter.title}</span>
          </button>
        )}
      </footer>
    </article>
  )
}

/* ----------------------------------------------------------------- panels */

function Sheet({ side, title, onClose, children }: { side: 'left' | 'right'; title: string; onClose: () => void; children: ReactNode }) {
  return (
    <>
      <div className="animate-fade-in absolute inset-0 z-30 bg-black/25 backdrop-blur-[2px]" onClick={onClose} />
      <aside
        role="dialog"
        aria-label={title}
        className={clsx('reader-sheet absolute inset-y-0 z-40 flex w-[min(92vw,380px)] flex-col', side === 'left' ? 'left-0 is-left' : 'right-0 is-right')}
      >
        <div className="flex h-14 shrink-0 items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
          <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">{title}</p>
          <button onClick={onClose} aria-label="Đóng" className="reader-btn">
            <XIcon width={18} height={18} />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-6">{children}</div>
      </aside>
    </>
  )
}

function Toc({ book, current, marks, onGo, onClose }: { book: ReaderBook; current: number; marks: Bookmark[]; onGo: (i: number, where?: number) => void; onClose: () => void }) {
  const [tab, setTab] = useState<'toc' | 'marks'>('toc')
  const { done } = useLibrary()
  const chapters = chaptersOf(book)
  const doneCount = chapters.filter((c) => done.includes(c.slug)).length
  const active = useRef<HTMLButtonElement>(null)
  useEffect(() => active.current?.scrollIntoView({ block: 'center' }), [])
  return (
    <Sheet side="left" title="Mục lục" onClose={onClose}>
      <div className="flex items-center gap-3 px-1 pb-4">
        <div className="w-16 shrink-0">
          <Cover book={book} size={0.3} className="rounded-[3px] shadow-[0_6px_14px_-6px_rgba(0,0,0,0.4)]" />
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-[15px] font-semibold text-[var(--color-ink)]">{book.title}{book.volume ? ` · ${book.volume}` : ''}</p>
          <p className="text-[12px] text-[var(--color-ink-muted)]">Đã học {doneCount}/{chapters.length} chương</p>
          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-[var(--color-surface-sunken)]">
            <span className="block h-full rounded-full bg-[var(--tint)]" style={{ width: `${(doneCount / Math.max(1, chapters.length)) * 100}%` }} />
          </div>
        </div>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-1 rounded-xl bg-[var(--color-surface-sunken)] p-1 text-[13px]">
        {(['toc', 'marks'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={clsx('rounded-lg py-1.5 transition-all', tab === t ? 'bg-[var(--color-surface-raised)] font-medium text-[var(--color-ink)] shadow-sm' : 'text-[var(--color-ink-muted)]')}>
            {t === 'toc' ? 'Chương' : `Dấu trang (${marks.length})`}
          </button>
        ))}
      </div>
      {tab === 'toc' ? (
        <ol className="space-y-0.5">
          {book.items.map((it, i) => {
            const on = i === current
            const isDone = it.kind === 'chapter' && done.includes(it.slug)
            return (
              <li key={it.key}>
                <button
                  ref={on ? active : undefined}
                  onClick={() => onGo(i)}
                  className={clsx(
                    'flex w-full items-baseline gap-2.5 rounded-xl px-3 py-2 text-left transition-colors',
                    on ? 'bg-[var(--tint-soft)]' : 'hover:bg-[var(--color-surface-sunken)]',
                    it.kind === 'part' && 'mt-3',
                  )}
                >
                  {it.kind === 'part' ? (
                    <span className="min-w-0">
                      <span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--tint)]">{it.label.split(' · ')[0]}</span>
                      <span className="block font-display text-[15px] font-semibold leading-snug text-[var(--color-ink)]">{it.title}</span>
                    </span>
                  ) : (
                    <>
                      <span className="w-6 shrink-0 text-right font-display text-[13px] tabular-nums text-[var(--color-ink-faint)]">{it.kind === 'chapter' ? it.n : ''}</span>
                      <span className={clsx('min-w-0 flex-1 text-[13.5px] leading-snug', on ? 'font-semibold text-[var(--color-ink)]' : 'text-[var(--color-ink-muted)]')}>{it.title}</span>
                      {isDone && <CheckIcon width={13} height={13} strokeWidth={3} className="shrink-0 text-[var(--color-status-completed)]" />}
                    </>
                  )}
                </button>
              </li>
            )
          })}
        </ol>
      ) : marks.length ? (
        <ul className="space-y-1.5">
          {marks.map((m) => {
            const i = book.items.findIndex((x) => x.key === m.key)
            return (
              <li key={m.at} className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] pl-3">
                <button onClick={() => onGo(i, m.ratio)} className="min-w-0 flex-1 py-2.5 text-left">
                  <span className="block truncate text-[13.5px] font-medium text-[var(--color-ink)]">{m.label}</span>
                  <span className="block text-[11.5px] text-[var(--color-ink-faint)]">
                    {Math.round(m.ratio * 100)}% chương · {new Date(m.at).toLocaleDateString('vi-VN')}
                  </span>
                </button>
                <button onClick={() => removeBookmark(book.id, m)} aria-label="Xoá dấu trang" className="reader-btn">
                  <XIcon width={15} height={15} />
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="px-3 py-6 text-center text-[13px] text-[var(--color-ink-muted)]">Chưa có dấu trang. Bấm biểu tượng dấu trang trên thanh công cụ để đánh dấu trang đang đọc.</p>
      )}
    </Sheet>
  )
}

const THEMES: [ReaderPrefs['theme'], string, string, string][] = [
  ['paper', 'Giấy', '#fbf8f1', '#2a251d'],
  ['sepia', 'Sepia', '#f1e5c9', '#4a3a25'],
  ['night', 'Đêm', '#16161a', '#d9d3c7'],
  ['app', 'Theo app', 'var(--color-surface-raised)', 'var(--color-ink)'],
]

function Seg<T extends string | number | boolean>({ value, options, onChange }: { value: T; options: [T, string][]; onChange: (v: T) => void }) {
  return (
    <div className="grid gap-1 rounded-xl bg-[var(--color-surface-sunken)] p-1" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
      {options.map(([v, label]) => (
        <button key={String(v)} onClick={() => onChange(v)} className={clsx('rounded-lg py-1.5 text-[13px] transition-all', value === v ? 'bg-[var(--color-surface-raised)] font-medium text-[var(--color-ink)] shadow-sm' : 'text-[var(--color-ink-muted)]')}>
          {label}
        </button>
      ))}
    </div>
  )
}

function Settings({ book, prefs, onClose }: { book: ReaderBook; prefs: ReaderPrefs; onClose: () => void }) {
  const label = 'mb-2 mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]'
  return (
    <Sheet side="right" title="Hiển thị" onClose={onClose}>
      <div className="px-1">
        <p className={label}>Giao diện trang</p>
        <div className="grid grid-cols-4 gap-2">
          {THEMES.map(([id, name, bg, ink]) => (
            <button key={id} onClick={() => setPrefs({ theme: id })} className="group flex flex-col items-center gap-1.5">
              <span
                className={clsx('flex h-14 w-full items-center justify-center rounded-xl border font-serif text-[18px] transition-all', prefs.theme === id ? 'border-[var(--tint)] ring-2 ring-[var(--tint)]/40' : 'border-[var(--color-border)]')}
                style={{ background: bg, color: ink }}
              >
                Aa
              </span>
              <span className={clsx('text-[12px]', prefs.theme === id ? 'font-medium text-[var(--color-ink)]' : 'text-[var(--color-ink-muted)]')}>{name}</span>
            </button>
          ))}
        </div>

        <p className={label}>Cỡ chữ · {prefs.size}px</p>
        <div className="flex items-center gap-2">
          <button onClick={() => setPrefs({ size: Math.max(14, prefs.size - 1) })} className="reader-chip">A−</button>
          <input type="range" min={14} max={26} value={prefs.size} onChange={(e) => setPrefs({ size: Number(e.target.value) })} className="reader-range flex-1" style={{ '--fill': `${((prefs.size - 14) / 12) * 100}%` } as CSSProperties} aria-label="Cỡ chữ" />
          <button onClick={() => setPrefs({ size: Math.min(26, prefs.size + 1) })} className="reader-chip text-[16px]">A+</button>
        </div>

        <p className={label}>Phông chữ</p>
        <Seg value={prefs.font} onChange={(font) => setPrefs({ font })} options={[['serif', 'Literata'], ['sans', 'Inter'], ['classic', 'Playfair']]} />

        <p className={label}>Giãn dòng</p>
        <Seg value={prefs.leading} onChange={(leading) => setPrefs({ leading })} options={[[1.5, 'Gọn'], [1.7, 'Vừa'], [1.9, 'Thoáng']]} />

        <p className={label}>Lề trang</p>
        <Seg value={prefs.margin} onChange={(margin) => setPrefs({ margin })} options={[['narrow', 'Hẹp'], ['normal', 'Vừa'], ['wide', 'Rộng']]} />

        <p className={label}>Bố cục</p>
        <Seg value={prefs.spread} onChange={(spread) => setPrefs({ spread })} options={[[true, 'Hai trang (màn rộng)'], [false, 'Một trang']]} />

        <p className={label}>Căn lề chữ</p>
        <Seg value={prefs.justify} onChange={(justify) => setPrefs({ justify })} options={[[true, 'Đều hai bên'], [false, 'Trái']]} />

        <p className={label}>Hiệu ứng lật trang</p>
        <Seg value={prefs.turn} onChange={(turn) => setPrefs({ turn })} options={[['slide', 'Trượt'], ['fade', 'Mờ dần'], ['none', 'Tắt']]} />

        <p className="mt-5 rounded-xl border border-[var(--color-border)] px-3 py-3 text-[var(--color-prose)]" style={{ fontFamily: FONTS[prefs.font], fontSize: Math.min(prefs.size, 19), lineHeight: prefs.leading }}>
          Âm nhạc là nghệ thuật của âm thanh trong thời gian.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link to={`/curriculum/${book.id}/in`} className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[var(--color-border)] text-[13px] font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]">
            <DownloadIcon width={15} height={15} /> Xuất PDF
          </Link>
          {book.kind === 'course' ? (
            <Link to={`/curriculum/${book.id}/tong-quan`} className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[var(--color-border)] text-[13px] font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]">
              <GraduationIcon width={15} height={15} /> Tổng quan
            </Link>
          ) : (
            <Link to="/curriculum" className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[var(--color-border)] text-[13px] font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]">
              <ArrowLeftIcon width={15} height={15} /> Giá sách
            </Link>
          )}
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-[var(--color-ink-faint)]">
          Lật trang: vuốt ngang, chạm mép trái – phải, phím ← →, lăn chuột. Chạm giữa trang để ẩn – hiện thanh công cụ.
        </p>
      </div>
    </Sheet>
  )
}

/** Plain text of an item for searching: title plus its body (markup stripped roughly). */
function textOf(it: ReaderItem) {
  if (it.kind === 'chapter') {
    const a = findArticle(it.slug)!
    return `${a.title}\n${a.summary}\n${a.body}`
  }
  if (it.kind === 'front') return `${it.title}\n${it.body}`
  if (it.kind === 'part') return `${it.title}\n${it.intro}\n${it.body ?? ''}`
  return it.title
}
const plain = (s: string) => s.replace(/^\s*::.*$/gm, '').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, (_, k: string) => findArticle(k)?.title ?? k).replace(/[*#|]/g, ' ').replace(/\s+/g, ' ')

function Search({ book, onGo, onClose }: { book: ReaderBook; onGo: (i: number, q: string) => void; onClose: () => void }) {
  const [q, setQ] = useState('')
  const index = useMemo(() => book.items.map((it) => { const t = plain(textOf(it)); return { t, n: normalize(t) } }), [book])
  const nq = normalize(q)
  const results = nq.length < 2 ? [] : book.items.flatMap((it, i) => {
    const at = index[i].n.indexOf(nq)
    if (at < 0) return []
    const count = index[i].n.split(nq).length - 1
    const t = index[i].t
    return [{ i, it, count, snippet: `${at > 40 ? '…' : ''}${t.slice(Math.max(0, at - 40), at + nq.length + 70)}…` }]
  })
  return (
    <Sheet side="right" title="Tìm trong sách" onClose={onClose}>
      <div className="sticky top-0 z-10 bg-[var(--reader-sheet)] px-1 pb-3">
        <label className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 focus-within:border-[var(--tint)]">
          <SearchIcon width={16} height={16} className="text-[var(--color-ink-faint)]" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Từ, thuật ngữ, tên…" className="h-10 min-w-0 flex-1 bg-transparent text-[14px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-faint)]" />
        </label>
        {nq.length >= 2 && <p className="mt-2 px-1 text-[12px] text-[var(--color-ink-faint)]">{results.length ? `${results.length} chương có kết quả` : 'Không tìm thấy'}</p>}
      </div>
      <ul className="space-y-1.5 px-1">
        {results.map(({ i, it, count, snippet }) => (
          <li key={it.key}>
            <button onClick={() => onGo(i, q)} className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-2.5 text-left transition-colors hover:border-[var(--tint)]">
              <span className="flex items-baseline justify-between gap-2">
                <span className="truncate text-[13.5px] font-medium text-[var(--color-ink)]">{it.kind === 'chapter' ? `${it.n}. ` : ''}{it.title}</span>
                <span className="shrink-0 text-[11px] text-[var(--color-ink-faint)]">{count}×</span>
              </span>
              <span className="mt-0.5 line-clamp-2 block text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{snippet}</span>
            </button>
          </li>
        ))}
      </ul>
    </Sheet>
  )
}
