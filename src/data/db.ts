import Dexie, { type EntityTable } from 'dexie'
import type { Settings, Student, TimetableSlot } from '../types'

export class PianoScheduleDB extends Dexie {
  students!: EntityTable<Student, 'id'>
  timetableSlots!: EntityTable<TimetableSlot, 'id'>
  settings!: EntityTable<Settings, 'id'>

  constructor() {
    super('piano-schedule')
    this.version(1).stores({
      students: 'id, name, status, updatedAt',
      lessons: 'id, studentId, date, status, recurringLessonId, [date+startTime]',
      recurringLessons: 'id, studentId, active',
      settings: 'id',
    })
    // v2: replaced dated lessons/recurringLessons with a single fixed weekly timetable.
    this.version(2)
      .stores({
        students: 'id, name, status, updatedAt',
        lessons: null,
        recurringLessons: null,
        timetableSlots: 'id, studentId, dayOfWeek, [dayOfWeek+startTime]',
        settings: 'id',
      })
      .upgrade(() => {
        // Dated lesson history doesn't map onto a dateless weekly timetable — start fresh.
      })
    // v3: swapped the built-in sample roster for the teacher's real weekly timetable.
    this.version(3)
      .stores({
        students: 'id, name, status, updatedAt',
        timetableSlots: 'id, studentId, dayOfWeek, [dayOfWeek+startTime]',
        settings: 'id',
      })
      .upgrade(async (tx) => {
        await tx.table('students').clear()
        await tx.table('timetableSlots').clear()
      })
  }
}

export const db = new PianoScheduleDB()
