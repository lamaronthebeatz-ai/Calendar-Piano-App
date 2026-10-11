import { useLocation, useNavigate } from 'react-router-dom'

/**
 * A page's back arrow: steps back through the in-app history, so the previous page keeps its
 * scroll position and state; a page opened cold (shared link, reload) goes to `fallback` instead.
 */
export function useBack(fallback: string) {
  const navigate = useNavigate()
  const { key } = useLocation()
  return () => (key !== 'default' ? navigate(-1) : navigate(fallback))
}
