import { db } from '../data/db'
import type { Settings, Student, TimetableSlot } from '../types'

export interface BackupPayload {
  version: 2
  exportedAt: string
  students: Student[]
  timetableSlots: TimetableSlot[]
  settings: Settings | undefined
}

export async function exportBackup(): Promise<BackupPayload> {
  const [students, timetableSlots, settings] = await Promise.all([
    db.students.toArray(),
    db.timetableSlots.toArray(),
    db.settings.get('default'),
  ])
  return {
    version: 2,
    exportedAt: new Date().toISOString(),
    students,
    timetableSlots,
    settings,
  }
}

async function getDownloadsCapability(): Promise<ClaudeDownloadsNamespace | null> {
  if (typeof window === 'undefined' || !window.claude?.use) return null
  try {
    return await window.claude.use('downloads')
  } catch {
    return null
  }
}

export type DownloadOutcome = 'saved' | 'declined' | 'unavailable'

/**
 * Saves the backup file. Inside a published Claude Artifact, browsers block
 * script-triggered downloads, so this offers the file through the platform's
 * `downloads` capability when present; otherwise it falls back to a normal
 * `<a download>` browser download (the path used for a self-hosted deploy).
 */
export async function downloadBackupFile(payload: BackupPayload): Promise<DownloadOutcome> {
  const json = JSON.stringify(payload, null, 2)
  const stamp = payload.exportedAt.slice(0, 10)
  const filename = `piano-schedule-backup-${stamp}.json`

  const downloads = await getDownloadsCapability()
  if (downloads) {
    try {
      await downloads.save({ filename, data: json })
      return 'saved'
    } catch (err) {
      const code = err && typeof err === 'object' && 'code' in err ? (err as ClaudeDownloadsError).code : undefined
      if (code === 'declined') return 'declined'
      // Any other capability error: fall through to the classic browser download below.
    }
  }

  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
  return 'saved'
}

export class ImportError extends Error {}

function isValidPayload(data: unknown): data is BackupPayload {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  return d.version === 2 && Array.isArray(d.students) && Array.isArray(d.timetableSlots)
}

export async function importBackup(file: File, mode: 'replace' | 'merge'): Promise<{ students: number; timetableSlots: number }> {
  let data: unknown
  try {
    const text = await file.text()
    data = JSON.parse(text)
  } catch {
    throw new ImportError('This file could not be read. Please choose a valid Piano Schedule backup (.json) file.')
  }

  if (!isValidPayload(data)) {
    throw new ImportError('This does not look like a valid Piano Schedule backup file for this version of the app.')
  }

  await db.transaction('rw', db.students, db.timetableSlots, db.settings, async () => {
    if (mode === 'replace') {
      await Promise.all([db.students.clear(), db.timetableSlots.clear()])
    }
    if (data.students.length) await db.students.bulkPut(data.students)
    if (data.timetableSlots.length) await db.timetableSlots.bulkPut(data.timetableSlots)
    if (data.settings) await db.settings.put(data.settings)
  })

  return { students: data.students.length, timetableSlots: data.timetableSlots.length }
}
