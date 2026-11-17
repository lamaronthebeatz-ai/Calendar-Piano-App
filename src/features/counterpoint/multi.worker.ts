/// <reference lib="webworker" />
import { msolveMany, type MProblem } from './multi'

export type MReq = { mp: MProblem; timeMs: number }

// the three-/four-voice search runs off the main thread so the page keeps answering taps
self.onmessage = (e: MessageEvent<MReq>) => {
  ;(self as unknown as Worker).postMessage(msolveMany(e.data.mp, e.data.timeMs))
}
