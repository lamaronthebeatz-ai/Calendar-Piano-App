import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { playSequence, type Step } from './audio'
import './motion-music.css'

export const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches

/** Light the elements of one step (`data-step="i"`), unlighting the previous ones; -1 clears. */
export function lightStep(root: Element | null, i: number, attr = 'step') {
  if (!root) return
  root.querySelectorAll('.is-on').forEach((el) => el.classList.remove('is-on'))
  if (i >= 0) root.querySelectorAll(`[data-${attr}="${i}"]`).forEach((el) => el.classList.add('is-on'))
}

/** Play/stop state for a diagram; playback stops when the diagram unmounts. */
export function usePlayer() {
  const [playing, setPlaying] = useState(false)
  const stop = useRef<(() => void) | null>(null)
  useEffect(() => () => stop.current?.(), [])
  const toggle = (steps: Step[], cb: { onStep?: (i: number) => void; onFrame?: (t: number) => void } = {}) => {
    if (stop.current) {
      stop.current()
      return
    }
    setPlaying(true)
    stop.current = playSequence(steps, {
      ...cb,
      onEnd: () => {
        stop.current = null
        setPlaying(false)
      },
    })
  }
  return { playing, toggle }
}

/**
 * Arms a diagram to draw itself in when it scrolls into view: `mm-armed` hides its parts (CSS, screen only),
 * `is-in` plays the entrance. Without IntersectionObserver or with reduced motion, nothing is hidden.
 */
export function useReveal<T extends Element>(): RefObject<T | null> {
  const ref = useRef<T>(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver !== 'function' || reducedMotion()) return
    el.classList.add('mm-armed')
    let done: ReturnType<typeof setTimeout> | undefined
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        el.classList.add('is-in')
        io.disconnect()
        done = setTimeout(() => el.classList.add('mm-done'), 2600)
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(done)
    }
  }, [])
  return ref
}
