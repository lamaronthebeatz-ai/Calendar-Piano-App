import { runAnalysis } from './analysis/run'
import type { AnalysisModule, AnalysisResult } from './analysis/types'
import { counterpointCheck } from './domains/counterpoint/analysis'
import { harmonyProgression } from './domains/harmony/analysis'
import { harmonyTonal } from './domains/harmony/tonal'
import { melodyModule } from './domains/general/melody'
import { rhythmModule } from './domains/general/rhythm'
import { textureModule } from './domains/general/texture'
import { formModule } from './domains/general/form'
import { styleModule } from './domains/general/style'
import { identify, type Identification } from './domains/harmony/identify'
import { consequences, continuations, type Change, type Consequence, type Continuation } from './domains/harmony/reasoning'
import type { HarmonizeParams } from './domains/harmony/task'
import type { Spelling } from './repr/pitch'
import { diagnose, generateExercise, nextNotes, type Diagnosis, type Exercise, type NextNote } from './domains/counterpoint/ops'
import type { TwoVoiceParams } from './domains/counterpoint/task'
import { createEngine } from './engine'
import type { RunOptions } from './orchestration/orchestrator'
import type { UnifiedResult } from './orchestration/solver'
import type { Score } from './repr/score'
import { entries, type Rulebook, type RulebookRef } from './rulebook/rulebook'
import type { Task } from './task'
import type { Level } from '../features/counterpoint/solver'
import { classify, Diagnostics, fingerprintOf, ResultCache, UMRE_API_VERSION, type DiagEvent, type Meta, type UmreError } from './runtime/ops'
import { UMRE_ENGINE_VERSION } from './version'
import { COUNTERPOINT_RULEBOOK_ID, COUNTERPOINT_RULEBOOK_VERSION } from './rulebook/counterpoint'

/**
 * The single entry point of UMRE. Every app part (Counterpoint, Analyze, Compose, Theory, Research) talks to the
 * engine through `handle` with plain data — the same requests run in-process or in a worker (runtime/host.ts), so a
 * caller never depends on where the engine runs. Nothing here has UI.
 */
export type UmreRequest =
  | { readonly op: 'solve'; readonly task: Task; readonly options?: Omit<RunOptions, 'signal'> }
  | { readonly op: 'analyze'; readonly score: Score; readonly context?: Readonly<Record<string, unknown>>; readonly modules?: readonly string[] }
  | { readonly op: 'counterpoint.generate'; readonly level: Level; readonly seed: number; readonly timeMs: number }
  | { readonly op: 'counterpoint.hints'; readonly task: Task<TwoVoiceParams>; readonly partial: Score | null; readonly timeMs: number }
  | { readonly op: 'counterpoint.diagnose'; readonly task: Task<TwoVoiceParams>; readonly timeMs: number; readonly iv?: number }
  | { readonly op: 'rulebook'; readonly ref: RulebookRef }
  | { readonly op: 'harmony.identify'; readonly notes: readonly Spelling[]; readonly bass?: Spelling | null; readonly spelled?: boolean }
  | { readonly op: 'harmony.continuations'; readonly task: Task<HarmonizeParams>; readonly prefix: readonly number[] }
  | { readonly op: 'harmony.consequences'; readonly task: Task; readonly solution: Score; readonly change: Change }

export type RulebookView = {
  readonly ref: RulebookRef
  readonly title: string
  readonly entries: ReturnType<typeof entries>
  readonly rules: Rulebook['rules']
  readonly citations: readonly { readonly id: string; readonly locator: string | null; readonly source: string; readonly verification: string }[]
}

export type UmreResponse =
  | { readonly op: 'solve'; readonly result: UnifiedResult }
  | { readonly op: 'analyze'; readonly result: AnalysisResult }
  | { readonly op: 'counterpoint.generate'; readonly result: Exercise | null }
  | { readonly op: 'counterpoint.hints'; readonly result: NextNote[] }
  | { readonly op: 'counterpoint.diagnose'; readonly result: Diagnosis }
  | { readonly op: 'rulebook'; readonly result: RulebookView | null }
  | { readonly op: 'harmony.identify'; readonly result: Identification }
  | { readonly op: 'harmony.continuations'; readonly result: Continuation[] }
  | { readonly op: 'harmony.consequences'; readonly result: Consequence }

let engine: ReturnType<typeof createEngine> | null = null
const getEngine = () => (engine ??= createEngine())

const ANALYSIS: AnalysisModule[] = [counterpointCheck, harmonyTonal, harmonyProgression, melodyModule, rhythmModule, textureModule, formModule, styleModule]
/** Analysis modules by id (later phases register theirs here). */
export function analysisModules(): readonly AnalysisModule[] {
  return ANALYSIS
}
export function registerAnalysis(m: AnalysisModule) {
  environment = null // a new module changes every fingerprint
  if (ANALYSIS.some((x) => x.descriptor.id === m.descriptor.id)) throw new Error(`mô-đun phân tích trùng: ${m.descriptor.id}`)
  ANALYSIS.push(m)
}

const rulebookOf = (ref: RulebookRef) => {
  const rb = getEngine().rulebooks.get(ref)
  if (!rb) throw new Error(`không có sổ luật ${ref.id}@${ref.version}`)
  return rb
}

const cache = new ResultCache<UmreResponse>(32)
const diag = new Diagnostics(200)
let environment: string | null = null
/** Every component a result can depend on, with its version: a change anywhere changes every fingerprint. */
function environmentOf() {
  const e = getEngine()
  return (environment ??= JSON.stringify({
    engine: UMRE_ENGINE_VERSION, api: UMRE_API_VERSION,
    solvers: e.solvers.list().map((d) => `${d.id}@${d.version}`).sort(),
    validators: e.validators.list().map((v) => `${v.id}@${v.version}`).sort(),
    rulebooks: e.rulebooks.list().map((r) => `${r.id}@${r.version}`).sort(),
    analysis: ANALYSIS.map((m) => `${m.descriptor.id}@${m.descriptor.version}`).sort(),
  }))
}
/** Requests whose answer does not depend on a time budget or randomness. */
const REPRODUCIBLE = new Set(['analyze', 'harmony.identify', 'harmony.continuations', 'harmony.consequences', 'rulebook'])
/** Results kept in the cache: reproducible ones, and solves that reached a verdict (SOLVED / PROVEN_UNSAT — their answers were validated). */
const cacheable = (r: UmreResponse) =>
  r.op === 'solve' ? r.result.status === 'SOLVED' || r.result.status === 'PROVEN_UNSAT' : r.op === 'analyze' ? r.result.status !== 'ERROR' : REPRODUCIBLE.has(r.op)

export type Answer = (UmreResponse | { readonly op: 'error'; readonly error: UmreError } | { readonly op: 'diagnostics'; readonly result: { events: readonly DiagEvent[]; cache: { size: number; hits: number; misses: number; max: number } } }) & { readonly meta: Meta }

/**
 * The single entry point: never throws. Adds the fingerprint and reproducibility flag, answers repeated requests from
 * the cache, turns any exception into a typed error, and records the event (no music) in the diagnostics ring.
 */
export async function handle(req: UmreRequest | { readonly op: 'diagnostics' } | { readonly op: 'cache.clear' }, signal?: AbortSignal): Promise<Answer> {
  const t0 = Date.now()
  if (req.op === 'diagnostics' || req.op === 'cache.clear') {
    if (req.op === 'cache.clear') cache.clear()
    return { op: 'diagnostics', result: { events: diag.list(), cache: { size: cache.size, hits: cache.hits, misses: cache.misses, max: cache.max } }, meta: { api: UMRE_API_VERSION, engine: UMRE_ENGINE_VERSION, fingerprint: '', cached: false, elapsedMs: 0, reproducible: true } }
  }
  let fp = ''
  try {
    fp = fingerprintOf(req, environmentOf())
  } catch {
    fp = 'unfingerprintable'
  }
  const meta = (cached: boolean): Meta => ({ api: UMRE_API_VERSION, engine: UMRE_ENGINE_VERSION, fingerprint: fp, cached, elapsedMs: Date.now() - t0, reproducible: REPRODUCIBLE.has(req.op) || cached })
  const hit = fp !== 'unfingerprintable' ? cache.get(fp) : undefined
  if (hit) {
    diag.push({ t: t0, op: req.op, kind: 'cache-hit', ms: Date.now() - t0, fingerprint: fp })
    return { ...hit, meta: meta(true) }
  }
  try {
    const r = await dispatch(req, signal)
    if (fp !== 'unfingerprintable' && cacheable(r) && !signal?.aborted) cache.set(fp, r)
    const status = r.op === 'solve' || r.op === 'analyze' ? r.result.status : undefined
    diag.push({ t: t0, op: req.op, kind: 'done', ms: Date.now() - t0, fingerprint: fp, ...(status ? { status } : {}) })
    return { ...r, meta: meta(false) }
  } catch (e) {
    const error = classify(e, req.op, { op: req.op, ...('task' in req && req.task ? { task: req.task.id, type: req.task.type } : {}) })
    diag.push({ t: t0, op: req.op, kind: 'error', ms: Date.now() - t0, fingerprint: fp, code: error.code })
    return { op: 'error', error, meta: meta(false) }
  }
}

async function dispatch(req: UmreRequest, signal?: AbortSignal): Promise<UmreResponse> {
  const e = getEngine()
  switch (req.op) {
    case 'solve':
      return { op: 'solve', result: await e.orchestrator.run(req.task, { ...req.options, signal }) }
    case 'analyze': {
      const mods = req.modules ? ANALYSIS.filter((m) => req.modules!.includes(m.descriptor.id)) : ANALYSIS
      const ctx = { ...req.context }
      // a task in context brings its rulebook unless one is given
      if (!ctx.rulebook && (ctx.task as Task | undefined)?.rulebook) ctx.rulebook = e.rulebooks.get((ctx.task as Task).rulebook)
      return { op: 'analyze', result: await runAnalysis(mods, { score: req.score, context: ctx }, { signal }) }
    }
    case 'counterpoint.generate': {
      const rb = rulebookOf({ id: COUNTERPOINT_RULEBOOK_ID, version: COUNTERPOINT_RULEBOOK_VERSION })
      return { op: req.op, result: generateExercise(req.level, req.seed, req.timeMs, rb) }
    }
    case 'counterpoint.hints':
      return { op: req.op, result: nextNotes(req.task, req.partial, req.timeMs) }
    case 'counterpoint.diagnose':
      return { op: req.op, result: diagnose(req.task, req.timeMs, rulebookOf(req.task.rulebook), req.iv) }
    case 'harmony.identify':
      return { op: req.op, result: identify(req.notes, req.bass ?? null, { spelled: req.spelled }) }
    case 'harmony.continuations':
      return { op: req.op, result: continuations(req.task, req.prefix) }
    case 'harmony.consequences':
      return { op: req.op, result: consequences(req.task, req.solution, req.change, rulebookOf(req.task.rulebook)) }
    case 'rulebook': {
      const rb = e.rulebooks.get(req.ref)
      if (!rb) return { op: 'rulebook', result: null }
      const citations = rb.evidence.allCitations().map((c) => ({ id: c.id, locator: c.locator, source: c.sourceId, verification: c.verification }))
      return { op: 'rulebook', result: { ref: req.ref, title: rb.title, entries: entries(rb), rules: rb.rules, citations } }
    }
  }
}
