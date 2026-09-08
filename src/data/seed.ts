import { nanoid } from 'nanoid'
import { db } from './db'
import type { DayOfWeek, Settings, Student, TimetableSlot } from '../types'

const now = Date.now()

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

function slot(
  nick: string,
  dayOfWeek: DayOfWeek,
  startTime: string,
  endTime: string,
  location: TimetableSlot['location'],
  type: TimetableSlot['type'],
  note = '',
): TimetableSlot {
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = endTime.split(':').map(Number)
  return {
    id: nanoid(10),
    studentId: byNick(nick).id,
    dayOfWeek,
    startTime,
    endTime,
    duration: eh * 60 + em - (sh * 60 + sm),
    location,
    type,
    note: note || undefined,
    createdAt: now,
    updatedAt: now,
  }
}

// Monday=1 … Sunday=0, matching Date#getDay().
const timetableSlots: TimetableSlot[] = [
  slot('Minh An', 2, '15:00', '16:00', 'Studio', 'Piano'),
  slot('Linh', 2, '16:30', '17:30', 'Home', 'Piano'),
  slot('Lan', 3, '17:00', '18:30', 'Studio', 'Piano + Theory'),
  slot('Đức Anh', 5, '19:00', '20:00', 'Online', 'Piano'),
  slot('Bảo', 1, '09:00', '09:30', 'Studio', 'Piano'),
  slot('Bảo', 4, '09:00', '09:30', 'Studio', 'Piano'),
  slot('Mai', 1, '18:00', '18:45', 'Studio', 'Piano'),
  slot('Huy', 4, '18:00', '19:00', 'Home', 'Piano'),
  slot('Hương', 6, '11:00', '12:00', 'Studio', 'Theory', 'Covering key signatures.'),
  slot('Nam', 3, '09:30', '10:00', 'Studio', 'Piano'),
  slot('Nam', 5, '09:30', '10:00', 'Studio', 'Piano'),
]

const defaultSettings: Settings = {
  id: 'default',
  teacherName: 'Teacher',
  currency: 'VND',
  defaultLessonDuration: 60,
  defaultLocation: 'Studio',
  firstDayOfWeek: 1,
  theme: 'system',
}

export async function seedDatabaseIfEmpty(): Promise<void> {
  const studentCount = await db.students.count()
  if (studentCount > 0) return

  await db.transaction('rw', db.students, db.timetableSlots, db.settings, async () => {
    await db.students.bulkAdd(students)
    await db.timetableSlots.bulkAdd(timetableSlots)
    await db.settings.put(defaultSettings)
  })
}

export async function ensureSettingsExist(): Promise<void> {
  const existing = await db.settings.get('default')
  if (!existing) {
    await db.settings.put(defaultSettings)
  }
}
