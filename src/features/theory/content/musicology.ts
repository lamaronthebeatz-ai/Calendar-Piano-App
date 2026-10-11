import type { Article } from '../wiki'

/**
 * Âm nhạc học: các bài khung của ngành. Thẻ "Âm nhạc học" (src/features/musicology) xếp toàn bộ
 * thư viện theo khung này. Nguồn ghi trong `refs`.
 */
export const musicology: Article[] = [
  {
    slug: 'am-nhac-hoc',
    title: 'Âm nhạc học: bản đồ ngành và lộ trình nghiên cứu',
    category: 'musicology',
    aliases: ['âm nhạc học', 'musicology', 'Musikwissenschaft', 'ngành âm nhạc học', 'nghiên cứu âm nhạc'],
    summary: 'Âm nhạc học là ngành nghiên cứu âm nhạc một cách có hệ thống. Từ Guido Adler (1885), ngành được chia thành âm nhạc học lịch sử và âm nhạc học hệ thống; bài này là bản đồ của cả hai nhánh và chỉ ra các bài tương ứng trong thư viện.',
    wiki: 'Musicology',
    refs: [
      ['Viện Âm nhạc — Âm nhạc học là gì?', 'https://vienamnhac.vn/bai-viet/nhac-moi/am-nhac-hoc-la-gi'],
      ['Mugglestone (1981) — Guido Adler\'s "The Scope, Method, and Aim of Musicology" (1885): English translation and commentary, Yearbook for Traditional Music 13', 'https://www.cambridge.org/core/journals/yearbook-for-traditional-music/article/guido-adlers-the-scope-method-and-aim-of-musicology-1885-an-english-translation-with-an-historicoanalytical-commentary/915683942DDC1C1BF6951154058247F7'],
      ['Adler (1885) — Umfang, Methode und Ziel der Musikwissenschaft (bản quét, Đại học Wien)', 'https://musikwissenschaft.univie.ac.at/fileadmin/user_upload/i_musikwissenschaft/Forschung/Vortragsreihen/ADLER_Umfang_Methode.pdf'],
      ['Wikipedia — Guido Adler', 'https://en.wikipedia.org/wiki/Guido_Adler'],
      ['Học viện Âm nhạc Quốc gia Việt Nam', 'https://www.vnam.edu.vn/'],
      ['Tuyensinh247 — Thông tin tuyển sinh Học viện Âm nhạc Quốc gia Việt Nam (ngành Âm nhạc học, mã 7210201)', 'https://diemthi.tuyensinh247.com/thong-tin-hoc-vien-am-nhac-quoc-gia-viet-nam-NVH.html'],
      ['Giáo dục Việt Nam — Âm nhạc học: kén người học, đầu vào khó', 'https://giaoduc.net.vn/am-nhac-hoc-ken-nguoi-hoc-do-dau-vao-kho-co-hoi-lam-dung-nganh-dao-tao-it-post248720.gd'],
    ],
    body: `
**Âm nhạc học** (tiếng Đức *Musikwissenschaft*, tiếng Anh *musicology*) là ngành nghiên cứu âm nhạc như một đối tượng khoa học. Trang của Viện Âm nhạc (Việt Nam) định nghĩa âm nhạc học là "kiến thức, là kết quả nghiên cứu âm nhạc và những vấn đề có liên quan đến âm nhạc". Khác với học chơi đàn hay học [[nhac-ly-co-ban|nhạc lý]], âm nhạc học đặt **câu hỏi nghiên cứu** và trả lời bằng **phương pháp kiểm chứng được** — xem [[phuong-phap-nghien-cuu-am-nhac]].

::wiki Guido_Adler | Guido Adler (1855–1941), người vẽ sơ đồ đầu tiên của ngành (1885)

## Sơ đồ của Adler (1885)
Bài *Umfang, Methode und Ziel der Musikwissenschaft* ("Phạm vi, phương pháp và mục đích của âm nhạc học") của Guido Adler mở đầu số đầu tiên của tạp chí *Vierteljahrsschrift für Musikwissenschaft* (1885). Đây thường được coi là nỗ lực đầu tiên mô tả trọn vẹn ngành nghiên cứu âm nhạc. Adler chia ngành thành **hai nhánh lớn**, mỗi nhánh có các phân ngành và các "khoa học bổ trợ":
| Nhánh | Đối tượng | Các phân ngành (theo các bản tóm tắt) | Bài khung |
|---|---|---|---|
| **Âm nhạc học lịch sử** | Âm nhạc theo thời gian: ai, khi nào, ở đâu, viết thế nào | Cổ tự học và [[ky-am|ký âm]]; các nhóm [[hinh-thuc-am-nhac|hình thức]] theo lịch sử; các quy luật nghệ thuật của từng thời kỳ; lịch sử nhạc cụ | [[am-nhac-hoc-lich-su]] |
| **Âm nhạc học hệ thống** | Những quy luật chung của âm nhạc | Quy luật của hoà âm, [[tiet-tau|tiết tấu]], [[giai-dieu|giai điệu]]; mỹ học; sư phạm; "Musikologie" — nghiên cứu so sánh vì mục đích dân tộc học | [[am-nhac-hoc-he-thong]] |

Bản dịch tiếng Anh có chú giải của Erica Mugglestone (1981) cho biết mục "Musicology" của từ điển *New Grove* (1980) vẫn tóm tắt sơ đồ của Adler như mô hình còn hiệu lực của ngành.

**Lưu ý:** *danh sách phân ngành chi tiết trong bảng trên lấy từ các bản tóm tắt thứ cấp; khi trích dẫn chính xác cần đối chiếu bảng hai cột trong bản dịch của Mugglestone (1981).*

## Bản đồ ngành trong thư viện này
Thẻ **Âm nhạc học** (cạnh thẻ Học viên) xếp lại toàn bộ thư viện theo sơ đồ dưới đây. Mỗi phân ngành có một bài tổng quan:
| Phần | Phân ngành | Bài tổng quan |
|---|---|---|
| Nhập môn | Ngành và phương pháp | [[am-nhac-hoc-lich-su]], [[am-nhac-hoc-he-thong]], [[phuong-phap-nghien-cuu-am-nhac]], [[dinh-nghia-am-nhac]] |
| Lịch sử | Sử học: phương pháp và công cụ | [[lich-su-nganh-am-nhac-hoc]], [[phuong-phap-su-hoc-am-nhac]], [[nguon-tra-cuu-am-nhac-hoc]] |
| Lịch sử | Nguồn, ký âm và văn bản | [[lich-su-ky-am]], [[lich-su-in-an-am-nhac]], [[van-ban-hoc-am-nhac]] |
| Lịch sử | Thời kỳ, phong cách, tiểu sử | [[am-nhac-co-dai]], [[cac-thoi-ky]] |
| Lịch sử | Lịch sử thể loại | [[the-loai-am-nhac]] |
| Lịch sử | Thực hành biểu diễn và nghệ sĩ | [[phong-trao-bieu-dien-lich-su]], [[phong-cach-dien-tau]], [[truong-phai-piano]] |
| Lịch sử | Đời sống âm nhạc và tiếp nhận | [[doi-song-am-nhac-va-thiet-che]], [[lich-su-tiep-nhan-am-nhac]] |
| Lịch sử | Nhạc khí học | [[nhac-khi-hoc]] |
| Lịch sử | Lịch sử lý thuyết | [[lich-su-phan-tich-am-nhac]] |
| Lịch sử | Lịch sử âm nhạc Việt Nam | [[lich-su-am-nhac-viet-nam]] |
| Hệ thống | Âm học âm nhạc | [[am-hoc-co-ban]], [[am-hoc-nhac-cu]] |
| Hệ thống | Tâm lý học âm nhạc | [[tam-ly-hoc-am-nhac]], [[tam-ly-hoc-phat-trien-am-nhac]], [[am-nhac-va-ngon-ngu]], [[tim-giong-bang-may]], [[thiet-ke-nghien-cuu-thuc-nghiem]] |
| Hệ thống | Thần kinh học và sinh học âm nhạc | [[than-kinh-hoc-am-nhac]], [[am-nhac-hoc-tien-hoa]], [[hoc-nhac-va-tri-tue]], [[am-nhac-tri-lieu]] |
| Hệ thống | Khoa học biểu diễn | [[khoa-hoc-bieu-dien]] |
| Hệ thống | Lý thuyết âm nhạc | [[nhac-ly-co-ban]], [[giao-trinh-hoa-am]], [[lo-trinh-hinh-thuc]] |
| Hệ thống | Phân tích | [[phuong-phap-phan-tich-tac-pham]] |
| Hệ thống | Mỹ học và triết học | [[triet-hoc-am-nhac]] |
| Hệ thống | Xã hội học và dân tộc nhạc học | [[xa-hoi-hoc-am-nhac]], [[dan-toc-nhac-hoc]] |
| Hệ thống | Sư phạm | [[lo-trinh-luyen-tai-su-pham]], [[su-pham-piano]] |
| Hệ thống | Tính toán | [[am-nhac-hoc-tinh-toan]] |
| Thực hành | Ngẫu hứng, sáng tác, đệm | [[ngau-hung-ung-tac]], [[dem-hat-hien-dai]] |

Một số bài nằm ở nhiều phân ngành: chẳng hạn [[luat-binh-quan]] vừa là âm học, vừa là lý thuyết, vừa là lịch sử lý thuyết. Đó là điều bình thường — các phân ngành là **góc nhìn**, không phải ngăn kéo.

## Âm nhạc học ở Việt Nam
- Học viện Âm nhạc Quốc gia Việt Nam có **Khoa Sáng tác – Chỉ huy – Âm nhạc học**; ngành đại học **Âm nhạc học** mang mã **7210201**.
- Theo bài của báo Giáo dục Việt Nam, chương trình Âm nhạc học ở Nhạc viện TP. Hồ Chí Minh gồm các hướng **phê bình âm nhạc**, **âm nhạc dân tộc học** và **lịch sử và lý luận âm nhạc**.
- Trang của Viện Âm nhạc nêu thêm **mỹ học âm nhạc**, **âm luật học** (nghiên cứu hệ thống âm luật, chỉnh âm) và **nhạc khí học** như các lĩnh vực liên quan.

## Thuật ngữ
| Tiếng Việt | Tiếng Anh / Đức | Ghi chú |
|---|---|---|
| âm nhạc học | musicology / Musikwissenschaft | dùng chính thức (tên ngành đào tạo) |
| âm nhạc dân tộc học, dân tộc nhạc học | ethnomusicology | cả hai cách đều có trong văn bản Việt |
| mỹ học âm nhạc | music aesthetics | dùng ở Viện Âm nhạc |
| nhạc khí học | organology | dùng ở Viện Âm nhạc |
| âm luật học | tuning and temperament | dùng ở Viện Âm nhạc |
| lý luận âm nhạc | music theory | dùng trong chương trình đào tạo |
| âm nhạc học lịch sử | historical musicology | *đề xuất của thư viện* |
| âm nhạc học hệ thống | systematic musicology | *đề xuất của thư viện* (chưa thấy dùng chính thức) |
| âm học âm nhạc, tâm lý học âm nhạc, xã hội học âm nhạc | musical acoustics, music psychology, sociology of music | *đề xuất của thư viện* |

## Lộ trình nghiên cứu gợi ý
*(Gợi ý biên soạn của thư viện, không phải chuẩn của ngành.)*
1. Đọc khung: [[am-nhac-hoc-lich-su]] → [[am-nhac-hoc-he-thong]] → [[phuong-phap-nghien-cuu-am-nhac]].
2. Chọn **một** phân ngành gần câu hỏi của mình; đọc bài tổng quan của nó và các bài con.
3. Với mỗi câu hỏi, đọc ít nhất một bài ở nhánh **lịch sử** và một bài ở nhánh **hệ thống** về cùng chủ đề — ví dụ [[hinh-thuc-sonata]] (lý thuyết) cùng [[sonata-the-loai]] (lịch sử thể loại) và [[phan-tich-sonata-k545]] (phân tích).
4. Theo nguồn ở cuối mỗi bài để đi tới tài liệu gốc.
`,
  },
  {
    slug: 'am-nhac-hoc-lich-su',
    title: 'Âm nhạc học lịch sử',
    category: 'musicology',
    aliases: ['historical musicology', 'historische Musikwissenschaft', 'lịch sử âm nhạc học', 'nhánh lịch sử'],
    summary: 'Nhánh nghiên cứu âm nhạc theo thời gian: nguồn và ký âm, thể loại và hình thức theo từng thời kỳ, phong cách, nhạc cụ, thực hành biểu diễn và tiểu sử.',
    wiki: 'Historical_musicology',
    refs: [
      ['Mugglestone (1981) — bản dịch và chú giải bài của Adler (Yearbook for Traditional Music 13)', 'https://www.cambridge.org/core/journals/yearbook-for-traditional-music/article/guido-adlers-the-scope-method-and-aim-of-musicology-1885-an-english-translation-with-an-historicoanalytical-commentary/915683942DDC1C1BF6951154058247F7'],
      ['Nettl — Nettl\'s Elephant (tóm tắt sơ đồ Adler)', 'https://www.perlego.com/book/2382846/nettls-elephant-pdf'],
      ['TRANS — The seminal eighties: a North American perspective of the beginnings of musicology and ethnomusicology', 'https://www.sibetrans.com/trans/article/296/the-seminal-eighties-a-north-american-perspective-of-the-beginnings-of-musicology-and-ethnomusicology'],
      ['Wikipedia — Historical musicology', 'https://en.wikipedia.org/wiki/Historical_musicology'],
    ],
    body: `
**Âm nhạc học lịch sử** là nhánh thứ nhất trong sơ đồ của Guido Adler (xem [[am-nhac-hoc]]). Nó hỏi: một tác phẩm, một thể loại, một phong cách **ra đời khi nào, ở đâu, vì sao, và được ghi lại, biểu diễn ra sao**.

## Các phân ngành theo Adler
Theo các bản tóm tắt sơ đồ năm 1885 (Nettl; bài tổng quan trên tạp chí *TRANS*), nhánh lịch sử gồm:
| Phân ngành (Adler) | Câu hỏi | Trong thư viện |
|---|---|---|
| **Cổ tự học, [[ky-am|ký âm]]** | Bản nhạc xưa được ghi bằng hệ thống nào, đọc thế nào? | [[truong-do]] (lịch sử ký âm trường độ), [[thanh-ca-gregorian]], [[an-ban-urtext]] |
| **Các nhóm hình thức theo lịch sử** | Thể loại và hình thức nào thuộc thời nào? | [[the-loai-am-nhac]], [[hinh-thuc-am-nhac]] |
| **Quy luật nghệ thuật của từng thời kỳ** | Phong cách một thời được xác định bởi những quy luật nào — trong tác phẩm, trong sách lý thuyết đương thời, trong thực hành? | [[cac-thoi-ky]], [[phong-cach-palestrina]], [[luoc-do-galant]], [[phong-cach-dien-tau]] |
| **Lịch sử nhạc cụ** | Nhạc cụ thay đổi thế nào và định hình âm nhạc ra sao? | [[nhac-khi-hoc]], [[lich-su-piano]] |

Các khoa học bổ trợ của nhánh này, theo cùng các bản tóm tắt, gồm lịch sử nói chung cùng **cổ tự học, niên đại học, văn bản học (diplomatics), thư mục học, thư viện và lưu trữ học**.

**Lưu ý:** *danh sách trên lấy từ nguồn thứ cấp; cách diễn đạt nguyên văn của Adler cần đối chiếu bản dịch Mugglestone (1981).*

## Chín phân ngành trong thư viện
Thẻ **Âm nhạc học** chia nhánh lịch sử thành chín phân ngành. Bảng dưới xếp theo trình tự nên học: **công cụ trước, nội dung sau**.
| # | Phân ngành | Câu hỏi chính | Bài mở đầu |
|---|---|---|---|
| I.1 | **Sử học âm nhạc: phương pháp và công cụ** | Ta biết về quá khứ bằng cách nào? | [[lich-su-nganh-am-nhac-hoc]], [[phuong-phap-su-hoc-am-nhac]], [[nguon-tra-cuu-am-nhac-hoc]] |
| I.2 | **Nguồn, ký âm và văn bản** | Đọc nguồn cũ thế nào, bản nào đáng tin? | [[lich-su-ky-am]], [[lich-su-in-an-am-nhac]], [[van-ban-hoc-am-nhac]] |
| I.3 | **Thời kỳ, phong cách, tiểu sử** | Âm nhạc thay đổi ra sao qua các thời? | [[am-nhac-co-dai]], [[cac-thoi-ky]] |
| I.4 | **Lịch sử thể loại** | Thể loại sinh ra và biến đổi thế nào? | [[the-loai-am-nhac]] |
| I.5 | **Thực hành biểu diễn và nghệ sĩ** | Người xưa chơi thế nào? | [[phong-trao-bieu-dien-lich-su]], [[phong-cach-dien-tau]] |
| I.6 | **Đời sống âm nhạc và tiếp nhận** | Ai trả tiền, ai nghe, vì sao thành kinh điển? | [[doi-song-am-nhac-va-thiet-che]], [[lich-su-tiep-nhan-am-nhac]] |
| I.7 | **Nhạc khí học** | Nhạc cụ định hình âm nhạc ra sao? | [[nhac-khi-hoc]], [[lich-su-piano]] |
| I.8 | **Lịch sử lý thuyết và tư tưởng** | Người xưa giải thích âm nhạc thế nào? | [[lich-su-phan-tich-am-nhac]], [[thuyet-ethos-hy-lap]] |
| I.9 | **Lịch sử âm nhạc Việt Nam** | Ta biết gì, bằng chứng cứ nào? | [[lich-su-am-nhac-viet-nam]] |

## Toàn cảnh thời gian
::timeline 500-1400=Trung_cổ 1400-1600=Phục_hưng 1600-1750=Baroque 1750-1820=Cổ_điển 1820-1900=Lãng_mạn 1900-2000=Thế_kỷ_20 1026=Khuông_nhạc_Guido 1501=Nhạc_in_Petrucci 1637=Opera_công_cộng 1795=Nhạc_viện_Paris 1829=Bach_hồi_sinh 1885=Adler 1953=Phong_trào_HIP | Các thời kỳ (ranh giới là quy ước — [[cac-thoi-ky]]) và một số mốc của ngành

## Lộ trình học nhánh lịch sử
*(Đề xuất của thư viện; mỗi bước dựa trên bước trước.)*
1. **Ngành và phương pháp:** [[lich-su-nganh-am-nhac-hoc]] → [[phuong-phap-su-hoc-am-nhac]] → [[nguon-tra-cuu-am-nhac-hoc]].
2. **Đọc nguồn:** [[lich-su-ky-am]] → [[lich-su-in-an-am-nhac]] → [[van-ban-hoc-am-nhac]] → [[an-ban-urtext]].
3. **Câu chuyện theo thời gian:** [[am-nhac-co-dai]] → [[cac-thoi-ky]] và các trang thời kỳ ([[thoi-ky-trung-co]], [[thoi-ky-phuc-hung]], [[thoi-ky-baroque]], [[thoi-ky-co-dien]], [[thoi-ky-lang-man]], [[thoi-ky-the-ky-20]]) → [[the-loai-am-nhac]].
4. **Âm nhạc trong xã hội:** [[doi-song-am-nhac-va-thiet-che]] → [[lich-su-tiep-nhan-am-nhac]].
5. **Âm thanh của quá khứ:** [[nhac-khi-hoc]] → [[phong-trao-bieu-dien-lich-su]] → [[phong-cach-dien-tau]] → [[lich-su-thu-am]].
6. **Tư tưởng:** [[lich-su-phan-tich-am-nhac]], [[tranh-luan-rameau-rousseau]], [[triet-hoc-lang-man-ve-am-nhac]].
7. **Việt Nam:** [[lich-su-am-nhac-viet-nam]] → [[am-nhac-truyen-thong-viet-nam]] → [[tan-nhac-viet-nam]] → [[piano-viet-nam]].

## Cách làm việc của nhà âm nhạc học lịch sử
*(Tóm lược biên soạn của thư viện; chi tiết ở [[phuong-phap-su-hoc-am-nhac]].)*
1. **Nguồn trước, kết luận sau.** Bản thảo, bản in đầu, thư từ, sổ sách nhà hát là bằng chứng; giai thoại là giả thuyết cần kiểm tra.
2. **Đặt tác phẩm vào bối cảnh:** ai đặt hàng, chơi ở đâu, cho ai nghe, bằng nhạc cụ nào.
3. **So sánh với lý thuyết đương thời,** không áp quy tắc đời sau lên đời trước — ví dụ đọc nhạc thế kỷ 16 qua [[phong-cach-palestrina]] chứ không qua sách [[luat-hoa-am-bon-be|hoà âm bốn bè]] thế kỷ 19.
4. **Phân biệt chắc chắn và phỏng đoán** khi viết — đúng như quy tắc của thư viện này.

## Liên hệ với nhánh hệ thống
Hai nhánh bổ sung cho nhau: một câu hỏi như "vì sao nhạc Baroque dùng [[bass-so]]?" cần lịch sử (thực hành thời đó), lý thuyết (cách đọc bass số) và cả âm học, nhận thức. Xem [[am-nhac-hoc-he-thong]].
`,
  },
  {
    slug: 'am-nhac-hoc-he-thong',
    title: 'Âm nhạc học hệ thống',
    category: 'musicology',
    aliases: ['systematic musicology', 'systematische Musikwissenschaft', 'hệ thống âm nhạc học', 'nhánh hệ thống', 'Parncutt'],
    summary: 'Nhánh nghiên cứu những gì chung của âm nhạc, không gắn với một thời điểm: âm học, tâm lý, sinh lý, xã hội, triết học, lý thuyết, sư phạm, tính toán. Có hai hướng: khoa học thực nghiệm và khoa học nhân văn (Parncutt 2007).',
    wiki: 'Systematic_musicology',
    refs: [
      ['Parncutt (2007) — Systematic musicology and the history and future of Western musical scholarship, Journal of Interdisciplinary Music Studies 1(1): 1–32 (PDF)', 'https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/parncutt_richard/Pdfs/Pa07_JIMS.pdf'],
      ['Đại học Graz — What is systematic musicology?', 'https://systematische-musikwissenschaft.uni-graz.at/en/about/what-is-sysmus/'],
      ['Đại học Graz — History of systematic musicology at Graz', 'https://systematische-musikwissenschaft.uni-graz.at/en/about/history-of-sysmusgraz/'],
      ['Peter Lang — Schneider (ed.), Systematic and Comparative Musicology: Concepts, Methods, Findings (2008)', 'https://www.peterlang.com/document/1105356'],
      ['MIT Press — Leman, Embodied Music Cognition and Mediation Technology', 'https://mitpressbookstore.mit.edu/book/9780262122931'],
      ['Đại học Köln — Uwe Seifert', 'https://musikwissenschaft.phil-fak.uni-koeln.de/mitarbeiter-innen/emeriti-professoren-a-d/uwe-seifert'],
      ['SAGE — Systematic musicology (Music in the Social and Behavioral Sciences)', 'https://sk.sagepub.com/ency/edvol/embed/music-in-the-social-and-behavioral-sciences/chpt/systematic-musicology'],
      ['Wikipedia — Systematic musicology', 'https://en.wikipedia.org/wiki/Systematic_musicology'],
    ],
    body: `
**Âm nhạc học hệ thống** (*systematische Musikwissenschaft*) là nhánh thứ hai trong sơ đồ của Adler (xem [[am-nhac-hoc]]). Richard Parncutt (2007) định nghĩa: đây là "một thuật ngữ bao trùm, dùng chủ yếu ở Trung Âu, cho các phân ngành của âm nhạc học **chủ yếu quan tâm tới âm nhạc nói chung**" — thay vì một tác phẩm, một thời kỳ cụ thể. Một mục từ bách khoa của SAGE mô tả ngành này tiếp cận âm nhạc "từ góc nhìn tổng quát, gồm cả nền tảng sinh học, âm học, tâm lý, văn hoá và xã hội".

## Sơ đồ gốc của Adler (1885)
Theo các bản tóm tắt, nhánh hệ thống của Adler có **bốn phân ngành**:
1. Khảo cứu các quy luật cao nhất của **hoà âm, [[tiet-tau|tiết tấu]] và [[giai-dieu|giai điệu]]** → ngày nay là [[nhac-ly-co-ban|lý thuyết âm nhạc]].
2. **Mỹ học âm nhạc** → [[triet-hoc-am-nhac]].
3. **Sư phạm và giáo học pháp** → [[lo-trinh-luyen-tai-su-pham]], [[su-pham-piano]].
4. **"Musikologie"** — nghiên cứu so sánh vì mục đích dân tộc học (âm nhạc học so sánh), về sau ở Mỹ đổi tên thành **dân tộc nhạc học** → [[dan-toc-nhac-hoc]].

Các khoa học bổ trợ được kể tên trong các bản tóm tắt gồm **âm học, sinh lý học, tâm lý học, ngữ pháp, thi luật (metrics), mỹ học**. Phần lớn chúng về sau trở thành các phân ngành độc lập.

**Lưu ý:** *cách diễn đạt nguyên văn từng mục của Adler cần đối chiếu bản dịch Mugglestone (1981).*

## Định nghĩa hiện đại: hai hướng (Parncutt 2007)
| Hướng | Đặc điểm | Các ngành dựa vào |
|---|---|---|
| **Âm nhạc học hệ thống khoa học** (*scientific*) | Chủ yếu **thực nghiệm, dựa trên dữ liệu** | Tâm lý học và xã hội học thực nghiệm, âm học, sinh lý học, khoa học thần kinh, khoa học nhận thức, máy tính và công nghệ |
| **Âm nhạc học hệ thống nhân văn** (*humanities*, "cultural musicology") | Diễn giải, lý thuyết | Mỹ học triết học, xã hội học lý thuyết, ký hiệu học, thông diễn học |

Parncutt cũng nhận xét rằng âm nhạc học hệ thống **kém thống nhất** hơn [[am-nhac-hoc-lich-su|âm nhạc học lịch sử]] và dân tộc nhạc học: nó là tập hợp nhiều ngành có phương pháp rất khác nhau.

## Các phân ngành ngày nay
Trung tâm Âm nhạc học Hệ thống của Đại học Graz (Áo) liệt kê năm phân ngành chính: **âm học âm nhạc; mỹ học – triết học – xã hội học âm nhạc; khoa học thông tin âm nhạc; sinh lý học âm nhạc; tâm lý học âm nhạc**. Wikipedia kể thêm **khoa học thần kinh nhận thức về âm nhạc**. Thư viện này tổ chức như sau:
| Phân ngành | Bài tổng quan | Câu hỏi tiêu biểu |
|---|---|---|
| Âm học âm nhạc | [[am-hoc-co-ban]] | Vì sao một nốt có [[cao-do|cao độ]] và [[am-sac|âm sắc]]? |
| Tâm lý học, nhận thức âm nhạc | [[tam-ly-hoc-am-nhac]] | Ta nghe, chờ đợi, xúc động thế nào? |
| Sinh lý học, khoa học biểu diễn | [[khoa-hoc-bieu-dien]] | Cơ thể tạo ra âm nhạc ra sao? |
| Lý thuyết âm nhạc | [[nhac-ly-co-ban]], [[giao-trinh-hoa-am]] | Âm thanh được tổ chức theo hệ thống nào? |
| Phân tích | [[phuong-phap-phan-tich-tac-pham]] | Tác phẩm này vận hành thế nào? |
| Mỹ học, triết học | [[triet-hoc-am-nhac]] | [[dinh-nghia-am-nhac|Âm nhạc là gì]], có nghĩa gì? |
| Xã hội học, dân tộc nhạc học | [[xa-hoi-hoc-am-nhac]], [[dan-toc-nhac-hoc]] | Âm nhạc làm gì trong một cộng đồng? |
| Sư phạm | [[lo-trinh-luyen-tai-su-pham]] | Kỹ năng âm nhạc hình thành thế nào? |
| Tính toán | [[am-nhac-hoc-tinh-toan]] | Một lý thuyết có đứng vững trên hàng nghìn tác phẩm? |

Ở Mỹ, **lý thuyết âm nhạc** thường được coi là một ngành riêng (Hội Lý thuyết Âm nhạc — Society for Music Theory — thành lập năm 1977), trong khi Adler xếp nó vào nhánh hệ thống.

## Mười phân ngành trong thư viện và lộ trình đọc
Thẻ **Âm nhạc học** chia nhánh hệ thống thành mười phân ngành (II.1 – II.10). Lộ trình dưới đây đi từ **vật lý** đến **con người** rồi đến **xã hội**; mỗi bước dùng kiến thức của bước trước. *(Đề xuất của thư viện.)*
1. **Âm thanh:** [[am-hoc-co-ban]] → [[chuoi-boi-am]] → [[am-sac]] → [[am-hoc-nhac-cu]] → [[luat-binh-quan]].
2. **Tai và não:** [[cam-nhan-am-thanh]] → [[phan-luong-thinh-giac]] → [[than-kinh-hoc-am-nhac]].
3. **Nhận thức:** [[tam-ly-hoc-am-nhac]] → [[dieu-tinh]] → [[tim-giong-bang-may]] → [[ky-vong-am-nhac]] → [[cam-xuc-am-nhac]] → [[am-nhac-va-ngon-ngu]].
4. **Phát triển và học tập:** [[tam-ly-hoc-phat-trien-am-nhac]] → [[hoc-nhac-va-tri-tue]] → [[giang-day-hieu-qua]] → [[phuong-phap-luyen-tap]].
5. **Cơ thể và biểu diễn:** [[khoa-hoc-bieu-dien]] → [[hoi-hop-bieu-dien]] → [[am-nhac-tri-lieu]].
6. **Nguồn gốc:** [[am-nhac-hoc-tien-hoa]].
7. **Cấu trúc:** [[nhac-ly-co-ban]] → [[giao-trinh-hoa-am]] → [[phuong-phap-phan-tich-tac-pham]].
8. **Ý nghĩa và xã hội:** [[triet-hoc-am-nhac]] → [[xa-hoi-hoc-am-nhac]] → [[dan-toc-nhac-hoc]].
9. **Công cụ:** [[phuong-phap-nghien-cuu-am-nhac]] → [[thiet-ke-nghien-cuu-thuc-nghiem]] → [[am-nhac-hoc-tinh-toan]].

## Hướng tiếp cận "thân thể" và nhận thức
- **Marc Leman** (Đại học Ghent) trong *Embodied Music Cognition and Mediation Technology* (MIT Press) cho rằng **cơ thể là cầu nối** giữa năng lượng âm thanh vật lý và trải nghiệm tinh thần — nền tảng của [[khoa-hoc-bieu-dien]] và của việc nghiên cứu chuyển động khi nghe nhạc ([[cam-nhan-phach]]).
- **Uwe Seifert** (Đại học Köln) từ đầu thập niên 1990 đề xuất **khoa học nhận thức** như một hệ hình nghiên cứu mới cho âm nhạc học.
- Tuyển tập *Systematic and Comparative Musicology* (Albrecht Schneider biên tập, Peter Lang, 2008) bàn về âm nhạc học hệ thống "như một cách tiếp cận liên ngành và một môn học đại học".

## Các mốc chính
| Năm | Mốc | Bài liên quan |
|---|---|---|
| 1854 | Hanslick, *Vom Musikalisch-Schönen* | [[am-nhac-tuyet-doi]] |
| 1863 | Helmholtz, *Die Lehre von den Tonempfindungen* | [[am-hoc-co-ban]], [[thuan-nghich]] |
| 1883 / 1890 | Stumpf, *Tonpsychologie* (hai tập) | [[tam-ly-hoc-am-nhac]] |
| 1885 | Adler, sơ đồ của ngành | [[am-nhac-hoc]] |
| 1914 | Hornbostel và Sachs, hệ thống phân loại nhạc cụ | [[nhac-khi-hoc]] |
| 1919 | Seashore, *The Psychology of Musical Talent* | [[tam-ly-hoc-am-nhac]] |
| 1921 | Weber, nghiên cứu xã hội học về âm nhạc (in sau khi mất) | [[xa-hoi-hoc-am-nhac]] |
| 1956 | Meyer, *Emotion and Meaning in Music* | [[ky-vong-am-nhac]] |
| 1962 | Adorno, *Einleitung in die Musiksoziologie* | [[adorno-va-am-nhac]] |
| 1964 | Merriam, *The Anthropology of Music* | [[dan-toc-nhac-hoc]] |
| 1983 | Lerdahl và Jackendoff, *A Generative Theory of Tonal Music* | [[sieu-nhip]] |
| 1990 | Krumhansl, *Cognitive Foundations of Musical Pitch* | [[dieu-tinh]] |
| 2000 | Hội nghị ISMIR đầu tiên | [[am-nhac-hoc-tinh-toan]] |
| 2006 | Huron, *Sweet Anticipation* | [[ky-vong-am-nhac]] |
| 2007 | Parncutt, định nghĩa hai hướng | bài này |
`,
  },
  {
    slug: 'phuong-phap-nghien-cuu-am-nhac',
    title: 'Phương pháp nghiên cứu âm nhạc học',
    category: 'musicology',
    aliases: ['phương pháp nghiên cứu âm nhạc', 'research methods in musicology', 'empirical musicology', 'âm nhạc học thực nghiệm', 'tạp chí âm nhạc học'],
    summary: 'Một câu hỏi về âm nhạc được trả lời bằng nhiều loại phương pháp: nguồn tư liệu, phân tích tác phẩm, thực nghiệm, kho dữ liệu và mô hình máy tính, khảo sát thực địa, lập luận triết học. Bài này so sánh chúng và giới thiệu các tạp chí, hội chuyên ngành.',
    wiki: 'Empirical_musicology',
    refs: [
      ['Parncutt (2007) — Systematic musicology and the history and future of Western musical scholarship (PDF)', 'https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/parncutt_richard/Pdfs/Pa07_JIMS.pdf'],
      ['Empirical Musicology Review — Ohio State University Libraries', 'https://kb.osu.edu/'],
      ['ESCOM — The Society', 'https://www.escomsociety.org/society-1'],
      ['ESCOM — Publications (Musicae Scientiae)', 'https://www.escomsociety.org/publications'],
      ['SEMPRE — About', 'https://sempre.org.uk/about'],
      ['ICMPC — History', 'https://icmpc.org/icmpc_history.html'],
      ['Wikipedia — Music Perception', 'https://en.wikipedia.org/wiki/Music_Perception'],
      ['Wikipedia — Society for Music Theory', 'https://en.wikipedia.org/wiki/Society_for_Music_Theory'],
      ['Society for Ethnomusicology — History and founding', 'https://www.ethnomusicology.org/page/History_Founding'],
      ['Wikipedia — International Society for Music Information Retrieval', 'https://en.wikipedia.org/wiki/International_Society_for_Music_Information_Retrieval'],
    ],
    body: `
Một nghiên cứu âm nhạc học bắt đầu bằng **một câu hỏi** và chọn **phương pháp hợp với câu hỏi đó**. [[am-nhac-hoc-he-thong|Parncutt]] (2007) phân biệt hai hướng lớn: **thực nghiệm, dựa trên dữ liệu** và **nhân văn** (diễn giải, triết học, ký hiệu học). Trong thực tế, các phương pháp có thể xếp thành sáu nhóm — đây là cách sắp xếp của thư viện để dễ học, không phải phân loại chuẩn của ngành.

## Sáu nhóm phương pháp
| Phương pháp | Dữ liệu | Câu hỏi hợp | Ví dụ trong thư viện |
|---|---|---|---|
| **Nguồn tư liệu** (lịch sử) | Bản thảo, bản in, thư từ, bản thu | Tác phẩm được viết, sửa, biểu diễn thế nào? | [[an-ban-urtext]], [[lich-su-thu-am]] |
| **Phân tích tác phẩm** | Bản nhạc | Tác phẩm vận hành ra sao? | [[phuong-phap-phan-tich-tac-pham]], [[phan-tich-schenker]] |
| **Thực nghiệm** | Phản ứng của người nghe, người chơi trong điều kiện kiểm soát | Ta cảm nhận, học, xúc động thế nào? | [[ky-vong-am-nhac]], [[cam-xuc-am-nhac]], [[giang-day-hieu-qua]] |
| **Kho dữ liệu và mô hình** | Hàng trăm đến hàng nghìn tác phẩm đã mã hoá; thuật toán | Một khẳng định có đúng trên diện rộng? | [[am-nhac-hoc-tinh-toan]], [[hoa-am-pop]] |
| **Thực địa** (dân tộc học) | Quan sát, phỏng vấn, ghi âm trong cộng đồng | Âm nhạc có nghĩa gì với người làm ra nó? | [[dan-toc-nhac-hoc]], [[am-nhac-truyen-thong-viet-nam]] |
| **Lập luận triết học** | Khái niệm, ví dụ, phản ví dụ | [[dinh-nghia-am-nhac|Âm nhạc là gì?]] Thế nào là hay? | [[triet-hoc-am-nhac]] |

## Thực nghiệm và diễn giải: một cuộc tranh luận
Số đầu tiên của tạp chí *Empirical Musicology Review* (2006) đăng bài của Henkjan Honing về **quan sát, [[hinh-thuc-am-nhac|hình thức]] hoá và phương pháp thực nghiệm trong âm nhạc học**, kèm bình luận của Nicholas Cook và Eric Clarke, và bài của Huovinen về **các dạng chủ nghĩa kinh nghiệm trong âm nhạc học**. Câu hỏi chung: khi nào một nhận định về âm nhạc cần kiểm chứng bằng dữ liệu, và khi nào diễn giải là đủ?

## Quy trình một nghiên cứu nhỏ
*(Khung gợi ý của thư viện, dùng được cho tiểu luận hay đề tài lớp.)*
1. **Câu hỏi:** hẹp và trả lời được. "[[frederic-chopin|Chopin]] dùng [[hop-am-napoli|hợp âm Napoli]] thế nào trong 24 Prelude?" tốt hơn "Hoà âm của Chopin".
2. **Tổng quan tài liệu:** đọc bài tổng quan của phân ngành ([[am-nhac-hoc]]) và theo nguồn ở cuối bài.
3. **Chọn phương pháp** theo bảng trên; nhiều câu hỏi cần hai phương pháp (ví dụ phân tích cộng thực nghiệm nghe).
4. **Thu dữ liệu** và ghi lại cách thu, để người khác lặp lại được.
5. **Diễn giải,** tách rõ điều dữ liệu cho thấy và điều mình suy đoán.
6. **Trích nguồn** đầy đủ.

## Tạp chí và hội chuyên ngành
| Năm | Tạp chí / hội | Lĩnh vực |
|---|---|---|
| 1955 | Society for Ethnomusicology (lập ngày 18/11/1955 tại Boston) | Dân tộc nhạc học |
| 1972 | SEMPRE (tiền thân là Hội Nghiên cứu Tâm lý học Âm nhạc và Giáo dục Âm nhạc) | Tâm lý, giáo dục |
| 1972 | *Interface*, sau đổi tên thành *Journal of New Music Research* | Tính toán, hệ thống |
| 1973 | *Psychology of Music* (tạp chí của SEMPRE) | Tâm lý |
| 1977 | Society for Music Theory | Lý thuyết |
| 1983 | *Music Perception* (Diana Deutsch sáng lập) | Tri giác, nhận thức |
| 1989 | ICMPC lần thứ nhất, Kyoto | Tri giác, nhận thức |
| 1991 | ESCOM, hội nghị đầu tiên tại Trieste | Nhận thức (châu Âu) |
| 1997 | *Musicae Scientiae* (tạp chí của ESCOM) | Nhận thức |
| 2000 | ISMIR lần thứ nhất | Truy xuất thông tin âm nhạc |
| 2006 | *Empirical Musicology Review* (Ohio State) | Âm nhạc học thực nghiệm |
| 2007 | *Journal of Interdisciplinary Music Studies* | Liên ngành |
`,
  },
  {
    slug: 'tam-ly-hoc-am-nhac',
    title: 'Tâm lý học âm nhạc: tổng quan ngành',
    category: 'musicology',
    also: ['listening'],
    aliases: ['tâm lý học âm nhạc', 'music psychology', 'psychology of music', 'nhận thức âm nhạc', 'music cognition', 'tâm lý học âm nhạc tổng quan', 'Stumpf', 'Seashore', 'tâm lý âm học ngành'],
    summary: 'Tâm lý học âm nhạc nghiên cứu bằng thực nghiệm cách con người cảm nhận, ghi nhớ, hiểu và phản ứng với âm nhạc — từ Stumpf và Seashore đến Meyer, Lerdahl – Jackendoff, Krumhansl và Huron.',
    wiki: 'Music_psychology',
    refs: [
      ['Wikipedia — Music psychology', 'https://en.wikipedia.org/wiki/Music_psychology'],
      ['Wikipedia — Carl Stumpf', 'https://en.wikipedia.org/wiki/Carl_Stumpf'],
      ['Wikipedia — Carl Seashore', 'https://en.wikipedia.org/wiki/Carl_Seashore'],
      ['Wikipedia — Generative theory of tonal music', 'https://en.wikipedia.org/wiki/Generative_theory_of_tonal_music'],
      ['Library record — Krumhansl, Cognitive Foundations of Musical Pitch (OUP, 1990)', 'https://catalog.flo.org/Record/3142901c-922e-4cbe-910b-b30717a1593f/Description'],
      ['SFU Handbook for Acoustic Ecology — Equal loudness contours', 'https://www.sfu.ca/sonic-studio-webdav/cmns/Handbook5/handbook/Equal_Loudness_Contours.html'],
      ['Wikipedia — Psychoacoustics', 'https://en.wikipedia.org/wiki/Psychoacoustics'],
    ],
    body: `
**Tâm lý học âm nhạc** (*music psychology*, gần với **nhận thức âm nhạc** — *music cognition*) là phân ngành của [[am-nhac-hoc-he-thong]] nghiên cứu **con người nghe, nhớ, hiểu, chờ đợi, xúc động và học âm nhạc** như thế nào. Phương pháp chính là **thực nghiệm**: đo phản ứng của người nghe, người chơi trong điều kiện kiểm soát (xem [[phuong-phap-nghien-cuu-am-nhac]]).

## Các mốc chính
| Năm | Tác giả, công trình | Đóng góp | Đọc thêm |
|---|---|---|---|
| 1863 | Helmholtz, *Die Lehre von den Tonempfindungen* | Nền sinh lý học của cảm giác âm thanh | [[am-hoc-co-ban]], [[thuan-nghich]] |
| 1883 / 1890 | Carl Stumpf, *Tonpsychologie* (hai tập; dự định bốn tập) | Tâm lý học về âm thanh như một ngành riêng | [[cam-nhan-am-thanh]] |
| 1919 | Carl Seashore, *The Psychology of Musical Talent*; bộ trắc nghiệm năng khiếu cùng năm | Đo [[cao-do|cao độ]], [[cuong-do|cường độ]], thời gian, [[tiet-tau|tiết tấu]], âm sắc, độ thuận | [[cao-do-tuyet-doi]] |
| 1933 | Fletcher và Munson (Bell Labs) | Đường cong cảm nhận độ to bằng nhau | [[cam-nhan-am-thanh]] |
| 1956 | Leonard B. Meyer, *Emotion and Meaning in Music* | Cảm xúc nảy sinh từ cách tác giả xử lý **kỳ vọng** | [[ky-vong-am-nhac]] |
| 1983 | Lerdahl và Jackendoff, *A Generative Theory of Tonal Music* | Mô hình cách người nghe có kinh nghiệm suy ra cấu trúc (nhóm, phách, giảm lược) | [[sieu-nhip]], [[cau-nhac]] |
| 1990 | Carol Krumhansl, *Cognitive Foundations of Musical Pitch* | Cảm nhận giọng và thứ bậc cao độ | [[dieu-tinh]], [[bac-am-giai]] |
| 2006 | David Huron, *Sweet Anticipation* | Lý thuyết ITPRA: tưởng tượng, căng, dự đoán, phản ứng, đánh giá | [[ky-vong-am-nhac]] |

::wiki Carl_Stumpf | Carl Stumpf (1848–1936), tác giả *Tonpsychologie*

## Các mảng nghiên cứu và bài tương ứng
| Mảng | Câu hỏi | Bài |
|---|---|---|
| **Tâm lý âm học** | Độ to, cao độ, âm sắc được cảm nhận ra sao? | [[cam-nhan-am-thanh]], [[am-sac]] |
| **Tổ chức thính giác** | Tai tách các bè, các luồng thế nào? | [[phan-luong-thinh-giac]] |
| **Cao độ và giọng** | Vì sao có cảm giác "về chủ âm"? | [[dieu-tinh]], [[cao-do-tuyet-doi]] |
| **Thời gian** | Ta bắt phách và nhịp ra sao? | [[cam-nhan-phach]], [[dao-phach]] |
| **Kỳ vọng và cảm xúc** | Vì sao âm nhạc gây xúc động? | [[ky-vong-am-nhac]], [[cam-xuc-am-nhac]] |
| **Học tập và chuyên môn** | Luyện tập, ghi nhớ, phản hồi thế nào cho hiệu quả? | [[phuong-phap-luyen-tap]], [[hoc-thuoc-bai]], [[tap-trong-dau]], [[giang-day-hieu-qua]] |
| **Sáng tạo** | Não làm gì khi [[ngau-hung-piano|ngẫu hứng]]? | [[khoa-hoc-ngau-hung]] |
| **Biểu diễn** | Lo âu sân khấu và cách xử lý | [[hoi-hop-bieu-dien]], [[khoa-hoc-bieu-dien]] |

## Tạp chí và hội
*Psychology of Music* (1973, của SEMPRE), *Music Perception* (1983), *Musicae Scientiae* (1997, của ESCOM); hội nghị quốc tế ICMPC (lần đầu ở Kyoto, 1989). Chi tiết ở [[phuong-phap-nghien-cuu-am-nhac]].

## Lộ trình đọc trong thư viện
[[lo-trinh-nghe-cam-thu]] là lộ trình thực hành; đọc theo thứ tự: [[am-hoc-co-ban]] → [[cam-nhan-am-thanh]] → [[phan-luong-thinh-giac]] → [[ky-vong-am-nhac]] → [[cam-xuc-am-nhac]] → [[nghe-nhac-chu-dong]].
`,
  },
  {
    slug: 'khoa-hoc-bieu-dien',
    title: 'Khoa học biểu diễn',
    category: 'musicology',
    also: ['technique'],
    aliases: ['performance science', 'khoa học biểu diễn âm nhạc', 'sinh lý học âm nhạc', 'music physiology', 'embodied music cognition', 'nhận thức thân thể'],
    summary: 'Khoa học biểu diễn nghiên cứu người biểu diễn bằng phương pháp khoa học: cơ thể và sức khoẻ, kỹ năng và luyện tập, tâm lý sân khấu, biểu cảm. Bài này nối phần kỹ thuật piano của thư viện với ngành nghiên cứu tương ứng.',
    wiki: 'Music_performance',
    refs: [
      ['Centre for Performance Science — Aaron Williamon', 'https://performancescience.ac.uk/people/williamon/'],
      ['International Symposium on Performance Science 2007', 'https://performancescience.org/conference/isps-2007/'],
      ['MIT Press — Leman, Embodied Music Cognition and Mediation Technology', 'https://mitpressbookstore.mit.edu/book/9780262122931'],
      ['Đại học Graz — What is systematic musicology?', 'https://systematische-musikwissenschaft.uni-graz.at/en/about/what-is-sysmus/'],
      ['Britannica — Music therapy', 'https://www.britannica.com/topic/music-therapy'],
    ],
    body: `
**Khoa học biểu diễn** (*performance science*) nghiên cứu **người biểu diễn** — cơ thể, kỹ năng, tâm lý, cách tạo biểu cảm — bằng phương pháp khoa học. Nó nối nhiều phân ngành của [[am-nhac-hoc-he-thong]]: **sinh lý học âm nhạc** (một trong năm phân ngành mà Đại học Graz liệt kê), [[tam-ly-hoc-am-nhac|tâm lý học]], [[am-hoc-co-ban|âm học]] và [[phan-tich-va-bieu-dien|phân tích]].

## Các mốc
- **2000:** Trung tâm Khoa học Biểu diễn (*Centre for Performance Science*) được lập tại Royal College of Music (London), do Aaron Williamon điều hành; nay là liên kết giữa RCM và Imperial College London.
- **2007:** Hội nghị chuyên đề quốc tế đầu tiên về khoa học biểu diễn (ISPS) họp tại Casa da Música, Porto (22–23/11/2007).
- **Marc Leman**, *Embodied Music Cognition and Mediation Technology* (MIT Press): cơ thể là cầu nối giữa âm thanh vật lý và trải nghiệm tinh thần — một nền lý thuyết cho việc nghiên cứu chuyển động của người chơi và người nghe.

## Các mảng và bài tương ứng
| Mảng | Câu hỏi | Bài |
|---|---|---|
| **Cơ thể và sức khoẻ** | Tư thế, chuyển động nào hiệu quả và an toàn? | [[tu-the]], [[suc-khoe-nguoi-choi-dan]], [[ban-tay-nho]], [[tremolo-xoay-cang-tay]] |
| **Tạo âm** | Cách chạm phím ảnh hưởng âm thanh thế nào? | [[ky-thuat-cham-phim]], [[ban-dap]], [[am-sac]] |
| **Kỹ năng và luyện tập** | Luyện thế nào cho nhanh và bền? | [[phuong-phap-luyen-tap]], [[kiem-soat-toc-do]], [[tap-trong-dau]], [[hoc-thuoc-bai]], [[thi-tau]] |
| **Tâm lý biểu diễn** | Lo âu sân khấu đến từ đâu, xử lý ra sao? | [[hoi-hop-bieu-dien]] |
| **Biểu cảm** | Người chơi dùng thời gian, [[cuong-do|cường độ]], cách nối thế nào? | [[dien-tau]], [[rubato]], [[dien-dat-cau-nhac]], [[lam-noi-giai-dieu]] |
| **Phân tích và biểu diễn** | Hiểu cấu trúc có giúp chơi hay hơn? | [[phan-tich-va-bieu-dien]], [[so-sanh-ban-thu]] |
| **Lịch sử quan niệm** | Các trường phái kỹ thuật nghĩ gì về cơ thể? | [[lich-su-ky-thuat-piano]], [[neuhaus-nghe-thuat-choi-piano]] |

## Ngành ứng dụng lân cận: âm nhạc trị liệu
Âm nhạc trị liệu dùng âm nhạc trong chăm sóc sức khoẻ. Theo Britannica, ở Mỹ, Hiệp hội Âm nhạc Trị liệu Quốc gia (*National Association for Music Therapy*) thành lập năm 1950; năm 1998 nó hợp nhất với một hiệp hội khác thành *American Music Therapy Association*. Chi tiết về định nghĩa và bằng chứng: [[am-nhac-tri-lieu]].

## Cách đọc
Phần thực hành ở [[ky-thuat-piano]]; bài này cho biết **mỗi kỹ năng ấy được nghiên cứu ở đâu**, để khi dạy có thể phân biệt điều đã có bằng chứng với kinh nghiệm truyền miệng (xem [[giang-day-hieu-qua]]).
`,
  },
  {
    slug: 'dan-toc-nhac-hoc',
    title: 'Dân tộc nhạc học',
    category: 'musicology',
    also: ['modern'],
    aliases: ['dân tộc nhạc học', 'âm nhạc dân tộc học', 'ethnomusicology', 'âm nhạc học so sánh', 'comparative musicology', 'vergleichende Musikwissenschaft', 'Merriam', 'Jaap Kunst'],
    summary: 'Dân tộc nhạc học nghiên cứu âm nhạc trong văn hoá của nó, thường bằng khảo sát thực địa. Ngành bắt nguồn từ "âm nhạc học so sánh" trong sơ đồ của Adler; tên ethno-musicology xuất hiện năm 1950 (Jaap Kunst), Hội Dân tộc nhạc học thành lập năm 1955.',
    wiki: 'Ethnomusicology',
    refs: [
      ['Wikipedia — Ethnomusicology', 'https://en.wikipedia.org/wiki/Ethnomusicology'],
      ['Society for Ethnomusicology — History and founding', 'https://www.ethnomusicology.org/page/History_Founding'],
      ['Library record — Merriam, The Anthropology of Music (Northwestern University Press, 1964)', 'https://lib.ecu.edu/catalog-preview/catalog/36926'],
      ['Lukaniuk (2010) — on the origin of the term ethnomusicology, Folklorica', 'https://journals.ku.edu/folklorica/article/view/4028'],
      ['Tạp chí Giáo dục Nghệ thuật — Nghiên cứu ca trù dưới góc nhìn âm nhạc dân tộc học', 'https://vjol.info.vn/tcgiaoducnghethuat/article/view/79329'],
      ['Giáo dục Việt Nam — Âm nhạc học: kén người học, đầu vào khó', 'https://giaoduc.net.vn/am-nhac-hoc-ken-nguoi-hoc-do-dau-vao-kho-co-hoi-lam-dung-nganh-dao-tao-it-post248720.gd'],
    ],
    body: `
**Dân tộc nhạc học** (còn gọi **âm nhạc dân tộc học**; *ethnomusicology*) nghiên cứu **âm nhạc trong bối cảnh văn hoá và xã hội của nó** — mọi truyền thống, không chỉ âm nhạc nghệ thuật phương Tây. Phương pháp đặc trưng là **khảo sát thực địa**: sống cùng, quan sát, phỏng vấn, ghi âm trong cộng đồng (xem [[phuong-phap-nghien-cuu-am-nhac]]).

## Từ "âm nhạc học so sánh" đến dân tộc nhạc học
- **1885:** trong sơ đồ của Adler, *Musikologie* — nghiên cứu so sánh vì mục đích dân tộc học — là một trong bốn phân ngành của [[am-nhac-hoc-he-thong|nhánh hệ thống]].
- **1914:** Erich von Hornbostel và Curt Sachs công bố hệ thống phân loại nhạc cụ dùng cho mọi nền văn hoá — xem [[nhac-khi-hoc]].
- **1950:** chữ **"ethno-musicology"** (có gạch nối) xuất hiện trong phụ đề cuốn *Musicologica* của Jaap Kunst; bản in lần hai (1955) lấy tên *Ethno-musicology*. Một ý kiến thiểu số (Lukaniuk, 2010) cho rằng Klyment Kvitka đã dùng thuật ngữ này từ 1928.
- **1955:** Hội Dân tộc nhạc học (*Society for Ethnomusicology*) được lập ngày 18/11/1955 tại Boston.
- **1964:** Alan P. Merriam, *The Anthropology of Music* (Northwestern University Press) — đặt nền cho cách nhìn âm nhạc như một hành vi văn hoá.

## Dân tộc nhạc học ở Việt Nam
Thuật ngữ "âm nhạc dân tộc học" xuất hiện trong chương trình [[am-nhac-hoc|Âm nhạc học]] của Nhạc viện TP. Hồ Chí Minh và trong các bài nghiên cứu, ví dụ *Nghiên cứu ca trù dưới góc nhìn âm nhạc dân tộc học* (Tạp chí Giáo dục Nghệ thuật). Trong thư viện:
- [[am-nhac-truyen-thong-viet-nam]] — [[am-giai|thang âm]], [[dieu-thuc|điệu thức]] và nhạc cụ truyền thống.
- [[am-giai-ngu-cung]] — ngũ cung trong nhiều nền văn hoá.
- [[tan-nhac-viet-nam]], [[piano-viet-nam]], [[dem-dieu-viet-nam]] — âm nhạc Việt [[thoi-ky-the-ky-20|thế kỷ 20]] và đời sống [[dem-hat-piano|đệm hát]].

## Câu hỏi của ngành
1. Âm nhạc **có nghĩa gì** với cộng đồng làm ra nó — nghi lễ, lao động, giải trí, bản sắc?
2. Một truyền thống được **truyền dạy** ra sao (truyền khẩu, [[ky-am|ký âm]], thầy – trò)? So sánh với [[phuong-phap-giao-duc-am-nhac]].
3. Khi các nền văn hoá gặp nhau thì điều gì xảy ra — ví dụ [[dem-bossa-nova|bossa nova]] (samba gặp jazz) hay [[tan-nhac-viet-nam]] (ca khúc phương Tây gặp [[am-nhac-va-ngon-ngu|ngôn ngữ thanh điệu]])?
4. Người nghiên cứu, khi là người ngoài cộng đồng, có quyền và trách nhiệm gì?

Liên quan: [[xa-hoi-hoc-am-nhac]].
`,
  },
  {
    slug: 'xa-hoi-hoc-am-nhac',
    title: 'Xã hội học âm nhạc',
    category: 'musicology',
    also: ['philosophy'],
    aliases: ['xã hội học âm nhạc', 'sociology of music', 'music sociology', 'sociomusicology', 'Max Weber âm nhạc', 'Musiksoziologie'],
    summary: 'Xã hội học âm nhạc nghiên cứu cách âm nhạc được sản xuất, phân phối, tiếp nhận và mang nghĩa trong xã hội. Hai công trình kinh điển: nghiên cứu của Max Weber (in năm 1921) và Einleitung in die Musiksoziologie của Adorno (1962).',
    wiki: 'Sociomusicology',
    refs: [
      ['Lex.dk — Musiksociologi', 'https://lex.dk/musiksociologi'],
      ['UBC School of Music — on Weber and the sociology of music', 'https://music.ubc.ca/?p=15355'],
      ['Wikipedia — Sociomusicology', 'https://en.wikipedia.org/wiki/Sociomusicology'],
      ['Parncutt (2007) — Systematic musicology and the history and future of Western musical scholarship (PDF)', 'https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/parncutt_richard/Pdfs/Pa07_JIMS.pdf'],
    ],
    body: `
**Xã hội học âm nhạc** hỏi: **ai** làm nhạc, **cho ai**, **trong điều kiện nào**, và âm nhạc **làm gì** trong xã hội. Theo Parncutt (2007), ngành này có mặt ở cả hai hướng của [[am-nhac-hoc-he-thong]]: xã hội học **thực nghiệm** (khảo sát, thống kê thính giả, thị trường) và xã hội học **lý thuyết** (diễn giải, phê phán).

## Hai công trình kinh điển
| Năm | Công trình | Ý chính |
|---|---|---|
| 1921 | **Max Weber**, nghiên cứu thường được biết dưới tên *Die rationalen und soziologischen Grundlagen der Musik* (viết khoảng 1909–1913, in sau khi ông mất; nhan đề không phải của Weber) | Âm nhạc phương Tây — [[luat-binh-quan|bình quân luật]], [[ky-am|ký âm]], hoà âm [[dieu-tinh|điệu tính]], cây [[dan-piano|đàn piano]] — là một biểu hiện của quá trình **duy lý hoá** của xã hội phương Tây |
| 1962 | **Theodor W. Adorno**, *Einleitung in die Musiksoziologie* | Gồm cả **phân loại các kiểu người nghe**; xem [[adorno-va-am-nhac]] |

**Lưu ý:** *phần tóm tắt ý chính của Weber ở trên là cách hiểu phổ biến trong các bản giới thiệu, không phải trích dẫn nguyên văn.*

## Các chủ đề và bài trong thư viện
| Chủ đề | Bài |
|---|---|
| Âm nhạc và quyền lực, lễ nghi | [[nhac-trong-tu-tuong-nho-gia]], [[thuyet-ethos-hy-lap]] |
| Công nghiệp văn hoá, âm nhạc đại chúng | [[adorno-va-am-nhac]], [[nhac-pho-thong-the-ky-20]] |
| Công nghệ và tiếp nhận | [[lich-su-thu-am]], [[so-sanh-ban-thu]] |
| Cộng đồng người chơi | [[jam-session]], [[phong-cach-jazz]] |
| Âm nhạc và bản sắc dân tộc | [[tan-nhac-viet-nam]], [[am-nhac-truyen-thong-viet-nam]] |
| Thể chế đào tạo | [[thi-cap-do]], [[truong-phai-su-pham-nga]] |

Ranh giới với [[dan-toc-nhac-hoc]] mờ: dân tộc nhạc học thiên về khảo sát thực địa trong một cộng đồng; xã hội học âm nhạc thiên về cấu trúc xã hội rộng hơn.
`,
  },
  {
    slug: 'nhac-khi-hoc',
    title: 'Nhạc khí học',
    category: 'musicology',
    also: ['instrument'],
    aliases: ['nhạc khí học', 'organology', 'Hornbostel–Sachs', 'Hornbostel-Sachs', 'phân loại nhạc cụ', 'chordophone', 'idiophone'],
    summary: 'Nhạc khí học nghiên cứu nhạc cụ: phân loại, cấu tạo, lịch sử. Hệ thống phân loại Hornbostel – Sachs (1914) chia nhạc cụ theo cách tạo âm thành bốn lớp — tự thân vang, màng rung, dây rung, hơi — về sau thêm lớp nhạc cụ điện.',
    wiki: 'Hornbostel–Sachs',
    refs: [
      ['Wikipedia — Hornbostel–Sachs', 'https://en.wikipedia.org/wiki/Hornbostel%E2%80%93Sachs'],
      ['Bibliolore (RILM) — Erich von Hornbostel', 'https://bibliolore.org/tag/erich-von-hornbostel/'],
      ['Viện Âm nhạc — Âm nhạc học là gì?', 'https://vienamnhac.vn/bai-viet/nhac-moi/am-nhac-hoc-la-gi'],
      ['Wikipedia — Organology', 'https://en.wikipedia.org/wiki/Organology'],
    ],
    body: `
**Nhạc khí học** (*organology*) là ngành nghiên cứu **nhạc cụ**: phân loại, cấu tạo, âm học, lịch sử chế tác và vai trò trong văn hoá. Trong sơ đồ của Adler (1885), **lịch sử nhạc cụ** thuộc [[am-nhac-hoc-lich-su|nhánh lịch sử]]; còn âm học của nhạc cụ thuộc [[am-nhac-hoc-he-thong|nhánh hệ thống]]. Trang của Viện Âm nhạc (Việt Nam) nêu nhạc khí học như một lĩnh vực của [[am-nhac-hoc|âm nhạc học]].

## Hệ thống Hornbostel – Sachs (1914)
Erich von Hornbostel và Curt Sachs công bố *Systematik der Musikinstrumente. Ein Versuch* trên *Zeitschrift für Ethnologie* (tập 46, 1914), dựa trên sơ đồ của Victor-Charles Mahillon thế kỷ 19. Tiêu chí phân loại là **vật gì rung để tạo ra âm**:
| Lớp | Tên gốc | Vật rung | Ví dụ |
|---|---|---|---|
| 1 | Idiophone (tự thân vang) | Chính thân nhạc cụ | [[cong-chieng|chiêng]], [[phach-song-lang-mo|mõ]], [[dan-da|đàn đá]], [[celesta]], [[gamelan]] |
| 2 | Membranophone (màng rung) | Một màng căng | [[timpani]], [[tabla-mridangam|tabla]], [[djembe]] |
| 3 | Chordophone (dây rung) | Dây căng | [[dan-bau|đàn bầu]], [[guitar-co-dien|guitar]], [[violin]], **piano**, [[dan-phim-co|harpsichord]], [[sitar]] |
| 4 | Aerophone (hơi) | Cột không khí | [[sao-truc|sáo]], [[clarinet|kèn]], [[organ-ong|organ ống]], [[khen]] |
| (5) | Electrophone (điện) | Mạch điện tạo âm — lớp thêm vào sau | [[synthesizer]], [[theremin-ondes|theremin]] |

Bản gốc có bốn lớp; lớp nhạc cụ điện được bổ sung về sau, và năm 2011 nhóm dự án MIMO công bố một bản chỉnh sửa. Bản dịch tiếng Anh đăng trên *Galpin Society Journal* năm 1961.

## Piano dưới góc nhìn nhạc khí học
Piano là nhạc cụ **dây rung** được gõ bằng búa. Các bài trong thư viện đi theo đúng các câu hỏi của nhạc khí học:
- **Lịch sử:** [[lich-su-piano]], [[dan-phim-co]].
- **Cấu tạo và cơ chế:** [[cau-tao-piano]], [[bo-may-piano]], [[cac-loai-dan-piano]].
- **Âm học:** [[am-hoc-co-ban]], [[am-sac]], [[chuoi-boi-am]].
- **Chỉnh âm và bảo dưỡng:** [[bao-duong-piano]], [[luat-binh-quan]].
- **Nhạc cụ và lối viết:** [[lich-su-ky-thuat-piano]], [[ban-dap]].

**Toàn bộ các trang nhạc cụ** (phương Tây và phương Đông, theo năm lớp và theo vùng, kèm bảo tàng và hội chuyên ngành): [[nhac-khi-the-gioi]]. Theo vùng: [[dan-nhac-giao-huong]], [[nhac-cu-viet-nam]], [[nhac-cu-dong-a]], [[nhac-cu-nam-a-tay-a]]. Bối cảnh âm nhạc truyền thống Việt Nam: [[am-nhac-truyen-thong-viet-nam]].
`,
  },
  {
    slug: 'am-nhac-hoc-tinh-toan',
    title: 'Âm nhạc học tính toán',
    category: 'musicology',
    also: ['listening'],
    aliases: ['âm nhạc học tính toán', 'computational musicology', 'music information retrieval', 'truy xuất thông tin âm nhạc', 'ISMIR', 'corpus study', 'nghiên cứu kho dữ liệu'],
    summary: 'Âm nhạc học tính toán dùng máy tính để mô hình hoá lý thuyết và kiểm tra giả thuyết trên kho dữ liệu lớn. Lĩnh vực truy xuất thông tin âm nhạc (MIR) có hội nghị ISMIR từ năm 2000.',
    wiki: 'Computational_musicology',
    refs: [
      ['Wikipedia — International Society for Music Information Retrieval', 'https://en.wikipedia.org/wiki/International_Society_for_Music_Information_Retrieval'],
      ['Byrd (2002) — ISMIR history', 'https://ismir.ircam.fr/texts/Byrd02.html'],
      ['de Clercq & Temperley (2011) — A corpus analysis of rock harmony (PDF)', 'https://rockcorpus.midside.com/2011_paper/declercq_temperley_2011.pdf'],
      ['de Clercq (2014) — EUROMAC slides on the rock corpus (PDF)', 'https://www.midside.com/presentations/declercq_2014_euromac_slides.pdf'],
      ['Burgoyne, Wild & Fujinaga (2011) — An expert ground-truth set for audio chord recognition and music analysis (ISMIR, PDF)', 'https://ismir2011.ismir.net/papers/OS8-1.pdf'],
      ['Wikipedia — Journal of New Music Research', 'https://en.wikipedia.org/wiki/Journal_of_New_Music_Research'],
      ['Wikipedia — Computational musicology', 'https://en.wikipedia.org/wiki/Computational_musicology'],
    ],
    body: `
**Âm nhạc học tính toán** dùng máy tính như một công cụ nghiên cứu. Parncutt (2007) xếp "máy tính và công nghệ" vào hướng khoa học của [[am-nhac-hoc-he-thong]]; Đại học Graz gọi phân ngành này là **khoa học thông tin âm nhạc**.

## Ba kiểu công việc
| Kiểu | Làm gì | Ví dụ |
|---|---|---|
| **Nghiên cứu kho dữ liệu** (*corpus study*) | Mã hoá hàng trăm tác phẩm rồi đếm, so sánh | de Clercq và Temperley (2011) [[phan-tich-hoa-am|phân tích hoà âm]] của một kho bài rock — dùng ở [[hoa-am-pop]] |
| **Mô hình hoá lý thuyết** | Viết một lý thuyết thành quy tắc chính xác, rồi chạy thử | [[tap-hop-cao-do]], [[neo-riemann]] — những lý thuyết vốn đã có dạng toán học |
| **Truy xuất thông tin âm nhạc** (MIR) | Nhận diện [[giai-dieu|giai điệu]], [[hop-am-ba|hợp âm]], nhịp từ bản thu hay bản nhạc | Hội nghị ISMIR |

## Mốc
- **1972:** tạp chí *Interface* ra đời, về sau đổi tên thành *Journal of New Music Research*.
- **2000:** Hội nghị chuyên đề quốc tế đầu tiên về truy xuất thông tin âm nhạc (ISMIR) họp ở Plymouth, Massachusetts (23–25/10/2000); từ 2002 gọi là hội nghị (*Conference*); hội ISMIR được thành lập chính thức khoảng 2008.

## Ví dụ: kho dữ liệu nhạc rock
de Clercq và Temperley (*Popular Music*, 2011) chọn **100 bài** từ danh sách "500 bài hát hay nhất" của tạp chí *Rolling Stone* (20 bài mỗi thập niên, 1950 – 1990). Hai tác giả phân tích độc lập từng bài bằng số La Mã và trùng nhau hơn 90%. Kết luận nổi bật: sau I, hợp âm **IV** phổ biến nhất, và IV đặc biệt hay đứng ngay trước chủ âm.

::bars I=32.8 IV=22.6 V=16.2 ♭VII=8.0 max=40 | Tỉ lệ (%) các hợp âm theo bậc gốc trong 100 bài rock (số liệu từ bài trình bày năm 2014 của de Clercq, dựa trên kho dữ liệu 2011)

Điều này khác với hoà âm cổ điển, nơi V – I là trục chính ([[chuc-nang-hoa-am]]) — một kết luận chỉ có thể rút ra một cách chắc chắn bằng **đếm**. Xem [[hoa-am-pop]]. Một kho dữ liệu lớn khác là **Billboard** (Burgoyne, Wild và Fujinaga, ISMIR 2011): hơn 1.000 bài lấy ngẫu nhiên từ bảng xếp hạng Hot 100 giai đoạn 1958 – 1991, được các nhạc công jazz ghi hợp âm khớp thời gian.

## Ví dụ: tìm giọng bằng thuật toán
Hồ sơ giọng của Krumhansl và Kessler, cùng thuật toán so tương quan, là một ví dụ kinh điển của việc biến một kết quả tâm lý học thành thuật toán — có ví dụ tính tay ở [[tim-giong-bang-may]].

## Gần gũi với thư viện này
- Khi biên soạn, các ví dụ [[doi-am-5-loai|đối âm]] mẫu của thư viện được kiểm tra bằng một chương trình nhỏ viết theo các luật ở [[cong-thuc-phuc-dieu]] — một ví dụ thu nhỏ của việc "viết lý thuyết thành thuật toán".
- Âm nhạc làm ra bằng máy tính là đề tài của [[the-loai-am-nhac|lịch sử thể loại]]: [[nhac-dien-tu]], [[nhac-pho]].
- [[am-hoc-co-ban|Âm học]] và chỉnh âm có dạng toán học sẵn: [[luat-binh-quan]], [[chuoi-boi-am]].

## Một bài tập nhỏ
*(Gợi ý của thư viện.)* Chọn 20 bài hát Việt quen thuộc, ghi [[vong-hop-am|vòng hợp âm]] của điệp khúc theo [[chuc-nang-hoa-am|số La Mã]] ([[ky-hieu-hop-am]]), rồi đếm: bao nhiêu bài dùng I – V – vi – IV ([[hoa-am-pop]])? bao nhiêu bài kết bằng V – I ([[cau-ket]])? Đó là một nghiên cứu kho dữ liệu đúng nghĩa, chỉ ở quy mô nhỏ.
`,
  },
]
