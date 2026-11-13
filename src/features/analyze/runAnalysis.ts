import type { Score } from '../compose/model'
import type { Analysis, AnalyzeOptions } from './engine/index'

let worker: Worker | null = null
let seq = 0
const waiting = new Map<number, { ok: (a: Analysis) => void; fail: (e: Error) => void }>()

/** Analyse in a Web Worker; falls back to the page's own thread where workers are unavailable. */
export function runAnalysis(score: Score, opts?: AnalyzeOptions): Promise<Analysis> {
  if (typeof Worker === 'undefined') return import('./engine/index').then((m) => m.analyze(score, opts))
  if (!worker) {
    worker = new Worker(new URL('./analyze.worker.ts', import.meta.url), { type: 'module' })
    worker.onmessage = (e: MessageEvent<{ id: number; analysis?: Analysis; error?: string }>) => {
      const w = waiting.get(e.data.id)
      waiting.delete(e.data.id)
      if (!w) return
      if (e.data.analysis) w.ok(e.data.analysis)
      else w.fail(new Error(e.data.error ?? 'Phân tích thất bại'))
    }
    worker.onerror = () => {
      waiting.forEach((w) => w.fail(new Error('Bộ phân tích gặp lỗi')))
      waiting.clear()
      worker = null
    }
  }
  const id = ++seq
  return new Promise((ok, fail) => {
    waiting.set(id, { ok, fail })
    worker!.postMessage({ id, score, opts })
  })
}
