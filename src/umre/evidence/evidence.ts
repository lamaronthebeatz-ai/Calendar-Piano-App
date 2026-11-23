import { CURATED, type CuratedSource } from '../../features/sources/curated'

/**
 * Evidence: where a rule (or any claim the engine makes) comes from. Bibliographic data is never typed here — book
 * records come from the library's bibliography (features/sources/curated.ts), so a citation cannot invent an author,
 * year or publisher. The only things this module adds are the TYPE of a source, how far it has been checked, and
 * records for claims that have no published source (an internal reading, a teacher's exercise convention).
 */

/** Primary: the work itself is the authority. Secondary: a textbook or study presenting a system. Tertiary: a
 *  reference work. Internal interpretation: the compiler's reading of a source. Unverified claim: no text checked. */
export type SourceType = 'primary' | 'secondary' | 'tertiary' | 'internal-interpretation' | 'unverified-claim'
/** verified: the locator was checked against the text; partially-verified: the text was checked but the rule reads
 *  more into it (a threshold, a page not pinned); unverified: nobody has checked it. */
export type Verification = 'verified' | 'partially-verified' | 'unverified'

export type SourceRecord = {
  readonly id: string
  readonly type: SourceType
  readonly verification: Verification
  readonly authors: readonly string[]
  readonly title: string
  readonly year?: string
  readonly edition?: string
  readonly publisher?: string
  readonly place?: string
  /** 'curated' = taken from the library's bibliography; 'umre' = a record for a claim with no publication */
  readonly origin: 'curated' | 'umre'
  readonly note?: string
}

export type Citation = {
  readonly id: string
  readonly sourceId: string
  /** "tr. 9–10", "Thí dụ 25–28"; null when the place in the source is not pinned */
  readonly locator: string | null
  readonly verification: Verification
  /** what the source is cited FOR (the scope of the support) */
  readonly scope: string
  readonly note?: string
  /** who checked the locator against the text: the assistant (machine-assisted, from a scan), the compiler, or a
   *  teacher / specialist. Required for anything above 'unverified'. */
  readonly checkedBy?: 'assistant' | 'compiler' | 'teacher'
}

export class EvidenceError extends Error {}

const ORDER: Record<Verification, number> = { unverified: 0, 'partially-verified': 1, verified: 2 }

/** A source record from the library's bibliography, with the type and checking state UMRE assigns. */
export function fromCurated(id: string, type: SourceType, verification: Verification, note?: string): SourceRecord {
  const c: CuratedSource | undefined = CURATED.find((x) => x.id === id)
  if (!c) throw new EvidenceError(`nguồn "${id}" không có trong thư mục (curated.ts)`)
  return {
    id, type, verification, origin: 'curated',
    authors: c.authors, title: c.title, year: c.year || undefined, edition: c.edition, publisher: c.publisher, place: c.place,
    ...(note ? { note } : {}),
  }
}

export class EvidenceRegistry {
  private sources = new Map<string, SourceRecord>()
  private citations = new Map<string, Citation>()

  addSource(s: SourceRecord) {
    if (this.sources.has(s.id)) throw new EvidenceError(`nguồn trùng: ${s.id}`)
    if (s.origin === 'umre' && (s.type === 'primary' || s.type === 'secondary' || s.type === 'tertiary'))
      throw new EvidenceError(`${s.id}: nguồn xuất bản phải lấy từ thư mục, không gõ tay`)
    this.sources.set(s.id, s)
  }
  addCitation(c: Citation) {
    if (this.citations.has(c.id)) throw new EvidenceError(`trích dẫn trùng: ${c.id}`)
    const s = this.sources.get(c.sourceId)
    if (!s) throw new EvidenceError(`${c.id}: nguồn "${c.sourceId}" chưa đăng ký`)
    // a citation can never be more checked than its source
    if (ORDER[c.verification] > ORDER[s.verification]) throw new EvidenceError(`${c.id}: trích dẫn không thể "${c.verification}" khi nguồn chỉ "${s.verification}"`)
    if (c.verification === 'verified' && !c.locator) throw new EvidenceError(`${c.id}: đã xác minh thì phải có vị trí (trang, thí dụ)`)
    if (c.verification !== 'unverified' && !c.checkedBy) throw new EvidenceError(`${c.id}: phải ghi ai đã đối chiếu (checkedBy)`)
    if (s.origin === 'umre' && c.locator) throw new EvidenceError(`${c.id}: nguồn nội bộ không có số trang`)
    this.citations.set(c.id, c)
  }
  source(id: string) {
    const s = this.sources.get(id)
    if (!s) throw new EvidenceError(`không có nguồn "${id}"`)
    return s
  }
  citation(id: string) {
    const c = this.citations.get(id)
    if (!c) throw new EvidenceError(`không có trích dẫn "${id}"`)
    return c
  }
  hasCitation = (id: string) => this.citations.has(id)
  allSources = () => [...this.sources.values()]
  allCitations = () => [...this.citations.values()]
}

/** "Phạm Tú Hương, Phức điệu nghiêm khắc (Hà Nội: Nhạc viện Hà Nội, 1991), tr. 9–10" — Chicago note style. */
export function formatCitation(c: Citation, s: SourceRecord): string {
  if (s.origin === 'umre') return `${s.title} (${LABEL[s.type]}, ${VLABEL[c.verification]})`
  const pub = [s.place && s.publisher ? `${s.place}: ${s.publisher}` : s.publisher ?? s.place, s.year].filter(Boolean).join(', ')
  return `${s.authors.join(', ')}, ${s.title}${s.edition ? `, ${s.edition}` : ''}${pub ? ` (${pub})` : ''}${c.locator ? `, ${c.locator}` : ''} — ${VLABEL[c.verification]}${c.checkedBy ? ` (${CHECKED[c.checkedBy]})` : ''}`
}
export const LABEL: Record<SourceType, string> = {
  primary: 'nguồn gốc', secondary: 'nguồn thứ cấp', tertiary: 'tài liệu tra cứu', 'internal-interpretation': 'cách hiểu của người biên soạn', 'unverified-claim': 'chưa có văn bản đối chiếu',
}
export const CHECKED = { assistant: 'trợ lý máy đối chiếu với bản scan, chưa có người duyệt', compiler: 'người biên soạn đối chiếu', teacher: 'người dạy / chuyên gia đã duyệt' } as const
export const VLABEL: Record<Verification, string> = { verified: 'đã đối chiếu', 'partially-verified': 'đối chiếu một phần', unverified: 'chưa xác minh' }
