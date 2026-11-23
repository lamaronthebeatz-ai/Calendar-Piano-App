/** The opening clip shows once per app session (Lamar: everyone watches it, so no reduced-motion exemption). */
export const INTRO_KEY = 'app:intro'

export function shouldShowIntro() {
  try {
    if (sessionStorage.getItem(INTRO_KEY) === '1') return false
  } catch {
    /* no storage: show it */
  }
  return true
}
