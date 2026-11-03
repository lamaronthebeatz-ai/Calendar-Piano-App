import { useState } from 'react'
import clsx from 'clsx'
import { STYLES, type Style } from './cite'

/** A citation in Chicago / APA / BibTeX with a copy button (sources page, end of each article). */
export function CiteBox({ title, cite }: { title: string; cite: (style: Style) => string }) {
  const [style, setStyle] = useState<Style>('chicago')
  const [copied, setCopied] = useState(false)
  const text = cite(style)
  const copy = () =>
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    })
  return (
    <section className="src-cite">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="min-w-0 flex-1 font-display text-[16px] font-semibold text-[var(--color-ink)]">{title}</h3>
        <div className="src-cite-styles" role="tablist">
          {STYLES.map(([k, label]) => (
            <button key={k} role="tab" aria-selected={style === k} onClick={() => setStyle(k)} className={clsx(style === k && 'is-on')}>{label}</button>
          ))}
        </div>
      </div>
      <pre className="src-cite-text">{text}</pre>
      <button onClick={copy} className="btn-line rounded-full px-3.5 py-1.5 text-[12.5px]">{copied ? '✓ Đã chép' : 'Chép'}</button>
    </section>
  )
}
