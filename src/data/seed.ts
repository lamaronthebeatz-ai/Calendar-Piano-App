import { nanoid } from 'nanoid'
import { db } from './db'
import type { DayOfWeek, Settings, Student, TimetableSlot } from '../types'

const now = Date.now()

function makeStudent(partial: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Student {
  return { ...partial, id: nanoid(10), createdAt: now, updatedAt: now }
}

function student(name: string, nickname: string): Student {
  return makeStudent({
    name,
    nickname,
    instrument: 'Piano',
    level: 'Intermediate',
    defaultDuration: 60,
    defaultLocation: 'Studio',
    rateType: 'perLesson',
    rate: 0,
    status: 'active',
  })
}

const students: Student[] = [
  student('Lê Minh Khang', 'Khang'),
  student('Nguyễn Đức Duy', 'Duy'),
  student('Nguyễn Hữu Đăng Trường', 'Trường'),
  student('Lê Minh Thắng', 'Thắng'),
  student('Đỗ Nguyễn Phúc Hậu', 'Hậu'),
  student('Vũ Thị Minh Khiêm', 'Khiêm'),
  student('Lâm Trúc Quỳnh', 'Quỳnh'),
  student('Phạm Thanh Châu', 'Thanh Châu'),
  student('Nguyễn Thị Kim Ngân', 'Ngân'),
  student('Trần Thiên Anh', 'Anh'),
  student('Hà Trần Bích Ngọc', 'Ngọc'),
  student('Đỗ Minh Long', 'Long'),
  student('Nguyễn Trương Thảo Vy', 'Vy'),
  student('Tôn Anh Minh', 'Minh'),
  student('Nguyễn Huỳnh Ngọc Châu', 'Ngọc Châu'),
  student('Phan Quốc Bảo', 'Bảo'),
  student('Võ Hữu Minh Chánh', 'Chánh'),
  student('Bùi Thắng Lợi', 'Lợi'),
  student('Ngô Ngọc Uyên Nhi', 'Nhi'),
]

const byNick = (nick: string) => students.find((s) => s.nickname === nick)!

function slot(nick: string, dayOfWeek: DayOfWeek, startTime: string, endTime: string): TimetableSlot {
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = endTime.split(':').map(Number)
  return {
    id: nanoid(10),
    studentId: byNick(nick).id,
    dayOfWeek,
    startTime,
    endTime,
    duration: eh * 60 + em - (sh * 60 + sm),
    location: 'Studio',
    type: 'Piano',
    createdAt: now,
    updatedAt: now,
  }
}

// Working hours: Mon off · Tue/Thu/Fri 13:00–22:00 · Wed/Sat/Sun 08:00–17:00
// Day numbers match Date#getDay(): 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat.
const timetableSlots: TimetableSlot[] = [
  // Tuesday (Thứ 3)
  slot('Khang', 2, '18:00', '19:00'),
  slot('Duy', 2, '19:00', '20:00'),
  slot('Trường', 2, '20:00', '21:00'),
  slot('Thắng', 2, '21:00', '22:00'),
  // Wednesday (Thứ 4)
  slot('Hậu', 3, '09:00', '10:00'),
  slot('Khiêm', 3, '10:00', '11:00'),
  slot('Quỳnh', 3, '13:00', '14:00'),
  // Thursday (Thứ 5)
  slot('Thanh Châu', 4, '18:00', '19:00'),
  slot('Ngân', 4, '21:00', '22:00'),
  // Friday (Thứ 6)
  slot('Anh', 5, '15:00', '16:00'),
  slot('Ngọc', 5, '17:00', '18:00'),
  slot('Long', 5, '19:00', '20:00'),
  // Saturday (Thứ 7)
  slot('Vy', 6, '08:00', '09:00'),
  slot('Minh', 6, '12:00', '13:00'),
  slot('Ngọc Châu', 6, '16:00', '17:00'),
  // Sunday (Chủ Nhật)
  slot('Bảo', 0, '08:00', '09:00'),
  slot('Chánh', 0, '12:00', '13:00'),
  slot('Lợi', 0, '14:00', '15:00'),
  slot('Nhi', 0, '15:00', '16:00'),
  slot('Ngọc Châu', 0, '16:00', '17:00'),
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
