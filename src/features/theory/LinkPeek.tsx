import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { CATEGORIES } from './articles'
import { findArticle, normalize } from './wiki'
import { prefetchText } from './body'
import { tint } from './categoryStyle'
import { useThumbs } from './thumbs'
import groveIndexUrl from '../terms/grove-index.json?url'
import '../../phn.css'
import './link-peek.css'

interface GroveHead {
  id: string
  h: string
  v: number
  p: number
  k: string
  t?: string
  g?: string
}
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V']
const LANGS: Record<string, string> = { en: 'Anh', ru: 'Nga', de: 'Đức', fr: 'Pháp', it: 'Ý' }

let groveIndex: Promise<GroveHead[]> | undefined
const loadGrove = () => (groveIndex ??= fetch(groveIndexUrl).then((r) => (r.ok ? r.json() : [])).catch(() => []))

/** Grove headwords that name the same concept as the article: its English name or title (aliases are too loose — "answer" for fugue). */
function groveFor(names: string[], heads: GroveHead[]) {
  const want = new Set(names.map(normalize).filter((n) => n.length > 2))
  const hits = heads.filter((h) => h.k === 'term' && want.has(normalize(h.h)))
  return hits.sort((a, b) => Number(!!b.t) - Number(!!a.t)).slice(0, 2)
}

/** The short card a wiki link opens: what the target is, its names as a term, and the way into the article. */
export default function LinkPeek({ slug, onClose }: { slug: string; onClose: () => void }) {
  const article = findArticle(slug)
  const navigate = useNavigate()
  const thumbs = useThumbs()
  const [closing, setClosing] = useState(false)
  const [grove, setGrove] = useState<GroveHead[]>()
  const close = () => {
    setClosing(true)
    window.setTimeout(onClose, 200)
  }

  useEffect(() => {
    if (article) prefetchText(article.slug)
  }, [article])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const names = (article?.xl ?? '').split('|').filter(Boolean).map((p) => [p.slice(0, 2), p.slice(3)] as const)
  const isTerm = !!article && !article.person && articleIsTerm(article.category)
  useEffect(() => {
    if (!article || !isTerm) return
    let live = true
    const en = names.filter(([l]) => l === 'en').map(([, n]) => n)
    loadGrove().then((heads) => live && setGrove(groveFor([...en, article.title], heads)))
    return () => {
      live = false
    }
    // names derive from the article
  }, [article, isTerm]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!article) return null
  const thumb = thumbs?.[article.slug]
  const read = () => {
    onClose()
    navigate(`/theory/${article.slug}`)
  }

  return createPortal(
    <div className={`lpk phn${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={`Giới thiệu: ${article.title}`} style={tint(article.category)}>
      <button className="lpk-scrim" aria-label="Đóng" onClick={close} />
      <div className="lpk-card">
        {thumb && <img src={thumb[0]} alt="" className={`lpk-img${thumb[1] ? ' is-drawing' : ''}`} />}
        <div className="lpk-body">
          <p className="lpk-kicker">{CATEGORIES[article.category].title}</p>
          <h2 className="lpk-title">{article.title}</h2>
          <p className="lpk-summary">{article.summary}</p>

          {isTerm && (names.length > 0 || (grove && grove.length > 0)) && (
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
              {grove?.map((g) => (
                <Link key={g.id} to={`/terms?q=${encodeURIComponent(g.h.toLowerCase())}`} className="lpk-grove" onClick={onClose}>
                  <span className="lpk-grove-src">Grove, tập {ROMAN[g.v]}, tr. {g.p}</span>
                  <span className="lpk-grove-title">{g.t ?? g.h}</span>
                  {g.g && <span className="lpk-grove-gist">{g.g}</span>}
                  <span className="lpk-grove-go">Mở trong Từ điển âm nhạc Lamar →</span>
                </Link>
              ))}
            </section>
          )}

        </div>
        <div className="lpk-actions">
          <button className="lpk-read" onClick={read}>
            Đọc bài
          </button>
          <button className="lpk-close" onClick={close}>
            Đóng
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

/** Articles about people are not terms; everything else may carry names in other languages and a Grove entry. */
function articleIsTerm(category: string) {
  return category !== 'composers' && category !== 'pianists'
}
