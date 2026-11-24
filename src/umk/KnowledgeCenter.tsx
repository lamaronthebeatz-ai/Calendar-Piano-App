import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ScrollArea } from '../components/ScrollArea'
import { useBack } from '../hooks/useBack'
import { graphHref, KIND_LABEL, type EntityId } from '../features/knowledge/ids'
import { RELATIONS } from '../features/knowledge/relations'
import { getConcept, getKnowledge, getRelatedConcepts, getSources, listRulebooks, ruleEntry, searchKnowledge, STANDING, type Hit } from './api'
import { decideProposal, decisionOf, proposeKnowledgeUpdate, recordDecision, setGapStatus, undoDecision, useFeedback } from './feedback'
import { editorialIssues, REVIEW, type Issue, type IssueKind } from './reviews'
import { danglingEdges, inventory, knowledgeGaps, libraryGaps } from './inventory'
import { gapLabel } from './labels'
import { CHECKED_BY_LABEL, PROVENANCE_LABEL, VERIFICATION_LABEL } from './provenance'
import { assembleReasoningContext } from './reasoning'
import { UMK_SCHEMA_VERSION, type KnowledgeGap, type Provenance, type RuleEntry } from './schema'
import { children, coverage, node, REASONING_DOMAINS } from './taxonomy'
import { glossaryLoaded, loadGlossary, term } from './terminology'
import './umk.css'

/**
 * UMK — Music Knowledge Center: what the app knows, how it is organised, where each piece comes from, which of it
 * UMRE reasons with, and what is missing. Every view reads the live UMK (no copy, no sample data).
 */
type Tab = 'overview' | 'browse' | 'rulebooks' | 'gaps'
const TABS: [Tab, string][] = [['overview', 'Tổng quan'], ['browse', 'Cấu trúc & tra cứu'], ['rulebooks', 'Sổ luật'], ['gaps', 'Khoảng trống']]

export function KnowledgeCenter() {
  const [params, setParams] = useSearchParams()
  const id = params.get('id') as EntityId | null
  const tab = (params.get('tab') as Tab) || 'overview'
  const back = useBack('/umk')
  // views computed from the glossary are rebuilt once it has loaded (key below)
  const [loaded, setLoaded] = useState(glossaryLoaded())
  useEffect(() => {
    let live = true
    loadGlossary().then(() => live && setLoaded(true), () => undefined)
    return () => {
      live = false
    }
  }, [])
  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          {id && <button onClick={back} className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Quay lại</button>}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">Trung tâm tri thức (UMK)</h1>
        </div>
      </div>
      <div className="umk-page mx-auto max-w-5xl px-4 py-6 lg:px-8">
        {id ? (
          <Focus key={`${id}|${loaded}`} id={id} />
        ) : (
          <>
            <header className="space-y-2">
              <p className="brand-eyebrow">Unified Music Knowledge</p>
              <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                Tri thức lý thuyết âm nhạc và âm nhạc học của app trong một hệ: phân loại, thuật ngữ, sổ luật, nguồn và quan hệ — đọc thẳng từ thư viện, bảng thuật ngữ, thư mục và sổ luật, không chép sang kho riêng. Bộ máy suy luận UMRE chỉ lấy tri thức qua đây.
              </p>
            </header>
            <div className="umk-tabs" role="tablist">
              {TABS.map(([t, l]) => (
                <button key={t} role="tab" aria-selected={tab === t} onClick={() => setParams({ tab: t })}>{l}</button>
              ))}
            </div>
            {tab === 'overview' && <Overview key={String(loaded)} />}
            {tab === 'browse' && <Browse key={String(loaded)} />}
            {tab === 'rulebooks' && <Rulebooks />}
            {tab === 'gaps' && <Gaps key={String(loaded)} />}
          </>
        )}
      </div>
    </ScrollArea>
  )
}

const href = (id: EntityId) => `/umk?id=${encodeURIComponent(id)}`
const unitLink = (id: EntityId) => <Link className="umk-link" to={href(id)}>{getKnowledge(id)?.title ?? id}</Link>

function Prov({ p }: { p: Provenance }) {
  return (
    <span>
      <span className="umk-tag">{PROVENANCE_LABEL[p.kind]}</span>
      <span className="umk-tag" data-v={p.verification}>{VERIFICATION_LABEL[p.verification]}</span>
      {p.locator && <span className="umk-tag">{p.locator}</span>}
      {p.checkedBy && <span className="umk-tag" data-by={p.checkedBy}>{CHECKED_BY_LABEL[p.checkedBy]}</span>}
    </span>
  )
}

function Overview() {
  const inv = useMemo(() => inventory(), [])
  const cov = useMemo(() => coverage(), [])
  const dangling = useMemo(() => danglingEdges().length, [])
  const contexts = useMemo(() => [assembleReasoningContext({ kind: 'counterpoint' }), assembleReasoningContext({ kind: 'harmonize' }), assembleReasoningContext({ kind: 'harmony-analysis', globalKey: null })], [])
  const stats: [number, string][] = [
    [inv.articles, 'bài thư viện'], [inv.taxonomyNodes, 'nút phân loại'], [inv.glossary, 'thuật ngữ đa ngữ'], [inv.curatedSources, 'nguồn thư mục mô tả đủ'],
    [inv.rulebooks.length, 'sổ luật'], [inv.rulebooks.reduce((n, b) => n + b.umk, 0), 'mục sổ luật'], [inv.methods, 'phương pháp phân tích'], [inv.edges, 'quan hệ UMK'],
  ]
  return (
    <>
      <div className="umk-stats" data-testid="umk-stats">
        {stats.map(([n, l]) => (
          <div key={l} className="umk-stat"><b>{n.toLocaleString('vi-VN')}</b><span>{l}</span></div>
        ))}
      </div>
      <section className="umk-card">
        <h3>Toàn vẹn</h3>
        <ul>
          {inv.rulebooks.map((b) => (
            <li key={b.id}><code>{b.id}</code>: {b.umk}/{b.source} mục có trong UMK · {b.citations} trích dẫn · {b.sources} nguồn</li>
          ))}
          <li>Quan hệ không trỏ tới đâu: {dangling}</li>
          <li>Lược đồ UMK {UMK_SCHEMA_VERSION}</li>
        </ul>
      </section>
      <section className="umk-card">
        <h3>UMRE đang dùng tri thức nào</h3>
        {contexts.map((c) => (
          <div key={c.id} className="umk-rule">
            <b>{c.task === 'counterpoint' ? 'Phức điệu' : c.task === 'harmonize' ? 'Phối hoà âm bốn bè' : 'Phân tích hoà âm'}</b> — {c.tradition}
            <div className="umk-note">
              {c.rulebooks.map((r) => <Link key={r.id} className="umk-link" to={href(`rb:${r.id}@${r.version}` as EntityId)}>{`${r.id}@${r.version}`}</Link>)} {c.rules.length ? `· ${c.rules.length} mục luật ` : ''}· {c.concepts.length} khái niệm · {c.sources.length} nguồn
            </div>
          </div>
        ))}
        <h4>Lĩnh vực suy luận</h4>
        <ul>
          {REASONING_DOMAINS.map((r) => (
            <li key={r.id}>{unitLink(`d:umre.${r.id}` as EntityId)} — mô-đun {r.modules.join(', ')}</li>
          ))}
        </ul>
      </section>
      <section className="umk-card">
        <h3>Độ phủ các ngành</h3>
        <ul>
          {cov.map((c) => (
            <li key={c.field}>
              {c.field}: {c.nodes.length ? c.nodes.map((n, i) => <span key={n}>{i > 0 && ', '}{unitLink(n)}</span>) : c.articles.length ? <>chưa có nhánh riêng; nhắc trong {c.articles.map((a, i) => <span key={a}>{i > 0 && ', '}{unitLink(a)}</span>)}</> : <b>chưa có trong thư viện</b>}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

function Browse() {
  const [q, setQ] = useState('')
  const [domain, setDomain] = useState<EntityId | ''>('')
  const hits = useMemo(() => (q.trim().length >= 2 ? searchKnowledge(q, { ...(domain ? { domain } : {}), limit: 30 }) : []), [q, domain])
  return (
    <>
      <div className="umk-card">
        <input className="umk-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm khái niệm, thuật ngữ (mọi thứ tiếng), luật, lĩnh vực…" aria-label="Tìm trong UMK" />
        {domain && <p className="umk-note">Trong lĩnh vực: {getKnowledge(domain)?.title} <button className="umk-link" onClick={() => setDomain('')}>bỏ lọc</button></p>}
        {hits.length > 0 && <Hits hits={hits} />}
        {q.trim().length >= 2 && !hits.length && <p className="umk-note">Không có kết quả.</p>}
      </div>
      <div className="umk-card umk-tree">
        <h3>Phân loại</h3>
        <p className="umk-note">Ba cách xếp cùng tồn tại: bản đồ âm nhạc học (sơ đồ Adler), mục thư viện cho người học, lĩnh vực suy luận của UMRE. Một bài có thể nằm ở nhiều nơi.</p>
        <Tree parent={null} onFilter={setDomain} />
      </div>
    </>
  )
}

function Tree({ parent, onFilter }: { parent: EntityId | null; onFilter: (d: EntityId) => void }) {
  const kids = children(parent)
  const [open, setOpen] = useState<Set<string>>(new Set())
  if (!kids.length) return null
  return (
    <ul>
      {kids.map((n) => (
        <li key={n.id}>
          <button onClick={() => setOpen((s) => new Set(s.has(n.id) ? [...s].filter((x) => x !== n.id) : [...s, n.id]))} aria-expanded={open.has(n.id)}>
            {children(n.id).length ? (open.has(n.id) ? '▾ ' : '▸ ') : '· '}
            {n.title}
          </button>{' '}
          <span className="umk-note">{n.members.length ? `${n.members.length} mục` : ''}</span>{' '}
          <Link className="umk-link umk-note" to={href(n.id)}>chi tiết</Link>{' '}
          <button className="umk-note" onClick={() => onFilter(n.id)}>lọc tìm</button>
          {open.has(n.id) && <Tree parent={n.id} onFilter={onFilter} />}
        </li>
      ))}
    </ul>
  )
}

function Hits({ hits }: { hits: Hit[] }) {
  return (
    <div className="umk-hits">
      {hits.map((h) => (
        <Link key={h.id} className="umk-hit" to={href(h.id)}>
          <b>{h.title}</b> <span className="umk-tag">{KIND_LABEL[(h.kind === 'source' ? 'source' : h.kind) as keyof typeof KIND_LABEL] ?? h.kind}</span>
          <small>{h.why}{h.summary ? ` — ${h.summary.slice(0, 140)}` : ''}</small>
        </Link>
      ))}
    </div>
  )
}

function RuleLine({ e }: { e: RuleEntry }) {
  return (
    <div className="umk-rule" id={e.local}>
      <Link className="umk-link" to={href(e.id)}><b>{e.name}</b></Link> <span className="umk-tag">{STANDING[e.standing]}</span> <Prov p={e.provenance} />
      <div>{e.statement}</div>
      {e.caveat && <div className="umk-note">Lưu ý: {e.caveat}</div>}
    </div>
  )
}

function Rulebooks() {
  return (
    <>
      {listRulebooks().map((rb) => (
        <section key={rb.id} className="umk-card" data-umk-rulebook={rb.ref.id}>
          <h3>{rb.title}</h3>
          <p><b>Truyền thống:</b> {rb.tradition}</p>
          <p className="umk-note"><code>{rb.ref.id}@{rb.ref.version}</code> · lĩnh vực {rb.domains.map((d, i) => <span key={d}>{i > 0 && ', '}{unitLink(d)}</span>)}</p>
          <h4>Nguồn</h4>
          <ul>
            {rb.sources.map((s) => (
              <li key={s.id}>{s.authors.join(', ')}{s.authors.length ? ', ' : ''}{s.title}{s.year ? ` (${s.year})` : ''} <span className="umk-tag">{s.type}</span><span className="umk-tag" data-v={s.verification}>{s.verification}</span></li>
            ))}
          </ul>
          <h4>Kiểm thử</h4>
          <p className="umk-note">{rb.tests.join(' · ')}</p>
          {(['hard', 'recommendation', 'definition', 'exception', 'permitted', 'ambiguous'] as const).map((st) => {
            const list = rb.entries.filter((e) => e.standing === st)
            return list.length ? (
              <details key={st}>
                <summary>{STANDING[st]} ({list.length})</summary>
                {list.map((e) => <RuleLine key={e.id} e={e} />)}
              </details>
            ) : null
          })}
        </section>
      ))}
    </>
  )
}

function Gaps() {
  const own = useMemo(() => knowledgeGaps(), [])
  const [lib, setLib] = useState<KnowledgeGap[] | null>(null)
  const fb = useFeedback()
  useEffect(() => {
    let live = true
    libraryGaps().then((g) => live && setLib(g), () => live && setLib([]))
    return () => {
      live = false
    }
  }, [])
  const [change, setChange] = useState('')
  const [basis, setBasis] = useState('')
  const [err, setErr] = useState('')
  const group = (gs: KnowledgeGap[]) => {
    const m = new Map<string, KnowledgeGap[]>()
    for (const g of gs) m.set(g.kind, [...(m.get(g.kind) ?? []), g])
    return [...m]
  }
  return (
    <>
      <Issues />
      <section className="umk-card" data-testid="umk-reported">
        <h3>Báo về từ UMRE và người dùng ({fb.gaps.length})</h3>
        <p className="umk-note">Chỉ là danh sách việc: không gì ở đây tự thành tri thức. Sửa thư viện / sổ luật là việc của người biên soạn.</p>
        {!fb.gaps.length && <p className="umk-note">Chưa có báo cáo nào trên máy này.</p>}
        <ul>
          {fb.gaps.slice().reverse().map((g) => (
            <li key={g.id}>
              <b>{gapLabel(g.kind)}</b> ({g.origin}, {new Date(g.at).toLocaleString('vi-VN')}): {g.text} <span className="umk-tag">{g.status}</span>{' '}
              {g.status === 'open' && <button className="umk-link" onClick={() => setGapStatus(g.id, 'acknowledged')}>đã ghi nhận</button>}{' '}
              {g.status !== 'resolved' && <button className="umk-link" onClick={() => setGapStatus(g.id, 'resolved')}>đã xử lý</button>}{' '}
              {g.status !== 'dismissed' && <button className="umk-link" onClick={() => setGapStatus(g.id, 'dismissed')}>bỏ qua</button>}
            </li>
          ))}
        </ul>
      </section>
      <section className="umk-card">
        <h3>Đề xuất bổ sung tri thức</h3>
        <div className="grid gap-2">
          <input className="umk-search" value={change} onChange={(e) => setChange(e.target.value)} placeholder="Đổi / thêm gì (một định nghĩa, một ngoại lệ…)" aria-label="Nội dung đề xuất" />
          <input className="umk-search" value={basis} onChange={(e) => setBasis(e.target.value)} placeholder="Căn cứ (sách, trang)" aria-label="Căn cứ" />
          <button
            className="umk-tabs-btn umk-link justify-self-start"
            onClick={() => {
              try {
                proposeKnowledgeUpdate({ target: null, change, basis, origin: 'user' })
                setChange('')
                setBasis('')
                setErr('')
              } catch (e) {
                setErr((e as Error).message)
              }
            }}
          >
            Ghi đề xuất
          </button>
          {err && <p className="umk-note">{err}</p>}
        </div>
        <ul>
          {fb.proposals.slice().reverse().map((p) => (
            <li key={p.id}>
              {p.change} — <i>{p.basis}</i> <span className="umk-tag">{p.status}</span>{' '}
              {p.status === 'proposed' && (
                <>
                  <button className="umk-link" onClick={() => decideProposal(p.id, 'accepted')}>chấp nhận (sẽ sửa tay)</button> <button className="umk-link" onClick={() => decideProposal(p.id, 'rejected')}>từ chối</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="umk-card">
        <h3>UMK tự thấy ({own.length})</h3>
        {group(own).map(([k, gs]) => (
          <details key={k}>
            <summary>{gapLabel(k)} ({gs.length})</summary>
            <ul>{gs.map((g) => <li key={g.id}>{g.about ? <>{unitLink(g.about)}: </> : null}{g.text}</li>)}</ul>
          </details>
        ))}
      </section>
      <section className="umk-card">
        <h3>Thư viện tự đánh dấu cần kiểm {lib ? `(${lib.length})` : ''}</h3>
        {!lib && <p className="umk-note">Đang tải thư mục…</p>}
        {lib && (
          <details>
            <summary>Các dòng <code>::verify</code> và câu "chưa đối chiếu" trong bài</summary>
            <ul>{lib.slice(0, 300).map((g) => <li key={g.id}>{g.about && unitLink(g.about)}: {g.text}</li>)}</ul>
          </details>
        )}
      </section>
    </>
  )
}

function Focus({ id }: { id: EntityId }) {
  const u = getKnowledge(id)
  const c = useMemo(() => (u ? getConcept(id) : null), [u, id])
  const related = useMemo(() => getRelatedConcepts(id), [id])
  const sources = useMemo(() => getSources(id), [id])
  const rule = id.startsWith('r:') ? ruleEntry(id) : undefined
  const rb = id.startsWith('rb:') ? listRulebooks().find((r) => r.id === id) : undefined
  const n = id.startsWith('d:') ? node(id) : undefined
  const t = id.startsWith('x:') ? term(id) : c?.term ?? undefined
  if (!u) return <p className="text-[14px] text-[var(--color-ink-muted)]">UMK không có <code>{id}</code>.</p>
  const groups = new Map<string, typeof related>()
  for (const r of related) groups.set(`${r.rel}|${r.dir}`, [...(groups.get(`${r.rel}|${r.dir}`) ?? []), r])
  return (
    <article className="grid gap-3" data-umk-focus={id}>
      <section className="umk-card">
        <p className="umk-note">{KIND_LABEL[u.kind as keyof typeof KIND_LABEL] ?? u.kind} · <code>{id}</code></p>
        <h3>{u.title}</h3>
        {u.summary && <p>{u.summary}</p>}
        <p><Prov p={u.provenance} />{u.provenance.note && <span className="umk-note"> {u.provenance.note}</span>}</p>
        <p className="umk-note">
          {u.href && !u.href.startsWith('/umk') && <><Link className="umk-link" to={u.href}>Mở trang</Link> · </>}
          <Link className="umk-link" to={graphHref(id)}>Xem trên đồ thị</Link>
        </p>
        {u.domains.length > 0 && <p>Nằm trong: {u.domains.map((d, i) => <span key={d}>{i > 0 && ' · '}{unitLink(d)}</span>)}</p>}
      </section>
      {rule && (
        <section className="umk-card">
          <h4>Mục sổ luật</h4>
          <RuleLine e={rule} />
          <p className="umk-note">Phạm vi: {rule.scope}{rule.evaluatedBy.length ? ` · được kiểm bởi ${rule.evaluatedBy.join(', ')}` : ''}</p>
        </section>
      )}
      {rb && <Rulebooks />}
      {n && n.members.length > 0 && (
        <section className="umk-card">
          <h4>{n.members.length} mục</h4>
          <ul>{n.members.slice(0, 200).map((m) => <li key={m}>{unitLink(m)}</li>)}</ul>
        </section>
      )}
      {t && (
        <section className="umk-card">
          <h4>Thuật ngữ</h4>
          <p><b>{t.preferred}</b>{t.wikidata ? <span className="umk-note"> · Wikidata {t.wikidata}</span> : null}</p>
          <ul>{t.forms.filter((f) => f.relation !== 'preferred').map((f, i) => <li key={i}>{f.text} <span className="umk-tag">{f.lang}</span><span className="umk-tag">{f.relation === 'glossary-variant' ? 'biến thể trong bảng thuật ngữ' : f.relation === 'article-alias' ? 'tên khác của bài' : 'tên nước ngoài'}</span></li>)}</ul>
          {t.definition && <p>{t.definition}</p>}
          <p className="umk-note">Các dạng viết giữ quan hệ riêng — không coi là đồng nghĩa tuyệt đối.</p>
        </section>
      )}
      {c && (c.rules.length > 0 || c.methods.length > 0 || c.analysisLabels.length > 0) && (
        <section className="umk-card">
          {c.rules.length > 0 && <><h4>Luật UMRE nêu trong bài</h4>{c.rules.map((e) => <RuleLine key={e.id} e={e} />)}</>}
          {c.methods.length > 0 && <><h4>Phương pháp phân tích dùng khái niệm</h4><ul>{c.methods.map((m) => <li key={m.id}>{unitLink(m.id)}</li>)}</ul></>}
          {c.analysisLabels.length > 0 && <p className="umk-note">Nhãn /analyze dẫn tới đây: {c.analysisLabels.join(', ')}</p>}
        </section>
      )}
      {sources.length > 0 && (
        <section className="umk-card">
          <h4>Nguồn</h4>
          <ul>{sources.map((s) => <li key={s.id}><Link className="umk-link" to={`/sources/${s.id.slice(2)}`}>{s.authors.join(', ')}, {s.title}</Link>{s.year ? ` (${s.year})` : ''}{s.locator ? `, ${s.locator}` : ''} <Prov p={s.provenance} /></li>)}</ul>
        </section>
      )}
      {groups.size > 0 && (
        <section className="umk-card">
          <h4>Quan hệ</h4>
          {[...groups].map(([k, rs]) => (
            <div key={k} className="umk-rule">
              <b>{RELATIONS[rs[0].rel][rs[0].dir]}</b> <span className="umk-note">({rs[0].prov})</span>
              <ul>{rs.slice(0, 60).map((r, i) => <li key={i}>{unitLink(r.other)}{r.page ? `, ${r.page}` : ''}{r.note ? ` — ${r.note}` : ''}</li>)}</ul>
            </div>
          ))}
        </section>
      )}
    </article>
  )
}

const ISSUE_KINDS: [IssueKind | 'all' | 'pending' | 'decided', string][] = [
  ['all', 'Tất cả'], ['pending', 'Đang chờ quyết'], ['decided', 'Đã quyết'], ['term-conflict', 'Xung đột thuật ngữ'], ['rulebook-question', 'Câu hỏi mở của sổ luật'],
  ['convention', 'Quy ước người biên soạn / người dạy'], ['missing-source', 'Thiếu nguồn'], ['interpretation', 'Nguồn cần diễn giải'], ['detector', 'Đã sửa ở bộ dò'],
]

/** The Phase 1.5 review as a worklist: every issue with its evidence, and a decision a person records (never applied). */
function Issues() {
  const issues = useMemo(() => editorialIssues(), [])
  const fb = useFeedback()
  const [filter, setFilter] = useState<(typeof ISSUE_KINDS)[number][0]>('pending')
  const decided = (i: Issue) => !!decisionOf(fb, i.id)
  const shown = issues.filter((i) => (filter === 'all' ? true : filter === 'pending' ? i.pending && !decided(i) : filter === 'decided' ? decided(i) : i.kind === filter))
  const count = (k: (typeof ISSUE_KINDS)[number][0]) => issues.filter((i) => (k === 'all' ? true : k === 'pending' ? i.pending && !decided(i) : k === 'decided' ? decided(i) : i.kind === k)).length
  return (
    <section className="umk-card" data-testid="umk-issues">
      <h3>Vấn đề học thuật chờ quyết ({count('pending')})</h3>
      <p className="umk-note">
        Rà soát ngày {REVIEW.reviewed} — {REVIEW.reviewer}. Quyết định ghi ở đây <b>chỉ nằm trên thiết bị này</b> (lưu cục bộ, mã hoá khi kho mở) và <b>không tự sửa</b> thư viện hay sổ luật: người biên soạn sửa tệp nội dung sau khi quyết. Báo cáo đầy đủ: <code>docs/umk/reviews/</code>.
      </p>
      <div className="umk-tabs" role="tablist" aria-label="Lọc vấn đề">
        {ISSUE_KINDS.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={filter === k} onClick={() => setFilter(k)}>{l} ({count(k)})</button>
        ))}
      </div>
      {!shown.length && <p className="umk-note">Không có mục nào.</p>}
      {shown.map((i) => <IssueCard key={i.id} i={i} />)}
    </section>
  )
}

function IssueCard({ i }: { i: Issue }) {
  const fb = useFeedback()
  const current = decisionOf(fb, i.id)
  const history = fb.decisions.filter((d) => d.issue === i.id)
  const [choice, setChoice] = useState('')
  const [custom, setCustom] = useState('')
  const outcome = i.options.length && choice !== 'Khác' ? choice : custom
  const [reason, setReason] = useState('')
  const [source, setSource] = useState('')
  const [by, setBy] = useState('')
  const [err, setErr] = useState('')
  const [open, setOpen] = useState(false)
  return (
    <div className="umk-issue umk-rule" data-issue={i.id}>
      <p>
        <b>{i.title}</b> <span className="umk-tag">{i.domain}</span>
        <span className="umk-tag" data-v={current ? 'verified' : undefined}>{current ? `đã quyết: ${current.outcome}` : i.status}</span>
      </p>
      <p className="umk-note"><code>{i.id}</code>{i.about && !i.about.startsWith('x:') ? <> · <Link className="umk-link" to={href(i.about)}>{getKnowledge(i.about)?.title ?? 'mở'}</Link></> : null}</p>
      <dl className="umk-dl">
        <dt>Vấn đề</dt><dd>{i.problem}</dd>
        <dt>Nguồn / bằng chứng</dt><dd>{i.source || '—'}</dd>
        <dt>Mức căn cứ</dt><dd>{i.support}</dd>
        <dt>Ảnh hưởng tới bộ giải</dt><dd>{i.impact}</dd>
        <dt>Đề xuất</dt><dd>{i.proposal}</dd>
      </dl>
      {i.pending && (
        <details open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
          <summary>{current ? 'Quyết định lại' : 'Ghi quyết định'}</summary>
          <div className="umk-form">
            {i.options.length > 0 && (
              <select value={choice} onChange={(e) => setChoice(e.target.value)} aria-label="Phương án">
                <option value="">— chọn phương án —</option>
                {i.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            )}
            {(!i.options.length || choice === 'Khác') && <input className="umk-search" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Phương án đã chọn" aria-label="Phương án đã chọn" />}
            <input className="umk-search" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Lý do" aria-label="Lý do" />
            <input className="umk-search" value={source} onChange={(e) => setSource(e.target.value)} placeholder="Nguồn (sách, trang) — để trống nếu là quyết định biên tập" aria-label="Nguồn của quyết định" />
            <input className="umk-search" value={by} onChange={(e) => setBy(e.target.value)} placeholder="Người quyết (không bắt buộc)" aria-label="Người quyết" />
            <button
              className="umk-link justify-self-start"
              onClick={() => {
                try {
                  recordDecision({ issue: i.id, outcome, reason, source, decidedBy: by, before: current ? `đã quyết: ${current.outcome}` : i.status, after: outcome })
                  setChoice('')
                  setCustom('')
                  setReason('')
                  setSource('')
                  setErr('')
                  setOpen(false)
                } catch (e) {
                  setErr((e as Error).message)
                }
              }}
            >
              Ghi quyết định
            </button>
            {err && <p className="umk-note">{err}</p>}
          </div>
        </details>
      )}
      {history.length > 0 && (
        <ul className="umk-history">
          {history.map((d) => (
            <li key={d.id} data-undone={d.undoneAt ? 'true' : undefined}>
              {new Date(d.at).toLocaleString('vi-VN')}{d.decidedBy ? ` · ${d.decidedBy}` : ''}: <b>{d.outcome}</b> — {d.reason}{d.source ? ` (${d.source})` : ''} · trước: {d.before}
              {d.undoneAt ? <span className="umk-tag">đã hoàn tác {new Date(d.undoneAt).toLocaleString('vi-VN')}</span> : <> <button className="umk-link" onClick={() => undoDecision(d.id)}>hoàn tác</button></>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
