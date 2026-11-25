import { useEffect, useRef } from 'react'
import type { EvidenceKind } from '../engine/types'

/** Escape closes the panel on top (dialogue, journal, report) — keyboard players are never stuck in one. */
export function useEscape(close: () => void) {
  const ref = useRef(close)
  useEffect(() => {
    ref.current = close
  })
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (e.key === 'Escape') ref.current()
    }
    addEventListener('keydown', on)
    return () => removeEventListener('keydown', on)
  }, [])
}
export const KIND: Record<EvidenceKind, string> = { primary: 'Nguồn sơ cấp', secondary: 'Nguồn thứ cấp', artifact: 'Hiện vật', interpretation: 'Diễn giải', anecdote: 'Giai thoại', hypothesis: 'Giả thuyết', fiction: 'Hư cấu' }
