import { readFileSync } from 'node:fs'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { fromMusicXml } from '../features/compose/exchange'
import { CURATED } from '../features/sources/curated'
import { ARTICLES } from '../features/theory/articles'
import type { EntityId } from '../features/knowledge/ids'
import { handle } from '../umre/api'
import { createEngine } from '../umre/engine'
import { fromCompose } from '../umre/repr/adapters/compose'
import { harmonizeTask } from '../umre/domains/harmony/task'
import { line } from '../umre/testing/fixtures'
import { twoVoiceTask } from '../umre/testing/fixtures'
import { COUNTERPOINT_RULEBOOK_ID } from '../umre/rulebook/counterpoint'
import { getApplicableRules, getConcept, getKnowledge, getRelatedConcepts, getRulebook, getSources, searchKnowledge } from './api'
import { danglingEdges, inventory, knowledgeGaps } from './inventory'
import { assembleReasoningContext, inProcess, ReasoningError, submitReasoningRequest, toUmreRequest } from './reasoning'
import { allRulebooks, rulebook } from './rulebooks'
import { checkRecord, checkUnit } from './schema'
import { coverage, domainsOf, taxonomy } from './taxonomy'
import { findTerms, glossaryTerms, termConflicts, useGlossaryData } from './terminology'

/**
 * UMK on the real knowledge of the app: the library (read from the content modules, vitest.config.ts alias), the
 * glossary, the bibliography, the rulebooks UMRE reasons with. Counts are compared with the homes UMK reads from —
 * never with numbers typed into the test — so a unit dropped on the way fails here.
 */
const TERMS = JSON.parse(readFileSync('src/features/terms/terms.json', 'utf8')) as { id: string; vi: string; variants?: string[] }[]
beforeAll(async () => {
  useGlossaryData(TERMS)
  ;(globalThis as unknown as { DOMParser: unknown }).DOMParser = new (await import('happy-dom')).Window().DOMParser
})

describe('Toàn vẹn tri thức (không mất, không gộp nhầm)', () => {
  it('mọi bài, thuật ngữ, nguồn thư mục, mục sổ luật đều có trong UMK; không cạnh nào treo', () => {
    const inv = inventory()
    expect(inv.articles).toBe(ARTICLES.length)
    expect(inv.glossary).toBe(TERMS.length)
    expect(inv.curatedSources).toBe(CURATED.length)
    for (const b of inv.rulebooks) expect(b.umk, b.id).toBe(b.source)
    expect(danglingEdges()).toEqual([])
    // every article is a unit with a valid record and at least one place in the taxonomy (map or library topic)
    for (const a of ARTICLES) {
      const u = getKnowledge(`a:${a.slug}` as EntityId)!
      expect(checkUnit(u), a.slug).toEqual([])
      expect(domainsOf(u.id).length, a.slug).toBeGreaterThan(0)
    }
  })
  it('thuật ngữ: mọi dạng viết của bảng thuật ngữ còn nguyên, giữ quan hệ riêng; dạng trỏ hai nơi được báo, không gộp', () => {
    for (const raw of TERMS) {
      const t = glossaryTerms().find((x) => x.id === `x:${raw.id}`)!
      expect(t.preferred).toBe(raw.vi)
      expect(t.forms.filter((f) => f.relation === 'glossary-variant').map((f) => f.text)).toEqual(raw.variants ?? [])
    }
    // "dấu hoá" is listed under both the accidental and the key signature: reported, both terms kept apart
    const shared = termConflicts().find((g) => g.id === 'term-shared:dau hoa')!
    expect(shared.kind).toBe('ambiguous-term')
    expect(findTerms('dấu hoá').map((h) => h.term.id)).toEqual(expect.arrayContaining(['x:dau-hoa', 'x:hoa-bieu']))
  })
  it('phân loại đa chiều: một bài nằm ở nhiều nhánh khi bản đồ đặt nó nhiều nơi; ngành chưa có nhánh được báo, không bịa nút', () => {
    const multi = ARTICLES.filter((a) => domainsOf(`a:${a.slug}` as EntityId).filter((d) => !d.startsWith('d:topic.')).length > 1)
    expect(multi.length).toBeGreaterThan(0)
    expect(taxonomy().every((n) => n.level !== 'branch' || n.basis === null || n.basis.startsWith('a:'))).toBe(true)
    const archaeology = coverage().find((c) => c.field === 'Music Archaeology')!
    expect(archaeology.nodes).toEqual([])
  })
})

describe('Truy xuất', () => {
  it('đúng lĩnh vực: tìm trong nhánh Lý thuyết không ra bài ngoài nhánh', () => {
    const hits = searchKnowledge('hợp âm', { domain: 'd:ly-thuyet' as EntityId, kinds: ['concept'] })
    expect(hits.length).toBeGreaterThan(0)
    for (const h of hits) expect(domainsOf(h.id).some((d) => d === 'd:ly-thuyet')).toBe(true)
  })
  it('đúng sổ luật, kèm ngoại lệ, cho phép, câu hỏi mở; hai truyền thống không trộn', () => {
    const cp = getApplicableRules({ domain: 'counterpoint' })
    expect(cp.groups.map((g) => g.rulebook.ref.id)).toEqual([COUNTERPOINT_RULEBOOK_ID])
    expect(cp.choose).toBe(false)
    const kinds = new Set(cp.groups[0].related.map((e) => e.standing))
    expect([...kinds].sort()).toEqual(['ambiguous', 'exception', 'permitted'])
    // a harmony question never gets counterpoint rules
    expect(getApplicableRules({ domain: 'harmony' }).groups.flatMap((g) => g.rules).some((r) => r.rulebook.includes('counterpoint'))).toBe(false)
    expect(getRulebook(COUNTERPOINT_RULEBOOK_ID)!.tradition).toMatch(/Taneyev/)
  })
  it('nguồn: luật có trang sách trỏ về đúng bản ghi thư mục; luật chỉ dựa cách hiểu của người biên soạn không có nguồn xuất bản', () => {
    const rb = getRulebook(COUNTERPOINT_RULEBOOK_ID)!
    const sourced = rb.entries.find((e) => e.provenance.sources.length && e.provenance.locator)!
    const src = getSources(sourced.id)
    expect(src[0].id).toBe('s:pham-tu-huong-1991')
    expect(src[0].locator).toBe(sourced.provenance.locator)
    const internal = rb.entries.find((e) => e.provenance.kind === 'editorial')
    if (internal) expect(getSources(internal.id)).toEqual([])
  })
  it('khái niệm: thuật ngữ, nơi trong phân loại, luật nêu trong bài, phương pháp dùng nó, nhãn /analyze dẫn tới nó; quan hệ hai chiều có nguồn gốc', () => {
    const c = getConcept('a:doi-vi-don-gian-hai-be' as EntityId)!
    expect(c.rules.length).toBeGreaterThan(0)
    const f = getConcept('a:chuc-nang-hoa-am' as EntityId)!
    expect(f.analysisLabels).toContain('function')
    expect(f.methods.length).toBeGreaterThan(0)
    const rel = getRelatedConcepts('a:chuc-nang-hoa-am' as EntityId)
    expect(rel.some((r) => r.rel === 'view' && r.dir === 'in')).toBe(true)
    expect(rel.every((r) => !!r.prov)).toBe(true)
  })
})

describe('Nối UMK – UMRE', () => {
  it('UMRE lấy sổ luật từ UMK: đúng các đối tượng trong sổ đăng ký, không tự dựng bản riêng', () => {
    const e = createEngine()
    for (const r of allRulebooks()) expect(e.rulebooks.get({ id: r.id, version: r.version })).toBe(r)
    expect(rulebook(COUNTERPOINT_RULEBOOK_ID)).toBe(allRulebooks()[0])
  })
  it('phức điệu: ngữ cảnh mang sổ luật + truyền thống + câu hỏi mở; kết quả ghi bộ giải, bộ kiểm độc lập, nguồn đã dùng', async () => {
    const ctx = assembleReasoningContext({ kind: 'counterpoint' })
    expect(ctx.rulebooks).toEqual([{ id: rulebook(COUNTERPOINT_RULEBOOK_ID).id, version: rulebook(COUNTERPOINT_RULEBOOK_ID).version }])
    expect(ctx.gaps.some((g) => g.kind === 'open-question')).toBe(true)
    const rec = await submitReasoningRequest(ctx, { op: 'solve', task: twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'), options: { timeMs: 10_000, maxSolutions: 2 } }, inProcess(handle))
    expect(checkRecord(rec)).toEqual([])
    expect(rec.epistemic).toBe('validated')
    expect(rec.umre!.validator).toBeTruthy()
    expect(rec.umre!.solver).toBeTruthy()
    expect(rec.knowledge.sources).toContain('s:pham-tu-huong-1991')
    expect(rec.rulebooks).toEqual(ctx.rulebooks)
  }, 60_000)
  it('sai sổ luật thì từ chối trước khi chạy: bài hoà âm không chạy được với ngữ cảnh phức điệu', () => {
    const ctx = assembleReasoningContext({ kind: 'counterpoint' })
    expect(() => toUmreRequest(ctx, { op: 'solve', task: harmonizeTask('x', line('E5:4 | D5:4 | C5:4')) })).toThrow(ReasoningError)
  })
  it('phân tích hoà âm: không có giọng chủ → báo thiếu tiền đề; có giọng chủ → UMRE nhận nó qua ngữ cảnh UMK; kết quả là diễn giải, không phải chứng minh', async () => {
    const score = fromCompose(fromMusicXml(readFileSync('public/analyze/bach-bwv269.musicxml', 'utf8')))
    const none = assembleReasoningContext({ kind: 'harmony-analysis', globalKey: null })
    expect(none.gaps.map((g) => g.kind)).toEqual(['missing-premise'])
    const r0 = await submitReasoningRequest(none, { op: 'analyze', score, modules: ['harmony.tonal'] }, inProcess(handle))
    expect(r0.gaps.some((g) => g.kind === 'insufficient-data' && g.origin === 'umre')).toBe(true)
    const ctx = assembleReasoningContext({ kind: 'harmony-analysis', globalKey: { step: 4, alter: 0, minor: false } })
    expect(ctx.concepts).toContain('a:chuc-nang-hoa-am')
    const rec = await submitReasoningRequest(ctx, { op: 'analyze', score, modules: ['harmony.tonal'] }, inProcess(handle))
    expect(rec.status).toBe('COMPLETED')
    expect(rec.epistemic).toBe('interpretation')
    expect(checkRecord(rec)).toEqual([])
    // a wrong global key: UMRE's evidence warning comes back to UMK as a conflict gap
    const wrong = await submitReasoningRequest(assembleReasoningContext({ kind: 'harmony-analysis', globalKey: { step: 2, alter: -1, minor: false } }), { op: 'analyze', score, modules: ['harmony.tonal'] }, inProcess(handle))
    expect(wrong.gaps.some((g) => g.kind === 'conflict' && g.origin === 'umre')).toBe(true)
  }, 60_000)
  it('câu hỏi âm nhạc học: ngữ cảnh khái niệm từ thư viện, không gọi bộ giải nào (không hình thức hoá được)', () => {
    const ctx = assembleReasoningContext({ kind: 'musicology-question', question: 'dân tộc nhạc học' })
    expect(ctx.domain).toBeNull()
    expect(ctx.concepts).toContain('a:dan-toc-nhac-hoc')
    expect(() => toUmreRequest(ctx, { op: 'analyze', score: fromCompose(fromMusicXml(readFileSync('public/analyze/bach-bwv269.musicxml', 'utf8'))) })).toThrow(/không hình thức hoá/)
    const nothing = assembleReasoningContext({ kind: 'musicology-question', question: 'zzzz không có' })
    expect(nothing.gaps[0].kind).toBe('missing-definition')
  })
})

describe('Vòng phản hồi: báo khoảng trống, đề xuất — không tự thành tri thức', () => {
  const mem = new Map<string, string>()
  beforeEach(() => {
    mem.clear()
    vi.resetModules()
    vi.stubGlobal('localStorage', { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, v), removeItem: (k: string) => void mem.delete(k) })
  })
  it('khoảng trống lưu có trạng thái; báo lại không xoá quyết định; đề xuất phải có căn cứ, chấp nhận chỉ ghi quyết định', async () => {
    const f = await import('./feedback')
    const gap = { id: 'g1', kind: 'missing-rule' as const, about: null, text: 'thiếu luật', origin: 'umre' as const }
    f.reportKnowledgeGap([gap], 'ctx-1')
    f.setGapStatus('g1', 'acknowledged')
    f.reportKnowledgeGap([gap])
    expect(f.feedback().gaps).toMatchObject([{ id: 'g1', status: 'acknowledged', contextId: 'ctx-1' }])
    expect(() => f.proposeKnowledgeUpdate({ target: null, change: 'thêm', basis: ' ', origin: 'umre' })).toThrow()
    const p = f.proposeKnowledgeUpdate({ target: 'r:x/y' as EntityId, change: 'thêm ngoại lệ', basis: 'tr. 12', origin: 'user' })
    f.decideProposal(p.id, 'accepted', 'đã đọc sách')
    expect(f.feedback().proposals[0]).toMatchObject({ status: 'accepted', decisionNote: 'đã đọc sách' })
    // the knowledge itself is unchanged: rulebook entries are what the rulebook module says
    const { inventory: inv } = await import('./inventory')
    for (const b of inv().rulebooks) expect(b.umk).toBe(b.source)
  })
  it('khoảng trống UMK tự thấy: câu hỏi mở của sổ luật, luật chỉ dựa cách hiểu, thuật ngữ trỏ hai nơi', () => {
    const kinds = new Set(knowledgeGaps().map((g) => g.kind))
    expect(kinds.has('open-question')).toBe(true)
    expect(kinds.has('ambiguous-term')).toBe(true)
  })
})
