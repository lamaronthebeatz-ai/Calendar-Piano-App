import type { CSSProperties } from 'react'
import { findArticle } from '../../theory/wiki'
import { QUESTIONS } from '../../theory/quiz/bank'
import { ABOUT_AUTHOR, BOOKS, foreword } from '../books'
import { CURRICULA } from '../curricula'
import { KIDS_BOOKS } from '../kids/books'
import type { Book, Curriculum, KidsBook, Level, Score } from '../types'

/**
 * Every shelf item — the books and the piano courses — flattened into one sequence of reader items:
 * cover, front matter, contents, then part openers each followed by their chapters. Chapter keys are
 * the library slugs, so a chapter's address in the reader is the same slug as in the theory library.
 */
export type ReaderItem =
  | { key: 'bia'; kind: 'cover'; title: string }
  | { key: string; kind: 'front'; title: string; body: string; signed?: boolean }
  | { key: 'muc-luc'; kind: 'toc'; title: string }
  | { key: string; kind: 'part'; title: string; label: string; n: number; intro: string; body?: string }
  | { key: string; kind: 'chapter'; title: string; slug: string; n: number; part: number; focus?: string }
  | { key: string; kind: 'review'; title: string; label: string; part: number; body: string }
  | { key: 'dap-an'; kind: 'answers'; title: string }
  | { key: string; kind: 'score'; title: string; n: number; part: number; score: Score }
  | { key: 'nguon-ban-nhac'; kind: 'credits'; title: string; scores: Score[] }

export interface ReaderBook {
  id: string
  title: string
  volume?: string
  subtitle: string
  author: string
  audience: string
  hue: number
  glyph: string
  /** Cream typographic cover (the books) or the coloured course cover. */
  style: 'cream' | 'color'
  /** Photographic cover, used instead of the typographic one. */
  coverImage?: string
  /** 'kids': a volume of the children's course (one ABRSM grade), with pieces in full at the back. */
  kind: 'book' | 'course' | 'kids'
  items: ReaderItem[]
}

export const hueTint = (hue: number) => ({ '--tint': `oklch(0.58 0.13 ${hue})`, '--tint-soft': `oklch(0.58 0.13 ${hue} / 0.12)` }) as CSSProperties

const clean = (s: string) => s.replace(/\|/g, '/')

function fromBook(b: Book): ReaderBook {
  const items: ReaderItem[] = [
    { key: 'bia', kind: 'cover', title: 'Bìa' },
    { key: 'loi-noi-dau', kind: 'front', title: 'Lời nói đầu', body: `${foreword(`${b.title}${b.volume && !b.volume.startsWith('by ') ? ` — ${b.volume}` : ''}`)}\n## Về cuốn sách này\n${b.preface}`, signed: true },
    { key: 've-tac-gia', kind: 'front', title: 'Về tác giả', body: ABOUT_AUTHOR },
    { key: 'muc-luc', kind: 'toc', title: 'Mục lục' },
  ]
  const seen = new Set<string>()
  let n = 0
  b.parts.forEach((p, i) => {
    items.push({ key: `phan-${i + 1}`, kind: 'part', title: p.title, label: `Phần ${roman(i + 1)}`, n: i + 1, intro: p.intro })
    for (const c of p.chapters) {
      const a = findArticle(c.slug)
      if (!a || seen.has(a.slug)) continue
      seen.add(a.slug)
      items.push({ key: a.slug, kind: 'chapter', title: a.title, slug: a.slug, n: ++n, part: i + 1, focus: c.focus })
    }
    if (p.exercises.length)
      items.push({ key: `on-tap-phan-${i + 1}`, kind: 'review', title: `Ôn tập Phần ${roman(i + 1)}`, label: p.title, part: i + 1, body: `## Bài tập\n${p.exercises.map((e, k) => `${k + 1}. ${e}`).join('\n')}` })
  })
  items.push({ key: 'dap-an', kind: 'answers', title: 'Đáp án câu hỏi ôn tập' })
  return { id: b.id, title: b.title, volume: b.volume, subtitle: b.subtitle, author: b.author, audience: b.audience, hue: b.hue, glyph: b.glyph, style: 'cream', coverImage: b.coverImage, kind: 'book', items }
}

/** A course level's opener: its chapters with goals, practice at the piano, pieces and the end-of-level check. */
function levelBody(l: Level) {
  const out: string[] = []
  const practice = l.units.flatMap((u) => u.practice)
  if (practice.length) out.push('## Trên đàn', ...practice.map((p) => `- ${clean(p)}`))
  if (l.pieces.length) {
    out.push('## Tác phẩm của cấp', '| # | Tác phẩm | Tác giả | Ghi chú |', '|---|---|---|---|')
    l.pieces.forEach((p, i) => {
      const a = p.slug ? findArticle(p.slug) : undefined
      out.push(`| ${i + 1} | ${a ? `[[${a.slug}|${clean(p.title)}]]` : clean(p.title)} | ${clean(p.composer)} | ${clean(p.note ?? '')} |`)
    })
  }
  if (l.exam)
    out.push(
      `## Yêu cầu tương đương ${l.grade}`,
      `- **Âm giai & hợp âm rải:** ${clean(l.exam.scales)}`,
      `- **Thị tấu:** ${clean(l.exam.sightReading)}`,
      `- **Nghe:** ${clean(l.exam.aural)}`,
      `- **Nhạc lý:** ${clean(l.exam.theory)}`,
    )
  out.push('## Kiểm tra cuối cấp', ...l.checkpoint.map((c) => `- ${clean(c)}`))
  return out.join('\n')
}

function fromCourse(c: Curriculum): ReaderBook {
  const front = [
    c.intro,
    '## Nguyên tắc biên soạn',
    ...c.principles.map((p, i) => `${i + 1}. **${clean(p.title)}.** ${clean(p.text)}`),
    '## Một tuần học',
    ...c.routine.map((r) => `- ${clean(r)}`),
    `## Đích đến\n${clean(c.goal)}. So sánh các giáo trình trên thế giới ở bài [[${c.review}]].`,
  ].join('\n')
  const items: ReaderItem[] = [
    { key: 'bia', kind: 'cover', title: 'Bìa' },
    { key: 'loi-noi-dau', kind: 'front', title: 'Lời nói đầu', body: `${foreword(c.title)}\n## Về giáo trình này\n${front}`, signed: true },
    { key: 've-tac-gia', kind: 'front', title: 'Về tác giả', body: ABOUT_AUTHOR },
    { key: 'muc-luc', kind: 'toc', title: 'Mục lục' },
  ]
  const levels = [...c.levels, ...(c.tracks ?? []).flatMap((t) => t.levels)]
  const seen = new Set<string>()
  let n = 0
  levels.forEach((l, i) => {
    const months = l.months[0] === l.months[1] ? `${l.months[0]} tháng` : `${l.months[0]} – ${l.months[1]} tháng`
    const units = `## Các chủ đề\n${l.units.map((u, k) => `- **${i + 1}.${k + 1} ${clean(u.title)}** — ${clean(u.goal)}`).join('\n')}`
    items.push({ key: `cap-${i + 1}`, kind: 'part', title: l.title, label: `Cấp ${i + 1} · ${l.grade} · ${months}`, n: i + 1, intro: l.subtitle, body: units })
    for (const u of l.units)
      for (const lesson of u.lessons) {
        const a = findArticle(lesson.slug)
        if (!a || seen.has(a.slug)) continue
        seen.add(a.slug)
        items.push({ key: a.slug, kind: 'chapter', title: a.title, slug: a.slug, n: ++n, part: i + 1, focus: lesson.focus })
      }
    items.push({ key: `on-tap-cap-${i + 1}`, kind: 'review', title: `Ôn tập và kiểm tra Cấp ${i + 1}`, label: l.title, part: i + 1, body: levelBody(l) })
  })
  items.push({ key: 'dap-an', kind: 'answers', title: 'Đáp án câu hỏi ôn tập' })
  return { id: c.id, title: c.title, subtitle: c.subtitle, author: c.author, audience: c.audience, hue: c.hue, glyph: c.glyph, style: 'color', coverImage: c.coverImage, kind: 'course', items }
}

const STYLE: Record<Score['style'], string> = { classical: 'Cổ điển', c20: 'Thế kỷ XX', new: 'Sáng tác mới', folk: 'Dân ca thế giới', vietnam: 'Dân ca Việt Nam' }
export const scoreStyle = (s: Score) => STYLE[s.style]

function fromKids(b: KidsBook): ReaderBook {
  const items: ReaderItem[] = [
    { key: 'bia', kind: 'cover', title: 'Bìa' },
    { key: 'loi-noi-dau', kind: 'front', title: 'Lời nói đầu', body: `${foreword(`Piano & Nhạc lý cho Trẻ em — ${b.volume}`)}\n## Về cuốn sách này\n${b.preface}`, signed: true },
    { key: 've-tac-gia', kind: 'front', title: 'Về tác giả', body: ABOUT_AUTHOR },
    { key: 'muc-luc', kind: 'toc', title: 'Mục lục' },
  ]
  const seen = new Set<string>()
  let n = 0
  b.parts.forEach((p, i) => {
    items.push({ key: `phan-${i + 1}`, kind: 'part', title: p.title, label: `Phần ${roman(i + 1)}`, n: i + 1, intro: p.intro })
    for (const c of p.chapters) {
      const a = findArticle(c.slug)
      if (!a || seen.has(a.slug)) continue
      seen.add(a.slug)
      items.push({ key: a.slug, kind: 'chapter', title: a.title, slug: a.slug, n: ++n, part: i + 1, focus: c.focus })
    }
    if (p.exercises.length)
      items.push({ key: `on-tap-phan-${i + 1}`, kind: 'review', title: `Ôn tập Phần ${roman(i + 1)}`, label: p.title, part: i + 1, body: `## Bài tập\n${p.exercises.map((e, k) => `${k + 1}. ${e}`).join('\n')}` })
  })
  const last = b.parts.length + 1
  const list = b.scores.map((s, k) => `| ${k + 1} | ${clean(s.title)} | ${clean(s.composer)} | ${STYLE[s.style]} |`).join('\n')
  items.push({
    key: 'tac-pham', kind: 'part', title: 'Tác phẩm', label: `Phần ${roman(last)}`, n: last,
    intro: 'Các bản nhạc của cấp, in đầy đủ: tác phẩm cổ điển, tác phẩm thế kỷ XX đã thuộc phạm vi công cộng, bài viết mới cho giáo trình và dân ca Việt Nam soạn cho piano. Nguồn của từng bản ghi ở trang cuối sách.',
    body: `## Danh sách\n| # | Tác phẩm | Tác giả | Loại |\n|---|---|---|---|\n${list}`,
  })
  b.scores.forEach((s, k) => items.push({ key: `tp-${s.id}`, kind: 'score', title: s.title, n: k + 1, part: last, score: s }))
  const exam = b.exam
    ? [`## Yêu cầu tương đương ABRSM ${b.grade}`, `- **Âm giai & hợp âm rải:** ${clean(b.exam.scales)}`, `- **Thị tấu:** ${clean(b.exam.sightReading)}`, `- **Nghe:** ${clean(b.exam.aural)}`, `- **Nhạc lý:** ${clean(b.exam.theory)}`]
    : []
  items.push({ key: 'kiem-tra-cuoi-cap', kind: 'review', title: 'Kiểm tra cuối cấp', label: b.volume, part: last, body: [...exam, '## Trước khi sang cấp sau', ...b.checkpoint.map((c) => `- ${clean(c)}`)].join('\n') })
  items.push({ key: 'dap-an', kind: 'answers', title: 'Đáp án câu hỏi ôn tập' })
  items.push({ key: 'nguon-ban-nhac', kind: 'credits', title: 'Nguồn bản nhạc', scores: b.scores })
  return { id: b.id, title: 'Piano & Nhạc lý cho Trẻ em', volume: b.volume, subtitle: b.subtitle, author: 'Lamar', audience: `Trẻ em · ABRSM ${b.grade}`, hue: b.hue, glyph: '𝄞', style: 'color', coverImage: b.coverImage, kind: 'kids', items }
}

export function roman(n: number) {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'][n] ?? String(n)
}

export const READER_BOOKS: ReaderBook[] = [...BOOKS.map(fromBook), ...KIDS_BOOKS.map(fromKids), ...CURRICULA.map(fromCourse)]

export const findBook = (id?: string) => READER_BOOKS.find((b) => b.id === id)

export const chaptersOf = (b: ReaderBook) => b.items.filter((i): i is Extract<ReaderItem, { kind: 'chapter' }> => i.kind === 'chapter')

/** slug → the books that contain it as a chapter (for "read in the book" links from the library). */
export const booksWithChapter = (slug: string) =>
  READER_BOOKS.flatMap((b) => {
    const c = chaptersOf(b).find((x) => x.slug === slug)
    return c ? [{ book: b, chapter: c }] : []
  })

/** A stable small hash, to place the right answer among the options the same way every time. */
const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7) >>> 0

/** Review questions for a lesson: the quiz questions written for its article, options lettered A – D. */
export function lessonQuestions(slug: string, max = 5) {
  return QUESTIONS.filter((q) => q.slug === slug)
    .slice(0, max)
    .map((q) => {
      const at = hash(q.q) % 4
      const options = [...q.w]
      options.splice(at, 0, q.a)
      return { q: q.q, options, answer: at }
    })
}
