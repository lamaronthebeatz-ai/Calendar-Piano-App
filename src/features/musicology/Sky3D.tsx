import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { brandHue } from '../../lib/tint'
import { ARTICLES } from '../theory/articles'
import { CATEGORIES } from '../theory/categories'
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

/**
 * The theory library around the branches, drawn like a web of neurons: each topic of the library is a cell body on a
 * shell around the sky, its articles small points clustered round it and drawn a little towards the branch of
 * musicology that lists them; every article sends a fibre to its topic (in the topic's colour) and to each of its
 * branches (faint gold), so an article that two branches share ties the web across.
 */
type Cat = keyof typeof CATEGORIES
const THEORY = (() => {
  const cats = (Object.keys(CATEGORIES) as Cat[]).filter((c) => ARTICLES.some((a) => a.category === c))
  const hubs = new Map<Cat, V3>()
  cats.forEach((c, i) => {
    const u = 1 - (2 * (i + 0.5)) / cats.length
    const t = i * 2.39996
    const q = Math.sqrt(1 - u * u)
    hubs.set(c, [Math.cos(t) * q * 660, u * 660 * 0.72, Math.sin(t) * q * 660])
  })
  const branchesOf = new Map<string, string[]>()
  for (const b of RESOLVED) for (const r of b.resolved) for (const a of r.articles) if (!branchesOf.get(a.slug)?.includes(b.id)) branchesOf.set(a.slug, [...(branchesOf.get(a.slug) ?? []), b.id])
  const byCat = new Map<Cat, number[]>(cats.map((c) => [c, []]))
  const arts = ARTICLES.filter((a) => hubs.has(a.category as Cat)).map((a, i) => {
    byCat.get(a.category as Cat)!.push(i)
    return { slug: a.slug, title: a.title, summary: a.summary, cat: a.category as Cat, branches: branchesOf.get(a.slug) ?? [], pos: [0, 0, 0] as V3 }
  })
  for (const [c, idx] of byCat) {
    const h = hubs.get(c)!
    idx.forEach((ai, k) => {
      const a = arts[ai]
      const u = 1 - (2 * (k + 0.5)) / idx.length
      const t = k * 2.39996 + (hash(c) % 7)
      const q = Math.sqrt(1 - u * u)
      const r = 55 + (hash(a.slug) % 75)
      let p: V3 = [h[0] + Math.cos(t) * q * r, h[1] + u * r * 0.8, h[2] + Math.sin(t) * q * r]
      const bp = a.branches.length ? BASE.pos.get(a.branches[0]) : undefined
      // a dendrite reaches a little towards the branch that lists the article
      if (bp) p = [p[0] + (bp[0] - p[0]) * 0.18, p[1] + (bp[1] - p[1]) * 0.18, p[2] + (bp[2] - p[2]) * 0.18]
      a.pos = p
    })
  }
  return { cats, hubs, arts, byCat, index: new Map(arts.map((a, i) => [a.slug, i])) }
})()
type TSel = { kind: 'hub'; id: Cat } | { kind: 'art'; id: string } | null

/** A soft glow drawn once per colour and stamped with drawImage: a radial gradient made every frame for ~90 stars cost more than the rest of the frame. */
const glows = new Map<string, HTMLCanvasElement>()
function glow(color: string) {
  let g = glows.get(color)
  if (!g) {
    g = document.createElement('canvas')
    g.width = g.height = 64
    const c = g.getContext('2d')!
    const grad = c.createRadialGradient(32, 32, 0, 32, 32, 32)
    grad.addColorStop(0, color)
    grad.addColorStop(1, 'rgba(0,0,0,0)')
    c.fillStyle = grad
    c.fillRect(0, 0, 64, 64)
    glows.set(color, g)
  }
  return g
}
const plain = (t: string) => t.replace(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g, '$1').replace(/\*\*?|__/g, '')

/** cy: where on the screen (fraction of its height) the target sits — higher when a card covers the bottom. */
const OVERVIEW = { tx: 0, ty: 0, tz: 0, dist: 1750, yaw: -0.35, pitch: 0.18, cx: 0.5, cy: 0.7 }
type Cam = typeof OVERVIEW
/** The whole sky, placed clear of the heading: to the right on wide screens, below it on narrow ones. */
const overview = (W: number, H: number): Cam => (W / H > 1.1 ? { ...OVERVIEW, dist: 1650, cx: 0.6, cy: 0.56 } : OVERVIEW)
const ease = (t: number) => 1 - Math.pow(1 - t, 3)

export function Sky3D({ selected, onSelect, lit, onTheory }: { selected: string | null; onSelect: (id: string | null) => void; lit: (id: string) => number; onTheory?: (open: boolean) => void }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const cam = useRef({ ...OVERVIEW, dist: 3200 })
  const [tsel, setTselState] = useState<TSel>(null)
  const tselRef = useRef<TSel>(null)
  const pickTheory = useRef<(t: TSel) => void>(() => {})
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
      // 1.5×: thousands of thin fibres cost raster time by the pixel, and do not look finer at 3×
      dpr = Math.min(1.5, devicePixelRatio || 1)
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
      // the theory web: fibres to the topics, fibres to the branches, the articles, the topics
      const ts = tselRef.current
      const quiet = !!(s || ts)
      const pts = THEORY.arts.map((a) => project(a.pos))
      const hubQ = new Map(THEORY.cats.map((c) => [c, project(THEORY.hubs.get(c)!)]))
      const brQ = new Map(BASE.stars.map((st) => [st.id, project(BASE.pos.get(st.id)!)]))
      const lineTo = (a: { x: number; y: number } | null, b: { x: number; y: number } | null) => {
        if (!a || !b) return
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
      }
      ctx.lineWidth = 0.5
      for (const c of THEORY.cats) {
        ctx.strokeStyle = `oklch(0.78 0.1 ${brandHue(CATEGORIES[c].hue)} / ${quiet ? 0.035 : 0.12})`
        ctx.beginPath()
        for (const i of THEORY.byCat.get(c)!) lineTo(hubQ.get(c)!, pts[i])
        ctx.stroke()
      }
      ctx.strokeStyle = `rgba(226, 182, 110, ${quiet ? 0.018 : 0.045})`
      ctx.beginPath()
      // one fibre per article to the first branch that lists it (the others show when the article is chosen)
      THEORY.arts.forEach((a, i) => a.branches.length && lineTo(pts[i], brQ.get(a.branches[0]) ?? null))
      ctx.stroke()
      // the chosen topic's or article's own fibres, bright
      if (ts) {
        const lit = ts.kind === 'hub' ? THEORY.byCat.get(ts.id)! : [THEORY.index.get(ts.id)!]
        ctx.lineWidth = 1
        ctx.strokeStyle = 'rgba(246, 220, 162, 0.55)'
        ctx.beginPath()
        for (const i of lit) {
          lineTo(hubQ.get(THEORY.arts[i].cat)!, pts[i])
          if (ts.kind === 'art') THEORY.arts[i].branches.forEach((b) => lineTo(pts[i], brQ.get(b) ?? null))
        }
        ctx.stroke()
      }
      for (const c of THEORY.cats) {
        const on = ts && (ts.kind === 'hub' ? ts.id === c : THEORY.arts[THEORY.index.get(ts.id)!].cat === c)
        ctx.fillStyle = `oklch(0.86 0.09 ${brandHue(CATEGORIES[c].hue)} / ${quiet && !on ? 0.28 : 0.85})`
        for (const i of THEORY.byCat.get(c)!) {
          const q = pts[i]
          if (!q) continue
          const r = Math.max(0.8, Math.min(2.6, 1.7 * q.k)) * (ts?.kind === 'art' && THEORY.arts[i].slug === ts.id ? 2.4 : 1)
          ctx.fillRect(q.x - r / 2, q.y - r / 2, r, r)
        }
      }
      for (const c of THEORY.cats) {
        const q = hubQ.get(c)
        if (!q) continue
        const hue = brandHue(CATEGORIES[c].hue)
        const r = Math.max(2, 4.2 * q.k) * (ts?.kind === 'hub' && ts.id === c ? 1.5 : 1)
        ctx.globalAlpha = quiet ? 0.36 : 1
        ctx.drawImage(glow(`oklch(0.9 0.1 ${hue} / 0.5)`), q.x - r * 5, q.y - r * 5, r * 10, r * 10)
        ctx.globalAlpha = 1
        ctx.fillStyle = `oklch(0.93 0.07 ${hue} / ${quiet ? 0.45 : 0.95})`
        ctx.beginPath()
        ctx.arc(q.x, q.y, r, 0, Math.PI * 2)
        ctx.fill()
      }
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
        ctx.globalAlpha = dim ? 0.27 : l
        ctx.drawImage(glow(`oklch(0.92 0.06 ${hue} / 0.55)`), q!.x - r * 4.5, q!.y - r * 4.5, r * 9, r * 9)
        ctx.globalAlpha = 1
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
      // the chosen article, then topic names (nearest first), clear of the names already drawn
      const theoryNames: { text: string; q: { x: number; y: number; k: number; d: number }; main: boolean }[] = []
      if (ts?.kind === 'art') {
        const i = THEORY.index.get(ts.id)!
        if (pts[i]) theoryNames.push({ text: THEORY.arts[i].title, q: pts[i]!, main: true })
      }
      for (const c of THEORY.cats) {
        const q = hubQ.get(c)
        if (q && (ts?.kind === 'hub' ? ts.id === c : !s && q.k > 0.55)) theoryNames.push({ text: CATEGORIES[c].title, q, main: ts?.kind === 'hub' && ts.id === c })
      }
      theoryNames.sort((a, b) => (a.main ? -1 : b.main ? 1 : a.q.d - b.q.d))
      for (const { text, q, main } of theoryNames) {
        ctx.font = `${main ? '600 14px' : 'italic 500 11.5px'} system-ui, sans-serif`
        const w = ctx.measureText(text).width
        const y = q.y - 12
        const box: [number, number, number, number] = [q.x - w / 2 - 4, y - 13, q.x + w / 2 + 4, y + 4]
        if (boxes.some((o) => box[0] < o[2] && box[2] > o[0] && box[1] < o[3] && box[3] > o[1])) continue
        boxes.push(box)
        ctx.fillStyle = main ? 'rgba(255,243,214,0.95)' : 'rgba(236,226,206,0.62)'
        ctx.fillText(text, q.x, y)
      }
      // part names in the overview
      if (!s && !ts) {
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
    // the web turns slowly by itself (about 70 s a turn — 2.5 minutes looked still on a phone) while nothing is chosen or held, the page is not
    // scrolling, the sky is on screen and the tab is shown — 20 frames a second is plenty for so slow a turn, and it
    // stays still when the reader asked for less motion
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    let visible = true
    let holdUntil = 0
    let prev = 0
    const spinning = (now: number) => !reducedMotion && visible && !down && !anim && !sel.current && !tselRef.current && document.visibilityState === 'visible' && now >= holdUntil
    const loop = (now: number) => {
      const dt = prev ? Math.min(100, now - prev) : 0
      if (anim) {
        const t = Math.min(1, (now - anim.t0) / anim.ms)
        const e = ease(t)
        const c = cam.current
        for (const k of Object.keys(OVERVIEW) as (keyof Cam)[]) c[k] = anim.from[k] + (anim.to[k] - anim.from[k]) * e
        if (t >= 1) anim = null
      } else if (spinning(now)) {
        if (now - prev < 48) {
          raf = requestAnimationFrame(loop)
          return
        }
        cam.current.yaw += (dt / 1000) * 0.09
      }
      prev = now
      render()
      raf = anim || spinning(now) || (now < holdUntil && visible) ? requestAnimationFrame(loop) : 0
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
      holdUntil = performance.now() + 2500
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
      holdUntil = performance.now() + 2500
      kick()
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
      if (best) return pickTheory.current(null), onSelect(best.id)
      // then a topic, then the nearest article
      for (const c of THEORY.cats) {
        const q = project(THEORY.hubs.get(c)!)
        if (q && Math.hypot(q.x - x, q.y - y) < Math.max(16, 6 * q.k)) return onSelect(null), pickTheory.current({ kind: 'hub', id: c })
      }
      let art: { i: number; d: number } | null = null
      THEORY.arts.forEach((a, i) => {
        const q = project(a.pos)
        if (!q) return
        const d = Math.hypot(q.x - x, q.y - y)
        if (d < 11 && (!art || d < art.d)) art = { i, d }
      })
      if (art) return onSelect(null), pickTheory.current({ kind: 'art', id: THEORY.arts[(art as { i: number }).i].slug })
      pickTheory.current(null)
      onSelect(null)
    }
    // a finger that starts on the sky and scrolls the page: the browser takes the gesture (pointercancel, no
    // pointerup) — without this the sky thought it was still held and never turned again (seen on phones)
    const onCancel = () => {
      if (!down) return
      down = null
      holdUntil = performance.now() + 2500
      kick()
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      anim = null
      cam.current.dist = Math.max(160, Math.min(3600, cam.current.dist * Math.exp(e.deltaY * 0.0012)))
      holdUntil = performance.now() + 2500
      kick()
    }
    // while the page scrolls, the turning waits: the frame belongs to the scroll
    const onScroll = () => {
      holdUntil = performance.now() + 450
      kick()
    }
    addEventListener('scroll', onScroll, { capture: true, passive: true })
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting
      if (visible) kick()
    })
    io.observe(cv)
    const onVis = () => document.visibilityState === 'visible' && kick()
    document.addEventListener('visibilitychange', onVis)
    pickTheory.current = (t) => {
      tselRef.current = t
      setTselState(t)
      onTheory?.(!!t)
      if (t) fly.current(toPoint(t.kind === 'hub' ? THEORY.hubs.get(t.id)! : THEORY.arts[THEORY.index.get(t.id)!].pos, t.kind === 'hub' ? 420 : 240, t.id))
      else if (!sel.current) fly.current(overview(W, H))
      kick()
    }
    cv.addEventListener('pointerdown', onDown)
    addEventListener('pointermove', onMove)
    addEventListener('pointerup', onUp)
    addEventListener('pointercancel', onCancel)
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
      removeEventListener('pointercancel', onCancel)
      cv.removeEventListener('wheel', onWheel)
      io.disconnect()
      removeEventListener('scroll', onScroll, { capture: true })
      document.removeEventListener('visibilitychange', onVis)
    }
    // the handlers read refs; onSelect is the page's setter
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // a star chosen here or from outside (a link in the card): fly to it; none: back out to the whole sky
  useEffect(() => {
    sel.current = selected
    if (selected && tselRef.current) pickTheory.current(null)
    if (!selected && tselRef.current) return
    fly.current(selected ? toStar(selected) : overview(size.current.W, size.current.H))
  }, [selected])

  const zoom = (f: number) => {
    cam.current.dist = Math.max(160, Math.min(3600, cam.current.dist * f))
    draw.current()
  }

  return (
    <div className="s3">
      <canvas ref={canvas} className="s3-canvas" aria-label="Bầu trời các phân ngành âm nhạc học: kéo để xoay, chạm một ngôi sao để bay tới" role="img" />
      <div className="s3-zoom">
        <button type="button" onClick={() => zoom(0.8)} aria-label="Lại gần">+</button>
        <button type="button" onClick={() => zoom(1.25)} aria-label="Ra xa">−</button>
      </div>
      {tsel && <TheoryCard t={tsel} onPick={(t) => pickTheory.current(t)} onBranch={(id) => (pickTheory.current(null), onSelect(id))} />}
      {/* the same stars as a list, for keyboards and screen readers */}
      <ul className="sr-only">
        {RESOLVED.map((b) => (
          <li key={b.id}>
            <button type="button" onClick={() => onSelect(b.id)}>{b.title}</button>
          </li>
        ))}
        {THEORY.cats.map((c) => (
          <li key={c}>
            <button type="button" onClick={() => (onSelect(null), pickTheory.current({ kind: 'hub', id: c }))}>Chủ đề lý thuyết: {CATEGORIES[c].title}</button>
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

/** The camera close to a point of the theory web. */
function toPoint(p: V3, dist: number, id: string) {
  const h = hash(id)
  return { tx: p[0], ty: p[1], tz: p[2], dist, yaw: Math.atan2(p[0], -p[2]) + ((h % 100) / 100 - 0.5) * 0.6, pitch: 0.15, cx: 0.5, cy: 0.4 }
}

/** A topic of the library or one article, chosen in the web: what it is and the way into it. */
function TheoryCard({ t, onPick, onBranch }: { t: NonNullable<TSel>; onPick: (t: TSel) => void; onBranch: (id: string) => void }) {
  if (t.kind === 'hub') {
    const c = CATEGORIES[t.id]
    return (
      <div className="mc-card s3-tcard" role="dialog" aria-label={c.title} style={{ '--tint': `oklch(0.8 0.12 ${brandHue(c.hue)})` } as React.CSSProperties}>
        <button onClick={() => onPick(null)} aria-label="Đóng" className="mc-card-x">✕</button>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--tint)]">Chủ đề lý thuyết · {THEORY.byCat.get(t.id)!.length} bài</p>
        <p className="mt-0.5 font-display text-[18px] font-semibold leading-snug text-[#f6ecdc]">{c.title}</p>
        <p className="mt-1 line-clamp-3 text-[12.5px] leading-relaxed text-[#e9dcc6]/70">{c.description}</p>
        <Link to={`/theory?c=${t.id}`} className="btn-gold mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium">Mở chủ đề</Link>
      </div>
    )
  }
  const a = THEORY.arts[THEORY.index.get(t.id)!]
  const c = CATEGORIES[a.cat]
  return (
    <div className="mc-card s3-tcard" role="dialog" aria-label={a.title} style={{ '--tint': `oklch(0.8 0.12 ${brandHue(c.hue)})` } as React.CSSProperties}>
      <button onClick={() => onPick(null)} aria-label="Đóng" className="mc-card-x">✕</button>
      <button onClick={() => onPick({ kind: 'hub', id: a.cat })} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--tint)]">{c.title}</button>
      <p className="mt-0.5 font-display text-[18px] font-semibold leading-snug text-[#f6ecdc]">{a.title}</p>
      <p className="mt-1 line-clamp-3 text-[12.5px] leading-relaxed text-[#e9dcc6]/70">{plain(a.summary)}</p>
      {a.branches.length > 0 && (
        <div className="no-scrollbar mt-2 flex gap-1.5 overflow-x-auto">
          {a.branches.slice(0, 5).map((id) => (
            <button key={id} onClick={() => onBranch(id)} className="mc-chip">{BY_ID.get(id)?.title.split(':')[0]}</button>
          ))}
        </div>
      )}
      <Link to={`/theory/${a.slug}`} className="btn-gold mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium">Đọc bài</Link>
    </div>
  )
}
