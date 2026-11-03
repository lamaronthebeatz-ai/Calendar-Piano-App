import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ScrollArea } from '../../components/ScrollArea'
import { ArrowUpRightIcon } from '../../components/icons'
import { CATEGORIES } from '../theory/articles'
import { normalize } from '../theory/wiki'
import '../sources/sources.css'
import './terms.css'
import termsUrl from './terms.json?url'

/** One glossary entry (scripts/terms/build.py). */
interface Term {
  id: string
  vi: string
  /** the article's search keywords and the Vietnamese Wikipedia title — related words, not always synonyms */
  variants: string[]
  category: keyof typeof CATEGORIES
  en: string
  ru?: string
  de?: string
  fr?: string
  it?: string
  viwiki?: string
  qid: string
  def: string
  /** occurrences of each Vietnamese name in the library's text */
  uses: Record<string, number>
}

const LANGS = ['en', 'ru', 'de', 'fr', 'it'] as const
const LANG_LABEL = { en: 'Anh', ru: 'Nga', de: 'Đức', fr: 'Pháp', it: 'Ý' }

/** The multilingual glossary: /terms (search in any language, ?q= to open with a query). */
export function TermsPage() {
  const [params, setParams] = useSearchParams()
  const [terms, setTerms] = useState<Term[] | null>(null)
  const [cat, setCat] = useState('')
  const q = params.get('q') ?? ''
  useEffect(() => {
    let live = true
    // a plain asset fetched when the page opens (typing a 160 KB JSON import slows the type checker)
    fetch(termsUrl)
      .then((r) => r.json())
      .then((t: Term[]) => live && setTerms(t), () => {})
    return () => {
      live = false
    }
  }, [])
  const list = useMemo(() => {
    if (!terms) return []
    const n = normalize(q)
    return terms.filter(
      (t) =>
        (!cat || t.category === cat) &&
        (!n || t.id === q || normalize([t.vi, ...t.variants, ...LANGS.map((l) => t[l] ?? '')].join(' | ')).includes(n)),
    )
  }, [terms, q, cat])
  const cats = useMemo(() => [...new Set(terms?.map((t) => t.category))], [terms])

  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">Thuật ngữ</h1>
        </div>
      </div>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-8">
        <header className="animate-float-up">
          <p className="brand-eyebrow">Thuật ngữ đa ngữ</p>
          <h2 className="mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">Một khái niệm, năm thứ tiếng</h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
            Tên tiếng Việt là tên thư viện dùng (tên bài viết về khái niệm), kèm các từ khoá của bài và số lần mỗi từ xuất hiện trong toàn thư viện. Tên tiếng Anh, Nga, Đức, Pháp, Ý là nhãn của cùng khái niệm trên Wikidata (dữ liệu mở CC0), mỗi mục có liên kết để kiểm. Chưa đối chiếu với tiêu chuẩn TCVN 14301:2024 (văn bản không công bố miễn phí).
          </p>
          <dl className="src-stats mt-4">
            <div><dt>{terms?.length ?? '…'}</dt><dd>thuật ngữ</dd></div>
            <div><dt>{terms?.filter((t) => t.ru).length ?? '…'}</dt><dd>có tên tiếng Nga</dd></div>
          </dl>
        </header>
        <div className="flex flex-wrap items-center gap-2">
          <input value={q} onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })} placeholder="Tìm bằng tiếng Việt, Anh, Nga, Đức, Pháp, Ý…" className="hero-search h-10 w-full rounded-full px-4 text-[14px] outline-none sm:w-auto sm:min-w-0 sm:flex-1" />
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="src-select h-10 rounded-full px-3 text-[13px]">
            <option value="">Mọi chủ đề</option>
            {cats.map((c) => (
              <option key={c} value={c}>{CATEGORIES[c].title}</option>
            ))}
          </select>
        </div>
        {!terms && <p className="text-[14px] text-[var(--color-ink-faint)]">Đang tải…</p>}
        {terms && <p className="text-[12.5px] text-[var(--color-ink-faint)]">{list.length} thuật ngữ</p>}
        <ul className="term-list">
          {list.map((t) => (
            <li key={t.id} className="term-card">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Link to={`/theory/${t.id}`} className="term-vi">{t.vi}</Link>
                <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-gold)]">{CATEGORIES[t.category].title}</span>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">{t.def}</p>
              <dl className="term-langs">
                {LANGS.filter((l) => t[l]).map((l) => (
                  <div key={l}><dt>{LANG_LABEL[l]}</dt><dd lang={l}>{t[l]}</dd></div>
                ))}
              </dl>
              {(t.variants.length > 0 || t.uses[t.vi] > 0) && (
                <p className="term-uses">
                  Số lần trong thư viện: <b>{t.vi}</b> {t.uses[t.vi] ?? 0}
                  {t.variants.map((v) => (
                    <span key={v}> · {v} {t.uses[v] ?? 0}{v === t.viwiki ? ' (tên bài Wikipedia tiếng Việt)' : ''}</span>
                  ))}
                </p>
              )}
              <a href={`https://www.wikidata.org/wiki/${t.qid}`} target="_blank" rel="noreferrer" className="term-src">
                Wikidata {t.qid} <ArrowUpRightIcon width={11} height={11} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  )
}
