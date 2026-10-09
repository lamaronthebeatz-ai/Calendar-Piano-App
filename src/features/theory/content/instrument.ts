import type { Article } from '../wiki'

/** Cây đàn piano: lịch sử, cấu tạo, bộ máy, các loại đàn, bảo dưỡng. Nguồn ghi trong `refs`. */
export const instrument: Article[] = [
  {
    slug: 'dan-piano',
    title: 'Đàn piano: hệ thống và lộ trình',
    category: 'instrument',
    aliases: ['đàn piano', 'nhạc cụ piano', 'về đàn piano', 'lộ trình nhạc cụ', 'the piano'],
    summary: 'Bài tổng quan của mục: đàn piano là nhạc cụ dây gõ bằng búa qua bàn phím. Bài nêu các mảng kiến thức về nhạc cụ — lịch sử, cấu tạo, bộ máy, các loại đàn, bảo dưỡng — và vì sao người chơi nên biết chúng.',
    wiki: 'Piano',
    refs: [
      ['Wikipedia — Piano', 'https://en.wikipedia.org/wiki/Piano'],
      ['The Met — The Piano: The Pianofortes of Bartolomeo Cristofori (1655–1731)', 'https://www.metmuseum.org/essays/the-piano-the-pianofortes-of-bartolomeo-cristofori-1655-1731'],
    ],
    body: `
Đàn piano là nhạc cụ có **dây** được **búa gõ** khi nhấn phím. Tên gọi đầy đủ *pianoforte* ("nhỏ – to") nói lên điểm mới của nó so với harpsichord: độ to **thay đổi theo lực nhấn**. Nhạc cụ đầu tiên thuộc loại này do Bartolomeo **Cristofori** chế tạo ở Florence vào khoảng năm 1700 (xem [[lich-su-piano]]).

## Vì sao người chơi cần hiểu nhạc cụ?
- **Âm thanh**: biết búa, dây, bảng cộng hưởng hoạt động thế nào giúp hiểu vì sao "[[ky-thuat-cham-phim|chạm phím]]" tạo khác biệt và vì sao âm piano **tắt dần** (xem [[cau-tao-piano]], [[am-sac]]).
- **Kỹ thuật**: bộ máy quyết định nốt lặp nhanh, cách giữ phím nửa chừng, cách bàn đạp làm việc (xem [[bo-may-piano]], [[not-lap-lai]], [[ban-dap]]).
- **Phong cách**: nhạc [[johann-sebastian-bach|Bach]], [[wolfgang-amadeus-mozart|Mozart]], [[ludwig-van-beethoven|Beethoven]] được viết cho những nhạc cụ khác đàn hiện đại (xem [[dan-phim-co]], [[phong-cach-dien-tau]], [[tinh-xac-thuc-bieu-dien]]).
- **Thực tế**: chọn đàn, đặt đàn, giữ đàn đúng [[cao-do|cao độ]] (xem [[cac-loai-dan-piano]], [[bao-duong-piano]], [[am-hoc-phong]]).

## Lộ trình học
1. **Lịch sử**: [[dan-phim-co]] → [[lich-su-piano]].
2. **Bên trong cây đàn**: [[cau-tao-piano]] → [[bo-may-piano]] → [[ban-dap]].
3. **Bàn phím và âm vực**: [[ban-phim]].
4. **Chọn và giữ đàn**: [[cac-loai-dan-piano]] → [[bao-duong-piano]].
5. **Âm học liên quan**: [[am-hoc-co-ban]], [[chuoi-boi-am]] (vì sao dây đàn được lên hơi lệch), [[luat-binh-quan]].
`,
  },
  {
    slug: 'lich-su-piano',
    title: 'Lịch sử đàn piano',
    category: 'instrument',
    aliases: ['Cristofori', 'Bartolomeo Cristofori', 'fortepiano', 'pianoforte', 'gravicembalo col piano e forte', 'ai phát minh ra piano'],
    summary: 'Bartolomeo Cristofori chế tạo cây piano đầu tiên ở Florence khoảng năm 1700; đàn liên tục phát triển cho tới cây grand hiện đại cuối thế kỷ 19.',
    wiki: 'Piano',
    refs: [
      ['Britannica — Bartolomeo Cristofori', 'https://www.britannica.com/print/article/143328'],
      ['Wikipedia — Fortepiano', 'https://en.wikipedia.org/wiki/Fortepiano'],
      ['Metropolitan Museum of Art — Cristofori piano (1720)', 'https://www.metmuseum.org/art/collection/search/503271'],
    ],
    body: `
## Người phát minh
**Bartolomeo Cristofori** (sinh ở Padua) là thợ làm đàn harpsichord. Khoảng năm 1690 ông chuyển đến Florence theo lời mời của hoàng tử **Ferdinando de' Medici** để chăm sóc bộ sưu tập nhạc cụ.

## Mốc thời gian
| Năm | Sự kiện |
|---|---|
| 1700 | Bản kiểm kê nhạc cụ của Ferdinando ghi một "arpicembalo… phát minh mới, chơi được nhỏ và to" — tài liệu sớm nhất về piano |
| 1711 | Nhà thơ Scipione Maffei mô tả đàn với tên **"gravicembalo col piano e forte"** (harpsichord chơi được nhỏ và to) |
| 1720 | Cây piano Cristofori cổ nhất còn tồn tại (nay ở Bảo tàng Metropolitan, New York) |
| ~1726 | Cristofori đã có đủ những yếu tố cốt lõi của bộ máy piano hiện đại |

Các nguồn cho năm phát minh khác nhau (1698, 1700, khoảng 1709), vì vậy thường nói "khoảng năm 1700".

## Điểm mới của Cristofori
Thay cơ chế **gảy dây** của [[dan-phim-co|harpsichord]] bằng **búa gõ** dây với lực mạnh nhẹ tuỳ ngón tay → chơi được cả nhỏ lẫn to, đúng như tên gọi **piano – forte** (xem [[cuong-do]]). Bộ phận quan trọng nhất là cơ cấu thoát búa (xem [[bo-may-piano]]).

## Từ fortepiano tới piano hiện đại
- Khung đàn của Cristofori bằng gỗ, chưa chịu nổi lực căng dây lớn.
- Tên gọi rút dần: pianoforte / fortepiano → **piano**. "Fortepiano" thường chỉ các cây đàn từ thời Cristofori đến đầu thế kỷ 19 — loại đàn [[wolfgang-amadeus-mozart|Mozart]] và [[ludwig-van-beethoven|Beethoven]] thời trẻ sử dụng.
- Từ thời Beethoven, đàn phát triển liên tục và đạt tới cây **grand hiện đại** vào cuối thế kỷ 19, với khung gang (xem [[cau-tao-piano]]).

Âm nhạc viết cho từng giai đoạn đàn khác nhau — xem [[cac-thoi-ky]].
`,
  },
  {
    slug: 'dan-phim-co',
    title: 'Harpsichord và clavichord',
    category: 'instrument',
    aliases: ['harpsichord', 'clavecin', 'cembalo', 'clavichord', 'đàn phím cổ', 'bebung', 'virginal', 'spinet'],
    summary: 'Hai tổ tiên của piano: harpsichord gảy dây nên khó thay đổi to nhỏ; clavichord gõ dây bằng thanh kim loại nhỏ, tiếng rất nhỏ nhưng biểu cảm.',
    wiki: 'Harpsichord',
    refs: [
      ['Baltimore Recorder Society — About the clavichord', 'https://baltimorerecorders.org/html/instruments/clavichords.html'],
      ['Metropolitan Museum of Art — Cristofori piano', 'https://www.metmuseum.org/art/collection/search/503271'],
    ],
    body: `
| Đàn | Cách tạo tiếng | Điều khiển [[cuong-do|to nhỏ]] |
|---|---|---|
| **Harpsichord** | **Gảy** dây bằng miếng gảy (plectrum) | Gần như không thay đổi được |
| **Clavichord** | Thanh kim loại nhỏ (**tangent**) gõ và **giữ nguyên** trên dây khi còn nhấn phím | Có, nhưng tiếng rất nhỏ |
| **Piano** | **Búa** gõ dây rồi bật ra ngay | Rộng, từ rất nhỏ đến rất to |

## Harpsichord
Vì là cơ chế gảy, harpsichord không thể chơi to nhỏ theo lực ngón; người chơi tạo sắc thái bằng [[cach-dien-tau|cách ngắt tiếng]], [[ky-hieu-hoa-my|hoa mỹ]] và chuyển bàn phím/đổi bộ dây. Đây là nhạc cụ chủ lực của [[thoi-ky-baroque|thời Baroque]] — [[johann-sebastian-bach|Bach]], [[Couperin]], [[domenico-scarlatti|Domenico Scarlatti]] viết cho nó. Virginal và spinet là những dạng harpsichord nhỏ.

## Clavichord
Phím hoạt động như đòn bẩy: nhấn phím, đầu kia nâng lên và **tangent** đập vào dây. Tangent ở lại trên dây khi còn giữ phím, đồng thời quyết định chiều dài dây rung — vì vậy tiếng rất nhỏ. Bù lại, người chơi điều khiển được to nhỏ và tạo được **rung tiếng (bebung)** bằng cách thay đổi lực ấn.

## Piano kế thừa gì?
Cristofori là thợ harpsichord; ông giữ phần lớn kết cấu đàn harpsichord nhưng thay cơ chế gảy bằng búa có cơ cấu thoát — có được sắc thái của clavichord với âm lượng lớn hơn nhiều. Xem [[lich-su-piano]], [[bo-may-piano]].

Khi chơi nhạc Baroque trên piano, hiểu cách tạo tiếng của harpsichord giúp chọn cách ngắt tiếng và dùng [[ban-dap|pedal]] hợp phong cách.
`,
  },
  {
    slug: 'cau-tao-piano',
    title: 'Cấu tạo đàn piano',
    category: 'instrument',
    aliases: ['bộ phận piano', 'bảng cộng hưởng', 'soundboard', 'khung gang', 'cast iron plate', 'dây đàn', 'lực căng dây', 'cầu ngựa'],
    summary: 'Dây thép căng trên khung gang, rung nhờ búa gõ và được bảng cộng hưởng khuếch đại; nốt cao dùng 3 dây, nốt trầm 2 hoặc 1 dây.',
    wiki: 'Piano',
    refs: [
      ['KTH (Conklin) — The cast iron plate', 'https://www.speech.kth.se/music/5_lectures/conklin/thecastiron.html'],
      ['McGill — Piano acoustics', 'https://caml.music.mcgill.ca/~gary/618/week7/node2.html'],
      ['Frederick Historic Piano Collection — How pianos work', 'https://www.frederickcollection.org/works.html'],
    ],
    body: `
## Các bộ phận chính
| Bộ phận | Chức năng |
|---|---|
| **Dây đàn** | Dây thép; dây trầm được quấn thêm lớp kim loại để nặng hơn |
| **Khung gang** | Neo dây dưới lực căng rất lớn |
| **Bảng cộng hưởng** (soundboard) | Tấm gỗ có gân gia cố, khuếch đại rung động của dây |
| **Cầu ngựa** | Truyền rung động từ dây xuống bảng cộng hưởng |
| **Chốt chỉnh dây** | Xoay để lên dây (xem [[bao-duong-piano]]) |
| **Bộ máy** | Phím, búa, bộ giảm âm (xem [[bo-may-piano]]) |
| **Pedal** | Xem [[ban-dap]] |

## Lực căng và khung gang
Để tiếng to hơn, dây được căng ở lực rất cao. Tổng lực căng dây của một cây **grand biểu diễn lớn** vào khoảng **30 tấn** (phần lớn đàn có ít hơn). Khung gang chịu lực này; đến cuối thế kỷ 19, gần như mọi cây piano đều dùng khung gang. Khung grand biểu diễn nặng khoảng 160–180 kg, và chính sự cộng hưởng của khung cũng góp phần vào [[am-sac|âm sắc]].

## Số dây cho mỗi nốt
- Vùng **cao và giữa**: mỗi nốt **3 dây** cùng [[cao-do|cao độ]].
- Vùng **trầm**: **2 dây**, rồi **1 dây** ở những nốt thấp nhất (dây quấn).
- Tổng cộng một cây piano thường có khoảng **220–240 dây** cho 88 phím (xem [[ban-phim]]).

Pedal una corda trên đàn grand dịch búa để gõ ít dây hơn — vì vậy tiếng nhỏ và mềm hơn.

## Âm học
Âm sắc phụ thuộc vào lực căng, chiều dài dây và số dây mỗi nốt ở từng vùng. Mỗi dây rung tạo ra [[chuoi-boi-am]] — lý do piano có âm sắc riêng.
`,
  },
  {
    slug: 'bo-may-piano',
    title: 'Bộ máy đàn piano',
    category: 'instrument',
    aliases: ['action', 'piano action', 'cơ cấu thoát búa', 'escapement', 'double escapement', 'thoát kép', 'Érard', 'búa đàn', 'bộ giảm âm', 'damper'],
    summary: 'Bộ máy biến lực ngón tay thành cú gõ búa; cơ cấu thoát cho búa bật khỏi dây ngay sau khi gõ, còn thoát kép (Érard, 1821) giúp đánh lặp nốt nhanh.',
    wiki: 'Action_(piano)',
    refs: [
      ['M. Steinert & Sons — Grand vs. upright piano action', 'https://msteinert.com/blog/grand-vs-upright-piano-actions'],
      ['M. Steinert & Sons — What is piano action?', 'https://msteinert.com/blog/what-is-piano-action-a-beginners-guide-to-piano-mechanics'],
      ['US Patent 4854211 — Action mechanism of an upright piano', 'https://patents.google.com/patent/US4854211'],
    ],
    body: `
## Cơ cấu thoát búa
Khi nhấn phím, búa được đẩy lên gõ vào dây rồi **rơi ra ngay** — kể cả khi ngón tay vẫn giữ phím — để không chặn tiếng dây. Đây là phát minh cốt lõi của [[lich-su-piano|Cristofori]]. Khi nhả phím, **bộ giảm âm** (damper) hạ xuống chặn dây; [[ban-dap|pedal vang]] nâng toàn bộ bộ giảm âm lên.

## Thoát kép (double escapement)
**Sébastien Érard** được cấp bằng sáng chế bộ máy thoát kép năm **1821** — nền tảng của bộ máy grand hiện đại. Nhờ một cần lặp và lò xo riêng, búa có thể **gõ lại** khi phím mới nhả lên khoảng một nửa, không cần trở về hết vị trí nghỉ → đánh [[not-lap-lai|nốt lặp]] và [[ky-thuat-lay-ren|láy rền]] nhanh.

## Grand và upright khác nhau thế nào?
| | Grand | Upright |
|---|---|---|
| Dây | Nằm ngang | Dựng đứng |
| Búa trở về nhờ | Chủ yếu **trọng lực** | **Lò xo** |
| Bộ máy | Thoát kép | Thoát đơn (thiết kế bắt nguồn từ Robert Wornum, những năm 1810) |
| Tốc độ lặp nốt | Nhanh hơn | Chậm hơn |

Các con số lặp nốt mỗi giây được nhiều trang nêu (khoảng 15 lần/giây với grand so với 7–10 lần với upright) chỉ mang tính ước lượng.

Xem thêm: [[cac-loai-dan-piano]], [[cau-tao-piano]].
`,
  },
  {
    slug: 'cac-loai-dan-piano',
    title: 'Các loại đàn piano',
    category: 'instrument',
    aliases: ['grand piano', 'upright piano', 'piano đứng', 'piano cơ', 'piano điện', 'digital piano', 'phím nặng', 'weighted keys', 'graded hammer action', 'chọn đàn'],
    summary: 'Piano cơ (grand, upright) tạo tiếng bằng búa gõ dây; piano điện mô phỏng cảm giác phím và tiếng đàn. Để học kỹ thuật, nên dùng phím nặng 88 phím.',
    wiki: 'Digital_piano',
    refs: [
      ['Wikipedia — Digital piano', 'https://en.wikipedia.org/wiki/Digital_piano'],
      ['Pianu — Do I need weighted keys to learn piano?', 'https://pianu.com/blog/do-i-need-weighted-keys-to-learn-piano'],
      ['Adorama — Acoustic vs digital pianos', 'https://www.adorama.com/alc/acoustic-vs-digital-pianos/'],
    ],
    body: `
## Piano cơ
- **Grand**: dây nằm ngang, bộ máy thoát kép, phản hồi nhanh — chuẩn cho biểu diễn (xem [[bo-may-piano]]).
- **Upright** (piano đứng): dây dựng đứng, gọn hơn, phổ biến trong gia đình.

## Piano điện
Không có búa gõ dây: đàn đo **tốc độ nhấn phím** rồi phát âm thanh to nhỏ tương ứng.
| Kiểu phím | Đặc điểm |
|---|---|
| **Graded hammer** | Phím trầm nặng hơn phím cao — gần với grand nhất |
| **Fully weighted** | Nặng đều trên toàn [[ban-phim|bàn phím]] |
| **Semi-weighted** | Nhẹ hơn, trung gian |
| **Không trọng lượng** (synth) | Nhẹ, rẻ, hợp chơi giải trí hơn học kỹ thuật cổ điển |

## Học trên đàn nào?
- Phím có trọng lượng và cảm ứng lực giúp phát triển **lực và kiểm soát ngón** cùng [[cuong-do|sắc thái to nhỏ]]; phím không cảm ứng lực luôn phát cùng một âm lượng.
- Để học hình [[hop-am-ba|hợp âm]] hay [[giai-dieu|giai điệu]] ban đầu, phím nặng chưa thật sự bắt buộc.
- Tập trên piano điện phím nặng giúp chuyển sang piano cơ dễ hơn.
- Lựa chọn thực tế cho người mới học tại nhà thường là **piano điện 88 phím, phím nặng** (graded hoặc fully weighted); piano cơ đáng đầu tư nếu có chỗ, ngân sách và điều kiện bảo dưỡng (xem [[bao-duong-piano]]).

Lưu ý: nhiều nguồn về chủ đề này là trang của cửa hàng nhạc cụ.
`,
  },
  {
    slug: 'bao-duong-piano',
    title: 'Bảo dưỡng và lên dây đàn',
    category: 'instrument',
    aliases: ['lên dây đàn', 'chỉnh dây', 'tuning', 'độ ẩm', 'bảo quản đàn', 'thợ chỉnh đàn', 'piano technician'],
    summary: 'Giữ đàn ở nhiệt độ và độ ẩm ổn định (Hội Kỹ thuật viên Piano Mỹ khuyên khoảng 20 °C, độ ẩm 42%); đàn dùng ở nhà thường lên dây 1–2 lần mỗi năm.',
    refs: [
      ['Piano Technicians Guild — Piano care', 'https://www.ptg.org/servicing'],
      ['Piano Buyer — Caring for your piano', 'https://www.pianobuyer.com/post/caring-for-your-piano'],
      ['Sweeney Piano — Piano tuning fact sheet', 'https://www.sweeneypiano.com/knowledge/piano_tuning_factsheet.cfm'],
    ],
    body: `
## Nhiệt độ và độ ẩm
Hội Kỹ thuật viên Piano Mỹ (Piano Technicians Guild — PTG) nêu điều kiện lý tưởng khoảng **68 °F (≈ 20 °C)** và **độ ẩm tương đối 42%**.
- Quá ẩm → [[cao-do|cao độ]] bị **cao lên**.
- Quá khô → cao độ bị **thấp xuống**, và có thể làm yếu các mối keo của [[cau-tao-piano|bảng cộng hưởng]].
- Đặt đàn **tránh xa** cửa ra vào, cửa sổ hay mở, và **cửa gió** điều hoà, máy sưởi.

Các nguồn đều nhấn mạnh **độ ẩm thay đổi theo mùa** là nguyên nhân chính khiến đàn lệch dây — với khí hậu nóng ẩm, có mùa nồm, càng cần giữ phòng đàn ổn định.

## Bao lâu lên dây một lần?
PTG **không đưa con số cố định** mà khuyên hỏi thợ có chuyên môn, tuỳ mức sử dụng và môi trường. Các khuyến nghị thường gặp:
| Trường hợp | Tần suất |
|---|---|
| Đàn mới | Ít nhất **4 lần trong năm đầu** (dây còn giãn, ổn định dần) — theo khuyến nghị của Kawai và Hiệp hội các nhà sản xuất piano quốc gia Mỹ |
| Đàn gia đình đã ổn định | **1–2 lần/năm** (Kawai: tối thiểu 2 lần) |
| Đàn sân khấu, biểu diễn | Trước buổi tập và trước mỗi buổi diễn |

Vì độ ẩm thay đổi gần như liên tục, không thể giữ đàn "đúng dây" tuyệt đối mọi lúc. Đàn được lên theo cao độ chuẩn A4 = 440 Hz và [[luat-binh-quan]].

Piano điện không cần lên dây (xem [[cac-loai-dan-piano]]).
`,
  },
]
