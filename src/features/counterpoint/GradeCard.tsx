import { keySig, type Key, type Meter, type Seg } from './model'
import { RULES } from './rules'
import type { Graded } from './multi'
import { ScoreSvg } from './ScoreSvg'

/** The student's own three/four-voice or canon texture, judged by the same rules as the machine's answers. */
export function GradeCard({ g, staves, k, meter, width, place }: { g: Graded; staves: { segs: Seg[]; up: boolean }[][]; k: Key; meter: Meter; width: number; place: (t: number) => string }) {
  const total = Math.max(0, ...staves.flat().map((v) => (v.segs.length ? v.segs[v.segs.length - 1].start + v.segs[v.segs.length - 1].dur : 0)))
  const ok = !g.report.hard.length && !g.unfinished.length
  return (
    <div className={ok ? 'cp-card' : 'cp-card cp-fail'} data-graded={ok ? 'ok' : 'bad'}>
      <h2>{ok ? 'Bài của bạn đúng mọi luật bắt buộc' : g.report.hard.length ? `Bài của bạn có ${g.report.hard.length} lỗi` : 'Bài của bạn chưa viết xong'}</h2>
      {g.unfinished.length > 0 && <p className="cp-note">Chưa viết tới cuối: {g.unfinished.join(', ')}.</p>}
      {g.disputed.length > 0 && <p className="cp-note">Hai bộ kiểm luật không thống nhất ở bài này — hãy báo lỗi: {g.disputed.slice(0, 3).join('; ')}</p>}
      {staves.map((voices, i) => (
        <ScoreSvg key={i} voices={voices} meter={meter} keySig={keySig(k)} total={total} width={width} />
      ))}
      {g.report.hard.length > 0 && (
        <ul className="cp-remarks">
          {g.report.hard.slice(0, 40).map((x, i) => (
            <li key={i} className="is-hard">
              <b>{place(x.t)}</b> · {RULES[x.rule].text}
              {x.detail ? ` — ${x.detail}` : ''} <span>({x.version})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
