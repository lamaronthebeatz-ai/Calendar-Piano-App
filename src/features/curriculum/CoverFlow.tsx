import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/icons'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { openBook } from './bookOpen'
import { Cover } from './reader/Cover'
import type { ReaderBook } from './reader/model'

const KEY = 'coverflow-index'

/**
 * iPod-style Cover Flow: the centred cover faces the reader, the others turn away on either side.
 * Position is a float driven by a spring and written straight to the DOM, so dragging never re-renders React.
 */
export function CoverFlow({ books }: { books: ReaderBook[] }) {
  const navigate = useNavigate()
  const stage = useRef<HTMLDivElement>(null)
  const cards = useRef<(HTMLButtonElement | null)[]>([])
  const start = Math.min(books.length - 1, Math.max(0, Number(sessionStorage.getItem(KEY)) || 0))
  const pos = useRef(start)
  const vel = useRef(0)
  const target = useRef(start)
  const raf = useRef(0)
  const drag = useRef<{ x: number; p: number; t: number; lastX: number; moved: boolean } | null>(null)
  const [center, setCenter] = useState(start)
  // Cover typography is in em; the small phone covers need it scaled down with them.
  const wide = useMediaQuery('(min-width: 640px)')
  // A drag ends with a click on whatever is under the finger; this swallows it.
  const dragged = useRef(false)

  const spacing = () => (stage.current?.clientWidth ?? 800) < 640 ? 64 : 110

  const layout = () => {
    const p = pos.current
    const mobile = (stage.current?.clientWidth ?? 800) < 640
    const gap0 = mobile ? 118 : 190
    const gap = spacing()
    cards.current.forEach((el, i) => {
      if (!el) return
      const d = i - p
      const a = Math.abs(d)
      const near = Math.min(1, a)
      const x = a < 1 ? d * gap0 : Math.sign(d) * (gap0 + (a - 1) * gap)
      el.style.transform = `translate3d(-50%, 0, 0) translateX(${x}px) translateZ(${(1 - near) * 140 - near * 60}px) rotateY(${-Math.max(-1, Math.min(1, d)) * 62}deg)`
      el.style.zIndex = String(1000 - Math.round(a * 10))
      el.style.opacity = a > 6 ? '0' : '1'
      el.style.filter = `brightness(${1 - Math.min(0.45, near * 0.3 + a * 0.04)})`
    })
    const c = Math.round(Math.max(0, Math.min(books.length - 1, p)))
    setCenter((old) => (old === c ? old : c))
  }

  // Critically damped-ish spring towards the target cover.
  const animate = () => {
    cancelAnimationFrame(raf.current)
    const step = () => {
      const f = (target.current - pos.current) * 0.16
      vel.current = (vel.current + f) * 0.62
      pos.current += vel.current
      if (Math.abs(target.current - pos.current) < 0.001 && Math.abs(vel.current) < 0.001) {
        pos.current = target.current
        layout()
        return
      }
      layout()
      raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
  }

  const goTo = (i: number) => {
    target.current = Math.max(0, Math.min(books.length - 1, i))
    try {
      sessionStorage.setItem(KEY, String(target.current))
    } catch {
      /* position memory is optional */
    }
    animate()
  }

  useLayoutEffect(() => {
    layout()
    const ro = new ResizeObserver(layout)
    if (stage.current) ro.observe(stage.current)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf.current)
    }
    // layout only reads refs and the stable book count.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Horizontal wheel / trackpad swipes step through covers.
  useEffect(() => {
    const el = stage.current
    if (!el) return
    let acc = 0
    let timer = 0
    const onWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0
      if (!dx) return
      e.preventDefault()
      acc += dx
      clearTimeout(timer)
      timer = window.setTimeout(() => (acc = 0), 180)
      if (Math.abs(acc) > 60) {
        goTo(target.current + Math.sign(acc))
        acc = 0
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return
    cancelAnimationFrame(raf.current)
    drag.current = { x: e.clientX, p: pos.current, t: performance.now(), lastX: e.clientX, moved: false }
  }
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true
      stage.current?.setPointerCapture(e.pointerId)
    }
    if (!d.moved) return
    const now = performance.now()
    vel.current = -((e.clientX - d.lastX) / spacing()) / Math.max(1, (now - d.t) / 16)
    d.t = now
    d.lastX = e.clientX
    // Rubber-band past either end.
    let p = d.p - dx / spacing()
    if (p < 0) p = p / 3
    if (p > books.length - 1) p = books.length - 1 + (p - books.length + 1) / 3
    pos.current = p
    layout()
  }
  const onUp = () => {
    const d = drag.current
    drag.current = null
    if (!d?.moved) return
    dragged.current = true
    setTimeout(() => (dragged.current = false), 0)
    goTo(Math.round(pos.current + vel.current * 6))
  }

  const book = books[center]
  return (
    <section aria-label="Lướt tủ sách" className="coverflow -mx-4 select-none lg:-mx-8">
      <div
        ref={stage}
        className="coverflow-stage relative h-[300px] touch-pan-y outline-none sm:h-[400px]"
        tabIndex={0}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') goTo(target.current - 1)
          else if (e.key === 'ArrowRight') goTo(target.current + 1)
          else if (e.key === 'Enter') {
            const el = cards.current[target.current]
            if (el) openBook(books[target.current], el, `/curriculum/${books[target.current].id}`, navigate)
          }
          else return
          e.preventDefault()
        }}
      >
        {books.map((b, i) => (
          <button
            key={b.id}
            ref={(el) => {
              cards.current[i] = el
            }}
            tabIndex={-1}
            aria-label={`${b.title} ${b.volume ?? ''}`}
            className="coverflow-card absolute left-1/2 top-6 w-[150px] sm:top-8 sm:w-[230px]"
            onClick={(e) => {
              if (dragged.current) return e.preventDefault()
              if (i === target.current) openBook(b, e.currentTarget.firstElementChild ?? e.currentTarget, `/curriculum/${b.id}`, navigate)
              else goTo(i)
            }}
          >
            <Cover book={b} size={wide ? 1 : 0.66} className="rounded-[4px]" />
          </button>
        ))}
        <button aria-label="Sách trước" onClick={() => goTo(target.current - 1)} className="coverflow-arrow left-3 sm:left-8">
          <ChevronLeftIcon width={20} height={20} />
        </button>
        <button aria-label="Sách sau" onClick={() => goTo(target.current + 1)} className="coverflow-arrow right-3 sm:right-8">
          <ChevronRightIcon width={20} height={20} />
        </button>
      </div>

      <div className="relative z-10 -mt-2 px-4 text-center">
        <div key={book.id} className="coverflow-caption">
          <p className="font-display text-[19px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[22px]">{book.title}</p>
          <p className="mt-0.5 text-[13px] text-[var(--color-ink-muted)]">{book.volume || book.audience}</p>
        </div>
        <div className="mt-3 flex justify-center gap-1.5" role="tablist" aria-label="Chọn sách">
          {books.map((b, i) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={i === center}
              aria-label={b.title}
              onClick={() => goTo(i)}
              className={i === center ? 'coverflow-dot is-active' : 'coverflow-dot'}
            />
          ))}
        </div>
        <p className="mt-2 text-[11.5px] text-[var(--color-ink-faint)]">Vuốt để lướt · chạm bìa giữa để mở</p>
      </div>
    </section>
  )
}
