import { runAnalysis } from './analysis/run'
import type { AnalysisModule, AnalysisResult } from './analysis/types'
import { counterpointCheck } from './domains/counterpoint/analysis'
import { harmonyProgression } from './domains/harmony/analysis'
import { harmonyTonal } from './domains/harmony/tonal'
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

const ANALYSIS: AnalysisModule[] = [counterpointCheck, harmonyTonal, harmonyProgression]
/** Analysis modules by id (later phases register theirs here). */
export function analysisModules(): readonly AnalysisModule[] {
  return ANALYSIS
}
export function registerAnalysis(m: AnalysisModule) {
  if (ANALYSIS.some((x) => x.descriptor.id === m.descriptor.id)) throw new Error(`mô-đun phân tích trùng: ${m.descriptor.id}`)
  ANALYSIS.push(m)
}

const rulebookOf = (ref: RulebookRef) => {
  const rb = getEngine().rulebooks.get(ref)
  if (!rb) throw new Error(`không có sổ luật ${ref.id}@${ref.version}`)
  return rb
}

export async function handle(req: UmreRequest, signal?: AbortSignal): Promise<UmreResponse> {
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
      const rb = rulebookOf({ id: 'counterpoint.strict.pham-tu-huong-1991', version: '1' })
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
