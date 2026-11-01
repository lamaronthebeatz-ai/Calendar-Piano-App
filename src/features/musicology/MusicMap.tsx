import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import { findArticle } from '../theory/wiki'
import { ArrowUpRightIcon, XIcon } from '../../components/icons'
import { ERAS, PLACES, REGIONS, YEAR_MAX, YEAR_MIN, eraOf, yearsOf, type Era, type MapEvent, type Place, type Region } from './places'
import './music-map.css'

/** Same projection as scripts/map/world.py: Web Mercator on a 1000-wide plane cut at 75°N. */
const W = 1000
const merc = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
const Y0 = merc(75)
const px = (lon: number) => ((lon + 180) / 360) * W
const py = (lat: number) => ((Y0 - merc(lat)) / (2 * Math.PI)) * W

interface World { w: number; h: number; land: string; borders: string }
/** x, y = top-left of the view in map units; w = its width (the height follows the frame's aspect). */
interface View { x: number; y: number; w: number }

const MIN_W = 10
const ERA_LIST = Object.keys(ERAS) as Era[]
const eraColor = (era: Era) => `oklch(0.74 0.15 ${ERAS[era].hue})`

/** Meridians and parallels every 15°, as one path. */
const GRATICULE = (() => {
  let d = ''
  for (let lon = -180; lon <= 180; lon += 15) d += `M${px(lon)},${py(75)}V${py(-56)}`
  for (let lat = -45; lat <= 75; lat += 15) d += `M0,${py(lat)}H${W}`
  return d
})()

const SEAS: [string, number, number][] = [
  ['Đại Tây Dương', -38, 32],
  ['Thái Bình Dương', -140, 12],
  ['Thái Bình Dương', 165, 22],
  ['Ấn Độ Dương', 78, -18],
  ['Địa Trung Hải', 17, 35.2],
  ['Biển Đông', 113.5, 13.5],
  ['Biển Bắc', 3.5, 56.5],
]

function regionView(r: Region, aspect: number): View {
  const [west, north, east, south] = REGIONS[r].box
  const x0 = px(west), x1 = px(east), y0 = py(north), y1 = py(south)
  const w = Math.max(x1 - x0, (y1 - y0) / aspect)
  return { x: (x0 + x1) / 2 - w / 2, y: (y0 + y1) / 2 - (w * aspect) / 2, w }
}

/** The whole map, as tall as the frame allows, centred on 15°E when the sides must be cropped. */
function worldView(aspect: number, h: number): View {
  const w = Math.min(W, h / aspect)
  return { w, x: Math.min(Math.max(px(15) - w / 2, 0), W - w), y: (h - w * aspect) / 2 }
}

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** "*Title*" in event text becomes italics. */
const rich = (s: string) => s.split(/\*([^*]+)\*/g).map((t, i) => (i % 2 ? <em key={i}>{t}</em> : t))

export function MusicMap() {
  const [world, setWorld] = useState<World | null>(null)
  const box = useRef<HTMLDivElement>(null)
  const panel = useRef<HTMLElement>(null)
  const [size, setSize] = useState({ w: 800, h: 480 })
  const [view, setView] = useState<View>({ x: 0, y: 0, w: W })
  const [region, setRegion] = useState<Region | 'world'>('world')
  const [params, setParams] = useSearchParams()
  const [selected, setSelectedState] = useState<Place | null>(() => PLACES.find((q) => q.id === params.get('p')) ?? null)
  const [range, setRange] = useState<[number, number]>([YEAR_MIN, YEAR_MAX])
  const [eras, setEras] = useState<Set<Era>>(() => new Set(ERA_LIST))
  const [playing, setPlaying] = useState(false)
  const anim = useRef(0)
  const rangeNow = useRef(range)
  rangeNow.current = range

  const setSelected = (pl: Place | null) => {
    setSelectedState(pl)
    const next = new URLSearchParams(params)
    if (pl) next.set('p', pl.id)
    else next.delete('p')
    setParams(next, { replace: true })
  }

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
    const w = Math.min(Math.max(v.w, MIN_W), W)
    const h = w * aspect
    const maxY = (world?.h ?? 512) - h
    return { w, x: Math.min(Math.max(v.x, -w * 0.25), W - w * 0.75), y: Math.min(Math.max(v.y, Math.min(0, maxY) - h * 0.25), Math.max(maxY, 0) + h * 0.25) }
  }

  const flyTo = (target: View) => {
    cancelAnimationFrame(anim.current)
    const to = clamp(target)
    if (reduced()) { setView(to); return }
    const from = view, dur = 700
    let t0 = -1
    const step = (t: number) => {
      if (t0 < 0) t0 = t
      const u = Math.min(1, (t - t0) / dur), s = 1 - Math.pow(1 - u, 3)
      setView({ x: from.x + (to.x - from.x) * s, y: from.y + (to.y - from.y) * s, w: from.w * Math.pow(to.w / from.w, s) })
      if (u < 1) anim.current = requestAnimationFrame(step)
    }
    anim.current = requestAnimationFrame(step)
  }

  const placeView = (pl: Place, w: number): View => ({ x: px(pl.lon) - w / 2, y: py(pl.lat) - (w * aspect) / 2, w })

  // first fit: the whole world, or the place named in the address (?p=leipzig)
  const fitted = useRef(false)
  useEffect(() => {
    if (fitted.current || !world || size.w < 50) return
    fitted.current = true
    setView(selected ? clamp(placeView(selected, 70)) : worldView(aspect, world.h))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world, size, aspect])

  // on narrow screens the panel sits under the map: bring it into view when a place is chosen
  useEffect(() => {
    if (selected && fitted.current && window.innerWidth < 1024) panel.current?.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'nearest' })
  }, [selected])

  const chooseRegion = (r: Region | 'world') => {
    setRegion(r)
    flyTo(r === 'world' ? worldView(aspect, world?.h ?? 512) : regionView(r, aspect))
  }

  const focus = (pl: Place) => {
    setSelected(pl)
    flyTo(placeView(pl, Math.min(view.w, 90)))
  }

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

  // drag to pan, two fingers to pinch; a tap without movement on a pin selects it
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
    if (ev.type === 'pointerup' && pointers.current.size === 0 && moved.current < 6 && downPin.current) {
      const pl = PLACES.find((q) => q.id === downPin.current)
      if (pl) setSelected(pl)
    }
  }

  // time and period filters
  const shows = (ev: MapEvent, pl: Place) => {
    if (!eras.has(eraOf(ev, pl))) return false
    const y = yearsOf(ev.year)
    return !y || (y[1] >= range[0] && y[0] <= range[1])
  }
  const pins = useMemo(() => PLACES.map((pl) => {
    const evs = pl.events.filter((ev) => shows(ev, pl))
    const first = [...evs].sort((a, b) => (yearsOf(a.year)?.[0] ?? 0) - (yearsOf(b.year)?.[0] ?? 0))[0]
    return { pl, n: evs.length, era: first ? eraOf(first, pl) : null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [range, eras])
  const shownEvents = pins.reduce((n, p) => n + p.n, 0)

  // play: sweep the end of the range forward through history
  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => {
      if (rangeNow.current[1] >= YEAR_MAX) { setPlaying(false); return }
      setRange(([a, b]) => [a, Math.min(YEAR_MAX, b + 5)])
    }, 70)
    return () => window.clearInterval(id)
  }, [playing])
  const play = () => {
    if (playing) { setPlaying(false); return }
    setRange(([a]) => [a, a + 10])
    setPlaying(true)
  }

  const toggleEra = (era: Era) => setEras((s) => {
    const next = new Set(s)
    if (next.has(era)) next.delete(era)
    else next.add(era)
    return next.size ? next : new Set(ERA_LIST)
  })

  const vh = view.w * aspect
  // labels: busiest visible places first, skipping any that would overlap one already placed (screen-space boxes)
  const labelled = useMemo(() => {
    const out = new Set<string>()
    if (view.w > 300) return out
    const boxes: [number, number, number, number][] = []
    for (const { pl, n } of [...pins].filter((p) => p.n).sort((a, b) => b.n - a.n)) {
      const sx = (px(pl.lon) - view.x) / k, sy = (py(pl.lat) - view.y) / k
      if (sx < -50 || sy < -20 || sx > size.w + 50 || sy > size.h + 20) continue
      const r = 5 + Math.sqrt(n) * 1.6
      const bx: [number, number, number, number] = [sx - r, sy - 9, sx + r + 6 + pl.name.length * 6.6, sy + 9]
      if (boxes.some((o) => bx[0] < o[2] && bx[2] > o[0] && bx[1] < o[3] && bx[3] > o[1])) continue
      boxes.push(bx); out.add(pl.id)
    }
    return out
  }, [view, k, size, pins])

  const byRegion = useMemo(() => (Object.keys(REGIONS) as Region[]).map((r) => [r, PLACES.filter((pl) => pl.region === r)] as const), [])
  const fullRange = range[0] === YEAR_MIN && range[1] === YEAR_MAX

  return (
    <div className="mx-auto max-w-6xl space-y-5 px-4 py-5 lg:px-8 lg:py-8">
      <header className="space-y-2">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Âm nhạc học · Atlas</p>
        <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[38px]">Nơi âm nhạc đã xảy ra</h2>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">
          {PLACES.length} địa điểm, {PLACES.reduce((n, pl) => n + pl.events.length, 0)} sự kiện. Kéo thanh thời gian để xem âm nhạc đang diễn ra ở đâu, hoặc bấm ▶ cho lịch sử tự chạy; màu chấm là thời kỳ, chấm càng lớn càng nhiều sự kiện. Chạm vào một chấm để đọc và mở bài liên quan.
        </p>
      </header>

      <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 lg:mx-0 lg:px-0" role="tablist" aria-label="Vùng">
        {(['world', ...Object.keys(REGIONS)] as (Region | 'world')[]).map((r) => (
          <button key={r} role="tab" aria-selected={region === r} onClick={() => chooseRegion(r)} className={clsx('mm-chip', region === r && 'is-on')}>
            {r === 'world' ? 'Thế giới' : REGIONS[r].title}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_330px]">
        <div className="space-y-3">
          <div ref={box} className="mm-frame" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
            {!world && <p className="absolute inset-0 grid place-items-center text-[13px] text-[var(--color-ink-faint)]">Đang tải bản đồ…</p>}
            <svg viewBox={`${view.x} ${view.y} ${view.w} ${vh}`} className="h-full w-full" role="img" aria-label="Bản đồ các địa điểm âm nhạc">
              <defs>
                <clipPath id="mm-plane"><rect x={0} y={0} width={W} height={world?.h ?? 512} /></clipPath>
              </defs>
              <g clipPath="url(#mm-plane)">
                <path d={GRATICULE} className="mm-graticule" style={{ strokeWidth: 0.6 * k }} />
                {world && (
                  <>
                    <path d={world.land} className="mm-coast" style={{ strokeWidth: 5 * k }} />
                    <path d={world.land} className="mm-land" />
                    <path d={world.borders} className="mm-border" style={{ strokeWidth: 0.6 * k }} />
                  </>
                )}
              </g>
              {view.w > 60 && view.w < 760 && SEAS.map(([name, lon, lat]) => (
                <text key={name + lon} x={px(lon)} y={py(lat)} className="mm-sea" style={{ fontSize: 11 * k, letterSpacing: 3 * k }}>{name}</text>
              ))}
              {pins.filter((p) => !p.n).map(({ pl }) => (
                <circle key={pl.id} cx={px(pl.lon)} cy={py(pl.lat)} r={2.5 * k} className="mm-ghost" />
              ))}
              {pins.filter((p) => p.n).map(({ pl, n, era }) => {
                const x = px(pl.lon), y = py(pl.lat), on = selected?.id === pl.id, r = 4 + Math.sqrt(n) * 1.6
                return (
                  <g key={pl.id} data-pin={pl.id} className={clsx('mm-pin', on && 'is-on')} style={{ '--c': eraColor(era!) } as CSSProperties} role="button" aria-label={pl.name} tabIndex={0} onKeyDown={(ev) => { if (ev.key === 'Enter') setSelected(pl) }}>
                    <circle cx={x} cy={y} r={Math.max(14, r + 6) * k} className="mm-hit" />
                    <circle cx={x} cy={y} r={r * 2 * k} className="mm-halo" />
                    {on && <circle cx={x} cy={y} r={r * k} className="mm-pulse" style={{ strokeWidth: 1.5 * k }} />}
                    <circle cx={x} cy={y} r={(on ? r + 2 : r) * k} className="mm-dot" style={{ strokeWidth: 1.5 * k }} />
                    {(labelled.has(pl.id) || on) && (
                      <text x={x + (r + 4) * k} y={y + 4 * k} style={{ fontSize: 12 * k, strokeWidth: 3 * k }}>{pl.name}</text>
                    )}
                  </g>
                )
              })}
            </svg>
            {!fullRange && (
              <p className="mm-year" aria-live="polite">{range[0]}<span>–</span>{range[1]}</p>
            )}
            <div className="mm-zoom">
              <button aria-label="Phóng to" onClick={() => zoomAt(0.6, size.w / 2, size.h / 2)}>+</button>
              <button aria-label="Thu nhỏ" onClick={() => zoomAt(1 / 0.6, size.w / 2, size.h / 2)}>−</button>
            </div>
          </div>

          <div className="mm-timeline">
            <div className="min-w-0 flex-1">
              <div className="mm-range">
                <div className="mm-track" style={{ '--a': `${((range[0] - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100}%`, '--b': `${((range[1] - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100}%` } as CSSProperties} />
                <input type="range" min={YEAR_MIN} max={YEAR_MAX} step={5} value={range[0]} aria-label="Từ năm" onChange={(e) => { setPlaying(false); setRange(([, b]) => [Math.min(Number(e.target.value), b - 10), b]) }} />
                <input type="range" min={YEAR_MIN} max={YEAR_MAX} step={5} value={range[1]} aria-label="Đến năm" onChange={(e) => { setPlaying(false); setRange(([a]) => [a, Math.max(Number(e.target.value), a + 10)]) }} />
              </div>
              <div className="mt-1 flex justify-between text-[11px] tabular-nums text-[var(--color-ink-faint)]">
                {[1100, 1300, 1500, 1700, 1900, 2025].map((y) => <span key={y}>{y}</span>)}
              </div>
            </div>
            <div className="text-right text-[12px] leading-tight text-[var(--color-ink-muted)]">
              <p className="font-display text-[17px] font-semibold tabular-nums text-[var(--color-ink)]">{range[0]} – {range[1]}</p>
              <p>{shownEvents} sự kiện</p>
              {!fullRange && <button className="mt-0.5 underline hover:text-[var(--color-ink)]" onClick={() => { setPlaying(false); setRange([YEAR_MIN, YEAR_MAX]) }}>Mọi thời</button>}
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
        </div>

        <aside ref={panel} className="mm-panel" aria-live="polite">
          {selected ? (
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[22px] font-semibold leading-tight text-[var(--color-ink)]">{selected.name}</h3>
                  <p className="text-[12.5px] text-[var(--color-ink-muted)]">{[selected.local, selected.country].filter(Boolean).join(' · ')}</p>
                </div>
                <button onClick={() => setSelected(null)} aria-label="Đóng" className="rounded-lg p-1 text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]">
                  <XIcon width={16} height={16} />
                </button>
              </div>
              <ol className="space-y-3">
                {selected.events.map((ev, i) => (
                  <li key={i} className={clsx('mm-event', !shows(ev, selected) && 'is-out')} style={{ '--c': eraColor(eraOf(ev, selected)) } as CSSProperties}>
                    <p className="text-[12px] font-semibold"><span className="text-[var(--c)]">{ev.year}</span> <span className="font-normal text-[var(--color-ink-faint)]">· {ERAS[eraOf(ev, selected)].title}</span></p>
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
            <div className="space-y-2 text-[13.5px] leading-relaxed text-[var(--color-ink-muted)]">
              <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Chọn một nơi</p>
              <p>Chạm vào một chấm trên bản đồ, hoặc một địa điểm trong danh sách bên dưới. Mỗi nơi có địa chỉ riêng — chép đường dẫn để gửi đúng nơi đó cho người khác.</p>
            </div>
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
        <p className="text-[11.5px] text-[var(--color-ink-faint)]">Dữ liệu bản đồ: Natural Earth 1:50m (phạm vi công cộng), qua gói world-atlas. Toạ độ là trung tâm thành phố hoặc trung tâm vùng. Màu thời kỳ của một sự kiện châu Âu tính theo năm diễn ra sự kiện.</p>
      </section>
    </div>
  )
}
