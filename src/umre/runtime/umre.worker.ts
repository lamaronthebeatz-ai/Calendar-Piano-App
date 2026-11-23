/// <reference lib="webworker" />
import { serve } from './serve'
import type { Envelope } from './host'

// browser entry: new UmreHost(() => new Worker(new URL('./umre.worker.ts', import.meta.url), { type: 'module' }))
self.onmessage = async (e: MessageEvent<Envelope>) => {
  ;(self as unknown as Worker).postMessage(await serve(e.data))
}
