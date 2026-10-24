import { useSyncExternalStore } from 'react'

// Whether the guided tour is showing. It starts by itself once, after the first unlock, and again from Settings.
const KEY = 'onboarding-done'
let open = false
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

export const useTourOpen = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => open,
  )

export function startTour() {
  open = true
  emit()
}

export function endTour() {
  open = false
  try {
    localStorage.setItem(KEY, '1')
  } catch {
    /* the tour may show again next time; harmless */
  }
  emit()
}

export function tourSeen() {
  try {
    return localStorage.getItem(KEY) === '1'
  } catch {
    return true
  }
}
