/**
 * The journey game: chapters are eras, a chapter is a route of scenes on the world map. Everything a scene says that
 * is a fact points at a library article (`read`), which scripts/check-story.mjs checks like any [[link]].
 */

/** Who speaks a line: the narrator, the player (their chosen name), or the scene's character. */
export type Speaker = 'narrator' | 'me' | 'npc'

export interface Line {
  who: Speaker
  /** `{ten}` is the player's name. Dialogue is reconstructed ("lời dựng lại") unless `quote` names its source. */
  text: string
  /** A real quotation: where it comes from (article slug). */
  quote?: string
  /** An invented episode (not just reconstructed speech): shown as such, so it is never mistaken for history. */
  fiction?: boolean
}

export interface Quest {
  ask: string
  choices: string[]
  /** Index of the right choice. */
  answer: number
  /** The article to read for the answer, and where in it. */
  read: string
  where: string
  /** What the character says once answered right. */
  explain: string
}

/** A card the player keeps: a piece of evidence, with the article it comes from. */
export interface Card {
  id: string
  title: string
  text: string
  read: string
}

export interface Npc {
  name: string
  role: string
  /** An image in /images/journey (without extension); none = an initial on gold. */
  img?: string
  /** The library page about this person, if any. */
  slug?: string
  /** A character made up for the story (a monk, a copyist): said so on screen. */
  invented?: boolean
}

export interface Scene {
  id: string
  place: string
  lat: number
  lon: number
  year: string
  title: string
  /** Background picture in /images/journey. */
  bg: string
  /** Where the camera rests on the picture (object-position). */
  focus?: string
  npc: Npc
  lines: Line[]
  quest: Quest
  card: Card
  /** A recording to hear, from the library's YouTube examples. */
  listen?: { youtube: string; caption: string }
  /** Generated stops borrow a track of the chapter (MUSIC key); story scenes use their own id. */
  track?: string
  /** Beyond the edge of the chapter's old map (New York on a map of Europe): drawn at the edge, with its name. */
  far?: boolean
}

export type Verdict = 'fact' | 'legend' | 'unsure'

/** The historian's court at the end of a chapter: claims heard on the road, judged with the cards gathered. */
export interface Claim {
  id: string
  text: string
  verdict: Verdict
  explain: string
  read: string
}

export interface Chapter {
  id: string
  numeral: string
  title: string
  era: string
  years: string
  /** The chapter's look: a class on the stage (`jr-era-medieval`…). */
  style: string
  cover: string
  /** Music on the chapter map and in the court: a key of MUSIC (music.ts). */
  theme: string
  intro: string
  scenes: Scene[]
  court: { intro: string; claims: Claim[] }
  outro: string
}
