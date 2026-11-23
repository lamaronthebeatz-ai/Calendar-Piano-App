import type { Citation, SourceRecord } from '../evidence/evidence'
import { explain, type Explanation } from '../explain/explain'
import { Tracer, type Trace, type TraceLevel } from '../explain/trace'
import type { Score } from '../repr/score'
import { refOf, type Rulebook, type RulebookRegistry } from '../rulebook/rulebook'
import type { Task } from '../task'
import type { ValidationResult, ValidationStatus } from '../validation/types'
import { UMRE_ENGINE_VERSION } from '../version'
import type { SolverRegistry, ValidatorRegistry } from './registry'
import type { ErrorCode, ExecutionStatus, Solver, SolverOutput, SolverStatus, UnifiedResult, ValidatedSolution } from './solver'

export type RunOptions = {
  readonly timeMs?: number
  readonly maxSolutions?: number
  /** ask for one solver by id; if it cannot take the task the run fails — never a silent substitute */
  readonly solverId?: string
  readonly traceLevel?: TraceLevel
  readonly signal?: AbortSignal
  /** extra wall-clock allowance after the solver's own time limit before the run is declared TIMEOUT */
  readonly graceMs?: number
}

/**
 * The run's status from what the solver said and what the validator found. Pure, and recorded in the trace with its
 * inputs, so the decision can be replayed. The orchestrator never accepts a solution on the solver's word:
 * SOLVED needs at least one VALID verdict from the independent validator.
 */
export type DecisionInput = {
  readonly solverStatus: SolverStatus
  readonly verdicts: readonly ValidationStatus[]
  readonly proofOfUnsat: boolean
  readonly solverReason?: string
}
export function decideStatus(d: DecisionInput): { status: ExecutionStatus; reason: string } {
  const valid = d.verdicts.filter((v) => v === 'VALID').length
  if (d.solverStatus === 'solved') {
    if (valid) return { status: 'SOLVED', reason: `${valid}/${d.verdicts.length} phương án được bộ kiểm độc lập công nhận` }
    const tally = ['INVALID', 'INCOMPLETE', 'UNKNOWN'].map((k) => `${d.verdicts.filter((v) => v === k).length} ${k}`).join(', ')
    return { status: 'UNKNOWN', reason: `bộ giải báo có lời giải nhưng bộ kiểm độc lập không công nhận phương án nào (${tally})` }
  }
  if (d.verdicts.length) return { status: 'UNKNOWN', reason: `bộ giải báo "${d.solverStatus}" nhưng vẫn trả phương án — mâu thuẫn` }
  if (d.solverStatus === 'unsat') return d.proofOfUnsat ? { status: 'PROVEN_UNSAT', reason: d.solverReason ?? 'bộ giải chứng minh vô nghiệm trong miền của nó' } : { status: 'UNKNOWN', reason: 'bộ giải báo vô nghiệm nhưng không có năng lực chứng minh' }
  if (d.solverStatus === 'timeout') return { status: 'TIMEOUT', reason: d.solverReason ?? 'hết giờ trước khi duyệt hết miền tìm kiếm' }
  return { status: 'UNKNOWN', reason: d.solverReason ?? 'bộ giải không kết luận' }
}

class Cancelled extends Error {}
class TimedOut extends Error {}

const SOLVER_STATUSES: SolverStatus[] = ['solved', 'unsat', 'unknown', 'timeout']
/** The solver's output must keep its contract; a broken one is an ERROR, never read as "no solution". */
export function checkOutput(o: unknown): string[] {
  const out: string[] = []
  const x = o as Partial<SolverOutput> | null
  if (!x || typeof x !== 'object') return ['kết quả không phải đối tượng']
  if (!SOLVER_STATUSES.includes(x.status as SolverStatus)) out.push(`trạng thái lạ: ${String(x.status)}`)
  if (!Array.isArray(x.solutions)) out.push('solutions phải là danh sách')
  else {
    x.solutions.forEach((s: Score, i) => {
      if (!s || s.schema !== 'umre.score' || typeof s.version !== 'number' || !Array.isArray(s.voices)) out.push(`phương án ${i + 1} không phải tổng phổ UMRE`)
    })
    if (x.status === 'solved' && !x.solutions.length) out.push('báo solved mà không có phương án')
    if (x.status === 'unsat' && x.solutions.length) out.push('báo unsat mà vẫn có phương án')
  }
  if (!Array.isArray(x.steps)) out.push('steps phải là danh sách')
  return out
}

export class Orchestrator {
  readonly solvers: SolverRegistry
  readonly validators: ValidatorRegistry
  readonly rulebooks: RulebookRegistry
  constructor(solvers: SolverRegistry, validators: ValidatorRegistry, rulebooks: RulebookRegistry) {
    this.solvers = solvers
    this.validators = validators
    this.rulebooks = rulebooks
  }

  async run(task: Task, o: RunOptions = {}): Promise<UnifiedResult> {
    const started = Date.now()
    const tr = new Tracer(task.id, o.traceLevel ?? 'detailed')
    const errors: { code: ErrorCode; message: string }[] = []
    let solver: Solver | null = null
    let rulebook: Rulebook | null = null
    let validatorInfo: { id: string; version: string } | null = null
    let timeMs: number | null = null
    let solverOut: SolverOutput | null = null

    const finish = (status: ExecutionStatus, reason: string, solutions: ValidatedSolution[] = [], rejected: ValidatedSolution[] = [], error?: UnifiedResult['error']): UnifiedResult => {
      if (error && !errors.some((e) => e.code === error.code)) errors.push({ code: error.code, message: error.message })
      tr.step({ component: 'orchestrator', operation: 'decide', input: { solverStatus: solverOut?.status ?? null, verdicts: [...solutions, ...rejected].map((s) => s.validation.status), proofOfUnsat: solver?.descriptor.capabilities.proofOfUnsat ?? false, error: error?.code ?? null }, output: { status, reason } })
      let explanation: Explanation | null = null
      try {
        explanation = explain({ task, status, statusReason: reason, solverId: solver?.descriptor.id ?? null, solutions, rejected, rulebook, trace: tr.trace(), error })
      } catch (e) {
        errors.push({ code: 'explanation-error', message: (e as Error).message })
      }
      // evidence: every citation the explanation points to, resolved; a failure is reported, never papered over
      const evidence: { citation: Citation; source: SourceRecord }[] = []
      if (explanation && rulebook) {
        const ids = [...new Set(explanation.statements.flatMap((s) => s.refs.citations))]
        const missing: string[] = []
        for (const id of ids) {
          try {
            const citation = rulebook.evidence.citation(id)
            evidence.push({ citation, source: rulebook.evidence.source(citation.sourceId) })
          } catch (e) {
            missing.push(`${id}: ${(e as Error).message}`)
          }
        }
        tr.step({ component: 'evidence', operation: 'evidence', output: { resolved: evidence.length, missing: missing.length }, check: missing.length ? 'thiếu' : 'ok' })
        if (missing.length) errors.push({ code: 'evidence-error', message: `không truy được ${missing.length} trích dẫn: ${missing.join('; ')}` })
      }
      tr.step({ component: 'explainer', operation: 'explain', output: { statements: explanation?.statements.length ?? 0 } })
      return {
        taskId: task.id, taskType: task.type, domain: task.domain,
        solverId: solver?.descriptor.id ?? null, solverVersion: solver?.descriptor.version ?? null,
        rulebook: task.rulebook, status, statusReason: reason, solutions, rejected, explanation, evidence, trace: tr.trace() as Trace,
        metadata: {
          engineVersion: UMRE_ENGINE_VERSION, startedAt: new Date(started).toISOString(), elapsedMs: Date.now() - started, timeMs,
          solverStatus: solverOut?.status ?? null, solverDiagnostics: solverOut?.diagnostics ?? {}, validator: validatorInfo, errors,
        },
        ...(error ? { error } : {}),
      }
    }
    const fail = (code: ErrorCode, message: string, details?: string[]) => finish('ERROR', message, [], [], { code, message, ...(details ? { details } : {}) })

    try {
      tr.step({ component: 'orchestrator', operation: 'receive', input: { type: task.type, domain: task.domain, rulebook: task.rulebook, score: task.score?.id ?? null } })
      if (o.signal?.aborted) return finish('CANCELLED', 'huỷ trước khi bắt đầu')
      // 1–2: type and domain
      const declared = task.type?.split('.')[0]
      if (!task.type || !task.domain || declared !== task.domain) return fail('invalid-input', `loại bài "${task.type}" không thuộc lĩnh vực "${task.domain}"`)
      // 4: rulebook
      rulebook = this.rulebooks.get(task.rulebook) ?? null
      tr.step({ component: 'orchestrator', operation: 'rulebook', input: task.rulebook, check: rulebook ? 'ok' : 'không có' })
      if (!rulebook) return fail('rulebook-unknown', `không có sổ luật ${task.rulebook.id}@${task.rulebook.version}`)
      const validator = this.validators.for(task.type, rulebook)
      if (!validator) return fail('no-validator', `không có bộ kiểm chứng cho ${task.type} với sổ luật ${rulebook.id}@${rulebook.version}: không giải được vì không kiểm được`)
      validatorInfo = { id: validator.id, version: validator.version }
      // 5–6: compatible solver
      const { candidates, rejected } = this.solvers.match(task, refOf(rulebook))
      const pick = o.solverId ? candidates.find((s) => s.descriptor.id === o.solverId) : candidates[0]
      tr.step({ component: 'router', operation: 'route', input: { requested: o.solverId ?? null }, output: { candidates: candidates.map((s) => `${s.descriptor.id}@${s.descriptor.version}`), rejected, chosen: pick ? `${pick.descriptor.id}@${pick.descriptor.version}` : null } })
      if (!pick) {
        const why = rejected.filter((r) => !o.solverId || r.id === o.solverId).map((r) => `${r.id}@${r.version}: ${r.reasons.join('; ')}`)
        return fail('no-solver', o.solverId ? `bộ giải "${o.solverId}" không nhận được nhiệm vụ này` : `không có bộ giải nào nhận ${task.type}`, why)
      }
      solver = pick
      const d = pick.descriptor
      const inputProblems = pick.checkInput(task)
      tr.step({ component: 'router', operation: 'check-input', solverId: d.id, output: inputProblems, check: inputProblems.length ? 'rejected' : 'ok' })
      if (inputProblems.length) return fail('invalid-input', 'đầu vào không hợp lệ với bộ giải', inputProblems)
      // 7: strategy — time and number of solutions within the solver's limits
      const budget = Math.min(o.timeMs ?? d.defaults.timeMs, d.limits.maxTimeMs)
      timeMs = budget
      const maxSolutions = Math.min(o.maxSolutions ?? d.defaults.maxSolutions, d.limits.maxSolutions)
      tr.step({ component: 'orchestrator', operation: 'strategy', solverId: d.id, output: { timeMs: budget, maxSolutions, clamped: (o.timeMs ?? 0) > d.limits.maxTimeMs } })
      // 8–9: run, guarded by time and cancellation
      const grace = o.graceMs ?? 2000
      let timer: ReturnType<typeof setTimeout> | undefined
      let onAbort: (() => void) | undefined
      try {
        const raced = await Promise.race([
          Promise.resolve().then(() => pick.solve(task, { timeMs: budget, maxSolutions, signal: o.signal })),
          new Promise<never>((_, rej) => (timer = setTimeout(() => rej(new TimedOut()), budget + grace))),
          new Promise<never>((_, rej) => {
            onAbort = () => rej(new Cancelled())
            o.signal?.addEventListener('abort', onAbort)
          }),
        ])
        const problems = checkOutput(raced)
        if (problems.length) return fail('output-schema', `bộ giải ${d.id} trả kết quả sai hợp đồng`, problems)
        solverOut = raced
      } catch (e) {
        if (e instanceof Cancelled) return finish('CANCELLED', 'bị huỷ khi đang giải')
        if (e instanceof TimedOut) return finish('TIMEOUT', `bộ giải không trả lời trong ${budget + grace} ms`)
        if (e instanceof RangeError) return fail('resource', `bộ giải hết tài nguyên: ${e.message}`)
        return fail('solver-error', `bộ giải ${d.id} lỗi: ${(e as Error).message}`)
      } finally {
        if (timer) clearTimeout(timer)
        if (onAbort) o.signal?.removeEventListener('abort', onAbort)
      }
      for (const s of solverOut.steps) tr.step({ component: 'solver', solverId: d.id, operation: `solver:${s.operation}`, ruleIds: s.ruleIds, input: s.input, output: s.output, check: s.check, level: s.level ?? 'detailed' })
      // 10: independent validation of every candidate
      const accepted: ValidatedSolution[] = []
      const refused: ValidatedSolution[] = []
      for (const score of solverOut.solutions) {
        let v: ValidationResult
        try {
          v = validator.validate(task, score, rulebook)
        } catch (e) {
          errors.push({ code: 'validation-error', message: `${score.id}: ${(e as Error).message}` })
          v = { ...emptyValidation(task, rulebook, validator), reasons: [`bộ kiểm lỗi: ${(e as Error).message}`] }
        }
        tr.step({ component: 'validator', operation: 'validate', input: { solution: score.id, digest: v.inputDigest }, output: { status: v.status, violations: v.violations.map((x) => `${x.ruleId}@${x.location.measure}`), coverage: v.coverage }, ruleIds: [...new Set(v.violations.map((x) => x.ruleId))], check: v.status, level: 'detailed' })
        tr.step({ component: 'validator', operation: 'validate:checkers', input: { solution: score.id }, output: v.outcomes.filter((x) => x.severity === 'hard').map((x) => ({ rule: x.ruleId, outcome: x.outcome, checkers: x.checkers })), level: 'diagnostic' })
        ;(v.status === 'VALID' ? accepted : refused).push({ score, validation: v })
      }
      const decision = decideStatus({ solverStatus: solverOut.status, verdicts: [...accepted, ...refused].map((x) => x.validation.status), proofOfUnsat: d.capabilities.proofOfUnsat, solverReason: solverOut.proof ?? solverOut.reason })
      return finish(decision.status, decision.reason, accepted, refused)
    } catch (e) {
      // nothing a solver or validator does may bring the engine down
      return fail('solver-error', `lỗi không lường trước: ${(e as Error).message}`)
    }
  }
}

function emptyValidation(task: Task, rb: Rulebook, v: { id: string; version: string }): ValidationResult {
  return {
    status: 'UNKNOWN', reasons: [], taskId: task.id, rulebook: refOf(rb), validator: { id: v.id, version: v.version }, checkers: [], violations: [], advisories: [], provisional: [], outcomes: [],
    coverage: { hardRules: 0, checked: 0, passed: 0, violated: 0, uncheckable: 0, disputed: 0, notApplicable: 0, softChecked: 0, exceptionsApplied: [], ratio: 0 }, inputDigest: '',
  }
}

/**
 * Consistency of a result with its own trace: the recorded decision replays to the same status, every candidate's
 * validation step matches its verdict, and only VALID candidates are listed as solutions. Returns the problems.
 */
export function auditResult(r: UnifiedResult): string[] {
  const out: string[] = []
  const decide = r.trace.steps.find((s) => s.operation === 'decide')
  if (!decide) return ['truy vết không có bước quyết định']
  const out0 = decide.output as { status: ExecutionStatus }
  if (out0.status !== r.status) out.push(`bước quyết định ghi ${out0.status}, kết quả là ${r.status}`)
  const inp = decide.input as { solverStatus: SolverStatus | null; verdicts: ValidationStatus[]; proofOfUnsat: boolean; error: string | null }
  if (inp.solverStatus && !inp.error && ['SOLVED', 'PROVEN_UNSAT', 'UNKNOWN', 'TIMEOUT'].includes(r.status)) {
    const replay = decideStatus({ solverStatus: inp.solverStatus, verdicts: inp.verdicts, proofOfUnsat: inp.proofOfUnsat })
    if (replay.status !== r.status) out.push(`dựng lại quyết định ra ${replay.status}, kết quả ghi ${r.status}`)
  }
  for (const s of [...r.solutions, ...r.rejected]) {
    const st = r.trace.steps.find((x) => x.operation === 'validate' && (x.input as { solution: string }).solution === s.score.id)
    if (st && st.check !== s.validation.status) out.push(`${s.score.id}: truy vết ghi ${st.check}, kết quả ${s.validation.status}`)
  }
  if (r.solutions.some((s) => s.validation.status !== 'VALID')) out.push('có lời giải chưa được công nhận VALID')
  if (r.status === 'SOLVED' && !r.solutions.length) out.push('SOLVED mà không có lời giải')
  return out
}
