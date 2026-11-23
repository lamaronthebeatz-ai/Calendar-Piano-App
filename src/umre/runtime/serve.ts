import { handle } from '../api'
import type { Envelope, Reply } from './host'

/** The worker side, independent of the worker API: answer one envelope (errors become replies, never a crash). */
export async function serve(msg: Envelope): Promise<Reply> {
  try {
    return { id: msg.id, ok: true, res: await handle(msg.req) }
  } catch (e) {
    return { id: msg.id, ok: false, error: (e as Error).message }
  }
}
