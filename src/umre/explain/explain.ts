import { formatCitation, LABEL, type EvidenceRegistry } from '../evidence/evidence'
import type { ExecutionStatus, ValidatedSolution } from '../orchestration/solver'
import { ruleOf, type Rulebook } from '../rulebook/rulebook'
import type { Task } from '../task'
import { stepsOf, type Trace } from './trace'

/**
 * Explanations are assembled ONLY from the run's own records: the trace, the validation results and the rulebook.
 * Each statement says what kind of claim it is and points to the records it rests on, so a test (and a reader) can
 * check it. Nothing is generated from general knowledge; a language model may later rephrase the text, but the
 * statements, their kinds and their references are fixed here.
 */
export type StatementKind = 'fact' | 'rule' | 'inference' | 'hypothesis' | 'limitation'
export type Topic = 'problem' | 'assumption' | 'rulebook' | 'rule' | 'search' | 'eliminated' | 'solution' | 'validation' | 'conclusion' | 'limit' | 'error'
export type ExplanationLevel = 'basic' | 'technical' | 'academic'

export type Statement = {
  readonly id: string
  readonly kind: StatementKind
  readonly topic: Topic
  /** basic: for a learner; technical: ids and numbers; academic: adds sources (rendered from `refs.citations`) */
  readonly text: { readonly basic: string | null; readonly technical: string }
  readonly refs: { readonly steps: readonly string[]; readonly rules: readonly string[]; readonly citations: readonly string[]; readonly solutions: readonly number[] }
}
export type Explanation = { readonly id: string; readonly taskId: string; readonly status: ExecutionStatus; readonly statements: readonly Statement[] }

export type ExplainInput = {
  readonly task: Task
  readonly status: ExecutionStatus
  readonly statusReason: string
  readonly solverId: string | null
  readonly solutions: readonly ValidatedSolution[]
  readonly rejected: readonly ValidatedSolution[]
  readonly rulebook: Rulebook | null
  readonly trace: Trace
  readonly error?: { readonly code: string; readonly message: string }
}

const KIND_VI: Record<StatementKind, string> = { fact: 'Dữ kiện', rule: 'Luật', inference: 'Suy luận', hypothesis: 'Giả thuyết', limitation: 'Giới hạn' }

export function explain(x: ExplainInput): Explanation {
  const out: Statement[] = []
  let n = 0
  const add = (kind: StatementKind, topic: Topic, basic: string | null, technical: string, refs: Partial<Statement['refs']> = {}) =>
    out.push({ id: `${x.task.id}/e${++n}`, kind, topic, text: { basic, technical }, refs: { steps: refs.steps ?? [], rules: refs.rules ?? [], citations: refs.citations ?? [], solutions: refs.solutions ?? [] } })
  const one = (op: string) => stepsOf(x.trace, op)[0]
  const ids = (...ops: string[]) => ops.map(one).filter(Boolean).map((s) => s.id)
  const rb = x.rulebook
  const cites = (ruleIds: readonly string[]) => (rb ? ruleIds.flatMap((r) => ruleOf(rb, r)?.citations ?? rb.exceptions.find((e) => e.id === r)?.citations ?? []) : [])

  /* the problem */
  const recv = one('receive')
  const prob = one('solver:problem')
  const po = prob?.output as Record<string, unknown> | undefined
  add('fact', 'problem', po ? `Bài: ${po.summary}.` : `Bài loại ${x.task.type}.`, `Nhiệm vụ ${x.task.id}: loại ${x.task.type}, lĩnh vực ${x.task.domain}${po ? `; ${po.summary}` : ''}.`, { steps: ids('receive', 'solver:problem') })
  if (!recv) add('limitation', 'limit', null, 'Truy vết không có bước tiếp nhận nhiệm vụ.')

  /* rulebook and assumptions */
  if (rb) add('fact', 'rulebook', `Dùng bộ luật "${rb.title}".`, `Sổ luật ${rb.id}@${rb.version} (${rb.rules.filter((r) => r.severity === 'hard').length} luật bắt buộc, ${rb.rules.filter((r) => r.severity === 'soft').length} luật khuyến nghị).`, { steps: ids('rulebook') })
  const dom = one('solver:domain')
  if (dom) {
    add('fact', 'assumption', `Máy tìm trong miền: ${dom.output as string}.`, `Miền tìm kiếm (do bộ giải khai báo): ${dom.output as string}.`, { steps: [dom.id] })
    add('limitation', 'limit', 'Mọi kết luận "có" hay "không có" lời giải chỉ đúng trong miền tìm kiếm này.', 'Kết luận về sự tồn tại lời giải chỉ có giá trị trong miền tìm kiếm đã nêu.', { steps: [dom.id] })
  }
  const opt = (x.task.params as { quarterPrep?: boolean } | null)?.quarterPrep
  if (opt) add('rule', 'assumption', 'Đề cho phép nốt đen chuẩn bị nốt lưu (quy ước của người dạy, không phải luật của sách).', 'Ngoại lệ quarter-prep bật theo đề.', { rules: ['quarter-prep'], citations: cites(['quarter-prep']), steps: ids('receive') })

  /* rules that mattered: every hard rule judged, plus soft ones that fired */
  const validations = [...x.solutions, ...x.rejected].map((s) => s.validation)
  if (rb) {
    // with a validated candidate, the rules actually judged; without one, only what the rulebook holds
    const fromValidation = validations[0]?.outcomes.filter((o) => o.severity === 'hard' && o.outcome !== 'not-applicable').map((o) => o.ruleId)
    const judged = fromValidation ?? rb.rules.filter((r) => r.severity === 'hard').map((r) => r.id)
    add('rule', 'rule',
      fromValidation ? `Có ${judged.length} luật bắt buộc được áp.` : `Sổ luật có ${judged.length} luật bắt buộc.`,
      fromValidation ? `Luật bắt buộc đã kiểm cho bài này: ${judged.join(', ')}.` : `Luật bắt buộc của sổ luật (không có phương án nào để xác định luật nào áp): ${judged.join(', ')}.`,
      { rules: judged, citations: cites(judged), steps: ids('rulebook') })
    // a rule whose reading goes beyond the source's words is a hypothesis, said as such
    for (const r of judged.map((id) => ruleOf(rb, id)!).filter((r) => r?.caveat)) add('hypothesis', 'rule', r.caveat!, `${r.id}: ${r.caveat}`, { rules: [r.id], citations: r.citations })
    // the evidence store may fail; a citation that cannot be read is reported, never treated as checked
    const state = (c: string) => {
      try {
        return rb.evidence.citation(c).verification
      } catch {
        return null
      }
    }
    const lost = judged.filter((id) => ruleOf(rb, id)!.citations.some((c) => state(c) === null))
    const weak = judged.filter((id) => !lost.includes(id) && ruleOf(rb, id)!.citations.every((c) => state(c) === 'unverified'))
    if (weak.length) add('limitation', 'limit', `Một số luật đang áp chưa có văn bản nguồn đối chiếu (${weak.length} luật).`, `Luật dựa trên nguồn chưa xác minh: ${weak.join(', ')}.`, { rules: weak, citations: cites(weak) })
    if (lost.length) add('limitation', 'limit', `Không truy được nguồn của ${lost.length} luật.`, `Không đọc được trích dẫn của: ${lost.join(', ')} — căn cứ của các luật này chưa hiển thị được.`, { rules: lost })
  }

  /* the search */
  const search = one('solver:search')
  if (search) {
    const o = search.output as Record<string, unknown>
    add('fact', 'search', `Máy đã thử ${o.nodes} bước tìm và trả về ${o.solutions} phương án.`, `Bộ giải ${x.solverId}: ${o.nodes} nút, trạng thái riêng "${o.status}", ${o.solutions} phương án${o.disputed ? `, ${o.disputed} phương án bị hai bộ kiểm của nó bất đồng` : ''}.`, { steps: [search.id] })
  } else if (x.solverId) add('limitation', 'limit', null, 'Truy vết ở mức tóm tắt: không có chi tiết quá trình tìm kiếm.')
  const blockers = one('solver:blockers')
  const bl = (blockers?.output as { rule: string; bar: number; count: number; version: string }[] | undefined) ?? []
  if (blockers && bl.length) {
    const rules = [...new Set(bl.map((b) => b.rule))]
    add('fact', 'eliminated', `Những nhánh bị loại xa nhất vướng các luật: ${rules.join(', ')}.`, `Ở điểm xa nhất bộ giải đi tới, nhánh bị loại vì: ${bl.map((b) => `${b.rule} (ô ${b.bar}, ${b.version}, ${b.count} lần)`).join('; ')}.`, { steps: [blockers.id], rules: rules.filter((r) => rb && ruleOf(rb, r)), citations: cites(rules) })
  }
  const proof = one('solver:proof')

  /* validation of each candidate */
  const vsteps = stepsOf(x.trace, 'validate')
  const all = [...x.solutions.map((s) => ({ s, ok: true })), ...x.rejected.map((s) => ({ s, ok: false }))]
  all.forEach(({ s }, i) => {
    const v = s.validation
    const step = vsteps.find((st) => (st.input as { solution?: string })?.solution === s.score.id)
    const c = v.coverage
    const broken = [...new Set(v.violations.map((y) => y.ruleId))]
    add('fact', 'validation',
      v.status === 'VALID' ? `Phương án ${i + 1} được kiểm lại độc lập: đúng mọi luật bắt buộc.` : `Phương án ${i + 1} được kiểm lại độc lập: ${v.status === 'INVALID' ? `sai luật ${broken.join(', ')}` : v.status === 'INCOMPLETE' ? 'chưa đủ dữ liệu' : 'chưa kết luận được'}.`,
      `${s.score.id}: ${v.status} (bộ kiểm ${v.validator.id}@${v.validator.version}; phủ ${c.checked}/${c.hardRules - c.notApplicable} luật bắt buộc, vi phạm ${c.violated}, bất đồng ${c.disputed}, không kiểm được ${c.uncheckable}; ngoại lệ đã áp ${c.exceptionsApplied.length})${v.reasons.length ? ` — ${v.reasons.join('; ')}` : ''}${v.status === 'VALID' ? (s.confirmation.independent ? '; mọi luật bắt buộc được xác nhận bởi bộ kiểm mà bộ giải không dùng' : `; CHƯA xác nhận độc lập với bộ giải ở: ${s.confirmation.unconfirmed.join(', ')}`) : ''}.`,
      { steps: step ? [step.id] : [], rules: broken, citations: cites(broken), solutions: [i] })
  })

  /* conclusion: what the status allows us to say, and nothing more */
  const decide = one('decide')
  const ds = decide ? [decide.id] : []
  switch (x.status) {
    case 'SOLVED': {
      const n = x.solutions.length
      add('inference', 'conclusion', `Có ${n} lời giải đúng luật.`, `${n} phương án được bộ kiểm độc lập công nhận VALID; chỉ các phương án này được gọi là lời giải.`, { steps: ds, solutions: x.solutions.map((_, i) => i) })
      add('limitation', 'limit', 'Luật khuyến nghị chỉ được bộ kiểm của chính bộ giải chấm, chưa có bộ kiểm độc lập.', 'Luật mềm (khuyến nghị) chỉ do search-rules chấm, không độc lập; bộ kiểm umre-native chỉ phủ một phần luật và chỉ ở nguyên thể.', { steps: ds })
      break
    }
    case 'PROVEN_UNSAT':
      add('inference', 'conclusion', 'Không có lời giải đúng luật trong miền tìm kiếm.', `Bộ giải có năng lực chứng minh vô nghiệm và báo vô nghiệm: ${(proof?.output as string) ?? x.statusReason}.`, { steps: [...ds, ...(proof ? [proof.id] : [])] })
      add('limitation', 'limit', 'Kết luận này chỉ trong miền tìm kiếm đã nêu; không kiểm lại độc lập được (không có phương án để kiểm).', 'Vô nghiệm là kết luận của bộ giải trong miền của nó; bộ kiểm chứng không có gì để kiểm lại.', { steps: ds })
      break
    case 'UNKNOWN':
      add('limitation', 'conclusion', `Chưa kết luận được: ${x.statusReason}`, `Trạng thái UNKNOWN: ${x.statusReason}. Không suy ra có hay không có lời giải.`, { steps: ds })
      break
    case 'TIMEOUT':
      add('limitation', 'conclusion', 'Hết giờ trước khi tìm xong: chưa biết bài có lời giải hay không.', `TIMEOUT: ${x.statusReason}. Không suy ra vô nghiệm.`, { steps: ds })
      break
    case 'CANCELLED':
      add('fact', 'conclusion', 'Việc giải đã bị huỷ.', `CANCELLED: ${x.statusReason}.`, { steps: ds })
      break
    case 'ERROR':
      add('fact', 'error', 'Có lỗi kỹ thuật; đây không phải kết luận về bài toán.', `ERROR ${x.error?.code ?? ''}: ${x.error?.message ?? x.statusReason}. Lỗi kỹ thuật không phải là vô nghiệm.`, { steps: ds })
      break
  }
  return { id: `${x.task.id}/explanation`, taskId: x.task.id, status: x.status, statements: out }
}

/** Plain text at one of the three levels. Academic adds the claim kind and the sources with their checking state. */
export function renderExplanation(e: Explanation, level: ExplanationLevel, evidence?: EvidenceRegistry): string {
  const lines: string[] = []
  for (const s of e.statements) {
    if (level === 'basic') {
      if (s.text.basic) lines.push(`- ${s.text.basic}`)
      continue
    }
    const head = level === 'academic' ? `[${KIND_VI[s.kind]}] ` : ''
    lines.push(`- ${head}${s.text.technical}`)
    if (level === 'academic' && evidence && s.refs.citations.length) {
      // one line per distinct reference, listing the rules it supports
      const grouped = new Map<string, string[]>()
      for (const c of [...new Set(s.refs.citations)]) {
        const cit = evidence.citation(c)
        const src = evidence.source(cit.sourceId)
        const line = `${formatCitation(cit, src)}${cit.note ? ` (${cit.note})` : ''} — ${LABEL[src.type]}`
        grouped.set(line, [...(grouped.get(line) ?? []), cit.scope])
      }
      for (const [line, scopes] of grouped) lines.push(`  · ${line} [${scopes.join(', ')}]`)
    }
  }
  return lines.join('\n')
}
