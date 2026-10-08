import type { Article } from '../wiki'

/** Âm học, thu âm, nghe nhạc và tâm lý học âm nhạc. Nguồn ghi trong `refs`. */
export const listening: Article[] = [
  {
    slug: 'lo-trinh-nghe-cam-thu',
    title: 'Nghe và cảm thụ: hệ thống và lộ trình',
    category: 'listening',
    aliases: ['lộ trình nghe nhạc', 'cảm thụ âm nhạc lộ trình', 'tâm lý học âm nhạc tổng quan', 'âm học tổng quan', 'music cognition', 'nhận thức âm nhạc'],
    summary: 'Bài tổng quan của mục: đi từ vật lý của âm thanh (âm học), qua cách tai và não xử lý âm thanh (tâm lý âm học, nhận thức), đến ý nghĩa và cảm xúc, rồi thực hành nghe và giữ gìn thính giác.',
    wiki: 'Music_psychology',
    refs: [
      ['Wikipedia — Music psychology', 'https://en.wikipedia.org/wiki/Music_psychology'],
      ['Wikipedia — Psychoacoustics', 'https://en.wikipedia.org/wiki/Psychoacoustics'],
      ['McAdams (2015) — Timbre as a structuring force in music, Oxford Handbook of Music Psychology (PDF)', 'https://www.mcgill.ca/mpcl/files/mpcl/mcadams_2015_oxfordhdbkmuspsychol.pdf'],
    ],
    body: `
Người chơi đàn và giáo viên cần hiểu **ba tầng** của việc nghe: **âm thanh là gì** (vật lý), **tai và não nhận nó thế nào** (tâm lý âm học, nhận thức), và **vì sao nó có ý nghĩa, gây cảm xúc** (tâm lý học âm nhạc). Bài này sắp xếp các bài của mục theo thứ tự đó.

## Phần A — Âm học: âm thanh là gì
1. [[am-hoc-co-ban]] — tần số, biên độ, decibel, bước sóng.
2. [[chuoi-boi-am]] — vì sao mỗi nốt là nhiều tần số; tính không điều hoà của dây đàn piano.
3. [[am-sac]] — điều gì làm tiếng piano khác tiếng violin cùng cao độ.
4. [[am-hoc-phong]] — căn phòng thay đổi tiếng đàn ra sao.
5. [[luat-binh-quan]] — toán học của 12 nốt.

## Phần B — Cảm nhận: tai và não xử lý âm thanh
6. [[cam-nhan-am-thanh]] — độ to cảm nhận, cao độ, độ nhám và thuận – nghịch.
7. [[thuan-nghich]] — thuận âm và nghịch âm trong lý thuyết.
8. [[phan-luong-thinh-giac]] — vì sao ta nghe được giai điệu tách khỏi phần đệm.
9. [[cam-nhan-phach]] — cảm nhận nhịp.
10. [[cao-do-tuyet-doi]] — cao độ tuyệt đối và tương đối.

## Phần C — Ý nghĩa và cảm xúc
11. [[ky-vong-am-nhac]] — âm nhạc "chơi" với sự chờ đợi của người nghe.
12. [[cam-xuc-am-nhac]] — các cơ chế gây cảm xúc; nhạc buồn; tính phổ quát.

## Phần D — Thực hành nghe
13. [[nghe-nhac-chu-dong]] — các cách nghe có định hướng.
14. [[luyen-tai]] — luyện tai có hệ thống.
15. [[lich-su-thu-am]] — bản thu là gì và nó đã thay đổi âm nhạc ra sao.
16. [[so-sanh-ban-thu]] — nghe và phân tích nhiều cách chơi một tác phẩm.

## Phần E — Sức khoẻ
17. [[bao-ve-thinh-giac]] — giữ đôi tai cho cả đời chơi nhạc.

## Ba nguyên tắc khi dạy phần này
- **Phân biệt vật lý và cảm nhận**: tần số ≠ cao độ, biên độ ≠ độ to, phổ ≠ âm sắc. Cảm nhận phụ thuộc vào tai, não và kinh nghiệm.
- **Phân biệt nghiên cứu và kinh nghiệm**: thư viện ghi rõ khi một nhận định là kết quả nghiên cứu (kèm cỡ mẫu, giới hạn) hay chỉ là gợi ý dạy học.
- **Quay về cây đàn**: mỗi bài đều kết thúc bằng ý nghĩa với việc chơi và dạy piano.
`,
  },
  {
    slug: 'am-hoc-co-ban',
    title: 'Âm học cơ bản',
    category: 'listening',
    aliases: ['âm học', 'tần số', 'hertz', 'Hz', 'decibel', 'dB', 'biên độ', 'độ to', 'acoustics', 'ngưỡng nghe', 'sóng âm'],
    summary: 'Âm thanh là sóng áp suất: tần số (Hz) quyết định cao độ, biên độ quyết định độ to (đo bằng dB). Tai người nghe khoảng 20 Hz – 20 kHz; piano trải từ 27,5 Hz đến 4.186 Hz.',
    wiki: 'Acoustics',
    refs: [
      ['Carleton College — Sound basics', 'https://people.carleton.edu/~jellinge/m101s12/Pages/01/01SoundBasics.html'],
      ['Columbia University — Music and Computers: frequency ranges', 'https://sites.music.columbia.edu/cmc/MusicAndComputers/chapter1/01_03.php'],
      ['Elliott Sound Products — Frequency, amplitude & dB', 'https://www.sound-au.com/articles/fadb.htm'],
      ['UTK Physics — Traveling sound waves', 'https://labs.phys.utk.edu/mbreinig/phys221core/modules/m12/Traveling%20sound%20waves.html'],
      ['Wikipedia — Inverse-square law', 'https://en.wikipedia.org/wiki/Inverse-square_law'],
      ['Wikipedia — Equal-loudness contour', 'https://en.wikipedia.org/wiki/Equal-loudness_contour'],
    ],
    body: `
Bài đầu tiên về vật lý của âm thanh — lộ trình đầy đủ của mục ở [[lo-trinh-nghe-cam-thu]].

## Âm thanh là sóng
- Nguồn âm (dây đàn, bảng cộng hưởng) rung, làm không khí **nén và giãn** luân phiên; sóng áp suất này lan đi và làm màng nhĩ rung theo.
- **Tốc độ âm thanh** trong không khí ở khoảng 20 °C xấp xỉ **343 m/s** (tăng khoảng 0,6 m/s cho mỗi độ C).
- **Bước sóng** = tốc độ ÷ tần số. Nốt A0 (27,5 Hz) có bước sóng khoảng **12,5 m**; A4 (440 Hz) khoảng **0,78 m**; C8 (4.186 Hz) khoảng **8 cm**. Sóng dài của âm trầm **vòng qua vật cản** dễ hơn sóng ngắn của âm cao.

## Tần số và cao độ
- **Tần số** là số chu kỳ dao động mỗi giây, đơn vị **hertz (Hz)**. Tần số cao → cao độ cao.
- Mỗi lần **tần số gấp đôi** là lên một [[quang|quãng 8]]. Cao độ chuẩn: **A4 = 440 Hz** (xem [[luat-binh-quan]]).

## Phạm vi nghe và phạm vi piano
| | Tần số |
|---|---|
| Tai người trẻ khoẻ (trung bình) | khoảng **20 Hz – 20.000 Hz** (giới hạn trên giảm dần theo tuổi) |
| Piano: nốt thấp nhất A0 | **27,5 Hz** |
| Đô giữa (C4) | **261,63 Hz** |
| Piano: nốt cao nhất C8 | **4.186 Hz** |

Đây là tần số **âm gốc**; mỗi nốt còn có các bồi âm cao hơn nhiều (xem [[chuoi-boi-am]]). Dưới khoảng 20 Hz, tai không còn nghe thành cao độ mà thành các nhịp đập. Xem bàn phím ở [[ban-phim]].

## Biên độ, độ to và decibel
- **Biên độ** là độ lớn dao động áp suất — quyết định độ to.
- Độ to đo bằng thang **decibel (dB)** logarit: từ **0 dB** (ngưỡng nghe) đến **trên 130 dB** (ngưỡng đau).
- Tăng **6 dB** = áp suất âm gấp đôi, nhưng phải tăng khoảng **10 dB** thì người nghe mới cảm thấy **to gấp đôi**.
- Tai **nhạy nhất ở khoảng 2–5 kHz**, kém nhạy hơn ở tần số thấp và cao (xem đường đồng âm lượng ở [[cam-nhan-am-thanh]]).
- **Khoảng cách**: với nguồn âm ở không gian mở, mỗi lần khoảng cách **tăng gấp đôi**, mức âm giảm khoảng **6 dB** (luật nghịch đảo bình phương). Trong phòng, phản xạ làm mức âm giảm chậm hơn (xem [[am-hoc-phong]]).
- **Cộng hai nguồn**: hai nguồn bằng nhau, không đồng bộ, chỉ tăng khoảng **3 dB** — hai cây đàn cùng chơi không "to gấp đôi".

## Liên hệ với chơi đàn
- [[cuong-do|Cường độ]] pp – ff trên piano là thay đổi biên độ (búa gõ mạnh nhẹ — xem [[bo-may-piano]]).
- Vì tai kém nhạy ở vùng trầm, bè trầm thường cần được cân chỉnh kỹ để không bị chìm hoặc lấn át (xem [[lam-noi-giai-dieu]]).
- Âm sắc phụ thuộc vào cường độ tương đối của các bồi âm ([[chuoi-boi-am]]), diễn biến theo thời gian của âm thanh và cấu tạo đàn — xem [[am-sac]], [[cau-tao-piano]].

Lưu ý: 20 Hz – 20 kHz là con số trung bình, không phải giới hạn cứng; các nguồn khác nhau đôi chút ở đầu thấp.
`,
  },
  {
    slug: 'am-sac',
    title: 'Âm sắc',
    category: 'listening',
    aliases: ['âm sắc', 'timbre', 'màu âm', 'tone color', 'tone colour', 'bao âm', 'envelope', 'attack', 'tiếng tấn công', 'double decay', 'aftersound', 'spectral centroid', 'độ sáng âm thanh'],
    summary: 'Thuộc tính giúp phân biệt hai âm cùng cao độ, cùng độ to (ví dụ piano và violin). Âm sắc phụ thuộc vào phổ bồi âm, cách âm thanh bắt đầu và tắt dần theo thời gian — tiếng piano có kiểu tắt dần "hai giai đoạn" đặc biệt.',
    wiki: 'Timbre',
    refs: [
      ['Wikipedia — Timbre', 'https://en.wikipedia.org/wiki/Timbre'],
      ['Siedenburg & McAdams (2017) — Four distinctions for the auditory "wastebasket" of timbre, Frontiers in Psychology', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5632649/'],
      ['McAdams (2015) — Oxford Handbook of Music Psychology chapter (PDF)', 'https://www.mcgill.ca/mpcl/files/mpcl/mcadams_2015_oxfordhdbkmuspsychol.pdf'],
      ['Lakatos (2000) — A common perceptual space for harmonic and percussive timbres (PDF)', 'https://acousticslab.org/RECA293/293Files/293Downloads/Lakatos2000_Timbre.pdf'],
      ['KTH — Weinreich: The coupled motion of piano strings', 'https://www.speech.kth.se/music/5_lectures/weinreic/weinreic.html'],
      ['J. O. Smith, Physical Audio Signal Processing — Coupled strings (Stanford CCRMA)', 'https://ccrma.stanford.edu/~jos/pasp/Coupled_Strings.html'],
    ],
    body: `
## Định nghĩa — và vì sao nó khó
Định nghĩa chuẩn (ANSI, Hội Âm học Hoa Kỳ): âm sắc là **thuộc tính của cảm giác nghe giúp người nghe nhận ra hai âm khác nhau dù chúng được trình bày giống nhau, cùng độ to và cùng cao độ**. Định nghĩa này bị phê bình vì chỉ nói âm sắc **không phải** là gì: Albert Bregman gọi âm sắc là một "sọt rác" chứa mọi thứ không phải cao độ hay độ to; định nghĩa cũng bỏ sót âm thanh không có cao độ (như trống).

## Âm sắc phụ thuộc vào gì?
- **Phổ**: cường độ tương đối của các [[chuoi-boi-am|bồi âm]]. Nhiều năng lượng ở bồi âm cao → âm thanh "sáng".
- **Diễn biến theo thời gian**: cách âm thanh **bắt đầu** (tấn công) và **tắt dần**.
- Nghiên cứu "không gian âm sắc" (Grey 1977, McAdams và cộng sự 1995, Lakatos 2000): người nghe đánh giá mức giống – khác của các cặp âm thanh; phân tích cho thấy hai chiều quan trọng nhất là **thời gian tấn công** (attack time) và **trọng tâm phổ** (spectral centroid — tương ứng cảm giác **sáng – tối**). Chiều thứ ba thì các nghiên cứu chưa thống nhất.

## Tiếng piano: tắt dần hai giai đoạn
- Piano là nhạc cụ **gõ dây**: búa đánh dây rồi rời ra, nên âm thanh **không thể giữ đều** như violin hay giọng hát — nó chỉ có thể tắt dần.
- Với phần lớn các nốt, tiếng đàn **tắt nhanh lúc đầu** ("tiếng tức thời") rồi **tắt chậm hơn** ("dư âm" — aftersound).
- **Gabriel Weinreich** (1977) giải thích: các dây cùng một nốt (2–3 dây) **liên kết với nhau qua ngựa đàn**, và mỗi dây dao động theo hai phương. Dao động theo phương **thẳng đứng** truyền năng lượng vào bảng cộng hưởng hiệu quả hơn nên **tắt nhanh**; phương **nằm ngang** tắt chậm hơn, tạo dư âm. Thợ lên dây cố ý để các dây cùng nốt **lệch nhau rất nhẹ** để định hình đường tắt dần này.
- Khi đạp **pedal una corda** (pedal trái của đàn grand), búa chỉ đánh vào ít dây hơn; dây không bị đánh rung theo qua ngựa đàn — làm thay đổi cả tiếng tấn công lẫn dư âm (xem [[ban-dap]]).

## Người chơi piano kiểm soát âm sắc đến đâu?
Với một nốt đơn, người chơi chủ yếu điều khiển **tốc độ búa** — tức là độ to; đánh mạnh hơn thì phổ cũng giàu bồi âm cao hơn (sáng hơn). Còn những gì nghe như "màu sắc" khi chơi đàn chủ yếu đến từ **quan hệ giữa nhiều nốt**: cân bằng các bè, thời điểm, độ liền tiếng và pedal (xem [[ky-thuat-cham-phim]], [[lam-noi-giai-dieu]], [[phan-luong-thinh-giac]]).

## Gợi ý dạy học
- Cho học trò nghe cùng một nốt trên piano, đàn điện, guitar: nhận ra **tiếng tấn công** khác nhau.
- Chơi một hợp âm rồi nghe **dư âm** khi giữ phím; so sánh khi có và không có pedal.
`,
  },
  {
    slug: 'am-hoc-phong',
    title: 'Âm học phòng',
    category: 'listening',
    aliases: ['âm học phòng', 'room acoustics', 'thời gian vang', 'reverberation', 'RT60', 'vang', 'tiếng vang', 'Sabine', 'acoustic phòng tập', 'âm học kiến trúc'],
    summary: 'Căn phòng làm thay đổi tiếng đàn: thời gian vang (RT60) dài hay ngắn quyết định mức pedal, nhịp độ và độ rõ. Từ thí nghiệm của Wallace Sabine (cuối thế kỷ 19) đến cách chọn phòng tập.',
    wiki: 'Room_acoustics',
    refs: [
      ['Wikipedia — Wallace Clement Sabine', 'https://en.wikipedia.org/wiki/Wallace_Clement_Sabine'],
      ['APS News — Death of Wallace Sabine, pioneer of architectural acoustics', 'https://www.aps.org/apsnews/2011/01/death-wallace-sabine-pioneer-acoustics'],
      ['Linda Hall Library — Scientist of the day: Wallace Clement Sabine', 'https://www.lindahall.org/wallace-clement-sabine/'],
      ['Montana State University — Architectural acoustics primer (PDF)', 'https://exponent.montana.edu/rmaher/personal/Architectural_acoustics_primer.pdf'],
      ['Wikipedia — Reverberation', 'https://en.wikipedia.org/wiki/Reverberation'],
    ],
    body: `
Người nghe không chỉ nghe cây đàn mà nghe **cây đàn trong một căn phòng**: âm thanh đi thẳng tới tai, cộng với vô số **phản xạ** từ tường, trần, sàn.

## Thời gian vang
**Thời gian vang** (RT60) là thời gian để âm thanh tắt đi **60 dB** sau khi nguồn ngừng phát. Phòng nhiều bề mặt cứng (đá, kính) vang lâu; phòng có rèm, thảm, ghế bọc nệm, nhiều người nghe thì vang ngắn.

## Wallace Sabine và khởi đầu của âm học kiến trúc
- Cuối thập niên 1890, nhà vật lý **Wallace Sabine** (Đại học Harvard) được nhờ sửa giảng đường ở bảo tàng Fogg, nơi tiếng nói vang tới khoảng **5 giây** khiến không ai nghe rõ bài giảng. Ông thêm vật liệu hút âm (nỉ treo tường, đệm ghế).
- Từ các đo đạc, ông tìm ra **công thức Sabine**: thời gian vang **tỉ lệ thuận với thể tích phòng** và **tỉ lệ nghịch với tổng lượng hút âm** (dạng mét: T ≈ 0,161 · V / A).
- Sabine là cố vấn âm học cho **Symphony Hall Boston** (khánh thành năm 1900) — phòng hoà nhạc đầu tiên được thiết kế theo tính toán âm học; thời gian vang khoảng **2,3 giây**, và đến nay vẫn được xếp vào hàng các phòng hoà nhạc tốt nhất.

## Thời gian vang phù hợp
| Không gian | Thời gian vang tham khảo |
|---|---|
| Phòng hoà nhạc giao hưởng | khoảng 2 giây (Sabine: 2–2,25 giây) |
| Nhà hát opera | khoảng 1,0–1,4 giây |
| Giảng đường (tiếng nói) | khoảng 0,5–0,8 giây |
Nhạc cần **độ ấm, độ hoà** thì cần vang lâu hơn; lời nói cần **độ rõ** thì cần vang ngắn.

## Ý nghĩa với người chơi piano
- **Phòng vang** (nhà thờ, phòng lớn): giảm [[ban-dap|pedal]], tách nốt rõ hơn, có thể chậm lại một chút để hoà âm không bị nhoè.
- **Phòng "khô"** (phòng nhỏ nhiều đồ vải): dùng pedal nhiều hơn, chơi legato bằng ngón kỹ hơn.
- Luôn **thử phòng** trước buổi biểu diễn: chơi vài hợp âm mạnh rồi nghe chúng tắt. Phòng có khán giả sẽ vang **ngắn hơn** lúc tổng duyệt khi phòng trống.
- **Phòng tập nhỏ, tường cứng** có thể làm tiếng đàn rất to — xem [[bao-ve-thinh-giac]].

Liên quan: [[am-hoc-co-ban]], [[am-sac]].
`,
  },
  {
    slug: 'cam-nhan-am-thanh',
    title: 'Cảm nhận âm thanh (tâm lý âm học)',
    category: 'listening',
    aliases: ['tâm lý âm học', 'psychoacoustics', 'đường đồng âm lượng', 'equal-loudness contour', 'Fletcher-Munson', 'phon', 'sone', 'âm gốc vắng mặt', 'missing fundamental', 'độ nhám', 'roughness', 'dải tới hạn', 'critical band', 'phách', 'beats', 'Plomp Levelt', 'thuận nghịch cảm giác'],
    summary: 'Tai và não không đo âm thanh như máy: độ to cảm nhận phụ thuộc tần số (đường đồng âm lượng), ta nghe được cao độ ngay cả khi âm gốc vắng mặt, và cảm giác "chói, nhám" của nghịch âm liên quan đến dải tới hạn của tai.',
    wiki: 'Psychoacoustics',
    refs: [
      ['Wikipedia — Equal-loudness contour', 'https://en.wikipedia.org/wiki/Equal-loudness_contour'],
      ['Wikipedia — Missing fundamental', 'https://en.wikipedia.org/wiki/Missing_fundamental'],
      ['Plomp & Levelt (1965) — Tonal consonance and critical bandwidth, JASA (PDF)', 'https://www.math.miami.edu/~armstrong/592sp15/Plomp_Levelt_1965.pdf'],
      ['MPI — Tonal consonance and critical bandwidth (record)', 'https://www.mpi.nl/publications/item66382/tonal-consonance-and-critical-bandwidth'],
      ['Parncutt — Roughness research notes (Uni Graz)', 'https://homepage.uni-graz.at/de/richard.parncutt/research/roughness'],
      ['Texas A&M Commerce — Lecture 15: pitch perception (PDF)', 'https://faculty.tamuc.edu/cbertulani/music/lectures/lec15/lec15.pdf'],
    ],
    body: `
**Tâm lý âm học** nghiên cứu quan hệ giữa **thông số vật lý** của âm thanh (tần số, biên độ, phổ — xem [[am-hoc-co-ban]]) và **cảm giác** của người nghe (cao độ, độ to, âm sắc).

## 1. Độ to cảm nhận và đường đồng âm lượng
- Hai âm có **cùng mức áp suất (dB)** nhưng khác tần số **không** nghe to bằng nhau. **Fletcher và Munson** (1933) đo các **đường đồng âm lượng**: những tổ hợp tần số – mức áp suất nghe to ngang nhau so với một âm chuẩn 1000 Hz. Bộ đường hiện hành là tiêu chuẩn **ISO 226:2003**.
- Đơn vị **phon**: một âm có mức N phon khi nó nghe to bằng âm 1000 Hz ở N dB.
- Tai **kém nhạy ở vùng trầm**, nhất là khi nghe nhỏ. Hệ quả cho piano: khi chơi **pp**, bè trầm dễ "biến mất"; khi chơi **ff**, bè trầm lại dễ lấn át — cân bằng bè phải điều chỉnh theo cường độ chung (xem [[lam-noi-giai-dieu]]).

## 2. Cao độ — và âm gốc vắng mặt
- Cao độ là **cảm giác**, gắn với tần số lặp lại của âm thanh. Nếu bỏ âm gốc (hoặc cả vài bồi âm đầu) khỏi một âm phức, ta **vẫn nghe cùng cao độ** — gọi là **âm gốc vắng mặt** (missing fundamental). Seebeck đã quan sát hiện tượng này từ thế kỷ 19; Schouten chứng minh nó không phải là "âm hiệu" do tai tạo ra.
- Vì vậy loa nhỏ không phát được tần số 55 Hz vẫn cho ta nghe nốt A1: não "suy ra" cao độ từ các bồi âm.
- Khả năng phân biệt hai cao độ gần nhau phụ thuộc tần số, độ to, độ dài âm và việc hai âm vang **liền nhau hay cùng lúc** — không có một con số cố định.

## 3. Phách, độ nhám và thuận – nghịch
- Hai âm gần nhau về tần số tạo **phách** (beats) — độ to dao động nhanh chậm. Thợ lên đàn dùng phách để chỉnh (xem [[luat-binh-quan]]).
- Khi phách quá nhanh để đếm, ta cảm thấy **độ nhám** (roughness).
- **Plomp và Levelt** (1965): với hai âm thuần, cảm giác thuận – nghịch đi theo **dải tới hạn** (critical band) của tai: hai âm cách nhau **hơn một dải tới hạn** được nghe là thuận; **nghịch nhất** khi cách nhau khoảng **một phần tư** dải tới hạn. Với âm phức (như tiếng đàn), độ nghịch đến từ các **bồi âm gần nhau** của hai nốt — ủng hộ giả thuyết của Helmholtz.
- Giới hạn: độ nhám **không giải thích toàn bộ** thuận – nghịch; văn hoá và thói quen nghe cũng đóng vai trò lớn (xem [[thuan-nghich]]).

## Hệ quả thực hành
- Cùng một hợp âm ba **xếp hẹp ở vùng trầm** nghe đục hơn ở vùng giữa: dải tới hạn ở vùng trầm **rộng** (tính theo nửa cung) nên các nốt gần nhau dễ tạo độ nhám. Đây là lý do các sách hoà âm khuyên xếp quãng rộng ở bè trầm (xem [[dan-giong]], [[xep-hop-am]]).
- Khi luyện tai, phân biệt **nghe thấy** (cảm giác) với **gọi tên** (lý thuyết) — xem [[luyen-tai]].
`,
  },
  {
    slug: 'phan-luong-thinh-giac',
    title: 'Phân luồng thính giác',
    category: 'listening',
    aliases: ['phân luồng thính giác', 'auditory scene analysis', 'auditory streaming', 'dòng âm thanh', 'Bregman', 'melody lead', 'giai điệu đi trước', 'tách bè khi nghe', 'nghe nhiều bè'],
    summary: 'Cách não tách hỗn hợp âm thanh thành các "dòng" riêng (Bregman, 1990): nốt gần cao độ, cùng âm sắc, bắt đầu cùng lúc thì được nghe chung. Giải thích vì sao giai điệu nổi lên trên phần đệm — và "giai điệu đi trước" của người chơi piano.',
    wiki: 'Auditory_scene_analysis',
    refs: [
      ['Wikipedia — Auditory scene analysis', 'https://en.wikipedia.org/wiki/Auditory_scene_analysis'],
      ['Bey & McAdams (2002) — Schema-based processing in auditory scene analysis (PDF)', 'https://mcgill.ca/mpcl/files/mpcl/bey_2002_pandp.pdf'],
      ['eLife (2013) — Time is of the essence for auditory scene analysis', 'https://elifesciences.org/articles/01136'],
      ['Goebl (2001) — Melody lead in piano performance: expressive device or artifact?, JASA (PDF)', 'https://iwk.mdw.ac.at/goebl/papers/Goebl_JASA2001_melodyLead.pdf'],
      ['Huron (2001) — Tone and voice: a derivation of the rules of voice-leading from perceptual principles', 'https://muse.jhu.edu/book/47915'],
    ],
    body: `
Âm thanh đến tai là **một sóng áp suất duy nhất** — tổng của mọi nguồn. Vậy mà ta nghe được giai điệu violin tách khỏi dàn nhạc, hay giai điệu tay phải tách khỏi phần đệm tay trái. Nhà tâm lý học **Albert Bregman** gọi quá trình này là **phân tích cảnh thính giác** (sách *Auditory Scene Analysis*, 1990).

## Các nguyên tắc nhóm
**Theo chiều ngang (nối tiếp)** — các nốt kế tiếp được nghe thành **một dòng** khi:
- **Gần nhau về cao độ**. Khi hai nhóm nốt cách xa nhau và xen kẽ **nhanh**, tai buộc phải tách thành **hai dòng**. Nghiên cứu kinh điển của van Noorden (1975) cho thấy khoảng cách cần để tách phụ thuộc vào **tốc độ**: chậm thì cách xa vẫn nghe thành một dòng, nhanh thì chỉ vài nửa cung đã tách.
- **Cùng âm sắc** và **cùng độ to**.

**Theo chiều dọc (đồng thời)** — các thành phần được nghe thành **một âm** khi:
- **Bắt đầu cùng lúc**.
- Có quan hệ **bồi âm** với nhau (xem [[chuoi-boi-am]]).

**Theo hiểu biết** (schema): người nghe đã biết giai điệu thì nhận ra nó dễ hơn ngay cả khi nó bị trộn với nốt nhiễu cùng âm vực (Dowling).

## Âm nhạc khai thác phân luồng
- **Giai điệu ẩn trong hình rải**: một chuỗi nốt nhanh nhảy giữa hai âm vực được nghe thành **hai bè** — Bach dùng điều này trong các tác phẩm cho nhạc cụ độc tấu (đa âm ngầm).
- **Luật dẫn giọng**: David Huron (2001) chỉ ra các luật viết bè cổ điển (tránh quãng 8 song song, tránh bè chéo nhau…) chính là cách giữ cho các bè **được nghe tách biệt** (xem [[luat-hoa-am-bon-be]]).

## Piano: "giai điệu đi trước"
- Đo đạc trên đàn piano ghi âm bằng máy tính cho thấy nốt giai điệu thường vang **sớm hơn khoảng 30 mili giây** so với các nốt đệm cùng hợp âm (Palmer, 1996) — giúp giai điệu nổi lên nhờ nguyên tắc "bắt đầu cùng lúc thì nhóm chung".
- **Werner Goebl** (2001; 22 nghệ sĩ piano, Chopin Ballade Op. 38 và Étude Op. 10 số 3) đo thời điểm **ngón chạm phím** và thấy độ lệch này **gần như bằng 0**: nốt giai điệu vang sớm chủ yếu vì được **đánh mạnh hơn** nên búa tới dây nhanh hơn (giả thuyết "sản phẩm phụ của tốc độ"). Câu hỏi người chơi có **cố ý** đánh sớm hay không vẫn chưa khép lại hoàn toàn.
- Bài học: muốn giai điệu nổi lên, hãy tập **cân bằng cường độ** giữa các ngón trong một hợp âm (xem [[lam-noi-giai-dieu]], [[ky-thuat-cham-phim]]); thời điểm sẽ tự theo.

## Gợi ý dạy học
- Chơi hai giai điệu quen thuộc **xen kẽ từng nốt** ở cùng âm vực: học trò khó nhận ra. Chuyển một giai điệu lên một quãng 8: cả hai hiện ra ngay.
- Trong [[nghe-nhac-chu-dong]], yêu cầu học trò theo dõi **một bè** suốt một đoạn fugue (xem [[fugue]]).
`,
  },
  {
    slug: 'ky-vong-am-nhac',
    title: 'Kỳ vọng âm nhạc',
    category: 'listening',
    aliases: ['kỳ vọng âm nhạc', 'musical expectation', 'expectancy', 'ITPRA', 'Sweet Anticipation', 'Leonard Meyer', 'David Huron', 'chờ đợi trong âm nhạc', 'dự đoán âm nhạc'],
    summary: 'Người nghe liên tục đoán điều sắp xảy ra; âm nhạc tạo cảm xúc bằng cách đáp ứng, trì hoãn hoặc làm trái sự chờ đợi đó — từ lý thuyết của Leonard Meyer (1956) đến mô hình ITPRA của David Huron (2006).',
    refs: [
      ['Wikipedia — Leonard B. Meyer', 'https://en.wikipedia.org/wiki/Leonard_B._Meyer'],
      ['Huron (2006) — Sweet Anticipation: Music and the Psychology of Expectation (MIT Press), catalogue record', 'https://discover.musikverket.se/bib/1255655'],
      ['Music & Letters — review of Sweet Anticipation', 'https://academic.oup.com/ml/article/89/3/396/1135734'],
      ['Vuust et al. — Anticipation (PDF)', 'https://pure.au.dk/ws/files/48455327/VuustAnticipation.pdf'],
      ['Margulis — A model of melodic expectation (PDF)', 'https://esf.ccarh.org/254-old/254_LiteraturePack1/MelFeatures2_ExpectTheoryt(Margulis).pdf'],
      ['Salimpoor et al. (2011), Nature Neuroscience (PDF)', 'https://www.zlab.mcgill.ca/publications/docs/salimpoor_2011_nn.pdf'],
    ],
    body: `
## Leonard Meyer (1956)
Trong *Emotion and Meaning in Music* (1956), **Leonard Meyer** đề xuất: cảm xúc âm nhạc nảy sinh khi một **xu hướng chờ đợi** do âm nhạc khơi lên bị **tạm thời kìm lại hoặc bị chặn hẳn**. Ví dụ: một âm giai đi lên dừng ở **cảm âm** khiến ta chờ **chủ âm**; nếu chủ âm không đến, ta cảm thấy căng và hụt hẫng. Cuốn sách được coi là nền móng của phần lớn nghiên cứu nhận thức âm nhạc hiện đại.

## David Huron: mô hình ITPRA (2006)
Trong *Sweet Anticipation* (MIT Press, 2006), **David Huron** mở rộng ý của Meyer thành năm phản ứng, xếp theo thời gian quanh một sự kiện:
| Phản ứng | Thời điểm | Vai trò |
|---|---|---|
| **I**magination — tưởng tượng | Trước sự kiện | "Nếm trước" niềm vui hay nỗi buồn của kết quả → tạo động lực |
| **T**ension — căng | Ngay trước sự kiện | Tăng tỉnh táo, tập trung chú ý |
| **P**rediction — dự đoán | Ngay sau sự kiện | Thưởng nếu đoán đúng, cảnh báo nếu sai |
| **R**eaction — phản ứng | Ngay sau sự kiện | Phản xạ nhanh: dễ chịu hay đáng lo |
| **A**ppraisal — đánh giá | Sau đó, có ý thức | Đánh giá lại: "bất ngờ nhưng hay" |
Một ý quan trọng: **đoán đúng tự nó đã là niềm vui** — vì thế nghe lại một bản nhạc quen vẫn thích, và những "bất ngờ" hay nhất thường được đánh giá tích cực **sau** phản ứng giật mình ban đầu.

## Ta học kỳ vọng từ đâu?
- Từ **kinh nghiệm nghe**: não ghi nhận những gì thường xảy ra trong âm nhạc của văn hoá mình (ví dụ V thường đi về I). Vì vậy kỳ vọng phụ thuộc phong cách và văn hoá.
- Từ **chính bản nhạc**: một [[motif]] lặp lại tạo kỳ vọng nó sẽ quay lại.
- Một số xu hướng có thể chung cho nhiều nền văn hoá — ví dụ sau bước nhảy lớn giai điệu thường đi ngược lại (xem [[giai-dieu]]).

## Thủ pháp sáng tác là thủ pháp với kỳ vọng
| Thủ pháp | Kỳ vọng bị tác động |
|---|---|
| [[cau-ket|Kết lừa]] V – vi | Chờ I, nhận vi |
| [[fermata|Dấu ngân]] và [[dau-lang|dấu lặng]] kéo dài trước tái hiện | Trì hoãn sự kiện đã biết trước |
| [[dao-phach|Đảo phách]] | Chờ trọng âm ở phách mạnh |
| [[chuyen-giong|Chuyển giọng]] bất ngờ, [[trung-am-cromatic]] | Chờ ở lại giọng cũ |
| [[bass-ngan|Bass ngân]] át âm dài | Biết chủ âm sẽ tới, nhưng chưa biết khi nào |

## Bằng chứng từ não
Nghiên cứu của Salimpoor và cộng sự (2011) thấy dopamine được giải phóng cả **trong lúc chờ đợi** khoảnh khắc đỉnh của bản nhạc yêu thích, không chỉ lúc đỉnh tới — phù hợp với vai trò của sự chờ đợi (xem [[cam-xuc-am-nhac]]).

## Ý nghĩa khi biểu diễn
Người chơi quyết định **người nghe cảm nhận kỳ vọng mạnh đến đâu**: ngân dài hợp âm át, chậm lại trước kết, nhấn hợp âm của kết lừa (xem [[dien-dat-cau-nhac]], [[nhip-do|rubato]]).
`,
  },
  {
    slug: 'cam-xuc-am-nhac',
    title: 'Âm nhạc và cảm xúc',
    category: 'listening',
    aliases: ['cảm xúc âm nhạc', 'tâm lý học âm nhạc', 'music psychology', 'BRECVEMA', 'Juslin', 'nhạc buồn', 'nhạc vui', 'trưởng vui thứ buồn'],
    summary: 'Tâm lý học âm nhạc giải thích âm nhạc gây cảm xúc qua nhiều cơ chế (mô hình BRECVEMA của Juslin); nhịp độ và giọng trưởng – thứ ảnh hưởng mạnh tới cảm nhận vui – buồn.',
    wiki: 'Music_and_emotion',
    refs: [
      ['Juslin (2013) — From everyday emotions to aesthetic emotions (Physics of Life Reviews)', 'https://doi.org/10.1016/j.plrev.2013.05.008'],
      ['Hunter, Schellenberg & Schimmack (2010) — Feelings and perceptions of happiness and sadness induced by music (PDF)', 'https://sites.utm.utoronto.ca/sites/sites.utm.utoronto.ca.glenn_website/files/download/HunterEtAl2010.pdf'],
      ['Dalla Bella et al. (2001) — A developmental study of the affective value of tempo and mode in music', 'https://pubmed.ncbi.nlm.nih.gov/11274986/'],
      ['Salimpoor et al. (2011), Nature Neuroscience — Anatomically distinct dopamine release during anticipation and experience of peak emotion to music (PDF)', 'https://www.zlab.mcgill.ca/publications/docs/salimpoor_2011_nn.pdf'],
      ['Fritz et al. (2009), Current Biology — Universal recognition of three basic emotions in music (ScienceDaily summary)', 'https://sciencedaily.com/releases/2009/03/090319132909.htm'],
      ['Eerola et al. (2018), Physics of Life Reviews — An integrative review of the enjoyment of sadness associated with music', 'https://jyx.jyu.fi/handle/123456789/59210'],
      ['Eerola, Vuoskoski & Kautiainen (2016), Frontiers in Psychology — Being moved by unfamiliar sad music is associated with high empathy (PDF)', 'https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01176/pdf'],
    ],
    body: `
## Mô hình BRECVEMA
Patrik Juslin cho rằng không có **một** cơ chế duy nhất, mà âm nhạc gây cảm xúc qua **tám cơ chế**:
| Cơ chế | Ví dụ |
|---|---|
| **Phản xạ thân não** | Âm thanh đột ngột, rất to, [[thuan-nghich|nghịch tai]] gây giật mình |
| **Đồng bộ nhịp điệu** | Nhịp tim, nhịp cơ thể dần "khớp" với nhịp nhạc |
| **Điều kiện hoá đánh giá** | Bản nhạc từng gắn với kỷ niệm vui sẽ gợi niềm vui |
| **Lây lan cảm xúc** | Người nghe "bắt chước" bên trong cảm xúc mà âm nhạc thể hiện |
| **Hình ảnh** | Âm nhạc gợi hình ảnh trong đầu (ví dụ một phong cảnh) |
| **Ký ức** | Gợi lại một sự kiện cụ thể trong đời |
| **Kỳ vọng âm nhạc** | Âm nhạc đáp ứng hoặc làm trái điều ta chờ đợi (ví dụ [[cau-ket|kết lừa]]) |
| **Đánh giá thẩm mỹ** | Cảm giác ngưỡng mộ, kinh ngạc trước vẻ đẹp |

## Nhịp độ, trưởng – thứ và vui – buồn
- Cả **nhịp độ** và **giọng trưởng/thứ** đều ảnh hưởng tới cảm nhận vui – buồn, trong đó **nhịp độ nổi bật hơn** (xem [[nhip-do]], [[am-giai-truong]], [[am-giai-thu]]).
- Nhanh + trưởng → vui; chậm + thứ → buồn. Khi tín hiệu **trái ngược** (trưởng mà chậm, thứ mà nhanh), người nghe báo cáo **cảm xúc lẫn lộn**.
- Trẻ em hiểu tín hiệu **nhịp độ sớm hơn** tín hiệu trưởng/thứ; trẻ 3–4 tuổi trong một nghiên cứu chưa phân biệt được nhạc vui và buồn tốt hơn mức ngẫu nhiên.
- Lưu ý: trong âm nhạc thực tế, nhạc trưởng thường nhanh và nhạc thứ thường chậm, nên hai yếu tố hay bị lẫn vào nhau.

## Có phổ quát không? Nghiên cứu với người Mafa
**Fritz và cộng sự** (*Current Biology*, 2009) cho **21 người Mafa** ở miền bắc Cameroon — chưa từng nghe nhạc phương Tây — và 20 người phương Tây nghe các đoạn piano ngắn được soạn để thể hiện **vui, buồn, sợ hãi** theo quy ước phương Tây (giọng, nhịp độ, âm vực, tiết tấu).
- Cả hai nhóm đều nhận ra cảm xúc **cao hơn mức ngẫu nhiên**; người Mafa cũng dựa vào **nhịp độ** và **giọng** như người phương Tây.
- Nhưng kết quả **không đồng đều** (2/21 người Mafa ở mức ngẫu nhiên), và các tác giả **không** coi âm nhạc là "ngôn ngữ cảm xúc toàn cầu": nhạc của người Mafa không thể hiện cùng dải cảm xúc như nhạc phương Tây.

## Nghịch lý nhạc buồn
Vì sao ta **thích** nghe nhạc buồn? Bài tổng quan của **Eerola và cộng sự** (2018) xét các giải thích ở ba cấp: **sinh học**, **tâm lý – xã hội** và **văn hoá**, và kết luận **không cấp nào đủ** để giải thích một mình. Các yếu tố được bàn: hoài niệm, cảm giác **được an ủi** như có người đồng cảm, và trạng thái **xúc động** (being moved). Một nghiên cứu năm 2016 của nhóm này thấy những người **giàu đồng cảm** dễ xúc động hơn khi nghe nhạc buồn lạ.

## Ứng dụng khi dạy và biểu diễn
- Giải thích cho học trò **vì sao** một đoạn nhạc gây cảm xúc: [[chuyen-giong]], [[hop-am-muon]], [[trung-am-cromatic]], [[cau-ket|kết lừa]] đều là "kỳ vọng bị làm trái".
- Kết hợp với [[dien-dat-cau-nhac]] và [[nghe-nhac-chu-dong]].

## Rùng mình khi nghe nhạc (frisson)
Nghiên cứu của Valorie Salimpoor và cộng sự (phòng thí nghiệm Robert Zatorre, Đại học McGill; *Nature Neuroscience*, 2011) dùng chụp PET đo **dopamine** khi người nghe nghe bản nhạc **họ yêu thích** (8 người tham gia, mỗi người tự mang nhạc đến). Cảm giác "rùng mình" được dùng làm dấu hiệu của khoảnh khắc cảm xúc đỉnh điểm. Kết quả: dopamine được giải phóng theo **hai pha** — ở nhân đuôi (caudate) trong **vài giây chờ đợi** trước đỉnh, và ở nhân accumbens **ngay tại đỉnh**. Nghĩa là ngay cả **sự chờ đợi** một đoạn nhạc hay cũng tạo khoái cảm — khớp với cơ chế "kỳ vọng âm nhạc" ở trên.

Nghiên cứu dùng nhạc tự chọn nên **không xác định** yếu tố hoà âm cụ thể nào gây rùng mình; mẫu cũng nhỏ.
`,
  },
  {
    slug: 'nghe-nhac-chu-dong',
    title: 'Nghe nhạc chủ động',
    category: 'listening',
    aliases: ['nghe nhạc', 'nghe có định hướng', 'active listening', 'guided listening', 'cảm thụ âm nhạc', 'musicogram'],
    summary: 'Nghe có mục đích: tham gia trước khi nghe (hát, vỗ, vận động), rồi theo dõi hình thức bằng sơ đồ; nghe lặp lại nhiều lần, mỗi lần một trọng tâm.',
    refs: [
      ['Boal-Palheiros — Active listening strategies (Wuytack\'s approach)', 'https://recipp.ipp.pt/bitstreams/b364856c-d8f3-4afd-b394-b50fefac463e/download'],
      ['Diaz (2015), Update: Applications of Research in Music Education (record)', 'https://discovery-imamu.kwaretech.com/EdsRecord/eric,EJ1060409'],
      ['ArtsIntegration — The value in guided active listening', 'https://artsintegration.com/2014/08/06/are-we-listening-to-that-song-again-the-value-in-guided-active-listening/'],
      ['Copland — How we listen (chapter of What to Listen For in Music), course reprint (PDF)', 'https://springmuse.hunter.cuny.edu/wp-content/uploads/2019/01/Copland-How-We-Listen-To-Music.pdf'],
      ['Schuman (1939) — review of Copland, What to Listen For in Music (PDF)', 'https://pmf.regroupement-rcms.org/media/public/documents/ART-SCW-1939-01.pdf'],
    ],
    body: `
## Ba "tầng" nghe của Copland
Trong *What to Listen For in Music* (1939), nhà soạn nhạc **Aaron Copland** chia việc nghe thành ba tầng — ông nói rõ đây là cách chia **để phân tích**, thực tế ta nghe cả ba cùng lúc:
| Tầng | Người nghe chú ý đến | Bài liên quan |
|---|---|---|
| **Cảm giác** (sensuous) | Vẻ đẹp của âm thanh tự thân | [[am-sac]], [[am-hoc-phong]] |
| **Biểu cảm** (expressive) | Cảm xúc, hình ảnh, ý nghĩa âm nhạc gợi ra | [[cam-xuc-am-nhac]], [[ky-vong-am-nhac]] |
| **Thuần âm nhạc** (sheerly musical) | Bản thân các nốt: giai điệu, nhịp, hoà âm, hình thức | [[hinh-thuc-am-nhac]], [[phan-tich-hoa-am]] |
Copland cho rằng phần lớn người nghe dừng ở tầng cảm giác, và khuyên người nghe thông minh **tăng hiểu biết về chất liệu âm nhạc** — mục tiêu của việc nghe chủ động.

## Tai nghe được gì, và theo thứ tự nào
Hiểu cơ chế nghe giúp chọn trọng tâm phù hợp: theo dõi một bè giữa nhiều bè dựa vào [[phan-luong-thinh-giac|phân luồng thính giác]]; cảm giác hồi hộp đến từ [[ky-vong-am-nhac|kỳ vọng]]. Lộ trình cả mục: [[lo-trinh-nghe-cam-thu]].

## Phương pháp của Wuytack
Phương pháp nghe chủ động (theo tổng quan của Boal-Palheiros về Jos Wuytack) gồm:
1. **Tham gia trước khi nghe** — bằng thể chất và trí óc: hát, chơi nhạc cụ, vận động theo các chủ đề của tác phẩm.
2. **Phân tích ngắn hình thức** bằng **"musicogram"** — một sơ đồ hình ảnh thể hiện toàn bộ tác phẩm, người nghe dõi theo trong lúc nghe.

Kết luận của tổng quan: các chiến lược chủ động (biểu diễn hoặc hình ảnh hoá) **tạo động lực** cho trẻ nghe nhạc và **nâng cao việc học âm nhạc**.

## Nghe lặp lại, mỗi lần một trọng tâm
Một gợi ý thực hành (từ giáo viên, chưa phải nghiên cứu) với một concerto của Vivaldi: lần 1 nghe để thưởng thức; lần 2 tưởng tượng cây violin "đang nói gì"; các lần sau thảo luận và viết.

## Gợi ý trọng tâm cho mỗi lần nghe
Vận dụng các bài trong thư viện:
- **Hình thức**: chủ đề quay lại khi nào? ([[rondo]], [[hinh-thuc-sonata]], [[hinh-thuc-am-nhac]])
- **Hoà âm**: nghe ra các [[cau-ket|kết]], trưởng hay thứ ([[luyen-tai]]).
- **Kết cấu**: bao nhiêu bè, ai giữ giai điệu? ([[ket-cau]], [[doi-am]])
- **Biểu cảm**: nhịp độ co giãn ở đâu, đỉnh câu ở đâu? ([[dien-dat-cau-nhac]])
- **So sánh bản thu**: nghe cùng một bài do hai nghệ sĩ chơi ([[lich-su-thu-am]]).

Một nghiên cứu năm 2015 (Diaz) đã so sánh ba cách nghe — có chỉ số gây xao nhãng, gọi tên yếu tố âm nhạc, và nghe tự do — về sự chú ý và cảm xúc; các nghiên cứu về chủ đề này phần lớn còn nhỏ. Cảm xúc khi nghe: [[cam-xuc-am-nhac]].
`,
  },
  {
    slug: 'lich-su-thu-am',
    title: 'Lịch sử thu âm',
    category: 'listening',
    aliases: ['thu âm', 'phonograph', 'máy hát', 'gramophone', 'đĩa than', 'LP', 'đĩa 78', 'bản thu Brahms', 'piano roll', 'Welte-Mignon'],
    summary: 'Bốn thời kỳ: âm học (1877–1925), điện (1925–1945), từ tính (1945–1975), số (từ 1975). Năm 1889, Brahms được thu âm khi chơi piano — một trong những bản thu cổ nhất của một nhà soạn nhạc lớn.',
    wiki: 'History_of_sound_recording',
    refs: [
      ['Wikipedia — History of sound recording', 'https://en.wikipedia.org/wiki/History_of_sound_recording'],
      ['Stanford CCRMA — Brahms at the piano (1889)', 'https://ccrma.stanford.edu/groups/edison/brahms/brahms.html'],
      ['TÜV Nord — A brief history of sound recording', 'https://www.tuev-nord.de/en/knowledge/explore/a-brief-history-of-sound-recording-part-1/'],
      ['Music Theory Online — Glenn Gould, spliced: investigating the filmmaking analogy', 'https://mtosmt.org/ojs/index.php/mto/article/view/86/127'],
      ['Research Catalogue — Gould and the recording studio', 'https://www.researchcatalogue.net/view/84390/84783'],
      ['The Nation — Truly, madly, deeply (on recording practice)', 'https://www.thenation.com/article/archive/truly-madly-deeply/tnamp/'],
    ],
    body: `
## Bốn thời kỳ
| Thời kỳ | Năm | Mốc chính |
|---|---|---|
| **Âm học** | 1877–1925 | 1877: máy phonograph của Edison ghi và phát lại âm thanh trên lá thiếc; Bell và Tainter thay bằng sáp; 1887: Emile Berliner phát minh **gramophone** dùng đĩa |
| **Điện** | 1925–1945 | 1925: những đĩa hát **thu bằng điện** đầu tiên, chất lượng tăng vọt |
| **Từ tính** | 1945–1975 | 21/6/1948: Columbia giới thiệu **đĩa than LP** (33⅓ vòng/phút); trước đó đĩa shellac quay 78 vòng/phút |
| **Số** | từ 1975 | Thu và phát âm thanh kỹ thuật số |

Trước Edison, phonautograph (bằng sáng chế 1857) đã vẽ được sóng âm nhưng không phát lại được.

## Brahms thu âm năm 1889
Ngày **2/12/1889**, Theo Wangemann — người của Edison — thu âm [[Brahms]] chơi hai đoạn nhạc trên piano: một trong những bản thu cổ nhất còn lại của một nhà soạn nhạc lớn tự chơi nhạc của mình. Tiếng nhạc gần như bị tiếng ồn che lấp; các nhà nghiên cứu đã phục dựng nhịp độ để hình dung cách Brahms chơi (không đủ để biết cường độ hay pedal).

## Cuộn piano (piano roll)
Hệ thống **Welte-Mignon** (phát minh năm 1904) ghi lại cách chơi bằng cuộn giấy đục lỗ cho đàn tự chơi. Lưu ý: các album "Brahms trên Welte-Mignon" là các nghệ sĩ khác chơi nhạc Brahms, **không phải** Brahms tự chơi.

## Bản thu phòng thu: ghép nhiều lần chơi
Từ thời băng từ, bản thu phòng thu có thể được **cắt ghép** từ nhiều lần chơi (take).
- **Glenn Gould** biểu diễn trước công chúng lần cuối ở Chicago (**3/1964**) rồi chỉ thu âm. Ông cho rằng phòng thu là một **phương tiện nghệ thuật riêng**: người nghệ sĩ được "sửa và hoàn thiện" như nhà văn, thay vì phải làm lại từ đầu mỗi buổi hoà nhạc.
- Trong tiểu luận *The Prospects of Recording* (tạp chí *High Fidelity*, 1966), Gould kể bản thu năm 1956 **Fugue La thứ** (Bình quân luật quyển 1) của ông được ghép từ **hai lần chơi** (take 6 và take 8): phần đầu và cuối lấy từ take 6, đoạn giữa từ take 8 — vì ông thấy cả hai, nếu nghe riêng, đều đơn điệu.
- Hệ quả cho người nghe: một bản thu phòng thu **không nhất thiết** là một lần biểu diễn liền mạch. Một bài viết trên tạp chí *The Nation* nhận xét xu hướng ngược lại: nhiều nhà sản xuất hiện ưa **thu trực tiếp** trước khán giả.

## Bản thu thay đổi cách chơi
- Các bản thu cổ là **tài liệu lịch sử** về phong cách biểu diễn của các nghệ sĩ sinh ra từ thế kỷ 19 — ví dụ cách dùng rubato (xem nghiên cứu Étude Op. 25 số 1 ở dưới, [[phong-cach-dien-tau]]).

## Ý nghĩa với người học đàn
Thu âm cho phép nghe cách các thế hệ nghệ sĩ chơi cùng một tác phẩm — ví dụ nghiên cứu 127 bản thu Étude Op. 25 số 1 của Chopin cho thấy cách dùng rubato thay đổi theo thời gian (xem [[dien-dat-cau-nhac]]). Các nghệ sĩ thời đầu thu âm: [[nghe-si-piano-dau-the-ky-20]]. Cách nghe có định hướng: [[nghe-nhac-chu-dong]]; cách so sánh nhiều bản thu: [[so-sanh-ban-thu]].
`,
  },
  {
    slug: 'so-sanh-ban-thu',
    title: 'So sánh bản thu',
    category: 'listening',
    aliases: ['so sánh bản thu', 'phân tích biểu diễn', 'performance analysis', 'CHARM', 'Mazurka Project', 'Sonic Visualiser', 'nghe nhiều bản thu', 'đường cong nhịp độ', 'tempo map'],
    summary: 'Nghe và phân tích nhiều bản thu của cùng một tác phẩm: so sánh nhịp độ, rubato, cường độ, pedal. Dự án CHARM (Chopin Mazurka) cho thấy có thể đo các khác biệt này và lần ra "phả hệ" phong cách giữa thầy và trò.',
    refs: [
      ["CHARM — Mazurka project description (King's College London)", 'https://charm.kcl.ac.uk/projects/p2_3_2.html'],
      ["Cook, Sapp & Earis (2007) — Performance analysis and Chopin's mazurkas (PDF)", 'https://www.continuum-hypothesis.com/music/vdocuments.net_performance-analysis-and-chopins-mazurkas.pdf'],
      ['Mazurka Project — discography', 'https://mazurka.org.uk/info/discography/'],
      ['Mazurka Project — Fiorentino fakes', 'https://mazurka.org.uk/fiorentino/'],
      ["Muns — On wings and wooden shoes (Sonic Visualiser and Cook's Beyond the Score)", 'https://lodewijkmuns.nl/music/on-wings-and-wooden-shoes/'],
    ],
    body: `
Bản nhạc không ghi hết mọi thứ: nhịp độ chính xác, độ co giãn, cân bằng bè, pedal… đều do người chơi quyết định. So sánh nhiều bản thu là cách tốt nhất để học trò thấy **khoảng tự do diễn giải** — và giới hạn của nó.

## Nghiên cứu: dự án Mazurka của CHARM
- **CHARM** (Trung tâm nghiên cứu Lịch sử và Phân tích Âm nhạc Thu âm, Anh) có một dự án về các bản thu **Mazurka của Chopin**: kho lưu trữ hơn **1.500 bản thu** từng bản mazurka, trong đó gần 30 bộ trọn vẹn. Mục tiêu: xây dựng phương pháp **đo** thời gian và cường độ từ bản thu, để tìm ra xu hướng lịch sử và đặc điểm phong cách của từng trường phái.
- Bài báo của **Nicholas Cook, Craig Sapp và Andrew Earis** (2007) về Mazurka Op. 68 số 3: nhóm các bản thu theo **mức tương quan của đường cong nhịp độ**, và các nhóm tìm được có trường hợp **khớp với quan hệ thầy – trò** đã biết. Kết luận: **chỉ riêng dữ liệu nhịp độ** đã có thể rút ra những nhận xét có ý nghĩa.
- Phân tích dữ liệu bản thu còn phát hiện **gian lận**: một số bản thu phát hành dưới tên nghệ sĩ Joyce Hatto và Sergio Fiorentino thực ra là bản thu của người khác.
- Công cụ miễn phí **Sonic Visualiser** được dùng rộng rãi trong dự án; Cook trình bày nhiều kết quả trong sách *Beyond the Score* (Oxford, 2013).

## So sánh gì?
| Khía cạnh | Câu hỏi khi nghe |
|---|---|
| **Nhịp độ chung** | Nhanh hay chậm? Có khác nhiều so với chỉ dẫn [[nhip-do]]? |
| **Co giãn** | Chậm lại ở đâu: cuối câu, đỉnh câu, hợp âm lạ? ([[nhip-do|rubato]]) |
| **Cường độ** | Đỉnh lớn nhất ở đâu? Tương phản rộng hay hẹp? ([[cuong-do]]) |
| **Cân bằng bè** | Bè nào được làm nổi? ([[lam-noi-giai-dieu]]) |
| **Cách diễn tấu, pedal** | Liền hay tách? Âm thanh "khô" hay "ướt"? ([[cach-dien-tau]], [[ban-dap]]) |
| **Thời đại** | Bản thu cũ thường co giãn tự do hơn — xem [[lich-su-thu-am]], [[phong-cach-dien-tau]] |

## Cách tổ chức một buổi so sánh
1. Học trò đọc bản nhạc và **tự hình dung** trước (xem [[tap-trong-dau]]).
2. Nghe **2–3 bản thu** của cùng **một đoạn ngắn** (8–16 ô), mỗi lần một khía cạnh trong bảng trên.
3. Ghi chú lên bản nhạc: chỗ nào các nghệ sĩ **giống nhau** (thường là cấu trúc), chỗ nào **khác nhau** (khoảng tự do).
4. Học trò chọn và **giải thích** lựa chọn của mình, rồi tự thu âm và so sánh.
Lưu ý: bắt chước một bản thu duy nhất dễ dẫn đến sao chép; nghe nhiều bản giúp học trò thấy **nhiều khả năng**.
`,
  },
  {
    slug: 'bao-ve-thinh-giac',
    title: 'Bảo vệ thính giác',
    category: 'listening',
    aliases: ['bảo vệ thính giác', 'hearing protection', 'mất thính lực', 'hearing loss', 'ù tai', 'tinnitus', 'nút tai nhạc sĩ', 'musician earplugs', 'liều tiếng ồn', 'NIOSH', '85 dB'],
    summary: 'Nhạc sĩ có nguy cơ mất thính lực do tiếng ồn. Tiêu chuẩn NIOSH: 85 dBA trong 8 giờ, mỗi 3 dB tăng thêm thì thời gian an toàn giảm một nửa. Phòng tập piano nhỏ, cường độ lớn có thể vượt ngưỡng này.',
    wiki: 'Noise-induced_hearing_loss',
    refs: [
      ["Washnik et al. (2019), J Am Acad Audiol — Music teachers' and musicians' exposure (Thieme)", 'https://www.thieme-connect.com/products/ejournals/html/10.3766/jaaa.17097?lang=de'],
      ['Buy Quiet Roadmap — Hearing loss prevention for musicians (PDF)', 'https://buyquietroadmap.com/wp-content/uploads/2012/10/Hearing-Loss-Prevention-for-Musicians.pdf'],
      ["Canadian Journal of Acoustics — Music teachers' noise exposure", 'https://jcaa.caa-aca.ca/index.php/jcaa/article/download/1639/1386/1776'],
      ['Eastern Kentucky University — Music program health and safety (PDF)', 'https://www.eku.edu/musicprogram/wp-content/uploads/sites/59/2023/09/ekuhealthandsafety.pdf'],
      ['Sound On Sound — How loud is a concert grand piano?', 'https://www.soundonsound.com/sound-advice/q-how-loud-concert-grand-piano'],
      ['Wikipedia — Noise-induced hearing loss', 'https://en.wikipedia.org/wiki/Noise-induced_hearing_loss'],
    ],
    body: `
Mất thính lực do tiếng ồn là **không hồi phục**. Với người chơi nhạc, đôi tai là công cụ nghề nghiệp — cần được bảo vệ như đôi tay (xem [[suc-khoe-nguoi-choi-dan]]).

## Liều tiếng ồn
Tiêu chuẩn khuyến nghị của **NIOSH** (Viện An toàn và Sức khoẻ Nghề nghiệp Hoa Kỳ):
| Mức trung bình | Thời gian tiếp xúc tối đa mỗi ngày |
|---|---|
| 85 dBA | 8 giờ |
| 88 dBA | 4 giờ |
| 91 dBA | 2 giờ |
| 94 dBA | 1 giờ |
| 97 dBA | 30 phút |
Quy tắc **"3 dB"**: cứ tăng 3 dB thì thời gian an toàn giảm một nửa. (OSHA dùng ngưỡng lỏng hơn: 90 dBA, quy tắc 5 dB.) Các tiêu chuẩn này được xây dựng từ dữ liệu **tiếng ồn công nghiệp**; áp dụng cho âm nhạc chỉ là gần đúng.

## Piano to đến đâu?
- Các bảng tham khảo về an toàn thính giác ghi piano tập bình thường khoảng **60–70 dB**, piano **fortissimo** có thể lên khoảng **84–103 dB** — con số thay đổi nhiều theo đàn, phòng và khoảng cách đo.
- Bên trong đàn grand, sát dây, đỉnh âm có thể vượt **130 dB**; mức giảm khoảng **6 dB mỗi lần khoảng cách tăng gấp đôi** (xem [[am-hoc-co-ban]]).
- Một khảo sát trong trường nhạc cho thấy mức âm trong **phòng tập** của mọi nhóm nhạc cụ đều vượt 85 dB, một số sinh viên trung bình trên 94 dB (nguồn dạng tài liệu giảng dạy, nên coi là tham khảo).
- Hiện **chưa có** số đo chuẩn hoá, ghi rõ khoảng cách, cho mức âm tại tai người chơi piano trong phòng tập; muốn biết chính xác, cần đo bằng máy đo âm thanh hiệu chuẩn (đặt A-weighting, ngang tai).

## Biện pháp thực tế
- **Phòng tập**: tránh phòng nhỏ, tường cứng, trần thấp; thêm rèm, thảm, giá sách để giảm vang (xem [[am-hoc-phong]]). Với đàn grand, có thể **hạ nắp** khi tập.
- **Nghỉ giữa giờ**: những quãng nghỉ yên lặng giúp tai hồi phục; kết hợp với nguyên tắc nghỉ của [[phuong-phap-luyen-tap]].
- **Đàn điện và tai nghe**: giữ âm lượng vừa phải — tai nghe sát tai có thể vượt ngưỡng an toàn mà người chơi không nhận ra.
- **Nút tai cho nhạc sĩ**: giảm khoảng **15 dB** một cách tương đối **đều** giữa các dải tần (khác nút tai công nghiệp làm tiếng bị đục), nên vẫn nghe cân bằng; giảm 3 dB đã giảm một nửa liều tiếp xúc.
- **Dấu hiệu cảnh báo**: ù tai hoặc nghe "bí" sau buổi tập là dấu hiệu tiếp xúc quá mức — cần đi khám thính học nếu kéo dài.

## Với giáo viên
Giáo viên ngồi cạnh đàn **nhiều giờ mỗi ngày**: tổng liều tiếp xúc có thể lớn hơn của học trò. Nên đo thử phòng dạy và sắp xếp thời gian nghỉ.
`,
  },
]
