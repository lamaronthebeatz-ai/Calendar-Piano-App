import type { TraceLevel } from '../explain/trace'
import type { Citation, SourceRecord } from '../evidence/evidence'
import type { Score } from '../repr/score'
import type { RulebookRef } from '../rulebook/rulebook'
import type { Task } from '../task'
import type { ValidationResult } from '../validation/types'
import type { Confirmation } from '../validation/independence'
import type { Explanation } from '../explain/explain'
import type { Trace } from '../explain/trace'

/**
 * The unified solver contract. A specialised solver keeps its own algorithm and rules; it declares what it can do
 * (descriptor), checks its input, and returns candidate solutions as UMRE scores with ITS OWN status. It never
 * certifies a solution: the orchestrator sends every candidate to an independent validator.
 */
export type SolverStatus = 'solved' | 'unsat' | 'unknown' | 'timeout'

export type SolverDescriptor = {
  readonly id: string
  readonly version: string
  readonly domain: string
  readonly taskTypes: readonly string[]
  /** score representations it reads, e.g. 'umre.score@1' */
  readonly representations: readonly string[]
  readonly rulebooks: readonly { readonly id: string; readonly versions: readonly string[] }[]
  readonly input: { readonly schema: string; readonly description: string }
  readonly output: { readonly schema: string; readonly description: string }
  readonly capabilities: {
    /** an 'unsat' from this solver is a proof within its stated search domain */
    readonly proofOfUnsat: boolean
    readonly multipleSolutions: boolean
    /** 'none': runs to its own time limit once started; 'cooperative': honours the abort signal */
    readonly cancellation: 'none' | 'cooperative'
  }
  readonly defaults: { readonly timeMs: number; readonly maxSolutions: number }
  readonly limits: { readonly maxTimeMs: number; readonly maxSolutions: number }
  /** UMRE engine major.minor the solver was written against */
  readonly requires: { readonly umre: string }
  /** checker ids (validation/*) the solver itself runs before returning a candidate — they cannot confirm its answers */
  readonly consults: readonly string[]
  /** higher is preferred when several solvers fit */
  readonly priority?: number
}

export type SolverStep = { readonly operation: string; readonly ruleIds?: readonly string[]; readonly input?: unknown; readonly output?: unknown; readonly check?: string; readonly level?: TraceLevel }

export type SolverOutput = {
  readonly status: SolverStatus
  readonly solutions: readonly Score[]
  /** for 'unsat': what was exhausted or proved (the search domain, a necessary condition that fails) */
  readonly proof?: string
  /** for 'unknown' / 'timeout': why no conclusion */
  readonly reason?: string
  readonly diagnostics: Readonly<Record<string, unknown>>
  readonly steps: readonly SolverStep[]
}

export type SolveContext = { readonly timeMs: number; readonly maxSolutions: number; readonly signal?: AbortSignal }

export interface Solver {
  readonly descriptor: SolverDescriptor
  /** null when ready, else why not (a missing worker, a disabled backend) */
  available?(): string | null
  /** problems with the task as THIS solver reads it; empty = acceptable */
  checkInput(task: Task): string[]
  solve(task: Task, ctx: SolveContext): SolverOutput | Promise<SolverOutput>
}

/** Execution status of the whole run (not of one solution). */
export type ExecutionStatus = 'SOLVED' | 'PROVEN_UNSAT' | 'UNKNOWN' | 'TIMEOUT' | 'ERROR' | 'CANCELLED'
export type ErrorCode =
  | 'no-solver' | 'no-validator' | 'rulebook-unknown' | 'invalid-input' | 'solver-error' | 'resource' | 'output-schema' | 'validation-error' | 'evidence-error' | 'explanation-error'

export type ValidatedSolution = { readonly score: Score; readonly validation: ValidationResult; readonly confirmation: Confirmation }

export type UnifiedResult = {
  readonly taskId: string
  readonly taskType: string
  readonly domain: string
  readonly solverId: string | null
  readonly solverVersion: string | null
  readonly rulebook: RulebookRef
  readonly status: ExecutionStatus
  readonly statusReason: string
  /** candidates judged VALID AND confirmed by checkers the solver did not itself run — the only ones UMRE calls solutions */
  readonly solutions: readonly ValidatedSolution[]
  /** every other candidate: INVALID / INCOMPLETE / UNKNOWN, or VALID only on the word of checkers the solver ran */
  readonly rejected: readonly ValidatedSolution[]
  readonly explanation: Explanation | null
  /** every citation the explanation relies on, resolved with its source */
  readonly evidence: readonly { readonly citation: Citation; readonly source: SourceRecord }[]
  readonly trace: Trace
  readonly metadata: {
    readonly engineVersion: string
    readonly startedAt: string
    readonly elapsedMs: number
    readonly timeMs: number | null
    readonly solverStatus: SolverStatus | null
    readonly solverDiagnostics: Readonly<Record<string, unknown>>
    readonly validator: { readonly id: string; readonly version: string } | null
    readonly errors: readonly { readonly code: ErrorCode; readonly message: string }[]
  }
  readonly error?: { readonly code: ErrorCode; readonly message: string; readonly details?: readonly string[] }
}
