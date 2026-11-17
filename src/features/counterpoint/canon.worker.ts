/// <reference lib="webworker" />
import { canonSolveMany, type CanonSpec } from './canon'

export type CReq = { spec: CanonSpec; timeMs: number }

// the imitation/canon search runs off the main thread so the page keeps answering taps
self.onmessage = (e: MessageEvent<CReq>) => {
  ;(self as unknown as Worker).postMessage(canonSolveMany(e.data.spec, e.data.timeMs))
}
