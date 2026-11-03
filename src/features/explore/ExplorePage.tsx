import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { ScrollArea } from '../../components/ScrollArea'
import { PEOPLE_FILE } from '../theory/articles'
import { findArticle, normalize } from '../theory/wiki'
import { JOURNEYS, PLACES, PLACES_BY_SLUG, kindOf, KINDS, yearsOf, type Region } from '../musicology/places'
import { branchesOf } from '../musicology/taxonomy'
import '../sources/sources.css'
import '../musicology/musicology-sky.css'
import './explore.css'

/**
 * The knowledge graph, read three ways: people, works, and one timeline. People and works come from the build
 * (content/people.<h>.json, from composers.ts / pianists.ts); places, events and journeys from the music map
 * (places.ts); branches from the musicology taxonomy; concepts are library articles. Everything links back to its
 * page, so each relation can be checked where it was written.
 */
interface Person {
  id: string
  name: string
  years: string
  born?: number
  died?: number
  country: string
  role: 'composer' | 'pianist'
  period: string
  group?: string
  works: string[]
  topics: string[]
  page: boolean
}
interface Period {
  id: string
  title: string
  years: string
  role: string
}
interface People {
  people: Person[]
  periods: Period[]
}
interface Moment {
  from: number
  to: number
  when: string
  text: string
  place?: string
  region?: Region
  slugs: string[]
  kind: string
}

type Tab = 'nguoi' | 'tac-pham' | 'thoi-gian'
const PAGE = 80
const REGION_LABEL: Record<Region, string> = { europe: 'Châu Âu', americas: 'Châu Mỹ', vietnam: 'Việt Nam', asia: 'Châu Á', other: 'Trung Đông – châu Phi' }

let load: Promise<People> | null = null
const loadPeople = () =>
  (load ??= fetch(`${import.meta.env.BASE_URL}content/${PEOPLE_FILE}`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .catch((e) => {
      load = null
      throw e
    }))

/** Every dated event: those of the map's places, and each person's birth and death. */
function moments(data: People): Moment[] {
  const out: Moment[] = []
  for (const p of PLACES)
    for (const ev of p.events) {
      const y = yearsOf(ev.year)
      if (y) out.push({ from: y[0], to: y[1], when: ev.year, text: ev.text, place: p.id, region: p.region, slugs: ev.slugs, kind: KINDS[kindOf(ev)].title })
    }
  for (const p of data.people) {
    if (p.born) out.push({ from: p.born, to: p.born, when: String(p.born), text: `${p.name} ra đời`, slugs: [p.id], kind: 'Sinh' })
    if (p.died) out.push({ from: p.died, to: p.died, when: String(p.died), text: `${p.name} mất`, slugs: [p.id], kind: 'Mất' })
  }
  return out.sort((a, b) => a.from - b.from || a.to - b.to)
}

export function ExplorePage() {
  const [params, setParams] = useSearchParams()
  const [data, setData] = useState<People | null>(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    let live = true
    loadPeople().then(
      (d) => live && setData(d),
      () => live && setError(true),
    )
    return () => {
      live = false
    }
  }, [])
  const tab = (params.get('tab') as Tab | null) ?? 'nguoi'
  const open = params.get('p')
  const set = (next: Record<string, string | undefined>) => {
    const p = new URLSearchParams(params)
    for (const [k, v] of Object.entries(next)) {
      if (v) p.set(k, v)
      else p.delete(k)
    }
    setParams(p, { replace: !('p' in next) })
  }

  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          {open && <button onClick={() => set({ p: undefined })} className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Tra cứu</button>}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">{open ? '' : 'Tra cứu'}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-8">
        {error && <p className="text-[14px] text-[var(--color-ink-muted)]">Không tải được dữ liệu (cần mạng ở lần mở đầu tiên).</p>}
        {!data && !error && <p className="text-[14px] text-[var(--color-ink-faint)]">Đang tải…</p>}
        {data && open && <PersonView data={data} id={open} onOpen={(id) => set({ p: id })} />}
        {data && !open && (
          <>
            <header className="animate-float-up">
              <p className="brand-eyebrow">Mạng tri thức</p>
              <h2 className="mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">Ai, ở đâu, khi nào, viết gì</h2>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
                Người, tác phẩm, nơi chốn, sự kiện, phân ngành và khái niệm của thư viện nối vào nhau. Lọc theo thời kỳ, quốc gia, năm; mở một người để thấy mọi mối nối của họ — mỗi mối nối dẫn về trang nơi nó được ghi.
              </p>
            </header>
            <nav className="src-tabs" aria-label="Tra cứu">
              {(
                [
                  ['nguoi', `Người · ${data.people.length}`],
                  ['tac-pham', `Tác phẩm · ${data.people.reduce((n, p) => n + p.works.length, 0)}`],
                  ['thoi-gian', 'Dòng thời gian'],
                ] as [Tab, string][]
              ).map(([k, label]) => (
                <button key={k} onClick={() => set({ tab: k === 'nguoi' ? undefined : k })} className={clsx(tab === k && 'is-on')}>{label}</button>
              ))}
            </nav>
            {tab === 'nguoi' && <PeopleList data={data} onOpen={(id) => set({ p: id })} />}
            {tab === 'tac-pham' && <WorksList data={data} onOpen={(id) => set({ p: id })} />}
            {tab === 'thoi-gian' && <Timeline data={data} onOpen={(id) => set({ p: id })} />}
          </>
        )}
      </div>
    </ScrollArea>
  )
}

/** Shared filters: words, period, country, years. */
function useFilters(data: People) {
  const [q, setQ] = useState('')
  const [period, setPeriod] = useState('')
  const [country, setCountry] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const countries = useMemo(() => [...new Set(data.people.map((p) => p.country))].sort((a, b) => a.localeCompare(b, 'vi')), [data])
  const fits = (p: Person, text: string) =>
    (!period || p.period === period) &&
    (!country || p.country === country) &&
    (!from || (p.died ?? p.born ?? 0) >= Number(from)) &&
    (!to || (p.born ?? Infinity) <= Number(to)) &&
    (!q || normalize(text).includes(normalize(q)))
  const bar = (
    <div className="ex-filters">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm tên, tác phẩm…" className="hero-search h-10 rounded-full px-4 text-[14px] outline-none" />
      <select value={period} onChange={(e) => setPeriod(e.target.value)} className="src-select h-10 rounded-full px-3 text-[13px]">
        <option value="">Mọi thời kỳ</option>
        {data.periods.map((p) => (
          <option key={p.id} value={p.id}>{p.title} ({p.years})</option>
        ))}
      </select>
      <select value={country} onChange={(e) => setCountry(e.target.value)} className="src-select h-10 rounded-full px-3 text-[13px]">
        <option value="">Mọi quốc gia</option>
        {countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <span className="ex-years">
        <input inputMode="numeric" value={from} onChange={(e) => setFrom(e.target.value.replace(/\D/g, ''))} placeholder="từ năm" className="src-select h-10 w-[84px] rounded-full px-3 text-[13px]" />
        <input inputMode="numeric" value={to} onChange={(e) => setTo(e.target.value.replace(/\D/g, ''))} placeholder="đến năm" className="src-select h-10 w-[84px] rounded-full px-3 text-[13px]" />
      </span>
    </div>
  )
  return { bar, fits, q, from, to }
}

const periodTitle = (data: People, id: string) => data.periods.find((p) => p.id === id)?.title ?? id

function PeopleList({ data, onOpen }: { data: People; onOpen: (id: string) => void }) {
  const { bar, fits } = useFilters(data)
  const [shown, setShown] = useState(PAGE)
  const list = useMemo(() => data.people.filter((p) => fits(p, `${p.name} ${p.works.join(' ')} ${p.group ?? ''}`)).sort((a, b) => (a.born ?? 9999) - (b.born ?? 9999)), [data, fits])
  return (
    <section className="space-y-3">
      {bar}
      <p className="text-[12.5px] text-[var(--color-ink-faint)]">{list.length} người · xếp theo năm sinh</p>
      <ul className="src-list">
        {list.slice(0, shown).map((p) => (
          <li key={p.id}>
            <button onClick={() => onOpen(p.id)} className="src-row w-full text-left">
              <span className="src-kind">{p.role === 'pianist' ? 'Piano' : 'Soạn nhạc'}</span>
              <span className="min-w-0 flex-1">
                <span className="src-title">{p.name}</span>
                <span className="src-sub">{p.years} · {p.country} · {periodTitle(data, p.period)}</span>
              </span>
              <span className="src-uses">{(PLACES_BY_SLUG.get(p.id)?.length ?? 0) > 0 ? `${PLACES_BY_SLUG.get(p.id)!.length} nơi · ` : ''}{p.works.length} tác phẩm</span>
            </button>
          </li>
        ))}
      </ul>
      {shown < list.length && <button onClick={() => setShown((n) => n + PAGE)} className="btn-line rounded-full px-4 py-2 text-[13px]">Xem thêm</button>}
    </section>
  )
}

function WorksList({ data, onOpen }: { data: People; onOpen: (id: string) => void }) {
  const { bar, fits } = useFilters(data)
  const [shown, setShown] = useState(PAGE)
  const list = useMemo(
    () =>
      data.people
        .filter((p) => fits(p, `${p.name} ${p.works.join(' ')}`))
        .sort((a, b) => (a.born ?? 9999) - (b.born ?? 9999))
        .flatMap((p) => p.works.map((w) => ({ w, p }))),
    [data, fits],
  )
  return (
    <section className="space-y-3">
      {bar}
      <p className="text-[12.5px] text-[var(--color-ink-faint)]">{list.length} tác phẩm tiêu biểu (như ghi trên trang mỗi người; chưa phân loại thể loại)</p>
      <ul className="src-list">
        {list.slice(0, shown).map(({ w, p }) => (
          <li key={`${p.id}|${w}`}>
            <button onClick={() => onOpen(p.id)} className="src-row w-full text-left">
              <span className="min-w-0 flex-1">
                <span className="src-title">{w}</span>
                <span className="src-sub">{p.name} · {p.years}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {shown < list.length && <button onClick={() => setShown((n) => n + PAGE)} className="btn-line rounded-full px-4 py-2 text-[13px]">Xem thêm</button>}
    </section>
  )
}

function Timeline({ data, onOpen }: { data: People; onOpen: (id: string) => void }) {
  const all = useMemo(() => moments(data), [data])
  const byId = useMemo(() => new Map(data.people.map((p) => [p.id, p])), [data])
  const [q, setQ] = useState('')
  const [region, setRegion] = useState<Region | ''>('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [withPeople, setWithPeople] = useState(false)
  const [shown, setShown] = useState(PAGE)
  const list = useMemo(
    () =>
      all.filter(
        (m) =>
          (withPeople || m.place) &&
          (!region || m.region === region) &&
          (!from || m.to >= Number(from)) &&
          (!to || m.from <= Number(to)) &&
          (!q || normalize(`${m.text} ${m.place ? PLACES.find((p) => p.id === m.place)?.name : ''}`).includes(normalize(q))),
      ),
    [all, q, region, from, to, withPeople],
  )
  return (
    <section className="space-y-3">
      <div className="ex-filters">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm sự kiện, nơi…" className="hero-search h-10 rounded-full px-4 text-[14px] outline-none" />
        <select value={region} onChange={(e) => setRegion(e.target.value as Region | '')} className="src-select h-10 rounded-full px-3 text-[13px]">
          <option value="">Mọi vùng</option>
          {(Object.keys(REGION_LABEL) as Region[]).map((r) => (
            <option key={r} value={r}>{REGION_LABEL[r]}</option>
          ))}
        </select>
        <span className="ex-years">
          <input inputMode="numeric" value={from} onChange={(e) => setFrom(e.target.value.replace(/\D/g, ''))} placeholder="từ năm" className="src-select h-10 w-[84px] rounded-full px-3 text-[13px]" />
          <input inputMode="numeric" value={to} onChange={(e) => setTo(e.target.value.replace(/\D/g, ''))} placeholder="đến năm" className="src-select h-10 w-[84px] rounded-full px-3 text-[13px]" />
        </span>
        <label className="flex items-center gap-2 text-[12.5px] text-[var(--color-ink-muted)]">
          <input type="checkbox" checked={withPeople} onChange={(e) => setWithPeople(e.target.checked)} /> Cả năm sinh – mất
        </label>
      </div>
      <p className="text-[12.5px] text-[var(--color-ink-faint)]">{list.length} sự kiện</p>
      <ol className="ex-timeline">
        {list.slice(0, shown).map((m, i) => {
          const c = Math.floor(m.from / 100)
          const head = i === 0 || Math.floor(list[i - 1].from / 100) !== c
          const place = m.place ? PLACES.find((p) => p.id === m.place) : undefined
          return (
            <li key={i}>
              {head && <h3 className="ex-century">Thế kỷ {c + 1}</h3>}
              <div className="ex-moment">
                <span className="ex-when">{m.when}</span>
                <span className="min-w-0 flex-1">
                  <span className="text-[14px] text-[var(--color-ink)]">{m.text}</span>
                  <span className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[12px] text-[var(--color-ink-faint)]">
                    <span>{m.kind}</span>
                    {place && <Link to={`/musicology/ban-do?p=${place.id}`} className="hover:text-[var(--color-gold)]">{place.name}</Link>}
                    {m.slugs.map((s) =>
                      byId.has(s) ? (
                        <button key={s} onClick={() => onOpen(s)} className="text-[var(--color-gold)] hover:underline">{byId.get(s)!.name}</button>
                      ) : findArticle(s) ? (
                        <Link key={s} to={`/theory/${s}`} className="hover:text-[var(--color-gold)]">{findArticle(s)!.title}</Link>
                      ) : null,
                    )}
                  </span>
                </span>
              </div>
            </li>
          )
        })}
      </ol>
      {shown < list.length && <button onClick={() => setShown((n) => n + PAGE)} className="btn-line rounded-full px-4 py-2 text-[13px]">Xem thêm</button>}
    </section>
  )
}

/** One person and everything the library connects to them. */
function PersonView({ data, id, onOpen }: { data: People; id: string; onOpen: (id: string) => void }) {
  const p = data.people.find((x) => x.id === id)
  if (!p) return <p className="text-[14px] text-[var(--color-ink-muted)]">Không có người “{id}”.</p>
  const places = PLACES_BY_SLUG.get(p.id) ?? []
  const journey = JOURNEYS.find((j) => j.slug === p.id)
  const branches = branchesOf(p.id)
  const topics = p.topics.map((s) => findArticle(s)).filter((a) => !!a)
  // contemporaries: same period and country, lives overlapping
  const peers = data.people
    .filter((o) => o.id !== p.id && o.period === p.period && o.country === p.country && o.born && p.born && o.born <= (p.died ?? 2100) && (o.died ?? 2100) >= p.born)
    .slice(0, 12)
  return (
    <article className="space-y-6">
      <header className="animate-float-up">
        <p className="brand-eyebrow">{p.role === 'pianist' ? 'Nghệ sĩ piano' : 'Nhà soạn nhạc'}</p>
        <h2 className="mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">{p.name}</h2>
        <p className="mt-1 text-[14px] text-[var(--color-ink-muted)]">{p.years} · {p.country}</p>
        {p.page && <Link to={`/theory/${p.id}`} className="btn-gold mt-4 inline-flex rounded-full px-4 py-2 text-[13px] font-medium">Đọc trang {p.name.split(' ').at(-1)}</Link>}
      </header>
      <dl className="src-facts">
        <div><dt>Thời kỳ</dt><dd>{periodTitle(data, p.period)}{p.group ? ` · ${p.group}` : ''}</dd></div>
        <div><dt>Quốc gia</dt><dd>{p.country}</dd></div>
      </dl>
      {p.works.length > 0 && (
        <section className="ex-block">
          <h3>Tác phẩm tiêu biểu</h3>
          <ul className="list-disc pl-5 text-[14px] text-[var(--color-ink)]">{p.works.map((w) => <li key={w}>{w}</li>)}</ul>
        </section>
      )}
      {places.length > 0 && (
        <section className="ex-block">
          <h3>Nơi chốn trên bản đồ {journey && <Link to={`/musicology/ban-do?j=${journey.id}`} className="ex-more">Xem hành trình →</Link>}</h3>
          <ul className="space-y-2">
            {places.map((pl) => (
              <li key={pl.id}>
                <Link to={`/musicology/ban-do?p=${pl.id}`} className="wiki-link text-[14px]">{pl.name}</Link>
                <ul className="mt-0.5 space-y-0.5 pl-4 text-[13px] text-[var(--color-ink-muted)]">
                  {pl.events.filter((e) => e.slugs.includes(p.id)).map((e) => (
                    <li key={e.year + e.text}><b className="font-medium text-[var(--color-ink)]">{e.year}</b> — {e.text}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      )}
      {topics.length > 0 && (
        <section className="ex-block">
          <h3>Khái niệm liên quan</h3>
          <div className="flex flex-wrap gap-2">
            {topics.map((a) => <Link key={a.slug} to={`/theory/${a.slug}`} className="mc-chip">{a.title}</Link>)}
          </div>
        </section>
      )}
      {branches.length > 0 && (
        <section className="ex-block">
          <h3>Phân ngành âm nhạc học</h3>
          <div className="flex flex-wrap gap-2">
            {branches.map((b) => <Link key={b.id} to={`/musicology/${b.id}`} className="mc-chip">{b.title}</Link>)}
          </div>
        </section>
      )}
      {peers.length > 0 && (
        <section className="ex-block">
          <h3>Cùng thời, cùng nước</h3>
          <div className="flex flex-wrap gap-2">
            {peers.map((o) => <button key={o.id} onClick={() => onOpen(o.id)} className="mc-chip">{o.name} <b>{o.years}</b></button>)}
          </div>
        </section>
      )}
    </article>
  )
}
