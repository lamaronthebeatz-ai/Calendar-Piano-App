import { useEffect, useRef, type RefObject } from 'react'
import { isTouchUI, overlayOpen, prefersReducedMotion } from './useEdgeSwipeBack'

type Options = {
  enabled: boolean
  /** Moves down with the finger. */
  content: RefObject<HTMLElement | null>
  /** Shows the pull: opacity and rotation follow it, .is-armed once past the threshold, .is-firing on release. */
  indicator: RefObject<HTMLElement | null>
  onTrigger: () => void
  threshold?: number
}

/**
 * Pull down at the very top of a scroller to run an action (touch only). The scroller is marked
 * data-pull so the rubber band (useRubberBand) leaves its top edge to this.
 */
export function usePullAction(scroller: RefObject<HTMLElement | null>, { enabled, content, indicator, onTrigger, threshold = 72 }: Options) {
  const trigger = useRef(onTrigger)
  useEffect(() => {
    trigger.current = onTrigger
  })

  useEffect(() => {
    const el = scroller.current
    if (!enabled || !el || !isTouchUI()) return
    el.setAttribute('data-pull', '')
    const reduce = prefersReducedMotion()
    const span = threshold * 1.9
    // Exponential damping: ~130px of finger travel reaches the default threshold.
    const damp = (dy: number) => span * (1 - Math.exp(-dy / (threshold * 2.3)))
    let mode: 'idle' | 'pending' | 'pull' = 'idle'
    let x0 = 0
    let y0 = 0
    let d = 0
    let frame = 0
    const paint = () => {
      frame = 0
      const ind = indicator.current
      const p = Math.min(1, d / threshold)
      if (content.current && !reduce) content.current.style.transform = `translate3d(0,${d}px,0)`
      if (ind) {
        ind.style.opacity = String(p)
        ind.style.transform = `translate3d(-50%, ${(reduce ? threshold : d) * 0.55 - 18}px, 0) rotate(${reduce ? 0 : d * 4}deg) scale(${0.55 + 0.45 * p})`
        ind.classList.toggle('is-armed', d >= threshold)
      }
    }
    const onStart = (e: TouchEvent) => {
      mode = 'idle'
      if (e.touches.length !== 1 || el.scrollTop > 0 || overlayOpen()) return
      mode = 'pending'
      x0 = e.touches[0].clientX
      y0 = e.touches[0].clientY
    }
    const onMove = (e: TouchEvent) => {
      if (mode === 'idle') return
      const dy = e.touches[0].clientY - y0
      if (mode === 'pending') {
        const dx = e.touches[0].clientX - x0
        if (Math.abs(dy) < 6 && Math.abs(dx) < 6) return
        if (dy <= 0 || Math.abs(dx) > Math.abs(dy) || el.scrollTop > 0) {
          mode = 'idle'
          return
        }
        mode = 'pull'
        y0 = e.touches[0].clientY
        indicator.current?.classList.remove('is-firing')
      }
      e.preventDefault()
      d = damp(Math.max(0, e.touches[0].clientY - y0))
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onEnd = () => {
      if (mode !== 'pull') {
        mode = 'idle'
        return
      }
      mode = 'idle'
      cancelAnimationFrame(frame)
      frame = 0
      const fire = d >= threshold
      const from = d
      d = 0
      const c = content.current
      if (c) {
        c.style.transform = ''
        if (!reduce) c.animate([{ transform: `translate3d(0,${from}px,0)` }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' })
      }
      const ind = indicator.current
      if (ind) {
        ind.classList.remove('is-armed')
        if (fire) {
          ind.classList.add('is-firing')
          ind.style.opacity = ''
        } else {
          ind.style.opacity = '0'
          ind.style.transform = ''
        }
      }
      if (fire) trigger.current()
    }
    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchmove', onMove, { passive: false })
    el.addEventListener('touchend', onEnd)
    el.addEventListener('touchcancel', onEnd)
    return () => {
      cancelAnimationFrame(frame)
      el.removeAttribute('data-pull')
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', onEnd)
      el.removeEventListener('touchcancel', onEnd)
    }
  }, [scroller, content, indicator, enabled, threshold])
}
