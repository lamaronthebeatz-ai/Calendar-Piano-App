import { useEffect, type RefObject } from 'react'

/**
 * Tilt: the three layers of the painting (and the title between them) shift by different amounts as the pointer moves
 * (desktop) or the device tilts (phones, tablets), like looking into the room through a window. Input only sets a
 * target; one rAF loop eases towards it and stops once settled, moving each tilt box (its `--depth` in px) of the panels on screen. On iOS the
 * motion sensor needs the viewer's permission, asked once on the first touch.
 */
export function useStageTilt(root: RefObject<HTMLElement | null>, panelSelector: string, tiltSelector = '.hm-tilt') {
  useEffect(() => {
    const scroller = root.current
    if (!scroller || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Only the tilt boxes of panels on screen are moved, each by its own transform: no custom property on the page
    // root (that restyled every node of the page on every frame and made the iPad drop frames).
    const panels = [...scroller.querySelectorAll<HTMLElement>(panelSelector)]
    const boxes = new Map<HTMLElement, { el: HTMLElement; depth: number }[]>()
    for (const p of panels)
      boxes.set(p, [...p.querySelectorAll<HTMLElement>(tiltSelector)].map((el) => ({ el, depth: parseFloat(getComputedStyle(el).getPropertyValue('--depth')) || 0 })))
    const live = new Set<HTMLElement>()
    const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? live.add(e.target as HTMLElement) : live.delete(e.target as HTMLElement))))
    panels.forEach((p) => io.observe(p))
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0
    const paint = () => {
      for (const p of live)
        for (const b of boxes.get(p) ?? []) b.el.style.transform = `translate3d(${(-cx * b.depth).toFixed(2)}px, ${(-cy * b.depth * 0.6).toFixed(2)}px, 0)`
    }
    const loop = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      const moving = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.004
      if (!moving) {
        cx = tx
        cy = ty
      }
      paint()
      raf = moving ? requestAnimationFrame(loop) : 0
    }
    const aim = (x: number, y: number) => {
      x = Math.max(-1, Math.min(1, x))
      y = Math.max(-1, Math.min(1, y))
      // ignore sensor noise: a device resting on a table still reports tiny changes many times a second
      if (Math.abs(x - tx) + Math.abs(y - ty) < 0.03) return
      tx = x
      ty = y
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches
    const onPointer = (e: PointerEvent) => {
      const r = scroller.getBoundingClientRect()
      aim(((e.clientX - r.left) / r.width - 0.5) * 2, ((e.clientY - r.top) / r.height - 0.5) * 2)
    }
    const onLeave = () => aim(0, 0)
    let base: number | null = null
    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return
      if (base == null) base = e.beta
      aim(Math.round(e.gamma) / 22, Math.round(e.beta - base) / 22)
    }
    type Perm = { requestPermission?: () => Promise<'granted' | 'denied'> }
    const DOE = (window as unknown as { DeviceOrientationEvent?: Perm }).DeviceOrientationEvent
    const startTilt = () => addEventListener('deviceorientation', onTilt)
    const askOnce = () => {
      scroller.removeEventListener('touchend', askOnce)
      DOE?.requestPermission?.().then((r) => r === 'granted' && startTilt()).catch(() => {})
    }
    if (fine) {
      scroller.addEventListener('pointermove', onPointer, { passive: true })
      scroller.addEventListener('pointerleave', onLeave)
    } else if (DOE?.requestPermission) scroller.addEventListener('touchend', askOnce, { once: true })
    else startTilt()
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      scroller.removeEventListener('pointermove', onPointer)
      scroller.removeEventListener('pointerleave', onLeave)
      scroller.removeEventListener('touchend', askOnce)
      removeEventListener('deviceorientation', onTilt)
    }
  }, [root, panelSelector, tiltSelector])
}
