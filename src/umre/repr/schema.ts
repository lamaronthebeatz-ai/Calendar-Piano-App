import { SCHEMA, SCHEMA_VERSION, type Score } from './score'
import { validateScore, type Issue } from './validate'

/**
 * Serialisation and versioning. Stored scores carry `schema` and `version`; reading goes through `migrate`, which
 * upgrades step by step and REFUSES a version newer than this code (it never rewrites data it does not understand).
 */
export class SchemaError extends Error {}

/** One upgrade step per version: MIGRATIONS[v] turns a version-v object into version v + 1. Empty while v1 is the only version. */
const MIGRATIONS: Record<number, (raw: Record<string, unknown>) => Record<string, unknown>> = {}

export function migrate(raw: unknown): Score {
  if (!raw || typeof raw !== 'object') throw new SchemaError('không phải một đối tượng')
  let obj = raw as Record<string, unknown>
  if (obj.schema !== SCHEMA) throw new SchemaError(`schema "${String(obj.schema)}" không phải "${SCHEMA}"`)
  let v = obj.version
  if (!Number.isInteger(v) || (v as number) < 1) throw new SchemaError(`phiên bản không hợp lệ: ${String(v)}`)
  if ((v as number) > SCHEMA_VERSION) throw new SchemaError(`phiên bản ${v} mới hơn mã đang chạy (${SCHEMA_VERSION}) — không đọc để tránh làm hỏng dữ liệu`)
  while ((v as number) < SCHEMA_VERSION) {
    const step = MIGRATIONS[v as number]
    if (!step) throw new SchemaError(`thiếu bước chuyển từ phiên bản ${v}`)
    obj = step(obj)
    v = (v as number) + 1
    obj = { ...obj, version: v }
  }
  return obj as unknown as Score
}

/** JSON text of a score (rationals stay {n, d}: exact and human-readable). */
export const toJson = (s: Score) => JSON.stringify(s)
/** Parse, migrate and validate; throws with every structural error listed. */
export function fromJson(text: string): { score: Score; warnings: Issue[] } {
  const score = migrate(JSON.parse(text))
  const issues = validateScore(score)
  const errors = issues.filter((i) => i.severity === 'error')
  if (errors.length) throw new SchemaError(errors.map((e) => `${e.path}: ${e.message}`).join('\n'))
  return { score, warnings: issues.filter((i) => i.severity === 'warning') }
}
