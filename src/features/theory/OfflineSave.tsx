import { useEffect, useState } from 'react'
import { findArticle } from './wiki'

/**
 * Articles are not precached (the library would make installing ever slower); each is cached by the service worker
 * when read. This saves a whole topic or book in one go: fetching an article's file is enough for the worker to keep
 * it ('library' cache in vite.config.ts). Whether it is all saved is read from that cache.
 */
const url = (slug: string) => {
  const a = findArticle(slug)
  return a ? `${import.meta.env.BASE_URL}content/${a.slug}.${a.h}.json` : null
}

async function savedCount(slugs: string[]) {
  if (!('caches' in window)) return 0
  const cache = await caches.open('library')
  const hits = await Promise.all(slugs.map((s) => url(s)).map((u) => (u ? cache.match(u) : undefined)))
  return hits.filter(Boolean).length
}

/** Fetches every article; resolves to how many arrived. */
async function save(slugs: string[], onStep: (done: number) => void) {
  let done = 0
  let ok = 0
  const queue = [...slugs]
  // a few at a time: fast on a good connection without flooding a slow one
  await Promise.all(
    Array.from({ length: 6 }, async () => {
      for (let s = queue.shift(); s; s = queue.shift()) {
        const u = url(s)
        // a real request even when the text is already in memory, so it passes through the service worker
        if (u && (await fetch(u).then((r) => r.ok, () => false))) ok++
        onStep(++done)
      }
    }),
  )
  return ok
}

export function OfflineSave({ slugs, className = '' }: { slugs: string[]; className?: string }) {
  const [saved, setSaved] = useState<number | null>(null)
  const [busy, setBusy] = useState<number | null>(null)
  const key = slugs.join()
  useEffect(() => {
    let live = true
    savedCount(slugs).then((n) => live && setSaved(n), () => {})
    return () => {
      live = false
    }
    // slugs is a fresh array each render; its contents are the key
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  // no service worker (dev, private browsing): nothing would be kept
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller || saved === null) return null
  const all = saved >= slugs.length
  const run = async () => {
    setBusy(0)
    const ok = await save(slugs, setBusy)
    // the worker writes to its cache just after answering, so the cache may still lag behind by a file or two
    setSaved(Math.max(ok, await savedCount(slugs)))
    setBusy(null)
  }
  return (
    <button type="button" onClick={run} disabled={all || busy !== null} className={`offline-save ${className}`}>
      {busy !== null ? `Đang lưu ${busy}/${slugs.length}…` : all ? '✓ Đã lưu để đọc offline' : saved > 0 ? `Lưu nốt để đọc offline (${saved}/${slugs.length})` : `Lưu ${slugs.length} bài để đọc offline`}
    </button>
  )
}
