import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { update } from '../../progress'
import type { Save } from '../../engine/save'
import type { ArcDef } from '../../engine/types'
import { attempt, effects } from '../../engine/runtime'
import type { Result } from '../../engine/puzzles'
import { DIR_VI, directionsOf, markEffects, noteName, progressOf, type ActivityDef, type Mark, type MusicNote, type SequenceDef } from '../../engine/academic'
import { UmreHost } from '../../../../umre/runtime/host'
import type { AnalysisResult } from '../../../../umre/analysis/types'
import { PuzzleBody } from '../Arc'
import { BASIS, clipVolume, setClipVolume, useEscape } from '../arcShared'
import { Refs } from '../DocumentView'
import { ScoreView } from './ScoreView'
import { umreScoreOf } from './data'

const KIND_VI: Record<ActivityDef['kind'], string> = { listening: 'Phân tích thính giác', score: 'Khảo sát bản nhạc', analysis: 'Phân tích âm nhạc', history: 'Điều tra tư liệu', puzzle: 'Câu đố học thuật' }
const LEN_VI: Record<number, string> = { 960: 'nốt tròn', 480: 'nốt trắng', 240: 'nốt đen', 120: 'nốt móc đơn' }

/** in-progress choices of an activity (notes looked at, a note picked) kept for the tab: closing loses nothing */
const memo = {
  get(key: string): string[] {
    try {
      return JSON.parse(sessionStorage.getItem(`journey:ac:${key}`) ?? '[]')
    } catch {
      return []
    }
  },
  set(key: string, v: string[]) {
    try {
      sessionStorage.setItem(`journey:ac:${key}`, JSON.stringify(v))
    } catch {
      /* no storage: kept for this opening only */
    }
  },
}
const mark = (arc: ArcDef, a: ActivityDef, ms: Mark[]) => update((s) => effects(arc, markEffects(a, ms), s))

/**
 * A sequence of academic activities at one place of the story. Each step says what it is for and why here, shows the
 * UMK frame it rests on, and gets its result from the system that owns it: the puzzle system grades puzzles (from
 * their data), UMRE analyses the notes, UMK supplies the concepts. Every result says where it came from.
 */
export default function AcademicPanel({ arc, seq, save, onClose }: { arc: ArcDef; seq: SequenceDef; save: Save; onClose: () => void }) {
  useEscape(onClose)
  const [at, setAt] = useState(() => Number(memo.get(`${seq.id}:at`)[0] ?? 0) || 0)
  const step = seq.steps[Math.min(at, seq.steps.length - 1)]
  const go = (i: number) => {
    setAt(i)
    memo.set(`${seq.id}:at`, [String(i)])
  }
  return (
    <div className="dv ac" role="dialog" aria-label={`Hoạt động học thuật: ${seq.title}`}>
      <div className="dv-inner">
        <header className="dv-head">
          <p className="jr-kicker">Hoạt động học thuật</p>
          <h3>{seq.title}</h3>
          <p className="ar-small">
            <span className={`st-basis is-${seq.basis}`}>{BASIS[seq.basis]}</span> {seq.note}
          </p>
          <button className="ar-close" onClick={onClose} aria-label="Đóng hoạt động">✕</button>
        </header>
        {seq.steps.length > 1 && (
          <nav className="ac-steps" aria-label="Các bước">
            {seq.steps.map((s, i) => {
              const p = progressOf(save, s)
              return (
                <button key={s.id} className={`ac-step${i === at ? ' is-on' : ''}${p.done ? ' is-done' : ''}`} onClick={() => go(i)} aria-current={i === at ? 'step' : undefined}>
                  <b>{i + 1}</b> {s.title} {p.done ? '✓' : ''}
                </button>
              )
            })}
          </nav>
        )}
        <Activity key={step.id} arc={arc} a={step} save={save} />
        <div className="ac-foot">
          {at > 0 && <button className="jr-ghost" onClick={() => go(at - 1)}>← Bước trước</button>}
          {at < seq.steps.length - 1 ? (
            <button className="jr-cta" onClick={() => go(at + 1)}>Bước tiếp →</button>
          ) : (
            <button className="jr-cta" onClick={onClose}>Về khung cảnh</button>
          )}
        </div>
      </div>
    </div>
  )
}

function Activity({ arc, a, save }: { arc: ArcDef; a: ActivityDef; save: Save }) {
  const p = progressOf(save, a)
  const datum = arc.scores?.find((m) => m.id === a.music)
  return (
    <section className="ac-act" data-testid={`ac-${a.id}`}>
      <p className="jr-kicker">{KIND_VI[a.kind]}</p>
      <h4 className="ac-title">{a.title}</h4>
      <p className="ac-aim"><b>Mục tiêu:</b> {a.aim}</p>
      <p className="ar-small">{a.context}</p>
      <p className="ac-marks" aria-label="Tiến trình hoạt động">
        <span className={p.tried ? 'is-on' : ''}>Đã thử</span>
        <span className={p.done ? 'is-on' : ''}>Đã xong</span>
        <span className={p.correct ? 'is-on' : ''}>Đúng tiêu chí</span>
        <span className={p.explained ? 'is-on' : ''}>Đã xem giải thích</span>
      </p>
      {a.knowledge?.length ? <Knowledge ids={a.knowledge} /> : null}
      {(a.kind === 'listening' || a.kind === 'history') && a.puzzle && <PuzzleStep arc={arc} a={a} save={save} volume={a.kind === 'listening'} />}
      {a.kind === 'score' && datum && <Survey arc={arc} a={a} datum={datum} save={save} />}
      {a.kind === 'analysis' && datum && <Analysis arc={arc} a={a} datum={datum} />}
      {a.kind === 'puzzle' && datum && a.puzzle && <Compare arc={arc} a={a} datum={datum} save={save} />}
    </section>
  )
}

/** The UMK frame: each concept as UMK records it (title, summary, provenance), loaded on demand; a failure says so. */
function Knowledge({ ids }: { ids: string[] }) {
  const [units, setUnits] = useState<{ id: string; title: string; summary?: string; kind: string; verification: string; href: string | null }[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [tries, setTries] = useState(0)
  useEffect(() => {
    let live = true
    import('../../../../umk/api')
      .then((m) => {
        const got = ids.flatMap((id) => {
          const u = m.getKnowledge(id as Parameters<typeof m.getKnowledge>[0])
          return u ? [{ id, title: u.title, summary: u.summary, kind: u.provenance.kind, verification: u.provenance.verification, href: u.href }] : []
        })
        if (live) setUnits(got)
      })
      .catch(() => live && setFailed(true))
    return () => {
      live = false
    }
  }, [ids, tries])
  const V: Record<string, string> = { verified: 'đã kiểm chứng', partial: 'kiểm chứng một phần', unverified: 'chưa kiểm chứng', disputed: 'đang tranh luận' }
  return (
    <details className="ac-umk">
      <summary>Khung tri thức (UMK)</summary>
      {failed ? (
        <p className="ar-small" role="alert">
          Không tải được tri thức UMK. <button className="jr-ghost is-small" onClick={() => (setFailed(false), setTries((t) => t + 1))}>Thử lại</button>
        </p>
      ) : !units ? (
        <p className="ar-small">Đang tải…</p>
      ) : (
        <ul>
          {units.map((u) => (
            <li key={u.id}>
              {u.href ? <Link to={u.href}>📖 {u.title}</Link> : <b>{u.title}</b>}
              {u.summary && <span className="ar-small"> — {u.summary}</span>}
              <small className="st-prov">UMK: nguồn loại {u.kind} · {V[u.verification] ?? u.verification}</small>
            </li>
          ))}
        </ul>
      )}
    </details>
  )
}

/** A puzzle of the arc, graded by the existing puzzle system from its own data; the explanation follows any answer. */
function PuzzleStep({ arc, a, save, volume }: { arc: ArcDef; a: ActivityDef; save: Save; volume: boolean }) {
  const puzzle = arc.puzzles.find((x) => x.id === a.puzzle)!
  const [result, setResult] = useState<Result | null>(null)
  const [vol, setVol] = useState(clipVolume)
  const solved = !!save.puzzles[puzzle.id]?.solved
  const submit = (given: unknown) => {
    let r: Result | null = null
    update((s) => {
      const out = attempt(arc, puzzle.id, given, 0, s)
      r = out.result
      let next = effects(arc, markEffects(a, ['tried']), out.save)
      if (out.result.ok && !s.flags.includes(`ac:${a.id}:done`)) next = effects(arc, [...markEffects(a, ['done', 'correct']), ...(a.onDone ?? [])], next)
      return next
    })
    setResult(r)
  }
  const shown = result || solved
  useEffect(() => {
    if (shown && !save.flags.includes(`ac:${a.id}:explained`)) mark(arc, a, ['explained'])
  }, [shown, save.flags, arc, a])
  const evRefs = puzzle.type === 'classify' ? Object.keys(puzzle.answer as Record<string, string>).map((k) => `ev:bt/${k}`).filter((id) => arc.evidence.some((e) => e.id === id)) : []
  return (
    <div className="ac-puzzle">
      <p className="ac-origin">Chấm theo dữ liệu của câu đố (hệ câu đố Hành trình) — không phải phân tích của UMRE.</p>
      {volume && (
        <label className="ac-vol">
          Âm lượng
          <input type="range" min={0} max={1} step={0.05} value={vol} onChange={(e) => (setVol(Number(e.target.value)), setClipVolume(Number(e.target.value)))} />
        </label>
      )}
      <p className="ar-instr">{puzzle.instructions}</p>
      <PuzzleBody arc={arc} puzzle={puzzle} save={save} wrong={result && !result.ok ? result.wrong : []} onSubmit={submit} locked={false} />
      {result && <p className={`ac-verdict${result.ok ? ' is-ok' : ''}`} role="status">{result.ok ? 'Đúng theo tiêu chí của câu đố.' : 'Chưa đúng — các chỗ đánh dấu chưa khớp.'}</p>}
      {shown && (
        <div className="ac-explain">
          <p className="jr-kicker">Giải thích</p>
          <p className="jr-line">{puzzle.explanation}</p>
          <Refs arc={arc} refs={[...evRefs, ...(puzzle.sources ?? [])]} />
        </div>
      )}
    </div>
  )
}

/** Reading the notes: every value shown comes from the structured note the drawing was made from. */
function Survey({ arc, a, datum, save }: { arc: ArcDef; a: ActivityDef; datum: NonNullable<ArcDef['scores']>[number]; save: Save }) {
  const key = `${a.id}:seen`
  const [seen, setSeen] = useState<Set<string>>(() => new Set(memo.get(key)))
  const [picked, setPicked] = useState<{ n: MusicNote; i: number } | null>(null)
  const p = progressOf(save, a)
  const pick = (n: MusicNote, i: number) => {
    setPicked({ n, i })
    const next = new Set(seen).add(n.id)
    setSeen(next)
    memo.set(key, [...next])
    if (!p.tried) mark(arc, a, ['tried'])
    if (!p.done && next.size >= (a.minNotes ?? 1)) mark(arc, a, ['done', 'explained'])
  }
  const bar = (i: number) => {
    const before = datum.notes.slice(0, i).reduce((t, n) => t + n.dur, 0)
    return Math.floor(before / ((datum.time[0] * 960) / datum.time[1])) + 1
  }
  return (
    <div>
      <ScoreView datum={datum} picked={picked?.n.id ?? null} seen={seen} onPick={pick} label={datum.title} />
      <p className="ar-small">Đã xem {seen.size}/{datum.notes.length} nốt{a.minNotes ? ` · cần ${a.minNotes}` : ''}. {datum.note}</p>
      {picked && (
        <dl className="ac-info" aria-live="polite">
          <dt>Nốt</dt>
          <dd>thứ {picked.i + 1} · {noteName(picked.n)}</dd>
          <dt>Độ dài</dt>
          <dd>{LEN_VI[picked.n.dur] ?? `${picked.n.dur} tick`}</dd>
          <dt>Ô</dt>
          <dd>{bar(picked.i)} (chia ô để tìm chỗ)</dd>
          <dt>Nguồn</dt>
          <dd><span className={`st-basis is-${datum.basis}`}>{BASIS[datum.basis]}</span> dữ liệu trang</dd>
        </dl>
      )}
    </div>
  )
}

/** UMRE, through its worker host: a real analysis of the notes. Facts, hypotheses (with confidence) and limits kept apart. */
function Analysis({ arc, a, datum }: { arc: ArcDef; a: ActivityDef; datum: NonNullable<ArcDef['scores']>[number] }) {
  const host = useRef<UmreHost | null>(null)
  const [state, setState] = useState<{ phase: 'idle' | 'running' | 'done' | 'failed'; result?: AnalysisResult; error?: string; ms?: number }>({ phase: 'idle' })
  useEffect(() => () => host.current?.dispose?.(), [])
  const run = async () => {
    setState({ phase: 'running' })
    mark(arc, a, ['tried'])
    host.current ??= new UmreHost(() => new Worker(new URL('../../../../umre/runtime/umre.worker.ts', import.meta.url), { type: 'module' }) as never)
    const out = await host.current.run({ op: 'analyze', score: umreScoreOf(datum), modules: a.reasoning!.modules }, { timeMs: 20_000 })
    if (out.status === 'done' && out.response.op === 'analyze') {
      setState({ phase: 'done', result: out.response.result, ms: out.elapsedMs })
      mark(arc, a, ['done', 'explained'])
    } else setState({ phase: 'failed', error: out.status === 'error' ? out.error : out.status === 'timeout' ? 'quá thời gian' : out.status })
  }
  const r = state.result
  const findings = useMemo(() => r?.modules.flatMap((m) => m.findings) ?? [], [r])
  const KIND: Record<string, string> = { fact: 'Dữ kiện (UMRE tính từ nốt)', hypothesis: 'Giả thuyết (UMRE)', interpretation: 'Diễn giải (UMRE)', 'rule-check': 'Kiểm ràng buộc (UMRE)', premise: 'Tiền đề', estimate: 'Ước lượng (UMRE)' }
  return (
    <div className="ac-analysis">
      <p className="ac-origin">{a.reasoning?.why}</p>
      <p className="ar-small">Giọng chủ: tác vụ này không dùng giọng chủ, nên không đặt và không suy đoán giọng chủ.</p>
      {state.phase !== 'done' && (
        <button className="jr-cta" onClick={run} disabled={state.phase === 'running'}>
          {state.phase === 'running' ? 'UMRE đang phân tích…' : state.phase === 'failed' ? 'Thử lại phân tích' : 'Phân tích giai điệu (UMRE)'}
        </button>
      )}
      {state.phase === 'failed' && (
        <p className="ar-small" role="alert">Không chạy được UMRE ({state.error}). Không có kết quả nào được tạo thay. Lựa chọn của bạn ở các bước khác vẫn giữ nguyên.</p>
      )}
      {r && (
        <div className="ac-findings" data-testid="ac-findings">
          <p className="ar-small">
            Kết quả UMRE · trạng thái {r.status} · {r.modules.map((m) => `${m.module}@${m.version}`).join(', ')} · {state.ms} ms
          </p>
          <ul>
            {findings.map((f) => (
              <li key={f.id} className={`ac-finding is-${f.kind}`}>
                <span className={`st-know is-${f.kind === 'fact' ? 'confirmed' : 'hypothesis'}`}>{KIND[f.kind] ?? f.kind}</span> {f.text.basic}
                {f.confidence && <small> · độ tin cậy {Math.round(f.confidence.value * 100)}% ({f.confidence.basis})</small>}
              </li>
            ))}
          </ul>
          {r.modules.some((m) => m.limits.length) && (
            <p className="ar-small">Giới hạn: {r.modules.flatMap((m) => m.limits).join(' · ')}</p>
          )}
        </div>
      )}
    </div>
  )
}

/** The comparison puzzle: pick a note on the score; graded by the puzzle system; feedback says what the data shows at that step. */
function Compare({ arc, a, datum, save }: { arc: ArcDef; a: ActivityDef; datum: NonNullable<ArcDef['scores']>[number]; save: Save }) {
  const puzzle = arc.puzzles.find((x) => x.id === a.puzzle)!
  const key = `${a.id}:pick`
  const [pick, setPick] = useState<number | null>(() => (memo.get(key)[0] !== undefined ? Number(memo.get(key)[0]) : null))
  const [result, setResult] = useState<Result | null>(null)
  const solved = !!save.puzzles[puzzle.id]?.solved
  const now = directionsOf(datum.notes)
  const old = datum.old?.dirs ?? []
  const choose = (_: MusicNote, i: number) => {
    setPick(i)
    memo.set(key, [String(i)])
  }
  const submit = () => {
    if (pick === null) return
    let r: Result | null = null
    update((s) => {
      const out = attempt(arc, puzzle.id, pick, 0, s)
      r = out.result
      let next = effects(arc, markEffects(a, ['tried']), out.save)
      if (out.result.ok && !s.flags.includes(`ac:${a.id}:done`)) next = effects(arc, [...markEffects(a, ['done', 'correct']), ...(a.onDone ?? [])], next)
      return next
    })
    setResult(r)
  }
  const shown = result?.ok || solved
  useEffect(() => {
    if (shown && !save.flags.includes(`ac:${a.id}:explained`)) mark(arc, a, ['explained'])
  }, [shown, save.flags, arc, a])
  // what the data says at the chosen note: the step reaching it, in both witnesses
  const at = pick !== null && pick > 0 ? { old: old[pick - 1], now: now[pick - 1] } : null
  return (
    <div className="ac-compare">
      <p className="ac-origin">Chấm theo dữ liệu của câu đố: hướng neume cũ (dữ liệu mảnh cạo) so với cao độ nốt mới. Không phải kết quả của UMRE.</p>
      <p className="ar-instr">{puzzle.instructions}</p>
      {datum.old && (
        <p className="ac-old" aria-label={datum.old.label}>
          <b>{datum.old.label}:</b> {old.map((d, i) => <span key={i} title={`bước ${i + 1}→${i + 2}: ${DIR_VI[d]}`}>{d === 'up' ? '↗' : d === 'down' ? '↘' : '→'}</span>)}
        </p>
      )}
      <ScoreView datum={datum} picked={pick !== null ? datum.notes[pick].id : null} seen={new Set()} onPick={choose} label={`${datum.title} — chọn nốt`} />
      <button className="jr-cta" onClick={submit} disabled={pick === null || !!shown}>{pick === null ? 'Chọn một nốt' : `Chọn nốt ${pick + 1}`}</button>
      {at && result && !result.ok && (
        <p className="ac-verdict" role="status">
          Chưa phải. Ở bước tới nốt {pick! + 1}: neume cũ {DIR_VI[at.old]}, bản chép lại {DIR_VI[at.now]} — {at.old === at.now ? 'hai bên khớp hướng.' : 'khác hướng.'} Thử bước khác.
        </p>
      )}
      {result && !result.ok && pick === 0 && <p className="ac-verdict" role="status">Nốt đầu chưa có bước nào để so — chọn nốt khác.</p>}
      {shown && (
        <div className="ac-explain">
          <p className="ac-verdict is-ok" role="status">Đúng theo dữ liệu.</p>
          <p className="jr-line">{puzzle.explanation}</p>
          <p className="ar-small">Ghi vào sổ chứng cứ: “Hai bản chép, một chỗ rẽ” (hư cấu).</p>
        </div>
      )}
    </div>
  )
}
