/** Keyboard-focus flag + one delegated listener feeds the pointer position to the card under it (CSS `.spot` / `.theory-card` in brand.css). */
export function installSpotlight() {
  if (typeof window === 'undefined') return
  // keyboard-only focus ring (brand.css): on with Tab, off with any touch, pen or mouse
  const root = document.documentElement
  document.addEventListener('keydown', (e) => { if (e.key === 'Tab') root.dataset.kbd = '' }, true)
  document.addEventListener('pointerdown', () => { delete root.dataset.kbd }, true)
  if (!matchMedia('(hover: hover)').matches) return
  let el: HTMLElement | null = null
  let x = 0
  let y = 0
  let raf = 0
  const paint = () => {
    raf = 0
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${x - r.left}px`)
    el.style.setProperty('--my', `${y - r.top}px`)
  }
  document.addEventListener(
    'pointermove',
    (e) => {
      const t = e.target instanceof Element ? (e.target.closest('.spot, .theory-card') as HTMLElement | null) : null
      el = t
      if (!t) return
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
    },
    { passive: true },
  )
}
