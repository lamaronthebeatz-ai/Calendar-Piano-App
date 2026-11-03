import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { CATEGORIES } from './articles'
import { articlesByCategory, findArticle, type ArticleMeta as Article } from './wiki'
import { useLibrary } from './library'
import { tint } from './categoryStyle'
import { branchesOf } from '../musicology/taxonomy'
import { PLACES_BY_SLUG } from '../musicology/places'
import { booksWithChapter } from '../curriculum/reader/model'

/** Where this article stands in its topic's roadmap: a row of notes, read ones gold, this one ringed. */
export function PathStrip({ article }: { article: Article }) {
  const { read } = useLibrary()
  const list = articlesByCategory.find((c) => c.id === article.category)?.articles ?? []
  const i = list.findIndex((a) => a.slug === article.slug)
  if (i < 0 || list.length < 3) return null
  const done = new Set(read)
  const from = Math.max(0, Math.min(i - 14, list.length - 29))
  const shown = list.slice(from, from + 29)
  return (
    <nav aria-label="Vị trí trong lộ trình" className="ps">
      <p className="ps-label">
        Lộ trình <Link to={`/theory?c=${article.category}`} className="ps-cat">{CATEGORIES[article.category].title}</Link> · bước <b>{i + 1}</b>/{list.length}
      </p>
      <div className="ps-staff">
        {from > 0 && <span className="ps-more">…</span>}
        {shown.map((a) => (
          <Link key={a.slug} to={`/theory/${a.slug}`} title={a.title} aria-label={a.title} aria-current={a.slug === article.slug ? 'page' : undefined} className={clsx('ps-note', done.has(a.slug) && 'is-read', a.slug === article.slug && 'is-here')} />
        ))}
        {from + shown.length < list.length && <span className="ps-more">…</span>}
      </div>
    </nav>
  )
}

const LINK = /\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g

function Lane({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="ls-lane">
      <p className="ls-name">{title}</p>
      <div className="ls-row no-scrollbar">{children}</div>
    </div>
  )
}

/**
 * Everything this article is tied to, as one small system of staves: the articles it leads to, the article itself,
 * the articles that lead to it, and where it appears elsewhere in the app (musicology branches, the map, the books).
 */
export function LinkStaff({ article, body, backlinks }: { article: Article; body: string; backlinks: Article[] }) {
  const out = [...new Set([...body.matchAll(LINK)].map((m) => m[1].trim()))]
    .filter((s) => s !== article.slug)
    .map((s) => findArticle(s))
    .filter((a): a is Article => !!a)
  const branches = branchesOf(article.slug).filter((b) => b.part !== 'intro')
  const places = PLACES_BY_SLUG.get(article.slug) ?? []
  const books = booksWithChapter(article.slug)
  const elsewhere = branches.length + places.length + books.length
  if (!out.length && !backlinks.length && !elsewhere) return null
  const chip = (a: Article) => (
    <Link key={a.slug} to={`/theory/${a.slug}`} style={tint(a.category) as CSSProperties} className="ls-chip">
      <span className="ls-dot" aria-hidden />
      {a.title}
    </Link>
  )
  return (
    <section aria-label="Liên kết của bài" className="ls">
      <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Khuông liên kết</h2>
      <div className="ls-system">
        {out.length > 0 && <Lane title={`Dẫn tới · ${out.length}`}>{out.slice(0, 30).map(chip)}</Lane>}
        <div className="ls-here">
          <span className="ls-head" aria-hidden />
          <span className="truncate">{article.title}</span>
        </div>
        {backlinks.length > 0 && <Lane title={`Được dẫn từ · ${backlinks.length}`}>{backlinks.slice(0, 30).map(chip)}</Lane>}
        {elsewhere > 0 && (
          <Lane title="Ở nơi khác trong app">
            {branches.map((b) => (
              <Link key={b.id} to={`/musicology/${b.id}`} onClick={(e) => e.currentTarget.querySelector('.ls-txt')?.classList.add('vt-bt')} className="ls-chip is-other">
                <span className="ls-dot" aria-hidden />
                <span className="ls-txt">{b.title}</span>
                <span className="ls-kind">Âm nhạc học</span>
              </Link>
            ))}
            {places.map((p) => (
              <Link key={p.id} to={`/musicology/ban-do?p=${p.id}`} className="ls-chip is-other">
                <span className="ls-dot" aria-hidden />
                {p.name}
                <span className="ls-kind">Bản đồ</span>
              </Link>
            ))}
            {books.map(({ book, chapter }) => (
              <Link key={book.id} to={`/curriculum/${book.id}/${chapter.key}`} className="ls-chip is-other">
                <span className="ls-dot" aria-hidden />
                {book.title}
                <span className="ls-kind">Sách · chương {chapter.n}</span>
              </Link>
            ))}
          </Lane>
        )}
      </div>
    </section>
  )
}
