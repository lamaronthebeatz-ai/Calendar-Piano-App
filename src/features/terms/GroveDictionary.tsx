import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRightIcon } from '../../components/icons'
import { normalize } from '../theory/wiki'
import indexUrl from './grove-index.json?url'

/** One headword of Grove (scripts/grove/build.py): id, headword, volume, page, piece of the letter it is fetched in, kind, appendix of vol. V, Vietnamese title + gist. */
interface Head {
  id: string
  h: string
  v: number
  p: number
  s: string
  k: Kind
  a?: 1
  t?: string
  g?: string
}
interface Entry {
  id: string
  head: string
  vol: number
  page: number
  leaf: number
  kind: Kind
  app?: 1
  title?: string
  vi?: string
  en: string
}
type Kind = 'term' | 'person' | 'work' | 'institution'

const KINDS: { id: '' | Kind; label: string }[] = [
  { id: '', label: 'Tất cả' },
  { id: 'term', label: 'Thuật ngữ' },
  { id: 'person', label: 'Nhân vật' },
  { id: 'work', label: 'Tác phẩm' },
  { id: 'institution', label: 'Tổ chức' },
]
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('')
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V']
// the Cornell copies on the Internet Archive, vol. I–V
const SCAN = ['', 'cu31924021782838', 'cu31924021782846', 'cu31924021782853', 'cu31924021782861', 'cu31924021782879']
const YEAR = [0, 1904, 1906, 1907, 1908, 1910]
const letterOf = (s: string) => s.replace(/\d+$/, '')
const shardUrl = (s: string) => `${import.meta.env.BASE_URL}grove/${s}.json`
const shardCache = new Map<string, Promise<Entry[]>>()
const loadShard = (s: string) => {
  if (!shardCache.has(s)) shardCache.set(s, fetch(shardUrl(s)).then((r) => (r.ok ? r.json() : Promise.reject(new Error('grove')))))
  return shardCache.get(s)!
}

/**
 * The Grove part of the dictionary: Grove's Dictionary of Music and Musicians, 2nd ed. (ed. J. A. Fuller Maitland),
 * 5 vols, New York: Macmillan, 1904–1910 — public domain. Each entry: the Vietnamese text written for the app
 * (where done), the original English (OCR), the page and a link to that page of the scan for checking.
 */
export function GroveDictionary({ q }: { q: string }) {
  const [heads, setHeads] = useState<Head[] | null>(null)
  const [letter, setLetter] = useState('a')
  const [kind, setKind] = useState<'' | Kind>('')
  const [onlyVi, setOnlyVi] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [limit, setLimit] = useState(60)
  useEffect(() => {
    let live = true
    fetch(indexUrl)
      .then((r) => r.json())
      .then((h: Head[]) => live && setHeads(h), () => {})
    return () => {
      live = false
    }
  }, [])
  const n = normalize(q)
  const list = useMemo(() => {
    if (!heads) return []
    return heads.filter((h) => (n ? normalize(`${h.h} ${h.t ?? ''} ${h.g ?? ''}`).includes(n) : letterOf(h.s) === letter) && (!kind || h.k === kind) && (!onlyVi || h.t))
  }, [heads, n, letter, kind, onlyVi])
  const done = heads?.filter((h) => h.t).length ?? 0

  return (
    <section className="space-y-4" aria-label="Grove 1904 – 1910">
      <p className="max-w-3xl text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">
        Theo <i>Grove's Dictionary of Music and Musicians</i>, bản thứ hai do J. A. Fuller Maitland biên tập, 5 tập, Macmillan, New York, 1904 – 1910 — sách đã thuộc phạm vi công cộng. Cuối tập V có phần Phụ lục bổ sung và đính chính cho cả bộ. Mỗi mục có phần tiếng Việt viết cho thư viện, nguyên văn tiếng Anh (chữ nhận dạng từ bản quét, có thể sai vài ký tự) và số trang kèm liên kết tới đúng trang bản quét để đối chiếu. Thông tin là của những năm 1904 – 1910: niên đại, quan điểm, tình trạng nghiên cứu có thể đã khác ngày nay.
      </p>
      <dl className="src-stats">
        <div><dt>{heads?.length ?? '…'}</dt><dd>mục Grove (A – Z, 5 tập)</dd></div>
        <div><dt>{heads ? done : '…'}</dt><dd>đã có tiếng Việt</dd></div>
      </dl>
      <div className="gv-bar">
        {!n && (
          <nav className="gv-letters" aria-label="Vần">
            {LETTERS.map((l) => (
              <button key={l} aria-pressed={letter === l} onClick={() => (setLetter(l), setLimit(60))}>
                {l.toUpperCase()}
              </button>
            ))}
          </nav>
        )}
        <select value={kind} onChange={(e) => setKind(e.target.value as '' | Kind)} className="src-select h-9 rounded-full px-3 text-[13px]" aria-label="Loại mục">
          {KINDS.map((k) => (
            <option key={k.id} value={k.id}>{k.label}</option>
          ))}
        </select>
        <label className="flex items-center gap-1.5 text-[13px] text-[var(--color-ink-muted)]">
          <input type="checkbox" checked={onlyVi} onChange={(e) => setOnlyVi(e.target.checked)} /> Chỉ mục đã có tiếng Việt
        </label>
      </div>
      {!heads && <p className="text-[14px] text-[var(--color-ink-faint)]">Đang tải…</p>}
      {heads && <p className="text-[12.5px] text-[var(--color-ink-faint)]">{list.length} mục{n ? ` khớp “${q}”` : ` vần ${letter.toUpperCase()}`}</p>}
      <ul className="gv-list">
        {list.slice(0, limit).map((h) => (
          <GroveRow key={h.id} h={h} open={open === h.id} onToggle={() => setOpen(open === h.id ? null : h.id)} />
        ))}
      </ul>
      {list.length > limit && (
        <button className="text-[13px] text-[var(--color-gold)] underline underline-offset-4" onClick={() => setLimit(limit + 120)}>
          Xem thêm {Math.min(120, list.length - limit)} mục
        </button>
      )}
    </section>
  )
}

/** `*chữ*` in the Vietnamese text (titles, foreign words) → <i>. */
const italics = (s: string) => s.split(/\*([^*\n]+)\*/).map((x, i) => (i % 2 ? <i key={i}>{x}</i> : x))

const KIND_LABEL: Record<Kind, string> = { term: 'Thuật ngữ', person: 'Nhân vật', work: 'Tác phẩm', institution: 'Tổ chức' }

function GroveRow({ h, open, onToggle }: { h: Head; open: boolean; onToggle: () => void }) {
  const [entry, setEntry] = useState<Entry | null>(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    if (!open || entry) return
    let live = true
    loadShard(h.s).then(
      (all) => live && setEntry(all.find((e) => e.id === h.id) ?? null),
      () => live && setFailed(true),
    )
    return () => {
      live = false
    }
  }, [open, entry, h])
  return (
    <li className="gv-item">
      <button className="gv-head" aria-expanded={open} onClick={onToggle}>
        <span className="min-w-0 flex-1">
          <span className="gv-title">{h.t ?? h.h}</span>
          {h.t && <span className="gv-orig">{h.h}</span>}
          {h.g && !open && <span className="gv-gist">{h.g}</span>}
        </span>
        <span className="gv-meta">
          {KIND_LABEL[h.k]}
          <br />{h.a ? 'Phụ lục, ' : ''}t. {ROMAN[h.v]}, tr. {h.p}
        </span>
      </button>
      {open && (
        <div className="gv-body">
          {failed && <p className="text-[13px] text-[var(--color-ink-faint)]">Không tải được mục này (cần mạng lần đầu).</p>}
          {!entry && !failed && <p className="text-[13px] text-[var(--color-ink-faint)]">Đang tải…</p>}
          {entry?.vi && (
            <div className="gv-vi">
              {entry.vi.split(/\n{2,}/).map((p, i) => (
                <p key={i}>{italics(p)}</p>
              ))}
            </div>
          )}
          {entry && !entry.vi && <p className="text-[13px] text-[var(--color-ink-faint)]">Mục này chưa có phần tiếng Việt; dưới đây là nguyên văn.</p>}
          {entry && (
            <details className="gv-en" open={!entry.vi}>
              <summary>Nguyên văn — Grove, tập {ROMAN[entry.vol]} ({YEAR[entry.vol]}){entry.app ? ', Phụ lục' : ''}, tr. {entry.page}</summary>
              <div lang="en">
                {entry.en.split(/\n{2,}/).slice(0, 400).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          )}
          {entry && (
            <a className="gv-scan" href={`https://archive.org/details/${SCAN[entry.vol]}/page/n${entry.leaf}/mode/1up`} target="_blank" rel="noreferrer">
              Xem bản quét trang {entry.page} <ArrowUpRightIcon width={11} height={11} />
            </a>
          )}
        </div>
      )}
    </li>
  )
}
