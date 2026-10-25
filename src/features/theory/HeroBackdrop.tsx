import { useState } from 'react'
import type { Article } from './wiki'
import { TOPIC_IMAGES } from './categoryStyle'
import { useThumbs } from './thumbs'
import './hero-backdrop.css'

/** Asks Wikimedia for a wider rendering of the same thumbnail, for use as a header background. */
const wider = (url: string) => url.replace(/\/330px-/, '/960px-').replace(/([?&]width=)\d+/, '$1960').replace('/mqdefault.', '/hqdefault.')

/**
 * The article's own picture behind its title, fading out downwards and towards the text. Drawings (notation on white)
 * would glare there, so those articles — and articles without a picture — use their topic's picture instead.
 */
export function HeroBackdrop({ slug, category, className }: { slug: string; category: Article['category']; className?: string }) {
  const thumbs = useThumbs()
  const own = thumbs?.[slug]
  const src = own && !own[1] ? wider(own[0]) : TOPIC_IMAGES[category]
  const [failed, setFailed] = useState<string>()
  if (!src || failed === src) return null
  return (
    <span aria-hidden className={`hero-backdrop${className ? ' ' + className : ''}`}>
      <img key={src} src={src} alt="" decoding="async" onError={() => setFailed(src)} onLoad={(e) => e.currentTarget.classList.add('is-in')} />
    </span>
  )
}
