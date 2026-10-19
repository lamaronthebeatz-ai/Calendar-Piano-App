import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../data/db'
import type { Settings, Student, TimetableSlot } from '../types'

// Stable defaults: a fresh [] each render would invalidate every memo built on these lists.
const NO_STUDENTS: Student[] = []
const NO_SLOTS: TimetableSlot[] = []

export function useStudents() {
  return useLiveQuery(() => db.students.toArray(), [], NO_STUDENTS)
}

export function useTimetableSlots() {
  return useLiveQuery(() => db.timetableSlots.toArray(), [], NO_SLOTS)
}

const FALLBACK_SETTINGS: Settings = {
  id: 'default',
  teacherName: 'Teacher',
  currency: 'VND',
  defaultLessonDuration: 60,
  defaultLocation: 'Studio',
  firstDayOfWeek: 1,
  theme: 'system',
}

export function useSettings(): Settings {
  const settings = useLiveQuery(() => db.settings.get('default'), [])
  return settings ?? FALLBACK_SETTINGS
}

export function useStudent(id: string | undefined) {
  return useLiveQuery(async () => (id ? ((await db.students.get(id)) ?? null) : null), [id])
}
