import type { CSSProperties } from 'react'
import { CATEGORIES } from './articles'
import type { Article } from './wiki'

type CategoryId = Article['category']

/** Each category's own colour, derived from its hue so it works in light and dark themes. */
export const tint = (id: CategoryId) => ({ '--tint': `oklch(0.6 0.13 ${CATEGORIES[id].hue})` }) as CSSProperties

/** A musical glyph per category (rendered in Noto Music), the library's only iconography. */
export const GLYPHS: Record<CategoryId, string> = {
  technique: '𝆑',
  instrument: '𝄆',
  musicianship: '♪',
  basics: '𝄞',
  rhythm: '♩',
  pitch: '𝄢',
  scales: '♯',
  harmony: '𝄋',
  chromatic: '♭',
  form: '𝄇',
  polyphony: '♮',
  expression: '𝆒',
  jazz: '𝅘𝅥𝅮',
  improvisation: '𝄌',
  modern: '𝄫',
  listening: '𝄽',
  philosophy: '𝄐',
  analysis: '𝄡',
  composition: '𝅘𝅥𝅯',
  pianists: '♫',
  composers: '𝅗𝅥',
  genres: '♬',
  musicology: '𝄪',
  organology: '𝄜',
  vietnam: '𝆕',
  sacred: '𝅜',
  organ: '𝆮',
}
