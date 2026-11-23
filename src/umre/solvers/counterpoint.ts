import { barQ, keyName, type Seg } from '../../features/counterpoint/model'
import { msolve, mdomain, totalOfM } from '../../features/counterpoint/multi'
import { totalOf } from '../../features/counterpoint/rules'
import { domainOf, solveMany } from '../../features/counterpoint/solver'
import { COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION } from '../rulebook/counterpoint'
import {
  checkMultiVoiceTask, checkTwoVoiceTask, MULTI_VOICE, multiSolution, toMProblem, toProblem, TWO_VOICE, twoVoiceSolution, type MultiVoiceParams, type TwoVoiceParams,
} from '../domains/counterpoint/task'
import type { Task } from '../task'
import type { Solver, SolverDescriptor, SolverOutput, SolverStep } from '../orchestration/solver'

/**
 * The counterpoint page's solvers behind the unified interface. Nothing in features/counterpoint is changed: the
 * adapter maps the task to the module's Problem / MProblem, calls solveMany / msolve exactly as the page's worker
 * does, and maps the results back — the module's three states (valid / unsat / unknown) become solved / unsat /
 * unknown-or-timeout, with its search domain, blockers and dispute count kept as diagnostics and trace steps.
 * Both run synchronously to their own time limit (cancellation 'none'); the page runs them in a web worker.
 */
const common = {
  domain: 'counterpoint',
  representations: ['umre.score@1'],
  rulebooks: [{ id: COUNTERPOINT_RULEBOOK_ID, versions: [COUNTERPOINT_RULEBOOK_VERSION] }],
  output: { schema: 'umre.score@1', description: 'mỗi phương án là một tổng phổ UMRE đủ các bè, bè đề giữ nguyên' },
  requires: { umre: '0.5' },
  // solver.ts / multi.ts run rules.ts (search-rules) and verify.ts on every answer before returning it
  consults: ['search-rules', 'verify'],
} as const

const blockerSteps = (blockers: { rule: string; t: number; count: number; version: string; detail?: string }[], bar: number): SolverStep => ({
  operation: 'blockers',
  ruleIds: [...new Set(blockers.map((b) => b.rule))],
  output: blockers.map((b) => ({ rule: b.rule, bar: Math.floor(b.t / bar) + 1, t: b.t, count: b.count, version: b.version, ...(b.detail ? { detail: b.detail } : {}) })),
  level: 'detailed',
})

export const twoVoiceSolver: Solver = {
  descriptor: {
    ...common,
    id: 'counterpoint.two-voice.search',
    version: '1.0.0',
    taskTypes: [TWO_VOICE],
    input: { schema: 'counterpoint.two-voice/params@1', description: 'một bè đề; givenIs, ✱ (stars), biến thể (versions), starsOnly, quarterPrep' },
    capabilities: { proofOfUnsat: true, multipleSolutions: true, cancellation: 'none' },
    defaults: { timeMs: 15_000, maxSolutions: 6 },
    limits: { maxTimeMs: 120_000, maxSolutions: 24 },
  } satisfies SolverDescriptor,
  checkInput: (task) => checkTwoVoiceTask(task),
  solve(task, ctx): SolverOutput {
    const t = task as Task<TwoVoiceParams>
    const p = toProblem(t)
    const bar = barQ(p.meter)
    const steps: SolverStep[] = [
      { operation: 'problem', output: { summary: `${keyName(p.key)}, nhịp ${p.meter.num}/${p.meter.den}, ${totalOf(p) / bar} ô, đề là bè ${p.givenIs}, ${p.stars.length} chỗ ✱, ${p.versions.length} biến thể${p.versions.length ? ` (${p.versions.map((v) => v.label).join(', ')})` : ''}${p.quarterPrep ? ', cho nốt đen chuẩn bị' : ''}` } },
      { operation: 'domain', output: domainOf(p).text, level: 'detailed' },
    ]
    const r = solveMany(p, ctx.timeMs, ctx.maxSolutions)
    steps.push({ operation: 'search', output: { status: r.status, nodes: r.nodes, exhausted: r.exhausted, furthest: r.furthest, disputed: r.disputed ?? 0, solutions: r.solutions.length } })
    if (r.blockers.length) steps.push(blockerSteps(r.blockers, bar))
    let proof: string | undefined
    if (r.status === 'unsat') {
      proof = r.stars?.length
        ? `điều kiện cần cho ✱ không thoả: ${r.stars.map((s) => `ô ${Math.floor(s.t / bar) + 1}: ${s.reason}`).join('; ')}`
        : `đã duyệt hết miền tìm kiếm (${domainOf(p).text})`
      steps.push({ operation: 'proof', output: proof, ruleIds: r.stars?.length ? ['star'] : [] })
    }
    const status = r.status === 'valid' ? 'solved' : r.status === 'unsat' ? 'unsat' : r.disputed ? 'unknown' : 'timeout'
    return {
      status, proof,
      reason: status === 'unknown' ? `${r.disputed} phương án bị hai bộ kiểm của bộ giải bất đồng` : status === 'timeout' ? `hết ${ctx.timeMs} ms, đã thử ${r.nodes} nút` : undefined,
      solutions: r.solutions.map((s, i) => twoVoiceSolution(t, s.cp, i + 1)),
      diagnostics: { nodes: r.nodes, exhausted: r.exhausted, furthest: r.furthest, disputed: r.disputed ?? 0, penalties: r.solutions.map((s) => s.penalty), domain: domainOf(p).text },
      steps,
    }
  },
}

export const multiVoiceSolver: Solver = {
  descriptor: {
    ...common,
    id: 'counterpoint.multi-voice.search',
    version: '1.0.0',
    taskTypes: [MULTI_VOICE],
    input: { schema: 'counterpoint.multi-voice/params@1', description: 'ba hoặc bốn bè, bè tự do để trống; free, biến thể (steps, order)' },
    capabilities: { proofOfUnsat: true, multipleSolutions: true, cancellation: 'none' },
    defaults: { timeMs: 15_000, maxSolutions: 4 },
    limits: { maxTimeMs: 120_000, maxSolutions: 16 },
  } satisfies SolverDescriptor,
  checkInput: (task) => checkMultiVoiceTask(task),
  solve(task, ctx): SolverOutput {
    const t = task as Task<MultiVoiceParams>
    const mp = toMProblem(t)
    const bar = barQ(mp.meter)
    const steps: SolverStep[] = [
      { operation: 'problem', output: { summary: `${keyName(mp.key)}, nhịp ${mp.meter.num}/${mp.meter.den}, ${totalOfM(mp) / bar} ô, ${mp.voices.length} bè (tự do: ${mp.free.map((f, i) => (f ? ['I', 'II', 'III', 'IV'][i] : null)).filter(Boolean).join(', ')}), ${mp.versions.length} biến thể` } },
      { operation: 'domain', output: mdomain(mp).text, level: 'detailed' },
    ]
    const r = msolve(mp, { timeMs: ctx.timeMs, maxSolutions: ctx.maxSolutions })
    steps.push({ operation: 'search', output: { status: r.status, nodes: r.nodes, furthest: r.furthest, disputed: r.disputed, solutions: r.solutions.length } })
    let proof: string | undefined
    if (r.status === 'unsat') {
      proof = `đã duyệt hết miền tìm kiếm (${r.domain})`
      steps.push({ operation: 'proof', output: proof })
    }
    const status = r.status === 'valid' ? 'solved' : r.status === 'unsat' ? 'unsat' : r.disputed ? 'unknown' : 'timeout'
    return {
      status, proof,
      reason: status === 'unknown' ? `${r.disputed} phương án bị hai bộ kiểm của bộ giải bất đồng` : status === 'timeout' ? `hết ${ctx.timeMs} ms, đã thử ${r.nodes} nút` : undefined,
      solutions: r.solutions.map((s, i) => multiSolution(t, s.lines as Seg[][], i + 1)),
      diagnostics: { nodes: r.nodes, furthest: r.furthest, disputed: r.disputed, domain: r.domain },
      steps,
    }
  },
}

export const COUNTERPOINT_SOLVERS = [twoVoiceSolver, multiVoiceSolver]
