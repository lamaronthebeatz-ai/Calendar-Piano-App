import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { CATEGORIES } from './articles'
import { findArticle, type ArticleMeta } from './wiki'
import { prefetchText } from './body'
import { tint } from './categoryStyle'
import { useThumbs } from './thumbs'
import { articleForGrove, groveHref, groveTermsFor, loadGrove, ROMAN, type GroveHead } from '../terms/grove'
import '../../phn.css'
import './link-peek.css'

const LANGS: Record<string, string> = { en: 'Anh', ru: 'Nga', de: 'Đức', fr: 'Pháp', it: 'Ý' }
const KIND: Record<GroveHead['k'], string> = { term: 'Thuật ngữ', person: 'Nhân vật', work: 'Tác phẩm', institution: 'Tổ chức' }

/** A Grove entry as a tappable row: volume and page, Vietnamese title, first sentence. */
function GroveCard({ g, onGo }: { g: GroveHead; onGo: () => void }) {
  return (
    <Link to={groveHref(g.id)} className="lpk-grove" onClick={onGo}>
      <span className="lpk-grove-src">
        Grove, tập {ROMAN[g.v]}, tr. {g.p}
      </span>
      <span className="lpk-grove-title">{g.t ?? g.h}</span>
      {g.g && <span className="lpk-grove-gist">{g.g}</span>}
      <span className="lpk-grove-go">Mở trong Từ điển âm nhạc Lamar →</span>
    </Link>
  )
}

/**
 * The short card a link opens before going anywhere: for a library article ([[slug]]) what it is, its names as a term
 * and its Grove entries; for a dictionary entry ([[g:id]]) the entry's gist and the library article on the same concept.
 */
export default function LinkPeek({ slug, grove: groveId, onClose }: { slug?: string; grove?: string; onClose: () => void }) {
  const [heads, setHeads] = useState<GroveHead[]>()
  const [closing, setClosing] = useState(false)
  const close = () => {
    setClosing(true)
    window.setTimeout(onClose, 200)
  }
  useEffect(() => {
    let live = true
    loadGrove().then((h) => live && setHeads(h))
    return () => {
      live = false
    }
  }, [])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (groveId) {
    const g = heads?.find((h) => h.id === groveId)
    if (!heads) return null
    if (!g) {
      onClose()
      return null
    }
    const article = articleForGrove(g)
    return (
      <Shell label={`Từ điển: ${g.t ?? g.h}`} closing={closing} onScrim={close} style={article ? tint(article.category) : undefined}>
        <div className="lpk-body">
          <p className="lpk-kicker">
            Từ điển âm nhạc Lamar · {KIND[g.k]}
            {g.a ? ' · Phụ lục' : ''}
          </p>
          <h2 className="lpk-title">{g.t ?? g.h}</h2>
          <p className="lpk-orig">
            {g.h} — Grove, tập {ROMAN[g.v]}, tr. {g.p}
          </p>
          {g.g && <p className="lpk-summary">{g.g}</p>}
          {article && (
            <section className="lpk-term" aria-label="Trong thư viện">
              <p className="lpk-term-head">Trong thư viện</p>
              <Link to={`/theory/${article.slug}`} className="lpk-grove" onClick={onClose}>
                <span className="lpk-grove-src">{CATEGORIES[article.category].title}</span>
                <span className="lpk-grove-title">{article.title}</span>
                <span className="lpk-grove-gist">{article.summary}</span>
                <span className="lpk-grove-go">Đọc bài →</span>
              </Link>
            </section>
          )}
        </div>
        <Actions primary="Mở trong từ điển" to={groveHref(g.id)} onGo={onClose} onClose={close} />
      </Shell>
    )
  }

  const article = slug ? findArticle(slug) : undefined
  if (!article) return null
  return <ArticlePeek article={article} heads={heads} closing={closing} close={close} onClose={onClose} />
}

function ArticlePeek({ article, heads, closing, close, onClose }: { article: ArticleMeta; heads?: GroveHead[]; closing: boolean; close: () => void; onClose: () => void }) {
  const thumbs = useThumbs()
  useEffect(() => {
    prefetchText(article.slug)
  }, [article])
  const names = (article.xl ?? '').split('|').filter(Boolean).map((p) => [p.slice(0, 2), p.slice(3)] as const)
  const isTerm = !article.person && article.category !== 'composers' && article.category !== 'pianists'
  const grove = isTerm && heads ? groveTermsFor(article, heads) : []
  const thumb = thumbs?.[article.slug]
  return (
    <Shell label={`Giới thiệu: ${article.title}`} closing={closing} onScrim={close} style={tint(article.category)}>
      {thumb && <img src={thumb[0]} alt="" className={`lpk-img${thumb[1] ? ' is-drawing' : ''}`} />}
      <div className="lpk-body">
        <p className="lpk-kicker">{CATEGORIES[article.category].title}</p>
        <h2 className="lpk-title">{article.title}</h2>
        <p className="lpk-summary">{article.summary}</p>
        {isTerm && (names.length > 0 || grove.length > 0) && (
          <section className="lpk-term" aria-label="Thuật ngữ">
            <p className="lpk-term-head">Thuật ngữ</p>
            {names.length > 0 && (
              <dl className="lpk-names">
                {names.map(([l, n]) => (
                  <div key={l + n}>
                    <dt>{LANGS[l] ?? l}</dt>
                    <dd>{n}</dd>
                  </div>
                ))}
              </dl>
            )}
            {grove.map((g) => (
              <GroveCard key={g.id} g={g} onGo={onClose} />
            ))}
          </section>
        )}
      </div>
      <Actions primary="Đọc bài" to={`/theory/${article.slug}`} onGo={onClose} onClose={close} />
    </Shell>
  )
}

function Shell({ label, closing, onScrim, style, children }: { label: string; closing: boolean; onScrim: () => void; style?: React.CSSProperties; children: ReactNode }) {
  return createPortal(
    <div className={`lpk phn${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={label} style={style}>
      <button className="lpk-scrim" aria-label="Đóng" onClick={onScrim} />
      <div className="lpk-card">{children}</div>
    </div>,
    document.body,
  )
}

function Actions({ primary, to, onGo, onClose }: { primary: string; to: string; onGo: () => void; onClose: () => void }) {
  const navigate = useNavigate()
  return (
    <div className="lpk-actions">
      <button
        className="lpk-read"
        onClick={() => {
          onGo()
          navigate(to)
        }}
      >
        {primary}
      </button>
      <button className="lpk-close" onClick={onClose}>
        Đóng
      </button>
    </div>
  )
}
