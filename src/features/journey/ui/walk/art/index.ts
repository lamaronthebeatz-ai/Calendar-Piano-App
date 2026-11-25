import type { ComponentType } from 'react'

/** A scene's drawings, by the keys its layers name. Each module is its own chunk, fetched when its scene loads. */
export type Art = Record<string, ComponentType<{ width: number; height: number; floor: number }>>

const MODULES: Record<string, () => Promise<Art>> = {
  pomposa: () =>
    import('./pomposa').then((m) => ({
      libraryRoom: m.LibraryRoom,
      libraryCouncilOpen: m.LibraryCouncilOpen,
      libraryLight: m.LibraryLight,
      libraryNear: m.LibraryNear,
      scriptoriumRoom: m.ScriptoriumRoom,
      scriptoriumLight: m.ScriptoriumLight,
      scriptoriumNear: m.ScriptoriumNear,
    })),
}
export const loadArt = (key: string): Promise<Art> => (MODULES[key] ? MODULES[key]() : Promise.reject(new Error(`Không có bộ tranh "${key}"`)))
export const artKeys = () => Object.keys(MODULES)
