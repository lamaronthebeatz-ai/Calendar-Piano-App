import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ARTICLES, CATEGORIES } from '../theory/articles'
import { libraryStats } from '../theory/wiki'
import { PLACES } from '../musicology/places'
import { SHELF_BOOKS } from '../curriculum/shelfTopics'
import { Cover } from '../curriculum/reader/Cover'
import { openBook } from '../curriculum/bookOpen'
import { ArrowUpRightIcon } from '../../components/icons'
import { openDonate } from '../donate/store'
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

/** Desktop only: a soft gold light follows the pointer over the hero, moved with a transform (no repaint). */
function useHeroLight(root: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const hero = root.current?.querySelector<HTMLElement>('.hm-stage-pin')
    const light = hero?.querySelector<HTMLElement>('.hm-hero-light')
    if (!hero || !light || !matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let x = 0
    let y = 0
    const paint = () => {
      raf = 0
      light.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect()
      x = e.clientX - r.left
      y = e.clientY - r.top
      light.style.opacity = '1'
      if (!raf) raf = requestAnimationFrame(paint)
    }
    const leave = () => (light.style.opacity = '0')
    hero.addEventListener('pointermove', move, { passive: true })
    hero.addEventListener('pointerleave', leave)
    return () => {
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [root])
}

/**
 * The floating Lamar mark steps aside while you scroll down through the gallery and comes back as soon as you scroll
 * up (or reach the top). One passive listener that only flips an attribute when the direction changes.
 */
function useMarkAutoHide(root: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = root.current
    if (!el) return
    const html = document.documentElement
    let last = el.scrollTop
    const onScroll = () => {
      const y = el.scrollTop
      if (Math.abs(y - last) < 12) return
      const down = y > last && y > 80
      if (down !== (html.dataset.hmDown === '1')) {
        if (down) html.dataset.hmDown = '1'
        else delete html.dataset.hmDown
      }
      last = y
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      delete html.dataset.hmDown
    }
  }, [root])
}

/** Gold dust drifting up through the candlelight: fixed positions and timings, so it is the same on every visit. */
const DUST = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${30 + ((i * 53) % 65)}%`,
  size: 1.5 + ((i * 7) % 4) * 0.8,
  dur: `${9 + ((i * 5) % 9)}s`,
  delay: `${-((i * 13) % 17)}s`,
}))

/**
 * Tilt: the three layers of the painting (and the title between them) shift by different amounts as the pointer moves
 * (desktop) or the device tilts (phones, tablets), like looking into the room through a window. Input only sets a
 * target; one rAF loop eases towards it and stops once settled, writing --tx / --ty (−1 … 1) on the stage. On iOS the
 * motion sensor needs the viewer's permission, asked once on the first touch.
 */
function useStageTilt(root: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const scroller = root.current
    const pin = scroller?.querySelector<HTMLElement>('.hm-stage-pin')
    if (!scroller || !pin || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, visible = true
    const loop = () => {
      cx += (tx - cx) * 0.07
      cy += (ty - cy) * 0.07
      pin.style.setProperty('--tx', cx.toFixed(4))
      pin.style.setProperty('--ty', cy.toFixed(4))
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.002 && visible ? requestAnimationFrame(loop) : 0
    }
    const aim = (x: number, y: number) => {
      tx = Math.max(-1, Math.min(1, x))
      ty = Math.max(-1, Math.min(1, y))
      if (!raf && visible) raf = requestAnimationFrame(loop)
    }
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { root: scroller })
    io.observe(pin)
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches
    const onPointer = (e: PointerEvent) => {
      const r = pin.getBoundingClientRect()
      aim(((e.clientX - r.left) / r.width - 0.5) * 2, ((e.clientY - r.top) / r.height - 0.5) * 2)
    }
    const onLeave = () => aim(0, 0)
    let base: number | null = null
    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return
      if (base == null) base = e.beta
      aim(e.gamma / 22, (e.beta - base) / 22)
    }
    type Perm = { requestPermission?: () => Promise<'granted' | 'denied'> }
    const DOE = (window as unknown as { DeviceOrientationEvent?: Perm }).DeviceOrientationEvent
    const startTilt = () => addEventListener('deviceorientation', onTilt)
    const askOnce = () => {
      scroller.removeEventListener('touchend', askOnce)
      DOE?.requestPermission?.().then((r) => r === 'granted' && startTilt()).catch(() => {})
    }
    if (fine) {
      pin.addEventListener('pointermove', onPointer, { passive: true })
      pin.addEventListener('pointerleave', onLeave)
    } else if (DOE?.requestPermission) scroller.addEventListener('touchend', askOnce, { once: true })
    else startTilt()
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      pin.removeEventListener('pointermove', onPointer)
      pin.removeEventListener('pointerleave', onLeave)
      scroller.removeEventListener('touchend', askOnce)
      removeEventListener('deviceorientation', onTilt)
    }
  }, [root])
}

const LAYER = (n: string) => `${import.meta.env.BASE_URL}images/home/duet3d/${n}`

/** One depth layer of the painting: the scroll animation moves the outer box, the tilt moves the inner one. */
function Layer({ name }: { name: 'bg' | 'mid' | 'fg' }) {
  return (
    <div className={`hm-layer hm-layer-${name}`} aria-hidden>
      <div className="hm-tilt">
        <picture>
          <source media="(max-width: 760px)" srcSet={LAYER(`${name}-sm.webp`)} />
          <img src={LAYER(`${name}.webp`)} alt="" decoding="async" />
        </picture>
      </div>
    </div>
  )
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
  useHeroLight(root)
  useStageTilt(root)
  useMarkAutoHide(root)
  // The lock screen dissolves over this hero (same painting): the title rises again as the curtain goes.
  const [heroRun, setHeroRun] = useState(0)
  useEffect(() => {
    const replay = () => setHeroRun((n) => n + 1)
    addEventListener('app-unlocked', replay)
    return () => removeEventListener('app-unlocked', replay)
  }, [])
  const books = SHELF_BOOKS.filter((b) => b.coverImage)

  return (
    <div ref={root} data-no-rubber className="hm h-full overflow-y-auto overflow-x-hidden overscroll-y-contain">
      {/* 1 · the stage: Krøyer's Duet in three depth layers. Scrolling moves a camera into the room: the listeners in
          front pass by and fade, the singers come closer, the room darkens, and the motto lights up word by word. */}
      <section className="hm-stage">
        <div className="hm-stage-pin">
          <Layer name="bg" />
          <Layer name="mid" />
          <div key={heroRun} className="hm-title-block">
            <div className="hm-tilt">
              <img src={logoFull} alt="Lamar" className="hm-hero-logo" />
              <p className="hm-hero-eyebrow">Trung tâm lý thuyết âm nhạc học</p>
              <h1 className="hm-hero-title">
                <span className="hm-line"><span>Hiểu âm nhạc</span></span>
                <span className="hm-line"><span className="text-gold-gradient italic">từ bên trong.</span></span>
              </h1>
            </div>
          </div>
          <Layer name="fg" />
          <div className="hm-stage-veil" aria-hidden />
          <div className="hm-stage-dark" aria-hidden />
          <div className="hm-hero-light" aria-hidden />
          <div className="hm-dust" aria-hidden>
            {DUST.map((d, i) => (
              <span key={i} style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDuration: d.dur, animationDelay: d.delay }} />
            ))}
          </div>
          <div key={`f${heroRun}`} className="hm-hero-foot">
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
          <div className="hm-stage-words">
            <p className="brand-eyebrow">Tinh thần</p>
            <p className="hm-manifesto-text">
              <Words text="Học để hiểu, hiểu để phân tích, phân tích để vận dụng, vận dụng để sáng tạo và không ngừng khám phá âm nhạc." />
            </p>
            <p className="hm-manifesto-sign">— Lamar</p>
          </div>
          <p className="hm-hero-credit">{ART.duet.artist}, <i>{ART.duet.title}</i>, {ART.duet.year}</p>
          <div className="hm-scroll-cue" aria-hidden><span /></div>
        </div>
      </section>

      {/* 2 · the library in four figures, on the black the stage ends in */}
      <section className="hm-manifesto hm-reveal">
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

      {/* 4 · the shelf as a gallery: scrolling down carries the covers sideways while the room stays pinned */}
      <section className="hm-hshelf" style={{ '--n': books.length } as CSSProperties}>
        <div className="hm-hshelf-pin">
          <div className="hm-shelf-head hm-reveal">
            <p className="brand-eyebrow">Tủ sách</p>
            <h2 className="hm-shelf-title">Đọc như ấn phẩm, <em>in thành PDF</em></h2>
            <p className="hm-shelf-sub">{fmt(books.length)} cuốn · bấm một bìa để mở</p>
            <p className="hm-shelf-hint" aria-hidden>Cuộn xuống để lướt qua tủ sách <span>→</span></p>
          </div>
          <div className="hm-hshelf-view">
            <div className="hm-hshelf-track">
              {books.map((b) => (
                <Link
                  key={b.id}
                  to={`/curriculum/${b.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    openBook(b, e.currentTarget.firstElementChild ?? e.currentTarget, `/curriculum/${b.id}`, navigate)
                  }}
                  className="hm-book"
                  title={b.title}
                >
                  <Cover book={b} size={0.7} className="rounded-[3px]" />
                  <span className="hm-book-title">{b.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hm-hshelf-progress" aria-hidden><span /></div>
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
        <div className="hm-support">
          <p>Thư viện miễn phí, không quảng cáo — viết và duy trì bởi một người.</p>
          <button type="button" onClick={openDonate} className="btn-line mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium">
            <span aria-hidden>☕</span> Mời Lamar một ly cà phê
          </button>
        </div>
        <p className="hm-foot-copy">© {new Date().getFullYear()} · Bản quyền nội dung thuộc về Lamar</p>
      </footer>
    </div>
  )
}
