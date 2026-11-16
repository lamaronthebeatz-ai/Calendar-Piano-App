import type { Save } from './save'
import { SKILL_STEPS, skillLevel } from './progression'
import type { SkillId } from './types'

/**
 * The six branches of the skill tree. A level is earned with points of that branch (puzzles, quests, verdicts);
 * a perk is something the game really opens at that level — nothing here is decoration.
 */
export const SKILL_TREE: Record<SkillId, { title: string; text: string; tiers: [string, string, string, string, string] }> = {
  history: { title: 'Lịch sử', text: 'Niên đại, con người, nơi chốn, bối cảnh.', tiers: ['Lữ khách', 'Người ghi chép', 'Người kể sử', 'Biên niên gia', 'Sử gia'] },
  theory: { title: 'Lý thuyết', text: 'Ký âm, âm giai, điệu thức, hoà âm.', tiers: ['Người tập hát', 'Người đọc nốt', 'Người chép nhạc', 'Thầy dạy hát', 'Nhà lý thuyết'] },
  aural: { title: 'Nghe', text: 'Nhận ra cao độ, bè, âm sắc, phong cách bằng tai.', tiers: ['Người nghe', 'Người nghe kỹ', 'Đôi tai tinh', 'Người phân biệt bè', 'Tai thầy'] },
  analysis: { title: 'Phân tích bản nhạc', text: 'Hình thức, câu kết, hoà âm trên bản nhạc.', tiers: ['Người xem', 'Người đọc bản nhạc', 'Người phân tích', 'Người giải nghĩa', 'Nhà phân tích'] },
  sources: { title: 'Phê bình nguồn', text: 'Phân biệt sơ cấp, thứ cấp, giai thoại; cân độ tin cậy.', tiers: ['Người nghe kể', 'Người hỏi nguồn', 'Người đối chiếu', 'Người thẩm định', 'Nhà phê bình nguồn'] },
  research: { title: 'Tư duy nghiên cứu', text: 'Đặt câu hỏi, gom chứng cứ, kết luận vừa đủ.', tiers: ['Người tò mò', 'Người điều tra', 'Người lập luận', 'Người viết khảo cứu', 'Nhà nghiên cứu'] },
}

export interface Perk {
  id: string
  skill: SkillId
  level: number
  title: string
  text: string
}

/** What a level opens. Each perk is checked where it acts (content conditions use `{ skill, level }`). */
export const PERKS: Perk[] = [
  { id: 'mutation', skill: 'theory', level: 1, title: 'Nhiệm vụ ẩn: Đổi lục âm', text: 'Ở Arezzo hiện thêm một thử thách về chuyển hexachord (mutation).' },
  { id: 'report', skill: 'research', level: 1, title: 'Báo cáo nghiên cứu', text: 'Khép một câu chuyện điều tra thì viết được báo cáo, lưu thành đề tài ở Bàn làm việc.' },
]

export const hasPerk = (s: Save, id: string) => {
  const p = PERKS.find((x) => x.id === id)
  return !!p && skillLevel(s.skills[p.skill] ?? 0) >= p.level
}

/** Where a branch stands: level, its title, points, and how far to the next level. */
export function branch(s: Save, k: SkillId) {
  const points = s.skills[k] ?? 0
  const level = skillLevel(points)
  const next = SKILL_STEPS[level + 1]
  return { level, title: SKILL_TREE[k].tiers[level], points, next, toNext: next === undefined ? 0 : next - points }
}
