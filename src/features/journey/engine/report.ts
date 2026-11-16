import type { EvidenceDef } from './types'

/**
 * The research report closing an investigation: question, evidence, analysis, conclusion, references. It becomes a
 * project draft at the research desk (/research), in the library's own markup ([[slug]] links to articles), so the
 * references are the evidence's real sources and nothing else.
 */
export interface ReportInput {
  title: string
  question: string
  evidence: EvidenceDef[]
  analysis: string
  conclusion: string
}

const KIND: Record<EvidenceDef['kind'], string> = { primary: 'nguồn sơ cấp', secondary: 'nguồn thứ cấp', artifact: 'hiện vật', interpretation: 'diễn giải', anecdote: 'giai thoại', hypothesis: 'giả thuyết', fiction: 'hư cấu' }
const WEAK: EvidenceDef['kind'][] = ['anecdote', 'fiction']

/** What still keeps the report from standing; empty when it can be saved. */
export function reportProblems(r: ReportInput): string[] {
  const out: string[] = []
  if (!r.question.trim()) out.push('Thiếu câu hỏi nghiên cứu.')
  const solid = r.evidence.filter((e) => !WEAK.includes(e.kind) && e.source)
  if (solid.length < 2) out.push('Cần ít nhất hai chứng cứ có nguồn (không tính giai thoại hay chi tiết hư cấu).')
  const weak = r.evidence.filter((e) => WEAK.includes(e.kind))
  if (weak.length) out.push(`Bỏ ra hoặc chỉ nêu như bối cảnh: ${weak.map((e) => e.title).join(', ')} — không làm chỗ dựa được.`)
  if (r.analysis.trim().length < 80) out.push('Phần phân tích cần vài câu: chứng cứ nào nói gì, vì sao tin được tới đâu.')
  if (!r.conclusion.trim()) out.push('Thiếu kết luận.')
  return out
}

const slugOf = (e: EvidenceDef) => (e.source?.startsWith('a:') ? e.source.slice(2) : null)

export function reportDraft(r: ReportInput): { draft: string; articles: string[] } {
  const articles = [...new Set(r.evidence.map(slugOf).filter((x): x is string => !!x))]
  const lines = [
    '## Câu hỏi nghiên cứu',
    r.question.trim(),
    '',
    '## Chứng cứ',
    ...r.evidence.map((e) => `- **${e.title}** (${KIND[e.kind]}${e.date ? `, ${e.date}` : ''}) — ${e.text}${slugOf(e) ? ` Nguồn: [[${slugOf(e)}]].` : ''} *Độ tin cậy:* ${e.reliability}`),
    '',
    '## Phân tích',
    r.analysis.trim(),
    '',
    '## Kết luận',
    r.conclusion.trim(),
    '',
    '## Tài liệu tham khảo',
    ...articles.map((a) => `- [[${a}]]`),
    '',
    '*Báo cáo viết trong trò chơi Hành trình; chứng cứ lấy từ các bài thư viện ghi ở trên.*',
  ]
  return { draft: lines.join('\n'), articles }
}
