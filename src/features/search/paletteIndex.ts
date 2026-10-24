// Loaded on demand the first time the palette opens: the library is large and lives in its own chunk.
import { ARTICLES, CATEGORIES } from '../theory/articles'
import { BOOKS } from '../curriculum/books'
import { CURRICULA } from '../curriculum/curricula'
import { fold } from './fold'

export interface Entry {
  kind: 'article' | 'book' | 'chapter'
  path: string
  title: string
  hint: string
  hue: number
  /** Folded title, aliases and summary, for matching. */
  t: string
  a: string
  s: string
}

const titleOf = new Map(ARTICLES.map((a) => [a.slug, a.title]))

const articles: Entry[] = ARTICLES.map((a) => {
  const cat = CATEGORIES[a.category]
  return { kind: 'article', path: `/theory/${a.slug}`, title: a.title, hint: cat.title, hue: cat.hue, t: fold(a.title), a: fold((a.aliases ?? []).join(' · ')), s: fold(a.summary) }
})

const books: Entry[] = [
  ...BOOKS.map((b) => ({ kind: 'book' as const, path: `/curriculum/${b.id}`, title: `${b.title}${b.volume ? ` — ${b.volume}` : ''}`, hint: 'Sách', hue: b.hue, t: fold(`${b.title} ${b.volume}`), a: fold(b.author), s: fold(b.subtitle) })),
  ...CURRICULA.map((c) => ({ kind: 'book' as const, path: `/curriculum/${c.id}/tong-quan`, title: c.title, hint: 'Giáo trình', hue: c.hue, t: fold(c.title), a: fold(c.author), s: fold(c.subtitle) })),
]

// Chapters only match by the book they sit in, so a search for a book also offers its chapters without crowding article results.
const chapters: Entry[] = BOOKS.flatMap((b) =>
  b.parts.flatMap((p) =>
    p.chapters.map((ch) => {
      const title = titleOf.get(ch.slug) ?? ch.slug
      return { kind: 'chapter' as const, path: `/curriculum/${b.id}/${ch.slug}`, title, hint: b.title, hue: b.hue, t: fold(title), a: fold(b.title), s: '' }
    }),
  ),
)

export const INDEX = { articles, books, chapters, all: [...books, ...articles, ...chapters] }
export const byPath = new Map(INDEX.all.map((e) => [e.path, e]))
export const randomArticle = () => articles[Math.floor(Math.random() * articles.length)]
