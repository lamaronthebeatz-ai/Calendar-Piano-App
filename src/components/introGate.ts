/** The opening clip shows once per app session, and not to people who asked the system for less motion. */
export const INTRO_KEY = 'app:intro'

export function shouldShowIntro() {
  try {
    if (sessionStorage.getItem(INTRO_KEY) === '1') return false
  } catch {
    /* no storage: show it */
  }
  return !(typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches)
}
