import type { Article } from '../wiki'

/** Phân tích các tác phẩm hay được dạy. Nguồn ghi trong `refs`. */
export const analysis: Article[] = [
  {
    slug: 'phan-tich-fur-elise',
    title: 'Phân tích: Für Elise',
    category: 'analysis',
    aliases: ['Für Elise', 'Fur Elise', 'WoO 59', 'Bagatelle La thứ', 'Elise'],
    summary: 'Bagatelle La thứ WoO 59 của Beethoven: hình thức rondo A – B – A – C – A, phác thảo 1808–1810, chỉ được in năm 1867 — và "Elise" là ai vẫn còn là bí ẩn.',
    wiki: 'Für_Elise',
    refs: [
      ['Wikipedia — Für Elise', 'https://en.wikipedia.org/wiki/F%C3%BCr_Elise'],
      ['G. Henle Verlag — Critical report (PDF)', 'https://www.henle.de/download/KB_ausfuehrlich/2207_2_153-155.pdf'],
    ],
    body: `
## Lịch sử
- [[Beethoven]] phác thảo từ **1808**, viết bản đầy đủ hơn năm **1810** (Ludwig Nohl cho biết bản viết tay ghi ngày 27/4/1810), và sửa lại năm **1822** cho một lần in không thành.
- Bản in đầu tiên chỉ xuất hiện năm **1867**, sau khi Beethoven mất, trong sách của Nohl (Stuttgart). Bản viết tay mà Nohl dựa vào đã **thất lạc**; có học giả còn nghi nó chưa từng tồn tại, trong khi Barry Cooper (1984) chỉ ra một phác thảo còn lại rất gần bản in.

## "Elise" là ai?
Chưa có lời giải. Các giả thuyết: **Therese Malfatti** (học trò mà Beethoven được cho là đã cầu hôn năm 1810 — có thể Nohl chép nhầm "Therese" thành "Elise"), ca sĩ **Elisabeth Röckel**, hoặc cô bé **Elise Barensfeld**.

## Hình thức
Thường được phân tích là **[[rondo]] A – B – A – C – A** (cũng có ý kiến coi là hai đoạn có tái hiện):
| Đoạn | Nội dung |
|---|---|
| **A** | Chủ đề La thứ nổi tiếng, nhịp 3/8, mở đầu bằng [[nhip-lay-da|nốt lấy đà]] E – D♯ |
| **B** | Tương phản, chuyển sang giọng trưởng, nhiều nốt chạy |
| **A** | Chủ đề trở lại |
| **C** | Tương phản kịch tính hơn |
| **A** | Chủ đề trở lại lần cuối |

::staff treble E5 D#5 E5 D#5 E5 B4 D5 C5 A4 | Cao độ của câu mở đầu (chưa thể hiện trường độ): E–D♯ dao động [[cung-nua-cung|nửa cung]] rồi đi xuống về A

## Điểm cần chú ý khi dạy
- Chủ đề A là giai điệu chia giữa hai tay: tay trái rải [[hop-am-ba|hợp âm]] Am và E nối tiếp tay phải — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] và [[ban-dap|pedal]] đổi theo hợp âm.
- Nốt D♯ là [[bac-am-giai|cảm âm]] của La thứ hoà âm (xem [[am-giai-thu]]); dao động E – D♯ chính là [[not-ngoai-hop-am|nốt thêu]] quanh nốt E.
- Mỗi lần A trở lại là một [[cau-ket|kết]] — "thở" ở cuối câu ([[dien-dat-cau-nhac]]).
`,
  },
  {
    slug: 'phan-tich-prelude-do-truong',
    title: 'Phân tích: Prelude Đô trưởng BWV 846',
    category: 'analysis',
    aliases: ['Prelude số 1', 'Prelude Đô trưởng', 'BWV 846', 'Prelude in C major', 'Ave Maria Gounod'],
    summary: 'Bài mở đầu tập 1 Clavier bình quân của Bach: 35 ô nhịp hợp âm rải theo một khuôn duy nhất — một bài học hoà âm và dẫn giọng thu nhỏ.',
    wiki: 'Prelude_and_Fugue_in_C_major,_BWV_846',
    refs: [
      ['Wikipedia — Prelude and Fugue in C major, BWV 846', 'https://en.wikipedia.org/wiki/Prelude_and_Fugue_in_C_major,_BWV_846'],
      ['Wikipedia — Ave Maria (Bach/Gounod)', 'https://en.wikipedia.org/wiki/Ave_Maria_(Bach/Gounod)'],
    ],
    body: `
## Tổng quan
Bài mở đầu của tập 1 **Clavier bình quân** ([[Bach]], 1722 — xem [[luat-binh-quan]], [[fugue]]). Dài **35 ô nhịp**, gần như toàn bộ là **[[luyen-hop-am-rai|hợp âm rải]]** theo cùng một khuôn, và kết thúc bằng một hợp âm Đô trưởng khối.

## Khuôn hợp âm rải
Mỗi ô nhịp là **một hợp âm**, rải theo cùng một mẫu (lặp lại hai lần mỗi ô). Vì kết cấu không đổi, toàn bộ sự hấp dẫn nằm ở **hoà âm** và **[[dan-giong|dẫn giọng]]**: các bè chỉ dịch chuyển từng bậc nhỏ từ hợp âm này sang hợp âm kia.

::staff treble C4+E4+G4+C5+E5 C4+D4+A4+D5+F5 B3+D4+G4+D5+F5 C4+E4+G4+C5+E5 | Bốn ô nhịp đầu: C – Dm7/C – G7/B – C (I – ii7 – V7 – I)

Bốn ô đầu đã là một vòng [[chuc-nang-hoa-am|chủ – hạ át – át – chủ]] trọn vẹn, với bè trầm C – C – B – C gần như đứng yên. Phần còn lại đi xa hơn với nhiều [[hop-am-at-phu|át phụ]] và [[hop-am-bay-giam|hợp âm 7 giảm]], rồi kết thúc trên một bass ngân C.

## "Ô nhịp Schwencke"
Ô 22 có F♯ ở bè trầm, sang ô 23 nhảy lên A♭ — một [[quang|quãng 3 giảm]]. Một số ấn bản (trong đó có ấn bản Gounod dùng) **chèn thêm một ô** với G ở bè trầm để "làm mượt". Ô này không có trong bản chép tay năm 1725 của học trò Bach, Heinrich Gerber, và đã bị Franz Kroll (1862), August Halm (1905) đặt nghi vấn.

## Ave Maria của Gounod
Charles Gounod viết một giai điệu **đặt chồng lên** Prelude (hầu như không sửa đổi): bản cho violin năm 1853, và bản cho giọng hát với lời Latin "Ave Maria" năm 1859 — bản trở nên nổi tiếng.

## Gợi ý luyện tập
- Chơi **hợp âm khối** từng ô trước để nghe hoà âm và tìm ngón bấm (xem [[the-dao-hop-am]]).
- Giữ các nốt chung giữa hai ô nhịp cùng một ngón.
- Dùng [[ban-dap|pedal]] đổi theo từng ô, hoặc chơi không pedal và giữ ngón (legato ngón).
`,
  },
  {
    slug: 'phan-tich-sonata-k545',
    title: 'Phân tích: Sonata Đô trưởng K. 545',
    category: 'analysis',
    aliases: ['K. 545', 'K545', 'Sonata facile', 'Sonata semplice', 'Sonata số 16 Mozart', 'Sonata cho người mới học'],
    summary: 'Sonata "dành cho người mới học" của Mozart (1788). Chương 1 là hình thức sonata mẫu mực — với một điểm bất thường: phần tái hiện bắt đầu ở giọng Fa trưởng.',
    wiki: 'Piano_Sonata_No._16_(Mozart)',
    refs: [
      ['San Francisco Conservatory — Sonata form: the recapitulation (PDF)', 'https://sfcm.edu/sites/default/files/sfcm-theory/analysis_lectures/19_sonata_form_recap/sonata_form_recapitulation.pdf'],
      ['PTNA Piano Encyclopedia — Mozart K. 545', 'https://enc.piano.or.jp/en/musics/300'],
      ['Wikipedia — Piano Sonata No. 16 (Mozart)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._16_(Mozart)'],
    ],
    body: `
## Tổng quan
[[Mozart]] ghi tác phẩm vào danh mục năm **1788** với lời chú "**dành cho người mới học**" — vì vậy có tên "Sonata facile" (sonata dễ). Ba chương: Allegro (Đô trưởng) – Andante (Sol trưởng) – Rondo (Đô trưởng).

## Chương 1: hình thức sonata
Xem lý thuyết ở [[hinh-thuc-sonata]].
| Phần | Nội dung |
|---|---|
| **Trình bày** | Chủ đề 1 ở Đô trưởng (giai điệu trên bass Alberti) → đoạn nối bằng [[luyen-am-giai|âm giai]] → Chủ đề 2 ở **Sol trưởng** (giọng át) |
| **Phát triển** | Ngắn, đi qua các giọng thứ; kết bằng [[cau-ket|kết trọn]] ở Fa trưởng |
| **Tái hiện** | Chủ đề 1 trở lại ở **Fa trưởng** (ô 42) — giọng **hạ át**, không phải giọng chính! Đoạn nối được mở rộng để quay về Đô; Chủ đề 2 ở **Đô trưởng** |

::staff treble C5 E5 G5 B4 C5 D5 C5 | Cao độ câu mở đầu: rải hợp âm C rồi [[not-ngoai-hop-am|nốt thêu]] quanh C

## Vì sao tái hiện ở Fa trưởng là đặc biệt?
- Charles Rosen cho rằng việc bắt đầu tái hiện ở giọng hạ át là "**hiếm** vào thời điểm đó"; về sau [[Schubert]] dùng cách này. Một phân tích khác lưu ý: không có ví dụ nào khác trong các sonata piano của Mozart, nhưng có trong các sonata kiểu cũ hơn.
- Nếu chép nguyên phần trình bày dịch xuống Fa, đoạn nối sẽ dẫn tới **Đô** (át của Fa) chứ không phải Sol. Vì vậy Mozart **viết lại đoạn nối** với thêm [[mo-tien-hoa-am|mô tiến]] để chủ đề 2 về đúng Đô trưởng — một bài học về [[chuyen-giong]].

## Gợi ý khi dạy
- Bass Alberti tay trái phải **nhẹ và đều** — xem [[dem-hat-piano]], [[lam-noi-giai-dieu]].
- Các đoạn âm giai dùng ngón bấm chuẩn ([[luyen-am-giai]]) và luyện bằng [[kiem-soat-toc-do|bậc thang tốc độ]].
- Trước khi tập, cho học trò tìm ranh giới trình bày – phát triển – tái hiện trên bản nhạc: hiểu cấu trúc giúp [[hoc-thuoc-bai|học thuộc]] nhanh hơn.
`,
  },
  {
    slug: 'phan-tich-nocturne-op9-so2',
    title: 'Phân tích: Nocturne Op. 9 số 2',
    category: 'analysis',
    aliases: ['Nocturne Op. 9 No. 2', 'Nocturne Mi giáng trưởng', 'Op. 9 số 2', 'Chopin Nocturne'],
    summary: 'Nocturne Mi♭ trưởng của Chopin (1830–1832): nhịp 12/8, hình thức hai đoạn có tái hiện — mỗi lần giai điệu trở lại được trang trí hoa mỹ phong phú hơn.',
    wiki: 'Nocturnes,_Op._9_(Chopin)',
    refs: [
      ['Wikipedia — Nocturnes, Op. 9 (Chopin)', 'https://en.wikipedia.org/wiki/Nocturnes,_Op._9_(Chopin)'],
      ['PTNA Piano Encyclopedia — Chopin Nocturne Op. 9-2', 'https://enc.piano.or.jp/en/musics/21883'],
      ['Schachter & Siegel — Structural momentum and closure in Chopin\'s Nocturne Op. 9 No. 2 (Schenker Studies 2)', 'https://www.cambridge.org/core/books/schenker-studies-2/structural-momentum-and-closure-in-chopins-nocturne-op-9-no-2/62A040B19DE1E60948923A19C67FB7D8'],
    ],
    body: `
## Tổng quan
[[Chopin]] viết bộ ba Nocturne Op. 9 khoảng **1830–1832**, khi mới khoảng 20 tuổi, đề tặng **Marie Pleyel** — một nghệ sĩ piano trẻ tài năng. Thể loại nocturne học từ [[John Field]] (xem [[the-loai]]).

## Nhịp 12/8
12 phách nhỏ chia thành **bốn nhóm 3** ([[so-chi-nhip|nhịp kép]], giống cảm giác [[dieu-dem-pho-bien|slow rock 12/8]]). Tay trái đệm kiểu **nốt trầm – hợp âm – hợp âm** trong mỗi nhóm ba, gợi nhịp valse — xem [[dem-hat-piano]] và [[buoc-nhay-xa]].

::keyboard Eb4 G4 Bb4 | Hợp âm chủ Mi♭ trưởng (E♭ – G – B♭); hoá biểu 3 dấu giáng

## Hình thức
Dài **34 ô nhịp**, thường được phân tích là **hai đoạn có tái hiện**: A – A – B – A – B – A, cộng **coda** (một nghiên cứu năm 2025 chia chi tiết hơn: A – B – A′ – coda – coda′ – cadenza).
- Mỗi lần A và B trở lại, giai điệu được **trang trí phong phú hơn**: láy rền kéo dài, chuỗi nốt nhỏ — xem [[ky-hieu-hoa-my]].
- Đoạn B có hoà âm "lang thang", bè trầm đi xuống nửa cung rồi về IV – I — mang dấu ấn ngẫu hứng của Chopin.
- Gần cuối, chỉ dẫn **senza tempo** (không theo nhịp) cho phép một đoạn rất tự do trước khi kết.

## Gợi ý khi dạy
- Giai điệu tay phải phải **hát**: dùng trọng lượng cánh tay, tay trái thật nhẹ ([[lam-noi-giai-dieu]]).
- Chuỗi nốt hoa mỹ: phân nhóm theo phách tay trái trước, rồi mới thả tự do theo [[nhip-do|rubato]] ([[dien-dat-cau-nhac]]).
- [[ban-dap|Pedal]] đổi theo từng nốt trầm của tay trái.

Phân tích Schenker về bài này (Schachter & Siegel) chỉ ra nhiều điểm "khó hiểu" trong cách phân bố trọng tâm cấu trúc — xem [[phan-tich-schenker]].
`,
  },
  {
    slug: 'phan-tich-gymnopedie-so1',
    title: 'Phân tích: Gymnopédie số 1',
    category: 'analysis',
    aliases: ['Gymnopédie', 'Gymnopedie', 'Gymnopédie No. 1', 'Lent et douloureux'],
    summary: 'Tiểu phẩm 3/4 của Satie (1888): hai hợp âm 7 trưởng xen kẽ Gmaj7 – Dmaj7 dưới một giai điệu đơn giản, tạo nên không khí tĩnh lặng, u buồn.',
    wiki: 'Gymnopédies',
    refs: [
      ['Pianist Musings — What makes Gymnopédie No. 1 so special?', 'https://pianistmusings.com/2019/06/14/what-makes-gymnopedie-no-1-so-special/'],
      ['Piano Street — Satie: Gymnopédie No. 1', 'https://www.pianostreet.com/satie-sheet-music/gymnopedies/gymnopedie-1-d-major.htm'],
      ['Dartmouth — Satie analysis project (PDF)', 'https://gauss.dartmouth.edu/~m5f10/proj/Hopkins.pdf'],
    ],
    body: `
## Tổng quan
Bộ ba Gymnopédie của [[Satie]] hoàn thành ngày **2/4/1888**; cả ba đều ở nhịp **3/4**. Bài số 1 ở giọng **Rê trưởng**, đoạn giữa nghiêng sang Rê thứ. Chỉ dẫn "**Lent et douloureux**" (chậm và đau buồn) có trong bản in; bản viết tay ghi "Très lent". [[Debussy]] sau này phối khí cho dàn nhạc bài số 1 và số 3.

## Hai hợp âm xen kẽ
Phần mở đầu chỉ luân phiên **hai hợp âm 7 trưởng**:

::keyboard G3 B3 D4 F#4 | Gmaj7: G – B – D – F♯
::keyboard D3 F#3 A3 C#4 | Dmaj7: D – F♯ – A – C♯

Cả hai đều chứa **F♯** — nốt chung giữ hai hợp âm gắn kết và tạo màu u buồn đặc trưng. Toàn bộ trang đầu chỉ dùng hai hợp âm này: hoà âm **không tiến triển** theo [[chuc-nang-hoa-am|chức năng]] mà như một màu sắc tĩnh — gần với [[an-tuong|hoà âm ấn tượng]] và là tiền thân của [[toi-gian|âm nhạc tối giản]].

Về sau hoà âm hướng tới Rê thứ và La thứ, với [[bass-ngan|bass ngân]] D trầm bên dưới các [[hop-am-bay|hợp âm 7]] xen kẽ.

## Gợi ý khi dạy
- Bài tốt để luyện **[[buoc-nhay-xa|bước nhảy]] tay trái**: nốt trầm ở phách 1, hợp âm ở phách 2.
- Giai điệu bắt đầu ở phách 2 — đếm kỹ để không vào sớm.
- Pedal đổi mỗi ô nhịp, tiếng đàn mềm, đều — xem [[ban-dap]], [[cuong-do]].

Lưu ý: tên hợp âm lấy từ một phân tích; các ấn bản có thể ghi cách xếp nốt khác.
`,
  },
  {
    slug: 'phan-tich-traumerei',
    title: 'Phân tích: Träumerei',
    category: 'analysis',
    aliases: ['Träumerei', 'Traumerei', 'Mơ mộng', 'Kinderszenen', 'Cảnh tuổi thơ', 'Op. 15 số 7'],
    summary: 'Bài số 7 trong "Cảnh tuổi thơ" Op. 15 của Schumann (1838): giai điệu Fa trưởng ngắn gọn, hình thức ba đoạn, được biết đến như một trong những tiểu phẩm piano nổi tiếng nhất.',
    wiki: 'Kinderszenen',
    refs: [
      ['teoria.com — Ternary form: Schumann, Träumerei', 'https://teoria.com/en/tutorials/forms/ternary/03-schumann.php'],
      ['PTNA Piano Encyclopedia — Kinderszenen Op. 15', 'https://enc.piano.or.jp/en/musics/65'],
    ],
    body: `
## Tổng quan
**Kinderszenen** ("Cảnh tuổi thơ") Op. 15 gồm **13 tiểu phẩm**, [[Schumann]] viết năm **1838**, Breitkopf & Härtel xuất bản năm **1839**. **Träumerei** ("Mơ mộng") là bài **số 7**, ở giọng **Fa trưởng**. Schumann ban đầu gọi tập này là những bài dễ, và về sau nói rằng các tên bài **chỉ là "gợi ý tinh tế cho cách thể hiện"**, không phải một câu chuyện có chương trình.

## Hình thức
Theo teoria.com, Träumerei là ví dụ của **[[hinh-thuc-am-nhac|hình thức ba đoạn]]**: đoạn A gồm **hai câu nhạc**; khi A trở lại thì **ngắn hơn và có biến đổi nhỏ** (A′). Xem [[cau-nhac]].

::keyboard F4 A4 C5 | Hợp âm chủ Fa trưởng (hoá biểu 1 dấu giáng — B♭)

## Gợi ý khi dạy
- Giai điệu nằm ở bè trên nhưng các bè giữa cũng có đường nét riêng — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] và nghe từng bè ([[dan-giong]], [[doi-am]]).
- Nhịp độ chậm, uốn câu theo hình vòm và chậm nhẹ ở cuối câu ([[dien-dat-cau-nhac]]).
- Pedal đổi theo hợp âm, giữ cho các bè không bị nhoè ([[ban-dap]]).

Cùng thể loại tiểu phẩm cho người học: Album cho tuổi trẻ Op. 68 (xem [[lo-trinh-tac-pham]]). Lưu ý: chi tiết số ô nhịp và các kết câu cần đối chiếu trên bản nhạc (ví dụ ấn bản miễn phí trên IMSLP).
`,
  },
]
