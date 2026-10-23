import type { Article } from '../wiki'

const NOTE = 'Bài tóm theo các trình bày phổ biến về sách trong giáo trình phân tích Nga – Xô viết; năm xuất bản và tiểu sử đối chiếu Wikipedia tiếng Nga. Thư viện **chưa đối chiếu nguyên văn** từng trang sách, nên các thuật ngữ tiếng Nga ghi kèm để người đọc tra lại.'

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
| *Музыкальная форма как процесс* — Hình thức âm nhạc như một quá trình | **Boris Asafyev** (1884 – 1949; bút danh Igor Glebov) | 1930; tái bản 1947, 1963, 1971 | Nền triết lý: hình thức là **quá trình** sống, gắn với **ngữ điệu** |
| *Музыкальная форма* — Hình thức âm nhạc | **Igor Sposobin** (1900 – 1954) | 1947; nhiều lần tái bản (1958 … 1984, 2012) | **Sách giáo khoa** hệ thống: từ motif đến sonata và chu kỳ |
| *Строение музыкальных произведений* — Cấu trúc tác phẩm âm nhạc | **Lev Mazel** (1907 – 2000) | 1960; bản 2 bổ sung 1979 | Nối cấu trúc với **ý nghĩa biểu hiện**; nền của "phân tích tổng thể" |

${NOTE}

## Đọc theo thứ tự nào
1. **Sposobin** trước — nắm từ vựng và các hình thức chuẩn: [[sposobin-hinh-thuc-am-nhac]] (loạt 9 bài đọc từ bản 1984, theo từng chương).
2. **Mazel** — học cách hỏi "vì sao cấu trúc này tạo ra hiệu quả này": [[mazel-cau-truc-tac-pham-am-nhac]] (loạt 8 bài đọc từ bản 1979, theo từng chương).
3. **Asafyev** — đọc sau cùng, khi đã quen hình thức, để thấy hình thức như một dòng chảy ý nghĩa: [[asafyev-hinh-thuc-nhu-qua-trinh]].

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
  {
    slug: 'asafyev-hinh-thuc-nhu-qua-trinh',
    title: 'Asafyev: hình thức âm nhạc như một quá trình',
    category: 'form',
    aliases: ['Asafyev', 'Asafiev', 'Асафьев', 'Igor Glebov', 'Музыкальная форма как процесс', 'thuyết ngữ điệu', 'интонация', 'initium motus terminus', 'i:m:t'],
    summary: 'Boris Asafyev (1884 – 1949), Hình thức âm nhạc như một quá trình (1930): âm nhạc là nghệ thuật của ngữ điệu (интонация); hình thức vừa là quá trình vừa là kết quả kết tinh; bộ ba khởi đầu – chuyển động – kết thúc (i:m:t); hai nguyên tắc đồng nhất và tương phản.',
    refs: [WIKI_ASAFYEV],
    body: `
**Boris Vladimirovich Asafyev** (1884 – 1949), nhà âm nhạc học và nhà soạn nhạc Nga, nhiều bài ký bút danh **Igor Glebov**. Cuốn *Музыкальная форма как процесс* in lần đầu ở Moskva năm **1930**, tái bản 1947, 1963, 1971.

${NOTE}

## Ý tưởng trung tâm
| Khái niệm | Tiếng Nga | Nội dung |
|---|---|---|
| **Hình thức là quá trình** | форма как процесс | Hình thức không chỉ là sơ đồ A – B – A trên giấy; nó **diễn ra** trong thời gian, được người nghe cảm nhận dần |
| **Hình thức kết tinh** | форма как кристаллизация | Mặt còn lại: sau nhiều lần sử dụng, các quá trình quen thuộc **đông lại** thành khuôn (sonata, rondo…) |
| **Ngữ điệu** | интонация | Đơn vị mang nghĩa của âm nhạc — một quãng, một nét giai điệu được "nói" ra với sắc thái biểu cảm. Asafyev coi âm nhạc là nghệ thuật của ngữ điệu |
| **Khởi đầu – chuyển động – kết thúc** | initium – motus – terminus (**i:m:t**) | Bộ ba chức năng có mặt ở mọi cấp: một motif, một câu, cả tác phẩm đều có phần mở, phần đi, phần khép |
| **Đồng nhất và tương phản** | тождество и контраст | Hai lực tạo hình thức: lặp lại (giống, biến thể) giữ sự thống nhất; tương phản tạo phát triển |

## i:m:t trên một ví dụ quen
Lấy hình thức sonata ([[hinh-thuc-sonata]]):
| Chức năng | Ở cấp tác phẩm | Ở cấp một câu nhạc |
|---|---|---|
| **i** — khởi đầu | Trình bày chủ đề chính | Motif mở |
| **m** — chuyển động | Phát triển, chuyển giọng | Nhắc, chia nhỏ motif |
| **t** — kết thúc | Tái hiện, coda | [[cau-ket|Kết]] |
(Bảng minh hoạ của thư viện; cách áp dụng cụ thể có thể khác trình bày trong sách.)

## Ý nghĩa cho người học và người chơi
- Nghe hình thức như **một câu chuyện có hướng**, không như một danh sách các phần.
- Khi tập đàn: biết đoạn nào đang "mở", đoạn nào "đi", đoạn nào "khép" để chọn sắc thái và [[nhip-do|tiến độ]] cho đúng.
- Lý thuyết ngữ điệu là nền của nhiều công trình âm nhạc học Xô viết về sau (nhận định chung, chưa dẫn nguồn cụ thể).

Tổng quan: [[hinh-thuc-va-phan-tich-truong-phai-nga]].
`,
  },
]
