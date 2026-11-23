import { useEffect, useMemo, useRef, useState } from 'react'
import type { Score as ComposeScore } from '../compose/model'
import { fromCompose } from '../../umre/repr/adapters/compose'
import { UmreHost, type Outcome } from '../../umre/runtime/host'
import { renderFinding } from '../../umre/analysis/run'
import type { AnalysisResult, Finding } from '../../umre/analysis/types'
import type { Meta } from '../../umre/runtime/ops'
import './umre-panel.css'

/**
 * UMRE beside the page's own analysis (which it does not replace): the same score through the engine's analysis
 * modules, in a worker that is cancelled when the score changes or the page closes. Three views — basic (results and
 * warnings), technical (each finding with its values), academic (kind of claim, confidence basis, method, limits,
 * fingerprint) — and a Markdown report a researcher can keep. Machine analysis: the researcher judges.
 */
const MODULES = ['harmony.tonal', 'melody.line', 'rhythm.meter', 'texture.voices', 'form.sections', 'style.features']
const TITLE: Record<string, string> = {
  'harmony.tonal': 'Hoà âm điệu tính', 'melody.line': 'Giai điệu', 'rhythm.meter': 'Tiết tấu', 'texture.voices': 'Kết cấu và tương tác bè', 'form.sections': 'Hình thức', 'style.features': 'Đặc trưng phong cách (chỉ quan sát)',
}
const STATUS: Record<string, string> = { COMPLETED: 'xong', PARTIAL: 'một phần', AMBIGUOUS: 'có nhiều cách đọc', INSUFFICIENT_DATA: 'thiếu dữ liệu', UNKNOWN: 'chưa kết luận', ERROR: 'lỗi' }
/** per-chord / per-note topics: counted in the basic view, listed from the technical view on */
const MANY = new Set(['hợp âm', 'âm vang', 'nốt ngoài hợp âm', 'mẫu lặp', 'câu', 'nhắc lại'])
type Level = 'basic' | 'technical' | 'academic'

export function UmrePanel({ score, title, runKey }: { score: ComposeScore; title: string; runKey: string }) {
  const [open, setOpen] = useState(false)
  const [level, setLevel] = useState<Level>('basic')
  const [state, setState] = useState<{ key: string; outcome?: Outcome } | null>(null)
  const host = useRef<UmreHost | null>(null)

  useEffect(() => {
    if (!open) return
    host.current ??= new UmreHost(() => new Worker(new URL('../../umre/runtime/umre.worker.ts', import.meta.url), { type: 'module' }) as never)
    let live = true
    host.current
      .run({ op: 'analyze', score: fromCompose(score), modules: MODULES }, { timeMs: 60_000 })
      .then((o) => live && setState({ key: runKey, outcome: o }))
    return () => {
      live = false
    }
  }, [open, score, runKey])
  useEffect(() => () => host.current?.dispose(), [])

  const outcome = state?.key === runKey ? state.outcome : undefined
  const done = outcome?.status === 'done' && outcome.response.op === 'analyze' ? outcome.response : null
  const result = done?.op === 'analyze' ? (done.result as AnalysisResult) : null
  const meta = done?.meta as Meta | undefined

  return (
    <details className="kg-methods um-panel" onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
      <summary>Phân tích và kiểm chứng của UMRE</summary>
      <p className="kg-note">Bộ máy suy luận chung của app chạy lại bản nhạc này qua các mô-đun hoà âm, giai điệu, tiết tấu, kết cấu, hình thức, phong cách. Mỗi kết quả nói rõ là <b>dữ kiện</b> (đếm trên nốt), <b>diễn giải</b> hay <b>giả thuyết</b> — người nghiên cứu là người kết luận.</p>
      {open && !outcome && <p className="an-status">Đang phân tích trong luồng riêng…</p>}
      {outcome && outcome.status !== 'done' && <p className="an-status">{outcome.status === 'timeout' ? 'Quá thời gian (60 giây) — bản nhạc quá dài cho máy này.' : outcome.status === 'error' ? `Lỗi: ${outcome.error}` : 'Đã dừng.'}</p>}
      {outcome?.status === 'done' && outcome.response.op === 'error' && <p className="an-status">Lỗi ({outcome.response.error.code}): {outcome.response.error.message}</p>}
      {result && (
        <>
          <div className="um-head">
            <div className="an-seg" role="radiogroup" aria-label="Mức chi tiết">
              {(['basic', 'technical', 'academic'] as const).map((l) => (
                <button key={l} role="radio" aria-checked={level === l} className={level === l ? 'is-on' : ''} onClick={() => setLevel(l)}>
                  {l === 'basic' ? 'Cơ bản' : l === 'technical' ? 'Kỹ thuật' : 'Học thuật'}
                </button>
              ))}
            </div>
            <button className="um-export" onClick={() => download(title, report(title, result, meta))}>Xuất báo cáo (.md)</button>
          </div>
          <p className="um-status" data-status={result.status}>Kết quả chung: <b>{STATUS[result.status]}</b></p>
          {result.modules.map((m) => (
            <ModuleView key={m.module} m={m} findings={result.findings.filter((f) => f.module === m.module)} level={level} />
          ))}
          {level === 'academic' && meta && (
            <p className="kg-note um-meta">
              UMRE {meta.engine} · API {meta.api} · dấu vân <code>{meta.fingerprint}</code> · {meta.reproducible ? 'chạy lại cùng phiên bản cho cùng kết quả' : 'phụ thuộc thời gian chạy'}{meta.cached ? ' · lấy lại từ lần chạy trước' : ''} · {result.metadata.elapsedMs} ms
            </p>
          )}
        </>
      )}
    </details>
  )
}

function ModuleView({ m, findings, level }: { m: AnalysisResult['modules'][number]; findings: readonly Finding[]; level: Level }) {
  const groups = useMemo(() => {
    const g = new Map<string, Finding[]>()
    for (const f of findings) g.set(f.topic, [...(g.get(f.topic) ?? []), f])
    return [...g]
  }, [findings])
  return (
    <section className="um-module">
      <h4>
        {TITLE[m.module] ?? m.module} <span className="um-badge" data-status={m.status}>{STATUS[m.status]}</span>
      </h4>
      {m.status !== 'COMPLETED' && <p className="kg-note">{m.statusReason}{m.missing?.length ? ` — cần: ${m.missing.join('; ')}` : ''}</p>}
      {groups.map(([topic, fs]) => {
        const ambiguous = fs.filter((f) => f.alternatives?.length)
        if (MANY.has(topic) && level === 'basic')
          return (
            <p key={topic} className="um-line">
              {fs.length} {topic}
              {fs[0].confidence ? ` — độ tin cậy trung bình ${(fs.reduce((s, f) => s + (f.confidence?.value ?? 0), 0) / fs.length).toFixed(2)}` : ''}
              {ambiguous.length ? ` — ${ambiguous.length} chỗ có cách đọc khác` : ''}
            </p>
          )
        const shown = level === 'basic' ? fs : fs.slice(0, 12)
        return (
          <div key={topic} className="um-topic">
            {level !== 'basic' && <p className="um-topic-name">{topic} ({fs.length})</p>}
            <ul>
              {shown.map((f) => (
                <li key={f.id}>
                  {renderFinding(f, level)}
                  {level === 'technical' && f.alternatives?.length ? <span className="um-alt"> · cách đọc khác: {f.alternatives.map((a) => a.text).join('; ')}</span> : null}
                </li>
              ))}
            </ul>
            {fs.length > shown.length && <p className="kg-note">… và {fs.length - shown.length} mục nữa (có đủ trong báo cáo xuất ra).</p>}
          </div>
        )
      })}
      {level === 'academic' && (
        <p className="kg-note">
          Loại mô-đun: {m.kind === 'formalizable' ? 'hình thức hoá được' : m.kind === 'analytical' ? 'phân tích (diễn giải)' : 'xác suất / quan sát'} · phiên bản {m.version} · {m.elapsedMs} ms. Giới hạn: {m.limits.join('; ') || '—'}
        </p>
      )}
    </section>
  )
}

/** Markdown for the researcher: every finding at the academic level, with what produced it. */
function report(title: string, r: AnalysisResult, meta?: Meta): string {
  const out = [`# ${title} — phân tích UMRE`, '', `Kết quả chung: ${STATUS[r.status]} (${r.statusReason}).`, '']
  if (meta) out.push(`UMRE ${meta.engine}, API ${meta.api}, dấu vân \`${meta.fingerprint}\`, ${new Date().toISOString().slice(0, 10)}. Phân tích của máy — không phải kết luận nghiên cứu.`, '')
  for (const m of r.modules) {
    out.push(`## ${TITLE[m.module] ?? m.module} — ${STATUS[m.status]}`, '', `Giới hạn: ${m.limits.join('; ') || '—'}`, '')
    for (const f of r.findings.filter((x) => x.module === m.module)) out.push(`- ${renderFinding(f, 'academic')}${f.at !== undefined ? ` _(phách đen ${f.at})_` : ''}`)
    out.push('')
  }
  return out.join('\n')
}

function download(title: string, text: string) {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([text], { type: 'text/markdown' }))
  a.download = `phan-tich-umre-${title.replace(/[^\p{L}\p{N}]+/gu, '-').toLowerCase()}.md`
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
}
