import { barQ, letterOf, sigAlter, type Meter, type Seg } from './model'

const MUSIC_FONT = "'Noto Music', 'Segoe UI Symbol', 'Apple Symbols', serif"
const U = 19 // px per quarter
const GAP = 8 // staff line spacing
const TOP = 34 // staff top inside a system
const SYS_H = 118

/** `line`: the short bar of a prepared dissonance, over or under the number. */
export type Mark = { t: number; text: string; bad?: boolean; line?: 'over' | 'under' }
type Voice = { segs: Seg[]; up: boolean; muted?: boolean }

const SHARP_STEPS = [38, 35, 39, 36, 33, 37, 34] // treble F5 C5 G5 D5 A4 E5 B4
const FLAT_STEPS = [34, 37, 33, 36, 32, 35, 31] // treble B4 E5 A4 D5 G4 C5 F4

/**
 * Two voices on one staff, stems up for the upper voice and down for the lower, with ties, accidentals against the
 * key signature, ledger lines, numbers under the staff and marks (✱) over it. Bars wrap into systems to fit `width`.
 */
export function ScoreSvg({ voices, meter, keySig, total, below = [], above = [], width, now = -1 }: {
  voices: Voice[]
  meter: Meter
  keySig: number
  total: number
  below?: Mark[]
  above?: Mark[]
  width: number
  now?: number
}) {
  const B = barQ(meter)
  const bars = Math.ceil(total / B)
  const all = voices.flatMap((v) => v.segs)
  const avg = all.reduce((a, s) => a + s.p.step, 0) / Math.max(1, all.length)
  const bass = avg < 27
  const bottomStep = bass ? 18 : 30
  const yOf = (step: number) => TOP + 4 * GAP - (step - bottomStep) * (GAP / 2)
  const sigW = Math.abs(keySig) * 9
  const barW = B * U + 16
  const head0 = 34 + sigW // clef + key signature
  const firstExtra = 24 // time signature on the first system
  // wrap bars into systems
  const systems: number[][] = []
  let cur: number[] = []
  let x = head0 + firstExtra
  for (let b = 0; b < bars; b++) {
    if (cur.length && x + barW > width - 6) {
      systems.push(cur)
      cur = []
      x = head0
    }
    cur.push(b)
    x += barW
  }
  if (cur.length) systems.push(cur)
  const barX = new Map<number, number>()
  systems.forEach((sys, si) => {
    let bx = head0 + (si === 0 ? firstExtra : 0)
    for (const b of sys) {
      barX.set(b, bx)
      bx += barW
    }
  })
  const sysOf = (t: number) => systems.findIndex((s) => s.includes(Math.min(bars - 1, Math.floor(t / B))))
  const xOf = (t: number) => barX.get(Math.min(bars - 1, Math.floor(t / B)))! + 10 + (t - Math.floor(t / B) * B) * U
  const H = systems.length * SYS_H

  const els: React.ReactElement[] = []
  systems.forEach((sys, si) => {
    const oy = si * SYS_H
    const x1 = barX.get(sys[sys.length - 1])! + barW
    for (let l = 0; l < 5; l++) els.push(<line key={`l${si}${l}`} x1={4} x2={x1} y1={oy + TOP + l * GAP} y2={oy + TOP + l * GAP} className="sv-line" />)
    els.push(
      <text key={`c${si}`} x={6} y={oy + TOP + (bass ? 2.2 * GAP : 3.25 * GAP)} fontSize={bass ? 30 : 38} fontFamily={MUSIC_FONT} className="sv-ink">
        {bass ? '𝄢' : '𝄞'}
      </text>,
    )
    for (let k = 0; k < Math.abs(keySig); k++) {
      const st = (keySig > 0 ? SHARP_STEPS[k] : FLAT_STEPS[k]) - (bass ? 14 : 0)
      els.push(<text key={`k${si}${k}`} x={32 + k * 9} y={oy + yOf(st) + 4} fontSize={15} className="sv-ink">{keySig > 0 ? '♯' : '♭'}</text>)
    }
    if (si === 0) {
      els.push(
        <g key="ts" className="sv-ink" fontWeight={700} fontSize={17} textAnchor="middle">
          <text x={head0 + 9} y={oy + TOP + 1.9 * GAP}>{meter.num}</text>
          <text x={head0 + 9} y={oy + TOP + 3.9 * GAP}>{meter.den}</text>
        </g>,
      )
    }
    for (const b of sys) {
      const bx = barX.get(b)! + barW
      const last = b === bars - 1
      els.push(<line key={`b${b}`} x1={bx} x2={bx} y1={oy + TOP} y2={oy + TOP + 4 * GAP} className="sv-line" strokeWidth={last ? 1 : 1} />)
      if (last) els.push(<rect key="fin" x={bx + 2} y={oy + TOP} width={3.4} height={4 * GAP} className="sv-fill" />)
    }
  })

  // notes
  const attacks = new Map<string, { step: number; up: boolean }>()
  voices.forEach((v) => v.segs.forEach((s) => attacks.set(`${s.start}|${v.up}`, { step: s.p.step, up: v.up })))
  voices.forEach((v, vi) => {
    // an accidental holds to the end of its bar (per voice, per staff position)
    const shown = new Map<string, number>()
    v.segs.forEach((s, i) => {
      const si = sysOf(s.start)
      const oy = si * SYS_H
      let x = xOf(s.start)
      const other = attacks.get(`${s.start}|${!v.up}`)
      if (!v.up && other && Math.abs(other.step - s.p.step) <= 1) x += 10 // a second or unison: move the lower head aside
      const y = oy + yOf(s.p.step)
      const cls = v.muted ? 'sv-mute' : 'sv-ink'
      // ledger lines
      for (let ly = oy + TOP + 5 * GAP; ly <= y + 0.5; ly += GAP) els.push(<line key={`lg${vi}${i}${ly}`} x1={x - 8} x2={x + 8} y1={ly} y2={ly} className="sv-line" />)
      for (let ly = oy + TOP - GAP; ly >= y - 0.5; ly -= GAP) els.push(<line key={`lu${vi}${i}${ly}`} x1={x - 8} x2={x + 8} y1={ly} y2={ly} className="sv-line" />)
      const open = s.dur >= 2
      const whole = s.dur >= 4
      els.push(
        <ellipse
          key={`h${vi}${i}`}
          cx={x}
          cy={y}
          rx={whole ? 6.2 : 5.2}
          ry={whole ? 4.2 : 3.8}
          transform={whole ? undefined : `rotate(-20 ${x} ${y})`}
          className={open ? `${cls}-open` : `${cls}-fill`}
          strokeWidth={open ? (whole ? 1.8 : 1.5) : 0}
        />,
      )
      if (!whole) {
        const sx = v.up ? x + 4.8 : x - 4.8
        els.push(<line key={`s${vi}${i}`} x1={sx} x2={sx} y1={y} y2={v.up ? y - 27 : y + 27} className={`${cls}-stem`} />)
      }
      if (s.dur === 3 || s.dur === 6) els.push(<circle key={`d${vi}${i}`} cx={x + 9} cy={y - (((s.p.step - bottomStep) % 2) === 0 ? 2.5 : 0)} r={1.7} className={`${cls}-fill`} />)
      const pos = `${Math.floor(s.start / B)}|${s.p.step}`
      const want = shown.get(pos) ?? sigAlter(keySig, letterOf(s.p))
      shown.set(pos, s.p.alter)
      if (s.p.alter !== want && !s.tied) {
        const g = s.p.alter > 0 ? '♯' : s.p.alter < 0 ? '♭' : '♮'
        els.push(<text key={`a${vi}${i}`} x={x - 16} y={y + 4.5} fontSize={14} className={cls}>{g}</text>)
      }
      // tie to the next segment
      const nx = v.segs[i + 1]
      if (nx?.tied) {
        const x2 = sysOf(nx.start) === si ? xOf(nx.start) : barX.get(systems[si][systems[si].length - 1])! + barW
        const dy = v.up ? -7 : 7
        els.push(<path key={`t${vi}${i}`} d={`M${x + 5} ${y + dy * 0.6} Q ${(x + x2) / 2} ${y + dy * 1.9} ${x2 - 4} ${y + dy * 0.6}`} className={`${cls}-tie`} />)
      }
    })
  })
  for (const m of below) {
    const si = sysOf(m.t)
    if (si < 0) continue
    const y = si * SYS_H + TOP + 4 * GAP + 40
    els.push(<text key={`n${m.t}${m.text}`} x={xOf(m.t)} y={y} textAnchor="middle" fontSize={12.5} className={m.bad ? 'sv-bad' : 'sv-num'}>{m.text}</text>)
    if (m.line) {
      const w = 4 + m.text.length * 3.8
      const ly = m.line === 'over' ? y - 11.5 : y + 3.5
      els.push(<line key={`nl${m.t}`} x1={xOf(m.t) - w} x2={xOf(m.t) + w} y1={ly} y2={ly} className={m.bad ? 'sv-bad-line' : 'sv-num-line'} />)
    }
  }
  for (const m of above) {
    const si = sysOf(m.t)
    if (si < 0) continue
    els.push(<text key={`m${m.t}${m.text}`} x={xOf(m.t)} y={si * SYS_H + 14} textAnchor="middle" fontSize={14} className={m.bad ? 'sv-bad' : 'sv-star'}>{m.text}</text>)
  }
  if (now >= 0 && now < total) {
    const si = sysOf(now)
    els.push(<line key="now" x1={xOf(now)} x2={xOf(now)} y1={si * SYS_H + TOP - 12} y2={si * SYS_H + TOP + 4 * GAP + 12} className="sv-now" />)
  }
  return (
    <svg className="sv" width={width} height={H} viewBox={`0 0 ${width} ${H}`} role="img" aria-label="Bản nhạc hai bè">
      {els}
    </svg>
  )
}
