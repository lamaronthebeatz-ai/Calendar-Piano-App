import type { DayOfWeek, Student, TimetableSlot } from '../types'

export function slotIncome(slot: TimetableSlot, student: Student | undefined): number {
  if (!student) return 0
  if (student.rateType === 'monthly') return 0
  return (slot.duration / 60) * student.rate
}

export interface OverallStats {
  lessonCount: number
  teachingHoursPerWeek: number
  studentCount: number
  estimatedWeeklyIncome: number
}

export function computeOverallStats(slots: TimetableSlot[], students: Student[]): OverallStats {
  const studentMap = new Map(students.map((s) => [s.id, s]))
  const minutes = slots.reduce((sum, s) => sum + s.duration, 0)
  const estimatedWeeklyIncome = slots.reduce((sum, s) => sum + slotIncome(s, studentMap.get(s.studentId)), 0)
  const studentIds = new Set(slots.map((s) => s.studentId))

  return {
    lessonCount: slots.length,
    teachingHoursPerWeek: Math.round((minutes / 60) * 10) / 10,
    studentCount: studentIds.size,
    estimatedWeeklyIncome,
  }
}

export interface DaySummary {
  count: number
  hours: number
  income: number
}

export function computeDaySummary(slots: TimetableSlot[], students: Student[], dayOfWeek: DayOfWeek): DaySummary {
  const daySlots = slots.filter((s) => s.dayOfWeek === dayOfWeek)
  const studentMap = new Map(students.map((s) => [s.id, s]))
  const minutes = daySlots.reduce((sum, s) => sum + s.duration, 0)
  const income = daySlots.reduce((sum, s) => sum + slotIncome(s, studentMap.get(s.studentId)), 0)
  return { count: daySlots.length, hours: Math.round((minutes / 60) * 10) / 10, income }
}

export interface StudentScheduleStats {
  slots: TimetableSlot[]
  weeklyLessons: number
  weeklyHours: number
  estimatedWeeklyRevenue: number
  estimatedMonthlyRevenue: number
}

export function computeStudentScheduleStats(studentId: string, allSlots: TimetableSlot[], student: Student | undefined): StudentScheduleStats {
  const slots = allSlots
    .filter((s) => s.studentId === studentId)
    .sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))
  const minutes = slots.reduce((sum, s) => sum + s.duration, 0)
  const weeklyRevenue = student?.rateType === 'monthly' ? 0 : slots.reduce((sum, s) => sum + slotIncome(s, student), 0)

  return {
    slots,
    weeklyLessons: slots.length,
    weeklyHours: Math.round((minutes / 60) * 10) / 10,
    estimatedWeeklyRevenue: weeklyRevenue,
    estimatedMonthlyRevenue: student?.rateType === 'monthly' ? student.rate : Math.round(weeklyRevenue * 52 / 12),
  }
}

export function lessonsByDayOfWeek(slots: TimetableSlot[], days: DayOfWeek[]): number[] {
  return days.map((day) => slots.filter((s) => s.dayOfWeek === day).length)
}

export function hoursByDayOfWeek(slots: TimetableSlot[], days: DayOfWeek[]): number[] {
  return days.map((day) => Math.round((slots.filter((s) => s.dayOfWeek === day).reduce((sum, s) => sum + s.duration, 0) / 60) * 10) / 10)
}

export function studentsBySlotCount(slots: TimetableSlot[], students: Student[], limit = 6): Array<{ student: Student; count: number }> {
  const counts = new Map<string, number>()
  for (const s of slots) {
    counts.set(s.studentId, (counts.get(s.studentId) ?? 0) + 1)
  }
  return students
    .map((student) => ({ student, count: counts.get(student.id) ?? 0 }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}
