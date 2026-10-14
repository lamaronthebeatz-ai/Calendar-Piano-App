import { useEffect, useMemo, useReducer, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { CheckIcon, ChevronRightIcon, SparkleIcon, XIcon } from '../../components/icons'
import { CATEGORIES } from './articles'
import { findArticle } from './wiki'
import { SectionTitle } from './TheoryPage'
import { GLYPHS, tint } from './categoryStyle'
import type { QuizQuestion } from './quiz/types'

/** Time to answer before the next question comes up. */
const ASK_MS = 12_000
/** How long the result stays on screen before moving on. */
const SHOW_RIGHT_MS = 2_200
const SHOW_WRONG_MS = 3_800
const TICK = 100
const LETTERS = ['A', 'B', 'C', 'D']
const STATS_KEY = 'theory:quiz'

type Phase = 'ask' | 'right' | 'wrong' | 'timeout'
interface Stats {
  answered: number
  correct: number
  best: number
}

const readStats = (): Stats => {
  try {
    return { answered: 0, correct: 0, best: 0, ...JSON.parse(localStorage.getItem(STATS_KEY) ?? '{}') }
  } catch {
    return { answered: 0, correct: 0, best: 0 }
  }
}
const writeStats = (s: Stats) => {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(s))
  } catch {
    /* private mode: keep the score for this visit only */
  }
}

const shuffled = <T,>(xs: T[]): T[] => {
  const out = xs.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * A rotating multiple-choice quiz drawn from the library: a new question every 12 seconds or right after an answer,
 * with the right answer revealed and a link to the article that explains it.
 */
export function QuizCard() {
  const [bank, setBank] = useState<QuizQuestion[] | null>(null)
  useEffect(() => {
    let live = true
    import('./quiz/bank').then((m) => live && setBank(shuffled(m.QUESTIONS)))
    return () => {
      live = false
    }
  }, [])

  return (
    <section className="flex flex-col space-y-3">
      <SectionTitle icon={<SparkleIcon width={15} height={15} />} hint={bank ? `${bank.length} câu · đổi sau 12 giây` : 'Đang tải…'}>
        Câu đố âm nhạc
      </SectionTitle>
      {bank ? <Quiz bank={bank} /> : <div className="h-[360px] animate-pulse rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]" />}
    </section>
  )
}

interface Turn {
  index: number
  phase: Phase
  choice: number | null
  elapsed: number
  streak: number
}
type Action = { type: 'tick' } | { type: 'next' } | { type: 'answer'; choice: number; right: boolean }

const limitOf = (phase: Phase) => (phase === 'ask' ? ASK_MS : phase === 'wrong' ? SHOW_WRONG_MS : SHOW_RIGHT_MS)

/** One question's life: asked → answered (or timed out) → the next question. */
function turn(s: Turn, action: Action): Turn {
  switch (action.type) {
    case 'next':
      return { ...s, index: s.index + 1, phase: 'ask', choice: null, elapsed: 0 }
    case 'answer':
      if (s.phase !== 'ask') return s
      return { ...s, phase: action.right ? 'right' : 'wrong', choice: action.choice, elapsed: 0, streak: action.right ? s.streak + 1 : 0 }
    case 'tick': {
      const elapsed = s.elapsed + TICK
      if (elapsed < limitOf(s.phase)) return { ...s, elapsed }
      return s.phase === 'ask' ? { ...s, phase: 'timeout', elapsed: 0, streak: 0 } : turn(s, { type: 'next' })
    }
  }
}

function Quiz({ bank }: { bank: QuizQuestion[] }) {
  const [{ index, phase, choice, elapsed, streak }, dispatch] = useReducer(turn, { index: 0, phase: 'ask', choice: null, elapsed: 0, streak: 0 })
  const [held, setHeld] = useState(false)
  const [paused, setPaused] = useState(false)
  const [stats, setStats] = useState(readStats)

  const question = bank[index % bank.length]
  const options = useMemo(() => shuffled([question.a, ...question.w]), [question])
  const answer = options.indexOf(question.a)
  const article = findArticle(question.slug)
  const category = article?.category ?? 'basics'
  const next = () => dispatch({ type: 'next' })

  const respond = (i: number) => {
    if (phase !== 'ask') return
    const right = i === answer
    dispatch({ type: 'answer', choice: i, right })
    setStats((s) => {
      const updated = { answered: s.answered + 1, correct: s.correct + (right ? 1 : 0), best: Math.max(s.best, right ? streak + 1 : 0) }
      writeStats(updated)
      return updated
    })
  }

  const limit = limitOf(phase)
  const stopped = held || paused

  useEffect(() => {
    if (stopped) return
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') dispatch({ type: 'tick' })
    }, TICK)
    return () => clearInterval(timer)
  }, [stopped])

  const onKey = (e: KeyboardEvent) => {
    const k = e.key.toUpperCase()
    const i = '1234'.includes(k) ? Number(k) - 1 : LETTERS.indexOf(k)
    if (i >= 0 && i < options.length && phase === 'ask') {
      e.preventDefault()
      respond(i)
    } else if ((e.key === 'Enter' || e.key === 'ArrowRight') && phase !== 'ask') {
      e.preventDefault()
      next()
    }
  }

  const revealed = phase !== 'ask'
  const accuracy = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : null

  return (
    <div
      tabIndex={-1}
      onKeyDown={onKey}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      style={tint(category)}
      className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[0_1px_0_rgba(0,0,0,0.02),0_18px_40px_-28px_rgba(40,30,15,0.35)] outline-none"
    >
      {/* Category watermark */}
      <span aria-hidden className="pointer-events-none absolute -right-4 -top-6 select-none font-['Noto_Music'] text-[120px] leading-none text-[color-mix(in_oklch,var(--tint)_9%,transparent)]">
        {GLYPHS[category]}
      </span>

      <div className="relative flex items-center gap-2 px-5 pt-4 sm:px-6">
        <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full bg-[color-mix(in_oklch,var(--tint)_13%,transparent)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--tint)]">
          <span className="shrink-0 font-['Noto_Music'] text-[13px] normal-case leading-none tracking-normal">{GLYPHS[category]}</span>
          <span className="truncate">{CATEGORIES[category].title}</span>
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[12px] tabular-nums text-[var(--color-ink-faint)]">
          {streak >= 2 && (
            <span key={streak} className="animate-pop-in rounded-full bg-[var(--color-gold-soft)] px-2 py-0.5 font-semibold text-[var(--color-gold)]">
              Chuỗi {streak}
            </span>
          )}
          {accuracy !== null && (
            <span title={`Đã trả lời ${stats.answered} câu · chuỗi dài nhất ${stats.best}`}>
              <span className="font-semibold text-[var(--color-ink-muted)]">{stats.correct}</span>/{stats.answered} · {accuracy}%
            </span>
          )}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Tiếp tục đổi câu' : 'Tạm dừng đổi câu'}
            title={paused ? 'Tiếp tục' : 'Tạm dừng'}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]"
          >
            {paused ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <rect x="6" y="4.5" width="4" height="15" rx="1.2" />
                <rect x="14" y="4.5" width="4" height="15" rx="1.2" />
              </svg>
            )}
          </button>
        </span>
      </div>

      <div key={index} className="quiz-enter relative flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6">
        <h3 className="font-display text-[19px] font-semibold leading-snug text-[var(--color-ink)] sm:text-[20px]">{question.q}</h3>

        <ol className="mt-4 grid gap-2" aria-label="Các lựa chọn">
          {options.map((opt, i) => {
            const isAnswer = i === answer
            const isChoice = i === choice
            const state = !revealed ? 'idle' : isAnswer ? 'right' : isChoice ? 'wrong' : 'dim'
            return (
              <li key={opt} style={{ animationDelay: `${60 + i * 45}ms` }} className="quiz-enter">
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => respond(i)}
                  aria-pressed={isChoice}
                  className={clsx(
                    'group flex w-full items-center gap-3 rounded-2xl border px-3 py-2.5 text-left text-[14px] leading-snug transition-[background-color,border-color,opacity,transform] duration-200',
                    state === 'idle' && 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:-translate-y-px hover:border-[color-mix(in_oklch,var(--tint)_55%,var(--color-border))] hover:bg-[color-mix(in_oklch,var(--tint)_6%,var(--color-surface))] active:translate-y-0',
                    state === 'right' && 'border-[var(--color-status-completed)] bg-[var(--color-status-completed-bg)] text-[var(--color-ink)]',
                    state === 'right' && (phase === 'right' ? 'quiz-right' : ''),
                    state === 'wrong' && 'quiz-wrong border-[var(--color-status-cancelled)] bg-[var(--color-status-cancelled-bg)] text-[var(--color-ink)]',
                    state === 'dim' && 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink-faint)] opacity-55',
                  )}
                >
                  <span
                    className={clsx(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-semibold transition-colors',
                      state === 'idle' && 'bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)] group-hover:bg-[var(--tint)] group-hover:text-white',
                      state === 'right' && 'bg-[var(--color-status-completed)] text-white',
                      state === 'wrong' && 'bg-[var(--color-status-cancelled)] text-white',
                      state === 'dim' && 'bg-[var(--color-surface-sunken)] text-[var(--color-ink-faint)]',
                    )}
                  >
                    {state === 'right' ? <CheckIcon width={14} height={14} /> : state === 'wrong' ? <XIcon width={14} height={14} /> : LETTERS[i]}
                  </span>
                  <span className="min-w-0 flex-1">{opt}</span>
                </button>
              </li>
            )
          })}
        </ol>

        {/* Result line; reserves its height so the card does not jump. */}
        <div aria-live="polite" className="mt-3 flex min-h-[38px] flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px]">
          {revealed ? (
            <>
              <span
                className={clsx(
                  'animate-pop-in font-semibold',
                  phase === 'right' ? 'text-[var(--color-status-completed)]' : phase === 'wrong' ? 'text-[var(--color-status-cancelled)]' : 'text-[var(--color-ink-muted)]',
                )}
              >
                {phase === 'right' ? 'Chính xác!' : phase === 'wrong' ? 'Chưa đúng.' : 'Hết giờ.'}
              </span>
              {phase !== 'right' && (
                <span className="text-[var(--color-ink-muted)]">
                  Đáp án: <b className="font-semibold text-[var(--color-ink)]">{question.a}</b>
                </span>
              )}
              <span className="ml-auto flex items-center gap-1">
                {article && (
                  <Link to={`/theory/${article.slug}`} className="rounded-lg px-2 py-1 font-medium text-[var(--tint)] hover:bg-[color-mix(in_oklch,var(--tint)_10%,transparent)]">
                    Đọc bài
                  </Link>
                )}
                <button type="button" onClick={next} className="inline-flex items-center gap-0.5 rounded-xl bg-[var(--color-ink)] px-3 py-1.5 font-medium text-[var(--color-surface)] transition-transform hover:-translate-y-px">
                  Câu tiếp <ChevronRightIcon width={14} height={14} />
                </button>
              </span>
            </>
          ) : (
            <span className="text-[12px] text-[var(--color-ink-faint)]">
              {article ? <>Từ bài: <Link to={`/theory/${article.slug}`} className="underline decoration-[var(--color-border-strong)] underline-offset-2 hover:text-[var(--tint)]">{article.title}</Link></> : null}
              <span className="hidden sm:inline"> · Phím 1–4 để chọn</span>
            </span>
          )}
        </div>
      </div>

      {/* Countdown: time left to answer, then time until the next question. Stops while hovered or paused. */}
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-[var(--color-surface-sunken)]">
        <span
          className={clsx(
            'block h-full origin-left transition-transform duration-100 ease-linear',
            phase === 'ask' ? 'bg-gradient-to-r from-[var(--tint)] to-[var(--color-gold)]' : phase === 'right' ? 'bg-[var(--color-status-completed)]' : phase === 'wrong' ? 'bg-[var(--color-status-cancelled)]' : 'bg-[var(--color-ink-faint)]',
          )}
          style={{ transform: `scaleX(${1 - Math.min(1, elapsed / limit)})` }}
        />
      </span>
    </div>
  )
}
