import { useState, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowLeftIcon, ArrowUpRightIcon, BookIcon, CheckIcon, ChevronDownIcon, DownloadIcon, GraduationIcon } from '../../components/icons'
import { ScrollArea } from '../../components/ScrollArea'
import { useBack } from '../../hooks/useBack'
import { CATEGORIES } from '../theory/articles'
import { findArticle } from '../theory/wiki'
import { toggleDone, useLibrary } from '../theory/library'
import { CURRICULA } from './curricula'
import { Cover } from './reader/Cover'
import { chaptersOf, findBook, READER_BOOKS, type ReaderBook } from './reader/model'
import { PrintBook } from './reader/PrintBook'
import { Reader } from './reader/Reader'
import { useReader } from './reader/store'
import type { Curriculum, Level, Piece } from './types'

const hueTint = (hue: number) => ({ '--tint': `oklch(0.58 0.13 ${hue})`, '--tint-soft': `oklch(0.58 0.13 ${hue} / 0.12)` }) as CSSProperties

/** Graded levels followed by any extra tracks, in study order. */
const allLevels = (c: Curriculum) => [...c.levels, ...(c.tracks ?? []).flatMap((t) => t.levels)]
const lessonsOf = (c: Curriculum | Level) => ('levels' in c ? allLevels(c).flatMap((l) => l.units) : c.units).flatMap((u) => u.lessons)
const totalMonths = (levels: Level[]) => levels.reduce(([a, b], l) => [a + l.months[0], b + l.months[1]], [0, 0])
const fmtMonths = ([a, b]: [number, number]) => (a === b ? `${a} tháng` : `${a} – ${b} tháng`)
const halfYears = (m: number) => String(Math.round((m / 12) * 2) / 2).replace('.', ',')
const fmtYears = ([a, b]: number[]) => `khoảng ${halfYears(a)} – ${halfYears(b)} năm`
/** Roadmap cells can be narrow: "ABRSM Grade 3" → "G3", "Đệm hát 2" → "Đệm 2". */
const shortGrade = (g: string) => g.replace('ABRSM ', '').replace('Grade ', 'G').replace('Đệm hát ', 'Đệm ').replace('Initial', 'Init')

/** Share of a set of lessons the reader has ticked as studied. */
function useProgress(slugs: string[]) {
  const { done: ticked } = useLibrary()
  const done = slugs.filter((s) => ticked.includes(s)).length
  return { done, total: slugs.length, ratio: slugs.length ? done / slugs.length : 0 }
}

/**
 * /curriculum: the shelf. /curriculum/:id[/:item]: the book reader (items are addressed by their
 * library slug). /curriculum/:id/in: the print layout for saving a PDF. /curriculum/:id/tong-quan:
 * a course's overview with level cards and progress.
 */
export function CurriculumPage() {
  const { id, item } = useParams()
  const book = findBook(id)
  if (book && item === 'in') return <PrintBook book={book} />
  const course = CURRICULA.find((c) => c.id === id)
  if (course && item === 'tong-quan') return <Overview c={course} />
  if (book) return <Reader key={book.id} book={book} itemKey={item} />
  return (
    <ScrollArea className="relative h-full overflow-x-hidden overflow-y-auto pb-28 lg:pb-10">
      <div data-scrolled className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 lg:px-8">
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">Giáo trình</h1>
        </div>
      </div>
      <Shelf />
    </ScrollArea>
  )
}

function Overview({ c }: { c: Curriculum }) {
  const back = useBack(`/curriculum/${c.id}`)
  return (
    <ScrollArea key={c.id} className="relative h-full overflow-x-hidden overflow-y-auto pb-28 lg:pb-10">
      <div data-scrolled className="glass sticky top-0 z-20 border-b border-[var(--color-border)]" style={hueTint(c.hue)}>
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          <button
            onClick={back}
            aria-label="Quay lại"
            className="-ml-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)] active:scale-90"
          >
            <ArrowLeftIcon width={18} height={18} />
          </button>
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">{c.title}</h1>
          <Link to={`/curriculum/${c.id}`} className="flex h-9 items-center gap-1.5 rounded-xl bg-[var(--tint)] px-3 text-[13px] font-medium text-white shadow-sm active:scale-95">
            <BookIcon width={15} height={15} /> Đọc dạng sách
          </Link>
        </div>
      </div>
      <CurriculumView c={c} />
    </ScrollArea>
  )
}

/** Books and courses as covers on a shelf, each opening in the reader where it was left. */
function Shelf() {
  const books = READER_BOOKS.filter((b) => b.kind === 'book')
  const courses = READER_BOOKS.filter((b) => b.kind === 'course')
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-6 lg:px-8 lg:py-10">
      <header className="animate-float-up">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Tủ sách Lamar</p>
        <h2 className="mt-2 max-w-2xl font-display text-[30px] font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] sm:text-[40px]">
          Đọc như một cuốn sách, <span className="text-gold-gradient italic">học như một lộ trình</span>
        </h2>
        <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-[var(--color-ink-muted)]">
          Sách nhạc lý và giáo trình piano biên soạn từ các bài của thư viện. Mở ra là đọc như sách điện tử: lật trang, mục lục, dấu trang, tìm trong sách, đổi cỡ chữ và nền trang, xuất PDF — mỗi chương vẫn giữ đúng đường dẫn của bài trong thư viện.
        </p>
      </header>

      <ShelfRow title="Sách nhạc lý" hint={`${books.length} quyển`} books={books} />
      <ShelfRow title="Giáo trình piano" hint={`${courses.length} giáo trình`} books={courses} />

      <ReviewLink slug={CURRICULA[0]?.review} />
    </div>
  )
}

function ShelfRow({ title, hint, books }: { title: string; hint: string; books: ReaderBook[] }) {
  return (
    <section className="space-y-5">
      <div className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] pb-2">
        <h3 className="font-display text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">{title}</h3>
        <span className="text-[12.5px] text-[var(--color-ink-faint)]">{hint}</span>
      </div>
      <div className="shelf-row grid grid-cols-1 gap-x-8 gap-y-10 min-[520px]:grid-cols-2">
        {books.map((b, i) => (
          <ShelfBook key={b.id} book={b} delay={i * 90} />
        ))}
      </div>
    </section>
  )
}

function ShelfBook({ book, delay }: { book: ReaderBook; delay: number }) {
  const chapters = chaptersOf(book)
  const progress = useProgress(chapters.map((c) => c.slug))
  const pos = useReader().positions[book.id]
  const resume = pos && book.items.find((i) => i.key === pos.key)
  return (
    <article className="animate-float-up group flex flex-col gap-4 sm:flex-row sm:items-end" style={{ animationDelay: `${delay}ms` }}>
      <Link to={`/curriculum/${book.id}`} aria-label={`Đọc ${book.title} ${book.volume ?? ''}`} className="shelf-book block w-[min(62vw,240px)] shrink-0 self-center sm:w-[200px] sm:self-auto lg:w-[230px]">
        <Cover book={book} className="shelf-book-face rounded-[4px]" />
      </Link>
      <div className="min-w-0 flex-1 sm:pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">{book.audience}</p>
        <Link to={`/curriculum/${book.id}`} className="mt-1 block font-display text-[22px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] hover:text-[var(--color-gold)]">
          {book.title}
          {book.volume && <span className="font-normal italic text-[var(--color-ink-muted)]"> · {book.volume}</span>}
        </Link>
        <p className="mt-1.5 line-clamp-3 text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">{book.subtitle}</p>
        <p className="mt-2 text-[12px] text-[var(--color-ink-faint)]">
          {book.items.filter((i) => i.kind === 'part').length} {book.kind === 'book' ? 'phần' : 'cấp'} · {chapters.length} chương · đã học {progress.done}/{progress.total}
        </p>
        <div className="mt-2 h-1 max-w-xs overflow-hidden rounded-full bg-[var(--color-surface-sunken)]">
          <span className="block h-full rounded-full bg-[var(--color-gold)] transition-[width] duration-700" style={{ width: `${Math.max(2, progress.ratio * 100)}%` }} />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Link to={`/curriculum/${book.id}`} className="flex h-9 items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-4 text-[13px] font-medium text-[var(--color-surface)] shadow-sm transition-transform active:scale-95">
            <BookIcon width={15} height={15} /> {resume && resume.kind !== 'cover' ? 'Đọc tiếp' : 'Đọc'}
          </Link>
          <Link to={`/curriculum/${book.id}/in`} className="flex h-9 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3.5 text-[13px] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-ink)]">
            <DownloadIcon width={15} height={15} /> PDF
          </Link>
          {book.kind === 'course' && (
            <Link to={`/curriculum/${book.id}/tong-quan`} className="flex h-9 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3.5 text-[13px] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-ink)]">
              <GraduationIcon width={15} height={15} /> Tổng quan
            </Link>
          )}
        </div>
        {resume && resume.kind !== 'cover' && <p className="mt-2 truncate text-[12px] text-[var(--color-ink-faint)]">Đang đọc: {resume.title}</p>}
      </div>
    </article>
  )
}

function ReviewLink({ slug }: { slug?: string }) {
  const article = slug ? findArticle(slug) : undefined
  if (!article) return null
  return (
    <Link
      to={`/theory/${article.slug}`}
      className="theory-card reveal group flex items-start gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_oklch,var(--color-gold)_16%,transparent)] text-[var(--color-gold)]">
        <BookIcon width={20} height={20} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">Cơ sở biên soạn</span>
        <span className="mt-1 block font-display text-[18px] font-semibold leading-snug text-[var(--color-ink)]">{article.title}</span>
        <span className="mt-1 line-clamp-2 block text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{article.summary}</span>
      </span>
      <ArrowUpRightIcon width={16} height={16} className="mt-1 shrink-0 text-[var(--color-ink-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  )
}

function CurriculumView({ c }: { c: Curriculum }) {
  const all = [...new Set(lessonsOf(c).map((l) => l.slug))]
  const progress = useProgress(all)
  return (
    <div style={hueTint(c.hue)} className="mx-auto max-w-5xl space-y-8 px-4 py-6 lg:px-8 lg:py-10">
      <header className="book-cover animate-float-up relative overflow-hidden rounded-[28px] p-6 text-white shadow-[var(--shadow-float)] sm:p-9">
        <span aria-hidden className="book-spine absolute inset-y-0 left-0 w-3" />
        <span aria-hidden className="absolute -right-4 -top-12 font-['Noto_Music'] text-[220px] leading-none text-white/10">{c.glyph}</span>
        <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">{c.audience}</p>
        <h2 className="relative mt-2 max-w-xl font-display text-[30px] font-semibold leading-[1.08] tracking-tight sm:text-[40px]">{c.title}</h2>
        <p className="relative mt-2 max-w-xl text-[14px] leading-relaxed text-white/80">{c.subtitle}</p>
        <p className="relative mt-5 text-[13px] text-white/70">
          Tác giả <span className="font-display text-[17px] font-semibold italic text-white">{c.author}</span>
        </p>
        <p className="relative mt-1 text-[13px] text-white/80">
          Lộ trình {fmtMonths(totalMonths(allLevels(c)) as [number, number])} ({fmtYears(totalMonths(allLevels(c)))}) · đích đến <span className="font-semibold text-white">{c.goal}</span>
        </p>
        <div className="relative mt-4 max-w-sm">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
            <span className="block h-full rounded-full bg-white/90 transition-[width] duration-700" style={{ width: `${Math.max(2, progress.ratio * 100)}%` }} />
          </div>
          <p className="mt-1.5 text-[11.5px] text-white/65">
            Đã học {progress.done}/{progress.total} bài · {Math.round(progress.ratio * 100)}%
          </p>
        </div>
      </header>

      <p className="max-w-3xl text-[15px] leading-relaxed text-[var(--color-prose)]">{c.intro}</p>

      <section className="space-y-3">
        <SectionHead>Nguyên tắc biên soạn</SectionHead>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {c.principles.map((p, i) => (
            <div key={p.title} className="reveal rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
              <p className="flex items-baseline gap-2 text-[14.5px] font-semibold text-[var(--color-ink)]">
                <span className="font-display text-[15px] tabular-nums text-[var(--tint)]">{String(i + 1).padStart(2, '0')}</span>
                {p.title}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionHead>Một tuần học</SectionHead>
        <ol className="reveal grid grid-cols-1 gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 text-[13.5px] leading-relaxed text-[var(--color-ink-muted)] sm:grid-cols-2">
          {c.routine.map((r, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--tint-soft)] text-[11px] font-semibold text-[var(--tint)]">{i + 1}</span>
              {r}
            </li>
          ))}
        </ol>
      </section>

      <Roadmap c={c} />

      <div className="space-y-6">
        {c.levels.map((l, i) => (
          <LevelCard key={l.title} level={l} n={i + 1} start={totalMonths(c.levels.slice(0, i))} />
        ))}
      </div>

      {c.tracks?.map((track) => (
        <section key={track.title} className="space-y-4">
          <div>
            <SectionHead>{track.title}</SectionHead>
            <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">{track.subtitle}</p>
          </div>
          {track.levels.map((l, i) => {
            const n = c.levels.length + (c.tracks ?? []).slice(0, c.tracks!.indexOf(track)).reduce((k, t) => k + t.levels.length, 0) + i + 1
            return <LevelCard key={l.title} level={l} n={n} />
          })}
        </section>
      ))}

      <ReviewLink slug={c.review} />
    </div>
  )
}

function SectionHead({ children }: { children: string }) {
  return <h3 className="border-b border-[var(--color-border)] pb-2 font-display text-[21px] font-semibold tracking-tight text-[var(--color-ink)]">{children}</h3>
}

/** The whole course on one bar: each level's width is its average length in months. */
function Roadmap({ c }: { c: Curriculum }) {
  const levels = allLevels(c)
  const avg = (l: Level) => (l.months[0] + l.months[1]) / 2
  const { done } = useLibrary()
  return (
    <nav aria-label="Lộ trình các cấp" className="reveal space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <SectionHead>Lộ trình</SectionHead>
      </div>
      <div className="flex h-14 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        {levels.map((l, i) => {
          const slugs = [...new Set(lessonsOf(l).map((x) => x.slug))]
          const ratio = slugs.length ? slugs.filter((s) => done.includes(s)).length / slugs.length : 0
          return (
            <a
              key={l.title}
              href={`#cap-${i + 1}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(`cap-${i + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              title={`${l.grade} · ${fmtMonths(l.months)}`}
              style={{ flexGrow: avg(l), flexBasis: 0 }}
              className="group relative flex min-w-0 flex-col justify-center border-r border-[var(--color-border)] px-1.5 text-center last:border-r-0 hover:bg-[var(--tint-soft)]"
            >
              <span aria-hidden className="absolute inset-y-0 left-0 bg-[var(--tint-soft)] transition-[width] duration-700" style={{ width: `${ratio * 100}%` }} />
              <span className="relative truncate font-display text-[13px] font-semibold text-[var(--tint)]">{i + 1}</span>
              <span className="relative truncate text-[10.5px] text-[var(--color-ink-muted)]">{shortGrade(l.grade)}</span>
            </a>
          )
        })}
      </div>
      <p className="text-[12px] text-[var(--color-ink-faint)]">Bề rộng mỗi ô ứng với thời lượng gợi ý. Tổng cộng {fmtMonths(totalMonths(levels) as [number, number])} — {fmtYears(totalMonths(levels))} với nhịp học đều đặn; mỗi người nhanh chậm khác nhau.</p>
    </nav>
  )
}

function LevelCard({ level, n, start }: { level: Level; n: number; start?: number[] }) {
  const progress = useProgress([...new Set(lessonsOf(level).map((l) => l.slug))])
  const [open, setOpen] = useState(n === 1)
  return (
    <section id={`cap-${n}`} className="reveal scroll-mt-20 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-soft)]">
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="flex w-full items-start gap-4 p-5 text-left sm:p-6">
        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
          <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden>
            <circle cx="18" cy="18" r="16" fill="none" stroke="var(--tint-soft)" strokeWidth="3" />
            <circle cx="18" cy="18" r="16" fill="none" stroke="var(--tint)" strokeWidth="3" strokeLinecap="round" strokeDasharray={`${progress.ratio * 100.5} 100.5`} className="transition-[stroke-dasharray] duration-700" />
          </svg>
          <span className="font-display text-[20px] font-semibold text-[var(--tint)]">{n}</span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[var(--tint)]">
            Cấp {n}
            <span className="rounded-full bg-[var(--tint)] px-2 py-0.5 text-[10.5px] tracking-[0.08em] text-white">{level.grade.startsWith('ABRSM') ? '≈ ' : ''}{level.grade}</span>
            <span className="font-medium normal-case tracking-normal text-[var(--color-ink-muted)]">
              {fmtMonths(level.months)}
              {start && ` · tháng ${start[0] + 1} – ${start[1] + level.months[1]}`}
            </span>
          </span>
          <span className="mt-0.5 block font-display text-[21px] font-semibold leading-snug tracking-tight text-[var(--color-ink)]">{level.title}</span>
          <span className="mt-1 block text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">{level.subtitle}</span>
          <span className="mt-1.5 block text-[12px] text-[var(--color-ink-faint)]">
            {level.units.length} chương · {level.pieces.length} tác phẩm · đã học {progress.done}/{progress.total} bài
          </span>
        </span>
        <ChevronDownIcon width={18} height={18} className={clsx('mt-1 shrink-0 text-[var(--color-ink-faint)] transition-transform duration-300', open && 'rotate-180')} />
      </button>

      <div className={clsx('grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-5 border-t border-[var(--color-border)] px-5 pb-6 pt-5 sm:px-6">
            {level.units.map((u, i) => (
              <UnitBlock key={u.title} unit={u} label={`${n}.${i + 1}`} />
            ))}

            <Pieces pieces={level.pieces} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {level.exam ? <ExamBox exam={level.exam} grade={level.grade} /> : <div className="hidden sm:block" />}
              <div className="rounded-2xl border border-dashed border-[var(--tint)] p-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--tint)]">Kiểm tra cuối cấp</p>
                <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--color-ink)]">
                  {level.checkpoint.map((r) => (
                    <li key={r} className="flex gap-2"><span className="mt-[5px] h-3 w-3 shrink-0 rounded border border-[var(--tint)]" />{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UnitBlock({ unit, label }: { unit: Level['units'][number]; label: string }) {
  const { done: ticked } = useLibrary()
  return (
    <div>
      <p className="flex items-baseline gap-2">
        <span className="font-display text-[14px] font-semibold tabular-nums text-[var(--tint)]">{label}</span>
        <span className="text-[16px] font-semibold text-[var(--color-ink)]">{unit.title}</span>
      </p>
      <p className="mt-0.5 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
        <span className="font-medium text-[var(--color-ink)]">Mục tiêu:</span> {unit.goal}
      </p>
      <ol className="mt-2.5 space-y-1.5">
        {unit.lessons.map((l) => {
          const a = findArticle(l.slug)
          if (!a) return null
          const done = ticked.includes(a.slug)
          return (
            <li key={l.slug} className="theory-card group flex items-start gap-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-1 pl-1 pr-3.5">
              <button
                type="button"
                onClick={() => toggleDone(a.slug)}
                aria-pressed={done}
                aria-label={done ? `Bỏ đánh dấu đã học: ${a.title}` : `Đánh dấu đã học: ${a.title}`}
                title={done ? 'Đã học — bấm để bỏ' : 'Đánh dấu đã học'}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-[var(--tint-soft)]"
              >
                <span className={clsx('flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300', done ? 'scale-105 border-[var(--tint)] bg-[var(--tint)] text-white' : 'border-[var(--color-border-strong)]')}>
                  {done && <CheckIcon width={12} height={12} strokeWidth={3} />}
                </span>
              </button>
              <Link to={`/theory/${a.slug}`} className="flex min-w-0 flex-1 items-start gap-3 py-1.5">
                <span className="min-w-0 flex-1">
                  <span className="block text-[14px] font-medium leading-snug text-[var(--color-ink)]">{a.title}</span>
                  {l.focus && <span className="mt-0.5 block text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{l.focus}</span>}
                </span>
                <span className="hidden shrink-0 pt-0.5 text-[11px] text-[var(--color-ink-faint)] sm:block">{CATEGORIES[a.category].title}</span>
              </Link>
            </li>
          )
        })}
      </ol>
      {unit.practice.length > 0 && (
        <div className="mt-2.5 rounded-xl bg-[var(--tint-soft)] px-3.5 py-2.5">
          <p className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--tint)]">
            <GraduationIcon width={14} height={14} /> Trên đàn
          </p>
          <ul className="mt-1 space-y-0.5 text-[13px] leading-relaxed text-[var(--color-ink)]">
            {unit.practice.map((p) => (
              <li key={p}>– {p}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function Pieces({ pieces }: { pieces: Piece[] }) {
  if (!pieces.length) return null
  return (
    <div className="rounded-2xl bg-[var(--color-surface-sunken)] p-4">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">Tác phẩm của cấp</p>
      <ol className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {pieces.map((p, i) => {
          const a = p.slug ? findArticle(p.slug) : undefined
          const body = (
            <>
              <span className="w-5 shrink-0 font-display text-[13px] font-semibold tabular-nums text-[var(--tint)]">{i + 1}</span>
              <span className="min-w-0">
                <span className="block text-[13.5px] font-medium leading-snug text-[var(--color-ink)]">{p.title}</span>
                <span className="block text-[12px] leading-snug text-[var(--color-ink-muted)]">
                  {p.composer}
                  {p.note && <span className="text-[var(--color-ink-faint)]"> · {p.note}</span>}
                </span>
                {a && <span className="mt-0.5 inline-flex items-center gap-1 text-[11.5px] font-medium text-[var(--tint)]">Bài phân tích <ArrowUpRightIcon width={11} height={11} /></span>}
              </span>
            </>
          )
          return (
            <li key={p.title + p.composer}>
              {a ? (
                <Link to={`/theory/${a.slug}`} className="flex gap-2 rounded-lg transition-colors hover:bg-[var(--tint-soft)]">{body}</Link>
              ) : (
                <div className="flex gap-2">{body}</div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function ExamBox({ exam, grade }: { exam: NonNullable<Level['exam']>; grade: string }) {
  const rows: [string, string][] = [
    ['Âm giai & hợp âm rải', exam.scales],
    ['Thị tấu', exam.sightReading],
    ['Nghe (aural)', exam.aural],
    ['Nhạc lý', exam.theory],
  ]
  return (
    <div className="rounded-2xl border border-[var(--color-border)] p-4">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">Yêu cầu tương đương {grade}</p>
      <dl className="mt-2 space-y-1.5 text-[13px] leading-snug">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="font-medium text-[var(--color-ink)]">{k}</dt>
            <dd className="text-[var(--color-ink-muted)]">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
