import { useSyncExternalStore } from 'react'
import { secureStore } from '../../lib/secureStore'

/**
 * The global key of a work, as the ANALYST states it — never guessed, never taken from the key signature, never copied
 * from another work. Each change is a new version: the history keeps every earlier choice with its time, so an older
 * analysis can be told apart from the current one (`version` = number of choices). Stored per work id (sample id,
 * imported `ps-…`, composed `c-…`), sealed like the rest of the analyses on this device.
 */
export type GlobalKey = { step: number; alter: number; minor: boolean }
export type KeyChoice = { key: GlobalKey; at: number; note?: string }
type Store = Record<string, KeyChoice[]>

const valid = (k: unknown): k is GlobalKey => {
  const x = k as GlobalKey
  return !!x && Number.isInteger(x.step) && x.step >= 0 && x.step <= 6 && Number.isInteger(x.alter) && Math.abs(x.alter) <= 1 && typeof x.minor === 'boolean'
}
const store = secureStore<Store>('analyze:global-keys', {}, (v) => {
  if (!v || typeof v !== 'object') return null
  const out: Store = {}
  for (const [id, hs] of Object.entries(v as Store)) if (Array.isArray(hs)) out[id] = hs.filter((h) => valid(h?.key) && typeof h.at === 'number')
  return out
})

export const keyHistory = (workId: string): readonly KeyChoice[] => store.get()[workId] ?? []
export const currentKey = (workId: string): KeyChoice | null => keyHistory(workId).at(-1) ?? null

/** A new choice for this work only; the earlier ones stay in its history. Same key again: nothing changes. */
export function chooseKey(workId: string, key: GlobalKey) {
  const cur = currentKey(workId)
  if (cur && cur.key.step === key.step && cur.key.alter === key.alter && cur.key.minor === key.minor) return
  const all = store.get()
  store.set({ ...all, [workId]: [...(all[workId] ?? []), { key, at: Date.now() }] })
}

export function useGlobalKey(workId: string) {
  return useSyncExternalStore(
    (l) => store.subscribe(l),
    () => store.get()[workId],
  )
}

const LETTERS = 'CDEFGAB'
const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
const ACC = (a: number) => (a > 0 ? '♯' : a < 0 ? '♭' : '')
/** "Rê♭ trưởng (D♭ major)" */
export const keyLabel = (k: GlobalKey) => `${SOLFA[k.step]}${ACC(k.alter)} ${k.minor ? 'thứ' : 'trưởng'} (${LETTERS[k.step]}${ACC(k.alter)} ${k.minor ? 'minor' : 'major'})`

/** The 17 spellings of the 12 tonics a key is written in (C♭, F♭… left out: their keys are written enharmonically). */
export const TONICS: { step: number; alter: number }[] = [
  [0, 0], [0, 1], [1, -1], [1, 0], [1, 1], [2, -1], [2, 0], [3, 0], [3, 1], [4, -1], [4, 0], [4, 1], [5, -1], [5, 0], [5, 1], [6, -1], [6, 0],
].map(([step, alter]) => ({ step, alter }))
