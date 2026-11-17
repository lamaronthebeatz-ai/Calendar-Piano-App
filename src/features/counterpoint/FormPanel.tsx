import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { playSequence, type Step } from '../theory/audio'
import { barQ, keySig, notesOf, type Key, type Meter, type Seg } from './model'
import { RULES } from './rules'
import { IMIT_STEPS, stepsName, TRANSFORMS, type Transform } from './canon'
import { octaveVersions, ROMAN } from './multi'
import { PART_FORMS, type FormResult, type FormSpec, type PartForm } from './forms'
import type { FReq } from './forms.worker'
import { ScoreSvg, type Mark } from './ScoreSvg'

const lenOf = (segs: Seg[]) => (segs.length ? segs[segs.length - 1].start + segs[segs.length - 1].dur : 0)

/**
 * Phần IV (tr. 64–68): two- and three-part forms. The book describes their shape only; the machine builds each section
 * with the earlier chapters' solvers, writes the bridges, and judges the whole piece by the same rules.
 */
export function FormPanel({ k, meter, given, form, width, place, onSlots }: { k: Key; meter: Meter; given: Seg[]; form: PartForm; width: number; place: (t: number) => string; onSlots: (s: { label: string; start: number }[]) => void }) {
  const B = barQ(meter)
  const imitative = form === 'hai-doan-mo-phong'
  const [n4, setN4] = useState(false)
  const n = imitative || !n4 ? 3 : 4
  const [pos, setPos] = useState(0)
  const at = Math.min(pos, n - 1)
  const versions = useMemo(() => octaveVersions(n), [n])
  const [variant, setVariant] = useState('BT1')
  const v = versions.some((x) => x.label === variant) ? variant : versions[0].label
  const [steps, setSteps] = useState(-7)
  const [transform, setTransform] = useState<Transform>('inv')
  const [bridge, setBridge] = useState(1)
  useEffect(() => onSlots([]), [onSlots])
  const spec: FormSpec = useMemo(() => ({ form, key: k, meter, given, n, at, variant: v, steps, transform, bridge }), [form, k, meter, given, n, at, v, steps, transform, bridge])

  const [result, setResult] = useState<FormResult | null>(null)
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
  const [shownSig, setShownSig] = useState(sig)
  const shown = shownSig === sig ? result : null
  const run = (timeMs: number) => {
    worker.current?.terminate()
    const w = new Worker(new URL('./forms.worker.ts', import.meta.url), { type: 'module' })
    worker.current = w
    setBusy(true)
    w.onmessage = (e: MessageEvent<FormResult>) => {
      setResult(e.data)
      setShownSig(sig)
      setPick(0)
      setBusy(false)
      w.terminate()
    }
    w.postMessage({ spec, timeMs } satisfies FReq)
  }
  const play = (lines: Seg[][]) => {
    if (playing) {
      stop.current?.()
      return
    }
    const q = 0.42
    const st: Step[] = lines.flatMap((l) => notesOf(l).map((x) => ({ at: x.start * q, dur: x.dur * q, midis: [x.p.midi] }))).sort((a, b) => a.at - b.at)
    setPlaying(true)
    stop.current = playSequence(st, {
      onFrame: (t) => setNow(t / q),
      onEnd: () => {
        setPlaying(false)
        setNow(-1)
      },
    })
  }
  const sol = shown?.solutions[Math.min(pick, (shown?.solutions.length ?? 1) - 1)]
  const marks: Mark[] = sol ? sol.parts.map((p) => ({ t: p.start, text: p.label.replace(/ · .*/, ''), line: 'over' })) : []
  const ref = PART_FORMS.find((f) => f.id === form)!.ref
  const technique = (
    <>
      <label>
        Quãng mô phỏng
        <select value={steps} onChange={(e) => setSteps(+e.target.value)}>
          {IMIT_STEPS.filter((x) => x !== 0).map((x) => <option key={x} value={x}>{stepsName(x)}</option>)}
        </select>
      </label>
      <label>
        Thủ pháp {imitative ? 'đoạn 2' : 'đoạn 2 (mô phỏng)'}
        <select value={transform} onChange={(e) => setTransform(e.target.value as Transform)}>
          {TRANSFORMS.filter((t) => t.id !== 'rhythm').map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
        </select>
      </label>
    </>
  )

  return (
    <>
      <div className="cp-card">
        <p className="cp-note">
          {form === 'hai-doan' && 'Đoạn 1 là nguyên thể (đề ở một bè, máy viết các bè kia); đoạn 2 là một biến thể đổi chỗ các bè bằng quãng 8 của chính đoạn 1 — nên đoạn 1 được viết sao cho biến thể đó cũng đúng luật. Giữa hai đoạn máy viết một câu nối nhỏ.'}
          {form === 'hai-doan-mo-phong' && 'Đề là đoạn mở đầu A. Đoạn 1 là một canon ba bè trên A; đoạn 2 phát triển A bằng thủ pháp chọn dưới đây (các bè mô phỏng chép A đã biến dạng), có đoạn kết một ô. Giữa hai đoạn máy viết câu nối; bè nào vào muộn ở đoạn 2 thì đi tự do tới lúc vào.'}
          {form === 'ba-doan' && 'Đoạn 1 là nguyên thể; đoạn 2 mô phỏng hai ô đầu của đề bằng thủ pháp chọn dưới đây; đoạn 3 tái hiện bằng một biến thể đổi chỗ các bè của đoạn 1 (không nhắc nguyên xi). Hai câu nối do máy viết. Máy chưa chuyển giọng ở đoạn 2.'}{' '}
          Giáo trình chỉ tả cấu trúc, không có luật riêng cho hình thức: máy kiểm cả bài bằng luật đối vị ba – bốn bè; phần đề (bè cố định) không bị chấm như giai điệu tự do. <Link to={`/theory/${ref}`}>Lý thuyết</Link>
        </p>
        <div className="cp-row">
          {!imitative && (
            <>
              <label>
                Số bè
                <select value={n} onChange={(e) => setN4(e.target.value === '4')}>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </label>
              <label>
                Đề là bè
                <select value={at} onChange={(e) => setPos(+e.target.value)}>
                  {[...Array(n).keys()].map((i) => <option key={i} value={i}>{ROMAN[i]}</option>)}
                </select>
              </label>
              <label>
                Đoạn {form === 'ba-doan' ? 3 : 2} là biến thể
                <select value={v} onChange={(e) => setVariant(e.target.value)}>
                  {versions.map((x) => <option key={x.label} value={x.label}>{x.label}: {x.order.map((i) => ROMAN[i]).join(' · ')}</option>)}
                </select>
              </label>
            </>
          )}
          {(imitative || form === 'ba-doan') && technique}
          <label>
            Câu nối
            <select value={bridge} onChange={(e) => setBridge(+e.target.value)}>
              <option value={1}>1 ô</option>
              <option value={2}>2 ô</option>
            </select>
          </label>
        </div>
      </div>

      <div className="cp-actions">
        <button className="cp-go" onClick={() => run(15000)} disabled={busy || !given.length}>{busy ? 'Đang giải…' : 'Giải'}</button>
      </div>

      {shown && shown.status !== 'valid' && (
        <div className="cp-card cp-fail" data-status={shown.status}>
          <h2>{shown.status === 'unsat' ? 'Không có lời giải đúng luật' : 'Chưa kết luận được'}</h2>
          <p className="cp-note">{shown.why}</p>
          {shown.status === 'unknown' && (
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
          <ol className="cp-parts">
            {sol.parts.map((p, i) => (
              <li key={i}>
                <b>{p.label}</b> · {place(p.start)} – {place(p.end)} ({(p.end - p.start) / B} ô)
              </li>
            ))}
          </ol>
          <div className="cp-ver">
            <div className="cp-ver-head">
              <b>{n} bè · {Math.max(...sol.lines.map(lenOf)) / B} ô</b>
              <span>{imitative || form === 'ba-doan' ? `mô phỏng ${stepsName(steps)}` : ''}</span>
              <button onClick={() => play(sol.lines)}>{playing ? '■ Dừng' : '▶ Nghe'}</button>
            </div>
            {[[0, 1], [2, 3].filter((i) => i < n)].map((g, j) => (
              <ScoreSvg key={j} voices={g.map((i, x) => ({ segs: sol.lines[i], up: x === 0 && g.length > 1 }))} above={j === 0 ? marks : []} meter={meter} keySig={keySig(k)} total={Math.max(...sol.lines.map(lenOf))} width={width} now={now} />
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
