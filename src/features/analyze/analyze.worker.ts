/// <reference lib="webworker" />
import { analyze, type AnalyzeOptions } from './engine/index'
import type { Score } from '../compose/model'

// The analysis runs here so a long piece never freezes the page (a sonata movement takes a few seconds).
self.onmessage = (e: MessageEvent<{ id: number; score: Score; opts?: AnalyzeOptions }>) => {
  const { id, score, opts } = e.data
  try {
    self.postMessage({ id, analysis: analyze(score, opts) })
  } catch (err) {
    self.postMessage({ id, error: err instanceof Error ? err.message : String(err) })
  }
}
