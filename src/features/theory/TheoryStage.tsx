import { useEffect, useState } from 'react'
import { ARTICLES } from './articles'
import { articlesByCategory } from './wiki'

const ART = (n: string) => `${import.meta.env.BASE_URL}images/home/layers/trompe-${n}`
const KEY = 'theory:intro'

/** Whether the opening runs on this visit: once per app session, only where scroll-driven animations exist. */
function firstVisit() {
  if (typeof CSS === 'undefined' || !CSS.supports('animation-timeline: view()')) return false
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return !sessionStorage.getItem(KEY)
  } catch {
    return true
  }
}

function Layer({ name }: { name: 'bg' | 'mid' | 'fg' }) {
  return (
    <div className={`ts-layer ts-${name}`} aria-hidden>
      <picture>
        <source media="(max-width: 760px)" srcSet={ART(`${name}-sm.webp`)} />
        <img src={ART(`${name}.webp`)} alt="" decoding="async" />
      </picture>
    </div>
  )
}

/**
 * The library's opening, once per session: the home page's Lý thuyết painting (C. N. Gijsbrechts, trompe-l'œil with
 * violin, music book and recorder, 1672; SMK, public domain) in its three layers. Scrolling moves a camera past the
 * violin into the music book on the wall; its staves grow until the room goes dark and only five gold lines are left,
 * which become the library's staff. Scroll-driven CSS only; "Bỏ qua" jumps to the library.
 */
export function TheoryStage() {
  const [show] = useState(firstVisit)
  // Seen: later visits in this session open straight on the library (marked after mount, so a re-render keeps it).
  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {
      /* not remembered */
    }
  }, [])
  if (!show) return null
  const skip = (e: React.MouseEvent) => {
    const stage = (e.currentTarget as HTMLElement).closest('.ts-stage') as HTMLElement | null
    const scroller = stage?.closest('.overflow-y-auto')
    if (stage && scroller) scroller.scrollTo({ top: stage.offsetTop + stage.offsetHeight - 40, behavior: 'smooth' })
  }
  return (
    <section className="ts-stage" aria-label="Mở đầu thư viện lý thuyết">
      <div className="ts-pin vt-art">
        <div className="ts-camera">
          <Layer name="bg" />
          <Layer name="mid" />
          <Layer name="fg" />
        </div>
        <div className="ts-veil" aria-hidden />
        <div className="ts-title">
          <p className="brand-eyebrow">Thư viện lý thuyết</p>
          <h2 className="ts-h">
            Từ ký âm <span className="ts-gold"><span className="text-gold-gradient italic">đến phân tích.</span></span>
          </h2>
        </div>
        <div className="ts-dark" aria-hidden />
        <div className="ts-staff" aria-hidden>
          {[0, 1, 2, 3, 4].map((k) => (
            <span key={k} style={{ '--k': k } as React.CSSProperties} />
          ))}
        </div>
        <p className="ts-end">
          <b>{ARTICLES.length.toLocaleString('vi-VN')}</b> trang · <b>{articlesByCategory.length}</b> chủ đề — mọi trang nối với nhau như một bản tổng phổ.
        </p>
        <p className="ts-credit">C. N. Gijsbrechts, <i>Tranh đánh lừa thị giác với vĩ cầm, sách nhạc và sáo dọc</i>, 1672 · SMK</p>
        <button type="button" onClick={skip} className="ts-skip">Bỏ qua ↓</button>
      </div>
    </section>
  )
}
