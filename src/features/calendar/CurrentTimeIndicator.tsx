import { useEffect, useState } from 'react'
import { GRID_START_MINUTES, HOUR_HEIGHT } from './constants'
import { nowMinutes } from '../../utils/time'

export function useNowMinutes(): number {
  const [minutes, setMinutes] = useState(nowMinutes())
  useEffect(() => {
    const id = setInterval(() => setMinutes(nowMinutes()), 30_000)
    return () => clearInterval(id)
  }, [])
  return minutes
}

export function CurrentTimeIndicator({ minutes }: { minutes: number }) {
  const top = (minutes - GRID_START_MINUTES) * (HOUR_HEIGHT / 60)
  return (
    <div className="pointer-events-none absolute inset-x-0 z-20" style={{ top }}>
      <div className="relative flex items-center">
        <div className="absolute -left-1 h-2 w-2 rounded-full bg-[var(--color-status-cancelled)]" />
        <div className="h-px w-full bg-[var(--color-status-cancelled)]/70" />
      </div>
    </div>
  )
}
