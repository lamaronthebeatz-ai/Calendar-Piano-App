import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { seedDatabaseIfEmpty, ensureSettingsExist } from './data/seed'
import { db } from './data/db'
import { applyThemeToDocument } from './services/settingsService'

async function bootstrap() {
  await seedDatabaseIfEmpty()
  await ensureSettingsExist()
  const settings = await db.settings.get('default')
  applyThemeToDocument(settings?.theme ?? 'system')

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// The service worker serves the cached build first; once a new deploy takes over,
// reload so the user sees it right away instead of on the next launch.
// (Skipped on first install, when there was no previous controller.)
if (navigator.serviceWorker?.controller) {
  navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload())
}

bootstrap()
