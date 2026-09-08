export type LessonLocation = 'Studio' | 'Home' | 'Online' | 'Other'

export type LessonType = 'Piano' | 'Theory' | 'Piano + Theory' | 'Trial Lesson' | 'Makeup Lesson'

export type StudentLevel = 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced'

export type StudentStatus = 'active' | 'paused' | 'inactive'

export type RateType = 'perLesson' | 'monthly'

/** 0 = Sunday … 6 = Saturday, matching Date#getDay(). */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface Student {
  id: string
  name: string
  nickname?: string
  age?: number
  phone?: string
  guardian?: string
  instrument: string
  level: StudentLevel
  defaultDuration: number
  defaultLocation: LessonLocation
  rateType: RateType
  rate: number
  status: StudentStatus
  notes?: string
  createdAt: number
  updatedAt: number
}

/** A fixed, recurring weekly timetable entry — the schedule repeats every week with no end date. */
export interface TimetableSlot {
  id: string
  studentId: string
  dayOfWeek: DayOfWeek
  startTime: string
  endTime: string
  duration: number
  location: LessonLocation
  type: LessonType
  note?: string
  createdAt: number
  updatedAt: number
}

export interface Settings {
  id: 'default'
  teacherName: string
  currency: string
  defaultLessonDuration: number
  defaultLocation: LessonLocation
  firstDayOfWeek: 0 | 1
  theme: 'light' | 'dark' | 'system'
}
