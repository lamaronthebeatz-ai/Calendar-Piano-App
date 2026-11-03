import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { articlesByCategory, type ArticleMeta as Article } from './wiki'
import { useLibrary } from './library'
import { lastTopic, morphTopic, TOPIC_GROUPS } from './topicGroups'
import { GLYPHS, tint } from './categoryStyle'

type CategoryId = Article['category']
const BY_ID = new Map(articlesByCategory.map((c) => [c.id, c]))

/** A stable note height for an article: one of the nine lines and spaces of the staff. */
const step = (slug: string) => {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h % 9
}

/**
 * The whole library as one page of a full score: each family of topics is a staff (bracketed, named on the left like
 * an orchestra's instruments), each topic a bar, each article a note in that bar. Notes of articles already read are
 * gold, so the score fills in as the reader works through the library. Tapping a bar opens the topic (its bar grows
 * into the topic's header).
 */
export function ScoreMap({ onSelect }: { onSelect: (id: CategoryId) => void }) {
  const { read } = useLibrary()
  const done = new Set(read)
  return (
    <div className="sm-score">
      {TOPIC_GROUPS.map((g, gi) => (
        <div key={g.id} className="sm-system" style={{ '--g': gi } as CSSProperties}>
          <p className="sm-name">{g.title}</p>
          <div className="sm-staff">
            {g.ids.map((id) => {
              const c = BY_ID.get(id)
              if (!c) return null
              const n = c.articles.length
              const lit = c.articles.filter((a) => done.has(a.slug)).length
              const w = Math.max(30, n * 6 + 6)
              return (
                <button
                  key={id}
                  style={{ ...tint(id), flexGrow: Math.sqrt(n) } as CSSProperties}
                  className="sm-bar"
                  aria-label={`${c.title}: ${n} bài, đã đọc ${lit}`}
                  onClick={(e) =>
                    morphTopic(id, e.currentTarget, () => onSelect(id), () => !!document.querySelector('.cat-head'), () =>
                      document.querySelector('.cat-head')?.closest('.overflow-y-auto')?.scrollTo({ top: 0 }),
                    )
                  }
                >
                  <svg data-vt-img viewBox={`0 0 ${w} 44`} preserveAspectRatio="none" className={clsx('sm-notes', lastTopic() === id && 'vt-ti')} aria-hidden>
                    {c.articles.map((a, i) => (
                      <ellipse key={a.slug} cx={6 + i * 6} cy={6 + step(a.slug) * 4} rx={2.3} ry={1.7} className={done.has(a.slug) ? 'is-read' : undefined} />
                    ))}
                  </svg>
                  <span className="sm-label">
                    <span className="sm-glyph font-['Noto_Music']" aria-hidden>{GLYPHS[id]}</span>
                    <span data-vt-title className={clsx('sm-title', lastTopic() === id && 'vt-tt')}>{c.title}</span>
                    <span className="sm-count tabular-nums">{lit > 0 ? `${lit}/` : ''}{n}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
