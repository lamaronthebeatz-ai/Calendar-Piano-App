import { useEffect, useRef } from 'react'

/**
 * A thin bar that fills (or empties) over `ms` and then calls `onDone` — the timer of the rotating cards. It is one
 * Web Animation on `transform`, run by the compositor: no React render and no style work per frame (the old 100 ms
 * state ticks re-rendered the whole card ten times a second). Web Animations ignore the reduced-motion CSS, so the
 * cards keep turning there too. Give it a new `key` to start again; it holds while `paused` or the tab is hidden.
 */
export function CountdownBar({ ms, paused = false, empty = false, onDone, className }: { ms: number; paused?: boolean; empty?: boolean; onDone: () => void; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const anim = useRef<Animation | null>(null)
  const done = useRef(onDone)
  useEffect(() => {
    done.current = onDone
  })
  useEffect(() => {
    const el = ref.current
    if (!el?.animate) return
    const a = el.animate([{ transform: `scaleX(${empty ? 1 : 0})` }, { transform: `scaleX(${empty ? 0 : 1})` }], { duration: ms, easing: 'linear', fill: 'forwards' })
    anim.current = a
    a.finished.then(() => done.current(), () => {})
    return () => a.cancel()
  }, [ms, empty])
  useEffect(() => {
    const sync = () => {
      const a = anim.current
      if (!a || a.playState === 'finished') return
      if (paused || document.visibilityState !== 'visible') a.pause()
      else a.play()
    }
    sync()
    document.addEventListener('visibilitychange', sync)
    return () => document.removeEventListener('visibilitychange', sync)
  }, [paused])
  return <span ref={ref} className={`block h-full origin-left ${className ?? ''}`} style={{ transform: `scaleX(${empty ? 1 : 0})` }} />
}
