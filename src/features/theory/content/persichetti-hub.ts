import type { Article } from '../wiki'

/** Nguồn chung của bộ "Hoà âm thế kỷ XX" đọc theo Persichetti (bản quét do Lamar gửi; số trang theo bản in Norton 1961). */
export const PERSICHETTI_REFS: [string, string][] = [
  ['Vincent Persichetti, Twentieth-Century Harmony: Creative Aspects and Practice — New York: W. W. Norton, 1961', 'https://wwnorton.com/books/Twentieth-Century-Harmony/'],
]

export const persichettiHub: Article[] = [
  {
    slug: 'hoa-am-the-ky-xx-lo-trinh',
    title: 'Hoà âm thế kỷ XX — lộ trình (theo Vincent Persichetti, Twentieth-Century Harmony)',
    category: 'harmony',
    aliases: ['Twentieth-Century Harmony', 'Persichetti', 'Vincent Persichetti', 'hoà âm Persichetti', 'sách hoà âm thế kỷ 20'],
    summary: 'Trang mở đầu bộ 13 bài đọc theo Twentieth-Century Harmony của Vincent Persichetti (Norton, 1961): sách nói gì, cách sắp xếp, cách đọc, và những giới hạn của một bản tóm lược.',
    refs: PERSICHETTI_REFS,
    body: `
**Vincent Persichetti** (1915 – 1987), nhà soạn nhạc và giáo sư sáng tác ở Juilliard, viết *Twentieth-Century Harmony: Creative Aspects and Practice* (Norton, 1961). Ông nói rõ đây không phải một chuyên luận suy đoán hay một hệ thống riêng, mà là bản kê **những chất liệu hoà âm các nhà soạn nhạc thế kỷ XX thường dùng**, viết cho sinh viên hoà âm nâng cao và người mới sáng tác [^persichetti-1961, tr. 11].

## Ý chính
Câu mở chương 1 cũng là câu kết sách: bất kỳ âm nào cũng có thể nối tiếp hay vang cùng bất kỳ âm nào; hiệu quả tuỳ vào **ngữ cảnh, hình thức, tay nghề và tâm hồn người viết** [^persichetti-1961, tr. 13, 277]. Vì thế sách không đưa luật cấm mà đưa **cách đo**: đo độ căng của quãng, đo độ vang của hợp âm, đo hướng đi của chuỗi hợp âm, rồi để tai quyết định.

## Cách sách sắp xếp
1. **Vật liệu gốc** — quãng (chương 1) và thang âm (chương 2).
2. **Các họ hợp âm** — chồng quãng 3 (3), quãng 4 (4), hợp âm thêm nốt (5), quãng 2 và cụm âm (6), hợp âm chồng (7), hợp âm ghép và hợp âm soi gương (8).
3. **Chuyển động** — hướng hoà âm, nối hợp âm, nghịch âm, hoà âm song song, kết (9); nhịp điệu hoà âm, hoà âm tĩnh, toàn diatonic, cường độ và dấu lặng (10); trang trí và biến đổi (11).
4. **Tổ chức lớn** — trung tâm giọng, chuyển giọng, đa điệu tính, phi điệu tính, hoà âm chuỗi (12); tổng hợp các lối viết (13).

Mỗi chương của sách gồm phần trình bày, danh mục tác phẩm để tra (sách không in lại trích đoạn mà ghi trang tổng phổ) và bài tập sáng tác cho đủ loại nhạc cụ.

## Cách đọc bộ bài
- Mỗi bài tóm lược một chương bằng lời của bộ bài, ví dụ nhạc do người biên soạn tự viết để minh hoạ ý, trích ngắn kèm số trang bản in. Sách còn bản quyền (Norton vẫn in) nên **không dịch nguyên văn, không in lại ví dụ nhạc và bài tập của sách**.
- Thuật ngữ Persichetti dùng cho độ căng của quãng (open consonance, soft consonance, mild dissonance, sharp dissonance) được dịch thống nhất: **thuận mở, thuận êm, nghịch nhẹ, nghịch gắt**.
- Đọc cùng các bài nền: [[hoa-am-the-ky-20]], [[hop-am-chong]], [[am-cum]], [[da-dieu-tinh]], [[toan-diatonic]], [[ky-thuat-12-am]].

## Giới hạn cần biết
- Bản đọc là OCR từ bản quét; tên tác phẩm và số trang tổng phổ trong danh mục của sách không chép lại.
- Sách viết năm 1961: âm nhạc điện tử, phổ âm (spectral), tối giản chưa có mặt; phần chuỗi chỉ bàn lối "chuỗi tự do" ở mức hoà âm.
`,
  },
]
