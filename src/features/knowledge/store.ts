import { useSyncExternalStore } from 'react'
import Dexie, { type Table as DTable } from 'dexie'
import { onVaultOpen, seal, SEALED, unseal, vaultKey } from '../../lib/vault'
import { EMPTY, mergeData, migrate, readDump, SCHEMA_VERSION, TABLES, type KnowledgeData, type KnowledgeDump, type Table } from './model'

/**
 * The knowledge store: Lamar's sources, excerpts, claims, evidence and links, in their own IndexedDB database
 * (never the timetable's db.ts). Each record is one row, sealed with the vault when it is open, like the analysis
 * scores. The whole set is small, so it is read into memory once and the UI reads it synchronously.
 *
 * Schema: Dexie versions the tables, `v` on each record versions its shape (model.ts `migrate`). Before rows are
 * rewritten to a newer shape, the raw rows are copied to `meta` ("pre-v<from>"), so a bad migration can be undone.
 */
interface Row {
  id: string
  table: Table
  data: string
}

class KnowledgeDB extends Dexie {
  rows!: DTable<Row, string>
  meta!: DTable<{ key: string; value: unknown }, string>
  constructor() {
    super('musicology-knowledge')
    this.version(1).stores({ rows: 'id, table', meta: 'key' })
  }
}

let idb: KnowledgeDB | null = null
const db = () => (idb ??= new KnowledgeDB())
const rowId = (t: Table, id: string) => `${t}/${id}`

let state: KnowledgeData = EMPTY
let locked = false
let failed = false
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

async function decode(r: Row): Promise<unknown> {
  if (!r.data.startsWith(SEALED)) return JSON.parse(r.data)
  const k = vaultKey()
  if (!k) throw new Error('locked')
  return unseal(k, r.data)
}
async function encode(value: unknown) {
  const k = vaultKey()
  return k ? seal(k, value) : JSON.stringify(value)
}

async function load() {
  try {
    const rows = await db().rows.toArray()
    if (rows.some((r) => r.data.startsWith(SEALED)) && !vaultKey()) {
      locked = true
      state = EMPTY
      return emit()
    }
    const next: KnowledgeData = { sources: [], excerpts: [], claims: [], evidence: [], links: [] }
    const stale: Row[] = []
    let oldest = SCHEMA_VERSION
    for (const r of rows) {
      if (!TABLES.includes(r.table)) continue
      const raw = await decode(r)
      const m = migrate(r.table, raw)
      if (!m) continue
      ;(next[r.table] as unknown[]).push(m)
      const v = (raw as { v?: number }).v ?? 0
      if (v !== m.v) oldest = Math.min(oldest, v)
      // a row written before the vault was opened is sealed now
      if (v !== m.v || (vaultKey() && !r.data.startsWith(SEALED))) stale.push(r)
    }
    if (stale.length) {
      if (oldest < SCHEMA_VERSION) await db().meta.put({ key: `pre-v${oldest}-${Date.now()}`, value: stale })
      for (const r of stale) {
        const rec = (next[r.table] as { id: string }[]).find((x) => rowId(r.table, x.id) === r.id)
        if (rec) await db().rows.put({ id: r.id, table: r.table, data: await encode(rec) })
      }
    }
    locked = false
    state = next
  } catch (e) {
    // IndexedDB unavailable (old private mode): the store works in memory for this visit and says so
    if ((e as Error).message === 'locked') locked = true
    else failed = true
  }
  emit()
}

export const ready = load()
onVaultOpen(() => void load())

let writing: Promise<void> = Promise.resolve()
function persist(work: () => Promise<void>) {
  writing = writing.then(work).catch(() => {
    failed = true
    emit()
  })
  return writing
}

function guard() {
  if (locked) throw new Error('Kho đang khoá: mở khoá app để sửa nguồn và luận điểm.')
}

/** Adds or replaces one record. */
export function put<T extends Table>(table: T, rec: KnowledgeData[T][number]) {
  guard()
  const list = state[table] as KnowledgeData[T][number][]
  const i = list.findIndex((x) => x.id === rec.id)
  state = { ...state, [table]: i < 0 ? [...list, rec] : list.map((x, j) => (j === i ? rec : x)) }
  emit()
  return persist(async () => {
    await db().rows.put({ id: rowId(table, rec.id), table, data: await encode(rec) })
  })
}

export function remove(table: Table, id: string) {
  guard()
  state = { ...state, [table]: (state[table] as { id: string }[]).filter((x) => x.id !== id) }
  emit()
  return persist(async () => {
    await db().rows.delete(rowId(table, id))
  })
}

export const now = () => Date.now()
export const newId = (prefix: string) => `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`

export const useKnowledge = () =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    () => state,
  )
export const knowledgeState = () => state
export const knowledgeLocked = () => locked
export const knowledgeFailed = () => failed
export const subscribeKnowledge = (l: () => void) => (listeners.add(l), () => listeners.delete(l))

export async function exportKnowledge(): Promise<KnowledgeDump> {
  await ready
  await writing
  return { schema: SCHEMA_VERSION, ...state }
}

/**
 * Restores from a backup. Replace keeps a copy of the current rows in `meta` first; merge never removes anything.
 */
export async function importKnowledge(dump: unknown, mode: 'replace' | 'merge') {
  await ready
  guard()
  const incoming = readDump(dump)
  const next = mode === 'replace' ? incoming : mergeData(state, incoming)
  const before = await db().rows.toArray()
  if (mode === 'replace' && before.length) await db().meta.put({ key: `pre-import-${Date.now()}`, value: before })
  state = next
  emit()
  await persist(async () => {
    const rows: Row[] = []
    for (const t of TABLES) for (const r of next[t] as { id: string }[]) rows.push({ id: rowId(t, r.id), table: t, data: await encode(r) })
    await db().transaction('rw', db().rows, async () => {
      if (mode === 'replace') await db().rows.clear()
      await db().rows.bulkPut(rows)
    })
  })
}
