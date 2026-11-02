import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ARTICLES, CATEGORIES } from '../theory/articles'
import { libraryStats } from '../theory/wiki'
import { PLACES } from '../musicology/places'
import { SHELF_BOOKS } from '../curriculum/shelfTopics'
import { Cover } from '../curriculum/reader/Cover'
import { openBook } from '../curriculum/bookOpen'
import { ArrowUpRightIcon } from '../../components/icons'
import logoFull from '../../assets/logo-full.webp'
import './home.css'

const img = (name: string) => `${import.meta.env.BASE_URL}images/home/${name}`
const fmt = (n: number) => n.toLocaleString('vi-VN')

/** Paintings on the page: all public domain, from the open collection of Statens Museum for Kunst (SMK), Copenhagen. */
const ART = {
  duet: { file: 'duet', artist: 'P. S. Krøyer', title: 'Song tấu', year: '1887', id: 'KMS1304' },
  trompe: { file: 'trompe', artist: 'Cornelius Norbertus Gijsbrechts', title: 'Tranh đánh lừa thị giác với vĩ cầm, sách nhạc và sáo dọc', year: '1672', id: 'KMS1908' },
  party: { file: 'music-party', artist: 'Pieter de Hooch', title: 'Buổi hoà nhạc gia đình', year: 'khoảng 1644 – 1683', id: 'KMSsp613' },
  reading: { file: 'reading', artist: 'Constantin Hansen', title: 'Hai em gái hoạ sĩ, Signe và Henriette, đọc sách', year: '1826', id: 'KMS3004' },
  singing: { file: 'singing', artist: 'Michael Ancher', title: 'Trẻ em hát', year: '1899', id: 'KMS1626' },
}
type Art = (typeof ART)[keyof typeof ART]

const EVENTS = PLACES.reduce((n, p) => n + p.events.length, 0)

/**
 * Scroll effects are CSS scroll-driven animations (home.css), run by the browser on the compositor in step with the
 * finger — no per-frame JavaScript, which always lags a touch fling on iOS and made the page jitter. Browsers without
 * scroll timelines get a one-shot fade-up instead: an observer adds `.is-in` as each block first comes into view.
 */
function useRevealFallback(root: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = root.current
    if (!el || CSS.supports('animation-timeline: view()')) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
      },
      { root: el, threshold: 0.18 },
    )
    el.querySelectorAll('.hm-reveal').forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [root])
}

function Picture({ art, className, eager }: { art: Art; className?: string; eager?: boolean }) {
  return (
    <picture>
      <source media="(max-width: 760px)" srcSet={img(`${art.file}-sm.webp`)} />
      <img src={img(`${art.file}.webp`)} alt={`${art.artist}, ${art.title} (${art.year})`} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </picture>
  )
}

function Words({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="hm-word" style={{ '--i': (i / words.length).toFixed(3) } as CSSProperties}>
          {w}{' '}
        </span>
      ))}
    </>
  )
}

function Chapter({ n, art, eyebrow, title, children, to, cta, extra, flip }: {
  n: string
  art: Art
  eyebrow: string
  title: ReactNode
  children: ReactNode
  to: string
  cta: string
  extra?: { to: string; label: string }
  flip?: boolean
}) {
  return (
      <section className={`hm-chapter${flip ? ' is-flip' : ''}`}>
        <div className="hm-chapter-media">
          <Picture art={art} className="hm-chapter-img" />
        </div>
        <div className="hm-chapter-text hm-reveal">
          <p className="hm-num">{n}</p>
          <p className="brand-eyebrow">{eyebrow}</p>
          <h2 className="hm-chapter-title">{title}</h2>
          <div className="hm-chapter-body">{children}</div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link to={to} className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium">
              {cta} <ArrowUpRightIcon width={15} height={15} />
            </Link>
            {extra && (
              <Link to={extra.to} className="btn-line inline-flex items-center rounded-full px-5 py-2.5 text-[14px] font-medium">
                {extra.label}
              </Link>
            )}
          </div>
          <p className="hm-caption">{art.artist}, <i>{art.title}</i>, {art.year}</p>
        </div>
      </section>
  )
}

export function HomePage() {
  const root = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  useRevealFallback(root)
  const books = SHELF_BOOKS.filter((b) => b.coverImage)

  return (
    <div ref={root} data-no-rubber className="hm h-full overflow-y-auto overflow-x-hidden overscroll-y-contain">
      {/* 1 · hero: one painting, one sentence */}
      <header className="hm-hero">
        <div className="hm-hero-media">
          <Picture art={ART.duet} className="hm-hero-img" eager />
        </div>
        <div className="hm-hero-veil" />
        <div className="hm-hero-content">
          <img src={logoFull} alt="Lamar" className="hm-hero-logo" />
          <p className="hm-hero-eyebrow">Trung tâm lý thuyết âm nhạc học</p>
          <h1 className="hm-hero-title">
            <span className="hm-line"><span>Hiểu âm nhạc</span></span>
            <span className="hm-line"><span className="text-gold-gradient italic">từ bên trong.</span></span>
          </h1>
          <p className="hm-hero-lead">
            Một thư viện âm nhạc học viết bằng tiếng Việt: lý thuyết, lịch sử và mỹ học được đọc từ nguồn gốc, trích dẫn có trang,
            nối với nhau thành một mạng tri thức.
          </p>
          <div className="hm-hero-cta">
            <Link to="/theory" className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14.5px] font-medium">
              Vào thư viện <ArrowUpRightIcon width={15} height={15} />
            </Link>
            <Link to="/curriculum" className="hm-ghost">Mở tủ sách</Link>
          </div>
        </div>
        <p className="hm-hero-credit">{ART.duet.artist}, <i>{ART.duet.title}</i>, {ART.duet.year}</p>
        <div className="hm-scroll-cue" aria-hidden><span /></div>
      </header>

      {/* 2 · manifesto, lit word by word as it scrolls past */}
      <section className="hm-manifesto hm-reveal">
        <p className="brand-eyebrow">Tinh thần</p>
        <p className="hm-manifesto-text">
          <Words text="Mỗi khái niệm một trang. Mỗi trang dẫn tới trang khác. Mỗi điều khẳng định đều chỉ ra được nguồn — từ Fux và Rameau đến Sposobin, Levine và Hanslick." />
        </p>
        <dl className="hm-figures">
          {[
            [ARTICLES.length, 'trang thư viện'],
            [Object.keys(CATEGORIES).length, 'chủ đề'],
            [libraryStats.links, 'liên kết nội bộ'],
            [SHELF_BOOKS.length, 'cuốn sách'],
          ].map(([v, l]) => (
            <div key={l as string}>
              <dd>{fmt(v as number)}</dd>
              <dt>{l}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* 3 · four chapters, each slides over the last */}
      <div className="hm-chapters">
      <Chapter n="01" art={ART.trompe} eyebrow="Thư viện lý thuyết" title={<>Từ ký âm <em>đến phân tích</em></>} to="/theory" cta="Mở thư viện" extra={{ to: '/tools', label: 'Bảng tính' }}>
        <p>
          Ký âm, nhịp, quãng và âm giai; hoà âm theo hai trường phái; đối âm theo Fux và Taneyev; hình thức theo trường phái Nga;
          hoà âm jazz. {fmt(ARTICLES.length)} trang, mỗi trang có ví dụ khắc bản, nút nghe và nguồn tham khảo.
        </p>
      </Chapter>
      <Chapter n="02" art={ART.party} eyebrow="Âm nhạc học" title={<>Âm nhạc <em>trong lịch sử</em></>} to="/musicology" cta="Khám phá ngành" extra={{ to: '/musicology/ban-do', label: 'Bản đồ âm nhạc' }} flip>
        <p>
          Ngành học xếp theo khung của Guido Adler (1885): lịch sử và hệ thống. Bản đồ âm nhạc ghi {fmt(PLACES.length)} địa điểm,{' '}
          {fmt(EVENTS)} sự kiện — nơi âm nhạc đã xảy ra, từ Leipzig, Vienna, New Orleans tới Huế.
        </p>
      </Chapter>
      <Chapter n="03" art={ART.reading} eyebrow="Lamar's Book" title={<>Những cuốn sách <em>nên đọc</em></>} to="/curriculum" cta="Vào tủ sách">
        <p>
          {fmt(SHELF_BOOKS.length)} cuốn: giáo trình tự soạn và những tác phẩm kinh điển — Fux, Albrechtsberger, Neuhaus, Hanslick,
          Schopenhauer — đọc kỹ, trình bày lại bằng tiếng Việt, ghi số trang để đối chiếu bản gốc.
        </p>
      </Chapter>
      <Chapter n="04" art={ART.singing} eyebrow="Luyện tai" title={<>Nghe, hát <em>và tự kiểm tra</em></>} to="/solfege" cta="Mở Solfège" flip>
        <p>
          Đoán nốt, đoán quãng và 540 bài xướng âm cromatic chia ba cấp. Mọi ví dụ phát bằng mẫu thu từ một cây đại dương cầm thật,
          chỉnh về La 4 = 440 Hz.
        </p>
      </Chapter>
      </div>

      {/* 4 · the shelf, drifting by */}
      <section className="hm-shelf">
        <div className="hm-shelf-head hm-reveal">
          <p className="brand-eyebrow">Tủ sách</p>
          <h2 className="hm-shelf-title">Đọc như ấn phẩm, in thành PDF</h2>
        </div>
        <div className="hm-marquee">
          <div className="hm-marquee-track">
            {[...books, ...books].map((b, i) => (
              <Link
                key={`${b.id}-${i}`}
                to={`/curriculum/${b.id}`}
                aria-hidden={i >= books.length}
                tabIndex={i >= books.length ? -1 : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  openBook(b, e.currentTarget.firstElementChild ?? e.currentTarget, `/curriculum/${b.id}`, navigate)
                }}
                className="hm-book"
                title={b.title}
              >
                <Cover book={b} size={0.62} className="rounded-[3px]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · sign-off and picture credits */}
      <footer className="hm-foot">
        <img src={logoFull} alt="Lamar" className="hm-foot-logo" />
        <div className="gold-rule mx-auto my-8 w-40" />
        <p className="hm-foot-h">Nguồn tranh</p>
        <ul className="hm-credits">
          {Object.values(ART).map((a) => (
            <li key={a.id}>
              <a href={`https://open.smk.dk/artwork/image/${a.id}`} target="_blank" rel="noreferrer">
                {a.artist}, <i>{a.title}</i>, {a.year}
              </a>
            </li>
          ))}
        </ul>
        <p className="hm-foot-note">Statens Museum for Kunst, Copenhagen — phạm vi công cộng (open.smk.dk).</p>
        <p className="hm-foot-copy">© {new Date().getFullYear()} · Bản quyền nội dung thuộc về Lamar</p>
      </footer>
    </div>
  )
}
