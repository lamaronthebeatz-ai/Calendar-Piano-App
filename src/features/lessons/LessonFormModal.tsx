import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { Dialog, ConfirmDialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { Field, SegmentedControl, SelectInput, Textarea, TextInput } from '../../components/fields'
import { AlertTriangleIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import { useLessons, useSettings, useStudents } from '../../hooks/useLiveData'
import type { LessonLocation, LessonStatus, LessonType, RecurrenceFrequency } from '../../types'
import { checkConflicts, createLesson, createRecurringLesson, updateLesson } from '../../services/lessonsService'
import { durationMinutes, formatDuration, minutesToTime, snapToStep, timeToMinutes } from '../../utils/time'
import { toDateKey } from '../../utils/date'
import { STATUS_OPTIONS } from '../../utils/color'

const LESSON_TYPES: LessonType[] = ['Piano', 'Theory', 'Piano + Theory', 'Trial Lesson', 'Makeup Lesson']
const LOCATIONS: LessonLocation[] = ['Studio', 'Home', 'Online', 'Other']
const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

type RepeatOption = 'none' | 'weekly' | 'biweekly' | 'monthly'

export function LessonFormModal() {
  const modal = useUIStore((s) => s.lessonModal)
  const closeLessonModal = useUIStore((s) => s.closeLessonModal)
  const pushToast = useUIStore((s) => s.pushToast)
  const students = useStudents() ?? []
  const lessons = useLessons() ?? []
  const settings = useSettings()

  const editingLesson = modal.editingLessonId ? lessons.find((l) => l.id === modal.editingLessonId) : undefined
  const isEditing = !!editingLesson

  const [studentId, setStudentId] = useState('')
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('15:00')
  const [endTime, setEndTime] = useState('16:00')
  const [location, setLocation] = useState<LessonLocation>('Studio')
  const [type, setType] = useState<LessonType>('Piano')
  const [status, setStatus] = useState<LessonStatus>('confirmed')
  const [note, setNote] = useState('')
  const [repeat, setRepeat] = useState<RepeatOption>('none')
  const [repeatDays, setRepeatDays] = useState<number[]>([])
  const [repeatUntil, setRepeatUntil] = useState('')
  const [error, setError] = useState('')
  const [conflictCount, setConflictCount] = useState(0)
  const [confirmSubmit, setConfirmSubmit] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!modal.open) return
    if (editingLesson) {
      setStudentId(editingLesson.studentId)
      setDate(editingLesson.date)
      setStartTime(editingLesson.startTime)
      setEndTime(editingLesson.endTime)
      setLocation(editingLesson.location)
      setType(editingLesson.type)
      setStatus(editingLesson.status)
      setNote(editingLesson.note ?? '')
      setRepeat('none')
    } else {
      const draft = modal.draft
      const initialDate = draft?.date ?? toDateKey(new Date())
      setStudentId(draft?.studentId ?? '')
      setDate(initialDate)
      setStartTime(draft?.startTime ?? '15:00')
      setEndTime(draft?.endTime ?? '16:00')
      setLocation(draft?.location ?? settings.defaultLocation)
      setType(draft?.type ?? 'Piano')
      setStatus(draft?.status ?? 'confirmed')
      setNote('')
      setRepeat('none')
      setRepeatDays([new Date(initialDate).getDay()])
      setRepeatUntil('')
    }
    setError('')
    setConflictCount(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal.open, modal.editingLessonId])

  const selectedStudent = students.find((s) => s.id === studentId)
  const duration = useMemo(() => {
    const d = durationMinutes(startTime, endTime)
    return d > 0 ? d : 0
  }, [startTime, endTime])

  useEffect(() => {
    if (!modal.open || !date || !startTime || !endTime || duration <= 0) {
      setConflictCount(0)
      return
    }
    let cancelled = false
    checkConflicts({ id: editingLesson?.id, date, startTime, endTime }).then((conflicts) => {
      if (!cancelled) setConflictCount(conflicts.length)
    })
    return () => {
      cancelled = true
    }
  }, [modal.open, date, startTime, endTime, duration, editingLesson?.id])

  function handleStudentChange(id: string) {
    setStudentId(id)
    if (!isEditing) {
      const student = students.find((s) => s.id === id)
      if (student) {
        const startMin = timeToMinutes(startTime || '15:00')
        setStartTime(minutesToTime(startMin))
        setEndTime(minutesToTime(startMin + student.defaultDuration))
        setLocation(student.defaultLocation)
      }
    }
  }

  function snapTime(value: string, setter: (v: string) => void) {
    if (!value) return
    const snapped = minutesToTime(snapToStep(timeToMinutes(value)))
    setter(snapped)
  }

  function validate(): string | null {
    if (!studentId) return 'Please select a student.'
    if (!date) return 'Please choose a date.'
    if (duration <= 0) return 'End time must be after the start time.'
    if (repeat !== 'none') {
      if (!repeatUntil) return 'Please choose an end date for the recurring lesson.'
      if (repeatUntil < date) return 'Repeat-until date must be after the start date.'
      if ((repeat === 'weekly' || repeat === 'biweekly') && repeatDays.length === 0) return 'Select at least one day of the week.'
    }
    return null
  }

  async function performSubmit() {
    setSaving(true)
    try {
      if (isEditing && editingLesson) {
        await updateLesson(editingLesson.id, { studentId, date, startTime, endTime, location, type, status, note: note || undefined })
        pushToast('Lesson updated', 'success')
      } else if (repeat !== 'none') {
        const frequency: RecurrenceFrequency = repeat === 'monthly' ? 'monthly' : repeat === 'biweekly' ? 'biweekly' : 'weekly'
        const result = await createRecurringLesson({
          studentId,
          startDate: date,
          endDate: repeatUntil,
          daysOfWeek: repeatDays,
          startTime,
          endTime,
          frequency,
          location,
          type,
          status,
        })
        if (result.createdCount === 0) {
          pushToast('No new lessons were created — they already exist.', 'default')
        } else {
          pushToast(
            `Created ${result.createdCount} recurring lesson${result.createdCount === 1 ? '' : 's'}${result.conflictDates.length ? ` (${result.conflictDates.length} overlap existing lessons)` : ''}`,
            'success',
          )
        }
      } else {
        await createLesson({ studentId, date, startTime, endTime, location, type, status, note: note || undefined })
        pushToast('Lesson scheduled', 'success')
      }
      closeLessonModal()
    } finally {
      setSaving(false)
    }
  }

  function handleSubmit() {
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    if (conflictCount > 0) {
      setConfirmSubmit(true)
    } else {
      performSubmit()
    }
  }

  function toggleDay(day: number) {
    setRepeatDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort()))
  }

  return (
    <>
      <Dialog
        open={modal.open}
        onClose={closeLessonModal}
        title={isEditing ? 'Edit Lesson' : 'Add Lesson'}
        subtitle={selectedStudent ? selectedStudent.nickname || selectedStudent.name : undefined}
        footer={
          <div className="flex items-center justify-between gap-3">
            <div className="text-[13px] text-[var(--color-ink-muted)]">{duration > 0 && <span>Duration: {formatDuration(duration)}</span>}</div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={closeLessonModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit} disabled={saving}>
                {isEditing ? 'Save Changes' : 'Schedule Lesson'}
              </Button>
            </div>
          </div>
        }
      >
        <div className="space-y-4">
          <Field label="Student">
            <SelectInput value={studentId} onChange={(e) => handleStudentChange(e.target.value)}>
              <option value="">Select a student…</option>
              {students
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nickname || s.name}
                    {s.status !== 'active' ? ` (${s.status})` : ''}
                  </option>
                ))}
            </SelectInput>
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field label="Date">
              <TextInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Field>
            <Field label="Start Time">
              <TextInput type="time" step={900} value={startTime} onChange={(e) => setStartTime(e.target.value)} onBlur={(e) => snapTime(e.target.value, setStartTime)} />
            </Field>
            <Field label="End Time">
              <TextInput type="time" step={900} value={endTime} onChange={(e) => setEndTime(e.target.value)} onBlur={(e) => snapTime(e.target.value, setEndTime)} />
            </Field>
          </div>

          {conflictCount > 0 && (
            <div className="flex items-center gap-2 rounded-xl bg-[var(--color-status-pending-bg)] px-3 py-2.5 text-[13px] text-[var(--color-status-pending)]">
              <AlertTriangleIcon width={16} height={16} className="shrink-0" />
              Schedule conflict — overlaps {conflictCount} other lesson{conflictCount === 1 ? '' : 's'} on this day.
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field label="Location">
              <SelectInput value={location} onChange={(e) => setLocation(e.target.value as LessonLocation)}>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Lesson Type">
              <SelectInput value={type} onChange={(e) => setType(e.target.value as LessonType)}>
                {LESSON_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Status">
              <SelectInput value={status} onChange={(e) => setStatus(e.target.value as LessonStatus)}>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>

          {!isEditing && (
            <div className="space-y-3 rounded-xl border border-[var(--color-border)] p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-[var(--color-ink-muted)]">Repeat</p>
                <SegmentedControl
                  value={repeat}
                  onChange={setRepeat}
                  options={[
                    { value: 'none', label: 'None' },
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'biweekly', label: 'Biweekly' },
                    { value: 'monthly', label: 'Monthly' },
                  ]}
                />
              </div>
              {repeat !== 'none' && (
                <>
                  {repeat !== 'monthly' && (
                    <div className="flex gap-1.5">
                      {DAY_LABELS.map((label, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleDay(idx)}
                          className={clsx(
                            'flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold transition-colors',
                            repeatDays.includes(idx)
                              ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)]'
                              : 'bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)]',
                          )}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                  <Field label="Repeat until">
                    <TextInput type="date" value={repeatUntil} onChange={(e) => setRepeatUntil(e.target.value)} min={date} />
                  </Field>
                </>
              )}
            </div>
          )}

          <Field label="Notes">
            <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional notes about this lesson…" />
          </Field>

          {error && <p className="text-[13px] text-[var(--color-status-cancelled)]">{error}</p>}
        </div>
      </Dialog>

      <ConfirmDialog
        open={confirmSubmit}
        onClose={() => setConfirmSubmit(false)}
        onConfirm={performSubmit}
        title="Schedule Conflict"
        description={`You already have ${conflictCount} lesson${conflictCount === 1 ? '' : 's'} scheduled at this time. Schedule anyway?`}
        confirmLabel="Schedule Anyway"
        tone="danger"
      />
    </>
  )
}
