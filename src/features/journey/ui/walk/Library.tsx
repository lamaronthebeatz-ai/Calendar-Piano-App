/**
 * The Pomposa library drawn side-on, in flat colours with an ink outline (an illuminated-book look, own drawing — no
 * borrowed art). Mid: the wall, window, lectern, shelves, chest, rail and the locked archive door, at the depth the
 * figures walk. Front: columns and a lamp nearer the eye, moving a little faster than the room (parallax).
 */
const INK = '#24170d'
const BOOKS = ['#7a2a1d', '#3b4a2a', '#6b4a22', '#2c3550', '#8a6a2c', '#5a2433', '#46351f']

/** Arched window holes cut out of the wall (even-odd), so the far layer shows through. */
const arch = (cx: number, w: number, top: number, bottom: number) => `M${cx - w / 2} ${bottom}V${top + w / 2}A${w / 2} ${w / 2} 0 0 1 ${cx + w / 2} ${top + w / 2}V${bottom}Z`

export function LibraryMid({ width, height, floor }: { width: number; height: number; floor: number }) {
  const shelves = [0, 1, 2, 3, 4]
  return (
    <svg className="wk-mid" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <defs>
        <pattern id="wk-tiles" width="80" height="60" patternUnits="userSpaceOnUse">
          <rect width="80" height="60" fill="#5b4330" />
          <path d="M0 0H80M0 30H80M40 0V30M0 30V60M80 30V60" stroke="#3a2a1c" strokeWidth="3" />
        </pattern>
        <pattern id="wk-stone" width="120" height="48" patternUnits="userSpaceOnUse">
          <rect width="120" height="48" fill="#4a3826" />
          <path d="M0 0H120M0 24H120M60 0V24M0 24V48" stroke="#3b2c1d" strokeWidth="2" />
        </pattern>
        <linearGradient id="wk-shaft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0d48f" stopOpacity="0.32" />
          <stop offset="1" stopColor="#f0d48f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* the wall, with a window and two blind arches cut through to the far layer */}
      <path d={`M0 0H${width}V${floor}H0Z ${arch(380, 130, 120, 340)} ${arch(1000, 90, 150, 300)}`} fill="url(#wk-stone)" fillRule="evenodd" opacity="0.94" />
      <path d={arch(380, 130, 120, 340)} fill="none" stroke="#c9a25a" strokeWidth="5" />
      <path d={`M380 120V340M315 230H445`} stroke={INK} strokeWidth="6" />
      <path d={arch(1000, 90, 150, 300)} fill="none" stroke="#c9a25a" strokeWidth="4" />
      {[560, 1480, 1790].map((x) => (
        <g key={x}>
          <rect x={x - 22} y="40" width="44" height={floor - 40} fill="#3d2e1f" stroke={INK} strokeWidth="3" />
          <rect x={x - 30} y="40" width="60" height="18" fill="#5e4630" stroke={INK} strokeWidth="3" />
        </g>
      ))}
      {/* light from the window falling across the floor (still: no looping animation) */}
      <path d={`M318 330L442 330L640 ${floor}L210 ${floor}Z`} fill="url(#wk-shaft)" />
      {/* floor */}
      <rect x="0" y={floor} width={width} height={height - floor} fill="url(#wk-tiles)" />
      <path d={`M0 ${floor}H${width}`} stroke={INK} strokeWidth="5" />
      {/* lectern with an open book and a candle */}
      <g stroke={INK} strokeWidth="4">
        <path d={`M770 ${floor}V400M740 ${floor}H800`} fill="none" />
        <path d="M712 402L828 372L834 392L718 422Z" fill="#6b4a22" />
        <path d="M724 396L770 384L770 366L724 378Z M772 384L820 372L818 354L772 366Z" fill="#efe2c2" strokeWidth="2" />
        <path d="M730 378L764 369M730 386L764 377M778 364L812 355M778 372L812 363" stroke="#7a2a1d" strokeWidth="2" />
        <rect x="838" y="350" width="10" height="34" fill="#efe2c2" strokeWidth="2" />
      </g>
      <path d="M843 350C836 338 843 330 843 322C849 332 852 340 843 350Z" fill="#f0d48f" />
      {/* the shelves where the page was slipped */}
      <g>
        <rect x="1120" y="170" width="340" height={floor - 170} fill="#3a2716" stroke={INK} strokeWidth="5" />
        <rect x="1108" y="156" width="364" height="22" fill="#5e4630" stroke={INK} strokeWidth="4" />
        {shelves.map((r) => (
          <g key={r}>
            <rect x="1132" y={196 + r * 68} width="316" height="6" fill="#5e4630" />
            {Array.from({ length: 15 }, (_, i) => {
              const h = 42 + ((i * 7 + r * 5) % 14)
              return <rect key={i} x={1136 + i * 20.6} y={196 + r * 68 - h} width="17" height={h} fill={BOOKS[(i + r * 3) % BOOKS.length]} stroke={INK} strokeWidth="1.5" />
            })}
          </g>
        ))}
      </g>
      {/* chest with the traveller's music box */}
      <g stroke={INK} strokeWidth="4">
        <rect x="1510" y={floor - 72} width="104" height="72" fill="#5e3a1e" />
        <path d={`M1510 ${floor - 50}H1614`} />
        <rect x="1540" y={floor - 104} width="46" height="32" fill="#8a6a2c" />
        <path d={`M1586 ${floor - 90}H1600V${floor - 104}`} fill="none" strokeWidth="3" />
      </g>
      {/* the rail that blocks the way, and the locked archive door behind it */}
      <g stroke={INK} strokeWidth="4" fill="#5e4630">
        <rect x="1690" y={floor - 150} width="10" height="150" />
        <rect x="1706" y={floor - 150} width="10" height="150" />
        <rect x="1680" y={floor - 120} width="46" height="10" />
        <rect x="1680" y={floor - 60} width="46" height="10" />
      </g>
      <path d={arch(1870, 120, 300, floor)} fill="#2a1a10" stroke={INK} strokeWidth="5" />
      <path d={`M1810 ${floor - 160}H1930M1810 ${floor - 70}H1930`} stroke="#8a7350" strokeWidth="6" />
      <rect x="1862" y={floor - 128} width="16" height="22" rx="3" fill="#8a7350" stroke={INK} strokeWidth="2" />
    </svg>
  )
}

export function LibraryFront({ width, height }: { width: number; height: number }) {
  return (
    <svg className="wk-front" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      {[1180, 2300].map((x) => (
        <g key={x}>
          <rect x={x - 46} y="0" width="92" height={height} fill="#0d0906" />
          <rect x={x + 38} y="0" width="6" height={height} fill="#d6ae60" opacity="0.35" />
        </g>
      ))}
      <path d="M600 0V90" stroke="#0d0906" strokeWidth="4" />
      <path d="M570 90H630L618 120H582Z" fill="#0d0906" />
      <circle cx="600" cy="128" r="7" fill="#f0d48f" opacity="0.8" />
    </svg>
  )
}
