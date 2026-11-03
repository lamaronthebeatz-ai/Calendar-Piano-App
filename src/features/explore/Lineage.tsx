import { useEffect, useMemo, useRef, useState } from 'react'
import type { Link as Rel, Person, Relations } from './data'

/**
 * Teacher → student lines drawn from the Wikidata relations (scripts/relations/build.py). Only people in the
 * library carry their own relations, so a line can only be followed through them; others are leaves.
 */
type Node = { key: string; id: string | null; name: string; qid: string; parent?: string }

const W = 150
const H = 44
const GAP_X = 12
const GAP_Y = 46
const CAP = 12

/** Rows of a person's tree: two generations of teachers above, two of students below. */
function rows(rel: Relations, id: string, name: (id: string) => string): Node[][] {
  const up = (pid: string) => rel[pid]?.teachers ?? []
  const down = (pid: string) => rel[pid]?.students ?? []
  const node = (l: Rel, parent?: string): Node => ({ key: `${l[2]}|${parent ?? ''}`, id: l[0], name: l[0] ? name(l[0]) : l[1], qid: l[2], parent })
  const g1 = up(id).map((l) => node(l, id)).slice(0, CAP)
  const g2 = g1.flatMap((t) => (t.id ? up(t.id).map((l) => node(l, t.key)) : [])).slice(0, CAP)
  const s1 = down(id).map((l) => node(l, id)).slice(0, CAP)
  const s2 = s1.flatMap((s) => (s.id ? down(s.id).map((l) => node(l, s.key)) : [])).slice(0, CAP)
  return [g2, g1, [{ key: id, id, name: name(id), qid: '' }], s1, s2].filter((r) => r.length)
}

export function LineageTree({ rel, id, name, onOpen }: { rel: Relations; id: string; name: (id: string) => string; onOpen: (id: string) => void }) {
  const layout = useMemo(() => {
    const rs = rows(rel, id, name)
    const width = Math.max(...rs.map((r) => r.length)) * (W + GAP_X)
    const pos = new Map<string, { x: number; y: number }>()
    rs.forEach((r, i) => r.forEach((n, j) => pos.set(n.key, { x: (width - r.length * (W + GAP_X)) / 2 + j * (W + GAP_X) + GAP_X / 2, y: i * (H + GAP_Y) })))
    return { rs, width, height: rs.length * (H + GAP_Y) - GAP_Y, pos }
  }, [rel, id, name])
  const box = useRef<HTMLDivElement>(null)
  // wider than the screen: open with the person in the middle, not at the left edge
  useEffect(() => {
    const el = box.current
    const me = layout.pos.get(id)
    if (el && me) el.scrollLeft = me.x + W / 2 - el.clientWidth / 2
  }, [layout, id])
  if (layout.rs.length < 2) return null
  const { rs, width, height, pos } = layout
  const centre = rs.findIndex((r) => r.some((n) => n.key === id))
  return (
    <div ref={box} className="lg-tree" role="img" aria-label={`Cây thầy – trò của ${name(id)}`}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {rs.flatMap((r, i) =>
          r.map((n) => {
            const p = n.parent && pos.get(n.parent)
            const me = pos.get(n.key)!
            if (!p) return null
            // teachers sit above their pupil: the line runs from the lower box's top to the upper box's bottom
            const [a, b] = i < centre ? [me, p] : [p, me]
            return <path key={`e${n.key}`} d={`M${a.x + W / 2},${a.y + H} C${a.x + W / 2},${a.y + H + GAP_Y / 2} ${b.x + W / 2},${b.y - GAP_Y / 2} ${b.x + W / 2},${b.y}`} className="lg-edge" />
          }),
        )}
        {rs.flatMap((r) =>
          r.map((n) => {
            const { x, y } = pos.get(n.key)!
            const open = () => (n.id ? onOpen(n.id) : window.open(`https://www.wikidata.org/wiki/${n.qid}`, '_blank', 'noopener'))
            return (
              <g key={n.key} transform={`translate(${x},${y})`} className={n.key === id ? 'lg-node is-me' : n.id ? 'lg-node is-in' : 'lg-node'} onClick={n.key === id ? undefined : open} role={n.key === id ? undefined : 'link'}>
                <title>{n.name}</title>
                <rect width={W} height={H} rx={12} />
                <text x={W / 2} y={H / 2 + 4} textAnchor="middle">{n.name.length > 22 ? `${n.name.slice(0, 21)}…` : n.name}</text>
              </g>
            )
          }),
        )}
      </svg>
    </div>
  )
}

/** One chain on a shared time axis: a bar per life, so overlapping generations show. */
export function ChainTimeline({ chain, onOpen }: { chain: Person[]; onOpen: (id: string) => void }) {
  const [hover, setHover] = useState<string | null>(null)
  const from = Math.min(...chain.map((p) => p.born ?? 9999))
  const to = Math.max(...chain.map((p) => p.died ?? new Date().getFullYear()))
  const span = Math.max(1, to - from)
  return (
    <div className="lg-chain">
      <p className="lg-chain-names">
        {chain.map((p, i) => (
          <span key={p.id}>
            {i > 0 && <span className="lg-arrow"> → </span>}
            <button onClick={() => onOpen(p.id)} onPointerEnter={() => setHover(p.id)} onPointerLeave={() => setHover(null)} className={hover === p.id ? 'is-hot' : undefined}>{p.name}</button>
          </span>
        ))}
      </p>
      <div className="lg-bars">
        {chain.map((p) => (
          <div key={p.id} className={hover === p.id ? 'lg-bar is-hot' : 'lg-bar'} style={{ marginLeft: `${(((p.born ?? from) - from) / span) * 100}%`, width: `${Math.max(2, (((p.died ?? to) - (p.born ?? from)) / span) * 100)}%` }} title={`${p.name} · ${p.years}`}>
            <span>{p.name.split(' ').at(-1)} · {p.years}</span>
          </div>
        ))}
      </div>
      <p className="lg-axis"><span>{from}</span><span>{to}</span></p>
    </div>
  )
}
