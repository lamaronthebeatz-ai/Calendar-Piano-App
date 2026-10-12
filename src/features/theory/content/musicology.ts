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
- Trang của Viện Âm nhạc nêu thêm **mỹ học âm nhạc**, **âm luật học** (nghiên cứu hệ thống âm luật, [[cac-he-thong-chinh-am|chỉnh âm]]) và **nhạc khí học** như các lĩnh vực liên quan.

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

**Âm nhạc nhà thờ** có nhánh riêng: [[am-nhac-nha-tho]] — nguồn văn bản ([[ky-am-binh-ca-gregorian]], [[sach-hat-va-van-kien-binh-ca]], [[tai-lieu-su-pham-cua-bach]]) gặp thực hành biểu diễn lịch sử.

**Nhánh phê phán – văn hoá và ứng dụng (mới):** [[am-nhac-hoc-moi]], [[am-nhac-hoc-nu-quyen-va-gioi]], [[nghien-cuu-am-nhac-dai-chung]], [[nghien-cuu-am-thanh-va-canh-quan-am-thanh]], [[am-nhac-hoc-sinh-thai]], [[am-nhac-chinh-tri-va-kiem-duyet]], [[bieu-tuong-hoc-am-nhac]], [[am-nhac-hoc-ky-thuat-so]], [[cong-nghiep-am-nhac]], [[nghien-cuu-nhac-phim]], [[di-san-phi-vat-the-va-am-nhac]].
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
Thuật ngữ "âm nhạc dân tộc học" xuất hiện trong chương trình [[am-nhac-hoc|Âm nhạc học]] của Nhạc viện TP. Hồ Chí Minh và trong các bài nghiên cứu, ví dụ *Nghiên cứu [[ca-tru|ca trù]] dưới góc nhìn âm nhạc dân tộc học* (Tạp chí Giáo dục Nghệ thuật). Trong thư viện:
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
- **[[cac-he-thong-chinh-am|Chỉnh âm]] và bảo dưỡng:** [[bao-duong-piano]], [[luat-binh-quan]].
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
| **Nghiên cứu kho dữ liệu** (*corpus study*) | Mã hoá hàng trăm tác phẩm rồi đếm, so sánh | [[phoi-chorale-kieu-bach|de Clercq]] và Temperley (2011) [[phan-tich-hoa-am|phân tích hoà âm]] của một kho bài rock — dùng ở [[hoa-am-pop]] |
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
- [[am-hoc-co-ban|Âm học]] và [[cac-he-thong-chinh-am|chỉnh âm]] có dạng toán học sẵn: [[luat-binh-quan]], [[chuoi-boi-am]].

## Một bài tập nhỏ
*(Gợi ý của thư viện.)* Chọn 20 bài hát Việt quen thuộc, ghi [[vong-hop-am|vòng hợp âm]] của điệp khúc theo [[chuc-nang-hoa-am|số La Mã]] ([[ky-hieu-hop-am]]), rồi đếm: bao nhiêu bài dùng I – V – vi – IV ([[hoa-am-pop]])? bao nhiêu bài kết bằng V – I ([[cau-ket]])? Đó là một nghiên cứu kho dữ liệu đúng nghĩa, chỉ ở quy mô nhỏ.
`,
  },
  {
    slug: "am-nhac-hoc-moi",
    title: "Âm nhạc học mới (New Musicology) và âm nhạc học phê phán",
    category: 'musicology',
    also: ['philosophy'],
    aliases: ["âm nhạc học mới", "New Musicology", "new musicology", "âm nhạc học phê phán", "critical musicology", "Joseph Kerman", "Kerman", "Contemplating Music", "Lawrence Kramer", "hermeneutic windows", "Rose Rosengard Subotnik", "Gary Tomlinson", "Music à la Mode"],
    summary: "Từ cuối thập niên 1970, một nhóm học giả Mỹ cho rằng âm nhạc học đã thu mình vào kiểm chứng tư liệu và phân tích cấu trúc, và đòi một ngành \"phê bình\": đọc âm nhạc như một thực hành văn hoá, gắn với ý thức hệ, giới, quyền lực. Bài trình bày các văn bản mở đầu của Kerman (1980, 1985), Kramer (1990), Subotnik (1991), cuộc tranh luận Tomlinson – Kramer, phản ứng gay gắt của Charles Rosen (1994), và lập trường còn bàn cãi của Taruskin.",
    refs: [
      ["Kerman, \"How We Got into Analysis, and How to Get Out\", Critical Inquiry 7(2), 1980 (PDF qua khoá học)", "https://edisciplinas.usp.br/pluginfile.php/4268103/mod_resource/content/0/1343130%20%281%29.pdf"],
      ["Agawu, \"How We Got out of Analysis, and How to Get Back In Again\" (PDF)", "https://music.arts.uci.edu/abauer/4.3/readings/Agawu_How_We_Got_out_Analysis.pdf"],
      ["University of California — In memoriam Joseph Kerman", "https://senate.universityofcalifornia.edu/_files/inmemoriam/html/JosephKerman.html"],
      ["UC Press — Kramer, Music as Cultural Practice, 1800–1900", "https://www.ucpress.edu/books/music-as-cultural-practice-1800-1900/paper"],
      ["Wikipedia — Rose Rosengard Subotnik", "https://en.wikipedia.org/wiki/Rose_Rosengard_Subotnik"],
      ["ZGMTH — điểm sách về New Musicology", "https://storage.gmth.de/zgmth/pdf/277"],
      ["Journal of the Society for Musicology in Ireland — về Taruskin và \"Adornian\"", "https://www.jsmi.musicologyireland.ie/index.php/journal/article/download/30/32"],
      ["New York Review of Books — Rosen, \"Music à la Mode\" (23/6/1994)", "https://www.nybooks.com/articles/1994/06/23/music-agrave-la-mode/"],
      ["NYRB — thư phản hồi (22/9/1994)", "https://www.nybooks.com/articles/1994/09/22/music-a-la-mode/"],
      ["Boston Globe — cáo phó Richard Taruskin (2022)", "https://www.bostonglobe.com/2022/07/02/metro/richard-taruskin-groundbreaking-polemical-musicologist-dies-77"],
      ["Music Theory Online 23.1 — điểm sách Kramer, The Thought of Music", "https://mtosmt.org/issues/mto.17.23.1/mto.17.23.1.villegas.velez.php"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], thuộc nhánh "Âm nhạc học phê phán và văn hoá". Bối cảnh ngành: [[lich-su-nganh-am-nhac-hoc]].

::timeline 1980=Kerman_"How_We_Got_into_Analysis" 1985=Contemplating_Music 1990=Kramer 1991=McClary,_Subotnik 1994=Rosen_phản_bác 2004=Taruskin_"Poietic_Fallacy" | Các mốc của âm nhạc học mới

## Lời kêu gọi của Kerman
- **"How We Got into Analysis, and How to Get Out"** (*Critical Inquiry* 7/2, 1980): Kerman cho rằng phân tích âm nhạc vận hành như một **ý thức hệ**, phục vụ niềm tin vào tính **thống nhất hữu cơ** của khí nhạc Đức từ [[johann-sebastian-bach|Bach]] đến [[johannes-brahms|Brahms]]. Kofi [[ly-thuyet-chu-de|Agawu]] sau đó đáp lại bằng bài có tựa nhại *"How We Got out of Analysis, and How to Get Back In Again"*.
- **Contemplating Music** (Harvard University Press, 1985; ở Anh in với tựa *Musicology*): đòi âm nhạc học chuyển sang hướng **phê bình** thay vì chỉ xác lập dữ kiện. Philip Brett (trong [[nguon-tra-cuu-am-nhac-hoc|Grove]]) gọi cuốn sách là "một khoảnh khắc định hình".

## Những tiếng nói chính
| Người | Tác phẩm | Ý chính |
|---|---|---|
| **Lawrence Kramer** | *Music as Cultural Practice, 1800–1900* (UC Press, 1990) | Âm nhạc **tham dự** vào các thực hành văn hoá; đề xuất "**cửa sổ diễn giải**" (*hermeneutic windows*) — những chỗ trong tác phẩm mở ra nghĩa. Có các chương về Op. 111 của [[ludwig-van-beethoven|Beethoven]], Prelude La thứ của [[frederic-chopin|Chopin]], [[franz-liszt|Liszt]], *Tristan* |
| **Rose Rosengard Subotnik** | *Developing Variations: Style and Ideology in Western Music* (Univ. of Minnesota Press, 1991) | Đưa [[adorno-va-am-nhac|Adorno]] vào âm nhạc học nói tiếng Anh từ cuối thập niên 1970; Edward Said gọi bà là người diễn giải Adorno hàng đầu bằng tiếng Anh |
| **Susan McClary** | *Feminine Endings* (1991) | Giới và tính dục trong âm nhạc — xem [[am-nhac-hoc-nu-quyen-va-gioi]] |
| **Gary Tomlinson** | trao đổi với Kramer (đầu thập niên 1990) | Tranh luận về hậu hiện đại và cách viết [[cac-thoi-ky|lịch sử âm nhạc]] |
Một bài điểm sách trên ZGMTH tóm tắt: âm nhạc học mới vay từ **hậu cấu trúc luận Pháp**, **nghiên cứu văn hoá Mỹ** và **lý thuyết nữ quyền**; các bài của McClary và Kramer gây tranh cãi nhiều nhất.

## Phản ứng
- **Charles Rosen**, *"Music à la Mode"* (*New York Review of Books*, 23/6/1994): điểm chín cuốn sách, nhắm chủ yếu vào McClary; cho rằng lối viết này phục vụ "các nhà âm nhạc học trẻ khao khát theo kịp tin mới nhất" hơn là người sáng tác, người biểu diễn, người nghe. Cuộc trao đổi thư tiếp tục trên NYRB (22/9/1994).
- Có cả một cuốn sách phản biện tu từ của trào lưu: *Dissenting Variations. The Rhetoric of New Musicology* (LIM).
- **Richard [[tinh-xac-thuc-bieu-dien|Taruskin]]** là trường hợp khó xếp: trong *"The Poietic Fallacy"* (*Musical Times* 145, 2004) ông phê phán lối tập trung vào nhà soạn nhạc và tác phẩm, và (theo một học giả dẫn lại) gọi những người thúc đẩy âm nhạc học mới là "người theo Adorno, cả nam lẫn nữ". Nhưng cáo phó của ông trên *Boston Globe* (2022) lại xếp ông vào chính phong trào này. *Hai cách nhìn mâu thuẫn — thư viện để nguyên.*
- Về sau, chính Kramer kêu gọi một "âm nhạc học **mới hơn**" (theo điểm sách *The Thought of Music*, 2016).

## Để lại gì?
- **Ý nghĩa** trở thành câu hỏi chính đáng của âm nhạc học — xem [[y-nghia-am-nhac]].
- Mở đường cho [[am-nhac-hoc-nu-quyen-va-gioi|nghiên cứu giới]], [[nghien-cuu-am-nhac-dai-chung|nhạc đại chúng]], [[lich-su-tiep-nhan-am-nhac|lịch sử tiếp nhận]] và phê phán **kinh điển**.
- Với người học: đọc một tác phẩm vừa bằng [[phuong-phap-phan-tich-tac-pham|phân tích]] vừa bằng câu hỏi "nó nói gì, với ai, trong bối cảnh nào" — hai cách bổ sung chứ không loại trừ.
`,
  },
  {
    slug: "am-nhac-hoc-nu-quyen-va-gioi",
    title: "Giới, tính dục và âm nhạc học nữ quyền",
    category: 'musicology',
    also: ['philosophy'],
    aliases: ["âm nhạc học nữ quyền", "nữ quyền trong âm nhạc", "giới trong âm nhạc", "feminist musicology", "gender and music", "Feminine Endings", "Susan McClary", "Marcia Citron", "Gender and the Musical Canon", "Musicology and Difference", "Queering the Pitch", "queer musicology", "nhà soạn nhạc nữ", "Easter Sonata"],
    summary: "Từ cuối thập niên 1980, âm nhạc học bắt đầu hỏi: vì sao âm nhạc của phụ nữ gần như vắng mặt trong kinh điển, và âm nhạc có mang những hình dung về giới hay không? Bài kể các văn bản mốc — Feminine Endings của McClary (1991), Gender and the Musical Canon của Citron (1993), Musicology and Difference (1993), Queering the Pitch (1994) — cuộc tranh cãi quanh đoạn McClary viết về Giao hưởng số 9, và những lần \"tìm lại\" tác giả nữ: tiểu sử Clara Schumann của Nancy Reich (1985), \"Easter Sonata\" trả về cho Fanny Hensel (2010).",
    refs: [
      ["Wikipedia — Susan McClary", "https://en.wikipedia.org/wiki/Susan_McClary"],
      ["Current Musicology — về tranh luận quanh Giao hưởng số 9 (PDF)", "https://journals.library.columbia.edu/index.php/currentmusicology/article/download/7136/4382/18229"],
      ["University of Illinois Press — Citron, Gender and the Musical Canon", "https://www.press.uillinois.edu/books/?id=p069161"],
      ["UC Press — Solie (ed.), Musicology and Difference", "https://www.ucpress.edu/books/musicology-and-difference/paper"],
      ["ECU Library — Brett, Wood, Thomas (eds.), Queering the Pitch", "https://lib.ecu.edu/catalog-preview/catalog/554251"],
      ["Feminist Theory and Music — lịch sử hội thảo", "https://conferences.hamilton.edu/ftmu/history"],
      ["Wikipedia — Nancy B. Reich", "https://en.wikipedia.org/wiki/Nancy_B._Reich"],
      ["Colorado State University — về Easter Sonata của Fanny Hensel", "https://music.colostate.edu/news/famous-composers-sister-recognized-140-years-later"],
      ["Bärenreiter — Fanny Hensel, Ostersonate (Urtext)", "https://barenreiter.co.uk/ostersonate-easter-sonata-for-piano-ba11853.html"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]]; nảy ra từ [[am-nhac-hoc-moi]].

::timeline 1985=Reich:_Clara_Schumann 1987=McClary_về_Giao_hưởng_9 1989=Nhóm_LGBTQ_của_AMS 1991=Feminine_Endings 1993=Citron;_Solie 1994=Queering_the_Pitch 2010=Easter_Sonata_về_tay_Fanny | Các mốc

## Câu hỏi của ngành
1. **Kinh điển**: vì sao từ sau 1800 âm nhạc của phụ nữ nằm ở rìa tiết mục, giáo trình và [[lich-su-tiep-nhan-am-nhac|lịch sử tiếp nhận]]?
2. **Âm nhạc như diễn ngôn có giới**: [[hinh-thuc-am-nhac|hình thức]], giọng, [[the-loai-am-nhac|thể loại]] có mang hình dung về nam – nữ không?
3. **Tìm lại**: ai đã sáng tác, và vì sao tên họ bị mất?

## Văn bản mốc
| Năm | Văn bản | Nội dung |
|---|---|---|
| 1991 | Susan McClary, **Feminine Endings: Music, Gender, and Sexuality** (Univ. of Minnesota Press) | Đọc giới và tính dục trong âm nhạc, từ [[opera|opera]] đến nhạc đại chúng |
| 1991 | Hội thảo **Feminist Theory and Music** đầu tiên, Minneapolis, 26 – 30/6 (184 người dự, do Lydia Hamessley và McClary tổ chức) | Nhiều bài của *Queering the Pitch* được trình bày lần đầu ở đây |
| 1993 | Marcia Citron, **Gender and the Musical Canon** (Cambridge University Press) | Sáng tạo, tính chuyên nghiệp, tiếp nhận, giáo trình; đoạt giải Pauline Alderman |
| 1993 | Ruth Solie (chủ biên), **Musicology and Difference** (UC Press) | Tuyển tập: Carolyn Abbate, Philip Brett, McClary, Judith Tick, Elizabeth Wood (*"Lesbian [[fugue|Fugue]]"* về Ethel Smyth) |
| 1994 | Philip Brett, Elizabeth Wood, Gary Thomas (chủ biên), **Queering the Pitch: The New Gay and Lesbian Musicology** (Routledge; tái bản mở rộng 2006) | Âm nhạc học đồng tính: [[benjamin-britten|Britten]], [[franz-schubert|Schubert]], "Sapphonics"… |
Nhóm nghiên cứu LGBTQ của Hội Âm nhạc học Hoa Kỳ (AMS) hình thành ở hội nghị Austin năm 1989, sau một phiên do Philip Brett tổ chức.

## Tranh cãi: Giao hưởng số 9
Đoạn McClary viết về cao trào phần tái hiện chương 1 [[ludwig-van-beethoven|Giao hưởng số 9 của Beethoven]] xuất hiện trước tiên trong bản tin của Minnesota Composers' Forum (1/1987), rồi được viết lại mềm hơn trong *Feminine Endings*. Đoạn văn bị nhiều người — trong đó có Paula Higgins và Henry Kingsbury — phê phán, và trở thành biểu tượng cho cả cuộc tranh luận về âm nhạc học mới. *(Thư viện không trích nguyên văn vì chưa thấy văn bản gốc.)*

## Tìm lại tác giả nữ
- **[[clara-schumann|Clara Schumann]]**: Nancy B. Reich, *Clara Schumann: The Artist and the Woman* (Cornell UP, 1985; bản sửa 2001 có [[nguon-tra-cuu-am-nhac-hoc|danh mục tác phẩm]]) — thường được coi là tiểu sử học thuật đầu tiên về một nhà soạn nhạc nữ; dựa trên nhật ký, thư từ chưa công bố.
- **[[fanny-mendelssohn|Fanny Hensel]]**: bản *Easter Sonata* (1828) từng được thu âm năm 1972 dưới tên [[felix-mendelssohn|Felix Mendelssohn]]. Năm 2010, Angela Mace Christian (Đại học Duke) chứng minh đó là của Fanny — dựa trên số trang bị thiếu trong một sổ tay ở Berlin và nhật ký năm 1829 của Fanny. Bản nhạc được công diễn dưới tên bà năm 2012 và nay có ấn bản [[an-ban-urtext|Urtext]] của Bärenreiter. Một ví dụ cụ thể cho [[van-ban-hoc-am-nhac|văn bản học]] phục vụ câu hỏi giới.

## Với người dạy piano
Khi chọn bài cho học trò, có thể đưa vào tác phẩm của Clara Schumann, Fanny Hensel — xem [[lo-trinh-tac-pham]]. Câu hỏi "vì sao ta ít nghe họ" là một bài học [[lich-su-tiep-nhan-am-nhac|lịch sử tiếp nhận]] sống động.

*Chưa xác minh: năm thành lập tạp chí* Women & Music*; chưa tìm nguồn tiếng Việt về âm nhạc học nữ quyền.*
`,
  },
  {
    slug: "nghien-cuu-am-nhac-dai-chung",
    title: "Nghiên cứu âm nhạc đại chúng (popular music studies)",
    category: 'musicology',
    also: ['genres'],
    aliases: ["nghiên cứu âm nhạc đại chúng", "nghiên cứu nhạc đại chúng", "popular music studies", "IASPM", "Philip Tagg", "Richard Middleton", "Studying Popular Music", "Simon Frith", "Allan Moore", "Song Means", "musematic", "Kojak"],
    summary: "Ngành nghiên cứu nhạc đại chúng hình thành quanh năm 1981 với hội thảo Amsterdam (từ đó ra đời IASPM) và tạp chí Popular Music của Cambridge. Bài trình bày nền phê phán của Adorno (1941) và cách Middleton phản biện, phương pháp \"musematic\" của Philip Tagg (Kojak, 1979), xã hội học rock của Simon Frith, phân tích bản thu của Allan Moore, và những công trình về nhạc đại chúng Việt Nam (Dale Olsen 2008, Jason Gibbs).",
    refs: [
      ["IASPM — lịch sử hội", "https://iaspm.net/?p=3721"],
      ["IASPM Journal — Tagg về hội thảo 1981", "https://iaspmjournal.net/index.php/IASPM_Journal/article/download/556/574/2597"],
      ["Cambridge — Popular Music, vol. 1 (1981)", "https://www.cambridge.org/core/journals/yearbook-for-traditional-music/article/popular-music-i-folk-or-popular-distinctions-influences-continuities-edited-by-richard-middleton-and-david-horn-cambridge-university-press-1981-222-pp-cloth/27DA0C49A8600D4A5964B4401624B001"],
      ["Érudit — điểm sách Middleton, Studying Popular Music (1991)", "https://www.erudit.org/revue/cumr/1991/v11/n1/1014840ar.pdf"],
      ["Wikipedia — Philip Tagg", "https://en.wikipedia.org/wiki/Philip_Tagg"],
      ["Wikipedia — Simon Frith", "https://en.wikipedia.org/wiki/Simon_Frith"],
      ["University of Stirling — Moore, Song Means (2012)", "https://www.stir.ac.uk/research/hub/file/1851390"],
      ["New Left Review — về Adorno, \"On Popular Music\"", "https://newleftreview.net/issues/i39/articles/alan-beckett-popular-music"],
      ["Routledge — Olsen, Popular Music of Vietnam (2008)", "https://www.routledge.com/products/9780203892794"],
      ["VietNamNet — Rock Hà Nội, Bolero Sài Gòn (Jason Gibbs)", "https://vietnamnet.vn/rock-ha-noi-bolero-sai-gon-cau-chuyen-tan-nhac-viet-nam-586409.html"],
      ["Journal of Asian Studies — The Trịnh Công Sơn Phenomenon (2007)", "https://resolve.cambridge.org/core/journals/journal-of-asian-studies/article/trinh-cong-son-phenomenon/5CE4148A73BD91F3529E90242907927D"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]]. Về chính âm nhạc: [[Các dòng nhạc phổ thông thế kỷ 20]], [[hoa-am-pop]], [[hinh-thuc-ca-khuc-pho-thong]].

## Khởi đầu: 1981
- **Hội thảo quốc tế đầu tiên về nghiên cứu nhạc đại chúng**, Đại học Amsterdam, tháng 6/1981, do Gerard Kempers, David [[kenh-horn|Horn]] và Philip Tagg tổ chức; cuối hội thảo, **IASPM** (Hiệp hội Quốc tế Nghiên cứu Âm nhạc Đại chúng) được đề xuất / thành lập. *(Các nguồn nói hơi khác nhau về việc hội được lập chính thức ngay năm đó hay chỉ được đề xuất.)*
- Tạp chí **Popular Music** (Cambridge University Press): tập 1 năm 1981, do Richard Middleton và David Horn biên tập, ban đầu là niên giám theo chủ đề (Dân gian hay đại chúng?; Lý thuyết và phương pháp; Nhà sản xuất và thị trường…).

## Cái bóng của Adorno
[[adorno-va-am-nhac|Adorno]], *"On Popular Music"* (1941): nhạc đại chúng bị **chuẩn hoá** và chỉ có vẻ cá nhân giả (*pseudo-individualization*). Richard Middleton, **Studying Popular Music** (Open University Press, 1990), dành hẳn một chương cho lý thuyết Adorno và phản biện tính bi quan của nó một cách xây dựng; sách bao quát kinh tế chính trị, lịch sử, dân tộc học, ký hiệu học, [[triet-hoc-am-nhac|mỹ học]], ý thức hệ.

## Phương pháp tiêu biểu
| Người | Công trình | Phương pháp |
|---|---|---|
| **Philip Tagg** | *Kojak – 50 Seconds of Television Music* (Göteborg, 1979, từ luận án) | Phân tích "**musematic**": tách các đơn vị nghĩa nhỏ nhất (museme), so sánh với "chất liệu đối chiếu liên khách thể" để tìm trường liên tưởng ngoài âm nhạc. Ví dụ ghép [[nhac-phim-va-tro-choi|nhạc phim]] *Kojak* với *Fernando* của ABBA |
| **Simon Frith** | *The Sociology of Rock* (1978) → *Sound Effects* (1981); *Performing Rites* (Harvard UP, 1996) | Xã hội học: tuổi trẻ, giải trí, chính trị của rock; giá trị và thị hiếu, dùng khái niệm "vốn văn hoá" của Bourdieu |
| **Allan F. Moore** | *Song Means: Analysing and Interpreting Recorded Popular Song* (Ashgate, 2012) | Phân tích **bản thu** chứ không phải bản nhạc: hình dạng, [[hinh-thuc-am-nhac|hình thức]], cách hát, phong cách, "nhân vật" (persona), sự quy chiếu |
Điểm chung: đối tượng chính là **bản thu**, không phải tổng phổ — gần với [[so-sanh-ban-thu]] và [[lich-su-thu-am]].

## Nhạc đại chúng Việt Nam trong học thuật
- **[[nghien-cuu-am-nhac-viet-nam|Dale A. Olsen]]**, *Popular Music of Vietnam: The Politics of Remembering, the Economics of Forgetting* (Routledge, 2008) — giới thiệu mình là chuyên khảo dài đầu tiên về nhạc đại chúng Việt Nam đương thời (khoảng 1990 – 2005): ngôi sao, ban nhạc rock, nhạc sĩ, tụ điểm, liên hoan, thu âm, karaoke.
- **Jason Gibbs**, *Rock Hà Nội, Bolero Sài Gòn* (Nxb Đà Nẵng, 2019; trước đó là *Rock Hà Nội và Rumba Cửu Long*, 2008): 13 tiểu luận về [[tan-nhac-viet-nam|tân nhạc]] — [[nhac-cach-mang|nhạc đỏ]], rumba Cửu Long, [[nhac-vang-bolero|nhạc vàng]], [[van-cao|Văn Cao]], [[pham-duy|Phạm Duy]], Trịnh Công Sơn, [[tran-tien|Trần Tiến]].
- *Journal of Asian Studies* (2007) có bài *"The Trịnh Công Sơn Phenomenon"* về các ca khúc phản chiến bị chính quyền Sài Gòn cấm nhưng vẫn lan rộng — xem [[nhac-trinh]]. *(Tác giả chưa xác nhận trong nguồn.)*
`,
  },
  {
    slug: "nghien-cuu-am-thanh-va-canh-quan-am-thanh",
    title: "Nghiên cứu âm thanh và cảnh quan âm thanh (sound studies, soundscape)",
    category: 'musicology',
    also: ['listening'],
    aliases: ["nghiên cứu âm thanh", "sound studies", "cảnh quan âm thanh", "soundscape", "sinh thái âm học", "acoustic ecology", "R. Murray Schafer", "Murray Schafer", "The Tuning of the World", "World Soundscape Project", "keynote sound", "soundmark", "acoustemology", "Steven Feld", "Jonathan Sterne", "The Audible Past"],
    summary: "Nghiên cứu âm thanh mở rộng câu hỏi từ \"âm nhạc\" sang mọi âm thanh và cách con người nghe: R. Murray Schafer và World Soundscape Project (Simon Fraser, khoảng 1969) đặt ra khái niệm cảnh quan âm thanh với các thuật ngữ keynote, signal, soundmark, hi-fi/lo-fi; Steven Feld nghiên cứu cách người Kaluli \"biết qua âm thanh\"; Jonathan Sterne và Emily Thompson viết lịch sử văn hoá của việc nghe và âm học kiến trúc. Bài kèm gợi ý \"đi dạo nghe\" cho lớp học.",
    wiki: "Soundscape",
    refs: [
      ["JSTOR Daily — The soundscape heard round the world", "https://daily.jstor.org/the-soundscape-heard-round-the-world"],
      ["The Canadian Encyclopedia — World Soundscape Project", "https://prod-front.thecanadianencyclopedia.ca/en/article/world-soundscape-project"],
      ["SFU Library — World Soundscape Project", "https://digital.lib.sfu.ca/soundscape?page=20"],
      ["Wikipedia — Soundscape", "https://en.wikipedia.org/wiki/Soundscape"],
      ["WFAE — About", "https://wfae.net/about/"],
      ["Duke University Press — Feld, Sound and Sentiment", "https://www.dukeupress.edu/sound-and-sentiment"],
      ["Wikipedia — Steven Feld", "https://en.wikipedia.org/wiki/Steven_Feld"],
      ["Duke University Press — Sterne, The Audible Past", "https://www.dukeupress.edu/the-audible-past"],
      ["Princeton History — Thompson, The Soundscape of Modernity", "https://history.princeton.edu/about/publications/soundscape-modernity-architectural-acoustics-and-culture-listening-america-1900"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], nối với [[cam-nhan-am-thanh]], [[am-hoc-phong]] và [[dan-toc-nhac-hoc]].

## Cảnh quan âm thanh: Schafer
- **World Soundscape Project** ra đời ở Đại học Simon Fraser (Canada) — Bách khoa thư Canada ghi năm **1969**, trường ghi "cuối thập niên 1960 – đầu 1970"; thành viên có Barry Truax, Hildegard Westerkamp. Dự án đặt nền cho **sinh thái âm học** (*acoustic ecology*).
- R. Murray Schafer, **The Tuning of the World** (1977; về sau in lại với tựa *The Soundscape*).
- Năm 1993 (tháng 8, Banff) thành lập **Diễn đàn Thế giới về Sinh thái Âm học** (WFAE).

| Thuật ngữ của Schafer | Nghĩa |
|---|---|
| **Keynote** (âm nền) | Âm thanh nền nghe mà không để ý, như "[[bac-am-giai|chủ âm]]" của một nơi |
| **Signal** (tín hiệu) | Âm thanh ở tiền cảnh, được nghe có chủ ý (chuông, còi) |
| **Soundmark** (dấu ấn âm thanh) | Âm thanh riêng của một nơi, đáng bảo vệ — mượn từ *landmark* |
| **Hi-fi / lo-fi** | Môi trường có tỉ lệ tín hiệu – nhiễu cao (nghe rõ từng âm) hoặc thấp (âm thanh lẫn vào nhau) |
Mượn thuật ngữ [[dieu-tinh|chủ âm]] cho môi trường là một cách nối âm nhạc với [[am-hoc-co-ban|âm học]] đời thường.

## Biết bằng tai: Feld
**Steven Feld**, *Sound and Sentiment: Birds, Weeping, Poetics, and Song in Kaluli Expression* (1982; tái bản 1990, 2012): nghiên cứu người **Kaluli** ở Bosavi (Papua New Guinea) — tiếng chim, tiếng khóc than, bài ca và lối hát "đan chồng lên nhau" (*lift-up-over sounding*). Feld đặt từ **acoustemology** (âm thanh + nhận thức luận): âm thanh như một cách **hiểu biết** thế giới. *(Năm đặt thuật ngữ: các nguồn ghi khác nhau.)*

## Lịch sử của việc nghe
- **Jonathan Sterne**, *The Audible Past: Cultural Origins of Sound Reproduction* (Duke UP, 2003): khái niệm "**kỹ thuật nghe**" (*audile technique*) — từ ống nghe y khoa, điện báo đến tái tạo âm thanh 1876 – 1930. Nối với [[lich-su-thu-am]].
- **Emily Thompson**, *The Soundscape of Modernity* (MIT Press, 2002): âm học kiến trúc và văn hoá nghe ở Mỹ 1900 – 1933; Symphony Hall Boston (1900) là phòng hoà nhạc đầu tiên thiết kế theo công thức vang của Wallace Sabine — xem [[am-hoc-phong]].

## Hoạt động gợi ý cho lớp học
*(Đề xuất của thư viện.)*
1. Đi dạo 10 phút, ghi lại mọi âm thanh nghe được và xếp vào keynote / signal / soundmark.
2. Một "soundmark" của nơi bạn sống là gì (tiếng rao, chuông nhà thờ, tiếng còi xe)?
3. Nghe lại một bản nhạc có tiếng môi trường ([[nhac-phim-va-tro-choi|nhạc phim]], nhạc điện tử) — xem [[nhac-dien-tu]].
`,
  },
  {
    slug: "am-nhac-hoc-sinh-thai",
    title: "Âm nhạc học sinh thái (ecomusicology) và gỗ làm đàn",
    category: 'musicology',
    also: ['organology'],
    aliases: ["âm nhạc học sinh thái", "ecomusicology", "sinh thái âm nhạc", "Aaron Allen", "Jeff Todd Titon", "gỗ pernambuco", "pernambuco", "gỗ hồng sắc Brazil", "Brazilian rosewood", "CITES nhạc cụ", "tonewood"],
    summary: "Âm nhạc học sinh thái nghiên cứu \"âm nhạc, văn hoá và tự nhiên trong mọi sự phức tạp của các khái niệm đó\" (Aaron Allen). Bài trình bày định nghĩa, các hướng (sinh thái, điền dã, phê phán, văn bản) theo tuyển tập Current Directions in Ecomusicology (2016), quan niệm \"sinh thái âm thanh\" của Jeff Todd Titon, và một ví dụ cụ thể nhất: các quy định CITES về gỗ pernambuco (làm vĩ đàn dây) và gỗ hồng sắc Brazil (làm guitar).",
    refs: [
      ["Allen, \"Ecomusicology, Ecocriticism, and Musicology\", JAMS 64(2), 2011 (PDF)", "https://sites.lafayette.edu/ksatmusicalplayground/files/2016/04/Allen.Ecomusicology-Ecocriticism-and-Musicology.JAMS_.2011.pdf"],
      ["UNCG — Aaron Allen và ecomusicology", "https://research.uncg.edu/?p=6026"],
      ["Routledge — Allen & Dawe (eds.), Current Directions in Ecomusicology (2016)", "https://www.routledge.com/Current-Directions-in-Ecomusicology-Music-Culture-Nature/Allen-Dawe/p/book/9781138062498"],
      ["Journal of Folklore Research Reviews — Titon, Toward a Sound Ecology (2020)", "https://scholarworks.iu.edu/journals/index.php/jfrr/article/view/36491"],
      ["Zotero — Ecomusicology Bibliography", "https://www.zotero.org/ecomusicology"],
      ["CITES — Notification 2023/033 về pernambuco (PDF)", "https://cites.org/sites/default/files/notifications/E-Notif-2023-033.pdf"],
      ["CITES — CoP19 Inf. 53 (PDF)", "https://cites.org/sites/default/files/documents/E-CoP19-Inf-53_0.pdf"],
      ["League of American Orchestras — pernambuco", "https://americanorchestras.org/?p=36304"],
      ["NAMM — CITES và gỗ hồng sắc", "https://ww1.namm.org/node/50639"],
      ["boundary 2 — Ochoa Gautier (2016) (PDF)", "https://bpb-us-e1.wpmucdn.com/sites.ucsc.edu/dist/2/485/files/2014/08/boundary-2-2016-Gautier-107-41.pdf"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], nối với [[nhac-khi-hoc]] và [[nghien-cuu-am-thanh-va-canh-quan-am-thanh]].

## Định nghĩa
- Aaron S. Allen (mục từ trong *[[nguon-tra-cuu-am-nhac-hoc|Grove]] Dictionary of American Music*, bản 2, 2013 — theo nguồn thứ cấp): âm nhạc học sinh thái là "nghiên cứu **âm nhạc, văn hoá và tự nhiên** trong mọi sự phức tạp của các khái niệm đó".
- Trong chuyên đề trên *JAMS* 64/2 (2011), Allen viết về các vấn đề âm nhạc và âm thanh, cả văn bản lẫn biểu diễn, "trong quan hệ với **sinh thái và môi trường**".
- Có tranh luận giữa **ecomusicology** (mang tính phê phán, chính trị) và **music ecology** (dùng hình ảnh hệ sinh thái làm ẩn dụ cho [[doi-song-am-nhac-va-thiet-che|đời sống âm nhạc]]); một số học giả còn chất vấn chính ranh giới tự nhiên/văn hoá và nhạc/tạp âm.

## Các hướng nghiên cứu
Tuyển tập **Current Directions in Ecomusicology: Music, Culture, Nature** (Allen & Kevin Dawe chủ biên, Routledge, 2016; giải Koskoff của SEM năm 2018) chia bốn hướng:
| Hướng | Ví dụ câu hỏi |
|---|---|
| Sinh thái | Âm nhạc gắn với một môi trường cụ thể ra sao? |
| Điền dã | Người làm nhạc và người làm nhạc cụ sống với tài nguyên thế nào? |
| Phê phán | Âm nhạc tham gia vào khủng hoảng môi trường, tiêu dùng ra sao? |
| Văn bản | Thiên nhiên được biểu hiện thế nào trong tác phẩm? |
**Jeff Todd Titon**, *Toward a Sound Ecology* (Indiana UP, 2020): "sinh thái âm thanh", **tính bền vững** của văn hoá âm nhạc, một "của chung âm thanh cho mọi sinh vật". Thư mục chung do nhóm Ecocriticism của AMS và nhóm Ecomusicology của SEM duy trì.

## Ví dụ cụ thể: gỗ làm đàn và CITES
| Gỗ | Dùng làm | Tình trạng CITES |
|---|---|---|
| **Pernambuco** (*Paubrasilia echinata*, Brazil) | Vĩ (cây kéo) [[violin]], [[viola|viola]], [[cello|cello]] | Phụ lục II từ 13/9/2007; vĩ thành phẩm được miễn giấy phép đến 23/2/2023. Ở CoP19 (2022) đề xuất đưa lên Phụ lục I của Brazil bị bác, nhưng phạm vi được sửa để bao cả thành phẩm (trừ nhạc cụ tái xuất) |
| **Hồng sắc Brazil** (*Dalbergia nigra*) | Lưng, hông [[guitar-co-dien|guitar]] | Phụ lục I từ 11/6/1992. Năm 2019 (CoP18) nhạc cụ thành phẩm được miễn với các loài *Dalbergia* khác — **trừ** loài này |
*Quy định sau CoP20 (2025) chỉ thấy trong báo chuyên ngành với ngày tháng mâu thuẫn — chưa đưa vào.*

Với nghệ sĩ đi lưu diễn, một cây vĩ hay một cây đàn có thể cần giấy tờ khi qua biên giới — một chỗ mà âm nhạc học sinh thái chạm vào đời sống nghề nghiệp. Cấu tạo vĩ và đàn: [[am-hoc-nhac-cu]].

*Chưa tìm nguồn tiếng Việt về âm nhạc học sinh thái.*
`,
  },
  {
    slug: "am-nhac-chinh-tri-va-kiem-duyet",
    title: "Âm nhạc, chính trị và kiểm duyệt",
    category: 'musicology',
    also: ['genres'],
    aliases: ["kiểm duyệt âm nhạc", "âm nhạc và chính trị", "music censorship", "Freemuse", "Entartete Musik", "âm nhạc suy đồi", "Muddle Instead of Music", "Hỗn loạn thay cho âm nhạc", "Nghị quyết 1948", "Zhdanov", "Martin Cloonan"],
    summary: "Âm nhạc bị cấm vì lời, vì phong cách, vì người viết. Bài đi qua các trường hợp được nghiên cứu kỹ — xã luận \"Hỗn loạn thay cho âm nhạc\" trên Pravda (1936) đánh vào opera của Shostakovich, triển lãm \"Âm nhạc suy đồi\" của Đức Quốc xã (Düsseldorf, 1938), nghị quyết 1948 về \"chủ nghĩa hình thức\", việc đài SABC thời apartheid cào xước đĩa — cùng khung lý thuyết của Martin Cloonan, báo cáo hằng năm của Freemuse, và những gì đã biết (và chưa được nghiên cứu học thuật) về kiểm duyệt âm nhạc ở Việt Nam.",
    refs: [
      ["Freemuse — Hội nghị thế giới lần 1 về âm nhạc và kiểm duyệt (1998, PDF)", "https://freemuse.org/wp-content/uploads/1998/01/Freemuse-1st-World-Conference-on-Music-and-Censorship-November-1998-1.pdf"],
      ["Columbia Global Freedom of Expression — State of Artistic Freedom", "https://teaching.globalfreedomofexpression.columbia.edu/node/520"],
      ["Music in Africa — báo cáo Freemuse 2020", "https://musicinafrica.net/node/114999"],
      ["Mikkonen, \"Muddle Instead of Music\" in 1936 (JYX, PDF)", "https://jyx.jyu.fi/bitstreams/3c55f3fd-3a70-4812-aaa3-91f243cab65c/download"],
      ["GHDI — Entartete Musik: bìa sách hướng dẫn triển lãm (1938)", "https://germanhistorydocs.org/de/deutschland-nationalsozialismus-1933-1945/entartete-musik-titelblatt-des-ausstellungsfuehrers-1938"],
      ["Wikipedia — Reich Music Days", "https://en.wikipedia.org/wiki/Reich_Music_Days"],
      ["Gresham College — Frolova-Walker về năm 1948", "https://www.gresham.ac.uk/node/13912"],
      ["Wikipedia — Zhdanov Doctrine", "https://en.wikipedia.org/wiki/Zhdanov_Doctrine"],
      ["SAHA — Stopping the Music (Drewett)", "https://www.saha.org.za/shiftyrecords/stopping_the_music_a_guide_to_a_story_of_censorship_of_popular_music_during_apartheid.htm"],
      ["University of Glasgow — Cloonan, \"Call That Censorship?\"", "https://eprints.gla.ac.uk/7147"],
      ["VnExpress — Đi tù vì nhạc vàng", "https://vnexpress.net/di-tu-vi-nhac-vang-3571264.html"],
      ["Báo Pháp Luật — Cấm vĩnh viễn lưu hành 5 ca khúc trước 1975", "https://baophapluat.vn/cam-vinh-vien-luu-hanh-5-ca-khuc-truoc-1975-post243365.html"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], nối với [[xa-hoi-hoc-am-nhac]]. Âm nhạc từng bị coi là có sức mạnh đạo đức – chính trị từ thời cổ đại: [[thuyet-ethos-hy-lap|thuyết ethos]], [[nhac-trong-tu-tuong-nho-gia|Nho gia]].

## Thế nào là kiểm duyệt?
Martin Cloonan, *Banned! Censorship of Popular Music in Britain, 1967–92* (1996), và tuyển tập *Policing Pop* (Cloonan & Reebee Garofalo chủ biên, Temple UP, 2003) — mở đầu bằng chương *"Call That Censorship? Problems of Definition"*: kiểm duyệt không chỉ là lệnh cấm của nhà nước mà còn là đài không phát, cửa hàng không bán, nhà sản xuất tự cắt.

## Các trường hợp được nghiên cứu kỹ
| Năm | Nơi | Sự kiện |
|---|---|---|
| 28/1/1936 | Liên Xô | Xã luận không ký tên **"Hỗn loạn thay cho âm nhạc"** trên *Pravda*, sau khi Stalin xem [[opera|opera]] *Phu nhân Macbeth quận Mtsensk* của [[dmitri-shostakovich|Shostakovich]] (26/1). Vở diễn vắng bóng sân khấu Liên Xô khoảng 30 năm. Ai viết bài báo vẫn chưa được chứng minh |
| 24/5/1938 | Đức Quốc xã | Triển lãm **"Âm nhạc suy đồi"** (*Entartete Musik*) khai mạc ở Düsseldorf trong Ngày hội Âm nhạc Đế chế, do Hans Severus Ziegler tổ chức, theo mẫu triển lãm "Nghệ thuật suy đồi" (1937). Nhắm vào [[alban-berg|Berg]], [[paul-hindemith|Hindemith]], [[igor-stravinsky|Stravinsky]], nhạc jazz; tấm áp phích vẽ một nghệ sĩ [[saxophone|saxophone]] da đen đeo ngôi sao David |
| 10/2/1948 | Liên Xô | Nghị quyết của Trung ương về opera *Tình hữu nghị vĩ đại* của Muradeli: kết tội "**chủ nghĩa hình thức**" với Shostakovich, [[sergei-prokofiev|Prokofiev]], [[aram-khachaturian|Khachaturian]], Shebalin, Popov, Myaskovsky. Được bãi bỏ ngày 28/5/1958. *(Wikipedia ghi 20/2.)* |
| thập niên 1980 | Nam Phi | Uỷ ban duyệt đĩa của đài SABC đánh dấu lời ca, ghi "Tránh" lên đĩa, **cào xước** các bài bị cấm; hầu hết đĩa của hãng Shifty Records (lập năm 1984) bị hạn chế. Michael Drewett ghi lại trong *Stopping the Music* (2005) |

## Theo dõi hôm nay: Freemuse
Freemuse ra đời từ **Hội nghị Thế giới lần thứ nhất về Âm nhạc và Kiểm duyệt** (Copenhagen, 20 – 22/11/1998); ban thư ký thường trực từ 8/2000. Báo cáo *State of Artistic Freedom* hằng năm: bản 2020 ghi **711** vụ vi phạm ở 93 nước trong năm 2019, âm nhạc là lĩnh vực bị nhắm nhiều nhất; bản 2021 ghi 978 vụ ở 89 nước, khoảng 60% do chính quyền.

## Việt Nam
- Báo chí trong nước ghi lại việc [[nhac-vang-bolero|nhạc vàng]] bị cấm không rõ ràng cho đến đầu thập niên 1990 (VnExpress, *Đi tù vì nhạc vàng*), và việc 5 ca khúc trước 1975 bị "cấm vĩnh viễn lưu hành" (Báo Pháp Luật). Xem [[am-nhac-viet-nam-sau-1975]].
- Các ca khúc phản chiến của Trịnh Công Sơn từng bị chính quyền Sài Gòn cấm — xem [[nhac-trinh]].
- **Chưa tìm thấy** nghiên cứu học thuật có bình duyệt về kiểm duyệt âm nhạc ở Việt Nam; các nguồn trên là báo chí.

## Câu hỏi thảo luận
*(Gợi ý của thư viện.)* Một bản nhạc không lời có thể bị coi là "nguy hiểm" không? Trường hợp 1936 và 1948 cho thấy câu trả lời là có — chính **phong cách** ([[thuan-nghich|nghịch âm]], "[[hinh-thuc-am-nhac|hình thức]]") đã bị kết tội. Liên hệ với [[phi-dieu-tinh]].
`,
  },
  {
    slug: "bieu-tuong-hoc-am-nhac",
    title: "Biểu tượng học âm nhạc: tranh ảnh như nguồn sử liệu",
    category: 'musicology',
    also: ['organology'],
    aliases: ["biểu tượng học âm nhạc", "music iconography", "iconography âm nhạc", "RIdIM", "Barry S. Brook", "tranh vẽ nhạc công", "Cantigas de Santa Maria", "thiên thần chơi nhạc", "Vermeer The Music Lesson"],
    summary: "Tranh, tượng, tiểu hoạ trong sách chép tay là nguồn quý để biết nhạc cụ trông ra sao và người xưa chơi nhạc thế nào — nhưng một hình ảnh có thể là biểu tượng chứ không phải ghi chép. Bài giới thiệu RIdIM (thành lập 1971), cách phân biệt \"biểu tượng\" với \"tài liệu đời sống\", ba ví dụ — tiểu hoạ Cantigas de Santa Maria (thế kỷ 13), thiên thần chơi nhạc ở Florence, cây virginal trong tranh Vermeer — và phát hiện năm 2023 về hai nhạc cụ dây bằng gạc hươu hơn 2.000 năm tuổi ở Long An.",
    refs: [
      ["Association RIdIM — 50 năm (PDF)", "https://ridim.org/wp-content/uploads/2022/04/Past-Present-Future.-50-Years-of-Association-RIdIM.pdf"],
      ["RILM Bibliolore — RIdIM and music iconography", "https://bibliolore.org/2021/08/29/ridim-and-music-iconography/"],
      ["R-Projects — RIdIM", "https://r-musicprojects.org/ridim.html"],
      ["RIdIM Database", "https://ridim.org/ridim-database/"],
      ["College Music Symposium — Music iconography and medieval performance practice", "https://symposium.music.org/volume-31/articles-1752877059/music-iconography-and-medieval-performance-practice"],
      ["UNE — Stinson, Angels in Florentine Iconography and Trecento Musical Performance", "https://researchers.une.edu.au/en/publications/angels-in-florentine-iconography-and-trecento-musical-performance/"],
      ["Wikipedia — Cantigas de Santa Maria", "https://en.wikipedia.org/wiki/Cantigas_de_Santa_Maria"],
      ["Essential Vermeer — Vermeer and the virginals", "https://www.essentialvermeer.com/music/vermeer_and_virginals.html"],
      ["Southeast Asian Archaeology — evidence for early chordophones from Vietnam (Antiquity 2023)", "https://southeastasianarchaeology.com/2023/02/22/paper-in-search-of-a-musical-past-evidence-for-early-chordophones-from-vietnam"],
      ["The Strad — Earliest stringed instruments found in Vietnam", "https://www.thestrad.com/news/earliest-stringed-instruments-found-in-vietnam/16219.article"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], nối [[nhac-khi-hoc]] với [[phong-trao-bieu-dien-lich-su]].

## RIdIM
- **Répertoire International d'Iconographie Musicale** thành lập năm **1971** theo sáng kiến của **Barry S. Brook**, tại hội nghị IAML ở St. Gallen (Thuỵ Sĩ) — ngày 26 hay 29/8 tuỳ nguồn. Đồng sáng lập có Geneviève Thibault, Harald Heckmann, Howard Mayer Brown, Walter Salmen.
- Mục tiêu: lập danh mục các nguồn **hình ảnh** về âm nhạc, múa, sân khấu, [[opera|opera]]. Cơ sở dữ liệu trực tuyến miễn phí, phân loại nhạc cụ theo hệ **Hornbostel – Sachs** ([[nhac-khi-hoc]]).
- Từ 2011 là Hiệp hội RIdIM, trụ sở Zürich.

## Biểu tượng hay ghi chép?
Một bài trên *College Music Symposium* phân biệt **iconography** (nhận ra chủ đề: ai chơi gì) và **iconology** (hiểu "nghĩa thật" của tác phẩm), và nhắc: phải tách **biểu tượng** khỏi **tài liệu về đời sống đương thời**; độ tin cậy của mỗi hình rất khác nhau; luôn **đối chiếu với nguồn văn bản**.

## Ba ví dụ
**1. Cantigas de Santa Maria** (vua Alfonso X, thế kỷ 13): bản chép ở Escorial (gọi là "sách của các nhạc công") có khoảng 416 bài ca xếp theo nhóm mười, kèm **40 tiểu hoạ**, mỗi tranh một hai nhạc công — khoảng **40 loại nhạc cụ**, kể cả đàn kéo vĩ rabab. Nguồn quý cho người phục dựng nhạc cụ [[thoi-ky-trung-co|Trung cổ]]. *(Ký hiệu các bản chép khác nhau giữa các nguồn.)*

**2. Thiên thần chơi nhạc ở Florence**: một quan điểm cho rằng đó chỉ là biểu tượng của âm nhạc thiên đàng. John Stinson (*Angels in Florentine Iconography and Trecento Musical Performance*) tìm thấy sổ chi cho thấy nhạc công được trả tiền khi "**làm thiên thần**" (*fecerunt angelos*), và các hội đoàn hát lauda mặc đồ thiên thần — tức là sau một số bức tranh có **một buổi diễn thật**.

**3. Vermeer — *The Music Lesson***: cây virginal trong tranh nhiều khả năng từ xưởng Ruckers ở Antwerp, nắp đàn có câu *MUSICA LETITIAE COMES MEDICINA DOLORUM* ("âm nhạc — bạn của niềm vui, thuốc của nỗi buồn"). Nhạc cụ được vẽ rất thật, nhưng cảnh có thể mang nghĩa biểu tượng về tình yêu, sự hoà hợp — tên "Bài học âm nhạc" chỉ đặt từ thế kỷ 19. Về loại đàn: [[dan-phim-co]].

## Việt Nam
- Năm 2023, tạp chí *Antiquity* công bố hai **gạc hươu** từ di chỉ **Gò Ô Chùa** (Long An, sơ kỳ Kim khí), hơn 2.000 năm tuổi, được diễn giải là **nhạc cụ dây một dây** và so sánh với đàn K'ny — đây là **khảo cổ học** nhạc cụ hơn là biểu tượng học, nhưng cùng tinh thần dùng hiện vật làm nguồn. Xem [[am-nhac-co-trung-dai-viet-nam]] và [[nhac-cu-tay-nguyen-va-mien-nui]].
- Hình nhạc công trên [[lich-su-am-nhac-viet-nam|trống đồng]], chạm khắc đình làng là nguồn tiềm năng, nhưng **chưa tìm thấy** nghiên cứu biểu tượng học âm nhạc có bình duyệt về chạm khắc đình.

## Bài tập
*(Gợi ý của thư viện.)* Chọn một bức tranh có nhạc công. Hỏi: (1) nhạc cụ gì, cầm thế nào? (2) có chi tiết nào phi thực tế (số dây, tư thế)? (3) bức tranh có thể mang nghĩa biểu tượng gì? (4) nguồn văn bản nào xác nhận được?
`,
  },
  {
    slug: "am-nhac-hoc-ky-thuat-so",
    title: "Âm nhạc học kỹ thuật số và mã hoá âm nhạc: MIDI, MusicXML, MEI, Humdrum",
    category: 'musicology',
    also: ['basics'],
    aliases: ["âm nhạc học kỹ thuật số", "digital musicology", "mã hoá âm nhạc", "music encoding", "MIDI 1.0", "MusicXML", "MEI", "Music Encoding Initiative", "kern", "nhận dạng nốt nhạc quang học", "OMR", "ấn bản số", "Edirom", "Beethovens Werkstatt"],
    summary: "Để máy tính \"đọc\" được âm nhạc, phải mã hoá nó. Bài so sánh các cách mã hoá chính — MIDI (1983, ghi sự kiện chơi đàn), MusicXML (2004, trao đổi bản nhạc giữa phần mềm), MEI (từ 1999, mã hoá học thuật theo tinh thần TEI), Humdrum (thập niên 1980 – 90, phân tích kho dữ liệu) — cùng thư viện music21, nhận dạng nốt nhạc quang học (OMR), danh mục RISM và các ấn bản phê bình số như Beethovens Werkstatt.",
    refs: [
      ["Mix — 1983: Dave Smith, Sequential Circuits và MIDI", "https://www.mixonline.com/technology/1983-dave-smith-sequential-circuits-midi-specification-383642"],
      ["Wikipedia — MIDI", "https://en.wikipedia.org/wiki/MIDI"],
      ["Recording Academy — Technical Grammy: Kakehashi và Smith", "https://cms.grammy.com/technical-grammy-award-ikutaro-kakehashi-and-dave-smith/"],
      ["Michael Good — MusicXML: the first decade", "https://michaelgood.info/publications/music/musicxml-the-first-decade/"],
      ["Library of Congress — MusicXML format description", "https://www.loc.gov/preservation/digital/formats/fdd/fdd000358.shtml"],
      ["Music Encoding Initiative — About", "https://music-encoding.org/about"],
      ["Music Theory Online — Wild, điểm Humdrum (1996)", "https://mtosmt.org/issues/mto.96.2.7/mto.96.2.7.wild.html"],
      ["ISMIR 2010 — Cuthbert & Ariza, music21 (PDF)", "https://ismir2010.ismir.net/proceedings/ismir2010-108.pdf"],
      ["arXiv — Calvo-Zaragoza et al., Understanding Optical Music Recognition", "https://arxiv.org/abs/1908.03608v3"],
      ["RISM — Annual report 2022", "https://rism.info/new_publications/2023/03/09/annual-report-2022.html"],
      ["MEI — Edirom", "https://music-encoding.org/projects/edirom.html"],
      ["Akademie Mainz — Beethovens Werkstatt", "https://www.adwmainz.de/en/projects/beethovens-werkstatt-genetische-textkritik-und-digitale-musikedition/description.html"],
      ["Edinburgh DataShare — tone–melody trong ca khúc Việt", "https://datashare.ed.ac.uk/handle/10283/2047"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], đi cùng [[am-nhac-hoc-tinh-toan]] và [[van-ban-hoc-am-nhac]]. Phần mềm cho [[thanh-ca-gregorian|bình ca]]: [[gregorio-va-gabc]].

## Bốn cách mã hoá
| Định dạng | Ra đời | Ghi gì | Dùng để |
|---|---|---|---|
| **MIDI** | Trình diễn đầu tiên ở NAMM tháng 1/1983; đặc tả 8/1983; bản chi tiết 1.0 năm 1985 | **Sự kiện chơi**: phím nào, lúc nào, mạnh bao nhiêu (nốt 60 = [[ban-phim|Đô giữa]]) | Nối nhạc cụ điện tử, thu âm, phát lại |
| **MusicXML** | 1.0 tháng 1/2004 (Michael Good, Recordare); W3C Community Group từ 2015; 4.0 năm 2021 | **Bản nhạc**: [[khuong-nhac|khuông]], nốt, dấu, lời | Chuyển bản nhạc giữa các phần mềm ký âm |
| **MEI** | Từ 1999 (Perry Roland, Đại học Virginia), theo tinh thần TEI | Bản nhạc **cùng thông tin học thuật**: biến thể, nguồn, chú giải; có module [[ky-am-binh-ca-gregorian|neume]] | Ấn bản phê bình, thư viện số |
| **Humdrum** (định dạng chính tên là "kern") | Thiết kế thập niên 1980 (David Huron) | Văn bản thuần, mỗi bè một cột | Phân tích kho dữ liệu bằng dòng lệnh |
Dave Smith (Sequential Circuits) và Ikutaro Kakehashi (Roland) nhận giải Grammy Kỹ thuật năm 2013 cho MIDI. Cách gọi [[not-nhac|tên nốt]] MIDI: [[ky-hieu-cao-do-c4-helmholtz-midi]].

**Vì sao MIDI không phải "bản nhạc"?** MIDI ghi *khi nào* phím được nhấn, không ghi nốt đó là Fa♯ hay Sol♭, không ghi luyến hay [[so-chi-nhip|ô nhịp]]. Nhập một file MIDI vào phần mềm ký âm luôn phải sửa nhiều — một bài học tốt về khác biệt giữa **âm thanh** và **ký hiệu** ([[ky-am]]).

## Công cụ phân tích
- **music21** (Michael Scott Cuthbert & Christopher Ariza, ISMIR 2010, MIT): thư viện Python để phân tích bản nhạc ký hiệu — kho chorale Bach trong đó được dùng cho nhiều nghiên cứu (xem [[phoi-chorale-kieu-bach]]).
- **Nhận dạng nốt nhạc quang học** (OMR): biến ảnh bản nhạc thành dữ liệu — ngành đã hơn 50 tuổi, nay chuyển sang học sâu; được định nghĩa như "phép nghịch đảo của mã hoá âm nhạc" (*ACM Computing Surveys*, 2020).

## Danh mục và ấn bản số
- **RISM**: danh mục nguồn âm nhạc quốc tế — hơn 1,15 triệu bản ghi nguồn (báo cáo 2019); RISM Online mới khai trương chính thức theo báo cáo 2022. Xem [[nguon-tra-cuu-am-nhac-hoc]].
- **Edirom**: căn chỉnh ảnh bản thảo với báo cáo phê bình bằng MEI ([[an-ban-urtext|ấn bản]] Weber, Reger).
- **Beethovens Werkstatt** (2014 – 2029/30, Beethoven-Haus Bonn và Detmold/Paderborn): phê bình văn bản "phát sinh" — theo dấu [[ludwig-van-beethoven|Beethoven]] sửa bản thảo — bằng MEI.

## Việt Nam
- Một bộ dữ liệu ở Đại học Edinburgh mã hoá **20 ca khúc phổ thông Việt** để nghiên cứu tương ứng giữa thanh điệu và giai điệu — xem [[am-nhac-va-ngon-ngu]].
- **Chưa tìm thấy** dự án mã hoá MEI/MusicXML nào cho ký âm cổ truyền (hò – xự – xang) hay bản [[dan-tranh|đàn tranh]], [[ca-tru|ca trù]] — một khoảng trống đáng làm.
`,
  },
  {
    slug: "cong-nghiep-am-nhac",
    title: "Công nghiệp âm nhạc: tác quyền, streaming và những con số",
    category: 'musicology',
    also: ['vietnam'],
    aliases: ["công nghiệp âm nhạc", "music industry", "music industries", "tiền tác quyền", "royalty", "quyền liên quan", "neighbouring rights", "tiền bản quyền cơ học", "mechanical royalties", "streaming", "user-centric", "pro-rata", "IFPI", "CISAC", "RIAV", "Công ước Berne"],
    summary: "Âm nhạc kiếm tiền từ ba nguồn — thu âm, xuất bản (tác quyền) và biểu diễn trực tiếp — và các nhà nghiên cứu nhấn mạnh đó là nhiều \"ngành công nghiệp\" chứ không phải một. Bài giải thích các loại tiền bản quyền (biểu diễn, cơ học, quyền liên quan), số liệu toàn cầu mới nhất (doanh thu thu âm 31,7 tỉ USD năm 2025, streaming gần 70%), cuộc tranh luận cách chia tiền streaming (pro-rata hay user-centric), và bức tranh Việt Nam: Công ước Berne (2004), VCPMC (2002) thu hơn 424 tỉ đồng năm 2025, thị phần các nền tảng nghe nhạc.",
    refs: [
      ["Williamson & Cloonan, \"Rethinking the music industry\", Popular Music 26(2), 2007", "https://eprints.gla.ac.uk/7192"],
      ["Digital Music News — IFPI Global Music Report 2026", "https://www.digitalmusicnews.com/2026/03/18/global-music-industry-revenue-2025/"],
      ["CISAC — Global Collections Report 2025", "https://www.cisac.org/cisac-global-collections-report-2025"],
      ["Yle — về user-centric và nghiên cứu Đại học Aalto", "https://yle.fi/a/3-10086033"],
      ["Journal of the Academy of Marketing Science (2022) — pro-rata và user-centric", "https://link.springer.com/article/10.1007/s11747-022-00875-6"],
      ["Music Week — DCMS Committee: Economics of Music Streaming (2021)", "https://www.musicweek.com/labels/read/streaming-needs-a-complete-reset-dcms-committee-report-calls-for-government-to-fix-music-industry/083703"],
      ["WIPO — Berne Notification No. 241 (Việt Nam)", "https://www.wipo.int/treaties/en/notifications/berne/treaty_berne_241.html"],
      ["Nhân Dân — 20 năm bảo vệ quyền tác giả âm nhạc Việt Nam", "https://nhandan.vn/20-nam-dau-an-thang-tram-trong-bao-ve-quyen-tac-gia-am-nhac-viet-nam-post715999.html"],
      ["VOV — VCPMC thu hơn 393 tỷ đồng năm 2024", "https://vov.vn/van-hoa/am-nhac/vcpmc-thu-hon-393-ty-dong-tien-ban-quyen-tac-gia-am-nhac-trong-nam-2024-post1147355.vov"],
      ["Báo Văn hoá — thu trên 424 tỉ đồng tiền tác quyền năm 2025", "https://baovanhoa.vn/nghe-thuat/thu-tren-424-ti-dong-tien-tac-quyen-am-nhac-trong-nam-2025-196779.html"],
      ["Tuổi Trẻ News — Spotify vào Việt Nam (2018)", "https://tuoitrenews.vn/news/business/20180313/spotify-challenges-apple-music-in-vietnams-streaming-market/44516.html"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], nối với [[xa-hoi-hoc-am-nhac]], [[ban-quyen-am-nhac-viet-nam]] và [[nghien-cuu-am-nhac-dai-chung]].

## Một hay nhiều ngành?
Paul Williamson và [[am-nhac-chinh-tri-va-kiem-duyet|Martin Cloonan]] (*Popular Music* 26/2, 2007) đề nghị nói "**các ngành công nghiệp âm nhạc**" (số nhiều): coi âm nhạc là một ngành duy nhất làm méo bức tranh kinh tế thật. Ba mảng thường được nêu: **thu âm**, **xuất bản** (quản lý tác phẩm), **biểu diễn trực tiếp**.

## Các loại tiền bản quyền
| Loại | Trả cho | Khi nào |
|---|---|---|
| **Biểu diễn** (*performance*) | Tác giả, nhà xuất bản | Tác phẩm được phát sóng, biểu diễn công cộng |
| **Cơ học** (*mechanical*) | Tác giả, nhà xuất bản | Tác phẩm được **sao chép**: đĩa, tải về, phát trực tuyến |
| **Quyền liên quan** (*neighbouring rights*) | Người biểu diễn, chủ bản ghi | **Bản ghi âm** được phát công cộng |
*(Ví dụ ở Anh: PRS thu tiền biểu diễn, MCPS thu tiền cơ học — sáp nhập 1997 thành PRS for Music; PPL thu quyền liên quan. Nguồn chủ yếu là hướng dẫn trong ngành.)* Phân biệt **tác phẩm** (bài hát) với **bản ghi** (một lần thu bài hát đó) là chìa khoá.

## Số liệu toàn cầu
- **IFPI Global Music Report 2026** (số liệu 2025, theo báo chuyên ngành): doanh thu thu âm toàn cầu **31,7 tỉ USD**, tăng 6,4%, năm thứ 11 liên tiếp; streaming chiếm **69,6%**, riêng thuê bao trả phí **52,4%**; 837 triệu tài khoản trả phí; [[lich-su-thu-am|đĩa than]] tăng 13,7%.
- **CISAC** (2025, số liệu 2024): 228 hội quản lý tập thể ở 111 nước thu tổng cộng 13,97 tỉ euro cho tác giả; riêng âm nhạc 12,59 tỉ (~90%); mảng số lần đầu vượt 5 tỉ euro.

## Chia tiền streaming thế nào cho công bằng?
| Mô hình | Cách chia |
|---|---|
| **Pro-rata** (đang dùng phổ biến) | Gộp toàn bộ doanh thu, chia theo tỉ lệ lượt nghe trên toàn nền tảng |
| **User-centric** | Tiền của **mỗi người dùng** chỉ chia cho các nghệ sĩ **người đó** nghe |
- Nghiên cứu của Đại học Aalto trên dữ liệu Spotify: chuyển sang user-centric sẽ dịch tiền từ nhóm đỉnh xuống nhóm giữa và dưới (phần của 0,4% nghệ sĩ hàng đầu giảm từ 10% xuống 5,6%). Một nghiên cứu khác (2022) cho rằng với pro-rata, **người nghe nhiều** quyết định tiền chảy về đâu.
- SoundCloud áp dụng user-centric cho khoảng 100.000 nghệ sĩ độc lập (2021). Uỷ ban DCMS của Hạ viện Anh (7/2021) kết luận streaming "cần được thiết lập lại hoàn toàn".

## Việt Nam
- **Công ước Berne**: Việt Nam nộp văn kiện gia nhập 26/7/2004, có hiệu lực **26/10/2004**; **Công ước Rome** (quyền liên quan) có hiệu lực 1/3/2007.
- **VCPMC** (Trung tâm Bảo vệ Quyền tác giả Âm nhạc Việt Nam): thành lập 19/4/2002 (theo báo chí), trực thuộc Hội [[nhac-si-viet-nam|Nhạc sĩ Việt Nam]]; giám đốc đầu tiên là nhạc sĩ [[pho-duc-phuong|Phó Đức Phương]]; 274 nhạc sĩ thành viên ban đầu.
| Năm | VCPMC thu (theo báo chí) |
|---|---|
| 2018 | hơn 103 tỉ đồng |
| 2023 | hơn 344 tỉ |
| 2024 | hơn 393 tỉ — trong đó mảng số (ứng dụng, website) hơn 305 tỉ |
| 2025 | hơn 424 tỉ |
- **RIAV** (Hiệp hội Công nghiệp Ghi âm) quản lý quyền của nhà sản xuất bản ghi; từng gây tranh cãi với đề xuất thu 2.000 đồng/bài karaoke.
- **Nghe nhạc**: Zing MP3 ra đời 2007; Spotify vào Việt Nam tháng 3/2018. Một khảo sát quý I/2024 (dẫn qua blog một nhà phân phối — nguồn yếu): YouTube tiếp cận 77% người nghe, Zing MP3 52%, NhacCuaTui 32%, Spotify 28%.
Xem thêm [[vpop-rap-viet]] và [[am-nhac-viet-nam-sau-1975]].
`,
  },
  {
    slug: "nghien-cuu-nhac-phim",
    title: "Nghiên cứu nhạc phim: diegetic, leitmotif và \"giai điệu không được nghe\"",
    category: 'musicology',
    also: ['genres', 'listening'],
    aliases: ["nghiên cứu nhạc phim", "film music studies", "diegetic", "nondiegetic", "nhạc nội cảnh", "nhạc ngoại cảnh", "Unheard Melodies", "Claudia Gorbman", "Composing for the Films", "Michel Chion", "audio-vision", "synchresis", "temp track", "nhạc tạm", "Mickey-Mousing", "leitmotif trong phim"],
    summary: "Nhạc phim được nghiên cứu nghiêm túc từ khi Eisler (và Adorno) viết Composing for the Films (1947) và nhất là từ Unheard Melodies của Claudia Gorbman (1987) — đưa vào cặp khái niệm nhạc nội cảnh (diegetic) / ngoại cảnh (nondiegetic) và bảy nguyên tắc của nhạc phim Hollywood cổ điển. Bài trình bày các khái niệm đó, \"audio-vision\" và \"synchresis\" của Michel Chion, leitmotif từ King Kong (1933) đến Star Wars, chuyện \"nhạc tạm\" (temp track), và giải Kim Tước cho nhạc phim Thời xa vắng (Đặng Hữu Phúc, 2005).",
    refs: [
      ["Rockefeller Archive Center — Eisler's Film Music Project (PDF)", "https://public.3.basecamp.com/p/TF3uGQ8y7yaNxNgVvTrbfJqh/attachments/ae32b82a-f74f-11ee-8d88-f28505eae2ff/download/composing-the-media-eisler-rockefeller.pdf"],
      ["WorldCat — Gorbman, Unheard Melodies (1987)", "https://search.worldcat.org/oclc/15053054"],
      ["Project MUSE — Kalinak, Settling the Score (1992)", "https://muse.jhu.edu/book/8442"],
      ["Lähikuva — về Chion, Audio-Vision", "https://journal.fi/lahikuva/article/view/116453/68871"],
      ["LibreTexts — Max Steiner and the leitmotivic score", "https://human.libretexts.org/Courses/Prince_Georges_Community_College/Music_Appreciation%3A_A_Topical_Approach_to_Music_Genre_and_Style/13%3A_Music_in_Film/13.02%3A_Early_Hollywood_Scoring-_Max_Steiner_and_the_Leitmotivic_Score"],
      ["The Ringer — về các chủ đề trong Star Wars (2020)", "https://www.theringer.com/star-wars/2020/1/9/21058016/rise-of-skywalker-star-wars-score-john-williams-last-soundtrack"],
      ["Cambridge — Popular Music: the music editor and the temp track", "https://www.cambridge.org/core/journals/popular-music/article/abs/role-of-the-music-editor-and-the-temp-track-as-blueprint-for-the-score-source-music-and-scource-music-of-films/C98ADB70BDE68EE359E7A502DE62E88D"],
      ["University of Illinois Press — Music and the Moving Image", "https://www.press.uillinois.edu/journals/mmi.html"],
      ["Tuổi Trẻ — Bao giờ Kim Tước lại gọi tên nhạc phim Việt Nam (2023)", "https://tuoitre.vn/bao-gio-kim-tuoc-lai-goi-ten-nhac-phim-viet-nam-20231019100600012.htm"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]]. [[the-loai-am-nhac|Thể loại]] và lịch sử nhạc phim: [[nhac-phim-va-tro-choi]].

## Các văn bản nền
| Năm | Văn bản | Ý chính |
|---|---|---|
| 1947 | [[hanns-eisler|Hanns Eisler]], ***Composing for the Films*** (Oxford University Press, New York) | Viết xong 1944 từ một dự án nhạc phim do Quỹ Rockefeller tài trợ; [[adorno-va-am-nhac|Adorno]] rút tên đồng tác giả ngay trước khi in (được cho là để tránh Uỷ ban Hoạt động phi Mỹ) — mức đóng góp của ông còn tranh luận |
| 1987 | Claudia Gorbman, ***Unheard Melodies: Narrative Film Music*** | Đưa cặp **diegetic / nondiegetic** từ lý thuyết tự sự vào nghiên cứu nhạc phim; bảy nguyên tắc của nhạc phim Hollywood cổ điển |
| 1990 / 1994 | Michel Chion, ***L'Audio-vision*** (bản Anh do Gorbman dịch) | "Giá trị cộng thêm", **synchresis**, "hợp đồng nghe – nhìn" |
| 1992 | Kathryn Kalinak, ***Settling the Score*** | Nghiên cứu trường hợp: Korngold, Steiner, Herrmann, Raksin; về sau cả [[john-williams|John Williams]] |

## Nội cảnh và ngoại cảnh
| | Nhạc **nội cảnh** (*diegetic*) | Nhạc **ngoại cảnh** (*nondiegetic*) |
|---|---|---|
| Nguồn | Có trong thế giới phim (radio, ban nhạc trong cảnh, nhân vật hát) | Chỉ khán giả nghe (dàn nhạc nền) |
| Nhân vật nghe được? | Có | Không |
Nhiều cảnh hay nhất **chuyển** giữa hai lớp — một bài hát từ radio dần thành nhạc nền.

## Bảy nguyên tắc của Gorbman
Nhạc phim Hollywood cổ điển: (1) **vô hình** (không thấy nguồn), (2) **"không được nghe"** (khán giả không chú ý đến nó), (3) **ký hiệu của cảm xúc**, (4) **dẫn dắt tự sự**, (5) **liên tục**, (6) **thống nhất**, và (7) **linh hoạt**: một bản nhạc có thể phá nguyên tắc nào đó "nếu việc phá ấy phục vụ các nguyên tắc còn lại". Tựa sách — "[[giai-dieu|Giai điệu]] không được nghe" — chính là nguyên tắc (2).

## Chion: synchresis
**Synchresis** (synchronism + synthesis): khi âm thanh và hình ảnh xảy ra cùng lúc, não **tự hàn** chúng thành một sự kiện. "Giá trị cộng thêm": âm thanh làm ta tưởng thông tin đến từ hình ảnh. Nối với [[phan-luong-thinh-giac]].

## Leitmotif
- Nhạc *King Kong* (1933) của Max Steiner thường được dẫn là một trong những phim đầu tiên dùng **leitmotif** kiểu [[richard-wagner|Wagner]]; Steiner cũng nổi tiếng với lối "Mickey-Mousing" — nhạc bám sát từng động tác.
- *Star Wars* của John Williams: Frank Lehman (Đại học Tufts) lập danh mục chủ đề; con số thay đổi theo tiêu chí và thời điểm (55 leitmotif + 43 [[motif|motif]] phụ theo Alex Ross năm 2017; 72 theo The Ringer năm 2020).
Kỹ thuật [[bien-doi-chu-de|biến đổi chủ đề]] trong nhạc [[thoi-ky-lang-man|Lãng mạn]] chính là gốc của lối viết này.

## Nhạc tạm (temp track)
Nhạc có sẵn được ghép tạm khi dựng phim; rủi ro là đạo diễn "nghiện" bản tạm. *2001: A Space Odyssey* (Kubrick, 1968) bỏ hẳn bản nhạc đặt viết của Alex North để giữ các bản cổ điển dùng tạm. Tạp chí *Popular Music* có bài về vai trò của biên tập nhạc và bản tạm như "bản thiết kế" cho nhạc phim.

## Tạp chí và Việt Nam
- *Music and the Moving Image* (University of Illinois Press, từ 2008) và *Journal of Film Music*.
- Nhạc phim ***Thời xa vắng*** (đạo diễn Hồ Quang Minh, 2004) của [[dang-huu-phuc|Đặng Hữu Phúc]] đoạt giải **Kim Tước cho âm nhạc xuất sắc** tại LHP Quốc tế Thượng Hải 2005; Tuổi Trẻ (2023) ghi nhận từ đó chưa nhạc phim Việt nào đoạt giải quốc tế lớn.
`,
  },
  {
    slug: "di-san-phi-vat-the-va-am-nhac",
    title: "Di sản văn hoá phi vật thể và âm nhạc: UNESCO, Việt Nam và những phê phán",
    category: 'musicology',
    also: ['vietnam'],
    aliases: ["di sản văn hoá phi vật thể", "di sản phi vật thể", "intangible cultural heritage", "Công ước 2003", "UNESCO di sản", "danh sách bảo vệ khẩn cấp", "danh sách đại diện", "Kirshenblatt-Gimblett", "di sản hoá", "heritagization", "metacultural"],
    summary: "Công ước UNESCO 2003 về bảo vệ di sản văn hoá phi vật thể (hiệu lực 2006) đã biến nhiều truyền thống âm nhạc thành \"di sản nhân loại\" — Việt Nam có nhã nhạc, cồng chiêng, quan họ, ca trù, hát xoan, đờn ca tài tử, chầu văn trong thờ Mẫu… Bài trình bày cơ chế (danh sách đại diện, danh sách cần bảo vệ khẩn cấp), bảng các di sản âm nhạc Việt Nam với năm ghi danh đã kiểm chứng, trường hợp hát xoan — di sản đầu tiên trên thế giới được chuyển từ danh sách khẩn cấp sang danh sách đại diện (2017) — và phê phán của Barbara Kirshenblatt-Gimblett về di sản như một \"sản xuất siêu văn hoá\".",
    refs: [
      ["UNESCO — Text of the Convention for the Safeguarding of the ICH", "https://ich.unesco.org/en/convention"],
      ["UN News — Convention enters into force (2006)", "https://news.un.org/en/story/2006/04/175972"],
      ["UNESCO — Masterpieces (PDF)", "https://ich.unesco.org/doc/src/00036-EN.pdf"],
      ["Vietnam Investment Review — Vietnam's UNESCO-recognised intangible cultural heritage", "https://vir.com.vn/vietnams-unesco-recognised-intangible-cultural-heritage-91085.html"],
      ["Cục Hợp tác quốc tế — Hát Xoan ra khỏi danh sách khẩn cấp (2017)", "https://icd.gov.vn/hat-xoan-phu-tho-duoc-dua-ra-khoi-danh-sach-di-san-van-hoa-phi-vat-the-can-bao-ve-khan-cap-va-ghi-danh-tai-danh-sach-di-san-van-hoa-phi-vat-the-dai-dien-cua-nhan-loai"],
      ["UNESCO — Decision 8.COM 8.31 (Đờn ca tài tử)", "https://ich.unesco.org/en/decisions/8.COM/8.31"],
      ["VIR — Vietnam's 15 elements on UNESCO list", "https://vir.com.vn/vietnams-15-elements-on-unesco-recognised-intangible-cultural-heritage-list-98775.html"],
      ["Journal of Ethnology and Folkloristics — về Kirshenblatt-Gimblett (PDF)", "https://ojs.utlib.ee/index.php/JEF/article/download/18886/13570/22283"],
      ["UC Press — Kirshenblatt-Gimblett, Destination Culture (1998)", "https://ucpress.edu/books/destination-culture/paper"],
    ],
    body: `
Một bài trong khung [[am-nhac-hoc]], nối [[dan-toc-nhac-hoc]] với [[am-nhac-viet-nam]].

## Cơ chế UNESCO
- **Công ước về Bảo vệ Di sản Văn hoá Phi vật thể** được Đại hội đồng UNESCO thông qua ngày **17/10/2003**, có hiệu lực **20/4/2006**.
- Trước đó có các đợt công nhận **"Kiệt tác truyền khẩu và phi vật thể của nhân loại"** (2001, 2003, 2005); theo Điều 31, các kiệt tác này được chuyển vào **Danh sách đại diện** (ở Việt Nam: năm 2008).
- Hai danh sách chính: **Danh sách đại diện** và **Danh sách cần bảo vệ khẩn cấp**.

## Di sản âm nhạc – trình diễn của Việt Nam
| Di sản | Danh sách | Năm | Bài trong thư viện |
|---|---|---|---|
| Nhã nhạc cung đình Huế | Kiệt tác → Đại diện | 2003 → 2008 | [[ca-hue-nha-nhac]] |
| Không gian văn hoá Cồng chiêng Tây Nguyên | Kiệt tác → Đại diện | 2005 → 2008 | [[cong-chieng]] |
| Dân ca Quan họ Bắc Ninh | Đại diện | 2009 | [[quan-ho]] |
| Ca trù | **Khẩn cấp** | 2009 | [[ca-tru]] |
| Hát Xoan Phú Thọ | Khẩn cấp → **Đại diện** | 2011 → 2017 | [[hat-xoan-hat-van-then]] |
| Đờn ca tài tử Nam Bộ | Đại diện | quyết định 8.COM 8.31 (kỳ họp thứ 8, 2013) | [[don-ca-tai-tu]] |
| Thực hành Tín ngưỡng thờ Mẫu Tam phủ (gồm hầu đồng, chầu văn) | Đại diện | 12/2016 | [[hat-xoan-hat-van-then]] |
| Dân ca Ví, Giặm Nghệ Tĩnh; Nghệ thuật Bài chòi Trung Bộ; Thực hành Then | Đại diện | *năm chưa đối chiếu được với trang UNESCO* | [[dan-ca-viet-nam]] |
Năm 2026 Việt Nam được báo chí ghi nhận có 17 di sản trong các danh sách (kể cả di sản không phải âm nhạc).

## Hát Xoan: lần đầu tiên trên thế giới
Hát Xoan vào danh sách khẩn cấp từ 24/11/2011; ngày **8/12/2017** (kỳ họp thứ 12, Jeju) được chuyển sang Danh sách đại diện — **di sản đầu tiên trên thế giới** đi được con đường này.

## Phê phán: di sản như "sản xuất siêu văn hoá"
- Barbara Kirshenblatt-Gimblett, *"Intangible Heritage as Metacultural Production"* (*Museum International*, 2004; in lại 2014): việc lập danh sách là một thao tác **"siêu văn hoá"** — nó làm thay đổi quan hệ giữa người thực hành và chính thực hành của họ; trọng tâm dịch từ "kiệt tác" sang **người nắm giữ** cùng môi trường sống của họ.
- Từ đó nảy ra những câu hỏi mà [[dan-toc-nhac-hoc|dân tộc nhạc học]] hay đặt: ai quyết định dạng "chuẩn" của một làn điệu? Biểu diễn cho du khách có làm đổi bản chất? Danh hiệu giúp hay làm đông cứng truyền thống?
*Thư viện chưa tìm được (trong vòng này) các nghiên cứu phê phán riêng về trường hợp Việt Nam — vd. về quan họ, ca trù sau ghi danh.*

## Câu hỏi thảo luận
*(Gợi ý của thư viện.)* So sánh [[ca-tru]] trước và sau 2009: số câu lạc bộ, cách truyền dạy, không gian diễn. Điều gì thay đổi nhờ danh hiệu, điều gì có thể đã mất? Xem thêm [[giai-thoai-am-nhac-viet-nam]].
`,
  },
]
