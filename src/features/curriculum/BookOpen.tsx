import { useEffect, useRef, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { Cover } from './reader/Cover'
import { COVERFLOW_KEY, listeners, peek, set, type Opening } from './bookOpen'
import { READER_BOOKS } from './reader/model'
import './motion-books.css'

/**
 * "Open the book" transition: the clicked cover flies to the centre, its front board swings open on the spine
 * to show the first page, and the page grows into the reader. The reader is navigated to behind the page.
 * Closing plays it backwards: the reader shrinks to the first page, the board swings shut and the book flies
 * home to its cover in the Cover Flow (or just settles away in the middle if that cover isn't on screen).
 */
export function BookOpenLayer() {
  const o = useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    peek,
  )
  return o ? createPortal(<Animation key={o.mode + o.book.id + o.to} o={o} />, document.body) : null
}

function Animation({ o }: { o: Opening }) {
  const navigate = useNavigate()
  const root = useRef<HTMLDivElement>(null)
  const book = useRef<HTMLDivElement>(null)
  const board = useRef<HTMLDivElement>(null)
  const page = useRef<HTMLDivElement>(null)
  const shade = useRef<HTMLDivElement>(null)
  const backdrop = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const vw = innerWidth
    const vh = innerHeight
    const size = Math.min(vw * 0.42, vh * 0.62, 460)
    // Centre of the open spread is the spine, so the closed book starts half a width to the right of centre.
    const left = vw / 2
    const top = (vh - size) / 2
    const el = book.current!
    Object.assign(el.style, { left: `${left}px`, top: `${top}px`, width: `${size}px`, height: `${size}px` })
    const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'
    const grown = `scale(${(Math.max(vw, vh) / size) * 1.6})`
    let alive = true

    const close = async () => {
      const id = o.book.id
      const fill = 'forwards' as const
      el.style.transform = 'translate(0, 0)'
      board.current!.style.transform = 'rotateY(-178deg)'
      shade.current!.style.opacity = '0.35'
      // Grown from its own centre, the page covers the whole screen as the reader fades into it.
      page.current!.style.transformOrigin = '50% 50%'
      page.current!.style.transform = grown
      // 1. The reader gives way to the first page, which shrinks back into the open book.
      await root.current!.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: 'ease-out', fill }).finished
      if (!alive) return
      await page.current!.animate([{ transform: grown }, { transform: 'scale(1)' }], { duration: 560, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill }).finished
      if (!alive) return
      // The shelf opens on this book, so its cover is the one facing us when the book lands.
      try {
        const i = READER_BOOKS.findIndex((b) => b.id === id)
        if (i >= 0) sessionStorage.setItem(COVERFLOW_KEY, String(i))
      } catch {
        /* optional */
      }
      navigate(o.to)
      // 2. The board swings shut while the book slides back to its closed spot.
      shade.current!.animate([{ opacity: 0.35 }, { opacity: 0 }], { duration: 760, easing: 'ease-out', fill })
      el.animate([{ transform: 'translate(0, 0)' }, { transform: `translate(-${size / 2}px, 0)` }], { duration: 760, easing: ease, fill })
      await board.current!.animate([{ transform: 'rotateY(-178deg)' }, { transform: 'rotateY(0deg)' }], { duration: 760, easing: 'cubic-bezier(0.45, 0.05, 0.25, 1)', fill }).finished
      if (!alive) return
      // 3. Home to the cover on the shelf.
      const target = document.querySelector<HTMLElement>(`.coverflow-card[data-book-id="${id}"] > *`)
      const r = target?.getBoundingClientRect()
      const seen = r && r.width > 0 && r.bottom > 0 && r.top < vh
      backdrop.current!.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 620, easing: 'ease-in-out', fill })
      if (target && r && seen) {
        target.style.visibility = 'hidden'
        try {
          await el.animate(
            [
              { transform: `translate(-${size / 2}px, 0) scale(1)` },
              { transform: `translate(${r.left - left}px, ${r.top - top}px) scale(${r.width / size})` },
            ],
            { duration: 640, easing: ease, fill },
          ).finished
        } finally {
          target.style.visibility = ''
        }
      } else {
        await el.animate(
          [
            { transform: `translate(-${size / 2}px, 0) scale(1)`, opacity: 1 },
            { transform: `translate(-${size * 0.3}px, ${size * 0.1}px) scale(0.6)`, opacity: 0 },
          ],
          { duration: 560, easing: ease, fill },
        ).finished
      }
      set(null)
    }

    const run = async () => {
      if (o.mode !== 'open') return
      const dx = o.from.left - left
      const dy = o.from.top - top
      const s = o.from.width / size
      root.current!.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 380, fill: 'forwards', easing: 'ease-out' })
      // 1. Fly the closed book from the shelf to the middle, starting where the closed spread would sit.
      await el.animate(
        [
          { transform: `translate(${dx}px, ${dy}px) scale(${s})` },
          { transform: `translate(-${size / 2}px, 0) scale(1)` },
        ],
        { duration: 560, easing: ease, fill: 'forwards' },
      ).finished
      if (!alive) return
      // 2. Slide to make room and swing the front board open on its spine.
      shade.current!.animate([{ opacity: 0 }, { opacity: 0.35 }], { duration: 820, easing: 'ease-in', fill: 'forwards' })
      el.animate([{ transform: `translate(-${size / 2}px, 0)` }, { transform: 'translate(0, 0)' }], { duration: 820, easing: ease, fill: 'forwards' })
      await board.current!.animate(
        [
          { transform: 'rotateY(0deg)' },
          { transform: 'rotateY(-178deg)' },
        ],
        { duration: 820, easing: 'cubic-bezier(0.45, 0.05, 0.25, 1)', fill: 'forwards' },
      ).finished
      if (!alive) return
      navigate(o.to)
      // 3. The first page grows to fill the screen while everything fades into the reader.
      page.current!.animate([{ transform: 'scale(1)' }, { transform: grown }], { duration: 520, easing: 'cubic-bezier(0.7, 0, 0.84, 0)', fill: 'forwards' })
      await root.current!.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 520, delay: 160, easing: 'ease-in', fill: 'forwards' }).finished
      set(null)
    }
    ;(o.mode === 'close' ? close() : run()).catch(() => {
      if (o.mode === 'close') navigate(o.to)
      set(null)
    })
    return () => {
      alive = false
    }
  }, [o, navigate])

  return (
    <div ref={root} className="book-open fixed inset-0 z-[80]" style={{ opacity: 0 }} aria-hidden>
      <div ref={backdrop} className="book-open-backdrop absolute inset-0" />
      <div ref={book} className="book-open-book absolute">
        {/* The inside: a first page with the title, under the front board. */}
        <div ref={page} className="book-open-page absolute inset-0 flex flex-col items-center justify-center rounded-r-[4px] px-[10%] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">{o.book.author}</p>
          <p className="mt-3 font-display text-[clamp(18px,3vw,30px)] font-semibold leading-tight text-[#2a241c]">{o.book.title}</p>
          {o.book.volume && <p className="mt-1 font-display italic text-[#6b6052]">{o.book.volume}</p>}
          <span className="mt-5 h-px w-12 bg-[var(--color-gold)]" />
        </div>
        <div ref={board} className="book-open-board absolute inset-0">
          <div className="book-open-front absolute inset-0">
            <Cover book={o.book} size={Math.min(innerWidth * 0.42, innerHeight * 0.62, 460) / 230} className="h-full w-full rounded-[4px]" />
            <div ref={shade} className="absolute inset-0 rounded-[4px] bg-black opacity-0" />
          </div>
          <div className="book-open-inside absolute inset-0 rounded-l-[4px]" />
        </div>
      </div>
    </div>
  )
}
