import { nanoid } from 'nanoid'
import { db } from '../data/db'
import type { DayOfWeek, LessonLocation, LessonType, TimetableSlot } from '../types'
import { findConflicts } from './conflicts'
import { durationMinutes } from '../utils/time'

export type NewSlotInput = {
  studentId: string
  dayOfWeek: DayOfWeek
  startTime: string
  endTime: string
  location: LessonLocation
  type: LessonType
  note?: string
}

export async function checkConflicts(input: { id?: string; dayOfWeek: number; startTime: string; endTime: string }) {
  const sameDay = await db.timetableSlots.where('dayOfWeek').equals(input.dayOfWeek).toArray()
  return findConflicts(input, sameDay)
}

export async function createSlot(input: NewSlotInput): Promise<TimetableSlot> {
  const now = Date.now()
  const slot: TimetableSlot = {
    ...input,
    id: nanoid(10),
    duration: durationMinutes(input.startTime, input.endTime),
    createdAt: now,
    updatedAt: now,
  }
  await db.timetableSlots.add(slot)
  return slot
}

export interface CreateSlotsResult {
  created: TimetableSlot[]
  conflictDays: DayOfWeek[]
}

/** Creates one slot per selected day of week (e.g. "Minh An, Tue + Thu, 15:00–16:00" becomes two slots). */
export async function createSlotsForDays(
  input: Omit<NewSlotInput, 'dayOfWeek'>,
  days: DayOfWeek[],
): Promise<CreateSlotsResult> {
  const now = Date.now()
  const created: TimetableSlot[] = []
  const conflictDays: DayOfWeek[] = []

  for (const dayOfWeek of days) {
    const existing = await db.timetableSlots.where('dayOfWeek').equals(dayOfWeek).toArray()
    const conflicts = findConflicts({ dayOfWeek, startTime: input.startTime, endTime: input.endTime }, existing)
    if (conflicts.length > 0) conflictDays.push(dayOfWeek)

    const slot: TimetableSlot = {
      ...input,
      dayOfWeek,
      id: nanoid(10),
      duration: durationMinutes(input.startTime, input.endTime),
      createdAt: now,
      updatedAt: now,
    }
    created.push(slot)
  }

  await db.timetableSlots.bulkAdd(created)
  return { created, conflictDays }
}

export async function updateSlot(id: string, patch: Partial<NewSlotInput>): Promise<void> {
  const existing = await db.timetableSlots.get(id)
  if (!existing) return
  const merged = { ...existing, ...patch }
  await db.timetableSlots.update(id, {
    ...patch,
    duration: durationMinutes(merged.startTime, merged.endTime),
    updatedAt: Date.now(),
  })
}

export async function deleteSlot(id: string): Promise<void> {
  await db.timetableSlots.delete(id)
}

export async function moveSlot(id: string, dayOfWeek: DayOfWeek, startTime: string, endTime: string): Promise<void> {
  await updateSlot(id, { dayOfWeek, startTime, endTime })
}

export async function duplicateSlot(slotToCopy: TimetableSlot, targetDayOfWeek: DayOfWeek): Promise<TimetableSlot> {
  return createSlot({
    studentId: slotToCopy.studentId,
    dayOfWeek: targetDayOfWeek,
    startTime: slotToCopy.startTime,
    endTime: slotToCopy.endTime,
    location: slotToCopy.location,
    type: slotToCopy.type,
    note: slotToCopy.note,
  })
}
