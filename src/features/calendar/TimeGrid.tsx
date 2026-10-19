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
