/**
 * Character definitions for the side-view scenes: how a character looks and moves — never who they are. Name, role,
 * historical status and dialogue stay in the arc's CharacterDef (content/*.ts); a visual definition is keyed by the
 * same id ('npc:bt/rinaldo'), plus 'player' and the extras that only walk through events.
 *
 * Appearance is a set of parts chosen from small catalogues (hair, face, garment, colours, accessory, held item), drawn
 * on the shared rig — so a new monk, a canon or a lay brother is a few lines here, the controller and the clips stay
 * the same. Sizes differ per character (`height`, `build`): the rig scales around its anchor (feet, centre).
 */
export type Hair = 'hood' | 'tonsure' | 'cap' | 'short' | 'veil'
export type Face = 'young' | 'old' | 'beard'
export type Garment = 'cloak' | 'habit' | 'tunic'
export type Accessory = 'satchel' | 'keys' | 'rope-belt' | 'none'
export type Held = 'none' | 'quill' | 'books' | 'staff'
export type Mood = 'neutral' | 'focus' | 'surprise' | 'happy' | 'sad' | 'worried' | 'thoughtful'

export type Appearance = {
  hair: Hair
  hairColour: string
  skin: string
  face: Face
  garment: Garment
  colour: string
  trim: string
  accessory: Accessory
  held: Held
}
export type CharacterVisual = {
  id: string
  appearance: Appearance
  /** 1 = the standard 180-unit figure */
  height: number
  /** horizontal scale of the body (0.9 slim … 1.1 broad) */
  build: number
  /** the clip shown at rest (a scribe writes, a reader reads) */
  idleClip?: string
  /** walking speed, scene units per second */
  speed: number
}

export const CHARACTERS: Record<string, CharacterVisual> = {
  player: {
    id: 'player',
    appearance: { hair: 'hood', hairColour: '#4a2e18', skin: '#e2c29a', face: 'young', garment: 'cloak', colour: '#8a5a24', trim: '#d6ae60', accessory: 'satchel', held: 'none' },
    height: 1,
    build: 1,
    speed: 230,
  },
  // the librarian: older, black Benedictine habit, grey tonsure and beard, keys at the belt
  'npc:bt/quan-thu': {
    id: 'npc:bt/quan-thu',
    appearance: { hair: 'tonsure', hairColour: '#9a948a', skin: '#d8b48c', face: 'beard', garment: 'habit', colour: '#26201c', trim: '#6b5a44', accessory: 'keys', held: 'none' },
    height: 1.03,
    build: 1.08,
    idleClip: 'read',
    speed: 150,
  },
  // the young scribe: slighter, brown tonsure, a quill in hand, writing at rest
  'npc:bt/rinaldo': {
    id: 'npc:bt/rinaldo',
    appearance: { hair: 'tonsure', hairColour: '#5a3a1e', skin: '#e8c8a0', face: 'young', garment: 'habit', colour: '#3a2a20', trim: '#a88a5a', accessory: 'rope-belt', held: 'quill' },
    height: 0.95,
    build: 0.92,
    idleClip: 'write',
    speed: 200,
  },
  // an extra: a lay brother carrying books across the library once (a scene event)
  'extra:lay-brother': {
    id: 'extra:lay-brother',
    appearance: { hair: 'cap', hairColour: '#3a2a1a', skin: '#d9b088', face: 'young', garment: 'tunic', colour: '#6a6458', trim: '#8a7350', accessory: 'rope-belt', held: 'books' },
    height: 0.97,
    build: 1,
    speed: 140,
  },
}
export const visualOf = (id: string): CharacterVisual => CHARACTERS[id] ?? CHARACTERS.player
