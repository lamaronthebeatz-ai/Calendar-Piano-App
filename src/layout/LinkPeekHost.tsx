import { lazy, Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const LinkPeek = lazy(() => import('../features/theory/LinkPeek'))

/**
 * Tapping a wiki link ([[slug]]) anywhere in the app opens a short card about the target first; the card has the
 * button that goes on to the article. Kept tiny here — the card and the library index load on the first tap.
 */
export function LinkPeekHost() {
  const [peek, setPeek] = useState<{ slug?: string; grove?: string; at: string }>()
  const { pathname, search } = useLocation()
  // not location.key: every entry without history state (first load, a typed hash) shares the key "default"
  const key = pathname + search
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a.wiki-link[data-slug], a.wiki-link[data-grove]')
      if (!link || link.closest('.lpk')) return
      e.preventDefault()
      e.stopPropagation()
      setPeek({ slug: link.dataset.slug, grove: link.dataset.grove, at: key })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [key])
  // the card belongs to the page it was opened on: Back or any other navigation leaves it behind
  if (!peek || peek.at !== key) return null
  return (
    <Suspense fallback={null}>
      <LinkPeek slug={peek.slug} grove={peek.grove} onClose={() => setPeek(undefined)} />
    </Suspense>
  )
}
