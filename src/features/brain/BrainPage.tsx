import { useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { ScrollArea } from '../../components/ScrollArea'
import { TrashIcon } from '../../components/icons'
import { Markup } from '../theory/Markup'
import { normalize, searchArticles } from '../theory/wiki'
import { useProjects } from '../research/store'
import { createBrainNote, removeBrainNote, titleOf, updateBrainNote, useBrainNotes, type BrainNote } from './store'
import { neighbourhood, openLinkAt, type NodeKey } from './links'
import { nodeInfo, useBrainGraph } from './graph'
import { LocalGraph } from './LocalGraph'
import '../sources/sources.css'
import '../research/research.css'
import './brain.css'

/** The second brain: /brain (every note, the whole web), /brain/:id (one note: write, links in and out, its neighbourhood). */
export function BrainPage() {
  const { id } = useParams()
  const notes = useBrainNotes()
  const note = id ? notes.find((n) => n.id === id) : undefined
  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          {id && <Link to="/brain" className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Sổ tay</Link>}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">{id ? '' : 'Sổ tay tri thức'}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-8">
        {!id && <NoteList notes={notes} />}
        {id && !note && <p className="text-[14px] text-[var(--color-ink-muted)]">Không có ghi chú này trên máy. <Link to="/brain" className="wiki-link">Về sổ tay</Link></p>}
        {note && <NoteView key={note.id} n={note} />}
      </div>
    </ScrollArea>
  )
}

function NoteList({ notes }: { notes: BrainNote[] }) {
  const navigate = useNavigate()
  const graph = useBrainGraph()
  const [q, setQ] = useState('')
  const shown = useMemo(() => {
    const k = normalize(q)
    return k ? notes.filter((n) => normalize(`${n.title} ${n.body}`).includes(k)) : notes
  }, [notes, q])
  const nodes = new Set(graph.edges.flatMap((e) => [e.from, e.to])).size
  return (
    <>
      <header className="animate-float-up">
        <p className="brand-eyebrow">Bộ não thứ hai</p>
        <h2 className="mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">Mọi ý nghĩ, nối vào nhau</h2>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          Ghi chú tự do của bạn. Gõ <code>[[</code> để nối tới bất kỳ bài, người, ghi chú hay đề tài nào; <code>[^mã-nguồn, tr. n]</code> để dẫn nguồn. Mỗi liên kết chạy hai chiều: bài được nhắc sẽ hiện ghi chú của bạn ở cuối trang, và đồ thị cho thấy các ý tụ lại quanh đâu. Ghi chú được mã hoá trên máy và nằm trong bản sao lưu.
        </p>
        <p className="mt-2 text-[12.5px] text-[var(--color-ink-faint)]">{notes.length} ghi chú · {graph.edges.length} liên kết · {nodes} nút trong mạng</p>
      </header>
      <div className="flex gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm trong ghi chú" aria-label="Tìm trong ghi chú" className="hero-search h-11 min-w-0 flex-1 rounded-full px-4 text-[14px] outline-none" />
        <button onClick={() => navigate(`/brain/${createBrainNote().id}`)} className="btn-gold shrink-0 rounded-full px-5 text-[13.5px] font-medium">Ghi chú mới</button>
      </div>
      {shown.length === 0 ? (
        <p className="text-[14px] text-[var(--color-ink-faint)]">{notes.length ? 'Không ghi chú nào khớp.' : 'Chưa có ghi chú nào. Bắt đầu bằng một ý, rồi nối nó vào thư viện.'}</p>
      ) : (
        <ul className="src-list">
          {shown.map((n) => {
            const k: NodeKey = `n:${n.id}`
            return (
              <li key={n.id}>
                <Link to={`/brain/${n.id}`} className="src-row">
                  <span className="min-w-0 flex-1">
                    <span className="src-title">{titleOf(n)}</span>
                    <span className="src-sub">{n.body.replace(/\[\[(?:[np]:)?([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, a, b) => b ?? a).replace(/\[\^[^\]]*\]/g, '').replace(/[#*]/g, '').slice(0, 140) || 'Trống'}</span>
                  </span>
                  <span className="src-uses">{graph.out(k).length} → · {graph.into(k).length} ← · {new Date(n.updated).toLocaleDateString('vi-VN')}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

type Suggestion = { label: string; kind: string; insert?: string; title?: string }

function NoteView({ n }: { n: BrainNote }) {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const notes = useBrainNotes()
  const projects = useProjects()
  const graph = useBrainGraph()
  const key: NodeKey = `n:${n.id}`
  const [preview, setPreview] = useState(!!n.body && !params.has('edit'))
  const [caret, setCaret] = useState(0)
  const [pick, setPick] = useState(0)
  const [dismissed, setDismissed] = useState(-1)
  const area = useRef<HTMLTextAreaElement>(null)

  const open = preview ? null : openLinkAt(n.body, caret)
  const oq = open?.query
  const os = open?.start
  const suggestions = useMemo<Suggestion[]>(() => {
    if (oq === undefined || os === dismissed) return []
    const q = normalize(oq)
    const own: Suggestion[] = [
      ...notes.filter((x) => x.id !== n.id && (!q || normalize(titleOf(x)).includes(q))).slice(0, 4).map((x) => ({ label: titleOf(x), kind: 'Ghi chú', insert: `[[n:${x.id}|${titleOf(x)}]]` })),
      ...projects.filter((p) => !q || normalize(p.title).includes(q)).slice(0, 2).map((p) => ({ label: p.title, kind: 'Đề tài', insert: `[[p:${p.id}|${p.title}]]` })),
    ]
    const lib: Suggestion[] = q.length >= 2 ? searchArticles(oq).slice(0, 7).map((a) => ({ label: a.title, kind: a.person ? 'Người' : 'Bài', insert: `[[${a.slug}]]` })) : []
    const fresh: Suggestion[] = oq.trim().length >= 2 ? [{ label: `Tạo ghi chú “${oq.trim()}”`, kind: 'new', title: oq.trim() }] : []
    return [...lib, ...own, ...fresh].slice(0, 10)
  }, [oq, os, dismissed, notes, projects, n.id])

  function choose(s: Suggestion) {
    if (!open) return
    const insert = s.title !== undefined ? `[[n:${createBrainNote(s.title).id}|${s.title}]]` : (s.insert ?? '')
    const end = caret
    const next = n.body.slice(0, open.start) + insert + n.body.slice(end)
    updateBrainNote(n.id, { body: next })
    const at = open.start + insert.length
    setCaret(at)
    setPick(0)
    setTimeout(() => {
      area.current?.focus()
      area.current?.setSelectionRange(at, at)
    }, 0)
  }
  function onKey(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (!suggestions.length) return
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      setPick((p) => (p + (e.key === 'ArrowDown' ? 1 : suggestions.length - 1)) % suggestions.length)
    } else if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault()
      choose(suggestions[Math.min(pick, suggestions.length - 1)])
    } else if (e.key === 'Escape') setDismissed(open?.start ?? -1)
  }

  const into = graph.into(key)
  const outs = graph.out(key)
  const near = useMemo(() => neighbourhood(key, graph.edges, 2), [key, graph.edges])
  const chip = (k: NodeKey) => {
    const info = nodeInfo(k, projects)
    if (!info) return null
    return (
      <Link key={k} to={info.href} className="bn-chip" data-kind={k[0]}>
        <span className="bn-kind">{info.kind}</span>
        {info.label}
      </Link>
    )
  }

  return (
    <article className="space-y-5">
      <header className="space-y-3">
        <input value={n.title} onChange={(e) => updateBrainNote(n.id, { title: e.target.value })} placeholder={titleOf(n)} aria-label="Tên ghi chú" className="rs-title" />
        <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
          <button onClick={() => setPreview(false)} className={clsx('rs-seg', !preview && 'is-on')}>Viết</button>
          <button onClick={() => setPreview(true)} className={clsx('rs-seg', preview && 'is-on')}>Xem</button>
          <span className="text-[var(--color-ink-faint)]">[[ nối ý · ## tiêu đề · **đậm** · [^nguồn, tr. n]</span>
          <span className="flex-1" />
          <button
            onClick={() => {
              if (confirm(`Xoá ghi chú “${titleOf(n)}”? Các liên kết tới nó sẽ thành chữ đỏ.`)) {
                removeBrainNote(n.id)
                navigate('/brain')
              }
            }}
            className="flex items-center gap-1.5 text-[12.5px] text-[var(--color-ink-faint)] hover:text-[var(--color-status-cancelled)]"
          >
            <TrashIcon width={14} height={14} /> Xoá
          </button>
        </div>
      </header>

      {preview ? (
        <div className="rs-preview prose-theory" data-font="serif" onDoubleClick={() => setPreview(false)}>
          {n.body.trim() ? <Markup source={n.body} /> : <p className="text-[var(--color-ink-faint)]">Trống. Bấm “Viết” để bắt đầu.</p>}
        </div>
      ) : (
        <div className="relative">
          <textarea
            ref={area}
            autoFocus
            value={n.body}
            onChange={(e) => {
              updateBrainNote(n.id, { body: e.target.value })
              setCaret(e.target.selectionStart)
              setPick(0)
            }}
            onSelect={(e) => setCaret(e.currentTarget.selectionStart)}
            onKeyDown={onKey}
            placeholder="Viết một ý. Gõ [[ để nối tới bài, người, ghi chú hay đề tài."
            className="rs-draft bn-area"
            aria-label="Nội dung ghi chú"
          />
          {suggestions.length > 0 && (
            <ul className="bn-suggest" role="listbox" aria-label="Gợi ý liên kết">
              {suggestions.map((s, i) => (
                <li key={s.label + i}>
                  <button role="option" aria-selected={i === pick} onMouseDown={(e) => (e.preventDefault(), choose(s))} className={clsx('bn-opt', i === pick && 'is-on')}>
                    <span className="bn-kind">{s.kind === 'new' ? 'Mới' : s.kind}</span>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <section className="bn-links" aria-label="Liên kết của ghi chú">
        <div>
          <h2 className="bn-h">Nhắc tới · {outs.length}</h2>
          <div className="bn-row">{outs.length ? outs.map(chip) : <span className="bn-empty">Chưa nối tới đâu. Gõ [[ trong ghi chú.</span>}</div>
        </div>
        <div>
          <h2 className="bn-h">Được nhắc từ · {into.length}</h2>
          <div className="bn-row">{into.length ? into.map(chip) : <span className="bn-empty">Chưa có ghi chú hay đề tài nào nhắc tới ghi chú này.</span>}</div>
        </div>
      </section>

      {near.size > 1 && (
        <section aria-label="Lân cận">
          <h2 className="bn-h">Lân cận trong mạng</h2>
          <LocalGraph center={key} nodes={near} edges={graph.edges} projects={projects} />
        </section>
      )}
    </article>
  )
}
