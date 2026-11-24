import type { EntityId } from '../features/knowledge/ids'
import REVIEWS from './reviews.json'
import { rulebookIds, rulebookRecord } from './rulebooks'
import type { RuleEntry } from './schema'
import { termConflicts } from './terminology'

/**
 * The editorial review of UMK (Phase 1.5): for each term conflict, each rule resting on a reading or a convention, and
 * each open question of the rulebooks, what the evidence shows, how strongly the source supports it, what the solver
 * does with it, and what is proposed. The review is data (reviews.json; docs/umk/reviews/*.md are written from the same
 * data and the rulebooks); it changes nothing in the knowledge. A decision on an issue is recorded by a person in
 * the feedback store (feedback.ts), never applied by the machine.
 */
export type TermClass = 'SAME_CONCEPT' | 'RELATED_BUT_DISTINCT' | 'BROADER_NARROWER' | 'CONTEXT_DEPENDENT' | 'TRANSLATION_VARIANT' | 'HISTORICAL_VARIANT' | 'UNRESOLVED'
export type Support = 'DIRECTLY_SUPPORTED' | 'SUPPORTED_WITH_INTERPRETATION' | 'EDITORIAL_CONVENTION' | 'INSUFFICIENT_EVIDENCE' | 'CONTRADICTED_BY_SOURCE'
export type RuleStatus = 'REQUIRES_EDITORIAL_DECISION' | 'REQUIRES_PRIMARY_SOURCE' | 'REQUIRES_TEACHER_CONFIRMATION' | 'NO_ACTION'
export type QuestionStatus = 'RESOLVED_BY_SOURCE' | 'RESOLVED_BY_EXISTING_RULE' | 'REQUIRES_EDITORIAL_DECISION' | 'REQUIRES_PRIMARY_SOURCE' | 'REQUIRES_TEACHER_CONFIRMATION' | 'UNRESOLVED'

export type TermReview = { id: string; also: string[]; terms: string[]; form: string; cause: string; evidence: string; classification: TermClass; reason: string; proposal: string; status: 'pending-editor' | 'resolved-detector'; options: string[] }
export type RuleReview = { id: string; support: Support; direct: string; editorial: string; issue: string; impact: string; action: string; status: RuleStatus }
export type QuestionReview = { id: string; resolution: QuestionStatus; answers: string; impact: string; options: string[]; decider: string }
export const REVIEW = REVIEWS as unknown as { reviewed: string; reviewer: string; terms: TermReview[]; rules: RuleReview[]; questions: QuestionReview[] }

export const SUPPORT_LABEL: Record<Support, string> = {
  DIRECTLY_SUPPORTED: 'nguồn nói trực tiếp', SUPPORTED_WITH_INTERPRETATION: 'nguồn hỗ trợ, cần diễn giải', EDITORIAL_CONVENTION: 'quy ước người biên soạn / người dạy',
  INSUFFICIENT_EVIDENCE: 'chưa đủ bằng chứng', CONTRADICTED_BY_SOURCE: 'lệch với nguồn',
}
export const STATUS_LABEL: Record<RuleStatus | QuestionStatus | TermReview['status'], string> = {
  REQUIRES_EDITORIAL_DECISION: 'chờ người biên soạn quyết', REQUIRES_PRIMARY_SOURCE: 'cần đọc nguồn gốc', REQUIRES_TEACHER_CONFIRMATION: 'cần người dạy xác nhận', NO_ACTION: 'không cần làm gì',
  RESOLVED_BY_SOURCE: 'nguồn đã trả lời', RESOLVED_BY_EXISTING_RULE: 'luật hiện có đã trả lời (chờ xác nhận để đóng)', UNRESOLVED: 'chưa giải được',
  'pending-editor': 'chờ người biên soạn quyết', 'resolved-detector': 'đã sửa bộ dò (dữ liệu không đổi)',
}
export const TERM_CLASS_LABEL: Record<TermClass, string> = {
  SAME_CONCEPT: 'cùng khái niệm, khác cách gọi', RELATED_BUT_DISTINCT: 'liên quan nhưng khác khái niệm', BROADER_NARROWER: 'rộng – hẹp', CONTEXT_DEPENDENT: 'nghĩa theo ngữ cảnh',
  TRANSLATION_VARIANT: 'khác do dịch', HISTORICAL_VARIANT: 'khác theo thời kỳ / truyền thống', UNRESOLVED: 'chưa đủ căn cứ',
}

/** Rule entries that rest on a reading, a convention, an unverified or partly verified source, or carry a caveat
 *  (the Phase 1.5 criteria) — computed from the rulebooks, so the review can be checked to cover them all. */
export function entriesNeedingReview(): RuleEntry[] {
  return rulebookIds().flatMap((id) =>
    rulebookRecord(id).entries.filter((e) => e.provenance.kind === 'editorial' || e.provenance.kind === 'unsourced-claim' || e.provenance.verification !== 'verified' || !!e.caveat),
  )
}

export type IssueKind = 'term-conflict' | 'rulebook-question' | 'convention' | 'missing-source' | 'interpretation' | 'detector'
export type Issue = {
  id: string
  kind: IssueKind
  domain: string
  title: string
  problem: string
  source: string
  support: string
  impact: string
  status: string
  pending: boolean
  proposal: string
  options: string[]
  about: EntityId | null
}

const STANDING_KIND = (e: RuleEntry, r: RuleReview): IssueKind =>
  e.standing === 'ambiguous' ? 'rulebook-question' : r.support === 'EDITORIAL_CONVENTION' ? 'convention' : r.support === 'INSUFFICIENT_EVIDENCE' ? 'missing-source' : 'interpretation'

/** Every issue the review covers, with what a compiler needs to decide it. */
export function editorialIssues(): Issue[] {
  const out: Issue[] = []
  const live = new Set(termConflicts().map((g) => g.id))
  for (const t of REVIEW.terms)
    out.push({
      id: t.id, kind: t.status === 'resolved-detector' ? 'detector' : 'term-conflict', domain: 'Thuật ngữ', title: `Dạng viết "${t.form}"`, problem: t.cause, source: t.evidence,
      support: TERM_CLASS_LABEL[t.classification], impact: live.has(t.id) || t.also.some((x) => live.has(x)) ? 'bộ dò còn báo; phân giải liên kết thư viện bị ảnh hưởng nếu có liên kết dạng này' : 'bộ dò không còn báo', status: STATUS_LABEL[t.status],
      pending: t.status === 'pending-editor', proposal: t.proposal, options: t.options, about: (t.terms[0] as EntityId) ?? null,
    })
  const entries = new Map(rulebookIds().flatMap((id) => rulebookRecord(id).entries.map((e) => [e.local, { e, rb: rulebookRecord(id) }] as const)))
  for (const r of REVIEW.rules) {
    const hit = entries.get(r.id)
    if (!hit) continue
    out.push({
      id: hit.e.id, kind: STANDING_KIND(hit.e, r), domain: hit.rb.title, title: hit.e.name, problem: `${r.issue} — phần diễn giải: ${r.editorial}`, source: sourceLine(hit.e),
      support: SUPPORT_LABEL[r.support], impact: r.impact, status: STATUS_LABEL[r.status], pending: r.status !== 'NO_ACTION', proposal: r.action, options: [], about: hit.e.id,
    })
  }
  for (const q of REVIEW.questions) {
    const hit = entries.get(q.id)
    if (!hit) continue
    out.push({
      id: hit.e.id, kind: 'rulebook-question', domain: hit.rb.title, title: hit.e.statement, problem: `Cách đọc hiện tại: ${hit.e.scope.replace(/^cách đọc hiện tại: /, '')}. Nguồn có trả lời không: ${q.answers}`, source: sourceLine(hit.e),
      support: STATUS_LABEL[q.resolution], impact: q.impact, status: STATUS_LABEL[q.resolution], pending: true, proposal: `Người quyết: ${q.decider}`, options: q.options, about: hit.e.id,
    })
  }
  return out
}

function sourceLine(e: RuleEntry) {
  const kinds: Record<string, string> = { editorial: 'cách hiểu của người biên soạn', 'unsourced-claim': 'chưa có văn bản (quy ước)', primary: 'nguồn gốc', secondary: 'nguồn thứ cấp', reference: 'tra cứu' }
  return [kinds[e.provenance.kind] ?? e.provenance.kind, e.provenance.locator, e.provenance.checkedBy === 'assistant' ? 'trợ lý máy đối chiếu, chưa người duyệt' : null].filter(Boolean).join(' · ')
}
