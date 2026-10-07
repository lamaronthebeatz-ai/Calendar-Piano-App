import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { findArticle } from './wiki'
import { CircleOfFifths, Keyboard, Staff, type Clef } from './diagrams'

/**
 * Inline markup: **bold** and [[slug|label]] wiki links (unknown targets render as red links, like Wikipedia).
 * Without a label, a link shows the article title, lower-cased unless it starts the text.
 */
function Inline({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g).map((part, i, parts) => {
    if (part.startsWith('**')) return <strong key={i} className="font-semibold text-[var(--color-ink)]">{part.slice(2, -2)}</strong>
    if (!part.startsWith('[[')) return part
    const [target, label] = part.slice(2, -2).split('|')
    const article = findArticle(target)
    return article ? (
      <Link key={i} to={`/theory/${article.slug}`} className="text-[var(--color-accent)] underline-offset-2 hover:underline">
        {label ?? (i === 1 && !parts[0].trim() ? article.title : article.title[0].toLowerCase() + article.title.slice(1))}
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

function Figure({ caption, children }: { caption?: string; children: ReactNode }) {
  return (
    <figure className="my-5 flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
      {children}
      {caption && <figcaption className="text-center text-[13px] text-[var(--color-ink-muted)]">{caption}</figcaption>}
    </figure>
  )
}

/** `::name args | caption` directives that embed a diagram or image. */
function Directive({ line }: { line: string }) {
  const [spec, caption] = line.slice(2).split('|').map((s) => s.trim())
  const [name, ...args] = spec.split(/\s+/)
  switch (name) {
    case 'keyboard':
      return <Figure caption={caption}><Keyboard notes={args} /></Figure>
    case 'staff':
      return <Figure caption={caption}><Staff clef={args[0] as Clef} notes={args.slice(1)} /></Figure>
    case 'circle-of-fifths':
      return <Figure caption={caption}><CircleOfFifths /></Figure>
    case 'img':
      return <CommonsImage file={args.join(' ')} caption={caption} />
    default:
      return null
  }
}

// Split on pipes, except those inside [[slug|label]] links.
const cells = (row: string) => row.split(/\|(?![^[]*\]\])/).slice(1, -1).map((c) => c.trim())

/** Renders an article body: groups consecutive lines of the same kind into blocks. */
export function Markup({ source }: { source: string }) {
  let block = null as { kind: 'p' | 'li' | 'tr'; lines: string[] } | null
  const out: ReactNode[] = []
  const lines = source.trim().split('\n').map((l) => l.trim())

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
      if (b.kind === 'tr') {
        const [head, ...rows] = b.lines.filter((l) => !/^\|[\s:|-]+\|$/.test(l)).map(cells)
        out.push(
          <div key={k} className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-[var(--color-surface-sunken)]">
                <tr>{head.map((c, i) => <th key={i} className="px-3 py-2 font-semibold"><Inline text={c} /></th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-[var(--color-border)]">
                    {r.map((c, j) => <td key={j} className="px-3 py-2"><Inline text={c} /></td>)}
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
    const kind = line.startsWith('- ') ? 'li' : line.startsWith('|') ? 'tr' : 'p'
    if (!line || line.startsWith('## ') || line.startsWith('::') || block?.kind !== kind) flush()
    if (!line) continue
    if (line.startsWith('## ')) out.push(<h2 key={out.length} className="pt-3 text-[18px] font-semibold text-[var(--color-ink)]">{line.slice(3)}</h2>)
    else if (line.startsWith('::')) out.push(<Directive key={out.length} line={line} />)
    else (block ??= { kind, lines: [] }).lines.push(kind === 'li' ? line.slice(2) : line)
  }
  flush()

  return <div className="space-y-3 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">{out}</div>
}
