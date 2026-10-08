import type { Article } from '../wiki'

/** Âm học, thu âm, nghe nhạc và tâm lý học âm nhạc. Nguồn ghi trong `refs`. */
export const listening: Article[] = [
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
    ],
    body: `
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
- Tai **nhạy nhất ở khoảng 2–5 kHz**, kém nhạy hơn ở tần số thấp và cao.

## Liên hệ với chơi đàn
- [[cuong-do|Cường độ]] pp – ff trên piano là thay đổi biên độ (búa gõ mạnh nhẹ — xem [[bo-may-piano]]).
- Vì tai kém nhạy ở vùng trầm, bè trầm thường cần được cân chỉnh kỹ để không bị chìm hoặc lấn át (xem [[lam-noi-giai-dieu]]).
- Âm sắc phụ thuộc vào cường độ tương đối của các bồi âm ([[chuoi-boi-am]]) và cấu tạo đàn ([[cau-tao-piano]]).

Lưu ý: 20 Hz – 20 kHz là con số trung bình, không phải giới hạn cứng; các nguồn khác nhau đôi chút ở đầu thấp.
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

## Ý nghĩa với người học đàn
Thu âm cho phép nghe cách các thế hệ nghệ sĩ chơi cùng một tác phẩm — ví dụ nghiên cứu 127 bản thu Étude Op. 25 số 1 của Chopin cho thấy cách dùng rubato thay đổi theo thời gian (xem [[dien-dat-cau-nhac]]). Các nghệ sĩ thời đầu thu âm: [[nghe-si-piano-dau-the-ky-20]]. Cách nghe có định hướng: [[nghe-nhac-chu-dong]].
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
    ],
    body: `
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

## Ứng dụng khi dạy và biểu diễn
- Giải thích cho học trò **vì sao** một đoạn nhạc gây cảm xúc: [[chuyen-giong]], [[hop-am-muon]], [[trung-am-cromatic]], [[cau-ket|kết lừa]] đều là "kỳ vọng bị làm trái".
- Kết hợp với [[dien-dat-cau-nhac]] và [[nghe-nhac-chu-dong]].

## Rùng mình khi nghe nhạc (frisson)
Nghiên cứu của Valorie Salimpoor và cộng sự (phòng thí nghiệm Robert Zatorre, Đại học McGill; *Nature Neuroscience*, 2011) dùng chụp PET đo **dopamine** khi người nghe nghe bản nhạc **họ yêu thích** (8 người tham gia, mỗi người tự mang nhạc đến). Cảm giác "rùng mình" được dùng làm dấu hiệu của khoảnh khắc cảm xúc đỉnh điểm. Kết quả: dopamine được giải phóng theo **hai pha** — ở nhân đuôi (caudate) trong **vài giây chờ đợi** trước đỉnh, và ở nhân accumbens **ngay tại đỉnh**. Nghĩa là ngay cả **sự chờ đợi** một đoạn nhạc hay cũng tạo khoái cảm — khớp với cơ chế "kỳ vọng âm nhạc" ở trên.

Nghiên cứu dùng nhạc tự chọn nên **không xác định** yếu tố hoà âm cụ thể nào gây rùng mình; mẫu cũng nhỏ.
`,
  },
]
