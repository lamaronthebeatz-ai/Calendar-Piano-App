import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useBack } from '../../hooks/useBack'
import { ArrowLeftIcon } from '../../components/icons'
import { playSequence, type Step } from '../theory/audio'
import {
  barQ, beatQ, inKey, interval, ivOf, keyName, keySig, letterOf, notesOf, pitch, pitchName, SOLFA, upperLower,
  type Key, type Meter, type Motion, type Seg, type Version,
} from './model'
import { check, RULES, totalOf, versionsOf, type Problem, type Report, type VersionSpec, type Violation } from './rules'
import type { SolveResult } from './solver'
import { ScoreSvg, type Mark } from './ScoreSvg'
import './counterpoint.css'

/* ---------- settings ---------- */

const KEYS: { label: string; key: Key }[] = [
  { label: 'Đô trưởng', key: { tonic: 0, alter: 0, minor: false } },
  { label: 'Sol trưởng', key: { tonic: 4, alter: 0, minor: false } },
  { label: 'Rê trưởng', key: { tonic: 1, alter: 0, minor: false } },
  { label: 'Fa trưởng', key: { tonic: 3, alter: 0, minor: false } },
  { label: 'Si♭ trưởng', key: { tonic: 6, alter: -1, minor: false } },
  { label: 'La thứ', key: { tonic: 5, alter: 0, minor: true } },
  { label: 'Mi thứ', key: { tonic: 2, alter: 0, minor: true } },
  { label: 'Rê thứ', key: { tonic: 1, alter: 0, minor: true } },
  { label: 'Sol thứ', key: { tonic: 4, alter: 0, minor: true } },
  { label: 'Rê Dorian', key: { tonic: 1, alter: 0, minor: true, sig: 0, mode: 'Dorian' } },
  { label: 'Mi Phrygian', key: { tonic: 2, alter: 0, minor: true, sig: 0, mode: 'Phrygian' } },
  { label: 'Fa Lydian', key: { tonic: 3, alter: 0, minor: false, sig: 0, mode: 'Lydian' } },
  { label: 'Sol Mixolydian', key: { tonic: 4, alter: 0, minor: false, sig: 0, mode: 'Mixolydian' } },
]
const METERS: Meter[] = [{ num: 3, den: 2 }, { num: 4, den: 2 }, { num: 2, den: 2 }]
const PRESETS: { label: string; v: VersionSpec }[] = [
  { label: 'Iv −7 · chuyển chỗ quãng 8', v: { shift: { I: -7, II: 0 }, motion: 'swap', label: 'Iv −7' } },
  { label: 'Iv −14 · chuyển chỗ quãng 15', v: { shift: { I: -7, II: -7 }, motion: 'swap', label: 'Iv −14' } },
  { label: 'Iv −9 · chuyển chỗ quãng 10', v: { shift: { I: -9, II: 0 }, motion: 'swap', label: 'Iv −9' } },
  { label: 'Iv −11 · chuyển chỗ quãng 12', v: { shift: { I: -11, II: 0 }, motion: 'swap', label: 'Iv −11' } },
]
const MOTIONS: [Motion, string][] = [['swap', 'chuyển chỗ'], ['near', 'chuyển gần'], ['far', 'chuyển xa']]

type Saved = { keyIdx: number; meterIdx: number; givenIs: 'I' | 'II'; given: Seg[]; stars: number[]; versions: VersionSpec[]; quarterPrep: boolean; mine: Seg[] }

/** The exercise Lamar brought (Iv = −7 with two variants): the đề in the lower voice, five ✱. */
function example(): Saved {
  const c = (s: string) => {
    const out: Seg[] = []
    let t = 0
    let tie = false
    for (const tok of s.split(' ').filter((x) => x && x !== '|')) {
      const m = /^([A-G])(\d):(\d)(~?)$/.exec(tok)!
      out.push({ start: t, dur: +m[3], p: pitch(+m[2] * 7 + 'CDEFGAB'.indexOf(m[1])), tied: tie })
      t += +m[3]
      tie = m[4] === '~'
    }
    return out
  }
  return {
    keyIdx: 0,
    meterIdx: 0,
    givenIs: 'II',
    given: c('C4:4 F4:2 | E4:2 F4:1 G4:1 F4:2~ | F4:1 E4:1 D4:1 E4:1 C4:2 | G4:3 F4:1 E4:1 D4:1 | F4:2 E4:2 D4:2~ | D4:1 C4:1 B3:3 C4:1 | C4:6'),
    stars: [6, 12, 18, 24, 30],
    versions: [PRESETS[0].v, { shift: { I: -4, II: -3 }, motion: 'swap', label: 'BT1' }, { shift: { I: -5, II: -2 }, motion: 'swap', label: 'BT2' }],
    quarterPrep: false,
    mine: [],
  }
}
const STORE = 'counterpoint:v1'
function load(): Saved {
  try {
    const raw = localStorage.getItem(STORE)
    if (raw) return { ...example(), ...JSON.parse(raw) }
  } catch {
    /* private mode or bad data: start from the example */
  }
  return example()
}

/* ---------- helpers ---------- */

const DUR_BTNS: { d: number; label: string; glyph: string }[] = [
  { d: 6, label: 'Tròn chấm', glyph: '𝅝.' },
  { d: 4, label: 'Tròn', glyph: '𝅝' },
  { d: 3, label: 'Trắng chấm', glyph: '𝅗𝅥.' },
  { d: 2, label: 'Trắng', glyph: '𝅗𝅥' },
  { d: 1, label: 'Đen', glyph: '♩' },
]

/** Append a note, splitting it across bar lines into tied segments. */
function appendNote(segs: Seg[], step: number, key: Key, dur: number, tie: boolean, B: number): Seg[] {
  const out = segs.slice()
  let t = out.length ? out[out.length - 1].start + out[out.length - 1].dur : 0
  const last = out[out.length - 1]
  const p = tie && last ? last.p : inKey(key, step)
  let left = dur
  let tied = tie && !!last
  while (left > 0) {
    const room = B - (t % B)
    const d = Math.min(left, room)
    out.push({ start: t, dur: d, p, tied })
    t += d
    left -= d
    tied = true
  }
  return out
}

/** "ô 5, phách 1" — beats counted in the meter's own unit. */
function place(m: Meter, t: number) {
  const B = barQ(m)
  const off = t % B
  const b = Math.floor(off / beatQ(m)) + 1
  return `ô ${Math.floor(t / B) + 1}, phách ${b}${off % beatQ(m) ? ' (nửa sau)' : ''}`
}

/** Interval numbers under the staff at every onset of a version. */
function numbersOf(v: Version): Mark[] {
  const { upper, lower } = upperLower(v)
  const up = notesOf(upper)
  const lo = notesOf(lower)
  const times = [...new Set([...up.map((n) => n.start), ...lo.map((n) => n.start)])].sort((a, b) => a - b)
  const out: Mark[] = []
  for (const t of times) {
    const u = up.find((n) => n.start <= t && t < n.start + n.dur)
    const l = lo.find((n) => n.start <= t && t < n.start + n.dur)
    if (u && l) {
      const iv = interval(u.p, l.p)
      out.push({ t, text: iv.name, bad: iv.n < 0 })
    }
  }
  return out
}

function stepsOf(v: Version, q: number): Step[] {
  const { upper, lower } = upperLower(v)
  const s: Step[] = []
  for (const n of [...notesOf(upper), ...notesOf(lower)]) s.push({ at: n.start * q, dur: n.dur * q, midis: [n.p.midi] })
  return s.sort((a, b) => a.at - b.at)
}

function useWidth() {
  const ref = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(360)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => setW(Math.max(300, Math.floor(el.clientWidth))))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return [ref, w] as const
}

/* ---------- the page ---------- */

export function CounterpointPage() {
  const back = useBack('/theory')
  const [st, setSt] = useState<Saved>(load)
  const [dur, setDur] = useState(2)
  const [tie, setTie] = useState(false)
  const [editing, setEditing] = useState<'given' | 'mine'>('given')
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<SolveResult | null>(null)
  const [pick, setPick] = useState(0)
  const [graded, setGraded] = useState<Report | null>(null)
  const [playing, setPlaying] = useState<string | null>(null)
  const [now, setNow] = useState(-1)
  const [custom, setCustom] = useState({ I: -4, II: -3, motion: 'swap' as Motion })
  const [boxRef, width] = useWidth()
  const worker = useRef<Worker | null>(null)
  const stopPlay = useRef<(() => void) | null>(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORE, JSON.stringify(st))
    } catch {
      /* not saved: fine */
    }
  }, [st])
  useEffect(
    () => () => {
      worker.current?.terminate()
      stopPlay.current?.()
    },
    [],
  )

  const key = KEYS[st.keyIdx].key
  const meter = METERS[st.meterIdx]
  const B = barQ(meter)
  const problem: Problem = useMemo(
    () => ({ key, meter, given: st.given, givenIs: st.givenIs, stars: st.stars, versions: st.versions, starsOnly: true, quarterPrep: st.quarterPrep }),
    [key, meter, st.given, st.givenIs, st.stars, st.versions, st.quarterPrep],
  )
  const total = st.given.length ? totalOf(problem) : 0
  const bars = Math.ceil(total / B)
  const editSegs = editing === 'given' ? st.given : st.mine
  const setEditSegs = (segs: Seg[]) => {
    setResult(null)
    setGraded(null)
    setSt((s) => (editing === 'given' ? { ...s, given: segs, stars: s.stars.filter((t) => t < (segs.length ? segs[segs.length - 1].start + segs[segs.length - 1].dur : 0)) } : { ...s, mine: segs }))
  }

  const solve = () => {
    if (!st.given.length) return
    worker.current?.terminate()
    const w = new Worker(new URL('./solver.worker.ts', import.meta.url), { type: 'module' })
    worker.current = w
    setBusy(true)
    setResult(null)
    setGraded(null)
    setPick(0)
    w.onmessage = (e: MessageEvent<SolveResult>) => {
      setResult(e.data)
      setBusy(false)
      w.terminate()
      worker.current = null
    }
    w.postMessage({ problem, timeMs: 7000 })
  }

  const grade = () => setGraded(check(problem, st.mine, Infinity))

  const play = (id: string, v: Version) => {
    if (playing === id) {
      stopPlay.current?.()
      return
    }
    const q = 0.42
    setPlaying(id)
    stopPlay.current = playSequence(stepsOf(v, q), {
      onFrame: (t) => setNow(t / q),
      onEnd: () => {
        setPlaying(null)
        setNow(-1)
      },
    })
  }

  // keyboard range around the đề
  const kbLo = 21 // A2
  const kbHi = 42 // C6
  const keys = Array.from({ length: kbHi - kbLo + 1 }, (_, i) => kbLo + i)
  const sig = keySig(key)

  const sol = result?.solutions[pick]
  const shown = sol ? versionsOf(problem, sol.cp) : null
  const mineVersions = graded ? versionsOf(problem, st.mine) : null
  const stars: Mark[] = st.stars.map((t) => ({ t, text: '✱' }))

  return (
    <div className="cp-page">
      <div className="cp-top">
        <button onClick={back} aria-label="Quay lại" className="cp-icon">
          <ArrowLeftIcon width={18} height={18} />
        </button>
        <h1>Giải phức điệu</h1>
        <button className="cp-ghost" onClick={() => setSt(example())}>Bài mẫu</button>
      </div>

      <div className="cp-body" ref={boxRef}>
        <p className="cp-lead">
          Nhập bè đề, đánh dấu ✱ ở những chỗ phải là quãng nghịch, chọn các biến thể (Iv). Máy viết bè đối vị đúng mọi luật của sách{' '}
          <Link to="/curriculum/phuc-dieu-nghiem-khac">Phức điệu nghiêm khắc</Link> ở cả nguyên thể lẫn biến thể — hoặc chứng minh là không có lời giải và chỉ ra chỗ bế tắc.
        </p>

        {/* settings */}
        <div className="cp-row">
          <label>
            Nhịp
            <select value={st.meterIdx} onChange={(e) => setSt((s) => ({ ...s, meterIdx: +e.target.value, given: [], stars: [], mine: [] }))}>
              {METERS.map((m, i) => <option key={i} value={i}>{m.num}/{m.den}</option>)}
            </select>
          </label>
          <label>
            Giọng
            <select value={st.keyIdx} onChange={(e) => setSt((s) => ({ ...s, keyIdx: +e.target.value }))}>
              {KEYS.map((k, i) => <option key={i} value={i}>{k.label}</option>)}
            </select>
          </label>
          <label>
            Đề là
            <select value={st.givenIs} onChange={(e) => setSt((s) => ({ ...s, givenIs: e.target.value as 'I' | 'II' }))}>
              <option value="II">bè dưới (II)</option>
              <option value="I">bè trên (I)</option>
            </select>
          </label>
        </div>

        {/* editor */}
        <div className="cp-card">
          <div className="cp-tabs">
            <button className={clsx(editing === 'given' && 'is-on')} onClick={() => setEditing('given')}>Bè đề</button>
            <button className={clsx(editing === 'mine' && 'is-on')} onClick={() => setEditing('mine')}>Bài của tôi (để chấm)</button>
          </div>
          <ScoreSvg
            voices={editing === 'given' ? [{ segs: st.given, up: st.givenIs === 'I' }] : [{ segs: st.given, up: st.givenIs === 'I', muted: true }, { segs: st.mine, up: st.givenIs === 'II' }]}
            meter={meter}
            keySig={sig}
            total={Math.max(total, B)}
            above={stars}
            width={width}
          />
          <div className="cp-durs" role="radiogroup" aria-label="Trường độ">
            {DUR_BTNS.filter((d) => d.d <= B).map((d) => (
              <button key={d.d} role="radio" aria-checked={dur === d.d} className={clsx(dur === d.d && 'is-on')} onClick={() => setDur(d.d)} title={d.label}>
                <span>{d.glyph}</span>
                <small>{d.label}</small>
              </button>
            ))}
            <button className={clsx('cp-tie', tie && 'is-on')} onClick={() => setTie((x) => !x)} title="Nốt sau nối với nốt trước (cùng cao độ)">
              <span>⁀</span>
              <small>Nối</small>
            </button>
          </div>
          <div className="cp-kb" aria-label="Phím đàn: bấm để thêm nốt">
            {keys.map((s) => (
              <button
                key={s}
                className={clsx('cp-key', letterOf(pitch(s)) === 0 && 'is-c')}
                onClick={() => {
                  setEditSegs(appendNote(editSegs, s, key, dur, tie, B))
                  setTie(false)
                }}
              >
                <b>{SOLFA[letterOf(pitch(s))]}</b>
                <i>{Math.floor(s / 7)}</i>
              </button>
            ))}
          </div>
          <div className="cp-row cp-edit">
            <button
              onClick={() => {
                const segs = editSegs.slice()
                // remove the last written note with the segments tied into it
                while (segs.length && segs[segs.length - 1].tied) segs.pop()
                segs.pop()
                setEditSegs(segs)
              }}
              disabled={!editSegs.length}
            >
              ⌫ Xoá nốt cuối
            </button>
            <button onClick={() => setEditSegs([])} disabled={!editSegs.length}>Xoá hết</button>
            <span className="cp-hint">{editSegs.length ? `${notesOf(editSegs).map((n) => pitchName(n.p)).join(' · ')}` : 'Chọn trường độ rồi bấm phím'}</span>
          </div>
          {editing === 'given' && bars > 0 && (
            <div className="cp-stars">
              <span>✱ ở đầu ô:</span>
              {Array.from({ length: bars }, (_, b) => (
                <button
                  key={b}
                  className={clsx(st.stars.includes(b * B) && 'is-on')}
                  onClick={() => setSt((s) => ({ ...s, stars: s.stars.includes(b * B) ? s.stars.filter((x) => x !== b * B) : [...s.stars, b * B].sort((x, y) => x - y) }))}
                >
                  {b + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* versions */}
        <div className="cp-card">
          <h2>Biến thể cần đúng luật</h2>
          <ul className="cp-vers">
            {st.versions.map((v, i) => (
              <li key={i}>
                <b>{v.label}</b>
                <span>
                  I = {v.shift.I}, II = {v.shift.II} · Iv = {ivOf(v.shift)} · {MOTIONS.find((m) => m[0] === v.motion)?.[1]}
                </span>
                <button aria-label="Bỏ biến thể" onClick={() => setSt((s) => ({ ...s, versions: s.versions.filter((_, k) => k !== i) }))}>×</button>
              </li>
            ))}
          </ul>
          <div className="cp-presets">
            {PRESETS.map((pr) => (
              <button key={pr.label} onClick={() => setSt((s) => ({ ...s, versions: [...s.versions, pr.v] }))}>+ {pr.label}</button>
            ))}
          </div>
          <div className="cp-row cp-custom">
            <label>
              I =
              <input type="number" value={custom.I} onChange={(e) => setCustom((c) => ({ ...c, I: +e.target.value }))} />
            </label>
            <label>
              II =
              <input type="number" value={custom.II} onChange={(e) => setCustom((c) => ({ ...c, II: +e.target.value }))} />
            </label>
            <select value={custom.motion} onChange={(e) => setCustom((c) => ({ ...c, motion: e.target.value as Motion }))}>
              {MOTIONS.map(([m, t]) => <option key={m} value={m}>{t}</option>)}
            </select>
            <button onClick={() => setSt((s) => ({ ...s, versions: [...s.versions, { shift: { I: custom.I, II: custom.II }, motion: custom.motion, label: `BT${s.versions.length}` }] }))}>Thêm</button>
          </div>
          <p className="cp-note">
            Dấu theo quy ước của sách: bè I đi xuống ghi −, bè II đi lên ghi −; Iv = I + II. Mỗi bè được dời đúng bằng quãng của giọng (Đô xuống 4 bậc = Fa, quãng 5 đúng), nên biến thể có thể sang giọng khác.{' '}
            <Link to="/theory/doi-vi-chuyen-dong-chieu-doc">Đối vị chuyển động chiều dọc</Link>
          </p>
          <label className="cp-check">
            <input type="checkbox" checked={st.quarterPrep} onChange={(e) => setSt((s) => ({ ...s, quarterPrep: e.target.checked }))} />
            Cho phép nốt đen làm nốt chuẩn bị (sách không cho — chỉ bật nếu thầy chấp nhận)
          </label>
        </div>

        <div className="cp-actions">
          <button className="cp-go" onClick={solve} disabled={busy || !st.given.length}>{busy ? 'Đang giải…' : 'Giải'}</button>
          <button className="cp-ghost" onClick={grade} disabled={!st.mine.length}>Chấm bài của tôi</button>
        </div>

        {result && <Outcome result={result} meter={meter} />}

        {sol && shown && (
          <div className="cp-card">
            <div className="cp-sols">
              {result!.solutions.map((s, i) => (
                <button key={i} className={clsx(i === pick && 'is-on')} onClick={() => setPick(i)}>
                  Lời giải {i + 1}
                  <small>trừ {s.penalty}</small>
                </button>
              ))}
            </div>
            {shown.map((v, i) => (
              <VersionView key={i} v={v} problem={problem} stars={stars} width={width} playing={playing === `s${i}`} now={playing === `s${i}` ? now : -1} onPlay={() => play(`s${i}`, v)} />
            ))}
            <Remarks report={sol.report} meter={meter} title="Ghi chú (luật mềm, không bắt buộc)" />
          </div>
        )}

        {graded && mineVersions && (
          <div className="cp-card">
            <h2>{graded.hard.length ? `Bài của bạn có ${graded.hard.length} lỗi` : 'Bài của bạn đúng mọi luật bắt buộc'}</h2>
            {mineVersions.map((v, i) => (
              <VersionView key={i} v={v} problem={problem} stars={stars} width={width} playing={playing === `m${i}`} now={playing === `m${i}` ? now : -1} onPlay={() => play(`m${i}`, v)} bad={graded.hard.filter((x) => x.version === v.label)} />
            ))}
            <Remarks report={graded} meter={meter} title="Danh sách lỗi" hard />
          </div>
        )}
      </div>
    </div>
  )
}

function VersionView({ v, problem, stars, width, playing, now, onPlay, bad = [] }: { v: Version; problem: Problem; stars: Mark[]; width: number; playing: boolean; now: number; onPlay: () => void; bad?: Violation[] }) {
  const { upper, lower } = upperLower(v)
  const same = v.keyI.tonic === v.keyII.tonic && v.keyI.alter === v.keyII.alter
  const sig = same ? keySig(v.keyI) : 0
  const total = totalOf(problem)
  const nums = numbersOf(v).map((m) => (bad.some((b) => b.t === m.t) ? { ...m, bad: true } : m))
  return (
    <div className="cp-ver">
      <div className="cp-ver-head">
        <b>{v.label}</b>
        <span>{v.shift.I === 0 && v.shift.II === 0 ? keyName(problem.key) : same ? keyName(v.keyI) : `bè I ${keyName(v.keyI)} · bè II ${keyName(v.keyII)}`}</span>
        <button onClick={onPlay}>{playing ? '■ Dừng' : '▶ Nghe'}</button>
      </div>
      <ScoreSvg voices={[{ segs: upper, up: true }, { segs: lower, up: false }]} meter={problem.meter} keySig={sig} total={total} below={nums} above={stars} width={width} now={now} />
    </div>
  )
}

function Remarks({ report, meter, title, hard }: { report: Report; meter: Meter; title: string; hard?: boolean }) {
  const list = hard ? [...report.hard, ...report.soft] : report.soft
  if (!list.length) return null
  // one line per rule and place (the same remark often repeats in every version)
  const seen = new Map<string, { v: Violation; versions: string[]; hard: boolean }>()
  for (const v of list) {
    const k = `${v.rule}|${v.t}|${v.detail ?? ''}`
    const e = seen.get(k)
    if (e) e.versions.push(v.version)
    else seen.set(k, { v, versions: [v.version], hard: report.hard.includes(v) })
  }
  return (
    <details className="cp-remarks" open={hard}>
      <summary>{title} ({seen.size})</summary>
      <ul>
        {[...seen.values()].sort((a, b) => Number(b.hard) - Number(a.hard) || a.v.t - b.v.t).map(({ v, versions, hard: h }, i) => (
          <li key={i} className={clsx(h && 'is-hard')}>
            <b>{place(meter, v.t)}</b> · {RULES[v.rule].text}
            {v.detail ? ` — ${v.detail}` : ''} <span>({versions.join(', ')})</span>{' '}
            <Link to={`/theory/${RULES[v.rule].ref}`}>sách</Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

function Outcome({ result, meter }: { result: SolveResult; meter: Meter }) {
  if (result.solutions.length) return null
  return (
    <div className="cp-card cp-fail">
      <h2>{result.exhausted ? 'Không có lời giải đúng luật' : 'Chưa tìm được lời giải trong thời gian cho phép'}</h2>
      {result.stars?.map((s, i) => (
        <p key={i}>
          <b>✱ {place(meter, s.t)}:</b> {s.reason}
        </p>
      ))}
      {!result.stars?.length && (
        <>
          <p>
            {result.exhausted ? 'Máy đã thử hết mọi khả năng.' : 'Máy dừng sau giới hạn thời gian.'} Xa nhất chỉ tới {place(meter, result.furthest)}; những luật chặn lại ở đó:
          </p>
          <ul>
            {result.blockers.map((b, i) => (
              <li key={i}>
                <b>{place(meter, b.t)}</b> ({b.version}) · {RULES[b.rule].text}
                {b.detail ? ` — ${b.detail}` : ''}
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="cp-note">Có thể bỏ một dấu ✱, đổi biến thể, hoặc bật lựa chọn của thầy (nốt đen chuẩn bị) rồi giải lại.</p>
    </div>
  )
}
