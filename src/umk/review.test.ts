import { readFileSync } from 'node:fs'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import type { EntityId } from '../features/knowledge/ids'
import { createEngine } from '../umre/engine'
import { allRulebooks, rulebook, rulebookIds, rulebookRecord } from './rulebooks'
import { editorialIssues, entriesNeedingReview, REVIEW } from './reviews'
import { checkProvenance } from './schema'
import { assembleReasoningContext } from './reasoning'
import { findTerms, glossaryTerms, termConflicts, toneKey, useGlossaryData } from './terminology'

/**
 * Phase 1.5 (academic review): the review covers every entry it should, the data it reviews is unchanged, a reading
 * or an unwritten convention is never "verified", and decisions are recorded without touching the knowledge.
 */
type Raw = { id: string; vi: string; variants?: string[]; viwiki?: string; en?: string; ru?: string; de?: string; fr?: string; it?: string }
const TERMS = JSON.parse(readFileSync('src/features/terms/terms.json', 'utf8')) as Raw[]
beforeAll(() => useGlossaryData(TERMS))

describe('Thuật ngữ', () => {
  it('không gộp Term ID, không mất dạng viết, không mất quan hệ ngôn ngữ, không mất bài liên quan', () => {
    expect(new Set(glossaryTerms().map((t) => t.id)).size).toBe(TERMS.length)
    for (const raw of TERMS) {
      const t = glossaryTerms().find((x) => x.id === `x:${raw.id}`)!
      // every variant kept, in order, split only by where it came from (compiler or Wikidata label)
      expect(t.forms.filter((f) => f.relation === 'glossary-variant' || f.relation === 'wikidata-label').map((f) => f.text)).toEqual(raw.variants ?? [])
      for (const l of ['en', 'ru', 'de', 'fr', 'it'] as const) if (raw[l]) expect(t.forms).toContainEqual({ text: raw[l], lang: l, relation: 'foreign' })
      expect(t.article).not.toBeNull()
    }
  })
  it('nhãn Wikidata được ghi là nhãn Wikidata, không phải biến thể do người biên soạn ghi', () => {
    const lsh = glossaryTerms().find((t) => t.id === 'x:lich-su-nganh-am-nhac-hoc')!
    expect(lsh.forms.find((f) => f.text === 'Âm nhạc học')!.relation).toBe('wikidata-label')
    const organ = glossaryTerms().find((t) => t.id === 'x:organ-ong')!
    expect(organ.forms.find((f) => f.text === 'Đại phong cầm')!.relation).toBe('wikidata-label')
    // a Wikidata label the compiler ALSO gave as the article's alias stays a compiler variant ("Âm giai" for the scale)
    const scale = glossaryTerms().find((t) => t.id === 'x:am-giai')!
    expect(scale.forms.find((f) => f.text === 'Âm giai' && f.relation !== 'article-alias')!.relation).toBe('glossary-variant')
  })
  it('dấu thanh phân biệt từ: "hòa âm" ≠ "họa âm"; hai cách đặt dấu của một từ là một', () => {
    expect(toneKey('Hòa âm')).toBe(toneKey('Hoà âm'))
    expect(toneKey('Hòa âm')).not.toBe(toneKey('họa âm'))
    expect(toneKey('Dấu hoá')).toBe(toneKey('Dấu hóa'))
    expect(toneKey('thuỷ')).toBe(toneKey('thủy'))
    expect(findTerms('dấu hoá').map((h) => h.term.id)).toEqual(expect.arrayContaining(['x:dau-hoa', 'x:hoa-bieu']))
  })
  it('xung đột phát hiện ổn định (8 sau khi sửa dương tính giả); mỗi xung đột đều có trong bản rà soát', () => {
    const ids = termConflicts().map((g) => g.id)
    expect(ids).toEqual(termConflicts().map((g) => g.id))
    expect(ids).toHaveLength(8)
    expect(ids).not.toContain('term-shared:hoa am')
    const reviewed = new Set(REVIEW.terms.flatMap((t) => [t.id, ...t.also]))
    for (const id of ids) expect(reviewed.has(id), id).toBe(true)
    // the detector fix is recorded as such; no term review claims a merge
    expect(REVIEW.terms.find((t) => t.id === 'term-shared:hoa am')!.status).toBe('resolved-detector')
    expect(REVIEW.terms.every((t) => !/gộp hai|đã gộp/i.test(t.proposal) || /Không gộp/.test(t.proposal))).toBe(true)
  })
})

describe('Sổ luật', () => {
  it('bản rà soát phủ mọi mục dựa cách hiểu / quy ước / nguồn chưa đủ / có caveat (tính từ sổ luật, không gõ tay)', () => {
    const need = entriesNeedingReview().map((e) => e.local)
    const reviewed = new Set([...REVIEW.rules.map((r) => r.id), ...REVIEW.questions.map((q) => q.id)])
    for (const id of need) expect(reviewed.has(id), id).toBe(true)
    // every reviewed id exists in a rulebook
    const all = new Set(rulebookIds().flatMap((id) => rulebookRecord(id).entries.map((e) => e.local)))
    for (const id of reviewed) expect(all.has(id), id).toBe(true)
    // the 9 entries of the earlier report: unverified, not a definition, not an open question
    const nine = rulebookIds().flatMap((id) => rulebookRecord(id).entries).filter((e) => e.provenance.verification === 'unverified' && e.standing !== 'definition' && e.standing !== 'ambiguous')
    expect(nine.map((e) => e.local).sort()).toEqual(['cadence-step', 'dis-both', 'end', 'h.crossing', 'no-gap', 'quarter-prep', 'range', 'star', 'star-extra'])
  })
  it('quy ước / cách hiểu không bao giờ "đã kiểm"; trợ lý máy đối chiếu được ghi riêng; nguồn yếu nhất quyết định', () => {
    for (const id of rulebookIds())
      for (const e of rulebookRecord(id).entries) {
        expect(checkProvenance(e.provenance, e.id)).toEqual([])
        if (e.provenance.kind === 'editorial' || e.provenance.kind === 'unsourced-claim') expect(e.provenance.verification).not.toBe('verified')
      }
    const cp = rulebookRecord(rulebookIds()[0])
    expect(cp.entries.find((e) => e.local === 'star')!.provenance.kind).toBe('unsourced-claim')
    expect(cp.entries.find((e) => e.local === 'dis-both')!.provenance.kind).toBe('editorial')
    // the textbook citations were read against the scan by the assistant, not by a teacher
    const sourced = cp.entries.filter((e) => e.provenance.verification === 'verified')
    expect(sourced.length).toBeGreaterThan(0)
    for (const e of sourced) expect(e.provenance.checkedBy).toBe('assistant')
    // weakest support: a rule with one partially verified citation is partial
    expect(cp.entries.find((e) => e.local === 'repeat3')!.provenance.verification).toBe('partial')
  })
  it('truyền thống, số mục, câu hỏi mở giữ nguyên; logic không đổi', () => {
    expect(rulebookRecord(rulebookIds()[0]).tradition).toMatch(/Taneyev.*Phạm Tú Hương/)
    expect(rulebookRecord(rulebookIds()[1]).tradition).toMatch(/Rimsky-Korsakov/)
    expect(rulebookIds().map((id) => rulebookRecord(id).entries.filter((e) => e.standing === 'ambiguous').length)).toEqual([6, 1])
    expect(rulebookIds().map((id) => rulebookRecord(id).entries.length)).toEqual([47, 20])
    expect(REVIEW.questions).toHaveLength(7)
    // reviews never mark a question resolved by source unless it says what the source answers
    for (const q of REVIEW.questions) if (q.resolution.startsWith('RESOLVED')) expect(q.answers.length).toBeGreaterThan(40)
  })
  it('các vấn đề của bản rà soát hiện đủ trường cho người biên soạn', () => {
    const issues = editorialIssues()
    expect(issues.length).toBe(REVIEW.terms.length + REVIEW.rules.length + REVIEW.questions.length)
    for (const i of issues) for (const k of ['id', 'domain', 'title', 'problem', 'support', 'impact', 'status', 'proposal'] as const) expect(i[k], `${i.id}.${k}`).toBeTruthy()
  })
})

describe('UMRE', () => {
  it('vẫn lấy sổ luật từ sổ đăng ký UMK; ngữ cảnh ghi đúng mã tri thức', () => {
    const e = createEngine()
    for (const r of allRulebooks()) expect(e.rulebooks.get({ id: r.id, version: r.version })).toBe(r)
    const ctx = assembleReasoningContext({ kind: 'counterpoint' })
    expect(ctx.rules).toEqual(rulebookRecord(rulebookIds()[0]).entries.map((x) => x.id))
    expect(ctx.rules.every((id) => id.startsWith('r:'))).toBe(true)
    expect(rulebook(rulebookIds()[0]).version).toBe('2')
  })
})

describe('Quyết định của người biên soạn (lưu cục bộ)', () => {
  const mem = new Map<string, string>()
  beforeEach(() => {
    mem.clear()
    vi.resetModules()
    vi.stubGlobal('localStorage', { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, v), removeItem: (k: string) => void mem.delete(k) })
  })
  it('ghi đủ lý do, nguồn, trước/sau; không tự điền người quyết; hoàn tác giữ lịch sử; tri thức không đổi', async () => {
    const f = await import('./feedback')
    expect(() => f.recordDecision({ issue: 'x', outcome: '', reason: 'r', source: '', before: '', after: '' })).toThrow()
    const d = f.recordDecision({ issue: 'r:counterpoint.strict.pham-tu-huong-1991/no-gap', outcome: 'Giữ, ghi là giới hạn miền tìm kiếm', reason: 'đọc lại tr. 7', source: 'tr. 7', before: 'chờ', after: 'giới hạn miền' })
    expect(d.decidedBy).toBeUndefined()
    expect(f.decisionOf(f.feedback(), d.issue)?.id).toBe(d.id)
    f.undoDecision(d.id)
    expect(f.decisionOf(f.feedback(), d.issue)).toBeUndefined()
    expect(f.feedback().decisions).toHaveLength(1)
    expect(f.feedback().decisions[0].undoneAt).toBeTypeOf('number')
    const e = f.recordDecision({ issue: d.issue, outcome: 'Giữ nguyên', reason: 'r', source: '', before: 'chờ', after: 'giữ', decidedBy: '  Lamar ' })
    expect(e.decidedBy).toBe('Lamar')
    // the rulebook is untouched by any decision
    const { rulebookRecord: rr } = await import('./rulebooks')
    expect(rr('counterpoint.strict.pham-tu-huong-1991').entries.find((x) => x.local === 'no-gap')!.standing).toBe('hard')
  })
  it('đọc được kho v1 cũ (UMK 1.0.0) không mất khoảng trống, đề xuất', async () => {
    mem.set('umk:feedback', JSON.stringify({ v: 1, gaps: [{ id: 'g', kind: 'missing-rule', about: null, text: 't', origin: 'umre', at: 1, status: 'open' }], proposals: [] }))
    const f = await import('./feedback')
    expect(f.feedback()).toMatchObject({ v: 2, decisions: [], gaps: [{ id: 'g' }] })
  })
})
void ({} as EntityId)
