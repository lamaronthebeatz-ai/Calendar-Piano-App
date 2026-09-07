import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { Dialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { Field, SelectInput, Textarea } from '../../components/fields'
import { EmptyState } from '../../components/EmptyState'
import { NoteIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import { useLessons, useStudents } from '../../hooks/useLiveData'
import { updateLesson } from '../../services/lessonsService'
import { formatDayLabel } from '../../utils/date'
import { formatTimeRange } from '../../utils/time'

export function QuickNoteModal() {
  const open = useUIStore((s) => s.noteFlowOpen)
  const setOpen = useUIStore((s) => s.setNoteFlowOpen)
  const pushToast = useUIStore((s) => s.pushToast)
  const students = useStudents() ?? []
  const lessons = useLessons() ?? []

  const [studentId, setStudentId] = useState('')
  const [lessonId, setLessonId] = useState('')
  const [note, setNote] = useState('')

  const studentLessons = useMemo(() => {
    return lessons
      .filter((l) => l.studentId === studentId && l.status !== 'cancelled')
      .sort((a, b) => (a.date + a.startTime < b.date + b.startTime ? 1 : -1))
      .slice(0, 8)
  }, [lessons, studentId])

  const selectedLesson = studentLessons.find((l) => l.id === lessonId)

  function reset() {
    setStudentId('')
    setLessonId('')
    setNote('')
  }

  async function handleSave() {
    if (!lessonId) return
    await updateLesson(lessonId, { note })
    pushToast('Lesson note saved', 'success')
    reset()
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
        reset()
      }}
      title="Add Lesson Note"
      width="sm"
      footer={
        selectedLesson ? (
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Note
            </Button>
          </div>
        ) : undefined
      }
    >
      <div className="space-y-4">
        <Field label="Student">
          <SelectInput
            value={studentId}
            onChange={(e) => {
              setStudentId(e.target.value)
              setLessonId('')
            }}
          >
            <option value="">Select a student…</option>
            {students
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nickname || s.name}
                </option>
              ))}
          </SelectInput>
        </Field>

        {studentId && studentLessons.length === 0 && (
          <EmptyState icon={<NoteIcon width={28} height={28} />} title="No lessons found" description="This student has no lessons yet." />
        )}

        {studentId && studentLessons.length > 0 && (
          <div>
            <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Lesson</p>
            <div className="max-h-48 space-y-1.5 overflow-y-auto">
              {studentLessons.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    setLessonId(l.id)
                    setNote(l.note ?? '')
                  }}
                  className={clsx(
                    'flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-[13px] transition-colors',
                    lessonId === l.id ? 'border-[var(--color-accent)] bg-[var(--color-status-confirmed-bg)]' : 'border-[var(--color-border)] hover:bg-[var(--color-surface-sunken)]',
                  )}
                >
                  <span>{formatDayLabel(new Date(l.date))}</span>
                  <span className="text-[var(--color-ink-muted)]">{formatTimeRange(l.startTime, l.endTime)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedLesson && (
          <Field label="Note">
            <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="What did you work on this lesson?" autoFocus />
          </Field>
        )}
      </div>
    </Dialog>
  )
}
