import { cmp, fromQuarters, toQuarters, type Rational } from '../repr/rational'
import { endOf, type NoteEvent, type Score, type Voice } from '../repr/score'
import type { Pitch } from '../repr/pitch'
import { evaluate, type Queries, type RuleDef, type RuleHit } from '../rules/lang'

/**
 * Stage 3 — the shared constraint model. A problem is a score with some voices fixed and some FREE; a free voice
 * is a sequence of variables (one per sounding note: duration + pitch) whose domain the domain module supplies;
 * the constraints are the rulebook's hard rules in the rule language, evaluated on the (partial) texture. A rule
 * hit counts against a partial texture only when it is CERTAIN: its item lies before the frontier (every free voice
 * has reached it) and its facts are not pending (nothing it depends on is still unwritten). Nothing here knows
 * counterpoint or harmony.
 */
export type Choice = { readonly duration: Rational; readonly pitch: Pitch }

/** One view of the texture the rules are checked on (the original, or a version derived from it). */
export type View = { readonly label: string; readonly rules: readonly RuleDef[]; readonly queries: Queries; readonly frontier: Rational }

export type CspModel = {
  readonly id: string
  /** stated search domain: an "unsat" is a proof within it, and only within it */
  readonly domain: string
  readonly base: Score
  readonly free: readonly number[]
  readonly end: Rational
  /** domain of the next note of a free voice starting at `at` (ordered: the search tries them in this order) */
  candidates(voice: number, at: Rational, line: readonly NoteEvent[], score: Score): Choice[]
  /** how a chosen sounding note is written (e.g. split at bar lines into tied notes) */
  write(voice: number, at: Rational, choice: Choice, n: number): NoteEvent[]
  /** the views to check: the texture itself and anything derived from it; `partial`: still being written */
  views(score: Score, partial: boolean): View[]
  /** exceptions the task switches on */
  readonly exceptions: ReadonlySet<string>
}

export type Assignment = readonly (readonly NoteEvent[])[]

/** The score for an assignment of the free voices. */
export function scoreOf(m: CspModel, lines: Assignment): Score {
  const voices: Voice[] = m.base.voices.map((v, i) => {
    const k = m.free.indexOf(i)
    return k < 0 ? v : { ...v, events: [...lines[k]] }
  })
  return { ...m.base, voices }
}

export const lineEnd = (line: readonly NoteEvent[]): Rational => (line.length ? endOf(line[line.length - 1]) : fromQuarters(0))

/** The earliest end among the voices of a view's score: rules are certain only before it. */
export function frontierOf(s: Score): Rational {
  return s.voices.reduce<Rational | null>((f, v) => {
    const e = v.events.length ? endOf(v.events[v.events.length - 1]) : fromQuarters(0)
    return !f || cmp(e, f) < 0 ? e : f
  }, null) ?? fromQuarters(0)
}

/** Certain violations of a partial (or, with `final`, complete) assignment. */
export function violations(m: CspModel, lines: Assignment, final: boolean): { view: string; hit: RuleHit }[] {
  const s = scoreOf(m, lines)
  const out: { view: string; hit: RuleHit }[] = []
  for (const v of m.views(s, !final)) {
    const f = toQuarters(v.frontier)
    for (const hit of evaluate(v.rules, v.queries, m.exceptions).hits) {
      if (!final && (hit.item.facts.pending === true || hit.item.at >= f)) continue
      out.push({ view: v.label, hit })
    }
  }
  return out
}

export const reached = (m: CspModel, lines: Assignment) => lines.every((l) => cmp(lineEnd(l), m.end) >= 0)
