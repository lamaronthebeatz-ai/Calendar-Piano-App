import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmDialog, Dialog } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { Field, SelectInput, Textarea, TextInput } from '../../components/fields'
import { useUIStore } from '../../store/uiStore'
import { useSettings, useStudent } from '../../hooks/useLiveData'
import type { LessonLocation, RateType, StudentLevel, StudentStatus } from '../../types'
import { createStudent, deleteStudent, updateStudent } from '../../services/studentsService'
import { LOCATION_PALETTE } from '../../utils/color'
import { LEVEL_LABELS, RATE_TYPE_LABELS, STUDENT_STATUS_LABELS } from '../../utils/labels'

const LEVELS: StudentLevel[] = ['Beginner', 'Elementary', 'Intermediate', 'Advanced']
const LOCATIONS: LessonLocation[] = ['Studio', 'Home', 'Online', 'Other']
const STATUSES: StudentStatus[] = ['active', 'paused', 'inactive']
const RATE_TYPES: RateType[] = ['perLesson', 'monthly']

export function StudentFormModal() {
  const modal = useUIStore((s) => s.studentModal)
  const closeStudentModal = useUIStore((s) => s.closeStudentModal)
  const pushToast = useUIStore((s) => s.pushToast)
  const settings = useSettings()
  const navigate = useNavigate()
  const editingStudent = useStudent(modal.editingStudentId)
  const isEditing = !!modal.editingStudentId

  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [guardian, setGuardian] = useState('')
  const [instrument, setInstrument] = useState('Piano')
  const [level, setLevel] = useState<StudentLevel>('Beginner')
  const [defaultDuration, setDefaultDuration] = useState(60)
  const [defaultLocation, setDefaultLocation] = useState<LessonLocation>('Studio')
  const [rateType, setRateType] = useState<RateType>('perLesson')
  const [rate, setRate] = useState(0)
  const [status, setStatus] = useState<StudentStatus>('active')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(() => {
    if (!modal.open) return
    if (isEditing && editingStudent) {
      setName(editingStudent.name)
      setNickname(editingStudent.nickname ?? '')
      setAge(editingStudent.age ? String(editingStudent.age) : '')
      setPhone(editingStudent.phone ?? '')
      setGuardian(editingStudent.guardian ?? '')
      setInstrument(editingStudent.instrument)
      setLevel(editingStudent.level)
      setDefaultDuration(editingStudent.defaultDuration)
      setDefaultLocation(editingStudent.defaultLocation)
      setRateType(editingStudent.rateType)
      setRate(editingStudent.rate)
      setStatus(editingStudent.status)
      setNotes(editingStudent.notes ?? '')
    } else if (!isEditing) {
      setName('')
      setNickname('')
      setAge('')
      setPhone('')
      setGuardian('')
      setInstrument('Piano')
      setLevel('Beginner')
      setDefaultDuration(settings.defaultLessonDuration)
      setDefaultLocation(settings.defaultLocation)
      setRateType('perLesson')
      setRate(0)
      setStatus('active')
      setNotes('')
    }
    setError('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal.open, modal.editingStudentId, editingStudent])

  async function handleSubmit() {
    if (!name.trim()) {
      setError('Vui lòng nhập tên học viên.')
      return
    }
    const payload = {
      name: name.trim(),
      nickname: nickname.trim() || undefined,
      age: age ? Number(age) : undefined,
      phone: phone.trim() || undefined,
      guardian: guardian.trim() || undefined,
      instrument: instrument.trim() || 'Piano',
      level,
      defaultDuration,
      defaultLocation,
      rateType,
      rate,
      status,
      notes: notes.trim() || undefined,
    }
    if (isEditing && modal.editingStudentId) {
      await updateStudent(modal.editingStudentId, payload)
      pushToast('Đã cập nhật học viên', 'success')
    } else {
      await createStudent(payload)
      pushToast('Đã thêm học viên', 'success')
    }
    closeStudentModal()
  }

  async function handleDelete() {
    if (!modal.editingStudentId) return
    await deleteStudent(modal.editingStudentId)
    pushToast('Đã xoá học viên', 'success')
    closeStudentModal()
    navigate('/students')
  }

  return (
    <>
      <Dialog
        open={modal.open}
        onClose={closeStudentModal}
        title={isEditing ? 'Sửa học viên' : 'Thêm học viên'}
        footer={
          <div className="flex items-center justify-between">
            {isEditing ? (
              <button onClick={() => setConfirmDelete(true)} className="text-[13px] font-medium text-[var(--color-status-cancelled)] hover:opacity-80">
                Xoá học viên
              </button>
            ) : (
              <span />
            )}
            <div className="flex gap-2">
              <Button variant="secondary" onClick={closeStudentModal}>
                Huỷ
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                {isEditing ? 'Lưu thay đổi' : 'Thêm học viên'}
              </Button>
            </div>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Họ và tên">
              <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Nguyễn Minh An" />
            </Field>
            <Field label="Biệt danh">
              <TextInput value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Minh An" />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Field label="Tuổi">
              <TextInput type="number" min={0} value={age} onChange={(e) => setAge(e.target.value)} />
            </Field>
            <Field label="Số điện thoại">
              <TextInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="090 123 4567" />
            </Field>
            <Field label="Phụ huynh">
              <TextInput value={guardian} onChange={(e) => setGuardian(e.target.value)} placeholder="Tên phụ huynh" />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Field label="Nhạc cụ">
              <TextInput value={instrument} onChange={(e) => setInstrument(e.target.value)} />
            </Field>
            <Field label="Trình độ">
              <SelectInput value={level} onChange={(e) => setLevel(e.target.value as StudentLevel)}>
                {LEVELS.map((l) => (
                  <option key={l} value={l}>
                    {LEVEL_LABELS[l]}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Trạng thái">
              <SelectInput value={status} onChange={(e) => setStatus(e.target.value as StudentStatus)}>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {STUDENT_STATUS_LABELS[s]}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Field label="Thời lượng mặc định" hint="phút">
              <SelectInput value={defaultDuration} onChange={(e) => setDefaultDuration(Number(e.target.value))}>
                {[30, 45, 60, 90].map((d) => (
                  <option key={d} value={d}>
                    {d} phút
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Địa điểm mặc định">
              <SelectInput value={defaultLocation} onChange={(e) => setDefaultLocation(e.target.value as LessonLocation)}>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>
                    {LOCATION_PALETTE[l].label}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Hình thức học phí">
              <SelectInput value={rateType} onChange={(e) => setRateType(e.target.value as RateType)}>
                {RATE_TYPES.map((r) => (
                  <option key={r} value={r}>
                    {RATE_TYPE_LABELS[r]}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>

          <Field label={rateType === 'monthly' ? `Học phí theo tháng (${settings.currency})` : `Học phí theo giờ (${settings.currency})`}>
            <TextInput type="number" min={0} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          </Field>

          <Field label="Ghi chú">
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Bài học, mục tiêu, lưu ý…" />
          </Field>

          {error && <p className="text-[13px] text-[var(--color-status-cancelled)]">{error}</p>}
        </div>
      </Dialog>

      <ConfirmDialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={handleDelete}
        title="Xoá học viên này?"
        description="Thao tác này sẽ xoá vĩnh viễn học viên cùng toàn bộ buổi học trong thời khóa biểu của học viên đó. Không thể hoàn tác."
        confirmLabel="Xoá học viên"
        tone="danger"
      />
    </>
  )
}
