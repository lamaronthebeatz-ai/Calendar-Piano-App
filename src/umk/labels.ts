import type { Epistemic } from './schema'

/** How far a result is established, said plainly (a UMRE answer is not a proof unless an independent check says so). */
export const EPISTEMIC: Record<Epistemic, string> = {
  validated: 'Đã kiểm độc lập: bộ kiểm không phải của chính máy tìm xác nhận theo sổ luật',
  interpretation: 'Diễn giải của máy (có độ tin cậy) — chưa phải kết luận đã kiểm',
  unresolved: 'Chưa kết luận',
  'not-formalised': 'Không hình thức hoá được — chỉ có ngữ cảnh tri thức để đọc',
  error: 'Lỗi khi chạy',
}
const GAP_LABEL: Record<string, string> = {
  'missing-premise': 'Thiếu tiền đề', 'insufficient-data': 'Thiếu dữ liệu', conflict: 'Mâu thuẫn', 'open-question': 'Câu hỏi mở của sổ luật', 'unverified-source': 'Nguồn chưa đối chiếu',
  'missing-source': 'Thiếu nguồn', 'missing-definition': 'Thiếu định nghĩa', 'missing-rule': 'Thiếu luật', 'missing-exception': 'Thiếu ngoại lệ', 'ambiguous-term': 'Thuật ngữ trỏ hai nơi',
}
export const gapLabel = (k: string) => GAP_LABEL[k] ?? k
