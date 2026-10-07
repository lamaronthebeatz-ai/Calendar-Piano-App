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
}

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

export const articlesByCategory = (Object.keys(CATEGORIES) as Article['category'][]).map((id) => ({
  id,
  ...CATEGORIES[id],
  articles: ARTICLES.filter((a) => a.category === id && !a.unlisted),
}))

export function searchArticles(query: string) {
  const q = normalize(query)
  if (!q) return []
  return ARTICLES.filter((a) => normalize([a.title, ...(a.aliases ?? []), a.summary].join(' ')).includes(q))
}
