import type { Score } from './repr/score'
import type { RulebookRef } from './rulebook/rulebook'

/**
 * A reasoning task as the orchestrator receives it: what kind of problem (`type`, e.g. 'counterpoint.two-voice'),
 * in which domain, under which rulebook, on which score, with the domain's own parameters. The meaning of `params`
 * belongs to the domain (domains/<domain>/task.ts) and is checked there.
 */
export type Task<P = unknown> = {
  readonly id: string
  readonly type: string
  readonly domain: string
  readonly rulebook: RulebookRef
  readonly score: Score
  readonly params: P
}
/** Representation tag a solver declares and a task carries implicitly through its score. */
export const reprTag = (s: Score) => `${s.schema}@${s.version}`
