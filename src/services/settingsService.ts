import { db } from '../data/db'
import type { Settings } from '../types'
import { lastPointer, reducedMotion } from '../components/motion'
import '../components/motion-ui.css'

export async function updateSettings(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  const existing = await db.settings.get('default')
  await db.settings.put({ ...(existing as Settings), ...patch, id: 'default' })
}

function setThemeAttribute(theme: Settings['theme']): void {
  const root = document.documentElement
  if (theme === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', theme)
  }
}

const isDark = (theme: Settings['theme']) => (theme === 'system' ? matchMedia('(prefers-color-scheme: dark)').matches : theme === 'dark')

/**
 * Applies the theme. When the user just tapped something and the look actually changes, the new theme
 * spreads as a circle from that point (View Transitions); otherwise it switches at once.
 */
export function applyThemeToDocument(theme: Settings['theme']): void {
  const root = document.documentElement
  const current = root.getAttribute('data-theme') ?? 'system'
  if (current === theme) return
  const p = lastPointer(1500)
  const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> } }
  const visibleChange = isDark(current as Settings['theme']) !== isDark(theme)
  if (!p || !visibleChange || !doc.startViewTransition || reducedMotion() || root.classList.contains('theme-vt')) {
    setThemeAttribute(theme)
    return
  }
  root.classList.add('theme-vt')
  const vt = doc.startViewTransition(() => setThemeAttribute(theme))
  const r = Math.hypot(Math.max(p.x, innerWidth - p.x), Math.max(p.y, innerHeight - p.y))
  vt.ready
    .then(() =>
      root.animate(
        { clipPath: [`circle(0px at ${p.x}px ${p.y}px)`, `circle(${r}px at ${p.x}px ${p.y}px)`] },
        { duration: 560, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
      ),
    )
    .catch(() => {})
  vt.finished.finally(() => root.classList.remove('theme-vt'))
}
