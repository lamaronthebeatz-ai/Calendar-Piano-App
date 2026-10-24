/**
 * Paper page turn for the reader. The page is photographed as DOM clones (the live text is never moved, so
 * pagination and the saved position are untouched) and the turning sheet is drawn in 2D: everything past the
 * fold is clipped off the sheet and laid back over it as a flap, mirrored about the fold.
 *
 * `first` is the spread before the turn in reading order and `second` the one after; a forward turn goes
 * first → second, a backward turn plays the same fold in reverse. In a two-page spread the flap carries the
 * next left page, so the turn lands exactly on the new spread; on one page it shows the back of the sheet,
 * faintly, like print through thin paper.
 */
export interface Curl {
  /** Call once the live page shows the new spread. */
  ready(): void
  /** Progress of the turn, 0 – 1, in the direction of the turn. */
  set(p: number): void
  play(to: 0 | 1, ms: number, easing?: (t: number) => number): Promise<void>
  destroy(): void
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

export function startCurl(page: HTMLElement, dir: 1 | -1, spread: boolean): Curl {
  const W = page.clientWidth
  const C = spread ? W / 2 : 0
  const root = document.createElement('div')
  root.className = 'curl'
  root.setAttribute('aria-hidden', 'true')

  const snap = () => {
    const s = document.createElement('div')
    s.className = 'curl-snap'
    for (const c of page.children) if (c !== root && !(c as HTMLElement).dataset.curlSkip) s.appendChild(c.cloneNode(true))
    return s
  }
  const old = snap()
  // Until the new spread is ready the old one simply covers the page.
  root.appendChild(old)
  page.appendChild(root)

  let sheet: HTMLElement | null = null
  let flap: HTMLElement | null = null
  let content: HTMLElement | null = null
  let fold: HTMLElement | null = null
  let cast: HTMLElement | null = null
  let under: HTMLElement | null = null
  let p = 0
  let alive = true
  let raf = 0

  const draw = () => {
    if (!sheet || !flap || !content || !fold || !cast || !under) return
    const q = dir > 0 ? p : 1 - p
    const f = W - q * (W - C)
    const w = W - f
    const left = 2 * f - W
    sheet.style.clipPath = `inset(0 ${w}px 0 0)`
    flap.style.clipPath = `inset(0 ${w}px 0 ${Math.max(0, left)}px)`
    content.style.transform = spread ? `translate3d(${left}px,0,0)` : `translate3d(${2 * f}px,0,0) scaleX(-1)`
    fold.style.transform = `translate3d(${left}px,0,0) scaleX(${w / W})`
    // Shadows are strongest mid-turn, when the sheet stands highest off the page.
    const lift = Math.sin(Math.PI * Math.min(1, q * (spread ? 1 : 1.15)))
    cast.style.transform = `translate3d(${f}px,0,0)`
    cast.style.opacity = String(lift)
    under.style.transform = `translate3d(${left - 36}px,0,0)`
    under.style.opacity = String(lift * 0.8)
  }

  return {
    ready() {
      if (!alive) return
      if (page.clientWidth !== W) return this.destroy()
      const neu = dir > 0 && !spread ? null : snap()
      const first = dir > 0 ? old : neu!
      const second = dir > 0 ? neu : old
      root.textContent = ''
      // Backwards the old spread lies underneath; forwards the live page does.
      if (dir < 0) root.appendChild(old)
      sheet = first
      root.appendChild(sheet)
      under = document.createElement('div')
      under.className = 'curl-under'
      root.appendChild(under)
      cast = document.createElement('div')
      cast.className = 'curl-cast'
      root.appendChild(cast)
      flap = document.createElement('div')
      flap.className = 'curl-flap'
      content = spread ? (dir > 0 ? second! : (second!.cloneNode(true) as HTMLElement)) : (first.cloneNode(true) as HTMLElement)
      if (!spread) content.classList.add('is-back')
      fold = document.createElement('div')
      fold.className = 'curl-fold'
      flap.append(content, fold)
      root.appendChild(flap)
      draw()
    },
    set(v) {
      p = Math.max(0, Math.min(1, v))
      draw()
    },
    play(to, ms, easing = easeOut) {
      cancelAnimationFrame(raf)
      const from = p
      const t0 = performance.now()
      const dur = Math.max(1, ms * Math.abs(to - from))
      return new Promise((resolve) => {
        const step = (now: number) => {
          if (!alive) return resolve()
          const t = Math.min(1, (now - t0) / dur)
          p = from + (to - from) * easing(t)
          draw()
          if (t < 1) raf = requestAnimationFrame(step)
          else resolve()
        }
        raf = requestAnimationFrame(step)
      })
    },
    destroy() {
      alive = false
      cancelAnimationFrame(raf)
      root.remove()
    },
  }
}
