import { UMRE_ENGINE_VERSION } from '../version'
import type { AnalysisInput, AnalysisModule, AnalysisResult, AnalysisStatus, Finding, ModuleOutput, ModuleResult, Text } from './types'

const KINDS_NEEDING_CONFIDENCE = new Set(['interpretation', 'hypothesis', 'estimate'])

/** A module's output must keep the contract; a broken one becomes ERROR, never a silent "nothing found". */
export function checkModuleOutput(o: ModuleOutput, moduleId: string): string[] {
  const out: string[] = []
  const ids = new Set<string>()
  for (const f of o.findings) {
    if (ids.has(f.id)) out.push(`mã phát hiện trùng: ${f.id}`)
    ids.add(f.id)
    if (f.module !== moduleId) out.push(`${f.id}: ghi sai mô-đun (${f.module})`)
    if (KINDS_NEEDING_CONFIDENCE.has(f.kind) && !f.confidence) out.push(`${f.id}: ${f.kind} phải có độ tin cậy kèm cơ sở`)
    if (f.confidence && !(f.confidence.value >= 0 && f.confidence.value <= 1 && f.confidence.basis)) out.push(`${f.id}: độ tin cậy phải trong [0, 1] và có cơ sở`)
    if (!f.evidence.length) out.push(`${f.id}: không có bằng chứng`)
  }
  if (o.status === 'INSUFFICIENT_DATA' && !o.missing?.length) out.push('INSUFFICIENT_DATA phải nói thiếu gì')
  return out
}

/** Overall status from the modules': all completed → COMPLETED; ambiguity kept; any gap → PARTIAL; none usable → the worst. */
export function combineStatus(ms: readonly { status: AnalysisStatus }[]): AnalysisStatus {
  if (!ms.length) return 'UNKNOWN'
  const ok = ms.filter((m) => m.status === 'COMPLETED' || m.status === 'AMBIGUOUS')
  if (ok.length === ms.length) return ms.some((m) => m.status === 'AMBIGUOUS') ? 'AMBIGUOUS' : 'COMPLETED'
  if (ok.length || ms.some((m) => m.status === 'PARTIAL')) return 'PARTIAL'
  for (const s of ['ERROR', 'INSUFFICIENT_DATA', 'UNKNOWN'] as const) if (ms.some((m) => m.status === s)) return s
  return 'UNKNOWN'
}

/** Run modules in dependency order; each sees the findings of the modules before it. One failing module never stops the rest. */
export async function runAnalysis(modules: readonly AnalysisModule[], input: AnalysisInput, o: { signal?: AbortSignal } = {}): Promise<AnalysisResult> {
  const t0 = Date.now()
  const order = topo(modules)
  const results: ModuleResult[] = []
  const findings: Finding[] = []
  const errors: string[] = []
  for (const m of order) {
    const d = m.descriptor
    const s = Date.now()
    const base = { module: d.id, version: d.version, kind: d.kind, limits: d.limits }
    if (o.signal?.aborted) {
      results.push({ ...base, status: 'UNKNOWN', statusReason: 'bị huỷ trước khi chạy', findings: [], elapsedMs: 0 })
      continue
    }
    const missing = m.checkInput(input)
    if (missing.length) {
      results.push({ ...base, status: 'INSUFFICIENT_DATA', statusReason: 'đầu vào thiếu', findings: [], missing, elapsedMs: 0 })
      continue
    }
    try {
      const out = await m.analyze(input, { signal: o.signal, prior: findings })
      const problems = checkModuleOutput(out, d.id)
      if (problems.length) {
        errors.push(`${d.id}: ${problems.join('; ')}`)
        results.push({ ...base, status: 'ERROR', statusReason: `kết quả sai hợp đồng: ${problems.join('; ')}`, findings: [], elapsedMs: Date.now() - s })
        continue
      }
      results.push({ ...base, ...out, elapsedMs: Date.now() - s })
      findings.push(...out.findings)
    } catch (e) {
      errors.push(`${d.id}: ${(e as Error).message}`)
      results.push({ ...base, status: 'ERROR', statusReason: (e as Error).message, findings: [], elapsedMs: Date.now() - s })
    }
  }
  const status = combineStatus(results)
  const reason = results.map((r) => `${r.module}: ${r.status}`).join(' · ')
  return { status, statusReason: reason, modules: results, findings, metadata: { engineVersion: UMRE_ENGINE_VERSION, elapsedMs: Date.now() - t0, errors } }
}

function topo(ms: readonly AnalysisModule[]): AnalysisModule[] {
  const byId = new Map(ms.map((m) => [m.descriptor.id, m]))
  const out: AnalysisModule[] = []
  const state = new Map<string, 1 | 2>()
  const visit = (m: AnalysisModule) => {
    const id = m.descriptor.id
    if (state.get(id) === 2) return
    if (state.get(id) === 1) throw new Error(`vòng phụ thuộc ở ${id}`)
    state.set(id, 1)
    for (const a of m.descriptor.after ?? []) {
      const dep = byId.get(a)
      if (dep) visit(dep)
    }
    state.set(id, 2)
    out.push(m)
  }
  ms.forEach(visit)
  return out
}

/** One finding as text at a level: basic (learner), technical (values, ids), academic (adds kind, confidence basis, sources). */
export function renderFinding(f: Finding, level: keyof Text, cite?: (id: string) => string): string {
  if (level === 'basic') return f.text.basic
  const tech = `${f.text.technical}${f.confidence ? ` [tin cậy ${f.confidence.value.toFixed(2)}]` : ''}`
  if (level === 'technical') return tech
  const label = { fact: 'Dữ kiện', interpretation: 'Diễn giải', hypothesis: 'Giả thuyết', estimate: 'Ước lượng', 'rule-check': 'Kiểm luật' }[f.kind]
  const src = f.citations?.length && cite ? ` Nguồn: ${f.citations.map(cite).join('; ')}.` : ''
  const conf = f.confidence ? ` Cơ sở độ tin cậy: ${f.confidence.basis}.` : ''
  const alt = f.alternatives?.length ? ` Cách đọc khác: ${f.alternatives.map((a) => a.text).join('; ')}.` : ''
  return `${label}: ${f.text.academic ?? tech}.${conf}${alt}${src}`
}
