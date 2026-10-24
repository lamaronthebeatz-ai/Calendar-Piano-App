import { useLayoutEffect, useRef, type RefObject } from 'react'

/** Shared motion helpers: last pointer position, reduced-motion check, haptics, spring easing, FLIP. */

const last = { x: -1, y: -1, t: 0 }
if (typeof document !== 'undefined') {
  // Capture phase so stopPropagation elsewhere never hides the origin of a tap.
  document.addEventListener('pointerdown', (e) => {
    last.x = e.clientX
    last.y = e.clientY
    last.t = performance.now()
  }, { capture: true, passive: true })
}

/** Where the user last pressed, if it was recent enough to explain what is opening now. */
export function lastPointer(maxAge = 1200): { x: number; y: number } | null {
  return last.t && performance.now() - last.t < maxAge ? { x: last.x, y: last.y } : null
}

export function reducedMotion(): boolean {
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function haptic(ms = 8): void {
  if (reducedMotion()) return
  try {
    navigator.vibrate?.(ms)
  } catch {
    /* unsupported */
  }
}

/** Damped spring sampled into a CSS `linear()` easing; falls back to an overshooting bezier. */
function springLinear(stiffness: number, damping: number): { easing: string; duration: number } {
  const w = Math.sqrt(stiffness)
  const z = damping / (2 * w)
  const wd = w * Math.sqrt(Math.max(1e-6, 1 - z * z))
  const at = (t: number) => 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + ((z * w) / wd) * Math.sin(wd * t))
  let end = 0.1
  // Settle when the envelope is within 0.1% of rest.
  while (Math.exp(-z * w * end) > 0.001 && end < 3) end += 0.02
  const n = 40
  const pts: string[] = []
  for (let i = 0; i <= n; i++) pts.push((Math.round(at((end * i) / n) * 1000) / 1000).toString())
  pts[n] = '1'
  return { easing: `linear(${pts.join(', ')})`, duration: Math.round(end * 1000) }
}

const linearOk = typeof CSS !== 'undefined' && CSS.supports?.('animation-timing-function', 'linear(0, 1)')
const cache = new Map<string, { easing: string; duration: number }>()

/** Easing + duration for a spring; `soft` overshoots a little, `snappy` barely. */
export function spring(kind: 'soft' | 'snappy' | 'bouncy' | 'press' = 'soft'): { easing: string; duration: number } {
  let s = cache.get(kind)
  if (!s) {
    const [k, d] = kind === 'press' ? [500, 18] : kind === 'bouncy' ? [260, 16] : kind === 'snappy' ? [420, 34] : [300, 24]
    s = linearOk ? springLinear(k, d) : { easing: kind === 'snappy' ? 'cubic-bezier(0.2, 0.9, 0.2, 1)' : 'cubic-bezier(0.3, 1.35, 0.5, 1)', duration: 420 }
    cache.set(kind, s)
  }
  return s
}

/**
 * Press feel for every button that opts in (`.btn`, `.press`, `[data-press]`) and every round button:
 * sink quickly while held, spring back on release. WAAPI on `scale`, so it never fights Tailwind's
 * transition or translate utilities.
 */
const PRESS = '.btn, .press, [data-press], button.rounded-full'
let held: { el: HTMLElement; down: Animation; to: number } | null = null
function release() {
  if (!held) return
  const { el, down, to } = held
  held = null
  const t = Math.min(1, Number(down.currentTime ?? 0) / 90)
  const from = 1 - (1 - to) * (1 - (1 - t) * (1 - t))
  down.cancel()
  const s = spring('press')
  el.animate([{ scale: String(from) }, { scale: '1' }], { duration: s.duration, easing: s.easing })
}
if (typeof document !== 'undefined' && 'animate' in Element.prototype) {
  document.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || reducedMotion()) return
    const el = (e.target as Element | null)?.closest?.<HTMLElement>(PRESS)
    if (!el || (el as HTMLButtonElement).disabled || el.getAttribute('aria-disabled') === 'true') return
    release()
    // Small targets sink a little deeper so the press still reads.
    const to = el.offsetWidth < 40 ? 0.88 : el.offsetWidth > 240 ? 0.98 : 0.95
    held = { el, to, down: el.animate([{ scale: '1' }, { scale: String(to) }], { duration: 90, easing: 'ease-out', fill: 'forwards' }) }
  }, { capture: true, passive: true })
  for (const type of ['pointerup', 'pointercancel', 'dragstart'] as const) document.addEventListener(type, release, { capture: true, passive: true })
}

export const canAnimate = () => typeof Element !== 'undefined' && 'animate' in Element.prototype && !reducedMotion()

/**
 * FLIP for children marked `data-flip="<id>"` inside `ref`: when `key` changes, items that kept their id glide
 * from their old offset to the new one; new ones run `enter` (skipped on the first render).
 * `enter` must be a stable (module-level) function.
 */
export function useFlip(
  ref: RefObject<HTMLElement | null>,
  key: unknown,
  enter?: (el: HTMLElement, order: number) => void,
  /** `rect` measures on screen (for stacks anchored to the bottom); `offset` ignores scrolling. */
  measure: 'offset' | 'rect' = 'offset',
) {
  const prev = useRef(new Map<string, { x: number; y: number }>())
  const seen = useRef<HTMLElement | null>(null)
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const next = new Map<string, { x: number; y: number }>()
    // A remounted container starts over instead of flying cards in from stale spots.
    const ok = canAnimate() && seen.current === root
    const s = spring('snappy')
    const top = root.scrollTop
    const bottom = top + (root.clientHeight || innerHeight) + 200
    let entered = 0
    for (const el of root.querySelectorAll<HTMLElement>('[data-flip]')) {
      const id = el.dataset.flip!
      const r = measure === 'rect' ? el.getBoundingClientRect() : null
      const pos = r ? { x: r.left, y: r.top } : { x: el.offsetLeft, y: el.offsetTop }
      next.set(id, pos)
      if (!ok) continue
      const was = prev.current.get(id)
      // Off-screen items are not worth animating.
      if (!r && pos.y > bottom && (!was || was.y > bottom)) continue
      if (was) {
        const dx = was.x - pos.x
        const dy = was.y - pos.y
        if (dx || dy) el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: s.duration, easing: s.easing, composite: 'add' })
      } else if (enter) enter(el, entered++)
    }
    prev.current = next
    seen.current = root
  }, [ref, key, enter, measure])
}
