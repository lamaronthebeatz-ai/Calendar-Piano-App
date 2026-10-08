import type { Article } from '../wiki'

/**
 * Kỹ thuật và luyện tập piano. Nội dung tổng hợp từ các nguồn ghi trong `refs` của từng bài
 * (nghiên cứu khoa học khi có, còn lại là hướng dẫn của giáo viên piano); không đưa vào số liệu
 * hay khẳng định không có nguồn.
 */
export const technique: Article[] = [
  {
    slug: 'tu-the',
    title: 'Tư thế ngồi đàn',
    category: 'technique',
    aliases: ['tư thế', 'cách ngồi', 'posture', 'chiều cao ghế', 'vị trí cổ tay', 'thế tay'],
    summary: 'Chiều cao ghế quyết định góc cẳng tay; cổ tay giữ trung tính, vai thả lỏng, hai chân có điểm tựa.',
    refs: [
      ['Hoffman Academy — Piano posture checklist', 'https://app.hoffmanacademy.com/blog/piano-posture-checklist-sign'],
      ['Yousician — Correct posture when playing your piano', 'https://support.yousician.com/hc/en-us/articles/204401971-Correct-posture-when-playing-your-piano'],
    ],
    body: `
Các nguồn hướng dẫn đều thống nhất ở phần cốt lõi; chỉ khác nhau ở con số cụ thể — nên coi số liệu là điểm xuất phát rồi tinh chỉnh theo cảm giác.

## Chiều cao ghế
- Đặt tay lên phím: **cẳng tay gần như nằm ngang**, có thể hơi dốc xuống phía phím.
- Cách kiểm tra khác: khuỷu tay **ngang tầm phím trắng**. Khuỷu cao hơn phím → ghế quá cao; thấp hơn → ghế quá thấp.
- Ghế **quá thấp** làm cổ tay võng xuống, ngón tay bẹt trên phím; **quá cao** làm cổ tay gồ lên, ngón quắp lại.

## Khoảng cách tới đàn
Khuỷu tay nằm **hơi phía trước thân người**. Nếu phải vươn tay hoặc rướn cổ → ngồi gần hơn; nếu cổ tay gập và khuỷu bị kẹp ra sau → lùi ra. Dùng phần thân để xoay và vươn tới hai đầu [[ban-phim]], thay vì chỉ duỗi tay.

## Cổ tay, vai, lưng
- Cổ tay **thẳng hàng** với cẳng tay và khớp ngón, không võng, không gồ — nhưng vẫn **mềm**, di chuyển lên xuống theo cánh tay.
- Lưng thẳng nhưng không cứng; vai thả lỏng.

## Chân
Hai bàn chân đặt chắc trên sàn. Trẻ em chưa chạm sàn nên dùng **bục kê chân**. Chân phải cần với tới [[ban-dap|pedal]] mà không phải trượt người.

## Bảng kiểm tra nhanh
1. Cẳng tay gần ngang, khuỷu gần tầm phím.
2. Cổ tay trung tính.
3. Khuỷu hơi phía trước thân người.
4. Hai chân có điểm tựa.
5. Vai thả lỏng.

Nếu thấy **đau, tê hoặc nóng rát**, hãy dừng lại — xem [[suc-khoe-nguoi-choi-dan]].
`,
  },
  {
    slug: 'luyen-am-giai',
    title: 'Kỹ thuật chạy âm giai',
    category: 'technique',
    aliases: ['chạy scale', 'luyện scale', 'luyện âm giai', 'scale technique', 'luồn ngón cái', 'thumb under', 'ngón bấm âm giai'],
    summary: 'Âm giai được chia thành nhóm ngón ngắn (1-2-3) và dài (1-2-3-4) nối với nhau bằng động tác luồn ngón cái.',
    wiki: 'Scale_(music)',
    refs: [
      ['Practising the Piano — Principles of scale fingerings', 'https://practisingthepiano.com/principles-scale-fingerings/'],
      ['pianoscales.org — Scale fingerings', 'https://www.pianoscales.org/fingerings.html'],
    ],
    body: `
## Nhóm ngón
Ngón bấm âm giai được xây từ hai nhóm luân phiên: **nhóm ngắn (1-2-3)** và **nhóm dài (1-2-3-4)**. Ví dụ [[am-giai-truong|Đô trưởng]] hai quãng 8, tay phải đi lên:
**1 2 3 · 1 2 3 4 · 1 2 3 · 1 2 3 4 5**

Tay trái là hình ảnh đối xứng: đi xuống dùng 5-4-3-2-1 · 3-2-1 (xem bảng ngón trong [[ngon-bam]]).

## Luồn ngón cái (đi lên) và vắt ngón (đi xuống)
- **Đi lên**: ngay khi ngón cái vừa đánh C, nó bắt đầu **di chuyển dần** vào dưới lòng bàn tay để sẵn sàng cho F sau E — không đợi đến phút chót.
- **Đi xuống**: khi ngón cái đánh F, ngón 3 **vắt qua** để đánh E.

## Mẹo nhớ: ngón 4 làm mốc
Mỗi quãng 8 ngón 4 chỉ xuất hiện **một lần** cho mỗi tay. Nhớ ngón 4 rơi vào nốt nào là nhớ được cả ngón bấm của âm giai đó.

## Âm giai có phím đen
- Ngón bấm của Đô trưởng dùng chung cho **C, G, D, A, E trưởng** và các giọng [[giong-song-song|thứ song song]] của chúng.
- Các âm giai khác cần điều chỉnh, ví dụ **F trưởng** tay phải: 1 2 3 4 · 1 2 3 · 1 2 3 4 · 1 2 3 4 (ngón 4 rơi vào B♭).
- Luồn ngón cái **sau một phím đen** dễ hơn sau phím trắng — vì vậy một số giáo viên cho tay phải tập **Si trưởng** trước Đô trưởng.

## Lộ trình luyện
Đi lần lượt qua các giọng theo [[vong-quang-nam]]; tập từng tay rồi hai tay; tăng tốc từ từ bằng máy đếm nhịp (xem [[kiem-soat-toc-do]]). Âm giai [[am-giai-cromatic|cromatic]] có quy tắc ngón riêng (ngón 3 trên phím đen). Bước tiếp theo: [[luyen-hop-am-rai]] và [[ky-thuat-quang-tam]].
`,
  },
  {
    slug: 'luyen-hop-am-rai',
    title: 'Kỹ thuật hợp âm rải',
    category: 'technique',
    aliases: ['arpeggio', 'hợp âm rải', 'chạy arpeggio', 'xoay cổ tay', 'rotation'],
    summary: 'Hợp âm rải khó hơn âm giai vì khoảng cách xa; bí quyết là chuẩn bị ngón cái sớm và xoay nhẹ bàn tay.',
    wiki: 'Arpeggio',
    refs: [
      ['Melanie Spanswick — The beauty of the rotation technique (Rami Bar-Niv)', 'https://melaniespanswick.com/2023/10/15/the-beauty-of-the-rotation-technique-rami-bar-niv/'],
      ['Melanie Spanswick — Twiddling your thumbs', 'https://melaniespanswick.com/2019/03/01/twiddling-your-thumbs/'],
    ],
    body: `
Hợp âm rải là các nốt của [[hop-am-ba|hợp âm]] chơi lần lượt, trải qua nhiều quãng 8. Khác [[luyen-am-giai|âm giai]], các nốt cách nhau [[quang|quãng 3]] và quãng 4 nên ngón cái và ngón 3 phải với rất xa.

## Ngón bấm phổ biến (C trưởng, đi lên)
Tay phải **1 2 3 · 1 2 3 · 1 2 3 5** — ngón cái luồn dưới sau ngón 3. Tay trái **5 4 2 1 · 4 2 1 …** — ngón 4 vắt qua ngón cái.

## Chuẩn bị ngón cái sớm
Các giáo viên khuyên đưa ngón cái vào dưới tay **ngay khi ngón 2 vừa đánh**, thay vì đợi đến lúc ngón cái cần chơi.

## Xoay bàn tay
Chỉ luồn ngón cái thôi chưa đủ để với tới phím kế tiếp. Hãy **xoay nhẹ bàn tay** về phía ngón cái để đưa nó vào vị trí — chuyển động phải **liền mạch**, không giật. Kỹ thuật xoay đặc biệt hữu ích khi các nốt đổi hướng liên tục như trong hợp âm rải.

## Cổ tay và cánh tay
- Cổ tay mềm, linh hoạt; để trọng lượng cánh tay tạo tiếng thay vì chỉ dùng sức ngón.
- Khi luyện động tác luồn ngón cái, thả lỏng bàn tay và cổ tay dễ hơn giữ chúng cứng.

## Lộ trình luyện
Bắt đầu chậm với máy đếm nhịp (mỗi phách một nốt), rồi hai, rồi bốn nốt mỗi phách; luyện qua cả 12 giọng theo [[vong-quang-nam]]. Xem thêm [[kiem-soat-toc-do]].
`,
  },
  {
    slug: 'ky-thuat-quang-tam',
    title: 'Kỹ thuật quãng 8',
    category: 'technique',
    aliases: ['chơi quãng 8', 'octave technique', 'quãng tám liên tiếp', 'double octaves'],
    summary: 'Quãng 8 chơi bằng ngón 1 và 5 (hoặc 1 và 4) với bàn tay thả lỏng; chuyển động chủ yếu từ cổ tay.',
    refs: [
      ['Pianist Magazine — 5 top tips for comfortable octave playing', 'https://www.pianistmagazine.com/5-top-tips-for-comfortable-octave-playing'],
      ['Melanie Spanswick — Octaves in comfort: 5 tips', 'https://melaniespanswick.com/2024/11/03/octaves-in-comfort-5-tips/'],
      ['Gramophone / International Piano — The nuts and bolts of piano technique: Octaves', 'https://gramophone.co.uk/international-piano/articles/the-nuts-and-bolts-of-piano-technique-part-1-octaves'],
    ],
    body: `
::keyboard C4 C5 | Quãng 8: ngón 1 trên C4, ngón 5 trên C5

## Thả lỏng bàn tay
- Chỉ **ngón 1 và ngón 5** hoạt động; phần còn lại của bàn tay và các ngón khác để tự do.
- Căng cơ thường thể hiện ở bàn tay **mở nhưng cứng**. Hãy để lòng bàn tay mềm, rồi thả lỏng cổ tay và cẳng tay.

## Cổ tay là trung tâm
Kỹ thuật quãng 8 bắt đầu từ **cổ tay**. Cổ tay hoạt động như "bộ giảm xóc" giúp cánh tay góp sức vào tiếng đàn; cổ tay cứng sẽ chặn điều đó. Một hình ảnh hay dùng: **mở và khép bàn tay như chiếc quạt** — mở ra trước mỗi quãng 8 và thu ngón 1 – 5 về sau đó.

## Tay nhỏ? Mở rộng dần
Nếu quãng 8 còn quá rộng, tập quãng 6, rồi quãng 7, rồi mới đến quãng 8 (xem [[quang]]). Luyện chậm và **dừng lại nếu khó chịu** — căng cơ là dấu hiệu bàn tay cần thả lỏng hơn (xem [[suc-khoe-nguoi-choi-dan]]).

## Ngón 1 – 5 hay 1 – 4?
Quãng 8 liên tiếp ở xa nhau là một dạng [[buoc-nhay-xa|bước nhảy]]. Khi 1 – 5 đã thoải mái, thử thêm **1 – 4** — đặc biệt hữu ích khi nối hợp âm với quãng 8. Chỉ dùng 1 – 5 thường hạn chế tốc độ, nhất là trên phím đen.
`,
  },
  {
    slug: 'lam-noi-giai-dieu',
    title: 'Làm nổi giai điệu',
    category: 'technique',
    aliases: ['voicing piano', 'cân bằng hai tay', 'tiếng đàn hát', 'singing tone', 'trọng lượng cánh tay', 'arm weight', 'tạo tiếng'],
    summary: 'Dùng trọng lượng cánh tay để tạo tiếng "hát"; dồn trọng lượng vào nốt giai điệu, để các nốt đệm thật nhẹ.',
    refs: [
      ['Pianist Magazine — 5 top tips for voicing', 'https://www.pianistmagazine.com/5-top-tips-for-voicing'],
      ['Melanie Spanswick — Voicing: 5 tips', 'https://melaniespanswick.com/2024/03/03/voicing-5-tips/'],
      ['Living Pianos — How to play one hand louder than the other', 'https://www.livingpianos.com/articles/how-to-play-one-hand-louder-than-the-other-on-the-piano/'],
    ],
    body: `
Trong [[ket-cau|kết cấu chủ điệu]], giai điệu phải nổi lên trên phần đệm. Trên piano, đó là chuyện **kiểm soát trọng lượng** chứ không phải sức ngón.

## Trọng lượng cánh tay
- Trọng lượng cánh tay với người chơi piano giống như **hơi thở** với ca sĩ: nó chuyển từ nốt này sang nốt kia và tạo ra một đường giai điệu liền mạch.
- Tạo tiếng to chỉ bằng sức ngón tốn nhiều công hơn và tiếng không đẹp bằng.
- Uốn câu nhạc bằng cách **tăng dần trọng lượng tới đỉnh câu rồi giảm dần** (xem [[dien-dat-cau-nhac]]).

## Làm nổi nốt trên cùng của hợp âm
Trong hợp âm, nốt cao nhất thường là giai điệu:
- Đánh nốt trên **nhanh và chắc** hơn; các nốt dưới nhấn **chậm và nhẹ** hơn.
- Ngón ngoài (ngón 4, 5) làm việc nhiều hơn ngón trong; cổ tay có thể **nghiêng nhẹ** về phía nốt trên.

## Luyện theo từng bước
1. Chơi riêng **bè trên**, giữ đúng ngón bấm sẽ dùng trong hợp âm, để cảm nhận lượng trọng lượng cần thiết.
2. Chơi riêng **các nốt dưới**, thật đều và nhẹ.
3. Ghép lại cả hợp âm, giữ nguyên sự chênh lệch.

## Không căng cứng
Để trọng lượng truyền qua cổ tay (cổ tay "hấp thụ" nó) thay vì dồn ứ ở đầu ngón, nhưng vẫn giữ đủ lực để nốt ngân. Liên quan: [[xep-hop-am]], [[cuong-do]].
`,
  },
  {
    slug: 'doc-not-nhanh',
    title: 'Kỹ năng đọc nốt',
    category: 'technique',
    aliases: ['đọc nốt', 'note reading', 'nốt mốc', 'landmark notes', 'đọc theo quãng', 'intervallic reading', 'đọc nhạc'],
    summary: 'Kết hợp hai cách: nhớ vài "nốt mốc" cố định, rồi đọc các nốt khác theo khoảng cách (quãng) từ mốc đó.',
    wiki: 'Musical_notation',
    refs: [
      ['Colourful Keys — Note identification methods', 'https://colourfulkeys.ie/note-identification-methods-one/'],
      ['Compose Create — An integrated approach to reading music', 'https://composecreate.com/an-integrated-approach-to-reading-music/'],
    ],
    body: `
## Nốt mốc
Chọn vài nốt dễ nhận ra làm điểm neo trên [[khuong-nhac|khuông nhạc đôi]]. Các mốc thường dùng: **Đô giữa (C4)**, **Sol khoá Sol (G4 — dòng 2)**, **Fa khoá Fa (F3 — dòng 4)**, Đô trầm (C3) và Đô cao (C5). Các nốt Đô dễ nhận vì chúng đối xứng trên bản nhạc.

::staff treble C4 G4 C5 | Nốt mốc trên khoá Sol: C4 (dòng kẻ phụ), G4 (dòng 2), C5 (khe 3)
::staff bass C3 F3 C4 | Nốt mốc trên khoá Fa: C3 (khe 2), F3 (dòng 4), C4 (dòng kẻ phụ)

## Đọc theo quãng
Thay vì gọi tên từng nốt, đọc **khoảng cách** từ nốt trước:
- **Liền bậc**: từ dòng sang khe kế bên (hoặc ngược lại) — đi một phím.
- **Nhảy quãng 3**: từ dòng sang dòng (hoặc khe sang khe) — bỏ qua một phím.
- Nốt viết **cao hơn** → tay đi sang **phải**; **thấp hơn** → sang **trái**.

## Kết hợp hai cách
1. Đặt tay vào một nốt mốc.
2. Đọc tiếp theo quãng càng xa càng tốt.
3. Khi lạc, quay về mốc gần nhất rồi đọc tiếp.

Một mẹo bổ trợ: lướt qua một nhóm nốt trước để thấy **hướng đi** (lên, xuống, đứng yên), rồi mới gọi tên từ mốc.

## So với câu gợi nhớ
Giáo viên có quan điểm khác nhau: có người cho rằng câu gợi nhớ là cách chậm nhất với phần lớn học sinh piano; có người cho rằng học sinh dùng câu gợi nhớ vẫn sẽ đọc tốt hơn nếu học thêm cách nhận quãng. Xem cách đọc nốt từng khoá trong [[khoa-sol]], [[khoa-fa]]. Bước tiếp theo: [[thi-tau]].
`,
  },
  {
    slug: 'thi-tau',
    title: 'Thị tấu',
    category: 'technique',
    aliases: ['đọc thị tấu', 'sight-reading', 'sight reading', 'đọc nhạc tại chỗ', 'eye-hand span', 'đọc trước'],
    summary: 'Chơi một bản nhạc lần đầu nhìn thấy. Người thị tấu giỏi nhìn trước một khoảng xa hơn so với chỗ tay đang chơi.',
    wiki: 'Sight-reading',
    refs: [
      ['Scientific Reports (2019) — Eye-hand span is not an indicator of but a strategy for proficient sight-reading in piano performance', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6884463/'],
      ['PLoS ONE (2023) — The influence of executive functions on eye-hand span and piano performance during sight-reading', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10153706/'],
    ],
    body: `
## Khoảng mắt – tay
**Khoảng mắt – tay** (eye-hand span) là khoảng cách giữa chỗ mắt đang đọc và chỗ tay đang chơi. Đây là thước đo được nghiên cứu nhiều nhất về thị tấu:
- Nhiều nghiên cứu ghi nhận người chơi được đánh giá cao hơn thường có **khoảng mắt – tay dài hơn**.
- Khoảng này **thay đổi theo độ khó**: bản dễ thì nhìn trước xa hơn; ở đoạn khó, người giỏi **dừng mắt nhiều lần hơn** tại chỗ khó.
- Một nghiên cứu năm 2019 với 30 nghệ sĩ piano chuyên nghiệp cho rằng khoảng mắt – tay **không chỉ là dấu hiệu của trình độ mà là một chiến lược** người thị tấu giỏi chủ động sử dụng.
- Nghiên cứu năm 2023 (39 người chơi piano) thấy **trí nhớ làm việc thính giác** dự báo khoảng mắt – tay, và khoảng mắt – tay dự báo chất lượng chơi.

Các nghiên cứu này có quy mô nhỏ và chủ yếu đo lường chứ chưa so sánh phương pháp luyện, nên chưa có "công thức" luyện thị tấu được kiểm chứng.

## Những kỹ năng nền giúp thị tấu
Phần này tổng hợp từ các bài khác trong thư viện — chúng là những gì người thị tấu phải xử lý tức thì:
- Đọc nốt bằng **mốc và quãng** thay vì gọi tên từng nốt: [[doc-not-nhanh]].
- Nhận ra ngay [[hoa-bieu]] và [[so-chi-nhip]] trước khi bắt đầu.
- Nhận ra **mẫu quen thuộc**: [[luyen-am-giai|đoạn âm giai]], [[hop-am-ba|hợp âm]] và [[the-dao-hop-am|thể đảo]], [[mo-tien-hoa-am|mô tiến]] — đọc cả cụm thay vì từng nốt.
- Giữ nhịp đều: xem [[kiem-soat-toc-do]].
`,
  },
  {
    slug: 'kiem-soat-toc-do',
    title: 'Kiểm soát tốc độ',
    category: 'technique',
    aliases: ['luyện với máy đếm nhịp', 'metronome', 'tăng tốc', 'tempo control', 'giữ nhịp', 'nhịp đều', 'bậc thang tốc độ'],
    summary: 'Bắt đầu ở tốc độ chơi được hoàn toàn chính xác, rồi tăng máy đếm nhịp từng bậc nhỏ cho tới tốc độ mục tiêu.',
    wiki: 'Metronome',
    refs: [
      ['The Instrumentalist — Terraced metronome practice method', 'https://theinstrumentalist.com/november-2019-flute-talk/terraced-metronome-practice-method/'],
      ['Simon Fischer — Using the metronome (PDF)', 'https://www.simonfischeronline.com/uploads/5/7/7/9/57796211/070mm.pdf'],
      ['Pianist Magazine — 5 top piano tips for using the metronome', 'https://pianistmagazine.com/blogs/5-top-piano-tips-for-using-the-metronome'],
    ],
    body: `
## Bậc thang tốc độ
1. Xác định **tốc độ mục tiêu** (xem [[nhip-do]]).
2. Bắt đầu ở tốc độ mà **mọi nốt đều sạch, đúng nhịp và thoải mái** về thể chất — phương pháp "bậc thang" của tạp chí The Instrumentalist bắt đầu từ **một nửa** tốc độ mục tiêu.
3. Chỉ tăng khi đã chơi đúng ổn định, mỗi lần **vài nấc** (ví dụ của Simon Fischer: 80 – 84 – 88 – 92 – 96).
4. Biến thể "**tiến 5, lùi 2**": tăng 5 nấc rồi lùi 2, để ôn lại ở các tốc độ vừa đạt.

## Mẹo thực hành
- Chọn tốc độ theo **đoạn khó nhất** của phần đang tập, dù các đoạn dễ sẽ thấy chậm.
- Với đoạn rất nhanh: để máy đếm theo **phân phách** (móc kép), rồi chuyển dần sang móc đơn và nốt đen.
- **Đếm hoặc hát** tiết tấu trước khi bật máy đếm nhịp, để tách việc hiểu nhịp khỏi việc điều khiển ngón.
- **Ghi âm** mình chơi cùng máy đếm nhịp rồi nghe lại — dễ phát hiện chỗ chạy nhanh hoặc chậm mà lúc chơi không nhận ra.

## Kết hợp chậm và nhanh
Không phải nguồn nào cũng chỉ khuyên "chậm rồi nhanh dần": một số giáo viên cho rằng hiệu quả nhất là **kết hợp** tập chậm với những lần thử ở tốc độ cao hơn mục tiêu, rồi quay về. Xem thêm [[phuong-phap-luyen-tap]].

Khi đã vững nhịp, sự co giãn có chủ đích ([[nhip-do|rubato]]) mới thực sự có ý nghĩa — xem [[dien-dat-cau-nhac]].
`,
  },
  {
    slug: 'phuong-phap-luyen-tap',
    title: 'Phương pháp luyện tập',
    category: 'technique',
    aliases: ['luyện tập hiệu quả', 'cách tập đàn', 'practice', 'interleaved practice', 'luyện xen kẽ', 'chia nhỏ', 'chunking', 'biến thể tiết tấu', 'tập tay riêng'],
    summary: 'Chia nhỏ đoạn khó, thay đổi cách tập (tiết tấu, tay riêng, tốc độ), chia thời gian thành nhiều buổi ngắn và luyện xen kẽ.',
    wiki: 'Practice_(learning_method)',
    refs: [
      ['Carter & Grahn (2016), Frontiers in Psychology — Optimizing music learning: interleaved practice', 'https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01251/text'],
      ['The Musician\'s Way — Varied, distributed and interleaved practice', 'https://www.musiciansway.com/blog/2017/10/varied-distributed-and-interleaved-practice/'],
      ['Practising the Piano — On dotted rhythms', 'https://practisingthepiano.com/on-dotted-rhythms/'],
    ],
    body: `
## Luyện xen kẽ (interleaved)
Luyện **khối** là tập một thứ cho đến khi xong rồi mới chuyển; luyện **xen kẽ** là chuyển qua lại giữa các bài/đoạn.
- Nghiên cứu của Carter & Grahn (2016): 10 người chơi clarinet tập một bản theo kiểu khối, một bản theo kiểu xen kẽ (đổi bản mỗi 3 phút, tổng thời gian như nhau). Các bản tập xen kẽ được giám khảo **chấm điểm cao hơn rõ rệt**.
- Tuy vậy, người chơi vẫn **thích** tập khối hơn — vì xen kẽ đòi hỏi nhiều nỗ lực hơn và cảm giác tiến bộ trước mắt ít hơn.
- Một số tác giả cho rằng xen kẽ hợp nhất với bài **đã thuộc** và đang trau chuốt; bài mới nên học bằng cách khác trước.

Lưu ý: nghiên cứu có quy mô nhỏ (10 người).

## Luyện phân bổ (distributed)
Tập cùng một đoạn trong **nhiều buổi ngắn** trong ngày thay vì một buổi dài.

## Luyện biến đổi (varied)
Tiếp cận cùng một đoạn từ nhiều phía: **tay riêng rồi tay đôi**, đổi tiết tấu, đổi tốc độ.

## Biến thể tiết tấu
Một đoạn móc kép đều (ví dụ C–D–E–F–G–A–B–C) được tập theo:
- **Dài – ngắn** ([[cham-doi-dau-noi|chấm dôi]]): nốt dài cho thời gian chuẩn bị, nốt ngắn buộc động tác nhanh, gọn.
- **Ngắn – dài** (đảo ngược): luyện tập trung vào những nốt còn lại.
- Nhóm 3, 4, 5 nốt hoặc [[lien-ba]].

Giáo viên lưu ý: cách này hiệu quả khi dùng cẩn thận nhưng **không chữa được mọi vấn đề kỹ thuật**, và cần kết hợp thả lỏng để tránh căng cơ.

## Chia nhỏ và nốt đích
Cắt câu dài thành từng **cụm** ngắn, mỗi cụm bắt đầu bằng một **nốt đích** rõ ràng; tập từng cụm rồi nối lại. Biết cấu trúc [[cau-nhac]] và [[motif]] giúp chọn chỗ cắt hợp lý.

Liên quan: [[kiem-soat-toc-do]], [[hoc-thuoc-bai]].
`,
  },
  {
    slug: 'hoc-thuoc-bai',
    title: 'Học thuộc bài',
    category: 'technique',
    aliases: ['chơi thuộc lòng', 'memorization', 'trí nhớ âm nhạc', 'nhớ bài', 'trí nhớ cơ bắp', 'muscle memory', 'quên bài'],
    summary: 'Bốn loại trí nhớ được dùng khi học thuộc: thính giác, thị giác, vận động (cơ bắp) và phân tích — dựa vào nhiều loại cùng lúc thì vững hơn.',
    wiki: 'Musical_memory',
    refs: [
      ['Li — Piano performance: strategies for score memorisation (City, University of London)', 'https://openaccess.city.ac.uk/id/eprint/8530/'],
      ['College Music Symposium — A multi-level approach to more secure memorization', 'https://symposium.music.org/volume-49/articles-1752877057/a-multi-level-approach-to-more-secure-memorization'],
      ['Durham University — Piano teachers\' approaches to memorisation (survey)', 'https://durham-repository.worktribe.com/OutputFile/2163728'],
    ],
    body: `
## Bốn loại trí nhớ
| Loại | Nhớ cái gì |
|---|---|
| **Thính giác** | Âm thanh — "nghe" trước được bản nhạc trong đầu |
| **Thị giác** | Hình ảnh bản nhạc hoặc hình dạng tay trên bàn phím |
| **Vận động** (cơ bắp) | Chuỗi chuyển động của ngón và tay |
| **Phân tích** | Cấu trúc: [[hop-am-ba|hợp âm]], [[vong-hop-am]], [[hinh-thuc-am-nhac|hình thức]], [[mo-tien-hoa-am|mô tiến]] |

Các nhà sư phạm đầu thế kỷ 20 (Hughes, Matthay) chỉ nói đến ba loại đầu; trí nhớ **phân tích** (còn gọi là trí nhớ cấu trúc) được bổ sung sau, trong đó có công trình của Roger Chaffin và cộng sự.

## Đừng chỉ dựa vào "trí nhớ ngón tay"
Một khảo sát giáo viên piano dạy trẻ em cho thấy phương pháp **vận động** và **phân tích** được dùng nhiều nhất. Các tác giả khác cảnh báo học sinh thường **dựa quá nhiều vào trí nhớ vận động** — loại dễ "đứt" nhất khi hồi hộp. Đa số tác giả khuyên kết hợp nhiều loại trí nhớ.

## Vì sao phân tích giúp nhớ?
Nghiên cứu về trí nhớ cho thấy nhạc sĩ có kinh nghiệm mã hoá thông tin nhanh hơn vì họ gắn nốt mới vào những **"cụm" quen thuộc** đã biết — chính là kiến thức lý thuyết trong thư viện này.

## Lưu ý
Bằng chứng chủ yếu từ khảo sát và luận án, chưa nhiều thí nghiệm có đối chứng. Ngay cả bốn loại trí nhớ trên cũng có thể chưa đủ để tránh hoàn toàn những lần "quên bài" thoáng qua trên sân khấu. Liên quan: [[phuong-phap-luyen-tap]], [[hoi-hop-bieu-dien]].
`,
  },
  {
    slug: 'dien-dat-cau-nhac',
    title: 'Diễn đạt câu nhạc',
    category: 'technique',
    aliases: ['phrasing', 'biểu cảm', 'diễn cảm', 'uốn câu nhạc', 'hình vòm câu nhạc', 'expressive timing', 'chậm cuối câu'],
    summary: 'Người biểu diễn thường uốn câu nhạc theo hình vòm: chậm và nhẹ ở hai đầu câu, nhanh hơn và đầy đặn hơn ở giữa.',
    wiki: 'Rubato',
    refs: [
      ['Demos, Lisboa & Chaffin (2016) — Flexibility of expressive timing in repeated musical performances', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5047881/'],
      ['Todd — A model of expressive timing in tonal music (PDF)', 'https://www.continuum-hypothesis.com/music/todd.pdf'],
    ],
    body: `
## Hình vòm của câu nhạc
Nghiên cứu ghi âm biểu diễn (ví dụ Demos, Lisboa & Chaffin, 2016, phân tích các bản Bach của hai nghệ sĩ độc tấu) cho thấy **nhịp độ tạo thành hình vòm**: chậm hơn và kém ổn định ở **ranh giới câu**, nhanh và ổn định hơn ở **giữa câu**. Mẫu hình vòm này được ghi nhận ở nhiều tác phẩm và người chơi ở nhiều trình độ. Người biểu diễn cũng uốn **cường độ** theo câu để đánh dấu chỗ bắt đầu và kết thúc.

## Chậm lại ở cuối câu
Kéo dài nhẹ ở cuối câu là một xu hướng chung, gặp cả trong **lời nói** lẫn âm nhạc. Mô hình của Neil Todd cho rằng người biểu diễn dùng sự kéo dài này để làm **nghe thấy được cấu trúc nhóm** của bản nhạc — tức là [[cau-nhac]] và các tầng lớn hơn của [[hinh-thuc-am-nhac|hình thức]].

## Áp dụng khi chơi đàn
- Xác định [[cau-nhac|câu nhạc]] và **đỉnh câu**; dẫn [[cuong-do]] và trọng lượng cánh tay tới đỉnh rồi lắng xuống ([[lam-noi-giai-dieu]]).
- "Thở" ở [[cau-ket|chỗ kết câu]]: kéo nhẹ, nhấc tay mềm.
- [[nhip-do|Rubato]] phục vụ cấu trúc: co giãn quanh ranh giới câu, giữ ổn định ở giữa.
- Các [[cach-dien-tau|ký hiệu diễn tấu]] (legato, tenuto, accent) và [[thuat-ngu|thuật ngữ biểu cảm]] cho biết ý đồ của tác giả.

## Phong cách thay đổi theo thời gian
Một nghiên cứu 127 bản thu Étude Op. 25 số 1 của Chopin (1909–2016) thấy **tổng lượng co giãn nhịp độ không đổi**, nhưng **cách dùng** rubato thì thay đổi — các bản thu gần đây kéo dài cuối câu nhiều hơn. Nghĩa là "cách chơi biểu cảm" cũng mang dấu ấn từng thời kỳ (xem [[cac-thoi-ky]]).
`,
  },
  {
    slug: 'hoi-hop-bieu-dien',
    title: 'Hồi hộp khi biểu diễn',
    category: 'technique',
    aliases: ['run sân khấu', 'lo âu biểu diễn', 'performance anxiety', 'stage fright', 'sợ sân khấu', 'thi đàn'],
    summary: 'Lo âu biểu diễn gặp ở mọi trình độ; chuẩn bị kỹ, diễn thử, kỹ thuật thở và các liệu pháp tâm lý được nghiên cứu cho thấy có ích.',
    wiki: 'Stage_fright',
    refs: [
      ['Frontiers in Psychology (2025) — Systematic review of interventions for music performance anxiety', 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1507229/pdf'],
      ['PMC — Music educators\' strategies for music performance anxiety (review)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10426800'],
    ],
    body: `
## Nguyên nhân thường gặp
Một nghiên cứu định tính với người chơi piano ghi nhận các nguyên nhân: **chuẩn bị chưa đủ**, kỳ vọng bản thân quá cao, áp lực từ xã hội, môi trường biểu diễn, và độ khó của tác phẩm. Lo âu biểu diễn được ghi nhận ở cả người lớn, thanh thiếu niên và trẻ em.

## Những gì nghiên cứu cho thấy có ích
- **Tổng quan hệ thống năm 2025** (các nghiên cứu 2016–2023): liệu pháp chấp nhận và cam kết (ACT), liệu pháp nhận thức – hành vi (CBT), chánh niệm và yoga giúp **giảm lo âu rõ rệt**.
- **Tổng quan về phương pháp của giáo viên**: được dùng nhiều nhất là **diễn thử** (biểu diễn mô phỏng), thái độ tích cực, **chuẩn bị kỹ** và **kỹ thuật thở**.

## Áp dụng cho học sinh piano
- Chuẩn bị bài thật vững, học thuộc bằng nhiều loại trí nhớ ([[hoc-thuoc-bai]]).
- **Diễn thử** trước gia đình, bạn bè, hoặc ghi hình như thật.
- Tập điểm "bắt đầu lại" ở từng [[cau-nhac|câu nhạc]] để không bị dừng hẳn nếu sai.

## Lưu ý
Phần lớn nghiên cứu có quy mô nhỏ hoặc mang tính định tính; bằng chứng cho từng kỹ thuật cụ thể vẫn đang được bổ sung. Với lo âu nghiêm trọng, nên tìm đến chuyên gia tâm lý.
`,
  },
  {
    slug: 'suc-khoe-nguoi-choi-dan',
    title: 'Sức khoẻ người chơi đàn',
    category: 'technique',
    aliases: ['chấn thương', 'đau tay', 'phòng chấn thương', 'khởi động', 'nghỉ giữa giờ', 'loạn trương lực cơ khu trú', 'focal dystonia', 'căng cơ', 'tendinitis'],
    summary: 'Tập quá lâu không nghỉ, căng cơ và tư thế sai làm tăng nguy cơ chấn thương; khởi động, nghỉ giữa giờ và dừng khi đau giúp phòng tránh.',
    wiki: 'Repetitive_strain_injury',
    refs: [
      ['IJOMEH — Risk factors in piano playing techniques for developing playing-related musculoskeletal disorders (scoping review)', 'https://ijomeh.eu/Risk-factors-in-piano-playing-techniques-for-developing-playing-related-musculoskeletal,225001,0,2.html'],
      ['BAPAM — The Healthy Pianist (factsheet)', 'https://crosseyedpianist.com/wp-content/uploads/2016/08/thehealthypianist_bapamfactsheet.pdf'],
      ['Lee University — Pianist health and injury prevention (PDF)', 'https://www.leeuniversity.edu/wp-content/uploads/Pianist-Health-and-Injury-Prevention-1.pdf'],
    ],
    body: `
## Yếu tố nguy cơ
Một tổng quan (17 nghiên cứu) về rối loạn cơ xương liên quan đến chơi đàn piano nêu các yếu tố: **bàn tay nhỏ**, **động tác lặp lại**, **buổi tập kéo dài không nghỉ đủ**, và **tư thế, cách bố trí đàn chưa hợp lý** (xem [[tu-the]]). Căng thẳng tâm lý được ghi nhận là yếu tố nguy cơ của **loạn trương lực cơ khu trú** (focal dystonia).

## Yếu tố bảo vệ
- **Khởi động** và giãn cơ được ghi nhận là có tác dụng bảo vệ.
- Chia buổi tập thành **các đoạn tập trung, xen kẽ nghỉ**; không tập liền nhiều giờ (xem [[phuong-phap-luyen-tap|luyện phân bổ]]).
- Giữ vai, cánh tay và bàn tay **không căng thừa**; thả lỏng cơ giữa các động tác.
- **Dừng lại** khi thấy khó chịu hay mỏi; **không tập "xuyên qua" cơn đau, tê hoặc châm chích**.

## Khi đã có vấn đề
Hiệp hội Y học Nghệ thuật Biểu diễn Anh (BAPAM) khuyên người chơi piano bị căng cơ, đau hoặc chấn thương nên **kết hợp lời khuyên y tế với việc xem lại kỹ thuật chơi**, để vấn đề không tái phát. Với tê kéo dài, mất kiểm soát ngón tay hay đau dai dẳng, hãy gặp **bác sĩ** — tốt nhất là chuyên khoa y học nghệ thuật biểu diễn.

## Lưu ý về bằng chứng
Tổng quan trên tổng hợp các nghiên cứu quan sát, nên chưa có con số chuẩn cho thời lượng nghỉ hay bài khởi động cụ thể.
`,
  },
  {
    slug: 'ky-thuat-lay-ren',
    title: 'Kỹ thuật láy rền',
    category: 'technique',
    aliases: ['chơi láy rền', 'trill technique', 'ngón láy', 'luyện trill'],
    summary: 'Láy rền cần đúng cặp ngón và bàn tay thật thả lỏng; láy ngắn dùng động tác ngón, láy to hoặc dài thường kết hợp xoay cổ tay.',
    refs: [
      ['Pianist Magazine — Trills at the piano', 'https://pianistmagazine.com/trills-at-the-piano'],
      ['Living Pianos — 3 ways to make trills easier on the piano', 'https://www.livingpianos.com/articles/3-ways-to-make-trills-easier-on-the-piano/'],
      ['Living Pianos — How to play trills on the piano', 'https://www.livingpianos.com/articles/conquer-trills-on-the-piano/'],
    ],
    body: `
Ký hiệu và cách đọc láy rền: xem [[ky-hieu-hoa-my]]. Bài này nói về **cách chơi**.

## Hai kiểu chuyển động
- **Động tác ngón**: các ngón luân phiên, bàn tay gần như yên.
- **Xoay cổ tay**: bàn tay xoay qua lại giữa hai nốt (xem kỹ thuật xoay ở [[luyen-hop-am-rai]]).
Láy rền **to hoặc dài** thường cần kết hợp cả hai.

## Chọn cặp ngón
| Cặp ngón | Nhận xét của giáo viên |
|---|---|
| 3 – 1 | Được xếp là chắc nhất |
| 3 – 2 | Chắc, đáng tin cậy |
| 2 – 4 | Kém thuận hơn |
| 1 – 4 | Ngón xa nhau → giữ ngón yên, dùng cổ tay xoay |
| 4 – 5 | Khó nhất (hai ngón yếu) |

Trong nhạc đối âm (ví dụ [[fugue]] của Bach), các bè khác có thể buộc phải dùng cặp ngón kém thuận; một số người chơi còn **đổi cặp ngón giữa chừng** trong láy rền dài (ví dụ 3-1-3-2).

## Thả lỏng là yêu cầu số một
- Căng cơ tích tụ dần trong láy rền dài — chú ý giữ ngón mềm.
- **Trọng lượng cánh tay cản trở** láy rền: hãy cảm giác như tay **lơ lửng nhẹ** trên phím.
- Một giáo viên gợi ý **hít vào trước** khi láy và bắt đầu láy khi thở ra.

## Cách luyện
- Bắt đầu chậm, **ngón luôn chạm phím**: nhấn nhẹ phím, rồi nâng phím lên nhẹ nhàng mà không nhấc ngón khỏi phím.
- Tăng tốc từ từ và **dừng tăng** trước khi bàn tay, cánh tay hay vai bắt đầu căng (xem [[kiem-soat-toc-do]]).
- **Đếm số nốt** của láy rền để kết thúc gọn và đúng nhịp.
- Luyện hai cách: xoay cổ tay hoàn toàn, và không xoay mà nâng ngón cao.
- Luyện phần kết: chơi tới trước các nốt cuối, dừng thoải mái rồi chơi tiếp; thu ngắn dần khoảng dừng cho đến khi người nghe không nhận ra.

Bộ máy [[bo-may-piano|thoát kép]] của đàn grand giúp láy rền nhanh dễ hơn trên đàn upright.
`,
  },
  {
    slug: 'bai-tap-ngon',
    title: 'Bài tập ngón: Hanon và Czerny',
    category: 'technique',
    aliases: ['Hanon', 'Charles-Louis Hanon', 'The Virtuoso Pianist', 'bài tập ngón độc lập', 'finger independence', 'luyện ngón', 'Czerny Op. 599', 'etude kỹ thuật'],
    summary: 'Hanon được dùng rộng rãi nhưng gây tranh cãi; Czerny thường được coi là lựa chọn "có tính âm nhạc" hơn. Các nguồn đồng ý về mục tiêu, khác nhau về con đường.',
    wiki: 'Charles-Louis_Hanon',
    refs: [
      ['Practising the Piano — The Hanon debate', 'https://practisingthepiano.com/the-hanon-debate/'],
      ['Pianist Magazine — Why Hanon exercises are a waste of time and possibly dangerous', 'https://www.pianistmagazine.com/blogs/this-is-why-hanon-exercises-are-a-waste-of-time-and-possibly-dangerous/'],
      ['Hoffman Academy — The benefits of Hanon exercises', 'https://stratos.hoffmanacademy.com/blog/the-benefits-of-hanon-exercises-for-piano-players'],
    ],
    body: `
## Hanon — "The Virtuoso Pianist in 60 Exercises"
**Ủng hộ** cho rằng: luyện **lực, độ đều** của ngón, sự cân bằng hai tay và sức bền; là bài **khởi động** hằng ngày tốt.

**Phản đối** cho rằng:
- Mọi hoạt động chơi đàn đều luyện lực và độ độc lập của ngón — Hanon không có gì đặc biệt.
- Ngón tay **không thể đều và độc lập tuyệt đối** về mặt giải phẫu, dù lặp lại bao nhiêu.
- Hanon yêu cầu giữ yên cánh tay và cổ tay, chỉ cử động ngón — trong khi kỹ thuật hiện đại coi trọng **sự phối hợp cả cánh tay**. Một số nhà sư phạm (như Abby Whiteside) còn coi chúng là **có hại** nếu tập sai.

**Trung dung**: dùng có chọn lọc cho vấn đề cụ thể, ví dụ một giáo viên dùng bài 32–37 để sửa ngón cái cứng hoặc "sập".

## Czerny
[[Czerny|Carl Czerny]] được gọi là "cha đẻ của kỹ thuật piano hiện đại". Các tuyển tập như **Op. 599** (cho người mới học), **Op. 299**, **Op. 740** và **Op. 802** (có phần dành riêng cho **độc lập từng ngón**) thường được đánh giá là **có tính âm nhạc hơn** bài tập ngón thuần tuý — dù một số người thấy chúng hơi nhàm và khuyên học kèm tác phẩm phong phú hơn.

## Kết luận thực tế
- Mục tiêu (kỹ thuật vững, ngón độc lập) đáng theo đuổi; tranh cãi là **con đường**.
- Lựa chọn được nhiều giáo viên khuyên: [[luyen-am-giai|âm giai]], [[luyen-hop-am-rai|hợp âm rải]], hợp âm và **tác phẩm thật**.
- Dù tập bài nào: luôn **thả lỏng**, dừng khi đau (xem [[suc-khoe-nguoi-choi-dan]]) và tập có mục đích (xem [[phuong-phap-luyen-tap]]).
`,
  },
  {
    slug: 'buoc-nhay-xa',
    title: 'Bước nhảy xa trên bàn phím',
    category: 'technique',
    aliases: ['nhảy quãng xa', 'leaps', 'jumps', 'chơi không nhìn tay', 'nhảy tay', 'định vị phím'],
    summary: 'Tách riêng bước nhảy để luyện, tập nhắm mắt để cảm nhận khoảng cách, và di chuyển tay ngang thật nhanh rồi hạ thẳng xuống.',
    refs: [
      ['Gramophone / International Piano — The nuts and bolts of piano technique: Leaps', 'https://gramophone.co.uk/international-piano/articles/the-nuts-and-bolts-of-piano-technique-leaps'],
      ['Key Notes — Changing hand positions without looking', 'https://www.key-notes.com/blog/changing-hand-positions-without-looking'],
      ['Piano Fundamentals — Practicing jumps', 'https://mail.pianofundamentals.com/book/en/1.III.7.6'],
    ],
    body: `
## Tách riêng và lặp lại
Thay vì tập cả đoạn khó, **tách riêng bước nhảy** và lặp lại bình tĩnh — kể cả **nhắm mắt** — để xây dựng trí nhớ về khoảng cách trên [[ban-phim]].

## Quỹ đạo của bàn tay
Lỗi thường gặp: tay đi theo hình **chữ V ngược**, hạ xuống ở góc ngẫu nhiên → khó trúng phím. Tốt hơn là hình **chữ U ngược**: di chuyển **ngang thật nhanh** trước, rồi **hạ thẳng** xuống phím — để còn thời gian định vị phím sau khi tay đến nơi. Khi tập chậm, **chạm nhẹ** phím trước khi đánh.

## Cảm nhận thay vì nhìn
- Người chơi dây và người chơi piano khiếm thị định vị bằng **cảm giác khoảng cách**; các nhóm 2 và 3 phím đen là mốc chạm được.
- "Bản đồ bàn phím" là một dạng **cảm nhận vị trí cơ thể**; luyện [[thi-tau]] đều đặn giúp phát triển nó.
- Dùng **tầm nhìn ngoại vi** để thấy tay khi mắt vẫn nhìn bản nhạc; nếu phải nhìn tay, chỉ liếc khi nhảy và biết trước chỗ quay lại trên bản nhạc.

## Bước nhảy hợp âm (tay trái)
1. Nhảy từ **nốt dưới** của hợp âm này sang nốt dưới của hợp âm kia, giữ nguyên ngón, cho đến khi làm được khi nhắm mắt.
2. Lặp lại với nốt giữa, rồi nốt trên.
3. Thêm dần nốt cho đến đủ hợp âm.

Kiểu đệm stride trong ragtime (xem [[ket-cau]], [[Joplin]]) là bài luyện bước nhảy kinh điển. Lưu ý: các bài tập trên chủ yếu từ giáo viên và diễn đàn, chưa phải nghiên cứu chính thức.
`,
  },
  {
    slug: 'not-lap-lai',
    title: 'Nốt lặp nhanh',
    category: 'technique',
    aliases: ['nốt lặp', 'repeated notes', 'đổi ngón nốt lặp', 'ngón 3-2-1'],
    summary: 'Nốt lặp nhanh gần như không thể chơi bằng một ngón; đổi ngón (thường 3-2-1), giữ ngón sát phím và tăng tốc từ từ.',
    refs: [
      ['Living Pianos — How to play repeated notes on the piano', 'https://www.livingpianos.com/articles/how-to-play-repeated-notes-on-the-piano-piano-techniques/'],
      ['Living Pianos — 2 reasons you must change fingers on repeated notes', 'https://www.livingpianos.com/articles/2-reasons-you-must-change-fingers-on-repeated-notes/'],
      ['Pianist Magazine — How to play repeated notes on the piano', 'https://www.pianistmagazine.com/how-to-play-repeated-notes-on-the-piano'],
    ],
    body: `
## Đổi ngón
Nốt lặp **rất nhanh** gần như không thể chơi bằng một ngón. Ngón bấm thường được khuyên là **3 – 2 – 1** lặp vòng — nhưng điều quan trọng nhất là tìm ra ngón bấm hợp với tay mình.

## Kỹ thuật
- Giữ ngón **sát ngay trên phím** — không có thời gian cho động tác thừa.
- Bàn tay khá yên, ngón cong tròn, đánh vào **giữa phím**.
- Tập chậm với máy đếm nhịp rồi tăng dần (xem [[kiem-soat-toc-do]]).
- Đàn **upright** khó đáp ứng nốt lặp rất nhanh vì không có bộ máy thoát kép (xem [[bo-may-piano]]).

## Nốt lặp chậm, liền tiếng
Đổi ngón cũng giúp nốt lặp **liền tiếng** hơn: nhấc ngón trước **trong khi** ngón sau đang hạ xuống, nốt lặp đến sớm hơn và nối tiếng tốt hơn. Giữ bàn tay **nhẹ**, gần như lơ lửng, dùng rất ít trọng lượng cánh tay.

Các trường phái không hoàn toàn thống nhất: với nốt lặp chậm không cần liền tiếng, dùng cùng một ngón vẫn cho kết quả tốt. Lưu ý: nội dung bài chủ yếu từ một giáo viên (Robert Estrin) và tạp chí Pianist.
`,
  },
  {
    slug: 'dem-hat-piano',
    title: 'Đệm hát và các kiểu đệm',
    category: 'technique',
    aliases: ['đệm hát', 'đệm piano', 'accompaniment', 'comping', 'kiểu đệm', 'Alberti bass', 'stride piano', 'stride', 'đệm valse', 'chơi theo hợp âm'],
    summary: 'Các kiểu đệm cơ bản: hợp âm khối, hợp âm rải, bass Alberti, đệm valse, đệm pop, stride — và cách tập đệm từ bản nhạc chỉ có giai điệu và ký hiệu hợp âm.',
    refs: [
      ['Musicnotes — 7 ways to play lead sheets with your left hand', 'https://www.musicnotes.com/blog/7-ways-to-play-lead-sheets-with-your-left-hand'],
      ['Soundfly — 3 common broken chord patterns', 'https://flypaper.soundfly.com/tips/broken-chord-patterns-theory-inspire-beginner-pianists/'],
      ['Skoove — Piano accompaniment', 'https://skoove.com/blog/piano-accompaniment'],
      ['Wikipedia — Stride (music)', 'https://en.wikipedia.org/wiki/Stride_(music)'],
      ['MasterClass — Stride piano guide', 'https://www.masterclass.com/articles/stride-piano-guide'],
    ],
    body: `
## Các kiểu đệm
| Kiểu | Cách chơi | Hợp với |
|---|---|---|
| **Hợp âm khối** | Đánh cả hợp âm cùng lúc | Kiểu cơ bản nhất, mọi thể loại |
| **Hợp âm rải** | Đánh lần lượt từng nốt của hợp âm | Ballad, nhạc trữ tình |
| **Bass Alberti** | Thấp – cao – giữa – cao (C–G–E–G) | Nhịp 4/4, móc đơn hoặc nốt đen; đặc trưng thời Cổ điển nhưng dùng được ở nhiều phong cách |
| **Đệm valse** | Nốt trầm một mình, rồi hai nốt trên hai lần (trầm – hợp âm – hợp âm) | Nhịp 3/4 |
| **Đệm "pop"** | Đung đưa giữa nốt dưới và các nốt trên của hợp âm | Pop, ballad |
| **Stride** | Nốt bass ở phách 1 và 3, hợp âm ở phách 2 và 4 — tay trái nhảy xa liên tục | Ragtime, jazz Harlem |

::keyboard C3 E3 G3 | Hợp âm C để luyện các kiểu đệm: thử khối, rải, Alberti (C–G–E–G)

Các kiểu này chính là các dạng [[ket-cau|kết cấu chủ điệu]]. Đệm Alberti và stride là bài tập tốt cho [[buoc-nhay-xa]] và [[dan-giong]].

## Stride
Phong cách jazz bắt nguồn từ ragtime. Nốt bass thường là nốt gốc hoặc nốt 5, có thể chơi đơn, quãng 8 hoặc quãng 10; hợp âm ở phách 2 và 4 thường gọn 2–3 nốt (thường gốc, 3, 7 — xem [[xep-hop-am|shell voicing]]). Tay trái nhảy liên tục giúp tay phải tự do chơi giai điệu và ngẫu hứng. James P. Johnson được coi là "cha đẻ" của stride; học trò ông, Fats Waller, đưa stride đến với công chúng (xem [[nghe-si-piano-jazz]]).

## Đệm từ bản nhạc hợp âm (lead sheet)
Bản lead sheet chỉ ghi giai điệu và [[ky-hieu-hop-am]]. Lộ trình tay trái được khuyên:
1. Chơi **một nốt** — nốt gốc của hợp âm.
2. Chơi **quãng 8**.
3. Chơi **cả hợp âm**, rồi chuyển sang các kiểu đệm ở bảng trên.

Ghi nhớ trước vài hợp âm hay gặp trong bài và luyện chuyển qua lại giữa chúng (xem [[vong-hop-am]], [[the-dao-hop-am]]).

## Tay trái theo thể loại
Trong jazz, blues và nhạc cổ điển, tay trái thường giữ nhịp đều bằng hợp âm rải, [[ostinato]] hoặc đường bass. Trong jazz, **walking bass** là đường bass đi liền bậc lên xuống theo hợp âm.
`,
  },
  {
    slug: 'ngau-hung-piano',
    title: 'Ngẫu hứng cơ bản',
    category: 'technique',
    aliases: ['ngẫu hứng', 'improvisation', 'improvise', 'tự chơi', 'hỏi – đáp', 'call and response', 'chơi ngẫu hứng'],
    summary: 'Bắt đầu với âm giai ngũ cung trên một vòng hợp âm lặp lại, luyện theo lối hỏi – đáp, mở rộng dần âm vực rồi mới nhắm vào nốt của hợp âm.',
    refs: [
      ['Music Mark — A Common Approach: keyboard improvisation (UK curriculum)', 'https://www.musicmark.org.uk/a-common-approach/keyboard/area-c/pos-2/c1/'],
      ['Skillshare — Piano improvisation for beginners', 'https://www.skillshare.com/en/classes/piano-improvisation-for-beginners/228353354'],
    ],
    body: `
Một lộ trình được chương trình giáo dục âm nhạc ở Anh và các khoá học cho người mới gợi ý, từ đơn giản đến nâng cao:

## 1. Vòng hợp âm lặp lại
Một người (giáo viên hoặc đệm tự động) chơi một [[vong-hop-am]] 8 ô nhịp lặp lại, sau đó mở rộng lên [[blues-12-nhip|12 ô nhịp]]. Người học **đếm nhịp cẩn thận**, theo kịp chỗ đổi hợp âm, và cho đoạn ngẫu hứng một **mở đầu và kết thúc rõ ràng**.

## 2. Năm nốt ngũ cung
[[am-giai-ngu-cung|Âm giai ngũ cung]] chỉ có 5 nốt, không có nửa cung nên rất "dễ nghe". Ngũ cung **thứ** thường nằm vừa tay hơn ngũ cung trưởng. Ví dụ: **Mi thứ ngũ cung (E – G – A – B – D)** trên các hợp âm Em, A7, C, Am, B7.

::keyboard E4 G4 A4 B4 D5 | Mi thứ ngũ cung — năm nốt để bắt đầu ngẫu hứng

Một khoá học cho người mới bắt đầu ngay trên **5 phím đen** (cũng là một âm giai ngũ cung) rồi mới chuyển sang phím trắng.

## 3. Hỏi – đáp
Bài tập cốt lõi: một câu "**hỏi**" bằng giai điệu, rồi một câu "**đáp**" bổ sung — như một cuộc trò chuyện (giống câu hỏi – câu trả lời trong [[cau-nhac]]). Giáo viên chơi câu hỏi, học trò đáp; sau đó đổi vai. Dần dần yêu cầu chính xác hơn về tiết tấu, [[cuong-do]] và [[cach-dien-tau]].

## 4. Mở rộng
- Trải âm giai ngũ cung ra **hai quãng 8** trở lên.
- Thử [[am-giai-blues]] và [[dieu-thuc|điệu thức]].
- Nhắm vào **nốt của hợp âm** đang vang ở phách mạnh; dùng âm giai trưởng trên hợp âm I, Lydian trên IV, Mixolydian trên V (xem [[he-thong-hop-am-am-giai]]).

Mục tiêu ban đầu **không phải là chơi điêu luyện**, mà là sáng tác những đoạn nhạc đơn giản ngay tại chỗ. Các nguồn này là chương trình giảng dạy và khoá học, chưa có nghiên cứu đối chứng.
`,
  },
]
