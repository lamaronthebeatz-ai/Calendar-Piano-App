import { nanoid } from 'nanoid'
import { db } from '../data/db'
import type { Student } from '../types'

export type NewStudentInput = Omit<Student, 'id' | 'createdAt' | 'updatedAt'>

export async function createStudent(input: NewStudentInput): Promise<Student> {
  const now = Date.now()
  const student: Student = { ...input, id: nanoid(10), createdAt: now, updatedAt: now }
  await db.students.add(student)
  return student
}

export async function updateStudent(id: string, patch: Partial<NewStudentInput>): Promise<void> {
  await db.students.update(id, { ...patch, updatedAt: Date.now() })
}

export async function deleteStudent(id: string): Promise<void> {
  await db.transaction('rw', db.students, db.lessons, db.recurringLessons, async () => {
    await db.lessons.where('studentId').equals(id).delete()
    await db.recurringLessons.where('studentId').equals(id).delete()
    await db.students.delete(id)
  })
}

export async function countUpcomingLessonsForStudent(studentId: string, fromDate: string): Promise<number> {
  return db.lessons
    .where('studentId')
    .equals(studentId)
    .filter((l) => l.date >= fromDate && l.status !== 'cancelled')
    .count()
}
