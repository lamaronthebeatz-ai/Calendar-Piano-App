import { lazy, Suspense, useEffect, useState } from 'react'

const LinkPeek = lazy(() => import('../features/theory/LinkPeek'))

/**
 * Tapping a wiki link ([[slug]]) anywhere in the app opens a short card about the target first; the card has the
 * button that goes on to the article. Kept tiny here — the card and the library index load on the first tap.
 */
export function LinkPeekHost() {
  const [slug, setSlug] = useState<string>()
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a.wiki-link[data-slug]')
      if (!link || link.closest('.lpk')) return
      e.preventDefault()
      e.stopPropagation()
      setSlug(link.dataset.slug)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])
  if (!slug) return null
  return (
    <Suspense fallback={null}>
      <LinkPeek slug={slug} onClose={() => setSlug(undefined)} />
    </Suspense>
  )
}
