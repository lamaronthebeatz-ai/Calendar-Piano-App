import type { Source } from './data'

/**
 * Citation formats for the bibliography and for the library's own articles. Chicago (notes and bibliography,
 * 17th ed.) is the default — the usual style in musicology; APA 7 and BibTeX for other uses. Only curated works
 * have the fields for a full citation; other sources are cited as web pages from what the articles give.
 */
export type Style = 'chicago' | 'apa' | 'bibtex'
export const STYLES: [Style, string][] = [
  ['chicago', 'Chicago'],
  ['apa', 'APA'],
  ['bibtex', 'BibTeX'],
]

const today = () => new Date().toISOString().slice(0, 10)
const andJoin = (names: string[]) => (names.length < 2 ? names.join('') : `${names.slice(0, -1).join(', ')} và ${names.at(-1)}`)
/** "Levine, Mark" → "Levine, M." */
const initials = (name: string) => {
  const [family, given] = name.split(',').map((x) => x.trim())
  return given ? `${family}, ${given.split(/[\s-]+/).map((g) => `${g[0]}.`).join(' ')}` : family
}

export function citeSource(s: Source, style: Style): string {
  const url = s.url ?? s.urls[0]
  if (!s.authors) {
    // a page as the articles cite it
    const label = s.labels[0] ?? s.id
    if (style === 'bibtex') return `@misc{${s.id},\n  title = {${label}},${url ? `\n  url = {${url}},` : ''}\n  note = {Truy cập ${today()}}\n}`
    if (style === 'apa') return `${label}.${url ? ` ${url}` : ''}`
    return `“${label}.”${url ? ` ${url}.` : ''} Truy cập ${today()}.`
  }
  const place = [s.place, s.publisher].filter(Boolean).join(': ')
  const extra = [s.translator && `Dịch: ${s.translator}`, s.editor && `Biên tập: ${s.editor}`, s.edition].filter(Boolean).join('. ')
  if (style === 'bibtex')
    return [
      `@book{${s.id},`,
      `  author = {${s.authors.join(' and ')}},`,
      `  title = {${s.title}},`,
      s.year && `  year = {${s.year}},`,
      s.publisher && `  publisher = {${s.publisher}},`,
      s.place && `  address = {${s.place}},`,
      s.edition && `  edition = {${s.edition}},`,
      s.translator && `  translator = {${s.translator}},`,
      s.editor && `  editor = {${s.editor}},`,
      url && `  url = {${url}},`,
      '}',
    ]
      .filter(Boolean)
      .join('\n')
  if (style === 'apa') return `${andJoin(s.authors.map(initials))} (${s.year || 'k.n.'}). ${s.title}${s.edition ? ` (${s.edition})` : ''}.${s.translator ? ` (${s.translator}, Dịch).` : ''}${s.publisher ? ` ${s.publisher}.` : ''}${url ? ` ${url}` : ''}`
  return `${andJoin(s.authors)}. ${s.title}.${extra ? ` ${extra}.` : ''}${place ? ` ${place}` : ''}${s.year ? `${place ? ', ' : ' '}${s.year}` : ''}.`
}

/** Citing an article of this library: author, title, last update, permanent address. */
export function citeArticle(a: { slug: string; title: string; updated?: string }, style: Style): string {
  const url = `${location.origin}${location.pathname}#/theory/${a.slug}`
  const year = a.updated?.slice(0, 4) ?? new Date().getFullYear().toString()
  const site = 'Trung tâm lý thuyết âm nhạc học by Lamar'
  if (style === 'bibtex') return `@misc{lamar-${a.slug},\n  author = {Lamar},\n  title = {${a.title}},\n  howpublished = {${site}},\n  year = {${year}},${a.updated ? `\n  note = {Cập nhật ${a.updated}; truy cập ${today()}},` : ''}\n  url = {${url}}\n}`
  if (style === 'apa') return `Lamar. (${a.updated ?? year}). ${a.title}. ${site}. ${url}`
  return `Lamar. “${a.title}.” ${site}.${a.updated ? ` Cập nhật ${a.updated}.` : ''} Truy cập ${today()}. ${url}.`
}
