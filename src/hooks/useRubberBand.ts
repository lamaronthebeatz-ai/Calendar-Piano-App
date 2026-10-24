import { useEffect, type RefObject } from 'react'
import { useLocation } from 'react-router-dom'
import { inBookReader, isTouchUI, overlayOpen, prefersReducedMotion } from './useEdgeSwipeBack'

/** Apple's WebKit bounces scroll containers natively; everywhere else the app draws its own. */
const nativeBounce = () => /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 1)

/** Resistance curve: the further the pull, the less the page follows (approaches `max`). */
export const rubber = (d: number, max: number) => max * (1 - 1 / ((Math.abs(d) * 0.55) / max + 1)) * Math.sign(d)

function scrollerOf(node: EventTarget | null, stop: HTMLElement) {
  for (let el = node instanceof Element ? node : null; el && el !== stop; el = el.parentElement) {
    if (!(el instanceof HTMLElement)) continue
    if (el.scrollHeight > el.clientHeight + 1 && /(auto|scroll)/.test(getComputedStyle(el).overflowY)) return el
  }
  return null
}

/**
 * A soft elastic overscroll at the top and bottom of page scrollers on touch screens without native
 * bounce. The container's own overscroll effect (Android glow / pull-to-refresh) is switched off via
 * html.rubber-band in motion-nav.css. A scroller marked data-pull handles its own top edge.
 */
export function useRubberBand(root: RefObject<HTMLElement | null>) {
  const { pathname } = useLocation()
  useEffect(() => {
    const el = root.current
    if (!el || nativeBounce() || !isTouchUI() || prefersReducedMotion() || inBookReader(pathname)) return
    document.documentElement.classList.add('rubber-band')
    let target: HTMLElement | null = null
    let mode: 'idle' | 'pending' | 'pull' = 'idle'
    let edge: 'top' | 'bottom' | 'both' = 'top'
    let y0 = 0
    let x0 = 0
    let d = 0
    let frame = 0
    const paint = () => {
      frame = 0
      if (target) target.style.transform = d ? `translate3d(0,${d}px,0)` : ''
    }
    const onStart = (e: TouchEvent) => {
      mode = 'idle'
      if (e.touches.length !== 1 || overlayOpen()) return
      target = scrollerOf(e.target, el)
      if (!target || target.closest('[role="dialog"], [data-no-rubber]')) return
      const top = target.scrollTop <= 0 && !target.hasAttribute('data-pull')
      const bottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1
      if (!top && !bottom) return
      edge = top && bottom ? 'both' : top ? 'top' : 'bottom'
      mode = 'pending'
      y0 = e.touches[0].clientY
      x0 = e.touches[0].clientX
    }
    const onMove = (e: TouchEvent) => {
      if (mode === 'idle' || !target) return
      const dy = e.touches[0].clientY - y0
      if (mode === 'pending') {
        const dx = e.touches[0].clientX - x0
        if (Math.abs(dy) < 6 && Math.abs(dx) < 6) return
        const ok = Math.abs(dy) > Math.abs(dx) && ((dy > 0 && edge !== 'bottom') || (dy < 0 && edge !== 'top'))
        if (!ok) {
          mode = 'idle'
          return
        }
        mode = 'pull'
        y0 = e.touches[0].clientY
      }
      e.preventDefault()
      d = rubber(e.touches[0].clientY - y0, 110)
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onEnd = () => {
      if (mode !== 'pull' || !target) {
        mode = 'idle'
        return
      }
      mode = 'idle'
      cancelAnimationFrame(frame)
      frame = 0
      const t = target
      const from = d
      d = 0
      t.style.transform = ''
      t.animate([{ transform: `translate3d(0,${from}px,0)` }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(0.18, 0.89, 0.32, 1.12)' })
    }
    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchmove', onMove, { passive: false })
    el.addEventListener('touchend', onEnd)
    el.addEventListener('touchcancel', onEnd)
    return () => {
      cancelAnimationFrame(frame)
      if (target) target.style.transform = ''
      document.documentElement.classList.remove('rubber-band')
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', onEnd)
      el.removeEventListener('touchcancel', onEnd)
    }
  }, [root, pathname])
}
