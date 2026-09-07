import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../data/db'
import type { Settings } from '../types'

export function useStudents() {
  return useLiveQuery(() => db.students.toArray(), [], [])
}

export function useLessons() {
  return useLiveQuery(() => db.lessons.toArray(), [], [])
}

export function useRecurringLessons() {
  return useLiveQuery(() => db.recurringLessons.toArray(), [], [])
}

const FALLBACK_SETTINGS: Settings = {
  id: 'default',
  teacherName: 'Teacher',
  currency: 'VND',
  defaultLessonDuration: 60,
  defaultLocation: 'Studio',
  firstDayOfWeek: 1,
  theme: 'system',
  notificationsEnabled: false,
  reminderMinutesBefore: 30,
}

export function useSettings(): Settings {
  const settings = useLiveQuery(() => db.settings.get('default'), [])
  return settings ?? FALLBACK_SETTINGS
}

export function useStudent(id: string | undefined) {
  return useLiveQuery(async () => (id ? ((await db.students.get(id)) ?? null) : null), [id])
}
