import { nanoid } from 'nanoid'
import { db } from './db'
import type { DayOfWeek, Settings, Student, TimetableSlot } from '../types'

const now = Date.now()

function makeStudent(partial: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Student {
  return { ...partial, id: nanoid(10), createdAt: now, updatedAt: now }
}

// No nickname is invented here — the teacher only provided full names, so the
// full name is used everywhere (student list, calendar blocks, search) to
// avoid guessing at how each name should be shortened.
function student(name: string): Student {
  return makeStudent({
    name,
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
  student('Lê Minh Khang'),
  student('Nguyễn Đức Duy'),
  student('Nguyễn Hữu Đăng Trường'),
  student('Lê Minh Thắng'),
  student('Đỗ Nguyễn Phúc Hậu'),
  student('Vũ Thị Minh Khiêm'),
  student('Lâm Trúc Quỳnh'),
  student('Phạm Thanh Châu'),
  student('Nguyễn Thị Kim Ngân'),
  student('Trần Thiên Anh'),
  student('Hà Trần Bích Ngọc'),
  student('Đỗ Minh Long'),
  student('Nguyễn Trương Thảo Vy'),
  student('Tôn Anh Minh'),
  student('Nguyễn Huỳnh Ngọc Châu'),
  student('Phan Quốc Bảo'),
  student('Võ Hữu Minh Chánh'),
  student('Bùi Thắng Lợi'),
  student('Ngô Ngọc Uyên Nhi'),
]

const byName = (name: string) => students.find((s) => s.name === name)!

function slot(name: string, dayOfWeek: DayOfWeek, startTime: string, endTime: string): TimetableSlot {
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = endTime.split(':').map(Number)
  return {
    id: nanoid(10),
    studentId: byName(name).id,
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
  slot('Lê Minh Khang', 2, '18:00', '19:00'),
  slot('Nguyễn Đức Duy', 2, '19:00', '20:00'),
  slot('Nguyễn Hữu Đăng Trường', 2, '20:00', '21:00'),
  slot('Lê Minh Thắng', 2, '21:00', '22:00'),
  // Wednesday (Thứ 4)
  slot('Đỗ Nguyễn Phúc Hậu', 3, '09:00', '10:00'),
  slot('Vũ Thị Minh Khiêm', 3, '10:00', '11:00'),
  slot('Lâm Trúc Quỳnh', 3, '13:00', '14:00'),
  // Thursday (Thứ 5)
  slot('Phạm Thanh Châu', 4, '18:00', '19:00'),
  slot('Nguyễn Thị Kim Ngân', 4, '21:00', '22:00'),
  // Friday (Thứ 6)
  slot('Trần Thiên Anh', 5, '15:00', '16:00'),
  slot('Hà Trần Bích Ngọc', 5, '17:00', '18:00'),
  slot('Đỗ Minh Long', 5, '19:00', '20:00'),
  // Saturday (Thứ 7)
  slot('Nguyễn Trương Thảo Vy', 6, '08:00', '09:00'),
  slot('Tôn Anh Minh', 6, '12:00', '13:00'),
  slot('Nguyễn Huỳnh Ngọc Châu', 6, '16:00', '17:00'),
  // Sunday (Chủ Nhật)
  slot('Phan Quốc Bảo', 0, '08:00', '09:00'),
  slot('Võ Hữu Minh Chánh', 0, '12:00', '13:00'),
  slot('Bùi Thắng Lợi', 0, '14:00', '15:00'),
  slot('Ngô Ngọc Uyên Nhi', 0, '15:00', '16:00'),
  slot('Nguyễn Huỳnh Ngọc Châu', 0, '16:00', '17:00'),
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
