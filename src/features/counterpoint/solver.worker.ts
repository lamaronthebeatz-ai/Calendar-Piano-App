/// <reference lib="webworker" />
import { generate, hints, rescue, solveMany, splitScan, type Level } from './solver'
import type { Problem } from './rules'
import type { Seg } from './model'
import { confirmForPage } from '../../umre/domains/counterpoint/page'

export type Req =
  | { kind: 'solve'; problem: Problem; timeMs: number }
  | { kind: 'rescue'; problem: Problem; timeMs: number }
  | { kind: 'hints'; problem: Problem; prefix: Seg[]; timeMs: number }
  | { kind: 'splits'; problem: Problem; iv: number; timeMs: number }
  | { kind: 'generate'; level: Level; seed: number; timeMs: number } // seed 0: a random one

// the search runs off the main thread so the page keeps answering taps
self.onmessage = (e: MessageEvent<Req>) => {
  const q = e.data
  const r =
    // every answer is re-judged by UMRE's independent checkers and ranked by the rulebook's soft rules
    q.kind === 'solve' ? confirmForPage(q.problem, solveMany(q.problem, q.timeMs))
    : q.kind === 'rescue' ? rescue(q.problem, q.timeMs)
    : q.kind === 'splits' ? splitScan(q.problem, q.iv, q.timeMs)
    : q.kind === 'hints' ? hints(q.problem, q.prefix, q.timeMs)
    : generateConfirmed(q.level, q.seed || 1 + Math.floor(Math.random() * 2e9), q.timeMs)
  ;(self as unknown as Worker).postMessage(r)
}

/** A generated exercise whose answer UMRE's independent checkers confirm (the generator never certifies its own answer). */
function generateConfirmed(level: Level, seed: number, timeMs: number) {
  const t0 = Date.now()
  for (let k = 0; Date.now() - t0 < timeMs; k++) {
    const g = generate(level, seed + k * 104729, timeMs - (Date.now() - t0))
    if (!g) return null
    const p: Problem = { key: g.key, meter: g.meter, given: g.given, givenIs: g.givenIs, stars: g.stars, versions: g.versions, starsOnly: true }
    if (confirmForPage(p, { solutions: [g.answer], nodes: 0, exhausted: false, furthest: 0, blockers: [], status: 'valid' }).umre.confirmed) return g
  }
  return null
}
