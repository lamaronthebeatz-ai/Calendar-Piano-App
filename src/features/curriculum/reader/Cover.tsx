import clsx from 'clsx'
import { hueTint, type ReaderBook } from './model'

/**
 * The front of a book. The theory books have a cream typographic cover (two-line title, the second
 * line in warm bronze); the piano courses keep their coloured cloth cover. `size` scales everything.
 */
export function Cover({ book, className, size = 1 }: { book: ReaderBook; className?: string; size?: number }) {
  const words = book.title.split(' ')
  // "Nhạc Lý Cơ Bản" → "Nhạc Lý" / "Cơ Bản": split the title in half by words.
  const half = Math.ceil(words.length / 2)
  const [line1, line2] = [words.slice(0, half).join(' '), words.slice(half).join(' ')]
  if (book.coverImage)
    return (
      <div className={clsx('cover-photo relative aspect-square overflow-hidden', className)}>
        <img src={book.coverImage} alt={`Bìa sách ${book.title}${book.volume ? ` — ${book.volume}` : ''}`} className="h-full w-full object-cover" draggable={false} />
        <span aria-hidden className="cover-cream-spine absolute inset-y-0 left-0 w-[4.5%] opacity-60" />
      </div>
    )
  if (book.style === 'cream')
    return (
      <div className={clsx('cover-cream relative flex aspect-square flex-col items-center justify-center overflow-hidden text-center', className)} style={{ fontSize: `${size * 16}px` }}>
        <span aria-hidden className="cover-cream-spine absolute inset-y-0 left-0 w-[4.5%]" />
        <span aria-hidden className="cover-cream-grain absolute inset-0" />
        <p className="relative font-display text-[3.6em] font-bold leading-[0.92] tracking-[-0.035em] text-[#141210]">{line1}</p>
        <p className="relative font-display text-[3.6em] font-bold leading-[0.98] tracking-[-0.035em] text-[#8f7a5c]">{line2}</p>
        {book.volume && <p className="relative mt-[0.9em] font-serif text-[1.3em] text-[#1d1a16]">{book.volume}</p>}
        <span aria-hidden className="relative mt-[0.8em] h-px w-[3.4em] bg-[#a8916d]" />
        <p className="relative mt-[0.8em] font-serif text-[1.05em] font-semibold text-[#1d1a16]">by {book.author}</p>
      </div>
    )
  return (
    <div style={{ ...hueTint(book.hue), fontSize: `${size * 16}px` }} className={clsx('book-cover relative flex aspect-square flex-col overflow-hidden p-[1.6em] text-white', className)}>
      <span aria-hidden className="book-spine absolute inset-y-0 left-0 w-[4.5%]" />
      <span aria-hidden className="absolute -right-[0.4em] -top-[0.9em] font-['Noto_Music'] text-[11em] leading-none text-white/12">{book.glyph}</span>
      <p className="relative text-[0.68em] font-semibold uppercase tracking-[0.22em] text-white/70">{book.audience}</p>
      <p className="relative mt-[0.6em] max-w-[14ch] font-display text-[1.9em] font-semibold leading-[1.06] tracking-tight">{book.title}</p>
      <p className="relative mt-auto text-[0.7em] uppercase tracking-[0.18em] text-white/60">Tác giả</p>
      <p className="relative font-display text-[1.2em] font-semibold italic">{book.author}</p>
    </div>
  )
}
