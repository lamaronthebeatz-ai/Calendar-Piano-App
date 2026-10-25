import { useEffect, useState } from 'react'
import { findArticle, type Article, type ArticleMeta } from './wiki'

/** An article's text, fetched on demand: the JSON files under content/ that scripts/theory-content.ts writes. */
export type ArticleText = Pick<Article, 'body' | 'refs'> & { backlinks?: string[] }

const cache = new Map<string, ArticleText>()
const pending = new Map<string, Promise<ArticleText>>()

/** The text if it has already arrived (no request). */
export const peekText = (slug: string) => cache.get(slug)

export function loadText(slug: string): Promise<ArticleText> {
  const hit = cache.get(slug)
  if (hit) return Promise.resolve(hit)
  const a = findArticle(slug)
  if (!a) return Promise.reject(new Error(`Không có bài ${slug}`))
  let p = pending.get(a.slug)
  if (!p) {
    p = fetch(`${import.meta.env.BASE_URL}content/${a.slug}.${a.h}.json`)
      .then((r) => (r.ok ? (r.json() as Promise<ArticleText>) : Promise.reject(new Error(`${r.status} ${a.slug}`))))
      .then((t) => {
        cache.set(a.slug, t)
        return t
      })
      .finally(() => pending.delete(a.slug))
    pending.set(a.slug, p)
  }
  return p
}

/** Starts fetching in the background (next chapter, a hovered link); errors are left for when it is really needed. */
export function prefetchText(...slugs: string[]) {
  for (const s of slugs) if (s && !cache.has(s)) loadText(s).catch(() => {})
}

export const loadTexts = (slugs: string[]) => Promise.all(slugs.map(loadText))

/** The full article (index + text) once its text is here; `error` when it could not be fetched (offline, never cached). */
export function useArticle(meta: ArticleMeta | undefined): { article?: ArticleMeta & ArticleText; error?: boolean; retry: () => void } {
  const slug = meta?.slug
  const [state, setState] = useState<{ slug?: string; text?: ArticleText; error?: boolean }>(() => ({ slug, text: slug ? peekText(slug) : undefined }))
  const [attempt, setAttempt] = useState(0)
  const current = state.slug === slug ? state : { slug, text: slug ? peekText(slug) : undefined }
  useEffect(() => {
    if (!slug || peekText(slug)) return
    let live = true
    loadText(slug).then(
      (text) => live && setState({ slug, text }),
      () => live && setState({ slug, error: true }),
    )
    return () => {
      live = false
    }
  }, [slug, attempt])
  return {
    article: meta && current.text ? { ...meta, ...current.text } : undefined,
    error: current.error,
    retry: () => {
      setState({ slug })
      setAttempt((n) => n + 1)
    },
  }
}
