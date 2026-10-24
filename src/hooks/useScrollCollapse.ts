import { useEffect, type RefObject } from 'react'

/**
 * Large-title collapse driven by scroll: writes --collapse (0 at the top, 1 once scrolled past `range`)
 * onto the scroller's [data-collapse] elements only, so the rest of the page never restyles. CSS in
 * layout/motion-nav.css fades the large title away and the small bar title in (.collapse-large/-in/-out).
 */
export function useScrollCollapse(ref: RefObject<HTMLElement | null>, range?: readonly [number, number], key?: unknown) {
  const [from, to] = range ?? [0, 0]
  useEffect(() => {
    const el = ref.current
    if (!el || to <= from) return
    let last = -1
    let frame = 0
    const apply = () => {
      frame = 0
      const c = Math.round(Math.min(1, Math.max(0, (el.scrollTop - from) / (to - from))) * 100) / 100
      if (c === last) return
      last = c
      for (const n of el.querySelectorAll<HTMLElement>('[data-collapse]')) n.style.setProperty('--collapse', String(c))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply)
    }
    apply()
    // Content that mounts later (a search clearing, a lazy block) starts from the current value.
    const mo = new MutationObserver(() => {
      last = -1
      onScroll()
    })
    mo.observe(el, { childList: true, subtree: true })
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      mo.disconnect()
      el.removeEventListener('scroll', onScroll)
    }
  }, [ref, from, to, key])
}
