import { Dialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { SelectInput } from '../../components/fields'
import { STATUS_OPTIONS } from '../../utils/color'
import type { LessonFilters } from '../../store/uiStore'
import type { Student } from '../../types'

const LESSON_TYPES = ['Piano', 'Theory', 'Piano + Theory', 'Trial Lesson', 'Makeup Lesson'] as const
const LOCATIONS = ['Studio', 'Home', 'Online', 'Other'] as const

interface FilterSheetProps {
  open: boolean
  onClose: () => void
  filters: LessonFilters
  onChange: (filters: LessonFilters) => void
  onClear: () => void
  students: Student[]
}

export function FilterSheet({ open, onClose, filters, onChange, onClear, students }: FilterSheetProps) {
  return (
    <Dialog open={open} onClose={onClose} title="Filter Lessons" width="sm">
      <div className="space-y-4">
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Student</p>
          <SelectInput
            value={filters.studentId ?? ''}
            onChange={(e) => onChange({ ...filters, studentId: e.target.value || undefined })}
          >
            <option value="">All students</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nickname || s.name}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Status</p>
          <SelectInput value={filters.status ?? ''} onChange={(e) => onChange({ ...filters, status: (e.target.value || undefined) as never })}>
            <option value="">All statuses</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Lesson Type</p>
          <SelectInput value={filters.type ?? ''} onChange={(e) => onChange({ ...filters, type: (e.target.value || undefined) as never })}>
            <option value="">All types</option>
            {LESSON_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-[var(--color-ink-muted)]">Location</p>
          <SelectInput value={filters.location ?? ''} onChange={(e) => onChange({ ...filters, location: (e.target.value || undefined) as never })}>
            <option value="">All locations</option>
            {LOCATIONS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </SelectInput>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <Button variant="secondary" fullWidth onClick={onClear}>
          Clear
        </Button>
        <Button variant="primary" fullWidth onClick={onClose}>
          Apply
        </Button>
      </div>
    </Dialog>
  )
}
