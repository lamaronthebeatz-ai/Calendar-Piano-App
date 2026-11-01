import type { Article } from '../wiki'

export const jazz: Article[] = [
  {
    slug: 'hoa-am-jazz',
    title: 'Hoà âm jazz: hệ thống và lộ trình',
    category: 'jazz',
    aliases: ['hoà âm jazz', 'jazz harmony', 'lý thuyết jazz', 'jazz theory', 'học hoà âm jazz', 'lộ trình jazz'],
    summary: 'Bài tổng quan: hoà âm jazz khác hoà âm cổ điển ở đâu, các khái niệm nền tảng (hợp âm 7, nốt căng, ii – V – I, hợp âm – âm giai, xếp hợp âm, thay thế) và thứ tự học các bài trong mục này.',
    wiki: 'Jazz_harmony',
    refs: [
      ['Open Music Theory 2e — Jazz (mục lục chương)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz'],
      ['Wikipedia — Jazz harmony', 'https://en.wikipedia.org/wiki/Jazz_harmony'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — Introduction to jazz theory', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/31%3A_Introduction_to_Jazz_Theory/31.08%3A_Standard_Chord_Progressions'],
      ['Wikipedia — Chord-scale system', 'https://en.wikipedia.org/wiki/Chord-scale_system'],
    ],
    body: `
Nếu bạn đã học hoà âm cổ điển, tin vui là: bạn không phải học lại từ đầu. Hoà âm jazz đứng trên nền [[he-thong-hoa-am-co-dien|hoà âm chức năng]] — vẫn có chủ, tiền át, át, vẫn có [[hop-am-at-phu|át phụ]] và [[chuyen-giong|chuyển giọng]]. Tin không vui lắm là: **cách nghĩ và cách dùng** thì khác ở gần như mọi chỗ. Bài này cho bạn thấy khác ở đâu, rồi đưa bạn tấm bản đồ cho cả bộ sách. (Đây cũng là Phần III của [[giao-trinh-hoa-am]].)

## Khác ở đâu
Chơi một hợp âm Đô trưởng ba nốt, rồi chơi Cmaj9. Cái thứ nhất nghe như một bài thánh ca; cái thứ hai nghe như jazz. Toàn bộ bảng dưới đây là để giải thích vì sao.

::grand E4+G4+C5/C3=C G4+B4+D5+E5/C3=Cmaj9 | Hợp âm ba Đô trưởng, rồi Cmaj9: cùng một chủ âm, hai thế giới

| | Hoà âm cổ điển | Hoà âm jazz |
|---|---|---|
| Đơn vị cơ bản | [[hop-am-ba|Hợp âm ba]] | [[hop-am-bay|Hợp âm 7]]; hợp âm ba thường được thêm 6 hoặc 9 ([[hop-am-6-va-add]]) |
| Nốt "lạ" | [[not-ngoai-hop-am|Nốt ngoài hợp âm]] phải giải quyết | **Nốt căng** 9, 11, 13 là một phần của hợp âm ([[hop-am-mo-rong]]) |
| Ký hiệu | [[chuc-nang-hoa-am|Số La Mã]], [[bass-so|bè trầm có số]] | **Ký hiệu hợp âm** trên lead sheet: bản nhạc chỉ ghi giai điệu và hợp âm ([[ky-hieu-hop-am]]) |
| Kết điển hình | IV – V – I, ii6 – V – I | **[[ii-v-i|ii – V – I]]** |
| [[luat-hoa-am-bon-be|Viết bè]] | Bốn bè [[dan-giong|SATB]] theo luật | **Xếp hợp âm** trên đàn ([[xep-hop-am]]) |
| [[giai-dieu|Giai điệu]] trên hợp âm | Từ [[doi-am|đối âm]] và hoà âm | **Hợp âm – [[am-giai|âm giai]]** cho [[ngau-hung-piano|ngẫu hứng]] ([[he-thong-hop-am-am-giai]]) |
| Ai quyết định hợp âm | Nhà soạn nhạc, cố định | Người chơi **thay thế, tái hoà âm** ngay khi biểu diễn ([[thay-the-hop-am]]) |
| [[tiet-tau|Tiết tấu]] | Chia đều | [[swing]] |

Còn một khác biệt nữa, đến từ **blues**: hợp âm 7 át có thể làm **chủ** (I7) và đứng yên đó cả buổi, chẳng cần giải quyết đi đâu (xem [[blues-12-nhip]], [[am-giai-blues]]). Giáo viên hoà âm cổ điển nào nghe cũng sẽ nhíu mày. Dân jazz thì gọi đó là nhà.

## Ba câu hỏi bạn sẽ hỏi suốt bộ sách
Trước khi đi vào chi tiết, đây là ba thói quen sẽ giúp bạn hiểu hoà âm jazz có hệ thống. Tập chúng ngay từ bây giờ:
1. **Đây là ii – V về đâu?** Nhìn mọi tiến trình như một chuỗi cặp ii – V dẫn tới những "[[bac-am-giai|chủ âm]] tạm thời". Một bài 32 ô với 40 hợp âm thường chỉ là năm sáu cặp ii – V nối nhau.
2. **Nốt 3 và nốt 7 là gì?** Hai nốt này quyết định chất của hợp âm và nối hợp âm này sang hợp âm kia ([[not-dan-huong]]).
3. **Mình thay được hợp âm này bằng gì?** Mọi hợp âm 7 át đều thay được ([[thay-the-tritone|tritone]], backdoor, [[hop-am-bay-giam|hợp âm 7 giảm]]…) — miễn giai điệu còn hợp với hợp âm mới.

## Đi đường nào
Muốn đặt tay lên phím chơi một bài jazz ngay hôm nay: đọc [[hoc-piano-jazz]] trước.

Muốn học bài bản: bạn nên đã qua Chương 1 – 7 của [[giao-trinh-hoa-am]] (nhất là hợp âm 7, chức năng, át phụ, [[hop-am-muon|hợp âm mượn]]). Rồi đi theo thứ tự dưới đây, do Lamar sắp xếp: cảm nhận → hợp âm → tiến trình → âm giai → thế bấm → tái hoà âm → ngẫu hứng → jazz hiện đại.
1. **Cảm nhận**: [[swing]]; bức tranh toàn cảnh: [[phong-cach-jazz]].
2. **Blues**: [[blues-12-nhip]], [[am-giai-blues]].
3. **Hợp âm jazz**: [[ky-hieu-hop-am]], [[hop-am-mo-rong]], [[hop-am-6-va-add]], [[hop-am-gach-cheo]], [[slash-chord-tren-mot-not-bass]], [[hop-am-chong]].
4. **Kết và tiến trình**: [[ii-v-i]] → [[turnaround-jazz]] → [[line-cliche]] → [[vong-hop-am]]; đọc tiến trình: [[phan-tich-tien-trinh-jazz]].
5. **Âm giai cho hợp âm**: [[he-thong-hop-am-am-giai]] → [[dieu-thuc-thu-giai-dieu]] → [[hop-am-at-bien-hoa]] → [[hop-am-sus-jazz]] → [[am-giai-bebop]] → [[am-giai-doi-xung-jazz]] ([[am-giai-bat-cung]]) → [[luyen-am-giai-jazz]] → [[ngu-cung-trong-jazz]] → [[am-giai-hoa-thanh-va-am-giai-bon-not]].
6. **Xếp hợp âm**: [[the-bam-ba-not]] → [[xep-hop-am]] (shell, không gốc, drop 2) → [[the-bam-mo]] → [[quy-tac-xep-hop-am-jazz]] → [[the-bam-bac-thay-jazz]] → [[hop-am-so-what-barron]] → [[hop-am-khoi]] → [[upper-structure]] → [[hoa-am-quang-bon]] → [[am-cum|âm cụm]]; chọn và ghép thế bấm: [[ket-hop-the-bam]], [[chon-the-bam-jazz]].
7. **Tay trái và đệm**: [[bass-di-jazz]], [[stride-piano]], [[dem-jazz]], [[dem-cho-ca-si]], [[jam-session]]; nhịp latin: [[dem-bossa-nova]], [[clave-va-latin-jazz]]; ngoài jazz: [[dem-rnb-neo-soul]].
8. **Thay thế**: [[thay-the-hop-am]], [[thay-the-tritone]], [[hop-am-luot-jazz]].
9. **Tái hoà âm**: [[tai-hoa-am]], [[tai-hoa-am-nang-cao]], [[ket-lua-va-tiep-can-hop-am]], [[tai-hoa-am-gospel]], [[doi-nhip-the-loai-jazz|đổi nhịp, đổi thể loại, chơi tự do thời gian]], [[constant-structures]]; **sáng tác**: [[sang-tac-jazz]].
10. **[[hinh-thuc-am-nhac|Hình thức]] và tiến trình chuẩn**: [[hinh-thuc-ca-khuc-32]], [[doc-lead-sheet-va-thuoc-bai]], [[rhythm-changes]], [[head-dao-dau-va-ket]], [[vong-coltrane]] (phân tích: [[phan-tich-giant-steps]]).
11. **Ngẫu hứng**:
   - Nền tảng: [[ngau-hung-jazz]] → [[not-dan-huong]] → [[trang-tri-giai-dieu-jazz]] → [[not-tiep-can-jazz]] → [[not-tranh-va-quang-nghich]].
   - Phương pháp: [[ngau-hung-doc-ngang]] → [[tu-am-giai-den-am-nhac]] → [[tiet-tau-ngau-hung-jazz]] → [[lick-va-trich-dan]] → [[mau-lap-chu-ky]] → [[choi-ngoai-jazz]].
   - Nâng cao: [[superimposition-jazz]] → [[sheets-of-sound]] → [[triad-pairs]] → [[ngau-hung-hop-am]].
   - Tổng hợp: [[xay-dung-bai-solo]] → [[phan-tich-solo-jazz]] → [[meo-ngau-hung-jazz]] (cả mục [[ngau-hung-ung-tac|ngẫu hứng]]).
12. **Jazz hiện đại**: [[jazz-dieu-thuc]] ([[hoa-am-dieu-thuc]]) → [[post-bop-free-jazz]] → [[nhung-ngo-nhan-trong-ly-thuyet-jazz]].
13. **Ứng dụng đệm hát**: [[dem-hat-piano]].

Đừng đọc lướt rồi bỏ đàn đó. Mỗi bài chỉ thật sự thuộc về bạn khi bạn đã **chơi mọi ví dụ**, ở **ít nhất ba giọng**, và **nghe ra** nó trong một bản thu thật.

**Công cụ của người chơi ban nhạc:** [[he-so-nashville-va-lead-sheet]] (bảng số, Real Book), [[hinh-thuc-ca-khuc-pho-thong]] (verse – chorus, AABA) và [[clave-tresillo-va-nhip-cong]] (tiết tấu latin).
`,
  },  {
    slug: 'hoc-piano-jazz',
    title: 'Học piano jazz: bắt đầu từ đâu?',
    category: 'jazz',
    aliases: ['how to play jazz piano', 'học piano jazz', 'bắt đầu học jazz', 'jazz piano roadmap', 'lộ trình piano jazz'],
    summary: 'Lộ trình thực hành của Lamar cho người bắt đầu chơi jazz: chọn một bài ballad chậm nhiều ii – V – I, học thật đơn giản (giai điệu + hợp âm 7), rồi thêm từng lớp — thế bấm, tay trái, tiết tấu, ngẫu hứng — mỗi lớp tập riêng trước khi ghép.',
    wiki: 'Jazz_piano',
    body: `
Bạn muốn chơi jazz, và muốn bắt đầu **hôm nay**, chứ không phải sau khi đọc xong ba trăm trang lý thuyết. Được thôi. Bài này là lộ trình **tay trên phím**; lộ trình lý thuyết đầy đủ để ở [[hoa-am-jazz]], bạn quay lại đó sau.

## Bạn cần biết tối thiểu gì
Chỉ hai thứ:
- Cấu trúc [[am-giai-truong|âm giai trưởng]].
- Các [[hop-am-bay|hợp âm 7]] trong một giọng và cách dựng từng loại (xem [[ky-hieu-hop-am]]).

Thử ngay: ở Đô trưởng, dựng hợp âm 7 trên mỗi bậc. Bạn sẽ được maj7 – m7 – m7 – maj7 – 7 – m7 – ø. Thuộc thứ tự đó ở vài giọng là đủ để bắt đầu.

::staff treble C4+E4+G4+B4=Cmaj7 D4+F4+A4+C5=Dm7 E4+G4+B4+D5=Em7 F4+A4+C5+E5=Fmaj7 G4+B4+D5+F5=G7 A4+C5+E5+G5=Am7 B4+D5+F5+A5=Bø | Bảy hợp âm 7 của Đô trưởng — vốn liếng đủ cho bài jazz đầu tiên

## Chọn bài đầu tiên
Chọn một bài **chậm, dễ nhớ, ít dấu hoá bất thường**, và có **thật nhiều [[ii-v-i]]**. Gợi ý: "Fly Me to the Moon", "Autumn Leaves" (đã phân tích ở [[phan-tich-tien-trinh-jazz]]), "All the Things You Are", "Softly as in a Morning Sunrise". Đừng chọn "Giant Steps" làm bài đầu tiên. Thật đấy.

## Thêm từng lớp, mỗi lần một lớp
Sai lầm lớn nhất của người mới là muốn mọi thứ cùng lúc: thế bấm đẹp, bass đi, swing, ngẫu hứng. Kết quả là chẳng thứ gì ra hồn. Hãy chồng từng lớp:
1. **Bài thật đơn giản**: giai điệu tay phải, hợp âm 7 thế gốc tay trái. Chơi tới khi không phải nghĩ.
2. **Thế bấm**: shell (gốc + 3 hoặc 7) → [[the-bam-ba-not]] → [[xep-hop-am|không gốc]] (3 – 5 – 7 – 9 cho hợp âm trưởng và thứ, 3 – 7 – 9 – 13 cho V7; lối bấm phát triển trong thập niên 1950 với [[bill-evans|Bill Evans]], Wynton Kelly, Ahmad Jamal) → [[the-bam-mo]].
3. **Tay trái**: [[bass-di-jazz|bass đi]], [[stride-piano|stride]].
4. **Tiết tấu**: [[swing]], hình đệm Charleston ([[dem-jazz]]).
5. **[[ngau-hung-piano|Ngẫu hứng]]**, đi từ dễ đến khó: rải hợp âm 7 → âm giai → nốt cromatic và [[choi-ngoai-jazz|side-slipping]] → toàn bộ cromatic; kết câu ở [[not-dan-huong|nốt dẫn hướng]] (xem [[xay-dung-bai-solo]]).

::grand F3+C4/D3=Dm7 F3+B3/G2=G7 E3+B3/C3=Cmaj7 | Lớp đầu tiên của thế bấm: shell gốc + 3 + 7 cho ii – V – I ở Đô. Ba nốt, mà đã nghe ra jazz

Mỗi lớp **tập riêng** cho tới khi chắc, rồi mới ghép với lớp khác. Nghe thì chậm, nhưng đó là đường nhanh nhất.

## Thói quen luyện tập
- Dùng [[kiem-soat-toc-do|máy đếm nhịp]], tập chậm. **Hai mươi phút mỗi ngày** tốt hơn một tiếng ba ngày một lần.
- **Chép** solo từ bản thu ([[phan-tich-solo-jazz]]): không có cách nào học ngôn ngữ jazz nhanh hơn là bắt chước người nói giỏi nhất.
- **Chơi với người khác** càng sớm càng tốt ([[jam-session]]). Bạn sẽ học trong một buổi điều mà một tháng tập một mình không dạy được.

## Câu hỏi và bài tập
1. Dựng bảy hợp âm 7 của Fa trưởng và Si giáng trưởng.
2. Chọn bài đầu tiên của bạn; chơi lớp 1 (giai điệu + hợp âm thế gốc) trọn bài.
3. Chuyển tay trái sang shell gốc + 3 + 7 cho cả bài.
`,
  },

  {
    slug: 'swing',
    title: 'Swing',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['nhịp swing', 'swing feel', 'shuffle', 'móc đơn swing', 'backbeat'],
    summary: 'Cách chơi các cặp móc đơn dài – ngắn (gần tỉ lệ liên ba 2:1) cùng trọng âm ở phách 2 và 4 — "nhịp đập" của jazz.',
    wiki: 'Swing_(jazz_performance_style)',
    refs: [
      ['Wikipedia — Swing (jazz performance style)', 'https://en.wikipedia.org/wiki/Swing_(jazz_performance_style)'],
      ["Friberg & Sundström (1999) — Jazz drummers' swing ratio in relation to tempo (ASA)", 'https://acoustics.org/pressroom/httpdocs/137th/friberg.html'],
      ['Friberg & Sundström (2002) — Swing ratios and ensemble timing in jazz performance (Carleton jazz theory database)', 'https://jazztheory.ssac.carleton.ca/view.php?id=198'],
      ['Honing & de Haas (2008) — Swing once more (PDF)', 'https://mcg.uva.nl/mcg-2023/papers/honing-haas-2008.pdf'],
    ],
    body: `
Đây là bài khó nhất của cả bộ sách, và cũng ngắn nhất. Khó, vì swing không học được bằng mắt. Ngắn, vì những gì giấy mực nói được về swing chỉ có chừng này. Phần còn lại là **nghe**.

## Hai móc đơn viết bằng nhau, chơi không bằng nhau
Trong jazz, hai [[truong-do|nốt móc đơn]] viết bằng nhau thường **không** được chơi bằng nhau: nốt đầu dài hơn, nốt sau ngắn hơn. Đầu bản nhạc hay ghi "**Swing**" hoặc "**Swung 8ths**", đôi khi kèm công thức ♫ = ♩♪ trong một nhóm [[lien-ba]]. Ngược lại, "**Straight 8ths**" nghĩa là chơi đều.

::rhythm 4/4 e-e e-e e-e e-e // | Cách viết: các cặp móc đơn bằng nhau
::rhythm 4/4 3[q-e] 3[q-e] 3[q-e] 3[q-e] // | Cách chơi gần đúng ở nhịp độ vừa: đen + móc đơn trong nhóm liên ba (2 : 1)

Bấm nghe hai dòng trên vài lần. Dòng thứ hai mới chỉ là **xấp xỉ** của swing, nhưng là chỗ bắt đầu tốt.

## Tỉ lệ không cố định
Nhiều sách nói swing là tỉ lệ liên ba 2 : 1. Thực tế phức tạp hơn:
- Chậm: swing đậm, dài – ngắn rõ, có khi hơn 2 : 1.
- Nhanh: swing nhẹ dần, gần như đều.

Nghiên cứu đo đạc của **Friberg và Sundström** (*Music Perception*, 2002) trên tiếng [[bo-go-dan-nhac|cymbal]] ride của các tay [[trong-jazz|trống jazz]] nổi tiếng (Tony Williams, Jack DeJohnette, Jeff Watts…) cho thấy tỉ lệ swing **thay đổi rất nhiều theo nhịp độ**: ở nhịp độ nhanh gần **1 : 1**, ở nhịp độ chậm tăng dần tới gần **3,5 : 1**. Nghĩa là: ký hiệu liên ba chỉ là quy ước. Swing thật phải học bằng **tai**, bằng cách nghe và chơi theo bản thu.

## Phách 2 và 4
Nhạc cổ điển nhấn phách 1 và 3 (xem [[so-chi-nhip]]). Jazz nhấn **phách 2 và 4** — tiếng hi-hat của tay trống đóng lại đúng hai phách đó. Nếu bạn vỗ tay theo một bản jazz ở phách 1 và 3, người trong quán sẽ biết ngay bạn mới tới.

Thêm nữa: nốt móc đơn rơi vào phần nhẹ của phách ("và") thường được **nhấn nhẹ** và hơi tách, tạo cảm giác [[dao-phach|đảo phách]] liên tục. Đó là một nửa bí mật của câu bebop "lướt".

**Shuffle** là swing với cảm giác liên ba rõ và nặng, hay gặp trong [[blues-12-nhip]].

## Tập swing trên piano
1. Bật máy đếm nhịp ở **phách 2 và 4** (đặt máy đếm ở nửa nhịp độ, coi mỗi tiếng là phách 2 và 4). Lúc đầu sẽ thấy lạ; một tuần sau bạn sẽ không chịu được tiếng đếm ở phách 1 và 3 nữa.
2. Chơi [[am-giai|âm giai]] bằng móc đơn swing, nhấn nhẹ nốt "và".
3. Chơi theo bản thu ở nhiều nhịp độ, để ý tỉ lệ dài – ngắn đổi theo.
4. Tay trái đệm hợp âm ngắn theo hình **Charleston** (phách 1 và "và" của phách 2) để cảm nhận đảo phách.

::rhythm 4/4 q. e rh // | Hình Charleston: phách 1 và "và" của phách 2

Một mẹo nữa: **hát** câu bạn định chơi trước khi chơi, bằng âm "doo – ba – doo – ba". Câu hát mà swing thì câu đàn sẽ swing theo. Câu hát không swing thì đừng mong ngón tay cứu bạn.

Lý thuyết hoà âm đi kèm: [[hoa-am-jazz]]. Các hình đệm Charleston và "đẩy" khi đệm: [[dem-jazz]].

## Câu hỏi và bài tập
1. Chơi âm giai Đô trưởng hai quãng tám bằng móc đơn swing với máy đếm ở phách 2 và 4, ở ba nhịp độ: 80, 140, 200.
2. Nghe một bản thu ballad và một bản thu nhanh; mô tả khác biệt về độ dài – ngắn của móc đơn.
3. Đệm tay trái hình Charleston qua một chorus blues.
`,
  },
  {
    slug: 'blues-12-nhip',
    title: 'Blues 12 ô nhịp',
    category: 'jazz',
    also: ['form', 'improvisation', 'genres'],
    aliases: ['12 bar blues', 'blues 12 ô', 'vòng blues', 'twelve-bar blues', 'blues'],
    summary: 'Khung hoà âm 12 ô nhịp dùng các hợp âm I, IV, V — nền tảng của blues, rock and roll và jazz.',
    wiki: 'Twelve-bar_blues',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — The Memphis Blues', 'https://en.wikipedia.org/wiki/The_Memphis_Blues'],
      ['American Songwriter — Behind the song: "St. Louis Blues"', 'https://americansongwriter.com/behind-the-song-st-louis-blues/'],
      ['St. Olaf College — W. C. Handy and the blues', 'https://pages.stolaf.edu/americanmusic/author/findle1/'],
    ],
    body: `
Lý thuyết cổ điển giải thích blues không giỏi lắm. Thử nghĩ xem: hợp âm chủ của blues là một hợp âm **7 át**. Âm giai blues thì chẳng giống âm giai phương Tây nào: hai quãng 3 thứ, ba nửa cung liền nhau. Vậy mà không nguồn nào quan trọng với jazz bằng blues. Nó có truyền thống riêng, nhưng cũng là **phần lớn nhất** của truyền thống jazz.

Một điều nữa trước khi vào chuyện hợp âm: bài có chữ "blues" trong tên chưa chắc đã là blues ("Limehouse Blues", "Bye Bye Blues" là bài hay nhưng không phải blues). Phần lớn blues dài 12 ô, nhưng có blues dài hơn, ngắn hơn, và có bài 12 ô không phải blues. Vì blues còn là một **âm thanh, một cảm giác, một thái độ** — thứ không chép lên giấy được. Nếu bạn chưa quen blues, nghe một đĩa của B. B. King trước khi đọc tiếp.

## Blues ba hợp âm
Có cả tỉ bộ "hợp âm blues". Nhưng có **một** bộ ba hợp âm được mọi người công nhận, gần như không đổi từ thuở đầu của jazz tới giờ. Mỗi ô là một [[so-chi-nhip|ô nhịp]] 4/4, ở giọng Đô:

| Ô 1–4 | Ô 5–8 | Ô 9–12 |
|---|---|---|
| C7 · C7 · C7 · C7 | F7 · F7 · C7 · C7 | G7 · F7 · C7 · G7 |

::form C7:4 F7:2 C7:2 G7:1 F7:1 C7:1 G7:1 | Vòng blues 12 ô ở Đô: số dưới mỗi khối là số ô

::staff treble C4+E4+G4+Bb4=C7 F4+A4+C5+Eb5=F7 G4+B4+D5+F5=G7 | Ba hợp âm 7 át của blues ở Đô: C7 (I7), F7 (IV7), G7 (V7)

Cả ba đều là hợp âm 7 át — "phạm luật" theo [[he-thong-hoa-am-co-dien|hoà âm cổ điển]], nhưng đó chính là màu blues. Ô 12 dùng G7 để quay về đầu vòng (một [[turnaround-jazz|turnaround]] nhỏ). "Blue Monk" và "Misterioso" của Monk là blues ba hợp âm.

Thập niên 1930, khung này đổi chút ít: thêm IV ở **ô 2** (kiểu "quick change": C7 – F7 – C7 – C7) và V ở ô 12.

## Blues bebop
Thời bebop, dân jazz nhồi thêm hợp âm vào cùng mười hai ô đó. Một phiên bản hay gặp:

| Ô | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Hợp âm | C7 | F7 | C7 | C♯m7 F♯7 | F7 | Fm7 B♭7 |
| **Ô** | **7** | **8** | **9** | **10** | **11** | **12** |
| Hợp âm | Em7 A7 | E♭m7 A♭7 | Dm7 | G7 | C7 A7 | Dm7 G7 |

Để ý:
- **Ô 4**: C♯m7 – F♯7 là [[thay-the-tritone|thay thế tritone]] của ii – V về F (F♯7 thay cho C7, kèm hợp âm ii của nó).
- **Ô 6 – 10**: một chuỗi **ii – V đi xuống cromatic**: Fm7 – B♭7, Em7 – A7, E♭m7 – A♭7, Dm7 – G7.
- **Ô 9 – 11**: ii – V – I (Dm7 – G7 – C7) thay cho V – IV – I.
- **Ô 11 – 12**: turnaround I – VI – ii – V.

Còn nhiều biến thể nữa: Cmaj7 – Dm7 – Em7 – E♭m7 ở ô 7 – 8, hay turnaround Tadd Dameron (Cmaj7 – E♭7 – A♭maj7 – D♭7) ở hai ô cuối.

## Vậy chơi bản nào?
Tất cả. Dân jazz ngày nay **trộn tự do** mọi phiên bản, đổi ngay giữa chorus: bốn ô đầu kiểu 1930, bốn ô giữa kiểu ba hợp âm, bốn ô cuối kiểu bebop. Khi solo, cứ làm theo tai, trí và hồn bạn. Khi đệm, việc của bạn là **nghe** người solo và đi theo.

Học thế nào? Bắt đầu đơn giản, với blues ba hợp âm. Thêm từng hợp âm, từng phép thay thế mới **khi bạn đã nghe ra nó** và thấy sẵn sàng chơi nó.

## Các loại blues đặc biệt
Tất cả đều là con cháu của blues ba hợp âm:
- **Blues thứ.** Hợp âm i và iv là hợp âm thứ (ghi Cm, Fm thay vì Cm7 để bạn được chọn Cm6, Cm(maj7)…). Chỗ thú vị nhất là ô 9 – 10: thay cho V – IV, blues thứ đi **♭VI7 – V7** về i (A♭7 – G7 – Cm). Ví dụ: "Mr. P.C." và "Equinox" của Coltrane.

| Ô 1–4 | Ô 5–8 | Ô 9–12 |
|---|---|---|
| Cm · Cm · Cm · Cm | Fm · Fm · Cm · Cm | A♭7 · G7 · Cm · G7 |

- **Blues valse** dài **24 ô** (gấp đôi), nên có chỗ cho hoà âm lạ hơn: "All Blues" (Miles Davis), "Footprints" (Wayne Shorter), "Bluesette" (Toots Thielemans).
- **Blues có đoạn giữa**: đặt blues vào khung AABA — mỗi đoạn A là một blues 12 ô, đoạn B tám ô — thành 44 ô. "Locomotion" của Coltrane là ví dụ, với đoạn giữa biến tấu từ đoạn giữa "I Got Rhythm" ([[rhythm-changes]]).
- **Blues đi xuống** (thường gọi "Bird blues"): "Blues For Alice" của Charlie Parker mở đầu bằng Fmaj7 thay vì F7, rồi gốc hợp âm đi xuống dần qua một chuỗi ii – V:

| Ô 1–4 | Ô 5–8 | Ô 9–12 |
|---|---|---|
| Fmaj7 · Eø A7 · Dm7 G7 · Cm7 F7 | B♭7 · B♭m7 E♭7 · Am7 D7 · A♭m7 D♭7 | Gm7 · C7 · F7 D7 · Gm7 C7 |

- **Blues với hợp âm sus**: Coltrane đưa hợp âm sus vào blues với "Mr. Day" (xem [[hop-am-sus-jazz]]).

## Giai điệu, nhịp, lời
- Giai điệu và ngẫu hứng dùng [[am-giai-blues]] — nhưng mọi âm giai bạn học trong bộ sách đều chơi được trên blues.
- Nhịp [[swing]]; blues chậm thường **shuffle** (liên ba nặng).
- Lời thường theo cấu trúc **AAB**: câu 1 nêu ý, câu 2 lặp lại, câu 3 đáp. Ba câu, mỗi câu bốn ô — đúng khung 12 ô.

## Bass boogie-woogie cho tay trái
C – E – G – A – B♭ – A – G – E (mỗi nốt một móc đơn), dịch lên F và G theo hợp âm. Chơi nó tới khi tay trái tự chạy, rồi ứng tác tay phải bằng âm giai blues ở trên.
::staff bass C3 E3 G3 A3 Bb3 A3 G3 E3 | Bè trầm boogie-woogie trên C7

## Lịch sử: những bản blues in đầu tiên
Blues bắt nguồn từ truyền thống dân gian của người Mỹ gốc Phi; những bản **được in** đầu tiên xuất hiện năm 1912. Các nguồn không thống nhất "bản đầu tiên" là bản nào:
| Bản | Năm in | Ghi chú |
|---|---|---|
| *Dallas Blues* — Hart Wand | 1912 | In ở Oklahoma City, **vài tháng trước** bản blues của Handy |
| *The Memphis Blues* — W. C. Handy | 1912 | Viết năm 1909 cho một ứng viên thị trưởng Memphis |
| *St. Louis Blues* — W. C. Handy | 1914 | Bản hit lớn, đưa blues thành một trong những [[the-loai|thể loại]] phổ biến nhất nước Mỹ |

Một điểm thú vị: cả *Memphis Blues* lẫn *St. Louis Blues* đều **không hoàn toàn** theo khuôn 12 ô nhịp. Sau đoạn mở đầu ngắn, chúng đặt một đoạn 12 ô nhịp blues cạnh một đoạn **16 ô nhịp** thông thường. *St. Louis Blues* còn [[chuyen-giong|chuyển giọng]] ra ngoài khuôn rồi mới quay về. Vì vậy câu trả lời cho "bản blues đầu tiên" tuỳ vào việc tính bản đầu tiên có chữ "blues" trong tên, bản 12 ô nhịp đầu tiên, hay bản hit đầu tiên.

Liên quan: [[vong-hop-am]], [[chuc-nang-hoa-am]], [[dao-phach]], [[ngau-hung-piano]]. So sánh với khuôn 32 ô: [[hinh-thuc-ca-khuc-32]].

## Câu hỏi và bài tập
1. Chơi blues ba hợp âm ở Fa với tay trái hợp âm 7, tay phải âm giai blues, hai chorus. Rồi chuyển sang Si giáng.
2. Chơi blues bebop ở Đô theo bảng, chỉ bằng thế bấm shell (gốc + 3 + 7).
3. Chơi một chorus blues thứ ở Đô; ô 9 – 10 nghe A♭7 – G7 khác V – IV thế nào?
4. Trộn: bốn ô đầu ba hợp âm, bốn ô giữa kiểu 1930, bốn ô cuối kiểu bebop.
`,
  },
  {
    slug: 'am-giai-blues',
    title: 'Âm giai blues',
    category: 'jazz',
    also: ['scales'],
    aliases: ['blues scale', 'nốt blue', 'blue note', 'gam blues'],
    summary: 'Ngũ cung thứ thêm nốt "blue" (bậc 5 giáng), tạo màu sắc đặc trưng của blues, jazz và rock.',
    wiki: 'Blues_scale',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Blue note', 'https://en.wikipedia.org/wiki/Blue_note'],
      ['Cutting (2019), Empirical Musicology Review — Microtonal analysis of "blue notes" and the blues scale', 'https://www.osu.tests.sfulib4.publicknowledgeproject.org/index.php/EMR/article/view/6316'],
      ['University of Rochester — Unlocking the secrets of blue notes', 'https://www.rochester.edu/newscenter/unlocking-the-secrets-of-blue-notes-230482/'],
      ['Martin (2025), Music Theory Online — The evolution of improvisation in early jazz piano pedagogy', 'https://mtosmt.org/issues/mto.25.31.3/mto.25.31.3.martin.php'],
      ['Ethan Iverson / Asher Tobin Chodos — The history of the blues… scale?', 'https://ethaniverson.com/the-history-of-the-blues-scale-guest-post-by-asher-tobin-chodos/'],
    ],
    body: `
Âm giai blues là chất liệu giai điệu **lâu đời nhất, cơ bản nhất** được chơi trên blues. Dạng sáu nốt quen thuộc là [[am-giai-ngu-cung|ngũ cung thứ]] thêm **♭5**:

**1 – ♭3 – 4 – ♭5 – 5 – ♭7**

::keyboard C4 Eb4 F4 Gb4 G4 Bb4 | Âm giai blues trên C: C – E♭ – F – G♭ – G – B♭

Thuộc nó theo quãng: **quãng 3 thứ – cung – nửa cung – nửa cung – quãng 3 thứ – cung**. Hai quãng 3 thứ, ba nốt liền nhau cách nửa cung (F – F♯ – G): không âm giai phương Tây nào xếp như vậy.

::staff treble C4 Eb4 F4 F#4 G4 Bb4 C5 | Âm giai blues Đô viết với F♯ (nốt lướt đi lên); khi đi xuống thường viết G♭

## Chơi ở đâu?
Bạn chơi được âm giai blues không chỉ trên blues mà trên **bất kỳ bài nào**, và trên **bất kỳ hợp âm nào**. Nhưng chỗ nó hay được chơi nhất là trên hợp âm **7 át** và **m7**. Trên khung [[blues-12-nhip]] ở Đô, bạn có thể chơi âm giai blues Đô suốt mười hai ô, qua cả C7, F7 và G7: chỗ chỏi chính là chỗ "blues".

Thử ngay: tay trái C7 rồi F7, tay phải chạy âm giai blues Đô. Trên F7, nốt E♭ thành ♭7 của F7, B♭ thành 4, G♭ thành ♭9 — mọi thứ vẫn nghe "đúng blues".

## Nốt blue
Các nốt ♭3, ♭5, ♭7 gọi là **nốt blue**. Ca sĩ và tay guitar **uốn** chúng vào khoảng giữa hai [[ban-phim|phím đàn]]. Piano không uốn được, nên người chơi piano **gợi** bằng cách **láy nhanh** từ ♭3 lên 3 (E♭ → E), hoặc đánh hai phím liền nhau cùng lúc.

::staff treble Eb4 E4 G4 / Eb4+E4 C4 | Gợi nốt blue trên piano: láy E♭ lên E, rồi bấm cả hai phím cùng lúc

Âm giai blues và ngũ cung thứ dùng thay cho nhau được: khác nhau chỉ ở nốt ♭5 (xem [[ngu-cung-trong-jazz]]). Liên quan: [[dieu-thuc|Mixolydian]], [[dao-phach]].

## Nốt blue thực sự cao bao nhiêu?
- Nốt blue thường được mô tả là bậc 3, 5, 7 **hạ xuống** — nhưng mức hạ **không cố định**, thường từ khoảng **một [[vi-cung-va-am-nhac-vi-cung|phần tư cung]] đến [[cung-nua-cung|nửa cung]]**.
- Court Cutting (2019) đo [[cao-do|cao độ]] trong 15 bản thu blues kinh điển và tìm thấy ba "cụm" nốt blue, trong đó một cụm ở khoảng **319 [[cac-he-thong-chinh-am|cent]]** — **giữa** [[quang|quãng]] 3 thứ (300) và quãng 3 trưởng (400): một quãng 3 "trung tính". Có nhà nghiên cứu phản biện rằng nốt blue thường là **đường trượt** giữa hai cao độ chứ không đứng yên.
- Vì piano không có cao độ giữa hai phím, người chơi chỉ có thể **gợi** nốt blue — ví dụ [[nghe-si-piano-jazz|Thelonious Monk]] đánh **hai phím liền nhau cùng lúc**, hoặc láy nhanh từ ♭3 lên 3.

## Âm giai blues là sản phẩm của sách dạy
- Nguồn gốc nốt blue còn **tranh cãi**: Gerhard Kubik cho rằng chúng đến từ [[chuoi-boi-am|chuỗi bồi âm]] trong truyền thống châu Phi, không phải từ việc "hạ" các nốt bình quân.
- "Âm giai blues" như một **bài học** xuất hiện muộn: phương pháp piano của Vincent Lopez (1933–34) có lẽ là ấn phẩm đầu tiên nêu một âm giai blues. Trước khi jazz vào giảng đường (khoảng 1967), có **nhiều phiên bản** âm giai blues khác nhau; dạng 6 nốt quen thuộc được các nhà giáo dục jazz như [[am-giai-bebop|David Baker]] và Jamey Aebersold phổ biến.
- Có người phê phán [[am-giai|âm giai]] này **quá đơn giản**, không nắm được tinh thần của blues.

Ý nghĩa với người dạy: âm giai blues là **điểm khởi đầu** hữu ích để ngẫu hứng (xem [[ngau-hung-piano]]), nhưng nên cho học sinh **[[so-sanh-ban-thu|nghe nhiều bản thu]] blues** để hiểu nốt blue thật sự "uốn" thế nào.

## Câu hỏi và bài tập
1. Chơi âm giai blues ở 12 giọng theo vòng quãng 5, lên rồi xuống.
2. Ứng tác hai chorus blues ở Fa chỉ bằng âm giai blues Fa; mỗi câu kết ở một nốt khác.
3. Thử láy ♭3 → 3 trên mọi hợp âm I7 của một chorus.
`,
  },
  {
    slug: 'ii-v-i',
    title: 'ii – V – I',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['ii-V-I', 'II-V-I', '2-5-1', 'ii-V', 'tiến trình 2-5-1', 'ii-V thứ', 'chuỗi ii-V'],
    summary: 'Tiến trình nền tảng của jazz: hợp âm bậc 2 – bậc 5 – bậc 1 nối nhau theo quãng 5; nốt 3 và 7 của mỗi hợp âm tạo nên đường dẫn giọng nửa cung đặc trưng.',
    wiki: 'Ii–V–I_progression',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Open Music Theory 2e — ii–V–I', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.04%3A_iiVI'],
      ['Wikipedia — ii–V–I progression', 'https://en.wikipedia.org/wiki/Ii%E2%80%93V%E2%80%93I_progression'],
      ['Open Music Theory 2e — Substitutions (mode mixture in jazz)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
    ],
    body: `
Nếu chỉ được học một tiến trình trong jazz, hãy học tiến trình này. **ii – V – I** có mặt ở gần như mọi bài chuẩn, nhiều bài thì có ở mọi vài ô. Nó chính là [[cau-ket|kết chính]] của [[he-thong-hoa-am-co-dien|hoà âm cổ điển]] — tiền át, át, chủ (xem [[chuc-nang-hoa-am]]) — nhưng mỗi hợp âm đều là **[[hop-am-bay|hợp âm 7]]**.

::grand F4+A4+C5/D3=Dm7 F4+B4+D5/G2=G7 E4+G4+B4/C3=Cmaj7 | ii – V – I ở Đô trưởng: Dm7 – G7 – Cmaj7

Nhận ra nó bằng hai dấu hiệu: **nốt gốc đi theo quãng 5 xuống** (D → G → C), và **chuỗi loại hợp âm** m7 → 7 → maj7.

## Ba điệu thức, một âm giai
Dm7 đi với Rê **Dorian**, G7 đi với Sol **Mixolydian**, Cmaj7 đi với Đô **Ionian**. Nghe như ba âm giai phải nhớ? Không: cả ba đều là **phím trắng**, đều là **Đô trưởng**. Một âm giai mẹ phủ trọn ii – V – I.

::staff treble D4 E4 F4 G4 A4 B4 C5 D5 / G4 A4 B4 C5 D5 E5 F5 G5 / C4 D4 E4 F4 G4 A4 B4 C5 | Rê Dorian, Sol Mixolydian, Đô Ionian: cùng bảy nốt của Đô trưởng

Bài học lớn nhất ở đây: **nghĩ theo giọng, đừng nghĩ theo hợp âm**. Khi thấy Dm7 – G7, nghĩ "Đô trưởng", và cả hai ô mở ra trước mắt bạn.

## Giọng trưởng và giọng thứ
| Giọng | Tiến trình | Ví dụ |
|---|---|---|
| Trưởng | **ii7 – V7 – Imaj7** | Dm7 – G7 – Cmaj7 |
| Thứ | **iiø7 – V7(♭9) – i** (i7, i6, i(maj7)) | Dø7 – G7♭9 – Cm7 |

Trong [[am-giai-thu|giọng thứ]], ii là hợp âm **nửa giảm** và V thường có **♭9** — cả hai đến từ bậc 6 hạ (A♭ ở Đô thứ). Open Music Theory ghi nhận iiø7 và V7♭9 là hai hợp âm **mượn** phổ biến nhất trong jazz, kể cả khi bài ở giọng trưởng (xem [[hop-am-muon]]). Ở giọng thứ thì không có một âm giai nào phủ trọn ii – V – i: xem [[dieu-thuc-thu-giai-dieu]] và [[am-giai-hoa-thanh-va-am-giai-bon-not]].

::grand F4+Ab4+C5/D3=Dø7 F4+Ab4+B4/G2=G7♭9 Eb4+G4+Bb4/C3=Cm7 | ii – V – i ở Đô thứ

## Nốt dẫn hướng: chỗ hay nhất
Nốt **3** và **7** quyết định chất của hợp âm. Trong ii – V – I chúng nối với nhau theo một quy luật đẹp tới bất ngờ:
- Nốt **7** của hợp âm trước đi **xuống [[cung-nua-cung|nửa cung]]** thành nốt **3** của hợp âm sau.
- Nốt **3** của hợp âm trước **đứng yên** thành nốt **7** của hợp âm sau.

| | Dm7 | G7 | Cmaj7 |
|---|---|---|---|
| Đường 1 | C (7) | B (3) | B (7) |
| Đường 2 | F (3) | F (7) | E (3) |

::staff treble F4+C5 F4+B4 E4+B4 | Nốt dẫn hướng trong Dm7 – G7 – Cmaj7: mỗi bước chỉ một nốt đi xuống nửa cung

Chơi ba cặp nốt đó, không gì khác. Nghe ra cả tiến trình chưa? Hai nốt mà đủ "kể" ii – V – I. Đó là cùng nguyên tắc với [[dan-giong|dẫn giọng]] cổ điển: nốt 7 của hợp âm át giải quyết đi xuống. Chi tiết ở [[not-dan-huong]].

## Chuỗi ii – V và vòng quãng 5
Mỗi hợp âm đích có thể được "chuẩn bị" bằng một ii – V riêng (xem [[hop-am-at-phu]]). Nhiều bài chuẩn chỉ là một chuỗi ii – V nối nhau: "Autumn Leaves" xen kẽ ii – V – I ở giọng trưởng và giọng thứ song song; "Tune Up" (Miles Davis) đi qua ba giọng bằng ba ii – V – I, mỗi lần hạ một cung.

Hai điều Levine nhấn mạnh và bạn nên nhớ:
- ii – V thường xuất hiện **không có I** theo sau. Hãy coi **ii – V là một khối**, một đơn vị, như một từ hai âm tiết.
- Vì ii – V – I đi theo quãng 5, **[[vong-quang-nam|vòng quãng 5]]** là đường tập tự nhiên nhất: Dm7 – G7 – Cmaj7, rồi Cm7 – F7 – B♭maj7, rồi B♭m7 – E♭7 – A♭maj7… qua cả 12 giọng.

## Mẹo luyện tập
1. Chơi nốt dẫn hướng (tay trái) qua ii – V – I ở cả 12 giọng, theo vòng quãng 5.
2. Thêm nốt gốc ở bè trầm, rồi chuyển sang [[xep-hop-am|thế bấm không gốc]].
3. Làm lại với ii – V – i giọng thứ.
4. Đừng chỉ tập ở Đô, Fa, Sol. ii – V ở D♭, G♭, B có ở khắp nơi trong các bài chuẩn. **Tập mọi thứ ở mọi giọng.**

Mở rộng: [[turnaround-jazz]], [[phan-tich-tien-trinh-jazz]]. Lick trên ii – V – I: [[lick-va-trich-dan]]. Ngũ cung trên ii – V – I: [[ngu-cung-trong-jazz]].

## Câu hỏi và bài tập
1. Viết ii – V – I ở B♭, E♭, A; tô màu nốt dẫn hướng.
2. Viết ii – V – i ở Rê thứ và Sol thứ.
3. Chơi ii – V – I qua 12 giọng theo vòng quãng 5 chỉ bằng hai nốt dẫn hướng, không nhìn giấy.
`,
  },  {
    slug: 'turnaround-jazz',
    title: 'Turnaround và turnaround Tadd Dameron',
    category: 'jazz',
    aliases: ['turnaround', 'vòng quay lại', 'I-vi-ii-V', 'Tadd Dameron turnaround', 'Lady Bird turnaround', 'turnaround jazz'],
    summary: 'Turnaround là tiến trình ngắn (thường 1–2 ô) ở cuối một đoạn để quay lại đầu bài, hướng về hợp âm V7. Bài đi từ I – vi – ii – V qua các biến thể bằng át phụ và thay thế tritone đến turnaround Tadd Dameron trong "Lady Bird": Cmaj7 – E♭7 – A♭maj7 – D♭7.',
    wiki: 'Turnaround_(music)',
    refs: [
      ['Wikipedia — Turnaround (music)', 'https://en.wikipedia.org/wiki/Turnaround_(music)'],
      ['Wikipedia — Tadd Dameron turnaround', 'https://en.wikipedia.org/wiki/Tadd_Dameron_turnaround'],
      ['Wikipedia — Lady Bird (composition)', 'https://en.wikipedia.org/wiki/Lady_Bird_(composition)'],
      ['Hutchinson — Music Theory for the 21st-Century Classroom, 31.8 Standard Chord Progressions (LibreTexts)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/31%3A_Introduction_to_Jazz_Theory/31.08%3A_Standard_Chord_Progressions'],
    ],
    body: `
Đoạn A của bài sắp hết. Hai ô cuối đáng lẽ là I đứng yên — nhưng nếu bạn sắp nhắc lại đoạn A, đứng yên thì chán, và tay bass cũng chẳng biết nên đi đâu. Đó là chỗ của **turnaround**: một [[vong-hop-am|vòng hợp âm]] ngắn, thường 1 – 2 ô, đặt ở **cuối một đoạn** để "quay" người nghe trở lại đầu bài. Nó luôn hướng tới hợp âm **V7** (hoặc hợp âm thay cho V7) để kéo về I ở đầu đoạn sau. Ở lần kết cuối cùng, bạn bỏ turnaround và dừng ở I.

Turnaround có ở cuối [[blues-12-nhip|blues 12 ô]] và cuối mỗi đoạn A của [[hinh-thuc-ca-khuc-32|khuôn AABA]]. Khi bạn đệm, nó là một trong những chỗ được phép "sáng tạo" nhiều nhất.

## Từ I – vi – ii – V đến các biến thể
| Dạng | Ở Đô trưởng | Cách biến đổi |
|---|---|---|
| I – vi – ii – V | Cmaj7 – Am7 – Dm7 – G7 | Dạng gốc |
| I – VI7 – ii – V | Cmaj7 – A7 – Dm7 – G7 | vi thành [[hop-am-at-phu|át phụ]] của ii |
| iii – VI7 – ii – V | Em7 – A7 – Dm7 – G7 | I thay bằng iii ([[thay-the-hop-am|cùng chức năng]]) |
| I – ♭III°7 – ii – V | Cmaj7 – E♭°7 – Dm7 – G7 | [[hop-am-luot-jazz|Hợp âm 7 giảm lướt]] |
| I – VI7 – II7 – V7 | Cmaj7 – A7 – D7 – G7 | Mọi hợp âm sau I đều là át |
| (chuỗi át, thay tritone xen kẽ) | E7 – E♭7 – D7 – D♭7 | [[thay-the-tritone|Thay thế tritone]]: bè trầm đi xuống cromatic |

::staff treble C4+E4+G4+B4=Cmaj7 A3+C#4+E4+G4=A7 D4+F4+A4+C5=Dm7 G3+B3+D4+F4=G7 | I – VI7 – ii – V7 ở Đô trưởng

Đọc bảng từ trên xuống, bạn sẽ thấy một logic: mỗi dòng đổi **một** thứ so với dòng trên. Đó cũng là cách học chúng: tập dòng 1 tới khi chán, rồi đổi một hợp âm.

## Turnaround Tadd Dameron
Theo Wikipedia, turnaround mang tên **Tadd Dameron** đi từ I – vi – ii – V qua ba bước:
1. Biến các hợp âm thứ thành **át phụ**: C – A7 – D7 – G7.
2. Thay mỗi hợp âm át bằng **hợp âm thay thế tritone**: C – E♭7 – A♭7 – D♭7.
3. Tuỳ chọn, biến một số hợp âm át thành **maj7**.

Dạng trong **"Lady Bird"** (Dameron; viết khoảng 1939, thu âm 1948) là **Cmaj7 – E♭7 – A♭maj7 – D♭7** rồi về Cmaj7.

::staff treble C4+E4+G4+B4=Cmaj7 Eb4+G4+Bb4+Db5=E♭7 Ab3+C4+Eb4+G4=A♭maj7 Db4+F4+Ab4+Cb5=D♭7 C4+E4+G4+B4=Cmaj7 | Turnaround Tadd Dameron: bè trầm C – E♭ – A♭ – D♭ – C

Nghe kỹ **bè trầm**: E♭ – A♭ – D♭ – C là quãng 5 đi xuống rồi nửa cung — vẫn là "logic" của [[vong-quang-nam|vòng quãng 5]] dù màu sắc đã rất xa nhà.

## Mẹo luyện tập
- Chơi từng dạng trong bảng ở cả 12 giọng, dùng [[xep-hop-am|thế bấm không gốc]] để nối mượt.
- Khi đệm, **đổi turnaround tự do** ở cuối mỗi đoạn: lần này I – VI7 – ii – V, lần sau Tadd Dameron. Đó là [[tai-hoa-am|tái hoà âm]] ngay trong lúc chơi. Chỉ cần nhớ: người solo cũng phải nghe được bạn đang đi đâu.
- [[ngau-hung-piano|Ngẫu hứng]]: nhắm [[not-dan-huong|nốt dẫn hướng]] (3 và 7) của từng hợp âm trong turnaround.
- Một turnaround cũng là một đoạn dạo đầu và một đoạn kết rất tiện: xem [[head-dao-dau-va-ket]].

## Câu hỏi và bài tập
1. Viết sáu dạng turnaround trong bảng ở Fa trưởng.
2. Chơi turnaround Tadd Dameron ở B♭ và E♭.
3. Đệm một chorus blues ở Đô; hai ô cuối mỗi lần dùng một turnaround khác.
`,
  },
  {
    slug: 'line-cliche',
    title: 'Line cliché',
    category: 'jazz',
    aliases: ['line cliché', 'line cliche', 'đường bè nửa cung trên một hợp âm', 'Cm Cm(maj7) Cm7 Cm6', 'My Funny Valentine'],
    summary: 'Line cliché là một đường bè đi liền bậc (thường từng nửa cung) bên trong một hợp âm đứng yên, tạo chuyển động cho hoà âm tĩnh: Cm – Cm(maj7) – Cm7 – Cm6 (nốt C đi xuống C – B – B♭ – A) hay C – C+ – C6 – C7 (nốt 5 đi lên). Ví dụ kinh điển: "My Funny Valentine".',
    refs: [
      ['jazzguitar.be — 10 ways to play My Funny Valentine chord changes', 'https://www.jazzguitar.be/blog/10-ways-to-play-my-funny-valentine-chord-changes/'],
      ['Songtive — What are line clichés', 'https://www.songtive.com/blog/what-are-line-cliches-in-music-and-how-do-you-use-them/'],
    ],
    body: `
Có những chỗ trong bài mà một hợp âm đứng yên cả hai, bốn ô. Đứng yên thì yên thật, nhưng cũng dễ buồn ngủ. **Line cliché** là cách cho chỗ đó chuyển động mà không đổi hợp âm: một **đường bè đi liền bậc** — thường từng [[cung-nua-cung|nửa cung]], đôi khi một cung — chạy **trên một hợp âm đứng yên**. Đường bè có thể nằm ở nốt gốc, nốt 5 hay nốt 7; đi lên, đi xuống hay đổi hướng. Hay gặp nhất trên **hợp âm thứ**.

## Hai dạng chuẩn
Chơi hai dòng dưới đây. Để ý: chỉ **một** nốt chuyển động, mọi nốt còn lại đứng yên.

::staff treble C4+Eb4+G4+C5=Cm C4+Eb4+G4+B4=Cm(maj7) C4+Eb4+G4+Bb4=Cm7 C4+Eb4+G4+A4=Cm6 | Dạng thứ: nốt C đi xuống C – B – B♭ – A trong khi C – E♭ – G đứng yên
::staff treble C4+E4+G4=C C4+E4+G#4=C+ C4+E4+A4=C6 C4+E4+Bb4=C7 | Dạng trưởng: nốt 5 đi lên G – G♯ – A – B♭ (ký hiệu: C, C♯5, C6, C7)

Trên lead sheet, bạn sẽ thấy bốn tên hợp âm khác nhau. Nhưng thật ra đó chỉ là **cùng một hợp âm** với một [[not-ngoai-hop-am|nốt lướt]] chậm. Hiểu như vậy, bạn sẽ không còn sợ một ô có bốn hợp âm: đó chỉ là một hợp âm và một đường bè. Line cliché là cầu nối giữa [[dan-giong|dẫn giọng]] cổ điển và ký hiệu hợp âm jazz ([[ky-hieu-hop-am]]).

## Nghe ở đâu
- **"My Funny Valentine"** (Rodgers & Hart): mở đầu bằng Cm – Cm(maj7) – Cm7 – Cm6 — ví dụ kinh điển nhất.
- "In Walked Bud" ([[thelonious-monk|Monk]]) và "Blue Skies" (Irving Berlin).
- Ngoài jazz: "Stairway to Heaven" (Led Zeppelin) dùng một đường bè thứ đi xuống tương tự.

## Dùng để tái hoà âm
Khi một hợp âm kéo dài quá lâu (ví dụ những ô Dm6 của "Summertime"), hoặc một cặp ii – V lặp đi lặp lại ("Satin Doll"), hãy thử chèn một line cliché. Bạn có ngay chuyển động mà giai điệu không bị đụng (xem [[tai-hoa-am]]).

Line cliché cũng nằm được ở **bè trầm**: chuỗi C – C/B – C/B♭ – A7 là một line cliché trong bass (xem [[hop-am-gach-cheo]]). Và đường bass đi xuống dưới một giai điệu đứng yên là bước đầu của [[tai-hoa-am-nang-cao|tái hoà âm bằng đường bass]].

## Câu hỏi và bài tập
1. Chơi dạng thứ trên Dm, Gm, Am; dạng trưởng trên F và B♭.
2. Chơi line cliché bè trầm C – C/B – C/B♭ – A7 – Dm.
3. Tìm một chỗ hợp âm đứng yên hai ô trở lên trong một bài bạn biết; chèn một line cliché.
`,
  },
  {
    slug: 'phan-tich-tien-trinh-jazz',
    title: 'Phân tích một tiến trình jazz',
    category: 'jazz',
    aliases: ['phân tích hoà âm jazz', 'jazz harmonic analysis', 'phân tích lead sheet', 'trung tâm giọng tạm', 'ii-V bracket', 'chord mapping'],
    summary: 'Cách đọc một chuỗi hợp âm jazz trên lead sheet: tìm giọng chính và các kết, ghi số La Mã, quy về chức năng, rồi tách các "giọng tạm" — mỗi cặp ii – V là một mũi tên chỉ về chủ âm tạm. Ví dụ phân tích vòng "Autumn Leaves".',
    refs: [
      ['Medium (Jazz Theory) — Harmonic analysis symbols', 'https://medium.com/jazz-theory/harmonic-analysis-symbols-aa235bfc6ded'],
    ],
    body: `
Nhìn lead sheet một bài chuẩn lần đầu, bạn thấy ba bốn chục hợp âm. Nhìn lại sau khi phân tích, bạn thấy năm sáu "giọng tạm" và vài cặp ii – V. Đó là toàn bộ mục đích của bài này: biến một rừng ký hiệu thành một tấm bản đồ ít đường.

Phân tích hoà âm cổ điển làm trên bản nhạc đầy đủ ([[phan-tich-hoa-am]]); phân tích jazz thường làm trên **[[he-so-nashville-va-lead-sheet|lead sheet]]** — chỉ có giai điệu và ký hiệu hợp âm ([[ky-hieu-hop-am]]). Mục tiêu rất thực tế: biết **mỗi đoạn đang ở giọng nào** để chọn âm giai, thế bấm và chỗ [[tai-hoa-am|tái hoà âm]].

## Hợp âm đổi nhanh, giọng đổi chậm
Đây là điều quan trọng nhất của cả bài. Lấy "Giant Steps": 16 ô, 26 hợp âm — nghe đã thấy mệt. Nhưng giọng chỉ đổi 10 lần, và chỉ đi qua **ba** giọng (B, G, E♭). Đếm hợp âm thì sợ; đếm giọng thì thở được (xem [[phan-tich-giant-steps]]). Với mọi bài, hãy hỏi: **những hợp âm này cùng thuộc giọng nào?**

## Các bước
1. **Tìm giọng chính**: [[hoa-bieu|hoá biểu]], các [[cau-ket|kết]] ở cuối câu (ii – V – I, V – I), hợp âm cuối bài.
2. **Ghi số La Mã** cho mọi hợp âm so với giọng chính ([[chuc-nang-hoa-am]]).
3. **Quy về chức năng**: chủ (T), tiền át (PD), át (D) — trật tự thường gặp là PD → D → T.
4. **Phân biệt chuyển giọng và [[bac-am-giai|chủ âm]] hoá**: một câu trở lên ở giọng mới → [[chuyen-giong|chuyển giọng]]; một ô hoặc ít hơn → [[hop-am-at-phu|chủ âm hoá]]. Trước khi kết luận chuyển giọng, thử giải thích bằng át phụ, [[hop-am-muon|hợp âm mượn]], [[thay-the-hop-am|thay thế]] hay [[hop-am-luot-jazz|hợp âm lướt]].
5. **Phân tích cả đoạn**; một tiến trình có thể có nhiều cách hiểu đều hợp lý.
Giới hạn: cách này dành cho hoà âm **có chức năng**; với [[constant-structures]], [[jazz-dieu-thuc|jazz điệu thức]] hay [[post-bop-free-jazz|free jazz]] cần cách nhìn khác.

## Ký hiệu ngoặc và mũi tên
Nhiều giáo trình jazz (thường gắn với Berklee) đánh dấu: **ngoặc liền** dưới cặp ii – V; **ngoặc đứt** dưới ii – subV7 (ii – [[thay-the-tritone|thay thế tritone]]); **mũi tên liền** cho V7 giải quyết xuống quãng 5; **mũi tên đứt** cho subV7 giải quyết xuống nửa cung. Các quy ước này không thống nhất tuyệt đối giữa các sách.

## Ví dụ: vòng "Autumn Leaves" (Sol thứ)
| Hợp âm | Cm7 | F7 | B♭[[hop-am-bay|maj7]] | E♭maj7 | Am7♭5 | D7 | Gm6 |
|---|---|---|---|---|---|---|---|
| Trong Si giáng trưởng | ii | V | **I** | IV | | | |
| Trong Sol thứ | iv | ♭VII | III | VI | **iiø** | **V** | **i** |
Đoạn đầu là một [[ii-v-i]] **trưởng** về B♭ (giọng [[giong-song-song|song song]]), tiếp ngay một ii – V – i **thứ** về Gm. E♭maj7 là chiếc cầu nối hai giọng — chung cho cả hai. Nốt gốc đi theo [[vong-quang-nam|vòng quãng 5]] suốt chuỗi.
::form Cm7 F7 B♭maj7 E♭maj7 Am7♭5 D7 Gm6 | Hai "giọng tạm" nối nhau: ii – V – I về B♭ trưởng, rồi ii – V – i về Sol thứ

## Bản đồ hợp âm (chord mapping)
Bước tiếp theo cho người [[ngau-hung-piano|ngẫu hứng]]: với mỗi giọng tạm, tìm **một âm giai nền** dùng được cho cả nhóm hợp âm (ví dụ B♭ trưởng cho Cm7 – F7 – B♭maj7 – E♭maj7), rồi chỉ đổi âm giai ở chỗ thật sự đổi giọng — xem [[ngau-hung-doc-ngang]].

## Câu hỏi và bài tập
1. Phân tích tám ô đầu "Autumn Leaves" như trong bảng, rồi tám ô tiếp theo.
2. Lấy lead sheet một bài chuẩn; vẽ ngoặc dưới mọi cặp ii – V và ghi giọng tạm của từng cặp.
3. Đếm số hợp âm và số giọng tạm của bài đó. Tỉ lệ là bao nhiêu?
`,
  },

  {
    slug: 'he-thong-hop-am-am-giai',
    title: 'Hệ thống hợp âm – âm giai',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['chord-scale', 'chord scale theory', 'âm giai cho hợp âm', 'thứ giai điệu jazz', 'Lydian Chromatic Concept', 'George Russell'],
    summary: 'Cách nghĩ của jazz: mỗi hợp âm đi kèm một âm giai (thường là một điệu thức) để ngẫu hứng và chọn nốt mở rộng.',
    wiki: 'Chord-scale_system',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Chord-scale system', 'https://en.wikipedia.org/wiki/Chord-scale_system'],
      ['Wikipedia — Lydian Chromatic Concept of Tonal Organization', 'https://en.wikipedia.org/wiki/Lydian_Chromatic_Concept_of_Tonal_Organization'],
      ['Hilobrow — George Russell', 'https://www.hilobrow.com/2015/06/23/george-russell/'],
      ['University of Colorado thesis — The Lydian Chromatic Concept and chord-scale theory', 'https://scholar.colorado.edu/downloads/bk128c27z'],
    ],
    body: `
## Vì sao lại là âm giai?
Một hợp âm 7 có bốn nốt. Nếu khi solo bạn chỉ chơi bốn nốt đó, bạn sẽ nghe như đang rải hợp âm mãi — đúng, nhưng chật. Âm giai cho bạn **bảy** nốt cùng lúc: bốn nốt của hợp âm, cộng ba [[hop-am-mo-rong|nốt mở rộng]] 9, 11, 13. Nói cách khác, mỗi [[hop-am-bay|hợp âm 7]] được "phủ" bằng một [[am-giai|âm giai]] bảy nốt, và âm giai đó cho bạn biết **nốt nào nghe hay** trên hợp âm.

Hãy nhớ ngay từ đầu: âm giai không phải là thứ để chạy lên chạy xuống. Nó là một **bể nốt** để bạn nhúng tay vào lấy. Cách biến bể nốt thành nhạc nằm ở [[luyen-am-giai-jazz]] và [[tu-am-giai-den-am-nhac]].

## Trong ii – V – I ở Đô trưởng
| Hợp âm | Âm giai | Ghi chú |
|---|---|---|
| Dm7 | D Dorian | Phím trắng từ D (xem [[dieu-thuc]]) |
| G7 | G Mixolydian | Phím trắng từ G |
| Cmaj7 | C Ionian hoặc C Lydian | F là **nốt tránh** trên Cmaj7; Lydian (F♯) tránh được điều đó |

::staff treble D4 E4 F4 G4 A4 B4 C5 D5 | D Dorian cho Dm7: các phím trắng từ D
::staff treble G4 A4 B4 C5 D5 E5 F5 G5 | G Mixolydian cho G7: các phím trắng từ G
::staff treble C4 D4 E4 F#4 G4 A4 B4 C5 | C Lydian cho Cmaj7: F♯ thay cho nốt tránh F

Để ý: ba âm giai đầu là **cùng một bảy nốt**. Bạn không phải nhớ ba thứ; bạn nhớ một giọng.

## Piano là cây đàn có mã màu
Levine có một nhận xét rất hay cho dân piano: bàn phím **có mã màu sẵn**. Mọi hợp âm của Đô trưởng — Cmaj7, Dm7, Em7, Fmaj7, G7, Am7, Bø — đều là **phím trắng**. Nhìn tay mình trên phím, bạn thấy ngay hình dạng của giọng. Ở giọng khác, hình dạng phím trắng – đen đổi, nhưng nguyên tắc vẫn vậy: thuộc **hình dạng của giọng** trên bàn phím, rồi mọi hợp âm trong giọng nằm sẵn trong hình dạng đó.

## Âm giai cho hợp âm 7 át
Hợp âm 7 át có nhiều lựa chọn nhất (Mixolydian, Lydian át, giảm nửa cung – cung, altered…) tuỳ nốt căng và hướng giải quyết — bảng đầy đủ ở [[hop-am-at-bien-hoa]]. Hợp âm sus có âm giai riêng: [[hop-am-sus-jazz]].

## Bảng tổng hợp: những hợp âm thường gặp
| Hợp âm | Âm giai thường dùng | Nốt căng có sẵn |
|---|---|---|
| maj7 | Ionian, Lydian | 9, ♯11, 13 |
| m7 (ii) | Dorian | 9, 11, 13 |
| m7 (iii) | Phrygian | 11 |
| 7 | Mixolydian và các âm giai át khác | 9, 13 (và các biến hoá) |
| sus | Mixolydian (4 không còn là nốt tránh) | 9, 13 |
| m7♭5 | Locrian, Locrian ♮2 | 11, ♭13 (và 9 với Locrian ♮2) |
| °7 | Giảm cung – nửa cung ([[am-giai-bat-cung]]) | Các nốt cách mỗi nốt hợp âm một cung |
| m(maj7) | [[dieu-thuc-thu-giai-dieu|Thứ giai điệu]] | 9, 11, 13 |

Bốn "họ" âm giai sinh ra gần như mọi hợp âm jazz: **trưởng**, **thứ giai điệu**, **giảm** và **toàn cung**. Khi gặp một hợp âm, câu hỏi đầu tiên luôn là: nó thuộc họ nào?

## Nốt tránh
Nốt nằm [[cung-nua-cung|nửa cung]] trên một nốt hợp âm (F trên Cmaj7, chỏi với E; C trên G7, chỏi với B) gọi là **nốt tránh**. "Tránh" không có nghĩa là "cấm": bạn lướt qua nó thoải mái, chỉ đừng ngân dài lên nó trên hợp âm. Chi tiết ở [[not-tranh-va-quang-nghich]].

## Lịch sử
- **George Russell** tự xuất bản *Lydian Chromatic Concept of Tonal Organization* năm **1953** — lý thuyết đầu tiên đặt quan hệ **dọc** giữa hợp âm và âm giai làm trung tâm, thường được gọi là lý thuyết gốc duy nhất sinh ra từ jazz. Russell lấy **Lydian**, chứ không phải Ionian, làm âm giai tham chiếu, vì Lydian được dựng từ các [[quang|quãng]] 5 chồng lên nhau tính từ nốt gốc.
- Theo các tài liệu tiểu sử, [[bill-evans|Bill Evans]] đưa các ý tưởng này đến ban nhạc của Miles Davis, góp phần vào phong cách **[[jazz-dieu-thuc|jazz điệu thức]]** của album *Kind of Blue* (1959) — xem [[hoa-am-dieu-thuc]].
- Hệ thống hợp âm – âm giai sau đó trở thành nền tảng của **giáo dục jazz** ở các trường đại học.

## Giới hạn của cách nghĩ này
Một âm giai cho mỗi hợp âm là **điểm xuất phát**, không phải luật. Giai điệu jazz hay vẫn đến từ [[dan-giong|dẫn giọng]] giữa các hợp âm — đặc biệt [[not-dan-huong|nốt dẫn hướng]] 3 và 7 — và từ [[not-ngoai-hop-am|nốt lướt]] [[am-giai-cromatic|cromatic]]. Lúc mới học, hãy hiểu mỗi ký hiệu theo đúng một âm giai; khi đã thạo, bạn sẽ tự do diễn giải.

Các âm giai này cũng là "bảng màu" cho [[xep-hop-am]] và [[tai-hoa-am]]. Âm giai bổ sung: [[dieu-thuc-thu-giai-dieu]], [[am-giai-bebop]], [[am-giai-doi-xung-jazz]], [[ngu-cung-trong-jazz]].

## Câu hỏi và bài tập
1. Viết âm giai cho ii – V – I ở B♭ và E♭; kiểm xem ba âm giai có cùng bảy nốt không.
2. Bấm bảy hợp âm 7 của Rê trưởng; nhìn hình dạng phím trắng – đen của giọng.
3. Trên Fmaj7, chơi F Ionian rồi F Lydian; ngân nốt B♭ rồi B. Cái nào nghe hợp hơn?
`,
  },  {
    slug: 'dieu-thuc-thu-giai-dieu',
    title: 'Các điệu thức của âm giai thứ giai điệu',
    category: 'jazz',
    aliases: ['melodic minor modes', 'jazz minor', 'điệu thức thứ giai điệu', 'Lydian augmented', 'Locrian natural 2', 'Mixolydian b6', 'Dorian b2', 'mMaj7'],
    summary: 'Trong jazz, âm giai thứ giai điệu dùng một dạng cho cả đi lên lẫn đi xuống ("jazz minor"); bảy điệu thức của nó cho bảy loại hợp âm: mMaj7, sus♭9, maj7♯5, 7♯11, 7♭13, m7♭5 và 7alt.',
    wiki: 'Jazz_minor_scale',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Jazz minor scale', 'https://en.wikipedia.org/wiki/Jazz_minor_scale'],
      ['Wikipedia — Altered scale', 'https://en.wikipedia.org/wiki/Altered_scale'],
      ['jazzguitar.be — Melodic minor modes', 'https://www.jazzguitar.be/blog/melodic-minor-modes/'],
    ],
    body: `
Trong nhạc cổ điển, [[am-giai-thu|âm giai thứ giai điệu]] đi lên có bậc 6 và 7 nâng, đi xuống thì trở về thứ tự nhiên. Jazz thì đơn giản hơn: dùng **dạng đi lên cho cả hai chiều**, và gọi nó là **"jazz minor"**. Dễ nhớ nhất: nó là **âm giai trưởng hạ bậc 3**.

::staff treble C4 D4 Eb4 F4 G4 A4 B4 C5 | Đô thứ giai điệu (jazz minor): như Đô trưởng nhưng E♭

Cũng như âm giai trưởng sinh ra bảy [[dieu-thuc|điệu thức]], mỗi bậc của thứ giai điệu sinh ra một điệu thức và một loại hợp âm. Và đây là chỗ hấp dẫn: những hợp âm "lạ" nhất, giàu màu nhất của jazz — alt, ♯11, ø, sus♭9, maj7♯5 — **đều sống trong âm giai này**.

## Bảy điệu thức (trong Đô thứ giai điệu)
| Bậc | Nốt bắt đầu | Tên | Hợp âm |
|---|---|---|---|
| 1 | C | Thứ giai điệu (jazz minor) | CmMaj7, Cm6 |
| 2 | D | Dorian ♭2 (Phrygian ♮6) | Dsus♭9 |
| 3 | E♭ | Lydian tăng | E♭[[hop-am-bay|maj7]]♯5 |
| 4 | F | **Lydian át** (Lydian ♭7) | F7♯11 |
| 5 | G | Mixolydian ♭6 (Aeolian át) | G7♭13 (ít dùng) |
| 6 | A | Locrian ♮2 | Am7♭5 |
| 7 | B | **Altered** (Super Locrian) | B7alt (♭9, ♯9, ♭5/♯11, ♯5/♭13) |
Hai điệu thức hay dùng nhất là **Lydian át** (át không giải quyết, [[thay-the-tritone|thay thế tritone]]) và **altered** (át giải quyết về chủ) — chi tiết ở [[hop-am-at-bien-hoa]]. **Locrian ♮2** là lựa chọn phổ biến cho hợp âm nửa giảm (ii trong [[ii-v-i|ii – V – i thứ]]).

::staff treble B3 C4 D4 Eb4 F4 G4 A4 B4 | Điệu thức 7 (altered) trên B: ♭9 (C), ♯9 (D), 3 (E♭ = D♯), ♭5 (F), ♯5 (G), ♭7 (A) — mọi nốt căng của át đều biến hoá

## Các hợp âm thứ giai điệu thay nhau được
Một điều Levine nhấn mạnh, và nó sẽ đổi cách bạn chơi: trong âm giai thứ giai điệu **không có nốt tránh**. Mọi nốt đều nghe ổn trên mọi hợp âm của nó. Hệ quả: **các hợp âm cùng một âm giai thứ giai điệu thay cho nhau được**. Cm(maj7), Dsus♭9, E♭maj7♯5, F7♯11, Aø, B7alt — sáu cái tên, một bể nốt. Một thế bấm, một lick, một câu bạn chơi trên F7♯11 cũng chơi được trên B7alt hay Aø.

::grand Eb4+G4+B4+D5/C3=Cm(maj7) Eb4+G4+B4+D5/F2+A3=F7♯11 Eb4+G4+B4+D5/B2+A3=B7alt | Cùng một thế bấm tay phải (E♭ – G – B – D) trên Cm(maj7), F7♯11 và B7alt: chỉ có bass đổi

Bạn có thể đang nghĩ "B7alt", nhưng ở tầng sâu hơn bạn đang chơi **Đô thứ giai điệu**. Nhớ: **nghĩ theo giọng, đừng nghĩ theo hợp âm.**

## Mẹo nhớ
- Altered trên một nốt = thứ giai điệu bắt đầu **nửa cung cao hơn** (B altered = Đô thứ giai điệu).
- Lydian át trên một nốt = thứ giai điệu bắt đầu **một quãng 5 cao hơn** (F Lydian át = Đô thứ giai điệu).
- Nửa giảm trên một nốt = thứ giai điệu bắt đầu **quãng 3 thứ cao hơn** (Aø = Đô thứ giai điệu).
- Trong **ii – V – i ở Đô thứ**: Dø dùng Fa thứ giai điệu, G7alt dùng La giáng thứ giai điệu — hai âm giai mẹ khác nhau, cách nhau một quãng 3 thứ. Vì thế câu nào bạn chơi trên Dø, dịch lên quãng 3 thứ là chơi được trên G7alt (xem [[tu-am-giai-den-am-nhac]]).

## Mẹo luyện tập
Thuộc số điệu thức tới mức phản xạ: m(maj7) là I, sus♭9 là II, maj7♯5 là III, át ♯11 là IV, ø là VI, alt là VII. Rồi tập đọc nhanh: "E7alt thuộc âm giai nào?" — "Fa thứ giai điệu." Lúc đầu mười giây, sau một giây. Tập được cả khi không có đàn.

Liên quan: [[he-thong-hop-am-am-giai]], [[am-giai-bebop]], [[am-giai-doi-xung-jazz]]. Ngũ cung trên hợp âm thứ giai điệu: [[ngu-cung-trong-jazz]].

## Câu hỏi và bài tập
1. Viết sáu hợp âm dùng được của Fa thứ giai điệu (bỏ bậc 5).
2. A♭7alt, D7♯11, F♯ø thuộc âm giai thứ giai điệu nào?
3. Chơi một thế bấm tay phải của Rê thứ giai điệu trên ba nốt bass khác nhau.
`,
  },
  {
    slug: 'am-giai-bebop',
    title: 'Âm giai bebop',
    category: 'jazz',
    aliases: ['bebop scale', 'âm giai bebop', 'dominant bebop', 'bebop át', 'major bebop', 'David Baker', 'Barry Harris', 'sixth diminished'],
    summary: 'Âm giai bebop là âm giai bảy nốt thêm một nốt lướt cromatic thành tám nốt, để khi chạy móc đơn trong ô 4/4 các nốt hợp âm rơi vào phách mạnh. Thuật ngữ do David Baker đặt, dựa trên lối chơi của Charlie Parker và Dizzy Gillespie; Barry Harris dạy cùng ý tưởng dưới tên "sixth diminished".',
    wiki: 'Bebop_scale',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Bebop scale', 'https://en.wikipedia.org/wiki/Bebop_scale'],
      ['Learn Jazz Standards — How to use bebop scales', 'https://www.learnjazzstandards.com/blog/learning-jazz/jazz-theory/use-bebop-scales-like-pro/'],
    ],
    body: `
## Vấn đề: âm giai "không ra đúng phách"
Chạy Sol Mixolydian đi xuống bằng móc đơn trên G7, bắt đầu từ G ở phách 1. Đến phách 3 bạn đang ở nốt D — ổn. Nhưng hết ô, bạn đang ở A, và sang ô sau nốt gốc G rơi vào "và" của phách, không phải phách 1. Âm giai bảy nốt có **lẻ** nốt, trong khi một ô 4/4 có **tám** móc đơn. Kết quả: các [[hop-am-bay|nốt hợp âm]] lúc rơi vào phách, lúc rơi giữa phách, và câu nhạc nghe "lệch".

Dân bebop giải quyết rất gọn: thêm **một [[not-ngoai-hop-am|nốt lướt]] [[am-giai-cromatic|cromatic]]** cho đủ **tám nốt**. Chạy **đi xuống** từ một nốt hợp âm ở đầu phách, mọi nốt hợp âm sẽ rơi đúng **phách**, nốt lướt rơi vào "và".

::staff treble C5=1 B4=& Bb4=2 A4=& G4=3 F4=& E4=4 D4=& | Bebop át trên C7, đi xuống từ C: các nốt hợp âm C – B♭ – G – E rơi đúng bốn phách (B là nốt lướt)

Thuật ngữ "bebop scale" do nhà giáo dục **David Baker** đặt, rút ra từ lối chơi của Charlie Parker và Dizzy Gillespie; **Barry Harris** dạy cùng ý tưởng với tên "major sixth diminished" (C6 + D°7).

## Bốn dạng
| Dạng | Cách tạo | Trên C | Dùng cho |
|---|---|---|---|
| **Bebop át** | [[dieu-thuc|Mixolydian]] + 7 trưởng | C D E F G A B♭ **B** | C7 |
| **[[phong-cach-jazz|Bebop]] trưởng** | Trưởng + ♯5/♭6 | C D E F G **G♯** A B | C6, Cmaj7 |
| **Bebop Dorian** | Dorian + 3 trưởng | C D E♭ **E** F G A B♭ | Cm7 |
| **Bebop [[am-giai-thu|thứ giai điệu]]** | Thứ giai điệu + nốt giữa 5 và 6 | C D E♭ F G **G♯** A B | Cm6 |
(Định nghĩa dạng Dorian khác nhau giữa các nguồn; có nguồn thêm 7 trưởng thay vì 3 trưởng.)

::staff treble C5=1 B4=& Bb4=2 A4=& G4=3 F4=& E4=4 D4=& | Bebop át trên C7, đi xuống từ C: các nốt hợp âm C – B♭ – G – E rơi đúng bốn phách (B là nốt lướt)
::staff treble C4 D4 E4 F4 G4 G#4 A4 B4 | Bebop trưởng trên C: nốt lướt G♯ giữa 5 và 6

::staff treble C4 D4 E4 F4 G4 G#4 A4 B4 | Bebop trưởng trên C: nốt lướt G♯ giữa 5 và 6

## Dùng bebop át cho cả ii – V
Vì Dm7 và G7 cùng thuộc Đô trưởng, nhiều người chơi coi **cả hai ô ii – V là một hợp âm G7** và chạy **Sol bebop át** suốt hai ô. Một âm giai, hai hợp âm, và mọi nốt hợp âm của G7 (cũng là 11, 13, 9… của Dm7) rơi đúng phách.

## Khi nốt đầu phách không phải nốt hợp âm
Luật "nốt hợp âm ở phách" chỉ tự động đúng khi bạn **bắt đầu ở một nốt hợp âm trên phách**. Nếu câu bắt đầu ở nốt không thuộc hợp âm (chẳng hạn A trên C7 ở phách 1), bạn sẽ bị lệch nửa phách. Cách sửa của dân bebop: chèn thêm một nốt lướt cromatic nữa, hoặc nhảy một quãng, để đưa câu trở lại đúng "luật". Tai bạn sẽ học được điều này nhanh hơn mọi quy tắc: nghe một câu Charlie Parker và để ý nốt nào rơi vào phách.

## Mẹo luyện tập
- Chạy âm giai **đi xuống** từ gốc, 3, 5, 7 của hợp âm, móc đơn [[swing]], kiểm tra nốt hợp âm rơi vào phách.
- Bắt đầu ở mọi nốt hợp âm, đổi chiều ở mọi chỗ.
- Kết hợp với [[not-tiep-can-jazz|nốt tiếp cận và bao vây]] — đó chính là "ngôn ngữ" bebop.
- Đừng biến nó thành bài tập chạy ngón vô tận. Một âm giai bebop chạy từ đầu tới cuối ô nghe như bài tập; chặt nó thành mảnh, xen bước nhảy và nốt lặng, nó mới thành nhạc.

Liên quan: [[he-thong-hop-am-am-giai]], [[ngau-hung-jazz]], [[bud-powell|Bud Powell]].

## Câu hỏi và bài tập
1. Viết bebop át cho F7, B♭7, E♭7.
2. Chạy Sol bebop át đi xuống trên Dm7 – G7 – Cmaj7, bắt đầu từ F (nốt 7 của G7) ở phách 1. Nốt nào rơi vào phách?
3. Viết một câu hai ô trên ii – V ở Fa dùng bebop át và một nhóm bao vây.
`,
  },
  {
    slug: 'am-giai-doi-xung-jazz',
    title: 'Các âm giai đối xứng trong jazz: giảm, toàn cung, tăng',
    category: 'jazz',
    aliases: ['augmented scale', 'âm giai tăng', 'âm giai đối xứng jazz', 'symmetrical scales', 'half-whole', 'whole-half', 'âm giai toàn cung jazz'],
    summary: 'Ba âm giai chia quãng 8 thành các phần bằng nhau và được dùng nhiều trong jazz: âm giai giảm (nửa cung – cung cho hợp âm 7♭9, cung – nửa cung cho hợp âm 7 giảm), âm giai toàn cung (cho 7♯5) và âm giai tăng sáu nốt (cho maj7♯5), gắn với Coltrane, Oliver Nelson, Michael Brecker.',
    wiki: 'Hexatonic_scale',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Hexatonic scale', 'https://en.wikipedia.org/wiki/Hexatonic_scale'],
      ['Wikipedia — Octatonic scale', 'https://en.wikipedia.org/wiki/Octatonic_scale'],
      ['Jens Larsen — The augmented scale', 'https://jenslarsen.nl/augmented-scale/'],
    ],
    body: `
Hầu hết âm giai có một "nhà" — một chủ âm mà mọi nốt hướng về. Âm giai **đối xứng** thì không: chúng lặp lại cùng một mẫu quãng, nên nốt nào cũng có thể là chủ âm, và chỉ có **vài phiên bản** khác nhau (xem [[dieu-thuc-chuyen-vi-gioi-han|điệu thức chuyển vị giới hạn]] của [[olivier-messiaen|Messiaen]]). Chính vì không có nhà, chúng nghe lơ lửng và căng — đúng thứ mà hợp âm át biến hoá cần.

## Âm giai giảm
Âm giai giảm xen kẽ **nửa cung và cung**: tám nốt. Có hai cách bắt đầu, và mỗi cách đi với một loại hợp âm:
- **Nửa cung – cung** (C D♭ E♭ E F♯ G A B♭): cho **hợp âm 7 át có ♭9**. Nó chứa ♭9, ♯9, ♯11, 13 nhưng **nốt 5 và 13 thường** — khác âm giai altered (có ♭13).
- **Cung – nửa cung** (C D E♭ F F♯ G♯ A B): cho **[[hop-am-bay-giam|hợp âm 7 giảm]]**.

::pc-clock 0 1 3 4 6 7 9 10 | Âm giai giảm nửa cung – cung trên C

::staff treble C4 Db4 Eb4 E4 F#4 G4 A4 Bb4 C5 | Âm giai giảm nửa cung – cung trên C: dùng cho C7♭9 (và E♭7♭9, F♯7♭9, A7♭9)

Mọi thứ trong âm giai giảm **lặp lại sau mỗi quãng 3 thứ**. Hệ quả rất thực tế:
- Âm giai giảm nửa cung – cung trên C cũng là âm giai của **E♭7♭9, F♯7♭9, A7♭9**. Học một, được bốn.
- Lick nào chơi trên C7♭9, dịch lên quãng 3 thứ vẫn đúng trên cùng hợp âm.
- Hợp âm 7 giảm = hợp âm 7♭9 bỏ nốt gốc; vì thế chỉ có **ba** hợp âm 7 giảm khác nhau, và mỗi cái là bốn hợp âm 7♭9 trá hình (xem [[ket-lua-va-tiep-can-hop-am]]).
- Trong âm giai giảm, mọi nốt cách một đều cách nhau quãng 3 thứ, nên hợp âm ba dựng bằng cách chồng nốt cách một toàn là hợp âm ba giảm. Ngoài ra âm giai (nửa cung – cung trên C) còn chứa hợp âm ba trưởng và thứ trên C, E♭, F♯, A.

**Mẹo tập**: chơi các nhóm bốn nốt rồi dịch lên quãng 3 thứ; chơi quãng 3 thứ liên tiếp; rải hợp âm ba trưởng C – E♭ – F♯ – A trên C7♭9 (nghe như upper structure, xem [[upper-structure]]). Lý thuyết đầy đủ: [[am-giai-bat-cung]].

## Âm giai toàn cung
C D E F♯ G♯ B♭: sáu nốt, mỗi nốt cách nhau một cung. Chỉ có **hai** âm giai toàn cung khác nhau. Dùng cho hợp âm **7♯5** (C7♯5, C+7), có cả 9 và ♯11; nốt 5 là ♭5 hoặc ♯5, không bao giờ là 5 đúng. Mọi hợp âm ba trong âm giai toàn cung là hợp âm ba tăng.

::staff treble C4 D4 E4 F#4 G#4 Bb4 C5 | Âm giai toàn cung trên C: cho C7♯5 (C7♭5)

Âm giai toàn cung nghe mơ hồ, như cảnh trong mơ. Một chút thì đẹp; nhiều quá thì nghe như nhạc phim hoạt hình. Dùng có chừng (xem [[am-giai-cromatic]]).

## Âm giai tăng
Sáu nốt xen kẽ **quãng 3 thứ – nửa cung**: hai [[hop-am-ba-tang|hợp âm ba tăng]] lồng vào nhau (C – E – G♯ và E♭ – G – B):
::staff treble C4 Eb4 E4 G4 Ab4 B4 | Âm giai tăng trên C: C – E♭ (D♯) – E – G – A♭ (G♯) – B
::pc-clock 0 3 4 7 8 11 | Đối xứng: chỉ có 4 phiên bản (C, E và A♭ cho cùng các nốt)
- Dùng cho **maj7♯5** (C – E – G♯ – B), nhưng cẩn thận [[not-tranh-va-quang-nghich|nốt tránh]] (E♭ trên Cmaj7♯5); với hợp âm này, [[dieu-thuc-thu-giai-dieu|Lydian tăng]] phổ biến hơn.
- Người dùng nổi tiếng: John Coltrane (solo "One Down, One Up"), Oliver Nelson, Michael Brecker. (Wikipedia gắn Nelson với "Stolen Moments", có nguồn khác cho là đoạn bridge của "Hoe-Down" — chưa thống nhất.)

## Vì sao âm giai đối xứng "nghe jazz"?
Không có chủ âm duy nhất nên chúng tạo cảm giác lơ lửng, căng — hợp với hợp âm át biến hoá và với lối [[choi-ngoai-jazz|chơi "ngoài"]]. Trong nhạc cổ điển chúng có ở [[claude-debussy|Debussy]], [[nikolai-rimsky-korsakov|Rimsky-Korsakov]], [[igor-stravinsky|Stravinsky]] ([[an-tuong]], [[hoa-am-the-ky-20]]). Lưu ý: trong âm giai giảm và toàn cung **không có** âm giai ngũ cung nào (xem [[ngu-cung-trong-jazz]]).

## Câu hỏi và bài tập
1. Âm giai giảm nửa cung – cung trên D dùng được cho những hợp âm 7♭9 nào?
2. Trên G7♭9, rải bốn hợp âm ba trưởng G – B♭ – D♭ – E (dựng trên các nốt cách quãng 3 thứ).
3. Chơi âm giai toàn cung trên G7♯5 giải quyết về Cmaj7.
`,
  },

  {
    slug: 'hop-am-at-bien-hoa',
    title: 'Hợp âm át biến hoá và nốt căng',
    category: 'jazz',
    aliases: ['altered dominant', '7alt', 'V7alt', 'altered scale', 'âm giai biến đổi', 'âm giai altered', 'super Locrian', 'nốt căng biến hoá', '7b9', '7#9', '7#11', '7b13', 'Lydian dominant', 'Lydian át'],
    summary: 'Hợp âm 7 át trong jazz thường mang thêm nốt căng — tự nhiên (9, 13) hoặc biến hoá (♭9, ♯9, ♯11, ♭13). Bài này giải thích chọn nốt căng nào, theo hướng giải quyết, và âm giai đi kèm.',
    wiki: 'Altered_chord',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Altered scale', 'https://en.wikipedia.org/wiki/Altered_scale'],
      ['Wikipedia — Altered chord', 'https://en.wikipedia.org/wiki/Altered_chord'],
      ['Open Music Theory 2e — Substitutions (V7♭9 as mixture)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Wikipedia — Acoustic scale (Lydian dominant)', 'https://en.wikipedia.org/wiki/Acoustic_scale'],
      ['PianoGroove — Improvising with the altered mode', 'https://pianogroove.com/jazz-piano-lessons/altered-scale-improv/'],
    ],
    body: `
Nếu hợp âm maj7 là phòng khách và hợp âm m7 là phòng làm việc, thì hợp âm **7 át** là cái sân chơi. Nó là hợp âm **căng nhất** và **linh hoạt nhất** của jazz: ngoài gốc – 3 – 5 – 7, nó nhận được gần như mọi [[hop-am-mo-rong|nốt căng]], kể cả những nốt mà hợp âm khác không chịu nổi.

## Nốt căng tự nhiên và biến hoá
Trên hợp âm 7 át có ba nốt căng (9, 11, 13) và **bốn khả năng biến hoá**: **♭9, ♯9, ♯11, ♭13** (♭13 còn được viết ♯5).
| Nốt căng | Trên G7 | Màu sắc |
|---|---|---|
| 9 | A | Sáng, ổn định |
| ♭9 | A♭ | Tối, căng, "giọng thứ" |
| ♯9 | A♯ (= B♭) | Gắt, "[[blues-12-nhip|blues]]" — vang cùng nốt 3 B |
| ♯11 | C♯ | Lơ lửng, [[dieu-thuc|Lydian]] |
| 13 | E | Sáng |
| ♭13 | E♭ | Tối |
Nốt **11 tự nhiên** (C trên G7) nghịch [[cung-nua-cung|nửa cung]] với nốt 3 (B) nên thường bị tránh, trừ khi bỏ nốt 3 (hợp âm **sus**, xem [[ky-hieu-hop-am]]).

Chơi G7 với từng nốt căng trong bảng đặt trên cùng, rồi giải quyết về C. Nghe kỹ: mỗi nốt kéo về chủ âm theo một kiểu khác.

::grand A4/G2+F3+B3=G9 Ab4/G2+F3+B3=G7♭9 Bb4/G2+F3+B3=G7♯9 C#5/G2+F3+B3=G7♯11 E5/G2+F3+B3=G13 Eb5/G2+F3+B3=G7♭13 | G7 (tay trái G – F – B) với từng nốt căng ở trên

## Chọn theo hướng giải quyết
- V7 giải quyết về **chủ trưởng**: nốt căng tự nhiên (9, 13) lấy từ [[am-giai-truong|âm giai trưởng]].
- V7 giải quyết về **chủ thứ**: **♭9, ♭13** lấy từ âm giai thứ của giọng đích — đây là lý do G7♭9 đi tự nhiên về Cm (xem [[ii-v-i]]).
- Có thể dùng nốt biến hoá trước chủ trưởng để **tăng sức căng**: nốt ♭9 (A♭) đi xuống G, ♭13 (E♭) đi xuống D hoặc E… — giống [[hop-am-muon|hợp âm mượn]] trong [[he-thong-hoa-am-co-dien|hoà âm cổ điển]].
- Hợp âm 7 át **không giải quyết xuống [[quang|quãng]] 5** (♭VII7, thay thế tritone, IV7 trong blues) thường mang **♯11** (Lydian át).

## Âm giai đi kèm
| Ký hiệu | [[am-giai|Âm giai]] | Nguồn gốc | Nốt (gốc G) |
|---|---|---|---|
| G7, G9, G13 | Mixolydian | Bậc 5 âm giai trưởng | G A B C D E F |
| G7♯11 | **Lydian át** | Bậc 4 của [[am-giai-thu|thứ giai điệu]] D | G A B C♯ D E F |
| G7♭9 (13) | **Bát cung nửa cung – cung** | [[am-giai-bat-cung]] | G A♭ B♭ B C♯ D E F |
| G7alt | **Âm giai biến đổi** (altered, super Locrian) | Bậc 7 của thứ giai điệu A♭ | G A♭ B♭ B C♯ E♭ F |
| G7♭9♭13 | Phrygian trưởng (Mixolydian ♭9 ♭13) | Bậc 5 thứ hoà âm C | G A♭ B C D E♭ F |

::keyboard G4 Ab4 Bb4 B4 C#5 Eb5 F5 | Âm giai biến đổi trên G: giữ 3 và 7 (B, F); 9, 5, 13 đều biến hoá

Mẹo nhớ: âm giai biến đổi của G = âm giai **thứ giai điệu A♭** (cao hơn gốc nửa cung). Nó cũng có cùng các nốt với **Lydian át của D♭** — vì vậy G7alt và [[thay-the-tritone|D♭7]] dùng chung một bảng nốt.

## Ký hiệu
"G7alt" nghĩa là: chơi gốc, 3, 7 và **bất kỳ** tổ hợp nốt biến hoá nào (♭9, ♯9, ♯11/♭5, ♭13/♯5) — người chơi tự chọn. Cách xếp thực tế: [[xep-hop-am]], [[hop-am-chong|hợp âm ba cấu trúc trên]].

Âm giai nguồn: [[dieu-thuc-thu-giai-dieu]]; thế bấm cho hợp âm át biến hoá: [[upper-structure]].

## Mẹo luyện tập
1. Chọn một ii – V – I ở Đô. Mỗi lượt, đổi G7 thành một loại: G13, G7♭9, G7alt, G7♯11. Giai điệu tay phải giữ nguyên; nghe xem loại nào hợp.
2. Đi vòng quãng 5 với hợp âm alt, đọc to âm giai mẹ: "C7alt — Rê giáng thứ giai điệu; F7alt — Fa thăng thứ giai điệu…"
3. Trên alt, thử chơi ngũ cung cách gốc một tritone (G7alt → ngũ cung Rê giáng); xem [[ngu-cung-trong-jazz]].

## Câu hỏi và bài tập
1. Viết âm giai altered cho C7, F7, B♭7.
2. Trên D7 giải quyết về Gm, bạn chọn nốt căng nào? Về Gmaj7 thì sao?
3. Viết hai thế bấm G7alt khác nhau; bấm và giải quyết về Cmaj7.
`,
  },
  {
    slug: 'thay-the-tritone',
    title: 'Thay thế tritone',
    category: 'jazz',
    aliases: ['tritone substitution', 'tritone sub', 'bII7', 'thay thế át'],
    summary: 'Thay hợp âm 7 át bằng hợp âm 7 át cách nó một tritone (G7 → D♭7); hai hợp âm chung cặp nốt 3 – 7 nên cùng chức năng.',
    wiki: 'Tritone_substitution',
    refs: [
      ['Open Music Theory 2e — Substitutions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Wikipedia — Tritone substitution', 'https://en.wikipedia.org/wiki/Tritone_substitution'],
      ['All About Jazz — Twin sons of different mothers: harmonic convergence in jazz and classical music, part 2', 'https://allaboutjazz.com/twin-sons-of-different-mothers-harmonic-convergence-in-jazz-and-classical-music-part-%202'],
      ['Wikipedia — Coleman Hawkins', 'https://en.wikipedia.org/wiki/Coleman_Hawkins'],
    ],
    body: `
Nếu chỉ học một phép thay thế, hãy học phép này. Nó đơn giản tới mức buồn cười: thay hợp âm át bằng hợp âm át **cách nó một tritone**. G7 thành D♭7. Kết quả: bè trầm đi xuống nửa cung thay vì nhảy quãng 5, và một màu "hiện đại" ngay lập tức.

G7 = G – **B** – D – **F**. D♭7 = D♭ – **F** – A♭ – **C♭ (= B)**. Cả hai cùng chứa [[thuan-nghich|tritone]] B – F, chỉ đổi vai trò bậc 3 và bậc 7 (xem [[trung-am]]).

::keyboard G3 B3 D4 F4 | G7
::keyboard Db4 F4 Ab4 B4 | D♭7 — chung cặp B, F với G7

## Hiệu quả
[[ii-v-i|ii – V – I]]: Dm7 – G7 – Cmaj7 → ii – ♭II7 – I: **Dm7 – D♭7 – Cmaj7**. Bè trầm đi xuống liền [[cung-nua-cung|nửa cung]] D – D♭ – C, rất mượt.

## Liên hệ
- D♭7 trùng âm với một [[hop-am-sau-tang|hợp âm 6 Đức]] giải quyết về Đô (D♭ – F – A♭ – B) — hai truyền thống cổ điển và jazz gặp nhau.
- Có thể áp dụng cho mọi [[hop-am-at-phu|át phụ]]: E7 – A7 – D7 – G7 – C → E7 – E♭7 – D7 – D♭7 – C (bè trầm [[am-giai-cromatic|cromatic]]).
- Âm giai biến đổi của G7 chính là Lydian át của D♭7 (xem [[he-thong-hop-am-am-giai]]).

## Thay thế cả cặp ii – V
Có thể thay luôn [[hop-am-ba|hợp âm]] ii đi kèm: Dm7 – G7 – C → **A♭m7 – D♭7** – C (ii – V "của [[quang|tritone]]"), hoặc trộn: Dm7 – D♭7 – C. Open Music Theory nhấn mạnh tên gọi chỉ **hai điều**: hai hợp âm cách nhau tritone và **chung một tritone**.

## Lịch sử
- Theo Wikipedia, cùng âm thanh này đã có trong nhạc cổ điển dưới tên [[hop-am-sau-tang|hợp âm 6 tăng]]. Open Music Theory coi riêng **thay thế tritone** (như một phép thay [[hop-am-bay|hợp âm 7 át]]) là kỹ thuật đặc trưng của jazz.
- Trong jazz, kỹ thuật được **Dizzy Gillespie** và **Charlie Parker** phổ biến trong thập niên 1940; trước đó [[duke-ellington|Duke Ellington]], [[art-tatum|Art Tatum]], Coleman Hawkins, Roy Eldridge, Benny Goodman đã dùng.
- Bản thu **"Body and Soul"** của Coleman Hawkins (11/10/1939): ở ô 3, tay bass chơi D thay vì A♭ — biến A♭7 thành D7, một thay thế tritone (theo phân tích của All About Jazz).

## Nốt giai điệu cần kiểm tra
[[hop-am-mo-rong|Nốt căng]] tự nhiên của G7 lại là nốt **biến hoá** của D♭7: A (9 của G7) = ♭13 của D♭7; E (13 của G7) = ♯9 của D♭7. Ngược lại, nốt G — gốc của G7 — là ♯11 của D♭7. Vì vậy thay thế tritone hợp nhất khi [[giai-dieu|giai điệu]] đang ở nốt 3, 7 hoặc các nốt biến hoá của V7 (xem [[hop-am-at-bien-hoa]]).

::img Tritone substitutions.png | Thay thế tritone (tương đương hợp âm 6 Ý)

Là một trong những kỹ thuật [[tai-hoa-am]] phổ biến nhất.

## Mẹo luyện tập
- Chơi ii – V – I ở 12 giọng hai lần: một lần với V gốc, một lần với V thay tritone. Tay trái chỉ chơi nốt gốc để nghe rõ bè trầm D – D♭ – C.
- Khi solo trên hợp âm thay tritone, thử ngũ cung dựng trên gốc của hợp âm thay (trên D7 thay bằng A♭7: chơi ngũ cung A♭) — xem [[ngu-cung-trong-jazz]].

## Câu hỏi và bài tập
1. Viết hợp âm thay tritone cho C7, F7, B♭7, E♭7.
2. Thay mọi V7 trong blues bebop (xem [[blues-12-nhip]]) bằng hợp âm thay tritone.
3. Kiểm nốt giai điệu trước khi thay: nốt nào của G7 không nằm trong D♭7?
`,
  },
  {
    slug: 'xep-hop-am',
    title: 'Xếp hợp âm',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['voicing', 'cách xếp hợp âm', 'rootless voicing', 'shell voicing', 'drop 2', 'close voicing', 'thế bấm hợp âm jazz'],
    summary: 'Cách chọn và sắp xếp các nốt của hợp âm trên bàn phím: xếp hẹp, xếp rộng, shell, rootless, drop 2…',
    wiki: 'Voicing_(music)',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Piano With Jonny — Rootless voicings', 'https://pianowithjonny.com/piano-lessons/rootless-voicings/'],
      ['Wikipedia — Voicing (music)', 'https://en.wikipedia.org/wiki/Voicing_(music)'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
      ['Open Music Theory 2e — Jazz', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz'],
    ],
    body: `
Lấy Cmaj7. Bấm C – E – G – B gọn trong một tay. Giờ bấm C ở tay trái, rồi E – G – B – D cao hơn ở tay phải. Cùng một hợp âm, hai cảm giác. Cách bạn **xếp** nốt quan trọng ngang với việc bạn chọn **nốt nào** — và bài này là bản đồ các cách xếp chính.

## Xếp hẹp và xếp rộng
- **Xếp hẹp** (close): các nốt nằm gọn trong một [[quang|quãng 8]] — C – E – G – B.
- **Xếp rộng** (open): trải hơn một quãng 8 — C3 – G3 – E4 – B4, vang và thoáng.

## Shell (tay trái)
Chỉ chơi **gốc + 3 + 7** (hoặc gốc + 7 + 3) — đủ để nói rõ hợp âm. Dm7: D – F – C; G7: G – F – B; Cmaj7: C – E – B. Đây là thế bấm của dân bebop (xem [[the-bam-bac-thay-jazz]]).

## Thế bấm không gốc
Bỏ nốt gốc (để tay bass lo), thêm nốt mở rộng. Lối bấm này được phổ biến vào **giữa – cuối thập niên 1950** bởi **[[bill-evans|Bill Evans]], Red Garland, Wynton Kelly** (vài nguồn kể thêm Ahmad Jamal); các nguồn không thống nhất ai khởi xướng.

| Hợp âm | Dạng A (3 – 5 – 7 – 9) | Dạng B (7 – 9 – 3 – 5) |
|---|---|---|
| Dm9 | F – A – C – E | C – E – F – A |
| G13 | B – E – F – A (3 – 13 – 7 – 9) | F – A – B – E (7 – 9 – 3 – 13) |
| Cmaj9 | E – G – B – D | B – D – E – G |

::grand F4+A4+C5+E5/D3=Dm9_(A) F4+A4+B4+E5/G2=G13_(B) E4+G4+B4+D5/C3=Cmaj9_(A) | ii – V – I không gốc: Dm9 dạng A, G13 dạng B, Cmaj9 dạng A — mỗi lần chỉ một hai nốt đổi

Nối ii – V – I bằng cách **xen kẽ dạng A và B**: mỗi bè đi tối đa một bậc. Đó là [[dan-giong]] tốt nhất bạn có thể có với bốn nốt.

Hai lưu ý quan trọng:
- Giữ thế bấm **quanh Đô giữa trở lên**. Quãng hẹp và nốt 9 đặt quá thấp sẽ đục.
- Thế bấm không gốc **cần bass**. Chơi một mình mà không có gốc, hợp âm nghe lơ lửng — khi đó dùng shell hoặc [[the-bam-mo|thế bấm mở]].

## Thứ tự học
1. **[[not-dan-huong|Nốt dẫn hướng]]** 3 – 7 ([[ii-v-i]]).
2. **Shell**: gốc + 3 + 7.
3. **Không gốc dạng A/B** cho ii – V – I ở 12 giọng.
4. **Quãng 4 và "So What"** ([[hoa-am-quang-bon]], [[hop-am-so-what-barron]]).
5. **Upper structure** cho hợp âm át biến hoá ([[upper-structure]], [[hop-am-at-bien-hoa]]).
6. **Drop 2** và xếp **khối** cho giai điệu ([[hop-am-khoi]]).

## Drop 2
Lấy hợp âm xếp hẹp, hạ **nốt cao thứ hai** xuống một quãng 8: C – E – G – B → G – C – E – B. Rất phổ biến trên guitar và trong phối big band.

Một bài tập đẹp (Levine đặt nó ngay sau âm giai bebop): hoà âm âm giai bebop trưởng đi xuống bằng **xen kẽ hai hợp âm** — C6 trên các nốt C, E, G, A và một hợp âm 7 giảm (D – F – A♭ – B) trên các nốt lướt — mỗi nốt giai điệu một hợp âm bốn nốt xếp hẹp, rồi hạ nốt thứ hai xuống quãng 8. Bạn sẽ nghe ra một đoạn "sax soli" của big band.

::staff treble E4+G4+A4+C5=C6 D4+F4+Ab4+B4=D°7 C4+E4+G4+A4=C6 B3+D4+F4+Ab4=D°7 A3+C4+E4+G4=C6 | Âm giai bebop trưởng đi xuống, xen kẽ C6 và D°7 (xếp hẹp). Thử hạ nốt thứ hai của mỗi hợp âm xuống một quãng 8: thành drop 2

[[am-giai|Âm giai]] chọn nốt mở rộng: [[he-thong-hop-am-am-giai]]. Đọc tiếp: [[the-bam-bac-thay-jazz]], [[hop-am-khoi]], [[upper-structure]], [[dem-jazz]]. Thêm: [[the-bam-ba-not]], [[the-bam-mo]], [[quy-tac-xep-hop-am-jazz]], [[chon-the-bam-jazz]].

## Câu hỏi và bài tập
1. Viết dạng A và B cho ii – V – I ở Fa, B♭, E♭.
2. Chơi ii – V – I không gốc qua 12 giọng theo vòng quãng 5, xen kẽ A – B – A rồi B – A – B.
3. Hoà âm âm giai bebop trưởng Fa bằng F6 và hợp âm 7 giảm trên G, rồi drop 2.
`,
  },  {
    slug: 'upper-structure',
    title: 'Upper structure: hợp âm ba cấu trúc trên',
    category: 'jazz',
    aliases: ['upper structure', 'upper structure triad', 'UST', 'hợp âm cấu trúc trên', 'hợp âm ba cấu trúc trên', 'hợp âm ba trên tritone'],
    summary: 'Upper structure là một hợp âm ba trưởng đặt trên tritone (nốt 3 và 7) của một hợp âm 7 át: tay trái giữ tritone, tay phải chọn hợp âm ba để tạo ra các nốt căng 9, ♯11, 13 hay ♭9, ♯9, ♭13 — cách nhanh nhất để có những hợp âm át "đầy màu" trên piano.',
    wiki: 'Upper_structure',
    refs: [
      ['Wikipedia — Upper structure', 'https://en.wikipedia.org/wiki/Upper_structure'],
      ['John Baez — Upper structures (2023)', 'https://johncarlosbaez.wordpress.com/2023/02/16/upper-structures/'],
      ['Piano With Jonny — Upper structure triads', 'https://pianowithjonny.com/piano-lessons/upper-structure-triads-the-ultimate-piano-chord-hack/'],
    ],
    body: `
Đây là thế bấm khiến người mới nghe phải hỏi "cái hợp âm gì mà hay vậy?". Câu trả lời đơn giản tới bất ngờ: **một hợp âm ba bình thường**, đặt lên trên một **tritone**. Bạn đã biết mọi hợp âm ba trưởng; giờ bạn sẽ biết cách biến chúng thành những hợp âm át biến hoá dày đặc mà không phải đếm ♭9, ♯11 trong đầu.

## Ý tưởng
Upper structure "đơn giản là **một hợp âm ba đặt trên một tritone**". Với một [[hop-am-bay|hợp âm 7 át]] như **C7**:
- **Tay trái** giữ **nốt 3 và nốt 7** (E – B♭) — hai [[ii-v-i|nốt dẫn hướng]] xác định tính chất át; chúng tạo thành một [[quang|tritone]]. Có thể thêm nốt gốc C ở bè trầm cho rõ.
- **Tay phải** chơi một **[[hop-am-ba|hợp âm ba]] trưởng** trên một bậc nào đó của C — các nốt của hợp âm ba này chính là các [[hop-am-mo-rong|nốt căng]].
Vì tritone E – B♭ cũng là nốt 7 – 3 của **G♭7**, cùng một thế bấm dùng được cho [[thay-the-tritone|hợp âm thay thế tritone]].

## Bảng upper structure trên C7
| Hợp âm ba (tay phải) | Các nốt so với C | Kết quả | Tên gọi |
|---|---|---|---|
| **D** (D – F♯ – A) | 9 – ♯11 – 13 | C13♯11 | US II |
| **E♭** (E♭ – G – B♭) | ♯9 – 5 – ♭7 | C7♯9 | US ♭III |
| **G♭** (G♭ – B♭ – D♭) | ♭5/♯11 – ♭7 – ♭9 | C7♭9♯11 | US ♭V |
| **A♭** (A♭ – C – E♭) | ♭13 – 1 – ♯9 | C7♯9♭13 | US ♭VI |
| **A** (A – C♯ – E) | 13 – ♭9 – 3 | C13♭9 | US VI |

::grand D4+F#4+A4/C3+E3+Bb3=II Eb4+G4+Bb4/C3+E3+Bb3=♭III Gb4+Bb4+Db5/C3+E3+Bb3=♭V Ab4+C5+Eb5/C3+E3+Bb3=♭VI A4+C#5+E5/C3+E3+Bb3=VI | Năm upper structure trên C7: tay trái C – E – B♭, tay phải là hợp âm ba trên bậc II, ♭III, ♭V, ♭VI, VI

Ký hiệu thường gặp: **D/C7** hoặc viết như phân số (D trên C7) — giống [[hop-am-chong|hợp âm chồng]].

## Chọn upper structure nào?
- **Nốt căng tự nhiên** (9, ♯11, 13 — US II) hợp với át **không giải quyết** hoặc [[hop-am-at-bien-hoa|Lydian át]].
- **Nốt căng biến hoá** (♭9, ♯9, ♭13 — US ♭III, ♭V, ♭VI, VI) hợp với át **giải quyết về chủ**, nhất là về hợp âm thứ — xem [[hop-am-at-bien-hoa]].
- Nốt giai điệu phải nằm trong hợp âm ba (thường là nốt trên cùng).

## Khác với hợp âm gạch chéo
Upper structure có **tritone** ở dưới; [[hop-am-gach-cheo|hợp âm gạch chéo]] chỉ có **một nốt bass**. Cả hai đều là cách "đọc nhanh" những hợp âm phức tạp bằng hợp âm ba quen thuộc.

Liên quan: [[xep-hop-am]], [[he-thong-hop-am-am-giai]], [[am-giai-bat-cung]] (US VI và ♭V nằm trong âm giai bát cung nửa cung – cung).

Trong giai điệu: [[superimposition-jazz]], [[triad-pairs]].

## Mẹo luyện tập
- Chọn **một** upper structure (bắt đầu bằng US II) và chơi nó trên mọi hợp âm át của một bài. Tuần sau đổi sang US ♭VI.
- Trên ii – V – I, chỉ đổi hợp âm V: Dm9 → C7 với từng upper structure → Fmaj9. Nghe cái nào kéo về mạnh nhất.
- Tập ở 12 giọng: tay trái tritone đi theo vòng quãng 5, tay phải hợp âm ba.

## Câu hỏi và bài tập
1. Viết năm upper structure trên G7 và F7.
2. US nào dùng được khi giai điệu là nốt ♭9 của hợp âm át?
3. Chơi G7 với US ♭VI giải quyết về Cm9, rồi với US II giải quyết về Cmaj9.
`,
  },  {
    slug: 'the-bam-ba-not',
    title: 'Thế bấm 3 nốt',
    category: 'jazz',
    aliases: ['three note voicing', 'three-note voicings', 'thế bấm 3 nốt', 'thế bấm ba nốt', 'gốc + 3 + 7'],
    summary: 'Thế bấm jazz đơn giản nhất cho hai tay: tay trái chơi nốt gốc, tay phải chơi nốt 3 và 7 (nốt dẫn hướng). Thêm một nốt ở tay phải (giai điệu, nốt 5 hoặc nốt căng) là có thế bấm 4 nốt.',
    body: `
Đây là thế bấm bạn có thể dùng **ngay hôm nay**, với bất kỳ bài nào trong fake book, và nó sẽ nghe ra jazz. Chỉ ba nốt.

## Cấu tạo
- **Tay trái**: nốt **gốc**. Nó cho tai biết hợp âm đang đứng ở đâu.
- **Tay phải**: **nốt 3 và nốt 7**, hai [[not-dan-huong|nốt dẫn hướng]] quyết định chất của hợp âm (shell — xem [[xep-hop-am]]).

::grand C4+F4/D3=Dm7 B3+F4/G2=G7 B3+E4/C3=Cmaj7 | ii – V – I ở Đô trưởng bằng thế bấm 3 nốt: tay phải chỉ đổi một nốt mỗi lần (C → B, F → E)

Chơi ba hợp âm đó vài lần và nhìn tay phải. Nó gần như không di chuyển: từ "7 – 3" sang "3 – 7" rồi lại "7 – 3", mỗi lần chỉ một nốt đi xuống nửa cung. Đó là [[dan-giong|dẫn giọng]] gần, và đó là lý do thế bấm này nghe mượt.

Ai đó có thể bảo bạn "dân piano không nên bấm thế gốc". Đừng lo: Bud Powell và Thelonious Monk bấm hợp âm có nốt gốc gần như mọi lúc (xem [[nhung-ngo-nhan-trong-ly-thuyet-jazz]]).

## Mở rộng thành bốn nốt
Thêm **một nốt** vào tay phải: **nốt giai điệu**, **nốt 5**, hoặc một [[hop-am-mo-rong|nốt căng]] dùng được. Ví dụ G7♭9: tay trái G, tay phải F – B – A♭.

::grand C4+E4+F4/D3=Dm9 B3+E4+F4/G2=G13 B3+D4+E4/C3=Cmaj9 | Thêm nốt căng vào tay phải: Dm9 (thêm E = 9), G13 (thêm E = 13), Cmaj9 (thêm D = 9)

Để ý nốt E: nó đứng yên qua cả ba hợp âm — 9 của Dm9, 13 của G13, 3 của Cmaj9. Một nốt, ba vai. Bạn sẽ gặp lại ý này ở [[tu-am-giai-den-am-nhac|nốt chung]].

So sánh: [[the-bam-bac-thay-jazz|thế bấm Powell]] cũng là gốc + 3 hoặc 7, nhưng dồn cả vào tay trái để tay phải tự do solo.

## Khi nào dùng?
- Bước đầu khi chơi jazz từ [[ky-hieu-hop-am|lead sheet]]: tay phải đặt **giai điệu** lên trên cùng, ngay trên nốt 3 và 7 (xem [[ket-hop-the-bam]]).
- Khi có tay bass, bỏ nốt gốc ở tay trái và chuyển sang [[xep-hop-am|thế bấm không gốc]].

## Câu hỏi và bài tập
1. Chơi ii – V – I bằng thế bấm 3 nốt ở 12 giọng theo vòng quãng 5.
2. Thêm nốt 9 hoặc 13 cho mỗi hợp âm; để ý nốt nào đứng yên.
3. Chơi tám ô đầu một bài chuẩn: tay trái gốc, tay phải 3 – 7 và giai điệu ở trên.

Tiếp theo: [[the-bam-mo]].
`,
  },
  {
    slug: 'the-bam-mo',
    title: 'Thế bấm mở (open / spread voicings)',
    category: 'jazz',
    aliases: ['open voicing', 'open voicings', 'spread voicing', 'thế bấm mở', 'xếp rộng jazz', 'thế bấm hai tay'],
    summary: 'Thế bấm mở trải hợp âm trên hơn một quãng 8, mỗi tay hai nốt: tay trái nốt gốc + 7 (hoặc gốc + 10), tay phải nốt 3 + 5 (hoặc 5 + 7). Âm thanh đầy và rộng hơn thế bấm hẹp — hay dùng cho ballad.',
    body: `
Thế bấm ba nốt nghe ổn nhưng hơi gầy. Muốn đầy và vang hơn mà không đục, hãy **mở** hợp âm ra hai tay. Ý tưởng: trải bốn nốt gốc – 3 – 5 – 7 qua hai tay sao cho mỗi tay giữ hai nốt và các quãng rộng nằm ở dưới.

## Hai cách chia tay
| Cách | Tay trái | Tay phải |
|---|---|---|
| (a) | Gốc + 7 | 3 + 5 |
| (b) | Gốc + 10 (nốt 3 cao một quãng 8) | 5 + 7 |

::grand F4+A4/D3+C4=Dm7_(a) D4+F4/G2+B3=G7_(b) E4+G4/C3+B3=Cmaj7_(a) | ii – V – I bằng thế bấm mở: Dm7 và Cmaj7 theo cách (a), G7 theo cách (b) với quãng 10 G – B ở tay trái

Chơi ví dụ trên, rồi chơi lại cùng ba hợp âm ở thế gốc xếp hẹp trong một tay. Nghe khác chưa? Thế bấm mở **vang**, như một dàn kèn; thế xếp hẹp ở vùng giữa thì **đặc**.

Đổi xen kẽ (a) và (b) giữa các hợp âm là cách giữ cho các bè đi gần: nốt 7 của Dm7 (C) xuống nửa cung thành nốt 3 của G7 (B) — nhưng ở cách (b), nốt 3 ấy nằm ở quãng 10 tay trái.

## Nguyên tắc
- **Giai điệu ở trên cùng.**
- **Không nhân đôi** nốt nào, trừ nốt trên cùng.
- **Tránh quãng 5** trống ở tay trái khi muốn có màu; dùng **quãng rộng ở bè trầm** để khỏi đục.

Đây cũng là các quy tắc chung ở [[quy-tac-xep-hop-am-jazz]]. Khi đệm cho người khác, thế bấm rộng (quãng 4 trở lên) chừa chỗ cho người solo ([[dem-jazz]]).

## Liên hệ
Thế bấm mở là anh em của [[hop-am-khoi|drop 2]] (lấy thế xếp hẹp rồi hạ một nốt) và là bước tiếp sau [[the-bam-ba-not]]. Trong nhạc cổ điển, ý tưởng tương tự là [[dan-giong|xếp rộng]] trong hoà âm bốn bè.

## Câu hỏi và bài tập
1. Chơi ii – V – I ở Fa và Si giáng, Dm7 – Cmaj7 cách (a), G7 cách (b).
2. Thêm nốt 9 lên trên tay phải mỗi hợp âm.
3. Chơi một ballad chậm chỉ bằng thế bấm mở, giai điệu luôn ở trên cùng.
`,
  },
  {
    slug: 'hop-am-so-what-barron',
    title: 'Hợp âm So What và hợp âm Barron',
    category: 'jazz',
    aliases: ['So What chord', 'hợp âm So What', 'Barron chord', 'hợp âm Barron', 'Kenny Barron voicing', 'Dm11 voicing'],
    summary: 'Hai thế bấm hợp âm thứ 11 "chữ ký" của jazz hiện đại: hợp âm So What (ba quãng 4 và một quãng 3 trưởng, của Bill Evans trong "So What", 1959) và hợp âm Barron sáu nốt (mỗi tay một chồng quãng 5, giai điệu ở nốt 11), anh em với hợp âm Hancock.',
    wiki: 'So_What_chord',
    refs: [
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
      ['PianoGroove — Kenny Barron voicing', 'https://www.pianogroove.com/?p=114'],
    ],
    body: `
Hai hợp âm trong bài này là hai trong những âm thanh "hiện đại" dễ nhận ra nhất của jazz. Cái đầu, **So What**, ai đã nghe *Kind of Blue* đều nhớ: hai tiếng "so what" mà đàn piano đáp lại kèn. Cái sau, **Barron**, dày và mở như một dàn dây. Cả hai đều dựng từ những quãng rộng (quãng 4, quãng 5) thay vì quãng 3 — và đó là bí mật của âm thanh "thoáng" của chúng.

## Hợp âm So What
- **Năm nốt**: **ba quãng 4 đúng** chồng lên nhau và **một quãng 3 trưởng** ở trên. Trên D: tay trái **D – G**, tay phải **C – F – A**.
- Gốc tích: thế bấm của [[bill-evans|Bill Evans]] trong "So What" (*Kind of Blue*, 1959) — xem [[jazz-dieu-thuc]].
- Vì xây bằng quãng 4, nó có màu hơi **treo** (sus): thế bấm trên D đọc được là **Dm11**, **B♭maj13** hoặc **G9sus**.
- Hợp âm So What chính là **[[hoa-am-quang-bon|hợp âm quãng 4]] ở [[the-dao-hop-am|thể đảo]] 1**; nó có 5 thể đảo, đều dùng được khi cần đổi nốt bass hay nốt giai điệu.
- Dùng được cả trong tiến trình có chức năng ([[vong-quang-nam|vòng quãng 5]], [[ii-v-i]]) lẫn trong tiến trình [[dieu-thuc|điệu thức]] đi từng bậc — cách đệm của jazz điệu thức là **trượt song song** thế bấm này trong một điệu thức.
::grand C4+F4+A4/D3+G3=So_What_(D) | Hợp âm So What trên D: D – G – C – F – A (ba quãng 4 + một quãng 3 trưởng) — Dm11 / G9sus / B♭maj13

## Hợp âm Barron
- **Sáu nốt**, dùng cho hợp âm **m7 khi giai điệu ở nốt 11**. Trên Dm11: tay trái **D – A – E** (1 – 5 – 9), tay phải **F – C – G** (♭3 – ♭7 – 11), nốt 11 ở trên cùng.
- Mỗi tay là **một chồng quãng 5**; giữa hai tay là quãng 2 thứ E – F.
- Mang tên pianist **Kenny Barron**.
::grand F4+C5+G5/D3+A3+E4=Dm11_(Barron) | Hợp âm Barron trên Dm11: tay trái D – A – E, tay phải F – C – G
Anh em: [[the-bam-bac-thay-jazz|hợp âm Hancock]] cũng sáu nốt cho m7 nhưng khi giai điệu ở **nốt 9**. Chọn giữa hai hợp âm theo nốt giai điệu — xem [[ket-hop-the-bam]].

## Mẹo luyện tập
- Trượt hợp âm So What lên xuống **trong Rê Dorian** (chỉ phím trắng): D, E, F, G, A… mỗi bậc một thế bấm cùng hình. Đó chính là cách đệm của jazz điệu thức.
- Chọn giữa Hancock và Barron **theo nốt giai điệu**: nốt 9 ở trên → Hancock; nốt 11 ở trên → Barron.

## Câu hỏi và bài tập
1. Dựng hợp âm So What trên E và A; chúng đọc được là những hợp âm gì?
2. Dựng hợp âm Barron cho Gm11 và Cm11.
3. Ứng tác trên vamp Rê Dorian; tay trái trượt hợp âm So What theo các bậc.
`,
  },

  {
    slug: 'hop-am-gach-cheo',
    title: 'Hợp âm gạch chéo trong jazz',
    category: 'jazz',
    aliases: ['slash chord', 'hợp âm gạch chéo', 'hợp âm trên bass', 'triad over bass', 'Bb/C', 'D/C'],
    summary: 'Hợp âm gạch chéo (slash chord) thường là một hợp âm ba trưởng đặt trên một nốt bass khác, ghi Hợp âm/Bass. Chúng vừa là cách ghi gọn những hợp âm phức tạp (B♭/C = C9sus4), vừa cho sẵn một thế bấm và một đường bass.',
    wiki: 'Slash_chord',
    refs: [
      ['Wikipedia — Slash chord', 'https://en.wikipedia.org/wiki/Slash_chord'],
    ],
    body: `
Bạn sẽ gặp ký hiệu **Hợp âm/Nốt** rất thường: hợp âm ở trên gạch chéo, **nốt bass** ở dưới (cách đọc cơ bản: [[ky-hieu-hop-am]]). Có hai trường hợp, và phân biệt được chúng là nửa công việc:
- **Nốt bass thuộc hợp âm** (C/E, C/G): chỉ là một [[the-dao-hop-am|thể đảo]]. Không có gì mới.
- **Nốt bass không thuộc hợp âm** (B♭/C, D/C): đây là một **hợp âm mới hẳn**, và là chuyện của bài này.

## Hai ví dụ bạn sẽ gặp hằng tuần
::grand Bb4+D5+F5/C3=B♭/C D4+F#4+A4/C3=D/C | B♭/C: các nốt B♭ – D – F trên C = ♭7, 9, 11, không có nốt 3 → C9sus4. D/C: D – F♯ – A trên C = 9, ♯11, 13 → màu Lydian

| Ký hiệu | Nốt (so với bass C) | Đọc là | Âm giai |
|---|---|---|---|
| **B♭/C** | ♭7 – 9 – 11 | C9sus4 | [[dieu-thuc|Mixolydian]] trên C |
| **D/C** | 9 – ♯11 – 13 | Cmaj7♯11 thiếu [[not-dan-huong|nốt 3 và 7]] | Lydian trên C |

Cách đọc nhanh: **đếm từ nốt bass lên các nốt của hợp âm ở trên**, rồi hỏi "bộ nốt căng này thuộc hợp âm nào?". Hợp âm gạch chéo thường **mơ hồ** vì hay thiếu nốt 3 hoặc 7 — chính các [[hop-am-mo-rong|nốt căng]] có mặt cho bạn biết người viết muốn gì. Và cái mơ hồ ấy thường là có chủ ý: người viết muốn âm thanh "mở", không ngả hẳn về trưởng hay thứ.

## Vì sao người ta viết như vậy?
- **Gọn**: B♭/C dễ đọc hơn C9sus4 kèm danh sách nốt. Có hợp âm mà viết kiểu thường thì thành một câu đố (B/C mà viết thành Cmaj7♯4♯9 — ai muốn giải?).
- **Có sẵn thế bấm**: tay phải bấm một hợp âm ba quen thuộc, tay trái bấm bass. Không cần nghĩ.
- **Có sẵn đường bass**: một chuỗi hợp âm gạch chéo với bass đi liền bậc (C – C/B – C/B♭) là một [[line-cliche|line cliché]] ở bè trầm.
- Trong [[jazz-dieu-thuc|jazz điệu thức]], hợp âm **sus** dạng B♭/C có mặt khắp nơi (xem [[hoa-am-dieu-thuc]], [[hop-am-sus-jazz]]).

Có tất cả **mười hai** hợp âm ba trưởng đặt được trên một nốt bass, mỗi cái một màu và một âm giai riêng: bảng đầy đủ ở [[slash-chord-tren-mot-not-bass]].

## So với upper structure
[[upper-structure|Upper structure]] đặt hợp âm ba lên trên một **tritone** (nốt 3 và 7 của hợp âm át), nên chất át rất rõ. Hợp âm gạch chéo chỉ có **một nốt bass** bên dưới, nên mơ hồ và "mở" hơn. Cùng một hợp âm ba D trên C: trên tay trái C – E – B♭ thì là C13♯11 (upper structure); trên mỗi nốt C thì là D/C (Lydian, hoặc gợi nhiều thứ khác).

## Câu hỏi và bài tập
1. Đọc tên A♭/B♭, E♭/F, C/D theo cách đếm từ bass. Cả ba có chung loại không?
2. Chơi một line cliché C – C/B – C/B♭ – A7 rồi về Dm.
3. Tìm hai hợp âm gạch chéo trong một bài jazz bạn biết; viết lại chúng bằng ký hiệu thường.
`,
  },
  {
    slug: 'hop-am-khoi',
    title: 'Block chords: four-way close, locked hands và drop 2',
    category: 'jazz',
    aliases: ['block chords', 'hợp âm khối jazz', 'four-way close', 'locked hands', 'tay khoá', 'drop 2 voicing', 'drop two', 'Shearing', 'Milt Buckner'],
    summary: 'Hợp âm khối hoà âm hoá từng nốt giai điệu: bốn nốt xếp hẹp dưới giai điệu (four-way close), tay trái nhân đôi giai điệu thấp một quãng 8 (locked hands), hoặc hạ nốt thứ hai từ trên xuống một quãng 8 (drop 2). George Shearing phổ biến lối chơi này; ông nói đã nghe nó từ Milt Buckner.',
    wiki: 'Locked_hands_style',
    refs: [
      ['Wikipedia — Locked hands style', 'https://en.wikipedia.org/wiki/Locked_hands_style'],
      ['Wikipedia — Milt Buckner', 'https://en.wikipedia.org/wiki/Milt_Buckner'],
      ['Columbia University — Jazz Glossary: locked hands', 'https://ccnmtl.columbia.edu/projects/jazzglossary/l/locked_hands.html'],
      ['Piano With Jonny — How to play in the style of Red Garland', 'https://pianowithjonny.com/piano-lessons/how-to-play-in-the-style-of-red-garland/'],
    ],
    body: `
Nghe một big band chơi một câu giai điệu: cả bộ kèn cùng chuyển động, mỗi nốt giai điệu là một hợp âm. Hợp âm khối là cách đặt cả bộ kèn ấy vào mười ngón tay. Nó cực kỳ hiệu quả cho một chorus "đỉnh" ở cuối bài solo, hay cho một giai điệu chậm cần sức nặng.

## Ba bước từ hẹp đến rộng
1. **Four-way close** (bốn nốt xếp hẹp): giai điệu ở trên cùng, ba nốt hợp âm xếp sát ngay bên dưới, tất cả trong một [[quang|quãng 8]].
2. **Locked hands** ("hai tay khoá"): thêm vào bốn nốt trên — **tay trái nhân đôi giai điệu thấp hơn một quãng 8**. Hai tay di chuyển song song như bị khoá vào nhau.
3. **Drop 2**: từ bốn nốt xếp hẹp, **hạ nốt thứ hai từ trên xuống một quãng 8** (xuống tay trái) — âm thanh rộng và trong hơn (xem [[xep-hop-am]]).

::grand C4+E4+G4+A4/=4_nốt_hẹp C4+E4+G4+A4/A3=locked_hands C4+E4+A4/G3=drop_2 | Giai điệu A trên hợp âm C6: xếp hẹp C – E – G – A; locked hands thêm A thấp ở tay trái; drop 2 hạ G (nốt thứ hai từ trên) xuống một quãng 8

## Dùng khi nào?
- Hợp với **giai điệu đi liền bậc**, mỗi nốt giai điệu được hoà âm thành một hợp âm — nghe như cả một **dàn kèn** (section) chơi cùng nhau.
- Nốt giai điệu không thuộc hợp âm thường được hoà âm bằng một hợp âm lướt (thường là [[hop-am-bay-giam|hợp âm 7 giảm]]) — xem [[hop-am-luot-jazz]].
- Drop 2 là dạng **phổ biến nhất** trong các dạng "drop" (cũng có drop 3).

## Lịch sử
- Theo Wikipedia, **George Shearing** làm locked hands nổi tiếng; chính ông nói đã nghe từ **Milt Buckner** (pianist của dàn nhạc [[bo-go-phim|Lionel Hampton]]), người thường được xem là cha đẻ lối chơi này. Buckner sau này có các album *Locked Hands* (1968), *Block Chords Parade* (1974).
- **Red Garland** dùng hợp âm khối theo cách riêng: theo Piano With Jonny, hợp âm tay trái của ông **giữ nguyên** đến khi đổi hợp âm, thường không có nốt gốc, âm thanh sáng hơn lối của Shearing.
Xem thêm: [[nghe-si-piano-jazz]], [[dem-jazz]].

Dùng khi solo: [[ngau-hung-hop-am]].

## Locked hands nâng cao
- Giữ một khung hoà âm **I – V – I – V** dưới giai điệu; thay V7 bằng **hợp âm 7 giảm cách nốt gốc của V nửa cung** — trong Đô: G7 → **A♭°7** (A♭ – B – D – F), nghe như G7♭9 không gốc (xem [[hop-am-bay-giam]], [[hop-am-luot-jazz]]).
- Có thể **nâng một nốt** của hợp âm 7 giảm lên một cung (vẫn trong cùng [[am-giai-bat-cung|âm giai giảm]]) để có màu át biến hoá: A♭ – B – D – G, A♭ – C♯ – D – F.
- Thế bấm V phải có **[[not-dan-huong|nốt 3 và 7]]**, không có nốt 4 và nốt 7 trưởng ([[not-tranh-va-quang-nghich|nốt tránh]]); hợp âm I có thể là C6, Cmaj9…
- Được phá khuôn I – V – I – V khi giai điệu cần; "miễn là giữ được khung I – V – I – V bên dưới, nó sẽ nghe hay". Ví dụ: "Blue [[thelonious-monk|Monk]]".
::grand G4+A4+C5+E5/E4=C6 Ab4+B4+D5+F5/F4=A♭°7 A4+C5+E5+G5/G4=C6 | Minh hoạ: giai điệu E – F – G, hoà âm I – V – I; V được thay bằng A♭°7; tay trái nhân đôi giai điệu thấp một quãng 8

## Mẹo luyện tập
- Bắt đầu với một âm giai: hoà âm từng nốt của Đô trưởng đi xuống bằng four-way close, rồi locked hands, rồi drop 2.
- Rồi chọn một giai điệu chậm bạn thuộc, hoà âm bốn ô đầu bằng locked hands.
- Nghe George Shearing và Red Garland chơi hợp âm khối; để ý cách họ **giữ nhịp** dù hai tay khoá vào nhau.

## Câu hỏi và bài tập
1. Hoà âm giai điệu E – F – G – A trên C6 bằng locked hands (nốt lướt dùng hợp âm 7 giảm).
2. Chuyển bốn hợp âm vừa hoà âm sang drop 2.
3. Chơi một chorus blues ở Fa với giai điệu đơn giản bằng locked hands.
`,
  },
  {
    slug: 'the-bam-bac-thay-jazz',
    title: 'Thế bấm của các bậc thầy: Powell, Monk, Hancock',
    category: 'jazz',
    aliases: ['Bud Powell voicing', 'Powell voicing', 'Monk voicing', 'Thelonious Monk voicing', 'Hancock chord', 'hợp âm Hancock', 'thế bấm Powell', 'thế bấm Monk', 'shell Powell'],
    summary: 'Ba "chữ ký" xếp hợp âm của ba pianist jazz: thế bấm hai – ba nốt luôn có nốt gốc của Bud Powell (bebop), những cụm có quãng 2 thứ ở dưới của Thelonious Monk, và hợp âm sáu nốt Herbie Hancock dùng cho hợp âm thứ 7 khi giai điệu ở nốt 9.',
    wiki: 'Jazz_piano',
    refs: [
      ['Earl MacDonald — Left-hand shells', 'https://www.earlmacdonald.com/jazz-piano-lessons/left-hand-shells/'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
    ],
    body: `
Muốn có một thế bấm "riêng", cách nhanh nhất là bắt chước thế bấm của các bậc thầy — rồi dần dần đổi nó thành của mình. Ba người dưới đây đại diện cho ba cách nghĩ rất khác nhau: Bud Powell (thưa, rõ), Thelonious Monk (nghịch, góc cạnh), Herbie Hancock (dày, mở). Chơi từng ví dụ, rồi chơi lại cả một ii – V – I theo lối của từng người.

## Bud Powell: shell luôn có nốt gốc
[[bud-powell|Bud Powell]], pianist [[phong-cach-jazz|bebop]] hàng đầu thập niên 1940, dùng tay trái **thưa**: hai – ba nốt, **luôn có nốt gốc**, cộng nốt 3 **hoặc** nốt 7 (hoặc nốt 10 = nốt 3 cao một quãng 8). Vì bè trầm luôn là nốt gốc, tiến trình hợp âm nghe **rõ ràng**, còn hợp âm thưa thì không cản đường tay phải chạy giai điệu bebop.
::staff bass D3+C4=Dm7_(1–7) G2+B3=G7_(1–10) C3+B3=Cmaj7_(1–7) | ii – V – I kiểu Powell: nốt gốc + nốt 7, rồi nốt gốc + nốt 10, xen kẽ để tay trái ít di chuyển
Đây cũng là dạng [[xep-hop-am|shell voicing]] cơ bản nhất cho người mới học jazz.

## Thelonious Monk: quãng 2 thứ ở dưới
[[ngon-bam|Thế bấm]] của [[thelonious-monk|Monk]]: chỉ dùng **tay trái**, cố ý **nghịch**: một **quãng 2 thứ ở dưới** và một **quãng 3 ở trên**; đôi khi không có cả [[not-dan-huong|nốt dẫn hướng]] — chúng cho "màu" của giọng hơn là từng hợp âm. Trong Đô trưởng:
::staff bass B2+C3+E3=Cmaj7 E3+F3+A3=các_hợp_âm_khác | Hai thế bấm Monk trong Đô trưởng: B – C – E cho hợp âm chủ, E – F – A cho các hợp âm còn lại
Vì mỗi giọng chỉ có hai thế bấm, chúng có thể nghe lặp lại — chính tính "góc cạnh" đó là phong cách Monk.

## Herbie Hancock: hợp âm thứ 7 với nốt 9 ở giai điệu
Khi giai điệu ở **nốt 9** của một hợp âm m7, thử "hợp âm Hancock" sáu nốt. Trên **Dm7**: tay trái **D – A – F** (1 – 5 – ♭3), tay phải **G – C – E** (11 – ♭7 – 9).
::grand G4+C5+E5/D3+A3+F4=Dm11 | Hợp âm Hancock trên Dm7: tay trái D – A – F, tay phải G – C – E (nốt 9 là E ở trên cùng)
Tay phải là hai [[quang|quãng 4]] chồng lên nhau — gần với [[hoa-am-quang-bon|hợp âm quãng 4]] và hợp âm *So What* (E – A – D – G – B trên Em11) mà [[bill-evans|Bill Evans]] chơi trong "So What" (*[[jazz-dieu-thuc|Kind of Blue]]*, 1959).

Liên quan: [[nghe-si-piano-jazz]], [[dem-jazz]], [[hop-am-mo-rong]].

Thêm: [[hop-am-so-what-barron]] (Barron, anh em của Hancock), [[ket-hop-the-bam]].

## Mẹo luyện tập
- Chơi một chorus blues ở Fa ba lần: lần một tay trái kiểu Powell, lần hai kiểu Monk, lần ba bằng thế bấm Hancock cho các hợp âm thứ. Ghi âm và nghe lại: mỗi lối cho bài một tính cách khác hẳn.
- Nghe bản thu của chính họ. Không sách nào dạy được cách Monk **đặt** một hợp âm vào đúng chỗ lạ nhất trong ô nhịp.

## Câu hỏi và bài tập
1. Chơi ii – V – I ở B♭ kiểu Powell (gốc + 7, gốc + 10).
2. Dựng hai thế bấm Monk cho giọng Fa trưởng.
3. Dựng hợp âm Hancock cho Gm7 và Cm7.
`,
  },  {
    slug: 'ket-hop-the-bam',
    title: 'Kết hợp các thế bấm',
    category: 'jazz',
    aliases: ['combining chord voicings', 'kết hợp thế bấm', 'chọn thế bấm theo giai điệu', 'thế bấm theo nốt giai điệu'],
    summary: 'Cách Lamar hướng dẫn chọn thế bấm cho cả một bài: đi từng ô, ghi hợp âm và nốt giai điệu đầu tiên, chọn thế bấm đặt nốt giai điệu lên trên cùng (So What, Barron, Hancock, upper structure…), rồi nối các hợp âm với ít chuyển động nhất.',
    body: `
Bạn đã có cả một hộp đồ nghề: thế bấm ba nốt, không gốc, mở, So What, Hancock, Barron, upper structure, khối. Câu hỏi giờ là: **dùng cái nào, ở đâu?** Câu trả lời ngắn gọn: hãy để **nốt giai điệu** quyết định. Thế bấm phục vụ giai điệu, không phải ngược lại.

## Quy trình
1. Đi qua bài **từng [[so-chi-nhip|ô nhịp]]**.
2. Ghi **hợp âm** và **nốt giai điệu đầu tiên** của ô.
3. Với loại hợp âm đó, chọn một thế bấm **đặt nốt giai điệu lên trên cùng**.
4. Nếu chưa nghĩ ra thế bấm lý tưởng, đặt nốt giai điệu lên trên một thế bấm đơn giản ([[the-bam-ba-not]] hoặc [[the-bam-mo]]).
5. Chọn **âm vực** hợp với hợp âm, và nối các hợp âm với **ít nốt đổi nhất** ([[dan-giong]]).

## Bảng tra: hợp âm thứ 7 theo nốt giai điệu
| Nốt giai điệu trên Dm7 | Thế bấm gợi ý |
|---|---|
| 9 (E) | [[the-bam-bac-thay-jazz|Hancock]] — D A F / G C E |
| 11 (G) | [[hop-am-so-what-barron|Barron]] — D A E / F C G |
| 3 (F) hoặc 5 (A) | [[hop-am-so-what-barron|So What]] (D G / C F A), [[hoa-am-quang-bon|quãng 4]] |
| Nốt bất kỳ | Không gốc ([[xep-hop-am]]), mở, 3 nốt |
Với hợp âm át: [[upper-structure]] chọn theo [[hop-am-mo-rong|nốt căng]] ở giai điệu; với [[hop-am-bay|maj7]]: thế bấm mở hoặc không gốc.

## Ví dụ: một nốt đổi
Dm11 → G9 chỉ có **một nốt đổi, nửa cung**. Từ thế bấm Barron, hạ C xuống B:
::grand F4+C5+G5/D3+A3+E4=Dm11 F4+B4+G5/D3+A3+E4=G9/D | Minh hoạ: từ hợp âm Barron trên Dm11, chỉ đổi C → B là được G9 (trên bass D) — năm nốt kia giữ nguyên
(Thế bấm dựng theo mô tả; có thể bấm khác miễn giữ đúng nguyên tắc một nốt đổi nửa cung.)
Liên quan: [[quy-tac-xep-hop-am-jazz]], [[chon-the-bam-jazz]].

## Mẹo luyện tập
Chọn một bài chuẩn, viết ra cho mỗi ô: hợp âm, nốt giai điệu đầu ô, thế bấm bạn chọn. Tuần đầu làm trên giấy; tuần sau làm tại chỗ, không viết. Khi bạn chọn được thế bấm mà không cần dừng lại nghĩ, bạn đã có "tay" của người chơi jazz.

## Câu hỏi và bài tập
1. Giai điệu là G trên Dm7: chọn thế bấm nào? Là E thì sao?
2. Chọn thế bấm cho tám ô đầu một bài chuẩn theo quy trình năm bước.
3. Từ một thế bấm Barron trên Gm11, tìm thế bấm C9 chỉ đổi một nốt.
`,
  },
  {
    slug: 'quy-tac-xep-hop-am-jazz',
    title: 'Quy tắc xếp hợp âm jazz',
    category: 'jazz',
    aliases: ['chord voicing rules', 'quy tắc xếp hợp âm', 'quy tắc voicing', 'luật xếp hợp âm jazz', 'unavailable tension'],
    summary: 'Các quy tắc chung Lamar đưa ra để tự xếp một thế bấm: luôn có nốt 3 và 7; các quãng nhỏ hơn quãng 5 trừ quãng dưới cùng; quãng rộng ở dưới để khỏi đục; quãng nghịch ở giữa; không nhân đôi trừ nốt trên cùng; không tạo quãng 9 thứ với nốt 3 hoặc 7.',
    body: `
Sớm muộn gì bạn cũng muốn tự xếp một thế bấm, thay vì chỉ chép thế bấm của người khác. Dưới đây là những quy tắc giúp một chồng nốt nghe như **một hợp âm** chứ không phải một nắm phím. Đừng học thuộc lòng chúng như luật giao thông: chơi các ví dụ, nghe vì sao, và rồi tai bạn sẽ tự giữ luật.

## Các quy tắc
1. **Luôn có [[not-dan-huong|nốt 3 và 7]]** (với hợp âm không biến hoá); nốt gốc và nốt 5 tuỳ chọn; có thể thêm [[hop-am-mo-rong|nốt căng]] 9, 11, 13.
2. **Mọi quãng giữa hai nốt liền nhau nhỏ hơn quãng 5 đúng**, **trừ** quãng giữa hai nốt thấp nhất — để các nốt "dính" thành một hợp âm.
3. **Quãng rộng ở dưới, quãng hẹp ở trên** — giống [[chuoi-boi-am|chuỗi bồi âm]] tự nhiên.
4. **[[thuan-nghich|Quãng nghịch]] đặt ở giữa** thế bấm, không đặt ở trên cùng hay dưới cùng.
5. **Đừng chồng quá nhiều quãng 3** — nghe nhạt như sách giáo khoa.
6. **Không nhân đôi** nốt nào, trừ nốt trên cùng (giai điệu).
7. Trên **hợp âm át**, được tạo quãng **9 thứ** với nốt gốc hoặc nốt 5 (♭9, ♭13), **không** được với nốt 3 hay 7.

Thêm từ các bài khác: **giai điệu ở trên cùng**; nối hợp âm với **ít chuyển động nhất**; bè trên cùng đi chủ yếu **liền bậc** khi đệm.

## Nghe sự khác nhau
::grand B4/C3+E3+G3=đục E4+G4+B4/C3+B3=trong | Cmaj7: quãng 3 dày đặc ở vùng trầm nghe đục (trái); quãng 7 rộng ở dưới, quãng hẹp ở trên nghe trong (phải) — quy tắc 2 và 3
::grand B3+F4+C5/G2=sai B3+F4+Ab4/G2=đúng | G7: C5 tạo quãng 9 thứ với nốt 3 (B3) — tránh (trái); A♭ tạo quãng 9 thứ với nốt gốc G — được phép trên hợp âm át (phải, G7♭9) — quy tắc 7

## Luật để phá
Mọi quy tắc trên đều có người giỏi phá. Hợp âm át đã biến hoá thì nốt 3 và 7 bớt quan trọng; Bud Powell bấm át chỉ có gốc và 7 (xem [[nhung-ngo-nhan-trong-ly-thuyet-jazz]]); âm cụm phá luật "không quá nhiều quãng 2" một cách có chủ ý ([[am-cum]]). Học luật để biết khi nào mình đang phá nó, và vì sao.

Các quy tắc này là phiên bản "trên phím" của [[luat-hoa-am-bon-be|luật hoà âm bốn bè]] cổ điển (âm vực, khoảng cách, nhân đôi). Liên quan: [[xep-hop-am]], [[ket-hop-the-bam]], [[the-bam-mo]].

## Câu hỏi và bài tập
1. Xếp Fmaj9 theo đủ bảy quy tắc; rồi xếp một thế "sai" phạm quy tắc 3 và nghe.
2. Trên C7, nốt nào tạo quãng 9 thứ được phép? Nốt nào không?
3. Kiểm ba thế bấm bạn hay dùng theo bảng quy tắc.
`,
  },
  {
    slug: 'chon-the-bam-jazz',
    title: 'Chọn thế bấm theo phong cách',
    category: 'jazz',
    aliases: ['when to use voicings', 'chord voicings when to use', 'chọn thế bấm', 'thế bấm theo phong cách', 'secundal voicing'],
    summary: 'Thế bấm nào cũng có thể dùng bất cứ lúc nào, nhưng mỗi phong cách có thói quen riêng: shell cho bebop, hợp âm khối cho jazz sớm và stride, không gốc cho bossa nova và ballad, quãng 4 cho blues và jazz điệu thức, âm cụm cho ballad, boogie và free jazz.',
    body: `
Tiền đề đầu tiên, và quan trọng nhất: **thế bấm nào cũng dùng được bất cứ lúc nào**. Không có cảnh sát hoà âm nào bắt bạn vì chơi thế bấm quãng 4 trong một bài bebop. Chỉ là mỗi phong cách **ưa** một số thế bấm — và biết điều đó giúp bạn nghe "đúng chất" khi cần.

## Bảng tổng hợp
| Thế bấm | Phong cách hay dùng | Bài |
|---|---|---|
| Shell / Powell | [[phong-cach-jazz|Bebop]], ballad | [[the-bam-bac-thay-jazz]], [[xep-hop-am]] |
| Hợp âm khối | Jazz sớm, stride, gảy đều | [[stride-piano]], [[hop-am-khoi]] |
| Không gốc | Bossa nova, ballad | [[xep-hop-am]] |
| Mở (spread) | Ballad | [[the-bam-mo]] |
| Quãng 4 | [[blues-12-nhip|Blues]], [[jazz-dieu-thuc|jazz điệu thức]] | [[hoa-am-quang-bon]], [[hop-am-so-what-barron]] |
| Quãng 2 (âm cụm) | Ballad, boogie, [[post-bop-free-jazz|free jazz]] | [[am-cum]] |

## Gợi ý thêm
- **Shell / Powell**: đơn giản, thưa — hợp khi tay phải solo bebop nhanh.
- **Không gốc**: lối của [[bill-evans|Bill Evans]], nối [[ii-v-i|ii – V – I]] rất mượt.
- **Quãng 4 sáu nốt** cho hợp âm át: hợp với blues.
- **Drop 2 và locked hands**: cho giai điệu đi liền bậc ("Blue Bossa", "Fly Me to the Moon").
- **Hancock** (m7, giai điệu ở nốt 9) và **Barron** (giai điệu ở nốt 11) — xem [[ket-hop-the-bam]].
- **[[thelonious-monk|Monk]]**: hợp với những bài đổi giọng liên tục.
- Khi **đệm**: chơi ở âm vực khác người solo ([[dem-jazz]]).

## Câu hỏi và bài tập
1. Chơi cùng tám ô của một bài ba lần: kiểu bebop (shell), kiểu Bill Evans (không gốc), kiểu McCoy Tyner (quãng 4).
2. Bài nào bạn đang tập hợp với hợp âm khối? Thử một chorus.
3. Khi đệm cho một tay kèn đang solo ở âm vực cao, bạn đặt thế bấm ở đâu?
`,
  },

  {
    slug: 'dem-jazz',
    title: 'Đệm jazz (comping)',
    category: 'jazz',
    aliases: ['comping', 'đệm jazz', 'comp', 'đệm cho người solo', 'Charleston comping', 'nhịp Red Garland'],
    summary: 'Comping là đệm hợp âm và tiết tấu cho người độc tấu trong jazz: hỗ trợ hoà âm mà không lấn át, dùng hợp âm ngắn, khoảng lặng, âm vực khác người solo và dẫn giọng gần. Bài nêu các cách phân chia hai tay và các hình tiết tấu đệm cơ bản.',
    wiki: 'Comping_(jazz)',
    refs: [
      ['Wikipedia — Comping (jazz)', 'https://en.wikipedia.org/wiki/Comping_(jazz)'],
      ['Wikipedia — Charleston (1923 song)', 'https://en.wikipedia.org/wiki/Charleston_(1923_song)'],
      ['Piano With Jonny — Red Garland style', 'https://pianowithjonny.com/piano-lessons/how-to-play-in-the-style-of-red-garland/'],
    ],
    body: `
Khi người khác solo, việc của bạn là làm cho họ nghe hay hơn. Đó là toàn bộ nghề đệm. Người solo giỏi cần một người đệm biết **nghe**: biết khi nào đẩy, khi nào lùi, khi nào im. Chơi nhiều hợp âm đẹp mà không nghe thì chỉ là chen lấn.

**Comping** (từ *accompanying* hoặc *complementing*) là việc **đệm hợp âm và tiết tấu** cho người đang solo. Piano, guitar, bass và trống đều "comp". Khác với [[dem-hat-piano|đệm hát]] có kiểu đệm cố định, comping là một **cuộc đối thoại**: người đệm nghe người solo và phản ứng.

## Nguyên tắc
- Hỗ trợ người solo về hoà âm và tiết tấu, **không chen lấn**: khi solo dày đặc, đệm thưa lại; **im lặng cũng là đệm**.
- Dùng **hợp âm ngắn**, có khoảng nghỉ giữa các hợp âm.
- Chơi ở **âm vực khác** người solo.
- Nối hợp âm với **ít chuyển động nhất** — [[dan-giong|dẫn giọng]] gần, thường bằng [[xep-hop-am|thế bấm không gốc]].
- Nghe **Wynton Kelly**: một mẫu mực về đệm.

## Phân chia hai tay
| Cách | Tay trái | Tay phải | Khi nào |
|---|---|---|---|
| Đệm cho chính mình | [[bass-di-jazz|Bass đi]] | Hợp âm không gốc | Chơi một mình, không có bass |
| Đệm hai tay | Một nửa [[ngon-bam|thế bấm]] | Nửa còn lại ([[the-bam-mo|thế bấm mở]]) | Có bass, người khác solo |
| Solo | Hợp âm không gốc | Giai điệu, [[ngau-hung-jazz|ngẫu hứng]] | Khi chính mình solo |
Kỹ năng tối thiểu của người đệm: tay trái — bass đi, [[dem-hat-piano|stride]], nốt gốc, hợp âm đệm; tay phải — giai điệu, [[ii-v-i|nốt dẫn hướng]], [[ngau-hung-piano|ngẫu hứng]]; hai tay — thế bấm hai tay, [[hoa-am-quang-bon|hợp âm quãng 4]].

## Hình tiết tấu đệm
::rhythm 4/4 q. e rh // | Charleston: phách 1 và "&" của phách 2 — lấy từ bài "Charleston" (1923) của James P. Johnson, có lẽ là hình đệm nổi tiếng nhất
::rhythm 4/4 rq re e rq re e // | Đệm "đẩy" kiểu Red Garland: hợp âm ngắn ở "&" của phách 2 và "&" của phách 4, thường đã là hợp âm kế tiếp (đảo phách)
Hai hình trên là điểm xuất phát; người đệm giỏi thay đổi liên tục theo người solo (xem [[swing]], [[dao-phach]]).

## Lịch sử ngắn
Lối đệm "comping" thưa xuất hiện khoảng **thập niên 1940**, khi tay bass đảm nhận đường bass đi và tay trái piano không còn phải "bơm" phách như thời [[dem-hat-piano|stride]] (xem [[nghe-si-piano-jazz]], [[the-bam-bac-thay-jazz]]).

Thêm: [[dem-cho-ca-si]], [[jam-session]], [[stride-piano]].

## Nghe ví dụ

::youtube ylXk1LBvIqU | Miles Davis — *So What* (album *Kind of Blue*, 1959)

## Mẹo luyện tập
- Bật một bản thu, tắt tiếng piano nếu được (hoặc chọn bản không có piano), và đệm theo người solo. Thử phản ứng với câu của họ: họ dừng, bạn chen một hợp âm; họ chạy dày, bạn thưa.
- Ghi âm mình đệm; nghe lại xem có chỗ nào bạn che mất người solo.

## Câu hỏi và bài tập
1. Đệm một chorus blues ở B♭ chỉ bằng hình Charleston, thế bấm không gốc.
2. Đệm lại, lần này dùng hình "đẩy" kiểu Red Garland.
3. Đệm một chorus mà chỉ chơi tối đa tám hợp âm.
`,
  },
  {
    slug: 'bass-di-jazz',
    title: 'Bass đi (walking bass) trên piano',
    category: 'jazz',
    aliases: ['walking bass', 'đường bass đi', 'walking bassline', 'bass jazz tay trái'],
    summary: 'Bass đi là đường bè trầm nốt đen đều đặn (bốn nốt mỗi ô 4/4): nốt gốc ở phách 1, các nốt hợp âm hoặc âm giai ở giữa, và một nốt tiếp cận ở phách 4 dẫn vào hợp âm kế tiếp. Trên piano, tay trái chơi bass đi khi không có nhạc công bass.',
    wiki: 'Walking_bass',
    refs: [
      ['Wikipedia — Walking bass', 'https://en.wikipedia.org/wiki/Walking_bass'],
    ],
    body: `
Khi không có tay bass, bạn là tay bass. Một đường bass đi tốt là nửa cái swing của cả ban — và nghe thì đơn giản (bốn nốt đen mỗi ô), nhưng để nó "đi" chứ không "lê" thì cần biết vài nguyên tắc.

## Nguyên tắc
- **[[truong-do|Nốt đen]] đều**, bốn nốt mỗi [[so-chi-nhip|ô 4/4]], [[swing]].
- **Phách 1**: thường là **nốt gốc** của hợp âm; phách 1 và 3 quan trọng nhất vì hợp âm hay đổi ở đó.
- **Phách 2–3**: nốt hợp âm (3, 5) hoặc nốt của [[he-thong-hop-am-am-giai|âm giai]] — đi lên hoặc đi xuống tới gốc kế tiếp.
- **Phách 4**: **nốt tiếp cận** dẫn vào nốt gốc của hợp âm sau.

## Bốn kiểu nốt tiếp cận (tới C)
| Kiểu | Phách 4 | Ví dụ |
|---|---|---|
| [[am-giai-cromatic|Cromatic]] | Cách nửa cung (trên hoặc dưới) | D♭ → C hoặc B → C |
| Liền bậc | Bậc kề trong âm giai | D → C |
| Át | Nốt 5 của hợp âm đích | G → C |
| Bao vây | Hai nốt kẹp hai phía | D♭ – B → C |
Cùng ý tưởng này dùng cho giai điệu [[ngau-hung-piano|ngẫu hứng]] — xem [[not-tiep-can-jazz]].

::staff bass D3=Dm7 F3 A3 Ab3=tiếp_cận / G2=G7 B2 D3 Db3=tiếp_cận / C3=Cmaj7 | Một đường bass đi minh hoạ trên ii – V – I ở Đô trưởng: gốc ở phách 1, nốt hợp âm ở giữa, nốt tiếp cận cromatic (A♭, D♭) ở phách 4

## Luyện tập
- Tập **tay trái riêng** cho đến khi bass đi thật đều, rồi mới thêm hợp âm hoặc giai điệu ở tay phải (xem [[phoi-hop-hai-tay]]).
- Đổi hướng và đổi kiểu tiếp cận thường xuyên, trộn bước liền bậc với cromatic để đường bass "hát".
- Tập trên [[blues-12-nhip]] và [[ii-v-i]] trước, rồi [[rhythm-changes]].
Liên quan: [[dem-jazz]], [[dem-hat-piano]] ([[stride-piano|stride]], kiểu đệm cũ hơn).

## Câu hỏi và bài tập
1. Viết một đường bass đi cho ii – V – I ở Fa, mỗi hợp âm dùng một kiểu tiếp cận khác ở phách 4.
2. Chơi bass đi một chorus blues ở Fa, chỉ tay trái, máy đếm ở phách 2 và 4.
3. Thêm tay phải đệm thưa (hình Charleston) trên đường bass vừa chơi.
`,
  },  {
    slug: 'stride-piano',
    title: 'Stride piano',
    category: 'jazz',
    aliases: ['stride piano', 'stride', 'Harlem stride', 'reverse stride', 'oom-pah', 'Carolina Shout'],
    summary: 'Stride là lối tay trái của piano jazz Harlem thập niên 1920: nốt bass ở phách 1 và 3, hợp âm ở phách 2 và 4 ("bùm – chát"), tay trái nhảy xa liên tục. James P. Johnson là "cha đẻ" của stride; "Carolina Shout" (thu âm 1921) là một trong những bản solo piano jazz đầu tiên.',
    wiki: 'Stride_(music)',
    refs: [
      ['Wikipedia — Stride (music)', 'https://en.wikipedia.org/wiki/Stride_(music)'],
      ['Wikipedia — James P. Johnson', 'https://en.wikipedia.org/wiki/James_P._Johnson'],
      ['Wikipedia — Carolina Shout', 'https://en.wikipedia.org/wiki/Carolina_Shout'],
      ['Wikipedia — Fats Waller', 'https://en.wikipedia.org/wiki/Fats_Waller'],
      ['Wikipedia — Rent party', 'https://en.wikipedia.org/wiki/Rent_party'],
    ],
    body: `
Stride là lối chơi cho người muốn làm cả một ban nhạc chỉ với hai tay: tay trái vừa là bass vừa là hợp âm, tay phải lo giai điệu. Nó là ông bà của piano jazz — và cũng là bài tập tay trái tốt nhất bạn có thể tìm được. Cảnh báo trước: tay trái của bạn sẽ mỏi.

## Cấu tạo
Tay trái **xen kẽ nốt bass (phách 1 và 3) với hợp âm (phách 2 và 4)** — cảm giác "bùm – chát"; "**đơn giản về khái niệm nhưng khó về kỹ thuật**" (xem [[buoc-nhay-xa]]).
::grand /C3=1 /E3+G3+C4=2 /G2=3 /E3+G3+C4=4 | Tay trái stride trên C: nốt gốc (phách 1), hợp âm (phách 2), nốt 5 thấp (phách 3), hợp âm (phách 4)
::rhythm 2/4 q:bùm q:chát / q:bùm q:chát // | Nhịp "bùm – chát": bass ở phách mạnh, hợp âm ở phách nhẹ
Nốt bass có thể là nốt đơn, [[quang|quãng 8]] hoặc **quãng 10** (rải nhanh). Kiểu đệm cơ bản: [[dem-hat-piano]].

## Biến thể
- **Stride ngược**: hợp âm – bass – hợp âm – bass.
- Trộn với [[bass-di-jazz|bass đi]].
- Hai nốt bass hoặc hai hợp âm liền nhau; **đón trước** nốt bass hoặc hợp âm (xem [[dao-phach]]).

## Cho người mới
Giảm bước nhảy và độ phức tạp của hợp âm — dùng **quãng 10 rải** và [[not-dan-huong|nốt dẫn hướng]] (trên G7: G rồi F + B). Bắt đầu với một bài nhiều ii – V như "Satin Doll".

## Lịch sử
- Stride phát triển từ [[dao-phach|ragtime]] ở **Harlem thập niên 1920**; các nghệ sĩ piano độc tấu được thuê chơi ở những "**rent party**" (tiệc góp tiền thuê nhà).
- **[[james-p-johnson|James P. Johnson]]** (1894–1955) được gọi là "cha đẻ của stride". "**Carolina Shout**" (viết khoảng 1918, thu âm ngày 18/10/1921) là một trong những bản solo piano jazz đầu tiên được ghi âm; [[duke-ellington|Ellington]] học bài này từ cuộn piano.
- **[[fats-waller|Fats Waller]]** học Johnson; "Handful of Keys" (1929) thành bài thi tài trong các cuộc "đấu đàn" cùng "Carolina Shout".
- Những tên tuổi khác: Willie "The Lion" Smith, Luckey Roberts, Eubie Blake, Teddy Wilson, [[art-tatum|Art Tatum]] (người dần chuyển sang lối tay trái tự do hơn).
Xem thêm: [[nghe-si-piano-jazz]], [[chon-the-bam-jazz]].

## Mẹo luyện tập
- Tập tay trái riêng, **chậm**, nhìn ít nhất có thể: mắt nhìn phím, tay sẽ mãi phụ thuộc vào mắt.
- Bước nhảy xa là điểm khó: tập chỉ hai vị trí (nốt bass, hợp âm), nhảy qua lại trong khi đếm, rồi mới thêm tiết tấu.

## Câu hỏi và bài tập
1. Chơi tay trái stride trên C – A7 – D7 – G7, mỗi hợp âm một ô.
2. Chơi "Satin Doll" (tám ô đầu) với tay trái stride giản lược: quãng 10 rải và nốt dẫn hướng.
3. Nghe "Carolina Shout" của James P. Johnson; đếm phách mà tay trái đánh bass.
`,
  },
  {
    slug: 'dem-cho-ca-si',
    title: 'Đệm cho ca sĩ trong jazz',
    category: 'jazz',
    aliases: ['comp for a vocalist', 'đệm cho ca sĩ', 'comping vocalist', 'đệm hát jazz'],
    summary: 'Đệm cho ca sĩ khác đệm cho nhạc công: giọng hát không có cao độ cố định nên ca sĩ dựa vào hoà âm để tìm nốt. Nguyên tắc: hoà âm đơn giản, đôi khi đặt giai điệu trên cùng, nhịp đều để ca sĩ tự do co giãn, chơi nhỏ hơn và tránh âm vực của ca sĩ, lấp chỗ trống khi ca sĩ nghỉ.',
    body: `
Đệm cho ca sĩ là một nghề riêng, và nhiều tay piano giỏi lại làm dở. Lý do: họ chơi như khi đệm cho kèn. Ca sĩ thì khác — họ không có phím, không có lỗ bấm; họ tìm nốt bằng tai, dựa vào chính hoà âm của bạn. Nếu bạn làm hoà âm mơ hồ, bạn đang kéo thảm dưới chân họ.

## Vai trò
**ca sĩ giữ giai điệu**, người đệm giữ **tiết tấu và hoà âm**. Khác với nhạc cụ có phím, **giọng hát không có cao độ cố định** — ca sĩ dựa vào hoà âm của bạn để tìm nốt.

## Nguyên tắc
- **Hoà âm đơn giản**: [[hop-am-bay|hợp âm 7]] xếp chồng quãng 3; tránh những thế bấm dày, mơ hồ như [[hoa-am-quang-bon|quãng 4]] có thể làm ca sĩ lạc giọng.
- **Điểm tựa**: thỉnh thoảng đặt **nốt giai điệu lên trên cùng** thế bấm; giữ [[bass-di-jazz|bass đi]] đều — [[kiem-soat-toc-do|nhịp đều]] phía sau giúp ca sĩ **tự do co giãn** câu hát (xem [[rubato]]).
- **Âm lượng và âm vực**: chơi **nhỏ hơn** ca sĩ, **tránh âm vực** của họ — ví dụ với giọng soprano, bass ở thấp, hợp âm ở giữa.
- **Tương tác**: ca sĩ hát dày thì đệm thưa; ca sĩ nghỉ thì **lấp chỗ trống** bằng một câu ngắn; để lại khoảng lặng.
- **Thoả thuận trước** với ca sĩ về **giọng**, phong cách và nhịp độ — nhiều khi phải [[dich-giong|dịch giọng]] bài cho hợp tầm cữ của họ ([[cao-do|âm vực, tầm cữ]]).

## Thường gặp trong thực tế
Về phần [[prelude-ung-tac|dạo đầu]] và kết, cách làm phổ biến (kinh nghiệm chung, không phải quy tắc) là dùng vài ô cuối bài hoặc một [[turnaround-jazz|turnaround]] làm dạo đầu, kết dạo đầu ở hợp âm V7 để ca sĩ dễ bắt nốt đầu tiên.
Liên quan: [[dem-hat-piano]] (đệm hát nói chung), [[dem-jazz]].

## Câu hỏi và bài tập
1. Dạo đầu bốn ô cho một bài ở Fa trưởng, kết ở C7 với nốt đầu của giai điệu ở trên cùng.
2. Đệm một bài hát chậm với một người bạn hát; ghi âm và nghe xem bạn có lấn giọng không.
3. Dịch một bài từ Fa sang Mi giáng cho giọng thấp hơn.
`,
  },
  {
    slug: 'jam-session',
    title: 'Jam session',
    category: 'jazz',
    aliases: ['jam session', 'jam', 'buổi jam', 'chơi jam', "Minton's Playhouse", 'cutting session'],
    summary: "Jam session là buổi các nhạc công jazz tụ họp chơi ngẫu hứng các bài chuẩn mà không tập trước. Bài nêu những gì pianist cần chuẩn bị và cách cư xử trên sân khấu, cùng lịch sử: các jam ở Minton's Playhouse đầu thập niên 1940 là nơi bebop ra đời.",
    wiki: 'Jam_session',
    refs: [
      ["Wikipedia — Minton's Playhouse", 'https://en.wikipedia.org/wiki/Minton%27s_Playhouse'],
      ["Wikipedia — Midnight at Minton's", 'https://en.wikipedia.org/wiki/Midnight_at_Minton%27s'],
      ['Wikipedia — Jazz education', 'https://en.wikipedia.org/wiki/Jazz_education'],
      ['Elon University Jazz Studies — jam session etiquette', 'https://www.elon.edu/u/academics/arts-and-sciences/jazz-studies/?p=1719'],
    ],
    body: `
Buổi jam đầu tiên của bạn sẽ đáng sợ. Buổi thứ năm thì vui. Và buổi thứ hai mươi, bạn sẽ học được điều mà không sách nào dạy nổi: nghe người khác và phản ứng ngay lập tức. Đây là những gì nên biết để buổi đầu bớt sợ.

## Pianist cần chuẩn bị gì?
- Xin **danh sách bài** của buổi jam trước và học các bài đó.
- Mọi buổi jam đều nên có ít nhất một bài **[[rhythm-changes]]** — tập nó ở mọi giọng.
- Vai trò: bạn **đệm hợp âm** ([[dem-jazz]]) và sẽ được **solo**; nếu không có bass, bạn chơi cả [[bass-di-jazz|đường bass]].

## Trên sân khấu
- **Âm vực**: tránh vùng trầm khi đã có [[double-bass|contrabass]]; tránh âm vực của ca sĩ ([[dem-cho-ca-si]]).
- **Lắng nghe người solo**: họ lên cao thì mình xuống thấp, họ nhỏ thì mình nhỏ, đáp lại câu của họ như [[ngau-hung-piano|hỏi – đáp]].
- **Đổi bốn** (trading fours): những người solo lần lượt chơi 4 ô xen với trống, theo thứ tự solo ban đầu, cho đến hết vòng; báo hiệu quay về giai điệu bằng ánh mắt và bằng chính cách chơi; không muốn solo thì báo trước (theo hướng dẫn của Elon University).
- Giữ solo **ngắn** trong buổi jam đông người.
Cấu trúc chung của một lượt chơi ([[hinh-thuc-ca-khuc-32|head]] – solo – head): [[ngau-hung-jazz]].

## Lịch sử: Minton's Playhouse
- Đầu thập niên 1940, câu lạc bộ **Minton's Playhouse** (Harlem) do Teddy Hill quản lý tổ chức jam thường xuyên. Ở đây [[thelonious-monk|Monk]], [[bud-powell|Bud Powell]], tay trống Kenny Clarke, Charlie Christian, Charlie Parker, Dizzy Gillespie đã phát triển **[[phong-cach-jazz|bebop]]**.
- Các buổi jam nổi tiếng với **nhịp độ nhanh, giọng lạ, hoà âm bất ngờ** để "loại" người chơi yếu (*cutting session*).
- Album trực tiếp *Midnight at Minton's* (Jerry Newman thu năm 1941) có một trong những bản thu sớm nhất của Monk.
- Trong nửa đầu [[thoi-ky-the-ky-20|thế kỷ 20]], jam session là **hình thức học jazz chính** — trước khi có trường lớp (xem nghiên cứu của Berliner trong [[ngau-hung-jazz]]).

## Câu hỏi và bài tập
1. Thuộc năm bài hay gặp ở buổi jam nơi bạn ở; chơi được mỗi bài ở hai giọng.
2. Tập "đổi bốn" với một bản phát đệm: bốn ô bạn solo, bốn ô để trống.
3. Thuộc rhythm changes ở B♭ đủ để đệm và solo không cần nhìn.
`,
  },


  {
    slug: 'hoa-am-quang-bon',
    title: 'Hoà âm quãng 4',
    category: 'jazz',
    aliases: ['quartal harmony', 'hợp âm quãng 4', 'quartal voicing', 'hợp âm quãng 5', 'quintal'],
    summary: 'Hợp âm xây bằng các quãng 4 chồng lên nhau thay vì quãng 3 — âm thanh mở, lơ lửng của jazz modal và nhạc thế kỷ 20.',
    wiki: 'Quartal_and_quintal_harmony',
    refs: [
      ['Wikipedia — Quartal and quintal harmony', 'https://en.wikipedia.org/wiki/Quartal_and_quintal_harmony'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
      ['PianoGroove — So What chord voicing', 'https://pianogroove.com/jazz-piano-lessons/so-what-chord-voicing/'],
    ],
    body: `
Mọi hợp âm bạn học tới giờ đều chồng **quãng 3**. Thử bấm D – G – C – F — chồng **quãng 4**. Nghe chưa? Không trưởng, không thứ, không "kéo" về đâu cả; chỉ lơ lửng, thoáng, hơi xa xăm. Đó là âm thanh của jazz đầu thập niên 1960, và bạn sẽ nhận ra nó ngay khi nghe McCoy Tyner.

[[he-thong-hoa-am-co-dien|Hoà âm truyền thống]] chồng [[quang|quãng 3]] ([[hop-am-ba]]). Hoà âm quãng 4 chồng **quãng 4 đúng**: D – G – C – F.

::keyboard D4 G4 C5 F5 | Hợp âm quãng 4 trên D

## Đặc điểm
- Không rõ trưởng hay thứ; không có lực kéo [[chuc-nang-hoa-am|chức năng]] mạnh → hợp với nhạc **điệu thức** ([[dieu-thuc]]).
- Có thể **dịch song song** theo các nốt của [[am-giai|âm giai]] mà vẫn hợp — trong D Dorian: D–G–C, E–A–D, G–C–F, A–D–G… Thử ngay: tay phải trượt các khối này lên xuống trên một nốt D giữ ở bass.

## Hợp âm "So What"
Ba quãng 4 + một quãng 3 trưởng ở trên: **E – A – D – G – B**. Đặt tên theo bài "So What" (Miles Davis, album *Kind of Blue*, 1959): [[bill-evans|Bill Evans]] dùng nó trong hình đáp "amen" sau mỗi câu [[giai-dieu|giai điệu]]. Còn gọi là "Bill Evans voicing" hoặc "Dorian voicing". Vì là sự pha trộn giữa quãng 4 và quãng 3, hợp âm này **đa nghĩa**: cùng một khối có thể đặt lên nhiều hợp âm khác nhau, và rất hợp để [[hoa-am-song-song|dịch song song]].

::keyboard E4 A4 D5 G5 B5 | Hợp âm So What trên E (Em11, thiếu nốt 9)

## Ứng dụng
- Jazz modal: **[[mccoy-tyner|McCoy Tyner]]** nổi tiếng với các khối quãng 4 thuần (ví dụ phần đệm của ông trong "Impressions" của John Coltrane); [[herbie-hancock|Herbie Hancock]].
- Nhạc cổ điển [[thoi-ky-the-ky-20|thế kỷ 20]]: [[alexander-scriabin|Scriabin]] (hợp âm "huyền bí"), [[paul-hindemith|Hindemith]], [[bela-bartok|Bartók]] (xem [[cac-thoi-ky]]).
- Đảo một chồng quãng 4 sẽ thành quãng 5 (**hoà âm quãng 5**, xem [[quang-dao]]).

Liên quan: [[xep-hop-am]], [[an-tuong]].

Bối cảnh: [[jazz-dieu-thuc]], [[the-bam-bac-thay-jazz]].

Hợp âm So What chi tiết: [[hop-am-so-what-barron]].

## Mẹo luyện tập
- Trượt hợp âm ba nốt quãng 4 song song trong Rê Dorian (chỉ phím trắng), tay trái giữ D ở bass. Có vài khối không phải toàn quãng 4 đúng (chỗ có B – F): cứ để nguyên nốt của điệu thức.
- Ứng tác tay phải bằng chính các quãng 4: nhảy quãng 4 cũng là một màu giai điệu đặc trưng của lối McCoy Tyner.

## Câu hỏi và bài tập
1. Dựng hợp âm quãng 4 ba nốt trên mọi bậc của Rê Dorian.
2. Dựng hợp âm So What trên A và gọi tên các nốt so với Am7.
3. Đệm hai chorus "So What"-kiểu trên vamp Rê Dorian bằng các khối quãng 4.
`,
  },
  {
    slug: 'thay-the-hop-am',
    title: 'Thay thế hợp âm',
    category: 'jazz',
    aliases: ['chord substitution', 'hợp âm thay thế', 'thay hợp âm jazz', 'backdoor', 'backdoor progression', 'backdoor ii-V', 'iv7-bVII7-I', 'thay thế diatonic', 'diatonic substitution', 'ii phụ', 'related ii', 'hợp âm giảm lướt', 'passing diminished'],
    summary: 'Các cách thay một hợp âm bằng hợp âm khác mà vẫn giữ (hoặc làm giàu) chức năng: thay cùng chức năng, át phụ và ii phụ, hợp âm mượn, thay thế tritone, backdoor, hợp âm 7 giảm lướt.',
    wiki: 'Chord_substitution',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Open Music Theory 2e — Substitutions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Open Music Theory 2e — Jazz (applied ii chords, CT°7)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz'],
      ['Wikipedia — Chord substitution', 'https://en.wikipedia.org/wiki/Chord_substitution'],
      ['Wikipedia — Backdoor progression', 'https://en.wikipedia.org/wiki/Backdoor_progression'],
      ['Anton Schwartz — The backdoor ii-V progression', 'https://antonjazz.com/2012/01/backdoor-ii-v-progression/'],
    ],
    body: `
Đây là chỗ jazz bắt đầu khác hẳn mọi thứ nhạc khác: hợp âm trên giấy **không phải là luật**. Người chơi jazz đổi chúng ngay khi chơi — thay một hợp âm bằng hợp âm khác cùng chức năng, chèn thêm hợp âm, biến hợp âm thứ thành át. Nghe có vẻ liều, nhưng mọi phép thay đều có lý do, và bài này đưa bạn bảy lý do quen thuộc nhất. Chơi từng ví dụ, rồi tự hỏi: mình thích bản gốc hay bản thay?

**Thay thế** là đổi **một** [[hop-am-ba|hợp âm]]; [[tai-hoa-am|tái hoà âm]] là áp nhiều phép thay thế lên **cả** một tiến trình. Trong jazz, người chơi thay thế ngay khi biểu diễn — nên cần hiểu **vì sao** mỗi phép thay hoạt động.

## 1. Thay cùng chức năng (diatonic)
Hợp âm cùng [[chuc-nang-hoa-am|nhóm chức năng]] chung nhiều nốt nên thay được cho nhau:
- **Chủ**: Imaj7 ↔ iii7 ↔ vi7 (Cmaj7, Em7, Am7).
- **Tiền át**: IV ↔ ii7 (Fmaj7, Dm7).
- **Át**: V7 ↔ viiø7 (G7, Bø7).

## 2. Át phụ và ii phụ
- Vì gốc đi theo [[quang|quãng]] 5 rất thường gặp, có thể biến **hợp âm thứ nhất** trong một cặp quãng 5 thành **[[hop-am-bay|hợp âm 7 át]] cùng gốc**: Am7 – Dm7 → **A7** – Dm7 (xem [[hop-am-at-phu]]).
- Rồi thêm **ii phụ** trước át phụ đó: **Em7 – A7** – Dm7 — tạo một [[ii-v-i]] nhỏ hướng về Dm7.

## 3. Hợp âm mượn
Mượn từ [[am-giai-thu|giọng thứ]] cùng tên, phổ biến nhất trong jazz là **iiø7 thay ii7** và **V7♭9 thay V7** (Open Music Theory). Xem [[hop-am-muon]], [[hop-am-at-bien-hoa]].

## 4. Thay thế tritone
Thay V7 bằng hợp âm 7 át cách nó một tritone (G7 → D♭7) — hai hợp âm chung tritone B – F. Chi tiết: [[thay-the-tritone]].

## 5. Backdoor (cửa sau)
**iv7 – ♭VII7 – I**: trong Đô trưởng **Fm7 – B♭7 – Cmaj7**. Tên gọi do Jerry Coker đặt: nếu ii – V – I là "cửa trước" thì đây là "cửa sau".
- B♭7 mượn từ giọng thứ cùng tên; A♭ và F của nó đi xuống [[cung-nua-cung|nửa cung]] tới G và E của hợp âm chủ.
::staff treble F4+Ab4+C5+Eb5=Fm7 F4+Ab4+Bb4+D5=B♭7 E4+G4+B4+C5=Cmaj7 | Backdoor ở Đô trưởng: A♭ và F của B♭7 đi xuống nửa cung tới G và E
- Ví dụ trong standard: "Yardbird [[the-loai|Suite]]" (ô 2–3: Fm7 – B♭7 – Cmaj7), "How Deep Is the Ocean", "Lady Bird", "Misty".
- Hợp âm 7 át của backdoor thường mang ♯11 ([[hop-am-at-bien-hoa|Lydian át]]).

## 6. Hợp âm 7 giảm
- **Giảm lướt đi lên**: C – **C♯°7** – Dm7: bè trầm đi lên [[am-giai-cromatic|cromatic]]. C♯°7 chính là vii°7/ii — một át phụ của Dm7 (xem [[hop-am-cam-am]]).
::staff bass C3+E3+G3=C C#3+E3+G3+Bb3=C♯°7 D3+F3+A3+C4=Dm7 | Hợp âm 7 giảm lướt: bè trầm C – C♯ – D đi lên cromatic
- **Giảm nốt chung**: Cmaj7 – **C°7** (CT°7) – Cmaj7: nốt chung C giữ nguyên, các bè thêu quanh — Open Music Theory xếp đây là một kỹ thuật thêm hợp âm chính của jazz (xem [[hop-am-not-chung]]).

## 7. Thay thế bằng ii – V
Một [[ii-v-i|ii – V]] tạo cảm giác **kết thúc mạnh dù dẫn về hợp âm nào**, miễn là [[dan-giong|dẫn giọng]] mượt — ii – V – vi hay ii – V – IV vẫn "chắc". Vì vậy có thể chèn ii – V trước gần như mọi hợp âm đích. Các cách thay cho G7: **Dm7 – G7**, dài hơn là **Em7 – A7 | Dm7 – G7** (ii – V của ii – V).
Bốn cách đi vào Cmaj7:
| Tên | Trong Đô trưởng | Giải thích |
|---|---|---|
| ii – V thường | Dm7 – G7 → Cmaj7 | |
| "Cửa trước" (frontdoor) | Bm7♭5 – E7 → Cmaj7 | ii – V của **Am7**, nhưng giải quyết về Cmaj7 (Am7 là hợp âm thay cùng chức năng của Cmaj7) |
| Cửa sau (backdoor) | Fm7 – B♭7 → Cmaj7 | **Thay thế tritone của cửa trước** (E7 → B♭7) — xem mục 5 |
| ii – V tritone | A♭m7 – D♭7 → Cmaj7 | Cả cặp ii – V dời đi một tritone (cách ghi phổ biến) |
::staff treble D4+F4+A4+C5=Dm7 D4+F4+G4+B4=G7 E4+G4+B4+C5=Cmaj7 / D4+F4+A4+B4=Bm7♭5 D4+E4+G#4+B4=E7 E4+G4+B4+C5=Cmaj7 / C4+F4+Ab4+Eb5=Fm7 D4+F4+Ab4+Bb4=B♭7 E4+G4+B4+C5=Cmaj7 / Cb4+Eb4+Gb4+Ab4=A♭m7 Cb4+Db4+F4+Ab4=D♭7 C4+E4+G4+B4=Cmaj7 | Bốn đường ii – V về Cmaj7 (thế bấm hẹp, chỉ để so sánh nốt)
Tóm lại: các tiến trình này đều là **một ii – V hoặc thay thế tritone của một ii – V**, dẫn về I hoặc về một hợp âm thay cùng chức năng của I. Chuỗi ii – V nối nhau: [[phan-tich-tien-trinh-jazz]].

## Điều kiện để thay thế
Nốt [[giai-dieu|giai điệu]] ở chỗ quan trọng phải là **nốt hợp âm** hoặc **[[hop-am-mo-rong|nốt căng]] hợp lý** của hợp âm mới. Nếu va chạm nửa cung với nốt 3 hoặc 7 của hợp âm mới, hãy chọn phép thay khác.

Thêm: [[hop-am-luot-jazz]], [[constant-structures]].

## Mẹo luyện tập
- Chọn **một** phép thay mỗi tuần và dùng nó ở **mọi chỗ có thể** trong một bài. Dùng quá đà có chủ ý là cách nhanh nhất để biết phép thay đó nghe hay ở đâu, dở ở đâu.
- Luôn kiểm **nốt giai điệu**: phép thay hay mấy mà chỏi với giai điệu thì phải đổi (hoặc đổi chính giai điệu — xem [[ket-lua-va-tiep-can-hop-am]]).

## Câu hỏi và bài tập
1. Viết năm cách thay cho G7 trong ii – V – I ở Đô.
2. Thay mọi hợp âm V trong tám ô đầu một bài chuẩn bằng ii – V.
3. Chơi backdoor (Fm7 – B♭7 – Cmaj7) rồi ii – V gốc; nghe khác nhau thế nào?
`,
  },  {
    slug: 'hop-am-luot-jazz',
    title: 'Hợp âm lướt và hợp âm tiếp cận trong jazz',
    category: 'jazz',
    aliases: ['passing chord', 'approach chord', 'hợp âm lướt jazz', 'hợp âm tiếp cận', 'hợp âm 7 giảm lướt', 'diminished passing chord'],
    summary: 'Hợp âm lướt là hợp âm ngắn chen giữa hai hợp âm chính, tự nó không quan trọng về hoà âm; hợp âm tiếp cận là hợp âm lướt cách hợp âm đích nửa cung hoặc một cung. Bài nêu các dạng thường gặp: hợp âm 7 giảm lướt, hợp âm tiếp cận cromatic và át phụ.',
    body: `
Có những hợp âm không đi đâu cả. Chúng chỉ ghé qua trên đường từ hợp âm này sang hợp âm khác, để con đường bớt phẳng. Đó là **hợp âm lướt** — họ hàng của nốt lướt, nhưng ở cấp hợp âm. Chúng thường ngắn (một phách, hai phách) và thường đi liền bậc hoặc cromatic.

## Định nghĩa
- **Hợp âm lướt** (passing chord): hợp âm **ngắn** (thường một phách hoặc nửa ô) chen giữa hai hợp âm quan trọng; nó **không** có vai trò hoà âm riêng — giống [[not-ngoai-hop-am|nốt lướt]] nhưng ở cấp hợp âm.
- **Hợp âm tiếp cận** (approach chord): hợp âm lướt cách hợp âm đích **nửa cung** (cromatic) hoặc **một cung** (diatonic).
Cùng một hợp âm có thể được phân tích theo nhiều cách — hợp âm lướt, át phụ hay thay thế — tuỳ ngữ cảnh.

## Ba dạng thường gặp
**1. Hợp âm 7 giảm lướt** — bè trầm đi cromatic giữa hai hợp âm:
::staff treble C4+E4+G4+B4=Cmaj7 C#4+E4+G4+Bb4=C♯°7 D4+F4+A4+C5=Dm7 | Cmaj7 – C♯°7 – Dm7: hợp âm 7 giảm lấp khoảng giữa hai bậc (xem [[hop-am-bay-giam]])
Chỉ có **ba** hợp âm 7 giảm khác nhau (C°7 = E♭°7 = G♭°7 = A°7 về cao độ) — vì vậy chúng linh hoạt (xem [[am-giai-bat-cung]]).

**2. Hợp âm tiếp cận cromatic** — từ trên hoặc dưới nửa cung, thường cùng loại với hợp âm đích:
::staff treble Db4+F4+Ab4+Cb5=D♭7 C4+E4+G4+B4=Cmaj7 | D♭7 → Cmaj7: hợp âm tiếp cận nửa cung từ trên — cũng chính là [[thay-the-tritone|thay thế tritone]] của G7

**3. Át phụ làm hợp âm tiếp cận** — chen V7 của hợp âm đích ngay trước nó (A7 → Dm7), xem [[hop-am-at-phu]] và [[thay-the-hop-am]].

## Trong locked hands và đệm
Khi hoà âm từng nốt giai điệu bằng [[hop-am-khoi|hợp âm khối]], các nốt không thuộc hợp âm thường được hoà âm bằng hợp âm 7 giảm lướt. Trong gospel – jazz, các hợp âm giảm lướt như C7 → F°7 → Fmaj7 được dùng để **trì hoãn** sự giải quyết.
Liên quan: [[tai-hoa-am]], [[dem-jazz]].

## Câu hỏi và bài tập
1. Chèn hợp âm 7 giảm lướt giữa Cmaj7 và Dm7; giữa Fmaj7 và Gm7.
2. Chơi Cmaj7 – C♯°7 – Dm7 – D♯°7 – Em7: bè trầm đi lên cromatic.
3. Thử hợp âm lướt cromatic song song (cùng loại, cách nửa cung) trước một hợp âm đích.
`,
  },

  {
    slug: 'tai-hoa-am',
    title: 'Tái hoà âm',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['reharmonization', 'reharm', 'đổi hợp âm', 'thay hợp âm', 'hợp âm thay thế diatonic'],
    summary: 'Thay đổi hợp âm dưới một giai điệu có sẵn để tạo màu sắc mới, mà giai điệu vẫn giữ nguyên.',
    wiki: 'Reharmonization',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Open Music Theory 2e — Substitutions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Wikipedia — Reharmonization', 'https://en.wikipedia.org/wiki/Reharmonization'],
      ['Learn Jazz Standards — 10 jazz reharmonization techniques', 'https://www.learnjazzstandards.com/blog/jazz-reharmonization-techniques/'],
    ],
    body: `
Tái hoà âm là lúc bạn ngừng chỉ **chơi** một bài chuẩn và bắt đầu **làm nó thành của mình**. Cùng một giai điệu, đổi hợp âm bên dưới, và bài cũ nghe như mới. Bài này đi từ những phép đổi nhẹ nhất tới những phép làm bài gần như thay da; hai chương [[tai-hoa-am-nang-cao]] và [[ket-lua-va-tiep-can-hop-am]] đi tiếp xa hơn.

Nguyên tắc: nốt [[giai-dieu|giai điệu]] ở chỗ quan trọng ([[so-chi-nhip|phách mạnh]], nốt dài) phải là nốt của [[hop-am-ba|hợp âm]] mới, hoặc một [[hop-am-mo-rong|nốt mở rộng]] hợp lý.

## Các kỹ thuật (từ nhẹ đến mạnh)
| Kỹ thuật | Ví dụ (trong Đô trưởng) | Bài liên quan |
|---|---|---|
| Thay bằng hợp âm cùng chức năng | C → Am hoặc Em; F → Dm | [[chuc-nang-hoa-am]] |
| Thêm nốt 7, 9, 13 | C → Cmaj9 | [[hop-am-mo-rong]] |
| Chèn ii – V trước hợp âm đích | … → Em7 – A7 → Dm | [[hop-am-at-phu]] |
| Thay thế tritone | G7 → D♭7 | [[thay-the-tritone]] |
| Backdoor | G7 → Fm7 – B♭7 | [[thay-the-hop-am]] |
| Vòng Coltrane | Chia đường về chủ thành các chặng [[quang|quãng]] 3 trưởng | [[vong-coltrane]] |
| Mượn từ [[giong-song-song|giọng cùng tên]] | F → Fm | [[hop-am-muon]] |
| [[hop-am-luot-jazz|Hợp âm 7 giảm lướt]] | C – C♯°7 – Dm7 | [[hop-am-bay-giam]] |
| Bass ngân | Mọi hợp âm trên G | [[bass-ngan]] |
| Trung âm cromatic | C → A♭[[hop-am-bay|maj7]] | [[trung-am-cromatic]] |
| Bè trầm [[am-giai-cromatic|cromatic]] đi xuống | C – C/B – C/B♭ – A7 | [[dan-giong]] |

## Ví dụ từng bước
Giai điệu 4 ô: **E – F – B – C** (mỗi ô một nốt dài), hoà âm gốc **C – F – G7 – C**.
::grand E5/C3=C F5/F2=F B4/G2=G7 C5/C3=C | Hoà âm gốc: giai điệu E – F – B – C trên bè trầm C – F – G – C
| Bước | Ô 1 (E) | Ô 2 (F) | Ô 3 (B) | Ô 4 (C) | Nốt giai điệu so với hợp âm mới |
|---|---|---|---|---|---|
| Gốc | C | F | G7 | C | 3, gốc, 3, gốc |
| 1. Thêm 7 | Cmaj7 | Fmaj7 | G7 | Cmaj7 | 3, gốc, 3, gốc |
| 2. Cùng chức năng | Am7 | Dm7 | G7 | Cmaj7 | 5, 3, 3, gốc |
| 3. Thay thế tritone | Am7 | Dm7 | D♭7 | Cmaj7 | 5, 3, **7** (C♭ = B), gốc |
Ở mỗi bước, kiểm tra nốt giai điệu vẫn là nốt hợp âm hoặc nốt căng hợp lý của hợp âm mới. Bước 3 tạo bè trầm A – D – D♭ – C đi xuống mượt.
::grand E5/A2=Am7 F5/D3=Dm7 B4/Db3=D♭7 C5/C3=Cmaj7 | Sau bước 3: cùng giai điệu, bè trầm A – D – D♭ – C đi xuống mượt

## Tái hoà âm trong biểu diễn
Nhiều phép thay thế được dùng **ngay khi chơi**, nên người đệm và người độc tấu phải nghe nhau: nếu piano thay G7 bằng D♭7 trong khi bass vẫn chơi G, hai hợp âm sẽ va chạm. [[ky-hieu-hop-am|Lead sheet]] chỉ là **khung**; tái hoà âm là phần sáng tạo của người chơi.

## Làm một bài hát "jazzy"
Kết hợp các lớp dưới đây có thể biến **gần như bất kỳ bài nào** — pop, cổ điển, đồng quê — thành một bài nghe "jazz". Xếp từ nhẹ đến mạnh:
1. Thêm [[hop-am-bay|nốt 7]] cho mọi hợp âm.
2. Thêm [[hop-am-mo-rong|nốt mở rộng]] (9, 13).
3. [[hop-am-at-bien-hoa|Hợp âm biến hoá]] (♭9, ♯9, ♭13…).
4. [[hop-am-luot-jazz|Hợp âm lướt và hợp âm tiếp cận]].
5. [[xep-hop-am|Thế bấm jazz]].
6. [[trang-tri-giai-dieu-jazz|Trang trí giai điệu]].
7. **Tái hoà âm** (bảng ở trên, quy trình ở dưới).
8. Cách tiếp cận **[[dieu-thuc|điệu thức]]**: chỉ một hai hợp âm, thường là một vamp — xem [[jazz-dieu-thuc]].
9. **Đổi nhịp** (5/4, 7/8…) — xem [[doi-nhip-the-loai-jazz]].
Công thức đơn giản nhất cho piano: tay trái [[bass-di-jazz|bass đi]], tay phải [[not-dan-huong|nốt dẫn hướng]] (3 và 7) cộng giai điệu — rồi [[ngau-hung-piano|ngẫu hứng]].

## Quy trình tái hoà âm
1. Tìm **nốt giai điệu chính** của mỗi ô — nốt duy nhất phải giữ.
2. Đổi hợp âm (và/hoặc chỉnh giai điệu) sao cho nốt đó là **hoà âm chấp nhận được**: một nốt dẫn hướng (3 hoặc 7) hoặc một [[hop-am-mo-rong|nốt căng]] dùng được. Mọi nốt khác của hợp âm — kể cả gốc, 3, 7 — đều có thể đổi, **trừ** nốt giai điệu chính.
3. Nối các hợp âm theo **nửa cung**, theo **bậc trong giọng** hoặc theo **[[vong-quang-nam|vòng quãng 5]]**.
4. Điều khiển **căng – giãn**: nốt căng cao và biến hoá (♭13) tạo căng; nốt dẫn hướng và nốt căng thấp (9) tạo giãn.
Có thể chia các phép thay thành nhóm: cromatic (quãng cố định), [[vong-coltrane|Coltrane]], [[thay-the-hop-am|diatonic]], dựa trên giai điệu, và dựa trên bè trầm ([[bass-ngan|bass ngân]], bass đi liền bậc). Các phép thay bằng ii – V: [[thay-the-hop-am]]. Biến thể gospel: [[tai-hoa-am-gospel]]; tái hoà âm sang [[the-loai|thể loại]] khác: [[doi-nhip-the-loai-jazz]].

## Gợi ý luyện tập
1. Chọn một bài quen (ví dụ "Twinkle Twinkle Little Star") với vòng gốc I – IV – V.
2. Áp từng kỹ thuật một, chơi lại và nghe sự khác biệt.
3. Kết hợp với [[xep-hop-am]] để các hợp âm mới nối mượt.

Liên quan: [[vong-hop-am]], [[he-thong-hop-am-am-giai]].

Công cụ khác: [[line-cliche]], [[turnaround-jazz]], [[constant-structures]].

## Bảng nhanh: đổi gì trên từng loại hợp âm
Levine gom các phép tái hoà âm cơ bản theo từng loại hợp âm. Ở Đô trưởng:
| Hợp âm gốc | Thử đổi thành | Ghi chú |
|---|---|---|
| V7 (G7) | ii – V (Dm7 – G7) | gần như luôn được |
| V7 | V thay tritone (D♭7), hoặc ii – V của nó (A♭m7 – D♭7) | bè trầm đi xuống nửa cung |
| V7 đi xuống quãng 5 | G7♭9, G7alt | ♭9 nghe hay khi V **giải quyết xuống quãng 5** |
| V7 không đi xuống quãng 5 | G7♯11 | Lydian át |
| vi (Am7) | VI7 (A7) | biến thành át phụ của ii |
| ii (Dm7) | D7 (V của V) | ii – V thành V của V – V |
| ii | slash chord (F/G, Dm7/G) | ii – V gói thành một hợp âm sus, xem [[hop-am-sus-jazz]] |
| I (Cmaj7) | Cmaj7♯11, Cmaj7♯5 | Lydian, Lydian tăng |
| I | B/C, D/C | slash chord thay I, xem [[slash-chord-tren-mot-not-bass]] |
| Hợp âm thứ kéo dài | đường bè đi xuống / đi lên trên nó | [[line-cliche]] |

Một lời nhắn của Levine cho kèn và ca sĩ, áp dụng cho cả người đệm: tái hoà âm phần **giai điệu** thì phải bàn trước với cả ban; tái hoà âm trong lúc **solo** thì thoải mái hơn nhiều, miễn tay bass và người đệm nghe được bạn.

## Câu hỏi và bài tập
1. Tái hoà âm tám ô đầu "Fly Me to the Moon" bằng ít nhất ba phép trong bảng.
2. Chọn một ballad; đổi hợp âm cuối thành B/C hoặc Cmaj7♯11.
3. Ghi âm một chorus đệm với hợp âm gốc và một chorus tái hoà âm; nghe lại cái nào bạn thích.
`,
  },
  {
    slug: 'doi-nhip-the-loai-jazz',
    title: 'Đổi nhịp, đổi thể loại và chơi tự do thời gian',
    category: 'jazz',
    aliases: ['changing the meter', 'jazz waltz', 'changing genre', 'đổi thể loại', 'reharmonization into different genres', 'free time', 'chơi tự do thời gian', 'intro rubato', 'dạo đầu jazz'],
    summary: 'Ba cách "biến hình" một bài chuẩn ngoài việc đổi hợp âm: đổi số chỉ nhịp (Fly Me to the Moon vốn là điệu valse; Brubeck với 5/4, 7/4, 9/8), đổi thể loại chỉ bằng cách chọn hợp âm (pop, jazz điệu tính, điệu thức, phi điệu tính, blues), và chơi tự do thời gian — cách làm dạo đầu phổ biến của pianist solo.',
    refs: [
      ['Wikipedia — Fly Me to the Moon', 'https://en.wikipedia.org/wiki/Fly_Me_to_the_Moon'],
      ['Wikipedia — Time Out (Dave Brubeck album)', 'https://en.wikipedia.org/wiki/Time_Out_(album)'],
      ['Wikipedia — Unsquare Dance', 'https://en.wikipedia.org/wiki/Unsquare_Dance'],
    ],
    body: `
Muốn biết bạn thật sự hiểu một bài tới đâu? Chơi nó ở nhịp khác, hay ở thể loại khác. Một bài 4/4 swing chơi ở 3/4, ở 5/4, hay thành bossa nova, rock, ballad tự do — mỗi lần là một bài mới, và mỗi lần bạn phải hiểu lại giai điệu và hoà âm của nó.

[[tai-hoa-am|Tái hoà âm]] đổi **hợp âm**; bài này nói về ba cách đổi **những thứ khác** của một bài chuẩn: nhịp, [[the-loai|thể loại]] và cảm giác thời gian.

## 1. Đổi số chỉ nhịp
- Phần lớn bài jazz ở **4/4** — có lẽ từ thời [[swing|Swing]], khi jazz là nhạc khiêu vũ và 4/4 có phách nhấn 2 – 4 dễ nhảy hơn nhiều so với kiểu 13/8.
- Ví dụ: **"Fly Me to the Moon"** (Bart Howard, 1954) ban đầu là một bài **[[tieu-pham-piano|valse]] 3/4** tên "In Other Words"; bản **4/4 swing** nổi tiếng là [[dan-nhac-giao-huong|phối khí]] của Quincy Jones cho Frank Sinatra (1964).
- Thử các bài chuẩn ở **5/4 hoặc 7/8**, và nghe [[dave-brubeck|Dave Brubeck]]: "Take Five" (5/4) và "Blue [[rondo|Rondo]] à la Turk" (9/8) trong *Time Out* (1959), "Unsquare Dance" (7/4, 1961) — xem [[nhip-hon-hop]].
- Ở nhịp lẻ, [[nhip-dieu-hoa-am|nhịp điệu hoà âm]] có thể không đối xứng.
::rhythm 4/4 h q q / w // | Minh hoạ: hai ô 4/4 của một câu giai điệu…
::rhythm 3/4 q q q / h. // | …chuyển sang 3/4 bằng cách rút nốt dài: mỗi ô gốc thành một ô valse (một cách làm, không phải quy tắc)

## 2. Đổi thể loại bằng hợp âm
Lấy 8 ô đầu của một bài pop và hoà âm lại theo nhiều thể loại; ý chính: **chỉ cần chọn hợp âm** đã có thể chuyển bài sang thể loại khác.
| Thể loại | Hợp âm |
|---|---|
| Pop (bản gốc) | Phần lớn [[hop-am-ba|hợp âm ba]] trong giọng, [[giai-dieu|giai điệu]] rơi vào nốt gốc |
| Jazz [[dieu-tinh|điệu tính]] | [[hop-am-bay|Hợp âm 7]], nhiều [[ii-v-i]]; giai điệu là [[not-dan-huong|nốt dẫn hướng]] hoặc [[hop-am-mo-rong|nốt căng]] |
| Jazz điệu thức | Bỏ tiến trình gốc, chỉ dùng **một hai hợp âm** (xem [[jazz-dieu-thuc]]) |
| Jazz [[phi-dieu-tinh|phi điệu tính]] | Một phiên bản phi điệu tính **khá thuận tai** — không phải [[am-cum|âm cụm]] ngẫu nhiên ([[post-bop-free-jazz]]) |
| [[blues-12-nhip|Blues]] | Hợp âm blues **chưa đủ**: nếu giai điệu tránh [[am-giai-blues|nốt blue]] thì bài vẫn không "blues" |
Kết luận: thể loại đến từ **cách giai điệu và hoà âm tương tác**. Phần nhịp đệm (bass đi, [[ostinato|bass lặp]] blues, bossa nova) đổi theo — xem [[bass-di-jazz]], [[dieu-dem-pho-bien]], [[dem-jazz]].

## 3. Chơi tự do thời gian
Người học hay bỏ qua kỹ năng này, nhưng nó rất cần cho **dạo đầu**, và pianist chơi một mình không cần [[kiem-soat-toc-do|giữ nhịp]] cứng.
**Cách làm dạo đầu phổ biến**: chơi **cả [[hinh-thuc-am-nhac|hình thức]] một lần ở thời gian tự do**, rồi **vào nhịp đột ngột** khi bài lặp lại.
| Phần của bài | Kỹ thuật |
|---|---|
| **Các [[cau-nhac|câu nhạc]]** | Giữ gần nguyên để giai điệu còn nhận ra; [[trang-tri-giai-dieu-jazz|trang trí]] nhẹ; [[rubato]] có chừng mực; [[ky-thuat-quang-tam|chơi quãng 8]]; chuyển giai điệu sang [[quang|quãng 8]] khác |
| **Chỗ nghỉ giữa các câu** | [[luyen-hop-am-rai|Hợp âm rải]], chạy [[am-giai|âm giai]], "fill" hay [[ngau-hung-piano|ngẫu hứng]] ngắn, hoặc chơi và giữ một hợp âm — ở đây có thể chậm hẳn lại, gần như không còn nhịp |
Rubato thuộc nhóm yếu tố [[tiet-tau|tiết tấu]] "phức tạp" — nên cân bằng bằng những yếu tố có cấu trúc (giai điệu rõ, hoà âm quen). Liên hệ cổ điển: [[prelude-ung-tac|prelude ứng tác]], [[cadenza]].

## Câu hỏi và bài tập
1. Chơi một bài chuẩn 4/4 ở 3/4 (mỗi ô cũ thành một ô 3/4 hoặc hai ô).
2. Chơi tám ô đầu một bài pop theo ba thể loại: jazz swing, bossa nova, gospel.
3. Chơi một ballad tự do nhịp (rubato) từ đầu tới cuối, giữ nguyên hình thức.
`,
  },
  {
    slug: 'tai-hoa-am-gospel',
    title: 'Tái hoà âm gospel',
    category: 'jazz',
    aliases: ['gospel reharmonization', 'gospel jazz', 'tái hoà âm gospel', 'Amazing Grace', 'backcycling', 'gospel piano'],
    summary: 'Gospel là hoà âm nhà thờ của người Mỹ gốc Phi, gần gũi với blues và hard bop. Lamar lấy "Amazing Grace" (giai điệu ngũ cung, chỉ ba hợp âm I – IV – V) và biến nó thành gospel – jazz: lùi vòng quãng 5 (C – F – C), hoà âm hoá gần như mọi nốt giai điệu, hợp âm 7 giảm lướt, át phụ và thay thế tritone.',
    body: `
Gospel là nơi nhiều pianist jazz học cách làm một bài thánh ca đơn giản thành một bức tường âm thanh ấm áp. Cách học tốt nhất là lấy một giai điệu ai cũng biết và hoà âm lại nó từng bước. Ta dùng "Amazing Grace" — giai điệu phạm vi công cộng, chỉ vài nốt, và chịu được mọi kiểu "trang điểm".

## Điểm xuất phát
Ta chép "**Amazing Grace**" ở Đô trưởng cho dễ đọc:
- Bản cơ bản chỉ dùng **I, IV, V** (C, F, G).
- [[giai-dieu|Giai điệu]] (gần như) chỉ dùng **[[am-giai-ngu-cung|ngũ cung]] trưởng** C – D – E – G – A.
- Tay trái là đường bass đơn giản, nhấn nốt gốc.

## Các kỹ thuật gospel
- **Lùi vòng quãng 5** (backcycling): chèn [[hop-am-ba|hợp âm]] cách một bước ngược chiều [[vong-quang-nam|vòng quãng 5]] rồi quay lại — C – F – C. Chuyển động IV – I này là màu "**nhà thờ**" ([[cau-ket|kết plagal]]), cũng là cách gọi khi nói về [[phong-cach-jazz|hard bop]].
- **Hoà âm hoá gần như từng nốt giai điệu** ở tay phải, xếp hẹp, chủ yếu đi **song song**, nốt giai điệu luôn ở trên cùng — họ hàng của [[hop-am-khoi|block chords]].
- Thêm [[hop-am-mo-rong|nốt căng]] và nốt biến hoá, [[hop-am-at-phu|át phụ]], [[hop-am-luot-jazz|hợp âm 7 giảm lướt]], [[thay-the-hop-am|thay thế]].

## Từng chỗ trong bài
| Chỗ | Kỹ thuật |
|---|---|
| Ô 2 | C7 hướng về Fmaj7, chèn **F°7** để **trì hoãn** giải quyết |
| Gần ô 3 | **C°7** — hợp âm giảm lướt dẫn về C |
| Ô 6 | **G°7** — hợp âm giảm lướt dẫn về G |
| Ô 8 | G7 được thay bằng **D♭7** ([[thay-the-tritone]]), giai điệu ở nốt ♯9 của D♭7 (= E, nốt 3 của C), rồi về C ngay |
::staff treble C4+E4+G4+Bb4=C7 F4+Ab4+B4+D5=F°7 F4+A4+C5+E5=Fmaj7 / Db4+F4+Ab4+Cb5=D♭7 C4+E4+G4=C | Ô 2: C7 → F°7 → Fmaj7 (hợp âm giảm làm chậm việc về IV); ô 8: D♭7 thay G7 rồi về C

## Gospel và jazz
Gospel thấm vào jazz qua **hard bop và soul jazz** (thập niên 1950–60): nhiều kết IV – I, nốt blue, đệm "gõ" theo tiếng đàn [[organ-ong|organ nhà thờ]] (xem [[am-giai-blues]], [[blues-12-nhip]]). Các kỹ thuật trên cũng dùng trực tiếp cho [[dem-hat-piano|đệm hát]] thánh ca và [[nhac-pho|nhạc phổ thông]].

## Câu hỏi và bài tập
1. Chơi "Amazing Grace" ở Fa trưởng với các bước tái hoà âm trong bài.
2. Chèn một hợp âm 7 giảm lướt vào mỗi chỗ giai điệu đi liền bậc.
3. Thử cùng cách làm với một bài thánh ca khác bạn biết.
`,
  },
  {
    slug: 'sang-tac-jazz',
    title: 'Sáng tác jazz và phát triển giai điệu',
    category: 'jazz',
    aliases: ['jazz composition', 'sáng tác jazz', 'composition and melodic development', 'phát triển giai điệu', 'snowflake method', 'doodling method'],
    summary: 'Lamar xem sáng tác là "ngẫu hứng không có tính tức thời": phân tích giai điệu theo quãng, motif, tiết tấu, âm giai, hoà âm; phát triển motif bằng đảo, ngược, giãn, co, tách mảnh; đặt đỉnh giai điệu ở khoảng 2/3–3/4 câu; hai quy trình "vẽ nguệch ngoạc" và "bông tuyết" để đi từ một câu nhạc đến một lead sheet.',
    body: `
Hầu hết những người chơi jazz vĩ đại cũng là người viết bài vĩ đại: Duke, Monk, Bird, Horace Silver, Wayne Shorter, Herbie Hancock… Và có một lý do: sáng tác chẳng qua là **ngẫu hứng chậm lại**, có thời gian sửa. Mọi thứ bạn đã học trong bộ sách đều là đồ nghề cho việc này.

Sáng tác là "**[[ngau-hung-piano|ngẫu hứng]] không có tính tức thời**" — cùng những công cụ của [[xay-dung-bai-solo|xây dựng bài solo]], nhưng có thời gian để chọn lọc.

## Phân tích một giai điệu
Năm góc nhìn: **[[quang|quãng]]** (các bước nhảy), **motif**, **[[tiet-tau|tiết tấu]]**, **[[am-giai|âm giai]]** (giai điệu lấy nốt từ âm giai nào), **hoà âm** (nốt giai điệu so với [[hop-am-ba|hợp âm]] — xem [[not-dan-huong]], [[not-tranh-va-quang-nghich]]). Đây cũng là các yếu tố trong [[phan-tich-phong-cach|khung LaRue]].

## Phát triển motif
Đổi [[cao-do|cao độ]] hoặc tiết tấu, **đảo** ([[the-dao-hop-am|inversion]]), **ngược** (retrograde), **giãn** (augmentation), **co** (diminution), **tách mảnh** (fragmentation) — đúng các kỹ thuật cổ điển trong [[motif]], [[bien-doi-chu-de]] và [[doi-am|đối âm]].
::staff treble C4 D4 E4 G4 / C5 B4 A4 F4 / G4 E4 D4 C4 | Minh hoạ trên một motif C – D – E – G: nguyên dạng; đảo (các bước đi xuống, bắt đầu từ C cao); ngược (đọc từ cuối về đầu)

## Hình dáng giai điệu
- Trộn **bước liền bậc, nhảy nhỏ và nhảy xa** ([[giai-dieu]]).
- Đặt **nốt cao nhất** (đỉnh) ở khoảng **2/3 đến 3/4** [[cau-nhac|câu nhạc]] hoặc bài — gần với cách [[dien-dat-cau-nhac|câu nhạc]] cổ điển đặt cao trào.

## Hai quy trình
- **"Vẽ nguệch ngoạc"** (doodling): bắt đầu từ một giai điệu nghe hay rồi chỉnh cho hợp phong cách.
- **"Bông tuyết"** (snowflake): dạo đàn → tìm một câu → phát triển thành motif → hoà âm hoá → có một **[[he-so-nashville-va-lead-sheet|lead sheet]]** ([[ky-hieu-hop-am]]). Bước cuối: **phối** ([[hinh-thuc-am-nhac|hình thức]], [[ngon-bam|thế bấm]], nhạc cụ, [[cuong-do|cường độ]]).
::form Dạo_đàn Một_câu Motif Hoà_âm Ký_âm Phối | Quy trình "bông tuyết": dạo đàn → tìm một câu → motif → hoà âm hoá → ký âm thành lead sheet → phối

## Contrafact: giai điệu mới trên vòng hợp âm cũ
Bản quyền bảo vệ giai điệu và lời, **không** bảo vệ [[vong-hop-am|vòng hợp âm]], nên nhạc công [[phong-cach-jazz|bebop]] viết rất nhiều **contrafact** — chi tiết và ví dụ ở [[rhythm-changes]]. Đó là cách tập sáng tác dễ nhất: giữ hoà âm quen, chỉ viết giai điệu mới.
Bài nên dùng để học các kỹ thuật: "E.S.P.", "In Walked Bud", "Satin Doll", "Autumn Leaves", "All the Things You Are". Liên quan: [[hinh-thuc-ca-khuc-32]], [[phoi-hoa-am-giai-dieu]].

## Bắt đầu thế nào
Cách dễ nhất, và là cách dân bebop đã làm: viết một **head** mới trên hợp âm của một bài có sẵn (xem [[head-dao-dau-va-ket]]). Bạn không phải lo hoà âm; bạn chỉ lo giai điệu. Khi đã quen, đổi vài hợp âm, rồi viết cả hoà âm lẫn giai điệu.

## Câu hỏi và bài tập
1. Viết một head 12 ô trên blues ở Fa.
2. Viết một bài 32 ô AABA của riêng bạn, có ít nhất hai cặp ii – V và một phép thay thế.
3. Ghi bài thành lead sheet, kèm dạo đầu và đoạn kết.
`,
  },
  {
    slug: 'hinh-thuc-ca-khuc-32',
    title: 'Hình thức ca khúc 32 ô nhịp',
    category: 'jazz',
    also: ['form'],
    aliases: ['AABA', '32-bar form', 'hình thức AABA', 'bridge', 'jazz standard', 'Great American Songbook', 'middle eight', 'chorus jazz', 'head'],
    summary: 'Cấu trúc AABA, mỗi đoạn 8 ô nhịp — khuôn mẫu của ca khúc Broadway, Tin Pan Alley và phần lớn jazz standard.',
    wiki: 'Thirty-two-bar_form',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Thirty-two-bar form', 'https://en.wikipedia.org/wiki/Thirty-two-bar_form'],
      ['Rafferty (2017) — Tin Pan Alley thesis, Newcastle University (PDF)', 'https://theses.ncl.ac.uk/jspui/bitstream/10443/3749/1/Rafferty%2C%20K.F.%202017.pdf'],
      ['Wikipedia — Rhythm changes', 'https://en.wikipedia.org/wiki/Rhythm_changes'],
    ],
    body: `
Trước khi chơi một bài, hãy biết **hình dáng** của nó. Đa số bài chuẩn dài 32 ô, chia thành bốn đoạn 8 ô — và chỉ cần biết đoạn nào giống đoạn nào, bạn đã giảm một nửa việc phải nhớ. Khi solo, hình thức là tấm bản đồ: lạc nó một lần trên sân khấu là bạn sẽ không bao giờ quên tầm quan trọng của nó.

| Đoạn | Số [[so-chi-nhip|ô nhịp]] | Vai trò |
|---|---|---|
| A | 8 | [[chuc-nang-hinh-thuc|Chủ đề chính]], kết ở giọng chính |
| A | 8 | Nhắc lại (có thể đổi kết) |
| **B** (bridge, "middle eight") | 8 | Tương phản: [[giai-dieu|giai điệu]] mới, hoà âm khác — thường ly giọng hoặc [[chuyen-giong|chuyển giọng]] |
| A | 8 | Quay lại chủ đề |
::form A:8 A:8 B:8 A:8 | Khuôn AABA 32 ô nhịp: số dưới mỗi đoạn là số ô

## Ví dụ
- "Over the Rainbow" (Harold Arlen, 1939).
- "I Got Rhythm" ([[george-gershwin|Gershwin]], 1930) — đoạn B đi qua chuỗi [[hop-am-bay|hợp âm 7 át]] theo [[quang|quãng]] 5; [[vong-hop-am|vòng hợp âm]] của bài là [[rhythm-changes]].
- "Blue Skies", "The Man I Love" (theo danh sách của Wikipedia).
- Ngoài AABA còn có biến thể 32 ô **ABAC** (hai nửa 16 ô bắt đầu giống nhau, kết khác nhau).

## Bối cảnh
AABA còn được gọi là **"[[dieu-dem-pho-bien|ballad]] form"** hay **"American popular song form"**: khuôn mẫu chung của **Tin Pan Alley** và [[operetta-va-nhac-kich|nhạc kịch Broadway]] nửa đầu [[thoi-ky-the-ky-20|thế kỷ 20]]. Lời tựa đề thường đặt ở **câu đầu hoặc câu cuối** của mỗi đoạn A. Nhiều ca khúc nhạc kịch theo hình thức này về sau trở thành **jazz standard**.

## Nhìn hoà âm theo hình thức
- Đoạn A thường **mở và đóng ở chủ** — vòng I – vi – ii – V hoặc chuỗi [[ii-v-i]].
- Đoạn B là chỗ hoà âm **đi xa nhất**: ly giọng sang IV, chuỗi [[hop-am-at-phu|át phụ]] (như rhythm changes), hoặc chuyển hẳn sang giọng khác.
- Ô cuối mỗi đoạn A thường có **"turnaround"** (I – vi – ii – V) để quay lại đầu.

## Trong biểu diễn jazz
Một lượt chơi trọn 32 ô nhịp gọi là một **chorus**. Cấu trúc thường gặp: chơi giai điệu (head) → các nhạc công lần lượt [[ngau-hung-piano|ngẫu hứng]] nhiều chorus trên cùng vòng hợp âm → chơi lại head.

So sánh: [[blues-12-nhip]] (12 ô), [[hinh-thuc-am-nhac|hình thức phiên khúc – điệp khúc]] của pop, [[hinh-thuc-am-nhac|hình thức ba đoạn]] ABA trong nhạc cổ điển.

Turnaround ở cuối mỗi đoạn A: [[turnaround-jazz]].

## Không chỉ có AABA
Levine liệt kê nhiều hình thức khác ngoài AABA và ABAC; đây là những cái bạn sẽ gặp:
| Hình thức | Mô tả |
|---|---|
| AABA | hai đoạn A, một đoạn giữa B (bridge), quay về A |
| ABAC | đoạn thứ ba trở lại A, đoạn cuối mới |
| ABCD | bốn đoạn khác nhau, "sáng tác suốt" |
| AABC, AAB, ABA, ABC, AB | các biến thể ngắn hoặc dài hơn |
| Riêng của một bài | có bài dài 14, 36, 44 ô… không theo khuôn nào |

Và blues 12 ô, rhythm changes, blues có đoạn giữa (44 ô) là những hình thức riêng (xem [[blues-12-nhip]], [[rhythm-changes]]). Ngoài thân bài còn có dạo đầu, đoạn chuyển, đoạn kết: [[head-dao-dau-va-ket]].

## Mẹo luyện tập
- Khi học một bài mới, việc đầu tiên: viết hình thức lên đầu trang (AABA? ABAC?), và đánh dấu đoạn nào khác chỗ nào (thường chỉ ô cuối đoạn A).
- Khi solo, **đếm đoạn** chứ đừng đếm ô: "A1, A2, B, A3". Nghe tay bass và trống: họ thường đánh dấu đầu mỗi đoạn.

## Câu hỏi và bài tập
1. Xác định hình thức của ba bài chuẩn bạn biết.
2. Solo hai chorus một bài AABA; ở đoạn B đổi hẳn tính chất (âm vực, mật độ).
3. Viết lại một bài AABA bằng dấu nhắc lại; xem còn bao nhiêu ô phải nhớ (xem [[doc-lead-sheet-va-thuoc-bai]]).
`,
  },
  {
    slug: 'rhythm-changes',
    title: 'Rhythm changes',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['rhythm changes', 'vòng I Got Rhythm', 'I Got Rhythm changes', 'contrafact', 'bài viết trên vòng hợp âm có sẵn', 'Anthropology', 'Oleo'],
    summary: 'Vòng hợp âm của "I Got Rhythm" (Gershwin, 1930): hình thức AABA 32 ô, đoạn A xoay quanh I – vi – ii – V, đoạn B là chuỗi hợp âm 7 át theo quãng 5 — nền của hàng trăm bài bebop.',
    wiki: 'Rhythm_changes',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Rhythm changes', 'https://en.wikipedia.org/wiki/Rhythm_changes'],
      ['PianoGroove — Rhythm changes explained', 'https://www.pianogroove.com/jazz-piano-lessons/rhythm-changes-explained/'],
      ['BYU-Idaho — Rhythm changes (PDF)', 'https://content.byui.edu/file/be14498b-aa3f-4b2a-b9e6-4fb3fdbd1d12/1/10%20Rhythm%20Changes.pdf'],
      ['Wikipedia — Thirty-two-bar form', 'https://en.wikipedia.org/wiki/Thirty-two-bar_form'],
    ],
    body: `
Sau blues, đây là bộ hợp âm được chơi nhiều nhất trong jazz. Nó đến từ "I Got Rhythm" của George Gershwin, và dân bebop đã viết hàng chục giai điệu mới trên nó (xem [[head-dao-dau-va-ket]]). Ở buổi jam nào cũng sẽ có ít nhất một bài rhythm changes — nhanh, ở Si giáng, và không ai đợi bạn.

"I Got Rhythm" của [[george-gershwin|George Gershwin]] ra mắt năm **1930** trong vở [[operetta-va-nhac-kich|nhạc kịch Broadway]] *Girl Crazy*. [[vong-hop-am|Vòng hợp âm]] của nó — gọi là **"rhythm changes"** — trở thành một trong những khung hoà âm được dùng lại nhiều nhất của jazz, sau [[blues-12-nhip|blues]].

## Cấu trúc (giọng gốc: Si giáng trưởng)
[[hinh-thuc-ca-khuc-32|Hình thức AABA]], mỗi đoạn 8 ô:
| Đoạn | Hoà âm | Ví dụ trong B♭ |
|---|---|---|
| **A** | Xoay quanh **I – vi – ii – V** (và các biến thể) | B♭ – Gm7 – Cm7 – F7 … |
| **B** (bridge) | Chuỗi [[hop-am-bay|hợp âm 7 át]] theo [[vong-quang-nam|quãng 5]]: **III7 – VI7 – II7 – V7**, mỗi [[hop-am-ba|hợp âm]] 2 ô | D7 – G7 – C7 – F7 |
| **A** | Như A đầu | |
::form A:8 A:8 B:8 A:8 | Rhythm changes: hình thức AABA, mỗi đoạn 8 ô
::staff treble D4+F#4+A4+C5=D7 G4+B4+D5+F5=G7 C4+E4+G4+Bb4=C7 F4+A4+C5+Eb5=F7 | Đoạn B của rhythm changes trong B♭: III7 – VI7 – II7 – V7, mỗi hợp âm 2 ô
- Đoạn B là một [[mo-tien-hoa-am|mô tiến]] [[quang|quãng]] 5 của các [[hop-am-at-phu|át phụ]], đưa về V7 để quay lại đoạn A. Người chơi thường chèn thêm hợp âm lướt (ví dụ biến mỗi hợp âm 7 át thành một cặp ii – V).
- Bản gốc có thêm một **đuôi 2 ô** mà các bản jazz thường bỏ.
- Bản thân các tiến trình I – vi – ii – V và chuỗi át phụ đã có từ lâu trước Gershwin; điều ông đóng góp là **một bài hát** khiến khung hoà âm này thành chuẩn chung.

## Contrafact
**Contrafact** là [[giai-dieu|giai điệu]] mới viết trên vòng hợp âm của một bài có sẵn. Vì **vòng hợp âm không được bảo hộ bản quyền**, nhạc công jazz viết giai điệu mới trên những vòng họ thích [[ngau-hung-piano|ngẫu hứng]].
- Ví dụ rhythm changes sớm nhất được biết: "Shag" (Sidney Bechet, thu âm 1932).
- Thời [[phong-cach-jazz|bebop]]: "Anthropology", "Moose the Mooche", "Steeplechase" (Charlie Parker); "Oleo" (Sonny Rollins); "Rhythm-a-Ning" ([[thelonious-monk|Thelonious Monk]]).
- Các nhạc công bebop còn **chồng thêm chuỗi ii – V** lên vòng này, biến nó thành "bài kiểm tra tay nghề" ngẫu hứng.

Cách viết một giai điệu mới (phân tích, [[motif|phát triển motif]], quy trình "bông tuyết"): [[sang-tac-jazz]].

## Học rhythm changes thế nào?
1. Thuộc đoạn A dạng đơn giản nhất (I – vi – ii – V) và đoạn B (bốn hợp âm 7 át).
2. Chơi [[ii-v-i|nốt dẫn hướng]] qua cả 32 ô.
3. Thử từng phép [[thay-the-hop-am|thay thế]] (I – VI7 – ii – V, [[thay-the-tritone|thay thế tritone]] ở đoạn B…).

## Mẹo luyện tập
- Học đoạn A như **một khối turnaround lặp lại** (I – vi – ii – V), đoạn B như **một chuỗi át đi theo vòng quãng 5** (III7 – VI7 – II7 – V7, mỗi hợp âm hai ô). Hai khối, không phải 32 hợp âm.
- Tập đoạn B riêng: nhắm nốt 3 của mỗi hợp âm át ở phách 1 (D, G, C, F ở B♭: các nốt 3 của D7, G7, C7, F7 là F♯, B, E, A).
- Tập ở nhịp chậm trước. Nhịp nhanh sẽ tới sau, khi tay bạn đã biết đường.

## Câu hỏi và bài tập
1. Chơi rhythm changes ở B♭: đoạn A bằng thế bấm không gốc, đoạn B bằng shell.
2. Solo một chorus chỉ bằng nốt dẫn hướng 3 – 7.
3. Chơi giai điệu một head trên rhythm changes (như "Oleo" hay "Anthropology") từ bản thu.
`,
  },
  {
    slug: 'vong-coltrane',
    title: 'Vòng Coltrane',
    category: 'jazz',
    aliases: ['Coltrane changes', 'vòng Giant Steps', 'chuyển giọng quãng 3 trưởng', 'Countdown', 'thay thế Coltrane'],
    summary: 'Hệ thống thay thế hợp âm của John Coltrane (Giant Steps, 1959): chia quãng 8 thành ba giọng cách nhau quãng 3 trưởng, mỗi giọng được chuẩn bị bằng hợp âm 7 át của nó.',
    wiki: 'Coltrane_changes',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Coltrane changes', 'https://en.wikipedia.org/wiki/Coltrane_changes'],
      ['Wikipedia — Giant Steps (composition)', 'https://en.wikipedia.org/wiki/Giant_Steps_(composition)'],
      ['Learn Jazz Standards — Understanding Coltrane changes, part 1', 'https://www.learnjazzstandards.com/blog/understanding-coltrane-changes-part-1/'],
      ['Piano With Jonny — Giant Steps: a guide to Coltrane changes', 'https://pianowithjonny.com/piano-lessons/giant-steps-a-guide-to-coltrane-changes/'],
    ],
    body: `
Năm 1959, John Coltrane thu "Giant Steps", và từ đó mọi người chơi jazz phải học một bài kiểm tra mới. Bí mật của nó không phải là tốc độ, mà là một ý tưởng hoà âm: đổi giọng theo **quãng 3 trưởng** thay vì quãng 5. Nghe thì đáng sợ, nhưng như bạn sẽ thấy, chỉ có ba giọng — và bạn đã biết cả ba.

**Vòng Coltrane** (Coltrane changes) là cách **John Coltrane** thay thế hoà âm, nổi tiếng nhất trong bài **"Giant Steps"** (thu âm tháng 5/1959, album cùng tên phát hành 1960).

## Ý tưởng: ba giọng cách nhau quãng 3 trưởng
- Ba [[dieu-tinh|trung tâm giọng]] của "Giant Steps": **Si trưởng, Sol trưởng, Mi giáng trưởng** — mỗi giọng **thấp hơn giọng trước một [[quang|quãng]] 3 trưởng**.
- Chồng các quãng 3 trưởng sẽ quay về điểm xuất phát sau **ba** bước (B – G – E♭ – B) — tức là ba gốc này tạo thành một [[hop-am-ba-tang|hợp âm ba tăng]]. Quãng 8 được chia thành **ba phần bằng nhau**, một kiểu đối xứng giống [[dieu-thuc-chuyen-vi-gioi-han|các âm giai đối xứng]].
::keyboard Eb4 G4 B4 | B – G – E♭: ba trung tâm giọng cách nhau quãng 3 trưởng, cùng tạo thành một hợp âm ba tăng
- Mỗi giọng được dẫn vào bằng **[[hop-am-bay|hợp âm 7 át]]** của nó: Bmaj7 – **D7** – Gmaj7 – **B♭7** – E♭maj7 …
::staff treble B3+D#4+F#4+A#4=Bmaj7 D4+F#4+A4+C5=D7 G4+B4+D5+F#5=Gmaj7 Bb3+D4+F4+Ab4=B♭7 Eb4+G4+Bb4+D5=E♭maj7 | Bmaj7 – D7 – Gmaj7 – B♭7 – E♭maj7: mỗi giọng mới được dẫn vào bằng hợp âm 7 át của nó

## Như một phép thay thế cho ii – V – I
Ví dụ trong Đô trưởng, thay một ii – V – I bốn ô:
| | Ô 1 | Ô 2 | Ô 3 | Ô 4 |
|---|---|---|---|---|
| Gốc | Dm7 | G7 | Cmaj7 | Cmaj7 |
| Vòng Coltrane | Dm7 E♭7 | A♭maj7 B7 | Emaj7 G7 | Cmaj7 |
Các giọng C – A♭ – E cũng cách nhau quãng 3 trưởng (một hợp âm ba tăng); cách này áp được cho cả iii – vi – ii – V (Em7 E♭7 | A♭maj7 B7 | Emaj7 G7 | Cmaj7), và có thể đổi giọng theo **bất kỳ quãng cố định nào** (quãng 3 thứ, tritone…).
Coltrane cũng dùng hệ thống này để **[[tai-hoa-am|tái hoà âm]]** các tiến trình sẵn có: một [[ii-v-i]] được "lấp đầy" bằng các chặng cách nhau quãng 3 trưởng trước khi về chủ. Ví dụ "Countdown" là bản tái hoà âm của "Tune Up" (Miles Davis): khung lớn vẫn là các giọng của "Tune Up", nhưng từng chặng được chia nhỏ theo vòng Coltrane.

## Liên hệ với hoà âm cổ điển
Các giọng cách nhau quãng 3 là chủ đề của [[trung-am-cromatic|quan hệ trung âm cromatic]] trong nhạc thế kỷ 19; chu trình chia quãng 8 thành ba phần cũng xuất hiện trong phân tích [[neo-riemann|Neo-Riemann]]. Vòng Coltrane là cách jazz kết hợp quan hệ đó với lực đẩy V7 – I.

## Luyện tập
1. Chơi chậm chuỗi [[hop-am-ba|hợp âm]] "Giant Steps" chỉ với [[ii-v-i|nốt dẫn hướng]].
2. Nhận ra từng cặp V7 – I và giọng nó dẫn tới.
3. Thử chèn vòng Coltrane vào một ii – V – I quen thuộc.

Giai đoạn trước đó của Coltrane: [[sheets-of-sound]]. Phân tích chi tiết bài "Giant Steps" (bảng hợp âm 16 ô, nguồn gốc, cách luyện): [[phan-tich-giant-steps]].

## Ngoài "Giant Steps"
- Coltrane còn dùng các bước này trong "Countdown" (viết trên hoà âm "Tune Up" của Miles Davis) và chồng chúng lên các bài chuẩn — chèn vòng Coltrane vào những chỗ vốn là ii – V – I.
- Theo Levine, giọng tạm đổi theo **quãng 3 thứ** cũng là một hướng khác được dùng; và McCoy Tyner có thói quen chơi hợp âm V như một hợp âm Locrian (ø) — Levine gọi là "Locrian V chord" của McCoy.

## Mẹo luyện tập
- Tập ba ii – V – I ở B, G, E♭ (ba giọng của "Giant Steps") riêng từng cái trước, rồi mới nối.
- Chơi ngũ cung V của ba giọng (F♯, D, B♭) trên cả bài: một cách "đi tắt" Levine chỉ ra (xem [[ngu-cung-trong-jazz]]).
- Tập ở nhịp chậm đến buồn cười. Nghiêm túc đấy: 100 phách/phút là đủ để bắt đầu.

## Câu hỏi và bài tập
1. Viết vòng Coltrane thay cho ii – V – I bốn ô ở Fa trưởng.
2. Chơi chuỗi Cmaj7 – E♭7 – A♭maj7 – B7 – Emaj7 – G7 – Cmaj7 với thế bấm shell.
3. Ứng tác trên "Giant Steps" chỉ bằng ba ngũ cung V.
`,
  },  {
    slug: 'constant-structures',
    title: 'Constant structures: chuỗi hợp âm cùng loại',
    category: 'jazz',
    aliases: ['constant structure', 'constant structures', 'chuỗi hợp âm cùng loại', 'hợp âm cùng loại chuyển gốc', 'Inner Urge'],
    summary: 'Constant structures là chuỗi từ ba hợp âm cùng loại trở lên (cùng maj7, cùng m7…) có nốt gốc chuyển động không theo chức năng, làm trung tâm giọng liên tục dịch chuyển. Được Bill Evans và Herbie Hancock phổ biến; "Inner Urge" của Joe Henderson là ví dụ rõ.',
    wiki: 'Constant_structure',
    refs: [
      ['Wikipedia — Constant structure', 'https://en.wikipedia.org/wiki/Constant_structure'],
      ['Nghiên cứu về "Inner Urge" (luận án DMA, UNCG)', 'https://youthjazz.us/wp-content/uploads/2019/02/umi-uncg-1618.pdf'],
    ],
    body: `
Chơi Fmaj7, rồi E♭maj7, rồi D♭maj7, cùng một thế bấm, chỉ trượt xuống. Không có ii – V nào, không có chức năng nào, vậy mà nghe vẫn đẹp. Đó là **constant structures**: chuỗi hợp âm cùng loại, cùng hình, gốc đi tự do. Đây cũng là chỗ jazz bắt đầu bước ra khỏi hoà âm chức năng.

## Định nghĩa
Theo Wikipedia, **constant structures** là chuỗi **ba hợp âm cùng loại trở lên** (ví dụ toàn [[hop-am-bay|maj7]]) với **nốt gốc chuyển động không theo [[chuc-nang-hoa-am|chức năng]]** — [[dieu-tinh|trung tâm giọng]] dịch chuyển liên tục. Nốt gốc thường đi theo một quãng cố định (hay gặp là quãng 3) hoặc vẽ một [[luyen-hop-am-rai|hợp âm rải]]. Vì không có lực hút V – I, chuỗi có thể **dừng ở bất kỳ hợp âm nào** mà vẫn nghe trọn vẹn. Wikipedia ghi kỹ thuật này được **[[bill-evans|Bill Evans]]** và **[[herbie-hancock|Herbie Hancock]]** phổ biến.

## Ví dụ
::staff treble F4+A4+C5+E5=Fmaj7 Ab4+C5+Eb5+G5=A♭maj7 Db4+F4+Ab4+C5=D♭maj7 Gb4+Bb4+Db5+F5=G♭maj7 | Ví dụ của Wikipedia: Fmaj7 – A♭maj7 – D♭maj7 – G♭maj7 (rồi C13sus4) — chỉ Fmaj7 thuộc giọng Fa
Ví dụ: F♯maj7 – Emaj7 – Dmaj7 – Cmaj7 (cũng chơi được với toàn m7 hoặc toàn 7): nốt gốc đi xuống từng cung.

**"Inner Urge"** (Joe Henderson, thu âm 1964): mở đầu bằng F♯m7♭5, rồi chuỗi **Fmaj7♯11 – E♭maj7♯11 – D♭maj7♯11**, mỗi hợp âm 4 ô, trước khi các hợp âm maj7♯11 đổi nhanh hơn.

## Nghe và dùng
- Màu **trôi**, hiện đại, không có cảm giác "về nhà" — gần với [[hoa-am-song-song|hoà âm song song]] của [[claude-debussy|Debussy]] (xem [[an-tuong]]).
- Khi [[ngau-hung-piano|ngẫu hứng]], mỗi hợp âm là một **giọng tạm** — chuyển âm giai theo từng hợp âm (ví dụ [[dieu-thuc|Lydian]] trên maj7♯11; xem [[he-thong-hop-am-am-giai]]).
- Đây là một công cụ [[tai-hoa-am|tái hoà âm]] mạnh: thay một đoạn [[ii-v-i|ii – V – I]] bằng chuỗi cùng loại có giai điệu phù hợp.

## Câu hỏi và bài tập
1. Chơi F♯maj7 – Emaj7 – Dmaj7 – Cmaj7 với cùng một thế bấm; rồi làm lại toàn m7.
2. Thay một ii – V – I trong một bài bằng một chuỗi ba hợp âm maj7 cùng hình có nốt giai điệu ở trên.
3. Nghe "Inner Urge" của Joe Henderson; tìm chỗ có hợp âm cùng loại nối nhau.
`,
  },
  {
    slug: 'not-tiep-can-jazz',
    title: 'Nốt mục tiêu, nốt tiếp cận và bao vây',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['target note', 'nốt mục tiêu', 'approach note', 'nốt tiếp cận', 'enclosure', 'bao vây', 'ngôn ngữ bebop'],
    summary: 'Trong ngẫu hứng jazz, câu nhạc nhắm tới các nốt mục tiêu (thường là nốt hợp âm ở phách mạnh) và dẫn vào chúng bằng nốt tiếp cận (cromatic hoặc liền bậc) hay bằng "bao vây" — chơi nốt ở hai phía trước khi đến nốt mục tiêu, lối chơi đặc trưng của Charlie Parker.',
    refs: [
      ['Jazzadvice — How to effectively use enclosure', 'https://www.jazzadvice.com/lessons/how-to-effectively-use-enclosure/'],
    ],
    body: `
Đây là "ngữ pháp" của bebop: không đi thẳng vào nốt mục tiêu, mà **tiếp cận** nó từ trên, từ dưới, hay bao vây nó từ cả hai phía. Một nốt hợp âm được tiếp cận bằng nốt cromatic nghe "có đích" hơn hẳn — người nghe cảm thấy câu nhạc đang đi tới đâu đó.

## Nốt mục tiêu
**Nốt mục tiêu** là nốt [[cau-nhac|câu nhạc]] "muốn đến": thường là **nốt [[hop-am-ba|hợp âm]]** (đặc biệt [[not-dan-huong|nốt 3 và 7]] — [[ii-v-i|nốt dẫn hướng]]), một [[hop-am-mo-rong|nốt căng]] dùng được, hoặc nốt [[giai-dieu|giai điệu]]. Nó thường rơi vào **[[so-chi-nhip|phách mạnh]]** hoặc **cuối câu**. Các nốt dẫn tới nó là **nốt lướt** — chơi nhanh, ít quan trọng về hoà âm. Đây là phiên bản jazz của [[not-ngoai-hop-am|nốt ngoài hợp âm]] cổ điển.

## Nốt tiếp cận
- **Cromatic từ dưới**: B → C. **Cromatic từ trên**: D♭ → C.
- **Liền bậc** (trong âm giai): D → C.
Cùng nguyên tắc dùng cho bè trầm ở [[bass-di-jazz|bass đi]].

## Bao vây (enclosure)
"chơi các nốt **ở hai phía** nốt mục tiêu trước khi chơi nốt mục tiêu". Hai nốt kẹp có thể liền bậc, cromatic hoặc trộn lẫn, theo thứ tự trên – dưới hoặc dưới – trên. **Charlie Parker** và **Cannonball Adderley** dùng bao vây rất nhiều — đó là một phần cốt lõi của "ngôn ngữ" [[phong-cach-jazz|bebop]].
::staff treble F4 D#4 E4=E / D#4 F4 E4=E / F4 D4 D#4 E4=E | Ba cách bao vây nốt E (nốt 3 của C): F (trên, liền bậc) – D♯ (dưới, cromatic) – E; đảo thứ tự; F – D – D♯ (liền bậc trên, rồi hai nốt cromatic từ dưới)
::rhythm 4/4 e-e q h // | Đặt nốt mục tiêu vào phách: hai nốt bao vây là hai móc đơn trước phách 2, nốt mục tiêu rơi đúng phách (minh hoạ tiết tấu)

## Luyện tập
1. Chọn một nốt mục tiêu (nốt 3 của mỗi hợp âm trong [[ii-v-i]]), tiếp cận nó từ dưới nửa cung, rồi từ trên.
2. Thêm bao vây, giữ nốt mục tiêu **luôn ở phách**.
3. Kết hợp với [[am-giai-bebop]] để câu nhạc chạy liên tục mà nốt hợp âm vẫn rơi đúng phách.
Liên quan: [[ngau-hung-jazz]], [[ngau-hung-doc-ngang]], [[phuong-phap-luyen-ngau-hung]].

## Câu hỏi và bài tập
1. Chọn nốt mục tiêu là nốt 3 của mỗi hợp âm trong ii – V – I; tiếp cận mỗi nốt bằng một kiểu khác.
2. Chơi âm giai Đô trưởng, mỗi nốt được bao vây trước khi chơi.
3. Viết một câu hai ô trên G7 – Cmaj7 kết ở nốt E bằng một nhóm bao vây.
`,
  },
  {
    slug: 'ngau-hung-doc-ngang',
    title: 'Ngẫu hứng dọc và ngẫu hứng ngang',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['vertical improvisation', 'horizontal improvisation', 'ngẫu hứng dọc', 'ngẫu hứng ngang', 'ngẫu hứng theo hợp âm', 'ngẫu hứng theo giọng', 'octave displacement', 'pivot arpeggio', 'hợp âm rải xoay'],
    summary: 'Hai cách nghĩ khi ngẫu hứng jazz: "dọc" — theo từng hợp âm, bằng hợp âm rải và nốt hợp âm; "ngang" — theo một âm giai hay giọng cho cả một nhóm hợp âm. Bài kèm các kỹ thuật làm câu nhạc dọc bớt máy móc như dịch quãng 8 và hợp âm rải xoay.',
    wiki: 'Chord-scale_system',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Chord-scale system', 'https://en.wikipedia.org/wiki/Chord-scale_system'],
    ],
    body: `
Có hai cách nghĩ khi solo. Cách thứ nhất: mỗi hợp âm một thế giới — bạn chơi **dọc**, theo từng hợp âm. Cách thứ hai: nhiều hợp âm chung một giọng — bạn chơi **ngang**, theo giọng. Người giỏi chuyển qua lại giữa hai cách mà không cần nghĩ; người mới nên học cả hai, theo thứ tự.

## Dọc và ngang
| | [[ngau-hung-piano|Ngẫu hứng]] **dọc** | Ngẫu hứng **ngang** |
|---|---|---|
| Nghĩ theo | **Từng hợp âm** | **Một âm giai / giọng** cho nhiều hợp âm |
| Chất liệu | [[luyen-hop-am-rai|Hợp âm rải]], nốt hợp âm, [[not-ngoai-hop-am|nốt lướt]] cromatic | Âm giai, [[dieu-thuc|điệu thức]], motif |
| Hợp với | [[phong-cach-jazz|Bebop]], tiến trình đổi hợp âm nhanh | [[jazz-dieu-thuc|Jazz điệu thức]], hợp âm kéo dài |
| Nguy cơ | Nghe như bài tập hợp âm rải | Không bám hợp âm, mất "đường đi" |
Phân biệt "dọc" (hợp âm) và "ngang" (giai điệu) là trung tâm trong lý thuyết của George Russell (xem [[he-thong-hop-am-am-giai]]). Nên nắm ngẫu hứng dọc **trước** các kỹ thuật phức tạp hơn.

## Làm câu nhạc dọc bớt máy móc
- **[[not-tiep-can-jazz|Bao vây]]** nốt hợp âm.
- **[[mau-lap-chu-ky|Mẫu lặp theo chu kỳ]]** (cycled patterns) và **[[mo-tien-hoa-am|mô tiến]]**.
- **Phát triển [[motif]]**.
- **Dịch quãng 8** (octave displacement): chuyển **một nốt** của câu lên hoặc xuống một quãng 8 rồi đi tiếp từ đó — hiệu quả nhất khi nốt bị dịch rơi vào phách nhẹ và đi ngược hướng [[cau-nhac|câu nhạc]]. Làm vậy với hợp âm rải gọi là **hợp âm rải xoay** (pivot arpeggio).
::staff treble C4 E4 G4 B4 / C4 E4 G4 B3 | Hợp âm rải Cmaj7 đi lên, rồi dịch nốt B xuống một quãng 8: câu nhạc "xoay" hướng và đi tiếp từ chỗ mới

## Bản đồ hợp âm (chord mapping)
Cách nối hai lối nghĩ: chọn **một âm giai nền** hợp với cả tiến trình (hoặc cả một [[phan-tich-tien-trinh-jazz|giọng tạm]]), đi ra các ý riêng cho từng hợp âm rồi **quay về âm giai nền** để giải quyết căng thẳng.
Liên quan: [[ngau-hung-jazz]], [[choi-ngoai-jazz]].

## Câu hỏi và bài tập
1. Solo một chorus "Autumn Leaves" theo lối dọc (âm giai từng hợp âm), rồi một chorus theo lối ngang (hai âm giai: B♭ trưởng và Sol thứ).
2. Trên Dm7 – G7, chơi hai ô chỉ bằng Đô trưởng; rồi hai ô theo từng hợp âm.
3. Làm bài tập âm giai liên tục ở [[tu-am-giai-den-am-nhac]] trên một bài bạn chọn.
`,
  },
  {
    slug: 'choi-ngoai-jazz',
    title: 'Chơi "trong", chơi "ngoài" và side-slipping',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['outside', 'playing outside', 'playing inside', 'side-slipping', 'side slipping', 'sidestepping', 'căng và giải quyết jazz', '4 giai đoạn ngẫu hứng'],
    summary: 'Ngẫu hứng jazz là trò chơi căng – giải quyết: chơi "trong" (nốt hợp âm, nốt căng dùng được) thì yên, chơi "ngoài" (nốt xa hợp âm) thì căng. Side-slipping — lặp một câu nhạc cao hoặc thấp hơn nửa cung rồi quay về — là cách "ra ngoài" có kiểm soát mà McCoy Tyner và John Coltrane hay dùng.',
    wiki: 'Outside_(jazz)',
    refs: [
      ['Mark Levine — The Jazz Theory Book (Sher Music, 1995)', 'https://www.shermusic.com/products/the-jazz-theory-book'],
      ['Wikipedia — Outside (jazz)', 'https://en.wikipedia.org/wiki/Outside_(jazz)'],
      ['Linna — McCoy Tyner, modal jazz and the dominant chord (Uniarts Helsinki)', 'https://taju.uniarts.fi/bitstream/handle/10024/6819/302684_Sami_Linna_McCoyTynerModalJazzandtheDominantChord_verkkoversio.pdf'],
    ],
    body: `
Một lúc nào đó, chơi "đúng" sẽ làm bạn chán. Đó là lúc học chơi **ngoài** — cố ý rời khỏi hoà âm, tạo căng, rồi quay về. Điều quan trọng nhất cần nhớ: chơi ngoài **chỉ hay khi bạn biết đường về**. Đi lạc mà không về thì chỉ là sai.

## Căng và giải quyết
Ý tưởng bao trùm của [[ngau-hung-jazz|ngẫu hứng jazz]] là **căng và giải quyết**: chơi nốt **nghịch** ("ngoài") tạo căng; quay về nốt **thuận** ("trong" — nốt hợp âm, [[hop-am-mo-rong|nốt căng]] dùng được) để giải quyết. Đây cũng là nguyên lý [[thuan-nghich|thuận – nghịch]] của âm nhạc cổ điển, chỉ ở mức táo bạo hơn.

## Side-slipping
Cách làm: chơi một câu trong âm giai của hợp âm, **lặp lại nó cao hoặc thấp hơn nửa cung**, rồi **quay về** âm giai gốc. Nhờ sự **lặp lại**, các nốt "sai" nghe như cố ý.
::staff treble D4 F4 A4 C5 / Eb4 Gb4 Bb4 Db5 / D4 F4 A4 C5 | Trên Dm7: câu nhạc trong âm giai Đô trưởng, lặp lại cao hơn nửa cung (chơi "ngoài"), rồi quay về
- Pianist **[[mccoy-tyner|McCoy Tyner]]** hay side-slipping trong lối chơi [[am-giai-ngu-cung|ngũ cung]] ở tay phải; **John Coltrane** chuyển một motif qua nhiều giọng rồi quay về (ví dụ trong *A Love Supreme*). Nhà nghiên cứu Sami Linna cho rằng âm thanh "[[dieu-thuc|điệu thức]]" của Tyner thực ra đến nhiều từ hợp âm át và các cặp ii – V ở giọng khác.
- Wikipedia liệt kê các cách chơi "ngoài" khác: chồng [[vong-coltrane|vòng Coltrane]] lên tiến trình, [[da-dieu-tinh|đa điệu tính]].
- Side-slipping cũng dùng được khi **đệm**: chơi hợp âm, nhanh chóng chơi hợp âm cùng loại cách nửa cung, rồi về lại (xem [[dem-jazz]]).

## Đa điệu tính (bitonality)
Dùng một âm giai **khác** âm giai của hợp âm. Âm giai càng gần trên [[vong-quang-nam|vòng quãng 5]] càng nghe thuận; âm giai giữ được [[not-dan-huong|nốt 3 và 7]] của hợp âm thì hợp hơn.

## Bốn giai đoạn của người học ngẫu hứng
1. **"Mày mò"**: biết âm giai nhưng chơi ngập ngừng, nhỏ, ngẫu nhiên.
2. **"Coltrane"**: tự tin quá mức, nhồi càng nhiều nốt càng tốt.
3. **"Basie"**: chậm lại, câu ngắn, có khoảng nghỉ — **đầu óc** chọn nốt chứ không phải ngón tay.
4. **"Ra ngoài"**: nhắm [[not-tiep-can-jazz|nốt dẫn hướng]], căng – giải quyết, phát triển [[motif]], chạy cromatic, side-slipping.
Chỉ nên "ra ngoài" khi đã chơi "trong" vững vàng — xem [[ngau-hung-doc-ngang]], [[phuong-phap-luyen-ngau-hung]].

Thêm: [[mau-lap-chu-ky]], [[superimposition-jazz]], [[not-tranh-va-quang-nghich]].

## Các cách đi ra ngoài
Levine liệt kê vài con đường, từ dễ tới khó:
- **Mô tiến ra ngoài**: đặt một câu ngắn, rồi lặp nó ở cao độ khác lệch khỏi hợp âm (xem [[tu-am-giai-den-am-nhac]], [[mau-lap-chu-ky]]).
- **Lệch nửa cung**: chơi câu của bạn cách hợp âm đang viết nửa cung (trên Dm7, chơi như trên E♭m7), rồi trượt về.
- **Lệch một tritone**: chơi trên hợp âm cách một tritone (trên G7, nghĩ D♭7) — đây cũng là [[thay-the-tritone|thay thế tritone]] ở dạng giai điệu.
- **Chọn âm giai "lạ"**: chơi một âm giai không thuộc hợp âm trong một hai ô.
- **Âm giai cromatic**: mười hai nốt, không nốt nào "sai" khi đi qua nhanh.
Và lời khuyên của Levine ở cuối chương: **can đảm lên, cứ chơi ngoài đi.** Thứ tệ nhất xảy ra là một nốt nghe lạ — và nốt tiếp theo là nốt đầu tiên của phần còn lại trong bài solo của bạn.

## Câu hỏi và bài tập
1. Trên một vamp Dm7, chơi hai ô "trong", một ô lệch nửa cung (E♭m), một ô về lại.
2. Trên G7 – Cmaj7, chơi một câu trên D♭7 rồi giải quyết về Cmaj7.
3. Đệm bằng side-slipping: một hợp âm, cùng hợp âm cao nửa cung, rồi về.
`,
  },  {
    slug: 'not-dan-huong',
    title: 'Nốt dẫn hướng (guide tones)',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['nốt dẫn hướng', 'guide tones', 'guide tone', 'guide tone line', 'đường nốt dẫn hướng', 'nốt 3 và 7'],
    summary: 'Nốt 3 và nốt 7 của mỗi hợp âm là "nốt dẫn hướng": chúng xác định hợp âm trưởng, thứ hay át và nối các hợp âm bằng những bước rất nhỏ. Nhắm vào chúng khi ngẫu hứng là cách chắc chắn nhất để giai điệu "nói" được tiến trình hợp âm.',
    refs: [
      ['Learn Jazz Standards — Improve jazz solos using guide tones', 'https://www.learnjazzstandards.com/ljs-podcast/learn-jazz-theory/ljs-53-improve-jazz-solos-using-guide-tones/'],
    ],
    body: `
Nếu bạn bí ý giữa một bài solo, đây là chiếc phao: **nốt 3 và nốt 7**. Hai nốt này nói rõ hợp âm hơn mọi nốt khác, và chúng nối từ hợp âm này sang hợp âm kia gần như không phải di chuyển. Một đường giai điệu chỉ gồm nốt dẫn hướng đã đủ để người nghe "thấy" cả tiến trình.

## Vì sao là nốt 3 và 7?
**nốt 3 và nốt 7** quyết định **tính chất** hợp âm (trưởng 7, thứ 7, át 7); chỉ cần hai nốt này là đã nghe ra "cảm giác" của hợp âm. Nốt gốc thường do bass chơi, nốt 5 ít mang thông tin. Vì vậy hai nốt này cũng là tay trái [[toi-gian|tối giản]] — [[xep-hop-am|shell voicing]].
| Hợp âm | Nốt 3 | Nốt 7 |
|---|---|---|
| Dm7 | F | C |
| G7 | B | F |
| Cmaj7 | E | B |

## Đường nốt dẫn hướng
Tiến trình hợp âm thường tạo ra những **đường nốt dẫn hướng** dễ theo dõi khi [[ngau-hung-piano|ngẫu hứng]] — ở mỗi lần đổi hợp âm, đường ấy **đứng yên hoặc đi xuống một bậc**. Trong [[ii-v-i|ii – V – I]], nốt 7 của hợp âm này đi xuống thành nốt 3 của hợp âm sau.
::staff treble C5=7 B4=3 B4=7 / F4=3 F4=7 E4=3 | Hai đường nốt dẫn hướng qua Dm7 – G7 – Cmaj7: C → B → B và F → F → E — mỗi bước đứng yên hoặc đi xuống
Trong V7 → I, tritone B – F của G7 giải quyết vào quãng 3 C – E (xem [[thuan-nghich]], [[dan-giong]]).

## Bài luyện "nhắm nốt dẫn hướng"
1. Chơi những **câu ngắn có khoảng nghỉ**.
2. **Kết mỗi câu bằng nốt 3 hoặc 7** của hợp âm đang vang (ví dụ A hoặc E♭ trên F7).
3. **Nhìn trước**: [[cau-nhac|câu nhạc]] thường kết ở ô sau, khi hợp âm đã đổi.
4. Khi đã quen, thử nhắm nốt 9 — nghe "táo bạo" hơn.
Bài luyện này buộc bạn **bám theo tiến trình** và **kết câu chắc chắn**. Nốt dẫn hướng cũng là nốt mục tiêu tốt nhất cho [[not-tiep-can-jazz|nốt tiếp cận và bao vây]].

## Một nguyên tắc chung của jazz điệu tính
Trong jazz có điệu tính, người solo "nói lại" tiến trình bằng cách **nhắm nốt dẫn hướng** và **tránh [[not-tranh-va-quang-nghich|nốt tránh]]**. Với [[jazz-dieu-thuc|jazz điệu thức]], vai trò này giảm đi vì hợp âm ít đổi.
Liên quan: [[ngau-hung-doc-ngang]], [[dem-jazz]], [[tai-hoa-am]].

## Câu hỏi và bài tập
1. Chơi một đường nốt dẫn hướng (3 – 7) qua cả "Autumn Leaves", mỗi hợp âm một nốt, rồi hai nốt.
2. Làm lại, lần này thêm một nốt tiếp cận trước mỗi nốt dẫn hướng.
3. Solo một chorus blues mà phách 1 của mỗi ô luôn là nốt 3 hoặc 7.
`,
  },
  {
    slug: 'not-tranh-va-quang-nghich',
    title: 'Nốt tránh và quãng nghịch trong ngẫu hứng',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['avoid note', 'avoid notes', 'nốt tránh', 'dissonant intervals', 'quãng nghịch jazz', 'nốt tránh jazz'],
    summary: 'Nốt tránh là nốt nằm nửa cung trên một nốt hợp âm (F trên Cmaj7, C trên G7; Lamar xếp thêm B trên Dm7): dùng làm nốt lướt nhanh, không ngân dài. Quãng nghịch (quãng 2, 7, tritone, quãng 9 thứ) tạo căng; giải quyết về quãng thuận hoặc nốt dẫn hướng — căng và giải toả như những đợt sóng.',
    body: `
Có những nốt mà bạn ngân lên là cả ban nhăn mặt. Không phải vì chúng "sai" — chúng thuộc âm giai cơ mà — mà vì chúng **chỏi** với một nốt của hợp âm. Biết chúng là ai, bạn sẽ biết lướt qua chúng thay vì đứng lại.

## Nốt tránh
Định nghĩa gọn: **nốt tránh là bất kỳ nốt nào cao hơn một nốt hợp âm nửa cung**. Quy tắc gợi nhớ:
| Hợp âm | Nốt tránh | Ví dụ trên Đô / Rê / Si |
|---|---|---|
| [[hop-am-bay|maj7]] | Bậc 4 | F trên Cmaj7 (nửa cung trên E) |
| 7 (át) | Bậc 4 | C trên G7 (nửa cung trên B) |
| m7 | Bậc 6 | B trên Dm7 (cách A một cung, tạo tritone với F) |
| m7♭5 | Bậc 2 và 6 | C và G trên Bø7 |
Lưu ý: khái niệm này **có phần chủ quan**: nhiều người không coi bậc 6 [[dieu-thuc|Dorian]] trên m7 là nốt tránh; người chơi hiện đại cũng hay đặt ♯9 ngay trên một nốt hợp âm.

**Dùng thế nào?**
- Chơi như **[[not-ngoai-hop-am|nốt lướt]] nhanh**, không nhấn, không ngân (xem [[not-tiep-can-jazz]]).
- Chọn âm giai **ít nốt tránh**: Lydian trên maj7 không có nốt tránh nào (xem [[he-thong-hop-am-am-giai]]).
- Cố ý: **kết câu trên nốt tránh** để tạo căng — rồi giải quyết ở câu sau.
::staff treble E4 F4=nốt_tránh E4 / E4 G4 F4 | Trên Cmaj7: F chỉ lướt qua rồi về E (dùng tốt); ngân dài F sẽ va chạm với nốt 3 của hợp âm

## Quãng nghịch
Cách xếp hay dùng: **nghịch** — quãng 2 thứ, quãng 2 trưởng, quãng 7 thứ, quãng 7 trưởng, **tritone**, quãng 9 thứ; **thuận** — đồng âm, quãng 8, quãng 5, quãng 4, quãng 3 và 6. Cách xếp này cũng chủ quan (xem [[thuan-nghich]] để hiểu vì sao quan niệm thay đổi theo lịch sử).
- "Dùng quãng nghịch để **tạo căng** trong solo, rồi **giải quyết** bằng cách lùi về một quãng thuận (hoặc một [[not-dan-huong|nốt dẫn hướng]])."
- Căng thẳng nên **lên xuống như sóng**.
- Hợp âm át vốn nghịch vì có tritone giữa nốt 3 và 7 — nên nó hút về chủ; nốt ♭9 thường được tránh vì quá nghịch (xem [[hop-am-at-bien-hoa]]).
::staff treble B4+F5=tritone C5+E5=quãng_3 | Tritone B – F (trong G7) giải quyết vào quãng 3 C – E (Cmaj7): B lên C, F xuống E

Liên quan: [[choi-ngoai-jazz]], [[am-giai-bebop]] (nốt lướt đặt vào phách nhẹ).

## Câu hỏi và bài tập
1. Tìm nốt tránh của Cmaj7, Dm7, G7, Am7.
2. Trên Fmaj7, ngân B♭ rồi B; trên G7, ngân C rồi C♯. Nghe sự khác nhau.
3. Viết một câu trên Cmaj7 có nốt F lướt qua nhưng không đứng lại.
`,
  },
  {
    slug: 'trang-tri-giai-dieu-jazz',
    title: 'Trang trí giai điệu trong jazz',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['embellishing the melody', 'biến tấu giai điệu jazz', 'fill', 'ngẫu hứng trên giai điệu', 'melodic paraphrase'],
    summary: 'Cách ngẫu hứng lâu đời nhất của jazz: giữ giai điệu bài hát nhưng đổi tiết tấu, đổi nốt, chèn "fill" vào chỗ nốt dài và thêm hoa mỹ. Người nghe luôn biết mình đang nghe bài nào — vì vậy đây cũng là cách "giải toả" căng thẳng trong một solo.',
    body: `
Trước khi solo bằng nốt của riêng mình, hãy học cách **chơi giai điệu theo kiểu của mình**. Đó là cách Louis Armstrong, Billie Holiday, Lester Young ngẫu hứng: giữ giai điệu gốc, nhưng đổi nhịp, thêm nốt, nhả sớm nhả muộn. Người nghe vẫn nhận ra bài — và nghe ra bạn.

## Bốn cách
1. **Đổi tiết tấu, giữ cao độ** — dồn, giãn, đảo phách các nốt giai điệu (xem [[dao-phach]], [[tiet-tau-ngau-hung-jazz]]).
2. **Đổi cao độ, giữ tiết tấu** — thay vài nốt bằng nốt hợp âm hoặc [[hop-am-mo-rong|nốt căng]] khác.
3. **Chèn "fill"** vào chỗ **nốt dài và [[dau-lang|dấu lặng]]** — vài nốt của âm giai rồi quay lại giai điệu.
4. **Thêm [[ky-hieu-hoa-my|hoa mỹ]]**: láy rền, láy chùm, láy, nốt hoa mỹ.
Cách này "**trấn an người nghe** rằng họ vẫn đang nghe cùng một bài hát", nên nó cũng là cách **giải quyết căng thẳng** sau một đoạn "chơi ngoài" (xem [[choi-ngoai-jazz]]).

::rhythm 4/4 h h / e-e q h // | Một ý minh hoạ cách 1: hai nốt trắng của giai điệu được "dồn" lại thành móc đơn – đen, nốt cuối giữ nguyên

## Bài khởi động cho người mới
Trên "Autumn Leaves" (xem [[phan-tich-tien-trinh-jazz]]): chơi giai điệu; đến **nốt ngân dài**, chơi vài nốt của **âm giai Si giáng trưởng** rồi **quay về giai điệu**. Mỗi lần chơi lại, tăng dần phần "fill".

## Lịch sử: từ trang trí đến sáng tạo giai điệu mới
- Cho đến **thời đại [[swing|Swing]]**, "[[ngau-hung-piano|ngẫu hứng]]" về cơ bản là **chơi giai điệu có trang trí**.
- **Coleman Hawkins** đi xa hơn: thay vì trang trí giai điệu, ông **tạo giai điệu mới từ hoà âm** của bài — mở đường cho [[phong-cach-jazz|bebop]] (xem [[ngau-hung-doc-ngang|ngẫu hứng dọc]]).
- **Sonny Rollins** quay lại với giai điệu theo cách khác: lấy **mảnh của giai điệu làm [[motif]]** và phát triển dần qua cả bài solo (xem [[bien-tau]], [[xay-dung-bai-solo]]).
Liên hệ cổ điển: trang trí giai điệu cũng là cốt lõi của hoa mỹ [[thoi-ky-baroque|Baroque]] và [[lich-su-ngau-hung|ngẫu hứng trong nhạc cổ điển]].

## Câu hỏi và bài tập
1. Chơi giai điệu một bài chuẩn ba lần, mỗi lần đổi tiết tấu một chỗ.
2. Thêm nốt tiếp cận vào mỗi nốt dài của giai điệu.
3. Chơi giai điệu ở một quãng tám khác cho đoạn B (xem [[doc-lead-sheet-va-thuoc-bai]]).
`,
  },
  {
    slug: 'mau-lap-chu-ky',
    title: 'Mẫu lặp theo chu kỳ (cycled patterns)',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['cycled patterns', 'cycled pattern', 'mẫu lặp theo chu kỳ', 'mẫu lặp dịch giọng', 'sequence jazz'],
    summary: 'Mẫu lặp theo chu kỳ là một câu nhạc ngắn được lặp lại và dịch lên hoặc xuống theo một quãng cố định. Vì 12 chia hết cho 1, 2, 3, 4, 6, chu kỳ đều nhau sẽ quay về nốt xuất phát — cho phép "đi ra ngoài" rồi trở về đúng nốt mục tiêu.',
    body: `
Lấy một câu ba bốn nốt. Lặp nó, mỗi lần dịch lên một quãng cố định — một cung, một quãng 3 thứ, một quãng 3 trưởng. Bạn vừa tạo ra một **mẫu lặp chu kỳ**, và sẽ nghe thấy nó kéo người nghe ra khỏi giọng rồi đưa về lại. Đây là họ hàng gần của [[tu-am-giai-den-am-nhac|mô tiến]].

## Định nghĩa
"tạo một khuôn mẫu bằng cách **lặp lại một [[cau-nhac|câu nhạc]] và dịch nó lên hoặc xuống theo những quãng cố định**". Đây là họ hàng của [[mo-tien-hoa-am|mô tiến]] trong nhạc cổ điển, nhưng không cần bám âm giai.

## Vì sao nghe được?
- Một khuôn đơn giản lặp theo quãng cố định "**nghe hay bất kể bạn chơi nốt nào hay trên hợp âm nào**" — tai nghe theo **logic của khuôn**, không theo giọng.
- Nhờ vậy có thể **ra ngoài** âm giai để tạo căng rồi **trượt về trong** để giải quyết — cùng nhóm kỹ thuật với chạy cromatic và [[choi-ngoai-jazz|side-slipping]].
- Nhược điểm: dễ nghe **máy móc**; nên xen với những câu nhạc theo giọng.

## Tính toán để về đúng đích
Vì **12 chia hết cho 1, 2, 3, 4, 6**, dịch đều theo 1, 2, 3, 4 hoặc 6 [[cung-nua-cung|nửa cung]] sẽ quay về nốt xuất phát (xem đồng hồ lớp cao độ trong [[tap-hop-cao-do]]). Mẹo: muốn kết ở một [[not-tiep-can-jazz|nốt mục tiêu]], **bắt đầu khuôn trên chính nốt đó cao hơn một quãng 8** rồi đi xuống theo quãng chọn.
::staff treble E5 G#5 B5 / D5 F#5 A5 / C5 E5 G5 / Bb4 D5 F5 / Ab4 C5 Eb5 / Gb4 Bb4 Db5 / E4=đích | Minh hoạ: hợp âm ba trưởng rải, dịch xuống từng cung từ E — sau sáu lần quay về E (nốt 3 của Cmaj7)
::pc-clock 4 2 0 10 8 6 | Các nốt bắt đầu E – D – C – B♭ – A♭ – G♭: một âm giai toàn cung — chu kỳ một cung chia quãng 8 thành 6 phần bằng nhau
- Dịch theo **quãng 3 thứ** (3 nửa cung) vẽ ra một [[hop-am-bay-giam|hợp âm 7 giảm]]; theo **quãng 3 trưởng** vẽ ra [[hop-am-ba-tang|hợp âm ba tăng]] — chính là trục của [[vong-coltrane|vòng Coltrane]].
- Khi lỡ chơi nốt sai, biến nó thành điểm khởi đầu của một chuỗi cromatic hoặc một [[ostinato|mẫu lặp]] — xem [[meo-ngau-hung-jazz]].
Liên quan: [[am-giai-doi-xung-jazz]], [[ngau-hung-doc-ngang]].

## Câu hỏi và bài tập
1. Lặp một câu bốn nốt theo quãng 3 thứ qua bốn lần trên C7♭9.
2. Lặp một câu ba nốt theo quãng 3 trưởng; ba lần là về chỗ cũ.
3. Dùng mẹo bắt đầu cao một quãng 8 để mẫu lặp kết ở nốt 3 của hợp âm đích.
`,
  },
  {
    slug: 'tiet-tau-ngau-hung-jazz',
    title: 'Tiết tấu, cách nhả nốt và dịch chuyển giai điệu',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['jazz phrasing', 'jazz articulation', 'rhythm and articulation', 'cách nhả nốt jazz', 'displacing the melody', 'dịch chuyển giai điệu', 'bar-line shift', 'dịch vạch nhịp', 'ghost note', 'nốt ma'],
    summary: 'Trong jazz, cảm giác đến từ cách chơi nốt chứ không chỉ chọn nốt: móc đơn swing, nhấn cả phách mạnh lẫn phách nhẹ, nhả nốt nảy và gọn, nốt "ma", câu bắt đầu và kết ở phách nhẹ. Dịch giai điệu sớm hoặc muộn so với hợp âm (displacement, bar-line shift) tạo căng mà người nghe vẫn có điểm tựa.',
    body: `
Nhiều người học jazz dồn hết sức vào việc chọn nốt — và quên mất nhịp. Nhưng hãy thử điều này: chơi một nốt duy nhất, chỉ đổi tiết tấu, trong một chorus. Nếu bạn làm nó swing được, bạn đã hiểu một nửa bí mật. Một nốt đúng chỗ, đúng lúc thắng mười nốt hay đặt sai nhịp.

## Nốt hay cách chơi nốt?
Cảm giác jazz phụ thuộc vào **cách chơi nốt**, không chỉ nốt nào được chơi.
- **[[swing]]** là nhịp nền: móc đơn swing mang cảm giác [[lien-ba|liên ba]], bỏ nốt giữa.
- **Nhấn** cả [[so-chi-nhip|phách mạnh]] lẫn phách nhẹ; nhấn mỗi 2–5 nốt giúp câu móc đơn dài không đơn điệu, thậm chí tạo [[da-nhip|đa tiết tấu]] chồng lên [[cau-nhac|câu nhạc]].
- **Cách nhả nốt**: "nảy, gọn, có lực" — không hẳn staccato, cũng không legato (trừ ballad) — xem [[cach-dien-tau]].
- **Nốt ma** (ghost note): nốt chơi rất nhẹ, gần như chỉ nghe được tiết tấu.
- **Bắt đầu và kết câu ở phách nhẹ** — câu [[phong-cach-jazz|bebop]] điển hình bắt đầu ở phách nhẹ, móc đơn swing, nhấn xen kẽ phách mạnh và phách nhẹ.
::rhythm 4/4 re >e-e e-e >e-e e-e // | Câu móc đơn bắt đầu ở "&" của phách 1, nhấn vài nốt phách nhẹ — khuôn tiết tấu kiểu bebop (minh hoạ)
::rhythm 4/4 >e-e e->e e-e >e-e // | Nhấn mỗi 3 nốt trên dòng móc đơn (nốt 1, 4, 7): nhóm 3 chồng lên mạch 4 phách tạo đa tiết tấu (xem [[hemiola]])

## Dịch chuyển giai điệu (displacement)
Chơi giai điệu bài hát **sớm hơn hoặc muộn hơn** so với tiến trình hợp âm.
- **Muộn** → tạo cảm giác chờ đợi; **sớm** → như "chạy trước" rồi đợi hoà âm đuổi kịp.
- Tạo căng theo hai cách: **bất ngờ**, và giai điệu rơi vào **hợp âm khác** nên va chạm nhẹ; nhưng vì giai điệu quen thuộc, người nghe vẫn có điểm tựa (xem [[trang-tri-giai-dieu-jazz]]).

## Dịch vạch nhịp (bar-line shift)
Gần với [[superimposition-jazz|superimposition]] là **dịch vạch nhịp**: chơi một câu "ám chỉ" hợp âm **sớm** vài phách (đón trước) hoặc **muộn** vài phách (trì hoãn). Kỹ thuật này gắn với Lester Young, Coleman Hawkins và Charlie Parker. Trong cổ điển, cái tương tự là [[not-ngoai-hop-am|nốt đón và nốt trễ]].
Bài tập đa dạng tiết tấu: chơi một câu, rồi lặp lại **chỉ đổi tiết tấu** (xem [[xay-dung-bai-solo]]).

## Câu hỏi và bài tập
1. Solo một chorus blues chỉ bằng một nốt, đổi tiết tấu liên tục.
2. Chơi một motif bốn nốt, dịch nó sang bắt đầu ở phách 2, rồi ở "và" của phách 3.
3. Solo một chorus mà mỗi câu dừng ít nhất hai phách trước câu sau.
`,
  },
  {
    slug: 'lick-va-trich-dan',
    title: 'Câu sáo, lick và trích dẫn',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['lick', 'licks', 'cliché jazz', 'câu sáo', 'quoting', 'trích dẫn trong solo', 'The Lick', 'ii-V lick', 'lick ii-V-I'],
    summary: 'Lick là những câu nhạc quen thuộc của ngôn ngữ jazz; câu sáo (cliché) là lick ai cũng nhận ra; trích dẫn (quoting) là chen giai điệu của một bài khác vào solo. Bài nêu cách học lick qua ii – V – I và các ví dụ trích dẫn nổi tiếng của Ella Fitzgerald, Duke Ellington, Charlie Parker, Count Basie.',
    wiki: 'The_Lick',
    refs: [
      ['Wikipedia — The Lick', 'https://en.wikipedia.org/wiki/The_Lick'],
      ['USC Digital Folklore Archives — The Lick', 'https://folklore.usc.edu/the-lick-2/'],
    ],
    body: `
Học jazz giống học tiếng nước ngoài: không ai học nói bằng cách học thuộc từ điển. Bạn học **cụm từ**, nghe người bản ngữ nói, bắt chước, rồi ghép theo cách của mình. Lick là các cụm từ đó.

## Lick: từ vựng của ngôn ngữ jazz
Học jazz giống học một ngôn ngữ: **lick** là những "cụm từ" có sẵn. Học lick vì hai lý do: làm **từ vựng cách nói câu** ([[dien-dat-cau-nhac|phrasing]]) và làm **chỗ dựa** khi bí ý (xem [[meo-ngau-hung-jazz]]). Nhưng một solo cần đủ chất liệu riêng để không chỉ là chuỗi lick ghép lại.

## Học lick qua ii – V – I
Bài học đưa năm lick mẫu ở Si giáng trưởng; cách học quan trọng hơn bản thân lick:
1. Chơi lick nhiều lần và tự hỏi **người solo đang nghĩ gì**.
2. Tách lick thành **[[luyen-hop-am-rai|hợp âm rải]]**, **đoạn âm giai** và **[[not-ngoai-hop-am|nốt lướt]] cromatic** (xem [[ngau-hung-doc-ngang]], [[not-tiep-can-jazz]]).
3. Để ý các thủ pháp lặp lại: **dịch một câu theo từng hợp âm**; **bắt đầu hoặc kết câu ở phách nhẹ** (xem [[tiet-tau-ngau-hung-jazz]]).
4. Chuyển lick sang **cả 12 giọng**, nhất là các giọng yếu; tập chậm — tốc độ đến từ độ chính xác.
::staff treble D4=Dm7 F4 A4 C5 / B4=G7 A4 G4 F4 / E4=Cmaj7 | Một câu minh hoạ cách phân tích trên ii – V – I: hợp âm rải Dm7, đoạn âm giai đi xuống từ nốt 3 của G7, kết vào nốt 3 (E) của Cmaj7 — nốt dẫn hướng C → B → E nối các hợp âm
Với [[ii-v-i|ii – V – i thứ]]: [[dieu-thuc|Locrian]] ([[hop-am-bay|nửa giảm]]) trên ii, altered trên V7, [[am-giai-thu|thứ giai điệu]] trên i (xem [[dieu-thuc-thu-giai-dieu]]).

## "The Lick" — câu sáo thành trò đùa
Câu bảy nốt với các bậc **1 – 2 – ♭3 – 4 – 2 – ♭7 – 1** xuất hiện trong vô số solo; cái tên "The Lick" ra đời trên mạng xã hội những năm 2010 và nổi tiếng nhờ một video tổng hợp năm 2011. Nhạc công ngày nay chèn nó vào solo như **một câu đùa nội bộ**.
::staff treble C4 D4 Eb4 F4 D4 Bb3 C4 | "The Lick" trên C (thứ): C – D – E♭ – F – D – B♭ – C

## Trích dẫn (quoting)
Chơi **giai điệu của một bài hoàn toàn khác** trên tiến trình đang chơi — một kỹ thuật vui và kéo khán giả vào. Ví dụ:
- **Ella Fitzgerald** — "Blue Skies": trong đoạn hát scat, trích Hành khúc cưới của [[richard-wagner|Wagner]] và *[[tieu-pham-piano|Rhapsody]] in Blue* của [[george-gershwin|Gershwin]].
- **[[duke-ellington|Duke Ellington]]** — "Black and Tan Fantasy": trích Hành khúc tang lễ của [[frederic-chopin|Chopin]].
- **Charlie Parker** — "White Christmas": giấu "Jingle Bells".
- **Count Basie** — "April in Paris": trích "Pop Goes the Weasel".
- Nghe hầu hết các solo của **Dexter [[ly-thuyet-hoc-am-nhac-gordon|Gordon]]** để học cách trích dẫn.
Trích dẫn thường **ngắn** (một hai ô), kín đáo. Trích dẫn và câu sáo cũng là vào các cách **giải toả căng thẳng** — tai người nghe "về nhà" khi nhận ra một giai điệu quen (xem [[choi-ngoai-jazz]]). Trích dẫn để giễu nhại cũng có trong nhạc cổ điển: xem [[phan-tich-golliwogg-cakewalk]].

## Mẹo luyện tập
Một lick chỉ thuộc về bạn khi bạn chơi được nó **ở 12 giọng**, **trên nhiều bài**, và **đổi được nó** (cắt ngắn, kéo dài, đổi tiết tấu). Học ít lick mà sâu tốt hơn nhiều lick mà nông. Muốn thêm chất liệu: [[jazz-licks-lo-trinh|Jazz Licks]] có 1001 lick để tập.

## Câu hỏi và bài tập
1. Học một lick ii – V – I và chơi nó ở 12 giọng.
2. Biến lick đó: đổi tiết tấu, cắt ba nốt đầu, bắt đầu ở phách khác.
3. Nghe một solo của Dexter Gordon; tìm một trích dẫn.
`,
  },
  {
    slug: 'superimposition-jazz',
    title: 'Superimposition: chồng hợp âm lên hợp âm',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['superimposition', 'chồng hợp âm', 'chồng tiến trình', 'superimpose', 'hợp âm rải mở rộng'],
    summary: 'Superimposition là ngẫu hứng theo một hợp âm hay cả một tiến trình khác chồng lên tiến trình đang chơi — từ việc đơn giản như rải Em7 trên Cmaj7 (ra 3 – 5 – 7 – 9), D♭7 trên G7 (thay thế tritone), đến chồng cả chuỗi ii – V lên một hợp âm đứng yên. Lamar gắn kỹ thuật này với Coltrane, Lennie Tristano, Dave Liebman.',
    body: `
Đến giờ bạn chơi theo hợp âm đang viết. Superimposition là khi bạn **chồng một hợp âm, hay cả một tiến trình khác**, lên trên tiến trình đang chạy — tay bass vẫn đi đường cũ, còn câu nhạc của bạn kể một câu chuyện hoà âm khác. Khi làm đúng, người nghe cảm thấy một sức căng tuyệt đẹp; khi làm sai, nghe như bạn lạc bài. Khác nhau ở chỗ: câu nhạc của bạn có **logic** riêng và **về đúng chỗ**.

## Định nghĩa
**superimposition** là chơi **một tiến trình hợp âm hoàn toàn khác** chồng lên tiến trình đang có — một kỹ thuật hiện đại hơn, gắn với **John Coltrane**, **Lennie Tristano**, **Dave Liebman**; nó có thể tạo ra [[da-dieu-tinh|đa điệu tính]].

## Ba mức độ
**1. Một [[luyen-hop-am-rai|hợp âm rải]] khác trên một hợp âm** — nốt của hợp âm rải trở thành [[hop-am-mo-rong|nốt căng]] của hợp âm nền:
::grand E4+G4+B4+D5/C3=Em7_/_C Db4+F4+Ab4+Cb5/G2=D♭7_/_G | Em7 rải trên Cmaj7 = nốt 3 – 5 – 7 – 9; D♭7 rải trên G7 = ♭5 – ♭7 – ♭9 – 3 (âm thanh của [[thay-the-tritone|thay thế tritone]])
(Nốt C♭ trong D♭7 chính là B — nốt 3 của G7.) Đây cũng là ý tưởng của [[upper-structure]], chỉ khác là chơi rải trong giai điệu thay vì bấm hợp âm.

**2. Một chuỗi hợp âm trên một hợp âm đứng yên** — ví dụ trên hai ô Cmaj7, chơi [[cau-nhac|câu nhạc]] theo Dm7 – G7 rồi giải quyết về C ở phách đầu ô sau. Hãy chọn **tiến trình có cấu trúc mạnh** (ii – V – I, V – I) để câu nhạc giữ được logic, và dùng câu **liền bậc + hợp âm rải**, tránh nhảy xa.

**3. Cả một hệ thống khác** — [[vong-coltrane|vòng Coltrane]] chồng lên một [[ii-v-i]]; các hợp âm chồng nhanh trong [[sheets-of-sound|"sheets of sound"]].

## Nghe ra superimposition khi phân tích
Superimposition và [[tiet-tau-ngau-hung-jazz|dịch vạch nhịp]] là những điều nên tìm khi [[phan-tich-solo-jazz|phân tích một solo]].
Liên quan: [[triad-pairs]], [[choi-ngoai-jazz]], [[hop-am-chong]].

## Câu hỏi và bài tập
1. Trên hai ô Cmaj7, chơi một câu theo Dm7 – G7 rồi giải quyết về C ở phách 1 ô sau.
2. Trên một vamp Dm7, chồng một ii – V – I ở Đô trưởng; rồi một ii – V – I ở Mi giáng (lệch nửa cung).
3. Nghe một solo bạn thích; tìm chỗ người chơi đi "trước" hoặc "sau" hợp âm.
`,
  },
  {
    slug: 'sheets-of-sound',
    title: 'Sheets of sound (John Coltrane)',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['sheets of sound', 'tấm âm thanh', 'Coltrane sheets of sound', 'Soultrane', 'Ira Gitler'],
    summary: '"Sheets of sound" là tên nhà phê bình Ira Gitler đặt cho lối solo của John Coltrane cuối thập niên 1950 (ghi chú album Soultrane, 1958): những chuỗi nốt cực nhanh, nhóm lẻ, chồng các hợp âm mới lên hợp âm đang có — như rải D♭7 trên G7 hay E♭7, F♯7 trên C7.',
    wiki: 'Sheets_of_sound',
    refs: [
      ['Wikipedia — Sheets of sound', 'https://en.wikipedia.org/wiki/Sheets_of_sound'],
      ['All About Jazz — John Coltrane: Sheets of Sound', 'https://allaboutjazz.com/news/john-coltrane-sheets-of-sound/'],
    ],
    body: `
Nghe Coltrane cuối thập niên 1950, bạn sẽ thấy những trận mưa nốt: hợp âm rải, âm giai, nhanh tới mức không còn nghe từng nốt mà nghe cả một "tấm" âm thanh. Nhà phê bình Ira Gitler gọi đó là **sheets of sound**. Đây không phải chỗ để bắt đầu học ngẫu hứng — nhưng hiểu nó giúp bạn nghe Coltrane với đôi tai khác.

## Tên gọi
- Nhà phê bình **Ira Gitler** (tạp chí *Down Beat*) đặt cụm từ này trong **ghi chú album *Soultrane*** của John Coltrane (Prestige, **1958**), gắn với phần kết của bài "Russian Lullaby". Ông đã mô tả hiện tượng này từ ghi chú album *Traneing In* (1957) và dùng lại cụm từ trong bài "Trane on the Track" (*Down Beat*, 16/10/1958).
- Gitler nói ông dùng cụm từ như **lời khen**, không phải phê bình.

## Kỹ thuật
- **Chuỗi nốt rất nhanh**, nhóm **lẻ và bất đối xứng**, không bám vào nhóm 4 hay 8 nốt đều đặn.
- **Chồng hợp âm mới** lên hợp âm đang vang — đây là [[superimposition-jazz|superimposition]] ở tốc độ cao. Coltrane từng nói về việc chồng các hợp âm lên C7, trong đó có **E♭7** và **F♯7**.
| [[hop-am-chong|Hợp âm chồng]] | Trên | Các nốt so với hợp âm nền |
|---|---|---|
| D♭7 (D♭ – F – A♭ – C♭) | G7 | ♭5 – ♭7 – ♭9 – 3 |
| E♭7 (E♭ – G – B♭ – D♭) | C7 | ♯9 – 5 – ♭7 – ♭9 |
| F♯7 (F♯ – A♯ – C♯ – E) | C7 | ♯11 – ♭7 – ♭9 – 3 |
::grand Eb4+G4+Bb4+Db5/C3+E3+Bb3=E♭7_/_C7 F#4+A#4+C#5+E5/C3+E3+Bb3=F♯7_/_C7 | Hai hợp âm Coltrane chồng lên C7: cả hai đều cho các nốt căng biến hoá (♭9, ♯9, ♯11) — gần với âm giai [[am-giai-bat-cung|bát cung]] và [[upper-structure]]
- Vì đi rất nhanh, nhiều nốt chỉ là **[[not-ngoai-hop-am|nốt lướt]]** — đừng dừng lâu trên [[not-tranh-va-quang-nghich|nốt tránh]].

## Sau "sheets of sound"
Ngay sau giai đoạn này, Coltrane hệ thống hoá việc chia quãng 8 thành ba phần bằng nhau trong "[[phan-tich-giant-steps|Giant Steps]]" (1959) — xem [[vong-coltrane]]. Khi phân tích solo Coltrane, các chuỗi nhóm lẻ dày đặc là dấu hiệu nhận ra "sheets of sound" (xem [[phan-tich-solo-jazz]]).

## Câu hỏi và bài tập
1. Rải nhanh bằng liên ba hoặc móc kép các hợp âm 7 của ii – V – I ở Đô, mỗi hợp âm hai phách.
2. Chồng thêm một hợp âm lướt giữa hai hợp âm (như Coltrane hay làm), vẫn giữ nốt đầu phách là nốt hợp âm.
3. Nghe một solo của Coltrane trên album *Blue Train* (1957) hoặc *Soultrane* (1958).
`,
  },
  {
    slug: 'triad-pairs',
    title: 'Triad pairs: cặp hợp âm ba',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['triad pairs', 'triad pair', 'cặp hợp âm ba', 'âm giai sáu nốt', 'extended arpeggios', 'Bergonzi Hexatonics'],
    summary: 'Triad pairs là hai hợp âm ba (thường cách nhau một cung) không có nốt chung, chơi xen kẽ để tạo một âm giai sáu nốt: C + D trên Cmaj7 cho 1 – 9 – 3 – ♯11 – 5 – 13. Âm thanh hiện đại, góc cạnh — Lamar gợi ý nghe Chick Corea, McCoy Tyner, Oliver Nelson.',
    refs: [
      ['Alfred — Gary Campbell, Triad Pairs for Jazz (2001)', 'https://www.alfred.com/products/triad-pairs-for-jazz-00-0482b'],
      ['jazzguitar.be — Hexatonics (thảo luận sách của Jerry Bergonzi)', 'https://www.jazzguitar.be/forum/improvisation/105727-hexatonics.html'],
    ],
    body: `
Hai hợp âm ba, không chung nốt nào, đặt cạnh nhau: C và D chẳng hạn. Sáu nốt khác nhau, xen kẽ, và bạn có một âm thanh vừa "trong" (mỗi hợp âm ba đều rất rõ ràng) vừa "hiện đại" (cộng lại thì đầy nốt căng). Đây là món tủ của jazz từ thập niên 1960, và là một trong những cách dễ nhất để nghe "khác" mà vẫn đúng.

## Định nghĩa
**hai [[hop-am-ba|hợp âm ba]] cách nhau một bậc, không có nốt chung**. Ví dụ: **C trưởng + D trưởng trên Cmaj7** — mọi nốt đều là nốt hợp âm hoặc [[hop-am-mo-rong|nốt căng]] dùng được.
::staff treble C4+E4+G4=C D4+F#4+A4=D C4 D4 E4 F#4 G4 A4 | Cặp C + D: sáu nốt C – D – E – F♯ – G – A = nốt 1 – 9 – 3 – ♯11 – 5 – 13 của Cmaj7(♯11) — âm giai Lydian thiếu nốt 7
Hai hợp âm ba không chung nốt luôn ghép thành một **âm giai sáu nốt** ([[neo-riemann|hexatonic]]) — nhà sư phạm Jerry Bergonzi dành cả một tập sách (*Hexatonics*, 2007) cho cách nhìn này.

## Cách dùng
- Gán **một cặp cho mỗi hợp âm**, rồi **xen kẽ hai hợp âm ba** khi [[ngau-hung-piano|ngẫu hứng]] — rải, đảo thứ tự, đổi [[the-dao-hop-am|thể đảo]].
- Vì hai hợp âm ba đều là những hình quen tay, người chơi có thể chơi nhanh và "góc cạnh" mà vẫn chính xác.
- Chọn cặp theo [[he-thong-hop-am-am-giai|âm giai của hợp âm]]: ví dụ trên hợp âm át biến hoá, hai hợp âm ba lấy từ âm giai [[dieu-thuc-thu-giai-dieu|altered]].

## Nghe
Nghe: **[[chick-corea|Chick Corea]]** — *Now He Sings, Now He Sobs* (1968); **[[mccoy-tyner|McCoy Tyner]]** — "Passion Dance" (*The Real McCoy*, 1967); **Oliver Nelson** — "Stolen Moments" (1961). Sách tham khảo: Gary Campbell, *Triad Pairs for Jazz* (Alfred, 2001).
Liên quan: [[superimposition-jazz]], [[upper-structure]] (hợp âm ba trên tritone khi đệm), [[am-giai-doi-xung-jazz]] (âm giai tăng cũng là hai [[hop-am-ba-tang|hợp âm ba tăng]] ghép lại).

## Câu hỏi và bài tập
1. Chơi cặp C – D trên Cmaj7 (Lydian) theo mẫu: ba nốt C, ba nốt D, lên rồi xuống.
2. Tìm cặp hợp âm ba cho Dm7 (Dorian) và cho G7alt (từ La giáng thứ giai điệu).
3. Ứng tác một chorus trên vamp Cmaj7♯11 chỉ bằng cặp C – D.
`,
  },
  {
    slug: 'ngau-hung-hop-am',
    title: 'Ngẫu hứng bằng hợp âm',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['chordal improvisation', 'ngẫu hứng bằng hợp âm', 'solo bằng hợp âm', 'chord solo', 'block chord solo'],
    summary: 'Thay vì solo bằng một dòng giai điệu, người chơi giữ hợp âm ở tay phải và ngẫu hứng bằng các ngón trên cùng hoặc bằng cách rải hợp âm — "nghe phức tạp nhưng thực ra khá đơn giản". Gắn với Gene Harris, Oscar Peterson và lối block chords của Shearing, Red Garland.',
    refs: [
      ['Wikipedia — Locked hands style', 'https://en.wikipedia.org/wiki/Locked_hands_style'],
    ],
    body: `
Cuối một bài solo, khi bạn muốn lên đỉnh, có một chiêu mà dân piano dùng mãi không cũ: thôi chạy nốt đơn, chuyển sang **chơi bằng hợp âm**. Cả hai tay đánh những khối hợp âm theo nhịp — và bỗng nhiên cây đàn piano nghe như cả một big band.

## Cách làm
Ngẫu hứng bằng hợp âm "**nghe rất phức tạp và thú vị, nhưng thực ra khá đơn giản**":
1. **Giữ một hợp âm** ở tay phải.
2. **[[ngau-hung-piano|Ngẫu hứng]] quanh nó**: hoặc **rải hợp âm**, hoặc dùng **các ngón trên cùng** chạy giai điệu trong khi **ngón dưới giữ hợp âm**.
3. Hợp âm không cần là [[hop-am-bay|hợp âm 7]] cơ bản: có thể dựng trên [[xep-hop-am|thế bấm không gốc]] hoặc [[hoa-am-quang-bon|thế bấm quãng 4]] — nhưng hãy học từng thế bấm riêng trước.
::grand E4+G4+A4+C5+E5/C3=C6 F4+A4+C5+D5+F5/D3=Dm7 | Minh hoạ: ngón dưới tay phải giữ hợp âm, hai ngón trên chơi giai điệu theo quãng 3 — giai điệu và hoà âm đi cùng nhau

Dạng "khối" nhất là [[hop-am-khoi|locked hands]]: mỗi nốt giai điệu một hợp âm. Ở mức nâng cao, có thể [[tai-hoa-am|thay hợp âm]] V bằng hợp âm giảm cách nốt gốc nửa cung — "miễn là giữ được khung I – V – I – V bên dưới".

## Nghe
Nghe: **Art Blakey** — "Moanin'" (1958); **[[oscar-peterson|Oscar Peterson]]** — "Night Train" (thu âm 1962); **Gene Harris**, người dùng kỹ thuật này rất nhiều trong các solo với nhóm Three Sounds. Lối hợp âm khối của **George Shearing** và **Red Garland**: xem [[hop-am-khoi]].

## So với solo một dòng giai điệu
| | Một dòng giai điệu | Bằng hợp âm |
|---|---|---|
| Âm thanh | Linh hoạt, như kèn | Dày, như cả dàn kèn |
| Tốc độ | Nhanh được | Chậm hơn, nặng hơn |
| Vai trò trong solo | Phần lớn thời lượng | Thường để **lên cao trào** (xem [[xay-dung-bai-solo]]) |

## Câu hỏi và bài tập
1. Solo một chorus blues ở Fa: hai chorus đầu nốt đơn, chorus thứ ba bằng hợp âm.
2. Chơi một riff blues bằng hợp âm khối, lặp lại qua 12 ô.
3. Nghe "Moanin'" (Art Blakey) và tìm chỗ piano chuyển sang hợp âm.
`,
  },
  {
    slug: 'xay-dung-bai-solo',
    title: 'Xây dựng một bài solo',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['build an improvisation', 'xây dựng solo', 'cấu trúc bài solo', 'improvisational approaches', 'cách tiếp cận ngẫu hứng', 'motivic development jazz'],
    summary: 'Một bài solo hay có hướng đi: bắt đầu từ giai điệu và âm giai nền, phát triển một motif bằng cách đổi từng yếu tố, để căng thẳng lên xuống như sóng, kết câu vào nốt mạnh. Bài cũng tóm bốn "trục" mà các thế hệ jazz lần lượt nhấn mạnh: giai điệu, hoà âm, tiết tấu, âm sắc.',
    body: `
Một bài solo hay giống một câu chuyện: có mở đầu, có phát triển, có cao trào, có kết. Một bài solo dở thì giống một người nói liên tục không biết dừng. Bài này nói về cách **dựng** một solo: chọn chất liệu, phát triển ý, và để lại khoảng lặng cho người nghe thở.

## Các tầng chất liệu
Trên "Autumn Leaves", chất liệu xếp từ dễ đến khó:
1. [[trang-tri-giai-dieu-jazz|Trang trí giai điệu]].
2. **Rải hợp âm** ([[ngau-hung-doc-ngang|ngẫu hứng dọc]]).
3. **Một âm giai nền** cho cả bài ([[phan-tich-tien-trinh-jazz|bản đồ hợp âm]]).
4. **Nốt cromatic và nốt "ngoài"** ([[not-tiep-can-jazz]], [[choi-ngoai-jazz]]).
5. **Toàn bộ âm giai cromatic**.
Lời khuyên: **trộn các tầng**, không ở mãi một tầng — xuất phát từ âm giai nền hợp với phần lớn hợp âm, rồi rẽ sang âm giai "lạ" hơn và mức căng cao hơn, rồi quay về.

## Căng thẳng như những đợt sóng
- Tạo căng bằng nốt "ngoài", giải quyết bằng nốt "trong" (xem [[not-tranh-va-quang-nghich]]).
- Căng thẳng nên **lên xuống như sóng** suốt bài solo.
- Một [[cau-nhac|câu nhạc]] **luôn mạnh hơn khi kết vào nốt mạnh về hoà âm** — thường là [[not-dan-huong|nốt dẫn hướng]].

## Phát triển motif
Bài luyện "lặp lại với một thay đổi": tạo một [[motif]] ngắn, rồi lặp lại, **mỗi lần đổi một yếu tố** — một nốt, [[tiet-tau-ngau-hung-jazz|tiết tấu]], hay dịch sang hợp âm khác. Đây chính là [[bien-doi-chu-de|phát triển chủ đề]] trong nhạc cổ điển, ở quy mô nhỏ và ngay trong lúc chơi.

## Một gợi ý về hình dáng tổng thể
Không có khuôn mẫu cố định cho cả bài solo. Theo kinh nghiệm sư phạm chung (không phải quy tắc), nhiều solo đi từ **thưa, thấp, đơn giản** đến **dày, cao, phức tạp**: thêm dần mật độ nốt, mở rộng [[cao-do|âm vực]], tăng [[cuong-do|cường độ]], có thể chuyển sang [[ngau-hung-hop-am|solo bằng hợp âm]] ở cao trào, rồi lắng lại để nhường người chơi sau. Xem cách nhìn của nghiên cứu ở [[ngau-hung-jazz]] (Berliner).

## Bốn "trục" ngẫu hứng trong lịch sử
| Trục | Ví dụ |
|---|---|
| **Giai điệu** | Trang trí giai điệu; [[jazz-dieu-thuc|âm giai điệu thức]]; phát triển motif (Sonny Rollins) |
| **Hoà âm** | Biến hoá và [[thay-the-hop-am|thay thế hợp âm]]; Coleman Hawkins chuyển [[ngau-hung-piano|ngẫu hứng]] từ dựa trên giai điệu sang **dựa trên hoà âm** ("Body and Soul", 1939) |
| **Tiết tấu** | [[cam-nhan-phach|Groove]], ví dụ [[dieu-dem-pho-bien|clave]] Latin |
| **[[am-sac|Âm sắc]]** | Tiếng ồn, [[vi-cung-va-am-nhac-vi-cung|vi cung]] (free jazz — xem [[post-bop-free-jazz]]) |
Viết ra thay vì ngẫu hứng — cùng công cụ, có thời gian chọn lọc: [[sang-tac-jazz]].

## Câu hỏi và bài tập
1. Solo ba chorus "Autumn Leaves": chorus 1 chỉ nốt hợp âm, chorus 2 thêm âm giai và nốt tiếp cận, chorus 3 thêm hợp âm khối.
2. Bắt đầu một chorus bằng một motif hai ô; phát triển nó suốt chorus.
3. Ghi âm và đánh dấu chỗ lên cao trào; nó có ở đúng chỗ bạn muốn không?
`,
  },
  {
    slug: 'phan-tich-solo-jazz',
    title: 'Phân tích một solo jazz',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['phân tích solo jazz', 'analyse a jazz solo', 'phân tích bản chép solo', 'Weimar Jazz Database', 'Jazzomat'],
    summary: 'Cách Lamar phân tích một solo (ví dụ "Straight, No Chaser" của Miles Davis, 1958): xác định hợp âm từng vòng, tô màu từng nốt là nốt hợp âm, nốt căng hay nốt tránh, xem nốt cuối mỗi câu, rồi tìm motif, mô tiến, trích dẫn, superimposition. Kèm các nguồn nghiên cứu mở như Weimar Jazz Database.',
    refs: [
      ['Jazzomat Research Project — Weimar Jazz Database', 'https://jazzomat.hfm-weimar.de/dbformat/dboverview.html'],
      ['Frontiers in Digital Humanities (2018) — về Weimar Jazz Database', 'https://www.frontiersin.org/journals/digital-humanities/articles/10.3389/fdigh.2018.00001/full'],
      ['Duke University — Berliner, Thinking in Jazz (1994)', 'https://music.duke.edu/books/thinking-jazz-infinite-art-improvisation'],
    ],
    body: `
Chép và phân tích solo là cách học ngẫu hứng **hiệu quả nhất** — không có ngoại lệ. Bạn nghe những người giỏi nhất nói ngôn ngữ jazz, rồi mổ xẻ xem họ làm gì: nốt nào rơi vào phách, câu bắt đầu ở đâu, họ về giọng thế nào. Bài này lấy năm solo trong một bản blues làm ví dụ.

Phân tích solo là cách học jazz truyền thống nhất: các nhạc công **chép lại** (transcribe) solo từ bản thu, chơi theo, rồi hiểu vì sao nó hay (xem [[ngau-hung-jazz]] — nghiên cứu của Paul Berliner). Bài này nối kỹ năng [[phan-tich-tien-trinh-jazz|phân tích tiến trình]] với các kỹ thuật [[ngau-hung-piano|ngẫu hứng]] trong mục.

## Các bước
Bài này đi qua cả năm solo trong "**Straight, No Chaser**" (album *[[jazz-dieu-thuc|Milestones]]* của Miles Davis, 1958):
1. **Xác định hợp âm trước** — kể cả các [[thay-the-hop-am|hợp âm thay thế]], vì hoà âm có thể đổi ở mỗi vòng.
2. **Tô màu từng nốt**: [[hop-am-bay|nốt hợp âm]], [[hop-am-mo-rong|nốt căng]] dùng được, hay [[not-tranh-va-quang-nghich|nốt tránh]]. Nhiều nốt hợp âm → thuận; nốt căng → màu "jazz".
3. **Xem nốt cuối mỗi câu**: nốt hợp âm → câu được giải quyết; nốt tránh → người solo **cố ý để câu lơ lửng**.
4. **Tìm các thủ pháp**:
| Thủ pháp | Bài |
|---|---|
| Dịch vạch nhịp, superimposition | [[tiet-tau-ngau-hung-jazz]], [[superimposition-jazz]] |
| Trích dẫn, câu sáo | [[lick-va-trich-dan]] |
| Khuôn tiết tấu, đường nét | [[tiet-tau-ngau-hung-jazz]] |
| Mô tiến, [[ostinato|mẫu lặp]] | [[mau-lap-chu-ky]], [[mo-tien-hoa-am]] |
| [[motif|Phát triển motif]] | [[xay-dung-bai-solo]] |
| Chuỗi nhóm lẻ dày đặc (Coltrane) | [[sheets-of-sound]] |

## Đọc solo như đọc một tác phẩm
Các bước trên tương ứng với [[phuong-phap-phan-tich-tac-pham|phân tích tác phẩm]]: hoà âm (bước 1–2), [[cau-nhac|câu nhạc]] và kết (bước 3), phát triển chất liệu (bước 4). Có thể tóm tắt theo [[phan-tich-phong-cach|năm yếu tố của LaRue]].

## Nguồn nghiên cứu mở
- **Weimar Jazz Database** (dự án Jazzomat, Học viện Âm nhạc [[franz-liszt|Franz Liszt]] Weimar, 2012–2017): kho các solo jazz được chép và chú thích hợp âm, phách; dữ liệu mở ([[synthesizer|MIDI]], thư viện Python MeloSpyLib) — 456 solo tính đến 2017.
- **Paul Berliner**, *Thinking in Jazz* (1994): nghiên cứu cách nhạc công học ngẫu hứng, kèm nhiều bản chép.

## Câu hỏi và bài tập
1. Chép tám ô của một solo trong "Straight, No Chaser" và chơi theo bản thu.
2. Đánh dấu trong đoạn vừa chép: nốt hợp âm ở phách, nốt tiếp cận, chỗ đi ra ngoài.
3. Viết một chorus của riêng bạn dùng một ý rút ra từ đoạn đó.
`,
  },
  {
    slug: 'meo-ngau-hung-jazz',
    title: 'Mẹo ngẫu hứng jazz và cách xử lý nốt sai',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['improvisation tips', 'mẹo ngẫu hứng', 'mistakes', 'making mistakes', 'improvisation exercises', 'bài luyện ngẫu hứng jazz', 'không có nốt sai'],
    summary: 'Những lời khuyên thực hành của Lamar cho người học ngẫu hứng jazz: có một âm giai nền để quay về, kết câu ở nốt dẫn hướng, chừa khoảng trống, học lick, hát điều mình chơi — và khi lỡ chơi sai: lặp lại cho thành cố ý, sửa nửa cung, biến nó thành một chuỗi cromatic.',
    body: `
Một nhóm lời khuyên thực tế, gom lại một chỗ — những điều người học jazz nào cũng phải nghe ít nhất một lần, thường là từ chính sai lầm của mình. Đọc lại chương này mỗi khi bạn thấy mình "giậm chân tại chỗ".

## Mẹo
- **Một âm giai nền** cho cả bài và **quay về đó khi lạc**; [[am-giai-ngu-cung|ngũ cung]] và [[am-giai-blues|âm giai blues]] rất hợp vì 5–6 nốt của chúng nằm trong nhiều âm giai (xem [[ngau-hung-doc-ngang|bản đồ hợp âm]]).
- **Kết câu ở [[not-dan-huong|nốt dẫn hướng]]** (nốt 3 hoặc 7).
- Chơi nốt "ngoài" **có cấu trúc**: lướt nhanh tới nốt hợp âm, theo khuôn mẫu ([[mau-lap-chu-ky]]), hoặc bám vào giai điệu (xem [[choi-ngoai-jazz]]).
- **Chừa khoảng trống**: người mới hay nhồi quá nhiều nốt; khoảng nghỉ cho thời gian để nghĩ.
- **Học lick** làm từ vựng và chỗ dựa; **nghe thật nhiều** (xem [[lick-va-trich-dan]]).

## Các bài luyện (mô tả phương pháp)
| Bài luyện | Mục đích |
|---|---|
| **Không dừng**: chơi liên tục, bí thì dùng âm giai, chạy ngón hoặc lặp câu | Giữ mạch, không "đứng hình" |
| **Nhắm nốt dẫn hướng** | Bám tiến trình, kết câu chắc |
| **Lặp lại với một thay đổi** | [[motif|Phát triển motif]] |
| **Nhấn mỗi n nốt** (2–5) | Đa dạng tiết tấu ([[dien-dat-cau-nhac|phrasing]]) |
| **Solo một nốt**: giữ một cao độ qua nhiều hợp âm — nó lần lượt thành các bậc khác nhau | Nghe màu của từng hợp âm ([[jazz-dieu-thuc|jazz điệu thức]]) |
| **Hát điều mình chơi**: nghe câu trong đầu rồi mới chơi | Để đầu óc chọn nốt; [[oscar-peterson|Oscar Peterson]] và [[bud-powell|Bud Powell]] có thể được nghe thấy hát theo trong bản thu |
Các bài luyện chung của mục ngẫu hứng: [[phuong-phap-luyen-ngau-hung]].

## Khi lỡ chơi sai
Bắt đầu từ một thực tế: đã sáng tác tại chỗ thì **thỉnh thoảng sẽ có nốt sai**. Trang này dẫn một câu thường được gán cho [[bill-evans|Bill Evans]]: "*không có nốt sai, chỉ có cách giải quyết sai*" (câu này cũng hay được gán cho người khác). Các cách cứu:
1. **Lặp lại câu và nhấn nốt sai** — lặp lại khiến nó nghe như cố ý.
2. **Lặp lại và sửa** sang nốt "đúng".
3. **Biến nốt sai thành một chuỗi cromatic** hoặc [[mau-lap-chu-ky|mẫu lặp]], rồi giải quyết.
4. Bí thì **đi tới nốt dẫn hướng hoặc nốt hợp âm gần nhất** (thường chỉ cách nửa cung — xem [[not-tiep-can-jazz]]).
Và nhớ: căng thẳng không được giải quyết "sẽ nghe như chơi sai nốt" — vấn đề thường là **không giải quyết**, chứ không phải nốt.
Ví dụ người thật (theo lời kể, "được cho là"): Tommy Flanagan trên "[[vong-coltrane|Giant Steps]]" (1959) đã phải lùi về chỉ chơi hợp âm; Miles Davis vào lại giai điệu sớm một ô trong "Prince of Darkness" (1967).
Liên quan: [[hoi-hop-bieu-dien]], [[ngau-hung-ung-tac]].

## Những thói quen Levine khuyên
- **Tập cho ra nhạc**: ngay cả khi tập âm giai, hãy chơi nó như nhạc (swing, sắc thái, câu).
- **Tập mọi thứ ở mọi giọng.**
- **Tập vào chỗ yếu**: thứ bạn ngại nhất là thứ cần tập nhất.
- **Tốc độ đến từ chính xác**: chơi chậm mà đúng, nhanh sẽ tự tới.
- **Chép bài và solo** từ bản thu; chơi cùng bản thu thật, không chỉ cùng bản phát đệm.
- **Giữ một cuốn sổ**: ghi bài đã học, lick, câu hỏi.
- **Thả lỏng, giậm chân theo nhịp**, và tạo cho mình một môi trường âm nhạc: nghe nhiều, chơi với người khác.

## Câu hỏi và bài tập
1. Viết danh sách ba "chỗ yếu" của bạn; tuần này tập mỗi ngày mười phút cho một chỗ.
2. Chọn một bài; chơi nó ở bốn giọng trong một tuần.
3. Bắt đầu một cuốn sổ jazz: ghi bài, lick, và một câu hỏi mỗi ngày.
`,
  },

  {
    slug: 'jazz-dieu-thuc',
    title: 'Jazz điệu thức (modal jazz)',
    category: 'jazz',
    aliases: ['modal jazz', 'jazz điệu thức', 'Kind of Blue', 'So What', 'Milestones', 'Impressions', 'jazz modal'],
    summary: 'Jazz điệu thức (cuối thập niên 1950) thay những tiến trình đổi hợp âm nhanh của bebop bằng vài "vùng" điệu thức kéo dài; người solo nghĩ theo âm giai hơn là theo hợp âm. Các mốc: "Milestones" (1958), Kind of Blue (1959) với "So What", "Impressions" của Coltrane; cách đệm bằng hợp âm quãng 4 của Bill Evans và McCoy Tyner.',
    wiki: 'Modal_jazz',
    refs: [
      ['Wikipedia — Modal jazz', 'https://en.wikipedia.org/wiki/Modal_jazz'],
      ['Wikipedia — Kind of Blue', 'https://en.wikipedia.org/wiki/Kind_of_Blue'],
      ['Wikipedia — So What (Miles Davis composition)', 'https://en.wikipedia.org/wiki/So_What_(Miles_Davis_composition)'],
      ['Wikipedia — Impressions (John Coltrane album)', 'https://en.wikipedia.org/wiki/Impressions_(John_Coltrane_album)'],
    ],
    body: `
Năm 1959, *Kind of Blue* của Miles Davis đổi cách cả một thế hệ nghĩ về hoà âm: thay vì một hợp âm mỗi hai phách, giờ là **một điệu thức** cho cả tám, mười sáu ô. Ít hợp âm hơn nghĩa là nhiều tự do hơn — và cũng nhiều trách nhiệm hơn: không còn hợp âm nào "dắt" bạn đi; bạn phải tự tạo hướng cho câu nhạc.

## Đặc điểm
- **Ít hợp âm**, mỗi hợp âm kéo dài nhiều ô; không có tiến trình [[ii-v-i]] cố định.
- Thường dùng **[[bass-ngan|bass ngân]]** hoặc âm nền.
- Đệm bằng **[[hoa-am-quang-bon|hợp âm quãng 4]]** để tránh âm thanh "điệu tính"; hợp âm *So What* là một dạng quãng 4.
- Người solo nghĩ **"ngang"** — theo [[dieu-thuc|điệu thức]] — thay vì "dọc" theo từng hợp âm (xem [[ngau-hung-doc-ngang]]). Miles Davis gọi jazz điệu thức là "**sự trở về với giai điệu**".
Cơ sở lý thuyết của việc chọn hợp âm và tránh lực hút V – I: [[hoa-am-dieu-thuc]].

## Các mốc
| Năm | Tác phẩm | Ghi chú |
|---|---|---|
| 1953 | George Russell, *Lydian Chromatic Concept* | Lý thuyết ảnh hưởng đến Miles Davis (xem [[he-thong-hop-am-am-giai]]) |
| 1958 | Miles Davis, **"Milestones"** | Bài điệu thức đầu tiên của Davis, dựng trên hai điệu thức |
| 1959 | Miles Davis, ***Kind of Blue*** | Với [[bill-evans|Bill Evans]]; phát hành 17/8/1959 |
| 1961–63 | John Coltrane, **"Impressions"** | Thu trực tiếp ở Village Vanguard (11/1961), cùng khuôn với "So What" |

## "So What": một bài điệu thức mẫu
::form Rê_Dorian:16 Mi♭_Dorian:8 Rê_Dorian:8 | "So What": khuôn AABA 32 ô (xem [[hinh-thuc-ca-khuc-32]]) — 16 ô Rê Dorian, 8 ô Mi giáng Dorian, 8 ô Rê Dorian
::staff treble D4 E4 F4 G4 A4 B4 C5 D5 | Rê Dorian: các phím trắng từ D — nốt đặc trưng là B (♮6)
::grand D4+G4+B4/E3+A3=Em11_(So_What) | Hợp âm "So What" trên E: ba quãng 4 đúng và một quãng 3 trưởng ở trên — E – A – D – G – B; Bill Evans chơi nó trong câu "đáp" của "So What"

## Đệm và solo trên một điệu thức
- Đệm: các hợp âm quãng 4 **di chuyển song song trong điệu thức** (lối của [[mccoy-tyner|McCoy Tyner]] thập niên 1960) — xem [[hoa-am-quang-bon]].
- Solo: để nghe ra điệu thức, nhấn **nốt đặc trưng** (B trong Rê Dorian); dùng [[am-giai-ngu-cung|ngũ cung]], [[choi-ngoai-jazz|side-slipping]] để tạo căng trên nền tĩnh.

## Biến một bài điệu tính thành bài điệu thức
- **Bỏ hẳn tiến trình gốc**, thay bằng **một** (hoặc một hai) hợp âm kéo dài — không phải gộp từng ii – V – I.
- Thêm **vamp / riff / [[ostinato|ostinato]]** dưới giai điệu: tự viết, hoặc mượn một vamp điệu thức quen ("So What", "Maiden Voyage"); [[ky-hieu-hop-am|lead sheet]] thường không ghi vamp.
- Hợp nhất khi giai điệu **phần lớn trong một giọng**, đi liền bậc, **tránh tritone trong giọng** và tránh rải hợp âm.
- Thế bấm **xếp chồng quãng 3** nghe điệu tính, thế bấm **quãng 4** nghe điệu thức.
- Ví dụ: John Coltrane biến "My Favorite Things" và "Chim Chim Cher-ee" (hai bài điệu tính) thành bài điệu thức.
::grand D4+G4+C5/D3+A3=Dm11_(D_Dorian) | Minh hoạ một vamp tĩnh: tay phải xếp quãng 4 (D – G – C) trên quãng 5 D – A — có thể thay cho cả chuỗi Dm7 – G7 – Cmaj7 nếu giai điệu nằm trong các phím trắng
Ngược lại, đổi thể loại một bài pop sang điệu thức: [[doi-nhip-the-loai-jazz]].

Bước tiếp theo trong lịch sử: [[post-bop-free-jazz]].

Hợp âm So What: [[hop-am-so-what-barron]].

## Câu hỏi và bài tập
1. Ứng tác trên một vamp Rê Dorian (như "So What") bằng thế bấm quãng 4.
2. Đổi sang Mi giáng Dorian (đoạn B của "So What") rồi về; giữ một ý giai điệu qua chỗ đổi.
3. Ứng tác trên vamp Esus♭9 bằng âm giai In-sen Mi (xem [[ngu-cung-trong-jazz]]).
`,
  },
  {
    slug: 'post-bop-free-jazz',
    title: 'Post-bop và free jazz',
    category: 'jazz',
    aliases: ['post-bop', 'free jazz', 'jazz tự do', 'Ornette Coleman', 'harmolodics', 'Cecil Taylor', 'Second Great Quintet', 'time no changes', 'atonal jazz'],
    summary: 'Thập niên 1960, jazz nới lỏng dần sự phụ thuộc vào hợp âm: free jazz (Ornette Coleman, The Shape of Jazz to Come 1959, Free Jazz 1960–61; Cecil Taylor) bỏ hợp âm, nhịp và hình thức cố định — "tự do hoàn toàn"; post-bop của nhóm ngũ tấu thứ hai của Miles Davis (1964–68) là "tự do có kiểm soát".',
    wiki: 'Post-bop',
    refs: [
      ['Wikipedia — Post-bop', 'https://en.wikipedia.org/wiki/Post-bop'],
      ['Wikipedia — Miles Davis Quintet', 'https://en.wikipedia.org/wiki/Miles_Davis_Quintet'],
      ['Wikipedia — Free Jazz: A Collective Improvisation', 'https://en.wikipedia.org/wiki/Free_Jazz:_A_Collective_Improvisation'],
      ['Wikipedia — Ornette Coleman', 'https://en.wikipedia.org/wiki/Ornette_Coleman'],
    ],
    body: `
Từ thập niên 1960, jazz đi theo hai hướng: một nhánh giữ khung bài và hợp âm nhưng làm chúng phức tạp, mơ hồ hơn (post-bop); một nhánh bỏ hẳn hợp âm, thậm chí bỏ nhịp đều (free jazz). Cả hai đều đòi hỏi một điều giống nhau: **nghe** người cùng chơi nhiều hơn bao giờ hết.

## Bức tranh chung
[[phong-cach-jazz|Lịch sử jazz]] hiện đại có thể nhìn như một quá trình **giảm dần sự phụ thuộc vào hợp âm**: [[jazz-dieu-thuc|jazz điệu thức]] giảm số hợp âm; free jazz bỏ hẳn hợp âm (ít nhất ở phiên bản của Ornette Coleman); post-bop đứng giữa.

## Free jazz — "tự do hoàn toàn"
- Bỏ **hợp âm cố định, nhịp cố định và hình thức cố định**; thường **[[ngau-hung-piano|ngẫu hứng]] tập thể**.
- **Ornette Coleman**: album *The Shape of Jazz to Come* (Atlantic, 1959); *Free Jazz: A Collective Improvisation* (thu ngày 21/12/1960, phát hành 1961) — khoảng 37 phút, một lần thu, **hai nhóm [[the-loai|tứ tấu]]** mỗi nhóm một kênh stereo; tên "free jazz" lấy từ album này. Coleman đặt ra khái niệm **"harmolodics"**: hoà âm, giai điệu, tiết tấu… có vai trò ngang nhau.
- **Cecil Taylor** (piano): tránh giọng và trung tâm điệu tính bằng **[[am-cum|âm cụm]]**; nghe album *Indent*.
- Vì không có trung tâm giọng, free jazz là **[[phi-dieu-tinh|phi điệu tính]]** — song song với nhạc tiên phong cổ điển cùng thời (xem [[thoi-ky-the-ky-20]]).
::wiki Ornette_Coleman | Ornette Coleman (ảnh đầu bài Wikipedia *Ornette Coleman*)

## Post-bop — "tự do có kiểm soát"
"Nếu free jazz là *tự do hoàn toàn* thì post-bop là *tự do có kiểm soát*" — trộn bebop, hard bop, [[dieu-thuc|điệu thức]] và free.
- **Nhóm [[nhac-thinh-phong|ngũ tấu]] thứ hai của Miles Davis** (1964–68): [[herbie-hancock|Herbie Hancock]] (piano), Wayne Shorter ([[saxophone|saxophone]]), Ron Carter (bass), Tony Williams (trống). Các album: *E.S.P.* (album phòng thu đầu tiên), *Miles Smiles*, *Sorcerer*, *Nefertiti*.
- Trên sân khấu, nhóm thường bỏ hợp âm và giai điệu của một standard nhưng **giữ hình thức và nhịp** — lối chơi gọi là "**time, no changes**" (có nhịp, không hợp âm).
- Hợp âm trong post-bop thường không theo chức năng: [[constant-structures]], hợp âm sus, [[hoa-am-quang-bon|quãng 4]].
Sau đó Davis chuyển sang fusion (*In a Silent Way*, *Bitches Brew*).

## Với người học piano
- Nghe trước khi phân tích: free jazz không có "đáp án" hợp âm; hãy nghe sự tương tác giữa các nhạc công.
- Chuẩn bị bằng [[ngau-hung-tu-do|ngẫu hứng tự do]] và [[choi-ngoai-jazz|chơi "ngoài"]]; xem thêm [[keith-jarrett|Keith Jarrett]] và lối "chơi từ không có gì" (*The Köln Concert*, 1975).

## Câu hỏi và bài tập
1. Chơi một bài chuẩn theo lối "time, no changes": giữ nhịp và hình thức, bỏ hợp âm.
2. Ứng tác tự do hai phút với một người bạn, chỉ dựa trên một motif chung.
3. Nghe *Maiden Voyage* (Herbie Hancock) rồi *Free Jazz* (Ornette Coleman); ghi ba điểm khác nhau.
`,
  },
  {
    slug: 'phong-cach-jazz',
    title: 'Các phong cách jazz: lịch sử ngắn',
    category: 'jazz',
    also: ['genres'],
    aliases: ['jazz styles', 'jazz genres', 'lịch sử jazz', 'phong cách jazz', 'ragtime', 'boogie-woogie', 'boogie woogie', 'Dixieland', 'New Orleans jazz', 'bebop', 'cool jazz', 'hard bop', 'soul jazz', 'jazz fusion', 'jazz-rock', 'Latin jazz', 'Afro-Cuban jazz', 'jazz Latin', 'montuno', 'tumbao', 'smooth jazz'],
    summary: 'Khoảng một thế kỷ jazz qua các phong cách nối tiếp và chồng lấn: ragtime, New Orleans, stride, boogie-woogie, swing, bebop, cool, hard bop và soul jazz, modal, free, post-bop, fusion, Latin (Afro-Cuban, bossa nova), gospel jazz và smooth jazz — mỗi phong cách với đặc điểm nhạc, vai trò của piano, nghệ sĩ và bản thu mốc.',
    wiki: 'Jazz',
    refs: [
      ['Britannica — Ragtime', 'https://www.britannica.com/art/ragtime'],
      ['Wikipedia — Swing era', 'https://en.wikipedia.org/wiki/Swing_era'],
      ["Wikipedia — Pinetop's Boogie Woogie", "https://en.wikipedia.org/wiki/Pinetop's_Boogie_Woogie"],
      ['Wikipedia — Afro-Cuban jazz', 'https://en.wikipedia.org/wiki/Afro-Cuban_jazz'],
      ['Wikipedia — Bitches Brew', 'https://en.wikipedia.org/wiki/Bitches_Brew'],
    ],
    body: `
Một trăm năm nhạc jazz gói trong vài bảng. Đừng đọc chúng như bài sử để thi: đọc chúng như một **danh sách nghe**. Mỗi dòng là một cánh cửa — mở ra bằng cách tìm bản thu ở cột "Mốc" và nghe ít nhất một lần. Các phong cách **nối tiếp và chồng lấn** nhau; mốc năm chỉ gần đúng. Cột "Piano" cho bạn biết tay piano làm gì trong từng thời, vì đó là điều bạn sẽ bắt chước.

## Jazz sơ kỳ (khoảng 1897 – 1930)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Ragtime** | ~1897–1918 (Britannica) | Tay phải [[dao-phach|đảo phách]] trên tay trái kiểu hành khúc; hình thức nhiều đoạn (strain) như hành khúc | Tay phải chơi các mẫu đảo phách quanh nốt hợp âm | [[scott-joplin|Scott Joplin]], "Maple Leaf Rag" (1899, bản in, bốn đoạn) |
| **New Orleans / Dixieland** | 1910s–20s | Cả nhóm cùng [[ngau-hung-piano|ngẫu hứng]] | [[kiem-soat-toc-do|Giữ nhịp]] đều trên phách trong nhóm nhịp điệu | "Livery Stable Blues" (Original Dixieland Jass Band, 26/2/1917), thường gọi là đĩa jazz đầu tiên |
| **Stride** | 1910s–30s | Lớn lên từ ragtime | Tay trái luân phiên bass ở phách 1 – 3 và hợp âm ở phách 2 – 4 — xem [[stride-piano]] | [[james-p-johnson|James P. Johnson]], "Carolina Shout" (thu 1921) |
| **Boogie-woogie** | Đĩa đầu 1928; thịnh hành ~1938–40s | Bass [[ostinato]] "lăn" ở tay trái trên khung [[blues-12-nhip|blues 12 ô]] | Tay trái gần như là cả một nhóm nhịp điệu | Pinetop Smith, "Pinetop's Boogie Woogie" (thu 29/12/1928) |
::staff bass C3 E3 G3 A3 Bb3 A3 G3 E3 | Minh hoạ một mẫu bass boogie-woogie quen thuộc trên hợp âm C (móc đơn, lặp lại mỗi ô; đổi sang F và G theo khung blues)

## Từ swing đến bebop (1935 – 1950)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Swing / big band** | ~1935–46 | Nhạc khiêu vũ cho dàn lớn (bộ [[trumpet|trumpet]], [[saxophone|saxophone]], [[trombone|trombone]] cùng nhóm nhịp điệu); riff, đoạn "shout", [[bass-di-jazz|bass đi]] — xem [[swing]] | Piano bắt đầu **chấm phá** hợp âm thay vì giữ nhịp | Benny Goodman ở Palomar (21/8/1935); Count Basie, "One O'Clock Jump" (1937) |
| **Bebop** | ~1940–50s | Từ nhạc khiêu vũ thành **nhạc nghệ thuật**: nhịp nhanh, hoà âm phức tạp, nhóm nhỏ; nhiều contrafact ([[rhythm-changes]]) | Tay trái **shell** (gốc + 3 hoặc 7) của [[bud-powell|Bud Powell]], tay phải đi giai điệu — xem [[xep-hop-am]] | Charlie Parker, "Ko-Ko" (26/11/1945, trên [[vong-hop-am|vòng hợp âm]] "Cherokee") |

## Sau bebop (1949 – 1970)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Cool** | 1949–50s | Phản ứng với bebop "nóng": chậm, nhẹ, trữ tình, thưa; quan trọng là chơi *thế nào* hơn là chơi *gì* | Lennie Tristano | Miles Davis, *Birth of the Cool* (thu 1949–50) |
| **Hard bop / soul jazz** | ~1955–65 | Gốc blues và gospel, [[cam-nhan-phach|groove]] dễ nhảy, giai điệu đơn giản hơn; soul jazz dùng đàn organ Hammond, hoà âm rất đơn giản | Horace Silver ("The Preacher"), Bobby Timmons — xem [[tai-hoa-am-gospel]] | Art Blakey, *Moanin'* (thu 30/10/1958) |
| **Modal** | Cuối 1950s | [[dieu-thuc|Điệu thức]] thay [[chuc-nang-hoa-am|hoà âm chức năng]]; một hợp âm kéo dài nhiều ô; [[bass-ngan|bass ngân]]; hợp âm quãng 4 | [[bill-evans|Bill Evans]], [[mccoy-tyner|McCoy Tyner]] — xem [[jazz-dieu-thuc]] | *Kind of Blue* (1959) |
| **Free / avant-garde** | ~1959–60s | Không hợp âm, không giọng cố định, cùng ngẫu hứng | Cecil Taylor với [[am-cum|âm cụm]] — xem [[post-bop-free-jazz]] | Ornette Coleman, *Free Jazz* (thu 21/12/1960) |
| **Post-bop** | 1960s | Pha bebop, hard bop, modal và free; "tự do có kiểm soát" | [[herbie-hancock|Herbie Hancock]] | *Maiden Voyage* (1965) |

## Pha trộn (từ cuối 1960)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Fusion / jazz-rock** | Cuối 1960s–70s | Nền điệu thức, groove funk, solo kiểu rock, móc đơn **thẳng**; nhạc cụ điện | Joe Zawinul (Weather Report), Herbie Hancock (Headhunters), [[chick-corea|Chick Corea]] (Return to Forever) | *Bitches Brew* (thu 8/1969) |
| **Latin: Afro-Cuban** | Từ 1943 | Mọi người theo **[[clave-tresillo-va-nhip-cong|clave]]** (mẫu nhịp nền của nhạc Afro-Cuba, dựa trên [[dao-phach|đảo phách]]); piano chơi **montuno** (vamp lặp lại nét hợp âm), tay trái **tumbao** (gốc – 5) | | Machito/Mario Bauzá, "Tanga" (1943); Dizzy Gillespie/Chano Pozo, "Manteca" (1947) |
| **Latin: bossa nova** | Cuối 1950s | Samba cộng hoà âm jazz; móc đơn thẳng, đung đưa nhẹ, **không** dùng clave; đệm thoáng hơn Afro-Cuban — xem [[dieu-dem-pho-bien]] | Antônio Carlos Jobim | *[[dem-bossa-nova|Getz/Gilberto]]* (thu 3/1963) |
| **Gospel jazz** | Từ 1950s | Quãng 8, [[ky-hieu-nang-cao|tremolo]], [[hop-am-luot-jazz|hợp âm 7 giảm lướt]], [[hop-am-at-phu|át phụ]], giai điệu [[am-giai-ngu-cung|ngũ cung]] trưởng, thế bấm hẹp song song | Xem [[tai-hoa-am-gospel]] | |
| **Smooth / crossover** | Cuối 1970s–80s | Lớn lên từ fusion nhưng ít phiêu lưu hơn; trọng groove hơn ngẫu hứng; pha pop, funk, R&B | David Benoit | |

## Dùng bảng này thế nào
- Mỗi phong cách luyện một **[[ky-thuat-piano|kỹ năng piano]]** riêng: ragtime và stride luyện tay trái nhảy xa ([[buoc-nhay-xa]]); boogie-woogie luyện [[phoi-hop-hai-tay|độc lập hai tay]]; bebop luyện thế bấm shell; modal luyện hợp âm quãng 4 ([[hoa-am-quang-bon]]); latin luyện [[tiet-tau|tiết tấu]] ([[clave-va-latin-jazz]]). Muốn biết mình yếu ở đâu, chơi thử một bài của mỗi thời.
- Nghe theo thứ tự thời gian, bạn sẽ nghe ra **hoà âm ngày càng dày**: từ hợp âm ba của ragtime, tới [[hop-am-mo-rong|nốt căng]] của bebop, tới [[upper-structure]] của post-bop. Lý thuyết trong bộ sách đi đúng con đường đó.
- Đừng chọn phe. Người chơi hiện đại giỏi nhất đều nói được nhiều "phương ngữ": một tay bebop mà không chơi được stride là thiếu mất ông bà mình.

Nghệ sĩ theo từng thời: [[nghe-si-piano-jazz]]. Lộ trình lý thuyết: [[hoa-am-jazz]].

## Nghe ví dụ

::youtube 89azFhwXzUo | Bill Evans Trio — *Waltz for Debby* (thu trực tiếp 1980)

::youtube ylXk1LBvIqU | Miles Davis — *So What* (album *Kind of Blue*, 1959)

## Câu hỏi và bài tập
1. Chọn ba dòng trong bảng; nghe bản thu ở cột "Mốc" và ghi một câu về việc tay piano làm.
2. Chơi mẫu bass boogie-woogie trên C, F, G theo khung blues 12 ô.
3. Phong cách nào bạn thích nhất? Tìm thêm hai nghệ sĩ của phong cách đó ở [[nghe-si-piano-jazz]].
`,
  },

]
