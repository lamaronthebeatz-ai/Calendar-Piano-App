import { useEffect, useState } from 'react'

/**
 * slug → [thumbnail URL, 1 if it is a drawing to show whole on white]. Worked out ahead of time (the article's own
 * Wikipedia/Commons picture, checked by eye against its title), so no lookup happens in the app. URLs are stored
 * with a short prefix code to keep the file small.
 */
export type Thumbs = Record<string, [string, 1?]>

const PREFIX: Record<string, string> = { '~': 'https://upload.wikimedia.org/wikipedia/', '`': 'https://thumb.wikimedia.org/wikipedia/', '!': 'https://commons.wikimedia.org/wiki/Special:FilePath/', '^': 'https://i.ytimg.com/vi/' }
const expand = (raw: Record<string, [string, 1?]>): Thumbs =>
  Object.fromEntries(Object.entries(raw).map(([slug, [u, d]]) => [slug, [PREFIX[u[0]] ? PREFIX[u[0]] + u.slice(1) : u, d]]))

let cache: Thumbs | undefined
let pending: Promise<Thumbs> | undefined

/** The article thumbnails, loaded once on first use (the list is a separate chunk). */
export function useThumbs() {
  const [thumbs, setThumbs] = useState(cache)
  useEffect(() => {
    if (cache) return
    let live = true
    pending ??= import('./articleThumbs.json').then((m) => (cache = expand(m.default as unknown as Record<string, [string, 1?]>)))
    pending.then((t) => live && setThumbs(t)).catch(() => {})
    return () => {
      live = false
    }
  }, [])
  return thumbs
}
