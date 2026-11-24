import { useSyncExternalStore } from 'react'
import { secureStore } from '../lib/secureStore'
import type { GapReport, KnowledgeGap, UpdateProposal } from './schema'

/**
 * The feedback loop UMRE → UMK: knowledge gaps noticed while reasoning (missing premise, too little data, a rule
 * whose source is unverified, an open question the rulebook records) and proposed updates. Neither ever changes the
 * library, the glossary or a rulebook: those are edited by a person (the compiler, in the content files) and shipped
 * with the app. Here they are a worklist with a status. Stored on this device, sealed like the rest of the research
 * data (secureStore). `v` is the store's schema version; a future shape adds a step in `accept`.
 *
 * Decisions (v2): an editorial decision on a reviewed issue (reviews.ts): recorded, never applied — the content file is changed by a
 * person afterwards, in a commit. `decidedBy` only when the person typed it (never filled in); `before` / `after`
 * describe the state as the decision sees it. Undoing keeps the record and stamps `undoneAt` (the history stays).
 */
export type Decision = {
  readonly id: string
  readonly issue: string
  readonly outcome: string
  readonly reason: string
  readonly source: string
  readonly decidedBy?: string
  readonly at: number
  readonly before: string
  readonly after: string
  readonly undoneAt?: number
}
type Feedback = { v: 2; gaps: GapReport[]; proposals: UpdateProposal[]; decisions: Decision[] }
const MAX = 400
const EMPTY: Feedback = { v: 2, gaps: [], proposals: [], decisions: [] }
const GAP_STATUS = new Set(['open', 'acknowledged', 'resolved', 'dismissed'])
const PROP_STATUS = new Set(['proposed', 'accepted', 'rejected'])

const store = secureStore<Feedback>('umk:feedback', EMPTY, (v) => {
  // v1 (UMK 1.0.0) had no decisions: read as v2 with an empty list, nothing else changes
  const x = v as (Omit<Partial<Feedback>, 'v'> & { v?: number }) | null
  if (!x || (x.v !== 1 && x.v !== 2) || !Array.isArray(x.gaps) || !Array.isArray(x.proposals)) return null
  return {
    v: 2,
    decisions: (Array.isArray(x.decisions) ? x.decisions : []).filter((d) => d && typeof d.id === 'string' && typeof d.issue === 'string' && typeof d.outcome === 'string' && typeof d.reason === 'string' && typeof d.at === 'number'),
    gaps: x.gaps.filter((g) => g && typeof g.id === 'string' && typeof g.text === 'string' && GAP_STATUS.has(g.status) && typeof g.at === 'number'),
    proposals: x.proposals.filter((p) => p && typeof p.id === 'string' && typeof p.change === 'string' && PROP_STATUS.has(p.status) && typeof p.at === 'number'),
  }
})

export const feedback = () => store.get()
export const useFeedback = () => useSyncExternalStore((l) => store.subscribe(l), () => store.get())

/** Report gaps (UMRE results, UMK checks, a person). The same gap again refreshes its time, never its decision. */
export function reportKnowledgeGap(gaps: readonly KnowledgeGap[], contextId?: string) {
  if (!gaps.length) return
  const cur = store.get()
  const byId = new Map(cur.gaps.map((g) => [g.id, g]))
  const at = Date.now()
  for (const g of gaps) {
    const old = byId.get(g.id)
    byId.set(g.id, old ? { ...old, at } : { ...g, at, status: 'open', ...(contextId ? { contextId } : {}) })
  }
  // keep the newest; resolved and dismissed go first when the list is full
  const all = [...byId.values()].sort((a, b) => Number(a.status === 'open' || a.status === 'acknowledged') - Number(b.status === 'open' || b.status === 'acknowledged') || a.at - b.at)
  store.set({ ...cur, gaps: all.slice(Math.max(0, all.length - MAX)) })
}
export function setGapStatus(id: string, status: GapReport['status']) {
  const cur = store.get()
  store.set({ ...cur, gaps: cur.gaps.map((g) => (g.id === id ? { ...g, status } : g)) })
}

/** A proposed change to the knowledge. Recorded with its basis; deciding on it records the decision only. */
export function proposeKnowledgeUpdate(p: Pick<UpdateProposal, 'target' | 'change' | 'basis' | 'origin'>): UpdateProposal {
  if (!p.change.trim() || !p.basis.trim()) throw new Error('đề xuất phải nói đổi gì và dựa vào đâu')
  const x: UpdateProposal = { ...p, id: `up-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, at: Date.now(), status: 'proposed' }
  const cur = store.get()
  store.set({ ...cur, proposals: [...cur.proposals, x].slice(-MAX) })
  return x
}
export function decideProposal(id: string, status: 'accepted' | 'rejected', note?: string) {
  const cur = store.get()
  store.set({ ...cur, proposals: cur.proposals.map((p) => (p.id === id ? { ...p, status, decidedAt: Date.now(), ...(note ? { decisionNote: note } : {}) } : p)) })
}

/** Record a decision on an issue. Outcome and reason are required; the source may be "" only if the reason says why. */
export function recordDecision(d: Pick<Decision, 'issue' | 'outcome' | 'reason' | 'source' | 'before' | 'after'> & { decidedBy?: string }): Decision {
  if (!d.outcome.trim() || !d.reason.trim()) throw new Error('quyết định phải có phương án và lý do')
  const { decidedBy, ...rest } = d
  const by = decidedBy?.trim()
  const x: Decision = { ...rest, ...(by ? { decidedBy: by } : {}), id: `dc-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`, at: Date.now() }
  const cur = store.get()
  store.set({ ...cur, decisions: [...cur.decisions, x] })
  return x
}
/** Undo a decision: kept in the history with the time it was undone. */
export function undoDecision(id: string) {
  const cur = store.get()
  store.set({ ...cur, decisions: cur.decisions.map((d) => (d.id === id && !d.undoneAt ? { ...d, undoneAt: Date.now() } : d)) })
}
/** The decision in force for an issue: the latest not undone. */
export const decisionOf = (f: { decisions: readonly Decision[] }, issue: string) => [...f.decisions].reverse().find((d) => d.issue === issue && !d.undoneAt)
