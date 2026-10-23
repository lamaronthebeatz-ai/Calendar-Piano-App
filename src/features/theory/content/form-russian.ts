import type { Article } from '../wiki'

const NOTE = 'Bảng tóm tắt dưới đây là cái nhìn chung của thư viện; nội dung từng sách nằm trong ba loạt bài đọc trực tiếp từ bản scan (Asafyev bản 1971, Sposobin bản 1984, Mazel bản 1979).'

const WIKI_ASAFYEV: [string, string] = ['Википедия — Асафьев, Борис Владимирович', 'https://ru.wikipedia.org/wiki/Асафьев,_Борис_Владимирович']
const WIKI_SPOSOBIN: [string, string] = ['Википедия — Способин, Игорь Владимирович', 'https://ru.wikipedia.org/wiki/Способин,_Игорь_Владимирович']
const WIKI_MAZEL: [string, string] = ['Википедия — Мазель, Лев Абрамович', 'https://ru.wikipedia.org/wiki/Мазель,_Лев_Абрамович']

export const formRussian: Article[] = [
  {
    slug: 'hinh-thuc-va-phan-tich-truong-phai-nga',
    title: 'Hình thức và phân tích tác phẩm theo trường phái Nga – Xô viết',
    category: 'form',
    aliases: ['phân tích tác phẩm trường phái Nga', 'hình thức âm nhạc Nga', 'анализ музыкальных произведений', 'музыкальная форма', 'Asafyev Sposobin Mazel'],
    summary: 'Tổng quan ba cuốn sách nền của môn Hình thức và Phân tích tác phẩm ở các nhạc viện Nga – Xô viết (và Việt Nam): Asafyev, Hình thức âm nhạc như một quá trình (1930); Sposobin, Hình thức âm nhạc (1947); Mazel, Cấu trúc tác phẩm âm nhạc (1960). Ba góc nhìn: triết lý – giáo khoa – phân tích tổng thể.',
    refs: [WIKI_ASAFYEV, WIKI_SPOSOBIN, WIKI_MAZEL],
    body: `
Môn **Hình thức âm nhạc** và **Phân tích tác phẩm** ở các nhạc viện Nga – Xô viết, rồi ở Việt Nam, dựa trên ba cuốn sách bổ sung cho nhau:

| Sách | Tác giả | Năm | Vai trò |
|---|---|---|---|
| *Музыкальная форма как процесс* — Hình thức âm nhạc như một quá trình | **Boris Asafyev** (1884 – 1949; bút danh Igor Glebov) | Quyển một 1930; quyển hai *Ngữ điệu* 1947; in chung 1963, 1971 | Nền triết lý: hình thức là **quá trình** sống, gắn với **ngữ điệu** |
| *Музыкальная форма* — Hình thức âm nhạc | **Igor Sposobin** (1900 – 1954) | 1947; nhiều lần tái bản (1958 … 1984, 2012) | **Sách giáo khoa** hệ thống: từ motif đến sonata và chu kỳ |
| *Строение музыкальных произведений* — Cấu trúc tác phẩm âm nhạc | **Lev Mazel** (1907 – 2000) | 1960; bản 2 bổ sung 1979 | Nối cấu trúc với **ý nghĩa biểu hiện**; nền của "phân tích tổng thể" |

${NOTE}

## Đọc theo thứ tự nào
1. **Sposobin** trước — nắm từ vựng và các hình thức chuẩn: [[sposobin-hinh-thuc-am-nhac]] (loạt 9 bài đọc từ bản 1984, theo từng chương).
2. **Mazel** — học cách hỏi "vì sao cấu trúc này tạo ra hiệu quả này": [[mazel-cau-truc-tac-pham-am-nhac]] (loạt 8 bài đọc từ bản 1979, theo từng chương).
3. **Asafyev** — đọc sau cùng, khi đã quen hình thức, để thấy hình thức như một dòng chảy ý nghĩa: [[asafyev-hinh-thuc-nhu-qua-trinh]] (loạt 5 bài đọc từ bản 1971).

## Điểm chung của trường phái
- Hình thức có **hai mặt**: sơ đồ các phần (cái thấy được trên giấy) và **quá trình** diễn ra trong thời gian nghe.
- Mỗi phần có **chức năng** (trình bày, phát triển, tái hiện, kết…) — gần với khái niệm *formal function* của Caplin ở phương Tây: [[chuc-nang-hinh-thuc]].
- Phân tích không dừng ở việc gọi tên hình thức, mà phải giải thích **nội dung, tính chất** của tác phẩm qua các phương tiện âm nhạc.

## Tương ứng trong thư viện
| Khái niệm | Bài |
|---|---|
| Motif, câu, đoạn nhạc | [[motif]], [[cau-nhac]], [[mo-rong-cau-nhac]] |
| Hình thức hai đoạn, ba đoạn | [[hinh-thuc-hai-doan]], [[hinh-thuc-ba-doan]] |
| Biến tấu, rondo, sonata | [[bien-tau]], [[rondo]], [[hinh-thuc-sonata]] |
| Phương pháp phân tích chung | [[phuong-phap-phan-tich-tac-pham]] |

Lộ trình hình thức của thư viện: [[lo-trinh-hinh-thuc]].
`,
  },
]
