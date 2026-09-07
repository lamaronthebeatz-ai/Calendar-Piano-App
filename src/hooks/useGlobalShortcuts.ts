import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUIStore } from '../store/uiStore'
import { useKeyboardShortcuts } from './useKeyboardShortcuts'

export function useGlobalShortcuts() {
  const navigate = useNavigate()
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const openEditLesson = useUIStore((s) => s.openEditLesson)
  const goToday = useUIStore((s) => s.goToday)
  const setViewMode = useUIStore((s) => s.setViewMode)
  const setSearchOpen = useUIStore((s) => s.setSearchOpen)
  const detailLesson = useUIStore((s) => s.detailLesson)
  const closeDetail = useUIStore((s) => s.closeDetail)

  const shortcuts = useMemo(
    () => ({
      n: () => {
        navigate('/')
        openCreateLesson()
      },
      t: () => {
        navigate('/')
        goToday()
      },
      w: () => {
        navigate('/')
        setViewMode('week')
      },
      d: () => {
        navigate('/')
        setViewMode('day')
      },
      e: () => {
        if (detailLesson) {
          const id = detailLesson.id
          closeDetail()
          openEditLesson(id)
        }
      },
      '/': () => setSearchOpen(true),
    }),
    [navigate, openCreateLesson, goToday, setViewMode, setSearchOpen, detailLesson, closeDetail, openEditLesson],
  )

  useKeyboardShortcuts(shortcuts)
}
