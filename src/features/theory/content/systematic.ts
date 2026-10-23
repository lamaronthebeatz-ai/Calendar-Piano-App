import type { Article } from '../wiki'

/**
 * Âm nhạc học hệ thống: các bài chuyên đề (thần kinh, phát triển, chuyển giao, tiến hoá, ngôn ngữ,
 * trị liệu, âm học nhạc cụ, tính toán, thiết kế thực nghiệm). Nguồn ghi trong `refs`.
 */
export const systematic: Article[] = [
  {
    slug: 'than-kinh-hoc-am-nhac',
    title: 'Khoa học thần kinh về âm nhạc',
    category: 'musicology',
    also: ['listening'],
    aliases: ['khoa học thần kinh âm nhạc', 'neuroscience of music', 'não và âm nhạc', 'cognitive neuroscience of music', 'mù nhạc', 'congenital amusia', 'amusia', 'não nhạc sĩ', 'dopamine và âm nhạc', 'ERAN'],
    summary: 'Não nghe nhạc ra sao: đường đi từ tai lên vỏ não thính giác, hệ thống phần thưởng và dopamine khi "rùng mình" vì nhạc, chứng mù nhạc bẩm sinh (khoảng 1,5% dân số), não của người chơi nhạc, và cú pháp âm nhạc dùng chung vùng não với ngôn ngữ đến mức nào.',
    wiki: 'Cognitive_neuroscience_of_music',
    refs: [
      ['Wikipedia — Tonotopy', 'https://en.wikipedia.org/wiki/Tonotopy'],
      ['Blood & Zatorre (2001) — Intensely pleasurable responses to music correlate with activity in brain regions implicated in reward and emotion, PNAS 98(20)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC58814'],
      ['Salimpoor et al. (2011) — Anatomically distinct dopamine release during anticipation and experience of peak emotion to music, Nature Neuroscience (PDF)', 'https://www.zlab.mcgill.ca/publications/docs/salimpoor_2011_nn.pdf'],
      ['Peretz & Vuvan (2017) — Prevalence of congenital amusia, European Journal of Human Genetics', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5437896/'],
      ['Elbert et al. (1995) — Increased cortical representation of the fingers of the left hand in string players, Science 270', 'https://kops.uni-konstanz.de/entities/publication/6d2dc461-72bf-44e0-8ccf-b6ba7bfc2fec'],
      ['Schlaug et al. (1995) — Increased corpus callosum size in musicians, Neuropsychologia 33(8)', 'https://profiles.umassmed.edu/display/22564730'],
      ['Gaser & Schlaug (2003) — Brain structures differ between musicians and non-musicians, J. Neuroscience 23(27)', 'https://www.jneurosci.org/content/23/27/9240'],
      ['Hyde et al. (2009) — Musical training shapes structural brain development, J. Neuroscience 29(10)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2996392/'],
      ['Maess et al. (2001) — Musical syntax is processed in Broca\'s area: an MEG study, Nature Neuroscience 4(5)', 'https://www.nature.com/articles/nn0501_540'],
      ['Frontiers in Psychology (2018) — review of the shared syntactic integration resource hypothesis', 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2018.00038/full'],
    ],
    body: `
**Khoa học thần kinh về âm nhạc** nghiên cứu những gì xảy ra trong não khi ta nghe, chơi và học nhạc, bằng các phương pháp chụp não (fMRI, PET, MEG, EEG) và bằng việc nghiên cứu người bị tổn thương. Wikipedia và Parncutt đều xếp nó vào [[am-nhac-hoc-he-thong|âm nhạc học hệ thống]]; nó gắn chặt với [[tam-ly-hoc-am-nhac]].

**Một lời cảnh báo trước:** nhiều nghiên cứu chụp não có **mẫu nhỏ** và chỉ cho thấy **tương quan**. Câu "vùng X sáng lên" không có nghĩa là "vùng X làm ra âm nhạc". Các con số dưới đây được ghi kèm cỡ mẫu khi nguồn cho biết.

## 1. Từ tai lên vỏ não
Vỏ não thính giác sơ cấp nằm ở **hồi Heschl** (thuỳ thái dương) và được sắp xếp theo **tần số** (*tonotopy*): mỗi dải tần ứng với một vùng, giống như các [[ban-phim|phím đàn]] xếp theo [[cao-do|cao độ]]. Các vùng sơ cấp ưa đặc điểm âm thanh đơn giản; các vùng bao quanh nhạy hơn với âm thanh phức tạp như lời nói và âm nhạc. Cách bố trí chi tiết của bản đồ tần số ở người vẫn còn tranh luận. Xem [[am-hoc-co-ban]], [[cam-nhan-am-thanh]].

## 2. Vì sao âm nhạc dễ chịu: hệ thống phần thưởng
- **Blood và Zatorre (2001)** chụp PET khi người nghe nghe bản nhạc **chính họ chọn** vì nó làm họ "rùng mình". [[cuong-do|Cường độ]] rùng mình càng tăng thì hoạt động ở thể vân bụng, não giữa, hạch hạnh nhân, vỏ não trán ổ mắt càng thay đổi — **những vùng cũng phản ứng với thức ăn và các chất gây nghiện**.
- **Salimpoor và cộng sự (2011)** đo được **dopamine** được giải phóng ở thể vân. Đáng chú ý là có **hai thời điểm**: nhân đuôi hoạt động mạnh hơn khi **chờ đợi** đoạn cao trào, còn nhân accumbens hoạt động mạnh ở **chính khoảnh khắc** cao trào. Điều này khớp với lý thuyết **kỳ vọng** ([[ky-vong-am-nhac]]). Lưu ý: chỉ có **8 người** tham gia cuối cùng (sàng lọc từ 217 người).
- Xem thêm [[cam-xuc-am-nhac]] (mục rùng mình — *frisson*).

## 3. Chứng mù nhạc bẩm sinh
- **Mù nhạc bẩm sinh** (*congenital amusia*) là tình trạng suốt đời không phân biệt được các thay đổi cao độ nhỏ, dù thính lực, trí tuệ và khả năng hiểu lời nói vẫn bình thường. Nghiên cứu nền tảng của Isabelle Peretz và cộng sự (*Neuron*, 2002) mô tả một ca: một phụ nữ trung niên vẫn nhận ra ngữ điệu lời nói, giọng người và âm thanh môi trường, nhưng kém trong việc phân biệt cao độ.
- **Tỉ lệ:** khảo sát khoảng 20.000 người bằng ba bài kiểm tra trực tuyến (Peretz và Vuvan, 2017) ước tính khoảng **1,5%**. Ước lượng cũ hơn là 4% (Kalmus và Fry, 1980, chỉ dùng một bài kiểm tra). Khoảng **46%** người thân bậc một của người mù nhạc cũng bị — dấu hiệu có yếu tố di truyền.
- **Với người dạy:** "hát lạc giọng" thường **không phải** mù nhạc; phần lớn là do thiếu luyện tập phối hợp nghe – hát. Không nên kết luận một học trò "không có tai" — xem [[luyen-tai]].

## 4. Não của người chơi nhạc
| Nghiên cứu | Phát hiện | Lưu ý |
|---|---|---|
| Elbert và cộng sự, *Science* (1995) | Vùng vỏ não biểu diễn các ngón **tay trái** lớn hơn ở người chơi đàn dây; mức độ tương quan với **tuổi bắt đầu học** | So sánh cắt ngang |
| Schlaug và cộng sự (1995) | Nửa trước **thể chai** (cầu nối hai bán cầu) lớn hơn ở 30 nhạc công so với 30 người không chơi nhạc, rõ ở người học **trước 7 tuổi** | Chưa xác định nhân – quả |
| Gaser và Schlaug, *J. Neuroscience* (2003) | Chất xám ở các vùng vận động, thính giác, thị – không gian: **nghệ sĩ phím chuyên nghiệp > nghiệp dư > không chơi nhạc** | Tác giả nghiêng về giải thích do luyện tập, nhưng thừa nhận khả năng bẩm sinh |
| **Hyde và cộng sự (2009)** | 15 trẻ học đàn phím hằng tuần khoảng **15 tháng**, so với 16 trẻ chỉ học nhạc chung ở trường: não có **thay đổi cấu trúc** ở vùng vận động tay và vùng thính giác, tương quan với tiến bộ kỹ năng | Theo dõi dọc thời gian — bằng chứng mạnh hơn về tác động của luyện tập |

Bài học: não **thích nghi với luyện tập**, đúng như cách luyện tập được mô tả ở [[phuong-phap-luyen-tap]]. Nhưng "não khác" **không** đồng nghĩa với "thông minh hơn" — xem [[hoc-nhac-va-tri-tue]].

## 5. Âm nhạc và ngôn ngữ dùng chung vùng não?
- **Maess và cộng sự (2001)** cho người nghe một chuỗi [[hop-am-ba|hợp âm]] có một hợp âm **sai chức năng** (ví dụ hợp âm [[hop-am-napoli|Napoli]] đặt ở cuối thay cho [[bac-am-giai|chủ âm]]). Não phản ứng bằng một sóng điện gọi là **ERAN**, và nguồn của nó nằm ở **vùng Broca** cùng vùng tương ứng ở bán cầu phải — vùng vốn gắn với ngữ pháp ngôn ngữ.
- **Patel (2003)** đề xuất giả thuyết **SSIRH**: âm nhạc và ngôn ngữ có **biểu diễn cú pháp riêng**, nhưng **dùng chung nguồn lực** để ghép các phần tử lại. Giả thuyết này bị phê bình: một số hiệu ứng có thể chỉ là do **chú ý**, và một số nghiên cứu fMRI thấy hai hệ thống phần lớn tách rời. Xem [[am-nhac-va-ngon-ngu]].
- Chức năng hoà âm mà não phản ứng chính là đối tượng của [[chuc-nang-hoa-am]] và [[cau-ket]].

## Đọc tiếp
[[tam-ly-hoc-am-nhac]] · [[khoa-hoc-ngau-hung]] (não khi [[ngau-hung-piano|ngẫu hứng]]) · [[tam-ly-hoc-phat-trien-am-nhac]] · [[phuong-phap-nghien-cuu-am-nhac]]
`,
  },
  {
    slug: 'hoc-nhac-va-tri-tue',
    title: 'Học nhạc có làm thông minh hơn? Hiệu ứng Mozart và chuyển giao',
    category: 'musicology',
    also: ['musicianship'],
    aliases: ['hiệu ứng Mozart', 'Mozart effect', 'học nhạc và IQ', 'chuyển giao xa', 'far transfer', 'nhạc làm trẻ thông minh', 'Rauscher', 'Sala và Gobet', 'Schellenberg'],
    summary: 'Năm 1993 một thí nghiệm nhỏ cho thấy sinh viên làm bài không gian tốt hơn trong 10 – 15 phút sau khi nghe Mozart; truyền thông biến nó thành "nghe Mozart làm trẻ thông minh". Ba thập kỷ phân tích gộp cho thấy hiệu ứng nhỏ, do tâm trạng và mức hưng phấn, và lợi ích "chuyển giao xa" của việc học nhạc lên trí tuệ vẫn đang tranh luận, có thể gần bằng không khi tính đến chất lượng nghiên cứu.',
    wiki: 'Mozart_effect',
    refs: [
      ['Wikipedia — Mozart effect', 'https://en.wikipedia.org/wiki/Mozart_effect'],
      ['Chabris (1999) — Prelude or requiem for the "Mozart effect"?, Nature 400', 'https://ideas.repec.org/a/nat/nature/v400y1999i6747d10.1038_23608.html'],
      ['Thompson, Schellenberg & Husain (2001) — Arousal, mood, and the Mozart effect, Psychological Science 12(3)', 'https://www.psychologicalscience.org/journals/psychological-science/1467-9280.00345/'],
      ['Universität Wien — Mozarts Musik macht nicht klüger (Pietschnig, Voracek & Formann 2010)', 'https://medienportal.univie.ac.at/media/aktuelle-pressemeldungen/detailansicht/artikel/mozarts-music-does-not-make-you-smarter'],
      ['Schellenberg (2004) — Music lessons enhance IQ, Psychological Science (PDF)', 'https://sites.utm.utoronto.ca/sites/sites.utm.utoronto.ca.glenn_website/files/download/SchellenbergPS2004.pdf'],
      ['Steele — critique of Schellenberg (2004) (PDF)', 'https://www.appstate.edu/~steelekm/documents/Steele2005-2006SRMHP-music-iq.pdf'],
      ['Sala & Gobet (2017) — When the music\'s over, Educational Research Review 20', 'https://livrepository.liverpool.ac.uk/3005023/'],
      ['Sala & Gobet (2020) — Cognitive and academic benefits of music training with children: a multilevel meta-analysis, Memory & Cognition', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7683441'],
      ['Bigand & Tillmann (2022) — reanalysis of Sala & Gobet (PDF)', 'https://lead.ube.fr/wp-content/uploads/2023/09/Bigand__Tillmann_2022.pdf'],
      ['Connecticut OLR (1998) — report on the Georgia classical music proposal', 'https://www.cga.ct.gov/PS98/rpt%5Colr%5Chtm/98-R-0888.htm'],
    ],
    body: `
Phụ huynh hay hỏi: "Cho con học đàn có làm con học giỏi hơn không?" Đây là một câu hỏi **thực nghiệm**, và câu trả lời của khoa học đã thay đổi qua ba mươi năm. Bài này là một ví dụ điển hình về cách một kết quả nhỏ bị phóng đại, rồi được kiểm tra lại — xem thêm [[thiet-ke-nghien-cuu-thuc-nghiem]].

## 1. Thí nghiệm năm 1993
Rauscher, Shaw và Ky (*Nature*, 1993) cho **36 sinh viên** nghe 10 phút Sonata cho hai [[dan-piano|đàn piano]] Rê trưởng K. 448 của [[wolfgang-amadeus-mozart|Mozart]], so với nghe băng thư giãn và ngồi im lặng. Sau khi nghe Mozart, điểm các bài **suy luận không gian** (gấp giấy, cắt hình) cao hơn — các bản tóm tắt thường ghi khoảng 8 – 9 điểm khi quy đổi. Hiệu ứng **chỉ kéo dài khoảng 10 – 15 phút**. Các tác giả **không** khẳng định chỉ số IQ chung tăng lên.

## 2. Từ phòng thí nghiệm đến chính sách
Truyền thông nhanh chóng biến kết quả thành "nghe Mozart làm em bé thông minh". Tháng 1/1998, thống đốc bang Georgia (Mỹ) Zell Miller đề xuất ngân sách khoảng 105.000 đô la mỗi năm để tặng mỗi trẻ sơ sinh một đĩa nhạc cổ điển; hãng Sony đề nghị tặng miễn phí. (Các nguồn không thống nhất về việc khoản ngân sách cuối cùng có được thông qua hay không.)

## 3. Kiểm tra lại: hiệu ứng nghe nhạc
- **Chabris (1999)** gộp 16 nghiên cứu: nếu có cải thiện thì **rất nhỏ**, chỉ ở một loại bài (xoay hình trong đầu), không phải trí tuệ nói chung. Ông giải thích bằng sự **hưng phấn do thích thú**.
- **Thompson, Schellenberg và Husain (2001)** so một sonata Mozart (nhanh, [[am-giai-truong|giọng trưởng]]), Adagio của Albinoni (chậm, [[am-giai-thu|giọng thứ]]) và im lặng. Chỉ nhóm Mozart hơn nhóm im lặng, nhưng khi **kiểm soát thống kê mức hưng phấn và tâm trạng**, lợi thế **biến mất**. Nói cách khác, "hiệu ứng Mozart" là hiệu ứng của **tâm trạng tốt** — điều mà [[cam-xuc-am-nhac|nhịp độ và trưởng – thứ]] tác động.
- **Pietschnig, Voracek và Formann (2010)** gộp gần 40 nghiên cứu, hơn 3.000 người. So với im lặng, Mozart K. 448 cho hiệu ứng nhỏ (**d = 0,37**); so với nhạc khác, gần như không đáng kể (**d = 0,15**). Họ còn phát hiện **thiên lệch xuất bản** (nghiên cứu có kết quả dương tính dễ được in hơn) và các nghiên cứu từ **chính phòng thí nghiệm của Rauscher** cho hiệu ứng lớn hơn hẳn. Kết luận: hầu như không còn bằng chứng cho một hiệu ứng Mozart riêng biệt.

## 4. Học nhạc lâu dài thì sao?
Nghe nhạc 10 phút khác với **học nhạc nhiều năm**. Câu hỏi thứ hai được gọi là **chuyển giao xa** (*far transfer*): kỹ năng âm nhạc có lan sang toán, đọc, trí tuệ chung không?
- **Schellenberg (2004)** chia ngẫu nhiên **144 trẻ 6 tuổi** vào bốn nhóm: học đàn phím, học hát theo phương pháp [[phuong-phap-giao-duc-am-nhac|Kodály]], học kịch, và không học, trong **36 tuần**. Hai nhóm học nhạc tăng IQ nhiều hơn, nhưng mức chênh **nhỏ**; nhóm kịch tiến bộ về hành vi xã hội. Một phân tích phê bình của Steele cho rằng việc gộp hai nhóm nhạc và hai nhóm đối chứng (cho ra mức chênh khoảng 2,7 điểm) là không hợp lý.
- **Sala và Gobet (2017)**, phân tích gộp 38 nghiên cứu: hiệu ứng chung nhỏ (**d = 0,16**), và **càng giảm khi thiết kế nghiên cứu càng chặt chẽ**.
- **Sala và Gobet (2020)**, 54 nghiên cứu, gần 7.000 trẻ: khi tính đến chất lượng thiết kế, hiệu ứng chung **xấp xỉ bằng 0**. Chỉ những nghiên cứu không phân nhóm ngẫu nhiên, với nhóm đối chứng thụ động, mới cho hiệu ứng khoảng 0,20.
- **Bigand và Tillmann (2022)** phân tích lại **chính dữ liệu đó**, tách chuyển giao gần và xa, và thu được hiệu ứng nhỏ nhưng có ý nghĩa thống kê (**g = 0,234**). Cuộc tranh luận vẫn đang tiếp tục.

::bars Mozart_vs_im_lặng_(2010)=0.37 Mozart_vs_nhạc_khác_(2010)=0.15 Học_nhạc_(2017)=0.16 Học_nhạc,_thiết_kế_chặt_(2020)=0 Phân_tích_lại_(2022)=0.234 max=0.5 | Độ lớn hiệu ứng trong các phân tích gộp được nêu trong bài (d hoặc g; 0,2 thường được coi là "nhỏ"). Năm 2020 ghi là 0 vì nghiên cứu báo cáo hiệu ứng "xấp xỉ bằng 0"

## 5. Nên nói gì với phụ huynh
*(Gợi ý của thư viện, dựa trên các kết quả trên.)*
1. **Đừng hứa** học đàn làm con giỏi toán hay tăng IQ: bằng chứng **yếu và còn tranh luận**.
2. Điều chắc chắn hơn là **chuyển giao gần**: học đàn cải thiện kỹ năng âm nhạc, [[luyen-tai|nghe]], [[doc-not-nhanh|đọc nhạc]], phối hợp tay — và não thay đổi theo luyện tập ([[than-kinh-hoc-am-nhac]]).
3. Lý do tốt nhất để học nhạc là **chính âm nhạc**: niềm vui, khả năng biểu đạt, cộng đồng. Đó cũng là động lực bền nhất ([[giang-day-hieu-qua]]).
`,
  },
  {
    slug: 'tam-ly-hoc-phat-trien-am-nhac',
    title: 'Tâm lý học phát triển âm nhạc: trẻ nghe và học nhạc theo tuổi',
    category: 'musicology',
    also: ['musicianship'],
    aliases: ['tâm lý học phát triển âm nhạc', 'developmental music psychology', 'trẻ sơ sinh nghe nhạc', 'phát triển âm nhạc ở trẻ', 'thấm văn hoá âm nhạc', 'enculturation', 'Trehub', 'Trainor', 'lullaby'],
    summary: 'Trẻ sơ sinh đã nhận ra đường nét giai điệu và nhớ giai điệu theo cao độ tương đối; 6 tháng tuổi còn nhận được nhịp lẻ kiểu Balkan nhưng đến 12 tháng thì "khớp" vào nhịp của văn hoá mình; khoảng 5 tuổi trẻ biết nốt nào thuộc giọng, khoảng 7 tuổi cảm được hoà âm. Bài tổng hợp các mốc này và hệ quả cho việc dạy trẻ.',
    wiki: 'Music_psychology',
    refs: [
      ['Trehub, Bull & Thorpe (1984) — Infants\' perception of melodies: the role of melodic contour, Child Development 55(3)', 'https://sites.utm.utoronto.ca/sites/sites.utm.utoronto.ca.glenn_website/files/download/SandraTrehub.pdf'],
      ['Plantinga & Trainor (2005) — Memory for melody: infants use a relative pitch code, Cognition 98', 'https://trainorlab.mcmaster.ca/publications/PlantingaTrainor2005'],
      ['Zentner & Kagan (1996) — Perception of music by infants, Nature 383', 'https://www.nature.com/articles/383029a0'],
      ['Trainor, Tsang & Cheung (2002) — Preference for sensory consonance in 2- and 4-month-old infants, Music Perception', 'https://trainorlab.mcmaster.ca/publications/TrainorEtAl22002'],
      ['Frontiers in Psychology (2024) — review discussing Plantinga & Trehub (2014)', 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1270114/full'],
      ['MIT News — McDermott et al. (2016), Tsimane\' indifference to dissonance', 'https://news.mit.edu/2016/music-tastes-cultural-not-hardwired-brain-0713'],
      ['Hannon & Trehub (2005) — Metrical categories in infancy and adulthood, Psychological Science 16(1)', 'https://www.psychologicalscience.org/journals/psychological-science/j.0956-7976.2005.00779.x/'],
      ['Hannon & Trehub (2005) — Tuning in to musical rhythms: infants learn more readily than adults, PNAS 102(35)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1194930'],
      ['Mehr et al. (2018) — Form and function in human song, Current Biology 28(3) (PDF)', 'https://projects.iq.harvard.edu/sites/projects.iq.harvard.edu/files/epl/files/mehr_et_al_2018_cb.pdf'],
      ['Trainor & Trehub (1994) — Key membership and implied harmony in Western tonal music: developmental perspectives, Perception & Psychophysics 56(2)', 'https://trainorlab.mcmaster.ca/publications/TrainorTrehub1994'],
      ['Deutsch et al. (2006) — Absolute pitch among American and Chinese conservatory students, JASA 119(2)', 'https://acoustics.org/pressroom/httpdocs/148th/deutsch.html'],
      ['University of Melbourne — McPherson (2005), From child to musician, Psychology of Music 33(1)', 'https://findanexpert.unimelb.edu.au/scholarlywork/1231882-from-child-to-musician--skill-development-during-the-beginning-stages-of-learning-an-instrument'],
    ],
    body: `
**Tâm lý học phát triển âm nhạc** hỏi: khả năng âm nhạc xuất hiện **khi nào**, cái gì **có sẵn từ đầu**, cái gì **học từ văn hoá**? Câu trả lời giúp người dạy chọn đúng việc cho đúng tuổi. Phần thực hành dạy trẻ ở [[day-tre-em]]; lý thuyết học tập của Gordon ở [[ly-thuyet-hoc-am-nhac-gordon]].

## Bảng tóm tắt theo tuổi
*(Mỗi dòng dựa trên một nghiên cứu cụ thể bên dưới; tuổi là tuổi của mẫu nghiên cứu, không phải mốc cứng.)*
| Tuổi | Khả năng | Nghiên cứu |
|---|---|---|
| Sơ sinh – 1 tuổi | Dựa vào **[[giai-dieu|đường nét giai điệu]]** (lên, xuống) để nhận ra giai điệu | Trehub, Bull & Thorpe (1984) |
| 6 tháng | Nhớ giai điệu theo **[[cao-do|cao độ]] tương đối**: giai điệu [[dich-giong|dịch giọng]] vẫn được nhận là "quen" | Plantinga & Trainor (2005) |
| 6 tháng | Nhận ra lỗi nhịp cả trong **[[so-chi-nhip|nhịp đơn]]** lẫn **nhịp lẻ phức tạp** kiểu Balkan | Hannon & Trehub (2005) |
| 12 tháng | Đã "khớp" vào nhịp của văn hoá mình; nghe ít tuần nhạc Balkan ở nhà thì khôi phục được — người lớn thì không | Hannon & Trehub (2005, *PNAS*) |
| 5 tuổi | Biết nốt nào **thuộc giọng**, nốt nào lạc giọng | Trainor & Trehub (1994) |
| 7 tuổi | Cảm được **hoà âm ngầm**: nhận ra nốt sai [[hop-am-ba|hợp âm]] dù vẫn thuộc giọng | Trainor & Trehub (1994) |

## 1. Giai điệu: đường nét và cao độ tương đối
Trẻ nhỏ coi một giai điệu **dịch giọng** là "cùng một giai điệu", và nhận ra thay đổi **đường nét** dễ hơn thay đổi [[quang|quãng]] chính xác (Trehub và cộng sự, 1984). Trẻ 6 tháng được nghe một giai điệu suốt 7 ngày; ngày thứ 8, trẻ vẫn nhận ra nó dù được dịch lên một quãng 5 hay một quãng 4 tăng (Plantinga và Trainor, 2005). Nghĩa là **cao độ tương đối** là cách nghe tự nhiên — nền tảng của [[xuong-am|Đô di động]] và [[luyen-tai|cảm âm tương đối]].

## 2. Thuận và nghịch: bẩm sinh hay học được?
- Zentner và Kagan (1996): 32 trẻ 4 tháng nhìn lâu hơn và ít quấy hơn khi nghe phiên bản **thuận** của giai điệu so với phiên bản đầy quãng 2 thứ. Trainor và cộng sự (2002) thấy kết quả tương tự ở trẻ 2 và 4 tháng.
- Nhưng: một nghiên cứu lặp lại (Plantinga và Trehub, 2014) **không** tìm thấy ưu tiên này — trẻ chỉ thích cái **đã quen**. Người Tsimane' ở vùng Amazon, ít tiếp xúc với âm nhạc phương Tây, **không ưu tiên hợp âm thuận** (McDermott và cộng sự, *Nature*, 2016), dù vẫn ghét độ **nhám**.
- Kết luận thận trọng: cảm nhận [[thuan-nghich|thuận – nghịch]] có phần **học từ văn hoá** nhiều hơn người ta từng nghĩ. Xem [[cam-nhan-am-thanh]].

## 3. Nhịp: cửa sổ học tập sớm
Người lớn Bắc Mỹ chỉ nhận ra lỗi nhịp trong **nhịp đơn**; người lớn Bulgaria và Macedonia nhận ra lỗi trong cả nhịp đơn lẫn [[nhip-hon-hop|nhịp lẻ]] kiểu Balkan (ví dụ 7/8). Trẻ Bắc Mỹ 6 tháng tuổi làm được **cả hai**, nhưng đến 12 tháng thì giống người lớn Bắc Mỹ. Nghe nhạc Balkan một thời gian ngắn ở nhà khôi phục được khả năng này ở trẻ 12 tháng, **nhưng không ở người lớn** (Hannon và Trehub, 2005). Bài học: **nghe đa dạng từ sớm** mở rộng "bộ lọc" nhịp. Xem [[cam-nhan-phach]].

## 4. Hát ru: phổ quát
Mehr và cộng sự (2018) cho 750 người nghe trên mạng ở 60 quốc gia nghe các đoạn 14 giây trích từ bài hát của 86 xã hội, phần lớn là xã hội quy mô nhỏ. Người nghe đoán được **chức năng** của bài (múa, [[hat-ru|ru con]], chữa bệnh, tình yêu) tốt hơn ngẫu nhiên. Hát cho trẻ nhỏ là một hành vi có ở **mọi nền văn hoá** — xem [[am-nhac-hoc-tien-hoa]].

## 5. Giọng và hoà âm: thấm văn hoá
Trainor và Trehub (1994): trẻ **5 tuổi** nhận ra nốt **lạc giọng** tốt hơn nốt trong giọng; trẻ **7 tuổi** (và người lớn) còn nhận ra nốt **sai hợp âm ngầm**. Như vậy cảm giác [[dieu-tinh|giọng]] có trước cảm giác [[chuc-nang-hoa-am|hoà âm]]. Ở trẻ 4 tuổi, phản ứng điện não đã có dù hành vi chưa thể hiện (Corrigall và Trainor, 2014).

## 6. Cảm âm tuyệt đối và ngôn ngữ thanh điệu
Deutsch và cộng sự (2006) so sinh viên nhạc viện nói tiếng Quan Thoại (88 người) với sinh viên Mỹ (115 người): ở cả hai nhóm, **bắt đầu học càng sớm** thì tỉ lệ [[cao-do-tuyet-doi|cảm âm tuyệt đối]] càng cao, và tỉ lệ ở nhóm nói **ngôn ngữ thanh điệu** cao hơn hẳn ở mọi độ tuổi bắt đầu. Các tác giả đề xuất một **giai đoạn nhạy cảm** gắn với việc học nói. Tiếng Việt cũng là ngôn ngữ thanh điệu — xem [[am-nhac-va-ngon-ngu]].

## 7. Những năm đầu học nhạc cụ
McPherson (2005) theo dõi **157 trẻ** 7 – 9 tuổi trong 3 năm đầu học nhạc cụ, đo năm kỹ năng: chơi bài đã tập, [[thi-tau|thị tấu]], [[hoc-thuoc-bai|chơi thuộc lòng]], chơi theo tai, [[ngau-hung-piano|ngẫu hứng]]. Phân tích về động lực và cam kết của trẻ ở [[giang-day-hieu-qua]].

## Hệ quả khi dạy
*(Gợi ý của thư viện.)*
1. **Nghe trước, đọc sau**, đúng với trình tự phát triển: đường nét → giọng → hoà âm.
2. Cho trẻ nghe **nhiều kiểu nhịp, nhiều nền văn hoá** từ sớm.
3. Dạy theo **cao độ tương đối** (hát theo bậc, dịch giọng) trước khi đòi hỏi [[not-nhac|tên nốt]] tuyệt đối.
4. Với trẻ dưới 5 tuổi, đừng chờ đợi trẻ "nghe ra" nốt sai hoà âm — đó chưa phải lỗi của trẻ.
`,
  },
  {
    slug: 'am-nhac-hoc-tien-hoa',
    title: 'Nguồn gốc tiến hoá và tính phổ quát của âm nhạc',
    category: 'musicology',
    also: ['philosophy'],
    aliases: ['âm nhạc học tiến hoá', 'evolutionary musicology', 'sinh học âm nhạc', 'biomusicology', 'nguồn gốc âm nhạc', 'origins of music', 'tính phổ quát của âm nhạc', 'music universals', 'auditory cheesecake', 'Snowball', 'Natural History of Song'],
    summary: 'Vì sao con người có âm nhạc? Bài trình bày các giả thuyết (Darwin: chọn lọc giới tính; Pinker: "bánh kem cho tai"; gắn kết xã hội; tín hiệu đáng tin) và bằng chứng mới về tính phổ quát: âm nhạc có ở mọi xã hội được khảo sát, người nghe đoán được chức năng bài hát của văn hoá khác, và một số đặc điểm xuất hiện thống kê ở khắp nơi.',
    wiki: 'Evolutionary_musicology',
    refs: [
      ['Frontiers in Psychology (2022) — Darwin\'s sexual selection hypothesis revisited', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9453251/'],
      ['SAGE Encyclopedia — Auditory cheesecake', 'https://sk.sagepub.com/ency/edvol/embed/music-in-the-social-and-behavioral-sciences/chpt/auditory-cheesecake'],
      ['Savage et al. (2021) — Music as a coevolved system for social bonding, Behavioral and Brain Sciences 44', 'https://resolve.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/music-as-a-coevolved-system-for-social-bonding/F1ACB3586FD3DD5965E56021F506BC4F'],
      ['Mehr et al. (2021) — Origins of music in credible signaling, Behavioral and Brain Sciences 44', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7907251'],
      ['Savage, Brown, Sakai & Currie (2015) — Statistical universals reveal the structures and functions of human music, PNAS 112(29)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4517276'],
      ['Mehr et al. (2019) — Universality and diversity in human song, Science 366', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7001657'],
      ['Mehr et al. (2018) — Form and function in human song, Current Biology 28(3) (PDF)', 'https://projects.iq.harvard.edu/sites/projects.iq.harvard.edu/files/epl/files/mehr_et_al_2018_cb.pdf'],
      ['Wallin, Merker & Brown (eds.), The Origins of Music (MIT Press, 2000) — catalogue', 'https://carta.anthropogeny.org/node/1992'],
      ['Wikipedia — Snowball (cockatoo)', 'https://en.wikipedia.org/wiki/Snowball_(cockatoo)'],
      ['Schachner et al. (2009) — Spontaneous motor entrainment to music in multiple vocal mimicking species, Current Biology 19(10)', 'https://dspace.mit.edu/handle/1721.1/96194'],
    ],
    body: `
Âm nhạc tốn thời gian, công sức, không trực tiếp giúp ăn no hay tránh thú dữ. Vậy vì sao **mọi xã hội** đều có nó? Đây là câu hỏi của **âm nhạc học tiến hoá**, một nhánh của **sinh học âm nhạc** (*biomusicology*). Cột mốc của lĩnh vực là tuyển tập *The Origins of Music* (Wallin, Merker và Brown biên tập, MIT Press, 2000), xuất phát từ một hội thảo ở Fiesole năm 1997. Xem khung chung ở [[am-nhac-hoc-he-thong]].

## Bốn giả thuyết lớn
| Giả thuyết | Người đề xuất | Ý chính |
|---|---|---|
| **Chọn lọc giới tính** | Darwin, *The Descent of Man* (1871) | [[not-nhac|Nốt nhạc]] và [[tiet-tau|nhịp điệu]] xuất hiện ở tổ tiên loài người "để quyến rũ người khác giới", giống tiếng chim hót. Quan điểm này đối lập với Herbert Spencer, người cho rằng âm nhạc sinh ra từ ngữ điệu xúc cảm của lời nói |
| **Sản phẩm phụ** ("bánh kem cho tai") | Steven Pinker, *How the Mind Works* (1997) | Âm nhạc không được chọn lọc vì chính nó; nó là một "món ngọt" tận dụng các năng lực có sẵn vì lý do khác (ngôn ngữ, nghe âm thanh môi trường, vận động) |
| **Gắn kết xã hội** | Savage và cộng sự, *Behavioral and Brain Sciences* (2021) | Âm nhạc giúp con người gắn bó trong những nhóm **lớn hơn** mức mà việc chải lông cho nhau ở các loài linh trưởng cho phép; tiến hoá cùng văn hoá (đồng tiến hoá gen – văn hoá) |
| **Tín hiệu đáng tin** | Mehr và cộng sự, cùng số tạp chí (2021) | Biểu diễn nhịp nhàng, đồng bộ của một nhóm là tín hiệu **khó giả** về sức mạnh và khả năng phối hợp của nhóm; [[hat-ru|hát ru]] là tín hiệu về sự chú ý của cha mẹ với trẻ sơ sinh vốn rất cần chăm sóc |

Hai bài năm 2021 được đăng thành một cặp tranh luận, kèm hơn một trăm bình luận của các nhà nghiên cứu khác. **Chưa có kết luận cuối cùng.** Nhóm "tín hiệu đáng tin" cho rằng giả thuyết sản phẩm phụ không giải thích được toàn bộ bằng chứng.

## Âm nhạc có phổ quát không?
- **Mehr và cộng sự (2018):** 750 người nghe trên mạng ở 60 quốc gia nghe các đoạn 14 giây của bài hát múa, ru con, chữa bệnh, tình yêu từ 86 xã hội phần lớn quy mô nhỏ. Họ đoán chức năng bài hát **tốt hơn ngẫu nhiên** và nhất quán giữa các nền văn hoá. Thí nghiệm được **đăng ký trước** ([[thiet-ke-nghien-cuu-thuc-nghiem]]).
- **Mehr và cộng sự (*Science*, 2019)** — dự án *Natural History of Song*: âm nhạc có ở **cả 315 xã hội** được khảo sát; bài hát gắn với những bối cảnh lặp lại ở khắp nơi (chăm trẻ, chữa bệnh, múa, tình yêu), và đặc điểm âm thanh dự đoán được bối cảnh. Sự đa dạng **bên trong** một xã hội còn lớn hơn sự khác biệt **giữa** các xã hội.
- **Savage và cộng sự (*PNAS*, 2015)** phân tích 304 bản thu từ khắp thế giới: **không có** đặc điểm nào là phổ quát tuyệt đối, nhưng có **18 đặc điểm phổ quát thống kê** (xuất hiện ở hầu hết các vùng), cùng một mạng lưới 10 đặc điểm hay đi kèm nhau. Ví dụ được các bản tóm tắt nêu: [[quang|quãng]] giai điệu nhỏ, phách đều, chia phách thành 2 hoặc 3. Các tác giả giải thích chúng chủ yếu bằng chức năng **phối hợp nhóm**.

Kết nối: quãng nhỏ trong giai điệu → [[giai-dieu]]; phách đều → [[cam-nhan-phach]]; hát ru → [[tam-ly-hoc-phat-trien-am-nhac]].

## Động vật có "nhạc cảm" không?
- Con vẹt mào **Snowball** gật đầu khớp phách khi nghe một bài [[nhac-pho-thong-the-ky-20|nhạc pop]] được tăng giảm [[nhip-do|nhịp độ]] ([[am-nhac-va-ngon-ngu|Patel]] và cộng sự, 2009) — dù chỉ khớp **từng lúc**.
- Phân tích hàng nghìn video trên mạng (Schachner và cộng sự, 2009): bằng chứng đồng bộ với nhịp chỉ tìm thấy ở **các loài biết bắt chước tiếng** — 14 loài vẹt và voi châu Á. Điều này ủng hộ ý tưởng rằng khả năng **học tiếng** và khả năng **đồng bộ nhịp** có liên hệ.

## Ý nghĩa với người dạy
*(Nhận xét của thư viện.)* Dù giả thuyết nào đúng, các bằng chứng đều chỉ về một hướng: âm nhạc gắn với **làm cùng nhau** — hát chung, múa, phối hợp. Chơi [[phoi-hop-hai-tay|bốn tay]], đệm cho người hát ([[dem-hat-piano]]), [[jam-session|chơi nhóm]] không phải là "phụ", mà chạm vào chức năng cốt lõi của âm nhạc.
`,
  },
  {
    slug: 'am-nhac-va-ngon-ngu',
    title: 'Âm nhạc và ngôn ngữ — và thanh điệu tiếng Việt',
    category: 'musicology',
    also: ['listening'],
    aliases: ['âm nhạc và ngôn ngữ', 'music and language', 'thanh điệu và giai điệu', 'tone-melody', 'ngôn ngữ thanh điệu', 'tone language', 'giả thuyết OPERA', 'OPERA hypothesis', 'Patel', 'phổ nhạc lời Việt', 'ngược dấu', 'thanh bằng thanh trắc'],
    summary: 'Âm nhạc và ngôn ngữ đều là âm thanh có tổ chức: có cao độ, nhịp điệu, cú pháp. Bài tổng hợp các nghiên cứu chính (Patel 2008, giả thuyết OPERA 2011), mối liên hệ giữa ngôn ngữ thanh điệu và cảm âm tuyệt đối, và nguyên tắc "tránh đi ngược thanh điệu" khi viết giai điệu cho lời trong các ngôn ngữ có thanh điệu như tiếng Việt.',
    wiki: 'Music_and_language',
    refs: [
      ['Music Theory Online — review of Patel, Music, Language, and the Brain (OUP, 2008)', 'https://mtosmt.org/issues/mto.09.15.5/mto.09.15.5.shanahan.html'],
      ['Patel (2011) — Why would musical training benefit the neural encoding of speech? The OPERA hypothesis, Frontiers in Psychology 2:142', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3128244'],
      ['ASA press room — Deutsch et al. (2006), absolute pitch and tone language', 'https://acoustics.org/pressroom/httpdocs/148th/deutsch.html'],
      ['Ladd & Kirby (2020) — Tone–melody matching in tone-language singing, Oxford Handbook of Language Prosody (preprint)', 'https://www.phonetik.uni-muenchen.de/~jkirby/docs/ladd2018tone.pdf'],
      ['ISCA — TAL 2016 proceedings (Kirby & Ladd, Tone-melody correspondence in Vietnamese popular song)', 'https://www.isca-archive.org/tal_2016/index.html'],
      ['Edinburgh DataShare — Vietnamese tân nhạc tone–melody dataset (Kirby & Ladd)', 'https://datashare.ed.ac.uk/handle/10283/2047'],
      ['ISCA — Ho (2006), tone–melody interface of Cantonese popular songs (TAL 2006)', 'https://www.isca-archive.org/tal_2006/ho06_tal.html'],
      ['Viện Âm nhạc — Hoàng Kiều, Thanh điệu tiếng Việt và âm nhạc cổ truyền', 'https://vienamnhac.vn/publication/books/vietnamese-intonation-and-traditional-music'],
      ['Maess et al. (2001) — Musical syntax is processed in Broca\'s area, Nature Neuroscience 4(5)', 'https://www.nature.com/articles/nn0501_540'],
    ],
    body: `
Âm nhạc và ngôn ngữ đều là **âm thanh được tổ chức theo thời gian**: có [[cao-do|cao độ]] ([[giai-dieu|giai điệu]], ngữ điệu), [[tiet-tau|nhịp điệu]], và cách các đơn vị ghép thành chuỗi có nghĩa (cú pháp). Cuốn sách nền tảng là *Music, Language, and the Brain* của Aniruddh Patel (Oxford University Press, 2008), lần lượt so sánh âm thanh, nhịp điệu, giai điệu, cú pháp, ý nghĩa và tiến hoá ở hai hệ thống. Về câu hỏi "âm nhạc có phải là một ngôn ngữ không" dưới góc nhìn triết học, xem [[y-nghia-am-nhac]].

## 1. Cú pháp: chung hay riêng?
[[hop-am-ba|Hợp âm]] sai chức năng làm não phản ứng ở vùng Broca (Maess và cộng sự, 2001); Patel đề xuất hai hệ thống **dùng chung nguồn lực ghép nối** nhưng có biểu diễn riêng. Chi tiết và các phê bình ở [[than-kinh-hoc-am-nhac]].

## 2. Học nhạc có giúp nghe lời nói? Giả thuyết OPERA
Patel (2011) giải thích vì sao luyện nhạc có thể làm não mã hoá **lời nói** tốt hơn, với năm điều kiện:
| Chữ | Điều kiện | Nghĩa |
|---|---|---|
| **O** | *Overlap* — chồng lấn | Hai hệ thống dùng chung mạng thần kinh xử lý một đặc điểm âm thanh (ví dụ độ tuần hoàn của sóng) |
| **P** | *Precision* — chính xác | Âm nhạc đòi hỏi độ chính xác cao hơn lời nói |
| **E** | *Emotion* — cảm xúc | Hoạt động âm nhạc gắn với cảm xúc tích cực mạnh |
| **R** | *Repetition* — lặp lại | Luyện tập lặp lại thường xuyên |
| **A** | *Attention* — chú ý | Đòi hỏi sự chú ý tập trung |

Đây là một dạng **chuyển giao gần**, khác với tranh luận "học nhạc có làm thông minh hơn" ([[hoc-nhac-va-tri-tue]]).

## 3. Ngôn ngữ thanh điệu và cảm âm tuyệt đối
Sinh viên nhạc viện nói tiếng Quan Thoại có tỉ lệ [[cao-do-tuyet-doi|cảm âm tuyệt đối]] cao hơn hẳn sinh viên Mỹ ở cùng độ tuổi bắt đầu học (Deutsch và cộng sự, 2006). Các tác giả cho rằng việc học một ngôn ngữ mà **cao độ phân biệt nghĩa** từ nhỏ tạo điều kiện cho cảm âm tuyệt đối. Tiếng Việt cũng là ngôn ngữ thanh điệu. (Bài này không nêu tỉ lệ phần trăm cụ thể, vì các nguồn thứ cấp trích dẫn không thống nhất.)

## 4. Viết giai điệu cho lời có thanh điệu
Trong ngôn ngữ thanh điệu, đổi cao độ có thể đổi **nghĩa của từ**: "ma, má, mà, mả, mã, mạ" là sáu từ khác nhau. Vậy khi hát, giai điệu "đè" lên thanh điệu thế nào?
- **Nguyên tắc chung** được tổng kết từ khoảng 15 – 20 ngôn ngữ thanh điệu ở châu Á và châu Phi (Ladd và Kirby, 2020): xét từng **cặp âm tiết liền nhau**. Nếu thanh điệu đi lên mà giai điệu đi xuống (hoặc ngược lại), đó là cách đặt **ngược chiều** (*contrary*). Cách đặt ngược chiều **hiếm hơn hẳn** so với ngẫu nhiên. Các cách khác — **cùng chiều** hoặc **lệch** (một bên đi, một bên đứng) — đều được chấp nhận.
- Mức độ chặt chẽ **khác nhau theo ngôn ngữ và [[the-loai-am-nhac|thể loại]]**: [[nhac-pho-thong-the-ky-20|nhạc pop]] tiếng Quảng Đông khớp thanh điệu rất chặt (Ho, 2006).
- **Tiếng Việt:** Kirby và Ladd (2016) xây dựng một kho dữ liệu gồm **20 bài tân nhạc** (có [[truong-do|trường độ]] nốt, ranh giới câu, phiên âm, thanh điệu), công khai trên kho dữ liệu của Đại học Edinburgh. *(Thư viện chưa đọc được kết quả chi tiết theo từng thanh, nên không nêu số liệu.)* Ở Việt Nam, công trình tiên phong là *Thanh điệu tiếng Việt và âm nhạc cổ truyền* của Hoàng Kiều (Viện Âm nhạc), coi thanh điệu là một yếu tố cấu trúc của âm nhạc truyền thống.

### Sáu thanh tiếng Việt (giọng Bắc) — mô tả gần đúng
*(Mô tả phổ thông theo cao độ; lưu ý nghiên cứu ngữ âm, như của Andrea Hoa Pham, cho thấy **chất giọng** — hơi thở, thanh quản — cũng quan trọng không kém cao độ.)*
| Thanh | Nhóm | Đường nét cao độ (gần đúng) |
|---|---|---|
| ngang | bằng | ngang, ở mức giữa |
| huyền | bằng | thấp, đi xuống nhẹ |
| sắc | trắc | lên cao |
| hỏi | trắc | xuống rồi lên |
| ngã | trắc | lên, có chỗ ngắt giọng |
| nặng | trắc | thấp, ngắn, tắc lại |

### Áp dụng khi phổ nhạc hay đệm hát
*(Gợi ý của thư viện, suy ra từ nguyên tắc "tránh ngược chiều"; không phải luật của một trường phái cụ thể.)*
1. Với mỗi cặp chữ liền nhau, xem thanh điệu đi **lên** hay **xuống** (ví dụ "đi về": ngang → huyền, đi xuống).
2. Tránh cho giai điệu đi **ngược** hướng đó (ở ví dụ trên, tránh nhảy **lên** ở chữ "về"), nhất là ở chữ quan trọng, để người nghe không hiểu sai lời.
3. Giữ nguyên nốt (lệch) thường là lựa chọn an toàn.
4. Khi đệm, đừng "sửa" giai điệu của ca sĩ theo hoà âm nếu làm hỏng thanh điệu — xem [[dem-hat-hien-dai]], [[tan-nhac-viet-nam]].
`,
  },
  {
    slug: 'am-nhac-tri-lieu',
    title: 'Âm nhạc trị liệu: định nghĩa và bằng chứng',
    category: 'musicology',
    aliases: ['âm nhạc trị liệu', 'liệu pháp âm nhạc', 'music therapy', 'neurologic music therapy', 'âm nhạc trị liệu thần kinh', 'melodic intonation therapy', 'kích thích thính giác nhịp điệu', 'rhythmic auditory stimulation', 'RAS'],
    summary: 'Âm nhạc trị liệu là việc nhà trị liệu được đào tạo dùng âm nhạc có mục tiêu trong một mối quan hệ trị liệu. Bài trình bày các định nghĩa chính thức (AMTA, WFMT 2011), bằng chứng từ các tổng quan Cochrane (trầm cảm, tự kỷ, ung thư, tổn thương não), các kỹ thuật dựa trên nhịp điệu và giai điệu, và ranh giới giữa dạy nhạc với trị liệu.',
    wiki: 'Music_therapy',
    refs: [
      ['CBMT & AMTA — Scope of Music Therapy Practice (PDF)', 'https://www.cbmt.org/wp-content/uploads/2019/10/CBMT-AMTA-Scope-of-Music-Therapy-Practice.pdf'],
      ['WFMT — Announcing WFMT\'s new definition of music therapy (2011)', 'https://www.wfmt.info/post/announcing-wfmts-new-definition-of-music-therapy'],
      ['Cochrane — Aalbers et al. (2017), Music therapy for depression', 'https://www.cochrane.org/evidence/CD004517_music-therapy-depression'],
      ['Cochrane — Geretsegger et al. (2022), Music therapy for autistic people', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9082683/'],
      ['Cochrane — Bradt et al. (2016), Music interventions for cancer patients', 'https://www.cochrane.org/about-us/news/featured-review-music-interventions-improving-psychological-and-physical-outcomes-cancer'],
      ['Magee et al. (2017) — Music interventions for acquired brain injury, Cochrane (PDF)', 'https://www.rhn.org.uk/wp-content/uploads/2017/10/Magee-at-al-2017-Cochrane.pdf'],
      ['Thaut et al. (1996) — Rhythmic auditory stimulation in gait training for Parkinson\'s disease patients, Movement Disorders 11(2)', 'https://pubmed.ncbi.nlm.nih.gov/8684391/'],
      ['LaGasse & Thaut (2013) — on Neurologic Music Therapy (PDF)', 'https://docstore.library.uvic.ca/Serials/Titles/Music-and-medicine/2013%205-4/217-291-1-SM.pdf'],
      ['ASHA — reference list including Albert, Sparks & Helm (1973), Melodic intonation therapy', 'https://pubs.asha.org/doi/10.1044/2018_AJSLP-17-0030'],
      ['Britannica — Music therapy', 'https://www.britannica.com/topic/music-therapy'],
    ],
    body: `
**Âm nhạc trị liệu** là một nghề ứng dụng của [[tam-ly-hoc-am-nhac|tâm lý học]] và [[than-kinh-hoc-am-nhac|khoa học thần kinh]] về âm nhạc. Bài tổng quan [[khoa-hoc-bieu-dien]] đã nhắc lịch sử thể chế của nghề ở Mỹ (hiệp hội đầu tiên năm 1950). Bài này đi vào **định nghĩa** và **bằng chứng**.

## Định nghĩa
- **Hiệp hội Âm nhạc Trị liệu Mỹ (AMTA):** âm nhạc trị liệu là việc dùng các can thiệp âm nhạc **trên lâm sàng và dựa trên bằng chứng** để đạt các **mục tiêu cá nhân hoá**, trong một **mối quan hệ trị liệu**, do một người **có chứng chỉ** đã hoàn thành chương trình đào tạo được công nhận thực hiện.
- **Liên đoàn Âm nhạc Trị liệu Thế giới (WFMT, 2011):** việc dùng âm nhạc và các yếu tố của nó một cách chuyên nghiệp làm can thiệp trong môi trường y tế, giáo dục và đời sống hằng ngày, với cá nhân, nhóm, gia đình hay cộng đồng, nhằm nâng cao chất lượng sống và sức khoẻ.

Điểm chung: có **mục tiêu**, có **quan hệ trị liệu**, có **người được đào tạo**. Nghe nhạc để thư giãn, hay một buổi học đàn, **không phải** là âm nhạc trị liệu theo nghĩa này.

## Bằng chứng từ các tổng quan Cochrane
Cochrane là tổ chức chuyên tổng hợp các thử nghiệm có đối chứng; dưới đây là kết luận của họ, kèm mức độ chắc chắn.
| Tình trạng | Tổng quan | Quy mô | Kết luận chính |
|---|---|---|---|
| **Trầm cảm** | Aalbers và cộng sự (2017) | 9 nghiên cứu, 421 người | Thêm âm nhạc trị liệu vào điều trị thông thường làm giảm triệu chứng trầm cảm rõ rệt trong ngắn hạn (bằng chứng mức trung bình); cũng giảm lo âu, cải thiện chức năng |
| **Tự kỷ** | Geretsegger và cộng sự (2022) | 26 nghiên cứu, 1.165 người | Ngay sau can thiệp: khả năng cải thiện tổng thể cao hơn, giảm nhẹ mức độ triệu chứng, chất lượng sống tăng nhẹ; độ chắc chắn từ trung bình đến rất thấp |
| **Ung thư** | Bradt và cộng sự (2016) | 52 thử nghiệm, 3.731 người | Giảm lo âu, đau, mệt mỏi; nhưng phần lớn thử nghiệm có nguy cơ sai lệch cao |
| **Tổn thương não** (gồm đột quỵ) | Magee và cộng sự (2017) | 29 thử nghiệm, 775 người | Kích thích [[tiet-tau|nhịp điệu]] có thể cải thiện dáng đi; cần thêm thử nghiệm chất lượng cao |

## Các kỹ thuật dựa trên cấu trúc âm nhạc
- **Liệu pháp ngữ điệu [[giai-dieu|giai điệu]]** (*Melodic Intonation Therapy*; Albert, Sparks và Helm, 1973): người mất ngôn ngữ do tổn thương não **hát** các câu ngắn trên giai điệu đơn giản, kèm gõ tay, rồi dần chuyển về nói. Nó dựa trên quan sát rằng một số người không nói được vẫn hát được.
- **Kích thích thính giác nhịp điệu** (*Rhythmic Auditory Stimulation*): Thaut và cộng sự (1996) cho người bệnh Parkinson tập đi theo nhịp phách trong 3 tuần. Nhóm này tăng tốc độ đi **25%**, độ dài bước **12%**, nhịp bước **10%**; nhóm tự tập không có nhịp chỉ tăng tốc độ 7%. Đây là ứng dụng trực tiếp của hiện tượng **đồng bộ vận động với phách** ([[cam-nhan-phach]]).
- **Âm nhạc trị liệu thần kinh** (*Neurologic Music Therapy*, Michael Thaut): hệ thống các kỹ thuật chuẩn hoá áp dụng âm nhạc cho rối loạn nhận thức, cảm giác, vận động do bệnh thần kinh.

## Với giáo viên piano
*(Nhận xét của thư viện.)*
1. Giáo viên piano **không phải** nhà trị liệu; không hứa "chữa" bệnh cho học trò.
2. Nhưng hiểu các cơ chế (nhịp điệu dẫn dắt vận động, hát giúp nói, âm nhạc điều chỉnh cảm xúc) giúp dạy tốt hơn cho học trò có nhu cầu đặc biệt, và biết khi nào nên giới thiệu đến chuyên gia.
3. Sức khoẻ của chính người chơi đàn: [[suc-khoe-nguoi-choi-dan]], [[hoi-hop-bieu-dien]].
`,
  },
  {
    slug: 'am-hoc-nhac-cu',
    title: 'Âm học nhạc cụ — và vật lý của cây đàn piano',
    category: 'musicology',
    also: ['listening', 'instrument'],
    aliases: ['âm học nhạc cụ', 'musical instrument acoustics', 'vật lý piano', 'piano acoustics', 'bồi âm không hoà', 'inharmonicity', 'lên dây giãn', 'stretch tuning', 'đường cong Railsback', 'Railsback curve', 'định luật Mersenne', 'tắt dần kép'],
    summary: 'Vì sao dây, ống và trống cho âm sắc khác nhau: định luật Mersenne cho dây (1636), ống hở và ống kín, màng rung có bồi âm không hoà. Riêng piano: dây cứng làm bồi âm cao dần (bồi âm không hoà), nên thợ lên dây phải "giãn" quãng 8 (đường cong Railsback, 1938); búa gõ ở khoảng 1/7 dây; hai hoặc ba dây đồng âm tạo ra kiểu tắt dần hai giai đoạn (Weinreich, 1977).',
    wiki: 'Piano_acoustics',
    refs: [
      ['Wikipedia — Mersenne\'s laws', 'https://en.wikipedia.org/wiki/Mersenne%27s_laws'],
      ['University of Rochester — PHY 103: air columns (PDF)', 'https://www.pas.rochester.edu/~sybenzvi/courses/phy103/2016f/phy103_air_column.pdf'],
      ['Wikipedia — Vibration of a circular membrane', 'https://en.wikipedia.org/wiki/Vibration_of_a_circular_membrane'],
      ['Springer — Fletcher & Rossing, The Physics of Musical Instruments (2nd ed., 1998)', 'https://link.springer.com/book/10.1007/978-0-387-21603-4'],
      ['Wikipedia — Inharmonicity', 'https://en.wikipedia.org/wiki/Inharmonicity'],
      ['Jaatinen et al. (2022) — Effect of inharmonicity on pitch perception and subjective tuning of piano tones, JASA (PDF)', 'https://acris.aalto.fi/ws/portalfiles/portal/98111997/Effect_of_inharmonicity_on_pitch_perception_and_subjective_tuning_of_piano_tones.pdf'],
      ['HyperPhysics — The piano', 'http://hyperphysics.phy-astr.gsu.edu/hbase/Music/pianof.html'],
      ['Yamaha — Piano mechanism: strings', 'https://www.yamaha.com/en/musical_instrument_guide/piano/mechanism/mechanism004.html'],
      ['KTH — Weinreich, The coupled motion of piano strings (Five Lectures on the Acoustics of the Piano)', 'https://www.speech.kth.se/music/5_lectures/weinreic/motion.html'],
      ['Scientific American — Weinreich (1979), The coupled motions of piano strings', 'https://www.scientificamerican.com/article/the-coupled-motions-of-piano-string/'],
      ['Wikipedia — Piano pedals', 'https://en.wikipedia.org/wiki/Piano_pedals'],
    ],
    body: `
**Âm học nhạc cụ** áp dụng vật lý dao động để giải thích vì sao mỗi nhạc cụ có [[am-sac|âm sắc]] riêng. Tài liệu chuẩn là *The Physics of Musical Instruments* của Fletcher và Rossing (Springer, bản 2 năm 1998). Kiến thức nền: [[am-hoc-co-ban]], [[chuoi-boi-am]]. Phân loại nhạc cụ: [[nhac-khi-hoc]].

## 1. Ba loại vật rung
| Vật rung | Quy luật | Hệ quả về âm sắc |
|---|---|---|
| **Dây căng** (piano, guitar, [[violin|violin]]) | Định luật Mersenne (*Harmonie universelle*, 1636 – 1637): tần số cơ bản tỉ lệ nghịch với **chiều dài** dây, tỉ lệ thuận với căn bậc hai **lực căng**, tỉ lệ nghịch với căn bậc hai **khối lượng mỗi đơn vị dài** | Dây lý tưởng cho đủ chuỗi bồi âm 1, 2, 3, 4… |
| **Cột không khí** (sáo, kèn, [[organ-ong|organ ống]]) | Ống hở hai đầu cho đủ bồi âm; ống lý tưởng kín một đầu chỉ cho bồi âm **lẻ** (1, 3, 5…) | [[clarinet|Clarinet]] gần giống ống kín một đầu: [[cao-do|âm vực]] thấp thiên về bồi âm lẻ, cho màu "rỗng" đặc trưng |
| **Màng căng** (trống) | Các mode rung tương ứng các nghiệm của hàm Bessel — **không** theo tỉ lệ nguyên | Tiếng trống thường không có cao độ rõ (bồi âm không hoà); [[timpani|trống timpani]] được thiết kế để kéo các mode về gần tỉ lệ hoà âm |

Với màng tròn lý tưởng, tính từ các nghiệm của hàm Bessel, ba mode kế tiếp có tần số khoảng **1,59; 2,14; 2,30** lần mode cơ bản *(con số do thư viện tính, chỉ cho màng lý tưởng)* — không có số nguyên nào, khác hẳn dây đàn.

## 2. Piano: dây cứng và bồi âm không hoà
Dây thép của piano **cứng**, không mềm như dây lý tưởng. Hệ quả: các bồi âm **cao dần** so với bội số nguyên của tần số cơ bản. Công thức thường dùng là f(n) = n · f(1) · √(1 + B·n²), trong đó B là **hệ số không hoà**; B tăng khi dây to và giảm khi dây dài, căng hơn.

::bars 1=0 2=1.0 3=2.8 4=5.2 5=8.3 6=12.0 7=16.5 8=21.5 | Bồi âm thứ n cao hơn bội số nguyên bao nhiêu cent (1 cent = 1/100 nửa cung), với một giá trị minh hoạ B = 0,0004 do thư viện chọn và tính theo công thức trên; B thực tế khác nhau theo từng dây và từng đàn

Dây ngắn, dày ở âm vực cao và dây ngắn ở đàn nhỏ có B lớn hơn — một lý do đàn [[cac-loai-dan-piano|piano đứng]] nhỏ có âm thanh kém "trong" ở âm vực trầm so với đàn grand lớn.

## 3. Lên dây "giãn": đường cong Railsback
Vì bồi âm thứ 2 của một nốt cao hơn [[quang|quãng 8]] lý tưởng, thợ lên dây chỉnh nốt quãng 8 trên **cao hơn một chút** để không có phách với bồi âm đó. Cộng dồn qua cả [[ban-phim|bàn phím]], âm vực trầm bị kéo **thấp hơn** và âm vực cao bị kéo **cao hơn** so với [[luat-binh-quan|bình quân luật]] lý thuyết. O. L. Railsback (1938) đo thực tế các đàn đã được lên dây và vẽ ra đường cong này. Nghiên cứu năm 2022 (Jaatinen và cộng sự) cho thấy chỉ riêng tính không hoà của âm thanh đã đủ khiến người nghe chọn một đường cong tương tự. Xem [[bao-duong-piano]].

## 4. Búa, dây và bảng cộng hưởng
- Búa gõ vào dây ở khoảng **1/7 chiều dài** phần dây rung (HyperPhysics), làm yếu bồi âm thứ 7 — một bồi âm nghe "lạc" với hoà âm phương Tây.
- Một [[dan-piano|đàn piano]] có khoảng **230 dây**: phần lớn nốt có 3 dây, âm vực trầm giảm xuống 2 rồi 1 dây quấn (Yamaha). Tổng lực căng rất lớn — các nguồn ước tính tới khoảng **30 tấn** ở đàn grand — nên cần khung gang ([[cau-tao-piano]]).
- Dây không tự phát ra nhiều âm thanh; **bảng cộng hưởng** (*soundboard*) mới là bộ phận bức xạ âm.

## 5. Tắt dần hai giai đoạn và bàn đạp una corda
Gabriel Weinreich (1977; bài phổ biến trên *Scientific American*, 1979) giải thích vì sao tiếng piano **tắt nhanh rồi kéo dài**:
- Hai hoặc ba dây của một nốt được lên **hơi lệch nhau** và nối với nhau qua ngựa đàn. Khi chúng rung **cùng pha**, năng lượng truyền nhanh vào bảng cộng hưởng: âm to nhưng tắt nhanh (**âm đầu** — *prompt sound*). Khi lệch pha, năng lượng truyền chậm: phần **âm đuôi** (*aftersound*) kéo dài.
- Hướng rung cũng quan trọng: búa chủ yếu kích thích rung **dọc** (vuông góc với bảng cộng hưởng, tắt nhanh); rung **ngang** (song song với bảng cộng hưởng) tắt chậm hơn.
- **Bàn đạp una corda** trên đàn grand dịch cả bộ máy sang ngang, búa chỉ gõ 2 trong 3 dây (hoặc 1 trong 2) và chạm vào phần nỉ ít bị nén. Dây không bị gõ vẫn rung theo; vì các dây không còn đối xứng, nhiều năng lượng hơn đi vào phần âm đuôi — âm sắc mềm và "xa" hơn, không chỉ nhỏ hơn. Xem [[ban-dap]].

Đây là cơ sở vật lý của những gì [[am-sac]] mô tả là "tắt dần hai giai đoạn", và của các lời khuyên về [[ky-thuat-cham-phim|cách chạm phím]].
`,
  },
  {
    slug: 'tim-giong-bang-may',
    title: 'Thứ bậc điệu tính và thuật toán tìm giọng',
    category: 'musicology',
    also: ['scales'],
    aliases: ['thuật toán tìm giọng', 'key-finding', 'key finding algorithm', 'Krumhansl–Schmuckler', 'Krumhansl-Schmuckler', 'hồ sơ giọng', 'key profile', 'probe-tone', 'âm dò', 'Krumhansl và Kessler', 'music21', 'Humdrum'],
    summary: 'Người nghe cảm nhận các bậc của một giọng theo thứ bậc: chủ âm vững nhất, rồi các nốt của hợp âm chủ, rồi các nốt khác trong giọng, cuối cùng là nốt ngoài giọng. Krumhansl và Kessler (1982) đo thứ bậc ấy bằng thực nghiệm; thuật toán Krumhansl – Schmuckler dùng nó để máy tính đoán giọng của một bản nhạc. Bài có số liệu, biểu đồ và một ví dụ tính tay.',
    wiki: 'Key_(music)',
    refs: [
      ['SAGE Encyclopedia — Probe-tone method', 'https://sk.sagepub.com/ency/edvol/embed/music-in-the-social-and-behavioral-sciences/chpt/probetone-method'],
      ['BibSonomy — Krumhansl & Kessler (1982), Psychological Review 89(4)', 'https://bibsonomy.org/bibtex/58afa02f8e35faf5d8ca2702dc044b9d'],
      ['music21 — analysis/discrete.py (key-profile values)', 'https://github.com/cuthbertLab/music21/blob/master/music21/analysis/discrete.py'],
      ['Oxford Academic — Krumhansl, Cognitive Foundations of Musical Pitch (1990)', 'https://academic.oup.com/book/40395'],
      ['Temperley (1999) — What\'s key for key? The Krumhansl-Schmuckler key-finding algorithm reconsidered, Music Perception 17(1)', 'https://online.ucpress.edu/mp/article-abstract/17/1/65/62051/What-s-Key-for-Key-The-Krumhansl-Schmuckler-Key'],
      ['Temperley — Computing in Musicology 15 (PDF)', 'https://www.ccarh.org/publications/cm/15/cm15-02-temperley.pdf'],
      ['Perceptual tests of an algorithm for musical key-finding (JEP: HPP, 2005)', 'https://www.academia.edu/773943/Perceptual_Tests_of_an_Algorithm_for_Musical_Key_Finding'],
      ['Cuthbert & Ariza (2010) — music21: a toolkit for computer-aided musicology (ISMIR, PDF)', 'https://ismir2010.ismir.net/proceedings/ismir2010-108.pdf'],
      ['CCARH — Humdrum Toolkit', 'https://www.ccarh.org/publications/humdrum'],
    ],
    body: `
Khi nghe một bản nhạc, ta cảm thấy có một nốt là "nhà" — [[dieu-tinh|chủ âm]] — và các nốt khác có độ "vững" khác nhau. Bài này cho thấy cảm giác ấy **đo được**, và có thể viết thành **thuật toán**. Đây là chỗ gặp nhau của [[tam-ly-hoc-am-nhac|tâm lý học]], [[nhac-ly-co-ban|lý thuyết]] và [[am-nhac-hoc-tinh-toan|âm nhạc học tính toán]].

## 1. Phương pháp âm dò
Krumhansl và Shepard (1979) cho người nghe một **ngữ cảnh** (ví dụ [[am-giai|âm giai]] Đô trưởng chưa trọn), rồi một **âm dò** (*probe tone*) là một trong 12 nốt, và hỏi: nốt này "hợp" với ngữ cảnh đến mức nào? Người nghe có kinh nghiệm xếp: **[[bac-am-giai|chủ âm]]** cao nhất, rồi **các nốt khác của hợp âm chủ**, rồi **các nốt khác trong giọng**, cuối cùng là **nốt ngoài giọng**.

## 2. Hồ sơ giọng của Krumhansl và Kessler (1982)
Krumhansl và Kessler (*Psychological Review*, 1982) lặp lại thí nghiệm với nhiều ngữ cảnh (âm giai, hợp âm, [[cau-ket|kết]]) và công bố hai **hồ sơ giọng** — điểm trung bình cho 12 bậc trong [[am-giai-truong|giọng trưởng]] và [[am-giai-thu|giọng thứ]]:

::bars series=Đô_trưởng/Đô_thứ C=6.35/6.33 C♯=2.23/2.68 D=3.48/3.52 E♭=2.33/5.38 E=4.38/2.60 F=4.09/3.53 F♯=2.52/2.54 G=5.19/4.75 A♭=2.39/3.98 A=3.66/2.69 B♭=2.29/3.34 B=2.88/3.17 max=7 | Hồ sơ giọng Krumhansl – Kessler (thang 1 – 7), tính theo Đô; số liệu lấy từ mã nguồn music21 (trích từ trang keycor của Humdrum)

| Bậc (theo Đô) | C | C♯ | D | E♭ | E | F | F♯ | G | A♭ | A | B♭ | B |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Trưởng | 6,35 | 2,23 | 3,48 | 2,33 | 4,38 | 4,09 | 2,52 | 5,19 | 2,39 | 3,66 | 2,29 | 2,88 |
| Thứ | 6,33 | 2,68 | 3,52 | 5,38 | 2,60 | 3,53 | 2,54 | 4,75 | 3,98 | 2,69 | 3,34 | 3,17 |

Đọc biểu đồ: trong giọng trưởng, ba đỉnh là **C, G, E** — đúng ba nốt của [[hop-am-ba|hợp âm chủ]]. Trong giọng thứ, đỉnh thứ hai là **E♭** — [[quang|quãng]] 3 thứ. Phân tích tương quan giữa 24 hồ sơ (12 trưởng, 12 thứ) đặt các giọng lên một **mặt hình xuyến**, phản ánh [[vong-quang-nam|vòng quãng 5]] và quan hệ [[giong-song-song|giọng song song, cùng tên]].

## 3. Thuật toán Krumhansl – Schmuckler
Mô tả trong *Cognitive Foundations of Musical Pitch* của Krumhansl (1990):
1. Cộng **tổng [[truong-do|trường độ]]** của từng nốt trong 12 nốt (không phân biệt quãng 8) trong [[cau-nhac|đoạn nhạc]].
2. Tính **hệ số tương quan** giữa vectơ đó với cả **24 hồ sơ giọng** (hồ sơ được dịch cho từng chủ âm).
3. Giọng có hệ số tương quan **cao nhất** là dự đoán.

### Ví dụ tính tay: "Ode to Joy" (Đô trưởng)
*(Thư viện tự tính bằng các giá trị ở trên; nốt đen = 1 phách.)*
- **Bốn ô đầu** (E E F G | G F E D | C C D E | E. D D) chứa nhiều E và D, ít C. Kết quả: **Mi thứ** r = 0,568, Đô trưởng r = 0,545, Rê thứ r = 0,506. **Thuật toán đoán sai.**
- **Cả tám ô** (câu thứ hai kết về C): **Đô trưởng** r = 0,695, Mi thứ r = 0,549, Sol trưởng r = 0,497. **Đúng.**

Bài học: đoạn quá ngắn, chưa có [[cau-ket|kết]], thì ngay cả con người cũng có thể phân vân — thuật toán chỉ đếm, không "nghe" vị trí kết.

## 4. Các cải tiến và giới hạn
- Bản thân hồ sơ Krumhansl – Kessler có xu hướng **nhận nhầm giọng át thành chủ âm** (ghi chú của Humdrum).
- **Temperley (1999)** đề xuất bốn thay đổi: công thức so khớp đơn giản hơn, giá trị hồ sơ mới, đánh dấu nốt **có / không có** trong từng đoạn ngắn thay vì cộng trường độ, và **phạt** việc đổi giọng giữa các đoạn — để mô hình hoá [[chuyen-giong|chuyển giọng]].
- Mô hình xác suất (Bayes) của Temperley đoán đúng **775/896 đoạn (86,5%)** trên các ví dụ trong [[giao-trinh-hoa-am|giáo trình hoà âm]] Kostka – Payne.
- Một thử nghiệm tri giác (2005) cho thấy dự đoán của thuật toán khớp với người nghe **rất tốt ở các Prelude của [[johann-sebastian-bach|Bach]]**, nhưng **kém hơn nhiều ở các Prelude của [[frederic-chopin|Chopin]]** — nơi hoà âm [[hoa-am-cromatic|cromatic]] làm giọng mơ hồ.

## 5. Tự thử
Bộ công cụ **music21** (Python, mã nguồn mở; Cuthbert và Ariza, 2010) và **Humdrum** (David Huron; công cụ \`keycor\`) cài sẵn các hồ sơ giọng này. Gợi ý bài tập: chạy thuật toán trên [[phan-tich-prelude-mi-thu-op28-so4|Prelude Mi thứ của Chopin]] theo từng ô và xem giọng "trôi" thế nào.
`,
  },
  {
    slug: 'thiet-ke-nghien-cuu-thuc-nghiem',
    title: 'Thiết kế nghiên cứu thực nghiệm về âm nhạc',
    category: 'musicology',
    aliases: ['thiết kế nghiên cứu thực nghiệm', 'nghiên cứu thực nghiệm âm nhạc', 'experimental design', 'khủng hoảng lặp lại', 'replication crisis', 'đăng ký trước', 'preregistration', 'độ lớn hiệu ứng', 'effect size', 'WEIRD', 'nhóm đối chứng', 'phân nhóm ngẫu nhiên'],
    summary: 'Cách đọc và tự thiết kế một nghiên cứu thực nghiệm về âm nhạc: biến số, nhóm đối chứng, phân nhóm ngẫu nhiên, cỡ mẫu, độ lớn hiệu ứng; khủng hoảng lặp lại trong tâm lý học (2015) và tình hình riêng của tâm lý học âm nhạc; vấn đề mẫu "WEIRD" và các nghiên cứu xuyên văn hoá.',
    wiki: 'Replication_crisis',
    refs: [
      ['Open Science Collaboration (2015) — Estimating the reproducibility of psychological science, Science 349', 'https://osf.io/ezcuj/wiki/home'],
      ['Eerola (2024) — Prevalence of transparency and reproducibility-related research practices in music psychology, Musicae Scientiae', 'https://durham-repository.worktribe.com/output/3344268'],
      ['Wiseman, Watt & Kornbrot (2019) — Registered reports: an early example and analysis, PeerJ', 'https://peerj.com/articles/6232'],
      ['Henrich, Heine & Norenzayan (2010) — The weirdest people in the world?, Behavioral and Brain Sciences 33', 'https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/the-weirdest-people-in-the-world/BF84F7517D56AFF7B7EB58411A554C17'],
      ['Jacoby & McDermott (2017) — Integer ratio priors on musical rhythm revealed cross-culturally by iterated reproduction, Current Biology 27(3)', 'https://pubmed.ncbi.nlm.nih.gov/28065607/'],
      ['McDermott et al. (2016) — Indifference to dissonance in native Amazonians, Nature 535', 'https://ideas.repec.org/a/nat/nature/v535y2016i7613d10.1038_nature18635.html'],
      ['Schellenberg (2004) — Music lessons enhance IQ (PDF)', 'https://sites.utm.utoronto.ca/sites/sites.utm.utoronto.ca.glenn_website/files/download/SchellenbergPS2004.pdf'],
    ],
    body: `
[[phuong-phap-nghien-cuu-am-nhac]] liệt kê các nhóm phương pháp; bài này đi sâu vào **thực nghiệm** — phương pháp chính của [[tam-ly-hoc-am-nhac|tâm lý học]] và [[than-kinh-hoc-am-nhac|khoa học thần kinh]] về âm nhạc. Mục tiêu kép: **đọc** một nghiên cứu một cách có phê phán, và **tự làm** một nghiên cứu nhỏ trong lớp học.

## 1. Các khái niệm cơ bản
*(Khái niệm chung của phương pháp thực nghiệm; mỗi khái niệm kèm một ví dụ từ thư viện.)*
| Khái niệm | Nghĩa | Ví dụ |
|---|---|---|
| **Biến độc lập** | Cái người nghiên cứu thay đổi | Loại hình học: đàn phím, hát, kịch, không học |
| **Biến phụ thuộc** | Cái được đo | Điểm IQ, tốc độ đi, đánh giá cảm xúc |
| **Nhóm đối chứng** | Nhóm không nhận can thiệp, để so sánh | Nhóm im lặng trong thí nghiệm "hiệu ứng Mozart" |
| **Đối chứng tích cực** | Nhóm làm một hoạt động khác **cũng hấp dẫn** | Nhóm học kịch của Schellenberg (2004) — loại trừ giải thích "chỉ cần được chú ý là tiến bộ" |
| **Phân nhóm ngẫu nhiên** | Bốc thăm ai vào nhóm nào | Nếu gia đình tự chọn cho con học đàn, khác biệt có thể do gia đình, không do âm nhạc |
| **Cỡ mẫu** | Số người tham gia | 8 người (Salimpoor 2011) khác xa 20.000 người (Peretz và Vuvan 2017) |
| **Độ lớn hiệu ứng** | Chênh lệch tính theo độ lệch chuẩn (d, g) | Theo quy ước thông dụng: 0,2 nhỏ, 0,5 vừa, 0,8 lớn |

## 2. Tương quan không phải nhân quả
Não nhạc công khác não người không chơi nhạc ([[than-kinh-hoc-am-nhac]]) — nhưng có thể vì **người có não như vậy** mới theo nhạc. Chỉ thiết kế **theo dõi dọc** và **phân nhóm ngẫu nhiên** mới tiến gần đến kết luận nhân quả. Câu chuyện "hiệu ứng Mozart" ([[hoc-nhac-va-tri-tue]]) là ví dụ trọn vẹn: một kết quả nhỏ, mẫu nhỏ, bị phóng đại, rồi được phân tích gộp thu hẹp lại.

## 3. Khủng hoảng lặp lại
Năm 2015, nhóm *Open Science Collaboration* làm lại **100 nghiên cứu** tâm lý học đã công bố. Kết quả:

::bars Nghiên_cứu_gốc=97 Lần_lặp_lại=36 max=100 | Tỉ lệ (%) kết quả có ý nghĩa thống kê: nghiên cứu gốc so với lần làm lại (Open Science Collaboration, 2015). Độ lớn hiệu ứng trung bình khi làm lại chỉ còn khoảng một nửa

Tâm lý học âm nhạc thì sao? Eerola (2024) khảo sát ngẫu nhiên 239 bài báo (2017 – 2022) trên năm tạp chí: **không bài nào đăng ký trước**, khoảng **3%** là nghiên cứu lặp lại, chỉ **5%** chia sẻ dữ liệu gốc. Những thực hành giúp tăng độ tin cậy:
- **Đăng ký trước** (*preregistration*): công bố giả thuyết và cách phân tích **trước** khi thu dữ liệu. Ví dụ: thí nghiệm 1 của Mehr và cộng sự (2018) về chức năng bài hát ([[am-nhac-hoc-tien-hoa]]).
- **Chia sẻ dữ liệu và mã**: như kho dữ liệu [[tan-nhac-viet-nam|tân nhạc]] của Kirby và Ladd ([[am-nhac-va-ngon-ngu]]).
- **Làm lại** nghiên cứu của người khác — và của chính mình.

## 4. Mẫu "WEIRD"
Henrich, Heine và Norenzayan (2010) chỉ ra rằng phần lớn nghiên cứu tâm lý học dùng người tham gia **phương Tây, có học vấn, công nghiệp hoá, giàu có, dân chủ** (*WEIRD*) — thường là những người **ngoại lệ** so với nhân loại. Trong âm nhạc:
- Người Tsimane' (Amazon) **không ưu tiên** [[hop-am-ba|hợp âm]] thuận như người Mỹ (McDermott và cộng sự, 2016) — xem [[tam-ly-hoc-phat-trien-am-nhac]].
- Jacoby và McDermott (2017) cho người nghe tái tạo một [[tiet-tau|nhịp điệu]], rồi lấy bản tái tạo làm kích thích cho lần sau: người Mỹ và người Tsimane' đều có xu hướng về **tỉ lệ nguyên đơn giản**, nhưng **khác nhau** về tỉ lệ nào — các "thiên hướng" nhịp điệu chịu ảnh hưởng của kinh nghiệm.
- Với người nghiên cứu Việt Nam: một kết quả tìm được với sinh viên Mỹ **chưa chắc** đúng với học trò Việt Nam — đó là chỗ cho nghiên cứu của chính mình.

## 5. Một nghiên cứu nhỏ trong lớp học
*(Mẫu gợi ý của thư viện.)*
1. **Câu hỏi:** "Học trò nhớ một [[giai-dieu|giai điệu]] mới nhanh hơn khi hát trước rồi mới đàn, hay khi [[doc-not-nhanh|đọc nốt]] rồi đàn ngay?"
2. **Thiết kế:** cùng một học trò học hai giai điệu tương đương, mỗi giai điệu một cách; thứ tự đổi ngẫu nhiên giữa các học trò.
3. **Đo:** số lần chơi đến khi chơi thuộc không sai; ghi trước tiêu chí "không sai" là gì.
4. **Ghi trước** dự đoán của mình, rồi mới làm.
5. **Báo cáo** cả khi kết quả không như mong đợi. Liên hệ: [[hoc-thuoc-bai]], [[xuong-am]], [[giang-day-hieu-qua]].
`,
  },
]

