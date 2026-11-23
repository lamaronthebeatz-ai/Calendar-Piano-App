import { UMRE_ENGINE_VERSION } from '../version'

/**
 * Reasoning trace: the record of what the engine did for one task, in execution order. Three levels — `summary`
 * (orchestration milestones), `detailed` (plus the solver's own reported steps and each validation), `diagnostic`
 * (plus every checker's raw counts). A step is kept only if its level is at or below the trace's level. Steps hold
 * summaries (counts, ids, statuses), never full intermediate states, so a trace stays small.
 */
export type TraceLevel = 'summary' | 'detailed' | 'diagnostic'
const RANK: Record<TraceLevel, number> = { summary: 0, detailed: 1, diagnostic: 2 }

export type Component = 'orchestrator' | 'router' | 'solver' | 'validator' | 'evidence' | 'explainer'

export type TraceStep = {
  readonly id: string
  readonly seq: number
  /** ms since the task started */
  readonly at: number
  readonly taskId: string
  readonly component: Component
  readonly solverId?: string
  readonly operation: string
  readonly ruleIds?: readonly string[]
  readonly input?: unknown
  readonly output?: unknown
  /** the outcome of a check made at this step ('ok', 'VALID', 'rejected: …') */
  readonly check?: string
  readonly level: TraceLevel
  readonly engineVersion: string
}
export type Trace = { readonly taskId: string; readonly engineVersion: string; readonly level: TraceLevel; readonly steps: readonly TraceStep[] }

export type StepInput = Omit<TraceStep, 'id' | 'seq' | 'at' | 'taskId' | 'engineVersion' | 'level'> & { level?: TraceLevel }

export class Tracer {
  private out: TraceStep[] = []
  private seq = 0
  private readonly t0: number
  readonly taskId: string
  readonly level: TraceLevel
  private readonly now: () => number
  constructor(taskId: string, level: TraceLevel = 'detailed', now: () => number = () => Date.now()) {
    this.taskId = taskId
    this.level = level
    this.now = now
    this.t0 = now()
  }
  /** Record a step; returns its id, or null when the trace level leaves it out. */
  step(s: StepInput): string | null {
    const level = s.level ?? 'summary'
    const seq = ++this.seq
    if (RANK[level] > RANK[this.level]) return null
    const id = `${this.taskId}#${seq}`
    this.out.push({ ...s, id, seq, at: this.now() - this.t0, taskId: this.taskId, level, engineVersion: UMRE_ENGINE_VERSION })
    return id
  }
  trace(): Trace {
    return { taskId: this.taskId, engineVersion: UMRE_ENGINE_VERSION, level: this.level, steps: this.out.slice() }
  }
}

export const stepsOf = (t: Trace, operation: string) => t.steps.filter((s) => s.operation === operation)
