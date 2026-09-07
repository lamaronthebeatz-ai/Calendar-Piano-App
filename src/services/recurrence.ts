import { addDays, differenceInCalendarWeeks, getDate, startOfWeek } from 'date-fns'
import type { RecurringLesson } from '../types'
import { fromDateKey, toDateKey } from '../utils/date'

const MAX_OCCURRENCES = 300

/** Computes every date (as yyyy-MM-dd) a recurring lesson rule should occur on. */
export function generateOccurrenceDates(rule: Pick<RecurringLesson, 'startDate' | 'endDate' | 'daysOfWeek' | 'frequency'>): string[] {
  const start = fromDateKey(rule.startDate)
  const end = fromDateKey(rule.endDate)
  if (end < start) return []

  const dates: string[] = []
  const anchorWeekStart = startOfWeek(start, { weekStartsOn: 1 })

  if (rule.frequency === 'monthly') {
    const dayOfMonth = getDate(start)
    let cursor = new Date(start)
    while (cursor <= end && dates.length < MAX_OCCURRENCES) {
      const candidate = new Date(cursor.getFullYear(), cursor.getMonth(), dayOfMonth)
      if (candidate.getMonth() === cursor.getMonth() && candidate >= start && candidate <= end) {
        dates.push(toDateKey(candidate))
      }
      cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1)
    }
    return dates
  }

  const days = new Set(rule.daysOfWeek.length > 0 ? rule.daysOfWeek : [start.getDay()])
  const weekInterval = rule.frequency === 'biweekly' ? 2 : 1

  let cursor = start
  while (cursor <= end && dates.length < MAX_OCCURRENCES) {
    if (days.has(cursor.getDay())) {
      const weekDiff = differenceInCalendarWeeks(startOfWeek(cursor, { weekStartsOn: 1 }), anchorWeekStart, {
        weekStartsOn: 1,
      })
      if (weekDiff % weekInterval === 0) {
        dates.push(toDateKey(cursor))
      }
    }
    cursor = addDays(cursor, 1)
  }
  return dates
}
