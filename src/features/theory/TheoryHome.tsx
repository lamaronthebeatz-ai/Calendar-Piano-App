import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { BookmarkIcon, CheckIcon, ClockIcon, CompassIcon } from '../../components/icons'
import { articlesByCategory, findArticle, type ArticleMeta as Article } from './wiki'
import { unfinished, useLibrary } from './library'
import { GLYPHS, TOPIC_IMAGES, tint } from './categoryStyle'
import { useThumbs } from './thumbs'
import { TOPIC_GROUPS } from './topicGroups'
import './theory-home.css'

type CategoryId = Article['category']

const GROUP_KEY = 'theory:group'

/** Family chips + a compact grid of that family's topics; each tile opens the topic or goes straight to its roadmap. */
export function TopicBrowser({ onSelect }: { onSelect: (id: CategoryId) => void }) {
  const [group, setGroup] = useState(() => {
    try {
      return sessionStorage.getItem(GROUP_KEY) ?? TOPIC_GROUPS[0].id
    } catch {
      return TOPIC_GROUPS[0].id
    }
  })
  const choose = (id: string) => {
    setGroup(id)
    try {
      sessionStorage.setItem(GROUP_KEY, id)
    } catch {
      /* not remembered */
    }
  }
  const current = TOPIC_GROUPS.find((g) => g.id === group) ?? TOPIC_GROUPS[0]
  const topics = current.ids.map((id) => articlesByCategory.find((c) => c.id === id)).filter((c): c is (typeof articlesByCategory)[number] => !!c)
  return (
    <div className="space-y-4">
      <nav aria-label="Nhóm chủ đề" className="tb-chips no-scrollbar">
        {TOPIC_GROUPS.map((g) => (
          <button key={g.id} onClick={() => choose(g.id)} aria-pressed={g.id === current.id} className="tb-chip">
            {g.title}
            <span className="tb-chip-n">{g.ids.length}</span>
          </button>
        ))}
      </nav>
      <div key={current.id} className="tb-grid">
        {topics.map((c, i) => {
          const hub = c.articles[0]
          return (
            <div key={c.id} className="tb-tile theory-card" style={{ ...tint(c.id), '--i': i } as CSSProperties}>
              <button onClick={() => onSelect(c.id)} className="tb-main" aria-label={`Mở chủ đề ${c.title}`}>
                <span className="tb-media" aria-hidden>
                  {TOPIC_IMAGES[c.id] && <img src={TOPIC_IMAGES[c.id]} alt="" loading="lazy" decoding="async" />}
                  <span className="tb-glyph font-['Noto_Music']">{GLYPHS[c.id]}</span>
                  <span className="tb-count tabular-nums">{c.articles.length}</span>
                </span>
                <span className="tb-title">{c.title}</span>
                <span className="tb-desc">{c.description}</span>
              </button>
              {hub && (
                <Link to={`/theory/${hub.slug}`} className="tb-path" title={hub.title}>
                  <CompassIcon width={13} height={13} /> Lộ trình
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** Articles left part-way and saved ones, side by side in one swipeable row, so the next read is one tap away. */
export function ContinueRow() {
  const { saved } = useLibrary()
  const thumbs = useThumbs()
  const items = [
    ...unfinished(8).map((u) => ({ a: findArticle(u.slug), ratio: u.ratio })),
    ...saved.slice(0, 8).map((s) => ({ a: findArticle(s), ratio: -1 })),
  ].filter((x, i, all): x is { a: Article; ratio: number } => !!x.a && all.findIndex((y) => y.a?.slug === x.a!.slug) === i)
  if (!items.length) return null
  return (
    <section aria-label="Đọc tiếp" className="space-y-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">Đọc tiếp</p>
      <div className="cr-row no-scrollbar">
        {items.map(({ a, ratio }) => (
          <Link key={a.slug} to={`/theory/${a.slug}`} className="cr-card theory-card" style={tint(a.category)}>
            <span className="cr-thumb font-['Noto_Music']" aria-hidden>
              <span>{GLYPHS[a.category]}</span>
              {thumbs?.[a.slug] && <img src={thumbs[a.slug][0]} alt="" loading="lazy" decoding="async" className={clsx(thumbs[a.slug][1] && 'is-drawing')} onError={(e) => e.currentTarget.remove()} />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="cr-title">{a.title}</span>
              <span className="cr-meta">
                {ratio >= 0 ? (
                  <>
                    <ClockIcon width={11} height={11} /> {Math.round(ratio * 100)}%
                    <span className="cr-bar"><span style={{ transform: `scaleX(${ratio})` }} /></span>
                  </>
                ) : (
                  <>
                    <BookmarkIcon width={11} height={11} /> Đã lưu
                  </>
                )}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

/** Two questions from the quiz bank about this article, at its end (only when the bank has some). */
export function ArticleQuiz({ slug }: { slug: string }) {
  const [qs, setQs] = useState<{ q: string; a: string; opts: string[] }[]>([])
  const [picked, setPicked] = useState<Record<number, string>>({})
  useEffect(() => {
    let live = true
    import('./quiz/bank').then((m) => {
      if (!live) return
      const own = m.QUESTIONS.filter((q) => q.slug === slug)
      setQs(own.sort(() => Math.random() - 0.5).slice(0, 2).map((q) => ({ q: q.q, a: q.a, opts: [...q.w, q.a].sort(() => Math.random() - 0.5) })))
      setPicked({})
    })
    return () => {
      live = false
    }
  }, [slug])
  if (!qs.length) return null
  return (
    <section className="aq space-y-3 border-t border-[var(--color-border)] pt-6">
      <h2 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Tự kiểm tra</h2>
      {qs.map((q, i) => (
        <div key={q.q} className="aq-q">
          <p className="text-[14.5px] font-medium text-[var(--color-ink)]">{q.q}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {q.opts.map((opt) => {
              const chosen = picked[i]
              const state = chosen ? (opt === q.a ? 'right' : opt === chosen ? 'wrong' : 'idle') : 'idle'
              return (
                <button key={opt} disabled={!!chosen} onClick={() => setPicked((p) => ({ ...p, [i]: opt }))} data-state={state} className="aq-opt">
                  {state === 'right' && <CheckIcon width={14} height={14} />}
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}


/** Five gold staff lines drawn across the hero, then a few notes landing on them (decoration; runs once). */
export function HeroStaff() {
  const notes: [number, number][] = [[40, 25], [78, 35], [116, 30], [154, 25], [192, 20]]
  return (
    <span aria-hidden className="hero-staff">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {[10, 20, 30, 40, 50].map((y, k) => (
          <line key={y} x1={0} x2={100} y1={y} y2={y} pathLength={1} vectorEffect="non-scaling-stroke" style={{ '--k': k } as CSSProperties} />
        ))}
      </svg>
      <svg viewBox="0 0 230 60" preserveAspectRatio="xMaxYMid meet" className="absolute inset-y-0 right-[6%] h-full w-[46%]">
        {notes.map(([x, y], k) => (
          <ellipse key={x} cx={x} cy={y} rx={6.2} ry={4.4} transform={`rotate(-20 ${x} ${y})`} className="hs-note" style={{ '--k': k } as CSSProperties} />
        ))}
      </svg>
    </span>
  )
}
