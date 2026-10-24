import { useEffect, type RefObject } from 'react'

/**
 * Gentle parallax inside a scroller. An element with data-parallax="<factor>" drifts against its parent
 * by the parent's distance from the middle of the view; data-parallax-child="<selector>" moves a child
 * instead (for markup owned elsewhere). data-parallax-max caps the drift: below 1 a share of the parent's
 * height (needs that much overscan in CSS), otherwise pixels. Uses the individual `translate` property so
 * it never fights the element's own transform animations.
 */
export function useParallax(ref: RefObject<HTMLElement | null>, key?: unknown) {
  useEffect(() => {
    const root = ref.current
    if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const apply = () => {
      frame = 0
      const view = root.getBoundingClientRect()
      const mid = view.top + view.height / 2
      for (const el of root.querySelectorAll<HTMLElement>('[data-parallax]')) {
        const box = el.dataset.parallaxChild ? el : el.parentElement
        const moved = el.dataset.parallaxChild ? el.querySelector<HTMLElement>(el.dataset.parallaxChild) : el
        if (!box || !moved) continue
        const r = box.getBoundingClientRect()
        if (r.bottom < view.top - 100 || r.top > view.bottom + 100) continue
        const cap = Number(el.dataset.parallaxMax ?? 24)
        const max = cap < 1 ? cap * r.height : cap
        const shift = Math.max(-max, Math.min(max, (mid - (r.top + r.height / 2)) * Number(el.dataset.parallax)))
        moved.style.translate = `0 ${shift.toFixed(1)}px`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply)
    }
    apply()
    const mo = new MutationObserver(onScroll)
    mo.observe(root, { childList: true, subtree: true })
    root.addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      mo.disconnect()
      root.removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
    }
  }, [ref, key])
}
