/// <reference lib="webworker" />
import { formSolve, type FormSpec } from './forms'

export type FReq = { spec: FormSpec; timeMs: number }

// a whole form (sections + bridges) runs off the main thread so the page keeps answering taps
self.onmessage = (e: MessageEvent<FReq>) => {
  ;(self as unknown as Worker).postMessage(formSolve(e.data.spec, e.data.timeMs))
}
