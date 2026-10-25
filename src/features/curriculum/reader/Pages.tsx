import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { CheckIcon, ChevronRightIcon } from '../../../components/icons'
import { Markup } from '../../theory/Markup'
import { LinkRefContext } from '../../theory/linkRef'
import { findArticle } from '../../theory/wiki'
import { peekText } from '../../theory/body'
import { toggleDone, useLibrary } from '../../theory/library'
import { Cover } from './Cover'
import { chaptersOf, lessonQuestions, roman, type ReaderBook, type ReaderItem } from './model'

/**
 * The pages of a book, laid out like a printed textbook: lessons ("Bài") with objectives, numbered
 * sections, figures and tables ("Hình 6.1", "Bảng 6.1" — numbered by CSS counters), cross-references
 * to other lessons, a summary, review questions and references; part openers, review pages and an
 * answer key. Only the lesson text comes from the theory library. Shared by the reader and the print view.
 */
type Mode = 'screen' | 'print'

const unit = (b: ReaderBook) => (b.kind === 'book' ? 'Phần' : 'Cấp')
const LETTERS = ['A', 'B', 'C', 'D']

/** Wiki links to a lesson of this book get "(Bài n)" after them. */
function useXref(book: ReaderBook) {
  return useCallback((slug: string) => {
    const c = chaptersOf(book).find((x) => x.slug === slug)
    return c ? `Bài ${c.n}` : undefined
  }, [book])
}

/** `progressive`: a chapter shows its first sections at once and adds the rest while the browser is idle (the reader, opening at its first page). */
export function BookPage({ book, item, mode = 'screen', onGo, progressive }: { book: ReaderBook; item: ReaderItem; mode?: Mode; onGo?: (key: string) => void; progressive?: boolean }) {
  const xref = useXref(book)
  const go = onGo ?? (() => undefined)
  let page
  switch (item.kind) {
    case 'cover':
      page = <CoverPage book={book} onStart={() => go(book.items[1].key)} />
      break
    case 'front':
      page = (
        <article className="book-front">
          <h1 className="book-front-title">{item.title}</h1>
          <span aria-hidden className="book-rule" />
          <div className="book-text">
            <Markup source={item.body} />
          </div>
          {item.signed && <p className="book-signature">{book.author}</p>}
        </article>
      )
      break
    case 'toc':
      page = <TocPage book={book} onGo={go} />
      break
    case 'part':
      page = <PartPage book={book} item={item} onGo={go} />
      break
    case 'chapter':
      page = <LessonPage book={book} item={item} mode={mode} progressive={progressive} />
      break
    case 'review':
      page = (
        <article className="book-review">
          <p className="book-eyebrow">{unit(book)} {roman(item.part)} · {item.label}</p>
          <h1 className="book-front-title">{item.title}</h1>
          <span aria-hidden className="book-rule" />
          <div className="book-text">
            <Markup source={item.body} />
          </div>
        </article>
      )
      break
    case 'answers':
      page = <AnswersPage book={book} />
      break
  }
  return <LinkRefContext.Provider value={xref}>{page}</LinkRefContext.Provider>
}

function CoverPage({ book, onStart }: { book: ReaderBook; onStart: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 py-4">
      <div className="reader-cover-3d w-[min(78%,calc(var(--page-h)*0.72),440px)]">
        <Cover book={book} size={1.15} className="rounded-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),0_8px_20px_-8px_rgba(0,0,0,0.25)]" />
      </div>
      <p className="max-w-md text-center font-sans text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">{book.subtitle}</p>
      <button onClick={onStart} className="reader-cta">
        Mở sách <ChevronRightIcon width={16} height={16} />
      </button>
    </div>
  )
}

function TocPage({ book, onGo }: { book: ReaderBook; onGo: (key: string) => void }) {
  const { done } = useLibrary()
  return (
    <article className="book-toc">
      <h1 className="book-front-title">Mục lục</h1>
      <span aria-hidden className="book-rule" />
      <ol>
        {book.items.map((it) => {
          if (it.kind === 'cover' || it.kind === 'toc') return null
          if (it.kind === 'part')
            return (
              <li key={it.key} className="is-part">
                <button onClick={() => onGo(it.key)}>
                  <span className="book-toc-label">{it.label.split(' · ')[0]}</span>
                  <span className="book-toc-title">{it.title}</span>
                </button>
              </li>
            )
          const isDone = it.kind === 'chapter' && done.includes(it.slug)
          return (
            <li key={it.key} className={clsx(it.kind !== 'chapter' && 'is-extra')}>
              <button onClick={() => onGo(it.key)}>
                <span className="book-toc-num">{it.kind === 'chapter' ? `Bài ${it.n}` : ''}</span>
                <span className="book-toc-name">{it.title}</span>
                <span aria-hidden className="book-toc-leader" />
                {isDone && <CheckIcon width={12} height={12} strokeWidth={3} className="shrink-0 text-[var(--color-status-completed)]" />}
              </button>
            </li>
          )
        })}
      </ol>
    </article>
  )
}

function PartPage({ book, item, onGo }: { book: ReaderBook; item: Extract<ReaderItem, { kind: 'part' }>; onGo: (key: string) => void }) {
  const lessons = chaptersOf(book).filter((c) => c.part === item.n)
  const review = book.items.find((i) => i.kind === 'review' && i.part === item.n)
  return (
    <article className="book-part">
      <p className="book-part-unit">{unit(book)}</p>
      <p className="book-part-numeral">{roman(item.n)}</p>
      <h1 className="book-part-title">{item.title}</h1>
      {item.label.includes(' · ') && <p className="book-eyebrow mt-2 text-center">{item.label.split(' · ').slice(1).join(' · ')}</p>}
      <span aria-hidden className="book-ornament">❦</span>
      <p className="book-part-intro">{item.intro}</p>
      {item.body && (
        <div className="book-text">
          <Markup source={item.body} />
        </div>
      )}
      <div className="book-part-lessons">
        <p className="book-eyebrow">Nội dung</p>
        <ol>
          {lessons.map((c) => (
            <li key={c.key}>
              <button onClick={() => onGo(c.key)}>
                <span className="book-toc-num">Bài {c.n}</span>
                <span className="book-toc-name">{c.title}</span>
              </button>
            </li>
          ))}
          {review && (
            <li>
              <button onClick={() => onGo(review.key)}>
                <span className="book-toc-num" />
                <span className="book-toc-name italic">{review.title}</span>
              </button>
            </li>
          )}
        </ol>
      </div>
    </article>
  )
}

const idle = (cb: () => void) => (window.requestIdleCallback ? window.requestIdleCallback(cb, { timeout: 300 }) : window.setTimeout(cb, 60))
const cancelIdle = (id: number) => (window.cancelIdleCallback ? window.cancelIdleCallback(id) : window.clearTimeout(id))

function LessonPage({ book, item, mode, progressive }: { book: ReaderBook; item: Extract<ReaderItem, { kind: 'chapter' }>; mode: Mode; progressive?: boolean }) {
  // The reader and the print view fetch the text before showing a chapter, so it is in the cache here.
  const a = { ...findArticle(item.slug)!, ...(peekText(item.slug) ?? { body: '', refs: undefined }) }
  const total = useMemo(() => (a.body.match(/^\s*## /gm)?.length ?? 0), [a.body])
  const [shown, setShown] = useState(() => (progressive ? 2 : Infinity))
  useEffect(() => {
    if (shown >= total) return
    const id = idle(() => setShown((n) => n + 2))
    return () => cancelIdle(id)
  }, [shown, total])
  const { done } = useLibrary()
  const isDone = done.includes(a.slug)
  const questions = lessonQuestions(a.slug)
  const part = book.items.find((i) => i.kind === 'part' && i.n === item.part)
  return (
    <article className="book-lesson" style={{ '--lesson': `"${item.n}"` } as CSSProperties}>
      <header className="book-lesson-head">
        {part && part.kind === 'part' && (
          <p className="book-eyebrow">
            {unit(book)} {roman(part.n)} · {part.title}
          </p>
        )}
        <p className="book-lesson-num">
          <span>Bài</span>
          {item.n}
        </p>
        <h1 className="book-lesson-title">{a.title}</h1>
        <span aria-hidden className="book-rule" />
      </header>

      {item.focus && (
        <section className="book-box is-goal">
          <h4>Mục tiêu bài học</h4>
          <p>{item.focus}</p>
        </section>
      )}

      <div className="book-text book-lesson-body">
        <Markup source={a.body} sections={shown} />
      </div>

      <section className="book-box is-summary">
        <h4>Tóm tắt</h4>
        <p>{a.summary}</p>
      </section>

      {questions.length > 0 && (
        <section className="book-questions">
          <h4>Câu hỏi ôn tập</h4>
          <ol>
            {questions.map((q) => (
              <li key={q.q}>
                <p>{q.q}</p>
                <ol className="book-options">
                  {q.options.map((o, k) => (
                    <li key={k}>
                      <b>{LETTERS[k]}.</b> {o}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
          <p className="book-note">Đáp án ở cuối sách.</p>
        </section>
      )}

      {a.refs && a.refs.length > 0 && (
        <section className="book-refs">
          <h4>Tài liệu tham khảo</h4>
          <ol>
            {a.refs.map(([t, u]) => (
              <li key={u}>
                {mode === 'print' ? (
                  <>
                    {t}. <span className="book-url">{u}</span>
                  </>
                ) : (
                  <a href={u} target="_blank" rel="noreferrer">{t}</a>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {mode === 'screen' && (
        <footer className="book-lesson-end">
          <button onClick={() => toggleDone(a.slug)} aria-pressed={isDone} className={clsx('book-check', isDone && 'is-done')}>
            <span>{isDone && <CheckIcon width={11} height={11} strokeWidth={3.2} />}</span>
            {isDone ? 'Đã học xong bài này' : 'Đánh dấu đã học xong bài này'}
          </button>
          <Link to={`/theory/${a.slug}`} className="book-note underline-offset-4 hover:underline">
            Bài gốc trong thư viện Lý thuyết
          </Link>
        </footer>
      )}
    </article>
  )
}

function AnswersPage({ book }: { book: ReaderBook }) {
  const rows = chaptersOf(book)
    .map((c) => ({ c, qs: lessonQuestions(c.slug) }))
    .filter((r) => r.qs.length)
  return (
    <article className="book-answers">
      <h1 className="book-front-title">Đáp án câu hỏi ôn tập</h1>
      <span aria-hidden className="book-rule" />
      {rows.length ? (
        <table>
          <tbody>
            {rows.map(({ c, qs }) => (
              <tr key={c.key}>
                <th>Bài {c.n}</th>
                <td>{qs.map((q, k) => `${k + 1}–${LETTERS[q.answer]}`).join('   ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="book-note">Chưa có câu hỏi ôn tập.</p>
      )}
    </article>
  )
}
