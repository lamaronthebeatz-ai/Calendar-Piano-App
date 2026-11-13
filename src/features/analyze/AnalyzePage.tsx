import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ChangeEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import type { VerovioToolkit } from 'verovio/esm'
import { ScrollArea } from '../../components/ScrollArea'
import { TrashIcon } from '../../components/icons'
import { usePageLoading } from '../../layout/pageCurtain'
import { engraver, render } from '../compose/engrave'
import { toMei } from '../compose/mei'
import { fromMusicXml, unzipMxl } from '../compose/exchange'
import type { Score } from '../compose/model'
import { findArticle } from '../theory/wiki'
import { annotateMei, COLORS, DEFAULT_LAYERS, labelOf, type Layers, type Notation } from './annotate'
import type { Analysis } from './engine/index'
import { barNumbering, keyName, report, toMarkdown, type Run } from './engine/report'
import { explain } from './explain'
import { fromMidi } from './midi'
import { runAnalysis } from './runAnalysis'
import { SAMPLES, sampleUrl } from './samples'
import { addSaved, removeSaved, updateSaved, useSaved, type Lens } from './store'
import { THEORY, type Concept } from './links'
import { createBrainNote } from '../brain/store'
import { updateProject, useProjects } from '../research/store'
import { download } from '../research/exportDraft'
import '../research/research.css'
import '../sources/sources.css'
import './analyze.css'

const COMPOSE = 'compose:scores'
function composeScores(): Score[] {
  try {
    const v = JSON.parse(localStorage.getItem(COMPOSE) ?? '[]')
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

const LENSES: { id: Lens; label: string; hint: string }[] = [
  { id: 'classical', label: 'Cổ điển', hint: 'Hoà âm chức năng Nga – Xô viết' },
  { id: 'jazz', label: 'Jazz', hint: 'Ký hiệu hợp âm, II–V–I, thang âm' },
  { id: 'xx', label: 'TK XX', hint: 'Thang âm, tập cao độ, 12 âm' },
]

/** Score analysis: /analyze (the shelf of pieces), /analyze/:id (one piece analysed, on the score and in words). */
export function AnalyzePage() {
  const { id } = useParams()
  return (
    <ScrollArea className="relative h-full overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 lg:px-8">
          {id && <Link to="/analyze" className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← Bản nhạc</Link>}
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)] lg:text-[20px]">{id ? '' : 'Phân tích tác phẩm'}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 lg:px-8">{id ? <Work key={id} id={id} /> : <Shelf />}</div>
    </ScrollArea>
  )
}

/* ---------------------------------------------------------------- the shelf */

function Shelf() {
  const navigate = useNavigate()
  const saved = useSaved()
  const [err, setErr] = useState('')
  const own = useMemo(() => composeScores(), [])
  const input = useRef<HTMLInputElement>(null)
  async function onFile(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    e.target.value = ''
    if (!f) return
    setErr('')
    try {
      const name = f.name.replace(/\.[^.]+$/, '')
      const buf = await f.arrayBuffer()
      const score = /\.midi?$/i.test(f.name) ? fromMidi(buf, name) : fromMusicXml(/\.mxl$/i.test(f.name) ? await unzipMxl(buf) : new TextDecoder().decode(buf), name)
      navigate(`/analyze/${addSaved(score, 'import').id}`)
    } catch (x) {
      setErr(x instanceof Error ? x.message : String(x))
    }
  }
  return (
    <>
      <header className="animate-float-up">
        <p className="brand-eyebrow">Phân tích tác phẩm</p>
        <h2 className="mt-1 font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[34px]">Đọc bản nhạc như một nhà phân tích</h2>
        <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          Đưa vào một bản nhạc (MusicXML hoặc MIDI). Hệ thống nhận diện khoá, nhịp, hoá biểu và dấu hoá bất thường, đọc hợp âm và chức năng của chúng, tìm giọng, ly điệu, chuyển giọng và câu kết, rồi ghi tất cả lên bản nhạc và thành văn bản bên dưới. Mỗi thuật ngữ mở thẳng bài lý thuyết trong thư viện. Ba lăng kính: <b>Cổ điển</b> (hệ Nga – Xô viết), <b>Jazz</b> và <b>Thế kỷ XX</b>.
        </p>
      </header>
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={() => input.current?.click()} className="btn-gold rounded-full px-5 py-2.5 text-[13.5px] font-medium">Nhập bản nhạc…</button>
        <span className="text-[12.5px] text-[var(--color-ink-faint)]">.musicxml, .xml, .mxl, .mid — bản PDF: xuất MusicXML từ MuseScore trước</span>
        <input ref={input} type="file" hidden accept=".musicxml,.xml,.mxl,.mid,.midi,application/vnd.recordare.musicxml+xml,audio/midi" onChange={onFile} />
      </div>
      {err && <p className="text-[13px] text-[var(--color-status-cancelled)]">{err}</p>}

      <section className="space-y-3">
        <h3 className="an-h">Bản mẫu</h3>
        <ul className="an-grid">
          {SAMPLES.map((s) => (
            <li key={s.id}>
              <Link to={`/analyze/${s.id}`} className="an-card">
                <span className="an-card-lens">{LENSES.find((l) => l.id === s.lens)!.label}</span>
                <span className="an-card-title">{s.title}</span>
                <span className="an-card-sub">{s.composer} · {s.year}</span>
                <span className="an-card-note">{s.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {saved.length > 0 && (
        <section className="space-y-3">
          <h3 className="an-h">Bản của bạn</h3>
          <ul className="src-list">
            {saved.map((s) => (
              <li key={s.id} className="flex items-center gap-2">
                <Link to={`/analyze/${s.id}`} className="src-row min-w-0 flex-1">
                  <span className="min-w-0 flex-1">
                    <span className="src-title">{s.title}</span>
                    <span className="src-sub">{s.from === 'compose' ? 'Từ trình soạn nhạc' : 'Nhập từ tệp'} · {new Date(s.created).toLocaleDateString('vi-VN')}</span>
                  </span>
                </Link>
                <button aria-label={`Xoá ${s.title}`} onClick={() => confirm(`Xoá “${s.title}” khỏi danh sách phân tích?`) && removeSaved(s.id)} className="p-2 text-[var(--color-ink-faint)] hover:text-[var(--color-status-cancelled)]">
                  <TrashIcon width={15} height={15} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {own.length > 0 && (
        <section className="space-y-3">
          <h3 className="an-h">Từ trình soạn nhạc</h3>
          <ul className="src-list">
            {own.map((s) => (
              <li key={s.id}>
                <Link to={`/analyze/c-${s.id}`} className="src-row">
                  <span className="min-w-0 flex-1">
                    <span className="src-title">{s.title}</span>
                    <span className="src-sub">{s.measures} ô · sửa {new Date(s.updated).toLocaleDateString('vi-VN')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

/* ---------------------------------------------------------------- one piece */

type Loaded = { score: Score; title: string; sub?: string; lens: Lens; savedId?: string }

function useScore(id: string): { data: Loaded | null; error: string } {
  const saved = useSaved()
  const sample = SAMPLES.find((s) => s.id === id)
  const [fetched, setFetched] = useState<{ id: string; data?: Loaded; error?: string } | null>(null)
  const mine = saved.find((s) => s.id === id)
  const local = useMemo<{ data: Loaded | null; error: string } | null>(() => {
    if (sample) return null
    if (id.startsWith('c-')) {
      const s = composeScores().find((x) => x.id === id.slice(2))
      return s ? { data: { score: s, title: s.title, sub: 'Bản trong trình soạn nhạc', lens: 'classical' }, error: '' } : { data: null, error: 'Không thấy bản nhạc này trong trình soạn nhạc trên máy.' }
    }
    if (mine) return { data: { score: mine.score, title: mine.title, sub: mine.from === 'compose' ? 'Từ trình soạn nhạc' : 'Nhập từ tệp', lens: mine.lens ?? 'classical', savedId: mine.id }, error: '' }
    return { data: null, error: 'Không có bản nhạc này trên máy.' }
  }, [id, sample, mine])
  useEffect(() => {
    if (!sample) return
    let live = true
    fetch(sampleUrl(sample))
      .then((r) => {
        if (!r.ok) throw new Error('Không tải được bản nhạc mẫu.')
        return r.text()
      })
      .then((t) => live && setFetched({ id, data: { score: fromMusicXml(t, sample.title), title: sample.title, sub: `${sample.composer} · ${sample.year}`, lens: sample.lens } }))
      .catch((e: Error) => live && setFetched({ id, error: e.message }))
    return () => {
      live = false
    }
  }, [id, sample])
  if (local) return local
  return fetched?.id === id ? { data: fetched.data ?? null, error: fetched.error ?? '' } : { data: null, error: '' }
}

function Work({ id }: { id: string }) {
  const { data, error } = useScore(id)
  const [lens, setLens] = useState<Lens | null>(null)
  const active = lens ?? data?.lens ?? 'classical'
  // the result is keyed by what it was made from, so a stale one is never shown and "busy" needs no state of its own
  const [result, setResult] = useState<{ key: string; analysis?: Analysis; error?: string } | null>(null)
  const [notation, setNotation] = useState<Notation>('ru')
  const [layers, setLayers] = useState<Layers>(DEFAULT_LAYERS)
  const [pick, setPick] = useState<number | null>(null)
  const [focus, setFocus] = useState<[number, number] | null>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const runKey = data ? `${id}|${active}|${data.score.updated ?? ''}` : ''
  useEffect(() => {
    if (!data) return
    let live = true
    runAnalysis(data.score, { lens: active })
      .then((a) => live && setResult({ key: runKey, analysis: a }))
      .catch((e: Error) => live && setResult({ key: runKey, error: e.message }))
    return () => {
      live = false
    }
  }, [data, active, runKey])
  const analysis = result?.key === runKey ? (result.analysis ?? null) : null
  const failed = result?.key === runKey ? (result.error ?? '') : ''
  const busy = !!data && result?.key !== runKey

  const blocks = useMemo(() => (analysis ? report(analysis) : []), [analysis])
  const numbering = useMemo(() => (analysis ? barNumbering(analysis) : null), [analysis])

  if (error) return <p className="text-[14px] text-[var(--color-ink-muted)]">{error} <Link to="/analyze" className="wiki-link">Về danh sách</Link></p>
  if (!data) return <p className="text-[14px] text-[var(--color-ink-faint)]">Đang mở bản nhạc…</p>

  // a bar reference in the text → bar indices, highlighted on the score
  const toIndex = (n: number) => n - (numbering?.pickup ? 0 : 1)
  const showBars = (b: [number, number]) => {
    setFocus([toIndex(b[0]), toIndex(b[1])])
    setPick(null)
  }
  const onPick = (kind: string, i: number) => {
    if (kind === 'ah') setPick(i)
    if (kind === 'ax') setPick(-1 - i)
    if (kind === 'm') {
      // a tap on a bar: the text scrolls to where it is first named
      const n = i + (numbering?.pickup ? 0 : 1)
      const el = textRef.current?.querySelector(`[data-bar-from="${n}"], [data-bars~="${n}"]`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      el?.classList.add('is-flash')
      setTimeout(() => el?.classList.remove('is-flash'), 1200)
    }
  }

  return (
    <article className="space-y-4">
      <header className="space-y-1">
        <h2 className="font-display text-[26px] font-semibold leading-tight text-[var(--color-ink)]">{data.title}</h2>
        {data.sub && <p className="text-[13px] text-[var(--color-ink-faint)]">{data.sub}</p>}
      </header>

      <div className="an-bar">
        <div className="an-seg" role="radiogroup" aria-label="Lăng kính phân tích">
          {LENSES.map((l) => (
            <button
              key={l.id}
              role="radio"
              aria-checked={active === l.id}
              title={l.hint}
              onClick={() => {
                setLens(l.id)
                if (data.savedId) updateSaved(data.savedId, { lens: l.id })
              }}
              className={clsx(active === l.id && 'is-on')}
            >
              {l.label}
            </button>
          ))}
        </div>
        {active === 'classical' && (
          <div className="an-seg" role="radiogroup" aria-label="Cách ghi">
            {(
              [
                ['ru', 'Nga – Xô viết'],
                ['rn', 'Quốc tế'],
                ['letter', 'Tên hợp âm'],
              ] as [Notation, string][]
            ).map(([k, l]) => (
              <button key={k} role="radio" aria-checked={notation === k} onClick={() => setNotation(k)} className={clsx(notation === k && 'is-on')}>
                {l}
              </button>
            ))}
          </div>
        )}
        <div className="an-chips" aria-label="Lớp hiện trên bản nhạc">
          {(
            [
              ['harmony', 'Hợp âm'],
              ['keys', 'Giọng'],
              ['cadences', 'Câu kết'],
              ['form', 'Hình thức'],
              ['accidentals', 'Dấu hoá bất thường'],
              ['ncts', 'Nốt ngoài hợp âm'],
            ] as [keyof Layers, string][]
          )
            .filter(([k]) => active !== 'xx' || (k !== 'keys' && k !== 'cadences'))
            .map(([k, l]) => (
            <button key={k} aria-pressed={layers[k]} onClick={() => setLayers((x) => ({ ...x, [k]: !x[k] }))} className={clsx('an-chip', layers[k] && 'is-on')}>
              {k === 'accidentals' && <i style={{ background: COLORS.accidental }} />}
              {k === 'ncts' && <i style={{ background: COLORS.nct }} />}
              {l}
            </button>
          ))}
        </div>
      </div>

      {busy && <p className="an-status">Đang phân tích…</p>}
      {failed && <p className="an-status text-[var(--color-status-cancelled)]">{failed}</p>}

      <ScoreView score={data.score} analysis={analysis} layers={layers} notation={notation} focus={focus} pick={pick} onPick={onPick} />

      {analysis && pick !== null && pick >= 0 && analysis.harmony[pick] && <PickCard a={analysis} i={pick} notation={notation} onClose={() => setPick(null)} num={numbering!.num} />}
      {analysis?.xx && pick !== null && pick < 0 && analysis.xx.sonorities[-1 - pick] && <SetCard a={analysis} i={-1 - pick} onClose={() => setPick(null)} num={numbering!.num} />}

      {analysis && analysis.form.sections.length > 1 && <FormDiagram a={analysis} onBars={(b) => setFocus(b)} />}

      {analysis && <ExportBar title={data.title} blocks={blocks} />}

      {analysis && (
        <div ref={textRef} className="an-report prose-theory" data-font="serif">
          {blocks.map((b) => (
            <section key={b.id} aria-labelledby={`an-${b.id}`}>
              <h3 id={`an-${b.id}`}>{b.title}</h3>
              {b.paras.map((p, i) => (
                <p key={i}>
                  <Runs runs={p} onBars={showBars} />
                </p>
              ))}
              {b.table && (
                <div className="an-table-wrap">
                  <table className="an-table">
                    <thead>
                      <tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {b.table.rows.map((r) => (
                        <tr key={r.bar}>
                          <td>
                            <button className="an-barref" data-bar-from={r.bar} onClick={() => showBars([r.bar, r.bar])}>
                              {r.cells[0]}
                            </button>
                          </td>
                          {r.cells.slice(1).map((c, i) => <td key={i}>{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
          <p className="an-foot">
            Phân tích tự động theo luật, đã đối chiếu với bản phân tích của chuyên gia trên các hợp xướng Bach (gốc hợp âm đúng khoảng 84%, giọng khoảng 77%). Chỗ có “?” là chỗ máy chưa chắc — nên xem lại.
          </p>
        </div>
      )}
    </article>
  )
}

/** The form as blocks proportional to their length, one colour per letter; a tap lights the section on the score. */
function FormDiagram({ a, onBars }: { a: Analysis; onBars: (b: [number, number]) => void }) {
  const total = a.score.bars.length
  const { num } = barNumbering(a)
  const hue = (l: string) => [42, 200, 330, 140, 270, 20][(l.charCodeAt(0) - 65) % 6]
  return (
    <figure className="an-form" aria-label="Sơ đồ hình thức">
      <div className="an-form-bar">
        {a.form.sections.map((x, i) => (
          <button key={i} style={{ flexGrow: x.bars[1] - x.bars[0] + 1, ['--h' as string]: hue(x.letter) }} onClick={() => onBars(x.bars)} title={`${x.letter}: ô ${num(a.score.bars[x.bars[0]].start)}–${num(a.score.bars[x.bars[1]].start)}${x.key ? ` · ${x.key}` : ''}`}>
            <b>{x.letter}</b>
            <span>
              {num(a.score.bars[x.bars[0]].start)}–{num(a.score.bars[x.bars[1]].start)}
            </span>
          </button>
        ))}
      </div>
      <figcaption>
        {a.form.guess ? `Gợi ý: ${a.form.guess.name}` : 'Sơ đồ các phần'} · {total} ô
      </figcaption>
    </figure>
  )
}

/** Take the analysis out: a note in the second brain, a project's draft, a Markdown file. */
function ExportBar({ title, blocks }: { title: string; blocks: ReturnType<typeof report> }) {
  const navigate = useNavigate()
  const projects = useProjects()
  const [done, setDone] = useState('')
  const md = () => toMarkdown(`Phân tích: ${title}`, blocks, (c) => THEORY[c])
  return (
    <div className="an-export" aria-label="Xuất bản phân tích">
      <button className="btn-line rounded-full px-4 py-1.5 text-[13px]" onClick={() => navigate(`/brain/${createBrainNote(`Phân tích: ${title}`, md()).id}`)}>
        Lưu vào Sổ tay
      </button>
      {projects.length > 0 && (
        <select
          className="src-select h-9 rounded-full px-3 text-[12.5px]"
          aria-label="Gắn vào đề tài"
          value=""
          onChange={(e) => {
            const p = projects.find((x) => x.id === e.target.value)
            if (!p) return
            updateProject(p.id, { draft: `${p.draft}${p.draft ? '\n\n' : ''}${md()}` })
            setDone(`Đã thêm vào bản nháp “${p.title}”`)
          }}
        >
          <option value="">Gắn vào đề tài…</option>
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
      )}
      <button className="btn-line rounded-full px-4 py-1.5 text-[13px]" onClick={() => download(`phan-tich-${title.replace(/[^\p{L}\p{N}]+/gu, '-').toLowerCase()}.md`, md(), 'text/markdown')}>
        Tải Markdown
      </button>
      {done && <span className="text-[12.5px] text-[var(--color-ink-faint)]">{done}</span>}
    </div>
  )
}

/** Report text: terms open the library, bar references light the bars on the score. */
function Runs({ runs, onBars }: { runs: Run[]; onBars: (b: [number, number]) => void }) {
  return (
    <>
      {runs.map((r, i) => {
        if (r.bars)
          return (
            <button key={i} className="an-barref" data-bar-from={r.bars[0]} data-bars={Array.from({ length: Math.min(40, r.bars[1] - r.bars[0] + 1) }, (_, k) => r.bars![0] + k).join(' ')} onClick={() => onBars(r.bars!)}>
              {r.t}
            </button>
          )
        if (r.concept) return <ConceptLink key={i} concept={r.concept} text={r.t} />
        return <span key={i}>{r.t}</span>
      })}
    </>
  )
}

function ConceptLink({ concept, text }: { concept: Concept; text: string }) {
  const a = findArticle(THEORY[concept])
  return a ? (
    <Link to={`/theory/${a.slug}`} className="wiki-link">
      {text}
    </Link>
  ) : (
    <span>{text}</span>
  )
}

/** What one chord is, why, and where to read about it. */
function PickCard({ a, i, notation, onClose, num }: { a: Analysis; i: number; notation: Notation; onClose: () => void; num: (t: number) => number }) {
  const h = a.harmony[i]
  const ex = explain(a, i)
  return (
    <aside className="an-pick" aria-label="Hợp âm đã chọn">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="an-pick-big">{labelOf(a, i, notation)}</p>
          <p className="text-[12.5px] text-[var(--color-ink-faint)]">
            ô {num(h.chord.start)} · {keyName(h.key)} · {h.reading.ru} · {h.reading.rn} · {ex.symbol}
          </p>
        </div>
        <button onClick={onClose} aria-label="Đóng" className="px-2 text-[18px] text-[var(--color-ink-faint)]">
          ✕
        </button>
      </div>
      <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink)]">
        <Runs runs={ex.runs} onBars={() => {}} />
      </p>
    </aside>
  )
}

/** One sonority read as a pitch-class set. */
function SetCard({ a, i, onClose, num }: { a: Analysis; i: number; onClose: () => void; num: (t: number) => number }) {
  const so = a.xx!.sonorities[i]
  const names = so.pcs.map((p) => ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'][p]).join(' ')
  return (
    <aside className="an-pick" aria-label="Tập cao độ đã chọn">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="an-pick-big">{so.forte ?? `${so.pcs.length} âm`}</p>
          <p className="text-[12.5px] text-[var(--color-ink-faint)]">
            ô {num(so.start)} · dạng nguyên thuỷ {so.prime ?? '—'} · vectơ quãng {so.iv ?? '—'}
          </p>
        </div>
        <button onClick={onClose} aria-label="Đóng" className="px-2 text-[18px] text-[var(--color-ink-faint)]">
          ✕
        </button>
      </div>
      <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink)]">
        Các lớp cao độ: {names}. {so.name ? `Đây là ${so.name}. ` : ''}
        <ConceptLink concept="setTheory" text="Lý thuyết tập cao độ" />: hai hợp âm cùng tên Forte là cùng một "hình dạng" quãng, dù chuyển cao độ hay đảo ngược.
        {so.quartal ? ' Các nốt chồng theo quãng 4 — ' : ''}
        {so.quartal ? <ConceptLink concept="quartal" text="hoà âm quãng 4" /> : null}
        {so.quartal ? '.' : ''}
      </p>
    </aside>
  )
}

/** The engraved score with the analysis written into it; taps on labels and bars are reported. */
function ScoreView({ score, analysis, layers, notation, focus, pick, onPick }: { score: Score; analysis: Analysis | null; layers: Layers; notation: Notation; focus: [number, number] | null; pick: number | null; onPick: (kind: string, i: number) => void }) {
  const [tk, setTk] = useState<VerovioToolkit | null>(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    let live = true
    engraver()
      .then((t) => live && setTk(t))
      .catch(() => live && setFailed(true))
    return () => {
      live = false
    }
  }, [])
  usePageLoading(!tk && !failed)
  const paper = useRef<HTMLDivElement>(null)
  const svgRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(360)
  useEffect(() => {
    const el = paper.current
    if (!el) return
    const ro = new ResizeObserver(() => setWidth(Math.max(280, Math.floor(el.clientWidth) - 4)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const svg = useMemo(() => {
    if (!tk) return ''
    const { mei } = toMei(score)
    const annotated = analysis ? annotateMei(mei, score, analysis, layers, notation) : mei
    return render(tk, annotated, width, width < 600 ? 34 : 40)
  }, [tk, score, analysis, layers, notation, width])
  useLayoutEffect(() => {
    if (svgRef.current) svgRef.current.innerHTML = svg
  }, [svg])
  // highlight bars named in the text, and the chord picked
  useLayoutEffect(() => {
    const root = svgRef.current
    if (!root) return
    root.querySelectorAll('.is-focus, .is-picked').forEach((e) => e.classList.remove('is-focus', 'is-picked'))
    if (focus) {
      let first: Element | null = null
      for (let i = focus[0]; i <= focus[1]; i++) {
        const m = root.querySelector(`[data-id="m${i}"]`)
        if (m) {
          m.classList.add('is-focus')
          first ??= m
        }
      }
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    if (pick !== null) root.querySelector(`[data-id="ah${pick}"]`)?.classList.add('is-picked')
  }, [svg, focus, pick])
  if (failed) return <p className="an-status">Không tải được bộ khắc nhạc (cần mạng lần đầu).</p>
  return (
    <div ref={paper} className="an-paper">
      <div
        ref={svgRef}
        className="an-svg"
        onClick={(e) => {
          // the label's own group, not the text spans inside it (they carry ids of their own)
          const el = (e.target as Element).closest('.harm, .dir')
          const id = el?.getAttribute('data-id') ?? ''
          const m = /^(ah|aj|ak|ac|at|ap|ax)(\d+)$/.exec(id)
          if (m) return onPick(m[1] === 'aj' ? 'ah' : m[1], +m[2])
          const bar = (e.target as Element).closest('[data-id^="m"]')?.getAttribute('data-id')
          if (bar && /^m\d+$/.test(bar)) onPick('m', +bar.slice(1))
        }}
      />
      {!svg && <p className="an-status">Đang khắc bản nhạc…</p>}
    </div>
  )
}
