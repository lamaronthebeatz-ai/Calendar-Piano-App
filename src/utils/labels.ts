import type { LessonType, RateType, StudentLevel, StudentStatus } from '../types'

export const LEVEL_LABELS: Record<StudentLevel, string> = {
  Beginner: 'Mới bắt đầu',
  Elementary: 'Sơ cấp',
  Intermediate: 'Trung cấp',
  Advanced: 'Nâng cao',
}

export const STUDENT_STATUS_LABELS: Record<StudentStatus, string> = {
  active: 'Đang học',
  paused: 'Tạm nghỉ',
  inactive: 'Đã nghỉ',
}

export const LESSON_TYPE_LABELS: Record<LessonType, string> = {
  Piano: 'Piano',
  Theory: 'Lý thuyết',
  'Piano + Theory': 'Piano + Lý thuyết',
  'Trial Lesson': 'Buổi học thử',
  'Makeup Lesson': 'Buổi học bù',
}

export const RATE_TYPE_LABELS: Record<RateType, string> = {
  perLesson: 'Theo giờ',
  monthly: 'Trọn gói theo tháng',
}
