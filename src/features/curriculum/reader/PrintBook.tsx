import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, DownloadIcon } from '../../../components/icons'
import { Cover } from './Cover'
import { BookPage } from './Pages'
import { hueTint, type ReaderBook } from './model'

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
        {book.items.map((it) =>
          it.kind === 'cover' ? null : (
            <section key={it.key} className={`print-sheet is-${it.kind}`}>
              <BookPage book={book} item={it} mode="print" />
            </section>
          ),
        )}
        <p className="print-colophon">
          {book.title}{book.volume ? ` · ${book.volume}` : ''} · {book.author} · biên soạn từ thư viện Lý thuyết của Lịch Dạy Piano · in ngày {new Date().toLocaleDateString('vi-VN')}
        </p>
      </div>
    </div>,
    document.body,
  )
}
