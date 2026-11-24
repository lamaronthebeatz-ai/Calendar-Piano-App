import { useSyncExternalStore } from 'react'
import { secureStore } from '../lib/secureStore'
import type { GapReport, KnowledgeGap, UpdateProposal } from './schema'

/**
 * The feedback loop UMRE → UMK: knowledge gaps noticed while reasoning (missing premise, too little data, a rule
 * whose source is unverified, an open question the rulebook records) and proposed updates. Neither ever changes the
 * library, the glossary or a rulebook: those are edited by a person (the compiler, in the content files) and shipped
 * with the app. Here they are a worklist with a status. Stored on this device, sealed like the rest of the research
 * data (secureStore). `v` is the store's schema version; a future shape adds a step in `accept`.
 */
type Feedback = { v: 1; gaps: GapReport[]; proposals: UpdateProposal[] }
const MAX = 400
const EMPTY: Feedback = { v: 1, gaps: [], proposals: [] }
const GAP_STATUS = new Set(['open', 'acknowledged', 'resolved', 'dismissed'])
const PROP_STATUS = new Set(['proposed', 'accepted', 'rejected'])

const store = secureStore<Feedback>('umk:feedback', EMPTY, (v) => {
  const x = v as Partial<Feedback> | null
  if (!x || x.v !== 1 || !Array.isArray(x.gaps) || !Array.isArray(x.proposals)) return null
  return {
    v: 1,
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
