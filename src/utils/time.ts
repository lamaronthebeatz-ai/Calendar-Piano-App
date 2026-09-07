/** Time utilities. All lesson times are stored as "HH:mm" 24-hour strings. */

export function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

export function minutesToTime(totalMinutes: number): string {
  const clamped = ((totalMinutes % 1440) + 1440) % 1440
  const h = Math.floor(clamped / 60)
  const m = clamped % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function durationMinutes(start: string, end: string): number {
  return timeToMinutes(end) - timeToMinutes(start)
}

export function formatDuration(minutes: number): string {
  if (minutes <= 0) return '0m'
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

export function formatTimeRange(start: string, end: string): string {
  return `${formatTime(start)} – ${formatTime(end)}`
}

export function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${hour12} ${period}` : `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

export function snapToStep(minutes: number, step = 15): number {
  return Math.round(minutes / step) * step
}

export function rangesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string): boolean {
  const aS = timeToMinutes(aStart)
  const aE = timeToMinutes(aEnd)
  const bS = timeToMinutes(bStart)
  const bE = timeToMinutes(bEnd)
  return aS < bE && bS < aE
}

export function nowMinutes(): number {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}
