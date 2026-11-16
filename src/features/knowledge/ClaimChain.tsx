import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useBibliography } from '../sources/data'
import { checkClaim, chainOf, worst, type Issue } from './check'
import { citeOf, useLibHas } from './useLib'
import { graphHref, hrefOf } from './ids'
import { STANCE, VERIFICATION, type Claim } from './model'
import { remove, useKnowledge } from './store'

const STATUS: Record<Claim['status'], string> = { open: 'Đang xét', settled: 'Đã vững (theo bạn)', contested: 'Đang tranh luận' }

export function Issues({ issues }: { issues: Issue[] }) {
  if (!issues.length) return <p className="kg-ok">Đủ chuỗi nguồn theo những gì đã ghi.</p>
  return (
    <ul className="kg-issues">
      {issues.map((i, n) => (
        <li key={n} className={`is-${i.level}`}>{i.text}</li>
      ))}
    </ul>
  )
}

/** Luận điểm → Bằng chứng → Trích dẫn → Tài liệu gốc → Trang cụ thể, read-only, with the checks. */
export function ClaimChain({ claimId, editable = false }: { claimId: string; editable?: boolean }) {
  const k = useKnowledge()
  const { data: bib } = useBibliography()
  const libHas = useLibHas()
  const claim = k.claims.find((c) => c.id === claimId)
  if (!claim) return null
  const chain = chainOf(claim, k, libHas)
  const issues = checkClaim(claim, k, libHas)
  return (
    <div className={clsx('kg-chain', `is-${worst(issues) ?? 'ok'}`)}>
      <p className="kg-chain-head">
        <span className="kg-step">Luận điểm</span> {claim.text} <span className="kg-tag">{STATUS[claim.status]}</span>
      </p>
      <p className="kg-note">Nhận định nghiên cứu — đứng được tới đâu là do chuỗi bằng chứng dưới đây.</p>
      {chain.length > 0 && (
        <ol className="kg-chain-list">
          {chain.map(({ evidence: e, mine, found }) => {
            const cite = citeOf(e.source, k, bib?.byId, e.page)
            const href = hrefOf(e.source)
            return (
              <li key={e.id}>
                <p>
                  <span className="kg-step">Bằng chứng</span> <span className={clsx('kg-tag', e.stance === 'contradicts' && 'is-against')}>{STANCE[e.stance]}</span>
                  {e.quote && <q className="kg-quote">{e.quote}</q>}
                  {e.note && <span className="kg-sub">{e.note}</span>}
                </p>
                <p>
                  <span className="kg-step">Trích dẫn</span> {cite ?? <span className="kg-warn">Không tìm thấy tài liệu {e.source}</span>}
                </p>
                <p>
                  <span className="kg-step">Tài liệu gốc</span>{' '}
                  {found && href ? <Link to={href} className="wiki-link">{e.source}</Link> : e.source}
                  {mine && <span className="kg-sub"> · {mine.role === 'primary' ? 'sơ cấp' : 'thứ cấp'} · {VERIFICATION[mine.verification].label}</span>}
                  {' · '}
                  <Link to={graphHref(e.source)} className="wiki-link">đồ thị</Link>
                </p>
                <p>
                  <span className="kg-step">Trang</span> {e.page?.trim() ? `tr. ${e.page}` : <span className="kg-warn">chưa ghi</span>} {e.checked ? '· đã đối chiếu bản gốc' : '· chưa đối chiếu'}
                </p>
                {editable && <button className="kg-del" onClick={() => remove('evidence', e.id)}>Xoá bằng chứng</button>}
              </li>
            )
          })}
        </ol>
      )}
      <Issues issues={issues} />
    </div>
  )
}
