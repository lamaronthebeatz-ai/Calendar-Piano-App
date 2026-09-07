import { nanoid } from 'nanoid'
import { db } from './db'
import type { Lesson, LessonStatus, RecurringLesson, Settings, Student } from '../types'
import { generateOccurrenceDates } from '../services/recurrence'
import { addDays, toDateKey } from '../utils/date'

const now = Date.now()
const today = new Date()

function daysFromToday(offset: number): string {
  return toDateKey(addDays(today, offset))
}

function makeStudent(partial: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Student {
  return { ...partial, id: nanoid(10), createdAt: now, updatedAt: now }
}

const students: Student[] = [
  makeStudent({
    name: 'Nguyễn Minh An',
    nickname: 'Minh An',
    age: 10,
    phone: '090 123 4567',
    guardian: 'Nguyễn Thị Hoa (mother)',
    instrument: 'Piano',
    level: 'Intermediate',
    defaultDuration: 60,
    defaultLocation: 'Studio',
    rateType: 'perLesson',
    rate: 350000,
    status: 'active',
    notes: 'Working through Faber Level 3. Enjoys pop arrangements.',
  }),
  makeStudent({
    name: 'Lê Khánh Linh',
    nickname: 'Linh',
    age: 12,
    phone: '090 234 5678',
    guardian: 'Lê Văn Bình (father)',
    instrument: 'Piano',
    level: 'Elementary',
    defaultDuration: 60,
    defaultLocation: 'Home',
    rateType: 'perLesson',
    rate: 380000,
    status: 'active',
    notes: 'Prefers classical repertoire. Practices daily.',
  }),
  makeStudent({
    name: 'Trần Thị Lan',
    nickname: 'Lan',
    age: 14,
    phone: '090 345 6789',
    guardian: 'Trần Văn Long (father)',
    instrument: 'Piano',
    level: 'Advanced',
    defaultDuration: 90,
    defaultLocation: 'Studio',
    rateType: 'perLesson',
    rate: 400000,
    status: 'active',
    notes: 'Preparing for ABRSM Grade 6. Strong sight-reading.',
  }),
  makeStudent({
    name: 'Hoàng Đức Anh',
    nickname: 'Đức Anh',
    age: 16,
    phone: '090 456 7890',
    guardian: undefined,
    instrument: 'Piano',
    level: 'Advanced',
    defaultDuration: 60,
    defaultLocation: 'Online',
    rateType: 'monthly',
    rate: 3200000,
    status: 'active',
    notes: 'Composing original pieces. Independent learner.',
  }),
  makeStudent({
    name: 'Phạm Gia Bảo',
    nickname: 'Bảo',
    age: 8,
    phone: '090 567 8901',
    guardian: 'Phạm Thị Nga (mother)',
    instrument: 'Piano',
    level: 'Beginner',
    defaultDuration: 30,
    defaultLocation: 'Studio',
    rateType: 'perLesson',
    rate: 250000,
    status: 'active',
    notes: 'First year of lessons. Loves rhythm games.',
  }),
  makeStudent({
    name: 'Vũ Thị Mai',
    nickname: 'Mai',
    age: 9,
    phone: '090 678 9012',
    guardian: 'Vũ Đình Khoa (father)',
    instrument: 'Piano',
    level: 'Beginner',
    defaultDuration: 45,
    defaultLocation: 'Studio',
    rateType: 'perLesson',
    rate: 280000,
    status: 'active',
    notes: '',
  }),
  makeStudent({
    name: 'Đặng Quốc Huy',
    nickname: 'Huy',
    age: 11,
    phone: '090 789 0123',
    guardian: 'Đặng Thị Thu (mother)',
    instrument: 'Piano',
    level: 'Intermediate',
    defaultDuration: 60,
    defaultLocation: 'Home',
    rateType: 'perLesson',
    rate: 360000,
    status: 'paused',
    notes: 'Paused for exam season, resuming next month.',
  }),
  makeStudent({
    name: 'Bùi Thu Hương',
    nickname: 'Hương',
    age: 13,
    phone: '090 890 1234',
    guardian: 'Bùi Văn Sơn (father)',
    instrument: 'Piano & Theory',
    level: 'Elementary',
    defaultDuration: 60,
    defaultLocation: 'Studio',
    rateType: 'perLesson',
    rate: 320000,
    status: 'active',
    notes: 'Focusing on music theory fundamentals.',
  }),
  makeStudent({
    name: 'Ngô Nhật Nam',
    nickname: 'Nam',
    age: 7,
    phone: '090 901 2345',
    guardian: 'Ngô Thị Yến (mother)',
    instrument: 'Piano',
    level: 'Beginner',
    defaultDuration: 30,
    defaultLocation: 'Studio',
    rateType: 'perLesson',
    rate: 250000,
    status: 'active',
    notes: 'Very young — keep lessons playful and short.',
  }),
  makeStudent({
    name: 'Đỗ Khánh Vy',
    nickname: 'Vy',
    age: 15,
    phone: '090 012 3456',
    guardian: undefined,
    instrument: 'Piano',
    level: 'Advanced',
    defaultDuration: 60,
    defaultLocation: 'Home',
    rateType: 'perLesson',
    rate: 400000,
    status: 'inactive',
    notes: 'Moved abroad for study; lessons discontinued.',
  }),
]

const byNick = (nick: string) => students.find((s) => s.nickname === nick)!

function buildRecurring(partial: Omit<RecurringLesson, 'id' | 'createdAt' | 'updatedAt'>): RecurringLesson {
  return { ...partial, id: nanoid(10), createdAt: now, updatedAt: now }
}

const recurringLessons: RecurringLesson[] = [
  buildRecurring({
    studentId: byNick('Minh An').id,
    startDate: daysFromToday(-14),
    endDate: daysFromToday(21),
    daysOfWeek: [2],
    startTime: '15:00',
    endTime: '16:00',
    frequency: 'weekly',
    location: 'Studio',
    type: 'Piano',
    active: true,
  }),
  buildRecurring({
    studentId: byNick('Linh').id,
    startDate: daysFromToday(-14),
    endDate: daysFromToday(21),
    daysOfWeek: [2],
    startTime: '16:30',
    endTime: '17:30',
    frequency: 'weekly',
    location: 'Home',
    type: 'Piano',
    active: true,
  }),
  buildRecurring({
    studentId: byNick('Lan').id,
    startDate: daysFromToday(-14),
    endDate: daysFromToday(21),
    daysOfWeek: [3],
    startTime: '17:00',
    endTime: '18:30',
    frequency: 'weekly',
    location: 'Studio',
    type: 'Piano + Theory',
    active: true,
  }),
  buildRecurring({
    studentId: byNick('Đức Anh').id,
    startDate: daysFromToday(-14),
    endDate: daysFromToday(21),
    daysOfWeek: [5],
    startTime: '19:00',
    endTime: '20:00',
    frequency: 'weekly',
    location: 'Online',
    type: 'Piano',
    active: true,
  }),
]

const sampleNotes = [
  'Worked on C major scale and Hanon No.1. Needs improvement in left-hand independence.',
  'Reviewed sight-reading exercises. Great progress on rhythm accuracy.',
  'Started new piece — focus on dynamics next lesson.',
  'Practiced hand-over-hand arpeggios. Sounding much more confident.',
  '',
]

function statusForDate(dateKey: string, seedIndex: number): LessonStatus {
  const isPast = dateKey < toDateKey(today)
  const isFuture = dateKey > toDateKey(today)
  if (isPast) {
    if (seedIndex % 9 === 0) return 'cancelled'
    if (seedIndex % 11 === 0) return 'no-show'
    return 'completed'
  }
  if (isFuture) {
    return seedIndex % 6 === 0 ? 'pending' : 'confirmed'
  }
  return 'confirmed'
}

function buildLesson(partial: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt' | 'duration'>): Lesson {
  const [sh, sm] = partial.startTime.split(':').map(Number)
  const [eh, em] = partial.endTime.split(':').map(Number)
  const duration = eh * 60 + em - (sh * 60 + sm)
  return { ...partial, id: nanoid(10), duration, createdAt: now, updatedAt: now }
}

function generateSeedLessons(): Lesson[] {
  const lessons: Lesson[] = []
  let i = 0

  for (const rule of recurringLessons) {
    const dates = generateOccurrenceDates(rule)
    for (const date of dates) {
      const status = statusForDate(date, i)
      lessons.push(
        buildLesson({
          studentId: rule.studentId,
          date,
          startTime: rule.startTime,
          endTime: rule.endTime,
          location: rule.location,
          type: rule.type,
          status,
          note: status === 'completed' ? sampleNotes[i % sampleNotes.length] : undefined,
          recurringLessonId: rule.id,
        }),
      )
      i++
    }
  }

  const standalone: Array<Omit<Lesson, 'id' | 'createdAt' | 'updatedAt' | 'duration'>> = [
    {
      studentId: byNick('Bảo').id,
      date: daysFromToday(-10),
      startTime: '09:00',
      endTime: '09:30',
      location: 'Studio',
      type: 'Piano',
      status: 'completed',
      note: 'First lesson — learned finger numbers and posture.',
    },
    {
      studentId: byNick('Mai').id,
      date: daysFromToday(-8),
      startTime: '14:00',
      endTime: '14:45',
      location: 'Studio',
      type: 'Piano',
      status: 'completed',
      note: '',
    },
    {
      studentId: byNick('Nam').id,
      date: daysFromToday(-6),
      startTime: '10:00',
      endTime: '10:30',
      location: 'Studio',
      type: 'Trial Lesson',
      status: 'completed',
      note: 'Trial went well — enrolled for weekly lessons.',
    },
    {
      studentId: byNick('Hương').id,
      date: daysFromToday(-5),
      startTime: '11:00',
      endTime: '12:00',
      location: 'Studio',
      type: 'Theory',
      status: 'completed',
      note: 'Covered key signatures up to 3 sharps.',
    },
    {
      studentId: byNick('Huy').id,
      date: daysFromToday(-4),
      startTime: '18:00',
      endTime: '19:00',
      location: 'Home',
      type: 'Piano',
      status: 'cancelled',
      note: '',
    },
    {
      studentId: byNick('Vy').id,
      date: daysFromToday(-3),
      startTime: '16:00',
      endTime: '17:00',
      location: 'Home',
      type: 'Piano',
      status: 'no-show',
      note: '',
    },
    {
      studentId: byNick('Bảo').id,
      date: daysFromToday(-2),
      startTime: '09:00',
      endTime: '09:30',
      location: 'Studio',
      type: 'Piano',
      status: 'completed',
      note: 'Great improvement on two-hand coordination.',
    },
    {
      studentId: byNick('Mai').id,
      date: daysFromToday(0),
      startTime: '18:00',
      endTime: '18:45',
      location: 'Studio',
      type: 'Piano',
      status: 'confirmed',
      note: '',
    },
    {
      studentId: byNick('Nam').id,
      date: daysFromToday(1),
      startTime: '09:30',
      endTime: '10:00',
      location: 'Studio',
      type: 'Piano',
      status: 'confirmed',
      note: '',
    },
    {
      studentId: byNick('Hương').id,
      date: daysFromToday(4),
      startTime: '11:00',
      endTime: '12:00',
      location: 'Studio',
      type: 'Theory',
      status: 'confirmed',
      note: '',
    },
    {
      studentId: byNick('Huy').id,
      date: daysFromToday(9),
      startTime: '18:00',
      endTime: '19:00',
      location: 'Home',
      type: 'Makeup Lesson',
      status: 'pending',
      note: '',
    },
  ]

  for (const s of standalone) {
    lessons.push(buildLesson(s))
    i++
  }

  return lessons
}

const defaultSettings: Settings = {
  id: 'default',
  teacherName: 'Teacher',
  currency: 'VND',
  defaultLessonDuration: 60,
  defaultLocation: 'Studio',
  firstDayOfWeek: 1,
  theme: 'system',
  notificationsEnabled: false,
  reminderMinutesBefore: 30,
}

export async function seedDatabaseIfEmpty(): Promise<void> {
  const studentCount = await db.students.count()
  if (studentCount > 0) return

  const lessons = generateSeedLessons()

  await db.transaction('rw', db.students, db.lessons, db.recurringLessons, db.settings, async () => {
    await db.students.bulkAdd(students)
    await db.recurringLessons.bulkAdd(recurringLessons)
    await db.lessons.bulkAdd(lessons)
    await db.settings.put(defaultSettings)
  })
}

export async function ensureSettingsExist(): Promise<void> {
  const existing = await db.settings.get('default')
  if (!existing) {
    await db.settings.put(defaultSettings)
  }
}
