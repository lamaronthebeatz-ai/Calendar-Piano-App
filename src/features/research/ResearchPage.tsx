import { useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { ScrollArea } from '../../components/ScrollArea'
import { TrashIcon } from '../../components/icons'
import { Markup } from '../theory/Markup'
import { findArticle, normalize } from '../theory/wiki'
import { READER_BOOKS } from '../curriculum/reader/model'
import { LIBRARY, useAllNotes, type Note } from '../curriculum/reader/notes'
import { sourceTitle, useBibliography, type Source } from '../sources/data'
import { createProject, removeProject, updateProject, useProjects, type Project } from './store'
import { download, toMarkdown, toWord } from './exportDraft'
import '../sources/sources.css'
import '../explore/explore.css'
import './research.css'

/** The research desk: /research (projects), /research/:id (one project: draft, notes, sources, export). */
export function ResearchPage() {
  const { id } = useParams()
  const projects = useProjects()
  const project = id ? projects.find((p) => p.id === id) : undefined
  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          {id && <Link to="/research" className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Đề tài</Link>}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">{id ? '' : 'Bàn làm việc'}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-8">
        {!id && <Projects projects={projects} />}
        {id && !project && <p className="text-[14px] text-[var(--color-ink-muted)]">Không có đề tài này trên máy. <Link to="/research" className="wiki-link">Về danh sách</Link></p>}
        {project && <ProjectView key={project.id} p={project} />}
      </div>
    </ScrollArea>
  )
}

function Projects({ projects }: { projects: Project[] }) {
  const navigate = useNavigate()
  const notes = useAllNotes()
  const [title, setTitle] = useState('')
  const create = () => {
    if (!title.trim()) return
    navigate(`/research/${createProject(title.trim()).id}`)
  }
  const tagged = (tag: string) => Object.values(notes).reduce((n, list) => n + list.filter((x) => x.tags?.includes(tag)).length, 0)
  return (
    <>
      <header className="animate-float-up">
        <p className="brand-eyebrow">Bàn làm việc nghiên cứu</p>
        <h2 className="mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">Từ ghi chú đến bản nháp</h2>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          Mỗi đề tài có câu hỏi nghiên cứu, bản nháp, nguồn và ghi chú. Ghi chú vào đề tài bằng thẻ: đánh dấu một đoạn trong bài hay sách, gắn thẻ của đề tài là nó hiện ở đây. Bản nháp trích dẫn bằng <code>[^mã-nguồn, tr. n]</code>, xuất ra Markdown hoặc Word có chú thích và thư mục theo Chicago. Đề tài lưu trên máy này và nằm trong bản sao lưu ở Cài đặt.
        </p>
      </header>
      <form onSubmit={(e) => (e.preventDefault(), create())} className="flex gap-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tên đề tài mới, vd. Tân nhạc Việt Nam 1930 – 1945" className="hero-search h-11 min-w-0 flex-1 rounded-full px-4 text-[14px] outline-none" />
        <button type="submit" disabled={!title.trim()} className="btn-gold shrink-0 rounded-full px-5 text-[13.5px] font-medium disabled:opacity-50">Tạo</button>
      </form>
      {projects.length === 0 ? (
        <p className="text-[14px] text-[var(--color-ink-faint)]">Chưa có đề tài nào.</p>
      ) : (
        <ul className="src-list">
          {projects.map((p) => (
            <li key={p.id}>
              <Link to={`/research/${p.id}`} className="src-row">
                <span className="min-w-0 flex-1">
                  <span className="src-title">{p.title}</span>
                  <span className="src-sub">{p.question || 'Chưa ghi câu hỏi nghiên cứu'}</span>
                </span>
                <span className="src-uses">{tagged(p.tag)} ghi chú · {p.sources.length} nguồn · sửa {new Date(p.updated).toLocaleDateString('vi-VN')}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

interface Entry extends Note {
  scope: string
  where: string
  link: string
}

type Pane = 'nhap' | 'ghi-chu' | 'nguon'

function ProjectView({ p }: { p: Project }) {
  const navigate = useNavigate()
  const all = useAllNotes()
  const { data: bib } = useBibliography()
  const [pane, setPane] = useState<Pane>('nhap')
  const [preview, setPreview] = useState(false)
  const [busy, setBusy] = useState(false)
  const draft = useRef<HTMLTextAreaElement>(null)

  const notes = useMemo<Entry[]>(() => {
    const out: Entry[] = []
    for (const [scope, list] of Object.entries(all))
      for (const n of list) {
        if (!n.tags?.includes(p.tag)) continue
        if (scope === LIBRARY) out.push({ ...n, scope, where: findArticle(n.key)?.title ?? n.key, link: `[[${n.key}]]` })
        else {
          const book = READER_BOOKS.find((b) => b.id === scope)
          const it = book?.items.find((i) => i.key === n.key)
          const where = `${book?.title ?? scope}${it ? `, ${it.title}` : ''}`
          out.push({ ...n, scope, where, link: it?.kind === 'chapter' ? `[[${n.key}|${where}]]` : where })
        }
      }
    return out.sort((a, b) => a.at - b.at)
  }, [all, p.tag])

  /** Puts text at the cursor of the draft (or at its end), and shows the draft; `back` leaves the caret that many characters before its end. */
  const insert = (text: string, back = 0) => {
    const el = draft.current
    const at = el ? el.selectionStart : p.draft.length
    const next = p.draft.slice(0, at) + text + p.draft.slice(at)
    updateProject(p.id, { draft: next })
    setPane('nhap')
    setPreview(false)
    requestAnimationFrame(() => {
      draft.current?.focus()
      draft.current?.setSelectionRange(at + text.length - back, at + text.length - back)
    })
  }
  const cited = useMemo(() => [...p.draft.matchAll(/\[\^([a-z0-9-]+)/g)].length, [p.draft])
  const exportAs = async (kind: 'md' | 'doc') => {
    setBusy(true)
    try {
      const name = p.tag || 'de-tai'
      if (kind === 'md') download(`${name}.md`, await toMarkdown(p), 'text/markdown')
      else download(`${name}.doc`, await toWord(p), 'application/msword')
    } finally {
      setBusy(false)
    }
  }

  return (
    <article className="space-y-5">
      <header className="space-y-3">
        <input value={p.title} onChange={(e) => updateProject(p.id, { title: e.target.value })} aria-label="Tên đề tài" className="rs-title" />
        <textarea value={p.question} onChange={(e) => updateProject(p.id, { question: e.target.value })} rows={2} placeholder="Câu hỏi nghiên cứu: đề tài muốn trả lời điều gì?" className="rs-question" />
        <p className="text-[12.5px] text-[var(--color-ink-faint)]">
          Thẻ của đề tài: <b className="text-[var(--color-gold)]">{p.tag}</b> — gắn thẻ này cho một đánh dấu (trong bài, trong sách, hoặc ở <Link to="/notes" className="wiki-link">Sổ nghiên cứu</Link>) là nó vào đề tài.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button disabled={busy} onClick={() => exportAs('doc')} className="btn-gold rounded-full px-4 py-2 text-[13px] font-medium">Xuất Word</button>
          <button disabled={busy} onClick={() => exportAs('md')} className="btn-line rounded-full px-4 py-2 text-[13px]">Xuất Markdown</button>
          <span className="text-[12px] text-[var(--color-ink-faint)]">{cited} chú thích · chú thích và thư mục theo Chicago</span>
          <span className="flex-1" />
          <button
            onClick={() => {
              if (confirm(`Xoá đề tài “${p.title}”? Ghi chú vẫn giữ nguyên trong Sổ nghiên cứu.`)) {
                removeProject(p.id)
                navigate('/research')
              }
            }}
            className="flex items-center gap-1.5 text-[12.5px] text-[var(--color-ink-faint)] hover:text-[var(--color-status-cancelled)]"
          >
            <TrashIcon width={14} height={14} /> Xoá đề tài
          </button>
        </div>
      </header>

      <nav className="src-tabs" aria-label="Đề tài">
        {(
          [
            ['nhap', 'Bản nháp'],
            ['ghi-chu', `Ghi chú · ${notes.length}`],
            ['nguon', `Nguồn · ${p.sources.length}`],
          ] as [Pane, string][]
        ).map(([k, label]) => (
          <button key={k} onClick={() => setPane(k)} className={clsx(pane === k && 'is-on')}>{label}</button>
        ))}
      </nav>

      {pane === 'nhap' && (
        <section className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
            <button onClick={() => setPreview(false)} className={clsx('rs-seg', !preview && 'is-on')}>Soạn</button>
            <button onClick={() => setPreview(true)} className={clsx('rs-seg', preview && 'is-on')}>Xem trước</button>
            <span className="text-[var(--color-ink-faint)]">## tiêu đề · **đậm** · *nghiêng* · [[bài thư viện]] · [^mã-nguồn, tr. 12]</span>
          </div>
          {preview ? (
            <div className="rs-preview prose-theory" data-font="serif">{p.draft.trim() ? <Markup source={p.draft} /> : <p className="text-[var(--color-ink-faint)]">Bản nháp còn trống.</p>}</div>
          ) : (
            <textarea ref={draft} value={p.draft} onChange={(e) => updateProject(p.id, { draft: e.target.value })} placeholder="Viết bản nháp ở đây. Chèn ghi chú và trích dẫn từ hai tab bên cạnh." className="rs-draft" />
          )}
        </section>
      )}

      {pane === 'ghi-chu' && (
        <section className="space-y-3">
          {notes.length === 0 && <p className="text-[14px] text-[var(--color-ink-faint)]">Chưa có ghi chú mang thẻ “{p.tag}”.</p>}
          {notes.map((n) => (
            <div key={n.scope + n.id} className="rs-note">
              <blockquote>{n.text}</blockquote>
              {n.note && <p className="mt-1 text-[13.5px] text-[var(--color-ink)]">{n.note}</p>}
              <div className="mt-2 flex flex-wrap items-center gap-3 text-[12px] text-[var(--color-ink-faint)]">
                <span>{n.where}</span>
                <button onClick={() => insert(`\n\n*“${n.text.replace(/\n+/g, ' ').trim()}”* (xem ${n.link})\n\n${n.note ? `${n.note}\n\n` : ''}`)} className="text-[var(--color-gold)] hover:underline">Chèn vào bản nháp</button>
              </div>
            </div>
          ))}
        </section>
      )}

      {pane === 'nguon' && <Sources p={p} bib={bib?.byId} sources={bib?.sources} onCite={(id) => insert(`[^${id}, tr. ]`, 1)} />}
    </article>
  )
}

function Sources({ p, bib, sources, onCite }: { p: Project; bib?: Map<string, Source>; sources?: Source[]; onCite: (id: string) => void }) {
  const [q, setQ] = useState('')
  const found = useMemo(() => {
    const n = normalize(q)
    if (!sources || n.length < 2) return []
    return sources.filter((s) => !p.sources.includes(s.id) && normalize(`${sourceTitle(s)} ${s.authors?.join(' ') ?? ''} ${s.labels.join(' ')}`).includes(n)).slice(0, 8)
  }, [sources, q, p.sources])
  if (!bib) return <p className="text-[14px] text-[var(--color-ink-faint)]">Đang tải thư mục…</p>
  return (
    <section className="space-y-4">
      <div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Thêm nguồn từ thư mục: tên sách, tác giả…" className="hero-search h-10 w-full rounded-full px-4 text-[14px] outline-none" />
        {found.length > 0 && (
          <ul className="mt-2 src-list">
            {found.map((s) => (
              <li key={s.id}>
                <button onClick={() => (updateProject(p.id, { sources: [...p.sources, s.id] }), setQ(''))} className="src-row w-full text-left">
                  <span className="min-w-0 flex-1"><span className="src-title">{sourceTitle(s)}</span>{s.authors && <span className="src-sub">{s.authors.join('; ')} · {s.year}</span>}</span>
                  <span className="src-uses">+ Thêm</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {p.sources.length === 0 && <p className="text-[14px] text-[var(--color-ink-faint)]">Chưa có nguồn. Nguồn được trích trong bản nháp tự vào thư mục khi xuất, kể cả khi không thêm ở đây.</p>}
      <ul className="src-list">
        {p.sources.map((id) => {
          const s = bib.get(id)
          return (
            <li key={id} className="src-row">
              <span className="min-w-0 flex-1">
                <Link to={`/sources/${id}`} className="src-title hover:text-[var(--color-gold)]">{s ? sourceTitle(s) : id}</Link>
                <span className="src-sub">mã trích dẫn: {id}</span>
              </span>
              <span className="flex shrink-0 items-center gap-3 text-[12px]">
                <button onClick={() => onCite(id)} className="text-[var(--color-gold)] hover:underline">Trích</button>
                <button onClick={() => updateProject(p.id, { sources: p.sources.filter((x) => x !== id) })} className="text-[var(--color-ink-faint)] hover:text-[var(--color-status-cancelled)]">Bỏ</button>
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
