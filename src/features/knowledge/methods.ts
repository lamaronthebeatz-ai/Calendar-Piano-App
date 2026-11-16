import { THEORY, type Concept } from '../analyze/links'
import type { Lens } from '../analyze/store'

/**
 * How /analyze reaches each kind of label: the procedure, what it rests on, how well it was measured, and the
 * concepts (library articles) it applies. Restates docs/notes/analyze.md; the figures are the measurements recorded
 * there. Everything an analysis shows is a computed result, not a verified reading of the piece.
 */
export interface Method {
  id: string
  title: string
  lens: Lens[]
  how: string
  /** the published approach it follows, as named in the engine's notes */
  basis: string
  /** measured accuracy, with what it was measured on */
  measured?: string
  limits: string
  concepts: Concept[]
  /** library articles on the method itself */
  read: string[]
}

export const METHODS: Method[] = [
  {
    id: 'hop-am',
    title: 'Nhận hợp âm',
    lens: ['classical', 'jazz'],
    how: 'Cắt bản nhạc thành lát theo mỗi lần nốt đổi, chấm điểm từng mẫu hợp âm trên mỗi đoạn (trọng số theo trường độ, phách, khởi âm, bè trầm, giảm cho nốt có dáng trang trí) rồi chia đoạn bằng quy hoạch động.',
    basis: 'Khớp mẫu hợp âm theo Pardo & Birmingham, có phạt đổi hợp âm (ghi trong ghi chú bộ máy).',
    measured: 'Đúng gốc hợp âm 83,9% (gốc + thể đảo 78%) trên 19 hợp xướng Bach, so với phân tích chuyên gia trong kho music21 (mốc 11/2026).',
    limits: 'Nhạc dày nốt trang trí hoặc thiếu nốt ba/bảy dễ đọc sai; bản có ký hiệu hợp âm (lead sheet) thì dùng chính ký hiệu đó.',
    concepts: ['triad', 'seventh', 'inversion', 'nct'],
    read: ['phan-tich-hoa-am', 'am-nhac-hoc-tinh-toan'],
  },
  {
    id: 'giong',
    title: 'Tìm giọng và chuyển giọng',
    lens: ['classical', 'jazz'],
    how: 'Thuật toán Viterbi trên 24 giọng: hợp âm hợp giọng, át → chủ, tương quan với hồ sơ giọng trong cửa sổ hai ô, có giá cho mỗi lần đổi giọng; vùng giọng ngắn kẹp giữa cùng một giọng được gộp thành ly điệu.',
    basis: 'Hồ sơ giọng Krumhansl – Kessler (so tương quan) kết hợp luật hoà âm.',
    measured: 'Đúng giọng 77,5% trên 19 hợp xướng Bach (mốc 11/2026). Chênh nhau ở ranh ly điệu / chuyển giọng phần lớn là chuyện quan điểm phân tích.',
    limits: 'Ranh giới ly điệu – chuyển giọng là quyết định của người phân tích; máy chọn một cách đọc.',
    concepts: ['key', 'modulation', 'applied', 'parallelKeys'],
    read: ['tim-giong-bang-may', 'dieu-tinh'],
  },
  {
    id: 'chuc-nang',
    title: 'Nhãn chức năng và số La Mã',
    lens: ['classical'],
    how: 'Đọc bậc theo cách viết nốt; ghi nhãn Nga – Xô viết (T/S/D, K64, DD…) hoặc số La Mã quốc tế (V65, V7/V, N6, Ger65).',
    basis: 'Bảng ký hiệu chức năng của trường phái Nga và hệ số La Mã phương Tây, như các bài trong thư viện trình bày.',
    limits: 'Cùng một hợp âm có thể mang hai nhãn tuỳ trường phái; xem trang “mỗi trường phái hiểu thế nào”.',
    concepts: ['function', 'neapolitan', 'augSixth', 'mixture', 'chromatic'],
    read: ['so-sanh-hai-truong-phai-hoa-am', 'ky-hieu-chuc-nang-truong-phai-nga'],
  },
  {
    id: 'cau-ket',
    title: 'Câu kết',
    lens: ['classical', 'jazz'],
    how: 'Tìm chỗ nhạc dừng (nốt dài, dấu lưu, cuối câu) rồi xếp loại PAC / IAC / HC / DC / PC theo hai hợp âm cuối và bè cao.',
    basis: 'Định nghĩa các loại câu kết trong giáo trình hoà âm của thư viện.',
    measured: '98/127 dấu lưu trong bộ hợp xướng Bach có câu kết được nhận (mốc 11/2026).',
    limits: 'Câu kết giữa câu không có dấu dừng rõ có thể bị bỏ sót.',
    concepts: ['cadence', 'phrase'],
    read: ['cau-ket'],
  },
  {
    id: 'hinh-thuc',
    title: 'Hình thức',
    lens: ['classical', 'jazz', 'xx'],
    how: 'Lấy “dấu vân tay” mỗi ô (giai điệu bè cao theo bậc, nhịp điệu, sắc độ), tìm nhắc lại và mô tiến, cắt phần ở cuối câu rồi so với các khuôn hình thức theo tiêu chí sách.',
    basis: 'Tiêu chí nhận dạng hình thức của các bài hình thức trong thư viện (hai đoạn, ba đoạn, rondo, sonata, AABA).',
    limits: 'Là phỏng đoán theo khuôn; tác phẩm lệ khuôn sẽ ra nhãn gần nhất, không phải phân tích của chuyên gia.',
    concepts: ['binary', 'ternary', 'rondo', 'sonata', 'sequence', 'motif'],
    read: ['hinh-thuc-sonata'],
  },
  {
    id: 'jazz',
    title: 'Hoà âm jazz và thang âm',
    lens: ['jazz'],
    how: 'Số La Mã tính từ âm giai trưởng của chủ âm, nhận ii – V – I, SubV, backdoor, vòng quay đầu; gợi ý thang âm cho từng hợp âm và nốt dẫn hướng.',
    basis: 'Hệ thống hợp âm – âm giai theo The Jazz Theory Book (Levine 1995).',
    limits: 'Thang âm là một gợi ý trong nhiều lựa chọn của người chơi.',
    concepts: ['iiVI', 'subV', 'chordScale', 'guideTones', 'turnaround'],
    read: ['he-thong-hop-am-am-giai'],
  },
  {
    id: 'xx',
    title: 'Tập hợp cao độ và kỹ thuật thế kỷ 20',
    lens: ['xx'],
    how: 'Gom nốt theo phách thành tập hợp, tra tên Forte (208 lớp 3–9 âm, bảng sinh bằng music21), nhận toàn cung, ngũ cung, bát cung, dãy 12 âm và các dạng P/I/R/RI, pedal, ostinato, trung tâm cao độ.',
    basis: 'Lý thuyết tập hợp cao độ (bảng Forte) và kỹ thuật 12 âm.',
    limits: 'Không vẽ giọng và câu kết (ý niệm điệu tính) ở lăng kính này.',
    concepts: ['setTheory', 'twelveTone', 'octatonic', 'quartal', 'ostinato'],
    read: ['tap-hop-cao-do', 'ky-thuat-12-am'],
  },
]

export const METHOD_BY_ID = new Map(METHODS.map((m) => [m.id, m]))
export const methodSlugs = (m: Method) => [...m.concepts.map((c) => THEORY[c]), ...m.read]
