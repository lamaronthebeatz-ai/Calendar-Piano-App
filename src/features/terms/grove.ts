import groveIndexUrl from './grove-index.json?url'
import { findArticle, normalize, type ArticleMeta } from '../theory/wiki'

/** One headword of Grove (scripts/grove/build.py): id, headword, volume, page, piece, kind, appendix, Vietnamese title + gist. */
export interface GroveHead {
  id: string
  h: string
  v: number
  p: number
  s: string
  k: 'term' | 'person' | 'work' | 'institution'
  a?: 1
  t?: string
  g?: string
}

export const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V']
/** The address of one entry: the dictionary opens it at the top. */
export const groveHref = (id: string) => `/terms?g=${encodeURIComponent(id)}`

let index: Promise<GroveHead[]> | undefined
/** The headword index, fetched once (a precached asset). */
export const loadGrove = () => (index ??= fetch(groveIndexUrl).then((r) => (r.ok ? r.json() : [])).catch(() => []))

/** Grove terms named exactly like the article: its title or its English / Italian / French / German name. */
export function groveTermsFor(article: ArticleMeta, heads: GroveHead[]) {
  const names = [article.title, ...(article.xl ?? '').split('|').filter((p) => /^(en|it|fr|de):/.test(p)).map((p) => p.slice(3))]
  const want = new Set(names.map((n) => normalize(n.replace(/\(.*?\)/g, ''))).filter((n) => n.length > 2))
  return heads.filter((h) => h.k === 'term' && want.has(normalize(h.h))).sort((a, b) => Number(!!b.t) - Number(!!a.t)).slice(0, 2)
}

/** The library article a Grove term speaks about: by its headword, its Vietnamese title or the name in its brackets. */
export function articleForGrove(h: GroveHead): ArticleMeta | undefined {
  if (h.k !== 'term') return undefined
  const t = h.t ?? ''
  for (const c of [h.h, t.replace(/\(.*?\)/g, ''), ...[...t.matchAll(/\(([^)]*)\)/g)].map((m) => m[1])]) {
    const name = c.trim()
    if (name.length < 3) continue
    const a = findArticle(name)
    if (a && !a.person) return a
  }
  return undefined
}
