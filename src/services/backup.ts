import { db } from '../data/db'
import type { Settings, Student, TimetableSlot } from '../types'
import { allNotes, importNotes, type Note } from '../features/curriculum/reader/notes'

export interface BackupPayload {
  version: 2
  exportedAt: string
  students: Student[]
  timetableSlots: TimetableSlot[]
  settings: Settings | undefined
  /** Highlights and notes from the books and the library, per book (optional: older backups have none). */
  notes?: Record<string, Note[]>
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
    notes: allNotes(),
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

  // Phones (above all an iPhone running the app from the home screen) open a downloaded blob instead of saving it;
  // the share sheet lets the file go to Files, Drive, Zalo or another device.
  const file = new File([json], filename, { type: 'application/json' })
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches
  if (coarse && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: 'Sao lưu Lịch dạy' })
      return 'saved'
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return 'declined'
      // Sharing unavailable after all: fall back to a download.
    }
  }

  const url = URL.createObjectURL(file)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  // Revoking at once can leave Safari with an empty file.
  setTimeout(() => URL.revokeObjectURL(url), 60_000)
  return 'saved'
}

export class ImportError extends Error {}

function isValidPayload(data: unknown): data is BackupPayload {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  // The shape is what matters; a file from an older or newer build still carries the same two lists.
  return Array.isArray(d.students) && Array.isArray(d.timetableSlots)
}

/**
 * Reads a backup that may have travelled through chat apps, notes or mail: drops a byte-order mark and anything
 * wrapped around the JSON object (a ".json.txt" file, a pasted message).
 */
function parseBackup(text: string): unknown {
  const t = text.replace(/^\uFEFF/, '').trim()
  try {
    return JSON.parse(t)
  } catch {
    const start = t.indexOf('{')
    const end = t.lastIndexOf('}')
    if (start < 0 || end <= start) throw new ImportError('Tệp không phải bản sao lưu JSON (không đọc được nội dung).')
    return JSON.parse(t.slice(start, end + 1))
  }
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
    data = parseBackup(await file.text())
  } catch (err) {
    throw err instanceof ImportError ? err : new ImportError('Không đọc được tệp. Hãy chọn đúng tệp sao lưu (.json) đã xuất từ ứng dụng — tệp có thể đã bị hỏng khi gửi qua ứng dụng khác.')
  }

  if (!isValidPayload(data)) {
    throw new ImportError('Tệp này không phải bản sao lưu của ứng dụng (thiếu danh sách học viên hoặc lịch dạy).')
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

  if (data.notes && typeof data.notes === 'object') importNotes(data.notes, mode)

  return { students: incoming.students.length, timetableSlots: incoming.slots.length }
}
