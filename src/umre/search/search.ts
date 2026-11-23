import { lineEnd, reached, scoreOf, violations, type CspModel } from '../constraints/model'
import { cmp, toQuarters } from '../repr/rational'
import { midi } from '../repr/pitch'
import type { NoteEvent, Score } from '../repr/score'

/**
 * Stage 4 — the shared search. Depth-first over the free voices of a constraint model, always extending the voice
 * that is furthest behind; after each note only the CERTAIN violations prune. Remembers dead states: a state is the
 * time each free voice has reached plus its last `memo` notes — sound when no rule looks further back than that
 * (the caller states `memo` for its rulebook). Three conclusions, never confused:
 *  solved  — at least one assignment passed every hard rule on the complete texture;
 *  unsat   — the whole stated domain was searched and none did (a proof within the domain, nothing more);
 *  timeout — the time or node budget ran out first (no conclusion).
 */
export type SearchOptions = { readonly timeMs: number; readonly maxSolutions: number; readonly memo?: number; readonly nodeLimit?: number; readonly signal?: AbortSignal }
export type SearchResult = {
  readonly status: 'solved' | 'unsat' | 'timeout'
  readonly solutions: Score[]
  readonly nodes: number
  readonly deadStates: number
  /** furthest point (quarters) any branch reached, and the rules that stopped it there */
  readonly furthest: number
  readonly blockers: { rule: string; view: string; at: number; count: number }[]
  readonly cancelled: boolean
}

export function search(m: CspModel, o: SearchOptions): SearchResult {
  const K = o.memo ?? 3
  const t0 = Date.now()
  const lines: NoteEvent[][] = m.free.map(() => [])
  const found: Score[] = []
  const dead = new Set<string>()
  const blockers = new Map<string, { rule: string; view: string; at: number; count: number }>()
  let nodes = 0
  let furthest = 0
  let stopped = false
  let cancelled = false
  let n = 0

  const stateKey = () =>
    lines.map((l) => `${toQuarters(lineEnd(l))}:${l.slice(-K).map((e) => `${toQuarters(e.onset)}/${toQuarters(e.duration)}/${e.kind === 'note' ? midi(e.pitch) + '.' + e.pitch.letter : 'r'}/${e.kind === 'note' ? e.tie ?? '' : ''}`).join(',')}`).join('|')

  const out = () => {
    if (found.length >= o.maxSolutions) return true
    if (Date.now() - t0 > o.timeMs || (o.nodeLimit && nodes > o.nodeLimit)) stopped = true
    if (o.signal?.aborted) {
      stopped = true
      cancelled = true
    }
    return stopped
  }

  function dfs(): void {
    if (out()) return
    if (reached(m, lines)) {
      const v = violations(m, lines, true)
      if (!v.length) found.push(scoreOf(m, lines.map((l) => [...l])))
      else note(v)
      return
    }
    const key = stateKey()
    if (dead.has(key)) return
    const before = found.length
    // the free voice furthest behind
    let k = 0
    for (let i = 1; i < lines.length; i++) if (cmp(lineEnd(lines[i]), lineEnd(lines[k])) < 0) k = i
    const at = lineEnd(lines[k])
    for (const c of m.candidates(m.free[k], at, lines[k], scoreOf(m, lines))) {
      if (out()) return
      nodes++
      const evs = m.write(m.free[k], at, c, ++n)
      lines[k].push(...evs)
      const v = violations(m, lines, false)
      if (!v.length) {
        furthest = Math.max(furthest, toQuarters(lineEnd(lines[k])))
        dfs()
      } else note(v)
      lines[k].length -= evs.length
      if (found.length >= o.maxSolutions) return
    }
    if (!stopped && found.length === before) dead.add(key)
  }
  function note(v: ReturnType<typeof violations>) {
    for (const { view, hit } of v.slice(0, 1)) {
      const b = `${hit.ruleId}|${view}|${hit.item.at}`
      const x = blockers.get(b)
      if (x) x.count++
      else blockers.set(b, { rule: hit.ruleId, view, at: hit.item.at, count: 1 })
    }
  }

  dfs()
  const status = found.length ? 'solved' : stopped ? 'timeout' : 'unsat'
  return { status, solutions: found, nodes, deadStates: dead.size, furthest, blockers: [...blockers.values()].sort((a, b) => b.at - a.at || b.count - a.count).slice(0, 8), cancelled }
}
