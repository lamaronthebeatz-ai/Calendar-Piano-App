import type { LessonLocation } from '../types'

interface LocationPalette {
  label: string
  text: string
  bg: string
  dot: string
}

export const LOCATION_PALETTE: Record<LessonLocation, LocationPalette> = {
  Studio: {
    label: 'Studio',
    text: 'text-[var(--color-status-confirmed)]',
    bg: 'bg-[var(--color-status-confirmed-bg)]',
    dot: 'bg-[var(--color-status-confirmed)]',
  },
  Home: {
    label: 'Tại nhà',
    text: 'text-[var(--color-status-completed)]',
    bg: 'bg-[var(--color-status-completed-bg)]',
    dot: 'bg-[var(--color-status-completed)]',
  },
  Online: {
    label: 'Trực tuyến',
    text: 'text-[var(--color-status-pending)]',
    bg: 'bg-[var(--color-status-pending-bg)]',
    dot: 'bg-[var(--color-status-pending)]',
  },
  Other: {
    label: 'Khác',
    text: 'text-[var(--color-status-noshow)]',
    bg: 'bg-[var(--color-status-noshow-bg)]',
    dot: 'bg-[var(--color-status-noshow)]',
  },
}

export const LOCATION_OPTIONS: LessonLocation[] = ['Studio', 'Home', 'Online', 'Other']
