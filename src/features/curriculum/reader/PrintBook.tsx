import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, DownloadIcon } from '../../../components/icons'
import { Markup } from '../../theory/Markup'
import { findArticle } from '../../theory/wiki'
import { Cover } from './Cover'
import { chaptersOf, hueTint, type ReaderBook } from './model'

/**
 * The whole book laid out for print (A4, one chapter per new page). Saving as PDF uses the browser's
 * print dialog ("Lưu dưới dạng PDF" / "Save as PDF"), which keeps text selectable and notation sharp.
 */
export function PrintBook({ book }: { book: ReaderBook }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    document.documentElement.classList.add('is-printing-book')
    const prevTitle = document.title
    document.title = `${book.title}${book.volume ? ` — ${book.volume}` : ''} — ${book.author}`
    // Give fonts and Wikipedia images a moment, then open the print dialog once.
    let cancelled = false
    const t = setTimeout(async () => {
      await document.fonts?.ready
      if (cancelled) return
      setReady(true)
      window.print()
    }, 1600)
    return () => {
      cancelled = true
      clearTimeout(t)
      document.title = prevTitle
      document.documentElement.classList.remove('is-printing-book')
    }
  }, [book])

  const chapters = chaptersOf(book)
  return createPortal(
    <div id="print-root" style={hueTint(book.hue)}>
      <div className="print-toolbar">
        <Link to={`/curriculum/${book.id}`} className="print-tool">
          <ArrowLeftIcon width={16} height={16} /> Về trình đọc
        </Link>
        <p className="min-w-0 flex-1 truncate text-center text-[13px] text-[var(--color-ink-muted)]">
          {ready ? 'Trong hộp thoại in, chọn “Lưu dưới dạng PDF” để tải về máy.' : 'Đang dàn trang…'}
        </p>
        <button onClick={() => window.print()} className="print-tool is-primary">
          <DownloadIcon width={16} height={16} /> Lưu PDF
        </button>
      </div>

      <div className="print-book">
        <section className="print-cover">
          <Cover book={book} size={1.9} />
          <p className="print-cover-sub">{book.subtitle}</p>
        </section>

        {book.items.map((it) => {
          if (it.kind === 'cover') return null
          if (it.kind === 'toc')
            return (
              <section key={it.key} className="print-sheet">
                <h1 className="print-h1">Mục lục</h1>
                <ol className="print-toc">
                  {book.items.map((x) =>
                    x.kind === 'part' ? (
                      <li key={x.key} className="is-part">
                        {x.label.split(' · ')[0]} — {x.title}
                      </li>
                    ) : x.kind === 'chapter' ? (
                      <li key={x.key}>
                        <span>{x.n}.</span> {x.title}
                      </li>
                    ) : x.kind === 'front' ? (
                      <li key={x.key}>{x.title}</li>
                    ) : null,
                  )}
                </ol>
              </section>
            )
          if (it.kind === 'front')
            return (
              <section key={it.key} className="print-sheet">
                <h1 className="print-h1">{it.title}</h1>
                <Markup source={it.body} />
              </section>
            )
          if (it.kind === 'part')
            return (
              <section key={it.key} className="print-sheet print-part">
                <p className="print-kicker">{it.label}</p>
                <h1 className="print-h1">{it.title}</h1>
                <p className="print-lead">{it.intro}</p>
                <ol className="print-toc">
                  {chapters.filter((c) => c.part === it.n).map((c) => (
                    <li key={c.key}><span>{c.n}.</span> {c.title}</li>
                  ))}
                </ol>
                {it.body && <Markup source={it.body} />}
              </section>
            )
          const a = findArticle(it.slug)!
          return (
            <section key={it.key} className="print-sheet">
              <p className="print-kicker">Chương {it.n}</p>
              <h1 className="print-h1">{a.title}</h1>
              <p className="print-lead">{a.summary}</p>
              {it.focus && <p className="print-focus"><b>Trọng tâm:</b> {it.focus}</p>}
              <Markup source={a.body} />
              {a.refs && a.refs.length > 0 && (
                <div className="print-refs">
                  <p>Nguồn</p>
                  <ol>{a.refs.map(([t, u]) => <li key={u}>{t} — {u}</li>)}</ol>
                </div>
              )}
            </section>
          )
        })}
        <p className="print-colophon">
          {book.title}{book.volume ? ` · ${book.volume}` : ''} · {book.author} · biên soạn từ thư viện Lý thuyết của Lịch Dạy Piano · in ngày {new Date().toLocaleDateString('vi-VN')}
        </p>
      </div>
    </div>,
    document.body,
  )
}
