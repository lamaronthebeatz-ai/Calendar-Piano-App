/**
 * Music engraved for the children's piano books (LilyPond → one SVG per system, scripts/sheets/build.py):
 * short examples (`::ex id`) in public/sheets/ex/, pieces (`::sheet id`) in public/sheets/tp/.
 * sheets.json lists each one's systems with their size in CSS px; it loads on demand.
 */
export type SheetSystem = [file: string, w: number, h: number]
type Manifest = { ex: Record<string, SheetSystem[]>; tp: Record<string, SheetSystem[]> }

let manifest: Promise<Manifest> | undefined
export const loadSheets = () => (manifest ??= import('./sheets.json').then((m) => m.default as unknown as Manifest))

export const sheetUrl = (kind: 'ex' | 'tp', file: string) => `${import.meta.env.BASE_URL}sheets/${kind}/${file}`
