import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { ScrollArea } from '../../components/ScrollArea'
import { ArrowUpRightIcon } from '../../components/icons'
import { findArticle, normalize } from '../theory/wiki'
import { SOURCE_COUNT } from '../theory/articles'
import { ACCESS_LABEL, CURATED } from './curated'
import { sourceTitle, useBibliography, type Bibliography, type Source } from './data'
import { CiteBox } from './CiteBox'
import { citeSource } from './cite'
import './sources.css'

const KIND_LABEL: Record<string, string> = {
  book: 'Sách',
  syllabus: 'Đề cương',
  encyclopedia: 'Bách khoa',
  web: 'Trang web',
  score: 'Bản nhạc',
  video: 'Video',
  article: 'Bài báo',
  law: 'Văn bản pháp luật',
}
/** ['tr. 12', 'tr. 3', 'tr. 5 – 6'] → "tr. 3, 5 – 6, 12" */
const pageList = (pages: string[]) => {
  const bare = pages.map((p) => p.replace(/^tr\.\s*/, ''))
  const first = (p: string) => parseInt(p, 10) || 0
  return `tr. ${[...new Set(bare)].sort((x, y) => first(x) - first(y) || x.length - y.length).join(', ')}`
}
type Tab = 'chinh' | 'tat-ca' | 'treo'
const PAGE = 60

/** The library's bibliography: /sources (list), /sources/:id (one work), /sources/treo (what is still unverified). */
export function SourcesPage() {
  const { id } = useParams()
  const { data, error } = useBibliography()
  const tab: Tab | null = id === 'treo' ? 'treo' : id ? null : 'chinh'
  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          {id && id !== 'treo' && (
            <Link to="/sources" className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Thư mục</Link>
          )}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">{id && id !== 'treo' ? '' : 'Thư mục học'}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-8">
        {error && <p className="text-[14px] text-[var(--color-ink-muted)]">Không tải được thư mục (cần mạng ở lần mở đầu tiên).</p>}
        {!data && !error && <p className="text-[14px] text-[var(--color-ink-faint)]">Đang tải thư mục…</p>}
        {data && (tab ? <Overview data={data} tab={tab} /> : <SourceDetail data={data} id={id!} />)}
      </div>
    </ScrollArea>
  )
}

function Overview({ data, tab }: { data: Bibliography; tab: Tab }) {
  const [current, setTab] = useState<Tab>(tab)
  const t = tab === 'treo' ? 'treo' : current
  return (
    <>
      <header className="animate-float-up">
        <p className="brand-eyebrow">Nguồn của thư viện</p>
        <h2 className="mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">Mọi khẳng định truy được về nguồn</h2>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          Mỗi tài liệu tham khảo trong các bài là một mục ở đây, kèm những bài dùng nó. Công trình chính có đủ thông tin xuất bản, mức người biên soạn đã đối chiếu, và cách trích dẫn theo Chicago, APA hoặc BibTeX.
        </p>
        <dl className="src-stats mt-4">
          <div><dt>{SOURCE_COUNT.toLocaleString('vi')}</dt><dd>nguồn</dd></div>
          <div><dt>{CURATED.length}</dt><dd>công trình chính</dd></div>
          <div><dt>{data.open.length}</dt><dd>việc còn treo</dd></div>
        </dl>
      </header>
      <nav className="src-tabs" aria-label="Thư mục">
        {(
          [
            ['chinh', 'Công trình chính'],
            ['tat-ca', 'Tất cả nguồn'],
            ['treo', 'Việc còn treo'],
          ] as [Tab, string][]
        ).map(([k, label]) =>
          k === 'treo' ? (
            <Link key={k} to="/sources/treo" className={clsx(t === k && 'is-on')}>{label}</Link>
          ) : (
            <Link key={k} to="/sources" onClick={() => setTab(k)} className={clsx(t === k && 'is-on')}>{label}</Link>
          ),
        )}
      </nav>
      {t === 'chinh' && <CuratedList data={data} />}
      {t === 'tat-ca' && <AllSources data={data} />}
      {t === 'treo' && <OpenItems data={data} />}
    </>
  )
}

function CuratedList({ data }: { data: Bibliography }) {
  const list = CURATED.map((c) => data.byId.get(c.id)).filter((s): s is Source => !!s)
  return (
    <section className="space-y-3">
      <ExportList sources={list} name="cong-trinh-chinh" />
      <SourceList sources={list} />
    </section>
  )
}

/** The list as shown: BibTeX file to download, or a Chicago bibliography to paste (sorted by author). */
function ExportList({ sources, name }: { sources: Source[]; name: string }) {
  const [copied, setCopied] = useState(false)
  const bibtex = () => {
    const blob = new Blob([sources.map((s) => citeSource(s, 'bibtex')).join('\n\n')], { type: 'application/x-bibtex' })
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: `thu-muc-${name}.bib` })
    a.click()
    URL.revokeObjectURL(a.href)
  }
  const chicago = () =>
    navigator.clipboard
      ?.writeText(sources.map((s) => citeSource(s, 'chicago')).sort((a, b) => a.localeCompare(b, 'vi')).join('\n'))
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      })
  return (
    <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
      <span className="text-[var(--color-ink-faint)]">Xuất {sources.length.toLocaleString('vi')} mục:</span>
      <button onClick={bibtex} className="btn-line rounded-full px-3 py-1">Tải BibTeX</button>
      <button onClick={chicago} className="btn-line rounded-full px-3 py-1">{copied ? '✓ Đã chép' : 'Chép thư mục Chicago'}</button>
    </div>
  )
}

function AllSources({ data }: { data: Bibliography }) {
  const [q, setQ] = useState('')
  const [kind, setKind] = useState<string>('')
  const [shown, setShown] = useState(PAGE)
  const kinds = useMemo(() => [...new Set(data.sources.map((s) => s.kind))], [data])
  const list = useMemo(() => {
    const n = normalize(q)
    return data.sources
      .filter((s) => (!kind || s.kind === kind) && (!n || normalize(`${sourceTitle(s)} ${s.labels.join(' ')} ${s.authors?.join(' ') ?? ''} ${s.urls.join(' ')}`).includes(n)))
      .sort((a, b) => b.uses.length - a.uses.length)
  }, [data, q, kind])
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <input value={q} onChange={(e) => (setQ(e.target.value), setShown(PAGE))} placeholder="Tìm tên, tác giả, trang web…" className="hero-search h-10 min-w-0 flex-1 rounded-full px-4 text-[14px] outline-none" />
        <select value={kind} onChange={(e) => (setKind(e.target.value), setShown(PAGE))} className="src-select h-10 rounded-full px-3 text-[13px]">
          <option value="">Mọi loại</option>
          {kinds.map((k) => (
            <option key={k} value={k}>{KIND_LABEL[k] ?? k}</option>
          ))}
        </select>
      </div>
      <p className="text-[12.5px] text-[var(--color-ink-faint)]">{list.length.toLocaleString('vi')} nguồn · xếp theo số bài dùng</p>
      <ExportList sources={list} name={kind || 'tat-ca'} />
      <SourceList sources={list.slice(0, shown)} />
      {shown < list.length && (
        <button onClick={() => setShown((n) => n + PAGE)} className="btn-line rounded-full px-4 py-2 text-[13px]">Xem thêm {Math.min(PAGE, list.length - shown)}</button>
      )}
    </section>
  )
}

function SourceList({ sources }: { sources: Source[] }) {
  return (
    <ul className="src-list">
      {sources.map((s) => (
        <li key={s.id}>
          <Link to={`/sources/${s.id}`} className="src-row">
            <span className="src-kind">{KIND_LABEL[s.kind] ?? s.kind}</span>
            <span className="min-w-0 flex-1">
              <span className="src-title">{sourceTitle(s)}</span>
              {s.authors && <span className="src-sub">{s.authors.join('; ')}{s.year ? ` · ${s.year}` : ''}</span>}
            </span>
            {s.access && <span className={`src-access is-${s.access}`}>{ACCESS_LABEL[s.access]}</span>}
            <span className="src-uses">{s.uses.length} bài</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function SourceDetail({ data, id }: { data: Bibliography; id: string }) {
  const s = data.byId.get(id)
  if (!s) return <p className="text-[14px] text-[var(--color-ink-muted)]">Không có nguồn “{id}”. <Link to="/sources" className="wiki-link">Về thư mục</Link></p>
  const facts: [string, string | undefined][] = [
    ['Tác giả', s.authors?.join('; ')],
    ['Tên gốc', s.original],
    ['Dịch', s.translator],
    ['Biên tập', s.editor],
    ['Lần in', s.edition],
    ['Tạp chí', [s.container, s.volume].filter(Boolean).join(', ') || undefined],
    ['Xuất bản', [s.place, s.publisher, s.year].filter(Boolean).join(', ') || undefined],
    ['Ngôn ngữ', s.lang],
    ['Bản quyền', s.rights && (s.rights === 'public-domain' ? 'Phạm vi công cộng' : 'Còn bản quyền — thư viện chỉ tóm lược, trích ngắn có trang')],
  ]
  return (
    <article className="space-y-6">
      <header className="animate-float-up">
        <p className="brand-eyebrow">{KIND_LABEL[s.kind] ?? s.kind}</p>
        <h2 className="mt-1 font-display text-[26px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[32px]">{sourceTitle(s)}</h2>
        {s.access && <p className={`src-access is-${s.access} mt-3 inline-block`}>{ACCESS_LABEL[s.access]}</p>}
      </header>
      {s.authors ? (
        <dl className="src-facts">
          {facts.filter(([, v]) => v).map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      ) : (
        s.labels.length > 1 && (
          <div className="text-[13.5px] text-[var(--color-ink-muted)]">
            <p className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">Các bài ghi nguồn này là</p>
            <ul className="mt-1 list-disc pl-5">{s.labels.map((l) => <li key={l}>{l}</li>)}</ul>
          </div>
        )
      )}
      {s.note && <p className="src-note">Ghi chú của người biên soạn: {s.note}</p>}
      {[s.url, ...s.urls].filter((u, i, all): u is string => !!u && all.indexOf(u) === i).map((u) => (
        <a key={u} href={u} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 break-all text-[13.5px] text-[var(--color-accent)] hover:underline">
          {u} <ArrowUpRightIcon width={12} height={12} className="shrink-0" />
        </a>
      ))}
      <CiteBox title="Trích dẫn nguồn này" cite={(style) => citeSource(s, style)} />
      <section>
        <h3 className="font-display text-[18px] font-semibold text-[var(--color-ink)]">Được dùng trong {s.uses.length} bài</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {s.uses.map((slug) => {
            const a = findArticle(slug)
            return a ? (
              <li key={slug}>
                <Link to={`/theory/${slug}`} className="wiki-link text-[14px]">{a.title}</Link>
                {s.pages?.[slug] && <span className="src-pages">{pageList(s.pages[slug])}</span>}
              </li>
            ) : null
          })}
        </ul>
      </section>
    </article>
  )
}

function OpenItems({ data }: { data: Bibliography }) {
  const groups = useMemo(() => {
    const by = new Map<string, typeof data.open>()
    for (const o of data.open) by.set(o.slug, [...(by.get(o.slug) ?? []), o])
    return [...by]
  }, [data])
  const unchecked = data.sources.filter((s) => s.access === 'chua-doi-chieu')
  return (
    <section className="space-y-6">
      <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
        Những chỗ chính bài viết nói là chưa đối chiếu, chưa kiểm chứng hoặc nguồn mâu thuẫn — tự gom từ câu chữ trong bài và từ dòng <code>::verify</code>; cùng các công trình người biên soạn chưa đọc trực tiếp. Đối chiếu xong thì sửa câu trong bài, mục sẽ tự biến mất.
      </p>
      {unchecked.length > 0 && (
        <div>
          <h3 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Công trình chưa đối chiếu</h3>
          <SourceList sources={unchecked} />
        </div>
      )}
      <div className="space-y-4">
        <h3 className="font-display text-[17px] font-semibold text-[var(--color-ink)]">{data.open.length} chỗ trong {groups.length} bài</h3>
        {groups.map(([slug, items]) => (
          <div key={slug} className="src-open">
            <Link to={`/theory/${slug}`} className="wiki-link font-medium">{findArticle(slug)?.title ?? slug}</Link>
            <ul>
              {items.map((o, i) => (
                <li key={i} className={o.kind === 'verify' ? 'is-verify' : undefined}>{o.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
