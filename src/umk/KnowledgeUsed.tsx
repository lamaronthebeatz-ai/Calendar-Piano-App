import { Link } from 'react-router-dom'
import type { EntityId } from '../features/knowledge/ids'
import { getKnowledge } from './api'
import { EPISTEMIC, gapLabel } from './labels'
import type { ReasoningContext, ReasoningRecord } from './schema'
import './umk.css'


const linkOf = (id: EntityId) => (id.startsWith('a:') ? `/theory/${id.slice(2)}` : `/umk?id=${encodeURIComponent(id)}`)

/**
 * "Tri thức đã dùng": the UMK context a reasoning run was given and, once it ran, its record — tradition, rulebooks,
 * concepts, premises, how far the result is established, and the gaps (missing / weak knowledge) it exposed.
 */
export function KnowledgeUsed({ ctx, record, max = 8 }: { ctx: ReasoningContext; record?: ReasoningRecord | null; max?: number }) {
  const gaps = record?.gaps ?? ctx.gaps
  const shown = gaps.filter((g) => g.kind !== 'open-question' && g.kind !== 'unverified-source')
  const standing = gaps.length - shown.length
  return (
    <details className="umk-used" data-umk-context={ctx.id}>
      <summary>Tri thức UMK đã dùng{record ? ` · ${EPISTEMIC[record.epistemic].split(':')[0].split(' —')[0]}` : ''}</summary>
      {ctx.tradition && <p><b>Truyền thống lý thuyết:</b> {ctx.tradition}</p>}
      {ctx.rulebooks.length > 0 && (
        <p>
          <b>Sổ luật:</b>{' '}
          {ctx.rulebooks.map((r) => (
            <Link key={r.id} to={`/umk?id=${encodeURIComponent(`rb:${r.id}@${r.version}`)}`}>{`${r.id}@${r.version}`}</Link>
          ))}{' '}
          · {ctx.rules.length} mục (luật, ngoại lệ, định nghĩa, câu hỏi mở)
        </p>
      )}
      {ctx.concepts.length > 0 && (
        <p>
          <b>Khái niệm:</b>{' '}
          {ctx.concepts.slice(0, max).map((c, i) => (
            <span key={c}>
              {i > 0 && ', '}
              <Link to={linkOf(c)}>{getKnowledge(c)?.title ?? c}</Link>
            </span>
          ))}
          {ctx.concepts.length > max && ` và ${ctx.concepts.length - max} khái niệm khác`}
        </p>
      )}
      {'globalKey' in ctx.premises && <p><b>Tiền đề của người phân tích:</b> giọng chủ đã chọn</p>}
      {record && (
        <p className="umk-epi" data-epistemic={record.epistemic}>
          <b>Mức xác lập:</b> {EPISTEMIC[record.epistemic]}
          {record.umre && <> · UMRE {record.umre.engine}{record.umre.solver ? ` · ${record.umre.solver}` : ''}{record.umre.validator ? ` · bộ kiểm ${record.umre.validator}` : ''}</>}
        </p>
      )}
      {shown.length > 0 && (
        <ul className="umk-gaps">
          {shown.map((g) => (
            <li key={g.id}><b>{gapLabel(g.kind)}:</b> {g.text}</li>
          ))}
        </ul>
      )}
      {standing > 0 && <p className="umk-note">{standing} điểm của sổ luật còn mở hoặc chưa đối chiếu nguồn — xem ở <Link to="/umk?tab=gaps">Trung tâm tri thức</Link>.</p>}
      <p className="umk-note">Ngữ cảnh <code>{ctx.id}</code> · lược đồ UMK {ctx.schema}</p>
    </details>
  )
}
