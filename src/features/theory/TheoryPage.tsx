import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeftIcon, BookIcon, SearchIcon } from '../../components/icons'
import { EmptyState } from '../../components/EmptyState'
import { CATEGORIES } from './articles'
import { Markup } from './Markup'
import { articlesByCategory, findArticle, getBacklinks, searchArticles, type Article } from './wiki'

export function TheoryPage() {
  const { slug } = useParams()
  const article = slug ? findArticle(slug) : undefined

  return (
    // Keyed by slug so following a link remounts the scroller at the top.
    <div key={slug} className="h-full overflow-y-auto pb-24 lg:pb-6">
      <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        {slug && (
          <Link to="/theory" aria-label="Mục lục" className="-ml-1 rounded-lg p-1 text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)]">
            <ArrowLeftIcon width={18} height={18} />
          </Link>
        )}
        <h1 className="text-[17px] font-semibold text-[var(--color-ink)]">Lý thuyết âm nhạc</h1>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-5 lg:px-6">
        {!slug ? (
          <Index />
        ) : article ? (
          <ArticleView article={article} />
        ) : (
          <EmptyState icon={<BookIcon width={30} height={30} />} title="Chưa có bài viết này" description={`“${slug}” chưa được viết.`} />
        )}
      </div>
    </div>
  )
}

function Index() {
  const [query, setQuery] = useState('')
  const results = searchArticles(query)

  return (
    <div className="space-y-6">
      <label className="flex h-11 items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 text-[var(--color-ink-faint)]">
        <SearchIcon width={16} height={16} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm: quãng, hợp âm, khoá Sol…"
          className="h-full flex-1 bg-transparent text-[15px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-faint)]"
        />
      </label>

      {query ? (
        results.length ? <ArticleList articles={results} /> : <p className="text-sm text-[var(--color-ink-muted)]">Không tìm thấy bài nào.</p>
      ) : (
        articlesByCategory.map((c) => (
          <section key={c.id} className="space-y-2">
            <div>
              <h2 className="text-[15px] font-semibold text-[var(--color-ink)]">{c.title}</h2>
              <p className="text-[13px] text-[var(--color-ink-muted)]">{c.description}</p>
            </div>
            <ArticleList articles={c.articles} />
          </section>
        ))
      )}
    </div>
  )
}

function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <ul className="divide-y divide-[var(--color-border)] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      {articles.map((a) => (
        <li key={a.slug}>
          <Link to={`/theory/${a.slug}`} className="block px-4 py-3 hover:bg-[var(--color-surface-sunken)]">
            <p className="text-[15px] font-medium text-[var(--color-ink)]">{a.title}</p>
            <p className="line-clamp-1 text-[13px] text-[var(--color-ink-muted)]">{a.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ArticleView({ article }: { article: Article }) {
  const backlinks = getBacklinks(article.slug)
  const siblings = articlesByCategory.find((c) => c.id === article.category)!.articles.filter((a) => a.slug !== article.slug)

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-[12px] font-medium uppercase tracking-wide text-[var(--color-accent)]">{CATEGORIES[article.category].title}</p>
        <h1 className="text-[26px] font-semibold leading-tight tracking-tight text-[var(--color-ink)]">{article.title}</h1>
        {article.aliases && <p className="text-[13px] text-[var(--color-ink-faint)]">Từ khoá: {article.aliases.join(', ')}</p>}
        <p className="text-[16px] leading-relaxed text-[var(--color-ink)]">{article.summary}</p>
      </header>

      <Markup source={article.body} />

      {backlinks.length > 0 && <RelatedSection title="Các bài nhắc đến trang này" articles={backlinks} />}
      {siblings.length > 0 && <RelatedSection title="Cùng chủ đề" articles={siblings} />}
    </article>
  )
}

function RelatedSection({ title, articles }: { title: string; articles: Article[] }) {
  return (
    <section className="space-y-2 border-t border-[var(--color-border)] pt-4">
      <h2 className="text-[13px] font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {articles.map((a) => (
          <Link key={a.slug} to={`/theory/${a.slug}`} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[13px] text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]">
            {a.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
