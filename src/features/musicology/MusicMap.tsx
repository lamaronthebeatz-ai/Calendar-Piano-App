import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { findArticle, normalize } from '../theory/wiki'
import { useThumbs } from '../theory/thumbs'
import { ArrowUpRightIcon, SearchIcon, XIcon } from '../../components/icons'
import { ERAS, JOURNEYS, KINDS, PLACES, REGIONS, YEAR_MAX, YEAR_MIN, eraOf, kindOf, yearsOf, type Era, type Journey, type MapEvent, type Place, type Region } from './places'
import './music-map.css'

/* ------------------------------------------------------------------ projection: Equal Earth, as in scripts/map/world.py */

const W = 1000
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2
function raw(lon: number, lat: number): [number, number] {
  const l = (lon * Math.PI) / 180, t = Math.asin(M * Math.sin((lat * Math.PI) / 180)), t2 = t * t, t6 = t2 * t2 * t2
  return [(l * Math.cos(t)) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2))), t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2))]
}
const XMAX = raw(180, 0)[0], YMAX = raw(0, 90)[1], S = W / (2 * XMAX)
const H = 2 * YMAX * S
const proj = (lon: number, lat: number): [number, number] => {
  const [x, y] = raw(lon, lat)
  return [W / 2 + x * S, (YMAX - y) * S]
}
const at = (pl: Place) => proj(pl.lon, pl.lat)

const polyline = (pts: [number, number][]) => 'M' + pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join('L')
const range = (a: number, b: number, step: number) => Array.from({ length: Math.floor((b - a) / step) + 1 }, (_, i) => a + i * step)
/** The outline of the projected globe, and meridians and parallels every 15°. */
const SPHERE = polyline([...range(-90, 90, 3).map((lat) => proj(-180, lat)), ...range(-90, 90, 3).reverse().map((lat) => proj(180, lat))]) + 'Z'
const GRATICULE = [
  ...range(-165, 165, 15).map((lon) => polyline(range(-90, 90, 3).map((lat) => proj(lon, lat)))),
  ...range(-75, 75, 15).map((lat) => polyline([proj(-180, lat), proj(180, lat)])),
].join('')

interface World { w: number; h: number; land: string; borders: string }
/** x, y = top-left of the view in map units; w = its width (the height follows the frame's aspect). */
interface View { x: number; y: number; w: number }

const MIN_W = 8
const ERA_LIST = Object.keys(ERAS) as Era[]
const eraColor = (era: Era) => `oklch(0.74 0.15 ${ERAS[era].hue})`

const SEAS: [string, number, number][] = [
  ['Đại Tây Dương', -38, 30],
  ['Thái Bình Dương', -140, 10],
  ['Thái Bình Dương', 165, 20],
  ['Ấn Độ Dương', 78, -20],
  ['Địa Trung Hải', 17, 35.2],
  ['Biển Đông', 113.5, 13.5],
  ['Biển Bắc', 3.5, 56.5],
]

/** Smallest view holding every point (map units), with a margin, fitted to the frame's aspect. */
function fit(points: [number, number][], aspect: number, minW = 40): View {
  const xs = points.map((p) => p[0]), ys = points.map((p) => p[1])
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys)
  const w = Math.max(minW, (x1 - x0) * 1.35, ((y1 - y0) * 1.35) / aspect)
  return { x: (x0 + x1) / 2 - w / 2, y: (y0 + y1) / 2 - (w * aspect) / 2, w }
}

function regionView(r: Region, aspect: number): View {
  const [west, north, east, south] = REGIONS[r].box
  const pts = [west, (west + east) / 2, east].flatMap((lon) => [proj(lon, north), proj(lon, south), proj(lon, (north + south) / 2)])
  const v = fit(pts, aspect)
  return { ...v, w: v.w / 1.35, x: v.x + (v.w - v.w / 1.35) / 2, y: v.y + ((v.w - v.w / 1.35) * aspect) / 2 }
}

/** The whole globe, as tall as the frame allows, centred on 15°E when the sides must be cropped. */
function worldView(aspect: number): View {
  const w = Math.min(W, H / aspect)
  return { w, x: Math.min(Math.max(proj(15, 0)[0] - w / 2, 0), W - w), y: (H - w * aspect) / 2 }
}

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** "*Title*" in event text becomes italics. */
const rich = (s: string) => s.split(/\*([^*]+)\*/g).map((t, i) => (i % 2 ? <em key={i}>{t}</em> : t))

/** Wikipedia page backing an event: the place's own page for a one-event place, else the linked article's page. */
function sourceOf(ev: MapEvent, pl: Place) {
  const wiki = pl.events.length > 1 ? findArticle(ev.slugs[0])?.wiki ?? pl.wiki : pl.wiki
  return { title: wiki.replace(/_/g, ' '), url: `https://en.wikipedia.org/wiki/${encodeURIComponent(wiki.replace(/ /g, '_'))}` }
}

/** Text a search matches against: names, country, event text and the titles of linked articles. */
const HAYSTACK = new Map(PLACES.map((pl) => [pl.id, normalize([pl.name, pl.local, pl.country, ...pl.events.flatMap((ev) => [ev.text, ...ev.slugs.map((s) => findArticle(s)?.title ?? '')])].join(' '))]))

/** Quadratic arc from a to b, bowed to the left of the direction of travel. */
function arc([x0, y0]: [number, number], [x1, y1]: [number, number]) {
  const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy)
  const cx = (x0 + x1) / 2 - (dy / (len || 1)) * len * 0.2, cy = (y0 + y1) / 2 + (dx / (len || 1)) * len * 0.2
  return `M${x0},${y0}Q${cx},${cy} ${x1},${y1}`
}

export function MusicMap() {
  const [world, setWorld] = useState<World | null>(null)
  const box = useRef<HTMLDivElement>(null)
  const panel = useRef<HTMLElement>(null)
  const [size, setSize] = useState({ w: 800, h: 480 })
  const [view, setView] = useState<View>({ x: 0, y: 0, w: W })
  const [region, setRegion] = useState<Region | 'world'>('world')
  const [params, setParams] = useSearchParams()
  const [selected, setSelectedState] = useState<Place | null>(() => PLACES.find((q) => q.id === params.get('p')) ?? null)
  const [journey, setJourneyState] = useState<Journey | null>(() => JOURNEYS.find((j) => j.id === params.get('j')) ?? null)
  const [yrs, setYrs] = useState<[number, number]>([YEAR_MIN, YEAR_MAX])
  const [eras, setEras] = useState<Set<Era>>(() => new Set(ERA_LIST))
  const [query, setQuery] = useState('')
  const [playing, setPlaying] = useState(false)
  const anim = useRef(0)
  const yrsNow = useRef(yrs)
  yrsNow.current = yrs
  const thumbs = useThumbs()

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }
  const setSelected = (pl: Place | null) => { setSelectedState(pl); setParam('p', pl?.id ?? null) }

  useEffect(() => {
    let live = true
    import('./world.json').then((m) => { if (live) setWorld(m.default as World) })
    return () => { live = false }
  }, [])

  useEffect(() => {
    const el = box.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setSize({ w: entry.contentRect.width, h: entry.contentRect.height }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const aspect = size.h / Math.max(size.w, 1)
  const k = view.w / Math.max(size.w, 1) // map units per screen pixel

  const clamp = (v: View): View => {
    const w = Math.min(Math.max(v.w, MIN_W), W * 1.1)
    const h = w * aspect
    return { w, x: Math.min(Math.max(v.x, -w * 0.3), W - w * 0.7), y: Math.min(Math.max(v.y, -h * 0.3), H - h * 0.7) }
  }

  const flyTo = (target: View) => {
    cancelAnimationFrame(anim.current)
    const to = clamp(target)
    if (reduced()) { setView(to); return }
    const from = view, dur = 750
    let t0 = -1
    const step = (t: number) => {
      if (t0 < 0) t0 = t
      const u = Math.min(1, (t - t0) / dur), s = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2
      setView({ x: from.x + (to.x - from.x) * s, y: from.y + (to.y - from.y) * s, w: from.w * Math.pow(to.w / from.w, s) })
      if (u < 1) anim.current = requestAnimationFrame(step)
    }
    anim.current = requestAnimationFrame(step)
  }

  const placeView = (pl: Place, w: number): View => { const [x, y] = at(pl); return { x: x - w / 2, y: y - (w * aspect) / 2, w } }
  const journeyView = (j: Journey) => fit(j.stops.map(([id]) => at(PLACES.find((q) => q.id === id)!)), aspect, 30)

  // first fit: the place or journey named in the address (?p=leipzig, ?j=mozart), else the whole globe
  const fitted = useRef(false)
  useEffect(() => {
    if (fitted.current || !world || size.w < 50) return
    fitted.current = true
    setView(clamp(journey ? journeyView(journey) : selected ? placeView(selected, 60) : worldView(aspect)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world, size, aspect])

  // on narrow screens the panel sits under the map: bring it into view when something is chosen
  useEffect(() => {
    if ((selected || journey) && fitted.current && window.innerWidth < 1024) panel.current?.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'nearest' })
  }, [selected, journey])

  const chooseRegion = (r: Region | 'world') => {
    setRegion(r)
    flyTo(r === 'world' ? worldView(aspect) : regionView(r, aspect))
  }
  const focus = (pl: Place) => { setSelected(pl); flyTo(placeView(pl, Math.min(view.w, 70))) }
  const chooseJourney = (j: Journey | null) => {
    setJourneyState(j)
    setParam('j', j?.id ?? null)
    if (j) { setSelectedState(null); flyTo(journeyView(j)) }
  }

  const zoomAt = (factor: number, sx: number, sy: number) => {
    setView((v) => {
      const w = Math.min(Math.max(v.w * factor, MIN_W), W * 1.1)
      const f = w / v.w
      return clamp({ w, x: v.x + sx * k * (1 - f), y: v.y + sy * k * (1 - f) })
    })
  }

  useEffect(() => {
    const el = box.current
    if (!el) return
    const onWheel = (ev: WheelEvent) => {
      ev.preventDefault()
      cancelAnimationFrame(anim.current)
      const r = el.getBoundingClientRect()
      zoomAt(Math.exp(ev.deltaY * 0.0015), ev.clientX - r.left, ev.clientY - r.top)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  })

  // drag to pan, two fingers to pinch; a tap without movement on a pin or a cluster acts on it
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const moved = useRef(0)
  const downOn = useRef<string | null>(null)
  const onDown = (ev: React.PointerEvent) => {
    cancelAnimationFrame(anim.current)
    ;(ev.currentTarget as Element).setPointerCapture(ev.pointerId)
    pointers.current.set(ev.pointerId, { x: ev.clientX, y: ev.clientY })
    if (pointers.current.size === 1) {
      moved.current = 0
      downOn.current = (ev.target as Element).closest('[data-hit]')?.getAttribute('data-hit') ?? null
    }
  }
  const onMove = (ev: React.PointerEvent) => {
    const ps = pointers.current
    const prev = ps.get(ev.pointerId)
    if (!prev) return
    const r = box.current!.getBoundingClientRect()
    if (ps.size === 1) {
      const dx = ev.clientX - prev.x, dy = ev.clientY - prev.y
      moved.current += Math.abs(dx) + Math.abs(dy)
      setView((v) => clamp({ ...v, x: v.x - dx * k, y: v.y - dy * k }))
    } else if (ps.size === 2) {
      const [a, b] = [...ps.entries()].map(([id, p]) => (id === ev.pointerId ? { x: ev.clientX, y: ev.clientY } : p))
      const [pa, pb] = [...ps.values()]
      const d0 = Math.hypot(pa.x - pb.x, pa.y - pb.y), d1 = Math.hypot(a.x - b.x, a.y - b.y)
      moved.current += 10
      if (d0 > 0 && d1 > 0) zoomAt(d0 / d1, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top)
    }
    ps.set(ev.pointerId, { x: ev.clientX, y: ev.clientY })
  }
  const onUp = (ev: React.PointerEvent) => {
    pointers.current.delete(ev.pointerId)
    if (ev.type !== 'pointerup' || pointers.current.size || moved.current >= 6 || !downOn.current) return
    const [kind, id] = downOn.current.split(':')
    if (kind === 'p') {
      const pl = PLACES.find((q) => q.id === id)
      if (pl) setSelected(pl)
    } else {
      const members = clusters.find((c) => c.id === id)?.members
      if (members) flyTo(fit(members.map((m) => at(m.pl)), aspect, 12))
    }
  }

  /* ---------------------------------------------------------------- filters */

  const q = normalize(query.trim())
  const matches = useMemo(() => (q ? PLACES.filter((pl) => HAYSTACK.get(pl.id)!.includes(q)) : []), [q])
  const matchIds = useMemo(() => new Set(matches.map((pl) => pl.id)), [matches])
  const shows = (ev: MapEvent, pl: Place) => {
    if (!eras.has(eraOf(ev, pl))) return false
    const y = yearsOf(ev.year)
    return !y || (y[1] >= yrs[0] && y[0] <= yrs[1])
  }
  const stopIds = useMemo(() => new Set(journey?.stops.map(([id]) => id) ?? []), [journey])
  const pins = useMemo(() => PLACES.map((pl) => {
    const evs = pl.events.filter((ev) => shows(ev, pl))
    const first = [...evs].sort((a, b) => (yearsOf(a.year)?.[0] ?? 0) - (yearsOf(b.year)?.[0] ?? 0))[0]
    const on = journey ? stopIds.has(pl.id) : q ? matchIds.has(pl.id) && evs.length > 0 : evs.length > 0
    return { pl, n: evs.length, era: first ? eraOf(first, pl) : eraOf(pl.events[0], pl), on }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [yrs, eras, journey, stopIds, q, matchIds])
  const shownEvents = pins.reduce((n, p) => n + (p.on ? p.n : 0), 0)

  /* ---------------------------------------------------------------- clustering in screen space */

  type Pin = (typeof pins)[number]
  const { singles, clusters } = useMemo(() => {
    const live = pins.filter((p) => p.on)
    if (journey || view.w < 14) return { singles: live, clusters: [] as { id: string; x: number; y: number; members: Pin[] }[] }
    const groups: { x: number; y: number; members: Pin[] }[] = []
    for (const p of [...live].sort((a, b) => b.n - a.n)) {
      const [x, y] = at(p.pl)
      const g = p.pl.id === selected?.id ? undefined : groups.find((o) => Math.hypot((o.x - x) / k, (o.y - y) / k) < 18 && !o.members.some((m) => m.pl.id === selected?.id))
      if (g) g.members.push(p)
      else groups.push({ x, y, members: [p] })
    }
    return {
      singles: groups.filter((g) => g.members.length === 1).map((g) => g.members[0]),
      clusters: groups.filter((g) => g.members.length > 1).map((g) => ({ ...g, id: g.members[0].pl.id })),
    }
  }, [pins, journey, view.w, k, selected])

  // labels: busiest single pins first, skipping any whose box would overlap one already placed
  const labelled = useMemo(() => {
    const out = new Set<string>()
    if (view.w > 300 && !journey) return out
    const boxes: [number, number, number, number][] = []
    for (const { pl, n } of [...singles].sort((a, b) => b.n - a.n)) {
      const [x, y] = at(pl), sx = (x - view.x) / k, sy = (y - view.y) / k
      if (sx < -50 || sy < -20 || sx > size.w + 50 || sy > size.h + 20) continue
      const r = 4 + Math.sqrt(n) * 1.6
      const bx: [number, number, number, number] = [sx - r, sy - 9, sx + r + 6 + pl.name.length * 6.6, sy + 9]
      if (boxes.some((o) => bx[0] < o[2] && bx[2] > o[0] && bx[1] < o[3] && bx[3] > o[1])) continue
      boxes.push(bx); out.add(pl.id)
    }
    return out
  }, [view, k, size, singles, journey])

  /* ---------------------------------------------------------------- play */

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => {
      if (yrsNow.current[1] >= YEAR_MAX) { setPlaying(false); return }
      setYrs(([a, b]) => [a, Math.min(YEAR_MAX, b + 5)])
    }, 70)
    return () => window.clearInterval(id)
  }, [playing])
  const play = () => {
    if (playing) { setPlaying(false); return }
    setYrs(([a]) => [a, a + 10])
    setPlaying(true)
  }

  const toggleEra = (era: Era) => setEras((s) => {
    const next = new Set(s)
    if (next.has(era)) next.delete(era)
    else next.add(era)
    return next.size ? next : new Set(ERA_LIST)
  })

  const vh = view.w * aspect
  const byRegion = useMemo(() => (Object.keys(REGIONS) as Region[]).map((r) => [r, PLACES.filter((pl) => pl.region === r)] as const), [])
  const fullRange = yrs[0] === YEAR_MIN && yrs[1] === YEAR_MAX
  const totalEvents = PLACES.reduce((n, pl) => n + pl.events.length, 0)

  return (
    <div className="mx-auto max-w-6xl space-y-5 px-4 py-5 lg:px-8 lg:py-8">
      <header className="space-y-2">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Âm nhạc học · Atlas</p>
        <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[38px]">Nơi âm nhạc đã xảy ra</h2>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          {PLACES.length} địa điểm, {totalEvents} sự kiện, {JOURNEYS.length} hành trình. Kéo thanh thời gian hoặc bấm ▶ cho lịch sử tự chạy; màu chấm là thời kỳ, chấm càng lớn càng nhiều sự kiện, vòng có số là nhiều nơi gần nhau. Chọn một hành trình để đi theo đời một nhạc sĩ.
        </p>
      </header>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <label className="relative flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-2 focus-within:border-[var(--color-gold)]">
          <SearchIcon width={16} height={16} className="shrink-0 text-[var(--color-ink-faint)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && matches[0]) { focus(matches[0]); setQuery('') } }}
            placeholder="Tìm nơi, nhạc sĩ, tác phẩm… (vd. Bach, Huế, opera)"
            className="min-w-0 flex-1 bg-transparent text-[14px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-faint)]"
          />
          {query && <button onClick={() => setQuery('')} aria-label="Xoá" className="rounded-lg p-0.5 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]"><XIcon width={15} height={15} /></button>}
          {q && (
            <div className="mm-results">
              {matches.length ? matches.slice(0, 8).map((pl) => (
                <button key={pl.id} onClick={() => { focus(pl); setQuery('') }}>
                  <span className="font-medium text-[var(--color-ink)]">{pl.name}</span> <span className="text-[var(--color-ink-faint)]">· {pl.country} · {pl.events.length} sự kiện</span>
                </button>
              )) : <p className="px-3 py-2 text-[13px] text-[var(--color-ink-faint)]">Không có nơi nào khớp.</p>}
            </div>
          )}
        </label>
        <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="tablist" aria-label="Vùng">
          {(['world', ...Object.keys(REGIONS)] as (Region | 'world')[]).map((r) => (
            <button key={r} role="tab" aria-selected={region === r} onClick={() => chooseRegion(r)} className={clsx('mm-chip', region === r && 'is-on')}>
              {r === 'world' ? 'Thế giới' : REGIONS[r].title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-3">
          <div ref={box} className="mm-frame" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
            {!world && <p className="absolute inset-0 grid place-items-center text-[13px] text-[var(--color-ink-faint)]">Đang tải bản đồ…</p>}
            <svg viewBox={`${view.x} ${view.y} ${view.w} ${vh}`} className="h-full w-full" role="img" aria-label="Bản đồ các địa điểm âm nhạc">
              <defs>
                <clipPath id="mm-globe"><path d={SPHERE} /></clipPath>
              </defs>
              <path d={SPHERE} className="mm-sphere" />
              <g clipPath="url(#mm-globe)">
                <path d={GRATICULE} className="mm-graticule" style={{ strokeWidth: 0.6 * k }} />
                {world && (
                  <>
                    <path d={world.land} className="mm-coast" style={{ strokeWidth: 5 * k }} />
                    <path d={world.land} className="mm-land" />
                    <path d={world.borders} className="mm-border" style={{ strokeWidth: 0.6 * k }} />
                  </>
                )}
              </g>
              <path d={SPHERE} className="mm-rim" style={{ strokeWidth: 1.2 * k }} />
              {view.w > 60 && view.w < 760 && SEAS.map(([name, lon, lat]) => {
                const [x, y] = proj(lon, lat)
                return <text key={name + lon} x={x} y={y} className="mm-sea" style={{ fontSize: 11 * k, letterSpacing: 3 * k }}>{name}</text>
              })}

              {pins.filter((p) => !p.on).map(({ pl }) => {
                const [x, y] = at(pl)
                return <circle key={pl.id} cx={x} cy={y} r={2.2 * k} className="mm-ghost" />
              })}

              {journey && journey.stops.slice(1).map(([id], i) => {
                const a = at(PLACES.find((q2) => q2.id === journey.stops[i][0])!), b = at(PLACES.find((q2) => q2.id === id)!)
                return <path key={journey.id + i} d={arc(a, b)} pathLength={1} className="mm-route" style={{ strokeWidth: 2.2 * k, animationDelay: `${i * 0.45}s` }} />
              })}

              {clusters.map((c) => {
                const n = c.members.length, r = 9 + Math.sqrt(n) * 2.4
                return (
                  <g key={c.id} data-hit={`c:${c.id}`} className="mm-cluster" role="button" aria-label={`${n} nơi gần nhau`}>
                    <circle cx={c.x} cy={c.y} r={r * 1.7 * k} className="mm-cluster-halo" />
                    <circle cx={c.x} cy={c.y} r={r * k} style={{ strokeWidth: 1.5 * k }} />
                    <text x={c.x} y={c.y + 4 * k} style={{ fontSize: 11.5 * k }}>{n}</text>
                  </g>
                )
              })}

              {singles.map(({ pl, n, era }) => {
                const [x, y] = at(pl), on = selected?.id === pl.id, r = 4 + Math.sqrt(Math.max(n, 1)) * 1.6
                const stop = journey ? journey.stops.findIndex(([id]) => id === pl.id) : -1
                return (
                  <g key={pl.id} data-hit={`p:${pl.id}`} className={clsx('mm-pin', on && 'is-on')} style={{ '--c': eraColor(era) } as CSSProperties} role="button" aria-label={pl.name} tabIndex={0} onKeyDown={(ev) => { if (ev.key === 'Enter') setSelected(pl) }}>
                    <circle cx={x} cy={y} r={Math.max(14, r + 6) * k} className="mm-hit" />
                    <circle cx={x} cy={y} r={r * 2 * k} className="mm-halo" />
                    {on && <circle cx={x} cy={y} r={r * k} className="mm-pulse" style={{ strokeWidth: 1.5 * k }} />}
                    {stop >= 0 ? (
                      <>
                        <circle cx={x} cy={y} r={9 * k} className="mm-stop" style={{ strokeWidth: 1.5 * k }} />
                        <text x={x} y={y + 3.6 * k} className="mm-stop-n" style={{ fontSize: 10 * k }}>{stop + 1}</text>
                      </>
                    ) : (
                      <circle cx={x} cy={y} r={(on ? r + 2 : r) * k} className="mm-dot" style={{ strokeWidth: 1.5 * k }} />
                    )}
                    {(labelled.has(pl.id) || on || stop >= 0) && (
                      <text x={x + ((stop >= 0 ? 9 : r) + 4) * k} y={y + 4 * k} className="mm-label" style={{ fontSize: 12 * k, strokeWidth: 3 * k }}>{pl.name}</text>
                    )}
                  </g>
                )
              })}
            </svg>
            {!fullRange && !journey && <p className="mm-year" aria-live="polite">{yrs[0]}<span>–</span>{yrs[1]}</p>}
            {journey && <p className="mm-year mm-year-name">{journey.name}</p>}
            <div className="mm-zoom">
              <button aria-label="Phóng to" onClick={() => zoomAt(0.6, size.w / 2, size.h / 2)}>+</button>
              <button aria-label="Thu nhỏ" onClick={() => zoomAt(1 / 0.6, size.w / 2, size.h / 2)}>−</button>
            </div>
          </div>

          <div className={clsx('mm-timeline', journey && 'opacity-50')}>
            <div className="min-w-0 flex-1">
              <div className="mm-range">
                <div className="mm-track" style={{ '--a': `${((yrs[0] - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100}%`, '--b': `${((yrs[1] - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100}%` } as CSSProperties} />
                <input type="range" min={YEAR_MIN} max={YEAR_MAX} step={5} value={yrs[0]} aria-label="Từ năm" onChange={(e) => { setPlaying(false); setYrs(([, b]) => [Math.min(Number(e.target.value), b - 10), b]) }} />
                <input type="range" min={YEAR_MIN} max={YEAR_MAX} step={5} value={yrs[1]} aria-label="Đến năm" onChange={(e) => { setPlaying(false); setYrs(([a]) => [a, Math.max(Number(e.target.value), a + 10)]) }} />
              </div>
              <div className="mt-1 flex justify-between text-[11px] tabular-nums text-[var(--color-ink-faint)]">
                {[1100, 1300, 1500, 1700, 1900, 2025].map((y) => <span key={y}>{y}</span>)}
              </div>
            </div>
            <div className="text-right text-[12px] leading-tight text-[var(--color-ink-muted)]">
              <p className="font-display text-[17px] font-semibold tabular-nums text-[var(--color-ink)]">{yrs[0]} – {yrs[1]}</p>
              <p>{shownEvents} sự kiện</p>
              {!fullRange && <button className="mt-0.5 underline hover:text-[var(--color-ink)]" onClick={() => { setPlaying(false); setYrs([YEAR_MIN, YEAR_MAX]) }}>Mọi thời</button>}
            </div>
            <button onClick={play} className="mm-play" aria-label={playing ? 'Dừng' : 'Cho lịch sử chạy'}>{playing ? '❚❚' : '▶'}</button>
          </div>

          <div className="flex flex-wrap gap-1.5" aria-label="Thời kỳ">
            {ERA_LIST.map((era) => (
              <button key={era} onClick={() => toggleEra(era)} aria-pressed={eras.has(era)} className={clsx('mm-era', !eras.has(era) && 'is-off')} style={{ '--c': eraColor(era) } as CSSProperties}>
                <i /> {ERAS[era].title}
              </button>
            ))}
          </div>

          <div className="space-y-1.5">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">Hành trình</p>
            <div className="flex flex-wrap gap-1.5">
              {JOURNEYS.map((j) => (
                <button key={j.id} onClick={() => chooseJourney(journey?.id === j.id ? null : j)} className={clsx('mm-chip', journey?.id === j.id && 'is-on')}>
                  {j.name} <span className="opacity-60">{j.stops.length}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside ref={panel} className="mm-panel" aria-live="polite">
          {journey && !selected ? (
            <JourneyPanel journey={journey} onClose={() => chooseJourney(null)} onStop={focus} />
          ) : selected ? (
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[22px] font-semibold leading-tight text-[var(--color-ink)]">{selected.name}</h3>
                  <p className="text-[12.5px] text-[var(--color-ink-muted)]">{[selected.local, selected.country].filter(Boolean).join(' · ')}</p>
                </div>
                {journey && <button onClick={() => setSelected(null)} className="rounded-lg px-2 py-1 text-[12px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← {journey.name}</button>}
                <button onClick={() => setSelected(null)} aria-label="Đóng" className="rounded-lg p-1 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]">
                  <XIcon width={16} height={16} />
                </button>
              </div>
              <ol className="space-y-3">
                {[...selected.events].sort((a, b) => (yearsOf(a.year)?.[0] ?? 0) - (yearsOf(b.year)?.[0] ?? 0)).map((ev, i) => {
                  const era = eraOf(ev, selected), kind = KINDS[kindOf(ev)], src = sourceOf(ev, selected)
                  const thumb = thumbs?.[ev.slugs[0]]
                  return (
                    <li key={i} className={clsx('mm-event', !shows(ev, selected) && 'is-out')} style={{ '--c': eraColor(era) } as CSSProperties}>
                      <div className="flex gap-3">
                        {thumb && <img src={thumb[0]} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} className={clsx('mm-thumb', thumb[1] && 'is-drawing')} />}
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-semibold"><span className="text-[var(--c)]">{ev.year}</span> <span className="font-normal text-[var(--color-ink-faint)]">· <span aria-hidden>{kind.mark}</span> {kind.title} · {ERAS[era].title}</span></p>
                          <p className="text-[14px] leading-snug text-[var(--color-ink)]">{rich(ev.text)}</p>
                        </div>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        {ev.slugs.map((s) => (
                          <Link key={s} to={`/theory/${s}`} className="mm-link">
                            {findArticle(s)?.title ?? s} <ArrowUpRightIcon width={12} height={12} />
                          </Link>
                        ))}
                        <a href={src.url} target="_blank" rel="noreferrer" className="text-[11px] text-[var(--color-ink-faint)] underline hover:text-[var(--color-ink)]">Nguồn: Wikipedia — {src.title}</a>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          ) : (
            <div className="space-y-3 text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">
              <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Chọn một nơi</p>
              <p>Chạm vào một chấm, một vòng có số, một hành trình, hoặc tìm theo tên. Mỗi nơi và mỗi hành trình có địa chỉ riêng: chép đường dẫn để gửi đúng chỗ đó.</p>
              <ul className="grid grid-cols-2 gap-1 text-[12.5px]">
                {Object.values(KINDS).map((kd) => <li key={kd.title}><span aria-hidden className="mr-1 text-[var(--color-gold)]">{kd.mark}</span>{kd.title}</li>)}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <section className="space-y-4">
        {byRegion.map(([r, list]) => (
          <div key={r}>
            <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">{REGIONS[r].title} <span className="font-normal">· {list.length}</span></h3>
            <div className="flex flex-wrap gap-1.5">
              {[...list].sort((a, b) => a.name.localeCompare(b.name, 'vi')).map((pl) => (
                <button key={pl.id} onClick={() => { setRegion(r); focus(pl) }} className={clsx('mm-chip', selected?.id === pl.id && 'is-on')}>
                  {pl.name} <span className="opacity-60">{pl.events.length}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <p className="text-[11.5px] text-[var(--color-ink-faint)]">Dữ liệu bản đồ: Natural Earth 1:50m (phạm vi công cộng), qua gói world-atlas; phép chiếu Equal Earth. Toạ độ là trung tâm thành phố hoặc trung tâm vùng. Màu thời kỳ của một sự kiện nhạc cổ điển phương Tây tính theo năm diễn ra sự kiện.</p>
      </section>
    </div>
  )
}

function JourneyPanel({ journey, onClose, onStop }: { journey: Journey; onClose: () => void; onStop: (pl: Place) => void }) {
  const art = findArticle(journey.slug)
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">Hành trình</p>
          <h3 className="font-display text-[22px] font-semibold leading-tight text-[var(--color-ink)]">{journey.name}</h3>
        </div>
        <button onClick={onClose} aria-label="Đóng" className="rounded-lg p-1 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]"><XIcon width={16} height={16} /></button>
      </div>
      <ol className="mm-journey">
        {journey.stops.map(([id, year, text], i) => {
          const pl = PLACES.find((q) => q.id === id)!
          return (
            <li key={i}>
              <button onClick={() => onStop(pl)} className="group w-full text-left">
                <span className="mm-journey-n">{i + 1}</span>
                <span className="block text-[12px] font-semibold text-[var(--color-gold)]">{year} · {pl.name}</span>
                <span className="block text-[14px] leading-snug text-[var(--color-ink)] group-hover:underline">{rich(text)}</span>
              </button>
            </li>
          )
        })}
      </ol>
      {art && <Link to={`/theory/${journey.slug}`} className="mm-link">{art.title} <ArrowUpRightIcon width={12} height={12} /></Link>}
    </div>
  )
}
