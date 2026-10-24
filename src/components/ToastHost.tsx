import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { useUIStore, type Toast } from '../store/uiStore'
import { CheckIcon, XIcon, AlertTriangleIcon } from './icons'
import { canAnimate, spring, useFlip } from './motion'
import './motion-ui.css'

export function ToastHost() {
  const toasts = useUIStore((s) => s.toasts)
  const stack = useRef<HTMLDivElement>(null)
  // When one leaves (or a new one lands) the rest glide to their new places.
  useFlip(stack, toasts.map((t) => t.id).join(), undefined, 'rect')

  return createPortal(
    <div ref={stack} className="toast-stack above-nav pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+84px)] z-[60] flex flex-col items-center gap-2 px-4 lg:bottom-6">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>,
    document.body,
  )
}

function ToastItem({ toast }: { toast: Toast }) {
  const dismissToast = useUIStore((s) => s.dismissToast)
  const removeToast = useUIStore((s) => s.removeToast)
  const ref = useRef<HTMLDivElement>(null)
  const clock = useRef({ left: toast.duration, since: 0, id: 0 })
  const drag = useRef<{ id: number; x0: number; y0: number; dx: number; on: boolean; samples: [number, number][] } | null>(null)

  const resume = () => {
    const c = clock.current
    clearTimeout(c.id)
    c.since = performance.now()
    c.id = window.setTimeout(() => dismissToast(toast.id), Math.max(0, c.left))
  }
  const pause = () => {
    const c = clock.current
    clearTimeout(c.id)
    c.left -= performance.now() - c.since
  }

  useEffect(() => {
    resume()
    const c = clock.current
    return () => clearTimeout(c.id)
    // The clock starts once per toast.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Swipe sideways to dismiss; vertical movement is left to the page.
  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (toast.leaving || (e.target as HTMLElement).closest('button')) return
    drag.current = { id: e.pointerId, x0: e.clientX, y0: e.clientY, dx: 0, on: false, samples: [[e.timeStamp, e.clientX]] }
    ref.current!.classList.add('is-held')
    pause()
  }
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    const dx = e.clientX - d.x0
    if (!d.on) {
      if (Math.abs(e.clientY - d.y0) > 10) return end(e)
      if (Math.abs(dx) < 6) return
      d.on = true
      e.currentTarget.setPointerCapture(e.pointerId)
      e.currentTarget.getAnimations().forEach((a) => a.finish())
    }
    d.dx = dx
    d.samples.push([e.timeStamp, e.clientX])
    if (d.samples.length > 5) d.samples.shift()
    const el = ref.current!
    el.style.transform = `translateX(${dx}px) rotate(${dx / 40}deg)`
    el.style.opacity = String(Math.max(0.15, 1 - Math.abs(dx) / el.offsetWidth))
  }
  const end = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    drag.current = null
    const el = ref.current!
    el.classList.remove('is-held')
    if (!d.on) return resume()
    const [t0, x0] = d.samples[0]
    const [t1, x1] = d.samples[d.samples.length - 1]
    const v = t1 > t0 ? (x1 - x0) / (t1 - t0) : 0
    const from = el.style.transform
    const opacity = el.style.opacity
    el.style.transform = ''
    el.style.opacity = ''
    if (Math.abs(d.dx) > el.offsetWidth * 0.35 || Math.abs(v) > 0.5) {
      const dir = Math.sign(Math.abs(v) > 0.5 ? v : d.dx) || 1
      el.classList.add('is-swiped')
      if (!canAnimate()) return removeToast(toast.id)
      el.animate([{ transform: from, opacity }, { transform: `translateX(${dir * (el.offsetWidth + 60)}px) rotate(${dir * 8}deg)`, opacity: 0 }], {
        duration: 220,
        easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)',
        fill: 'forwards',
      }).onfinish = () => removeToast(toast.id)
      return
    }
    resume()
    if (!canAnimate()) return
    const s = spring('soft')
    el.animate([{ transform: from, opacity }, { transform: 'none', opacity: 1 }], { duration: s.duration, easing: s.easing })
  }

  return (
    <div
      ref={ref}
      data-flip={toast.id}
      role="status"
      onPointerEnter={(e) => e.pointerType === 'mouse' && !drag.current && pause()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && !drag.current && !toast.leaving && resume()}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={end}
      onPointerCancel={end}
      className={clsx(
        'toast pointer-events-auto flex max-w-sm select-none items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-[var(--shadow-float)]',
        toast.leaving && 'is-leaving',
        toast.tone === 'success' && 'border-[var(--color-status-completed)]/30 bg-[var(--color-status-completed-bg)] text-[var(--color-status-completed)]',
        toast.tone === 'error' && 'border-[var(--color-status-cancelled)]/30 bg-[var(--color-status-cancelled-bg)] text-[var(--color-status-cancelled)]',
        toast.tone === 'default' && 'border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink)]',
      )}
    >
      {toast.tone === 'success' && <CheckIcon width={16} height={16} />}
      {toast.tone === 'error' && <AlertTriangleIcon width={16} height={16} />}
      <span>{toast.message}</span>
      <button onClick={() => dismissToast(toast.id)} aria-label="Đóng thông báo" className="ml-1 opacity-60 hover:opacity-100">
        <XIcon width={14} height={14} />
      </button>
      <span className="toast-bar" style={{ animationDuration: `${toast.duration}ms` }} aria-hidden />
    </div>
  )
}
