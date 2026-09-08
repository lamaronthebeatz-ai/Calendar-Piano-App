import { useMemo } from 'react'
import { useUIStore } from '../store/uiStore'
import { useKeyboardShortcuts } from './useKeyboardShortcuts'

export function useGlobalShortcuts() {
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const openEditLesson = useUIStore((s) => s.openEditLesson)
  const setSearchOpen = useUIStore((s) => s.setSearchOpen)
  const detailSlot = useUIStore((s) => s.detailSlot)
  const closeDetail = useUIStore((s) => s.closeDetail)

  const shortcuts = useMemo(
    () => ({
      n: () => openCreateLesson(),
      e: () => {
        if (detailSlot) {
          const id = detailSlot.id
          closeDetail()
          openEditLesson(id)
        }
      },
      '/': () => setSearchOpen(true),
    }),
    [openCreateLesson, detailSlot, closeDetail, openEditLesson, setSearchOpen],
  )

  useKeyboardShortcuts(shortcuts)
}
