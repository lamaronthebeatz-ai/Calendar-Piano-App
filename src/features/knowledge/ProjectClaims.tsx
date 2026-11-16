import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../research/store'
import { sourceTitle, useBibliography } from '../sources/data'
import { checkClaim, uncitedParagraphs, worst } from './check'
import { graphHref, isId, makeId, type EntityId } from './ids'
import { SCHEMA_VERSION, STANCE, type Claim, type Stance } from './model'
import { knowledgeLocked, newId, now, put, remove, useKnowledge } from './store'
import { ClaimChain } from './ClaimChain'
import { useLibHas } from './useLib'
import { readIds } from './readIds'
import './knowledge.css'

/** The project's claims, each with its evidence chain and checks; and the draft's paragraphs that cite nothing. */
export function ProjectClaims({ p }: { p: Project }) {
  const k = useKnowledge()
  const libHas = useLibHas()
  const [text, setText] = useState('')
  const [about, setAbout] = useState('')
  const claims = k.claims.filter((c) => c.project === p.id).sort((a, b) => a.created - b.created)
  const uncited = uncitedParagraphs(p.draft)
  const locked = knowledgeLocked()
  const ab = readIds(about)
  const add = () => {
    if (!text.trim() || ab.unknown.length) return
    const t = now()
    void put('claims', { id: newId('c'), v: SCHEMA_VERSION, text: text.trim(), project: p.id, about: ab.ids, status: 'open', created: t, updated: t })
    setText('')
    setAbout('')
  }
  const bad = claims.filter((c) => worst(checkClaim(c, k, libHas)) === 'error').length
  return (
    <div className="space-y-5">
      <p className="max-w-3xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
        Mỗi luận điểm là một nhận định của bạn. Nó chỉ đứng được khi có chuỗi: <b>bằng chứng → trích dẫn → tài liệu gốc → trang cụ thể</b>. App kiểm những gì đã ghi (thiếu nguồn, thiếu trang, tài liệu chưa đối chiếu) — không kiểm thay bạn việc nguồn nói đúng hay sai.
      </p>
      {locked && <p className="kg-warn">Kho đang khoá: mở khoá app để xem và sửa luận điểm.</p>}
      {claims.length > 0 && (
        <p className={bad ? 'kg-warn' : 'kg-ok'} data-testid="claims-summary">
          {claims.length} luận điểm · {bad ? `${bad} luận điểm chưa có nguồn đứng được` : 'luận điểm nào cũng có bằng chứng ủng hộ'}
        </p>
      )}
      <form className="kg-form" onSubmit={(e) => (e.preventDefault(), add())} aria-label="Biểu mẫu luận điểm">
        <label className="kg-field">
          <span>Luận điểm mới</span>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} className="kg-input" placeholder="vd. Bản in đầu tiên của tác phẩm có nhịp độ khác bản thảo." />
        </label>
        <label className="kg-field">
          <span>Bàn về (tên bài, mã a:…, w:…; cách nhau dấu phẩy)</span>
          <input value={about} onChange={(e) => setAbout(e.target.value)} className="kg-input" />
        </label>
        {ab.unknown.length > 0 && <p className="kg-warn">Không nhận ra: {ab.unknown.join(', ')}</p>}
        <button type="submit" disabled={!text.trim() || ab.unknown.length > 0 || locked} className="btn-gold self-start rounded-full px-5 py-2 text-[13.5px] font-medium disabled:opacity-50">Thêm luận điểm</button>
      </form>
      {claims.map((c) => <ClaimBlock key={c.id} c={c} p={p} />)}
      <section>
        <h3 className="kg-group-title">Đoạn nháp chưa trích nguồn <span>{uncited.length}</span></h3>
        {uncited.length === 0 ? (
          <p className="kg-ok">Đoạn dài nào trong bản nháp cũng có ít nhất một trích dẫn [^…].</p>
        ) : (
          <ul className="kg-issues">
            {uncited.map((u) => <li key={u.line} className="is-info">Dòng {u.line}: {u.text}</li>)}
          </ul>
        )}
      </section>
    </div>
  )
}

function ClaimBlock({ c, p }: { c: Claim; p: Project }) {
  const k = useKnowledge()
  const { data: bib } = useBibliography()
  const [adding, setAdding] = useState(false)
  return (
    <article className="kg-claim" data-testid="claim">
      <ClaimChain claimId={c.id} editable />
      {c.about.length > 0 && (
        <p className="mt-2 flex flex-wrap gap-1">
          {c.about.map((x) => <Link key={x} to={graphHref(x)} className="kg-chip is-small">{x}</Link>)}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button className="kg-chip" onClick={() => setAdding((x) => !x)}>{adding ? 'Đóng' : '+ Bằng chứng'}</button>
        <select value={c.status} onChange={(e) => put('claims', { ...c, status: e.target.value as Claim['status'], updated: Date.now() })} className="kg-input w-auto" aria-label="Trạng thái luận điểm">
          <option value="open">Đang xét</option>
          <option value="settled">Đã vững (theo bạn)</option>
          <option value="contested">Đang tranh luận</option>
        </select>
        <Link to={graphHref(makeId('c', c.id))} className="kg-chip">Đồ thị luận điểm</Link>
        <button
          className="kg-chip is-danger"
          onClick={() => {
            if (!confirm('Xoá luận điểm này và các bằng chứng của nó?')) return
            for (const e of k.evidence.filter((e) => e.claim === c.id)) void remove('evidence', e.id)
            void remove('claims', c.id)
          }}
        >
          Xoá
        </button>
      </div>
      {adding && (
        <EvidenceForm
          claim={c.id}
          options={[
            ...k.sources.map((s): [EntityId, string] => [makeId('ms', s.id), `Của bạn — ${s.title}`]),
            ...p.sources.map((id): [EntityId, string] => [makeId('s', id), `Thư viện — ${bib?.byId.get(id) ? sourceTitle(bib.byId.get(id)!) : id}`]),
          ]}
          onDone={() => setAdding(false)}
        />
      )}
    </article>
  )
}

function EvidenceForm({ claim, options, onDone }: { claim: string; options: [EntityId, string][]; onDone: () => void }) {
  const libHas = useLibHas()
  const [source, setSource] = useState<string>(options[0]?.[0] ?? '')
  const [other, setOther] = useState('')
  const [stance, setStance] = useState<Stance>('supports')
  const [page, setPage] = useState('')
  const [quote, setQuote] = useState('')
  const [note, setNote] = useState('')
  const [checked, setChecked] = useState(false)
  const typed = other.trim()
  // a library source can be named by its bare id, as in [^id] citations
  const chosen = typed ? (isId(typed) ? typed : libHas(typed) ? `s:${typed}` : '') : source
  const problem = !chosen ? (typed ? `Không có tài liệu “${typed}” trong thư mục.` : 'Chọn tài liệu.') : null
  return (
    <form
      className="kg-form mt-3"
      aria-label="Bằng chứng"
      onSubmit={(e) => {
        e.preventDefault()
        if (problem) return
        void put('evidence', { id: newId('e'), v: SCHEMA_VERSION, claim, stance, source: chosen as EntityId, page: page.trim() || undefined, quote: quote.trim() || undefined, note: note.trim() || undefined, checked, created: Date.now() })
        onDone()
      }}
    >
      <div className="kg-grid">
        <label className="kg-field">
          <span>Tài liệu</span>
          <select value={source} onChange={(e) => setSource(e.target.value)} className="kg-input">
            {options.length === 0 && <option value="">— chưa có: thêm ở Thư mục học › Nguồn của tôi —</option>}
            {options.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
        </label>
        <label className="kg-field">
          <span>Hoặc mã tài liệu thư viện</span>
          <input value={other} onChange={(e) => setOther(e.target.value)} placeholder="vd. grove-1904" className="kg-input" />
        </label>
        <label className="kg-field">
          <span>Vai trò</span>
          <select value={stance} onChange={(e) => setStance(e.target.value as Stance)} className="kg-input">
            {Object.entries(STANCE).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label className="kg-field">
          <span>Trang</span>
          <input value={page} onChange={(e) => setPage(e.target.value)} className="kg-input" placeholder="vd. 112–113" />
        </label>
      </div>
      <label className="kg-field">
        <span>Câu trích ngắn (nguyên văn)</span>
        <input value={quote} onChange={(e) => setQuote(e.target.value)} className="kg-input" />
      </label>
      <label className="kg-field">
        <span>Ghi chú</span>
        <input value={note} onChange={(e) => setNote(e.target.value)} className="kg-input" />
      </label>
      <label className="kg-check">
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} /> Đã đối chiếu trang và câu trích với bản gốc
      </label>
      {problem && <p className="kg-warn">{problem}</p>}
      <button type="submit" disabled={!!problem} className="btn-gold self-start rounded-full px-5 py-2 text-[13.5px] font-medium disabled:opacity-50">Lưu bằng chứng</button>
    </form>
  )
}
