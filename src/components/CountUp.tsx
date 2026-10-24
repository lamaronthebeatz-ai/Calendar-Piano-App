import { useEffect, useRef } from 'react'
import { reducedMotion } from './motion'

const plain = (n: number) => n.toLocaleString('vi-VN')

/** A number that runs up from 0 (or from its previous value) — written to the DOM per frame, no re-renders. */
export function CountUp({
  value,
  duration = 900,
  decimals = 0,
  format = plain,
  className,
}: {
  value: number
  duration?: number
  decimals?: number
  /** Must be stable or cheap; it runs every frame. */
  format?: (n: number) => string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const from = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const start = from.current
    from.current = value
    const round = (n: number) => Math.round(n * 10 ** decimals) / 10 ** decimals
    if (reducedMotion() || start === value) {
      el.textContent = format(round(value))
      return
    }
    const t0 = performance.now()
    // Bigger jumps take a little longer so small changes don't feel sluggish.
    const d = Math.min(duration, 300 + Math.abs(value - start) * 60)
    let raf = requestAnimationFrame(function tick(now) {
      const p = Math.min(1, (now - t0) / d)
      const e = 1 - Math.pow(1 - p, 4)
      el.textContent = format(round(start + (value - start) * e))
      if (p < 1) raf = requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(raf)
  }, [value, duration, decimals, format])

  // The label carries the real value so screen readers never hear the count.
  return (
    <span ref={ref} className={className} aria-label={format(value)}>
      {format(0)}
    </span>
  )
}
