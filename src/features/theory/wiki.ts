import { ARTICLES, CATEGORIES } from './articles'

/**
 * A theory article. `body` uses a tiny line-based markup (see Markup.tsx):
 *   ## Heading · - list item · | table | row | · ::directive args
 *   inline: **bold**, [[slug]] or [[slug|label]] (wiki link)
 */
export interface Article {
  slug: string
  title: string
  category: keyof typeof CATEGORIES
  /** Extra keywords that resolve to this article in links and search. */
  aliases?: string[]
  summary: string
  body: string
  /** English Wikipedia article title, shown as the reference for further reading. */
  wiki?: string
  /** Reachable by links and search but not listed in the index (e.g. one page per composer). */
  unlisted?: boolean
  /** Further sources beyond Wikipedia, as [title, url]. */
  refs?: [string, string][]
  /** People pages: Wikipedia titles to try for a portrait (the first with a free lead image wins), and their years to check it against. */
  portrait?: { titles: string[]; years?: string }
  /** Other categories whose index also lists this article (it still lives in `category`). */
  also?: (keyof typeof CATEGORIES)[]
}

/** Section titles of an article, in order (Markup gives them ids sec-0, sec-1…). */
export const headings = (body: string) => [...body.matchAll(/^\s*## (.+)$/gm)].map((m) => m[1].trim())

export const normalize = (s: string) =>
  s.normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim()

const byKey = new Map<string, Article>()
for (const a of ARTICLES) for (const k of [a.title, ...(a.aliases ?? [])]) byKey.set(normalize(k), a)
// Slugs win over titles/aliases that normalise to the same key (e.g. "trùng âm" vs "trung âm").
for (const a of ARTICLES) byKey.set(a.slug, a)

/** Resolve a slug, title or alias to its article. */
export const findArticle = (key: string) => byKey.get(normalize(key))

const LINK_RE = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g

/** slug → articles that link to it (Wikipedia's "What links here"). */
const backlinks = new Map<string, Article[]>()
for (const a of ARTICLES) {
  const targets = new Set([...a.body.matchAll(LINK_RE)].map((m) => findArticle(m[1])?.slug))
  for (const t of targets) if (t && t !== a.slug) backlinks.set(t, [...(backlinks.get(t) ?? []), a])
}
export const getBacklinks = (slug: string) => backlinks.get(slug) ?? []

/** Library-wide totals shown on the index. */
export const libraryStats = {
  links: [...backlinks.values()].reduce((n, list) => n + list.length, 0),
  figures: ARTICLES.reduce((n, a) => n + (a.body.match(/^\s*::/gm)?.length ?? 0), 0),
}

/** Rough reading time in minutes (about 200 words a minute). */
export const readingMinutes = (a: Article) => Math.max(1, Math.round(a.body.split(/\s+/).length / 200))

export const articlesByCategory = (Object.keys(CATEGORIES) as Article['category'][]).map((id) => ({
  id,
  ...CATEGORIES[id],
  // Own articles first, then ones cross-listed here from other categories.
  articles: [
    ...ARTICLES.filter((a) => a.category === id && !a.unlisted),
    ...ARTICLES.filter((a) => a.category !== id && a.also?.includes(id)),
  ],
}))

const bodies = new Map<Article, string>()

/**
 * Ranked search: title matches first, then aliases, the summary, and finally the body text,
 * so a query always surfaces the article *about* it before articles that merely mention it.
 */
export function searchArticles(query: string) {
  const q = normalize(query)
  if (!q) return []
  const scored: [number, Article][] = []
  for (const a of ARTICLES) {
    const title = normalize(a.title)
    let score = title.startsWith(q) ? 0 : title.includes(q) ? 1 : (a.aliases ?? []).some((k) => normalize(k).includes(q)) ? 2 : normalize(a.summary).includes(q) ? 3 : -1
    if (score < 0 && q.length > 2) {
      if (!bodies.has(a)) bodies.set(a, normalize(a.body))
      if (bodies.get(a)!.includes(q)) score = 4
    }
    if (score >= 0) scored.push([score + (a.unlisted ? 0.5 : 0), a])
  }
  return scored.sort((x, y) => x[0] - y[0]).map(([, a]) => a)
}
