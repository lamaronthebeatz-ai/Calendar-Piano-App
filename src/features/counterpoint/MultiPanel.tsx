import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { playSequence, type Step } from '../theory/audio'
import { keySig, notesOf, type Key, type Meter, type Seg } from './model'
import { RULES } from './rules'
import { gradeMulti, mdomain, octaveVersions, original, pairIv, perms, ROMAN, shiftLine, type Graded, type MProblem, type MResult, type MultiForm, type MVersion } from './multi'
import { GradeCard } from './GradeCard'
import type { MReq } from './multi.worker'
import { ScoreSvg } from './ScoreSvg'


const orderText = (v: MVersion) => v.order.map((i) => ROMAN[i]).join(' · ')

/**
 * Three or four voices from one đề (tr. 37–45): the đề takes one voice, the machine writes the others. In tam/tứ trùng
 * every re-ordering by octaves is a version; untick the ones the exercise does not ask for.
 */
export function MultiPanel({ k, meter, given, form, width, place, mine, onSlots }: { k: Key; meter: Meter; given: Seg[]; form: MultiForm; width: number; place: (t: number) => string; mine: Seg[][]; onSlots: (s: { label: string; start: number }[]) => void }) {
  const n = form === 'ba-be' || form === 'tam-trung' ? 3 : 4
  const [pos, setPos] = useState(n - 1)
  const at = Math.min(pos, n - 1)
  const all = useMemo(() => (form === 'tam-trung' || form === 'tu-trung' ? octaveVersions(n) : []), [form, n])
  const [off, setOff] = useState<string[]>([])
  // complex counterpoint with an Iv of its own for every pair (Thí dụ 77–78): versions the student sets up
  const [custom, setCustom] = useState<MVersion[]>([])
  const versions = [...all.filter((v) => !off.includes(v.label)), ...(all.length ? [] : custom)]
  const mp: MProblem = useMemo(
    () => ({ key: k, meter, voices: [...Array(n).keys()].map((i) => (i === at ? given : [])), free: [...Array(n).keys()].map((i) => i !== at), versions }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [k, meter, given, n, at, off.join(), all, JSON.stringify(custom)],
  )
  // the student writes the other voices, top to bottom (tabs in the editor above)
  const freeVoices = [...Array(n).keys()].filter((i) => i !== at)
  const slotKey = freeVoices.join()
  useEffect(() => {
    onSlots(freeVoices.map((i) => ({ label: `Bè ${ROMAN[i]} của tôi`, start: 0 })))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotKey])
  const [graded, setGraded] = useState<{ sig: string; g: Graded; lines: Seg[][] } | null>(null)
  const grade = () => {
    const lines = [...Array(n).keys()].map((i) => (i === at ? given : mine[freeVoices.indexOf(i)] ?? []))
    setGraded({ sig, g: gradeMulti(mp, lines), lines })
  }
  const [result, setResult] = useState<MResult | null>(null)
  const [busy, setBusy] = useState(false)
  const [pick, setPick] = useState(0)
  const [playing, setPlaying] = useState<string | null>(null)
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
  // a new đề or setting makes the old answer meaningless
  const sig = JSON.stringify([mp.voices, mp.free, mp.versions, meter, k])
  const [shownSig, setShownSig] = useState(sig)
  const shown = shownSig === sig ? result : null

  const run = (timeMs: number) => {
    worker.current?.terminate()
    const w = new Worker(new URL('./multi.worker.ts', import.meta.url), { type: 'module' })
    worker.current = w
    setBusy(true)
    w.onmessage = (e: MessageEvent<MResult>) => {
      setResult(e.data)
      setShownSig(sig)
      setPick(0)
      setBusy(false)
      w.terminate()
    }
    w.postMessage({ mp, timeMs } satisfies MReq)
  }
  const play = (id: string, lines: Seg[][]) => {
    if (playing === id) {
      stop.current?.()
      return
    }
    const q = 0.42
    const steps: Step[] = lines.flatMap((l) => notesOf(l).map((x) => ({ at: x.start * q, dur: x.dur * q, midis: [x.p.midi] }))).sort((a, b) => a.at - b.at)
    setPlaying(id)
    stop.current = playSequence(steps, {
      onFrame: (t) => setNow(t / q),
      onEnd: () => {
        setPlaying(null)
        setNow(-1)
      },
    })
  }
  const sol = shown?.solutions[Math.min(pick, (shown?.solutions.length ?? 1) - 1)]
  const total = given.length ? given[given.length - 1].start + given[given.length - 1].dur : 0

  return (
    <>
      <div className="cp-card">
        <div className="cp-row">
          <label>
            Đề là bè
            <select value={at} onChange={(e) => setPos(+e.target.value)}>
              {[...Array(n).keys()].map((i) => <option key={i} value={i}>{ROMAN[i]}{i === 0 ? ' (trên cùng)' : i === n - 1 ? ' (dưới cùng)' : ''}</option>)}
            </select>
          </label>
        </div>
        <p className="cp-note">
          Máy viết {n - 1} bè còn lại. Mỗi cặp hai bè theo luật đối vị đơn giản; quãng 4 ở {n === 3 ? 'cặp trên (I – II)' : 'hai cặp trên (I – II, II – III)'} là quãng thuận; ở cặp ngoài không được cùng hướng vào quãng thuận hoàn toàn khi bè trên nhảy (tr. 37–40, 44–45).{' '}
          {all.length > 0 && 'Mỗi biến thể là một cách đổi chỗ các bè bằng quãng 8; cặp nào thành cặp ngoài ở một biến thể thì không được đi cùng hướng vào quãng thuận hoàn toàn (tr. 40–43). Bỏ tick biến thể đề không yêu cầu.'}{' '}
          <Link to="/theory/doi-am-ba-bon-be">Lý thuyết</Link>
        </p>
        {all.length === 0 && (
          <div className="cp-custom" role="group" aria-label="Biến thể tự chọn">
            {custom.map((v, ci) => {
              const set = (nv: Partial<MVersion>) => setCustom((cs) => cs.map((x, j) => (j === ci ? { ...x, ...nv } : x)))
              return (
                <div className="cp-row" key={ci}>
                  <b>{v.label}</b>
                  {[...Array(n).keys()].map((i) => (
                    <label key={i}>
                      bè {ROMAN[i]} dời
                      <select value={v.steps[i]} onChange={(e) => set({ steps: Object.assign([...v.steps], { [i]: +e.target.value }) })}>
                        {[-14, -11, -9, -7, -4, -3, -2, 0, 2, 3, 4, 7, 9, 11, 14].map((x) => <option key={x} value={x}>{x > 0 ? `+${x}` : x}</option>)}
                      </select>
                    </label>
                  ))}
                  <label>
                    thứ tự
                    <select value={v.order.join()} onChange={(e) => set({ order: e.target.value.split(',').map(Number) })}>
                      {perms(n).map((o) => <option key={o.join()} value={o.join()}>{o.map((i) => ROMAN[i]).join(' · ')}</option>)}
                    </select>
                  </label>
                  <span className="cp-iv">{[...Array(n - 1).keys()].map((i) => `Iv${i + 1} = ${pairIv(v.steps, i, i + 1)}`).join(' · ')}{n === 3 ? ` · Iv3 = ${pairIv(v.steps, 0, 2)}` : ''}</span>
                  <button className="cp-ghost" onClick={() => setCustom((cs) => cs.filter((_, j) => j !== ci))}>Bỏ</button>
                </div>
              )
            })}
            <button className="cp-ghost" onClick={() => setCustom((cs) => [...cs, { label: `BT${cs.length + 1}`, steps: Array(n).fill(0), order: [...Array(n).keys()] }])}>
              + Thêm biến thể (đối vị phức tạp: Iv cho từng cặp)
            </button>
          </div>
        )}
        {all.length > 0 && (
          <div className="cp-splits" role="group" aria-label="Biến thể">
            {all.map((v) => {
              const on = !off.includes(v.label)
              return (
                <button key={v.label} className={clsx(on && 'is-on')} aria-pressed={on} onClick={() => setOff((o) => (on ? [...o, v.label] : o.filter((x) => x !== v.label)))}>
                  <b>{v.label}</b>
                  <span>{orderText(v)}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="cp-actions">
        <button className="cp-go" onClick={() => run(15000)} disabled={busy || !given.length}>{busy ? 'Đang giải…' : 'Giải'}</button>
        <button className="cp-ghost" onClick={grade} disabled={!given.length || !mine.some((l) => l.length)}>Chấm bài của tôi</button>
      </div>

      {graded?.sig === sig && (
        <GradeCard g={graded.g} k={k} meter={meter} width={width} place={place} staves={[[0, 1], [2, 3].filter((i) => i < n)].map((g) => g.map((i, j) => ({ segs: graded.lines[i], up: j === 0 && g.length > 1 })))} />
      )}

      {shown && shown.status !== 'valid' && (
        <div className="cp-card cp-fail" data-status={shown.status}>
          <h2>{shown.status === 'unsat' ? 'Không có lời giải đúng luật' : 'Chưa kết luận được'}</h2>
          <p className="cp-note">
            {shown.status === 'unsat'
              ? `Đã chứng minh: không có cách viết nào đúng mọi luật bắt buộc trong phạm vi tìm kiếm (${mdomain(mp).text}). Xa nhất máy viết được tới ${place(shown.furthest)}.`
              : shown.disputed
                ? 'Hai bộ kiểm luật không thống nhất về một lời giải, nên máy không công nhận nó. Hãy báo lỗi này.'
                : 'Máy hết thời gian trước khi duyệt hết các khả năng: chưa tìm thấy lời giải nhưng cũng chưa chứng minh được là không có.'}
          </p>
          {shown.status === 'unknown' && !shown.disputed && (
            <div className="cp-actions">
              <button className="cp-ghost" onClick={() => run(60000)} disabled={busy}>{busy ? 'Đang tìm…' : 'Tìm tiếp (thêm 60 giây)'}</button>
            </div>
          )}
        </div>
      )}

      {sol && (
        <div className="cp-card">
          <div className="cp-sols">
            {shown!.solutions.map((_, i) => (
              <button key={i} className={clsx(i === pick && 'is-on')} onClick={() => setPick(i)}>Lời giải {i + 1}</button>
            ))}
          </div>
          {[original(n), ...versions].map((v) => {
            const lines = sol.lines.map((l, i) => (v.steps[i] ? shiftLine(k, v.steps[i], l) : l))
            const top = v.order.slice(0, 2)
            const bottom = v.order.slice(2)
            const id = v.label
            return (
              <div className="cp-ver" key={id}>
                <div className="cp-ver-head">
                  <b>{v.label}</b>
                  <span>{orderText(v)}</span>
                  <button onClick={() => play(id, lines)}>{playing === id ? '■ Dừng' : '▶ Nghe'}</button>
                </div>
                <ScoreSvg voices={top.map((i, j) => ({ segs: lines[i], up: j === 0 }))} meter={meter} keySig={keySig(k)} total={total} width={width} now={playing === id ? now : -1} />
                <ScoreSvg voices={bottom.map((i, j) => ({ segs: lines[i], up: j === 0 && bottom.length > 1 }))} meter={meter} keySig={keySig(k)} total={total} width={width} now={playing === id ? now : -1} />
              </div>
            )
          })}
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
