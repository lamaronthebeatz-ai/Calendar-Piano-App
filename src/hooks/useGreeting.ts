import { useEffect, useState } from 'react'
import { greetingFor } from '../lib/greeting'

/** Today's greeting for this part of the day; turns over at the next hour and when the app comes back to the front. */
export function useGreeting() {
  // `at` re-arms the timer even when the hour turns within the same part of the day (same line)
  const [state, setState] = useState(() => ({ line: greetingFor(), at: Date.now() }))
  useEffect(() => {
    const refresh = () => setState({ line: greetingFor(), at: Date.now() })
    const now = new Date()
    const t = setTimeout(refresh, (60 - now.getMinutes()) * 60_000 - now.getSeconds() * 1000 + 500)
    const onShow = () => {
      if (document.visibilityState === 'visible') refresh()
    }
    document.addEventListener('visibilitychange', onShow)
    return () => {
      clearTimeout(t)
      document.removeEventListener('visibilitychange', onShow)
    }
  }, [state.at])
  return state.line
}
