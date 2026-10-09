import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { findArticle, normalize } from './wiki'
import { CircleOfFifths, FormChart, GrandStaff, Keyboard, PitchClock, Rhythm, Staff, type Clef } from './diagrams'
import { parseKey } from './notation'
import { leadImage, type LeadImage } from './wikiImage'

/**
 * Inline markup: **bold**, *italic* and [[slug|label]] wiki links (unknown targets render as red links, like Wikipedia).
 * Without a label, a link written by slug shows the article title (lower-cased unless it starts the text);
 * one written by title or alias, like [[Bach]], shows that text as written.
 */
function Inline({ text }: { text: string }) {
  return text.split(/(\*\*(?:[^*]|\*[^*]+\*)+\*\*|\*[^*\s][^*]*\*|\[\[[^\]]+\]\])/g).map((part, i, parts) => {
    if (part.startsWith('**')) return <strong key={i} className="font-semibold text-[var(--color-ink)]"><Inline text={part.slice(2, -2)} /></strong>
    if (part.startsWith('*') && part.length > 2) return <em key={i}><Inline text={part.slice(1, -1)} /></em>
    if (!part.startsWith('[[')) return part
    const [target, label] = part.slice(2, -2).split('|')
    const article = findArticle(target)
    return article ? (
      <Link key={i} to={`/theory/${article.slug}`} className="text-[var(--color-accent)] underline-offset-2 hover:underline">
        {label ?? (normalize(target) !== article.slug ? target : i === 1 && !parts[0].trim() ? article.title : article.title[0].toLowerCase() + article.title.slice(1))}
      </Link>
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
  return (
    <figure className="my-5 flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
      {children}
      {caption && <figcaption className="text-center text-[13px] text-[var(--color-ink-muted)]"><Inline text={caption} /></figcaption>}
    </figure>
  )
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
      return <Figure caption={caption}><Staff clef={args[0] as Clef} keySig={keySig} notes={args.slice(keySig ? 2 : 1)} /></Figure>
    }
    case 'grand': {
      const keySig = parseKey(args[0])
      return <Figure caption={caption}><GrandStaff keySig={keySig} columns={args.slice(keySig ? 1 : 0)} /></Figure>
    }
    case 'form':
      return <Figure caption={caption}><FormChart sections={args} /></Figure>
    case 'pc-clock':
      return <Figure caption={caption}><PitchClock set={args.map(Number)} /></Figure>
    case 'rhythm':
      return <Figure caption={caption}><Rhythm tokens={args} /></Figure>
    case 'wiki':
      return <WikiImage titles={[args.join('_')]} caption={caption} />
    case 'circle-of-fifths':
      return <Figure caption={caption}><CircleOfFifths /></Figure>
    case 'img':
      return <CommonsImage file={args.join(' ')} caption={caption} />
    default:
      return null
  }
}

// Pipes that separate cells or a caption — not those inside [[slug|label]] links.
const PIPE = /\|(?![^[]*\]\])/
const cells = (row: string) => row.split(PIPE).slice(1, -1).map((c) => c.trim())

/** Renders an article body: groups consecutive lines of the same kind into blocks. */
export function Markup({ source }: { source: string }) {
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
          <ul key={k} className="list-disc space-y-1 pl-5">
            {b.lines.map((l, i) => <li key={i}><Inline text={l} /></li>)}
          </ul>,
        )
      if (b.kind === 'ol')
        out.push(
          <ol key={k} start={b.start} className="list-decimal space-y-1 pl-6">
            {b.lines.map((l, i) => <li key={i}><Inline text={l} /></li>)}
          </ol>,
        )
      if (b.kind === 'tr') {
        const [head, ...rows] = b.lines.filter((l) => !/^\|[\s:|-]+\|$/.test(l)).map(cells)
        out.push(
          <div key={k} className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-left text-[13px] sm:text-[14px]">
              <thead className="bg-[var(--color-surface-sunken)]">
                <tr>{head.map((c, i) => <th key={i} className="px-2.5 py-2 font-semibold sm:px-3"><Inline text={c} /></th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-[var(--color-border)]">
                    {r.map((c, j) => <td key={j} className="px-2.5 py-2 sm:px-3"><Inline text={c} /></td>)}
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
    const num = /^(\d+)\. /.exec(line)
    const kind = line.startsWith('- ') ? 'li' : num ? 'ol' : line.startsWith('|') ? 'tr' : 'p'
    if (!line || line.startsWith('## ') || line.startsWith('::') || block?.kind !== kind) flush()
    if (!line) continue
    if (line.startsWith('## '))
      out.push(
        <h2 key={out.length} id={`sec-${section++}`} className="scroll-mt-24 pt-3 text-[18px] font-semibold text-[var(--color-ink)]">
          {line.slice(3)}
        </h2>,
      )
    else if (line.startsWith('::')) out.push(<Directive key={out.length} line={line} />)
    else (block ??= { kind, lines: [], start: num ? Number(num[1]) : undefined }).lines.push(kind === 'li' ? line.slice(2) : num ? line.slice(num[0].length) : line)
  }
  flush()

  return <div className="space-y-3 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">{out}</div>
}
