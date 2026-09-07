import { useEffect } from 'react'

type ShortcutMap = Record<string, (e: KeyboardEvent) => void>

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
}

export function useKeyboardShortcuts(map: ShortcutMap, enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const handler = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return
      const handlerFn = map[e.key.toLowerCase()]
      if (handlerFn) {
        e.preventDefault()
        handlerFn(e)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [map, enabled])
}
