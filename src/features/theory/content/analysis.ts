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
]
