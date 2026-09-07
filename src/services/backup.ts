import { db } from '../data/db'
import type { Lesson, RecurringLesson, Settings, Student } from '../types'

export interface BackupPayload {
  version: 1
  exportedAt: string
  students: Student[]
  lessons: Lesson[]
  recurringLessons: RecurringLesson[]
  settings: Settings | undefined
}

export async function exportBackup(): Promise<BackupPayload> {
  const [students, lessons, recurringLessons, settings] = await Promise.all([
    db.students.toArray(),
    db.lessons.toArray(),
    db.recurringLessons.toArray(),
    db.settings.get('default'),
  ])
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    students,
    lessons,
    recurringLessons,
    settings,
  }
}

export function downloadBackupFile(payload: BackupPayload): void {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  const stamp = payload.exportedAt.slice(0, 10)
  a.href = url
  a.download = `piano-schedule-backup-${stamp}.json`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export class ImportError extends Error {}

function isValidPayload(data: unknown): data is BackupPayload {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  return Array.isArray(d.students) && Array.isArray(d.lessons) && Array.isArray(d.recurringLessons)
}

export async function importBackup(file: File, mode: 'replace' | 'merge'): Promise<{ students: number; lessons: number; recurringLessons: number }> {
  let data: unknown
  try {
    const text = await file.text()
    data = JSON.parse(text)
  } catch {
    throw new ImportError('This file could not be read. Please choose a valid Piano Schedule backup (.json) file.')
  }

  if (!isValidPayload(data)) {
    throw new ImportError('This does not look like a valid Piano Schedule backup file.')
  }

  await db.transaction('rw', db.students, db.lessons, db.recurringLessons, db.settings, async () => {
    if (mode === 'replace') {
      await Promise.all([db.students.clear(), db.lessons.clear(), db.recurringLessons.clear()])
    }
    if (data.students.length) await db.students.bulkPut(data.students)
    if (data.lessons.length) await db.lessons.bulkPut(data.lessons)
    if (data.recurringLessons.length) await db.recurringLessons.bulkPut(data.recurringLessons)
    if (data.settings) await db.settings.put(data.settings)
  })

  return { students: data.students.length, lessons: data.lessons.length, recurringLessons: data.recurringLessons.length }
}
