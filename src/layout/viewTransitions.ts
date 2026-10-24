import { matchPath, parsePath, type createHashRouter } from 'react-router-dom'
import { navItems } from './navItems'
import { peek as peekBook } from '../features/curriculum/bookOpen'

type Router = ReturnType<typeof createHashRouter>
type Dir = 'left' | 'right' | 'forward' | 'back'

const supported = typeof document !== 'undefined' && typeof document.startViewTransition === 'function'
const reduced = typeof matchMedia !== 'undefined' ? matchMedia('(prefers-reduced-motion: reduce)') : null

/** Page changes animate through the View Transitions API; elsewhere AppShell keeps its CSS page entrance. */
export const viewTransitionsOn = () => supported && !reduced?.matches

let armed = false
let skip = false

/** The next page change happens without a transition, because a gesture (swipe back) has already moved the page away. */
export function skipNextTransition() {
  skip = true
  setTimeout(() => (skip = false), 1000)
}

function tabOf(pathname: string) {
  return navItems.findIndex((i) => matchPath({ path: i.to, end: i.end }, pathname))
}

function direction(from: string, to: string, pop: boolean): Dir {
  const a = tabOf(from)
  const b = tabOf(to)
  // A neighbouring tab slides in from its side of the tab bar.
  if (a !== b && a >= 0 && b >= 0) return b > a ? 'right' : 'left'
  const depth = (p: string) => p.split('/').filter(Boolean).length
  if (depth(to) !== depth(from)) return depth(to) > depth(from) ? 'forward' : 'back'
  return pop ? 'back' : 'forward'
}

/**
 * Turns on view transitions for every navigation that changes the page (not for search-param updates such
 * as typing in a search box), and tags each one with its direction for the CSS in motion-nav.css.
 * Going back replays the reverse transition through react-router's own POP handling.
 */
export function installViewTransitions(router: Router) {
  if (!supported) return
  const root = document.documentElement

  const navigate = router.navigate.bind(router)
  router.navigate = ((to: Parameters<Router['navigate']>[0], opts?: Parameters<Router['navigate']>[1]) => {
    if (typeof to === 'number') return navigate(to)
    if (to == null) return navigate(to, opts)
    const path = typeof to === 'string' ? parsePath(to).pathname : to.pathname
    const current = router.state.location.pathname.replace(/(.)\/$/, '$1')
    const changes = !!path && (!path.startsWith('/') || path.replace(/(.)\/$/, '$1') !== current)
    return navigate(to, { ...opts, viewTransition: opts?.viewTransition ?? (viewTransitionsOn() && changes) })
  }) as Router['navigate']

  let last = router.state.location
  router.subscribe((state, { viewTransitionOpts }) => {
    if (state.location.key === last.key) return
    root.dataset.navDir = direction(last.pathname, state.location.pathname, state.historyAction === 'POP')
    last = state.location
    // Only transitions react-router starts for a page change get the page styling; others (the theme switch) pass through.
    armed = !!viewTransitionOpts
  })

  const start = document.startViewTransition.bind(document)
  document.startViewTransition = ((arg?: ViewTransitionUpdateCallback | StartViewTransitionOptions) => {
    if (!armed) return start(arg as ViewTransitionUpdateCallback)
    armed = false
    // The book open/close flight is its own transition; a page snapshot on top of it would double the cover.
    if (skip || reduced?.matches || peekBook()) {
      skip = false
      // Run the update straight away and hand back an already-finished transition.
      const update = typeof arg === 'function' ? arg : arg?.update
      const done = Promise.resolve().then(() => update?.()).then(() => undefined)
      return { finished: done, ready: done, updateCallbackDone: done, skipTransition() {}, types: new Set<string>() } as unknown as ViewTransition
    }
    root.classList.add('vt-active')
    const t = start(arg as ViewTransitionUpdateCallback)
    t.finished.finally(() => root.classList.remove('vt-active'))
    return t
  }) as typeof document.startViewTransition
}

/** The library card whose title morphs into the article heading (and back). */
let morphSlug: string | undefined
export const morphTarget = () => morphSlug
export function setMorphTarget(slug: string, title: Element | null) {
  morphSlug = slug
  for (const el of document.querySelectorAll('.vt-morph-card')) el.classList.remove('vt-morph')
  title?.classList.add('vt-morph')
}
