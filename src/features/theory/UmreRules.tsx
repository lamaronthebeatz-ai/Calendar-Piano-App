import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { RuleView } from '../../umre/theory'

const STANDING: Record<string, string> = { hard: 'bắt buộc', recommendation: 'khuyến nghị', permitted: 'được phép', exception: 'ngoại lệ', ambiguous: 'chưa rõ' }

/**
 * Under an article whose rules the engine applies: each rule as UMRE holds it — id, standing, scope, source page and
 * how far it has been checked — so a reader goes from the concept to the rule the app's checkers use.
 */
export function UmreRules({ slug }: { slug: string }) {
  const [rules, setRules] = useState<RuleView[] | null>(null)
  useEffect(() => {
    let live = true
    void import('../../umre/theory').then((m) => live && setRules(m.rulesForArticle(slug)))
    return () => {
      live = false
    }
  }, [slug])
  if (!rules?.length) return null
  return (
    <details className="kg-methods" data-umre-rules>
      <summary>Luật trong bộ máy UMRE ({rules.length})</summary>
      <p className="kg-note">Các luật của bài này mà bộ kiểm của app áp dụng — ở <Link to="/counterpoint" className="wiki-link">Giải phức điệu</Link> và phần phân tích UMRE ở <Link to="/analyze" className="wiki-link">Phân tích tác phẩm</Link>. Mức kiểm chứng ghi đúng như hiện có.</p>
      <ul className="space-y-2">
        {rules.map((r) => (
          <li key={r.id} className="text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
            <b className="text-[var(--color-ink)]">{r.name}</b> <code className="text-[11px]">{r.id}</code> · {STANDING[r.standing] ?? r.standing}
            <br />
            {r.statement}
            <br />
            <span className="text-[12px] text-[var(--color-ink-faint)]">
              Phạm vi: {r.scope}. Nguồn: {r.source}{r.pages !== '—' ? `, ${r.pages}` : ''} — {r.verification}. {r.applied ? `${r.applied}. ` : ''}Sổ luật {r.rulebook}.
              {r.caveat ? ` Lưu ý: ${r.caveat}` : ''}
            </span>
          </li>
        ))}
      </ul>
    </details>
  )
}
