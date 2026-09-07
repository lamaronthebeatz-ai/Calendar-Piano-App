import type { Lesson } from '../types'
import { rangesOverlap } from '../utils/time'

export interface ConflictCheckInput {
  id?: string
  date: string
  startTime: string
  endTime: string
}

/** Finds lessons that overlap the given date/time range, excluding the lesson's own id (for edits) and cancelled/no-show lessons. */
export function findConflicts(input: ConflictCheckInput, existing: Lesson[]): Lesson[] {
  return existing.filter((lesson) => {
    if (lesson.id === input.id) return false
    if (lesson.date !== input.date) return false
    if (lesson.status === 'cancelled' || lesson.status === 'no-show') return false
    return rangesOverlap(input.startTime, input.endTime, lesson.startTime, lesson.endTime)
  })
}
