import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { findArticle } from '../theory/wiki'
import { ArrowUpRightIcon, XIcon } from '../../components/icons'
import { PLACES, REGIONS, type Place, type Region } from './places'
import './music-map.css'

/** Same projection as scripts/map/world.py: Web Mercator on a 1000-wide plane cut at 75°N. */
const W = 1000
const merc = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
const Y0 = merc(75)
const px = (lon: number) => ((lon + 180) / 360) * W
const py = (lat: number) => ((Y0 - merc(lat)) / (2 * Math.PI)) * W

interface World { w: number; h: number; land: string; borders: string }
/** x, y = top-left of the view in map units; w = its width (the height follows the box's aspect). */
interface View { x: number; y: number; w: number }

const WORLD_VIEW: View = { x: 0, y: 0, w: W }
const MIN_W = 10

function regionView(r: Region, aspect: number): View {
  const [west, north, east, south] = REGIONS[r].box
  const x0 = px(west), x1 = px(east), y0 = py(north), y1 = py(south)
  // fit the box inside the frame, centred
  const w = Math.max(x1 - x0, (y1 - y0) / aspect)
  return { x: (x0 + x1) / 2 - w / 2, y: (y0 + y1) / 2 - (w * aspect) / 2, w }
}

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** "*Title*" in event text becomes italics. */
const rich = (s: string) => s.split(/\*([^*]+)\*/g).map((t, i) => (i % 2 ? <em key={i}>{t}</em> : t))

export function MusicMap() {
  const [world, setWorld] = useState<World | null>(null)
  const box = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 800, h: 480 })
  const [view, setView] = useState<View>(WORLD_VIEW)
  const [region, setRegion] = useState<Region | 'world'>('world')
  const [selected, setSelected] = useState<Place | null>(null)
  const anim = useRef(0)
  const panel = useRef<HTMLElement>(null)

  // on narrow screens the panel sits under the map: bring it into view when a place is chosen
  useEffect(() => {
    if (selected && window.innerWidth < 1024) panel.current?.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'nearest' })
  }, [selected])

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
  const fitted = useRef(false)
  useEffect(() => {
    if (fitted.current || !world || size.w < 50) return
    fitted.current = true
    setView({ x: 0, w: W, y: (world.h - W * aspect) / 2 })
  }, [world, size, aspect])
  const k = view.w / Math.max(size.w, 1) // map units per screen pixel

  const clamp = (v: View): View => {
    const w = Math.min(Math.max(v.w, MIN_W), W)
    const h = w * aspect
    const maxY = (world?.h ?? 512) - h
    return { w, x: Math.min(Math.max(v.x, -w * 0.25), W - w * 0.75), y: Math.min(Math.max(v.y, Math.min(0, maxY) - h * 0.25), Math.max(maxY, 0) + h * 0.25) }
  }

  const flyTo = (target: View) => {
    cancelAnimationFrame(anim.current)
    const to = clamp(target)
    if (reduced()) { setView(to); return }
    const from = view, dur = 650
    let t0 = -1
    const step = (t: number) => {
      if (t0 < 0) t0 = t
      const u = Math.min(1, (t - t0) / dur), s = 1 - Math.pow(1 - u, 3)
      setView({ x: from.x + (to.x - from.x) * s, y: from.y + (to.y - from.y) * s, w: from.w * Math.pow(to.w / from.w, s) })
      if (u < 1) anim.current = requestAnimationFrame(step)
    }
    anim.current = requestAnimationFrame(step)
  }

  const chooseRegion = (r: Region | 'world') => {
    setRegion(r)
    flyTo(r === 'world' ? { ...WORLD_VIEW, y: ((world?.h ?? 512) - W * aspect) / 2 } : regionView(r, aspect))
  }

  const focus = (pl: Place) => {
    setSelected(pl)
    const w = Math.min(view.w, 90)
    flyTo({ x: px(pl.lon) - w / 2, y: py(pl.lat) - (w * aspect) / 2, w })
  }

  // zoom about a screen point
  const zoomAt = (factor: number, sx: number, sy: number) => {
    setView((v) => {
      const w = Math.min(Math.max(v.w * factor, MIN_W), W)
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

  // drag to pan, two fingers to pinch
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const moved = useRef(0)
  const downPin = useRef<string | null>(null)
  const onDown = (ev: React.PointerEvent) => {
    cancelAnimationFrame(anim.current)
    ;(ev.currentTarget as Element).setPointerCapture(ev.pointerId)
    pointers.current.set(ev.pointerId, { x: ev.clientX, y: ev.clientY })
    if (pointers.current.size === 1) {
      moved.current = 0
      downPin.current = (ev.target as Element).closest('[data-pin]')?.getAttribute('data-pin') ?? null
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
    // a tap (no drag) on a pin selects it; pointer capture keeps click events away from the pin itself
    if (ev.type === 'pointerup' && pointers.current.size === 0 && moved.current < 6 && downPin.current) {
      const pl = PLACES.find((q) => q.id === downPin.current)
      if (pl) setSelected(pl)
    }
  }

  const vh = view.w * aspect
  // labels: busiest places first, skip any that would overlap one already placed (screen-space boxes)
  const labelled = useMemo(() => {
    const out = new Set<string>()
    if (view.w > 300) return out
    const boxes: [number, number, number, number][] = []
    const order = [...PLACES].sort((a, b) => b.events.length - a.events.length)
    for (const pl of order) {
      const sx = (px(pl.lon) - view.x) / k, sy = (py(pl.lat) - view.y) / k
      if (sx < -50 || sy < -20 || sx > size.w + 50 || sy > size.h + 20) continue
      const bx: [number, number, number, number] = [sx - 6, sy - 9, sx + 10 + pl.name.length * 6.6, sy + 9]
      if (boxes.some((o) => bx[0] < o[2] && bx[2] > o[0] && bx[1] < o[3] && bx[3] > o[1])) continue
      boxes.push(bx); out.add(pl.id)
    }
    return out
  }, [view, k, size])
  const byRegion = useMemo(() => (Object.keys(REGIONS) as Region[]).map((r) => [r, PLACES.filter((pl) => pl.region === r)] as const), [])

  return (
    <div className="mx-auto max-w-6xl space-y-5 px-4 py-5 lg:px-8 lg:py-8">
      <header className="space-y-2">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Âm nhạc học · Bản đồ</p>
        <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[36px]">Nơi âm nhạc đã xảy ra</h2>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          {PLACES.length} địa điểm, {PLACES.reduce((n, pl) => n + pl.events.length, 0)} sự kiện: nơi các nhà soạn nhạc ra đời và làm việc, nơi những tác phẩm ra mắt, nơi một thể loại hình thành. Chạm vào một chấm để xem sự kiện và mở bài liên quan; kéo để di chuyển, lăn chuột hoặc chụm hai ngón để phóng to.
        </p>
      </header>

      <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 lg:mx-0 lg:px-0" role="tablist" aria-label="Vùng">
        {(['world', ...Object.keys(REGIONS)] as (Region | 'world')[]).map((r) => (
          <button
            key={r}
            role="tab"
            aria-selected={region === r}
            onClick={() => chooseRegion(r)}
            className={clsx('mm-chip', region === r && 'is-on')}
          >
            {r === 'world' ? 'Thế giới' : REGIONS[r].title}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div ref={box} className="mm-frame" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
          {!world && <p className="absolute inset-0 grid place-items-center text-[13px] text-[var(--color-ink-faint)]">Đang tải bản đồ…</p>}
          <svg viewBox={`${view.x} ${view.y} ${view.w} ${vh}`} className="h-full w-full" role="img" aria-label="Bản đồ các địa điểm âm nhạc">
            {world && (
              <>
                <path d={world.land} className="mm-land" />
                <path d={world.borders} className="mm-border" style={{ strokeWidth: 0.6 * k }} />
              </>
            )}
            {PLACES.map((pl) => {
              const x = px(pl.lon), y = py(pl.lat), on = selected?.id === pl.id
              return (
                <g key={pl.id} data-pin={pl.id} className={clsx('mm-pin', on && 'is-on')} role="button" aria-label={pl.name} tabIndex={0} onKeyDown={(ev) => { if (ev.key === 'Enter') setSelected(pl) }}>
                  <circle cx={x} cy={y} r={14 * k} className="mm-hit" />
                  <circle cx={x} cy={y} r={(on ? 7 : 5) * k} style={{ strokeWidth: 1.5 * k }} />
                  {(labelled.has(pl.id) || on) && (
                    <text x={x + 8 * k} y={y + 4 * k} style={{ fontSize: 12 * k, strokeWidth: 3 * k }}>{pl.name}</text>
                  )}
                </g>
              )
            })}
          </svg>
          <div className="mm-zoom">
            <button aria-label="Phóng to" onClick={() => zoomAt(0.6, size.w / 2, size.h / 2)}>+</button>
            <button aria-label="Thu nhỏ" onClick={() => zoomAt(1 / 0.6, size.w / 2, size.h / 2)}>−</button>
          </div>
        </div>

        <aside ref={panel} className="mm-panel" aria-live="polite">
          {selected ? (
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[20px] font-semibold leading-tight text-[var(--color-ink)]">{selected.name}</h3>
                  <p className="text-[12.5px] text-[var(--color-ink-muted)]">{[selected.local, selected.country].filter(Boolean).join(' · ')}</p>
                </div>
                <button onClick={() => setSelected(null)} aria-label="Đóng" className="rounded-lg p-1 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]">
                  <XIcon width={16} height={16} />
                </button>
              </div>
              <ol className="space-y-3">
                {selected.events.map((ev, i) => (
                  <li key={i} className="mm-event">
                    <p className="text-[12px] font-semibold text-[var(--color-gold)]">{ev.year}</p>
                    <p className="text-[14px] leading-snug text-[var(--color-ink)]">{rich(ev.text)}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {ev.slugs.map((s) => (
                        <Link key={s} to={`/theory/${s}`} className="mm-link">
                          {findArticle(s)?.title ?? s} <ArrowUpRightIcon width={12} height={12} />
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-[11.5px] text-[var(--color-ink-faint)]">
                Nguồn: <a className="underline hover:text-[var(--color-ink)]" href={`https://en.wikipedia.org/wiki/${encodeURIComponent(selected.wiki.replace(/ /g, '_'))}`} target="_blank" rel="noreferrer">Wikipedia — {selected.wiki}</a> và các bài được liên kết.
              </p>
            </div>
          ) : (
            <p className="text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">Chọn một chấm trên bản đồ, hoặc một địa điểm trong danh sách bên dưới.</p>
          )}
        </aside>
      </div>

      <section className="space-y-4">
        {byRegion.map(([r, list]) => (
          <div key={r}>
            <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">{REGIONS[r].title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {list.map((pl) => (
                <button key={pl.id} onClick={() => { setRegion(r); focus(pl) }} className={clsx('mm-chip', selected?.id === pl.id && 'is-on')}>
                  {pl.name} <span className="opacity-60">{pl.events.length}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <p className="text-[11.5px] text-[var(--color-ink-faint)]">Dữ liệu bản đồ: Natural Earth 1:50m (phạm vi công cộng), qua gói world-atlas. Toạ độ là trung tâm thành phố hoặc trung tâm vùng.</p>
      </section>
    </div>
  )
}
