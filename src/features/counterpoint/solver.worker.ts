/// <reference lib="webworker" />
import { generate, hints, rescue, solveMany, splitScan, type Level } from './solver'
import type { Problem } from './rules'
import type { Seg } from './model'

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
    q.kind === 'solve' ? solveMany(q.problem, q.timeMs)
    : q.kind === 'rescue' ? rescue(q.problem, q.timeMs)
    : q.kind === 'splits' ? splitScan(q.problem, q.iv, q.timeMs)
    : q.kind === 'hints' ? hints(q.problem, q.prefix, q.timeMs)
    : generate(q.level, q.seed || 1 + Math.floor(Math.random() * 2e9), q.timeMs)
  ;(self as unknown as Worker).postMessage(r)
}
