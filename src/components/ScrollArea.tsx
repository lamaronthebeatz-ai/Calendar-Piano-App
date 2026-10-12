import { useRef, type HTMLAttributes } from 'react'
import { useScrollMemory } from '../hooks/useScrollMemory'
import { Copyright } from './Copyright'

/** A page's own scroll container that returns to the same place when the user navigates back. */
export function ScrollArea({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollMemory(ref)
  return (
    <div ref={ref} {...props}>
      {children}
      <Copyright className="px-4 py-6" />
    </div>
  )
}
