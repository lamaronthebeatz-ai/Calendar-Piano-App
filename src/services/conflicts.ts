import type { TimetableSlot } from '../types'
import { rangesOverlap } from '../utils/time'

export interface ConflictCheckInput {
  id?: string
  dayOfWeek: number
  startTime: string
  endTime: string
}

/** Finds timetable slots that overlap the given weekday/time range, excluding the slot's own id (for edits). */
export function findConflicts(input: ConflictCheckInput, existing: TimetableSlot[]): TimetableSlot[] {
  return existing.filter((slot) => {
    if (slot.id === input.id) return false
    if (slot.dayOfWeek !== input.dayOfWeek) return false
    return rangesOverlap(input.startTime, input.endTime, slot.startTime, slot.endTime)
  })
}
