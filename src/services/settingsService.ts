import { db } from '../data/db'
import type { Settings } from '../types'
import '../components/motion-ui.css'

export async function updateSettings(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  const existing = await db.settings.get('default')
  await db.settings.put({ ...(existing as Settings), ...patch, id: 'default' })
}

/**
 * The app has one look: black and gold. The saved `theme` setting is ignored; the document is always dark, and the
 * browser chrome (status bar, address bar, scrollbars) follows.
 */
export function applyDarkTheme(): void {
  const root = document.documentElement
  root.setAttribute('data-theme', 'dark')
  root.style.colorScheme = 'dark'
}
