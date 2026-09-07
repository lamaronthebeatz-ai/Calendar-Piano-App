import { db } from '../data/db'
import type { Settings } from '../types'

export async function updateSettings(patch: Partial<Omit<Settings, 'id'>>): Promise<void> {
  const existing = await db.settings.get('default')
  await db.settings.put({ ...(existing as Settings), ...patch, id: 'default' })
}

export function applyThemeToDocument(theme: Settings['theme']): void {
  const root = document.documentElement
  if (theme === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', theme)
  }
}
