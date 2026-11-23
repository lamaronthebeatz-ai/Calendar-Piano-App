import { useEffect, useRef, useState } from 'react'
import type { Score as ComposeScore } from './model'
import { pitch as cpPitch, type Seg } from '../counterpoint/model'
import { fromCompose, toCompose } from '../../umre/repr/adapters/compose'
import { harmonizeTask } from '../../umre/domains/harmony/task'
import { UmreHost, type Outcome } from '../../umre/runtime/host'
import { NATURAL } from '../../umre/repr/pitch'
import { notesOf } from '../../umre/repr/score'
import { toQuarters } from '../../umre/repr/rational'
import type { UnifiedResult } from '../../umre/orchestration/solver'

/**
 * Melody harmonization (Rimsky-Korsakov § 13) for the score being written: the melody of staff 1, the key from the
 * signature (major or its relative minor, the user's choice), solved by UMRE in a worker. Every option shown was
 * confirmed by a checker the solver did not run, and they come ranked by the soft rules — the solver's word alone
 * never makes an option "correct". An option opens as a NEW score; the score being written is not touched.
 */
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const MAX_NOTES = 16

function keyOf(fifths: number, minor: boolean) {
  const mod = (n: number, m: number) => ((n % m) + m) % m
  let letter = mod(4 * fifths, 7)
  let pc = mod(7 * fifths, 12)
  if (minor) {
    letter = mod(letter - 2, 7)
    pc = mod(pc - 3, 12)
  }
  let alter = pc - NATURAL[letter]
  if (alter > 6) alter -= 12
  if (alter < -6) alter += 12
  return { tonic: { letter: letter as 0, alter }, minor }
}

/** The melody as the harmonization task reads it, or why it cannot be used. */
function melodyOf(s: ComposeScore): { segs: Seg[] } | { why: string } {
  const u = fromCompose(s)
  const v = u.voices.find((x) => x.staff === u.staves[0].id)
  if (!v) return { why: 'Khuông 1 chưa có giai điệu.' }
  const ns = notesOf(v)
  if (!ns.length) return { why: 'Khuông 1 chưa có nốt.' }
  if (ns.length > MAX_NOTES) return { why: `Giai điệu dài ${ns.length} nốt; phối hoà âm tự động nhận tối đa ${MAX_NOTES} nốt (bài tập § 13).` }
  if (v.events.some((e) => e.kind === 'rest')) return { why: 'Giai điệu có dấu lặng — bài tập § 13 là giai điệu liền, nốt đối nốt.' }
  const segs: Seg[] = []
  for (const n of ns) {
    if (segs.length && segs[segs.length - 1].start === toQuarters(n.onset)) return { why: 'Khuông 1 có hợp âm — cần một giai điệu một nốt mỗi lúc.' }
    segs.push({ start: toQuarters(n.onset), dur: toQuarters(n.duration), p: cpPitch(n.pitch.octave * 7 + n.pitch.letter, n.pitch.alter) })
  }
  return { segs }
}

export function HarmonizePanel({ score, onOpen }: { score: ComposeScore; onOpen: (s: ComposeScore) => void }) {
  const [minor, setMinor] = useState(false)
  const [out, setOut] = useState<Outcome | { why: string } | null>(null)
  const [busy, setBusy] = useState(false)
  const host = useRef<UmreHost | null>(null)
  useEffect(() => () => host.current?.dispose(), [])
  const k = keyOf(score.key, minor)
  const [num, den] = score.time

  const run = async () => {
    const m = melodyOf(score)
    if ('why' in m) return setOut(m)
    if (den !== 2 && den !== 4) return setOut({ why: `Số chỉ nhịp ${num}/${den}: bài tập dùng nhịp có mẫu 2 hoặc 4.` })
    host.current ??= new UmreHost(() => new Worker(new URL('../../umre/runtime/umre.worker.ts', import.meta.url), { type: 'module' }) as never)
    setBusy(true)
    setOut(null)
    const task = harmonizeTask(`hz-${score.id}`, m.segs, k, { num, den: den as 2 | 4 })
    setOut(await host.current.run({ op: 'solve', task, options: { timeMs: 15_000, maxSolutions: 4 } }, { timeMs: 30_000 }))
    setBusy(false)
  }
  const cancel = () => host.current?.dispose()

  const res = out && 'status' in out && out.status === 'done' && out.response.op === 'solve' ? (out.response.result as UnifiedResult) : null
  const deg = (l: number) => (((l - k.tonic.letter) % 7) + 7) % 7
  return (
    <div className="cmp-harmonize" data-umre-harmonize>
      <p className="cmp-help">Lấy giai điệu ở khuông 1 (tối đa {MAX_NOTES} nốt, không dấu lặng), chọn hợp âm I – IV – V và viết alto, tenor, bass theo Rimsky-Korsakov § 11, § 13. Mỗi phương án được bộ kiểm độc lập của UMRE xác nhận, xếp theo khuyến nghị; mở ra thành một bản mới.</p>
      <div className="cmp-row">
        <button className={!minor ? 'is-on' : ''} onClick={() => setMinor(false)}>Giọng trưởng</button>
        <button className={minor ? 'is-on' : ''} onClick={() => setMinor(true)}>Giọng thứ (thứ hoà thanh)</button>
        {busy ? <button onClick={cancel}>Dừng</button> : <button onClick={() => void run()}>Phối hoà âm</button>}
      </div>
      {busy && <p className="cmp-help">Đang tìm trong luồng riêng…</p>}
      {out && 'why' in out && <p className="cmp-help">{out.why}</p>}
      {out && 'status' in out && out.status !== 'done' && <p className="cmp-help">{out.status === 'timeout' ? 'Quá thời gian — chưa kết luận (không có nghĩa là vô nghiệm).' : out.status === 'error' ? `Lỗi: ${out.error}` : 'Đã dừng.'}</p>}
      {out && 'status' in out && out.status === 'done' && out.response.op === 'error' && <p className="cmp-help">Lỗi ({out.response.error.code}): {out.response.error.message}</p>}
      {res && (
        <div className="cmp-harm-res" data-status={res.status}>
          <p className="cmp-help">
            <b>{res.status === 'SOLVED' ? `${res.solutions.length} phương án đúng luật` : res.status === 'PROVEN_UNSAT' ? 'Không có phương án (đã chứng minh trong miền tìm kiếm)' : 'Chưa kết luận'}</b> — {res.statusReason}
          </p>
          <ol>
            {res.solutions.map((s, i) => {
              const chords = notesOf(s.score.voices[3]).map((n) => ROMAN[deg(n.pitch.letter)]).join('–')
              return (
                <li key={s.score.id}>
                  {chords} · trừ {s.rank?.penalty ?? 0}
                  {s.rank?.faults.length ? ` (${s.rank.faults.map((f) => `${f.ruleId}×${f.count}`).join(', ')})` : ''} · kiểm độc lập ✓
                  <button onClick={() => onOpen({ ...toCompose(s.score), id: `hz${Date.now().toString(36)}${i}`, title: `${score.title} — phối hoà âm ${i + 1}`, updated: Date.now() })}>Mở thành bản mới</button>
                </li>
              )
            })}
          </ol>
          {res.rejected.length > 0 && <p className="cmp-help">{res.rejected.length} phương án của máy tìm không được bộ kiểm độc lập xác nhận nên không hiện.</p>}
        </div>
      )}
    </div>
  )
}
