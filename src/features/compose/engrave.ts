import type { VerovioToolkit } from 'verovio/esm'

let tk: Promise<VerovioToolkit> | null = null

/**
 * Verovio (LGPL-3.0, its own chunk of about 7 MB with the WebAssembly inside) is loaded the first time the editor
 * opens, never with the app; the service worker keeps it in a runtime cache afterwards (vite.config.ts).
 */
export function engraver(): Promise<VerovioToolkit> {
  tk ??= Promise.all([import('verovio/wasm'), import('verovio/esm')]).then(async ([wasm, esm]) => new esm.VerovioToolkit(await wasm.default()))
  tk.catch(() => (tk = null))
  return tk
}

/**
 * The whole score, `widthPx` wide, at `scale` per cent: the pages as tall as the music needs, one after the other.
 * Verovio caps a page at 60 000 units (its maximum `pageHeight`); a long or many-staved score breaks onto further
 * pages there — rendering only page 1 showed 11 of 105 bars of a dense score (fixed 24/11/2026). Every page is
 * rendered; the caller's queries run over the container, so stacked <svg>s behave as one score.
 */
export function render(t: VerovioToolkit, mei: string, widthPx: number, scale: number): string {
  t.setOptions({
    pageWidth: Math.round((widthPx * 100) / scale),
    pageHeight: 60000,
    adjustPageHeight: true,
    scale,
    pageMarginLeft: 40,
    pageMarginRight: 40,
    pageMarginTop: 60,
    pageMarginBottom: 60,
    header: 'none',
    footer: 'none',
    breaks: 'auto',
    svgHtml5: true,
  })
  t.loadData(mei)
  return Array.from({ length: t.getPageCount() }, (_, i) => t.renderToSVG(i + 1)).join('')
}

/** Pages for print, sized to the A4 sheet inside the app's print margins (178 × 259 mm), title at the top. */
export function renderPages(t: VerovioToolkit, mei: string): string[] {
  t.setOptions({
    pageWidth: 1780,
    pageHeight: 2560, // a little under the sheet: an SVG exactly as tall spills a blank page
    adjustPageHeight: false,
    scale: 40,
    pageMarginLeft: 60, // brackets and braces hang left of the staff
    pageMarginRight: 10,
    pageMarginTop: 0,
    pageMarginBottom: 0,
    header: 'auto',
    footer: 'none',
    breaks: 'auto',
    svgHtml5: false,
  })
  t.loadData(mei)
  return Array.from({ length: t.getPageCount() }, (_, i) => t.renderToSVG(i + 1))
}
