import type { DayOfWeek } from '../types'

export const WEEKDAY_NAMES: Record<DayOfWeek, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

export const WEEKDAY_SHORT: Record<DayOfWeek, string> = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}

/** Returns the 7 weekday numbers in display order, starting from the given first-day-of-week setting. */
export function getWeekdayOrder(firstDayOfWeek: 0 | 1): DayOfWeek[] {
  const order: DayOfWeek[] = [0, 1, 2, 3, 4, 5, 6]
  return [...order.slice(firstDayOfWeek), ...order.slice(0, firstDayOfWeek)]
}

export function todayDayOfWeek(): DayOfWeek {
  return new Date().getDay() as DayOfWeek
}
