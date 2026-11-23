import { RULES, isSoft, type RuleId } from '../../features/counterpoint/rules'
import { EvidenceRegistry, fromCurated, type Citation } from '../evidence/evidence'
import type { Definition, ExceptionSpec, Rulebook, RuleSpec } from './rulebook'

/**
 * The strict-counterpoint rulebook as the counterpoint page already applies it. Statements and hard/soft come from
 * features/counterpoint/rules.ts (RULES, isSoft) so the rulebook cannot drift from the code; page locators come
 * from the rule audit in docs/notes/counterpoint.md (17/11/2026, checked against the scan of the book), and a test
 * holds every locator to that table. Nothing here adds or changes a rule.
 */
export const COUNTERPOINT_RULEBOOK_ID = 'counterpoint.strict.pham-tu-huong-1991'
export const COUNTERPOINT_RULEBOOK_VERSION = '1'

const BOOK = 'pham-tu-huong-1991'
const CONVENTION = 'umre.exercise-convention'
const INTERNAL = 'umre.internal-reading'

/** rule id → [locator, verification] in the book; null locator = not pinned to a page */
type Cite = { src: typeof BOOK | typeof CONVENTION | typeof INTERNAL; loc?: string; v?: 'verified' | 'partially-verified' | 'unverified'; note?: string }
const P = (loc: string, v: Cite['v'] = 'verified', note?: string): Cite => ({ src: BOOK, loc, v, note })

const RULE_CITES: Record<RuleId | 'no-gap', { cites: Cite[]; scope?: string; caveat?: string }> = {
  leap: { cites: [P('tr. 6')] },
  'chromatic-near': { cites: [P('tr. 6')], caveat: 'Giáo trình nói "phải ở xa nhau" nhưng không định lượng; cách một nốt được coi là gần (cách hiểu của người biên soạn).' },
  'leap-response': { cites: [P('tr. 6')] },
  'leap3-response': { cites: [P('tr. 6')] },
  'two-leaps': { cites: [P('tr. 6')] },
  'tritone-line': { cites: [P('tr. 7')] },
  repeat3: { cites: [P('tr. 7', 'partially-verified', 'chữ và Thí dụ 12 lệch nhau')], caveat: 'Bắt buộc từ ba lần liền là cách đọc của người biên soạn: lời văn và Thí dụ 12 không khớp nhau.' },
  repeat: { cites: [P('tr. 7')] },
  'seg-place': { cites: [P('tr. 8')] },
  tie: { cites: [P('tr. 8')] },
  'rhythm-change': { cites: [P('tr. 8')], caveat: 'Mới áp ở phách đầu ô; các phách khác chưa cài (cần xác minh).' },
  'same-rhythm': { cites: [P('tr. 8–9')] },
  hidden: { cites: [P('tr. 9')] },
  parallel: { cites: [P('tr. 9–10')] },
  perfects3: { cites: [P('tr. 9', 'partially-verified', '"nhiều" không định lượng')], caveat: 'Giáo trình cấm "nhiều" quãng thuận hoàn toàn liền nhau; ngưỡng ba quãng là cách hiểu của người biên soạn.' },
  perfects: { cites: [P('tr. 9')] },
  first: { cites: [P('tr. 9')] },
  final: { cites: [P('tr. 9')] },
  'strong-perfect': { cites: [P('tr. 9')] },
  unison: { cites: [P('tr. 9')] },
  'dis-strong': { cites: [P('tr. 10')] },
  suspension: { cites: [P('tr. 10'), P('tr. 11')], caveat: 'Nốt lưu ở các quãng nghịch ngoài sơ đồ 2 đang được cho phép (sơ đồ không nhắc tới) — cần xác minh.' },
  'dis-weak': { cites: [P('tr. 11–12')], caveat: 'Nốt lưu ở phách nhẹ (phách 2 của nhịp 2/2) được chấp nhận vì giáo trình nói quãng nghịch phách mạnh "chủ yếu" là nốt lưu; giữa hai phách chỉ chấp nhận nốt lướt, thêu, sớm, thoát. Nốt sớm phải đúng cao độ của nốt sau và đến bằng liền bậc (sách chỉ nêu nốt thoát là dạng có bước nhảy). Cách hiểu của người biên soạn — cần xác minh.' },
  'upper-neighbor': { cites: [P('tr. 11–12')] },
  'weak-form': { cites: [P('Thí dụ 25–28', 'partially-verified', 'chỉ thấy trong thí dụ, không thành chữ')] },
  'dis-both': { cites: [{ src: INTERNAL, note: 'giáo trình không nhắc; thí dụ chỉ có một bè đi' }] },
  star: { cites: [{ src: CONVENTION }], scope: 'nguyên thể, đề có đánh dấu ✱' },
  'star-extra': { cites: [{ src: CONVENTION }], scope: 'nguyên thể, khi đề chỉ cho nghịch ở chỗ ✱' },
  crossing: { cites: [{ src: BOOK, v: 'partially-verified', note: 'bài chuyển động chiều dọc; chưa ghim số trang' }], scope: 'mọi bản (nguyên thể và biến thể)' },
  'hidden-hard': { cites: [P('tr. 41–43')], scope: 'ba – bốn bè: cặp ngoài khi bè trên nhảy; đối vị phức tạp: cặp thành cặp ngoài ở một bản nào đó' },
  end: { cites: [{ src: INTERNAL, note: 'định nghĩa bài tập: bè đối vị đi suốt bài' }] },
  range: { cites: [{ src: INTERNAL, note: 'không có dòng nào trong bảng kiểm toán' }] },
  'cadence-step': { cites: [{ src: INTERNAL, note: 'không có dòng nào trong bảng kiểm toán' }] },
  'no-gap': { cites: [{ src: INTERNAL, note: 'miền tìm kiếm của bộ giải: bè đối vị không dấu lặng; giáo trình (tr. 7) chỉ khuyên tránh nhiều dấu lặng' }], scope: 'bè đối vị (bè tự do)' },
}
const NO_GAP_TEXT = 'Bè đối vị đi liền, không có chỗ trống (dấu lặng) giữa chừng'

export function counterpointRulebook(): Rulebook {
  const ev = new EvidenceRegistry()
  ev.addSource(fromCurated(BOOK, 'secondary', 'verified', 'Giáo trình biên soạn theo hệ Taneyev; là nguồn duy nhất của sổ luật này. Trang = trang in (= trang PDF − 2).'))
  ev.addSource({ id: CONVENTION, type: 'unverified-claim', verification: 'unverified', origin: 'umre', authors: [], title: 'Quy ước ra đề của người dạy (✱, nốt đen chuẩn bị)', note: 'Do Lamar truyền đạt khi kiểm toán luật (17/11/2026); chưa có văn bản để đối chiếu. Không phải luật của sách.' })
  ev.addSource({ id: INTERNAL, type: 'internal-interpretation', verification: 'unverified', origin: 'umre', authors: [], title: 'Cách hiểu của người biên soạn', note: 'Điều bộ giải đang áp mà giáo trình không nói thẳng.' })

  const cite = (owner: string, cs: Cite[]): string[] =>
    cs.map((c, i) => {
      const id = `${owner}#${i + 1}`
      const citation: Citation = {
        id, sourceId: c.src, locator: c.loc ?? null, scope: owner,
        verification: c.src === BOOK ? (c.v ?? 'verified') : 'unverified',
        ...(c.note ? { note: c.note } : {}),
        // the 17/11 audit table was made by the assistant reading the scan; no person has checked it yet
        ...(c.src === BOOK ? { checkedBy: 'assistant' as const } : {}),
      }
      ev.addCitation(citation)
      return id
    })

  const rules: RuleSpec[] = (Object.keys(RULE_CITES) as (RuleId | 'no-gap')[]).map((id) => {
    const x = RULE_CITES[id]
    return {
      id,
      statement: id === 'no-gap' ? NO_GAP_TEXT : RULES[id].text,
      severity: id === 'no-gap' || !isSoft(id) ? 'hard' : 'soft',
      citations: cite(id, x.cites),
      scope: x.scope ?? 'đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản',
      ...(x.caveat ? { caveat: x.caveat } : {}),
    }
  })

  const exceptions: ExceptionSpec[] = [
    {
      id: 'fourth-upper-pair', statement: 'Quãng 4 đúng là quãng thuận ở cặp bè trên của ba – bốn bè (ba bè: I–II; bốn bè: I–II, II–III)',
      lifts: ['dis-strong', 'dis-weak'], scope: 'chỉ cặp bè trên của ba – bốn bè; không áp cho hai bè hay cặp có bè trầm', enabledBy: 'context',
      citations: cite('fourth-upper-pair', [P('tr. 37–45')]),
    },
    {
      id: 'quarter-prep', statement: 'Nốt đen được làm nốt chuẩn bị (và được nối sang) nốt lưu ở phách mạnh',
      lifts: ['tie', 'dis-strong'], scope: 'chỉ khi đề bật tuỳ chọn này; chỉ nối qua vạch nhịp vào quãng nghịch', enabledBy: 'task-option',
      citations: cite('quarter-prep', [{ src: CONVENTION }]),
    },
  ]
  const definitions: Definition[] = [
    {
      id: 'def.dissonance', statement: 'Quãng nghịch: quãng 2, 7, quãng tăng, giảm và quãng 4 đúng; quãng thuận hoàn toàn: đồng âm, 5 đúng, 8 đúng; thuận không hoàn toàn: 3, 6 (trưởng, thứ) và quãng kép', citations: cite('def.dissonance', [P('tr. 10')]),
      // [steps within the octave (0 = unison/octave), quality]
      data: { perfect: [[0, 'P'], [4, 'P']], imperfect: [[2, 'm'], [2, 'M'], [5, 'm'], [5, 'M']] },
    },
    { id: 'def.strong-beat', statement: 'Phách mạnh = phách đầu ô nhịp (mức 3 trong mã); phách nhẹ = các phách còn lại', citations: cite('def.strong-beat', [{ src: INTERNAL, note: 'cách bộ giải đặt mức phách (model.strength); chưa đối chiếu chữ của sách' }]), caveat: 'Độ mạnh phách là quy ước của bộ giải, chưa đối chiếu nguyên văn giáo trình.' },
  ]
  return { id: COUNTERPOINT_RULEBOOK_ID, version: COUNTERPOINT_RULEBOOK_VERSION, domain: 'counterpoint', title: 'Phức điệu nghiêm khắc (Phạm Tú Hương 1991, theo Taneyev) — luật bộ giải đang áp', rules, exceptions, definitions, evidence: ev }
}
