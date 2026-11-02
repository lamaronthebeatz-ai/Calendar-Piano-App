import { useRef } from 'react'
import { useStageTilt } from '../../hooks/useStageTilt'
import logoFull from '../../assets/logo-full.webp'
import { SHELF_TOPICS } from './shelfTopics'
import { chaptersOf, READER_BOOKS } from './reader/model'
import './shelf.css'

const ART = (n: string) => `${import.meta.env.BASE_URL}images/shelf/${n}`

/** Gold dust in the window light: fixed positions, so the stage looks the same on every visit. */
const DUST = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 43 + 9) % 100}%`,
  top: `${28 + ((i * 47) % 64)}%`,
  size: 1.5 + ((i * 7) % 4) * 0.7,
  dur: `${10 + ((i * 5) % 8)}s`,
  delay: `${-((i * 13) % 17)}s`,
}))

/** One depth layer: .sh-layer (scroll: the camera) > .hm-tilt (pointer / gyro, shared with the home page). */
function Layer({ name }: { name: 'bg' | 'mid' | 'fg' }) {
  return (
    <div className={`sh-layer sh-layer-${name}`} aria-hidden>
      <div className="hm-tilt">
        <picture>
          <source media="(max-width: 760px)" srcSet={ART(`${name}-sm.webp`)} />
          <img src={ART(`${name}.webp`)} alt="" decoding="async" />
        </picture>
      </div>
    </div>
  )
}

/**
 * The shelf's opening stage: Willem Drost, The Student (1651 – 1654; SMK, public domain) split into three layers
 * (room · the student and his table · the chair in front). Scrolling moves a camera into the study: the chair passes
 * by, the room darkens, and the Lamar's Book mark with the shelf's introduction comes up in the dark.
 * Scroll-driven CSS only; the tilt is the home page's hook.
 */
export function ShelfStage() {
  const root = useRef<HTMLElement>(null)
  useStageTilt(root, '.sh-pin')
  const books = READER_BOOKS.length
  const lessons = READER_BOOKS.reduce((n, b) => n + chaptersOf(b).length, 0)
  return (
    <section ref={root} className="sh-stage" aria-label="Lamar's Book">
      <div className="sh-pin">
        <Layer name="bg" />
        <Layer name="mid" />
        <div className="sh-title">
          <div className="hm-tilt">
            <p className="brand-eyebrow">Tủ sách</p>
            <h2 className="sh-h">
              <span className="sh-line">Những cuốn sách nên đọc,</span>
              <span className="sh-line sh-gold"><span className="text-gold-gradient italic">bằng tiếng Việt.</span></span>
            </h2>
          </div>
        </div>
        <Layer name="fg" />
        <div className="sh-veil" aria-hidden />
        <div className="sh-dark" aria-hidden />
        <div className="sh-dust" aria-hidden>
          {DUST.map((d, i) => (
            <span key={i} style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDuration: d.dur, animationDelay: d.delay }} />
          ))}
        </div>
        <div className="sh-words">
          <img src={logoFull} alt="Lamar" width={960} height={528} draggable={false} className="sh-logo" />
          <p className="lamars-label">
            <span aria-hidden="true" />Lamar&rsquo;s Book<span aria-hidden="true" />
          </p>
          <p className="sh-lead">
            Tủ sách Lamar tuyển chọn cho người học nhạc Việt Nam: các giáo trình Lamar tự soạn — nhạc lý, hoà âm, phức điệu, jazz,
            piano — và những cuốn kinh điển về âm nhạc học, mỹ học, sư phạm và nghề âm nhạc, được đọc kỹ rồi trình bày lại bằng tiếng
            Việt, có nguồn và số trang để bạn đối chiếu bản gốc.
          </p>
          <ul className="sh-facts">
            <li><b>{SHELF_TOPICS.length}</b> chủ đề</li>
            <li><b>{books}</b> cuốn</li>
            <li><b>{lessons.toLocaleString('vi-VN')}</b> bài</li>
          </ul>
        </div>
        <p className="sh-credit">Willem Drost, <i>Chàng sinh viên</i>, 1651 – 1654 · SMK</p>
        <span className="sh-cue" aria-hidden>Cuộn xuống</span>
      </div>
    </section>
  )
}
