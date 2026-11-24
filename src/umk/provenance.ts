import type { Provenance, ProvenanceKind, VerificationState } from './schema'
import type { EntityId } from '../features/knowledge/ids'
import type { SourceType, Verification } from '../umre/evidence/evidence'

/**
 * One provenance vocabulary over the four the app grew separately. Each mapping is stated here once; the original
 * value is always kept (`original`), so nothing is lost by the normalisation and a reader can see what was recorded.
 *
 *  UMRE evidence (evidence.ts)   primary · secondary · tertiary · internal-interpretation · unverified-claim
 *                                × verified · partially-verified · unverified
 *  Library bibliography (curated.ts `access`)  nguyen-van · ban-dich · thu-cap · chua-doi-chieu
 *  Knowledge graph edges (relations.ts)        library · wikidata · computed · research
 *  My sources (knowledge/model.ts)             unverified · record · original · disputed
 */
const UMRE_KIND: Record<SourceType, ProvenanceKind> = { primary: 'primary', secondary: 'secondary', tertiary: 'reference', 'internal-interpretation': 'editorial', 'unverified-claim': 'editorial' }
const UMRE_VERIF: Record<Verification, VerificationState> = { verified: 'verified', 'partially-verified': 'partial', unverified: 'unverified' }

export function fromUmreEvidence(type: SourceType, verification: Verification, sources: EntityId[], locator: string | null, note?: string): Provenance {
  return {
    kind: UMRE_KIND[type], verification: UMRE_VERIF[verification], sources, ...(locator ? { locator } : {}),
    original: { system: 'umre-evidence', value: `${type}/${verification}` }, ...(note ? { note } : {}),
  }
}

/** A library article: an educational text written by the compiler, sourced in its references; individual claims
 *  are only as checked as the article says (`::verify` markers are reported as gaps, not hidden). */
export const libraryArticle = (): Provenance => ({ kind: 'educational', verification: 'partial', sources: [], original: { system: 'library', value: 'article' } })

/** A curated bibliography record: reading access says how the compiler worked with it. */
export function fromCuratedAccess(access: string | undefined, id: string): Provenance {
  const verification: VerificationState = access === 'nguyen-van' ? 'verified' : access === 'ban-dich' || access === 'thu-cap' ? 'partial' : 'unverified'
  return { kind: 'reference', verification, sources: [`s:${id}` as EntityId], original: { system: 'bibliography', value: access ?? 'không ghi' } }
}

/** A knowledge-graph edge's provenance (relations.ts). */
export function fromGraph(p: 'library' | 'wikidata' | 'computed' | 'research'): Provenance {
  const kind: ProvenanceKind = p === 'library' ? 'educational' : p === 'wikidata' ? 'external-data' : p === 'computed' ? 'machine' : 'user'
  return { kind, verification: p === 'library' ? 'partial' : 'unverified', sources: [], original: { system: 'knowledge-graph', value: p } }
}

/** A source entered under "Nguồn của tôi" (knowledge/model.ts). */
export function fromMySource(v: 'unverified' | 'record' | 'original' | 'disputed', id: string): Provenance {
  const verification: VerificationState = v === 'original' ? 'verified' : v === 'record' ? 'partial' : v
  return { kind: 'user', verification, sources: [`ms:${id}` as EntityId], original: { system: 'my-sources', value: v } }
}

/** The glossary (terms.json, scripts/terms/build.py): compiler-written definitions, labels from Wikidata. */
export const glossary = (): Provenance => ({ kind: 'educational', verification: 'partial', sources: [], original: { system: 'glossary', value: 'terms.json' }, note: 'định nghĩa do người biên soạn viết; nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục' })

/** Something UMK itself derives (a taxonomy placement read from the map, an index). */
export const umkDerived = (value: string): Provenance => ({ kind: 'machine', verification: 'unverified', sources: [], original: { system: 'umk', value } })

export const PROVENANCE_LABEL: Record<ProvenanceKind, string> = {
  primary: 'Nguồn gốc', secondary: 'Nguồn thứ cấp', reference: 'Tài liệu tra cứu', educational: 'Tài liệu học tập (người biên soạn)', editorial: 'Cách hiểu của người biên soạn', machine: 'Máy tính suy ra', 'external-data': 'Dữ liệu ngoài (chưa đối chiếu)', user: 'Người dùng nhập',
}
export const VERIFICATION_LABEL: Record<VerificationState, string> = { verified: 'đã đối chiếu', partial: 'đối chiếu một phần', unverified: 'chưa xác minh', disputed: 'có nghi vấn' }
