import type { LessonStatus } from '../types'

interface StatusPalette {
  label: string
  text: string
  bg: string
  dot: string
}

export const STATUS_PALETTE: Record<LessonStatus, StatusPalette> = {
  confirmed: {
    label: 'Confirmed',
    text: 'text-[var(--color-status-confirmed)]',
    bg: 'bg-[var(--color-status-confirmed-bg)]',
    dot: 'bg-[var(--color-status-confirmed)]',
  },
  pending: {
    label: 'Pending',
    text: 'text-[var(--color-status-pending)]',
    bg: 'bg-[var(--color-status-pending-bg)]',
    dot: 'bg-[var(--color-status-pending)]',
  },
  completed: {
    label: 'Completed',
    text: 'text-[var(--color-status-completed)]',
    bg: 'bg-[var(--color-status-completed-bg)]',
    dot: 'bg-[var(--color-status-completed)]',
  },
  cancelled: {
    label: 'Cancelled',
    text: 'text-[var(--color-status-cancelled)]',
    bg: 'bg-[var(--color-status-cancelled-bg)]',
    dot: 'bg-[var(--color-status-cancelled)]',
  },
  'no-show': {
    label: 'No Show',
    text: 'text-[var(--color-status-noshow)]',
    bg: 'bg-[var(--color-status-noshow-bg)]',
    dot: 'bg-[var(--color-status-noshow)]',
  },
}

export const STATUS_OPTIONS: LessonStatus[] = ['confirmed', 'pending', 'completed', 'cancelled', 'no-show']
