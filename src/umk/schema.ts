import type { EntityId } from '../features/knowledge/ids'

/**
 * UMK — Unified Music Knowledge: the data contract. UMK does not copy the library, the glossary, the bibliography or
 * the rulebooks into a store of its own — each already has ONE home that the app maintains (content modules,
 * terms.json, curated.ts / the built bibliography, the rulebook modules). UMK reads them where they live, gives every
 * unit one id in the platform's id space (features/knowledge/ids.ts), one provenance vocabulary and one taxonomy, and
 * is the only way UMRE gets knowledge. Changing this contract = bump UMK_SCHEMA_VERSION (major when it breaks callers).
 */
export const UMK_SCHEMA_VERSION = '1.1.0'

/* ------------------------------------------------------------------ provenance */

/** What kind of authority a unit rests on. `machine`: computed by the app (never presented as a fact). */
/** `editorial`: the compiler's reading of a source; `unsourced-claim` (1.1.0): a claim with no text behind it yet — a
 *  teacher's exercise convention, for instance (its source record says which) */
export type ProvenanceKind = 'primary' | 'secondary' | 'reference' | 'educational' | 'editorial' | 'unsourced-claim' | 'machine' | 'external-data' | 'user'
export type VerificationState = 'verified' | 'partial' | 'unverified' | 'disputed'
/** One unit's provenance, normalised — `original` keeps the value in the vocabulary of the system that recorded it. */
export type Provenance = {
  readonly kind: ProvenanceKind
  readonly verification: VerificationState
  /** source ids in the platform id space (s:…, ms:…) when the unit cites sources */
  readonly sources: readonly EntityId[]
  /** the place in the source, as recorded ("tr. 9–10"); never invented */
  readonly locator?: string
  /** who checked the locator against the text (1.1.0): an assistant reading a scan is not a specialist's confirmation */
  readonly checkedBy?: 'assistant' | 'compiler' | 'teacher'
  readonly original: { readonly system: 'library' | 'glossary' | 'bibliography' | 'umre-evidence' | 'knowledge-graph' | 'my-sources' | 'umk'; readonly value: string }
  readonly note?: string
}

/* ------------------------------------------------------------------ units */

export type UnitKind = 'concept' | 'person' | 'period' | 'genre' | 'form' | 'school' | 'instrument' | 'analysis' | 'method' | 'glossary' | 'rulebook' | 'rule' | 'domain' | 'source'

/** A unit of knowledge as UMK serves it: what it is, where it sits, where it comes from. No body text — that is
 *  fetched from its home (`href`) when read. */
export type KnowledgeUnit = {
  readonly id: EntityId
  readonly kind: UnitKind
  readonly title: string
  readonly summary?: string
  /** taxonomy nodes (d:…), several when the map places the unit in several branches */
  readonly domains: readonly EntityId[]
  readonly provenance: Provenance
  readonly href: string | null
}

/** A node of the taxonomy. `basis`: the article that sets out the field (its body carries the sources). */
export type DomainNode = {
  readonly id: EntityId
  readonly title: string
  readonly en: string
  readonly parent: EntityId | null
  readonly level: 'field' | 'part' | 'branch' | 'reasoning'
  readonly basis: EntityId | null
  readonly summary: string
  /** units placed here (articles); a unit may sit in several nodes */
  readonly members: readonly EntityId[]
}

/* ------------------------------------------------------------------ terminology */

/** How one written form relates to a term — kept apart, never collapsed into "synonym". */
/** `wikidata-label`: the Vietnamese label of the Wikidata item the article was matched to (1.1.0) — external data,
 *  possibly naming a broader concept, never a compiler-recorded synonym */
export type TermFormRelation = 'preferred' | 'glossary-variant' | 'wikidata-label' | 'article-alias' | 'foreign'
export type TermForm = { readonly text: string; readonly lang: string; readonly relation: TermFormRelation }
export type Term = {
  readonly id: EntityId
  readonly preferred: string
  readonly forms: readonly TermForm[]
  readonly definition?: string
  /** the library article on the concept, when the glossary id or name resolves to one */
  readonly article: EntityId | null
  readonly domains: readonly EntityId[]
  readonly wikidata?: string
  readonly provenance: Provenance
}

/* ------------------------------------------------------------------ rulebooks */

export type RuleStanding = 'hard' | 'recommendation' | 'permitted' | 'exception' | 'ambiguous' | 'definition'
export type RuleEntry = {
  readonly id: EntityId
  readonly rulebook: EntityId
  readonly local: string
  readonly standing: RuleStanding
  readonly name: string
  readonly statement: string
  readonly scope: string
  readonly caveat?: string
  /** rules this entry lifts (exception), belongs to (permitted) or affects (ambiguous) */
  readonly relates: readonly EntityId[]
  /** library articles that state it */
  readonly articles: readonly EntityId[]
  readonly provenance: Provenance
  /** how the engine evaluates it (rule-language definitions, checker ids) — empty for definitions read as data */
  readonly evaluatedBy: readonly string[]
}
export type RulebookRecord = {
  readonly id: EntityId
  readonly ref: { readonly id: string; readonly version: string }
  readonly title: string
  /** the reasoning domain (UMRE): 'counterpoint', 'harmony' */
  readonly domain: string
  /** the theoretical tradition whose premises the rules belong to — rulebooks of different traditions never merge */
  readonly tradition: string
  readonly domains: readonly EntityId[]
  readonly entries: readonly RuleEntry[]
  readonly sources: readonly { readonly id: string; readonly title: string; readonly authors: readonly string[]; readonly year?: string; readonly type: string; readonly verification: string; readonly origin: string }[]
  /** test files that check this rulebook (auditing, independent checkers, academic verification table) */
  readonly tests: readonly string[]
}

/* relations: UMK's edges are knowledge-graph edges (features/knowledge/relations.ts) — one relation system, see edges.ts */

/* ------------------------------------------------------------------ reasoning contract */

/** What a module asks UMK to prepare before UMRE runs. */
export type ReasoningTask =
  | { readonly kind: 'counterpoint'; readonly exercise?: string }
  | { readonly kind: 'harmony-analysis'; readonly globalKey: { readonly step: number; readonly alter: number; readonly minor: boolean } | null; readonly lens?: 'classical' | 'jazz' | 'xx' }
  | { readonly kind: 'harmonize' }
  | { readonly kind: 'musicology-question'; readonly question: string }

/** The knowledge a reasoning request runs on: assembled by UMK, passed to UMRE, recorded with the result. */
export type ReasoningContext = {
  readonly schema: string
  readonly id: string
  readonly task: ReasoningTask['kind']
  /** reasoning domain → which UMRE solvers / modules apply; null when the question cannot be formalised */
  readonly domain: 'counterpoint' | 'harmony' | 'analysis' | null
  readonly tradition: string | null
  readonly rulebooks: readonly { readonly id: string; readonly version: string }[]
  readonly rules: readonly EntityId[]
  readonly concepts: readonly EntityId[]
  readonly sources: readonly EntityId[]
  /** what the user states and the engine takes as given (the global key) */
  readonly premises: Readonly<Record<string, unknown>>
  /** missing or weak knowledge noticed while assembling (never filled in by guessing) */
  readonly gaps: readonly KnowledgeGap[]
}

/** How far a result is established — a UMRE answer is not a proof unless an independent check says so. */
export type Epistemic = 'validated' | 'interpretation' | 'unresolved' | 'not-formalised' | 'error'

export type ReasoningRecord = {
  readonly schema: string
  readonly contextId: string
  readonly task: ReasoningTask['kind']
  readonly at: number
  readonly knowledge: { readonly concepts: readonly EntityId[]; readonly rules: readonly EntityId[]; readonly sources: readonly EntityId[] }
  readonly rulebooks: readonly { readonly id: string; readonly version: string }[]
  readonly umre: { readonly engine: string; readonly api: string; readonly fingerprint: string; readonly solver: string | null; readonly validator: string | null } | null
  readonly status: string
  readonly epistemic: Epistemic
  readonly summary: string
  readonly gaps: readonly KnowledgeGap[]
}

/* ------------------------------------------------------------------ feedback */

export type GapKind = 'missing-definition' | 'missing-rule' | 'missing-exception' | 'missing-source' | 'unverified-source' | 'conflict' | 'insufficient-data' | 'ambiguous-term' | 'open-question' | 'missing-premise'
export type KnowledgeGap = {
  readonly id: string
  readonly kind: GapKind
  /** the unit concerned, when there is one */
  readonly about: EntityId | null
  readonly text: string
  /** who noticed: the library's own ::verify markers, UMK checks, UMRE results, a person */
  readonly origin: 'library' | 'umk' | 'umre' | 'user'
}
export type GapReport = KnowledgeGap & { readonly at: number; readonly status: 'open' | 'acknowledged' | 'resolved' | 'dismissed'; readonly contextId?: string }
/** A proposed change. UMK never applies one: content changes go through the library's editing (a person, a commit). */
export type UpdateProposal = {
  readonly id: string
  readonly at: number
  readonly target: EntityId | null
  readonly change: string
  readonly basis: string
  readonly origin: 'umre' | 'user'
  readonly status: 'proposed' | 'accepted' | 'rejected'
  readonly decidedAt?: number
  readonly decisionNote?: string
}

/* ------------------------------------------------------------------ validation */

const ID = /^(a|w|s|ms|p|n|c|e|t|m|x|d|rb|r):.+/
const isId = (x: unknown): x is EntityId => typeof x === 'string' && ID.test(x)
const PROV_KINDS = new Set<ProvenanceKind>(['primary', 'secondary', 'reference', 'educational', 'editorial', 'unsourced-claim', 'machine', 'external-data', 'user'])
const VERIF = new Set<VerificationState>(['verified', 'partial', 'unverified', 'disputed'])

export function checkProvenance(p: Provenance, where: string): string[] {
  const out: string[] = []
  if (!PROV_KINDS.has(p.kind)) out.push(`${where}: loại nguồn gốc lạ "${p.kind}"`)
  if (!VERIF.has(p.verification)) out.push(`${where}: trạng thái kiểm chứng lạ "${p.verification}"`)
  if (!p.original?.system || p.original.value === undefined) out.push(`${where}: thiếu giá trị gốc của nguồn gốc`)
  for (const s of p.sources) if (!isId(s)) out.push(`${where}: mã nguồn sai "${s}"`)
  // a machine result is never verified knowledge
  if (p.kind === 'machine' && p.verification === 'verified') out.push(`${where}: kết quả máy tính không được ghi là đã kiểm chứng`)
  // a reading or an unwritten convention is never 'verified', whoever reads it
  if ((p.kind === 'editorial' || p.kind === 'unsourced-claim') && p.verification === 'verified') out.push(`${where}: cách hiểu / quy ước chưa có văn bản không được ghi là đã kiểm chứng`)
  if (p.verification === 'verified' && !p.checkedBy && p.original.system === 'umre-evidence') out.push(`${where}: đã đối chiếu thì phải ghi ai đối chiếu`)
  return out
}
export function checkUnit(u: KnowledgeUnit): string[] {
  const out = isId(u.id) ? [] : [`mã sai "${u.id}"`]
  if (!u.title) out.push(`${u.id}: thiếu tên`)
  for (const d of u.domains) if (!d.startsWith('d:')) out.push(`${u.id}: lĩnh vực sai "${d}"`)
  return [...out, ...checkProvenance(u.provenance, u.id)]
}
export function checkContext(c: ReasoningContext): string[] {
  const out: string[] = []
  if (c.schema !== UMK_SCHEMA_VERSION) out.push(`ngữ cảnh lược đồ ${c.schema}, cần ${UMK_SCHEMA_VERSION}`)
  for (const x of [...c.rules, ...c.concepts, ...c.sources]) if (!isId(x)) out.push(`mã sai "${x}"`)
  if (c.domain && !c.rulebooks.length && c.domain !== 'analysis') out.push(`lĩnh vực ${c.domain} cần sổ luật`)
  return out
}
export function checkRecord(r: ReasoningRecord): string[] {
  const out: string[] = []
  if (r.schema !== UMK_SCHEMA_VERSION) out.push(`bản ghi lược đồ ${r.schema}`)
  // "validated" only when an independent checker ran
  if (r.epistemic === 'validated' && !r.umre?.validator) out.push('kết quả ghi "đã kiểm" mà không có bộ kiểm độc lập')
  return out
}
