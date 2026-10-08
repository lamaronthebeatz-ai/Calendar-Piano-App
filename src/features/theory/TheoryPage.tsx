import { useRef, useState, type CSSProperties, type RefObject } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowLeftIcon, BookIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '../../components/icons'
import { EmptyState } from '../../components/EmptyState'
import { ARTICLES, CATEGORIES } from './articles'
import { Markup } from './Markup'
import { articlesByCategory, findArticle, getBacklinks, headings, searchArticles, type Article } from './wiki'

type CategoryId = Article['category']

/** Each category's own colour, derived from its hue so it works in light and dark themes. */
const tint = (id: CategoryId) => ({ '--tint': `oklch(0.6 0.13 ${CATEGORIES[id].hue})` }) as CSSProperties

export function TheoryPage() {
  const { slug } = useParams()
  const article = slug ? findArticle(slug) : undefined
  const scroller = useRef<HTMLDivElement>(null)
  const progress = useRef<HTMLDivElement>(null)
  const toTop = useRef<HTMLButtonElement>(null)

  // Updated through refs rather than state so scrolling never re-renders the article.
  const onScroll = () => {
    const el = scroller.current!
    const ratio = el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight)
    if (progress.current) progress.current.style.transform = `scaleX(${ratio})`
    toTop.current?.classList.toggle('is-visible', el.scrollTop > 600)
  }

  return (
    // Keyed by slug so following a link remounts the scroller at the top.
    <div key={slug} ref={scroller} onScroll={onScroll} className="relative h-full overflow-y-auto scroll-smooth pb-24 lg:pb-6">
      <div className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]/90 backdrop-blur" style={article && tint(article.category)}>
        <div className="flex items-center gap-2 px-4 py-3 lg:px-6">
          {slug && (
            <Link
              to={article ? `/theory?c=${article.category}` : '/theory'}
              aria-label="Quay lại mục lục"
              className="-ml-1 rounded-lg p-1 text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)]"
            >
              <ArrowLeftIcon width={18} height={18} />
            </Link>
          )}
          <h1 className="truncate text-[17px] font-semibold text-[var(--color-ink)]">{article ? article.title : 'Lý thuyết âm nhạc'}</h1>
        </div>
        {article && <div ref={progress} className="h-0.5 origin-left scale-x-0 bg-[var(--tint)] transition-transform duration-75" />}
      </div>

      <div className="mx-auto max-w-3xl px-4 py-5 lg:px-6">
        {!slug ? (
          <Index />
        ) : article ? (
          <ArticleView article={article} scroller={scroller} />
        ) : (
          <EmptyState icon={<BookIcon width={30} height={30} />} title="Chưa có bài viết này" description={`“${slug}” chưa được viết.`} />
        )}
      </div>

      <button
        ref={toTop}
        onClick={() => scroller.current?.scrollTo({ top: 0 })}
        aria-label="Về đầu trang"
        className="theory-to-top fixed bottom-24 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)] shadow-[var(--shadow-float)] lg:bottom-6 lg:right-8"
      >
        <ChevronLeftIcon width={20} height={20} className="rotate-90" />
      </button>
    </div>
  )
}

function Index() {
  const [query, setQuery] = useState('')
  const [params, setParams] = useSearchParams()
  const active = articlesByCategory.find((c) => c.id === params.get('c'))
  const select = (id?: CategoryId) => setParams(id ? { c: id } : {}, { replace: true })
  const results = searchArticles(query)

  return (
    <div className="space-y-5">
      <section className={clsx('overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-accent)] to-[oklch(0.45_0.12_290)] text-white shadow-[var(--shadow-soft)] transition-[padding] duration-300', active || query ? 'p-2' : 'animate-slide-up p-5')}>
        {/* The hero collapses to just the search box once a category or search is open, to save scrolling. */}
        {!active && !query && (
          <>
            <p className="text-[13px] font-medium opacity-80">Thư viện lý thuyết</p>
            <h2 className="mt-1 text-[22px] font-semibold leading-tight">Âm nhạc phương Tây & piano</h2>
            <p className="mt-1 text-[13px] opacity-80">
              {ARTICLES.length} trang · {articlesByCategory.length} chủ đề · liên kết như Wikipedia
            </p>
          </>
        )}
        <label className={clsx(!active && !query && 'mt-4', 'flex h-11 items-center gap-2 rounded-xl bg-white/95 px-3 text-[#6b6459] shadow-sm')}>
          <SearchIcon width={16} height={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm: hợp âm, thị tấu, Chopin…"
            className="h-full flex-1 bg-transparent text-[15px] text-[#201d18] outline-none placeholder:text-[#a39c8e]"
          />
        </label>
      </section>

      {query ? (
        results.length ? <ArticleGrid articles={results} /> : <p className="text-sm text-[var(--color-ink-muted)]">Không tìm thấy bài nào.</p>
      ) : active ? (
        <>
          <CategoryChips active={active.id} onSelect={select} />
          <header key={active.id} className="animate-slide-up border-l-4 border-[var(--tint)] pl-3" style={tint(active.id)}>
            <h2 className="text-[18px] font-semibold text-[var(--color-ink)]">{active.title}</h2>
            <p className="text-[13px] text-[var(--color-ink-muted)]">{active.description}</p>
          </header>
          <ArticleGrid key={`${active.id}-list`} articles={active.articles} home={active.id} />
        </>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {articlesByCategory.map((c, i) => (
            <button
              key={c.id}
              onClick={() => select(c.id)}
              style={{ ...tint(c.id), animationDelay: `${i * 35}ms` }}
              className="theory-card animate-slide-up flex flex-col items-start gap-1.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-3.5 text-left [animation-fill-mode:backwards]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[color-mix(in_oklch,var(--tint)_18%,transparent)] text-[13px] font-bold text-[var(--tint)]">
                {c.articles.length}
              </span>
              <span className="text-[14px] font-semibold leading-snug text-[var(--color-ink)]">{c.title}</span>
              <span className="line-clamp-2 text-[12px] leading-snug text-[var(--color-ink-muted)]">{c.description}</span>
            </button>
          ))}
        </div>
      )}

      {!active && !query && (
        <footer className="space-y-1 border-t border-[var(--color-border)] pt-4 text-[13px] text-[var(--color-ink-muted)]">
          <p className="font-semibold text-[var(--color-ink)]">Nguồn tham khảo miễn phí</p>
          <ul className="space-y-1">
            {SOURCES.map(([name, url, note]) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer" className="text-[var(--color-accent)] hover:underline">{name}</a> — {note}
              </li>
            ))}
          </ul>
        </footer>
      )}
    </div>
  )
}

const SOURCES = [
  ['Open Music Theory', 'https://viva.pressbooks.pub/openmusictheory/', 'giáo trình đại học mở (CC BY-SA)'],
  ['musictheory.net', 'https://www.musictheory.net/lessons', 'bài học và bài tập tương tác miễn phí'],
  ['Wikipedia', 'https://en.wikipedia.org/wiki/Music_theory', 'bách khoa toàn thư mở'],
  ['Wikimedia Commons', 'https://commons.wikimedia.org/wiki/Category:Musical_notation', 'nguồn hình ảnh ký hiệu nhạc (public domain / CC)'],
  ['IMSLP', 'https://imslp.org/', 'thư viện bản nhạc cổ điển miễn phí'],
]

/** Horizontal, scrollable category switcher shown above a category's articles. */
function CategoryChips({ active, onSelect }: { active: CategoryId; onSelect: (id?: CategoryId) => void }) {
  return (
    <nav className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
      <button onClick={() => onSelect()} className="shrink-0 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[13px] text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)]">
        Tất cả
      </button>
      {articlesByCategory.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          style={tint(c.id)}
          className={clsx(
            'shrink-0 rounded-full border px-3 py-1.5 text-[13px] transition-all',
            c.id === active
              ? 'border-transparent bg-[var(--tint)] font-medium text-white shadow-sm'
              : 'border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--tint)]',
          )}
        >
          {c.title}
        </button>
      ))}
    </nav>
  )
}

function ArticleGrid({ articles, home }: { articles: Article[]; home?: CategoryId }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {articles.map((a, i) => (
        <li key={a.slug} className="animate-slide-up [animation-fill-mode:backwards]" style={{ animationDelay: `${Math.min(i, 12) * 25}ms` }}>
          <Link
            to={`/theory/${a.slug}`}
            style={tint(a.category)}
            className="theory-card flex h-full gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-3"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--tint)]" />
            <span className="min-w-0">
              <span className="block text-[15px] font-medium leading-snug text-[var(--color-ink)]">{a.title}</span>
              <span className="line-clamp-2 text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{a.summary}</span>
              {home && a.category !== home && (
                <span className="mt-1 block text-[11px] font-medium text-[var(--tint)]">↗ Bài thuộc nhóm {CATEGORIES[a.category].title}</span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ArticleView({ article, scroller }: { article: Article; scroller: RefObject<HTMLDivElement | null> }) {
  const backlinks = getBacklinks(article.slug)
  const siblings = articlesByCategory.find((c) => c.id === article.category)!.articles
  const index = siblings.indexOf(article)
  const [prev, next] = index < 0 ? [] : [siblings[index - 1], siblings[index + 1]]
  const sections = headings(article.body)
  const jump = (i: number) => scroller.current?.querySelector(`#sec-${i}`)?.scrollIntoView({ block: 'start' })

  return (
    <article className="animate-slide-up space-y-6" style={tint(article.category)}>
      <header className="space-y-2">
        <Link to={`/theory?c=${article.category}`} className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-[var(--tint)] hover:underline">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--tint)]" />
          {CATEGORIES[article.category].title}
        </Link>
        <h1 className="text-[26px] font-semibold leading-tight tracking-tight text-[var(--color-ink)]">{article.title}</h1>
        {article.aliases && <p className="line-clamp-1 text-[12px] text-[var(--color-ink-faint)]">Từ khoá: {article.aliases.join(', ')}</p>}
        <p className="rounded-2xl border-l-4 border-[var(--tint)] bg-[var(--color-surface-raised)] px-4 py-3 text-[15.5px] leading-relaxed text-[var(--color-ink)]">
          {article.summary}
        </p>
      </header>

      {sections.length > 1 && (
        <nav aria-label="Mục lục bài" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
          {sections.map((title, i) => (
            <button
              key={title + i}
              onClick={() => jump(i)}
              className="shrink-0 rounded-full bg-[color-mix(in_oklch,var(--tint)_14%,transparent)] px-3 py-1.5 text-[12.5px] font-medium text-[var(--color-ink)] transition-transform active:scale-95"
            >
              {title}
            </button>
          ))}
        </nav>
      )}

      <Markup source={article.body} />

      {(article.wiki || article.refs) && (
        <section className="space-y-1 text-[13px] text-[var(--color-ink-muted)]">
          <p className="font-semibold text-[var(--color-ink-faint)]">Nguồn tham khảo</p>
          <ul className="space-y-1">
            {article.wiki && (
              <li>
                <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(article.wiki)}`} target="_blank" rel="noreferrer" className="text-[var(--color-accent)] hover:underline">
                  Wikipedia — {article.wiki.replace(/_/g, ' ')}
                </a>
              </li>
            )}
            {article.refs?.map(([title, url]) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer" className="text-[var(--color-accent)] hover:underline">{title}</a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(prev || next) && (
        <nav className="grid grid-cols-2 gap-2">
          {[prev, next].map((a, i) =>
            a ? (
              <Link key={a.slug} to={`/theory/${a.slug}`} className={clsx('theory-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-2.5', i && 'col-start-2 text-right')}>
                <span className={clsx('flex items-center gap-1 text-[11px] uppercase tracking-wide text-[var(--color-ink-faint)]', i && 'justify-end')}>
                  {i ? <>Bài sau <ChevronRightIcon width={12} height={12} /></> : <><ChevronLeftIcon width={12} height={12} /> Bài trước</>}
                </span>
                <span className="line-clamp-1 text-[14px] font-medium text-[var(--color-ink)]">{a.title}</span>
              </Link>
            ) : null,
          )}
        </nav>
      )}

      {backlinks.length > 0 && <RelatedRow title="Các bài nhắc đến trang này" articles={backlinks} />}
      <RelatedRow title="Cùng chủ đề" articles={siblings.filter((a) => a !== article)} />
    </article>
  )
}

/** One horizontally scrolling row of article chips — keeps long related lists from growing the page. */
function RelatedRow({ title, articles }: { title: string; articles: Article[] }) {
  if (!articles.length) return null
  return (
    <section className="space-y-2 border-t border-[var(--color-border)] pt-4">
      <h2 className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
        {title} · {articles.length}
      </h2>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
        {articles.map((a) => (
          <Link
            key={a.slug}
            to={`/theory/${a.slug}`}
            style={tint(a.category)}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-[13px] text-[var(--color-ink)] transition-colors hover:border-[var(--tint)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tint)]" />
            {a.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
