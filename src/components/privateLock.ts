import { useSyncExternalStore } from 'react'

/** Session state of the private pages' lock, shared by every PrivateArea and by search. */
const KEY = 'app:private'

const listeners = new Set<() => void>()
function read() {
  try {
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}
let open = read()
export function setPrivateUnlocked(value: boolean) {
  open = value
  try {
    if (value) sessionStorage.setItem(KEY, '1')
    else sessionStorage.removeItem(KEY)
  } catch {
    // Storage unavailable: the state lasts until reload.
  }
  listeners.forEach((l) => l())
}
const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

/** Whether the private pages are open in this session. */
export const usePrivateUnlocked = () => useSyncExternalStore(subscribe, () => open)
/** Lowers the glass again over the private pages. */
export const lockPrivate = () => setPrivateUnlocked(false)

