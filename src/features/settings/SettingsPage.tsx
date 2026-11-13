import { useRef, useState, type ChangeEvent, type ReactNode } from 'react'
import { useSettings } from '../../hooks/useLiveData'
import { updateSettings } from '../../services/settingsService'
import { downloadBackupFile, exportBackup, importBackup } from '../../services/backup'
import { Field, SegmentedControl, SelectInput, TextInput } from '../../components/fields'
import { Button } from '../../components/Button'
import { Dialog } from '../../components/Dialog'
import { DownloadIcon, SparkleIcon, UploadIcon } from '../../components/icons'
import { useUIStore } from '../../store/uiStore'
import type { LessonLocation } from '../../types'
import { LOCATION_PALETTE } from '../../utils/color'
import { ScrollArea } from '../../components/ScrollArea'
import { startTour } from '../onboarding/tour'
import { openDonate } from '../donate/store'
import { clearErrors, useErrors } from '../../lib/errorLog'
import { makeVerifier } from '../../lib/passcode'
import { closeVault, vaultKey } from '../../lib/vault'

const CURRENCIES = ['VND', 'USD', 'EUR', 'GBP']

export function SettingsPage() {
  const settings = useSettings()
  const pushToast = useUIStore((s) => s.pushToast)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [importMode, setImportMode] = useState<'replace' | 'merge' | null>(null)
  const [pendingFile, setPendingFile] = useState<File | null>(null)

  async function handleExport() {
    let payload
    try {
      payload = await exportBackup()
    } catch (e) {
      pushToast(e instanceof Error ? e.message : String(e), 'error')
      return
    }
    const outcome = await downloadBackupFile(payload)
    if (outcome === 'saved') pushToast('Đã tải bản sao lưu', 'success')
    else if (outcome === 'declined') pushToast('Đã huỷ xuất dữ liệu')
  }

  function handleFileChosen(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setPendingFile(file)
      setImportMode('replace')
    }
    e.target.value = ''
  }

  function closeImport() {
    setImportMode(null)
    setPendingFile(null)
  }

  async function performImport(mode: 'replace' | 'merge') {
    if (!pendingFile) return
    const file = pendingFile
    closeImport()
    try {
      const result = await importBackup(file, mode)
      pushToast(`${mode === 'replace' ? 'Đã ghi đè' : 'Đã gộp'}: ${result.students} học viên, ${result.timetableSlots} buổi học`, 'success')
    } catch (err) {
      pushToast(err instanceof Error ? err.message : 'Nhập dữ liệu thất bại', 'error')
    }
  }

  return (
    <ScrollArea collapse={[8, 64]} className="h-full overflow-y-auto pb-24 lg:pb-6">
      <div data-collapse className="glass sticky top-0 z-10 border-b border-[var(--color-border)] px-4 py-3 lg:px-6">
        {/* The small bar title takes over once the large one below has scrolled under the bar. */}
        <h1 className="collapse-in font-display text-[20px] font-semibold tracking-tight text-[var(--color-ink)]">Cài đặt</h1>
      </div>
      <p aria-hidden data-collapse className="collapse-large mx-auto max-w-xl px-4 pt-5 font-display text-[32px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] lg:px-6">
        Cài đặt
      </p>

      <div className="mx-auto max-w-xl space-y-8 px-4 py-6 lg:px-6">
        <Section title="Hồ sơ">
          <Field label="Tên giáo viên">
            <TextInput value={settings.teacherName} onChange={(e) => updateSettings({ teacherName: e.target.value })} />
          </Field>
        </Section>

        <Section title="Lịch dạy">
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

        <Section title="Tiền tệ">
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

        <Section title="Dữ liệu & sao lưu">
          <p className="text-[13px] text-[var(--color-ink-muted)]">
            Lịch dạy, ghi chú và đánh dấu trong sách, thư viện của bạn được lưu ngay trên trình duyệt này. Hãy thường xuyên xuất dữ liệu ra tệp sao lưu để dữ liệu không bị kẹt trên một thiết bị.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary" icon={<DownloadIcon width={15} height={15} />} onClick={handleExport} fullWidth>
              Xuất dữ liệu
            </Button>
            <Button variant="secondary" icon={<UploadIcon width={15} height={15} />} onClick={() => fileInputRef.current?.click()} fullWidth>
              Nhập dữ liệu
            </Button>
            {/* Not just application/json: phones often label a forwarded .json as text/plain or nothing, which would grey it out. */}
            <input ref={fileInputRef} type="file" accept=".json,application/json,text/json,text/plain" hidden onChange={handleFileChosen} />
          </div>
        </Section>

        <SecuritySection />

        <ErrorLogSection />

        <Section title="Hướng dẫn sử dụng">
          <p className="text-[13px] text-[var(--color-ink-muted)]">Xem lại tour giới thiệu từng khu vực của ứng dụng: lịch, học viên, thư viện, âm nhạc học, tủ sách, tìm kiếm và sao lưu.</p>
          <Button variant="secondary" icon={<SparkleIcon width={15} height={15} />} onClick={startTour} fullWidth>
            Xem hướng dẫn
          </Button>
        </Section>

        <Section title="Ủng hộ">
          <p className="text-[13px] text-[var(--color-ink-muted)]">Ứng dụng miễn phí và không quảng cáo. Nếu thấy có ích, mời Lamar một ly cà phê.</p>
          <Button variant="secondary" onClick={openDonate} fullWidth>
            ☕ Ủng hộ Lamar
          </Button>
        </Section>
      </div>

      <Dialog
        open={importMode !== null}
        onClose={closeImport}
        title="Nhập dữ liệu"
        width="sm"
        footer={
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button variant="secondary" onClick={closeImport}>
              Huỷ
            </Button>
            <Button variant="secondary" onClick={() => performImport('merge')}>
              Gộp vào dữ liệu hiện có
            </Button>
            <Button variant="primary" onClick={() => performImport('replace')}>
              Ghi đè toàn bộ
            </Button>
          </div>
        }
      >
        <div className="space-y-3 text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          <p>
            <span className="font-semibold text-[var(--color-ink)]">Ghi đè toàn bộ</span> (nên dùng): xoá học viên và lịch dạy trên máy này rồi thay bằng
            đúng nội dung của bản sao lưu. Dữ liệu trùng lặp cũ cũng được dọn sạch.
          </p>
          <p>
            <span className="font-semibold text-[var(--color-ink)]">Gộp</span>: giữ dữ liệu hiện có. Học viên trùng tên và buổi học trùng (cùng học viên, cùng
            thứ, cùng giờ bắt đầu) sẽ được cập nhật theo bản sao lưu thay vì thêm bản mới.
          </p>
        </div>
      </Dialog>
    </ScrollArea>
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

/** Errors seen on this device (lib/errorLog): kept here only, to copy and send when something breaks. */
function ErrorLogSection() {
  const errors = useErrors()
  const [copied, setCopied] = useState(false)
  const text = () => errors.map((e) => `${new Date(e.at).toLocaleString('vi-VN')} · ${e.where}\n${e.msg}${e.stack ? `\n${e.stack}` : ''}`).join('\n\n')
  return (
    <Section title="Nhật ký lỗi">
      {errors.length === 0 ? (
        <p className="text-[13px] text-[var(--color-ink-muted)]">Chưa ghi nhận lỗi nào trên máy này.</p>
      ) : (
        <>
          <p className="text-[13px] text-[var(--color-ink-muted)]">{errors.length} lỗi gần nhất trên máy này (chỉ lưu tại đây, không gửi đi đâu). Sao chép gửi Lamar khi cần sửa.</p>
          <ul className="max-h-56 space-y-2 overflow-auto rounded-lg bg-[var(--color-surface-sunken)] p-3 text-[12px] text-[var(--color-ink-muted)]">
            {errors.slice(0, 10).map((e) => (
              <li key={e.at + e.msg}>
                <span className="text-[var(--color-ink-faint)]">{new Date(e.at).toLocaleString('vi-VN')} · {e.where}</span>
                <br />
                <span className="break-words text-[var(--color-ink)]">{e.msg}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="secondary" fullWidth onClick={() => void navigator.clipboard?.writeText(text()).then(() => setCopied(true))}>
              {copied ? 'Đã sao chép' : 'Sao chép nhật ký'}
            </Button>
            <Button variant="secondary" fullWidth onClick={clearErrors}>
              Xoá nhật ký
            </Button>
          </div>
        </>
      )}
    </Section>
  )
}

/**
 * Security: the state of the vault, locking now, and making the slow verifier that replaces the code's bare hash in
 * the public bundle — computed here on Lamar's device, so the code itself is never typed anywhere else.
 */
function SecuritySection() {
  const pushToast = useUIStore((s) => s.pushToast)
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [out, setOut] = useState('')
  const [busy, setBusy] = useState(false)
  const ok = /^\d{6}$/.test(a) && a === b
  async function make() {
    setBusy(true)
    setOut(await makeVerifier(a))
    setA('')
    setB('')
    setBusy(false)
  }
  function lockNow() {
    closeVault()
    try {
      sessionStorage.clear()
    } catch {
      // ignore
    }
    location.reload()
  }
  return (
    <Section title="Bảo mật">
      <p className="text-[13px] text-[var(--color-ink-muted)]">
        {vaultKey() ? 'Kho riêng đang mở: ghi chú và đề tài trên máy này được mã hoá (AES-GCM, khoá suy ra từ mã khoá).' : 'Kho riêng chưa mở trong phiên này. Mở lại ứng dụng và nhập mã khoá để mã hoá ghi chú và đề tài.'}
      </p>
      <Button variant="secondary" fullWidth onClick={lockNow}>
        Khoá ứng dụng ngay
      </Button>
      <details className="rounded-lg border border-[var(--color-border)] p-3 text-[13px] text-[var(--color-ink-muted)]">
        <summary className="cursor-pointer text-[var(--color-ink)]">Tạo dấu kiểm mã khoá (thay bản băm cũ)</summary>
        <p className="mt-2">Nhập mã khoá màn chào hai lần. Ứng dụng tính một dấu kiểm chậm (PBKDF2, 1 triệu vòng) ngay trên máy này; mã khoá không được lưu hay gửi đi. Sao chép dòng kết quả gửi Lamar để thay vào bản dựng.</p>
        <div className="mt-2 flex flex-col gap-2">
          <TextInput type="password" inputMode="numeric" autoComplete="off" maxLength={6} placeholder="Mã khoá" value={a} onChange={(e) => setA(e.target.value.replace(/\D/g, ''))} />
          <TextInput type="password" inputMode="numeric" autoComplete="off" maxLength={6} placeholder="Nhập lại" value={b} onChange={(e) => setB(e.target.value.replace(/\D/g, ''))} />
          <Button variant="secondary" fullWidth disabled={!ok || busy} onClick={() => void make()}>
            {busy ? 'Đang tính…' : 'Tạo dấu kiểm'}
          </Button>
          {out && (
            <>
              <code className="break-all rounded-lg bg-[var(--color-surface-sunken)] px-3 py-2 text-[11px]">{out}</code>
              <Button variant="secondary" fullWidth onClick={() => void navigator.clipboard?.writeText(out).then(() => pushToast('Đã sao chép dấu kiểm', 'success'))}>
                Sao chép
              </Button>
            </>
          )}
        </div>
      </details>
    </Section>
  )
}
