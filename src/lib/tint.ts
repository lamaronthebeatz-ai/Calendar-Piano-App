import type { CSSProperties } from 'react'

/**
 * Brand tint for a category, book or branch. Every hue is pulled most of the way towards gold
 * (±45° at most) and kept low in chroma, so sections stay distinguishable while the whole app
 * reads as one black-and-gold family instead of a rainbow.
 */
export function brandHue(hue: number) {
  const d = ((hue - 78 + 540) % 360) - 180
  return Math.round(78 + d * 0.25)
}

export const tintColor = (hue: number, l = 0.66, c = 0.075) => `oklch(${l} ${c} ${brandHue(hue)})`

export const hueTint = (hue: number) =>
  ({ '--tint': tintColor(hue), '--tint-soft': `oklch(0.66 0.075 ${brandHue(hue)} / 0.12)` }) as CSSProperties
