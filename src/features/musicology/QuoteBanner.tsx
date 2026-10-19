import { useEffect, useMemo, useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/icons'
import type { Quote } from './quotes/types'
import { leadImage } from '../theory/wikiImage'

/** How long each quotation stays before the next one. */
const SHOW_MS = 12_000
const TICK = 100

const shuffled = <T,>(xs: T[]): T[] => {
  const out = xs.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** English Wikipedia page for an author whose name we write the Vietnamese way, or whose plain name is ambiguous. */
const WIKI_TITLE: Record<string, string[]> = {
  'Khổng Tử': ['Confucius'],
  'Lão Tử': ['Laozi'],
  'Mạnh Tử': ['Mencius'],
  'Thánh Augustinô': ['Augustine of Hippo'],
  'Lev Tolstoy': ['Leo Tolstoy'],
  'John Williams': ['John Williams (composer)', 'John Williams'],
  'Bill Evans': ['Bill Evans'],
  'Phú Quang': ['Phú Quang (musician)', 'Phú Quang (composer)'],
  'Giáo hoàng Biển Đức XVI': ['Pope Benedict XVI'],
  'Giáo hoàng Piô X': ['Pope Pius X'],
  'Công đồng Vatican II': ['Second Vatican Council'],
  'Hội đồng giáo hội Arnstadt': ['Bachkirche Arnstadt', 'Arnstadt'],
}
const titlesFor = (author: string) => WIKI_TITLE[author] ?? [author]

/** The author's portrait (Wikipedia's freely licensed lead image), faded into the banner's background. */
function Portrait({ author }: { author: string }) {
  const [img, setImg] = useState<{ author: string; src: string } | null>(null)
  const [loaded, setLoaded] = useState<string | null>(null)
  useEffect(() => {
    let live = true
    leadImage(titlesFor(author))
      .then((found) => live && setImg(found ? { author, src: found.src } : null))
      .catch(() => live && setImg(null))
    return () => {
      live = false
    }
  }, [author])
  if (!img || img.author !== author) return null
  return (
    <img
      key={img.src}
      src={img.src}
      alt=""
      aria-hidden
      onLoad={() => setLoaded(img.src)}
      className={clsx('quote-portrait', loaded === img.src && 'is-loaded')}
    />
  )
}

/**
 * A slim banner of sayings about music by great musicians and thinkers. A new one every 12 seconds; the words of each
 * quotation rise in one after another, and the original wording sits underneath when the quote was translated.
 */
const loadMusicologyQuotes = () => import('./quotes').then((m) => m.QUOTES)

/** `load` picks the set of sayings (a stable, module-level loader); the musicology set by default. */
export function QuoteBanner({ load = loadMusicologyQuotes }: { load?: () => Promise<Quote[]> }) {
  const [quotes, setQuotes] = useState<Quote[] | null>(null)
  useEffect(() => {
    let live = true
    load().then((qs) => live && setQuotes(shuffled(qs)))
    return () => {
      live = false
    }
  }, [load])
  if (!quotes?.length) return <div aria-hidden className="h-[200px] rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-raised)] sm:h-[168px]" />
  return <Banner quotes={quotes} />
}

function Banner({ quotes }: { quotes: Quote[] }) {
  const [{ index, elapsed }, setTurn] = useState({ index: 0, elapsed: 0 })
  const [paused, setPaused] = useState(false)
  const quote = quotes[((index % quotes.length) + quotes.length) % quotes.length]
  const go = (step: number) => setTurn((t) => ({ index: t.index + step, elapsed: 0 }))

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      if (document.visibilityState !== 'visible') return
      setTurn((t) => (t.elapsed + TICK >= SHOW_MS ? { index: t.index + 1, elapsed: 0 } : { ...t, elapsed: t.elapsed + TICK }))
    }, TICK)
    return () => clearInterval(timer)
  }, [paused])

  const words = useMemo(() => quote.vi.split(/\s+/), [quote])
  const long = quote.vi.length > 150
  const translated = quote.orig && quote.orig.trim() !== quote.vi.trim()

  return (
    <figure
      aria-roledescription="trích dẫn"
      className="quote-banner relative isolate flex min-h-[200px] flex-col justify-center overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-5 pb-5 pt-5 shadow-[0_1px_0_rgba(0,0,0,0.02),0_22px_44px_-34px_rgba(40,30,15,0.45)] sm:min-h-[168px] sm:px-8 sm:pb-6 sm:pt-6"
    >
      <Portrait author={quote.author} />
      {/* Large gold quotation mark and a soft wash behind it */}
      <span aria-hidden className="pointer-events-none absolute -left-2 -top-10 -z-10 select-none font-display text-[180px] leading-none text-[color-mix(in_oklch,var(--color-gold)_16%,transparent)] sm:-top-12 sm:left-2 sm:text-[220px]">
        “
      </span>
      <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--color-gold)_14%,transparent),transparent)]" />

      <div className="flex items-start gap-4">
        <div key={index} className="min-w-0 flex-1" aria-live="polite">
          <blockquote
            className={clsx(
              'font-display italic leading-snug text-[var(--color-ink)]',
              long ? 'text-[16.5px] sm:text-[19px]' : 'text-[19px] sm:text-[23px]',
            )}
          >
            {words.map((w, i) => (
              <span key={i} className="quote-word" style={{ animationDelay: `${Math.min(i * 38, 1400)}ms` }}>
                {w}{' '}
              </span>
            ))}
          </blockquote>
          {translated && (
            <p className="quote-fade mt-2 line-clamp-2 text-[12.5px] italic leading-relaxed text-[var(--color-ink-faint)]" style={{ animationDelay: '700ms' }} lang="mul">
              {quote.orig}
            </p>
          )}
          <figcaption className="quote-fade mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5" style={{ animationDelay: '500ms' }}>
            <span className="h-px w-6 translate-y-[-4px] bg-[var(--color-gold)]" aria-hidden />
            <span className="text-[13.5px] font-semibold tracking-wide text-[var(--color-ink)]">{quote.author}</span>
            <span className="text-[12.5px] text-[var(--color-ink-muted)]">{quote.role}</span>
            {quote.src && <span className="w-full text-[11.5px] text-[var(--color-ink-faint)] sm:w-auto sm:before:mr-2 sm:before:content-['·']">{quote.src}</span>}
          </figcaption>
        </div>

        <div className="hidden shrink-0 flex-col items-center gap-1 sm:flex">
          <Control label="Câu trước" onClick={() => go(-1)}>
            <ChevronLeftIcon width={15} height={15} />
          </Control>
          <Control label={paused ? 'Tiếp tục' : 'Tạm dừng'} onClick={() => setPaused((p) => !p)}>
            <PlayPause paused={paused} />
          </Control>
          <Control label="Câu sau" onClick={() => go(1)}>
            <ChevronRightIcon width={15} height={15} />
          </Control>
        </div>
      </div>

      {/* Mobile controls */}
      <div className="mt-3 flex items-center justify-end gap-1 sm:hidden">
        <Control label="Câu trước" onClick={() => go(-1)}>
          <ChevronLeftIcon width={15} height={15} />
        </Control>
        <Control label={paused ? 'Tiếp tục' : 'Tạm dừng'} onClick={() => setPaused((p) => !p)}>
          <PlayPause paused={paused} />
        </Control>
        <Control label="Câu sau" onClick={() => go(1)}>
          <ChevronRightIcon width={15} height={15} />
        </Control>
      </div>

      <span aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--color-surface-sunken)]">
        <span className="block h-full origin-left bg-gradient-to-r from-[var(--color-gold)] to-[#c9773f] transition-transform duration-100 ease-linear" style={{ transform: `scaleX(${elapsed / SHOW_MS})` }} />
      </span>
    </figure>
  )
}

function Control({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]"
    >
      {children}
    </button>
  )
}

const PlayPause = ({ paused }: { paused: boolean }) =>
  paused ? (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
    </svg>
  ) : (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="6" y="4.5" width="4" height="15" rx="1.2" />
      <rect x="14" y="4.5" width="4" height="15" rx="1.2" />
    </svg>
  )
