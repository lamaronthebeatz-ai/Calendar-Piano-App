import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { ConfirmDialog, Dialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { Field, SelectInput, Textarea, TextInput } from '../../components/fields'
import { AlertTriangleIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import { useSettings, useStudents, useTimetableSlots } from '../../hooks/useLiveData'
import type { DayOfWeek, LessonLocation, LessonType } from '../../types'
import { checkConflicts, createSlotsForDays, updateSlot } from '../../services/timetableService'
import { durationMinutes, formatDuration, minutesToTime, snapToStep, timeToMinutes } from '../../utils/time'
import { WEEKDAY_SHORT } from '../../utils/date'
import { LOCATION_OPTIONS, LOCATION_PALETTE } from '../../utils/color'
import { LESSON_TYPE_LABELS, STUDENT_STATUS_LABELS } from '../../utils/labels'

const LESSON_TYPES: LessonType[] = ['Piano', 'Theory', 'Piano + Theory', 'Trial Lesson', 'Makeup Lesson']
const DAY_ORDER: DayOfWeek[] = [1, 2, 3, 4, 5, 6, 0]

export function LessonFormModal() {
  const modal = useUIStore((s) => s.lessonModal)
  const closeLessonModal = useUIStore((s) => s.closeLessonModal)
  const pushToast = useUIStore((s) => s.pushToast)
  const students = useStudents() ?? []
  const slots = useTimetableSlots() ?? []
  const settings = useSettings()

  const editingSlot = modal.editingSlotId ? slots.find((s) => s.id === modal.editingSlotId) : undefined
  const isEditing = !!editingSlot

  const [studentId, setStudentId] = useState('')
  const [days, setDays] = useState<DayOfWeek[]>([])
  const [startTime, setStartTime] = useState('15:00')
  const [endTime, setEndTime] = useState('16:00')
  const [location, setLocation] = useState<LessonLocation>('Studio')
  const [type, setType] = useState<LessonType>('Piano')
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [conflictDays, setConflictDays] = useState<DayOfWeek[]>([])
  const [confirmSubmit, setConfirmSubmit] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!modal.open) return
    if (editingSlot) {
      setStudentId(editingSlot.studentId)
      setDays([editingSlot.dayOfWeek])
      setStartTime(editingSlot.startTime)
      setEndTime(editingSlot.endTime)
      setLocation(editingSlot.location)
      setType(editingSlot.type)
      setNote(editingSlot.note ?? '')
    } else {
      const draft = modal.draft
      setStudentId(draft?.studentId ?? '')
      setDays(draft?.dayOfWeek !== undefined ? [draft.dayOfWeek] : [])
      setStartTime(draft?.startTime ?? '15:00')
      setEndTime(draft?.endTime ?? '16:00')
      setLocation(draft?.location ?? settings.defaultLocation)
      setType(draft?.type ?? 'Piano')
      setNote('')
    }
    setError('')
    setConflictDays([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal.open, modal.editingSlotId])

  const selectedStudent = students.find((s) => s.id === studentId)
  const duration = useMemo(() => {
    const d = durationMinutes(startTime, endTime)
    return d > 0 ? d : 0
  }, [startTime, endTime])

  useEffect(() => {
    if (!modal.open || days.length === 0 || duration <= 0) {
      setConflictDays([])
      return
    }
    let cancelled = false
    Promise.all(days.map((dayOfWeek) => checkConflicts({ id: editingSlot?.id, dayOfWeek, startTime, endTime }))).then((results) => {
      if (cancelled) return
      setConflictDays(days.filter((_, i) => results[i].length > 0))
    })
    return () => {
      cancelled = true
    }
  }, [modal.open, days, startTime, endTime, duration, editingSlot?.id])

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

  function toggleDay(day: DayOfWeek) {
    if (isEditing) {
      setDays([day])
      return
    }
    setDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort()))
  }

  function validate(): string | null {
    if (!studentId) return 'Vui lòng chọn một học viên.'
    if (days.length === 0) return 'Vui lòng chọn ít nhất một ngày trong tuần.'
    if (duration <= 0) return 'Giờ kết thúc phải sau giờ bắt đầu.'
    return null
  }

  async function performSubmit() {
    setSaving(true)
    try {
      if (isEditing && editingSlot) {
        await updateSlot(editingSlot.id, { studentId, dayOfWeek: days[0], startTime, endTime, location, type, note: note || undefined })
        pushToast('Đã cập nhật buổi học', 'success')
      } else {
        const result = await createSlotsForDays({ studentId, startTime, endTime, location, type, note: note || undefined }, days)
        pushToast(
          `Đã thêm ${result.created.length} buổi học hằng tuần${result.conflictDays.length ? ` (trùng lịch vào ${result.conflictDays.map((d) => WEEKDAY_SHORT[d]).join(', ')})` : ''}`,
          'success',
        )
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
    if (conflictDays.length > 0) {
      setConfirmSubmit(true)
    } else {
      performSubmit()
    }
  }

  return (
    <>
      <Dialog
        open={modal.open}
        onClose={closeLessonModal}
        title={isEditing ? 'Sửa buổi học' : 'Thêm buổi học'}
        subtitle={selectedStudent ? selectedStudent.nickname || selectedStudent.name : undefined}
        footer={
          <div className="flex items-center justify-between gap-3">
            <div className="text-[13px] text-[var(--color-ink-muted)]">{duration > 0 && <span>Thời lượng: {formatDuration(duration)}</span>}</div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={closeLessonModal}>
                Huỷ
              </Button>
              <Button variant="primary" onClick={handleSubmit} disabled={saving}>
                {isEditing ? 'Lưu thay đổi' : 'Thêm vào thời khóa biểu'}
              </Button>
            </div>
          </div>
        }
      >
        <div className="space-y-4">
          <Field label="Học viên">
            <SelectInput value={studentId} onChange={(e) => handleStudentChange(e.target.value)}>
              <option value="">Chọn một học viên…</option>
              {students
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nickname || s.name}
                    {s.status !== 'active' ? ` (${STUDENT_STATUS_LABELS[s.status]})` : ''}
                  </option>
                ))}
            </SelectInput>
          </Field>

          <div>
            <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">{isEditing ? 'Ngày' : 'Ngày trong tuần'}</p>
            <div className="flex flex-wrap gap-1.5">
              {DAY_ORDER.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={clsx(
                    'flex h-9 min-w-[42px] items-center justify-center rounded-lg px-2 text-[12.5px] font-semibold transition-colors',
                    days.includes(day)
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)]'
                      : 'bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)]',
                  )}
                >
                  {WEEKDAY_SHORT[day]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Giờ bắt đầu">
              <TextInput type="time" step={900} value={startTime} onChange={(e) => setStartTime(e.target.value)} onBlur={(e) => snapTime(e.target.value, setStartTime)} />
            </Field>
            <Field label="Giờ kết thúc">
              <TextInput type="time" step={900} value={endTime} onChange={(e) => setEndTime(e.target.value)} onBlur={(e) => snapTime(e.target.value, setEndTime)} />
            </Field>
          </div>

          {conflictDays.length > 0 && (
            <div className="flex items-center gap-2 rounded-xl bg-[var(--color-status-pending-bg)] px-3 py-2.5 text-[13px] text-[var(--color-status-pending)]">
              <AlertTriangleIcon width={16} height={16} className="shrink-0" />
              Trùng lịch vào {conflictDays.map((d) => WEEKDAY_SHORT[d]).join(', ')}.
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Địa điểm">
              <SelectInput value={location} onChange={(e) => setLocation(e.target.value as LessonLocation)}>
                {LOCATION_OPTIONS.map((l) => (
                  <option key={l} value={l}>
                    {LOCATION_PALETTE[l].label}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Loại buổi học">
              <SelectInput value={type} onChange={(e) => setType(e.target.value as LessonType)}>
                {LESSON_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {LESSON_TYPE_LABELS[t]}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>

          <Field label="Ghi chú">
            <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ghi chú thêm về buổi học này…" />
          </Field>

          {error && <p className="text-[13px] text-[var(--color-status-cancelled)]">{error}</p>}
        </div>
      </Dialog>

      <ConfirmDialog
        open={confirmSubmit}
        onClose={() => setConfirmSubmit(false)}
        onConfirm={performSubmit}
        title="Trùng lịch"
        description={`Khung giờ này trùng với buổi học đã có vào ${conflictDays.map((d) => WEEKDAY_SHORT[d]).join(', ')}. Vẫn muốn thêm?`}
        confirmLabel="Vẫn thêm"
        tone="danger"
      />
    </>
  )
}
