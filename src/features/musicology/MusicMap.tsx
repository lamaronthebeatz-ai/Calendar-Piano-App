import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { findArticle, normalize } from '../theory/wiki'
import { useThumbs } from '../theory/thumbs'
import { ArrowUpRightIcon, FilterIcon, SearchIcon, XIcon } from '../../components/icons'
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
const steps = (a: number, b: number, step: number) => Array.from({ length: Math.floor((b - a) / step) + 1 }, (_, i) => a + i * step)
/** The outline of the projected globe, and meridians and parallels every 15°. */
const SPHERE = polyline([...steps(-90, 90, 3).map((lat) => proj(-180, lat)), ...steps(-90, 90, 3).reverse().map((lat) => proj(180, lat))]) + 'Z'
const GRATICULE = [
  ...steps(-165, 165, 15).map((lon) => polyline(steps(-90, 90, 3).map((lat) => proj(lon, lat)))),
  ...steps(-75, 75, 15).map((lat) => polyline([proj(-180, lat), proj(180, lat)])),
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
  // a tall phone frame shows a little more than its height allows, so the globe keeps some width
  const w = Math.min(W, (H / aspect) * (aspect > 1 ? 1.15 : 1))
  const h = w * aspect
  const y = h >= H ? (H - h) / 2 : Math.min(Math.max(proj(15, 30)[1] - h / 2, 0), H - h)
  return { w, x: Math.min(Math.max(proj(15, 0)[0] - w / 2, 0), W - w), y }
}

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** "*Title*" in event text becomes italics. */
const rich = (s: string) => s.split(/\*([^*]+)\*/g).map((t, i) => (i % 2 ? <em key={i}>{t}</em> : t))

/** Text a search matches against: names, country, event text and the titles of linked articles. */
const HAYSTACK = new Map(PLACES.map((pl) => [pl.id, normalize([pl.name, pl.local, pl.country, ...pl.events.flatMap((ev) => [ev.text, ...ev.slugs.map((s) => findArticle(s)?.title ?? '')])].join(' '))]))

/** Search index of events: their year and text, the place, and the linked articles' titles and aliases. */
const EVENT_INDEX = PLACES.flatMap((pl) => pl.events.map((ev) => ({
  pl, ev,
  hay: normalize([ev.year, ev.text.replace(/\*/g, ''), ...ev.slugs.flatMap((s) => { const a = findArticle(s); return a ? [a.title, ...(a.aliases ?? [])] : [] })].join(' ')),
})))

/** People and works on the map: every linked article, with the places it appears at (and its journey, if any). */
const SUBJECTS = (() => {
  const by = new Map<string, { slug: string; title: string; hay: string; places: Place[] }>()
  for (const pl of PLACES) for (const ev of pl.events) for (const slug of ev.slugs) {
    const a = findArticle(slug)
    if (!a) continue
    let e = by.get(slug)
    if (!e) by.set(slug, (e = { slug, title: a.title, hay: normalize([a.title, ...(a.aliases ?? [])].join(' ')), places: [] }))
    if (!e.places.includes(pl)) e.places.push(pl)
  }
  return [...by.values()].sort((a, b) => b.places.length - a.places.length)
})()

/** Quadratic arc from a to b, bowed to the left of the direction of travel. */
function arc([x0, y0]: [number, number], [x1, y1]: [number, number]) {
  const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy)
  const cx = (x0 + x1) / 2 - (dy / (len || 1)) * len * 0.2, cy = (y0 + y1) / 2 + (dx / (len || 1)) * len * 0.2
  return `M${x0},${y0}Q${cx},${cy} ${x1},${y1}`
}

export function MusicMap() {
  const [world, setWorld] = useState<World | null>(null)
  const box = useRef<HTMLDivElement>(null)
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
  const [layers, setLayers] = useState(false)
  const [expanded, setExpanded] = useState(false)
  // the sheet follows the finger on its handle (direct style, no re-render), then snaps: up = expand, down = shrink or close
  const sheet = useRef<HTMLElement>(null)
  const drag = useRef<{ y: number; dy: number } | null>(null)
  const onSheetDown = (ev: React.PointerEvent) => {
    ;(ev.currentTarget as Element).setPointerCapture(ev.pointerId)
    drag.current = { y: ev.clientY, dy: 0 }
    sheet.current?.classList.add('is-dragging')
  }
  const onSheetMove = (ev: React.PointerEvent) => {
    const d = drag.current
    if (!d || !sheet.current) return
    d.dy = ev.clientY - d.y
    sheet.current.style.transform = `translateY(${Math.max(d.dy, expanded ? 0 : -60)}px)`
  }
  const onSheetUp = () => {
    const d = drag.current
    drag.current = null
    const el = sheet.current
    if (!el || !d) return
    el.classList.remove('is-dragging')
    el.style.transform = ''
    if (Math.abs(d.dy) < 6) setExpanded((v) => !v)
    else if (d.dy < -40) setExpanded(true)
    else if (d.dy > 60) {
      if (expanded) setExpanded(false)
      else closeSheet()
    }
  }
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

  // two levels of detail: the 1:110m outline (19 KB) at once, the 1:50m one only when the user zooms in
  const [detail, setDetail] = useState<World | null>(null)
  useEffect(() => {
    let live = true
    import('./world-lo.json').then((m) => { if (live) setWorld(m.default as World) })
    return () => { live = false }
  }, [])
  useEffect(() => {
    if (detail || view.w > 260) return
    let live = true
    import('./world.json').then((m) => { if (live) setDetail(m.default as World) })
    return () => { live = false }
  }, [detail, view.w])

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

  /*
   * While the map moves (drag, pinch, wheel, fly-to) nothing is re-rendered: the live view is kept in a ref and the
   * whole <svg> is moved with a CSS transform, which the compositor does without repainting the outlines. When the
   * motion ends the view is committed once, the viewBox changes, and the transform is cleared in the same frame.
   */
  const svg = useRef<SVGSVGElement>(null)
  const liveView = useRef(view)
  const settle = useRef(0)
  const showLive = (L: View) => {
    liveView.current = L
    const el = svg.current
    if (!el) return
    const a = view.w / L.w, sw = size.w / L.w
    el.style.transform = `translate(${(view.x - L.x) * sw}px, ${(view.y - L.y) * sw}px) scale(${a})`
    el.classList.add('is-moving')
  }
  const commit = () => {
    window.clearTimeout(settle.current)
    const L = liveView.current
    if (L.x === view.x && L.y === view.y && L.w === view.w) { svg.current?.classList.remove('is-moving'); if (svg.current) svg.current.style.transform = ''; return }
    setView(L)
  }
  useLayoutEffect(() => {
    liveView.current = view
    const el = svg.current
    if (el) { el.style.transform = ''; el.classList.remove('is-moving') }
  }, [view])

  const flyTo = (target: View) => {
    cancelAnimationFrame(anim.current)
    const to = clamp(target)
    if (reduced()) { setView(to); return }
    const from = liveView.current, dur = 700
    let t0 = -1
    const step = (t: number) => {
      if (t0 < 0) t0 = t
      const u = Math.min(1, (t - t0) / dur), s = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2
      showLive({ x: from.x + (to.x - from.x) * s, y: from.y + (to.y - from.y) * s, w: from.w * Math.pow(to.w / from.w, s) })
      if (u < 1) anim.current = requestAnimationFrame(step)
      else commit()
    }
    anim.current = requestAnimationFrame(step)
  }

  // the sheet covers part of the map: keep the chosen place in the middle of what is still visible
  const placeView = (pl: Place, w: number): View => {
    const [x, y] = at(pl), wide = size.w >= 700, kk = w / Math.max(size.w, 1)
    const dx = wide ? 200 * kk : 0, dy = wide ? 0 : -size.h * 0.27 * kk
    return { x: x - w / 2 + dx, y: y - (w * aspect) / 2 - dy, w }
  }
  const journeyView = (j: Journey) => fit(j.stops.map(([id]) => at(PLACES.find((q) => q.id === id)!)), aspect, 30)

  // first fit: the place or journey named in the address (?p=leipzig, ?j=mozart), else the whole globe
  const fitted = useRef(false)
  useEffect(() => {
    if (fitted.current || !world || size.w < 50) return
    fitted.current = true
    // a tall phone frame opens on Europe, where most places are; wider frames open on the whole globe
    const phone = !journey && !selected && aspect > 1.2
    if (phone) setRegion('europe')
    setView(clamp(journey ? journeyView(journey) : selected ? placeView(selected, 60) : phone ? regionView('europe', aspect) : worldView(aspect)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world, size, aspect])

  const chooseRegion = (r: Region | 'world') => {
    setRegion(r)
    flyTo(r === 'world' ? worldView(aspect) : regionView(r, aspect))
  }
  const focus = (pl: Place) => { setSelected(pl); flyTo(placeView(pl, Math.min(liveView.current.w, 70))) }
  const chooseJourney = (j: Journey | null) => {
    setJourneyState(j)
    setParam('j', j?.id ?? null)
    if (j) { setSelectedState(null); flyTo(journeyView(j)) }
  }

  const zoomAt = (factor: number, sx: number, sy: number) => {
    const L = liveView.current, kl = L.w / Math.max(size.w, 1)
    const w = Math.min(Math.max(L.w * factor, MIN_W), W * 1.1), f = w / L.w
    showLive(clamp({ w, x: L.x + sx * kl * (1 - f), y: L.y + sy * kl * (1 - f) }))
  }
  const zoomButton = (factor: number) => {
    const L = liveView.current, w = Math.min(Math.max(L.w * factor, MIN_W), W * 1.1)
    flyTo({ w, x: L.x + (L.w - w) / 2, y: L.y + ((L.w - w) * aspect) / 2 })
  }

  useEffect(() => {
    const el = box.current
    if (!el) return
    const onWheel = (ev: WheelEvent) => {
      ev.preventDefault()
      cancelAnimationFrame(anim.current)
      const r = el.getBoundingClientRect()
      zoomAt(Math.exp(ev.deltaY * 0.0015), ev.clientX - r.left, ev.clientY - r.top)
      window.clearTimeout(settle.current)
      settle.current = window.setTimeout(commit, 160)
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
      const L = liveView.current, kl = L.w / Math.max(size.w, 1)
      showLive(clamp({ ...L, x: L.x - dx * kl, y: L.y - dy * kl }))
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
    if (!pointers.current.size) commit()
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
  // results match from the start of a word: "bach" finds Bach, not Offenbach
  const wq = ` ${q}`
  const placeHits = useMemo(() => (q ? PLACES.filter((pl) => ` ${normalize([pl.name, pl.local, pl.country].join(' '))}`.includes(wq)).slice(0, 4) : []), [q, wq])
  const subjectHits = useMemo(() => (q ? SUBJECTS.filter((x) => ` ${x.hay}`.includes(wq)).slice(0, 4) : []), [q, wq])
  const eventHits = useMemo(() => (q ? EVENT_INDEX.filter((x) => ` ${x.hay}`.includes(wq)).slice(0, 8) : []), [q, wq])
  const [focusEv, setFocusEv] = useState<{ ev: MapEvent; n: number } | null>(null)
  const pickEvent = (pl: Place, ev: MapEvent) => { focus(pl); setFocusEv({ ev, n: Date.now() }); setQuery('') }
  const pickSubject = (x: (typeof SUBJECTS)[number]) => {
    const j = JOURNEYS.find((jj) => jj.slug === x.slug)
    if (j) chooseJourney(j)
    else focus(x.places[0])
    setQuery('')
  }
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
  const shown = view.w <= 260 && detail ? detail : world
  const fullRange = yrs[0] === YEAR_MIN && yrs[1] === YEAR_MAX
  const sheetOpen = Boolean(selected || journey)
  function closeSheet() {
    if (selected) { setSelected(null); if (!journey) setExpanded(false) }
    else { chooseJourney(null); setExpanded(false) }
  }

  return (
    <div className="mm-full">
      <div ref={box} className="mm-frame" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
        {!world && <p className="absolute inset-0 grid place-items-center text-[13px] text-[var(--color-ink-faint)]">Đang tải bản đồ…</p>}
        <svg ref={svg} viewBox={`${view.x} ${view.y} ${view.w} ${vh}`} className="mm-svg h-full w-full" role="img" aria-label="Bản đồ các địa điểm âm nhạc">
          <path d={SPHERE} className="mm-sphere" />
          <path d={GRATICULE} className="mm-graticule" style={{ strokeWidth: 0.5 * k }} />
          {shown && (
            <>
              <path d={shown.land} className="mm-land" style={{ strokeWidth: 0.7 * k }} />
              <path d={shown.borders} className="mm-border" style={{ strokeWidth: 0.5 * k }} />
            </>
          )}
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
      </div>

      {/* top: search, regions, layers */}
      <div className="mm-top">
        <div className="relative flex items-center gap-2">
          <label className="mm-search">
            <SearchIcon width={16} height={16} className="shrink-0 text-[var(--color-ink-faint)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return
                if (placeHits[0]) { focus(placeHits[0]); setQuery('') }
                else if (subjectHits[0]) pickSubject(subjectHits[0])
                else if (eventHits[0]) pickEvent(eventHits[0].pl, eventHits[0].ev)
              }}
              placeholder="Tìm nơi, nhạc sĩ, tác phẩm…"
            />
            {query && <button onClick={() => setQuery('')} aria-label="Xoá" className="rounded-lg p-0.5 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]"><XIcon width={15} height={15} /></button>}
          </label>
          <button onClick={() => setLayers((v) => !v)} aria-expanded={layers} className={clsx('mm-round', layers && 'is-on')} aria-label="Thời kỳ và hành trình">
            <FilterIcon width={17} height={17} />
          </button>
            {q && (
              <div className="mm-results">
                {placeHits.length > 0 && <p className="mm-results-h">Địa điểm</p>}
                {placeHits.map((pl) => (
                  <button key={pl.id} onClick={() => { focus(pl); setQuery('') }}>
                    <span className="font-medium text-[var(--color-ink)]">{pl.name}</span> <span className="text-[var(--color-ink-faint)]">· {pl.country} · {pl.events.length} sự kiện</span>
                  </button>
                ))}
                {subjectHits.length > 0 && <p className="mm-results-h">Nhạc sĩ · tác phẩm · chủ đề</p>}
                {subjectHits.map((x) => {
                  const j = JOURNEYS.some((jj) => jj.slug === x.slug)
                  return (
                    <button key={x.slug} onClick={() => pickSubject(x)}>
                      <span className="font-medium text-[var(--color-ink)]">{x.title}</span>{' '}
                      <span className="text-[var(--color-ink-faint)]">· {j ? 'xem hành trình · ' : ''}{x.places.length} nơi: {x.places.slice(0, 3).map((pl) => pl.name).join(', ')}{x.places.length > 3 ? '…' : ''}</span>
                    </button>
                  )
                })}
                {eventHits.length > 0 && <p className="mm-results-h">Sự kiện</p>}
                {eventHits.map(({ pl, ev }, i) => (
                  <button key={`${pl.id}-${i}`} onClick={() => pickEvent(pl, ev)} className="mm-result-ev">
                    <span className="mm-result-year">{ev.year}</span>
                    <span className="min-w-0"><span className="line-clamp-2 text-[var(--color-ink)]">{rich(ev.text)}</span><span className="text-[12px] text-[var(--color-ink-faint)]">{pl.name}</span></span>
                  </button>
                ))}
                {!placeHits.length && !subjectHits.length && !eventHits.length && <p className="px-3 py-2 text-[13px] text-[var(--color-ink-faint)]">Không có nơi, người hay sự kiện nào khớp.</p>}
              </div>
            )}
        </div>
        <div className={clsx('no-scrollbar mt-2 flex gap-1.5 overflow-x-auto transition-opacity', q && 'pointer-events-none opacity-0')} role="tablist" aria-label="Vùng">
          {(['world', ...Object.keys(REGIONS)] as (Region | 'world')[]).map((r) => (
            <button key={r} role="tab" aria-selected={region === r} onClick={() => chooseRegion(r)} className={clsx('mm-chip', region === r && 'is-on')}>
              {r === 'world' ? 'Thế giới' : REGIONS[r].title}
            </button>
          ))}
        </div>
        {layers && (
          <div className="mm-layers">
            <p className="mm-layers-h">Thời kỳ</p>
            <div className="flex flex-wrap gap-1.5">
              {ERA_LIST.map((era) => (
                <button key={era} onClick={() => toggleEra(era)} aria-pressed={eras.has(era)} className={clsx('mm-era', !eras.has(era) && 'is-off')} style={{ '--c': eraColor(era) } as CSSProperties}>
                  <i /> {ERAS[era].title}
                </button>
              ))}
            </div>
            <p className="mm-layers-h mt-3">Hành trình</p>
            <div className="flex flex-wrap gap-1.5">
              {JOURNEYS.map((j) => (
                <button key={j.id} onClick={() => { setLayers(false); chooseJourney(journey?.id === j.id ? null : j) }} className={clsx('mm-chip', journey?.id === j.id && 'is-on')}>
                  {j.name}
                </button>
              ))}
            </div>
            <p className="mt-3 text-[11px] leading-snug text-[var(--color-ink-faint)]">{PLACES.length} nơi · {PLACES.reduce((n, pl) => n + pl.events.length, 0)} sự kiện. Bản đồ: Natural Earth (phạm vi công cộng), phép chiếu Equal Earth.</p>
          </div>
        )}
      </div>

      <div className={clsx('mm-zoom', sheetOpen && 'is-shifted')}>
        <button aria-label="Phóng to" onClick={() => zoomButton(0.55)}>+</button>
        <button aria-label="Thu nhỏ" onClick={() => zoomButton(1 / 0.55)}>−</button>
      </div>

      {/* bottom: the time bar */}
      <div className={clsx('mm-timebar', sheetOpen && 'is-under')}>
        <div className="min-w-0 flex-1">
          <div className="mb-0.5 flex items-baseline justify-between text-[11.5px] text-[var(--color-ink-muted)]">
            <span className="font-display text-[15px] font-semibold tabular-nums text-[var(--color-ink)]">{journey ? journey.name : `${yrs[0]} – ${yrs[1]}`}</span>
            <span>{shownEvents} sự kiện{!fullRange && <button className="ml-2 underline" onClick={() => { setPlaying(false); setYrs([YEAR_MIN, YEAR_MAX]) }}>Mọi thời</button>}</span>
          </div>
          <div className="mm-range">
            <div className="mm-track" style={{ '--a': `${((yrs[0] - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100}%`, '--b': `${((yrs[1] - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100}%` } as CSSProperties} />
            <input type="range" min={YEAR_MIN} max={YEAR_MAX} step={5} value={yrs[0]} aria-label="Từ năm" onChange={(e) => { setPlaying(false); setYrs(([, b]) => [Math.min(Number(e.target.value), b - 10), b]) }} />
            <input type="range" min={YEAR_MIN} max={YEAR_MAX} step={5} value={yrs[1]} aria-label="Đến năm" onChange={(e) => { setPlaying(false); setYrs(([a]) => [a, Math.max(Number(e.target.value), a + 10)]) }} />
          </div>
        </div>
        <button onClick={play} className="mm-tl-play" aria-label={playing ? 'Dừng' : 'Cho lịch sử chạy'}>{playing ? '❚❚' : '▶'}</button>
      </div>

      {/* the place (or journey) sheet: a timeline tree of what happened there */}
      {sheetOpen && (
        <aside ref={sheet} className={clsx('mm-sheet', expanded && 'is-expanded')} aria-live="polite">
          <button className="mm-handle" onPointerDown={onSheetDown} onPointerMove={onSheetMove} onPointerUp={onSheetUp} onPointerCancel={onSheetUp} aria-label={expanded ? 'Thu ngăn' : 'Mở rộng ngăn'}><span /></button>
          <div className="mm-sheet-body">
            {selected ? (
              <PlaceTree
                place={selected}
                shows={(ev) => shows(ev, selected)}
                thumbs={thumbs}
                focusEv={focusEv}
                back={journey ? { label: journey.name, go: () => setSelected(null) } : undefined}
                onClose={closeSheet}
              />
            ) : journey ? (
              <JourneyPanel journey={journey} onClose={closeSheet} onStop={focus} />
            ) : null}
          </div>
        </aside>
      )}
    </div>
  )
}

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI']

/** A place's events as a timeline tree: an axis of dots on top, then the events grouped by century. */
function PlaceTree({ place, shows, thumbs, focusEv, back, onClose }: {
  focusEv?: { ev: MapEvent; n: number } | null
  place: Place
  shows: (ev: MapEvent) => boolean
  thumbs: ReturnType<typeof useThumbs>
  back?: { label: string; go: () => void }
  onClose: () => void
}) {
  const [flash, setFlash] = useState(-1)
  const events = useMemo(() => [...place.events].map((ev) => ({ ev, y: yearsOf(ev.year) })).sort((a, b) => (a.y?.[0] ?? 99999) - (b.y?.[0] ?? 99999)), [place])
  const dated = events.filter((x) => x.y)
  const lo = dated.length ? Math.min(...dated.map((x) => x.y![0])) : 0
  const hi = dated.length ? Math.max(...dated.map((x) => x.y![0])) : 0
  const groups: { label: string; span: string; items: { ev: MapEvent; i: number }[] }[] = []
  events.forEach(({ ev, y }, i) => {
    const c = y ? Math.floor((y[0] - 1) / 100) + 1 : 0
    const label = c ? `Thế kỷ ${ROMAN[c]}` : 'Truyền thống'
    const span = c ? `${(c - 1) * 100 + 1} – ${c * 100}` : ''
    const g = groups[groups.length - 1]
    if (g?.label === label) g.items.push({ ev, i })
    else groups.push({ label, span, items: [{ ev, i }] })
  })
  const jump = (i: number) => {
    // scroll only the sheet: scrollIntoView would also move the page and the app shell behind it
    const el = document.getElementById(`mm-ev-${place.id}-${i}`), body = el?.closest('.mm-sheet-body')
    if (el && body) body.scrollTo({ top: el.offsetTop - body.clientHeight / 3, behavior: reduced() ? 'auto' : 'smooth' })
    setFlash(i)
    window.setTimeout(() => setFlash(-1), 1200)
  }
  // an event picked in the search: scroll the sheet to it once the sheet has opened
  useEffect(() => {
    const i = focusEv ? events.findIndex((x) => x.ev === focusEv.ev) : -1
    if (i < 0) return
    const t = window.setTimeout(() => jump(i), 380)
    return () => window.clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusEv, place])

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[23px] font-semibold leading-tight text-[var(--color-ink)]">{place.name}</h3>
          <p className="text-[12.5px] text-[var(--color-ink-muted)]">{[place.local, place.country, `${place.events.length} sự kiện`].filter(Boolean).join(' · ')}</p>
        </div>
        {back && <button onClick={back.go} className="rounded-lg px-2 py-1 text-[12px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">← {back.label}</button>}
        <button onClick={onClose} aria-label="Đóng" className="rounded-lg p-1 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]"><XIcon width={17} height={17} /></button>
      </div>

      {dated.length > 0 && (
        <div className="mm-axis" aria-label="Trục thời gian của nơi này">
          <div className="mm-axis-line" />
          {events.map(({ ev, y }, i) => y && (
            <button
              key={i}
              onClick={() => jump(i)}
              className="mm-axis-dot"
              title={`${ev.year} — ${ev.text.replace(/\*/g, '')}`}
              style={{ left: hi > lo ? `${((y[0] - lo) / (hi - lo)) * 100}%` : '50%', '--c': eraColor(eraOf(ev, place)) } as CSSProperties}
            />
          ))}
          <span className="mm-axis-end left-0">{lo}</span>
          {hi > lo && <span className="mm-axis-end right-0">{hi}</span>}
        </div>
      )}

      <div className="mm-ptree">
        {groups.map((g) => (
          <section key={g.label} className="mm-branch">
            <h4><span>{g.label}</span>{g.span && <small>{g.span}</small>}</h4>
            <ol>
              {g.items.map(({ ev, i }) => {
                const era = eraOf(ev, place), kind = KINDS[kindOf(ev)], thumb = thumbs?.[ev.slugs[0]]
                return (
                  <li key={i} id={`mm-ev-${place.id}-${i}`} className={clsx('mm-leaf', !shows(ev) && 'is-out', flash === i && 'is-flash')} style={{ '--c': eraColor(era) } as CSSProperties}>
                    <div className="flex gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-semibold"><span className="text-[var(--c)]">{ev.year}</span> <span className="font-normal text-[var(--color-ink-faint)]">· <span aria-hidden>{kind.mark}</span> {kind.title}</span></p>
                        <p className="text-[14px] leading-snug text-[var(--color-ink)]">{rich(ev.text)}</p>
                      </div>
                      {thumb && <img src={thumb[0]} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} className={clsx('mm-thumb', thumb[1] && 'is-drawing')} />}
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      {ev.slugs.map((s) => (
                        <Link key={s} to={`/theory/${s}`} className="mm-link">{findArticle(s)?.title ?? s} <ArrowUpRightIcon width={12} height={12} /></Link>
                      ))}
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </div>
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
