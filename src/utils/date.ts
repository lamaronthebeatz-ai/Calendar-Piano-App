import {
  addDays,
  addMonths,
  addWeeks,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

export const ISO_DATE = 'yyyy-MM-dd'

export function toDateKey(date: Date): string {
  return format(date, ISO_DATE)
}

export function fromDateKey(key: string): Date {
  return parseISO(key)
}

export function formatDayLabel(date: Date): string {
  return format(date, 'EEEE, MMMM d')
}

export function formatShortDay(date: Date): string {
  return format(date, 'EEE')
}

export function formatDayNumber(date: Date): string {
  return format(date, 'd')
}

export function formatMonthYear(date: Date): string {
  return format(date, 'MMMM yyyy')
}

export function getWeekDays(date: Date, weekStartsOn: 0 | 1): Date[] {
  const start = startOfWeek(date, { weekStartsOn })
  return Array.from({ length: 7 }, (_, i) => addDays(start, i))
}

export function getMonthGridDays(date: Date, weekStartsOn: 0 | 1): Date[] {
  const monthStart = startOfMonth(date)
  const monthEnd = endOfMonth(date)
  const gridStart = startOfWeek(monthStart, { weekStartsOn })
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn })
  const days: Date[] = []
  let cur = gridStart
  while (cur <= gridEnd) {
    days.push(cur)
    cur = addDays(cur, 1)
  }
  return days
}

export {
  addDays,
  addWeeks,
  addMonths,
  isSameDay,
  isSameMonth,
  isToday,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
}
