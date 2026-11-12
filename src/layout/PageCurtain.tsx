import { useEffect, useState } from 'react'
import logoFull from '../assets/logo-full.webp'
import { useCurtainHeld } from './pageCurtain'
import './page-curtain.css'

const SHOW_AFTER = 180 // a page that is ready sooner never sees the curtain
const MIN_SHOWN = 420 // once up, it stays long enough not to flicker
const FADE = 320

/**
 * The Lamar curtain: when a page takes a moment (its code loading the first time, a heavy library), the screen fades
 * to the gold signature and opens again on the finished page. It only ever covers; nothing waits on its animation.
 */
export function PageCurtain() {
  const held = useCurtainHeld()
  const [phase, setPhase] = useState<'off' | 'in' | 'out'>('off')
  const [since, setSince] = useState(0)

  useEffect(() => {
    if (held && phase !== 'in') {
      const t = window.setTimeout(() => {
        setPhase('in')
        setSince(performance.now())
      }, phase === 'out' ? 0 : SHOW_AFTER)
      return () => window.clearTimeout(t)
    }
    if (!held && phase === 'in') {
      const t = window.setTimeout(() => setPhase('out'), Math.max(0, MIN_SHOWN - (performance.now() - since)))
      return () => window.clearTimeout(t)
    }
    if (!held && phase === 'out') {
      const t = window.setTimeout(() => setPhase('off'), FADE)
      return () => window.clearTimeout(t)
    }
  }, [held, phase, since])

  if (phase === 'off') return null
  return (
    <div className={`pc-root${phase === 'out' ? ' is-out' : ''}`} role="status" aria-live="polite" aria-label="Đang mở trang">
      <img src={logoFull} alt="" draggable={false} className="pc-logo" />
      <span className="pc-line" aria-hidden />
    </div>
  )
}
