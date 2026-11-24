import { THEORY } from '../features/analyze/links'
import type { EntityId } from '../features/knowledge/ids'
import { METHODS } from '../features/knowledge/methods'
import type { UmreRequest, UmreResponse } from '../umre/api'
import type { AnalysisResult } from '../umre/analysis/types'
import type { UnifiedResult } from '../umre/orchestration/solver'
import type { Score } from '../umre/repr/score'
import type { Task } from '../umre/task'
import { COUNTERPOINT_RULE_ARTICLES, HARMONY_RULE_ARTICLES } from '../umre/theorySlugs'
import { searchKnowledge } from './api'
import { rulebookRecord } from './rulebooks'
import { COUNTERPOINT_RULEBOOK_ID } from '../umre/rulebook/counterpoint'
import { HARMONY_RULEBOOK_ID } from '../umre/rulebook/harmony'
import { checkContext, UMK_SCHEMA_VERSION, type Epistemic, type KnowledgeGap, type ReasoningContext, type ReasoningRecord, type ReasoningTask, type RulebookRecord } from './schema'

/**
 * UMK → UMRE. A module asks UMK for the knowledge a problem needs (`assembleReasoningContext`), UMK hands it to UMRE
 * with the request (`submitReasoningRequest`), and the answer comes back as a `ReasoningRecord`: which concepts,
 * rules (with rulebook versions) and sources it ran on, which solver and checker produced it, how far it is
 * established — and the knowledge gaps it exposed (UMRE → UMK, reported, never written into the knowledge).
 *
 * Each kind of problem keeps its own solver family in UMRE: counterpoint → the counterpoint solvers and checkers,
 * four-part harmonisation → the harmony solvers, analysis → the analysis modules. A musicology question gets a
 * context but no solver: it cannot be formalised, and UMK says so instead of running something unrelated.
 */
const a = (slug: string) => `a:${slug}` as EntityId

function hash(s: string) {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193)
  return (h >>> 0).toString(36)
}

/** Rulebook knowledge for a context: every entry, its sources, and gaps the rulebook itself records. */
function fromRulebook(rb: RulebookRecord) {
  const gaps: KnowledgeGap[] = []
  for (const e of rb.entries) {
    if (e.standing === 'ambiguous') gaps.push({ id: `open:${e.id}`, kind: 'open-question', about: e.id, text: `${e.statement} (${e.scope})`, origin: 'umk' })
    else if (e.provenance.verification === 'unverified' && e.standing !== 'definition')
      gaps.push({ id: `unverified:${e.id}`, kind: e.provenance.kind === 'editorial' ? 'unverified-source' : 'missing-source', about: e.id, text: `"${e.name}" dựa trên ${e.provenance.kind === 'editorial' ? 'cách hiểu của người biên soạn / quy ước người dạy' : 'nguồn chưa xác minh'} — chưa có trang sách đối chiếu`, origin: 'umk' })
  }
  return { rules: rb.entries.map((e) => e.id), sources: [...new Set(rb.entries.flatMap((e) => e.provenance.sources))], gaps }
}

const LENS_TRADITION = {
  classical: 'Phân tích hoà âm chức năng — nhãn Nga – Xô viết và số La Mã quốc tế (bộ phân tích /analyze)',
  jazz: 'Hoà âm jazz — ký hiệu hợp âm, hợp âm – âm giai (bộ phân tích /analyze, lăng kính Jazz)',
  xx: 'Lý thuyết tập cao độ (tên Forte) — âm nhạc thế kỷ 20 (bộ phân tích /analyze, lăng kính TK XX)',
} as const

export function assembleReasoningContext(task: ReasoningTask): ReasoningContext {
  let ctx: Omit<ReasoningContext, 'id' | 'schema'>
  switch (task.kind) {
    case 'counterpoint': {
      const rb = rulebookRecord(COUNTERPOINT_RULEBOOK_ID)
      const k = fromRulebook(rb)
      ctx = { task: task.kind, domain: 'counterpoint', tradition: rb.tradition, rulebooks: [rb.ref], rules: k.rules, concepts: COUNTERPOINT_RULE_ARTICLES.map(a), sources: k.sources, premises: task.exercise ? { exercise: task.exercise } : {}, gaps: k.gaps }
      break
    }
    case 'harmonize': {
      const rb = rulebookRecord(HARMONY_RULEBOOK_ID)
      const k = fromRulebook(rb)
      ctx = { task: task.kind, domain: 'harmony', tradition: rb.tradition, rulebooks: [rb.ref], rules: k.rules, concepts: Object.keys(HARMONY_RULE_ARTICLES).map(a), sources: k.sources, premises: {}, gaps: k.gaps }
      break
    }
    case 'harmony-analysis': {
      const lens = task.lens ?? 'classical'
      // analysis runs the /analyze engine through UMRE's analysis modules; the four-part rulebook governs writing,
      // not analysis, so no rulebook is attached — the concepts are what the labels name, the methods how they are read
      const methods = METHODS.filter((m) => m.lens.includes(lens))
      const concepts = [...new Set([...methods.flatMap((m) => m.concepts.map((c) => THEORY[c])), ...methods.flatMap((m) => m.read)])].map(a)
      const gaps: KnowledgeGap[] =
        lens !== 'xx' && !task.globalKey ? [{ id: 'premise:global-key', kind: 'missing-premise', about: null, text: 'Chưa có giọng chủ do người phân tích chọn — bậc, chức năng, quan hệ vùng giọng không có tiền đề', origin: 'umk' }] : []
      ctx = { task: task.kind, domain: 'analysis', tradition: LENS_TRADITION[lens], rulebooks: [], rules: [], concepts, sources: [], premises: { ...(task.globalKey ? { globalKey: task.globalKey } : {}), lens, methods: methods.map((m) => `m:${m.id}`) }, gaps }
      break
    }
    case 'musicology-question': {
      const hits = searchKnowledge(task.question, { limit: 8, kinds: ['concept', 'person', 'period', 'genre', 'form', 'school', 'instrument', 'analysis', 'method', 'domain', 'glossary'] })
      const gaps: KnowledgeGap[] = hits.length ? [] : [{ id: `question:${hash(task.question)}`, kind: 'missing-definition', about: null, text: `Thư viện chưa có bài hay thuật ngữ trả lời: "${task.question}"`, origin: 'umk' }]
      // not formalised: a context for reading, with the sources fetched from the bibliography by the caller
      ctx = { task: task.kind, domain: null, tradition: null, rulebooks: [], rules: [], concepts: hits.map((h) => h.id), sources: [], premises: { question: task.question }, gaps }
      break
    }
  }
  return { schema: UMK_SCHEMA_VERSION, id: `ctx-${hash(JSON.stringify(ctx))}`, ...ctx }
}

/* --------------------------------------------------------------- the request */

export type ReasoningInput = { readonly op: 'analyze'; readonly score: Score; readonly modules?: readonly string[] } | { readonly op: 'solve'; readonly task: Task; readonly options?: { readonly timeMs?: number; readonly maxSolutions?: number } }
type Meta = { engine: string; api: string; fingerprint: string }
/** How the caller runs UMRE: in process (`handle`) or in the worker (`UmreHost`), so UMK never depends on where. */
export type Runner = (req: UmreRequest) => Promise<{ ok: true; response: UmreResponse & { meta?: Meta } } | { ok: false; status: string; error?: string }>

export class ReasoningError extends Error {}

/** The UMRE request a context and input make (exported so callers that run UMRE themselves send the same thing). */
export function toUmreRequest(ctx: ReasoningContext, input: ReasoningInput): UmreRequest {
  const problems = checkContext(ctx)
  if (problems.length) throw new ReasoningError(`ngữ cảnh không hợp lệ: ${problems.join('; ')}`)
  if (ctx.domain === null) throw new ReasoningError('câu hỏi này không hình thức hoá được — UMK trả ngữ cảnh để đọc, không gọi bộ suy luận')
  if (input.op === 'solve') {
    if (!ctx.rulebooks.some((r) => r.id === input.task.rulebook.id && r.version === input.task.rulebook.version))
      throw new ReasoningError(`bài toán dùng sổ luật ${input.task.rulebook.id}@${input.task.rulebook.version}, ngữ cảnh UMK cấp ${ctx.rulebooks.map((r) => `${r.id}@${r.version}`).join(', ') || 'không có sổ luật'}`)
    return { op: 'solve', task: input.task, ...(input.options ? { options: input.options } : {}) }
  }
  const globalKey = ctx.premises.globalKey
  return { op: 'analyze', score: input.score, ...(input.modules ? { modules: input.modules } : {}), context: { ...(globalKey ? { globalKey } : {}), umk: { context: ctx.id, schema: ctx.schema } } }
}

export async function submitReasoningRequest(ctx: ReasoningContext, input: ReasoningInput, run: Runner): Promise<ReasoningRecord> {
  const req = toUmreRequest(ctx, input)
  const out = await run(req)
  return recordOf(ctx, out)
}

/** The record of one reasoning run: what knowledge it used, what produced it, how far it is established, what is missing. */
export function recordOf(ctx: ReasoningContext, out: Awaited<ReturnType<Runner>>): ReasoningRecord {
  const base = { schema: UMK_SCHEMA_VERSION, contextId: ctx.id, task: ctx.task, at: Date.now(), knowledge: { concepts: ctx.concepts, rules: ctx.rules, sources: ctx.sources }, rulebooks: ctx.rulebooks }
  if (!out.ok) return { ...base, umre: null, status: out.status, epistemic: 'error', summary: out.error ?? out.status, gaps: ctx.gaps }
  const r = out.response
  const meta = r.meta
  const umre = (solver: string | null, validator: string | null) => (meta ? { engine: meta.engine, api: meta.api, fingerprint: meta.fingerprint, solver, validator } : { engine: '?', api: '?', fingerprint: '', solver, validator })
  if (r.op === 'analyze') {
    const res = r.result as AnalysisResult
    const gaps: KnowledgeGap[] = [...ctx.gaps]
    for (const m of res.modules)
      if (m.status === 'INSUFFICIENT_DATA') gaps.push({ id: `insufficient:${m.module}`, kind: 'insufficient-data', about: null, text: `${m.module}: ${m.statusReason}${m.missing?.length ? ` — thiếu: ${m.missing.join('; ')}` : ''}`, origin: 'umre' })
    for (const f of res.findings.filter((x) => x.topic === 'cảnh báo giọng chủ'))
      gaps.push({ id: `conflict:${f.id}`, kind: 'conflict', about: null, text: `Giọng chủ đã chọn và bằng chứng trong bản nhạc không khớp: ${f.text.basic}`, origin: 'umre' })
    // analysis findings are readings with a confidence, not checked results
    const epistemic: Epistemic = res.status === 'ERROR' ? 'error' : res.status === 'COMPLETED' || res.status === 'PARTIAL' ? 'interpretation' : 'unresolved'
    return { ...base, umre: umre(res.modules.map((m) => `${m.module}@${m.version}`).join(', '), null), status: res.status, epistemic, summary: res.statusReason, gaps }
  }
  if (r.op === 'solve') {
    const res = r.result as UnifiedResult
    const validator = res.metadata.validator ? `${res.metadata.validator.id}@${res.metadata.validator.version}` : null
    // "validated" = at least one solution confirmed by checkers the solver did not run (UMRE's own definition)
    const epistemic: Epistemic = res.status === 'SOLVED' && res.solutions.length && validator ? 'validated' : res.status === 'ERROR' ? 'error' : 'unresolved'
    const gaps = [...ctx.gaps, ...(res.status === 'UNKNOWN' || res.status === 'TIMEOUT' ? [{ id: `unknown:${res.taskId}`, kind: 'insufficient-data' as const, about: null, text: `UMRE chưa kết luận (${res.status}): ${res.statusReason}`, origin: 'umre' as const }] : [])]
    const used = [...new Set(res.evidence.filter((e) => e.source.origin === 'curated').map((e) => `s:${e.source.id}` as EntityId))]
    return { ...base, knowledge: { ...base.knowledge, sources: used.length ? used : ctx.sources }, umre: umre(res.solverId ? `${res.solverId}@${res.solverVersion}` : null, validator), status: res.status, epistemic, summary: res.statusReason, gaps }
  }
  return { ...base, umre: umre(null, null), status: r.op, epistemic: 'unresolved', summary: `trả lời ${r.op}`, gaps: ctx.gaps }
}

/** Runners over the two ways the app talks to UMRE. */
export const inProcess = (handle: (req: UmreRequest) => Promise<{ op: string }>): Runner => async (req) => {
  const ans = (await handle(req)) as UmreResponse & { meta?: Meta } | { op: 'error'; error: { message: string } }
  return ans.op === 'error' ? { ok: false, status: 'error', error: (ans as { error: { message: string } }).error.message } : { ok: true, response: ans as UmreResponse & { meta?: Meta } }
}
export const viaHost = (run: (req: UmreRequest) => Promise<{ status: string; response?: UmreResponse; error?: string }>): Runner => async (req) => {
  const o = await run(req)
  if (o.status !== 'done' || !o.response) return { ok: false, status: o.status, ...(o.error ? { error: o.error } : {}) }
  const res = o.response as UmreResponse & { meta?: Meta } | { op: 'error'; error: { message: string } }
  return res.op === 'error' ? { ok: false, status: 'error', error: (res as { error: { message: string } }).error.message } : { ok: true, response: res as UmreResponse & { meta?: Meta } }
}
