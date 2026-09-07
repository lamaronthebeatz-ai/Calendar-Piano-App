import { nanoid } from 'nanoid'
import { db } from '../data/db'
import type { Lesson, LessonLocation, LessonStatus, LessonType, RecurrenceFrequency } from '../types'
import { generateOccurrenceDates } from './recurrence'
import { findConflicts } from './conflicts'
import { durationMinutes } from '../utils/time'
import { toDateKey } from '../utils/date'

export type NewLessonInput = {
  studentId: string
  date: string
  startTime: string
  endTime: string
  location: LessonLocation
  type: LessonType
  status: LessonStatus
  note?: string
}

export async function checkConflicts(input: { id?: string; date: string; startTime: string; endTime: string }) {
  const sameDay = await db.lessons.where('date').equals(input.date).toArray()
  return findConflicts(input, sameDay)
}

export async function createLesson(input: NewLessonInput): Promise<Lesson> {
  const now = Date.now()
  const lesson: Lesson = {
    ...input,
    id: nanoid(10),
    duration: durationMinutes(input.startTime, input.endTime),
    createdAt: now,
    updatedAt: now,
  }
  await db.lessons.add(lesson)
  return lesson
}

export async function updateLesson(id: string, patch: Partial<NewLessonInput>): Promise<void> {
  const existing = await db.lessons.get(id)
  if (!existing) return
  const merged = { ...existing, ...patch }
  await db.lessons.update(id, {
    ...patch,
    duration: durationMinutes(merged.startTime, merged.endTime),
    updatedAt: Date.now(),
  })
}

export async function deleteLesson(id: string): Promise<void> {
  await db.lessons.delete(id)
}

export async function moveLesson(id: string, date: string, startTime: string, endTime: string): Promise<void> {
  await updateLesson(id, { date, startTime, endTime })
}

export async function setLessonStatus(id: string, status: LessonStatus): Promise<void> {
  await db.lessons.update(id, { status, updatedAt: Date.now() })
}

export async function duplicateLesson(lesson: Lesson, targetDate: string): Promise<Lesson> {
  return createLesson({
    studentId: lesson.studentId,
    date: targetDate,
    startTime: lesson.startTime,
    endTime: lesson.endTime,
    location: lesson.location,
    type: lesson.type,
    status: 'pending',
    note: undefined,
  })
}

export interface CreateRecurringInput {
  studentId: string
  startDate: string
  endDate: string
  daysOfWeek: number[]
  startTime: string
  endTime: string
  frequency: RecurrenceFrequency
  location: LessonLocation
  type: LessonType
  status: LessonStatus
}

export interface CreateRecurringResult {
  createdCount: number
  skippedDuplicates: number
  conflictDates: string[]
}

export async function createRecurringLesson(input: CreateRecurringInput): Promise<CreateRecurringResult> {
  const now = Date.now()
  const ruleId = nanoid(10)
  const dates = generateOccurrenceDates(input)

  const existingInRange = await db.lessons.where('date').between(input.startDate, input.endDate, true, true).toArray()

  const toCreate: Lesson[] = []
  const conflictDates: string[] = []
  let skippedDuplicates = 0

  for (const date of dates) {
    const isDuplicate = existingInRange.some(
      (l) => l.studentId === input.studentId && l.date === date && l.startTime === input.startTime && l.endTime === input.endTime,
    )
    if (isDuplicate) {
      skippedDuplicates++
      continue
    }
    const conflicts = findConflicts({ date, startTime: input.startTime, endTime: input.endTime }, existingInRange)
    if (conflicts.length > 0) {
      conflictDates.push(date)
    }
    toCreate.push({
      id: nanoid(10),
      studentId: input.studentId,
      date,
      startTime: input.startTime,
      endTime: input.endTime,
      duration: durationMinutes(input.startTime, input.endTime),
      location: input.location,
      type: input.type,
      status: input.status,
      recurringLessonId: ruleId,
      createdAt: now,
      updatedAt: now,
    })
  }

  await db.transaction('rw', db.recurringLessons, db.lessons, async () => {
    await db.recurringLessons.add({
      id: ruleId,
      studentId: input.studentId,
      startDate: input.startDate,
      endDate: input.endDate,
      daysOfWeek: input.daysOfWeek,
      startTime: input.startTime,
      endTime: input.endTime,
      frequency: input.frequency,
      location: input.location,
      type: input.type,
      active: true,
      createdAt: now,
      updatedAt: now,
    })
    if (toCreate.length > 0) {
      await db.lessons.bulkAdd(toCreate)
    }
  })

  return { createdCount: toCreate.length, skippedDuplicates, conflictDates }
}

export async function deleteRecurringSeries(recurringLessonId: string, fromDate?: string): Promise<void> {
  await db.transaction('rw', db.recurringLessons, db.lessons, async () => {
    const query = db.lessons.where('recurringLessonId').equals(recurringLessonId)
    const lessons = await query.toArray()
    const from = fromDate ?? toDateKey(new Date())
    const idsToDelete = lessons.filter((l) => !fromDate || l.date >= from).map((l) => l.id)
    await db.lessons.bulkDelete(idsToDelete)
    if (!fromDate) {
      await db.recurringLessons.delete(recurringLessonId)
    } else {
      await db.recurringLessons.update(recurringLessonId, { endDate: fromDate, updatedAt: Date.now() })
    }
  })
}
