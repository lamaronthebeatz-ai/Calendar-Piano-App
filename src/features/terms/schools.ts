/**
 * How each school understands a contested concept. Every line restates what a library article already says
 * (and sources); `from` is that article, so the claim can be checked where it is argued. Add a concept only when
 * the library has an article for each view. Shown on the concept's article and on /terms.
 */
export interface View {
  school: string
  view: string
  /** library article that sets out this view */
  from: string
}

export const SCHOOLS: Record<string, { views: View[]; compare?: string }> = {
  'chuc-nang-hoa-am': {
    compare: 'so-sanh-hai-truong-phai-hoa-am',
    views: [
      { school: 'Nga – Xô viết (theo Riemann)', view: 'Mọi hợp âm quy về ba chức năng T – S – D; hợp âm phụ là "đại diện" của chức năng (SII, TSVI, DTIII). Câu hỏi phân tích: hợp âm này làm gì?', from: 'so-sanh-hai-truong-phai-hoa-am' },
      { school: 'Phương Tây (lý thuyết bậc)', view: 'Bảy bậc; hợp âm phụ là hợp âm độc lập trên bậc của nó (ii, vi, iii). Câu hỏi phân tích: hợp âm này là gì, đi theo chuyển động nốt gốc nào?', from: 'so-sanh-hai-truong-phai-hoa-am' },
      { school: 'Hệ ký hiệu Nga', view: 'Ghi cả chức năng lẫn bậc: SII, TSVI, DTIII, DVII7; K64 cho hợp âm bốn sáu kết.', from: 'ky-hieu-chuc-nang-truong-phai-nga' },
      { school: 'Schenker', view: 'Cả tác phẩm có tính điệu là sự "kéo dài" của một cấu trúc nền đơn giản trên bè trầm I – V – I.', from: 'phan-tich-schenker' },
      { school: 'Neo-Riemann', view: 'Mô tả việc chuyển giữa các hợp âm ba bằng ba phép P, L, R, mỗi phép dịch một nốt — dùng cho nhạc cuối Lãng mạn.', from: 'neo-riemann' },
    ],
  },
  'hinh-thuc-sonata': {
    views: [
      { school: 'Giáo khoa phương Tây phổ thông', view: 'Trình bày (hai chủ đề, hai giọng) – Phát triển – Tái hiện (cả hai chủ đề về giọng chính).', from: 'hinh-thuc-sonata' },
      { school: 'Nga – Xô viết (Sposobin, Mazel, Asafyev)', view: 'Định nghĩa qua "tính hai chủ đề được nhắc lại"; phần trình bày gồm phần chính, phần nối, phần phụ, phần kết.', from: 'hinh-thuc-nga-sonata' },
      { school: 'Mazel', view: 'Hình thức có tái hiện; tái hiện đưa hai chủ đề lại gần nhau về giọng; có các biến thể như thay phát triển bằng episode, sonata không phát triển.', from: 'mazel-sonata-va-rondo-sonata' },
      { school: 'Caplin (chức năng hình thức)', view: 'Mỗi phần không chỉ là một "khối" mà mang một chức năng theo thời gian: mở đầu, ở giữa, kết thúc, trước khi bắt đầu, sau khi kết thúc.', from: 'chuc-nang-hinh-thuc' },
    ],
  },
  'dieu-thuc': {
    views: [
      { school: 'Bình ca Gregorian', view: 'Tám điệu thức trên bốn âm kết Rê, Mi, Fa, Sol; điệu lẻ chính (authentic), điệu chẵn phụ (plagal); mỗi điệu có một âm đọc.', from: 'tam-dieu-thuc-va-giong-thanh-vinh' },
      { school: 'Lý thuyết hiện nay', view: 'Bảy âm giai sinh ra khi bắt đầu từ mỗi bậc của âm giai trưởng, mỗi điệu một màu riêng.', from: 'dieu-thuc' },
      { school: 'Hoà âm điệu thức', view: 'Chọn hợp âm chứa nốt đặc trưng và dùng kết riêng của từng điệu, thay vì kéo về chủ âm bằng V – I.', from: 'hoa-am-dieu-thuc' },
      { school: 'Jazz điệu thức', view: 'Thay tiến trình đổi hợp âm nhanh của bebop bằng vài "vùng" điệu thức kéo dài; người solo nghĩ theo âm giai hơn là theo hợp âm.', from: 'jazz-dieu-thuc' },
    ],
  },
  'truong-hoa-am': {
    views: [
      { school: 'Nga – Xô viết', view: 'Một dạng điệu thức (лад) chính thức, đứng cạnh trưởng tự nhiên; giữ chữ chức năng (S, SII, DVII7); nên Fa thứ cũng là giọng họ hàng mức một của Đô trưởng.', from: 'truong-hoa-am' },
      { school: 'Phương Tây', view: 'Không có "điệu thức trưởng hoà âm" trong giáo trình cơ bản; các hợp âm này là hợp âm mượn từ giọng thứ cùng tên (iv, ii°, ♭VI).', from: 'truong-hoa-am' },
    ],
  },
}
