import { useRef, type HTMLAttributes } from 'react'
import { useScrollMemory } from '../hooks/useScrollMemory'
import { useReveal } from '../hooks/useReveal'
import { useScrollCollapse } from '../hooks/useScrollCollapse'
import { Copyright } from './Copyright'
import { DonateLink } from '../features/donate/Donate'

/**
 * A page's own scroll container that returns to the same place when the user navigates back.
 * Children marked data-reveal rise in as they scroll into view; with `collapse` (scroll range in px),
 * its [data-collapse] large title hands over to the bar title (see useScrollCollapse).
 */
export function ScrollArea({ children, collapse, ...props }: HTMLAttributes<HTMLDivElement> & { collapse?: readonly [number, number] }) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollMemory(ref)
  useReveal(ref)
  useScrollCollapse(ref, collapse)
  return (
    <div ref={ref} {...props}>
      {children}
      <div className="flex flex-col items-center gap-1 px-4 py-6">
        <Copyright />
        <DonateLink />
      </div>
    </div>
  )
}
