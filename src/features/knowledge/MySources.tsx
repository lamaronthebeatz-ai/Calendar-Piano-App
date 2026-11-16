import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { readIds } from './readIds'
import type { Bibliography } from '../sources/data'
import { STYLES, type Style } from '../sources/cite'
import { graphHref, makeId, type EntityId } from './ids'
import { doiOf, isbnOk, SCHEMA_VERSION, SOURCE_TYPES, VERIFICATION, type Excerpt, type MySource, type SourceType, type Verification } from './model'
import { citeMine } from './cite'
import { knowledgeLocked, newId, put, remove, useKnowledge } from './store'
import { useKnowledgeGraph } from './useGraph'
import './knowledge.css'

type Draft = Omit<MySource, 'id' | 'v' | 'created' | 'updated' | 'authors' | 'about'> & { authors: string; about: string }
const blank: Draft = { type: 'book', authors: '', title: '', role: 'secondary', verification: 'unverified', about: '' }
const toDraft = (s: MySource): Draft => ({ ...s, authors: s.authors.join('\n'), about: s.about.join(', ') })

/** /sources/cua-toi: the sources Lamar enters, with their checks, excerpts by page and citations. */
export function MySources({ bib }: { bib: Bibliography }) {
  const k = useKnowledge()
  const [params, setParams] = useSearchParams()
  const open = params.get('ms')
  const [editing, setEditing] = useState<string | 'new' | null>(null)
  const locked = knowledgeLocked()
  const list = [...k.sources].sort((a, b) => b.updated - a.updated)
  return (
    <section className="space-y-4">
      <p className="max-w-3xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
        Tài liệu bạn tự ghi: sách, bài báo, luận văn, bản nhạc, tư liệu lưu trữ. App không tự điền thông tin thư mục — ô nào bạn chưa nhập thì để trống, và mỗi tài liệu ghi rõ đã đối chiếu tới đâu. Lưu trên máy này (IndexedDB, mã hoá khi app có mã khoá), nằm trong bản sao lưu ở Cài đặt.
      </p>
      {locked && <p className="kg-warn">Kho đang khoá: mở khoá app để xem và sửa tài liệu của bạn.</p>}
      {!locked && editing !== 'new' && (
        <button className="btn-gold rounded-full px-5 py-2 text-[13.5px] font-medium" onClick={() => setEditing('new')}>
          + Thêm tài liệu
        </button>
      )}
      {editing === 'new' && <SourceForm bib={bib} onDone={(id) => (setEditing(null), id && setParams({ ms: id }))} />}
      {list.length === 0 && !locked ? (
        <p className="text-[14px] text-[var(--color-ink-faint)]">Chưa có tài liệu nào.</p>
      ) : (
        <ul className="src-list">
          {list.map((s) =>
            editing === s.id ? (
              <li key={s.id}>
                <SourceForm bib={bib} source={s} onDone={() => setEditing(null)} />
              </li>
            ) : (
              <li key={s.id}>
                <SourceCard s={s} open={open === s.id} onToggle={() => setParams(open === s.id ? {} : { ms: s.id })} onEdit={() => setEditing(s.id)} excerpts={k.excerpts.filter((x) => x.source === `ms:${s.id}`)} />
              </li>
            ),
          )}
        </ul>
      )}
    </section>
  )
}

function SourceCard({ s, open, onToggle, onEdit, excerpts }: { s: MySource; open: boolean; onToggle: () => void; onEdit: () => void; excerpts: Excerpt[] }) {
  const [style, setStyle] = useState<Style>('chicago')
  const g = useKnowledgeGraph()
  const id = makeId('ms', s.id)
  const used = g.k.evidence.filter((e) => e.source === id)
  return (
    <div className={clsx('kg-card', open && 'is-open')} data-testid="my-source">
      <button className="kg-card-head" onClick={onToggle} aria-expanded={open}>
        <span className="src-kind">{SOURCE_TYPES[s.type]}</span>
        <span className="min-w-0 flex-1">
          <span className="src-title">{s.title}</span>
          <span className="src-sub">
            {[s.authors.join('; '), s.year].filter(Boolean).join(' · ') || 'Chưa ghi tác giả, năm'} · {s.role === 'primary' ? 'sơ cấp' : 'thứ cấp'}
          </span>
        </span>
        <span className={clsx('kg-verify', `is-${s.verification}`)}>{VERIFICATION[s.verification].label}</span>
      </button>
      {open && (
        <div className="kg-card-body space-y-3">
          <div>
            <div className="mb-1 flex flex-wrap gap-1">
              {STYLES.map(([k, label]) => (
                <button key={k} className={clsx('kg-chip is-small', style === k && 'is-gold')} onClick={() => setStyle(k)}>{label}</button>
              ))}
            </div>
            <pre className="kg-cite">{citeMine(s, style)}</pre>
          </div>
          <dl className="kg-dl">
            {s.isbn && <><dt>ISBN</dt><dd>{s.isbn}{!isbnOk(s.isbn) && <span className="kg-warn"> · số kiểm không khớp</span>}</dd></>}
            {s.doi && <><dt>DOI</dt><dd>{doiOf(s.doi) ? <a className="wiki-link" href={`https://doi.org/${doiOf(s.doi)}`} target="_blank" rel="noreferrer">{doiOf(s.doi)}</a> : <span className="kg-warn">{s.doi} (sai cú pháp)</span>}</dd></>}
            {s.archive && <><dt>Lưu trữ</dt><dd>{s.archive}</dd></>}
            <dt>Kiểm chứng</dt>
            <dd>{VERIFICATION[s.verification].hint}{s.checkedWith && ` — đối chiếu tại: ${s.checkedWith}`}</dd>
            {s.libRef && <><dt>Trong thư mục thư viện</dt><dd><Link className="wiki-link" to={`/sources/${s.libRef}`}>{s.libRef}</Link></dd></>}
            {s.about.length > 0 && (
              <>
                <dt>Dùng cho</dt>
                <dd className="flex flex-wrap gap-1">{s.about.map((x) => <Link key={x} to={graphHref(x)} className="kg-chip is-small">{g.label(x)}</Link>)}</dd>
              </>
            )}
            {used.length > 0 && <><dt>Bằng chứng dùng tài liệu này</dt><dd>{used.length} — <Link to={graphHref(id)} className="wiki-link">xem trên đồ thị</Link></dd></>}
            {s.note && <><dt>Ghi chú</dt><dd>{s.note}</dd></>}
          </dl>
          <Excerpts source={id} list={excerpts} />
          <div className="flex flex-wrap gap-2">
            <button className="kg-chip" onClick={onEdit}>Sửa</button>
            <Link to={graphHref(id)} className="kg-chip">Đồ thị</Link>
            <button
              className="kg-chip is-danger"
              onClick={() => {
                if (!confirm(used.length ? `Tài liệu đang là nguồn của ${used.length} bằng chứng. Xoá thì các bằng chứng đó sẽ báo "không tìm thấy tài liệu". Vẫn xoá?` : 'Xoá tài liệu này?')) return
                void remove('sources', s.id)
                for (const x of excerpts) void remove('excerpts', x.id)
              }}
            >
              Xoá
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Excerpts({ source, list }: { source: EntityId; list: Excerpt[] }) {
  const [page, setPage] = useState('')
  const [quote, setQuote] = useState('')
  const [note, setNote] = useState('')
  const sorted = [...list].sort((a, b) => (parseInt(a.page, 10) || 0) - (parseInt(b.page, 10) || 0))
  return (
    <div>
      <p className="kg-step">Trích đoạn và ghi chú theo trang</p>
      {sorted.length > 0 && (
        <ul className="kg-excerpts">
          {sorted.map((x) => (
            <li key={x.id}>
              <b>tr. {x.page}</b> {x.quote && <q className="kg-quote">{x.quote}</q>} {x.note && <span className="kg-sub">{x.note}</span>}
              <button className="kg-del" onClick={() => remove('excerpts', x.id)} aria-label="Xoá trích đoạn">×</button>
            </li>
          ))}
        </ul>
      )}
      <form
        className="kg-form-row"
        onSubmit={(e) => {
          e.preventDefault()
          if (!page.trim() || (!quote.trim() && !note.trim())) return
          void put('excerpts', { id: newId('x'), v: SCHEMA_VERSION, source, page: page.trim(), quote: quote.trim() || undefined, note: note.trim() || undefined, created: Date.now() })
          setPage('')
          setQuote('')
          setNote('')
        }}
      >
        <input value={page} onChange={(e) => setPage(e.target.value)} placeholder="Trang" className="kg-input w-20" aria-label="Trang" />
        <input value={quote} onChange={(e) => setQuote(e.target.value)} placeholder="Câu trích ngắn (nguyên văn)" className="kg-input min-w-0 flex-1" aria-label="Câu trích" />
        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ghi chú của bạn" className="kg-input min-w-0 flex-1" aria-label="Ghi chú trích đoạn" />
        <button type="submit" className="kg-chip" disabled={!page.trim() || (!quote.trim() && !note.trim())}>Thêm</button>
      </form>
    </div>
  )
}

function SourceForm({ bib, source, onDone }: { bib: Bibliography; source?: MySource; onDone: (id?: string) => void }) {
  const [d, setD] = useState<Draft>(source ? toDraft(source) : blank)
  const set = (patch: Partial<Draft>) => setD((x) => ({ ...x, ...patch }))
  const about = readIds(d.about)
  const problems = [
    !d.title.trim() && 'Cần tên tài liệu.',
    d.isbn?.trim() && !isbnOk(d.isbn) && 'ISBN: số kiểm không khớp (gõ nhầm?).',
    d.doi?.trim() && !doiOf(d.doi) && 'DOI sai cú pháp (dạng 10.xxxx/...).',
    d.verification !== 'unverified' && d.verification !== 'disputed' && !d.checkedWith?.trim() && 'Đánh dấu đã đối chiếu thì ghi đối chiếu ở đâu (danh mục, bản quét, thư viện).',
    d.libRef?.trim() && !bib.byId.has(d.libRef.trim()) && `Thư mục thư viện không có mã “${d.libRef}”.`,
    about.unknown.length > 0 && `Không nhận ra: ${about.unknown.join(', ')} (dùng mã a:…, w:… hoặc tên bài).`,
  ].filter(Boolean) as string[]
  const save = () => {
    if (problems.length) return
    const now = Date.now()
    const opt = (x?: string) => x?.trim() || undefined
    const rec: MySource = {
      id: source?.id ?? newId('s'),
      v: SCHEMA_VERSION,
      type: d.type,
      role: d.role,
      verification: d.verification,
      title: d.title.trim(),
      authors: d.authors.split('\n').map((x) => x.trim()).filter(Boolean),
      year: opt(d.year),
      publisher: opt(d.publisher),
      place: opt(d.place),
      edition: opt(d.edition),
      container: opt(d.container),
      volume: opt(d.volume),
      pages: opt(d.pages),
      isbn: opt(d.isbn),
      doi: opt(d.doi),
      url: opt(d.url),
      archive: opt(d.archive),
      lang: opt(d.lang),
      checkedWith: opt(d.checkedWith),
      libRef: opt(d.libRef),
      note: opt(d.note),
      about: about.ids,
      created: source?.created ?? now,
      updated: now,
    }
    void put('sources', rec)
    onDone(rec.id)
  }
  const field = (key: keyof Draft, label: string, ph = '') => (
    <label className="kg-field">
      <span>{label}</span>
      <input value={(d[key] as string | undefined) ?? ''} onChange={(e) => set({ [key]: e.target.value })} placeholder={ph} className="kg-input" />
    </label>
  )
  return (
    <form className="kg-form" onSubmit={(e) => (e.preventDefault(), save())} aria-label="Tài liệu">
      <div className="kg-grid">
        <label className="kg-field">
          <span>Loại</span>
          <select value={d.type} onChange={(e) => set({ type: e.target.value as SourceType })} className="kg-input">
            {Object.entries(SOURCE_TYPES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label className="kg-field">
          <span>Sơ cấp / thứ cấp</span>
          <select value={d.role} onChange={(e) => set({ role: e.target.value as MySource['role'] })} className="kg-input">
            <option value="primary">Sơ cấp (tư liệu gốc, bản nhạc, thư từ…)</option>
            <option value="secondary">Thứ cấp (nghiên cứu về nó)</option>
          </select>
        </label>
      </div>
      {field('title', 'Tên tài liệu *')}
      <label className="kg-field">
        <span>Tác giả (mỗi dòng một người, “Họ, Tên”)</span>
        <textarea value={d.authors} onChange={(e) => set({ authors: e.target.value })} rows={2} className="kg-input" />
      </label>
      <div className="kg-grid">
        {field('year', 'Năm')}
        {field('edition', 'Lần xuất bản')}
        {field('publisher', 'Nhà xuất bản')}
        {field('place', 'Nơi xuất bản')}
        {field('container', 'Tạp chí / sách chứa')}
        {field('volume', 'Tập, số')}
        {field('pages', 'Trang (bài, chương)')}
        {field('lang', 'Ngôn ngữ')}
        {field('isbn', 'ISBN')}
        {field('doi', 'DOI')}
        {field('url', 'Địa chỉ web')}
        {field('archive', 'Nơi lưu trữ, ký hiệu')}
      </div>
      <div className="kg-grid">
        <label className="kg-field">
          <span>Kiểm chứng</span>
          <select value={d.verification} onChange={(e) => set({ verification: e.target.value as Verification })} className="kg-input">
            {Object.entries(VERIFICATION).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </label>
        {field('checkedWith', 'Đối chiếu ở đâu', 'vd. danh mục Thư viện Quốc gia, bản quét IMSLP')}
        {field('libRef', 'Mã trong thư mục thư viện (nếu có)', 'vd. grove-1904')}
      </div>
      {field('about', 'Dùng cho (khái niệm, tác phẩm, người, đề tài)', 'vd. hình thức sonata, w:Q991701, p:…')}
      {field('note', 'Ghi chú')}
      {problems.length > 0 && (
        <ul className="kg-issues">
          {problems.map((p) => <li key={p} className="is-warn">{p}</li>)}
        </ul>
      )}
      <div className="flex gap-2">
        <button type="submit" className="btn-gold rounded-full px-5 py-2 text-[13.5px] font-medium disabled:opacity-50" disabled={problems.length > 0}>Lưu</button>
        <button type="button" className="kg-chip" onClick={() => onDone()}>Huỷ</button>
      </div>
    </form>
  )
}
