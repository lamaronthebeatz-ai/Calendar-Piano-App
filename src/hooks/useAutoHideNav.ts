import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { useLocation } from 'react-router-dom'

/** How far (px) the user must scroll in one direction before the nav reacts — ignores jitter. */
const THRESHOLD = 12
/** Near the top of a page the nav always shows. */
const TOP_ZONE = 56

/**
 * Hides the mobile tab bar while the user scrolls down and brings it back as soon as they
 * scroll up (or reach the top), like Safari's toolbar. Pages scroll inside their own
 * containers and scroll events don't bubble (React doesn't delegate them either), so this
 * attaches a native capture listener to the given root, which sees every scroll below it. Horizontal-only scrolls (e.g. the timetable) leave scrollTop unchanged
 * and are ignored.
 */
export function useAutoHideNav(root: RefObject<HTMLElement | null>) {
  const last = useRef(new WeakMap<EventTarget, number>())
  const travel = useRef(0)
  const { pathname, search } = useLocation()
  const page = pathname + search
  // Remember which page the nav was hidden on: a new page always starts with it visible.
  const [hiddenOn, setHiddenOn] = useState<string | null>(null)
  const hidden = hiddenOn === page
  const setHidden = useCallback((h: boolean) => setHiddenOn(h ? page : null), [page])

  useEffect(() => {
    document.documentElement.toggleAttribute('data-nav-hidden', hidden)
  }, [hidden])

  const onScroll = useCallback((e: Event) => {
    const el = e.target
    if (!(el instanceof HTMLElement)) return
    const top = el.scrollTop
    // Containers start at the top, so an unseen one is treated as coming from 0.
    const prev = last.current.get(el) ?? 0
    last.current.set(el, top)
    if (top === prev) return

    if (top <= TOP_ZONE) {
      travel.current = 0
      setHidden(false)
      return
    }
    // Ignore the rubber-band bounce past the bottom on iOS.
    if (top + el.clientHeight >= el.scrollHeight - 2 && top < prev) return

    const delta = top - prev
    // Restart the count whenever the direction changes.
    travel.current = Math.sign(delta) === Math.sign(travel.current) ? travel.current + delta : delta
    if (travel.current > THRESHOLD) setHidden(true)
    else if (travel.current < -THRESHOLD) setHidden(false)
  }, [setHidden])

  useEffect(() => {
    const el = root.current
    if (!el) return
    el.addEventListener('scroll', onScroll, { capture: true, passive: true })
    return () => el.removeEventListener('scroll', onScroll, { capture: true })
  }, [root, onScroll])

  return hidden
}
