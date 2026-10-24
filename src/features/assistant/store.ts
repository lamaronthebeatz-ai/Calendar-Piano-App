import { useSyncExternalStore } from 'react'

/** Whether the assistant panel is open, and a question handed to it from elsewhere (the ⌘K palette). */
let state = { open: false, ask: '' }
const listeners = new Set<() => void>()
const set = (s: Partial<typeof state>) => {
  state = { ...state, ...s }
  listeners.forEach((l) => l())
}
export const useAssistant = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state,
  )
export const openAssistant = (ask = '') => set({ open: true, ask })
export const closeAssistant = () => set({ open: false })
export const takeQuestion = () => {
  const q = state.ask
  if (q) state = { ...state, ask: '' }
  return q
}
