import { useEffect, useState } from 'react'

/** slug → [thumbnail URL, 1 if it is a drawing to show whole on white]; worked out ahead of time by a script, so no lookup happens in the app. */
export type Thumbs = Record<string, [string, 1?]>

let cache: Thumbs | undefined
let pending: Promise<Thumbs> | undefined

/** The article thumbnails, loaded once on first use (the list is a separate chunk). */
export function useThumbs() {
  const [thumbs, setThumbs] = useState(cache)
  useEffect(() => {
    if (cache) return
    let live = true
    pending ??= import('./articleThumbs.json').then((m) => (cache = m.default as unknown as Thumbs))
    pending.then((t) => live && setThumbs(t)).catch(() => {})
    return () => {
      live = false
    }
  }, [])
  return thumbs
}
