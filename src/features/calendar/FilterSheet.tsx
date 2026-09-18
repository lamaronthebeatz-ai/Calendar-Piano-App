import { Dialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { SelectInput } from '../../components/fields'
import { LOCATION_OPTIONS, LOCATION_PALETTE } from '../../utils/color'
import { LESSON_TYPE_LABELS } from '../../utils/labels'
import type { SlotFilters } from '../../store/uiStore'
import type { LessonType, Student } from '../../types'

const LESSON_TYPES: LessonType[] = ['Piano', 'Theory', 'Piano + Theory', 'Trial Lesson', 'Makeup Lesson']

interface FilterSheetProps {
  open: boolean
  onClose: () => void
  filters: SlotFilters
  onChange: (filters: SlotFilters) => void
  onClear: () => void
  students: Student[]
}

export function FilterSheet({ open, onClose, filters, onChange, onClear, students }: FilterSheetProps) {
  return (
    <Dialog open={open} onClose={onClose} title="Lọc thời khóa biểu" width="sm">
      <div className="space-y-4">
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Học viên</p>
          <SelectInput
            value={filters.studentId ?? ''}
            onChange={(e) => onChange({ ...filters, studentId: e.target.value || undefined })}
          >
            <option value="">Tất cả học viên</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nickname || s.name}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Loại buổi học</p>
          <SelectInput value={filters.type ?? ''} onChange={(e) => onChange({ ...filters, type: (e.target.value || undefined) as never })}>
            <option value="">Tất cả loại</option>
            {LESSON_TYPES.map((t) => (
              <option key={t} value={t}>
                {LESSON_TYPE_LABELS[t]}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Địa điểm</p>
          <SelectInput value={filters.location ?? ''} onChange={(e) => onChange({ ...filters, location: (e.target.value || undefined) as never })}>
            <option value="">Tất cả địa điểm</option>
            {LOCATION_OPTIONS.map((l) => (
              <option key={l} value={l}>
                {LOCATION_PALETTE[l].label}
              </option>
            ))}
          </SelectInput>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <Button variant="secondary" fullWidth onClick={onClear}>
          Xoá bộ lọc
        </Button>
        <Button variant="primary" fullWidth onClick={onClose}>
          Áp dụng
        </Button>
      </div>
    </Dialog>
  )
}
