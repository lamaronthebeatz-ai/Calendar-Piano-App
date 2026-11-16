import { parseId, type EntityId } from './ids'
import type { Claim, Evidence, KnowledgeData, MySource } from './model'

/**
 * The checks a claim must pass before it can stand in a text. They look at what is recorded, not at the truth of
 * the claim: a claim with no evidence is flagged, never filled in.
 */
export type Level = 'error' | 'warn' | 'info'
export interface Issue {
  level: Level
  code: 'no-evidence' | 'no-support' | 'missing-source' | 'no-page' | 'source-unverified' | 'source-disputed' | 'unchecked' | 'secondary-only' | 'settled-contested'
  text: string
  evidence?: string
}

/** How a claim's chain reads: Luận điểm → Bằng chứng → Trích dẫn → Tài liệu gốc → Trang. */
export interface Link {
  evidence: Evidence
  /** the source record, when it is Lamar's own (ms:) */
  mine?: MySource
  /** the source exists (own record or library bibliography) */
  found: boolean
}

export function chainOf(claim: Claim, data: KnowledgeData, libHas: (id: string) => boolean): Link[] {
  return data.evidence
    .filter((e) => e.claim === claim.id)
    .map((evidence) => {
      const p = parseId(evidence.source)
      const mine = p?.prefix === 'ms' ? data.sources.find((s) => s.id === p.local) : undefined
      return { evidence, mine, found: p?.prefix === 'ms' ? !!mine : p?.prefix === 's' ? libHas(p.local) : false }
    })
}

export function checkClaim(claim: Claim, data: KnowledgeData, libHas: (id: string) => boolean): Issue[] {
  const chain = chainOf(claim, data, libHas)
  const out: Issue[] = []
  if (!chain.length) return [{ level: 'error', code: 'no-evidence', text: 'Chưa có bằng chứng nào — luận điểm này chưa có nguồn.' }]
  const support = chain.filter((l) => l.evidence.stance === 'supports')
  if (!support.length) out.push({ level: 'error', code: 'no-support', text: 'Không có bằng chứng nào ủng hộ (chỉ có bối cảnh hoặc phản bác).' })
  for (const l of chain) {
    const e = l.evidence
    if (!l.found) out.push({ level: 'error', code: 'missing-source', text: `Tài liệu ${e.source} không còn trong thư mục.`, evidence: e.id })
    if (!e.page?.trim()) out.push({ level: 'warn', code: 'no-page', text: 'Bằng chứng thiếu trang cụ thể.', evidence: e.id })
    if (l.mine?.verification === 'unverified') out.push({ level: 'warn', code: 'source-unverified', text: `Thông tin thư mục của “${l.mine.title}” chưa đối chiếu.`, evidence: e.id })
    if (l.mine?.verification === 'disputed') out.push({ level: 'warn', code: 'source-disputed', text: `“${l.mine.title}” đang có nghi vấn.`, evidence: e.id })
    if (!e.checked) out.push({ level: 'info', code: 'unchecked', text: 'Trang và câu trích chưa đối chiếu với bản gốc.', evidence: e.id })
  }
  if (support.length && support.every((l) => l.mine?.role === 'secondary')) out.push({ level: 'info', code: 'secondary-only', text: 'Chỉ dựa trên nguồn thứ cấp.' })
  if (claim.status === 'settled' && chain.some((l) => l.evidence.stance === 'contradicts'))
    out.push({ level: 'warn', code: 'settled-contested', text: 'Đánh dấu “đã vững” nhưng còn bằng chứng phản bác.' })
  return out
}

/** Worst level first; a claim with no issue is backed as far as the records go. */
export const worst = (issues: Issue[]): Level | null => (['error', 'warn', 'info'] as Level[]).find((l) => issues.some((i) => i.level === l)) ?? null

/** Claims that have no source behind them at all: the list the research desk warns about. */
export const unsupported = (data: KnowledgeData, libHas: (id: string) => boolean) =>
  data.claims.filter((c) => checkClaim(c, data, libHas).some((i) => i.code === 'no-evidence' || i.code === 'no-support' || i.code === 'missing-source'))

/**
 * Paragraphs of a draft that make statements without a single citation ([^id…]). Headings, quotations, lists and
 * short lines are left alone; this points at where a source may be missing, it does not judge the text.
 */
export function uncitedParagraphs(draft: string): { line: number; text: string }[] {
  const out: { line: number; text: string }[] = []
  let line = 1
  for (const para of draft.split(/\n\s*\n/)) {
    const t = para.trim()
    const at = line
    line += para.split('\n').length + 1
    if (!t || /^(#|>|- |\* |\d+\. |\||::)/.test(t) || t.length < 160) continue
    if (/\[\^[a-z0-9-]+/.test(t)) continue
    out.push({ line: at, text: t.length > 120 ? `${t.slice(0, 117)}…` : t })
  }
  return out
}

/** Every entity id a claim, its evidence and their sources touch — for the graph. */
export const claimIds = (c: Claim, data: KnowledgeData): EntityId[] => [...c.about, ...data.evidence.filter((e) => e.claim === c.id).map((e) => e.source)]
