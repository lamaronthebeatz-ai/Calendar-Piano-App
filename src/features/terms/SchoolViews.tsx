import { Link } from 'react-router-dom'
import { findArticle } from '../theory/wiki'
import { SCHOOLS } from './schools'

/** "Mỗi trường phái hiểu thế nào": one row per school, each pointing to the article that argues it. */
export function SchoolViews({ slug, here }: { slug: string; here?: boolean }) {
  const entry = SCHOOLS[slug]
  if (!entry) return null
  return (
    <section className="term-schools">
      <h3>Mỗi trường phái hiểu thế nào</h3>
      <dl>
        {entry.views.map((v) => (
          <div key={v.school + v.view}>
            <dt>{v.school}</dt>
            <dd>
              {v.view}{' '}
              {!(here && v.from === slug) && (
                <Link to={`/theory/${v.from}`} className="term-schools-src">→ {findArticle(v.from)?.title ?? v.from}</Link>
              )}
            </dd>
          </div>
        ))}
      </dl>
      {entry.compare && entry.compare !== slug && (
        <Link to={`/theory/${entry.compare}`} className="term-names-link">Đọc bảng đối chiếu đầy đủ: {findArticle(entry.compare)?.title}</Link>
      )}
    </section>
  )
}
