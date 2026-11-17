import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { playSequence, type Step } from '../theory/audio'
import { barQ, keySig, notesOf, type Key, type Meter, type Seg } from './model'
import { RULES } from './rules'
import { CANON_FORMS, gradeCanon, IMIT_STEPS, slotsOf, stepsName, TRANSFORMS, type CanonForm, type CanonResult, type CanonSpec, type Follower, type Transform } from './canon'
import { GradeCard } from './GradeCard'
import type { CReq } from './canon.worker'
import { ScoreSvg } from './ScoreSvg'

const lenOf = (segs: Seg[]) => (segs.length ? segs[segs.length - 1].start + segs[segs.length - 1].dur : 0)
const VOICE = ['P', 'R1', 'R2']

/**
 * Imitation and canon from the đề as the opening A (tr. 46–63): set where and how the followers come in, the machine writes
 * the rest of the leader so that every voice, copied from it, keeps the two- and three-voice rules.
 */
export function CanonPanel({ k, meter, given, form, width, place, mine, onSlots }: { k: Key; meter: Meter; given: Seg[]; form: CanonForm; width: number; place: (t: number) => string; mine: Seg[][]; onSlots: (s: { label: string; start: number }[]) => void }) {
  const B = barQ(meter)
  const a = lenOf(given)
  const half = meter.num % 2 === 0 ? B / 2 : B
  const three = form === 'canon-ba-be'
  const [steps, setSteps] = useState([-7, -14])
  const [delays, setDelays] = useState<number[] | null>(null)
  const [transform, setTransform] = useState<Transform>('same')
  const [cycleBars, setCycleBars] = useState<number | null>(null)
  const [cycles, setCycles] = useState(form === 'canon-mo-tien' ? 3 : 2)
  const [step, setStep] = useState(-1)
  const [real, setReal] = useState(false)
  // mô phỏng ba bè (tr. 55): two voices imitate, a third is free; 'top' | 'mid' | 'bottom' or none
  const [freeAt, setFreeAt] = useState<'' | 'top' | 'mid' | 'bottom'>('')
  const [codaBars, setCodaBars] = useState(0)
  // defaults follow the book: the follower enters when A ends (loại I), a cycle is A + B
  const d = delays ?? (three ? [a, 2 * a] : [a])
  const L = (cycleBars ?? 0) * B || (three ? 3 * a : 2 * a)
  const spec: CanonSpec | null = useMemo(() => {
    if (!given.length) return null
    const fs: Follower[] = (three ? [0, 1] : [0]).map((i) => ({ delay: d[i] ?? a, steps: steps[i], transform: form === 'mo-phong' ? transform : 'same' }))
    const pitchOf = [0, ...fs.map((f) => f.steps)]
    const order = [...pitchOf.keys()].sort((x, y) => pitchOf[y] - pitchOf[x] || x - y)
    const extra = form === 'mo-phong' && freeAt ? 1 : 0
    if (extra) order.splice(freeAt === 'top' ? 0 : freeAt === 'mid' ? 1 : order.length, 0, pitchOf.length)
    return {
      extraFree: extra, coda: codaBars * B,
      key: k, meter, kind: form === 'mo-phong' ? 'simple' : 'canon', A: given, L: form === 'mo-phong' ? Math.max(L, a) : L,
      cycles: form === 'mo-phong' ? 1 : form === 'canon-ba-be' ? 1 : cycles, step: form === 'canon-mo-tien' ? step : 0, followers: fs, order, real,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [k, meter, given, form, three, steps.join(), d.join(), transform, L, cycles, step, real, freeAt, codaBars, B])

  // what the student writes: P's continuation and each line the machine would write (tabs in the editor above)
  const slots = spec ? slotsOf(spec) : []
  const slotKey = JSON.stringify(slots)
  useEffect(() => {
    onSlots(slots.map((x) => ({ label: x.label, start: x.start })))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotKey])
  const [graded, setGraded] = useState<{ sig: string; g: NonNullable<ReturnType<typeof gradeCanon>> } | null>(null)
  const grade = () => {
    const g = spec && gradeCanon(spec, mine)
    if (g) setGraded({ sig, g })
  }
  const [result, setResult] = useState<CanonResult | null>(null)
  const [shownSig, setShownSig] = useState('')
  const [busy, setBusy] = useState(false)
  const [pick, setPick] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [now, setNow] = useState(-1)
  const worker = useRef<Worker | null>(null)
  const stop = useRef<(() => void) | null>(null)
  useEffect(
    () => () => {
      worker.current?.terminate()
      stop.current?.()
    },
    [],
  )
  const sig = JSON.stringify(spec)
  const shown = shownSig === sig ? result : null
  const run = (timeMs: number) => {
    if (!spec) return
    worker.current?.terminate()
    const w = new Worker(new URL('./canon.worker.ts', import.meta.url), { type: 'module' })
    worker.current = w
    setBusy(true)
    w.onmessage = (e: MessageEvent<CanonResult>) => {
      setResult(e.data)
      setShownSig(sig)
      setPick(0)
      setBusy(false)
      w.terminate()
    }
    w.postMessage({ spec, timeMs } satisfies CReq)
  }
  const sol = shown?.solutions[Math.min(pick, (shown?.solutions.length ?? 1) - 1)]
  const play = (lines: Seg[][]) => {
    if (playing) {
      stop.current?.()
      return
    }
    const q = 0.42
    const st: Step[] = lines.flatMap((l) => notesOf(l).map((x) => ({ at: x.start * q, dur: x.dur * q, midis: [x.p.midi] }))).sort((x, y) => x.at - y.at)
    setPlaying(true)
    stop.current = playSequence(st, {
      onFrame: (t) => setNow(t / q),
      onEnd: () => {
        setPlaying(false)
        setNow(-1)
      },
    })
  }
  const delayChoices = [...Array(Math.max(1, Math.round((3 * Math.max(a, B)) / half))).keys()].map((i) => (i + 1) * half)
  const fmtBars = (q: number) => `${q / B} ô`
  const ref = CANON_FORMS.find((f) => f.id === form)!.ref

  return (
    <>
      <div className="cp-card">
        <p className="cp-note">
          Bè đề là đoạn mở đầu A của bè P ({fmtBars(a)}). Máy viết tiếp bè P; {three ? 'hai bè' : 'bè'} mô phỏng chép lại bè P theo cách dưới đây, mọi cặp bè theo luật đối vị đơn giản (ba bè: quãng 4 ở cặp trên là thuận).{' '}
          {form === 'canon-vo-tan' && 'Loại I: bè R vào đúng khi hết đoạn A; loại II: vào sớm hơn. Mỗi chu kỳ P trở lại đúng cao độ ban đầu.'}
          {form === 'canon-mo-tien' && 'Mỗi lần trở lại, P cao hơn hay thấp hơn một bước mô tiến.'}{' '}
          <Link to={`/theory/${ref}`}>Lý thuyết</Link>
        </p>
        {(three ? [0, 1] : [0]).map((i) => (
          <div className="cp-row" key={i}>
            <b>{VOICE[i + 1]}</b>
            <label>
              Vào sau
              <select value={d[i]} onChange={(e) => setDelays(Object.assign([...d], { [i]: +e.target.value }))}>
                {delayChoices.map((q) => <option key={q} value={q}>{fmtBars(q)}{q === a * (i + 1) ? ' (= A)' : ''}</option>)}
              </select>
            </label>
            <label>
              Quãng
              <select value={steps[i]} onChange={(e) => setSteps(Object.assign([...steps], { [i]: +e.target.value }))}>
                {IMIT_STEPS.map((n) => <option key={n} value={n}>{stepsName(n)}</option>)}
              </select>
            </label>
          </div>
        ))}
        <div className="cp-row">
          {form === 'mo-phong' && (
            <label>
              Biến đổi
              <select value={transform} onChange={(e) => setTransform(e.target.value as Transform)}>
                {TRANSFORMS.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
              </select>
            </label>
          )}
          <label>
            {form === 'mo-phong' ? 'Bè P dài' : 'Một chu kỳ'}
            <select value={L / B} onChange={(e) => setCycleBars(+e.target.value)}>
              {[...Array(8).keys()].map((i) => i + Math.ceil(a / B)).map((n) => <option key={n} value={n}>{n} ô</option>)}
            </select>
          </label>
          {(form === 'canon-vo-tan' || form === 'canon-mo-tien') && (
            <label>
              Số chu kỳ
              <select value={cycles} onChange={(e) => setCycles(+e.target.value)}>
                {[2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>
          )}
          {form === 'canon-mo-tien' && (
            <label>
              Bước mô tiến
              <select value={step} onChange={(e) => setStep(+e.target.value)}>
                {[-2, -1, 1, 2].map((n) => <option key={n} value={n}>{n < 0 ? 'xuống' : 'lên'} {NAME2[Math.abs(n)]}</option>)}
              </select>
            </label>
          )}
        </div>
        <div className="cp-row">
          {form === 'mo-phong' && (
            <label>
              Bè tự do thứ ba
              <select value={freeAt} onChange={(e) => setFreeAt(e.target.value as typeof freeAt)}>
                <option value="">không có</option>
                <option value="top">ở trên</option>
                <option value="mid">ở giữa</option>
                <option value="bottom">ở dưới</option>
              </select>
            </label>
          )}
          <label>
            Đoạn kết
            <select value={codaBars} onChange={(e) => setCodaBars(+e.target.value)}>
              <option value={0}>không (các bè dừng lần lượt)</option>
              {[1, 2, 3].map((n) => <option key={n} value={n}>{n} ô, mọi bè cùng kết</option>)}
            </select>
          </label>
        </div>
        <label className="cp-check">
          <input type="checkbox" checked={real} onChange={(e) => setReal(e.target.checked)} />
          Dời đúng quãng (sang giọng khác, như biến thể Iv) thay vì dời theo các nốt của giọng — giáo trình có cả hai, cần hỏi thầy
        </label>
      </div>

      <div className="cp-actions">
        <button className="cp-go" onClick={() => run(15000)} disabled={busy || !spec}>{busy ? 'Đang giải…' : 'Giải'}</button>
        <button className="cp-ghost" onClick={grade} disabled={!spec || !mine.some((l) => l.length)}>Chấm bài của tôi</button>
      </div>

      {graded?.sig === sig && spec && (
        <GradeCard g={graded.g} k={k} meter={meter} width={width} place={place} staves={[spec.order.slice(0, 2), spec.order.slice(2)].filter((g) => g.length).map((g) => g.map((i, x) => ({ segs: graded.g.texture[i] ?? [], up: x === 0 && g.length > 1 })))} />
      )}

      {shown && shown.status !== 'valid' && (
        <div className="cp-card cp-fail" data-status={shown.status}>
          <h2>{shown.status === 'unsat' ? 'Không có lời giải đúng luật' : 'Chưa kết luận được'}</h2>
          <p className="cp-note">
            {shown.problem ??
              (shown.status === 'unsat'
                ? `Đã chứng minh: không có cách viết tiếp bè P nào để mọi bè đúng luật bắt buộc trong phạm vi tìm kiếm (${shown.domain}). Xa nhất máy viết được tới ${place(shown.furthest)}.`
                : shown.disputed
                  ? 'Hai bộ kiểm luật không thống nhất về một lời giải, nên máy không công nhận nó. Hãy báo lỗi này.'
                  : 'Máy hết thời gian trước khi duyệt hết các khả năng: chưa tìm thấy lời giải nhưng cũng chưa chứng minh được là không có.')}
          </p>
          {shown.status === 'unknown' && !shown.disputed && (
            <div className="cp-actions">
              <button className="cp-ghost" onClick={() => run(60000)} disabled={busy}>{busy ? 'Đang tìm…' : 'Tìm tiếp (thêm 60 giây)'}</button>
            </div>
          )}
        </div>
      )}

      {sol && spec && (
        <div className="cp-card">
          <div className="cp-sols">
            {shown!.solutions.map((_, i) => (
              <button key={i} className={clsx(i === pick && 'is-on')} onClick={() => setPick(i)}>Lời giải {i + 1}</button>
            ))}
          </div>
          <div className="cp-ver">
            <div className="cp-ver-head">
              <b>{spec.order.map((i) => (i <= spec.followers.length ? VOICE[i] : 'Tự do')).join(' · ')}</b>
              <span>{spec.followers.map((f, i) => `${VOICE[i + 1]}: sau ${fmtBars(f.delay)}, ${stepsName(f.steps)}`).join(' · ')}</span>
              <button onClick={() => play(sol.lines)}>{playing ? '■ Dừng' : '▶ Nghe'}</button>
            </div>
            {[spec.order.slice(0, 2), spec.order.slice(2)].filter((g) => g.length).map((g, j) => (
              <ScoreSvg key={j} voices={g.map((i, x) => ({ segs: sol.lines[i], up: x === 0 && g.length > 1 }))} meter={meter} keySig={keySig(k)} total={Math.max(...sol.lines.map(lenOf))} width={width} now={now} />
            ))}
          </div>
          {sol.report.soft.length > 0 && (
            <details className="cp-remarks">
              <summary>Ghi chú (luật mềm, không bắt buộc) ({sol.report.soft.length})</summary>
              <ul>
                {sol.report.soft.slice(0, 60).map((x, i) => (
                  <li key={i}>
                    <b>{place(x.t)}</b> · {RULES[x.rule].text} <span>({x.version})</span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      )}
    </>
  )
}

const NAME2 = ['', 'một bậc', 'quãng 3']
