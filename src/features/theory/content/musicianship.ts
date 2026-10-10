import type { Article } from '../wiki'

/** Luyện tai, xướng âm và sư phạm âm nhạc. Nguồn ghi trong `refs`. */
export const musicianship: Article[] = [
  {
    slug: 'lo-trinh-luyen-tai-su-pham',
    title: 'Luyện tai và sư phạm: hệ thống và lộ trình',
    category: 'musicianship',
    aliases: ['lộ trình luyện tai', 'music pedagogy', 'kỹ năng nghe'],
    summary: 'Bài tổng quan của mục: hai mảng lớn — kỹ năng nghe (luyện tai, xướng âm, âm tiết nhịp, ký âm, nghe trong đầu) và sư phạm (các phương pháp giáo dục, dạy đọc nốt, giảng dạy hiệu quả, dạy theo lứa tuổi, thi cấp độ) — sắp theo thứ tự học.',
    wiki: 'Music_education',
    refs: [
      ['Wikipedia — Music education', 'https://en.wikipedia.org/wiki/Music_education'],
      ['Utah Education Network — Aural skills (open textbook)', 'https://uen.pressbooks.pub/auralskills/chapter/chunking-and-extractive-listening/'],
      ['UT Austin Center for Music Learning — The nature of expertise', 'https://cml.music.utexas.edu/online-resources/the-nature-of-expertise'],
    ],
    body: `
Mục này dành cho hai đối tượng: **người học** muốn có đôi tai tốt, và **người dạy** muốn dạy có phương pháp. Hai mảng gắn với nhau: phần lớn các phương pháp giáo dục âm nhạc lớn đều đặt **nghe và hát** trước **ký hiệu**.

Kiến thức nhạc lý đi kèm (ký hiệu, tiết tấu, cao độ, âm giai): [[nhac-ly-co-ban]].

## Phần A — Kỹ năng nghe
1. [[luyen-tai]] — cảm âm tương đối, nội dung cần luyện.
2. [[cao-do-tuyet-doi]] — hiểu đúng về cảm âm tuyệt đối.
3. [[xuong-am]] — Đô cố định và Đô di động.
4. [[am-tiet-nhip]] — đọc tiết tấu bằng âm tiết (ta – ti, takadimi…).
5. [[ky-am]] — nghe và ghi lại [[giai-dieu|giai điệu]], [[tiet-tau|tiết tấu]], hoà âm.
6. [[ly-thuyet-hoc-am-nhac-gordon]] — "nghe trong đầu" (audiation) và trình tự học.
7. [[tap-trong-dau]] — luyện tập không cần đàn.
Liên quan: [[nghe-nhac-chu-dong]], [[cam-nhan-am-thanh]], [[phan-luong-thinh-giac]].

## Phần B — Sư phạm
Bài tổng quan riêng cho người dạy piano: [[su-pham-piano]] — kèm [[neuhaus-nghe-thuat-choi-piano]], [[truong-phai-su-pham-nga]], [[nha-su-pham-piano-phuong-tay]], [[giao-trinh-piano-nhap-mon]].
8. [[phuong-phap-giao-duc-am-nhac]] — Dalcroze, [[zoltan-kodaly|Kodály]], [[carl-orff|Orff]], Suzuki.
9. [[cach-day-doc-not]] — các cách dạy đọc nốt cho người mới.
10. [[giang-day-hieu-qua]] — nghiên cứu về buổi học hiệu quả, phản hồi và động lực.
11. [[day-tre-em]], [[day-nguoi-lon]] — dạy theo lứa tuổi.
12. [[lo-trinh-tac-pham]], [[thi-cap-do]] — chọn bài và thi cấp độ.
Liên quan: [[phuong-phap-luyen-tap]], [[hoc-thuoc-bai]], [[thi-tau]], [[doc-not-nhanh]], [[hoi-hop-bieu-dien]], [[phan-tich-va-bieu-dien]].

## Ba nguyên tắc chung rút ra từ mục này
- **Âm thanh trước ký hiệu**: hát, vận động, nghe trước; đọc và gọi tên sau (Kodály, Orff, Dalcroze, Gordon).
- **Từng bước, có trình tự**: từ mẫu ngắn đến ý nhạc dài, từ bắt chước đến tự tạo (Gordon; Duke).
- **Phân biệt bằng chứng và kinh nghiệm**: thư viện ghi rõ đâu là kết quả nghiên cứu, đâu là gợi ý của giáo viên — nhiều câu "ai cũng biết" trong dạy nhạc chưa từng được kiểm chứng.
`,
  },
  {
    slug: 'luyen-tai',
    title: 'Luyện tai và cảm âm tương đối',
    category: 'musicianship',
    also: ['listening'],
    aliases: ['luyện tai', 'ear training', 'cảm âm tương đối', 'relative pitch', 'nghe quãng', 'aural skills', 'chơi theo tai'],
    summary: 'Cảm âm tương đối là khả năng nhận ra quãng và quan hệ giữa các nốt — kỹ năng phổ biến và hữu ích nhất cho người chơi nhạc, có thể luyện được.',
    wiki: 'Ear_training',
    refs: [
      ['University of Chicago — Perfect pitch, explained', 'https://news.uchicago.edu/explainer/what-is-perfect-pitch'],
      ['Wikipedia — Relative pitch', 'https://en.wikipedia.org/wiki/Relative_pitch'],
    ],
    body: `
## Cảm âm tương đối là gì?
Là khả năng nhận ra **[[quang|quãng]]** giữa các nốt và vai trò của chúng trong [[hoa-bieu|giọng]] — ví dụ nghe ra một [[giai-dieu|giai điệu]] đang đi lên quãng 5, hay nốt đang nghe là [[bac-am-giai|bậc 7]] muốn về chủ âm. Kỹ năng này phổ biến hơn nhiều so với [[cao-do-tuyet-doi]].

## Luyện được đến đâu?
- Người lớn có cảm âm tương đối có thể học được "**cảm âm tuyệt đối giả**": gọi [[not-nhac|tên nốt]] theo cách bề ngoài giống cảm âm tuyệt đối; một số người sau luyện tập nhận đúng cả 12 nốt với độ chính xác từ 90% trở lên.
- Nghiên cứu của Đại học Chicago (Howard Nusbaum, 2015) cho thấy người không có cảm âm tuyệt đối vẫn **học được cách nhận nốt nhanh**.

## Luyện những gì
Các nội dung này chính là phần **thi nghe** trong các kỳ thi piano (xem [[thi-cap-do]]):
- Nhận ra **quãng** giai điệu và hoà âm (xem mẹo nhớ quãng bằng bài hát trong [[quang]]).
- Phân biệt [[hop-am-ba|hợp âm]] trưởng, thứ, giảm, tăng; [[hop-am-bay]].
- Nhận ra [[cau-ket|kết]] (trọn, nửa, lừa) và [[so-chi-nhip|nhịp 2, 3, 4]].
- Vỗ lại [[tiet-tau|tiết tấu]]; hát lại giai điệu; nhận biết giai điệu đi lên hay đi xuống.

## Luyện tai có hệ thống
Bốn công cụ bổ sung cho nhau (lộ trình ở [[lo-trinh-luyen-tai-su-pham]]):
- **Hát**: [[xuong-am|xướng âm]] — hát được thì mới nghe chắc được.
- **Đọc tiết tấu**: [[am-tiet-nhip]].
- **Nghe và ghi lại**: [[ky-am]] — theo Karpinski gồm bốn khâu nghe, nhớ, hiểu, ghi; trí nhớ làm việc là nút thắt chính.
- **Nghe trong đầu**: [[ly-thuyet-hoc-am-nhac-gordon|audiation]] và [[tap-trong-dau]].
Luyện nghe tác phẩm trọn vẹn: [[nghe-nhac-chu-dong]]. Cơ sở tâm lý âm học: [[cam-nhan-am-thanh]].
`,
  },
  {
    slug: 'cao-do-tuyet-doi',
    title: 'Cảm âm tuyệt đối',
    category: 'musicianship',
    also: ['listening'],
    aliases: ['absolute pitch', 'perfect pitch', 'tai tuyệt đối', 'cao độ tuyệt đối'],
    summary: 'Khả năng gọi tên một nốt mà không cần nốt tham chiếu. Hiếm hơn cảm âm tương đối, nhưng không hiếm như con số "1 trên 10.000" vẫn hay được nhắc.',
    wiki: 'Absolute_pitch',
    refs: [
      ['Miyazaki et al. (2018) — Absolute pitch research (PDF)', 'https://www.human.niigata-u.ac.jp/~psy/miyazaki/Papers/Miyazaki2018.pdf'],
      ['University of Chicago — Perfect pitch, explained', 'https://news.uchicago.edu/explainer/what-is-perfect-pitch'],
    ],
    body: `
## Phổ biến đến mức nào?
- Con số **"1 trên 10.000"** bắt nguồn từ ước tính của Bachem (1955) dựa trên nhạc công và sinh viên âm nhạc ở Chicago — nhưng **không được bằng chứng ủng hộ**.
- Một tổng quan năm 2019 cho thấy tỉ lệ **ít nhất khoảng 4%** trong sinh viên âm nhạc.
- Tỉ lệ cao hơn rõ rệt ở người có tuổi thơ tại **Đông Á**. Một giải thích là tiếp xúc với [[cao-do|cao độ]] gắn với tên gọi có nghĩa từ rất sớm — phù hợp với các **ngôn ngữ có thanh điệu** (như tiếng Quan Thoại, Quảng Đông). Một nghiên cứu khác thấy người gốc Đông Á lớn lên ở Mỹ, Canada không khác biệt so với người da trắng cùng vùng, nên cho rằng **kinh nghiệm ngôn ngữ** quan trọng hơn di truyền.

## Có học được không?
Quan niệm cũ coi cảm âm tuyệt đối là "có hoặc không" và chỉ hình thành trong một "giai đoạn vàng" thời thơ ấu đã bị thách thức: nghiên cứu ở Đại học Chicago cho thấy kỹ năng này có thể phát triển cả khi trưởng thành. Tuy vậy, một phương pháp hiệu quả với trẻ 2–4 tuổi lại **không hiệu quả với trẻ từ 5 tuổi trở lên**.

## Không phải lúc nào cũng là lợi thế
Người có cảm âm tuyệt đối có thể gặp khó khi [[dich-giong]] hoặc chơi cùng dàn nhạc lên dây ở cao độ khác chuẩn (xem [[luat-binh-quan]]), và có thể **không phát triển cảm âm tương đối** nếu chỉ theo giáo trình thông thường. Với đa số người chơi nhạc, [[luyen-tai|cảm âm tương đối]] mới là kỹ năng cần luyện.

Lưu ý: con số 4% đến từ một tổng quan duy nhất; các con số khác nên xem là gần đúng.
`,
  },
  {
    slug: 'xuong-am',
    title: 'Xướng âm: Đô cố định và Đô di động',
    category: 'musicianship',
    aliases: ['xướng âm', 'solfège', 'solfege', 'solfeggio', 'Đô cố định', 'Đô di động', 'fixed do', 'movable do', 'Do Re Mi'],
    summary: 'Hai cách dùng tên Đô–Rê–Mi: Đô cố định (Đô luôn là nốt C) và Đô di động (Đô là âm chủ của giọng đang hát).',
    wiki: 'Solfège',
    refs: [
      ['Local 802 AFM — The solfège war', 'https://local802afm.org/allegro/articles/the-solfege-war'],
      ['Teaching Children Music — Movable do vs fixed do', 'https://www.teaching-children-music.com/2012/10/movable-do-vs-fixed-do/'],
      ['muted.io — Solfège', 'https://muted.io/solfege/'],
    ],
    body: `
Hệ thống tên Ut–Re–Mi bắt nguồn từ [[Guido d'Arezzo]] (thế kỷ 11) — và vốn là hệ thống **di động**.
::wiki Guidonian_hand | Bàn tay Guido (ảnh đầu bài Wikipedia *Guidonian hand*)

## Hai hệ thống
| | Đô cố định | Đô di động |
|---|---|---|
| "Đô" là | Luôn là nốt **C** | **Âm chủ** của [[am-giai-truong|giọng trưởng]] đang hát |
| [[hop-am-ba|Hợp âm trưởng]] trên G | Sol – Si – Rê | Đô – Mi – Sol |
| Thế mạnh | Gắn tên với [[cao-do|cao độ]] cụ thể; hợp với nhạc [[chuyen-giong|chuyển giọng]] phức tạp, nhạc [[thoi-ky-the-ky-20|thế kỷ 20]]–21 | Giữ nguyên quan hệ [[quang]] và [[bac-am-giai|bậc]] ở mọi giọng → luyện [[luyen-tai|cảm âm tương đối]] |

Với Đô di động, hợp âm trưởng hát từ nốt gốc **luôn là Đô – Mi – Sol** ở bất kỳ giọng nào. Một số hệ thống dùng thêm âm tiết cho nốt [[am-giai-cromatic|cromatic]] (ví dụ C♯ là "di", B♭ là "ta").

## Ở đâu dùng hệ nào?
Theo các nguồn (chủ yếu ý kiến giáo viên, chưa phải khảo sát chính thức): Đô cố định phổ biến ở Pháp, Nam Âu, Mỹ Latinh; Đô di động phổ biến ở các nước nói tiếng Anh và tiếng Đức. Việt Nam gọi tên nốt theo kiểu Đô cố định (Đô = C, xem [[not-nhac]]). Một lựa chọn thứ ba là hát bằng **số bậc** (1, 2, 3…), hay dùng ở các nhạc viện quốc tế.

## Nên chọn hệ nào?
Các nhà giáo dục không thống nhất: một số cho rằng Đô di động hiệu quả nhất với người mới học; số khác cho rằng ở giai đoạn đầu chọn hệ nào không quan trọng, càng lên cao mới có khác biệt. Phương pháp [[phuong-phap-giao-duc-am-nhac|Kodály]] dùng Đô di động kèm ký hiệu tay.
`,
  },
  {
    slug: 'am-tiet-nhip',
    title: 'Âm tiết nhịp: ta – ti, takadimi',
    category: 'musicianship',
    aliases: ['âm tiết nhịp', 'rhythm syllables', 'đọc tiết tấu', 'ta ti', 'ta ti-ti', 'takadimi', 'du de', 'Gordon rhythm syllables', 'French time names', 'đếm nhịp', 'counting system'],
    summary: 'Các hệ thống đọc tiết tấu bằng âm tiết: âm tiết Kodály (ta, ti-ti), âm tiết Gordon (du, du-de) và takadimi (Hoffman, Pelto, White, 1996) — mỗi hệ gắn âm tiết với một vị trí trong phách hoặc một giá trị nốt.',
    wiki: 'Takadimi',
    refs: [
      ['Hoffman, Pelto & White (1996) — Takadimi: a beat-oriented system of rhythm pedagogy (takadimi.net)', 'https://www.takadimi.net/takadimiArticle.html'],
      ['Palkki — Rhythm syllable pedagogy: a historical journey to Takadimi via the Kodály method (JMTP)', 'https://journals-upgrade.shareok.org/jmtp/article/view/649'],
      ['Wikipedia — Takadimi', 'https://en.wikipedia.org/wiki/Takadimi'],
      ["Mr. A's Music Place — A review of rhythm syllable systems", 'https://mramusicplace.net/2014/03/18/a-review-of-rhythm-syllable-systems/'],
    ],
    body: `
Đọc tiết tấu bằng **âm tiết** giúp người học **nói ra** được [[tiet-tau|nhịp điệu]] trước khi đọc và chơi nó — một bước trung gian giữa nghe và ký hiệu.

## Hai cách nghĩ
- **Gắn với giá trị nốt**: mỗi loại nốt có một âm tiết (nốt đen = "ta", hai móc đơn = "ti-ti"). Dễ cho trẻ nhỏ.
- **Gắn với vị trí trong phách**: âm tiết cho biết nốt rơi vào **đầu phách, giữa phách hay phần nhỏ hơn**. Chính xác hơn khi nhịp phức tạp.

## Các hệ thống chính
| Hệ thống | Ví dụ (nhịp đơn) | Đặc điểm |
|---|---|---|
| **[[zoltan-kodaly|Kodály]]** (từ French Time-Names thế kỷ 19) | Nốt đen **ta**, hai móc đơn **ti-ti**; nốt đen chấm + móc đơn **taam-ti** | Gắn với giá trị nốt; không dành âm tiết riêng cho dấu chấm. Choksy (*The Kodály Context*, 1981) bổ sung âm tiết cho các chia nhỏ hơn |
| **[[ly-thuyet-hoc-am-nhac-gordon|Gordon]]** | Nốt đen **du**, hai móc đơn **du-de**, bốn móc kép **du-ta-de-ta** | Theo phách; âm tiết **phụ thuộc loại nhịp**: ba móc đơn trong 6/8 là "du-da-di" nhưng trong 7/8 là "du-ba-bi" |
| **Takadimi** (Hoffman, Pelto, White, 1996) | Phách **ta**; chia hai **ta-di**; chia bốn **ta-ka-di-mi**; chia ba **ta-ki-da** | Mỗi âm tiết là một **vị trí** trong phách; dùng được cho cả nhịp đơn và nhịp kép |
| **Đếm số** (McHose – Tibbs và tương tự) | 1 – và – 2 – và… | Gắn trực tiếp với số chỉ nhịp |
Kodály và takadimi đều có thể truy nguồn về hệ thống **French Time-Names** thế kỷ 19; bài của Palkki (JMTP) cho rằng takadimi phát triển dựa trên các nguyên tắc của Kodály.

## Ví dụ: cùng một tiết tấu
Tiết tấu nốt đen – hai móc đơn – nốt đen chấm + móc đơn (bốn phách):
| Kodály | Takadimi |
|---|---|
| ta · ti-ti · taam – ti | ta · ta-di · ta · (giữ) – di |
::rhythm 4/4 q:ta e:ti-e:ti q.:taam e:ti // | Đọc theo Kodály
::rhythm 4/4 q:ta e:ta-e:di q.:ta e:di // | Đọc theo takadimi: nốt ở nửa sau phách luôn là "di"
Với takadimi, âm tiết của một nốt **không đổi theo giá trị nốt** mà theo **vị trí**: nốt rơi vào nửa sau phách luôn là "di".

## Chọn hệ nào?
Chưa có nghiên cứu so sánh trực tiếp đủ mạnh để khẳng định hệ nào tốt hơn. Gợi ý thực tế (ý kiến giáo viên):
- Trẻ nhỏ: âm tiết Kodály đơn giản, dễ nhớ.
- Học trò lớn, nhạc có nhịp kép và chia nhỏ phức tạp: takadimi hoặc đếm số.
- Quan trọng hơn hệ nào là **nhất quán**: cả giáo viên và học trò dùng một hệ trong thời gian đủ dài.
Liên quan: [[truong-do]], [[so-chi-nhip]], [[cam-nhan-phach]], [[ky-am]].
`,
  },
  {
    slug: 'ky-am',
    title: 'Ký âm',
    category: 'musicianship',
    aliases: ['ký âm', 'dictation', 'melodic dictation', 'nghe chép nhạc', 'chép chính tả âm nhạc', 'harmonic dictation', 'rhythmic dictation', 'ký âm giai điệu', 'Karpinski', 'extractive listening'],
    summary: 'Nghe một đoạn nhạc và ghi lại thành nốt nhạc — bài tập trung tâm của môn luyện tai. Theo Karpinski, ký âm gồm bốn khâu: nghe, nhớ ngắn hạn, hiểu, ghi chép; trí nhớ làm việc là nút thắt chính.',
    wiki: 'Ear_training',
    refs: [
      ['Chenette — From research to the classroom: working memory and melodic dictation (JMTP)', 'https://journals.ou.edu/jmtp/article/download/543/1229/1221'],
      ['Nichols & Springer (2025), Frontiers in Psychology — Piano history, aural skills, and working memory predict melodic dictation performance', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12341474/'],
      ['Utah Education Network — Aural skills: chunking and extractive listening', 'https://uen.pressbooks.pub/auralskills/chapter/chunking-and-extractive-listening/'],
      ['Journal of Research in Music Education (2017) — dictation strategies (abstract)', 'https://journals.sagepub.com/doi/10.1177/0022429417728925'],
      ['Journal of Research in Music Education — 1986 study of dictation strategies (abstract)', 'https://journals.sagepub.com/doi/10.2307/3345259'],
    ],
    body: `
**Ký âm** là nghe rồi **viết lại** những gì nghe được: [[tiet-tau|tiết tấu]], [[giai-dieu|giai điệu]], hoặc hoà âm (bè trầm và [[hop-am-ba|hợp âm]]). Đây là phần khó nhất của môn [[luyen-tai]] vì đòi hỏi cùng lúc nghe, nhớ, hiểu và ghi.

## Bốn khâu (Karpinski)
Trong *Aural Skills Acquisition* (2000), Gary Karpinski chia ký âm giai điệu thành bốn khâu:
| Khâu | Việc cần làm | Lỗi thường gặp |
|---|---|---|
| **Nghe** | Tiếp nhận âm thanh, chú ý đúng chỗ | Mất tập trung |
| **Nhớ ngắn hạn** | Giữ [[cau-nhac|đoạn nhạc]] trong đầu | Quên phần đầu khi phần sau đang vang |
| **Hiểu** | Nhận ra bậc, [[quang|quãng]], tiết tấu, chức năng | Nghe được nhưng không gọi tên được |
| **Ghi chép** | Viết thành [[not-nhac|nốt nhạc]] | Biết nhưng viết sai, viết chậm |
Chenette (*Journal of Music Theory Pedagogy*) cho rằng **trí nhớ làm việc** là sợi chỉ nối cả bốn khâu, và các khâu khó tách rời: nhiều học sinh gặp khó ở nhiều khâu cùng lúc. Karpinski mô tả sự **nhiễu**: nhớ phần đầu của giai điệu bị cản trở bởi chính phần sau đang vang lên.

## Hai kỹ thuật vượt giới hạn trí nhớ
- **Nghe chọn lọc** (extractive listening): mỗi lần nghe chỉ tập trung nhớ **một phần** (ví dụ 4 nốt đầu, hoặc chỉ bè trầm).
- **Gom nhóm** ([[phuong-phap-luyen-tap|chunking]]): nhớ nốt theo **nhóm có nghĩa** — một [[luyen-hop-am-rai|hợp âm rải]], một đoạn [[am-giai|âm giai]], một [[motif|motif]] — thay vì từng nốt rời. Có thể luyện bằng cách **nói ra** giai điệu: "đi lên theo âm giai từ bậc 1 tới bậc 5, rồi nhảy xuống bậc 3".

## Nghiên cứu nói gì?
- Một nghiên cứu năm 1986 (136 sinh viên lý thuyết) so sánh sáu chiến lược (viết ngay khi nghe, tập trung nghe trước rồi mới viết, hát trước khi viết…) **không tìm thấy khác biệt có ý nghĩa** giữa các chiến lược.
- Beckett (1997): khi được hướng dẫn **chú ý tiết tấu trước**, học viên ghi tiết tấu chính xác hơn.
- Nichols và Springer (2025): **kinh nghiệm học piano**, [[lo-trinh-luyen-tai-su-pham|kỹ năng nghe]] và **trí nhớ làm việc** dự báo kết quả ký âm giai điệu.
- Một nghiên cứu năm 2017 khuyên giáo viên **giới thiệu nhiều chiến lược** và giúp học viên chọn chiến lược phù hợp với mình.

## Trình tự luyện (gợi ý dạy học)
1. **Tiết tấu** một bè, 2 ô → 4 ô (dùng [[am-tiet-nhip]]).
2. **Giai điệu** ngắn trong [[am-giai-ngu-cung|âm giai ngũ cung]] hoặc 5 nốt đầu, bắt đầu từ bậc 1.
3. Giai điệu 4–8 ô, có nhảy quãng trong hợp âm chủ và át.
4. **Hai bè**: bè trầm và giai điệu.
5. **Hoà âm**: nghe bè trầm, rồi gọi tên chức năng (I, IV, V…) — xem [[phan-tich-hoa-am]].
Trước khi viết, luôn **hát lại** đoạn vừa nghe: nếu chưa hát lại được, nghĩa là chưa nhớ được (xem [[xuong-am]]).
`,
  },
  {
    slug: 'ly-thuyet-hoc-am-nhac-gordon',
    title: 'Lý thuyết học âm nhạc của Gordon',
    category: 'musicianship',
    aliases: ['Gordon', 'Edwin Gordon', 'Music Learning Theory', 'MLT', 'audiation', 'nội thính', 'học theo trình tự', 'whole-part-whole'],
    summary: 'Lý thuyết của Edwin Gordon (1927–2015) xoay quanh khái niệm "audiation" — nghe và hiểu âm nhạc khi âm thanh không có mặt — và một trình tự học từ bắt chước bằng tai đến đọc ký hiệu và suy luận.',
    wiki: 'Gordon_music_learning_theory',
    refs: [
      ['Wikipedia — Gordon music learning theory', 'https://en.wikipedia.org/wiki/Gordon_music_learning_theory'],
      ['College Music Symposium — Music learning theory in collegiate music education', 'https://symposium.music.org/volume-31/forum-essays-1752877059/music-learning-theory-in-collegiate-music-education'],
      ['GIA Publications — Gordon, Preparatory Audiation, Audiation, and Music Learning Theory', 'https://giamusic.com/resource/preparatory-audiation-audiation-and-music-learning-theory-book-g5726'],
      ['Reference.org — Audiation', 'https://reference.org/facts/Audiation/D2Pt6PD9'],
    ],
    body: `
**Edwin E. Gordon** (1927–2015), nhà nghiên cứu giáo dục âm nhạc người Mỹ, xây dựng **Lý thuyết học âm nhạc** (Music Learning Theory) — một mô tả về **cách** con người học âm nhạc, từ đó suy ra **trình tự** dạy.

## Audiation — "nghe trong đầu có hiểu"
**Audiation** là khả năng **nghe và hiểu** âm nhạc khi âm thanh **không vang lên thật** — giống như ta "nghe" một bài hát trong đầu, hoặc hiểu câu nói khi đọc thầm. Gordon phân biệt:
- **Bắt chước**: lặp lại được âm thanh mà **chưa chắc hiểu** nó.
- **Audiation**: âm thanh mang **ý nghĩa** — biết đâu là [[bac-am-giai|chủ âm]], đâu là [[so-chi-nhip|phách mạnh]], nhận ra mẫu [[giai-dieu|giai điệu]] và [[tiet-tau|tiết tấu]].
Gordon về sau chia audiation thành nhiều **loại** và **giai đoạn**; các [[an-ban-urtext|ấn bản]] sách của ông đưa ra con số khác nhau (ví dụ sáu giai đoạn, hoặc năm giai đoạn và tám loại), nên khi trích dẫn cần ghi rõ ấn bản.

## Các giai đoạn audiation (theo bản tóm tắt sáu giai đoạn)
1. Giữ lại âm thanh trong khoảnh khắc.
2. Bắt chước và audiate các **mẫu [[cao-do|cao độ]]** và **mẫu tiết tấu**; nhận ra **chủ âm** và các **phách lớn**.
3. Xác lập **giọng** và **loại nhịp**.
4. Giữ trong đầu các mẫu đã được tổ chức.
5. Nhớ lại các mẫu đó khi gặp trong **bản nhạc khác**.
6. **Đoán trước** các mẫu sắp đến (xem [[ky-vong-am-nhac]]).

## Trình tự học
Gordon chia học thành **học phân biệt** và **học suy luận**. Học phân biệt đi qua các bậc:
| Bậc | Nội dung |
|---|---|
| **Nghe – hát** (aural/oral) | Bắt chước các mẫu cao độ, tiết tấu bằng âm tiết trung tính |
| **Gắn tên gọi** | Gắn mẫu với tên gọi (âm tiết [[xuong-am|xướng âm]], âm tiết nhịp — xem [[am-tiet-nhip]]) |
| **Tổng hợp từng phần** | Nhận ra giọng, nhịp của một chuỗi mẫu |
| **Gắn ký hiệu** | Đọc và viết các mẫu đã biết |
| **Tổng hợp hoàn chỉnh** | Đọc, viết và hiểu cả chuỗi mẫu trong ngữ cảnh |
Ở bậc **suy luận**, người học dùng những gì đã biết để hiểu các mẫu **mới**: nghe ra, [[ngau-hung-ung-tac|ứng tác]], sáng tác.

Chương trình thường đi theo vòng **tổng thể – bộ phận – tổng thể**: nghe cả bài, tách ra các mẫu để học, rồi trở về bài với hiểu biết mới.

## Gordon và các phương pháp khác
Giống [[phuong-phap-giao-duc-am-nhac|Kodály và Orff]], Gordon đặt **âm thanh trước ký hiệu**. Điểm riêng là tập trung vào **mẫu** (patterns) như "từ vựng" của âm nhạc, và vào **audiation** như mục tiêu chung của mọi hoạt động.

## Với người dạy piano
- Trước khi cho học trò đọc một bài mới, cho học trò **hát** giai điệu và **đọc tiết tấu** bằng âm tiết.
- Dạy các **mẫu** hay gặp ([[luyen-hop-am-rai|hợp âm rải]] I – V, các công thức kết) như những đơn vị nghe được, không chỉ là nốt trên giấy.
- Luyện "nghe trước" khi chơi: hình dung âm thanh rồi mới bấm phím (xem [[tap-trong-dau]]).
`,
  },
  {
    slug: 'phuong-phap-giao-duc-am-nhac',
    title: 'Các phương pháp giáo dục âm nhạc',
    category: 'musicianship',
    aliases: ['Dalcroze', 'Kodály method', 'phương pháp Kodály', 'Orff Schulwerk', 'Suzuki', 'phương pháp Suzuki', 'eurhythmics', 'sư phạm âm nhạc'],
    summary: 'Bốn phương pháp lớn: Dalcroze (vận động cơ thể theo nhịp), Kodály (hát, dân ca, Đô di động), Orff (kết hợp nhạc – vận động – lời nói – nhạc cụ gõ) và Suzuki (học nhạc như học tiếng mẹ đẻ).',
    wiki: 'Music_education',
    refs: [
      ['NAfME — Kodály, Orff, and Dalcroze: a who\'s who and what\'s what', 'https://nafme.org/blog/kodaly-orff-and-dalcroze-a-whos-who-and-whats-what/'],
      ['Boughen — Four approaches to music education in Australia (thesis record)', 'https://www.scpp.esrc.unimelb.edu.au/bib/P00000546.htm'],
      ['Wikipedia — Kodály method', 'https://en.wikipedia.org/wiki/Kod%C3%A1ly_method'],
      ['ISME — Happy 200th birthday to the developer of Tonic Sol-fa, John Curwen', 'https://www.isme.org/news/happy-200th-birthday-developer-tonic-sol-fa-john-curwen'],
      ['Routledge Encyclopedia of Modernism — Jaques-Dalcroze, Émile', 'https://www.rem.routledge.com/articles/jaques-dalcroze-emile-1865-1950'],
      ['Dalcroze Society of America — Émile Jaques-Dalcroze', 'https://dalcrozeusa.org/people/emile-jaques-dalcroze/'],
      ['Comeau — Suzuki method and the mother-tongue approach (University of Ottawa)', 'https://piano.uottawa.ca/?p=481'],
      ['Texas Tech — A reading course for Suzuki piano students', 'https://tdl-ir.tdl.org/handle/2346/15423'],
    ],
    body: `
| Phương pháp | Người sáng lập | Trọng tâm |
|---|---|---|
| **Dalcroze** | Émile Jaques-Dalcroze | Vận động cơ thể theo [[tiet-tau|nhịp điệu]] (eurhythmics), [[xuong-am]], [[ngau-hung-piano|ngẫu hứng]] |
| **Kodály** | [[Kodály|Zoltán Kodály]] | Hát là nền tảng; dân ca; [[xuong-am|Đô di động]] và ký hiệu tay; [[doc-not-nhanh|đọc nhạc]] |
| **Orff Schulwerk** | [[Orff|Carl Orff]] cùng Gunild Keetman | Kết [[hop-am-ba|hợp âm]] nhạc, vận động, lời nói, kịch; nhạc cụ gõ có thanh (xylophone, metallophone, glockenspiel); ngẫu hứng nhiều hơn Kodály |
| **Suzuki** | Shinichi Suzuki | Học nhạc như học **tiếng mẹ đẻ**: bắt đầu rất sớm, nghe nhiều, học thuộc trước, **phụ huynh** tham gia |

## Lịch sử từng phương pháp
| Phương pháp | Mốc chính |
|---|---|
| **Dalcroze** | Émile Jaques-Dalcroze dạy hoà âm ở Nhạc viện Geneva (khoảng 1892–1910); nhận thấy học trò **không nghe được** hoà âm mình viết, ông phát triển các trò chơi [[luyen-tai|luyện tai]] và vận động, đặt tên **eurhythmics**. Dạy ở Hellerau (gần Dresden) khoảng 1910–1914; thành lập **Institut Jaques-Dalcroze** ở Geneva năm 1915 |
| **Kodály** | Kodály bắt đầu quan tâm giáo dục âm nhạc cho trẻ từ khoảng **1925**; nhà nước Hungary đưa ý tưởng của ông vào trường phổ thông từ **1945**; trường tiểu học âm nhạc đầu tiên (học nhạc hằng ngày) mở năm **1950**; giới thiệu với quốc tế tại hội nghị ISME ở Vienna năm **1958**; UNESCO ghi danh là di sản văn hoá phi vật thể năm **2016** |
| **Ký hiệu tay và Đô di động** | Lấy từ hệ **[[bac-am-giai|Tonic]] Sol-fa** của John Curwen (1816–1880) — vốn dựa trên hệ xướng âm di động của **Sarah Glover** — được Kodály tiếp nhận vào nửa đầu [[thoi-ky-the-ky-20|thế kỷ 20]] (xem [[xuong-am]]) |
| **Orff Schulwerk** | Carl Orff cùng **Gunild Keetman** phát triển từ thập niên **1920** |
| **Suzuki** | Bắt đầu ở Nhật từ thập niên **1930** dưới tên "Phương pháp tiếng mẹ đẻ" / "Giáo dục tài năng"; gây chú ý ở Mỹ qua một bộ phim năm 1958 và chuyến lưu diễn năm 1964 của học trò nhỏ |

## Tranh luận về Suzuki
- Suzuki **hoãn việc đọc nốt** cho đến khi học trò đã có kỹ năng chơi khá cao; khi nào và bằng cách nào đưa việc đọc vào vẫn là câu hỏi mở.
- **Gilles Comeau** (Đại học Ottawa) phân tích rằng phép so sánh "học nhạc như học tiếng mẹ đẻ" **có thể gây hiểu lầm** với việc học nhạc cụ, và nêu những lý do cần thận trọng; những người ủng hộ thì coi phép so sánh này là thế mạnh của phương pháp.

Các phương pháp khác: [[ly-thuyet-hoc-am-nhac-gordon]] (Gordon), cùng lộ trình cả mục ở [[lo-trinh-luyen-tai-su-pham]].

## Điểm chung
Orff và Kodály đều coi trọng **âm thanh trước ký hiệu**: biết hát và chơi trước, rồi mới học đọc nốt như bước phát triển tự nhiên. Một luận văn so sánh bốn phương pháp ở Úc kết luận rằng trong chương trình âm nhạc toàn diện, **cảm nhận nên đi trước hiểu biết lý thuyết**.

## Ứng dụng khi dạy piano
- Cho trẻ vỗ tay, đi bước theo nhịp trước khi đọc [[truong-do]] (tinh thần Dalcroze).
- Hát [[giai-dieu|giai điệu]] trước khi chơi; dùng [[am-giai-ngu-cung|âm giai ngũ cung]] và bài dân ca quen thuộc (Kodály, Orff).
- Nghe bản thu bài sắp học và mời phụ huynh cùng tham gia buổi tập (Suzuki).

Bằng chứng so sánh trực tiếp hiệu quả giữa các phương pháp còn hạn chế. Gợi ý theo lứa tuổi: [[day-tre-em]], [[day-nguoi-lon]].
`,
  },
  {
    slug: 'cach-day-doc-not',
    title: 'Các cách dạy đọc nốt cho người mới',
    category: 'musicianship',
    aliases: ['dạy đọc nốt', 'reading approaches', 'phương pháp đọc nốt', 'Middle C approach', 'vị trí Đô giữa', 'multi-key', 'sách phương pháp piano'],
    summary: 'Ba cách tiếp cận chính trong các giáo trình piano cho người mới: vị trí Đô giữa, đọc theo quãng/khuôn hình (kèm nốt mốc) và đa giọng. Một nghiên cứu so sánh năm 2019 cho kết quả trái với quan niệm phổ biến.',
    refs: [
      ['DiCienzo (2019), University of Ottawa — A comparison of the Middle C and the mixed intervallic reading approaches', 'https://ruor.uottawa.ca/handle/10393/39944'],
      ['University of Ottawa Piano Pedagogy Research Lab — cognitive modelling of reading methods (PDF)', 'https://piano.uottawa.ca/wp-content/uploads/2016/04/Links/archives/Cognitive_modelling_oct242013.pdf'],
      ['Musicnotes — 5 ways to learn how to read music at the piano', 'https://www.musicnotes.com/blog/5-ways-to-learn-how-to-read-music-at-the-piano'],
      ['Melanie Spanswick — Music and sight reading: Rami Bar-Niv', 'https://melaniespanswick.com/2025/02/16/music-and-sight-reading-rami-bar-niv/'],
    ],
    body: `
Hầu hết người mới học piano bắt đầu bằng một **sách phương pháp** (method book) — bảng so sánh các sách: [[giao-trinh-piano-nhap-mon]]. Các sách này khác nhau chủ yếu ở **cách dạy đọc nốt**.

## Ba cách tiếp cận
| Cách | Ý tưởng | Điểm mạnh | Điểm yếu thường được nêu |
|---|---|---|---|
| **Vị trí Đô giữa** | Hai ngón cái đặt trên [[ban-phim|Đô giữa]], các ngón khác trên các phím liền kề; nốt được gắn với ngón tay và vị trí cố định | Mốc định hướng rõ ràng trên khuông và trên đàn | Dễ phụ thuộc "ngón nào bấm nốt nào", khó khi rời vị trí |
| **Đọc theo quãng / khuôn hình** (intervallic) | Đọc **khoảng cách** và **hướng**: bước ([[quang|quãng]] 2), nhảy (quãng 3), lặp lại; kết hợp vài **nốt mốc** | Gần với cách người đọc thạo nhìn bản nhạc (xem [[doc-not-nhanh]], [[thi-tau]]) | Cần thời gian để nhận ra tên từng nốt |
| **Đa giọng** (multi-key) | Học sớm các vị trí năm ngón ở nhiều giọng | Quen với nhiều giọng, [[hop-am-ba|hợp âm]], [[dich-giong|dịch giọng]] sớm | Khối lượng khái niệm lớn với người mới |
**Nốt mốc** (landmark): chỉ thuộc lòng vài nốt quan trọng (như Đô giữa, Sol [[khoa-sol|khoá Sol]], Fa [[khoa-fa|khoá Fa]]); các nốt khác được tìm bằng **bước hoặc nhảy** từ nốt mốc. Đây là cầu nối giữa cách thứ nhất và thứ hai.

## Nghiên cứu: DiCienzo (Đại học Ottawa, 2019)
- So sánh học trò **7–11 tuổi** học theo cách **Đô giữa** và theo cách **quãng – hỗn hợp**, kiểm tra nhận phím, gọi tên nốt ở hai khoá, nhận nốt đơn và quãng, nhận khuôn hình, và thị tấu.
- Giả thuyết: nhóm Đô giữa giỏi gọi tên nốt, nhóm quãng giỏi quãng, khuôn hình và thị tấu.
- Kết quả: nhóm **Đô giữa làm tốt hơn ở hầu hết các bài kiểm tra**, trừ nhận phím và khuôn 3 nốt ở vị trí Sol. Tác giả nhận xét điều này **đáng ngạc nhiên**, vì cách Đô giữa thường bị phê bình trong sư phạm hiện nay.
- Lưu ý: đây là **một luận văn**, quy mô và điều kiện cụ thể cần đọc trong bản đầy đủ; chưa đủ để kết luận chung.

## Gợi ý khi dạy
Những gợi ý sau là tổng hợp kinh nghiệm, không phải kết luận nghiên cứu:
- Dù dùng giáo trình nào, hãy dạy **cả tên nốt lẫn quãng**: tên nốt để định vị, quãng để đọc nhanh.
- Sớm cho học trò **rời vị trí cố định** (chơi cùng [[giai-dieu|giai điệu]] ở chỗ khác trên đàn) để tránh phụ thuộc ngón tay.
- Kết hợp **nghe – hát trước khi đọc** (xem [[ly-thuyet-hoc-am-nhac-gordon]], [[phuong-phap-giao-duc-am-nhac]]).
- Kiểm tra thường xuyên bằng [[thi-tau|thị tấu]] những bài **dễ hơn** trình độ đang học.
Liên quan: [[not-nhac]], [[khuong-nhac]], [[day-tre-em]].
`,
  },
  {
    slug: 'giang-day-hieu-qua',
    title: 'Giảng dạy hiệu quả: nghiên cứu nói gì',
    category: 'musicianship',
    aliases: ['giảng dạy hiệu quả', 'effective teaching', 'dạy học hiệu quả', 'phản hồi', 'feedback', 'động lực học nhạc', 'motivation', 'tự quyết', 'self-determination theory', 'Duke', 'McPherson', 'buổi học piano'],
    summary: 'Những gì nghiên cứu cho biết về buổi học nhạc hiệu quả: quan sát các giáo viên bậc thầy (Duke & Simmons, 2006), vai trò của cam kết lâu dài ở trẻ (McPherson), và thuyết tự quyết về động lực — kèm các gợi ý ứng dụng.',
    refs: [
      ['Duke, Simmons & Cash (2009) — JRME 56(4): 310–321', 'https://www.jstor.org/stable/40204936'],
      ['Princeton — Becoming an expert takes more than practice (Macnamara et al. 2014)', 'https://www.princeton.edu/news/2014/07/03/becoming-expert-takes-more-practice'],
      ['Macnamara & Maitra (2019) — Royal Society Open Science', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6731745/'],
      ['Hattie & Timperley (2007) — The Power of Feedback', 'https://www.uky.edu/~gmswan3/575/Hattie_Timperly_2007.pdf'],
      ['McPherson & Blackwell (2024) — phản hồi trong buổi học nhạc', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12602492/'],
      ['Kluger & DeNisi (1996), dẫn trong PMC9251491', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9251491/'],
      ['University of Illinois — Parents’ role (McPherson)', 'https://news.illinois.edu/parents-role-key-in-child-becoming-accomplished-musician-scholar-says/'],
      ['UT Austin Center for Music Learning — The nature of expertise (Duke & Simmons, 2006)', 'https://cml.music.utexas.edu/online-resources/the-nature-of-expertise'],
      ['University of New Brunswick — bibliographic record: Duke & Simmons (2006), Bulletin of the CRME 170', 'https://narrativestudies.lib.unb.ca/bibcite/reference/22712'],
      ['Wikipedia — Robert Duke (music scholar)', 'https://en.wikipedia.org/wiki/Robert_Duke_(music_scholar)'],
      ['Evans (2015), Psychology of Music — Self-determination theory: an approach to motivation in music education (PDF)', 'https://selfdeterminationtheory.org/wp-content/uploads/2021/05/2015_Evans_SDT_MusicEdu.pdf'],
      ["Bonneville-Roussy & Evans (2024) — music students' practice and teachers' styles (PDF)", 'https://selfdeterminationtheory.org/wp-content/uploads/2024/12/2024_Bonneville-RoussyEvans_MusicStudents.pdf'],
      ['Oxford Academic — McPherson (ed.), The Child as Musician', 'https://academic.oup.com/book/2564/chapter/142899152'],
    ],
    body: `
## Quan sát các giáo viên bậc thầy (Duke & Simmons, 2006)
**Robert Duke** và **Amy Simmons** (Đại học Texas ở Austin) xem khoảng **25 giờ** video các buổi học riêng của ba giáo viên nổi tiếng — nghệ sĩ oboe Richard Killmer, nghệ sĩ viola Donald McInnes và nghệ sĩ piano **Nelita True** — để tìm những điểm **chung** của cả ba. Họ mô tả **19 yếu tố**, xếp vào ba nhóm:
| Nhóm | Câu hỏi mà nhóm yếu tố trả lời |
|---|---|
| **Mục tiêu và kỳ vọng** | Giáo viên đặt chuẩn âm thanh và mục tiêu cho học trò thế nào? |
| **Tạo ra thay đổi** | Giáo viên làm gì để cách chơi của học trò **thực sự thay đổi** ngay trong buổi học? |
| **Truyền đạt thông tin** | Giáo viên giải thích, làm mẫu, phản hồi ra sao? |
Danh sách đầy đủ 19 yếu tố và video minh hoạ có trên trang của Trung tâm Học Âm nhạc (UT Austin). Lưu ý giới hạn: đây là quan sát **ba giáo viên** ở trình độ cao, không phải thí nghiệm có nhóm đối chứng.

## Cam kết và động lực ở trẻ (McPherson)
**Gary McPherson** theo dõi lâu dài một nhóm trẻ bắt đầu học nhạc cụ, hỏi từ đầu rằng các em **dự định chơi bao lâu**. Theo các bản tóm tắt nghiên cứu, **mức cam kết lâu dài** mà trẻ tự nêu ra liên quan chặt chẽ đến tiến bộ sau này — kể cả khi lượng luyện tập như nhau — hơn là các chỉ số như trí thông minh hay khả năng nghe. Con số cụ thể hay được trích (ví dụ "hơn 400%") đến từ sách phổ thông dẫn lại, nên cần đối chiếu công bố gốc trước khi dùng.

## Thuyết tự quyết
Thuyết tự quyết (self-determination theory) cho rằng động lực bền vững khi ba **nhu cầu tâm lý cơ bản** được đáp ứng:
| Nhu cầu | Trong buổi học đàn |
|---|---|
| **Năng lực** | Học trò cảm thấy mình **đang làm được**, tiến bộ thấy rõ |
| **Tự chủ** | Học trò có **tiếng nói**: chọn bài, chọn cách tập, hiểu vì sao |
| **Gắn kết** | Quan hệ tốt với giáo viên, gia đình, bạn cùng học |
Paul Evans (2015) tổng hợp cách áp dụng thuyết này cho giáo dục âm nhạc. Một nghiên cứu năm 2024 (213 sinh viên âm nhạc) xem xét mối liên hệ giữa **phong cách giảng dạy** của giáo viên với **thời lượng và chất lượng** luyện tập của sinh viên.

## Luyện tập: không phải bao nhiêu, mà là thế nào (Duke, Simmons & Cash, 2009)
17 sinh viên piano trình độ cao tập một đoạn **3 ô** của một [[hinh-thuc-concerto|concerto]]; hôm sau được kiểm tra lại.
- **Tổng thời gian tập** và **số lần chơi lại** **không** dự đoán được kết quả hôm sau.
- Những người giỏi nhất: **xác định chính xác chỗ sai**, **sửa ngay** khi lỗi vừa xuất hiện, và **chậm lại** để lặp lại chính xác trước khi tăng tốc.
- Giới hạn: nghiên cứu tương quan, một buổi tập, nhóm nhỏ.
Ứng dụng trực tiếp: [[phuong-phap-luyen-tap]], [[kiem-soat-toc-do]].

## "10.000 giờ"? (Ericsson và các nghiên cứu sau)
| Nghiên cứu | Kết quả |
|---|---|
| Ericsson, Krampe & Tesch-Römer (1993), nghệ sĩ violin ở Berlin | Nhóm "giỏi nhất" trung bình hơn **10.000 giờ** tập đến 20 tuổi; tác giả cho rằng **luyện tập có chủ đích** (deliberate practice) giải thích phần lớn khác biệt |
| Macnamara, Hambrick & Oswald (2014), phân tích tổng hợp | Luyện tập có chủ đích giải thích khoảng **21%** khác biệt thành tích trong âm nhạc (26% trò chơi, 18% thể thao) |
| Macnamara & Maitra (2019), lặp lại nghiên cứu 1993 với 39 người chơi violin | Luyện tập **không** phân biệt được nhóm "giỏi nhất" với nhóm "giỏi"; hiệu ứng nhỏ hơn nghiên cứu gốc |
Kết luận thận trọng: tập **nhiều và đúng cách** rất quan trọng, nhưng không phải yếu tố duy nhất; "10.000 giờ" không phải một ngưỡng thần kỳ.

## Phản hồi
- Hattie & Timperley (2007): phản hồi là một trong những tác động mạnh nhất tới việc học — nhưng có thể **tích cực hoặc tiêu cực**. Mô hình ba câu hỏi: **Đích là gì?** (feed up) – **Đang ở đâu?** (feed back) – **Bước tiếp theo?** (feed forward).
- Kluger & DeNisi (1996): khoảng **một phần ba** các can thiệp bằng phản hồi lại **làm giảm** thành tích.
- McPherson & Blackwell (2024) phân tích 18 buổi học nhạc: **83%** lời nhận xét là "đang ở đâu", chỉ **0,4%** là "đích là gì"; 85% nói về **nhiệm vụ trước mắt**, chỉ khoảng 5,5% giúp học trò **tự điều chỉnh việc tập** — tức là buổi học thường dạy rất ít về **cách tự tập**.
::form Đích_là_gì? Đang_ở_đâu? Bước_tiếp_theo? | Ba câu hỏi phản hồi (Hattie & Timperley, 2007)

## Vai trò của cha mẹ (McPherson & Davidson)
Theo dõi khoảng 157 trẻ Úc bắt đầu học nhạc từ 1997: **sự hỗ trợ sớm của cha mẹ, giảm dần theo thời gian** đi kèm thành công; ép buộc mà thiếu đồng hành từ đầu đi kèm việc bỏ học.

## Gợi ý ứng dụng
Tổng hợp từ các nguồn trên; đây là gợi ý, không phải công thức:
- **Đặt mục tiêu âm thanh rõ ràng** cho mỗi đoạn: học trò cần biết "chơi hay" nghĩa là gì trước khi tập.
- **Tạo thay đổi ngay trong buổi học**: chọn một vấn đề, sửa đến khi học trò làm được nhiều lần liên tiếp, thay vì nêu nhiều lỗi một lúc.
- **Phản hồi cụ thể** về âm thanh và động tác, gắn với mục tiêu — không chỉ "tốt" hay "chưa được".
- **Cho học trò quyền chọn** (bài, thứ tự tập) để nuôi tự chủ; giúp học trò **thấy tiến bộ** để nuôi cảm giác năng lực.
- Hỏi và lắng nghe về **dự định lâu dài** của học trò với âm nhạc.
Liên quan: [[phuong-phap-luyen-tap]], [[day-tre-em]], [[day-nguoi-lon]], [[hoi-hop-bieu-dien]].
`,
  },
  {
    slug: 'thi-cap-do',
    title: 'Hệ thống thi cấp độ piano',
    category: 'musicianship',
    aliases: ['ABRSM', 'thi ABRSM', 'grade piano', 'thi grade', 'Trinity', 'RCM', 'chứng chỉ piano', 'kỳ thi piano', 'music exam', 'thi cấp độ'],
    summary: 'Các kỳ thi như ABRSM chia trình độ thành Initial và Grade 1–8; mỗi bài thi gồm bài chuẩn bị, âm giai – hợp âm rải, thị tấu và thi nghe.',
    wiki: 'Associated_Board_of_the_Royal_Schools_of_Music',
    refs: [
      ['ABRSM — Piano syllabus 2025 & 2026 (PDF)', 'https://caswells-strings.co.uk/wp-content/uploads/2025/07/ABRSM-Piano-syllabus-2025-2026.pdf'],
      ['ABRSM exams guide (London piano teacher)', 'https://www.piano-composer-teacher-london.co.uk/?p=14642'],
    ],
    body: `
**ABRSM** (Associated Board of the Royal Schools of Music, Anh) là hệ thống thi piano theo cấp độ được dùng ở nhiều nước; các hệ thống khác gồm **Trinity College London** (Anh) và **RCM** (Canada). Phần dưới mô tả ABRSM.

## Các cấp
**Initial Grade** → **Grade 1 đến Grade 8**.

## Cấu trúc bài thi và thang điểm
| Phần | Điểm |
|---|---|
| 3 bài chuẩn bị (mỗi bài 30) | 90 |
| [[am-giai|Âm giai]] và hợp âm rải | 21 |
| Thị tấu | 21 |
| Thi nghe | 18 |
| **Tổng** | **150** |

**Đạt**: 100 · **Khá (Merit)**: 120 · **Giỏi (Distinction)**: 130.

## Từng phần luyện gì
- **Âm giai và hợp âm rải**: [[luyen-am-giai]], [[luyen-hop-am-rai]]; Grade 1 bắt đầu với âm giai Đô trưởng và hợp âm rải đơn giản.
- **Thị tấu**: chơi một bản ngắn chưa từng thấy sau thời gian xem ngắn — xem [[thi-tau]].
- **Thi nghe**: vỗ lại [[tiet-tau|tiết tấu]], nhận ra [[giai-dieu|giai điệu]] đi lên hay xuống… — xem [[luyen-tai]].
- **Bài chuẩn bị**: thường gồm các phong cách khác nhau — xem [[cac-thoi-ky]], [[dien-dat-cau-nhac]] và gợi ý tác phẩm theo cấp độ ở [[lo-trinh-tac-pham]].

## Lưu ý
Bảng điểm trên lấy từ hướng dẫn của giáo viên, khớp tổng 150 điểm ở nhiều nguồn; yêu cầu chi tiết (đặc biệt Grade 5–8 và các điều kiện kèm theo) cần đối chiếu **syllabus chính thức mới nhất của ABRSM**, vì nội dung thay đổi theo từng chu kỳ.
`,
  },
  {
    slug: 'lo-trinh-tac-pham',
    title: 'Lộ trình tác phẩm theo cấp độ',
    category: 'musicianship',
    aliases: ['tác phẩm theo cấp độ', 'repertoire', 'chọn bài', 'bài cho người mới', 'Burgmüller Op. 100', 'Anna Magdalena', 'Album for the Young', 'Inventions'],
    summary: 'Các tuyển tập kinh điển xếp theo độ khó: sách Anna Magdalena → Burgmüller Op. 100 → Album cho tuổi trẻ (Schumann, Tchaikovsky) → sonatina Clementi → Inventions của Bach.',
    refs: [
      ['University of Michigan Library — Finding elementary and intermediate piano music', 'https://guides.lib.umich.edu/easypiano/suggrep'],
      ['Kjos — Grade levels (PDF)', 'https://media.kjos.com/kjos/global.mt.lldns.net/kjos/pdf/GP462_GradeLevels.pdf'],
      ['Pianist Magazine — Classic piano repertoire for intermediate level pianists', 'https://www.pianistmagazine.com/blogs/classic-piano-repertoire-for-intermediate-level-pianists'],
      ['Piano Library — Schumann: Album für die Jugend Op. 68', 'https://www.pianolibrary.org/composers/schumann/album-fuer-die-jugend-68/'],
    ],
    body: `
Mỗi nhà xuất bản và hệ thống thi có thang độ khó riêng (thang Kjos không trùng với Grade của [[thi-cap-do|ABRSM]]), nên bảng dưới chỉ là hướng dẫn tương đối.

| Giai đoạn | Tuyển tập | Ghi chú từ nguồn |
|---|---|---|
| Sơ cấp – trung cấp sớm | **Sách nhỏ cho Anna Magdalena Bach** | Tuyển tập bài sơ cấp và trung cấp |
| Trung cấp sớm (khoảng Grade 2–5) | [[Burgmüller]] — **25 bài luyện tiến bộ Op. 100** | Khoảng Grade 2–5; các bài 9, 15, 20, 21 hợp Grade 4–5 |
| Trung cấp sớm → trung cấp cao | [[Schumann]] — **[[phan-tich-wilder-reiter|Album cho tuổi trẻ]] Op. 68** | Tập 1 (số 1–18) cho trẻ nhỏ, tập 2 (19–43) khó hơn; [[an-ban-urtext|ấn bản]] ABRSM ghi Grade 4–7 |
| Trung cấp → trung cấp cao | [[Tchaikovsky]] — **Album cho thiếu nhi Op. 39** | Thường được xếp cao hơn Op. 68 một bậc |
| Trung cấp | [[Clementi]] — **[[sonata-the-loai|Sonatina]] Op. 36**; [[wolfgang-amadeus-mozart|Mozart]] K. 545 ([[phan-tich-sonata-k545|phân tích]]) | Bước tiếp theo phổ biến sau Burgmüller (xem [[hinh-thuc-sonata]]) |
| Trung cấp | [[Heller]] — **Études Op. 45, 46** | Op. 46 số 1–5 là điểm bắt đầu hay dùng |
| Trung cấp (khoảng Grade 4–6 trở lên) | [[Bach]] — **Inventions 2 bè** | Bắt đầu với số 1 (Đô trưởng), rồi số 8 (Fa trưởng); số 6 khó hơn |
| Trung cấp cao | Bach — **Sinfonia (Inventions 3 bè)** | Số 10 và 14 được gợi ý |

## Vì sao những tuyển tập này?
- Mỗi tuyển tập gắn với một kỹ năng: Bach luyện [[doi-am]] và [[phoi-hop-hai-tay|hai tay độc lập]]; Burgmüller và Schumann luyện [[dien-dat-cau-nhac|diễn đạt]] và tính chất (mỗi bài có tên gợi hình ảnh); sonatina luyện [[hinh-thuc-sonata]] và [[luyen-am-giai|âm giai]].
- Kết hợp với bài luyện ngón của [[Czerny]] (xem [[bai-tap-ngon]]).

Thông tin về các nhà soạn nhạc: [[thoi-ky-baroque]], [[thoi-ky-co-dien]], [[thoi-ky-lang-man]].
`,
  },
  {
    slug: 'day-tre-em',
    title: 'Dạy piano cho trẻ em',
    category: 'musicianship',
    aliases: ['dạy trẻ em', 'trẻ em học piano', 'tuổi bắt đầu học đàn', 'mấy tuổi học piano', 'dạy trẻ nhỏ'],
    summary: 'Không có độ tuổi "chuẩn" được nghiên cứu xác nhận; nhiều giáo viên khuyên bắt đầu khoảng 6–8 tuổi, nhưng mức độ sẵn sàng của từng trẻ quan trọng hơn tuổi.',
    refs: [
      ['Intersections (érudit) — music education paper on starting age (PDF)', 'https://www.erudit.org/en/revue/is/2015/v35/n1/1038943ar.pdf'],
      ['School of Rock — What is the best age to learn piano?', 'https://www.schoolofrock.com/resources/keyboard/what-is-the-best-age-to-learn-piano'],
    ],
    body: `
## Bắt đầu từ mấy tuổi?
- Chưa có **đồng thuận khoa học** về một độ tuổi tốt nhất.
- Một bài viết giáo dục âm nhạc cho biết: có người ủng hộ bắt đầu sớm ở 4–5 tuổi, có người muốn chờ, nhưng **đa số giáo viên** vẫn cho rằng 7–8 tuổi là tuổi tốt nhất để bắt đầu học đàn **cá nhân** — đây là ý kiến giáo viên, chưa phải kết quả đo lường.
- Các trường nhạc thường gợi ý **6–9 tuổi**. Trẻ 4–5 tuổi tỏ ra thích thú có thể bắt đầu bằng các buổi làm quen **ngắn, mang tính trò chơi**.

## Dấu hiệu sẵn sàng
Thường được đánh giá **kết hợp** nhiều yếu tố hơn là chỉ tuổi:
- **Vận động tinh**: phối hợp và độc lập các ngón, kích thước bàn tay.
- **Khả năng tập trung**, ngồi yên, nghe và làm theo hướng dẫn.
- **Điều hoà cảm xúc** và khả năng hiểu khái niệm trừu tượng (ví dụ ký hiệu nốt).

## Gợi ý khi dạy trẻ nhỏ
Phần này vận dụng các bài khác trong thư viện:
- **Âm thanh trước ký hiệu**: hát, vỗ tay, [[cam-nhan-phach|vận động theo nhịp]] trước khi đọc nốt (tinh thần [[zoltan-kodaly|Kodály]], [[carl-orff|Orff]], Dalcroze — xem [[phuong-phap-giao-duc-am-nhac]]).
- Buổi học **ngắn**, chia nhiều hoạt động; chơi trên phím đen ([[am-giai-ngu-cung|ngũ cung]]) để trẻ ngẫu hứng sớm ([[ngau-hung-piano]]).
- Đọc nốt bằng **nốt mốc** ([[doc-not-nhanh]]); [[tu-the|tư thế]] với bục kê chân.
- Phụ huynh tham gia buổi tập ở nhà (tinh thần Suzuki).

Các con số về thời gian tập trung theo tuổi hay "lợi ích nhận thức" được nhiều trang quảng cáo nêu nhưng **không có nguồn kiểm chứng**, nên không đưa vào đây.
`,
  },
  {
    slug: 'day-nguoi-lon',
    title: 'Dạy piano cho người lớn',
    category: 'musicianship',
    aliases: ['người lớn học piano', 'adult beginner', 'học đàn khi lớn tuổi', 'học viên người lớn'],
    summary: 'Người lớn thường có động lực nội tại mạnh (thực hiện ước mơ) nhưng gặp khó về thời gian, nỗi sợ bị đánh giá và việc tay "chậm hơn đầu".',
    refs: [
      ['Du — Literature review on motivation of piano beginners (Atlantis Press, PDF)', 'https://www.atlantis-press.com/article/125969895.pdf'],
      ['HRMARS — Challenges in teaching music among adult beginners', 'https://hrmars.com/ijarped/article/view/24388/Challenges-in-Teaching-Music-among-Adult-Beginner-of-Private-Esperto-Music-Studio'],
      ['Teoh (2020), University of Malaya — Adult piano learners (thesis record)', 'https://knova.um.edu.my/student_works_2020s/364/'],
      ['Piano Inspires — 5 things about career-aged adult piano learners', 'https://pianoinspires.com/5-things-adult-learners/'],
    ],
    body: `
## Động lực
- Một động lực rất phổ biến là **thực hiện ước mơ** ấp ủ từ lâu; người lớn thường có **động lực nội tại** mạnh hơn trẻ em.
- Một luận văn (phỏng vấn 5 người đi làm học piano) thấy động lực đến từ nhu cầu **tự hoàn thiện**, nhưng việc **tự học tự quản** lại là thách thức.
- Một tổng quan tài liệu kết luận: giáo viên cần hiểu **hoàn cảnh và động lực** của từng học viên.

## Khó khăn thường gặp
- **Thời gian** tập, chỗ đặt đàn, sự sẵn sàng về tinh thần.
- Một khảo sát học viên người lớn ở một studio thấy **hơn một nửa gặp khó với thị tấu** (xem [[thi-tau]]), và **nỗi sợ thất bại hay bị đánh giá** khá phổ biến.
- Người lớn **hiểu khái niệm nhanh** nhưng **cơ tay theo không kịp** — dễ nản.

## Gợi ý khi dạy
- **Cùng học viên chọn bài** họ muốn chơi, không chỉ theo giáo trình; người lớn thích học theo [[nhip-do|nhịp độ]] riêng (xem [[lo-trinh-tac-pham]], [[dem-hat-piano]]).
- Tận dụng khả năng **phân tích**: giải thích lý thuyết, cấu trúc ([[hoc-thuoc-bai|trí nhớ phân tích]]).
- Thực tế với thời gian tập: các buổi ngắn mà đều đặn ([[phuong-phap-luyen-tap|luyện phân bổ]]).
- Xử lý sớm nỗi lo bị đánh giá (xem [[hoi-hop-bieu-dien]]).

Lưu ý: các nghiên cứu về người lớn học piano còn ít và quy mô nhỏ. Một số con số lan truyền trên mạng (như tỉ lệ người lớn bỏ cuộc sau năm đầu) không tìm được nguồn gốc nên không đưa vào.
`,
  },
  {
    slug: 'su-pham-piano',
    title: 'Sư phạm piano: hệ thống và lộ trình',
    category: 'musicianship',
    aliases: ['sư phạm piano', 'piano pedagogy', 'phương pháp dạy piano', 'dạy đàn piano', 'giáo viên piano', 'cấu trúc buổi học'],
    summary: 'Bài tổng quan cho người dạy piano: sư phạm piano gồm những mảng nào, các truyền thống lớn (Nga – Xô Viết, Tây Âu và Mỹ), giáo trình cho người mới, bằng chứng nghiên cứu về dạy và tập, và một khung buổi học có thể dùng ngay — kèm lộ trình đọc trong thư viện.',
    refs: [
      ['Wikipedia — Piano pedagogy', 'https://en.wikipedia.org/wiki/Piano_pedagogy'],
      ['Duke & Simmons — The Nature of Expertise (UT Austin)', 'https://cml.music.utexas.edu/online-resources/the-nature-of-expertise'],
      ['Duke, Simmons & Cash (2009) — It’s Not How Much; It’s How (JRME)', 'https://www.jstor.org/stable/40204936'],
      ['Uszler, Gordon & McBride Smith — The Well-Tempered Keyboard Teacher (2000)', 'https://en.wikipedia.org/wiki/Stewart_L._Gordon'],
      ['Jacobson — Professional Piano Teaching', 'https://hsiaoya.com/en/products/03-00-44565-professional-piano-teaching-volume-1-2nd-edition-a-comprehensive-piano-pedagogy-textbook'],
    ],
    body: `
## Sư phạm piano gồm những gì?
| Mảng | Câu hỏi | Bài trong thư viện |
|---|---|---|
| **Tư tưởng sư phạm** | Dạy để làm gì? Thầy và trò quan hệ thế nào? | [[neuhaus-nghe-thuat-choi-piano]], [[truong-phai-su-pham-nga]], [[nha-su-pham-piano-phuong-tay]] |
| **Kỹ thuật** | Cơ thể chơi đàn thế nào cho hiệu quả, không chấn thương? | [[ky-thuat-piano]], [[lich-su-ky-thuat-piano]], [[suc-khoe-nguoi-choi-dan]] |
| **[[doc-not-nhanh|Đọc nhạc]] và nhạc cảm** | Dạy đọc nốt, nghe, nhịp ra sao? | [[cach-day-doc-not]], [[giao-trinh-piano-nhap-mon]], [[lo-trinh-luyen-tai-su-pham]] |
| **Giáo trình và tiết mục** | Học bài gì, theo thứ tự nào? | [[lo-trinh-tac-pham]], [[thi-cap-do]] |
| **Tâm lý và động lực** | Vì sao học trò bỏ cuộc hay tiếp tục? | [[giang-day-hieu-qua]], [[hoi-hop-bieu-dien]] |
| **Theo lứa tuổi** | Trẻ em, người lớn khác nhau thế nào? | [[day-tre-em]], [[day-nguoi-lon]] |
| **Phương pháp giáo dục âm nhạc chung** | Dalcroze, [[zoltan-kodaly|Kodály]], [[carl-orff|Orff]], Suzuki | [[phuong-phap-giao-duc-am-nhac]] |

## Hai truyền thống lớn và một hướng mới
- **Nga – Xô Viết**: hệ thống ba cấp (trường nhạc thiếu nhi → trung cấp → nhạc viện), trọng **[[lam-noi-giai-dieu|tiếng đàn hát]]** và **hình tượng nghệ thuật**; dòng thầy – trò liên tục từ anh em Rubinstein đến Neuhaus, Goldenweiser, Igumnov. Xem [[truong-phai-su-pham-nga]].
- **Tây Âu và Mỹ**: từ [[carl-czerny|Czerny]], [[franz-liszt|Liszt]], Leschetizky đến Matthay, [[alfred-cortot|Cortot]], Leimer – Gieseking; ở Mỹ [[thoi-ky-the-ky-20|thế kỷ 20]] có Lhévinne, Vengerova và ngành "piano pedagogy" ở đại học với giáo trình nhập môn và đào tạo giáo viên. Xem [[nha-su-pham-piano-phuong-tay]].
- **Nghiên cứu thực nghiệm** (từ cuối thế kỷ 20): đo xem cách dạy, cách tập nào thực sự hiệu quả — xem [[giang-day-hieu-qua]].

## Khung một buổi học (gợi ý)
Các giáo trình sư phạm thường chia buổi học thành các phần sau (đây là **thông lệ nghề**, không phải kết quả nghiên cứu; tỉ lệ thời gian tuỳ học trò):
::form Kỹ_thuật Ôn_bài Bài_mới Lý_thuyết Sáng_tạo Giao_bài | Một khung buổi học thường gặp trong các sách sư phạm piano: khởi động và kỹ thuật → ôn bài đã giao → bài mới, thị tấu → lý thuyết và nghe → sáng tạo (ngẫu hứng, sáng tác) → giao bài kèm cách tập
Bên trong mỗi phần, nghiên cứu của Duke và cộng sự gợi ý một **vòng lặp ngắn**: đặt mục tiêu âm thanh cụ thể → học trò thử → phản hồi cụ thể → làm lại ngay, cho đến khi học trò làm đúng **nhiều lần liên tiếp**.
::form Mục_tiêu Thử Phản_hồi Làm_lại | Vòng lặp "tạo thay đổi ngay trong buổi học" (xem [[giang-day-hieu-qua]])
Phần **giao bài** là phần hay bị xem nhẹ nhất: ghi rõ **tập đoạn nào, tập thế nào** (chậm, tay riêng, chia đoạn…), không chỉ "tập bài này" — xem [[phuong-phap-luyen-tap]].

## Lộ trình đọc
1. [[neuhaus-nghe-thuat-choi-piano]] — tư tưởng sư phạm kinh điển nhất.
2. [[truong-phai-su-pham-nga]] và [[nha-su-pham-piano-phuong-tay]] — các truyền thống và dòng thầy – trò.
3. [[lich-su-ky-thuat-piano]] — các quan niệm kỹ thuật thay đổi ra sao.
4. [[giao-trinh-piano-nhap-mon]], [[cach-day-doc-not]] — chọn sách cho người mới.
5. [[giang-day-hieu-qua]] — nghiên cứu về dạy, tập, phản hồi, động lực.
6. [[day-tre-em]], [[day-nguoi-lon]], [[lo-trinh-tac-pham]], [[thi-cap-do]] — áp dụng.

## Ba nguyên tắc rút ra
- **Âm nhạc trước, kỹ thuật phục vụ âm nhạc** — điểm chung của Neuhaus, Lhévinne, Cortot, Matthay dù cách nói khác nhau.
- **Dạy học trò tự học**: Neuhaus coi mục tiêu của thầy là "sớm trở nên không cần thiết"; nghiên cứu về phản hồi cũng cho thấy buổi học thường quá ít hướng dẫn **cách tự tập**.
- **Phân biệt truyền thống và bằng chứng**: nhiều lời khuyên quý đến từ kinh nghiệm các bậc thầy; một số đã được nghiên cứu ủng hộ, một số chưa được kiểm chứng.
Bối cảnh rộng hơn: [[lo-trinh-luyen-tai-su-pham]].
`,
  },
  {
    slug: 'neuhaus-nghe-thuat-choi-piano',
    title: 'Neuhaus và "Nghệ thuật chơi piano"',
    category: 'musicianship',
    aliases: ['Nghệ thuật chơi piano', 'The Art of Piano Playing', 'Об искусстве фортепианной игры', 'Neuhaus', 'Heinrich Neuhaus pedagogy', 'Генрих Нейгауз', 'hình tượng nghệ thuật', 'artistic image', 'Записки педагога'],
    summary: 'Heinrich Neuhaus (1888–1964), người thầy của Richter và Gilels, viết cuốn sách sư phạm piano nổi tiếng nhất thế kỷ 20: "Nghệ thuật chơi piano — Ghi chép của một nhà sư phạm" (1958). Bài này tóm tắt tiểu sử, cấu trúc sáu chương, các tư tưởng chính (hình tượng nghệ thuật, nhịp như mạch đập, tiếng đàn, kỹ thuật là "technē", người thầy phải sớm trở nên không cần thiết) và những giới hạn của cuốn sách.',
    refs: [
      ['Wikipedia — Heinrich Neuhaus', 'https://en.wikipedia.org/wiki/Heinrich_Neuhaus'],
      ['Большая советская энциклопедия — Нейгауз (dic.academic.ru)', 'https://dic.academic.ru/dic.nsf/bse/113065'],
      ['Kahn & Averill — The Art of Piano Playing', 'https://kahnandaverill.co.uk/?p=480'],
      ['Hull University Library — bản dịch K. A. Leibovitch, 1973', 'https://library.hull.ac.uk/record=b1039089~S3'],
      ['Mục lục bản tiếng Nga (libarch.nmu.org.ua)', 'https://libarch.nmu.org.ua/handle/GenofondUA/65494'],
      ['Interlude — The Heinrich Neuhaus legacy', 'https://interlude.hk/heinrich-the-great-the-heinrich-neuhaus-legacy/'],
      ['Wikipedia — Stanislav Neuhaus', 'https://en.wikipedia.org/wiki/Stanislav_Neuhaus'],
      ['Piano Dao — The art of piano pedagogy', 'https://pianodao.com/2015/12/05/the-art-of-piano-pedagogy/'],
      ['Razumovskaya — luận văn RCM (2014) về Neuhaus', 'https://researchonline.rcm.ac.uk/id/eprint/355'],
      ['Crothers — Heinrich Neuhaus: life, philosophy and pedagogy (BCU, 2010)', 'https://open-access.bcu.ac.uk/4928/'],
    ],
    body: `
::wiki Heinrich_Neuhaus | Heinrich Neuhaus (ảnh đầu bài Wikipedia)

## Tiểu sử ngắn
| Năm | Sự kiện |
|---|---|
| 1888 | Sinh ở Elisavetgrad (nay là Kropyvnytskyi, Ukraina); mẹ là chị của nhà sư phạm Felix Blumenfeld; [[karol-szymanowski|Karol Szymanowski]] là anh họ |
| 1909 – 1914 | Học lớp cao học của [[leopold-godowsky|Leopold Godowsky]] ở Học viện Âm nhạc Vienna |
| Đến 1918; 1918 – 1922 | Dạy ở Tbilisi, rồi Nhạc viện Kyiv |
| 1922 – 1964 | Giáo sư Nhạc viện Moscow; giám đốc nhạc viện 1935 – 1937 (Bách khoa toàn thư Liên Xô; Wikipedia tiếng Anh ghi 1934) |
| 1941 | Bị bắt khi quân Đức tiến gần Moscow, bị giam khoảng 8 tháng |
| 1958 | Xuất bản *Об искусстве фортепианной игры. Записки педагога* |
**Học trò**: [[sviatoslav-richter|Sviatoslav Richter]] (đến học năm 1937), [[emil-gilels|Emil Gilels]] (cao học), Yakov Zak, Yevgeny Malinin, Lev Naumov; con trai Stanislav Neuhaus cùng Malinin, Naumov làm trợ giảng những năm cuối. [[radu-lupu|Radu Lupu]] cũng học trong lớp này (cả với Stanislav). Xem [[heinrich-neuhaus]], [[truong-phai-su-pham-nga]].

## Cuốn sách
- Xuất bản lần đầu **1958**, tái bản có lời tựa mới **1961**, về sau in lại nhiều lần; bản tiếng Anh *The Art of Piano Playing* do K. A. Leibovitch dịch (London, 1973; Kahn & Averill in lại 1993).
- Phụ đề "**Ghi chép của một nhà sư phạm**" nói đúng tính chất: đây là **suy nghĩ và kinh nghiệm**, viết như trò chuyện, không phải một giáo trình bài tập.
| Chương | Nội dung |
|---|---|
| Thay lời tựa | Phương pháp dạy tóm tắt |
| I | Hình tượng nghệ thuật của tác phẩm âm nhạc |
| II | Đôi điều về nhịp |
| III | Về tiếng đàn |
| IV | Về luyện kỹ thuật (có các mục: "sự tự tin là nền của tự do", bộ máy vận động, tự do, các yếu tố kỹ thuật); phụ lục về **ngón bấm** và **pedal** |
| V | Về người thầy và người trò |
| VI | Về hoạt động biểu diễn |
| Kết luận | — |

## Các tư tưởng chính
| Tư tưởng | Tóm lược (diễn ý, không phải trích nguyên văn) | Liên hệ |
|---|---|---|
| **Hình tượng nghệ thuật trước tiên** | Ngay sau lần làm quen đầu tiên — dù còn chơi thô — học trò phải nắm được **nội dung, chất thơ** của tác phẩm; mọi công việc sau đó lấy hình tượng ấy làm mốc | [[phan-tich-va-bieu-dien]] |
| **Kỹ thuật là "technē"** | Kỹ thuật không chỉ là nhanh, đều, bay bướm; theo gốc Hy Lạp nó là **nghệ thuật**. Hiểu rõ mục đích nghệ thuật thì mới tìm được phương tiện để đạt nó | [[ky-thuat-piano]] |
| **Nhịp như mạch đập** | Nhịp giống **mạch của cơ thể sống**, không giống quả lắc hay [[nhip-do|máy đếm nhịp]]: nó nhanh chậm theo cảm xúc mà vẫn khoẻ mạnh — đó là nền của một rubato không làm vỡ cấu trúc | [[rubato]], [[cam-nhan-phach]] |
| **Tiếng đàn** | Cả một chương; tiếng đàn là phương tiện bộc lộ ý và logic âm nhạc; pedal cũng do **tai** điều khiển | [[ky-thuat-cham-phim]], [[ban-dap]] |
| **Tự tin → tự do** | Tự do trong động tác gắn với **sự tự tin bên trong**, không phải sự buông lỏng | [[suc-khoe-nguoi-choi-dan]] |
| **Học bài như nhạc trưởng** | Nghiên cứu bản nhạc như một tổng phổ, phân tích, thậm chí "chỉ huy" trong đầu — ngoài việc tập từng tay | [[tap-trong-dau]] |
| **Ngón bấm** | Ngón bấm tốt nhất là ngón **phục vụ ý đồ âm nhạc** tốt nhất | [[ngon-bam]] |
| **Thầy phải sớm trở nên không cần thiết** | Một nhiệm vụ chính của người thầy là làm sao để học trò **sớm không cần mình nữa**: có tư duy độc lập, biết cách làm việc, hiểu bản thân | [[giang-day-hieu-qua]] |
| **Tôn trọng cá tính** | Không "xoá khuôn mặt" của học trò để biến thành bản sao của thầy | [[day-tre-em]] |

## Ba giai đoạn tập một tác phẩm
Nhiều giáo trình phương pháp của Nga tóm tắt từ Neuhaus một quy trình ba bước (đây là **cách đọc của truyền thống sư phạm**, không phải câu chữ của chính ông):
::form Hình_tượng Chi_tiết Tổng_hợp | Ba giai đoạn làm việc với một tác phẩm theo cách hiểu phổ biến của trường phái Nga: làm quen và nắm hình tượng → luyện chi tiết, kỹ thuật → tổng hợp thành một khối sống
Quy trình này khớp với khuyến nghị hiện đại: xem toàn cảnh trước ([[phuong-phap-phan-tich-tac-pham|phân tích]]), chia nhỏ để luyện ([[phuong-phap-luyen-tap]]), rồi luyện **chơi liền** trong điều kiện biểu diễn ([[hoi-hop-bieu-dien]]).

## Đọc cuốn sách thế nào
- **Điểm mạnh**: trao cho người dạy một **thước đo âm nhạc** cho mọi quyết định kỹ thuật; nhiều thế hệ giáo viên coi đây là sách gối đầu.
- **Giới hạn** (nhận xét của nhiều người đọc và từ chính cấu trúc sách): viết như hồi ký, **không có hệ thống bài tập**; dựa nhiều vào tiết mục [[thoi-ky-lang-man|Lãng mạn]] – Nga và vào học trò **nhạc viện có năng khiếu**; nhiều điều phụ thuộc trực giác của người thầy. Nghiên cứu học thuật (luận văn ở Royal College of Music, Birmingham City University) đã so sánh nó với cách tiếp cận phân tích hơn của Leimer – Gieseking ([[nha-su-pham-piano-phuong-tay]]).
- Một số câu "của Neuhaus" lan truyền trên mạng **chưa được xác nhận** là có trong sách — khi trích dẫn, nên dùng bản dịch in.
`,
  },
  {
    slug: 'truong-phai-su-pham-nga',
    title: 'Trường phái sư phạm piano Nga – Xô Viết',
    category: 'musicianship',
    aliases: ['trường phái sư phạm Nga', 'Russian piano pedagogy', 'sư phạm piano Xô Viết', 'Central Music School', 'ЦМШ', 'trường Gnesin', 'Gnessin', 'Goldenweiser', 'Igumnov', 'Nikolaev', 'Zverev', 'Kogan', 'У врат мастерства', 'dòng thầy trò piano', 'piano lineage'],
    summary: 'Từ hai nhạc viện do anh em Rubinstein lập (1862, 1866) đến hệ thống ba cấp và trường chuyên cho trẻ năng khiếu thời Xô Viết: bài này trình bày các thầy lớn (Leschetizky, Yesipova, Zverev, Safonov, Goldenweiser, Igumnov, Neuhaus, Nikolaev), dòng thầy – trò, sách sư phạm, những đặc điểm thường được gán cho "trường phái Nga" và ảnh hưởng tới Việt Nam.',
    refs: [
      ['Wikipedia — Theodor Leschetizky', 'https://en.wikipedia.org/wiki/Theodor_Leschetizky'],
      ['Musica — Anna Yesipova', 'https://dc.mus-col.com/en/the-authors/21882/'],
      ['Wikipedia — Alexander Goldenweiser', 'https://en.wikipedia.org/wiki/Alexander_Borisovich_Goldenweiser'],
      ['Wikipedia — Konstantin Igumnov', 'https://en.wikipedia.org/wiki/Konstantin_Igumnov'],
      ['Wikipedia — Lev Oborin', 'https://en.wikipedia.org/wiki/Lev_Oborin'],
      ['University of Maryland — Piano genealogies: the Igumnov tradition', 'https://exhibitions.lib.umd.edu/piano-genealogies/pianist-bios/igumnov-tradition'],
      ['Wikipedia — Leonid Nikolayev', 'https://en.wikipedia.org/wiki/Leonid_Nikolayev_(pianist)'],
      ['Wikipedia — Elena Gnesina', 'https://en.wikipedia.org/wiki/Elena_Gnesina'],
      ['Gnesin Academy — History', 'https://eng.gnesin-academy.ru/academy/history/'],
      ['Pixel-online — Russian specialized music education', 'https://conference.pixel-online.net/files/foe/ed0006/FP/2720-MUE1734-FP-FOE6.pdf'],
      ['HSE — Lapina về sách của G. Kogan', 'https://archive_vo.hse.ru/data/2013/10/20/1279364540/VO4_10%20Lapina.pdf'],
      ['Université de Genève — luận án về truyền dạy tiếng đàn trong trường phái Nga (2021)', 'https://archive-ouverte.unige.ch/unige:157666'],
      ['Wikipedia — Vladimir Natanson', 'https://en.wikipedia.org/wiki/Vladimir_Natanson'],
      ['Wikipedia — Đặng Thái Sơn', 'https://en.wikipedia.org/wiki/%C4%90%E1%BA%B7ng_Th%C3%A1i_S%C6%A1n'],
      ['Báo Pháp luật — NSND Thái Thị Liên', 'https://baophapluat.vn/nsnd-thai-thi-lien-con-mai-mot-huyen-thoai-post466571.html'],
      ['CafeF — Học viện Âm nhạc Quốc gia Việt Nam', 'https://cafef.vn/hoc-vien-am-nhac-quoc-gia-viet-nam.html'],
      ['Fox News (AP) — Vietnam matriarch spreads piano culture', 'https://www.foxnews.com/world/vietnam-matriarch-now-92-spread-piano-culture'],
    ],
    body: `
## Nền móng (thế kỷ 19)
| Mốc | Ý nghĩa |
|---|---|
| 1862 | [[anton-rubinstein|Anton Rubinstein]] lập **Nhạc viện St Petersburg**; [[theodor-leschetizky|Theodor Leschetizky]] (ở Nga khoảng 1852 – 1877/78) đứng đầu khoa piano |
| 1866 | Nikolai Rubinstein lập **Nhạc viện Moscow** |
| Từ 1866 | Anna Yesipova học Leschetizky (sau là vợ ông), về sau lập một trong những trường phái piano lớn nhất ở St Petersburg |
| Thập niên 1880 | Nikolai Zverev (1832 – 1893) nuôi học trò nội trú ở nhà, khoảng **6 giờ tập mỗi ngày**; [[sergei-rachmaninoff|Rachmaninoff]] ở đó hơn 4 năm, [[alexander-scriabin|Scriabin]] cũng là học trò ông |
| 1895 | Ba chị em **Gnesin** lập trường nhạc ở Moscow (nay là Học viện Gnesin) |

## Thế kỷ 20: các thầy lớn và dòng thầy – trò
| Thầy | Học trò tiêu biểu |
|---|---|
| **Alexander Goldenweiser** (vào nhạc viện 1889, lớp Siloti — dòng [[franz-liszt|Liszt]]) | Samuil Feinberg, Grigory Ginzburg, Tatiana Nikolayeva, Lazar Berman, Dmitri Bashkirov |
| **Konstantin Igumnov** | Lev Oborin (giải nhất cuộc thi [[frederic-chopin|Chopin]] đầu tiên, 1927), Yakov Flier, Bella Davidovich |
| **[[heinrich-neuhaus|Heinrich Neuhaus]]** | [[sviatoslav-richter|Sviatoslav Richter]], [[emil-gilels|Emil Gilels]], Yakov Zak, Stanislav Neuhaus — xem [[neuhaus-nghe-thuat-choi-piano]] |
| **Leonid Nikolaev** (Leningrad, từ 1909) | Vladimir Sofronitsky, Maria Yudina, [[dmitri-shostakovich|Dmitri Shostakovich]] (tốt nghiệp piano 1923) |
| **Isabelle Vengerova** (sang Mỹ 1923) | Ở Viện Curtis: [[samuel-barber|Samuel Barber]], [[leonard-bernstein|Leonard Bernstein]], Gary Graffman |
::form Feinberg Natanson Đặng_Thái_Sơn | Một dòng thầy – trò dẫn tới Việt Nam: Samuil Feinberg → Vladimir Natanson → Đặng Thái Sơn (sau đó học thêm Dmitri Bashkirov, học trò của Goldenweiser)
"Bộ tứ Moscow" (Goldenweiser, Igumnov, Feinberg, Neuhaus) là cách gọi quen thuộc của giới nghiên cứu — lưu ý Feinberg chính là học trò của Goldenweiser.

## Hệ thống đào tạo
::form Trường_nhạc_thiếu_nhi Trung_cấp Nhạc_viện | Hệ thống ba cấp được chuẩn hoá trên toàn Liên Xô: trường nhạc thiếu nhi (ДМШ, khoảng 7 – 14 tuổi) → trung cấp (училище) → nhạc viện
- Từ **1935**, các nhạc viện mở **trường chuyên cho trẻ năng khiếu** gộp cấp 1, cấp 2 và học văn hoá ("trường 10 năm"); trường tiêu biểu là **Trường Âm nhạc Trung ương (ЦМШ)** trực thuộc Nhạc viện Moscow.

## Sách sư phạm
| Sách | Ghi chú |
|---|---|
| Neuhaus, *Nghệ thuật chơi piano — Ghi chép của một nhà sư phạm* (1958) | [[neuhaus-nghe-thuat-choi-piano]] |
| Grigory Kogan, *Ở cửa ngõ của tay nghề* (*У врат мастерства*) | Về tâm lý làm việc của nghệ sĩ; Neuhaus viết lời tựa lần in đầu |
| A. D. Alekseev, *Phương pháp dạy chơi piano* | Giáo trình phương pháp cho sinh viên sư phạm |
| G. Tsypin, *Dạy chơi piano* | Giáo trình phương pháp, tái bản đến nay |
| *Trường phái chơi piano* (*Школа игры на фортепиано*), A. Nikolaev chủ biên cùng V. Natanson, L. Roshchina | Sách cho người mới, in nhiều thập kỷ — xem [[giao-trinh-piano-nhap-mon]] |
(Năm in lần đầu của các sách Kogan, Alekseev, Tsypin chưa được kiểm chứng trong nguồn đã tra.)

## Những đặc điểm thường được nêu
- **Tiếng đàn hát** (*пение на рояле*): giai điệu như giọng người, đòi cánh tay và cổ tay tự do — từ Field, anh em Rubinstein đến Josef Lhévinne, Igumnov. Một luận án ở Đại học Geneva (2021) cho thấy cách dạy tạo tiếng đàn trong truyền thống này có tính **liên tục** qua các thế hệ. Xem [[lam-noi-giai-dieu]].
- **[[cau-nhac|Câu nhạc]] như lời hát – lời nói**: Chaliapin và Rachmaninoff thường được nêu làm mẫu. Xem [[dien-dat-cau-nhac]].
- **Hình tượng nghệ thuật** dẫn dắt kỹ thuật (Neuhaus).
- **Nền tảng kỹ thuật có hệ thống**: âm giai, [[luyen-hop-am-rai|hợp âm rải]], [[tieu-pham-piano|luyện khúc]]; kỳ kiểm tra kỹ thuật (*технический зачёт*) ở các trường. Xem [[luyen-am-giai]], [[bai-tap-ngon]].
**Lưu ý**: "trường phái Nga" như một khối thống nhất phần lớn là cách nói của báo chí và hãng đĩa. Các nghiên cứu học thuật mô tả **nhiều dòng khác nhau** (Moscow và Leningrad; dòng Liszt – Siloti và dòng Leschetizky). Nên xem các đặc điểm trên là **xu hướng**, không phải một phương pháp cố định. So sánh với trường phái Pháp: [[truong-phai-piano]].

## Với Việt Nam
- Trường Âm nhạc Việt Nam thành lập năm **1956** (sau là Nhạc viện Hà Nội, từ 2008 là Học viện Âm nhạc Quốc gia Việt Nam). NSND **Thái Thị Liên**, một trong những người sáng lập và là nữ giảng viên piano đầu tiên, được đào tạo ở **Praha**.
- **Đặng Thái Sơn** được nghệ sĩ Liên Xô Isaac Katz phát hiện năm 1974, sang học Nhạc viện Moscow (năm vào trường các nguồn ghi 1976 hoặc 1977) với Vladimir Natanson rồi Dmitri Bashkirov, và giành giải nhất cuộc thi Chopin tháng 10/1980 — người châu Á đầu tiên. Xem [[dang-thai-son]], [[piano-viet-nam]].
- Một số giảng viên piano Việt Nam được đào tạo trực tiếp ở Moscow — ví dụ Trần Thu Hà (con gái NSND Thái Thị Liên) làm tiến sĩ piano ở Nhạc viện Moscow rồi về dạy ở Hà Nội. Mức độ ảnh hưởng của truyền thống Nga lên giáo trình các nhạc viện Việt Nam chưa có nghiên cứu nào được tìm thấy để dẫn.
`,
  },
  {
    slug: 'nha-su-pham-piano-phuong-tay',
    title: 'Các nhà sư phạm piano phương Tây',
    category: 'musicianship',
    aliases: ['nhà sư phạm piano', 'Leschetizky method', 'The Act of Touch', 'Principes rationnels', 'Leimer', 'Leimer–Gieseking', 'Modernes Klavierspiel', 'Reflexion', 'Rosina Lhévinne', 'Vengerova', 'Frances Clark', 'Seymour Bernstein', 'Liszt masterclass', 'Deppe', 'Amy Fay'],
    summary: 'Từ Czerny và Liszt đến Leschetizky, Matthay, Cortot, Leimer – Gieseking, Lhévinne, Vengerova, Frances Clark và các nhà sư phạm Mỹ cuối thế kỷ 20: mỗi người một cuốn sách, một ý tưởng then chốt và những học trò nổi tiếng — kèm bảng so sánh để người dạy chọn điều hữu ích cho lớp mình.',
    refs: [
      ['Enc. Piano (PTNA) — Czerny, Op. 500', 'https://enc.piano.or.jp/en/musics/6297'],
      ['Britannica — Theodor Leschetizky', 'https://www.britannica.com/print/article/337079'],
      ['Cambridge — Liszt in Context: Pupils', 'https://www.cambridge.org/core/books/liszt-in-context/pupils/6AD5A7514A5CD22547C81AED3CD65957'],
      ['Steingraeber — Liszt’s masterclasses in Weimar', 'https://steingraeber.de/en/?p=11415'],
      ['Wikipedia — Ludwig Deppe', 'https://en.wikipedia.org/wiki/Ludwig_Deppe'],
      ['Crescendo — The Leschetizky Method (Brée)', 'https://www.crescendo-music.com/shop/74480-the-leschetizky-method-76252'],
      ['Wikipedia — Tobias Matthay', 'https://en.wikipedia.org/wiki/Tobias_Matthay'],
      ['IMSLP — Cortot, Rational Principles of Piano Technique', 'https://imslp.org/wiki/Rational_Principles_of_Piano_Technique_(Cortot,_Alfred)'],
      ['Wikipedia — École Normale de Musique de Paris', 'https://en.wikipedia.org/wiki/%C3%89cole_Normale_de_Musique_de_Paris'],
      ['Wikipedia — Karl Leimer', 'https://en.wikipedia.org/wiki/Karl_Leimer'],
      ['Deutsche Biographie — Karl Leimer', 'https://www.deutsche-biographie.de/sfz20939.html'],
      ['Jewish Women’s Archive — Rosina Lhévinne', 'https://cdn.jwa.org/encyclopedia/article/lhevinne-rosina'],
      ['Steinway — Isabelle Vengerova', 'https://www.steinway.com/news/features/isabelle-vengerova'],
      ['Penn State University Press — The Vengerova System of Piano Playing', 'https://www.psupress.org/books/titles/0-271-00313-8.html'],
      ['Wikipedia — Frances Clark', 'https://en.wikipedia.org/wiki/Frances_Clark_(pianist)'],
      ['Wikipedia — Dorothy Taubman', 'https://en.wikipedia.org/wiki/Dorothy_Taubman'],
      ['WWU — luận văn về György Sándor', 'https://cedar.wwu.edu/wwuet/1191'],
    ],
    body: `
## Thế kỷ 19
| Người | Sách / nơi dạy | Ý tưởng then chốt | Học trò |
|---|---|---|---|
| **Carl Czerny** (1791 – 1857) | *Complete Theoretical and Practical Piano Forte School*, Op. 500 (1839, 4 tập) | Một trường phái **có hệ thống** từ những bước đầu đến trình độ cao: kỹ thuật, [[ngon-bam|ngón bấm]], biểu cảm, phong cách — kèm phụ lục về cách chơi [[ludwig-van-beethoven|Beethoven]] | [[franz-liszt|Liszt]], Thalberg, Leschetizky — xem [[carl-czerny]] |
| **Franz Liszt** (Weimar) | Lớp học tại nhà Hofgärtnerei | **Lớp mẫu** (masterclass): học trò chơi trước bạn cùng lớp; **không lấy học phí** | Rất nhiều — hình thức masterclass ngày nay bắt nguồn từ đây |
| **Ludwig Deppe** (1828 – 1890) | Không có sách lớn; được biết qua *Music-Study in Germany* (1880) của học trò Amy Fay | Động tác **cong, liền mạch** thay cho "đánh"; "rơi tự do" của cánh tay (nên hiểu như hình ảnh) — một tiền thân của kỹ thuật trọng lượng | Amy Fay, Elisabeth Caland |
| **[[theodor-leschetizky|Theodor Leschetizky]]** (1830 – 1915) | *Die Grundlage der Methode Leschetizky* (1902) do trợ giảng **Malwine Brée** viết | Ông duyệt cuốn sách nhưng được ghi lại là nói mình **"không có phương pháp"** — dạy theo **từng học trò** | [[ignacy-jan-paderewski|Paderewski]], [[artur-schnabel|Schnabel]], Moiseiwitsch, Brailowsky |

## Đầu thế kỷ 20: châu Âu
| Người | Sách / nơi dạy | Ý tưởng then chốt | Học trò |
|---|---|---|---|
| **Tobias Matthay** (1858 – 1945) | *The Act of Touch* (1903); trường riêng ở London từ 1905 | Phân tích **động tác chạm phím**, **xoay cẳng tay**, thả lỏng | [[myra-hess|Myra Hess]], York Bowen, Clifford Curzon, Moura Lympany |
| **[[alfred-cortot|Alfred Cortot]]** (1877 – 1962) | *Principes rationnels de la technique pianistique* (1928); đồng sáng lập **École Normale de Musique** (6/10/1919) | Quy kỹ thuật về **vài nhóm cơ bản**; **tách chỗ khó ra khỏi [[cau-nhac|đoạn nhạc]]** để luyện riêng; đào tạo cả **giáo viên** ("école normale" là trường sư phạm) | Lipatti, Haskil |
| **Karl Leimer & [[walter-gieseking|Walter Gieseking]]** | *Modernes Klavierspiel* (khoảng 1931; bản Anh 1932: *The Shortest Way to Pianistic Perfection*) | **Reflexion**: học bản nhạc **bằng đầu, không cần đàn**, tập trung cao độ; luyện trí nhớ, [[luyen-tai|luyện tai]]; thả lỏng sau mỗi động tác | Gieseking là học trò của Leimer — xem [[tap-trong-dau]], [[hoc-thuoc-bai]] |

## Thế kỷ 20: Mỹ
| Người | Nơi dạy / sách | Ý tưởng | Học trò |
|---|---|---|---|
| **Josef & Rosina Lhévinne** | Juilliard | [[truong-phai-piano|Trường phái Nga]] ở Mỹ, **[[lam-noi-giai-dieu|tiếng đàn hát]]** | Học trò của Rosina: [[van-cliburn|Van Cliburn]] (giải nhất [[pyotr-ilyich-tchaikovsky|Tchaikovsky]] 1958), John Browning, James Levine |
| **Isabelle Vengerova** (1877 – 1956) | Viện Curtis (từ 1924) | Hệ thống nghiêm ngặt kiểu Nga (sách *The Vengerova System* của Robert Schick) | [[samuel-barber|Samuel Barber]], [[leonard-bernstein|Leonard Bernstein]], Lukas Foss |
| **Frances Clark** (1905 – 1998) | *[[giao-trinh-piano-nhap-mon|The Music Tree]]* (1958); New School for Music Study (1960, cùng Louise Goss) | [[doc-not-nhanh|Đọc nhạc]] bằng **nốt mốc và quãng**; đào tạo giáo viên piano | — xem [[cach-day-doc-not]] |
| **György Sándor** | *On Piano Playing* (1981) | **Năm động tác cơ bản** | — xem [[lich-su-ky-thuat-piano]] |
| **Dorothy Taubman** (1917 – 2013) | Phương pháp Taubman (nay qua Viện Golandsky) | **Xoay cẳng tay**, chuyển động phối hợp, phòng và chữa chấn thương (bằng chứng phần lớn từ các nguồn gắn với phương pháp) | — xem [[suc-khoe-nguoi-choi-dan]] |
| **Seymour Bernstein** (1927 – 2024) | *With Your Own Two Hands* (1981) | Luyện tập như **tự khám phá bản thân**; tập trung; hồi hộp sân khấu | — xem [[hoi-hop-bieu-dien]] |

## Dòng thầy – trò kinh điển
::form Beethoven Czerny Liszt | Dòng nổi tiếng nhất: Beethoven dạy Czerny, Czerny dạy Liszt
::form Czerny Leschetizky Schnabel | Leschetizky học Czerny; Artur Schnabel học Leschetizky
Xem thêm dòng Nga ở [[truong-phai-su-pham-nga]].

## Người dạy rút ra được gì?
| Ý tưởng | Của ai | Dùng ngay |
|---|---|---|
| Dạy theo **từng học trò**, không theo một công thức | Leschetizky | Chẩn đoán trước khi kê "bài tập" |
| **Tách chỗ khó** để luyện riêng rồi ghép lại | Cortot | Kết hợp với [[phuong-phap-luyen-tap]] |
| **Học bằng đầu** trước khi chạm đàn | Leimer – Gieseking (và [[neuhaus-nghe-thuat-choi-piano|Neuhaus]]) | [[tap-trong-dau]] |
| **Lớp mẫu**: học từ việc nghe bạn chơi | Liszt | Buổi học nhóm, buổi biểu diễn nội bộ |
| Phân tích **động tác** để chơi nhẹ nhàng, không đau | Matthay, Taubman, Sándor | [[ky-thuat-cham-phim]], [[tremolo-xoay-cang-tay]] |
| Đọc nhạc bằng **nốt mốc và quãng** | Frances Clark | [[cach-day-doc-not]] |
Tổng quan: [[su-pham-piano]].
`,
  },
  {
    slug: 'giao-trinh-piano-nhap-mon',
    title: 'Giáo trình piano nhập môn: so sánh',
    category: 'musicianship',
    aliases: ['giáo trình piano', 'sách học piano', 'method book', 'piano method', 'Beyer', 'Beyer Op. 101', 'John Thompson', 'Bastien', 'Alfred’s Basic Piano Library', 'Piano Adventures', 'Faber', 'The Music Tree', 'Suzuki piano', 'Michael Aaron', 'Robert Pace', 'Trường phái chơi piano Nikolaev'],
    summary: 'Các sách nhập môn piano phổ biến — Beyer (1850), John Thompson (1936), Michael Aaron, Robert Pace (1954), Bastien, Alfred (1981), The Music Tree (1958), Piano Adventures, Suzuki, "Trường phái chơi piano" của Nga — khác nhau chủ yếu ở cách dạy đọc nốt. Bài này so sánh chúng và gợi ý cách chọn.',
    refs: [
      ['Wikipedia — Ferdinand Beyer', 'https://en.wikipedia.org/wiki/Ferdinand_Beyer'],
      ['Enc. Piano (PTNA) — Beyer, Vorschule im Klavierspiel', 'https://enc.piano.or.jp/en/musics/12013'],
      ['Wikipedia — Piano pedagogy', 'https://en.wikipedia.org/wiki/Piano_pedagogy'],
      ['Barnard — Jane Smisor Bastien', 'https://barnard.edu/magazine/cnsmr2018/jane-smisor-bastien-57'],
      ['Goodreads — Alfred’s Basic Piano Library 1A', 'https://www.goodreads.com/work/editions/84459-alfred-s-basic-piano-library-lesson-book-level-1a'],
      ['Toronto Arts Academy — So sánh các giáo trình', 'https://torontoartsacademy.com/?p=8112'],
      ['Wikipedia — Suzuki method', 'https://en.wikipedia.org/wiki/Suzuki_method'],
      ['Comeau — The Suzuki method and the natural learning process (uOttawa)', 'https://piano.uottawa.ca/wp-content/uploads/2016/04/Publications/Methods/Suzuki%20Method/Natural%20Learning%20Process%20article.pdf'],
      ['Hood (1982) — luận văn Western Michigan University', 'https://scholarworks.wmich.edu/cgi/viewcontent.cgi?article=2697&context=masters_theses'],
      ['Lu (2012) — luận văn uOttawa về 18 giáo trình Bắc Mỹ', 'https://piano.uottawa.ca/wp-content/uploads/2016/04/Publications/Methods/Lu_Yuanyuan_2012_thesis.pdf'],
      ['Lan — Школа игры на фортепиано (Nikolaev)', 'https://lanbook.com/catalog/discipline/fortepiano'],
    ],
    body: `
## Bảng so sánh
| Giáo trình | Năm | Tác giả | Cách tiếp cận |
|---|---|---|---|
| *Vorschule im Klavierspiel* Op. 101 | 1850 (có nguồn ghi 1851) | Ferdinand **Beyer** | 106 bài từ dễ đến khó; được Luther W. Mason đưa vào Nhật khoảng 1880 và trở thành sách nhập môn phổ biến bậc nhất ở Nhật, Hàn |
| *Modern Course for the Piano* | 1936 | John **Thompson** | Phổ biến cách **[[ban-phim|Đô giữa]]** |
| Michael Aaron Piano Course | 1947 – 52 | Michael **Aaron** | Đô giữa |
| Phương pháp Pace | 1954 | Robert **Pace** | Phương pháp **đa giọng** đầu tiên |
| Bastien | Từ 1963 (*Piano Basics* 1985) | James và Jane Smisor **Bastien** | **Đa giọng**: vị trí năm ngón ở nhiều giọng |
| *The Music Tree* | 1958 | Frances **Clark** (cùng Goss, Holland) | **[[doc-not-nhanh|Nốt mốc]] và quãng** |
| Alfred’s Basic Piano Library | 1981 | Palmer, Manus, Lethco | Bắt đầu bằng phím đen, rồi vị trí Đô giữa, rồi quãng |
| Piano Adventures | Thập niên 1990 | Randall và Nancy **Faber** | **Hỗn hợp**: Đô giữa + đa giọng, dần chuyển sang đọc quãng |
| Suzuki Piano School | Nhật | Shinichi Suzuki (piano cùng Haruko Kataoka) | **"Tiếng mẹ đẻ"**: nghe hằng ngày, bắt chước, [[luyen-tai|chơi theo tai]] **trước** khi đọc |
| *Школа игры на фортепиано* | Nhiều thập kỷ (bản sửa 2007) | A. [[truong-phai-su-pham-nga|Nikolaev]] chủ biên, V. Natanson, L. Roshchina | Sách nhập môn chuẩn của trường nhạc Liên Xô – Nga |
Theo luận văn của Hood (1982), hai hướng chính là **Đô giữa** và **đa giọng**, cộng các hướng khác; Lu (2012) khảo sát 18 giáo trình Bắc Mỹ. Ba cách dạy đọc nốt được phân tích kỹ ở [[cach-day-doc-not]].
::form Đô_giữa Đa_giọng Nốt_mốc_&_quãng Hỗn_hợp Nghe_trước_(Suzuki) | Năm hướng chính của sách nhập môn

## Chọn giáo trình thế nào (gợi ý)
| Học trò | Nên ưu tiên | Lý do |
|---|---|---|
| Trẻ nhỏ (4 – 6 tuổi) | Sách có hình, bắt đầu bằng phím đen, nhiều bài hát; hoặc cách nghe trước | Chưa đọc chữ thạo; học bằng tai và vận động — xem [[day-tre-em]], [[phuong-phap-giao-duc-am-nhac]] |
| Trẻ 7 – 10 tuổi | Sách hỗn hợp có đọc quãng sớm | Tránh phụ thuộc vào một vị trí ngón cố định |
| Người lớn mới học | Sách dành riêng cho người lớn, có hợp âm và đệm hát | Mục tiêu và tốc độ khác trẻ em — xem [[day-nguoi-lon]], [[dem-hat-piano]] |
| Học trò muốn thi cấp độ | Kết hợp giáo trình với tuyển tập bài thi | Xem [[thi-cap-do]], [[lo-trinh-tac-pham]] |
Những gợi ý trên là **kinh nghiệm nghề**, không phải kết luận nghiên cứu. Nghiên cứu duy nhất trong thư viện so sánh trực tiếp hai cách đọc (DiCienzo, 2019) cho kết quả trái với kỳ vọng — xem [[cach-day-doc-not]].

## Lưu ý về Beyer
Beyer vẫn rất phổ biến ở châu Á. Nhận xét của người biên soạn (chưa có nghiên cứu đối chứng): sách gồm các bài ngắn tăng dần độ khó nhưng gần như không có phần nghe, sáng tạo hay đọc quãng có hệ thống — nên dùng kèm [[thi-tau]], [[ngau-hung-piano]] và bài hát quen thuộc.
Tổng quan: [[su-pham-piano]].
`,
  },
]
