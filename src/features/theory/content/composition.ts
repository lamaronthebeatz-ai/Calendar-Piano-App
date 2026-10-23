import type { Article } from '../wiki'

/**
 * Sáng tác: hệ thống và lộ trình. Trang mở đầu là lo-trinh-sang-tac; mỗi bài nối ngược về nó, sang các bài
 * cùng mục và sang các bài sẵn có (hình thức, hoà âm, phức điệu, phân tích, thể loại, Việt Nam).
 */
export const composition: Article[] = [
  {
    slug: "lo-trinh-sang-tac",
    title: "Sáng tác: hệ thống và lộ trình",
    category: 'composition',
    aliases: ["lộ trình sáng tác", "học sáng tác", "sáng tác âm nhạc", "soạn nhạc", "composition", "music composition", "học soạn nhạc"],
    summary: "Trang mở đầu của mục Sáng tác: một lộ trình tám chặng từ nền nhạc lý đến tác phẩm hoàn chỉnh — tư duy và quy trình, chất liệu (chủ đề, giai điệu), khung (hoà âm, bè trầm, kết cấu), kiến trúc tác phẩm, lời ca và nhạc cụ, thủ pháp qua các thời kỳ, các thể loại ứng dụng (ca khúc, nhạc phim, công nghệ, chất liệu Việt). Mỗi chặng nối sang các bài lý thuyết, hình thức và phân tích đã có trong thư viện.",
    refs: [
      ["Wikipedia — Musical composition", "https://en.wikipedia.org/wiki/Musical_composition"],
      ["Schoenberg, Fundamentals of Musical Composition (1967) — Internet Archive", "https://archive.org/details/fundamentalsofmu0000scho"],
      ["Open Music Theory — Form", "https://viva.pressbooks.pub/openmusictheory/part/form"],
    ],
    body: `
Mục này dành cho người **đã đọc được nhạc và biết hoà âm cơ bản** muốn tự viết nhạc: một bài piano ngắn, một ca khúc, một chương sonata, nhạc cho phim. Thư viện đã có rất nhiều bài về **cách nhạc được làm ra** (hình thức, hoà âm, đối âm, phân tích); mục này sắp xếp lại chúng theo **góc nhìn của người viết** và bổ sung phần còn thiếu: quy trình, kinh nghiệm, thủ pháp từng thời kỳ và từng thể loại.

::timeline 1477=Tinctoris 1558=Zarlino 1725=Fux_Gradus 1739=Mattheson 1782=Koch 1824=Reicha 1837=Marx 1911=Schoenberg_Harmonielehre 1937=Hindemith 1944=Messiaen_Technique 1957=Illiac_Suite 1967=Schoenberg_Fundamentals 1998=Caplin 2007=Gjerdingen | Một số mốc trong lịch sử dạy và nghiên cứu sáng tác (chi tiết ở từng bài)

## Lộ trình tám chặng
| Chặng | Bài trong mục | Mục tiêu | Nền cần có |
|---|---|---|---|
| 0. Nền | (ngoài mục) | Đọc nhạc, hoà âm bốn bè, hình thức cơ bản, đối âm loại 1 – 2 | [[nhac-ly-co-ban]], [[giao-trinh-hoa-am]], [[lo-trinh-hinh-thuc]], [[doi-am-5-loai]] |
| 1. Tư duy | [[lich-su-day-sang-tac]] → [[quy-trinh-sang-tac]] | Biết sáng tác đã được dạy thế nào; có quy trình làm việc riêng | [[phuong-phap-phan-tich-tac-pham]] |
| 2. Chất liệu | [[viet-chu-de]] → [[viet-giai-dieu]] | Từ một motif viết được một chủ đề 8 ô và một giai điệu hát được | [[motif]], [[cau-nhac]], [[giai-dieu]] |
| 3. Khung | [[viet-hoa-am-va-be-tram]] → [[ket-cau-va-viet-cho-piano]] | Đặt hoà âm, viết bè trầm, chọn kết cấu và kiểu đệm hợp với đàn | [[luoc-do-galant]], [[phoi-hoa-am-giai-dieu]], [[ket-cau]] |
| 4. Kiến trúc | [[kien-truc-tac-pham]] | Kéo một ý thành cả bài: kế hoạch giọng, cao trào, tương phản và thống nhất | [[hinh-thuc-am-nhac]], [[chuc-nang-hinh-thuc]] |
| 5. Lời và nhạc cụ | [[viet-cho-loi-ca]] → [[phoi-khi-va-viet-cho-nhac-cu]] | Phổ lời đúng dấu và đúng nhấn; viết hợp tầm âm và tính năng nhạc cụ | [[phoi-khi-nguyen-ly-co-ban]], [[lied]] |
| 6. Phong cách | [[sang-tac-trung-co-phuc-hung]] → [[sang-tac-baroque]] → [[sang-tac-co-dien]] → [[sang-tac-lang-man]] → [[sang-tac-the-ky-20]] | Viết "theo phong cách" từng thời kỳ — cách học được dùng từ thế kỷ 18 đến nay | [[cac-thoi-ky]], [[phan-tich-phong-cach]] |
| 7. Ứng dụng | [[sang-tac-ca-khuc]], [[sang-tac-nhac-phim]], [[sang-tac-cong-nghe-va-may-tinh]], [[sang-tac-voi-chat-lieu-viet]] | Viết cho người nghe hôm nay: ca khúc, hình ảnh, máy tính, dân ca | [[hinh-thuc-ca-khuc-pho-thong]], [[hoa-am-cho-giai-dieu-ngu-cung]] |

**Xuyên suốt mọi chặng:** [[bai-tap-sang-tac]] — chương trình bài tập theo tuần, từ chép mẫu và viết lại đến tác phẩm tự do.

## Sáng tác học được đến đâu?
Câu hỏi này cũ như nghề dạy nhạc. Câu trả lời của lịch sử khá nhất quán:
1. **Phần nghề học được và phải học.** Từ Fux (1725) đến Schoenberg, các giáo trình đều dạy qua **quy tắc, mẫu và bài tập**. Nhạc sĩ thế kỷ 18 học thuộc hàng trăm khuôn bè trầm – giai điệu ([[partimento]], [[luoc-do-galant]]) trước khi viết tác phẩm riêng.
2. **Phần ý tưởng không đến từ hư không.** Thư từ và bản phác thảo cho thấy ý tưởng hay thường là kết quả của **làm việc đều đặn** — Tchaikovsky viết năm 1878 rằng cảm hứng là "người khách không thích ghé nhà kẻ lười" (xem [[quy-trinh-sang-tac]]).
3. **Phong cách riêng đến sau.** Gần như mọi nhà soạn nhạc lớn đều bắt đầu bằng **bắt chước**: Bach chép và chuyển soạn concerto Vivaldi, Mozart thời trẻ viết theo J. C. Bach, Beethoven học đối âm với Haydn và Albrechtsberger. Xem [[lich-su-day-sang-tac]].

## Ba cách nhìn một tác phẩm khi viết
| Cách nhìn | Câu hỏi | Bài liên quan |
|---|---|---|
| **Chất liệu** | Ý nhạc gốc là gì, có gì để phát triển? | [[viet-chu-de]], [[motif]], [[bien-doi-chu-de]] |
| **Thời gian** | Mỗi đoạn đang làm gì — mở đầu, tiếp diễn, kết, chuyển? | [[chuc-nang-hinh-thuc]], [[kien-truc-tac-pham]] |
| **Người nghe** | Người nghe đang chờ điều gì, mình đáp ứng hay làm trái? | [[ky-vong-am-nhac]], [[nhac-ket-trong-dau]] |

## Về nguồn trong mục này
- Nguồn chính là **giáo trình và chuyên luận** (Fux, Koch, Reicha, Schoenberg, Hindemith, Messiaen), **thư từ và bản phác thảo** của nhà soạn nhạc, và **nghiên cứu hiện đại** (Caplin, Gjerdingen, Huron).
- Lời kể về "cách thiên tài sáng tác" có nhiều giai thoại sai; chỗ nào nguồn đáng ngờ, bài ghi rõ — ví dụ lá thư Mozart "nghe cả bản nhạc trong đầu" là **thư giả** (xem [[quy-trinh-sang-tac]]).
- Những "luật" như tỉ lệ vàng trong nhạc Bartók được trình bày như **giả thuyết đang tranh cãi** (xem [[kien-truc-tac-pham]]).

## Ba điều cần nhớ
1. **Viết nhiều bài ngắn trước khi viết một bài dài.** Một trang piano hoàn chỉnh dạy nhiều hơn mười phần mở đầu bỏ dở.
2. **Phân tích để viết, viết để hiểu phân tích.** Mỗi bài trong mục [[phuong-phap-phan-tich-tac-pham|Phân tích tác phẩm]] là một mẫu để viết lại.
3. **Nghe bằng tai, không chỉ bằng mắt.** Chơi lại, hát lại, thu âm và nghe lại cái mình vừa viết — tai là người kiểm duyệt cuối cùng.
`,
  },
  {
    slug: "lich-su-day-sang-tac",
    title: "Sáng tác được dạy thế nào: từ Fux đến lớp học hôm nay",
    category: 'composition',
    also: ['musicianship'],
    aliases: ["lịch sử dạy sáng tác", "giáo trình sáng tác", "composition pedagogy", "dạy sáng tác"],
    summary: "Năm thế kỷ dạy sáng tác: quy tắc đối âm (Tinctoris 1477, Zarlino 1558, Fux 1725), bè trầm số và partimento của các nhạc viện Naples, lý thuyết câu nhạc của Riepel và Koch (1782–1793), nhạc viện Paris và Reicha, Formenlehre của Marx, Schoenberg với các bài tập theo mẫu, Hindemith, lớp của Nadia Boulanger và Messiaen. Bốn mô hình dạy — quy tắc, mô phỏng mẫu, ứng tác trên đàn phím, xưởng góp ý — và cách kết hợp chúng hôm nay.",
    refs: [
      ["Wikipedia — Gradus ad Parnassum (Fux)", "https://en.wikipedia.org/wiki/Gradus_ad_Parnassum"],
      ["Wikipedia — Heinrich Christoph Koch", "https://en.wikipedia.org/wiki/Heinrich_Christoph_Koch"],
      ["Wikipedia — Anton Reicha", "https://en.wikipedia.org/wiki/Anton_Reicha"],
      ["Wikipedia — Nadia Boulanger", "https://en.wikipedia.org/wiki/Nadia_Boulanger"],
      ["Monuments of Partimenti (Gjerdingen, Northwestern)", "https://faculty-web.at.northwestern.edu/music/gjerdingen/partimenti/index.htm"],
    ],
    body: `
Trước thế kỷ 20, không ai học "sáng tác" như một môn tách khỏi phần còn lại. Người học chơi đàn, hát, chép nhạc, học bè trầm số và đối âm — và **tác phẩm đầu tay là bài tập cuối cùng**. Bài này đi qua các mô hình dạy chính, để người học hôm nay chọn được cách phù hợp. Quay lại [[lo-trinh-sang-tac]].

::timeline 1477=Tinctoris 1558=Zarlino 1725=Fux 1752=Riepel 1757=Kirnberger 1782=Koch 1795=Nhạc_viện_Paris 1824=Reicha 1837=Marx 1911=Schoenberg 1937=Hindemith 1942=Schoenberg_Models 1944=Messiaen 1946=Darmstadt 2007=Gjerdingen | Các giáo trình và trường lớp nhắc trong bài

## Thời Phục hưng: quy tắc đối âm
- **Johannes Tinctoris**, *Liber de arte contrapuncti* (1477): quy tắc dùng thuận âm và nghịch âm giữa các bè, kèm lời khen chê các nhạc sĩ đương thời.
- **Gioseffo Zarlino**, *Le istitutioni harmoniche* (1558): hệ thống hoá phức điệu thời Willaert — nền của [[phong-cach-palestrina]].
- Cách học thật sự là **hát trong ca đoàn nhà thờ** và **chép tác phẩm của thầy**. Kiến thức sáng tác nằm trong tai và tay trước khi nằm trong sách.

## Thế kỷ 18: bè trầm, đối âm và câu nhạc
| Truyền thống | Người học làm gì | Bài liên quan |
|---|---|---|
| **Fux, Gradus ad Parnassum (1725)** | Viết đối âm trên một cantus firmus theo năm loại, từ nốt chọi nốt đến đối âm hoa mỹ; sách viết dạng đối thoại thầy – trò | [[doi-am-5-loai]], [[cantus-firmus]] |
| **Nhạc viện Naples** | Chơi [[partimento]] (bè trầm phải "điền" thành bản nhạc), hát solfeggi, thuộc lòng các khuôn quen | [[luoc-do-galant]] |
| **Bach và học trò** | Bè trầm số bốn bè, rồi chorale, rồi Inventions, tổ khúc, Bình quân luật | [[bach-day-hoc-tro]], [[tai-lieu-su-pham-cua-bach]] |
| **Riepel (1752–1768), Koch (1782–1793)** | Học cách ghép câu như ghép câu văn: chỗ ngắt nhỏ, ngắt vừa, dấu chấm hết; nối, mở rộng, rút gọn câu | [[cau-nhac]], [[mo-rong-cau-nhac]] |

Heinrich Christoph Koch (*Versuch einer Anleitung zur Composition*, ba tập 1782–1793) so sánh âm nhạc với **dấu câu trong văn**: kết nửa như dấu phẩy, kết trọn như dấu chấm. Ông dạy người học **mở rộng** một câu 4 ô bằng lặp, chèn, kéo dài kết — chính là cách nhìn mà lý thuyết hình thức hiện đại ([[chuc-nang-hinh-thuc|Caplin]]) kế thừa.

Cùng thời có các **trò chơi xúc xắc soạn nhạc**: Kirnberger in *Der allezeit fertige Polonoisen- und Menuettenkomponist* năm 1757; bản nổi tiếng nhất in năm 1792 dưới tên Mozart nhưng **chưa được xác nhận là của ông** (xem [[sang-tac-co-dien]]). Chúng cho thấy nhạc galant được xây từ **những ô nhịp lắp ghép được** — một ý tưởng về sau dẫn tới [[sang-tac-cong-nghe-va-may-tinh|soạn nhạc bằng thuật toán]].

## Thế kỷ 19: nhạc viện và "học thuyết hình thức"
- **Nhạc viện Paris** (thành lập 1795) tách các lớp hoà âm, đối âm và fugue, sáng tác; giải **Prix de Rome** thành mục tiêu của sinh viên.
- **Anton Reicha** — bạn của Beethoven, thầy của Liszt, Berlioz, Franck, Gounod — viết *Traité de mélodie* (1814) và *Traité de haute composition musicale* (1824–1826).
- **Carl Czerny**, *School of Practical Composition* op. 600: hướng dẫn viết từng thể loại, từ biến tấu đến giao hưởng.
- **Adolf Bernhard Marx**, *Die Lehre von der musikalischen Komposition* (1837–1847): dạy sáng tác qua **các khuôn hình thức** (ca khúc, rondo, sonata). Marx thường được coi là người đặt tên "hình thức sonata"; truyền thống *Formenlehre* này là gốc của các sách hình thức trong trường nhạc — xem [[hinh-thuc-sonata]].

## Thế kỷ 20: từ mẫu đến ngôn ngữ riêng
| Người thầy | Cách dạy | Học trò hoặc ảnh hưởng |
|---|---|---|
| **Arnold Schoenberg** | *Harmonielehre* (1911), *Models for Beginners in Composition* (1942), *Fundamentals of Musical Composition* (in 1967, sau khi ông mất): viết theo mẫu của Beethoven, Brahms; motif, [[cau-nhac|sentence và period]], biến tấu phát triển | Berg, Webern, Cage; lớp ở UCLA |
| **Paul Hindemith** | *Unterweisung im Tonsatz* (1937): một hệ thống hoà âm – giai điệu mở rộng, dạy tay nghề viết cho mọi nhạc cụ | Đại học Yale |
| **Nadia Boulanger** | Đối âm, hoà âm bàn phím, phân tích, nghe và hát — kỷ luật tay nghề, không áp phong cách | Copland, Piazzolla, Philip Glass, Quincy Jones |
| **Olivier Messiaen** | *Technique de mon langage musical* (1944); lớp phân tích ở Nhạc viện Paris — dạy nghe nhịp, chim hót, nhạc ngoài châu Âu | Boulez, Stockhausen, Xenakis; Nguyễn Thiện Đạo (xem [[nguyen-thien-dao]]) |
| **Khoá hè Darmstadt** (từ 1946) | Xưởng, hoà nhạc và tranh luận về nhạc mới | Thế hệ chuỗi toàn phần — xem [[sang-tac-the-ky-20]] |

Nửa sau thế kỷ 20, sáng tác vào **đại học** với hình thức **xưởng** (workshop): sinh viên viết, nhạc công đọc thử, cả lớp góp ý. Đầu thế kỷ 21, nghiên cứu của Robert Gjerdingen (*Music in the Galant Style*, 2007) và Giorgio Sanguinetti làm sống lại partimento và lược đồ — tức là quay về cách dạy của thế kỷ 18.

## Bốn mô hình dạy
| Mô hình | Mạnh | Yếu | Dùng thế nào hôm nay |
|---|---|---|---|
| **Quy tắc → tự do** (Fux, hoà âm bốn bè) | Tai và tay quen với nối bè chuẩn | Dễ thành "bài tập khô", xa nhạc thật | Làm nền, song song với tác phẩm thật |
| **Mô phỏng mẫu** (Koch, Schoenberg) | Học đúng ngôn ngữ của một phong cách | Dễ dừng ở bắt chước | Chép – phân tích – viết lại với chất liệu mới ([[bai-tap-sang-tac]]) |
| **Ứng tác trên đàn** (partimento, bè trầm số) | Nhanh, gắn với tai và tay | Khó khi chưa vững đàn phím | Tập [[ky-nang-dan-phim-chuc-nang|hoà âm trên phím]], [[ngau-hung-piano]] |
| **Xưởng góp ý** (đại học, Darmstadt) | Được nghe tác phẩm mình, nhận phản hồi | Cần nhạc công, người hướng dẫn | Thu âm, nhờ bạn chơi thử, nhóm học |

## Với người tự học
1. **Kết hợp cả bốn.** Mỗi tuần: một bài quy tắc (đối âm, hoà âm), một bài viết theo mẫu, mười phút ứng tác trên đàn, và đưa một bài cho người khác nghe.
2. **Chọn một "thầy" bằng tác phẩm.** Như Bach chép Vivaldi: chọn một nhà soạn nhạc, chép tay vài bài, phân tích, rồi viết một bài "giả" phong cách đó.
3. **Đọc giáo trình gốc khi có thể.** Fux, Schoenberg (*Fundamentals*), Gjerdingen đều có bản tiếng Anh; xem thêm [[nguon-tra-cuu-am-nhac-hoc]].
`,
  },
  {
    slug: "quy-trinh-sang-tac",
    title: "Quy trình sáng tác: ý tưởng, phác thảo và làm việc đều đặn",
    category: 'composition',
    also: ['musicology'],
    aliases: ["quy trình sáng tác", "cảm hứng sáng tác", "phác thảo", "sketch", "compositional process", "kinh nghiệm sáng tác", "bí kíp sáng tác"],
    summary: "Nhà soạn nhạc thật sự làm việc thế nào? Bốn giai đoạn sáng tạo của Wallas (1926); sổ phác thảo của Beethoven; huyền thoại Mozart “nghe cả bản nhạc trong đầu” dựa trên một lá thư giả (in năm 1815, Rochlitz); Haydn “buộc phải độc đáo”; Tchaikovsky viết cho bà von Meck năm 1878 rằng cảm hứng là “người khách không thích ghé nhà kẻ lười”; Stravinsky và giới hạn. Kèm một quy trình làm việc thực tế cho người học.",
    refs: [
      ["Tchaikovsky Research — Letter 862 (24 June/6 July 1878)", "https://en.tchaikovsky-research.net/pages/Letter_862"],
      ["Tchaikovsky Research — Letter 778 (5/17 March 1878)", "https://en.tchaikovsky-research.net/pages/Letter_778"],
      ["Wikipedia — Johann Friedrich Rochlitz", "https://en.wikipedia.org/wiki/Johann_Friedrich_Rochlitz"],
      ["Wikipedia — Graham Wallas", "https://en.wikipedia.org/wiki/Graham_Wallas"],
      ["Wikipedia — Ludwig van Beethoven (phần phong cách và phác thảo)", "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven"],
    ],
    body: `
Người mới học sáng tác hay hình dung một khoảnh khắc "cảm hứng" mang đến cả bản nhạc. Tài liệu lịch sử kể một câu chuyện khác: **ý tưởng nhỏ, làm việc nhiều, sửa rất nhiều**. Bài này dựa trên thư từ, bản phác thảo và nghiên cứu tâm lý sáng tạo; chỗ nào nguồn có vấn đề đều ghi rõ. Quay lại [[lo-trinh-sang-tac]].

## Bốn giai đoạn của Wallas (1926)
Nhà tâm lý học xã hội Graham Wallas, trong *The Art of Thought* (1926), chia quá trình sáng tạo thành bốn giai đoạn. Mô hình này không được thiết kế riêng cho âm nhạc nhưng hay được dùng để mô tả công việc sáng tác:
| Giai đoạn | Nghĩa | Trong sáng tác |
|---|---|---|
| **Chuẩn bị** | Làm việc có ý thức với vấn đề | Chọn thể loại, nhạc cụ, độ dài; thử motif, hợp âm |
| **Ấp ủ** | Tạm rời vấn đề | Đi dạo, làm việc khác — ý tưởng "chín" ngoài ý thức |
| **Loé sáng** | Lời giải hiện ra | Một giai điệu, một cách nối đoạn bất chợt tìm ra |
| **Kiểm chứng** | Kiểm tra, hoàn thiện | Viết ra, chơi thử, sửa, phối |

Điều quan trọng: **loé sáng chỉ đến sau chuẩn bị**. John Sloboda (*The Musical Mind*, 1985) nhận xét sáng tác là hoạt động âm nhạc **ít được nghiên cứu trực tiếp nhất**, vì khó quan sát; phần lớn hiểu biết đến từ bản phác thảo và lời tự kể của nhà soạn nhạc.

## Beethoven: phác thảo không ngừng
Beethoven giữ **sổ phác thảo** suốt đời: sổ lớn để trên bàn và sổ nhỏ bỏ túi khi đi dạo. Từ thế kỷ 19, Gustav Nottebohm công bố các nghiên cứu về chúng; danh mục đầy đủ là *The Beethoven Sketchbooks* (Johnson, Tyson, Winter, 1985). Phác thảo cho thấy:
- Nhiều chủ đề nổi tiếng **bắt đầu rất tầm thường** và được gọt qua nhiều phiên bản.
- Beethoven thường viết **bản phác liên tục** (một dòng giai điệu chạy suốt một đoạn dài) trước khi lo đến hoà âm và phối.
- Ông làm **nhiều tác phẩm cùng lúc**, một ý có thể chuyển từ tác phẩm này sang tác phẩm khác.

Bài học cho người học: **ghi lại mọi ý**, kể cả ý dở; giá trị nằm ở việc **phát triển**, không phải ở ý gốc — xem [[viet-chu-de]] và [[motif]].

## Mozart: huyền thoại và lá thư giả
Huyền thoại Mozart "nghe trọn bản nhạc trong đầu rồi chỉ việc chép ra" dựa chủ yếu vào một **lá thư được cho là của Mozart**, in năm 1815 trên tạp chí *Allgemeine musikalische Zeitung* — 24 năm sau khi ông mất. Từ những năm 1850, Otto Jahn đã coi đó là **thư giả**, do Friedrich Rochlitz (biên tập viên tạp chí) bịa ra; từ nghiên cứu của Maynard Solomon (1991), giới nghiên cứu Mozart coi các giai thoại của Rochlitz nói chung là không đáng tin.

Thực tế, Mozart **có phác thảo**: nghiên cứu của Ulrich Konrad (*Mozarts Schaffensweise*, 1992) liệt kê hàng trăm phác thảo và đoạn dở dang. Đúng là Mozart có trí nhớ và khả năng làm việc trong đầu rất lớn — trong thư gửi cha khi viết *Idomeneo* (cuối 1780) ông có câu thường được dịch là "mọi thứ đã soạn xong, nhưng chưa viết ra" (**chưa đối chiếu nguyên văn trong ấn bản thư Bauer – Deutsch**). Nhưng "soạn xong trong đầu" ở đây là kết quả của làm việc, không phải phép màu.

## Haydn: cô lập và "buộc phải độc đáo"
Theo tiểu sử của Georg August Griesinger (1810), Haydn nói về những năm làm việc cho gia đình Esterházy: ông được tự do thử nghiệm với dàn nhạc riêng, xa thế giới, không ai làm ông hoang mang, "**so musste ich original werden**" — "nên tôi đành phải trở nên độc đáo". Câu này hay được dịch thành "buộc phải độc đáo"; giới nghiên cứu lưu ý tiểu sử Griesinger trộn trích dẫn trực tiếp với giai thoại, nên đây là lời Haydn **qua cách kể của Griesinger**.

Bài học: **thử nghiệm đều đặn với nhạc công thật** (Haydn nghe ngay tác phẩm của mình hằng tuần) là một lợi thế lớn hơn mọi lý thuyết.

## Tchaikovsky: cảm hứng và lao động
Năm 1878, Tchaikovsky viết cho người bảo trợ Nadezhda von Meck nhiều thư về cách ông làm việc:
- Thư ngày **5/17 tháng 3 năm 1878** (Clarens): ông kể đang **làm việc mỗi ngày** dù không có cảm hứng thật sự, và nói cảm hứng là vị khách "không phải lúc nào cũng đến ngay khi được gọi".
- Thư ngày **24 tháng 6/6 tháng 7 năm 1878** (Kamenka): bản dịch tiếng Anh trên trang Tchaikovsky Research ghi "**Inspiration is a guest who does not like to visit the idle**" — cảm hứng là người khách không thích ghé nhà kẻ lười. Ông viết rằng mình hoặc viết theo thôi thúc bên trong, hoặc **cứ làm việc** và gọi sức mạnh ấy đến.

Câu trích phổ biến trên mạng ("…visit the lazy") là **một biến thể dịch**; bản trên đây theo trang lưu trữ thư Tchaikovsky (bản dịch có lược bớt).

## Stravinsky: giới hạn là tự do
Trong *Poétique musicale* (bài giảng Norton ở Harvard 1939–1940, in 1942), Stravinsky lập luận rằng tự do của người sáng tác **càng lớn khi tự giới hạn phạm vi hành động** và tự đặt ra chướng ngại — ý tưởng được trích rất nhiều, thường ghép với câu "nghệ thuật càng được kiểm soát, giới hạn, gia công thì càng tự do". **Chưa đối chiếu nguyên văn bản tiếng Anh (Knodel – Dahl, 1947) để xác định chương và trang**; ở đây chỉ nêu ý.

Hệ quả thực tế: **đặt luật chơi trước khi viết** — chỉ dùng năm nốt, chỉ một nhịp điệu, chỉ tay trái… Rất nhiều bài tập trong [[bai-tap-sang-tac]] dựa trên nguyên tắc này; [[toi-gian|nhạc tối giản]] và [[ky-thuat-12-am|kỹ thuật 12 âm]] cũng là những "luật chơi" tự đặt.

## Một quy trình làm việc thực tế
| Bước | Việc làm | Mẹo |
|---|---|---|
| 1. Thu ý | Ghi âm điện thoại, sổ tay, ghi chú nhanh | Đặt tên file theo ngày; không đánh giá lúc này |
| 2. Chọn khung | Thể loại, nhạc cụ, độ dài, giọng, nhịp độ | Viết ra một câu: "bài piano 2 phút, ABA, Rê thứ" |
| 3. Phác liên tục | Một dòng giai điệu + bè trầm cho cả bài, dù thô | Như Beethoven: đi hết bài trước, gọt sau |
| 4. Lấp khung | Hoà âm, kết cấu, chuyển đoạn | [[viet-hoa-am-va-be-tram]], [[ket-cau-va-viet-cho-piano]] |
| 5. Nghe lại | Chơi, thu, nghe sau một đêm | Khoảng cách thời gian giúp nghe như người khác |
| 6. Sửa | Cắt chỗ thừa, sửa chuyển đoạn, kiểm tra cao trào | [[kien-truc-tac-pham]] |
| 7. Hoàn thiện | Ký hiệu cường độ, diễn tấu, pedal, ngón | [[dien-tau]], [[vach-nhip-va-trinh-bay-ban-nhac]] |

## Kinh nghiệm chung rút ra
1. **Làm việc theo giờ, không chờ hứng.** Tchaikovsky và rất nhiều nhà soạn nhạc khác mô tả lịch làm việc đều đặn.
2. **Hoàn thành quan trọng hơn hoàn hảo.** Một bài xong rồi sửa tốt hơn nhiều bài bỏ dở.
3. **Ý tưởng tầm thường không sao.** Phác thảo của Beethoven cho thấy chủ đề lớn có thể bắt đầu rất bình thường.
4. **Nghe tác phẩm mình bằng âm thanh thật** càng sớm càng tốt — như Haydn với dàn nhạc Esterházy.
5. **Cẩn thận với giai thoại.** Nhiều câu chuyện "thiên tài viết một mạch" là truyền thuyết; xem [[lich-su-tiep-nhan-am-nhac]].
`,
  },
  {
    slug: "viet-chu-de",
    title: "Viết chủ đề: từ motif đến câu sentence và đoạn period",
    category: 'composition',
    also: ['form'],
    aliases: ["viết chủ đề", "phát triển motif", "sáng tác chủ đề", "basic idea", "ý nhạc cơ bản", "writing a theme"],
    summary: "Cách viết một chủ đề 8 ô nhịp theo truyền thống Schoenberg (Fundamentals of Musical Composition, 1967) và Caplin (1998): tìm một ý nhạc cơ bản 2 ô, biến đổi motif (mô tiến, đảo, nghịch, giãn, co, tách mảnh), rồi lắp thành câu kiểu sentence (trình bày – tiếp diễn – kết) hoặc đoạn kiểu period (câu hỏi – câu đáp). Kèm ví dụ trên khuông, mẫu của Beethoven và Mozart, và các lỗi thường gặp.",
    refs: [
      ["Wikipedia — Developing variation", "https://en.wikipedia.org/wiki/Developing_variation"],
      ["Open Music Theory — Sentence", "https://viva.pressbooks.pub/openmusictheory/chapter/the-sentence"],
      ["Open Music Theory — Period", "https://viva.pressbooks.pub/openmusictheory/chapter/the-period"],
    ],
    body: `
Chủ đề là "nhân vật" của bản nhạc. Bài [[motif]] giải thích motif là gì, [[cau-nhac]] mô tả câu và đoạn; bài này đi theo chiều ngược lại — **từ chỗ chưa có gì đến một chủ đề 8 ô hoàn chỉnh**. Phương pháp theo Schoenberg (*Fundamentals of Musical Composition*, 1967) và William Caplin (*Classical Form*, 1998). Quay lại [[lo-trinh-sang-tac]].

## Bước 1: một ý nhạc cơ bản (2 ô)
Schoenberg khuyên bắt đầu bằng một **ý nhạc ngắn có bản sắc rõ** — Caplin gọi là *basic idea*, thường dài 2 ô nhịp, gồm một hoặc vài motif. Một ý tốt có:
- **Một nét nhịp điệu dễ nhận ra** (nốt chấm dôi, đảo phách, nhóm ba…) — nhịp điệu thường quan trọng hơn cao độ.
- **Một bước nhảy đặc trưng** hoặc một đường nét rõ (lên rồi xuống, vòng quanh một nốt).
- **Chỗ "hở"** để phát triển: chưa kết, còn muốn đi tiếp.

::staff treble E4 G4 C5 B4 | Ý nhạc gốc (ví dụ của thư viện): lên quãng 3, lên quãng 4, xuống quãng 2

## Bước 2: biến đổi motif
Schoenberg gọi cách xây cả bản nhạc bằng biến đổi liên tục một ý ban đầu là **biến tấu phát triển** (*entwickelnde Variation*). Các phép biến đổi cơ bản:
| Phép | Làm gì | Ví dụ trên ý gốc |
|---|---|---|
| **Lặp nguyên** | Nhắc lại y hệt | E – G – C – B |
| **Mô tiến** | Dời cả ý lên/xuống một bậc | F – A – D – C |
| **Đảo** | Đổi chiều các quãng | E – C – G – A |
| **Nghịch** | Đi từ cuối về đầu | B – C – G – E |
| **Giãn / co** | Nới rộng hoặc thu hẹp quãng (quãng 4 thành 5…) | E – G – D – C |
| **Tăng / giảm trường độ** | Nhân đôi hoặc chia đôi giá trị nốt | Cùng cao độ, chậm gấp đôi |
| **Tách mảnh** | Chỉ giữ một phần rồi lặp, mô tiến | C – B, D – C, E – D… |
| **Đổi hoà âm** | Giữ giai điệu, đặt hợp âm khác | Cùng nốt, nghe "màu" khác |

::staff treble F4 A4 D5 C5 | Mô tiến lên một bậc
::staff treble E4 C4 G3 A3 | Đảo (đổi chiều từng quãng)
::staff treble C5 B4 D5 C5 E5 D5 | Tách mảnh: giữ hai nốt cuối và mô tiến đi lên — kiểu tiếp diễn điển hình

Các kỹ thuật này dùng chung cho mọi phong cách: [[sang-tac-jazz]] dạy y hệt (đảo, nghịch, giãn, co, tách mảnh), và [[ky-thuat-12-am]] là phiên bản triệt để của "đảo" và "nghịch".

## Bước 3a: câu kiểu sentence (8 ô)
| Ô | Chức năng | Nội dung |
|---|---|---|
| 1–2 | **Ý cơ bản** | Ý gốc trên hợp âm chủ |
| 3–4 | **Lặp lại** | Lặp nguyên hoặc mô tiến (thường trên hợp âm át) |
| 5–6 | **Tiếp diễn** | Tách mảnh: ý ngắn lại, đổi hợp âm nhanh hơn — cảm giác "tăng tốc" |
| 7–8 | **Kết** | Kết trọn (V – I) hoặc kết nửa (dừng ở V) |

Ví dụ kinh điển mà Schoenberg dùng: mở đầu **Sonata piano op. 2 số 1 của Beethoven** (Fa thứ) — ý 2 ô, lặp ở hợp âm át, rồi tách mảnh dồn lên kết nửa. Xem phân tích chung ở [[cau-nhac]].

## Bước 3b: đoạn kiểu period (8 ô)
| Ô | Chức năng | Nội dung |
|---|---|---|
| 1–2 | Ý cơ bản | Như trên |
| 3–4 | Ý tương phản | Ý khác, dẫn tới **kết nửa** (câu hỏi) |
| 5–6 | Ý cơ bản quay lại | Nhắc lại ô 1–2 |
| 7–8 | Ý tương phản, kết trọn | Lần này **kết trọn** (câu đáp) |

Ví dụ: chủ đề chương 1 **Sonata K. 331 của Mozart** (La trưởng). Period cho cảm giác cân đối, "hỏi – đáp"; sentence cho cảm giác dồn tới. Bài [[chuc-nang-hinh-thuc]] giải thích vì sao nhạc Cổ điển dùng cả hai và các dạng lai.

## Bước 4: kiểm tra chủ đề
1. **Hát được không?** Nếu là chủ đề giai điệu, hát lại sau một ngày mà vẫn nhớ là dấu hiệu tốt — xem [[viet-giai-dieu]].
2. **Kết có rõ không?** Chơi riêng hai ô cuối: nghe ra kết nửa hay kết trọn ([[cau-ket]]).
3. **Có cái gì để phát triển không?** Một chủ đề quá tròn trịa, quá "đủ" khó phát triển thành cả chương; Beethoven thường để lại một motif dễ tách.
4. **Nhịp điệu hoà âm có hợp lý?** Hợp âm đổi chậm ở đầu, nhanh dần về kết ([[nhip-dieu-hoa-am]]).

## Lỗi thường gặp
- **Quá nhiều ý.** Bốn motif khác nhau trong 8 ô — người nghe không nhớ được cái nào. Một ý, biến đổi nhiều lần.
- **Lặp y nguyên mãi.** Lặp hai lần là nhấn mạnh, lặp bốn lần y hệt là đứng yên; lần thứ ba nên biến đổi.
- **Kết không rõ.** Câu 8 ô nhưng không có kết — nghe như chưa xong.
- **Bỏ qua bè trầm.** Chủ đề hay cần bè trầm có hướng — xem [[viet-hoa-am-va-be-tram]].

## Bài tập
- Lấy ý gốc ở trên, viết một sentence 8 ô ở Đô trưởng và một period 8 ô ở La thứ.
- Lấy 2 ô đầu một bài trong mục [[phuong-phap-phan-tich-tac-pham|Phân tích tác phẩm]] (ví dụ [[phan-tich-sonata-k545]]), giữ ý đó, viết tiếp 6 ô khác bản gốc, rồi so sánh.
- Thêm ở [[bai-tap-sang-tac]].
`,
  },
  {
    slug: "viet-giai-dieu",
    title: "Viết giai điệu: đường nét, đỉnh, bước và nhảy",
    category: 'composition',
    also: ['form'],
    aliases: ["viết giai điệu", "sáng tác giai điệu", "melody writing", "đỉnh giai điệu", "cao trào giai điệu", "đường nét giai điệu"],
    summary: "Những gì nghiên cứu và giáo trình nói về giai điệu “hay và dễ hát”: đi bậc là chính, nhảy rồi quay lại (Meyer; von Hippel & Huron 2000 giải thích bằng hồi quy về giữa âm vực), đường vòm (Huron 1996), một đỉnh duy nhất, cân bằng lặp lại và bất ngờ, quan hệ với hoà âm và lời. Kèm quy trình viết và bài tập.",
    refs: [
      ["Wikipedia — Melody", "https://en.wikipedia.org/wiki/Melody"],
      ["von Hippel & Huron (2000), Why do skips precede reversals? — Music Perception", "https://online.ucpress.edu/mp/article/18/1/59/62103/Why-Do-Skips-Precede-Reversals-The-Effect-of"],
      ["Open Music Theory — Phrase model", "https://viva.pressbooks.pub/openmusictheory/chapter/performing-harmonic-analysis-using-the-phrase-model"],
    ],
    body: `
Không có công thức cho giai điệu hay, nhưng có **những khuynh hướng thống kê** của hàng nghìn giai điệu và **những lời khuyên nghề** lặp lại qua nhiều giáo trình. Bài [[giai-dieu]] định nghĩa các khái niệm; bài này dùng chúng để **viết**. Quay lại [[lo-trinh-sang-tac]].

## Năm khuynh hướng có nghiên cứu
| Khuynh hướng | Nội dung | Nguồn |
|---|---|---|
| **Đi bậc là chính** | Quãng nhỏ (2, 3) chiếm phần lớn các bước đi trong giai điệu ở nhiều nền văn hoá | Tổng hợp trong Huron, *Sweet Anticipation* (2006) |
| **Nhảy xa thường đi lên, đi bậc thường đi xuống** | Bước nhảy lớn hay hướng lên, đường đi xuống hay chia nhỏ thành bậc | Vos & Troost (1989) |
| **Nhảy rồi quay lại** | Sau một bước nhảy lớn, giai điệu thường đổi chiều ("lấp khoảng trống") | Leonard Meyer; von Hippel & Huron (2000) |
| **Đường vòm** | Câu nhạc dân ca phương Tây thường đi lên rồi đi xuống | Huron (1996), kho dân ca Essen |
| **Kết đi xuống** | Câu thường kết bằng đi bậc xuống về nốt ổn định | Ghi nhận chung; xem [[cau-ket]] |

Về "nhảy rồi quay lại": von Hippel và Huron (2000) chỉ ra rằng phần lớn hiện tượng này có thể giải thích bằng **hồi quy về giữa âm vực** — một bước nhảy lớn thường đưa giai điệu ra gần mép âm vực, và từ đó chỉ còn chỗ để đi ngược lại. Với người viết, lời khuyên vẫn đúng: **sau nhảy lớn, quay lại bằng bậc**; nhưng hiểu lý do giúp biết khi nào có thể phá lệ (nhảy từ đáy âm vực lên giữa thì không cần quay lại).

::staff treble C5 A5 G5 F5 E5 D5 | Nhảy lên quãng 6 rồi lấp khoảng trống bằng đi bậc xuống

## Đỉnh của giai điệu
- **Một đỉnh cao nhất** cho mỗi câu (hoặc cả bài) — xuất hiện **một lần**. Hai đỉnh bằng nhau làm giảm sức nặng của cả hai.
- Đỉnh thường ở **nửa sau** câu; giáo trình jazz TJPS gợi ý khoảng 2/3 – 3/4 câu (xem [[sang-tac-jazz]]). Đây là lời khuyên thực hành, không phải định luật.
- Đỉnh nên rơi vào **phách mạnh hoặc nốt dài**, và thường đi kèm một hợp âm "căng" (IV, ii, V7, hợp âm mượn).
- Trong bài dài, các đỉnh từng câu nên **tăng dần** tới cao trào chung — xem [[kien-truc-tac-pham]].

## Âm vực và người hát
- **Giọng hát không chuyên**: khoảng một quãng 8 đến quãng 10 là an toàn. Ca khúc phổ thông hay để verse thấp, chorus cao hơn vài bậc ([[sang-tac-ca-khuc]]).
- **Nhạc cụ**: mỗi nhạc cụ có vùng "đẹp" riêng — viết giai điệu violin khác viết cho kèn ([[phoi-khi-va-viet-cho-nhac-cu]]).
- **Tessitura** (vùng hát nhiều nhất) quan trọng hơn nốt cao nhất: một nốt cao thoáng qua dễ hơn nhiều nốt cao kéo dài.

## Nhịp điệu của giai điệu
- **Nhịp điệu làm nên tính cách.** Cùng một chuỗi cao độ, đổi nhịp điệu là đổi hẳn tính cách (hành khúc, valse, ru). Lưu ý: với giai điệu *quen*, thí nghiệm của Hébert và Peretz (1997) cho thấy người nghe nhận ra nhờ **cao độ** nhiều hơn nhờ nhịp điệu — nhịp điệu một mình ít khi đủ để nhận ra bài.
- **Lặp nhịp điệu, đổi cao độ** là cách đơn giản nhất để có thống nhất mà không đơn điệu.
- **Nốt dài ở cuối câu** cho người nghe (và người hát) chỗ thở.
- **Đảo phách** tạo năng lượng; dùng có chủ đích ([[dao-phach]]).

## Giai điệu và hoà âm
1. **Nốt hợp âm ở phách mạnh, nốt ngoài hợp âm ở phách yếu** — quy ước Cổ điển; [[not-ngoai-hop-am|nốt chờ và nốt luyến]] cố ý đảo quy ước này để tạo căng.
2. **Giai điệu nằm sẵn trong hợp âm** (rải hợp âm) dễ hát nhưng dễ nhàm; **đi bậc nối các nốt hợp âm** là cân bằng tốt.
3. **Bè ngoài**: giai điệu và bè trầm nên chuyển động ngược chiều ở nhiều chỗ — xem [[viet-hoa-am-va-be-tram]].
4. Có hai cách bắt đầu: **giai điệu trước** (rồi [[phoi-hoa-am-giai-dieu|phối hoà âm]]) hoặc **hợp âm trước** (rồi viết giai điệu trên vòng hợp âm — cách của [[sang-tac-jazz|contrafact]] và nhiều ca khúc pop). Thử cả hai.

## Lặp lại và bất ngờ
Theo lý thuyết [[ky-vong-am-nhac]] (Meyer 1956, Huron 2006), người nghe thích **đoán đúng phần lớn** và **bất ngờ đúng lúc**. Với người viết:
- Lặp đủ để người nghe nắm được quy luật (thường 2 lần).
- Phá quy luật ở lần thứ 3 hoặc ở cuối câu.
- Một chi tiết lạ (một quãng hiếm, một nốt ngoài thang) làm giai điệu dễ nhớ hơn — nghiên cứu về [[nhac-ket-trong-dau|nhạc kẹt trong đầu]] ghi nhận các bài "dính tai" thường có đường nét quen kèm vài quãng bất thường.

## Quy trình viết một giai điệu 8 ô
1. **Chọn khung**: giọng, nhịp, âm vực, kết cuối (nốt gì, ở ô nào).
2. **Viết nhịp điệu trước** cho cả 8 ô (gõ, đọc âm tiết nhịp — [[am-tiet-nhip]]).
3. **Đặt các nốt "trụ"**: nốt đầu, đỉnh, nốt kết nửa (ô 4), nốt kết (ô 8).
4. **Nối các trụ** bằng đi bậc là chính, thêm một hai bước nhảy có chủ đích.
5. **Hát** — sửa chỗ khó hát, chỗ hụt hơi.
6. **Đặt hoà âm** và sửa giai điệu ở chỗ hợp âm "chọi".

## Bài tập
- Viết 3 giai điệu 8 ô trên **cùng một nhịp điệu**, đỉnh đặt ở ô 3, ô 5 và ô 7. So sánh cảm giác.
- Viết một giai điệu chỉ dùng **5 nốt ngũ cung** — rồi đọc [[hoa-am-cho-giai-dieu-ngu-cung]] để đặt hoà âm.
- Chọn một chủ đề trong [[phan-tich-fur-elise]] hoặc [[phan-tich-nocturne-op9-so2]], đánh dấu đỉnh, bước nhảy, chỗ lấp khoảng trống.
`,
  },
  {
    slug: "viet-hoa-am-va-be-tram",
    title: "Hoà âm và bè trầm khi sáng tác",
    category: 'composition',
    also: ['harmony'],
    aliases: ["viết bè trầm", "chọn hợp âm khi sáng tác", "viết hoà âm", "bass line", "tiến trình hợp âm sáng tác", "hoà âm cho sáng tác"],
    summary: "Từ bài tập hoà âm sang hoà âm của tác phẩm: hai cách bắt đầu (giai điệu trước hay bè trầm trước), vòng chức năng chủ – hạ át – át, các lược đồ galant như những “viên gạch” có vị trí quen thuộc (Romanesca mở đầu, Prinner đáp, Fonte và Monte sau vạch kép, Ponte trước tái hiện), viết bè trầm có hướng và đối âm với giai điệu, thể đảo, âm ngân, nhịp điệu hoà âm và màu sắc (hợp âm mượn, át phụ, trung âm cromatic).",
    refs: [
      ["Gjerdingen, Music in the Galant Style (2007) — Oxford", "https://global.oup.com/academic/product/music-in-the-galant-style-9780195313710"],
      ["Wikipedia — Rule of the octave", "https://en.wikipedia.org/wiki/Rule_of_the_octave"],
      ["Open Music Theory — Galant schemas (tóm tắt)", "https://viva.pressbooks.pub/openmusictheory/chapter/galant-schemas-summary"],
    ],
    body: `
Bài tập hoà âm ở trường thường cho sẵn giai điệu hoặc bè trầm và hỏi "đặt hợp âm gì". Khi sáng tác, **chính mình** phải quyết định cả hai. Bài này nối các bài hoà âm sẵn có ([[giao-trinh-hoa-am]], [[phoi-hoa-am-giai-dieu]], [[luoc-do-galant]]) với công việc viết. Quay lại [[lo-trinh-sang-tac]].

## Hai cách bắt đầu
| Cách | Làm thế nào | Hợp với | Truyền thống |
|---|---|---|---|
| **Giai điệu trước** | Viết giai điệu, rồi tìm hợp âm và bè trầm | Ca khúc, chủ đề trữ tình | Lied, ca khúc phổ thông |
| **Bè trầm trước** | Viết bè trầm (hoặc chọn một khuôn), rồi đặt giai điệu lên | Nhạc có nhiều chuyển động, biến tấu, nhạc nhảy | [[partimento]], [[passacaglia-va-chaconne]], [[bass-so]] |
| **Vòng hợp âm trước** | Chọn vòng 4 hợp âm, lặp, ngẫu hứng giai điệu | Pop, jazz, nhạc phim | [[hoa-am-pop]], [[sang-tac-jazz]] |

Nhạc sĩ thế kỷ 18 nghĩ **từ bè trầm lên**: bè trầm và giai điệu là hai bè ngoài, phần giữa chỉ là "lấp". **Quy tắc quãng 8** (*règle de l'octave*, thường gắn với tên François Campion, 1716) cho sẵn hợp âm cho từng bậc của bè trầm đi lên và đi xuống — một cách để bất kỳ bè trầm đi bậc nào cũng có hoà âm ngay.

## Vòng chức năng: khung của mọi câu
Trong nhạc điệu tính, câu nhạc thường đi theo vòng **chủ (T) → hạ át (S/PD) → át (D) → chủ (T)** ([[chuc-nang-hoa-am]]). Khi viết:
1. **Đầu câu**: khẳng định chủ (I, có thể xen V hoặc vii°6 làm "thêu").
2. **Giữa câu**: rời chủ — IV, ii, vi; có thể mô tiến.
3. **Cuối câu**: hạ át → át → (chủ) — chỗ đặt [[cau-ket|kết]].

Một câu "thiếu hướng" thường là câu **không có hạ át** hoặc **đến át quá sớm** rồi đứng đó.

## Lược đồ galant: những viên gạch có chỗ đứng
Gjerdingen (*Music in the Galant Style*, 2007) cho thấy các khuôn bè trầm – giai điệu thế kỷ 18 không chỉ là "tiến trình" mà còn có **vị trí quen** trong bài:
| Lược đồ | Bè trầm (bậc) | Giai điệu (bậc) | Vị trí hay gặp |
|---|---|---|---|
| **Romanesca** | Liền bậc 1 – 7 – 6 – 5, hoặc nhảy 1 – 5 – 6 – 3 | Nhiều dạng (Canon Pachelbel: 3 – 2 – 1 – 7) | Mở đầu ("nước đi mở màn") |
| **Do – Re – Mi** | 1 – 7 – 1 | 1 – 2 – 3 | Mở đầu |
| **Prinner** | 4 – 3 – 2 – 1 | 6 – 5 – 4 – 3 | Đáp lại câu mở đầu |
| **Fonte** | Mô tiến đi xuống (ii rồi I) | — | Ngay sau vạch kép |
| **Monte** | Mô tiến đi lên (IV rồi V) | — | Dồn lên, tăng căng |
| **Ponte** | Ngân bậc 5 | Thay đổi trên âm ngân | Trước tái hiện |
| **Quiescenza** | Ngân bậc 1 | ♭7 – 6 – ♮7 – 1 | Sau kết, "nghỉ ngơi" |

::grand C5/C3=I A4+C5/F3=IV G4+C5/E3=I6 F4+B4/D3=vii°6 E4+C5/C3=I | Một Prinner ở Đô trưởng: giai điệu 6 – 5 – 4 – 3 trên bè trầm 4 – 3 – 2 – 1 (sau hợp âm chủ mở đầu)

Viết một bài minuet ngắn chỉ bằng các lược đồ là bài tập rất hiệu quả — xem [[sang-tac-co-dien]] và [[bai-tap-sang-tac]].

## Viết bè trầm có hướng
- **Bè trầm là giai điệu thứ hai.** Hát được, có đường nét, có đỉnh và đáy.
- **Đi bậc và nhảy ở kết.** Bè trầm đi bậc nhờ [[the-dao-hop-am|thể đảo]] (I – V6 – I, IV – I6…); nhảy quãng 4/5 rõ nhất ở kết (V – I).
- **Đối âm với giai điệu.** Hai bè ngoài chuyển động **ngược chiều** nhiều; tránh quãng 5 và quãng 8 song song giữa chúng ([[quang-va-chuyen-dong-doi-am]], [[luat-hoa-am-bon-be]]).
- **Bè trầm đi xuống** (bậc 1 – 7 – 6 – 5) mang màu than thở; dạng cromatic là *lament bass* ([[passacaglia-va-chaconne]], [[line-cliche]]).
- **Âm ngân** ([[bass-ngan]]): ngân bậc 1 ở đầu hoặc cuối bài để ổn định; ngân bậc 5 trước tái hiện để chờ đợi.

## Nhịp điệu hoà âm
[[nhip-dieu-hoa-am|Tốc độ đổi hợp âm]] là một công cụ hình thức:
- **Chậm** (1 hợp âm/ô hoặc hơn) ở đầu chủ đề — ổn định.
- **Nhanh dần** khi tiến tới kết — cảm giác dồn.
- **Rất chậm hoặc đứng yên** ở đoạn chuyển, trên âm ngân — căng chờ.
- Đổi hợp âm **qua vạch nhịp** (hợp âm cũ giữ sang phách mạnh) làm yếu phách mạnh; dùng có chủ đích.

## Màu sắc: khi nào thêm "gia vị"
| Công cụ | Hiệu quả | Bài |
|---|---|---|
| Hợp âm át phụ (V/V, V/vi…) | Nhấn một hợp âm đích, tạo hướng mạnh | [[hop-am-at-phu]] |
| Hợp âm mượn (iv, ♭VI, ♭VII trong trưởng) | U buồn, "điện ảnh" | [[hop-am-muon]] |
| Napoli, 6 tăng | Căng cao trước át ở kết lớn | [[hop-am-napoli]], [[hop-am-sau-tang]] |
| Trung âm cromatic | Chuyển màu đột ngột, sáng hoặc tối | [[trung-am-cromatic]] |
| Mô tiến | Kéo dài, dẫn sang giọng mới | [[mo-tien-hoa-am]] |
| Hợp âm mở rộng, chồng quãng 4 | Màu jazz, ấn tượng | [[hop-am-mo-rong]], [[hoa-am-quang-bon]] |

Nguyên tắc: **gia vị đặt ở chỗ quan trọng** (đỉnh, kết lớn, trước tái hiện), không rải đều mọi ô.

## Bài tập
- Lấy bè trầm Romanesca (Canon Pachelbel — [[phan-tich-canon-pachelbel]]), viết 3 giai điệu khác nhau trên nó.
- Lấy một giai điệu 8 ô của mình ([[viet-giai-dieu]]), viết **hai** bè trầm: một bè ổn định (nhiều nốt gốc), một bè đi bậc (nhiều thể đảo). So sánh.
- Viết một câu 8 ô với nhịp điệu hoà âm 1 – 1 – 1 – 1 – 2 – 2 – 4 – 1 hợp âm/ô; rồi viết lại với 2 – 2 – 2 – 2 – 1 – 1 – 1 – 1.
`,
  },
  {
    slug: "ket-cau-va-viet-cho-piano",
    title: "Kết cấu và cách viết cho piano",
    category: 'composition',
    also: ['technique'],
    aliases: ["viết cho piano", "sáng tác cho piano", "kiểu đệm piano", "piano writing", "idiomatic piano writing", "kết cấu piano"],
    summary: "Chọn kết cấu (đơn âm, chủ điệu, phức điệu, chorale) và viết “đúng tay” cho piano: các kiểu đệm (hợp âm khối, bè trầm Alberti, rải rộng kiểu nocturne, oom-pah, stride, ostinato), sắp xếp hợp âm theo chuỗi bồi âm (thưa ở dưới, dày ở trên), vùng âm đục ở bè trầm, pedal, tầm tay, chia nốt giữa hai tay, hiệu ứng “ba tay” của Thalberg — và viết cho người mới học.",
    refs: [
      ["Wikipedia — Texture (music)", "https://en.wikipedia.org/wiki/Texture_(music)"],
      ["Wikipedia — Alberti bass", "https://en.wikipedia.org/wiki/Alberti_bass"],
      ["Wikipedia — Sigismond Thalberg", "https://en.wikipedia.org/wiki/Sigismond_Thalberg"],
    ],
    body: `
Hai bản nhạc có cùng giai điệu và hợp âm có thể nghe hoàn toàn khác nhau vì **kết cấu** — cách các lớp âm thanh được sắp xếp. Bài [[ket-cau]] định nghĩa các loại kết cấu; bài này hướng dẫn **viết cho piano** sao cho hay và chơi được. Quay lại [[lo-trinh-sang-tac]].

## Chọn kết cấu theo tính cách
| Kết cấu | Cảm giác | Ví dụ piano |
|---|---|---|
| **Đơn âm / quãng 8** | Trần trụi, mạnh, cổ | Mở đầu Sonata "Appassionata" của Beethoven |
| **Chủ điệu** (giai điệu + đệm) | Hát, trữ tình | Nocturne Chopin ([[phan-tich-nocturne-op9-so2]]) |
| **Chorale** (hợp âm khối) | Trang nghiêm, thánh ca | Prelude Đô thứ op. 28 số 20 của Chopin |
| **Phức điệu** | Trí tuệ, đan xen | [[phan-tich-invention-so-1|Invention số 1]] của Bach |
| **Rải hợp âm liên tục** | Trôi chảy, không gian | [[phan-tich-prelude-do-truong|Prelude Đô trưởng]] của Bach |
| **Ostinato** | Thôi miên, nhảy múa | [[ostinato]], [[toi-gian]] |

Đổi kết cấu là cách **tạo tương phản rẻ nhất**: phần B chỉ cần đổi từ chủ điệu sang chorale là đã khác hẳn — xem [[kien-truc-tac-pham]].

## Các kiểu đệm tay trái
| Kiểu | Mô tả | Lưu ý khi viết |
|---|---|---|
| **Hợp âm khối** | Cả hợp âm cùng lúc | Dễ dày; giữ hợp âm tay trái thưa |
| **Bè trầm Alberti** | Rải thấp – cao – giữa – cao (tên theo Domenico Alberti, mất 1740) | Đặc trưng Cổ điển ([[phan-tich-sonata-k545]]); không nên đặt quá thấp |
| **Rải rộng** | Bè trầm thấp, các nốt rải trải trên hơn một quãng 8 | Kiểu nocturne; cần pedal ([[ban-dap]]) |
| **Oom-pah** (trầm – hợp âm) | Nốt trầm phách 1, hợp âm phách 2 – 3 | Valse, hành khúc |
| **Stride** | Nốt trầm (hoặc quãng 8, quãng 10) nhảy lên hợp âm giữa | [[stride-piano]] |
| **Ostinato bè trầm** | Một mẫu lặp | [[ostinato]], boogie-woogie |
| **Hợp âm nhắc lại** | Hợp âm nhịp đều ở tay phải hoặc trái | Schubert, nhạc pop ballad ([[dem-pop-ballad]]) |

## Viết hợp âm "đúng tai"
- **Thưa ở dưới, dày ở trên.** Chuỗi bồi âm tự nhiên có quãng rộng ở dưới, hẹp dần lên trên ([[chuoi-boi-am]]); hợp âm sắp xếp giống vậy nghe trong và vang.
- **Tránh quãng 3 sát nhau ở vùng trầm.** Dưới khoảng Đô 3 (C3), quãng 3 và hợp âm sát nhau nghe đục; ở vùng này nên dùng quãng 8, quãng 5, quãng 10. Đây là **kinh nghiệm thực hành** của nghề phối khí, ranh giới cụ thể thay đổi theo đàn và phòng.
- **Giai điệu ở trên cùng** và phải nổi: hoặc tách giai điệu khỏi hợp âm (cao hơn hẳn), hoặc nhân đôi quãng 8 ([[lam-noi-giai-dieu]]).
- **Đừng nhân đôi âm dẫn** và các nốt "căng" (quãng 7) — giống luật bốn bè, nhưng ở piano tai nghe rõ hơn khi nốt bị nhân đôi ở vùng cao.

## Viết vừa tay
1. **Tầm tay**: quãng 8 là an toàn cho người lớn; quãng 9 – 10 nhiều người phải rải. Viết cho học sinh nhỏ: không vượt quá quãng 6 ([[ban-tay-nho]]).
2. **Chia nốt giữa hai tay** theo vị trí trên phím, không theo khuông: nếu tay trái rảnh, cho nó lấy bớt nốt của tay phải.
3. **Pedal** cho phép tay trái nhảy xa mà âm vẫn liền — ghi pedal rõ, đổi pedal theo hợp âm.
4. **Chơi thử từng ô.** Chỗ nào chính mình chơi không được ở nhịp độ chậm, sửa ngay; chỗ nào khó mà không làm nhạc hay hơn, bỏ.
5. **Nhiều lớp mà ít nốt.** Hiệu ứng "ba tay" của Sigismond Thalberg: giai điệu ở giữa đàn, chia cho hai ngón cái, hai tay rải hợp âm ở trên và dưới — nghe như ba người chơi.

## Viết cho người mới học
- Giữ **tay ở một vị trí năm ngón** càng lâu càng tốt ([[vi-tri-nam-ngon-va-am-giai-nam-not]]).
- Một kỹ năng mỗi bài: legato, staccato, đổi vị trí, pedal…
- Tham khảo các tuyển tập viết cho trẻ của nhà soạn nhạc lớn: *Kinderszenen* (Schumann), *Album cho tuổi trẻ* op. 39 (Tchaikovsky, 1878), *Mikrokosmos* (Bartók, 1926–1939) — xem [[giao-trinh-piano-nhap-mon]] và [[lo-trinh-tac-pham]].

## Bài tập
- Lấy một chủ đề 8 ô của mình, viết lại với **5 kiểu đệm** trong bảng trên. Ghi lại kiểu nào hợp tính cách nhất.
- Viết một tiểu phẩm 16 ô kiểu ABA, đổi kết cấu ở phần B.
- Chép tay 8 ô đầu một nocturne của Chopin, quan sát khoảng cách các nốt tay trái, rồi viết một nocturne 8 ô cùng kiểu đệm — xem thêm [[tieu-pham-piano]].
`,
  },
  {
    slug: "kien-truc-tac-pham",
    title: "Kiến trúc tác phẩm: kế hoạch giọng, cao trào, tương phản và thống nhất",
    category: 'composition',
    also: ['form', 'analysis'],
    aliases: ["kiến trúc tác phẩm", "cao trào", "kế hoạch điệu tính", "tỉ lệ vàng trong âm nhạc", "golden section music", "climax", "kế hoạch tác phẩm"],
    summary: "Kéo một chủ đề thành cả bài: cân bằng thống nhất và tương phản, kế hoạch điệu tính (I – V trong trưởng, i – III trong thứ), một cao trào chính và đường năng lượng, các tham số tạo căng (âm vực, cường độ, mật độ, nhịp điệu hoà âm), chuyển đoạn và chuẩn bị tái hiện, kết và coda. Thuyết “tỉ lệ vàng” trong nhạc Bartók (Lendvai) và Debussy (Howat) được trình bày cùng các phản biện.",
    refs: [
      ["Roberts (Holy Cross) — Bartók and the golden section: Lendvai and Howat's critique", "https://mathcs.holycross.edu/~groberts/Courses/Mont2/Handouts/Lectures/Bartok-web.pdf"],
      ["Howat, Debussy in Proportion (1983) — Cambridge", "https://www.cambridge.org/9780521311458"],
      ["Wikipedia — Ernő Lendvai", "https://en.wikipedia.org/wiki/Ern%C5%91_Lendvai"],
    ],
    body: `
Viết được 8 ô hay chưa phải là viết được một bài. Kiến trúc là câu hỏi: **mỗi đoạn đứng ở đâu, làm gì, dẫn tới đâu**. Các khuôn hình thức ([[hinh-thuc-am-nhac]], [[hinh-thuc-ba-doan]], [[rondo]], [[hinh-thuc-sonata]]) là những lời giải có sẵn; bài này đưa ra các nguyên tắc nằm dưới chúng. Quay lại [[lo-trinh-sang-tac]].

## Thống nhất và tương phản
Mọi khuôn hình thức là một cách cân bằng hai nhu cầu:
- **Thống nhất**: người nghe nhận ra đây vẫn là một bài — cùng motif, cùng nhịp điệu, cùng màu hoà âm, chủ đề quay lại.
- **Tương phản**: người nghe không chán — giọng mới, chủ đề mới, kết cấu khác, nhịp độ khác.

| Tham số tương phản | Ví dụ |
|---|---|
| Giọng và điệu thức | Trưởng → thứ cùng tên; sang giọng át |
| Chủ đề và tính cách | Hành khúc → ca hát ([[ly-thuyet-chu-de]]) |
| Kết cấu | Chủ điệu → phức điệu ([[ket-cau-va-viet-cho-piano]]) |
| Âm vực | Vùng trung → vùng cao, mỏng |
| Nhịp độ và nhịp | Nhanh → chậm; 4/4 → 3/4 |
| Cường độ và mật độ | Dày, mạnh → thưa, nhẹ |

Mẹo: phần tương phản nên **giữ lại một thứ** từ phần trước (một nhịp điệu, một quãng đặc trưng) để vẫn là "cùng một bài" — đây là ý của Schoenberg về biến tấu phát triển ([[viet-chu-de]]).

## Kế hoạch điệu tính
Trong nhạc điệu tính, **giọng** là "địa lý" của bài:
- Bài giọng trưởng thường đi sang **giọng át** (I → V); bài giọng thứ sang **giọng trưởng song song** (i → III) — đây là trục của [[hinh-thuc-hai-doan]] và [[hinh-thuc-sonata]].
- Phần giữa (phát triển, đoạn B) có thể đi xa hơn: vi, ii, iii, hoặc giọng [[trung-am-cromatic|trung âm cromatic]] (thế kỷ 19).
- **Về giọng chủ** là sự kiện lớn — chuẩn bị bằng âm ngân át (Ponte), xem [[viet-hoa-am-va-be-tram]].
- Bài ngắn (16 – 32 ô) chỉ cần **một** chuyển giọng rõ; nhiều giọng quá làm mất phương hướng ([[chuyen-giong]]).

## Cao trào và đường năng lượng
Một bài thường có **một cao trào chính** — điểm căng nhất — và vài cao trào phụ dẫn tới nó. Cao trào được tạo bằng **nhiều tham số cùng lúc**:
- Âm vực cao nhất của giai điệu (hoặc thấp nhất của bè trầm).
- Cường độ mạnh nhất, mật độ dày nhất.
- Hoà âm căng nhất (hợp âm 7 giảm, 6 tăng, Napoli…).
- Nhịp điệu hoà âm nhanh nhất, hoặc ngược lại một hợp âm kéo dài.

::bars A_(ô_1–8)=2 A′_(9–16)=3 B_(17–24)=4 Chuyển_(25–28)=5 Cao_trào_(29–32)=6 A_(33–40)=3 Coda=1 max=6 | Một đường năng lượng giả định cho bài ABA 40 ô (thang 1–6 tự chấm: tổng cường độ, âm vực, mật độ, độ căng hoà âm)

Vẽ một biểu đồ như trên **trước khi viết** giúp tránh lỗi phổ biến nhất của người mới: **mọi đoạn đều căng như nhau**, hoặc cao trào đến quá sớm.

## Tỉ lệ vàng: giả thuyết và phản biện
Có một ý tưởng phổ biến rằng cao trào "nên" đặt ở khoảng **0,618** chiều dài bài (tỉ lệ vàng).
- **Ernő Lendvai** (từ những năm 1950; sách tiếng Anh *Béla Bartók: An Analysis of His Music*, 1971) cho rằng Bartók tổ chức nhiều tác phẩm theo tỉ lệ vàng và dãy Fibonacci.
- **Roy Howat** (*Debussy in Proportion*, 1983) phân tích các tỉ lệ chính xác (đối xứng và tỉ lệ vàng) trong nhạc Debussy, và tự đặt câu hỏi liệu chúng có được thiết kế có ý thức hay không.
- **Phản biện**: Howat cũng chỉ ra lỗi trong phân tích của Lendvai — chẳng hạn chương 1 *Nhạc cho đàn dây, bộ gõ và celesta* có **88 ô** chứ không phải 89 như Lendvai đếm, và cao trào điệu tính rơi ở ô 44 chứ không ở cao trào cường độ Lendvai nhấn mạnh. Các nhà nghiên cứu khác (Petersen, Gillies, Kárpáti) cũng phê phán việc chọn dữ liệu thuận lợi.

Kết luận thận trọng: **cao trào ở khoảng 2/3 – 3/4 bài là khuynh hướng hay gặp**, nhưng "tỉ lệ vàng" như một quy luật có chủ đích của nhà soạn nhạc **chưa được chứng minh**, trừ vài trường hợp có tài liệu. Dùng nó như một gợi ý, không như luật.

## Chuyển đoạn, chuẩn bị, kết
- **Chuyển đoạn** (transition): thường dùng mô tiến, tách mảnh, nhịp điệu hoà âm nhanh — nghe "đang đi".
- **Chuẩn bị tái hiện** (retransition): âm ngân át, giảm dần, hoặc dồn lên — người nghe phải **chờ** chủ đề quay lại.
- **Tái hiện** nên khác một chút: thêm trang trí, đổi hoà âm, rút ngắn — xem [[hinh-thuc-ba-doan]].
- **Kết**: kết trọn rõ, rồi có thể thêm **coda** (đoạn đuôi) nhắc lại motif trên âm ngân chủ. Đừng kết đột ngột nếu bài đã đi xa.

## Một bảng kế hoạch mẫu (bài ABA 40 ô)
| Ô | Phần | Giọng | Chất liệu | Năng lượng |
|---|---|---|---|---|
| 1–8 | A | Rê thứ | Chủ đề (sentence), đệm rải | 2 |
| 9–16 | A′ | Rê thứ → Fa trưởng | Chủ đề, giai điệu lên cao hơn | 3 |
| 17–24 | B | Fa trưởng | Ý tương phản, kết cấu chorale | 4 |
| 25–28 | Chuyển | Mô tiến | Tách mảnh motif A | 5 |
| 29–32 | Cao trào | Âm ngân La (V) | Motif A ở quãng 8, ff | 6 |
| 33–40 | A + coda | Rê thứ | Chủ đề rút gọn, âm ngân Rê | 3 → 1 |

## Nhiều chương
Tác phẩm nhiều chương cần **tương phản giữa các chương** (nhanh – chậm – nhanh; giọng chương chậm khác giọng chính) và đôi khi **thống nhất xuyên chương** bằng chủ đề quay lại ([[bien-doi-chu-de]]). Bài [[sieu-nhip]] và [[chuc-nang-hinh-thuc]] cho thêm công cụ để nghĩ về thời gian ở quy mô lớn.
`,
  },
  {
    slug: "viet-cho-loi-ca",
    title: "Phổ nhạc cho lời: nhấn, nhịp, nguyên âm và thanh điệu tiếng Việt",
    category: 'composition',
    also: ['vietnam'],
    aliases: ["phổ nhạc", "phổ thơ", "đặt lời", "text setting", "prosody", "viết nhạc cho lời", "thanh điệu và giai điệu"],
    summary: "Đặt lời vào nhạc: nguyên tắc ăn khớp giữa nhấn của lời và phách mạnh (prosody), âm tiết đơn và luyến nhiều nốt, nguyên âm cho nốt cao, hình thức theo lời (strophic hay viết suốt), lời nói hát và aria. Với tiếng Việt có thêm thanh điệu: nghiên cứu Kirby & Ladd (2016) trên 20 ca khúc cho thấy chiều giai điệu thường cùng chiều thanh điệu (77%) và rất hiếm khi ngược chiều — kèm quy trình phổ thơ và lỗi thường gặp.",
    refs: [
      ["Kirby & Ladd (2016), Tone-melody correspondence in Vietnamese popular song — Edinburgh Research Explorer", "https://www.research.ed.ac.uk/en/publications/tone-melody-correspondence-in-vietnamese-popular-song"],
      ["Wikipedia — Prosody (music)", "https://en.wikipedia.org/wiki/Prosody_(music)"],
      ["Wikipedia — Strophic form", "https://en.wikipedia.org/wiki/Strophic_form"],
    ],
    body: `
Khi có lời, lời **quyết định** rất nhiều: nhịp điệu, chỗ ngắt câu, đỉnh giai điệu, cả hình thức bài. Bài này tổng hợp nguyên tắc chung và phần riêng cho tiếng Việt — ngôn ngữ có thanh điệu. Quay lại [[lo-trinh-sang-tac]].

## Nguyên tắc chung (prosody)
**Prosody** là sự ăn khớp giữa lời và nhạc. Với ngôn ngữ có trọng âm (Anh, Đức, Ý…):
1. **Âm tiết nhấn rơi vào phách mạnh** hoặc nốt dài/cao. Đặt sai, từ bị "nói ngọng" khi hát.
2. **Từ quan trọng ở chỗ quan trọng**: đỉnh giai điệu, nốt dài, đầu câu.
3. **Ngắt câu nhạc trùng ngắt câu lời** — cuối câu thơ là chỗ đặt kết.
4. **Nhịp điệu lời nói** là gợi ý tốt cho nhịp điệu giai điệu: đọc to lời nhiều lần, gõ theo.

Giáo trình viết lời ca khúc của Pat Pattison (*Writing Better Lyrics*, 1995; bản 2, 2009) coi prosody là nguyên lý trung tâm: không chỉ âm tiết mà cả **cấu trúc** (độ dài câu, vần, chỗ ổn định và chỗ chênh vênh) phải "nói cùng một điều" với nội dung.

## Âm tiết và nốt
| Cách đặt | Mô tả | Hợp với |
|---|---|---|
| **Âm tiết đơn** (syllabic) | Mỗi âm tiết một nốt | Lời dày, kể chuyện, ca khúc phổ thông |
| **Theo nhóm neume** (neumatic) | 2 – 4 nốt cho một âm tiết | Tô điểm nhẹ |
| **Luyến nhiều nốt** (melismatic) | Nhiều nốt cho một âm tiết | Từ cảm thán, Alleluia, aria, cao trào |

Thánh ca có cả ba kiểu ([[thanh-ca-gregorian]]); viết lời tiếng Việt cho bình ca có những vấn đề riêng — xem [[viet-binh-ca-cho-tieng-ban-dia]].

## Nguyên âm và nốt cao
- Nốt cao, dài nên đặt trên **nguyên âm mở** (a, o, e). Nguyên âm khép (i, u) ở nốt rất cao khó hát và khó nghe rõ.
- Tránh cụm phụ âm nặng ở chỗ nhanh.
- Ở cuối câu, nốt dài nên rơi vào âm tiết có thể ngân được.

## Hình thức theo lời
| Hình thức | Mô tả | Ví dụ |
|---|---|---|
| **Strophic** | Mọi khổ thơ hát cùng giai điệu | Dân ca, nhiều Lied của Schubert |
| **Strophic biến đổi** | Cùng giai điệu, đổi ở khổ có nội dung khác | Lied |
| **Viết suốt** (through-composed) | Nhạc mới theo diễn biến lời | *Erlkönig* của Schubert |
| **Verse – chorus** | Đoạn kể đổi lời, điệp khúc giữ lời | Ca khúc phổ thông — [[sang-tac-ca-khuc]] |
| **Hát nói / aria** | Đoạn kể tự do nhịp + đoạn hát trữ tình | Opera, oratorio ([[opera]], [[oratorio-cantata-passion]]) |

Xem thêm [[lied]] và [[hinh-thuc-ca-khuc-pho-thong]].

## Tiếng Việt: thanh điệu và giai điệu
Tiếng Việt có **sáu thanh** (ngang, huyền, sắc, hỏi, ngã, nặng); mỗi thanh có độ cao và đường nét riêng. Nếu giai điệu đi **ngược** chiều thanh, người nghe có thể nghe ra từ khác hoặc thấy "lơ lớ".
- **James Kirby và D. Robert Ladd** (2016) phân tích **20 ca khúc phổ thông Việt Nam**. Kết quả: điều quyết định là **chiều đi** từ âm tiết này sang âm tiết kế tiếp. Họ mượn thuật ngữ đối âm: chuyển động **song song** (thanh đi lên thì giai điệu đi lên…) chiếm khoảng **77%** trong mô hình tốt nhất; chuyển động **chéo** (một bên đứng yên) được chấp nhận trong một số trường hợp; chuyển động **ngược chiều** bị tránh. Họ đưa giả thuyết rằng **tránh ngược chiều** có thể quan trọng ngang hoặc hơn việc đạt song song.
- Cách xếp các thanh thành nhóm cao – thấp trong nghiên cứu được trình bày trong bài gốc; ở đây không tóm tắt lại để tránh sai.
- Truyền thống cổ truyền cũng biết điều này: lời **dẫn** giai điệu trong ca trù, chèo, cải lương — xem [[ly-thuyet-am-nhac-co-truyen-viet-nam]]; tổng hợp nghiên cứu tâm lý ở [[loi-bai-hat-va-tam-ly-nguoi-nghe]].

**Quy tắc thực hành rút ra** (gợi ý của thư viện, dựa trên kết quả trên): khi âm tiết sau có thanh **cao hơn** âm tiết trước, giai điệu nên **đi lên hoặc đứng yên**, tránh đi xuống; và ngược lại. Đọc to câu thơ, nghe đường lên xuống tự nhiên, rồi để giai điệu đi theo "khung" đó và chỉ phá lệ ở chỗ có lý do.

## Quy trình phổ một bài thơ
1. **Đọc to** nhiều lần; đánh dấu nhịp ngắt, từ quan trọng, chỗ cảm xúc lên cao nhất.
2. **Chọn hình thức** theo cấu trúc bài thơ (khổ, điệp ngữ) — strophic hay viết suốt.
3. **Ghi nhịp điệu lời nói** (gõ theo khi đọc) — đây là bản nháp nhịp điệu.
4. **Vẽ đường thanh điệu** từng câu (mũi tên lên/xuống/ngang giữa các âm tiết).
5. **Viết giai điệu** theo cả nhịp điệu và đường thanh; đặt đỉnh ở chỗ cảm xúc cao nhất ([[viet-giai-dieu]]).
6. **Hát và nhờ người khác nghe**: có nghe rõ lời không? có từ nào bị nghe nhầm không?
7. **Đặt hoà âm và đệm** ([[viet-hoa-am-va-be-tram]], [[dem-hat-piano]]).

## Lỗi thường gặp
- **Giai điệu đẹp nhưng lời nghe sai** — vì đi ngược thanh liên tục.
- **Nhấn sai từ**: hư từ ("thì", "là", "của") rơi vào phách mạnh và nốt dài.
- **Ngắt câu nhạc giữa một cụm từ** ("người / yêu" thay vì "người yêu /").
- **Một nốt cho mọi âm tiết suốt bài** — đơn điệu; thêm vài luyến ở chỗ cảm xúc.
- **Ép lời vào giai điệu có sẵn**: được, nhưng phải sửa giai điệu từng khổ (strophic biến đổi) cho hợp thanh.
`,
  },
  {
    slug: "phoi-khi-va-viet-cho-nhac-cu",
    title: "Viết cho nhạc cụ và hoà tấu: tầm âm, đặc tính, phối khí cho người sáng tác",
    category: 'composition',
    also: ['organology'],
    aliases: ["viết cho nhạc cụ", "phối khí cho người sáng tác", "viết cho tứ tấu", "instrumentation", "tầm âm nhạc cụ", "viết cho dàn nhạc"],
    summary: "Những gì người sáng tác cần biết khi rời piano: tầm âm và vùng âm đẹp của từng nhạc cụ, nhạc cụ dịch giọng, đặc tính (hơi thở của kèn, cung và bấm kép của dây, sức bền của kèn đồng), viết cho hoà tấu nhỏ (giọng hát + piano, tam tấu, tứ tấu đàn dây), các chuyên luận phối khí (Berlioz 1844, Rimsky-Korsakov 1913, Piston 1955, Adler 1982) và cảnh báo về âm thanh mẫu trong phần mềm ký âm.",
    refs: [
      ["Wikipedia — Orchestration", "https://en.wikipedia.org/wiki/Orchestration"],
      ["Rimsky-Korsakov, Principles of Orchestration — IMSLP", "https://imslp.org/wiki/Principles_of_Orchestration_(Rimsky-Korsakov,_Nikolay)"],
      ["Wikipedia — Treatise on Instrumentation (Berlioz)", "https://en.wikipedia.org/wiki/Treatise_on_Instrumentation"],
    ],
    body: `
Piano chơi được gần như mọi thứ; các nhạc cụ khác thì không. Viết cho violin, sáo hay giọng hát đòi hỏi biết **tầm âm**, **vùng âm đẹp** và **cách nhạc cụ phát âm**. Bài [[phoi-khi-nguyen-ly-co-ban]] tóm tắt nguyên lý phối khí; mỗi nhạc cụ có trang riêng ở mục [[nhac-khi-the-gioi|Nhạc khí]]. Bài này là danh sách việc cần làm của người sáng tác. Quay lại [[lo-trinh-sang-tac]].

::range G3-A7=Violin C3-E6=Viola C2-A5=Cello C4-C7=Sáo D3-Bb6=Clarinet_(âm_thực) A0-C8=Piano | Tầm âm thực hành (ước lượng) so với piano; nốt cao nhất thay đổi theo trình độ người chơi — xem trang từng nhạc cụ

## Năm câu hỏi cho mỗi nhạc cụ
1. **Tầm âm** — và **vùng đẹp**: nốt có thể chơi khác nốt chơi hay. Viết ở mép tầm âm cho người chơi giỏi, ở vùng giữa cho người học.
2. **Dịch giọng?** Clarinet, kèn trumpet, horn, saxophone đọc nốt khác âm thực ([[nhac-cu-dich-giong-va-doc-tong-pho]]).
3. **Phát âm thế nào?** Dây kéo cung (có thể ngân lâu, bấm kép, pizzicato); kèn cần **thở** — chừa chỗ thở mỗi vài ô; kèn đồng **mỏi môi** — đừng viết nốt cao liên tục.
4. **Cái gì dễ, cái gì khó?** Dây: dễ ở giọng có dây buông (Rê, Sol, La trưởng); kèn gỗ: chuỗi nhanh legato tốt; kèn đồng: nhảy quãng lớn nhanh khó.
5. **Cân bằng với nhạc cụ khác?** Sáo ở vùng trầm rất nhỏ; trumpet ở vùng cao át mọi thứ.

## Hoà tấu nhỏ — bắt đầu từ đây
| Biên chế | Khó khăn chính | Gợi ý |
|---|---|---|
| **Giọng hát + piano** | Piano không được che giọng | Đệm thưa khi giọng ở vùng trầm; xem [[viet-cho-loi-ca]] |
| **Violin (hoặc sáo) + piano** | Piano dễ lấn | Tay phải piano tránh trùng âm vực giai điệu |
| **Tam tấu piano** (violin, cello, piano) | Cello và tay trái piano trùng vùng | Chia vai: cello hát, tay trái piano nhẹ |
| **Tứ tấu đàn dây** | Mọi bè đều là giai điệu | Viết như đối âm bốn bè; xem [[nhac-thinh-phong]] |
| **Bốn tay một đàn** | Hai người tranh vùng giữa | [[choi-bon-tay-va-hoa-tau]] |

## Các chuyên luận phối khí
- **Hector Berlioz**, *Grand traité d'instrumentation et d'orchestration modernes* (1844) — mô tả từng nhạc cụ kèm ví dụ trong tác phẩm thật.
- **Nikolai Rimsky-Korsakov**, *Nguyên lý phối khí* (in 1913, sau khi ông mất, do Maximilian Steinberg biên tập) — ví dụ đều lấy từ tác phẩm của chính ông.
- **Walter Piston**, *Orchestration* (1955); **Samuel Adler**, *The Study of Orchestration* (bản đầu 1982) — giáo trình đại học phổ biến.
- Cách học kinh điển: **chuyển soạn piano → dàn nhạc và ngược lại** (Ravel – Mussorgsky, Liszt – Beethoven; xem [[phoi-khi-nguyen-ly-co-ban]]).

## Phần mềm ký âm và âm thanh mẫu
Phần mềm ký âm và DAW giúp nghe thử ngay, nhưng:
- **Cân bằng trong máy không giống đời thật**: một nốt sáo trầm trong máy có thể to bằng trumpet.
- Máy **không biết thở, không mỏi** — chơi được mọi thứ bạn viết.
- Máy không báo nốt ngoài tầm âm hay thế bấm không chơi được (trừ vài cảnh báo cơ bản).
Lời khuyên: dùng âm thanh mẫu để phác, nhưng **hỏi người chơi thật** trước khi chốt. Xem thêm [[sang-tac-cong-nghe-va-may-tinh]].

## Bài tập
- Lấy một tiểu phẩm piano của mình, chuyển soạn cho **violin + piano**: giai điệu cho violin, viết lại phần đệm.
- Chuyển soạn một chorale bốn bè ([[phoi-chorale-kieu-bach]]) cho tứ tấu đàn dây; kiểm tra tầm âm từng bè.
- Nghe một đoạn trong [[dan-nhac-giao-huong]], đoán nhạc cụ nào đang chơi giai điệu, rồi xem tổng phổ để kiểm tra.
`,
  },
  {
    slug: "sang-tac-trung-co-phuc-hung",
    title: "Thủ pháp sáng tác Trung cổ và Phục hưng",
    category: 'composition',
    also: ['polyphony'],
    aliases: ["isorhythm", "đồng tiết tấu", "soggetto cavato", "thánh lễ parody", "thánh lễ cantus firmus", "mô phỏng xuyên suốt", "pervading imitation", "fauxbourdon"],
    summary: "Năm thế kỷ thủ pháp trước 1600: thêm bè vào bình ca (organum), cantus firmus ở bè tenor, đồng tiết tấu (talea và color) thời Ars nova, fauxbourdon, thánh lễ cantus firmus trên L'homme armé, mô phỏng xuyên suốt thời Josquin, thánh lễ paraphrase và parody, soggetto cavato (rút giai điệu từ nguyên âm của một cái tên), canon chỉ số, vẽ chữ bằng nhạc trong madrigal — mỗi thủ pháp kèm một bài tập viết.",
    refs: [
      ["Wikipedia — Isorhythm", "https://en.wikipedia.org/wiki/Isorhythm"],
      ["Wikipedia — Soggetto cavato", "https://en.wikipedia.org/wiki/Soggetto_cavato"],
      ["Wikipedia — Parody mass", "https://en.wikipedia.org/wiki/Parody_mass"],
      ["Wikipedia — L'homme armé", "https://en.wikipedia.org/wiki/L%27homme_arm%C3%A9"],
    ],
    body: `
Nhạc Trung cổ và Phục hưng nghe xa lạ, nhưng các thủ pháp của nó — **lấy một giai điệu có sẵn làm khung, tổ chức nhịp điệu bằng chu kỳ, mô phỏng giữa các bè, mã hoá chữ thành nốt** — vẫn được dùng đến hôm nay, từ Bach đến nhạc tối giản. Lịch sử thể loại ở [[the-loai-am-nhac]]; kỹ thuật đối âm ở [[phuc-dieu-nghiem-khac]]. Quay lại [[lo-trinh-sang-tac]].

::timeline 900=Organum_song_song 1200=Léonin_–_Pérotin 1320=Ars_nova 1360=Machaut_Messe 1430=Fauxbourdon 1460=L'homme_armé 1500=Josquin 1558=Zarlino 1567=Missa_Papae_Marcelli 1600=Artusi_–_Monteverdi | Các mốc nhắc trong bài (năm gần đúng)

## 1. Thêm bè vào bình ca: organum
Thủ pháp sáng tác đa âm đầu tiên ở châu Âu là **thêm một bè** vào giai điệu [[thanh-ca-gregorian|bình ca]] có sẵn: đầu tiên song song quãng 4 hoặc 5, về sau tự do hơn, rồi ở Notre-Dame Paris (Léonin, Pérotin, khoảng 1200) bình ca được kéo dài thành nốt rất dài trong khi các bè trên chạy nhanh. Xem [[organum]].

**Bài tập:** lấy một câu bình ca ngắn, viết một bè song song quãng 5 bên dưới; rồi viết lại với bình ca kéo dài mỗi nốt 4 phách và một bè trên chạy tự do.

## 2. Cantus firmus: khung có sẵn
*Cantus firmus* ("giai điệu cố định") là một giai điệu có sẵn đặt ở một bè — thường bè **tenor** (từ chữ Latin *tenere*, "giữ") — làm khung cho các bè khác. Đây là gốc của bài tập đối âm ([[cantus-firmus]], [[doi-am-5-loai]]), và về sau của chorale prelude ([[chorale-va-chorale-prelude]]).

Thế kỷ 15 – 16, bài hát thế tục *L'homme armé* ("Người lính mang giáp") được dùng làm cantus firmus cho **hơn 40 thánh lễ** của nhiều nhà soạn nhạc, từ Dufay đến Palestrina — một cuộc thi tài ngầm: cùng một khung, ai làm hay hơn?

## 3. Đồng tiết tấu (isorhythm)
Thời **Ars nova** (thế kỷ 14; Philippe de Vitry, Guillaume de Machaut), bè tenor được tổ chức bằng **hai chu kỳ độc lập**:
- **talea**: một mẫu nhịp điệu lặp lại;
- **color**: một chuỗi cao độ lặp lại.
Hai chu kỳ dài khác nhau nên lệch nhau và chỉ gặp lại sau nhiều vòng. Thuật ngữ "isorhythm" do nhà nghiên cứu Friedrich Ludwig đặt năm 1904. Ví dụ lớn: *Messe de Nostre Dame* của [[guillaume-de-machaut|Machaut]].

::rhythm 4/4 h q q / w // | Một talea 2 ô (trắng – đen – đen – tròn). Ghép với một color 5 nốt, hai chu kỳ lệch nhau: talea lặp 5 lần thì color lặp 4 lần

Ý tưởng chu kỳ lệch nhau sống lại trong thế kỷ 20: nhịp điệu của Messiaen và [[toi-gian|nhạc tối giản]] (Reich lệch pha).

**Bài tập:** chọn talea 4 nốt và color 5 nốt; viết bè trầm 20 nốt; thêm một giai điệu tự do bên trên.

## 4. Fauxbourdon và âm thanh "ngọt"
Khoảng 1430, các nhạc sĩ lục địa (Dufay) dùng **fauxbourdon**: một giai điệu kèm bè quãng 6 bên dưới, bè giữa ứng tác quãng 4 dưới giai điệu — tạo chuỗi hợp âm 6 song song. Cùng thời, giới nghiên cứu nói đến "contenance angloise" — âm thanh nhiều quãng 3, quãng 6 của nhạc Anh (Dunstable). Đây là bước về phía [[hoa-am-song-song|hoà âm song song]] và hợp âm ba.

## 5. Mô phỏng xuyên suốt (thời Josquin)
Khoảng 1500, [[josquin-des-prez|Josquin des Prez]] và thế hệ của ông viết các bè **lần lượt vào cùng một ý nhạc** cho mỗi câu lời — mỗi câu lời một "điểm mô phỏng" mới. Kết cấu này là tổ tiên trực tiếp của fugue ([[mo-phong-don-gian]], [[fugue]]).

**Bài tập:** viết một điểm mô phỏng 4 bè trên một câu lời ngắn ("Kyrie eleison" hoặc một câu tiếng Việt): bè thứ hai vào sau 2 phách ở quãng 5, bè ba ở quãng 8, bè bốn ở quãng 5 thấp.

## 6. Thánh lễ dựa trên chất liệu có sẵn
| Kiểu | Chất liệu | Ví dụ |
|---|---|---|
| **Cantus firmus** | Một giai điệu ở tenor, giá trị dài | Các thánh lễ *L'homme armé* |
| **Paraphrase** | Giai điệu bình ca được trang trí và chia cho mọi bè | Josquin, *Missa Pange lingua* |
| **Parody** (bắt chước) | Lấy **cả kết cấu đa âm** của một motet hay chanson | Rất phổ biến thế kỷ 16; chữ "parody" theo nghĩa này đến từ một trang nhan đề năm 1587 (Jakob Paix); đương thời gọi là *missa ad imitationem* |

Bài học cho hôm nay: **vay mượn và làm lại là truyền thống chính thống**, không phải đạo nhạc — điều kiện là biến đổi thật sự. Xem thêm [[bien-tau]].

## 7. Soggetto cavato: biến chữ thành nốt
Zarlino (1558) đặt tên **soggetto cavato** ("chủ đề khắc ra") cho cách lấy nguyên âm của một cái tên và đổi thành âm tiết xướng âm (ut, re, mi, fa, sol, la). Ví dụ nổi tiếng: Josquin, *Missa Hercules Dux Ferrariae* — từ *Her-cu-les Dux Fer-ra-ri-ae* thành re – ut – re – ut – re – fa – mi – re.

| Nguyên âm | a | e | i | o | u |
|---|---|---|---|---|---|
| Âm tiết | fa hoặc la | re | mi | sol | ut |

Ý tưởng mã hoá chữ thành nốt còn đi xa: motif **B-A-C-H**, **A-S-C-H** trong *Carnaval* của Schumann — xem [[sang-tac-lang-man]].

**Bài tập:** lấy tên mình (bỏ dấu), đổi nguyên âm thành nốt theo bảng, dùng làm cantus firmus cho một đoạn đối âm 2 bè.

## 8. Canon và các "câu đố"
Nhạc sĩ thế kỷ 15 thích **canon** có cấu trúc thông minh: canon ở nhiều quãng, **canon chỉ số** (mensuration canon — các bè hát cùng giai điệu nhưng theo chỉ số nhịp khác nhau, nên nhanh chậm khác nhau), như *Missa prolationum* của Ockeghem. Xem [[canon-hai-be]], [[canon-ba-bon-be]].

## 9. Vẽ chữ bằng nhạc (madrigal)
[[madrigal|Madrigal]] Ý cuối thế kỷ 16 **minh hoạ từng chữ**: "lên trời" đi lên, "khóc" bằng nghịch âm và nửa cung đi xuống, "chạy" bằng nốt nhanh. Năm 1600, Artusi chỉ trích Monteverdi dùng nghịch âm tự do; Monteverdi đáp rằng trong "thực hành thứ hai" (*seconda pratica*) **lời là chủ, nhạc là tớ** — mở đường cho Baroque ([[sang-tac-baroque]]).

**Bài tập:** chọn 4 câu thơ có hình ảnh chuyển động hoặc cảm xúc mạnh; viết giai điệu "vẽ" từng hình ảnh, rồi kiểm tra lại thanh điệu ([[viet-cho-loi-ca]]).
`,
  },
  {
    slug: "sang-tac-baroque",
    title: "Thủ pháp sáng tác Baroque",
    category: 'composition',
    also: ['genres'],
    aliases: ["Fortspinnung", "ritornello", "hình thức ritornello", "tu từ âm nhạc", "musica poetica", "học thuyết cảm xúc", "Affektenlehre", "sáng tác Baroque"],
    summary: "Cách nhạc sĩ Baroque làm ra tác phẩm: bè trầm số làm khung, giai điệu đơn ca trên bè trầm (Caccini 1602), tu từ học âm nhạc (Burmeister 1606, Mattheson 1739) và lưu ý rằng “học thuyết cảm xúc” như một hệ thống chặt là cách nhìn của thế kỷ 20; câu nhạc mở đầu – vận hành – kết (Fortspinnung, theo Wilhelm Fischer 1915); hình thức ritornello của Vivaldi và việc Bach chuyển soạn concerto Vivaldi; biến tấu trên bè trầm lặp; vay mượn chất liệu — kèm bài tập.",
    refs: [
      ["Wikipedia — Ritornello", "https://en.wikipedia.org/wiki/Ritornello"],
      ["Wikipedia — Musical rhetoric (Musica poetica)", "https://en.wikipedia.org/wiki/Musica_poetica"],
      ["Wikipedia — Doctrine of the affections", "https://en.wikipedia.org/wiki/Doctrine_of_the_affections"],
      ["Wikipedia — Johann Mattheson", "https://en.wikipedia.org/wiki/Johann_Mattheson"],
    ],
    body: `
Nhạc Baroque (khoảng 1600 – 1750) có một "ngữ pháp" rõ ràng đến mức học trò có thể viết nhạc nghe đúng phong cách sau vài tháng. Bài này tóm tắt các thủ pháp chính và nối sang các bài thể loại ([[to-khuc-baroque]], [[concerto-grosso]], [[toccata-prelude-fugue]]). Quay lại [[lo-trinh-sang-tac]].

::timeline 1600=Monteverdi_–_Artusi 1602=Caccini 1606=Burmeister 1711=Vivaldi_L'estro_armonico 1713=Bach_chuyển_soạn_Vivaldi 1722=Rameau 1725=Fux 1739=Mattheson 1750=Bach_mất | Các mốc nhắc trong bài

## 1. Bè trầm làm khung
Đầu thế kỷ 17, kết cấu mới là **một giai điệu trên một bè trầm**, phần giữa do người đệm ứng tác theo **[[bass-so|bè trầm số]]** (*basso continuo*). Giulio Caccini in *Le nuove musiche* (1602) — tuyển ca khúc đơn ca có bè trầm số. Hệ quả cho người viết: **nghĩ bằng hai bè ngoài** (giai điệu và bè trầm), như trong [[viet-hoa-am-va-be-tram]].

## 2. Tu từ học: âm nhạc như bài diễn văn
Các nhà lý luận Đức coi sáng tác như **soạn một bài diễn văn**:
- **Joachim Burmeister**, *Musica poetica* (1606): đặt tên các **hình tượng** (figura) — lặp lại, mô tiến, ngắt quãng, nghịch âm đặc biệt — như các biện pháp tu từ.
- **Johann Mattheson**, *Der vollkommene Capellmeister* (1739): chia việc soạn nhạc thành các bước mượn từ tu từ học: tìm ý (*inventio*), sắp xếp (*dispositio*), trau chuốt (*elaboratio, decoratio*), trình diễn (*pronuntiatio*).

**Lưu ý về "học thuyết cảm xúc"** (*Affektenlehre*): nhạc Baroque đúng là nhắm tới **biểu hiện một cảm xúc** cho mỗi chương hoặc mỗi aria. Nhưng ý tưởng về một "học thuyết" thống nhất, có bảng tra "giọng nào = cảm xúc nào", phần lớn là cách hệ thống hoá của các học giả **thế kỷ 20**; nhà nghiên cứu George Buelow và nhiều người khác cho rằng các tác giả Baroque không có một hệ thống chung như thế. Xem thêm [[bieu-hien-cam-xuc-am-nhac]].

## 3. Fortspinnung: mở đầu – vận hành – kết
Nhà nghiên cứu Wilhelm Fischer (1915) mô tả câu nhạc Baroque điển hình gồm ba phần:
| Phần | Nội dung | Cảm giác |
|---|---|---|
| **Mở đầu** (*Vordersatz*) | Một ý nhạc rõ, khẳng định giọng | "Đây là chủ đề" |
| **Vận hành** (*Fortspinnung*) | Tách mảnh, mô tiến, chuỗi hợp âm theo vòng quãng 5 | Chạy liên tục, không biết khi nào dừng |
| **Kết** (*Epilog*) | Công thức kết rõ | Dừng hẳn |

Khác với câu Cổ điển (cân đối 4 + 4 ô), câu Baroque **có độ dài tự do**: phần vận hành kéo dài bao lâu cũng được. Công cụ chính là [[mo-tien-hoa-am|mô tiến]].

**Bài tập:** viết một ý mở đầu 1 ô, rồi một chuỗi mô tiến 4 ô theo vòng quãng 5 (vi – ii – V – I…), rồi một kết 1 ô.

## 4. Hình thức ritornello
Trong concerto của Vivaldi, dàn nhạc chơi một đoạn **ritornello** (đoạn "quay lại") ở giọng chủ; các đoạn độc tấu xen giữa, đi sang giọng khác; ritornello quay lại — thường **chỉ một phần** — ở giọng mới, rồi cuối cùng trọn vẹn ở giọng chủ.

::form R:4 Solo:3 R':2 Solo:3 R'':2 Solo:3 R:4 | Sơ đồ ritornello điển hình: R ở giọng chủ, R' ở giọng át, R'' ở giọng vi (số dưới mỗi khối: độ dài tương đối)

Năm 1713 – 1714 ở Weimar, [[johann-sebastian-bach|Bach]] chuyển soạn nhiều concerto Ý cho đàn phím và organ, trong đó có nhiều concerto của Vivaldi (nằm trong các số BWV 972 – 987 và 592 – 596; một số bài là của nhạc sĩ khác như Marcello hay hoàng tử Johann Ernst). Người viết tiểu sử đầu tiên của Bach, Forkel (1802), cho rằng qua đó Bach học được cách **suy nghĩ bằng âm nhạc** — trật tự, mạch lạc, tỉ lệ. Chuyển soạn tác phẩm của người khác vẫn là một cách học sáng tác rất tốt ([[bai-tap-sang-tac]]).

## 5. Biến tấu trên bè trầm lặp
Ground bass, passacaglia, chaconne: một bè trầm 4 – 8 ô lặp lại, phía trên biến tấu liên tục ([[passacaglia-va-chaconne]], [[ostinato]]). Đây là **bài tập sáng tác lý tưởng** cho người mới: khung đã có, chỉ cần nghĩ ra biến tấu mới mỗi vòng — đổi nhịp điệu, đổi kết cấu, thêm bè, đảo âm vực.

## 6. Fugue và chorale prelude
Hai thể loại "luyện tay nghề" cao nhất: [[fugue]] (chủ đề – đáp – đối đề – đoạn chen) và [[chorale-va-chorale-prelude|chorale prelude]] (trang trí hoặc đối âm quanh một giai điệu thánh ca). Học trò của Bach đi theo lộ trình: bè trầm số → chorale → inventions → tổ khúc → fugue ([[bach-day-hoc-tro]]).

## 7. Vay mượn
Handel nổi tiếng vì **vay mượn** nhiều — từ tác phẩm của chính mình và của người khác — rồi làm lại. Thế kỷ 18 coi đây là thực hành bình thường nếu chất liệu được **cải thiện**; quan niệm về "sở hữu" giai điệu thay đổi dần về sau ([[ban-quyen-am-nhac-quoc-te]]).

## Bài tập theo phong cách Baroque
1. **Gavotte hai đoạn** 16 ô: phần 1 từ chủ sang át, phần 2 về chủ; chỉ dùng hai bè (giai điệu + bè trầm), thêm số bè trầm.
2. **Chaconne** 8 vòng trên bè trầm 4 ô đi xuống (Rê – Đô – Si♭ – La).
3. **Invention hai bè** theo mẫu [[phan-tich-invention-so-1|Invention số 1]]: chủ đề 1 ô, mô phỏng ở quãng 8, đoạn chen mô tiến.
4. **Ritornello** 24 ô cho violin và đàn phím theo sơ đồ trên.
`,
  },
  {
    slug: "sang-tac-co-dien",
    title: "Thủ pháp sáng tác Cổ điển",
    category: 'composition',
    also: ['form'],
    aliases: ["sáng tác cổ điển", "trò chơi xúc xắc âm nhạc", "Musikalisches Würfelspiel", "dice game", "phong cách galant", "viết sonatina", "viết minuet"],
    summary: "Cách nhạc sĩ thời Haydn – Mozart – Beethoven làm việc: phong cách galant xây từ lược đồ quen thuộc, ngữ pháp câu nhạc của Koch, chủ đề biểu đạt (Ratner), kết cấu chủ điệu và nhịp điệu hoà âm chậm, nguyên lý sonata. Trò chơi xúc xắc soạn minuet (Kirnberger 1757; bản 1792 mang tên Mozart nhưng chưa được xác nhận), sổ bài tập của Thomas Attwood với Mozart, Beethoven học với Haydn và Albrechtsberger — kèm quy trình viết một minuet và một sonatina.",
    refs: [
      ["Wikipedia — Musikalisches Würfelspiel", "https://en.wikipedia.org/wiki/Musikalisches_W%C3%BCrfelspiel"],
      ["NYPL catalogue — Anleitung… Walzer mit zwei Würfeln (Simrock), attribution doubtful", "https://www.nypl.org/research/research-catalog/bib/b10479091"],
      ["Wikipedia — Galant music", "https://en.wikipedia.org/wiki/Galant_music"],
      ["Wikipedia — Thomas Attwood", "https://en.wikipedia.org/wiki/Thomas_Attwood_(composer)"],
    ],
    body: `
Nhạc Cổ điển nghe "tự nhiên" vì nó được xây từ **những khối quen thuộc được lắp ghép rất khéo**. Người nghe thế kỷ 18 nhận ra các khối đó; người học hôm nay có thể học lại chúng. Phân tích mẫu ở [[phan-tich-sonata-k545]], [[phan-tich-sonatina-clementi-op36-1]], [[phan-tich-minuet-sol-truong]]. Quay lại [[lo-trinh-sang-tac]].

## 1. Ngôn ngữ galant: những khối có sẵn
Như Gjerdingen chỉ ra, nhạc sĩ được đào tạo ở Naples và nơi khác thuộc lòng **lược đồ** (Romanesca, Prinner, Fonte, Monte, Ponte…) và dùng chúng như **cụm từ cố định** — người nghe sành điệu nhận ra và thưởng thức cách chúng được biến hoá. Xem [[luoc-do-galant]], [[partimento]] và bảng vị trí các lược đồ trong [[viet-hoa-am-va-be-tram]].

## 2. Ngữ pháp câu nhạc
- **Câu cân đối**: 2 + 2, 4 + 4, 8 + 8 ô; đoạn hỏi – đáp (period) và câu dồn (sentence) — xem [[viet-chu-de]].
- **Dấu câu**: Koch (1782 – 1793) so kết nửa với dấu phẩy, kết trọn với dấu chấm; câu được **mở rộng** bằng lặp, chèn, kéo dài kết ([[mo-rong-cau-nhac]]).
- **Chức năng thời gian**: mở đầu, ở giữa, kết thúc, trước khi bắt đầu, sau khi kết thúc ([[chuc-nang-hinh-thuc]]).

## 3. Chủ đề biểu đạt
Leonard Ratner (1980) chỉ ra nhạc Cổ điển ghép nhanh nhiều **kiểu tính cách** quen: hành khúc, tiếng tù và săn, đồng quê, phong cách bác học (đối âm), phong cách Thổ Nhĩ Kỳ, vũ khúc… Mozart có thể đổi chủ đề sau mỗi vài ô. Khi viết, **chọn và tương phản các chủ đề** là cách nhanh nhất để nhạc có "kịch tính" ([[ly-thuyet-chu-de]]).

## 4. Kết cấu và hoà âm
- **Chủ điệu**: giai điệu rõ trên đệm Alberti, hợp âm nhắc lại, oom-pah ([[ket-cau-va-viet-cho-piano]]).
- **Nhịp điệu hoà âm chậm** ở chủ đề, nhanh ở chuyển đoạn và kết.
- **Kết rõ ràng**, nhiều khi được nhấn hai, ba lần ở cuối chương.

## 5. Nguyên lý sonata
Cốt lõi của [[hinh-thuc-sonata|hình thức sonata]] là **xung đột giọng và giải quyết**: chất liệu trình bày ở giọng thứ hai (thường V) sẽ quay lại ở **giọng chủ** trong tái hiện. Haydn thường viết chủ đề thứ hai **cùng chất liệu** với chủ đề một (sonata "đơn chủ đề"); Mozart thường có nhiều giai điệu tương phản; Beethoven phát triển motif nhỏ đến cực độ.

## 6. Trò chơi xúc xắc soạn nhạc
Thế kỷ 18 có nhiều **trò chơi xúc xắc âm nhạc** (*Musikalisches Würfelspiel*): người chơi tung xúc xắc để chọn từng ô nhịp trong một bảng các ô viết sẵn, ghép thành một minuet hay valse "mới".
- **Johann Philipp Kirnberger**, *Der allezeit fertige Polonoisen- und Menuettenkomponist* (1757) là một trong những bản sớm.
- Bản nổi tiếng nhất được **Simrock** in năm 1792 với tên Mozart trên bìa. Tên Mozart **chưa bao giờ được xác thực**; danh mục Köchel xếp nó vào phần phụ lục tác phẩm đáng ngờ (Anh. C 30.01). Các nguồn còn ghi khác nhau về năm in (1792, 1793 hoặc muộn hơn).

Trò chơi chạy được vì mỗi vị trí trong bảng có **cùng chức năng hoà âm**: ô 1 luôn là chủ, ô 8 luôn là kết nửa… Đó là bằng chứng rõ nhất cho tính "lắp ghép" của ngôn ngữ galant — và là tổ tiên của [[sang-tac-cong-nghe-va-may-tinh|soạn nhạc bằng thuật toán]].

## 7. Các nhà Cổ điển học và dạy thế nào
- **Mozart** dạy nhà soạn nhạc người Anh **Thomas Attwood** (1785 – 1786); sổ bài tập của Attwood còn giữ được, với các bài hoà âm, đối âm và minuet kèm lời sửa của Mozart.
- **Beethoven** đến Vienna học với **Haydn** (1792 – 1794), rồi học đối âm với **Johann Georg Albrechtsberger** — bài tập của ông theo phương pháp Fux vẫn còn.
- **Haydn** tự học bằng **Gradus ad Parnassum** của Fux và các sonata của C. P. E. Bach — xem [[lich-su-day-sang-tac]].

## Quy trình viết một minuet 16 ô (kiểu galant)
| Ô | Lược đồ gợi ý | Giọng |
|---|---|---|
| 1–4 | Do – Re – Mi hoặc Romanesca | I |
| 5–8 | Prinner → kết sang V | I → V |
| ‖ 9–12 | Fonte (mô tiến đi xuống) | ii → I |
| 13–14 | Ponte (ngân V) | V |
| 15–16 | Kết trọn | I |

Sau đó viết **trio** tương phản (giọng IV hoặc thứ cùng tên), rồi Minuet da capo — xem [[minuet-va-trio]].

## Viết một sonatina (phần trình bày)
1. Chủ đề 1: period 8 ô ở giọng chủ.
2. Chuyển đoạn 4 ô: mô tiến, kết nửa ở giọng át.
3. Chủ đề 2: 8 ô ở giọng át, tính cách khác (ví dụ ca hát sau hành khúc).
4. Kết phần trình bày: 2 – 4 ô với kết trọn lặp lại.
Mẫu để chép: [[phan-tich-sonatina-clementi-op36-1]].
`,
  },
  {
    slug: "sang-tac-lang-man",
    title: "Thủ pháp sáng tác Lãng mạn",
    category: 'composition',
    also: ['genres'],
    aliases: ["sáng tác lãng mạn", "mật mã âm nhạc", "musical cryptogram", "nhạc chương trình", "tiểu phẩm có tiêu đề", "chủ nghĩa dân tộc âm nhạc"],
    summary: "Thủ pháp của thế kỷ 19: giai điệu hát dài và tiểu phẩm tâm trạng, hoà âm cromatic và quan hệ quãng 3, biến đổi chủ đề và hình thức tuần hoàn, nhạc chương trình (idée fixe của Berlioz 1830, thơ giao hưởng của Liszt), mật mã chữ – nốt (B-A-C-H, A-S-C-H trong Carnaval, F-A-E), chất liệu dân gian, viết điêu luyện cho piano, và “biến tấu phát triển” của Brahms theo Schoenberg — kèm bài tập.",
    refs: [
      ["Wikipedia — Musical cryptogram", "https://en.wikipedia.org/wiki/Musical_cryptogram"],
      ["Wikipedia — Program music", "https://en.wikipedia.org/wiki/Program_music"],
      ["Wikipedia — Thematic transformation", "https://en.wikipedia.org/wiki/Thematic_transformation"],
    ],
    body: `
Thế kỷ 19 đổi trọng tâm từ **khuôn chung** sang **tiếng nói riêng**: mỗi tác phẩm muốn có một tính cách, một câu chuyện, một màu hoà âm riêng. Nhưng các công cụ vẫn có thể học được. Quay lại [[lo-trinh-sang-tac]].

## 1. Giai điệu hát dài và tiểu phẩm tâm trạng
- **Giai điệu dài hơi**, ít bị cắt thành ô 2 – 4, thường mượn từ ca khúc ([[lied]]) và opera Ý (Chopin chịu ảnh hưởng Bellini).
- **Tiểu phẩm có tiêu đề**: nocturne, bài ca không lời, impromptu, intermezzo, ballade… mỗi bài **một tâm trạng** ([[tieu-pham-piano]]). Tiêu đề (đôi khi đặt sau khi viết, như Schumann kể về *Kinderszenen*) cho người nghe một chìa khoá.

**Bài tập:** viết một "bài ca không lời" 24 ô: giai điệu ở tay phải, đệm rải ở giữa, bè trầm ngân — mẫu: Mendelssohn, *Lieder ohne Worte*.

## 2. Hoà âm mở rộng
| Công cụ | Ví dụ | Bài |
|---|---|---|
| Cromatic, nốt thêu và nốt lướt cromatic | Chopin | [[hoa-am-cromatic]] |
| Quan hệ quãng 3 (trung âm cromatic) | Schubert, Brahms | [[trung-am-cromatic]] |
| Hợp âm 7 giảm như "bản lề" chuyển giọng | Liszt | [[hop-am-bay-giam]] |
| Trì hoãn giải quyết | Mở đầu *Tristan und Isolde* của Wagner | [[phi-dieu-tinh]] |
| Hợp âm mượn, đổi trưởng – thứ | Schubert | [[hop-am-muon]] |

## 3. Biến đổi chủ đề và hình thức tuần hoàn
Một chủ đề quay lại qua nhiều chương nhưng **đổi tính cách**: Schubert (*Wanderer Fantasy*, 1822), Berlioz (*idée fixe* trong *Symphonie fantastique*, 1830), Liszt (Sonata Si thứ), leitmotif của Wagner, hình thức tuần hoàn của Franck. Chi tiết và phân tích ở [[bien-doi-chu-de]].

**Bài tập:** viết một chủ đề 4 ô, rồi biến nó thành: hành khúc, valse, ru, khúc bi ca — chỉ đổi nhịp, nhịp độ, hoà âm và kết cấu, giữ đường nét cao độ.

## 4. Nhạc chương trình
Nhạc kể một câu chuyện hay vẽ một cảnh: Berlioz in hẳn **chương trình** cho khán giả; Liszt đặt tên thể loại **thơ giao hưởng** ([[tho-giao-huong]]). Với người viết, chương trình là một **kịch bản hình thức**: các sự kiện của câu chuyện quyết định thứ tự và tương phản của các đoạn — như nhạc phim sau này ([[sang-tac-nhac-phim]]).

## 5. Mật mã: chữ thành nốt
Tiếng Đức gọi tên nốt bằng chữ, trong đó **B = Si giáng, H = Si, S (Es) = Mi giáng, As = La giáng** — nên nhiều chữ đổi được thành nốt:
- **B-A-C-H**: Si♭ – La – Đô – Si — Bach tự dùng; Liszt, Schumann, Reger viết fugue trên nó.
- **A-S-C-H** (tên thị trấn Asch, quê người yêu của Schumann thời đó): nền của *Carnaval* op. 9 (1834 – 1835).
- **F-A-E** (*frei aber einsam*, "tự do nhưng cô độc" — phương châm của violinist Joseph Joachim): Sonata F-A-E (1853) do Schumann, Brahms và Albert Dietrich cùng viết.

::staff treble Bb4 A4 C5 B4 | B-A-C-H: Si♭ – La – Đô – Si

Đây là hậu duệ của [[sang-tac-trung-co-phuc-hung|soggetto cavato]] thời Phục hưng.

**Bài tập:** mã hoá tên mình hoặc tên một người (dùng bảng chữ – nốt Đức, các chữ khác bỏ qua hoặc tự đặt quy ước) thành một motif 4 – 6 nốt và viết một tiểu phẩm trên đó.

## 6. Chất liệu dân gian và bản sắc dân tộc
Chopin (mazurka, polonaise), Liszt (rhapsody Hungary), Grieg, Dvořák, nhóm "Năm người" Nga dùng **điệu thức, nhịp và giai điệu dân gian** để tạo bản sắc. Câu hỏi "dùng dân ca thế nào cho thật" được Bartók trả lời rõ nhất ở thế kỷ 20 — xem [[sang-tac-voi-chat-lieu-viet]].

## 7. Viết điêu luyện cho piano
Liszt, Chopin, Thalberg mở rộng tiếng đàn: quãng 8 nhanh, nhảy xa, hiệu ứng "ba tay", pedal làm màu ([[ky-thuat-theo-phong-cach]], [[ket-cau-va-viet-cho-piano]]). Bài học: **kỹ thuật phục vụ ý nhạc** — những đoạn điêu luyện hay nhất là những đoạn vẫn mang chủ đề.

## 8. Brahms và "biến tấu phát triển"
Trong bài luận *Brahms the Progressive* (1947), Schoenberg lập luận rằng Brahms — thường bị coi là bảo thủ — thật ra rất cấp tiến ở cách **phát triển liên tục một motif nhỏ** và ở câu nhạc không cân đối. Đây là cầu nối từ Lãng mạn sang [[sang-tac-the-ky-20]], và là nền của phương pháp trong [[viet-chu-de]].
`,
  },
  {
    slug: "sang-tac-the-ky-20",
    title: "Thủ pháp sáng tác thế kỷ 20: mỗi trào lưu là một luật chơi",
    category: 'composition',
    also: ['modern'],
    aliases: ["sáng tác thế kỷ 20", "sáng tác hiện đại", "nhạc ngẫu nhiên", "aleatoric", "chủ nghĩa chuỗi", "serialism", "vi phức điệu", "micropolyphony", "nhạc phổ âm", "spectral music", "tintinnabuli", "đa phong cách", "polystylism"],
    summary: "Bản đồ các thủ pháp thế kỷ 20 dưới góc nhìn người viết: hoà âm màu (ấn tượng), phi điệu tính tự do (1909), 12 âm (1921–1923), tân cổ điển (1920), dân gian hiện đại (Bartók), điệu thức và nhịp của Messiaen, chuỗi toàn phần (1949–1952), ngẫu nhiên và bất định (Cage 1951), nhạc xác suất (Xenakis 1954), khối âm và vi phức điệu (Penderecki 1960, Ligeti 1961), tối giản (1964–1965), tintinnabuli (Pärt 1976), phổ âm (Grisey 1975), đa phong cách — mỗi trào lưu kèm một bài tập ngắn.",
    refs: [
      ["Wikipedia — Serialism", "https://en.wikipedia.org/wiki/Serialism"],
      ["Wikipedia — Aleatoric music", "https://en.wikipedia.org/wiki/Aleatoric_music"],
      ["Wikipedia — Micropolyphony", "https://en.wikipedia.org/wiki/Micropolyphony"],
      ["Wikipedia — Spectral music", "https://en.wikipedia.org/wiki/Spectral_music"],
      ["Wikipedia — Tintinnabuli", "https://en.wikipedia.org/wiki/Tintinnabuli"],
    ],
    body: `
Thế kỷ 20 không có một ngôn ngữ chung. Mỗi trào lưu tự đặt ra **một luật chơi** — một cách chọn cao độ, nhịp, âm sắc — rồi viết trong luật đó. Với người học, đây là kho bài tập phong phú nhất: mỗi luật là một **giới hạn có ích** (đúng như Stravinsky nói — xem [[quy-trinh-sang-tac]]). Lý thuyết chi tiết ở mục [[cac-thoi-ky|Thời kỳ & thế kỷ 20]]; tổng quan thể loại ở [[trao-luu-the-ky-20]]. Quay lại [[lo-trinh-sang-tac]].

::timeline 1894=Debussy_Prélude 1909=Schoenberg_op._11 1920=Pulcinella 1923=Suite_op._25 1931=Bartók_tiểu_luận 1941=Messiaen_Quatuor 1949=Mode_de_valeurs 1951=Music_of_Changes 1952=Structures_Ia 1954=Metastaseis 1960=Threnody 1961=Atmosphères 1964=In_C 1965=It's_Gonna_Rain 1968=Sinfonia_Berio 1975=Partiels 1976=Für_Alina | Các tác phẩm mốc nhắc trong bài

## Bảng các luật chơi
| Trào lưu | Luật chơi | Tác phẩm mốc | Bài lý thuyết |
|---|---|---|---|
| **Ấn tượng** | Hợp âm là màu, không cần giải quyết; ngũ cung, toàn cung, song song | Debussy, *Prélude à l'après-midi d'un faune* (1894) | [[an-tuong]], [[am-giai-toan-cung]] |
| **Phi điệu tính tự do** | Không có giọng chủ; motif và tập hợp nốt thay cho hợp âm chức năng | Schoenberg, *Ba tiểu phẩm piano* op. 11 (1909) | [[phi-dieu-tinh]], [[tap-hop-cao-do]] |
| **12 âm** | Một chuỗi 12 nửa cung và các dạng biến đổi của nó | Schoenberg, *Suite* op. 25 (1921 – 1923) | [[ky-thuat-12-am]] |
| **Tân cổ điển** | Hình thức và thể loại thế kỷ 18 với hoà âm "lệch" | Stravinsky, *Pulcinella* (1920) | [[trao-luu-the-ky-20]] |
| **Dân gian hiện đại** | Điệu thức, nhịp lẻ của dân ca thành ngôn ngữ riêng | Bartók, *Mikrokosmos*; tiểu luận 1931 | [[sang-tac-voi-chat-lieu-viet]] |
| **Messiaen** | Điệu thức chuyển vị giới hạn, nhịp không đảo ngược được, tiếng chim | *Quatuor pour la fin du temps* (1941) | [[dieu-thuc-chuyen-vi-gioi-han]] |
| **Chuỗi toàn phần** | Cả cao độ, trường độ, cường độ, cách đánh đều theo chuỗi | Messiaen, *Mode de valeurs et d'intensités* (1949); Boulez, *Structures Ia* (1952) | [[ky-thuat-12-am]] |
| **Ngẫu nhiên / bất định** | Cơ hội (Kinh Dịch, xúc xắc) hoặc người chơi quyết định một phần | Cage, *Music of Changes* (1951) | [[trao-luu-the-ky-20]] |
| **Xác suất** | Quy luật thống kê điều khiển hàng trăm nốt | Xenakis, *Metastaseis* (1954) | [[am-nhac-hoc-tinh-toan]] |
| **Khối âm, vi phức điệu** | Rất nhiều bè dày đặc thành một "đám mây" âm thanh | Penderecki, *Threnody* (1960); Ligeti, *Atmosphères* (1961) | [[am-cum]] |
| **Tối giản** | Mẫu ngắn lặp, biến đổi rất chậm; lệch pha | Riley, *In C* (1964); Reich, *It's Gonna Rain* (1965) | [[toi-gian]] |
| **Tintinnabuli** | Một bè giai điệu đi bậc + một bè chỉ dùng nốt của hợp âm ba chủ | Pärt, *Für Alina* (1976) | [[toi-gian]] |
| **Phổ âm** | Hoà âm và phối khí suy ra từ phổ bồi âm của một âm thanh thật | Grisey, *Partiels* (1975) | [[chuoi-boi-am]], [[am-sac]] |
| **Đa phong cách** | Ghép trích dẫn và phong cách nhiều thời đại | Berio, *Sinfonia* (1968 – 1969); Schnittke | [[lich-su-tiep-nhan-am-nhac]] |

## Bài tập: mỗi luật một trang
1. **Ấn tượng**: một tiểu phẩm 16 ô chỉ dùng hợp âm 9 trưởng trượt song song và một giai điệu ngũ cung.
2. **Phi điệu tính**: chọn tập hợp 3 nốt (ví dụ Đô – Đô♯ – Mi); viết một bài 12 ô chỉ dùng tập hợp đó và các dạng chuyển vị, đảo của nó.
3. **12 âm**: tự tạo một chuỗi, viết bảng 48 dạng, rồi viết một valse ngắn — thử làm như Berg, chọn chuỗi có hợp âm ba ẩn để nghe "điệu tính" ([[ky-thuat-12-am]]).
4. **Tân cổ điển**: lấy một minuet galant của mình ([[sang-tac-co-dien]]), giữ hình thức, "làm sai" có chủ đích: thêm nốt nghịch vào hợp âm, đổi nhịp 3/4 thành 5/8 ở vài ô.
5. **Messiaen**: viết một nhịp điệu không đảo ngược được (đối xứng, ví dụ móc đơn – đen – trắng – đen – móc đơn) và một giai điệu trên điệu thức 2 (bát cung).
6. **Ngẫu nhiên**: viết 8 ô nhạc trên 8 tấm thẻ; tung xúc xắc để chọn thứ tự — so sánh với [[sang-tac-co-dien|trò chơi xúc xắc thế kỷ 18]]: giờ đây kết quả không cần "đúng ngữ pháp".
7. **Lệch pha**: hai người chơi cùng một mẫu 12 nốt; người thứ hai nhanh hơn một chút đến khi lệch đúng một nốt, rồi giữ — như *Piano Phase* (1967) của Reich ([[choi-da-nhip-tren-piano]]).
8. **Tintinnabuli**: tay phải đi bậc trong La thứ tự nhiên, tay trái chỉ chơi La – Đô – Mi gần nhất phía dưới mỗi nốt tay phải.
9. **Khối âm**: cho cả lớp (hoặc nhiều đường thu âm) cùng ngân các nốt cạnh nhau trong một quãng 3, mỗi người tự đổi nốt chậm.

## Ba lời khuyên
- **Học luật để biết vì sao người ta phá nó.** Mỗi trào lưu là phản ứng với trào lưu trước: 12 âm trả lời câu hỏi "làm sao tổ chức nhạc khi không còn giọng chủ?", tối giản phản ứng với độ phức tạp của chuỗi toàn phần.
- **Nghe trước, đọc lý thuyết sau.** Nghe *Atmosphères* trước khi đọc về vi phức điệu.
- **Không cần chọn phe.** Nhiều nhà soạn nhạc hôm nay trộn công cụ từ nhiều trào lưu, cả với nhạc phổ thông và [[nhac-dien-tu|nhạc điện tử]].

::ytsearch Ligeti Atmospheres | Tìm nghe Atmosphères (Ligeti, 1961)
::ytsearch Arvo Part Fur Alina | Tìm nghe Für Alina (Pärt, 1976)
::ytsearch Steve Reich Piano Phase | Tìm nghe Piano Phase (Reich, 1967)
`,
  },
  {
    slug: "sang-tac-ca-khuc",
    title: "Sáng tác ca khúc phổ thông: hook, cấu trúc, lời và quy trình",
    category: 'composition',
    also: ['genres'],
    aliases: ["viết ca khúc", "sáng tác bài hát", "songwriting", "hook", "topline", "viết lời bài hát", "sáng tác nhạc pop", "điệp khúc"],
    summary: "Viết một ca khúc từ đầu đến bản demo: ba cửa vào (tựa bài/hook, vòng hợp âm, giai điệu), cấu trúc verse – pre-chorus – chorus – bridge và cách làm điệp khúc nổi bật (âm vực, nhịp, độ dài nốt), lời ca theo Pattison (prosody, các kiểu vần) và thanh điệu tiếng Việt, cách làm việc topline và đồng sáng tác (Seabrook), xu hướng intro ngắn dần thời streaming (Léveillé Gauvin 2018), bản quyền — kèm bài tập.",
    refs: [
      ["Wikipedia — Hook (music)", "https://en.wikipedia.org/wiki/Hook_(music)"],
      ["Wikipedia — Songwriter", "https://en.wikipedia.org/wiki/Songwriter"],
      ["Léveillé Gauvin (2018), Drawing listener attention in popular music — Musicae Scientiae", "https://journals.sagepub.com/doi/10.1177/1029864917698010"],
      ["Bookforum — review of Seabrook, The Song Machine (2015)", "https://bookforum.com/print/2203/a-highbrow-journalist-ventures-into-the-sanctums-of-hit-making-for-the-mega-pop-market-14970"],
    ],
    body: `
Ca khúc là thể loại được viết và nghe nhiều nhất hôm nay. Nó ngắn (3 – 4 phút), có lời, có một ý chính, và phải **bắt tai ngay**. Thư viện đã có bài về hình thức ([[hinh-thuc-ca-khuc-pho-thong]]), hoà âm ([[hoa-am-pop]]) và đệm ([[dem-hat-piano]]); bài này nói về **viết**. Quay lại [[lo-trinh-sang-tac]].

## Ba cửa vào
| Bắt đầu từ | Làm gì | Ưu | Nhược |
|---|---|---|---|
| **Tựa bài / hook lời** | Một câu ngắn, ấn tượng — rồi dựng bài quanh nó | Bài có ý rõ ngay | Dễ thành khẩu hiệu |
| **Vòng hợp âm / beat** | Lặp một vòng 4 hợp âm, ngân nga giai điệu lên trên | Nhanh, hợp nhạc pop hiện đại | Giai điệu dễ nhạt, giống bài khác |
| **Giai điệu** | Một câu hát nảy ra, ghi âm ngay | Giai điệu mạnh | Có thể khó đặt lời tiếng Việt hợp thanh |

Không có cửa nào "đúng"; nhiều người viết dùng cả ba tuỳ bài.

## Cấu trúc và vai trò từng khối
Theo phân loại của Covach và nghiên cứu của Summach, Everett (xem [[hinh-thuc-ca-khuc-pho-thong]]):
| Khối | Vai trò khi viết | Mẹo |
|---|---|---|
| **Intro** | Đặt màu, đưa người nghe vào | Ngắn; thường lấy từ hook |
| **Verse** | Kể chuyện, chi tiết | Âm vực thấp – trung, nhiều chữ, nốt ngắn |
| **Pre-chorus** | Dồn lên | Đổi hợp âm nhanh hơn, giai điệu đi lên, cắt ngắn câu |
| **Chorus** | Ý chính, chứa tựa bài | Âm vực cao hơn, nốt dài hơn, ít chữ, lặp lại |
| **Bridge** | Tương phản, góc nhìn mới | Giọng hoặc hợp âm khác, thường một lần trước điệp khúc cuối |
| **Outro** | Kết | Lặp hook, nhỏ dần hoặc kết dứt khoát |

**Làm điệp khúc nổi bật** bằng nhiều tham số cùng lúc (giống cao trào — xem [[kien-truc-tac-pham]]): lên cao vài bậc, đổi nhịp điệu (từ nốt ngắn liên tục sang nốt dài), bắt đầu ở hợp âm khác verse (verse ở vi, chorus ở IV hoặc I), dày phần đệm.

## Hook
**Hook** là đoạn ngắn dễ nhớ nhất — có thể là câu hát điệp khúc, một tiếng riff, một nhịp điệu. Các bài dễ "kẹt trong đầu" thường có đường nét quen thuộc kèm vài chi tiết bất thường ([[nhac-ket-trong-dau]]). Mẹo viết hook:
- Ngắn (2 – 4 ô), lặp được.
- Nhịp điệu riêng (đảo phách, ngắt).
- Đặt ở chỗ dễ nghe: đầu điệp khúc, hoặc cuối mỗi câu.
- Có thể xuất hiện ngay từ intro.

## Lời ca
Pat Pattison (*Writing Better Lyrics*) đề nghị:
- **Prosody**: hình thức lời phải ủng hộ nội dung — câu ổn định cho ý chắc chắn, câu lệch vần cho ý chênh vênh. Xem [[viet-cho-loi-ca]].
- **Cho thấy, đừng kể**: hình ảnh cụ thể ("ly cà phê nguội") mạnh hơn tính từ chung ("buồn").
- **Các kiểu vần** từ chặt đến lỏng: vần hoàn hảo, vần cùng họ âm, vần thêm/bớt phụ âm, vần nguyên âm, vần phụ âm — vần lỏng cho lời tự nhiên hơn.

**Với tiếng Việt** còn thêm **thanh điệu**: giai điệu đi ngược thanh làm lời nghe sai ([[viet-cho-loi-ca]], [[loi-bai-hat-va-tam-ly-nguoi-nghe]]). Vần bằng – trắc của thơ Việt cũng ảnh hưởng chỗ ngắt và nốt dài.

## Topline và đồng sáng tác
Trong công nghiệp pop hiện đại, nhiều bài được viết theo lối **topline**: nhà sản xuất làm beat và vòng hợp âm trước, người viết "topline" sáng tác giai điệu và hook lên trên, lời thường hoàn thiện sau. Trong *The Song Machine* (2015), John Seabrook mô tả nhóm của Max Martin với khái niệm "**melodic math**": mỗi âm tiết phải ăn khớp với giai điệu, kể cả khi phải hy sinh ngữ pháp của lời. Đây là **mô tả báo chí** về một cách làm, không phải nguyên tắc chung; với tiếng Việt, hy sinh nghĩa hoặc thanh điệu thường phải trả giá đắt hơn tiếng Anh. Xem thêm [[a-r-va-phat-trien-nghe-si]], [[mo-hinh-cong-nghiep-k-pop]].

## Intro ngắn dần
Nghiên cứu của Hubert Léveillé Gauvin (*Musicae Scientiae*, 2018) trên khoảng 300 bài vào top 10 Mỹ từ 1986 đến 2015 cho thấy **intro ngắn đi khoảng ba phần tư**; thời gian chờ đến khi giọng hát vào giảm từ khoảng 23 giây (giữa thập niên 1980) xuống khoảng 5 giây (giữa thập niên 2010). Tác giả giải thích bằng "kinh tế chú ý": người nghe có quá nhiều lựa chọn, bài phải giữ họ ngay. Số liệu theo bài báo gốc và các bản tường thuật; xem thêm [[tam-ly-nghe-nhac-thoi-streaming]].

## Từ ý tưởng đến demo
1. **Ghi âm ý** ngay (điện thoại).
2. **Viết điệp khúc trước** nếu đã có hook — rồi viết verse dẫn tới nó.
3. **Kiểm tra lời và thanh** bằng cách hát chậm, nhờ người khác nghe.
4. **Bản demo giọng + piano/guitar**: nếu bài hay với một nhạc cụ, phối thêm sẽ hay hơn; nếu không, phối không cứu được. Xem [[dem-pop-ballad]], [[dem-hat-hien-dai]].
5. **Phối và thu** (DAW — xem [[sang-tac-cong-nghe-va-may-tinh]]).
6. **Đăng ký quyền tác giả** và giữ bản nháp có ngày tháng ([[ban-quyen-am-nhac-viet-nam]], [[ban-quyen-am-nhac-quoc-te]]).

## Bài tập
- Lấy một vòng hợp âm trong [[hoa-am-pop]], viết **hai** điệp khúc khác nhau trên cùng vòng đó.
- Viết một verse và một chorus, sao cho chorus khác verse ở **ít nhất ba** tham số (âm vực, nhịp điệu, hợp âm đầu, mật độ chữ).
- Phân tích một bài V-pop yêu thích theo bảng khối ở trên ([[vpop-rap-viet]], [[tan-nhac-viet-nam]]), rồi viết một bài cùng cấu trúc với giai điệu và lời mới.
`,
  },
  {
    slug: "sang-tac-nhac-phim",
    title: "Sáng tác nhạc phim và nhạc trò chơi",
    category: 'composition',
    also: ['genres'],
    aliases: ["viết nhạc phim", "film scoring", "nhạc nền", "spotting", "temp track", "nhạc trò chơi thích ứng", "adaptive music", "game music"],
    summary: "Nghề viết nhạc cho hình ảnh: các chức năng của nhạc phim theo Claudia Gorbman (1987), nhạc trong và ngoài thế giới phim (diegetic, non-diegetic), quy trình làm việc (buổi spotting, danh sách cue, timecode, điểm nhấn, bản nhạc tạm temp track, bản mô phỏng, thu theo hình), thủ pháp (leitmotif, ostinato, nhạc nền dưới thoại, “mickey-mousing”) và nhạc trò chơi thích ứng (ghép đoạn theo chiều ngang, chồng lớp theo chiều dọc, hệ thống iMUSE 1991) — kèm bài tập.",
    refs: [
      ["Wikipedia — Unheard Melodies: Narrative Film Music (Gorbman, 1987)", "https://en.wikipedia.org/wiki/Unheard_Melodies:_Narrative_Film_Music"],
      ["Wikipedia — Film score", "https://en.wikipedia.org/wiki/Film_score"],
      ["Wikipedia — iMUSE", "https://en.wikipedia.org/wiki/IMUSE"],
      ["Wikipedia — Adaptive music", "https://en.wikipedia.org/wiki/Adaptive_music"],
    ],
    body: `
Nhạc phim là sáng tác **phục vụ một thứ khác** — câu chuyện, hình ảnh, nhịp dựng. Người viết không chọn độ dài, không chọn lúc bắt đầu, và thường không có lời cuối cùng. Lịch sử và ví dụ ở [[nhac-phim-va-tro-choi]]; nghiên cứu học thuật ở [[nghien-cuu-nhac-phim]]. Quay lại [[lo-trinh-sang-tac]].

## Nhạc phim làm gì?
Trong *Unheard Melodies* (1987), Claudia Gorbman nêu các nguyên tắc của nhạc phim cổ điển Hollywood:
| Nguyên tắc | Nghĩa |
|---|---|
| **Vô hình** | Không thấy nguồn phát của nhạc nền trên màn hình |
| **"Không nghe thấy"** | Nhạc không tranh sự chú ý với thoại và hình — người xem không để ý đến nó một cách có ý thức |
| **Biểu đạt cảm xúc** | Nhạc nói điều hình ảnh chưa nói được |
| **Dẫn dắt câu chuyện** | Báo hiệu nơi chốn, thời đại, nhân vật, góc nhìn |
| **Liên tục** | Lấp chỗ cắt dựng, nối cảnh |
| **Thống nhất** | Chủ đề lặp lại gắn cả phim |
| **Phá luật** | Mọi nguyên tắc trên đều có thể bị phá có chủ đích |

Sách này cũng được ghi nhận là đã phổ biến hai thuật ngữ **diegetic** (nhạc có nguồn trong thế giới phim — radio, ca sĩ trong quán) và **non-diegetic** (nhạc nền chỉ khán giả nghe).

## Quy trình làm việc
| Bước | Nội dung |
|---|---|
| **Spotting** | Đạo diễn và nhà soạn nhạc xem phim, quyết định chỗ nào có nhạc, bắt đầu – kết thúc ở đâu, mang cảm xúc gì |
| **Danh sách cue** | Mỗi đoạn nhạc (cue) được đánh số, ghi **timecode** vào – ra và các **điểm nhấn** (hit point: cửa đóng, cú đấm, cắt cảnh) |
| **Temp track** | Phim thường được dựng với **nhạc tạm** lấy từ phim khác; nhà soạn nhạc phải vừa tôn trọng ý đồ, vừa tránh chép |
| **Bản mô phỏng (mockup)** | Viết và dựng bằng thư viện âm thanh mẫu để đạo diễn duyệt — xem [[sang-tac-cong-nghe-va-may-tinh]] |
| **Phối và thu** | Phối khí (thường có đội phối khí riêng), thu theo hình, thường với click track |
| **Mix vào phim** | Nhạc được trộn với thoại và tiếng động — thường nhỏ hơn nhà soạn nhạc mong |

Hệ quả: nhịp độ và độ dài **phục vụ hình**. Kỹ năng then chốt là **tính nhịp độ** sao cho điểm nhấn rơi đúng phách, và viết nhạc **co giãn được** khi phim bị dựng lại.

## Thủ pháp
- **Leitmotif**: chủ đề gắn với nhân vật, nơi chốn, ý tưởng — từ Wagner, qua *King Kong* (Max Steiner, 1933) đến *Star Wars* (John Williams, 1977); xem [[bien-doi-chu-de]].
- **Nhạc nền dưới thoại**: âm vực tránh vùng giọng nói, kết cấu thưa, ít giai điệu.
- **Ostinato và âm nền**: tạo căng thẳng kéo dài mà không đòi chú ý ([[ostinato]]).
- **Mickey-mousing**: nhạc minh hoạ sát từng động tác (gốc từ phim hoạt hình) — hiệu quả khi hài hước, lộ liễu khi nghiêm túc.
- **Đối lập**: nhạc vui trên cảnh buồn (hoặc ngược lại) tạo mỉa mai — "phá luật" theo Gorbman.
- **Màu thời đại, địa phương**: nhạc cụ, điệu thức, nhịp đặc trưng ([[sang-tac-voi-chat-lieu-viet]]).

## Nhạc trò chơi: nhạc phải thích ứng
Trong trò chơi, **không biết trước** người chơi sẽ ở một cảnh bao lâu hay khi nào chuyển cảnh. Nhạc phải **lặp không lộ đường nối** và **thay đổi theo trạng thái**:
| Kỹ thuật | Cách làm |
|---|---|
| **Ghép theo chiều ngang** | Chia nhạc thành nhiều đoạn; hệ thống chọn đoạn tiếp theo theo tình huống, chuyển ở điểm nối định sẵn |
| **Chồng lớp theo chiều dọc** | Nhiều lớp (bè trầm, bộ gõ, giai điệu) chạy song song; thêm hoặc bớt lớp theo mức căng |
| **Stinger** | Đoạn ngắn chèn vào khi có sự kiện (thắng, nhặt đồ) |

Hệ thống **iMUSE** của LucasArts (Michael Land và Peter McConnell), dùng lần đầu trong *Monkey Island 2* (1991), là ví dụ sớm nổi tiếng về chuyển nhạc mượt theo diễn biến trò chơi. Xem thêm [[am-nhac-trong-quang-cao-phim-va-tro-choi]].

## Bài tập
1. **Viết lại nhạc** cho một đoạn phim 1 phút (tắt tiếng gốc): làm spotting, đánh dấu 3 điểm nhấn, tính nhịp độ để điểm nhấn rơi vào phách mạnh.
2. **Ba phiên bản một chủ đề**: anh hùng, bi thương, hài hước — luyện biến đổi tính cách.
3. **Vòng lặp thích ứng**: viết 8 ô lặp được với 3 lớp (nền, nhịp, giai điệu); kiểm tra từng tổ hợp lớp đều nghe được.
4. **Cảnh có thoại**: viết nhạc nền cho một đoạn hội thoại mà không lấn giọng nói.
`,
  },
  {
    slug: "sang-tac-cong-nghe-va-may-tinh",
    title: "Sáng tác với công nghệ: từ Illiac Suite đến DAW và AI",
    category: 'composition',
    also: ['musicology'],
    aliases: ["sáng tác bằng máy tính", "soạn nhạc bằng thuật toán", "algorithmic composition", "Illiac Suite", "DAW", "phần mềm soạn nhạc", "nhạc sinh thành", "generative music", "AI sáng tác"],
    summary: "Máy móc trong sáng tác: trò chơi xúc xắc thế kỷ 18, Illiac Suite (1957, Hiller và Isaacson, bốn “thí nghiệm” trên máy ILLIAC I), Xenakis và nhạc xác suất, MUSIC của Max Mathews (1957), MIDI (1983), dự án EMI của David Cope, nhạc “sinh thành” của Brian Eno, phần mềm ký âm và DAW, rồi các công cụ AI tạo nhạc. Hai cách làm việc (ký âm trước hay DAW trước), lời khuyên dùng công nghệ như công cụ, và các câu hỏi bản quyền — nối sang bài AI và âm nhạc.",
    refs: [
      ["Wikipedia — Illiac Suite", "https://en.wikipedia.org/wiki/Illiac_Suite"],
      ["Wikipedia — Algorithmic composition", "https://en.wikipedia.org/wiki/Algorithmic_composition"],
      ["Wikipedia — Experiments in Musical Intelligence", "https://en.wikipedia.org/wiki/Experiments_in_Musical_Intelligence"],
      ["Wikipedia — Generative music", "https://en.wikipedia.org/wiki/Generative_music"],
      ["Wikipedia — MIDI", "https://en.wikipedia.org/wiki/MIDI"],
    ],
    body: `
Mỗi thế hệ công nghệ thay đổi cách sáng tác: máy in nhạc, máy ghi âm, máy tính, phần mềm, AI. Bài này kể lại các mốc chính dưới góc nhìn người viết và đưa ra lời khuyên thực hành. Lịch sử nhạc điện tử ở [[nhac-dien-tu]]; các vấn đề pháp lý và xã hội của AI ở [[tri-tue-nhan-tao-va-am-nhac]]. Quay lại [[lo-trinh-sang-tac]].

::timeline 1757=Kirnberger_xúc_xắc 1957=Illiac_Suite 1957=MUSIC_(Mathews) 1959=Experimental_Music 1962=Xenakis_ST 1969=HPSCHD 1978=Music_for_Airports 1981=Cope_EMI 1983=MIDI 1996=Eno_“generative” 2016=Magenta 2024=Kiện_Suno_–_Udio | Một số mốc (năm gần đúng; xem nguồn từng mục)

## 1. Luật lắp ghép: từ xúc xắc đến thuật toán
Trò chơi xúc xắc soạn minuet thế kỷ 18 ([[sang-tac-co-dien]]) đã là một **thuật toán**: một bảng các ô nhịp viết sẵn và một quy tắc chọn ngẫu nhiên. Mọi phương pháp "soạn nhạc bằng máy" về sau đều có hai phần như thế: **chất liệu** và **luật chọn**.

## 2. Illiac Suite (1957)
Lejaren Hiller và Leonard Isaacson lập trình máy tính **ILLIAC I** ở Đại học Illinois để tạo chất liệu cho một bản tứ tấu đàn dây — *Illiac Suite*, thường được coi là **bản nhạc đầu tiên do máy tính điện tử soạn**. Bốn chương ứng với bốn "thí nghiệm":
| Chương | Thí nghiệm |
|---|---|
| 1 | Tạo cantus firmus |
| 2 | Bốn bè theo các luật đối âm |
| 3 | Nhịp điệu, cường độ và cách diễn tấu |
| 4 | Chuỗi Markov (xác suất nốt sau phụ thuộc nốt trước) |

Máy chỉ tạo **kết quả số**; con người **chép tay** thành tổng phổ. Phương pháp được công bố trong sách *Experimental Music* (1959). Một số nguồn ghi năm 1956 cho lần tạo hoặc trình diễn đầu; 1957 là năm hay được dẫn nhất.

Chương 1 – 2 thực chất là **[[doi-am-5-loai|đối âm theo Fux]] viết thành chương trình** — cho thấy quy tắc sáng tác cổ điển có thể "chạy" được trên máy, và cũng cho thấy giới hạn của chúng: tuân luật không bảo đảm nhạc hay.

## 3. Xác suất, âm thanh tổng hợp, ngẫu nhiên
- **Iannis Xenakis** dùng xác suất và thống kê để tổ chức khối âm ([[sang-tac-the-ky-20]]); chương trình *ST* của ông (đầu thập niên 1960) tính toán các tác phẩm cho nhạc cụ.
- **Max Mathews** ở Bell Labs viết chương trình **MUSIC** (1957), tổ tiên của các phần mềm tổng hợp âm thanh.
- **John Cage và Hiller** viết *HPSCHD* (1969) cho harpsichord và băng do máy tính tạo.

## 4. MIDI, phần mềm, DAW
Chuẩn **MIDI** (1983) cho phép đàn phím, máy tính và máy tạo âm "nói chuyện" với nhau. Từ đó ra đời:
- **Phần mềm ký âm** (MuseScore miễn phí, Sibelius, Dorico, Finale…): viết tổng phổ, nghe thử, in phần riêng.
- **DAW** (máy trạm âm thanh số: Logic, Ableton Live, Cubase, FL Studio, Reaper, Pro Tools…): thu, sắp xếp, dựng âm thanh, trộn — trung tâm của nhạc pop, nhạc phim và nhạc điện tử hôm nay.
- **Thư viện âm thanh mẫu** mô phỏng dàn nhạc — tiện để phác, nhưng **không thay được nhạc công** ([[phoi-khi-va-viet-cho-nhac-cu]]).

| Cách làm việc | Mạnh | Cần lưu ý |
|---|---|---|
| **Ký âm trước** (giấy, phần mềm ký âm) | Tư duy bè, hình thức, tổng phổ cho người chơi | Âm thanh nghe thử thường "cứng" |
| **DAW trước** (thu, vòng lặp, piano roll) | Âm thanh thật ngay, hợp pop và nhạc điện tử | Dễ mắc kẹt trong vòng lặp 8 ô, khó viết hình thức dài |

## 5. Máy "học" phong cách
- Nhà soạn nhạc **David Cope** phát triển **EMI** (*Experiments in Musical Intelligence*, từ đầu thập niên 1980): phân tích tác phẩm của một nhà soạn nhạc, tách các mẫu đặc trưng, ghép lại thành tác phẩm mới "theo phong cách" — một hậu duệ tinh vi của trò chơi xúc xắc.
- **Brian Eno** dùng từ **generative music** (khoảng 1995 – 1996) cho nhạc do một hệ thống luật tự sinh, khác nhau mỗi lần nghe; *Music for Airports* (1978) dùng các vòng băng dài lệch nhau — gần với ý tưởng [[sang-tac-trung-co-phuc-hung|đồng tiết tấu]] và lệch pha của [[toi-gian|nhạc tối giản]].
- Các mô hình **học sâu** (dự án Magenta của Google từ 2016, rồi các công cụ tạo cả bài hát như Suno, Udio) học từ kho dữ liệu khổng lồ. Năm 2024, RIAA và các hãng đĩa lớn khởi kiện Suno và Udio về việc dùng bản ghi để huấn luyện — diễn biến và quan điểm của Cục Bản quyền Hoa Kỳ ở [[tri-tue-nhan-tao-va-am-nhac]].

## Lời khuyên cho người học sáng tác
1. **Công nghệ là công cụ, tai là người quyết định.** Phần mềm chơi được mọi thứ — kể cả thứ không ai chơi nổi và thứ không hay.
2. **Học cả hai cách**: viết được tổng phổ cho người chơi thật, và dựng được một bản demo trong DAW.
3. **Dùng thuật toán như bài tập**: viết một "trò chơi xúc xắc" cho chính phong cách của mình, hoặc một chuỗi Markov đơn giản từ giai điệu mình viết — rồi chọn lọc và sửa kết quả. Xem [[am-nhac-hoc-tinh-toan]].
4. **Với AI**: đọc kỹ điều khoản sử dụng và quy định bản quyền; nhiều nơi chỉ bảo hộ phần **do con người sáng tạo**. Giữ bản nháp, ghi lại phần nào mình viết.
5. **Sao lưu**: dự án DAW gồm nhiều file; mất ổ cứng là mất bài.
`,
  },
  {
    slug: "sang-tac-voi-chat-lieu-viet",
    title: "Sáng tác với chất liệu âm nhạc Việt Nam",
    category: 'composition',
    also: ['vietnam'],
    aliases: ["chất liệu dân gian", "sáng tác dân tộc", "dân ca trong sáng tác", "dùng dân ca", "sáng tác chất liệu Việt", "folk material composition"],
    summary: "Đưa chất liệu Việt vào tác phẩm: ba cách dùng dân ca theo Bartók (1931) — giữ nguyên giai điệu và viết đệm, tự viết giai điệu theo kiểu dân ca, thấm nhuần thành “tiếng mẹ đẻ” âm nhạc; các lớp chất liệu Việt (điệu thức ngũ cung và hơi, luyến láy, nhịp, thanh điệu, âm sắc nhạc cụ); hoà âm không “Tây hoá”; giới hạn của bình quân luật trên piano; tránh màu “trang trí”; tôn trọng nguồn và nghệ nhân — kèm các bài tập theo ba mức của Bartók.",
    refs: [
      ["Bartók, The Influence of Peasant Music on Modern Music (1931) — bản đọc", "https://labs.sonicfield.org/library/the-inflence-of-peasant-music-on-modern-music"],
      ["Kirby & Ladd (2016), Tone-melody correspondence in Vietnamese popular song", "https://www.research.ed.ac.uk/en/publications/tone-melody-correspondence-in-vietnamese-popular-song"],
      ["UNESCO — Đờn ca tài tử", "https://ich.unesco.org/en/RL/00733"],
    ],
    body: `
Thư viện đã có rất nhiều về âm nhạc Việt Nam ([[am-nhac-viet-nam]]): thể loại, lý thuyết cổ truyền, nhạc cụ, nhạc sĩ. Bài này hỏi câu hỏi của người viết: **làm sao dùng chất liệu đó trong tác phẩm của mình mà không chỉ "khoác áo dân tộc"?** Quay lại [[lo-trinh-sang-tac]].

## Ba cách của Bartók
Trong bài luận *The Influence of Peasant Music on Modern Music* (1931), Bartók — người thu âm và phân tích hàng nghìn bài dân ca — phân biệt ba cách dùng dân ca:
| Cách | Mô tả (theo Bartók) | Ví dụ việc làm |
|---|---|---|
| **1. Giữ giai điệu** | Lấy nguyên hoặc gần nguyên một giai điệu dân ca, viết phần đệm, có thể thêm mở đầu và kết | Soạn một bài dân ca cho piano |
| **2. Bắt chước** | Tự viết giai điệu mới theo kiểu dân ca; Bartók cho rằng về bản chất cách này không khác cách 1 | Viết "dân ca giả" trong một hơi, một điệu |
| **3. Thấm nhuần** | Không trích, không bắt chước giai điệu nào, nhưng cả tác phẩm thấm "không khí" dân ca — ngôn ngữ dân gian đã thành **tiếng mẹ đẻ** của người viết | Điệu thức, nhịp, luyến láy trở thành ngôn ngữ riêng |

Bartók coi cách thứ ba là mức cao nhất. Ông cũng khẳng định người sáng tác **có quyền dùng chất liệu từ mọi nguồn**. (Trích theo bản đọc và các tài liệu thứ cấp; chưa đối chiếu với bản in gốc.)

Messiaen cũng khuyên học trò Việt của mình, Nguyễn Thiện Đạo, "hãy Việt Nam nhất có thể" — xem [[nguyen-thien-dao]] và [[nhac-co-dien-viet-nam]].

## Các lớp chất liệu Việt
| Lớp | Nội dung | Bài nền |
|---|---|---|
| **Điệu thức** | Ngũ cung và các điệu (Bắc, Nam), các hơi (Xuân, Ai, Oán…); điệu thức Việt rất đa dạng, không chỉ năm âm | [[ly-thuyet-am-nhac-co-truyen-viet-nam]], [[hoi-trong-nhac-tai-tu-cai-luong]], [[am-giai-ngu-cung]] |
| **Luyến láy, tô điểm** | Nhấn, rung, vuốt, mổ; giai điệu khung ("lòng bản") và hoa lá | [[long-ban-va-ky-thuat-to-diem]] |
| **Nhịp** | Nhịp phách, song lang, nhịp giãn dần của vọng cổ, nhịp tự do của hát nói | [[phach-song-lang-mo]], [[cai-luong]], [[ca-tru]] |
| **Thanh điệu** | Lời dẫn giai điệu — đặc biệt quan trọng khi phổ lời | [[viet-cho-loi-ca]] |
| **Âm sắc** | Đàn bầu, đàn tranh, sáo trúc, cồng chiêng… | [[nhac-cu-viet-nam]], [[dan-bau]], [[dan-tranh]], [[cong-chieng]] |
| **Thể loại, không gian** | Quan họ đối đáp, hát ru, chèo, ca trù, nhạc Tây Nguyên | [[dan-ca-viet-nam]], [[quan-ho]], [[hat-ru]], [[cheo]] |

## Hoà âm: đừng "Tây hoá" vội
Giai điệu ngũ cung không có âm dẫn; đặt hợp âm V7 – I lên nó dễ làm mất màu. Bài [[hoa-am-cho-giai-dieu-ngu-cung]] đưa ra các cách giữ chất ngũ cung: âm nền và quãng 5, hợp âm nằm trọn trong thang, chồng quãng 4, đi song song. Thêm vài gợi ý từ kinh nghiệm nhạc thế kỷ 20 ([[sang-tac-the-ky-20]]):
- **Âm ngân dài** (như dây buông của đàn tranh) thay cho bè trầm chức năng.
- **Ostinato** từ một mẫu nhịp dân gian.
- **Phức điệu dị âm**: hai bè cùng một giai điệu nhưng trang trí khác nhau, như trong hoà tấu cổ truyền.
- **Hoà âm quãng 4, quãng 2** từ chính các nốt của thang (kiểu Bartók, Debussy).

## Piano và những nốt "giữa các phím"
Nhạc cổ truyền dùng âm "già/non" không khớp bình quân luật, cùng kỹ thuật nhấn, rung, vuốt mà piano không làm được ([[luat-binh-quan]]). Người viết cho piano có thể:
- **Gợi** thay vì chép: nốt hoa mỹ, láy nhanh, nốt lướt để "giả" luyến láy; pedal và âm vực cao để gợi đàn tranh.
- Chấp nhận piano là **một giọng khác** — như Bartók viết cho piano mà không cố giả đàn dân gian Hungary.
- Viết cho **nhạc cụ Việt** khi cần màu thật, hoặc kết hợp piano với nhạc cụ dân tộc (cần hiểu tầm âm, cách lên dây — xem trang từng nhạc cụ).

## Tránh "màu trang trí"
- **Trích một câu dân ca quen** vào giữa một bài pop chưa làm bài "có bản sắc". Bản sắc đến khi chất liệu **tham gia vào cấu trúc**: điệu thức quyết định hoà âm, nhịp dân gian quyết định hình thức.
- **Tránh khuôn sáo**: tiếng sáo trúc + ngũ cung + gió thổi là "Việt Nam trong nhạc phim nước ngoài". Nghe thật nhiều bản thu nghệ nhân trước khi viết.
- **Kiểm tra giai thoại**: nhiều câu chuyện về dân ca và nhạc sĩ chưa có nguồn — xem [[giai-thoai-am-nhac-viet-nam]].

## Tôn trọng nguồn
- Ghi rõ **nguồn gốc** bài dân ca và **người hát/bản thu** mà mình dựa vào.
- Bài dân ca cổ thường thuộc phạm vi công cộng, nhưng **bản thu, bản soạn, lời mới** có thể có chủ sở hữu — xem [[ban-quyen-am-nhac-viet-nam]].
- Khi làm việc với nghệ nhân, hỏi ý và ghi công. Nhiều loại hình là [[di-san-phi-vat-the-va-am-nhac|di sản phi vật thể]] với cộng đồng thực hành còn sống.

## Bài tập theo ba mức của Bartók
1. **Mức 1**: chọn một bài dân ca ngắn quen thuộc, soạn cho piano với ba kiểu đệm: âm ngân quãng 5, hợp âm nằm trong thang, ostinato. Giữ nguyên giai điệu.
2. **Mức 2**: viết một "dân ca giả" 16 ô theo một điệu (ví dụ điệu Bắc theo quy ước Hò = Đô: Đô – Rê – Fa – Sol – La), có luyến láy viết ra bằng nốt hoa mỹ; phổ một câu ca dao, giữ đúng thanh điệu.
3. **Mức 3**: viết một tiểu phẩm không trích và không bắt chước giai điệu nào, nhưng điệu thức, nhịp và kết cấu đều rút từ một thể loại (ví dụ cấu trúc đối đáp của quan họ, nhịp giãn của vọng cổ).
`,
  },
  {
    slug: "bai-tap-sang-tac",
    title: "Chương trình bài tập sáng tác: 24 tuần từ chép mẫu đến tác phẩm",
    category: 'composition',
    also: ['musicianship'],
    aliases: ["bài tập sáng tác", "luyện sáng tác", "tự học sáng tác", "composition exercises", "giáo trình sáng tác tự học", "kế hoạch học sáng tác"],
    summary: "Một chương trình tự học 24 tuần, xây từ các phương pháp lịch sử (chép mẫu, mô phỏng, luật chơi, ứng tác trên phím, xưởng góp ý): sáu chặng — chất liệu, khung hoà âm, hình thức nhỏ, phong cách, lời và nhạc cụ, tác phẩm tự do — mỗi tuần một bài cụ thể nối với bài lý thuyết tương ứng; cách tự đánh giá bằng bảng câu hỏi, cách lập sổ sáng tác và cách nhận góp ý.",
    refs: [
      ["Wikipedia — Arnold Schoenberg (giảng dạy và sách lý thuyết)", "https://en.wikipedia.org/wiki/Arnold_Schoenberg"],
      ["Open Music Theory", "https://viva.pressbooks.pub/openmusictheory/"],
      ["Monuments of Partimenti (Gjerdingen)", "https://faculty-web.at.northwestern.edu/music/gjerdingen/partimenti/index.htm"],
    ],
    body: `
Chương trình này dành cho người tự học, mỗi tuần khoảng **3 – 5 giờ**. Nó ghép bốn mô hình dạy trong [[lich-su-day-sang-tac]]: **quy tắc**, **mô phỏng mẫu**, **ứng tác trên đàn**, **góp ý**. Mỗi tuần một sản phẩm nhỏ **hoàn chỉnh** — viết xong, chơi được, thu lại. Quay lại [[lo-trinh-sang-tac]].

## Thói quen hằng tuần
| Việc | Thời lượng | Ghi chú |
|---|---|---|
| Bài viết chính | 2 – 3 giờ | Theo bảng dưới |
| Ứng tác trên đàn | 10 phút/ngày | Một vòng hợp âm, một lược đồ, một âm giai — [[ngau-hung-piano]], [[phuong-phap-luyen-ngau-hung]] |
| Nghe và phân tích | 1 giờ | Một bài trong mục [[phuong-phap-phan-tich-tac-pham|Phân tích]] hoặc bài cùng thể loại |
| Sổ sáng tác | 5 phút/ngày | Ghi ý, ghi âm, ghi điều học được |
| Thu và nghe lại | Cuối tuần | Nghe sau một đêm; tự chấm theo bảng câu hỏi |

## Chặng 1 — Chất liệu (tuần 1 – 4)
| Tuần | Bài | Nền |
|---|---|---|
| 1 | Chép tay 16 ô một minuet; viết 10 biến đổi của motif đầu | [[viet-chu-de]], [[motif]] |
| 2 | Ba giai điệu 8 ô trên cùng một nhịp điệu, đỉnh ở ba vị trí | [[viet-giai-dieu]] |
| 3 | Một sentence và một period 8 ô từ cùng một ý cơ bản | [[cau-nhac]] |
| 4 | Mở rộng một câu 8 ô thành 10 – 12 ô bằng ba cách | [[mo-rong-cau-nhac]] |

## Chặng 2 — Khung hoà âm (tuần 5 – 8)
| Tuần | Bài | Nền |
|---|---|---|
| 5 | Phối hoà âm 4 giai điệu dân ca hoặc chorale | [[phoi-hoa-am-giai-dieu]], [[phoi-chorale-kieu-bach]] |
| 6 | Chơi và viết 4 lược đồ galant ở 3 giọng; ghép thành 16 ô | [[luoc-do-galant]] |
| 7 | Một partimento ngắn: chơi trên đàn, rồi ghi lại | [[partimento]] |
| 8 | Một chaconne 8 vòng trên bè trầm đi xuống | [[passacaglia-va-chaconne]], [[viet-hoa-am-va-be-tram]] |

## Chặng 3 — Hình thức nhỏ và piano (tuần 9 – 12)
| Tuần | Bài | Nền |
|---|---|---|
| 9 | Minuet và trio (hai đoạn) | [[sang-tac-co-dien]], [[minuet-va-trio]] |
| 10 | Tiểu phẩm ABA 32 – 40 ô, có đường năng lượng vẽ trước | [[kien-truc-tac-pham]], [[hinh-thuc-ba-doan]] |
| 11 | Một chủ đề và 4 biến tấu, mỗi biến tấu đổi một tham số | [[bien-tau]] |
| 12 | Viết lại tiểu phẩm tuần 10 với kiểu đệm và kết cấu khác | [[ket-cau-va-viet-cho-piano]] |

## Chặng 4 — Phong cách (tuần 13 – 16)
| Tuần | Bài | Nền |
|---|---|---|
| 13 | Invention hai bè (Baroque) | [[sang-tac-baroque]], [[phan-tich-invention-so-1]] |
| 14 | Phần trình bày một sonatina | [[sang-tac-co-dien]], [[hinh-thuc-sonata]] |
| 15 | Một "bài ca không lời" hoặc nocturne; một motif mật mã từ tên | [[sang-tac-lang-man]] |
| 16 | Hai trang theo hai "luật chơi" thế kỷ 20 (chọn trong 9 bài tập) | [[sang-tac-the-ky-20]] |

## Chặng 5 — Lời và nhạc cụ (tuần 17 – 20)
| Tuần | Bài | Nền |
|---|---|---|
| 17 | Phổ một bài thơ ngắn (strophic), kiểm tra thanh điệu | [[viet-cho-loi-ca]] |
| 18 | Một ca khúc verse – chorus, có demo giọng + piano | [[sang-tac-ca-khuc]] |
| 19 | Chuyển soạn một bài của mình cho violin (hoặc sáo) + piano | [[phoi-khi-va-viet-cho-nhac-cu]] |
| 20 | Soạn một bài dân ca cho piano (mức 1 của Bartók) và một "dân ca giả" (mức 2) | [[sang-tac-voi-chat-lieu-viet]] |

## Chặng 6 — Tác phẩm tự do (tuần 21 – 24)
| Tuần | Bài |
|---|---|
| 21 | Lập kế hoạch: thể loại, biên chế, độ dài, bảng hình thức và đường năng lượng |
| 22 | Phác liên tục toàn bài (giai điệu + bè trầm) |
| 23 | Hoàn thiện hoà âm, kết cấu, ký hiệu diễn tấu |
| 24 | Nhờ người chơi/hát, thu âm, nhận góp ý, sửa bản cuối |

Có thể thay chặng 6 bằng nhạc cho một đoạn phim ([[sang-tac-nhac-phim]]) hoặc một dự án DAW ([[sang-tac-cong-nghe-va-may-tinh]]).

## Bảng câu hỏi tự đánh giá
1. **Ý chính** của bài là gì? Có thể hát hoặc gõ nó trong 5 giây không?
2. **Mỗi đoạn làm gì** — mở đầu, tiếp diễn, chuyển, cao trào, kết? ([[chuc-nang-hinh-thuc]])
3. **Cao trào** ở đâu? Có một cao trào chính rõ ràng không?
4. **Kết** có thuyết phục không? Có đoạn nào kết "lửng" ngoài ý muốn?
5. **Bè trầm** có đường nét không, hay chỉ là nốt gốc?
6. **Chơi được không** — ở nhịp độ ghi trên bản nhạc?
7. **Có gì thừa?** Đoạn nào bỏ đi mà bài không mất gì?
8. Sau một tuần nghe lại, **chỗ nào mình vẫn thích**? Chỗ đó thường là hạt giống của bài sau.

## Nhận góp ý
- Hỏi câu **cụ thể** ("đoạn chuyển ở ô 25 có quá dài không?") thay vì "bài có hay không?".
- Ghi lại mọi góp ý, nhưng **không phải sửa theo tất cả** — chọn những góp ý trùng với điều mình đã ngờ.
- Nghe người chơi chơi bài mình mà **không giải thích trước**: chỗ họ chơi sai ý thường là chỗ ký hiệu chưa rõ.
- Tham gia nhóm sáng tác, lớp, hoặc trao đổi bản thu với bạn học — như các xưởng sáng tác đại học ([[lich-su-day-sang-tac]]).
`,
  },
]
