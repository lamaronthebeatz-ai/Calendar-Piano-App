import type { EntityId } from './ids'

/**
 * Records Lamar keeps in the Academic Source Manager. Nothing here is ever filled in by the app: a field the user
 * did not enter stays empty, and a record says how far it has been checked.
 */
export const SCHEMA_VERSION = 1

export const SOURCE_TYPES = {
  book: 'Sách',
  chapter: 'Chương sách',
  article: 'Bài báo khoa học',
  thesis: 'Luận văn – luận án',
  score: 'Bản nhạc – ấn bản',
  archive: 'Tư liệu lưu trữ',
  recording: 'Bản thu',
  web: 'Trang web',
} as const
export type SourceType = keyof typeof SOURCE_TYPES

export const VERIFICATION = {
  unverified: { label: 'Chưa kiểm', hint: 'Mới ghi lại, chưa đối chiếu' },
  record: { label: 'Đã đối chiếu thư mục', hint: 'Thông tin thư mục khớp một danh mục thư viện / nhà xuất bản (ghi nơi đối chiếu)' },
  original: { label: 'Đã đối chiếu bản gốc', hint: 'Đã cầm hoặc xem bản gốc / bản quét, trang trích là đúng' },
  disputed: { label: 'Có nghi vấn', hint: 'Thông tin mâu thuẫn giữa các nguồn' },
} as const
export type Verification = keyof typeof VERIFICATION

export interface MySource {
  id: string
  v: number
  type: SourceType
  authors: string[]
  title: string
  year?: string
  publisher?: string
  place?: string
  edition?: string
  /** journal / book the chapter or article is in */
  container?: string
  volume?: string
  /** page range of an article or chapter */
  pages?: string
  isbn?: string
  doi?: string
  url?: string
  /** archive: holding institution and shelf mark */
  archive?: string
  lang?: string
  role: 'primary' | 'secondary'
  verification: Verification
  /** where the metadata was checked (catalogue address, call number) — required to mark it checked */
  checkedWith?: string
  /** the same work in the library bibliography (s: id) */
  libRef?: string
  note?: string
  /** concepts, works, people, projects this source is for */
  about: EntityId[]
  created: number
  updated: number
}

/** A page of a source, noted: a short quotation (fair use) or a summary in one's own words. */
export interface Excerpt {
  id: string
  v: number
  source: EntityId
  page: string
  quote?: string
  note?: string
  created: number
}

export interface Claim {
  id: string
  v: number
  text: string
  project?: string
  /** entities the claim is about */
  about: EntityId[]
  /** a claim is an opinion until evidence and checks back it; `settled` is the author's own judgement */
  status: 'open' | 'settled' | 'contested'
  created: number
  updated: number
}

export const STANCE = { supports: 'Ủng hộ', contradicts: 'Phản bác', context: 'Bối cảnh' } as const
export type Stance = keyof typeof STANCE

export interface Evidence {
  id: string
  v: number
  claim: string
  stance: Stance
  /** s:<library source> or ms:<own source> */
  source: EntityId
  page?: string
  quote?: string
  note?: string
  /** the page and quotation were checked against the source itself */
  checked: boolean
  created: number
}

export interface KLink {
  id: string
  v: number
  from: EntityId
  to: EntityId
  note?: string
  created: number
}

export interface KnowledgeData {
  sources: MySource[]
  excerpts: Excerpt[]
  claims: Claim[]
  evidence: Evidence[]
  links: KLink[]
}
export type Table = keyof KnowledgeData
export const TABLES: Table[] = ['sources', 'excerpts', 'claims', 'evidence', 'links']
export const EMPTY: KnowledgeData = { sources: [], excerpts: [], claims: [], evidence: [], links: [] }

/** What goes in the backup file. */
export interface KnowledgeDump extends KnowledgeData {
  schema: number
}

const str = (x: unknown): x is string => typeof x === 'string'
const ids = (x: unknown) => (Array.isArray(x) ? x.filter(str) : []) as EntityId[]

/**
 * Brings a stored record up to the current schema, or null if it is not one. Every future change of shape adds a
 * step here (v1 → v2 …); records are never dropped for having an old shape.
 */
export function migrate(table: Table, raw: unknown): KnowledgeData[Table][number] | null {
  if (!raw || typeof raw !== 'object' || !str((raw as { id?: unknown }).id)) return null
  const r = { ...(raw as Record<string, unknown>) }
  const v = typeof r.v === 'number' ? r.v : 0
  if (v > SCHEMA_VERSION) return r as never // written by a newer build: keep it as it is
  // v0 → v1: records from before the schema field
  if (v < 1) r.v = 1
  switch (table) {
    case 'sources':
      if (!str(r.title)) return null
      r.authors = Array.isArray(r.authors) ? r.authors.filter(str) : []
      r.about = ids(r.about)
      r.type = str(r.type) && r.type in SOURCE_TYPES ? r.type : 'book'
      r.role = r.role === 'primary' ? 'primary' : 'secondary'
      r.verification = str(r.verification) && r.verification in VERIFICATION ? r.verification : 'unverified'
      break
    case 'excerpts':
      if (!str(r.source) || !str(r.page)) return null
      break
    case 'claims':
      if (!str(r.text)) return null
      r.about = ids(r.about)
      r.status = r.status === 'settled' || r.status === 'contested' ? r.status : 'open'
      break
    case 'evidence':
      if (!str(r.claim) || !str(r.source)) return null
      r.stance = str(r.stance) && r.stance in STANCE ? r.stance : 'supports'
      r.checked = r.checked === true
      break
    case 'links':
      if (!str(r.from) || !str(r.to)) return null
  }
  return r as never
}

/** Reads a dump (backup file, older build) table by table; anything unreadable is left out, never guessed. */
export function readDump(d: unknown): KnowledgeData {
  const out: KnowledgeData = { sources: [], excerpts: [], claims: [], evidence: [], links: [] }
  if (!d || typeof d !== 'object') return out
  for (const t of TABLES) {
    const rows = (d as Record<string, unknown>)[t]
    if (Array.isArray(rows)) for (const r of rows) {
      const m = migrate(t, r)
      if (m) (out[t] as unknown[]).push(m)
    }
  }
  return out
}

/** Merge keeps what is on this device and adds what is new; a record present in both keeps the later edit. */
export function mergeData(here: KnowledgeData, incoming: KnowledgeData): KnowledgeData {
  const out = { ...here }
  for (const t of TABLES) {
    const byId = new Map<string, KnowledgeData[Table][number]>((here[t] as KnowledgeData[Table][number][]).map((r) => [r.id, r]))
    for (const r of incoming[t] as KnowledgeData[Table][number][]) {
      const had = byId.get(r.id)
      const stamp = (x: object) => ('updated' in x ? (x.updated as number) : (x as { created: number }).created)
      if (!had || stamp(r) > stamp(had)) byId.set(r.id, r)
    }
    ;(out as Record<Table, unknown>)[t] = [...byId.values()]
  }
  return out
}

/** ISBN-10 / ISBN-13 check digit — catches a mistyped number; it does not say the book exists. */
export function isbnOk(isbn: string): boolean {
  const d = isbn.replace(/[\s-]/g, '').toUpperCase()
  if (/^\d{9}[\dX]$/.test(d)) {
    const sum = [...d].reduce((s, c, i) => s + (c === 'X' ? 10 : Number(c)) * (10 - i), 0)
    return sum % 11 === 0
  }
  if (/^\d{13}$/.test(d)) {
    const sum = [...d].reduce((s, c, i) => s + Number(c) * (i % 2 ? 3 : 1), 0)
    return sum % 10 === 0
  }
  return false
}

/** DOI syntax (10.<registrant>/<suffix>), with or without the doi.org address. */
export const doiOf = (doi: string) => /^(?:https?:\/\/(?:dx\.)?doi\.org\/|doi:\s*)?(10\.\d{4,9}\/\S+)$/i.exec(doi.trim())?.[1] ?? null
