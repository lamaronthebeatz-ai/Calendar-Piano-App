import type { Article } from '../wiki'

/**
 * Kỹ thuật và luyện tập piano. Nội dung tổng hợp từ các nguồn ghi trong `refs` của từng bài
 * (nghiên cứu khoa học khi có, còn lại là hướng dẫn của giáo viên piano); không đưa vào số liệu
 * hay khẳng định không có nguồn.
 */
export const technique: Article[] = [
  {
    slug: 'ky-thuat-piano',
    title: 'Kỹ thuật piano: hệ thống và lộ trình',
    category: 'technique',
    aliases: ['kỹ thuật piano', 'lộ trình kỹ thuật', 'piano technique', 'kỹ thuật chơi đàn', 'kỹ năng piano'],
    summary: 'Bài tổng quan của mục: các mảng kỹ thuật piano (tư thế và chuyển động, các dạng chạy ngón, chạm phím, phối hợp hai tay, đọc và học bài, biểu diễn và sức khoẻ) và thứ tự đọc các bài.',
    wiki: 'Piano_pedagogy',
    refs: [
      ['Wikipedia — Piano pedagogy', 'https://en.wikipedia.org/wiki/Piano_pedagogy'],
      ['Wikipedia — Pianist (mục Technique)', 'https://en.wikipedia.org/wiki/Pianist'],
    ],
    body: `
"Kỹ thuật" không chỉ là ngón nhanh: đó là **mọi cách cơ thể tạo ra âm thanh mình muốn**, cộng với cách **luyện tập** để đạt đến đó. Các quan niệm về kỹ thuật đã thay đổi nhiều qua các thế kỷ — từ luyện ngón cô lập đến dùng trọng lượng và chuyển động cả cánh tay (xem [[lich-su-ky-thuat-piano]], [[truong-phai-piano]]).

## Các mảng kỹ thuật
| Mảng | Bài |
|---|---|
| **Nền tảng cơ thể** | [[tu-the]], [[suc-khoe-nguoi-choi-dan]], [[ban-tay-nho]] |
| **Chạm phím và âm thanh** | [[ky-thuat-cham-phim]], [[lam-noi-giai-dieu]], [[ban-dap]] |
| **Các dạng chạy ngón** | [[luyen-am-giai]], [[luyen-hop-am-rai]], [[not-kep]], [[ky-thuat-quang-tam]], [[ky-thuat-lay-ren]], [[not-lap-lai]], [[tremolo-xoay-cang-tay]], [[buoc-nhay-xa]] |
| **Ngón bấm** | [[ngon-bam]] |
| **Hai tay và nhiều bè** | [[phoi-hop-hai-tay]], [[choi-phuc-dieu]] |
| **Bài tập** | [[bai-tap-ngon]] |
| **Đọc và học bài** | [[doc-not-nhanh]], [[thi-tau]], [[hoc-thuoc-bai]], [[tap-trong-dau]], [[phuong-phap-luyen-tap]] |
| **Thời gian và [[cau-nhac|câu nhạc]]** | [[kiem-soat-toc-do]], [[dien-dat-cau-nhac]], [[rubato]] |
| **Đệm và ngẫu hứng** | [[dem-hat-piano]] (lộ trình: [[dem-hat-hien-dai]]), [[dieu-dem-pho-bien]], [[ngau-hung-piano]]; theo thể loại: [[hoa-am-pop]], [[dem-pop-ballad]], [[dem-slow-rock-rock]], [[dem-rnb-neo-soul]], [[dem-bossa-nova]], [[dem-dieu-viet-nam]] |
| **Biểu diễn** | [[hoi-hop-bieu-dien]] |
| **Legato, staccato, trọng lượng** | [[legato-va-thay-ngon]], [[ky-thuat-staccato]], [[trong-luong-va-tha-long]] |
| **Hợp âm và tay trái** | [[ky-thuat-hop-am-va-voicing]], [[ky-thuat-tay-trai]] |
| **Pedal nâng cao** | [[ky-thuat-pedal-nang-cao]] (cơ bản: [[ban-dap]]) |
| **Giáo trình và công cụ** | [[giao-trinh-etude-piano]], [[luyen-tap-voi-may-nhip]], [[yeu-cau-ky-thuat-abrsm-theo-cap]] |
| **Phong cách, đa nhịp, hoà tấu** | [[ky-thuat-theo-phong-cach]], [[choi-da-nhip-tren-piano]], [[choi-bon-tay-va-hoa-tau]] |

## Lộ trình gợi ý
1. **Trước khi chơi**: [[tu-the]] → [[suc-khoe-nguoi-choi-dan]].
2. **Cách luyện**: [[phuong-phap-luyen-tap]] — đọc sớm, vì nó áp dụng cho mọi bài sau.
3. **Âm thanh**: [[ky-thuat-cham-phim]] → [[trong-luong-va-tha-long]] → [[legato-va-thay-ngon]] → [[ky-thuat-staccato]] → [[ngon-bam]] → [[lam-noi-giai-dieu]] → [[ky-thuat-hop-am-va-voicing]].
4. **Các dạng kỹ thuật** theo thứ tự trong bảng trên, song song với tác phẩm phù hợp cấp độ ([[lo-trinh-tac-pham]]).
5. **Đọc và học bài**: [[doc-not-nhanh]] → [[thi-tau]] → [[hoc-thuoc-bai]] → [[tap-trong-dau]].
6. **Biểu diễn**: [[dien-dat-cau-nhac]] → [[hoi-hop-bieu-dien]].
Kỹ thuật phục vụ âm nhạc: song song với các bài trên, nên học [[dien-tau]] (ký hiệu và phong [[cach-dien-tau|cách diễn tấu]]) và [[phan-tich-va-bieu-dien]].

**Góc nhìn nghiên cứu:** các kỹ năng trên là đối tượng của ngành [[khoa-hoc-bieu-dien]] (xem bản đồ [[am-nhac-hoc]]).

**Bắt đầu từ đâu:** [[vi-tri-nam-ngon-va-am-giai-nam-not]]; đàn phím ứng dụng — [[ky-nang-dan-phim-chuc-nang]].

**Học theo giáo trình:** [[danh-gia-giao-trinh-piano-va-nhac-ly]]; dành cho phụ huynh — [[tre-hoc-dan-luyen-tap-va-phu-huynh]]; dành cho người lớn — [[nguoi-lon-hoc-piano-dong-luc-va-cach-hoc]].
`,
  },
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
::staff treble C4=1 D4=2 E4=3 F4=1 G4=2 A4=3 B4=4 C5=1 D5=2 E5=3 F5=1 G5=2 A5=3 B5=4 C6=5 | Âm giai Đô trưởng hai quãng 8, tay phải đi lên: số dưới mỗi nốt là ngón bấm

Tay trái là hình ảnh đối xứng: đi xuống dùng 5-4-3-2-1 · 3-2-1 (xem bảng ngón trong [[ngon-bam]]).

## Luồn ngón cái (đi lên) và vắt ngón (đi xuống)
- **Đi lên**: ngay khi ngón cái vừa đánh C, nó bắt đầu **di chuyển dần** vào dưới lòng bàn tay để sẵn sàng cho F sau E — không đợi đến phút chót.
- **Đi xuống**: khi ngón cái đánh F, ngón 3 **vắt qua** để đánh E.

## Mẹo nhớ: ngón 4 làm mốc
Trong mỗi quãng 8, ngón 4 của mỗi tay chỉ xuất hiện **một lần**. Nhớ ngón 4 rơi vào nốt nào là nhớ được cả ngón bấm của [[am-giai|âm giai]] đó.

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
- Khi luyện động tác luồn ngón cái, bàn tay và cổ tay thả lỏng giúp luồn dễ hơn là giữ chúng cứng.

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
- Hiệu quả chung của các phương pháp luyện **khá nhỏ**; [[thiet-ke-nghien-cuu-thuc-nghiem|nhóm đối chứng]] cũng tiến bộ theo thời gian.
- Các loại có tác dụng tích cực rõ: **[[luyen-tai|luyện tai]]**, **đọc có kiểm soát**, **hoạt động sáng tạo** (như [[ngau-hung-piano|ngẫu hứng]]) và **hát / [[xuong-am]]**.
- Riêng về [[tiet-tau|tiết tấu]], các phương pháp dùng **hệ thống đếm** và **vận động cơ thể** có hiệu quả.

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
- **Đếm hoặc hát** [[tiet-tau|tiết tấu]] trước khi bật máy đếm nhịp, để tách việc hiểu nhịp khỏi việc điều khiển ngón.
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
    aliases: ['luyện tập hiệu quả', 'cách tập đàn', 'practice', 'interleaved practice', 'luyện xen kẽ', 'chia nhỏ', 'chunking', 'biến thể tiết tấu', 'tập tay riêng', 'practice method', 'phương pháp tập đàn'],
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
- **Ericsson, Krampe và Tesch-Römer (1993)** khảo sát sinh viên [[violin|violin]] ở Học viện âm nhạc Tây Berlin. Họ gọi là **luyện tập có chủ đích** (deliberate practice) những hoạt động **có mục tiêu, tốn sức, không hẳn vui**, nhằm sửa điểm yếu. Nhóm "giỏi nhất" ước tính đã tích luỹ trung bình **hơn 10.000 giờ** tập một mình trước 20 tuổi. Số giờ là **ước tính hồi tưởng** của người được hỏi.
- Con số này bị phổ biến thành "**quy tắc 10.000 giờ**" — chính Ericsson cho rằng cách hiểu đó **xuyên tạc** nghiên cứu.
- **Macnamara, Hambrick và Oswald (2014)** tổng hợp 88 nghiên cứu: trong âm nhạc, luyện tập có chủ đích giải thích khoảng **21%** khác biệt về trình độ — quan trọng, nhưng **không phải tất cả**. Mối liên hệ yếu hơn khi đo chính xác hơn.
- Một nghiên cứu lặp lại năm 2019 (Macnamara và Maitra) **không tái hiện được** kết quả cốt lõi của nghiên cứu 1993.

Bài học cho người dạy: chất lượng buổi tập (mục tiêu rõ, tập trung vào chỗ sai) quan trọng hơn số giờ; và mỗi học sinh tiến bộ với tốc độ khác nhau vì nhiều yếu tố ngoài luyện tập.

## Luyện xen kẽ (interleaved)
Luyện **khối** là tập một thứ cho đến khi xong rồi mới chuyển; luyện **xen kẽ** là chuyển qua lại giữa các bài/đoạn.
- Nghiên cứu của Carter & Grahn (2016): 10 người chơi [[clarinet|clarinet]] tập một bản theo kiểu khối, một bản theo kiểu xen kẽ (đổi bản mỗi 3 phút, tổng thời gian như nhau). Các bản tập xen kẽ được giám khảo **chấm điểm cao hơn rõ rệt**.
- Tuy vậy, người chơi vẫn **thích** tập khối hơn — vì xen kẽ đòi hỏi nhiều nỗ lực hơn và cảm giác tiến bộ trước mắt ít hơn.
- Một số tác giả cho rằng xen kẽ hợp nhất với bài **đã thuộc** và đang trau chuốt; bài mới nên học bằng cách khác trước.

Lưu ý: nghiên cứu có quy mô nhỏ (10 người).

## Luyện phân bổ (distributed)
Tập cùng một đoạn trong **nhiều buổi ngắn** trong ngày thay vì một buổi dài.

## Luyện biến đổi (varied)
Tiếp cận cùng một đoạn từ nhiều phía: **tay riêng rồi tay đôi** (xem [[phoi-hop-hai-tay]]), đổi [[tiet-tau|tiết tấu]], đổi tốc độ, và cả [[tap-trong-dau|tập trong đầu]].

## Biến thể tiết tấu
Một đoạn móc kép đều (ví dụ C–D–E–F–G–A–B–C) được tập theo:
- **Dài – ngắn** ([[cham-doi-dau-noi|chấm dôi]]): nốt dài cho thời gian chuẩn bị, nốt ngắn buộc động tác nhanh, gọn.
- **Ngắn – dài** (đảo ngược): dồn việc luyện vào những nốt mà kiểu dài – ngắn chơi lướt.
- Nhóm 3, 4, 5 nốt hoặc [[lien-ba]].

Giáo viên lưu ý: cách này hiệu quả khi dùng cẩn thận nhưng **không chữa được mọi vấn đề kỹ thuật**, và cần kết hợp thả lỏng để tránh [[suc-khoe-nguoi-choi-dan|căng cơ]].

## Chia nhỏ và nốt đích
Cắt câu dài thành từng **cụm** ngắn, mỗi cụm bắt đầu bằng một **nốt đích** rõ ràng; tập từng cụm rồi nối lại. Biết cấu trúc [[cau-nhac]] và [[motif]] giúp chọn chỗ cắt hợp lý.

Liên quan: [[kiem-soat-toc-do]], [[hoc-thuoc-bai]]. Với người dạy — buổi học hiệu quả và động lực của học trò: [[giang-day-hieu-qua]].

Lộ trình tập jazz: [[hoc-piano-jazz]].
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
Một nghiên cứu 127 bản thu [[tieu-pham-piano|Étude]] Op. 25 số 1 của [[frederic-chopin|Chopin]] (1909–2016) thấy **tổng lượng [[rubato|co giãn nhịp độ]] không đổi**, nhưng **cách dùng** rubato thì thay đổi — các bản thu gần đây kéo dài cuối câu nhiều hơn. Nghĩa là "cách chơi biểu cảm" cũng mang dấu ấn từng thời kỳ (xem [[cac-thoi-ky]]).
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
**Thuốc chẹn beta** (như propranolol): khảo sát ICSOM năm 2015 (không bình duyệt) cho biết **70%** nhạc công dàn nhạc lớn ở Mỹ từng thử. Một tổng quan năm 2026 kết luận thuốc chỉ có **vai trò hạn chế**, chủ yếu giảm **triệu chứng cơ thể** ngắn hạn, **không phải** cách điều trị thường quy hay toàn diện; bằng chứng còn yếu. Chỉ dùng khi có **chỉ định của bác sĩ**, và trẻ em không được tự ý dùng.

Phần lớn nghiên cứu có quy mô nhỏ hoặc mang tính định tính; bằng chứng cho từng kỹ thuật cụ thể vẫn đang được bổ sung. Với lo âu nghiêm trọng, nên tìm đến chuyên gia tâm lý.
`,
  },
  {
    slug: 'suc-khoe-nguoi-choi-dan',
    title: 'Sức khoẻ người chơi đàn',
    category: 'technique',
    aliases: ['chấn thương', 'đau tay', 'phòng chấn thương', 'khởi động', 'nghỉ giữa giờ', 'loạn trương lực cơ khu trú', 'focal dystonia', 'căng cơ', 'tendinitis', 'injury', 'performance injury'],
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
Một tổng quan (17 nghiên cứu) về rối loạn cơ xương liên quan đến chơi [[dan-piano|đàn piano]] nêu các yếu tố: **bàn tay nhỏ**, **động tác lặp lại**, **buổi tập kéo dài không nghỉ đủ**, và **tư thế, cách bố trí đàn chưa hợp lý** (xem [[tu-the]]). Căng thẳng tâm lý được ghi nhận là yếu tố nguy cơ của **loạn trương lực cơ khu trú** (focal dystonia).

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

Bộ máy [[bo-may-piano|thoát kép]] của đàn grand giúp láy rền nhanh dễ hơn so với đàn upright.
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
::wiki Charles-Louis_Hanon | Charles-Louis Hanon (ảnh đầu bài Wikipedia *Charles-Louis Hanon*)
## Hanon — "The Virtuoso Pianist in 60 Exercises"
**Ủng hộ** cho rằng: luyện **lực, độ đều** của ngón, sự [[lam-noi-giai-dieu|cân bằng hai tay]] và sức bền; là bài **khởi động** hằng ngày tốt.

**Phản đối** cho rằng:
- Mọi hoạt động chơi đàn đều luyện lực và độ độc lập của ngón — Hanon không có gì đặc biệt.
- Ngón tay **không thể đều và độc lập tuyệt đối** về mặt giải phẫu, dù lặp lại bao nhiêu.
- Hanon yêu cầu giữ yên cánh tay và cổ tay, chỉ cử động ngón — trong khi kỹ thuật hiện đại coi trọng **sự phối hợp cả cánh tay**. Một số nhà sư phạm (như Abby Whiteside) còn coi chúng là **có hại** nếu tập sai.

**Trung dung**: dùng có chọn lọc cho vấn đề cụ thể, ví dụ một giáo viên dùng bài 32–37 để sửa ngón cái cứng hoặc "sập".

## Czerny
[[Czerny|Carl Czerny]] được gọi là "cha đẻ của [[ky-thuat-piano|kỹ thuật piano]] hiện đại". Các tuyển tập như **Op. 599** (cho người mới học), **Op. 299**, **Op. 740** và **Op. 802** (có phần dành riêng cho **độc lập từng ngón**) thường được đánh giá là **có tính âm nhạc hơn** bài tập ngón thuần tuý — dù một số người thấy chúng hơi nhàm và khuyên học kèm tác phẩm phong phú hơn.

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

[[dem-hat-piano|Kiểu đệm]] [[stride-piano|stride]] trong [[phong-cach-jazz|ragtime]] (xem [[ket-cau]], [[Joplin]]) là bài luyện bước nhảy kinh điển. Lưu ý: các bài tập trên chủ yếu từ giáo viên và diễn đàn, chưa phải nghiên cứu chính thức.
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
    aliases: ['đệm hát', 'đệm piano', 'accompaniment', 'kiểu đệm', 'Alberti bass', 'đệm valse', 'chơi theo hợp âm'],
    summary: 'Các kiểu đệm cơ bản: hợp âm khối, hợp âm rải, bass Alberti, đệm valse, đệm pop, stride — và cách tập đệm từ bản nhạc chỉ có giai điệu và ký hiệu hợp âm.',
    refs: [
      ['Musicnotes — 7 ways to play lead sheets with your left hand', 'https://www.musicnotes.com/blog/7-ways-to-play-lead-sheets-with-your-left-hand'],
      ['Soundfly — 3 common broken chord patterns', 'https://flypaper.soundfly.com/tips/broken-chord-patterns-theory-inspire-beginner-pianists/'],
      ['Skoove — Piano accompaniment', 'https://skoove.com/blog/piano-accompaniment'],
      ['Wikipedia — Stride (music)', 'https://en.wikipedia.org/wiki/Stride_(music)'],
      ['MasterClass — Stride piano guide', 'https://www.masterclass.com/articles/stride-piano-guide'],
    ],
    body: `
Lộ trình đệm hát hiện đại theo cấp độ và thể loại (pop, ballad, R&B, [[dem-rnb-neo-soul|neo soul]], bossa nova, các điệu nhạc Việt): [[dem-hat-hien-dai]].

## Các kiểu đệm
| Kiểu | Cách chơi | Hợp với |
|---|---|---|
| **[[hop-am-ba|Hợp âm]] khối** | Đánh cả hợp âm cùng lúc | Kiểu cơ bản nhất, mọi [[the-loai|thể loại]] |
| **[[luyen-hop-am-rai|Hợp âm rải]]** | Đánh lần lượt từng nốt của hợp âm | Ballad, nhạc trữ tình |
| **Bass Alberti** | Thấp – cao – giữa – cao (C–G–E–G) | Nhịp 4/4, móc đơn hoặc [[truong-do|nốt đen]]; đặc trưng thời Cổ điển nhưng dùng được ở nhiều phong cách |
| **Đệm valse** | Nốt trầm đánh riêng, rồi các nốt trên đánh hai lần (trầm – hợp âm – hợp âm) | Nhịp 3/4 |
| **Đệm "pop"** | Đung đưa giữa nốt dưới và các nốt trên của hợp âm | Pop, ballad |
| **Stride** | Nốt bass ở phách 1 và 3, hợp âm ở phách 2 và 4 — tay trái nhảy xa liên tục | [[phong-cach-jazz|Ragtime]], jazz Harlem |

::keyboard C3 E3 G3 | Hợp âm C để luyện các kiểu đệm: thử khối, rải, Alberti (C–G–E–G)

Các kiểu này chính là các dạng [[ket-cau|kết cấu chủ điệu]]. Đệm Alberti và stride là bài tập tốt cho [[buoc-nhay-xa]] và [[dan-giong]].

## Stride
Phong cách jazz bắt nguồn từ ragtime. Nốt bass thường là nốt gốc hoặc nốt 5, có thể chơi đơn, [[quang|quãng 8]] hoặc quãng 10; hợp âm ở phách 2 và 4 thường gọn 2–3 nốt (thường gốc, 3, 7 — xem [[xep-hop-am|shell voicing]]). Tay trái nhảy liên tục giúp tay phải tự do chơi [[giai-dieu|giai điệu]] và [[ngau-hung-piano|ngẫu hứng]]. [[james-p-johnson|James P. Johnson]] được coi là "cha đẻ" của stride; học trò ông, [[fats-waller|Fats Waller]], đưa stride đến với công chúng (xem [[nghe-si-piano-jazz]]).

## Đệm từ bản nhạc hợp âm (lead sheet)
Bản [[he-so-nashville-va-lead-sheet|lead sheet]] chỉ ghi giai điệu và [[ky-hieu-hop-am]]. Lộ trình tay trái được khuyên:
1. Chơi **một nốt** — nốt gốc của hợp âm.
2. Chơi **quãng 8**.
3. Chơi **cả hợp âm**, rồi chuyển sang các kiểu đệm ở bảng trên.

Ghi nhớ trước vài hợp âm hay gặp trong bài và luyện chuyển qua lại giữa chúng (xem [[vong-hop-am]], [[the-dao-hop-am]]).

Các điệu có [[tiet-tau|tiết tấu]] đặc trưng ([[dem-slow-rock-rock|slow rock 12/8]], bossa nova, cha-cha-cha): [[dieu-dem-pho-bien]].

## Tay trái theo thể loại
Trong jazz, [[blues-12-nhip|blues]] và nhạc cổ điển, tay trái thường [[kiem-soat-toc-do|giữ nhịp]] đều bằng hợp âm rải, [[ostinato]] hoặc đường bass. Trong jazz, **walking bass** là đường bass đi liền bậc lên xuống theo hợp âm.

Đệm trong jazz: [[dem-jazz]] (comping), [[bass-di-jazz]].

Stride chi tiết: [[stride-piano]]; đệm cho ca sĩ trong jazz: [[dem-cho-ca-si]].
`,
  },
  {
    slug: 'dieu-dem-pho-bien',
    title: 'Các điệu đệm thông dụng',
    category: 'technique',
    aliases: ['điệu đệm', 'tiết điệu', 'slow rock', 'bossa nova', 'cha cha cha', 'chachacha', 'nhịp 12/8', 'ballad'],
    summary: 'Slow rock (12/8, bốn phách lớn chia ba), bossa nova (dựa trên mẫu clave) và cha-cha-cha (nhấn "cha-cha-cha" ở phách 3 – 4) — cùng cách luyện từng điệu trên piano.',
    refs: [
      ['Soundbrenner — Rhythm library: 12/8', 'https://www.soundbrenner.com/blogs/articles/rhythm-library-12-8'],
      ['Yamaha — Exploring Latin rhythms', 'https://hub.yamaha.com/keyboards/k-how-to/exploring-latin-rhythms'],
      ['UJAM — How to make bossa nova', 'https://www.ujam.com/tutorials/how-to-make-bossa-nova/'],
      ['PianoGroove — Cha-cha-cha & mambo', 'https://pianogroove.com/jazz-piano-lessons/cha-cha-cha-mambo-tutorial/'],
    ],
    body: `
Các kiểu đệm cơ bản (khối, rải, Alberti, [[tieu-pham-piano|valse]], [[stride-piano|stride]]) ở [[dem-hat-piano]]. Bài này nói về các **điệu** có [[tiet-tau|tiết tấu]] đặc trưng.

## Slow rock và ballad 12/8
- 12/8 là [[so-chi-nhip|nhịp kép]] **bốn phách lớn**, mỗi phách chia ba: đếm "**1** và a **2** và a **3** và a **4** và a".
- Bắt đầu bằng cảm giác **3 + 3 + 3 + 3**; nhấn mạnh nhất ở phách 1, nhưng cả bốn phách đều là phách chính.
::rhythm 12/8 >e-e-e e-e-e e-e-e e-e-e // | 12/8: bốn phách lớn, mỗi phách chia ba
- Phân vai thường gặp: bè trầm giữ **bốn phách lớn**, còn piano (hoặc trống) chơi hình **chia ba** liên tục.
- Đừng nhầm với **6/8** — chỉ có **hai** phách lớn. 12/8 chậm (dưới khoảng 100 phách/phút) cũng dùng cho jazz ballad.

## Bossa nova
- Xây dựng trên một mẫu **[[clave-tresillo-va-nhip-cong|clave]]**; mẫu clave bossa nova thường được gắn với Antonio Carlos Jobim (dù chính ông chỉ coi đó là một [[motif|motif]] tiết tấu).
- Một bài học gợi ý tay trái: nốt gốc và nốt 5 của [[hop-am-ba|hợp âm]], nhấn ở các [[truong-do|nốt móc đơn]] thứ 1, 4–5 và 8 của ô nhịp. Tay phải [[dao-phach|đảo phách]]: các móc đơn thứ 1, 4, 7 của ô thứ nhất và 3, 6 của ô thứ hai (giáo viên khác đặt 3 và 5).
- Yamaha luyện theo thứ tự: clave son 2-3, rồi 3-2, rồi mẫu đệm bossa; dùng [[xep-hop-am|thế bấm hợp âm]] hai tay cho tiếng đầy hơn.
- [[ky-thuat-cham-phim|Chạm phím]] **nhẹ**, tiết tấu tiết chế, hợp âm nối mượt (thường dùng [[hop-am-bay|hợp âm 7]] và [[hop-am-mo-rong|9]]).

## Cha-cha-cha
- Ra đời từ sự pha trộn giữa son và danzón của Cuba; có tiết tấu và đường bass đặc trưng.
- Phách 3 và 4 mang tiếng "**cha-cha-cha**" đặc trưng.
- Một cách đệm: tay trái nốt gốc ở phách 1, nốt 5 ở phách 3, lặp ở phách 4; tay phải có **hai móc đơn ở phách 2**.
::rhythm 4/4 q:gốc rq q:5 q:5 // | Tay trái cha-cha-cha: nốt gốc ở phách 1, nốt 5 ở phách 3 và lặp ở phách 4
::rhythm 4/4 rq e-e rq rq // | Tay phải: hai móc đơn ở phách 2
- Lời khuyên: học **đường bass trước**, rồi thêm hoà âm; luyện trên vòng [[vong-hop-am|ii – V – I]].

Đi sâu từng thể loại: [[dem-slow-rock-rock]], [[dem-bossa-nova]], [[dem-dieu-viet-nam]] (bolero, rumba, slow, valse, boston, tango), [[dem-rnb-neo-soul]].

## Cách luyện chung
1. Vỗ tay hoặc đếm to tiết tấu trước (xem [[kiem-soat-toc-do]]).
2. Chơi tay trái riêng trên một hợp âm, rồi trên cả [[vong-hop-am]].
3. Thêm tay phải; nghe bản thu mẫu và bắt chước cảm giác nhịp — các nguồn khác nhau ở chi tiết nhỏ (vị trí nhấn của clave, tay nào chơi phách nghịch).
`,
  },
  {
    slug: 'dem-pop-ballad',
    title: 'Đệm pop và ballad',
    category: 'technique',
    aliases: ['đệm pop', 'đệm ballad', 'pop ballad accompaniment', 'piano ballad', 'đệm ballad piano', '1-5-8', 'tay trái 1-5-8', 'add9 pop'],
    summary: 'Cách đệm piano cho pop và ballad từ cơ bản đến nâng cao: các mẫu tay trái (1 – 5 – 8, 1 – 5 – 10), tay phải đi thể đảo gần nhất, màu sus2/add9, bè trầm đi xuống, và đặc biệt là cách xây "đường cong năng lượng" từ phiên khúc thưa đến điệp khúc đầy — chừa chỗ cho giọng hát.',
    refs: [
      ['Berklee Online — Take Note: piano accompaniment dynamics', 'https://online.berklee.edu/takenote/?p=3246'],
      ['Pianote — Left-hand patterns', 'https://www.pianote.com/blog/left-hand-patterns/'],
      ['Dummies — Great left-hand accompaniment patterns', 'https://www.dummies.com/article/academics-the-arts/music/instruments/piano/great-left-hand-accompaniment-patterns-for-the-piano-or-keyboard-153052/'],
      ['Philip Wesley — Different left-hand accompaniments', 'https://philipwesley.com/blogs/blog/different-left-hand-accompaniments'],
      ['Piano With Jonny — Piano accompaniment: 6 steps', 'https://pianowithjonny.com/piano-lessons/piano-accompaniment-6-steps-from-beginner-to-pro/'],
      ['PianoGroove — Accompanying singers', 'https://pianogroove.com/jazz-piano-lessons/accompanying-singers-melody-harmony-bass/'],
    ],
    body: `
## Cấp 1: khung hai tay
- **Tay trái**: nốt gốc ([[truong-do|nốt tròn]]), rồi **[[quang|quãng 8]]**.
- **Tay phải**: [[hop-am-ba|hợp âm ba]] đi theo **thể đảo gần nhất** để các nốt chung được giữ lại ([[the-dao-hop-am]], [[dan-giong]]).
- **Pedal**: thay theo mỗi lần đổi hợp âm ([[ban-dap]]).
::grand C4+E4+G4/C3 B3+D4+G4/G2 C4+E4+A4/A2 C4+F4+A4/F2 | Vòng I – V – vi – IV: tay phải gần như đứng yên, tay trái đi nốt gốc

## Cấp 2: các mẫu tay trái
| Mẫu | Nốt (trên C) | Dùng khi |
|---|---|---|
| **1 – 5 – 8** (gốc – 5 – quãng 8) | C – G – C | Mẫu ballad "vạn năng" của [[nhac-phim-va-tro-choi|nhạc phim]], pop, ballad |
| 1 – 5 – 8 – 5 rải móc đơn | C – G – C – G | Ballad có chuyển động |
| **1 – 5 – 10** | C – G – E (quãng 10) | Tiếng rộng, ấm hơn — đặt thấp và mở |
| Quãng 8 kéo dài | C + C | Đoạn mạnh, điệp khúc |
::staff bass C3 G3 C4 G3 / A2 E3 A3 E3 / F2 C3 F3 C3 / G2 D3 G3 D3 | Tay trái 1 – 5 – 8 – 5 trên C – Am – F – G (móc đơn)
::staff bass C3 G3 E4 G3 / A2 E3 C4 E3 | 1 – 5 – 10: tiếng rộng hơn (cần tay mở; có thể rải)
Đặt mẫu tay trái **thấp và rộng** cho tiếng đầy, nhưng tránh dày đặc ở vùng quá trầm.

## Cấp 3: màu sắc tay phải
- **sus2 [[tai-hoa-am|thay hợp âm]] ba**: nốt 2 thay nốt 3 cho tiếng "mở", hiện đại; khi giữ cả nốt 3 thì là **add9** — xem [[hop-am-6-va-add]].
- **Rải móc đơn** hay **nhịp hợp âm** theo tiết tấu bài.
- **Bè trầm đi xuống** bằng [[hop-am-gach-cheo|hợp âm gạch chéo]] (C – G/B – Am – Am/G – F…) — xem [[hoa-am-pop]].
::staff treble C4+E4+G4=C C4+D4+G4=Csus2 C4+E4+G4+D5=Cadd9 | Từ hợp âm ba sang sus2 và add9: một nốt thay đổi làm tiếng đàn "hiện đại" hơn

## Cấp 4: đường cong năng lượng
Berklee gợi ý: bắt đầu **thưa** (nốt tròn cả hai tay, hoặc tay phải nốt trắng trên tay trái nốt tròn), rồi tay phải sang nốt đen, rồi móc đơn khi năng lượng tăng. Hai tay **gần nhau** nghe thân mật; **xa nhau** nghe mãnh liệt.
::form Phiên_khúc_(thưa) Pre-chorus_(dày_dần) Điệp_khúc_(đầy) Bridge_(đổi_màu) Điệp_khúc_cuối_(đỉnh) | Đường cong năng lượng của một bài ballad
::rhythm 4/4 w / h h / q q q q / e-e e-e e-e e-e // | Mật độ tay phải tăng dần: nốt tròn → nốt trắng → nốt đen → móc đơn

## Cấp 5: đệm cho người hát
- **Không nhân đôi giai điệu** ở nốt trên cùng — để ca sĩ tự do diễn giải.
- Giữ hợp âm tay phải **dưới** hoặc **tránh** âm vực giọng hát; chơi **fill** (câu đệm ngắn) vào **chỗ ca sĩ lấy hơi**, không chen vào câu hát.
- Dưới giọng hát, dùng thế bấm **đơn giản**; để dành [[hop-am-mo-rong|nốt căng]] cho đoạn dạo và đoạn nối.
- [[prelude-ung-tac|Dạo đầu]] thường lấy chất liệu **điệp khúc** hoặc [[vong-hop-am|vòng hợp âm]] chính; kết bằng cách lặp vòng cuối rồi chậm dần.
Liên quan: [[dem-hat-piano]], [[dem-cho-ca-si]], [[dem-hat-hien-dai]].

## Nghe ví dụ

::youtube hLQl3WQQoQ0 | Adele — *Someone Like You* (pop ballad piano đệm hát)
`,
  },
  {
    slug: 'dem-slow-rock-rock',
    title: 'Đệm slow rock, rock and roll và rock',
    category: 'technique',
    aliases: ['đệm slow rock', 'slow rock 12/8', 'đệm rock', 'rock and roll piano', 'đệm rock and roll', 'triplet ballad', 'doo-wop piano', 'Fats Domino', 'Jerry Lee Lewis'],
    summary: 'Từ slow rock 12/8 với chuỗi hợp âm chia ba kiểu Fats Domino, đến tay phải móc đơn dồn dập và bass boogie của rock and roll (Jerry Lee Lewis), rồi quãng 8 tay trái và các vòng ♭VII của rock — kèm mẫu tiết tấu và cách luyện.',
    refs: [
      ['WWNO — Fats Domino, architect of rock and roll', 'https://www.wwno.org/2017-10-25/fats-domino-architect-of-rock-and-roll-dead-at-89'],
      ['College of Wooster — Listening guide: Blueberry Hill (1956)', 'https://theartofrockmusic.voices.wooster.edu/wp-content/uploads/sites/180/2015/01/Blueberry-Hill-Fats-Domino-1956.pdf'],
      ['Ledutu — 6/8 and 12/8 time', 'https://ledutu.com/en/learn/piano/six-eight-and-twelve-eight-time/'],
      ['Yamaha — Five tips for playing rock and roll piano', 'https://hub.yamaha.com/keyboards/k-how-to/five-tips-for-playing-rock-and-roll-piano/'],
      ['Tim Napalm Stegall — Jerry Lee Lewis', 'https://timnapalmstegall.substack.com/p/jackhammered-eighth-notes-and-a-lotta'],
      ['Pianist Magazine — How to play rock & roll piano', 'https://pianistmagazine.com/blogs/how-to-play-rock-roll-piano'],
      ['Open Music Theory — Modal schemas', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/07%3A_Popular_Music/7.12%3A_Modal_Schemas'],
    ],
    body: `
## Slow rock (12/8)
- **12/8 = bốn phách lớn**, mỗi phách chia ba; 6/8 chỉ có **hai** phách lớn. Một ô 12/8 bằng hai ô 6/8 — nhưng ở 12/8 có phách nhấn 2 và 4 như pop, còn 6/8 thì mạnh – nhẹ xen kẽ. Cùng cảm giác đó cũng có thể viết 4/4 với liên ba. Xem [[dieu-dem-pho-bien]], [[lien-ba]].
- **Fats Domino** được ghi nhận là người phổ biến **hợp âm chia ba** trên piano trong rock and roll ("Blueberry Hill", 1956).
::rhythm 12/8 >e-e-e e-e-e >e-e-e e-e-e // | Tay phải: hợp âm lặp chia ba, nhấn nhẹ phách 1 và 3 (minh hoạ)
::rhythm 12/8 q. q. q. q. // | Tay trái: nốt gốc ở bốn phách lớn (hoặc rải 1 – 5 – 8 trong mỗi nhóm ba)
::grand C4+E4+G4/C3 C4+E4+A4/A2 C4+F4+A4/F2 B3+D4+G4/G2 | Vòng doo-wop I – vi – IV – V — nền hoà âm phổ biến của slow rock (mỗi hợp âm một ô 12/8)
**Cách luyện**: đếm to "1-và-a 2-và-a…", tay phải lặp hợp âm nhẹ ở cổ tay; giữ **tay trái chắc** để ca sĩ dựa vào. Tốc độ chậm — khoảng 50 – 70 phách lớn mỗi phút (ước lượng thường gặp, không phải quy định).

## Rock and roll (thập niên 1950)
- Tay phải **nện hợp âm móc đơn đều** khớp với trống: [[trong-jazz|hi-hat]] móc đơn, trống trầm phách 1 – 3, trống lẫy phách 2 – 4 (Yamaha). Jerry Lee Lewis nổi tiếng với chuỗi móc đơn dồn dập.
- Tay trái: **bass boogie** chơi móc đơn đều (không [[swing|swing]]) là âm thanh rock and roll; bản đơn giản chỉ giữ các phách chính.
::rhythm 4/4 e-e >e-e e-e >e-e // | Tay phải rock and roll: móc đơn đều, nhấn phách 2 và 4
::staff bass C3+G3 C3+G3 C3+A3 C3+A3 C3+Bb3 C3+Bb3 C3+A3 C3+A3 | Một mẫu tay trái rock and roll quen thuộc trên C: quãng 5 – quãng 6 – quãng 7 thứ – quãng 6 (minh hoạ)
- Khung hoà âm: [[blues-12-nhip|blues 12 ô]]; học **bè trầm trước**, rồi dịch sang F và G (Pianist Magazine).

## Rock
- Tay trái **[[quang|quãng 8]]** hoặc **1 – 5** (kiểu "power chord", xem [[hop-am-6-va-add]]) [[kiem-soat-toc-do|giữ nhịp]] móc đơn.
- [[hoa-am-dieu-thuc|Hoà âm điệu thức]]: ♭VII – IV – I, I – ♭VII — xem [[hoa-am-pop]].
- Hợp âm tay phải **ngắn, gọn** ([[cach-dien-tau|staccato]]), ít pedal khi muốn tiếng "rock" sắc.
Liên quan: [[nhac-pho-thong-the-ky-20]], [[dem-hat-hien-dai]].

## Nghe ví dụ

::youtube 7pOr3dBFAeY | Scorpions — *Still Loving You*

::youtube NvR60Wg9R7Q | Bon Jovi — *Bed of Roses*
`,
  },
  {
    slug: 'dem-rnb-neo-soul',
    title: 'Đệm R&B, soul và neo soul',
    category: 'technique',
    also: ['jazz'],
    aliases: ['đệm R&B', 'R&B piano', 'neo soul', 'neo-soul', 'neo soul piano', 'hợp âm neo soul', 'soul piano', 'gospel pop', 'Rhodes', 'Fender Rhodes', 'J Dilla', 'Dilla time', 'new jack swing', '1-6-4-5', '11 chord', 'gospel V'],
    summary: 'Từ soul (Ray Charles, Sam Cooke) đến contemporary R&B và neo soul (D’Angelo, Erykah Badu, Robert Glasper): hợp âm mở rộng m9, m11, maj9, "hợp âm 11" kiểu F/G, hợp âm lướt kiểu gospel, trượt hợp âm song song, nhịp 16 cảm giác "lùi sau phách" kiểu J Dilla, đàn Rhodes — và nguyên tắc chừa chỗ cho giọng hát.',
    refs: [
      ['Wikipedia — Neo soul', 'https://en.wikipedia.org/wiki/Neo_soul'],
      ['Carnegie Hall Timeline — Neo soul', 'https://timeline.carnegiehall.org/genres/neo-soul'],
      ['Wikipedia — Baduizm', 'https://en.wikipedia.org/wiki/Baduizm'],
      ['Encyclopedia.com — Soul music', 'https://www.encyclopedia.com/media/encyclopedias-almanacs-transcripts-and-maps/soul-music'],
      ['Carnegie Hall Timeline — New jack swing', 'https://timeline.carnegiehall.org/genres/new-jack-swing'],
      ['Ethan Hein — Dilla time (về sách của Dan Charnas)', 'https://ethanhein.substack.com/p/dilla-time'],
      ['Baker (2019) — A cyclic approach to harmony in Robert Glasper’s music (Theory and Practice 44)', 'https://www.academia.edu/95628265/'],
      ['Thomas (2017) — The Jazz Gene, luận văn York University', 'https://yorkspace.library.yorku.ca/xmlui/bitstream/handle/10315/34304/Francis_P_Thomas_William_2017_Masters.pdf'],
      ['PianoGroove — Neo soul chords', 'https://www.pianogroove.com/?p=21017'],
      ['Piano With Jonny — 4 steps to neo soul chords', 'https://pianowithjonny.com/piano-lessons/4-steps-to-play-neo-soul-chords-on-piano/'],
      ['Piano With Jonny — Contemporary gospel & R&B piano in 3 steps', 'https://pianowithjonny.com/piano-lessons/play-contemporary-gospel-and-rb-piano-in-3-steps/'],
      ['PianoGroove — Gospel passing chords', 'https://pianogroove.com/blues-piano-lessons/gospel-passing-chords-substitutions/'],
      ['Wikipedia — Funk', 'https://en.wikipedia.org/wiki/Funk'],
      ['Berklee — Accompanying R&B', 'https://college.berklee.edu/node/2343896'],
      ['Pianoo — Vintage electric pianos', 'https://pianoo.com/electric-vintage-piano-iconic-sounds-of-the-60s-70s-and-80s/'],
    ],
    body: `
## Bối cảnh
| Dòng | Thời gian | Đặc điểm | Mốc |
|---|---|---|---|
| **Soul** | Thập niên 1950 – 60 | Gospel + R&B + [[blues-12-nhip|blues]]: hợp âm, cấu trúc, [[ngau-hung-piano|hỏi – đáp]] của nhà thờ | Ray Charles, "I Got a Woman" (1954); Sam Cooke — xem [[tai-hoa-am-gospel]] |
| **New jack swing** | Cuối 1980s | Nhịp hip hop có [[swing|swing]] + giọng hát kiểu gospel | Teddy Riley; nhóm Guy (1988) |
| **Neo soul** | Giữa 1990s | Nhạc cụ thật, chất jazz, funk, gospel, hip hop | D’Angelo *Brown Sugar* (1995), Maxwell *Urban Hang [[to-khuc-baroque|Suite]]* (1996), Erykah Badu *Baduizm* (1997), *The Miseducation of Lauryn Hill* (1998), D’Angelo *Voodoo* (2000) |
Tên "neo soul" được ghi công cho Kedar Massenburg (người quản lý D’Angelo, Badu). Bối cảnh rộng: [[nhac-pho-thong-the-ky-20]].

## Từ vựng hợp âm
| Hợp âm | Cách dựng | Ghi chú |
|---|---|---|
| **m9, m11** | m7 + 9 (+ 11) | PianoGroove gọi là "nền móng" của neo soul |
| **maj9** | [[hop-am-bay|maj7]] + 9 | Màu mơ màng |
| **"Hợp âm 11"** (9sus4) | Hợp âm trưởng một bậc dưới đặt trên bass: **F/G**, **B♭/C** | Át "treo", được gọi là "gospel V" — xem [[hop-am-gach-cheo]] |
| [[bac-am-giai|Dominant]] 9, 13 | 7 + 9 (+ 13) | Xem [[hop-am-mo-rong]] |
::grand E4+G4+B4+D5/C3+G3=Cmaj9 F4+A4+C5+E5/D3+A3=Dm9 G4+C5+D5/E3+B3=Em11 F4+A4+C5/G2=F/G | Các thế bấm R&B: tay trái gốc + 5, tay phải các nốt 3 – 5 – 7 – 9 (hoặc 7 – 11 – 9); F/G là "hợp âm 11" (minh hoạ)
Nhãn "Em11" ở hình trên: nốt 3 (G) có mặt nên đây là Em11 đầy đủ; bỏ G sẽ cho màu "treo" mở hơn.

## Các thủ pháp hoà âm
- **Vòng 1 – 6 – 4 – 5** và mẹo **"chèn ii – V"**: trước mỗi hợp âm đích, chơi ii – V của nó làm hợp âm lướt (Piano With Jonny) — đúng như [[thay-the-hop-am|ii phụ và át phụ]].
- **Hợp âm lướt kiểu gospel**: đi lên [[am-giai-cromatic|cromatic]] tới IV, [[hop-am-6-va-add|hợp âm treo]] lướt, 7 giảm lướt — xem [[hop-am-luot-jazz]], [[tai-hoa-am-gospel]].
- **Trượt nửa cung**: vào một hợp âm từ hợp âm cùng loại **thấp hơn nửa cung** (PianoGroove) — họ hàng của [[choi-ngoai-jazz|side-slipping]].
- **Trượt song song** (planing): giữ nguyên loại hợp âm và dời cả khối (ví dụ Cm9 → E♭m9) — hoà âm thiên về **[[dieu-thuc|điệu thức]]** hơn chức năng ([[hoa-am-song-song]]).
- Nghiên cứu về Robert Glasper (Baker, 2019): ưa **maj7/m7** hơn [[ii-v-i|ii – V – I]], nốt gốc và giai điệu đi theo **quãng 3 diatonic**, hầu như tránh hợp âm 7 át.
::grand C4+E4+G4/C3=C B3+D4+F4/B2=Bm7♭5 B3+D4+G#4/E3=E7 C4+E4+A4/A2=Am Bb3+D4+G4/G2=Gm7 Bb3+E4+G4/C3=C7 A3+C4+F4/F2=F B3+D4+F4/G2=G7 | 1 – 6 – 4 – 5 trong Đô trưởng với ii – V chèn trước Am và F (minh hoạ, thế bấm gọn)

## Nhịp điệu và cảm giác
- **Móc kép** là đơn vị nhịp; nhiều bài **swing nhẹ móc kép**. Funk (James Brown, giữa thập niên 1960) dồn trọng tâm vào **phách 1** ("the One") để các phách khác tự do đảo phách — xem [[dao-phach]].
- **[[tiet-tau-ngau-hung-jazz|Nốt ma]]** (ghost notes): nốt rất nhẹ chen giữa các nhấn — trên piano là tương phản [[cuong-do|cường độ]].
- **Nốt đón** (push): hợp âm vào sớm một móc kép hoặc móc đơn trước phách.
- **Cảm giác J Dilla**: lệch khỏi lưới nhịp một cách có chủ ý và lặp lại đều mỗi ô (Dan Charnas, *Dilla Time*, 2022); Questlove đổi cách đánh trống trong *Voodoo* cho khớp. Trên piano: đặt hợp âm **hơi sau phách** nhưng giữ bè trầm vững.
::rhythm 4/4 >e s-s rs s-e e >s-s e-e // | Một mẫu tay phải R&B móc kép có nốt đón và nhấn lệch (minh hoạ — nghe bản thu để bắt cảm giác)

## Âm sắc và kết cấu
- **Fender Rhodes** là âm thanh cốt lõi của neo soul (ấm, tiếng chuông); **Wurlitzer** gắt và nổi hơn; **Hammond organ** cho màu gospel. Xem [[cac-loai-dan-piano]].
- Có người chơi bass: **bỏ nốt gốc** ở tay phải, chơi thế bấm không gốc ở âm khu giữa ([[xep-hop-am]]).
- **Thưa, nối bè mượt**, không nhân đôi giai điệu; thế bấm **đơn giản hơn** dưới giọng hát (nốt căng có thể va với giai điệu); **fill** bằng [[am-giai-ngu-cung|ngũ cung]] hoặc [[am-giai-blues|âm giai blues]] ở chỗ ca sĩ lấy hơi.
- Berklee lưu ý: đệm R&B khó hơn [[dem-pop-ballad|đệm ballad]] jazz vì phải lo cả đường bass và các hình tiết tấu.
Liên quan: [[dem-jazz]], [[dem-cho-ca-si]], [[dem-hat-hien-dai]].

## Nghe ví dụ

::youtube SxVNOnPyvIU | D'Angelo — *Untitled (How Does It Feel)*
`,
  },
  {
    slug: 'dem-dieu-viet-nam',
    title: 'Các điệu đệm nhạc Việt: bolero, rumba, slow, valse, boston, tango…',
    category: 'technique',
    aliases: ['điệu bolero', 'đệm bolero', 'điệu rumba', 'đệm rumba', 'điệu slow', 'slow surf', 'điệu valse', 'điệu boston', 'điệu tango', 'điệu disco', 'điệu fox', 'đệm nhạc vàng', 'đệm nhạc trẻ'],
    summary: 'Ca khúc Việt Nam được đệm theo một bộ "điệu" quen thuộc: bolero, rumba, chachacha (nhạc vàng), slow, slow surf, ballad (nhạc trẻ), slow rock 12/8, valse và boston 3/4, tango, disco. Bài này tổng hợp nhịp, tốc độ ước lượng và cách chuyển mẫu "đánh" guitar sang piano — ghi rõ phần nào có nguồn học thuật, phần nào là kinh nghiệm của giáo viên.',
    refs: [
      ['Wikipedia — Bolero Việt Nam', 'https://vi.wikipedia.org/wiki/Bolero_Vi%E1%BB%87t_Nam'],
      ['Wikipedia — Bolero', 'https://en.wikipedia.org/wiki/Bolero'],
      ['Britannica — Bolero (dance)', 'https://www.britannica.com/art/bolero-dance'],
      ['Thanh Niên — Bài bolero đầu tiên trong âm nhạc Việt', 'https://thanhnien.vn/bai-bolero-dau-tien-trong-am-nhac-viet-185536951.htm'],
      ['Viện Âm nhạc — Vietnamese Boléro? (Nguyễn Thị Mỹ Liêm)', 'https://vienamnhac.vn/publication/books/bulletin/vietnamese-bolero'],
      ['Nguyen (2024) — Bolero: remaking pre-1975 music (Rising Asia Journal)', 'https://www.rajraf.org/article/bolero-remaking-pre-1975-music-in-post-socialist-vietnam/1167'],
      ['Vietnamnet — Rock Hà Nội, Bolero Sài Gòn (Jason Gibbs)', 'https://vietnamnet.vn/rock-ha-noi-bolero-sai-gon-cau-chuyen-tan-nhac-viet-nam-586409.html'],
      ['Yamaha Việt Nam — Học guitar điệu bolero', 'https://vn.yamaha.com/vi/news/2020/hoc-guitar-bolero.html'],
      ['Bối Ngọc Piano — Phân biệt các kiểu đệm hát piano', 'https://boingocpiano.com/cach-phan-biet-cac-kieu-dem-hat-piano'],
      ['Bối Ngọc Piano — Đệm slow rock', 'https://boingocpiano.com/phan-biet-dem-hat-piano-dieu-slowrock'],
      ['Bối Ngọc Piano — Valse và boston', 'https://boingocpiano.com/phan-biet-dem-hat-piano-dieu-valse-boston'],
      ['Học Đàn — Điệu slow', 'https://hocdan.edu.vn/kien-thuc/cach-danh-dieu-slow-co-ban-voi-dan-guitar/'],
      ['Guitarshare — Điệu slow surf', 'https://www.guitarshare.vn/guitar-blog/cach-anh-ieu-slow-surf-trong-guitar-em-html/'],
      ['Âm hình điệu valse, boston và cách đệm piano', 'https://luatsunguyenhuuphuoc.com/am-hinh-dieu-valse-va-dieu-boston-va-cach-dem-piano/'],
      ['Tiết tấu và phong cách đệm piano cho từng thể loại nhạc nhẹ', 'https://luatsunguyenhuuphuoc.com/nghe-thuat-tiet-tau-va-phong-cach-dem-piano-dac-trung-cho-tung-the-loai-nhac-nhe/'],
    ],
    body: `
## Về nguồn của bài này
- Lịch sử bolero có nguồn **bách khoa và học thuật** (Wikipedia, các nghiên cứu của Jason Gibbs, Minh X. Nguyen, Viện Âm nhạc).
- Còn **mẫu tiết tấu và tốc độ** của từng điệu chủ yếu đến từ **các trang dạy đàn** (Yamaha Việt Nam, các trung tâm piano, guitar); chưa tìm thấy tài liệu học thuật mô tả chính xác [[so-chi-nhip|ô nhịp]] bolero Việt. Các mẫu dưới đây nên xem là **mẫu dạy phổ biến**, không phải chuẩn duy nhất — hãy nghe bản thu để điều chỉnh.

## Bolero Việt Nam
- **Gốc**: bolero là thể loại Cuba (Santiago de Cuba, cuối thế kỷ 19), nhịp chẵn — khác bolero Tây Ban Nha nhịp 3/4. Vào Việt Nam đầu thập niên 1950 và phổ biến ở miền Nam trong dòng [[nhac-vang-bolero|nhạc vàng]] ([[tan-nhac-viet-nam]]).
- Bài "bolero đầu tiên" còn tranh luận: "Nắng chiều" (Lê Trọng Nguyễn, ghi "rumba – bolero", 1952/53), "Duyên quê" (Hoàng Thi Thơ), "Xóm đêm" (Phạm Đình Chương).
- Nhạc sĩ Việt **làm chậm** tiết tấu Latin và pha luyến láy dân ca, [[lich-su-am-nhac-viet-nam|cải lương]].
- **Nhịp và tốc độ** (theo các trang dạy đàn): 4/4, chậm nhất trong nhóm Latin — khoảng 64 – 78 phách/phút.
::rhythm 4/4 e:bùm-s:chờ-s:rát q:chách q:bùm q:chách // | Mẫu bolero thường dạy: phách 1 là một móc đơn + hai móc kép ("bùm – chờ rát"), rồi "chách – bùm – chách"
- **Trên piano**: tay trái nốt gốc ở phách 1 (có nốt lấy đà ngắn trước phách 3), nốt gốc phụ (nốt 5) ở phách 3; tay phải hợp âm ở phách 2 và 4 hoặc rải [[cach-dien-tau|legato]]. [[bien-tau|Biến tấu]] chủ yếu ở phách 3 – 4.
::grand /C3=1 E4+G4+C5/=2 /G2=3 E4+G4+C5/=4 | Khung bolero trên piano (minh hoạ): trầm phách 1 – hợp âm – trầm phụ phách 3 – hợp âm

## Rumba và chachacha
| Điệu | Nhịp, tốc độ | Đặc điểm |
|---|---|---|
| **Rumba** (nhạc Việt) | 4/4, khoảng 80 – 100 | Nhấn **phách 2 và 4**, nảy hơn bolero; tám móc đơn mỗi ô; có thể đổi qua lại với bolero trong cùng một bài |
| **Chachacha** | 4/4, nhanh nhất nhóm | Tinh nghịch; "cha-cha-cha" ở phách 4 – và – 1 — chi tiết ở [[dieu-dem-pho-bien]] |
::rhythm 4/4 e-e >e-e e-e >e-e // | Rumba: móc đơn đều, nhấn phách 2 và 4 (minh hoạ)

## Nhóm "slow" (nhạc trẻ, ballad)
| Điệu | Mẫu | Trên piano |
|---|---|---|
| **Slow** | 4/4 chậm; guitar "chình – chát – chình – chát": trầm phách 1, 3; hợp âm phách 2, 4 | Kiểu "bùm – chách", hoặc tay trái rải 1 – 5 – 8 móc đơn (xem [[dem-pop-ballad]]) |
| **Slow surf** | 4/4; mẫu guitar "Bass – 3 – 21 – 3 – 21 – 3 – 21 – 3" | Nốt trầm rồi xen kẽ nốt giữa và cặp nốt trên, đủ tám móc đơn |
| **Slow rock** | Các trang Việt ghi 6/8, 2/4 hay 4/4, nhưng thực chất là **12/8** (bốn nhóm ba) | Tay phải hợp âm [[lien-ba|liên ba]], tay trái nốt gốc mỗi phách lớn — xem [[dem-slow-rock-rock]]. Ví dụ hay được nêu: "Oh Mon Amour", "Ngày tân hôn" (Phạm Duy) |
::grand /C3=B G4/=3 C5+E5/=21 G4/=3 C5+E5/=21 G4/=3 C5+E5/=21 G4/=3 | Slow surf chuyển sang piano (minh hoạ): B = nốt trầm, 3 = nốt giữa, 21 = cặp nốt trên — tám móc đơn

## Điệu 3/4
| Điệu | Tốc độ (ước lượng) | Cách đệm |
|---|---|---|
| **Valse** | Nhanh — khoảng 120 – 180 | "Bùm – chách – chách": trầm phách 1, hợp âm phách 2 – 3 — xem [[tieu-pham-piano]] |
| **Boston** | Chậm — khoảng 60 – 65 | "Valse chậm": trầm ngân dài, hợp âm nhẹ; guitar "Bass – 3 – 21 – 3 – 21" |
::staff bass C3=1 E3+G3=2 E3+G3=3 / G2=1 F3+G3=2 F3+G3=3 | Đệm valse: trầm – hợp âm – hợp âm

## Tango, disco, fox
- **Tango** (2/4 hoặc 4/4): dứt khoát; tay trái xen kẽ trầm và hợp âm **ngắn, ngắt**; ở 4/4 nhấn nửa phách cuối ô.
- **Disco**: trầm đều **mọi phách** (four on the floor) — xem [[nhac-pho-thong-the-ky-20]].
- **Fox**: nhanh, tươi (các nguồn ghi 2/4 hoặc 4/4).
::rhythm 4/4 q q q >e e // | Tango 4/4: nhấn nửa phách cuối ô (minh hoạ)

## Chọn điệu cho bài hát
1. Nghe bản thu gốc, [[am-tiet-nhip|đếm nhịp]] (3 hay 4 phách; phách chia đôi hay chia ba).
2. Xác định tốc độ và tính chất: chậm – buồn (bolero, boston), nảy (rumba), sôi nổi (chachacha, disco).
3. Thử hai điệu gần nhau (bolero ↔ rumba, slow ↔ slow rock) và chọn cái hợp giọng ca sĩ.
Liên quan: [[dem-hat-piano]], [[dem-hat-hien-dai]].

## Nghe ví dụ

::youtube RVP5N4QXHeQ | *Sầu tím thiệp hồng* (bolero) · Quang Lê, Lệ Quyên

::youtube Nflsf3SytYc | Dân ca quan họ Bắc Ninh — *Người ơi người ở đừng về* · Lê Ngọc Thúy
`,
  },
  {
    slug: 'dem-bossa-nova',
    title: 'Đệm bossa nova',
    category: 'technique',
    also: ['jazz'],
    aliases: ['đệm bossa nova', 'bossa nova piano', 'batida', 'João Gilberto', 'Jobim', 'The Girl from Ipanema', 'Chega de Saudade', 'Getz/Gilberto', 'bossa clave'],
    summary: 'Bossa nova ra đời ở Rio de Janeiro cuối thập niên 1950: guitar "batida" của João Gilberto mô phỏng cả dàn trống samba, hoà âm jazz của Jobim. Bài này trình bày lịch sử ngắn, cảm giác "đung đưa" chứ không swing, tay trái 1 – 5 với nốt đón, tay phải đảo phách, thế bấm và bước hoà âm đặc trưng (II7 trong "The Girl from Ipanema").',
    refs: [
      ['Wikipedia — Bossa nova', 'https://en.wikipedia.org/wiki/Bossa_nova'],
      ['Wikipedia — João Gilberto', 'https://en.wikipedia.org/wiki/Jo%C3%A3o_Gilberto'],
      ['Wikipedia — Astrud Gilberto', 'https://en.wikipedia.org/wiki/Astrud_Gilberto'],
      ['The Jazz Piano Site — How to play bossa nova', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/how-to-play-bossa-nova/'],
      ['PianoGroove — Bossa nova basslines and grooves', 'https://pianogroove.com/bossa-nova-lessons/basslines-rhythm-grooves/'],
      ['Jazz Piano Blog — Bossa nova bass lines', 'https://jazzpianoblog.com/how-to-play-bossa-nova-bass-lines-at-the-piano/'],
      ['You’ll Hear It — The real way to play bossa nova', 'https://youllhearit.com/blog-2-minute-jazz-56-the-real-way-to-play-bossa-nova/'],
      ['Piano With Jonny — The Jobim chord progression', 'https://pianowithjonny.com/piano-lessons/the-jobim-chord-progression/'],
      ['Jazzadvice — How to play The Girl from Ipanema', 'https://www.jazzadvice.com/lessons/how-to-play-the-girl-from-ipanema/'],
      ['Art Research Journal (UFRN) — về Chega de Saudade', 'https://periodicos.ufrn.br/artresearchjournal/article/download/10002/8712/37684'],
    ],
    body: `
## Lịch sử ngắn
| Mốc | Năm |
|---|---|
| Rio de Janeiro, giới sinh viên và nhạc sĩ trung lưu | Cuối 1950s – đầu 1960s |
| "Chega de Saudade" (Jobim – Vinicius de Moraes): João Gilberto chơi guitar trong LP của Elizeth Cardoso — **"nhịp bossa nova" đầu tiên được thu âm**; đĩa đơn của chính Gilberto ra giữa năm 1958 | 1958 |
| *Getz/Gilberto* (thu 3/1963, phát hành 1964): giải Grammy Album của năm; "The Girl from Ipanema" (Astrud Gilberto hát lời Anh) đoạt giải Thu âm của năm | 1964 – 65 |
Bối cảnh: [[phong-cach-jazz]] (mục Latin).

## Cảm giác: đung đưa, không swing
- Móc đơn **thẳng** nhưng [[dao-phach|đảo phách]] nhiều; tiết chế, ít rung, ít thay đổi [[cuong-do|cường độ]] (TJPS).
- Ba lớp: **[[passacaglia-va-chaconne|bè trầm lặp]]**, **hợp âm đệm** đảo phách, **giai điệu**.
- **Batida** của Gilberto: ngón cái chơi trầm ở phách 1 và 3 (gốc – 5, như trống *surdo* của samba), các ngón kia gảy hợp âm đảo phách — một cây guitar [[doi-am|mô phỏng]] cả dàn trống.
- Khác samba: samba nhanh hơn, ồn hơn, dàn gõ lễ hội; bossa nova nhỏ nhẹ, thân mật, cho giọng hát và guitar, [[hoa-am-jazz|hoà âm jazz]].

## Tay trái
::rhythm 4/4 q.:1 e q.:5 e // | Tay trái bossa nova: gốc ở phách 1, nốt 5 ở phách 3; móc đơn ngắn trước phách 3 và trước phách 1 ô sau có thể lặp lại nốt trước, đón trước nốt gốc ô sau, nhảy quãng 8 hoặc tiếp cận nửa cung (TJPS)
::staff bass F2=1 F2 C3=5 C3 / G2=1 G2 D3=5 D3 | Khung trầm 1 – 5 trên Fmaj7 – G7 (minh hoạ); **không dùng pedal** để giữ tiếng trầm gọn
Peter Martin gợi ý có thể giản lược bè trầm thành nốt trắng — phần đảo phách nằm ở tay phải.

## Tay phải
- [[ngon-bam|Thế bấm]] **ba nốt không có nốt 5** (gốc, 3, 7 hoặc 3, 7, 9) — xem [[the-bam-ba-not]], [[xep-hop-am]].
- Tay phải **đón trước** sự đổi hợp âm (vào sớm nửa phách). Mẫu đảo phách cụ thể và "[[clave-tresillo-va-nhip-cong|clave]] bossa nova": [[dieu-dem-pho-bien]].

## Hoà âm Jobim
- Màu sắc ấn tượng trong khung chức năng: [[hop-am-bay|maj7]], m7, 7(9), 7(♭9), m7♭5, bè trong đi xuống [[am-giai-cromatic|cromatic]].
- Dấu ấn: **II7** ([[hop-am-at-phu|át phụ]] của V) ở ô 3 – 4 của "The Girl from Ipanema", rồi ii – ♭II7 – I.
::grand A3+C4+E4/F2=Fmaj7 B3+D4+F4/G2=G7 Bb3+D4+F4/G2=Gm7 Bb3+Db4+Fb4/Gb2=G♭7 A3+C4+E4/F2=Fmaj7 | Đoạn A kiểu "Ipanema" trong Fa trưởng: I – II7 – ii – ♭II7 (thay thế tritone của C7) – I (thế bấm gọn, minh hoạ)
- "The Girl from Ipanema": hình thức AABA **40 ô** (đoạn B dài 16 ô); bản *Getz/Gilberto* ở Rê giáng trưởng, thường chơi ở Fa trưởng. Xem [[hinh-thuc-ca-khuc-32]], [[thay-the-tritone]].
Liên quan: [[dem-jazz]], [[dem-hat-hien-dai]].

## Nghe ví dụ

::youtube N-TKOh0zsvU | Jobim — *The Girl from Ipanema* · Stan Getz, João Gilberto, Astrud Gilberto (*Getz/Gilberto*)

::youtube s61-e29Vr6Q | Jobim — *The Girl from Ipanema* · Stan Getz, Astrud Gilberto
`,
  },
  {
    slug: 'dem-hat-hien-dai',
    title: 'Đệm hát hiện đại: hệ thống và lộ trình',
    category: 'technique',
    aliases: ['đệm hát hiện đại', 'đệm hát pop', 'modern accompaniment', 'đệm piano hiện đại', 'lộ trình đệm hát', 'đệm theo tông ca sĩ'],
    summary: 'Lộ trình đệm hát trên piano từ cơ bản đến nâng cao, cho nhạc Việt và nhạc nước ngoài: đọc hợp âm và dịch giọng theo ca sĩ, các mẫu tay trái – tay phải, hoà âm pop, từng thể loại (pop/ballad, slow rock, rock, R&B và neo soul, bossa nova, các điệu nhạc Việt), cùng các kỹ năng dạo đầu, câu nối, kết bài và nghe ca sĩ.',
    refs: [
      ['Open Music Theory — Popular music', 'https://viva.pressbooks.pub/openmusictheory/chapter/intro-to-pop-schemas/'],
      ['Berklee Online — Take Note: piano accompaniment', 'https://online.berklee.edu/takenote/?p=3246'],
      ['PianoGroove — Accompanying singers', 'https://pianogroove.com/jazz-piano-lessons/accompanying-singers-melody-harmony-bass/'],
    ],
    body: `
## Năm cấp độ
| Cấp | Mục tiêu | Bài |
|---|---|---|
| **1. Đọc và [[kiem-soat-toc-do|giữ nhịp]]** | Đọc [[ky-hieu-hop-am|ký hiệu hợp âm]]; tay trái nốt gốc, tay phải [[hop-am-ba|hợp âm ba]]; không dừng khi chuyển hợp âm | [[dem-hat-piano]], [[vong-hop-am]], [[the-dao-hop-am]] |
| **2. Các điệu cơ bản** | Bolero, rumba, slow, valse, slow rock; nghe và chọn điệu | [[dem-dieu-viet-nam]], [[dieu-dem-pho-bien]] |
| **3. Đệm như một bản phối** | Mẫu tay trái 1 – 5 – 8, thể đảo gần nhất, sus2/add9, đường cong năng lượng, chừa chỗ cho giọng hát | [[dem-pop-ballad]], [[hoa-am-pop]], [[dem-slow-rock-rock]] |
| **4. Thể loại có hoà âm mở rộng** | Bossa nova, R&B, neo soul, gospel: [[hop-am-bay|hợp âm 7]], 9, 11, hợp âm lướt, nhịp móc kép | [[dem-bossa-nova]], [[dem-rnb-neo-soul]], [[tai-hoa-am-gospel]] |
| **5. Tự do tái hoà âm** | Thay hợp âm, đổi điệu, đổi nhịp, nâng tông, dạo đầu và kết bài riêng | [[tai-hoa-am]], [[doi-nhip-the-loai-jazz]], [[dem-cho-ca-si]] |

## Kỹ năng chung cho mọi thể loại
| Kỹ năng | Cách làm |
|---|---|
| **Theo tông ca sĩ** | Hỏi tông, hoặc nghe ca sĩ hát một câu rồi tìm nốt chủ; luyện [[dich-giong]] các vòng quen ở mọi giọng |
| **Dạo đầu** | Lấy vòng hợp âm của điệp khúc hoặc 2 – 4 ô cuối bài; kết dạo đầu trên **hợp âm át (V)** để ca sĩ vào đúng giọng |
| **Câu nối (fill)** | Chỉ chơi ở **chỗ ca sĩ lấy hơi**; dùng [[am-giai-ngu-cung|ngũ cung]], [[am-giai-blues|âm giai blues]] hoặc [[luyen-hop-am-rai|hợp âm rải]] ngắn |
| **Kết bài** | Lặp vòng cuối, chậm dần; hoặc kết bằng một hợp âm "màu" ([[hop-am-6-va-add|add9]], maj9) |
| **Nghe ca sĩ** | Không nhân đôi giai điệu; nhỏ lại khi ca sĩ hát nhỏ; giữ nhịp vững nhưng thở theo câu hát |
| **Nhận ra thể loại** | [[am-tiet-nhip|Đếm nhịp]], xác định chia đôi hay chia ba, nghe tay trống — xem [[the-loai-am-nhac]], [[nhac-pho-thong-the-ky-20]] |
::form Dạo_đầu Phiên_khúc Điệp_khúc Câu_nối Phiên_khúc Điệp_khúc Kết | Khung một bài đệm hát: dạo đầu và kết là phần người đệm tự quyết định

## Lộ trình luyện tập (gợi ý)
1. Mỗi tuần một **vòng hợp âm** ([[hoa-am-pop]]) — luyện ở 3 giọng.
2. Mỗi tuần một **điệu** — chơi vòng đó với điệu mới.
3. Mỗi tháng một **bài hát hoàn chỉnh**: dạo đầu, đệm, câu nối, kết; thu âm lại và nghe.
4. Đệm cho **người hát thật** càng sớm càng tốt — đó là cách duy nhất học "nghe ca sĩ".
Bối cảnh rộng hơn: [[ky-thuat-piano]], [[su-pham-piano]].
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

Phím sau càng được nhấn **sớm** trong lúc phím trước đang nhả thì càng liền. Mức chồng nhiều hay ít tuỳ ngữ cảnh, **[[cao-do|âm vực]]** (âm trầm ngân lâu nên dễ bị nhoè) và thẩm mỹ người chơi. Khi không thể nối bằng ngón, có thể dùng **đổi ngón trên phím** (xem [[choi-phuc-dieu]]) hoặc [[ban-dap|pedal]].

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
1. **[[tiet-tau|Tiết tấu]]**: một tay móc đơn, tay kia [[lien-ba]]; hoặc một tay giữ nốt dài trong khi tay kia chạy.
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
2. **Legato trên, staccato dưới**: để bè trên "hát" (thường là [[giai-dieu|giai điệu]]), tập bè trên legato còn bè dưới staccato — lời khuyên của Jeffrey Biegel cho [[tieu-pham-piano|Étude]] quãng 3 của Chopin.
3. **Bỏ bớt nốt**: chơi bè trên kèm bè dưới nhưng bỏ cách một nốt ở bè dưới, rồi chơi lại với những nốt đã bỏ.
4. **Rất chậm**, đánh **sâu tới đáy phím** khi ghép hai bè; giữ [[nhip-do|máy đếm nhịp]] và tăng **từng nấc** khi đã thật chắc (xem [[kiem-soat-toc-do]]).

Các giáo viên khác nhau về việc có nên tập **âm giai quãng 3** riêng: có người cho là hữu ích, có người khuyên rút bài tập từ chính tác phẩm.

## Hai Étude kinh điển của Chopin
- **Op. 25 số 6** (Sol thăng thứ) — Étude **quãng 3**, tay phải chạy quãng 3 liên tục, kể cả quãng 3 **[[am-giai-cromatic|cromatic]]**.
- **Op. 25 số 8** (Rê giáng trưởng) — Étude **quãng 6**, chuỗi quãng 6 đi lên, đi xuống và cromatic không ngắt, ở **cả hai tay**.

Xem [[Chopin]], [[the-loai|thể loại étude]].
`,
  },
  {
    slug: 'choi-phuc-dieu',
    title: 'Chơi nhạc phức điệu',
    category: 'technique',
    also: ['polyphony', 'improvisation'],
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
- Khi ghép, luôn biết **bè nào đang mang chủ đề** và bè nào làm nền [[tiet-tau|tiết tấu]].

## Hai bè trong một tay
Một tay có thể vừa giữ nốt dài của bè trên vừa chạy bè dưới. Nốt giữ phải **giữ đúng giá trị** — không nhấc sớm vì tay cần di chuyển.

## Đổi ngón trên phím
**Đổi ngón im lặng**: đang giữ một phím, thay ngón này bằng ngón khác **mà không nhả phím**, để giải phóng ngón cho nốt tiếp theo. Việc này không tạo ra âm thanh, nên chọn ngón nào là chuyện **thoải mái và chắc chắn**.

Các giáo viên [[organ-ong|organ]] (nhạc cụ dùng kỹ thuật này nhiều nhất) lại cho rằng nhạc [[thoi-ky-baroque|Baroque]] **thường không cần** đổi ngón: Bach thường được chơi với **legato có ngắt** hoặc [[ky-thuat-cham-phim|non-legato]], nên phần lớn đoạn hai bè một tay vẫn chơi được không đổi ngón. Ngoại lệ thường gặp là ở **[[cau-ket|kết]]** có thêm bè. Gợi ý thực tế: bắt đầu không đổi ngón; chỉ thêm khi một bè buộc phải giữ trong lúc bè kia chạy.

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
- Thuật ngữ "**trọng lượng**" — dùng trọng lực một cách có ý thức — có lẽ do [[ferruccio-busoni|Busoni]] đưa vào; Busoni ủng hộ **Rudolf Breithaupt** với cuốn *[[ky-thuat-piano|Kỹ thuật piano]] tự nhiên*.
- **Tobias Matthay** với *The Act of Touch* (**1903**) ở Anh nhấn mạnh **cánh tay, cơ thể** và trọng lượng.
- **Friedrich Adolf Steinhausen** (1905) cung cấp cơ sở **sinh lý học**, chỉ ra các "sai lầm sinh lý" của kỹ thuật cũ.

Lời khuyên "dùng trọng lượng cánh tay chứ không dùng sức ngón" trong [[lam-noi-giai-dieu]] đến từ truyền thống này.

## 3. Khoa học và chuyển động phối hợp (thế kỷ 20)
- **Otto Ortmann** (Nhạc viện Peabody) — *The Physiological Mechanics of Piano Technique* (**1929**): áp dụng cơ học, giải phẫu xương – cơ và sinh lý thần kinh vào cách chạm phím. Một số thuật ngữ của ông nay đã lỗi thời.
- **Josef Lhévinne** — *Basic Principles in [[lich-su-piano|Pianoforte]] Playing* (**1924**): kỹ thuật phải **phục vụ hiểu biết âm nhạc**; trọng tâm là **tiếng đàn đẹp**, "cánh tay lơ lửng trong không khí", cổ tay như **bộ giảm xóc**. "Sự tinh tế là không thể với một cánh tay nặng nề."
- **[[heinrich-neuhaus|Heinrich Neuhaus]]** — *Nghệ thuật chơi piano*: đặt **hình tượng nghệ thuật** và **tiếng đàn** lên trước kỹ thuật thuần tuý; người học phải "**nghe âm nhạc trong đầu**" trước khi chạm đàn; mục tiêu cuối cùng là học trò **tự dạy được mình**.
- **György Sándor** — *On Piano Playing* (1981): quy kỹ thuật về **năm chuyển động cơ bản** — rơi tự do, mẫu năm ngón ([[am-giai|âm giai]], [[luyen-hop-am-rai|hợp âm rải]]), **xoay**, [[cach-dien-tau|staccato]] và **đẩy** — rồi áp dụng vào tác phẩm.
- **Dorothy Taubman** (1917–2013): nổi tiếng nhờ **phục hồi cho người chơi bị chấn thương**; cho rằng kỹ thuật (hơn là tài năng) quyết định cả trình độ lẫn nguy cơ chấn thương. Trọng tâm là **chuyển động phối hợp** của cả cơ thể và **xoay cẳng tay** (xem [[tremolo-xoay-cang-tay]]). Một số thuật ngữ của phương pháp này cũng bị giới khoa học coi là đã lỗi thời.

## Ý nghĩa với người dạy
Về tư tưởng **sư phạm** (không chỉ kỹ thuật) của các thầy này: [[nha-su-pham-piano-phuong-tay]], [[truong-phai-su-pham-nga]], [[neuhaus-nghe-thuat-choi-piano]].

Xu hướng chung: từ "ngón tay làm mọi việc" sang **cả cánh tay và cơ thể cùng làm việc**, từ "luyện cho khoẻ" sang **thả lỏng và hiệu quả**, và kỹ thuật **phục vụ âm thanh**. Các trường phái hiện đại kết hợp ưu điểm của cả hai trường phái trước. Liên quan: [[ky-thuat-cham-phim]], [[suc-khoe-nguoi-choi-dan]].
`,
  },
  {
    slug: 'ban-tay-nho',
    title: 'Bàn tay nhỏ và kích thước bàn phím',
    category: 'technique',
    aliases: ['tay nhỏ', 'small hands', 'độ mở bàn tay', 'hand span', 'bàn phím hẹp', 'ESPK', 'bàn phím 7/8'],
    summary: 'Bàn phím chuẩn được thiết kế cho bàn tay lớn; nghiên cứu cho thấy người tay nhỏ đau và căng nhiều hơn. Bàn phím có phím hẹp (ESPK) là một giải pháp đang được nghiên cứu.',
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

## Bàn phím có phím hẹp (ESPK)
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
  {
    slug: "vi-tri-nam-ngon-va-am-giai-nam-not",
    title: "Vị trí năm ngón và âm giai năm nốt",
    category: 'technique',
    also: ['basics', 'musicianship'],
    aliases: ["vị trí năm ngón", "five-finger position", "five finger position", "âm giai năm nốt", "pentascale", "năm nốt", "vị trí Đô", "Middle C position", "C position", "vị trí Sol", "vị trí Fa"],
    summary: "Phần lớn giáo trình nhập môn đặt năm ngón lên năm phím liền nhau rồi mới mở rộng. Bài giải thích vị trí Đô, vị trí Đô giữa, các vị trí Sol, Fa, Rê, La; âm giai năm nốt trưởng và thứ; cách mỗi giáo trình dùng (Bastien chuyển qua nhiều giọng, Faber dạy tên nốt tách khỏi số ngón, Alfred Premier tránh khoá tay vào một vị trí); và điều nghiên cứu thật sự cho biết về cách đọc \"Đô giữa\".",
    refs: [
      ["Kjos — Bastien Piano Basics, Primer", "https://kjos.com/bastien-piano-basics-primer-piano-primer-1615.html"],
      ["Kjos — Bastien Piano Basics (multi-key)", "https://kjos.com/bastien-piano-basics-primer-piano-primer.html"],
      ["Five Little Fingers Studio — mô tả Faber Primer", "https://fivelittlefingerspianostudio.mymusicstaff.com/Order-Piano-Books"],
      ["Rainbow Resource — Alfred's Premier Piano Course 1A", "https://www.rainbowresource.com/041377.html"],
      ["Alfred — Basic Piano Library, Level 1A (PDF)", "https://content.alfred.com/catpages/00-2104.pdf"],
      ["Hal Leonard — Piano Lessons Book 1", "https://www.halleonard.com/product/296001/piano-lessons-book-1"],
      ["Color in My Piano — RCM 2022 technical requirements", "https://colorinmypiano.com/2022/07/19/freebie-technical-requirements-charts-for-rcms-2022-piano-syllabus/"],
      ["DiCienzo (2019) — Middle C vs Mixed Intervallic (uOttawa)", "https://ruor.uottawa.ca/handle/10393/39944"],
      ["Emond & Comeau (2013) — mô hình hoá hai cách đọc (PDF)", "https://piano.uottawa.ca/wp-content/uploads/2016/04/Publications/Music Reading  Learning a new skill/20. Bruno_Modélisation méthode 2013.pdf"],
    ],
    body: `
Bài nền của tay đàn, đi cùng [[ngon-bam]], [[ban-phim]] và [[cach-day-doc-not]].

## Vị trí năm ngón là gì?
Năm ngón tay (1 = ngón cái … 5 = ngón út) đặt lên **năm phím trắng liền nhau**, mỗi ngón một phím, không cần di chuyển bàn tay. Đây là "căn phòng" đầu tiên của người mới học: chơi được [[giai-dieu|giai điệu]] mà chưa phải học luồn ngón.

| Vị trí | Tay phải (ngón 1 → 5) | Tay trái (ngón 5 → 1) |
|---|---|---|
| **Đô** | Đô Rê Mi Fa Sol (từ Đô giữa) | Đô Rê Mi Fa Sol ([[quang|quãng 8]] dưới) |
| **Đô giữa** | Đô giữa → Sol | ngón 1 tay trái **cũng** đặt trên Đô giữa, xuống tới Fa |
| **Sol** | Sol La Si Đô Rê | Sol La Si Đô Rê |
| **Fa** | Fa Sol La Si♭ Đô | Fa Sol La Si♭ Đô |
::staff treble C4=1 D4=2 E4=3 F4=4 G4=5 | Vị trí Đô, tay phải: số dưới nốt là số ngón
::staff bass F3=5 G3=4 A3=3 B3=2 C4=1 | Vị trí Đô giữa, tay trái: ngón 1 trên Đô giữa

## Âm giai năm nốt
Năm nốt đầu của một [[am-giai|âm giai]] — **trưởng** (cung – cung – nửa cung – cung) hoặc **thứ** (cung – nửa cung – cung – cung). Đổi từ trưởng sang thứ chỉ cần **hạ nốt giữa** (bậc 3) nửa cung.
::staff treble C4 D4 E4 F4 G4 F4 E4 D4 C4 | Âm giai năm nốt Đô trưởng — lên và xuống
::staff treble C4 D4 Eb4 F4 G4 F4 Eb4 D4 C4 | Đô thứ: chỉ đổi Mi thành Mi♭
Giáo trình thi RCM (bản 2022) đưa âm giai năm nốt vào phần kỹ thuật ngay từ cấp chuẩn bị (Prep B, theo một bảng tổng hợp của giáo viên). Vì sao trưởng và thứ khác nhau: [[am-giai-truong]], [[am-giai-thu]], [[cung-nua-cung]].

## Các giáo trình dùng vị trí năm ngón thế nào
| Giáo trình | Cách dùng (theo mô tả của nhà xuất bản / nhà bán) |
|---|---|
| **[[giao-trinh-piano-nhap-mon|Bastien]] Piano Basics** | Bắt đầu ở vị trí Đô; trình bày các vị trí Đô, Fa, Sol; "nhiều giọng dần dần" — ba giọng mỗi cấp, cấp 1 – 4 |
| **[[danh-gia-giao-trinh-piano-va-nhac-ly|Faber Piano Adventures]]** | Primer: các thế năm ngón Đô, nhận ra liền bậc và nhảy bậc, và **"[[not-nhac|tên nốt]] tách khỏi số ngón"**; cấp 1 đọc quãng ở nhiều vị trí |
| **Alfred Basic** | Vị trí Đô, Sol rồi **vị trí Đô giữa** ở cấp 1A – 1B |
| **Alfred Premier** | Tránh "khoá" tay vào một vị trí (*non-position*): các bài chỉ nhấn nốt mốc |
| **Hal Leonard** | Đọc lần lượt theo số ngón → tên nốt → quãng; mốc Fa [[khoa-fa|khoá Fa]] và Sol [[khoa-sol|khoá Sol]] |

## Nghiên cứu nói gì về "học theo vị trí"
- Lời phê phán phổ biến: học trò quen một vị trí sẽ **đọc số ngón** thay vì đọc nốt. Nhưng theo Emond và Comeau (2013), các danh sách ưu – nhược của từng cách đọc trong sách sư phạm đều "dựa trên trực giác và kinh nghiệm giáo viên"; chưa có nghiên cứu đối chứng xác nhận "lệ thuộc số ngón".
- **DiCienzo (2019, Đại học Ottawa)**, trẻ 7 – 11 tuổi: nhóm học theo cách **Đô giữa** đọc tốt hơn nhóm học theo quãng hỗn hợp ở **mọi bài kiểm tra**, trừ nhận diện phím và mẫu 3 nốt ở vị trí Sol. Mô hình của Emond và Comeau cũng cho thấy cách đọc theo quãng đòi hỏi nhiều kiến thức về nốt và nhiều lập kế hoạch hơn lúc đầu.
- **Kết luận thực dụng cho giáo trình Lamar:** dùng vị trí năm ngón làm điểm xuất phát, nhưng **đổi vị trí sớm** (Đô → Sol → Fa) và luôn gọi **tên nốt** song song với số ngón — xem [[doc-not-nhanh]].

## Bài tập
*(Gợi ý của thư viện.)*
1. Đặt tay vị trí Đô, chơi 1-2-3-4-5-4-3-2-1 từng tay, rồi hai tay cùng lúc (tay trái bắt đầu ngón 5).
2. Hát tên nốt khi chơi, không hát số ngón.
3. Dịch cùng giai điệu năm nốt sang vị trí Sol rồi Fa — một bài [[dich-giong]] đầu tiên.
4. Đổi trưởng ↔ thứ: chơi "Đô – Rê – Mi – Rê – Đô", rồi thay Mi bằng Mi♭ và nghe khác biệt.
`,
  },
  {
    slug: "legato-va-thay-ngon",
    title: "Legato và thay ngón trên phím",
    category: 'technique',
    aliases: ["legato piano", "liền tiếng", "chơi liền", "thay ngón", "finger legato", "pedal legato", "overlapping legato"],
    summary: "Legato (liền tiếng) trên piano là ảo giác nối âm do người chơi tạo ra bằng cách chuyển trọng lượng từ phím này sang phím kia không có khoảng hở. Bài viết phân biệt legato bằng ngón và legato bằng pedal, trình bày kỹ thuật thay ngón trên phím, luồn ngón trong giai điệu, legatissimo và lối hát cantabile, kèm bài tập theo cấp độ.",
    refs: [
      ["Finger substitution (Wikipedia)", "https://en.wikipedia.org/wiki/Finger_substitution"],
      ["Gavin Black, On Teaching (The Diapason)", "https://www.thediapason.com/content/teaching-13"],
      ["Robert Estrin, 2 reasons you must change fingers on repeated notes (LivingPianos)", "https://livingpianos.com/2-reasons-you-must-change-fingers-on-repeated-notes"],
      ["Melanie Spanswick, Favourable Fingering", "https://melaniespanswick.com/2018/03/15/favourable-fingering/"],
      ["Pianistic Technique: Mechanics, Practice Systems, and Interpretive Control", "https://www.elliptic.co/corpus/gen-3040/piano-sonata-in-c-major-d-279-schubert/pianistic-technique.html"],
      ["Reginald Gerig, Famous Pianists and Their Technique (danh mục thư viện)", "https://discover.musikverket.se/bib/1246808"],
    ],
    body: `
## Legato trên piano là gì
**Legato** (liền tiếng, tiếng Anh cũng dùng *legato*) là lối chơi nối các nốt với nhau không có khoảng lặng. Trong bản nhạc, legato thường được ghi bằng **dấu luyến** (slur) phủ lên một nhóm nốt, hoặc bằng chữ *legato*. Khác với giọng hát hay đàn dây, búa đàn piano đánh vào dây rồi rời ra ngay, nên âm thanh luôn tắt dần sau khi đánh. Vì vậy các tài liệu sư phạm thường mô tả legato piano là một *ảo giác* do người chơi tạo ra: phím trước chỉ được nhả ra đúng lúc phím sau đi xuống, để giảm âm (damper) của nốt cũ hạ xuống cùng lúc nốt mới vang lên.

Ảo giác đó chỉ thuyết phục khi cường độ các nốt khớp với sự tắt dần tự nhiên: nốt sau không được to bất ngờ hơn phần vang còn lại của nốt trước. Đây là lý do nhiều giáo viên nói rằng legato là chuyện của **tai** trước khi là chuyện của ngón tay (xem [[cam-nhan-am-thanh]] và [[lam-noi-giai-dieu]]).

## Legato bằng ngón và legato bằng pedal
| Loại | Cách tạo | Ưu điểm | Hạn chế |
|---|---|---|---|
| Legato bằng ngón (finger legato) | Ngón giữ phím cho đến khi ngón sau đánh xuống | Âm sạch, kiểm soát từng bè | Bị giới hạn bởi tầm tay và ngón bấm |
| Legato bằng pedal (pedal legato) | Pedal vang giữ giảm âm, nối các nốt mà tay không nối được | Nối được bước nhảy xa, tạo độ vang | Dễ nhoè hoà âm, che mất phát âm của bè |
| Kết hợp | Ngón nối tối đa, pedal chỉ bù chỗ hở | Cân bằng nhất | Cần nghe kỹ để thay pedal đúng lúc |

Các nguồn sư phạm nhìn chung coi hai cách này là bổ sung cho nhau chứ không thay thế nhau. Một nguyên tắc phổ biến khi dạy học sinh nhỏ: tập legato bằng ngón **không pedal** trước, rồi mới thêm [[ban-dap|bàn đạp]]. Trong nhạc phức điệu (Bach), pedal thường được dùng rất hạn chế, nên legato gần như hoàn toàn phải do ngón tay đảm nhận.

## Thay ngón trên phím (finger substitution)
**Thay ngón** là thay ngón đang giữ phím bằng một ngón khác mà không nhả phím ra. Mục đích, theo Gavin Black (The Diapason), là để bàn tay có thể ở sẵn vị trí cho các nốt tiếp theo mà không phải nhả nốt đang giữ; ông cũng lưu ý rằng bản thân động tác thay ngón không phát ra âm thanh, nên giá trị của nó nằm ở sự tiện lợi và độ chắc chắn. Black cho rằng thay ngón cần thiết nhất khi một tay phải giữ nhiều nốt cùng lúc, như trong đối âm hoặc chuỗi hợp âm.

::staff treble C4=1 D4=2 E4=3 F4=4 G4=5-1 A4=2 B4=3 C5=4 | Thay ngón 5-1 trên nốt Sol để đi tiếp lên mà không nhả phím

Cách làm:
1. Ngón cũ giữ phím ở đáy phím, nhẹ, không ấn thêm.
2. Ngón mới đặt sát cạnh ngón cũ trên cùng mặt phím.
3. Ngón cũ trượt ra trong khi ngón mới nhận lấy trọng lượng; phím không được nhô lên.

Ở nốt lặp lại thì ngược lại: người ta thường **đổi ngón** (3-2-1 trên cùng một phím) để phím có thời gian trở về. Robert Estrin (LivingPianos) lưu ý rằng nếu nốt lặp không quá nhanh và không cần legato tuyệt đối thì có thể dùng cùng một ngón.

## Luồn ngón và vắt ngón trong giai điệu
Trong âm giai, ngón 1 luồn dưới (thumb under) và ngón 3 hoặc 4 vắt qua (crossing over) để nối liền hai vị trí tay (xem [[luyen-am-giai]] và [[ngon-bam]]). Trong giai điệu chậm, người chơi còn dùng các cách nối ít gặp hơn: vắt ngón 3 qua ngón 4, ngón 4 qua ngón 5, hoặc trượt cùng một ngón từ phím đen xuống phím trắng. Chopin được ghi nhận là thường viết những ngón bấm như vậy (trượt ngón, luồn ngón ngoài quy tắc) trong các tác phẩm của mình; xem Gerig, *Famous Pianists and Their Technique*. Các ngón bấm này nên được chọn ngay từ đầu: Melanie Spanswick khuyên chốt ngón bấm sớm và không đổi về sau vì phản xạ vận động đã hình thành.

::staff treble E4=3 D4=2 C4=1 B3=2 C4=1 | Ngón 2 vắt qua ngón 1 khi đi xuống

## Legatissimo và cantabile
**Legatissimo** (overlapping legato, legato chồng) là cố ý giữ phím trước lâu hơn một chút sau khi phím sau đã đi xuống, để hai âm chồng lên nhau trong khoảnh khắc. Lối này hợp với hình đệm rải trong nhạc lãng mạn, không hợp với giai điệu bậc liền vì dễ nhoè.

**Cantabile** (như hát) là chỉ dẫn biểu cảm hơn là một kỹ thuật riêng: giai điệu được hát lên bằng legato, với cường độ nổi trên phần đệm và các đỉnh câu được định hình như hơi thở của ca sĩ. Neuhaus dành nhiều trang cho việc tạo âm thanh hát trên piano (xem [[neuhaus-nghe-thuat-choi-piano]]).

## Lỗi thường gặp
- Nhả phím quá sớm, tạo khoảng hở nhỏ nghe như *non legato*.
- Giữ phím quá lâu ở giai điệu bậc liền, khiến hai nốt chồng lên nhau (legatissimo ngoài ý muốn).
- Ấn mạnh xuống đáy phím khi giữ, làm căng cẳng tay; giữ phím chỉ cần đủ để phím không nhô lên.
- Dựa vào pedal để che ngón bấm chưa tốt, khiến giai điệu nghe mờ khi bỏ pedal.

## Luyện tập theo cấp độ
1. **Cấp 1–2: chuyển trọng lượng.** Năm ngón C–G, chơi chậm từng cặp nốt, lắng nghe để nốt sau nhận đúng mức âm lượng còn lại của nốt trước.
2. **Cấp 2–3: thay ngón tĩnh.** Giữ một nốt bằng ngón 3, thay sang 1 rồi sang 5 mà phím không nhô lên; làm cả hai tay.
3. **Cấp 3–4: thay ngón trong giai điệu.** Bài tập trên khuông nhạc ở trên, sau đó đi xuống với thay ngón 1-5.
4. **Cấp 4–5: hai bè một tay.** Bè trên legato, bè dưới giữ nốt dài; dùng thay ngón ở bè trên khi bè dưới chiếm ngón 1.
5. **Cấp 6 trở lên: hợp âm nối.** Chuỗi hợp âm ba nối liền không pedal, rồi so sánh với cùng đoạn có pedal.

::grand E5+G5/C4=1 F5+A5/C4=2 E5+G5/C4=3 D5+F5/B3=4 | Bè trên liền tiếng trên nốt trầm giữ; đánh số các bước tập

Xem thêm: [[ky-thuat-cham-phim]], [[cach-dien-tau]], [[ngon-bam]], [[ban-dap]].
`,
  },
  {
    slug: "ky-thuat-staccato",
    title: "Kỹ thuật staccato",
    category: 'technique',
    aliases: ["staccato piano", "chơi nảy", "tiếng nảy", "finger staccato", "wrist staccato", "arm staccato", "staccatissimo", "mezzo-staccato", "non legato"],
    summary: "Staccato (nảy) là lối chơi rút ngắn trường độ để tách rời các nốt. Trên piano có nhiều kiểu staccato phân theo bộ phận chuyển động chính: ngón, cổ tay và bàn tay, cẳng tay, cả cánh tay; ngoài ra còn staccatissimo và portato. Bài viết mô tả cách chơi từng loại, staccato hợp âm và quãng tám, staccato ở tốc độ nhanh, cùng bài tập.",
    refs: [
      ["Melanie Spanswick, Approaches to Staccato Playing", "https://melaniespanswick.com/2017/08/19/approaches-to-staccato-playing/"],
      ["Melanie Spanswick, 5 Top Tips to Improve Wrist Staccato", "https://melaniespanswick.com/2015/04/09/5-top-tips-to-improve-wrist-staccato"],
      ["Melanie Spanswick, 5 Top Tips to Improve Finger Staccato", "https://melaniespanswick.com/2015/03/29/5-top-tips-to-improve-finger-staccato/"],
      ["Robert Estrin, How to play staccato on the piano (LivingPianos)", "https://livingpianos.com/how-to-play-staccato-on-the-piano/"],
      ["Finger Staccato Technique on the Piano (Virtual Sheet Music)", "https://www.virtualsheetmusic.com/experts/robert/finger-staccato"],
      ["Portato (Wikipedia)", "https://en.wikipedia.org/wiki/Portato"],
      ["Staccato (Wikipedia)", "https://en.wikipedia.com/wiki/Staccato"],
    ],
    body: `
## Định nghĩa và ký hiệu
**Staccato** (nảy, tiếng Ý nghĩa là *tách rời*) yêu cầu nốt được rút ngắn so với trường độ ghi, tạo khoảng lặng nhỏ giữa nốt này và nốt sau. Ký hiệu thường gặp là một **dấu chấm** đặt trên hoặc dưới đầu nốt, phía đối diện với đuôi nốt. Staccato chỉ quy định *độ ngắn*, không quy định *độ mạnh*: một nốt nảy có thể *pp* hoặc *ff* (xem [[cuong-do]]).

Rút ngắn bao nhiêu không có con số cố định. Quy ước dạy học hay dùng là nốt nảy vang khoảng một nửa trường độ ghi, nhưng đây chỉ là điểm xuất phát; độ ngắn thực tế tuỳ [[nhip-do]], phong cách và độ vang của phòng.

::rhythm 2/4 q q / e re e re // | Cách nghe gần đúng của hai nốt đen nảy: mỗi nốt vang khoảng một móc đơn

### Các ký hiệu lân cận
| Ký hiệu | Tên | Ý nghĩa thông thường |
|---|---|---|
| Chấm | Staccato | Ngắn, tách rời |
| Nêm hoặc vạch dọc nhỏ | Staccatissimo | Rất ngắn, thường sắc hơn |
| Chấm dưới dấu luyến | Portato, mezzo-staccato | Tách nhẹ, gần liền, mỗi nốt có một nhịp đẩy nhỏ |
| Gạch ngang kèm chấm | Portato | Giữ gần đủ trường độ nhưng hơi tách |
| Không ký hiệu, chữ non legato | Non legato | Không liền, không nảy |

Theo bài Staccato trên Wikipedia, trong nhạc thế kỷ 20 dấu nêm thường chỉ staccatissimo mạnh hơn dấu chấm, nhưng trước khoảng năm 1850 chấm, gạch và nêm thường có cùng một nghĩa, nên khi chơi Haydn, Mozart hay Beethoven cần cân nhắc ngữ cảnh và bản hiệu đính. Bài Portato cũng lưu ý ký hiệu chấm dưới dấu luyến có thể mang nghĩa khác nhau tuỳ nhạc cụ và thời kỳ.

## Phân loại theo chuyển động
Melanie Spanswick nhấn mạnh rằng mỗi kiểu nảy đòi hỏi một chuyển động cơ thể khác nhau. Các tài liệu sư phạm thường liệt kê bốn nhóm:

### Staccato ngón (finger staccato)
Đầu ngón bật khỏi phím, kéo nhẹ về phía lòng bàn tay, như phủi bụi. Cổ tay và cẳng tay gần như yên nhưng không cứng. Đây là kiểu dùng nhiều nhất cho chuỗi nốt nhanh, nhẹ (Spanswick). Spanswick cũng cảnh báo rằng nếu cánh tay và cổ tay đứng im hoàn toàn thì căng cơ xuất hiện nhanh, khiến chơi nhanh gần như không thể.

### Staccato cổ tay và bàn tay (wrist staccato)
Bàn tay nảy từ cổ tay như một cú vỗ nhẹ, ngón giữ hình dạng ổn định. Đây là kiểu cơ bản cho nốt đơn ở tốc độ vừa, cho quãng ba, quãng sáu và hợp âm nhỏ. Spanswick nhận xét gọi là staccato cổ tay thật ra chưa đúng hẳn, vì động tác cần cả cẳng tay, cánh tay trên và thân người linh hoạt; cổ tay khoá cứng sẽ sinh căng.

### Staccato cẳng tay (forearm staccato)
Chuyển động xuất phát từ khuỷu, cẳng tay và bàn tay đi như một khối, cổ tay mềm để giảm chấn. Dùng cho hợp âm và quãng tám ở cường độ vừa đến mạnh.

### Staccato cả cánh tay (arm staccato)
Cả cánh tay rơi xuống rồi bật lên theo phản lực của phím, thường cho hợp âm *ff* đơn lẻ hoặc nốt nhấn ở cuối câu. Tốc độ lặp chậm nhất, âm lượng lớn nhất. Xem thêm [[trong-luong-va-tha-long]].

Ngoài ra còn lối nảy sát phím (close staccato) và *jeu perlé*, chuỗi nốt rất đều với độ tách cực nhỏ; nhiều giáo viên xếp chúng giữa staccato ngón và non legato.

## Staccato hợp âm và quãng tám
Với hợp âm nảy, các ngón phải định hình trước khi chạm phím để mọi nốt vang cùng lúc (xem [[ky-thuat-hop-am-va-voicing]]). Quãng tám nảy nhanh thường dùng cổ tay, ở tốc độ chậm và mạnh hơn thì chuyển sang cẳng tay; kỹ thuật chi tiết có ở [[ky-thuat-quang-tam]].

::staff bass C3+E3+G3 C3+E3+G3 F3+A3+C4 G3+B3+D4 / C3+E3+G3 | Hợp âm nảy tay trái: giữ khung tay, nảy từ cổ tay

## Staccato ở tốc độ nhanh
Khi tốc độ tăng, biên độ chuyển động phải giảm: tay càng ở gần phím, nốt càng nhanh. Nguyên tắc chung trong các nguồn trên là chuyển dần từ cánh tay sang cẳng tay, cổ tay rồi ngón khi nhịp độ tăng, và nhả lực ngay sau mỗi tiếng đánh. Nốt lặp nhanh thường được chia ngón 3-2-1 hoặc 4-3-2-1 (xem [[ngon-bam]]).

## Lỗi thường gặp
- Nảy bằng cách giật ngón lên cao, làm tay căng và mất kiểm soát âm lượng.
- Đánh mạnh hơn cần thiết chỉ vì thấy dấu chấm.
- Nốt nảy không đều: một số ngắn, một số gần non legato.
- Cổ tay khoá cứng khi chơi hợp âm nảy.
- Quên rằng sau dấu nảy vẫn là nhịp: khoảng lặng phải đúng phách, không được kéo nhanh (xem [[cam-nhan-phach]]).

## Luyện tập
1. **Thả và bật.** Từ độ cao vài phân, thả cẳng tay để ngón 3 chạm phím rồi để phím đẩy tay bật lên. Không ấn.
2. **Đổi kiểu nảy trên cùng một nốt.** Chơi Đô bốn lần bằng ngón, bốn lần bằng cổ tay, bốn lần bằng cẳng tay; nghe sự khác biệt về màu tiếng.
3. **Gam nảy.** Gam Đô trưởng một quãng tám, staccato ngón, chậm rồi nhanh dần.
4. **Xen kẽ legato và staccato.** Hai nốt luyến rồi hai nốt nảy (nốt cuối của dấu luyến thường được nhả nhẹ).
5. **Hợp âm nảy.** Bài tập trên khuông nhạc ở trên, giữ khung tay không đổi.

::staff treble C4=1 D4=2 E4=3 F4=4 G4=5 F4=4 E4=3 D4=2 C4=1 | Năm ngón nảy, lần lượt bằng ngón, cổ tay rồi cẳng tay

Xem thêm: [[ky-thuat-cham-phim]], [[cach-dien-tau]], [[legato-va-thay-ngon]].
`,
  },
  {
    slug: "trong-luong-va-tha-long",
    title: "Trọng lượng cánh tay và sự thả lỏng",
    category: 'technique',
    aliases: ["thả lỏng khi chơi đàn", "relaxation piano", "free fall", "rơi tự do", "tư thế cổ tay"],
    summary: "Trọng lượng cánh tay và thả lỏng là hai khái niệm trung tâm của sư phạm piano từ đầu thế kỷ 20. Bài viết giải thích cách dùng trọng lượng, sự khác nhau giữa thả lỏng và căng cơ cần thiết, động tác rơi tự do, vị trí và độ mềm của cổ tay, nguyên lý xoay, các lỗi căng cơ thường gặp, và quan điểm khác nhau giữa Matthay, Breithaupt, Steinhausen, Ortmann và Taubman.",
    refs: [
      ["Rudolf Maria Breithaupt (Wikipedia)", "https://en.wikipedia.org/wiki/Rudolf_Maria_Breithaupt"],
      ["Friedrich Adolf Steinhausen (Wikipedia)", "https://en.wikipedia.org/wiki/Friedrich_Adolf_Steinhausen"],
      ["Luận văn về Matthay và Breithaupt (University of Pretoria)", "https://repository.up.ac.za/bitstreams/3c4b1d1a-b440-4997-806f-2c063b52b8c3/download"],
      ["Otto Ortmann (Wikipedia)", "https://en.wikipedia.org/wiki/Otto_Ortmann"],
      ["Tổng quan thư mục sư phạm kỹ thuật piano (University of Salford)", "https://salford-repository.worktribe.com/OutputFile/1502118"],
      ["What is the Taubman Approach (Pianist Magazine)", "https://www.pianistmagazine.com/blogs/what-is-the-taubman-approach-and-how-can-it-help-you-as-a-pianist/"],
      ["Alan Fraser, Weight Technique", "https://www.alanfraserinstitute.com/weightwoes.php"],
      ["Reginald Gerig, Famous Pianists and Their Technique (danh mục thư viện)", "https://discover.musikverket.se/bib/1246808"],
    ],
    body: `
## Vì sao nói đến trọng lượng
Thế kỷ 19, nhiều trường dạy piano đặt trọng tâm vào sức mạnh và độ độc lập của ngón (lối *kỹ thuật ngón*, finger technique), tập với cánh tay giữ yên. Khoảng đầu thế kỷ 20, một số nhà sư phạm cho rằng cách tập đó gây căng và hạn chế âm thanh, và đề xuất dùng **trọng lượng cánh tay** (arm weight): để sức nặng tự nhiên của cánh tay truyền qua đầu ngón xuống phím thay vì ép bằng cơ ngón. Ý tưởng này về sau có ảnh hưởng rất rộng, kể cả trong trường phái Nga mà Neuhaus là đại diện (xem [[neuhaus-nghe-thuat-choi-piano]] và [[lich-su-ky-thuat-piano]]).

::timeline 1903=Matthay_The_Act_of_Touch 1905=Breithaupt_Die_natuerliche_Klaviertechnik 1929=Ortmann_Physiological_Mechanics | Một số mốc xuất bản của cuộc tranh luận về trọng lượng

## Các trường phái và điểm bất đồng
| Tác giả | Ý chính | Phê bình, ghi chú |
|---|---|---|
| Tobias Matthay (Anh) | Phân biệt nhiều kiểu chạm, chú ý sức cản của phím, nhả trọng lượng và xoay cẳng tay | Fielden về sau đi đến kết luận khác (theo bài tổng quan Salford) |
| Rudolf Breithaupt (Đức) | Kỹ thuật trọng lượng đối lập kỹ thuật ngón, xuất phát từ trạng thái cơ nghỉ | Bị hai phía phê bình |
| Friedrich Steinhausen (Đức) | Tiếp cận sinh lý, khái niệm tải bằng không, liều lượng trọng lượng | Phê bình Breithaupt quay lại kỹ thuật ngón |
| Otto Ortmann (Mỹ) | Đo đạc thực nghiệm cơ học và sinh lý của động tác chơi đàn | Tập thứ ba (về tâm lý chơi đàn) theo kế hoạch chưa bao giờ hoàn thành (Salford) |
| Dorothy Taubman (Mỹ) | Ngón, bàn tay, cẳng tay là một khối; thẳng hàng và xoay | Chưa thấy nghiên cứu lâm sàng độc lập; bằng chứng chủ yếu là lời chứng |

Theo Wikipedia, Breithaupt chủ trương dùng quán tính của cả cánh tay bắt đầu từ trạng thái cơ nghỉ, nhưng chính chuyên luận của ông vẫn giữ một tầng kỹ thuật ngón có cố định cơ; ông bị phía Matthay phê bình vì không coi trọng lượng là yếu tố duy nhất, và bị Steinhausen phê bình vì đưa kỹ thuật ngón trở lại. Một luận văn tại Đại học Pretoria nhấn mạnh rằng Matthay không gạt bỏ ngón: ông muốn sức ngón và bàn tay hoạt động độc lập với trọng lượng cánh tay. Steinhausen mô tả trạng thái *tải bằng không*, khi cơ vừa đủ đỡ cánh tay lơ lửng, từ đó người chơi định liều trọng lượng truyền xuống đầu ngón.

**Ortmann** (Peabody Conservatory) xuất bản *The Physiological Mechanics of Piano Technique* năm 1929, được một bài tổng quan của Đại học Salford đánh giá có lẽ là cuốn sách piano đầu tiên dùng đúng phương pháp khoa học. Gerig, trong *Famous Pianists and Their Technique*, đặt tên chương về ông là kỹ thuật piano trưởng thành. Cách hiểu phổ biến về đóng góp của Ortmann là: thả lỏng hoàn toàn không tồn tại khi chơi đàn; điều cần là phối hợp đúng lúc giữa co và nghỉ. Các tìm kiếm cho bài này không tìm được đoạn văn gốc của Ortmann về điểm đó, vì vậy chỉ nên coi đây là tóm tắt thông dụng.

**Trường phái Taubman**, do Edna Golandsky và Viện Golandsky tiếp nối, chú trọng sự thẳng hàng giữa ngón, bàn tay và cẳng tay, cùng những vòng xoay nhỏ để tránh vặn và căng ngón. Theo Pianist Magazine, cổ tay quá cao phá vỡ đường thẳng tay và cẳng tay; khuỷu là điểm tựa, đưa quá xa thân gây mỏi vai và cổ, ép quá sát thì cẳng tay mất tự do.

## Thả lỏng và căng cơ cần thiết
Không có nốt nào được chơi bằng cơ hoàn toàn nghỉ: đầu ngón phải đủ chắc để đỡ trọng lượng, nếu không ngón sẽ gập khớp. Vì vậy nhiều giáo viên ngày nay dùng chữ *tự do* hay *tiết kiệm lực* thay cho *thả lỏng*: dùng đúng lượng cơ cần thiết, đúng lúc, rồi nhả ngay sau khi phím chạm đáy. Alan Fraser còn cảnh báo rằng lạm dụng động tác thả rơi có thể cắt câu nhạc thành các mảnh rời.

### Rơi tự do (free fall)
Bài tập kinh điển: nâng cẳng tay, buông để tay rơi theo trọng lượng, ngón 3 đón phím, cổ tay hơi võng xuống rồi trở lại. Theo Kochevitsky (*The Art of Piano Playing: A Scientific Approach*), khái niệm rơi tự do của Deppe nên được hiểu theo nghĩa ẩn dụ chứ không phải nghĩa đen, vì ngón tay luôn phải nhắm đúng phím và kiểm soát âm lượng.

## Cổ tay và xoay
Cổ tay nên linh hoạt, ở độ cao gần ngang cẳng tay; nó là bộ giảm chấn và là nơi điều chỉnh hướng. **Xoay cẳng tay** (forearm rotation) là chuyển động quanh trục cẳng tay, giúp ngón 1 và ngón 5 không phải tự nâng cao. Matthay và Taubman đều coi xoay là nền tảng; kỹ thuật mở rộng có ở [[tremolo-xoay-cang-tay]].

::staff bass C3=5 G3=1 E3=3 G3=1 C3=5 G3=1 E3=3 G3=1 | Bè Alberti: một vòng xoay nhỏ cho mỗi nốt thay vì nhấc từng ngón

## Lỗi thường gặp
- Nhún vai, nín thở khi đoạn nhạc khó.
- Cổ tay khoá cứng hoặc gập lên cao, ngón cái bị kéo căng.
- Ấn tiếp sau khi phím đã chạm đáy, giữ lực suốt trường độ.
- Khớp đầu ngón gập ngược, không đỡ nổi trọng lượng.
- Hiểu thả lỏng là mềm nhũn, dẫn đến tiếng không rõ.
Đau kéo dài cần được khám chuyên môn (xem [[suc-khoe-nguoi-choi-dan]]).

## Luyện tập
1. **Cánh tay treo.** Ngồi thẳng, để hai tay buông thõng, cảm nhận sức nặng; rồi nâng lên và đặt lên phím với lượng cơ tối thiểu.
2. **Rơi và giữ.** Rơi tự do trên một nốt, giữ phím bằng đầu ngón chắc, cổ tay mềm; nhả lực nhưng vẫn giữ phím.
3. **Chuyển trọng lượng.** Năm ngón chậm, trọng lượng đi từ ngón này sang ngón kia như bước chân (xem [[legato-va-thay-ngon]]).
4. **Xoay nhỏ.** Bè Alberti ở trên, chậm, nhìn cẳng tay để thấy vòng xoay.
5. **Kiểm tra căng.** Trong lúc chơi, thỉnh thoảng dừng và lắc nhẹ cổ tay; nếu không lắc được là đang khoá.

Xem thêm: [[tu-the]], [[ky-thuat-cham-phim]], [[phuong-phap-luyen-tap]].
`,
  },
  {
    slug: "ky-thuat-hop-am-va-voicing",
    title: "Kỹ thuật chơi hợp âm và voicing",
    category: 'technique',
    aliases: ["chơi hợp âm piano", "kỹ thuật hợp âm", "cân bằng hợp âm", "làm nổi nốt trên hợp âm", "chord voicing piano", "hợp âm rải chéo", "rolled chord", "arpeggiated chord", "khung bàn tay", "hand frame", "chord jumps"],
    summary: "Chơi hợp âm trên piano đòi hỏi các nốt vang cùng lúc, cân bằng theo ý đồ âm nhạc (voicing) và di chuyển chính xác giữa các vị trí. Bài viết trình bày cách đánh đồng thời, làm nổi nốt trên cùng, giữ khung bàn tay, bước nhảy hợp âm, hợp âm rải cuộn và cân bằng giữa hai tay, kèm bài tập.",
    refs: [
      ["5 top tips for voicing (Pianist Magazine)", "https://www.pianistmagazine.com/5-top-tips-for-voicing"],
      ["Graham Fitch, Voicing chords (Practising the Piano)", "https://practisingthepiano.com/voicing-chords/"],
      ["Melanie Spanswick, Tricky Corners: Fourth and Fifth Fingers in Chords", "https://melaniespanswick.com/2021/02/07/tricky-corners-fourth-and-fifth-fingers-in-chords/"],
      ["Melanie Spanswick, Voicing: 5 Tips", "https://melaniespanswick.com/2024/03/03/voicing-5-tips/"],
      ["Piano chord voicings (Key-notes)", "https://www.key-notes.com/blog/piano-chord-voicings"],
      ["Melanie Spanswick, Approaches to Staccato Playing", "https://melaniespanswick.com/2017/08/19/approaches-to-staccato-playing/"],
    ],
    body: `
## Hợp âm như một động tác
Với người chơi piano, một hợp âm không phải là nhiều nốt đánh riêng lẻ mà là **một động tác** của cả bàn tay. Các ngón được định hình trước trên mặt phím, rồi cánh tay mang khối tay đó xuống. Trong sách này, *voicing* dùng theo nghĩa của kỹ thuật biểu diễn: phân bố cường độ giữa các nốt trong hợp âm. Nghĩa hoà âm của từ này (chọn và sắp xếp nốt) có ở [[xep-hop-am]].

## Đánh đồng thời
Các nốt phải chạm đáy phím gần như cùng lúc. Lỗi phổ biến là ngón dài (2, 3) xuống trước, ngón 5 hoặc ngón 1 xuống sau, nghe như rải nhẹ ngoài ý muốn. Cách khắc phục là đặt sẵn đầu ngón trên phím trước khi đánh, và tập cử động đó ở trạng thái im lặng. Trang Key-notes gợi ý tập trên nắp đàn đóng để cả bàn tay đáp xuống thành một âm.

## Khung bàn tay (hand frame)
*Khung bàn tay* là hình dạng ổn định của bàn tay khi giữ một hợp âm: vòm lòng bàn tay mở, khớp gốc ngón (knuckle) đỡ được trọng lượng, đầu ngón chắc. Khung đủ vững để không gập khi nhận trọng lượng, nhưng không cứng đến mức cổ tay bị khoá. Với hợp âm rộng, đặc biệt ở [[ban-tay-nho]], có thể bỏ bớt nốt giữa hoặc chia nốt cho tay kia.

::staff treble C4+E4+G4=1-3-5 C4+F4+A4=1-2-5 B3+D4+G4=1-2-5 C4+E4+G4=1-3-5 | Hợp âm ba tay phải với ngón bấm chuẩn: giữ khung, chỉ thay ngón cần thiết

Spanswick lưu ý ngón 4 và 5 thường là phía yếu trong hợp âm; cần cho chúng đủ trọng lượng bằng cách nghiêng nhẹ bàn tay về phía ngón út thay vì cố ép riêng từng ngón.

## Voicing: làm nổi nốt trên cùng
Trong phần lớn nhạc giai điệu, nốt cao nhất của hợp âm tay phải mang giai điệu và cần vang hơn các nốt dưới (xem [[lam-noi-giai-dieu]]).

### Cách làm theo các nguồn
- **Tốc độ phím khác nhau.** Pianist Magazine mô tả nốt trên được nhấn nhanh và chắc hơn, các nốt dưới chậm và nhẹ hơn. Trọng lượng dồn về phía ngón 4 và 5.
- **Nghiêng cổ tay.** Cũng theo Pianist Magazine, đưa cổ tay hơi sang phải để bàn tay và cánh tay đỡ ngón trên cùng.
- **Ngón 5 chắc hơn.** Graham Fitch (Practising the Piano) kể rằng Rubinstein gọi hai ngón 5 là những người chỉ huy dẫn dắt âm nhạc; muốn ngón 5 vang hơn ngón 3 thì ngón 5 phải chắc hơn.
- **Lệch thời gian rất nhỏ.** Pianist Magazine còn gợi ý để nốt trên xuống chậm hơn một chút mà tai không nghe ra. Đây là mẹo gây tranh cãi: nhiều giáo viên coi mọi sự lệch là lỗi, nên chỉ nên dùng như bài tập tạm thời.

Không phải lúc nào nốt trên cùng cũng là nốt cần nổi. Trong hợp xướng tứ bè, bè trong hoặc bè trầm có thể mang chủ đề; tay trái thường cần nốt trầm vững để làm nền hoà âm. Quyết định voicing là quyết định âm nhạc, không phải công thức.

::grand E5+G5+C6/C3+G3 F5+A5+C6/F3+C4 D5+G5+B5/G3+D4 E5+G5+C6/C3+G3 | Nốt trên tay phải là giai điệu, nốt trầm tay trái là nền; hai nốt giữa nhẹ nhất

## Cân bằng giữa hai tay
Khi hai tay cùng chơi hợp âm, tổng số nốt có thể lên tới tám hay mười. Nếu mọi nốt cùng một cường độ, âm thanh sẽ dày và đục. Nguyên tắc thường dạy là: giai điệu rõ nhất, nốt trầm thứ hai, các nốt giữa của cả hai tay nhẹ nhất. Key-notes diễn đạt điều này bằng hình ảnh các bè dưới nhẹ như lông. Ở những đoạn [[phoi-hop-hai-tay|phối hợp hai tay]] dày, nên tập từng tay với voicing riêng rồi mới ghép.

## Bước nhảy hợp âm
Bước nhảy giữa các hợp âm xa nhau dựa vào ba yếu tố: nhìn trước đích, định hình khung tay trong không trung, và di chuyển theo vòng cung thấp chứ không nhấc cao. Chi tiết luyện bước nhảy có ở [[buoc-nhay-xa]]. Với hợp âm nảy, xem [[ky-thuat-staccato]].

## Hợp âm rải cuộn
Hợp âm có dấu lượn sóng dọc được **rải cuộn** (rolled, arpeggiated chord): các nốt vang lần lượt từ dưới lên rất nhanh và được giữ lại. Theo quy ước thông dụng, nốt trên cùng thường rơi đúng phách khi giai điệu nằm ở đó, nhưng các bản hiệu đính và thời kỳ khác nhau có cách xử lý khác nhau (rải trước phách hoặc bắt đầu trên phách), nên cần tham khảo tài liệu phong cách. Khi dấu lượn sóng liền qua hai khuông, hai tay rải nối tiếp nhau thành một nét; khi tách riêng, hai tay rải cùng lúc. Hợp âm rải dạng hình đệm có bài riêng ở [[luyen-hop-am-rai]].

## Lỗi thường gặp
- Nốt trong hợp âm không xuống cùng lúc.
- Mọi nốt to bằng nhau, giai điệu bị chìm.
- Khung tay sụp ở ngón 5 hoặc ngón 1.
- Nhấc tay quá cao giữa các hợp âm, mất chính xác.
- Ấn tiếp sau khi hợp âm đã vang, gây mỏi (xem [[trong-luong-va-tha-long]]).

## Luyện tập
1. **Đặt khung im lặng.** Đặt hợp âm lên mặt phím không đánh, kiểm tra các ngón, rồi mới đánh.
2. **Tách giai điệu.** Pianist Magazine gợi ý chơi nốt trên một mình, rồi các nốt dưới, rồi cả hợp âm.
3. **Rút ngắn khoảng cách.** Theo Fitch (dựa trên Neuhaus), đánh nốt mạnh nhất trước, nốt còn lại sau, rồi thu hẹp dần khoảng cách cho tới khi vang cùng lúc.
4. **Đổi bè nổi.** Cùng một hợp âm, lần lượt làm nổi nốt trên, nốt giữa, nốt dưới.
5. **Chuỗi I–IV–V–I.** Bài trên khuông đôi ở trên, chậm, rồi thêm pedal và bước nhảy quãng tám.

Xem thêm: [[ky-thuat-cham-phim]], [[hop-am-ba]], [[the-dao-hop-am]], [[cach-dien-tau]].
`,
  },
  {
    slug: "giao-trinh-etude-piano",
    title: "Giáo trình etude piano theo trình độ",
    category: 'technique',
    aliases: ["etude piano", "bản đồ etude", "tuyển tập luyện ngón", "piano études by level", "study collections", "Czerny op.299", "Burgmüller op.100"],
    summary: "Bản đồ các tuyển tập etude (bài luyện, khúc luyện) và bài tập kỹ thuật piano thông dụng, xếp theo trình độ từ sơ cấp đến biểu diễn, kèm kỹ thuật chính mà mỗi tuyển tập rèn luyện và cách chọn bài cho học sinh.",
    refs: [
      ["IMSLP – List of Piano Études", "https://imslp.org/wiki/List_of_Piano_Études"],
      ["Marmara University – nghiên cứu phân loại etude Czerny, Duvernoy, Berens, Burgmüller", "https://openaccess.marmara.edu.tr/entities/publication/3407fc70-5f8f-4945-9b96-102990f84038"],
      ["VJOL – Etude op.299 của Czerny trong giáo trình piano (Tạp chí Giáo dục Nghệ thuật)", "https://vjol.info.vn/tcgiaoducnghethuat/article/view/98123"],
      ["Holy Cross Library – Moszkowski, 15 virtuosic etudes Per aspera op.72", "https://library.holycross.edu/Record/b1784374"],
      ["Suzuki (Tokyo University of the Arts) – Dohnányi so với Pischna và Cortot", "https://tokyo-ondai.repo.nii.ac.jp/record/1338/files/03_suzuki.pdf"],
      ["Brahms – 51 Exercises (Alfred, ed. Hinson)", "https://performersmusicchicago.com/51-exercises-alf-00-2595"],
      ["Enrico Elisi – Busoni’s Three C (Clementi, Cramer, Czerny)", "https://enricoelisipiano.com/part-9-busonis-three-c/"],
    ],
    body: `
Etude (tiếng Pháp *étude*, "bài học"; tiếng Việt thường gọi là **khúc luyện** hoặc **bài luyện**) là tác phẩm ngắn tập trung vào một vấn đề kỹ thuật cụ thể: chạy ngón, quãng ba, quãng tám, hợp âm rải, nhảy xa... Khác với [[bai-tap-ngon|bài tập ngón]] thuần cơ học (Hanon, Pischna), etude có giai điệu, hoà âm và hình thức, nên vừa rèn tay vừa rèn tai. Bài này là "bản đồ" các tuyển tập thông dụng; các khía cạnh kỹ thuật riêng xem [[ky-thuat-piano]].

## Bảng tổng hợp theo trình độ

Cấp độ dưới đây là ước lượng theo thông lệ sư phạm và các nguồn bán lẻ, nghiên cứu được dẫn; mỗi tuyển tập đều có bài dễ và khó xen kẽ, nên giáo viên cần chọn từng bài chứ không dạy trọn tập theo thứ tự.

| Tuyển tập | Trình độ (ước lượng) | Kỹ thuật chính |
|---|---|---|
| Czerny op.599 (100 bài) | Sơ cấp, tương đương Grade 1–3 | Năm ngón, đổi vị trí tay, gam đơn giản |
| Duvernoy op.176, Lemoine op.37 | Sơ – trung cấp | Đều ngón, staccato, luyến hai nốt |
| Burgmüller op.100 (25 bài) | Sơ – trung cấp, Grade 2–4 | Câu nhạc, phân nhịp, sắc thái lãng mạn |
| Czerny op.849 (30 bài) | Chuyển tiếp lên trung cấp | Chạy ngón nhanh nhẹ, luân phiên hai tay |
| Bertini (op.100, op.29, op.32) | Trung cấp | Liền tiếng, đều tay phải và tay trái |
| Burgmüller op.109, Heller op.45–47 | Trung cấp | Tính nhạc, hát giai điệu trên đệm |
| Czerny op.299 (40 bài) | Trung – trung cao | Tốc độ, gam, hợp âm rải, ngón 4–5 |
| Cramer (tuyển 60 bài của Bülow) | Trung cao | Đa âm, hai giọng trong một tay |
| Clementi Gradus ad Parnassum | Trung cao – nâng cao | Ngón độc lập, phức điệu, nốt kép |
| Czerny op.740 (50 bài) | Nâng cao, cấp diploma | Độ bền, quãng tám, nhảy xa, tay trái |
| Moszkowski op.72 (15 bài) | Nâng cao | Kỹ thuật bậc thầy, nốt kép, trang trí |
| Chopin op.10 và op.25 (mỗi tập 12 bài) | Biểu diễn | Mỗi bài một vấn đề, gắn chặt với âm nhạc |
| Liszt (Transcendental, Paganini) | Biểu diễn | Quãng tám, nhảy xa, tremolo, sức bền |

Trong nhóm Czerny, một hướng dẫn thương mại xếp op.849 là cầu nối từ sơ cấp sang trung cấp sớm, op.299 cho trung cấp đến trung cao, còn op.740 là tuyển tập nâng cao ngang trình độ diploma (nguồn thương mại, chỉ nên coi là gần đúng). Một nghiên cứu của Đại học Marmara (Thổ Nhĩ Kỳ) đã phân loại 354 bài etude của Czerny (op.599, 299, 136, 636), Duvernoy op.176, Berens op.61 và Burgmüller op.100 thành ba mức sơ, trung, cao, và xếp Duvernoy op.176 cùng Burgmüller op.100 vào mức trung bình. Moszkowski op.72 mang phụ đề *Per aspera* và được mô tả là "15 etude bậc thầy".

::bars Czerny_599=100 Czerny_849=30 Czerny_299=40 Czerny_740=50 Burgmuller_100=25 Moszkowski_72=15 Chopin_op10=12 Brahms_51=51 Pischna=60 max=100 | Số bài trong một số tuyển tập

## Bài tập kỹ thuật thuần (không phải etude)

- **Pischna, 60 bài tập tiến triển** (Technical Studies, 1887): các mẫu ngón được lặp lại và chuyển qua nhiều giọng, tăng độ khó dần. Có bản rút gọn "Little Pischna" (48 bài) cho trình độ thấp hơn.
- **Brahms, 51 Exercises** (WoO 6): bài tập ngón có tính giai điệu, Brahms viết để chuẩn bị cho các tác phẩm khó của chính ông. Trọng tâm là ngón độc lập và hai tay độc lập; bản Alfred (Hinson biên tập) xếp ở mức nâng cao sớm đến nâng cao.
- **Dohnányi, Essential Finger Exercises** (1929): bốn mươi bài chia ba phần (ngón độc lập và sức ngón; gam và hợp âm; nốt kép), với mục đích rút ngắn thời gian khởi động để dành giờ cho tác phẩm. Một nghiên cứu Nhật Bản (Suzuki) so sánh tập này với Pischna và với *Rational Principles of Pianoforte Technique* (1928) của Cortot.

Sự so sánh Hanon với Czerny đã có ở [[bai-tap-ngon]]; tiểu sử và phong cách của Czerny xem [[carl-czerny]].

::timeline 1817-1826=Clementi_Gradus 1833=Chopin_op10 1837=Chopin_op25 1852=Liszt_Transcendental 1887=Pischna 1893=Brahms_51_Exercises 1929=Dohnanyi | Mốc xuất bản một số tuyển tập

## Trong các truyền thống giảng dạy

Nghệ sĩ Enrico Elisi có loạt bài bàn về "ba chữ C" mà Busoni coi là nền tảng (thường hiểu là Clementi, Cramer, Czerny); bài này chưa kiểm chứng được nguyên văn của Busoni, nên chỉ coi đây là gợi ý về một truyền thống. Tại Việt Nam, một bài báo trên Tạp chí Giáo dục Nghệ thuật (2024) phân tích Etude op.299 của Czerny trong giáo trình piano của Trường ĐHSP Nghệ thuật Trung ương, nhấn mạnh tác dụng rèn chạy ngón nhanh và chuyển đổi âm sắc. Các tuyển chọn Czerny của trường phái Nga – Xô viết (thường đi kèm etude của Lemoine, Bertini, Cramer) được nhắc nhiều trong giới giảng dạy, nhưng bài này chưa tìm được đề cương chính thức để dẫn; giáo viên nên đối chiếu với đề cương của từng nhạc viện (xem [[piano-viet-nam]], [[truong-phai-piano]]).

## Khi giảng dạy

1. **Chọn theo vấn đề, không theo số thứ tự.** Xác định điểm yếu (tay trái chậm, ngón 4 yếu, quãng tám căng) rồi tìm etude nhắm đúng vấn đề đó.
2. **Một etude, một mục tiêu.** Trước khi tập, ghi một câu: "Bài này để luyện ...". Học sinh nhỏ dễ biến etude thành bài đánh nhanh cho xong.
3. **Tốc độ tăng dần có kế hoạch**, theo [[luyen-tap-voi-may-nhip]]; đừng vội đạt tốc độ ghi trên bản in.
4. **Xen kẽ etude với tác phẩm**: Burgmüller op.100 song song với sonatina (xem [[phan-tich-sonatina-clementi-op36-1]]), Czerny op.299 song song với sonata Haydn hoặc Mozart.
5. **Đổi tuyển tập khi bão hoà**: nếu học sinh đã thuần một kỹ thuật, chuyển sang tuyển tập khác thay vì tập hết cả cuốn.

## Lỗi thường gặp

- Học trọn cuốn Czerny theo thứ tự dù nhiều bài lặp lại vấn đề đã giải quyết.
- Coi etude là "bài máy", bỏ qua sắc thái và câu nhạc; Burgmüller và Heller được viết chính là để luyện tính nhạc.
- Nhảy cóc lên Chopin op.10 khi chưa vững Czerny op.299 hoặc tương đương, dễ gây căng cơ cổ tay.
- Tin tuyệt đối vào bảng cấp độ: các nguồn xếp hạng khác nhau, và có bài trong op.299 khó hơn một số bài op.740.

Xem thêm: [[bai-tap-ngon]], [[carl-czerny]], [[friedrich-burgmuller]], [[luyen-am-giai]].
`,
  },
  {
    slug: "ky-thuat-pedal-nang-cao",
    title: "Kỹ thuật pedal nâng cao",
    category: 'technique',
    aliases: ["pedal nâng cao", "pedal sau", "nửa pedal", "pedal rung", "syncopated pedal", "legato pedal", "half pedal", "flutter pedal", "finger pedalling", "pedalling by style"],
    summary: "Các kỹ thuật dùng pedal vang (damper pedal) vượt qua mức cơ bản: pedal sau, nửa pedal, pedal rung, pedal trước, \"pedal bằng ngón\", cùng cách dùng pedal theo phong cách từ Bach, Mozart, Beethoven đến Chopin và Debussy, và các ứng dụng của pedal sostenuto.",
    refs: [
      ["Practising the Piano – Pedalling the Moonlight Sonata", "https://practisingthepiano.com/pedalling-moonlight-sonata/"],
      ["Robert Estrin – Half pedal (Virtual Sheet Music)", "https://virtualsheetmusic.com/experts/robert/half-pedal"],
      ["Living Pianos – The Half-Pedal Technique for Piano", "https://www.livingpianos.com/articles/the-half-pedal-technique-for-piano/"],
      ["Interlude – Mysteries of the Sustain Pedal", "https://interlude.hk/mysteries-sustain-pedal/"],
      ["Johann Andreas Stein (Wikipedia)", "https://en.wikipedia.org/wiki/Johann_Andreas_Stein"],
      ["The Met – The Piano: Viennese Instruments", "https://www.metmuseum.org/fr/essays/the-piano-viennese-instruments"],
      ["Tonebase – Jerome Lowenthal: The Art of Pedaling", "https://tonebase.co/piano/courses/jerome-lowenthal-teaches-the-art-of-pedaling"],
      ["Unitbv – nghiên cứu về pedal piano", "https://webbut.unitbv.ro/index.php/Series_VIII/article/download/8304/6047/16685"],
    ],
    body: `
Bài này giả định người học đã biết ba pedal và cách đạp cơ bản (xem [[ban-dap]]). Ở trình độ trung cao trở lên, pedal vang (damper pedal, pedal phải) không còn là công tắc bật/tắt mà là một dải liên tục: độ sâu, thời điểm và tốc độ nhả đều làm thay đổi âm thanh. Nguyên tắc chung: **tai quyết định, chân thực hiện**.

## Pedal sau (pedal liền tiếng)

**Pedal sau** (syncopated pedal, legato pedal) là cách đạp chuẩn để nối các hợp âm liền tiếng: đánh hợp âm mới, *đồng thời* nhả pedal, rồi đạp lại *ngay sau* khi âm mới đã vang. Pedal vì thế "lệch nhịp" so với tay, nên còn gọi là pedal đảo phách.

1. Phím xuống, chân lên: khi tay đánh hợp âm mới thì chân nhả.
2. Chân xuống lại khi tay vẫn giữ phím, các tiêu âm (damper) hạ xuống đủ để cắt âm cũ.
3. Tay có thể rời phím, âm mới vẫn được pedal giữ.

::grand C5+E5/C3=Đạp_sau B4+D5/G2=Nhả_rồi_đạp C5+E5/C3=Nhả_rồi_đạp | Đổi pedal theo mỗi hợp âm, chân luôn đi sau tay

Lỗi kinh điển là đạp cùng lúc với tay (pedal dính âm cũ) hoặc nhả quá sớm (hở tiếng). Bài tập: chơi chậm một chuỗi I–IV–V–I bằng một tay, nghe xem có "khoảng trống" hay "nhoè" giữa hai hợp âm không.

## Độ sâu: nửa pedal, phần tư pedal, pedal rung

- **Nửa pedal** (half pedal): đạp hoặc nhả chỉ một phần, để tiêu âm chạm nhẹ dây. Âm trầm dày (dây dài, dao động mạnh) còn ngân, còn âm cao mỏng bị cắt. Robert Estrin minh hoạ bằng đoạn giữa Ballade giọng Sol thứ của Chopin: nửa pedal cho nốt trầm ngân thêm một chút trong khi giai điệu vẫn rõ. Phân tích dữ liệu đàn Yamaha Disklavier ghi lại một nghệ sĩ chơi Debussy cho thấy chân ở vùng "lưng chừng" này trong thời gian đáng kể.
- **Phần tư pedal** (quarter pedal): mức nông hơn, chỉ làm âm "ướt" nhẹ, thường dùng trong Mozart hay đoạn nhanh.
- **Pedal rung** (flutter pedal, vibrato pedal): rung chân nhanh và nông để làm mỏng dần một khối âm vang mà không cắt hẳn, ví dụ khi một nốt trầm phải ngân dưới những hợp âm thay đổi. Thuật ngữ này phổ biến trong sách chuyên khảo về pedal (như *The Pianist's Guide to Pedaling* của Joseph Banowetz), nhưng không có ký hiệu chuẩn trên bản nhạc.

Mỗi cây đàn có "điểm ăn" pedal khác nhau; khi đổi đàn (thi, biểu diễn) phải thử trước.

## Pedal trước, pedal đồng thời và "pedal bằng ngón"

- **Pedal trước** (pre-pedal): đạp *trước* khi đánh, để dây đàn đồng vang ngay từ lúc tấn công, thường dùng cho nốt đầu tác phẩm hay sau dấu lặng.
- **Pedal đồng thời** (rhythmic/attack pedal): đạp đúng lúc đánh rồi nhả theo nhịp, tạo nhấn mạnh cho hợp âm staccato hoặc nhịp valse.
- **Pedal bằng ngón** (finger pedalling, overholding): giữ phím lâu hơn giá trị ghi để tạo độ vang mà không cần pedal, ví dụ giữ nốt trầm của bè Alberti (xem [[ky-thuat-tay-trai]]). Kỹ thuật này đặc biệt hữu ích trong Bach và Mozart, nơi pedal đầy dễ làm nhoè các bè.

## Pedal theo phong cách

| Phong cách | Đặc điểm | Gợi ý |
|---|---|---|
| Bach trên piano | Đàn phím thời Bach không có pedal vang | Tranh luận: từ không pedal đến pedal rất nông; ưu tiên legato bằng ngón |
| Mozart, Haydn | Đàn Stein, Walter có cần gối nâng tiêu âm | Pedal ngắn, nông, chủ yếu tô màu |
| Beethoven | Ghi pedal dài, có chủ đích | Tôn trọng ý đồ, điều chỉnh độ sâu theo đàn hiện đại |
| Chopin | Ghi pedal cẩn thận | Đọc kỹ dấu Ped. và dấu nhả, nhưng chú ý đàn Pleyel vang ít hơn |
| Debussy | Hầu như không ghi pedal | Nửa pedal, pedal dài cho "mảng âm", sostenuto cho nốt trầm |

**Mozart.** Theo Wikipedia, cần gối (knee lever) đầu tiên của Stein năm 1769 lại có tác dụng *hạ* tiêu âm; từ cây đàn Mozart mô tả năm 1777, cần gối mới nâng toàn bộ tiêu âm, gần giống pedal hiện đại. Đàn Walter của Mozart có hai cần gối (trái nâng toàn bộ, phải chỉ nâng tiêu âm phần cao), theo bài luận của Bảo tàng Met; tuy nhiên có học giả cho rằng các cần gối này được lắp thêm sau khi Mozart mất, nên chi tiết vẫn còn tranh cãi.

**Beethoven.** Chương I Sonata "Ánh trăng" op.27 số 2 ghi "senza sordino" (không tiêu âm, tức giữ pedal). Trang Practising the Piano lập luận rằng Beethoven không chỉ định nửa pedal, nhưng hiệu quả mà dấu ghi gợi ra chỉ đạt được trên đàn hiện đại nếu giữ pedal sát mặt trên và điều chỉnh liên tục. Các đoạn recitativo trong chương I Sonata "Bão tố" op.31 số 2 cũng là ví dụ hay được nhắc về pedal dài có chủ đích của Beethoven. Xem [[ludwig-van-beethoven]].

**Chopin.** Nghiên cứu ở Đại học Transilvania (Unitbv) ghi nhận Chopin và Liszt đánh dấu cẩn thận chỗ cần pedal; khoá học của Jerome Lowenthal nhắc đến "pedal thở" của Chopin. Ứng dụng xem [[phan-tich-nocturne-op9-so2]].

**Debussy.** Theo Interlude, Debussy gần như không ghi pedal; nốt trầm dài thường ngụ ý pedal, còn đổi hợp âm thì cần nhả để tránh nhoè, và nửa pedal hay pedal "bẩn" có chủ ý tạo hiệu quả đẹp. Xem [[claude-debussy]].

## Pedal sostenuto trong tác phẩm

Pedal giữa (sostenuto) chỉ giữ những tiêu âm đang được nâng tại thời điểm đạp; các nốt đánh sau không bị ảnh hưởng. Ứng dụng điển hình: đánh nốt trầm, đạp sostenuto, rồi dùng pedal vang tự do ở phía trên, ví dụ các nốt trầm ngân dài trong một số prelude của Debussy (giáo viên thường dùng "La cathédrale engloutie" làm ví dụ, dù Debussy không ghi sostenuto). Nhiều tác phẩm thế kỷ 20 ghi rõ "sost. Ped.". Lưu ý: nhiều đàn đứng không có sostenuto thật.

## Luyện tập và lỗi thường gặp

1. Tập pedal sau trên gam rải hợp âm, một tay, rất chậm, nhắm mắt nghe.
2. Tập nửa pedal: giữ một hợp âm trầm, đánh các nốt cao staccato, tìm độ sâu sao cho nốt trầm còn mà nốt cao tắt.
3. Đánh dấu pedal bằng bút chì vào bản nhạc, sau đó thử lại trên đàn khác.

Lỗi thường gặp: "chân đè" cả ô nhịp bất kể hoà âm đổi; dùng pedal để che ngón chưa liền tiếng; đạp mạnh gây tiếng gõ cơ học; dùng nguyên một cách đạp cho mọi phong cách.

Xem thêm: [[ban-dap]], [[ky-thuat-piano]], [[frederic-chopin]], [[wolfgang-amadeus-mozart]].
`,
  },
  {
    slug: "ky-thuat-tay-trai",
    title: "Kỹ thuật tay trái",
    category: 'technique',
    aliases: ["tay trái piano", "hình đệm tay trái", "bè Alberti", "left-hand technique", "oom-pah bass", "left hand alone repertoire"],
    summary: "Các hình đệm tay trái cơ bản của piano (bè Alberti, đệm valse, quãng tám rải, hợp âm rải rộng kiểu nocturne, stride), cách cân bằng âm lượng và luyện bước nhảy, cùng các tác phẩm viết riêng cho tay trái như Concerto của Ravel và Prelude và Nocturne op.9 của Scriabin.",
    refs: [
      ["Alberti bass (Wikipedia)", "https://en.wikipedia.org/wiki/Alberti_bass"],
      ["Interlude – Signor Alberti’s Moving Bass Line", "https://interlude.hk/signor-albertis-moving-bass-line/"],
      ["MyMusicTheory – Writing Alberti bass (ABRSM Grade 8)", "https://mymusictheory.com/keyboard-reconstruction-abrsm-grade-8/writing-alberti-bass/"],
      ["Classical Music – 5 Essential Works for Left Hand Piano", "https://www.classical-music.com/features/works/5-essential-works-left-hand-piano"],
      ["Pianist Magazine – Piano repertoire for the left hand", "https://www.pianistmagazine.com/blogs/piano-repertoire-for-the-left-hand"],
      ["Classic FM – The best classical music for piano left hand", "https://www.classicfm.com/discover-music/latest/left-hand-piano-music/"],
    ],
    body: `
Trong phần lớn nhạc piano từ thời Cổ điển, tay phải hát giai điệu còn tay trái gánh **bè trầm và hoà âm**: nó giữ nhịp, xác định hợp âm và tạo "nền" vang cho cả bản. Vì người thuận tay phải thường để tay trái yếu và chậm hơn, giáo viên cần luyện tay trái có hệ thống chứ không chỉ "đi kèm". Bài này nói về các hình đệm tay trái; phối hợp hai tay xem [[phoi-hop-hai-tay]], các kiểu đệm phổ thông xem [[dieu-dem-pho-bien]].

## Các hình đệm cơ bản

### Bè Alberti
**Bè Alberti** (Alberti bass) là hợp âm rải theo thứ tự thấp – cao – giữa – cao, lặp lại. Tên gọi lấy theo Domenico Alberti (1710 – 1740 hoặc 1746), người dùng nhiều mẫu này dù không phải người phát minh. Ví dụ nổi tiếng nhất là phần mở đầu chương I Sonata giọng Đô trưởng K.545 của Mozart. Hình đệm này tạo cảm giác chuyển động liên tục ngay cả khi hoà âm đứng yên.

::staff bass C3=5 G3=1 E3=3 G3=1 C3=5 G3=1 E3=3 G3=1 / B2=5 G3=1 D3=3 G3=1 C3=5 G3=1 E3=3 G3=1 | Bè Alberti C – G/B – C, ngón bấm 5-1-3-1

Kỹ thuật: tay gần phím, cổ tay hơi xoay nhẹ (xoay cẳng tay nhỏ, không đánh từng ngón bằng lực), nốt trầm ngón 5 hơi rõ hơn, ngón 1 rất nhẹ vì nó lặp lại nhiều nhất.

### Đệm valse (bum – chát – chát)
Nốt trầm ở phách 1, hợp âm ở phách 2 và 3 (oom-pah-pah). Ở nhịp 2/4 hoặc 4/4 là kiểu bum – chát. Khó ở chỗ **bước nhảy** từ nốt trầm lên hợp âm.

::staff bass C2=5 E3+G3=2+1 E3+G3=2+1 / G2=5 F3+G3=2+1 F3+G3=2+1 | Đệm valse, nốt trầm nặng, hợp âm nhẹ và ngắn

### Quãng tám rải và bè trầm quãng tám
Quãng tám rải (broken octaves) luân phiên nốt dưới và nốt trên, thường ngón 5-1, dùng nhiều trong Czerny op.740 và nhạc Lãng mạn. Cần xoay cẳng tay chứ không gồng ngón; xem [[ky-thuat-quang-tam]] và [[tremolo-xoay-cang-tay]].

::staff bass C2=5 C3=1 D2=5 D3=1 E2=5 E3=1 F2=5 F3=1 | Quãng tám rải đi lên

### Hợp âm rải rộng kiểu nocturne
Trong các nocturne của Chopin, tay trái rải hợp âm trải rộng quá một quãng tám, như mở đầu Nocturne op.9 số 2 (xem [[phan-tich-nocturne-op9-so2]]). Nốt trầm đầu ô nhịp được pedal giữ, các nốt sau mềm như "sóng". Luyện cùng [[luyen-hop-am-rai]].

::staff bass C2=5 G2=3 E3=2 G3=1 E3=2 G2=3 | Hợp âm rải rộng, ngón bấm có thể thay đổi theo cỡ tay

### Stride
Trong jazz, stride luân phiên nốt trầm (hoặc quãng mười) ở phách 1, 3 với hợp âm giữa ở phách 2, 4, đòi hỏi nhảy xa liên tục. Xem [[stride-piano]].

## Cân bằng và bước nhảy

- **Cân bằng**: nguyên tắc chung là giai điệu nổi, đệm lùi. Trong một hình đệm, nốt trầm (gốc hoà âm) rõ hơn, các nốt giữa nhẹ hơn. Bài tập: chơi tay trái một mình ở *p*, rồi thêm giai điệu ở *mf*.
- **Bước nhảy**: nhìn trước điểm đến, di chuyển theo cung thấp sát phím, "sờ" phím trước khi đánh. Luyện nhảy đến đích rồi dừng (nhảy – dừng – đánh), sau đó bỏ dần khoảng dừng. Chi tiết xem [[buoc-nhay-xa]].
- **Độ đều**: tay trái thường "lết" ở đoạn nhanh; tập gam và rải hợp âm tay trái riêng (xem [[luyen-am-giai]]).

## Tác phẩm cho tay trái một mình

| Tác phẩm | Bối cảnh |
|---|---|
| Ravel, Concerto giọng Rê trưởng cho tay trái | Viết cho Paul Wittgenstein, người mất cánh tay phải trong Thế chiến I; công diễn năm 1932 |
| Scriabin, Prelude và Nocturne op.9 | Sáng tác năm 1894, trầm lắng hơn các tác phẩm phô diễn trước đó |
| Bach – Brahms, Chaconne (Partita giọng Rê thứ) | Brahms chuyển soạn cho tay trái tặng Clara Schumann khi bà đau tay phải (thư năm 1877) |
| Prokofiev, Concerto số 4 | Đặt viết cho Wittgenstein nhưng ông không chơi |
| Godowsky, chuyển soạn etude Chopin | Có nhiều bản cho tay trái một mình |
| Saint-Saëns, 6 Etude op.135 | Etude cho tay trái |

Theo Classical Music, Ravel cấm biểu diễn bản chuyển soạn hai tay mà Alfred Cortot đã làm; Wittgenstein cũng nổi tiếng vì sửa phần độc tấu của các tác phẩm ông đặt viết. Lý do Scriabin viết op.9 thường được kể là chấn thương tay phải do tập quá sức, nhưng đây là thông tin tiểu sử phổ biến hơn là đã kiểm chứng trong bài này. Xem [[maurice-ravel]], [[alexander-scriabin]], [[johannes-brahms]].

## Luyện tập

1. **Tay trái một mình mỗi ngày** 5–10 phút: gam, hợp âm rải, một hình đệm của bài đang học.
2. **Rút gọn thành hợp âm khối**: chơi bè Alberti hay hợp âm rải thành hợp âm đồng thời để nắm hoà âm và vị trí tay, rồi mới rải ra.
3. **Thay nhịp điệu**: chơi hình đệm theo nhịp chấm dôi hoặc nhóm ba (xem [[luyen-tap-voi-may-nhip]]).
4. **Hát giai điệu, đàn tay trái**: buộc tay trái phục vụ câu hát.
5. **Tập bản cho tay trái một mình** ở trình độ vừa sức, ví dụ etude tay trái dễ, trước khi thử Scriabin.

## Lỗi thường gặp

- Ngón 1 lặp lại quá nặng làm bè Alberti "lộp bộp".
- Hợp âm đệm valse to bằng nốt trầm, mất cảm giác phách mạnh.
- Nhảy muộn nên hợp âm bị chậm nhịp; hoặc nhìn tay trái quá lâu mà mất chỗ ở tay phải.
- Dựa vào pedal để che nốt trầm không giữ được.

Xem thêm: [[phoi-hop-hai-tay]], [[dieu-dem-pho-bien]], [[ky-thuat-pedal-nang-cao]], [[buoc-nhay-xa]].
`,
  },
  {
    slug: "luyen-tap-voi-may-nhip",
    title: "Luyện tập với máy đếm nhịp",
    category: 'technique',
    aliases: ["luyện với metronome", "tăng tốc độ dần", "metronome practice", "metronome on 2 and 4", "subdivision", "burst practice", "tempo building"],
    summary: "Cách dùng máy đếm nhịp (metronome) để luyện piano: tìm \"tốc độ an toàn\", tăng tốc độ dần theo kế hoạch, đặt tiếng gõ ở phách 2 và 4, chia nhỏ phách, biến tấu tiết tấu, luyện theo cụm ngắn, tắt tiếng gõ xen kẽ, và khi nào không nên dùng máy.",
    refs: [
      ["Garrison – Practice techniques (University of Idaho)", "https://www.webpages.uidaho.edu/~leonardg/practice2.html"],
      ["Why \"Start slow\" fails (Practicing Guitar)", "https://practicing-guitar.readthedocs.io/en/latest/part-1-on-technique/start-slow-fails.html"],
      ["Bulletproof Musician – Jason Sulliman on fast practice", "https://bulletproofmusician.com/jason-sulliman-on-why-fast-practice-can-be-more-efficient-and-effective-than-slow-practice/"],
      ["The Strad – 10 views on the benefits of slow practice", "https://www.thestrad.com/10-views-on-the-benefits-of-slow-practice/18.article"],
      ["LSU Dissertation 1187 – chiến lược luyện tập của sinh viên piano", "https://repository.lsu.edu/gradschool_dissertations/1187/"],
      ["Berklee PULSE – Practicing Technique (video transcript)", "https://pulse.berklee.edu/content/public/pub_unit_assets/Casio_Video_Series/video_2/Practicing%20Technique_video%20transcript.pdf"],
      ["Shiverware – 4 Effective Metronome Techniques", "https://shiverware.com/speakbeatmetronome/4-metronome-techniques.html"],
      ["Living Pianos – How to use tempo as a powerful practicing tool", "https://www.livingpianos.com/videos/how-to-use-tempo-as-a-powerful-practicing-tool/"],
      ["Bandworld – metronome on 2 and 4", "https://bandworld.org/magazine/?p=7526"],
    ],
    body: `
**Máy đếm nhịp** (metronome) phát tiếng gõ đều theo số phách mỗi phút (BPM). Nó là công cụ để *kiểm tra và xây dựng* nhịp, không phải để thay cho cảm nhận nhịp bên trong. Khái niệm tốc độ và thuật ngữ xem [[nhip-do]]; giữ tốc độ ổn định xem [[kiem-soat-toc-do]]; nguyên tắc luyện tập chung xem [[phuong-phap-luyen-tap]].

## Tìm "tốc độ an toàn" và tăng dần

Bước đầu tiên là tìm tốc độ mà ở đó đoạn nhạc chơi được *không lỗi*. Một video của Berklee gọi đây là "giới hạn tốc độ": nếu mắc quá nhiều lỗi thì đang chơi quá nhanh; hãy hạ xuống đến mức chơi sạch rồi ghi con số vào sổ luyện tập. Robert Estrin (Living Pianos) lưu ý rằng khi được bảo "chơi chậm lại", phần lớn học sinh vẫn chơi gần như cùng tốc độ, nên con số trên máy giúp việc "chậm" trở nên cụ thể.

Hướng dẫn luyện tập của Garrison (Đại học Idaho) gợi ý bắt đầu ở khoảng một nửa tốc độ đích, mỗi lần chơi đúng thì tăng máy một nấc, đến khi đạt tốc độ nhanh nhất còn chơi sạch. Cùng nguồn nhắc biến thể "lên 3, xuống 2" của nghệ sĩ clarinet Peter Hadcock.

### Ba kế hoạch tăng tốc (ví dụ, đích 120 BPM)

Các con số dưới đây là ví dụ minh hoạ, không phải chuẩn bắt buộc.

| Kế hoạch | Cách làm | Ví dụ |
|---|---|---|
| Tuyến tính | Mỗi buổi tăng 4–6 BPM nếu chơi sạch 3 lần liên tiếp | 60, 66, 72, 76, 80 ... 120 |
| Lên 3 xuống 2 | Tăng ba nấc, lùi hai nấc, rồi lại tăng | 60, 63, 66, 69, 66, 63, 66, 69, 72 ... |
| Bậc thang | Chơi chậm, rồi nhảy hẳn lên gần đích, rồi về mức giữa | 70, 110, 90, 75, 115, 95 ... |

| Buổi | Tốc độ khởi động | Tốc độ làm việc | Thử nhanh |
|---|---|---|---|
| 1 | 60 | 66 | 80 |
| 2 | 66 | 72 | 88 |
| 3 | 72 | 80 | 96 |
| 4 | 76 | 88 | 104 |
| 5 | 80 | 96 | 112 |

Không phải ngày nào cũng tăng: nếu buổi hôm sau chơi không sạch ở tốc độ hôm trước, lùi lại 1–2 nấc là bình thường.

## Phách 2 và 4, chia nhỏ phách và tắt tiếng gõ

- **Gõ ở phách 2 và 4**: đặt máy ở nửa tốc độ (ví dụ 160 thành 80) và coi mỗi tiếng gõ là phách 2 và 4, giống tiếng hi-hat trong swing. Bandworld cảnh báo người chơi dễ nghe nhầm tiếng gõ thành phách 1 và 3, nên cần đếm to "hai", "bốn" lúc đầu. Rất hữu ích cho jazz và nhạc nhẹ (xem [[dao-phach]], [[cam-nhan-phach]]).
- **Chia nhỏ phách** (subdivision): đặt tiếng gõ theo móc đơn hoặc móc kép thay vì nốt đen, nhất là ở tốc độ chậm khi khoảng cách giữa hai tiếng gõ quá dài và học sinh dễ vội.
- **Tắt tiếng gõ xen kẽ** (gap click): gõ một ô nhịp, im một ô; rồi hai – hai; bốn – bốn. Mục tiêu là xây "đồng hồ bên trong" vẫn đúng khi máy im.

::rhythm 4/4 q:1 q:2 q:3 q:4 / e-e e-e e-e e-e / s-s-s-s s-s-s-s s-s-s-s s-s-s-s // | Cùng một phách, chia thành nốt đen, móc đơn, móc kép

## Biến tấu tiết tấu và luyện theo cụm

**Biến tấu tiết tấu** là thủ thuật lâu đời: chơi một chuỗi móc kép đều theo nhịp chấm dôi (dài – ngắn), rồi đảo lại (ngắn – dài), rồi nhóm ba, nhóm bốn có dấu nhấn. Mỗi biến thể buộc ngón dừng ở những vị trí khác nhau.

::rhythm 4/4 e.-s e.-s e.-s e.-s / s-e. s-e. s-e. s-e. / >s-s-s-s >s-s-s-s >s-s-s-s >s-s-s-s // | Ba biến thể cho cùng một chuỗi nốt

**Luyện theo cụm** (burst, chunk practice): thay vì chơi cả đoạn chậm, chơi một cụm ngắn (4–6 nốt) *ở tốc độ đích* rồi dừng trên nốt đầu của cụm sau; nối dần các cụm. Cách này đáp lại một phê phán phổ biến với "tăng dần từ chậm": theo trang Practicing Guitar, chuyển động ở tốc độ chậm khác chuyển động ở tốc độ nhanh nên người tập dễ gặp "bức tường tốc độ"; nghệ sĩ trombone Jason Sulliman cũng ủng hộ luyện ở tốc độ đích bằng cách nối chuỗi (chaining). Ngược lại, nghệ sĩ cello Raphael Wallfisch (trên The Strad) khuyên học theo cụm vừa sức và đủ chậm để não kịp nhận ra chi tiết quan trọng. Hai quan điểm không loại trừ nhau: chậm để đọc đúng và cảm nhận, cụm nhanh để học chuyển động thật.

## Bằng chứng nghiên cứu

Bằng chứng thực nghiệm riêng về máy đếm nhịp còn mỏng. Một luận án năm 2004 tại Đại học Louisiana (LSU) đã thử nghiệm các chiến lược luyện tập, trong đó có dùng máy đếm nhịp để đặt tốc độ chậm, trên 39 sinh viên chuyên ngành piano; tóm tắt mà bài này tiếp cận được không nêu kết quả, nên không thể kết luận. Phần lớn lời khuyên trên đây là kinh nghiệm của nghệ sĩ và giáo viên, chưa phải kết quả đo lường.

## Khi không nên dùng máy

- **Khi tạo hình câu nhạc**: [[rubato]], ritardando, fermata và nhịp thở cuối câu cần co giãn tự nhiên.
- **Khi mới đọc nốt**: lúc chưa thuộc nốt và ngón bấm, tiếng gõ chỉ gây áp lực; hãy đọc chậm, đếm to.
- **Khi đã vững nhịp**: phần lớn thời gian nên chơi không máy, chỉ bật máy để kiểm tra.
- **Với trẻ nhỏ**: dùng thời lượng ngắn, kết hợp vỗ tay và hát (xem [[tre-hoc-dan-luyen-tap-va-phu-huynh]]).

## Lỗi thường gặp

- Luôn bật máy, đến khi tắt thì không giữ được nhịp.
- Tăng tốc độ khi lần chơi trước còn lỗi; chỉ ghi nhận tốc độ khi chơi sạch nhiều lần liên tiếp.
- Chơi "đuổi theo" tiếng gõ thay vì đặt nốt trùng tiếng gõ; nên nghe tiếng gõ biến mất vào âm đàn.
- Đặt máy quá to hoặc tiếng quá chói, gây mệt và căng thẳng.

Xem thêm: [[nhip-do]], [[kiem-soat-toc-do]], [[phuong-phap-luyen-tap]], [[giao-trinh-etude-piano]].
`,
  },
  {
    slug: "ky-thuat-theo-phong-cach",
    title: "Kỹ thuật piano theo phong cách",
    category: 'technique',
    aliases: ["kỹ thuật theo thời kỳ", "kỹ thuật Baroque trên piano", "Mozart touch", "pedal Debussy", "piano gõ", "stylistic technique", "style-appropriate piano technique", "percussive piano"],
    summary: "Cùng một bàn phím nhưng mỗi phong cách đòi hỏi cách chạm phím, phát âm, pedal và cân bằng giọng khác nhau. Bài này tóm tắt các yêu cầu kỹ thuật chính khi chơi nhạc Baroque, Cổ điển, Lãng mạn, Ấn tượng và thế kỷ 20 trên piano hiện đại, kèm nguồn chuyên luận lịch sử.",
    refs: [
      ["C. P. E. Bach, Essay on the True Manner of Playing the Clavier (bản trực tuyến)", "https://versuch.cpebach.org/v-html/glossary/Figur.html"],
      ["The Diapason (4/1982) — bài về phát âm, trích Versuch của C. P. E. Bach", "https://www.thediapason.com/sites/diapason/files/April%201982%20compressed.pdf"],
      ["Haydn's Keyboard Music: Studies in Performance Practice (OUP) — chương về staccato, Bach và Türk", "https://academic.oup.com/book/49145/chapter/422059220"],
      ["M. Metaxaki, Considerations for pedalling Debussy's piano music (City, University of London)", "https://openaccess.city.ac.uk/id/eprint/8449/1/Considerations_for_pedalling_Debussy's_piano_music.pdf"],
      ["Slide (musical ornament) — Wikipedia", "https://en.wikipedia.org/wiki/Slide_(musical_ornament)"],
      ["Classical Music — Debussy Préludes: Impressionism in music", "https://www.classical-music.com/features/articles/story-debussy-s-pr-ludes-1909-13/"],
    ],
    body: `
Piano hiện đại là một nhạc cụ của thế kỷ 19–20, nhưng học sinh chơi trên nó âm nhạc của gần ba thế kỷ. Vì vậy, ngoài [[ky-thuat-piano|kỹ thuật nền]] chung, người chơi cần một "bộ công cụ" thay đổi theo phong cách: cách phát âm (articulation), độ nặng của tay, cách dùng [[ban-dap|pedal]] và cách cân bằng các bè.

## Baroque trên piano hiện đại

Nhạc của Bach, Handel, Scarlatti được viết cho harpsichord (đàn clavecin), clavichord hoặc organ — những nhạc cụ không có pedal giữ tiếng và (trừ clavichord) gần như không đổi được cường độ từng nốt. Khi chuyển sang piano, có ba vấn đề chính.

### Phát âm và "nốt thường"

Các chuyên luận thế kỷ 18 cho thấy nốt không có ký hiệu không mặc định là legato (liền tiếng). Theo bản dịch trích trong The Diapason, *Versuch über die wahre Art das Clavier zu spielen* (1753) của [[carl-philipp-emanuel-bach|C. P. E. Bach]] viết rằng những nốt không đánh staccato, không nằm trong nhóm nốt ngắn có dấu luyến và không có tenuto thì được giữ khoảng một nửa trường độ. Đây là bản dịch thứ cấp, nên nên đối chiếu với bản gốc. D. G. Türk (*Klavierschule*, 1789) bàn tiếp về staccato theo hướng của Bach; theo một nghiên cứu về nhạc phím Haydn (OUP), các nhận xét của Türk là sự mở rộng ý của Bach. Ngày nay các nghệ sĩ hiểu những quy tắc này khác nhau: trường phái [[phong-trao-bieu-dien-lich-su|biểu diễn theo lịch sử]] thường tách nốt nhiều hơn, còn nhiều giáo viên piano truyền thống vẫn dạy Bach khá liền tiếng.

Gợi ý thực hành: nốt ngắn chạy theo bậc liền thường chơi liền hoặc gần liền; nốt nhảy quãng và nốt dài hơn ở bè đệm thường hơi tách (non legato); không có quy tắc nào áp dụng máy móc cho mọi bản.

### Hoa mỹ

Láy (trill), mordent, appoggiatura và slide nên tra cứu theo bảng giải nghĩa của từng tác giả (xem [[ky-hieu-hoa-my]]). Theo quy ước phổ biến nhất cho nhạc thế kỷ 18, láy bắt đầu từ nốt trên và rơi vào phách.

::staff treble D5 C5 D5 C5 B4 C5 | Láy trên nốt C5 kiểu Baroque, bắt đầu từ nốt trên D5, kết thúc bằng hậu tố

### Tách bè đối âm

Trong fugue và invention, điều khó nhất là giữ cho hai đến bốn bè độc lập. Hãy cho mỗi bè một "màu" cường độ và một kiểu phát âm. Bài tập: chơi một bè legato còn bè kia non legato, sau đó đảo lại. Pedal chỉ dùng rất ít, ngắn và nông, hoặc không dùng.

## Cổ điển: Haydn, Mozart, Beethoven sơ kỳ

Đàn fortepiano thời [[wolfgang-amadeus-mozart|Mozart]] có búa nhẹ và tiếng tắt nhanh. Tiếng Mozart trên piano hiện đại vì vậy cần nhẹ, rõ, và dùng ngón nhiều hơn dùng trọng lượng cánh tay.

- **Bè trầm Alberti:** giữ nốt trầm cho rõ, hai nốt trên chơi nhẹ hơn, cổ tay mềm và xoay nhẹ.
- **Dấu luyến hai nốt:** nốt đầu nặng hơn, nốt sau nhẹ và nhấc tay, theo cách hiểu dấu luyến phổ biến thời đó.
- **Pedal:** ngắn, nông, chủ yếu để nối hoặc tô màu hợp âm, không phủ suốt câu.

::staff bass C3 G3 E3 G3 / C3 G3 E3 G3 | Hình Alberti C–G–E–G ở bè trầm, nốt C3 là điểm tựa, ba nốt sau nhẹ hơn

## Lãng mạn: tiếng hát và hợp âm rải rộng

Với [[frederic-chopin|Chopin]], Schumann, [[johannes-brahms|Brahms]], mục tiêu là *tiếng đàn hát* (cantabile): dùng trọng lượng cánh tay qua đầu ngón tay và ấn vào phím sâu, chậm. Giai điệu đặt ở ngón 4–5 tay phải phải nổi hơn các nốt đệm cùng tay (voicing). Hợp âm rải rộng (xem [[luyen-hop-am-rai]]) cần xoay cổ tay và di chuyển khuỷu tay liên tục thay vì căng ngón. Pedal đổi theo hoà âm, thường là pedal đổi sau (đạp trễ). [[rubato]] thuộc về phong cách này nhưng cần tiết chế.

::staff treble C5+E5 E4 G4 C5 | Voicing, nốt giai điệu E5 (ngón 5) hát, ba nốt đệm cùng tay chơi nhẹ hơn

## Ấn tượng: màu sắc và lớp pedal

Nhạc [[claude-debussy|Debussy]] và Ravel đòi hỏi kiểm soát [[am-sac|âm sắc]]: đầu ngón chạm phím phẳng, gần phím, tạo tiếng tròn không có tiếng gõ. Pedal được dùng như một chất liệu: nửa pedal, pedal rung (flutter) và pedal giữ âm trầm trong khi tầng trên thay đổi. Luận án của Maria Metaxaki (City, University of London) cho rằng Debussy dùng nhiều cả pedal una corda lẫn pedal giữ tiếng, và các bản cuộn piano (piano roll) ông thu cho thấy điều này. Tác giả lưu ý rằng luận án là tài liệu tham khảo, không phải sách chỉ dẫn pedal.

## Thế kỷ 20: piano như nhạc cụ gõ

Trong một số tác phẩm của [[sergei-prokofiev|Prokofiev]] (Toccata Op. 11) và [[bela-bartok|Bartók]] (Allegro barbaro), piano được dùng theo lối gõ: hợp âm dày, nhấn mạnh, nhịp đều và chính xác. Kỹ thuật: thả trọng lượng từ vai, khớp ngón vững, cổ tay thả lỏng ngay sau mỗi lần đánh để tránh căng cơ. "Gõ" không có nghĩa là đập. Tiếng vẫn phải có trọng tâm và kiểm soát được, và pedal thường khô để giữ độ rõ của nhịp.

## Bảng tóm tắt

| Phong cách | Chạm phím | Pedal | Ưu tiên |
|---|---|---|---|
| Baroque | ngón, non legato, rõ | rất ít hoặc không | tách bè, hoa mỹ đúng |
| Cổ điển | nhẹ, ngón, rõ | ngắn, nông | câu cân đối, đệm nhẹ |
| Lãng mạn | trọng lượng tay, cantabile | đổi theo hoà âm | voicing, legato dài |
| Ấn tượng | phẳng, sát phím | nửa pedal, nhiều lớp | màu sắc, ngân |
| Thế kỷ 20 (gõ) | vững, thả trọng lượng | khô | nhịp, nhấn |

## Luyện tập

1. Chọn một hợp âm rải C trưởng và chơi theo năm cách trong bảng. Ghi âm lại rồi nghe sự khác nhau.
2. Bach: tập riêng từng bè, hát bè này trong khi chơi bè kia, rồi ghép lại.
3. Mozart: tập bè Alberti chỉ bằng nốt trầm, sau đó thêm nốt trên ở mức pp.
4. Chopin: tập riêng nốt giai điệu ở mf và các nốt đệm ở pp, sau đó chơi cả hai cùng lúc.

## Lỗi thường gặp

- Phủ pedal Lãng mạn lên Bach và Mozart.
- Chơi Mozart nặng tay, bè đệm Alberti to ngang giai điệu.
- Chơi Debussy "mờ" vì pedal không kiểm soát, hay ngược lại, quá khô.

Xem thêm: [[phong-cach-dien-tau]], [[dien-tau]], [[lich-su-ky-thuat-piano]], [[ky-hieu-hoa-my]].
`,
  },
  {
    slug: "yeu-cau-ky-thuat-abrsm-theo-cap",
    title: "Yêu cầu gam và hợp âm rải ABRSM theo cấp",
    category: 'technique',
    aliases: ["ABRSM scales and arpeggios", "gam thi ABRSM", "yêu cầu kỹ thuật ABRSM piano", "scales requirements Grade 1–8", "ABRSM piano scales from 2021", "phần thi gam piano"],
    summary: "Phần gam và hợp âm rải trong kỳ thi piano ABRSM được thay đổi lớn từ năm 2021. Bài này tóm tắt quy định chung, xu hướng yêu cầu từ Grade 1 đến Grade 8, những điểm cần kiểm tra trong syllabus hiện hành và một kế hoạch luyện tập.",
    refs: [
      ["ABRSM — Piano Syllabus 2021 & 2022 Qualification Specification (PDF)", "https://www.abrsm.org/sites/default/files/2023-09/piano-2021-2022-syllabus-rev-sep-2020-final.pdf"],
      ["ABRSM — Piano Practical Grades Syllabus 2025 & 2026 (PDF)", "https://www.abrsm.org/sites/default/files/2024-06/Piano%202025%20&%202026%20Prac%20syllabus%2020240524_access.pdf"],
      ["ABRSM — Piano Practical Grades Syllabus 2027 & 2028 (PDF)", "https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf"],
      ["Pianodao (Andrew Eales) — ABRSM Piano Scales 2021", "https://pianodao.com/2020/07/12/abrsm-piano-scales-2021/"],
      ["David Barton Music — ABRSM Piano Syllabus 2021/22: Publication Review", "https://www.davidbartonmusic.co.uk/?p=7237"],
      ["ABRSM Shop — Piano Scales & Arpeggios, Grade 8", "https://shop.abrsm.org/products/piano-scales-arpeggios-abrsm-grade-8"],
    ],
    body: `
Trong kỳ thi thực hành piano của ABRSM (xem [[thi-cap-do]]), phần *gam và hợp âm rải* (scales and arpeggios) là một phần của bài kiểm tra kỹ thuật, bên cạnh các bài nhạc, thị tấu và kiểm tra nghe. ABRSM đã sửa đổi lớn phần này cho syllabus 2021–2022, và các syllabus sau (2023–2024, 2025–2026, 2027–2028) vẫn đi theo khung đó. **Lưu ý quan trọng:** bài này viết dựa trên tài liệu công khai và các bài bình luận. Danh sách giọng chính xác, phạm vi quãng tám và tốc độ cho từng cấp phải được kiểm tra trong file syllabus PDF của chu kỳ thi bạn đăng ký và trong sách *Piano Scales & Arpeggios* của ABRSM. Chúng tôi không chép lại các con số tốc độ ở đây vì không kiểm chứng được từng con số.

## Quy định chung

Theo syllabus 2021–2022 của ABRSM:

- Gam và hợp âm rải phải chơi **thuộc lòng** và **không dùng pedal**.
- Thí sinh có thể bắt đầu ở bất kỳ quãng tám nào, miễn là phủ đủ phạm vi yêu cầu.
- Khi chơi hai tay cùng lúc (hands together), hai tay cách nhau một quãng tám, trừ khi có ghi chú khác.
- Tốc độ trong syllabus là *mức hướng dẫn chung*, không phải ngưỡng chấm đỗ/trượt cứng nhắc.
- Giám khảo thường yêu cầu ít nhất một mục của mỗi loại.

Andrew Eales (Pianodao) nhận xét rằng trong bộ yêu cầu 2021 không có chỗ nào đòi chơi gam với các sắc thái cường độ khác nhau.

## Các loại yêu cầu

| Loại | Tiếng Anh | Ghi chú |
|---|---|---|
| Gam trưởng, gam thứ | major and minor scales | thứ hoà âm hoặc giai điệu tuỳ cấp và giọng |
| Gam chuyển động ngược | contrary motion | hai tay đi ra từ cùng một nốt |
| Gam cromatic | chromatic scale | xem [[am-giai-cromatic]] |
| Hợp âm rải trưởng/thứ | arpeggios | thế gốc, thế đảo ở cấp cao |
| Hợp âm rải bảy át | dominant seventh | xem [[hop-am-bay]] |
| Hợp âm rải bảy giảm | diminished seventh | xem [[hop-am-bay-giam]] |
| Gam cách quãng | scales in thirds or sixths, staccato | chỉ ở cấp cao, tuỳ syllabus |

::staff treble C4 D4 E4 F4 G4 A4 B4 C5 | Gam C trưởng một quãng tám, ngón tay phải 1-2-3-1-2-3-4-5

::grand C4/C4 D4/B3 E4/A3 F4/G3 G4/F3 A4/E3 B4/D3 C5/C3 | Chuyển động ngược từ C, hai tay đi ra rồi gặp lại ở hai đầu quãng tám

## Xu hướng theo cấp

Bảng dưới đây mô tả *xu hướng* tăng dần độ khó, không phải danh sách chính thức.

| Cấp | Xu hướng yêu cầu | Cần kiểm tra trong syllabus |
|---|---|---|
| Grade 1–2 | vài giọng ít dấu, phần lớn tay riêng, phạm vi hẹp; hợp âm rải trưởng/thứ tay riêng | giọng nào, mấy quãng tám, có hai tay cùng lúc không |
| Grade 3–4 | thêm giọng, mở rộng phạm vi, bắt đầu nhiều mục hai tay cùng lúc, gam cromatic và chuyển động ngược | loại thứ (hoà âm hay giai điệu), tốc độ |
| Grade 5 | phần lớn giọng trưởng/thứ thường dùng, nhiều mục hai tay cùng lúc | hợp âm rải bảy, staccato |
| Grade 6–8 | tất cả các giọng; hợp âm rải bảy át và bảy giảm; các mẫu đặc biệt như legato/staccato, cách quãng ba hoặc sáu, gam bắt đầu từ các nốt khác nhau | danh sách mẫu cụ thể, phạm vi bốn quãng tám, tốc độ |

Eales cho rằng ABRSM đã tinh gọn yêu cầu từ Grade 6 đến Grade 8 và khen việc giảm tải tổng thể. Ông phê phán các cấp thấp. Ví dụ, sau mức một quãng tám ở Grade 1, gam C trưởng hai tay cùng lúc theo chuyển động song song không xuất hiện lại cho đến Grade 8. Vì vậy ông khuyên giáo viên tự bổ sung bài tập phối hợp hai tay. Để hỗ trợ Grade 1–3, Alan Bullard viết bộ *Scale Explorer*, chia gam thành các đoạn nhỏ để tạo thói quen thế ngón.

## Kế hoạch luyện tập

Nguyên tắc chung về luyện gam xem [[luyen-am-giai]] và [[luyen-hop-am-rai]]. Với kỳ thi:

1. **Lập danh sách** tất cả các mục của cấp từ syllabus và đánh số. Mỗi ngày tập khoảng một phần ba danh sách, quay vòng ba ngày.
2. **Ngón trước, tốc độ sau.** Tập tay riêng, chậm, nói to số ngón ở chỗ luồn ngón cái. Nhóm ngón (ví dụ 1-2-3 / 1-2-3-4) là "bản đồ" của gam.
3. **Máy đếm nhịp (metronome)** bắt đầu thấp hơn mức hướng dẫn khoảng 20–30%, rồi tăng từng nấc nhỏ khi đã chơi sạch ba lần liền. Con số phần trăm này là gợi ý sư phạm, không phải quy định ABRSM.
4. **Hai tay cùng lúc:** chỉ ghép khi mỗi tay đã ổn định. Luyện riêng các điểm luồn ngón không trùng nhau giữa hai tay (xem [[phoi-hop-hai-tay]]).
5. **Thi thử:** nhờ người khác gọi mục ngẫu nhiên giống giám khảo, vì phản xạ nhớ giọng cũng quan trọng như ngón tay.

::rhythm 4/4 e-e-e-e e-e-e-e / w // | Nhịp gam thường dùng: móc đơn đều, kết thúc bằng nốt tròn

## Lỗi thường gặp

- Chỉ tập gam từ quãng tám quen, nên bị lúng túng khi giám khảo yêu cầu phạm vi rộng hơn.
- Luồn ngón cái gây tiếng gợn hoặc nhấc cả cổ tay.
- Nhầm gam thứ hoà âm với thứ giai điệu.
- Tập nhanh trước khi đúng ngón, tạo thói quen sai khó sửa.
- Bỏ qua chuyển động ngược và gam cromatic vì nghĩ là "dễ".

## Ghi chú về nguồn

Các thông tin về quy định chung lấy từ syllabus 2021–2022. ABRSM đã phát hành syllabus 2025–2026 và 2027–2028; hãy dùng bản đúng với năm thi. Nếu sách gam và syllabus khác nhau, syllabus là căn cứ chính thức.

Xem thêm: [[thi-cap-do]], [[luyen-am-giai]], [[luyen-hop-am-rai]], [[ky-thuat-piano]].
`,
  },
  {
    slug: "choi-da-nhip-tren-piano",
    title: "Chơi đa nhịp trên piano",
    category: 'technique',
    aliases: ["2 chống 3", "3 chống 4", "hai đối ba", "polyrhythm piano practice", "three against four", "nice cup of tea", "pass the bread and butter"],
    summary: "Hướng dẫn thực hành cách chơi hai tay theo hai nhịp chia khác nhau trên piano, chủ yếu là 2 chống 3 và 3 chống 4. Bài trình bày phương pháp mẫu số chung, câu thần chú bằng lời, cách tập từng bước và ví dụ trong Chopin, Debussy, Brahms.",
    refs: [
      ["University of Idaho — Aural Skills (Pressbooks), mục polyrhythm", "https://uidaho.pressbooks.pub/auralskills/?p=862"],
      ["Sussex Jazz Magazine — 2 against 3 \"Nice cup of tea\"", "https://www.sussexjazzmag.com/?p=968"],
      ["tonebase — Chopin Fantaisie-Impromptu (Graham Fitch)", "https://www.tonebase.co/piano-blog-posts/fantaisie-impromptu"],
      ["Informance — Fantasie-Impromptu in C-sharp minor Op. 66", "https://dfp.informance.biz/content/pages/130-fantasie-impromptu-in-c-sharp-minor-op-66"],
    ],
    body: `
*Đa nhịp* (polyrhythm) là khi hai hay nhiều lớp nhịp chia một khoảng thời gian thành số phần khác nhau cùng lúc. Lý thuyết chung xem [[da-nhip]] và [[lien-ba]]. Bài này trả lời câu hỏi của người chơi piano: làm sao để tay phải chơi 3 nốt đều trong khi tay trái chơi 2 nốt đều (hoặc 4 chống 3) mà không "nuốt" nhịp?

## Hai cách nghĩ

### Mẫu số chung (tính toán)

Chia phách thành bội số chung nhỏ nhất của hai con số. Với 2 chống 3, bội số chung là 6: tay chơi 3 nốt đánh ở vị trí 1, 3, 5; tay chơi 2 nốt đánh ở vị trí 1, 4. Gộp lại, các điểm đánh nằm ở 1, 3, 4, 5, tạo thành *nhịp tổng hợp* (composite rhythm) dài–ngắn–ngắn–dài.

| Vị trí (1/6 phách) | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Tay 3 nốt | x |  | x |  | x |  |
| Tay 2 nốt | x |  |  | x |  |  |
| Tổng hợp | x |  | x | x | x |  |

Với 3 chống 4, bội số chung là 12: tay 4 nốt ở 1, 4, 7, 10; tay 3 nốt ở 1, 5, 9. Nhịp tổng hợp có sáu điểm đánh.

### Cảm nhận (tổng thể)

Khi đã chơi được, người chơi giỏi không đếm 6 hay 12 nữa mà nghe hai lớp như hai dòng độc lập, mỗi tay "tự chảy" và chỉ gặp nhau ở phách. Nhiều giáo viên coi tính toán là giàn giáo cần tháo bỏ. Nếu giữ mãi lối đếm cơ học, nhạc sẽ bị giật. Hai cách này không loại trừ nhau. Cách thứ nhất giúp chơi đúng, cách thứ hai giúp chơi có nhạc.

## Câu thần chú bằng lời

Các câu nói có số âm tiết và trọng âm trùng với nhịp tổng hợp là công cụ được dùng rộng rãi:

- **2 chống 3 — "Nice cup of tea":** hai tay cùng đánh ở "Nice", tay 3 đánh ở "cup" và "tea", tay 2 đánh ở "of". Theo Sussex Jazz Magazine, hai tay chỉ trùng nhau ở phách đầu ("Nice").
- **3 chống 4 — "Pass the bread and butter":** giáo trình Aural Skills của Đại học Idaho dùng câu này để thể hiện "bức tranh tổng thể" của 3 chống 4.

Giáo viên Việt Nam có thể đặt câu tiếng Việt có cùng nhịp. Điều kiện là âm tiết rơi đúng các vị trí trong bảng trên.

::rhythm 3/4 q:Nice e:cup e:of q:tea // | Nhịp tổng hợp của 2 chống 3 trong một phách chia 6, dài–ngắn–ngắn–dài

::rhythm 3/4 e.:Pass s:the e:bread e:and s:but e.:ter // | Nhịp tổng hợp của 3 chống 4 trong một phách chia 12

## Ví dụ trong tác phẩm

- **Chopin, Fantaisie-Impromptu Op. 66:** tay phải chạy nhóm 4 móc kép chống tay trái nhóm 3 nốt (liên sáu). Theo bài giảng của Graham Fitch trên tonebase, phần mở đầu đòi hỏi nắm vững đa nhịp 3 chống 4, và ông dẫn phương pháp của Osterkamp: vẽ bốn chấm trên ba chấm cách đều, rồi tập từng tay, từng ô nhịp với máy đếm nhịp để giữ phách mạnh chính xác. Xem [[frederic-chopin]].
- **Debussy, Arabesque số 1:** các đoạn liên ba ở một tay chống móc đơn ở tay kia là bài 2 chống 3 kinh điển cho trình độ trung cấp.
- **Brahms:** dùng nhiều hai chống ba và hemiola trong các bản piano. Xem [[johannes-brahms]] và [[sieu-nhip]].

## Luyện tập

1. **Vỗ tay trước:** vỗ nhịp tổng hợp trên đùi, tay trái vỗ đùi trái, tay phải vỗ đùi phải, vừa vỗ vừa nói câu thần chú.
2. **Một nốt mỗi tay:** trên piano, mỗi tay giữ một phím (ví dụ C3 và C5). Chơi nhịp tổng hợp thật chậm.
3. **Đếm to theo mẫu số chung:** "1-2-3-4-5-6" ở tốc độ rất chậm, đánh đúng vị trí trong bảng.
4. **Đổi vai:** tay trái chơi 3, tay phải chơi 2, để tránh chỉ quen một chiều.
5. **Tăng tốc** đến khi không còn đếm 6 được nữa, chỉ đếm phách. Đây là lúc chuyển sang cảm nhận tổng thể.
6. **Đưa vào bài:** chơi một ô nhịp lặp lại (theo gợi ý của Fitch), sau đó nối hai ô, rồi cả câu. Giữ phách đầu tuyệt đối đúng với máy đếm nhịp.
7. **Thêm nhạc:** giai điệu ở tay nào thì tay đó hát, tay kia nhẹ hơn.

## Lỗi thường gặp

- **Biến 2 chống 3 thành nhịp chấm dôi:** tay hai nốt chơi nốt thứ hai quá sớm hoặc quá muộn, nghe giống móc đơn chấm dôi–móc kép.
- **Tay 3 nốt "bị kéo" theo tay 2:** các nốt không còn đều, thường do nhìn vào tay chậm hơn.
- **Dừng ở phách để "chờ" tay kia,** làm vỡ dòng chảy. Hãy tập tiếp tục dù sai.
- **Chỉ học bằng tính toán** nên tốc độ thật không bao giờ đạt được.

## Khi giảng dạy

Với trẻ em, hãy giới thiệu 2 chống 3 bằng vỗ tay và câu nói trước khi đưa bản nhạc. Có thể bắt đầu ở cuối giai đoạn tiền trung cấp nếu học sinh đã vững [[lien-ba]] và [[phoi-hop-hai-tay]]. 3 chống 4 khó hơn nhiều, nên để dành đến khi học sinh đã chơi 2 chống 3 thoải mái ở tốc độ bài. Thời điểm cụ thể tuỳ từng học sinh, không có chuẩn chung.

Xem thêm: [[da-nhip]], [[lien-ba]], [[rubato]], [[phoi-hop-hai-tay]].
`,
  },
  {
    slug: "choi-bon-tay-va-hoa-tau",
    title: "Chơi bốn tay và hoà tấu piano",
    category: 'technique',
    aliases: ["piano bốn tay", "song tấu piano", "hai đàn piano", "piano duet", "four hands", "piano duo", "two pianos", "primo secondo", "collaborative piano", "đệm đàn hợp tác"],
    summary: "Chơi bốn tay (hai người một đàn), hai đàn piano và đệm cho ca sĩ hay nhạc công là những kỹ năng hoà tấu riêng biệt. Bài này hướng dẫn phân vai primo và secondo, quy ước pedal và lật trang, giới thiệu tiết mục theo trình độ và những nguyên tắc cơ bản của đệm đàn hợp tác.",
    refs: [
      ["G. Henle Verlag blog — Who does the pedalling? On the use of the pedal in music for piano duets", "https://blog.henle.de/en/2015/07/20/who-does-the-pedalling-on-the-use-of-the-pedal-in-music-for-piano-duets/"],
      ["No Dead Guys — Plays Well With Others: how to be a great duet player", "https://www.nodeadguys.com/a-piano-blog/plays-well-with-others-how-to-be-a-great-duet-player"],
      ["Interlude — 4 hands 1 keyboard", "https://interlude.hk/4-hands-1-keyboard-music-piano-duet/"],
      ["Bärenreiter — Schubert, Fantasy in F minor D 940 for piano duet (BA11862)", "https://www.barenreiter.co.uk/fantasy-in-f-minor-op-103-d-940-for-piano-duet-ba11862.html"],
      ["Informance — Playing Together: Etiquette and Tips for Duet Playing", "https://dfp.informance.biz/content/pages/142-playing-together-etiquette-and-tips-for-duet-playing"],
    ],
    body: `
Hoà tấu là cách nhanh nhất để học sinh piano học *nghe người khác*. Kỹ năng này khó luyện khi chỉ chơi một mình. Có ba hình thức chính:

- **Bốn tay** (piano duet, four hands): hai người cùng ngồi trên một đàn. Người ngồi bên phải chơi phần **primo** (bè trên), người bên trái chơi phần **secondo** (bè dưới).
- **Hai đàn piano** (piano duo, two pianos): mỗi người một đàn, thường đặt đối đầu nhau. Mỗi người có pedal riêng và phạm vi bàn phím đầy đủ.
- **Đệm đàn hợp tác** (collaborative piano): piano đi cùng ca sĩ hoặc nhạc cụ khác. Xem thêm [[dem-cho-ca-si]] và [[nhac-thinh-phong]].

## Phân vai primo và secondo

Theo bài viết trên trang No Dead Guys, trong phần lớn văn học bốn tay, primo mang giai điệu và định hình phần lớn ý nhạc, còn secondo tạo cảm giác nhịp, đỡ hoà âm và điều khiển pedal. Primo thường viết ở khoá Sol cả hai tay, secondo thường ở khoá Fa. Học sinh nên tập đọc phần mình trong cả hai vai.

::grand C5+E5/C3+G3 D5+F5/G2+G3 E5+G5/C3+G3 | Primo (khuông trên) chơi giai điệu ở âm vực cao, secondo (khuông dưới) đỡ hoà âm và bè trầm

### Ai đạp pedal?

Theo blog của nhà xuất bản G. Henle, thói quen để secondo đạp pedal vẫn phổ biến trong thực hành. Bài viết đưa ra hai lý do: secondo thường giữ khung hoà âm, và primo ngồi xa về bên phải, không với tới pedal giữ tiếng. Henle cũng lưu ý rằng có nhà soạn nhạc như Bizet (*Jeux d'enfants*) ghi pedal cho cả hai phần. Đây là quy ước, không phải luật. Primo vẫn có thể dùng pedal una corda. Secondo phải nghe giai điệu của primo khi đổi pedal, không chỉ nghe hoà âm của mình (xem [[ban-dap]]).

### Lật trang và các thoả thuận khác

Theo No Dead Guys, primo thường lật trang, nhưng đôi khi secondo phải lật để không làm đứt câu giai điệu. Interlude khuyên hai người thoả thuận trước về pedal và lật trang. Ví dụ, ấn bản Urtext của Bärenreiter cho Fantasie cung F thứ D. 940 của [[franz-schubert|Schubert]] in primo và secondo trên hai trang đối diện, với chỗ lật trang thuận tiện, và có phần giới thiệu về thực hành biểu diễn, bao gồm pedal. Những điều khác cần thoả thuận:

- Ai ra hiệu bắt đầu (thường là người có nốt đầu tiên hoặc primo) và ra hiệu bằng cách nào: hít thở, gật đầu.
- Khoảng cách ngồi và độ cao ghế. Khi hai tay ở giữa đàn chồng lên nhau, ai để tay trên, ai để tay dưới.
- Cân bằng cường độ: secondo dễ to quá vì âm vực trầm vang hơn.

## Tiết mục theo trình độ

| Trình độ | Tác phẩm | Ghi chú |
|---|---|---|
| Sơ cấp | Diabelli, các bài tập bốn tay (ví dụ Op. 149) | primo phạm vi hẹp, giáo viên chơi secondo |
| Trung cấp | Bizet, *Jeux d'enfants*; Fauré, *Dolly* Op. 56 | nhân vật rõ, chơi được theo từng bài ngắn |
| Trung–cao cấp | Dvořák, *Vũ khúc Slavơ* (bản bốn tay); Ravel, *Ma mère l'Oye* | Ravel đòi hỏi kiểm soát màu sắc rất nhẹ |
| Cao cấp | Schubert, Fantasie D. 940; Mozart, Sonata cho hai đàn K. 448 | đòi hỏi cân bằng và nhịp chung tuyệt đối |

Xem thêm các trang [[gabriel-faure]], [[antonin-dvorak]], [[maurice-ravel]]. Phân cấp trong bảng là gợi ý sư phạm. Từng bài trong các tập có độ khó khác nhau.

## Cơ bản về đệm đàn hợp tác

Khi đệm cho ca sĩ hay nhạc công, người chơi piano là *đối tác*, không phải người phục vụ. Có thể tóm tắt các nguyên tắc thường được dạy như sau:

1. **Biết phần của người kia.** Đọc lời ca, đánh dấu chỗ lấy hơi của ca sĩ hay chỗ đổi cung/hơi của nhạc công.
2. **Thở cùng.** Bắt đầu cùng nhịp thở của người hát. Trước chỗ lấy hơi, cho thêm một chút thời gian.
3. **Theo và dẫn.** Đi theo [[rubato]] của người độc tấu ở giai điệu, nhưng giữ nhịp vững ở các đoạn piano dạo đầu, gian tấu và kết. Xem [[dong-bo-nhip-va-cuon-theo]].
4. **Cân bằng.** Nắp đàn, pedal và cường độ phải điều chỉnh theo âm lượng và âm vực của người kia. Giọng trầm và nhạc cụ trầm dễ bị lấp nhất.
5. **Không dừng.** Khi người độc tấu nhảy nhịp hay quên, piano phải theo ngay đến chỗ họ đang chơi, không quay lại.

## Luyện tập

1. Giáo viên chơi secondo cho học sinh chơi primo trong những bài rất dễ. Sau đó đổi vai.
2. Tập đếm to một ô nhịp chuẩn bị chung và tập ra hiệu bắt đầu bằng hơi thở.
3. Thu âm buổi tập và nghe riêng cân bằng giữa hai người.
4. Tập "bắt lại": một người cố ý bỏ một ô nhịp, người kia phải theo kịp.

## Lỗi thường gặp

- Mỗi người chỉ nghe phần mình, nên nhịp lệch dần.
- Secondo đạp pedal theo hoà âm của mình làm nhoè giai điệu của primo.
- Không thống nhất trước ngón ở chỗ hai tay chồng nhau.
- Người đệm chơi to như độc tấu.

Xem thêm: [[nhac-thinh-phong]], [[dem-cho-ca-si]], [[phoi-hop-hai-tay]], [[hoi-hop-bieu-dien]].
`,
  },
]
