import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ConfirmDialog, Dialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/fields'
import { useUIStore } from '../../store/uiStore'
import { useStudents } from '../../hooks/useLiveData'
import { WEEKDAY_NAMES, WEEKDAY_SHORT } from '../../utils/date'
import { formatDuration, formatTimeRange } from '../../utils/time'
import { LOCATION_PALETTE } from '../../utils/color'
import { LESSON_TYPE_LABELS } from '../../utils/labels'
import { ClockIcon, CopyIcon, EditIcon, MapPinIcon, TrashIcon } from '../../components/icons'
import { deleteSlot, duplicateSlot, updateSlot } from '../../services/timetableService'
import type { DayOfWeek } from '../../types'

const DAY_ORDER: DayOfWeek[] = [1, 2, 3, 4, 5, 6, 0]

export function LessonDetailSheet() {
  const slot = useUIStore((s) => s.detailSlot)
  const closeDetail = useUIStore((s) => s.closeDetail)
  const openEditLesson = useUIStore((s) => s.openEditLesson)
  const pushToast = useUIStore((s) => s.pushToast)
  const students = useStudents() ?? []
  const student = students.find((s) => s.id === slot?.studentId)

  const [note, setNote] = useState(slot?.note ?? '')
  const [duplicating, setDuplicating] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(() => {
    setNote(slot?.note ?? '')
    setDuplicating(false)
  }, [slot?.id, slot?.note])

  if (!slot) return null

  const saveNote = async () => {
    await updateSlot(slot.id, { note })
    pushToast('Đã lưu ghi chú', 'success')
  }

  const handleDuplicate = async (targetDay: DayOfWeek) => {
    await duplicateSlot(slot, targetDay)
    pushToast(`Đã nhân bản sang ${WEEKDAY_NAMES[targetDay]}`, 'success')
    closeDetail()
  }

  const handleDelete = async () => {
    await deleteSlot(slot.id)
    pushToast('Đã xoá buổi học', 'success')
    closeDetail()
  }

  return (
    <>
      <Dialog open={!!slot} onClose={closeDetail} title={student?.nickname || student?.name || 'Buổi học'} width="sm">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full bg-[var(--color-surface-sunken)] px-2.5 py-1 text-[12px] font-medium text-[var(--color-ink-muted)]">
            {LESSON_TYPE_LABELS[slot.type]}
          </span>

          <div className="space-y-2.5 text-[14px] text-[var(--color-ink)]">
            <div className="flex items-center gap-2.5">
              <ClockIcon width={16} height={16} className="text-[var(--color-ink-faint)]" />
              {WEEKDAY_NAMES[slot.dayOfWeek]} · {formatTimeRange(slot.startTime, slot.endTime)}
              <span className="text-[var(--color-ink-faint)]">· {formatDuration(slot.duration)}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPinIcon width={16} height={16} className="text-[var(--color-ink-faint)]" />
              {LOCATION_PALETTE[slot.location].label}
            </div>
          </div>

          <p className="rounded-lg bg-[var(--color-surface-sunken)] px-3 py-2 text-[12.5px] text-[var(--color-ink-muted)]">
            Lặp lại hằng tuần.
          </p>

          <div>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" icon={<CopyIcon width={14} height={14} />} onClick={() => setDuplicating((v) => !v)} fullWidth>
                Nhân bản
              </Button>
            </div>
            {duplicating && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {DAY_ORDER.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleDuplicate(day)}
                    className={clsx(
                      'flex h-9 min-w-[42px] items-center justify-center rounded-lg px-2 text-[12.5px] font-semibold transition-colors',
                      'bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]',
                    )}
                  >
                    {WEEKDAY_SHORT[day]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Ghi chú</p>
            <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Nội dung học, điều cần nhớ…" />
            <div className="mt-2 flex justify-end">
              <Button size="sm" variant="primary" onClick={saveNote} disabled={note === (slot.note ?? '')}>
                Lưu ghi chú
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
            Xoá
          </button>
          <Button
            size="sm"
            variant="primary"
            icon={<EditIcon width={14} height={14} />}
            onClick={() => {
              const current = slot
              closeDetail()
              openEditLesson(current.id)
            }}
          >
            Sửa buổi học
          </Button>
        </div>
      </Dialog>

      <ConfirmDialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={handleDelete}
        title="Xoá buổi học này?"
        description={`Thao tác này sẽ xoá buổi học ${WEEKDAY_NAMES[slot.dayOfWeek]} của ${student?.nickname || student?.name} khỏi thời khóa biểu. Không thể hoàn tác.`}
        confirmLabel="Xoá"
        tone="danger"
      />
    </>
  )
}
