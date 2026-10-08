import type { Article } from '../wiki'

export const chromatic: Article[] = [
  {
    slug: 'hoa-am-cromatic',
    title: 'Hoà âm cromatic',
    category: 'chromatic',
    aliases: ['chromaticism', 'hoà âm nửa cung', 'hợp âm Tristan', 'Tristan chord', 'cromatic hoá'],
    summary: 'Hoà âm dùng các nốt ngoài âm giai (nốt cromatic) để tăng màu sắc và sức căng — đỉnh cao ở cuối thời Lãng mạn.',
    wiki: 'Chromaticism',
    refs: [
      ['Classical Music — What is the Tristan chord?', 'https://www.classical-music.com/features/articles/tristan-chord-explained/'],
      ['Playbill — Journey to bliss (Tristan und Isolde)', 'https://playbill.com/article/journey-to-bliss'],
      ['Open Music Theory 2e — Chromaticism', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/05%3A_Chromaticism'],
      ['Open Music Theory 2e — Chromatic sequences', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/05%3A_Chromaticism/5.10%3A_Chromatic_Sequences'],
    ],
    body: `
Hoà âm **diatonic** chỉ dùng 7 nốt của [[hoa-bieu|giọng]]. Hoà âm **cromatic** đưa thêm các nốt thuộc [[am-giai-cromatic]] — nhưng vẫn phục vụ một trung tâm điệu tính.

## Các nguồn nốt cromatic (từ dễ đến khó)
| Nguồn | Ví dụ trong Đô trưởng | Bài |
|---|---|---|
| Nốt ngoài hợp âm cromatic | Nốt lướt C – C♯ – D | [[not-ngoai-hop-am]] |
| Hợp âm át phụ | D7 → G | [[hop-am-at-phu]] |
| Hợp âm mượn | Fm, A♭ | [[hop-am-muon]] |
| Hợp âm Napoli | D♭/F | [[hop-am-napoli]] |
| Hợp âm 6 tăng | A♭ – C – F♯ | [[hop-am-sau-tang]] |
| Hợp âm 7 giảm | C♯°7 → Dm | [[hop-am-bay-giam]] |
| Hợp âm nốt chung | C – D♯°7 – C | [[hop-am-not-chung]] |
| Hợp âm ba tăng | C – E – G♯ | [[hop-am-ba-tang]] |
| Quan hệ trung âm cromatic | C → A♭ → E | [[trung-am-cromatic]] |

## Hai cách nốt cromatic xuất hiện
- **Trang trí**: nốt cromatic chỉ thêu hoặc lướt, không đổi hợp âm (nốt lướt cromatic, [[hop-am-not-chung|hợp âm nốt chung]]).
- **Thay đổi hoà âm**: nốt cromatic tạo hợp âm mới có chức năng — át phụ, hợp âm mượn, Napoli, 6 tăng — hoặc đưa sang giọng mới ([[chuyen-giong]]).
Một mô tiến diatonic giữ **cỡ** quãng nhưng không giữ **tính chất** quãng để ở trong một giọng; thêm nốt cromatic (ví dụ biến mỗi hợp âm thành át phụ) cho ra **mô tiến cromatic** (xem [[mo-tien-hoa-am]]).

## Dẫn giọng cromatic
Ở cuối thế kỷ 19, nhiều hợp âm "khó gọi tên" xuất hiện do các bè trượt từng [[cung-nua-cung|nửa cung]] — điều quan trọng là **chuyển động bè**, không phải tên hợp âm (xem [[dan-giong]]).

::img TristanChord.svg | Hợp âm Tristan (F – B – D♯ – G♯) mở đầu vở opera "Tristan und Isolde" của [[Wagner]] (1859)

Sự giải quyết của hợp âm Tristan bị trì hoãn **gần bốn giờ** — chỉ đến ở cuối vở, trong khúc "Liebestod" của Isolde, về giọng **Si trưởng**. Hợp âm này thường được coi là bước đầu tiên dẫn tới [[phi-dieu-tinh|âm nhạc phi điệu tính]]. Bối cảnh lịch sử: [[cac-thoi-ky]].
`,
  },
  {
    slug: 'hop-am-napoli',
    title: 'Hợp âm Napoli',
    category: 'chromatic',
    aliases: ['Napoli', 'Neapolitan', 'Neapolitan sixth', 'N6', 'bII6', 'hợp âm 6 Napoli'],
    summary: 'Hợp âm trưởng dựng trên bậc 2 giáng (♭II), thường ở thể đảo 1 (N6); là hợp âm hạ át đầy kịch tính, hay gặp trong giọng thứ.',
    wiki: 'Neapolitan_chord',
    refs: [
      ['Open Music Theory 2e — Neapolitan 6th', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/05%3A_Chromaticism/5.02%3A_Neapolitan_6th_(II6)'],
      ['Open Music for Composition (UMN) — Neapolitan chord', 'https://open.lib.umn.edu/musiccomposition/chapter/neapolitan-chord/'],
      ['Wikipedia — Neapolitan chord', 'https://en.wikipedia.org/wiki/Neapolitan_chord'],
    ],
    body: `
Trong Đô thứ: bậc 2 là D → hạ thành **D♭** → hợp âm **D♭ – F – A♭**. Thường viết ở [[the-dao-hop-am|thể đảo 1]] với **F ở bè trầm** nên gọi là "hợp âm 6 Napoli" (N6).

::keyboard F3 Ab3 Db4 | N6 trong Đô thứ: F – A♭ – D♭
::staff treble F4+Ab4+Db5 F4+G4+B4 Eb4+G4+C5 | N6 → V7 → i trong Đô thứ: D♭ xuống B, A♭ xuống G

## Chức năng và dẫn giọng
- Thuộc nhóm **hạ át** (thay cho iv hoặc ii°) trong [[chuc-nang-hoa-am]]: N6 → V (hoặc N6 → I6/4 → V).
- Nốt **D♭ đi xuống B** (cảm âm) — một bước [[quang|quãng 3 giảm]] đặc trưng.
- Bè trầm F đi lên G (bậc 5).

::img Neapolitaner.svg | Hợp âm Napoli và cách giải quyết

## Ví dụ nổi tiếng
- Những ô đầu chương 1 **Sonata "Ánh trăng"** (Beethoven, Đô♯ thứ): hợp âm **Rê trưởng** — ♭II của Đô♯ thứ — xuất hiện ở ô 3, ngay trước hợp âm át G♯ ở ô 4.
- **"Erlkönig"** (Schubert): Open Music Theory dùng làm ví dụ — bài hát chủ âm hoá hợp âm Napoli rồi dùng nó trong tiến trình kết.

## Lịch sử tên gọi
- Hợp âm gắn với **trường phái opera Naples** thế kỷ 18 (A. Scarlatti, Pergolesi…), nhưng đã có trước đó ở Carissimi, Corelli, Purcell.
- Walter Piston nhận xét rằng **khó nói được điều gì là "Naples"** ở hợp âm này — tên gọi là quy ước, không phải mô tả nguồn gốc.

## Cách dựng nhanh
Lấy hợp âm trên bậc 2, biến thành hợp âm **trưởng**, rồi hạ cả hợp âm nửa cung. Ký hiệu: **N6** hoặc **♭II6**. Trong viết bè, thường **nhân đôi bè trầm** (bậc 4) và để ♭2 ở bè cao.

Cũng có thể dùng trong giọng trưởng như một [[hop-am-muon]]. Tổng quan: [[hoa-am-cromatic]].
`,
  },
  {
    slug: 'hop-am-sau-tang',
    title: 'Hợp âm 6 tăng',
    category: 'chromatic',
    aliases: ['augmented sixth', 'quãng 6 tăng', 'It+6', 'Fr+6', 'Ger+6', 'hợp âm 6 Ý', 'hợp âm 6 Pháp', 'hợp âm 6 Đức', 'Italian sixth', 'French sixth', 'German sixth'],
    summary: 'Nhóm hợp âm hạ át chứa quãng 6 tăng (♭6 ở bè trầm và ♯4 ở trên) mở rộng ra hai phía về quãng 8 trên bậc 5.',
    wiki: 'Augmented_sixth_chord',
    refs: [
      ['Open Music Theory 2e — Augmented sixth chords', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/05%3A_Chromaticism/5.03%3A_Augmented_Sixth_Chords'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — Augmented sixth chords', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/21%3A_Augmented_Sixth_Chords'],
      ['Open Music for Composition (UMN) — Augmented sixth chords', 'https://open.lib.umn.edu/musiccomposition/chapter/augmented-sixth-chords/'],
      ['Wikipedia — Augmented sixth chord', 'https://en.wikipedia.org/wiki/Augmented_sixth_chord'],
    ],
    body: `
Trong Đô trưởng/thứ: **A♭** (bậc 6 giáng) ở bè trầm và **F♯** (bậc 4 thăng) ở trên tạo [[quang|quãng 6 tăng]]. Hai nốt này cùng đi **ra ngoài** nửa cung về hai nốt **G** — quãng 8 trên [[bac-am-giai|át âm]].

| Loại | Thành phần (gốc C) | Nốt thêm | Ghi chú |
|---|---|---|---|
| **6 Ý** (It+6) | A♭ – C – F♯ | — | Gọn nhất, 3 nốt |
| **6 Pháp** (Fr+6) | A♭ – C – D – F♯ | Bậc 2 | Chứa hai tritone, màu "toàn cung" |
| **6 Đức** (Ger+6) | A♭ – C – E♭ – F♯ | Bậc 3 giáng | Nghe như A♭7 |

::keyboard Ab3 C4 Eb4 F#4 | Hợp âm 6 Đức trong Đô: A♭ – C – E♭ – F♯
::staff treble Ab4+C5+F#5 G4+B4+G5 | 6 Ý → V: A♭ và F♯ mở ra về G

## Giải quyết
- It+6 và Fr+6 → **V**.
- Ger+6 → V trực tiếp sinh ra [[dan-giong|quãng 5 song song]] (A♭–E♭ → G–D), nên thường đi qua **I6/4** trước: Ger+6 → I6/4 → V.

## Những điểm cần nhớ
- Hợp âm 6 tăng **không có nốt gốc** theo nghĩa thông thường: nó được định nghĩa bằng quãng 6 tăng giữa **♭6** (bè trầm) và **♯4**.
- Là hợp âm **tiền át** cromatic; giải quyết về **V nguyên vị** (hoặc qua 6/4 kết).
- Trong 6 Ý bốn bè, thường **nhân đôi bậc 1** (C), không nhân đôi ♭6 hay ♯4 vì cả hai đều có hướng giải quyết bắt buộc.
- Tên "Ý, Pháp, Đức" **không có cơ sở lịch sử** — chỉ là quy ước để phân biệt ba dạng.
- Một số sách thêm **6 Thuỵ Sĩ**: viết lại E♭ của 6 Đức thành **D♯** (♯2) — cùng âm thanh, vì trong giọng trưởng nốt này đi **lên** E của 6/4 kết, nên viết D♯ phản ánh đúng hướng đi của bè.
- Quãng 5 song song khi Ger+6 → V đôi khi được gọi là **"quãng 5 Mozart"**; dù vậy, cách quen thuộc hơn vẫn là chèn 6/4 kết để tránh chúng.

## Trùng âm với hợp âm 7 át
Ger+6 (A♭ – C – E♭ – F♯) nghe giống hệt A♭7 (A♭ – C – E♭ – G♭) — một cửa ngõ để [[chuyen-giong]] qua [[trung-am]]. Cũng là cơ sở của [[thay-the-tritone]] trong jazz.

Tổng quan: [[hoa-am-cromatic]].
`,
  },
  {
    slug: 'hop-am-bay-giam',
    title: 'Hợp âm 7 giảm',
    category: 'chromatic',
    aliases: ['hợp âm bảy giảm', 'diminished seventh', 'dim7', '°7', 'vii°7', 'chuyển giọng trùng âm', 'enharmonic modulation'],
    summary: 'Hợp âm gồm ba quãng 3 thứ chồng lên nhau, chia quãng 8 thành 4 phần bằng nhau — "con dao đa năng" để chuyển giọng.',
    wiki: 'Diminished_seventh_chord',
    refs: [
      ['Wikipedia — Diminished seventh chord', 'https://en.wikipedia.org/wiki/Diminished_seventh_chord'],
      ['Open Music Theory 2e — Chromaticism (common-tone chords, enharmonic modulation)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/05%3A_Chromaticism'],
    ],
    body: `
B – D – F – A♭: mỗi nốt cách nhau [[quang|quãng 3 thứ]] (3 [[cung-nua-cung|nửa cung]]). Trong giọng thứ hoà âm, đây là **vii°7** — dựng trên cảm âm (xem [[am-giai-thu]], [[hop-am-bay]]).

::keyboard B3 D4 F4 Ab4 | B°7: bốn nốt cách đều nhau

## Đối xứng
Vì chia đều quãng 8, chỉ có **3** hợp âm 7 giảm khác nhau về âm thanh. Đảo thế nào cũng vẫn là hợp âm 7 giảm:
| Viết là | Cảm âm của | Giải quyết về |
|---|---|---|
| B – D – F – A♭ | C | C / Cm |
| D – F – A♭ – C♭ | E♭ | E♭ / E♭m |
| F – A♭ – C♭ – E𝄫 | G♭ | G♭ / G♭m |
| G♯ – B – D – F | A | A / Am |

## Chuyển giọng trùng âm
Viết lại tên hợp âm (cùng phím đàn) để mỗi nốt trở thành cảm âm của một giọng khác → từ một hợp âm có thể đi tới **4 giọng trưởng và 4 giọng thứ** (xem [[trung-am]], [[chuyen-giong]]).

## Các cách dùng khác
- **Át phụ**: C♯°7 → Dm (thay cho A7, xem [[hop-am-at-phu]]).
- **7 giảm nốt chung**: C – D♯°7 (D♯ – F♯ – A – C) – C: nốt C giữ nguyên, các bè khác thêu nửa cung — hợp âm **trang trí**, không có chức năng át. Chi tiết: [[hop-am-not-chung]].
- **vii°7 trong giọng**: thay cho V7 trong vai trò át — xem [[hop-am-cam-am]].
- Âm giai đi kèm: [[am-giai-bat-cung]].
`,
  },
  {
    slug: 'bass-ngan',
    title: 'Bass ngân',
    category: 'chromatic',
    aliases: ['pedal point', 'âm ngân', 'nốt ngân', 'pedal chủ âm', 'pedal át âm', 'drone', 'âm nền'],
    summary: 'Một nốt (thường ở bè trầm) được giữ hoặc lặp lại trong khi hoà âm phía trên thay đổi, kể cả sang hợp âm không chứa nốt đó.',
    wiki: 'Pedal_point',
    refs: [
      ['Wikipedia — Pedal point', 'https://en.wikipedia.org/wiki/Pedal_point'],
      ['Open Music Theory 2e — 6/4 chords as forms of prolongation', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/04%3A_Diatonic_Harmony_Tonicization_and_Modulation/4.09%3A_6_4_Chords_as_Forms_of_Prolongation'],
    ],
    body: `
Khác với [[ban-dap|pedal của đàn piano]], "pedal" ở đây là thuật ngữ hoà âm: một nốt bất động làm nền.

## Các loại
- **Bass ngân chủ âm**: tạo cảm giác "về nhà", hay gặp ở **đầu** và **cuối** tác phẩm. Prelude số 1 Đô trưởng (Bach, *Bình quân luật* quyển 1) là ví dụ dạy học quen thuộc: gần cuối có một đoạn dài trên bass ngân **G** (át), rồi bản nhạc khép lại trên bass ngân **C** (chủ).
- **Bass ngân át âm**: tạo sức căng chờ đợi — rất hay gặp ngay trước phần tái hiện của [[hinh-thuc-sonata]] và gần cuối [[fugue]].
- **Bass ngân đảo**: nốt ngân nằm ở bè **cao** hoặc bè giữa — ví dụ một nốt lặp đi lặp lại trên cao trong khi hoà âm bên dưới thay đổi.
- **Drone** (âm nền): quãng 5 chủ – át ngân suốt bài, như kèn túi hay nhạc dân gian.

::staff bass C3+E3+G3 C3+F3+A3 C3+D3+G3+B3 C3+E3+G3 | Bass ngân C dưới I – IV – V – I

## Định nghĩa chặt chẽ
Một nốt chỉ được gọi là bass ngân khi phía trên nó có **ít nhất một hợp âm không chứa nốt đó** (tức là nghịch với nó). Nốt ngân có thể **giữ dài** hoặc **lặp lại theo tiết tấu**. Bass ngân thường bắt đầu và kết thúc khi hoà âm phía trên **khớp** với nó.

## Bass ngân và hợp âm 6/4
6/4 thêu (I – IV6/4 – I trên bè trầm chủ âm) là bass ngân ngắn nhất; 6/4 kết rồi V trên cùng một bè trầm là bass ngân át ngắn nhất — xem [[hop-am-sau-bon]].

## Tác dụng
Khi hoà âm trên không còn chứa nốt ngân, ta có một [[thuan-nghich|nghịch âm]] được "cho phép" — sức căng tăng dần cho đến khi hoà âm quay về khớp với bass. Trên piano, bass ngân thường được giữ bằng [[ban-dap|pedal sostenuto]] hoặc lặp lại theo [[ostinato]].
`,
  },
  {
    slug: 'mo-tien-hoa-am',
    title: 'Mô tiến hoà âm',
    category: 'chromatic',
    aliases: ['mô tiến', 'harmonic sequence', 'sequence', 'vòng quãng 5 đi xuống', 'chuỗi quãng 5', 'progression sequence'],
    summary: 'Một mẫu hợp âm và dẫn giọng được lặp lại nhiều lần ở các cao độ khác nhau, tạo chuyển động có hướng rõ ràng.',
    wiki: 'Sequence_(music)',
    refs: [
      ['Open Music Theory — Diatonic sequences', 'https://viva.pressbooks.pub/openmusictheory/chapter/diatonic-sequences/'],
      ['Open Music Theory 2e — Chromatic sequences', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/05%3A_Chromaticism/5.10%3A_Chromatic_Sequences'],
      ['Wikipedia — Sequence (music)', 'https://en.wikipedia.org/wiki/Sequence_(music)'],
    ],
    body: `
Mô tiến là phiên bản hoà âm của kỹ thuật mô tiến [[motif]]: một khuôn hợp âm dịch chuyển đều đặn lên hoặc xuống.

## Các mô tiến phổ biến
| Mô tiến | Mẫu bè trầm | Ví dụ trong Đô trưởng |
|---|---|---|
| **Quãng 5 đi xuống** | Xuống 5, lên 4 | C – F – B° – Em – Am – Dm – G – C |
| **Quãng 3 đi xuống** (kiểu Pachelbel) | Gốc xuống 4, lên 2 (mỗi cặp thấp hơn cặp trước một quãng 3) | C – G – Am – Em – F – C…; xen thể đảo 1 (C – G/B – Am – Em/G – F – C/E) thì bè trầm đi xuống liền bậc |
| **Đi lên 5–6** | Gốc xuống 3, lên 4; bè trầm đi lên liền bậc | C – Am/C – Dm – B°/D – Em… |
| **Quãng 5 đi lên** | Lên 5, xuống 4 | C – G – Dm – Am… — **hiếm** vì đi ngược chiều "tự nhiên" của chức năng |

::staff treble C4+E4+G4 C4+F4+A4 B3+D4+F4 B3+E4+G4 A3+C4+E4 A3+D4+F4 G3+B3+D4 G3+C4+E4 | Mô tiến quãng 5 đi xuống: I – IV – vii° – iii – vi – ii – V – I

## Nhận biết
Một mẫu 2 hợp âm lặp lại ít nhất 2–3 lần ở cao độ khác nhau, giai điệu cũng lặp lại theo. Mô tiến quãng 5 chính là đi ngược chiều kim đồng hồ trên [[vong-quang-nam]].

## Thuật ngữ: mẫu và bản sao
**Mẫu** (model) là lần trình bày đầu tiên — thường **hai hợp âm** cùng giai điệu đi kèm; mỗi lần lặp ở cao độ mới là một **bản sao** (copy). Mô tiến diatonic giữ **cỡ** quãng giữa các bản sao nhưng **tính chất** hợp âm thay đổi theo giọng (C trưởng, rồi B giảm, rồi A thứ…).

## Viết một mô tiến: các bước
1. Chọn loại mô tiến và **viết bè trầm** cho toàn bộ chuỗi.
2. Viết **mẫu** (hai hợp âm) với [[dan-giong|dẫn giọng]] tốt.
3. **Chép y** dẫn giọng đó cho từng bản sao, dịch theo bè trầm.
4. Kết thúc chuỗi bằng một [[cau-ket|kết]] hoặc chuyển sang ý nhạc mới.
Trong mô tiến, quy tắc thông thường được **nới**: hợp âm vii° nguyên vị và việc nhân đôi cảm âm được chấp nhận vì logic của mẫu lặp mạnh hơn logic của từng hợp âm.

## Mô tiến trong lược đồ galant
**Fonte** (đi xuống một bậc) và **Monte** (đi lên một bậc) là hai mô tiến hai đơn vị được dạy như khuôn mẫu ở thế kỷ 18 — xem [[luoc-do-galant]].

## Ứng dụng
Rất phổ biến trong nhạc Baroque (Vivaldi, Bach, Handel), dùng để [[chuyen-giong]] hoặc kéo dài đoạn nối. Có thể thay mỗi hợp âm bằng [[hop-am-bay|hợp âm 7]] hoặc [[hop-am-at-phu|át phụ]] để tăng lực đẩy (E7 – A7 – D7 – G7 – C). Vòng [[vong-hop-am|"Autumn Leaves"]] là mô tiến quãng 5 kinh điển của jazz.
`,
  },
  {
    slug: 'trung-am-cromatic',
    title: 'Trung âm cromatic',
    category: 'chromatic',
    aliases: ['chromatic mediant', 'quan hệ quãng 3', 'hợp âm cách quãng 3', 'third relation'],
    summary: 'Quan hệ giữa hai hợp âm cùng tính chất (trưởng–trưởng) có gốc cách nhau quãng 3, chỉ chung một nốt — tạo màu sắc bất ngờ, rực rỡ.',
    wiki: 'Chromatic_mediant',
    refs: [
      ['Wikipedia — Chromatic mediant', 'https://en.wikipedia.org/wiki/Chromatic_mediant'],
      ['Kopp — Chromatic Transformations in Nineteenth-Century Music (Cambridge, 2002)', 'https://www.cambridge.org/core/books/chromatic-transformations-in-nineteenthcentury-music/23DDA64171C8B60F88D4F47AB4604DF3'],
      ['Bass — review of Kopp, Music Theory Online 10.1 (2004)', 'https://www.mtosmt.org/issues/mto.04.10.1/mto.04.10.1.bass.php'],
      ['Wikipedia — Piano Sonata No. 21 (Beethoven, Waldstein)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._21_(Beethoven)'],
    ],
    body: `
Từ C trưởng, các trung âm cromatic là:
| Hợp âm | Quan hệ | Nốt chung với C |
|---|---|---|
| E | Quãng 3 trưởng lên | E |
| A♭ | Quãng 3 trưởng xuống | C |
| A | Quãng 3 thứ xuống | E |
| E♭ | Quãng 3 thứ lên | G |

So sánh với trung âm **diatonic** (Em, Am — cùng giọng, chung **hai** nốt): trung âm cromatic chỉ chung **một** nốt và mang theo [[dau-hoa]] lạ.

::keyboard C4 E4 G4 | C trưởng
::keyboard C4 Eb4 Ab4 | A♭ trưởng (đảo) — chỉ chung nốt C

## Màu sắc
Không có lực kéo chức năng như V → I, mà là một sự **đổi màu** đột ngột, thần bí hoặc hùng tráng. Schubert, Liszt, Wagner dùng nhiều. Nhạc phim Hollywood cũng dùng rất nhiều — Frank Lehman phân tích hiện tượng này bằng lý thuyết Neo-Riemann trong sách *Hollywood Harmony* (Oxford, 2018).

## Định nghĩa: chặt và rộng
- **Định nghĩa chặt** (David Kopp, *Chromatic Transformations in Nineteenth-Century Music*, 2002): hai hợp âm **cùng tính chất** (trưởng – trưởng hoặc thứ – thứ), gốc cách nhau quãng 3 trưởng hoặc thứ, chung **đúng một** nốt — bốn quan hệ trong bảng trên.
- **Định nghĩa rộng**: tính cả cặp **khác tính chất** (ví dụ C – A♭m), chung **không** nốt nào — đôi khi gọi là "trung âm cromatic kép".
Kopp xây dựng cả một hệ thống để coi các quan hệ quãng 3 này là **chức năng hợp lệ** trong hoà âm thế kỷ 19, thay vì chỉ là "màu sắc".

## Ví dụ: giọng của chủ đề 2
Trong chương 1 Sonata **"Waldstein"** (Beethoven, Op. 53, Đô trưởng), chủ đề 2 ở phần trình bày nằm ở **Mi trưởng** (III♯) thay vì Sol trưởng (V) như thông lệ — một quan hệ trung âm cromatic ở tầm cả hình thức (xem [[hinh-thuc-sonata]]).

Phân tích quan hệ này một cách hệ thống: [[neo-riemann]]. Liên quan: [[hop-am-muon]] (A♭ cũng là ♭VI mượn), [[hoa-am-cromatic]].
`,
  },
  {
    slug: 'neo-riemann',
    title: 'Lý thuyết Neo-Riemann',
    category: 'chromatic',
    aliases: ['Neo-Riemannian', 'PLR', 'Tonnetz', 'biến đổi P L R', 'hexatonic', 'chu trình lục cung'],
    summary: 'Mô tả việc chuyển giữa các hợp âm ba bằng ba phép biến đổi P, L, R, mỗi phép chỉ dịch một nốt — công cụ phân tích nhạc cuối Lãng mạn và nhạc phim.',
    wiki: 'Neo-Riemannian_theory',
    refs: [
      ['Wikipedia — Neo-Riemannian theory', 'https://en.wikipedia.org/wiki/Neo-Riemannian_theory'],
      ['Wikipedia — David Lewin (Generalized Musical Intervals and Transformations)', 'https://en.wikipedia.org/wiki/David_Lewin'],
      ['Wikipedia — Tonnetz', 'https://en.wikipedia.org/wiki/Tonnetz'],
    ],
    body: `
Thay vì hỏi "hợp âm này có chức năng gì?" ([[chuc-nang-hoa-am]]), lý thuyết Neo-Riemann hỏi "**nốt nào di chuyển**, và bao xa?".

| Phép | Tên | Ví dụ | Nốt di chuyển |
|---|---|---|---|
| **P** | Parallel (cùng tên) | C ↔ Cm | E ↔ E♭ (nửa cung) |
| **R** | Relative (song song) | C ↔ Am | G ↔ A (một cung) |
| **L** | Leading-tone exchange | C ↔ Em | C ↔ B (nửa cung) |

Mỗi phép giữ nguyên **hai nốt chung** và dịch nốt thứ ba theo bước nhỏ nhất — tức là [[dan-giong]] tiết kiệm tối đa. P và R tương ứng với [[giong-song-song|giọng cùng tên và giọng song song]].

## Ghép phép biến đổi
- **PL** lặp lại: C → Cm → A♭ → A♭m → E → Em → C — **chu trình lục cung**, đi qua các [[trung-am-cromatic]].
- **LR** lặp lại: đi dọc [[vong-quang-nam]].

::img Neo-Riemannian Tonnetz.svg | Tonnetz: mỗi tam giác là một hợp âm ba (đỏ = trưởng, xanh = thứ); hai tam giác chung cạnh cách nhau một phép P, L hoặc R

## Lịch sử
- **Hugo Riemann** (cuối thế kỷ 19) và các nhà lý thuyết Đức trước ông đã mô tả quan hệ giữa các hợp âm bằng phép biến đổi, và dùng **Tonnetz** (lưới âm) — một sơ đồ có từ thế kỷ 18 (Euler).
- **David Lewin**, *Generalized Musical Intervals and Transformations* (Yale University Press, **1987**): nền móng toán học cho "lý thuyết biến đổi".
- **Richard Cohn** (1996, tạp chí *Music Analysis*): chỉ ra 12 hợp âm trưởng – thứ chia thành **4 chu trình lục cung**, mỗi chu trình gồm 3 hợp âm trưởng và 3 hợp âm thứ nối nhau bằng dẫn giọng **mượt nhất có thể** (mỗi bước chỉ một nốt di chuyển nửa cung).
- **Frank Lehman**: áp dụng vào nhạc phim (*Hollywood Harmony*, Oxford, 2018).

## Khi nào dùng Neo-Riemann?
Khi hoà âm **trôi qua các hợp âm trưởng – thứ** mà không thiết lập giọng rõ ràng (Liszt, Wagner muộn, nhạc phim) — chỗ mà phân tích [[chuc-nang-hoa-am|chức năng]] chỉ ghi được những số La Mã rất lạ. Với nhạc điệu tính chặt chẽ (Bach, Mozart), phân tích chức năng vẫn là công cụ chính.
`,
  },
  {
    slug: 'bass-so',
    title: 'Bass số',
    category: 'chromatic',
    aliases: ['figured bass', 'basso continuo', 'continuo', 'bè trầm có số', 'ký hiệu số'],
    summary: 'Hệ thống ký hiệu thời Baroque: bè trầm được ghi kèm con số chỉ các quãng cần chơi phía trên, người chơi đàn phím tự "hiện thực hoá" hợp âm.',
    wiki: 'Figured_bass',
    refs: [
      ['Wikipedia — Figured bass', 'https://en.wikipedia.org/wiki/Figured_bass'],
      ['Wikipedia — Basso continuo', 'https://en.wikipedia.org/wiki/Basso_continuo'],
      ['Wikipedia — Rule of the octave', 'https://en.wikipedia.org/wiki/Rule_of_the_octave'],
    ],
    body: `
Các con số chỉ [[quang]] tính **từ nốt bè trầm** lên (không phải từ nốt gốc). Số bị lược bỏ khi đã ngầm hiểu.
| Ký hiệu | Đầy đủ | Nghĩa |
|---|---|---|
| (không số) | 5/3 | Hợp âm ba nguyên vị |
| 6 | 6/3 | Hợp âm ba đảo 1 |
| 6/4 | 6/4 | Hợp âm ba đảo 2 |
| 7 | 7/5/3 | Hợp âm 7 nguyên vị |
| 6/5 | 6/5/3 | Hợp âm 7 đảo 1 |
| 4/3 | 6/4/3 | Hợp âm 7 đảo 2 |
| 4/2 hoặc 2 | 6/4/2 | Hợp âm 7 đảo 3 |

::img Figured Bass Inversions.svg | Bass số cho các thể đảo hợp âm

## Dấu hoá trong bass số
- Một [[dau-hoa]] đứng một mình → áp cho nốt **quãng 3** phía trên bè trầm.
- Dấu hoá cạnh con số → áp cho quãng đó. Số có **gạch chéo** (6̸) nghĩa là nâng nửa cung.

## Basso continuo
Trong nhạc Baroque (Bach, Handel, Corelli), người chơi harpsichord/organ đọc bè trầm có số và ứng tác phần hoà âm — giống nghệ sĩ jazz đọc [[ky-hieu-hop-am]] ngày nay. Các số "6", "6/4" trong [[the-dao-hop-am]] chính là di sản của hệ thống này.

## Lịch sử
- Bè trầm có số xuất hiện **khoảng năm 1600**, cùng với lối hát đơn ca có đệm (monody) và opera đầu tiên. Tuyển tập *Cento concerti ecclesiastici* (1602) của **Lodovico Viadana** là một trong những ấn phẩm sớm nổi tiếng có bè continuo — nhưng bè trầm thời đầu thường **ít hoặc không có số**.
- Các sách hướng dẫn đệm continuo sớm: **Agostino Agazzari** (1607), Francesco Bianciardi (1607).
- **C. P. E. Bach**, *Versuch über die wahre Art das Clavier zu spielen*, phần 2 (**1762**): một trong những tài liệu đầy đủ nhất về cách hiện thực hoá bè trầm có số.
- Khi bè trầm không có số, người đệm dựa vào **quy tắc quãng 8** — xem [[luoc-do-galant]].

## Vì sao học bass số hôm nay?
- Là cách **nhanh nhất** để luyện nghe và viết [[dan-giong|dẫn giọng]] trên đàn phím: tay trái chơi bè trầm, tay phải tự tìm ba bè trên.
- Giúp đọc đúng ký hiệu thể đảo trong phân tích ([[ky-hieu-hop-am]], [[hop-am-sau-bon]]).
`,
  },
  {
    slug: 'phan-tich-schenker',
    title: 'Phân tích Schenker',
    category: 'chromatic',
    also: ['analysis'],
    aliases: ['Schenker', 'Schenkerian analysis', 'Ursatz', 'Urlinie', 'cấu trúc nền', 'kéo dài', 'prolongation'],
    summary: 'Phương pháp phân tích cho thấy cả tác phẩm có tính điệu là sự "kéo dài" của một cấu trúc nền đơn giản: giai điệu đi xuống về chủ âm trên bè trầm I – V – I.',
    wiki: 'Schenkerian_analysis',
    refs: [
      ['Wikipedia — Schenkerian analysis', 'https://en.wikipedia.org/wiki/Schenkerian_analysis'],
      ['Wikipedia — Heinrich Schenker', 'https://en.wikipedia.org/wiki/Heinrich_Schenker'],
      ['Wikipedia — Felix Salzer', 'https://en.wikipedia.org/wiki/Felix_Salzer'],
    ],
    body: `
Heinrich Schenker (1868–1935), nhà lý thuyết người Áo, cho rằng âm nhạc được tổ chức theo **nhiều tầng**, giống câu văn có cấu trúc ngữ pháp sâu bên dưới các từ ngữ bề mặt.

## Ba tầng
- **Tiền cảnh**: các nốt thực sự trong bản nhạc.
- **Trung cảnh**: các khung hoà âm – giai điệu đã lược bỏ trang trí ([[not-ngoai-hop-am]], [[ky-hieu-hoa-my|hoa mỹ]]).
- **Hậu cảnh** – **cấu trúc nền (Ursatz)**: gồm hai lớp:
  - **Urlinie** (đường nét gốc): giai điệu đi xuống liền bậc về chủ âm — 3̂–2̂–1̂, 5̂–4̂–3̂–2̂–1̂ hoặc 8̂…1̂.
  - **Bassbrechung** (bè trầm gốc): I – V – I.

::img Ursatz = Urlinie + Bassbrechung.png | Cấu trúc nền: đường nét gốc 3–2–1 trên bè trầm I – V – I

## Kéo dài (prolongation)
Một hợp âm hay một nốt được "kéo dài" bằng các hợp âm, nốt phụ — ví dụ cả đoạn I – IV – I6/4 – I có thể được xem là một hợp âm I kéo dài.

## Lịch sử
- Tác phẩm tổng kết của Schenker, ***Der freie Satz*** (Sáng tác tự do), được xuất bản **năm 1935**, sau khi ông mất; bản tiếng Anh *Free Composition* do **Ernst Oster** dịch (1979).
- Học trò **Felix Salzer** sang Mỹ năm **1939**, dạy ở Mannes, và viết *Structural Hearing* (**1952**) — giúp phương pháp phổ biến ở các đại học Mỹ, nơi nó trở thành một trong những cách phân tích chủ đạo.

## Phê bình
- Phương pháp tập trung vào nhạc **Áo – Đức** từ Bach đến Brahms; khó áp dụng cho nhạc ngoài truyền thống điệu tính đó.
- Bị cho là **xem nhẹ tiết tấu, câu nhạc và hình thức** so với cao độ.
- Một số người cho rằng cấu trúc nền là **giả định** áp lên tác phẩm hơn là phát hiện từ tác phẩm; những người bảo vệ đáp rằng đó là một cách **nghe**, một diễn giải, chứ không phải "sự thật" duy nhất.

## Ý nghĩa với người chơi đàn
Biết đâu là "xương sống" giúp xác định **nốt quan trọng** của [[cau-nhac]], định hướng cao trào và tạo đường dài khi biểu diễn. Liên quan: [[dan-giong]], [[chuc-nang-hoa-am]], [[cau-ket]].
`,
  },
  {
    slug: 'hop-am-not-chung',
    title: 'Hợp âm nốt chung',
    category: 'chromatic',
    aliases: ['common-tone chord', 'CT°7', 'hợp âm 7 giảm nốt chung', 'common-tone diminished seventh', 'CT+6', 'hợp âm trang trí cromatic'],
    summary: 'Hợp âm 7 giảm (hoặc 6 tăng) giữ nguyên nốt gốc của hợp âm sắp tới, các bè khác thêu nửa cung — dùng để trang trí I hoặc V7 chứ không để dẫn về một giọng mới.',
    wiki: 'Diminished_seventh_chord',
    refs: [
      ['Open Music Theory — Common-tone chords (CT°7 and CT+6)', 'https://viva.pressbooks.pub/openmusictheory/chapter/common-tone-chords/'],
      ['Open Music Theory — Embellishing chords (PDF)', 'https://viva.pressbooks.pub/app/uploads/sites/12/2024/01/embellishing-chords.pdf'],
      ['Andy Brick — Theory notes: common-tone diminished sevenths', 'https://personal.stevens.edu/%7Eabrick/theory4/theory4_notes_04.html'],
    ],
    body: `
**Hợp âm 7 giảm nốt chung** (CT°7) và **hợp âm 6 tăng nốt chung** (CT+6) có **cùng nốt** với vii°7 và [[hop-am-sau-tang|Ger+6]] nhưng **khác chức năng**: chúng không dẫn về một chủ âm mới mà **trang trí** hợp âm ngay sau — thường là **I** hoặc **V(7)**.

## Cách tạo
1. Giữ **nốt gốc** của hợp âm sắp tới làm **nốt chung**.
2. Các bè còn lại đi **liền bậc** (thường nửa cung) tới các nốt của hợp âm 7 giảm có chứa nốt chung đó.
3. Rồi quay về hợp âm được trang trí — như một nhóm [[not-ngoai-hop-am|nốt thêu]] vang cùng lúc.

## Hai ví dụ trong Đô trưởng
Suy ra từ định nghĩa trên:
| Trang trí | CT°7 | Nốt chung | Thường gọi |
|---|---|---|---|
| **I** (C – E – G) | **D♯ – F♯ – A – C** | C | ♯ii°7 |
| **V7** (G – B – D – F) | **A♯ – C♯ – E – G** | G | ♯vi°7 |

::staff treble C4+E4+G4 C4+D#4+F#4+A4 C4+E4+G4 | I – CT°7 – I: nốt C giữ nguyên, các bè khác thêu nửa cung

## Nhận biết
- Hợp âm 7 giảm **không giải quyết** như cảm âm (nốt gốc của nó không đi lên nửa cung), mà quay về hợp âm có **chung một nốt** với nó.
- Khi viết bốn bè, nốt **5** của hợp âm được trang trí thường được nhân đôi.
- Đọc hợp âm này qua **dẫn giọng**, đừng qua tên bậc: "♯ii°7" không có chức năng của bậc 2.

Hợp âm 7 giảm thông thường: [[hop-am-bay-giam]]. Tổng quan: [[hoa-am-cromatic]].
`,
  },
  {
    slug: 'hop-am-ba-tang',
    title: 'Hợp âm ba tăng',
    category: 'chromatic',
    aliases: ['augmented triad', 'III+', 'V+', 'hợp âm tăng', 'Caug', 'quãng 5 tăng trong hợp âm'],
    summary: 'Hợp âm gồm hai quãng 3 trưởng chồng nhau, chia quãng 8 thành ba phần đều; hiếm trong hoà âm cổ điển, thường là III+ của giọng thứ hoà âm hoặc V+ với nốt 5 lướt nửa cung.',
    wiki: 'Augmented_triad',
    refs: [
      ['Open Music Theory — Augmented options', 'https://viva.pressbooks.pub/openmusictheory/chapter/augmented-options/'],
      ['Harmony and Musicianship with Solfège — Augmented triads and the augmented dominant seventh', 'https://pressbooks.pub/harmonyandmusicianshipwithsolfege/chapter/augmented-triads-and-the-augmented-dominant-seventh/'],
      ['Wikipedia — Augmented triad', 'https://en.wikipedia.org/wiki/Augmented_triad'],
      ['Milne Open Textbooks — Modulation and chromatic harmony', 'https://milnepublishing.geneseo.edu/fundamentals-function-form/?p=12009'],
    ],
    body: `
**C+ = C – E – G♯**: hai [[quang|quãng 3 trưởng]] chồng nhau (xem [[hop-am-ba]]).

## Đối xứng
Ba nốt chia quãng 8 thành **ba phần bằng nhau** (mỗi phần 4 nửa cung). Dịch hợp âm lên một quãng 3 trưởng chỉ cho ra một thể đảo của chính nó → chỉ có **4 hợp âm ba tăng khác nhau** về âm thanh: C+, C♯+, D+, E♭+. (Một số tài liệu ghi "3" là sai.) Giống [[hop-am-bay-giam|hợp âm 7 giảm]], sự đối xứng làm nó **mơ hồ** và linh hoạt.

## Trong hoà âm cổ điển
Hợp âm ba tăng **hiếm hơn** các loại hợp âm ba khác; vì quãng 5 — "trụ" của hợp âm — bị biến đổi nên nó kém ổn định.
| Cách dùng | Ví dụ | Ghi chú |
|---|---|---|
| **III+** trong giọng thứ hoà âm | Trong La thứ: C – E – G♯ | Hợp âm ba tăng **duy nhất** có sẵn trong hệ trưởng – thứ mà không cần biến âm. Chung hai nốt với V (E – G♯ – B) và với i; thường mang **tính át** |
| **V+** trong giọng trưởng | G – B – D♯ → C | Nốt 5 nâng (D♯) là **nốt lướt cromatic**, như một cảm âm tạm thời đi lên E của hợp âm I |

Có nhà lý thuyết cho rằng hợp âm ba tăng thường **không chỉ là hợp âm lướt** mà có chức năng — gần như luôn là **át thay thế**; đây là quan điểm thiểu số.

## Thời Lãng mạn
Liszt dùng hợp âm ba tăng nhiều hơn hẳn mức trung bình thời ông. Ở tầng lớn, nhiều tác phẩm Lãng mạn tổ chức các giọng theo chuỗi **đi xuống quãng 3 trưởng** — có thể xem là hợp âm ba tăng "phóng to" thành cấu trúc giọng (xem [[trung-am-cromatic]]). Hợp âm ba tăng cũng nằm trọn trong [[am-giai-cromatic|âm giai toàn cung]].
`,
  },
]
