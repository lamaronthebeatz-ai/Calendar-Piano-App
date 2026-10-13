import { useMemo, useState, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowLeftIcon, ArrowUpRightIcon, BookIcon, BranchesIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, CompassIcon, ListIcon, SearchIcon, XIcon } from '../../components/icons'
import { EmptyState } from '../../components/EmptyState'
import { ArticleGrid, SectionTitle } from '../theory/TheoryPage'
import { findArticle, normalize, type Article } from '../theory/wiki'
import { useLibrary } from '../theory/library'
import { PARTS, RESOLVED, type PartId, type ResolvedBranch } from './taxonomy'
import { ScrollArea } from '../../components/ScrollArea'
import { useBack } from '../../hooks/useBack'

const hueTint = (hue: number) => ({ '--tint': `oklch(0.6 0.13 ${hue})` }) as CSSProperties

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
    <ScrollArea key={id} className="relative h-full overflow-x-hidden overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]" style={branch && hueTint(branch.hue)}>
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
            {branch ? (
              <p className="truncate text-[12.5px] text-[var(--color-ink-muted)]">
                <Link to="/musicology" className="hover:text-[var(--color-ink)]">Âm nhạc học</Link>
                <span className="mx-1.5 text-[var(--color-ink-faint)]">/</span>
                <span className="font-medium text-[var(--tint)]">{PARTS[branch.part].title}</span>
              </p>
            ) : (
              <h1 className="truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)]">Âm nhạc học</h1>
            )}
          </div>
          <Link to="/theory" className="flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[12.5px] font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]">
            <BookIcon width={15} height={15} /> <span className="hidden sm:inline">Thư viện lý thuyết</span>
          </Link>
        </div>
      </div>

      {!id ? (
        <MapIndex />
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

type PartFilter = PartId | 'all'

const PART_ORDER: PartId[] = ['historical', 'systematic', 'applied', 'practice']

function MapIndex() {
  const progress = useProgress()
  const intro = RESOLVED.find((b) => b.part === 'intro')!
  const foundations = intro.resolved[0].articles
  const pct = progress.total ? Math.round((progress.read / progress.total) * 100) : 0
  const [query, setQuery] = useState('')
  const [part, setPart] = useState<PartFilter>(() => {
    try {
      return (sessionStorage.getItem('musicology:part') as PartFilter | null) ?? 'all'
    } catch {
      return 'all'
    }
  })
  const choosePart = (p: PartFilter) => {
    setPart(p)
    try {
      sessionStorage.setItem('musicology:part', p)
    } catch {
      /* private mode: the filter just isn't remembered */
    }
  }
  const q = normalize(query)
  const parts = PART_ORDER.filter((p) => part === 'all' || p === part)

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-5 lg:px-8 lg:py-8">
      <section className="hero-ebony animate-float-up relative isolate overflow-hidden rounded-[28px] px-5 pb-6 pt-7 shadow-[var(--shadow-float)] sm:px-9 sm:pb-9 sm:pt-10">
        <BranchesIcon aria-hidden width={300} height={300} strokeWidth={0.6} className="pointer-events-none absolute -right-16 -top-10 -z-10 text-[#e2b66e]/15 sm:right-4" />
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.24em] text-[#e2b66e]">Musikwissenschaft · Musicology</p>
        <h2 className="mt-3 max-w-xl font-display text-[30px] font-semibold leading-[1.1] tracking-tight text-[#f6ecdc] sm:text-[44px]">
          Bản đồ nghiên cứu <span className="text-gold-gradient italic">âm nhạc học</span>
        </h2>
        <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#e9dcc6]/75 sm:text-[15px]">
          Toàn bộ thư viện lý thuyết được xếp lại theo khung của ngành: hai nhánh lịch sử và hệ thống của Guido Adler (1885), thêm âm nhạc học ứng dụng và thực hành — để nghiên cứu có hệ thống thay vì đọc theo chủ đề.
        </p>
        <dl className="mt-5 flex max-w-lg flex-wrap gap-x-6 gap-y-2">
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
        <div className="mt-4 h-1 max-w-lg overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-[#e2b66e] to-[#c9773f] transition-[width] duration-700" style={{ width: `${pct}%` }} />
        </div>
      </section>

      {/* One toolbar for the whole map: find a branch or an article, or narrow to one part. */}
      <div data-scrolled className="glass sticky top-14 z-10 -mx-4 space-y-2.5 border-b border-[var(--color-border)] px-4 py-3 lg:mx-0 lg:rounded-2xl lg:border">
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
        {!q && (
          <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 lg:mx-0 lg:px-0" role="tablist" aria-label="Phần">
            {(['all', ...PART_ORDER] as PartFilter[]).map((p) => {
              const n = p === 'all' ? RESOLVED.filter((b) => b.part !== 'intro').length : RESOLVED.filter((b) => b.part === p).length
              return (
                <button
                  key={p}
                  role="tab"
                  aria-selected={part === p}
                  onClick={() => choosePart(p)}
                  className={clsx(
                    'shrink-0 rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors',
                    part === p
                      ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-surface)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink)] hover:border-[var(--color-gold)]',
                  )}
                >
                  {p === 'all' ? 'Tất cả' : `${NUMERALS[p]} · ${PARTS[p].title}`} <span className="tabular-nums opacity-60">{n}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {q ? (
        <SearchResults q={q} />
      ) : (
        <>
          {part === 'all' && (
            <section className="space-y-4">
              <SectionTitle icon={<CompassIcon width={16} height={16} />} hint="Đọc trước khi vào từng ngành">Nhập môn</SectionTitle>
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
          {parts.map((p) => (
            <PartSection key={p} part={p} progress={progress.of} />
          ))}
        </>
      )}

      <footer className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 text-[13px] leading-relaxed text-[var(--color-ink-muted)] sm:p-6">
        <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Cách xếp</p>
        <p className="mt-1">
          Bốn phần: lịch sử và hệ thống theo sơ đồ của Adler (1885), âm nhạc học ứng dụng (công nghiệp, sức khoẻ, giáo dục, công nghệ) và thực hành sáng tạo. Mỗi bài có mặt ít nhất ở một phân ngành; một bài có thể nằm ở nhiều phân ngành vì các phân ngành là góc nhìn, không phải ngăn kéo. Tên tiếng Việt của một số phân ngành là đề xuất của thư viện; xem bảng thuật ngữ trong{' '}
          <Link to="/theory/am-nhac-hoc" className="font-medium text-[var(--color-ink)] underline decoration-[var(--color-gold)] underline-offset-2">bài tổng quan</Link>.
        </p>
      </footer>
    </div>
  )
}

function PartSection({ part, progress }: { part: PartId; progress: (b: ResolvedBranch) => { read: number; total: number } }) {
  const branches = RESOLVED.filter((b) => b.part === part)
  return (
    <section className="space-y-4">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
          {NUMERALS[part]} · {PARTS[part].en}
        </p>
        <h3 className="mt-0.5 font-display text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">{PARTS[part].title}</h3>
        <p className="mt-1 max-w-3xl text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{PARTS[part].description}</p>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {branches.map((b, i) => (
          <BranchCard key={b.id} branch={b} progress={progress(b)} delay={i * 35} />
        ))}
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
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b, i) => (
              <BranchCard key={b.id} branch={b} progress={{ read: 0, total: b.count }} delay={i * 30} />
            ))}
          </div>
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
      style={{ ...hueTint(b.hue), animationDelay: `${delay}ms` }}
      className="theory-card reveal group flex h-full items-start gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_oklch,var(--tint)_14%,transparent)] font-['Noto_Music'] text-[22px] text-[var(--tint)] ring-1 ring-[color-mix(in_oklch,var(--tint)_22%,transparent)] transition-transform duration-300 group-hover:scale-105">
        {b.glyph}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline gap-2">
          <span className="shrink-0 font-display text-[13px] font-semibold tabular-nums text-[var(--tint)]">{numberOf(b)}</span>
          <span className="text-[15px] font-semibold leading-snug text-[var(--color-ink)]">{b.title}</span>
        </span>
        <span className="mt-0.5 block text-[11.5px] italic text-[var(--color-ink-faint)]">{b.en}</span>
        <span className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{b.summary}</span>
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
        <span aria-hidden className="absolute -right-2 -top-6 font-['Noto_Music'] text-[150px] leading-none text-[color-mix(in_oklch,var(--tint)_14%,transparent)]">{b.glyph}</span>
        <p className="relative text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--tint)]">
          {numberOf(b) && `${numberOf(b)} · `}
          {PARTS[b.part].title}
        </p>
        <h2 className="relative mt-1 max-w-3xl font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">{b.title}</h2>
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
              <Link to={`/theory/${hub.slug}`} className="btn-sheen relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[var(--color-ink)] px-4 py-2.5 text-[13.5px] font-medium text-[var(--color-surface)] transition-transform hover:-translate-y-px">
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
        <section key={r.group.title} id={`g-${i}`} className="scroll-mt-20 space-y-3">
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
