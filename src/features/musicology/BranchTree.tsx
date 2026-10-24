import { useLayoutEffect, useRef, type ReactNode } from 'react'
import clsx from 'clsx'
import '../theory/motion-music.css'

/**
 * Grid of branch cards that grow out from a line, left to right, when the map opens; the card under the
 * pointer (or a finger) stands out while the others dim.
 */
export function BranchTree({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    // Stagger by column first, then row, so the grid reads as branching outward from the trunk.
    const cols = getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length || 1
    ;[...el.children].forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String((i % cols) + Math.floor(i / cols) * 1.5)))
  })
  const focus = (target: EventTarget | null) => {
    const el = ref.current
    const card = target instanceof Element ? [...(el?.children ?? [])].find((c) => c.contains(target)) : undefined
    el?.querySelectorAll(':scope > .is-focus').forEach((c) => c.classList.remove('is-focus'))
    card?.classList.add('is-focus')
    el?.classList.toggle('has-focus', !!card)
  }
  return (
    <div
      ref={ref}
      className={clsx('mm-tree', className)}
      // Touch has no hover: light the touched card while the finger is down, and keyboard focus likewise.
      onPointerDown={(e) => e.pointerType !== 'mouse' && focus(e.target)}
      onPointerUp={() => focus(null)}
      onPointerCancel={() => focus(null)}
      onFocus={(e) => e.target.matches(':focus-visible') && focus(e.target)}
      onBlur={() => focus(null)}
    >
      {children}
    </div>
  )
}
