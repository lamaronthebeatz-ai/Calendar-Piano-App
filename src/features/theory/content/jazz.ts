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
| Nốt "lạ" | Nốt ngoài hợp âm phải giải quyết | **Nốt căng** 9, 11, 13 là một phần của hợp âm ([[hop-am-mo-rong]]) |
| Ký hiệu | Số La Mã, bè trầm có số | **Ký hiệu hợp âm** trên lead sheet ([[ky-hieu-hop-am]]) |
| Kết điển hình | IV – V – I, ii6 – V – I | **[[ii-v-i|ii – V – I]]** |
| Viết bè | Bốn bè SATB theo luật | **Xếp hợp âm** trên đàn ([[xep-hop-am]]) |
| Giai điệu trên hợp âm | Từ đối âm và hoà âm | **Hợp âm – âm giai** cho ngẫu hứng ([[he-thong-hop-am-am-giai]]) |
| Thay đổi hợp âm | Do nhà soạn nhạc cố định | Người chơi **thay thế, tái hoà âm** khi biểu diễn ([[thay-the-hop-am]]) |
| Tiết tấu | Chia đều | [[swing]] |

Một khác biệt quan trọng nữa đến từ **blues**: hợp âm 7 át có thể đóng vai **chủ** (I7) và không cần giải quyết (xem [[blues-12-nhip]], [[am-giai-blues]]).

## Lộ trình học trong mục này
Điều kiện: đã học Chương 1–7 của [[giao-trinh-hoa-am]] (đặc biệt hợp âm 7, chức năng, át phụ, hợp âm mượn).
1. **Cảm nhận**: [[swing]].
2. **Blues**: [[blues-12-nhip]], [[am-giai-blues]].
3. **Hợp âm jazz**: [[ky-hieu-hop-am]], [[hop-am-mo-rong]], [[hop-am-6-va-add]].
4. **Kết và tiến trình**: [[ii-v-i]], [[vong-hop-am]].
5. **Âm giai cho hợp âm**: [[he-thong-hop-am-am-giai]], [[hop-am-at-bien-hoa]], [[am-giai-bat-cung]].
6. **Xếp hợp âm**: [[xep-hop-am]], [[hoa-am-quang-bon]], [[hop-am-chong|hợp âm ba cấu trúc trên]].
7. **Thay thế**: [[thay-the-hop-am]], [[thay-the-tritone]].
8. **Tái hoà âm**: [[tai-hoa-am]].
9. **Hình thức và tiến trình chuẩn**: [[hinh-thuc-ca-khuc-32]], [[rhythm-changes]].
10. **Mở rộng**: [[hoa-am-dieu-thuc|jazz điệu thức]], [[vong-coltrane]].
11. **Ứng dụng đệm hát**: [[dem-hat-piano]].

## Mẹo hiểu hoà âm jazz có hệ thống
- Nhìn mọi tiến trình như **chuỗi các cặp ii – V** dẫn tới những "chủ âm tạm thời".
- Với mỗi hợp âm, hỏi: **nốt 3 và 7 là gì?** — hai nốt này quyết định tính chất và nối các hợp âm với nhau (nốt dẫn hướng).
- Mọi hợp âm 7 át đều có thể **thay thế** (tritone, backdoor, hợp âm 7 giảm) — nhưng giai điệu phải hợp với hợp âm mới.
`,
  },
  {
    slug: 'swing',
    title: 'Swing',
    category: 'jazz',
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
Trong jazz, hai nốt móc đơn viết bằng nhau thường **không** được chơi bằng nhau: nốt đầu dài hơn, nốt sau ngắn hơn.

| Cách viết | Cách chơi (nhịp độ vừa) |
|---|---|
| Hai móc đơn ♫ | Như [[lien-ba]]: nốt đen + móc đơn trong một nhóm liên ba (2 : 1) |

Đầu bản nhạc thường ghi "**Swing**" hoặc "**Swung 8ths**" kèm công thức ♫ = ♩♪ (liên ba). Ngược lại, "**Straight 8ths**" nghĩa là chơi đều.

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
2. Chơi âm giai bằng móc đơn swing, nhấn nhẹ nốt "&" (nốt ngắn).
3. Chơi theo bản thu ở nhiều nhịp độ khác nhau và để ý tỉ lệ dài – ngắn thay đổi.
4. Tay trái đệm hợp âm ngắn kiểu "Charleston" (phách 1 và "& của 2") để cảm nhận [[dao-phach]].
Lý thuyết hoà âm đi kèm: [[hoa-am-jazz]].
`,
  },
  {
    slug: 'blues-12-nhip',
    title: 'Blues 12 ô nhịp',
    category: 'jazz',
    also: ['form'],
    aliases: ['12 bar blues', 'blues 12 ô', 'vòng blues', 'twelve-bar blues', 'blues'],
    summary: 'Khung hoà âm 12 ô nhịp dùng các hợp âm I, IV, V — nền tảng của blues, rock and roll và jazz.',
    wiki: 'Twelve-bar_blues',
    refs: [
      ['Wikipedia — The Memphis Blues', 'https://en.wikipedia.org/wiki/The_Memphis_Blues'],
      ['American Songwriter — Behind the song: "St. Louis Blues"', 'https://americansongwriter.com/behind-the-song-st-louis-blues/'],
      ['St. Olaf College — W. C. Handy and the blues', 'https://pages.stolaf.edu/americanmusic/author/findle1/'],
    ],
    body: `
Mỗi ô là một ô nhịp 4/4, trong giọng Đô:
| Ô 1–4 | Ô 5–8 | Ô 9–12 |
|---|---|---|
| C7 · C7 · C7 · C7 | F7 · F7 · C7 · C7 | G7 · F7 · C7 · G7 |

Ô 12 dùng G7 (**turnaround**) để quay về đầu vòng. Phiên bản "quick change" đổi ô 2 thành F7.

## Đặc trưng
- Cả ba hợp âm đều là [[hop-am-bay|hợp âm 7 át]] — điều "phạm luật" theo hoà âm cổ điển nhưng tạo nên màu blues.
- Giai điệu và ngẫu hứng dùng [[am-giai-blues]].
- Nhịp **swing**: cặp móc đơn được chơi dài – ngắn (gần với [[lien-ba]] 2+1).
- Lời thường theo cấu trúc **AAB**: câu 1 nêu ý, câu 2 lặp lại, câu 3 đáp.

## Bass boogie-woogie cho tay trái
C – E – G – A – B♭ – A – G – E (mỗi nốt một móc đơn), dịch lên F và G theo hợp âm.

## Lịch sử: những bản blues in đầu tiên
Blues bắt nguồn từ truyền thống dân gian của người Mỹ gốc Phi; những bản **được in** đầu tiên xuất hiện năm 1912. Các nguồn không thống nhất "bản đầu tiên" là bản nào:
| Bản | Năm in | Ghi chú |
|---|---|---|
| *Dallas Blues* — Hart Wand | 1912 | In ở Oklahoma City, **vài tháng trước** bản blues của Handy |
| *The Memphis Blues* — W. C. Handy | 1912 | Viết năm 1909 cho một ứng viên thị trưởng Memphis |
| *St. Louis Blues* — W. C. Handy | 1914 | Bản hit lớn, đưa blues thành một trong những thể loại phổ biến nhất nước Mỹ |

Một điểm thú vị: cả *Memphis Blues* lẫn *St. Louis Blues* đều **không hoàn toàn** theo khuôn 12 ô nhịp. Sau đoạn mở đầu ngắn, chúng đặt một đoạn 12 ô nhịp blues cạnh một đoạn **16 ô nhịp** thông thường. *St. Louis Blues* còn chuyển giọng ra ngoài khuôn rồi mới quay về. Vì vậy câu trả lời cho "bản blues đầu tiên" tuỳ vào việc tính bản đầu tiên có chữ "blues" trong tên, bản 12 ô nhịp đầu tiên, hay bản hit đầu tiên.

Liên quan: [[vong-hop-am]], [[chuc-nang-hoa-am]], [[dao-phach]], [[swing]], [[ngau-hung-piano]]. So sánh với khuôn 32 ô nhịp: [[hinh-thuc-ca-khuc-32]].
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
Các nốt ♭3, ♭5, ♭7 gọi là **nốt blue**. Trên guitar hay giọng hát, chúng thường được uốn (bend) vào khoảng giữa hai phím đàn; trên piano, người chơi mô phỏng bằng cách **láy nhanh** từ ♭3 lên 3 (E♭ → E).

Âm giai blues thường được chơi trên khung [[blues-12-nhip]] với các [[hop-am-bay|hợp âm 7 át]]. Liên quan: [[dieu-thuc|Mixolydian]], [[dao-phach]].

## Nốt blue thực sự cao bao nhiêu?
- Nốt blue thường được mô tả là bậc 3, 5, 7 **hạ xuống** — nhưng mức hạ **không cố định**, thường từ khoảng **một phần tư cung đến nửa cung**.
- Court Cutting (2019) đo cao độ trong 15 bản thu blues kinh điển và tìm thấy ba "cụm" nốt blue, trong đó một cụm ở khoảng **319 cent** — **giữa** quãng 3 thứ (300) và quãng 3 trưởng (400): một quãng 3 "trung tính". Có nhà nghiên cứu phản biện rằng nốt blue thường là **đường trượt** giữa hai cao độ chứ không đứng yên.
- Vì piano không có cao độ giữa hai phím, người chơi chỉ có thể **gợi** nốt blue — ví dụ [[nghe-si-piano-jazz|Thelonious Monk]] đánh **hai phím liền nhau cùng lúc**, hoặc láy nhanh từ ♭3 lên 3.

## Âm giai blues là sản phẩm của sách dạy
- Nguồn gốc nốt blue còn **tranh cãi**: Gerhard Kubik cho rằng chúng đến từ chuỗi bồi âm trong truyền thống châu Phi, không phải từ việc "hạ" các nốt bình quân.
- "Âm giai blues" như một **bài học** xuất hiện muộn: phương pháp piano của Vincent Lopez (1933–34) có lẽ là ấn phẩm đầu tiên nêu một âm giai blues. Trước khi jazz vào giảng đường (khoảng 1967), có **nhiều phiên bản** âm giai blues khác nhau; dạng 6 nốt quen thuộc được các nhà giáo dục jazz như David Baker và Jamey Aebersold phổ biến.
- Có người phê phán âm giai này **quá đơn giản**, không nắm được tinh thần của blues.

Ý nghĩa với người dạy: âm giai blues là **điểm khởi đầu** hữu ích để ngẫu hứng (xem [[ngau-hung-piano]]), nhưng nên cho học sinh **nghe nhiều bản thu blues** để hiểu nốt blue thật sự "uốn" thế nào.
`,
  },
  {
    slug: 'ii-v-i',
    title: 'ii – V – I',
    category: 'jazz',
    aliases: ['ii-V-I', 'II-V-I', '2-5-1', 'ii-V', 'tiến trình 2-5-1', 'nốt dẫn hướng', 'guide tones', 'guide tone', 'ii-V thứ', 'chuỗi ii-V'],
    summary: 'Tiến trình nền tảng của jazz: hợp âm bậc 2 – bậc 5 – bậc 1 nối nhau theo quãng 5; nốt 3 và 7 của mỗi hợp âm tạo nên đường dẫn giọng nửa cung đặc trưng.',
    wiki: 'Ii–V–I_progression',
    refs: [
      ['Open Music Theory 2e — ii–V–I', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.04%3A_iiVI'],
      ['Wikipedia — ii–V–I progression', 'https://en.wikipedia.org/wiki/Ii%E2%80%93V%E2%80%93I_progression'],
      ['Open Music Theory 2e — Substitutions (mode mixture in jazz)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
    ],
    body: `
**ii – V – I** là [[cau-ket|kết chính]] của hoà âm cổ điển (tiền át – át – chủ, xem [[chuc-nang-hoa-am]]) dùng **hợp âm 7** ở mọi bậc. Nhận ra nó bằng hai dấu hiệu: **nốt gốc đi theo quãng 5** và **chuỗi tính chất hợp âm** đặc trưng.

## Giọng trưởng và giọng thứ
| Giọng | Tiến trình | Ví dụ |
|---|---|---|
| Trưởng | **ii7 – V7 – Imaj7** | Dm7 – G7 – Cmaj7 |
| Thứ | **iiø7 – V7(♭9) – i7** (hoặc i6, imaj7) | Dø7 – G7♭9 – Cm7 |
Trong giọng thứ, ii là hợp âm **nửa giảm** và V thường thêm **♭9** — cả hai đến từ bậc 6 hạ (♭6) của giọng thứ. Open Music Theory ghi nhận iiø7 thay ii7 và V7♭9 là hai hợp âm **mượn** phổ biến nhất trong jazz, kể cả khi giọng là trưởng (xem [[hop-am-muon]]).

## Nốt dẫn hướng (guide tones)
Nốt **3** và **7** quyết định tính chất hợp âm. Trong ii – V – I chúng nối với nhau theo quy luật:
- Nốt **7** của hợp âm trước đi **xuống nửa cung** thành nốt **3** của hợp âm sau.
- Nốt **3** của hợp âm trước **giữ nguyên** thành nốt **7** của hợp âm sau.
| | Dm7 | G7 | Cmaj7 |
|---|---|---|---|
| Đường 1 | C (7) | B (3) | B (7) |
| Đường 2 | F (3) | F (7) | E (3) |

::staff treble F4+C5 F4+B4 E4+B4 | Nốt dẫn hướng trong Dm7 – G7 – Cmaj7: mỗi bước chỉ một nốt đi xuống nửa cung

Đây là cùng một nguyên tắc với [[dan-giong|dẫn giọng]] cổ điển: nốt 7 của hợp âm át giải quyết đi xuống.

## Chuỗi ii – V
Mỗi hợp âm đích có thể được "chuẩn bị" bằng ii – V riêng (ii – V phụ, xem [[hop-am-at-phu]]). Nhiều standard là một chuỗi ii – V liên tiếp — ví dụ "Autumn Leaves" xen kẽ ii – V – I ở giọng trưởng và giọng thứ song song; "Tune Up" (Miles Davis) đi qua ba giọng bằng ba ii – V – I hạ dần một cung.

## Luyện tập
1. Chơi nốt dẫn hướng (tay trái) qua ii – V – I ở cả 12 giọng, đi theo [[vong-quang-nam]].
2. Thêm nốt gốc ở bè trầm, rồi chuyển sang [[xep-hop-am|xếp hợp âm không gốc]].
3. Làm lại với ii – V – i giọng thứ (Dø7 – G7♭9 – Cm7).
`,
  },
  {
    slug: 'he-thong-hop-am-am-giai',
    title: 'Hệ thống hợp âm – âm giai',
    category: 'jazz',
    aliases: ['chord-scale', 'chord scale theory', 'âm giai cho hợp âm', 'thứ giai điệu jazz', 'avoid note', 'nốt tránh', 'Lydian Chromatic Concept', 'George Russell'],
    summary: 'Cách nghĩ của jazz: mỗi hợp âm đi kèm một âm giai (thường là một điệu thức) để ngẫu hứng và chọn nốt mở rộng.',
    wiki: 'Chord-scale_system',
    refs: [
      ['Wikipedia — Chord-scale system', 'https://en.wikipedia.org/wiki/Chord-scale_system'],
      ['Wikipedia — Lydian Chromatic Concept of Tonal Organization', 'https://en.wikipedia.org/wiki/Lydian_Chromatic_Concept_of_Tonal_Organization'],
      ['Hilobrow — George Russell', 'https://www.hilobrow.com/2015/06/23/george-russell/'],
      ['University of Colorado thesis — The Lydian Chromatic Concept and chord-scale theory', 'https://scholar.colorado.edu/downloads/bk128c27z'],
    ],
    body: `
Mỗi [[hop-am-bay|hợp âm 7]] được "phủ" bằng một âm giai 7 nốt chứa các nốt của hợp âm cùng các [[hop-am-mo-rong|nốt mở rộng]] 9, 11, 13.

## Trong vòng ii – V – I ở Đô trưởng
| Hợp âm | Âm giai | Ghi chú |
|---|---|---|
| Dm7 | D Dorian | Phím trắng từ D (xem [[dieu-thuc]]) |
| G7 | G Mixolydian | Phím trắng từ G |
| Cmaj7 | C Ionian hoặc C Lydian | F là **nốt tránh** trên Cmaj7; Lydian (F♯) tránh được điều đó |

## Âm giai cho hợp âm 7 át
Hợp âm 7 át có nhiều lựa chọn nhất (Mixolydian, Lydian át, bát cung, âm giai biến đổi…) tuỳ theo nốt căng và hướng giải quyết — xem bảng đầy đủ ở [[hop-am-at-bien-hoa]].

## Các hợp âm còn lại
- m7♭5 → Locrian (hoặc Locrian ♮2).
- °7 → bát cung **cung – nửa cung**.

## Bảng tổng hợp: bảy loại hợp âm thường gặp
| Hợp âm | Âm giai thường dùng | Nốt căng có sẵn |
|---|---|---|
| maj7 | Ionian, Lydian | 9, ♯11, 13 |
| m7 (ii) | Dorian | 9, 11, 13 |
| m7 (iii) | Phrygian | 11 |
| 7 | Mixolydian và các âm giai át khác | 9, 13 (và các biến hoá) |
| m7♭5 | Locrian, Locrian ♮2 | 11, ♭13 (và 9 với Locrian ♮2) |
| °7 | Bát cung cung – nửa cung | Các nốt cách gốc một cung |
| mMaj7 | Thứ giai điệu | 9, 11, 13 |

## Lịch sử
- **George Russell** tự xuất bản *Lydian Chromatic Concept of Tonal Organization* năm **1953** — lý thuyết đầu tiên đặt quan hệ **dọc** giữa hợp âm và âm giai làm trung tâm, thường được gọi là lý thuyết gốc duy nhất sinh ra từ jazz. Russell lấy **Lydian**, chứ không phải Ionian, làm âm giai tham chiếu, vì Lydian được dựng từ các quãng 5 chồng lên nhau tính từ nốt gốc.
- Theo các tài liệu tiểu sử, Bill Evans đưa các ý tưởng này đến ban nhạc của Miles Davis, góp phần vào phong cách **jazz điệu thức** của album *Kind of Blue* (1959) — xem [[hoa-am-dieu-thuc]].
- Hệ thống hợp âm – âm giai sau đó trở thành nền tảng của **giáo dục jazz** ở các trường đại học.

## Giới hạn của cách nghĩ này
Một âm giai cho mỗi hợp âm là **điểm xuất phát**, không phải luật. Giai điệu jazz hay vẫn đến từ [[dan-giong|dẫn giọng]] giữa các hợp âm — đặc biệt [[ii-v-i|nốt dẫn hướng]] 3 và 7 — và từ nốt lướt cromatic.

## Nốt tránh
Nốt cách một nốt hợp âm [[cung-nua-cung|nửa cung]] phía trên (như F trên Cmaj7 vì nghịch với E) — có thể lướt qua nhưng không nên ngân dài.

Các âm giai này là "bảng màu" cho [[xep-hop-am]] và [[tai-hoa-am]].
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
Hợp âm 7 át (V7) là hợp âm **căng nhất** và **linh hoạt nhất** trong jazz: ngoài gốc – 3 – 5 – 7 nó có thể mang nhiều [[hop-am-mo-rong|nốt căng]].

## Nốt căng tự nhiên và biến hoá
Trên hợp âm 7 át có ba nốt căng (9, 11, 13) và **bốn khả năng biến hoá**: **♭9, ♯9, ♯11, ♭13** (♭13 còn được viết ♯5).
| Nốt căng | Trên G7 | Màu sắc |
|---|---|---|
| 9 | A | Sáng, ổn định |
| ♭9 | A♭ | Tối, căng, "giọng thứ" |
| ♯9 | A♯ (= B♭) | Gắt, "blues" — vang cùng nốt 3 B |
| ♯11 | C♯ | Lơ lửng, Lydian |
| 13 | E | Sáng |
| ♭13 | E♭ | Tối |
Nốt **11 tự nhiên** (C trên G7) nghịch nửa cung với nốt 3 (B) nên thường bị tránh, trừ khi bỏ nốt 3 (hợp âm **sus**, xem [[ky-hieu-hop-am]]).

## Chọn theo hướng giải quyết
- V7 giải quyết về **chủ trưởng**: nốt căng tự nhiên (9, 13) lấy từ âm giai trưởng.
- V7 giải quyết về **chủ thứ**: **♭9, ♭13** lấy từ âm giai thứ của giọng đích — đây là lý do G7♭9 đi tự nhiên về Cm (xem [[ii-v-i]]).
- Có thể dùng nốt biến hoá trước chủ trưởng để **tăng sức căng**: nốt ♭9 (A♭) đi xuống G, ♭13 (E♭) đi xuống D hoặc E… — giống [[hop-am-muon|hợp âm mượn]] trong hoà âm cổ điển.
- Hợp âm 7 át **không giải quyết xuống quãng 5** (♭VII7, thay thế tritone, IV7 trong blues) thường mang **♯11** (Lydian át).

## Âm giai đi kèm
| Ký hiệu | Âm giai | Nguồn gốc | Nốt (gốc G) |
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
ii – V – I: Dm7 – G7 – Cmaj7 → ii – ♭II7 – I: **Dm7 – D♭7 – Cmaj7**. Bè trầm đi xuống liền nửa cung D – D♭ – C, rất mượt.

## Liên hệ
- D♭7 có cấu trúc trùng âm với [[hop-am-sau-tang|hợp âm 6 Đức]] của Đô — hai truyền thống cổ điển và jazz gặp nhau.
- Có thể áp dụng cho mọi [[hop-am-at-phu|át phụ]]: E7 – A7 – D7 – G7 – C → E7 – E♭7 – D7 – D♭7 – C (bè trầm cromatic).
- Âm giai biến đổi của G7 chính là Lydian át của D♭7 (xem [[he-thong-hop-am-am-giai]]).

## Thay thế cả cặp ii – V
Có thể thay luôn hợp âm ii đi kèm: Dm7 – G7 – C → **A♭m7 – D♭7** – C (ii – V "của tritone"), hoặc trộn: Dm7 – D♭7 – C. Open Music Theory nhấn mạnh tên gọi chỉ **hai điều**: hai hợp âm cách nhau tritone và **chung một tritone**.

## Lịch sử
- Theo Wikipedia, cùng âm thanh này đã có trong nhạc cổ điển dưới tên [[hop-am-sau-tang|hợp âm 6 tăng]]. Open Music Theory coi riêng **thay thế tritone** (như một phép thay hợp âm 7 át) là kỹ thuật đặc trưng của jazz.
- Trong jazz, kỹ thuật được **Dizzy Gillespie** và **Charlie Parker** phổ biến trong thập niên 1940; trước đó Duke Ellington, Art Tatum, Coleman Hawkins, Roy Eldridge, Benny Goodman đã dùng.
- Bản thu **"Body and Soul"** của Coleman Hawkins (11/10/1939): ở ô 3, tay bass chơi D thay vì A♭ — biến A♭7 thành D7, một thay thế tritone (theo phân tích của All About Jazz).

## Nốt giai điệu cần kiểm tra
Nốt căng tự nhiên của G7 lại là nốt **biến hoá** của D♭7: A (9 của G7) = ♭13 của D♭7; E (13 của G7) = ♯9 của D♭7. Ngược lại, nốt G — gốc của G7 — là ♯11 của D♭7. Vì vậy thay thế tritone hợp nhất khi giai điệu đang ở nốt 3, 7 hoặc các nốt biến hoá của V7 (xem [[hop-am-at-bien-hoa]]).

::img Tritone substitutions.png | Thay thế tritone (tương đương hợp âm 6 Ý)

Là một trong những kỹ thuật [[tai-hoa-am]] phổ biến nhất.
`,
  },
  {
    slug: 'xep-hop-am',
    title: 'Xếp hợp âm',
    category: 'jazz',
    aliases: ['voicing', 'cách xếp hợp âm', 'rootless voicing', 'shell voicing', 'drop 2', 'close voicing', 'open voicing', 'thế bấm hợp âm jazz'],
    summary: 'Cách chọn và sắp xếp các nốt của hợp âm trên bàn phím: xếp hẹp, xếp rộng, shell, rootless, drop 2…',
    wiki: 'Voicing_(music)',
    refs: [
      ['Piano With Jonny — Rootless voicings', 'https://pianowithjonny.com/piano-lessons/rootless-voicings/'],
      ['Wikipedia — Voicing (music)', 'https://en.wikipedia.org/wiki/Voicing_(music)'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
      ['Open Music Theory 2e — Jazz', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz'],
    ],
    body: `
Cùng một hợp âm, cách xếp nốt khác nhau cho màu sắc rất khác nhau.

## Xếp hẹp và xếp rộng
- **Xếp hẹp** (close): các nốt nằm trong một [[quang|quãng 8]] — C – E – G – B.
- **Xếp rộng** (open): trải hơn một quãng 8 — C3 – G3 – E4 – B4, vang và thoáng.

## Shell voicing (tay trái)
Chỉ chơi **gốc + 3 + 7** (hoặc gốc + 7 + 3) — đủ để xác định tính chất hợp âm. Dm7: D – F – C; G7: G – F – B; Cmaj7: C – E – B.

## Rootless voicing (xếp không gốc)
Bỏ nốt gốc (để bass chơi), thêm nốt mở rộng. Lối xếp này được phổ biến vào **giữa – cuối thập niên 1950** bởi các nghệ sĩ như **Bill Evans, Red Garland, Wynton Kelly** (một số nguồn kể thêm Ahmad Jamal); các nguồn không thống nhất ai là người khởi xướng.
| Hợp âm | Dạng A (3 – 5 – 7 – 9) | Dạng B (7 – 9 – 3 – 5) |
|---|---|---|
| Dm9 | F – A – C – E | C – E – F – A |
| G13 | B – E – F – A (3 – 13 – 7 – 9) | F – A – B – E (7 – 9 – 3 – 13) |
| Cmaj9 | E – G – B – D | B – D – E – G |

::keyboard F4 A4 C5 E5 | Dm9 dạng A
::keyboard F4 A4 B4 E5 | G13 không gốc — chỉ một nốt (C → B) thay đổi so với hợp âm trước

Nối ii – V – I bằng xen kẽ dạng A và B, mỗi bè chỉ di chuyển tối đa một bậc — chính là [[dan-giong]] tốt.

Lưu ý khi dùng xếp không gốc:
- Giữ hợp âm **quanh nốt Đô giữa** trở lên: nốt 9 và các quãng hẹp đặt quá thấp sẽ bị đục.
- Cần **bass** (nhạc công bass hoặc tay trái) chơi nốt gốc; nếu chơi một mình mà không có gốc, hợp âm nghe lơ lửng, không rõ.

## Thứ tự học xếp hợp âm
1. **Nốt dẫn hướng** 3 – 7 ([[ii-v-i]]).
2. **Shell**: gốc + 3 + 7.
3. **Không gốc dạng A/B** cho ii – V – I ở 12 giọng.
4. **Quãng 4 và "So What"** ([[hoa-am-quang-bon]]).
5. **Hợp âm ba cấu trúc trên** cho hợp âm át biến hoá ([[hop-am-chong]], [[hop-am-at-bien-hoa]]).
6. **Drop 2**, xếp **khối** (block chords) cho giai điệu.

## Drop 2
Lấy hợp âm xếp hẹp, hạ **nốt cao thứ hai** xuống một quãng 8: C – E – G – B → G – C – E – B. Rất phổ biến trong guitar và piano big band.

Âm giai chọn nốt mở rộng: [[he-thong-hop-am-am-giai]]. Xếp theo quãng 4: [[hoa-am-quang-bon]].
`,
  },
  {
    slug: 'hoa-am-quang-bon',
    title: 'Hoà âm quãng 4',
    category: 'jazz',
    aliases: ['quartal harmony', 'hợp âm quãng 4', 'quartal voicing', 'So What chord', 'hợp âm quãng 5', 'quintal'],
    summary: 'Hợp âm xây bằng các quãng 4 chồng lên nhau thay vì quãng 3 — âm thanh mở, lơ lửng của jazz modal và nhạc thế kỷ 20.',
    wiki: 'Quartal_and_quintal_harmony',
    refs: [
      ['Wikipedia — Quartal and quintal harmony', 'https://en.wikipedia.org/wiki/Quartal_and_quintal_harmony'],
      ['Wikipedia — So What chord', 'https://en.wikipedia.org/wiki/So_What_chord'],
      ['PianoGroove — So What chord voicing', 'https://pianogroove.com/jazz-piano-lessons/so-what-chord-voicing/'],
      ['The Jazz Piano Site — Quartal harmony', 'https://www.thejazzpianosite.com/?p=464'],
    ],
    body: `
Hoà âm truyền thống chồng [[quang|quãng 3]] ([[hop-am-ba]]). Hoà âm quãng 4 chồng **quãng 4 đúng**: D – G – C – F.

::keyboard D4 G4 C5 F5 | Hợp âm quãng 4 trên D

## Đặc điểm
- Không rõ trưởng hay thứ; không có lực kéo [[chuc-nang-hoa-am|chức năng]] mạnh → hợp với nhạc **điệu thức** ([[dieu-thuc]]).
- Có thể **dịch song song** theo các nốt của âm giai mà vẫn hợp — trong D Dorian: D–G–C, E–A–D, G–C–F, A–D–G…

## Hợp âm "So What"
Ba quãng 4 + một quãng 3 trưởng ở trên: **E – A – D – G – B**. Đặt tên theo bài "So What" (Miles Davis, album *Kind of Blue*, 1959): Bill Evans dùng nó trong hình đáp "amen" sau mỗi câu giai điệu. Còn gọi là "Bill Evans voicing" hoặc "Dorian voicing". Vì là sự pha trộn giữa quãng 4 và quãng 3, hợp âm này **đa nghĩa**: cùng một khối có thể đặt lên nhiều hợp âm khác nhau, và rất hợp để [[hoa-am-song-song|dịch song song]].

::keyboard E4 A4 D5 G5 B5 | Hợp âm So What (Em11 không gốc)

## Ứng dụng
- Jazz modal: **McCoy Tyner** nổi tiếng với các khối quãng 4 thuần (ví dụ phần đệm của ông trong "Impressions" của John Coltrane); Herbie Hancock.
- Nhạc cổ điển thế kỷ 20: Scriabin (hợp âm "huyền bí"), Hindemith, Bartók (xem [[cac-thoi-ky]]).
- Đảo một chồng quãng 4 sẽ thành quãng 5 (**hoà âm quãng 5**, xem [[quang-dao]]).

Liên quan: [[xep-hop-am]], [[an-tuong]].
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
    ],
    body: `
**Thay thế** là đổi **một** hợp âm; [[tai-hoa-am|tái hoà âm]] là áp nhiều phép thay thế lên **cả** một tiến trình. Trong jazz, người chơi thay thế ngay khi biểu diễn — nên cần hiểu **vì sao** mỗi phép thay hoạt động.

## 1. Thay cùng chức năng (diatonic)
Hợp âm cùng [[chuc-nang-hoa-am|nhóm chức năng]] chung nhiều nốt nên thay được cho nhau:
- **Chủ**: Imaj7 ↔ iii7 ↔ vi7 (Cmaj7, Em7, Am7).
- **Tiền át**: IV ↔ ii7 (Fmaj7, Dm7).
- **Át**: V7 ↔ vii ø7 (G7, Bø7).

## 2. Át phụ và ii phụ
- Vì gốc đi theo quãng 5 rất thường gặp, có thể biến **hợp âm thứ nhất** trong một cặp quãng 5 thành **hợp âm 7 át cùng gốc**: Am7 – Dm7 → **A7** – Dm7 (xem [[hop-am-at-phu]]).
- Rồi thêm **ii phụ** trước át phụ đó: **Em7 – A7** – Dm7 — tạo một [[ii-v-i]] nhỏ hướng về Dm7.

## 3. Hợp âm mượn
Mượn từ giọng thứ cùng tên, phổ biến nhất trong jazz là **iiø7 thay ii7** và **V7♭9 thay V7** (Open Music Theory). Xem [[hop-am-muon]], [[hop-am-at-bien-hoa]].

## 4. Thay thế tritone
Thay V7 bằng hợp âm 7 át cách nó một tritone (G7 → D♭7) — hai hợp âm chung tritone B – F. Chi tiết: [[thay-the-tritone]].

## 5. Backdoor (cửa sau)
**iv7 – ♭VII7 – I**: trong Đô trưởng **Fm7 – B♭7 – Cmaj7**. Tên gọi do Jerry Coker đặt: nếu ii – V – I là "cửa trước" thì đây là "cửa sau".
- B♭7 mượn từ giọng thứ cùng tên; A♭ và F của nó đi xuống nửa cung tới G và E của hợp âm chủ.
- Ví dụ trong standard: "Yardbird Suite" (ô 2–3: Fm7 – B♭7 – Cmaj7), "How Deep Is the Ocean", "Lady Bird", "Misty".
- Hợp âm 7 át của backdoor thường mang ♯11 ([[hop-am-at-bien-hoa|Lydian át]]).

## 6. Hợp âm 7 giảm
- **Giảm lướt đi lên**: C – **C♯°7** – Dm7: bè trầm đi lên cromatic. C♯°7 chính là vii°7/ii — một át phụ của Dm7 (xem [[hop-am-cam-am]]).
- **Giảm nốt chung**: Cmaj7 – **C°7** (CT°7) – Cmaj7: nốt chung C giữ nguyên, các bè thêu quanh — Open Music Theory xếp đây là một kỹ thuật thêm hợp âm chính của jazz (xem [[hop-am-not-chung]]).

## Điều kiện để thay thế
Nốt giai điệu ở chỗ quan trọng phải là **nốt hợp âm** hoặc **nốt căng hợp lý** của hợp âm mới. Nếu va chạm nửa cung với nốt 3 hoặc 7 của hợp âm mới, hãy chọn phép thay khác.
`,
  },
  {
    slug: 'tai-hoa-am',
    title: 'Tái hoà âm',
    category: 'jazz',
    aliases: ['reharmonization', 'reharm', 'đổi hợp âm', 'thay hợp âm', 'hợp âm thay thế diatonic'],
    summary: 'Thay đổi hợp âm dưới một giai điệu có sẵn để tạo màu sắc mới, mà giai điệu vẫn giữ nguyên.',
    wiki: 'Reharmonization',
    refs: [
      ['Open Music Theory 2e — Substitutions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/06%3A_Jazz/6.06%3A_Substitutions'],
      ['Wikipedia — Reharmonization', 'https://en.wikipedia.org/wiki/Reharmonization'],
      ['Learn Jazz Standards — 10 jazz reharmonization techniques', 'https://www.learnjazzstandards.com/blog/jazz-reharmonization-techniques/'],
      ['The Jazz Piano Site — Jazz reharmonization', 'https://www.thejazzpianosite.com/?p=239'],
    ],
    body: `
Nguyên tắc: nốt giai điệu ở chỗ quan trọng (phách mạnh, nốt dài) phải là nốt của hợp âm mới, hoặc một [[hop-am-mo-rong|nốt mở rộng]] hợp lý.

## Các kỹ thuật (từ nhẹ đến mạnh)
| Kỹ thuật | Ví dụ (trong Đô trưởng) | Bài liên quan |
|---|---|---|
| Thay bằng hợp âm cùng chức năng | C → Am hoặc Em; F → Dm | [[chuc-nang-hoa-am]] |
| Thêm nốt 7, 9, 13 | C → Cmaj9 | [[hop-am-mo-rong]] |
| Chèn ii – V trước hợp âm đích | … → Em7 – A7 → Dm | [[hop-am-at-phu]] |
| Thay thế tritone | G7 → D♭7 | [[thay-the-tritone]] |
| Backdoor | G7 → Fm7 – B♭7 | [[thay-the-hop-am]] |
| Vòng Coltrane | Chia đường về chủ thành các chặng quãng 3 trưởng | [[vong-coltrane]] |
| Mượn từ giọng cùng tên | F → Fm | [[hop-am-muon]] |
| Hợp âm 7 giảm lướt | C – C♯°7 – Dm7 | [[hop-am-bay-giam]] |
| Bass ngân | Mọi hợp âm trên G | [[bass-ngan]] |
| Trung âm cromatic | C → A♭maj7 | [[trung-am-cromatic]] |
| Bè trầm cromatic đi xuống | C – C/B – C/B♭ – A7 | [[dan-giong]] |

## Ví dụ từng bước
Giai điệu 4 ô: **E – F – B – C** (mỗi ô một nốt dài), hoà âm gốc **C – F – G7 – C**.
| Bước | Ô 1 (E) | Ô 2 (F) | Ô 3 (B) | Ô 4 (C) | Nốt giai điệu so với hợp âm mới |
|---|---|---|---|---|---|
| Gốc | C | F | G7 | C | 3, gốc, 3, gốc |
| 1. Thêm 7 | Cmaj7 | Fmaj7 | G7 | Cmaj7 | 3, gốc, 3, gốc |
| 2. Cùng chức năng | Am7 | Dm7 | G7 | Cmaj7 | 5, 3, 3, gốc |
| 3. Thay thế tritone | Am7 | Dm7 | D♭7 | Cmaj7 | 5, 3, **7** (C♭ = B), gốc |
Ở mỗi bước, kiểm tra nốt giai điệu vẫn là nốt hợp âm hoặc nốt căng hợp lý của hợp âm mới. Bước 3 tạo bè trầm A – D – D♭ – C đi xuống mượt.

## Tái hoà âm trong biểu diễn
Nhiều phép thay thế được dùng **ngay khi chơi**, nên người đệm và người độc tấu phải nghe nhau: nếu piano thay G7 bằng D♭7 trong khi bass vẫn chơi G, hai hợp âm sẽ va chạm. Lead sheet chỉ là **khung**; tái hoà âm là phần sáng tạo của người chơi.

## Gợi ý luyện tập
1. Chọn một bài quen (ví dụ "Twinkle Twinkle Little Star") với vòng gốc I – IV – V.
2. Áp từng kỹ thuật một, chơi lại và nghe sự khác biệt.
3. Kết hợp với [[xep-hop-am]] để các hợp âm mới nối mượt.

Liên quan: [[vong-hop-am]], [[he-thong-hop-am-am-giai]].
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
| Đoạn | Số ô nhịp | Vai trò |
|---|---|---|
| A | 8 | Chủ đề chính, kết ở giọng chính |
| A | 8 | Nhắc lại (có thể đổi kết) |
| **B** (bridge, "middle eight") | 8 | Tương phản: giai điệu mới, hoà âm khác — thường ly giọng hoặc [[chuyen-giong|chuyển giọng]] |
| A | 8 | Quay lại chủ đề |

## Ví dụ
- "Over the Rainbow" (Harold Arlen, 1939).
- "I Got Rhythm" (Gershwin, 1930) — đoạn B đi qua chuỗi hợp âm 7 át theo quãng 5; vòng hợp âm của bài là [[rhythm-changes]].
- "Blue Skies", "The Man I Love" (theo danh sách của Wikipedia).
- Ngoài AABA còn có biến thể 32 ô **ABAC** (hai nửa 16 ô bắt đầu giống nhau, kết khác nhau).

## Bối cảnh
AABA còn được gọi là **"ballad form"** hay **"American popular song form"**: khuôn mẫu chung của **Tin Pan Alley** và nhạc kịch Broadway nửa đầu thế kỷ 20. Lời tựa đề thường đặt ở **câu đầu hoặc câu cuối** của mỗi đoạn A. Nhiều ca khúc nhạc kịch theo hình thức này về sau trở thành **jazz standard**.

## Nhìn hoà âm theo hình thức
- Đoạn A thường **mở và đóng ở chủ** — vòng I – vi – ii – V hoặc chuỗi [[ii-v-i]].
- Đoạn B là chỗ hoà âm **đi xa nhất**: ly giọng sang IV, chuỗi át phụ (như rhythm changes), hoặc chuyển hẳn sang giọng khác.
- Ô cuối mỗi đoạn A thường có **"turnaround"** (I – vi – ii – V) để quay lại đầu.

## Trong biểu diễn jazz
Một lượt chơi trọn 32 ô nhịp gọi là một **chorus**. Cấu trúc thường gặp: chơi giai điệu (head) → các nhạc công lần lượt ngẫu hứng nhiều chorus trên cùng vòng hợp âm → chơi lại head.

So sánh: [[blues-12-nhip]] (12 ô), [[hinh-thuc-am-nhac|hình thức phiên khúc – điệp khúc]] của pop, [[hinh-thuc-am-nhac|hình thức ba đoạn]] ABA trong nhạc cổ điển.
`,
  },
  {
    slug: 'rhythm-changes',
    title: 'Rhythm changes',
    category: 'jazz',
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
"I Got Rhythm" của George Gershwin ra mắt năm **1930** trong vở nhạc kịch Broadway *Girl Crazy*. Vòng hợp âm của nó — gọi là **"rhythm changes"** — trở thành một trong những khung hoà âm được dùng lại nhiều nhất của jazz, sau [[blues-12-nhip|blues]].

## Cấu trúc (giọng gốc: Si giáng trưởng)
[[hinh-thuc-ca-khuc-32|Hình thức AABA]], mỗi đoạn 8 ô:
| Đoạn | Hoà âm | Ví dụ trong B♭ |
|---|---|---|
| **A** | Xoay quanh **I – vi – ii – V** (và các biến thể) | B♭ – Gm7 – Cm7 – F7 … |
| **B** (bridge) | Chuỗi hợp âm 7 át theo [[vong-quang-nam|quãng 5]]: **III7 – VI7 – II7 – V7**, mỗi hợp âm 2 ô | D7 – G7 – C7 – F7 |
| **A** | Như A đầu | |
- Đoạn B là một [[mo-tien-hoa-am|mô tiến]] quãng 5 của các [[hop-am-at-phu|át phụ]], đưa về V7 để quay lại đoạn A. Người chơi thường chèn thêm hợp âm lướt (ví dụ biến mỗi hợp âm 7 át thành một cặp ii – V).
- Bản gốc có thêm một **đuôi 2 ô** mà các bản jazz thường bỏ.
- Bản thân các tiến trình I – vi – ii – V và chuỗi át phụ đã có từ lâu trước Gershwin; điều ông đóng góp là **một bài hát** khiến khung hoà âm này thành chuẩn chung.

## Contrafact
**Contrafact** là giai điệu mới viết trên vòng hợp âm của một bài có sẵn. Vì **vòng hợp âm không được bảo hộ bản quyền**, nhạc công jazz viết giai điệu mới trên những vòng họ thích ngẫu hứng.
- Ví dụ rhythm changes sớm nhất được biết: "Shag" (Sidney Bechet, thu âm 1932).
- Thời bebop: "Anthropology", "Moose the Mooche", "Steeplechase" (Charlie Parker); "Oleo" (Sonny Rollins); "Rhythm-a-Ning" (Thelonious Monk).
- Các nhạc công bebop còn **chồng thêm chuỗi ii – V** lên vòng này, biến nó thành "bài kiểm tra tay nghề" ngẫu hứng.

## Học rhythm changes thế nào?
1. Thuộc đoạn A dạng đơn giản nhất (I – vi – ii – V) và đoạn B (bốn hợp âm 7 át).
2. Chơi [[ii-v-i|nốt dẫn hướng]] qua cả 32 ô.
3. Thử từng phép [[thay-the-hop-am|thay thế]] (I – VI7 – ii – V, thay thế tritone ở đoạn B…).
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
- Ba trung tâm giọng của "Giant Steps": **Si trưởng, Sol trưởng, Mi giáng trưởng** — mỗi giọng **thấp hơn giọng trước một quãng 3 trưởng**.
- Chồng các quãng 3 trưởng sẽ quay về điểm xuất phát sau **ba** bước (B – G – E♭ – B) — tức là ba gốc này tạo thành một [[hop-am-ba-tang|hợp âm ba tăng]]. Quãng 8 được chia thành **ba phần bằng nhau**, một kiểu đối xứng giống [[dieu-thuc-chuyen-vi-gioi-han|các âm giai đối xứng]].
- Mỗi giọng được dẫn vào bằng **hợp âm 7 át** của nó: Bmaj7 – **D7** – Gmaj7 – **B♭7** – E♭maj7 …

## Như một phép thay thế cho ii – V – I
Coltrane cũng dùng hệ thống này để **tái hoà âm** các tiến trình sẵn có: một [[ii-v-i]] được "lấp đầy" bằng các chặng cách nhau quãng 3 trưởng trước khi về chủ. Ví dụ "Countdown" là bản tái hoà âm của "Tune Up" (Miles Davis): khung lớn vẫn là các giọng của "Tune Up", nhưng từng chặng được chia nhỏ theo vòng Coltrane.

## Liên hệ với hoà âm cổ điển
Các giọng cách nhau quãng 3 là chủ đề của [[trung-am-cromatic|quan hệ trung âm cromatic]] trong nhạc thế kỷ 19; chu trình chia quãng 8 thành ba phần cũng xuất hiện trong phân tích [[neo-riemann|Neo-Riemann]]. Vòng Coltrane là cách jazz kết hợp quan hệ đó với lực đẩy V7 – I.

## Luyện tập
1. Chơi chậm chuỗi hợp âm "Giant Steps" chỉ với [[ii-v-i|nốt dẫn hướng]].
2. Nhận ra từng cặp V7 – I và giọng nó dẫn tới.
3. Thử chèn vòng Coltrane vào một ii – V – I quen thuộc.
`,
  },
]
