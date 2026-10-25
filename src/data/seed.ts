import { db } from './db'
import type { Settings, Student, TimetableSlot } from '../types'
import backup from './seed-backup.json'

/**
 * Lamar's schedule as of the backup of 24/10/2026 (Cài đặt → Sao lưu). A device with no students yet starts
 * from it, so the app opens with the real students and timetable; a device that already has data is left alone.
 * To refresh it, replace seed-backup.json with a newer backup file.
 */
const students = backup.students as Student[]
const timetableSlots = backup.timetableSlots as TimetableSlot[]
const defaultSettings = backup.settings as Settings

export async function seedDatabaseIfEmpty(): Promise<void> {
  const studentCount = await db.students.count()
  if (studentCount > 0) return

  await db.transaction('rw', db.students, db.timetableSlots, db.settings, async () => {
    await db.students.bulkPut(students)
    await db.timetableSlots.bulkPut(timetableSlots)
    if (!(await db.settings.get('default'))) await db.settings.put(defaultSettings)
  })
}

export async function ensureSettingsExist(): Promise<void> {
  const existing = await db.settings.get('default')
  if (!existing) {
    await db.settings.put(defaultSettings)
  }
}
