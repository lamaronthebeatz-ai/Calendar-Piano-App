import type { DayOfWeek } from '../types'

export const WEEKDAY_NAMES: Record<DayOfWeek, string> = {
  0: 'Chủ Nhật',
  1: 'Thứ Hai',
  2: 'Thứ Ba',
  3: 'Thứ Tư',
  4: 'Thứ Năm',
  5: 'Thứ Sáu',
  6: 'Thứ Bảy',
}

export const WEEKDAY_SHORT: Record<DayOfWeek, string> = {
  0: 'CN',
  1: 'T2',
  2: 'T3',
  3: 'T4',
  4: 'T5',
  5: 'T6',
  6: 'T7',
}

/** Returns the 7 weekday numbers in display order, starting from the given first-day-of-week setting. */
export function getWeekdayOrder(firstDayOfWeek: 0 | 1): DayOfWeek[] {
  const order: DayOfWeek[] = [0, 1, 2, 3, 4, 5, 6]
  return [...order.slice(firstDayOfWeek), ...order.slice(0, firstDayOfWeek)]
}

export function todayDayOfWeek(): DayOfWeek {
  return new Date().getDay() as DayOfWeek
}
