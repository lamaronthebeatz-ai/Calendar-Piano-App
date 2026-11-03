import { findArticle } from '../theory/wiki'
import { citeSource } from '../sources/cite'
import { loadBibliography, type Source } from '../sources/data'
import type { Project } from './store'

/**
 * A project's draft as a paper: citations [^id, tr. n] become numbered notes in Chicago style (full reference the
 * first time, short "Author, Title, page" after), [[slug]] links become their text, and a bibliography of every
 * cited or kept source closes it. Markdown for any editor, or a Word document (HTML that Word opens as .doc).
 */
const CITE = /\[\^([a-z0-9-]+)(?:,\s*([^\]]+))?\]/g
const LINK = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g

interface Paper {
  title: string
  question: string
  body: string
  notes: string[]
  bibliography: string[]
}

const short = (s: Source) => (s.authors ? `${s.authors[0].split(',')[0]}, ${s.title}` : (s.labels[0] ?? s.id))

async function paper(p: Project): Promise<Paper> {
  const { byId } = await loadBibliography()
  const notes: string[] = []
  const seen = new Set<string>()
  const body = p.draft
    .replace(LINK, (_, slug: string, label?: string) => label ?? findArticle(slug)?.title ?? slug)
    .replace(CITE, (_, id: string, where?: string) => {
      const s = byId.get(id)
      // "tr. " left without a number is no page
      const page = where && !/^tr\.?\s*$/.test(where.trim()) ? `, ${where.trim()}` : ''
      const text = !s ? `${id}${page}` : seen.has(id) ? `${short(s)}${page}` : `${citeSource(s, 'chicago').replace(/\.$/, '')}${page}`
      seen.add(id)
      notes.push(`${text}.`)
      return `[^${notes.length}]`
    })
  const ids = [...new Set([...seen, ...p.sources])]
  const bibliography = ids
    .map((id) => byId.get(id))
    .filter((s): s is Source => !!s)
    .map((s) => citeSource(s, 'chicago'))
    .sort((a, b) => a.localeCompare(b, 'vi'))
  return { title: p.title, question: p.question, body, notes, bibliography }
}

export async function toMarkdown(p: Project) {
  const x = await paper(p)
  return [
    `# ${x.title}`,
    x.question && `*Câu hỏi nghiên cứu:* ${x.question}`,
    x.body,
    x.notes.length && `---\n\n${x.notes.map((n, i) => `[^${i + 1}]: ${n}`).join('\n')}`,
    x.bibliography.length && `## Thư mục\n\n${x.bibliography.join('\n\n')}`,
  ]
    .filter(Boolean)
    .join('\n\n')
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
/** The library's light markdown to HTML: headings, paragraphs, lists, quotes, bold, italic, note marks. */
function html(md: string) {
  const inline = (t: string) =>
    esc(t)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\*([^*]+)\*/g, '<i>$1</i>')
      .replace(/\[\^(\d+)\]/g, '<sup><a href="#n$1">$1</a></sup>')
  return md
    .split(/\n{2,}/)
    .map((block) => {
      const b = block.trim()
      if (!b) return ''
      const h = /^(#{2,3}) (.+)$/.exec(b)
      if (h) return `<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`
      if (b.startsWith('>')) return `<blockquote>${inline(b.replace(/^>\s?/gm, ''))}</blockquote>`
      if (/^[-*] /.test(b)) return `<ul>${b.split('\n').map((l) => `<li>${inline(l.replace(/^[-*] /, ''))}</li>`).join('')}</ul>`
      return `<p>${inline(b).replace(/\n/g, '<br>')}</p>`
    })
    .join('\n')
}

export async function toWord(p: Project) {
  const x = await paper(p)
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>${esc(x.title)}</title>
<style>body{font-family:'Times New Roman',serif;font-size:13pt;line-height:1.5}h1{font-size:18pt}h2{font-size:15pt}blockquote{margin-left:2em;font-style:italic}.notes{font-size:11pt}</style></head><body>
<h1>${esc(x.title)}</h1>
${x.question ? `<p><i>Câu hỏi nghiên cứu:</i> ${esc(x.question)}</p>` : ''}
${html(x.body)}
${x.notes.length ? `<hr><h2>Chú thích</h2><ol class="notes">${x.notes.map((n, i) => `<li id="n${i + 1}">${esc(n)}</li>`).join('')}</ol>` : ''}
${x.bibliography.length ? `<h2>Thư mục</h2>${x.bibliography.map((b) => `<p>${esc(b)}</p>`).join('')}` : ''}
</body></html>`
}

export function download(name: string, text: string, type: string) {
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([text], { type })), download: name })
  a.click()
  URL.revokeObjectURL(a.href)
}
