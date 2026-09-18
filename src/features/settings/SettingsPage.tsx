import { useRef, useState, type ChangeEvent, type ReactNode } from 'react'
import { useSettings } from '../../hooks/useLiveData'
import { applyThemeToDocument, updateSettings } from '../../services/settingsService'
import { downloadBackupFile, exportBackup, importBackup } from '../../services/backup'
import { Field, SegmentedControl, SelectInput, TextInput } from '../../components/fields'
import { Button } from '../../components/Button'
import { ConfirmDialog } from '../../components/Dialog'
import { CloudIcon, DownloadIcon, MoonIcon, SunIcon, UploadIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import type { LessonLocation } from '../../types'
import { LOCATION_PALETTE } from '../../utils/color'

const CURRENCIES = ['VND', 'USD', 'EUR', 'GBP']

export function SettingsPage() {
  const settings = useSettings()
  const pushToast = useUIStore((s) => s.pushToast)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [importMode, setImportMode] = useState<'replace' | 'merge' | null>(null)
  const [pendingFile, setPendingFile] = useState<File | null>(null)

  async function handleExport() {
    const payload = await exportBackup()
    const outcome = await downloadBackupFile(payload)
    if (outcome === 'saved') pushToast('Đã tải bản sao lưu', 'success')
    else if (outcome === 'declined') pushToast('Đã huỷ xuất dữ liệu')
  }

  function handleFileChosen(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setPendingFile(file)
      setImportMode('merge')
    }
    e.target.value = ''
  }

  async function performImport(mode: 'replace' | 'merge') {
    if (!pendingFile) return
    try {
      const result = await importBackup(pendingFile, mode)
      pushToast(`Đã nhập ${result.students} học viên, ${result.timetableSlots} buổi học`, 'success')
    } catch (err) {
      pushToast(err instanceof Error ? err.message : 'Nhập dữ liệu thất bại', 'error')
    } finally {
      setPendingFile(null)
      setImportMode(null)
    }
  }

  return (
    <div className="h-full overflow-y-auto pb-24 lg:pb-6">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        <h1 className="text-[17px] font-semibold text-[var(--color-ink)]">Cài đặt</h1>
      </div>

      <div className="mx-auto max-w-xl space-y-8 px-4 py-6 lg:px-6">
        <Section title="Hồ sơ">
          <Field label="Tên giáo viên">
            <TextInput value={settings.teacherName} onChange={(e) => updateSettings({ teacherName: e.target.value })} />
          </Field>
        </Section>

        <Section title="Mặc định lịch dạy">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Thời lượng mặc định" hint="phút">
              <SelectInput
                value={settings.defaultLessonDuration}
                onChange={(e) => updateSettings({ defaultLessonDuration: Number(e.target.value) })}
              >
                {[30, 45, 60, 90].map((d) => (
                  <option key={d} value={d}>
                    {d} phút
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Địa điểm mặc định">
              <SelectInput value={settings.defaultLocation} onChange={(e) => updateSettings({ defaultLocation: e.target.value as LessonLocation })}>
                {(['Studio', 'Home', 'Online', 'Other'] as LessonLocation[]).map((l) => (
                  <option key={l} value={l}>
                    {LOCATION_PALETTE[l].label}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>
          <Field label="Ngày đầu tuần">
            <SegmentedControl
              value={String(settings.firstDayOfWeek)}
              onChange={(v) => updateSettings({ firstDayOfWeek: Number(v) as 0 | 1 })}
              options={[
                { value: '1', label: 'Thứ Hai' },
                { value: '0', label: 'Chủ Nhật' },
              ]}
            />
          </Field>
        </Section>

        <Section title="Đơn vị tiền tệ">
          <Field label="Đơn vị tiền tệ">
            <SelectInput value={settings.currency} onChange={(e) => updateSettings({ currency: e.target.value })}>
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </SelectInput>
          </Field>
        </Section>

        <Section title="Giao diện">
          <div className="flex gap-2">
            {(
              [
                { value: 'light', label: 'Sáng', icon: SunIcon },
                { value: 'dark', label: 'Tối', icon: MoonIcon },
                { value: 'system', label: 'Hệ thống', icon: CloudIcon },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  updateSettings({ theme: opt.value })
                  applyThemeToDocument(opt.value)
                }}
                className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl border py-3 text-[12.5px] font-medium transition-colors ${
                  settings.theme === opt.value ? 'border-[var(--color-accent)] bg-[var(--color-status-confirmed-bg)] text-[var(--color-accent)]' : 'border-[var(--color-border)] text-[var(--color-ink-muted)]'
                }`}
              >
                <opt.icon width={18} height={18} />
                {opt.label}
              </button>
            ))}
          </div>
        </Section>

        <Section title="Dữ liệu & Sao lưu">
          <p className="text-[13px] text-[var(--color-ink-muted)]">
            Lịch dạy của bạn được lưu ngay trên trình duyệt này. Hãy xuất bản sao lưu thường xuyên để dữ liệu không bị kẹt trên một thiết bị.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary" icon={<DownloadIcon width={15} height={15} />} onClick={handleExport} fullWidth>
              Xuất bản sao lưu
            </Button>
            <Button variant="secondary" icon={<UploadIcon width={15} height={15} />} onClick={() => fileInputRef.current?.click()} fullWidth>
              Nhập bản sao lưu
            </Button>
            <input ref={fileInputRef} type="file" accept="application/json" hidden onChange={handleFileChosen} />
          </div>
        </Section>
      </div>

      <ConfirmDialog
        open={importMode !== null}
        onClose={() => {
          setImportMode(null)
          setPendingFile(null)
        }}
        onConfirm={() => importMode && performImport(importMode)}
        title="Nhập bản sao lưu"
        description="Gộp dữ liệu sẽ thêm các học viên và buổi học này vào dữ liệu hiện có (cập nhật nếu trùng ID). Thao tác này không xoá bất cứ gì."
        confirmLabel="Gộp dữ liệu"
      />
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">{title}</h2>
      {children}
    </section>
  )
}
