import type { CSSProperties } from 'react'
import { GRID_END_MINUTES, GRID_HEIGHT, GRID_START_MINUTES, GUTTER_WIDTH, HOUR_HEIGHT } from './constants'

function formatHourLabel(minutes: number): string {
  const h = Math.floor(minutes / 60)
  return `${String(h).padStart(2, '0')}:00`
}

export function TimeGutter() {
  const hours: number[] = []
  for (let m = GRID_START_MINUTES; m <= GRID_END_MINUTES; m += 60) hours.push(m)

  return (
    <div className="relative shrink-0" style={{ width: GUTTER_WIDTH, height: GRID_HEIGHT }}>
      {hours.map((m) => (
        <div
          key={m}
          className="absolute right-2 -translate-y-1/2 text-right text-[11px] font-medium text-[var(--color-ink-faint)]"
          style={{ top: (m - GRID_START_MINUTES) * (HOUR_HEIGHT / 60) }}
        >
          {formatHourLabel(m)}
        </div>
      ))}
    </div>
  )
}

export function gridBackgroundStyle(isDark: boolean): CSSProperties {
  const minor = isDark ? 'rgba(255,255,255,0.045)' : 'rgba(32,29,24,0.045)'
  const major = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(32,29,24,0.08)'
  const quarter = HOUR_HEIGHT / 4
  return {
    height: GRID_HEIGHT,
    backgroundImage: `repeating-linear-gradient(to bottom, ${major} 0, ${major} 1px, transparent 1px, transparent ${HOUR_HEIGHT}px), repeating-linear-gradient(to bottom, ${minor} 0, ${minor} 1px, transparent 1px, transparent ${quarter}px)`,
  }
}

export { GRID_HEIGHT, GRID_START_MINUTES, GRID_END_MINUTES, HOUR_HEIGHT }
