import { useEffect, type RefObject } from 'react'

const enabled =
  typeof IntersectionObserver !== 'undefined' && typeof matchMedia !== 'undefined' && !matchMedia('(prefers-reduced-motion: reduce)').matches
// Elements are only hidden ahead of their reveal when this can actually reveal them (see motion-nav.css).
if (enabled) document.documentElement.classList.add('reveal-on')

const STAGGER = 55
const MAX_STEPS = 8

/**
 * Elements marked data-reveal under `root` rise into place the first time they scroll into view.
 * Those arriving together are staggered in document order. Watches the subtree, so content rendered
 * later (search results, an article body tagged after mount) is picked up without extra wiring.
 */
export function useReveal(root: RefObject<HTMLElement | null>, key?: unknown) {
  useEffect(() => {
    const el = root.current
    if (!el || !enabled) return
    let batch: HTMLElement[] = []
    let frame = 0
    const flush = () => {
      frame = 0
      batch.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      batch.forEach((n, i) => {
        n.style.setProperty('--reveal-delay', `${Math.min(i, MAX_STEPS) * STAGGER}ms`)
        n.setAttribute('data-shown', '')
      })
      batch = []
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          io.unobserve(e.target)
          batch.push(e.target as HTMLElement)
        }
        if (batch.length && !frame) frame = requestAnimationFrame(flush)
      },
      { rootMargin: '0px 0px -6% 0px' },
    )
    const watch = (n: Element) => {
      if (n.matches('[data-reveal]:not([data-shown])')) io.observe(n)
      n.querySelectorAll('[data-reveal]:not([data-shown])').forEach((c) => io.observe(c))
    }
    watch(el)
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        if (r.type === 'attributes') watch(r.target as Element)
        else r.addedNodes.forEach((n) => n instanceof Element && watch(n))
      }
    })
    mo.observe(el, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-reveal'] })
    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      mo.disconnect()
    }
  }, [root, key])
}
