import { hueTint, tintColor } from '../../lib/tint'
import { useMemo, useState, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { QuoteBanner } from './QuoteBanner'
import { ArrowLeftIcon, ArrowUpRightIcon, BookIcon, BranchesIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, CompassIcon, ListIcon, SearchIcon, XIcon } from '../../components/icons'
import { EmptyState } from '../../components/EmptyState'
import { ArticleGrid, SectionTitle } from '../theory/TheoryPage'
import { findArticle, normalize, type ArticleMeta as Article } from '../theory/wiki'
import { useLibrary } from '../theory/library'
import { PARTS, RESOLVED, type PartId, type ResolvedBranch } from './taxonomy'
import { ScrollArea } from '../../components/ScrollArea'
import { BranchTree } from './BranchTree'
import { useBack } from '../../hooks/useBack'
import { MusicMap } from './MusicMap'
import { PLACES } from './places'
import { Sky } from './Sky'
import { Sky3D } from './Sky3D'
import { ResearchTools } from '../research/ResearchTools'
import { neighbours, partView, skyOf, type Layout } from './constellation'
import { useMediaQuery } from '../../hooks/useMediaQuery'

/** The map of places lives at /musicology/ban-do, beside the branches. */
const MAP_ID = 'ban-do'


const NUMERALS: Partial<Record<PartId, string>> = { historical: 'I', systematic: 'II', applied: 'III', practice: 'IV' }

/** "II.3" for the third systematic branch; the introduction has no number. */
const numberOf = (b: ResolvedBranch) => {
  const n = NUMERALS[b.part]
  return n ? `${n}.${RESOLVED.filter((o) => o.part === b.part).indexOf(b) + 1}` : ''
}

const branchSlugs = (b: ResolvedBranch) => new Set(b.resolved.flatMap((r) => r.articles.filter((a) => !a.unlisted).map((a) => a.slug)))

/** Read / total over the listed articles of a branch (person pages are reference, not reading). */
function useProgress() {
  const { read } = useLibrary()
  return useMemo(() => {
    const done = new Set(read)
    const of = (b: ResolvedBranch) => {
      const slugs = [...branchSlugs(b)]
      return { read: slugs.filter((s) => done.has(s)).length, total: slugs.length }
    }
    const all = new Set(RESOLVED.flatMap((b) => [...branchSlugs(b)]))
    return { of, read: [...all].filter((s) => done.has(s)).length, total: all.size }
  }, [read])
}

export function MusicologyPage() {
  const { branch: id } = useParams()
  const branch = id ? RESOLVED.find((b) => b.id === id) : undefined
  const back = useBack('/musicology')

  return (
    <ScrollArea key={id} collapse={id ? [60, 140] : [40, 190]} className={clsx('relative h-full overflow-x-hidden', id === MAP_ID ? 'overflow-hidden' : 'overflow-y-auto pb-28 lg:pb-10')}>
      <div data-collapse className="glass sticky top-0 z-20 border-b border-[var(--color-border)]" style={branch && hueTint(branch.hue)}>
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 lg:px-8">
          {id && (
            <button
              onClick={back}
              aria-label="Quay lại"
              className="-ml-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)] active:scale-90"
            >
              <ArrowLeftIcon width={18} height={18} />
            </button>
          )}
          <div className="min-w-0 flex-1">
            {id === MAP_ID ? (
              <p className="truncate font-display text-[15.5px] font-semibold leading-tight text-[var(--color-ink)]">Bản đồ âm nhạc</p>
            ) : branch ? (
              // The breadcrumb gives way to the branch's name as its large title scrolls under the bar.
              <div className="grid">
                <p className="collapse-out truncate text-[12.5px] text-[var(--color-ink-muted)] [grid-area:1/1]">
                  <Link to="/musicology" className="hover:text-[var(--color-ink)]">Âm nhạc học</Link>
                  <span className="mx-1.5 text-[var(--color-ink-faint)]">/</span>
                  <span className="font-medium text-[var(--tint)]">{PARTS[branch.part].title}</span>
                </p>
                <p aria-hidden className="collapse-in pointer-events-none truncate font-display text-[15.5px] font-semibold leading-tight text-[var(--color-ink)] [grid-area:1/1]">{branch.title}</p>
              </div>
            ) : (
              <h1 className="collapse-in truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)]">Âm nhạc học</h1>
            )}
          </div>
          <Link to="/theory" className="flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[12.5px] font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]">
            <BookIcon width={15} height={15} /> <span className="hidden sm:inline">Thư viện lý thuyết</span>
          </Link>
        </div>
      </div>

      {!id ? (
        <MapIndex />
      ) : id === MAP_ID ? (
        <MusicMap />
      ) : branch ? (
        <BranchView branch={branch} />
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-10">
          <EmptyState icon={<BranchesIcon width={30} height={30} />} title="Không có phân ngành này" description={`“${id}” không nằm trong bản đồ.`} />
        </div>
      )}
    </ScrollArea>
  )
}

/* -------------------------------------------------------------------- map */

const PART_ORDER: PartId[] = ['historical', 'systematic', 'applied', 'practice']

/** The branch whose name flies into the branch page's heading (and back): one element per page carries the name. */
let morphBranch: string | undefined
function markMorph(id: string, from: Element | null) {
  morphBranch = id
  document.querySelectorAll('.vt-bt, .vt-bg').forEach((el) => el.classList.remove('vt-bt', 'vt-bg'))
  from?.querySelector('[data-bt]')?.classList.add('vt-bt')
  from?.querySelector('[data-bg]')?.classList.add('vt-bg')
}

const BY_ID = new Map(RESOLVED.map((b) => [b.id, b]))

function useLayout(): Layout {
  return useMediaQuery('(orientation: portrait) and (max-width: 900px)') ? 'tall' : 'wide'
}

function MapIndex() {
  const progress = useProgress()
  const layout = useLayout()
  const lit = (id: string) => {
    const p = progress.of(BY_ID.get(id)!)
    return p.total ? p.read / p.total : 0
  }
  const intro = RESOLVED.find((b) => b.part === 'intro')!
  const foundations = intro.resolved[0].articles
  const pct = progress.total ? Math.round((progress.read / progress.total) * 100) : 0
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState<string | null>(null)
  const [theoryOpen, setTheoryOpen] = useState(false)
  const q = normalize(query)
  // One part at a time: the chips switch the chapter shown below instead of jumping down a long page.
  const [part, setPart] = useState<PartId>(() => {
    try {
      return (sessionStorage.getItem('musicology:part') as PartId | null) ?? PART_ORDER[0]
    } catch {
      return PART_ORDER[0]
    }
  })
  const jump = (p: PartId) => {
    setPart(p)
    try {
      sessionStorage.setItem('musicology:part', p)
    } catch {
      /* not remembered */
    }
  }

  return (
    <>
      {/* 1 · the sky: every branch a star, every part a constellation, every shared article a thread between stars */}
      <section className="mc-stage" aria-label="Bầu trời âm nhạc học">
        <div className={`mc-stage-pin${sel || theoryOpen ? ' has-sel' : ''}`}>
          <div className="mc-stage-head">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#e2b66e]">Musikwissenschaft · Musicology</p>
            <h2 data-collapse className="collapse-large mt-3 max-w-xl font-display text-[30px] font-semibold leading-[1.1] tracking-tight text-[#f6ecdc] sm:text-[46px]">
              Bản đồ nghiên cứu <span className="mc-gold"><span className="text-gold-gradient italic">âm nhạc học</span></span>
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#e9dcc6]/75 sm:text-[15px]">
              Mỗi ngôi sao là một phân ngành, mỗi chòm là một phần của ngành theo khung Guido Adler (1885) mở rộng; đường nối hai sao là những bài hai ngành cùng đọc.
            </p>
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
              {[
                [RESOLVED.filter((b) => b.part !== 'intro').length, 'phân ngành'],
                [progress.total, 'bài được xếp'],
                [`${pct}%`, `đã đọc (${progress.read})`],
              ].map(([n, label]) => (
                <div key={label} className="flex items-baseline gap-1.5">
                  <dt className="font-display text-[22px] font-semibold text-[#f0c987]">{n}</dt>
                  <dd className="text-[12.5px] text-[#e9dcc6]/60">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mc3">
            <Sky3D selected={sel} onSelect={setSel} lit={lit} onTheory={setTheoryOpen} />
            {!sel && !theoryOpen && <p className="mc-hint">Kéo để xoay · chạm một ngôi sao, một chủ đề hay một bài để bay tới</p>}
            {sel && <StarCard id={sel} lit={lit} onPick={setSel} onClose={() => setSel(null)} />}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 lg:px-8">
        <Link to={`/musicology/${MAP_ID}`} className="group flex items-center gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-colors hover:border-[var(--color-gold)] sm:p-5">
          <Globe />
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[17px] font-semibold text-[var(--color-ink)]">Bản đồ: nơi âm nhạc đã xảy ra</span>
            <span className="block text-[13px] text-[var(--color-ink-muted)]">{PLACES.length} địa điểm từ Leipzig, Vienna, New Orleans tới Huế — mỗi sự kiện dẫn sang bài trong thư viện.</span>
          </span>
          <ArrowUpRightIcon width={18} height={18} className="shrink-0 text-[var(--color-ink-faint)] transition-colors group-hover:text-[var(--color-gold)]" />
        </Link>

        <ResearchTools />

        <QuoteBanner />

        <div className="space-y-2.5">
          <label className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-2 focus-within:border-[var(--color-gold)]">
            <SearchIcon width={16} height={16} className="shrink-0 text-[var(--color-ink-faint)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm ngành hoặc bài trong âm nhạc học…"
              className="min-w-0 flex-1 bg-transparent text-[14px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-faint)]"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Xoá" className="rounded-lg p-0.5 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]">
                <XIcon width={15} height={15} />
              </button>
            )}
          </label>
        </div>

        {q ? (
          <SearchResults q={q} />
        ) : (
          <section className="space-y-4">
            <SectionTitle icon={<CompassIcon width={16} height={16} />} hint="Ngôi sao giữa trời">Nhập môn</SectionTitle>
            <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
              {foundations.slice(0, 4).map((a, i) => (
                <Link
                  key={a.slug}
                  to={`/theory/${a.slug}`}
                  style={{ ...hueTint(intro.hue), animationDelay: `${i * 50}ms` }}
                  className="theory-card animate-float-up group relative flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 lg:w-auto"
                >
                  <span className="font-display text-[28px] font-semibold leading-none text-[color-mix(in_oklch,var(--tint)_55%,transparent)]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-3 font-display text-[17px] font-semibold leading-snug text-[var(--color-ink)]">{a.title}</span>
                  <span className="mt-2 line-clamp-3 text-[12.5px] leading-relaxed text-[var(--color-ink-muted)]">{a.summary}</span>
                  <span className="mt-auto flex items-center gap-1 pt-4 text-[12.5px] font-medium text-[var(--color-ink)]">
                    Đọc <ArrowUpRightIcon width={14} height={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
        {!q && (
          <nav className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 lg:mx-0 lg:px-0" aria-label="Chọn phần">
            {PART_ORDER.map((p) => (
              <button
                key={p}
                onClick={() => jump(p)}
                aria-pressed={part === p}
                className={clsx(
                  'shrink-0 rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors',
                  part === p ? 'border-[color-mix(in_oklch,var(--color-gold)_55%,transparent)] bg-[color-mix(in_oklch,var(--color-gold)_14%,var(--color-surface-raised))] text-[var(--color-ink)]' : 'border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
                )}
              >
                {NUMERALS[p]} · {PARTS[p].title} <span className="tabular-nums opacity-60">{RESOLVED.filter((b) => b.part === p).length}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* 2 · the parts: the camera flies to each constellation in turn, then its branches slide up over it */}
      {!q && <PartChapter key={part} part={part} layout={layout} lit={lit} progress={progress.of} />}

      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
        <footer className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 text-[13px] leading-relaxed text-[var(--color-ink-muted)] sm:p-6">
          <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Cách xếp</p>
          <p className="mt-1">
            Bốn phần: lịch sử và hệ thống theo sơ đồ của Adler (1885), âm nhạc học ứng dụng (công nghiệp, sức khoẻ, giáo dục, công nghệ) và thực hành sáng tạo. Mỗi bài có mặt ít nhất ở một phân ngành; một bài có thể nằm ở nhiều phân ngành vì các phân ngành là góc nhìn, không phải ngăn kéo — đường nối giữa các ngôi sao chính là những bài ấy (mỗi sao giữ bốn mối nối mạnh nhất). Tên tiếng Việt của một số phân ngành là đề xuất của thư viện; xem bảng thuật ngữ trong{' '}
            <Link to="/theory/am-nhac-hoc" className="font-medium text-[var(--color-ink)] underline decoration-[var(--color-gold)] underline-offset-2">bài tổng quan</Link>.
          </p>
        </footer>
      </div>
    </>
  )
}

/** A slowly turning globe: the door to the map of places (it grows into the map on the way in). */
function Globe() {
  return (
    <span className="mc-globe" aria-hidden>
      <svg viewBox="-24 -24 48 48">
        <circle r="21" className="mc-globe-sea" />
        <ellipse rx="21" ry="7.5" className="mc-globe-line" />
        <line x1="-21" x2="21" className="mc-globe-line" />
        <g className="mc-globe-spin">
          <ellipse rx="7" ry="21" className="mc-globe-line" />
          <ellipse rx="15" ry="21" className="mc-globe-line" />
        </g>
        <circle r="21" className="mc-globe-rim" />
      </svg>
    </span>
  )
}

/** The chosen star: its branch, how far it has been read, and the branches it shares articles with (tap to travel). */
function StarCard({ id, lit, onPick, onClose }: { id: string; lit: (id: string) => number; onPick: (id: string) => void; onClose: () => void }) {
  const b = BY_ID.get(id)!
  const near = neighbours(id, 5)
  return (
    <div key={id} className="mc-card" style={hueTint(b.hue)} role="dialog" aria-label={b.title}>
      <button onClick={onClose} aria-label="Đóng" className="mc-card-x"><XIcon width={15} height={15} /></button>
      <div className="flex items-start gap-3">
        <span data-bg className="mc-card-glyph">{b.glyph}</span>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--tint)]">{numberOf(b) ? `${numberOf(b)} · ` : ''}{PARTS[b.part].title}</p>
          <p data-bt className="mt-0.5 font-display text-[18px] font-semibold leading-snug text-[#f6ecdc]">{b.title}</p>
          <p className="text-[12px] italic text-[#e9dcc6]/55">{b.en} · {b.count} bài · đã đọc {Math.round(lit(id) * 100)}%</p>
        </div>
      </div>
      {near.length > 0 && (
        <div className="mt-3">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#e9dcc6]/50">Chung bài với</p>
          <div className="no-scrollbar mt-1.5 flex gap-1.5 overflow-x-auto">
            {near.map(({ branch: o, n }) => (
              <button key={o.id} onClick={() => onPick(o.id)} className="mc-chip" style={hueTint(o.hue)}>
                {o.title.split(':')[0]} <b>{n}</b>
              </button>
            ))}
          </div>
        </div>
      )}
      <Link to={`/musicology/${b.id}`} onClick={(e) => markMorph(b.id, e.currentTarget.closest('.mc-card'))} className="btn-gold mt-3.5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium">
        Mở phân ngành <ArrowUpRightIcon width={14} height={14} />
      </Link>
    </div>
  )
}

function PartChapter({ part, layout, lit, progress }: { part: PartId; layout: Layout; lit: (id: string) => number; progress: (b: ResolvedBranch) => { read: number; total: number } }) {
  const branches = RESOLVED.filter((b) => b.part === part)
  const { stars, edges } = skyOf(layout)
  const view = partView(stars, part, layout === 'tall' ? 1.15 : 1.3)
  const inPart = new Set(branches.map((b) => b.id))
  const outward = edges.filter((e) => inPart.has(e.a) !== inPart.has(e.b)).length
  const articles = new Set(branches.flatMap((b) => [...branchSlugs(b)])).size
  return (
    <section id={`phan-${part}`} className="mc-part" aria-labelledby={`phan-${part}-t`}>
      <div className="mc-part-pin">
        <div className="mc-part-sky">
          <Sky layout={layout} view={view} focus={part} lit={lit} />
        </div>
        <div className="mc-part-head">
          <span aria-hidden className="mc-part-num">{NUMERALS[part]}</span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e2b66e]">{PARTS[part].en}</p>
          <h3 id={`phan-${part}-t`} className="mt-1 font-display text-[30px] font-semibold leading-[1.1] tracking-tight text-[#f6ecdc] sm:text-[44px]">{PARTS[part].title}</h3>
          <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-[#e9dcc6]/72 sm:text-[14.5px]">{PARTS[part].description}</p>
          <p className="mc-part-facts">
            <span><b>{branches.length}</b> phân ngành</span>
            <span><b>{articles}</b> bài</span>
            <span><b>{outward}</b> mối nối sang phần khác</span>
          </p>
        </div>
      </div>
      <div className="mc-part-body">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BranchTree className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b, i) => (
              <BranchCard key={b.id} branch={b} progress={progress(b)} delay={i * 35} />
            ))}
          </BranchTree>
        </div>
      </div>
    </section>
  )
}

/** Branches and articles of the map matching the query; an article appears once, under its first branch. */
function SearchResults({ q }: { q: string }) {
  const branches = RESOLVED.filter((b) => b.part !== 'intro' && normalize(`${b.title} ${b.en} ${b.summary}`).includes(q))
  const seen = new Set<string>()
  const hits: { article: Article; branch: ResolvedBranch }[] = []
  for (const b of RESOLVED)
    for (const r of b.resolved)
      for (const a of r.articles)
        if (!seen.has(a.slug) && normalize([a.title, ...(a.aliases ?? [])].join(' ')).includes(q)) {
          seen.add(a.slug)
          hits.push({ article: a, branch: b })
        }
  if (!branches.length && !hits.length)
    return <EmptyState icon={<SearchIcon width={28} height={28} />} title="Không tìm thấy" description="Thử một từ khác, hoặc tìm trong cả thư viện lý thuyết." />
  return (
    <div className="space-y-6">
      {branches.length > 0 && (
        <section className="space-y-3">
          <SectionTitle hint={`${branches.length} ngành`}>Phân ngành</SectionTitle>
          <BranchTree className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b, i) => (
              <BranchCard key={b.id} branch={b} progress={{ read: 0, total: b.count }} delay={i * 30} />
            ))}
          </BranchTree>
        </section>
      )}
      {hits.length > 0 && (
        <section className="space-y-3">
          <SectionTitle hint={`${hits.length} bài`}>Bài viết</SectionTitle>
          <ul className="divide-y divide-[var(--color-border)] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
            {hits.slice(0, 60).map(({ article: a, branch: b }) => (
              <li key={a.slug} style={hueTint(b.hue)}>
                <Link to={`/theory/${a.slug}`} className="flex flex-col gap-0.5 px-4 py-2.5 transition-colors hover:bg-[var(--color-surface-sunken)] sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="min-w-0 flex-1 text-[14px] font-medium leading-snug text-[var(--color-ink)]">{a.title}</span>
                  <span className="truncate text-[11.5px] text-[var(--tint)] sm:max-w-[45%] sm:shrink-0">{b.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

function BranchCard({ branch: b, progress, delay }: { branch: ResolvedBranch; progress: { read: number; total: number }; delay: number }) {
  const pct = progress.total ? (progress.read / progress.total) * 100 : 0
  return (
    <Link
      to={`/musicology/${b.id}`}
      onClick={(e) => markMorph(b.id, e.currentTarget)}
      style={{ ...hueTint(b.hue), animationDelay: `${delay}ms` }}
      className="theory-card reveal group flex h-full items-start gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
    >
      <span data-bg className={clsx(morphBranch === b.id && 'vt-bg', `flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_oklch,var(--tint)_14%,transparent)] font-['Noto_Music'] text-[22px] text-[var(--tint)] ring-1 ring-[color-mix(in_oklch,var(--tint)_22%,transparent)] transition-transform duration-300 group-hover:scale-105`)}>
        {b.glyph}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline gap-2">
          <span className="shrink-0 font-display text-[13px] font-semibold tabular-nums text-[var(--tint)]">{numberOf(b)}</span>
          <span data-bt className={clsx(morphBranch === b.id && 'vt-bt', 'text-[15px] font-semibold leading-snug text-[var(--color-ink)]')}>{b.title}</span>
        </span>
        <span className="mt-0.5 block text-[11.5px] italic text-[var(--color-ink-faint)] max-sm:hidden">{b.en}</span>
        <span className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-[var(--color-ink-muted)] max-sm:hidden">{b.summary}</span>
        <span className="mt-2.5 flex items-center gap-2.5">
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--color-surface-sunken)]">
            <span className="block h-full rounded-full bg-[var(--tint)] transition-[width] duration-700" style={{ width: `${pct}%` }} />
          </span>
          <span className="shrink-0 text-[11.5px] tabular-nums text-[var(--color-ink-faint)]">
            {progress.read}/{progress.total} bài
          </span>
        </span>
      </span>
    </Link>
  )
}

/* ----------------------------------------------------------------- branch */

const VIEW_KEY = 'musicology:view'

/** Cards read well on first visit; a compact list is quicker to scan once you know the branch. */
function useViewMode() {
  const [mode, setMode] = useState<'grid' | 'list'>(() => {
    try {
      return localStorage.getItem(VIEW_KEY) === 'list' ? 'list' : 'grid'
    } catch {
      return 'grid'
    }
  })
  const choose = (m: 'grid' | 'list') => {
    setMode(m)
    try {
      localStorage.setItem(VIEW_KEY, m)
    } catch {
      /* private mode: the choice lasts for this visit only */
    }
  }
  return [mode, choose] as const
}

function BranchView({ branch: b }: { branch: ResolvedBranch }) {
  const progress = useProgress().of(b)
  const { read } = useLibrary()
  const [mode, setMode] = useViewMode()
  const hub = findArticle(b.hub)
  const index = RESOLVED.indexOf(b)
  const [prev, next] = [RESOLVED[index - 1], RESOLVED[index + 1]]
  const groups = b.resolved.filter((r) => r.articles.length > 0)
  const done = new Set(read)
  // The next article in the branch's reading order that has not been opened yet.
  const nextUp = groups.flatMap((r) => r.articles).find((a) => !a.unlisted && !done.has(a.slug))

  return (
    <div style={hueTint(b.hue)} className="mx-auto max-w-6xl space-y-8 px-4 py-5 lg:px-8 lg:py-8">
      <header className="animate-float-up relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(135deg,color-mix(in_oklch,var(--tint)_14%,var(--color-surface-raised)),var(--color-surface-raised)_70%)] p-6 sm:p-8">
        <span aria-hidden className="vt-bg absolute -right-2 -top-6 font-['Noto_Music'] text-[150px] leading-none text-[color-mix(in_oklch,var(--tint)_14%,transparent)]">{b.glyph}</span>
        <p className="relative text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--tint)]">
          {numberOf(b) && `${numberOf(b)} · `}
          {PARTS[b.part].title}
        </p>
        <h2 data-collapse className="vt-bt collapse-large relative mt-1 max-w-3xl font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">{b.title}</h2>
        <p className="relative mt-0.5 text-[13px] italic text-[var(--color-ink-faint)]">{b.en}</p>
        <p className="relative mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">{b.summary}</p>

        <div className="relative mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">Câu hỏi nghiên cứu</p>
            <ul className="mt-2 space-y-1.5">
              {b.questions.map((q) => (
                <li key={q} className="flex gap-2 text-[13.5px] leading-snug text-[var(--color-ink)]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--tint)]" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2 lg:items-end">
            {hub && (
              <Link to={`/theory/${hub.slug}`} className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium">
                <CompassIcon width={15} height={15} /> Tổng quan: {hub.title}
              </Link>
            )}
            {nextUp && nextUp.slug !== hub?.slug && (
              <Link to={`/theory/${nextUp.slug}`} className="inline-flex max-w-xs items-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-2 text-[13px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--tint)]">
                <span className="shrink-0 text-[var(--tint)]">Đọc tiếp:</span> <span className="truncate">{nextUp.title}</span>
              </Link>
            )}
            <span className="text-[12px] tabular-nums text-[var(--color-ink-faint)]">
              Đã đọc {progress.read}/{progress.total} bài
            </span>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-end gap-1" role="group" aria-label="Cách hiển thị">
        {(['grid', 'list'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={clsx(
              'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium transition-colors',
              mode === m ? 'bg-[var(--color-surface-sunken)] text-[var(--color-ink)]' : 'text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]',
            )}
          >
            {m === 'grid' ? <BranchesIcon width={14} height={14} /> : <ListIcon width={14} height={14} />}
            {m === 'grid' ? 'Thẻ' : 'Danh sách'}
          </button>
        ))}
      </div>

      {groups.length > 2 && (
        <nav aria-label="Các nhóm" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
          {groups.map((r, i) => (
            <a
              key={r.group.title}
              href={`#g-${i}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(`g-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-[12.5px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--tint)]"
            >
              {r.group.title} <span className="tabular-nums text-[var(--color-ink-faint)]">{r.articles.length}</span>
            </a>
          ))}
        </nav>
      )}

      {groups.map((r, i) => (
        <section key={r.group.title} id={`g-${i}`} className="mc-grow scroll-mt-20 space-y-3">
          <SectionTitle hint={`${r.articles.length} ${r.group.people ? 'trang' : 'bài'}`}>{r.group.title}</SectionTitle>
          {r.group.people ? (
            <People articles={r.articles} />
          ) : mode === 'list' ? (
            <ArticleList articles={r.articles} done={done} />
          ) : (
            <ArticleGrid articles={r.articles} numbered showCategory />
          )}
        </section>
      ))}

      <Neighbours branch={b} />

      <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[prev, next].map((o, i) =>
          o ? (
            <Link
              key={o.id}
              to={`/musicology/${o.id}`}
              style={hueTint(o.hue)}
              className={clsx('theory-card group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4', i ? 'sm:col-start-2 sm:text-right' : '')}
            >
              <span className={clsx('flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-faint)]', i && 'sm:justify-end')}>
                {i ? <>Ngành sau <ChevronRightIcon width={12} height={12} /></> : <><ChevronLeftIcon width={12} height={12} /> Ngành trước</>}
              </span>
              <span className="mt-1 line-clamp-2 font-display text-[16px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--tint)]">
                {numberOf(o) && `${numberOf(o)} `}
                {o.title}
              </span>
            </Link>
          ) : null,
        )}
      </nav>
    </div>
  )
}

/** Compact rows: number, title, a tick once read. */
function ArticleList({ articles, done }: { articles: Article[]; done: Set<string> }) {
  return (
    <ol className="divide-y divide-[var(--color-border)] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      {articles.map((a, i) => (
        <li key={a.slug}>
          <Link to={`/theory/${a.slug}`} className="group flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-[var(--color-surface-sunken)]">
            <span className="w-6 shrink-0 font-display text-[13px] font-semibold tabular-nums text-[var(--tint)]">{String(i + 1).padStart(2, '0')}</span>
            <span className="min-w-0 flex-1 truncate text-[14px] text-[var(--color-ink)] group-hover:text-[var(--tint)]">{a.title}</span>
            {done.has(a.slug) && <CheckIcon width={15} height={15} aria-label="Đã đọc" className="shrink-0 text-[var(--tint)]" />}
          </Link>
        </li>
      ))}
    </ol>
  )
}

/** One page per person: too many for cards, so a compact list of names. */
function People({ articles }: { articles: Article[] }) {
  return (
    <details className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
      <summary className="cursor-pointer list-none text-[13px] font-medium text-[var(--color-ink)]">
        <span className="group-open:hidden">Hiện {articles.length} trang tiểu sử</span>
        <span className="hidden group-open:inline">Ẩn danh sách</span>
      </summary>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {articles.map((a) => (
          <Link key={a.slug} to={`/theory/${a.slug}`} className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[12.5px] text-[var(--color-ink)] transition-colors hover:border-[var(--tint)] hover:text-[var(--tint)]">
            {a.title}
          </Link>
        ))}
      </div>
    </details>
  )
}

/**
 * The branches this one shares articles with, as a small constellation: this star in the middle, its neighbours round
 * it at a distance that shrinks as the number of shared articles grows, the threads as thick as the overlap.
 */
function Neighbours({ branch: b }: { branch: ResolvedBranch }) {
  const near = neighbours(b.id, 6)
  if (!near.length) return null
  const max = near[0].n
  const pts = near.map(({ n }, i) => {
    const t = -Math.PI / 2 + (i / near.length) * Math.PI * 2
    const d = 118 - (n / max) * 46
    return [Math.cos(t) * d, Math.sin(t) * d * 0.78]
  })
  return (
    <section className="mc-near space-y-4">
      <SectionTitle icon={<BranchesIcon width={16} height={16} />} hint="Cùng đọc chung bài">Ngành láng giềng</SectionTitle>
      <div className="mc-near-grid">
        <svg viewBox="-160 -120 320 240" className="mc-near-sky" aria-hidden>
          {pts.map(([x, y], i) => (
            <line key={i} x1={0} y1={0} x2={x} y2={y} className="mc-near-edge" style={{ strokeWidth: 0.8 + (near[i].n / max) * 2.4 }} />
          ))}
          <circle r={26} className="mc-near-halo" />
          <circle r={7} className="mc-near-core" />
          {pts.map(([x, y], i) => (
            <g key={near[i].branch.id} transform={`translate(${x} ${y})`}>
              <circle r={3.2 + (near[i].n / max) * 2.6} className="mc-near-star" style={{ fill: tintColor(near[i].branch.hue, 0.84, 0.06) }} />
            </g>
          ))}
        </svg>
        <ul className="grid gap-2 sm:grid-cols-2">
          {near.map(({ branch: o, n }, i) => (
            <li key={o.id} style={{ ...hueTint(o.hue), '--i': i } as CSSProperties} className="mc-near-item">
              <Link to={`/musicology/${o.id}`} className="theory-card group flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_oklch,var(--tint)_14%,transparent)] font-['Noto_Music'] text-[18px] text-[var(--tint)]">{o.glyph}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--tint)]">{o.title}</span>
                  <span className="block text-[11.5px] text-[var(--color-ink-faint)]">{PARTS[o.part].title}</span>
                </span>
                <span className="shrink-0 rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[11.5px] tabular-nums text-[var(--color-ink-muted)]">{n} bài chung</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
