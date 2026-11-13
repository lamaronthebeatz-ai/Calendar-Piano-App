import { useSyncExternalStore } from 'react'
import Dexie, { type Table } from 'dexie'
import { secureStore } from '../../lib/secureStore'
import { onVaultOpen, seal, SEALED, unseal, vaultKey } from '../../lib/vault'
import type { Score } from '../compose/model'

/**
 * Scores Lamar brought in to analyse (imports, copies from the editor), on this device and encrypted with the vault.
 * The list (title, composer, …) stays in a small secureStore; each score's body lives in IndexedDB, because a single
 * piano piece is 100 KB+ and localStorage (~5 MB, shared with the whole app) would fill after a few dozen.
 */
export type Lens = 'classical' | 'jazz' | 'xx'
export type Saved = {
  id: string
  title: string
  from: 'import' | 'compose'
  created: number
  lens?: Lens
  composer?: string
  measures?: number
  /** only on entries from before the move to IndexedDB, and inside backup files */
  score?: Score
}

const valid = (x: unknown): x is Saved => !!x && typeof (x as Saved).id === 'string' && typeof (x as Saved).title === 'string'
const store = secureStore<Saved[]>('analyze:scores', [], (v) => (Array.isArray(v) ? v.filter(valid) : null))
let state = store.get()
const listeners = new Set<() => void>()

class Bodies extends Dexie {
  bodies!: Table<{ id: string; data: string }, string>
  constructor() {
    super('analyze-scores')
    this.version(1).stores({ bodies: 'id' })
  }
}
let idb: Bodies | null = null
const bodies = () => (idb ??= new Bodies()).bodies
const cache = new Map<string, Score>()

async function putBody(id: string, score: Score) {
  cache.set(id, score)
  const k = vaultKey()
  await bodies().put({ id, data: k ? await seal(k, score) : JSON.stringify(score) })
}

/** The body of a saved score, or null if it is gone. Throws while the vault that sealed it is closed. */
export async function scoreOf(id: string): Promise<Score | null> {
  const hit = cache.get(id) ?? state.find((x) => x.id === id)?.score
  if (hit) return hit
  const row = await bodies().get(id)
  if (!row) return null
  let v: unknown
  if (row.data.startsWith(SEALED)) {
    const k = vaultKey()
    if (!k) throw new Error('Kho đang khoá: mở khoá app để xem bản này.')
    v = await unseal(k, row.data)
  } else v = JSON.parse(row.data)
  cache.set(id, v as Score)
  return v as Score
}

const strip = ({ score, ...meta }: Saved): Saved => ({ ...meta, measures: meta.measures ?? score?.measures })

// entries that still carry their score (older devices, a restored backup) move it to IndexedDB, then drop it
let lifting = false
async function liftInline() {
  if (lifting || store.locked() || !state.some((x) => x.score)) return
  lifting = true
  try {
    for (const x of state) if (x.score) await putBody(x.id, x.score)
    store.set(state.map((x) => (x.score ? strip(x) : x)))
  } catch {
    // IndexedDB unavailable (private mode on old Safari): the scores stay inline, which still works
  } finally {
    lifting = false
  }
}

store.subscribe(() => {
  state = store.get()
  listeners.forEach((l) => l())
  void liftInline()
})
void liftInline()
// bodies written before the vault was open are sealed once it is
onVaultOpen(async () => {
  const k = vaultKey()
  if (!k) return
  try {
    for (const row of await bodies().toArray()) if (!row.data.startsWith(SEALED)) await bodies().put({ id: row.id, data: await seal(k, JSON.parse(row.data)) })
  } catch {
    // leave them plain; they are read either way
  }
})

export const useSaved = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state,
  )
export const savedLocked = () => store.locked()

/** Every saved score with its body, for the backup file. */
export const allSavedFull = async (): Promise<Saved[]> =>
  Promise.all(state.map(async (x) => ({ ...x, score: (await scoreOf(x.id)) ?? undefined })))

export function addSaved(score: Score, from: Saved['from'], composer?: string): Saved {
  const x: Saved = { id: `ps-${Date.now().toString(36)}`, title: score.title || 'Bản nhạc', from, created: Date.now(), composer, measures: score.measures }
  cache.set(x.id, score)
  // the list entry is written only once the body is safe, so the list never points at nothing
  void putBody(x.id, score).then(
    () => store.set(state),
    () => store.set(state.map((y) => (y.id === x.id ? { ...y, score } : y))),
  )
  state = [x, ...state]
  listeners.forEach((l) => l())
  return x
}
export const updateSaved = (id: string, patch: Partial<Saved>) => store.set(state.map((x) => (x.id === id ? { ...x, ...patch } : x)))
export function removeSaved(id: string) {
  cache.delete(id)
  store.set(state.filter((x) => x.id !== id))
  void bodies().delete(id).catch(() => {})
}
export function importSaved(data: unknown, mode: 'replace' | 'merge') {
  if (!Array.isArray(data)) return
  const incoming = data.filter(valid)
  if (mode === 'replace') {
    cache.clear()
    void bodies().clear().catch(() => {})
  }
  // bodies arrive inline; liftInline moves them to IndexedDB on the next change
  store.set(mode === 'replace' ? incoming : [...state, ...incoming.filter((x) => !state.some((y) => y.id === x.id))])
}
