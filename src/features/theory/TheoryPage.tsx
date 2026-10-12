import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from 'react'
import { Link, useNavigate, useNavigationType, useParams, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  BookIcon,
  BookmarkIcon,
  BranchesIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CompassIcon,
  LinkIcon,
  ListIcon,
  SearchIcon,
  ShuffleIcon,
  TypeIcon,
  XIcon,
} from '../../components/icons'
import { EmptyState } from '../../components/EmptyState'
import { ARTICLES, CATEGORIES } from './articles'
import { Markup, WikiImage } from './Markup'
import { articlesByCategory, findArticle, getBacklinks, headings, libraryStats, readingMinutes, searchArticles, type Article } from './wiki'
import { markRead, readingPosition, saveReadingPosition, toggleSaved, updateLibrary, useLibrary } from './library'
import { useScrollMemory } from '../../hooks/useScrollMemory'
import { useBack } from '../../hooks/useBack'
import { branchesOf } from '../musicology/taxonomy'
import { Copyright } from '../../components/Copyright'

type CategoryId = Article['category']

/** Each category's own colour, derived from its hue so it works in light and dark themes. */
const tint = (id: CategoryId) => ({ '--tint': `oklch(0.6 0.13 ${CATEGORIES[id].hue})` }) as CSSProperties

/** A musical glyph per category (rendered in Noto Music), the library's only iconography. */
const GLYPHS: Record<CategoryId, string> = {
  technique: '𝆑',
  instrument: '𝄆',
  musicianship: '♪',
  basics: '𝄞',
  rhythm: '♩',
  pitch: '𝄢',
  scales: '♯',
  harmony: '𝄋',
  chromatic: '♭',
  form: '𝄇',
  expression: '𝆒',
  jazz: '𝅘𝅥𝅮',
  improvisation: '𝄌',
  modern: '𝄫',
  listening: '𝄽',
  philosophy: '𝄐',
  analysis: '𝄡',
  pianists: '♫',
  composers: '𝅗𝅥',
  genres: '♬',
  musicology: '𝄪',
  organology: '𝄜',
  vietnam: '𝆕',
  sacred: '𝅜',
}

/** Where a newcomer should start: the roadmap article of the core groups. */
const PATHS = ['nhac-ly-co-ban', 'ky-thuat-piano', 'giao-trinh-hoa-am', 'lo-trinh-hinh-thuc', 'lo-trinh-luyen-tai-su-pham', 'hoa-am-jazz', 'phuong-phap-phan-tich-tac-pham', 'the-loai-am-nhac']
  .map((s) => findArticle(s))
  .filter((a): a is Article => !!a)

const SUGGESTIONS = ['Vòng quãng 5', 'ii – V – I', 'Hình thức sonata', 'Hợp âm 7', 'Chopin', 'Đảo phách']

export function TheoryPage() {
  const { slug } = useParams()
  const article = slug ? findArticle(slug) : undefined
  const navigation = useNavigationType()
  const scroller = useRef<HTMLDivElement>(null)
  const progress = useRef<HTMLDivElement>(null)
  const toTop = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLDivElement>(null)
  const sectionLabel = useRef<HTMLSpanElement>(null)
  const remaining = useRef<HTMLSpanElement>(null)
  const ratio = useRef(0)
  const active = useRef(-1)
  const sectionNodes = useRef<Element[]>([])
  const sections = useMemo(() => (article ? headings(article.body) : []), [article])
  const minutes = article ? readingMinutes(article) : 0
  // The section highlighted in the sheet, captured when it opens (null: closed).
  const [toc, setToc] = useState<number | null>(null)

  useScrollMemory(scroller)

  // "Continue reading": offered on a fresh visit to an article left part-way, never when coming back.
  const lastRatio = useMemo(() => (article ? readingPosition(article.slug) : 0), [article])
  const [dismissed, setDismissed] = useState<string>()
  const offerResume = !!article && navigation !== 'POP' && dismissed !== article.slug && lastRatio > 0.04 && lastRatio < 0.95
  useEffect(() => {
    if (!offerResume || !slug) return
    const t = setTimeout(() => setDismissed(slug), 12000)
    return () => clearTimeout(t)
  }, [offerResume, slug])
  const resume = () => {
    const el = scroller.current
    if (el) el.scrollTo({ top: lastRatio * (el.scrollHeight - el.clientHeight), behavior: 'smooth' })
    setDismissed(slug)
  }

  // Updated through refs rather than state so scrolling never re-renders the article.
  const onScroll = () => {
    const el = scroller.current!
    const r = el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight)
    ratio.current = r
    if (progress.current) progress.current.style.transform = `scaleX(${r})`
    toTop.current?.classList.toggle('is-visible', el.scrollTop > 600)
    header.current?.toggleAttribute('data-scrolled', el.scrollTop > 140)
    if (remaining.current) remaining.current.textContent = r > 0.98 ? 'Đã đọc hết' : `còn ${Math.max(1, Math.ceil(minutes * (1 - r)))} phút`
    if (sections.length) {
      if (!sectionNodes.current[0]?.isConnected) sectionNodes.current = [...el.querySelectorAll('[id^="sec-"]')]
      // The current section is the last heading above a line just under the sticky header.
      const line = el.getBoundingClientRect().top + 96
      let current = -1
      for (const [i, n] of sectionNodes.current.entries()) {
        if (n.getBoundingClientRect().top > line) break
        current = i
      }
      if (current !== active.current && sectionLabel.current) {
        active.current = current
        sectionLabel.current.textContent = current >= 0 ? sections[current] : ''
      }
    }
    if (offerResume && el.scrollTop > 400) setDismissed(slug)
  }
  const jump = (i: number) => scroller.current?.querySelector(`#sec-${i}`)?.scrollIntoView({ block: 'start' })
  const back = useBack(article ? `/theory?c=${article.category}` : '/theory')

  useEffect(() => {
    if (article) markRead(article.slug)
  }, [article])

  // Remember how far into the article the reader got, also when the app is closed mid-article.
  useEffect(() => {
    if (!article) return
    ratio.current = 0
    active.current = -1
    const save = () => ratio.current > 0.01 && saveReadingPosition(article.slug, ratio.current)
    const onHide = () => document.visibilityState === 'hidden' && save()
    document.addEventListener('visibilitychange', onHide)
    return () => {
      document.removeEventListener('visibilitychange', onHide)
      save()
    }
  }, [article])

  return (
    // Keyed by slug so following a link remounts the scroller at the top.
    <div key={slug} ref={scroller} onScroll={onScroll} className="relative h-full overflow-x-hidden overflow-y-auto scroll-smooth pb-28 lg:pb-10">
      <div ref={header} className="glass group/header sticky top-0 z-20 border-b border-[var(--color-border)]" style={article && tint(article.category)}>
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 lg:px-8">
          {slug && (
            <button
              onClick={back}
              aria-label="Quay lại"
              className="-ml-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)] active:scale-90"
            >
              <ArrowLeftIcon width={18} height={18} />
            </button>
          )}
          <div className="min-w-0 flex-1">
            {article ? (
              <>
                {/* Breadcrumb at the top of the page; the title takes its place once the heading scrolls away. */}
                <p className="truncate text-[12.5px] text-[var(--color-ink-muted)] transition-all duration-300 group-data-[scrolled]/header:h-0 group-data-[scrolled]/header:opacity-0">
                  <Link to="/theory" className="hover:text-[var(--color-ink)]">Lý thuyết</Link>
                  <span className="mx-1.5 text-[var(--color-ink-faint)]">/</span>
                  <Link to={`/theory?c=${article.category}`} className="font-medium text-[var(--tint)] hover:underline">{CATEGORIES[article.category].title}</Link>
                </p>
                <div className="h-0 translate-y-1 overflow-hidden opacity-0 transition-all duration-300 group-data-[scrolled]/header:h-auto group-data-[scrolled]/header:translate-y-0 group-data-[scrolled]/header:opacity-100">
                  <p className="truncate font-display text-[15.5px] font-semibold leading-tight text-[var(--color-ink)]">{article.title}</p>
                  {/* Where the reader is: the current section and the time left, written from the scroll handler. */}
                  <p className="mt-0.5 truncate text-[11.5px] leading-tight text-[var(--color-ink-faint)]">
                    <span ref={sectionLabel} className="font-medium text-[var(--tint)] after:mx-1.5 after:text-[var(--color-ink-faint)] after:content-['·'] empty:hidden" />
                    <span ref={remaining} />
                  </p>
                </div>
              </>
            ) : (
              <h1 className="truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)]">Lý thuyết âm nhạc</h1>
            )}
          </div>
          {article && <ArticleActions article={article} />}
        </div>
        {article && <div ref={progress} className="h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[var(--tint)] to-[var(--color-gold)] transition-transform duration-75" />}
      </div>

      {!slug ? (
        <Index />
      ) : article ? (
        <ArticleView article={article} scroller={scroller} sections={sections} onJump={jump} />
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-10">
          <EmptyState icon={<BookIcon width={30} height={30} />} title="Chưa có bài viết này" description={`“${slug}” chưa được viết.`} />
        </div>
      )}
      <Copyright className="px-4 pb-2 pt-8" />

      {offerResume && (
        <div className="above-nav pointer-events-none fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 lg:bottom-8">
          <div className="animate-slide-up glass pointer-events-auto flex items-center gap-1 rounded-full border border-[var(--color-border)] p-1 shadow-[var(--shadow-float)]">
            <button onClick={resume} className="flex items-center gap-2 rounded-full bg-[var(--color-ink)] py-2 pl-3 pr-3.5 text-[13px] font-medium text-[var(--color-surface)] transition-transform active:scale-95">
              <ChevronDownIcon width={15} height={15} />
              Đọc tiếp chỗ đang dừng
              <span className="tabular-nums opacity-60">{Math.round(lastRatio * 100)}%</span>
            </button>
            <button onClick={() => setDismissed(slug)} aria-label="Bỏ qua" className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)]">
              <XIcon width={15} height={15} />
            </button>
          </div>
        </div>
      )}

      <div ref={toTop} className="above-nav theory-to-top fixed bottom-24 right-4 z-20 flex flex-col gap-2 lg:bottom-8 lg:right-8">
        {sections.length > 1 && (
          <button
            onClick={() => setToc(active.current)}
            aria-label="Mục lục bài"
            className="glass flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] shadow-[var(--shadow-float)] transition-transform active:scale-90 xl:hidden"
          >
            <ListIcon width={18} height={18} />
          </button>
        )}
        <button
          onClick={() => scroller.current?.scrollTo({ top: 0 })}
          aria-label="Về đầu trang"
          className="glass flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] shadow-[var(--shadow-float)] transition-transform active:scale-90"
        >
          <ChevronLeftIcon width={20} height={20} className="rotate-90" />
        </button>
      </div>

      {toc !== null && article && (
        <TocSheet
          sections={sections}
          active={toc}
          tint={tint(article.category)}
          onClose={() => setToc(null)}
          onJump={(i) => {
            setToc(null)
            jump(i)
          }}
        />
      )}
    </div>
  )
}

/** Bottom sheet with the article's sections, for phones and tablets (desktop has the sticky sidebar). */
function TocSheet({ sections, active, tint: style, onClose, onJump }: { sections: string[]; active: number; tint: CSSProperties; onClose: () => void; onJump: (i: number) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" style={style}>
      <div className="animate-fade-in absolute inset-0 bg-black/35 backdrop-blur-[2px]" onClick={onClose} />
      <nav aria-label="Mục lục bài" className="animate-sheet-up relative max-h-[72dvh] w-full max-w-lg overflow-y-auto rounded-t-[28px] border border-b-0 border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 shadow-[var(--shadow-float)]">
        <div className="mx-auto mb-3 mt-1 h-1 w-10 rounded-full bg-[var(--color-border-strong)]" />
        <p className="mb-2 flex items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
          <ListIcon width={13} height={13} /> Trong bài này · {sections.length} mục
        </p>
        <ol>
          {sections.map((title, i) => (
            <li key={title + i}>
              <button
                onClick={() => onJump(i)}
                className={clsx(
                  'flex w-full items-baseline gap-3 rounded-xl px-3 py-2.5 text-left text-[14.5px] leading-snug transition-colors active:bg-[var(--color-surface-sunken)]',
                  i === active ? 'bg-[color-mix(in_oklch,var(--tint)_12%,transparent)] font-semibold text-[var(--color-ink)]' : 'text-[var(--color-ink-muted)]',
                )}
              >
                <span className={clsx('w-5 shrink-0 text-right text-[12px] tabular-nums', i === active ? 'text-[var(--tint)]' : 'text-[var(--color-ink-faint)]')}>{i + 1}</span>
                {title}
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

/* ------------------------------------------------------------------ index */

function Index() {
  const [params, setParams] = useSearchParams()
  // The search is mirrored into the URL (?q=) so coming back from an article shows the same results.
  const [query, setQueryState] = useState(() => params.get('q') ?? '')
  const setQuery = (q: string) => {
    setQueryState(q)
    setParams(q ? { q } : {}, { replace: true })
  }
  const active = articlesByCategory.find((c) => c.id === params.get('c'))
  const select = (id?: CategoryId) => setParams(id ? { c: id } : {}, { replace: true })
  const results = useMemo(() => searchArticles(query), [query])
  const { recent, saved } = useLibrary()
  const navigate = useNavigate()
  const listed = useMemo(() => ARTICLES.filter((a) => !a.unlisted), [])
  const surprise = () => navigate(`/theory/${listed[Math.floor(Math.random() * listed.length)].slug}`)
  const lookup = (slugs: string[]) => slugs.map((s) => findArticle(s)).filter((a): a is Article => !!a)

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-5 lg:px-8 lg:py-8">
      <section className={clsx('hero-ebony relative isolate overflow-hidden rounded-[28px] shadow-[var(--shadow-float)]', active || query ? 'p-2.5' : 'animate-float-up px-5 pb-6 pt-7 sm:px-9 sm:pb-9 sm:pt-10')}>
        {/* The pianist photograph sits on the right; a warm-black wash keeps the text side readable. */}
        <picture aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <source media="(max-width: 640px)" srcSet={`${import.meta.env.BASE_URL}images/hero-piano-sm.webp`} />
          <img src={`${import.meta.env.BASE_URL}images/hero-piano.webp`} alt="" className="h-full w-full object-cover object-[78%_45%] sm:object-[right_42%]" />
        </picture>
        <div aria-hidden className="hero-wash pointer-events-none absolute inset-0 -z-10" />
        {!active && !query && (
          <>
            <p className="relative text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#e2b66e]">Thư viện lý thuyết</p>
            <h2 className="relative mt-3 max-w-xl font-display text-[30px] font-semibold leading-[1.1] tracking-tight text-[#f6ecdc] sm:text-[44px]">
              Âm nhạc phương Tây <span className="text-gold-gradient italic">&amp; piano</span>
            </h2>
            <p className="relative mt-3 max-w-md text-[14px] leading-relaxed text-[#e9dcc6]/75 sm:text-[15px]">
              Từ ký âm cơ bản đến hoà âm jazz và phân tích tác phẩm — mọi trang liên kết với nhau như một bách khoa toàn thư, để học và để dạy.
            </p>
            <dl className="relative mt-5 flex max-w-md flex-wrap gap-x-6 gap-y-2">
              {[
                [ARTICLES.length, 'trang'],
                [articlesByCategory.length, 'chủ đề'],
                [libraryStats.links.toLocaleString('vi-VN'), 'liên kết nội bộ'],
                [libraryStats.figures.toLocaleString('vi-VN'), 'hình minh hoạ'],
              ].map(([n, label]) => (
                <div key={label} className="flex items-baseline gap-1.5">
                  <dt className="font-display text-[22px] font-semibold text-[#f0c987]">{n}</dt>
                  <dd className="text-[12.5px] text-[#e9dcc6]/60">{label}</dd>
                </div>
              ))}
            </dl>
          </>
        )}
        <label className={clsx(!active && !query && 'mt-6', 'relative flex h-12 items-center gap-2.5 rounded-2xl bg-[#f7efe2]/95 px-4 text-[#7a5a3a] shadow-[0_10px_34px_-10px_rgba(0,0,0,0.7)] ring-1 ring-[#e2b66e]/30 backdrop-blur transition-shadow focus-within:ring-2 focus-within:ring-[#e2b66e]')}>
          <SearchIcon width={18} height={18} className="shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Tìm trong ${ARTICLES.length} trang: hợp âm, thị tấu, Chopin…`}
            className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-[#1c140d] outline-none placeholder:text-[#a08a70]"
          />
          {query ? (
            <button onClick={() => setQuery('')} aria-label="Xoá" className="rounded-lg p-1 hover:bg-black/5">
              <XIcon width={16} height={16} />
            </button>
          ) : (
            <button onClick={surprise} title="Mở một bài ngẫu nhiên" className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[12.5px] font-medium text-[#a5632a] hover:bg-[#a5632a]/10">
              <ShuffleIcon width={14} height={14} /> <span className="hidden sm:inline">Ngẫu nhiên</span>
            </button>
          )}
        </label>
        {!active && !query && (
          <div className="relative mt-3 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => setQuery(s)} className="rounded-full border border-[#e2b66e]/25 bg-black/30 px-3 py-1 text-[12.5px] text-[#efe3cf]/85 backdrop-blur-sm transition-colors hover:border-[#e2b66e]/70 hover:bg-[#e2b66e]/15 hover:text-[#f6ecdc]">
                {s}
              </button>
            ))}
          </div>
        )}
      </section>

      {query ? (
        <section className="space-y-3">
          <SectionTitle>{results.length ? `${results.length} kết quả cho “${query}”` : `Không tìm thấy “${query}”`}</SectionTitle>
          {results.length > 0 && <ArticleGrid articles={results.slice(0, 60)} query={query} />}
        </section>
      ) : active ? (
        <CategoryView id={active.id} onSelect={select} />
      ) : (
        <>
          {(recent.length > 0 || saved.length > 0) && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {recent.length > 0 && <Shelf title="Đọc gần đây" icon={<ClockIcon width={15} height={15} />} articles={lookup(recent).slice(0, 6)} progress />}
              {saved.length > 0 && <Shelf title="Đã lưu" icon={<BookmarkIcon width={15} height={15} />} articles={lookup(saved).slice(0, 6)} />}
            </div>
          )}

          <section className="space-y-4">
            <SectionTitle icon={<CompassIcon width={16} height={16} />} hint="Mỗi bài là lộ trình của một nhóm">Bắt đầu từ đây</SectionTitle>
            <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
              {PATHS.map((a, i) => (
                <Link
                  key={a.slug}
                  to={`/theory/${a.slug}`}
                  style={{ ...tint(a.category), animationDelay: `${i * 50}ms` }}
                  className="theory-card animate-float-up group relative flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 lg:w-auto"
                >
                  <span aria-hidden className="absolute -right-3 -top-4 font-['Noto_Music'] text-[84px] leading-none text-[color-mix(in_oklch,var(--tint)_16%,transparent)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    {GLYPHS[a.category]}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--tint)]">{CATEGORIES[a.category].title}</span>
                  <span className="mt-2 font-display text-[18px] font-semibold leading-snug text-[var(--color-ink)]">{a.title}</span>
                  <span className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{a.summary}</span>
                  <span className="mt-auto flex items-center gap-1 pt-4 text-[12.5px] font-medium text-[var(--color-ink)]">
                    Bắt đầu <ArrowUpRightIcon width={14} height={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle hint={`${articlesByCategory.length} nhóm`}>Mục lục theo chủ đề</SectionTitle>
            <div className="grid grid-cols-1 gap-3 min-[460px]:grid-cols-2 lg:grid-cols-3">
              {articlesByCategory.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => select(c.id)}
                  style={{ ...tint(c.id), animationDelay: `${Math.min(i, 12) * 30}ms` }}
                  className="theory-card animate-float-up group flex items-start gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_oklch,var(--tint)_14%,transparent)] font-['Noto_Music'] text-[22px] text-[var(--tint)] ring-1 ring-[color-mix(in_oklch,var(--tint)_22%,transparent)] transition-transform duration-300 group-hover:scale-105">
                    {GLYPHS[c.id]}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="text-[15px] font-semibold leading-snug text-[var(--color-ink)]">{c.title}</span>
                      <span className="shrink-0 text-[12px] tabular-nums text-[var(--color-ink-faint)]">{c.articles.length}</span>
                    </span>
                    <span className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{c.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </section>

          <footer className="grid gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 text-[13px] text-[var(--color-ink-muted)] sm:grid-cols-[1fr_2fr] sm:p-6">
            <div>
              <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Nguồn tham khảo mở</p>
              <p className="mt-1 leading-relaxed">Mỗi bài ghi nguồn ở cuối trang. Đây là các nguồn miễn phí dùng nhiều nhất.</p>
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SOURCES.map(([name, url, note]) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)]">
                    {name} <ArrowUpRightIcon width={12} height={12} className="opacity-50 transition-opacity group-hover:opacity-100" />
                  </a>
                  <span className="block text-[12px]">{note}</span>
                </li>
              ))}
            </ul>
          </footer>
        </>
      )}
    </div>
  )
}

const SOURCES = [
  ['Open Music Theory', 'https://viva.pressbooks.pub/openmusictheory/', 'giáo trình đại học mở (CC BY-SA)'],
  ['musictheory.net', 'https://www.musictheory.net/lessons', 'bài học và bài tập tương tác'],
  ['The Jazz Piano Site', 'https://www.thejazzpianosite.com/jazz-piano-lessons/', 'lý thuyết và piano jazz'],
  ['Wikipedia', 'https://en.wikipedia.org/wiki/Music_theory', 'bách khoa toàn thư mở'],
  ['Wikimedia Commons', 'https://commons.wikimedia.org/wiki/Category:Musical_notation', 'hình ảnh ký hiệu nhạc (public domain / CC)'],
  ['IMSLP', 'https://imslp.org/', 'thư viện bản nhạc cổ điển miễn phí'],
]

export function SectionTitle({ children, icon, hint }: { children: ReactNode; icon?: ReactNode; hint?: string }) {
  return (
    <div className="flex items-end justify-between gap-3 border-b border-[var(--color-border)] pb-2">
      <h2 className="flex items-center gap-2 font-display text-[21px] font-semibold tracking-tight text-[var(--color-ink)]">
        {icon && <span className="text-[var(--color-gold)]">{icon}</span>}
        {children}
      </h2>
      {hint && <span className="pb-0.5 text-[12px] text-[var(--color-ink-faint)]">{hint}</span>}
    </div>
  )
}

function Shelf({ title, icon, articles, progress }: { title: string; icon: ReactNode; articles: Article[]; progress?: boolean }) {
  return (
    <section className="space-y-3">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <ul className="space-y-1">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link to={`/theory/${a.slug}`} style={tint(a.category)} className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-[var(--color-surface-raised)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklch,var(--tint)_14%,transparent)] font-['Noto_Music'] text-[15px] text-[var(--tint)]">{GLYPHS[a.category]}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[14px] font-medium text-[var(--color-ink)]">{a.title}</span>
                <span className="block truncate text-[12px] text-[var(--color-ink-faint)]">{CATEGORIES[a.category].title}</span>
                {progress && (
                  <span className="mt-1.5 block h-[3px] overflow-hidden rounded-full bg-[var(--color-surface-sunken)]">
                    <span className="block h-full rounded-full bg-gradient-to-r from-[var(--tint)] to-[var(--color-gold)]" style={{ width: `${Math.max(4, readingPosition(a.slug) * 100)}%` }} />
                  </span>
                )}
              </span>
              <ChevronRightIcon width={15} height={15} className="text-[var(--color-ink-faint)] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CategoryView({ id, onSelect }: { id: CategoryId; onSelect: (id?: CategoryId) => void }) {
  const cat = articlesByCategory.find((c) => c.id === id)!
  const [hub, ...rest] = cat.articles
  const own = rest.filter((a) => a.category === id)
  const shared = rest.filter((a) => a.category !== id)
  return (
    <div className="space-y-6">
      <CategoryChips active={id} onSelect={onSelect} />
      <header
        key={id}
        style={tint(id)}
        className="animate-float-up relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(135deg,color-mix(in_oklch,var(--tint)_14%,var(--color-surface-raised)),var(--color-surface-raised)_70%)] p-6 sm:p-8"
      >
        <span aria-hidden className="absolute -right-2 -top-6 font-['Noto_Music'] text-[150px] leading-none text-[color-mix(in_oklch,var(--tint)_14%,transparent)]">{GLYPHS[id]}</span>
        <p className="relative text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--tint)]">{cat.articles.length} bài</p>
        <h2 className="relative mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">{cat.title}</h2>
        <p className="relative mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">{cat.description}</p>
        {hub && (
          <Link to={`/theory/${hub.slug}`} className="btn-sheen relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[var(--color-ink)] px-4 py-2.5 text-[13.5px] font-medium text-[var(--color-surface)] transition-transform hover:-translate-y-px">
            <CompassIcon width={15} height={15} /> Bắt đầu: {hub.title}
          </Link>
        )}
      </header>
      <ArticleGrid articles={own} numbered />
      {shared.length > 0 && (
        <section className="space-y-3">
          <SectionTitle hint="Bài của nhóm khác, xếp chéo vào đây">Liên quan từ nhóm khác</SectionTitle>
          <ArticleGrid articles={shared} home={id} />
        </section>
      )}
    </div>
  )
}

/** Horizontal, scrollable category switcher shown above a category's articles. */
function CategoryChips({ active, onSelect }: { active: CategoryId; onSelect: (id?: CategoryId) => void }) {
  return (
    <nav className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
      <button onClick={() => onSelect()} className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-1.5 text-[13px] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]">
        ← Tất cả
      </button>
      {articlesByCategory.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          style={tint(c.id)}
          className={clsx(
            'shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] transition-all',
            c.id === active
              ? 'border-transparent bg-[var(--tint)] font-medium text-white shadow-[0_6px_16px_-6px_var(--tint)]'
              : 'border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink)] hover:border-[var(--tint)]',
          )}
        >
          {c.title}
        </button>
      ))}
    </nav>
  )
}

/** Wraps the matched part of `text` in a highlight (accent- and diacritic-insensitive). */
function Highlight({ text, query }: { text: string; query?: string }) {
  if (!query) return <>{text}</>
  const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').replace(/[đĐ]/g, 'd').toLowerCase()
  // Folding keeps one character per character for Vietnamese, so indices line up with the original.
  const i = fold(text).indexOf(fold(query.trim()))
  if (i < 0 || fold(text).length !== text.length) return <>{text}</>
  const n = query.trim().length
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded bg-[var(--color-gold-soft)] px-0.5 text-[var(--color-ink)]">{text.slice(i, i + n)}</mark>
      {text.slice(i + n)}
    </>
  )
}

export function ArticleGrid({ articles, home, query, numbered, showCategory }: { articles: Article[]; home?: CategoryId; query?: string; numbered?: boolean; showCategory?: boolean }) {
  return (
    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <li key={a.slug} className="animate-float-up" style={{ animationDelay: `${Math.min(i, 12) * 25}ms` }}>
          <Link
            to={`/theory/${a.slug}`}
            style={tint(a.category)}
            className="theory-card group flex h-full gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3.5"
          >
            {numbered ? (
              <span className="mt-0.5 w-6 shrink-0 font-display text-[15px] font-semibold tabular-nums text-[var(--tint)]">{String(i + 1).padStart(2, '0')}</span>
            ) : (
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklch,var(--tint)_14%,transparent)] font-['Noto_Music'] text-[12px] text-[var(--tint)]">{GLYPHS[a.category]}</span>
            )}
            <span className="min-w-0">
              <span className="block text-[14.5px] font-semibold leading-snug text-[var(--color-ink)] group-hover:text-[var(--tint)]">
                <Highlight text={a.title} query={query} />
              </span>
              <span className="mt-0.5 line-clamp-2 text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{a.summary}</span>
              {(query || showCategory || (home && a.category !== home)) && (
                <span className="mt-1.5 block text-[11px] font-medium text-[var(--tint)]">{CATEGORIES[a.category].title}</span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/* ---------------------------------------------------------------- article */

const LEADINGS: [number, string][] = [[1.6, 'Gọn'], [1.75, 'Vừa'], [1.95, 'Thoáng']]

function ArticleActions({ article }: { article: Article }) {
  const { saved, size, serif, leading } = useLibrary()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const isSaved = saved.includes(article.slug)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard can be unavailable (insecure context); nothing to do.
    }
  }
  const btn = 'flex h-9 w-9 items-center justify-center rounded-xl text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]'
  return (
    <div className="relative flex items-center gap-0.5">
      <button onClick={copy} aria-label="Sao chép liên kết" title={copied ? 'Đã sao chép' : 'Sao chép liên kết'} className={clsx(btn, copied && 'text-[var(--color-status-completed)]')}>
        <LinkIcon width={17} height={17} />
      </button>
      <button onClick={() => setOpen((o) => !o)} aria-label="Cỡ chữ và phông" aria-expanded={open} className={clsx(btn, open && 'bg-[var(--color-surface-sunken)] text-[var(--color-ink)]')}>
        <TypeIcon width={17} height={17} />
      </button>
      <button onClick={() => toggleSaved(article.slug)} aria-label={isSaved ? 'Bỏ lưu' : 'Lưu bài'} aria-pressed={isSaved} className={clsx(btn, isSaved && 'text-[var(--color-gold)]')}>
        <BookmarkIcon width={17} height={17} fill={isSaved ? 'currentColor' : 'none'} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="animate-popover absolute right-0 top-11 z-20 w-64 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-float)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">Cỡ chữ</p>
            <div className="mt-2 flex items-center gap-2">
              <button onClick={() => updateLibrary({ size: Math.max(14, size - 1) })} className="h-8 w-8 rounded-lg border border-[var(--color-border)] text-[13px] hover:bg-[var(--color-surface-sunken)]">A−</button>
              <input type="range" min={14} max={21} value={size} onChange={(e) => updateLibrary({ size: Number(e.target.value) })} className="flex-1 accent-[var(--color-accent)]" aria-label="Cỡ chữ" />
              <button onClick={() => updateLibrary({ size: Math.min(21, size + 1) })} className="h-8 w-8 rounded-lg border border-[var(--color-border)] text-[16px] hover:bg-[var(--color-surface-sunken)]">A+</button>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">Phông chữ</p>
            <div className="mt-2 grid grid-cols-2 gap-1 rounded-xl bg-[var(--color-surface-sunken)] p-1">
              {[false, true].map((s) => (
                <button
                  key={String(s)}
                  onClick={() => updateLibrary({ serif: s })}
                  className={clsx('rounded-lg py-1.5 text-[13.5px] transition-all', s && 'font-serif', serif === s ? 'bg-[var(--color-surface-raised)] font-medium text-[var(--color-ink)] shadow-sm' : 'text-[var(--color-ink-muted)]')}
                >
                  {s ? 'Có chân' : 'Không chân'}
                </button>
              ))}
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">Giãn dòng</p>
            <div className="mt-2 grid grid-cols-3 gap-1 rounded-xl bg-[var(--color-surface-sunken)] p-1">
              {LEADINGS.map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => updateLibrary({ leading: value })}
                  className={clsx('rounded-lg py-1.5 text-[13px] transition-all', leading === value ? 'bg-[var(--color-surface-raised)] font-medium text-[var(--color-ink)] shadow-sm' : 'text-[var(--color-ink-muted)]')}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-4 rounded-xl border border-[var(--color-border)] px-3 py-2.5 text-[13px] text-[var(--color-ink-muted)]" style={{ fontSize: Math.min(size, 17), lineHeight: leading, fontFamily: serif ? 'var(--font-serif)' : undefined }}>
              Âm nhạc là nghệ thuật của âm thanh trong thời gian.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

function ArticleView({ article, scroller, sections, onJump: jump }: { article: Article; scroller: RefObject<HTMLDivElement | null>; sections: string[]; onJump: (i: number) => void }) {
  const backlinks = getBacklinks(article.slug)
  const siblings = articlesByCategory.find((c) => c.id === article.category)!.articles
  const index = siblings.indexOf(article)
  const [prev, next] = index < 0 ? [] : [siblings[index - 1], siblings[index + 1]]
  const branches = branchesOf(article.slug).filter((b) => b.part !== 'intro')
  const { size, serif, leading } = useLibrary()

  return (
    <div style={tint(article.category)} className="mx-auto grid max-w-6xl gap-10 px-4 py-6 lg:px-8 lg:py-10 xl:grid-cols-[minmax(0,1fr)_240px]">
      <article className="animate-float-up mx-auto w-full min-w-0 max-w-[720px] space-y-7">
        <header className="space-y-4">
          <Link to={`/theory?c=${article.category}`} className="inline-flex items-center gap-2 rounded-full bg-[color-mix(in_oklch,var(--tint)_12%,transparent)] py-1 pl-1.5 pr-3 text-[12px] font-semibold text-[var(--tint)] transition-colors hover:bg-[color-mix(in_oklch,var(--tint)_20%,transparent)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--tint)] font-['Noto_Music'] text-[11px] text-white">{GLYPHS[article.category]}</span>
            {CATEGORIES[article.category].title}
          </Link>
          {branches.length > 0 && (
            <p className="flex flex-wrap items-center gap-1.5 text-[12px] text-[var(--color-ink-faint)]">
              <BranchesIcon width={13} height={13} className="text-[var(--color-gold)]" /> Âm nhạc học:
              {branches.map((b) => (
                <Link key={b.id} to={`/musicology/${b.id}`} className="rounded-full border border-[var(--color-border)] px-2 py-0.5 font-medium text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-ink)]">
                  {b.title}
                </Link>
              ))}
            </p>
          )}
          <h1 className="font-display text-[32px] font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] sm:text-[42px]">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-[var(--color-ink-faint)]">
            <span className="inline-flex items-center gap-1.5"><ClockIcon width={13} height={13} /> {readingMinutes(article)} phút đọc</span>
            {sections.length > 0 && <span className="inline-flex items-center gap-1.5"><ListIcon width={13} height={13} /> {sections.length} mục</span>}
            {backlinks.length > 0 && <span className="inline-flex items-center gap-1.5"><LinkIcon width={13} height={13} /> {backlinks.length} bài dẫn đến</span>}
          </div>
          <p className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] py-4 pl-6 pr-5 font-serif text-[17px] leading-relaxed text-[var(--color-ink)] shadow-[var(--shadow-soft)] before:absolute before:inset-y-4 before:left-0 before:w-[3px] before:rounded-r-full before:bg-gradient-to-b before:from-[var(--tint)] before:to-[var(--color-gold)]">
            {article.summary}
          </p>
          {article.aliases && (
            <details className="group text-[12.5px] text-[var(--color-ink-faint)]">
              <summary className="cursor-pointer list-none hover:text-[var(--color-ink-muted)]">
                <span className="group-open:hidden">Từ khoá: {article.aliases.slice(0, 4).join(', ')}{article.aliases.length > 4 && ` … (+${article.aliases.length - 4})`}</span>
                <span className="hidden group-open:inline">Từ khoá:</span>
              </summary>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {article.aliases.map((k) => <span key={k} className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5">{k}</span>)}
              </div>
            </details>
          )}
        </header>

        {article.portrait && <WikiImage key={article.slug} titles={article.portrait.titles} years={article.portrait.years} caption={article.title} portrait />}

        {sections.length > 1 && (
          <nav aria-label="Mục lục bài" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 xl:hidden">
            {sections.map((title, i) => (
              <button
                key={title + i}
                onClick={() => jump(i)}
                className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-[12.5px] font-medium text-[var(--color-ink)] transition-all hover:border-[var(--tint)] active:scale-95"
              >
                {title}
              </button>
            ))}
          </nav>
        )}

        <LinkPreviews>
          <div className="prose-theory" data-font={serif ? 'serif' : 'sans'} style={{ '--reader-size': `${size}px`, '--reader-leading': leading } as CSSProperties}>
            <Markup source={article.body} />
          </div>
        </LinkPreviews>

        {(article.wiki || article.refs) && (
          <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
            <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Nguồn tham khảo</h2>
            <ol className="mt-3 space-y-1.5 text-[13px] text-[var(--color-ink-muted)]">
              {[...(article.wiki ? [[`Wikipedia — ${article.wiki.replace(/_/g, ' ')}`, `https://en.wikipedia.org/wiki/${encodeURIComponent(article.wiki)}`]] : []), ...(article.refs ?? [])].map(([title, url], i) => (
                <li key={url} className="flex gap-2.5">
                  <span className="w-5 shrink-0 text-right tabular-nums text-[var(--color-ink-faint)]">{i + 1}.</span>
                  <a href={url} target="_blank" rel="noreferrer" className="group min-w-0 text-[var(--color-ink)] hover:text-[var(--color-accent)]">
                    {title} <ArrowUpRightIcon width={11} height={11} className="inline opacity-40 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}

        {(prev || next) && (
          <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[prev, next].map((a, i) =>
              a ? (
                <Link
                  key={a.slug}
                  to={`/theory/${a.slug}`}
                  className={clsx('theory-card group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4', i ? 'sm:col-start-2 sm:text-right' : '')}
                >
                  <span className={clsx('flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]', i && 'sm:justify-end')}>
                    {i ? <>Bài sau <ChevronRightIcon width={12} height={12} /></> : <><ChevronLeftIcon width={12} height={12} /> Bài trước</>}
                  </span>
                  <span className="mt-1 line-clamp-2 font-display text-[16px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--tint)]">{a.title}</span>
                </Link>
              ) : null,
            )}
          </nav>
        )}

        {backlinks.length > 0 && <Backlinks articles={backlinks} />}
        <RelatedRow title="Cùng chủ đề" articles={siblings.filter((a) => a !== article)} />
      </article>

      {sections.length > 1 && (
        <aside className="hidden xl:block">
          <Toc sections={sections} scroller={scroller} onJump={jump} />
        </aside>
      )}
    </div>
  )
}

/** Sticky table of contents that highlights the section being read. */
function Toc({ sections, scroller, onJump }: { sections: string[]; scroller: RefObject<HTMLDivElement | null>; onJump: (i: number) => void }) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const root = scroller.current
    if (!root) return
    const nodes = sections.map((_, i) => root.querySelector(`#sec-${i}`)).filter((n): n is Element => !!n)
    const io = new IntersectionObserver(
      () => {
        // The current section is the last heading above the top quarter of the viewport.
        const line = root.getBoundingClientRect().top + root.clientHeight * 0.25
        let current = 0
        nodes.forEach((n, i) => {
          if (n.getBoundingClientRect().top <= line) current = i
        })
        setActive(current)
      },
      { root, rootMargin: '0px 0px -60% 0px', threshold: [0, 1] },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [sections, scroller])

  return (
    <nav aria-label="Mục lục bài" className="sticky top-24 max-h-[calc(100dvh-8rem)] overflow-y-auto pb-6">
      <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
        <ListIcon width={13} height={13} /> Trong bài này
      </p>
      <ol className="space-y-0.5 border-l border-[var(--color-border)]">
        {sections.map((title, i) => (
          <li key={title + i}>
            <button
              onClick={() => onJump(i)}
              data-active={i === active}
              className="toc-link -ml-px block w-full border-l-2 border-transparent py-1.5 pl-3.5 text-left text-[13px] leading-snug text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/**
 * Hovering a wiki link (with a mouse) shows a small card with the target's summary, like
 * Wikipedia's page previews, so a reader can follow the web of links without leaving the page.
 */
function LinkPreviews({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<{ article: Article; x: number; y: number; below: boolean }>()
  const timer = useRef<number>(undefined)
  const canHover = typeof matchMedia !== 'undefined' && matchMedia('(hover: hover) and (pointer: fine)').matches

  const over = (e: React.MouseEvent) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-slug]')
    window.clearTimeout(timer.current)
    if (!link) return setPreview(undefined)
    timer.current = window.setTimeout(() => {
      const article = findArticle(link.dataset.slug!)
      if (!article) return
      const r = link.getBoundingClientRect()
      const below = r.top < 260
      setPreview({ article, x: Math.min(Math.max(16, r.left), innerWidth - 336), y: below ? r.bottom + 8 : r.top - 8, below })
    }, 320)
  }
  const leave = () => {
    window.clearTimeout(timer.current)
    setPreview(undefined)
  }

  return (
    <div onMouseOver={canHover ? over : undefined} onMouseLeave={leave} onClick={leave}>
      {children}
      {preview && (
        <div
          role="tooltip"
          style={{ ...tint(preview.article.category), left: preview.x, top: preview.y, transform: preview.below ? undefined : 'translateY(-100%)' }}
          className="pointer-events-none fixed z-50 w-80"
        >
          <div className="animate-popover overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-float)]">
            <div className="h-1 bg-gradient-to-r from-[var(--tint)] to-[var(--color-gold)]" />
            <div className="p-4">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[var(--tint)]">{CATEGORIES[preview.article.category].title}</p>
              <p className="mt-1 font-display text-[17px] font-semibold leading-snug text-[var(--color-ink)]">{preview.article.title}</p>
              <p className="mt-1.5 line-clamp-5 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{preview.article.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Backlinks({ articles }: { articles: Article[] }) {
  const [all, setAll] = useState(false)
  const shown = all ? articles : articles.slice(0, 6)
  return (
    <section className="space-y-3 border-t border-[var(--color-border)] pt-6">
      <h2 className="flex items-baseline justify-between font-display text-[19px] font-semibold text-[var(--color-ink)]">
        Các bài nhắc đến trang này
        <span className="font-sans text-[12px] font-normal text-[var(--color-ink-faint)]">{articles.length}</span>
      </h2>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {shown.map((a) => (
          <li key={a.slug}>
            <Link to={`/theory/${a.slug}`} style={tint(a.category)} className="theory-card group flex h-full items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-3">
              <span className="mt-0.5 font-['Noto_Music'] text-[14px] text-[var(--tint)]">{GLYPHS[a.category]}</span>
              <span className="min-w-0">
                <span className="block text-[14px] font-medium leading-snug text-[var(--color-ink)] group-hover:text-[var(--tint)]">{a.title}</span>
                <span className="line-clamp-1 text-[12px] text-[var(--color-ink-faint)]">{a.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {articles.length > 6 && (
        <button onClick={() => setAll((v) => !v)} className="text-[13px] font-medium text-[var(--color-accent)] hover:underline">
          {all ? 'Thu gọn' : `Xem cả ${articles.length} bài`}
        </button>
      )}
    </section>
  )
}

/** One horizontally scrolling row of article chips — keeps long related lists from growing the page. */
function RelatedRow({ title, articles }: { title: string; articles: Article[] }) {
  if (!articles.length) return null
  return (
    <section className="space-y-3 border-t border-[var(--color-border)] pt-6">
      <h2 className="flex items-baseline justify-between font-display text-[19px] font-semibold text-[var(--color-ink)]">
        {title}
        <span className="font-sans text-[12px] font-normal text-[var(--color-ink-faint)]">{articles.length}</span>
      </h2>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
        {articles.map((a) => (
          <Link
            key={a.slug}
            to={`/theory/${a.slug}`}
            style={tint(a.category)}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-[13px] text-[var(--color-ink)] transition-colors hover:border-[var(--tint)] hover:text-[var(--tint)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tint)]" />
            {a.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
