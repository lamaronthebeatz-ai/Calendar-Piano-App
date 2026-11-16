import { Link } from 'react-router-dom'
import { findArticle } from '../theory/wiki'
import type { Lens } from '../analyze/store'
import { graphHref } from './ids'
import { METHODS, methodSlugs } from './methods'
import './knowledge.css'

/** Under an analysis: how each kind of label was reached, what it rests on, how well it was measured. */
export function MethodsPanel({ lens }: { lens: Lens }) {
  const list = METHODS.filter((m) => m.lens.includes(lens))
  return (
    <details className="kg-methods">
      <summary>Phương pháp và căn cứ của phân tích này</summary>
      <p className="kg-note">Mọi nhãn trên bản nhạc là <b>kết quả tính toán</b> của app, không phải phân tích đã kiểm của chuyên gia. Mỗi phương pháp dưới đây ghi căn cứ, độ đúng đã đo và giới hạn.</p>
      {list.map((m) => (
        <section key={m.id}>
          <h4>
            <Link to={graphHref(`m:${m.id}`)} className="wiki-link">{m.title}</Link>
          </h4>
          <p>{m.how}</p>
          <p><b>Căn cứ:</b> {m.basis}</p>
          {m.measured && <p><b>Độ đúng đã đo:</b> {m.measured}</p>}
          <p><b>Giới hạn:</b> {m.limits}</p>
          <p className="flex flex-wrap gap-1">
            {[...new Set(methodSlugs(m))].map((slug) => (
              <Link key={slug} to={`/theory/${slug}`} className="kg-chip is-small">{findArticle(slug)?.title ?? slug}</Link>
            ))}
          </p>
        </section>
      ))}
    </details>
  )
}
