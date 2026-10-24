import { useEffect, useRef } from 'react'
import logo from '../assets/logo-full.webp'
import './intro.css'

/**
 * Opening of the app: the gold signature appears alone on black, holds, then pulls back into the lock screen's logo
 * tile while the black lifts and the lock screen comes into focus. The lock screen stays unarmed until it ends.
 */
export function Intro({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const veil = useRef<HTMLDivElement>(null)
  const mark = useRef<HTMLDivElement>(null)
  const done = useRef(onDone)
  useEffect(() => {
    done.current = onDone
  }, [onDone])

  useEffect(() => {
    const el = mark.current!
    let alive = true
    const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'
    const run = async () => {
      // 1. Appear: out of a soft blur, a little small, then a light runs along the signature.
      await el.animate(
        [
          { opacity: 0, transform: 'scale(0.9)', filter: 'blur(14px)' },
          { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
        ],
        { duration: 1100, easing: ease, fill: 'forwards' },
      ).finished
      if (!alive) return
      el.classList.add('is-shining')
      await new Promise((r) => setTimeout(r, 900))
      if (!alive) return

      // 2. Pull back: fly into the lock screen's logo tile, shrinking, as the black lifts.
      const target = document.querySelector('[data-intro="logo"]')?.getBoundingClientRect()
      const from = el.getBoundingClientRect()
      const to = target ?? new DOMRect(innerWidth / 2 - 36, innerHeight * 0.2, 72, 72)
      const s = (to.width * 0.86) / from.width
      const dx = to.left + to.width / 2 - (from.left + from.width / 2)
      const dy = to.top + to.height / 2 - (from.top + from.height / 2)
      veil.current!.animate([{ opacity: 1, backdropFilter: 'blur(24px)' }, { opacity: 0, backdropFilter: 'blur(0px)' }], { duration: 1500, delay: 150, easing: 'ease-in-out', fill: 'forwards' })
      await el.animate(
        [
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(${dx * 0.7}px, ${dy * 0.7}px) scale(${0.35 + s * 0.65})`, opacity: 1, offset: 0.7 },
          { transform: `translate(${dx}px, ${dy}px) scale(${s})`, opacity: 0 },
        ],
        { duration: 1500, easing: ease, fill: 'forwards' },
      ).finished
      if (!alive) return
      await root.current!.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: 'forwards' }).finished
      done.current()
    }
    run().catch(() => done.current())
    // Never leave the lock screen blocked if something stalls.
    const safety = setTimeout(() => done.current(), 6000)
    return () => {
      alive = false
      clearTimeout(safety)
    }
  }, [])

  return (
    <div ref={root} className="intro" aria-hidden onClick={() => done.current()}>
      <div ref={veil} className="intro-veil" />
      <div ref={mark} className="intro-mark" style={{ '--logo': `url(${logo})` } as React.CSSProperties}>
        <img src={logo} alt="" draggable={false} />
      </div>
    </div>
  )
}
