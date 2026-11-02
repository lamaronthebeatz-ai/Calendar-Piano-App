import { useId, type CSSProperties, type ReactNode } from 'react'
import clsx from 'clsx'
import { tintColor } from '../../lib/tint'
import { PARTS, RESOLVED, type PartId } from './taxonomy'
import { SKY, skyOf, type Layout } from './constellation'
import './musicology-sky.css'

const BRANCH = new Map(RESOLVED.map((b) => [b.id, b]))
const RINGS = [0, 1, 2] as const
/** Thirds of a set of distances from the centre: the two values that split it into three equal rings. */
const cuts = (ds: number[]) => {
  const s = [...ds].sort((a, b) => a - b)
  return [s[Math.floor(s.length / 3)], s[Math.floor((2 * s.length) / 3)]] as const
}
const ring = (d: number, [a, b]: readonly [number, number]) => (d < a ? 0 : d < b ? 1 : 2)
const NUM: Partial<Record<PartId, string>> = { historical: 'I', systematic: 'II', applied: 'III', practice: 'IV' }

/**
 * The sky itself (SVG). `view` crops to one part (its constellation in the middle, the rest dimmed but present, so the
 * links leaving the part stay visible); `selected` lights a star, its neighbours and the lines between them.
 */
export function Sky({
  layout,
  view,
  focus,
  selected,
  onSelect,
  lit,
  labels,
  layered,
  className,
}: {
  layout: Layout
  view?: { x: number; y: number; w: number; h: number }
  focus?: PartId
  selected?: string | null
  onSelect?: (id: string) => void
  lit: (id: string) => number
  labels?: boolean
  /** One <svg> per layer so scroll animations move whole layers (the stage); otherwise a single <svg>. */
  layered?: boolean
  className?: string
}) {
  const gid = useId().replace(/:/g, '')
  const { stars, edges, dust } = skyOf(layout)
  const v = view ?? { x: 0, y: 0, w: SKY[layout].w, h: SKY[layout].h }
  const at = new Map(stars.map((s) => [s.id, s]))
  const box = `${v.x} ${v.y} ${v.w} ${v.h}`
  const starCuts = cuts(stars.map((s) => s.d))
  const edgeCuts = cuts(edges.map((e) => e.d))
  const near = new Set(selected ? edges.filter((e) => e.a === selected || e.b === selected).flatMap((e) => [e.a, e.b]) : [])
  // part names sit above each constellation (full sky only)
  const partLabels = (['historical', 'systematic', 'applied', 'practice'] as PartId[]).map((p) => {
    const own = stars.filter((s) => s.part === p)
    const x = own.reduce((t, s) => t + s.x, 0) / own.length
    const y = Math.min(...own.map((s) => s.y)) - 26
    return { p, x, y }
  })

  return (
    <div className={clsx('mc-sky', selected && 'has-sel', focus && 'has-focus', className)} style={{ aspectRatio: `${v.w} / ${v.h}`, '--ar': (v.w / v.h).toFixed(4) } as CSSProperties}>
      <Wrap layered={layered} box={box}>
      {/* Each part of the picture is its own <svg> layer, so the scroll animations move whole layers (opacity /
          transform on the compositor) instead of repainting dozens of SVG nodes every frame. Stars and threads come
          in three rings, centre first. */}
      <Layer layered={layered} box={box} className="mc-l mc-l-dust" hidden>
        {dust.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} />
        ))}
      </Layer>
      {RINGS.map((k) => (
        <Layer key={`e${k}`} layered={layered} box={box} className={`mc-l mc-l-edges mc-k${k}`} hidden>
          {edges
            .filter((e) => ring(e.d, edgeCuts) === k)
            .map((e) => {
              const a = at.get(e.a)!
              const b = at.get(e.b)!
              const on = selected && (e.a === selected || e.b === selected)
              const off = focus && a.part !== focus && b.part !== focus
              return (
                <line
                  key={`${e.a}|${e.b}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={clsx('mc-edge', e.cross && 'is-cross', on && 'is-on', off && 'is-off')}
                  style={{ strokeWidth: 0.5 + Math.min(e.n, 14) * 0.17 }}
                />
              )
            })}
        </Layer>
      ))}
      {RINGS.map((k) => (
        <Layer key={`s${k}`} layered={layered} box={box} className={`mc-l mc-l-stars mc-k${k}`} hidden={!onSelect}>
          <defs>
            <radialGradient id={`g${gid}${k}`}>
              <stop offset="0" stopColor="#f6dca2" stopOpacity="0.55" />
              <stop offset="0.35" stopColor="#e2b66e" stopOpacity="0.16" />
              <stop offset="1" stopColor="#e2b66e" stopOpacity="0" />
            </radialGradient>
          </defs>
          {stars
            .filter((s) => ring(s.d, starCuts) === k)
            .map((s) => {
              const b = BRANCH.get(s.id)!
              const cls = clsx('mc-star', s.id === selected && 'is-sel', near.has(s.id) && 'is-near', focus && s.part !== focus && 'is-off')
              return (
                <g
                  key={s.id}
                  transform={`translate(${s.x.toFixed(1)} ${s.y.toFixed(1)})`}
                  className={cls}
                  style={{ '--lit': (0.5 + 0.5 * lit(s.id)).toFixed(2), '--c': tintColor(b.hue, 0.86, 0.06) } as CSSProperties}
                  role={onSelect ? 'button' : undefined}
                  tabIndex={onSelect ? 0 : undefined}
                  aria-label={onSelect ? b.title : undefined}
                  onClick={onSelect && (() => onSelect(s.id))}
                  onKeyDown={onSelect && ((e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onSelect(s.id)))}
                >
                  <circle r={s.r * 4.2} fill={`url(#g${gid}${k})`} className="mc-halo" />
                  <circle r={Math.max(s.r * 2.6, 12)} className="mc-hit" />
                  <circle r={s.r} className="mc-core" />
                </g>
              )
            })}
        </Layer>
      ))}
      </Wrap>
      {labels &&
        partLabels.map(({ p, x, y }) => (
          <span key={p} className="mc-plabel" style={{ left: `${((x - v.x) / v.w) * 100}%`, top: `${((y - v.y) / v.h) * 100}%` }}>
            <b>{NUM[p]}</b> {PARTS[p].title}
          </span>
        ))}
    </div>
  )
}

function Wrap({ layered, box, children }: { layered?: boolean; box: string; children: ReactNode }) {
  if (layered) return <>{children}</>
  return (
    <svg viewBox={box} preserveAspectRatio="xMidYMid meet" aria-hidden>
      {children}
    </svg>
  )
}

function Layer({ layered, box, className, hidden, children }: { layered?: boolean; box: string; className: string; hidden?: boolean; children: ReactNode }) {
  if (!layered) return <g className={className}>{children}</g>
  return (
    <svg viewBox={box} preserveAspectRatio="xMidYMid meet" className={className} aria-hidden={hidden}>
      {children}
    </svg>
  )
}
