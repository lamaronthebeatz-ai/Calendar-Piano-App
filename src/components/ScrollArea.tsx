import { useRef, type HTMLAttributes } from 'react'
import { useScrollMemory } from '../hooks/useScrollMemory'

/** A page's own scroll container that returns to the same place when the user navigates back. */
export function ScrollArea(props: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollMemory(ref)
  return <div ref={ref} {...props} />
}
