import { Link } from 'react-router-dom'
import { findArticle } from '../../../theory/wiki'
import type { ArcDef, LocationDef } from '../../engine/types'
import type { Facing } from '../../scene/types'
import { KIND, useEscape } from '../arcShared'

type Obj = NonNullable<LocationDef['objects']>[number]

/** A close look at a thing: what it gave (items, evidence, articles), read from the arc's own definitions. */
export function Examine({ arc, label, object, onClose }: { arc: ArcDef; label: string; object?: Obj; onClose: () => void }) {
  useEscape(onClose)
  const fx = object?.effects ?? []
  const items = fx.flatMap((e) => ('give' in e ? [arc.items.find((i) => i.id === e.give)] : [])).filter((x) => !!x)
  const evidence = fx.flatMap((e) => ('evidence' in e ? [arc.evidence.find((v) => v.id === e.evidence)] : [])).filter((x) => !!x)
  const reads = fx.flatMap((e) => ('discover' in e && e.discover.startsWith('a:') ? [findArticle(e.discover.slice(2))] : [])).filter((x) => !!x)
  return (
    <div className="ar-dialog" role="dialog" aria-label={`Xem: ${label}`}>
      <div className="jr-dialog ar-dialog-box wk-examine">
        <p className="jr-kicker">Xem xét</p>
        <p className="jr-speaker-name">{label}</p>
        {items.map((i) => (
          <div key={i.id} className="wk-found">
            <b>{i.name}</b>
            <p className="jr-line">{i.text}</p>
            <small>Đã cho vào túi đồ.</small>
          </div>
        ))}
        {evidence.map((v) => (
          <div key={v.id} className="wk-found is-evidence">
            <span className="ar-voice is-fiction">{KIND[v.kind]}</span> <b>{v.title}</b>
            <p className="ar-small">{v.reliability}</p>
            <small>Đã ghi vào sổ chứng cứ.</small>
          </div>
        ))}
        {!items.length && !evidence.length && <p className="jr-line">Không có gì mới ở đây.</p>}
        {reads.length ? (
          <p className="ar-refs">
            {reads.map((a) => (
              <Link key={a.slug} to={`/theory/${a.slug}`} className="ar-ref">📖 {a.title}</Link>
            ))}
          </p>
        ) : null}
        <button className="jr-cta ar-next" autoFocus onClick={onClose}>Xong</button>
        <button className="ar-close" onClick={onClose} aria-label="Đóng">✕</button>
      </div>
    </div>
  )
}

/** What the figure sees from a lookout: a line of scene description (not story content). */
export function Lookout({ label, text, onClose }: { label: string; text: string; onClose: () => void }) {
  useEscape(onClose)
  return (
    <div className="ar-dialog" role="dialog" aria-label={`Nhìn: ${label}`}>
      <div className="jr-dialog ar-dialog-box">
        <p className="jr-kicker">Quan sát</p>
        <p className="jr-speaker-name">{label}</p>
        <p className="jr-line is-narration">{text}</p>
        <button className="jr-cta ar-next" autoFocus onClick={onClose}>Xong</button>
        <button className="ar-close" onClick={onClose} aria-label="Đóng">✕</button>
      </div>
    </div>
  )
}

/** A flat, ink-outlined figure; the state classes on its wrapper move its parts (transforms only). */
export function Figure({ look, facing, bump }: { look: 'traveller' | 'monk' | 'scholar'; facing: Facing; bump?: number }) {
  return (
    <div className="wk-flip" style={{ transform: `scaleX(${facing})` }}>
      <div className="wk-body" key={bump ? `b${bump}` : undefined} data-bump={bump ? '1' : undefined}>
        <span className="wk-shadow" />
        <span className="wk-leg is-back" />
        <span className="wk-leg is-front" />
        <svg className="wk-robe" viewBox="0 0 80 120" aria-hidden="true">
          {look === 'traveller' ? (
            <>
              <path d="M22 4H58L72 116H8Z" fill="#8a5a24" stroke="#24170d" strokeWidth="3" />
              <path d="M22 4L40 60L58 4" fill="#6b4318" stroke="#24170d" strokeWidth="2" />
              <path d="M14 70H66" stroke="#d6ae60" strokeWidth="4" />
              <rect x="50" y="62" width="18" height="22" rx="3" fill="#5e3a1e" stroke="#24170d" strokeWidth="2" />
            </>
          ) : (
            <>
              <path d="M20 4H60L74 116H6Z" fill={look === 'scholar' ? '#2c3550' : '#3b2a1e'} stroke="#24170d" strokeWidth="3" />
              <path d="M40 10V116" stroke="#24170d" strokeWidth="2" />
              <path d="M18 52H62" stroke="#a88a5a" strokeWidth="3" />
            </>
          )}
        </svg>
        <span className="wk-arm" />
        <span className={`wk-head is-${look === 'scholar' ? 'monk' : look}`} />
      </div>
    </div>
  )
}
