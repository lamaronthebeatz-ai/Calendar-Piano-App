import { useEffect, useRef, type RefObject } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUIStore } from '../store/uiStore'
import { skipNextTransition } from '../layout/viewTransitions'

/** Touches that start this close to the left edge can pull the page back. */
const EDGE = 24
/** Released past this share of the width, or flicked faster than FLICK px/ms, the page goes back. */
const COMMIT = 0.35
const FLICK = 0.5

export const isTouchUI = () => typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches
export const prefersReducedMotion = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

/** A dialog, sheet or the book reader owns the screen, so page gestures stay out of the way. */
export function overlayOpen() {
  const ui = useUIStore.getState()
  return ui.searchOpen || ui.quickActionsOpen || !!document.querySelector('[role="dialog"]:not([aria-modal="false"]), [aria-modal="true"]')
}
export const inBookReader = (pathname: string) => /^\/curriculum\/[^/]+\/[^/]+/.test(pathname) && !/\/(in|tong-quan)$/.test(pathname)

/**
 * iOS-style back gesture for phones: a swipe from the left edge drags the page (.vt-page) with the finger
 * over a darkening backdrop, and going far or fast enough steps back through history. Touch events rather
 * than pointer events, because only a non-passive touchmove can stop the page from scrolling meanwhile.
 */
export function useEdgeSwipeBack(root: RefObject<HTMLElement | null>) {
  const navigate = useNavigate()
  const location = useLocation()
  const where = useRef({ pathname: location.pathname, canGoBack: location.key !== 'default' })
  // Set when the page has slid away; the new page fades in once the location has actually changed.
  const arriving = useRef<HTMLElement | null>(null)

  useEffect(() => {
    where.current = { pathname: location.pathname, canGoBack: location.key !== 'default' }
    const old = arriving.current
    if (!old) return
    arriving.current = null
    old.style.transform = ''
    old.style.opacity = ''
    root.current?.querySelector('.swipe-scrim')?.remove()
    const page = root.current?.querySelector<HTMLElement>('.vt-page')
    page?.animate([{ opacity: 0, transform: 'translateX(-28px)' }, { opacity: 1, transform: 'none' }], { duration: 280, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' })
  }, [location, root])

  useEffect(() => {
    const el = root.current
    if (!el) return
    let mode: 'idle' | 'pending' | 'drag' = 'idle'
    let x0 = 0
    let y0 = 0
    let x = 0
    let v = 0
    let lastX = 0
    let lastT = 0
    let frame = 0
    let page: HTMLElement | null = null
    let scrim: HTMLElement | null = null
    let reduce = false

    const paint = () => {
      frame = 0
      if (!page || reduce) return
      const p = Math.min(1, x / el.clientWidth)
      page.style.transform = `translate3d(${x}px,0,0)`
      if (scrim) scrim.style.opacity = String(p * 0.55)
    }
    const reset = () => {
      if (page) page.style.transform = ''
      page?.classList.remove('is-swiping')
      scrim?.remove()
      page = scrim = null
    }

    const onStart = (e: TouchEvent) => {
      mode = 'idle'
      if (e.touches.length !== 1 || arriving.current) return
      const t = e.touches[0]
      if (t.clientX > EDGE || !isTouchUI() || !where.current.canGoBack) return
      if (inBookReader(where.current.pathname) || overlayOpen()) return
      mode = 'pending'
      x0 = lastX = t.clientX
      y0 = t.clientY
      lastT = e.timeStamp
      x = v = 0
    }
    const onMove = (e: TouchEvent) => {
      if (mode === 'idle') return
      const t = e.touches[0]
      const dx = t.clientX - x0
      const dy = t.clientY - y0
      if (mode === 'pending') {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return
        if (dx <= 0 || Math.abs(dy) > Math.abs(dx)) {
          mode = 'idle'
          return
        }
        mode = 'drag'
        reduce = prefersReducedMotion()
        page = el.querySelector<HTMLElement>('.vt-page')
        page?.classList.add('is-swiping')
        if (!reduce) {
          scrim = document.createElement('div')
          scrim.className = 'swipe-scrim'
          el.prepend(scrim)
        }
      }
      e.preventDefault()
      x = Math.max(0, dx)
      const dt = e.timeStamp - lastT
      if (dt > 0) v = 0.8 * ((t.clientX - lastX) / dt) + 0.2 * v
      lastX = t.clientX
      lastT = e.timeStamp
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onEnd = () => {
      if (mode !== 'drag') {
        mode = 'idle'
        return
      }
      mode = 'idle'
      cancelAnimationFrame(frame)
      frame = 0
      const w = el.clientWidth
      const commit = x > w * COMMIT || (v > FLICK && x > 30)
      if (reduce || !page) {
        reset()
        if (commit) {
          skipNextTransition()
          navigate(-1)
        }
        return
      }
      const target = commit ? w : 0
      const ms = Math.max(160, Math.min(320, (Math.abs(target - x) / Math.max(0.6, Math.abs(v))) | 0))
      const p = page
      const s = scrim
      p.animate([{ transform: `translate3d(${x}px,0,0)` }, { transform: `translate3d(${target}px,0,0)` }], { duration: ms, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }).onfinish = () => {
        if (commit) {
          p.style.transform = `translate3d(${w}px,0,0)`
          p.style.opacity = '0'
          p.classList.remove('is-swiping')
          arriving.current = p
          page = scrim = null
          skipNextTransition()
          navigate(-1)
          // Should the history step not happen after all, bring the page back rather than leave it hidden.
          setTimeout(() => {
            if (arriving.current !== p) return
            arriving.current = null
            p.style.transform = p.style.opacity = ''
            el.querySelector('.swipe-scrim')?.remove()
          }, 1200)
        } else reset()
      }
      if (s) s.animate([{ opacity: s.style.opacity }, { opacity: commit ? 0.55 : 0 }], { duration: ms, fill: 'forwards' })
    }

    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchmove', onMove, { passive: false })
    el.addEventListener('touchend', onEnd)
    el.addEventListener('touchcancel', onEnd)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove', onMove)
      el.removeEventListener('touchend', onEnd)
      el.removeEventListener('touchcancel', onEnd)
    }
  }, [root, navigate])
}
