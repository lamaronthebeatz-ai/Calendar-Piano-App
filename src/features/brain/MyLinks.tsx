import { Link, useNavigate } from 'react-router-dom'
import { useProjects } from '../research/store'
import { createBrainNote } from './store'
import { nodeInfo, useBrainGraph } from './graph'
import type { NodeKey } from './links'
import './brain.css'

/**
 * The second brain's side of an article: the notes, projects and annotations of Lamar's that point here, and one tap
 * to start a new note about it (already linked back). Shown under the article, beside its library links.
 */
export function MyLinks({ slug, title }: { slug: string; title: string }) {
  const navigate = useNavigate()
  const projects = useProjects()
  const graph = useBrainGraph()
  const key: NodeKey = `a:${slug}`
  const into = graph.into(key).filter((k) => k !== key)
  return (
    <section aria-label="Trong sổ tay của bạn" className="bn-mine space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="min-w-0 flex-1 font-display text-[17px] font-semibold text-[var(--color-ink)]">Trong sổ tay của bạn</h2>
        <button onClick={() => navigate(`/brain/${createBrainNote(`Về ${title}`, `[[${slug}]]\n\n`).id}?edit`)} className="btn-line rounded-full px-4 py-1.5 text-[13px]">
          + Ghi chú về bài này
        </button>
      </div>
      {into.length ? (
        <div className="bn-row">
          {into.map((k) => {
            const info = nodeInfo(k, projects)
            return info ? (
              <Link key={k} to={info.href} className="bn-chip">
                <span className="bn-kind">{info.kind}</span>
                {info.label}
              </Link>
            ) : null
          })}
        </div>
      ) : (
        <p className="bn-empty">Chưa có ghi chú hay đề tài nào của bạn nhắc tới bài này.</p>
      )}
    </section>
  )
}
