import { useEffect, useSyncExternalStore } from 'react'

/**
 * How many things are holding the page back right now: a route's code still loading (its Suspense fallback), or a page
 * waiting on something heavy (the score editor's engraver). PageCurtain covers the screen while this stays above 0.
 */
let count = 0
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

export function holdCurtain(): () => void {
  count++
  emit()
  let done = false
  return () => {
    if (done) return
    done = true
    count--
    emit()
  }
}
export const useCurtainHeld = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => void listeners.delete(l)),
    () => count > 0,
  )

/** Holds the curtain while `active` is true. */
export function usePageLoading(active: boolean) {
  useEffect(() => {
    if (!active) return
    return holdCurtain()
  }, [active])
}

/** The Suspense fallback of every route. */
export function RouteLoading() {
  usePageLoading(true)
  return null
}
