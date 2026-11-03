import { useEffect, useRef } from 'react'
import { brandHue } from '../../lib/tint'
import { RESOLVED, PARTS, type PartId } from './taxonomy'
import { SKY, skyOf } from './constellation'

/**
 * The branches of musicology as stars in 3D space, drawn on a canvas with a hand-written perspective projection
 * (no WebGL, no CSS 3D: the same in every browser). Drag to turn the sky, wheel / +− to move closer; tapping a star
 * flies the camera to it; a star chosen from outside (a link in the star card) is flown to as well. The canvas only
 * redraws while something moves.
 */
type V3 = [number, number, number]
const BY_ID = new Map(RESOLVED.map((b) => [b.id, b]))
const DEPTH: Record<PartId, number> = { intro: 0, historical: -170, systematic: 150, applied: 120, practice: -140 }
const hash = (s: string) => {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

const BASE = (() => {
  const { stars, edges } = skyOf('wide')
  const { w, h } = SKY.wide
  const pos = new Map<string, V3>()
  for (const s of stars) pos.set(s.id, [s.x - w / 2, s.y - h / 2, DEPTH[s.part] + ((hash(s.id) % 120) - 60)])
  // background dust on a large sphere shell
  const dust: V3[] = Array.from({ length: 260 }, (_, i) => {
    const u = ((i * 0.618034) % 1) * 2 - 1
    const t = i * 2.39996
    const r = 900 + (hash(String(i)) % 500)
    const q = Math.sqrt(1 - u * u)
    return [Math.cos(t) * q * r, u * r * 0.7, Math.sin(t) * q * r]
  })
  const partCentre = (p: PartId): V3 => {
    const own = stars.filter((s) => s.part === p).map((s) => pos.get(s.id)!)
    const c = own.reduce((a, v) => [a[0] + v[0], a[1] + v[1], a[2] + v[2]] as V3, [0, 0, 0] as V3)
    return [c[0] / own.length, Math.min(...own.map((v) => v[1])) - 40, c[2] / own.length]
  }
  return { stars, edges, pos, dust, partCentre }
})()

/** cy: where on the screen (fraction of its height) the target sits — higher when a card covers the bottom. */
const OVERVIEW = { tx: 0, ty: 0, tz: 0, dist: 820, yaw: -0.35, pitch: 0.18, cx: 0.5, cy: 0.7 }
type Cam = typeof OVERVIEW
/** The whole sky, placed clear of the heading: to the right on wide screens, below it on narrow ones. */
const overview = (W: number, H: number): Cam => (W / H > 1.1 ? { ...OVERVIEW, dist: 1000, cx: 0.6, cy: 0.6 } : OVERVIEW)
const ease = (t: number) => 1 - Math.pow(1 - t, 3)

export function Sky3D({ selected, onSelect, lit }: { selected: string | null; onSelect: (id: string | null) => void; lit: (id: string) => number }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const cam = useRef({ ...OVERVIEW, dist: 2200 })
  const size = useRef({ W: 1, H: 1 })
  const draw = useRef<() => void>(() => {})
  const fly = useRef<(to: Cam, ms?: number) => void>(() => {})
  const sel = useRef<string | null>(selected)
  const litRef = useRef(lit)
  litRef.current = lit

  useEffect(() => {
    const cv = canvas.current!
    const ctx = cv.getContext('2d')!
    let W = 0, H = 0, dpr = 1, raf = 0, anim: { from: Cam; to: Cam; t0: number; ms: number } | null = null
    const resize = () => {
      const r = cv.getBoundingClientRect()
      dpr = Math.min(2, devicePixelRatio || 1)
      W = r.width
      H = r.height
      size.current = { W, H }
      cv.width = Math.round(W * dpr)
      cv.height = Math.round(H * dpr)
      render()
    }
    const project = (p: V3) => {
      const c = cam.current
      let x = p[0] - c.tx, y = p[1] - c.ty, z = p[2] - c.tz
      const cy = Math.cos(c.yaw), sy = Math.sin(c.yaw)
      ;[x, z] = [x * cy - z * sy, x * sy + z * cy]
      const cp = Math.cos(c.pitch), sp = Math.sin(c.pitch)
      ;[y, z] = [y * cp - z * sp, y * sp + z * cp]
      const d = z + c.dist
      if (d < 30) return null
      const f = Math.min(W / (W < 640 ? 860 : 1080), H / 760) * 820
      return { x: W * c.cx + (x * f) / d, y: H * c.cy + (y * f) / d, k: f / d, d }
    }
    const render = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)
      const s = sel.current
      const near = new Set(s ? BASE.edges.filter((e) => e.a === s || e.b === s).flatMap((e) => [e.a, e.b]) : [])
      // dust
      ctx.fillStyle = 'rgba(243, 226, 189, 0.5)'
      for (const p of BASE.dust) {
        const q = project(p)
        if (!q) continue
        const r = Math.max(0.4, Math.min(1.4, q.k * 1.4))
        ctx.globalAlpha = Math.min(0.7, 0.25 + q.k)
        ctx.fillRect(q.x, q.y, r, r)
      }
      ctx.globalAlpha = 1
      // threads
      for (const e of BASE.edges) {
        const a = project(BASE.pos.get(e.a)!), b = project(BASE.pos.get(e.b)!)
        if (!a || !b) continue
        const on = s && (e.a === s || e.b === s)
        ctx.strokeStyle = on ? 'rgba(246, 220, 162, 0.9)' : `rgba(226, 182, 110, ${s ? 0.07 : e.cross ? 0.16 : 0.28})`
        ctx.lineWidth = (0.4 + Math.min(e.n, 14) * 0.09) * Math.min(2.2, (a.k + b.k) / 2) * (on ? 1.6 : 1)
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
      // stars, far first
      const items = BASE.stars.map((st) => ({ st, q: project(BASE.pos.get(st.id)!) })).filter((x) => x.q).sort((a, b) => b.q!.d - a.q!.d)
      for (const { st, q } of items) {
        const b = BY_ID.get(st.id)!
        const dim = s && st.id !== s && !near.has(st.id)
        const l = 0.5 + 0.5 * litRef.current(st.id)
        const r = Math.max(1.2, st.r * q!.k * 1.1)
        const hue = brandHue(b.hue)
        const g = ctx.createRadialGradient(q!.x, q!.y, 0, q!.x, q!.y, r * 4.5)
        g.addColorStop(0, `oklch(0.92 0.06 ${hue} / ${dim ? 0.15 : 0.55 * l})`)
        g.addColorStop(1, 'rgba(226,182,110,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(q!.x, q!.y, r * 4.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = st.id === s ? '#fff3d6' : `oklch(0.88 0.06 ${hue} / ${dim ? 0.25 : l})`
        ctx.beginPath()
        ctx.arc(q!.x, q!.y, r, 0, Math.PI * 2)
        ctx.fill()
      }
      // names: the chosen star first, then its neighbours / near stars, nearest first; a name that would overlap one
      // already drawn is left out
      const boxes: [number, number, number, number][] = []
      ctx.textAlign = 'center'
      const named = items.filter(({ st, q }) => st.id === s || near.has(st.id) || (!s && q!.k > 1.25)).sort((a, b) => (a.st.id === s ? -1 : b.st.id === s ? 1 : a.q!.d - b.q!.d))
      for (const { st, q } of named) {
        const main = st.id === s
        ctx.font = `${main ? 600 : 500} ${main ? 14 : 12}px system-ui, sans-serif`
        const text = BY_ID.get(st.id)!.title.split(':')[0]
        const w = ctx.measureText(text).width
        const y = q!.y - Math.max(1.2, st.r * q!.k * 1.1) - 8
        const box: [number, number, number, number] = [q!.x - w / 2 - 4, y - 13, q!.x + w / 2 + 4, y + 4]
        if (boxes.some((o) => box[0] < o[2] && box[2] > o[0] && box[1] < o[3] && box[3] > o[1])) continue
        boxes.push(box)
        ctx.fillStyle = main ? 'rgba(255,243,214,0.95)' : 'rgba(244,236,220,0.75)'
        ctx.fillText(text, q!.x, y)
      }
      // part names in the overview
      if (!s) {
        ctx.font = 'italic 600 14px Georgia, serif'
        ctx.textAlign = 'center'
        for (const p of ['historical', 'systematic', 'applied', 'practice'] as PartId[]) {
          const q = project(BASE.partCentre(p))
          if (!q || q.k > 1.6) continue
          ctx.fillStyle = 'rgba(226,182,110,0.85)'
          ctx.fillText(PARTS[p].title, q.x, q.y)
        }
      }
    }
    const loop = (now: number) => {
      if (anim) {
        const t = Math.min(1, (now - anim.t0) / anim.ms)
        const e = ease(t)
        const c = cam.current
        for (const k of Object.keys(OVERVIEW) as (keyof Cam)[]) c[k] = anim.from[k] + (anim.to[k] - anim.from[k]) * e
        if (t >= 1) anim = null
      }
      render()
      raf = anim ? requestAnimationFrame(loop) : 0
    }
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }
    draw.current = () => kick()
    fly.current = (to, ms = 1100) => {
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
      // keep turning the short way round
      const c = { ...cam.current }
      let yaw = to.yaw
      while (yaw - c.yaw > Math.PI) yaw -= Math.PI * 2
      while (c.yaw - yaw > Math.PI) yaw += Math.PI * 2
      anim = { from: c, to: { ...to, yaw }, t0: performance.now(), ms: reduced ? 1 : ms }
      kick()
    }

    // drag to turn, tap to choose
    let down: { x: number; y: number; yaw: number; pitch: number; moved: boolean } | null = null
    const onDown = (e: PointerEvent) => {
      down = { x: e.clientX, y: e.clientY, yaw: cam.current.yaw, pitch: cam.current.pitch, moved: false }
    }
    const onMove = (e: PointerEvent) => {
      if (!down) return
      const dx = e.clientX - down.x, dy = e.clientY - down.y
      if (!down.moved && Math.hypot(dx, dy) < 6) return
      down.moved = true
      anim = null
      cam.current.yaw = down.yaw + dx * 0.006
      if (e.pointerType === 'mouse') cam.current.pitch = Math.max(-1.1, Math.min(1.1, down.pitch + dy * 0.004))
      kick()
    }
    const onUp = (e: PointerEvent) => {
      if (!down) return
      const wasDrag = down.moved
      down = null
      if (wasDrag) return
      const r = cv.getBoundingClientRect()
      const x = e.clientX - r.left, y = e.clientY - r.top
      let best: { id: string; d: number } | null = null
      for (const st of BASE.stars) {
        const q = project(BASE.pos.get(st.id)!)
        if (!q) continue
        const d = Math.hypot(q.x - x, q.y - y)
        if (d < Math.max(22, st.r * q.k * 3) && (!best || d < best.d)) best = { id: st.id, d }
      }
      onSelect(best ? best.id : null)
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      anim = null
      cam.current.dist = Math.max(160, Math.min(2400, cam.current.dist * Math.exp(e.deltaY * 0.0012)))
      kick()
    }
    cv.addEventListener('pointerdown', onDown)
    addEventListener('pointermove', onMove)
    addEventListener('pointerup', onUp)
    cv.addEventListener('wheel', onWheel, { passive: false })
    const ro = new ResizeObserver(resize)
    ro.observe(cv)
    resize()
    fly.current(sel.current ? toStar(sel.current) : overview(W, H), 1800)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      cv.removeEventListener('pointerdown', onDown)
      removeEventListener('pointermove', onMove)
      removeEventListener('pointerup', onUp)
      cv.removeEventListener('wheel', onWheel)
    }
    // the handlers read refs; onSelect is the page's setter
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // a star chosen here or from outside (a link in the card): fly to it; none: back out to the whole sky
  useEffect(() => {
    sel.current = selected
    fly.current(selected ? toStar(selected) : overview(size.current.W, size.current.H))
  }, [selected])

  const zoom = (f: number) => {
    cam.current.dist = Math.max(160, Math.min(2400, cam.current.dist * f))
    draw.current()
  }

  return (
    <div className="s3">
      <canvas ref={canvas} className="s3-canvas" aria-label="Bầu trời các phân ngành âm nhạc học: kéo để xoay, chạm một ngôi sao để bay tới" role="img" />
      <div className="s3-zoom">
        <button type="button" onClick={() => zoom(0.8)} aria-label="Lại gần">+</button>
        <button type="button" onClick={() => zoom(1.25)} aria-label="Ra xa">−</button>
      </div>
      {/* the same stars as a list, for keyboards and screen readers */}
      <ul className="sr-only">
        {RESOLVED.map((b) => (
          <li key={b.id}>
            <button type="button" onClick={() => onSelect(b.id)}>{b.title}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** The camera close to a star, looking at it from a little to the side so its neighbours fan out behind. */
function toStar(id: string) {
  const p = BASE.pos.get(id)
  if (!p) return OVERVIEW
  const h = hash(id)
  return { tx: p[0], ty: p[1], tz: p[2], dist: 300, yaw: ((h % 100) / 100 - 0.5) * 1.2, pitch: 0.12, cx: 0.5, cy: 0.4 }
}
