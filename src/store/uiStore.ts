import { create } from 'zustand'
import type { CalendarViewMode, Lesson, LessonLocation, LessonStatus, LessonType } from '../types'
import { addDays, addMonths, addWeeks, toDateKey } from '../utils/date'

export interface LessonDraft {
  studentId?: string
  date?: string
  startTime?: string
  endTime?: string
  location?: LessonLocation
  type?: LessonType
  status?: LessonStatus
}

export interface LessonModalState {
  open: boolean
  editingLessonId?: string
  draft?: LessonDraft
}

export interface StudentModalState {
  open: boolean
  editingStudentId?: string
}

export interface LessonFilters {
  studentId?: string
  status?: LessonStatus
  type?: LessonType
  location?: LessonLocation
}

export interface Toast {
  id: string
  message: string
  tone: 'default' | 'success' | 'error'
}

interface UIState {
  viewMode: CalendarViewMode
  currentDate: string
  filters: LessonFilters
  toasts: Toast[]
  lessonModal: LessonModalState
  studentModal: StudentModalState
  detailLesson: Lesson | null
  searchOpen: boolean
  quickActionsOpen: boolean
  noteFlowOpen: boolean

  setViewMode: (mode: CalendarViewMode) => void
  goToday: () => void
  goNext: () => void
  goPrev: () => void
  setCurrentDate: (date: string) => void

  openCreateLesson: (draft?: LessonDraft) => void
  openEditLesson: (lessonId: string, draft?: LessonDraft) => void
  closeLessonModal: () => void

  openCreateStudent: () => void
  openEditStudent: (studentId: string) => void
  closeStudentModal: () => void

  openDetail: (lesson: Lesson) => void
  closeDetail: () => void

  setFilters: (filters: LessonFilters) => void
  clearFilters: () => void

  setSearchOpen: (open: boolean) => void
  setQuickActionsOpen: (open: boolean) => void
  setNoteFlowOpen: (open: boolean) => void

  pushToast: (message: string, tone?: Toast['tone']) => void
  dismissToast: (id: string) => void
}

export const useUIStore = create<UIState>((set, get) => ({
  viewMode: 'week',
  currentDate: toDateKey(new Date()),
  filters: {},
  toasts: [],
  lessonModal: { open: false },
  studentModal: { open: false },
  detailLesson: null,
  searchOpen: false,
  quickActionsOpen: false,
  noteFlowOpen: false,

  setViewMode: (mode) => set({ viewMode: mode }),
  goToday: () => set({ currentDate: toDateKey(new Date()) }),
  goNext: () => {
    const { viewMode, currentDate } = get()
    const d = new Date(currentDate)
    const next = viewMode === 'day' ? addDays(d, 1) : viewMode === 'week' ? addWeeks(d, 1) : addMonths(d, 1)
    set({ currentDate: toDateKey(next) })
  },
  goPrev: () => {
    const { viewMode, currentDate } = get()
    const d = new Date(currentDate)
    const prev = viewMode === 'day' ? addDays(d, -1) : viewMode === 'week' ? addWeeks(d, -1) : addMonths(d, -1)
    set({ currentDate: toDateKey(prev) })
  },
  setCurrentDate: (date) => set({ currentDate: date }),

  openCreateLesson: (draft) => set({ lessonModal: { open: true, draft } }),
  openEditLesson: (lessonId, draft) => set({ lessonModal: { open: true, editingLessonId: lessonId, draft } }),
  closeLessonModal: () => set({ lessonModal: { open: false } }),

  openCreateStudent: () => set({ studentModal: { open: true } }),
  openEditStudent: (studentId) => set({ studentModal: { open: true, editingStudentId: studentId } }),
  closeStudentModal: () => set({ studentModal: { open: false } }),

  openDetail: (lesson) => set({ detailLesson: lesson }),
  closeDetail: () => set({ detailLesson: null }),

  setFilters: (filters) => set({ filters }),
  clearFilters: () => set({ filters: {} }),

  setSearchOpen: (open) => set({ searchOpen: open }),
  setQuickActionsOpen: (open) => set({ quickActionsOpen: open }),
  setNoteFlowOpen: (open) => set({ noteFlowOpen: open }),

  pushToast: (message, tone = 'default') => {
    const id = Math.random().toString(36).slice(2)
    set({ toasts: [...get().toasts, { id, message, tone }] })
    setTimeout(() => get().dismissToast(id), 3200)
  },
  dismissToast: (id) => set({ toasts: get().toasts.filter((t) => t.id !== id) }),
}))
