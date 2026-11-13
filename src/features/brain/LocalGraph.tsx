import { useNavigate } from 'react-router-dom'
import type { Edge, NodeKey } from './links'
import { nodeInfo } from './graph'

const short = (s: string, n = 22) => (s.length > n ? `${s.slice(0, n - 1)}…` : s)

/**
 * A node's neighbourhood as rings: itself in the middle, what it touches directly around it, one step further on the
 * outer ring. Static SVG (no simulation): the same picture every time, cheap on a phone, every node a link.
 */
export function LocalGraph({ center, nodes, edges, projects }: { center: NodeKey; nodes: Set<NodeKey>; edges: Edge[]; projects: { id: string; title: string }[] }) {
  const navigate = useNavigate()
  // a phone gets a taller, narrower canvas so the labels stay readable instead of shrinking with a wide one
  const narrow = typeof matchMedia === 'function' && matchMedia('(max-width: 640px)').matches
  const W = narrow ? 380 : 640
  const H = narrow ? 460 : 380
  const touches = (a: NodeKey, b: NodeKey) => edges.some((e) => (e.from === a && e.to === b) || (e.from === b && e.to === a))
  const ring1 = [...nodes].filter((k) => k !== center && touches(k, center)).slice(0, 14)
  const ring2 = [...nodes].filter((k) => k !== center && !ring1.includes(k)).slice(0, 20)
  const pos = new Map<NodeKey, [number, number]>([[center, [W / 2, H / 2]]])
  const place = (list: NodeKey[], rx: number, ry: number, turn: number) =>
    list.forEach((k, i) => {
      const t = turn + (i / list.length) * Math.PI * 2
      pos.set(k, [W / 2 + Math.cos(t) * rx, H / 2 + Math.sin(t) * ry])
    })
  place(ring1, narrow ? 105 : 165, narrow ? 120 : 105, -Math.PI / 2)
  place(ring2, narrow ? 150 : 290, narrow ? 205 : 165, -Math.PI / 2 + 0.3)
  const shown = edges.filter((e) => pos.has(e.from) && pos.has(e.to))
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="bn-graph" role="img" aria-label="Đồ thị lân cận">
      {shown.map((e, i) => {
        const [x1, y1] = pos.get(e.from)!
        const [x2, y2] = pos.get(e.to)!
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className={e.from === center || e.to === center ? 'is-near' : ''} />
      })}
      {[...pos].map(([k, [x, y]]) => {
        const info = nodeInfo(k, projects)
        if (!info) return null
        const main = k === center
        return (
          <g key={k} transform={`translate(${x} ${y})`} className="bn-node" data-kind={k[0]} onClick={() => !main && navigate(info.href)} role={main ? undefined : 'link'} aria-label={info.label}>
            <circle r={main ? 9 : ring1.includes(k) ? 6 : 4} />
            <text y={main ? -15 : -10} textAnchor="middle" className={main ? 'is-main' : ''}>{short(info.label, main ? (narrow ? 26 : 34) : narrow ? 16 : 22)}</text>
          </g>
        )
      })}
    </svg>
  )
}
