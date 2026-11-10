/// <reference lib="webworker" />
import { solveMany } from './solver'
import type { Problem } from './rules'

// the search runs off the main thread so the page keeps answering taps
self.onmessage = (e: MessageEvent<{ problem: Problem; timeMs: number }>) => {
  const r = solveMany(e.data.problem, e.data.timeMs)
  ;(self as unknown as Worker).postMessage(r)
}
