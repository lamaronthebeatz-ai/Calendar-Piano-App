import { useSyncExternalStore } from 'react'

// Whether the support card is open; it only ever opens when asked (no timed nudges).
let open = false
const listeners = new Set<() => void>()
const set = (v: boolean) => {
  open = v
  listeners.forEach((l) => l())
}
export const useDonateOpen = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => open,
  )
export const openDonate = () => set(true)
export const closeDonate = () => set(false)
