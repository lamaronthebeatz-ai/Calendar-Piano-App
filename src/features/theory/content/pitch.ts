import type { Article } from '../wiki'

export const pitch: Article[] = [
  {
    slug: 'cao-do',
    title: 'Cao độ: hệ thống và lộ trình',
    category: 'pitch',
    aliases: ['cao độ', 'pitch', 'âm vực', 'register', 'tầm cữ', 'lộ trình cao độ'],
    summary: 'Bài tổng quan của mục: cao độ là cảm giác "cao – thấp" của âm thanh, gắn chủ yếu với tần số; âm vực và tầm cữ; và thứ tự học từ cung – nửa cung, quãng đến bồi âm và hệ thống lên dây.',
    wiki: 'Pitch_(music)',
    refs: [
      ['Open Music Theory (Gotham và cộng sự) — Phần I: Fundamentals', 'https://viva.pressbooks.pub/openmusictheory/part/fundamentals/'],
      ['Wikipedia — Pitch (music)', 'https://en.wikipedia.org/wiki/Pitch_(music)'],
      ['IALA Dictionary — Pitch (định nghĩa theo ANSI)', 'https://www.iala-aism.org/wiki/dictionary/index.php/Pitch'],
      ['OpenStax (Schmidt-Jones) — Range', 'https://human.libretexts.org/Bookshelves/Music/Book%3A_Understanding_Basic_Music_Theory_(OpenSTAX)/02%3A_Defintions/2.07%3A_Range'],
      ['EarMaster — Music theory online: Range', 'https://www.earmaster.com/music-theory-online/ch02/chapter-2-7.html'],
    ],
    body: `
**Cao độ** là thuộc tính của cảm giác nghe theo đó các âm có thể được **xếp từ thấp đến cao** (định nghĩa của Viện Tiêu chuẩn Quốc gia Mỹ — ANSI). Cao độ phụ thuộc **chủ yếu vào tần số** của âm, nhưng cũng chịu ảnh hưởng của độ to và dạng sóng — tức là cao độ là **cảm nhận**, còn tần số là **đại lượng vật lý** (xem [[am-hoc-co-ban]], [[cam-nhan-am-thanh]]).

## Âm vực và tầm cữ
- **Âm vực** (range): phạm vi từ nốt **thấp nhất** đến nốt **cao nhất** của một giọng, một nhạc cụ hay một bè nhạc. Âm vực piano: [[ban-phim]].
- **Vùng âm** (register): một **phần** của âm vực có màu âm riêng — ví dụ "vùng trầm", "vùng cao" của piano, hay giọng ngực – giọng óc của ca sĩ (xem [[am-sac]]).
- **Tầm cữ** (tessitura): vùng mà một [[giai-dieu|giai điệu]] hay một bè **nằm chủ yếu**, khác với âm vực là hai đầu mút. Các từ điển định nghĩa từ này không hoàn toàn thống nhất.
Trong viết bè, mỗi bè có âm vực quen dùng (xem [[luat-hoa-am-bon-be]]); trong biểu diễn, vùng âm ảnh hưởng đến cách cân bằng tiếng (xem [[lam-noi-giai-dieu]]).

## Lộ trình học
1. **Tên nốt và vị trí**: [[not-nhac]], [[ban-phim]], [[ky-hieu-quang-tam]].
2. **Khoảng cách nhỏ nhất**: [[cung-nua-cung]], [[dau-hoa]], [[trung-am]].
3. **Quãng**: [[quang]] → [[quang-dao]] → [[thuan-nghich]].
4. **Nền tảng vật lý**: [[chuoi-boi-am]] → [[luat-binh-quan]].
5. **Từ quãng đến âm giai và hợp âm**: [[am-giai]], [[hop-am-ba]].

## Luyện nghe cao độ
[[luyen-tai]] (cảm âm tương đối), [[cao-do-tuyet-doi]], [[xuong-am]].

**Đi sâu về hệ thống cao độ:** [[cac-he-thong-chinh-am]] (Pythagore, thuần, meantone, chỉnh âm tốt, bằng cent), [[vi-cung-va-am-nhac-vi-cung]] (phần tư cung, 19 và 31 phần, Partch, đàn tranh Việt) và cách gọi tên nốt ở [[ky-hieu-cao-do-c4-helmholtz-midi]].
`,
  },
  {
    slug: 'cung-nua-cung',
    title: 'Cung và nửa cung',
    category: 'pitch',
    aliases: ['cung', 'nửa cung', 'bán cung', 'whole step', 'half step', 'semitone', 'whole tone'],
    summary: 'Nửa cung là khoảng cách nhỏ nhất giữa hai phím liền nhau trên piano; một cung bằng hai nửa cung.',
    wiki: 'Semitone',
    refs: [
      ['Wikipedia — Semitone', 'https://en.wikipedia.org/wiki/Semitone'],
      ["Musical U — Why can't I tell whole steps from half steps?", 'https://www.musical-u.com/learn/why-cant-i-tell-whole-steps-from-half-steps/embed'],
    ],
    body: `
Trên [[ban-phim]], đi từ một phím sang phím **liền kề** (trắng hoặc đen) là **nửa cung**. Bỏ qua một phím là **một cung**.

::keyboard E4 F4 B4 C5 | E–F và B–C: hai cặp phím trắng chỉ cách nửa cung

Vì không có phím đen giữa E–F và B–C, hai cặp này chỉ cách nửa cung; mọi cặp phím trắng liền nhau khác cách nhau một cung.

## Nửa cung dị và nửa cung đồng
- **Nửa cung dị** (diatonic): hai nốt khác tên — C–D♭, E–F.
- **Nửa cung đồng** ([[am-giai-cromatic|cromatic]]): hai nốt cùng tên — C–C♯.

Cung và nửa cung là đơn vị để đo [[quang]] và để xây dựng [[am-giai-truong]]. Một quãng 8 gồm 12 nửa cung bằng nhau (xem [[luat-binh-quan]]).

## Khi giảng dạy
- **E–F và B–C** là hai cặp phím trắng liền nhau duy nhất chỉ cách **nửa cung** — cần nhấn mạnh vì "hai phím trắng liền nhau" không phải lúc nào cũng là một cung.
- Phân biệt **cung và nửa cung bằng tai** là một trở ngại với nhiều người học — xem cách luyện ở [[luyen-tai]].
- Nửa cung **đồng** và nửa cung **dị** nghe y như nhau trên piano; khác nhau ở **cách viết** và **chức năng** (xem [[trung-am]]).

## Nửa cung đo bằng cent
Trong [[luat-binh-quan]], một nửa cung = **100 [[cac-he-thong-chinh-am|cent]]**, một quãng 8 = **1200 cent**. Cent là đơn vị dùng để so sánh các hệ thống lên dây.
`,
  },
  {
    slug: 'quang',
    title: 'Quãng',
    category: 'pitch',
    aliases: ['quãng nhạc', 'interval', 'quãng 8', 'quãng tám', 'octave', 'quãng đúng', 'quãng trưởng', 'quãng thứ', 'quãng tăng', 'quãng giảm', 'tritone'],
    summary: 'Khoảng cách cao độ giữa hai nốt, gọi theo số bậc (2, 3, 4…) và tính chất (trưởng, thứ, đúng, tăng, giảm).',
    wiki: 'Interval_(music)',
    refs: [
      ['My Music Theory — Intervals: can I count semitones?', 'https://mymusictheory.com/interval-numbers/intervals-can-i-count-semitones/'],
      ['Ewell & Schmidt-Jones, Music Fundamentals (LibreTexts) — Intervals and inversions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Fundamentals_(Ewell_and_Schmidt-Jones)/04:_Intervals/4.01:_Intervals_and_Inversions'],
      ['HearandPlay — Newsletter, March 2006 (naming intervals)', 'https://www.hearandplay.com/Newsletters-Mar06.html'],
    ],
    body: `
Quãng có hai phần: **số** — đếm số [[not-nhac|tên nốt]] từ nốt dưới đến nốt trên (C→E là C-D-E = **quãng 3**) — và **tính chất** — xác định bằng số [[cung-nua-cung|nửa cung]].
| Nửa cung | Quãng | Ví dụ từ C |
|---|---|---|
| 0 | Đồng âm | C–C |
| 1 | 2 thứ | C–D♭ |
| 2 | 2 trưởng | C–D |
| 3 | 3 thứ | C–E♭ |
| 4 | 3 trưởng | C–E |
| 5 | 4 đúng | C–F |
| 6 | 4 tăng / 5 giảm (tritone) | C–F♯ / C–G♭ |
| 7 | 5 đúng | C–G |
| 8 | 6 thứ | C–A♭ |
| 9 | 6 trưởng | C–A |
| 10 | 7 thứ | C–B♭ |
| 11 | 7 trưởng | C–B |
| 12 | 8 đúng (quãng 8) | C–C |

::keyboard C4 E4 | Quãng 3 trưởng C–E (4 nửa cung)
::staff treble C4+E4 C4+G4 C4+C5 | Quãng 3, quãng 5 và quãng 8 viết trên khuông

## Hai họ tính chất
- Quãng **1, 4, 5, 8**: đúng → (thêm nửa cung) tăng; (bớt nửa cung) giảm.
- Quãng **2, 3, 6, 7**: trưởng ↔ thứ; trưởng thêm nửa cung là tăng, thứ bớt nửa cung là giảm.

## Quãng giai điệu và quãng hoà âm
Hai nốt vang **lần lượt** là quãng [[giai-dieu|giai điệu]]; vang **cùng lúc** là quãng hoà âm.

## Cách gọi tên quãng đúng: hai bước
1. **Đếm tên chữ cái** (hoặc vị trí trên [[khuong-nhac|khuông]]), **tính cả nốt đầu là 1** → ra **số** quãng. Mọi quãng từ một nốt C bất kỳ đến một nốt D bất kỳ đều là quãng **2**, dù có [[dau-hoa|dấu hoá]] gì.
2. **Đếm nửa cung** → ra **tính chất** (so với quãng trưởng/đúng chuẩn trong bảng).

Ví dụ: C–D♯ có 3 nửa cung (bằng quãng 3 thứ), nhưng C–D là quãng **2** → C–D♯ là **2 tăng**.

## Khi giảng dạy: lỗi hay gặp
- **Chỉ đếm nửa cung** để gọi tên quãng: D–A♯ (5 tăng) và D–B♭ (6 thứ) đều có 8 nửa cung nhưng là hai quãng khác nhau. Số nửa cung cho biết **độ lớn**, không cho biết **tên**.
- **Quên tính nốt đầu**: C→E là quãng 3 (C-D-E), không phải quãng 2.
- Một số giáo viên khuyên học quãng qua **bậc của âm giai trưởng** (từ [[bac-am-giai|chủ âm]] lên mỗi bậc là quãng trưởng hoặc đúng) thay vì học thuộc số nửa cung — xem [[am-giai-truong]].

## Mẹo nhớ bằng bài hát
- Quãng 4 đúng đi lên: "Here Comes the Bride".
- Quãng 5 đúng đi lên: chủ đề "[[nhac-phim-va-tro-choi|Star Wars]]".
- Quãng 8 đi lên: "Somewhere Over the Rainbow".

Liên quan: [[quang-dao]], [[thuan-nghich]], [[hop-am-ba]], [[vong-quang-nam]]. Đọc nốt bằng quãng: [[doc-not-nhanh]]. Chơi quãng 8 trên piano: [[ky-thuat-quang-tam]]. Cách đếm quãng bằng số nửa cung (0–11) là nền tảng của [[tap-hop-cao-do]].
`,
  },
  {
    slug: 'quang-dao',
    title: 'Đảo quãng',
    category: 'pitch',
    aliases: ['quãng đảo', 'interval inversion', 'đảo ngược quãng'],
    summary: 'Đưa nốt dưới của quãng lên một quãng 8 (hoặc ngược lại); số quãng cộng lại luôn bằng 9.',
    wiki: 'Inversion_(music)',
    refs: [
      ['Ewell & Schmidt-Jones, Music Fundamentals (LibreTexts) — Intervals and inversions', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Fundamentals_(Ewell_and_Schmidt-Jones)/04:_Intervals/4.01:_Intervals_and_Inversions'],
    ],
    body: `
Khi đảo [[quang]], nốt dưới chuyển lên trên một quãng 8 (C–E thành E–C).

## Hai quy tắc
- **Số quãng**: tổng luôn bằng **9** → 2 ↔ 7, 3 ↔ 6, 4 ↔ 5, 1 ↔ 8.
- **Tính chất**: trưởng ↔ thứ, tăng ↔ giảm, đúng giữ nguyên đúng.

| Quãng | Đảo thành |
|---|---|
| 3 trưởng (C–E) | 6 thứ (E–C) |
| 2 thứ (E–F) | 7 trưởng (F–E) |
| 4 đúng (C–F) | 5 đúng (F–C) |
| 4 tăng (C–F♯) | 5 giảm (F♯–C) |

::staff treble C4+E4 E4+C5 | 3 trưởng C–E đảo thành 6 thứ E–C

Mẹo: muốn biết quãng 6 thì đảo nó thành quãng 3 (dễ nhận hơn) rồi đổi tính chất. Đảo quãng cũng là nền tảng của [[the-dao-hop-am]].

## Kiểm tra bằng số nửa cung
Một quãng và quãng đảo của nó luôn **cộng lại thành 12 [[cung-nua-cung|nửa cung]]** (một quãng 8). Ví dụ 3 trưởng (4) + 6 thứ (8) = 12; 4 đúng (5) + 5 đúng (7) = 12; tritone (6) đảo lại vẫn là tritone (6).

## Vì sao điều này quan trọng?
- **Nhận quãng lớn nhanh hơn**: thay vì đếm 9 nửa cung, đảo quãng 6 thành quãng 3 rồi đổi tính chất.
- **Đối âm kép**: khi hai bè đổi chỗ, mọi quãng bị đảo — quãng 5 thuận trở thành quãng 4, có thể nghịch nếu ở bè trầm (xem [[doi-am-kep]], [[thuan-nghich]]).
- **Lý thuyết tập hợp cao độ**: một quãng và quãng đảo được coi là cùng một **lớp quãng** (xem [[tap-hop-cao-do]]).
`,
  },
  {
    slug: 'thuan-nghich',
    title: 'Quãng thuận và quãng nghịch',
    category: 'pitch',
    also: ['listening'],
    aliases: ['thuận âm', 'nghịch âm', 'consonance', 'dissonance', 'quãng thuận', 'quãng nghịch', 'giải quyết'],
    summary: 'Quãng thuận nghe êm, ổn định; quãng nghịch nghe căng, có xu hướng "giải quyết" về quãng thuận.',
    wiki: 'Consonance_and_dissonance',
    refs: [
      ['James Tenney — A History of "Consonance" and "Dissonance" (via MIT HST.725 lecture notes)', 'https://mitocw.ups.edu.ec/courses/health-sciences-and-technology/hst-725-music-perception-and-cognition-spring-2009/lecture-notes/MITHST_725S09_lec08_conson.pdf'],
      ['UConn Physics — Pythagorean intervals', 'https://www.phys.uconn.edu/~gibson/Notes/Section3_2/Sec3_2.htm'],
      ['Wikipedia — Consonance and dissonance', 'https://en.wikipedia.org/wiki/Consonance_and_dissonance'],
    ],
    body: `
| Loại | [[quang|Quãng]] | Cảm giác |
|---|---|---|
| Thuận hoàn toàn | Đồng âm, 8 đúng, 5 đúng | Rỗng, rất ổn định |
| Thuận không hoàn toàn | 3 và 6 (trưởng, thứ) | Êm, ấm |
| Thuận/nghịch tuỳ ngữ cảnh | 4 đúng | Thuận khi ở giữa, nghịch khi ở bè trầm |
| Nghịch | 2, 7, các quãng tăng/giảm (tritone) | Căng, cần đi tiếp |

## Giải quyết
Quãng nghịch tạo **sức căng** và thường đi tới quãng thuận gần nhất — gọi là **giải quyết**. Ví dụ: tritone B–F trong [[hop-am-bay|hợp âm G7]] giải quyết về C–E của [[hop-am-ba|hợp âm]] C.
::staff treble B4+F5=B–F C5+E5=C–E | Tritone B–F giải quyết vào quãng 3 C–E: B đi lên C, F đi xuống E

Sự luân phiên căng – nghỉ này là động cơ của [[chuc-nang-hoa-am|hoà âm chức năng]] và [[dan-giong]]. Cơ sở vật lý của độ thuận: xem [[chuoi-boi-am]].

## Quan niệm thay đổi theo lịch sử
- **Pythagore** (thế kỷ 6 TCN) được cho là phát hiện [[cau-tao-piano|dây đàn]] cho âm hay khi chia theo **tỉ lệ đơn giản**: 2:1 (quãng 8), 3:2 (quãng 5), 4:3 (quãng 4). Ba quãng này là "thuận" trong triết học Hy Lạp. (Giai thoại ông nghe tiếng búa của thợ rèn gần như chắc chắn không đúng.)
- **Thời [[thoi-ky-trung-co|Trung cổ]]**, quãng 3 và 6 bị coi là **không ổn định**, cần giải quyết về quãng hoàn toàn. Hệ lên dây Pythagore làm quãng 3 trưởng **rộng** (tỉ lệ 81:64), nghe khá chói.
- Từ khoảng **1450**, quãng 3 và 6 được coi là thuận. Gioseffo Zarlino chỉnh quãng 3 trưởng về tỉ lệ thuần **5:4**. Quãng 4 nằm **trên nốt trầm nhất** thì bị coi là nghịch — một quy tắc của [[doi-am|đối âm]], không phải tính chất vật lý của quãng.

## Giải thích khoa học
- **Helmholtz** (thế kỷ 19): quãng thuận có các [[chuoi-boi-am|bồi âm]] **trùng nhau**; quãng nghịch có bồi âm **gần nhau mà không trùng**, tạo ra **phách** ([[cam-nhan-am-thanh|beats]]) nghe "gồ ghề".
- Nghiên cứu sau (Greenwood 1961; Plomp và Levelt 1965) gắn hiện tượng này với **dải tới hạn** của tai.
- Lý thuyết độ gồ ghề cũng bị thách thức: các thí nghiệm của McDermott và cộng sự cho thấy cảm giác thuận/nghịch có thể **tách rời** khỏi cảm giác gồ ghề. Vấn đề vẫn chưa ngã ngũ.
`,
  },
  {
    slug: 'trung-am',
    title: 'Trùng âm',
    category: 'pitch',
    aliases: ['enharmonic', 'đồng âm khác tên', 'trùng âm khác tên'],
    summary: 'Hai tên nốt khác nhau cho cùng một phím đàn, như C♯ và D♭.',
    wiki: 'Enharmonic_equivalence',
    refs: [
      ['Wikipedia — Enharmonic equivalence', 'https://en.wikipedia.org/wiki/Enharmonic_equivalence'],
      ['Wikipedia — Split sharp', 'https://en.wikipedia.org/wiki/Split_sharp'],
      ['Puget Sound, Music Theory for the 21st Century — Modulations with chromatic pivot chords', 'https://musictheory.pugetsound.edu/mt21c/ModulationsWithChromaticPivotChords.html'],
    ],
    body: `
Trên [[ban-phim]], mỗi phím đen có (ít nhất) hai tên: C♯ = D♭, F♯ = G♭… Ngay cả phím trắng cũng có tên trùng âm: E♯ = F, B♯ = C, F♭ = E.

::keyboard C#4 | Một phím: có thể gọi là C♯ hoặc D♭

## Vì sao phải chọn đúng tên?
[[not-nhac|Tên nốt]] phụ thuộc vào **chức năng**, không chỉ [[cao-do|cao độ]]:
- Trong [[am-giai-truong|Rê trưởng]], nốt bậc 7 là **C♯**, không phải D♭ (mỗi tên chữ cái chỉ xuất hiện một lần).
- [[quang|Quãng]] C–D♯ là **2 tăng**, còn C–E♭ là **3 thứ** — cùng âm thanh, khác chức năng.

Trùng âm còn dùng để **chuyển giọng** bất ngờ (xem [[chuyen-giong]], [[hop-am-bay-giam]], [[hop-am-sau-tang]]) và giúp khép kín [[vong-quang-nam]] (F♯ trưởng = G♭ trưởng).

## Không phải lúc nào C♯ cũng bằng D♭
- Trùng âm theo nghĩa "cùng một cao độ" chỉ đúng trong [[luat-binh-quan]]. Trước đó, từ "enharmonic" chỉ những nốt **rất gần nhau nhưng không trùng**.
- Trong **luật trung bình** ([[cac-he-thong-chinh-am|meantone]]) — cách lên dây phổ biến thời [[thoi-ky-phuc-hung|Phục hưng]] và đầu [[thoi-ky-baroque|Baroque]] — **C♯ và D♭ là hai cao độ khác nhau**. Khoảng chênh gọi là *diesis*, đủ lớn để nghe thấy.
- Vì thế một số đàn [[dan-phim-co|harpsichord]] Ý có **phím tách** (split key): một phím đen chia làm hai nửa trước – sau, ví dụ E♭/D♯ và G♯/A♭, để có quãng 3 chuẩn hơn.

## Chuyển giọng trùng âm
**Viết lại** một nốt hoặc [[hop-am-ba|hợp âm]] bằng tên trùng âm để dẫn sang giọng mới. Việc này phổ biến dần từ thế kỷ 18 và được dùng nhiều trong thế kỷ 19, đặc biệt với [[hop-am-bay-giam]] và [[hop-am-bay|hợp âm bảy át]]. Chuyển giọng trùng âm trong các [[hinh-thuc-sonata|sonata]] piano của [[Schubert]] là đề tài của nhiều nghiên cứu.

## Vì sao không viết tên "dễ đọc" hơn?
Tên nốt cho biết **chức năng**. Trong La trưởng, viết C♯ để mỗi chữ cái chỉ xuất hiện một lần trong [[am-giai|âm giai]] (xem [[hoa-bieu]]).
`,
  },
  {
    slug: 'chuoi-boi-am',
    title: 'Chuỗi bồi âm',
    category: 'pitch',
    also: ['listening'],
    aliases: ['bồi âm', 'âm bội', 'harmonic series', 'overtone', 'họa âm'],
    summary: 'Một nốt nhạc thực chất gồm âm gốc và nhiều âm phụ có tần số bằng bội số nguyên của âm gốc.',
    wiki: 'Harmonic_series_(music)',
    refs: [
      ['Wikipedia — Piano acoustics', 'https://en.wikipedia.org/wiki/Piano_acoustics'],
      ['UBC Phys341 wiki — Railsback curve', 'https://wiki.ubc.ca/Course:Phys341_2020/Railsback_curve'],
      ['Giordano (2015) — Explaining the Railsback stretch (Auburn repository)', 'https://aurora.auburn.edu/handle/11200/48533'],
    ],
    body: `
Khi gõ một [[ban-phim|phím đàn]], [[cau-tao-piano|dây đàn]] rung cả chiều dài **và** từng phần ½, ⅓, ¼… của nó, tạo ra các **bồi âm** có tần số gấp 2, 3, 4… lần âm gốc.

::img Music-harmonic.svg | Chuỗi bồi âm trên nốt C

| Bồi âm | Tần số | Quãng so với âm gốc C2 |
|---|---|---|
| 1 | f | C2 (âm gốc) |
| 2 | 2f | C3 — [[quang|quãng 8]] |
| 3 | 3f | G3 — quãng 8 + 5 đúng |
| 4 | 4f | C4 — 2 quãng 8 |
| 5 | 5f | E4 — 2 quãng 8 + 3 trưởng |
| 6 | 6f | G4 |

Kiến thức nền về tần số, dB, phạm vi nghe: [[am-hoc-co-ban]]. Các bồi âm 4–5–6 tạo thành [[hop-am-ba|hợp âm trưởng]] C–E–G — một lý do hợp âm trưởng nghe "tự nhiên". Tỉ lệ tần số càng đơn giản (2:1, 3:2) thì quãng càng [[thuan-nghich|thuận]].

## Âm sắc
[[cuong-do|Cường độ]] tương đối của các bồi âm quyết định **[[am-sac|âm sắc]]** — lý do piano và [[violin|violin]] chơi cùng nốt nhưng nghe khác nhau.

## Bồi âm của piano "lệch" lên
Dây [[dan-piano|đàn piano]] **cứng** (dây thép ngắn, khá dày), nên các bồi âm cao **không đúng** bội số nguyên mà hơi **cao hơn** — gọi là tính **không điều hoà** ([[am-hoc-nhac-cu|inharmonicity]]). Dây càng ngắn, càng dày thì càng lệch.

## Hệ quả: lên dây "kéo giãn"
- Thợ lên dây làm các nốt **cao hơi cao lên**, nốt **trầm hơi thấp xuống**, để bồi âm của nốt thấp khớp với âm gốc của nốt cao. Quãng 8 trên piano vì vậy **rộng hơn** tỉ lệ 2:1 một chút.
- Năm 1938, nhà vật lý O. L. Railsback đo độ kéo giãn này. **Đường cong Railsback** cho thấy độ lệch gần như không đáng kể ở giữa bàn phím nhưng lớn ở hai đầu. Ông kết luận đó là do tính không điều hoà của dây, **không phải** do thợ lên dây thiếu chính xác.
- Giordano (2015) mô phỏng lại đường cong này từ dữ liệu về cảm nhận độ nghịch của tai, cho thấy nó là cách lên dây làm **giảm độ nghịch** tốt nhất.
- Vì mỗi cây đàn lệch một khác, máy lên dây đơn giản khó tính đúng mức kéo giãn — xem [[bao-duong-piano]].

Các tỉ lệ đơn giản 2:1, 3:2, 4:3 từng được Pythagoras và các nhà tư tưởng sau đó xem là chìa khoá của cả vũ trụ: [[hoa-am-vu-tru]].
`,
  },
  {
    slug: 'luat-binh-quan',
    title: 'Luật bình quân',
    category: 'pitch',
    also: ['listening'],
    aliases: ['bình quân 12', 'equal temperament', 'A440', 'La 440', 'cao độ chuẩn', 'lên dây'],
    summary: 'Hệ thống lên dây chia quãng 8 thành 12 nửa cung bằng nhau; chuẩn hiện đại lấy A4 = 440 Hz.',
    wiki: 'Equal_temperament',
    refs: [
      ['Wikipedia — A440 (pitch standard)', 'https://en.wikipedia.org/wiki/A440_(pitch_standard)'],
      ['ISO — ISO 16:1975 Acoustics: standard tuning frequency', 'https://www.iso.org/standard/3601.html'],
      ['Larousse — Diapason', 'https://www.larousse.fr/encyclopedie/musdico/diapason/167216'],
      ['Wikipedia — Pythagorean comma', 'https://en.wikipedia.org/wiki/Pythagorean_comma'],
      ['Wikipedia — Wolf interval', 'https://en.wikipedia.org/wiki/Wolf_interval'],
      ['Wikipedia — Major third', 'https://en.wikipedia.org/wiki/Major_third'],
      ['Wikipedia — Andreas Werckmeister', 'https://en.wikipedia.org/wiki/Andreas_Werckmeister'],
      ['Wikipedia — Bach temperament', 'https://en.wikipedia.org/wiki/Bach_Temperament'],
      ["Music Theory Online — Amiot, Discrete Fourier Transform and Bach's good temperament", 'https://mtosmt.org/issues/mto.09.15.2/mto.09.15.2.amiot.php'],
    ],
    body: `
## Cao độ chuẩn
Từ giữa [[thoi-ky-the-ky-20|thế kỷ 20]], nốt **A4 = 440 Hz** được dùng làm chuẩn quốc tế ([[ky-hieu-cao-do-c4-helmholtz-midi|ISO 16]]). Mỗi [[quang|quãng 8]] lên cao thì [[am-hoc-co-ban|tần số]] **gấp đôi**: A5 = 880 Hz, A3 = 220 Hz.

## Bình quân 12 nửa cung
Piano hiện đại được lên dây theo **luật bình quân**: quãng 8 chia thành 12 [[cung-nua-cung|nửa cung]] có tỉ lệ tần số bằng nhau (căn bậc 12 của 2 ≈ 1,0595).
- **Ưu điểm**: mọi giọng đều chơi được và nghe "đều nhau" → tự do [[chuyen-giong]], dùng [[trung-am]].
- **Đánh đổi**: các quãng (trừ quãng 8) đều lệch nhẹ so với tỉ lệ tự nhiên của [[chuoi-boi-am]]; quãng 3 trưởng hơi rộng.

## Lịch sử cao độ chuẩn
[[cao-do|Cao độ]] "La" từng dao động rất rộng — có lúc thấp đến **392 Hz**, có lúc cao đến **460 Hz**.
| Năm | Mốc |
|---|---|
| 1834 | Johann Scheibler đề xuất **A = 440** tại một hội nghị ở Stuttgart ("cao độ Stuttgart") |
| 1859 | Pháp ra **sắc lệnh** đặt **A = 435 Hz** (*diapason normal*), phần lớn do ca sĩ phàn nàn cao độ ngày càng lên cao làm hại giọng |
| 1939 | Hội nghị quốc tế tại London (11–12/5) nhất trí khuyến nghị **A = 440 Hz** |
| 1955 / 1975 | ISO tiếp nhận thành khuyến nghị R 16 (1955), rồi chuẩn **ISO 16** (1975) |

Giới chơi nhạc cụ cổ ngày nay thường dùng **A = 415 Hz** (thấp hơn khoảng nửa cung) như một quy ước cho nhạc [[thoi-ky-baroque|Baroque]] — không phải một giá trị lịch sử duy nhất. Các thuyết âm mưu cho rằng A = 440 do phát xít áp đặt đã bị kiểm chứng là sai.

## Lịch sử các hệ thống lên dây
**Vấn đề gốc — dấu phẩy Pythagore** (về Pythagoras và ý tưởng âm nhạc là con số, xem [[hoa-am-vu-tru]]): chồng **12 quãng 5 thuần** (3:2) không về đúng **7 quãng 8** mà dư khoảng **23,46 [[cac-he-thong-chinh-am|cent]]** (gần một phần tư nửa cung). Mỗi hệ thống lên dây là một cách "giấu" phần dư này:
| Hệ thống | Cách xử lý | Hệ quả |
|---|---|---|
| **Pythagore** | Mười một quãng 5 thuần, dồn phần dư vào **quãng 5 thứ mười hai ("sói")** | Quãng 3 trưởng rộng (81:64, 408 cent), nghe chói |
| **Trung bình** (meantone, thời [[thoi-ky-phuc-hung|Phục hưng]]) | Thu hẹp các quãng 5 để **quãng 3 trưởng thuần** | Một quãng "sói" rất phô; giọng nhiều [[dau-hoa|dấu hoá]] khó dùng; C♯ ≠ D♭ (xem [[trung-am]]) |
| **Bình quân bất đều** (well temperament) | Andreas Werckmeister (1691) chia phần dư cho vài quãng 5 | **Mọi giọng dùng được**, nhưng mỗi giọng có **màu riêng** |
| **Bình quân 12** | Mỗi quãng 5 hẹp đi 1/12 dấu phẩy (khoảng 2 cent) | Mọi giọng như nhau; quãng 3 trưởng **rộng hơn thuần khoảng 14 cent** |

## "Clavier bình quân" có phải bình quân 12?
Tên gốc là *Das Wohltemperierte Klavier* (xem hai bài phân tích: [[phan-tich-prelude-do-truong|Prelude Đô trưởng]], [[phan-tich-prelude-do-thu-bwv847|Prelude Đô thứ]]) — đàn phím **"được lên dây tốt"**, nghĩa là một hệ thống mà **mọi giọng nghe đều hay**, không nhất thiết là mọi giọng **giống nhau**. Giới nghiên cứu nhìn chung cho rằng [[johann-sebastian-bach|Bach]] **không** dùng bình quân 12, nhưng không biết chính xác hệ thống nào. Năm 2005, Bradley Lehman đề xuất rằng những đường xoắn trên trang bìa bản thảo là "công thức" lên dây của Bach — giả thuyết này bị nhiều người bác bỏ. Bộ tác phẩm gồm 24 [[the-loai|Prelude]] và Fugue ở đủ 24 giọng (xem [[fugue]]).

Piano thực tế còn được lên dây "kéo giãn" một chút so với bình quân 12 lý thuyết — xem [[chuoi-boi-am]]. Bối cảnh lịch sử: [[cac-thoi-ky]]. Lên dây và bảo quản đàn: [[bao-duong-piano]].
`,
  },
  {
    slug: "cac-he-thong-chinh-am",
    title: "Các hệ thống chỉnh âm: Pythagore, thuần, meantone, chỉnh âm tốt và bình quân",
    category: 'pitch',
    also: ['scales', 'instrument'],
    aliases: ["hệ thống chỉnh âm", "chỉnh âm", "temperament", "tuning system", "chỉnh âm Pythagore", "Pythagorean tuning", "ngữ điệu thuần", "just intonation", "meantone", "chỉnh âm trung bình", "quarter-comma meantone", "well temperament", "chỉnh âm tốt", "Werckmeister", "Kirnberger III", "Vallotti", "comma Pythagore", "Pythagorean comma", "comma syntonic", "syntonic comma", "quãng 5 sói", "wolf fifth", "cent", "cents", "Alexander Ellis"],
    summary: "Không thể vừa có quãng 5 thuần (3 : 2) vừa có quãng 3 thuần (5 : 4) vừa khép kín vòng 12 nửa cung: mười hai quãng 5 thuần vượt bảy quãng 8 một \"comma Pythagore\" ≈ 23,46 cent. Mỗi hệ chỉnh âm là một cách chia phần sai số đó. Bài đo mọi thứ bằng cent (Ellis, 1885), so sánh quãng 3 và quãng 5 trong hệ Pythagore, thuần, meantone ¼ comma và bình quân 12, giải thích \"quãng 5 sói\", các chỉnh âm tốt của Werckmeister, Kirnberger, Vallotti, Young, và lịch sử tính ¹²√2 của Chu Tái Dục (1584).",
    wiki: "Musical_temperament",
    refs: [
      ["Wikipedia — Pythagorean comma", "https://en.wikipedia.org/wiki/Pythagorean_comma"],
      ["John Baez — Tuning and temperament", "https://math.ucr.edu/home/baez/tuning_book/"],
      ["Wikipedia — Syntonic comma", "https://en.wikipedia.org/wiki/Syntonic_comma"],
      ["Wikipedia — Quarter-comma meantone", "https://en.wikipedia.org/wiki/Quarter-comma_meantone"],
      ["Wikipedia — Well temperament", "https://en.wikipedia.org/wiki/Well_temperament"],
      ["Wikipedia — Vallotti temperament", "https://en.wikipedia.org/wiki/Vallotti_temperament"],
      ["Ross Duffin (Case Western) — về Vallotti và Young", "https://casfaculty.case.edu/ross-duffin/?p=128"],
      ["Wikipedia — Twelfth root of two", "https://en.wikipedia.org/wiki/Twelfth_root_of_two"],
      ["Yaya Liu — Zhu Zaiyu (CMS, PDF)", "https://www2.cms.math.ca/Events/winter13/res/pdf/hpm-yl.pdf"],
      ["Wikipedia — Cent (music)", "https://en.wikipedia.org/wiki/Cent_(music)"],
      ["Ellis 1885 — On the Musical Scales of Various Nations (PDF)", "https://soundandscience.net/wp-content/uploads/2023/03/435_Ellis1885_MusicalScales_pdf.pdf"],
      ["HyperPhysics — Harmonics and temperament", "https://hyperphysics.gsu.edu/hbase/music/harmon.html"],
    ],
    body: `
Bài này đi sâu hơn phần lịch sử trong [[luat-binh-quan]]. Nền vật lý: [[chuoi-boi-am]] và [[thuan-nghich]].

## Đơn vị: cent
Alexander J. Ellis chia [[quang|quãng 8]] thành **1200 cent** (mỗi [[cung-nua-cung|nửa cung]] bình quân = 100 cent), dùng chính thức trong *On the Musical Scales of Various Nations* (*Journal of the Society of Arts*, 1885). Công thức: **cent = 1200 · log₂(f₂ / f₁)**.

## Vấn đề gốc: hai cái "comma"
- **Comma Pythagore**: 12 quãng 5 thuần (3 : 2)¹² vượt 7 quãng 8 một tỉ lệ 531441 : 524288 ≈ **23,46 cent** (gần ¼ nửa cung) → vòng quãng 5 [[vong-quang-nam|không khép]].
- **Comma syntonic** (81 : 80 ≈ **21,51 cent**): quãng 3 "Pythagore" (81 : 64 ≈ 407,82 cent) rộng hơn quãng 3 thuần (5 : 4 ≈ 386,31 cent).

## Bảng so sánh
| Hệ | Quãng 3 trưởng | Quãng 5 đúng | Đặc điểm |
|---|---|---|---|
| **Pythagore** | 407,82 | **701,96** (thuần) | Quãng 5 đẹp, quãng 3 chói; một quãng 5 "sói" ≈ 678,49 |
| **Thuần** (*just*) | **386,31** (thuần) | 701,96 | Đẹp trong một giọng, không [[chuyen-giong|chuyển giọng]] được |
| **Meantone ¼ comma** | **386,31** (thuần) | 696,58 | Quãng 3 thuần; sói ≈ 737,6 (thường ở Sol♯ – Mi♭) |
| **Bình quân 12** | 400,00 | 700,00 | Mọi giọng như nhau; quãng 3 rộng hơn thuần ≈ 13,69 cent |
*(Số liệu theo các nguồn trong bài; thư viện đã tính lại. Quãng 5 sói của meantone là thư viện tính.)*
**"Quãng 5 sói"**: khi mười một quãng 5 được làm cho đẹp, quãng thứ mười hai gánh toàn bộ sai số và nghe "hú" như sói.

::staff treble C4+E4 C4+G4 G#4+Eb5 | Ba quãng để nghe thử trên đàn được lên dây khác nhau: quãng 3 Đô – Mi, quãng 5 Đô – Sol, và "quãng 5" Sol♯ – Mi♭ (chỗ sói trong meantone)

## Meantone
Mỗi quãng 5 hẹp đi **¼ comma syntonic** để bốn quãng 5 chồng lại cho một quãng 3 **thuần**. Hệ phổ biến nhất thế kỷ 16 – 17; mô tả rõ sớm nhất là *Toscanello in musica* (1523) của **Pietro Aron**, người đòi quãng 3 "vang và đúng".

## Chỉnh âm tốt (well temperament)
Phân phối sai số **không đều**: các giọng gần Đô trong sáng hơn, giọng xa "gắt" hơn — nhưng **mọi giọng đều dùng được**.
| Hệ | Cách chia |
|---|---|
| **Werckmeister III** (1691) | Bốn quãng 5 C–G, G–D, D–A, B–F♯ hẹp ¼ comma; tám quãng còn lại thuần |
| **Kirnberger III** | Bốn quãng 5 C–G–D–A–E hẹp ¼ comma syntonic (Đô – Mi thuần), một quãng hẹp một schisma, bảy quãng thuần |
| **Vallotti** (dạng hiện đại) | Sáu quãng 5 F–C–G–D–A–E–B hẹp ⅙ comma Pythagore, sáu quãng thuần |
| **Young II** (1799) | Như Vallotti dịch đi: C–G–D–A–E–B–F♯ hẹp ⅙ comma |
Vì sao điều này quan trọng với người chơi Bach: [[luat-binh-quan|"Clavier bình quân" có phải bình quân 12?]].

## Bình quân 12
- **Chu Tái Dục** (Zhu Zaiyu, hoàng tử nhà Minh) tính ¹²√2 năm **1584** (khoảng 24 chữ số, bằng bàn tính); **Simon Stevin** tìm ra độc lập (năm ghi khác nhau). Có học giả không coi ai là "người phát minh".
- Mỗi quãng 5 hẹp **1/12 comma Pythagore** (≈ 1,955 cent) → vòng khép kín, mọi giọng như nhau.

## Nghe thử
::youtube sjuhzEbOSL8 | So sánh chỉnh âm tốt, Pythagore và meantone trên đàn phím
*(Gợi ý của thư viện.)* Trên đàn điện có chế độ đổi hệ chỉnh âm, chơi [[hop-am-ba|hợp âm]] Đô trưởng rồi Fa♯ trưởng trong meantone — rồi trong bình quân. Phần "vi cung" thật sự: [[vi-cung-va-am-nhac-vi-cung]].
`,
  },
  {
    slug: "vi-cung-va-am-nhac-vi-cung",
    title: "Vi cung và âm nhạc vi cung (microtonality)",
    category: 'pitch',
    also: ['modern', 'scales'],
    aliases: ["vi cung", "microtonality", "microtone", "âm nhạc vi cung", "quãng một phần tư cung", "quarter tone", "phần tư cung", "24-EDO", "19-EDO", "31-EDO", "Harry Partch", "Alois Hába", "Ivan Wyschnegradsky", "Fokker", "Genesis of a Music", "đại hội Cairo 1932"],
    summary: "Vi cung là những quãng nhỏ hơn nửa cung bình quân. Bài giới thiệu các hướng chính: phần tư cung (50 cent) của Hába, Wyschnegradsky và Ives; chia quãng 8 thành 19 và 31 phần bằng nhau (Costeley, Huygens 1691, đàn organ Fokker 1950); thang 43 âm theo ngữ điệu thuần của Harry Partch; nhạc phổ của Grisey; cuộc tranh luận về thang 24 phần tư cung ở Đại hội Âm nhạc Ả Rập Cairo 1932; và nghiên cứu đo cao độ đàn tranh Việt Nam (bước khoảng 166 cent).",
    wiki: "Microtonality",
    refs: [
      ["Wikipedia — Ivan Wyschnegradsky", "https://en.wikipedia.org/wiki/Ivan_Wyschnegradsky"],
      ["Ivan Wyschnegradsky — tiểu sử chính thức", "https://www.ivan-wyschnegradsky.fr/en/biography/"],
      ["IRCAM Brahms — Ives, Three Quarter-Tone Pieces", "https://brahms-old.ircam.fr/en/works/work/32455"],
      ["Britannica — Alois Hába", "https://www.britannica.com/biography/Alois-Haba"],
      ["Music & Letters — về Hába", "https://academic.oup.com/ml/article/93/2/254/1015665"],
      ["Wikipedia — Harry Partch's 43-tone scale", "https://en.wikipedia.org/wiki/Harry_Partch%27s_43-tone_scale"],
      ["Hachette — Partch, Genesis of a Music", "https://www.hachettebookgroup.com/titles/harry-partch/genesis-of-a-music/9780306801068/"],
      ["Wikipedia — 19 equal temperament", "https://en.wikipedia.org/wiki/19_equal_temperament"],
      ["Wikipedia — 31 equal temperament", "https://en.wikipedia.org/wiki/31_equal_temperament"],
      ["Muziekgebouw — Fokker organ", "https://www.muziekgebouw.nl/en/fokker-organ-x5l6"],
      ["King's College London — dự án Cairo Congress 1932", "https://1932muscon.kcl.ac.uk/?p=2133"],
      ["Wikipedia — Partiels (Grisey)", "https://en.wikipedia.org/wiki/Partiels"],
      ["Keefe, Burns & Nguyen (1991) — Vietnamese modal scales of the đàn tranh (trang mục lục)", "https://labs.sonicfield.org/library/vietnamese-modal-scales-of-the-dan-tranh"],
      ["Ngô Thanh Nhàn & Phan Gia Anh Thư (2017) — thang ngũ cung Việt đo bằng cent (PDF)", "https://cs.nyu.edu/~nhan/JoSSH_vol-3_no-5_ver-12_20171215.pdf"],
    ],
    body: `
Bài này nối [[cac-he-thong-chinh-am]] với [[nhac-pho]] và [[hoi-trong-nhac-tai-tu-cai-luong|hơi trong nhạc tài tử]]. Trên piano chuẩn **không** chơi được vi cung — vì vậy chủ đề này giúp người học piano hiểu giới hạn của cây đàn mình.

## Phần tư cung (24 âm một quãng 8)
- Một phần tư cung = **50 cent**.
- **Alois Hába**: dạy lớp phần tư cung ở Nhạc viện Praha từ 1924, thành khoa vi cung năm 1934, đóng cửa 1951; [[opera|opera]] phần tư cung *Matka* (Người mẹ), sáng tác 1927 – 1928, công diễn 1931 *(nơi diễn: các nguồn khác nhau)*.
- **Ivan Wyschnegradsky** gặp Hába ở Berlin đầu thập niên 1920; họ cùng Grotrian-Steinweg làm một piano phần tư cung (khoảng 1924); năm 1929 Wyschnegradsky nhận một piano phần tư cung ba [[ban-phim|bàn phím]] do Förster đóng. *(Chi tiết hơi mâu thuẫn giữa các nguồn.)*
- [[charles-ives|Charles Ives]], *Three Quarter-Tone Pieces* cho hai piano (chương đầu viết 1923 – 1924), công diễn **8/2/1925** tại Chickering Hall, New York.
- **Đại hội Âm nhạc Ả Rập Cairo 1932**: một uỷ ban xem xét thang **24 phần tư cung bằng nhau**; một cây [[qanun|qanun]] lên theo thang này bị nhạc công chê là lạc giọng. Các học giả nhấn mạnh 24 phần là sơ đồ lý thuyết — [[cao-do|cao độ]] "nửa giáng" thực tế thay đổi theo maqam. Xem [[nhac-cu-nam-a-tay-a]].

## Chia quãng 8 thành 19 và 31 phần
| Hệ | Một bước | [[quang|Quãng]] 5 | Quãng 3 trưởng | Lịch sử |
|---|---|---|---|---|
| 19 phần | ≈ 63,16 cent | ≈ 694,74 | ≈ 378,95 | [[ca-khuc-the-tuc-trung-co|Chanson]] *Seigneur Dieu ta pitié* của Guillaume Costeley (khoảng 1558) đòi chia 19; luận án tiến sĩ đầu tiên về vi cung (Joel Mandelbaum, 1961) bàn về hệ này |
| 31 phần | ≈ 38,71 cent | ≈ 696,77 | ≈ 387,10 | **Huygens** mô tả năm 1691; **Adriaan Fokker** phục hồi — [[organ-ong|đàn organ]] Fokker (1950) nay đặt ở Muziekgebouw aan 't IJ, Amsterdam |
*(Các số cent thư viện tính lại.)* Hệ 31 gần như trùng [[cac-he-thong-chinh-am|meantone ¼ comma]] — cho quãng 3 gần thuần mà vẫn khép vòng.

## Harry Partch: 43 âm theo ngữ điệu thuần
Harry Partch (1901 – 1974) dựng thang **43 âm một quãng 8** từ các tỉ lệ số nguyên (một "kim cương âm" giới hạn 11), tự đóng nhạc cụ để chơi nó. Sách *Genesis of a Music* in lần đầu năm 1949, bản mở rộng tái bản 1979 (nhà xuất bản Da Capo).

## Nhạc phổ
*Partiels* của [[gerard-grisey|Gérard Grisey]] mở đầu bằng phổ âm của một nốt Mi trầm trên [[trombone|kèn trombone]]; các âm thành phần (partial) được giao cho từng nhạc cụ và làm tròn về phần tư hoặc phần sáu cung gần nhất. Xem [[nhac-pho]] và [[chuoi-boi-am]].

## Việt Nam: vi cung trong thực hành
- **Keefe, Burns và [[nghien-cuu-am-nhac-viet-nam|Nguyễn Thuyết Phong]]** (*Music Perception*, 1991) đo dây [[dan-tranh|đàn tranh]] do một nghệ nhân lên theo tai trong sáu tháng: hai hệ Bắc và Nam; thang [[dieu-thuc|điệu thức]] dùng nhiều bước khoảng **166 cent** — giữa một cung bình quân (200) và ba phần tư cung (150). *(Thư viện mới thấy qua trang mục lục.)*
- Ngô Thanh Nhàn và Phan Gia Anh Thư (2017) đo các thang [[am-giai-ngu-cung|ngũ cung]] Việt bằng cent: một số âm nằm **ngoài** lưới bình quân.
- Các âm "già", "non" và chữ "nhấn" trong [[hoi-trong-nhac-tai-tu-cai-luong|hơi Oán]] là vi cung trong thực hành — **chưa** có số đo cent riêng cho [[ca-hue-nha-nhac|ca Huế]] hay hơi Oán trong các nguồn tìm được.
`,
  },
]
