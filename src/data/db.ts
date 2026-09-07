import Dexie, { type EntityTable } from 'dexie'
import type { Lesson, RecurringLesson, Settings, Student } from '../types'

export class PianoScheduleDB extends Dexie {
  students!: EntityTable<Student, 'id'>
  lessons!: EntityTable<Lesson, 'id'>
  recurringLessons!: EntityTable<RecurringLesson, 'id'>
  settings!: EntityTable<Settings, 'id'>

  constructor() {
    super('piano-schedule')
    this.version(1).stores({
      students: 'id, name, status, updatedAt',
      lessons: 'id, studentId, date, status, recurringLessonId, [date+startTime]',
      recurringLessons: 'id, studentId, active',
      settings: 'id',
    })
  }
}

export const db = new PianoScheduleDB()
