import { useState } from 'react'
import { Link } from 'react-router-dom'
import { findArticle } from '../../theory/wiki'
import { update } from '../progress'
import type { Save } from '../engine/save'
import type { ArcDef } from '../engine/types'
import { effects } from '../engine/runtime'
import { spotFlag, spotsOf, type DocumentDef } from '../engine/narrative'
import { BASIS, useEscape } from './arcShared'
import type { Narrate } from './useStory'


/**
 * Examining a document: the page drawn, with the spots worth a closer look. Tapping a spot shows what the eye finds
 * there (its basis marked: sourced fact, interpretation, fiction) and lets the story move (a `look` trigger). Spots
 * looked at are remembered in the save; a detail that is only noticed after another one appears then.
 */
export function DocumentView({ arc, doc, save, narrate, onClose }: { arc: ArcDef; doc: DocumentDef; save: Save; narrate: Narrate; onClose: () => void }) {
  useEscape(onClose)
  const [open, setOpen] = useState<string | null>(null)
  const spots = spotsOf(doc, save)
  const seen = (id: string) => save.flags.includes(spotFlag(doc.id, id))
  const pick = (id: string) => {
    setOpen(id)
    if (!seen(id)) update((s) => effects(arc, [{ set: spotFlag(doc.id, id) }], s))
    narrate({ on: 'look', doc: doc.id, spot: id })
  }
  const sp = spots.find((x) => x.id === open)
  return (
    <div className="dv" role="dialog" aria-label={`Khảo sát: ${doc.title}`}>
      <div className="dv-inner">
        <header className="dv-head">
          <p className="jr-kicker">Khảo sát tài liệu · {doc.kind}</p>
          <h3>{doc.title}</h3>
          <button className="ar-close" onClick={onClose} aria-label="Đóng tài liệu">✕</button>
        </header>
        <div className="dv-page">
          <DocArt art={doc.art} />
          {spots.map((x) => (
            <button
              key={x.id}
              className={`dv-spot${seen(x.id) ? ' is-seen' : ''}${open === x.id ? ' is-open' : ''}`}
              style={{ left: `${x.x}%`, top: `${x.y}%`, width: `${x.w}%`, height: `${x.h}%` }}
              aria-label={`Xem kỹ: ${x.label}${seen(x.id) ? ' (đã xem)' : ''}`}
              onClick={() => pick(x.id)}
            />
          ))}
        </div>
        <p className="dv-count">Đã xem {spots.filter((x) => seen(x.id)).length}/{spots.length} chi tiết · chạm vào trang để xem kỹ</p>
        {sp ? (
          <div className="dv-note" aria-live="polite">
            <p className="dv-note-head">
              <b>{sp.label}</b> <span className={`st-basis is-${sp.basis}`}>{BASIS[sp.basis]}</span>
            </p>
            <p className="jr-line">{sp.text}</p>
            <Refs arc={arc} refs={sp.refs} />
          </div>
        ) : (
          <p className="ar-small dv-about">{doc.note}</p>
        )}
        <button className="jr-cta ar-next" onClick={onClose}>Xong</button>
      </div>
    </div>
  )
}

/** References as they are recorded: evidence → its source article; an article → its page. Nothing is made up here. */
export function Refs({ arc, refs }: { arc: ArcDef; refs?: string[] }) {
  if (!refs?.length) return null
  return (
    <ul className="st-refs">
      {refs.map((r) => {
        if (r.startsWith('ev:')) {
          const ev = arc.evidence.find((e) => e.id === r)
          if (!ev) return null
          const art = ev.source?.startsWith('a:') ? findArticle(ev.source.slice(2)) : undefined
          return (
            <li key={r}>
              Chứng cứ: <b>{ev.title}</b>
              {ev.date ? ` (${ev.date})` : ''} · {ev.verification === 'checked' ? 'đã đối chiếu' : ev.verification === 'library' ? 'theo bài thư viện' : 'chưa kiểm chứng'}
              {art && (
                <>
                  {' · '}
                  <Link to={`/theory/${art.slug}`}>📖 {art.title}</Link>
                </>
              )}
            </li>
          )
        }
        const a = r.startsWith('a:') ? findArticle(r.slice(2)) : undefined
        return a ? (
          <li key={r}>
            Bài thư viện: <Link to={`/theory/${a.slug}`}>📖 {a.title}</Link>
          </li>
        ) : null
      })}
    </ul>
  )
}

const INK = '#2a1c10'
/** The documents' pages, drawn (own drawings): a gradual page with a scraped patch and a margin note. Plain ink lines:
 * nothing here should look like a historical claim (coloured lines and the like) the library does not source. */
function DocArt({ art }: { art: string }) {
  if (art !== 'gradual') return <div className="dv-blank" />
  const staff = (y: number, from = 70, to = 430) => [0, 1, 2, 3].map((i) => <path key={i} d={`M${from} ${y + i * 16}H${to}`} stroke="#6a5a40" strokeWidth="1.6" />)
  const neumes = (y: number, xs: number[], ys: number[]) => xs.map((x, i) => <rect key={i} x={x} y={y + ys[i] * 8 - 5} width="10" height="10" fill={INK} />)
  const text = (y: number) => [0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${80 + i * 58} ${y}q10 -6 20 0t20 0`} stroke={INK} strokeWidth="2" fill="none" />)
  return (
    <svg className="dv-art" viewBox="0 0 600 800" aria-hidden="true">
      <defs>
        <filter id="dv-rough">
          <feTurbulence baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.92  0 0 0 0 0.86  0 0 0 0 0.72  0 0 0 0.5 0" />
        </filter>
      </defs>
      <rect x="20" y="20" width="560" height="760" rx="6" fill="#efe2c2" stroke="#b89a68" strokeWidth="3" />
      {/* red initial */}
      <rect x="44" y="104" width="22" height="60" fill="#9a2a1d" opacity="0.85" />
      <text x="47" y="150" fontFamily="serif" fontSize="44" fill="#efe2c2">A</text>
      {/* system 1: clef letters, neumes on lines */}
      {staff(120)}
      <text x="72" y="140" fontFamily="serif" fontSize="18" fill={INK}>F</text>
      {neumes(120, [110, 140, 162, 200, 232, 262, 300, 330, 362, 396], [2, 1, 1, 0, 2, 3, 2, 4, 3, 2])}
      {text(206)}
      {/* system 2: the scraped patch — paler, rough, old unlined neumes faintly under the new ones */}
      <rect x="108" y="352" width="312" height="144" fill="#f6eed8" />
      <rect x="108" y="352" width="312" height="144" filter="url(#dv-rough)" opacity="0.6" />
      {[130, 168, 190, 236, 270, 318, 352, 390].map((x, i) => (
        <path key={i} d={`M${x} ${392 + (i % 3) * 8}l8 -10l6 8`} stroke="#8a7a60" strokeWidth="1.6" fill="none" opacity="0.5" />
      ))}
      {staff(380)}
      <text x="72" y="400" fontFamily="serif" fontSize="18" fill={INK}>c</text>
      {neumes(380, [120, 150, 178, 214, 246, 280, 318, 350, 384], [1, 2, 3, 2, 1, 0, 1, 2, 2])}
      {text(466)}
      {/* system 3 */}
      {staff(560)}
      <text x="72" y="580" fontFamily="serif" fontSize="18" fill={INK}>F</text>
      {neumes(560, [110, 146, 176, 210, 246, 284, 318, 356, 392], [3, 2, 2, 1, 0, 1, 2, 3, 2])}
      {text(646)}
      {/* the margin note, small red script */}
      <g stroke="#9a2a1d" strokeWidth="1.6" fill="none">
        <text x="456" y="386" fontFamily="serif" fontStyle="italic" fontSize="20" fill="#9a2a1d" stroke="none">R. —</text>
        <path d="M456 404q8 -5 16 0t16 0t16 0t16 0M456 420q8 -5 16 0t16 0t16 0M456 436q8 -5 16 0t16 0t16 0t16 0" />
      </g>
    </svg>
  )
}
