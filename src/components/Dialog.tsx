import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { useIsDesktop } from '../hooks/useMediaQuery'
import { IconButton } from './Button'
import { XIcon } from './icons'
import { Copyright } from './Copyright'
import { canAnimate, haptic, lastPointer, spring } from './motion'
import './motion-ui.css'

interface DialogProps {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  width?: 'sm' | 'md' | 'lg'
}

type Content = Pick<DialogProps, 'title' | 'subtitle' | 'children' | 'footer'>

const EXPANDED_HEIGHT = 'calc(100dvh - max(14px, env(safe-area-inset-top)))'

export function Dialog({ open, onClose, title, subtitle, children, footer, width = 'md' }: DialogProps) {
  const isDesktop = useIsDesktop()
  // Stay mounted after `open` turns false until the exit animation has played.
  const [shown, setShown] = useState(open)
  const [prevOpen, setPrevOpen] = useState(open)
  if (prevOpen !== open) {
    setPrevOpen(open)
    if (open) setShown(true)
  }
  // Callers often clear the data behind a dialog as they close it; keep showing what was there.
  const snapshot = useRef<Content | null>(null)
  if (open) snapshot.current = { title, subtitle, children, footer }
  const content: Content = open || !snapshot.current ? { title, subtitle, children, footer } : snapshot.current

  const panel = useRef<HTMLDivElement>(null)
  const backdrop = useRef<HTMLDivElement>(null)
  const origin = useRef('50% 50%')
  const offset = useRef(0)
  const expanded = useRef(false)
  const openRef = useRef(open)
  const desktopRef = useRef(isDesktop)
  desktopRef.current = isDesktop

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  useLayoutEffect(() => {
    openRef.current = open
    const el = panel.current
    const bg = backdrop.current
    if (!el || !bg) return
    const desktop = desktopRef.current
    if (open) {
      // Reopened mid-exit: drop the exit (and its held end state) before entering again.
      for (const a of [...el.getAnimations(), ...bg.getAnimations()]) a.cancel()
      offset.current = 0
      expanded.current = false
      el.style.transform = ''
      el.style.height = ''
      el.style.maxHeight = ''
      bg.style.opacity = ''
      if (!canAnimate()) return
      bg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: 'ease-out' })
      if (desktop) {
        // Grow out of the control that was just pressed.
        const r = el.getBoundingClientRect()
        const p = lastPointer()
        origin.current = p ? `${p.x - r.left}px ${p.y - r.top}px` : '50% 50%'
        el.style.transformOrigin = origin.current
        const s = spring('soft')
        el.animate([{ transform: p ? 'scale(0.35)' : 'scale(0.94)' }, { transform: 'none' }], { duration: s.duration, easing: s.easing })
        el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, easing: 'ease-out' })
      } else {
        const s = spring('soft')
        el.animate([{ transform: 'translateY(100%)' }, { transform: 'none' }], { duration: s.duration, easing: s.easing })
      }
      return
    }
    if (!shown) return
    if (!canAnimate()) {
      setShown(false)
      return
    }
    bg.animate([{ opacity: getComputedStyle(bg).opacity }, { opacity: 0 }], { duration: 200, easing: 'ease-in', fill: 'forwards' })
    const a = desktop
      ? el.animate(
          [
            { transform: 'none', opacity: 1, transformOrigin: origin.current },
            { transform: origin.current === '50% 50%' ? 'scale(0.96)' : 'scale(0.4)', opacity: 0, transformOrigin: origin.current },
          ],
          { duration: 200, easing: 'cubic-bezier(0.4, 0, 0.8, 0.4)', fill: 'forwards' },
        )
      : el.animate([{ transform: `translateY(${offset.current}px)` }, { transform: 'translateY(100%)' }], {
          duration: offset.current ? 200 : 240,
          easing: 'cubic-bezier(0.3, 0, 0.8, 0.3)',
          fill: 'forwards',
        })
    a.onfinish = () => setShown(false)
    // `shown` is deliberately left out: only a change of `open` starts an animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // Bottom-sheet drag on the handle/header: down to dismiss, up to expand, springs back otherwise.
  const drag = useRef<{ id: number; y0: number; t: number; samples: [number, number][] } | null>(null)

  const setY = (t: number) => {
    const el = panel.current!
    el.style.transform = t ? `translateY(${t}px)` : ''
    if (backdrop.current) backdrop.current.style.opacity = String(Math.max(0, 1 - Math.max(0, t) / el.offsetHeight))
  }

  const settle = (from: number) => {
    const el = panel.current!
    setY(0)
    if (!canAnimate() || !from) return
    const s = spring('soft')
    el.animate([{ transform: `translateY(${from}px)` }, { transform: 'none' }], { duration: s.duration, easing: s.easing })
    backdrop.current?.animate([{ opacity: Math.max(0, 1 - Math.max(0, from) / el.offsetHeight) }, { opacity: 1 }], { duration: 260, easing: 'ease-out' })
  }

  // FLIP between the resting and the near-full-screen detent.
  const snap = (expand: boolean, from: number) => {
    const el = panel.current!
    const before = el.getBoundingClientRect().top
    expanded.current = expand
    el.style.height = expand ? EXPANDED_HEIGHT : ''
    el.style.maxHeight = expand ? 'none' : ''
    setY(0)
    const after = el.getBoundingClientRect().top
    if (!canAnimate()) return
    const s = spring('soft')
    el.animate([{ transform: `translateY(${before - after}px)` }, { transform: 'none' }], { duration: s.duration, easing: s.easing })
    if (from > 0) backdrop.current?.animate([{ opacity: Math.max(0, 1 - from / el.offsetHeight) }, { opacity: 1 }], { duration: 260 })
    haptic(6)
  }

  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (isDesktop || e.button !== 0 || (e.target as HTMLElement).closest('button, a, input, select, textarea')) return
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { id: e.pointerId, y0: e.clientY, t: 0, samples: [[e.timeStamp, e.clientY]] }
    panel.current!.getAnimations().forEach((a) => a.cancel())
  }

  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    const dy = e.clientY - d.y0
    // Upward pull has resistance; at full height it barely moves.
    d.t = dy >= 0 ? dy : expanded.current ? dy * 0.12 : -Math.pow(-dy, 0.82)
    d.samples.push([e.timeStamp, e.clientY])
    if (d.samples.length > 6) d.samples.shift()
    setY(d.t)
  }

  const onUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    drag.current = null
    const [t0, y0] = d.samples[0]
    const [t1, y1] = d.samples[d.samples.length - 1]
    const v = t1 > t0 ? (y1 - y0) / (t1 - t0) : 0
    const h = panel.current!.offsetHeight
    const t = d.t
    if (t > 0 && (v > 0.6 || t > h * 0.3)) {
      if (expanded.current && v < 1.4 && t < h * 0.6) return snap(false, t)
      offset.current = t
      onClose()
      // A caller that refuses to close gets its sheet back.
      setTimeout(() => !openRef.current || settle(offset.current), 60)
      return
    }
    if (t < 0 && !expanded.current && (t < -40 || v < -0.45)) return snap(true, t)
    settle(t)
  }

  if (!shown) return null

  const header = (
    <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] px-5 py-4">
      <div>
        <h2 className="text-[15px] font-semibold text-[var(--color-ink)]">{content.title}</h2>
        {content.subtitle && <p className="mt-0.5 text-[13px] text-[var(--color-ink-muted)]">{content.subtitle}</p>}
      </div>
      <IconButton label="Đóng" icon={<XIcon width={18} height={18} />} onClick={onClose} />
    </div>
  )

  const body = (
    <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
      {content.children}
      <Copyright className="pt-5" />
    </div>
  )
  const foot = content.footer && <div className="border-t border-[var(--color-border)] px-5 py-4">{content.footer}</div>

  return createPortal(
    <div className={clsx('fixed inset-0 z-50 flex', !open && 'pointer-events-none')} role="dialog" aria-modal="true" aria-label={content.title}>
      <div ref={backdrop} className="absolute inset-0 bg-black/35" onClick={onClose} />
      {isDesktop ? (
        <div
          ref={panel}
          className="relative m-auto flex max-h-[85vh] w-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-float)]"
          style={{ maxWidth: width === 'sm' ? 420 : width === 'lg' ? 640 : 520 }}
        >
          {header}
          {body}
          {foot}
        </div>
      ) : (
        <div
          ref={panel}
          className="dlg-sheet relative mt-auto flex max-h-[88vh] w-full flex-col rounded-t-2xl border-t border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-float)]"
        >
          <div className="dlg-grip shrink-0 touch-none select-none" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
            <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-[var(--color-border-strong)]" />
            {header}
          </div>
          {body}
          {foot}
        </div>
      )}
    </div>,
    document.body,
  )
}

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Xác nhận',
  tone = 'default',
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmLabel?: string
  tone?: 'default' | 'danger'
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      width="sm"
      footer={
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="press h-10 rounded-xl border border-[var(--color-border)] px-4 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]"
          >
            Huỷ
          </button>
          <button
            onClick={() => {
              if (tone === 'danger') haptic()
              onConfirm()
              onClose()
            }}
            className={clsx(
              'press h-10 rounded-xl px-4 text-sm font-medium',
              tone === 'danger'
                ? 'bg-[var(--color-status-cancelled)] text-white hover:opacity-90'
                : 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:opacity-90',
            )}
          >
            {confirmLabel}
          </button>
        </div>
      }
    >
      <p className="text-sm text-[var(--color-ink-muted)]">{description}</p>
    </Dialog>
  )
}
