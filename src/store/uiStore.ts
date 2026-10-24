import { create } from 'zustand'
import type { DayOfWeek, LessonLocation, LessonType, TimetableSlot } from '../types'

export interface SlotDraft {
  studentId?: string
  dayOfWeek?: DayOfWeek
  startTime?: string
  endTime?: string
  location?: LessonLocation
  type?: LessonType
}

export interface SlotModalState {
  open: boolean
  editingSlotId?: string
  draft?: SlotDraft
}

export interface StudentModalState {
  open: boolean
  editingStudentId?: string
}

export interface SlotFilters {
  studentId?: string
  type?: LessonType
  location?: LessonLocation
}

export interface Toast {
  id: string
  message: string
  tone: 'default' | 'success' | 'error'
  /** ms before it goes on its own; ToastHost pauses the clock while hovered or held. */
  duration: number
  leaving?: boolean
}

interface UIState {
  filters: SlotFilters
  toasts: Toast[]
  lessonModal: SlotModalState
  studentModal: StudentModalState
  detailSlot: TimetableSlot | null
  searchOpen: boolean
  quickActionsOpen: boolean

  openCreateLesson: (draft?: SlotDraft) => void
  openEditLesson: (slotId: string, draft?: SlotDraft) => void
  closeLessonModal: () => void

  openCreateStudent: () => void
  openEditStudent: (studentId: string) => void
  closeStudentModal: () => void

  openDetail: (slot: TimetableSlot) => void
  closeDetail: () => void

  setFilters: (filters: SlotFilters) => void
  clearFilters: () => void

  setSearchOpen: (open: boolean) => void
  setQuickActionsOpen: (open: boolean) => void

  pushToast: (message: string, tone?: Toast['tone']) => void
  /** Plays the exit, then removes. */
  dismissToast: (id: string) => void
  /** Removes at once (after a swipe has already animated it away). */
  removeToast: (id: string) => void
}

export const useUIStore = create<UIState>((set, get) => ({
  filters: {},
  toasts: [],
  lessonModal: { open: false },
  studentModal: { open: false },
  detailSlot: null,
  searchOpen: false,
  quickActionsOpen: false,

  openCreateLesson: (draft) => set({ lessonModal: { open: true, draft } }),
  openEditLesson: (slotId, draft) => set({ lessonModal: { open: true, editingSlotId: slotId, draft } }),
  closeLessonModal: () => set({ lessonModal: { open: false } }),

  openCreateStudent: () => set({ studentModal: { open: true } }),
  openEditStudent: (studentId) => set({ studentModal: { open: true, editingStudentId: studentId } }),
  closeStudentModal: () => set({ studentModal: { open: false } }),

  openDetail: (slot) => set({ detailSlot: slot }),
  closeDetail: () => set({ detailSlot: null }),

  setFilters: (filters) => set({ filters }),
  clearFilters: () => set({ filters: {} }),

  setSearchOpen: (open) => set({ searchOpen: open }),
  setQuickActionsOpen: (open) => set({ quickActionsOpen: open }),

  pushToast: (message, tone = 'default') => {
    const id = Math.random().toString(36).slice(2)
    const duration = 3200
    const live = get().toasts.filter((t) => !t.leaving)
    set({ toasts: [...get().toasts, { id, message, tone, duration }] })
    // Keep the stack short: the oldest steps aside.
    if (live.length >= 3) get().dismissToast(live[0].id)
    // Safety net in case no ToastHost is mounted to run the clock.
    setTimeout(() => get().removeToast(id), duration * 4)
  },
  dismissToast: (id) => {
    const t = get().toasts.find((x) => x.id === id)
    if (!t || t.leaving) return
    set({ toasts: get().toasts.map((x) => (x.id === id ? { ...x, leaving: true } : x)) })
    setTimeout(() => get().removeToast(id), 220)
  },
  removeToast: (id) => set({ toasts: get().toasts.filter((t) => t.id !== id) }),
}))
