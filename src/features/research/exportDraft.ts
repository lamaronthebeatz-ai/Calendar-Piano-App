import { findArticle } from '../theory/wiki'
import { citeSource } from '../sources/cite'
import { loadBibliography, type Source } from '../sources/data'
import type { Project } from './store'
import { zip } from './zip'

/**
 * A project's draft as a paper, in one of two citation styles:
 * - Chicago (notes and bibliography): [^id, tr. n] becomes a numbered note — full reference the first time, short
 *   "Author, Title, page" after — and a bibliography closes the paper;
 * - APA: [^id, tr. n] becomes "(Author, year, tr. n)" in the text, and a reference list closes it.
 * [[slug]] links become their text. Out as Markdown, or as a real .docx (Word footnotes for Chicago).
 */
export type ExportStyle = 'chicago' | 'apa'

const CITE = /\[\^([a-z0-9-]+)(?:,\s*([^\]]+))?\]/g
const LINK = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g

interface Paper {
  title: string
  question: string
  /** markdown body; note marks are [^1], [^2]… */
  body: string
  notes: string[]
  /** "Thư mục" (Chicago) or "Tài liệu tham khảo" (APA) */
  listTitle: string
  list: string[]
}

const family = (s: Source) => s.authors?.[0].split(',')[0].trim()
const short = (s: Source) => (s.authors ? `${family(s)}, ${s.title}` : (s.labels[0] ?? s.id))

async function paper(p: Project, style: ExportStyle): Promise<Paper> {
  const { byId } = await loadBibliography()
  const notes: string[] = []
  const seen = new Set<string>()
  const body = p.draft
    .replace(LINK, (_, slug: string, label?: string) => label ?? findArticle(slug)?.title ?? slug)
    .replace(CITE, (_, id: string, where?: string) => {
      const s = byId.get(id)
      // "tr. " left without a number is no page
      const page = where && !/^tr\.?\s*$/.test(where.trim()) ? where.trim() : ''
      const first = !seen.has(id)
      seen.add(id)
      if (style === 'apa') return `(${s ? `${family(s) ?? s.labels[0] ?? id}, ${s.year || 'k.n.'}` : id}${page ? `, ${page}` : ''})`
      const text = !s ? id : first ? citeSource(s, 'chicago').replace(/\.$/, '') : short(s)
      notes.push(`${text}${page ? `, ${page}` : ''}.`)
      return `[^${notes.length}]`
    })
  const list = [...new Set([...seen, ...p.sources])]
    .map((id) => byId.get(id))
    .filter((s): s is Source => !!s)
    .map((s) => citeSource(s, style))
    .sort((a, b) => a.localeCompare(b, 'vi'))
  return { title: p.title, question: p.question, body, notes, listTitle: style === 'apa' ? 'Tài liệu tham khảo' : 'Thư mục', list }
}

export async function toMarkdown(p: Project, style: ExportStyle) {
  const x = await paper(p, style)
  return [
    `# ${x.title}`,
    x.question && `*Câu hỏi nghiên cứu:* ${x.question}`,
    x.body.trim(),
    x.notes.length && `---\n\n${x.notes.map((n, i) => `[^${i + 1}]: ${n}`).join('\n')}`,
    x.list.length && `## ${x.listTitle}\n\n${x.list.join('\n\n')}`,
  ]
    .filter(Boolean)
    .join('\n\n')
}

// ---------- .docx

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const FONT = '<w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman" w:eastAsia="Times New Roman"/>'

/** **bold**, *italic* and note marks [^n] of one line as Word runs. */
function runs(text: string, size = 26, base = '') {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[\^\d+\])/g)
    .filter(Boolean)
    .map((part) => {
      const note = /^\[\^(\d+)\]$/.exec(part)
      if (note) return `<w:r><w:rPr>${FONT}<w:vertAlign w:val="superscript"/></w:rPr><w:footnoteReference w:id="${note[1]}"/></w:r>`
      const bold = part.startsWith('**')
      const italic = !bold && part.startsWith('*') && part.length > 2
      const t = bold ? part.slice(2, -2) : italic ? part.slice(1, -1) : part
      return `<w:r><w:rPr>${FONT}${base}${bold ? '<w:b/>' : ''}${italic ? '<w:i/>' : ''}<w:sz w:val="${size}"/></w:rPr><w:t xml:space="preserve">${esc(t)}</w:t></w:r>`
    })
    .join('')
}

const para = (inner: string, spacing = 'w:after="160" w:line="360" w:lineRule="auto"', extra = '') => `<w:p><w:pPr><w:spacing ${spacing}/>${extra}</w:pPr>${inner}</w:p>`

function bodyXml(md: string) {
  return md
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((b) => {
      const h = /^(#{1,3}) (.+)$/.exec(b)
      if (h) return para(runs(h[2], h[1].length === 1 ? 36 : h[1].length === 2 ? 30 : 27, '<w:b/>'), 'w:before="240" w:after="120"', '<w:keepNext/>')
      if (/^[-*] /.test(b)) return b.split('\n').map((l) => para(runs(`• ${l.replace(/^[-*] /, '')}`), undefined, '<w:ind w:left="360"/>')).join('')
      return para(runs(b.replace(/\n/g, ' ')), undefined, '<w:jc w:val="both"/>')
    })
    .join('')
}

const W = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"'

export async function toDocx(p: Project, style: ExportStyle): Promise<Blob> {
  const x = await paper(p, style)
  const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document ${W}><w:body>${[
    para(runs(x.title, 40, '<w:b/>'), 'w:after="240"'),
    x.question ? para(runs(`*Câu hỏi nghiên cứu:* ${x.question}`)) : '',
    bodyXml(x.body),
    x.list.length ? para(runs(x.listTitle, 30, '<w:b/>'), 'w:before="360" w:after="120"') + x.list.map((r) => para(runs(r, 24), 'w:after="120"', '<w:ind w:left="720" w:hanging="720"/>')).join('') : '',
  ].join('')}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1418" w:right="1418" w:bottom="1418" w:left="1701" w:header="709" w:footer="709" w:gutter="0"/></w:sectPr></w:body></w:document>`
  const footnotes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:footnotes ${W}><w:footnote w:type="separator" w:id="-1"><w:p><w:r><w:separator/></w:r></w:p></w:footnote><w:footnote w:type="continuationSeparator" w:id="0"><w:p><w:r><w:continuationSeparator/></w:r></w:p></w:footnote>${x.notes
    .map((n, i) => `<w:footnote w:id="${i + 1}"><w:p><w:r><w:rPr>${FONT}<w:vertAlign w:val="superscript"/><w:sz w:val="20"/></w:rPr><w:footnoteRef/></w:r>${runs(` ${n}`, 20)}</w:p></w:footnote>`)
    .join('')}</w:footnotes>`
  return zip([
    ['[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/footnotes.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml"/></Types>`],
    ['_rels/.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`],
    ['word/_rels/document.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes" Target="footnotes.xml"/></Relationships>`],
    ['word/document.xml', document],
    ['word/footnotes.xml', footnotes],
  ])
}

export function download(name: string, data: string | Blob, type = 'text/plain') {
  const blob = typeof data === 'string' ? new Blob([data], { type }) : data
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: name })
  a.click()
  URL.revokeObjectURL(a.href)
}
