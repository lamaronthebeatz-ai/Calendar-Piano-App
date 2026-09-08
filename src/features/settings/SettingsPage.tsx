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
    if (outcome === 'saved') pushToast('Backup downloaded', 'success')
    else if (outcome === 'declined') pushToast('Export cancelled')
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
      pushToast(`Imported ${result.students} students, ${result.timetableSlots} lessons`, 'success')
    } catch (err) {
      pushToast(err instanceof Error ? err.message : 'Import failed', 'error')
    } finally {
      setPendingFile(null)
      setImportMode(null)
    }
  }

  return (
    <div className="h-full overflow-y-auto pb-24 lg:pb-6">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        <h1 className="text-[17px] font-semibold text-[var(--color-ink)]">Settings</h1>
      </div>

      <div className="mx-auto max-w-xl space-y-8 px-4 py-6 lg:px-6">
        <Section title="Profile">
          <Field label="Teacher Name">
            <TextInput value={settings.teacherName} onChange={(e) => updateSettings({ teacherName: e.target.value })} />
          </Field>
        </Section>

        <Section title="Scheduling Defaults">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Default Duration" hint="minutes">
              <SelectInput
                value={settings.defaultLessonDuration}
                onChange={(e) => updateSettings({ defaultLessonDuration: Number(e.target.value) })}
              >
                {[30, 45, 60, 90].map((d) => (
                  <option key={d} value={d}>
                    {d} min
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Default Location">
              <SelectInput value={settings.defaultLocation} onChange={(e) => updateSettings({ defaultLocation: e.target.value as LessonLocation })}>
                {(['Studio', 'Home', 'Online', 'Other'] as LessonLocation[]).map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>
          <Field label="First Day of Week">
            <SegmentedControl
              value={String(settings.firstDayOfWeek)}
              onChange={(v) => updateSettings({ firstDayOfWeek: Number(v) as 0 | 1 })}
              options={[
                { value: '1', label: 'Monday' },
                { value: '0', label: 'Sunday' },
              ]}
            />
          </Field>
        </Section>

        <Section title="Currency">
          <Field label="Currency">
            <SelectInput value={settings.currency} onChange={(e) => updateSettings({ currency: e.target.value })}>
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </SelectInput>
          </Field>
        </Section>

        <Section title="Appearance">
          <div className="flex gap-2">
            {(
              [
                { value: 'light', label: 'Light', icon: SunIcon },
                { value: 'dark', label: 'Dark', icon: MoonIcon },
                { value: 'system', label: 'System', icon: CloudIcon },
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

        <Section title="Data & Backup">
          <p className="text-[13px] text-[var(--color-ink-muted)]">
            Your schedule lives in this browser. Export a backup regularly so it's never trapped on one device.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary" icon={<DownloadIcon width={15} height={15} />} onClick={handleExport} fullWidth>
              Export Backup
            </Button>
            <Button variant="secondary" icon={<UploadIcon width={15} height={15} />} onClick={() => fileInputRef.current?.click()} fullWidth>
              Import Backup
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
        title="Import backup"
        description="Merge will add these students and lessons alongside your existing data (updating any that share the same ID). This won't delete anything."
        confirmLabel="Merge Backup"
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
