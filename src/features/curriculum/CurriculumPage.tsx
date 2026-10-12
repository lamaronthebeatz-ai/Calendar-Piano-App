import { useState, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowLeftIcon, ArrowUpRightIcon, BookIcon, CheckIcon, ChevronDownIcon, GraduationIcon } from '../../components/icons'
import { ScrollArea } from '../../components/ScrollArea'
import { useBack } from '../../hooks/useBack'
import { CATEGORIES } from '../theory/articles'
import { findArticle } from '../theory/wiki'
import { useLibrary } from '../theory/library'
import { CURRICULA } from './curricula'
import type { Curriculum, Level } from './types'

const hueTint = (hue: number) => ({ '--tint': `oklch(0.58 0.13 ${hue})`, '--tint-soft': `oklch(0.58 0.13 ${hue} / 0.12)` }) as CSSProperties

const lessonsOf = (c: Curriculum | Level) => ('levels' in c ? c.levels.flatMap((l) => l.units) : c.units).flatMap((u) => u.lessons)

/** Share of a set of lessons whose article has been opened at least once. */
function useProgress(slugs: string[]) {
  const { read } = useLibrary()
  const done = slugs.filter((s) => read.includes(s)).length
  return { done, total: slugs.length, ratio: slugs.length ? done / slugs.length : 0 }
}

export function CurriculumPage() {
  const { id } = useParams()
  const curriculum = CURRICULA.find((c) => c.id === id)
  const back = useBack('/curriculum')

  return (
    <ScrollArea key={id} className="relative h-full overflow-x-hidden overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]" style={curriculum && hueTint(curriculum.hue)}>
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          {curriculum && (
            <button
              onClick={back}
              aria-label="Quay lại"
              className="-ml-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)] active:scale-90"
            >
              <ArrowLeftIcon width={18} height={18} />
            </button>
          )}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">
            {curriculum ? curriculum.title : 'Giáo trình'}
          </h1>
        </div>
      </div>
      {curriculum ? <CurriculumView c={curriculum} /> : <Shelf />}
    </ScrollArea>
  )
}

/** The two books side by side, like covers on a shelf. */
function Shelf() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6 lg:px-8 lg:py-10">
      <header className="animate-float-up">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Giáo trình Lamar</p>
        <h2 className="mt-2 max-w-2xl font-display text-[30px] font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] sm:text-[38px]">
          Lý thuyết âm nhạc <span className="text-gold-gradient italic">&amp; piano</span>, từ nốt đầu tiên
        </h2>
        <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-[var(--color-ink-muted)]">
          Hai giáo trình xếp các bài sẵn có của thư viện theo đúng thứ tự học: mỗi cấp gồm các chương, mỗi chương có mục tiêu, bài đọc, bài tập trên đàn và một bài kiểm tra cuối cấp. Biên soạn dựa trên việc đối chiếu các giáo trình nổi tiếng trên thế giới.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {CURRICULA.map((c, i) => (
          <BookCover key={c.id} c={c} delay={i * 90} />
        ))}
      </div>

      <ReviewLink slug={CURRICULA[0]?.review} />
    </div>
  )
}

function BookCover({ c, delay }: { c: Curriculum; delay: number }) {
  const lessons = lessonsOf(c)
  const progress = useProgress([...new Set(lessons.map((l) => l.slug))])
  return (
    <Link
      to={`/curriculum/${c.id}`}
      style={{ ...hueTint(c.hue), animationDelay: `${delay}ms` }}
      className="book-cover animate-float-up group relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] p-6 text-white shadow-[var(--shadow-float)] sm:p-7"
    >
      <span aria-hidden className="book-spine absolute inset-y-0 left-0 w-3" />
      <span aria-hidden className="absolute -right-6 -top-10 font-['Noto_Music'] text-[190px] leading-none text-white/12 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-105">
        {c.glyph}
      </span>
      <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">{c.audience}</p>
      <h3 className="relative mt-3 max-w-[16ch] font-display text-[28px] font-semibold leading-[1.08] tracking-tight sm:text-[32px]">{c.title}</h3>
      <p className="relative mt-2 max-w-sm text-[13.5px] leading-relaxed text-white/80">{c.subtitle}</p>
      <div className="relative mt-auto pt-8">
        <p className="text-[12px] uppercase tracking-[0.18em] text-white/60">Tác giả</p>
        <p className="font-display text-[20px] font-semibold italic">{c.author}</p>
        <div className="mt-4 flex items-center gap-4 text-[12.5px] text-white/75">
          <span>{c.levels.length} cấp độ</span>
          <span className="h-1 w-1 rounded-full bg-white/50" />
          <span>{c.levels.reduce((n, l) => n + l.units.length, 0)} chương</span>
          <span className="h-1 w-1 rounded-full bg-white/50" />
          <span>{new Set(lessons.map((l) => l.slug)).size} bài</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
          <span className="block h-full rounded-full bg-white/90 transition-[width] duration-700" style={{ width: `${Math.max(2, progress.ratio * 100)}%` }} />
        </div>
        <p className="mt-1.5 text-[11.5px] text-white/65">
          Đã đọc {progress.done}/{progress.total} bài
        </p>
      </div>
      <span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:bottom-7 sm:right-7">
        <ArrowUpRightIcon width={18} height={18} />
      </span>
    </Link>
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
        <div className="relative mt-4 max-w-sm">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
            <span className="block h-full rounded-full bg-white/90 transition-[width] duration-700" style={{ width: `${Math.max(2, progress.ratio * 100)}%` }} />
          </div>
          <p className="mt-1.5 text-[11.5px] text-white/65">
            Đã đọc {progress.done}/{progress.total} bài · {Math.round(progress.ratio * 100)}%
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

      <nav aria-label="Các cấp độ" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
        {c.levels.map((l, i) => (
          <a key={l.title} href={`#cap-${i + 1}`} onClick={(e) => { e.preventDefault(); document.getElementById(`cap-${i + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-1.5 text-[13px] text-[var(--color-ink)] transition-colors hover:border-[var(--tint)]">
            <span className="font-semibold text-[var(--tint)]">Cấp {i + 1}</span> · {l.title}
          </a>
        ))}
      </nav>

      <div className="space-y-6">
        {c.levels.map((l, i) => (
          <LevelCard key={l.title} level={l} n={i + 1} />
        ))}
      </div>

      <ReviewLink slug={c.review} />
    </div>
  )
}

function SectionHead({ children }: { children: string }) {
  return <h3 className="border-b border-[var(--color-border)] pb-2 font-display text-[21px] font-semibold tracking-tight text-[var(--color-ink)]">{children}</h3>
}

function LevelCard({ level, n }: { level: Level; n: number }) {
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
          <span className="block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[var(--tint)]">
            Cấp {n} · {level.duration}
          </span>
          <span className="mt-0.5 block font-display text-[21px] font-semibold leading-snug tracking-tight text-[var(--color-ink)]">{level.title}</span>
          <span className="mt-1 block text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">{level.subtitle}</span>
          <span className="mt-1.5 block text-[12px] text-[var(--color-ink-faint)]">
            {level.units.length} chương · đã đọc {progress.done}/{progress.total} bài
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

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--color-surface-sunken)] p-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">Bài chơi gợi ý</p>
                <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--color-ink)]">
                  {level.repertoire.map((r) => (
                    <li key={r} className="flex gap-2"><span className="text-[var(--tint)]">♪</span>{r}</li>
                  ))}
                </ul>
              </div>
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
  const { read } = useLibrary()
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
          const done = read.includes(a.slug)
          return (
            <li key={l.slug}>
              <Link to={`/theory/${a.slug}`} className="theory-card group flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2.5">
                <span className={clsx('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors', done ? 'border-[var(--tint)] bg-[var(--tint)] text-white' : 'border-[var(--color-border-strong)]')}>
                  {done && <CheckIcon width={12} height={12} />}
                </span>
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
