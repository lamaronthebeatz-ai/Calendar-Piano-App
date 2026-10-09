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
      ['Piano Keyboard Guide — Major scales in all 12 keys', 'https://piano-keyboard-guide.com/?p=766'],
    ],
    body: `
## Nhóm ngón
Ngón bấm âm giai được xây từ hai nhóm luân phiên: **nhóm ngắn (1-2-3)** và **nhóm dài (1-2-3-4)**. Ví dụ [[am-giai-truong|Đô trưởng]] hai [[quang|quãng 8]], tay phải đi lên:
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

## Bảng ngón bấm 12 âm giai trưởng (một quãng 8, đi lên)
Đi xuống thì đọc ngược lại. Số 1 là ngón cái, 5 là ngón út.
| Giọng | Tay phải | Tay trái |
|---|---|---|
| C, G, D, A, E | 1 2 3 1 2 3 4 5 | 5 4 3 2 1 3 2 1 |
| B | 1 2 3 1 2 3 4 5 | **4 3 2 1 4 3 2 1** |
| F | **1 2 3 4** 1 2 3 4 | 5 4 3 2 1 3 2 1 |
| B♭ | 4 1 2 3 1 2 3 4 | 3 2 1 4 3 2 1 3 |
| E♭ | 3 1 2 3 4 1 2 3 | 3 2 1 4 3 2 1 3 |
| A♭ | 3 4 1 2 3 1 2 3 | 3 2 1 4 3 2 1 3 |
| D♭ (C♯) | 2 3 1 2 3 4 1 2 | 3 2 1 4 3 2 1 3 |
| G♭ (F♯) | 2 3 4 1 2 3 1 2 | 4 3 2 1 3 2 1 4 |

Quy luật dễ nhớ:
- Các âm giai bắt đầu trên **phím trắng** dùng chung ngón bấm tay trái **5 4 3 2 1 3 2 1** — trừ **Si trưởng**.
- Với các âm giai bắt đầu trên **phím đen**, ngón cái **không bao giờ** đặt trên phím đen; tìm vị trí ngón 4 (mỗi tay một lần mỗi quãng 8) là nhớ cả âm giai.
- Ngón bấm tay phải các âm giai phím đen ít đồng nhất hơn, nên cần học thuộc từng giọng.

## Lộ trình luyện
Đi lần lượt qua các giọng theo [[vong-quang-nam]]; tập từng tay rồi hai tay; tăng tốc từ từ bằng [[nhip-do|máy đếm nhịp]] (xem [[kiem-soat-toc-do]]). Âm giai [[am-giai-cromatic|cromatic]] có quy tắc ngón riêng (ngón 3 trên phím đen). Bước tiếp theo: [[luyen-hop-am-rai]], [[ky-thuat-quang-tam]] và [[not-kep|âm giai nốt kép]].
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
Bắt đầu chậm với [[nhip-do|máy đếm nhịp]] (mỗi phách một nốt), rồi hai, rồi bốn nốt mỗi phách; luyện qua cả 12 giọng theo [[vong-quang-nam]]. Xem thêm [[kiem-soat-toc-do]].
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
Quãng 8 liên tiếp ở xa nhau là một dạng [[buoc-nhay-xa|bước nhảy]]. Khi 1 – 5 đã thoải mái, thử thêm **1 – 4** — đặc biệt hữu ích khi nối [[hop-am-ba|hợp âm]] với quãng 8. Chỉ dùng 1 – 5 thường hạn chế tốc độ, nhất là trên phím đen.
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
Trong [[ket-cau|kết cấu chủ điệu]], [[giai-dieu|giai điệu]] phải nổi lên trên phần đệm. Trên piano, đó là chuyện **kiểm soát trọng lượng** chứ không phải sức ngón.

## Trọng lượng cánh tay
- Trọng lượng cánh tay với người chơi piano giống như **hơi thở** với ca sĩ: nó chuyển từ nốt này sang nốt kia và tạo ra một đường giai điệu liền mạch.
- Tạo tiếng to chỉ bằng sức ngón tốn nhiều công hơn và tiếng không đẹp bằng.
- Uốn câu nhạc bằng cách **tăng dần trọng lượng tới đỉnh câu rồi giảm dần** (xem [[dien-dat-cau-nhac]]).

## Làm nổi nốt trên cùng của hợp âm
Trong [[hop-am-ba|hợp âm]], nốt cao nhất thường là giai điệu:
- Đánh nốt trên **nhanh và chắc** hơn; các nốt dưới nhấn **chậm và nhẹ** hơn.
- Ngón ngoài (ngón 4, 5) làm việc nhiều hơn ngón trong; cổ tay có thể **nghiêng nhẹ** về phía nốt trên.

## Luyện theo từng bước
1. Chơi riêng **bè trên**, giữ đúng [[ngon-bam|ngón bấm]] sẽ dùng trong hợp âm, để cảm nhận lượng trọng lượng cần thiết.
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
    also: ['musicianship'],
    aliases: ['đọc nốt', 'note reading', 'nốt mốc', 'landmark notes', 'đọc theo quãng', 'intervallic reading', 'đọc nhạc'],
    summary: 'Kết hợp hai cách: nhớ vài "nốt mốc" cố định, rồi đọc các nốt khác theo khoảng cách (quãng) từ mốc đó.',
    wiki: 'Musical_notation',
    refs: [
      ['Colourful Keys — Note identification methods', 'https://colourfulkeys.ie/note-identification-methods-one/'],
      ['Compose Create — An integrated approach to reading music', 'https://composecreate.com/an-integrated-approach-to-reading-music/'],
      ['Brent Hugh — Teaching note reading skills with flashcards', 'https://brenthugh.com/piano/flashcardteaching.html'],
      ['Hoffman Academy — Piano note flashcards', 'https://hoffmanacademy.com/store/learning-and-teaching-resources/piano-note-flashcards'],
    ],
    body: `
## Nốt mốc
Chọn vài nốt dễ nhận ra làm điểm neo trên [[khuong-nhac|khuông nhạc đôi]]. Các mốc thường dùng: **[[ban-phim|Đô giữa]] (C4)**, **Sol khoá Sol (G4 — dòng 2)**, **Fa khoá Fa (F3 — dòng 4)**, Đô trầm (C3) và Đô cao (C5). Các nốt Đô dễ nhận vì chúng đối xứng trên bản nhạc.

::staff treble C4 G4 C5 | Nốt mốc trên khoá Sol: C4 (dòng kẻ phụ), G4 (dòng 2), C5 (khe 3)
::staff bass C3 F3 C4 | Nốt mốc trên khoá Fa: C3 (khe 2), F3 (dòng 4), C4 (dòng kẻ phụ)

## Đọc theo quãng
Thay vì gọi tên từng nốt, đọc **khoảng cách** từ nốt trước:
- **[[giai-dieu|Liền bậc]]**: từ dòng sang khe kế bên (hoặc ngược lại) — đi một phím.
- **Nhảy quãng 3**: từ dòng sang dòng (hoặc khe sang khe) — bỏ qua một phím.
- Nốt viết **cao hơn** → tay đi sang **phải**; **thấp hơn** → sang **trái**.

## Kết hợp hai cách
1. Đặt tay vào một nốt mốc.
2. Đọc tiếp theo [[quang|quãng]] càng xa càng tốt.
3. Khi lạc, quay về mốc gần nhất rồi đọc tiếp.

Một mẹo bổ trợ: lướt qua một nhóm nốt trước để thấy **hướng đi** (lên, xuống, đứng yên), rồi mới gọi tên từ mốc.

## Bài tập thẻ nốt theo cấp
Vòng tập cơ bản: **giơ thẻ → chơi nốt đó trên đàn → nói [[not-nhac|tên nốt]]**. Mục tiêu chính là nối **ký hiệu – phím – âm thanh**; gọi được tên nốt có ích nhưng là thứ yếu.
| Cấp | Bộ thẻ | Cách tập |
|---|---|---|
| 1 | Các nốt Đô: C2, C3, **C4**, C5, C6 | Bắt đầu chỉ với **2–3 thẻ**, thuộc thẻ nào thì thêm thẻ tiếp theo |
| 2 | Thêm F2, F3 (khoá Fa), G4, G5 (khoá Sol) | Giống cấp 1 |
| 3 | Nốt mốc ± quãng 2 và quãng 3 | Đọc theo quãng từ mốc gần nhất |
| 4 | Cả bộ, **xáo trộn** mỗi lượt | Xáo để phải thật sự đọc, không đoán theo thứ tự |

::staff treble C4 G4 C5 G5 C6 | Nốt mốc khoá Sol cho cấp 1–2
::staff bass C2 F2 C3 F3 C4 | Nốt mốc khoá Fa cho cấp 1–2

Có thể dùng thẻ in sẵn (in trên giấy cứng) hoặc ứng dụng có hẹn giờ. Một số ứng dụng gợi ý tập **khoảng 10 phút mỗi ngày** và cho tắt đồng hồ khi mới học. Thời gian để đọc quen là ước tính của người bán thẻ (vài tuần đến vài tháng), không phải số liệu nghiên cứu.

## So với câu gợi nhớ
Giáo viên có quan điểm khác nhau: có người cho rằng câu gợi nhớ là cách chậm nhất với phần lớn học sinh piano; có người cho rằng học sinh dùng câu gợi nhớ vẫn sẽ đọc tốt hơn nếu học thêm cách nhận quãng. Xem cách đọc nốt từng khoá trong [[khoa-sol]], [[khoa-fa]]. Bước tiếp theo: [[thi-tau]].
`,
  },
  {
    slug: 'thi-tau',
    title: 'Thị tấu',
    category: 'technique',
    also: ['musicianship'],
    aliases: ['đọc thị tấu', 'sight-reading', 'sight reading', 'đọc nhạc tại chỗ', 'eye-hand span', 'đọc trước'],
    summary: 'Chơi một bản nhạc lần đầu nhìn thấy. Người thị tấu giỏi nhìn trước một khoảng xa hơn so với chỗ tay đang chơi.',
    wiki: 'Sight-reading',
    refs: [
      ['Scientific Reports (2019) — Eye-hand span is not an indicator of but a strategy for proficient sight-reading in piano performance', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6884463/'],
      ['PLoS ONE (2023) — The influence of executive functions on eye-hand span and piano performance during sight-reading', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10153706/'],
      ['Mishra (2014), Psychology of Music — Improving sightreading accuracy: a meta-analysis', 'https://profiles.umsl.edu/en/publications/improving-sightreading-accuracy-a-meta-analysis/'],
      ['Kopiez & Lee (2006) — Towards a dynamic model of skills involved in sight reading music (PDF)', 'https://edisciplinas.usp.br/pluginfile.php/5556036/mod_resource/content/0/Artigo-KopiezLee-DynamicModelSightReading-2006.pdf'],
    ],
    body: `
## Khoảng mắt – tay
**Khoảng mắt – tay** (eye-hand span) là khoảng cách giữa chỗ mắt đang đọc và chỗ tay đang chơi. Đây là thước đo được nghiên cứu nhiều nhất về thị tấu:
- Nhiều nghiên cứu ghi nhận người chơi được đánh giá cao hơn thường có **khoảng mắt – tay dài hơn**.
- Khoảng này **thay đổi theo độ khó**: bản dễ thì nhìn trước xa hơn; ở đoạn khó, người giỏi **dừng mắt nhiều lần hơn** tại chỗ khó.
- Một nghiên cứu năm 2019 với 30 nghệ sĩ piano chuyên nghiệp cho rằng khoảng mắt – tay **không chỉ là dấu hiệu của trình độ mà là một chiến lược** người thị tấu giỏi chủ động sử dụng.
- Nghiên cứu năm 2023 (39 người chơi piano) thấy **trí nhớ làm việc thính giác** dự báo khoảng mắt – tay, và khoảng mắt – tay dự báo chất lượng chơi.

Các nghiên cứu này có quy mô nhỏ và chủ yếu đo lường chứ chưa so sánh phương pháp luyện, nên chưa có "công thức" luyện thị tấu được kiểm chứng.

## Yếu tố nào dự báo khả năng thị tấu?
Nhóm của **Reinhard Kopiez và Ji In Lee** (2006 và các bài tiếp theo) đo 23 yếu tố ở người chơi piano. Tổ hợp dự báo tốt nhất gồm bốn yếu tố, cùng giải thích khoảng **60%** khác biệt:
- **Tốc độ [[ky-hieu-hoa-my|láy rền]]** (một thước đo tốc độ vận động),
- **Kinh nghiệm thị tấu tích luỹ đến 15 tuổi**,
- **Tốc độ xử lý thông tin**,
- **Khả năng nghe trong đầu** (inner hearing — xem [[tap-trong-dau]]).

Kết luận của họ: thị tấu giỏi là sự kết hợp của yếu tố **do luyện tập** (kinh nghiệm thị tấu, nghe trong đầu) và yếu tố **ít phụ thuộc luyện tập** (tốc độ xử lý). Nghĩa là **thị tấu thường xuyên từ nhỏ** rất quan trọng — tập bài cũ nhiều giờ không thay thế được.

## Phương pháp nào có hiệu quả?
**Mishra (2014)** tổng hợp 92 nghiên cứu can thiệp về thị tấu:
- Hiệu quả chung của các phương pháp luyện **khá nhỏ**; nhóm đối chứng cũng tiến bộ theo thời gian.
- Các loại có tác dụng tích cực rõ: **[[luyen-tai|luyện tai]]**, **đọc có kiểm soát**, **hoạt động sáng tạo** (như [[ngau-hung-piano|ngẫu hứng]]) và **hát / [[xuong-am]]**.
- Riêng về tiết tấu, các phương pháp dùng **hệ thống đếm** và **vận động cơ thể** có hiệu quả.

## Những kỹ năng nền giúp thị tấu
Phần này tổng hợp từ các bài khác trong thư viện — chúng là những gì người thị tấu phải xử lý tức thì:
- Đọc nốt bằng **mốc và [[quang|quãng]]** thay vì gọi tên từng nốt: [[doc-not-nhanh]].
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
- Với đoạn rất nhanh: để máy đếm theo **phân phách** (móc kép), rồi chuyển dần sang móc đơn và [[truong-do|nốt đen]].
- **Đếm hoặc hát** tiết tấu trước khi bật máy đếm nhịp, để tách việc hiểu nhịp khỏi việc điều khiển ngón.
- **Ghi âm** mình chơi cùng máy đếm nhịp rồi nghe lại — dễ phát hiện chỗ chạy nhanh hoặc chậm mà lúc chơi không nhận ra.

## Kết hợp chậm và nhanh
Không phải nguồn nào cũng chỉ khuyên "chậm rồi nhanh dần": một số giáo viên cho rằng hiệu quả nhất là **kết hợp** tập chậm với những lần thử ở tốc độ cao hơn mục tiêu, rồi quay về. Xem thêm [[phuong-phap-luyen-tap]].

Khi đã vững nhịp, sự co giãn có chủ đích ([[rubato]]) mới thực sự có ý nghĩa — xem [[dien-dat-cau-nhac]].
`,
  },
  {
    slug: 'phuong-phap-luyen-tap',
    title: 'Phương pháp luyện tập',
    category: 'technique',
    also: ['musicianship'],
    aliases: ['luyện tập hiệu quả', 'cách tập đàn', 'practice', 'interleaved practice', 'luyện xen kẽ', 'chia nhỏ', 'chunking', 'biến thể tiết tấu', 'tập tay riêng'],
    summary: 'Chia nhỏ đoạn khó, thay đổi cách tập (tiết tấu, tay riêng, tốc độ), chia thời gian thành nhiều buổi ngắn và luyện xen kẽ.',
    wiki: 'Practice_(learning_method)',
    refs: [
      ['Carter & Grahn (2016), Frontiers in Psychology — Optimizing music learning: interleaved practice', 'https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01251/text'],
      ['The Musician\'s Way — Varied, distributed and interleaved practice', 'https://www.musiciansway.com/blog/2017/10/varied-distributed-and-interleaved-practice/'],
      ['Practising the Piano — On dotted rhythms', 'https://practisingthepiano.com/on-dotted-rhythms/'],
      ['Duke, Simmons & Cash (2009), JRME — It\'s not how much; it\'s how (summary)', 'https://www.structural-learning.com/research-briefings/practise-the-hard-bit'],
      ['Princeton University (2014) — Becoming an expert takes more than practice (Macnamara et al.)', 'https://www.princeton.edu/news/2014/07/03/becoming-expert-takes-more-practice'],
      ['Macmillan Learning — Reflection on Ericsson\'s 10,000-hour study', 'https://community.macmillanlearning.com/t5/psychology-blog/reflection-on-anders-ericsson-s-10-000-hour-study-and-obituary/ba-p/11148'],
    ],
    body: `
## Tập "thế nào" quan trọng hơn tập "bao lâu"
Nghiên cứu của **Duke, Simmons và Cash (2009)** với 17 sinh viên piano trình độ cao cùng học một đoạn 3 [[so-chi-nhip|ô nhịp]]:
- **Thời gian tập** và **số lần chơi lại** **không** dự báo được kết quả hôm sau.
- Điều phân biệt người làm tốt nhất: **xác định chính xác chỗ khó**, rồi **lặp lại đúng chỗ đó** cho tới khi sửa xong — thay vì chơi lại cả đoạn.
- Lưu ý: nghiên cứu có tính **tương quan** (không phải thí nghiệm), mẫu nhỏ và chỉ kiểm tra sau một ngày.

## "Luyện tập có chủ đích" và huyền thoại 10.000 giờ
- **Ericsson, Krampe và Tesch-Römer (1993)** khảo sát sinh viên violin ở Học viện âm nhạc Tây Berlin. Họ gọi là **luyện tập có chủ đích** (deliberate practice) những hoạt động **có mục tiêu, tốn sức, không hẳn vui**, nhằm sửa điểm yếu. Nhóm "giỏi nhất" ước tính đã tích luỹ trung bình **hơn 10.000 giờ** tập một mình trước 20 tuổi. Số giờ là **ước tính hồi tưởng** của người được hỏi.
- Con số này bị phổ biến thành "**quy tắc 10.000 giờ**" — chính Ericsson cho rằng cách hiểu đó **xuyên tạc** nghiên cứu.
- **Macnamara, Hambrick và Oswald (2014)** tổng hợp 88 nghiên cứu: trong âm nhạc, luyện tập có chủ đích giải thích khoảng **21%** khác biệt về trình độ — quan trọng, nhưng **không phải tất cả**. Mối liên hệ yếu hơn khi đo chính xác hơn.
- Một nghiên cứu lặp lại năm 2019 (Macnamara và Maitra) **không tái hiện được** kết quả cốt lõi của nghiên cứu 1993.

Bài học cho người dạy: chất lượng buổi tập (mục tiêu rõ, tập trung vào chỗ sai) quan trọng hơn số giờ; và mỗi học sinh tiến bộ với tốc độ khác nhau vì nhiều yếu tố ngoài luyện tập.

## Luyện xen kẽ (interleaved)
Luyện **khối** là tập một thứ cho đến khi xong rồi mới chuyển; luyện **xen kẽ** là chuyển qua lại giữa các bài/đoạn.
- Nghiên cứu của Carter & Grahn (2016): 10 người chơi clarinet tập một bản theo kiểu khối, một bản theo kiểu xen kẽ (đổi bản mỗi 3 phút, tổng thời gian như nhau). Các bản tập xen kẽ được giám khảo **chấm điểm cao hơn rõ rệt**.
- Tuy vậy, người chơi vẫn **thích** tập khối hơn — vì xen kẽ đòi hỏi nhiều nỗ lực hơn và cảm giác tiến bộ trước mắt ít hơn.
- Một số tác giả cho rằng xen kẽ hợp nhất với bài **đã thuộc** và đang trau chuốt; bài mới nên học bằng cách khác trước.

Lưu ý: nghiên cứu có quy mô nhỏ (10 người).

## Luyện phân bổ (distributed)
Tập cùng một đoạn trong **nhiều buổi ngắn** trong ngày thay vì một buổi dài.

## Luyện biến đổi (varied)
Tiếp cận cùng một đoạn từ nhiều phía: **tay riêng rồi tay đôi** (xem [[phoi-hop-hai-tay]]), đổi tiết tấu, đổi tốc độ, và cả [[tap-trong-dau|tập trong đầu]].

## Biến thể tiết tấu
Một đoạn móc kép đều (ví dụ C–D–E–F–G–A–B–C) được tập theo:
- **Dài – ngắn** ([[cham-doi-dau-noi|chấm dôi]]): nốt dài cho thời gian chuẩn bị, nốt ngắn buộc động tác nhanh, gọn.
- **Ngắn – dài** (đảo ngược): luyện tập trung vào những nốt còn lại.
- Nhóm 3, 4, 5 nốt hoặc [[lien-ba]].

Giáo viên lưu ý: cách này hiệu quả khi dùng cẩn thận nhưng **không chữa được mọi vấn đề kỹ thuật**, và cần kết hợp thả lỏng để tránh [[suc-khoe-nguoi-choi-dan|căng cơ]].

## Chia nhỏ và nốt đích
Cắt câu dài thành từng **cụm** ngắn, mỗi cụm bắt đầu bằng một **nốt đích** rõ ràng; tập từng cụm rồi nối lại. Biết cấu trúc [[cau-nhac]] và [[motif]] giúp chọn chỗ cắt hợp lý.

Liên quan: [[kiem-soat-toc-do]], [[hoc-thuoc-bai]].
`,
  },
  {
    slug: 'hoc-thuoc-bai',
    title: 'Học thuộc bài',
    category: 'technique',
    also: ['musicianship'],
    aliases: ['chơi thuộc lòng', 'memorization', 'trí nhớ âm nhạc', 'nhớ bài', 'trí nhớ cơ bắp', 'muscle memory', 'quên bài'],
    summary: 'Bốn loại trí nhớ được dùng khi học thuộc: thính giác, thị giác, vận động (cơ bắp) và phân tích — dựa vào nhiều loại cùng lúc thì vững hơn.',
    wiki: 'Musical_memory',
    refs: [
      ['Li — Piano performance: strategies for score memorisation (City, University of London)', 'https://openaccess.city.ac.uk/id/eprint/8530/'],
      ['College Music Symposium — A multi-level approach to more secure memorization', 'https://symposium.music.org/volume-49/articles-1752877057/a-multi-level-approach-to-more-secure-memorization'],
      ['Durham University — Piano teachers\' approaches to memorisation (survey)', 'https://durham-repository.worktribe.com/OutputFile/2163728'],
      ['Chaffin (2002) — Practicing Perfection (UConn Music Lab, PDF)', 'https://musiclab.uconn.edu/wp-content/uploads/sites/290/2013/10/Practicing-Perfection-Chaffin-2002.pdf'],
      ['Chaffin, Demos & Crawford (2009) — How does the use of performance cues vary? (PDF)', 'https://musiclab.uconn.edu/wp-content/uploads/sites/290/2021/09/2009-ISPS-Chaffin-Demos-Crawford-PCsurveyHowDoesUsePCsVary.pdf'],
    ],
    body: `
## Bốn loại trí nhớ
| Loại | Nhớ cái gì |
|---|---|
| **Thính giác** | Âm thanh — "nghe" trước được bản nhạc trong đầu |
| **Thị giác** | Hình ảnh bản nhạc hoặc hình dạng tay trên [[ban-phim|bàn phím]] |
| **Vận động** (cơ bắp) | Chuỗi chuyển động của ngón và tay |
| **Phân tích** | Cấu trúc: [[hop-am-ba|hợp âm]], [[vong-hop-am]], [[hinh-thuc-am-nhac|hình thức]], [[mo-tien-hoa-am|mô tiến]] |

Các nhà sư phạm đầu [[thoi-ky-the-ky-20|thế kỷ 20]] (Hughes, [[lich-su-ky-thuat-piano|Matthay]]) chỉ nói đến ba loại đầu; trí nhớ **phân tích** (còn gọi là trí nhớ cấu trúc) được bổ sung sau, trong đó có công trình của Roger Chaffin và cộng sự.

## Đừng chỉ dựa vào "trí nhớ ngón tay"
Một khảo sát giáo viên piano [[day-tre-em|dạy trẻ em]] cho thấy phương pháp **vận động** và **phân tích** được dùng nhiều nhất. Các tác giả khác cảnh báo học sinh thường **dựa quá nhiều vào trí nhớ vận động** — loại dễ "đứt" nhất khi hồi hộp. Đa số tác giả khuyên kết hợp nhiều loại trí nhớ.

## Vì sao phân tích giúp nhớ?
Nghiên cứu về trí nhớ cho thấy nhạc sĩ có kinh nghiệm mã hoá thông tin nhanh hơn vì họ gắn nốt mới vào những **"cụm" quen thuộc** đã biết — chính là kiến thức lý thuyết trong thư viện này.

## "Mốc biểu diễn": nghiên cứu Chaffin – Imreh
Nhà tâm lý học Roger Chaffin theo dõi nghệ sĩ piano **Gabriela Imreh** học chương [[nhip-do|Presto]] trong *[[hinh-thuc-concerto|Concerto]] Ý* của [[johann-sebastian-bach|Bach]] (sách *Practicing Perfection*, 2002, viết cùng Mary Crawford):
- Imreh **ghi âm toàn bộ quá trình tập** và mô tả cấu trúc bài cùng các quyết định: **cơ bản** (như [[ngon-bam|ngón bấm]]), **diễn giải** (như tạo câu), và **mốc biểu diễn**.
- Bản nhạc **không quá khó nhưng khó thuộc**: ở tốc độ của cô — khoảng **14 nốt mỗi giây** — không có thời gian nghĩ từng nốt; chủ đề lặp lại nhiều lần (dạng [[rondo]] kiểu Ý) dễ khiến **rẽ nhầm**.
- Cách cô làm: **học cấu trúc hình thức trước**, rồi dùng nó làm "bản đồ" để gắn các **mốc biểu diễn** (performance cues) — những điểm trong bài mà người chơi **chủ ý chú tâm** khi biểu diễn. Các mốc được chọn và tập trong lúc luyện để chúng **tự hiện ra** khi chơi, giúp người chơi theo dõi và điều khiển những chuyển động tự động rất nhanh.

Áp dụng: đánh dấu lên bản nhạc các **ranh giới cấu trúc** (đầu đoạn, chỗ [[chuyen-giong]]), chỗ **đổi tay thế**, và ý đồ **biểu cảm**; tập bắt đầu chơi từ bất kỳ mốc nào. Đây cũng là "điểm bắt đầu lại" khi lỡ quên trên sân khấu (xem [[hoi-hop-bieu-dien]]).

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
Nghiên cứu ghi âm biểu diễn (ví dụ Demos, Lisboa & Chaffin, 2016, phân tích các bản [[johann-sebastian-bach|Bach]] của hai nghệ sĩ độc tấu) cho thấy **nhịp độ tạo thành hình vòm**: chậm hơn và kém ổn định ở **ranh giới câu**, nhanh và ổn định hơn ở **giữa câu**. Mẫu hình vòm này được ghi nhận ở nhiều tác phẩm và người chơi ở nhiều trình độ. Người biểu diễn cũng uốn **cường độ** theo câu để đánh dấu chỗ bắt đầu và kết thúc.

## Chậm lại ở cuối câu
Kéo dài nhẹ ở cuối câu là một xu hướng chung, gặp cả trong **lời nói** lẫn âm nhạc. Mô hình của Neil Todd cho rằng người biểu diễn dùng sự kéo dài này để làm **nghe thấy được cấu trúc nhóm** của bản nhạc — tức là [[cau-nhac]] và các tầng lớn hơn của [[hinh-thuc-am-nhac|hình thức]].

## Áp dụng khi chơi đàn
- Xác định [[cau-nhac|câu nhạc]] và **đỉnh câu**; dẫn [[cuong-do]] và trọng lượng cánh tay tới đỉnh rồi lắng xuống ([[lam-noi-giai-dieu]]).
- "Thở" ở [[cau-ket|chỗ kết câu]]: kéo nhẹ, nhấc tay mềm.
- [[nhip-do|Rubato]] phục vụ cấu trúc: co giãn quanh ranh giới câu, giữ ổn định ở giữa.
- Các [[cach-dien-tau|ký hiệu diễn tấu]] (legato, tenuto, accent) và [[thuat-ngu|thuật ngữ biểu cảm]] cho biết ý đồ của tác giả.

## Phong cách thay đổi theo thời gian
Một nghiên cứu 127 bản thu Étude Op. 25 số 1 của [[frederic-chopin|Chopin]] (1909–2016) thấy **tổng lượng [[rubato|co giãn nhịp độ]] không đổi**, nhưng **cách dùng** rubato thì thay đổi — các bản thu gần đây kéo dài cuối câu nhiều hơn. Nghĩa là "cách chơi biểu cảm" cũng mang dấu ấn từng thời kỳ (xem [[cac-thoi-ky]]).
`,
  },
  {
    slug: 'hoi-hop-bieu-dien',
    title: 'Hồi hộp khi biểu diễn',
    category: 'technique',
    also: ['musicianship'],
    aliases: ['run sân khấu', 'lo âu biểu diễn', 'performance anxiety', 'stage fright', 'sợ sân khấu', 'thi đàn'],
    summary: 'Lo âu biểu diễn gặp ở mọi trình độ; chuẩn bị kỹ, diễn thử, kỹ thuật thở và các liệu pháp tâm lý được nghiên cứu cho thấy có ích.',
    wiki: 'Stage_fright',
    refs: [
      ['Frontiers in Psychology (2025) — Systematic review of interventions for music performance anxiety', 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1507229/pdf'],
      ['PMC — Music educators\' strategies for music performance anxiety (review)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10426800'],
      ['Frontiers in Psychology (2023) — Music performance anxiety (review incl. Kenny\'s definition)', 'https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1143359/pdf'],
      ['ICSOM Senza Sordino — The 2015 musicians\' health survey results', 'https://www.icsom.org/senzasordino/2017/06/the-2015-musicians-health-survey-results/'],
      ['University of Iowa — Performance anxiety in musicians: medical management', 'https://iowaprotocols.medicine.uiowa.edu/protocols/performance-anxiety-musicians-part-2-medical-management'],
      ['Quality in Sport (2026) — Beta-blockers in music performance anxiety: narrative review', 'https://apcz.umk.pl/QS/article/view/73762'],
    ],
    body: `
## Định nghĩa và mức độ phổ biến
Nhà tâm lý học **Dianna Kenny** — tác giả thang đo lo âu biểu diễn được dùng rộng rãi nhất — định nghĩa lo âu biểu diễn âm nhạc là sự **lo lắng rõ rệt và dai dẳng** liên quan đến biểu diễn, hình thành qua những trải nghiệm cụ thể, biểu hiện qua **cảm xúc, suy nghĩ, cơ thể và hành vi**.
- Ở nhạc công dàn nhạc chuyên nghiệp, các nghiên cứu ghi nhận tỉ lệ khoảng **15–25%**; khảo sát của Kenny ở các dàn nhạc Úc thấy **một nửa** báo cáo lo âu **vừa đến nặng**. Kenny lưu ý chưa có phương pháp đo chuẩn, nên các con số khó so sánh.
- Năm 1987, khảo sát của ICSOM (các dàn nhạc lớn ở Mỹ) cho thấy **sợ sân khấu là vấn đề sức khoẻ phổ biến nhất**.

Nghĩa là ngay cả nhạc công chuyên nghiệp cũng hồi hộp — giáo viên nên nói điều này với học sinh để các em không nghĩ mình "có vấn đề".

## Nguyên nhân thường gặp
Một nghiên cứu định tính với người chơi piano ghi nhận các nguyên nhân: **chuẩn bị chưa đủ**, kỳ vọng bản thân quá cao, áp lực từ xã hội, môi trường biểu diễn, và độ khó của tác phẩm. Lo âu biểu diễn được ghi nhận ở cả người lớn, thanh thiếu niên và trẻ em.

## Những gì nghiên cứu cho thấy có ích
- **Tổng quan hệ thống năm 2025** (các nghiên cứu 2016–2023): liệu pháp chấp nhận và cam kết (ACT), liệu pháp nhận thức – hành vi (CBT), chánh niệm và yoga giúp **giảm lo âu rõ rệt**.
- **Tổng quan về phương pháp của giáo viên**: được dùng nhiều nhất là **diễn thử** (biểu diễn [[doi-am|mô phỏng]]), thái độ tích cực, **chuẩn bị kỹ** và **kỹ thuật thở**.

## Áp dụng cho học sinh piano
- Chuẩn bị bài thật vững, học thuộc bằng nhiều loại trí nhớ ([[hoc-thuoc-bai]]).
- **Diễn thử** trước gia đình, bạn bè, hoặc ghi hình như thật.
- Tập điểm "bắt đầu lại" ở từng [[cau-nhac|câu nhạc]] để không bị dừng hẳn nếu sai.

## Lưu ý
**Thuốc chẹn beta** (như propranolol): khảo sát ICSOM năm 2015 (không bình duyệt) cho biết **70%** nhạc công dàn nhạc lớn ở Mỹ từng thử. Một tổng quan năm 2026 kết luận thuốc chỉ có **vai trò hạn chế**, chủ yếu giảm **triệu chứng cơ thể** ngắn hạn, **không phải** cách điều trị thường quy hay toàn diện; bằng chứng còn yếu. Chỉ dùng khi có **chỉ định của bác sĩ**, và không dành cho trẻ em tự ý dùng.

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
      ['Bragge et al. (2006), Occupational Medicine — Systematic review of PRMDs in pianists', 'https://academic.oup.com/occmed/article/56/1/28/1374563'],
      ['Springer (2019) — review of musculoskeletal disorders in musicians', 'https://link.springer.com/article/10.1007/s00420-019-01467-8'],
    ],
    body: `
## Phổ biến đến mức nào?
- Tổng quan hệ thống của **Bragge và cộng sự (2006)** về người chơi piano: tỉ lệ mắc rối loạn cơ xương liên quan đến chơi đàn dao động **từ 26% đến 93%** tuỳ nghiên cứu.
- Một khảo sát sinh viên nhạc viện ở Úc: **68%** người chơi piano có triệu chứng **ảnh hưởng đến việc chơi đàn** ngay trong tuần trước khảo sát.
- Khoảng dao động rộng chủ yếu do các nghiên cứu **định nghĩa khác nhau** thế nào là "rối loạn liên quan đến chơi đàn".

Thông điệp cho giáo viên: đau khi chơi đàn **rất phổ biến**, không phải chuyện hiếm — cần hỏi học sinh thường xuyên và dạy cách phòng tránh từ sớm. Người tay nhỏ: xem [[ban-tay-nho]].

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

Trong nhạc [[doi-am|đối âm]] (ví dụ [[fugue]] của [[johann-sebastian-bach|Bach]]), các bè khác có thể buộc phải dùng cặp ngón kém thuận; một số người chơi còn **đổi cặp ngón giữa chừng** trong láy rền dài (ví dụ 3-1-3-2).

## Thả lỏng là yêu cầu số một
- [[suc-khoe-nguoi-choi-dan|Căng cơ]] tích tụ dần trong láy rền dài — chú ý giữ ngón mềm.
- **Trọng lượng cánh tay cản trở** láy rền: hãy cảm giác như tay **lơ lửng nhẹ** trên phím.
- Một giáo viên gợi ý **hít vào trước** khi láy và bắt đầu láy khi thở ra.

## Cách luyện
- Bắt đầu chậm, **ngón luôn [[ky-thuat-cham-phim|chạm phím]]**: nhấn nhẹ phím, rồi nâng phím lên nhẹ nhàng mà không nhấc ngón khỏi phím.
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
**Ủng hộ** cho rằng: luyện **lực, độ đều** của ngón, sự [[lam-noi-giai-dieu|cân bằng hai tay]] và sức bền; là bài **khởi động** hằng ngày tốt.

**Phản đối** cho rằng:
- Mọi hoạt động chơi đàn đều luyện lực và độ độc lập của ngón — Hanon không có gì đặc biệt.
- Ngón tay **không thể đều và độc lập tuyệt đối** về mặt giải phẫu, dù lặp lại bao nhiêu.
- Hanon yêu cầu giữ yên cánh tay và cổ tay, chỉ cử động ngón — trong khi kỹ thuật hiện đại coi trọng **sự phối hợp cả cánh tay**. Một số nhà sư phạm (như Abby Whiteside) còn coi chúng là **có hại** nếu tập sai.

**Trung dung**: dùng có chọn lọc cho vấn đề cụ thể, ví dụ một giáo viên dùng bài 32–37 để sửa ngón cái cứng hoặc "sập".

## Czerny
[[Czerny|Carl Czerny]] được gọi là "cha đẻ của kỹ thuật piano hiện đại". Các tuyển tập như **Op. 599** (cho người mới học), **Op. 299**, **Op. 740** và **Op. 802** (có phần dành riêng cho **độc lập từng ngón**) thường được đánh giá là **có tính âm nhạc hơn** bài tập ngón thuần tuý — dù một số người thấy chúng hơi nhàm và khuyên học kèm tác phẩm phong phú hơn.

## Kết luận thực tế
- Mục tiêu (kỹ thuật vững, ngón độc lập) đáng theo đuổi; tranh cãi là **con đường**.
- Lựa chọn được nhiều giáo viên khuyên: [[luyen-am-giai|âm giai]], [[luyen-hop-am-rai|hợp âm rải]], [[hop-am-ba|hợp âm]] và **tác phẩm thật**.
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
1. Nhảy từ **nốt dưới** của [[hop-am-ba|hợp âm]] này sang nốt dưới của hợp âm kia, giữ nguyên ngón, cho đến khi làm được khi nhắm mắt.
2. Lặp lại với nốt giữa, rồi nốt trên.
3. Thêm dần nốt cho đến đủ hợp âm.

[[dem-hat-piano|Kiểu đệm]] stride trong ragtime (xem [[ket-cau]], [[Joplin]]) là bài luyện bước nhảy kinh điển. Lưu ý: các bài tập trên chủ yếu từ giáo viên và diễn đàn, chưa phải nghiên cứu chính thức.
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
Nốt lặp **rất nhanh** gần như không thể chơi bằng một ngón. [[ngon-bam|Ngón bấm]] thường được khuyên là **3 – 2 – 1** lặp vòng — nhưng điều quan trọng nhất là tìm ra ngón bấm hợp với tay mình.

## Kỹ thuật
- Giữ ngón **sát ngay trên phím** — không có thời gian cho động tác thừa.
- Bàn tay khá yên, ngón cong tròn, đánh vào **giữa phím**.
- Tập chậm với [[nhip-do|máy đếm nhịp]] rồi tăng dần (xem [[kiem-soat-toc-do]]).
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
    also: ['jazz', 'improvisation'],
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
| **[[hop-am-ba|Hợp âm]] khối** | Đánh cả hợp âm cùng lúc | Kiểu cơ bản nhất, mọi [[the-loai|thể loại]] |
| **[[luyen-hop-am-rai|Hợp âm rải]]** | Đánh lần lượt từng nốt của hợp âm | Ballad, nhạc trữ tình |
| **Bass Alberti** | Thấp – cao – giữa – cao (C–G–E–G) | Nhịp 4/4, móc đơn hoặc [[truong-do|nốt đen]]; đặc trưng thời Cổ điển nhưng dùng được ở nhiều phong cách |
| **Đệm valse** | Nốt trầm một mình, rồi hai nốt trên hai lần (trầm – hợp âm – hợp âm) | Nhịp 3/4 |
| **Đệm "pop"** | Đung đưa giữa nốt dưới và các nốt trên của hợp âm | Pop, ballad |
| **Stride** | Nốt bass ở phách 1 và 3, hợp âm ở phách 2 và 4 — tay trái nhảy xa liên tục | Ragtime, jazz Harlem |

::keyboard C3 E3 G3 | Hợp âm C để luyện các kiểu đệm: thử khối, rải, Alberti (C–G–E–G)

Các kiểu này chính là các dạng [[ket-cau|kết cấu chủ điệu]]. Đệm Alberti và stride là bài tập tốt cho [[buoc-nhay-xa]] và [[dan-giong]].

## Stride
Phong cách jazz bắt nguồn từ ragtime. Nốt bass thường là nốt gốc hoặc nốt 5, có thể chơi đơn, [[quang|quãng 8]] hoặc quãng 10; hợp âm ở phách 2 và 4 thường gọn 2–3 nốt (thường gốc, 3, 7 — xem [[xep-hop-am|shell voicing]]). Tay trái nhảy liên tục giúp tay phải tự do chơi [[giai-dieu|giai điệu]] và [[ngau-hung-piano|ngẫu hứng]]. [[james-p-johnson|James P. Johnson]] được coi là "cha đẻ" của stride; học trò ông, [[fats-waller|Fats Waller]], đưa stride đến với công chúng (xem [[nghe-si-piano-jazz]]).

## Đệm từ bản nhạc hợp âm (lead sheet)
Bản lead sheet chỉ ghi giai điệu và [[ky-hieu-hop-am]]. Lộ trình tay trái được khuyên:
1. Chơi **một nốt** — nốt gốc của hợp âm.
2. Chơi **quãng 8**.
3. Chơi **cả hợp âm**, rồi chuyển sang các kiểu đệm ở bảng trên.

Ghi nhớ trước vài hợp âm hay gặp trong bài và luyện chuyển qua lại giữa chúng (xem [[vong-hop-am]], [[the-dao-hop-am]]).

Các điệu có tiết tấu đặc trưng (slow rock 12/8, bossa nova, cha-cha-cha): [[dieu-dem-pho-bien]].

## Tay trái theo thể loại
Trong jazz, [[blues-12-nhip|blues]] và nhạc cổ điển, tay trái thường [[kiem-soat-toc-do|giữ nhịp]] đều bằng hợp âm rải, [[ostinato]] hoặc đường bass. Trong jazz, **walking bass** là đường bass đi liền bậc lên xuống theo hợp âm.
`,
  },
  {
    slug: 'dieu-dem-pho-bien',
    title: 'Các điệu đệm thông dụng',
    category: 'technique',
    aliases: ['điệu đệm', 'tiết điệu', 'slow rock', 'bossa nova', 'cha cha cha', 'chachacha', 'clave', 'nhịp 12/8', 'ballad'],
    summary: 'Slow rock (12/8, bốn phách lớn chia ba), bossa nova (dựa trên mẫu clave) và cha-cha-cha (nhấn "cha-cha-cha" ở phách 3 – 4) — cùng cách luyện từng điệu trên piano.',
    refs: [
      ['Soundbrenner — Rhythm library: 12/8', 'https://www.soundbrenner.com/blogs/articles/rhythm-library-12-8'],
      ['Yamaha — Exploring Latin rhythms', 'https://hub.yamaha.com/keyboards/k-how-to/exploring-latin-rhythms'],
      ['UJAM — How to make bossa nova', 'https://www.ujam.com/tutorials/how-to-make-bossa-nova/'],
      ['PianoGroove — Cha-cha-cha & mambo', 'https://pianogroove.com/jazz-piano-lessons/cha-cha-cha-mambo-tutorial/'],
    ],
    body: `
Các kiểu đệm cơ bản (khối, rải, Alberti, valse, stride) ở [[dem-hat-piano]]. Bài này nói về các **điệu** có tiết tấu đặc trưng.

## Slow rock và ballad 12/8
- 12/8 là [[so-chi-nhip|nhịp kép]] **bốn phách lớn**, mỗi phách chia ba: đếm "**1** và a **2** và a **3** và a **4** và a".
- Bắt đầu bằng cảm giác **3 + 3 + 3 + 3**; nhấn mạnh nhất ở phách 1, nhưng cả bốn phách đều là phách chính.
- Phân vai thường gặp: bè trầm giữ **bốn phách lớn**, còn piano (hoặc trống) chơi hình **chia ba** liên tục.
- Đừng nhầm với **6/8** — chỉ có **hai** phách lớn. 12/8 chậm (dưới khoảng 100 phách/phút) cũng dùng cho jazz ballad.

## Bossa nova
- Xây dựng trên một mẫu **clave**; mẫu clave bossa nova thường được gắn với Antonio Carlos Jobim (dù chính ông chỉ coi đó là một [[motif|motif]] tiết tấu).
- Một bài học gợi ý tay trái: nốt gốc và nốt 5 của [[hop-am-ba|hợp âm]], nhấn ở các [[truong-do|nốt móc đơn]] thứ 1, 4–5 và 8 của ô nhịp. Tay phải [[dao-phach|đảo phách]]: các móc đơn thứ 1, 4, 7 của ô thứ nhất và 3, 6 của ô thứ hai (giáo viên khác đặt 3 và 5).
- Yamaha luyện theo thứ tự: clave son 2-3, rồi 3-2, rồi mẫu đệm bossa; dùng [[xep-hop-am|thế bấm hợp âm]] hai tay cho tiếng đầy hơn.
- [[ky-thuat-cham-phim|Chạm phím]] **nhẹ**, tiết tấu tiết chế, hợp âm nối mượt (thường dùng [[hop-am-bay|hợp âm 7]] và [[hop-am-mo-rong|9]]).

## Cha-cha-cha
- Ra đời từ sự pha trộn giữa son và danzón của Cuba; có tiết tấu và đường bass đặc trưng.
- Phách 3 và 4 mang tiếng "**cha-cha-cha**" đặc trưng.
- Một cách đệm: tay trái nốt gốc ở phách 1, nốt 5 ở phách 3, lặp ở phách 4; tay phải có **hai móc đơn ở phách 2**.
- Lời khuyên: học **đường bass trước**, rồi thêm hoà âm; luyện trên vòng [[vong-hop-am|ii – V – I]].

## Cách luyện chung
1. Vỗ tay hoặc đếm to tiết tấu trước (xem [[kiem-soat-toc-do]]).
2. Chơi tay trái riêng trên một hợp âm, rồi trên cả [[vong-hop-am]].
3. Thêm tay phải; nghe bản thu mẫu và bắt chước cảm giác nhịp — các nguồn khác nhau ở chi tiết nhỏ (vị trí nhấn của clave, tay nào chơi phách nghịch).
`,
  },
  {
    slug: 'ky-thuat-cham-phim',
    title: 'Kỹ thuật chạm phím: legato, staccato, portato',
    category: 'technique',
    aliases: ['chạm phím', 'touch', 'kiểu chạm phím', 'legato ngón', 'staccato ngón', 'staccato cổ tay', 'staccato cánh tay', 'legatissimo', 'non-legato'],
    summary: 'Cách tạo ra các kiểu nối – ngắt trên phím đàn: legato chồng ngón, staccato bằng ngón, cổ tay hoặc cánh tay, và portato nằm giữa hai loại.',
    refs: [
      ['Practising the Piano — On touch (part one)', 'https://practisingthepiano.com/on-touch-part-one/'],
      ['Practising the Piano — Some thoughts on legato', 'https://practisingthepiano.com/some-thoughts-on-legato/'],
      ['Melanie Spanswick — Approaches to staccato playing', 'https://melaniespanswick.com/2017/08/19/approaches-to-staccato-playing/'],
      ['Melanie Spanswick — 5 top tips to improve wrist staccato', 'https://melaniespanswick.com/2015/04/09/5-top-tips-to-improve-wrist-staccato'],
      ['Living Pianos — How to play portato on the piano', 'https://www.livingpianos.com/articles/how-to-play-portato-portamento-on-the-piano/'],
    ],
    body: `
Ký hiệu nối – ngắt được giải thích ở [[cach-dien-tau]]. Bài này nói về **cách tay tạo ra** chúng.

## Legato — các mức độ nối
Piano không thể nối âm thật như giọng hát: mỗi nốt tắt dần ngay sau khi đánh. Legato trên piano là một **ảo giác** do cách nhả và đánh phím tạo ra.
| Mức | Cách làm |
|---|---|
| **Legato thường** | Ngón đang giữ **nhả phím đúng lúc** nốt sau vang lên |
| **Legato chồng** (legatissimo) | Ngón trước **chỉ nhả sau khi** nốt sau đã vang, nhả từ từ — cho [[giai-dieu|giai điệu]] "hát" |
| **"Pedal ngón"** | Giữ hẳn một số nốt (thường là nốt [[hop-am-ba|hợp âm]]) lâu hơn giá trị viết, như một chiếc pedal nhỏ |

Phím sau càng được nhấn **sớm** trong lúc phím trước đang nhả thì càng liền. Mức chồng nhiều hay ít tuỳ ngữ cảnh, **âm vực** (âm trầm ngân lâu nên dễ bị nhoè) và thẩm mỹ người chơi. Khi không thể nối bằng ngón, có thể dùng **đổi ngón trên phím** (xem [[choi-phuc-dieu]]) hoặc [[ban-dap|pedal]].

Lưu ý với người mới: **giữ ngón quá giá trị nốt** một cách vô tình là thói quen xấu, gây nhoè — khác với legato chồng có chủ ý.

## Staccato — bốn kiểu
| Kiểu | Dùng khi | Ghi chú |
|---|---|---|
| **Sát phím** | Đoạn nhẹ, nhanh | Ngón gần như không rời mặt phím |
| **Ngón** | Đoạn **nhanh** | Ngón bật nhẹ lên (hoặc "búng" về phía lòng bàn tay) ngay sau khi đánh |
| **Cổ tay** | **Hợp âm**, nhóm 2 nốt trở lên ngắn gọn | Phải đi kèm cẳng tay, cánh tay và thân người **linh hoạt**, không chỉ "nảy cổ tay cứng" |
| **Cánh tay** | Mọi nốt cần **nặng đều**, tiếng nảy giòn | Thả rơi cánh tay tự do rồi **bật lên** theo lực nảy |

Các giáo viên **không thống nhất** động tác nào là chính: có người coi cổ tay là quan trọng nhất, có người khuyên tránh staccato chỉ bằng cổ tay vì dễ kéo ngón lên và gây căng. Điểm chung: chọn theo **âm thanh muốn có**, và cơ thể luôn thả lỏng — cánh tay, cổ tay đứng yên hoàn toàn sẽ nhanh chóng sinh [[suc-khoe-nguoi-choi-dan|căng cơ]].

**Jeu perlé** ("chơi như ngọc trai") là một kiểu chạm rất nhẹ, mỗi nốt **tách nhau một chút xíu**, hợp với chuỗi nốt nhanh kiểu [[wolfgang-amadeus-mozart|Mozart]] — đặc trưng của [[truong-phai-piano|trường phái Pháp]].

## Portato — giữa legato và staccato
Ký hiệu: **chấm staccato dưới dấu luyến**. Nốt được giữ **gần đủ dài nhưng hơi tách**, mỗi nốt một **động tác cánh tay riêng** qua cổ tay mềm. Một cách khác là để [[ban-dap|pedal]] nối âm, còn các động tác riêng tạo "xung" cho từng nốt; nhiều giáo viên khuyên học không pedal trước. Đừng nhầm với *portamento* — trượt cao độ, piano không làm được.

Liên quan: [[lam-noi-giai-dieu]], [[dien-dat-cau-nhac]], [[lich-su-ky-thuat-piano]].
`,
  },
  {
    slug: 'phoi-hop-hai-tay',
    title: 'Phối hợp hai tay',
    category: 'technique',
    aliases: ['độc lập hai tay', 'hand independence', 'hai tay độc lập', 'tập hai tay', 'ghép tay', '2 chọi 3', 'two against three'],
    summary: 'Hai tay chơi những việc khác nhau cùng lúc — khác tiết tấu, khác cường độ, khác cách chạm phím. Tập tay riêng, rồi ghép dần, đếm to và giữ một mạch phách chung.',
    refs: [
      ['Key Notes — How to practice polyrhythms', 'https://www.key-notes.com/blog/how-to-practice-polyrhythms'],
      ['Virtual Sheet Music (Robert Estrin) — How to play polyrhythms', 'https://www.virtualsheetmusic.com/experts/robert/polyrhythms/'],
      ['tonebase — How to play complicated polyrhythms', 'https://www.tonebase.co/piano-blog-posts/how-to-play-complicated-polyrhythms'],
      ['Living Pianos — How to play one hand louder than the other', 'https://www.livingpianos.com/articles/how-to-play-one-hand-louder-than-the-other-on-the-piano/'],
    ],
    body: `
## Ba loại "độc lập"
1. **Tiết tấu**: một tay móc đơn, tay kia [[lien-ba]]; hoặc một tay giữ nốt dài trong khi tay kia chạy.
2. **[[cuong-do|Cường độ]]**: [[giai-dieu|giai điệu]] to, đệm nhỏ — xem [[lam-noi-giai-dieu]].
3. **Cách chạm phím**: một tay legato, tay kia [[cach-dien-tau|staccato]] — xem [[ky-thuat-cham-phim]].

## Tập tay riêng rồi ghép
- Tập **từng tay** đến khi vững, dùng **đúng [[ngon-bam|ngón bấm]]** sẽ dùng khi ghép.
- Ghép ở tốc độ **chậm hơn nhiều** so với tốc độ tay riêng (xem [[kiem-soat-toc-do]]).
- Ghép **từng đoạn ngắn** rồi nối lại (xem [[phuong-phap-luyen-tap]]).
- **Đếm to** phân phách — ví dụ "1 và 2 và": tay phải ở mỗi số, tay trái ở mỗi âm tiết — để thấy rõ chỗ hai tay gặp nhau.

## Hai chọi ba (2:3)
Một tay chia phách làm 2, tay kia làm 3 (xem lý thuyết ở [[da-nhip]]):
1. **Không cần đàn**: bật [[nhip-do|máy đếm nhịp]] theo nhịp 3, vỗ tay 2 tiếng đều nhau trong mỗi nhóm 3.
2. **Câu đọc**: đọc "**George Wash-ing-ton**" — các âm tiết rơi đúng vào chỗ gõ. Nốt thứ hai của nhóm 2 rơi **chính giữa** hai nốt cuối của nhóm 3.
3. **Lên đàn**: tay phải liên ba, tay trái hai nốt; khi đã quen thì **đổi vai** hai tay.
4. **Kiểm tra bằng tai**: một tay gõ lên nắp đàn, tay kia chơi — nghe xem nhóm 3 có đều không.

Sau 2:3, bước tiếp theo thường là **3:4**. Nhiều người thấy một chiều (3 ở tay này, 4 ở tay kia) dễ hơn chiều ngược lại, nên cần tập cả hai.

[[lo-trinh-tac-pham|Inventions]] 2 bè của [[Bach]] là chất liệu kinh điển để luyện hai tay như hai giai điệu ngang hàng — xem [[choi-phuc-dieu]].
`,
  },
  {
    slug: 'not-kep',
    title: 'Nốt kép: quãng 3 và quãng 6',
    category: 'technique',
    aliases: ['nốt kép', 'double notes', 'quãng 3 kép', 'double thirds', 'quãng 6 kép', 'double sixths', 'âm giai quãng 3'],
    summary: 'Hai nốt cùng lúc trong một tay chạy liền nhau. Không có ngón bấm chuẩn duy nhất; tách hai bè để tập, giữ bè trên legato và tăng tốc từng nấc.',
    refs: [
      ['Living Pianos — How to approach thirds', 'https://www.livingpianos.com/articles/how-to-approach-thirds/'],
      ['Pianist Magazine — Tips on fast runs of thirds', 'https://www.pianistmagazine.com/blogs/any-tips-or-advice-on-how-to-play-fast-runs-of-thirds-and-how-to-pract/'],
      ['tonebase — Jeffrey Biegel teaches the Thirds Étude Op. 25 No. 6', 'https://tonebase.co/piano/courses/jeffrey-biegel-teaches-thirds-etude-op-25-no-6-composed-by-chopin'],
      ['Wikipedia — Étude Op. 25, No. 8 (Chopin)', 'https://en.wikipedia.org/wiki/%C3%89tude_Op._25,_No._8_(Chopin)'],
      ['PTNA Piano Encyclopedia — Chopin Étude Op. 25 No. 8', 'https://enc.piano.or.jp/en/musics/22821'],
    ],
    body: `
**Nốt kép** là hai nốt chơi cùng lúc bằng một tay, nối thành chuỗi — phổ biến nhất là [[quang|quãng 3]] và quãng 6.

## Khó ở đâu?
- Một tay phải chơi **hai bè**, mỗi bè cần [[cach-dien-tau|legato]] riêng.
- Bè trên của quãng 3 tay phải thường rơi vào **ngón 4 và 5** — hai ngón yếu nhất.
- **Không có [[ngon-bam|ngón bấm]] chuẩn** cho quãng 3 như với [[luyen-am-giai|âm giai]] đơn; ngón bấm còn khác nhau giữa các [[an-ban-urtext|ấn bản]], nên phải thử để tìm cách hợp tay.

## Ngón bấm quãng 6 (khởi điểm)
Theo bách khoa piano PTNA: **tay phải** dùng ngón 1 – 2 cho **bè trong**, ngón 3 – 4 – 5 cho **bè ngoài**; **tay trái** tương tự (3 – 4 – 5 bè ngoài, 1 – 2 bè trong). Ngón bấm cụ thể tuỳ [[cau-nhac|đoạn nhạc]] và ấn bản.

## Cách tập
1. **Tách bè**: chơi riêng bè trên, rồi riêng bè dưới — **luôn dùng đúng ngón** sẽ dùng khi chơi cả hai.
2. **Legato trên, staccato dưới**: để bè trên "hát" (thường là [[giai-dieu|giai điệu]]), tập bè trên legato còn bè dưới staccato — lời khuyên của Jeffrey Biegel cho Étude quãng 3 của Chopin.
3. **Bỏ bớt nốt**: chơi bè trên với cách một nốt bè dưới, rồi chơi phần nốt đã bỏ.
4. **Rất chậm**, đánh **sâu tới đáy phím** khi ghép hai bè; giữ [[nhip-do|máy đếm nhịp]] và tăng **từng nấc** khi đã thật chắc (xem [[kiem-soat-toc-do]]).

Các giáo viên khác nhau về việc có nên tập **âm giai quãng 3** riêng: có người cho là hữu ích, có người khuyên rút bài tập từ chính tác phẩm.

## Hai Étude kinh điển của Chopin
- **Op. 25 số 6** (Sol♯ thứ) — Étude **quãng 3**, tay phải chạy quãng 3 liên tục, kể cả quãng 3 **[[am-giai-cromatic|cromatic]]**.
- **Op. 25 số 8** (Rê♭ trưởng) — Étude **quãng 6**, chuỗi quãng 6 đi lên, đi xuống và cromatic không ngắt, ở **cả hai tay**.

Xem [[Chopin]], [[the-loai|thể loại étude]].
`,
  },
  {
    slug: 'choi-phuc-dieu',
    title: 'Chơi nhạc phức điệu',
    category: 'technique',
    also: ['improvisation'],
    aliases: ['chơi Bach', 'chơi nhiều bè', 'đổi ngón trên phím', 'finger substitution', 'thay ngón im lặng', 'chơi fugue', 'giữ bè'],
    summary: 'Một tay có thể phải giữ hai bè; người chơi tách từng bè để nghe và tập, dùng ngón bấm và đổi ngón trên phím để giữ các bè đúng độ dài.',
    refs: [
      ['Wikipedia — Inventions and Sinfonias (Bach)', 'https://en.wikipedia.org/wiki/Inventions_and_Sinfonias'],
      ['Bärenreiter — Inventions and Sinfonias, preface (G. von Dadelsen)', 'https://www.barenreiter.co.uk/prefaces/9790006465811_Innenansicht.pdf'],
      ['The Diapason — Sense and nonsense about silent finger substitution', 'https://thediapason.com/sense-and-nonsense-about-silent-finger-substitution-and-pedal-technique-nineteenth-century'],
      ['Organduo — How to use finger substitution to improve line', 'https://www.organduo.lt/blog/askvidasandausra-133-how-to-use-finger-substitution-to-improve-line'],
    ],
    body: `
Trong [[ket-cau|phức điệu]] (canon, invention, [[fugue]]), các bè là những [[giai-dieu|giai điệu]] **ngang hàng**. Trên piano, mười ngón phải chia nhau hai, ba, có khi bốn bè.

## Mục tiêu: mỗi bè "hát" như một giọng
Trang tiêu đề Inventions và Sinfonias của [[Bach]] (1723) nói rõ mục đích: học chơi **hai bè rồi ba bè** sạch sẽ, và **trên hết là chơi *[[thuat-ngu|cantabile]]*** — mỗi bè được tạo câu như một ca sĩ: có cách diễn tấu, nhấn nốt chính, và **ngắt thở** đúng chỗ. Lý thuyết: [[doi-am]], [[doi-am-kep]].

## Tách bè để tập
- Chơi **từng bè riêng** với đúng [[cach-dien-tau|cách diễn tấu]] của nó; nếu có thể, **hát** một bè trong khi chơi bè kia.
- Ghép **từng cặp bè**, rồi mới cả ba.
- Khi ghép, luôn biết **bè nào đang mang chủ đề** và bè nào làm nền tiết tấu.

## Hai bè trong một tay
Một tay có thể vừa giữ nốt dài của bè trên vừa chạy bè dưới. Nốt giữ phải **giữ đúng giá trị** — không nhấc sớm vì tay cần di chuyển.

## Đổi ngón trên phím
**Đổi ngón im lặng**: đang giữ một phím, thay ngón này bằng ngón khác **mà không nhả phím**, để giải phóng ngón cho nốt tiếp theo. Việc này không tạo ra âm thanh, nên chọn ngón nào là chuyện **thoải mái và chắc chắn**.

Các giáo viên organ (nhạc cụ dùng kỹ thuật này nhiều nhất) lại cho rằng nhạc [[thoi-ky-baroque|Baroque]] **thường không cần** đổi ngón: Bach thường được chơi với **legato có ngắt** hoặc [[ky-thuat-cham-phim|non-legato]], nên phần lớn đoạn hai bè một tay vẫn chơi được không đổi ngón. Ngoại lệ thường gặp là ở **[[cau-ket|kết]]** có thêm bè. Gợi ý thực tế: bắt đầu không đổi ngón; chỉ thêm khi một bè buộc phải giữ trong lúc bè kia chạy.

Lộ trình tác phẩm theo trình độ: [[lo-trinh-tac-pham]]. Phân tích một [[the-loai|prelude]] của Bach: [[phan-tich-prelude-do-truong]].
`,
  },
  {
    slug: 'tap-trong-dau',
    title: 'Luyện tập trong đầu',
    category: 'technique',
    also: ['musicianship'],
    aliases: ['tập không đàn', 'mental practice', 'luyện tập tinh thần', 'tưởng tượng khi tập', 'tập bằng trí óc', 'nghe trong đầu'],
    summary: 'Tưởng tượng mình đang chơi — không chạm đàn — cũng làm thay đổi não bộ và giúp học bài, nhưng hiệu quả thường kém hơn tập thật; tốt nhất là kết hợp.',
    refs: [
      ['Bernardi et al. (2013), Music Perception — Mental practice in music memorization: an ecological-empirical study', 'https://jyx.jyu.fi/handle/123456789/20849'],
      ['Bernardi et al. (2013), Frontiers in Human Neuroscience — Mental practice promotes motor anticipation: evidence from skilled music performance', 'https://public-pages-files-2025.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2013.00451/text'],
      ['The Bulletproof Musician — How effective is mental practice, really?', 'https://bulletproofmusician.com/how-effective-is-mental-practice-really/'],
      ['Frontiers in Behavioral Neuroscience (2015) — review citing Pascual-Leone et al. (1995)', 'https://frontiersin.org/journals/behavioral-neuroscience/articles/10.3389/fnbeh.2015.00105/full'],
    ],
    body: `
## Nghiên cứu nền tảng: Pascual-Leone (1995)
Trong thí nghiệm nổi tiếng của nhóm Alvaro Pascual-Leone, những người không biết chơi đàn học một bài tập năm ngón trên piano trong 5 ngày:
- Một nhóm **tập thật** mỗi ngày 2 giờ.
- Một nhóm chỉ **tưởng tượng** đang chơi.

Đo bằng kích thích từ xuyên sọ (TMS), vùng vỏ não vận động điều khiển các ngón tay **mở rộng** ở nhóm tập thật — và nhóm chỉ tưởng tượng cũng có thay đổi tương tự. Các tổng quan sau này trích nghiên cứu này để chứng minh rằng **tập trong đầu có thể điều chỉnh các mạch thần kinh** ở giai đoạn đầu học kỹ năng vận động. (Một số trang phổ biến khoa học phóng đại rằng hai nhóm thay đổi "y hệt nhau" — nên đọc bài gốc trước khi trích số liệu.)

## Với người chơi piano thực thụ: Bernardi và cộng sự (2013)
16 người chơi piano mỗi người học thuộc hai bản có độ dài và độ khó tương đương: một bản bằng **tập trong đầu**, một bản bằng **tập trên đàn**, vào hai ngày khác nhau.
- Chỉ tập trong đầu **vẫn học được bài**.
- Nhưng tập trong đầu nhìn chung cho kết quả **kém hơn** tập trên đàn. Các bản tóm tắt khác nhau về việc kết hợp hai cách có đuổi kịp tập thật hay không.
- Một nghiên cứu khác cùng năm của nhóm này thấy tập trong đầu giúp người chơi **dự đoán động tác** tốt hơn.

## Áp dụng
- **Khi không có đàn** hoặc khi tay cần nghỉ (xem [[suc-khoe-nguoi-choi-dan]]): đọc bản nhạc, "nghe" và "thấy" ngón tay chơi trong đầu.
- **Kiểm tra trí nhớ**: nếu không thể "chơi" một đoạn trong đầu, đoạn đó chưa thật sự thuộc — xem [[hoc-thuoc-bai]].
- **Trước khi biểu diễn**: chạy lại bài trong đầu theo các mốc đã đánh dấu (xem [[hoi-hop-bieu-dien]]).
- Kỹ năng "nghe trong đầu" (inner hearing) cũng là một trong các yếu tố dự báo khả năng [[thi-tau]].

Các nhà sư phạm lớn như [[heinrich-neuhaus|Neuhaus]] cũng nhấn mạnh người học cần **nghe được âm nhạc trong đầu** trước khi chơi (xem [[lich-su-ky-thuat-piano]]).
`,
  },
  {
    slug: 'lich-su-ky-thuat-piano',
    title: 'Lịch sử các quan niệm kỹ thuật piano',
    category: 'technique',
    aliases: ['trường phái ngón', 'trường phái trọng lượng', 'weight technique', 'finger school', 'Matthay', 'Taubman', 'Breithaupt', 'Ortmann', 'sách kỹ thuật piano'],
    summary: 'Từ "trường phái ngón" thế kỷ 19 (giữ yên cánh tay, ngón đánh như búa) sang "trường phái trọng lượng" đầu thế kỷ 20, rồi các cách tiếp cận dựa trên giải phẫu và chuyển động phối hợp.',
    refs: [
      ['Practising the Piano — A history of piano technique (part 1)', 'https://practisingthepiano.com/history-piano-technique-part-1/'],
      ['Wikipedia — Tony Bandmann', 'https://en.wikipedia.org/wiki/Tony_Bandmann'],
      ['Wikipedia — Friedrich Adolf Steinhausen', 'https://en.wikipedia.org/wiki/Friedrich_Adolf_Steinhausen'],
      ['Wikipedia — Otto Ortmann', 'https://en.wikipedia.org/wiki/Otto_Ortmann'],
      ['Pianist Magazine — What is the Taubman Approach?', 'https://www.pianistmagazine.com/blogs/what-is-the-taubman-approach-and-how-can-it-help-me-improve/'],
      ['Wikipedia — Josef Lhévinne', 'https://en.wikipedia.org/wiki/Josef_Lh%C3%A9vinne'],
      ['The Etude (1924) — Josef Lhévinne, Basic principles in pianoforte playing, part IV', 'https://etudemagazine.com/etude/1924/01/basic-principles-in-pianoforte-playing-part-iv---josef-lhevinne.html'],
      ['Veridian E-Journal — Review of Neuhaus, The Art of Piano Playing', 'https://he02.tci-thaijo.org/index.php/Veridian-E-Journal/article/view/27396'],
      ['Wikipedia — György Sándor', 'https://en.wikipedia.org/wiki/Gyorgy_Sandor'],
    ],
    body: `
Bài này giúp giáo viên hiểu **vì sao** các sách và các thầy dạy kỹ thuật khác nhau — nhiều lời khuyên ngày nay là phản ứng với quan niệm của thế hệ trước. Về các trường phái **quốc gia** (Nga, Pháp), xem [[truong-phai-piano]].

## 1. Trường phái ngón (thế kỷ 19)
- Mạch từ [[Clementi]] và [[Czerny]]: kỹ thuật là **sự độc lập của ngón tay**. Clementi dặn học trò đặt **một đồng xu trên mu bàn tay** khi chơi — tức là **cấm xoay** bàn tay.
- Đỉnh cao là phương pháp của **Lebert và Stark** ở Nhạc viện Stuttgart, in lần đầu năm **1858** và được dùng rộng rãi hơn một thế kỷ: tập bài tập ngón với **cẳng tay giữ yên**, có khi dùng **thanh vịn** đỡ cổ tay. Kiểu đánh cơ bản là "**đánh búa**" — nhấc từng ngón cao hết mức rồi đập xuống thật mạnh, không có sự trợ giúp của cánh tay.
- Có học giả cho rằng trường phái này hay bị **biếm hoạ** quá mức trong sách vở về sau.

Các tranh cãi về bài tập [[bai-tap-ngon|Hanon]] ngày nay bắt nguồn một phần từ đây.

## 2. Trường phái trọng lượng (khoảng 1890–1930)
- **Tony Bandmann** (nghiên cứu năm 1893) góp phần quyết định vào việc chuyển từ "kỹ thuật ngón" sang "kỹ thuật trọng lượng".
- Thuật ngữ "**trọng lượng**" — dùng trọng lực một cách có ý thức — có lẽ do [[ferruccio-busoni|Busoni]] đưa vào; Busoni ủng hộ **Rudolf Breithaupt** với cuốn *Kỹ thuật piano tự nhiên*.
- **Tobias Matthay** với *The Act of Touch* (**1903**) ở Anh nhấn mạnh **cánh tay, cơ thể** và trọng lượng.
- **Friedrich Adolf Steinhausen** (1905) cung cấp cơ sở **sinh lý học**, chỉ ra các "sai lầm sinh lý" của kỹ thuật cũ.

Lời khuyên "dùng trọng lượng cánh tay chứ không dùng sức ngón" trong [[lam-noi-giai-dieu]] đến từ truyền thống này.

## 3. Khoa học và chuyển động phối hợp (thế kỷ 20)
- **Otto Ortmann** (Nhạc viện Peabody) — *The Physiological Mechanics of Piano Technique* (**1929**): áp dụng cơ học, giải phẫu xương – cơ và sinh lý thần kinh vào cách chạm phím. Một số thuật ngữ của ông nay đã lỗi thời.
- **Josef Lhévinne** — *Basic Principles in [[lich-su-piano|Pianoforte]] Playing* (**1924**): kỹ thuật phải **phục vụ hiểu biết âm nhạc**; trọng tâm là **tiếng đàn đẹp**, "cánh tay lơ lửng trong không khí", cổ tay như **bộ giảm xóc**. "Sự tinh tế là không thể với một cánh tay nặng nề."
- **[[heinrich-neuhaus|Heinrich Neuhaus]]** — *Nghệ thuật chơi piano*: đặt **hình tượng nghệ thuật** và **tiếng đàn** lên trước kỹ thuật thuần tuý; người học phải "**nghe âm nhạc trong đầu**" trước khi chạm đàn; mục tiêu cuối cùng là học trò **tự dạy được mình**.
- **György Sándor** — *On Piano Playing* (1981): quy kỹ thuật về **năm chuyển động cơ bản** — rơi tự do, mẫu năm ngón (âm giai, [[luyen-hop-am-rai|hợp âm rải]]), **xoay**, [[cach-dien-tau|staccato]] và **đẩy** — rồi áp dụng vào tác phẩm.
- **Dorothy Taubman** (1917–2013): nổi tiếng nhờ **phục hồi cho người chơi bị chấn thương**; cho rằng kỹ thuật (hơn là tài năng) quyết định cả trình độ lẫn nguy cơ chấn thương. Trọng tâm là **chuyển động phối hợp** của cả cơ thể và **xoay cẳng tay** (xem [[tremolo-xoay-cang-tay]]). Một số thuật ngữ của phương pháp này cũng bị giới khoa học coi là đã lỗi thời.

## Ý nghĩa với người dạy
Xu hướng chung: từ "ngón tay làm mọi việc" sang **cả cánh tay và cơ thể cùng làm việc**, từ "luyện cho khoẻ" sang **thả lỏng và hiệu quả**, và kỹ thuật **phục vụ âm thanh**. Các trường phái hiện đại kết hợp ưu điểm của cả hai trường phái trước. Liên quan: [[ky-thuat-cham-phim]], [[suc-khoe-nguoi-choi-dan]].
`,
  },
  {
    slug: 'ban-tay-nho',
    title: 'Bàn tay nhỏ và kích thước bàn phím',
    category: 'technique',
    aliases: ['tay nhỏ', 'small hands', 'độ mở bàn tay', 'hand span', 'bàn phím hẹp', 'ESPK', 'bàn phím 7/8'],
    summary: 'Bàn phím chuẩn được thiết kế cho bàn tay lớn; nghiên cứu cho thấy người tay nhỏ đau và căng nhiều hơn. Bàn phím phím hẹp (ESPK) là một giải pháp đang được nghiên cứu.',
    refs: [
      ['Stanford Engineering (2024) — AI could help reduce injury risk in pianists', 'https://engineering.stanford.edu/news/ai-could-help-reduce-injury-risk-pianists'],
      ['Classic FM — Are piano keys too big?', 'https://www.classicfm.com/discover-music/instruments/piano/keys-hand-span-octave/'],
      ['PASK — Research linking hand span to pain and injury', 'https://paskpiano.org/research-linking-hand-span-to-pain-and-injury-old/'],
      ['Boyle (2013), APPC — The benefits of reduced size piano keyboards for smaller handed pianists', 'https://www.appca.com.au/wp/wp-content/uploads/Boyle_2013_APPC_The_benefits_of_reduced_size_piano_keyboards_for_smaller_handed_pianists_An_exploration_of_biomechanical_and_physiological_factors.pdf'],
      ['SMU (2018) — Standard pianos a big problem for musicians with small hands', 'https://www.smu.edu/news/archives/2018/piano-keyboard'],
    ],
    body: `
## Vấn đề
[[ban-phim|Bàn phím piano]] chuẩn có chiều rộng một [[quang|quãng 8]] cố định cho mọi người. Một nghiên cứu năm 2024 do Đại học Stanford dẫn đầu ước tính **87% phụ nữ** và **24% nam giới** trưởng thành có bàn tay **nhỏ hơn mức lý tưởng** cho bàn phím chuẩn.

## Bằng chứng
- Yoshimura và Chesky (2009) khảo sát sinh viên piano đại học: người **tay nhỏ** có mức **đau và căng cơ cao hơn rõ rệt**; khi chơi trên bàn phím **hẹp hơn**, mức đau **giảm đáng kể**.
- Rhonda Boyle (2013) tổng hợp lý do cơ sinh học: bàn tay không khớp bàn phím gây **bất lợi cơ học trực tiếp**, dẫn tới căng cơ và mỏi.
- **Lưu ý**: bằng chứng có kiểm soát còn ít và mẫu nhỏ; một số con số lan truyền (như "phụ nữ có nguy cơ chấn thương cao hơn 50%") chưa tìm được nghiên cứu gốc. Tổng quan năm 2020 cho rằng chất lượng phương pháp không đồng đều khiến chưa thể rút ra kết luận chắc chắn.

## Bàn phím phím hẹp (ESPK)
**ESPK** (bàn phím tỉ lệ công thái học) có phím hẹp hơn, ví dụ bàn phím **"7/8"** của Steinbuhler. Đến năm 2013, đã có bảy trường đại học Mỹ trang bị loại đàn này. Người chơi thường kể là **thích nghi nhanh** khi chuyển qua lại giữa hai cỡ, nhưng chưa có nghiên cứu hệ thống về tốc độ thích nghi.

## Với người tay nhỏ trên đàn chuẩn
Các lời khuyên dưới đây đã có trong các bài khác của thư viện:
- **Mở rộng dần**: tập quãng 6, quãng 7 rồi mới quãng 8; dừng lại khi khó chịu — [[ky-thuat-quang-tam]].
- **Thả lỏng** sau mỗi lần mở tay; không giữ bàn tay căng ở thế mở rộng.
- Dùng **xoay cẳng tay** và di chuyển cả cánh tay thay vì căng ngón — [[tremolo-xoay-cang-tay]], [[luyen-hop-am-rai]].
- Chọn [[ngon-bam]] phù hợp với tay mình.
- Chú ý dấu hiệu đau, tê: [[suc-khoe-nguoi-choi-dan]].
`,
  },
  {
    slug: 'tremolo-xoay-cang-tay',
    title: 'Tremolo và xoay cẳng tay',
    category: 'technique',
    aliases: ['kỹ thuật tremolo', 'xoay cẳng tay', 'forearm rotation', 'quãng 8 rải', 'broken octaves'],
    summary: 'Tremolo (luân phiên nhanh hai nốt hoặc hai nhóm nốt) chơi bằng sự phối hợp của ngón và động tác xoay cả cẳng tay, không phải chỉ từ khớp ngón.',
    refs: [
      ['Practising the Piano — A practical guide to forearm rotation', 'https://practisingthepiano.com/a-practical-guide-to-forearm-rotation/'],
      ['tonebase — A practical guide to forearm rotation at the piano', 'https://www.tonebase.co/piano-blog-posts/a-practical-guide-to-forearm-rotation-at-the-piano'],
      ['Chuan C. Chang — Fundamentals of Piano Practice: Trills & tremolos', 'https://fundamentals-of-piano-practice.readthedocs.io/chapter1/ch1_topics/III.3.html'],
      ['Piano Fundamentals — Tremolos (Beethoven\'s Pathétique, 1st movement)', 'https://mail.pianofundamentals.com/book/en/1.III.3.2'],
      ['Wikipedia — Piano Sonata No. 8 (Beethoven)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._8_(Beethoven)'],
    ],
    body: `
**Tremolo** là luân phiên thật nhanh giữa hai nốt (hoặc hai nhóm nốt) cách nhau một quãng lớn — thường là [[quang|quãng 8]] rải. Ký hiệu: xem [[ky-hieu-nang-cao]]. Cùng họ với [[ky-thuat-lay-ren|láy rền]] (hai nốt [[giai-dieu|liền bậc]]).

## Xoay cẳng tay là gì?
Cẳng tay có thể **xoay** quanh trục của nó như khi **vặn tay nắm cửa**. Một giáo viên gợi ý tập không cần đàn: tưởng tượng vặn núm bếp và quan sát cổ tay, cẳng tay cùng lăn theo một vòng. Nếu chỉ ngón cái và ngón út cử động, cổ tay đang cứng và bạn đang chơi chỉ bằng ngón. Xoay là một trong năm chuyển động cơ bản của György Sándor và là trọng tâm phương pháp Taubman (xem [[lich-su-ky-thuat-piano]]).

## Cách tập tremolo
1. **Tách hai động tác**, làm thật **to và chậm**: tremolo chỉ bằng ngón (nhấc ngón cao), rồi tremolo chỉ bằng xoay (giữ ngón cố định).
2. **Thu nhỏ** cả hai khi [[kiem-soat-toc-do|tăng tốc]] rồi **ghép lại**. Vì cả hai cùng góp phần, mỗi động tác chỉ cần rất nhỏ — nhờ vậy mà chơi được rất nhanh.
3. Xoay **cả cẳng tay**, không phải gập ở khớp ngón — lỗi rất hay gặp là tưởng mình đang xoay mà thực ra chỉ dùng khớp ngón.
4. Động tác lên – xuống luôn **nhanh**; muốn chơi chậm thì **chờ** giữa hai động tác, và **thả lỏng hoàn toàn** trong lúc chờ.
5. Bắt đầu với **ngón 2 – 5 trên quãng 4**, rồi các cặp ngón khác, cuối cùng mới đến ngón cái — dùng ngay 1 – 5 dễ làm ngón cái co rút và cổ tay bị gập.

## Ví dụ: chương 1 Sonata "Pathétique"
Trong chương 1 [[hinh-thuc-sonata|Sonata]] Op. 13 của [[Beethoven]], chủ đề thứ nhất có tay trái chơi **quãng 8 tremolo liên tục**. Một cách tập: nảy quãng 8 C2 – C3 lặp lại, thả lỏng; khi mỏi thì **nâng dần rồi hạ cổ tay** để đổi [[tu-the|tư thế]]. Tốc độ cũng cần đủ chậm để tremolo **có chỗ vang** — đừng đẩy tốc độ vượt quá mức tay còn thả lỏng được.

Xoay cẳng tay còn dùng cho [[luyen-hop-am-rai|hợp âm rải]], bass Alberti ([[dem-hat-piano]]) và [[ky-thuat-lay-ren|láy rền]].
`,
  },
]
