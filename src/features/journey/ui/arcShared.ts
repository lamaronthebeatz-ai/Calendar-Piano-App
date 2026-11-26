import { useEffect, useRef } from 'react'
import type { EvidenceKind } from '../engine/types'
import type { Basis, Knowing } from '../engine/narrative'

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
export const BASIS: Record<Basis, string> = { fact: 'Dữ kiện có nguồn', interpretation: 'Diễn giải', fiction: 'Hư cấu' }
export const KNOWING: Record<Knowing, string> = { known: 'Đã biết', hypothesis: 'Giả thuyết', confirmed: 'Đã xác nhận' }
