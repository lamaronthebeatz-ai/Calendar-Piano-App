import type { Lesson, Student } from '../types'
import { percent } from '../utils/format'

export function lessonIncome(lesson: Lesson, student: Student | undefined): number {
  if (!student) return 0
  if (lesson.status === 'cancelled' || lesson.status === 'no-show') return 0
  if (student.rateType === 'monthly') return 0
  return (lesson.duration / 60) * student.rate
}

export interface RangeStats {
  lessonCount: number
  teachingHours: number
  studentCount: number
  completionRate: number
  estimatedIncome: number
}

export function computeRangeStats(lessons: Lesson[], students: Student[]): RangeStats {
  const studentMap = new Map(students.map((s) => [s.id, s]))
  const countable = lessons.filter((l) => l.status !== 'cancelled')
  const completed = lessons.filter((l) => l.status === 'completed')
  const finished = lessons.filter((l) => l.status === 'completed' || l.status === 'no-show')
  const teachingMinutes = countable.reduce((sum, l) => sum + l.duration, 0)
  const estimatedIncome = lessons.reduce((sum, l) => sum + lessonIncome(l, studentMap.get(l.studentId)), 0)
  const studentIds = new Set(countable.map((l) => l.studentId))

  return {
    lessonCount: countable.length,
    teachingHours: Math.round((teachingMinutes / 60) * 10) / 10,
    studentCount: studentIds.size,
    completionRate: finished.length > 0 ? percent(completed.length, finished.length) : 100,
    estimatedIncome,
  }
}

export interface DaySummary {
  count: number
  hours: number
  income: number
}

export function computeDaySummary(lessons: Lesson[], students: Student[], dateKey: string): DaySummary {
  const dayLessons = lessons.filter((l) => l.date === dateKey && l.status !== 'cancelled')
  const studentMap = new Map(students.map((s) => [s.id, s]))
  const minutes = dayLessons.reduce((sum, l) => sum + l.duration, 0)
  const income = dayLessons.reduce((sum, l) => sum + lessonIncome(l, studentMap.get(l.studentId)), 0)
  return { count: dayLessons.length, hours: Math.round((minutes / 60) * 10) / 10, income }
}

export interface StudentStats {
  totalLessons: number
  completed: number
  cancelled: number
  noShows: number
  teachingHours: number
  attendanceRate: number
  lastLesson?: Lesson
  nextLesson?: Lesson
  estimatedRevenue: number
}

export function computeStudentStats(studentId: string, allLessons: Lesson[], student: Student | undefined, todayKey: string): StudentStats {
  const lessons = allLessons.filter((l) => l.studentId === studentId)
  const completed = lessons.filter((l) => l.status === 'completed')
  const cancelled = lessons.filter((l) => l.status === 'cancelled')
  const noShows = lessons.filter((l) => l.status === 'no-show')
  const finished = completed.length + noShows.length
  const teachingMinutes = completed.reduce((sum, l) => sum + l.duration, 0)
  const past = lessons
    .filter((l) => l.date < todayKey || (l.date === todayKey && l.status === 'completed'))
    .sort((a, b) => (a.date + a.startTime < b.date + b.startTime ? 1 : -1))
  const upcoming = lessons
    .filter((l) => l.date >= todayKey && l.status !== 'completed' && l.status !== 'cancelled')
    .sort((a, b) => (a.date + a.startTime > b.date + b.startTime ? 1 : -1))
  const estimatedRevenue = lessons.reduce((sum, l) => sum + lessonIncome(l, student), 0)

  return {
    totalLessons: lessons.length,
    completed: completed.length,
    cancelled: cancelled.length,
    noShows: noShows.length,
    teachingHours: Math.round((teachingMinutes / 60) * 10) / 10,
    attendanceRate: finished > 0 ? percent(completed.length, finished) : 100,
    lastLesson: past[0],
    nextLesson: upcoming[0],
    estimatedRevenue,
  }
}

export interface OverallStats {
  lessonsThisWeek: number
  lessonsThisMonth: number
  teachingHoursThisMonth: number
  activeStudents: number
  completionRate: number
  cancellationRate: number
  noShowRate: number
}

export function computeOverallStats(
  lessons: Lesson[],
  students: Student[],
  weekRange: [string, string],
  monthRange: [string, string],
): OverallStats {
  const inWeek = lessons.filter((l) => l.date >= weekRange[0] && l.date <= weekRange[1] && l.status !== 'cancelled')
  const inMonth = lessons.filter((l) => l.date >= monthRange[0] && l.date <= monthRange[1])
  const monthCountable = inMonth.filter((l) => l.status !== 'cancelled')
  const monthMinutes = monthCountable.reduce((sum, l) => sum + l.duration, 0)
  const completed = inMonth.filter((l) => l.status === 'completed').length
  const cancelled = inMonth.filter((l) => l.status === 'cancelled').length
  const noShow = inMonth.filter((l) => l.status === 'no-show').length
  const total = inMonth.length || 1
  const concluded = completed + noShow

  return {
    lessonsThisWeek: inWeek.length,
    lessonsThisMonth: monthCountable.length,
    teachingHoursThisMonth: Math.round((monthMinutes / 60) * 10) / 10,
    activeStudents: students.filter((s) => s.status === 'active').length,
    completionRate: concluded > 0 ? percent(completed, concluded) : 100,
    cancellationRate: percent(cancelled, total),
    noShowRate: percent(noShow, total),
  }
}

export function lessonsByDay(lessons: Lesson[], dateKeys: string[]): number[] {
  return dateKeys.map((key) => lessons.filter((l) => l.date === key && l.status !== 'cancelled').length)
}

export function studentsByLessonCount(lessons: Lesson[], students: Student[], limit = 6): Array<{ student: Student; count: number }> {
  const counts = new Map<string, number>()
  for (const l of lessons) {
    if (l.status === 'cancelled') continue
    counts.set(l.studentId, (counts.get(l.studentId) ?? 0) + 1)
  }
  return students
    .map((student) => ({ student, count: counts.get(student.id) ?? 0 }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}
