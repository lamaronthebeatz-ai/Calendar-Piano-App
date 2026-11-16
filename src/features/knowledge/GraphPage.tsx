import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { ScrollArea } from '../../components/ScrollArea'
import { useBack } from '../../hooks/useBack'
import { findArticle, searchArticles } from '../theory/wiki'
import { loadText } from '../theory/body'
import { resolveArticle } from '../brain/graph'
import { keyVi, workYear } from '../explore/data'
import { normalize } from '../theory/wiki'
import { graphHref, hrefOf, isId, KIND_LABEL, kindOf, parseId, type EntityId } from './ids'
import { around, grouped, PROVENANCE, type Edge, type Seen } from './relations'
import { articleEdges, GENRE_ARTICLE } from './graph'
import { METHOD_BY_ID } from './methods'
import { useKnowledgeGraph, type Graph } from './useGraph'
import { ClaimChain } from './ClaimChain'
import { VERIFICATION } from './model'
import '../sources/sources.css'
import './knowledge.css'

const START: [EntityId, string][] = [
  ['a:johann-sebastian-bach', 'Một nhà soạn nhạc'],
  ['w:Q991701', 'Một tác phẩm'],
  ['a:cau-ket', 'Một khái niệm'],
  ['a:thoi-ky-baroque', 'Một thời kỳ'],
  ['m:giong', 'Một phương pháp phân tích'],
]

/** /graph?id=<entity id>: one object, everything it is related to (both directions), and where each relation comes from. */
export function GraphPage() {
  const back = useBack('/sources')
  const [params, setParams] = useSearchParams()
  const raw = params.get('id') ?? ''
  const id = isId(raw) ? raw : null
  const g = useKnowledgeGraph()
  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          {id && <button onClick={back} className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Quay lại</button>}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">Đồ thị tri thức</h1>
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-8">
        <Finder g={g} onPick={(x) => setParams({ id: x })} />
        {g.error && <p className="text-[14px] text-[var(--color-ink-muted)]">Không tải được dữ liệu người – tác phẩm (cần mạng ở lần mở đầu tiên). Dữ liệu nghiên cứu của bạn vẫn hiện bên dưới.</p>}
        {!id ? <Intro /> : <Focus key={id} id={id} g={g} />}
        <Legend />
      </div>
    </ScrollArea>
  )
}

function Intro() {
  return (
    <header className="animate-float-up space-y-3">
      <p className="brand-eyebrow">Mạng tri thức âm nhạc học</p>
      <h2 className="font-display text-[26px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[32px]">Mọi thứ nối với nhau, theo cả hai chiều</h2>
      <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
        Người, tác phẩm, thể loại, thời kỳ, trường phái, khái niệm, nhạc cụ, phương pháp phân tích, tài liệu, đề tài và luận điểm có chung một mã. Chọn một đối tượng để xem nó liên quan tới những gì — mỗi quan hệ ghi rõ lấy từ đâu: thư viện, Wikidata, máy tính suy ra, hay ghi chép nghiên cứu của bạn.
      </p>
      <ul className="kg-start">
        {START.map(([id, t]) => (
          <li key={id}>
            <Link to={graphHref(id)} className="kg-chip">{t} →</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

function Finder({ g, onPick }: { g: Graph; onPick: (id: EntityId) => void }) {
  const [q, setQ] = useState('')
  const hits = useMemo(() => {
    const n = normalize(q.trim())
    if (n.length < 2) return []
    const out: [EntityId, string, string][] = []
    for (const a of searchArticles(q).slice(0, 8)) out.push([`a:${a.slug}`, a.title, KIND_LABEL[kindOf(`a:${a.slug}`, findArticle)]])
    for (const w of g.base?.works ?? []) {
      if (out.length > 16) break
      if (normalize(`${w.vi ?? ''} ${w.en} ${w.cat?.join(' ') ?? ''}`).includes(n)) out.push([`w:${w.id}`, w.vi ?? w.en, `Tác phẩm · ${g.label(`a:${w.by}`)}`])
    }
    for (const s of g.k.sources) if (normalize(`${s.title} ${s.authors.join(' ')}`).includes(n)) out.push([`ms:${s.id}`, s.title, 'Tài liệu của bạn'])
    for (const c of g.k.claims) if (normalize(c.text).includes(n)) out.push([`c:${c.id}`, c.text, 'Luận điểm'])
    if (isId(q.trim())) out.unshift([q.trim() as EntityId, q.trim(), 'Mã'])
    return out.slice(0, 20)
  }, [q, g])
  return (
    <div className="kg-find">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm người, tác phẩm, khái niệm, tài liệu, luận điểm…" className="hero-search h-11 w-full rounded-full px-4 text-[14px] outline-none" aria-label="Tìm trong đồ thị" />
      {hits.length > 0 && (
        <ul className="kg-hits">
          {hits.map(([id, title, kind]) => (
            <li key={id}>
              <button
                onClick={() => {
                  setQ('')
                  onPick(id)
                }}
              >
                <span className="src-kind">{kind}</span>
                <span className="src-title">{title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Focus({ id, g }: { id: EntityId; g: Graph }) {
  const p = parseId(id)!
  const [text, setText] = useState<Edge[]>([])
  useEffect(() => {
    if (p.prefix !== 'a' || !findArticle(p.local)) return
    let live = true
    loadText(p.local).then(
      (t) => live && setText(articleEdges(findArticle(p.local)!.slug, t, resolveArticle)),
      () => {},
    )
    return () => {
      live = false
    }
  }, [p.prefix, p.local])
  const summary = p.prefix === 'a' ? findArticle(p.local)?.summary : undefined

  const seen = around(id, [...g.edgesOf(id), ...text])
  const groups = grouped(seen)
  const kind = kindOf(id, findArticle)
  const href = hrefOf(id)
  const page = p.prefix === 'a' && !findArticle(p.local) && g.base?.person.has(p.local) ? `/explore?p=${p.local}` : href
  const known = g.exists(id)
  return (
    <section className="space-y-5">
      <header className="kg-focus">
        <p className="brand-eyebrow">{KIND_LABEL[kind]}</p>
        <h2 className="font-display text-[24px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[28px]">{g.label(id)}</h2>
        {!known && g.base && <p className="kg-warn">Không tìm thấy đối tượng có mã {id}.</p>}
        {summary && <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">{summary}</p>}
        <Details id={id} g={g} />
        <div className="mt-3 flex flex-wrap gap-2">
          {page && <Link to={page} className="kg-chip is-gold">Mở trang →</Link>}
          {p.prefix === 'w' && <a href={`https://www.wikidata.org/wiki/${p.local}`} target="_blank" rel="noreferrer" className="kg-chip">Wikidata ↗</a>}
          <code className="kg-id">{id}</code>
        </div>
      </header>
      {p.prefix === 'c' && <ClaimChain claimId={p.local} />}
      {groups.length === 0 ? (
        <p className="text-[14px] text-[var(--color-ink-faint)]">{g.base ? 'Chưa có quan hệ nào được ghi cho đối tượng này.' : 'Đang tải đồ thị…'}</p>
      ) : (
        groups.map((gr) => <Group key={`${gr.rel}|${gr.dir}`} label={gr.label} items={gr.items} g={g} />)
      )}
    </section>
  )
}

function Group({ label, items, g }: { label: string; items: Seen[]; g: Graph }) {
  const [all, setAll] = useState(false)
  const shown = all ? items : items.slice(0, 24)
  return (
    <section className="kg-group">
      <h3 className="kg-group-title">
        {label} <span>{items.length}</span>
      </h3>
      <ul className="kg-items">
        {shown.map((s) => (
          <li key={`${s.other}|${s.rel}`}>
            <Link to={graphHref(s.other)} className="kg-item">
              <span className="kg-item-kind">{KIND_LABEL[kindOf(s.other, findArticle)]}</span>
              <span className="kg-item-title">{g.label(s.other)}</span>
              {(s.page || s.note) && <span className="kg-item-note">{[s.note, s.page && `tr. ${s.page}`].filter(Boolean).join(' · ')}</span>}
              <span className={clsx('kg-prov', `is-${s.prov}`)} title={PROVENANCE[s.prov].hint}>{PROVENANCE[s.prov].label}</span>
            </Link>
          </li>
        ))}
      </ul>
      {items.length > shown.length && <button className="kg-more" onClick={() => setAll(true)}>Xem cả {items.length}</button>}
    </section>
  )
}

/** What the object is, from its own record, before its relations. */
function Details({ id, g }: { id: EntityId; g: Graph }) {
  const { prefix, local } = parseId(id)!
  if (prefix === 'w') {
    const w = g.base?.work.get(local)
    if (!w) return null
    const genre = w.kind && GENRE_ARTICLE[w.kind]
    return (
      <dl className="kg-dl">
        <dt>Tác giả</dt>
        <dd><Link to={graphHref(`a:${w.by}`)} className="wiki-link">{g.label(`a:${w.by}`)}</Link></dd>
        {w.vi && <><dt>Tên gốc</dt><dd>{w.en}</dd></>}
        {workYear(w) && <><dt>Năm</dt><dd>{workYear(w)}</dd></>}
        {w.key && <><dt>Giọng</dt><dd>{keyVi(w.key)}</dd></>}
        {w.cat?.length ? <><dt>Danh mục</dt><dd>{w.cat.join(', ')}</dd></> : null}
        {genre && <><dt>Thể loại – hình thức</dt><dd><Link to={graphHref(`a:${genre}`)} className="wiki-link">{g.label(`a:${genre}`)}</Link></dd></>}
        <dt>Nguồn dữ kiện</dt>
        <dd>Wikidata (chưa đối chiếu từng mục){w.article && <> · bài trong thư viện: <Link to={`/theory/${w.article}`} className="wiki-link">{g.label(`a:${w.article}`)}</Link></>}</dd>
      </dl>
    )
  }
  if (prefix === 'm') {
    const m = METHOD_BY_ID.get(local)
    if (!m) return null
    return (
      <dl className="kg-dl">
        <dt>Cách làm</dt><dd>{m.how}</dd>
        <dt>Căn cứ</dt><dd>{m.basis}</dd>
        {m.measured && <><dt>Độ đúng đã đo</dt><dd>{m.measured}</dd></>}
        <dt>Giới hạn</dt><dd>{m.limits}</dd>
        <dt>Loại dữ liệu</dt><dd>Kết quả tính toán — không phải phân tích đã kiểm của chuyên gia.</dd>
      </dl>
    )
  }
  if (prefix === 'ms') {
    const s = g.k.sources.find((x) => x.id === local)
    if (!s) return null
    return (
      <dl className="kg-dl">
        <dt>Tác giả</dt><dd>{s.authors.join('; ') || '—'}</dd>
        <dt>Loại</dt><dd>{s.role === 'primary' ? 'Nguồn sơ cấp' : 'Nguồn thứ cấp'}</dd>
        <dt>Kiểm chứng</dt><dd>{VERIFICATION[s.verification].label}{s.checkedWith && ` — ${s.checkedWith}`}</dd>
      </dl>
    )
  }
  return null
}

function Legend() {
  return (
    <aside className="kg-legend" aria-label="Nguồn gốc quan hệ">
      {Object.entries(PROVENANCE).map(([k, v]) => (
        <p key={k}>
          <span className={clsx('kg-prov', `is-${k}`)}>{v.label}</span> {v.hint}
        </p>
      ))}
    </aside>
  )
}
