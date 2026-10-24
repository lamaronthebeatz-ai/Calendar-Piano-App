import type { NoteColor } from './notes'

/**
 * Marker effects for highlights. The CSS Custom Highlight API can't be animated, so these draw a short-lived
 * overlay over the range's line boxes: a highlighter stroke wiping left to right when a highlight is made, and
 * the ink fading out when one is removed.
 */
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches

/** One box per line: inline elements give overlapping rects, which would stack the translucent ink. */
function lines(range: Range) {
  const out: { l: number; r: number; t: number; b: number }[] = []
  for (const x of range.getClientRects()) {
    if (x.width < 1 || x.height < 1) continue
    const hit = out.find((o) => Math.abs(o.t - x.top) < x.height / 2 && Math.abs(o.b - x.bottom) < x.height / 2 + 4)
    if (hit) {
      hit.l = Math.min(hit.l, x.left)
      hit.r = Math.max(hit.r, x.right)
      hit.t = Math.min(hit.t, x.top)
      hit.b = Math.max(hit.b, x.bottom)
    } else out.push({ l: x.left, r: x.right, t: x.top, b: x.bottom })
  }
  return out.filter((o) => o.r > 0 && o.l < innerWidth && o.b > 0 && o.t < innerHeight).sort((a, b) => a.t - b.t || a.l - b.l)
}

function layer(root: HTMLElement) {
  const el = document.createElement('div')
  el.className = 'rn-ink'
  const cs = getComputedStyle(root).colorScheme
  const theme = document.documentElement.dataset.theme
  if (cs.includes('dark') || (!cs.includes('light') && (theme === 'dark' || (theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches)))) el.classList.add('is-dark')
  el.setAttribute('aria-hidden', 'true')
  document.body.appendChild(el)
  return el
}

function stroke(host: HTMLElement, box: { l: number; r: number; t: number; b: number }, ink: string) {
  const s = document.createElement('span')
  Object.assign(s.style, { left: `${box.l - 1}px`, top: `${box.t}px`, width: `${box.r - box.l + 2}px`, height: `${box.b - box.t}px`, background: ink })
  host.appendChild(s)
  return s
}

/** Wipes the new highlight on line by line, then calls `done` (which should add the real highlight). */
export function sweepInk(root: HTMLElement, range: Range | null, color: NoteColor, done: () => void) {
  const boxes = range && !reduced() && typeof Element.prototype.animate === 'function' ? lines(range) : []
  if (!boxes.length) return done()
  const host = layer(root)
  const ink = getComputedStyle(root).getPropertyValue(`--hl-${color}`).trim() || 'rgb(255 212 0 / 0.42)'
  // Same pen speed on every line, so a long highlight takes a little longer but never drags.
  const total = boxes.reduce((n, b) => n + b.r - b.l, 0)
  const ms = Math.min(620, 180 + total * 0.45)
  let at = 0
  const runs = boxes.map((b) => {
    const share = ((b.r - b.l) / total) * ms
    const a = stroke(host, b, ink).animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }], { duration: share, delay: at, easing: 'cubic-bezier(0.4, 0, 0.3, 1)', fill: 'both' })
    at += share
    return a.finished
  })
  let finished = false
  const finish = () => {
    if (finished) return
    finished = true
    done()
    // The real highlight paints in the same frame React commits; drop the overlay just after.
    requestAnimationFrame(() => requestAnimationFrame(() => host.remove()))
  }
  Promise.all(runs).then(finish, finish)
  setTimeout(finish, ms + 300)
}

/** Lets removed highlights dissolve instead of vanishing. Call it before removing them. */
export function dissolveInk(root: HTMLElement, parts: { range: Range | null; color: NoteColor }[]) {
  if (reduced() || typeof Element.prototype.animate !== 'function') return
  const host = layer(root)
  for (const { range, color } of parts) {
    if (!range) continue
    const ink = getComputedStyle(root).getPropertyValue(`--hl-${color}`).trim()
    for (const b of lines(range))
      stroke(host, b, ink).animate(
        [
          { opacity: 1, filter: 'blur(0)', transform: 'scale(1)' },
          { opacity: 0, filter: 'blur(5px)', transform: 'scale(1.04, 1.5)' },
        ],
        { duration: 520, easing: 'cubic-bezier(0.3, 0, 0.2, 1)', fill: 'forwards' },
      )
  }
  setTimeout(() => host.remove(), 600)
}
