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
Hoà âm jazz dựa trên nền [[he-thong-hoa-am-co-dien|hoà âm chức năng cổ điển]] — vẫn có chủ, tiền át, át, vẫn có [[hop-am-at-phu|át phụ]] và [[chuyen-giong|chuyển giọng]] — nhưng **cách nghĩ và cách dùng** khác ở nhiều điểm. Đây là Phần III của [[giao-trinh-hoa-am]].

## Khác biệt với hoà âm cổ điển
| | Hoà âm cổ điển | Hoà âm jazz |
|---|---|---|
| Đơn vị cơ bản | [[hop-am-ba|Hợp âm ba]] | [[hop-am-bay|Hợp âm 7]]; hợp âm ba thường được thêm 6 hoặc 9 ([[hop-am-6-va-add]]) |
| Nốt "lạ" | [[not-ngoai-hop-am|Nốt ngoài hợp âm]] phải giải quyết | **Nốt căng** 9, 11, 13 là một phần của hợp âm ([[hop-am-mo-rong]]) |
| Ký hiệu | [[chuc-nang-hoa-am|Số La Mã]], [[bass-so|bè trầm có số]] | **Ký hiệu hợp âm** trên lead sheet ([[ky-hieu-hop-am]]) |
| Kết điển hình | IV – V – I, ii6 – V – I | **[[ii-v-i|ii – V – I]]** |
| [[luat-hoa-am-bon-be|Viết bè]] | Bốn bè [[dan-giong|SATB]] theo luật | **Xếp hợp âm** trên đàn ([[xep-hop-am]]) |
| [[giai-dieu|Giai điệu]] trên hợp âm | Từ [[doi-am|đối âm]] và hoà âm | **Hợp âm – [[am-giai|âm giai]]** cho [[ngau-hung-piano|ngẫu hứng]] ([[he-thong-hop-am-am-giai]]) |
| Thay đổi hợp âm | Do nhà soạn nhạc cố định | Người chơi **thay thế, tái hoà âm** khi biểu diễn ([[thay-the-hop-am]]) |
| [[tiet-tau|Tiết tấu]] | Chia đều | [[swing]] |

Một khác biệt quan trọng nữa đến từ **blues**: hợp âm 7 át có thể đóng vai **chủ** (I7) và không cần giải quyết (xem [[blues-12-nhip]], [[am-giai-blues]]).

## Lộ trình học trong mục này
Muốn bắt tay vào chơi ngay một bài jazz: [[hoc-piano-jazz]].
Điều kiện: đã học Chương 1–7 của [[giao-trinh-hoa-am]] (đặc biệt hợp âm 7, chức năng, át phụ, [[hop-am-muon|hợp âm mượn]]). Trình tự dưới đây bám theo cách chia bài của The Jazz Piano Site (cơ bản → hợp âm → tiến trình → âm giai → ngẫu hứng → thế bấm → tái hoà âm → jazz hiện đại).
1. **Cảm nhận**: [[swing]]; bức tranh toàn cảnh: [[phong-cach-jazz]].
2. **Blues**: [[blues-12-nhip]], [[am-giai-blues]].
3. **Hợp âm jazz**: [[ky-hieu-hop-am]], [[hop-am-mo-rong]], [[hop-am-6-va-add]] (cả sus), [[hop-am-gach-cheo]], [[hop-am-chong]].
4. **Kết và tiến trình**: [[ii-v-i]] → [[turnaround-jazz]] → [[line-cliche]] → [[vong-hop-am]]; đọc tiến trình: [[phan-tich-tien-trinh-jazz]].
5. **Âm giai cho hợp âm**: [[he-thong-hop-am-am-giai]] → [[dieu-thuc-thu-giai-dieu]] → [[hop-am-at-bien-hoa]] → [[am-giai-bebop]] → [[am-giai-doi-xung-jazz]] ([[am-giai-bat-cung]]).
6. **Xếp hợp âm**: [[the-bam-ba-not]] → [[xep-hop-am]] (shell, không gốc, drop 2) → [[the-bam-mo]] → [[quy-tac-xep-hop-am-jazz]] → [[the-bam-bac-thay-jazz]] → [[hop-am-so-what-barron]] → [[hop-am-khoi]] → [[upper-structure]] → [[hoa-am-quang-bon]] → [[am-cum|âm cụm]]; chọn và ghép thế bấm: [[ket-hop-the-bam]], [[chon-the-bam-jazz]].
7. **Tay trái và đệm**: [[bass-di-jazz]], [[stride-piano]], [[dem-jazz]], [[dem-cho-ca-si]], [[jam-session]].
8. **Thay thế**: [[thay-the-hop-am]], [[thay-the-tritone]], [[hop-am-luot-jazz]].
9. **Tái hoà âm**: [[tai-hoa-am]] (gồm cách làm bài "jazzy"), [[tai-hoa-am-gospel]], [[doi-nhip-the-loai-jazz|đổi nhịp, đổi thể loại, chơi tự do thời gian]], [[constant-structures]]; **sáng tác**: [[sang-tac-jazz]].
10. **[[hinh-thuc-am-nhac|Hình thức]] và tiến trình chuẩn**: [[hinh-thuc-ca-khuc-32]], [[rhythm-changes]], [[vong-coltrane]].
11. **Ngẫu hứng** (theo các bài của TJPS):
   - Nền tảng: [[ngau-hung-jazz]] → [[not-dan-huong]] → [[trang-tri-giai-dieu-jazz]] → [[not-tiep-can-jazz]] → [[not-tranh-va-quang-nghich]].
   - Phương pháp: [[ngau-hung-doc-ngang]] → [[tiet-tau-ngau-hung-jazz]] → [[lick-va-trich-dan]] → [[mau-lap-chu-ky]] → [[choi-ngoai-jazz]].
   - Nâng cao: [[superimposition-jazz]] → [[sheets-of-sound]] → [[triad-pairs]] → [[ngau-hung-hop-am]].
   - Tổng hợp: [[xay-dung-bai-solo]] → [[phan-tich-solo-jazz]] → [[meo-ngau-hung-jazz]] (cả mục [[ngau-hung-ung-tac|ngẫu hứng]]).
12. **Jazz hiện đại**: [[jazz-dieu-thuc]] ([[hoa-am-dieu-thuc]]) → [[post-bop-free-jazz]].
13. **Ứng dụng đệm hát**: [[dem-hat-piano]].

## Mẹo hiểu hoà âm jazz có hệ thống
- Nhìn mọi tiến trình như **chuỗi các cặp ii – V** dẫn tới những "[[bac-am-giai|chủ âm]] tạm thời".
- Với mỗi hợp âm, hỏi: **nốt 3 và 7 là gì?** — hai nốt này quyết định tính chất và nối các hợp âm với nhau (nốt dẫn hướng).
- Mọi hợp âm 7 át đều có thể **thay thế** ([[quang|tritone]], backdoor, [[hop-am-bay-giam|hợp âm 7 giảm]]) — nhưng giai điệu phải hợp với hợp âm mới.
`,
  },  {
    slug: 'hoc-piano-jazz',
    title: 'Học piano jazz: bắt đầu từ đâu?',
    category: 'jazz',
    aliases: ['how to play jazz piano', 'học piano jazz', 'bắt đầu học jazz', 'jazz piano roadmap', 'lộ trình piano jazz'],
    summary: 'Lộ trình thực hành của TJPS cho người bắt đầu chơi jazz: chọn một bài ballad chậm nhiều ii – V – I, học thật đơn giản (giai điệu + hợp âm 7), rồi thêm từng lớp — thế bấm, tay trái, tiết tấu, ngẫu hứng — mỗi lớp tập riêng trước khi ghép.',
    wiki: 'Jazz_piano',
    refs: [
      ['The Jazz Piano Site — How to Play Jazz Piano: Beginner to Advanced', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/playing-jazz-piano-beginner-advanced/'],
      ['The Jazz Piano Site — Jazz for Beginners: Theory & Practice', 'https://www.thejazzpianosite.com/jazz-piano-lessons/the-basics/jazz-for-beginners-theory-practice/'],
      ['The Jazz Piano Site — Jazz Piano Roadmap (PDF)', 'https://www.thejazzpianosite.com/wp-content/uploads/2017/08/Jazz-Piano-Roadmap.pdf'],
      ['The Jazz Piano Site — Rootless Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/rootless-voicings/'],
    ],
    body: `
Bài này là **lộ trình thực hành** (tay trên phím); lộ trình lý thuyết đầy đủ nằm ở [[hoa-am-jazz]].

## Kiến thức tối thiểu (theo TJPS)
- Cấu trúc [[am-giai-truong|âm giai trưởng]].
- Các [[hop-am-bay|hợp âm 7]] diatonic của một giọng và cách dựng từng loại (xem [[ky-hieu-hop-am]]).

## Chọn bài đầu tiên
TJPS: một bài **ballad chậm, dễ nhớ, diatonic**, có **nhiều [[ii-v-i]]**. Gợi ý: "Fly Me to the Moon", "Autumn Leaves" (xem [[phan-tich-tien-trinh-jazz]]), "All the Things You Are", "Softly as in a Morning Sunrise".

## Thêm từng lớp
1. **Học bài thật đơn giản**: giai điệu tay phải + hợp âm 7 tay trái.
2. **Thế bấm**: shell (nốt 3 + 7) → [[the-bam-ba-not]] → [[xep-hop-am|không gốc]] (3 – 5 – 7 – 9 cho [[hop-am-ba|hợp âm trưởng]] và thứ, 3 – 7 – 9 – 13 cho V7; phát triển trong thập niên 1950 với [[bill-evans|Bill Evans]], Wynton Kelly, Ahmad Jamal) → [[the-bam-mo]].
3. **Tay trái**: [[bass-di-jazz|bass đi]], [[stride-piano|stride]].
4. **Tiết tấu**: [[swing]], đệm Charleston ([[dem-jazz]]).
5. **[[ngau-hung-piano|Ngẫu hứng]]** theo thang: rải hợp âm 7 → âm giai → nốt cromatic và [[choi-ngoai-jazz|side-slipping]] → toàn bộ cromatic; kết câu ở [[not-dan-huong|nốt dẫn hướng]] (xem [[xay-dung-bai-solo]]).
Mỗi lớp **tập riêng** trước khi ghép với các lớp khác. Bản đồ khái niệm một trang của TJPS (*Jazz Piano Roadmap*) tóm tắt: hình thức, tiết tấu, giai điệu, hoà âm và các thế bấm (khối, shell, không gốc, mở, quãng 4, [[jazz-dieu-thuc|So What]], [[upper-structure|upper structure]], [[hop-am-khoi|locked hands]]).

## Thói quen luyện tập
- Dùng [[kiem-soat-toc-do|máy đếm nhịp]], tập chậm; **20 phút mỗi ngày** tốt hơn 60 phút ba ngày một lần (TJPS — xem [[phuong-phap-luyen-tap]]).
- **[[ngau-hung-jazz|Chép solo]]** từ bản thu ([[phan-tich-solo-jazz]]) và **chơi cùng người khác** ([[jam-session]]).
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
Trong jazz, hai [[truong-do|nốt móc đơn]] viết bằng nhau thường **không** được chơi bằng nhau: nốt đầu dài hơn, nốt sau ngắn hơn.

| Cách viết | Cách chơi ([[nhip-do|nhịp độ]] vừa) |
|---|---|
| Hai móc đơn ♫ | Như [[lien-ba]]: nốt đen + móc đơn trong một nhóm liên ba (2 : 1) |

Đầu bản nhạc thường ghi "**Swing**" hoặc "**Swung 8ths**" kèm công thức ♫ = ♩♪ (liên ba). Ngược lại, "**Straight 8ths**" nghĩa là chơi đều.
::rhythm 4/4 e-e e-e e-e e-e // | Cách viết: các cặp móc đơn bằng nhau
::rhythm 4/4 3[q-e] 3[q-e] 3[q-e] 3[q-e] // | Cách chơi swing ở nhịp độ vừa: đen + móc đơn trong nhóm liên ba (2 : 1)

## Tỉ lệ thay đổi theo nhịp độ
- Chậm: swing đậm, gần 2 : 1 hoặc hơn.
- Nhanh: swing nhẹ dần, gần như đều.

Nghiên cứu đo đạc của **Friberg và Sundström** (*Music Perception*, 2002) trên tiếng cymbal ride của các tay trống jazz nổi tiếng (Tony Williams, Jack DeJohnette, Jeff Watts…) cho thấy tỉ lệ swing **thay đổi rất nhiều theo nhịp độ**: ở nhịp độ nhanh gần **1 : 1** (đều), ở nhịp độ chậm tăng dần đến gần **3,5 : 1**. Kết quả này **không khớp** với quan niệm phổ biến rằng swing luôn bằng tỉ lệ liên ba 2 : 1. Ký hiệu liên ba chỉ là **quy ước gần đúng**; swing thật phải học bằng **tai**, qua việc nghe và chơi theo bản thu.

## Trọng âm
- Trọng âm rơi vào **phách 2 và 4** (backbeat) — ngược với nhạc cổ điển nhấn phách 1 và 3 (xem [[so-chi-nhip]]).
- Nốt móc đơn rơi vào phần nhẹ của phách ("&") thường được nhấn, tạo [[dao-phach]].

**Shuffle** là swing với cảm giác liên ba rõ và nặng, thường gặp trong [[blues-12-nhip]].

## Luyện swing trên piano
1. Bật máy đếm nhịp ở **phách 2 và 4** (thay vì 1 và 3) — nghe nó như tiếng hi-hat của tay trống.
2. Chơi [[am-giai|âm giai]] bằng móc đơn swing, nhấn nhẹ nốt "&" (nốt ngắn).
3. Chơi theo bản thu ở nhiều nhịp độ khác nhau và để ý tỉ lệ dài – ngắn thay đổi.
4. Tay trái đệm [[hop-am-ba|hợp âm]] ngắn kiểu "Charleston" (phách 1 và "& của 2") để cảm nhận [[dao-phach]].
::rhythm 4/4 q. e rh // | Mẫu Charleston: phách 1 và "&" của phách 2
Lý thuyết hoà âm đi kèm: [[hoa-am-jazz]].

Các hình đệm Charleston và "đẩy" khi đệm: [[dem-jazz]].
`,
  },
  {
    slug: 'blues-12-nhip',
    title: 'Blues 12 ô nhịp',
    category: 'jazz',
    also: ['form', 'improvisation'],
    aliases: ['12 bar blues', 'blues 12 ô', 'vòng blues', 'twelve-bar blues', 'blues'],
    summary: 'Khung hoà âm 12 ô nhịp dùng các hợp âm I, IV, V — nền tảng của blues, rock and roll và jazz.',
    wiki: 'Twelve-bar_blues',
    refs: [
      ['Wikipedia — The Memphis Blues', 'https://en.wikipedia.org/wiki/The_Memphis_Blues'],
      ['American Songwriter — Behind the song: "St. Louis Blues"', 'https://americansongwriter.com/behind-the-song-st-louis-blues/'],
      ['St. Olaf College — W. C. Handy and the blues', 'https://pages.stolaf.edu/americanmusic/author/findle1/'],
    ],
    body: `
Mỗi ô là một [[so-chi-nhip|ô nhịp]] 4/4, trong giọng Đô:
| Ô 1–4 | Ô 5–8 | Ô 9–12 |
|---|---|---|
| C7 · C7 · C7 · C7 | F7 · F7 · C7 · C7 | G7 · F7 · C7 · G7 |
::form C7:4 F7:2 C7:2 G7:1 F7:1 C7:1 G7:1 | Vòng blues 12 ô ở Đô: số dưới mỗi khối là số ô

Ô 12 dùng G7 (**turnaround**) để quay về đầu vòng. Phiên bản "quick change" đổi ô 2 thành F7.
::staff treble C4+E4+G4+Bb4=C7 F4+A4+C5+Eb5=F7 G4+B4+D5+F5=G7 | Ba hợp âm 7 át của blues ở Đô: C7 (I7), F7 (IV7), G7 (V7)

## Đặc trưng
- Cả ba [[hop-am-ba|hợp âm]] đều là [[hop-am-bay|hợp âm 7 át]] — điều "phạm luật" theo [[he-thong-hoa-am-co-dien|hoà âm cổ điển]] nhưng tạo nên màu blues.
- [[giai-dieu|Giai điệu]] và ngẫu hứng dùng [[am-giai-blues]].
- Nhịp **swing**: cặp móc đơn được chơi dài – ngắn (gần với [[lien-ba]] 2+1).
- Lời thường theo cấu trúc **AAB**: câu 1 nêu ý, câu 2 lặp lại, câu 3 đáp.

## Bass boogie-woogie cho tay trái
C – E – G – A – B♭ – A – G – E (mỗi nốt một móc đơn), dịch lên F và G theo hợp âm.
::staff bass C3 E3 G3 A3 Bb3 A3 G3 E3 | Bè trầm boogie-woogie trên C7

## Lịch sử: những bản blues in đầu tiên
Blues bắt nguồn từ truyền thống dân gian của người Mỹ gốc Phi; những bản **được in** đầu tiên xuất hiện năm 1912. Các nguồn không thống nhất "bản đầu tiên" là bản nào:
| Bản | Năm in | Ghi chú |
|---|---|---|
| *Dallas Blues* — Hart Wand | 1912 | In ở Oklahoma City, **vài tháng trước** bản blues của Handy |
| *The Memphis Blues* — W. C. Handy | 1912 | Viết năm 1909 cho một ứng viên thị trưởng Memphis |
| *St. Louis Blues* — W. C. Handy | 1914 | Bản hit lớn, đưa blues thành một trong những [[the-loai|thể loại]] phổ biến nhất nước Mỹ |

Một điểm thú vị: cả *Memphis Blues* lẫn *St. Louis Blues* đều **không hoàn toàn** theo khuôn 12 ô nhịp. Sau đoạn mở đầu ngắn, chúng đặt một đoạn 12 ô nhịp blues cạnh một đoạn **16 ô nhịp** thông thường. *St. Louis Blues* còn [[chuyen-giong|chuyển giọng]] ra ngoài khuôn rồi mới quay về. Vì vậy câu trả lời cho "bản blues đầu tiên" tuỳ vào việc tính bản đầu tiên có chữ "blues" trong tên, bản 12 ô nhịp đầu tiên, hay bản hit đầu tiên.

Liên quan: [[vong-hop-am]], [[chuc-nang-hoa-am]], [[dao-phach]], [[swing]], [[ngau-hung-piano]]. So sánh với khuôn 32 ô nhịp: [[hinh-thuc-ca-khuc-32]].

Hai ô cuối thường là một [[turnaround-jazz|turnaround]].
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
      ['Wikipedia — Blue note', 'https://en.wikipedia.org/wiki/Blue_note'],
      ['Cutting (2019), Empirical Musicology Review — Microtonal analysis of "blue notes" and the blues scale', 'https://www.osu.tests.sfulib4.publicknowledgeproject.org/index.php/EMR/article/view/6316'],
      ['University of Rochester — Unlocking the secrets of blue notes', 'https://www.rochester.edu/newscenter/unlocking-the-secrets-of-blue-notes-230482/'],
      ['Martin (2025), Music Theory Online — The evolution of improvisation in early jazz piano pedagogy', 'https://mtosmt.org/issues/mto.25.31.3/mto.25.31.3.martin.php'],
      ['Ethan Iverson / Asher Tobin Chodos — The history of the blues… scale?', 'https://ethaniverson.com/the-history-of-the-blues-scale-guest-post-by-asher-tobin-chodos/'],
    ],
    body: `
Âm giai blues (dạng 6 nốt) = [[am-giai-ngu-cung|ngũ cung thứ]] + **♭5**:
**1 – ♭3 – 4 – ♭5 – 5 – ♭7**

::keyboard C4 Eb4 F4 Gb4 G4 Bb4 | Âm giai blues trên C: C – E♭ – F – G♭ – G – B♭

## Nốt blue
Các nốt ♭3, ♭5, ♭7 gọi là **nốt blue**. Trên guitar hay giọng hát, chúng thường được uốn (bend) vào khoảng giữa hai [[ban-phim|phím đàn]]; trên piano, người chơi [[doi-am|mô phỏng]] bằng cách **láy nhanh** từ ♭3 lên 3 (E♭ → E).

Âm giai blues thường được chơi trên khung [[blues-12-nhip]] với các [[hop-am-bay|hợp âm 7 át]]. Liên quan: [[dieu-thuc|Mixolydian]], [[dao-phach]].

## Nốt blue thực sự cao bao nhiêu?
- Nốt blue thường được mô tả là bậc 3, 5, 7 **hạ xuống** — nhưng mức hạ **không cố định**, thường từ khoảng **một phần tư cung đến [[cung-nua-cung|nửa cung]]**.
- Court Cutting (2019) đo [[cao-do|cao độ]] trong 15 bản thu blues kinh điển và tìm thấy ba "cụm" nốt blue, trong đó một cụm ở khoảng **319 cent** — **giữa** [[quang|quãng]] 3 thứ (300) và quãng 3 trưởng (400): một quãng 3 "trung tính". Có nhà nghiên cứu phản biện rằng nốt blue thường là **đường trượt** giữa hai cao độ chứ không đứng yên.
- Vì piano không có cao độ giữa hai phím, người chơi chỉ có thể **gợi** nốt blue — ví dụ [[nghe-si-piano-jazz|Thelonious Monk]] đánh **hai phím liền nhau cùng lúc**, hoặc láy nhanh từ ♭3 lên 3.

## Âm giai blues là sản phẩm của sách dạy
- Nguồn gốc nốt blue còn **tranh cãi**: Gerhard Kubik cho rằng chúng đến từ [[chuoi-boi-am|chuỗi bồi âm]] trong truyền thống châu Phi, không phải từ việc "hạ" các nốt bình quân.
- "Âm giai blues" như một **bài học** xuất hiện muộn: phương pháp piano của Vincent Lopez (1933–34) có lẽ là ấn phẩm đầu tiên nêu một âm giai blues. Trước khi jazz vào giảng đường (khoảng 1967), có **nhiều phiên bản** âm giai blues khác nhau; dạng 6 nốt quen thuộc được các nhà giáo dục jazz như [[am-giai-bebop|David Baker]] và Jamey Aebersold phổ biến.
- Có người phê phán [[am-giai|âm giai]] này **quá đơn giản**, không nắm được tinh thần của blues.

Ý nghĩa với người dạy: âm giai blues là **điểm khởi đầu** hữu ích để ngẫu hứng (xem [[ngau-hung-piano]]), nhưng nên cho học sinh **[[so-sanh-ban-thu|nghe nhiều bản thu]] blues** để hiểu nốt blue thật sự "uốn" thế nào.
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
      ['Open Music Theory 2e — ii–V–I', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.04%3A_iiVI'],
      ['Wikipedia — ii–V–I progression', 'https://en.wikipedia.org/wiki/Ii%E2%80%93V%E2%80%93I_progression'],
      ['Open Music Theory 2e — Substitutions (mode mixture in jazz)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
    ],
    body: `
**ii – V – I** là [[cau-ket|kết chính]] của [[he-thong-hoa-am-co-dien|hoà âm cổ điển]] (tiền át – át – chủ, xem [[chuc-nang-hoa-am]]) dùng **[[hop-am-bay|hợp âm 7]]** ở mọi bậc. Nhận ra nó bằng hai dấu hiệu: **nốt gốc đi theo [[quang|quãng]] 5** và **chuỗi tính chất [[hop-am-ba|hợp âm]]** đặc trưng.

## Giọng trưởng và giọng thứ
| Giọng | Tiến trình | Ví dụ |
|---|---|---|
| Trưởng | **ii7 – V7 – Imaj7** | Dm7 – G7 – Cmaj7 |
| Thứ | **iiø7 – V7(♭9) – i7** (hoặc i6, imaj7) | Dø7 – G7♭9 – Cm7 |
Trong [[am-giai-thu|giọng thứ]], ii là hợp âm **nửa giảm** và V thường thêm **♭9** — cả hai đến từ bậc 6 hạ (♭6) của giọng thứ. Open Music Theory ghi nhận iiø7 thay ii7 và V7♭9 là hai hợp âm **mượn** phổ biến nhất trong jazz, kể cả khi giọng là trưởng (xem [[hop-am-muon]]).

## Nốt dẫn hướng (guide tones)
Nốt **3** và **7** quyết định tính chất hợp âm. Trong ii – V – I chúng nối với nhau theo quy luật:
- Nốt **7** của hợp âm trước đi **xuống [[cung-nua-cung|nửa cung]]** thành nốt **3** của hợp âm sau.
- Nốt **3** của hợp âm trước **giữ nguyên** thành nốt **7** của hợp âm sau.
| | Dm7 | G7 | Cmaj7 |
|---|---|---|---|
| Đường 1 | C (7) | B (3) | B (7) |
| Đường 2 | F (3) | F (7) | E (3) |

::staff treble F4+C5 F4+B4 E4+B4 | Nốt dẫn hướng trong Dm7 – G7 – Cmaj7: mỗi bước chỉ một nốt đi xuống nửa cung

Đây là cùng một nguyên tắc với [[dan-giong|dẫn giọng]] cổ điển: nốt 7 của hợp âm át giải quyết đi xuống.

## Chuỗi ii – V
Mỗi hợp âm đích có thể được "chuẩn bị" bằng ii – V riêng (ii – V phụ, xem [[hop-am-at-phu]]). Nhiều standard là một chuỗi ii – V liên tiếp — ví dụ "Autumn Leaves" xen kẽ ii – V – I ở [[am-giai-truong|giọng trưởng]] và giọng thứ song song; "Tune Up" (Miles Davis) đi qua ba giọng bằng ba ii – V – I hạ dần một cung.

## Luyện tập
1. Chơi nốt dẫn hướng (tay trái) qua ii – V – I ở cả 12 giọng, đi theo [[vong-quang-nam]].
2. Thêm nốt gốc ở bè trầm, rồi chuyển sang [[xep-hop-am|xếp hợp âm không gốc]].
3. Làm lại với ii – V – i giọng thứ (Dø7 – G7♭9 – Cm7).

Mở rộng: [[turnaround-jazz]], [[phan-tich-tien-trinh-jazz]].

Nốt dẫn hướng chi tiết: [[not-dan-huong]]; lick trên ii – V – I: [[lick-va-trich-dan]].
`,
  },  {
    slug: 'turnaround-jazz',
    title: 'Turnaround và turnaround Tadd Dameron',
    category: 'jazz',
    aliases: ['turnaround', 'vòng quay lại', 'I-vi-ii-V', 'Tadd Dameron turnaround', 'Lady Bird turnaround', 'turnaround jazz'],
    summary: 'Turnaround là tiến trình ngắn (thường 1–2 ô) ở cuối một đoạn để quay lại đầu bài, hướng về hợp âm V7. Bài đi từ I – vi – ii – V qua các biến thể bằng át phụ và thay thế tritone đến turnaround Tadd Dameron trong "Lady Bird": Cmaj7 – E♭7 – A♭maj7 – D♭7.',
    wiki: 'Turnaround_(music)',
    refs: [
      ['The Jazz Piano Site — Turnarounds & the Tadd Dameron Turnaround', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/turnarounds-the-tadd-dameron-turnaround/'],
      ['Wikipedia — Turnaround (music)', 'https://en.wikipedia.org/wiki/Turnaround_(music)'],
      ['Wikipedia — Tadd Dameron turnaround', 'https://en.wikipedia.org/wiki/Tadd_Dameron_turnaround'],
      ['Wikipedia — Lady Bird (composition)', 'https://en.wikipedia.org/wiki/Lady_Bird_(composition)'],
      ['Hutchinson — Music Theory for the 21st-Century Classroom, 31.8 Standard Chord Progressions (LibreTexts)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/31%3A_Introduction_to_Jazz_Theory/31.08%3A_Standard_Chord_Progressions'],
    ],
    body: `
**Turnaround** là một [[vong-hop-am|vòng hợp âm]] ngắn — thường 1–2 ô — đặt ở **cuối một đoạn** để "quay" người nghe trở lại đầu bài khi nhắc lại; nó hướng tới hợp âm **V7** (hoặc hợp âm thay thế của V7). Ở lần kết cuối cùng, người chơi bỏ turnaround và dừng ở I. Turnaround xuất hiện ở cuối [[blues-12-nhip|blues 12 ô]] và cuối mỗi đoạn A của [[hinh-thuc-ca-khuc-32|khuôn AABA]].

## Từ I – vi – ii – V đến các biến thể
| Dạng | Ở Đô trưởng | Cách biến đổi |
|---|---|---|
| I – vi – ii – V | Cmaj7 – Am7 – Dm7 – G7 | Dạng gốc |
| I – VI7 – ii – V | Cmaj7 – A7 – Dm7 – G7 | vi thành [[hop-am-at-phu|át phụ]] của ii |
| iii – VI7 – ii – V | Em7 – A7 – Dm7 – G7 | I thay bằng iii ([[thay-the-hop-am|cùng chức năng]]) |
| I – ♭III°7 – ii – V | Cmaj7 – E♭°7 – Dm7 – G7 | [[hop-am-luot-jazz|Hợp âm 7 giảm lướt]] |
| I – VI7 – II7 – V7 | Cmaj7 – A7 – D7 – G7 | Mọi hợp âm sau I đều là át |
| (cả chuỗi át, thay tritone xen kẽ) | E7 – E♭7 – D7 – D♭7 | [[thay-the-tritone|Thay thế tritone]]: bè trầm đi xuống cromatic |

::staff treble C4+E4+G4+B4=Cmaj7 A3+C#4+E4+G4=A7 D4+F4+A4+C5=Dm7 G3+B3+D4+F4=G7 | I – VI7 – ii – V7 ở Đô trưởng

## Turnaround Tadd Dameron
Theo TJPS và Wikipedia, turnaround mang tên **Tadd Dameron** đi từ I – vi – ii – V qua ba bước:
1. Biến các hợp âm thứ thành **át phụ**: C – A7 – D7 – G7.
2. Thay mỗi hợp âm át bằng **hợp âm thay thế tritone**: C – E♭7 – A♭7 – D♭7.
3. Tuỳ chọn, biến một số hợp âm át thành **[[hop-am-bay|maj7]]**.
Dạng trong bài **"Lady Bird"** (Dameron; viết khoảng 1939, thu âm 1948) là **Cmaj7 – E♭7 – A♭maj7 – D♭7** rồi về Cmaj7.
::staff treble C4+E4+G4+B4=Cmaj7 Eb4+G4+Bb4+Db5=E♭7 Ab3+C4+Eb4+G4=A♭maj7 Db4+F4+Ab4+Cb5=D♭7 C4+E4+G4+B4=Cmaj7 | Turnaround Tadd Dameron: bè trầm C – E♭ – A♭ – D♭ – C
Hãy để ý **bè trầm**: các nốt E♭ – A♭ – D♭ – C cách nhau quãng 5 đi xuống rồi nửa cung — vẫn là "logic" của vòng quãng 5 dù màu sắc rất xa (xem [[vong-quang-nam]]).

## Luyện tập
- Chơi từng dạng trong bảng ở cả 12 giọng, dùng [[xep-hop-am|thế bấm không gốc]] để nối mượt.
- Khi đệm, thay turnaround tự do ở cuối mỗi đoạn — đó là [[tai-hoa-am|tái hoà âm]] trong lúc chơi.
- [[ngau-hung-piano|Ngẫu hứng]]: nhắm [[ii-v-i|nốt dẫn hướng]] (3 và 7) của từng hợp âm trong turnaround.
`,
  },
  {
    slug: 'line-cliche',
    title: 'Line cliché',
    category: 'jazz',
    aliases: ['line cliché', 'line cliche', 'đường bè nửa cung trên một hợp âm', 'Cm Cm(maj7) Cm7 Cm6', 'My Funny Valentine'],
    summary: 'Line cliché là một đường bè đi liền bậc (thường từng nửa cung) bên trong một hợp âm đứng yên, tạo chuyển động cho hoà âm tĩnh: Cm – Cm(maj7) – Cm7 – Cm6 (nốt C đi xuống C – B – B♭ – A) hay C – C+ – C6 – C7 (nốt 5 đi lên). Ví dụ kinh điển: "My Funny Valentine".',
    refs: [
      ['The Jazz Piano Site — Line Clichés', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/line-cliches/'],
      ['jazzguitar.be — 10 ways to play My Funny Valentine chord changes', 'https://www.jazzguitar.be/blog/10-ways-to-play-my-funny-valentine-chord-changes/'],
      ['Songtive — What are line clichés', 'https://www.songtive.com/blog/what-are-line-cliches-in-music-and-how-do-you-use-them/'],
    ],
    body: `
## Định nghĩa
Theo TJPS, **line cliché** là một **đường bè đi liền bậc** — thường từng [[cung-nua-cung|nửa cung]], đôi khi một cung — chuyển động **trên một hợp âm đứng yên**, để thêm chuyển động cho một tiến trình tĩnh. Đường bè có thể nằm ở nốt gốc, nốt 5 hoặc nốt 7; đi lên, đi xuống hoặc đổi hướng. Hay gặp nhất trên **[[hop-am-ba|hợp âm thứ]]**.

## Hai dạng chuẩn
::staff treble C4+Eb4+G4+C5=Cm C4+Eb4+G4+B4=Cm(maj7) C4+Eb4+G4+Bb4=Cm7 C4+Eb4+G4+A4=Cm6 | Dạng thứ: nốt C đi xuống C – B – B♭ – A trong khi C – E♭ – G đứng yên
::staff treble C4+E4+G4=C C4+E4+G#4=C+ C4+E4+A4=C6 C4+E4+Bb4=C7 | Dạng trưởng: nốt 5 đi lên G – G♯ – A – B♭ (TJPS ghi C, C♯5, C6, C7)
Mỗi "hợp âm" mới thật ra chỉ là **cùng một hợp âm** với một [[not-ngoai-hop-am|nốt lướt]] chậm — vì thế line cliché là cầu nối giữa [[dan-giong|dẫn giọng]] cổ điển và ký hiệu hợp âm jazz ([[ky-hieu-hop-am]]).

## Ví dụ trong bài hát
- **"My Funny Valentine"** (Rodgers & Hart): mở đầu bằng Cm – Cm([[hop-am-bay|maj7]]) – Cm7 – Cm6 — ví dụ kinh điển nhất.
- TJPS liệt kê thêm "In Walked Bud" ([[thelonious-monk|Monk]]) và "Blue Skies" (Irving Berlin).
- Ngoài jazz: "Stairway to Heaven" (Led Zeppelin) dùng đường bè thứ đi xuống tương tự.

## Dùng để tái hoà âm
TJPS dùng line cliché để làm sống động những chỗ **một hợp âm kéo dài** (ví dụ "Summertime") hoặc những cặp ii – V lặp lại ("Satin Doll") — xem [[tai-hoa-am]]. Ở bè trầm, chuỗi hợp âm gạch chéo C – C/B – C/B♭ – A7 cũng là một line cliché (xem [[hop-am-gach-cheo]]).
`,
  },
  {
    slug: 'phan-tich-tien-trinh-jazz',
    title: 'Phân tích một tiến trình jazz',
    category: 'jazz',
    aliases: ['phân tích hoà âm jazz', 'jazz harmonic analysis', 'phân tích lead sheet', 'trung tâm giọng tạm', 'ii-V bracket', 'chord mapping'],
    summary: 'Cách đọc một chuỗi hợp âm jazz trên lead sheet: tìm giọng chính và các kết, ghi số La Mã, quy về chức năng, rồi tách các "giọng tạm" — mỗi cặp ii – V là một mũi tên chỉ về chủ âm tạm. Ví dụ phân tích vòng "Autumn Leaves".',
    refs: [
      ['The Jazz Piano Site — How to Analyse a Chord Progression (Harmonic Analysis)', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/how-to-analyse-a-chord-progression-harmonic-analysis/'],
      ['The Jazz Piano Site — Chord Mapping & Common Scales', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/chord-mapping/'],
      ['The Jazz Piano Site — Harmonic Functionality', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/functionality/'],
      ['Medium (Jazz Theory) — Harmonic analysis symbols', 'https://medium.com/jazz-theory/harmonic-analysis-symbols-aa235bfc6ded'],
    ],
    body: `
Phân tích hoà âm cổ điển dựa trên bản nhạc đầy đủ ([[phan-tich-hoa-am]]); phân tích jazz thường làm trên **lead sheet** — chỉ có giai điệu và ký hiệu hợp âm ([[ky-hieu-hop-am]]). Mục tiêu thực tế: biết **mỗi đoạn đang ở giọng nào** để chọn âm giai, thế bấm và chỗ [[tai-hoa-am|tái hoà âm]].

## Các bước (theo TJPS)
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
| Trong Sol thứ | iv | ♭VII | III | VI | **ii°** | **V** | **i** |
Đoạn đầu là một [[ii-v-i]] **trưởng** về B♭ (giọng [[giong-song-song|song song]]), tiếp ngay một ii – V – i **thứ** về Gm. E♭maj7 là chiếc cầu nối hai giọng — chung cho cả hai. Nốt gốc đi theo [[vong-quang-nam|vòng quãng 5]] suốt chuỗi.
::form Cm7 F7 B♭maj7 E♭maj7 Am7♭5 D7 Gm6 | Hai "giọng tạm" nối nhau: ii – V – I về B♭ trưởng, rồi ii – V – i về Sol thứ

## Bản đồ hợp âm (chord mapping)
Bước tiếp theo cho người [[ngau-hung-piano|ngẫu hứng]] (TJPS): với mỗi giọng tạm, tìm **một âm giai nền** dùng được cho cả nhóm hợp âm (ví dụ B♭ trưởng cho Cm7 – F7 – B♭maj7 – E♭maj7), rồi chỉ đổi âm giai ở chỗ thật sự đổi giọng — xem [[ngau-hung-doc-ngang]].
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
      ['Wikipedia — Chord-scale system', 'https://en.wikipedia.org/wiki/Chord-scale_system'],
      ['Wikipedia — Lydian Chromatic Concept of Tonal Organization', 'https://en.wikipedia.org/wiki/Lydian_Chromatic_Concept_of_Tonal_Organization'],
      ['Hilobrow — George Russell', 'https://www.hilobrow.com/2015/06/23/george-russell/'],
      ['University of Colorado thesis — The Lydian Chromatic Concept and chord-scale theory', 'https://scholar.colorado.edu/downloads/bk128c27z'],
    ],
    body: `
Mỗi [[hop-am-bay|hợp âm 7]] được "phủ" bằng một [[am-giai|âm giai]] 7 nốt chứa các nốt của [[hop-am-ba|hợp âm]] cùng các [[hop-am-mo-rong|nốt mở rộng]] 9, 11, 13.

## Trong vòng ii – V – I ở Đô trưởng
| Hợp âm | Âm giai | Ghi chú |
|---|---|---|
| Dm7 | D Dorian | Phím trắng từ D (xem [[dieu-thuc]]) |
| G7 | G Mixolydian | Phím trắng từ G |
| Cmaj7 | C Ionian hoặc C Lydian | F là **nốt tránh** trên Cmaj7; Lydian (F♯) tránh được điều đó |
::staff treble D4 E4 F4 G4 A4 B4 C5 D5 | D Dorian cho Dm7: các phím trắng từ D
::staff treble G4 A4 B4 C5 D5 E5 F5 G5 | G Mixolydian cho G7: các phím trắng từ G
::staff treble C4 D4 E4 F#4 G4 A4 B4 C5 | C Lydian cho Cmaj7: F♯ thay cho nốt tránh F

## Âm giai cho hợp âm 7 át
Hợp âm 7 át có nhiều lựa chọn nhất (Mixolydian, Lydian át, bát cung, âm giai biến đổi…) tuỳ theo nốt căng và hướng giải quyết — xem bảng đầy đủ ở [[hop-am-at-bien-hoa]].

## Các hợp âm còn lại
- m7♭5 → Locrian (hoặc Locrian ♮2).
- °7 → bát cung **[[am-giai-bat-cung|cung – nửa cung]]**.

## Bảng tổng hợp: bảy loại hợp âm thường gặp
| Hợp âm | Âm giai thường dùng | Nốt căng có sẵn |
|---|---|---|
| maj7 | Ionian, Lydian | 9, ♯11, 13 |
| m7 (ii) | Dorian | 9, 11, 13 |
| m7 (iii) | Phrygian | 11 |
| 7 | Mixolydian và các âm giai át khác | 9, 13 (và các biến hoá) |
| m7♭5 | Locrian, Locrian ♮2 | 11, ♭13 (và 9 với Locrian ♮2) |
| °7 | Bát cung cung – nửa cung | Các nốt cách gốc một cung |
| mMaj7 | [[am-giai-thu|Thứ giai điệu]] | 9, 11, 13 |

## Lịch sử
- **George Russell** tự xuất bản *Lydian Chromatic Concept of Tonal Organization* năm **1953** — lý thuyết đầu tiên đặt quan hệ **dọc** giữa hợp âm và âm giai làm trung tâm, thường được gọi là lý thuyết gốc duy nhất sinh ra từ jazz. Russell lấy **Lydian**, chứ không phải Ionian, làm âm giai tham chiếu, vì Lydian được dựng từ các [[quang|quãng]] 5 chồng lên nhau tính từ nốt gốc.
- Theo các tài liệu tiểu sử, [[bill-evans|Bill Evans]] đưa các ý tưởng này đến ban nhạc của Miles Davis, góp phần vào phong cách **[[jazz-dieu-thuc|jazz điệu thức]]** của album *Kind of Blue* (1959) — xem [[hoa-am-dieu-thuc]].
- Hệ thống hợp âm – âm giai sau đó trở thành nền tảng của **giáo dục jazz** ở các trường đại học.

## Giới hạn của cách nghĩ này
Một âm giai cho mỗi hợp âm là **điểm xuất phát**, không phải luật. [[giai-dieu|Giai điệu]] jazz hay vẫn đến từ [[dan-giong|dẫn giọng]] giữa các hợp âm — đặc biệt [[ii-v-i|nốt dẫn hướng]] 3 và 7 — và từ [[not-ngoai-hop-am|nốt lướt]] [[am-giai-cromatic|cromatic]].

## Nốt tránh
Nốt cách một nốt hợp âm [[cung-nua-cung|nửa cung]] phía trên (như F trên Cmaj7 vì nghịch với E) — có thể lướt qua nhưng không nên ngân dài.

Các âm giai này là "bảng màu" cho [[xep-hop-am]] và [[tai-hoa-am]].

Âm giai bổ sung: [[dieu-thuc-thu-giai-dieu]], [[am-giai-bebop]], [[am-giai-doi-xung-jazz]].

Nốt tránh khi [[ngau-hung-piano|ngẫu hứng]]: [[not-tranh-va-quang-nghich]].
`,
  },  {
    slug: 'dieu-thuc-thu-giai-dieu',
    title: 'Các điệu thức của âm giai thứ giai điệu',
    category: 'jazz',
    aliases: ['melodic minor modes', 'jazz minor', 'điệu thức thứ giai điệu', 'Lydian augmented', 'Locrian natural 2', 'Mixolydian b6', 'Dorian b2', 'mMaj7'],
    summary: 'Trong jazz, âm giai thứ giai điệu dùng một dạng cho cả đi lên lẫn đi xuống ("jazz minor"); bảy điệu thức của nó cho bảy loại hợp âm: mMaj7, sus♭9, maj7♯5, 7♯11, 7♭13, m7♭5 và 7alt.',
    wiki: 'Jazz_minor_scale',
    refs: [
      ['The Jazz Piano Site — Melodic Minor Modes and Altered Scale', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/melodic-minor-modes/'],
      ['Wikipedia — Jazz minor scale', 'https://en.wikipedia.org/wiki/Jazz_minor_scale'],
      ['Wikipedia — Altered scale', 'https://en.wikipedia.org/wiki/Altered_scale'],
      ['jazzguitar.be — Melodic minor modes', 'https://www.jazzguitar.be/blog/melodic-minor-modes/'],
    ],
    body: `
Trong nhạc cổ điển, [[am-giai-thu|âm giai thứ giai điệu]] đi lên có 6 và 7 nâng, đi xuống trở về thứ tự nhiên. Trong jazz, người ta dùng **dạng đi lên cho cả hai chiều** — gọi là **"jazz minor"**. Giống [[dieu-thuc|điệu thức nhà thờ]] của [[am-giai-truong|âm giai trưởng]], mỗi bậc của nó sinh ra một điệu thức và một loại hợp âm.

::staff treble C4 D4 Eb4 F4 G4 A4 B4 C5 | Âm giai thứ giai điệu (jazz minor) trên C: giống Đô trưởng nhưng nốt 3 giáng

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

::staff treble B3 C4 D4 Eb4 F4 G4 A4 B4 | Điệu thức 7 (altered) trên B: chứa ♭9 (C), ♯9 (D), 3 (E♭ = D♯), ♭5 (F), ♯5 (G), ♭7 (A) — mọi nốt căng của át đều biến hoá

## Mẹo nhớ
- Altered trên một nốt = thứ giai điệu bắt đầu **nửa cung cao hơn** (B altered = C thứ giai điệu).
- Lydian át trên một nốt = thứ giai điệu bắt đầu **một quãng 5 cao hơn** (F Lydian át = C thứ giai điệu).
- Trong **ii – V – i ở Đô thứ**: Dm7♭5 dùng D Locrian ♮2 (= Fa thứ giai điệu), G7alt dùng G altered (= La giáng thứ giai điệu) — hai âm giai mẹ khác nhau, nhưng đều là thứ giai điệu.
Liên quan: [[he-thong-hop-am-am-giai]], [[am-giai-bebop]], [[am-giai-doi-xung-jazz]].
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
      ['The Jazz Piano Site — Bebop Scales', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/bebop-scales/'],
      ['Wikipedia — Bebop scale', 'https://en.wikipedia.org/wiki/Bebop_scale'],
      ['Learn Jazz Standards — How to use bebop scales', 'https://www.learnjazzstandards.com/blog/learning-jazz/jazz-theory/use-bebop-scales-like-pro/'],
    ],
    body: `
## Ý tưởng
Âm giai bảy nốt có **lẻ** nốt; nếu chạy móc đơn liên tục trong ô 4/4 (tám móc đơn), các [[hop-am-bay|nốt hợp âm]] sẽ lúc rơi vào phách, lúc rơi giữa phách. Thêm **một [[not-ngoai-hop-am|nốt lướt]] [[am-giai-cromatic|cromatic]]** thành **tám nốt**: khi chạy **đi xuống** từ một nốt hợp âm ở đầu phách, mọi nốt hợp âm đều rơi vào **phách** (TJPS).
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

## Luyện tập
- Chạy âm giai **đi xuống** từ nốt gốc, 3, 5, 7 của hợp âm, móc đơn [[swing]], kiểm tra nốt hợp âm rơi vào phách.
- Kết hợp với [[not-tiep-can-jazz|nốt tiếp cận và bao vây]] — đó là "ngôn ngữ" bebop.
- Liên quan: [[he-thong-hop-am-am-giai]], [[ngau-hung-jazz]], [[bud-powell|Bud Powell]].
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
      ['The Jazz Piano Site — Symmetrical Scales', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/symmetrical-scales/'],
      ['The Jazz Piano Site — Diminished Scale & Double Diminished Chord', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/diminished-scale/'],
      ['The Jazz Piano Site — Augmented Scale', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/augmented-scale/'],
      ['Wikipedia — Hexatonic scale', 'https://en.wikipedia.org/wiki/Hexatonic_scale'],
      ['Wikipedia — Octatonic scale', 'https://en.wikipedia.org/wiki/Octatonic_scale'],
      ['Jens Larsen — The augmented scale', 'https://jenslarsen.nl/augmented-scale/'],
    ],
    body: `
Âm giai **đối xứng** lặp lại cùng một mẫu quãng nên chỉ có **ít phiên bản** (xem [[dieu-thuc-chuyen-vi-gioi-han|điệu thức chuyển vị giới hạn]] của [[olivier-messiaen|Messiaen]]). Trong jazz, chúng được dùng cho các hợp âm cũng đối xứng.

## Âm giai giảm (bát cung)
- **Nửa cung – cung** (C D♭ E♭ E F♯ G A B♭): dùng cho **[[hop-am-bay|hợp âm 7 át]] có ♭9** — chứa ♭9, ♯9, ♯11, 13 nhưng **nốt 5 đúng**.
- **Cung – nửa cung**: dùng cho **[[hop-am-bay-giam|hợp âm 7 giảm]]**.
- Hợp âm 7 giảm = hợp âm 7♭9 bỏ nốt gốc; chỉ có **ba** hợp âm 7 giảm khác nhau. TJPS còn giới thiệu "hợp âm giảm kép": mỗi tay một hợp âm 7 giảm.
Chi tiết lý thuyết: [[am-giai-bat-cung]].
::pc-clock 0 1 3 4 6 7 9 10 | Âm giai giảm nửa cung – cung trên C

## Âm giai toàn cung
C D E F♯ G♯ B♭ — sáu nốt cách nhau một cung; cho hợp âm **7♯5** (cùng 9 và ♯11); nốt 5 là ♭5/♯5 chứ không đúng. Xem [[am-giai-cromatic]].

## Âm giai tăng
Sáu nốt xen kẽ **quãng 3 thứ – nửa cung**; là hai [[hop-am-ba-tang|hợp âm ba tăng]] lồng vào nhau (C – E – G♯ và E♭ – G – B):
::staff treble C4 Eb4 E4 G4 Ab4 B4 | Âm giai tăng trên C: C – E♭ (D♯) – E – G – A♭ (G♯) – B
::pc-clock 0 3 4 7 8 11 | Đối xứng: chỉ có 4 phiên bản (C và E♭ cho cùng các nốt)
- TJPS: dùng cho **maj7♯5** (C – E – G♯ – B), nhưng cần cẩn thận với [[not-tranh-va-quang-nghich|nốt tránh]] (E♭ trên Cmaj7♯5); với hợp âm này, [[dieu-thuc-thu-giai-dieu|Lydian tăng]] phổ biến hơn.
- Người dùng nổi tiếng: John Coltrane (solo "One Down, One Up"), Oliver Nelson, Michael Brecker. (Wikipedia gắn Nelson với "Stolen Moments", có nguồn khác cho là đoạn [[hinh-thuc-ca-khuc-32|bridge]] của "Hoe-Down" — chưa thống nhất.)

## Vì sao âm giai đối xứng "nghe jazz"?
Chúng không có một [[bac-am-giai|chủ âm]] duy nhất nên tạo cảm giác lơ lửng, căng — hợp với hợp âm át biến hoá và với lối [[choi-ngoai-jazz|chơi "ngoài"]]. Trong âm nhạc cổ điển, chúng xuất hiện ở [[claude-debussy|Debussy]], [[nikolai-rimsky-korsakov|Rimsky-Korsakov]], [[igor-stravinsky|Stravinsky]] ([[an-tuong]], [[hoa-am-the-ky-20]]).
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
      ['Wikipedia — Altered scale', 'https://en.wikipedia.org/wiki/Altered_scale'],
      ['Wikipedia — Altered chord', 'https://en.wikipedia.org/wiki/Altered_chord'],
      ['Open Music Theory 2e — Substitutions (V7♭9 as mixture)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Wikipedia — Acoustic scale (Lydian dominant)', 'https://en.wikipedia.org/wiki/Acoustic_scale'],
      ['PianoGroove — Improvising with the altered mode', 'https://pianogroove.com/jazz-piano-lessons/altered-scale-improv/'],
    ],
    body: `
[[hop-am-bay|Hợp âm 7 át]] (V7) là [[hop-am-ba|hợp âm]] **căng nhất** và **linh hoạt nhất** trong jazz: ngoài gốc – 3 – 5 – 7 nó có thể mang nhiều [[hop-am-mo-rong|nốt căng]].

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
| G7♭9 (13) | **Bát cung nửa – cung** | [[am-giai-bat-cung]] | G A♭ B♭ B C♯ D E F |
| G7alt | **Âm giai biến đổi** (altered, super Locrian) | Bậc 7 của thứ giai điệu A♭ | G A♭ B♭ B C♯ E♭ F |
| G7♭9♭13 | Phrygian trưởng (Mixolydian ♭9 ♭13) | Bậc 5 thứ hoà âm C | G A♭ B C D E♭ F |

::keyboard G4 Ab4 Bb4 B4 C#5 Eb5 F5 | Âm giai biến đổi trên G: giữ 3 và 7 (B, F); 9, 5, 13 đều biến hoá

Mẹo nhớ: âm giai biến đổi của G = âm giai **thứ giai điệu A♭** (cao hơn gốc nửa cung). Nó cũng có cùng các nốt với **Lydian át của D♭** — vì vậy G7alt và [[thay-the-tritone|D♭7]] dùng chung một bảng nốt.

## Ký hiệu
"G7alt" nghĩa là: chơi gốc, 3, 7 và **bất kỳ** tổ hợp nốt biến hoá nào (♭9, ♯9, ♯11/♭5, ♭13/♯5) — người chơi tự chọn. Cách xếp thực tế: [[xep-hop-am]], [[hop-am-chong|hợp âm ba cấu trúc trên]].

Âm giai nguồn: [[dieu-thuc-thu-giai-dieu]]; thế bấm cho hợp âm át biến hoá: [[upper-structure]].
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
G7 = G – **B** – D – **F**. D♭7 = D♭ – **F** – A♭ – **C♭ (= B)**. Cả hai cùng chứa [[thuan-nghich|tritone]] B – F, chỉ đổi vai trò bậc 3 và bậc 7 (xem [[trung-am]]).

::keyboard G3 B3 D4 F4 | G7
::keyboard Db4 F4 Ab4 B4 | D♭7 — chung cặp B, F với G7

## Hiệu quả
[[ii-v-i|ii – V – I]]: Dm7 – G7 – Cmaj7 → ii – ♭II7 – I: **Dm7 – D♭7 – Cmaj7**. Bè trầm đi xuống liền [[cung-nua-cung|nửa cung]] D – D♭ – C, rất mượt.

## Liên hệ
- D♭7 có cấu trúc trùng âm với [[hop-am-sau-tang|hợp âm 6 Đức]] của Đô — hai truyền thống cổ điển và jazz gặp nhau.
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
      ['Piano With Jonny — Rootless voicings', 'https://pianowithjonny.com/piano-lessons/rootless-voicings/'],
      ['Wikipedia — Voicing (music)', 'https://en.wikipedia.org/wiki/Voicing_(music)'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
      ['Open Music Theory 2e — Jazz', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz'],
    ],
    body: `
Cùng một [[hop-am-ba|hợp âm]], cách xếp nốt khác nhau cho màu sắc rất khác nhau.

## Xếp hẹp và xếp rộng
- **Xếp hẹp** (close): các nốt nằm trong một [[quang|quãng 8]] — C – E – G – B.
- **Xếp rộng** (open): trải hơn một quãng 8 — C3 – G3 – E4 – B4, vang và thoáng.

## Shell voicing (tay trái)
Chỉ chơi **gốc + 3 + 7** (hoặc gốc + 7 + 3) — đủ để xác định tính chất hợp âm. Dm7: D – F – C; G7: G – F – B; Cmaj7: C – E – B.

## Rootless voicing (xếp không gốc)
Bỏ nốt gốc (để bass chơi), thêm nốt mở rộng. Lối xếp này được phổ biến vào **giữa – cuối thập niên 1950** bởi các nghệ sĩ như **[[bill-evans|Bill Evans]], Red Garland, Wynton Kelly** (một số nguồn kể thêm Ahmad Jamal); các nguồn không thống nhất ai là người khởi xướng.
| Hợp âm | Dạng A (3 – 5 – 7 – 9) | Dạng B (7 – 9 – 3 – 5) |
|---|---|---|
| Dm9 | F – A – C – E | C – E – F – A |
| G13 | B – E – F – A (3 – 13 – 7 – 9) | F – A – B – E (7 – 9 – 3 – 13) |
| Cmaj9 | E – G – B – D | B – D – E – G |

::keyboard F4 A4 C5 E5 | Dm9 dạng A
::keyboard F4 A4 B4 E5 | G13 không gốc — chỉ một nốt (C → B) thay đổi so với hợp âm trước

Nối ii – V – I bằng xen kẽ dạng A và B, mỗi bè chỉ di chuyển tối đa một bậc — chính là [[dan-giong]] tốt.

Lưu ý khi dùng xếp không gốc:
- Giữ hợp âm **quanh nốt [[ban-phim|Đô giữa]]** trở lên: nốt 9 và các quãng hẹp đặt quá thấp sẽ bị đục.
- Cần **bass** (nhạc công bass hoặc tay trái) chơi nốt gốc; nếu chơi một mình mà không có gốc, hợp âm nghe lơ lửng, không rõ.

## Thứ tự học xếp hợp âm
1. **[[not-dan-huong|Nốt dẫn hướng]]** 3 – 7 ([[ii-v-i]]).
2. **Shell**: gốc + 3 + 7.
3. **Không gốc dạng A/B** cho ii – V – I ở 12 giọng.
4. **Quãng 4 và "[[jazz-dieu-thuc|So What]]"** ([[hoa-am-quang-bon]]).
5. **Hợp âm ba cấu trúc trên** cho hợp âm át biến hoá ([[hop-am-chong]], [[hop-am-at-bien-hoa]]).
6. **Drop 2**, xếp **khối** (block chords) cho [[giai-dieu|giai điệu]].

## Drop 2
Lấy hợp âm xếp hẹp, hạ **nốt cao thứ hai** xuống một quãng 8: C – E – G – B → G – C – E – B. Rất phổ biến trong guitar và piano big band.

[[am-giai|Âm giai]] chọn nốt mở rộng: [[he-thong-hop-am-am-giai]]. Xếp theo quãng 4: [[hoa-am-quang-bon]].

Đọc tiếp: [[the-bam-bac-thay-jazz]], [[hop-am-khoi]] (drop 2 bắt nguồn từ four-way close), [[upper-structure]], [[dem-jazz]].

Thêm: [[the-bam-ba-not]], [[the-bam-mo]], [[quy-tac-xep-hop-am-jazz]], [[chon-the-bam-jazz]].
`,
  },  {
    slug: 'upper-structure',
    title: 'Upper structure: hợp âm ba cấu trúc trên',
    category: 'jazz',
    aliases: ['upper structure', 'upper structure triad', 'UST', 'hợp âm cấu trúc trên', 'hợp âm ba cấu trúc trên', 'hợp âm ba trên tritone'],
    summary: 'Upper structure là một hợp âm ba trưởng đặt trên tritone (nốt 3 và 7) của một hợp âm 7 át: tay trái giữ tritone, tay phải chọn hợp âm ba để tạo ra các nốt căng 9, ♯11, 13 hay ♭9, ♯9, ♭13 — cách nhanh nhất để có những hợp âm át "đầy màu" trên piano.',
    wiki: 'Upper_structure',
    refs: [
      ['The Jazz Piano Site — Upper Structures', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/upper-structures/'],
      ['Wikipedia — Upper structure', 'https://en.wikipedia.org/wiki/Upper_structure'],
      ['John Baez — Upper structures (2023)', 'https://johncarlosbaez.wordpress.com/2023/02/16/upper-structures/'],
      ['Piano With Jonny — Upper structure triads', 'https://pianowithjonny.com/piano-lessons/upper-structure-triads-the-ultimate-piano-chord-hack/'],
    ],
    body: `
## Ý tưởng
Theo The Jazz Piano Site (TJPS), upper structure "đơn giản là **một hợp âm ba đặt trên một tritone**". Với một [[hop-am-bay|hợp âm 7 át]] như **C7**:
- **Tay trái** giữ **nốt 3 và nốt 7** (E – B♭) — hai [[ii-v-i|nốt dẫn hướng]] xác định tính chất át; chúng tạo thành một [[quang|tritone]]. Có thể thêm nốt gốc C ở bè trầm cho rõ.
- **Tay phải** chơi một **[[hop-am-ba|hợp âm ba]] trưởng** trên một bậc nào đó của C — các nốt của hợp âm ba này chính là các [[hop-am-mo-rong|nốt căng]].
Vì tritone E – B♭ cũng là nốt 7 – 3 của **G♭7**, cùng một thế bấm dùng được cho [[thay-the-tritone|hợp âm thay thế tritone]].

## Bảng upper structure trên C7
| Hợp âm ba (tay phải) | Các nốt so với C | Kết quả | Tên theo TJPS |
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
`,
  },  {
    slug: 'the-bam-ba-not',
    title: 'Thế bấm 3 nốt',
    category: 'jazz',
    aliases: ['three note voicing', 'three-note voicings', 'thế bấm 3 nốt', 'thế bấm ba nốt', 'gốc + 3 + 7'],
    summary: 'Thế bấm jazz đơn giản nhất cho hai tay: tay trái chơi nốt gốc, tay phải chơi nốt 3 và 7 (nốt dẫn hướng). Thêm một nốt ở tay phải (giai điệu, nốt 5 hoặc nốt căng) là có thế bấm 4 nốt.',
    refs: [
      ['The Jazz Piano Site — Three Note Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/three-note-voicings/'],
      ['The Jazz Piano Site — Shell Chords', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/shell-chords/'],
    ],
    body: `
## Cấu tạo (theo TJPS)
- **Tay trái**: nốt **gốc** — giúp tiến trình nghe rõ ràng.
- **Tay phải**: **nốt 3 và nốt 7** — hai [[not-dan-huong|nốt dẫn hướng]] quyết định tính chất hợp âm (shell — xem [[xep-hop-am]]).
::grand C4+F4/D3=Dm7 B3+F4/G2=G7 B3+E4/C3=Cmaj7 | ii – V – I ở Đô trưởng bằng thế bấm 3 nốt: tay phải chỉ đổi một nốt mỗi lần (C → B, F → E)
Tay phải đổi từ "7 – 3" sang "3 – 7" xen kẽ nên di chuyển rất ít — đúng nguyên tắc [[dan-giong|dẫn giọng]] gần.

## Mở rộng thành 4 nốt
TJPS: thêm **một nốt** vào tay phải — **nốt giai điệu**, **nốt 5** hoặc một [[hop-am-mo-rong|nốt căng]] dùng được. Ví dụ của TJPS: **G7♭9** — tay trái G, tay phải F – B – A♭.
::grand C4+E4+F4/D3=Dm9 B3+E4+F4/G2=G13 B3+D4+E4/C3=Cmaj9 | Thêm nốt căng vào tay phải: Dm9 (thêm E = 9), G13 (thêm E = 13), Cmaj9 (thêm D = 9)
So sánh: [[the-bam-bac-thay-jazz|thế bấm Powell]] cũng dùng nốt gốc + nốt 3 hoặc 7, nhưng tất cả ở tay trái để tay phải tự do solo.

## Khi nào dùng?
- Bước đầu tiên khi học chơi jazz từ [[ky-hieu-hop-am|lead sheet]]: tay phải có thể đặt **giai điệu** lên trên cùng (xem [[ket-hop-the-bam]]).
- Khi có bass, bỏ nốt gốc ở tay trái và chuyển sang [[xep-hop-am|thế bấm không gốc]].
Tiếp theo: [[the-bam-mo]].
`,
  },
  {
    slug: 'the-bam-mo',
    title: 'Thế bấm mở (open / spread voicings)',
    category: 'jazz',
    aliases: ['open voicing', 'open voicings', 'spread voicing', 'thế bấm mở', 'xếp rộng jazz', 'thế bấm hai tay'],
    summary: 'Thế bấm mở trải hợp âm trên hơn một quãng 8, mỗi tay hai nốt: tay trái nốt gốc + 7 (hoặc gốc + 10), tay phải nốt 3 + 5 (hoặc 5 + 7). Âm thanh đầy và rộng hơn thế bấm hẹp — hay dùng cho ballad.',
    refs: [
      ['The Jazz Piano Site — Open Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/open-voicings/'],
      ['The Jazz Piano Site — Jazz Piano Comping', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/how-to-comp/'],
    ],
    body: `
## Hai cách chia tay (theo TJPS)
| Cách | Tay trái | Tay phải |
|---|---|---|
| (a) | Gốc + 7 | 3 + 5 |
| (b) | Gốc + 10 (nốt 3 cao một quãng 8) | 5 + 7 |
::grand F4+A4/D3+C4=Dm7_(a) D4+F4/G2+B3=G7_(b) E4+G4/C3+B3=Cmaj7_(a) | ii – V – I bằng thế bấm mở: Dm7 và Cmaj7 theo cách (a), G7 theo cách (b) với quãng 10 G – B ở tay trái
(Bảng ví dụ của TJPS dùng các thế bấm này; hàng G7 trong bảng gốc có chỗ không thống nhất giữa hai cách chia, nên ở đây ghi theo đúng định nghĩa cách (b).)

## Nguyên tắc (theo TJPS)
- **Giai điệu ở trên cùng**.
- **Không nhân đôi** nốt nào, trừ nốt trên cùng.
- **Tránh quãng 5** ở tay trái; dùng **quãng rộng ở bè trầm** để khỏi đục.
Đây cũng chính là các quy tắc chung trong [[quy-tac-xep-hop-am-jazz]]. Khi đệm cho người khác, các thế bấm rộng (quãng 4 trở lên) để lại chỗ cho người solo ([[dem-jazz]]).

## Liên hệ
Thế bấm mở là "anh em" của [[hop-am-khoi|drop 2]] (lấy từ xếp hẹp rồi hạ một nốt) và là bước tiếp theo sau [[the-bam-ba-not]]. Trong nhạc cổ điển, ý tưởng tương tự là [[dan-giong|xếp rộng]] trong hoà âm bốn bè.
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
      ['The Jazz Piano Site — So What Chord', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/so-what-chord/'],
      ['The Jazz Piano Site — Barron Chord', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/barron-chord/'],
      ['The Jazz Piano Site — Quartal Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/quartal-voicings/'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
      ['PianoGroove — Kenny Barron voicing', 'https://www.pianogroove.com/?p=114'],
    ],
    body: `
## Hợp âm So What
- **Năm nốt**: **ba quãng 4 đúng** chồng lên nhau và **một quãng 3 trưởng** ở trên. Trên D (TJPS): tay trái **D – G**, tay phải **C – F – A**.
- Gốc tích: thế bấm của [[bill-evans|Bill Evans]] trong "So What" (*Kind of Blue*, 1959) — xem [[jazz-dieu-thuc]].
- Vì xây bằng quãng 4, nó có màu hơi **treo** (sus): TJPS đọc thế bấm trên D là **Dm11**, **B♭maj13** hoặc **G9sus**.
- TJPS: hợp âm So What chính là **[[hoa-am-quang-bon|hợp âm quãng 4]] ở [[the-dao-hop-am|thể đảo]] 1**; nó có 5 thể đảo, đều dùng được khi cần đổi nốt bass hay nốt giai điệu.
- Dùng được cả trong tiến trình có chức năng ([[vong-quang-nam|vòng quãng 5]], [[ii-v-i]]) lẫn trong tiến trình [[dieu-thuc|điệu thức]] đi từng bậc — cách đệm của jazz điệu thức là **trượt song song** thế bấm này trong một điệu thức.
::grand C4+F4+A4/D3+G3=So_What_(D) | Hợp âm So What trên D: D – G – C – F – A (ba quãng 4 + một quãng 3 trưởng) — Dm11 / G9sus / B♭maj13

## Hợp âm Barron
- **Sáu nốt**, dùng cho hợp âm **m7 khi giai điệu ở nốt 11** (TJPS). Trên Dm11: tay trái **D – A – E** (1 – 5 – 9), tay phải **F – C – G** (♭3 – ♭7 – 11), nốt 11 ở trên cùng.
- Mỗi tay là **một chồng quãng 5**; giữa hai tay là quãng 2 thứ E – F.
- Mang tên pianist **Kenny Barron**.
::grand F4+C5+G5/D3+A3+E4=Dm11_(Barron) | Hợp âm Barron trên Dm11: tay trái D – A – E, tay phải F – C – G
Anh em: [[the-bam-bac-thay-jazz|hợp âm Hancock]] cũng sáu nốt cho m7 nhưng khi giai điệu ở **nốt 9**. Chọn giữa hai hợp âm theo nốt giai điệu — xem [[ket-hop-the-bam]].
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
      ['The Jazz Piano Site — Slash Chords', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/slash-chords/'],
      ['Wikipedia — Slash chord', 'https://en.wikipedia.org/wiki/Slash_chord'],
      ['The Jazz Piano Site — Suspended Chords', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/suspended-chords/'],
    ],
    body: `
Ký hiệu **Hợp âm/Nốt** cho biết hợp âm ở trên và **nốt bass** ở dưới (cách đọc cơ bản: [[ky-hieu-hop-am]]). Khi nốt bass thuộc hợp âm, đó chỉ là một [[the-dao-hop-am|thể đảo]] (C/E). Bài này nói về trường hợp **bass không thuộc hợp âm** — khi đó hợp âm gạch chéo là một **hợp âm mới**.

## Hai ví dụ hay gặp
::grand Bb4+D5+F5/C3=B♭/C D4+F#4+A4/C3=D/C | B♭/C: các nốt C – B♭ – D – F = ♭7, 9, 11 trên C, không có nốt 3 → C9sus4 (C11). D/C: D – F♯ – A trên C = 9, ♯11, 13 → màu Lydian
| Ký hiệu | Nốt (so với bass C) | Đọc là | Âm giai (theo TJPS) |
|---|---|---|---|
| **B♭/C** | ♭7 – 9 – 11 | C9sus4 (hoặc Cm11) | [[dieu-thuc|Mixolydian]] hoặc Dorian trên C |
| **D/C** | 9 – ♯11 – 13 | Cmaj7♯11 / C Lydian (thiếu [[not-dan-huong|nốt 3 và 7]]) | Lydian |
TJPS lưu ý: hợp âm gạch chéo thường **mơ hồ** vì có thể thiếu nốt 3 hoặc 7 — dựa vào các [[hop-am-mo-rong|nốt căng]] có mặt để đoán hợp âm định viết.

## Vì sao dùng?
- **Gọn**: B♭/C dễ đọc hơn C9sus4 với đầy đủ các nốt.
- **Có sẵn thế bấm**: tay phải chơi hợp âm ba quen thuộc, tay trái chơi bass.
- **Có sẵn đường bass**: một chuỗi hợp âm gạch chéo có bass đi liền bậc (ví dụ C – C/B – C/B♭) là một [[line-cliche|line cliché]] ở bè trầm.
- Trong [[jazz-dieu-thuc|jazz điệu thức]], các hợp âm **sus** (như B♭/C) rất phổ biến — xem [[hoa-am-dieu-thuc]].

## So với upper structure
[[upper-structure|Upper structure]] đặt hợp âm ba trên một **tritone** (nốt 3 và 7) nên tính chất át rõ ràng; hợp âm gạch chéo chỉ có **một nốt bass**, nên mơ hồ và "mở" hơn.
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
      ['The Jazz Piano Site — Four Way Close, Locked Hands and Drop Two Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/four-way-close/'],
      ['Wikipedia — Locked hands style', 'https://en.wikipedia.org/wiki/Locked_hands_style'],
      ['Wikipedia — Milt Buckner', 'https://en.wikipedia.org/wiki/Milt_Buckner'],
      ['Columbia University — Jazz Glossary: locked hands', 'https://ccnmtl.columbia.edu/projects/jazzglossary/l/locked_hands.html'],
      ['Piano With Jonny — How to play in the style of Red Garland', 'https://pianowithjonny.com/piano-lessons/how-to-play-in-the-style-of-red-garland/'],
    ],
    body: `
## Ba bước từ hẹp đến rộng
1. **Four-way close** (bốn nốt xếp hẹp): giai điệu ở trên cùng, ba nốt hợp âm xếp sát ngay bên dưới, tất cả trong một [[quang|quãng 8]].
2. **Locked hands** ("hai tay khoá"): thêm vào bốn nốt trên — **tay trái nhân đôi giai điệu thấp hơn một quãng 8**. Hai tay di chuyển song song như bị khoá vào nhau.
3. **Drop 2**: từ bốn nốt xếp hẹp, **hạ nốt thứ hai từ trên xuống một quãng 8** (xuống tay trái) — âm thanh rộng và trong hơn (xem [[xep-hop-am]]).

::grand C4+E4+G4+A4/=4_nốt_hẹp C4+E4+G4+A4/A3=locked_hands C4+E4+A4/G3=drop_2 | Giai điệu A trên hợp âm C6: xếp hẹp C – E – G – A; locked hands thêm A thấp ở tay trái; drop 2 hạ G (nốt thứ hai từ trên) xuống một quãng 8

## Dùng khi nào?
- TJPS: hợp với **giai điệu đi liền bậc**, mỗi nốt giai điệu được hoà âm thành một hợp âm — nghe như cả một **dàn kèn** (section) chơi cùng nhau.
- Nốt giai điệu không thuộc hợp âm thường được hoà âm bằng một hợp âm lướt (thường là [[hop-am-bay-giam|hợp âm 7 giảm]]) — xem [[hop-am-luot-jazz]].
- Drop 2 là dạng **phổ biến nhất** trong các dạng "drop" (cũng có drop 3).

## Lịch sử
- Theo Wikipedia, **George Shearing** làm locked hands nổi tiếng; chính ông nói đã nghe từ **Milt Buckner** (pianist của dàn nhạc Lionel Hampton), người thường được xem là cha đẻ lối chơi này. Buckner sau này có các album *Locked Hands* (1968), *Block Chords Parade* (1974).
- **Red Garland** dùng hợp âm khối theo cách riêng: theo Piano With Jonny, hợp âm tay trái của ông **giữ nguyên** đến khi đổi hợp âm, thường không có nốt gốc, âm thanh sáng hơn của Shearing.
Xem thêm: [[nghe-si-piano-jazz]], [[dem-jazz]].

Dùng khi solo: [[ngau-hung-hop-am]].

## Locked hands nâng cao (theo TJPS)
- Giữ một khung hoà âm **I – V – I – V** dưới giai điệu; thay V7 bằng **hợp âm 7 giảm cách nốt gốc của V nửa cung** — trong Đô: G7 → **A♭°7** (A♭ – B – D – F), nghe như G7♭9 không gốc (xem [[hop-am-bay-giam]], [[hop-am-luot-jazz]]).
- Có thể **nâng một nốt** của hợp âm 7 giảm lên một cung (vẫn trong cùng [[am-giai-bat-cung|âm giai giảm]]) để có màu át biến hoá: A♭ – B – D – G, A♭ – C♯ – D – F.
- Thế bấm V phải có **[[not-dan-huong|nốt 3 và 7]]**, không có nốt 4 và nốt 7 trưởng ([[not-tranh-va-quang-nghich|nốt tránh]]); hợp âm I có thể là C6, Cmaj9…
- Được phá khuôn I – V – I – V khi giai điệu cần; "miễn là giữ được khung I – V – I – V bên dưới, nó sẽ nghe hay". Ví dụ trong bài của TJPS: "Blue [[thelonious-monk|Monk]]".
::grand G4+A4+C5+E5/E4=C6 Ab4+B4+D5+F5/F4=A♭°7 A4+C5+E5+G5/G4=C6 | Minh hoạ: giai điệu E – F – G, hoà âm I – V – I; V được thay bằng A♭°7; tay trái nhân đôi giai điệu thấp một quãng 8
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
      ['The Jazz Piano Site — Bud Powell Chord Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/powell-voicings/'],
      ['The Jazz Piano Site — Thelonious Monk Chord Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/monk-voicings/'],
      ['The Jazz Piano Site — Herbie Hancock Minor Chord Voicing', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/hancock-chord/'],
      ['Earl MacDonald — Left-hand shells', 'https://www.earlmacdonald.com/jazz-piano-lessons/left-hand-shells/'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
    ],
    body: `
## Bud Powell: shell luôn có nốt gốc
[[bud-powell|Bud Powell]], pianist [[phong-cach-jazz|bebop]] hàng đầu thập niên 1940, dùng tay trái **thưa**: hai – ba nốt, **luôn có nốt gốc**, cộng nốt 3 **hoặc** nốt 7 (hoặc nốt 10 = nốt 3 cao một quãng 8). TJPS nhận xét: vì bè trầm luôn là nốt gốc, tiến trình hợp âm nghe **rõ ràng**, còn hợp âm thưa thì không cản đường tay phải chạy giai điệu bebop.
::staff bass D3+C4=Dm7_(1–7) G2+B3=G7_(1–10) C3+B3=Cmaj7_(1–7) | ii – V – I kiểu Powell: nốt gốc + nốt 7, rồi nốt gốc + nốt 10, xen kẽ để tay trái ít di chuyển
Đây cũng là dạng [[xep-hop-am|shell voicing]] cơ bản nhất cho người mới học jazz.

## Thelonious Monk: quãng 2 thứ ở dưới
[[ngon-bam|Thế bấm]] của [[thelonious-monk|Monk]] (theo TJPS): chỉ dùng **tay trái**, cố ý **nghịch**: một **quãng 2 thứ ở dưới** và một **quãng 3 ở trên**; đôi khi không có cả [[not-dan-huong|nốt dẫn hướng]] — chúng cho "màu" của giọng hơn là từng hợp âm. Trong Đô trưởng:
::staff bass B2+C3+E3=Cmaj7 E3+F3+A3=các_hợp_âm_khác | Hai thế bấm Monk trong Đô trưởng (theo TJPS): B – C – E cho hợp âm chủ, E – F – A cho các hợp âm còn lại
Vì mỗi giọng chỉ có hai thế bấm, chúng có thể nghe lặp lại — chính tính "góc cạnh" đó là phong cách Monk.

## Herbie Hancock: hợp âm thứ 7 với nốt 9 ở giai điệu
Khi giai điệu ở **nốt 9** của một hợp âm m7, TJPS giới thiệu "hợp âm Hancock" sáu nốt. Trên **Dm7**: tay trái **D – A – F** (1 – 5 – ♭3), tay phải **G – C – E** (11 – ♭7 – 9).
::grand G4+C5+E5/D3+A3+F4=Dm11 | Hợp âm Hancock trên Dm7: tay trái D – A – F, tay phải G – C – E (nốt 9 là E ở trên cùng)
Tay phải là hai [[quang|quãng 4]] chồng lên nhau — gần với [[hoa-am-quang-bon|hợp âm quãng 4]] và hợp âm *So What* (E – A – D – G – B trên Em11) mà [[bill-evans|Bill Evans]] chơi trong "So What" (*[[jazz-dieu-thuc|Kind of Blue]]*, 1959).

Liên quan: [[nghe-si-piano-jazz]], [[dem-jazz]], [[hop-am-mo-rong]].

Thêm: [[hop-am-so-what-barron]] (Barron, anh em của Hancock), [[ket-hop-the-bam]].
`,
  },  {
    slug: 'ket-hop-the-bam',
    title: 'Kết hợp các thế bấm',
    category: 'jazz',
    aliases: ['combining chord voicings', 'kết hợp thế bấm', 'chọn thế bấm theo giai điệu', 'thế bấm theo nốt giai điệu'],
    summary: 'Cách TJPS hướng dẫn chọn thế bấm cho cả một bài: đi từng ô, ghi hợp âm và nốt giai điệu đầu tiên, chọn thế bấm đặt nốt giai điệu lên trên cùng (So What, Barron, Hancock, upper structure…), rồi nối các hợp âm với ít chuyển động nhất.',
    refs: [
      ['The Jazz Piano Site — Combining Chord Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/combining-chord-voicings/'],
      ['The Jazz Piano Site — Chord Voicings & When to Use Them', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/chord-voicings-use/'],
    ],
    body: `
## Quy trình (theo TJPS)
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
TJPS minh hoạ Dm11 → G9 chỉ có **một nốt đổi, nửa cung**. Từ thế bấm Barron, hạ C xuống B:
::grand F4+C5+G5/D3+A3+E4=Dm11 F4+B4+G5/D3+A3+E4=G9/D | Minh hoạ: từ hợp âm Barron trên Dm11, chỉ đổi C → B là được G9 (trên bass D) — năm nốt kia giữ nguyên
(Đây là cách dựng lại theo mô tả của TJPS; thế bấm chính xác trong bài gốc có thể khác.)
Liên quan: [[quy-tac-xep-hop-am-jazz]], [[chon-the-bam-jazz]].
`,
  },
  {
    slug: 'quy-tac-xep-hop-am-jazz',
    title: 'Quy tắc xếp hợp âm jazz',
    category: 'jazz',
    aliases: ['chord voicing rules', 'quy tắc xếp hợp âm', 'quy tắc voicing', 'luật xếp hợp âm jazz', 'unavailable tension'],
    summary: 'Các quy tắc chung TJPS đưa ra để tự xếp một thế bấm: luôn có nốt 3 và 7; các quãng nhỏ hơn quãng 5 trừ quãng dưới cùng; quãng rộng ở dưới để khỏi đục; quãng nghịch ở giữa; không nhân đôi trừ nốt trên cùng; không tạo quãng 9 thứ với nốt 3 hoặc 7.',
    refs: [
      ['The Jazz Piano Site — Chord Voicing Rules', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/chord-voicing-rules/'],
      ['The Jazz Piano Site — Available Tensions', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/available-tensions/'],
      ['The Jazz Piano Site — Open Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/open-voicings/'],
    ],
    body: `
## Các quy tắc (theo TJPS)
1. **Luôn có [[not-dan-huong|nốt 3 và 7]]**; nốt gốc và nốt 5 tuỳ chọn; có thể thêm [[hop-am-mo-rong|nốt căng]] 9, 11, 13.
2. **Mọi quãng nhỏ hơn quãng 5 đúng**, **trừ** quãng giữa hai nốt thấp nhất — để các nốt nghe như **một hợp âm**.
3. **Quãng rộng ở dưới** để tránh đục.
4. **[[thuan-nghich|Quãng nghịch]] đặt ở giữa** thế bấm.
5. **Đừng dùng quá nhiều quãng 3** — nghe nhạt.
6. **Không nhân đôi** nốt nào, trừ nốt trên cùng (giai điệu).
7. Trên **hợp âm át**, được phép tạo quãng **9 thứ** với nốt gốc hoặc nốt 5, **không** được với nốt 3 hoặc 7. Một nốt tạo quãng 9 thứ với nốt hợp âm gọi là **nốt căng không dùng được**.
Thêm từ các bài khác: **giai điệu ở trên cùng**; nối hợp âm với **ít chuyển động nhất**; bè trên cùng đi chủ yếu **liền bậc** khi đệm.

## Minh hoạ
::grand B4/C3+E3+G3=đục E4+G4+B4/C3+B3=trong | Cmaj7: quãng 3 dày đặc ở vùng trầm nghe đục (trái); quãng 7 rộng ở dưới, các quãng hẹp ở trên nghe trong (phải) — quy tắc 2 và 3
::grand B3+F4+C5/G2=sai B3+F4+Ab4/G2=đúng | G7: C5 tạo quãng 9 thứ với nốt 3 (B3) — tránh (trái); A♭ tạo quãng 9 thứ với nốt gốc G — được phép trên hợp âm át (phải, G7♭9) — quy tắc 7
Các quy tắc này là phiên bản "trên phím đàn" của [[luat-hoa-am-bon-be|luật hoà âm bốn bè]] cổ điển (âm vực, khoảng cách, nhân đôi) và của [[chuoi-boi-am|chuỗi bồi âm]] (quãng rộng ở dưới, hẹp ở trên).
Liên quan: [[xep-hop-am]], [[ket-hop-the-bam]], [[the-bam-mo]].
`,
  },
  {
    slug: 'chon-the-bam-jazz',
    title: 'Chọn thế bấm theo phong cách',
    category: 'jazz',
    aliases: ['when to use voicings', 'chord voicings when to use', 'chọn thế bấm', 'thế bấm theo phong cách', 'secundal voicing'],
    summary: 'Thế bấm nào cũng dùng được lúc nào cũng được, nhưng mỗi phong cách có thói quen riêng: shell cho bebop, hợp âm khối cho jazz sớm và stride, không gốc cho bossa nova và ballad, quãng 4 cho blues và jazz điệu thức, âm cụm cho ballad, boogie và free jazz (bảng của TJPS).',
    refs: [
      ['The Jazz Piano Site — Chord Voicings & When to Use Them', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/chord-voicings-use/'],
      ['The Jazz Piano Site — Monk Voicings', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/monk-voicings/'],
      ['The Jazz Piano Site — Four Way Close, Locked Hands and Drop Two', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/four-way-close/'],
    ],
    body: `
TJPS mở đầu bằng một tiền đề: **thế bấm nào cũng có thể dùng bất cứ lúc nào**; chỉ là mỗi phong cách **ưa** một số thế bấm.

## Bảng của TJPS
| Thế bấm | Phong cách hay dùng | Bài |
|---|---|---|
| Shell / Powell | [[phong-cach-jazz|Bebop]], ballad | [[the-bam-bac-thay-jazz]], [[xep-hop-am]] |
| Hợp âm khối | Jazz sớm, stride, gảy đều | [[stride-piano]], [[hop-am-khoi]] |
| Không gốc | Bossa nova, ballad | [[xep-hop-am]] |
| Mở (spread) | Ballad | [[the-bam-mo]] |
| Quãng 4 | [[blues-12-nhip|Blues]], [[jazz-dieu-thuc|jazz điệu thức]] | [[hoa-am-quang-bon]], [[hop-am-so-what-barron]] |
| Quãng 2 (âm cụm) | Ballad, boogie, [[post-bop-free-jazz|free jazz]] | [[am-cum]] |

## Gợi ý thêm từ các bài TJPS
- **Shell / Powell**: đơn giản, thưa — hợp khi tay phải solo bebop nhanh.
- **Không gốc**: lối của [[bill-evans|Bill Evans]], nối [[ii-v-i|ii – V – I]] rất mượt.
- **Quãng 4 sáu nốt** cho hợp âm át: hợp với blues.
- **Drop 2 và locked hands**: cho giai điệu đi liền bậc ("Blue Bossa", "Fly Me to the Moon").
- **Hancock** (m7, giai điệu ở nốt 9) và **Barron** (giai điệu ở nốt 11) — xem [[ket-hop-the-bam]].
- **[[thelonious-monk|Monk]]**: hợp với những bài đổi giọng liên tục.
- Khi **đệm**: chơi ở âm vực khác người solo ([[dem-jazz]]).
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
      ['The Jazz Piano Site — Jazz Piano Comping: How to Comp', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/how-to-comp/'],
      ['Wikipedia — Comping (jazz)', 'https://en.wikipedia.org/wiki/Comping_(jazz)'],
      ['Wikipedia — Charleston (1923 song)', 'https://en.wikipedia.org/wiki/Charleston_(1923_song)'],
      ['Piano With Jonny — Red Garland style', 'https://pianowithjonny.com/piano-lessons/how-to-play-in-the-style-of-red-garland/'],
      ['The Jazz Piano Site — Jazz Piano Minimum Requirements', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/jazz-piano-minimum-requirements/'],
    ],
    body: `
**Comping** (từ *accompanying* hoặc *complementing*) là việc **đệm hợp âm và tiết tấu** cho người đang solo. Piano, guitar, bass và trống đều "comp". Khác với [[dem-hat-piano|đệm hát]] có kiểu đệm cố định, comping là một **cuộc đối thoại**: người đệm nghe người solo và phản ứng.

## Nguyên tắc (theo TJPS)
- Hỗ trợ người solo về hoà âm và tiết tấu, **không chen lấn**: khi solo dày đặc, đệm thưa lại; **im lặng cũng là đệm**.
- Dùng **hợp âm ngắn**, có khoảng nghỉ giữa các hợp âm.
- Chơi ở **âm vực khác** người solo.
- Nối hợp âm với **ít chuyển động nhất** — [[dan-giong|dẫn giọng]] gần, thường bằng [[xep-hop-am|thế bấm không gốc]].
- TJPS gợi ý nghe **Wynton Kelly** như một mẫu mực.

## Phân chia hai tay
| Cách | Tay trái | Tay phải | Khi nào |
|---|---|---|---|
| Đệm cho chính mình | [[bass-di-jazz|Bass đi]] | Hợp âm không gốc | Chơi một mình, không có bass |
| Đệm hai tay | Một nửa [[ngon-bam|thế bấm]] | Nửa còn lại ([[the-bam-mo|thế bấm mở]]) | Có bass, người khác solo |
| Solo | Hợp âm không gốc | Giai điệu, [[ngau-hung-jazz|ngẫu hứng]] | Khi chính mình solo |
Danh sách "kỹ năng tối thiểu" của TJPS: tay trái — bass đi, [[dem-hat-piano|stride]], nốt gốc, hợp âm đệm; tay phải — giai điệu, [[ii-v-i|nốt dẫn hướng]], [[ngau-hung-piano|ngẫu hứng]]; hai tay — thế bấm hai tay, [[hoa-am-quang-bon|hợp âm quãng 4]].

## Hình tiết tấu đệm
::rhythm 4/4 q. e rh // | Charleston: phách 1 và "&" của phách 2 — lấy từ bài "Charleston" (1923) của James P. Johnson, có lẽ là hình đệm nổi tiếng nhất
::rhythm 4/4 rq re e rq re e // | Đệm "đẩy" kiểu Red Garland: hợp âm ngắn ở "&" của phách 2 và "&" của phách 4, thường đã là hợp âm kế tiếp (đảo phách)
Hai hình trên là điểm xuất phát; người đệm giỏi thay đổi liên tục theo người solo (xem [[swing]], [[dao-phach]]).

## Lịch sử ngắn
Theo TJPS, lối đệm "comping" thưa xuất hiện khoảng **thập niên 1940**, khi tay bass đảm nhận đường bass đi và tay trái piano không còn phải "bơm" phách như thời [[dem-hat-piano|stride]] (xem [[nghe-si-piano-jazz]], [[the-bam-bac-thay-jazz]]).

Thêm: [[dem-cho-ca-si]], [[jam-session]], [[stride-piano]].
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
      ['The Jazz Piano Site — Walking Bass Lines', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/walking-bass-lines/'],
      ['Wikipedia — Walking bass', 'https://en.wikipedia.org/wiki/Walking_bass'],
      ['The Jazz Piano Site — Jazz for Beginners: Theory & Practice', 'https://www.thejazzpianosite.com/jazz-piano-lessons/the-basics/jazz-for-beginners-theory-practice/'],
    ],
    body: `
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
- TJPS khuyên tập **tay trái riêng** cho đến khi bass đi thật đều, rồi mới thêm hợp âm hoặc giai điệu ở tay phải (xem [[phoi-hop-hai-tay]]).
- Đổi hướng và đổi kiểu tiếp cận thường xuyên, trộn bước liền bậc với cromatic để đường bass "hát".
- Tập trên [[blues-12-nhip]] và [[ii-v-i]] trước, rồi [[rhythm-changes]].
Liên quan: [[dem-jazz]], [[dem-hat-piano]] ([[stride-piano|stride]], kiểu đệm cũ hơn).
`,
  },  {
    slug: 'stride-piano',
    title: 'Stride piano',
    category: 'jazz',
    aliases: ['stride piano', 'stride', 'Harlem stride', 'reverse stride', 'oom-pah', 'Carolina Shout'],
    summary: 'Stride là lối tay trái của piano jazz Harlem thập niên 1920: nốt bass ở phách 1 và 3, hợp âm ở phách 2 và 4 ("bùm – chát"), tay trái nhảy xa liên tục. James P. Johnson là "cha đẻ" của stride; "Carolina Shout" (thu âm 1921) là một trong những bản solo piano jazz đầu tiên.',
    wiki: 'Stride_(music)',
    refs: [
      ['The Jazz Piano Site — Stride Piano', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/stride-piano/'],
      ['Wikipedia — Stride (music)', 'https://en.wikipedia.org/wiki/Stride_(music)'],
      ['Wikipedia — James P. Johnson', 'https://en.wikipedia.org/wiki/James_P._Johnson'],
      ['Wikipedia — Carolina Shout', 'https://en.wikipedia.org/wiki/Carolina_Shout'],
      ['Wikipedia — Fats Waller', 'https://en.wikipedia.org/wiki/Fats_Waller'],
      ['Wikipedia — Rent party', 'https://en.wikipedia.org/wiki/Rent_party'],
    ],
    body: `
## Cấu tạo
TJPS: tay trái **xen kẽ nốt bass (phách 1 và 3) với hợp âm (phách 2 và 4)** — cảm giác "bùm – chát"; "**đơn giản về khái niệm nhưng khó về kỹ thuật**" (xem [[buoc-nhay-xa]]).
::grand /C3=1 /E3+G3+C4=2 /G2=3 /E3+G3+C4=4 | Tay trái stride trên C: nốt gốc (phách 1), hợp âm (phách 2), nốt 5 thấp (phách 3), hợp âm (phách 4)
::rhythm 2/4 q:bùm q:chát / q:bùm q:chát // | Nhịp "bùm – chát": bass ở phách mạnh, hợp âm ở phách nhẹ
Nốt bass có thể là nốt đơn, [[quang|quãng 8]] hoặc **quãng 10** (rải nhanh). Kiểu đệm cơ bản: [[dem-hat-piano]].

## Biến thể (theo TJPS)
- **Stride ngược**: hợp âm – bass – hợp âm – bass.
- Trộn với [[bass-di-jazz|bass đi]].
- Hai nốt bass hoặc hai hợp âm liền nhau; **đón trước** nốt bass hoặc hợp âm (xem [[dao-phach]]).

## Cho người mới
TJPS: giảm bước nhảy và độ phức tạp của hợp âm — dùng **quãng 10 rải** và [[not-dan-huong|nốt dẫn hướng]] (trên G7: G rồi F + B). Bắt đầu với một bài nhiều ii – V như "Satin Doll".

## Lịch sử
- Stride phát triển từ [[dao-phach|ragtime]] ở **Harlem thập niên 1920**; các nghệ sĩ piano độc tấu được thuê chơi ở những "**rent party**" (tiệc góp tiền thuê nhà).
- **[[james-p-johnson|James P. Johnson]]** (1894–1955) được gọi là "cha đẻ của stride". "**Carolina Shout**" (viết khoảng 1918, thu âm ngày 18/10/1921) là một trong những bản solo piano jazz đầu tiên được ghi âm; [[duke-ellington|Ellington]] học bài này từ cuộn piano.
- **[[fats-waller|Fats Waller]]** học Johnson; "Handful of Keys" (1929) thành bài thi tài trong các cuộc "đấu đàn" cùng "Carolina Shout".
- TJPS liệt kê thêm: Willie "The Lion" Smith, Luckey Roberts, Eubie Blake, Teddy Wilson, [[art-tatum|Art Tatum]] (người dần chuyển sang lối tay trái tự do hơn).
Xem thêm: [[nghe-si-piano-jazz]], [[chon-the-bam-jazz]].
`,
  },
  {
    slug: 'dem-cho-ca-si',
    title: 'Đệm cho ca sĩ trong jazz',
    category: 'jazz',
    aliases: ['comp for a vocalist', 'đệm cho ca sĩ', 'comping vocalist', 'đệm hát jazz'],
    summary: 'Đệm cho ca sĩ khác đệm cho nhạc công: giọng hát không có cao độ cố định nên ca sĩ dựa vào hoà âm để tìm nốt. Theo TJPS: hoà âm đơn giản, đôi khi đặt giai điệu trên cùng, nhịp đều để ca sĩ tự do co giãn, chơi nhỏ hơn và tránh âm vực của ca sĩ, lấp chỗ trống khi ca sĩ nghỉ.',
    refs: [
      ['The Jazz Piano Site — How to Comp for a Vocalist / Singer', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/how-to-comp-for-a-vocalist/'],
      ['The Jazz Piano Site — Jazz Piano Comping', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/how-to-comp/'],
    ],
    body: `
## Vai trò
TJPS: **ca sĩ giữ giai điệu**, người đệm giữ **tiết tấu và hoà âm**. Khác với nhạc cụ có phím, **giọng hát không có cao độ cố định** — ca sĩ dựa vào hoà âm của bạn để tìm nốt.

## Nguyên tắc (theo TJPS)
- **Hoà âm đơn giản**: [[hop-am-bay|hợp âm 7]] xếp chồng quãng 3; tránh những thế bấm dày, mơ hồ như [[hoa-am-quang-bon|quãng 4]] có thể làm ca sĩ lạc giọng.
- **Điểm tựa**: thỉnh thoảng đặt **nốt giai điệu lên trên cùng** thế bấm; giữ [[bass-di-jazz|bass đi]] đều — [[kiem-soat-toc-do|nhịp đều]] phía sau giúp ca sĩ **tự do co giãn** câu hát (xem [[rubato]]).
- **Âm lượng và âm vực**: chơi **nhỏ hơn** ca sĩ, **tránh âm vực** của họ — ví dụ với giọng soprano, bass ở thấp, hợp âm ở giữa.
- **Tương tác**: ca sĩ hát dày thì đệm thưa; ca sĩ nghỉ thì **lấp chỗ trống** bằng một câu ngắn; để lại khoảng lặng.
- **Thoả thuận trước** với ca sĩ về **giọng**, phong cách và nhịp độ — nhiều khi phải [[dich-giong|dịch giọng]] bài cho hợp tầm cữ của họ ([[cao-do|âm vực, tầm cữ]]).

## Thường gặp trong thực tế
TJPS không nói chi tiết về phần [[prelude-ung-tac|dạo đầu]] và kết; cách làm phổ biến (kinh nghiệm chung, không phải quy tắc) là dùng vài ô cuối bài hoặc một [[turnaround-jazz|turnaround]] làm dạo đầu, kết dạo đầu ở hợp âm V7 để ca sĩ dễ bắt nốt đầu tiên.
Liên quan: [[dem-hat-piano]] (đệm hát nói chung), [[dem-jazz]].
`,
  },
  {
    slug: 'jam-session',
    title: 'Jam session',
    category: 'jazz',
    aliases: ['jam session', 'jam', 'buổi jam', 'chơi jam', "Minton's Playhouse", 'cutting session'],
    summary: "Jam session là buổi các nhạc công jazz tụ họp chơi ngẫu hứng các bài chuẩn mà không tập trước. Bài nêu những gì pianist cần chuẩn bị và cách cư xử trên sân khấu (theo TJPS), cùng lịch sử: các jam ở Minton's Playhouse đầu thập niên 1940 là nơi bebop ra đời.",
    wiki: 'Jam_session',
    refs: [
      ['The Jazz Piano Site — Preparing for a Jam Session', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/preparing-for-a-jam-session/'],
      ["Wikipedia — Minton's Playhouse", 'https://en.wikipedia.org/wiki/Minton%27s_Playhouse'],
      ["Wikipedia — Midnight at Minton's", 'https://en.wikipedia.org/wiki/Midnight_at_Minton%27s'],
      ['Wikipedia — Jazz education', 'https://en.wikipedia.org/wiki/Jazz_education'],
      ['Elon University Jazz Studies — jam session etiquette', 'https://www.elon.edu/u/academics/arts-and-sciences/jazz-studies/?p=1719'],
    ],
    body: `
## Pianist cần chuẩn bị gì? (theo TJPS)
- Xin **danh sách bài** của buổi jam trước và học các bài đó.
- Mọi buổi jam đều nên có ít nhất một bài **[[rhythm-changes]]** — tập nó ở mọi giọng.
- Vai trò: bạn **đệm hợp âm** ([[dem-jazz]]) và sẽ được **solo**; nếu không có bass, bạn chơi cả [[bass-di-jazz|đường bass]].

## Trên sân khấu
- **Âm vực**: tránh vùng trầm khi đã có contrabass; tránh âm vực của ca sĩ ([[dem-cho-ca-si]]).
- **Lắng nghe người solo**: họ lên cao thì mình xuống thấp, họ nhỏ thì mình nhỏ, đáp lại câu của họ như [[ngau-hung-piano|hỏi – đáp]] (TJPS).
- **Đổi bốn** (trading fours): các người solo lần lượt chơi 4 ô xen với trống, theo thứ tự solo ban đầu, cho đến hết vòng; báo hiệu quay về giai điệu bằng ánh mắt và bằng chính cách chơi; không muốn solo thì báo trước (theo hướng dẫn của Elon University).
- Giữ solo **ngắn** trong buổi jam đông người.
Cấu trúc chung của một lượt chơi ([[hinh-thuc-ca-khuc-32|head]] – solo – head): [[ngau-hung-jazz]].

## Lịch sử: Minton's Playhouse
- Đầu thập niên 1940, câu lạc bộ **Minton's Playhouse** (Harlem) do Teddy Hill quản lý tổ chức jam thường xuyên. Ở đây [[thelonious-monk|Monk]], [[bud-powell|Bud Powell]], tay trống Kenny Clarke, Charlie Christian, Charlie Parker, Dizzy Gillespie đã phát triển **[[phong-cach-jazz|bebop]]**.
- Các buổi jam nổi tiếng với **nhịp độ nhanh, giọng lạ, hoà âm bất ngờ** để "loại" người chơi yếu (*cutting session*).
- Album trực tiếp *Midnight at Minton's* (Jerry Newman thu năm 1941) có một trong những bản thu sớm nhất của Monk.
- Trong nửa đầu [[thoi-ky-the-ky-20|thế kỷ 20]], jam session là **hình thức học jazz chính** — trước khi có trường lớp (xem nghiên cứu của Berliner trong [[ngau-hung-jazz]]).
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
      ['The Jazz Piano Site — Quartal harmony', 'https://www.thejazzpianosite.com/?p=464'],
    ],
    body: `
[[he-thong-hoa-am-co-dien|Hoà âm truyền thống]] chồng [[quang|quãng 3]] ([[hop-am-ba]]). Hoà âm quãng 4 chồng **quãng 4 đúng**: D – G – C – F.

::keyboard D4 G4 C5 F5 | Hợp âm quãng 4 trên D

## Đặc điểm
- Không rõ trưởng hay thứ; không có lực kéo [[chuc-nang-hoa-am|chức năng]] mạnh → hợp với nhạc **điệu thức** ([[dieu-thuc]]).
- Có thể **dịch song song** theo các nốt của [[am-giai|âm giai]] mà vẫn hợp — trong D Dorian: D–G–C, E–A–D, G–C–F, A–D–G…

## Hợp âm "So What"
Ba quãng 4 + một quãng 3 trưởng ở trên: **E – A – D – G – B**. Đặt tên theo bài "So What" (Miles Davis, album *Kind of Blue*, 1959): [[bill-evans|Bill Evans]] dùng nó trong hình đáp "amen" sau mỗi câu [[giai-dieu|giai điệu]]. Còn gọi là "Bill Evans voicing" hoặc "Dorian voicing". Vì là sự pha trộn giữa quãng 4 và quãng 3, hợp âm này **đa nghĩa**: cùng một khối có thể đặt lên nhiều hợp âm khác nhau, và rất hợp để [[hoa-am-song-song|dịch song song]].

::keyboard E4 A4 D5 G5 B5 | Hợp âm So What (Em11 không gốc)

## Ứng dụng
- Jazz modal: **[[mccoy-tyner|McCoy Tyner]]** nổi tiếng với các khối quãng 4 thuần (ví dụ phần đệm của ông trong "Impressions" của John Coltrane); [[herbie-hancock|Herbie Hancock]].
- Nhạc cổ điển [[thoi-ky-the-ky-20|thế kỷ 20]]: [[alexander-scriabin|Scriabin]] (hợp âm "huyền bí"), [[paul-hindemith|Hindemith]], [[bela-bartok|Bartók]] (xem [[cac-thoi-ky]]).
- Đảo một chồng quãng 4 sẽ thành quãng 5 (**hoà âm quãng 5**, xem [[quang-dao]]).

Liên quan: [[xep-hop-am]], [[an-tuong]].

Bối cảnh: [[jazz-dieu-thuc]], [[the-bam-bac-thay-jazz]].

Hợp âm So What chi tiết: [[hop-am-so-what-barron]].
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
      ['Open Music Theory 2e — Substitutions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Open Music Theory 2e — Jazz (applied ii chords, CT°7)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz'],
      ['Wikipedia — Chord substitution', 'https://en.wikipedia.org/wiki/Chord_substitution'],
      ['Wikipedia — Backdoor progression', 'https://en.wikipedia.org/wiki/Backdoor_progression'],
      ['Anton Schwartz — The backdoor ii-V progression', 'https://antonjazz.com/2012/01/backdoor-ii-v-progression/'],
      ['The Jazz Piano Site — II-V Substitution', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/ii-v-substitution/'],
      ['The Jazz Piano Site — Chord Substitution', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/chord-substitution/'],
    ],
    body: `
**Thay thế** là đổi **một** [[hop-am-ba|hợp âm]]; [[tai-hoa-am|tái hoà âm]] là áp nhiều phép thay thế lên **cả** một tiến trình. Trong jazz, người chơi thay thế ngay khi biểu diễn — nên cần hiểu **vì sao** mỗi phép thay hoạt động.

## 1. Thay cùng chức năng (diatonic)
Hợp âm cùng [[chuc-nang-hoa-am|nhóm chức năng]] chung nhiều nốt nên thay được cho nhau:
- **Chủ**: Imaj7 ↔ iii7 ↔ vi7 (Cmaj7, Em7, Am7).
- **Tiền át**: IV ↔ ii7 (Fmaj7, Dm7).
- **Át**: V7 ↔ vii ø7 (G7, Bø7).

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
TJPS: một [[ii-v-i|ii – V]] tạo cảm giác **kết thúc mạnh dù dẫn về hợp âm nào**, miễn là [[dan-giong|dẫn giọng]] mượt — ii – V – vi hay ii – V – IV vẫn "chắc". Vì vậy có thể chèn ii – V trước gần như mọi hợp âm đích. Bảng thay thế của TJPS cho G7: **Dm7 – G7**, dài hơn là **Em7 – A7 | Dm7 – G7** (ii – V của ii – V).
Bốn cách đi vào Cmaj7:
| Tên | Trong Đô trưởng | Giải thích |
|---|---|---|
| ii – V thường | Dm7 – G7 → Cmaj7 | |
| "Cửa trước" (frontdoor — tên TJPS dùng) | Bm7♭5 – E7 → Cmaj7 | ii – V của **Am7**, nhưng giải quyết về Cmaj7 (Am7 là hợp âm thay cùng chức năng của Cmaj7) |
| Cửa sau (backdoor) | Fm7 – B♭7 → Cmaj7 | TJPS: **thay thế tritone của cửa trước** (E7 → B♭7) — xem mục 5 |
| ii – V tritone | A♭m7 – D♭7 → Cmaj7 | Cả cặp ii – V dời đi một tritone (cách ghi phổ biến, không thấy TJPS viết riêng) |
::staff treble D4+F4+A4+C5=Dm7 D4+F4+G4+B4=G7 E4+G4+B4+C5=Cmaj7 / D4+F4+A4+B4=Bm7♭5 D4+E4+G#4+B4=E7 E4+G4+B4+C5=Cmaj7 / C4+F4+Ab4+Eb5=Fm7 D4+F4+Ab4+Bb4=B♭7 E4+G4+B4+C5=Cmaj7 / Cb4+Eb4+Gb4+Ab4=A♭m7 Cb4+Db4+F4+Ab4=D♭7 C4+E4+G4+B4=Cmaj7 | Bốn đường ii – V về Cmaj7 (thế bấm hẹp, chỉ để so sánh nốt)
TJPS tóm lại: các tiến trình này đều là **một ii – V hoặc thay thế tritone của một ii – V**, dẫn về I hoặc về một hợp âm thay cùng chức năng của I. Chuỗi ii – V nối nhau: [[phan-tich-tien-trinh-jazz]].

## Điều kiện để thay thế
Nốt [[giai-dieu|giai điệu]] ở chỗ quan trọng phải là **nốt hợp âm** hoặc **[[hop-am-mo-rong|nốt căng]] hợp lý** của hợp âm mới. Nếu va chạm nửa cung với nốt 3 hoặc 7 của hợp âm mới, hãy chọn phép thay khác.

Thêm: [[hop-am-luot-jazz]], [[constant-structures]].
`,
  },  {
    slug: 'hop-am-luot-jazz',
    title: 'Hợp âm lướt và hợp âm tiếp cận trong jazz',
    category: 'jazz',
    aliases: ['passing chord', 'approach chord', 'hợp âm lướt jazz', 'hợp âm tiếp cận', 'hợp âm 7 giảm lướt', 'diminished passing chord'],
    summary: 'Hợp âm lướt là hợp âm ngắn chen giữa hai hợp âm chính, tự nó không quan trọng về hoà âm; hợp âm tiếp cận là hợp âm lướt cách hợp âm đích nửa cung hoặc một cung. Bài nêu các dạng thường gặp: hợp âm 7 giảm lướt, hợp âm tiếp cận cromatic và át phụ.',
    refs: [
      ['The Jazz Piano Site — Passing Chords & Approach Chords', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/passing-chords/'],
      ['The Jazz Piano Site — Gospel-Jazz Piano Techniques and Reharmonization', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/gospel-jazz-piano-techniques-and-reharmonization/'],
      ['The Jazz Piano Site — Diminished Scale & Double Diminished Chord', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/diminished-scale/'],
    ],
    body: `
## Định nghĩa (theo TJPS)
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
Khi hoà âm từng nốt giai điệu bằng [[hop-am-khoi|hợp âm khối]], các nốt không thuộc hợp âm thường được hoà âm bằng hợp âm 7 giảm lướt. Trong gospel – jazz, TJPS minh hoạ các hợp âm giảm lướt như C7 → F°7 → Fmaj7 để **trì hoãn** sự giải quyết.
Liên quan: [[tai-hoa-am]], [[dem-jazz]].
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
      ['Open Music Theory 2e — Substitutions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Wikipedia — Reharmonization', 'https://en.wikipedia.org/wiki/Reharmonization'],
      ['Learn Jazz Standards — 10 jazz reharmonization techniques', 'https://www.learnjazzstandards.com/blog/jazz-reharmonization-techniques/'],
      ['The Jazz Piano Site — Jazz reharmonization', 'https://www.thejazzpianosite.com/?p=239'],
      ['The Jazz Piano Site — How to turn any Song into a Jazz Song', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/turn-song-jazz-song/'],
      ['The Jazz Piano Site — How to Reharmonize a Song', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/how-to-reharmonize-a-song/'],
      ['The Jazz Piano Site — Chord Substitution', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/chord-substitution/'],
    ],
    body: `
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

## Làm một bài hát "jazzy" (TJPS)
TJPS: kết hợp các lớp dưới đây có thể biến **gần như bất kỳ bài nào** — pop, cổ điển, đồng quê — thành một bài nghe "jazz". Xếp từ nhẹ đến mạnh:
1. Thêm [[hop-am-bay|nốt 7]] cho mọi hợp âm.
2. Thêm [[hop-am-mo-rong|nốt mở rộng]] (9, 13).
3. [[hop-am-at-bien-hoa|Hợp âm biến hoá]] (♭9, ♯9, ♭13…).
4. [[hop-am-luot-jazz|Hợp âm lướt và hợp âm tiếp cận]].
5. [[xep-hop-am|Thế bấm jazz]].
6. [[trang-tri-giai-dieu-jazz|Trang trí giai điệu]].
7. **Tái hoà âm** (bảng ở trên, quy trình ở dưới).
8. Cách tiếp cận **[[dieu-thuc|điệu thức]]**: chỉ một hai hợp âm, thường là một vamp — xem [[jazz-dieu-thuc]].
9. **Đổi nhịp** (5/4, 7/8…) — xem [[doi-nhip-the-loai-jazz]].
Công thức đơn giản nhất của TJPS cho piano: tay trái [[bass-di-jazz|bass đi]], tay phải [[not-dan-huong|nốt dẫn hướng]] (3 và 7) cộng giai điệu — rồi [[ngau-hung-piano|ngẫu hứng]].

## Quy trình tái hoà âm (TJPS)
1. Tìm **nốt giai điệu chính** của mỗi ô — nốt duy nhất phải giữ.
2. Đổi hợp âm (và/hoặc chỉnh giai điệu) sao cho nốt đó là **hoà âm chấp nhận được**: một nốt dẫn hướng (3 hoặc 7) hoặc một [[hop-am-mo-rong|nốt căng]] dùng được. Mọi nốt khác của hợp âm — kể cả gốc, 3, 7 — đều có thể đổi, **trừ** nốt giai điệu chính.
3. Nối các hợp âm theo **nửa cung**, theo **bậc trong giọng** hoặc theo **[[vong-quang-nam|vòng quãng 5]]**.
4. Điều khiển **căng – giãn**: nốt căng cao và biến hoá (♭13) tạo căng; nốt dẫn hướng và nốt căng thấp (9) tạo giãn.
Bảng thay thế của TJPS chia các phép thay thành nhóm: cromatic (quãng cố định), [[vong-coltrane|Coltrane]], [[thay-the-hop-am|diatonic]], dựa trên giai điệu, và dựa trên bè trầm ([[bass-ngan|bass ngân]], bass đi liền bậc). Các phép thay bằng ii – V: [[thay-the-hop-am]]. Biến thể gospel: [[tai-hoa-am-gospel]]; tái hoà âm sang [[the-loai|thể loại]] khác: [[doi-nhip-the-loai-jazz]].

## Gợi ý luyện tập
1. Chọn một bài quen (ví dụ "Twinkle Twinkle Little Star") với vòng gốc I – IV – V.
2. Áp từng kỹ thuật một, chơi lại và nghe sự khác biệt.
3. Kết hợp với [[xep-hop-am]] để các hợp âm mới nối mượt.

Liên quan: [[vong-hop-am]], [[he-thong-hop-am-am-giai]].

Công cụ khác: [[line-cliche]], [[turnaround-jazz]], [[constant-structures]].
`,
  },
  {
    slug: 'doi-nhip-the-loai-jazz',
    title: 'Đổi nhịp, đổi thể loại và chơi tự do thời gian',
    category: 'jazz',
    aliases: ['changing the meter', 'jazz waltz', 'changing genre', 'đổi thể loại', 'reharmonization into different genres', 'free time', 'chơi tự do thời gian', 'intro rubato', 'dạo đầu jazz'],
    summary: 'Ba cách "biến hình" một bài chuẩn ngoài việc đổi hợp âm: đổi số chỉ nhịp (Fly Me to the Moon vốn là điệu valse; Brubeck với 5/4, 7/4, 9/8), đổi thể loại chỉ bằng cách chọn hợp âm (pop, jazz điệu tính, điệu thức, phi điệu tính, blues), và chơi tự do thời gian — cách làm dạo đầu phổ biến của pianist solo.',
    refs: [
      ['The Jazz Piano Site — Changing the Meter', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/changing-the-meter/'],
      ['The Jazz Piano Site — Reharmonization into Different Genres', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/reharmonization-into-different-genres/'],
      ['The Jazz Piano Site — Playing in Free Time & Creating Intros', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/playing-in-free-time/'],
      ['Wikipedia — Fly Me to the Moon', 'https://en.wikipedia.org/wiki/Fly_Me_to_the_Moon'],
      ['Wikipedia — Time Out (Dave Brubeck album)', 'https://en.wikipedia.org/wiki/Time_Out_(album)'],
      ['Wikipedia — Unsquare Dance', 'https://en.wikipedia.org/wiki/Unsquare_Dance'],
    ],
    body: `
[[tai-hoa-am|Tái hoà âm]] đổi **hợp âm**; bài này nói về ba cách đổi **những thứ khác** của một bài chuẩn: nhịp, [[the-loai|thể loại]] và cảm giác thời gian.

## 1. Đổi số chỉ nhịp
- TJPS: phần lớn bài jazz ở **4/4** — có lẽ từ thời [[swing|Swing]], khi jazz là nhạc khiêu vũ và 4/4 có phách nhấn 2 – 4 dễ nhảy hơn nhiều so với kiểu 13/8.
- Ví dụ TJPS: **"Fly Me to the Moon"** (Bart Howard, 1954) ban đầu là một bài **valse 3/4** tên "In Other Words"; bản **4/4 swing** nổi tiếng là phối khí của Quincy Jones cho Frank Sinatra (1964).
- TJPS gợi ý thử các bài chuẩn ở **5/4 hoặc 7/8**, và nghe [[dave-brubeck|Dave Brubeck]]: "Take Five" (5/4) và "Blue [[rondo|Rondo]] à la Turk" (9/8) trong *Time Out* (1959), "Unsquare Dance" (7/4, 1961) — xem [[nhip-hon-hop]].
- Ở nhịp lẻ, [[nhip-dieu-hoa-am|nhịp điệu hoà âm]] có thể không đối xứng.
::rhythm 4/4 h q q / w // | Minh hoạ: hai ô 4/4 của một câu giai điệu…
::rhythm 3/4 q q q / h. // | …chuyển sang 3/4 bằng cách rút nốt dài: mỗi ô gốc thành một ô valse (một cách làm, không phải quy tắc)

## 2. Đổi thể loại bằng hợp âm
TJPS lấy 8 ô đầu của một bài pop và hoà âm lại theo nhiều thể loại; ý chính: **chỉ cần chọn hợp âm** đã có thể chuyển bài sang thể loại khác.
| Thể loại | Hợp âm |
|---|---|
| Pop (bản gốc) | Phần lớn [[hop-am-ba|hợp âm ba]] trong giọng, [[giai-dieu|giai điệu]] rơi vào nốt gốc |
| Jazz [[dieu-tinh|điệu tính]] | [[hop-am-bay|Hợp âm 7]], nhiều [[ii-v-i]]; giai điệu là [[not-dan-huong|nốt dẫn hướng]] hoặc [[hop-am-mo-rong|nốt căng]] |
| Jazz điệu thức | Bỏ tiến trình gốc, chỉ dùng **một hai hợp âm** (xem [[jazz-dieu-thuc]]) |
| Jazz [[phi-dieu-tinh|phi điệu tính]] | Một phiên bản phi điệu tính **khá thuận tai** — không phải [[am-cum|âm cụm]] ngẫu nhiên ([[post-bop-free-jazz]]) |
| [[blues-12-nhip|Blues]] | Hợp âm blues **chưa đủ**: nếu giai điệu tránh [[am-giai-blues|nốt blue]] thì bài vẫn không "blues" |
Kết luận của TJPS: thể loại đến từ **cách giai điệu và hoà âm tương tác**. Phần nhịp đệm (bass đi, [[ostinato|bass lặp]] blues, bossa nova) đổi theo — xem [[bass-di-jazz]], [[dieu-dem-pho-bien]], [[dem-jazz]].

## 3. Chơi tự do thời gian
TJPS: người học hay bỏ qua kỹ năng này, nhưng nó rất cần cho **dạo đầu**, và pianist chơi một mình không cần [[kiem-soat-toc-do|giữ nhịp]] cứng.
**Cách làm dạo đầu phổ biến**: chơi **cả [[hinh-thuc-am-nhac|hình thức]] một lần ở thời gian tự do**, rồi **vào nhịp đột ngột** khi bài lặp lại.
| Phần của bài | Kỹ thuật |
|---|---|
| **Các [[cau-nhac|câu nhạc]]** | Giữ gần nguyên để giai điệu còn nhận ra; [[trang-tri-giai-dieu-jazz|trang trí]] nhẹ; [[rubato]] có chừng mực; [[ky-thuat-quang-tam|chơi quãng 8]]; chuyển giai điệu sang [[quang|quãng 8]] khác |
| **Chỗ nghỉ giữa các câu** | [[luyen-hop-am-rai|Hợp âm rải]], chạy [[am-giai|âm giai]], "fill" hay [[ngau-hung-piano|ngẫu hứng]] ngắn, hoặc chơi và giữ một hợp âm — ở đây có thể chậm hẳn lại, gần như không còn nhịp |
TJPS xếp rubato vào nhóm yếu tố [[tiet-tau|tiết tấu]] "phức tạp" — nên cân bằng bằng những yếu tố có cấu trúc (giai điệu rõ, hoà âm quen). Liên hệ cổ điển: [[prelude-ung-tac|prelude ứng tác]], [[cadenza]].
`,
  },
  {
    slug: 'tai-hoa-am-gospel',
    title: 'Tái hoà âm gospel',
    category: 'jazz',
    aliases: ['gospel reharmonization', 'gospel jazz', 'tái hoà âm gospel', 'Amazing Grace', 'backcycling', 'gospel piano'],
    summary: 'Gospel là hoà âm nhà thờ của người Mỹ gốc Phi, gần gũi với blues và hard bop. TJPS lấy "Amazing Grace" (giai điệu ngũ cung, chỉ ba hợp âm I – IV – V) và biến nó thành gospel – jazz: lùi vòng quãng 5 (C – F – C), hoà âm hoá gần như mọi nốt giai điệu, hợp âm 7 giảm lướt, át phụ và thay thế tritone.',
    refs: [
      ['The Jazz Piano Site — Gospel-Jazz Piano Techniques and Reharmonization', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/gospel-jazz-piano-techniques-and-reharmonization/'],
      ['The Jazz Piano Site — Gospel Jazz Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/gospel-jazz-explained/'],
      ['The Jazz Piano Site — Hard Bop & Soul Jazz Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/hard-bop-soul-jazz-explained/'],
      ['The Jazz Piano Site — Passing Chords', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/passing-chords/'],
    ],
    body: `
## Điểm xuất phát
TJPS chép "**Amazing Grace**" ở Đô trưởng "cho tiện":
- Bản cơ bản chỉ dùng **I, IV, V** (C, F, G).
- [[giai-dieu|Giai điệu]] (gần như) chỉ dùng **[[am-giai-ngu-cung|ngũ cung]] trưởng** C – D – E – G – A.
- Tay trái là đường bass đơn giản, nhấn nốt gốc.

## Các kỹ thuật gospel (theo TJPS)
- **Lùi vòng quãng 5** (backcycling): chèn [[hop-am-ba|hợp âm]] cách một bước ngược chiều [[vong-quang-nam|vòng quãng 5]] rồi quay lại — C – F – C. Chuyển động IV – I này là màu "**nhà thờ**" ([[cau-ket|kết plagal]]); TJPS cũng gọi nó như vậy khi nói về [[phong-cach-jazz|hard bop]].
- **Hoà âm hoá gần như từng nốt giai điệu** ở tay phải, xếp hẹp, chủ yếu đi **song song**, nốt giai điệu luôn ở trên cùng — họ hàng của [[hop-am-khoi|block chords]].
- Thêm [[hop-am-mo-rong|nốt căng]] và nốt biến hoá, [[hop-am-at-phu|át phụ]], [[hop-am-luot-jazz|hợp âm 7 giảm lướt]], [[thay-the-hop-am|thay thế]].

## Từng chỗ trong bài (theo TJPS)
| Chỗ | Kỹ thuật |
|---|---|
| Ô 2 | C7 hướng về Fmaj7, chèn **F°7** để **trì hoãn** giải quyết |
| Gần ô 3 | **C°7** — hợp âm giảm lướt dẫn về C |
| Ô 6 | **G°7** — hợp âm giảm lướt dẫn về G |
| Ô 8 | G7 được thay bằng **D♭7** ([[thay-the-tritone]]), giai điệu ở nốt ♯9 của D♭7 (= E, nốt 3 của C), rồi về C ngay |
::staff treble C4+E4+G4+Bb4=C7 F4+Ab4+B4+D5=F°7 F4+A4+C5+E5=Fmaj7 / Db4+F4+Ab4+Cb5=D♭7 C4+E4+G4=C | Ô 2: C7 → F°7 → Fmaj7 (hợp âm giảm làm chậm việc về IV); ô 8: D♭7 thay G7 rồi về C

## Gospel và jazz
Gospel thấm vào jazz qua **hard bop và soul jazz** (thập niên 1950–60): nhiều kết IV – I, nốt blue, đệm "gõ" theo tiếng đàn organ nhà thờ (xem [[am-giai-blues]], [[blues-12-nhip]]). Các kỹ thuật trên cũng dùng trực tiếp cho [[dem-hat-piano|đệm hát]] thánh ca và [[nhac-pho|nhạc phổ]] thông.
`,
  },
  {
    slug: 'sang-tac-jazz',
    title: 'Sáng tác jazz và phát triển giai điệu',
    category: 'jazz',
    aliases: ['jazz composition', 'sáng tác jazz', 'composition and melodic development', 'phát triển giai điệu', 'snowflake method', 'doodling method'],
    summary: 'TJPS xem sáng tác là "ngẫu hứng không có tính tức thời": phân tích giai điệu theo quãng, motif, tiết tấu, âm giai, hoà âm; phát triển motif bằng đảo, ngược, giãn, co, tách mảnh; đặt đỉnh giai điệu ở khoảng 2/3–3/4 câu; hai quy trình "vẽ nguệch ngoạc" và "bông tuyết" để đi từ một câu nhạc đến một lead sheet.',
    refs: [
      ['The Jazz Piano Site — Composition and Melodic Development', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/composition-and-melodic-development/'],
      ['The Jazz Piano Site — Contrafacts', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/contrafacts/'],
      ['The Jazz Piano Site — Rhythm Changes', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/rhythm-changes/'],
    ],
    body: `
TJPS: sáng tác là "**[[ngau-hung-piano|ngẫu hứng]] không có tính tức thời**" — cùng những công cụ của [[xay-dung-bai-solo|xây dựng bài solo]], nhưng có thời gian để chọn lọc.

## Phân tích một giai điệu
Năm góc nhìn (TJPS): **[[quang|quãng]]** (các bước nhảy), **motif**, **[[tiet-tau|tiết tấu]]**, **[[am-giai|âm giai]]** (giai điệu lấy nốt từ âm giai nào), **hoà âm** (nốt giai điệu so với [[hop-am-ba|hợp âm]] — xem [[not-dan-huong]], [[not-tranh-va-quang-nghich]]). Đây cũng là các yếu tố trong [[phan-tich-phong-cach|khung LaRue]].

## Phát triển motif
Đổi [[cao-do|cao độ]] hoặc tiết tấu, **đảo** ([[the-dao-hop-am|inversion]]), **ngược** (retrograde), **giãn** (augmentation), **co** (diminution), **tách mảnh** (fragmentation) — đúng các kỹ thuật cổ điển trong [[motif]], [[bien-doi-chu-de]] và [[doi-am|đối âm]].
::staff treble C4 D4 E4 G4 / C5 B4 A4 F4 / G4 E4 D4 C4 | Minh hoạ trên một motif C – D – E – G: nguyên dạng; đảo (các bước đi xuống, bắt đầu từ C cao); ngược (đọc từ cuối về đầu)

## Hình dáng giai điệu
- Trộn **bước liền bậc, nhảy nhỏ và nhảy xa** ([[giai-dieu]]).
- Đặt **nốt cao nhất** (đỉnh) ở khoảng **2/3 đến 3/4** [[cau-nhac|câu nhạc]] hoặc bài — gần với cách [[dien-dat-cau-nhac|câu nhạc]] cổ điển đặt cao trào.

## Hai quy trình
- **"Vẽ nguệch ngoạc"** (doodling): bắt đầu từ một giai điệu nghe hay rồi chỉnh cho hợp phong cách.
- **"Bông tuyết"** (snowflake): dạo đàn → tìm một câu → phát triển thành motif → hoà âm hoá → có một **lead sheet** ([[ky-hieu-hop-am]]). Bước cuối: **phối** ([[hinh-thuc-am-nhac|hình thức]], [[ngon-bam|thế bấm]], nhạc cụ, [[cuong-do|cường độ]]).
::form Dạo_đàn Một_câu Motif Hoà_âm Ký_âm Phối | Quy trình "bông tuyết" của TJPS: dạo đàn → tìm một câu → motif → hoà âm hoá → ký âm thành lead sheet → phối

## Contrafact: giai điệu mới trên vòng hợp âm cũ
Bản quyền bảo vệ giai điệu và lời, **không** bảo vệ [[vong-hop-am|vòng hợp âm]], nên nhạc công [[phong-cach-jazz|bebop]] viết rất nhiều **contrafact** — chi tiết và ví dụ ở [[rhythm-changes]]. Đó là cách tập sáng tác dễ nhất: giữ hoà âm quen, chỉ viết giai điệu mới.
Bài TJPS gợi ý để học các kỹ thuật: "E.S.P.", "In Walked Bud", "Satin Doll", "Autumn Leaves", "All the Things You Are". Liên quan: [[hinh-thuc-ca-khuc-32]], [[phoi-hoa-am-giai-dieu]].
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
      ['Wikipedia — Thirty-two-bar form', 'https://en.wikipedia.org/wiki/Thirty-two-bar_form'],
      ['Rafferty (2017) — Tin Pan Alley thesis, Newcastle University (PDF)', 'https://theses.ncl.ac.uk/jspui/bitstream/10443/3749/1/Rafferty%2C%20K.F.%202017.pdf'],
      ['Wikipedia — Rhythm changes', 'https://en.wikipedia.org/wiki/Rhythm_changes'],
    ],
    body: `
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
AABA còn được gọi là **"[[dieu-dem-pho-bien|ballad]] form"** hay **"American popular song form"**: khuôn mẫu chung của **Tin Pan Alley** và nhạc kịch Broadway nửa đầu [[thoi-ky-the-ky-20|thế kỷ 20]]. Lời tựa đề thường đặt ở **câu đầu hoặc câu cuối** của mỗi đoạn A. Nhiều ca khúc nhạc kịch theo hình thức này về sau trở thành **jazz standard**.

## Nhìn hoà âm theo hình thức
- Đoạn A thường **mở và đóng ở chủ** — vòng I – vi – ii – V hoặc chuỗi [[ii-v-i]].
- Đoạn B là chỗ hoà âm **đi xa nhất**: ly giọng sang IV, chuỗi [[hop-am-at-phu|át phụ]] (như rhythm changes), hoặc chuyển hẳn sang giọng khác.
- Ô cuối mỗi đoạn A thường có **"turnaround"** (I – vi – ii – V) để quay lại đầu.

## Trong biểu diễn jazz
Một lượt chơi trọn 32 ô nhịp gọi là một **chorus**. Cấu trúc thường gặp: chơi giai điệu (head) → các nhạc công lần lượt [[ngau-hung-piano|ngẫu hứng]] nhiều chorus trên cùng vòng hợp âm → chơi lại head.

So sánh: [[blues-12-nhip]] (12 ô), [[hinh-thuc-am-nhac|hình thức phiên khúc – điệp khúc]] của pop, [[hinh-thuc-am-nhac|hình thức ba đoạn]] ABA trong nhạc cổ điển.

Turnaround ở cuối mỗi đoạn A: [[turnaround-jazz]].
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
      ['Wikipedia — Rhythm changes', 'https://en.wikipedia.org/wiki/Rhythm_changes'],
      ['PianoGroove — Rhythm changes explained', 'https://www.pianogroove.com/jazz-piano-lessons/rhythm-changes-explained/'],
      ['BYU-Idaho — Rhythm changes (PDF)', 'https://content.byui.edu/file/be14498b-aa3f-4b2a-b9e6-4fb3fdbd1d12/1/10%20Rhythm%20Changes.pdf'],
      ['Wikipedia — Thirty-two-bar form', 'https://en.wikipedia.org/wiki/Thirty-two-bar_form'],
    ],
    body: `
"I Got Rhythm" của [[george-gershwin|George Gershwin]] ra mắt năm **1930** trong vở nhạc kịch Broadway *Girl Crazy*. [[vong-hop-am|Vòng hợp âm]] của nó — gọi là **"rhythm changes"** — trở thành một trong những khung hoà âm được dùng lại nhiều nhất của jazz, sau [[blues-12-nhip|blues]].

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
`,
  },
  {
    slug: 'vong-coltrane',
    title: 'Vòng Coltrane',
    category: 'jazz',
    aliases: ['Coltrane changes', 'Giant Steps', 'vòng Giant Steps', 'chuyển giọng quãng 3 trưởng', 'Countdown', 'thay thế Coltrane'],
    summary: 'Hệ thống thay thế hợp âm của John Coltrane (Giant Steps, 1959): chia quãng 8 thành ba giọng cách nhau quãng 3 trưởng, mỗi giọng được chuẩn bị bằng hợp âm 7 át của nó.',
    wiki: 'Coltrane_changes',
    refs: [
      ['Wikipedia — Coltrane changes', 'https://en.wikipedia.org/wiki/Coltrane_changes'],
      ['Wikipedia — Giant Steps (composition)', 'https://en.wikipedia.org/wiki/Giant_Steps_(composition)'],
      ['Learn Jazz Standards — Understanding Coltrane changes, part 1', 'https://www.learnjazzstandards.com/blog/understanding-coltrane-changes-part-1/'],
      ['Piano With Jonny — Giant Steps: a guide to Coltrane changes', 'https://pianowithjonny.com/piano-lessons/giant-steps-a-guide-to-coltrane-changes/'],
    ],
    body: `
**Vòng Coltrane** (Coltrane changes) là cách **John Coltrane** thay thế hoà âm, nổi tiếng nhất trong bài **"Giant Steps"** (thu âm tháng 5/1959, album cùng tên phát hành 1960).

## Ý tưởng: ba giọng cách nhau quãng 3 trưởng
- Ba [[dieu-tinh|trung tâm giọng]] của "Giant Steps": **Si trưởng, Sol trưởng, Mi giáng trưởng** — mỗi giọng **thấp hơn giọng trước một [[quang|quãng]] 3 trưởng**.
- Chồng các quãng 3 trưởng sẽ quay về điểm xuất phát sau **ba** bước (B – G – E♭ – B) — tức là ba gốc này tạo thành một [[hop-am-ba-tang|hợp âm ba tăng]]. Quãng 8 được chia thành **ba phần bằng nhau**, một kiểu đối xứng giống [[dieu-thuc-chuyen-vi-gioi-han|các âm giai đối xứng]].
::keyboard Eb4 G4 B4 | B – G – E♭: ba trung tâm giọng cách nhau quãng 3 trưởng, cùng tạo thành một hợp âm ba tăng
- Mỗi giọng được dẫn vào bằng **[[hop-am-bay|hợp âm 7 át]]** của nó: Bmaj7 – **D7** – Gmaj7 – **B♭7** – E♭maj7 …
::staff treble B3+D#4+F#4+A#4=Bmaj7 D4+F#4+A4+C5=D7 G4+B4+D5+F#5=Gmaj7 Bb3+D4+F4+Ab4=B♭7 Eb4+G4+Bb4+D5=E♭maj7 | Bmaj7 – D7 – Gmaj7 – B♭7 – E♭maj7: mỗi giọng mới được dẫn vào bằng hợp âm 7 át của nó

## Như một phép thay thế cho ii – V – I
Coltrane cũng dùng hệ thống này để **[[tai-hoa-am|tái hoà âm]]** các tiến trình sẵn có: một [[ii-v-i]] được "lấp đầy" bằng các chặng cách nhau quãng 3 trưởng trước khi về chủ. Ví dụ "Countdown" là bản tái hoà âm của "Tune Up" (Miles Davis): khung lớn vẫn là các giọng của "Tune Up", nhưng từng chặng được chia nhỏ theo vòng Coltrane.

## Liên hệ với hoà âm cổ điển
Các giọng cách nhau quãng 3 là chủ đề của [[trung-am-cromatic|quan hệ trung âm cromatic]] trong nhạc thế kỷ 19; chu trình chia quãng 8 thành ba phần cũng xuất hiện trong phân tích [[neo-riemann|Neo-Riemann]]. Vòng Coltrane là cách jazz kết hợp quan hệ đó với lực đẩy V7 – I.

## Luyện tập
1. Chơi chậm chuỗi [[hop-am-ba|hợp âm]] "Giant Steps" chỉ với [[ii-v-i|nốt dẫn hướng]].
2. Nhận ra từng cặp V7 – I và giọng nó dẫn tới.
3. Thử chèn vòng Coltrane vào một ii – V – I quen thuộc.

Giai đoạn trước đó của Coltrane: [[sheets-of-sound]].
`,
  },  {
    slug: 'constant-structures',
    title: 'Constant structures: chuỗi hợp âm cùng loại',
    category: 'jazz',
    aliases: ['constant structure', 'constant structures', 'chuỗi hợp âm cùng loại', 'hợp âm cùng loại chuyển gốc', 'Inner Urge'],
    summary: 'Constant structures là chuỗi từ ba hợp âm cùng loại trở lên (cùng maj7, cùng m7…) có nốt gốc chuyển động không theo chức năng, làm trung tâm giọng liên tục dịch chuyển. Được Bill Evans và Herbie Hancock phổ biến; "Inner Urge" của Joe Henderson là ví dụ rõ.',
    wiki: 'Constant_structure',
    refs: [
      ['The Jazz Piano Site — Constant Structures', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/constant-structures/'],
      ['Wikipedia — Constant structure', 'https://en.wikipedia.org/wiki/Constant_structure'],
      ['Nghiên cứu về "Inner Urge" (luận án DMA, UNCG)', 'https://youthjazz.us/wp-content/uploads/2019/02/umi-uncg-1618.pdf'],
    ],
    body: `
## Định nghĩa
Theo TJPS và Wikipedia, **constant structures** là chuỗi **ba hợp âm cùng loại trở lên** (ví dụ toàn [[hop-am-bay|maj7]]) với **nốt gốc chuyển động không theo [[chuc-nang-hoa-am|chức năng]]** — [[dieu-tinh|trung tâm giọng]] dịch chuyển liên tục. Nốt gốc thường đi theo một quãng cố định (hay gặp là quãng 3) hoặc vẽ một [[luyen-hop-am-rai|hợp âm rải]]. Vì không có lực hút V – I, chuỗi có thể **dừng ở bất kỳ hợp âm nào** mà vẫn nghe trọn vẹn. Wikipedia ghi kỹ thuật này được **[[bill-evans|Bill Evans]]** và **[[herbie-hancock|Herbie Hancock]]** phổ biến.

## Ví dụ
::staff treble F4+A4+C5+E5=Fmaj7 Ab4+C5+Eb5+G5=A♭maj7 Db4+F4+Ab4+C5=D♭maj7 Gb4+Bb4+Db5+F5=G♭maj7 | Ví dụ của Wikipedia: Fmaj7 – A♭maj7 – D♭maj7 – G♭maj7 (rồi C13sus4) — chỉ Fmaj7 thuộc giọng Fa
TJPS đưa ví dụ F♯maj7 – Emaj7 – Dmaj7 – Cmaj7 (cũng chơi được với toàn m7 hoặc toàn 7): nốt gốc đi xuống từng cung.

**"Inner Urge"** (Joe Henderson, thu âm 1964): mở đầu bằng F♯m7♭5, rồi chuỗi **Fmaj7♯11 – E♭maj7♯11 – D♭maj7♯11**, mỗi hợp âm 4 ô, trước khi các hợp âm maj7♯11 đổi nhanh hơn.

## Nghe và dùng
- Màu **trôi**, hiện đại, không có cảm giác "về nhà" — gần với [[hoa-am-song-song|hoà âm song song]] của [[claude-debussy|Debussy]] (xem [[an-tuong]]).
- Khi [[ngau-hung-piano|ngẫu hứng]], mỗi hợp âm là một **giọng tạm** — chuyển âm giai theo từng hợp âm (ví dụ [[dieu-thuc|Lydian]] trên maj7♯11; xem [[he-thong-hop-am-am-giai]]).
- TJPS xem đây là một công cụ [[tai-hoa-am|tái hoà âm]] mạnh: thay một đoạn [[ii-v-i|ii – V – I]] bằng chuỗi cùng loại có giai điệu phù hợp.
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
      ['The Jazz Piano Site — Passing Notes and Target Notes', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/passing-notes/'],
      ['The Jazz Piano Site — Vertical Improvisation (enclosures)', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/vertical-improvisation/'],
      ['Jazzadvice — How to effectively use enclosure', 'https://www.jazzadvice.com/lessons/how-to-effectively-use-enclosure/'],
      ['The Jazz Piano Site — Walking Bass Lines', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/walking-bass-lines/'],
    ],
    body: `
## Nốt mục tiêu
**Nốt mục tiêu** là nốt [[cau-nhac|câu nhạc]] "muốn đến": thường là **nốt [[hop-am-ba|hợp âm]]** (đặc biệt [[not-dan-huong|nốt 3 và 7]] — [[ii-v-i|nốt dẫn hướng]]), một [[hop-am-mo-rong|nốt căng]] dùng được, hoặc nốt [[giai-dieu|giai điệu]]. Nó thường rơi vào **[[so-chi-nhip|phách mạnh]]** hoặc **cuối câu**. Các nốt dẫn tới nó là **nốt lướt** — chơi nhanh, ít quan trọng về hoà âm (TJPS). Đây là phiên bản jazz của [[not-ngoai-hop-am|nốt ngoài hợp âm]] cổ điển.

## Nốt tiếp cận
- **Cromatic từ dưới**: B → C. **Cromatic từ trên**: D♭ → C.
- **Liền bậc** (trong âm giai): D → C.
Cùng nguyên tắc dùng cho bè trầm ở [[bass-di-jazz|bass đi]].

## Bao vây (enclosure)
TJPS: "chơi các nốt **ở hai phía** nốt mục tiêu trước khi chơi nốt mục tiêu". Hai nốt kẹp có thể liền bậc, cromatic hoặc trộn lẫn, theo thứ tự trên – dưới hoặc dưới – trên. **Charlie Parker** và **Cannonball Adderley** dùng bao vây rất nhiều — đó là một phần cốt lõi của "ngôn ngữ" [[phong-cach-jazz|bebop]].
::staff treble F4 D#4 E4=E / D#4 F4 E4=E / F4 D4 D#4 E4=E | Ba cách bao vây nốt E (nốt 3 của C): F (trên, liền bậc) – D♯ (dưới, cromatic) – E; đảo thứ tự; F – D – D♯ (liền bậc trên, rồi hai nốt cromatic từ dưới)
::rhythm 4/4 e-e q h // | Đặt nốt mục tiêu vào phách: hai nốt bao vây là hai móc đơn trước phách 2, nốt mục tiêu rơi đúng phách (minh hoạ tiết tấu)

## Luyện tập
1. Chọn một nốt mục tiêu (nốt 3 của mỗi hợp âm trong [[ii-v-i]]), tiếp cận nó từ dưới nửa cung, rồi từ trên.
2. Thêm bao vây, giữ nốt mục tiêu **luôn ở phách**.
3. Kết hợp với [[am-giai-bebop]] để câu nhạc chạy liên tục mà nốt hợp âm vẫn rơi đúng phách.
Liên quan: [[ngau-hung-jazz]], [[ngau-hung-doc-ngang]], [[phuong-phap-luyen-ngau-hung]].
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
      ['The Jazz Piano Site — Vertical Improvisation', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/vertical-improvisation/'],
      ['The Jazz Piano Site — Chord Mapping & Common Scales', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/chord-mapping/'],
      ['The Jazz Piano Site — Octave Displacement & Pivot Arpeggios', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/octave-displacement-pivot-arpeggios/'],
      ['The Jazz Piano Site — Modal Jazz Improvisation & Harmony', 'https://www.thejazzpianosite.com/jazz-piano-lessons/modern-jazz-theory/modal-jazz/'],
      ['Wikipedia — Chord-scale system', 'https://en.wikipedia.org/wiki/Chord-scale_system'],
    ],
    body: `
## Dọc và ngang
| | [[ngau-hung-piano|Ngẫu hứng]] **dọc** | Ngẫu hứng **ngang** |
|---|---|---|
| Nghĩ theo | **Từng hợp âm** | **Một âm giai / giọng** cho nhiều hợp âm |
| Chất liệu | [[luyen-hop-am-rai|Hợp âm rải]], nốt hợp âm, [[not-ngoai-hop-am|nốt lướt]] cromatic | Âm giai, [[dieu-thuc|điệu thức]], motif |
| Hợp với | [[phong-cach-jazz|Bebop]], tiến trình đổi hợp âm nhanh | [[jazz-dieu-thuc|Jazz điệu thức]], hợp âm kéo dài |
| Nguy cơ | Nghe như bài tập hợp âm rải | Không bám hợp âm, mất "đường đi" |
Phân biệt "dọc" (hợp âm) và "ngang" (giai điệu) là trung tâm trong lý thuyết của George Russell (xem [[he-thong-hop-am-am-giai]]). TJPS cho rằng cần nắm ngẫu hứng dọc **trước** các kỹ thuật phức tạp hơn.

## Làm câu nhạc dọc bớt máy móc (theo TJPS)
- **[[not-tiep-can-jazz|Bao vây]]** nốt hợp âm.
- **[[mau-lap-chu-ky|Mẫu lặp theo chu kỳ]]** (cycled patterns) và **[[mo-tien-hoa-am|mô tiến]]**.
- **Phát triển [[motif]]**.
- **Dịch quãng 8** (octave displacement): chuyển **một nốt** của câu lên hoặc xuống một quãng 8 rồi đi tiếp từ đó — hiệu quả nhất khi nốt bị dịch rơi vào phách nhẹ và đi ngược hướng [[cau-nhac|câu nhạc]]. Làm vậy với hợp âm rải gọi là **hợp âm rải xoay** (pivot arpeggio).
::staff treble C4 E4 G4 B4 / C4 E4 G4 B3 | Hợp âm rải Cmaj7 đi lên, rồi dịch nốt B xuống một quãng 8: câu nhạc "xoay" hướng và đi tiếp từ chỗ mới

## Bản đồ hợp âm (chord mapping)
Cách nối hai lối nghĩ (TJPS): chọn **một âm giai nền** hợp với cả tiến trình (hoặc cả một [[phan-tich-tien-trinh-jazz|giọng tạm]]), đi ra các ý riêng cho từng hợp âm rồi **quay về âm giai nền** để giải quyết căng thẳng.
Liên quan: [[ngau-hung-jazz]], [[choi-ngoai-jazz]].
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
      ['The Jazz Piano Site — Playing Inside', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/playing-inside/'],
      ['The Jazz Piano Site — Side-Slipping & Bitonality', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/side-slipping/'],
      ['The Jazz Piano Site — Creating and Resolving Tension', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/creating-resolving-tension/'],
      ['The Jazz Piano Site — Improvisation Stages & Thought Process', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/the-4-stages-of-improvisation/'],
      ['Wikipedia — Outside (jazz)', 'https://en.wikipedia.org/wiki/Outside_(jazz)'],
      ['Linna — McCoy Tyner, modal jazz and the dominant chord (Uniarts Helsinki)', 'https://taju.uniarts.fi/bitstream/handle/10024/6819/302684_Sami_Linna_McCoyTynerModalJazzandtheDominantChord_verkkoversio.pdf'],
    ],
    body: `
## Căng và giải quyết
TJPS tóm ý tưởng bao trùm của [[ngau-hung-jazz|ngẫu hứng jazz]] là **căng và giải quyết**: chơi nốt **nghịch** ("ngoài") tạo căng; quay về nốt **thuận** ("trong" — nốt hợp âm, [[hop-am-mo-rong|nốt căng]] dùng được) để giải quyết. Đây cũng là nguyên lý [[thuan-nghich|thuận – nghịch]] của âm nhạc cổ điển, chỉ ở mức táo bạo hơn.

## Side-slipping
Theo TJPS: chơi một câu trong âm giai của hợp âm, **lặp lại nó cao hoặc thấp hơn nửa cung**, rồi **quay về** âm giai gốc. Nhờ sự **lặp lại**, các nốt "sai" nghe như cố ý.
::staff treble D4 F4 A4 C5 / Eb4 Gb4 Bb4 Db5 / D4 F4 A4 C5 | Trên Dm7: câu nhạc trong âm giai Đô trưởng, lặp lại cao hơn nửa cung (chơi "ngoài"), rồi quay về
- Pianist **[[mccoy-tyner|McCoy Tyner]]** hay side-slipping trong lối chơi [[am-giai-ngu-cung|ngũ cung]] ở tay phải; **John Coltrane** chuyển một motif qua nhiều giọng rồi quay về (ví dụ trong *A Love Supreme*). Nhà nghiên cứu Sami Linna cho rằng âm thanh "[[dieu-thuc|điệu thức]]" của Tyner thực ra đến nhiều từ hợp âm át và các cặp ii – V ở giọng khác.
- Wikipedia liệt kê các cách chơi "ngoài" khác: chồng [[vong-coltrane|vòng Coltrane]] lên tiến trình, [[da-dieu-tinh|đa điệu tính]].
- TJPS cũng mô tả side-slipping trong **đệm**: chơi hợp âm, nhanh chóng chơi hợp âm cùng loại cách nửa cung, rồi về lại (xem [[dem-jazz]]).

## Đa điệu tính (bitonality)
TJPS: dùng một âm giai **khác** âm giai của hợp âm. Âm giai càng gần trên [[vong-quang-nam|vòng quãng 5]] càng nghe thuận; âm giai giữ được [[not-dan-huong|nốt 3 và 7]] của hợp âm thì hợp hơn.

## Bốn giai đoạn của người học ngẫu hứng (TJPS)
1. **"Mày mò"**: biết âm giai nhưng chơi ngập ngừng, nhỏ, ngẫu nhiên.
2. **"Coltrane"**: tự tin quá mức, nhồi càng nhiều nốt càng tốt.
3. **"Basie"**: chậm lại, câu ngắn, có khoảng nghỉ — **đầu óc** chọn nốt chứ không phải ngón tay.
4. **"Ra ngoài"**: nhắm [[not-tiep-can-jazz|nốt dẫn hướng]], căng – giải quyết, phát triển [[motif]], chạy cromatic, side-slipping.
Chỉ nên "ra ngoài" khi đã chơi "trong" vững vàng — xem [[ngau-hung-doc-ngang]], [[phuong-phap-luyen-ngau-hung]].

Thêm: [[mau-lap-chu-ky]], [[superimposition-jazz]], [[not-tranh-va-quang-nghich]].
`,
  },  {
    slug: 'not-dan-huong',
    title: 'Nốt dẫn hướng (guide tones)',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['nốt dẫn hướng', 'guide tones', 'guide tone', 'guide tone line', 'đường nốt dẫn hướng', 'nốt 3 và 7'],
    summary: 'Nốt 3 và nốt 7 của mỗi hợp âm là "nốt dẫn hướng": chúng xác định hợp âm trưởng, thứ hay át và nối các hợp âm bằng những bước rất nhỏ. Nhắm vào chúng khi ngẫu hứng là cách chắc chắn nhất để giai điệu "nói" được tiến trình hợp âm.',
    refs: [
      ['The Jazz Piano Site — Top 3 Improvisation Exercises (Guide Tone Targeting)', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/top-3-improvisation-exercises-improve-soloing/'],
      ['The Jazz Piano Site — Chord Mapping & Common Scales', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/chord-mapping/'],
      ['The Jazz Piano Site — Improvisation Tips', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/improvisation-tips/'],
      ['The Jazz Piano Site — Shell Chords', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/shell-chords/'],
      ['Learn Jazz Standards — Improve jazz solos using guide tones', 'https://www.learnjazzstandards.com/ljs-podcast/learn-jazz-theory/ljs-53-improve-jazz-solos-using-guide-tones/'],
    ],
    body: `
## Vì sao là nốt 3 và 7?
Theo TJPS, **nốt 3 và nốt 7** quyết định **tính chất** hợp âm (trưởng 7, thứ 7, át 7); chỉ cần hai nốt này là đã nghe ra "cảm giác" của hợp âm. Nốt gốc thường do bass chơi, nốt 5 ít mang thông tin. Vì vậy hai nốt này cũng là tay trái [[toi-gian|tối giản]] — [[xep-hop-am|shell voicing]].
| Hợp âm | Nốt 3 | Nốt 7 |
|---|---|---|
| Dm7 | F | C |
| G7 | B | F |
| Cmaj7 | E | B |

## Đường nốt dẫn hướng
TJPS: tiến trình hợp âm thường tạo ra những **đường nốt dẫn hướng** dễ theo dõi khi [[ngau-hung-piano|ngẫu hứng]] — ở mỗi lần đổi hợp âm, đường ấy **đứng yên hoặc đi xuống một bậc**. Trong [[ii-v-i|ii – V – I]], nốt 7 của hợp âm này đi xuống thành nốt 3 của hợp âm sau.
::staff treble C5=7 B4=3 B4=7 / F4=3 F4=7 E4=3 | Hai đường nốt dẫn hướng qua Dm7 – G7 – Cmaj7: C → B → B và F → F → E — mỗi bước đứng yên hoặc đi xuống
Trong V7 → I, tritone B – F của G7 giải quyết vào quãng 3 C – E (xem [[thuan-nghich]], [[dan-giong]]).

## Bài luyện "nhắm nốt dẫn hướng" (TJPS)
1. Chơi những **câu ngắn có khoảng nghỉ**.
2. **Kết mỗi câu bằng nốt 3 hoặc 7** của hợp âm đang vang (ví dụ A hoặc E♭ trên F7).
3. **Nhìn trước**: [[cau-nhac|câu nhạc]] thường kết ở ô sau, khi hợp âm đã đổi.
4. Khi đã quen, thử nhắm nốt 9 — nghe "táo bạo" hơn.
TJPS nói bài luyện này buộc người chơi **bám theo tiến trình** và **kết câu chắc chắn**. Nốt dẫn hướng cũng là nốt mục tiêu tốt nhất cho [[not-tiep-can-jazz|nốt tiếp cận và bao vây]].

## Một nguyên tắc chung của jazz điệu tính
TJPS: trong jazz có điệu tính, người solo "nói lại" tiến trình bằng cách **nhắm nốt dẫn hướng** và **tránh [[not-tranh-va-quang-nghich|nốt tránh]]**. Với [[jazz-dieu-thuc|jazz điệu thức]], vai trò này giảm đi vì hợp âm ít đổi.
Liên quan: [[ngau-hung-doc-ngang]], [[dem-jazz]], [[tai-hoa-am]].
`,
  },
  {
    slug: 'not-tranh-va-quang-nghich',
    title: 'Nốt tránh và quãng nghịch trong ngẫu hứng',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['avoid note', 'avoid notes', 'nốt tránh', 'dissonant intervals', 'quãng nghịch jazz', 'nốt tránh jazz'],
    summary: 'Nốt tránh là nốt nằm nửa cung trên một nốt hợp âm (F trên Cmaj7, C trên G7, B trên Dm7): dùng làm nốt lướt nhanh, không ngân dài. Quãng nghịch (quãng 2, 7, tritone, quãng 9 thứ) tạo căng; giải quyết về quãng thuận hoặc nốt dẫn hướng — căng và giải toả như những đợt sóng.',
    refs: [
      ['The Jazz Piano Site — Avoid Notes', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/avoid-notes/'],
      ['The Jazz Piano Site — Dissonant Intervals', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/dissonant-intervals/'],
      ['The Jazz Piano Site — Creating and Resolving Tension', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/creating-resolving-tension/'],
      ['The Jazz Piano Site — Available Tensions', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chords/available-tensions/'],
      ['The Jazz Piano Site — Selecting Scales', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/selecting-scales/'],
    ],
    body: `
## Nốt tránh
TJPS định nghĩa: **nốt tránh là bất kỳ nốt nào cao hơn một nốt hợp âm nửa cung**. Quy tắc gợi nhớ:
| Hợp âm | Nốt tránh | Ví dụ trên Đô / Rê / Si |
|---|---|---|
| [[hop-am-bay|maj7]] | Bậc 4 | F trên Cmaj7 (nửa cung trên E) |
| 7 (át) | Bậc 4 | C trên G7 (nửa cung trên B) |
| m7 | Bậc 6 | B trên Dm7 (nửa cung trên A) |
| m7♭5 | Bậc 2 và 6 | C và G trên Bø7 |
TJPS lưu ý khái niệm này **có phần chủ quan**: nhiều người không coi bậc 6 [[dieu-thuc|Dorian]] trên m7 là nốt tránh; người chơi hiện đại cũng hay đặt ♯9 ngay trên một nốt hợp âm.

**Dùng thế nào?**
- Chơi như **[[not-ngoai-hop-am|nốt lướt]] nhanh**, không nhấn, không ngân (xem [[not-tiep-can-jazz]]).
- Chọn âm giai **ít nốt tránh**: Lydian trên maj7 không có nốt tránh nào (xem [[he-thong-hop-am-am-giai]]).
- Cố ý: **kết câu trên nốt tránh** để tạo căng — rồi giải quyết ở câu sau.
::staff treble E4 F4=nốt_tránh E4 / E4 G4 F4 | Trên Cmaj7: F chỉ lướt qua rồi về E (dùng tốt); ngân dài F sẽ va chạm với nốt 3 của hợp âm

## Quãng nghịch
TJPS xếp: **nghịch** — quãng 2 thứ, quãng 2 trưởng, quãng 7 thứ, quãng 7 trưởng, **tritone**, quãng 9 thứ; **thuận** — đồng âm, quãng 8, quãng 5, quãng 4, quãng 3 và 6. Cách xếp này cũng chủ quan (xem [[thuan-nghich]] để hiểu vì sao quan niệm thay đổi theo lịch sử).
- "Dùng quãng nghịch để **tạo căng** trong solo, rồi **giải quyết** bằng cách lùi về một quãng thuận (hoặc một [[not-dan-huong|nốt dẫn hướng]])."
- Căng thẳng nên **lên xuống như sóng**.
- Hợp âm át vốn nghịch vì có tritone giữa nốt 3 và 7 — nên nó hút về chủ; nốt ♭9 thường được tránh vì quá nghịch (xem [[hop-am-at-bien-hoa]]).
::staff treble B4+F5=tritone C5+E5=quãng_3 | Tritone B – F (trong G7) giải quyết vào quãng 3 C – E (Cmaj7): B lên C, F xuống E

Liên quan: [[choi-ngoai-jazz]], [[am-giai-bebop]] (nốt lướt đặt vào phách nhẹ).
`,
  },
  {
    slug: 'trang-tri-giai-dieu-jazz',
    title: 'Trang trí giai điệu trong jazz',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['embellishing the melody', 'biến tấu giai điệu jazz', 'fill', 'ngẫu hứng trên giai điệu', 'melodic paraphrase'],
    summary: 'Cách ngẫu hứng lâu đời nhất của jazz: giữ giai điệu bài hát nhưng đổi tiết tấu, đổi nốt, chèn "fill" vào chỗ nốt dài và thêm hoa mỹ. Người nghe luôn biết mình đang nghe bài nào — vì vậy đây cũng là cách "giải toả" căng thẳng trong một solo.',
    refs: [
      ['The Jazz Piano Site — Embellishing the Melody', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/embellishing-the-melody/'],
      ['The Jazz Piano Site — Approaches to Improvisation', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/approaches-to-improvisation/'],
      ['The Jazz Piano Site — Swing Music Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/swing-music-explained/'],
    ],
    body: `
## Bốn cách (theo TJPS)
1. **Đổi tiết tấu, giữ cao độ** — dồn, giãn, đảo phách các nốt giai điệu (xem [[dao-phach]], [[tiet-tau-ngau-hung-jazz]]).
2. **Đổi cao độ, giữ tiết tấu** — thay vài nốt bằng nốt hợp âm hoặc [[hop-am-mo-rong|nốt căng]] khác.
3. **Chèn "fill"** vào chỗ **nốt dài và [[dau-lang|dấu lặng]]** — vài nốt của âm giai rồi quay lại giai điệu.
4. **Thêm [[ky-hieu-hoa-my|hoa mỹ]]**: láy rền, láy chùm, láy, nốt hoa mỹ.
TJPS: cách này "**trấn an người nghe** rằng họ vẫn đang nghe cùng một bài hát", nên nó cũng là cách **giải quyết căng thẳng** sau một đoạn "chơi ngoài" (xem [[choi-ngoai-jazz]]).

::rhythm 4/4 h h / e-e q h // | Một ý minh hoạ cách 1: hai nốt trắng của giai điệu được "dồn" lại thành móc đơn – đen, nốt cuối giữ nguyên

## Bài khởi động cho người mới (TJPS)
Trên "Autumn Leaves" (xem [[phan-tich-tien-trinh-jazz]]): chơi giai điệu; đến **nốt ngân dài**, chơi vài nốt của **âm giai Si giáng trưởng** rồi **quay về giai điệu**. Mỗi lần chơi lại, tăng dần phần "fill".

## Lịch sử: từ trang trí đến sáng tạo giai điệu mới
- Theo TJPS, cho đến **thời đại [[swing|Swing]]**, "[[ngau-hung-piano|ngẫu hứng]]" về cơ bản là **chơi giai điệu có trang trí**.
- **Coleman Hawkins** đi xa hơn: thay vì trang trí giai điệu, ông **tạo giai điệu mới từ hoà âm** của bài — mở đường cho [[phong-cach-jazz|bebop]] (xem [[ngau-hung-doc-ngang|ngẫu hứng dọc]]).
- **Sonny Rollins** quay lại với giai điệu theo cách khác: lấy **mảnh của giai điệu làm [[motif]]** và phát triển dần qua cả bài solo (xem [[bien-tau]], [[xay-dung-bai-solo]]).
Liên hệ cổ điển: trang trí giai điệu cũng là cốt lõi của hoa mỹ [[thoi-ky-baroque|Baroque]] và [[lich-su-ngau-hung|ngẫu hứng trong nhạc cổ điển]].
`,
  },
  {
    slug: 'mau-lap-chu-ky',
    title: 'Mẫu lặp theo chu kỳ (cycled patterns)',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['cycled patterns', 'cycled pattern', 'mẫu lặp theo chu kỳ', 'mẫu lặp dịch giọng', 'sequence jazz'],
    summary: 'Mẫu lặp theo chu kỳ là một câu nhạc ngắn được lặp lại và dịch lên hoặc xuống theo một quãng cố định. Vì 12 chia hết cho 1, 2, 3, 4, 6, chu kỳ đều nhau sẽ quay về nốt xuất phát — cho phép "đi ra ngoài" rồi trở về đúng nốt mục tiêu.',
    refs: [
      ['The Jazz Piano Site — Cycled Patterns', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/cycled-patterns/'],
      ['The Jazz Piano Site — Coltrane Changes Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/coltrane-changes/'],
      ['The Jazz Piano Site — Diminished Scale', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/diminished-scale/'],
    ],
    body: `
## Định nghĩa
TJPS: "tạo một khuôn mẫu bằng cách **lặp lại một [[cau-nhac|câu nhạc]] và dịch nó lên hoặc xuống theo những quãng cố định**". Đây là họ hàng của [[mo-tien-hoa-am|mô tiến]] trong nhạc cổ điển, nhưng không cần bám âm giai.

## Vì sao nghe được?
- Một khuôn đơn giản lặp theo quãng cố định "**nghe hay bất kể bạn chơi nốt nào hay trên hợp âm nào**" — tai nghe theo **logic của khuôn**, không theo giọng.
- Nhờ vậy có thể **ra ngoài** âm giai để tạo căng rồi **trượt về trong** để giải quyết — cùng nhóm kỹ thuật với chạy cromatic và [[choi-ngoai-jazz|side-slipping]].
- Nhược điểm (TJPS): dễ nghe **máy móc**; nên xen với những câu nhạc theo giọng.

## Tính toán để về đúng đích
Vì **12 chia hết cho 1, 2, 3, 4, 6**, dịch đều theo 1, 2, 3, 4 hoặc 6 [[cung-nua-cung|nửa cung]] sẽ quay về nốt xuất phát (xem đồng hồ lớp cao độ trong [[tap-hop-cao-do]]). Mẹo của TJPS: muốn kết ở một [[not-tiep-can-jazz|nốt mục tiêu]], **bắt đầu khuôn trên chính nốt đó cao hơn một quãng 8** rồi đi xuống theo quãng chọn.
::staff treble E5 G#5 B5 / D5 F#5 A5 / C5 E5 G5 / Bb4 D5 F5 / Ab4 C5 Eb5 / Gb4 Bb4 Db5 / E4=đích | Minh hoạ: hợp âm ba trưởng rải, dịch xuống từng cung từ E — sau sáu lần quay về E (nốt 3 của Cmaj7)
::pc-clock 4 2 0 10 8 6 | Các nốt bắt đầu E – D – C – B♭ – A♭ – G♭: một âm giai toàn cung — chu kỳ một cung chia quãng 8 thành 6 phần bằng nhau
- Dịch theo **quãng 3 thứ** (3 nửa cung) vẽ ra một [[hop-am-bay-giam|hợp âm 7 giảm]]; theo **quãng 3 trưởng** vẽ ra [[hop-am-ba-tang|hợp âm ba tăng]] — chính là trục của [[vong-coltrane|vòng Coltrane]].
- TJPS còn gợi ý: khi lỡ chơi nốt sai, biến nó thành điểm khởi đầu của một chuỗi cromatic hoặc một [[ostinato|mẫu lặp]] — xem [[meo-ngau-hung-jazz]].
Liên quan: [[am-giai-doi-xung-jazz]], [[ngau-hung-doc-ngang]].
`,
  },
  {
    slug: 'tiet-tau-ngau-hung-jazz',
    title: 'Tiết tấu, cách nhả nốt và dịch chuyển giai điệu',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['jazz phrasing', 'jazz articulation', 'rhythm and articulation', 'cách nhả nốt jazz', 'displacing the melody', 'dịch chuyển giai điệu', 'bar-line shift', 'dịch vạch nhịp', 'ghost note', 'nốt ma'],
    summary: 'Trong jazz, cảm giác đến từ cách chơi nốt chứ không chỉ chọn nốt: móc đơn swing, nhấn cả phách mạnh lẫn phách nhẹ, nhả nốt nảy và gọn, nốt "ma", câu bắt đầu và kết ở phách nhẹ. Dịch giai điệu sớm hoặc muộn so với hợp âm (displacement, bar-line shift) tạo căng mà người nghe vẫn có điểm tựa.',
    refs: [
      ['The Jazz Piano Site — Jazz Rhythm & Phrasing', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/jazz-phrasing-articulation/'],
      ['The Jazz Piano Site — Displacing the Melody', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/displacing-the-melody/'],
      ['The Jazz Piano Site — Bar Line Shift & Superimposition', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/bar-line-shift-and-superimposition/'],
      ['The Jazz Piano Site — Swing vs Straight', 'https://www.thejazzpianosite.com/jazz-piano-lessons/the-basics/swing-vs-straight/'],
      ['The Jazz Piano Site — Bebop Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/bebop-explained/'],
    ],
    body: `
## Nốt hay cách chơi nốt?
TJPS: cảm giác jazz phụ thuộc vào **cách chơi nốt**, không chỉ nốt nào được chơi.
- **[[swing]]** là nhịp nền: móc đơn swing mang cảm giác [[lien-ba|liên ba]], bỏ nốt giữa.
- **Nhấn** cả [[so-chi-nhip|phách mạnh]] lẫn phách nhẹ; nhấn mỗi 2–5 nốt giúp câu móc đơn dài không đơn điệu, thậm chí tạo [[da-nhip|đa tiết tấu]] chồng lên [[cau-nhac|câu nhạc]].
- **Cách nhả nốt**: "nảy, gọn, có lực" — không hẳn staccato, cũng không legato (trừ ballad) — xem [[cach-dien-tau]].
- **Nốt ma** (ghost note): nốt chơi rất nhẹ, gần như chỉ nghe được tiết tấu.
- **Bắt đầu và kết câu ở phách nhẹ** — câu [[phong-cach-jazz|bebop]] điển hình bắt đầu ở phách nhẹ, móc đơn swing, nhấn xen kẽ phách mạnh và phách nhẹ.
::rhythm 4/4 re >e-e e-e >e-e e-e // | Câu móc đơn bắt đầu ở "&" của phách 1, nhấn vài nốt phách nhẹ — khuôn tiết tấu kiểu bebop (minh hoạ)
::rhythm 4/4 >e-e e->e e-e >e-e // | Nhấn mỗi 3 nốt trên dòng móc đơn (nốt 1, 4, 7): nhóm 3 chồng lên mạch 4 phách tạo đa tiết tấu (xem [[hemiola]])

## Dịch chuyển giai điệu (displacement)
TJPS: chơi giai điệu bài hát **sớm hơn hoặc muộn hơn** so với tiến trình hợp âm.
- **Muộn** → tạo cảm giác chờ đợi; **sớm** → như "chạy trước" rồi đợi hoà âm đuổi kịp.
- Tạo căng theo hai cách: **bất ngờ**, và giai điệu rơi vào **hợp âm khác** nên va chạm nhẹ; nhưng vì giai điệu quen thuộc, người nghe vẫn có điểm tựa (xem [[trang-tri-giai-dieu-jazz]]).

## Dịch vạch nhịp (bar-line shift)
Cùng trang với [[superimposition-jazz|superimposition]], TJPS mô tả **dịch vạch nhịp**: chơi một câu "ám chỉ" hợp âm **sớm** vài phách (đón trước) hoặc **muộn** vài phách (trì hoãn). TJPS gắn kỹ thuật này với Lester Young, Coleman Hawkins và Charlie Parker. Trong cổ điển, cái tương tự là [[not-ngoai-hop-am|nốt đón và nốt trễ]].
Bài tập đa dạng tiết tấu (TJPS): chơi một câu, rồi lặp lại **chỉ đổi tiết tấu** (xem [[xay-dung-bai-solo]]).
`,
  },
  {
    slug: 'lick-va-trich-dan',
    title: 'Câu sáo, lick và trích dẫn',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['lick', 'licks', 'cliché jazz', 'câu sáo', 'quoting', 'trích dẫn trong solo', 'The Lick', 'ii-V lick', 'lick ii-V-I'],
    summary: 'Lick là những câu nhạc quen thuộc của ngôn ngữ jazz; câu sáo (cliché) là lick ai cũng nhận ra; trích dẫn (quoting) là chen giai điệu của một bài khác vào solo. Bài nêu cách TJPS dạy học lick qua ii – V – I và các ví dụ trích dẫn nổi tiếng của Ella Fitzgerald, Duke Ellington, Charlie Parker, Count Basie.',
    wiki: 'The_Lick',
    refs: [
      ['The Jazz Piano Site — Clichés & Quoting', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/cliches-quoting/'],
      ['The Jazz Piano Site — ii-V7-I Licks & Jazz Improvisation Exercises', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/ii-v7-i-licks-and-jazz-improvisation-exercises/'],
      ['The Jazz Piano Site — How to Practice Playing Jazz', 'https://www.thejazzpianosite.com/jazz-piano-lessons/the-basics/how-to-practice-playing-jazz/'],
      ['Wikipedia — The Lick', 'https://en.wikipedia.org/wiki/The_Lick'],
      ['USC Digital Folklore Archives — The Lick', 'https://folklore.usc.edu/the-lick-2/'],
    ],
    body: `
## Lick: từ vựng của ngôn ngữ jazz
Học jazz giống học một ngôn ngữ: **lick** là những "cụm từ" có sẵn. TJPS khuyên học lick vì hai lý do: làm **từ vựng cách nói câu** ([[dien-dat-cau-nhac|phrasing]]) và làm **chỗ dựa** khi bí ý (xem [[meo-ngau-hung-jazz]]). Nhưng một solo cần đủ chất liệu riêng để không chỉ là chuỗi lick ghép lại.

## Học lick qua ii – V – I (theo TJPS)
Bài học TJPS đưa năm lick mẫu ở Si giáng trưởng; cách học quan trọng hơn bản thân lick:
1. Chơi lick nhiều lần và tự hỏi **người solo đang nghĩ gì**.
2. Tách lick thành **[[luyen-hop-am-rai|hợp âm rải]]**, **đoạn âm giai** và **[[not-ngoai-hop-am|nốt lướt]] cromatic** (xem [[ngau-hung-doc-ngang]], [[not-tiep-can-jazz]]).
3. Để ý các thủ pháp lặp lại: **dịch một câu theo từng hợp âm**; **bắt đầu hoặc kết câu ở phách nhẹ** (xem [[tiet-tau-ngau-hung-jazz]]).
4. Chuyển lick sang **cả 12 giọng**, nhất là các giọng yếu; tập chậm — tốc độ đến từ độ chính xác.
::staff treble D4=Dm7 F4 A4 C5 / B4=G7 A4 G4 F4 / E4=Cmaj7 | Một câu minh hoạ cách phân tích trên ii – V – I: hợp âm rải Dm7, đoạn âm giai đi xuống từ nốt 3 của G7, kết vào nốt 3 (E) của Cmaj7 — nốt dẫn hướng C → B → E nối các hợp âm
Với [[ii-v-i|ii – V – i thứ]], TJPS gợi ý: [[dieu-thuc|Locrian]] ([[hop-am-bay|nửa giảm]]) trên ii, altered trên V7, [[am-giai-thu|thứ giai điệu]] trên i (xem [[dieu-thuc-thu-giai-dieu]]).

## "The Lick" — câu sáo thành trò đùa
Câu bảy nốt với các bậc **1 – 2 – ♭3 – 4 – 2 – ♭7 – 1** xuất hiện trong vô số solo; cái tên "The Lick" ra đời trên mạng xã hội những năm 2010 và nổi tiếng nhờ một video tổng hợp năm 2011. Nhạc công ngày nay chèn nó vào solo như **một câu đùa nội bộ**.
::staff treble C4 D4 Eb4 F4 D4 Bb3 C4 | "The Lick" trên C (thứ): C – D – E♭ – F – D – B♭ – C

## Trích dẫn (quoting)
TJPS: chơi **giai điệu của một bài hoàn toàn khác** trên tiến trình đang chơi — một kỹ thuật vui và kéo khán giả vào. Ví dụ TJPS nêu:
- **Ella Fitzgerald** — "Blue Skies": trong đoạn hát scat, trích Hành khúc cưới của [[richard-wagner|Wagner]] và *Rhapsody in Blue* của [[george-gershwin|Gershwin]].
- **[[duke-ellington|Duke Ellington]]** — "Black and Tan Fantasy": trích Hành khúc tang lễ của [[frederic-chopin|Chopin]].
- **Charlie Parker** — "White Christmas": giấu "Jingle Bells".
- **Count Basie** — "April in Paris": trích "Pop Goes the Weasel".
- TJPS gợi ý nghe hầu hết các solo của **Dexter [[ly-thuyet-hoc-am-nhac-gordon|Gordon]]** để học cách trích dẫn.
Trích dẫn thường **ngắn** (một hai ô), kín đáo. TJPS cũng xếp trích dẫn và câu sáo vào các cách **giải toả căng thẳng** — tai người nghe "về nhà" khi nhận ra một giai điệu quen (xem [[choi-ngoai-jazz]]). Trích dẫn để giễu nhại cũng có trong nhạc cổ điển: xem [[phan-tich-golliwogg-cakewalk]].
`,
  },
  {
    slug: 'superimposition-jazz',
    title: 'Superimposition: chồng hợp âm lên hợp âm',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['superimposition', 'chồng hợp âm', 'chồng tiến trình', 'superimpose', 'hợp âm rải mở rộng'],
    summary: 'Superimposition là ngẫu hứng theo một hợp âm hay cả một tiến trình khác chồng lên tiến trình đang chơi — từ việc đơn giản như rải Em7 trên Cmaj7 (ra 3 – 5 – 7 – 9), D♭7 trên G7 (thay thế tritone), đến chồng cả chuỗi ii – V lên một hợp âm đứng yên. TJPS gắn kỹ thuật này với Coltrane, Lennie Tristano, Dave Liebman.',
    refs: [
      ['The Jazz Piano Site — Bar Line Shift & Superimposition', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/bar-line-shift-and-superimposition/'],
      ['The Jazz Piano Site — Sheets of Sound Explained (John Coltrane)', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/sheets-sound-explained-john-coltrane/'],
      ['The Jazz Piano Site — Extended Arpeggios and Triad Pairs', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/extended-arpeggios-and-triad-pairs/'],
    ],
    body: `
## Định nghĩa
TJPS: **superimposition** là chơi **một tiến trình hợp âm hoàn toàn khác** chồng lên tiến trình đang có — một kỹ thuật hiện đại hơn, gắn với **John Coltrane**, **Lennie Tristano**, **Dave Liebman**; nó có thể tạo ra [[da-dieu-tinh|đa điệu tính]].

## Ba mức độ
**1. Một [[luyen-hop-am-rai|hợp âm rải]] khác trên một hợp âm** — nốt của hợp âm rải trở thành [[hop-am-mo-rong|nốt căng]] của hợp âm nền:
::grand E4+G4+B4+D5/C3=Em7_/_C Db4+F4+Ab4+Cb5/G2=D♭7_/_G | Em7 rải trên Cmaj7 = nốt 3 – 5 – 7 – 9; D♭7 rải trên G7 = ♭5 – ♭7 – ♭9 – 3 (âm thanh của [[thay-the-tritone|thay thế tritone]])
(Nốt C♭ trong D♭7 chính là B — nốt 3 của G7.) Đây cũng là ý tưởng của [[upper-structure]], chỉ khác là chơi rải trong giai điệu thay vì bấm hợp âm.

**2. Một chuỗi hợp âm trên một hợp âm đứng yên** — ví dụ trên hai ô Cmaj7, chơi [[cau-nhac|câu nhạc]] theo Dm7 – G7 rồi giải quyết về C ở phách đầu ô sau. TJPS khuyên chọn **tiến trình có cấu trúc mạnh** (ii – V – I, V – I) để câu nhạc giữ được logic, và dùng câu **liền bậc + hợp âm rải**, tránh nhảy xa.

**3. Cả một hệ thống khác** — [[vong-coltrane|vòng Coltrane]] chồng lên một [[ii-v-i]]; các hợp âm chồng nhanh trong [[sheets-of-sound|"sheets of sound"]].

## Nghe ra superimposition khi phân tích
TJPS liệt kê superimposition và [[tiet-tau-ngau-hung-jazz|dịch vạch nhịp]] trong số những điều cần tìm khi [[phan-tich-solo-jazz|phân tích một solo]].
Liên quan: [[triad-pairs]], [[choi-ngoai-jazz]], [[hop-am-chong]].
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
      ['The Jazz Piano Site — Sheets of Sound Explained (John Coltrane)', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/sheets-sound-explained-john-coltrane/'],
      ['Wikipedia — Sheets of sound', 'https://en.wikipedia.org/wiki/Sheets_of_sound'],
      ['All About Jazz — John Coltrane: Sheets of Sound', 'https://allaboutjazz.com/news/john-coltrane-sheets-of-sound/'],
    ],
    body: `
## Tên gọi
- Nhà phê bình **Ira Gitler** (tạp chí *Down Beat*) đặt cụm từ này trong **ghi chú album *Soultrane*** của John Coltrane (Prestige, **1958**), gắn với phần kết của bài "Russian Lullaby". Ông đã mô tả hiện tượng này từ ghi chú album *Traneing In* (1957) và dùng lại cụm từ trong bài "Trane on the Track" (*Down Beat*, 16/10/1958).
- Gitler nói ông dùng cụm từ như **lời khen**, không phải phê bình.

## Kỹ thuật (theo TJPS)
- **Chuỗi nốt rất nhanh**, nhóm **lẻ và bất đối xứng**, không bám vào nhóm 4 hay 8 nốt đều đặn.
- **Chồng hợp âm mới** lên hợp âm đang vang — đây là [[superimposition-jazz|superimposition]] ở tốc độ cao. TJPS dẫn ý của chính Coltrane về việc chồng các hợp âm lên C7, trong đó có **E♭7** và **F♯7**.
| [[hop-am-chong|Hợp âm chồng]] | Trên | Các nốt so với hợp âm nền |
|---|---|---|
| D♭7 (D♭ – F – A♭ – C♭) | G7 | ♭5 – ♭7 – ♭9 – 3 |
| E♭7 (E♭ – G – B♭ – D♭) | C7 | ♯9 – 5 – ♭7 – ♭9 |
| F♯7 (F♯ – A♯ – C♯ – E) | C7 | ♯11 – ♭7 – ♭9 – 3 |
::grand Eb4+G4+Bb4+Db5/C3+E3+Bb3=E♭7_/_C7 F#4+A#4+C#5+E5/C3+E3+Bb3=F♯7_/_C7 | Hai hợp âm Coltrane chồng lên C7: cả hai đều cho các nốt căng biến hoá (♭9, ♯9, ♯11) — gần với âm giai [[am-giai-bat-cung|bát cung]] và [[upper-structure]]
- Vì đi rất nhanh, nhiều nốt chỉ là **[[not-ngoai-hop-am|nốt lướt]]** — TJPS nhắc không nên dừng lâu trên [[not-tranh-va-quang-nghich|nốt tránh]].

## Sau "sheets of sound"
Ngay sau giai đoạn này, Coltrane hệ thống hoá việc chia quãng 8 thành ba phần bằng nhau trong "Giant Steps" (1959) — xem [[vong-coltrane]]. Khi phân tích solo Coltrane, các chuỗi nhóm lẻ dày đặc là dấu hiệu nhận ra "sheets of sound" (xem [[phan-tich-solo-jazz]]).
`,
  },
  {
    slug: 'triad-pairs',
    title: 'Triad pairs: cặp hợp âm ba',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['triad pairs', 'triad pair', 'cặp hợp âm ba', 'âm giai sáu nốt', 'extended arpeggios', 'Bergonzi Hexatonics'],
    summary: 'Triad pairs là hai hợp âm ba (thường cách nhau một cung) không có nốt chung, chơi xen kẽ để tạo một âm giai sáu nốt: C + D trên Cmaj7 cho 1 – 9 – 3 – ♯11 – 5 – 13. Âm thanh hiện đại, góc cạnh — TJPS gợi ý nghe Chick Corea, McCoy Tyner, Oliver Nelson.',
    refs: [
      ['The Jazz Piano Site — Extended Arpeggios and Triad Pairs', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/extended-arpeggios-and-triad-pairs/'],
      ['Alfred — Gary Campbell, Triad Pairs for Jazz (2001)', 'https://www.alfred.com/products/triad-pairs-for-jazz-00-0482b'],
      ['jazzguitar.be — Hexatonics (thảo luận sách của Jerry Bergonzi)', 'https://www.jazzguitar.be/forum/improvisation/105727-hexatonics.html'],
    ],
    body: `
## Định nghĩa
TJPS: **hai [[hop-am-ba|hợp âm ba]] cách nhau một bậc, không có nốt chung**. Ví dụ của TJPS: **C trưởng + D trưởng trên Cmaj7** — mọi nốt đều là nốt hợp âm hoặc [[hop-am-mo-rong|nốt căng]] dùng được.
::staff treble C4+E4+G4=C D4+F#4+A4=D C4 D4 E4 F#4 G4 A4 | Cặp C + D: sáu nốt C – D – E – F♯ – G – A = nốt 1 – 9 – 3 – ♯11 – 5 – 13 của Cmaj7(♯11) — âm giai Lydian thiếu nốt 7
Hai hợp âm ba không chung nốt luôn ghép thành một **âm giai sáu nốt** ([[neo-riemann|hexatonic]]) — nhà sư phạm Jerry Bergonzi dành cả một tập sách (*Hexatonics*, 2007) cho cách nhìn này.

## Cách dùng (theo TJPS)
- Gán **một cặp cho mỗi hợp âm**, rồi **xen kẽ hai hợp âm ba** khi [[ngau-hung-piano|ngẫu hứng]] — rải, đảo thứ tự, đổi [[the-dao-hop-am|thể đảo]].
- Vì hai hợp âm ba đều là những hình quen tay, người chơi có thể chơi nhanh và "góc cạnh" mà vẫn chính xác.
- Chọn cặp theo [[he-thong-hop-am-am-giai|âm giai của hợp âm]]: ví dụ trên hợp âm át biến hoá, hai hợp âm ba lấy từ âm giai [[dieu-thuc-thu-giai-dieu|altered]].

## Nghe
TJPS gợi ý: **[[chick-corea|Chick Corea]]** — *Now He Sings, Now He Sobs* (1968); **[[mccoy-tyner|McCoy Tyner]]** — "Passion Dance" (*The Real McCoy*, 1967); **Oliver Nelson** — "Stolen Moments" (1961). Sách tham khảo: Gary Campbell, *Triad Pairs for Jazz* (Alfred, 2001).
Liên quan: [[superimposition-jazz]], [[upper-structure]] (hợp âm ba trên tritone khi đệm), [[am-giai-doi-xung-jazz]] (âm giai tăng cũng là hai [[hop-am-ba-tang|hợp âm ba tăng]] ghép lại).
`,
  },
  {
    slug: 'ngau-hung-hop-am',
    title: 'Ngẫu hứng bằng hợp âm',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['chordal improvisation', 'ngẫu hứng bằng hợp âm', 'solo bằng hợp âm', 'chord solo', 'block chord solo'],
    summary: 'Thay vì solo bằng một dòng giai điệu, người chơi giữ hợp âm ở tay phải và ngẫu hứng bằng các ngón trên cùng hoặc bằng cách rải hợp âm — "nghe phức tạp nhưng thực ra khá đơn giản" (TJPS). Gắn với Gene Harris, Oscar Peterson và lối block chords của Shearing, Red Garland.',
    refs: [
      ['The Jazz Piano Site — Chordal Improvisation vs Melody Line Improvisation', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/chordal-improvisation/'],
      ['The Jazz Piano Site — Advanced Locked Hands', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/advanced-locked-hands/'],
      ['Wikipedia — Locked hands style', 'https://en.wikipedia.org/wiki/Locked_hands_style'],
    ],
    body: `
## Cách làm (theo TJPS)
TJPS nhận xét ngẫu hứng bằng hợp âm "**nghe rất phức tạp và thú vị, nhưng thực ra khá đơn giản**":
1. **Giữ một hợp âm** ở tay phải.
2. **[[ngau-hung-piano|Ngẫu hứng]] quanh nó**: hoặc **rải hợp âm**, hoặc dùng **các ngón trên cùng** chạy giai điệu trong khi **ngón dưới giữ hợp âm**.
3. Hợp âm không cần là [[hop-am-bay|hợp âm 7]] cơ bản: có thể dựng trên [[xep-hop-am|thế bấm không gốc]] hoặc [[hoa-am-quang-bon|thế bấm quãng 4]] — nhưng hãy học từng thế bấm riêng trước.
::grand E4+G4+A4+C5+E5/C3=C6 F4+A4+C5+D5+F5/D3=Dm7 | Minh hoạ: ngón dưới tay phải giữ hợp âm, hai ngón trên chơi giai điệu theo quãng 3 — giai điệu và hoà âm đi cùng nhau

Dạng "khối" nhất là [[hop-am-khoi|locked hands]]: mỗi nốt giai điệu một hợp âm. TJPS (bài locked hands nâng cao) gợi ý có thể [[tai-hoa-am|thay hợp âm]] V bằng hợp âm giảm cách nốt gốc nửa cung — "miễn là giữ được khung I – V – I – V bên dưới".

## Nghe
TJPS gợi ý: **Art Blakey** — "Moanin'" (1958); **[[oscar-peterson|Oscar Peterson]]** — "Night Train" (thu âm 1962); **Gene Harris**, người dùng kỹ thuật này rất nhiều trong các solo với nhóm Three Sounds. Lối hợp âm khối của **George Shearing** và **Red Garland**: xem [[hop-am-khoi]].

## So với solo một dòng giai điệu
| | Một dòng giai điệu | Bằng hợp âm |
|---|---|---|
| Âm thanh | Linh hoạt, như kèn | Dày, như cả dàn kèn |
| Tốc độ | Nhanh được | Chậm hơn, nặng hơn |
| Vai trò trong solo | Phần lớn thời lượng | Thường để **lên cao trào** (xem [[xay-dung-bai-solo]]) |
`,
  },
  {
    slug: 'xay-dung-bai-solo',
    title: 'Xây dựng một bài solo',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['build an improvisation', 'xây dựng solo', 'cấu trúc bài solo', 'improvisational approaches', 'cách tiếp cận ngẫu hứng', 'motivic development jazz'],
    summary: 'Một bài solo hay có hướng đi: bắt đầu từ giai điệu và âm giai nền, phát triển một motif bằng cách đổi từng yếu tố, để căng thẳng lên xuống như sóng, kết câu vào nốt mạnh. Bài cũng tóm bốn "trục" mà các thế hệ jazz lần lượt nhấn mạnh: giai điệu, hoà âm, tiết tấu, âm sắc.',
    refs: [
      ['The Jazz Piano Site — How To Develop Your Improvisation From Beginner To Advanced', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/how-to-develop-your-improvisation-from-beginner-to-advanced/'],
      ['The Jazz Piano Site — Creating and Resolving Tension', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/creating-resolving-tension/'],
      ['The Jazz Piano Site — Top 3 Improvisation Exercises', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/top-3-improvisation-exercises-improve-soloing/'],
      ['The Jazz Piano Site — Approaches to Improvisation', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/approaches-to-improvisation/'],
    ],
    body: `
## Các tầng chất liệu (theo TJPS)
Trên "Autumn Leaves", TJPS xếp chất liệu từ dễ đến khó:
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
Bài luyện "lặp lại với một thay đổi" của TJPS: tạo một [[motif]] ngắn, rồi lặp lại, **mỗi lần đổi một yếu tố** — một nốt, [[tiet-tau-ngau-hung-jazz|tiết tấu]], hay dịch sang hợp âm khác. Đây chính là [[bien-doi-chu-de|phát triển chủ đề]] trong nhạc cổ điển, ở quy mô nhỏ và ngay trong lúc chơi.

## Một gợi ý về hình dáng tổng thể
TJPS không đưa khuôn mẫu cố định cho cả bài solo. Theo kinh nghiệm sư phạm chung (không phải quy tắc), nhiều solo đi từ **thưa, thấp, đơn giản** đến **dày, cao, phức tạp**: thêm dần mật độ nốt, mở rộng [[cao-do|âm vực]], tăng [[cuong-do|cường độ]], có thể chuyển sang [[ngau-hung-hop-am|solo bằng hợp âm]] ở cao trào, rồi lắng lại để nhường người chơi sau. Xem cách nhìn của nghiên cứu ở [[ngau-hung-jazz]] (Berliner).

## Bốn "trục" ngẫu hứng trong lịch sử (TJPS)
| Trục | Ví dụ |
|---|---|
| **Giai điệu** | Trang trí giai điệu; [[jazz-dieu-thuc|âm giai điệu thức]]; phát triển motif (Sonny Rollins) |
| **Hoà âm** | Biến hoá và [[thay-the-hop-am|thay thế hợp âm]]; Coleman Hawkins chuyển [[ngau-hung-piano|ngẫu hứng]] từ dựa trên giai điệu sang **dựa trên hoà âm** ("Body and Soul", 1939) |
| **Tiết tấu** | [[cam-nhan-phach|Groove]], ví dụ [[dieu-dem-pho-bien|clave]] Latin |
| **[[am-sac|Âm sắc]]** | Tiếng ồn, vi cung (free jazz — xem [[post-bop-free-jazz]]) |
Viết ra thay vì ngẫu hứng — cùng công cụ, có thời gian chọn lọc: [[sang-tac-jazz]].
`,
  },
  {
    slug: 'phan-tich-solo-jazz',
    title: 'Phân tích một solo jazz',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['phân tích solo jazz', 'analyse a jazz solo', 'phân tích bản chép solo', 'Weimar Jazz Database', 'Jazzomat'],
    summary: 'Cách TJPS phân tích một solo (ví dụ "Straight, No Chaser" của Miles Davis, 1958): xác định hợp âm từng vòng, tô màu từng nốt là nốt hợp âm, nốt căng hay nốt tránh, xem nốt cuối mỗi câu, rồi tìm motif, mô tiến, trích dẫn, superimposition. Kèm các nguồn nghiên cứu mở như Weimar Jazz Database.',
    refs: [
      ['The Jazz Piano Site — Analysing a Jazz Solo: Straight, No Chaser (Miles Davis)', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/analysing-a-jazz-solo/'],
      ['The Jazz Piano Site — How to Analyse a Chord Progression', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/how-to-analyse-a-chord-progression-harmonic-analysis/'],
      ['Jazzomat Research Project — Weimar Jazz Database', 'https://jazzomat.hfm-weimar.de/dbformat/dboverview.html'],
      ['Frontiers in Digital Humanities (2018) — về Weimar Jazz Database', 'https://www.frontiersin.org/journals/digital-humanities/articles/10.3389/fdigh.2018.00001/full'],
      ['Duke University — Berliner, Thinking in Jazz (1994)', 'https://music.duke.edu/books/thinking-jazz-infinite-art-improvisation'],
    ],
    body: `
Phân tích solo là cách học jazz truyền thống nhất: các nhạc công **chép lại** (transcribe) solo từ bản thu, chơi theo, rồi hiểu vì sao nó hay (xem [[ngau-hung-jazz]] — nghiên cứu của Paul Berliner). Bài này nối kỹ năng [[phan-tich-tien-trinh-jazz|phân tích tiến trình]] với các kỹ thuật [[ngau-hung-piano|ngẫu hứng]] trong mục.

## Các bước (theo TJPS)
TJPS phân tích cả năm solo trong "**Straight, No Chaser**" (album *[[jazz-dieu-thuc|Milestones]]* của Miles Davis, 1958):
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
- **Weimar Jazz Database** (dự án Jazzomat, Học viện Âm nhạc [[franz-liszt|Franz Liszt]] Weimar, 2012–2017): kho các solo jazz được chép và chú thích hợp âm, phách; dữ liệu mở (MIDI, thư viện Python MeloSpyLib) — 456 solo tính đến 2017.
- **Paul Berliner**, *Thinking in Jazz* (1994): nghiên cứu cách nhạc công học ngẫu hứng, kèm nhiều bản chép.
`,
  },
  {
    slug: 'meo-ngau-hung-jazz',
    title: 'Mẹo ngẫu hứng jazz và cách xử lý nốt sai',
    category: 'jazz',
    also: ['improvisation'],
    aliases: ['improvisation tips', 'mẹo ngẫu hứng', 'mistakes', 'making mistakes', 'improvisation exercises', 'bài luyện ngẫu hứng jazz', 'không có nốt sai'],
    summary: 'Những lời khuyên thực hành của TJPS cho người học ngẫu hứng jazz: có một âm giai nền để quay về, kết câu ở nốt dẫn hướng, chừa khoảng trống, học lick, hát điều mình chơi — và khi lỡ chơi sai: lặp lại cho thành cố ý, sửa nửa cung, biến nó thành một chuỗi cromatic.',
    refs: [
      ['The Jazz Piano Site — Improvisation Tips', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/improvisation-tips/'],
      ['The Jazz Piano Site — Making Mistakes', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/making-mistakes/'],
      ['The Jazz Piano Site — Top 3 Improvisation Exercises', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/top-3-improvisation-exercises-improve-soloing/'],
      ['The Jazz Piano Site — Improvisation Stages & Thought Process', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-improvisation/the-4-stages-of-improvisation/'],
      ['The Jazz Piano Site — Modal Jazz (bài luyện một nốt)', 'https://www.thejazzpianosite.com/jazz-piano-lessons/modern-jazz-theory/modal-jazz/'],
    ],
    body: `
## Mẹo (theo TJPS)
- **Một âm giai nền** cho cả bài và **quay về đó khi lạc**; [[am-giai-ngu-cung|ngũ cung]] và [[am-giai-blues|âm giai blues]] rất hợp vì 5–6 nốt của chúng nằm trong nhiều âm giai (xem [[ngau-hung-doc-ngang|bản đồ hợp âm]]).
- **Kết câu ở [[not-dan-huong|nốt dẫn hướng]]** (nốt 3 hoặc 7).
- Chơi nốt "ngoài" **có cấu trúc**: lướt nhanh tới nốt hợp âm, theo khuôn mẫu ([[mau-lap-chu-ky]]), hoặc bám vào giai điệu (xem [[choi-ngoai-jazz]]).
- **Chừa khoảng trống**: người mới hay nhồi quá nhiều nốt; khoảng nghỉ cho thời gian để nghĩ.
- **Học lick** làm từ vựng và chỗ dựa; **nghe thật nhiều** (xem [[lick-va-trich-dan]]).

## Các bài luyện (mô tả phương pháp)
| Bài luyện | Mục đích | Nguồn TJPS |
|---|---|---|
| **Không dừng**: chơi liên tục, bí thì dùng âm giai, chạy ngón hoặc lặp câu | Giữ mạch, không "đứng hình" | Top 3 Exercises |
| **Nhắm nốt dẫn hướng** | Bám tiến trình, kết câu chắc | Top 3 Exercises |
| **Lặp lại với một thay đổi** | [[motif|Phát triển motif]] | Top 3 Exercises |
| **Nhấn mỗi n nốt** (2–5) | Đa dạng tiết tấu | Jazz Rhythm & [[dien-dat-cau-nhac|Phrasing]] |
| **Solo một nốt**: giữ một cao độ qua nhiều hợp âm — nó lần lượt thành các bậc khác nhau | Nghe màu của từng hợp âm | [[jazz-dieu-thuc|Modal Jazz]] |
| **Hát điều mình chơi**: nghe câu trong đầu rồi mới chơi | Để đầu óc chọn nốt; [[oscar-peterson|Oscar Peterson]] và [[bud-powell|Bud Powell]] có thể được nghe thấy hát theo trong bản thu | [[ngau-hung-piano|Improvisation]] Stages |
Các bài luyện chung của mục ngẫu hứng: [[phuong-phap-luyen-ngau-hung]].

## Khi lỡ chơi sai
TJPS bắt đầu từ một thực tế: đã sáng tác tại chỗ thì **thỉnh thoảng sẽ có nốt sai**. Trang này dẫn một câu thường được gán cho [[bill-evans|Bill Evans]]: "*không có nốt sai, chỉ có cách giải quyết sai*" (câu này cũng hay được gán cho người khác). Các cách cứu:
1. **Lặp lại câu và nhấn nốt sai** — lặp lại khiến nó nghe như cố ý.
2. **Lặp lại và sửa** sang nốt "đúng".
3. **Biến nốt sai thành một chuỗi cromatic** hoặc [[mau-lap-chu-ky|mẫu lặp]], rồi giải quyết.
4. Bí thì **đi tới nốt dẫn hướng hoặc nốt hợp âm gần nhất** (thường chỉ cách nửa cung — xem [[not-tiep-can-jazz]]).
TJPS cũng nhắc: căng thẳng không được giải quyết "sẽ nghe như chơi sai nốt" — vấn đề thường là **không giải quyết**, chứ không phải nốt.
Ví dụ người thật (TJPS kể, kèm chữ "được cho là"): Tommy Flanagan trên "[[vong-coltrane|Giant Steps]]" (1959) đã phải lùi về chỉ chơi hợp âm; Miles Davis vào lại giai điệu sớm một ô trong "Prince of Darkness" (1967).
Liên quan: [[hoi-hop-bieu-dien]], [[ngau-hung-ung-tac]].
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
      ['The Jazz Piano Site — Modal Jazz Improvisation & Harmony', 'https://www.thejazzpianosite.com/jazz-piano-lessons/modern-jazz-theory/modal-jazz/'],
      ['The Jazz Piano Site — Tonal vs Modal Harmony', 'https://www.thejazzpianosite.com/jazz-piano-lessons/modern-jazz-theory/tonal-harmony-vs-modal-harmony/'],
      ['The Jazz Piano Site — So What Chord', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-voicings/so-what-chord/'],
      ['Wikipedia — Modal jazz', 'https://en.wikipedia.org/wiki/Modal_jazz'],
      ['Wikipedia — Kind of Blue', 'https://en.wikipedia.org/wiki/Kind_of_Blue'],
      ['Wikipedia — So What (Miles Davis composition)', 'https://en.wikipedia.org/wiki/So_What_(Miles_Davis_composition)'],
      ['Wikipedia — Impressions (John Coltrane album)', 'https://en.wikipedia.org/wiki/Impressions_(John_Coltrane_album)'],
      ['The Jazz Piano Site — Reharmonizing a Tonal Jazz Song into a Modal Jazz Song', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-reharmonization/turning-tonal-song-modal-song/'],
    ],
    body: `
## Đặc điểm (theo TJPS)
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
- Đệm: các hợp âm quãng 4 **di chuyển song song trong điệu thức** (lối của [[mccoy-tyner|McCoy Tyner]] thập niên 1960 — TJPS) — xem [[hoa-am-quang-bon]].
- Solo: để nghe ra điệu thức, nhấn **nốt đặc trưng** (B trong Rê Dorian); dùng [[am-giai-ngu-cung|ngũ cung]], [[choi-ngoai-jazz|side-slipping]] để tạo căng trên nền tĩnh.
## Biến một bài điệu tính thành bài điệu thức (TJPS)
- **Bỏ hẳn tiến trình gốc**, thay bằng **một** (hoặc một hai) hợp âm kéo dài — không phải gộp từng ii – V – I.
- Thêm **vamp / riff / [[ostinato|ostinato]]** dưới giai điệu: tự viết, hoặc mượn một vamp điệu thức quen ("So What", "Maiden Voyage"); [[ky-hieu-hop-am|lead sheet]] thường không ghi vamp.
- Hợp nhất khi giai điệu **phần lớn trong một giọng**, đi liền bậc, **tránh tritone trong giọng** và tránh rải hợp âm.
- TJPS: thế bấm **xếp chồng quãng 3** nghe điệu tính, thế bấm **quãng 4** nghe điệu thức.
- Ví dụ: John Coltrane biến "My Favorite Things" và "Chim Chim Cher-ee" (hai bài điệu tính) thành bài điệu thức.
::grand D4+G4+C5/D3+A3=Dm11_(D_Dorian) | Minh hoạ một vamp tĩnh: tay phải xếp quãng 4 (D – G – C) trên quãng 5 D – A — có thể thay cho cả chuỗi Dm7 – G7 – Cmaj7 nếu giai điệu nằm trong các phím trắng
Ngược lại, đổi thể loại một bài pop sang điệu thức: [[doi-nhip-the-loai-jazz]].

Bước tiếp theo trong lịch sử: [[post-bop-free-jazz]].

Hợp âm So What: [[hop-am-so-what-barron]].
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
      ['The Jazz Piano Site — Post-bop Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/modern-jazz-theory/post-bop/'],
      ['The Jazz Piano Site — Free Jazz & Atonality Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/modern-jazz-theory/free-jazz/'],
      ['The Jazz Piano Site — A Brief Summary of Modern Jazz', 'https://www.thejazzpianosite.com/jazz-piano-lessons/modern-jazz-theory/brief-summary-modern-jazz/'],
      ['Wikipedia — Post-bop', 'https://en.wikipedia.org/wiki/Post-bop'],
      ['Wikipedia — Miles Davis Quintet', 'https://en.wikipedia.org/wiki/Miles_Davis_Quintet'],
      ['Wikipedia — Free Jazz: A Collective Improvisation', 'https://en.wikipedia.org/wiki/Free_Jazz:_A_Collective_Improvisation'],
      ['Wikipedia — Ornette Coleman', 'https://en.wikipedia.org/wiki/Ornette_Coleman'],
    ],
    body: `
## Bức tranh chung
TJPS tóm tắt [[phong-cach-jazz|lịch sử jazz]] hiện đại như một quá trình **giảm dần sự phụ thuộc vào hợp âm**: [[jazz-dieu-thuc|jazz điệu thức]] giảm số hợp âm; free jazz bỏ hẳn hợp âm (ít nhất ở phiên bản của Ornette Coleman); post-bop đứng giữa.

## Free jazz — "tự do hoàn toàn"
- Bỏ **hợp âm cố định, nhịp cố định và hình thức cố định**; thường **[[ngau-hung-piano|ngẫu hứng]] tập thể**.
- **Ornette Coleman**: album *The Shape of Jazz to Come* (Atlantic, 1959); *Free Jazz: A Collective Improvisation* (thu ngày 21/12/1960, phát hành 1961) — khoảng 37 phút, một lần thu, **hai nhóm [[the-loai|tứ tấu]]** mỗi nhóm một kênh stereo; tên "free jazz" lấy từ album này. Coleman đặt ra khái niệm **"harmolodics"**: hoà âm, giai điệu, tiết tấu… có vai trò ngang nhau.
- **Cecil Taylor** (piano): tránh giọng và trung tâm điệu tính bằng **[[am-cum|âm cụm]]**; TJPS gợi ý nghe album *Indent*.
- Vì không có trung tâm giọng, free jazz là **[[phi-dieu-tinh|phi điệu tính]]** — song song với nhạc tiên phong cổ điển cùng thời (xem [[thoi-ky-the-ky-20]]).
::wiki Ornette_Coleman | Ornette Coleman (ảnh đầu bài Wikipedia *Ornette Coleman*)

## Post-bop — "tự do có kiểm soát"
TJPS: "Nếu free jazz là *tự do hoàn toàn* thì post-bop là *tự do có kiểm soát*" — trộn bebop, hard bop, [[dieu-thuc|điệu thức]] và free.
- **Nhóm ngũ tấu thứ hai của Miles Davis** (1964–68): [[herbie-hancock|Herbie Hancock]] (piano), Wayne Shorter (saxophone), Ron Carter (bass), Tony Williams (trống). Các album: *E.S.P.* (album phòng thu đầu tiên), *Miles Smiles*, *Sorcerer*, *Nefertiti*.
- Trên sân khấu, nhóm thường bỏ hợp âm và giai điệu của một standard nhưng **giữ hình thức và nhịp** — lối chơi TJPS gọi là "**time, no changes**" (có nhịp, không hợp âm).
- Hợp âm trong post-bop thường không theo chức năng: [[constant-structures]], hợp âm sus, [[hoa-am-quang-bon|quãng 4]].
Sau đó Davis chuyển sang fusion (*In a Silent Way*, *Bitches Brew*).

## Với người học piano
- Nghe trước khi phân tích: free jazz không có "đáp án" hợp âm; hãy nghe sự tương tác giữa các nhạc công.
- Chuẩn bị bằng [[ngau-hung-tu-do|ngẫu hứng tự do]] và [[choi-ngoai-jazz|chơi "ngoài"]]; xem thêm [[keith-jarrett|Keith Jarrett]] và lối "chơi từ không có gì" (*The Köln Concert*, 1975).
`,
  },
  {
    slug: 'phong-cach-jazz',
    title: 'Các phong cách jazz: lịch sử ngắn',
    category: 'jazz',
    aliases: ['jazz styles', 'jazz genres', 'lịch sử jazz', 'phong cách jazz', 'ragtime', 'boogie-woogie', 'boogie woogie', 'Dixieland', 'New Orleans jazz', 'bebop', 'cool jazz', 'hard bop', 'soul jazz', 'jazz fusion', 'jazz-rock', 'Latin jazz', 'Afro-Cuban jazz', 'jazz Latin', 'montuno', 'tumbao', 'smooth jazz'],
    summary: 'Khoảng một thế kỷ jazz qua các phong cách nối tiếp và chồng lấn: ragtime, New Orleans, stride, boogie-woogie, swing, bebop, cool, hard bop và soul jazz, modal, free, post-bop, fusion, Latin (Afro-Cuban, bossa nova), gospel jazz và smooth jazz — mỗi phong cách với đặc điểm nhạc, vai trò của piano, nghệ sĩ và bản thu mốc.',
    wiki: 'Jazz',
    refs: [
      ['The Jazz Piano Site — Jazz Genres', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/'],
      ['The Jazz Piano Site — Early Jazz vs Modern Jazz Piano', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/early-jazz-vs-modern-jazz-piano/'],
      ['The Jazz Piano Site — Swing Music Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/swing-music-explained/'],
      ['The Jazz Piano Site — Bebop Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/bebop-explained/'],
      ['The Jazz Piano Site — Cool Jazz Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/cool-jazz-explained/'],
      ['The Jazz Piano Site — Hard Bop & Soul Jazz Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/hard-bop-soul-jazz-explained/'],
      ['The Jazz Piano Site — Afro-Cuban Latin Jazz', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/afro-cuban-latin-jazz/'],
      ['The Jazz Piano Site — How to Play Bossa Nova', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/how-to-play-bossa-nova/'],
      ['The Jazz Piano Site — Jazz-Rock Fusion Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/jazz-rock-fusion-explained/'],
      ['The Jazz Piano Site — Smooth Jazz & Crossover Jazz', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-genres/smooth-jazz-crossover-jazz/'],
      ['Britannica — Ragtime', 'https://www.britannica.com/art/ragtime'],
      ['Wikipedia — Swing era', 'https://en.wikipedia.org/wiki/Swing_era'],
      ["Wikipedia — Pinetop's Boogie Woogie", "https://en.wikipedia.org/wiki/Pinetop's_Boogie_Woogie"],
      ['Wikipedia — Afro-Cuban jazz', 'https://en.wikipedia.org/wiki/Afro-Cuban_jazz'],
      ['Wikipedia — Bitches Brew', 'https://en.wikipedia.org/wiki/Bitches_Brew'],
    ],
    body: `
Các phong cách dưới đây **nối tiếp và chồng lấn** nhau; mốc năm chỉ gần đúng. Cột "piano" tóm tắt cách TJPS mô tả vai trò của piano qua từng thời (bài "Early Jazz vs Modern Jazz Piano").

## Jazz sơ kỳ (khoảng 1897 – 1930)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Ragtime** | ~1897–1918 (Britannica) | Tay phải [[dao-phach|đảo phách]] trên tay trái kiểu hành khúc; hình thức nhiều đoạn (strain) như hành khúc | Tay phải chơi các mẫu đảo phách quanh nốt hợp âm | [[scott-joplin|Scott Joplin]], "Maple Leaf Rag" (1899, bản in, bốn đoạn) |
| **New Orleans / Dixieland** | 1910s–20s | Cả nhóm cùng [[ngau-hung-piano|ngẫu hứng]] | [[kiem-soat-toc-do|Giữ nhịp]] đều trên phách trong nhóm nhịp điệu (theo TJPS) | "Livery Stable Blues" (Original Dixieland Jass Band, 26/2/1917), thường gọi là đĩa jazz đầu tiên |
| **Stride** | 1910s–30s | Lớn lên từ ragtime | Tay trái luân phiên bass ở phách 1 – 3 và hợp âm ở phách 2 – 4 — xem [[stride-piano]] | [[james-p-johnson|James P. Johnson]], "Carolina Shout" (thu 1921) |
| **Boogie-woogie** | Đĩa đầu 1928; thịnh hành ~1938–40s | Bass [[ostinato]] "lăn" ở tay trái trên khung [[blues-12-nhip|blues 12 ô]] | Tay trái gần như là cả một nhóm nhịp điệu | Pinetop Smith, "Pinetop's Boogie Woogie" (thu 29/12/1928) |
::staff bass C3 E3 G3 A3 Bb3 A3 G3 E3 | Minh hoạ một mẫu bass boogie-woogie quen thuộc trên hợp âm C (móc đơn, lặp lại mỗi ô; đổi sang F và G theo khung blues)

## Từ swing đến bebop (1935 – 1950)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Swing / big band** | ~1935–46 | Nhạc khiêu vũ cho dàn lớn (bộ trumpet, saxophone, trombone cùng nhóm nhịp điệu); riff, đoạn "shout", [[bass-di-jazz|bass đi]] — xem [[swing]] | Piano bắt đầu **chấm phá** hợp âm thay vì giữ nhịp | Benny Goodman ở Palomar (21/8/1935); Count Basie, "One O'Clock Jump" (1937) |
| **Bebop** | ~1940–50s | Từ nhạc khiêu vũ thành **nhạc nghệ thuật**: nhịp nhanh, hoà âm phức tạp, nhóm nhỏ; nhiều contrafact ([[rhythm-changes]]) | Tay trái **shell** (gốc + 3 hoặc 7) của [[bud-powell|Bud Powell]], tay phải đi giai điệu — xem [[xep-hop-am]] | Charlie Parker, "Ko-Ko" (26/11/1945, trên [[vong-hop-am|vòng hợp âm]] "Cherokee") |

## Sau bebop (1949 – 1970)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Cool** | 1949–50s | Phản ứng với bebop "nóng": chậm, nhẹ, trữ tình, thưa; TJPS: quan trọng là chơi *thế nào* hơn là chơi *gì* | Lennie Tristano | Miles Davis, *Birth of the Cool* (thu 1949–50) |
| **Hard bop / soul jazz** | ~1955–65 | Gốc blues và gospel, [[cam-nhan-phach|groove]] dễ nhảy, giai điệu đơn giản hơn; soul jazz dùng đàn organ Hammond, hoà âm rất đơn giản | Horace Silver ("The Preacher"), Bobby Timmons — xem [[tai-hoa-am-gospel]] | Art Blakey, *Moanin'* (thu 30/10/1958) |
| **Modal** | Cuối 1950s | [[dieu-thuc|Điệu thức]] thay [[chuc-nang-hoa-am|hoà âm chức năng]]; một hợp âm kéo dài nhiều ô; [[bass-ngan|bass ngân]]; hợp âm quãng 4 | [[bill-evans|Bill Evans]], [[mccoy-tyner|McCoy Tyner]] — xem [[jazz-dieu-thuc]] | *Kind of Blue* (1959) |
| **Free / avant-garde** | ~1959–60s | Không hợp âm, không giọng cố định, cùng ngẫu hứng | Cecil Taylor với [[am-cum|âm cụm]] — xem [[post-bop-free-jazz]] | Ornette Coleman, *Free Jazz* (thu 21/12/1960) |
| **Post-bop** | 1960s | Pha bebop, hard bop, modal và free; "tự do có kiểm soát" | [[herbie-hancock|Herbie Hancock]] | *Maiden Voyage* (1965) |

## Pha trộn (từ cuối 1960)
| Phong cách | Thời gian | Đặc điểm | Piano | Mốc |
|---|---|---|---|---|
| **Fusion / jazz-rock** | Cuối 1960s–70s | Nền điệu thức, groove funk, solo kiểu rock, móc đơn **thẳng**; nhạc cụ điện | Joe Zawinul (Weather Report), Herbie Hancock (Headhunters), [[chick-corea|Chick Corea]] (Return to Forever) | *Bitches Brew* (thu 8/1969) |
| **Latin: Afro-Cuban** | Từ 1943 | Mọi người theo **clave** (mẫu nhịp nền của nhạc Afro-Cuba, dựa trên [[dao-phach|đảo phách]]); piano chơi **montuno** (vamp lặp lại nét hợp âm), tay trái **tumbao** (gốc – 5) | | Machito/Mario Bauzá, "Tanga" (1943); Dizzy Gillespie/Chano Pozo, "Manteca" (1947) |
| **Latin: bossa nova** | Cuối 1950s | Samba cộng hoà âm jazz; móc đơn thẳng, đung đưa nhẹ, **không** dùng clave; đệm thoáng hơn Afro-Cuban — xem [[dieu-dem-pho-bien]] | Antônio Carlos Jobim | *Getz/Gilberto* (thu 3/1963) |
| **Gospel jazz** | Từ 1950s | Quãng 8, [[ky-hieu-nang-cao|tremolo]], [[hop-am-luot-jazz|hợp âm 7 giảm lướt]], [[hop-am-at-phu|át phụ]], giai điệu [[am-giai-ngu-cung|ngũ cung]] trưởng, thế bấm hẹp song song | Xem [[tai-hoa-am-gospel]] | |
| **Smooth / crossover** | Cuối 1970s–80s | Lớn lên từ fusion nhưng ít phiêu lưu hơn; trọng groove hơn ngẫu hứng; pha pop, funk, R&B | David Benoit | |

## Dùng bảng này khi dạy
- Mỗi phong cách gắn với một **[[ky-thuat-piano|kỹ năng piano]]** riêng: ragtime/stride luyện tay trái nhảy xa ([[buoc-nhay-xa]]), boogie-woogie luyện [[phoi-hop-hai-tay|độc lập hai tay]], bebop luyện thế bấm shell, modal luyện hợp âm quãng 4 ([[hoa-am-quang-bon]]), Latin luyện [[tiet-tau|tiết tấu]].
- Nghe theo thứ tự thời gian giúp học trò nghe ra **hoà âm ngày càng phức tạp** — từ hợp âm ba của ragtime đến [[hop-am-mo-rong|nốt căng]] của bebop và [[upper-structure]] của post-bop.
Nghệ sĩ theo từng thời: [[nghe-si-piano-jazz]]. Lộ trình lý thuyết: [[hoa-am-jazz]].
`,
  },

]
