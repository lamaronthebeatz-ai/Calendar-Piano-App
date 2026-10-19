import type { CSSProperties } from 'react'

export const GRID_START_MINUTES = 6 * 60
export const GRID_END_MINUTES = 22 * 60
export const GRID_TOTAL_MINUTES = GRID_END_MINUTES - GRID_START_MINUTES
export const PX_PER_MINUTE = 1.2
export const HOUR_HEIGHT = PX_PER_MINUTE * 60
export const GRID_HEIGHT = GRID_TOTAL_MINUTES * PX_PER_MINUTE
export const SNAP_MINUTES = 15
export const MIN_LESSON_MINUTES = 15
export const GUTTER_WIDTH = 56

export function gridBackgroundStyle(isDark: boolean): CSSProperties {
  const minor = isDark ? 'rgba(255,255,255,0.045)' : 'rgba(32,29,24,0.045)'
  const major = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(32,29,24,0.08)'
  const quarter = HOUR_HEIGHT / 4
  return {
    height: GRID_HEIGHT,
    backgroundImage: `repeating-linear-gradient(to bottom, ${major} 0, ${major} 1px, transparent 1px, transparent ${HOUR_HEIGHT}px), repeating-linear-gradient(to bottom, ${minor} 0, ${minor} 1px, transparent 1px, transparent ${quarter}px)`,
  }
}

