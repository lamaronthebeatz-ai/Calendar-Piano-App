import { citeSource, type Style } from '../sources/cite'
import type { Source } from '../sources/data'
import { doiOf, SOURCE_TYPES, type MySource } from './model'

/**
 * Citations of Lamar's own sources through the library's formatter (sources/cite.ts), so both read alike. Only the
 * fields entered are printed; DOI, ISBN and the archive's shelf mark are added after, never invented.
 */
export function asSource(s: MySource): Source {
  return {
    id: s.id,
    kind: s.type === 'article' || s.type === 'chapter' ? 'article' : 'book',
    labels: [s.title],
    urls: s.url ? [s.url] : [],
    uses: [],
    authors: s.authors.length ? s.authors : undefined,
    title: s.title,
    year: s.year ?? '',
    publisher: s.publisher,
    place: s.place,
    edition: s.edition,
    container: s.container,
    volume: s.volume,
    url: s.url,
  }
}

export function citeMine(s: MySource, style: Style, page?: string): string {
  const doi = s.doi ? doiOf(s.doi) : null
  const base = citeSource(asSource(s), style)
  if (style === 'bibtex') {
    const extra = [doi && `  doi = {${doi}},`, s.isbn && `  isbn = {${s.isbn}},`, s.pages && `  pages = {${s.pages}},`, s.type === 'thesis' && `  type = {${SOURCE_TYPES.thesis}},`, s.archive && `  note = {${s.archive}},`].filter(Boolean)
    return extra.length ? base.replace(/\n}$/, `\n${extra.join('\n')}\n}`) : base
  }
  const tail = [s.type === 'thesis' && SOURCE_TYPES.thesis, s.type === 'archive' && s.archive, !page && s.pages && `tr. ${s.pages}`, page && `tr. ${page}`, doi && `https://doi.org/${doi}`, !doi && s.isbn && `ISBN ${s.isbn}`].filter(Boolean)
  return tail.length ? `${base.replace(/\.$/, '')}. ${tail.join('. ')}.` : base
}
