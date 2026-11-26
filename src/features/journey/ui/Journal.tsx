import { useEffect, useState } from 'react'
import type { Save } from '../engine/save'
import type { ArcDef } from '../engine/types'
import { journalOf } from '../engine/narrative'
import { BASIS, KNOWING } from './arcShared'
import { Refs } from './DocumentView'

/**
 * The journal: only what the player has found, in the order it happened — each entry marked by what the player holds
 * (known / a guess / confirmed) and what it rests on (sourced fact / interpretation / fiction). A guess settled later
 * stays, struck through, pointing to what settled it. Nothing not yet discovered is listed, not even as a count.
 */
export function Journal({ arc, save }: { arc: ArcDef; save: Save }) {
  const n = arc.narrative
  if (!n) return <p className="ar-small">Tuyến này chưa có nhật ký.</p>
  const entries = journalOf(n, save)
  if (!entries.length) return <p className="ar-small">Chưa có gì để ghi. Hãy nhìn quanh, hỏi chuyện.</p>
  const decisions = entries.filter((e) => e.kind === 'decision')
  return (
    <div className="st-journal">
      <p className="st-premise">
        <b>{n.title}</b> <span className={`st-basis is-${n.basis}`}>{BASIS[n.basis]}</span>
      </p>
      <ol className="st-entries">
        {entries
          .filter((e) => e.kind !== 'decision')
          .map((e) => (
            <li key={e.beat} className={`st-entry is-${e.knowing}${e.settledBy ? ' is-settled' : ''}`}>
              <p className="st-chips">
                <span className={`st-know is-${e.knowing}`}>{KNOWING[e.knowing]}</span>
                <span className={`st-basis is-${e.basis}`}>{BASIS[e.basis]}</span>
                {e.settledBy && <span className="st-settled">đã có lời giải ở dưới</span>}
              </p>
              <p className="st-text">{e.text}</p>
              <Refs arc={arc} refs={e.refs} />
              {e.refs?.filter((r) => r.startsWith('a:')).map((r) => <Provenance key={r} id={r} />)}
            </li>
          ))}
      </ol>
      {decisions.length > 0 && (
        <>
          <p className="jr-kicker st-dec-head">Quyết định của bạn</p>
          <ul className="st-entries">
            {decisions.map((e) => (
              <li key={e.beat} className="st-entry is-decision">
                <p className="st-text">{e.text}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

/** How UMK records an article's provenance (kind, verification) — loaded on demand, read as it is, never upgraded. */
function Provenance({ id }: { id: string }) {
  const [p, setP] = useState<{ kind: string; verification: string } | null>(null)
  useEffect(() => {
    let live = true
    import('../../../umk/api').then((m) => {
      const u = m.getKnowledge(id as Parameters<typeof m.getKnowledge>[0])
      if (live && u) setP({ kind: u.provenance.kind, verification: u.provenance.verification })
    })
    return () => {
      live = false
    }
  }, [id])
  if (!p) return null
  const V: Record<string, string> = { verified: 'đã kiểm chứng', partial: 'kiểm chứng một phần', unverified: 'chưa kiểm chứng', disputed: 'đang tranh luận' }
  return <p className="st-prov">UMK: nguồn loại {p.kind} · {V[p.verification] ?? p.verification}</p>
}
