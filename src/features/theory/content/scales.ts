import type { Article } from '../wiki'

export const scales: Article[] = [
  {
    slug: 'am-giai',
    title: 'Âm giai và giọng: hệ thống và lộ trình',
    category: 'scales',
    aliases: ['âm giai', 'scale', 'thang âm', 'lộ trình âm giai', 'âm giai và giọng'],
    summary: 'Bài tổng quan của mục: âm giai là tập hợp nốt sắp theo cao độ trong một quãng 8; giọng là âm giai được tổ chức quanh một chủ âm. Bài phân loại các âm giai và nêu thứ tự học từ âm giai trưởng đến điệu thức và âm giai phi truyền thống.',
    wiki: 'Scale_(music)',
    refs: [
      ['Open Music Theory (Gotham và cộng sự) — Phần I: Fundamentals', 'https://viva.pressbooks.pub/openmusictheory/part/fundamentals/'],
      ['Wikipedia — Scale (music)', 'https://en.wikipedia.org/wiki/Scale_(music)'],
      ['Wikipedia — Key (music)', 'https://en.wikipedia.org/wiki/Key_(music)'],
    ],
    body: `
**Âm giai** (scale, gam) là một tập hợp nốt sắp xếp theo [[cao-do|cao độ]], thường trong phạm vi một [[quang|quãng 8]]. Âm giai được phân biệt bởi **chuỗi khoảng cách** giữa các nốt kề nhau — ví dụ âm giai trưởng là cung – cung – nửa cung – cung – cung – cung – nửa cung (xem [[cung-nua-cung]]).

Khi một âm giai được tổ chức quanh một **chủ âm** — các nốt khác có vai trò ổn định hay căng, hướng về chủ âm — ta có một **giọng** (xem [[dieu-tinh]]). Hoá biểu cho biết giọng ở dạng viết (xem [[hoa-bieu]]).

## Các loại âm giai
| Số nốt | Ví dụ | Bài |
|---|---|---|
| 5 (ngũ cung) | Ngũ cung trưởng, ngũ cung thứ | [[am-giai-ngu-cung]] |
| 6 | Âm giai blues, toàn cung | [[am-giai-blues]], [[am-giai-cromatic]] |
| 7 (diatonic) | Trưởng, thứ, các điệu thức nhà thờ | [[am-giai-truong]], [[am-giai-thu]], [[dieu-thuc]] |
| 8 | Bát cung (xen kẽ cung – nửa cung) | [[am-giai-bat-cung]] |
| 12 | Cromatic | [[am-giai-cromatic]] |
Các âm giai đối xứng khác: [[dieu-thuc-chuyen-vi-gioi-han]].

## Lộ trình học
1. **Âm giai trưởng và bậc**: [[am-giai-truong]] → [[bac-am-giai]].
2. **Giọng và hoá biểu**: [[dieu-tinh]] → [[hoa-bieu]] → [[vong-quang-nam]].
3. **Âm giai thứ và giọng họ hàng**: [[am-giai-thu]] → [[giong-song-song]].
4. **Đổi giọng**: [[dich-giong]] (cả bài) và [[chuyen-giong]] (trong bài).
5. **Ngoài trưởng – thứ**: [[dieu-thuc]] → [[am-giai-ngu-cung]] → [[am-giai-blues]] → [[am-giai-cromatic]] → [[am-giai-bat-cung]].
6. **Âm giai trong hoà âm**: [[hoa-am-dieu-thuc]], [[he-thong-hop-am-am-giai]] (jazz).

## Luyện âm giai trên đàn
Kỹ thuật ngón: [[luyen-am-giai]], [[ngon-bam]]. Âm giai cũng là nội dung chính của các kỳ thi cấp độ (xem [[thi-cap-do]]).
`,
  },
  {
    slug: 'am-giai-truong',
    title: 'Âm giai trưởng',
    category: 'scales',
    aliases: ['gam trưởng', 'giọng trưởng', 'major scale', 'gam'],
    summary: 'Chuỗi 7 nốt theo công thức cung–cung–nửa–cung–cung–cung–nửa; mang màu sắc tươi sáng.',
    wiki: 'Major_scale',
    refs: [
      ['Britannica — Church mode', 'https://www.britannica.com/art/church-mode'],
      ['Britannica — Dodecachordon', 'https://www.britannica.com/topic/Dodecachordon'],
      ['Krumhansl & Kessler (1982) — probe-tone profiles (summary in Perceptual tests of key finding)', 'https://www.academia.edu/773943/Perceptual_Tests_of_an_Algorithm_for_Musical_Key_Finding'],
      ['Vuvan & Hughes (2021) — Probe tone paradigm reveals less differentiated tonal hierarchies in rock music', 'https://opus.uleth.ca/items/03f77b2d-110b-46b6-866a-c7fcf63027a6'],
    ],
    body: `
Công thức tính bằng [[cung-nua-cung]]:
**1 – 1 – ½ – 1 – 1 – 1 – ½**

::keyboard C4 D4 E4 F4 G4 A4 B4 C5 | Đô trưởng (C major): chỉ dùng phím trắng
::staff treble C4 D4 E4 F4 G4 A4 B4 C5 | Đô trưởng trên khoá Sol

Áp công thức từ nốt khác sẽ cần [[dau-hoa]]. Ví dụ Sol trưởng: G – A – B – C – D – E – **F♯** – G.

::keyboard G4 A4 B4 C5 D5 E5 F#5 G5 | Sol trưởng cần F♯ để giữ đúng công thức

## Cấu trúc hai nửa
Âm giai trưởng gồm hai **tứ âm** (nhóm 4 nốt) giống hệt nhau, cách nhau một cung: C–D–E–F | G–A–B–C, mỗi nhóm theo mẫu 1 – 1 – ½.

## Âm giai trưởng ra đời từ đâu?
- Thời [[thoi-ky-trung-co|Trung cổ]], nhạc nhà thờ dùng **tám điệu thức** (xem [[dieu-thuc]]) — chưa có khái niệm "trưởng" và "thứ".
- Năm **1547**, Heinrich Glarean (Glareanus) trong sách *Dodecachordon* thêm hai điệu **Ionian** (giống âm giai trưởng) và **Aeolian** (giống thứ tự nhiên) để mô tả thực tế âm nhạc đương thời, khi giọng trưởng và giọng thứ ngày càng phổ biến.
- Tuy vậy, **không nên** hiểu là trưởng – thứ "sinh ra" từ Ionian – Aeolian: cả bốn đều hình thành cùng lúc từ thói quen thêm [[dau-hoa]] khi hát (*musica ficta*). Đến thế kỷ 17, hệ thống **trưởng – thứ** dần thay thế hệ điệu thức.

## Tai người nghe "thứ bậc" trong âm giai
Trong thí nghiệm nổi tiếng của **Krumhansl và Kessler (1982)**, người nghe nghe một đoạn xác lập giọng rồi đánh giá từng nốt trong 12 nốt "hợp" đến đâu. Kết quả là một **thứ bậc bốn tầng**, giống nhau ở cả giọng trưởng và giọng thứ:
1. **Chủ âm** — hợp nhất.
2. Hai nốt còn lại của **[[hop-am-ba|hợp âm]] chủ** (bậc 5 và bậc 3).
3. Các nốt khác **trong [[am-giai|âm giai]]**.
4. Các nốt **ngoài âm giai** — kém hợp nhất.

Nghiên cứu sau (Vuvan và Hughes, 2021) thấy với nhạc **rock**, thứ bậc này **phẳng hơn** — nghĩa là kết quả 1982 mô tả nhạc cổ điển phương Tây, không phải mọi loại nhạc. Ý nghĩa với người dạy: [[bac-am-giai]] không chỉ là tên gọi mà là những "vai" khác nhau mà tai thật sự cảm nhận.

Các dấu hoá cần thiết được gom vào [[hoa-bieu]]. Tên và vai trò từng nốt: [[bac-am-giai]]. Mỗi âm giai trưởng có một [[am-giai-thu]] song song (xem [[giong-song-song]]).
`,
  },
  {
    slug: 'am-giai-thu',
    title: 'Âm giai thứ',
    category: 'scales',
    aliases: ['gam thứ', 'giọng thứ', 'minor scale', 'thứ tự nhiên', 'thứ hoà âm', 'thứ giai điệu', 'harmonic minor', 'melodic minor'],
    summary: 'Âm giai mang màu sắc buồn, trầm; có ba dạng: tự nhiên, hoà âm và giai điệu.',
    wiki: 'Minor_scale',
    refs: [
      ['Wikipedia — Minor scale', 'https://en.wikipedia.org/wiki/Minor_scale'],
      ['eCampusOntario — Minor keys explained (PDF)', 'https://ecampusontario.pressbooks.pub/app/uploads/sites/512/2019/06/GF1-005a-gf-Minor-keys-explained.pdf'],
      ['Frontiers in Psychology (2013) — review incl. Gerardi & Gerken (1995), Dalla Bella et al. (2001)', 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00464/full'],
      ['Science News — Fritz et al. (2009), universal musical feelings (Mafa study)', 'https://sciencenews.org/?p=4390'],
      ['Society for Music Theory forum — on melodic minor', 'https://discuss.societymusictheory.org/discussion/comment/1055/'],
    ],
    body: `
## Thứ tự nhiên
**1 – ½ – 1 – 1 – ½ – 1 – 1** (tính bằng [[cung-nua-cung]])

::keyboard A4 B4 C5 D5 E5 F5 G5 A5 | La thứ tự nhiên (A minor): toàn phím trắng

La thứ dùng chung [[hoa-bieu]] với Đô trưởng — xem [[giong-song-song]].

## Thứ hoà âm
Nâng **bậc 7** lên nửa cung: A – B – C – D – E – F – **G♯** – A. Bậc 7 nâng trở thành **[[bac-am-giai|cảm âm]]**, kéo mạnh về âm chủ và cho phép có [[hop-am-ba|hợp âm V trưởng]] (E–G♯–B). Quãng F–G♯ là [[quang|quãng 2 tăng]] đặc trưng, nghe "phương Đông".

::keyboard A4 B4 C5 D5 E5 F5 G#5 A5 | La thứ hoà âm

## Thứ giai điệu
Đi **lên**: nâng cả bậc 6 và 7 (A – B – C – D – E – **F♯** – **G♯** – A) để tránh quãng 2 tăng. Đi **xuống**: trở về thứ tự nhiên (theo truyền thống cổ điển). Trong jazz, thứ giai điệu dùng dạng đi lên cho cả hai chiều.

::keyboard A4 B4 C5 D5 E5 F#5 G#5 A5 | La thứ giai điệu (chiều đi lên)

## Vì sao có ba dạng?
- **Thứ hoà âm**: bậc 7 được nâng lên để có **cảm âm** (cách chủ âm nửa cung) — vốn là một [[dau-hoa|dấu hoá]] thêm khi hát (*musica ficta*). Nhưng việc này tạo ra quãng **2 tăng** giữa bậc 6 và 7, theo truyền thống là **khó hát**.
- **Thứ giai điệu** ra đời để tránh quãng 2 tăng đó: nâng thêm bậc 6 khi đi lên.
- Quy ước "đi xuống thì về thứ tự nhiên" là cách **sách giáo khoa** tóm tắt; các nhà soạn nhạc không phải lúc nào cũng theo. Có nhà lý thuyết cho rằng nên hiểu giọng thứ như **một tập hợp nốt linh hoạt** (bậc 6 và 7 có hai dạng) hơn là ba [[am-giai|âm giai]] tách biệt.

## Thứ có "buồn" không?
- Khi **tốc độ và [[cuong-do|cường độ]] được kiểm soát**, người nghe phương Tây thường cảm thấy [[am-giai-truong|giọng trưởng]] **vui**, giọng thứ **buồn**.
- Trẻ em: phần lớn nghiên cứu (Gerardi và Gerken 1995; Dalla Bella và cộng sự 2001) cho thấy mối liên hệ "trưởng – vui, thứ – buồn" chỉ **ổn định từ khoảng 6–8 tuổi**; trẻ nhỏ hơn phân biệt được trưởng – thứ nhưng chưa gắn với cảm xúc.
- Nghiên cứu xuyên văn hoá (Fritz và cộng sự, 2009) với người **Mafa** ở Cameroon — chưa từng nghe nhạc phương Tây — thấy họ cũng thường nghe đoạn giọng trưởng là **vui**, giọng thứ là **sợ hãi**.
`,
  },
  {
    slug: 'bac-am-giai',
    title: 'Bậc âm giai',
    category: 'scales',
    aliases: ['bậc', 'scale degree', 'chủ âm', 'át âm', 'hạ át âm', 'cảm âm', 'thượng chủ âm', 'hạ trung âm', 'tonic', 'dominant', 'subdominant', 'leading tone'],
    summary: 'Mỗi nốt trong âm giai có số thứ tự (1–7) và một tên chức năng, như chủ âm, át âm, cảm âm.',
    wiki: 'Degree_(music)',
    refs: [
      ['Krumhansl & Kessler (1982) — probe-tone profiles (summary)', 'https://www.academia.edu/773943/Perceptual_Tests_of_an_Algorithm_for_Musical_Key_Finding'],
      ['Wikipedia — Degree (music)', 'https://en.wikipedia.org/wiki/Degree_(music)'],
      ['Wikipedia — Solfège', 'https://en.wikipedia.org/wiki/Solf%C3%A8ge'],
    ],
    body: `
| Bậc | Tên | Tên quốc tế | Trong Đô trưởng |
|---|---|---|---|
| 1 | Chủ âm | Tonic | C |
| 2 | Thượng chủ âm | Supertonic | D |
| 3 | Trung âm | Mediant | E |
| 4 | Hạ át âm | Subdominant | F |
| 5 | Át âm | Dominant | G |
| 6 | Hạ trung âm | Submediant | A |
| 7 | Cảm âm | Leading tone | B |
::staff treble C4=1 D4=2 E4=3 F4=4 G4=5 A4=6 B4=7 C5=1 | Bảy bậc của âm giai Đô trưởng

## Ý nghĩa
- **Chủ âm** (1): điểm dừng, "nhà" của bản nhạc.
- **Át âm** (5): quan trọng thứ hai, tạo lực hút mạnh về chủ âm.
- **Cảm âm** (7): cách chủ âm [[cung-nua-cung|nửa cung]], "muốn" đi lên chủ âm. Trong [[am-giai-thu|giọng thứ tự nhiên]] bậc 7 cách chủ âm một cung nên gọi là **bậc 7 thứ** (subtonic).

[[hop-am-ba|Hợp âm]] dựng trên các bậc được ghi bằng số La Mã (I, IV, V…): xem [[chuc-nang-hoa-am]]. Ứng dụng trong [[am-giai-truong]] và [[am-giai-thu]].

## Bậc nào "quan trọng" hơn?
Thí nghiệm của Krumhansl và Kessler (1982) cho thấy tai người nghe xếp **chủ âm** cao nhất, tiếp theo là **bậc 5 và bậc 3** (cùng tạo hợp âm chủ), rồi các bậc còn lại trong [[am-giai|âm giai]] — xem [[am-giai-truong]].

## Đọc nhạc bằng bậc
- **Đô di động** (movable do): "Đô" luôn là chủ âm của giọng đang chơi — tên âm tiết **chính là bậc**, giúp nghe và nhớ chức năng.
- **Đô cố định** (fixed do): "Đô" luôn là nốt C, dù giọng nào.
- Cả hai đều có ưu – nhược; xem [[xuong-am]] và [[phuong-phap-giao-duc-am-nhac]].

Nghĩ theo bậc là nền tảng của [[dich-giong]] và [[chuc-nang-hoa-am]].
`,
  },
  {
    slug: 'hoa-bieu',
    title: 'Hoá biểu',
    category: 'scales',
    aliases: ['bộ khoá', 'key signature'],
    summary: 'Nhóm dấu thăng hoặc giáng đặt ở đầu khuông, cho biết bản nhạc thuộc giọng nào.',
    wiki: 'Key_signature',
    refs: [
      ['Wikipedia — Toccata and Fugue in D minor, BWV 538 ("Dorian")', 'https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_538'],
      ['Bachvereniging — Toccata and fugue in D minor "Dorian"', 'https://bachvereniging.nl/en/bwv/bwv-538'],
      ['Project Gutenberg — Schubart, Ideen zu einer Ästhetik der Tonkunst (1806)', 'https://www.gutenberg.org/ebooks/79254'],
      ['Music Theory Online — Listening for Schubert\'s "Doppelgängers" (on Schubart)', 'https://mtosmt.org/issues/mto.95.1.4/mto.95.1.4.code.php'],
    ],
    body: `
Hoá biểu gồm các [[dau-hoa]] đặt ngay sau [[khoa-nhac]], áp dụng cho mọi nốt cùng tên trong suốt bản nhạc.

## Thứ tự dấu
- Dấu thăng: **F – C – G – D – A – E – B** ("Fa Đô Sol Rê La Mi Si")
- Dấu giáng: **B – E – A – D – G – C – F** (ngược lại thứ tự dấu thăng)
::staff treble k:7# | Thứ tự 7 dấu thăng: F – C – G – D – A – E – B
::staff treble k:7b | Thứ tự 7 dấu giáng: B – E – A – D – G – C – F

## Mẹo nhận giọng trưởng
- Với dấu thăng: lấy dấu thăng **cuối cùng**, lên [[cung-nua-cung|nửa cung]] là âm chủ. (F♯ C♯ → D trưởng.)
- Với dấu giáng: dấu giáng **áp chót** chính là tên giọng. (B♭ E♭ A♭ → E♭ trưởng.) Riêng 1 dấu giáng là F trưởng.
::staff treble k:2# D4=D_trưởng | Hai dấu thăng: dấu cuối là C♯, lên nửa cung → Rê trưởng
::staff treble k:3b Eb4=E♭_trưởng | Ba dấu giáng: dấu áp chót là E♭ → Mi giáng trưởng

## Bảng hoá biểu
| Số dấu | Giọng trưởng (thăng) | Giọng thứ (thăng) | Giọng trưởng (giáng) | Giọng thứ (giáng) |
|---|---|---|---|---|
| 0 | C | a | C | a |
| 1 | G | e | F | d |
| 2 | D | b | B♭ | g |
| 3 | A | f♯ | E♭ | c |
| 4 | E | c♯ | A♭ | f |
| 5 | B | g♯ | D♭ | b♭ |
| 6 | F♯ | d♯ | G♭ | e♭ |
| 7 | C♯ | a♯ | C♭ | a♭ |

Mỗi hoá biểu ứng với một [[am-giai-truong]] và một [[am-giai-thu]] — xem [[giong-song-song]]. Đổi cả bài sang hoá biểu khác: [[dich-giong]]. Toàn bộ được sắp xếp gọn trong [[vong-quang-nam]].

## Hoá biểu "thiếu một dấu" thời Baroque
Trong nhạc [[thoi-ky-baroque|Baroque]], giọng thứ đôi khi được viết với **ít hơn một dấu giáng** so với ngày nay — một thói quen còn lại từ thời điệu thức. Ví dụ nổi tiếng: Toccata và [[fugue|Fugue]] Rê thứ BWV 538 của [[Bach]] được viết **không có hoá biểu** (Rê thứ ngày nay có 1 dấu giáng), nên từ năm 1845 bị gán biệt danh "**Dorian**" — vì nhìn giống [[dieu-thuc|điệu Dorian]] trên Rê. Khi dạy học sinh đọc bản in cũ, cần lưu ý điều này: dấu B♭ sẽ được viết thành dấu hoá bất thường trong bài.

## "Tính cách" của các giọng
Nhà thơ – nhạc sĩ Christian Schubart (viết khoảng 1784, in năm 1806) mô tả mỗi giọng có một tính cách riêng — ví dụ Rê thứ là "nỗi u sầu nữ tính". Cần nhớ rằng thời đó đàn phím thường được [[luat-binh-quan|lên dây không bình quân]], nên các giọng có thể nghe khác nhau; trong bình quân 12, các giọng chỉ khác nhau về **[[cao-do|cao độ]]**.

## Vì sao có thứ tự đó?
Thứ tự dấu thăng "**Fa – Đô – Sol – Rê – La – Mi – Si**" — mỗi dấu cách dấu trước một [[quang|quãng 5]], chính là [[vong-quang-nam]].
`,
  },
  {
    slug: 'vong-quang-nam',
    title: 'Vòng quãng năm',
    category: 'scales',
    aliases: ['vòng tròn quãng 5', 'circle of fifths', 'vòng quãng 5'],
    summary: 'Sơ đồ xếp 12 giọng theo chuỗi quãng 5 đúng; mỗi bước theo chiều kim đồng hồ thêm một dấu thăng.',
    wiki: 'Circle_of_fifths',
    refs: [
      ['Britannica — Circle of fifths', 'https://britannica.com/art/circle-of-fifths'],
      ['Wikipedia — Mykola Dyletsky', 'https://en.wikipedia.org/wiki/Mykola_Pavlovych_Dyletsky'],
      ['Wikipedia — Johann David Heinichen', 'https://en.wikipedia.org/wiki/Johann_David_Heinichen'],
      ['Project MUSE — review of Jensen (1992) on Diletskii\'s circle', 'https://muse.jhu.edu/article/404787/pdf'],
    ],
    body: `
::circle-of-fifths | Vòng ngoài: giọng trưởng · vòng trong: giọng thứ song song · viền: số dấu hoá

Đi **theo chiều kim đồng hồ**, mỗi bước lên một [[quang|quãng 5 đúng]] và [[hoa-bieu]] thêm một [[dau-hoa|dấu thăng]]. Đi **ngược chiều** (lên quãng 4), mỗi bước thêm một dấu giáng. Ở đáy vòng, F♯ trưởng và G♭ trưởng là [[trung-am]] — vòng tròn khép kín nhờ [[luat-binh-quan]].

## Dùng để làm gì
- Tra nhanh hoá biểu của mọi giọng.
- Tìm giọng song song: cặp trong–ngoài cùng ô (C – a). Xem [[giong-song-song]].
- Các giọng **cạnh nhau** chỉ khác một dấu hoá → [[chuyen-giong]] mượt mà.
- Ba ô liền nhau (F – C – G) cho ba [[hop-am-ba|hợp âm]] chính IV – I – V của giọng ở giữa.
- Đi ngược chiều kim đồng hồ là chuỗi **át âm → [[bac-am-giai|chủ âm]]** (G → C → F → B♭…), nền tảng của nhiều [[vong-hop-am]] như [[ii-v-i|ii – V – I]] và [[mo-tien-hoa-am|mô tiến quãng 5]].
- Hai giọng **đối diện** nhau (C và F♯) xa nhau nhất — vang cùng lúc tạo [[da-dieu-tinh]].

## Lịch sử
- Vòng quãng 5 cổ nhất được biết đến nằm trong sách *Grammatika* (khoảng **1677–1679**) của nhà lý luận gốc Kyiv **Nikolai Diletsky**. Với ông, đó chỉ là công cụ để **kéo dài** tác phẩm bằng cách chuyển giọng liên tiếp.
- Ở Đức, **[[johann-david-heinichen|Johann David Heinichen]]** độc lập vẽ "vòng âm nhạc" (*Musicalischer Circul*) trong sách về bè trầm liên tục năm **1711**, và bản sửa năm 1728 gần với sơ đồ ngày nay.
- Ý tưởng đi vòng qua các quãng 5 còn sớm hơn: những năm 1540, Matthias Greiter đã chuyển một bài hát qua bảy bước theo vòng quãng 5. (Việc gán vòng quãng 5 cho Pythagore **không có bằng chứng**.)

Vòng chỉ **khép kín** được trên đàn lên dây bình quân; với hệ Pythagore, 12 quãng 5 thuần **dư** ra một "dấu phẩy" (xem [[luat-binh-quan]]).
`,
  },
  {
    slug: 'giong-song-song',
    title: 'Giọng song song và giọng cùng tên',
    category: 'scales',
    aliases: ['giọng song song', 'giọng cùng tên', 'relative key', 'parallel key', 'giọng họ hàng'],
    summary: 'Giọng song song dùng chung hoá biểu (C trưởng – La thứ); giọng cùng tên dùng chung âm chủ (C trưởng – Đô thứ).',
    wiki: 'Relative_key',
    refs: [
      ['Wikipedia — Relative key', 'https://en.wikipedia.org/wiki/Relative_key'],
      ['Wikipedia — Parallel key', 'https://en.wikipedia.org/wiki/Parallel_key'],
    ],
    body: `
## Giọng song song (relative)
Một [[am-giai-truong|giọng trưởng]] và một [[am-giai-thu|giọng thứ]] có **cùng [[hoa-bieu]]**:
- Âm chủ giọng thứ = **bậc 6** của giọng trưởng (hoặc thấp hơn [[quang|quãng 3 thứ]]).
- C trưởng ↔ La thứ; G trưởng ↔ Mi thứ; F trưởng ↔ Rê thứ.

## Giọng cùng tên (parallel)
Cùng **âm chủ**, khác hoá biểu:
- C trưởng (không dấu) ↔ Đô thứ (3 [[dau-hoa|dấu giáng]]).
- Giọng thứ cùng tên có bậc 3, 6, 7 thấp hơn [[cung-nua-cung|nửa cung]].

::keyboard C4 E4 G4 | C trưởng: C – E – G
::keyboard C4 Eb4 G4 | C thứ: C – E♭ – G (bậc 3 hạ xuống)

## Cẩn thận khi đọc sách tiếng Anh
Thuật ngữ tiếng Việt và tiếng Anh **ngược nhau** ở chỗ này:
| Tiếng Việt | Tiếng Anh | Ví dụ |
|---|---|---|
| Giọng **song song** | **relative** key | C trưởng – La thứ |
| Giọng **cùng tên** | **parallel** key | C trưởng – Đô thứ |

"Parallel" dịch sát là "song song", nhưng lại chỉ **giọng cùng tên**. Khi dạy bằng giáo trình tiếng Anh (như [[thi-cap-do|ABRSM]]), cần nói rõ để học sinh không nhầm.

## Giọng họ hàng gần
Các giọng có hoá biểu khác nhau không quá một dấu: giọng gốc, giọng song song, và hai giọng hai bên trên [[vong-quang-nam]] cùng các giọng song song của chúng. Đây là đích đến phổ biến khi [[chuyen-giong]]. Mượn [[hop-am-ba|hợp âm]] từ giọng cùng tên: xem [[hop-am-muon]].
`,
  },  {
    slug: 'dieu-tinh',
    title: 'Giọng và điệu tính',
    category: 'scales',
    aliases: ['điệu tính', 'tonality', 'giọng', 'giọng điệu', 'key', 'trung tâm giọng', 'tonal hierarchy', 'thứ bậc điệu tính'],
    summary: 'Giọng (key) là một âm giai cùng chủ âm của nó; điệu tính (tonality) là cách tổ chức cao độ hướng về chủ âm. Bài nêu nguồn gốc thuật ngữ, thứ bậc điệu tính đo bằng thực nghiệm (Krumhansl và Kessler 1982) và cách xác định giọng của một bản nhạc.',
    wiki: 'Tonality',
    refs: [
      ['Wikipedia — Tonality', 'https://en.wikipedia.org/wiki/Tonality'],
      ['Wikipedia — Key (music)', 'https://en.wikipedia.org/wiki/Key_(music)'],
      ['Christensen — "Tonality", Cambridge History of Western Music Theory', 'https://www.cambridge.org/core/books/cambridge-history-of-western-music-theory/tonality/8CA2CCF5615C16D2DA7E24C5DC1259CB'],
      ['Krumhansl và Kessler (1982), Psychological Review 89(4) — DOI', 'https://doi.org/10.1037/0033-295X.89.4.334'],
      ['Yust — lịch sử thuật ngữ "tonality" (bản thảo, Boston University)', 'https://sites.bu.edu/jyust/files/2025/05/tonalityPreprint.pdf'],
    ],
    body: `
## Giọng và điệu tính khác nhau thế nào?
- **Giọng** (key): một [[am-giai|âm giai]] **cùng chủ âm** của nó — Đô trưởng, La thứ… Hoá biểu ghi lại giọng trên giấy (xem [[hoa-bieu]]).
- **Điệu tính** (tonality): **cách tổ chức** [[cao-do|cao độ]] trong đó [[giai-dieu|giai điệu]] và hoà âm **hướng về** một nốt trung tâm (chủ âm). Theo nghĩa hẹp và thông dụng nhất, đó là hệ thống trưởng – thứ của nhạc phương Tây khoảng 1600–1900; theo nghĩa rộng, là bất kỳ cách sắp xếp có hệ thống nào của các cao độ.
Một bản nhạc **ở giọng** Đô trưởng; nó **có tính điệu tính** vì mọi thứ quy về Đô. Nhạc [[phi-dieu-tinh]] là nhạc cố ý tránh một trung tâm như vậy.

## Nguồn gốc thuật ngữ
Cách dùng từ *tonalité* trong lý luận âm nhạc thường được ghi cho Alexandre-Étienne **Choron** (1810), để phân biệt hoà âm "hiện đại" với nhạc cổ; François-Joseph **Fétis** dùng rộng rãi từ 1840 và nói về nhiều "loại điệu tính". Niên đại không hoàn toàn thống nhất: Carl Dahlhaus cho rằng Castil-Blaze đặt ra từ này năm 1821. Một số nghiên cứu gần đây chỉ ra rằng cách dùng thế kỷ 19 gắn với quan niệm xếp hạng "tiến hoá" giữa các nền âm nhạc.

## Thứ bậc điệu tính: đo bằng thực nghiệm
Trong thí nghiệm **"nốt dò"** (probe tone) của Carol **Krumhansl** và Edward **Kessler** (1982), người nghe được nghe một đoạn xác lập giọng (âm giai hoặc [[vong-hop-am|vòng hợp âm]]), rồi chấm điểm mức độ "hợp" của từng nốt trong 12 nốt. Kết quả ổn định ở cả [[am-giai-truong|giọng trưởng]] và giọng thứ, tạo thành **bốn tầng**:
1. **Chủ âm** — được đánh giá cao nhất.
2. Các nốt còn lại của **[[hop-am-ba|hợp âm]] chủ** (bậc 3, bậc 5).
3. Các nốt khác **trong âm giai**.
4. Các nốt **ngoài âm giai** — thấp nhất.
Các "hồ sơ giọng" (key profiles) này đến nay vẫn được dùng làm chuẩn trong nghiên cứu [[lo-trinh-nghe-cam-thu|nhận thức âm nhạc]]; một số nghiên cứu sau cho thấy thứ bậc trong nhạc rock **ít phân tầng** hơn nhạc cổ điển. Liên quan: [[ky-vong-am-nhac]].

## Xác định giọng của một bản nhạc
1. Đọc **hoá biểu**: thu hẹp còn hai khả năng — giọng trưởng và giọng thứ song song ([[giong-song-song]]).
2. Tìm **cảm âm nâng** của giọng thứ (ví dụ G♯ ở La thứ — xem [[am-giai-thu]], [[bac-am-giai]]).
3. Nhìn **hợp âm đầu và cuối**, nhất là nốt cuối của bè trầm, và các **kết** ([[cau-ket]]).
4. Giữa bài có thể **chuyển giọng** ([[chuyen-giong]]); giọng của tác phẩm là giọng mở đầu và kết thúc.

## Đọc tiếp
[[chuc-nang-hoa-am]] (vai trò của từng hợp âm trong giọng), [[vong-quang-nam]] (quan hệ giữa các giọng), [[hoa-am-dieu-thuc]], [[hoa-am-the-ky-20]] (khi điệu tính bị nới lỏng).
`,
  },

  {
    slug: 'dieu-thuc',
    title: 'Điệu thức nhà thờ',
    category: 'scales',
    aliases: ['điệu thức', 'mode', 'modes', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 'điệu Dorian'],
    summary: 'Bảy âm giai tạo ra khi bắt đầu từ mỗi bậc khác nhau của âm giai trưởng — mỗi điệu có màu sắc riêng.',
    wiki: 'Mode_(music)',
    refs: [
      ['Wikipedia — Gregorian mode', 'https://en.wikipedia.org/wiki/Gregorian_mode'],
      ['Britannica — Church mode', 'https://www.britannica.com/art/church-mode'],
      ['Britannica — Dodecachordon', 'https://www.britannica.com/topic/Dodecachordon'],
      ['Wikipedia — So What (Miles Davis composition)', 'https://en.wikipedia.org/wiki/So_What_(Miles_Davis_composition)'],
      ['Wikipedia — Lydian Chromatic Concept of Tonal Organization', 'https://en.wikipedia.org/wiki/Lydian_Chromatic_Concept_of_Tonal_Organization'],
    ],
    body: `
Chơi các phím trắng nhưng lấy **nốt khác** làm âm chủ, ta được 7 điệu thức:
| Điệu | Bắt đầu từ (phím trắng) | Công thức | Nốt đặc trưng | Màu sắc |
|---|---|---|---|---|
| Ionian | C | = [[am-giai-truong|trưởng]] | — | Sáng |
| Dorian | D | thứ, **6 trưởng** | ♮6 | Thứ nhưng tươi, jazz/funk |
| Phrygian | E | thứ, **2 thứ** | ♭2 | Tây Ban Nha, flamenco |
| Lydian | F | trưởng, **4 tăng** | ♯4 | Lơ lửng, nhạc phim |
| Mixolydian | G | trưởng, **7 thứ** | ♭7 | [[blues-12-nhip|Blues]], rock |
| Aeolian | A | = [[am-giai-thu|thứ tự nhiên]] | — | Buồn |
| Locrian | B | thứ, **2 thứ, 5 giảm** | ♭2, ♭5 | Bất ổn, hiếm dùng |

::keyboard D4 E4 F4 G4 A4 B4 C5 D5 | Rê Dorian: phím trắng từ D đến D
::keyboard G4 A4 B4 C5 D5 E5 F5 G5 | Sol Mixolydian: phím trắng từ G đến G

## Cách nghĩ thực hành
So sánh với [[am-giai|âm giai]] trưởng/thứ cùng âm chủ và chỉ nhớ **nốt khác biệt**. Ví dụ: Dorian = thứ tự nhiên nhưng bậc 6 nâng lên.

Điệu thức có nguồn gốc từ thánh ca [[thoi-ky-trung-co|Trung cổ]] và được dùng nhiều trong jazz, nhạc dân gian và nhạc phim. Xem thêm [[am-giai-ngu-cung]], [[am-giai-blues]]. Trong jazz, mỗi điệu thức gắn với một loại [[hop-am-ba|hợp âm]]: [[he-thong-hop-am-am-giai]].

## Lịch sử: tám điệu Gregorian
- Khoảng **cuối thế kỷ 8 – thế kỷ 9**, thánh ca Gregorian được xếp vào **tám điệu thức**, có lẽ theo mô hình *oktōēchos* của Byzantine. Ban đầu chúng chỉ được gọi bằng **số thứ tự**.
- Có **bốn nốt kết** (finalis): **D, E, F, G**. Mỗi nốt kết có hai điệu: **chính** (authentic — [[cao-do|âm vực]] từ nốt kết lên trên) và **phụ** (plagal, tên có tiền tố "hypo-" — âm vực từ [[quang|quãng]] 4 dưới đến quãng 5 trên nốt kết).
- Tên Hy Lạp (Dorian, Phrygian…) được gắn vào từ khoảng thế kỷ 9 trong một nỗ lực **sai lầm** nhằm nối với âm nhạc Hy Lạp cổ đại — các điệu Hy Lạp thật dùng hệ lên dây khác hẳn.
- Năm **1547**, Glarean thêm **Aeolian** và **Ionian** (cùng hai điệu phụ), thành **12 điệu**. **Locrian** (và Hypolocrian) không có trong hệ 12 điệu của Glarean.

## Điệu thức trong jazz
- Năm **1953**, George Russell tự xuất bản *The Lydian Chromatic Concept of Tonal Organization* — lý thuyết đầu tiên khám phá mối quan hệ **dọc giữa hợp âm và âm giai**, được cho là đã ảnh hưởng đến [[jazz-dieu-thuc|jazz điệu thức]].
- **"So What"** (Miles Davis, album *Kind of Blue*, 1959): khuôn 32 [[so-chi-nhip|ô nhịp]], 16 ô **Rê Dorian**, 8 ô **Mi♭ Dorian**, rồi trở lại Rê Dorian. Chỉ hai "hợp âm" nên người [[ngau-hung-tu-do|ngẫu hứng tự do]] theo [[giai-dieu|giai điệu]] thay vì chạy theo hợp âm đổi nhanh. Hợp âm mở đầu xếp chồng quãng 4 được gọi là "**[[hop-am-so-what-barron|hợp âm So What]]**" (xem [[hoa-am-quang-bon]]).
`,
  },
  {
    slug: 'am-giai-ngu-cung',
    title: 'Âm giai ngũ cung',
    category: 'scales',
    aliases: ['ngũ cung', 'pentatonic', 'ngũ âm', 'pentatonic scale', 'cung thương giốc chủy vũ'],
    summary: 'Âm giai 5 nốt không có nửa cung; nền tảng của nhạc dân gian Việt Nam, châu Á và nhiều nhạc pop, blues.',
    wiki: 'Pentatonic_scale',
    refs: [
      ['Wikipedia — Étude Op. 10, No. 5 (Chopin)', 'https://en.wikipedia.org/wiki/%C3%89tude_Op._10,_No._5_(Chopin)'],
      ['Henle — Chopin, Étude G-flat major Op. 10 No. 5', 'https://www.henle.de/en/Etude-G-flat-major-op.-10-no.-5/HN-1323'],
      ['Wikipedia — Voiles (Debussy)', 'https://en.wikipedia.org/wiki/Voiles'],
      ['Tạp chí Khoa học ĐHSP TP.HCM — nghiên cứu về Ca Huế (ghi âm Hò = Đô)', 'https://journal.hcmue.edu.vn/index.php/hcmuejos/article/download/1841/1830'],
      ['Báo Pháp luật — Cung Thương Giốc Chủy Vũ và Hò Xự Xang Xê Cống', 'https://doanhnhan.baophapluat.vn/khi-am-nhac-tro-thanh-su-gia-ke-chuyen-tai-home-hanoi-xuan-2025-80320.html'],
      ['RFA — Dân ca miền Trung', 'https://www.rfa.org/vietnamese/news/programs/MusicForWeekend/central-province-folklores-vh-02232014104605.html'],
    ],
    body: `
Bỏ bậc 4 và bậc 7 của [[am-giai-truong]] (hai nốt tạo [[cung-nua-cung|nửa cung]]), ta được **ngũ cung trưởng**: C – D – E – G – A.

::keyboard C4 D4 E4 G4 A4 | Ngũ cung trưởng trên C
::keyboard F#4 G#4 A#4 C#5 D#5 | Năm phím đen chính là một âm giai ngũ cung

## Ngũ cung thứ
Bắt đầu từ bậc 5 của ngũ cung trưởng: A – C – D – E – G (song song với C ngũ cung trưởng, như [[giong-song-song]]). Đây là nền tảng của [[am-giai-blues]] và solo guitar rock.

## Trong âm nhạc Việt Nam
Nhạc dân gian và cổ truyền Việt Nam dựa phần lớn trên hệ ngũ cung. Năm âm gốc Hán **Cung – Thương – Giốc – Chủy – Vũ** được người Việt gọi là **Hò – Xự – Xang – Xê – Cống**; âm **Líu** cao hơn Hò một [[quang|quãng 8]].
- Một nghiên cứu về Ca Huế ghi chữ **Hò = Đô**; theo đó Xự – Xang – Xê – Cống ứng với **Rê – Fa – Sol – La**. Đây là quy ước ghi chép: các nguồn khác có thể đặt Hò ở [[cao-do|cao độ]] khác (ví dụ Hò = Rê).
- Ca Huế có hai [[dieu-thuc|điệu thức]] chính: **điệu Bắc** (tươi vui hoặc trang nghiêm) và **điệu Nam** (như hơi Ai — đặc trưng miền Trung). Ghi trên [[khuong-nhac|khuông nhạc]], điệu Nam trông giống điệu Bắc, nhưng khi [[dien-tau|diễn tấu]] một số âm được chơi **"già"** (cao hơn) hoặc **"non"** (thấp hơn) — điều mà khuông nhạc phương Tây **không ghi được đầy đủ**.
- Vì vậy dùng piano để chơi nhạc cổ truyền chỉ **gần đúng**. Về các tác phẩm piano Việt Nam dùng chất liệu dân gian: [[piano-viet-nam]].

## Vì sao dễ nghe?
Không có nửa cung và [[thuan-nghich|tritone]] nên mọi nốt chơi cùng nhau đều thuận tai — lý do giáo viên hay cho học trò [[ngau-hung-piano|ngẫu hứng]] trên phím đen.

## Ngũ cung trong tác phẩm piano
- **[[Chopin]] — Étude Op. 10 số 5 "Phím đen"**: tay phải chạy [[lien-ba|liên ba]] **gần như hoàn toàn trên phím đen** (chỉ có một nốt Fa tự nhiên ở [[so-chi-nhip|ô nhịp]] 66), nên hoà âm mang **màu ngũ cung**. Chopin từng viết rằng đây là bài "kém thú vị nhất" với ai không biết nó được viết cho phím đen.
- **[[Debussy]] — "Voiles"** ([[the-loai|Prelude]], 1909): gần như toàn bộ dùng [[am-giai-cromatic|âm giai toàn cung]], trừ một **đoạn ngắn ngũ cung** ở giữa (khoảng 6 ô nhịp) — một ví dụ rất tốt để học sinh nghe sự khác nhau giữa hai loại [[am-giai|âm giai]].
`,
  },
  {
    slug: 'am-giai-cromatic',
    title: 'Âm giai cromatic và âm giai toàn cung',
    category: 'scales',
    aliases: ['âm giai nửa cung', 'chromatic scale', 'cromatic', 'chromatic', 'âm giai toàn cung', 'whole tone scale', 'âm giai cung'],
    summary: 'Âm giai cromatic dùng cả 12 nửa cung; âm giai toàn cung gồm 6 nốt cách nhau đều một cung.',
    wiki: 'Chromatic_scale',
    refs: [
      ['Wikipedia — Voiles (Debussy)', 'https://en.wikipedia.org/wiki/Voiles'],
      ['The Listeners\' Club — Debussy\'s "Voiles": sailing on a whole-tone sea', 'https://thelistenersclub.com/?p=16303'],
      ['MusicWeb International — Glinka, Ruslan and Lyudmila (review)', 'https://musicweb-international.com/classrev/2004/Jun04/Glinka_Ludmila.htm'],
      ['Mahler Foundation — Mikhail Glinka', 'https://mahlerfoundation.org/?p=6702'],
    ],
    body: `
## Âm giai cromatic
Đi lần lượt qua **mọi phím** (trắng và đen) — 12 [[cung-nua-cung|nửa cung]] trong một [[quang|quãng 8]]. Quy ước: đi lên dùng [[dau-hoa|dấu thăng]], đi xuống dùng dấu giáng.

::keyboard C4 C#4 D4 D#4 E4 F4 F#4 G4 G#4 A4 A#4 B4 | Âm giai cromatic: tất cả 12 phím

**Ngón bấm** chuẩn cho piano: ngón 3 trên mọi phím đen, ngón 1 trên phím trắng; chỗ hai phím trắng liền nhau (E–F, B–C) dùng ngón 1–2 (xem [[ngon-bam]]).

## Âm giai toàn cung
Sáu nốt cách đều nhau **một cung**: C – D – E – F♯ – G♯ – A♯. Không có [[bac-am-giai|chủ âm]] rõ ràng nên nghe mơ hồ, như trong mơ. Chỉ có **hai** âm giai toàn cung khác nhau (bắt đầu từ C hoặc C♯).

::keyboard C4 D4 E4 F#4 G#4 A#4 | Âm giai toàn cung trên C

## Lịch sử âm giai toàn cung
- Trong opera *Ruslan và Lyudmila*, **Glinka** dùng âm giai toàn cung **đi xuống** gắn với nhân vật phản diện — gã lùn phù thuỷ **Chernomor**. Đây là lần đầu [[am-giai|âm giai]] này xuất hiện trong nhạc Nga; các nhạc sĩ Nga đến nay vẫn gọi nó là "**âm giai Chernomor**". Ảnh hưởng của nó lan đến các nhà soạn nhạc sau, trong đó có [[claude-debussy|Debussy]].
- Vì mọi nốt cách đều nhau, âm giai toàn cung **không có cảm âm** và **không có quãng 5 đúng** — nên không có lực hút về chủ âm. Đó là lý do nó nghe "lơ lửng".

Claude Debussy dùng âm giai toàn cung rất nhiều (ví dụ [[the-loai|prelude]] "Voiles") — xem [[an-tuong]]. [[hop-am-ba-tang|Hợp âm tăng]] (xem [[hop-am-ba]]) được dựng hoàn toàn từ âm giai này. Một [[dieu-thuc-chuyen-vi-gioi-han|âm giai đối xứng]] khác: [[am-giai-bat-cung]]. Dùng 12 nốt bình đẳng như một hệ thống: [[ky-thuat-12-am]].
`,
  },
  {
    slug: 'dich-giong',
    title: 'Dịch giọng',
    category: 'scales',
    aliases: ['transposition', 'chuyển tông', 'dịch tông', 'nhạc cụ chuyển giọng', 'transposing instrument', 'concert pitch', 'cao độ thực'],
    summary: 'Chuyển toàn bộ bản nhạc lên hoặc xuống một quãng cố định, giữ nguyên mọi quan hệ giữa các nốt.',
    wiki: 'Transposition_(music)',
    refs: [
      ['Wikipedia — Transposing instrument', 'https://en.wikipedia.org/wiki/Transposing_instrument'],
      ['ConductIt MOOC — Transpositions', 'https://mooc.conductit.eu/module-3-studying-and-preparing-scores/3-2-transpositions/'],
    ],
    body: `
Dịch giọng khác với [[chuyen-giong]]: chuyển giọng là chuyển động **bên trong** tác phẩm; dịch giọng là viết/chơi **cả tác phẩm** ở [[cao-do|cao độ]] khác — ví dụ hạ một bài hát xuống cho vừa giọng học trò.

## Các bước dịch giọng
1. Xác định [[quang]] cần dịch (C trưởng → E♭ trưởng: lên 3 thứ).
2. Đổi [[hoa-bieu]] sang giọng mới (0 dấu → 3 dấu giáng).
3. Dời mỗi nốt đúng **số bậc** (quãng 3 → mỗi nốt lên 2 bậc [[not-nhac|tên nốt]]): C → E♭, D → F, E → G…
4. Điều chỉnh các [[dau-hoa|dấu hoá bất thường]] theo cùng quãng: F♯ trong C trưởng → A (bình) trong E♭ trưởng.
5. Với [[ky-hieu-hop-am|hợp âm]]: dời gốc [[hop-am-ba|hợp âm]] cùng quãng, giữ nguyên hậu tố (Dm7 → Fm7).

::keyboard C4 E4 G4 | C trưởng
::keyboard Eb4 G4 Bb4 | Dịch lên 3 thứ → E♭ trưởng: cùng hình dạng quãng

Suy nghĩ bằng **số bậc** (I – IV – V, xem [[bac-am-giai]]) thay vì tên nốt giúp dịch giọng tức thì.

## Nhạc cụ chuyển giọng
Một số nhạc cụ [[doc-not-nhanh|đọc nốt]] khác với âm thanh thực (cao độ thực = **concert pitch**, cao độ của piano):
| Nhạc cụ | Viết C, nghe ra |
|---|---|
| Clarinet, trumpet, sax tenor (B♭) | B♭ (thấp hơn 2 trưởng; sax tenor thấp thêm 1 quãng 8) |
| Kèn cor (F) | F (thấp hơn 5 đúng) |
| Sax alto (E♭) | E♭ (thấp hơn 6 trưởng) |
| Guitar, contrabass | C thấp hơn 1 quãng 8 |
| Piccolo | C cao hơn 1 quãng 8 |

Khi [[dem-hat-piano|đệm piano]] cho các nhạc cụ này, cần biết bản của họ đang viết ở giọng nào.

## Vì sao lại có nhạc cụ chuyển giọng?
- **Kèn đồng tự nhiên**: kèn cor và trumpet ngày xưa **không có van**, chỉ chơi được các nốt trong [[chuoi-boi-am]] của một giọng. Muốn đổi giọng, người chơi **thay đoạn ống** (crook) — có khi để cả giá ống bên cạnh. Nhạc cho cor luôn được **viết như ở giọng Đô**; đoạn ống quyết định âm thanh thực. Van chỉ phổ biến trong dàn nhạc từ khoảng giữa thế kỷ 19; cor giọng **Fa** thành chuẩn từ đầu thế kỷ 19.
- **Cùng một hệ ngón cho cả họ nhạc cụ**: clarinet Si♭ và clarinet La dùng **cùng cách bấm**, người chơi đổi nhạc cụ mà không phải học lại; saxophone cũng vậy.
- **Giữ nốt nằm gọn trong khuông**, hạn chế [[khuong-nhac|dòng kẻ phụ]].
`,
  },
]
