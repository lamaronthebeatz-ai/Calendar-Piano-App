import { useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ExpandIcon, XIcon } from '../../components/icons'
import { findArticle, normalize } from './wiki'
import { prefetchText } from './body'
import { LinkRefContext, PrintContext } from './linkRef'
import { findScan, loadScans, scanLabel, scanUrl, scanWidth, type ScanItem } from './scans'
import { loadSheets, sheetUrl, type SheetSystem } from './sheets'
import { Bars, CircleOfFifths, RangeChart, FormChart, GrandStaff, Keyboard, PitchClock, Rhythm, Staff, Timeline, type Clef } from './diagrams'
import { figureId, parseKey } from './notation'
import { leadImage, type LeadImage } from './wikiImage'
import { YouTubeSearch, YouTubeVideo } from './YouTube'

/**
 * Inline markup: **bold**, *italic* and [[slug|label]] wiki links (unknown targets render as red links, like Wikipedia).
 * Without a label, a link written by slug shows the article title (lower-cased unless it starts the text);
 * one written by title or alias, like [[Bach]], shows that text as written.
 */
function Inline({ text }: { text: string }) {
  const ref = useContext(LinkRefContext)
  return text.split(/(\*\*(?:[^*]|\*[^*]+\*)+\*\*|\*[^*\s][^*]*\*|\[\[[^\]]+\]\])/g).map((part, i, parts) => {
    if (part.startsWith('**')) return <strong key={i} className="font-semibold"><Inline text={part.slice(2, -2)} /></strong>
    if (part.startsWith('*') && part.length > 2) return <em key={i}><Inline text={part.slice(1, -1)} /></em>
    if (!part.startsWith('[[')) return part
    const [target, label] = part.slice(2, -2).split('|')
    const article = findArticle(target)
    const xref = article && ref?.(article.slug)
    return article ? (
      <span key={i}>
        <Link to={`/theory/${article.slug}`} data-slug={article.slug} className="wiki-link" onPointerEnter={() => prefetchText(article.slug)} onTouchStart={() => prefetchText(article.slug)}>
          {label ?? (normalize(target) !== article.slug ? target : i === 1 && !parts[0].trim() ? article.title : article.title[0].toLowerCase() + article.title.slice(1))}
        </Link>
        {xref && <span className="xref"> ({xref})</span>}
      </span>
    ) : (
      <span key={i} title="Chưa có bài viết" className="text-[var(--color-status-cancelled)]">
        {label ?? target}
      </span>
    )
  })
}

/** Image from Wikimedia Commons by file name; hides itself if it cannot load (e.g. offline). */
function CommonsImage({ file, caption }: { file: string; caption: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <Figure caption={caption}>
      <img
        src={`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=320`}
        alt={caption}
        loading="lazy"
        onError={() => setFailed(true)}
        className="max-h-48 rounded-lg bg-white p-2"
      />
      <a href={`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`} target="_blank" rel="noreferrer" className="text-[11px] text-[var(--color-ink-faint)] hover:underline">
        Nguồn: Wikimedia Commons
      </a>
    </Figure>
  )
}

/**
 * Lead image of a Wikipedia article (see wikiImage.ts), with a link to the file's licence page.
 * Renders nothing while loading, offline, or when the article has no free image.
 */
export function WikiImage({ titles, years, caption, portrait }: { titles: string[]; years?: string; caption: string; portrait?: boolean }) {
  const key = titles.join('|')
  const [img, setImg] = useState<{ key: string; value: LeadImage | null }>()
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    let live = true
    leadImage(key.split('|'), years).then((value) => live && setImg({ key, value }))
    return () => {
      live = false
    }
  }, [key, years])
  const lead = img?.key === key ? img.value : null
  if (!lead || failed) return null
  return (
    <Figure caption={caption}>
      <img
        src={lead.src}
        width={lead.width}
        height={lead.height}
        alt={caption}
        loading="lazy"
        onError={() => setFailed(true)}
        className={portrait ? 'max-h-60 w-auto rounded-xl object-cover' : 'max-h-64 w-auto rounded-lg bg-white'}
      />
      <a href={`https://en.wikipedia.org/wiki/File:${encodeURIComponent(lead.file)}`} target="_blank" rel="noreferrer" className="text-[11px] text-[var(--color-ink-faint)] hover:underline">
        Nguồn ảnh: Wikipedia — {lead.page} (giấy phép tự do)
      </a>
    </Figure>
  )
}

function Figure({ caption, children }: { caption?: string; children: ReactNode }) {
  // Width to draw the figure at when enlarged (null: closed): twice a diagram's natural size, so wide charts become readable.
  const [zoom, setZoom] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const open = () => {
    // The widest drawing in the figure (skipping small icons such as the expand button's own).
    const natural = Math.max(0, ...[...(ref.current?.querySelectorAll('svg') ?? [])].map((svg) => svg.viewBox.baseVal?.width ?? 0))
    setZoom(natural > 100 ? Math.min(1400, natural * 2) : 0)
  }
  return (
    <figure ref={ref} className="group/fig relative my-7 flex flex-col items-center gap-3 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 shadow-[var(--shadow-soft)]">
      <button
        type="button"
        onClick={open}
        aria-label="Phóng to hình"
        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-ink-faint)] opacity-70 transition-all hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)] hover:opacity-100 sm:opacity-0 sm:group-hover/fig:opacity-100"
      >
        <ExpandIcon width={15} height={15} />
      </button>
      {children}
      {caption && <figcaption className="max-w-xl text-balance text-center font-sans text-[13px] leading-snug text-[var(--color-ink-muted)]"><Inline text={caption} /></figcaption>}
      {zoom !== null && <Lightbox caption={caption} width={zoom} onClose={() => setZoom(null)}>{children}</Lightbox>}
    </figure>
  )
}

/**
 * Full-screen view of a figure. The page disables pinch-zoom, so diagrams are drawn again at a
 * comfortable minimum width; on a phone the reader pans sideways across them.
 */
function Lightbox({ caption, width, onClose, children }: { caption?: string; width: number; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [onClose])
  return createPortal(
    <div role="dialog" aria-modal aria-label={caption ?? 'Hình minh hoạ'} className="animate-fade-in fixed inset-0 z-50 flex flex-col bg-[color-mix(in_oklch,var(--color-surface)_94%,transparent)] backdrop-blur-md" onClick={onClose}>
      <div className="flex items-center justify-between gap-3 px-4 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="min-w-0">
          <p className="line-clamp-2 text-[13px] text-[var(--color-ink-muted)]">{caption && <Inline text={caption} />}</p>
          {width > innerWidth - 32 && <p className="mt-0.5 text-[11.5px] font-medium text-[var(--color-accent)]">↔ Vuốt ngang để xem toàn bộ hình</p>}
        </div>
        <button type="button" onClick={onClose} aria-label="Đóng" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink)] shadow-[var(--shadow-soft)]">
          <XIcon width={18} height={18} />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-auto px-4 pb-6" onClick={(e) => e.stopPropagation()}>
        <div className="animate-pop-in mx-auto flex min-h-full w-max min-w-full items-center justify-center">
          <div style={{ width: `max(min(100vw - 2rem, 1100px), ${width}px)` }} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 shadow-[var(--shadow-float)] [&_img]:mx-auto [&_img]:max-h-[80dvh] [&_img]:w-auto [&_svg]:!max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

/** The examples of one item, stacked (an example running over several pages has several files). */
function ScanImages({ book, item }: { book: string; item: ScanItem }) {
  const printing = useContext(PrintContext)
  return (
    <>
      {item.files.map((f) => (
        // full width up to the scan's own size, height from the ratio — so the layout is right before the image loads
        <img key={f.f} src={scanUrl(book, f.f)} width={f.w} height={f.h} style={{ maxWidth: scanWidth(book, f.w) }} alt={scanLabel(book, item)} loading={printing ? 'eager' : 'lazy'} className="scan-img" />
      ))}
    </>
  )
}

/** `::scan book ref | caption` — one example cut from a scanned book, placed where the text discusses it. */
function ScanFigure({ book, refs, caption }: { book: string; refs: string; caption: string }) {
  const [state, setState] = useState<{ key: string; items: ScanItem[] }>()
  const key = `${book}:${refs}`
  useEffect(() => {
    let live = true
    loadScans(book).then((all) => live && setState({ key, items: refs.split(',').map((r) => findScan(all, r)).filter((x): x is ScanItem => !!x) }))
    return () => {
      live = false
    }
  }, [book, refs, key])
  const items = state?.key === key ? state.items : []
  if (!items.length) return null
  const label = items.map((it) => scanLabel(book, it)).join('; ')
  return (
    <Figure caption={caption ? `${caption} *(${label})*` : label}>
      {items.map((it) => (
        <ScanImages key={it.n + '-' + it.page} book={book} item={it} />
      ))}
    </Figure>
  )
}

/** The systems of an engraved example or piece, once the list of sheets has loaded. */
function useSheet(kind: 'ex' | 'tp', id: string) {
  const [state, setState] = useState<{ id: string; systems: SheetSystem[] }>()
  useEffect(() => {
    let live = true
    loadSheets().then((m) => live && setState({ id, systems: m[kind][id] ?? [] }))
    return () => {
      live = false
    }
  }, [kind, id])
  return state?.id === id ? state.systems : []
}

/** Examples keep their engraved size; pieces fill the page width so the notes read large. */
function SheetImages({ kind, systems, alt }: { kind: 'ex' | 'tp'; systems: SheetSystem[]; alt: string }) {
  const printing = useContext(PrintContext)
  return (
    <>
      {systems.map(([f, w, h]) => (
        <img key={f} src={sheetUrl(kind, f)} width={w} height={h} style={kind === 'ex' ? { maxWidth: '100%', width: w } : undefined} alt={alt} loading={printing ? 'eager' : 'lazy'} className="scan-img sheet-img" />
      ))}
    </>
  )
}

/** `::ex id | caption` — a music example engraved for the children's books. */
function SheetExample({ id, caption }: { id: string; caption: string }) {
  const systems = useSheet('ex', id)
  if (!systems.length) return null
  return (
    <Figure caption={caption}>
      <SheetImages kind="ex" systems={systems} alt={caption || id} />
    </Figure>
  )
}

/**
 * `::licks id | n=caption ;; n=caption …` — an engraved block of licks (Jazz Licks book), one system per lick, each
 * headed by its number and a short analysis; a lick never splits across pages.
 */
function LickSheet({ id, caption }: { id: string; caption: string }) {
  const systems = useSheet('ex', id)
  const printing = useContext(PrintContext)
  // "n=caption", or "n#k=caption" for a lick engraved on k lines
  const parts = caption.split(' ;; ').map((c) => {
    const k = c.indexOf('=')
    const [n, lines = '1'] = c.slice(0, k).split('#')
    return { n, text: c.slice(k + 1), lines: +lines }
  })
  const starts = parts.map((_, i) => parts.slice(0, i).reduce((s, p) => s + p.lines, 0))
  const caps = parts.map((p, i) => ({ ...p, sys: systems.slice(starts[i], starts[i] + p.lines) }))
  return (
    <div className="licks">
      {caps.map(({ n, text, sys }) => (
        <div key={n} id={`lick-${n}`} className="lick">
          <p className="lick-head">
            <span className="lick-n">{n}</span>
            <span className="lick-text">{text}</span>
          </p>
          {sys.map(([f, w, h]) => (
            <img key={f} src={sheetUrl('ex', f)} width={w} height={h} style={{ maxWidth: '100%', width: w }} alt={`Lick ${n}: ${text}`} loading={printing ? 'eager' : 'lazy'} className="scan-img sheet-img lick-img" />
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 * `::sheet id | title` — a whole piece, system after system, so the page breaks fall between systems. In the
 * reader, a piece that does not fit in the rest of the page it would start on begins on a new page: a marker
 * where the text ends tells how much room is left, and a column break is inserted before the music when the
 * systems need more (the reader recounts its pages when that element appears).
 */
function SheetScore({ id, title }: { id: string; title: string }) {
  const systems = useSheet('tp', id)
  const mark = useRef<HTMLDivElement>(null)
  const [newPage, setNewPage] = useState(false)
  useEffect(() => {
    const m = mark.current
    const flow = m?.closest<HTMLElement>('.reader-flow')
    const box = m?.parentElement?.querySelector<HTMLElement>('.sheet-score')
    if (!m || !flow || !box || !systems.length) return
    let raf = 0
    const check = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const pageH = flow.clientHeight
        const y = m.getBoundingClientRect().top - flow.getBoundingClientRect().top
        const music = [...box.querySelectorAll('img')].reduce((sum, img) => sum + img.getBoundingClientRect().height + parseFloat(getComputedStyle(img).marginBottom), 0)
        setNewPage(y > pageH * 0.08 && music > pageH - y)
      })
    }
    check()
    const ro = new ResizeObserver(check)
    if (m.parentElement) ro.observe(m.parentElement)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [systems])
  return (
    <>
      <div ref={mark} aria-hidden className="sheet-mark" />
      {newPage && <div aria-hidden className="sheet-page-break" />}
      <div className="sheet-score" aria-label={title || id}>
        <SheetImages kind="tp" systems={systems} alt={title || id} />
      </div>
    </>
  )
}

/**
 * A notation directive that has a LilyPond engraving (scripts/staff/figures.mjs) shows the engraving and keeps the
 * drawn diagram's play button; without one, the diagram is drawn in SVG as before.
 */
function Engraved({ spec, caption, children }: { spec: string; caption: string; children: (image?: ReactNode) => ReactNode }) {
  const id = figureId(spec)
  const [state, setState] = useState<{ id: string; systems: SheetSystem[] }>()
  useEffect(() => {
    let live = true
    loadSheets().then((m) => live && setState({ id, systems: m.ex[id] ?? [] }))
    return () => {
      live = false
    }
  }, [id])
  if (state?.id !== id) return null
  return <Figure caption={caption}>{children(state.systems.length ? <div className="engraved"><SheetImages kind="ex" systems={state.systems} alt={caption || spec} /></div> : undefined)}</Figure>
}

/** `::name args | caption` directives that embed a diagram or image. */
function Directive({ line }: { line: string }) {
  const [spec, ...rest] = line.slice(2).split(PIPE)
  const caption = rest.join('|').trim()
  const [name, ...args] = spec.trim().split(/\s+/)
  switch (name) {
    case 'keyboard':
      return <Figure caption={caption}><Keyboard notes={args} /></Figure>
    case 'staff': {
      const keySig = parseKey(args[1])
      return <Engraved spec={spec} caption={caption}>{(image) => <Staff clef={args[0] as Clef} keySig={keySig} notes={args.slice(keySig ? 2 : 1)} image={image} />}</Engraved>
    }
    case 'grand': {
      const keySig = parseKey(args[0])
      return <Engraved spec={spec} caption={caption}>{(image) => <GrandStaff keySig={keySig} columns={args.slice(keySig ? 1 : 0)} image={image} />}</Engraved>
    }
    case 'form':
      return <Figure caption={caption}><FormChart sections={args} /></Figure>
    case 'pc-clock':
      return <Figure caption={caption}><PitchClock set={args.map(Number)} /></Figure>
    case 'rhythm':
      return <Engraved spec={spec} caption={caption}>{(image) => <Rhythm tokens={args} image={image} />}</Engraved>
    case 'wiki':
      return <WikiImage titles={[args.join('_')]} caption={caption} />
    case 'range':
      return <Figure caption={caption}><RangeChart items={args} /></Figure>
    case 'bars':
      return <Figure caption={caption}><Bars items={args} /></Figure>
    case 'timeline':
      return <Figure caption={caption}><Timeline items={args} /></Figure>
    case 'circle-of-fifths':
      return <Figure caption={caption}><CircleOfFifths /></Figure>
    case 'img':
      return <CommonsImage file={args.join(' ')} caption={caption} />
    case 'ex':
      return <SheetExample id={args[0]} caption={caption} />
    case 'licks':
      return <LickSheet id={args[0]} caption={caption} />
    case 'sheet':
      return <SheetScore id={args[0]} title={caption} />
    case 'scan':
      return <ScanFigure book={args[0]} refs={args[1]} caption={caption} />
    case 'youtube':
      return <YouTubeVideo id={args[0]}>{caption && <Inline text={caption} />}</YouTubeVideo>
    case 'ytsearch':
      return <YouTubeSearch query={args.join(' ')}><Inline text={caption || args.join(' ')} /></YouTubeSearch>
    default:
      return null
  }
}

// Pipes that separate cells or a caption — not those inside [[slug|label]] links.
const PIPE = /\|(?![^[]*\]\])/
const cells = (row: string) => row.split(PIPE).slice(1, -1).map((c) => c.trim())

/** Renders an article body: groups consecutive lines of the same kind into blocks. */
/** `sections`: render only the text before the (n+1)-th `##` heading — the reader shows a long chapter's start first and adds the rest while idle. */
export function Markup({ source, sections = Infinity }: { source: string; sections?: number }) {
  let block = null as { kind: 'p' | 'li' | 'ol' | 'tr'; lines: string[]; start?: number } | null
  const out: ReactNode[] = []
  const lines = source.trim().split('\n').map((l) => l.trim())
  let section = 0 // h2 ids match the order of headings(), which feeds the table of contents

  const flush = () => {
    const b = block
    block = null
    if (b) {
      const k = out.length
      if (b.kind === 'p') out.push(<p key={k}><Inline text={b.lines.join(' ')} /></p>)
      if (b.kind === 'li')
        out.push(
          <ul key={k} className="list-disc space-y-1.5 pl-5">
            {b.lines.map((l, i) => <li key={i}><Inline text={l} /></li>)}
          </ul>,
        )
      if (b.kind === 'ol')
        out.push(
          <ol key={k} start={b.start} className="list-decimal space-y-1.5 pl-6">
            {b.lines.map((l, i) => <li key={i}><Inline text={l} /></li>)}
          </ol>,
        )
      if (b.kind === 'tr') {
        const [head, ...rows] = b.lines.filter((l) => !/^\|[\s:|-]+\|$/.test(l)).map(cells)
        // Plain column names, shown as labels when a narrow reader page stacks each row.
        const labels = head.map((c) => c.replace(/\[\[[^\]|]*\|([^\]]*)\]\]/g, '$1').replace(/\[\[([^\]]*)\]\]/g, '$1').replace(/[*_`]/g, '').trim())
        out.push(
          <div key={k} className="my-6 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] font-sans shadow-[var(--shadow-soft)]">
            <table data-cols={head.length} className="w-full text-left text-[13px] leading-snug sm:text-[13.5px]">
              <thead className="bg-[color-mix(in_oklch,var(--tint,var(--color-accent))_9%,var(--color-surface-raised))]">
                <tr>{head.map((c, i) => <th key={i} className="px-3 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-ink)] sm:px-4"><Inline text={c} /></th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface-sunken)]/60">
                    {r.map((c, j) => <td key={j} data-label={labels[j]} className={j ? 'px-3 py-2.5 align-top sm:px-4' : 'px-3 py-2.5 align-top font-medium text-[var(--color-ink)] sm:px-4'}><Inline text={c} /></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        )
      }
    }
  }

  for (const line of lines) {
    if (line.startsWith('## ') && section >= sections) break
    const num = /^(\d+)\. /.exec(line)
    const kind = line.startsWith('- ') ? 'li' : num ? 'ol' : line.startsWith('|') ? 'tr' : 'p'
    if (!line || line.startsWith('## ') || line.startsWith('### ') || line.startsWith('::') || block?.kind !== kind) flush()
    if (!line) continue
    // Sub-headings stay out of the table of contents, so they take no section id.
    if (line.startsWith('### '))
      out.push(
        <h3 key={out.length} className="pt-2 text-[1.15em] font-semibold leading-snug text-[var(--color-ink)]">
          <Inline text={line.slice(4)} />
        </h3>,
      )
    else if (line.startsWith('## '))
      out.push(
        <h2 key={out.length} id={`sec-${section++}`} className="scroll-mt-24 pt-6 text-[1.4em] font-semibold leading-tight text-[var(--color-ink)]">
          {line.slice(3)}
        </h2>,
      )
    else if (line.startsWith('::')) out.push(<Directive key={out.length} line={line} />)
    else (block ??= { kind, lines: [], start: num ? Number(num[1]) : undefined }).lines.push(kind === 'li' ? line.slice(2) : num ? line.slice(num[0].length) : line)
  }
  flush()

  return <div className="space-y-4">{out}</div>
}
