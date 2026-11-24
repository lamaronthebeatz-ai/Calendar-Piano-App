/** The opening clip shows once per app session (Lamar: everyone watches it, so no reduced-motion exemption). */
export const INTRO_KEY = 'app:intro'

/**
 * The Journey's opening clip plays every time the game is entered. `journey:clip-off` (session) exists only so the
 * other Playwright suites can reach the game directly; nothing in the app sets it.
 */
export function shouldShowJourneyClip() {
  try {
    return sessionStorage.getItem('journey:clip-off') !== '1'
  } catch {
    return true
  }
}

export function shouldShowIntro() {
  try {
    if (sessionStorage.getItem(INTRO_KEY) === '1') return false
  } catch {
    /* no storage: show it */
  }
  return true
}
