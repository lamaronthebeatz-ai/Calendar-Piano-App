import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useBack } from '../../hooks/useBack'
import { ArrowLeftIcon } from '../../components/icons'
import { playSequence, type Step } from '../theory/audio'
import {
  barQ, beatQ, strength, inKey, interval, isOriginal, keyName, keySig, letterOf, notesOf, pitch, pitchName, SOLFA, upperLower,
  type Key, type Meter, type Seg, type Version,
} from './model'
import { check, RULES, totalOf, versionsOf, type Problem, type Report, type VersionSpec, type Violation } from './rules'
import { domainOf, labelled, splitsOf, type Generated, type Hint, type Level, type Rescue, type Solution, type SolveResult, type SplitStatus } from './solver'
import type { Req } from './solver.worker'
import { ScoreSvg, type Mark } from './ScoreSvg'
import { MultiPanel } from './MultiPanel'
import { MULTI_FORMS, type MultiForm } from './multi'
import { CanonPanel } from './CanonPanel'
import { CANON_FORMS, type CanonForm } from './canon'
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
const IVS = [-7, -9, -11, -14]
/** The exercise forms of the book, in its order (tr. 13–36). */
type Form = 'doc' | 'ngang' | 'ngang-doc' | 'dao-anh' | MultiForm | CanonForm
const FORMS: { id: Form; label: string; ref: string }[] = [
  { id: 'doc', label: 'Hai bè · chuyển động chiều dọc (Iv)', ref: 'doi-vi-chuyen-dong-chieu-doc' },
  { id: 'ngang', label: 'Hai bè · chuyển động chiều ngang (Ih)', ref: 'doi-vi-chuyen-dong-chieu-ngang' },
  { id: 'ngang-doc', label: 'Hai bè · chuyển động ngang – dọc (Ih + Iv)', ref: 'doi-vi-chuyen-dong-chieu-ngang' },
  { id: 'dao-anh', label: 'Hai bè · đảo ảnh', ref: 'doi-vi-dao-anh' },
  ...MULTI_FORMS,
  ...CANON_FORMS,
]
/** Ih in bars, the book's sign: voice I entering later is "−". Half bars only in even metres (tr. 31). */
const ihChoices = (m: Meter) => (m.num % 2 === 0 ? [-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2] : [-2, -1, 1, 2])
const ihText = (n: number) => (n < 0 ? '−' : '+') + (Math.abs(n) % 1 ? `${Math.floor(Math.abs(n)) || ''}${Math.floor(Math.abs(n)) ? ' ' : ''}½` : String(Math.abs(n)))
const minus = (n: number) => String(n).replace('-', '−')

/** `origin`: a teacher's đề (the app never alters it; `locked` also stops the editor) or one the generator made (free to
 *  edit; its `answer` is shown only while the đề is still exactly as generated, checked by `answerSig`). */
type Saved = {
  keyIdx: number; meterIdx: number; givenIs: 'I' | 'II'; given: Seg[]; stars: number[]; iv: number; versions: VersionSpec[]; quarterPrep: boolean; mine: Seg[]
  form: Form; ih: number
  /** the student's further lines for three/four voices and canons (the first one is `mine`) */
  extra: Seg[][]
  origin: 'teacher' | 'gen'; locked: boolean; answer: Seg[] | null; answerSig: string
}
const sigOf = (s: Saved) => JSON.stringify([s.keyIdx, s.meterIdx, s.givenIs, s.given, s.stars, s.iv, s.versions, s.form, s.ih])
const LEVELS: [Level, string][] = [['de', 'Dễ'], ['vua', 'Vừa'], ['kho', 'Khó']]

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
    iv: -7,
    versions: labelled([{ I: -7, II: 0 }, { I: -4, II: -3 }, { I: -5, II: -2 }].map((shift) => ({ shift, motion: 'swap', label: '' })), -7),
    quarterPrep: false,
    mine: [],
    form: 'doc',
    ih: -1,
    extra: [],
    origin: 'teacher',
    locked: false,
    answer: null,
    answerSig: '',
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
function appendNote(segs: Seg[], step: number, key: Key, dur: number, tie: boolean, B: number, acc: number | null, from = 0): Seg[] {
  const out = segs.slice()
  let t = out.length ? out[out.length - 1].start + out[out.length - 1].dur : from
  const last = out[out.length - 1]
  // an accidental is absolute: ♮ means alter 0 even where the key signature has a sharp or flat
  const p = tie && last ? last.p : acc === null ? inKey(key, step) : pitch(step, acc)
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

/**
 * Taneyev's numbers under the staff at every onset (number = steps = interval name − 1; quality is not written). A
 * prepared dissonance on a strong beat — the held note is the dissonant one — gets the book's short bar: over the number
 * when it sits in the upper voice, under it when in the lower.
 */
function numbersOf(v: Version, m: Meter): Mark[] {
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
      // on the downbeat a dissonance is a suspension (the book); on a later beat the moving voice may instead be passing or
      // neighbouring (in and out by step), and then nothing is suspended
      const byStep = (ns: typeof up, n: (typeof up)[number]) => {
        if (strength(m, t) === 3) return false
        const i = ns.indexOf(n)
        return i > 0 && i < ns.length - 1 && Math.abs(ns[i - 1].p.step - n.p.step) === 1 && Math.abs(ns[i + 1].p.step - n.p.step) === 1
      }
      let held: Mark['line']
      if (iv.kind === 'dissonant' && strength(m, t) >= 2) {
        if (u.start < t && l.start === t && !byStep(lo, l)) held = 'over'
        if (l.start < t && u.start === t && !byStep(up, u)) held = 'under'
      }
      out.push({ t, text: String(iv.n), bad: iv.n < 0, line: held })
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
  const [acc, setAcc] = useState<number | null>(null)
  const [editing, setEditing] = useState<'given' | 'mine' | number>('given')
  // the lines a three/four-voice or canon exercise asks the student for (set by its panel)
  const [slots, setSlots] = useState<{ label: string; start: number }[]>([])
  const [busy, setBusy] = useState<Req['kind'] | null>(null)
  const [result, setResult] = useState<SolveResult | null>(null)
  const [rescued, setRescued] = useState<Rescue | null>(null)
  const [hintList, setHintList] = useState<Hint[] | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [pick, setPick] = useState(0)
  const [graded, setGraded] = useState<Report | null>(null)
  const [playing, setPlaying] = useState<string | null>(null)
  const [now, setNow] = useState(-1)
  const [splits, setSplits] = useState<{ sig: string; list: SplitStatus[] } | null>(null)
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
  // the đề's Iv is a rule of the nguyên thể itself: its plain transposition is always checked, never shown as a version
  const main = splitsOf(st.iv)[0]
  const mainLabel = labelled([main], st.iv)[0].label
  const isMain = (v: { shift: { I: number } }) => v.shift.I === main.shift.I
  const form: Form = FORMS.some((f) => f.id === st.form) ? st.form : 'doc'
  const multi = MULTI_FORMS.some((f) => f.id === form)
  const canonForm = CANON_FORMS.some((f) => f.id === form)
  // forms with their own panel: the two-voice settings, ✱ and grading do not apply
  const special = multi || canonForm
  const ihOk = ihChoices(meter).includes(st.ih) ? st.ih : -1
  const problem: Problem = useMemo(() => {
    // Ih counts bars with "−" for voice I entering later; the versions take the delay of voice I in quarters
    const ihQ = -ihOk * B
    const versions: VersionSpec[] =
      form === 'ngang' ? [{ shift: { I: 0, II: 0 }, motion: 'near', ih: ihQ, label: `BT · Ih ${ihText(ihOk)}` }]
      : form === 'ngang-doc' ? [{ shift: { I: st.iv, II: 0 }, motion: 'swap', ih: ihQ, label: `BT · Ih ${ihText(ihOk)} · Iv ${minus(st.iv)}` }]
      : form === 'dao-anh' ? [{ shift: { I: 0, II: 0 }, motion: 'near', mirror: true, label: 'BT · đảo ảnh' }]
      : st.versions.some(isMain) ? st.versions : labelled([main, ...st.versions], st.iv)
    return { key, meter, given: st.given, givenIs: st.givenIs, stars: st.stars, versions, starsOnly: true, quarterPrep: st.quarterPrep }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, meter, st.given, st.givenIs, st.stars, st.versions, st.quarterPrep, st.iv, form, ihOk])
  const isNT = (v: Version) => isOriginal(v)
  /** What is drawn: the nguyên thể (named with its Iv) and the BT; the Iv transposition only lends its faults to the NT. */
  const shownOf = (cp: Seg[]) =>
    versionsOf(problem, cp)
      .filter((v) => isNT(v) || form !== 'doc' || !(isMain(v) && v.label === mainLabel))
      .map((v) => (isNT(v) && form === 'doc' ? { ...v, label: `Nguyên thể · Iv ${minus(st.iv)}` } : v))
  const badOf = (r: Report, v: Version) => r.hard.filter((x) => (isNT(v) ? x.version === 'Nguyên thể' || (form === 'doc' && x.version === mainLabel) : x.version === v.label))
  const total = st.given.length ? totalOf(problem) : 0
  const bars = Math.ceil(total / B)
  const mineLines = [st.mine, ...(st.extra ?? [])]
  const slot = typeof editing === 'number' ? slots[editing] : undefined
  const editSegs = editing === 'given' ? st.given : editing === 'mine' ? st.mine : (mineLines[editing] ?? [])
  const locked = st.locked && editing === 'given'
  const setEditSegs = (segs: Seg[]) => {
    if (locked) return
    setResult(null)
    setRescued(null)
    setHintList(null)
    setGraded(null)
    if (typeof editing === 'number') {
      setSt((s) => {
        const lines = [s.mine, ...(s.extra ?? [])]
        lines[editing] = segs
        return { ...s, mine: lines[0] ?? [], extra: lines.slice(1).map((l) => l ?? []) }
      })
      return
    }
    setSt((s) => (editing === 'given' ? { ...s, given: segs, ...(segs.length ? {} : { origin: 'teacher' as const, answer: null }), stars: s.stars.filter((t) => t < (segs.length ? segs[segs.length - 1].start + segs[segs.length - 1].dur : 0)) } : { ...s, mine: segs }))
  }

  /** One search at a time, in a fresh worker (terminating it is the only way to stop a search mid-way). */
  const run = <T,>(req: Req, done: (r: T) => void) => {
    worker.current?.terminate()
    const w = new Worker(new URL('./solver.worker.ts', import.meta.url), { type: 'module' })
    worker.current = w
    setBusy(req.kind)
    w.onmessage = (e: MessageEvent<T>) => {
      done(e.data)
      setBusy(null)
      w.terminate()
      worker.current = null
    }
    w.postMessage(req)
  }

  const solve = () => {
    if (!st.given.length) return
    setResult(null)
    setRescued(null)
    setGraded(null)
    setPick(0)
    run<SolveResult>({ kind: 'solve', problem, timeMs: 15000 }, setResult)
  }
  // a timeout is not a verdict: let the search run longer instead of guessing
  const solveMore = () => run<SolveResult>({ kind: 'solve', problem, timeMs: 60000 }, setResult)
  const findRescue = () => run<Rescue>({ kind: 'rescue', problem, timeMs: 9000 }, (r) => {
    setRescued(r)
    setPick(0)
  })
  // the split scan depends on everything in the đề but the chosen BT
  const scanSig = JSON.stringify([st.keyIdx, st.meterIdx, st.givenIs, st.given, st.stars, st.iv, st.quarterPrep])
  const scanSplits = () => run<SplitStatus[]>({ kind: 'splits', problem, iv: st.iv, timeMs: 8000 }, (list) => setSplits({ sig: scanSig, list }))
  const splitList = splits?.sig === scanSig ? splits.list : null
  const toggleSplit = (v: VersionSpec) =>
    setSt((s) => {
      if (v.shift.I === splitsOf(s.iv)[0].shift.I) return s
      const has = s.versions.some((x) => x.shift.I === v.shift.I)
      const vs = has ? s.versions.filter((x) => x.shift.I !== v.shift.I) : [...s.versions, v]
      const main = splitsOf(s.iv)[0].shift.I
      // the plain form stays first; the BT keep the order they were picked in
      vs.sort((a, b) => Number(b.shift.I === main) - Number(a.shift.I === main))
      return { ...s, versions: labelled(vs, s.iv) }
    })
  const askHints = () => run<Hint[]>({ kind: 'hints', problem, prefix: st.mine, timeMs: 3500 }, setHintList)
  const makeExercise = (level: Level) =>
    run<Generated | null>({ kind: 'generate', level, seed: 0, timeMs: 6000 }, (g) => {
      if (!g) return
      const keyIdx = KEYS.findIndex((k) => JSON.stringify(k.key) === JSON.stringify(g.key))
      const meterIdx = METERS.findIndex((m) => m.num === g.meter.num)
      const next: Saved = { ...st, keyIdx, meterIdx, givenIs: g.givenIs, given: g.given, stars: g.stars, iv: g.iv, versions: g.versions, quarterPrep: false, mine: [], origin: 'gen', locked: false, answer: g.answer.cp, answerSig: '' }
      setSt({ ...next, answerSig: sigOf(next) })
      setResult(null)
      setRescued(null)
      setHintList(null)
      setGraded(null)
      setShowAnswer(false)
      setEditing('mine')
    })

  const grade = () => setGraded(check(problem, st.mine, Infinity))
  const mineEnd = st.mine.length ? st.mine[st.mine.length - 1].start + st.mine[st.mine.length - 1].dur : 0
  const live = useMemo(() => (st.mine.length && st.given.length ? check(problem, st.mine, mineEnd) : null), [problem, st.mine, mineEnd, st.given.length])
  const answerOk = st.origin === 'gen' && !!st.answer && st.answerSig === sigOf(st)

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
  const shown = sol ? shownOf(sol.cp) : null
  const mineVersions = graded ? shownOf(st.mine) : null
  const stars: Mark[] = st.stars.map((t) => ({ t, text: '✱' }))

  return (
    <div className="cp-page">
      <div className="cp-top">
        <button onClick={back} aria-label="Quay lại" className="cp-icon">
          <ArrowLeftIcon width={18} height={18} />
        </button>
        <h1>Giải phức điệu</h1>
        <button className="cp-ghost" onClick={() => setSt(example())} disabled={st.locked}>Bài mẫu</button>
      </div>

      <div className="cp-body" ref={boxRef}>
        <p className="cp-lead">
          Nhập bè đề, đánh dấu ✱ ở những chỗ phải là quãng nghịch, chọn các biến thể (Iv). Máy viết bè đối vị đúng mọi luật của sách{' '}
          <Link to="/curriculum/phuc-dieu-nghiem-khac">Phức điệu nghiêm khắc</Link> ở cả nguyên thể lẫn biến thể — hoặc chứng minh là không có lời giải và chỉ ra chỗ bế tắc.
        </p>

        <div className="cp-card cp-gen">
          <h2>Sinh đề luyện tập</h2>
          <p className="cp-note">Máy viết bè đề theo cùng luật giai điệu, đặt ✱ ở chỗ có thể nghịch, rồi tự giải trước — đề nào đưa ra cũng chắc chắn có lời giải. Đề máy sinh được sửa thoải mái.</p>
          <div className="cp-presets">
            {LEVELS.map(([lv, label]) => (
              <button key={lv} onClick={() => makeExercise(lv)} disabled={!!busy || st.locked}>{busy === 'generate' ? 'Đang soạn…' : label}</button>
            ))}
          </div>
        </div>

        {/* settings */}
        <div className="cp-row">
          <label>
            Nhịp
            <select value={st.meterIdx} disabled={st.locked} onChange={(e) => setSt((s) => ({ ...s, meterIdx: +e.target.value, given: [], stars: [], mine: [], origin: 'teacher', answer: null }))}>
              {METERS.map((m, i) => <option key={i} value={i}>{m.num}/{m.den}</option>)}
            </select>
          </label>
          <label>
            Giọng
            <select value={st.keyIdx} disabled={st.locked} onChange={(e) => setSt((s) => ({ ...s, keyIdx: +e.target.value }))}>
              {KEYS.map((k, i) => <option key={i} value={i}>{k.label}</option>)}
            </select>
          </label>
          <label>
            Đề là
            <select value={st.givenIs} disabled={st.locked} onChange={(e) => setSt((s) => ({ ...s, givenIs: e.target.value as 'I' | 'II' }))}>
              <option value="II">bè dưới (II)</option>
              <option value="I">bè trên (I)</option>
            </select>
          </label>
        </div>

        {/* editor */}
        <div className="cp-card">
          <div className="cp-tabs">
            <button className={clsx(editing === 'given' && 'is-on')} onClick={() => setEditing('given')}>Bè đề</button>
            {!special && <button className={clsx(editing === 'mine' && 'is-on')} onClick={() => setEditing('mine')}>Bài của tôi</button>}
            {special && slots.map((sl, i) => (
              <button key={i} className={clsx(editing === i && 'is-on')} onClick={() => setEditing(i)}>{sl.label}</button>
            ))}
          </div>
          <div className="cp-origin">
            {st.origin === 'gen' ? (
              <span>Đề máy sinh · sửa tự do</span>
            ) : (
              <label className="cp-check">
                <input type="checkbox" checked={st.locked} onChange={(e) => setSt((s) => ({ ...s, locked: e.target.checked }))} disabled={!st.given.length} />
                Khoá đề của thầy (máy không sửa nốt, ✱, giọng, nhịp, Iv hay biến thể)
              </label>
            )}
          </div>
          <ScoreSvg
            voices={editing === 'given' ? [{ segs: st.given, up: st.givenIs === 'I' }] : [{ segs: st.given, up: st.givenIs === 'I', muted: true }, { segs: editSegs, up: st.givenIs === 'II' }]}
            meter={meter}
            keySig={sig}
            total={Math.max(total, B)}
            above={stars}
            width={width}
          />
          {!locked && (<>
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
            {([[1, '♯', 'Thăng'], [-1, '♭', 'Giáng'], [0, '♮', 'Bình']] as const).map(([a, g, label]) => (
              <button key={a} className={clsx(acc === a && 'is-on')} onClick={() => setAcc((x) => (x === a ? null : a))} title={`${label} cho nốt kế tiếp`} aria-pressed={acc === a}>
                <span>{g}</span>
                <small>{label}</small>
              </button>
            ))}
          </div>
          <div className="cp-kb" aria-label="Phím đàn: bấm để thêm nốt">
            {keys.map((s) => (
              <button
                key={s}
                className={clsx('cp-key', letterOf(pitch(s)) === 0 && 'is-c')}
                onClick={() => {
                  setEditSegs(appendNote(editSegs, s, key, dur, tie, B, acc, slot?.start ?? 0))
                  setTie(false)
                  setAcc(null)
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
          </>)}
          {editing === 'mine' && st.given.length > 0 && (
            <div className="cp-live">
              <p className={clsx(live?.hard.length && 'is-bad')}>
                {!live
                  ? 'Viết từng nốt: máy kiểm luật ngay sau mỗi nốt, ở mọi biến thể.'
                  : live.hard.length
                    ? `✗ ${place(meter, live.hard[0].t)} (${live.hard[0].version}) · ${RULES[live.hard[0].rule].text}${live.hard[0].detail ? ` — ${live.hard[0].detail}` : ''}`
                    : mineEnd >= total
                      ? '✓ Xong — đúng mọi luật bắt buộc.'
                      : `✓ Đúng luật tới ${place(meter, mineEnd)}.`}
              </p>
              {mineEnd < total && !live?.hard.length && (
                <button className="cp-ghost" onClick={askHints} disabled={!!busy}>{busy === 'hints' ? 'Đang tính…' : 'Gợi ý nốt tiếp'}</button>
              )}
              {hintList && (
                <div className="cp-hints">
                  {hintList.length === 0 && <span>Không còn nốt nào hợp luật ở đây — xoá bớt nốt cuối.</span>}
                  {hintList.map((h, i) => (
                    <button
                      key={i}
                      className={`is-${h.status}`}
                      disabled={h.status === 'dead'}
                      title={h.status === 'ok' ? 'Đi tiếp được tới lời giải' : h.status === 'dead' ? 'Hợp luật lúc này nhưng chắc chắn bế tắc về sau' : 'Chưa kịp xét hết'}
                      onClick={() => {
                        setEditSegs([...st.mine, h.seg])
                      }}
                    >
                      {h.seg.tied ? '⁀ ' : ''}
                      {pitchName(h.seg.p)} <small>{DUR_BTNS.find((d) => d.d === h.seg.dur)?.label ?? h.seg.dur}</small>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          {editing === 'given' && bars > 0 && !special && (
            <div className="cp-stars">
              <span>✱ ở đầu ô:</span>
              {Array.from({ length: bars }, (_, b) => (
                <button
                  key={b}
                  className={clsx(st.stars.includes(b * B) && 'is-on')}
                  disabled={st.locked}
                  onClick={() => setSt((s) => ({ ...s, stars: s.stars.includes(b * B) ? s.stars.filter((x) => x !== b * B) : [...s.stars, b * B].sort((x, y) => x - y) }))}
                >
                  {b + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* the exercise form (tick what to solve), then its versions */}
        <div className="cp-card">
          <h2>Dạng bài</h2>
          <div className="cp-forms" role="radiogroup" aria-label="Dạng bài">
            {FORMS.map((f) => (
              <label key={f.id} className={clsx('cp-check', form === f.id && 'is-on')}>
                <input type="radio" name="cp-form" checked={form === f.id} disabled={st.locked} onChange={() => {
                  setSt((s) => ({ ...s, form: f.id }))
                  // the student's lines differ by form: start again from the đề tab
                  setEditing('given')
                }} />
                {f.label}
              </label>
            ))}
          </div>
          {form !== 'doc' && !special && (
            <>
              <div className="cp-row">
                {form !== 'dao-anh' && (
                  <label>
                    Ih
                    <select value={ihOk} disabled={st.locked} onChange={(e) => setSt((s) => ({ ...s, ih: +e.target.value }))}>
                      {ihChoices(meter).map((n) => <option key={n} value={n}>{ihText(n)} ô</option>)}
                    </select>
                  </label>
                )}
                {form === 'ngang-doc' && (
                  <label>
                    Iv
                    <select value={st.iv} disabled={st.locked} onChange={(e) => setSt((s) => ({ ...s, iv: +e.target.value }))}>
                      {IVS.map((n) => <option key={n} value={n}>{minus(n)}</option>)}
                    </select>
                  </label>
                )}
              </div>
              <p className="cp-note">
                {form === 'ngang' && 'Biến thể: bè I chép lại cùng cao độ, vào lệch Ih ô (− là bè I vào muộn hơn); bè đối vị phải đúng luật đối vị đơn giản với cả bè I lẫn bè chép (tr. 30–33).'}
                {form === 'ngang-doc' && 'Biến thể: bè I chép lệch Ih ô và dời Iv; bè đối vị nằm giữa hai bè canon giả và theo luật đối vị đơn giản (tr. 33–35).'}
                {form === 'dao-anh' && `Biến thể: cả hai bè soi gương quanh trục ${SOLFA[(key.tonic + (key.minor ? 3 : 1)) % 7]} (giọng trưởng lấy bậc II, giọng thứ bậc IV); vì nốt nghịch ở nguyên thể thành giải quyết đi lên ở biến thể, quãng 2 và quãng 7 không dùng được ở phách mạnh (tr. 35–36).`}{' '}
                <Link to={`/theory/${FORMS.find((f) => f.id === form)!.ref}`}>Lý thuyết</Link>
              </p>
            </>
          )}
          {form === 'doc' && (<>
          <div className="cp-row">
            <label>
              Iv
              <select value={st.iv} disabled={st.locked} onChange={(e) => setSt((s) => ({ ...s, iv: +e.target.value, versions: labelled([splitsOf(+e.target.value)[0]], +e.target.value) }))}>
                {IVS.map((n) => <option key={n} value={n}>{minus(n)}</option>)}
              </select>
            </label>
            <button className="cp-ghost" onClick={scanSplits} disabled={!!busy || !st.given.length}>{busy === 'splits' ? 'Đang xét…' : 'Xét mọi BT'}</button>
          </div>
          <p className="cp-note">
            Mọi biến thể của Iv {minus(st.iv)}: I + II = {minus(st.iv)} (bè I đi xuống ghi −, bè II đi lên ghi −). Bấm để chọn biến thể bài phải đúng. "Xét mọi BT" tính riêng từng cách chia (nguyên thể + biến thể đó) xem có lời giải không.{' '}
            <Link to="/theory/doi-vi-chuyen-dong-chieu-doc">Đối vị chuyển động chiều dọc</Link>
          </p>
          <div className="cp-splits">
            {splitsOf(st.iv).map((v) => {
              const on = st.versions.find((x) => x.shift.I === v.shift.I)
              const r = splitList?.find((x) => x.I === v.shift.I)
              return (
                <button key={v.shift.I} className={clsx((on || isMain(v)) && 'is-on', r && `is-${r.status}`)} disabled={st.locked || isMain(v)} onClick={() => toggleSplit(v)} aria-pressed={!!on || isMain(v)}>
                  {isMain(v) ? <b>Luật của nguyên thể</b> : on && <b>{on.label}</b>}
                  <span>I {minus(v.shift.I)} · II {minus(v.shift.II)}</span>
                  {r && <i>{r.status === 'ok' ? '✓ giải được' : r.status === 'none' ? '✗ không có' : '? chưa rõ'}</i>}
                </button>
              )
            })}
          </div>
          </>)}
          {form === 'doc' && splitList?.some((x) => x.reason) && (
            <ul className="cp-split-why">
              {[...new Set(splitList.flatMap((x) => (x.reason ? [x.reason] : [])))].map((why) => [why, splitList.filter((x) => x.reason === why)] as const).map(([why, xs]) => (
                <li key={why}>
                  <b>{xs.length === splitList.length ? 'Mọi cách chia' : xs.map((x) => `I ${minus(x.I)} · II ${minus(x.II)}`).join('; ')}</b> — {why}
                </li>
              ))}
            </ul>
          )}
          {!special && <label className="cp-check">
            <input type="checkbox" checked={st.quarterPrep} onChange={(e) => setSt((s) => ({ ...s, quarterPrep: e.target.checked }))} />
            Cho phép nốt đen làm nốt chuẩn bị (sách không cho — chỉ bật nếu thầy chấp nhận)
          </label>}
        </div>

        {multi && <MultiPanel k={key} meter={meter} given={st.given} form={form as MultiForm} width={width} place={(t) => place(meter, t)} mine={mineLines} onSlots={setSlots} />}

        {canonForm && <CanonPanel k={key} meter={meter} given={st.given} form={form as CanonForm} width={width} place={(t) => place(meter, t)} mine={mineLines} onSlots={setSlots} />}

        {!special && <>
        <div className="cp-actions">
          <button className="cp-go" onClick={solve} disabled={!!busy || !st.given.length}>{busy === 'solve' ? 'Đang giải…' : 'Giải'}</button>
          <button className="cp-ghost" onClick={grade} disabled={!st.mine.length}>Chấm bài của tôi</button>
          {answerOk && <button className="cp-ghost" onClick={() => setShowAnswer((x) => !x)}>{showAnswer ? 'Ẩn đáp án' : 'Xem đáp án'}</button>}
        </div>

        {answerOk && showAnswer && (
          <div className="cp-card">
            <h2>Đáp án của máy (một trong nhiều cách)</h2>
            {shownOf(st.answer!).map((v, i) => (
              <VersionView key={i} v={v} problem={problem} stars={stars} width={width} playing={playing === `a${i}`} now={playing === `a${i}` ? now : -1} onPlay={() => play(`a${i}`, v)} />
            ))}
          </div>
        )}

        {result && <Outcome result={result} meter={meter} domain={domainOf(problem).text} onRescue={findRescue} onMore={solveMore} busy={busy === 'rescue'} searching={busy === 'solve'} rescued={!!rescued} />}

        {rescued && (
          <RescueView
            r={rescued}
            meter={meter}
            render={(sol, id) =>
              shownOf(sol.cp).map((v, i) => (
                <VersionView key={i} v={v} problem={problem} stars={stars} width={width} playing={playing === `${id}${i}`} now={playing === `${id}${i}` ? now : -1} onPlay={() => play(`${id}${i}`, v)} bad={badOf(sol.report, v)} />
              ))
            }
          />
        )}

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
              <VersionView key={i} v={v} problem={problem} stars={stars} width={width} playing={playing === `m${i}`} now={playing === `m${i}` ? now : -1} onPlay={() => play(`m${i}`, v)} bad={badOf(graded, v)} />
            ))}
            <Remarks report={graded} meter={meter} title="Danh sách lỗi" hard />
          </div>
        )}
        </>}
      </div>
    </div>
  )
}

function VersionView({ v, problem, stars, width, playing, now, onPlay, bad = [] }: { v: Version; problem: Problem; stars: Mark[]; width: number; playing: boolean; now: number; onPlay: () => void; bad?: Violation[] }) {
  const { upper, lower } = upperLower(v)
  const same = v.keyI.tonic === v.keyII.tonic && v.keyI.alter === v.keyII.alter
  const sig = same ? keySig(v.keyI) : 0
  // a time-shifted version runs past the original's end
  const total = Math.max(totalOf(problem), ...[...upper, ...lower].map((s) => s.start + s.dur))
  const nums = numbersOf(v, problem.meter).map((m) => (bad.some((b) => b.t === m.t) ? { ...m, bad: true } : m))
  return (
    <div className="cp-ver">
      <div className="cp-ver-head">
        <b>{v.label}</b>
        <span>{(v.shift.I === 0 && v.shift.II === 0) ? keyName(problem.key) : same ? keyName(v.keyI) : `bè I ${keyName(v.keyI)} · bè II ${keyName(v.keyII)}`}</span>
        <button onClick={onPlay}>{playing ? '■ Dừng' : '▶ Nghe'}</button>
      </div>
      <ScoreSvg voices={[{ segs: upper, up: true }, { segs: lower, up: false }]} meter={problem.meter} keySig={sig} total={total} below={nums} above={v.ih ? [] : stars} width={width} now={now} />
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

function Outcome({ result, meter, domain, onRescue, onMore, busy, searching, rescued }: { result: SolveResult; meter: Meter; domain: string; onRescue: () => void; onMore: () => void; busy: boolean; searching: boolean; rescued: boolean }) {
  if (result.status === 'valid') return null
  const unsat = result.status === 'unsat'
  return (
    <div className="cp-card cp-fail" data-status={result.status}>
      <h2>{unsat ? 'Không có lời giải đúng luật' : 'Chưa kết luận được'}</h2>
      <p className="cp-note">
        {unsat
          ? `Đã chứng minh: không có bè đối vị nào đúng mọi luật bắt buộc trong phạm vi tìm kiếm (${domain}).`
          : result.disputed
            ? 'Hai bộ kiểm luật không thống nhất về một lời giải, nên máy không công nhận nó và cũng không kết luận vô nghiệm. Hãy báo lỗi này.'
            : 'Máy hết thời gian trước khi duyệt hết các khả năng: chưa tìm thấy lời giải nhưng cũng chưa chứng minh được là không có.'}
      </p>
      {result.stars?.map((s, i) => (
        <p key={i}>
          <b>✱ {place(meter, s.t)}:</b> {s.reason}
        </p>
      ))}
      {!result.stars?.length && (
        <>
          <p>
            {unsat ? 'Máy đã thử hết mọi khả năng.' : 'Máy dừng sau giới hạn thời gian.'} Xa nhất chỉ tới {place(meter, result.furthest)}; những luật chặn lại ở đó:
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
      {result.status === 'unknown' && !result.disputed && (
        <div className="cp-actions">
          <button className="cp-ghost" onClick={onMore} disabled={searching}>{searching ? 'Đang tìm…' : 'Tìm tiếp (thêm 60 giây)'}</button>
        </div>
      )}
      {!rescued && (
        <div className="cp-actions">
          <button className="cp-go" onClick={onRescue} disabled={busy}>{busy ? 'Đang tìm…' : 'Tìm cách gỡ (giữ nguyên đề)'}</button>
        </div>
      )}
    </div>
  )
}

type Option = { id: string; title: string; note: string; sol: Solution; hard: boolean }

/** Ways out of a dead end. The đề itself is never offered back changed: each option keeps it note for note. */
function RescueView({ r, meter, render }: { r: Rescue; meter: Meter; render: (s: Solution, id: string) => React.ReactNode }) {
  const [pick, setPick] = useState(0)
  const opts: Option[] = []
  for (const x of r.relax) {
    if (!x.solutions.length) continue
    const sol = x.solutions[0]
    if (x.id === 'quarterPrep')
      opts.push({ id: 'q', title: 'Nốt đen chuẩn bị', sol, hard: false, note: 'Mọi luật của sách đều giữ, trừ một điều: có nốt chuẩn bị là nốt đen. Chỉ dùng nếu thầy chấp nhận.' })
    else
      opts.push({ id: `n${x.t}`, title: `✱ ${place(meter, x.t!)} để thuận`, sol, hard: false, note: x.proved
        ? `Đề giữ nguyên. Riêng ${place(meter, x.t!)} không viết được quãng nghịch đúng luật (lý do ở trên), nên ở đó bè đối vị thuận; mọi chỗ khác đúng luật ở mọi biến thể. Nên hỏi lại thầy chỗ này.`
        : `Đề giữ nguyên. Không ✱ nào bất khả khi xét riêng, nhưng cả bài thì không có lời giải; chỉ cần để ${place(meter, x.t!)} thuận là mọi chỗ khác đúng luật ở mọi biến thể. Nên hỏi lại thầy chỗ này.` })
  }
  if (r.near.length)
    opts.push({ id: 'f', title: `Ít lỗi nhất (${r.nearFaults})`, sol: r.near[0], hard: true, note: `Đề giữ nguyên, bài phạm ${r.nearFaults} luật bắt buộc — ít nhất máy tìm được. Các lỗi được tô đỏ và kể dưới đây.` })
  const o = opts[Math.min(pick, opts.length - 1)]
  return (
    <div className="cp-card">
      <h2>Cách gỡ — đề của thầy giữ nguyên</h2>
      {!o && <p className="cp-note">Không tìm được cách gỡ nào trong thời gian cho phép.</p>}
      {o && (
        <>
          <div className="cp-sols">
            {opts.map((x, i) => (
              <button key={x.id} className={clsx(x === o && 'is-on')} onClick={() => setPick(i)}>{x.title}</button>
            ))}
          </div>
          <p className="cp-note">{o.note}</p>
          {render(o.sol, `r${o.id}`)}
          <Remarks report={o.sol.report} meter={meter} title={o.hard ? 'Lỗi và ghi chú' : 'Ghi chú (luật mềm, không bắt buộc)'} hard={o.hard} />
        </>
      )}
    </div>
  )
}
