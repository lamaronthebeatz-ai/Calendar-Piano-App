const ART = (n: string) => `${import.meta.env.BASE_URL}images/home/layers/trompe-${n}`

/**
 * The library's hero picture: the home page's Lý thuyết painting (C. N. Gijsbrechts, trompe-l'œil with violin, music
 * book and recorder, 1672; SMK, public domain) in its three layers, the camera drifting slowly towards the music book
 * on the wall (a time-based CSS animation that runs once — the same on every visit and in every browser).
 */
export function HeroArt() {
  return (
    <span aria-hidden className="ha vt-art">
      {(['bg', 'mid', 'fg'] as const).map((n) => (
        <span key={n} className={`ha-layer ha-${n}`}>
          <picture>
            <source media="(max-width: 760px)" srcSet={ART(`${n}-sm.webp`)} />
            <img src={ART(`${n}.webp`)} alt="" decoding="async" />
          </picture>
        </span>
      ))}
    </span>
  )
}
