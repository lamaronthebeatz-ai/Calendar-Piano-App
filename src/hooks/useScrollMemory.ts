import { useLayoutEffect, type RefObject } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Scroll offsets per history entry (react-router's location.key), so going back returns the
 * reader to where they were. Pages scroll inside their own containers, which the browser's
 * native scroll restoration never sees. Mirrored to sessionStorage so a reload keeps them.
 */
const STORE = 'scroll-positions'
const positions: Map<string, number> = (() => {
  try {
    return new Map(JSON.parse(sessionStorage.getItem(STORE) ?? '[]'))
  } catch {
    return new Map()
  }
})()

function persist() {
  try {
    sessionStorage.setItem(STORE, JSON.stringify([...positions].slice(-150)))
  } catch {
    // Storage unavailable: positions still live for this session in memory.
  }
}
addEventListener('pagehide', persist)

/** How long to keep re-applying the offset while late content (images, lazy blocks) grows the page. */
const RESTORE_MS = 2000

export function useScrollMemory(ref: RefObject<HTMLElement | null>) {
  const { key } = useLocation()
  const navigation = useNavigationType()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const target = navigation === 'POP' ? positions.get(key) : undefined
    let frame = 0
    const stop = () => cancelAnimationFrame(frame)
    const inputs = ['wheel', 'touchstart', 'pointerdown', 'keydown'] as const
    if (target) {
      const until = performance.now() + RESTORE_MS
      const apply = () => {
        el.scrollTo({ top: target, behavior: 'instant' })
        if (Math.abs(el.scrollTop - target) > 1 && performance.now() < until) frame = requestAnimationFrame(apply)
      }
      apply()
      // The reader takes over as soon as they touch the page.
      for (const t of inputs) el.addEventListener(t, stop, { passive: true, once: true })
    }
    const save = () => positions.set(key, el.scrollTop)
    el.addEventListener('scroll', save, { passive: true })
    return () => {
      stop()
      el.removeEventListener('scroll', save)
      for (const t of inputs) el.removeEventListener(t, stop)
    }
  }, [ref, key, navigation])
}
