import { useEffect, useState } from 'react'
import { ConfirmDialog, Dialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { StatusBadge } from '../../components/Badge'
import { Textarea } from '../../components/fields'
import { useUIStore } from '../../store/uiStore'
import { useStudents } from '../../hooks/useLiveData'
import { formatDayLabel } from '../../utils/date'
import { formatDuration, formatTimeRange } from '../../utils/time'
import { CalendarIcon, ClockIcon, CopyIcon, EditIcon, MapPinIcon, TrashIcon } from '../../components/icons'
import { deleteLesson, deleteRecurringSeries, duplicateLesson, setLessonStatus, updateLesson } from '../../services/lessonsService'
import { addDays, toDateKey } from '../../utils/date'

export function LessonDetailSheet() {
  const lesson = useUIStore((s) => s.detailLesson)
  const closeDetail = useUIStore((s) => s.closeDetail)
  const openEditLesson = useUIStore((s) => s.openEditLesson)
  const pushToast = useUIStore((s) => s.pushToast)
  const students = useStudents() ?? []
  const student = students.find((s) => s.id === lesson?.studentId)

  const [note, setNote] = useState(lesson?.note ?? '')
  const [confirmCancel, setConfirmCancel] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(() => {
    setNote(lesson?.note ?? '')
  }, [lesson?.id, lesson?.note])

  if (!lesson) return null

  const saveNote = async () => {
    await updateLesson(lesson.id, { note })
    pushToast('Lesson note saved', 'success')
  }

  const handleDuplicate = async () => {
    const targetDate = toDateKey(addDays(new Date(lesson.date), 7))
    await duplicateLesson(lesson, targetDate)
    pushToast(`Duplicated to ${formatDayLabel(new Date(targetDate))}`, 'success')
    closeDetail()
  }

  const handleDelete = async (scope: 'single' | 'series') => {
    if (scope === 'series' && lesson.recurringLessonId) {
      await deleteRecurringSeries(lesson.recurringLessonId, lesson.date)
    } else {
      await deleteLesson(lesson.id)
    }
    pushToast('Lesson deleted', 'success')
    closeDetail()
  }

  return (
    <>
      <Dialog open={!!lesson} onClose={closeDetail} title={student?.nickname || student?.name || 'Lesson'} width="sm">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <StatusBadge status={lesson.status} />
            <span className="text-[13px] text-[var(--color-ink-muted)]">{lesson.type}</span>
          </div>

          <div className="space-y-2.5 text-[14px] text-[var(--color-ink)]">
            <div className="flex items-center gap-2.5">
              <CalendarIcon width={16} height={16} className="text-[var(--color-ink-faint)]" />
              {formatDayLabel(new Date(lesson.date))}
            </div>
            <div className="flex items-center gap-2.5">
              <ClockIcon width={16} height={16} className="text-[var(--color-ink-faint)]" />
              {formatTimeRange(lesson.startTime, lesson.endTime)}
              <span className="text-[var(--color-ink-faint)]">· {formatDuration(lesson.duration)}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPinIcon width={16} height={16} className="text-[var(--color-ink-faint)]" />
              {lesson.location}
            </div>
          </div>

          {lesson.recurringLessonId && (
            <p className="rounded-lg bg-[var(--color-surface-sunken)] px-3 py-2 text-[12.5px] text-[var(--color-ink-muted)]">
              Part of a recurring series.
            </p>
          )}

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Button size="sm" variant="secondary" onClick={() => setLessonStatus(lesson.id, 'completed')}>
              Complete
            </Button>
            <Button size="sm" variant="secondary" onClick={() => setLessonStatus(lesson.id, 'no-show')}>
              No Show
            </Button>
            <Button size="sm" variant="secondary" icon={<CopyIcon width={14} height={14} />} onClick={handleDuplicate}>
              Duplicate
            </Button>
            <Button size="sm" variant="danger" onClick={() => setConfirmCancel(true)}>
              Cancel Lesson
            </Button>
          </div>

          <div>
            <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Lesson note</p>
            <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="What did you work on this lesson?" />
            <div className="mt-2 flex justify-end">
              <Button size="sm" variant="primary" onClick={saveNote} disabled={note === (lesson.note ?? '')}>
                Save Note
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
          <button
            onClick={() => setConfirmDelete(true)}
            className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-status-cancelled)] hover:opacity-80"
          >
            <TrashIcon width={15} height={15} />
            Delete
          </button>
          <Button
            size="sm"
            variant="primary"
            icon={<EditIcon width={14} height={14} />}
            onClick={() => {
              const current = lesson
              closeDetail()
              openEditLesson(current.id)
            }}
          >
            Edit Lesson
          </Button>
        </div>
      </Dialog>

      <ConfirmDialog
        open={confirmCancel}
        onClose={() => setConfirmCancel(false)}
        onConfirm={() => setLessonStatus(lesson.id, 'cancelled')}
        title="Cancel this lesson?"
        description={`This will mark the lesson with ${student?.nickname || student?.name} on ${formatDayLabel(new Date(lesson.date))} as cancelled.`}
        confirmLabel="Cancel Lesson"
        tone="danger"
      />

      <Dialog open={confirmDelete} onClose={() => setConfirmDelete(false)} title="Delete lesson" width="sm">
        <p className="text-sm text-[var(--color-ink-muted)]">
          This permanently removes the lesson from your schedule. This cannot be undone.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          {lesson.recurringLessonId && (
            <Button
              variant="danger"
              onClick={() => {
                handleDelete('series')
                setConfirmDelete(false)
              }}
            >
              Delete this and future lessons
            </Button>
          )}
          <Button
            variant="danger"
            onClick={() => {
              handleDelete('single')
              setConfirmDelete(false)
            }}
          >
            Delete only this lesson
          </Button>
          <Button variant="secondary" onClick={() => setConfirmDelete(false)}>
            Keep lesson
          </Button>
        </div>
      </Dialog>
    </>
  )
}
