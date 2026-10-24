import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { CopyIcon, DownloadIcon, EditIcon, NoteIcon, SearchIcon, TrashIcon } from '../../components/icons'
import { ScrollArea } from '../../components/ScrollArea'
import { findArticle, normalize } from '../theory/wiki'
import { FOCUS_KEY } from '../curriculum/reader/Annotator'
import { READER_BOOKS } from '../curriculum/reader/model'
import { savePosition } from '../curriculum/reader/store'
import { COLOR_LABEL, COLORS, LIBRARY, removeNote, toMarkdown, updateNote, useAllNotes, type Note, type NoteColor } from '../curriculum/reader/notes'

interface Entry extends Note {
  scope: string
  source: string
  where: string
  open: () => void
  cite: string
}

/** Every highlight and note across the books and the library, with topic tags, filters and export. */
export function NotebookPage() {
  const navigate = useNavigate()
  const all = useAllNotes()
  const [q, setQ] = useState('')
  const [color, setColor] = useState<NoteColor | 'all' | 'noted'>('all')
  const [tag, setTag] = useState<string | null>(null)
  const [source, setSource] = useState('all')
  const [editing, setEditing] = useState<string | null>(null)

  const entries = useMemo<Entry[]>(() => {
    const out: Entry[] = []
    for (const [scope, list] of Object.entries(all)) {
      const book = READER_BOOKS.find((b) => b.id === scope)
      for (const n of list) {
        if (scope === LIBRARY) {
          const title = findArticle(n.key)?.title ?? n.key
          out.push({
            ...n,
            scope,
            source: 'Thư viện Lý thuyết',
            where: title,
            cite: `“${n.text.trim()}”\n— ${title}, thư viện Trung tâm lý thuyết âm nhạc học by Lamar`,
            open: () => {
              sessionStorage.setItem(FOCUS_KEY, n.id)
              navigate(`/theory/${n.key}`)
            },
          })
        } else if (book) {
          const it = book.items.find((i) => i.key === n.key)
          const where = it ? (it.kind === 'chapter' ? `Bài ${it.n}. ${it.title}` : it.title) : n.key
          const name = `${book.title}${book.volume ? ` — ${book.volume}` : ''}`
          out.push({
            ...n,
            scope,
            source: name,
            where,
            cite: `“${n.text.trim()}”\n— ${name}, ${where}`,
            open: () => {
              savePosition(book.id, { key: n.key, ratio: n.ratio })
              navigate(`/curriculum/${book.id}/${n.key}`)
            },
          })
        }
      }
    }
    return out.sort((a, b) => b.at - a.at)
  }, [all, navigate])

  const tags = useMemo(() => {
    const m = new Map<string, number>()
    for (const e of entries) for (const t of e.tags ?? []) m.set(t, (m.get(t) ?? 0) + 1)
    return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'vi'))
  }, [entries])
  const sources = useMemo(() => [...new Set(entries.map((e) => e.source))], [entries])

  const nq = normalize(q.trim())
  const shown = entries.filter(
    (e) =>
      (color === 'all' || (color === 'noted' ? !!e.note : e.color === color)) &&
      (!tag || e.tags?.includes(tag)) &&
      (source === 'all' || e.source === source) &&
      (!nq || normalize(`${e.text} ${e.note ?? ''} ${(e.tags ?? []).join(' ')} ${e.where}`).includes(nq)),
  )
  const groups = new Map<string, Entry[]>()
  for (const e of shown) groups.set(e.source, [...(groups.get(e.source) ?? []), e])

  const markdown = () =>
    [...groups.entries()]
      .map(([src, list]) => {
        const titles = new Map(list.map((e) => [e.key, e.where]))
        return toMarkdown(src, list, (k) => titles.get(k) ?? k)
      })
      .join('\n')
  const download = () => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([`# Sổ nghiên cứu\n\n${markdown()}`], { type: 'text/markdown' }))
    a.download = `so-nghien-cuu-${new Date().toISOString().slice(0, 10)}.md`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  }

  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">Sổ nghiên cứu</h1>
          {shown.length > 0 && (
            <button onClick={download} className="flex h-9 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3.5 text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
              <DownloadIcon width={15} height={15} /> Markdown
            </button>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-8">
        <header className="animate-float-up">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Ghi chú và đánh dấu</p>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
            Mọi đoạn bạn đã tô và ghi chú trong tủ sách và thư viện, gom về một nơi. Gắn thẻ đề tài để nhóm theo hướng nghiên cứu, lọc, tìm, mở lại đúng chỗ trong nguồn, và xuất ra Markdown.
          </p>
          <div className="mt-4 flex flex-wrap gap-5 text-[13px] text-[var(--color-ink-muted)]">
            <span><b className="font-display text-[22px] text-[var(--color-ink)]">{entries.length}</b> đánh dấu</span>
            <span><b className="font-display text-[22px] text-[var(--color-ink)]">{entries.filter((e) => e.note).length}</b> ghi chú</span>
            <span><b className="font-display text-[22px] text-[var(--color-ink)]">{tags.length}</b> thẻ</span>
            <span><b className="font-display text-[22px] text-[var(--color-ink)]">{sources.length}</b> nguồn</span>
          </div>
        </header>

        <div className="space-y-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-3.5">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon width={15} height={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm trong đoạn trích, ghi chú, thẻ…" className="rn-input h-10 w-full rounded-xl pl-9 pr-3 text-[13.5px] outline-none" />
            </div>
            <select value={source} onChange={(e) => setSource(e.target.value)} className="rn-input h-10 rounded-xl px-3 text-[13px] outline-none sm:max-w-[260px]">
              <option value="all">Mọi nguồn</option>
              {sources.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button onClick={() => setColor('all')} className={clsx('rn-chip', color === 'all' && 'is-on')}>Tất cả</button>
            <button onClick={() => setColor('noted')} className={clsx('rn-chip', color === 'noted' && 'is-on')}>Có ghi chú</button>
            {COLORS.map((c) => (
              <button key={c} aria-label={COLOR_LABEL[c]} title={COLOR_LABEL[c]} onClick={() => setColor(color === c ? 'all' : c)} className={clsx(`rn-swatch rn-c-${c}`, color === c && 'is-on')} />
            ))}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Thẻ</span>
              {tags.map(([t, n]) => (
                <button key={t} onClick={() => setTag(tag === t ? null : t)} className={clsx('rn-chip', tag === t && 'is-on')}>
                  #{t} <span className="ml-1 opacity-50">{n}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {entries.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[var(--color-border-strong)] px-6 py-14 text-center">
            <NoteIcon width={28} height={28} className="mx-auto text-[var(--color-gold)]" />
            <p className="mt-3 font-display text-[19px] text-[var(--color-ink)]">Sổ còn trống</p>
            <p className="mx-auto mt-1 max-w-md text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">Mở một cuốn sách trong Giáo trình hoặc một bài trong Lý thuyết, bôi chọn đoạn văn rồi chọn màu tô hoặc Ghi chú. Mọi đánh dấu sẽ về đây.</p>
          </div>
        )}
        {entries.length > 0 && shown.length === 0 && <p className="py-10 text-center text-[13.5px] text-[var(--color-ink-muted)]">Không có đánh dấu khớp bộ lọc.</p>}

        {[...groups.entries()].map(([src, list]) => (
          <section key={src} className="space-y-2.5">
            <h2 className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] pb-2 font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)]">
              {src}
              <span className="font-sans text-[12px] font-normal text-[var(--color-ink-faint)]">{list.length}</span>
            </h2>
            {list.map((e) => (
              <article key={e.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">{e.where}</p>
                <button onClick={e.open} className="mt-1.5 block w-full text-left" title="Mở đúng chỗ trong nguồn">
                  <p className={`rn-quote rn-q-${e.color} text-[14px] leading-relaxed`}>{e.text}</p>
                </button>
                {editing === e.id ? (
                  <Editor note={e} onDone={() => setEditing(null)} />
                ) : (
                  <>
                    {e.note && <p className="mt-2 whitespace-pre-wrap pl-[13px] text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">{e.note}</p>}
                    {!!e.tags?.length && (
                      <div className="mt-2 flex flex-wrap gap-1 pl-[13px]">
                        {e.tags.map((t) => (
                          <button key={t} onClick={() => setTag(t)} className="rounded-full bg-[var(--color-gold-soft)] px-2 py-0.5 text-[11.5px] text-[var(--color-gold)]">#{t}</button>
                        ))}
                      </div>
                    )}
                  </>
                )}
                <div className="mt-3 flex items-center gap-1 text-[11.5px] text-[var(--color-ink-faint)]">
                  {new Date(e.at).toLocaleDateString('vi-VN')}
                  <span className="flex-1" />
                  <button onClick={e.open} className="rounded-full px-2.5 py-1 hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]">Mở nguồn</button>
                  <button onClick={() => setEditing(editing === e.id ? null : e.id)} className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]" aria-label="Sửa ghi chú và thẻ" title="Sửa ghi chú và thẻ">
                    <EditIcon width={14} height={14} />
                  </button>
                  <button onClick={() => void navigator.clipboard?.writeText(e.cite + (e.note ? `\n\nGhi chú: ${e.note}` : ''))} className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-ink)]" aria-label="Sao chép kèm nguồn" title="Sao chép kèm nguồn">
                    <CopyIcon width={14} height={14} />
                  </button>
                  <button onClick={() => removeNote(e.scope, e.id)} className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-status-cancelled)]" aria-label="Bỏ tô" title="Bỏ tô">
                    <TrashIcon width={14} height={14} />
                  </button>
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>
    </ScrollArea>
  )
}

function Editor({ note, onDone }: { note: Entry; onDone: () => void }) {
  const [text, setText] = useState(note.note ?? '')
  const [tags, setTags] = useState((note.tags ?? []).join(', '))
  const save = () => {
    const t = [...new Set(tags.split(/[,#]/).map((x) => x.trim()).filter(Boolean))]
    updateNote(note.scope, note.id, { note: text.trim() || undefined, tags: t.length ? t : undefined })
    onDone()
  }
  return (
    <div className="mt-2.5 space-y-2 pl-[13px]">
      <textarea autoFocus value={text} onChange={(e) => setText(e.target.value)} rows={3} placeholder="Ghi chú…" className="rn-input w-full resize-y rounded-xl px-3 py-2 text-[13.5px] leading-relaxed outline-none" />
      <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Thẻ, cách nhau dấu phẩy" className="rn-input h-9 w-full rounded-xl px-3 text-[13px] outline-none" />
      <div className="flex items-center gap-1.5">
        {COLORS.map((c) => (
          <button key={c} aria-label={COLOR_LABEL[c]} onClick={() => updateNote(note.scope, note.id, { color: c })} className={clsx(`rn-swatch rn-c-${c}`, note.color === c && 'is-on')} />
        ))}
        <span className="flex-1" />
        <button onClick={onDone} className="h-8 rounded-full px-3 text-[12.5px] text-[var(--color-ink-muted)]">Huỷ</button>
        <button onClick={save} className="h-8 rounded-full bg-[var(--color-ink)] px-4 text-[12.5px] font-medium text-[var(--color-surface)]">Lưu</button>
      </div>
    </div>
  )
}
