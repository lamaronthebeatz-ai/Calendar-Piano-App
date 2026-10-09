import type { Article } from '../wiki'
import { SCHOOLS } from './schools'

/**
 * Shared generator for people directories (composers, pianists): each person is one data row;
 * a page per period (tables grouped by school, sorted by birth year) and a page per person are
 * generated from it.
 */

export interface Person {
  name: string
  years: string
  country: string
  /** "period:group", e.g. "bar:lategermany". */
  group: string
  desc: string
  works: string[]
  /** Short name that also links here, e.g. "Bach" (only when unambiguous). */
  short?: string
  /** Related theory article slugs. */
  topics?: string[]
  wiki?: string
  /** Already has a page elsewhere (e.g. a composer who was also a great pianist): list them, but don't generate a page. */
  existing?: boolean
  /** Extra article markup (biography, graded works…) placed after the header line. */
  more?: string
  /** Sources for `more`, as [title, url]. */
  refs?: [string, string][]
}

export interface Period {
  id: string
  slug: string
  title: string
  years: string
  intro: string
  groups: readonly (readonly [string, string])[]
}

export const person = (name: string, years: string, country: string, group: string, desc: string, works: string[], extra: Partial<Person> = {}): Person => ({
  name, years, country, group, desc, works, ...extra,
})

export const slugify = (s: string) =>
  s.normalize('NFD').replace(/\p{M}/gu, '').replace(/[đĐ]/g, 'd').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/** Living people are written "1958–"; show them as "sinh 1958". */
const years = (p: Person) => (p.years.endsWith('–') ? `sinh ${p.years.slice(0, -1)}` : p.years)
const birthYear = (p: Person) => Number(/\d{3,4}/.exec(p.years)?.[0] ?? 0)

export function buildPeople(
  periods: readonly Period[],
  people: Person[],
  cfg: { category: Article['category']; noun: string; groupLabel: string; worksTitle: string; footer: string },
): Article[] {
  const periodOf = (p: Person) => periods.find((x) => x.id === p.group.split(':')[0])!
  const groupTitle = (p: Person) => periodOf(p).groups.find(([id]) => id === p.group.split(':')[1])![1]

  const personArticle = (p: Person): Article => ({
    slug: slugify(p.name),
    title: p.name,
    category: cfg.category,
    unlisted: true,
    aliases: p.short ? [p.short] : undefined,
    summary: `${years(p)} · ${p.country} · ${p.desc}`,
    wiki: p.wiki ?? p.name.replace(/ /g, '_'),
    portrait: {
      titles: [...new Set([p.wiki ?? p.name, `${p.name} (composer)`, `${p.name} (pianist)`, `${p.name} (musician)`])],
      years: p.years,
    },
    refs: p.refs,
    body: [
      `**Thời kỳ:** [[${periodOf(p).slug}|${periodOf(p).title}]] · **${cfg.groupLabel}:** ${groupTitle(p)} · **Quốc gia:** ${p.country}`,
      p.more?.trim() ?? '',
      `## ${cfg.worksTitle}`,
      p.works.map((w) => `- ${w}`).join('\n'),
      p.topics ? `Liên quan: ${p.topics.map((t) => `[[${t}]]`).join(', ')}.` : '',
    ].join('\n\n'),
  })

  const periodArticle = (period: Period): Article => {
    const members = people.filter((p) => periodOf(p) === period).sort((a, b) => birthYear(a) - birthYear(b))
    return {
      slug: period.slug,
      title: period.title,
      category: cfg.category,
      summary: `${period.years} · ${members.length} ${cfg.noun}, chia theo nhóm và xếp theo năm sinh.`,
      refs: [...new Map(period.groups.flatMap(([id]) => SCHOOLS[`${period.id}:${id}`]?.refs ?? []).map((r) => [r[1], r])).values()],
      body: [
        period.intro,
        ...period.groups.flatMap(([id, title]) => [
          `## ${title}`,
          SCHOOLS[`${period.id}:${id}`]?.intro ?? '',
          `| ${cfg.noun[0].toUpperCase() + cfg.noun.slice(1)} | Năm | Quốc gia | Nổi bật |\n|---|---|---|---|\n` +
            members
              .filter((p) => p.group === `${period.id}:${id}`)
              .map((p) => `| [[${slugify(p.name)}|${p.name}]] | ${years(p)} | ${p.country} | ${p.works[0]} |`)
              .join('\n'),
        ]),
        cfg.footer,
      ].join('\n\n'),
    }
  }

  return [...periods.map(periodArticle), ...people.filter((p) => !p.existing).map(personArticle)]
}
