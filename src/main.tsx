import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { seedDatabaseIfEmpty, ensureSettingsExist } from './data/seed'
import { applyDarkTheme } from './services/settingsService'
import { IS_ANDROID } from './lib/device'
import { installSpotlight } from './lib/spotlight'

async function bootstrap() {
  await seedDatabaseIfEmpty()
  await ensureSettingsExist()
  applyDarkTheme()
  if (IS_ANDROID) document.documentElement.classList.add('is-android')

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

installSpotlight()
bootstrap()
