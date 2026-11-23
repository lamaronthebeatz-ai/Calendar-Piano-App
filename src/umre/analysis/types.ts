import type { Score } from '../repr/score'

/**
 * The analysis contract (Wave C). Solving answers "find notes that obey the rules"; analysis answers "what is in
 * this music". A module states what KIND of claim it makes, and every finding says whether it is a fact read off
 * the notes, an interpretation, a hypothesis, an estimate, or a rule check — never mixed in one statement.
 */
export type AnalysisKind = 'formalizable' | 'analytical' | 'probabilistic'
export type AnalysisStatus = 'COMPLETED' | 'PARTIAL' | 'AMBIGUOUS' | 'INSUFFICIENT_DATA' | 'UNKNOWN' | 'ERROR'

/**
 * fact: structural certainty from the notes (a pitch class set, an interval); interpretation: a reading in context
 * that other analysts could make differently (a Roman numeral, a cadence); hypothesis: a large-scale claim to be tested
 * (a form); estimate: a statistic or score with its basis; rule-check: compliance with a named rulebook rule.
 */
export type FindingKind = 'fact' | 'interpretation' | 'hypothesis' | 'estimate' | 'rule-check'

export type Text = { readonly basic: string; readonly technical: string; readonly academic?: string }
export type Confidence = { readonly value: number; readonly basis: string }

export type Finding = {
  readonly id: string
  readonly module: string
  readonly kind: FindingKind
  readonly topic: string
  /** quarters from the start (the app's unit); `end` exclusive */
  readonly at?: number
  readonly end?: number
  readonly voices?: readonly number[]
  readonly value: unknown
  readonly text: Text
  /** required for interpretation / hypothesis / estimate */
  readonly confidence?: Confidence
  /** other readings kept beside the chosen one (ambiguity is reported, not hidden) */
  readonly alternatives?: readonly { readonly value: unknown; readonly text: string; readonly confidence?: Confidence }[]
  /** what in the music supports the finding (observations, not prose) */
  readonly evidence: readonly string[]
  readonly ruleIds?: readonly string[]
  /** citation ids in a rulebook's evidence registry — only real ones */
  readonly citations?: readonly string[]
}

export type AnalysisInput = {
  readonly score: Score
  /** optional context a module may need (a key, a rulebook, the task the score answers) */
  readonly context?: Readonly<Record<string, unknown>>
}

export type ModuleDescriptor = {
  readonly id: string
  readonly version: string
  readonly domain: string
  readonly kind: AnalysisKind
  /** how it works, in one line (algorithm or adapted app tool) */
  readonly method: string
  /** what it does NOT do — shown with every result */
  readonly limits: readonly string[]
  /** modules whose findings it reads (run first) */
  readonly after?: readonly string[]
}

export type ModuleOutput = {
  readonly status: AnalysisStatus
  readonly statusReason: string
  readonly findings: readonly Finding[]
  /** for INSUFFICIENT_DATA: what is missing */
  readonly missing?: readonly string[]
}

export type AnalysisContext = { readonly signal?: AbortSignal; readonly prior: readonly Finding[] }

export interface AnalysisModule {
  readonly descriptor: ModuleDescriptor
  /** what the input lacks for THIS module (empty = enough) */
  checkInput(input: AnalysisInput): string[]
  analyze(input: AnalysisInput, ctx: AnalysisContext): ModuleOutput | Promise<ModuleOutput>
}

export type ModuleResult = ModuleOutput & { readonly module: string; readonly version: string; readonly kind: AnalysisKind; readonly elapsedMs: number; readonly limits: readonly string[] }

export type AnalysisResult = {
  readonly status: AnalysisStatus
  readonly statusReason: string
  readonly modules: readonly ModuleResult[]
  readonly findings: readonly Finding[]
  readonly metadata: { readonly engineVersion: string; readonly elapsedMs: number; readonly errors: readonly string[] }
}
