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

/** Key used to recognise the same student across devices, whose ids differ. */
const nameKey = (name: string) => name.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('vi')

/** Key used to recognise the same weekly slot: one student, one day, one start time. */
const slotKey = (s: Pick<TimetableSlot, 'studentId' | 'dayOfWeek' | 'startTime'>) => `${s.studentId}|${s.dayOfWeek}|${s.startTime}`

/**
 * Collapses duplicates inside the backup itself (a backup exported after an
 * earlier double import contains each student and slot twice). Students with
 * the same name keep the most recently updated copy; slots are re-pointed to
 * the kept student and then de-duplicated by student + day + start time.
 */
function dedupePayload(students: Student[], slots: TimetableSlot[]) {
  const keptByName = new Map<string, Student>()
  const idMap = new Map<string, string>()
  for (const s of students) {
    const k = nameKey(s.name)
    const kept = keptByName.get(k)
    if (!kept || s.updatedAt > kept.updatedAt) keptByName.set(k, s)
  }
  for (const s of students) idMap.set(s.id, keptByName.get(nameKey(s.name))!.id)

  const keptSlots = new Map<string, TimetableSlot>()
  for (const slot of slots) {
    const remapped = { ...slot, studentId: idMap.get(slot.studentId) ?? slot.studentId }
    const k = slotKey(remapped)
    const kept = keptSlots.get(k)
    if (!kept || remapped.updatedAt > kept.updatedAt) keptSlots.set(k, remapped)
  }
  return { students: [...keptByName.values()], slots: [...keptSlots.values()] }
}

/**
 * replace: the backup becomes the whole schedule (everything on this device is overwritten).
 * merge: backup records overwrite matching records on this device — matched by id, or else by
 * student name / by student + day + start time — and only genuinely new records are added.
 */
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

  const incoming = dedupePayload(data.students, data.timetableSlots)
  const settings = data.settings

  await db.transaction('rw', db.students, db.timetableSlots, db.settings, async () => {
    let students = incoming.students
    let slots = incoming.slots

    if (mode === 'replace') {
      await Promise.all([db.students.clear(), db.timetableSlots.clear()])
    } else {
      const [existingStudents, existingSlots] = await Promise.all([db.students.toArray(), db.timetableSlots.toArray()])
      const existingIds = new Set(existingStudents.map((s) => s.id))
      const existingByName = new Map(existingStudents.map((s) => [nameKey(s.name), s.id]))
      const idMap = new Map<string, string>()
      students = students.map((s) => {
        const target = existingIds.has(s.id) ? s.id : (existingByName.get(nameKey(s.name)) ?? s.id)
        idMap.set(s.id, target)
        return { ...s, id: target }
      })

      const existingSlotIds = new Set(existingSlots.map((s) => s.id))
      const existingByKey = new Map(existingSlots.map((s) => [slotKey(s), s.id]))
      slots = slots.map((slot) => {
        const remapped = { ...slot, studentId: idMap.get(slot.studentId) ?? slot.studentId }
        const id = existingSlotIds.has(remapped.id) ? remapped.id : (existingByKey.get(slotKey(remapped)) ?? remapped.id)
        return { ...remapped, id }
      })
    }

    if (students.length) await db.students.bulkPut(students)
    if (slots.length) await db.timetableSlots.bulkPut(slots)
    if (settings) await db.settings.put(settings)
  })

  return { students: incoming.students.length, timetableSlots: incoming.slots.length }
}
