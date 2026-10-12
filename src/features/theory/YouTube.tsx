import { useState } from 'react'
import { ArrowUpRightIcon } from '../../components/icons'

/**
 * A YouTube recording shown as its thumbnail; the player (privacy-enhanced youtube-nocookie)
 * loads only when tapped, so an article with several videos stays light and works offline
 * until the reader actually wants to listen.
 */
export function YouTubeVideo({ id, caption, children }: { id: string; caption?: string; children?: React.ReactNode }) {
  const [playing, setPlaying] = useState(false)
  const [thumbFailed, setThumbFailed] = useState(false)
  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] font-sans shadow-[var(--shadow-soft)]">
      <div className="relative aspect-video w-full bg-[#0b0806]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={caption ?? 'Video YouTube'}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Phát video: ${caption ?? ''}`} className="group absolute inset-0 h-full w-full">
            {!thumbFailed && (
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                onError={() => setThumbFailed(true)}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-[opacity,transform] duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
              />
            )}
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
            <span aria-hidden className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <svg viewBox="0 0 24 24" width="26" height="26" className="ml-1 fill-[#c4302b]"><path d="M8 5.5v13l11-6.5z" /></svg>
            </span>
            <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[12px] font-medium text-white/90">
              <YouTubeGlyph /> Bấm để nghe{thumbFailed && ' (cần mạng)'}
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-start justify-between gap-3 px-4 py-3 text-[13px] leading-snug text-[var(--color-ink-muted)]">
        <span className="min-w-0">{children ?? caption}</span>
        <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer" className="flex shrink-0 items-center gap-1 text-[12px] font-medium text-[var(--color-ink-faint)] hover:text-[var(--color-accent)]">
          YouTube <ArrowUpRightIcon width={12} height={12} />
        </a>
      </figcaption>
    </figure>
  )
}

/**
 * A search on YouTube for a work — used where no specific recording has been checked, so the
 * page never points at a video that might not exist.
 */
export function YouTubeSearch({ query, children }: { query: string; children: React.ReactNode }) {
  return (
    <a
      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`}
      target="_blank"
      rel="noreferrer"
      className="group my-2 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-2.5 font-sans text-[13.5px] text-[var(--color-ink)] no-underline transition-colors hover:border-[#c4302b]/50"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#c4302b]/10"><YouTubeGlyph /></span>
      <span className="min-w-0 flex-1 leading-snug">{children}</span>
      <span className="flex shrink-0 items-center gap-1 text-[12px] text-[var(--color-ink-faint)] group-hover:text-[#c4302b]">
        Tìm nghe <ArrowUpRightIcon width={12} height={12} />
      </span>
    </a>
  )
}

function YouTubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
      <rect x="1.5" y="5" width="21" height="14" rx="4" fill="#c4302b" />
      <path d="M10 9v6l5-3z" fill="#fff" />
    </svg>
  )
}
