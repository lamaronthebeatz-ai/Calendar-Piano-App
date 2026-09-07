export type LessonLocation = 'Studio' | 'Home' | 'Online' | 'Other'

export type LessonType = 'Piano' | 'Theory' | 'Piano + Theory' | 'Trial Lesson' | 'Makeup Lesson'

export type LessonStatus = 'confirmed' | 'pending' | 'completed' | 'cancelled' | 'no-show'

export type StudentLevel = 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced'

export type StudentStatus = 'active' | 'paused' | 'inactive'

export type RateType = 'perLesson' | 'monthly'

export type RecurrenceFrequency = 'weekly' | 'biweekly' | 'monthly'

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

export interface Lesson {
  id: string
  studentId: string
  date: string
  startTime: string
  endTime: string
  duration: number
  location: LessonLocation
  type: LessonType
  status: LessonStatus
  note?: string
  recurringLessonId?: string
  createdAt: number
  updatedAt: number
}

export interface RecurringLesson {
  id: string
  studentId: string
  startDate: string
  endDate: string
  daysOfWeek: number[]
  startTime: string
  endTime: string
  frequency: RecurrenceFrequency
  location: LessonLocation
  type: LessonType
  active: boolean
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
  notificationsEnabled: boolean
  reminderMinutesBefore: number
}

export type CalendarViewMode = 'day' | 'week' | 'month'

export interface LessonWithStudent extends Lesson {
  student: Student | undefined
}
