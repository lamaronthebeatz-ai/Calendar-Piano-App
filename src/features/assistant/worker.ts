/// <reference lib="webworker" />
// Builds the library index off the main thread and answers questions against it.
import { ARTICLES } from '../theory/articles'
import { answer, build, fold, type Answer } from './engine'
import { compute } from './compute'

let index: ReturnType<typeof build> | null = null
const ready = () =>
  (index ??= build(ARTICLES, (done, total) => postMessage({ type: 'progress', done, total })))

/** Short follow-ups ("còn nó thì sao?") carry the previous question's topic. */
let lastTopic = ''

self.onmessage = (e: MessageEvent<{ type: 'warm' } | { type: 'ask'; id: number; q: string; context?: string }>) => {
  const m = e.data
  if (m.type === 'warm') {
    ready()
    postMessage({ type: 'ready', articles: ARTICLES.length })
    return
  }
  const ix = ready()
  let q = m.q
  const f = fold(q)
  if (lastTopic && f.split(/\s+/).length <= 6 && /\b(no|cai do|cai nay|con|vay|the thi|tiep)\b/.test(f)) q = `${q} ${lastTopic}`
  const calc = compute(m.q)
  const found = answer(ix, q, { context: m.context })
  lastTopic = found.sources[0]?.title ?? lastTopic
  const result: Answer = calc
    ? { ...found, kind: 'compute', lead: calc.lead, table: calc.table, tool: calc.tool, sentences: [], sources: found.sources.slice(0, 3) }
    : found
  postMessage({ type: 'answer', id: m.id, answer: result, articles: ARTICLES.length })
}
