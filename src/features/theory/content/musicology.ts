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
| Hệ thống | Tâm lý người nghe | [[tam-ly-nguoi-nghe-tong-quan]], [[so-thich-am-nhac-va-tinh-cach]], [[su-quen-thuoc-va-hieu-ung-tiep-xuc]], [[rung-minh-khi-nghe-nhac]], [[nhac-ket-trong-dau]], [[am-nhac-va-tri-nho-tu-truyen]], [[groove-va-cam-giac-muon-chuyen-dong]], [[nhac-nen-va-hieu-suat-lam-viec]], [[am-nhac-va-hanh-vi-tieu-dung]], [[tam-ly-nghe-nhac-thoi-streaming]], [[am-nhac-va-ban-sac-xa-hoi]] |
| Hệ thống | Nhận thức và não: khác biệt cá nhân | [[mu-am-bam-sinh]], [[cam-giac-dong-cam-am-nhac]], [[nao-nguoi-choi-nhac-va-tinh-deo-dai]], [[dong-bo-nhip-va-cuon-theo]] |
| Hệ thống | Âm nhạc các nền văn hoá | [[am-nhac-co-dien-an-do]], [[maqam-a-rap-va-trung-dong]], [[ly-thuyet-gamelan-java-va-bali]], [[am-nhac-chau-phi-ha-sahara]], [[am-nhac-truyen-thong-nhat-ban]], [[am-nhac-truyen-thong-trung-hoa]] |
| Ứng dụng | Công nghiệp âm nhạc và bản quyền | [[cong-nghiep-am-nhac]], [[hang-dia-va-cac-tap-doan-lon]], [[xuat-ban-am-nhac-va-cac-loai-tac-quyen]], [[kinh-te-hoc-streaming]], [[am-nhac-bieu-dien-truc-tiep-va-luu-dien]], [[a-r-va-phat-trien-nghe-si]], [[bang-xep-hang-am-nhac]], [[ban-quyen-am-nhac-quoc-te]], [[to-chuc-quan-ly-tap-the-quyen-tac-gia]], [[vi-pham-ban-quyen-va-chia-se-tep]], [[cong-nghiep-am-nhac-viet-nam]], [[mo-hinh-cong-nghiep-k-pop]] |
| Ứng dụng | Âm nhạc và sức khoẻ | [[am-nhac-tri-lieu]], [[am-nhac-va-sa-sut-tri-tue]], [[suc-khoe-nguoi-choi-dan]] |
| Ứng dụng | Sư phạm | [[lo-trinh-luyen-tai-su-pham]], [[su-pham-piano]] |
| Ứng dụng | Tính toán và công nghệ | [[am-nhac-hoc-tinh-toan]] |
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
  {
    slug: "hang-dia-va-cac-tap-doan-lon",
    title: "Hãng đĩa và các tập đoàn thu âm lớn",
    category: 'musicology',
    aliases: ["hãng thu âm", "hãng đĩa lớn", "Big Three", "major labels", "record labels", "independent labels", "hãng đĩa độc lập"],
    summary: "Bài viết trình bày lịch sử hình thành các hãng đĩa, quá trình hợp nhất dẫn tới \"Big Three\" (Universal, Sony, Warner), thị phần theo các báo cáo IFPI và MIDiA, và vai trò của khu vực hãng đĩa độc lập.",
    refs: [
      ["Columbia Records – Wikipedia", "https://en.wikipedia.org/wiki/Columbia_Records"],
      ["How four labels became three major record labels – RouteNote", "https://create.routenote.com/blog/how-four-labels-became-three-major-record-labels/"],
      ["Reflecting on EMI, an industry giant felled in 2012 – NPR", "https://www.npr.org/sections/therecord/2012/12/29/168159170/reflecting-on-emi-an-industry-giant-felled-in-2012"],
      ["Sony BMG – Wikipedia", "https://en.wikipedia.com/wiki/Sony_BMG"],
      ["MIDiA Research: Global music growth slows in 2024 – Music Week", "https://www.musicweek.com/labels/read/midia-research-global-music-growth-slows-in-2024-with-streaming-s-share-of-revenue-actually-dipping/091573"],
      ["Music market shares: independent labels and artists are even bigger than you thought – MIDiA", "https://www.midiaresearch.com/blog/music-market-shares-independent-labels-and-artists-are-even-bigger-than-you-thought"],
      ["IFPI Global Music Report 2025 – Music Week", "https://www.musicweek.com/labels/read/ifpi-global-music-report-2025-paid-streaming-lifts-the-market-but-overall-revenue-growth-slows/091626"],
      ["Merlin 10th anniversary Impact Report – The Music Network", "https://themusicnetwork.com/news/merlin-10th-anniversary-impact-report"],
    ],
    body: `
## Hãng đĩa là gì
**Hãng đĩa** (record label) là doanh nghiệp đầu tư vào việc thu âm, sở hữu hoặc được cấp phép khai thác **bản ghi âm gốc** (master), rồi phân phối, quảng bá và thu tiền từ bản ghi đó. Về mặt pháp lý, quyền đối với bản ghi khác với quyền tác giả của bài hát (xem [[xuat-ban-am-nhac-va-cac-loai-tac-quyen]]). Bài tổng quan về toàn ngành nằm ở [[cong-nghiep-am-nhac]]; bài này đi sâu vào cấu trúc sở hữu của khâu thu âm.

Một hãng đĩa điển hình đảm nhận bốn chức năng: tìm và ký hợp đồng nghệ sĩ ([[a-r-va-phat-trien-nghe-si|A&R]]), cấp vốn sản xuất (thường dưới dạng tiền ứng trước), phân phối (vật lý và số) và marketing. Đổi lại, hãng giữ phần lớn doanh thu từ bản ghi.

## Từ máy hát đến tập đoàn đa quốc gia
Ngành thu âm ra đời cùng máy hát (xem [[lich-su-thu-am]]). **Columbia Phonograph Company** được Edward D. Easton thành lập năm 1889 tại Washington, D.C., và thường được xem là thương hiệu lâu đời nhất còn tồn tại trong lĩnh vực ghi âm; ngày thành lập chính xác được các nguồn ghi khác nhau (15 hoặc 22/1/1889, có nguồn ghi 1888). Ban đầu Columbia bán máy hát Edison rồi mới tự sản xuất bản ghi.

Suốt thế kỷ 20, các hãng lớn liên tục thâu tóm hãng nhỏ và thâu tóm lẫn nhau. Cuối thập niên 1990 thị trường còn "Big Six", rồi "Big Five", "Big Four" sau các thương vụ:

::timeline 1889=Columbia_thành_lập 1999=Universal_mua_PolyGram 2004=Sony_BMG_liên_doanh 2008=Sony_mua_lại_50%_của_Bertelsmann 2012=EMI_bị_chia_tách | Các mốc hợp nhất dẫn tới "Big Three"

- **1999**: Universal Music Group (UMG) mua PolyGram.
- **2004**: Sony Music và Bertelsmann Music Group (BMG) lập liên doanh 50–50 **Sony BMG** (các nguồn ghi ngày hoàn tất khác nhau).
- **2008**: Sony mua lại 50% cổ phần của Bertelsmann với giá khoảng 1,2 tỷ USD, đổi tên thành Sony Music Entertainment; Bertelsmann tái lập mảng nhạc thành BMG Rights Management.
- **2012**: EMI – hãng lớn thứ tư – bị Citigroup chia tách: mảng thu âm về tay Universal, mảng xuất bản về một liên minh do Sony dẫn đầu. Thương vụ bị các nhóm giám sát phản đối, được Quốc hội Mỹ điều trần và cơ quan châu Âu xem xét. Để được duyệt, một số tài sản bị tách ra; Parlophone sau đó thuộc Warner Music.

Kết quả là ba tập đoàn "major" hiện nay: **Universal Music Group**, **Sony Music Entertainment** và **Warner Music Group**. Mỗi tập đoàn sở hữu hàng chục nhãn con (ví dụ Capitol, Virgin thuộc Universal; Columbia, RCA thuộc Sony; Atlantic, Parlophone thuộc Warner) và đều có công ty xuất bản riêng.

## Quy mô thị trường và thị phần
Theo **IFPI Global Music Report 2025**, doanh thu thu âm toàn cầu (doanh thu thương mại) năm 2024 đạt **29,6 tỷ USD**, tăng 4,8%; streaming chiếm khoảng 69%. Báo cáo 2026 cho biết năm 2025 đạt 31,7 tỷ USD (+6,4%). **MIDiA Research** dùng cách tính rộng hơn (gồm cả nghệ sĩ tự phát hành và một số "quyền mở rộng") nên ra con số 36,2 tỷ USD cho 2024 — hai số liệu không mâu thuẫn mà khác định nghĩa.

Về thị phần, MIDiA ước tính khu vực **ngoài ba major** chiếm 29,7% năm 2024 (29,2% năm 2023), nghĩa là ba major cộng lại khoảng 70%. Nếu đo theo **quyền sở hữu bản ghi** thay vì theo kênh phân phối, MIDiA cho rằng phần "độc lập" lên tới 46,7% — vì nhiều hãng độc lập phân phối qua công ty con của major. Thị phần riêng từng major nằm trong báo cáo trả phí; một số nguồn thứ cấp (Music & Copyright qua Statista) cho Universal khoảng 32–33% doanh thu số năm 2023 và Warner khoảng 17%, nhưng các con số này chưa được kiểm chứng đầy đủ.

| Chỉ số | Giá trị | Nguồn, năm |
|---|---|---|
| Doanh thu thu âm toàn cầu | 29,6 tỷ USD | IFPI, 2024 |
| Doanh thu theo định nghĩa rộng | 36,2 tỷ USD | MIDiA, 2024 |
| Thị phần ngoài ba major | 29,7% | MIDiA, 2024 |
| Thị phần độc lập theo sở hữu | 46,7% | MIDiA, 2024 |

## Hãng đĩa độc lập
**Hãng độc lập** (indie) là hãng không thuộc sở hữu của ba major. Nhiều hãng nổi tiếng như Beggars Group, Domino, Sub Pop, Epitaph, Merge. Để thương lượng với các nền tảng số, các hãng độc lập lập ra **Merlin** – cơ quan cấp phép quyền số; theo báo cáo kỷ niệm 10 năm (khoảng 2018), thành viên Merlin chiếm hơn 12% thị trường thu âm số toàn cầu, với hơn 20.000 hãng ở 55 quốc gia.

Ranh giới "độc lập" ngày càng mờ: nhiều hãng indie phân phối qua các công ty thuộc major, và nghệ sĩ có thể tự phát hành qua dịch vụ phân phối số (xem [[a-r-va-phat-trien-nghe-si]]).

## Nguồn và độ tin cậy
Số liệu tổng thị trường của IFPI và MIDiA là đáng tin nhưng khác phạm vi tính. Thị phần từng major thay đổi theo năm và theo cách đo (doanh thu, số lượt stream, sở hữu); nên luôn ghi rõ nguồn và năm khi trích dẫn.

Xem thêm: [[cong-nghiep-am-nhac]], [[kinh-te-hoc-streaming]], [[lich-su-thu-am]], [[xa-hoi-hoc-am-nhac]].
`,
  },
  {
    slug: "xuat-ban-am-nhac-va-cac-loai-tac-quyen",
    title: "Xuất bản âm nhạc và các loại tiền bản quyền",
    category: 'musicology',
    aliases: ["các loại tác quyền", "music royalties", "quyền biểu diễn", "performance royalties", "sync licensing", "master và composition"],
    summary: "Giải thích hoạt động xuất bản âm nhạc, sự phân biệt giữa quyền đối với tác phẩm (composition) và bản ghi (master), cùng các dòng tiền bản quyền chính: cơ học, biểu diễn, đồng bộ hóa, in ấn và quyền liên quan; kèm số liệu CISAC và VCPMC.",
    refs: [
      ["CISAC: The History of Collective Management (PDF)", "https://www.cisac.org/sites/main/files/files/2020-11/CISACUniversity_The_History_of_Collective_Management_FINAL.pdf"],
      ["American Society of Composers, Authors and Publishers – Wikipedia", "https://en.wikipedia.org/wiki/American_Society_of_Composers,_Authors_and_Publishers"],
      ["Global songwriter royalty collections reached $13.6bn in 2024 – MBW", "https://www.musicbusinessworldwide.com/global-songwriter-royalty-collections-reached-13-6bn-in-2024-up-7-2-cisac-reports"],
      ["CISAC Global Collections Report 2025 – GEMA", "https://www.gema.de/en/w/cisac-global-collections-report-2025-creators-royalties-powered-by-digital-growth"],
      ["Copyright Royalty Board officially accepts new rates – MBW", "https://www.musicbusinessworldwide.com/crb-officially-accepts-settlement-that-will-see-songwriters-paid-more-in-the-us-over-the-next-5-years/"],
      ["Songwriter mechanical royalty rates settlement – Grammy.com", "https://www.grammy.com/news/songwriter-mechanical-royalty-rates-proposed-settlement-five-years-what-to-know/"],
      ["VCPMC thu hơn 393 tỷ đồng tiền bản quyền năm 2024 – VOV", "https://vov.vn/van-hoa/am-nhac/vcpmc-thu-hon-393-ty-dong-tien-ban-quyen-tac-gia-am-nhac-trong-nam-2024-post1147355.vov"],
      ["The MLC License Availability Date Was January 1 – Copyright Alliance", "https://copyrightalliance.org/mlc-license-availability-date-january-1-what-this-means/"],
    ],
    body: `
## Hai bản quyền trong một bài hát
Mỗi bản thu âm thương mại thường chứa **hai lớp quyền** tách biệt:

| | Tác phẩm (composition) | Bản ghi (master) |
|---|---|---|
| Đối tượng | Giai điệu, hòa âm, lời | Bản ghi âm cụ thể |
| Chủ sở hữu điển hình | Nhạc sĩ, nhà xuất bản | Hãng đĩa hoặc nghệ sĩ tự phát hành |
| Dòng tiền chính | Cơ học, biểu diễn, in ấn, phần sync của tác phẩm | Doanh thu bán và stream, quyền liên quan, phần sync của bản ghi |

Một ca khúc của [[nhac-trinh|Trịnh Công Sơn]] do nhiều ca sĩ thu âm có **một** tác phẩm nhưng **nhiều** master. Khâu master được trình bày ở [[hang-dia-va-cac-tap-doan-lon]]; bài này tập trung vào phía tác phẩm. Khung pháp lý tại Việt Nam xem [[ban-quyen-am-nhac-viet-nam]].

## Nhà xuất bản âm nhạc làm gì
Nghề **xuất bản âm nhạc** bắt nguồn từ việc in và bán bản nhạc (xem [[lich-su-in-an-am-nhac]]). Ngày nay, nhà xuất bản (publisher) ký hợp đồng với nhạc sĩ, đăng ký tác phẩm với các tổ chức quản lý tập thể trên khắp thế giới, cấp phép sử dụng, thu tiền và chia lại cho tác giả, đồng thời "chào hàng" bài hát cho ca sĩ, phim, quảng cáo. Tỷ lệ chia giữa nhà xuất bản và tác giả tùy loại hợp đồng (xuất bản trọn gói, đồng xuất bản, chỉ quản lý); bài này không đưa con số cụ thể vì các nguồn đã tra không thống nhất.

## Các dòng tiền bản quyền
- **Cơ học (mechanical)**: phát sinh khi tác phẩm được *sao chép* — đĩa CD, vinyl, tải về và (ở nhiều nước) stream theo yêu cầu. Tên gọi xuất phát từ thời cuộn piano tự động và đĩa hát. Ở Mỹ, tỷ lệ do **Copyright Royalty Board** ấn định; thỏa thuận *Phonorecords IV* (được duyệt 30/12/2022) nâng mức cho stream từ 15,1% doanh thu dịch vụ năm 2023 lên 15,35% năm 2027. Theo Đạo luật Hiện đại hóa Âm nhạc (Music Modernization Act), từ 1/1/2021 **The MLC** cấp giấy phép trọn gói (blanket license) cho dịch vụ số tại Mỹ, thay cơ chế cấp phép từng bài trước đó.
- **Biểu diễn công cộng (performance)**: phát sinh khi tác phẩm được trình diễn hoặc phát sóng nơi công cộng — radio, TV, quán, cửa hàng, buổi hòa nhạc, stream. Do các tổ chức quản lý tập thể (PRO/CMO) thu: ASCAP, BMI (Mỹ), PRS (Anh), SACEM (Pháp), GEMA (Đức), VCPMC (Việt Nam).
- **Đồng bộ hóa (sync)**: phí cho phép ghép nhạc vào hình ảnh — phim, quảng cáo, trò chơi (xem [[nhac-phim-va-tro-choi]]). Thường thương lượng trực tiếp và phải xin **cả hai** giấy phép: tác phẩm (từ nhà xuất bản) và master (từ hãng đĩa).
- **In ấn (print)**: từ bán bản nhạc, sách bài hát — nhỏ về tỷ trọng nhưng quan trọng với nhạc cổ điển, giáo dục, piano.
- **Quyền liên quan (neighbouring rights)**: thuộc về phía *bản ghi* — trả cho chủ master và nghệ sĩ biểu diễn khi bản ghi được phát sóng, phát công cộng (ở Anh do PPL thu). Mỹ là ngoại lệ lớn: radio AM/FM không phải trả quyền biểu diễn cho bản ghi; riêng radio số không tương tác do SoundExchange thu.

## Quản lý tập thể: lịch sử và quy mô
Theo CISAC, **SACEM** (Pháp, chính thức thành lập ngày 31/1/1851, có tiền thân từ 1849) thường được coi là tổ chức quản lý tập thể quyền biểu diễn âm nhạc đầu tiên. **ASCAP** ra đời ngày 13/2/1914 tại New York, với các nhà sáng lập như Irving Berlin và Victor Herbert.

::timeline 1851=SACEM_thành_lập 1914=ASCAP_thành_lập 2021=The_MLC_hoạt_động 2023=Phonorecords_IV_có_hiệu_lực | Một số mốc của quản lý tập thể quyền tác giả âm nhạc

Theo **CISAC Global Collections Report 2025**, năm 2024 các hội thành viên thu tổng cộng 13,97 tỷ euro cho mọi loại hình sáng tạo, trong đó âm nhạc chiếm khoảng 90% (12,59 tỷ euro, tăng 7,2%). Mảng số lần đầu vượt 5 tỷ euro (mức tăng được các nguồn ghi 10,8% hoặc 11,2%).

Tại Việt Nam, **VCPMC** công bố thu hơn **393 tỷ đồng** năm 2024 (tăng 14,2% so với khoảng 344 tỷ năm 2023), trong đó nền tảng số và ứng dụng âm nhạc đóng góp hơn 305 tỷ; phân phối cho chủ quyền khoảng 256–257 tỷ đồng (các báo ghi lệch nhẹ). Giám đốc VCPMC cho biết thu từ phát sóng và biểu diễn giảm, một phần vì nhà tổ chức né nghĩa vụ trả tiền.

::bars Âm_nhạc_CISAC_2024_(tỷ_EUR)=12.59 Tổng_CISAC_2024_(tỷ_EUR)=13.97 max=15 | Thu tiền bản quyền toàn cầu qua các hội thành viên CISAC, 2024 (nguồn: CISAC)

## Nguồn và độ tin cậy
Định nghĩa các loại tiền bản quyền khác nhau theo luật từng nước: ví dụ phạm vi quyền liên quan hay việc stream có phát sinh tiền cơ học. Các bài hướng dẫn trên blog ngành thường đơn giản hóa; khi cần chính xác, hãy tra luật quốc gia và quy chế của tổ chức quản lý tập thể. Tỷ lệ chia tiền streaming cụ thể xem [[kinh-te-hoc-streaming]].

Xem thêm: [[ban-quyen-am-nhac-viet-nam]], [[cong-nghiep-am-nhac]], [[a-r-va-phat-trien-nghe-si]], [[lich-su-in-an-am-nhac]].
`,
  },
  {
    slug: "kinh-te-hoc-streaming",
    title: "Kinh tế học streaming âm nhạc",
    category: 'musicology',
    aliases: ["kinh tế streaming", "streaming economics", "mô hình chia tiền theo người dùng", "tiền trả mỗi lượt stream", "per-stream payout", "artist-centric", "ngưỡng 1.000 lượt stream"],
    summary: "Phân tích cách các dịch vụ streaming chia tiền cho chủ quyền: mô hình pro-rata và user-centric, các ước tính tiền trả mỗi lượt nghe, ngưỡng 1.000 lượt stream của Spotify (2024) và vị trí của streaming trong doanh thu thu âm toàn cầu theo IFPI.",
    refs: [
      ["IFPI Global Music Report 2025 – Music Week", "https://www.musicweek.com/labels/read/ifpi-global-music-report-2025-paid-streaming-lifts-the-market-but-overall-revenue-growth-slows/091626"],
      ["Spotify to limit royalties to tracks with more than 1,000 annual streams – Music Week", "https://www.musicweek.com/digital/read/spotify-to-limit-royalties-to-tracks-with-more-than-1-000-annual-streams/088890"],
      ["Here's exactly how Spotify's new 1,000 annual streams royalty policy works – MBW", "https://musicbusinessworldwide.com/heres-exactly-spotifys-new-1000-annual-streams-royalty-policy-works123"],
      ["Spotify New Streaming Threshold – CREATe", "https://www.create.ac.uk/wp-content/uploads/2023/11/Spotify-New-Streaming-Threshold.pdf"],
      ["Revenue sharing at music streaming platforms – arXiv", "https://arxiv.org/pdf/2310.11861"],
      ["User-centric: study of 50k SoundCloud artists – MBW", "https://musicbusinessworldwide.com/user-centric-new-study-of-50k-indie-soundcloud-artists-shows-1-in-5-could-double-income-under-streaming-model"],
      ["Spotify says its payouts are getting better but artists still disagree – TechCrunch", "https://techcrunch.com/2025/03/11/spotify-says-its-payouts-are-getting-better-but-artists-still-disagree"],
      ["Spotify Loud & Clear 2025 – Music Week", "https://www.musicweek.com/digital/read/spotify-loud-clear-2025-report-breaks-down-its-10-billion-role-in-the-streaming-economy/091558"],
    ],
    body: `
## Streaming chiếm bao nhiêu trong ngành thu âm
Sau hai thập niên suy giảm do tải lậu, doanh thu thu âm toàn cầu phục hồi nhờ streaming. Theo **IFPI Global Music Report 2025**, năm 2024 doanh thu thu âm đạt 29,6 tỷ USD; streaming lần đầu vượt 20 tỷ USD, chiếm khoảng **69%** tổng doanh thu. Số tài khoản trả phí đạt 752 triệu (tăng 10,6%), doanh thu thuê bao tăng 9,5%. Báo cáo 2026 cho biết năm 2025 streaming vượt 22 tỷ USD và thuê bao trả phí riêng đã chiếm khoảng 52% tổng doanh thu, với khoảng 837 triệu tài khoản. Bối cảnh về hãng đĩa xem [[hang-dia-va-cac-tap-doan-lon]]; tổng quan ngành xem [[cong-nghiep-am-nhac]].

## Tiền đi đâu: mô hình pro-rata
Phần lớn dịch vụ lớn dùng mô hình **pro-rata** (theo tỷ lệ thị phần):
1. Gom toàn bộ doanh thu (thuê bao + quảng cáo) của một quốc gia trong tháng vào một "bể".
2. Dịch vụ giữ lại phần của mình; phần còn lại dành cho chủ quyền.
3. Phần dành cho bản ghi được chia theo **tỷ lệ lượt stream** của từng chủ master (hãng đĩa, nhà phân phối); phần tác phẩm đi qua nhà xuất bản và tổ chức quản lý tập thể (xem [[xuat-ban-am-nhac-va-cac-loai-tac-quyen]]).
4. Hãng đĩa chia tiếp cho nghệ sĩ theo hợp đồng (xem [[a-r-va-phat-trien-nghe-si]]).

Vì vậy, như Spotify nhấn mạnh, **không dịch vụ nào thực sự "trả theo lượt stream"**; con số "mỗi lượt" chỉ là kết quả chia tổng tiền cho tổng lượt nghe, thay đổi theo quốc gia, gói cước, tỷ lệ người nghe miễn phí.

## Các ước tính "tiền mỗi lượt stream"
Các ước tính được trích dẫn nhiều cho Spotify nằm trong khoảng **0,003–0,005 USD/lượt**. Báo cáo của **Duetti** (công ty đầu tư danh mục nhạc độc lập) về năm 2024 đưa ra mức bình quân cho nghệ sĩ độc lập trên 1.000 lượt nghe:

::bars Amazon_Music=8.80 Apple_Music=6.20 YouTube=4.80 Spotify=3.00 max=10 | USD trên 1.000 lượt stream cho nghệ sĩ độc lập, 2024 (Duetti, qua TechCrunch)

Duetti giải thích chênh lệch bằng mô hình kinh doanh: Spotify dựa nhiều vào gói miễn phí có quảng cáo và thị trường giá thấp; Apple không có gói miễn phí. Spotify bác bỏ phân tích này là "vô căn cứ". Đây là ước tính của một bên thứ ba trên một tập dữ liệu cụ thể, không phải biểu phí chính thức.

Ở cấp vĩ mô, Spotify (báo cáo *Loud & Clear 2025*) cho biết đã trả khoảng **10 tỷ USD** cho ngành âm nhạc năm 2024, và gần 1.500 nghệ sĩ tạo ra hơn 1 triệu USD tiền bản quyền chỉ từ Spotify; báo cáo 2026 nêu con số hơn 11 tỷ USD cho 2025.

## Mô hình user-centric và artist-centric
Mô hình **user-centric** (UCPS) chia tiền thuê bao của *mỗi người dùng* cho chính những nghệ sĩ người đó nghe. Lập luận: người chỉ nghe nhạc jazz hay nhạc cổ điển thì tiền của họ nên đến với nghệ sĩ jazz, cổ điển, thay vì bị pha loãng vào bể chung do các siêu sao chiếm lĩnh.

Bằng chứng thực nghiệm còn chưa thống nhất:
- Nghiên cứu của **Digital Media Finland** (thực hiện 2017, công bố 2018) trên dữ liệu thật của một dịch vụ lớn cho thấy mức phân bổ lại khá khiêm tốn.
- Nghiên cứu của **CNM** (Trung tâm Âm nhạc Quốc gia Pháp, 2021) kết luận dữ liệu hiện có *không đủ* để rút ra kết luận chắc chắn; chỉ Deezer và Spotify cung cấp dữ liệu và chúng không nhất quán.
- Một phân tích trên khoảng 50.000 nghệ sĩ độc lập SoundCloud (dữ liệu 2022) lại cho rằng tác động có thể đáng kể: khoảng 1/5 nghệ sĩ có thể tăng gấp đôi thu nhập, nhưng cũng có nhóm giảm mạnh.
- Các nhà kinh tế học cũng phân tích vấn đề bằng lý thuyết chia sẻ doanh thu (ví dụ bài *Revenue sharing at music streaming platforms*, arXiv 2023), cho thấy mỗi quy tắc thỏa mãn những tiêu chí công bằng khác nhau.

Năm 2023, Deezer cùng Universal Music Group và Warner Music triển khai mô hình **artist-centric**: tăng trọng số cho "nghệ sĩ chuyên nghiệp" vượt ngưỡng lượt nghe và người nghe, và cho lượt nghe do người dùng chủ động tìm.

## Ngưỡng 1.000 lượt stream của Spotify (2024)
Từ đầu năm 2024, một bài hát phải đạt **ít nhất 1.000 lượt stream trong 12 tháng trước đó** (kèm một số lượng người nghe duy nhất tối thiểu không công bố) mới được tính tiền bản quyền bản ghi. Spotify nói 99,5% lượt stream đã thuộc các bài vượt ngưỡng, và khoảng 40 triệu USD/năm từng chảy vào các bài dưới ngưỡng sẽ được phân bổ lại.

Người phản đối (trong đó có một số nghệ sĩ độc lập và nhà nghiên cứu tại CREATe) cho rằng chính sách chuyển tiền từ nghệ sĩ nhỏ sang nghệ sĩ lớn và hãng đĩa.

::timeline 1999=Napster 2008=Spotify_ra_mắt 2023=Deezer_artist-centric 2024=Spotify_ngưỡng_1.000_stream | Một số mốc kinh tế học streaming

## Nguồn và độ tin cậy
Số liệu tổng thị trường (IFPI) và số chi trả do Spotify tự công bố là đáng tin về độ lớn nhưng do các bên có lợi ích công bố. Các con số "tiền mỗi lượt" chỉ là ước tính. Tác động của user-centric vẫn đang tranh luận vì dữ liệu nền tảng ít được công khai.

Xem thêm: [[cong-nghiep-am-nhac]], [[bang-xep-hang-am-nhac]], [[am-nhac-hoc-ky-thuat-so]], [[xuat-ban-am-nhac-va-cac-loai-tac-quyen]].
`,
  },
  {
    slug: "am-nhac-bieu-dien-truc-tiep-va-luu-dien",
    title: "Âm nhạc biểu diễn trực tiếp và lưu diễn",
    category: 'musicology',
    aliases: ["biểu diễn trực tiếp", "lưu diễn", "live music", "touring", "kinh tế hòa nhạc", "bán vé", "ticketing", "Live Nation", "Ticketmaster", "giá vé động", "dynamic pricing", "lễ hội âm nhạc", "music festivals"],
    summary: "Phân tích kinh tế của hòa nhạc, lưu diễn và lễ hội: quy mô thị trường, cấu trúc chi phí, vai trò của Live Nation–Ticketmaster và vụ kiện chống độc quyền của Bộ Tư pháp Mỹ (2024–2026), tranh cãi giá vé động và khủng hoảng lễ hội độc lập.",
    refs: [
      ["Live Nation saw 151m fans attend its events in 2024 – MBW", "https://www.musicbusinessworldwide.com/live-nation-saw-151m-fans-attend-its-events-in-2024-as-revenue-rose-3-to-23bn"],
      ["Live Nation Entertainment Reports Full Year 2024 Results", "https://newsroom.livenation.com/news/live-nation-entertainment-reports-full-year-and-fourth-quarter-2024-results/"],
      ["United States and Plaintiff States v. Live Nation – NAAG", "https://www.naag.org/multistate-case/united-states-and-plaintiff-states-v-live-nation-entertainment-et-al-s-d-n-y-124-cv-03973-as/"],
      ["Federal Jury Finds Live Nation and Ticketmaster Act as Monopoly – Manatt", "https://www.manatt.com/insights/newsletters/client-alert/federal-jury-finds-live-nation-and-ticketmaster-act-as-monopoly-in-antitrust-trial"],
      ["A jury declared Live Nation a monopoly. But ticket prices won't drop just yet – Michigan Public (NPR)", "https://www.michiganpublic.org/2026-04-16/a-jury-declared-live-nation-a-monopoly-but-ticket-prices-wont-drop-just-yet"],
      ["Ticketmaster's pricing for Oasis tickets is under investigation in the UK – AP via KSAT", "https://www.ksat.com/entertainment/2024/09/05/ticketmasters-pricing-for-oasis-tickets-is-under-investigation-in-the-uk/"],
      ["Music In The Air 2024 – Music Week", "https://musicweek.com/labels/read/music-in-the-air-2024-live-publishing-and-superfans-boost-goldman-sachs-global-growth-forecast/089723"],
      ["UK festivals crisis – The Hollywood Reporter", "https://www.hollywoodreporter.com/music/music-news/uk-festivals-music-crisis-glastonbury-reading-summer-1235932712/"],
    ],
    body: `
## Vì sao biểu diễn trực tiếp quan trọng
Trong thời đại [[kinh-te-hoc-streaming|streaming]], một lượt nghe thu về chỉ vài phần nghìn USD, còn một tấm vé hòa nhạc có thể vài chục đến vài trăm USD. Vì vậy với phần lớn nghệ sĩ có khán giả, **lưu diễn** là nguồn thu lớn nhất, kéo theo bán hàng lưu niệm (merch). Biểu diễn trực tiếp cũng là trải nghiệm xã hội mà ghi âm không thay thế được — chủ đề được [[xa-hoi-hoc-am-nhac]] và [[tam-ly-hoc-am-nhac]] nghiên cứu. Tổng quan ngành xem [[cong-nghiep-am-nhac]].

Báo cáo *Music in the Air* 2024 của Goldman Sachs ghi nhận doanh thu biểu diễn trực tiếp năm 2023 tăng 25% (so với dự báo 6%), cao hơn mức trước đại dịch 2019 khoảng 20%; một ấn bản sau dự báo doanh thu live toàn cầu 34,6 tỷ USD (2024) và 38,2 tỷ USD (2025). Lưu ý: dự báo tổng thể năm 2024 của chính báo cáo này sau đó tỏ ra quá lạc quan.

## Chuỗi giá trị của một tour
- **Nghệ sĩ và quản lý** quyết định lịch, quy mô; **đại lý booking** (booking agent) thương lượng với nhà tổ chức.
- **Nhà tổ chức (promoter)** chịu rủi ro: thuê địa điểm, quảng bá, an ninh, sản xuất. Hợp đồng phổ biến là cát-xê bảo đảm cộng phần chia lợi nhuận sau khi trừ chi phí.
- **Địa điểm** (club, nhà hát, arena, sân vận động) thu tiền thuê, đồ ăn uống, chỗ đỗ xe.
- **Đơn vị bán vé** thu phí dịch vụ — phần thường bị khán giả phàn nàn nhất.

Biên lợi nhuận của khâu tổ chức rất mỏng: năm 2024, mảng hòa nhạc của Live Nation có doanh thu khoảng 19 tỷ USD nhưng lợi nhuận hoạt động điều chỉnh chỉ 530 triệu USD (biên 2,8%), trong khi bán vé và tài trợ mới là mảng sinh lời chính.

### Kỷ lục doanh thu
Theo ước tính của Pollstar, *The Eras Tour* của Taylor Swift là tour đầu tiên vượt 1 tỷ USD (năm 2023: 1,04 tỷ USD, 4,35 triệu vé, 60 đêm) và khi kết thúc tháng 12/2024 đạt khoảng **2,2 tỷ USD** qua 149 đêm — tour có doanh thu cao nhất lịch sử. Các con số này chưa điều chỉnh lạm phát khi so với tour cũ.

## Live Nation – Ticketmaster
**Live Nation** sáp nhập với **Ticketmaster** ngày 25/1/2010, dưới một "nghị định đồng thuận" (consent decree) của Bộ Tư pháp Mỹ (DOJ). Năm 2024, tập đoàn công bố doanh thu khoảng **23,2 tỷ USD**, **151 triệu** khán giả tại hơn 50.000 sự kiện, và Ticketmaster bán 637 triệu vé.

Tháng 5/2024, DOJ cùng tổng chưởng lý 29 bang và Đặc khu Columbia (về sau thêm nhiều bang) kiện Live Nation–Ticketmaster tại Tòa Nam New York, cáo buộc độc quyền và đòi tách hai công ty. Trong quá trình xét xử năm 2026, DOJ và một số bang **dàn xếp** với Live Nation; liên minh khoảng 33 bang và D.C. tiếp tục theo kiện (các nguồn ghi số bang khác nhau). Ngày **15/4/2026**, bồi thẩm đoàn liên bang kết luận Live Nation và Ticketmaster đã vận hành độc quyền bất hợp pháp, với khoản thu thừa 1,72 USD mỗi vé tại các địa điểm lớn. Giai đoạn xác định biện pháp khắc phục (có thể gồm tách công ty) và kháng cáo của Live Nation còn đang tiếp diễn tại thời điểm viết bài.

::timeline 2010=Live_Nation_sáp_nhập_Ticketmaster 2022=Sự_cố_bán_vé_Eras_Tour 2024=DOJ_khởi_kiện 2024=CMA_điều_tra_vé_Oasis 2026=Bồi_thẩm_đoàn_kết_luận_độc_quyền | Các mốc pháp lý của thị trường vé hòa nhạc

## Giá vé động và tranh cãi
**Giá vé động** (dynamic pricing) điều chỉnh giá theo cầu, như vé máy bay. Người ủng hộ cho rằng nó giúp nghệ sĩ thu phần tiền vốn rơi vào tay phe vé chợ đen; người phản đối cho rằng nó khiến người hâm mộ trung thành bị "móc túi". Khi Oasis tái hợp (bán vé tháng 8/2024), vé đứng tại Anh tăng từ khoảng 148 lên 355 bảng trong lúc người mua chờ trong hàng đợi trực tuyến. Cơ quan Cạnh tranh và Thị trường Anh (**CMA**) mở điều tra tháng 9/2024; theo tường thuật báo chí năm 2025, CMA không tìm thấy bằng chứng thuật toán điều chỉnh giá theo thời gian thực, nhưng chỉ trích việc bán vé "Platinum" giá gấp tới 2,5 lần mà không kèm quyền lợi thêm và việc không thông báo rõ hai hạng vé đứng.

## Lễ hội âm nhạc
Lễ hội là mô hình kinh doanh rủi ro cao: chi phí cố định lớn, phụ thuộc thời tiết và nghệ sĩ chính (headliner). Hiệp hội Lễ hội Độc lập Anh (**AIF**) cho biết chi phí tổ chức tăng khoảng 30% sau đại dịch; tính đến giữa năm 2024 khoảng 50 lễ hội độc lập tại Anh đã hủy, hoãn hoặc đóng cửa trong năm. Các nhà tổ chức nêu đồng thời chi phí tăng, cát-xê nghệ sĩ cao và người mua vé thắt chặt chi tiêu.

## Nguồn và độ tin cậy
Số liệu doanh thu tour là ước tính của Pollstar dựa trên báo cáo tự nguyện. Số liệu tài chính Live Nation lấy từ báo cáo của công ty. Vụ kiện chống độc quyền vẫn chưa kết thúc; các chi tiết về biện pháp khắc phục có thể thay đổi.

Xem thêm: [[cong-nghiep-am-nhac]], [[kinh-te-hoc-streaming]], [[xa-hoi-hoc-am-nhac]], [[hoi-hop-bieu-dien]].
`,
  },
  {
    slug: "a-r-va-phat-trien-nghe-si",
    title: "A&R và phát triển nghệ sĩ",
    category: 'musicology',
    aliases: ["A&R", "artists and repertoire", "phát triển nghệ sĩ", "artist development", "hợp đồng thu âm", "record deal", "hợp đồng 360", "360 deal", "tiền ứng trước", "advance", "thu hồi vốn", "recoupment", "hợp đồng phân phối"],
    summary: "Giải thích chức năng A&R (tìm và phát triển nghệ sĩ) của hãng đĩa, các loại hợp đồng chính (truyền thống, 360, cấp phép, phân phối) và cơ chế tiền ứng trước – thu hồi vốn quyết định khi nào nghệ sĩ thực sự nhận tiền.",
    refs: [
      ["Record labels spent $4.5bn on A&R and marketing in 2011 – MBW", "https://www.musicbusinessworldwide.com/record-labels-spent-4-5bn-on-ar-and-marketing-in-2011/"],
      ["IFPI Investing in Music report 2016 – Music Biz", "https://musicbiz.org/news/ifpi-investing-music-report-2016"],
      ["IFPI report: Record labels invest $4.3b in A&R and marketing – The Music Network", "https://themusicnetwork.com/?p=8205"],
      ["360 deal – Wikipedia", "https://en.wikipedia.org/wiki/360_deal"],
      ["Marshall (2013), The 360 deal and the new music industry – European Journal of Cultural Studies", "https://journals.sagepub.com/doi/reader/10.1177/1367549412457478"],
      ["Record label deals explained – Mixcloud", "https://www.mixcloud.com/blog/2026/05/21/record-label-deals-explained/"],
      ["Record Deals and Music Contracts Explained – Orphiq", "https://orphiq.com/resources/record-deals-explained"],
    ],
    body: `
## A&R là gì
**A&R** (artists and repertoire – "nghệ sĩ và tiết mục") là bộ phận của hãng đĩa phụ trách **tìm, ký hợp đồng và phát triển** nghệ sĩ. Người làm A&R nghe bản demo, theo dõi các buổi diễn và số liệu mạng xã hội, rồi sau khi ký thì giúp chọn bài, ghép nhạc sĩ sáng tác và nhà sản xuất, giám sát quá trình thu âm và quyết định thời điểm phát hành. Trước thời ca sĩ - nhạc sĩ, A&R còn có nhiệm vụ đúng như tên gọi: chọn "tiết mục" (bài hát) cho ca sĩ thể hiện. Bối cảnh của hãng đĩa xem [[hang-dia-va-cac-tap-doan-lon]]; tổng quan ngành xem [[cong-nghiep-am-nhac]].

## Quy mô đầu tư
Theo các báo cáo *Investing in Music* của **IFPI**, hãng đĩa trên toàn cầu chi khoảng **4,3 tỷ USD** (ấn bản 2014) và **4,5 tỷ USD** mỗi năm (ấn bản 2016) cho A&R và marketing, tương đương khoảng **27% doanh thu**; riêng A&R khoảng 16,9% doanh thu. Ấn bản 2014 ước tính chi phí để "đột phá" một nghệ sĩ mới tại một thị trường lớn là **0,5–2 triệu USD** (gồm tiền ứng trước, thu âm, video, hỗ trợ lưu diễn, quảng bá). Đây là số liệu do chính hiệp hội các hãng đĩa công bố nhằm biện minh cho phần doanh thu hãng giữ lại, và đã khá cũ — cần đọc với sự thận trọng.

## Tiền ứng trước và thu hồi vốn
**Tiền ứng trước** (advance) là khoản hãng trả trước cho nghệ sĩ, nhưng không phải tiền cho không: nó được **thu hồi** (recoup) từ phần tiền bản quyền của nghệ sĩ. Cho đến khi số tiền nghệ sĩ "đáng được hưởng" vượt tổng khoản ứng trước và các chi phí được tính thu hồi (trong hợp đồng truyền thống có thể gồm cả chi phí thu âm, một phần video, hỗ trợ tour), tài khoản của nghệ sĩ còn ở trạng thái **chưa thu hồi** (unrecouped) và nghệ sĩ không nhận thêm đồng nào.

Ví dụ minh họa (giả định, không phải số liệu thực): nghệ sĩ nhận ứng trước 100.000 USD, tỷ lệ bản quyền 18% doanh thu ròng. Album phải mang về khoảng 555.000 USD doanh thu ròng thì phần 18% mới đủ trả hết 100.000 USD; trong khi đó hãng đã thu về phần còn lại 82%. Vì vậy một nghệ sĩ "chưa thu hồi" vẫn có thể là một khoản đầu tư có lãi với hãng. Nếu sản phẩm thất bại, nghệ sĩ thường không phải hoàn lại tiền ứng — đây là phần rủi ro hãng gánh.

## Các loại hợp đồng
| Loại hợp đồng | Ai sở hữu master | Phần của nghệ sĩ (ước lượng theo các nguồn hướng dẫn) |
|---|---|---|
| Truyền thống (thu âm độc quyền) | Hãng đĩa | khoảng 13–25% tùy nguồn và cách tính |
| 360 (đa quyền) | Hãng đĩa | như trên, cộng hãng chia thêm thu nhập lưu diễn, merch, tài trợ |
| Cấp phép (license) | Nghệ sĩ, hãng khai thác trong 3–7 năm | cao hơn truyền thống |
| Phân phối hoặc dịch vụ hãng (label services) | Nghệ sĩ | khoảng 70–85% doanh thu ròng; nghệ sĩ tự chịu chi phí |

Các tỷ lệ trên đến từ trang hướng dẫn của các công ty dịch vụ, khác nhau đáng kể về cơ sở tính (giá bán lẻ hay doanh thu ròng), nên chỉ mang tính tham khảo.

### Hợp đồng 360
**Hợp đồng 360** xuất hiện đầu thập niên 2000 khi doanh thu đĩa sụt giảm: hãng ứng trước nhiều hơn, đổi lại được chia phần cả những nguồn thu vốn của riêng nghệ sĩ như lưu diễn, bán hàng lưu niệm, tài trợ. Hợp đồng của **Robbie Williams với EMI (2002)** thường được dẫn như tiền thân; con số được báo chí nêu dao động (ví dụ 80 triệu bảng cho bốn album), và nhà nghiên cứu Lee Marshall (2013, *European Journal of Cultural Studies* 16(1): 77–99) lưu ý đó chưa hẳn là một hợp đồng 360 đúng nghĩa. Ban nhạc **Paramore** với Atlantic Records được nhắc đến như một trong những hợp đồng 360 đầu tiên cho nghệ sĩ mới. Marshall lập luận rằng 360 phản ánh việc hãng đĩa định vị lại mình thành công ty "quản lý thương hiệu nghệ sĩ" thay vì chỉ bán bản ghi.

::timeline 2002=Robbie_Williams_ký_EMI 2013=Marshall_phân_tích_hợp_đồng_360 2014=IFPI:_4,3_tỷ_USD_cho_A&R_và_marketing 2016=IFPI:_4,5_tỷ_USD | Một số mốc trong lịch sử hợp đồng thu âm và đầu tư A&R

## Phát triển nghệ sĩ trong thời đại số
Theo MIDiA, phần thị trường thuộc các hãng ngoài ba major và nghệ sĩ tự phát hành tăng liên tục (khoảng 29,7% năm 2024 theo cách tính phân phối, xem [[hang-dia-va-cac-tap-doan-lon]]). Các hợp đồng phân phối và dịch vụ hãng cho phép nghệ sĩ giữ quyền master và chỉ thuê dịch vụ khi cần, đổi lại phải tự chịu chi phí và rủi ro. Lựa chọn giữa tiền ứng trước, mạng lưới của hãng lớn và quyền sở hữu lâu dài là quyết định trung tâm của sự nghiệp ghi âm hiện nay. Việc nghệ sĩ có lượng người nghe lớn trên streaming có thể vẫn thu nhập khiêm tốn được bàn ở [[kinh-te-hoc-streaming]].

## Nguồn và độ tin cậy
Số liệu đầu tư A&R chủ yếu từ IFPI (bên có lợi ích). Tỷ lệ hợp đồng không được công bố công khai; các con số trong bài lấy từ trang hướng dẫn và chỉ là khoảng tham khảo.

Xem thêm: [[hang-dia-va-cac-tap-doan-lon]], [[kinh-te-hoc-streaming]], [[xuat-ban-am-nhac-va-cac-loai-tac-quyen]], [[vpop-rap-viet]].
`,
  },
  {
    slug: "bang-xep-hang-am-nhac",
    title: "Bảng xếp hạng âm nhạc",
    category: 'musicology',
    aliases: ["bảng xếp hạng", "music charts", "Billboard Hot 100", "Billboard 200", "UK Official Charts", "Official Singles Chart", "phương pháp xếp hạng", "chart methodology", "thao túng bảng xếp hạng", "payola"],
    summary: "Lịch sử và phương pháp của các bảng xếp hạng âm nhạc lớn (Billboard Hot 100 từ 1958, UK Official Singles Chart từ 1952), cách đưa streaming và YouTube vào công thức, và các tranh cãi về thao túng từ payola đến gói hàng kèm album.",
    refs: [
      ["Poor Little Fool – Wikipedia", "https://en.wikipedia.org/wiki/Poor_Little_Fool"],
      ["Billboard Introduces The Hot 100 – uDiscover Music", "https://www.udiscovermusic.com/stories/billboard-introduces-hot-100"],
      ["History of the Official Charts – Official Charts Company", "https://www.officialcharts.com/who-we-are/history-of-the-official-charts/"],
      ["The Official Singles Chart to incorporate online streams for first time – NME", "https://www.nme.com/news/music/various-artists-1889-1245975"],
      ["Baauer's Harlem Shake debuts atop revamped Hot 100 – Billboard", "https://www.billboard.com/pro/baauers-harlem-shake-debuts-atop-revamped-hot-100/"],
      ["Billboard shifts streaming equivalents, giving more weight to paid subscriptions – RAIN News", "https://rainnews.com/billboard-shifts-streaming-equivalents-giving-more-weight-to-paid-subscriptions/"],
      ["Merch bundles no longer count towards the Billboard charts – The FADER", "https://www.thefader.com/2020/07/14/merch-bundles-no-longer-count-towards-the-billboard-charts"],
      ["US Congress investigates payola in pop music industry – EBSCO", "https://www.ebsco.com/research-starters/law/us-congress-investigates-payola-pop-music-industry"],
    ],
    body: `
## Bảng xếp hạng để làm gì
**Bảng xếp hạng âm nhạc** đo mức độ phổ biến tương đối của bài hát hoặc album trong một khoảng thời gian (thường là một tuần), dựa trên doanh số, lượt phát sóng và nay là lượt stream. Bảng xếp hạng vừa là công cụ thương mại — giúp đài phát thanh, cửa hàng, hãng đĩa ra quyết định — vừa là nguồn dữ liệu cho các nhà nghiên cứu [[nghien-cuu-am-nhac-dai-chung|âm nhạc đại chúng]] và [[xa-hoi-hoc-am-nhac]] về thị hiếu. Vì thứ hạng mang lại tiền và uy tín, nó luôn là mục tiêu của các nỗ lực thao túng. Tổng quan ngành xem [[cong-nghiep-am-nhac]].

## Lịch sử
### Anh: từ 1952
Bảng xếp hạng đĩa đơn đầu tiên ở Anh do tờ *New Musical Express* (NME) công bố tháng 11/1952; Percy Dickins, trưởng phòng quảng cáo của NME, gọi điện cho các cửa hàng để tổng hợp doanh số. Quán quân đầu tiên là "Here in My Heart" của Al Martino. Ngày nay bảng xếp hạng chính thức do **Official Charts Company** (OCC) biên soạn.

### Mỹ: Billboard Hot 100 từ 1958
Tạp chí *Billboard* ra mắt **Hot 100** trong số ngày 4/8/1958, thay cho các bảng riêng lẻ như *Most Played by Jockeys* và *Top 100 Sides* (bảng *Best Selling Pop Singles in Stores* còn tồn tại thêm khoảng hai tháng). Quán quân đầu tiên là "Poor Little Fool" của Ricky Nelson, vượt qua "Patricia" của Pérez Prado. Năm 1991, dịch vụ **Nielsen SoundScan** ra đời, cung cấp dữ liệu doanh số từ điểm bán do bên thứ ba thu thập, thay cho cách khảo sát cửa hàng trước đó.

::timeline 1952=Bảng_xếp_hạng_đĩa_đơn_Anh_(NME) 1958=Billboard_Hot_100 1991=Nielsen_SoundScan 2013=YouTube_vào_Hot_100 2014=Stream_vào_bảng_đĩa_đơn_Anh 2018=Billboard_phân_biệt_stream_trả_phí 2020=Billboard_loại_gói_merch | Các mốc của bảng xếp hạng âm nhạc

## Phương pháp trong thời đại streaming
Công thức hiện đại gộp nhiều nguồn tín hiệu, mỗi nguồn được quy đổi về một "đơn vị tương đương":

- **Anh (2014)**: từ bảng xếp hạng công bố ngày 6/7/2014, OCC tính lượt stream âm thanh với tỷ lệ **100 lượt stream = 1 bản bán**; lượt nghe phải kéo dài ít nhất 30 giây, và mỗi người dùng chỉ được tính tối đa 10 lượt cho một bài mỗi ngày. Tỷ lệ quy đổi sau đó đã được điều chỉnh; con số cụ thể hiện nay không được xác minh trong nguồn đã tra.
- **Mỹ (2013)**: tháng 2/2013, Billboard đưa dữ liệu stream **YouTube** vào Hot 100, bổ sung cho công thức gồm doanh số tải về (Nielsen SoundScan), phát sóng radio và stream âm thanh, radio trực tuyến (Nielsen BDS). Ngay tuần đầu áp dụng, "Harlem Shake" của Baauer — bài hát lan truyền nhờ hàng loạt video người dùng tự quay — vào thẳng vị trí số 1; doanh số tải về của bài nhảy từ khoảng 18.000 lên 262.000 bản/tuần.
- **Mỹ (2018)**: Billboard chia stream thành ba hạng trọng số cho Hot 100: stream trả phí 1 điểm, stream miễn phí có quảng cáo 2/3 điểm, stream "lập trình sẵn" (kiểu radio) 1/2 điểm. Với Billboard 200, 1.250 stream trả phí hoặc 3.750 stream miễn phí được tính bằng một album; video chỉ tính cho Hot 100.

Việc phân biệt trả phí và miễn phí phản ánh lập luận kinh tế: một lượt nghe trả phí mang lại nhiều tiền hơn (xem [[kinh-te-hoc-streaming]]).

## Thao túng và tranh cãi
### Payola
"Payola" là việc hãng đĩa bí mật trả tiền để đài phát bài hát. Trong phiên điều trần của Hạ viện Mỹ cuối 1959, 335 DJ thừa nhận đã nhận tổng cộng hơn 263.000 USD tiền "tư vấn". DJ nổi tiếng **Alan Freed** bị đài WABC sa thải năm 1959 (các nguồn mô tả khác nhau về việc ông từ chối ký cam kết hay thừa nhận tại điều trần), sau đó nhận tội và mất sự nghiệp. Hệ quả là quyền chọn bài chuyển từ DJ sang giám đốc chương trình, và payola trở thành tội nhẹ theo luật liên bang.

### Gói hàng kèm album (bundling)
Cuối thập niên 2010, nhiều nghệ sĩ bán album kèm áo phông, vé hòa nhạc để thổi phồng doanh số tuần đầu. Billboard siết quy định từ 3/1/2020, rồi tháng 7/2020 **ngừng tính** album bán kèm hàng lưu niệm hoặc vé; đồng thời bản kỹ thuật số đi kèm đĩa vật lý chỉ được tính khi đĩa đã giao. Về sau Billboard lại cho phép một dạng "fan pack" trên bảng album, cho thấy ranh giới giữa tiêu thụ thực và chiến thuật thương mại vẫn đang được thương lượng.

### Stream có tổ chức
Khi stream trở thành thước đo chính, các chiến dịch "cày view" của cộng đồng người hâm mộ và các trang trại stream giả mạo trở thành mối lo mới. Các quy tắc giới hạn số lượt tính cho mỗi người dùng (như của OCC) và trọng số thấp hơn cho stream miễn phí một phần nhằm hạn chế điều này; mức độ gian lận thực tế thì chưa có số liệu đáng tin trong nguồn bài này đã tra.

## Nguồn và độ tin cậy
Các mốc lịch sử (1952, 1958, 2013, 2014, 2018, 2020) được nhiều nguồn xác nhận. Một số chi tiết (ngày số báo Billboard đầu tiên được một nguồn ghi khác, tỷ lệ quy đổi stream hiện hành ở Anh) chưa thống nhất. Phương pháp xếp hạng thay đổi thường xuyên; nên tra trang chính thức của Billboard và OCC để có quy tắc mới nhất.

Xem thêm: [[nhac-pho-thong-the-ky-20]], [[kinh-te-hoc-streaming]], [[hang-dia-va-cac-tap-doan-lon]], [[vpop-rap-viet]].
`,
  },
  {
    slug: "ban-quyen-am-nhac-quoc-te",
    title: "Bản quyền âm nhạc quốc tế",
    category: 'musicology',
    aliases: ["luật bản quyền âm nhạc quốc tế", "international music copyright", "Berne Convention", "Công ước Rome 1961", "WPPT", "WIPO Copyright Treaty", "TRIPS", "fair use âm nhạc"],
    summary: "Khung pháp lý quốc tế bảo hộ tác phẩm âm nhạc và bản ghi âm: Công ước Berne (1886), Công ước Rome (1961), hai hiệp ước Internet của WIPO (1996), Hiệp định TRIPS, thời hạn bảo hộ, ngoại lệ và các vụ kiện \"đạo nhạc\" tiêu biểu tại Mỹ.",
    refs: [
      ["WIPO – Summary of the Berne Convention (1886)", "https://www.wipo.int/en/web/treaties/ip/berne/summary_berne"],
      ["WIPO – Summary of the Rome Convention (1961)", "https://www.wipo.int/en/web/treaties/ip/rome/summary_rome"],
      ["WIPO – Summary of the WIPO Performances and Phonograms Treaty (1996)", "https://www.wipo.int/en/web/treaties/ip/wppt/summary_wppt"],
      ["WIPO Lex – Viet Nam treaty membership", "https://wipo.int/wipolex/en/treaties/ShowResults?code=VN"],
      ["WilmerHale – En banc court overturns inverse ratio rule (Skidmore v. Led Zeppelin, 2020)", "https://www.wilmerhale.com/en/insights/client-alerts/20200310-en-banc-court-overturns-rule-that-a-high-degree-of-access-to-copyrighted-material-reduces-plaintiffs-burden-to-show-substantial-similarity"],
      ["NBC News – Court sides with Marvin Gaye family in Blurred Lines fight (2018)", "https://www.nbcnews.com/pop-culture/music/court-sides-marvin-gaye-family-blurred-lines-fight-against-thicke-n858846"],
      ["Cornell LII – Campbell v. Acuff-Rose Music (1994)", "https://www.law.cornell.edu/supremecourt/text/92-1292"],
      ["UK Government – Copyright term extension for sound recordings", "https://www.gov.uk/government/publications/copyright-term-extension-for-sound-recordings"],
    ],
    body: `
## Hai lớp quyền trong một bài hát
Mỗi bản thu âm nhạc phổ thông thường chứa hai đối tượng bảo hộ khác nhau. Thứ nhất là **tác phẩm âm nhạc** (giai điệu, hòa âm, lời) thuộc về nhạc sĩ và nhà xuất bản – đây là *quyền tác giả*. Thứ hai là **bản ghi âm** cùng phần **biểu diễn** của ca sĩ, nhạc công – đây là *quyền liên quan* (neighbouring rights), thuộc về nhà sản xuất bản ghi và người biểu diễn. Sự tách đôi này giải thích vì sao một ca khúc có thể sinh ra hai dòng tiền bản quyền riêng và vì sao các điều ước quốc tế cũng được xây theo hai nhánh. Bối cảnh trong nước được trình bày ở [[ban-quyen-am-nhac-viet-nam]]; bức tranh thị trường ở [[cong-nghiep-am-nhac]].

## Các điều ước nền tảng
### Công ước Berne (1886)
Theo bản tóm tắt chính thức của WIPO, Công ước Berne về bảo hộ tác phẩm văn học và nghệ thuật dựa trên ba nguyên tắc: đối xử quốc gia (tác phẩm của công dân nước thành viên được bảo hộ như tác phẩm của công dân nước sở tại), bảo hộ tự động không cần thủ tục, và bảo hộ độc lập với nước xuất xứ. Thời hạn tối thiểu chung là **suốt đời tác giả cộng 50 năm** sau khi tác giả mất; tác phẩm khuyết danh, tác phẩm điện ảnh có cách tính riêng. Berne cũng ghi nhận quyền nhân thân (quyền đứng tên, quyền phản đối việc xuyên tạc tác phẩm). Các nước được phép quy định thời hạn dài hơn – Liên minh châu Âu và Mỹ hiện áp dụng 70 năm sau khi tác giả mất.

### Công ước Rome (1961)
Công ước Rome, thông qua ngày 26/10/1961, là văn kiện đầu tiên bảo hộ người biểu diễn, nhà sản xuất bản ghi âm và tổ chức phát sóng. WIPO quản lý công ước này cùng Tổ chức Lao động Quốc tế (ILO) và UNESCO. Người biểu diễn được quyền ngăn chặn việc phát sóng hoặc định hình buổi biểu diễn trực tiếp mà không có sự đồng ý; nhà sản xuất có quyền cho phép hoặc cấm sao chép bản ghi.

### Hiệp định TRIPS (1994)
Hiệp định về các khía cạnh liên quan đến thương mại của quyền sở hữu trí tuệ của WTO buộc các thành viên tuân thủ phần lớn nội dung Berne và đưa vào cơ chế giải quyết tranh chấp thương mại. Điều 13 TRIPS mở rộng **"phép thử ba bước"** (gốc từ Điều 9(2) Berne, bản Paris 1971): ngoại lệ chỉ hợp lệ khi (1) áp dụng cho những trường hợp đặc biệt nhất định, (2) không xung đột với việc khai thác bình thường tác phẩm và (3) không gây phương hại bất hợp lý đến lợi ích chính đáng của chủ sở hữu. Án lệ WTO duy nhất về điểm này là vụ *US – Section 110(5)* (2000), liên quan chính đến việc phát nhạc trong quán xá tại Mỹ.

### Hai "hiệp ước Internet" của WIPO (1996)
Hiệp ước Quyền tác giả (WCT) và Hiệp ước về Biểu diễn và Bản ghi âm (WPPT) đưa luật vào thời kỹ thuật số. WPPT trao cho người biểu diễn và nhà sản xuất **quyền cung cấp đến công chúng** (making available) – theo WIPO, quyền này bao trùm việc cung cấp theo yêu cầu, có tương tác qua Internet, tức là nền tảng pháp lý của tải về và streaming. Hai hiệp ước cũng bảo vệ các biện pháp công nghệ chống sao chép (DRM).

::timeline 1886=Công_ước_Berne 1961=Công_ước_Rome 1994=TRIPS_(WTO) 1996=WCT_và_WPPT 2004=Việt_Nam_gia_nhập_Berne 2006=Việt_Nam_gia_nhập_Rome 2011=EU_kéo_dài_bản_ghi_lên_70_năm | Các mốc chính của luật bản quyền âm nhạc quốc tế

## Thời hạn bảo hộ
| Đối tượng | Mức tối thiểu quốc tế | Ví dụ mức cao hơn |
|---|---|---|
| Tác phẩm âm nhạc | Đời tác giả + 50 năm (Berne) | Đời tác giả + 70 năm (EU, Mỹ) |
| Bản ghi âm, biểu diễn | 50 năm (Rome, WPPT) | 70 năm từ khi phát hành (EU, Chỉ thị 2011/77/EU) |

Chỉ thị 2011/77/EU nâng thời hạn cho bản ghi từ 50 lên 70 năm, có hiệu lực từ 1/11/2013, kèm điều khoản "dùng hay mất" (người biểu diễn lấy lại quyền nếu hãng đĩa không khai thác) và quỹ 20% doanh thu thời gian kéo dài dành cho nhạc công phòng thu. Các nhóm bảo vệ người tiêu dùng phê phán rằng việc kéo dài thu hẹp phạm vi công cộng. Việt Nam gia nhập Berne có hiệu lực từ 26/10/2004 và Công ước Rome (nộp văn kiện 1/12/2006, hiệu lực 1/3/2007) theo dữ liệu WIPO Lex.

## Ngoại lệ: fair use và danh mục ngoại lệ
Hai truyền thống pháp lý xử lý việc sử dụng không cần xin phép theo cách khác nhau:
- **Mỹ – fair use** (học thuyết sử dụng hợp lý): tòa án cân nhắc bốn yếu tố linh hoạt – mục đích và tính chất sử dụng, bản chất tác phẩm, lượng trích dùng, ảnh hưởng tới thị trường. Vụ *Campbell v. Acuff-Rose* (Tối cao Pháp viện Mỹ, 1994) về bản nhại "Pretty Woman" của nhóm 2 Live Crew xác lập rằng tính thương mại chỉ là một yếu tố và nhấn mạnh tiêu chí "chuyển hóa" (transformative).
- **Châu Âu và phần lớn các nước luật dân sự (kể cả Việt Nam)**: liệt kê *danh mục ngoại lệ đóng* – trích dẫn, giảng dạy, nhại, sao chép cá nhân… – tất cả phải qua phép thử ba bước.

## Các vụ kiện "đạo nhạc" tiêu biểu
1. **Blurred Lines (2015–2018)**: bồi thẩm đoàn tại Los Angeles năm 2015 kết luận "Blurred Lines" (Robin Thicke, Pharrell Williams) vi phạm "Got to Give It Up" của Marvin Gaye; mức bồi thường hơn 7 triệu USD được thẩm phán giảm còn 5,3 triệu. Tháng 3/2018 Tòa phúc thẩm Khu vực 9 giữ nguyên với tỷ lệ 2–1; thẩm phán bất đồng Jacqueline Nguyen viết rằng hai bài khác nhau về giai điệu, hòa âm và tiết tấu. Phán quyết cuối (12/2018) gần 5 triệu USD cộng 50% tiền bản quyền tương lai. Nhiều nhạc sĩ lo ngại án này bảo hộ cả "cảm giác" (groove, phong cách) vốn không được bảo hộ.
2. **Stairway to Heaven (2016–2020)**: bồi thẩm đoàn năm 2016 kết luận Led Zeppelin không vi phạm "Taurus" (Spirit). Ngày 9/3/2020, Tòa Khu vực 9 họp toàn thể (en banc) giữ nguyên, đồng thời bãi bỏ "quy tắc tỷ lệ nghịch" (inverse ratio rule, có từ 1977) – theo đó bằng chứng tiếp cận càng mạnh thì mức tương tự cần chứng minh càng thấp. Tòa cũng xác định với tác phẩm theo Luật 1909, phạm vi bảo hộ giới hạn ở bản nộp lưu chiểu (bản nhạc), không phải bản thu.
3. **Thinking Out Loud (2023)**: bồi thẩm đoàn liên bang tại New York kết luận Ed Sheeran không sao chép "Let's Get It On" (Marvin Gaye và Ed Townsend). Sheeran lập luận rằng các vòng hợp âm và tiết tấu phổ biến là "bảng chữ cái" chung của mọi nhạc sĩ.

Xu hướng sau 2020 được nhiều luật sư nhận định là tòa Mỹ thận trọng hơn với việc bảo hộ các yếu tố âm nhạc phổ biến (vòng hợp âm, tiết tấu cơ bản) – xem thêm cách phân tích [[phan-tich-hoa-am|hòa âm]] và [[giai-dieu|giai điệu]] trong các bản giám định.

## Nguồn và độ tin cậy
Nội dung điều ước dựa trên tóm tắt chính thức của WIPO; diễn giải phép thử ba bước còn tranh luận học thuật. Các vụ kiện dẫn theo báo chí và bản tin luật sư; chi tiết số tiền ở vụ Blurred Lines khác nhau đôi chút giữa các nguồn tùy thời điểm (phán quyết bồi thẩm, sau giảm, phán quyết cuối).

Xem thêm: [[ban-quyen-am-nhac-viet-nam]], [[to-chuc-quan-ly-tap-the-quyen-tac-gia]], [[vi-pham-ban-quyen-va-chia-se-tep]], [[am-nhac-hoc-ky-thuat-so]].
`,
  },
  {
    slug: "to-chuc-quan-ly-tap-the-quyen-tac-gia",
    title: "Tổ chức quản lý tập thể quyền tác giả âm nhạc",
    category: 'musicology',
    aliases: ["tổ chức quản lý tập thể", "collective management organization", "CMO", "performing rights organization", "PRO", "ASCAP", "BMI", "SACEM", "GEMA", "JASRAC", "giấy phép trọn gói", "blanket licence"],
    summary: "Các tổ chức thay mặt nhạc sĩ và nhà sản xuất cấp phép, thu và phân phối tiền bản quyền: lịch sử từ SACEM (1851), ASCAP, BMI, JASRAC, mạng lưới CISAC, cùng VCPMC và RIAV tại Việt Nam.",
    refs: [
      ["Music Business Worldwide – Global songwriter royalty collections reached $13.6bn in 2024 (CISAC)", "https://www.musicbusinessworldwide.com/global-songwriter-royalty-collections-reached-13-6bn-in-2024-up-7-2-cisac-reports"],
      ["CISAC Global Collections Report 2025 – Music highlights (Teosto)", "https://www.teosto.fi/wp-content/uploads/2025/11/CISAC-GlobalCollectionsReport2025-MUSICHIGHLIGHTS.pdf"],
      ["Pay for Play (University of Oregon) – Chapter 27: Performance Rights", "https://opentext.uoregon.edu/payforplay/chapter/chapter-27-performance-rights/"],
      ["Wikipedia – SACEM", "https://en.wikipedia.org/wiki/SACEM"],
      ["Nhân Dân – 20 năm, dấu ấn thăng trầm trong bảo vệ quyền tác giả âm nhạc Việt Nam", "https://nhandan.vn/20-nam-dau-an-thang-tram-trong-bao-ve-quyen-tac-gia-am-nhac-viet-nam-post715999.html"],
      ["VOV – VCPMC thu hơn 393 tỷ đồng tiền bản quyền năm 2024", "https://vov.vn/van-hoa/am-nhac/vcpmc-thu-hon-393-ty-dong-tien-ban-quyen-tac-gia-am-nhac-trong-nam-2024-post1147355.vov"],
      ["VTC News – VCPMC thu hơn 344 tỷ đồng năm 2023", "https://vtcnews.vn/vcpmc-thu-hon-344-ty-dong-tien-tac-quyen-am-nhac-trong-nam-2023-ar848626.html"],
      ["APAA – Music schools v. JASRAC", "https://apaaonline.org/article/music-schools-v-jasrac-is-a-performance-in-a-music-class-a-performance-heard-by-the-public/"],
    ],
    body: `
## Vì sao cần quản lý tập thể
Một bài hát có thể được phát cùng lúc ở hàng nghìn quán cà phê, đài phát thanh, sân khấu và ứng dụng. Nhạc sĩ không thể tự ký hợp đồng với từng người dùng, và người dùng cũng không thể xin phép từng nhạc sĩ. **Tổ chức quản lý tập thể** (collective management organization – CMO; ở Mỹ thường gọi là *performing rights organization* – PRO) giải bài toán này: nhận ủy quyền từ hàng nghìn tác giả, cấp **giấy phép trọn gói** (blanket licence) cho phép người dùng sử dụng toàn bộ kho tác phẩm với một mức phí, rồi phân chia tiền theo dữ liệu sử dụng. Đây là một mắt xích trung tâm của [[cong-nghiep-am-nhac]] và của khung pháp lý mô tả ở [[ban-quyen-am-nhac-quoc-te]].

## Lịch sử: từ quán cà phê Paris tới Hollywood
- **SACEM (Pháp)**: theo giai thoại phổ biến, năm 1847 các nhạc sĩ Ernest Bourget, Paul Henrion và Victor Parizot từ chối trả tiền đồ uống tại quán café-concert Les Ambassadeurs vì quán biểu diễn nhạc của họ mà không trả tiền. Họ thắng kiện, và năm 1850–1851 thành lập hội thu phí mà sau thành SACEM – thường được coi là tổ chức quản lý tập thể âm nhạc đầu tiên. Một số nghiên cứu gần đây cho rằng vụ kiện thực tế liên quan đến một quán khác (Café Morel), nên chi tiết giai thoại *chưa thống nhất*.
- **ASCAP (Mỹ, 1914)**: thành lập tại New York, với nhà soạn nhạc Victor Herbert trong nhóm sáng lập, nhằm thực thi quyền biểu diễn công cộng theo Luật Bản quyền 1909.
- **BMI (Mỹ, 1939)**: các đài phát thanh thuộc Hiệp hội Phát thanh Quốc gia (NAB), bất bình vì ASCAP liên tục tăng phí, lập ra BMI làm đối thủ. BMI mở cửa cho các nhạc sĩ country, blues… vốn bị ASCAP gạt ra, góp phần đưa các dòng nhạc này lên sóng. Cả hai chịu sự giám sát chống độc quyền của Bộ Tư pháp Mỹ qua các "consent decree" (thỏa thuận dưới sự giám sát của tòa, được sửa đổi nhiều lần).
- Các tổ chức lớn khác: **PRS for Music** (Anh), **GEMA** (Đức), **JASRAC** (Nhật Bản), **KOMCA** (Hàn Quốc).

::timeline 1851=SACEM 1914=ASCAP 1926=CISAC 1939=BMI 2002=VCPMC | Một số mốc ra đời của tổ chức quản lý tập thể

## CISAC và quy mô toàn cầu
**CISAC** (Liên đoàn quốc tế các hội tác giả và nhà soạn nhạc, thành lập 1926) là mạng lưới của các CMO trên thế giới, giúp tiền bản quyền chảy qua biên giới bằng các thỏa thuận đại diện song phương. Theo *Global Collections Report 2025* (số liệu năm 2024), tổng thu của các hội thành viên đạt **13,97 tỷ euro**, trong đó âm nhạc chiếm khoảng 90% với **12,59 tỷ euro** (+7,2%). Mảng số lần đầu vượt 5 tỷ euro, trở thành nguồn lớn nhất.

::bars Mỹ_và_Canada=27.9 Châu_Á–Thái_Bình_Dương=14.6 Mỹ_Latinh=5.7 Châu_Phi=0.6 max=30 | Tỷ trọng (%) thu bản quyền âm nhạc toàn cầu năm 2024 theo vùng, theo CISAC (phần còn lại chủ yếu là châu Âu)

## Các loại quyền được quản lý
| Quyền | Ví dụ sử dụng | Tổ chức thường đảm nhận |
|---|---|---|
| Biểu diễn công cộng, phát sóng | Quán cà phê, đài, concert | PRO/CMO tác giả (ASCAP, VCPMC) |
| Sao chép cơ học | Đĩa, tải về, streaming | Hội cơ học (MLC ở Mỹ) hoặc chính CMO tác giả |
| Quyền liên quan của bản ghi | Phát bản thu tại nơi công cộng | Hội của nhà sản xuất (PPL ở Anh, RIAV ở Việt Nam) |

## Tranh cãi tiêu biểu: JASRAC và lớp học nhạc
Năm 2017, JASRAC thông báo thu phí với các trường dạy nhạc. Khoảng 250 doanh nghiệp, trong đó có Yamaha, khởi kiện. Tòa án Sở hữu trí tuệ cấp cao (2021) phân định: phần **giáo viên** biểu diễn trong lớp phải trả phí, còn phần **học viên** chơi để luyện kỹ năng dưới sự hướng dẫn thì không. Tòa án Tối cao Nhật Bản giữ nguyên phần về giáo viên (7/2022) và bác kháng cáo của JASRAC về học viên (24/10/2022). Vụ này đáng chú ý với giáo viên piano: ranh giới giữa "dạy học" và "biểu diễn công cộng" được xác định qua án lệ chứ không hiển nhiên.

## Tại Việt Nam: VCPMC và RIAV
**VCPMC** (Trung tâm Bảo vệ quyền tác giả âm nhạc Việt Nam) thành lập ngày 19/4/2002, do nhạc sĩ Phó Đức Phương làm giám đốc. Theo báo Tiền Phong, năm đầu tiên trung tâm thu khoảng 78 triệu đồng với 274 thành viên; tổng thu 20 năm (2002–2021) khoảng 1.063 tỷ đồng. Năm 2023 VCPMC thu hơn 344 tỷ đồng (chưa VAT), trong đó hơn 260 tỷ từ website và ứng dụng âm nhạc, đã phân phối hơn 305 tỷ và tiến hành 34 vụ kiện xâm phạm; năm 2024 thu hơn 393 tỷ đồng (+14,2%).

::bars 2023=344 2024=393 max=400 | Tiền bản quyền VCPMC thu (tỷ đồng), theo VOV và VTC News

**RIAV** (Hiệp hội Công nghiệp ghi âm Việt Nam) là tổ chức đại diện quyền liên quan của nhà sản xuất bản ghi âm, ghi hình. Năm 2017 kế hoạch thu 2.000 đồng mỗi bài trên mỗi đầu karaoke gây phản ứng mạnh trên báo chí; cùng năm VCPMC, RIAV và APPA ký thỏa thuận để VCPMC thay mặt đàm phán và thu, còn RIAV phân phối phần bản ghi. Báo chí sau đó phản ánh việc thực hiện thỏa thuận chưa suôn sẻ. Chi tiết luật pháp trong nước xem [[ban-quyen-am-nhac-viet-nam]].

## Phê bình và độ tin cậy
Các CMO thường bị chỉ trích về tính minh bạch phân phối, chi phí quản lý và vị thế độc quyền tự nhiên; ngược lại, không có chúng, người sáng tác nhỏ gần như không thể thu tiền từ sử dụng công cộng. Số liệu CISAC là số do các hội thành viên báo cáo, quy đổi theo euro nên phụ thuộc tỷ giá; số liệu VCPMC là số tự công bố, chưa có kiểm toán độc lập được trích dẫn rộng rãi.

Xem thêm: [[cong-nghiep-am-nhac-viet-nam]], [[ban-quyen-am-nhac-quoc-te]], [[nhac-phim-va-tro-choi]].
`,
  },
  {
    slug: "cong-nghiep-am-nhac-viet-nam",
    title: "Công nghiệp âm nhạc Việt Nam",
    category: 'musicology',
    aliases: ["thị trường âm nhạc Việt Nam", "Vietnamese music industry", "Vietnam music market", "nhạc số Việt Nam", "nghe nhạc trực tuyến Việt Nam", "concert Việt Nam"],
    summary: "Tổng quan kinh tế âm nhạc Việt Nam đương đại: quy mô thị trường theo các ước tính hiện có, các nền tảng nghe nhạc (Zing MP3, NhacCuaTui, Spotify, YouTube), tiền bản quyền VCPMC, làn sóng concert 2023–2024 và các tranh chấp bản quyền trên nền tảng số.",
    refs: [
      ["Vietnam News – Việt Nam ranks among global top 50 for music copyright revenue", "https://vietnamnews.vn/life-style/1730473/vie-t-nam-ranks-among-global-top-50-for-music-copyright-revenue-report.html"],
      ["SGGP – IFPI ra mắt Bảng xếp hạng chính thức tại Việt Nam", "https://www.sggp.org.vn/ifpi-ra-mat-bang-xep-hang-chinh-thuc-tai-viet-nam-post779267.html"],
      ["VIR – Spotify launches music streaming service in Vietnam (2018)", "https://www.vir.com.vn/spotify-launches-music-streaming-service-in-vietnam-57139.html"],
      ["VOV – VCPMC thu hơn 393 tỷ đồng tiền bản quyền năm 2024", "https://vov.vn/van-hoa/am-nhac/vcpmc-thu-hon-393-ty-dong-tien-ban-quyen-tac-gia-am-nhac-trong-nam-2024-post1147355.vov"],
      ["VOV – Hanoi gets VND630 bln in tourism revenue from Blackpink concert", "https://vov.gov.vn/hanoi-gets-vnd630-bln-in-tourism-revenue-from-blackpink-concert-dtnew-496988"],
      ["Advertising Vietnam – Mô hình live concert tại Việt Nam ngày càng được ưa chuộng", "https://advertisingvietnam.com/article/mo-hinh-live-concert-tai-viet-nam-ngay-cang-duoc-ua-chuong-concert-anh-trai-vuot-ngan-chong-gai-sold-out-sau-90-phut-mo-ban-concert-anh-trai-say-hi-thu-hut-hon-20-000-nghin-luot-khan-gia-p25248"],
      ["SGGP – Trục lợi bản quyền trên nền tảng số", "https://www.sggp.org.vn/truc-loi-ban-quyen-tren-nen-tang-so-post616138.html"],
      ["VnExpress – Bóc lột trên YouTube", "https://vnexpress.net/boc-lot-tren-youtube-5075384.html"],
    ],
    body: `
## Quy mô: một thị trường nhỏ nhưng tăng nhanh
Việt Nam chưa có số liệu doanh thu ghi âm chính thức công bố đều đặn như các thị trường lớn, nên mọi con số quy mô cần đọc thận trọng. Một số mốc có nguồn rõ ràng:
- Theo dữ liệu CISAC được báo Vietnam News dẫn, tiền bản quyền tác giả thu tại Việt Nam năm 2024 đạt khoảng **14 triệu euro**, tăng 12,7% so với 2023, xếp **thứ 47** trong 50 thị trường bản quyền âm nhạc lớn nhất thế giới.
- Tháng 1/2025, IFPI ra mắt **Bảng xếp hạng chính thức Việt Nam** (Official Vietnam Chart) trong đợt triển khai tại sáu quốc gia Đông Nam Á – dấu hiệu thị trường được ngành ghi âm quốc tế coi là đủ lớn để đo đếm.
- Các hãng nghiên cứu thị trường đưa ra ước tính rất khác nhau cho doanh thu nhạc số (khoảng 50–65 triệu USD mỗi năm vào giữa thập niên 2020); các con số này *chưa thống nhất* và phương pháp không công khai đầy đủ, nên chỉ nên xem là cỡ độ lớn.

Bức tranh chung của ngành toàn cầu xem ở [[cong-nghiep-am-nhac]]; bối cảnh thể loại ở [[vpop-rap-viet]] và [[the-loai-am-nhac-viet-nam]].

## Nền tảng nghe nhạc
| Nền tảng | Ra mắt tại VN | Ghi chú |
|---|---|---|
| Zing MP3 (VNG) | 2007 | Nền tảng nội địa lớn nhất, từng là nơi tải MP3 miễn phí rồi chuyển dần sang có bản quyền |
| NhacCuaTui (NCT) | 2007 | Nền tảng nội địa thứ hai |
| Apple Music | 6/2015 | Thị phần nhỏ |
| Spotify | 13/3/2018 | Gói Premium 59.000 đồng/tháng lúc ra mắt |
| YouTube | – | Kênh phát hành MV chủ lực, nơi nghệ sĩ Việt đo độ nổi tiếng |

Một khảo sát IFPI năm 2023, được trích lại qua nguồn thứ cấp, cho thấy khoảng 66% người dùng Việt Nam vẫn nghe nhạc từ trang hoặc ứng dụng không có bản quyền. Các con số thị phần giữa Zing MP3, NhacCuaTui và Spotify đang lưu hành chủ yếu đến từ blog của các nhà phân phối, không rõ phương pháp, nên bài viết này không dẫn lại. Chỉ biết chắc rằng YouTube giữ vai trò đặc biệt: năm 2018, MV "Chạy ngay đi" của Sơn Tùng M-TP đạt khoảng 17,6 triệu lượt xem trong 24 giờ đầu theo báo chí – một ví dụ cho thấy nghệ sĩ Việt đo thành công qua lượt xem video nhiều hơn qua doanh số.

## Tiền bản quyền tác giả
VCPMC (thành lập 2002) là kênh thu chính cho nhạc sĩ. Năm 2023 trung tâm thu hơn 344 tỷ đồng, trong đó hơn 260 tỷ từ website và ứng dụng âm nhạc – tức mảng số đã chiếm áp đảo; năm 2024 thu hơn 393 tỷ đồng. Báo chí năm 2024 cũng ghi nhận nguồn thu từ phát sóng và biểu diễn giảm, và nhiều chương trình biểu diễn bị phản ánh "né" tiền tác quyền. Chi tiết tổ chức xem [[to-chuc-quan-ly-tap-the-quyen-tac-gia]].

## Làn sóng concert 2023–2024
- **BLACKPINK tại Hà Nội (29–30/7/2023)**: theo hãng theo dõi Touring Data, hai đêm tại sân Mỹ Đình bán 67.443 vé, doanh thu vé khoảng 13,7 triệu USD. Sở Du lịch Hà Nội ước tính thành phố đón khoảng 170.000 lượt khách trong hai ngày và thu khoảng 630 tỷ đồng từ du lịch – đây là ước tính của cơ quan quản lý, không phải nghiên cứu kiểm định.
- **Concert từ chương trình truyền hình thực tế (2024)**: "Anh trai say hi" (đêm đầu 28/9/2024 tại TP.HCM, khoảng 20.000 khán giả) và "Anh trai vượt ngàn chông gai" (đêm TP.HCM 19/10/2024 bán hết khoảng 20.000 vé trong khoảng 90 phút; giá vé Hà Nội từ 800.000 đến 8 triệu đồng). Doanh thu chính thức của các đêm diễn này *không được công bố*.

Hiện tượng này cho thấy dòng tiền của ngành dịch chuyển mạnh sang biểu diễn trực tiếp và mô hình "fandom" – một phần học hỏi từ [[mo-hinh-cong-nghiep-k-pop]].

## Vi phạm và tranh chấp trên nền tảng số
Ngoài nạn nghe nhạc lậu, vấn đề nổi bật là **lạm dụng Content ID của YouTube**. Báo Sài Gòn Giải Phóng ghi nhận một số đơn vị "đi trước một bước" đăng ký sở hữu tác phẩm không thuộc về mình qua Content ID; cả các tác phẩm dân gian như quan họ "Giã bạn" hay vở cải lương "Tiếng trống Mê Linh" cũng bị báo cáo vi phạm. VnExpress phân tích rằng các mạng đa kênh (MCN) gom ủy quyền của nghệ sĩ khiến nhiều người mất quyền kiểm soát sản phẩm của chính mình, còn khiếu nại phải xử lý thủ công từng video và có thể kéo dài hàng tháng. Năm 2021, MV "Chúng ta của hiện tại" (Sơn Tùng M-TP) từng bị gỡ khỏi YouTube một ngày do khiếu nại bản quyền rồi được khôi phục. Khung pháp lý trong nước xem [[ban-quyen-am-nhac-viet-nam]].

::timeline 2002=VCPMC_thành_lập 2007=Zing_MP3_và_NhacCuaTui 2018=Spotify_vào_Việt_Nam 2023=BLACKPINK_ở_Mỹ_Đình 2024=Concert_Anh_trai 2025=Official_Vietnam_Chart | Một số mốc của thị trường âm nhạc Việt Nam

## Nguồn và độ tin cậy
Số liệu VCPMC là số tự công bố; số liệu du lịch là ước tính của cơ quan nhà nước; số liệu vé BLACKPINK từ hãng tư nhân Touring Data. Quy mô thị trường nhạc số Việt Nam hiện chỉ có ước tính của các hãng nghiên cứu thương mại, mâu thuẫn nhau. Người đọc nên ưu tiên báo cáo IFPI và CISAC khi có số liệu riêng cho Việt Nam.

Xem thêm: [[vpop-rap-viet]], [[ban-quyen-am-nhac-viet-nam]], [[nghien-cuu-am-nhac-dai-chung]], [[nhac-hai-ngoai]].
`,
  },
  {
    slug: "mo-hinh-cong-nghiep-k-pop",
    title: "Mô hình công nghiệp K-pop",
    category: 'musicology',
    aliases: ["công nghiệp K-pop", "K-pop industry", "hệ thống thực tập sinh", "idol trainee system", "cultural technology", "công nghệ văn hóa", "kinh tế fandom", "HYBE", "SM Entertainment", "JYP Entertainment", "YG Entertainment", "hợp đồng nô lệ"],
    summary: "Cách ngành nhạc pop Hàn Quốc sản xuất thần tượng: hệ thống đào tạo thực tập sinh, các công ty lớn (HYBE, SM, JYP, YG), kinh tế fandom và album vật lý, chiến lược toàn cầu hóa, cùng các phê phán về hợp đồng và quy định của Ủy ban Thương mại Công bằng Hàn Quốc.",
    refs: [
      ["Wikipedia – Korean idol", "https://en.wikipedia.org/wiki/Korean_idol"],
      ["Wikipedia – Cultural technology", "https://en.wikipedia.org/wiki/Cultural_technology"],
      ["Korea Times – K-pop stars punished by unfair contracts (2014)", "https://www.koreatimes.co.kr/amp/lifestyle/20141203/k-pop-stars-punished-by-unfair-contracts"],
      ["Aju Daily – Management firms ordered to correct unfair contracts with trainees (2017)", "https://www.ajudaily.com/view/20170308140548313"],
      ["Korea Times – Hybe reports over W2 tril. in annual sales for 2nd consecutive year", "https://www.koreatimes.co.kr/www/biz/2025/02/175_392986.html"],
      ["Korea JoongAng Daily – Over 111 million physical albums sold in Korea so far this year (2023)", "https://www.koreajoongangdaily.com/entertainment/over-111-million-physical-albums-sold-in-korea-so-far-this-year/10764551"],
      ["Music Business Worldwide – Around 93m albums were sold in South Korea in 2024", "https://www.musicbusinessworldwide.com/k-pop-in-crisis-around-93m-albums-were-sold-in-south-korea-in-2024-23m-fewer-than-in-2023"],
      ["Music Business Worldwide – NewJeans lose contract battle with ADOR", "https://www.musicbusinessworldwide.com/newjeans-loses-contract-dispute-as-seoul-court-rules-in-favor-of-hybes-ador"],
    ],
    body: `
## Một ngành được thiết kế như dây chuyền
K-pop không chỉ là một thể loại mà là một **mô hình kinh doanh tích hợp dọc**: công ty quản lý (thường gọi "agency") tuyển chọn thiếu niên, đào tạo nhiều năm, ghép nhóm, sản xuất nhạc, MV, vũ đạo, quản lý hình ảnh, bán album, hàng hóa và vé concert. Mô hình này ảnh hưởng rõ đến thị trường Đông Nam Á, kể cả [[cong-nghiep-am-nhac-viet-nam]], và là chủ đề nghiên cứu của [[nghien-cuu-am-nhac-dai-chung]].

## Nguồn gốc: SM và "công nghệ văn hóa"
Lee Soo-man thành lập **SM Entertainment** năm 1995, mô phỏng công ty Johnny & Associates của Nhật Bản và hệ thống đào tạo nghệ sĩ có kế hoạch của ngành thần tượng Nhật. Trong một buổi nói chuyện tại Trường Kinh doanh Stanford năm 2011, Lee cho biết ông đặt ra thuật ngữ **"công nghệ văn hóa"** (cultural technology) khoảng mười bốn năm trước đó, khi SM quyết định đưa nghệ sĩ ra khắp châu Á. Theo một bài của tạp chí The New Yorker, nhân viên SM được yêu cầu học một cuốn cẩm nang quy định khi nào mời nhạc sĩ nước ngoài, cách điều chỉnh màn trình diễn theo từng quốc gia… Theo một con số do Wall Street Journal đưa ra (dẫn lại qua Wikipedia), chi phí đào tạo một thần tượng ở SM có thể lên tới khoảng 3 triệu USD – con số nên coi là ước tính.

## Hệ thống thực tập sinh
Thực tập sinh (trainee) học thanh nhạc, vũ đạo, ngoại ngữ, kỹ năng truyền thông trong nhiều tháng đến nhiều năm, thường xuyên qua các kỳ đánh giá loại trừ. Công ty ứng trước chi phí đào tạo, sau đó khấu trừ vào thu nhập của nghệ sĩ khi ra mắt – nguyên nhân chính của các tranh chấp hợp đồng. Bốn công ty thường được gọi là "big 4":
| Công ty | Thành lập | Nhóm tiêu biểu |
|---|---|---|
| SM Entertainment | 1995 | H.O.T., TVXQ, EXO, aespa |
| YG Entertainment | 1996 | BIGBANG, BLACKPINK |
| JYP Entertainment | 1997 | TWICE, Stray Kids |
| HYBE (tiền thân Big Hit) | 2005 | BTS, SEVENTEEN (qua Pledis), NewJeans (qua ADOR) |

## Kinh tế fandom
Doanh thu K-pop dựa nhiều vào người hâm mộ trung thành hơn là người nghe đại trà:
- **Album vật lý**: theo dữ liệu Circle Chart, năm 2023 Hàn Quốc lần đầu vượt **100 triệu album** bán ra (tháng 10/2023); cả năm khoảng 115–119 triệu tùy nguồn và cách tính. SEVENTEEN dẫn đầu với hơn 16 triệu bản. Năm 2024 giảm còn khoảng 93 triệu (giảm hơn 19%) – nhiều nhà báo gọi là "bong bóng album vỡ". Động lực được nêu là ưu đãi mua hàng (thẻ ảnh ngẫu nhiên, vé fansign) khiến một người mua nhiều bản cùng album.
- **Concert và hàng hóa**: năm 2024 HYBE đạt doanh thu 2.255 tỷ won (+3,5%), doanh thu concert cao nhất lịch sử công ty, doanh thu hàng hóa và cấp phép kỷ lục 420 tỷ won (+29,1%), dù lợi nhuận hoạt động giảm 37,5% khi BTS tạm dừng hoạt động nhóm do nghĩa vụ quân sự.

::bars 2023=115.7 2024=93 max=120 | Số album bán tại Hàn Quốc (triệu bản, top 400 Circle Chart) theo Music Business Worldwide

## Toàn cầu hóa
Chiến lược quốc tế gồm thành viên người nước ngoài (Nhật, Trung, Thái…), sáng tác chung với nhạc sĩ châu Âu – Mỹ, phát hành phiên bản tiếng Nhật, Anh, và gần đây là lập nhóm "bản địa hóa" ở nước khác (ví dụ HYBE đầu tư vào Mỹ Latinh). Mốc lớn: ngày 31/8/2020, "Dynamite" của BTS ra mắt ở vị trí số 1 Billboard Hot 100 – lần đầu tiên một nghệ sĩ toàn người Hàn Quốc đứng đầu bảng này (PSY từng dừng ở hạng 2 với "Gangnam Style" năm 2012).

::timeline 1995=SM_thành_lập 2009=KFTC_ban_hành_hợp_đồng_mẫu 2012=Gangnam_Style 2017=KFTC_yêu_cầu_sửa_hợp_đồng_thực_tập_sinh 2020=BTS_số_1_Hot_100 2023=Hơn_100_triệu_album 2025=Phán_quyết_NewJeans–ADOR | Các mốc của mô hình K-pop

## Phê phán và điều chỉnh pháp lý
- **"Hợp đồng nô lệ"**: năm 2008 các thành viên TVXQ kiện SM về hợp đồng 13 năm. Tháng 7/2009, **Ủy ban Thương mại Công bằng Hàn Quốc (KFTC)** ban hành hợp đồng độc quyền mẫu, giới hạn thời hạn tối đa **7 năm** và bỏ yêu cầu nghệ sĩ báo cáo vị trí cho công ty. Một giáo sư luật được Korea Times dẫn lời chê quy định vẫn quá có lợi cho công ty vì để ngỏ việc chia lợi nhuận. Một số nguồn ghi năm 2010 cho quy tắc 7 năm – *chưa thống nhất*.
- **Thực tập sinh**: năm 2017 KFTC yêu cầu các công ty quản lý sửa điều khoản bất công trong hợp đồng thực tập sinh, trong đó có việc giảm mức phạt khi chấm dứt sớm.
- **Tranh chấp quyền lực công ty – nghệ sĩ**: năm 2023 các thành viên EXO cáo buộc hợp đồng vượt quá thời hạn khuyến nghị; SM phản bác. Năm 2024–2025, nhóm NewJeans tìm cách chấm dứt hợp đồng với ADOR (công ty con của HYBE) sau khi giám đốc Min Hee-jin bị bãi nhiệm; ngày 30/10/2025 Tòa án Quận Trung tâm Seoul phán quyết hợp đồng vẫn có hiệu lực, và các thành viên sau đó tuyên bố tôn trọng phán quyết.
- Các phê phán khác (sức khỏe tâm thần, kiểm soát đời tư, chuẩn ngoại hình) được báo chí và giới nghiên cứu nêu nhiều nhưng khó định lượng.

## Nguồn và độ tin cậy
Số liệu tài chính lấy từ báo cáo doanh nghiệp qua báo chí; số album khác nhau tùy phạm vi bảng xếp hạng. Phần lịch sử dựa nhiều vào báo chí và bách khoa trực tuyến; nghiên cứu học thuật về K-pop rất phong phú nhưng không được trích trực tiếp ở đây.

Xem thêm: [[cong-nghiep-am-nhac]], [[xa-hoi-hoc-am-nhac]], [[nghien-cuu-am-nhac-dai-chung]].
`,
  },
  {
    slug: "vi-pham-ban-quyen-va-chia-se-tep",
    title: "Vi phạm bản quyền và chia sẻ tệp âm nhạc",
    category: 'musicology',
    aliases: ["nhạc lậu", "chia sẻ tệp ngang hàng", "peer-to-peer file sharing", "P2P", "music piracy", "Napster", "BitTorrent", "A&M Records v. Napster", "MGM v. Grokster", "iTunes Store", "khủng hoảng doanh thu âm nhạc"],
    summary: "Lịch sử chia sẻ nhạc trái phép thời Internet – từ MP3 và Napster (1999–2001) đến BitTorrent – các vụ kiện then chốt, sự ra đời của iTunes (2003), tranh luận học thuật về tác động của chia sẻ tệp, và quá trình doanh thu ngành ghi âm sụt giảm rồi phục hồi nhờ streaming.",
    refs: [
      ["Wikipedia – Napster", "https://en.wikipedia.org/wiki/Napster"],
      ["U.S. Copyright Office – A&M Records v. Napster (9th Cir. 2001) fair use summary", "https://www.copyright.gov/fair-use/summaries/a&mrecords-napster-9thcir2001.pdf"],
      ["Wikipedia – MGM Studios, Inc. v. Grokster, Ltd.", "https://en.wikipedia.org/wiki/MGM_Studios,_Inc._v._Grokster,_Ltd."],
      ["Sound & Vision – Flashback 2003: Apple Launches iTunes Store", "https://www.soundandvision.com/content/flashback-2003-apple-launches-itunes-store"],
      ["Copyright Evidence Wiki – Oberholzer-Gee and Strumpf (2007)", "https://www.copyrightevidence.org/ev2/index.php/Oberholzer-Gee_and_Strumpf_(2007)"],
      ["Digital Music News – US recorded music revenues still down 50% from 1999 peaks", "https://www.digitalmusicnews.com/2020/08/27/recorded-music-revenues-decrease/"],
      ["Music Business Worldwide – 11 takeaways from IFPI Global Music Report 2025", "https://musicbusinessworldwide.com/11-quick-and-important-takeaways-from-ifpis-global-music-report-2025"],
      ["Music Row – Global music business revenues fall below $15 billion (IFPI)", "https://musicrow.com/?p=189327"],
    ],
    body: `
## MP3 và Internet: nhạc thoát khỏi chiếc đĩa
Định dạng nén âm thanh **MP3** (chuẩn MPEG-1 Layer III, phát triển chủ yếu tại Viện Fraunhofer, Đức, đầu thập niên 1990) giảm kích thước tệp khoảng mười lần mà vẫn giữ chất lượng nghe được. Kết hợp với ổ cứng rẻ, đường truyền đại học và sau đó là băng thông rộng gia đình, MP3 biến bài hát thành dữ liệu có thể sao chép vô hạn, không hao hụt. Cuộc chuyển đổi này là chương mới của [[lich-su-thu-am]], đồng thời là cú sốc lớn nhất cho [[cong-nghiep-am-nhac]] kể từ khi có đĩa hát.

## Napster (1999–2001)
Napster ra mắt tháng 6/1999, do Shawn Fanning và Sean Parker sáng lập. Dịch vụ dùng máy chủ trung tâm để lập chỉ mục các tệp MP3 nằm trên máy người dùng, rồi cho các máy kết nối trực tiếp với nhau (ngang hàng – peer-to-peer). Hiệp hội Công nghiệp Ghi âm Mỹ (RIAA) khởi kiện tháng 12/1999. Lúc đỉnh cao, khoảng đầu năm 2001, Napster có khoảng **80 triệu người dùng đăng ký** (các nguồn lệch nhau về tháng).

Trong vụ ***A&M Records v. Napster*** (239 F.3d 1004), tháng 2/2001 Tòa phúc thẩm Khu vực 9 nhất trí rằng Napster có thể chịu trách nhiệm **gián tiếp** (contributory và vicarious infringement) cho hành vi của người dùng, bác lập luận "sử dụng hợp lý", và giữ lệnh buộc Napster lọc nội dung. Lệnh cấm chính thức được ban hành ngày 5/3/2001; ngày 1/7/2001 Napster tắt toàn bộ mạng lưới, nộp đơn phá sản tháng 6/2002. Thương hiệu sau đó được bán lại và dùng cho một dịch vụ trả phí.

## Thế hệ sau: phi tập trung và BitTorrent
Bài học từ Napster là máy chủ trung tâm khiến dịch vụ dễ bị kiện. Các mạng tiếp theo (Gnutella, Kazaa, Grokster, LimeWire) phân tán chỉ mục. Năm 2005, trong vụ ***MGM v. Grokster***, Tối cao Pháp viện Mỹ nhất trí tạo ra trách nhiệm **"xúi giục vi phạm"** (inducement): người phân phối một công cụ với mục đích khuyến khích dùng nó để vi phạm, thể hiện qua phát ngôn hoặc hành động cụ thể, phải chịu trách nhiệm cho vi phạm của người dùng; đồng thời án lệ Sony Betamax (1984) về công nghệ có công dụng hợp pháp đáng kể vẫn được giữ. **BitTorrent** (giao thức do Bram Cohen công bố năm 2001) chia tệp thành mảnh tải song song từ nhiều người, trở thành phương tiện chia sẻ chủ đạo cuối thập niên 2000. Từ 2003 RIAA còn kiện hàng nghìn cá nhân, trong đó vụ Jammie Thomas là phiên tòa bồi thẩm đoàn nổi tiếng nhất – chiến lược gây tranh cãi về hình ảnh.

## Lối thoát hợp pháp: iTunes rồi streaming
Ngày 28/4/2003 Apple mở **iTunes Music Store** với khoảng 200.000 bài từ năm hãng lớn, giá 99 cent một bài, không thuê bao; theo Apple, tuần đầu bán hơn một triệu bài. iTunes chứng minh người dùng sẵn sàng trả tiền nếu việc mua tiện hơn việc tải lậu, nhưng cũng "tách" album thành đĩa đơn, làm giảm doanh thu trên mỗi người. Giai đoạn sau 2008, streaming (Spotify ra mắt tại Thụy Điển năm 2008) mới thực sự đảo chiều.

::timeline 1999=Napster_ra_mắt 2001=A&M_v._Napster;_Napster_đóng_cửa 2003=iTunes_Store 2005=MGM_v._Grokster 2008=Spotify 2014=Đáy_doanh_thu_toàn_cầu 2024=Doanh_thu_29,6_tỷ_USD | Từ chia sẻ tệp đến streaming

## Doanh thu: sụp đổ và phục hồi
Số liệu khác nhau tùy cách đo (giá bán lẻ hay giá bán buôn, có điều chỉnh lạm phát hay không), nên cần đọc kèm nguồn:
- **Mỹ**: theo dữ liệu RIAA được Digital Music News tổng hợp (nguồn không nói rõ có điều chỉnh lạm phát hay không), doanh thu ghi âm Mỹ vượt 22,4 tỷ USD năm 1999, giảm liên tục tới 2014; năm 2019 chỉ khoảng 11,1 tỷ USD – chưa bằng một nửa đỉnh. Một số nguồn khác ghi đỉnh 1999 khoảng 14,6–15 tỷ USD (giá danh nghĩa).
- **Toàn cầu (IFPI, giá bán buôn)**: báo cáo IFPI năm 2015 ghi doanh thu 2014 là 14,97 tỷ USD; các báo cáo sau điều chỉnh lại chuỗi số và gọi đây là mức đáy khoảng 13 tỷ USD. Năm 2024 doanh thu đạt **29,6 tỷ USD** (+4,8%), năm tăng thứ 10 liên tiếp, streaming chiếm 69% (20,4 tỷ USD); năm 2025 đạt 31,7 tỷ USD.

::bars 2014=14.97 2024=29.6 2025=31.7 max=35 | Doanh thu ghi âm toàn cầu (tỷ USD, danh nghĩa) theo IFPI – số năm 2014 theo báo cáo gốc, sau đó được điều chỉnh xuống

## Chia sẻ tệp có thực sự làm giảm doanh số?
Câu hỏi này gây tranh luận học thuật kéo dài. **Oberholzer-Gee và Strumpf (2007, *Journal of Political Economy*, tập 115)** ghép dữ liệu tải về trên mạng OpenNap với doanh số album tại Mỹ, dùng kỳ nghỉ học ở Đức làm biến công cụ, và kết luận tác động của tải lậu lên doanh số "không phân biệt được với 0" về mặt thống kê. **Stan Liebowitz (2006, *Journal of Law and Economics*)** tìm thấy mối liên hệ âm khá chặt giữa chia sẻ tệp và doanh số, và phê phán biến công cụ của nhóm kia là không hợp lệ, đồng thời chỉ trích việc dữ liệu không được chia sẻ để kiểm chứng. Phần lớn các tổng quan sau này nghiêng về kết luận có tác động âm nhưng mức độ *chưa thống nhất*; ngoài chia sẻ tệp, việc "tách album" và sự cạnh tranh từ các hình thức giải trí khác cũng góp phần.

## Ở Việt Nam
Giai đoạn 2000–2010, việc tải MP3 miễn phí từ các trang nghe nhạc trong nước là phổ biến; quá trình chuyển sang nền tảng có bản quyền diễn ra muộn hơn và vẫn chưa hoàn tất – xem [[cong-nghiep-am-nhac-viet-nam]] và [[ban-quyen-am-nhac-viet-nam]].

## Nguồn và độ tin cậy
Các mốc pháp lý dựa trên văn bản án và tóm tắt chính thức; số người dùng Napster là số do công ty và báo chí công bố. Số liệu doanh thu phụ thuộc phương pháp đo và bị điều chỉnh qua các năm – đây là điểm thường bị trích sai.

Xem thêm: [[ban-quyen-am-nhac-quoc-te]], [[nghien-cuu-am-nhac-dai-chung]], [[am-nhac-hoc-ky-thuat-so]].
`,
  },
  {
    slug: "tam-ly-nguoi-nghe-tong-quan",
    title: "Tâm lý người nghe nhạc: tổng quan",
    category: 'musicology',
    aliases: ["tâm lý người nghe", "psychology of the listener", "why we listen to music", "chức năng của âm nhạc", "functions of music listening", "tại sao chúng ta nghe nhạc"],
    summary: "Trang trung tâm về tâm lý người nghe: con người nghe nhạc để làm gì, các chức năng tâm lý của việc nghe nhạc theo nghiên cứu thực nghiệm, và bản đồ dẫn tới các chủ đề chi tiết như sở thích, sự quen thuộc, rùng mình, nhạc kẹt trong đầu, ký ức và nghịch lý nhạc buồn.",
    refs: [
      ["Schäfer et al. (2013) The psychological functions of music listening – Frontiers in Psychology", "https://frontiersin.org/articles/10.3389/fpsyg.2013.00511/full"],
      ["Schäfer et al. (2013) – bản PMC", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3741536/"],
      ["Lonsdale & North (2011) Why do we listen to music? A uses and gratifications analysis", "https://researchportal.hw.ac.uk/en/publications/why-do-we-listen-to-music-a-uses-and-gratifications-analysis/"],
      ["Merriam – Uses and Functions (chương trong The Anthropology of Music, 1964)", "https://sites.ualberta.ca/~michaelf/M665/sources/Uses%20and%20Functions%20-%20Merriam.pdf"],
      ["SAGE Encyclopedia of Music and Culture – Function/Functionalism", "https://sk.sagepub.com/ency/edvol/embed/the-sage-international-encyclopedia-of-music-and-culture/chpt/function-functionalism"],
    ],
    body: `
## Người nghe như một đối tượng nghiên cứu
Phần lớn lịch sử lý luận âm nhạc tập trung vào tác phẩm và người sáng tác. **Tâm lý người nghe** đảo trọng tâm: điều gì xảy ra trong đầu và trong đời sống của người nghe khi họ chọn, nghe, nhớ và yêu thích một bản nhạc. Đây là một nhánh của [[tam-ly-hoc-am-nhac]], giao thoa với [[than-kinh-hoc-am-nhac]] (cơ chế não), [[xa-hoi-hoc-am-nhac]] (bối cảnh xã hội) và [[dan-toc-nhac-hoc]] (sự khác biệt văn hóa).

Một điểm cần nhớ: phần lớn dữ liệu trong lĩnh vực này đến từ mẫu người nghe phương Tây, thường là sinh viên đại học, và dựa nhiều vào tự báo cáo. Khi áp dụng cho người nghe Việt Nam, nên coi các kết luận là giả thuyết cần kiểm chứng hơn là quy luật phổ quát.

## Chúng ta nghe nhạc để làm gì?
### Từ nhân học: mười chức năng của Merriam
Nhà dân tộc nhạc học Alan P. Merriam, trong *The Anthropology of Music* (1964), phân biệt **cách dùng** (uses – tình huống âm nhạc được sử dụng) với **chức năng** (functions – mục đích sâu hơn mà nó phục vụ). Ông liệt kê mười chức năng kinh điển: biểu hiện cảm xúc, thưởng thức thẩm mỹ, giải trí, giao tiếp, biểu trưng, phản ứng thể chất, củng cố chuẩn mực xã hội, xác nhận thiết chế và nghi lễ, duy trì sự liên tục văn hóa, và gắn kết xã hội.

### Từ tâm lý học: ba chiều của Schäfer và cộng sự
Nghiên cứu được trích dẫn nhiều nhất về chủ đề này là của Thomas Schäfer, Peter Sedlmeier, Christine Städtler và David Huron, đăng trên *Frontiers in Psychology* năm 2013. Nhóm tổng hợp các tài liệu trước đó thành **129 chức năng không trùng lặp**, rồi cho **834 người** đánh giá mức độ quan trọng. Phân tích thành phần chính rút ra ba chiều:
1. **Điều hòa mức độ hưng phấn và tâm trạng** (arousal and mood regulation).
2. **Tự nhận thức** (self-awareness) – âm nhạc giúp suy ngẫm về bản thân, bản sắc, ý nghĩa.
3. **Gắn kết xã hội** (social relatedness) – cảm giác thuộc về nhóm, kết nối với người khác.

Phát hiện gây chú ý là hai chiều đầu được đánh giá **quan trọng hơn đáng kể** so với chiều xã hội. Các tác giả lưu ý điều này trái với giả thuyết cho rằng âm nhạc tiến hóa chủ yếu như phương tiện gắn kết cộng đồng (xem [[am-nhac-hoc-tien-hoa]]). Tuy nhiên, đây là đánh giá của người nghe hiện đại về việc nghe cá nhân, không trực tiếp kiểm định nguồn gốc tiến hóa.

### Từ lý thuyết truyền thông: "sử dụng và thỏa mãn"
Adam Lonsdale và Adrian North (2011, *British Journal of Psychology* 102(1)) tiến hành bốn nghiên cứu theo khung "sử dụng và thỏa mãn" (uses and gratifications). Kết quả: người tham gia nghe nhạc **chủ yếu để quản lý và điều hòa tâm trạng**, và việc nghe nhạc nhìn chung được đánh giá tốt hơn các hoạt động giải trí khác trong việc đáp ứng nhiều nhu cầu khác nhau. Lý do nghe nhạc cũng có thể thay đổi theo tuổi. Phê bình đối với cách tiếp cận này: nó giả định người nghe ý thức được và nói ra được lý do của mình.

| Khung lý thuyết | Tác giả, năm | Ý chính |
|---|---|---|
| Nhân học | Merriam 1964 | 10 chức năng, nhấn mạnh xã hội và nghi lễ |
| Uses and gratifications | Lonsdale & North 2011 | Quản lý tâm trạng đứng đầu |
| Phân tích thành phần | Schäfer et al. 2013 | 3 chiều: tâm trạng, tự nhận thức, xã hội |

## Bản đồ chủ đề tâm lý người nghe
Các trang chi tiết trong cụm này:
- [[so-thich-am-nhac-va-tinh-cach]] – vì sao người này mê rock, người kia mê nhạc cổ điển; mô hình STOMP và MUSIC.
- [[su-quen-thuoc-va-hieu-ung-tiep-xuc]] – vì sao nghe nhiều lần lại thấy hay hơn (đến một mức).
- [[rung-minh-khi-nghe-nhac]] – hiện tượng "nổi da gà" và hệ thống phần thưởng của não.
- [[nhac-ket-trong-dau]] – giai điệu tự lặp lại không mời mà đến.
- [[am-nhac-va-tri-nho-tu-truyen]] – "đỉnh hồi tưởng", ký ức gợi bởi âm nhạc và hoài niệm.
- Nghịch lý nhạc buồn (bài đang soạn) – vì sao ta thích nghe nhạc gợi buồn.
- Điều hoà cảm xúc bằng âm nhạc (bài đang soạn) – nghe nhạc trong đời sống hằng ngày để điều chỉnh tâm trạng, và chứng mất khoái cảm âm nhạc.

Các trang nền tảng liên quan: [[cam-xuc-am-nhac]] (âm nhạc gây cảm xúc thế nào), [[ky-vong-am-nhac]] (dự đoán và bất ngờ), [[nghe-nhac-chu-dong]] (kỹ năng nghe có chủ đích), [[tam-ly-hoc-phat-trien-am-nhac]] (người nghe thay đổi theo tuổi).

## Gợi ý cho giáo viên âm nhạc
- Ba chiều của Schäfer gợi ý rằng học sinh đến với âm nhạc trước hết vì nhu cầu cảm xúc và bản sắc, không chỉ vì kiến thức. Bài học nghe có thể bắt đầu từ câu hỏi "bản này khiến em cảm thấy gì".
- Sở thích và sự quen thuộc gắn chặt với nhau: mở rộng gu nghe cần sự tiếp xúc lặp lại, không chỉ một lần giới thiệu.

## Nguồn và độ tin cậy
Các phân loại chức năng ở trên dựa trên tự báo cáo và mẫu chủ yếu ở phương Tây. Danh sách mười chức năng của Merriam ở đây theo bản tóm tắt của từ điển bách khoa SAGE; diễn đạt cụ thể trong nguyên bản có thể khác. Kết luận "chức năng xã hội ít quan trọng hơn" của Schäfer và cộng sự là kết quả của một mẫu cụ thể và còn được tranh luận.

Xem thêm: [[tam-ly-hoc-am-nhac]], [[cam-xuc-am-nhac]], [[xa-hoi-hoc-am-nhac]], [[am-nhac-tri-lieu]].
`,
  },
  {
    slug: "so-thich-am-nhac-va-tinh-cach",
    title: "Sở thích âm nhạc và tính cách",
    category: 'musicology',
    aliases: ["gu âm nhạc và tính cách", "music preferences and personality", "mô hình STOMP", "mô hình MUSIC", "MUSIC model", "STOMP model", "Big Five và âm nhạc"],
    summary: "Bài viết trình bày các nghiên cứu về mối liên hệ giữa gu nghe nhạc và tính cách: mô hình STOMP (Rentfrow & Gosling 2003), mô hình năm yếu tố MUSIC (2011), mối liên hệ với Big Five, độ lớn hiệu ứng nhỏ theo phân tích tổng hợp, và dữ liệu xuyên văn hóa từ hơn 50 quốc gia.",
    refs: [
      ["Rentfrow & Gosling (2003) The Do Re Mi's of Everyday Life – hồ sơ bài báo", "https://findanexpert.unimelb.edu.au/scholarlywork/1207891-the-do-re-mi's-of-everyday-life--the-structure-and-personality-correlates-of-music-preferences"],
      ["University of Texas (2003) – thông cáo về nghiên cứu Rentfrow & Gosling", "https://news.utexas.edu/2003/06/18/university-researchers-find-clues-to-personality-traits-in-musical-preferences"],
      ["Rentfrow, Goldberg & Levitin (2011) The Structure of Musical Preferences: A Five-Factor Model", "https://wicri-demo.istex.fr/Wicri/Musique/explor/OperaV1/Site/fr/Main/Exploration/bibRecord.php?hk=000A50"],
      ["Psychology of music preference – Wikipedia (tóm tắt phân tích tổng hợp Schäfer & Mehlhorn 2017)", "https://en.wikipedia.org/wiki/Psychology_of_music_preference"],
      ["Greenberg et al. (2016) The song is you: preferences for musical attribute dimensions reflect personality", "https://www.repository.cam.ac.uk/items/5604ea39-c1bf-41fd-81df-5835bad042de"],
      ["University of Cambridge (2022) Musical preferences unite personalities worldwide", "https://www.cam.ac.uk/stories/musical-preferences-unite-personalities-worldwide"],
      ["Greenberg et al. (2022) Universals and Variations in Musical Preferences – bản PDF", "https://Www.Gwern.net/doc/psychology/personality/2022-greenberg.pdf"],
    ],
    body: `
## Câu hỏi "nghe gì nói lên bạn là ai"
Người ta thường đoán tính cách của nhau qua gu nhạc: người mê metal "nổi loạn", người nghe nhạc cổ điển "sâu sắc". Tâm lý học tính cách đã kiểm tra trực giác này bằng các khảo sát lớn từ đầu những năm 2000. Kết quả: có mối liên hệ thật, ổn định qua nhiều nền văn hóa, nhưng **yếu hơn nhiều** so với định kiến thông thường. Chủ đề này thuộc cụm [[tam-ly-nguoi-nghe-tong-quan]].

## Mô hình STOMP (2003)
Peter J. Rentfrow và Samuel D. Gosling công bố "The Do Re Mi's of Everyday Life" trên *Journal of Personality and Social Psychology* (2003, tập 84, số 6). Phân tích sở thích của hơn **3.500 người** hội tụ thành bốn chiều, gọi tắt là STOMP (Short Test Of Music Preferences là tên bảng hỏi):

| Chiều | Thể loại tiêu biểu |
|---|---|
| Suy tư và phức tạp (Reflective and Complex) | cổ điển, jazz, folk, blues |
| Mãnh liệt và nổi loạn (Intense and Rebellious) | rock, metal |
| Vui tươi và quy ước (Upbeat and Conventional) | pop, country |
| Năng động và nhịp điệu (Energetic and Rhythmic) | rap, hip-hop và các dòng nhạc nhảy |

Các chiều này liên hệ với tính cách (đặc biệt là **Cởi mở với trải nghiệm**), quan điểm bản thân (như khuynh hướng chính trị) và năng lực nhận thức (như IQ ngôn ngữ). Theo thông cáo của Đại học Texas, người ưa chiều "suy tư và phức tạp" có xu hướng giàu tưởng tượng, coi trọng trải nghiệm thẩm mỹ và khoan dung.

## Mô hình MUSIC (2011): vượt khỏi nhãn thể loại
Vấn đề của STOMP là dựa vào **nhãn thể loại** – mà "rock" hay "jazz" có nghĩa khác nhau với mỗi người và mỗi thời. Rentfrow, Lewis R. Goldberg và Daniel J. Levitin (2011, *JPSP*) cho người tham gia nghe các trích đoạn nhạc thật và tìm ra cấu trúc năm yếu tố **"không phụ thuộc thể loại"**, phản ánh chủ yếu phản ứng cảm xúc:
- **M**ellow (êm dịu): mượt mà, thư giãn, như soft rock, soul.
- **U**npretentious (mộc mạc): chân thành, "gốc rễ", như country, singer-songwriter. Một bản tóm tắt sớm gọi yếu tố này là "Campestral".
- **S**ophisticated (tinh tế): cổ điển, opera, world music, jazz.
- **I**ntense (mãnh liệt): to, mạnh, nhiều năng lượng, như rock, metal.
- **C**ontemporary (đương đại): rap, nhạc điện tử.

Mô hình đã được tái lập: nghiên cứu "The Song Remains the Same" (2012) khôi phục được cấu trúc MUSIC chỉ với nhạc jazz và rock; một nghiên cứu ở Croatia cũng tái lập được, trong khi một nghiên cứu ở Malaysia chỉ ủng hộ một phần.

### Thuộc tính âm nhạc thay vì thể loại
David M. Greenberg và cộng sự (2016, "The song is you") đi xa hơn, mô tả nhạc theo ba chiều thuộc tính – **hưng phấn** (arousal), **cảm xúc dương/âm** (valence) và **chiều sâu** (depth) – và cho thấy sở thích theo các chiều này phản ánh tính cách.

## Độ lớn hiệu ứng: nhỏ
Phân tích tổng hợp của Thomas Schäfer và Claudia Mehlhorn (2017, *Personality and Individual Differences*, tập 116) là "gáo nước lạnh" quan trọng. Theo bản tóm tắt thứ cấp trên Wikipedia, chỉ **6 trên 30 nghiên cứu** báo cáo hệ số tương quan giữa tính cách và sở thích thể loại vượt quá 0,1; đa số hệ số gần bằng 0. Cởi mở với trải nghiệm là đặc điểm dự báo mạnh nhất, nhưng vẫn ở mức nhỏ.

Hàm ý thực tế: biết gu nhạc của một người chỉ giúp đoán tính cách của họ tốt hơn ngẫu nhiên một chút. Những định kiến kiểu "fan metal thì hung hăng" không được dữ liệu ủng hộ. Một số nghiên cứu mới dùng dữ liệu streaming hoặc lượt "thích" trên mạng xã hội báo cáo tương quan cao hơn, nhưng chưa phải đồng thuận của các phân tích tổng hợp.

## Dữ liệu xuyên văn hóa
Greenberg và cộng sự (2022) phân tích dữ liệu của **356.649 người** ở sáu châu lục: nghiên cứu 1 (284.935 người, 53 quốc gia) dùng bảng đánh giá thể loại, nghiên cứu 2 (71.714 người, 36 quốc gia) dùng trích đoạn âm thanh. Cấu trúc năm yếu tố MUSIC **bất biến giữa các quốc gia**. Hướng liên hệ cũng lặp lại: người hướng ngoại thích nhạc "đương đại", người cởi mở thích nhạc "tinh tế". Lưu ý: các trích đoạn là **nhạc phương Tây**, nên "phổ quát" ở đây là phổ quát trong phản ứng với nhạc phương Tây, không phải với mọi truyền thống âm nhạc (xem [[dan-toc-nhac-hoc]]).

## Các yếu tố khác ảnh hưởng đến sở thích
Tính cách chỉ là một phần. Sở thích còn chịu tác động mạnh của tuổi tác và giai đoạn phát triển ([[tam-ly-hoc-phat-trien-am-nhac]]), mức độ tiếp xúc ([[su-quen-thuoc-va-hieu-ung-tiep-xuc]]), bản sắc nhóm và tầng lớp xã hội ([[xa-hoi-hoc-am-nhac]]), cùng với mục đích nghe trong từng tình huống (điều hoà cảm xúc bằng âm nhạc).

## Nguồn và độ tin cậy
Danh sách thể loại cho từng chiều STOMP lấy từ thông cáo báo chí và các bản tóm tắt; bảng hỏi gốc có thể phân loại chi tiết hơn. Số liệu "6/30 nghiên cứu" lấy từ bản tóm tắt thứ cấp, chưa đối chiếu trực tiếp với bài báo gốc. Phần lớn dữ liệu là tự báo cáo, mẫu thiên về người dùng internet.

Xem thêm: [[tam-ly-hoc-am-nhac]], [[cam-xuc-am-nhac]], [[tam-ly-nguoi-nghe-tong-quan]].
`,
  },
  {
    slug: "su-quen-thuoc-va-hieu-ung-tiep-xuc",
    title: "Sự quen thuộc và hiệu ứng tiếp xúc trong âm nhạc",
    category: 'musicology',
    aliases: ["hiệu ứng tiếp xúc đơn thuần", "mere exposure effect", "familiarity and liking in music", "đường cong chữ U ngược Berlyne", "inverted-U", "Wundt curve", "sự lặp lại trong âm nhạc"],
    summary: "Vì sao một bài hát nghe nhiều lần lại thấy hay hơn, rồi đến lúc lại nhàm? Bài viết trình bày hiệu ứng tiếp xúc đơn thuần (Zajonc 1968), mô hình chữ U ngược của Berlyne, các thí nghiệm về sự quen thuộc và yêu thích trong âm nhạc, cùng vai trò của sự lặp lại.",
    refs: [
      ["Zajonc (1968) Attitudinal Effects of Mere Exposure – toàn văn", "https://cdn.isr.umich.edu/pubFiles/historicPublications/Theattitudinaleffects_2360_.PDF"],
      ["Chmiel & Schubert (2017) Back to the inverted-U for music preference: a review of the literature", "https://researchers.westernsydney.edu.au/en/publications/back-to-the-inverted-u-for-music-preference-a-review-of-the-liter/"],
      ["Szpunar, Schellenberg & Pliner (2004) Liking and memory for musical stimuli as a function of exposure", "https://pubmed.ncbi.nlm.nih.gov/14979811/"],
      ["Pereira et al. (2011) Music and Emotions in the Brain: Familiarity Matters – PubMed", "https://pubmed.ncbi.nlm.nih.gov/22110619/"],
      ["Albrecht – Review of Margulis, On Repeat (Music Theory Online)", "https://www.mtosmt.org/issues/mto.14.20.4/mto.14.20.4.albrecht.html"],
      ["Hargreaves (1984) The effects of repetition on liking for music", "https://Www.Gwern.net/doc/psychology/novelty/1984-hargreaves.pdf"],
    ],
    body: `
## Nghe nhiều thì thích
Một quan sát quen thuộc với giáo viên và người làm radio: bài hát lúc đầu "không có gì đặc biệt" lại trở nên cuốn hút sau vài lần nghe. Tâm lý học gọi đây là **hiệu ứng tiếp xúc đơn thuần** (mere exposure effect). Nhưng sự lặp lại cũng có giới hạn: nghe quá nhiều, bài hát trở nên nhàm. Hiểu hai mặt này giúp lý giải cả gu nghe cá nhân ([[so-thich-am-nhac-va-tinh-cach]]) lẫn chiến lược phát sóng của [[cong-nghiep-am-nhac]].

## Zajonc và hiệu ứng tiếp xúc đơn thuần
Robert B. Zajonc công bố chuyên khảo "Attitudinal Effects of Mere Exposure" trên *Journal of Personality and Social Psychology* (Monograph Supplement, 1968, tập 9). Giả thuyết: **việc tiếp xúc lặp lại với một kích thích, chỉ cần nó được tri giác, đủ để làm tăng thái độ tích cực** với kích thích đó. Thú vị là Zajonc ghi nhận các nghiên cứu sớm hơn về câu hỏi này "hầu như đều liên quan đến việc thưởng thức âm nhạc", dù chính các thí nghiệm của ông chủ yếu dùng kích thích thị giác (chữ lạ, hình ảnh).

Các nghiên cứu âm nhạc sau đó xác nhận hiệu ứng: Heingartner và Hall (1974) cho người nghe tiếp xúc lặp lại với nhạc Pakistan và thấy mức yêu thích tăng. Isabelle Peretz, Danielle Gaudreau và Anne-Marie Bonnel (1998, *Memory & Cognition* 26) được trích dẫn như bằng chứng rằng tiếp xúc có thể làm tăng yêu thích **ngay cả khi người nghe không nhớ rõ** đã nghe bản nhạc đó.

## Berlyne và đường cong chữ U ngược
Daniel Berlyne (thập niên 1970) đề xuất rằng mức yêu thích phụ thuộc vào **"tiềm năng gây hưng phấn"** của kích thích, gồm các biến "đối chiếu" (collative) như độ mới lạ, độ phức tạp, sự bất ngờ. Quá đơn giản hoặc quá quen thì nhàm; quá phức tạp hoặc quá lạ thì khó chịu; mức vừa phải được ưa thích nhất. Đồ thị có dạng chữ U ngược (còn gọi là đường cong Wundt).

Sự quen thuộc tương tác với độ phức tạp: nghe lặp lại làm bản nhạc "bớt phức tạp" về mặt chủ quan. Vì vậy bản nhạc đơn giản đạt đỉnh yêu thích nhanh rồi nhàm, còn bản nhạc phức tạp cần nhiều lần nghe hơn mới đạt đỉnh – một gợi ý cho việc giới thiệu nhạc cổ điển hay jazz trong lớp học.

### Mô hình còn đứng vững?
Tamara Chmiel và Emery Schubert (2017, *Psychology of Music*) rà soát **57 nghiên cứu** về sở thích âm nhạc và kết luận **50 nghiên cứu (87,7%)** tương thích với một mô hình chữ U ngược tổng quát (dạng "phân đoạn"), cho rằng việc coi mô hình là lỗi thời là phóng đại. Tuy nhiên, các tác giả khác đọc cùng tổng quan này thận trọng hơn, cho rằng chỉ khoảng 15 nghiên cứu cho thấy rõ dạng chữ U ngược. Khác biệt đến từ cách phân loại; vấn đề **chưa thống nhất**.

## Cách nghe quyết định đường cong
Karl Szpunar, E. Glenn Schellenberg và Patricia Pliner (2004, *Journal of Experimental Psychology: Learning, Memory, and Cognition* 30(2)) tiến hành ba thí nghiệm và phát hiện:
- **Nghe thoáng qua** (incidental – nhạc làm nền khi làm việc khác): mức yêu thích **tăng đều** theo số lần nghe, rõ hơn với nhạc thật (ecological validity cao).
- **Nghe tập trung** (focused): mức yêu thích theo **chữ U ngược** – tăng lúc đầu rồi giảm, vì người nghe "hết điều mới để khám phá" và chán.
- Trí nhớ nhận diện tăng theo số lần nghe khi nghe tập trung, nhưng yếu khi nghe thoáng qua.

Các tác giả giải thích bằng lý thuyết của Bornstein: tiếp xúc làm kích thích được xử lý **trôi chảy** hơn (fluency), và cảm giác trôi chảy được diễn giải thành "thích" – trừ khi người nghe nhận ra mình đã nghe quá nhiều.

## Bằng chứng từ não
Carlos Silva Pereira, Elvira Brattico và cộng sự (2011, *PLoS ONE* 6(11)) tách riêng ảnh hưởng của **quen thuộc** và **yêu thích** bằng fMRI với các trích đoạn pop/rock cá nhân hóa. Kết quả: nhạc quen thuộc kích hoạt mạnh hơn các vùng hệ viền, cận viền và hệ thống phần thưởng so với nhạc lạ; còn khác biệt giữa nhạc thích và không thích chỉ thể hiện ở các cụm nhỏ hơn. Các tác giả kết luận **sự quen thuộc là yếu tố then chốt** trong sự gắn kết cảm xúc với âm nhạc. Xem thêm [[than-kinh-hoc-am-nhac]].

## Sự lặp lại bên trong âm nhạc
Sự quen thuộc không chỉ đến từ việc nghe lại cả bài, mà từ chính cấu trúc lặp lại trong bài. Theo một bài điểm sách trên *Music Theory Online*, David Huron và Joy Ollen ước tính khoảng **94%** đoạn nhạc trong một mẫu xuyên văn hóa được lặp lại nguyên văn ở đâu đó về sau. Elizabeth Hellmuth Margulis, trong *On Repeat: How Music Plays the Mind* (Oxford, 2013/2014), lập luận rằng lặp lại là trung tâm của trải nghiệm nghe: nó giúp người nghe định hướng, dự đoán ([[ky-vong-am-nhac]]) và "tham gia" vào bản nhạc. Lặp lại cũng là một điều kiện giúp giai điệu dễ thành [[nhac-ket-trong-dau]].

## Nguồn và độ tin cậy
Hiệu ứng tiếp xúc trong âm nhạc được tái lập nhiều lần, nhưng độ lớn và hình dạng đường cong phụ thuộc vào cách nghe, loại nhạc, số lần lặp và khoảng cách giữa các lần nghe. Chi tiết nghiên cứu Peretz et al. (1998) và Heingartner & Hall (1974) ở đây dựa trên mô tả của các bài báo trích dẫn chúng.

Xem thêm: [[tam-ly-nguoi-nghe-tong-quan]], [[ky-vong-am-nhac]], [[nghe-nhac-chu-dong]].
`,
  },
  {
    slug: "rung-minh-khi-nghe-nhac",
    title: "Rùng mình khi nghe nhạc (chills, frisson)",
    category: 'musicology',
    aliases: ["nổi da gà khi nghe nhạc", "chills", "frisson", "musical chills", "thrills", "shivers down the spine", "aesthetic chills", "khoái cảm đỉnh điểm khi nghe nhạc"],
    summary: "Hiện tượng \"nổi da gà\", ớn lạnh sống lưng khi nghe một đoạn nhạc: lịch sử nghiên cứu từ Goldstein (1980) và Panksepp (1995), những đặc điểm âm nhạc thường gây rùng mình, bằng chứng hình ảnh não về hệ thống phần thưởng và dopamine (Blood & Zatorre 2001; Salimpoor et al. 2011), cùng khác biệt giữa các cá nhân.",
    refs: [
      ["Goldstein (1980) Thrills in response to music and other stimuli – Springer", "https://link.springer.com/article/10.3758/BF03326460"],
      ["Panksepp (1995) The Emotional Sources of \"Chills\" Induced by Music", "https://labs.sonicfield.org/library/the-emotional-sources-of-chills-induced-by-music"],
      ["Blood & Zatorre (2001) Intensely pleasurable responses to music… PNAS – PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC58814"],
      ["BRAMS – Salimpoor et al. (2011) Nature Neuroscience: dopamine release and peak emotion to music", "https://brams.org/2011/01/09/salimpoor/"],
      ["Mallik, Chanda & Levitin (2017) Anhedonia to music and mu-opioids – PMC", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5296903/"],
      ["PsyPost (2016) Getting chills from great music connected to a cognitive dimension of personality", "https://www.psypost.org/2016/06/getting-chills-great-music-connected-new-cognitive-dimension-personality-43577"],
      ["Nusbaum & Silvia (2011) On Personality and Piloerection", "https://researchgate.net/profile/Emily-Nusbaum/publication/232493918_On_Personality_and_Piloerection_Individual_Differences_in_Aesthetic_Chills_and_Other_Unusual_Aesthetic_Experiences/links/56eec1e808ae4b8b5e752829/On-Personality-and-Piloerection-Individual-Differences-in-Aesthetic-Chills-and-Other-Unusual-Aesthetic-Experiences.pdf"],
      ["Journal of Music – Tears and chills", "https://journalofmusic.com/focus/tears-and-chills"],
    ],
    body: `
## Hiện tượng
Nhiều người từng trải qua cảm giác **ớn lạnh chạy dọc sống lưng**, nổi da gà, tê rần trên da đầu khi một đoạn nhạc lên cao trào. Trong tiếng Anh, hiện tượng này được gọi là *chills*, *thrills* hay *frisson* (từ tiếng Pháp, "rùng mình"). Đây là một trong số ít phản ứng cảm xúc với âm nhạc có **dấu hiệu sinh lý đo được**, vì thế trở thành "cửa sổ" quan trọng để nghiên cứu khoái cảm âm nhạc. Xem thêm [[cam-xuc-am-nhac]] và [[tam-ly-nguoi-nghe-tong-quan]].

::timeline 1980=Goldstein:_thrills 1991=Sloboda:_đặc_điểm_âm_nhạc 1995=Panksepp:_chills_và_nỗi_buồn 2001=Blood_&_Zatorre:_PET 2011=Salimpoor:_dopamine 2017=Mallik:_opioid | Các mốc nghiên cứu chính về rùng mình khi nghe nhạc

## Những nghiên cứu đầu tiên
**Avram Goldstein** (1980, *Physiological Psychology* 8) khảo sát và thấy **khoảng một nửa** số người được hỏi từng có cảm giác tê rần đặc trưng ("thrills") trước các kích thích gây xúc động, trong đó âm nhạc đặc biệt hiệu quả. Ông thử tiêm naloxone (chất đối kháng opioid) và thấy cảm giác giảm ở một số người – nhưng chính tác giả gọi kết quả là sơ bộ; các bài sau ghi nhận chỉ 3 trên 10 người báo cáo giảm. Sách phổ biến thường trình bày phát hiện này chắc chắn hơn thực tế.

**Jaak Panksepp** (1995, *Music Perception* 13(2)) cho người nghe giơ tay khi rùng mình và thấy chills tập trung vào một số khoảnh khắc, như đoạn crescendo trong một bản nhạc của Pink Floyd. Chills tương quan với **nỗi buồn được cảm nhận** mạnh hơn nhiều so với niềm vui. Panksepp đề xuất rằng chills có thể chung nền tảng thần kinh hóa học với cảm giác mất mát xã hội (như tiếng khóc chia ly). Giả thuyết này **chưa được thống nhất**: một nghiên cứu sau với 118 đoạn nhạc do người nghe tự chọn thấy điểm đánh giá buồn và hoài niệm rất thấp.

## Đặc điểm âm nhạc gây rùng mình
John Sloboda (1991) cho người nghe nhớ lại những khoảnh khắc gây phản ứng cơ thể. Theo các bản tóm tắt:
- **Rùng mình** gắn mạnh nhất với **hòa âm mới hoặc bất ngờ** và thay đổi đột ngột về cường độ hay kết cấu.
- **Rơi nước mắt** gắn với **nốt luyến/appoggiatura giai điệu**, chuỗi mô tiến (sequence) và vòng quãng năm.

Grewe và cộng sự (2007) bổ sung: chills thường xảy ra khi **âm lượng tăng**, khi **giọng hoặc nhạc cụ mới xuất hiện**. Những đặc điểm này đều liên quan đến sự vi phạm hoặc thỏa mãn [[ky-vong-am-nhac]]. Lưu ý: khái niệm "appoggiatura" của Sloboda rộng hơn nghĩa thông thường, nên không thể coi nó là điều kiện cần hay đủ để gây xúc động.

## Bằng chứng từ não
### Blood và Zatorre (2001)
Anne Blood và Robert Zatorre (*PNAS* 98(20)) dùng chụp PET đo lưu lượng máu não khi người tham gia nghe **nhạc tự chọn** từng gây chills. Chills đi kèm thay đổi nhịp tim, điện cơ và hô hấp. Khi cường độ chills tăng, hoạt động tăng ở **thể vân bụng, não giữa, hạch hạnh nhân, vỏ não trán ổ mắt** – những vùng cũng phản ứng với thức ăn, tình dục và chất gây nghiện. Kết luận: âm nhạc dùng chung mạch khoái cảm với các phần thưởng sinh tồn.

### Salimpoor và cộng sự (2011)
Valorie Salimpoor, Robert Zatorre và cộng sự (*Nature Neuroscience*, tháng 1/2011) dùng chất đánh dấu [11C]raclopride trên PET để đo trực tiếp việc giải phóng **dopamine** nội sinh ở thể vân vào lúc cảm xúc đỉnh điểm. Kết hợp với fMRI, nhóm phát hiện sự phân ly theo thời gian:
- **Nhân đuôi** (caudate) hoạt động nhiều hơn trong **giai đoạn chờ đợi** cao trào.
- **Nhân cạnh vách** (nucleus accumbens) hoạt động nhiều hơn khi **trải nghiệm** cao trào.

Đây được coi là bằng chứng đầu tiên rằng một phần thưởng trừu tượng như âm nhạc có thể gây giải phóng dopamine. Lưu ý: vai trò của nhân đuôi dựa vào dữ liệu thời gian từ fMRI, gián tiếp hơn phép đo PET. Xem [[than-kinh-hoc-am-nhac]].

### Opioid
Adiel Mallik, Mona Lisa Chanda và Daniel Levitin (2017, *Scientific Reports*) cho 17 người dùng naltrexone (chất chặn thụ thể mu-opioid) hoặc giả dược trong thiết kế mù đôi bắt chéo. Dưới tác dụng của naltrexone, **cả phản ứng cảm xúc tích cực lẫn tiêu cực** với âm nhạc đều giảm, đo bằng sinh lý và tự báo cáo. Các tác giả kết luận opioid nội sinh cần thiết cho trải nghiệm cảm xúc âm nhạc, bổ sung cho bức tranh dopamine; mẫu nghiên cứu còn nhỏ.

## Khác biệt giữa các cá nhân
Không phải ai cũng rùng mình khi nghe nhạc. Emily Nusbaum và Paul Silvia (2011, *Psychology of Aesthetics, Creativity, and the Arts*) khảo sát 188 người trẻ: người **cởi mở với trải nghiệm** và có chuyên môn nghệ thuật báo cáo chills thẩm mỹ thường xuyên hơn. Mitchell Colver và Amani El-Alayli (2016, *Psychology of Music*) thấy chính **thành phần nhận thức** của tính cởi mở – như hình dung âm nhạc, dự đoán diễn tiến – liên quan mạnh hơn thành phần cảm xúc. Tuy nhiên, một nghiên cứu năm 2019 (Starcke và cộng sự) không tìm thấy mối liên hệ này, nên vấn đề **còn tranh cãi**. Ở cực bên kia là những người hầu như không có khoái cảm với âm nhạc – xem điều hoà cảm xúc bằng âm nhạc (mục mất khoái cảm âm nhạc).

## Nguồn và độ tin cậy
Bằng chứng não bộ (Blood & Zatorre; Salimpoor) dựa trên mẫu nhỏ, nhạc tự chọn. Tỷ lệ "khoảng một nửa" người có chills là của một khảo sát năm 1980; các nghiên cứu khác dùng định nghĩa và mẫu khác nên cho tỷ lệ khác. Mối liên hệ chills với nỗi buồn chưa được thống nhất.

Xem thêm: nghịch lý nhạc buồn, [[ky-vong-am-nhac]], [[than-kinh-hoc-am-nhac]].
`,
  },
  {
    slug: "nhac-ket-trong-dau",
    title: "Nhạc kẹt trong đầu (earworm, INMI)",
    category: 'musicology',
    aliases: ["earworm", "sâu tai", "involuntary musical imagery", "INMI", "hình ảnh âm nhạc không chủ ý", "stuck song syndrome", "bài hát cứ vang trong đầu"],
    summary: "Hiện tượng một đoạn nhạc tự vang lên và lặp đi lặp lại trong đầu mà không chủ ý: mức độ phổ biến, các tác nhân khởi phát, đặc điểm giai điệu khiến bài hát dễ \"kẹt\", và những cách đối phó đã được thử nghiệm.",
    refs: [
      ["Liikkanen (2012) Musical activities predispose to involuntary musical imagery – Psychology of Music", "https://journals.sagepub.com/doi/10.1177/0305735611406578"],
      ["Williamson et al. (2012) How do earworms start? Classifying the everyday circumstances of INMI", "https://research.gold.ac.uk/id/eprint/7140"],
      ["Jakubowski et al. (2017) Dissecting an Earworm: Melodic Features and Song Popularity Predict INMI", "https://research.gold.ac.uk/19405"],
      ["Newswise – Psychologists identify key characteristics of earworms", "https://www.newswise.com/articles/psychologists-identify-key-characteristics-of-earworms"],
      ["Beaman & Williams (2010) Earworms (stuck song syndrome): towards a natural history of intrusive thoughts", "https://pubmed.ncbi.nlm.nih.gov/19948084/"],
      ["Beaman, Powell & Rapley (2015) Want to block earworms from conscious awareness? B(u)y gum!", "https://centaur.reading.ac.uk/40114/"],
      ["Williamson & Müllensiefen – Earworms from three angles", "https://research.gold.ac.uk/id/eprint/10192"],
      ["Durham University – What is an earworm?", "https://musicscience.net/projects/music-memory/earworms/"],
    ],
    body: `
## Định nghĩa
"Nhạc kẹt trong đầu" – tiếng Anh là *earworm* (dịch sát từ tiếng Đức *Ohrwurm*, "con sâu tai") – là trải nghiệm một đoạn giai điệu **tự xuất hiện trong tâm trí và lặp lại ngoài tầm kiểm soát có ý thức**. Giới nghiên cứu dùng thuật ngữ trung tính hơn là **hình ảnh âm nhạc không chủ ý** (*involuntary musical imagery*, INMI), để phân biệt với việc chủ động "hát thầm trong đầu". Đây là một trong những hiện tượng phổ biến nhất của đời sống nghe nhạc; xem tổng quan ở [[tam-ly-nguoi-nghe-tong-quan]].

## Phổ biến đến mức nào?
Lassi A. Liikkanen (2012, *Psychology of Music*) khảo sát **12.519 người dùng internet Phần Lan**. Theo tóm tắt bài báo, **89,2%** cho biết gặp hiện tượng này ít nhất một lần mỗi tuần (một số bài trích dẫn sau ghi 91,7% – con số chính xác cần đối chiếu bản gốc). Các phát hiện khác:
- Lượng **tập luyện và nghe nhạc** càng nhiều thì INMI càng thường xuyên.
- Người có nhiều năm tập luyện lại **ít bị khó chịu** hơn vì nó.
- Phụ nữ báo cáo nhiều hơn nam giới; tần suất **giảm dần theo tuổi**.

C. Philip Beaman và Tim Williams (2010, *British Journal of Psychology*) khảo sát hơn 100 người và cho 12 người ghi nhật ký bốn tuần. Họ thấy: giai điệu kẹt khác nhau giữa các cá nhân nhưng **luôn là nhạc quen thuộc** với người đó; hiếm khi kéo dài quá 24 giờ; và độ dài đoạn nhạc lẫn trải nghiệm thường vượt quá ước tính thông thường về dung lượng trí nhớ thính giác. Người coi âm nhạc là quan trọng thấy earworm dài hơn và khó kiểm soát hơn, nhưng chuyên môn âm nhạc tự nó dường như không làm earworm phổ biến hơn. Các nguồn thứ cấp thường nói earworm điển hình dài 15–30 giây và là đoạn điệp khúc, nhưng con số này **chưa được xác minh** từ bài gốc.

::bars Liikkanen_2012:_ít_nhất_hằng_tuần=89.2 max=100 | Tỷ lệ người trả lời gặp INMI ít nhất mỗi tuần (%), mẫu 12.519 người Phần Lan

## Điều gì khởi phát earworm?
Victoria J. Williamson, Lauren Stewart, Daniel Müllensiefen và cộng sự (2012, *Psychology of Music* 40(3)) phân tích định tính các báo cáo từ thính giả đài BBC 6 Music và một khảo sát trực tuyến. Theo một bản tin tóm tắt, dữ liệu từ 604 người cho thấy bốn nhóm tác nhân chính:
1. **Tiếp xúc với âm nhạc** – vừa nghe bài đó gần đây hoặc nhiều lần (phổ biến nhất).
2. **Gợi nhớ** – một người, nơi chốn, từ ngữ liên tưởng tới bài hát.
3. **Trạng thái cảm xúc** – tâm trạng nhất định.
4. **Trạng thái chú ý thấp** – mơ màng, làm việc lặp lại, nhàm chán.

Tác nhân thứ nhất cho thấy mối liên hệ chặt với [[su-quen-thuoc-va-hieu-ung-tiep-xuc]]: nghe càng nhiều và càng gần đây thì càng dễ kẹt.

## Bài hát nào dễ "kẹt"?
Kelly Jakubowski, Sebastian Finkel, Lauren Stewart và Daniel Müllensiefen (2017, *Psychology of Aesthetics, Creativity, and the Arts* 11(2)) dùng dữ liệu của **3.000 người** kể tên bài hát hay kẹt trong đầu (giới hạn ở pop, rock, rap, R&B):
- Bài hát **thành công hơn trên bảng xếp hạng Anh** và **có mặt gần đây hơn** được nhắc nhiều hơn.
- So sánh 100 bài thường được nhắc với 100 bài không bao giờ được nhắc (khớp về độ phổ biến và phong cách) qua 83 đặc điểm giai điệu: bài "earworm" có **nhịp độ nhanh hơn**, **đường nét giai điệu tổng thể phổ biến** (dạng lên rồi xuống quen thuộc), nhưng lại có **độ dốc trung bình giữa các điểm ngoặt của giai điệu ít phổ biến** so với kho nhạc pop lớn – tức là khung quen thuộc nhưng chi tiết có điểm khác lạ.
- Theo báo chí đưa tin, "Bad Romance" của Lady Gaga đứng đầu danh sách bài hát hay kẹt nhất.

Với người học piano, điều này gợi ý vì sao một số giai điệu dễ thuộc hơn: đường nét quen + một "móc câu" bất thường là công thức của [[ky-vong-am-nhac]] được thỏa mãn và bị phá vỡ cùng lúc.

## Có hại không, và làm sao thoát?
Phần lớn earworm là **trung tính hoặc dễ chịu**; chỉ một phần nhỏ gây phiền toái. Một số cách đã được thử:
- **Nhai kẹo cao su**: Beaman, Powell và Rapley (2015, *Quarterly Journal of Experimental Psychology* 68(6)) thấy nhai kẹo cao su – vốn chiếm dụng hệ thống lập kế hoạch vận động phát âm dùng khi "hát thầm" – làm giảm cả hình ảnh âm nhạc chủ ý lẫn không chủ ý.
- **Nghe trọn bài hát** hoặc làm một việc cần tập trung vừa phải – các chiến lược được người tham gia khảo sát tự báo cáo, bằng chứng thực nghiệm hạn chế hơn.

## Nguồn và độ tin cậy
Hầu hết dữ liệu là tự báo cáo hồi cố, mẫu thiên về người phương Tây có học vấn – điều mà chính các bài tổng quan về INMI đã lưu ý. Tỷ lệ phổ biến khác nhau tùy cách hỏi. Chưa có nghiên cứu nào về earworm ở người nghe Việt Nam mà chúng tôi tìm thấy.

Xem thêm: [[am-nhac-va-tri-nho-tu-truyen]], [[than-kinh-hoc-am-nhac]], [[tam-ly-hoc-am-nhac]].
`,
  },
  {
    slug: "am-nhac-va-tri-nho-tu-truyen",
    title: "Âm nhạc và trí nhớ tự truyện",
    category: 'musicology',
    aliases: ["đỉnh hồi tưởng âm nhạc", "reminiscence bump", "music-evoked autobiographical memories", "MEAMs", "ký ức gợi bởi âm nhạc", "hoài niệm âm nhạc", "music-evoked nostalgia", "song-specific age"],
    summary: "Vì sao một bài hát có thể đưa ta trở về tuổi hai mươi? Bài viết trình bày \"đỉnh hồi tưởng\" trong sở thích âm nhạc, các nghiên cứu về ký ức tự truyện gợi bởi âm nhạc (MEAMs) và cơ sở não bộ của chúng, hiện tượng hoài niệm, và trí nhớ âm nhạc ở người bệnh Alzheimer.",
    refs: [
      ["Cornell Chronicle (2013) Young adults are fond of their parents' music, too – Krumhansl & Zupnick", "https://news.cornell.edu/node/282295"],
      ["Janata (2009) The neural architecture of music-evoked autobiographical memories – PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2758676"],
      ["Janata, Tomic & Rakowski (2007) Characterisation of music-evoked autobiographical memories", "https://www.ingentaconnect.com/content/routledg/pmem/2007/00000015/00000008/art00005;jsessionid=1tf8binboxwa9.x-ic-live-01"],
      ["Barrett et al. (2010) Music-evoked nostalgia: affect, memory, and personality – PDF", "https://www.southampton.ac.uk/~crsi/Barrett,%20grimm,%20Robins,%20Wildschut,%20Sedikides,%20&%20Janata,%202010,%20Emotion.pdf"],
      ["Is there a peak in popular music preference at a certain song-specific age? (replication of Holbrook & Schindler)", "https://journals.sagepub.com/doi/10.1177/1747021820940300"],
      ["Jacobsen et al. (2015) Why musical memory can be preserved in advanced Alzheimer's disease – PubMed", "https://pubmed.ncbi.nlm.nih.gov/26041611/"],
      ["Max Planck Society – Alzheimer's spares long-term musical memory", "https://www.mpg.de/9281090/alzheimers-long-term-musical-memory"],
    ],
    body: `
## Âm nhạc như "cỗ máy thời gian"
Nghe lại bài hát thời sinh viên, nhiều người không chỉ nhận ra giai điệu mà còn "thấy lại" căn phòng, người bạn, mùa hè năm ấy. Tâm lý học gọi đó là **ký ức tự truyện gợi bởi âm nhạc** (music-evoked autobiographical memories, MEAMs). Hiện tượng này liên quan tới sự quen thuộc ([[su-quen-thuoc-va-hieu-ung-tiep-xuc]]), cảm xúc ([[cam-xuc-am-nhac]]) và được ứng dụng trong [[am-nhac-tri-lieu]]. Xem tổng quan ở [[tam-ly-nguoi-nghe-tong-quan]].

## Đỉnh hồi tưởng trong sở thích âm nhạc
Trong nghiên cứu trí nhớ, **đỉnh hồi tưởng** (reminiscence bump) chỉ xu hướng người lớn tuổi nhớ nhiều sự kiện từ tuổi vị thành niên và đầu trưởng thành hơn các giai đoạn khác. Âm nhạc thể hiện điều này rất rõ.

### Holbrook và Schindler (1989)
Morris Holbrook và Robert Schindler (*Journal of Consumer Research*) cho 108 người đánh giá 28 bài hát phổ biến phát hành từ 1932 đến 1986 và tính **"tuổi gắn với bài hát"** (song-specific age = năm bài hát nổi tiếng trừ năm sinh của người nghe). Mức yêu thích theo đường chữ U ngược, **đạt đỉnh ở khoảng 23,5 tuổi** (một số nguồn làm tròn thành 24).

### Các nghiên cứu tái lập: đỉnh trẻ hơn
Các nghiên cứu sau xác nhận có đỉnh, nhưng ở tuổi **trẻ hơn**: Hemming (2013) thấy đỉnh ở khoảng 17,4 tuổi; một nghiên cứu ở Đức với 162 người thấy đỉnh khoảng 14,2 tuổi; một nghiên cứu với mẫu đại diện hơn thấy khoảng 17 tuổi. Hemming còn cho rằng hình chữ U ngược không xuất hiện ở từng cá nhân mà có thể là sản phẩm của việc gộp dữ liệu. Các tổng quan hiện đặt "đỉnh hồi tưởng âm nhạc" trong khoảng **15–25 tuổi**.

::bars Holbrook_&_Schindler_1989=23.5 Hemming_2013=17.4 Tái_lập_Đức=14.2 max=30 | Tuổi đạt đỉnh yêu thích nhạc phổ thông theo một số nghiên cứu (năm)

### Đỉnh hồi tưởng "lan truyền" qua thế hệ
Carol Lynne Krumhansl và Justin Zupnick (2013, *Psychological Science*) cho **62 sinh viên** nghe hai bài hit Billboard mỗi năm từ 1955 đến 2009. Ngoài đỉnh ở nhạc thời chính họ ngoài 20, nhóm thấy một đỉnh **bất ngờ lớn** ở nhạc đầu thập niên 1980 – lúc **cha mẹ họ** 20–25 tuổi – về trí nhớ, nhận diện, đánh giá chất lượng, yêu thích và gắn bó cảm xúc. Một đỉnh nhỏ hơn ở thập niên 1960 có thể được "truyền" từ ông bà. Các tác giả gọi đây là **"đỉnh hồi tưởng xếp tầng"** (cascading reminiscence bumps) và cho rằng nó phản ánh âm nhạc nghe trong gia đình thời thơ ấu (xem [[tam-ly-hoc-phat-trien-am-nhac]]). Mẫu nhỏ, chỉ gồm sinh viên Mỹ.

## Ký ức tự truyện gợi bởi âm nhạc
Petr Janata, Stefan Tomic và Sonja Rakowski (2007, *Memory* 15) cho sinh viên nghe các trích đoạn nhạc phổ thông từ bảng xếp hạng Billboard. Trung bình **khoảng 30% lượt nghe** gợi lên ký ức tự truyện; đa số bài gợi cảm xúc, chủ yếu tích cực, và **hoài niệm** là cảm xúc phổ biến thứ ba. Ký ức thường xoay quanh trường học và bạn bè.

### Cơ sở não bộ
Janata (2009, *Cerebral Cortex* 19(11)) dùng fMRI với 13 sinh viên nghe các đoạn nhạc 30 giây từ thời thơ ấu và tuổi teen của họ. **Vỏ não trước trán giữa phần lưng** (dorsal MPFC) hoạt động mạnh hơn khi đoạn nhạc càng có ý nghĩa tự truyện, đồng thời theo dõi chuyển động điệu tính của bản nhạc. Vùng này vì thế được xem như một "điểm nối" giữa âm nhạc, ký ức và cảm xúc. Xem [[than-kinh-hoc-am-nhac]].

## Hoài niệm
Frederick Barrett, Petr Janata, Constantine Sedikides và cộng sự (2010, *Emotion* 10(3)) cho người tham gia nghe ngẫu nhiên các trích đoạn nhạc phổ thông. Cảm giác hoài niệm tăng theo **mức độ gắn với bản thân, độ hưng phấn, sự quen thuộc** và số lượng cảm xúc – cả vui, buồn lẫn hỗn hợp – mà bài hát gợi ra. Hoài niệm đi cùng **cả niềm vui và nỗi buồn**, điều giúp giải thích một phần vì sao ta thích nghe nhạc gợi buồn (nghịch lý nhạc buồn). Người có thiên hướng hoài niệm cao – đặc điểm mà nghiên cứu thấy liên quan với chiều "Buồn" trong thang tính cách thần kinh cảm xúc ANPS và với tính bất ổn cảm xúc (neuroticism) – trải nghiệm hoài niệm mạnh hơn. Một nghiên cứu tái lập năm 2024 với mẫu lớn và đa dạng hơn cho thấy các kết quả chính phần lớn vẫn đứng vững.

## Trí nhớ âm nhạc trong bệnh Alzheimer
Người chăm sóc thường kể rằng bệnh nhân Alzheimer nặng vẫn hát theo bài hát cũ. Jörn-Henrik Jacobsen, Robert Turner và cộng sự (2015, *Brain* 138) dùng fMRI 7 Tesla trên 32 người trẻ và xác định hai vùng mã hóa nhạc **quen thuộc lâu năm**: vỏ đai trước phần đuôi và vùng tiền vận động bổ sung phần bụng. Khi đối chiếu với dữ liệu 20 bệnh nhân Alzheimer, các vùng này **teo ít nhất** và ít rối loạn chuyển hóa glucose so với phần còn lại của não. Đây là gợi ý, chưa phải kết luận: mẫu nhỏ và dựa trên phân tích vùng quan tâm.

## Nguồn và độ tin cậy
Tuổi đỉnh hồi tưởng **chưa thống nhất** giữa các nghiên cứu (14–24 tuổi tùy phương pháp). Hầu hết dữ liệu đến từ nhạc phổ thông Mỹ hoặc châu Âu. Với người nghe Việt Nam, giả thuyết hợp lý là đỉnh hồi tưởng gắn với nhạc phổ biến thời trẻ của mỗi thế hệ (xem [[nhac-pho-thong-the-ky-20]], [[vpop-rap-viet]]), nhưng chúng tôi chưa tìm thấy nghiên cứu kiểm chứng.

Xem thêm: [[am-nhac-tri-lieu]], [[nhac-ket-trong-dau]], [[tam-ly-hoc-phat-trien-am-nhac]].
`,
  },
  {
    slug: "nhac-nen-va-hieu-suat-lam-viec",
    title: "Nhạc nền và hiệu suất làm việc",
    category: 'musicology',
    aliases: ["nhạc nền khi học", "nghe nhạc khi làm việc", "background music and cognition", "background music", "irrelevant sound effect", "hiệu ứng âm thanh không liên quan"],
    summary: "Tổng quan nghiên cứu về việc nghe nhạc trong khi đọc, ghi nhớ hay làm việc: kết quả phân tích gộp, vai trò của lời bài hát, hiệu ứng âm thanh không liên quan và khác biệt giữa người hướng nội và hướng ngoại.",
    refs: [
      ["Kämpfe, Sedlmeier & Renkewitz – The impact of background music on adult listeners: A meta-analysis (Psychology of Music)", "https://journals.sagepub.com/doi/10.1177/0305735610376261"],
      ["Vasilev, Kirkby & Angele (2018) – Auditory Distraction During Reading: A Bayesian Meta-Analysis (PMC)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC6139986/"],
      ["Salamé & Baddeley (1989) – Effects of background music on phonological short-term memory (PDF)", "https://www.Gwern.net/doc/music/music-distraction/1989-salame.pdf"],
      ["Thompson, Schellenberg & Husain (2001) – Arousal, Mood, and the Mozart Effect (PDF)", "https://sites.utm.utoronto.ca/sites/sites.utm.utoronto.ca.glenn_website/files/download/Thompson2001.pdf"],
      ["Furnham & Bradley (1997) – Music while you work: introverts and extraverts (PDF)", "https://www.Gwern.net/doc/music/music-distraction/1997-furnham.pdf"],
      ["Lim, Furnham & McClelland (2021) – UCL Discovery", "https://discovery-pp.ucl.ac.uk/id/eprint/10132491"],
    ],
    body: `
## Câu hỏi quen thuộc: nghe nhạc có giúp làm việc tốt hơn?

Rất nhiều người bật nhạc khi học bài, viết lách, lập trình hay dọn nhà. Tâm lý học đã nghiên cứu câu hỏi này hàng chục năm, và câu trả lời ngắn gọn là: **tùy thuộc vào loại nhạc, loại công việc và loại người nghe**. Không có bằng chứng vững chắc rằng nhạc nền "nói chung" làm người ta thông minh hơn hay kém đi; thay vào đó có những hiệu ứng riêng, đôi khi ngược chiều nhau. Bài này thuộc mảng [[tam-ly-hoc-am-nhac]] và bổ sung cho [[tam-ly-nguoi-nghe-tong-quan]].

## Phân tích gộp Kämpfe và cộng sự

Nghiên cứu tổng hợp được trích dẫn nhiều nhất là phân tích gộp của **Juliane Kämpfe, Peter Sedlmeier và Frank Renkewitz**, *The impact of background music on adult listeners: A meta-analysis*, đăng trên tạp chí *Psychology of Music* (bản trực tuyến cuối năm 2010, số in tập 39, kỳ 4, năm 2011 — vì thế tài liệu trích dẫn khi ghi 2010, khi ghi 2011). Các kết luận chính theo tóm tắt của bài:

- Khi gộp tất cả các nghiên cứu lại, **hiệu ứng tổng thể gần bằng không**. Các tác giả cho rằng nguyên nhân là những hiệu ứng riêng lẻ triệt tiêu lẫn nhau khi lấy trung bình.
- So với im lặng, nhạc nền có vẻ **cản trở việc đọc** và có tác động bất lợi nhỏ lên **trí nhớ**.
- Ngược lại, nhạc nền dường như cải thiện **phản ứng cảm xúc** và **thành tích thể thao**.
- **Nhịp độ** của nhạc ảnh hưởng tới tốc độ của hoạt động mà người nghe đang làm.
- Nhiều nghiên cứu gốc không báo cáo đủ số liệu, nên khả năng phát hiện hiệu ứng cụ thể bị hạn chế; các tác giả kêu gọi lý thuyết cụ thể hơn và phương pháp chặt chẽ hơn.

## Đọc hiểu và lời bài hát

Phân tích gộp Bayes của **Vasilev, Kirkby và Angele (2018)** trên tạp chí *Perspectives on Psychological Science* (tập 13, số 5) tổng hợp 65 nghiên cứu về xao nhãng thính giác khi đọc. Kết quả: tiếng ồn, tiếng nói và âm nhạc đều làm giảm hiệu suất đọc ở mức **nhỏ nhưng đáng tin cậy**; người lớn và trẻ em bị ảnh hưởng tương đương; **lời nói nghe hiểu được và nhạc có lời** gây xao nhãng mạnh nhất. Theo một bản tóm lược thứ cấp, ước lượng chung cho tác động của nhạc lên việc đọc là khoảng g = −0,19 — một hiệu ứng nhỏ; các tác giả cũng lưu ý nhiều nghiên cứu gốc có cỡ mẫu thấp.

Một số nghiên cứu khác (chủ yếu với sinh viên Trung Quốc) cho thấy lời bằng tiếng mẹ đẻ gây hại nhiều nhất cho đọc hiểu, và những người quen nghe nhạc khi đọc bị ảnh hưởng ít hơn. Các kết quả này đến từ từng nghiên cứu riêng lẻ, chưa nên khái quát hóa.

## Hiệu ứng âm thanh không liên quan

Trong tâm lý học nhận thức, *irrelevant sound effect* (hiệu ứng âm thanh không liên quan) chỉ hiện tượng âm thanh mà ta được dặn bỏ qua vẫn làm giảm khả năng ghi nhớ chuỗi thông tin bằng lời. Thí nghiệm kinh điển của **Salamé và Baddeley (1989)**, *Quarterly Journal of Experimental Psychology*, cho người tham gia nhớ chuỗi chín chữ số trình bày bằng mắt trong khi có nhạc phát:

| Điều kiện nền | Mức gây nhiễu trí nhớ (theo các thí nghiệm của Salamé và Baddeley) |
|---|---|
| Nhạc có lời (thanh nhạc) | Gây nhiễu rõ, nhiều hơn nhạc không lời |
| Nhạc không lời | Gây nhiễu ít hơn; ở một thí nghiệm không khác đáng kể so với im lặng |
| Tiếng nói | Gây nhiễu mạnh nhất |
| Tiếng ồn điều biên | Không khác im lặng |

Các tác giả giải thích bằng một "kho âm vị" trong trí nhớ làm việc vốn tiếp nhận âm thanh giống lời nói. Tuy nhiên ranh giới "lời nói hoặc không phải lời nói" vẫn **còn tranh luận**: các nghiên cứu sau cho thấy cả âm thanh không phải lời nói, nếu biến đổi nhiều, cũng có thể gây nhiễu, và Pring và Walker (1994) thấy nhạc không lời gắn với lời quen thuộc (như bài đồng dao) vẫn cản trở xử lý ngôn ngữ.

## Hưng phấn, tâm trạng và "hiệu ứng Mozart"

Một hướng giải thích khác cho rằng nhạc tác động gián tiếp thông qua **mức hưng phấn (arousal) và tâm trạng**. **Thompson, Schellenberg và Husain (2001)**, *Psychological Science* 12(3), cho người tham gia nghe một sonata Mozart (vui, nhiều năng lượng) hoặc một adagio của Albinoni (chậm, buồn) trước khi làm bài kiểm tra không gian. Nhóm Mozart làm tốt hơn, nhưng khi kiểm soát thống kê sự khác biệt về mức thích thú, hưng phấn và tâm trạng thì "hiệu ứng Mozart" biến mất. Nghiên cứu tiếp theo cho thấy nhịp độ chủ yếu tác động lên hưng phấn, còn điệu thức trưởng hoặc thứ chủ yếu tác động lên tâm trạng. Nói cách khác, nhạc vui trước khi làm bài có thể giúp ích một chút, nhưng không phải vì Mozart có phép màu (xem thêm [[hoc-nhac-va-tri-tue]]).

## Người hướng nội và hướng ngoại

Adrian Furnham và cộng sự tại University College London thực hiện một loạt nghiên cứu dựa trên thuyết của Eysenck về mức kích thích vỏ não tối ưu: người hướng nội vốn đã có mức kích thích cao nên dễ "quá tải" khi có thêm nhạc.

- **Furnham và Bradley (1997)**: chỉ 10 người hướng nội và 10 người hướng ngoại; nhạc pop làm giảm trí nhớ tức thì ở cả hai nhóm, nhưng người hướng nội chịu thiệt nhiều hơn ở trí nhớ trì hoãn và đọc hiểu.
- **Furnham và Allass (1999)**: 24 + 24 người, thay đổi độ phức tạp của nhạc; tương tác tính cách và điều kiện nhạc có ý nghĩa ở ba trên bốn bài kiểm tra.
- **Furnham và Strbac (2002)**: so sánh nhạc với tiếng ồn văn phòng; tương tác có ý nghĩa ở bài đọc hiểu.

Kết quả lặp lại **không đồng nhất**: Lim, Furnham và McClelland (2021) ghi nhận khác biệt hướng nội và hướng ngoại xuất hiện ở mẫu phương Tây nhưng không ở mẫu châu Á. Cỡ mẫu nhỏ của các nghiên cứu ban đầu khiến kết luận cần thận trọng.

## Gợi ý thực hành và độ tin cậy

- Với việc đọc, viết, học từ vựng: nhạc **không lời**, quen thuộc, âm lượng vừa phải ít gây hại hơn nhạc có lời.
- Với việc lặp lại, thể chất hoặc cần tâm trạng tích cực: nhạc có thể hữu ích nhờ tác động lên cảm xúc và hưng phấn (xem điều hoà cảm xúc bằng âm nhạc).
- Khác biệt cá nhân (tính cách, thói quen, sở thích) lớn; nên tự thử nghiệm thay vì tin vào quy tắc chung.

**Độ tin cậy:** các phân tích gộp đều nhấn mạnh hiệu ứng nhỏ, nghiên cứu gốc có cỡ mẫu thấp và thiết kế không đồng nhất. Những khẳng định quảng cáo kiểu "nhạc giúp tăng năng suất X%" thường không có cơ sở khoa học tương xứng.

Xem thêm: [[tam-ly-hoc-am-nhac]], [[cam-xuc-am-nhac]], [[than-kinh-hoc-am-nhac]], [[am-nhac-va-hanh-vi-tieu-dung]].
`,
  },
  {
    slug: "am-nhac-va-hanh-vi-tieu-dung",
    title: "Âm nhạc và hành vi tiêu dùng",
    category: 'musicology',
    aliases: ["nhạc trong cửa hàng", "nhạc bán lẻ", "in-store music", "music and consumer behaviour", "atmospherics", "sonic branding", "thương hiệu âm thanh", "audio logo", "musical fit"],
    summary: "Các nghiên cứu về cách nhạc nền trong siêu thị, nhà hàng và quảng cáo ảnh hưởng đến lựa chọn, thời gian lưu lại và chi tiêu của khách hàng, từ thí nghiệm rượu vang của North, Hargreaves và McKendrick đến nghiên cứu nhịp độ của Milliman và xây dựng thương hiệu bằng âm thanh.",
    refs: [
      ["North, Hargreaves & McKendrick (1997) – In-store music affects product choice (Nature)", "https://www.nature.com/articles/36484"],
      ["North, Hargreaves & McKendrick (1999) – The influence of in-store music on wine selections", "https://academicnewsletter.sufe.edu.cn/info/372829"],
      ["Milliman (1986) – The Influence of Background Music on the Behavior of Restaurant Patrons (JCR)", "https://academic.oup.com/jcr/article-abstract/13/2/286/1846377"],
      ["Pipedown – phân tích phê bình nghiên cứu Milliman 1982", "https://pipedown.org.uk/more-suspect-research-about-piped-musics-benefits"],
      ["Garlin & Owen (2006) – Setting the tone with the tune: meta-analytic review (UTS)", "https://opus.lib.uts.edu.au/handle/10453/5258"],
      ["North, McKenzie, Law & Hargreaves (2004) – Effects of musical and voice fit on responses to advertisements", "https://eprints.worc.ac.uk/3067"],
      ["Nghiên cứu về khả năng ghi nhớ 90 logo âm thanh (Cambridge Repository)", "https://www.repository.cam.ac.uk/items/903c50f3-6d66-4721-af94-7c037073b139"],
    ],
    body: `
## Âm nhạc như một phần của "bầu không khí" bán hàng

Từ thập niên 1970, ngành marketing dùng khái niệm *atmospherics* để chỉ việc thiết kế môi trường mua sắm — ánh sáng, mùi, màu sắc và âm thanh — nhằm tác động tới khách hàng. Âm nhạc là yếu tố rẻ và dễ thay đổi nhất, nên trở thành đề tài nghiên cứu phổ biến của cả tâm lý học lẫn marketing. Chủ đề này nằm giao giữa [[tam-ly-hoc-am-nhac]], [[xa-hoi-hoc-am-nhac]] và [[cong-nghiep-am-nhac]].

## Nhịp độ: các nghiên cứu của Milliman

**Ronald Milliman (1982)**, *Journal of Marketing* 46, thay đổi nhịp độ nhạc nền trong một siêu thị Mỹ. Khi nhạc chậm, khách di chuyển chậm hơn và doanh số cao hơn so với ngày nhạc nhanh; con số thường được trích là doanh số cao hơn khoảng **38%**. Tuy vậy, một bài phân tích phê bình chỉ ra rằng chênh lệch này là so với **nhạc nhanh**, còn giữa nhạc chậm và **không có nhạc** thì không có khác biệt có ý nghĩa thống kê — điều mà nhiều nguồn quảng bá dịch vụ nhạc nền bỏ qua. Nghiên cứu cũng chỉ diễn ra ở một cửa hàng trong thời gian ngắn.

Năm **1986**, Milliman lặp lại ý tưởng trong một nhà hàng (*Journal of Consumer Research* 13(2)): nhịp độ nhạc ảnh hưởng có ý nghĩa đến thời gian khách ngồi lại và lượng mua. Theo các bản tóm lược thứ cấp, vào tối có nhạc chậm khách ở lâu hơn và chi nhiều hơn cho đồ uống có cồn; các con số cụ thể lưu hành trên mạng (số phút, phần trăm doanh thu quầy bar) **không kiểm chứng được** qua nguồn gốc trong quá trình biên soạn bài này. Xem thêm [[nhip-do]].

## Thí nghiệm rượu vang Pháp và Đức

Nghiên cứu nổi tiếng nhất về **sự tương hợp (congruity)** là của **Adrian North, David Hargreaves và Jennifer McKendrick**, báo cáo ngắn trên *Nature* (1997) và bản đầy đủ trên *Journal of Applied Psychology* 84(2), 1999.

- Bối cảnh: quầy rượu trong một siêu thị, trưng bày bốn loại vang Pháp và bốn loại vang Đức; mỗi kệ có một chai Pháp và một chai Đức.
- Can thiệp: luân phiên các ngày phát nhạc accordion đậm chất Pháp và nhạc kiểu quán bia Đức, trong khoảng hai tuần.
- Kết quả: ngày nhạc Pháp, vang Pháp bán chạy hơn vang Đức; ngày nhạc Đức thì ngược lại.
- Nhận thức: qua bảng hỏi, phần lớn khách **không nhận ra** nhạc ảnh hưởng đến lựa chọn của mình; theo bài trên *Nature*, chỉ sáu người trả lời "có".

Các nguồn thứ cấp đưa ra tỷ lệ phần trăm khác nhau (ví dụ "77% vang bán ra là vang Pháp" hoặc "83% người mua"), và cỡ mẫu nhỏ (vài chục chai và 44 người trả lời bảng hỏi). Kết quả nên được hiểu là minh họa cơ chế **mồi (priming)**: âm nhạc gợi lên kiến thức liên quan đến một quốc gia, khiến sản phẩm phù hợp dễ được chọn hơn.

Một nghiên cứu khác thường được trích là của **Areni và Kim (1993)** tại một cửa hàng rượu: nhạc cổ điển không làm khách mua **nhiều** chai hơn, nhưng gắn với việc chọn chai **đắt** hơn so với nhạc pop. Nguồn gốc của nghiên cứu này không được kiểm tra trực tiếp khi biên soạn, chỉ dựa trên các bài tóm lược.

## Bức tranh tổng hợp

Phân tích gộp của **Garlin và Owen (2006)**, *Journal of Business Research* 59(6), gộp 148 quan sát từ 32 nghiên cứu về nhạc nền trong bán lẻ. Kết luận: âm nhạc có tác động **nhỏ đến trung bình** nhưng khá ổn định lên ba nhóm kết quả — lợi ích tài chính, thời gian lưu lại và phản ứng cảm xúc của khách. Như vậy hiệu ứng có thật nhưng không "thần kỳ".

::bars Số_nghiên_cứu=32 Số_quan_sát=148 max=160 | Quy mô phân tích gộp Garlin và Owen (2006)

## Âm nhạc trong quảng cáo và thương hiệu âm thanh

Trong quảng cáo, khái niệm **"musical fit"** chỉ mức độ phù hợp giữa nhạc và thông điệp hoặc thương hiệu. North, McKenzie, Law và Hargreaves (2004), *Journal of Applied Social Psychology* 34(8), khảo sát tác động của sự phù hợp giữa nhạc, giọng đọc và sản phẩm lên phản ứng với quảng cáo phát thanh. Một số nghiên cứu sau đề xuất rằng tương hợp **vừa phải** có thể hiệu quả hơn tương hợp quá cao hoặc quá thấp, nhưng điều này chưa được thống nhất.

**Sonic branding** (thương hiệu âm thanh) gồm logo âm thanh ngắn, jingle, nhạc hiệu. Một nghiên cứu ở Đại học Cambridge với 90 logo âm thanh thương mại và 1.860 người tham gia cho thấy khả năng được nhận ra và nhớ lại **khác nhau đáng kể giữa các logo**, gắn với đặc điểm giai điệu. Ngược lại, một luận văn thạc sĩ tại Đại học Missouri không thấy logo âm thanh cải thiện việc nhớ thương hiệu. Các con số kiểu "86% người tiêu dùng…" xuất hiện trong báo cáo ngành thường không có nghiên cứu được bình duyệt đứng sau. Về cơ chế ghi nhớ giai điệu ngắn, xem [[nhac-ket-trong-dau]] và [[su-quen-thuoc-va-hieu-ung-tiep-xuc]].

## Nguồn và độ tin cậy

- Các nghiên cứu kinh điển (Milliman, North và cộng sự) là **thực nghiệm hiện trường** quy mô nhỏ, một địa điểm, thời gian ngắn; ít được lặp lại đúng nguyên mẫu.
- Ngành dịch vụ nhạc nền thương mại thường trích dẫn kết quả theo cách phóng đại; cần đối chiếu với bài gốc.
- Đạo đức: việc tác động đến lựa chọn mà người mua không nhận ra đặt ra câu hỏi về thao túng; đồng thời việc phát nhạc nơi công cộng ở Việt Nam còn liên quan đến tiền bản quyền (xem [[ban-quyen-am-nhac-viet-nam]]).

Xem thêm: [[nhac-nen-va-hieu-suat-lam-viec]], [[tam-ly-nghe-nhac-thoi-streaming]], [[cong-nghiep-am-nhac]].
`,
  },
  {
    slug: "tam-ly-nghe-nhac-thoi-streaming",
    title: "Tâm lý nghe nhạc thời streaming",
    category: 'musicology',
    aliases: ["hành vi bỏ qua bài hát", "skip behaviour", "skipping behavior", "nghe nhạc trực tuyến", "playlist", "danh sách phát", "phát ngẫu nhiên", "thuật toán gợi ý nhạc", "algorithmic recommendation", "attention economy"],
    summary: "Cách nền tảng streaming thay đổi thói quen nghe: hành vi bỏ qua bài hát, danh sách phát và chế độ phát ngẫu nhiên, xu hướng phần mở đầu bài hát ngắn lại, và ảnh hưởng của thuật toán gợi ý lên sự đa dạng của khẩu vị.",
    refs: [
      ["Montecchio, Roy & Pachet (2020) – The skipping behavior of users of music streaming services and its relation to musical structure (PLOS ONE, PMC)", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7526936/"],
      ["Donier – The universality of skipping behaviours on music streaming platforms (arXiv)", "https://arxiv.org/pdf/2005.06987"],
      ["Léveillé Gauvin (2018) – Drawing listener attention in popular music (Musicae Scientiae)", "https://pure.etsmtl.ca/en/publications/drawing-listener-attention-in-popular-music-testing-five-musical-/"],
      ["Ohio State University – Has music streaming killed the instrumental intro?", "https://news.osu.edu/has-music-streaming-killed-the-instrumental-intro/"],
      ["Anderson et al. (2020) – Algorithmic Effects on the Diversity of Consumption on Spotify (WWW 2020)", "https://www.cs.utoronto.ca/~ashton/pubs/alg-effects-spotify-www2020.pdf"],
      ["IFPI – Engaging with Music 2023", "https://www.ifpi.org/ifpis-global-study-finds-were-listening-to-more-music-in-more-ways-than-ever"],
      ["Digital Music News – Spotify random shuffle feature", "https://www.digitalmusicnews.com/2020/03/18/spotify-random-shuffle-feature/"],
      ["Hypebot – Songs are getting shorter and streaming is to blame", "https://www.hypebot.com/songs-are-getting-shorter-and-streaming-is-to-blame/"],
    ],
    body: `
## Bối cảnh

Streaming đã trở thành cách nghe nhạc chủ đạo. Theo báo cáo *Engaging with Music 2023* của **IFPI** (khảo sát hơn 43.000 người ở 26 quốc gia), người được hỏi nghe trung bình **20,7 giờ nhạc mỗi tuần** (năm 2022: 20,1 giờ), và 73% cho biết có nghe qua dịch vụ streaming âm thanh có bản quyền. Khi người nghe có trong tay hàng chục triệu bài và nút "bỏ qua", tâm lý nghe nhạc cũng thay đổi: sự chú ý trở thành tài nguyên khan hiếm, và dữ liệu hành vi khổng lồ mở ra cách nghiên cứu mới cho [[tam-ly-hoc-am-nhac]] và [[am-nhac-hoc-ky-thuat-so]].

## Hành vi bỏ qua bài hát (skip)

Nghiên cứu tiêu biểu là **Montecchio, Roy và Pachet (2020)**, ba nhà nghiên cứu của Spotify, đăng trên *PLOS ONE*. Dựa trên hơn **3 tỷ sự kiện bỏ qua** (chủ yếu từ Mỹ, Anh, Mexico và Đức), họ phân tích *thời điểm* trong bài mà người nghe bấm bỏ qua.

- Phần lớn lượt bỏ qua tập trung ở **những giây đầu** bài; một phân tích trước đó (được nhóm tác giả dẫn lại và tái xác nhận bằng dữ liệu tháng 8/2018) cho thấy khoảng **một phần tư** số bài bị bỏ qua trong 5 giây đầu. Ngoài ra có xu hướng bỏ qua phần kết.
- "Hồ sơ bỏ qua" của mỗi bài rất **đặc trưng cho từng bài** và ổn định theo thời gian, theo vùng địa lý; nó gắn với **cấu trúc âm nhạc** — các đỉnh nhỏ xuất hiện quanh những điểm chuyển đoạn (ví dụ vào điệp khúc).
- Một bài báo tiếp theo của Spotify (Donier, bản tiền ấn phẩm arXiv) mô hình hóa việc bỏ qua như một quá trình ngẫu nhiên: phần mở đầu gây ra phản ứng mạnh rồi giảm dần, còn mỗi "bất ngờ" âm nhạc gây thêm một đợt nhỏ, với dạng thời gian khá giống nhau giữa các bài, thể loại, thiết bị và bối cảnh — gợi ý rằng phản ứng với sự bất ngờ trong âm nhạc mang tính phổ quát (liên hệ [[ky-vong-am-nhac]]).

Lưu ý: dữ liệu nền tảng không cho biết **lý do** bỏ qua (chán, đã nghe quá nhiều, đổi tâm trạng…); các nghiên cứu ở cấp phiên nghe (Meggetto và cộng sự, 2021) phân loại người nghe thành những kiểu như "nghe hết", "nghe rồi bỏ", "bỏ rồi nghe" và "chuyên bỏ qua".

## Phần mở đầu ngắn lại: bằng chứng và giới hạn

**Hubert Léveillé Gauvin** (Đại học Ohio State) công bố trên *Musicae Scientiae* 22(3), 2018, phân tích **303 đĩa đơn top 10 ở Mỹ từ 1986 đến 2015** theo năm đặc điểm: số từ trong tên bài, nhịp độ, thời gian trước khi giọng hát vào, thời gian trước khi tên bài được hát, và mức độ tự quy chiếu trong lời.

- Thời gian trước khi giọng hát xuất hiện giảm mạnh: theo báo chí đưa tin, từ khoảng **23 giây** (1986) xuống khoảng **5 giây** (2015).
- Nhịp độ trung bình tăng khoảng 8%; tên bài ngắn hơn; tên bài được hát sớm hơn.
- Tác giả giải thích bằng khái niệm **"kinh tế chú ý"** của Michael Goldhaber.

::bars 1986=23 2015=5 max=25 | Thời gian trung bình (giây) trước khi giọng hát vào, hit top 10 Mỹ — theo tin báo chí về nghiên cứu của Léveillé Gauvin

Cần thận trọng: giai đoạn khảo sát bắt đầu từ 1986, phần lớn trước thời streaming, nên **xu hướng có trước streaming**; phần thứ hai của chính nghiên cứu (so sánh 60 bài nổi tiếng với 60 bài ít nổi tiếng hơn của cùng nghệ sĩ năm 2015) **không ủng hộ** các giả thuyết. Tương tự, nhiều phân tích cho thấy độ dài bài hit giảm từ thập niên 1990 đến cuối thập niên 2010, nhưng việc streaming là **nguyên nhân** vẫn chỉ là suy luận từ cơ chế trả tiền theo lượt nghe, chưa được chứng minh.

## Danh sách phát và chế độ ngẫu nhiên

Streaming đẩy đơn vị nghe từ **album** sang **danh sách phát (playlist)** theo tâm trạng, hoạt động (tập thể dục, học bài, ngủ) hoặc thể loại. Điều này gắn âm nhạc chặt hơn với chức năng điều hòa cảm xúc và hỗ trợ hoạt động (xem điều hoà cảm xúc bằng âm nhạc và [[nhac-nen-va-hieu-suat-lam-viec]]).

Chế độ **shuffle** minh họa một thiên kiến nhận thức thú vị. Theo các nguồn báo chí công nghệ, Spotify ban đầu dùng thuật toán xáo trộn ngẫu nhiên thực sự (Fisher-Yates), nhưng người dùng phàn nàn rằng các bài của cùng nghệ sĩ hay "dồn cục". Thật ra sự dồn cục là hệ quả tự nhiên của ngẫu nhiên — người ta mắc **ảo giác cụm (clustering illusion)**. Năm 2014 Spotify chuyển sang thuật toán rải đều các nghệ sĩ: điều người nghe muốn không phải ngẫu nhiên thật mà là **cảm giác** ngẫu nhiên.

## Thuật toán và khẩu vị

**Anderson, Maystre, Anderson, Mehrotra và Lalmas (2020)**, hội nghị WWW 2020, đo độ đa dạng tiêu dùng của người dùng Spotify:

- Độ đa dạng cao gắn với các chỉ số dài hạn như chuyển sang gói trả phí và ở lại nền tảng.
- Nghe theo **gợi ý thuật toán** gắn với độ đa dạng **thấp hơn**; người dùng trở nên đa dạng hơn thì chuyển sang tự tìm nghe nhiều hơn.
- Thí nghiệm ngẫu nhiên cho thấy gợi ý thuật toán hiệu quả hơn với người có khẩu vị hẹp.

Đây là nghiên cứu tương quan (trừ phần thí nghiệm) do chính nền tảng thực hiện, nên khó kết luận thuật toán *gây ra* khẩu vị hẹp hay người khẩu vị hẹp *chọn* nghe theo thuật toán. Về sự quen thuộc và sở thích, xem [[su-quen-thuoc-va-hieu-ung-tiep-xuc]] và [[so-thich-am-nhac-va-tinh-cach]].

## Nguồn và độ tin cậy

Phần lớn dữ liệu hành vi đến từ chính các công ty streaming; dữ liệu thô không công khai nên khó kiểm chứng độc lập. Các con số về độ dài bài hát khác nhau tùy cách chọn mẫu (top 10, Hot 100, toàn bộ kho nhạc).

Xem thêm: [[cong-nghiep-am-nhac]], [[lich-su-thu-am]], [[tam-ly-nguoi-nghe-tong-quan]].
`,
  },
  {
    slug: "am-nhac-va-ban-sac-xa-hoi",
    title: "Âm nhạc và bản sắc xã hội",
    category: 'musicology',
    aliases: ["âm nhạc và bản sắc", "music and identity", "music and social identity", "âm nhạc tuổi vị thành niên", "tiểu văn hóa âm nhạc", "music subculture", "neo-tribe", "gắn kết xã hội qua âm nhạc", "music and social bonding", "ice-breaker effect"],
    summary: "Âm nhạc như một dấu hiệu bản sắc, đặc biệt ở tuổi vị thành niên; lý thuyết tiểu văn hóa và \"bộ lạc mới\"; và các cơ chế khiến hát, chơi nhạc cùng nhau tạo gắn kết xã hội.",
    refs: [
      ["North, Hargreaves & O’Neill (2000) – The importance of music to adolescents (tóm lược thứ cấp)", "https://scholarsarchive.jwu.edu/k12_ed/1"],
      ["Rentfrow & Gosling (2006) – Message in a ballad (PubMed)", "https://pubmed.ncbi.nlm.nih.gov/16507064/"],
      ["Bennett (1999) – Subcultures or Neo-Tribes? (Sociology)", "https://www.cambridge.org/core/journals/sociology/article/abs/subcultures-or-neotribes-rethinking-the-relationship-between-youth-style-and-musical-taste/5C46818AC3FBBC07EB5798625C378114"],
      ["Tarr, Launay & Dunbar (2014) – Music and social bonding: self-other merging and neurohormonal mechanisms (PMC)", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4179700/"],
      ["Pearce, Launay & Dunbar (2015) – The ice-breaker effect (Oxford ORA)", "https://ora.ox.ac.uk/objects/uuid:e02457e7-5a9a-47d5-9bfb-65bf0f08b13f"],
      ["Kirschner & Tomasello (2010) – Joint music making promotes prosocial behavior in 4-year-old children (PDF)", "https://www.eva.mpg.de/documents/Elsevier/Kirschner_Joint_EvolHumBeh_2010_1552719.pdf"],
      ["Baier, Wöllner & Wolf (2021) – bản lặp lại không thành công (Frontiers in Psychology)", "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.784255/pdf"],
    ],
    body: `
## "Cho tôi biết bạn nghe gì…"

Âm nhạc không chỉ là trải nghiệm riêng tư mà còn là **tấm thẻ căn cước xã hội**: nó cho người khác biết ta là ai, ta thuộc về nhóm nào và khác với nhóm nào. Chủ đề này nằm giữa [[tam-ly-hoc-am-nhac]] (bản sắc cá nhân, cảm xúc) và [[xa-hoi-hoc-am-nhac]] (nhóm, giai tầng, tiểu văn hóa). Bài về mối liên hệ giữa sở thích và tính cách được trình bày riêng ở [[so-thich-am-nhac-va-tinh-cach]].

## Âm nhạc như một tín hiệu

**Rentfrow và Gosling (2006)**, *Psychological Science* 17(3), cho những người lạ gặp nhau lần đầu trò chuyện để làm quen. Âm nhạc là **chủ đề được nói đến nhiều nhất**. Ở nghiên cứu thứ hai, người quan sát chỉ dựa vào danh sách bài hát yêu thích của một người mà vẫn hình thành ấn tượng về tính cách khá nhất quán và tương đối chính xác; những tín hiệu họ dựa vào thường là tín hiệu có giá trị thật. Tác giả kết luận rằng người ta **dùng sở thích âm nhạc để truyền đạt bản thân**, và người khác "đọc" được thông điệp đó.

## Tuổi vị thành niên: giai đoạn âm nhạc quan trọng nhất

Tuổi mới lớn là lúc bản sắc được hình thành mạnh mẽ, và âm nhạc thường giữ vai trò trung tâm (xem thêm [[tam-ly-hoc-phat-trien-am-nhac]]).

**North, Hargreaves và O'Neill (2000)**, *British Journal of Educational Psychology* 70, khảo sát **2.465 học sinh 13–14 tuổi**. Theo các bản tóm lược thứ cấp:

- Các em nghe nhạc trung bình khoảng **2,45 giờ mỗi ngày**.
- Lý do nghe nhạc được nêu nhiều nhất gắn với hai nhóm: **nhu cầu cảm xúc** (thư giãn, giảm căng thẳng, giải tỏa) và **hình ảnh bản thân** (tạo ấn tượng với người khác, thể hiện mình).
- Có khác biệt giới: nữ sinh thiên về chức năng cảm xúc, nam sinh coi trọng hơn chức năng hình ảnh và bản sắc xã hội.

Các con số trên lấy từ tóm lược của nghiên cứu khác, chưa đối chiếu được trực tiếp với toàn văn.

Âm nhạc tuổi mới lớn còn gắn chặt với trí nhớ: những bài nghe ở tuổi thiếu niên và đầu tuổi trưởng thành thường được nhớ đậm hơn về sau (xem [[am-nhac-va-tri-nho-tu-truyen]]).

## Tiểu văn hóa và "bộ lạc mới"

Xã hội học về giới trẻ, đặc biệt trường phái Birmingham thập niên 1970 (với tác phẩm *Subculture: The Meaning of Style* của Dick Hebdige, 1979), mô tả các **tiểu văn hóa** như punk, mod, skinhead — những nhóm có phong cách ăn mặc, ngôn ngữ và âm nhạc riêng, thường được hiểu như hình thức phản kháng gắn với giai cấp.

**Andy Bennett (1999)**, *Sociology* 33(3), phê phán khái niệm này là quá cứng nhắc. Mượn ý của nhà xã hội học Michel Maffesoli, ông đề xuất khái niệm **"bộ lạc mới" (neo-tribe)**: những nhóm người tụ họp quanh một gu âm nhạc (ví dụ người hâm mộ nhạc dance tại câu lạc bộ) trong những bối cảnh nhất định, nhưng không tạo thành cấu trúc bền vững bên ngoài. Bản sắc âm nhạc trở nên **lỏng, đa tầng và có thể thay đổi** — một người có thể vừa nghe rap, vừa hát karaoke [[nhac-vang-bolero]] với gia đình. Thời streaming và mạng xã hội càng làm rõ tính lỏng này (xem [[tam-ly-nghe-nhac-thoi-streaming]]); các cộng đồng fan K-pop hay rap Việt (xem [[vpop-rap-viet]]) là ví dụ đương đại thường được bàn đến.

## Âm nhạc tạo gắn kết như thế nào

**Tarr, Launay và Dunbar (2014)**, *Frontiers in Psychology* 5, là bài lý thuyết tổng hợp hai cơ chế:

1. **Hòa nhập "mình và người khác" (self-other merging)**: khi cử động đồng bộ với người khác, ranh giới giữa bản thân và người kia trở nên mờ đi, nhờ các mạng thần kinh mã hóa cả hành động lẫn tri giác.
2. **Cơ chế thần kinh nội tiết**: hoạt động nhịp nhàng, gắng sức như hát, nhảy, đánh trống giải phóng **endorphin** (hệ opioid nội sinh); một số tác giả khác nhấn mạnh **oxytocin**.

Các tác giả lưu ý phần lớn thí nghiệm về đồng bộ mới chỉ làm với **cặp đôi**, nên chưa nói được nhiều về hoạt động âm nhạc quy mô lớn.

### Bằng chứng thực nghiệm

- **Pearce, Launay và Dunbar (2015)**, *Royal Society Open Science*: theo dõi các lớp học buổi tối dành cho người lớn trong bảy tháng. Lớp hát gắn kết **nhanh hơn rõ rệt** ở tháng đầu so với lớp thủ công hay viết sáng tác, nhưng các lớp kia dần bắt kịp. Tác giả gọi đây là **"hiệu ứng phá băng"** và gợi ý ca hát có thể đã tiến hóa để nhanh chóng gắn kết nhóm người xa lạ.
- **Kirschner và Tomasello (2010)**, *Evolution and Human Behavior* 31(5): trẻ 4 tuổi sau khi cùng hát và chơi nhạc thì hợp tác và giúp đỡ nhau nhiều hơn so với nhóm chơi trò có mức tương tác tương đương nhưng không có nhạc.
- Tuy nhiên, **Baier, Wöllner và Wolf (2021)**, *Frontiers in Psychology*, lặp lại thí nghiệm hiện trường ở trường mẫu giáo và **không thấy hiệu ứng**, cho rằng hiệu ứng gốc có thể bị ước lượng quá cao.

## Nguồn và độ tin cậy

Ý tưởng "âm nhạc gắn kết con người" có cơ sở lý thuyết tốt và nhiều bằng chứng tương quan, nhưng các thí nghiệm nhân quả còn nhỏ và kết quả lặp lại không đều. Giả thuyết tiến hóa (âm nhạc ra đời để gắn kết nhóm) vẫn là **giả thuyết**, xem [[am-nhac-hoc-tien-hoa]].

Xem thêm: [[am-nhac-tri-lieu]], [[xa-hoi-hoc-am-nhac]], [[dan-toc-nhac-hoc]].
`,
  },
  {
    slug: "groove-va-cam-giac-muon-chuyen-dong",
    title: "Groove và cảm giác muốn chuyển động",
    category: 'musicology',
    aliases: ["cảm giác groove", "urge to move", "wanting to move", "đồng bộ cảm giác vận động", "sensorimotor coupling", "entrainment", "cuốn theo nhịp", "syncopation and groove", "microtiming"],
    summary: "Groove theo nghĩa tâm lý học là cảm giác dễ chịu khiến ta muốn chuyển động theo nhạc. Bài trình bày định nghĩa, các nghiên cứu của Madison, Janata và Witek, quan hệ hình chữ U ngược với độ nghịch phách, vai trò của vi nhịp và cơ chế cuốn theo nhịp trong não.",
    refs: [
      ["Janata, Tomic & Haberman (2012) – Sensorimotor coupling in music and the psychology of the groove (Zenodo)", "https://zenodo.org/record/997607"],
      ["Witek et al. (2014) – Syncopation, body-movement and pleasure in groove music (Birmingham)", "https://research.birmingham.ac.uk/en/publications/syncopation-body-movement-and-pleasure-in-groove-music/"],
      ["Madison (2006) – Experiencing groove induced by music: consistency and phenomenology", "https://labs.sonicfield.org/library/experiencing-groove-induced-by-music-consistency-and-phenomenology"],
      ["Matthews et al. (2019) – The sensation of groove is affected by the interaction of rhythmic and harmonic complexity (PMC)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC6328141"],
      ["Davies, Gouyon, Madison & Silva (2013) – The effect of microtiming deviations on the perception of groove", "https://repositorio.inesctec.pt/items/38083482-243e-4090-bfa6-735d148ee1ff"],
      ["Nghiên cứu 2016 về microtiming và groove (Frontiers in Psychology)", "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01487/pdf"],
      ["Nozaradan et al. (2011) – Tagging the neuronal entrainment to beat and meter", "https://research.dial.uclouvain.be/handle/2078.5/225259"],
    ],
    body: `
## Groove là gì?

Trong ngôn ngữ nhạc công, *groove* chỉ cái "độ ngấm" của một tiết tấu — điều khiến một đoạn funk, soul, samba làm người nghe gật gù, nhún chân. Trong tâm lý học âm nhạc, thuật ngữ này được định nghĩa hẹp hơn: **cảm giác muốn chuyển động một phần cơ thể theo một khía cạnh nào đó của âm nhạc**, thường đi kèm khoái cảm. Định nghĩa này gắn với **Guy Madison (2006)**, *Music Perception* 24(2): khi đánh giá 64 bản thu âm thương mại, người nghe cho điểm "groove" rất nhất quán với nhau; phân tích 14 tính từ mô tả cho ra bốn yếu tố — đều hoặc không đều, groove, có swing, và trôi chảy.

Groove là cầu nối giữa [[cam-nhan-phach]] (cảm nhận nhịp phách), [[tiet-tau]] và [[cam-xuc-am-nhac]].

## Janata và cộng sự (2012): groove như sự ghép nối cảm giác và vận động

**Petr Janata, Stefan Tomic và Jason Haberman (2012)**, *Journal of Experimental Psychology: General* 141(1), coi cốt lõi của "vào groove" là **sự thôi thúc chuyển động** cùng với **khoái cảm của sự phối hợp cảm giác và vận động dễ dàng**. Các phát hiện chính:

- Người tham gia hiểu groove khá giống nhau, như một lực kéo dễ chịu hướng tới hành động, và có thể đánh giá các đoạn nhạc theo mức groove một cách đáng tin cậy.
- Nhạc có groove cao **tự phát** kích thích cử động nhịp nhàng, ngay cả khi người nghe không được yêu cầu.
- Khi nhiệm vụ gõ nhịp bằng hai tay trở nên khó phối hợp, điểm groove giảm; mức độ ghép nối cảm giác vận động diễn ra trôi chảy dự đoán mức groove cảm nhận.

Bộ đoạn nhạc và điểm groove của nghiên cứu này về sau được nhiều nhóm khác dùng lại để phân tích đặc trưng âm thanh.

## Nghịch phách và đường cong chữ U ngược

**Maria Witek, Eric Clarke, Mikkel Wallentin, Morten Kringelbach và Peter Vuust (2014)**, *PLOS ONE* 9(4), khảo sát trực tuyến với các đoạn trống funk có mức [[dao-phach|nghịch phách]] (syncopation) khác nhau. Kết quả:

- Mức nghịch phách **trung bình** gây ra mong muốn chuyển động và khoái cảm **cao nhất**; quá ít (nhịp đều đặn, dễ đoán) hoặc quá nhiều (khó xác định phách) đều kém hơn — quan hệ hình **chữ U ngược**.
- Hiệu ứng rõ nhất ở người thích nhảy theo nhạc.
- Entropy âm thanh dự đoán kém.
- Năm 2015 bài báo có đính chính về đánh số kích thích; tác giả khẳng định không ảnh hưởng đến kết luận.

**Matthews, Witek, Heggli, Penhune và Vuust (2019)**, *PLOS ONE* 14(1), mở rộng sang hòa âm: độ phức tạp tiết tấu vẫn cho đường chữ U ngược; hợp âm quá phức tạp làm **giảm** tác động của tiết tấu lên khoái cảm. Tiết tấu là động lực chính, còn hòa âm điều chỉnh qua sắc thái cảm xúc; đào tạo âm nhạc làm hiệu ứng chữ U rõ hơn.

Cách giải thích phổ biến dựa trên **mã hóa dự đoán** (predictive coding): não liên tục dự đoán phách tiếp theo; nghịch phách vừa phải tạo ra "lỗ hổng" dự đoán mà cơ thể muốn lấp đầy bằng chuyển động, trong khi vẫn giữ được khung phách (xem [[ky-vong-am-nhac]]).

## Vi nhịp: "lệch một chút mới hay"?

Nhiều nhạc công tin rằng những độ lệch thời gian rất nhỏ (*microtiming*) so với lưới nhịp là "linh hồn" của groove. Bằng chứng thực nghiệm **không ủng hộ** niềm tin này một cách đơn giản:

- **Davies, Gouyon, Madison và Silva (2013)**, *Music Perception*: tổng hợp các mẫu tiết tấu jazz, funk, samba với vi nhịp đặc trưng từ 0 đến khoảng gấp đôi mức tự nhiên; vi nhịp có hệ thống **làm giảm** điểm groove, mức thích và độ tự nhiên — trừ mẫu shuffle jazz ngắn–dài đơn giản.
- Một nghiên cứu năm 2016 trên *Frontiers in Psychology*: phiên bản lượng tử hóa hoàn toàn và phiên bản với vi nhịp như khi biểu diễn gốc được đánh giá groove **cao ngang nhau**; chỉ khi phóng đại vi nhịp thì groove giảm.

Kết quả còn phụ thuộc phong cách và trình độ người nghe, nên vấn đề **chưa ngã ngũ**. Với người chơi piano, xem thêm [[tiet-tau-ngau-hung-jazz]] và [[doi-nhip-the-loai-jazz]].

## Cuốn theo nhịp trong não

*Entrainment* (cuốn theo nhịp) chỉ việc một dao động (nhịp tim, bước chân, sóng não) đồng bộ với một nhịp bên ngoài. **Nozaradan, Peretz, Missal và Mouraux (2011)**, *Journal of Neuroscience* 31(28), dùng điện não đồ "gắn tần số": khi nghe một chuỗi phách, não xuất hiện dao động ổn định đúng ở tần số phách; khi người nghe **tưởng tượng** nhịp 2 hoặc nhịp 3, xuất hiện thêm tần số tương ứng với cách nhóm phách đó. Kết quả này ủng hộ thuyết cộng hưởng thần kinh, tuy một dự án lặp lại nhiều phòng thí nghiệm gần đây đặt câu hỏi liệu hiệu ứng nhịp tưởng tượng có bị lẫn với hoạt động do kích thích gây ra. Các vùng vận động (hạch nền, vùng tiền vận động) được cho là tham gia cảm nhận phách ngay cả khi ta ngồi yên; xem [[than-kinh-hoc-am-nhac]].

## Ứng dụng và độ tin cậy

- Groove giải thích vì sao nhạc giúp vận động nhịp nhàng hơn và vì sao nghe tập thể dễ đồng bộ.
- Phần lớn nghiên cứu dùng kích thích nhạc phương Tây (funk, pop) và người nghe phương Tây; khái niệm groove trong các truyền thống khác, như tiết tấu [[clave-tresillo-va-nhip-cong|clave]] hay nhạc dân gian Việt Nam, còn ít được khảo sát.

Xem thêm: [[cam-nhan-phach]], [[dao-phach]], [[tam-ly-hoc-am-nhac]].
`,
  },
  {
    slug: "mu-am-bam-sinh",
    title: "Mù âm bẩm sinh (amusia)",
    category: 'musicology',
    aliases: ["mù âm", "chứng mù âm nhạc", "điếc giai điệu", "tone deafness", "MBEA"],
    summary: "Mù âm bẩm sinh là rối loạn kéo dài suốt đời khiến một người khó nhận ra cao độ và giai điệu, dù thính lực và trí tuệ bình thường. Bài viết trình bày các nghiên cứu nền tảng của Isabelle Peretz, bộ test MBEA, những tranh cãi về tỉ lệ mắc và câu hỏi liên quan đến ngôn ngữ có thanh điệu như tiếng Việt.",
    refs: [
      ["Amusia (Wikipedia)", "https://en.wikipedia.org/wiki/Amusia"],
      ["Prevalence of Congenital Amusia (Peretz & Vuvan, bản tiền in bioRxiv)", "https://www.biorxiv.org/content/10.1101/070961.full.pdf"],
      ["Auditory cortex and beyond: Deficits in congenital amusia (tổng quan, arXiv 2023)", "https://arxiv.org/pdf/2311.15687"],
      ["Pfeifer & Hamann 2015 – vấn đề chẩn đoán bằng MBEA (Frontiers in Human Neuroscience)", "https://www.frontiersin.org/articles/10.3389/fnhum.2015.00161/full"],
      ["Henry & McAuley 2010 – tỉ lệ mắc phụ thuộc ngưỡng cắt", "https://taplab.psy.msu.edu/wp-content/uploads/2020/07/Henry-McAuley_2010.pdf"],
      ["Nan, Sun & Peretz 2010 – mù âm ở người nói tiếng Quan Thoại (PubMed)", "https://www.ncbi.nlm.nih.gov/pubmed/20685803"],
      ["Liu et al. 2012 – Congenital amusia in speakers of a tone language", "https://eprints-gro.gold.ac.uk/7135/1/Liu2012.pdf"],
    ],
    body: `
## Định nghĩa
**Mù âm bẩm sinh** (congenital amusia, dân gian hay gọi là "điếc giai điệu", *tone deafness*) là một rối loạn phát triển kéo dài suốt đời: người mắc khó nhận ra một nốt sai trong giai điệu quen thuộc, khó phân biệt hai giai điệu gần giống nhau và thường hát lệch, dù **thính lực, trí tuệ và khả năng ngôn ngữ bình thường**, lại từng được tiếp xúc âm nhạc đầy đủ thời thơ ấu. Nó khác với *mù âm mắc phải* (acquired amusia) xuất hiện sau tổn thương não như đột quỵ.

Lưu ý: "hát dở" không đồng nghĩa với mù âm. Nhiều người hát lệch nhưng vẫn nghe ra lỗi cao độ — vấn đề của họ nằm ở điều khiển giọng chứ không ở tri giác.

## Ca "Monica" và nghiên cứu nền tảng
Năm 2002, nhóm của **Isabelle Peretz** (Đại học Montréal) công bố trên tạp chí *Neuron* bài "Congenital Amusia: A Disorder of Fine-Grained Pitch Discrimination" mô tả một phụ nữ trung niên (báo chí gọi là "Monica"). Bà không có tổn thương não, mất thính lực hay suy giảm nhận thức, nhưng không phân biệt được các biến đổi cao độ nhỏ và, ở mức nhẹ hơn, biến đổi thời gian; trong khi vẫn nhận ra ngữ điệu lời nói và giọng người. Mẹ và anh trai bà cũng tự nhận gặp khó khăn tương tự (không được kiểm tra chính thức). Các tác giả kết luận rằng **tri giác cao độ tinh** là thành phần cốt lõi để hệ thống âm nhạc trong não phát triển bình thường. Cùng năm, Ayotte, Peretz và Hyde công bố một nghiên cứu nhóm riêng trên tạp chí *Brain*.

## Bộ test MBEA
**Montreal Battery of Evaluation of Amusia (MBEA)**, công bố năm 2003, ban đầu dành cho bệnh nhân tổn thương não, nay chủ yếu dùng để chẩn đoán mù âm bẩm sinh. Bộ test có sáu phần dựa trên mô hình xử lý âm nhạc của Peretz và Coltheart (2003):

| Nhóm | Bài kiểm tra |
|---|---|
| Tổ chức giai điệu | Âm giai (scale), đường nét (contour), quãng (interval) |
| Tổ chức thời gian | Tiết tấu (rhythm), nhịp (meter) |
| Trí nhớ | Trí nhớ giai điệu |

Nghiên cứu chuẩn hóa năm 2003 có 160 người tham gia; ngưỡng chẩn đoán đặt ở **hai độ lệch chuẩn dưới trung bình**. Tổng quan của Pfeifer & Hamann (2015) chỉ ra rằng các nghiên cứu sau dùng ngưỡng cắt, số bài con, cách làm test và thống kê **rất khác nhau**, khiến kết quả khó so sánh.

## Tỉ lệ mắc: con số còn tranh cãi
- Con số **khoảng 4%** được trích rộng rãi bắt nguồn từ nghiên cứu của Kalmus & Fry (1980) dùng một bài "Distorted Tune Test" duy nhất. Chính các nhà nghiên cứu sau này nhận xét bài test đó có độ nhạy và độ hiệu lực kém.
- Henry & McAuley (2010) cho thấy tỉ lệ mắc **phụ thuộc mạnh vào tiêu chí thống kê** dùng làm ngưỡng cắt.
- **Peretz & Vuvan (2017)** khảo sát khoảng 20.000 người tham gia (không dựa vào tự giới thiệu), kết hợp ba bài test khách quan và một bảng hỏi, đưa ra ước tính **khoảng 1,5%**. Nghiên cứu cũng ghi nhận khoảng 46% người thân bậc một của người mù âm bị ảnh hưởng tương tự — gợi ý yếu tố gia đình, có thể di truyền.

::bars Kalmus_&_Fry_1980=4 Peretz_&_Vuvan_2017=1.5 max=5 | Hai ước tính tỉ lệ mù âm bẩm sinh (%), khác nhau chủ yếu do phương pháp đo

Vì vậy, nên nói "khoảng 1,5–4% tùy cách đo" thay vì một con số chắc chắn.

## Não bộ của người mù âm
Các nghiên cứu hình ảnh học (tóm tắt theo các bài tổng quan, chưa đối chiếu toàn văn):
- Hyde và cộng sự (2006, đo hình thái voxel) thấy giảm chất trắng ở **hồi trán dưới bên phải**, tương quan với điểm MBEA; nghiên cứu tiếp theo (2007) thấy vỏ não dày hơn ở hồi trán dưới phải và vỏ thính giác phải.
- Loui và cộng sự (2009, chụp khuếch tán) thấy **bó cung (arcuate fasciculus) bên phải** nhỏ hơn bình thường; nhánh trên liên quan đến phân biệt cao độ, nhánh dưới liên quan đến hát đúng cao độ.
Bức tranh chung: vấn đề không chỉ ở vỏ thính giác mà ở **kết nối giữa vùng thính giác và vùng trán**, làm thông tin cao độ khó đi vào nhận thức có ý thức.

## Mù âm và ngôn ngữ có thanh điệu
Một câu hỏi thú vị với người Việt: nói một ngôn ngữ có thanh điệu có "bảo vệ" khỏi mù âm không? Nghiên cứu của **Nan, Sun & Peretz (2010, *Brain*)** trên người nói tiếng Quan Thoại cho thấy mù âm vẫn tồn tại; gần một nửa số người mù âm được kiểm tra gặp khó khăn khi phân biệt và nhận diện thanh điệu từ vựng, dù vẫn phát âm thanh điệu bình thường. Liu và cộng sự (2012) báo cáo tỉ lệ mắc tương tự giữa người nói ngôn ngữ có và không có thanh điệu. Ở người nói ngôn ngữ không thanh điệu, khoảng 30% người mù âm gặp khó khăn với ngữ điệu lời nói (Patel và cộng sự, 2008). Chưa tìm thấy nghiên cứu quy mô lớn riêng cho tiếng Việt.

## Gợi ý cho giáo viên
- Học sinh "hát không đúng" cần được kiểm tra tri giác trước khi kết luận; đa số chỉ cần luyện tai và luyện giọng.
- Người mù âm thực sự vẫn có thể cảm nhận tiết tấu, lời ca và thưởng thức âm nhạc theo cách riêng; không nên ép họ vào bài kiểm tra cao độ gây xấu hổ.

## Nguồn và độ tin cậy
Mô tả ca Monica và các phát hiện hình ảnh học ở đây dựa trên tóm tắt thứ cấp và tổng quan; con số tỉ lệ mắc còn tranh cãi. Xem thêm [[cao-do-tuyet-doi]], [[than-kinh-hoc-am-nhac]], [[tam-ly-hoc-am-nhac]] và [[am-nhac-va-ngon-ngu]].
`,
  },
  {
    slug: "cam-giac-dong-cam-am-nhac",
    title: "Cảm giác đồng cảm và âm nhạc (synesthesia)",
    category: 'musicology',
    aliases: ["đồng cảm giác", "cảm giác kèm", "thấy màu khi nghe nhạc", "synesthesia", "synaesthesia", "chromesthesia", "sound-colour synaesthesia", "màu của giọng điệu"],
    summary: "Cảm giác đồng cảm (synesthesia) là hiện tượng một kích thích giác quan tự động gợi ra cảm giác ở giác quan khác, ví dụ nghe nhạc thấy màu. Bài viết trình bày cách khoa học xác định hiện tượng này, tỉ lệ ước tính, và phân biệt các tuyên bố của nhà soạn nhạc nổi tiếng (Scriabin, Rimsky-Korsakov, Messiaen, Liszt, Ellington) theo mức độ được ghi chép.",
    refs: [
      ["Chromesthesia (Wikipedia)", "https://en.wikipedia.org/wiki/Chromesthesia"],
      ["Simner et al. 2006 – Synaesthesia: the prevalence of atypical cross-modal experiences (Perception)", "https://journals.sagepub.com/doi/10.1068/p5469"],
      ["Ward, Huckstep & Tsakanikos 2006 – Sound-colour synaesthesia (Cortex, bản lưu)", "https://web-archive.southampton.ac.uk/cogprints.org/6268/1/Cortex_sound-colour_Synaesthesia.pdf"],
      ["Carmichael et al. 2015 – Validating the Synesthesia Battery", "https://pmc.ncbi.nlm.nih.gov/articles/PMC5047354"],
      ["Kallis & Smith – Scriabin's synaesthesia: the legend, the evidence (Cambridge)", "https://www.cambridge.org/core/books/abs/demystifying-scriabin/scriabins-synaesthesia-the-legend-the-evidence-and-its-implications-for-multimedia-counterpoint/C0C1B75D9E4B1D02D9A78C29DCFDCB62"],
      ["Galeyev & Vanechkina 2001 – Was Scriabin a Synesthete? (Leonardo)", "https://Monoskop.org/images/f/fa/Galeyev%2C_B._M.%3B_Vanechkina%2C_I._L._%282001%29_-_Was_Scriabin_a_Synesthete.pdf"],
      ["Synaesthesia: these eight composers saw sound in vivid colours (BBC Music Magazine)", "https://www.classical-music.com/features/artists/5-composers-synesthesia/"],
      ["Sussex Synaesthesia research – FAQ", "https://www.sussex.ac.uk/synaesthesia/faq"],
    ],
    body: `
## Hiện tượng là gì
**Cảm giác đồng cảm** (synesthesia, còn dịch là "đồng cảm giác") là khi một kích thích ở giác quan này **tự động và nhất quán** gợi ra một trải nghiệm ở giác quan hoặc phạm trù khác. Dạng liên quan nhiều nhất tới âm nhạc là **sắc thính** (*chromesthesia*, sound-colour synaesthesia): nghe một nốt, một âm sắc hay một hợp âm thì "thấy" màu. Cần phân biệt với **liên tưởng ẩn dụ** mà ai cũng có ("âm thanh ấm", "giọng sáng") và với **hệ thống màu do nghệ sĩ tự xây dựng**.

## Khoa học xác định thế nào
- **Tính nhất quán theo thời gian** là "tiêu chuẩn vàng" về hành vi. Trong nghiên cứu kinh điển của Baron-Cohen và cộng sự (1993), 92,3% người tự nhận đồng cảm giác cho câu trả lời nhất quán khi kiểm tra lại sau một năm, so với 37,6% ở nhóm đối chứng được kiểm tra lại chỉ sau một tuần và đã được báo trước.
- **Synesthesia Battery** (bộ test trực tuyến do nhóm Eagleman phát triển) đo độ nhất quán trong một phiên. Carmichael và cộng sự (2015) kiểm định nó trên 2.847 người và thu được tỉ lệ đồng cảm giác chữ–màu 1,2%, khớp với các ước tính cũ, nên kết luận bộ test hợp lệ.
- Tuy vậy một số nhà nghiên cứu (Simner 2012, Eagleman 2012) cho rằng không nên coi tính nhất quán là tiêu chí duy nhất; trải nghiệm chủ quan cũng là cốt lõi.

## Tỉ lệ
Simner và cộng sự (2006, *Perception*) là nghiên cứu đầu tiên lấy mẫu không dựa vào tự giới thiệu. Họ thấy đồng cảm giác **phổ biến hơn nhiều** so với quan niệm cũ (từng cho là khoảng 0,05%), không chênh lệch giới tính rõ rệt; dạng chữ–màu khoảng 1%. Con số "khoảng 4% cho mọi dạng" thường được trích từ nghiên cứu này qua nguồn thứ cấp. Tỉ lệ người có sắc thính **trong số người đồng cảm giác** dao động từ 18,7% (Barnett và cộng sự, 2008) đến 41% (Niccolai và cộng sự, 2012) — các ước tính chưa thống nhất.

## Người thường cũng "ghép" âm với màu
Ward, Huckstep & Tsakanikos (2006, *Cortex*) so sánh người có sắc thính với nhóm đối chứng. Người có sắc thính chọn màu chính xác và nhất quán hơn, nhưng **cả hai nhóm dùng cùng quy tắc**: nốt cao hơn ghép với màu sáng hơn, nốt trầm với màu tối. Màu của người đồng cảm giác xuất hiện tự động (gây nhiễu kiểu Stroop). Tác giả kết luận hiện tượng này dựa trên những cơ chế liên giác quan **chung cho mọi người**, chứ không nhất thiết cần một đường dây thần kinh đặc biệt.

## Các nhà soạn nhạc: tài liệu so với giai thoại
| Nhân vật | Tuyên bố | Mức độ bằng chứng |
|---|---|---|
| Alexander Scriabin | Hệ màu–giọng điệu, phần "luce" trong Prometheus | Bị nghi ngờ mạnh; nhiều khả năng là hệ thống liên tưởng tự xây dựng |
| Nikolai Rimsky-Korsakov | Gán màu cho các giọng điệu | Thường được chấp nhận là có thể thật, nhưng chủ yếu qua hồi ký, không có kiểm tra |
| Olivier Messiaen | Thấy màu khi nghe hợp âm và các điệu thức | Tự thuật chi tiết, nhất quán; tự ông thừa nhận khó chứng minh khoa học |
| Franz Liszt | Câu "xin hơi xanh hơn một chút" với dàn nhạc | Giai thoại, nhiều dị bản, không tìm thấy nguồn gốc |
| Duke Ellington | Một nốt do người khác chơi có màu khác | Có trích dẫn phỏng vấn cụ thể, nhưng vẫn là tự thuật |

### Scriabin
Galeyev & Vanechkina (2001, *Leonardo*) lập luận các liên tưởng màu–giọng của [[alexander-scriabin|Scriabin]] mang tính **liên tưởng tâm lý** chứ không phải tri giác. Kallis & Smith (sách *Demystifying Scriabin*) gọi chứng đồng cảm giác của ông là một trong những huyền thoại dai dẳng nhất và kết luận bằng chứng "áp đảo" cho thấy ông **không** phải người đồng cảm giác theo định nghĩa thần kinh học ngày nay. Hệ màu của ông đi theo vòng quãng năm và chịu ảnh hưởng quang học Newton cùng Thông Thiên học — dấu hiệu của một hệ thống được suy nghĩ có chủ ý.

### Rimsky-Korsakov và Messiaen
[[nikolai-rimsky-korsakov|Rimsky-Korsakov]] và Scriabin bất đồng về màu của nhiều giọng (theo một giai thoại do Rachmaninoff kể lại, Mi giáng trưởng là đỏ tím với Scriabin nhưng xanh với Rimsky-Korsakov). Điều này không bác bỏ ai, vì người đồng cảm giác thật vẫn khác nhau về màu. [[olivier-messiaen|Messiaen]] coi các điệu thức hạn chế dịch giọng như "màu hòa âm" và mô tả chúng bằng màu rất chi tiết (điệu thức 2: tím xanh, xanh coban, vàng kim…); ông còn đặt tên một tác phẩm là *Couleurs de la Cité céleste*. Trong các cuộc trò chuyện với Claude Samuel, ông lúc đầu phủ nhận rồi lại thừa nhận một dạng trải nghiệm "thiên về tinh thần hơn thể chất".

### Liszt và nghệ sĩ đại chúng
Câu nói của [[franz-liszt|Liszt]] ở Weimar xuất hiện nhiều dị bản và không có nguồn gốc rõ. Ellington có câu phỏng vấn năm 1958 được ghi chép (theo sách của Don George). Các tuyên bố về ca sĩ nhạc pop hiện đại chủ yếu đến từ báo chí đại chúng.

## Ý nghĩa với người học nhạc
- Đồng cảm giác **không** phải điều kiện của tài năng. Ward và cộng sự (2024) báo cáo người đồng cảm giác có khác biệt về sở thích âm nhạc và mức "hiểu biết âm nhạc", nhưng đây là tương quan.
- Hình dung màu sắc có thể là **công cụ sư phạm** hữu ích (ví dụ tô màu các bậc âm), miễn là không trình bày như một "sự thật thần kinh".

## Nguồn và độ tin cậy
Phần khoa học dựa trên bài báo bình duyệt; phần về nhà soạn nhạc dựa vào sử liệu và sách chuyên khảo, mức độ chắc chắn thấp hơn. Xem thêm [[than-kinh-hoc-am-nhac]], [[cao-do-tuyet-doi]], [[am-sac]] và [[tam-ly-hoc-am-nhac]].
`,
  },
  {
    slug: "nao-nguoi-choi-nhac-va-tinh-deo-dai",
    title: "Não người chơi nhạc và tính dẻo thần kinh",
    category: 'musicology',
    aliases: ["tính dẻo của não", "tính mềm dẻo thần kinh", "musician's brain", "neuroplasticity", "brain plasticity music training", "cấu trúc não nhạc công"],
    summary: "Bài viết tóm tắt các nghiên cứu then chốt về khác biệt não bộ giữa người chơi nhạc và người không chơi nhạc — Elbert và cộng sự (1995), Schlaug (1995), Gaser & Schlaug (2003), Hyde và cộng sự (2009) — cùng cuộc tranh luận: tập luyện làm não thay đổi, hay người có sẵn đặc điểm não nào đó mới theo nghề nhạc?",
    refs: [
      ["Gaser & Schlaug 2003 – Brain structures differ between musicians and non-musicians (J Neurosci)", "https://www.jneurosci.org/content/23/27/9240"],
      ["Hyde et al. 2009 – Musical training shapes structural brain development (PMC)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2996392/"],
      ["Elbert et al. 1995 – Increased cortical representation of the fingers of the left hand in string players (KOPS Konstanz)", "https://kops.uni-konstanz.de/entities/publication/6d2dc461-72bf-44e0-8ccf-b6ba7bfc2fec"],
      ["Lee, Chen & Schlaug 2003 – Corpus callosum: musician and gender effects (NeuroReport)", "https://www.musicianbrain.com/papers/Lee_Chen_Schlaug_CC_NeuroR.pdf"],
      ["Steele et al. 2013 – Early musical training and white-matter plasticity (J Neurosci, PMC)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC6704889"],
      ["Criscuolo et al. 2022 – An ALE meta-analytic review of musical expertise (Scientific Reports)", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9276732/"],
      ["Ullén Laboratory, Karolinska Institutet – nghiên cứu song sinh", "https://ki.se/en/neuro/ullen-laboratory"],
    ],
    body: `
## Vì sao não người chơi nhạc được quan tâm
Chơi một nhạc cụ đòi hỏi phối hợp tinh vi giữa nghe, nhìn bản nhạc, cảm nhận vị trí ngón tay và điều khiển vận động, lặp lại hàng nghìn giờ từ thuở nhỏ. Vì thế các nhà thần kinh học coi người chơi nhạc là **mô hình tự nhiên** để nghiên cứu *tính dẻo thần kinh* (neuroplasticity) — khả năng não thay đổi cấu trúc và chức năng theo trải nghiệm. Xem bức tranh rộng hơn ở [[than-kinh-hoc-am-nhac]].

::timeline 1995=Elbert:_ngón_tay_trái_người_chơi_đàn_dây 1995=Schlaug:_thể_chai 2003=Gaser_&_Schlaug:_chất_xám 2009=Hyde:_trẻ_học_đàn_15_tháng 2014=Mosing:_nghiên_cứu_song_sinh 2022=Criscuolo:_phân_tích_gộp_ALE | Một số mốc nghiên cứu về não người chơi nhạc

## Các nghiên cứu kinh điển
### Elbert và cộng sự (1995): bàn tay bấm dây
Công bố trên *Science* (tập 270), nhóm của Thomas Elbert và Christo Pantev dùng chụp nguồn từ trường (MSI) đo vỏ não cảm giác thân thể ở **9 người chơi đàn dây** (6 violin, 2 cello, 1 guitar) và 6 người không chơi nhạc. Vùng biểu diễn **các ngón tay trái** — tay bấm dây — lớn hơn ở người chơi nhạc; tay phải cầm vĩ không khác biệt. Mức tái tổ chức tương quan với **tuổi bắt đầu học**. Mẫu rất nhỏ (15 người), nên đây là bằng chứng gợi ý hơn là kết luận.

### Schlaug (1995): thể chai
Gottfried Schlaug và cộng sự báo cáo phần trước của **thể chai** (corpus callosum, bó sợi nối hai bán cầu) lớn hơn ở nhạc công chuyên nghiệp, tập trung ở người **bắt đầu trước 7 tuổi**. Nghiên cứu lặp lại (Lee, Chen & Schlaug, 56 nhạc công và 56 đối chứng) thấy hiệu ứng ở nam nhưng không ở nữ, và các tác giả thừa nhận không thể xác lập quan hệ nhân quả. Steele và cộng sự (2013) so sánh nhạc công học sớm và học muộn có cùng số năm luyện tập, thấy tuổi bắt đầu liên quan tới kết nối chất trắng ở phần sau thể chai.

### Gaser & Schlaug (2003): chất xám
Trên *Journal of Neuroscience*, Gaser và Schlaug dùng phương pháp hình thái học dựa trên voxel cho toàn bộ não, so sánh **người chơi phím chuyên nghiệp**, người chơi nghiệp dư và người không chơi nhạc. Thể tích chất xám khác nhau ở các vùng **vận động, thính giác và thị–không gian**, với xu hướng tăng dần theo mức độ chuyên môn. Các tác giả viết rằng khác biệt có thể là thích nghi cấu trúc do luyện tập lâu dài, nhưng không loại trừ yếu tố bẩm sinh. (Bài báo có thông báo đính chính năm 2013.)

### Hyde và cộng sự (2009): theo dõi trẻ em
Để vượt qua giới hạn của so sánh cắt ngang, Krista Hyde và cộng sự theo dõi **15 trẻ** (trung bình khoảng 6,3 tuổi) học đàn phím riêng **nửa giờ mỗi tuần trong khoảng 15 tháng**, so với **16 trẻ** chỉ học nhạc ở trường. Nhóm học đàn có thay đổi cấu trúc ở **hồi trước trung tâm phải** (vùng vận động bàn tay), **vùng thính giác nguyên phát phải** và một phần thể chai; các thay đổi này tương quan với tiến bộ trong bài kiểm tra vận động ngón tay và phân biệt giai điệu. Trước khi học, hai nhóm không khác biệt về não — điểm quan trọng nhất của thiết kế.

## Tranh luận về quan hệ nhân quả
| Lập luận | Ủng hộ "luyện tập thay đổi não" | Ủng hộ "khác biệt có sẵn hoặc chọn lọc" |
|---|---|---|
| Tuổi bắt đầu | Hiệu ứng mạnh hơn ở người học sớm | Trẻ có năng khiếu thường được cho học sớm |
| Liều lượng | Khác biệt tăng theo số năm luyện tập | Người có lợi thế dễ duy trì lâu hơn |
| Nghiên cứu theo dõi | Hyde 2009: không khác biệt trước khi học | Mẫu nhỏ, không phân ngẫu nhiên hoàn toàn |
| Song sinh | Song sinh cùng trứng chơi nhạc có vỏ não dày hơn ở vùng thính–vận động so với người anh/em không chơi | Mosing và cộng sự: phần lớn tương quan luyện tập–năng lực là do di truyền chung |

Nhóm của Fredrik Ullén (Karolinska) cho thấy ở các cặp **song sinh cùng trứng**, người chơi nhạc có vỏ não dày hơn ở vùng thính giác–vận động — gợi ý trải nghiệm có tác động thật. Nhưng cùng nhóm này (Mosing và cộng sự, 2014) cũng lập luận rằng nhiều liên hệ giữa luyện tập và năng lực **không mang tính nhân quả**. Xem thêm [[hoc-nhac-va-tri-tue]].

## Bức tranh tổng hợp gần đây
Phân tích gộp ALE của **Criscuolo và cộng sự (2022, *Scientific Reports*)** tổng hợp 84 nghiên cứu (58 đưa vào phân tích tọa độ). Người chơi nhạc có thể tích hoặc hoạt động cao hơn ở vùng thính giác, cảm giác–vận động, cảm nhận nội tạng và hệ viền, nhưng **thấp hơn ở vùng đỉnh**. Một nỗ lực lặp lại sau đó (luận văn tại Đại học Porto) chỉ tái hiện được một phần và cho rằng liên hệ giữa luyện tập và cấu trúc não có thể kém nhất quán hơn ta tưởng, liên quan nhiều hơn đến *năng lực* âm nhạc.

## Ý nghĩa thực tiễn và giới hạn
- Bằng chứng ủng hộ khá vững rằng luyện tập **tạo thay đổi cục bộ** ở vùng phục vụ trực tiếp kỹ năng (ngón tay, nghe cao độ).
- Không nên suy rộng thành "học đàn làm thông minh hơn"; đó là câu hỏi khác, xem [[hoc-nhac-va-tri-tue]].
- "Cửa sổ trước 7 tuổi" chỉ là xu hướng thống kê; người học muộn vẫn tiến bộ, xem [[phuong-phap-luyen-tap]].

## Nguồn và độ tin cậy
Các nghiên cứu nền tảng có mẫu nhỏ; phần lớn là so sánh cắt ngang. Một số chi tiết ở đây lấy từ tóm tắt và nguồn thứ cấp. Xem thêm [[than-kinh-hoc-am-nhac]], [[tam-ly-hoc-phat-trien-am-nhac]] và [[suc-khoe-nguoi-choi-dan]].
`,
  },
  {
    slug: "am-nhac-va-sa-sut-tri-tue",
    title: "Âm nhạc và sa sút trí tuệ",
    category: 'musicology',
    aliases: ["âm nhạc và Alzheimer", "nhạc trị liệu cho người sa sút trí tuệ", "music and dementia", "musical memory Alzheimer", "music-based therapeutic interventions dementia"],
    summary: "Vì sao người bệnh Alzheimer nặng vẫn có thể nhận ra hoặc hát theo bài hát quen? Bài viết trình bày nghiên cứu về trí nhớ âm nhạc được bảo tồn (Jacobsen và cộng sự, 2015), tổng quan Cochrane về can thiệp âm nhạc cho người sa sút trí tuệ (van der Steen và cộng sự, 2018; 2025), bằng chứng phòng ngừa và những giới hạn cần biết.",
    refs: [
      ["Jacobsen et al. 2015 – Why musical memory can be preserved in advanced Alzheimer's disease (Brain)", "https://academic.oup.com/brain/article/138/8/2122/330617"],
      ["Max Planck – Alzheimer's spares long-term musical memory", "https://www.mpg.de/9281090/alzheimers-long-term-musical-memory"],
      ["van der Steen et al. 2018 – Music-based therapeutic interventions for people with dementia (Cochrane, PMC)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC6513122"],
      ["Cochrane – Music-based therapy may improve depressive symptoms in people with dementia", "https://www.cochrane.org/about-us/news/music-based-therapy-may-improve-depressive-symptoms-people-dementia"],
      ["HealthDay – Music-based interventions may help short-term depression, behavior with dementia (2025)", "https://www.healthday.com/healthpro-news/mental-health/music-based-interventions-may-help-short-term-depression-behavior-with-dementia"],
      ["Balbag, Pedersen & Gatz 2014 – Playing a musical instrument as a protective factor against dementia (PMC)", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4269311/"],
      ["Baird & Samson 2015 – Music and Dementia (Progress in Brain Research)", "https://remix.berklee.edu/mhi-citations/121"],
    ],
    body: `
## "Hòn đảo được bảo tồn"
Người làm việc trong viện dưỡng lão thường kể: một người bệnh Alzheimer không còn nhận ra con cái vẫn hát trọn một bài hát thời trẻ. Hiện tượng này có thật trong nhiều trường hợp, nhưng Baird & Samson (2015, *Progress in Brain Research*) cảnh báo rằng hình ảnh âm nhạc như một "hòn đảo được bảo tồn" phần nào do truyền thông khuếch đại. Thực tế có **nhiều loại trí nhớ âm nhạc** (nhận ra giai điệu quen, học bài mới, ký ức tự truyện gợi bởi nhạc, kỹ năng chơi đàn) và chúng **suy giảm khác nhau** tùy loại sa sút trí tuệ. Nghiên cứu nghiêm ngặt về chủ đề này còn ít.

## Jacobsen và cộng sự (2015): vì sao trí nhớ âm nhạc còn lại
Nhóm của Jörn-Henrik Jacobsen (Viện Max Planck, Leipzig) công bố trên tạp chí *Brain* năm 2015 một nghiên cứu hai bước:
1. Chụp cộng hưởng từ chức năng ở người khỏe mạnh khi nghe bài hát quen từ lâu, bài mới nghe gần đây và giai điệu lạ. Phân tích mẫu hình xác định các vùng gắn với **trí nhớ âm nhạc dài hạn**: hồi đai trước phần đuôi và **vùng tiền vận động bổ sung** phía bụng — những vùng vốn liên quan đến điều khiển vận động phức tạp, không phải thùy thái dương như từng giả định.
2. So sánh các vùng này ở **20 bệnh nhân Alzheimer** và 34 người đối chứng về teo não, chuyển hóa và mảng amyloid. Các vùng "âm nhạc" **ít teo và ít giảm chuyển hóa** so với phần còn lại của não, dù vẫn có amyloid.

Bình luận đi kèm của Clark & Warren trong cùng số tạp chí nhắc rằng niềm tin "âm nhạc mở khóa trí nhớ" là điều được trân trọng trong thần kinh học lâm sàng, nhưng **kiểm chứng khoa học hiếm khi đơn giản**. Mẫu bệnh nhân nhỏ, và nghiên cứu cho thấy tương quan giải phẫu chứ chưa chứng minh trực tiếp các vùng ấy "bảo vệ" chức năng.

## Bằng chứng từ tổng quan Cochrane
Tổng quan Cochrane do **Jenny van der Steen** chủ trì gộp các thử nghiệm ngẫu nhiên có đối chứng về can thiệp âm nhạc (ít nhất năm buổi) cho người sa sút trí tuệ, phần lớn sống ở cơ sở chăm sóc.

| Kết cục | Kết luận (cuối đợt can thiệp) | Độ tin cậy |
|---|---|---|
| Triệu chứng trầm cảm | Có thể cải thiện | Trung bình |
| Vấn đề hành vi nói chung | Có thể cải thiện | Trung bình (2018); "có lẽ" (2025) |
| Kích động, gây hấn | Không rõ cải thiện | Trung bình |
| Nhận thức | Ít hoặc không hiệu quả | Thấp |
| Lo âu, chất lượng sống | Không chắc chắn | Thấp |
| Hiệu quả lâu dài | Không có bằng chứng | Rất thấp hoặc thiếu dữ liệu |

Bản cập nhật năm **2025** (CD003477.pub5) gồm **30 nghiên cứu, 1.720 người tham gia**, chủ yếu ở các nước thu nhập cao (Úc, Đài Loan, Mỹ, châu Âu), và giữ kết luận cốt lõi: can thiệp âm nhạc **có lẽ** cải thiện triệu chứng trầm cảm và có thể cải thiện hành vi khi kết thúc điều trị, nhưng **không có bằng chứng về hiệu quả kéo dài**. Lưu ý: số liệu 30 nghiên cứu/1.720 người thuộc bản 2025, không phải bản 2018.

## Chơi nhạc có phòng ngừa sa sút trí tuệ không?
Nghiên cứu song sinh Thụy Điển của **Balbag, Pedersen & Gatz (2014)** xét 157 cặp song sinh trong đó chỉ một người mắc sa sút trí tuệ hoặc suy giảm nhận thức; 27 cặp khác nhau về việc chơi nhạc cụ. Sau khi hiệu chỉnh giới, học vấn và vận động thể lực, chơi nhạc cụ gắn với **tỉ số chênh 0,36** (khoảng tin cậy 95%: 0,13–0,99). Khoảng tin cậy rất rộng và sát ngưỡng 1, nên báo chí diễn giải thành "giảm hai phần ba nguy cơ" là quá mức. Ngoài ra còn nguy cơ **nhân quả ngược**: người bắt đầu suy giảm có thể bỏ chơi đàn trước khi được chẩn đoán.

## Giới hạn và khuyến nghị thực hành
- Âm nhạc là **hỗ trợ không dùng thuốc** có chi phí thấp, ít tác dụng phụ — không thay thế điều trị y khoa.
- Hiệu quả thường **chỉ kéo dài trong thời gian can thiệp**; nên coi âm nhạc là một phần sinh hoạt thường xuyên chứ không phải "liệu trình".
- Chọn bài hát gắn với tuổi trẻ của người bệnh để gợi ký ức tự truyện; với người Việt cao tuổi có thể là [[nhac-vang-bolero|nhạc vàng]], tân nhạc hoặc dân ca quen thuộc.
- Theo dõi phản ứng: với một số người, âm nhạc có thể gây kích động hoặc buồn bã.

## Nguồn và độ tin cậy
Kết luận Cochrane có độ tin cậy "trung bình" đến "thấp"; nghiên cứu hình ảnh học và phòng ngừa có mẫu nhỏ. Thông tin về bản 2025 lấy từ thông cáo và báo chí chuyên ngành. Xem thêm [[am-nhac-tri-lieu]], [[than-kinh-hoc-am-nhac]] và [[cam-xuc-am-nhac]].
`,
  },
  {
    slug: "dong-bo-nhip-va-cuon-theo",
    title: "Đồng bộ nhịp và sự cuốn theo phách",
    category: 'musicology',
    aliases: ["đồng bộ cảm giác–vận động", "gõ theo nhịp", "sensorimotor synchronization", "beat entrainment", "rhythmic entrainment", "Snowball cockatoo", "negative mean asynchrony"],
    summary: "Vì sao con người tự nhiên gõ chân theo nhạc, và loài vật nào làm được điều đó? Bài viết trình bày nghiên cứu về đồng bộ cảm giác–vận động (Repp), cơ chế não xử lý phách (Grahn & Brett 2007), chú vẹt Snowball (Patel và cộng sự 2009), sư tử biển Ronan và giả thuyết học tiếng–đồng bộ nhịp.",
    refs: [
      ["Repp 2005 – Sensorimotor synchronization: a review of the tapping literature (Psychon Bull Rev)", "https://www.doi.org/10.3758/BF03206433"],
      ["Patel et al. – Snowball, bản hội nghị (PDF lưu tại UVic)", "https://web.uvic.ca/~aschloss/course_mat/MUS 511/ARTICLES AND REFS FOR 320/Patel.pdf"],
      ["Harvard Gazette 2019 – Study of Snowball the cockatoo suggests humans aren't the only ones who can dance", "https://news.harvard.edu/gazette/story/2019/07/study-of-snowball-the-cockatoo-suggests-humans-arent-the-only-ones-who-can-dance/"],
      ["Science News – Birds bust a move to musical beats (Schachner, Patel 2009)", "https://www.sciencenews.org/?p=4585"],
      ["UC Santa Cruz 2013 – Ronan the sea lion keeps the beat", "https://news.ucsc.edu/2013/04/sea-lion-beat/"],
      ["Grahn & Brett 2007 – Rhythm and beat perception in motor areas of the brain (trang tác giả)", "https://www.jessicagrahn.com/grahnbrett2007.html"],
      ["Patel 2024 – vocal learning, gene regulation và xử lý phách (BMC Neuroscience)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC11539701"],
    ],
    body: `
## Khái niệm
**Đồng bộ cảm giác–vận động** (sensorimotor synchronization, SMS) là khả năng phối hợp chuyển động với một chuỗi sự kiện có chu kỳ bên ngoài: gõ ngón tay theo máy đếm nhịp, vỗ tay theo bài hát, nhảy theo phách. Khi chuyển động tự điều chỉnh để "bám" theo nhịp — kể cả khi nhịp nhanh lên hay chậm lại — người ta gọi là sự **cuốn theo** (entrainment). Đây là năng lực nền tảng của biểu diễn nhạc theo nhóm, của khiêu vũ và của việc cảm nhận phách (xem [[cam-nhan-phach]]).

## Gõ nhịp trong phòng thí nghiệm
Nhà tâm lý học **Bruno Repp** (Haskins Laboratories) đã tổng hợp lĩnh vực này trong hai bài tổng quan lớn trên *Psychonomic Bulletin & Review*: Repp (2005), "A review of the tapping literature", và Repp & Su (2013) về nghiên cứu giai đoạn 2006–2012. Một số hiện tượng ổn định:
- **Độ lệch âm trung bình** (negative mean asynchrony): khi gõ theo máy đếm nhịp, người ta thường gõ **sớm hơn phách vài chục mili giây** mà không nhận ra. Mức gõ sớm ít hơn thường đi kèm độ biến thiên thấp hơn; trẻ nhỏ hiếm khi gõ trước phách. Một giải thích (giả thuyết Paillard–Fraisse) cho rằng não phải "khớp" tín hiệu xúc giác–vận động với tín hiệu thính giác vốn đến với tốc độ dẫn truyền khác nhau.
- **Sửa lỗi liên tục**: khi một phách bị dịch đi, người gõ tự động điều chỉnh ở các lần gõ sau; các mô hình sửa lỗi (pha và chu kỳ) mô tả cơ chế này.
- **Độ biến thiên** giảm theo luyện tập; các tổng quan ghi nhận nhạc công thường gõ ổn định hơn người không học nhạc.

## Não xử lý phách thế nào
**Grahn & Brett (2007)** dùng cộng hưởng từ chức năng cho người nghe các tiết tấu có phách rõ (nhóm nhịp đều) và tiết tấu không có phách rõ. Tiết tấu có phách rõ kích hoạt mạnh hơn **hạch nền**, **vùng vận động bổ sung (SMA)** và hồi thái dương trên — tức là **hệ vận động tham gia ngay cả khi chỉ nghe**, không cử động. Tiểu não và vỏ tiền vận động phản ứng với tiết tấu nói chung, còn hạch nền và SMA đặc biệt nhạy với phách. Bệnh nhân Parkinson (tổn thương hạch nền) không được hưởng lợi từ tiết tấu có phách khi phân biệt nhịp như người khỏe — một bằng chứng bổ sung. Đây là cơ sở thần kinh cho cảm giác "nghe nhạc là muốn nhún nhảy".

## Động vật có cảm nhận phách không?
### Snowball, chú vẹt mào lưu huỳnh
Năm 2009, **Aniruddh Patel**, John Iversen, Micah Bregman và Irena Schulz công bố trên *Current Biology* thí nghiệm với **Snowball**, một con vẹt mào lưu huỳnh (*Cacatua galerita*) nổi tiếng trên mạng vì lắc đầu theo nhạc. Nhóm phát bài hát yêu thích của nó ở nhiều tốc độ khác nhau (thay đổi đến khoảng ±20% so với gốc) và phân tích video. Snowball **tự điều chỉnh tốc độ chuyển động** để khớp với phách trong một số đoạn, dù không liên tục — theo bản hội nghị, khoảng 20% số lần thử có những đợt đồng bộ. Kết luận: một loài phi nhân **có thể** đồng bộ với phách âm nhạc, nhưng độ tin cậy và độ linh hoạt về tốc độ hạn chế hơn người.

Cùng năm, nhóm của **Adena Schachner** xem hơn 1.000 video trên YouTube và thấy các loài thực sự duy trì và điều chỉnh nhịp theo nhạc gồm **13 loài vẹt và một con voi**. Năm 2019, Jao Keehn, Iversen, Schulz và Patel (*Current Biology*) mô tả **14 động tác nhảy khác nhau** cùng hai tổ hợp mà Snowball tự phát triển khi nghe hai bài hát thập niên 1980, không qua huấn luyện.

### Giả thuyết học tiếng và phản ví dụ
Patel (2006) đề xuất **giả thuyết học tiếng–đồng bộ nhịp** (vocal learning and rhythmic synchronization): mạch thần kinh giúp bắt chước âm thanh (có ở người, vẹt, voi…) được "tái sử dụng" để nghe phách và chuyển động theo nhạc. Phản ví dụ đáng chú ý là **Ronan**, một con sư tử biển California — loài không được biết đến là bắt chước âm thanh. Cook và cộng sự (2013, *Journal of Comparative Psychology*) huấn luyện Ronan bằng máy đếm nhịp và cá thưởng; sau đó nó lắc đầu đúng phách cả với bài hát chưa từng nghe. Chính Cook thừa nhận việc huấn luyện kéo dài có thể là yếu tố quyết định. Patel đã điều chỉnh giả thuyết (bài trên *BMC Neuroscience*, 2024), còn Hickok đưa ra cách giải thích khác. Câu hỏi này **chưa ngã ngũ**.

| Trường hợp | Năm | Học tiếng? | Kết quả |
|---|---|---|---|
| Snowball (vẹt mào) | 2009 | Có | Đồng bộ một phần, tự điều chỉnh tốc độ |
| Khảo sát YouTube (Schachner) | 2009 | Hầu hết có | 13 loài vẹt và 1 voi |
| Ronan (sư tử biển) | 2013 | Không | Đồng bộ sau huấn luyện |
| Snowball – vũ đạo | 2019 | Có | 14 động tác tự phát |

## Ứng dụng cho dạy và học nhạc
- Gõ sớm hơn phách là bình thường; luyện với máy đếm nhịp giúp giảm độ biến thiên, nhưng cần nghe cả nhóm khi chơi hòa tấu.
- Cho học sinh **nhún, vỗ, bước** theo phách trước khi đọc tiết tấu tận dụng sự tham gia tự nhiên của hệ vận động.
- Xem thêm [[nhip-do]], [[am-nhac-hoc-tien-hoa]] (vai trò của đồng bộ nhóm trong tiến hóa) và [[than-kinh-hoc-am-nhac]].

## Nguồn và độ tin cậy
Các hiện tượng gõ nhịp được lặp lại rộng rãi. Bằng chứng về động vật dựa trên số ít cá thể; một số con số ở đây (±20%, 20% số lần thử) lấy từ bản hội nghị trước khi đăng báo, nên có thể khác bản chính thức. Liên quan: [[cam-nhan-phach]], [[am-nhac-hoc-tien-hoa]], [[da-nhip]].
`,
  },
  {
    slug: "am-nhac-co-dien-an-do",
    title: "Âm nhạc cổ điển Ấn Độ: Hindustani và Carnatic",
    category: 'musicology',
    aliases: ["Indian classical music", "Hindustani music", "Carnatic music", "nhạc cổ điển Ấn Độ", "âm nhạc Hindustani", "âm nhạc Carnatic", "raga và tala"],
    summary: "Tổng quan hai truyền thống cổ điển lớn của tiểu lục địa Ấn Độ: Hindustani ở phía bắc và Carnatic ở phía nam, với hai trụ cột chung là raga (khung giai điệu) và tala (chu kỳ nhịp), cấu trúc trình diễn alap–jor–jhala–gat và hệ thống truyền nghề gharana.",
    refs: [
      ["Raga — Encyclopaedia Britannica", "https://www.britannica.com/art/raga"],
      ["Hindustani classical music — New World Encyclopedia", "https://www.newworldencyclopedia.org/entry/Hindustani_classical_music"],
      ["Gharana — Wikipedia", "https://en.wikipedia.org/wiki/Gharana"],
      ["Jor (music) — Wikipedia", "https://en.wikipedia.org/wiki/Jor_(music)"],
      ["Maihar gharana — Wikipedia", "https://en.wikipedia.org/wiki/Maihar_gharana"],
      ["A comparative study of raga structures as handled by Tyagaraja and Dikshitar — Music Academy Madras (2025)", "https://musicacademymadras.in/wp-content/uploads/2025/12/21.12.2025-8.05-8.50am-A-comparative-study-of-raga-structures-as-handled-by-Tyagaraja-and-Dikshitar.pdf"],
      ["Glossary — Raga Radio, CCRMA Stanford", "https://ccrma.stanford.edu/~pchordia/ragaRadio/glossary.html"],
    ],
    body: `
Âm nhạc cổ điển Ấn Độ là một trong những truyền thống nghệ thuật có lý thuyết thành văn lâu đời nhất thế giới. Qua nhiều thế kỷ, nó tách thành hai nhánh lớn: **Hindustani** ở miền Bắc (và Pakistan, Bangladesh) và **Carnatic** (Karnataka) ở miền Nam. Hai nhánh dùng chung hai khái niệm nền tảng là *raga* và *tala*, nhưng khác nhau về thẩm mỹ, nhạc cụ, cách phân loại và tỉ lệ giữa ứng tác và tác phẩm soạn sẵn. Bài này bổ sung cho các trang nhạc cụ [[sitar]] và [[tabla-mridangam]].

## Raga: khung giai điệu chứ không chỉ là âm giai

Theo Britannica, raga là *khung giai điệu* dùng cho ứng tác và sáng tác. Mỗi raga dựa trên một tập hợp nốt nhất định, một trật tự đặc trưng mà các nốt xuất hiện trong giai điệu (thường khác nhau khi đi lên và đi xuống), cùng các mô-típ tiêu biểu. Người biểu diễn đi từ nốt này sang nốt khác theo những cách riêng của raga để gợi một tâm trạng (*rasa*). Vì vậy hai raga có thể cùng một tập nốt mà vẫn khác nhau về cách luyến, nốt trọng tâm và các "câu cửa miệng".

- Văn bản lý thuyết quan trọng thời trung đại là *Sangita-ratnakara* của Sarngadeva (đầu thế kỷ 13, vùng Deccan), bàn đến 253 raga.
- Britannica ghi nhận: ở miền Bắc, raga thường được phân loại theo tâm trạng, mùa và giờ trong ngày; ở miền Nam, theo đặc điểm kỹ thuật của âm giai.
- Ở miền Bắc, Vishnu Narayan Bhatkhande (1860–1936) hệ thống hóa raga thành 10 *thaat* (âm giai gốc).
- Ở miền Nam, hệ **72 melakarta** gắn với Venkatamakhin (thế kỷ 17, tác phẩm *Chaturdandiprakashika*): ông hoán vị các dạng của từng bậc âm để thu được 72 *mela*, nhưng theo các nguồn thứ cấp chỉ đặt tên khoảng 19 mela vì phần còn lại khi đó chưa có raga thực tế. Hệ tên gọi chuẩn hóa sau này gắn với Govindacharya.

Raga không chia quãng tám thành 12 bán cung bình quân; cao độ được hiểu tương đối theo nốt chủ (Sa) do tambura giữ, và nhiều nốt được trang trí bằng luyến (*meend*, *gamaka*). Xem thêm [[vi-cung-va-am-nhac-vi-cung]].

## Tala: chu kỳ nhịp

Tala là chu kỳ nhịp lặp lại, chia thành các nhóm phách, với phách đầu (*sam*) là điểm hội tụ quan trọng. Các nguồn phổ thông cho biết tala có độ dài từ vài phách đến rất dài; tala phổ biến nhất ở miền Bắc là **tintal (teentaal) 16 phách** (4+4+4+4). Người chơi tabla hoặc mridangam đánh các âm tiết trống (*bol*) theo mẫu cố định gọi là *theka*, còn ứng tác nhịp như *tihai* (một mẫu lặp ba lần để rơi đúng vào sam) tạo cao trào. Xem [[da-nhip]] và [[cam-nhan-phach]].

## Cấu trúc một buổi trình diễn Hindustani

Một buổi diễn nhạc cụ (sitar, sarod…) theo khuôn mẫu phổ biến:

1. **Alap** — phần tự do không phách, không trống; nghệ sĩ khai mở raga từng nốt, từ âm khu thấp lên dần.
2. **Jor** — xuất hiện mạch phách đều nhưng vẫn chưa có tabla; nhịp gảy tạo dòng chảy.
3. **Jhala** — jor được đẩy nhanh, dùng dây nhịp (*chikari*) tạo cao trào.
4. **Gat** — tác phẩm soạn sẵn ngắn trong một tala (thường tintal), có tabla, xen kẽ ứng tác (*taan*, *tihai*).

Thứ tự này không cứng nhắc. Chẳng hạn gharana Maihar (dòng của Allauddin Khan, Ravi Shankar, Ali Akbar Khan) giữ thẩm mỹ dhrupad trong alap và jor, sau đó vào gat chậm (*vilambit*) theo kiểu khayal rồi kết bằng jhala. Thanh nhạc Hindustani có các thể loại dhrupad, khayal, thumri…

## Gharana: dòng truyền nghề

*Gharana* (từ *ghar*, "nhà") là hệ thống tổ chức xã hội liên kết nhạc sĩ Hindustani theo huyết thống hoặc quan hệ thầy–trò (*guru–shishya*) cùng một phong cách. Trong thanh nhạc khayal, các gharana thường được nêu gồm:

| Gharana | Đặc điểm thường được nêu |
|---|---|
| Gwalior | thường được coi là lâu đời nhất, "mẹ" của các gharana khác |
| Agra | khayal chậm, chịu ảnh hưởng dhrupad |
| Kirana | gắn với Abdul Karim Khan; chú trọng độ chuẩn cao độ (*sur*) |
| Jaipur-Atrauli | do Alladiya Khan lập cuối thế kỷ 19; taan phức tạp |

Số lượng gharana "chính" **chưa thống nhất**: có nguồn kể bốn, có nguồn sáu (thêm Delhi, Patiala), danh sách khác còn dài hơn.

## Carnatic: thế giới của kriti

Âm nhạc Carnatic thiên về tác phẩm soạn sẵn hơn, phần lớn là ca khúc tôn giáo (*kriti*), dù vẫn có phần ứng tác như *alapana*, *kalpana swara* và *tani avartanam* (độc tấu trống). Thời kỳ hoàng kim gắn với **Bộ ba** Tyagaraja, Muthuswami Dikshitar và Syama Sastri, sinh ở Tiruvarur trong khoảng 1750–1850. Một bài thuyết trình tại Music Academy Madras (2025) chỉ ra rằng Tyagaraja theo hệ melakarta của Govinda, còn Dikshitar theo hệ của Venkatamakhin; đây là chi tiết chuyên môn có thể còn tranh luận.

| | Hindustani | Carnatic |
|---|---|---|
| Vùng | Bắc Ấn, Pakistan, Bangladesh | Nam Ấn |
| Phân loại raga | 10 thaat (Bhatkhande) | 72 melakarta |
| Trống chính | tabla, pakhawaj | mridangam |
| Trọng tâm | ứng tác mở rộng | kriti soạn sẵn + ứng tác |

## Nguồn và độ tin cậy

Định nghĩa raga lấy từ Britannica; các con số (253 raga, 10 thaat, 72 melakarta, tintal 16 phách) có mặt nhất quán trong nhiều nguồn. Mô tả gharana và cấu trúc alap–jor–jhala–gat dựa chủ yếu vào bách khoa mở và tài liệu giảng dạy, nên mang tính khái quát; thực hành mỗi nghệ sĩ khác nhau. Để đọc sâu nên tìm mục "India, subcontinent of" trong Grove Music Online và sách của Richard Widdess về raga sơ kỳ.

Xem thêm: [[dan-toc-nhac-hoc]], [[nhac-cu-nam-a-tay-a]], [[maqam-a-rap-va-trung-dong]], [[am-giai]].
`,
  },
  {
    slug: "maqam-a-rap-va-trung-dong",
    title: "Maqam Ả Rập, makam Thổ Nhĩ Kỳ và dastgah Ba Tư",
    category: 'musicology',
    aliases: ["maqam", "maqamat", "Arabic maqam", "Turkish makam", "makam", "dastgah", "dastgāh", "radif", "jins", "ajnas", "taqasim", "Cairo Congress of Arab Music 1932", "Hội nghị âm nhạc Ả Rập Cairo 1932"],
    summary: "Giới thiệu các hệ thống điệu thức của thế giới Ả Rập, Thổ Nhĩ Kỳ và Iran: maqam được cấu thành từ các jins, cách ứng tác taqsim, tranh luận về \"quãng tư cung\" và hệ 24 âm, Hội nghị Cairo 1932, makam Thổ và hệ dastgah–radif Ba Tư.",
    refs: [
      ["Arab tone system — Wikipedia", "https://en.wikipedia.org/wiki/Arab_tone_system"],
      ["Jins — Wikipedia", "https://en.wikipedia.org/wiki/Jins"],
      ["Sami Abu Shumays, Maqam Analysis: A Primer (2013)", "https://maqamlessons.com/analysis/media/MaqamAnalysisAPrimer_2013WebFormat.pdf"],
      ["Sami Abu Shumays, Fuzzy Boundaries: Maqam Intonation (2009)", "https://maqamlessons.com/analysis/media/FuzzyBoundaries_MaqamIntonation2009.pdf"],
      ["An Open Research Dataset of the 1932 Cairo Congress of Arab Music (arXiv 2025)", "https://arxiv.org/pdf/2506.14503"],
      ["First Congress of Arab Music 1932: A richly diverse palette of rhythm and timbre — Qantara", "https://qantara.de/en/article/first-congress-arab-music-1932-richly-diverse-palette-rhythm-and-timbre"],
      ["Dastgah — Encyclopaedia Iranica", "https://iranicaonline.org/articles/dastgah"],
      ["Improvised Forms — Maqam World", "https://ftp.maqamworld.com/en/form/improv.php"],
    ],
    body: `
Từ Maroc đến Iraq, từ Istanbul đến Tehran, âm nhạc nghệ thuật dựa trên các hệ **điệu thức giai điệu**: *maqam* (số nhiều *maqamat*) trong tiếng Ả Rập, *makam* trong tiếng Thổ, *dastgah* ở Iran. Chúng có chung gốc lý thuyết trung đại, với các học giả như al-Farabi (mất năm 950) và Safi al-Din al-Urmawi (thế kỷ 13, người đề xuất thang 17 âm). Sau đó mỗi vùng phát triển theo hướng riêng. Nhạc cụ trung tâm như oud, qanun, ney, santur được giới thiệu ở trang [[dan-oud]] và [[nhac-cu-nam-a-tay-a]].

## Maqam: nhiều hơn một âm giai

Một maqam không chỉ là tập hợp nốt. Nó là một bộ quy tắc cho ứng tác và sáng tác, gồm nốt chủ, nốt trọng tâm thứ hai, hướng đi giai điệu điển hình (*sayr*) và các câu kết (*qafla*).

### Jins: viên gạch xây maqam

- **Jins** (số nhiều *ajnas*) là một nhóm 3–5 nốt liền bậc, tương ứng với tam âm, tứ âm hoặc ngũ âm; phần lớn là tứ âm.
- Một maqam thường gồm **jins dưới** và **jins trên**. Nốt bắt đầu của jins trên đóng vai trò "át", quan trọng thứ hai sau nốt chủ. Các maqam thường được xếp thành "họ" theo jins dưới, ví dụ họ Rast, Bayati, Hijaz, Saba, Nahawand, Ajam, Kurd, Sikah.
- Danh sách ajnas, tên gọi và kích thước của chúng **chưa có đồng thuận**. Sami Abu Shumays (2013) đề xuất nhìn maqam như một *mạng lưới lối đi* giữa các jins thay vì một âm giai chia thành tứ âm.

### Taqsim

*Taqsim* (số nhiều *taqasim*) là ứng tác độc tấu **không phách**, trên oud, qanun, ney hoặc bằng giọng hát. Người chơi mở đầu bằng những câu ngắn quanh nốt trọng tâm, mở rộng dần âm vực, có thể chuyển (*điệu chuyển*) sang maqam khác rồi quay về maqam gốc. Bên dưới có thể có âm trì hoặc mẫu trống, nhưng giai điệu vẫn tự do. Một nghiên cứu trên *Frontiers in Psychology* (2021) về các nghệ sĩ oud Syria mô tả taqsim là quá trình sáng tạo nhiều thành phần, phụ thuộc chặt vào maqam.

## "Quãng tư cung" và hệ 24 âm

Lý thuyết hiện đại thường chia quãng tám thành **24 phần bằng nhau** (mỗi phần 50 cent), một mô hình gắn với Mikha'il Mishaqa (1800–1888). Ký hiệu "nửa giáng" giúp ghi các nốt như E nửa giáng trong maqam Rast. Tuy nhiên:

- Bản thân quãng 50 cent hầu như **không được dùng như một bước giai điệu**. Quãng đặc trưng là **quãng hai trung tính** (khoảng ba phần tư cung).
- Cao độ thực tế của các nốt "nửa giáng" thay đổi theo maqam, theo hướng đi lên hay xuống và theo vùng. Abu Shumays (2009) gọi đó là "ranh giới mờ" và nhắc lại giai thoại: tại Cairo năm 1932, khi một cây qanun được lên dây đúng thang 24 âm bình quân, các nhạc công Ả Rập thấy nó lệch và chỉnh lại.

Hệ 24 âm vì vậy là **quy ước ký âm và giảng dạy** hơn là mô tả chính xác thực hành. Xem thêm [[vi-cung-va-am-nhac-vi-cung]] và [[cac-he-thong-chinh-am]].

## Hội nghị Âm nhạc Ả Rập Cairo 1932

Năm 1932, Cairo tổ chức Hội nghị Âm nhạc Ả Rập lần thứ nhất, quy tụ nhạc sĩ từ Maghreb đến Iraq cùng các học giả châu Âu, trong đó có Béla Bartók và Robert Lachmann.

::timeline 950=al-Farabi_mất 1200-1300=al-Urmawi:_thang_17_âm 1800-1888=Mishaqa:_thang_24_âm 1932=Hội_nghị_Cairo | Một số mốc trong lý thuyết maqam

- Tranh cãi lớn xoay quanh việc **chuẩn hóa thang 24 tư cung** và việc dùng nhạc cụ phương Tây như piano. Rauf Yekta, đại biểu Thổ Nhĩ Kỳ, phản đối thang 24 âm bình quân.
- Hội nghị cũng làm lộ ra mâu thuẫn giữa phe hiện đại hóa và phe truyền thống trung thành với *tarab* và ứng tác.
- Các đại biểu nhận thấy âm giai ở Mashriq (phía đông) khác hẳn Maghreb (phía tây), nơi các quãng "tư cung" ít gặp hơn nhiều.
- Theo Qantara, nhóm của Bartók và Lachmann đã thực hiện khoảng 360 bản thu với các đoàn tham dự. Một bộ dữ liệu nghiên cứu mở về hội nghị đã được công bố trên arXiv năm 2025.

## Makam Thổ Nhĩ Kỳ

Lý thuyết chính thức ở Thổ Nhĩ Kỳ là hệ **Arel–Ezgi–Uzdilek (AEU)**. Hệ này gồm 24 cao độ trong một quãng tám **không cách đều**, dựa trên một cung nguyên chia thành 9 *koma*, xây trên nền móng của Rauf Yekta. AEU là chuẩn ký âm và giảng dạy chính thức, nhưng bị nhiều nhà nghiên cứu Thổ phê phán vì không khớp với thực hành biểu diễn: các mô hình thay thế gồm thang 41, 53 hoặc 79 cao độ. Như vậy, cùng một truyền thống có nhiều mô hình chỉnh âm **chưa thống nhất**.

## Dastgah Ba Tư

Âm nhạc cổ điển Iran tổ chức theo **radif**, một kho giai điệu truyền khẩu gồm **7 dastgah** và **5 avaz** (dastgah phụ), theo Encyclopaedia Iranica.

| Nhóm | Tên |
|---|---|
| 7 dastgah | Shur, Segah, Chahargah, Mahur, Homayun, Nava, Rast-Panjgah |
| 5 avaz | Abu Ata, Bayat-e Tork, Afshari, Dashti, Bayat-e Esfahan |

Mỗi dastgah là một chuỗi *gusheh* (giai điệu ngắn). Nghệ sĩ mở đầu bằng gusheh nhập đề (*daramad*) rồi đi qua nhiều gusheh với tâm trạng khác nhau. Hệ 12 phần này được hệ thống hóa vào thế kỷ 19, đặc biệt qua Mirza Abdollah. Bốn avaz đầu thường được coi là phái sinh từ Shur, avaz cuối từ Homayun.

## Nguồn và độ tin cậy

Phần jins, taqsim và chỉnh âm dựa trên các tài liệu của Abu Shumays (người thực hành kiêm nghiên cứu, không phải tạp chí bình duyệt) và bách khoa mở. Phần dastgah dựa trên Encyclopaedia Iranica. Phần makam dựa trên tóm tắt các luận văn Thổ Nhĩ Kỳ. Kết quả biểu quyết chính thức của Hội nghị Cairo về thang 24 âm không có trong nguồn đã tra. Tài liệu chuyên sâu nên đọc là Scott Marcus, *Arab Music Theory in the Modern Period*.

Xem thêm: [[dan-oud]], [[am-nhac-co-dien-an-do]], [[dieu-thuc]], [[dan-toc-nhac-hoc]].
`,
  },
  {
    slug: "ly-thuyet-gamelan-java-va-bali",
    title: "Lý thuyết gamelan Java và Bali",
    category: 'musicology',
    aliases: ["gamelan theory", "laras", "colotomic structure", "cấu trúc colotomic", "irama", "kotekan", "ombak", "balungan", "gongan", "gong kebyar"],
    summary: "Các khái niệm lý thuyết cốt lõi của âm nhạc gamelan Indonesia: hai hệ thang âm slendro và pelog (mỗi dàn chỉnh âm một khác), cấu trúc chu kỳ colotomic, khái niệm irama ở Java, và kỹ thuật đan xen kotekan cùng hiện tượng phách ombak ở Bali.",
    refs: [
      ["Irama — Wikipedia", "https://en.wikipedia.org/wiki/Irama"],
      ["Pelog — Wikipedia", "https://en.wikipedia.org/wiki/Pelog"],
      ["Bill Alves, Graphic Representation of Some Gamelan Tunings", "https://pages.hmc.edu/alves/laras.html"],
      ["Music Perception — mô hình hóa chỉnh âm gamelan (Project MUSE)", "https://muse.jhu.edu/article/585304"],
      ["Kotekan — Wikipedia", "https://en.wikipedia.org/wiki/Kotekan"],
      ["Wayne Vitale, Kotekan: the technique of interlocking parts in Balinese music (Balungan, 1990)", "https://gamelan.org/?p=3652"],
      ["Mueller, Javanese Influence on Debussy", "https://music.arts.uci.edu/abauer/Cross-Cultural/readings/Mueller_Javanese_Influence_on_Debussy.pdf"],
      ["Ombak — Wikipedia", "https://en.wikipedia.org/wiki/Ombak"],
      ["Acoustics of the Balinese Gamelan — BYU Physics", "https://physics.byu.edu/faculty/gee/gamelan"],
    ],
    body: `
Trang [[gamelan]] giới thiệu dàn nhạc và nhạc cụ. Bài này đi vào **cách gamelan "suy nghĩ"**: thang âm, cách thời gian được chia bằng các tiếng cồng, cách mật độ và nhịp độ liên kết với nhau, và cách người Bali tạo giai điệu siêu tốc bằng hai bè đan cài. Dàn gamelan xuất hiện tại Triển lãm Thế giới Paris 1889 thường được coi là cú chạm lớn đầu tiên của âm nhạc Indonesia với nhạc cổ điển phương Tây; Debussy đã nghe nó, dù mức độ ảnh hưởng cụ thể lên phong cách của ông vẫn còn tranh luận.

## Slendro và pelog: hai hệ laras

- **Slendro**: 5 âm trong một quãng tám, các bước *gần bằng nhau*. Nếu chia đều tuyệt đối, mỗi bước khoảng 240 cent, không trùng với bất kỳ quãng nào của hệ 12 bình quân.
- **Pelog**: 7 âm với các quãng *không đều* (có bước nhỏ và bước lớn). Mỗi bản nhạc thường chọn một tập 5 âm (một *pathet*) từ 7 âm đó.

Điểm then chốt là **không có chuẩn chỉnh âm chung**. Mỗi dàn gamelan được rèn và chỉnh như một khối thống nhất, nên nhạc cụ của dàn này không dùng lẫn sang dàn khác. Các quãng slendro khác nhau giữa các dàn, nhưng gần như giống hệt nhau giữa các nhạc cụ trong cùng một dàn. Người Java gọi "cá tính" chỉnh âm của một dàn là *embat*.

### Số liệu đo đạc

Công trình của Surjodiningrat, Sudarjana và Susanto (1972, tái bản 1993) đo saron ở quãng tám giữa của **76 dàn gamelan** Trung Java có tiếng. Từ dữ liệu này:

- Bill Alves vẽ biểu đồ phân bố từng cao độ và cho thấy độ phân tán rõ rệt giữa các dàn.
- Một bài trên tạp chí *Music Perception* kết luận cả hai thang Java đều bị **giãn quãng tám** đáng kể so với thang phương Tây.
- Một tiền ấn phẩm arXiv (2025) nêu chu kỳ thực tế của slendro thường khoảng 1210 cent thay vì 1200.

Như vậy câu "slendro chia quãng tám làm 5 phần bằng nhau" chỉ là lý tưởng hóa. Xem thêm [[am-giai-ngu-cung]] và [[cac-he-thong-chinh-am]].

## Cấu trúc colotomic: thời gian hình vòng

Âm nhạc Java mang tính **chu kỳ** chứ không tuyến tính. Các nhạc cụ "chấm câu" đánh dấu các điểm cố định trong một vòng gọi là *gongan*:

| Nhạc cụ | Vai trò |
|---|---|
| gong ageng | cồng lớn nhất, đánh dấu điểm kết và khởi đầu của vòng |
| kenong | cồng nằm cao âm, chia vòng thành các đoạn lớn |
| kempul | cồng treo nhỏ, chia nhỏ hơn |
| kethuk | đánh dấu các phách phụ |

Thuật ngữ *colotomic* (thường được gắn với nhà dân tộc nhạc học Jaap Kunst, nhưng nguồn đã tra chưa xác nhận) chỉ cách "cắt" thời gian này. Phách nặng nhất nằm ở **cuối** chu kỳ (tiếng gong), ngược với thói quen phương Tây coi phách đầu ô nhịp là mạnh. Trên nền đó, *balungan* (giai điệu khung) do saron và demung chơi, còn bonang, gender, rebab, suling và giọng hát tô điểm xung quanh. Mỗi bè đi một biến thể của cùng một ý giai điệu, là một dạng phức điệu dị âm. Xem [[cam-nhan-phach]].

## Irama: quan hệ giữa nhịp độ và mật độ

*Irama* là khái niệm riêng của Java, kết hợp tốc độ dòng chảy và **mật độ** của các bè tô điểm so với balungan, trong đó mật độ là yếu tố chính. Nhịp độ thực (*laya*) là chuyện riêng: mỗi irama có thể chơi nhanh (*seseg*), vừa (*sedeng*) hay chậm (*tamban*).

Đo bằng số nốt saron panerus trên mỗi nốt balungan, các cấp irama thường được nêu là:

::bars lancar=1 tanggung=2 dados=4 wilet=8 rangkep=16 max=16 | Số nốt saron panerus trên một nốt balungan theo các cấp irama (theo Wikipedia; cách đánh số cấp lancar chưa thống nhất giữa các bản)

Khi chuyển irama, người đánh trống ra hiệu; cả dàn chậm lại còn khoảng một nửa trong khi các bè tô điểm nhân đôi mật độ. Ở irama rất chậm, balungan gần như không còn nghe như giai điệu mà chỉ còn chức năng chấm câu, và các bè tô điểm thành trung tâm.

## Bali: kotekan và ombak

### Kotekan

*Kotekan* là kỹ thuật **đan cài** hai bè nhanh, đặc trưng của *gong kebyar*, phong cách ra đời ở Bắc Bali; buổi diễn công khai đầu tiên được ghi nhận vào tháng 12/1915 tại Jagaraga. Bè *polos* thường rơi vào phách, bè *sangsih* rơi lệch phách; mỗi bè lấp chỗ trống của bè kia, tạo nên một dòng giai điệu nhanh mà một người chơi đơn lẻ không thể đạt. Kotekan được chơi trên gangsa và reyong, tô điểm cho giai điệu chính (*pokok*) trên calung và ugal. Wayne Vitale (1990) coi kỹ thuật này gắn liền với phong cách kebyar đầu thế kỷ 20. So sánh với [[da-nhip]].

### Ombak

Ở Bali, nhạc cụ được làm **theo cặp**: chiếc "cái" (*pengumbang*) chỉnh hơi thấp, chiếc "đực" (*pengisep*) hơi cao. Khi đánh cùng lúc, hai cao độ lệch nhau tạo ra **phách âm học** gọi là *ombak* ("sóng"), làm âm thanh rung lấp lánh. Tốc độ phách gần bằng hiệu tần số hai âm. Nhóm vật lý Đại học Brigham Young đo được phách khoảng 2,5–3 Hz trên một chiếc gong lớn và cho rằng phần chính của hiện tượng đó đến từ dao động phi tuyến của thân gong. Đây là số đo trên một nhạc cụ, không phải chuẩn chung.

## Nguồn và độ tin cậy

Các nhận định về chỉnh âm dựa trên dữ liệu Surjodiningrat và phân tích thứ cấp; phần irama và kotekan dựa chủ yếu vào bách khoa mở và bài của Vitale. Để đọc sâu nên tìm Sumarsam, *Gamelan: Cultural Interaction and Musical Development in Central Java*, và Michael Tenzer, *Gamelan Gong Kebyar*.

Xem thêm: [[gamelan]], [[nhac-cu-dong-a]], [[dan-toc-nhac-hoc]], [[vi-cung-va-am-nhac-vi-cung]].
`,
  },
  {
    slug: "am-nhac-chau-phi-ha-sahara",
    title: "Âm nhạc châu Phi hạ Sahara",
    category: 'musicology',
    aliases: ["African music", "sub-Saharan African music", "âm nhạc châu Phi", "standard pattern", "bell pattern", "mẫu chuông", "xướng–đáp", "talking drum", "trống biết nói", "dundun", "polyrhythm châu Phi"],
    summary: "Các nguyên lý âm nhạc thường được nêu cho châu Phi hạ Sahara: đa nhịp và đa tầng, mẫu chuông \"time line\", lối xướng–đáp, trống mô phỏng lời nói; kèm phê phán của Kofi Agawu về việc phương Tây \"phát minh\" ra \"nhịp điệu châu Phi\".",
    refs: [
      ["Kofi Agawu, Structural Analysis or Cultural Analysis? Competing Perspectives on the \"Standard Pattern\" of West African Rhythm, JAMS 59/1 (2006)", "https://music.arts.uci.edu/abauer/6.2/readings/Agawu_JAMS_06.pdf"],
      ["Agawu, Representing African Music (Routledge, 2003)", "https://www.routledge.com/Representing-African-Music-Postcolonial-Notes-Queries-Positions/Agawu/p/book/9780415943901"],
      ["Review of Representing African Music — Twentieth-Century Music (Cambridge)", "https://www.cambridge.org/core/journals/twentieth-century-music/article/kofi-agawu-representing-african-music-postcolonial-notes-queries-positions-new-york-and-london-routledge-2003-isbn-0415943892-hb-01415943906-pb/7A42463CCEE237CE72BCD7C7BE8582B9"],
      ["Simha Arom, African Polyphony and Polyrhythm (Cambridge UP, 1991) — Introduction", "https://www.cambridge.org/core/books/abs/african-polyphony-and-polyrhythm/introduction/F2CF00BB9961D67FDA3522906C06C706"],
      ["Meter, feel, and phrasing in West African bell patterns: Asante kete — African Music journal", "https://journal.ru.ac.za/index.php/africanmusic/article/view/2196"],
      ["The talking drum of the Yoruba mimics speech — Frontiers in Communication (2021)", "https://www.frontiersin.org/articles/10.3389/fcomm.2021.652690/pdf"],
      ["How does the West African talking drum mimic human speech? — Smithsonian", "https://www.smithsonianmag.com:443/smart-news/how-west-african-drums-really-talk-180978296/"],
    ],
    body: `
Châu Phi hạ Sahara gồm hàng chục quốc gia và hàng nghìn ngôn ngữ, nên "âm nhạc châu Phi" là một nhãn rất thô. Tuy vậy, các nhà dân tộc nhạc học thường nêu một số nguyên lý lặp lại ở nhiều nơi, nhất là Tây và Trung Phi: **đa tầng nhịp**, **mẫu chuông làm trục thời gian**, **xướng–đáp**, và **gắn bó chặt với ngôn ngữ và vũ đạo**. Bài này trình bày các nguyên lý đó, rồi giới thiệu phê phán của Kofi Agawu về chính cách giới học thuật mô tả chúng. Nhạc cụ như [[kora]], mbira, balafon xem ở [[nhac-khi-the-gioi]].

## Đa tầng nhịp và đa âm

Trong nhiều điệu múa trống Tây Phi, mỗi người chơi giữ một mẫu ngắn, lặp lại, và các mẫu chồng lên nhau tạo thành kết cấu dày. Quan hệ **3 chống 2** (ba phách chia đều đặt trên hai phách chia đều) là quan hệ nền tảng: Agawu (2006) nhấn mạnh rằng 2 và 3 ở đây được cảm nhận như một chỉnh thể (*Gestalt*) chứ không như hai nhịp "xung đột". Xem [[da-nhip]] và [[sieu-nhip]].

Simha Arom, trong *African Polyphony and Polyrhythm* (Cambridge UP, 1991, lời tựa của György Ligeti), nghiên cứu âm nhạc Cộng hòa Trung Phi: đàn hạc, sanza, xylophone và bộ gõ. Ông xây dựng phương pháp ghi và giải mã từng tầng phức điệu–đa nhịp, coi âm nhạc như một hệ thống ngữ pháp và mượn kỹ thuật của ngôn ngữ học.

## Time line: mẫu chuông làm trục

Thuật ngữ **time line** do J. H. Kwabena Nketia dùng lần đầu năm 1963. Nó chỉ một mẫu nhịp lặp lại, thường do chuông sắt đánh, làm điểm quy chiếu cố định cho cấu trúc câu và tổ chức nhịp của cả dàn. Mẫu nổi tiếng nhất, được giới chuyên môn gọi là **"standard pattern"**, phổ biến khắp Tây và Trung Phi và một phần cộng đồng hải ngoại. Ở các điệu múa Ewe miền Nam (như Agbadza), mẫu được đánh trên chuông hai đầu *gankogui*.

Mẫu chuẩn gồm **7 tiếng đánh và 5 lặng** trên chu kỳ 12 xung (thường ghi theo 12/8, bốn phách):

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| x | · | x | · | x | x | · | x | · | x | · | x |

Agawu (2006) gọi mẫu này là một *topos* và chỉ ra rằng phân tích "cấu trúc" theo siêu ngôn ngữ châu Âu dễ đọc nó là nhịp *cộng* (additive), trong khi phân tích "văn hóa", dựa trên vũ đạo và cách nghĩ của nhạc công châu Phi, đặt nó trên nền phách đều do bước chân múa xác định. Một nghiên cứu về điệu kete của người Asante còn lập luận rằng phách 1 không phải điểm khởi đầu mà là **điểm đến** của câu chuông. Họ hàng Mỹ Latinh của mẫu này là clave: xem [[clave-tresillo-va-nhip-cong]].

## Xướng–đáp

Lối **xướng–đáp** (*call and response*), trong đó một người hát lĩnh xướng và tập thể đáp lại bằng một điệp khúc cố định, có mặt rộng khắp trong ca hát nghi lễ, lao động và giải trí. Người lĩnh xướng thường được ứng tác lời và giai điệu, còn câu đáp giữ ổn định như một "time line" bằng giọng hát. Lối này về sau thấm vào gospel, blues, jazz và nhạc Mỹ Latinh. Xem [[am-giai-blues]].

## Trống biết nói

Nhiều ngôn ngữ châu Phi là **ngôn ngữ thanh điệu**, nên nhạc cụ có thể "nói" bằng cách mô phỏng đường nét cao độ của lời. Trống *dùndún* hình đồng hồ cát của người Yorùbá có dây căng da; người chơi bóp dây dưới nách để đổi cao độ. Một nghiên cứu trên *Frontiers in Communication* (2021) so sánh 30 câu nói và hát với đoạn trống của nghệ sĩ chuyên nghiệp và thấy trống khớp chặt với lời về thời gian, cao độ và cường độ, mức khớp giảm dần khi trống chơi theo lối "âm nhạc" hơn. Trống được dùng để rao báo, cầu nguyện, đọc tục ngữ và thơ ca ngợi. Người Asante (Ghana) có cặp trống nói *atumpan* hình thùng. Xem [[am-nhac-va-ngon-ngu]].

## Phê phán của Agawu: "phát minh ra nhịp điệu châu Phi"

Trong *Representing African Music* (2003), nhà lý luận người Ghana Kofi Agawu có chương "Sự phát minh ra 'nhịp điệu châu Phi'" và một chương về "đa phách, nhịp cộng và các huyền thoại dai dẳng khác". Theo bài điểm sách của Martin Scherzinger, luận điểm chính là:

- Hình ảnh "nhịp điệu châu Phi phức tạp bậc nhất" phần lớn được **sản xuất** bởi khung tri thức Âu–Mỹ và hoạt động như một dấu hiệu của sự khác biệt, cộng hưởng với diễn ngôn thực dân về một châu Phi "khác hẳn" phương Tây.
- Agawu chất vấn việc dân tộc nhạc học đề cao khác biệt và đề nghị chú ý cả đến **tương đồng**; Scherzinger coi đây là lập trường còn có thể tranh luận.
- Trong *African Rhythm: A Northern Ewe Perspective* (1995), Agawu đặt "động cơ" của đời sống nhịp điệu Ewe vào **ngôn ngữ nói** hơn là vào trống.

Bài học cho người dạy nhạc: các khái niệm như "đa nhịp" là công cụ hữu ích, nhưng không nên biến chúng thành bản chất cố định của cả một lục địa. Xem [[dan-toc-nhac-hoc]].

## Nguồn và độ tin cậy

Phần time line và Agawu dựa trên bài JAMS 2006 và các bài điểm sách học thuật; phần trống nói dựa trên nghiên cứu bình duyệt 2021. Mục xướng–đáp mang tính khái quát, không gắn với một nghiên cứu định lượng cụ thể.

Xem thêm: [[clave-tresillo-va-nhip-cong]], [[kora]], [[da-nhip]].
`,
  },
  {
    slug: "am-nhac-truyen-thong-nhat-ban",
    title: "Âm nhạc truyền thống Nhật Bản",
    category: 'musicology',
    aliases: ["traditional Japanese music", "hogaku", "hōgaku", "gagaku", "nhã nhạc Nhật Bản", "shakuhachi honkyoku", "sokyoku", "sōkyoku", "nhạc koto", "nagauta", "noh hayashi", "ma (間)", "in scale", "yo scale", "âm giai in", "âm giai yo"],
    summary: "Tổng quan các thể loại chính của âm nhạc truyền thống Nhật Bản (hōgaku): nhã nhạc cung đình gagaku, honkyoku của shakuhachi, nhạc koto sōkyoku, âm nhạc sân khấu Noh và Kabuki, cùng khái niệm thẩm mỹ ma và hệ âm giai in/yo.",
    refs: [
      ["Gagaku information — Embassy of Japan in the Netherlands", "https://www.nl.emb-japan.go.jp/e/culture/gagaku_info.pdf"],
      ["Gagaku — EBSCO Research Starters", "https://www.ebsco.com/research-starters/music/gagaku/"],
      ["Shakuhachi: The History and Practice of Suizen — Japan House, University of Illinois", "https://japanhouse.illinois.edu/education/insights/shakuhachi"],
      ["Traditional Japanese music — Wikipedia", "https://en.wikipedia.org/wiki/Traditional_Japanese_music"],
      ["Rokudan no Shirabe — komuso.com", "https://komuso.com/pieces/pieces.pl?piece=2093"],
      ["In scale — Wikipedia", "https://en.wikipedia.org/wiki/In_scale"],
      ["Liam Hynes-Tawa, Japanese Tetrachordal Theory in Settings Old and New — Society for Music Theory", "https://societymusictheory.org/node/1492"],
      ["Toru Takemitsu and the Unity of Opposites — College Music Symposium", "https://symposium.music.org/volume-30/articles-1752877059/toru-takemitsu-and-the-unity-of-opposites"],
    ],
    body: `
Người Nhật gọi âm nhạc truyền thống là *hōgaku* ("nhạc nước nhà") để phân biệt với *yōgaku* (nhạc phương Tây). Đó không phải một hệ thống thống nhất mà là nhiều lớp hình thành qua hơn một thiên niên kỷ: nhạc cung đình du nhập từ lục địa, nhạc Phật giáo, nhạc sân khấu Noh và Kabuki, nhạc thính phòng của tầng lớp đô thị thời Edo, và dân ca (*min'yō*). Nhạc cụ (koto, shamisen, shakuhachi, biwa) được giới thiệu ở trang [[nhac-cu-dong-a]].

::timeline 701=Triều_đình_thiết_lập_nhã_nhạc 1600-1868=Thời_Edo:_koto,_shakuhachi,_Kabuki 1664=Ghi_chép_honkyoku_sớm_nhất 1955=Gagaku_thành_tài_sản_văn_hóa_quan_trọng 2009=UNESCO_ghi_danh_gagaku | Một số mốc của âm nhạc truyền thống Nhật Bản

## Gagaku: nhã nhạc cung đình

*Gagaku* ("nhạc thanh nhã") là âm nhạc cổ điển lâu đời nhất của Nhật, gắn với hoàng gia. Theo các nguồn giới thiệu, triều đình chính thức xác lập loại nhạc này năm 701, chịu ảnh hưởng mạnh của Trung Hoa và Triều Tiên:

- **Tōgaku**: các bản có gốc Trung Hoa (đời Đường).
- **Komagaku**: các bản có gốc Triều Tiên.
- Ngoài ra có ca vũ bản địa và thơ ngâm có nhạc đệm.

Dàn nhạc gồm kèn dăm kép *hichiriki*, sáo *ryūteki*, khèn *shō*, đàn và trống. Chức năng chủ yếu là nghi lễ, đệm cho nghi thức của Thiên hoàng và hoàng tộc. Năm 1955 Chính phủ Nhật công nhận gagaku là Tài sản văn hóa phi vật thể quan trọng; năm 2009 UNESCO đưa vào Danh sách đại diện di sản phi vật thể của nhân loại. Sứ quán Nhật mô tả đây là truyền thống nhạc dàn nhạc còn sống lâu đời nhất thế giới, một nhận định khó kiểm chứng độc lập. So sánh với [[ca-hue-nha-nhac|Nhã nhạc cung đình Huế]].

## Shakuhachi và honkyoku

*Honkyoku* ("bản gốc") là kho bản độc tấu shakuhachi gắn với các **komusō**, những người tu hành không thuộc tu viện, xuất thân võ sĩ, đội nón rơm che kín mặt, của phái **Fuke** (nhánh của Thiền Lâm Tế). Họ thổi sáo như một pháp tu gọi là *suizen* ("thiền thổi"), chú trọng kiểm soát hơi thở.

- Thời Edo, Mạc phủ cho phái Fuke độc quyền thổi shakuhachi, giúp họ đi lại tự do khi việc di chuyển bị kiểm soát chặt.
- Tài liệu sớm nhất ghi tên một bản honkyoku là *Shichiku shoshin-shū* (1664).
- Phái Fuke bị chính quyền Minh Trị bãi bỏ (nguồn ghi năm 1871); năm 1883 hội Myōan được lập tại chùa Myōan-ji ở Kyoto để duy trì truyền thống.

Niên đại thành lập phái (có nguồn ghi 1614) và nhiều truyền thuyết về nguồn gốc **chưa thống nhất** giữa các nguồn.

## Sōkyoku: nhạc koto

*Sōkyoku* là âm nhạc cho đàn tranh koto 13 dây. Yatsuhashi Kengyō (thế kỷ 17), một nhạc sĩ mù, thường được coi là người đặt nền cho nhạc koto cận đại, hệ thống hóa lối độc tấu và thể *danmono* (bản không lời gồm nhiều đoạn). Bản *Rokudan no Shirabe* ("Khúc sáu đoạn") gồm sáu đoạn có số phách bằng nhau, nhịp độ tăng dần, và là một trong số ít danmono còn lưu truyền. Xem [[dan-tranh]] để so sánh.

## Âm nhạc sân khấu: Noh và Kabuki

- **Noh**: dàn *hayashi* gồm bốn nhạc cụ là sáo *nōkan*, trống vai *kotsuzumi*, trống hông *ōtsuzumi* và trống *taiko* có dùi, đệm cho phần hát *yōkyoku*. Người chơi trống phát ra các tiếng hô (*kakegoe*) như một phần của âm nhạc, giúp giữ nhịp và tạo kịch tính.
- **Kabuki**: ban đầu dùng dàn hayashi của Noh, sau thêm đàn shamisen. Thể **nagauta** ("bài hát dài") lấy shamisen và giọng hát làm trung tâm cùng dàn hayashi; nó được đưa vào Kabuki khoảng năm 1740 và cũng được diễn độc lập trên sân khấu hòa nhạc.

## Thẩm mỹ: ma và âm giai

### Ma (間)

*Ma* là một từ thường ngày chỉ khoảng không, khoảng giữa, quãng thời gian. Trong âm nhạc, nó chỉ khoảng lặng có sức nặng giữa các âm, rất rõ trong shakuhachi và Noh. Nhà soạn nhạc Tōru Takemitsu gọi ma là "sự im lặng đầy quyền lực" và nói âm thanh và im lặng có giá trị ngang nhau. Phần lớn nguồn về ma là bài luận và ghi chú chương trình, không phải nghiên cứu thực nghiệm.

### Âm giai in và yo

Sách phổ thông thường chia âm giai ngũ cung Nhật thành hai loại:

| Âm giai | Đặc điểm | Ví dụ trên D |
|---|---|---|
| *Yo* | không có bán cung; quãng 2-3-2-2-3 bán cung | D–E–G–A–B |
| *In* (miyako-bushi) | có bán cung; gắn với koto và shamisen đô thị | D–Eb–G–A–Bb |

Nhà dân tộc nhạc học **Koizumi Fumio** đề xuất cách nhìn khác: đơn vị cơ bản là **tứ âm** (quãng bốn đúng với một nốt giữa) chứ không phải quãng tám. Ông phân bốn loại tứ âm là *min'yō*, *miyako-bushi*, *ritsu* và *ryūkyū*. Lý thuyết này vẫn được giới phân tích âm nhạc hiện đại thảo luận. Xem [[am-giai-ngu-cung]].

## Nguồn và độ tin cậy

Phần gagaku dựa trên tài liệu của Sứ quán Nhật và EBSCO; phần honkyoku dựa trên Japan House (Đại học Illinois) và các nguồn chuyên ngành shakuhachi vốn có những chỗ lệch nhau về niên đại. Ví dụ cao độ của âm giai in là quy ước minh họa.

Xem thêm: [[nhac-cu-dong-a]], [[am-nhac-truyen-thong-trung-hoa]], [[dan-toc-nhac-hoc]].
`,
  },
  {
    slug: "am-nhac-truyen-thong-trung-hoa",
    title: "Âm nhạc truyền thống Trung Hoa",
    category: 'musicology',
    aliases: ["traditional Chinese music", "âm nhạc cổ truyền Trung Quốc", "lülü", "luật lữ", "thập nhị luật", "gong shang jiao zhi yu", "Kunqu", "Côn khúc", "Peking opera", "Kinh kịch", "jingju", "silk and bamboo", "ti trúc", "Jiangnan sizhu", "Chu Tái Dục", "Zhu Zaiyu"],
    summary: "Tổng quan âm nhạc truyền thống Trung Hoa qua bốn trục: hệ luật lữ 12 âm và phép tính của Chu Tái Dục, ngũ âm cung–thương–giốc–chủy–vũ, kịch hát (Côn khúc, Kinh kịch), và nhạc thính phòng \"ti trúc\".",
    refs: [
      ["Zhu Zaiyu — Wikipedia", "https://en.wikipedia.org/wiki/Zhu_Zaiyu"],
      ["Equal temperament — Wikipedia", "https://en.wikipedia.org/wiki/Equal_temperament"],
      ["Kunqu — Wikipedia", "https://en.wikipedia.org/wiki/Kunqu"],
      ["Oldest opera — Guinness World Records", "https://www.guinnessworldrecords.com/world-records/102729-oldest-opera"],
      ["Shengqiang — Wikipedia", "https://en.wikipedia.org/wiki/Shengqiang"],
    ],
    body: `
Âm nhạc Trung Hoa có lịch sử lý thuyết thành văn hơn hai thiên niên kỷ, gắn chặt với triết học, nghi lễ và cả lịch pháp. Trong Nho giáo, nhạc là một phần của lễ và chính sự. Bài này điểm qua bốn trục: hệ cao độ, thang ngũ âm, kịch hát và nhạc thính phòng dân gian. Nhạc cụ (cổ cầm, tỳ bà, nhị hồ, sáo) xem ở [[guqin]] và [[nhac-cu-dong-a]]; tư tưởng Nho gia về nhạc xem ở [[nhac-trong-tu-tuong-nho-gia]].

## Luật lữ: mười hai cao độ chuẩn

*Lülü* (luật lữ) là hệ **12 cao độ chuẩn** trong một quãng tám, chia thành 6 "luật" (dương) và 6 "lữ" (âm). Âm gốc gọi là *hoàng chung* (huangzhong). Theo truyền thống, các âm được sinh ra bằng phép **tam phân tổn ích**: lần lượt bớt hoặc thêm một phần ba chiều dài ống hay dây. Đây là phép sinh âm theo quãng năm đúng, tương tự phép sinh của Pythagoras, nên vòng 12 âm không khép kín hoàn toàn.

### Chu Tái Dục và chia đều 12 âm

Hoàng thân nhà Minh **Chu Tái Dục** (Zhu Zaiyu) đã giải bài toán này bằng số học:

- Năm 1580 ông trình bày lý thuyết cao độ mới; năm 1584 ông đưa ra mô tả số học chính xác của **bình quân 12 âm** trong bộ *Nhạc luật toàn thư* (*Yuelü quan shu*, khoảng 5.000 trang).
- Phương pháp của ông chia liên tiếp chiều dài dây (và ống) theo căn bậc 12 của 2, để sau 12 bước chiều dài còn đúng một nửa, tức một quãng tám.
- Ông còn chế một bộ 36 ống tre chỉnh âm trải ba quãng tám, và một nhạc cụ 12 dây để chỉnh âm.

Ông thường được coi là người đầu tiên giải bài toán bình quân bằng toán học, gần như cùng thời với Simon Stevin ở châu Âu. Tuy nhiên quyền ưu tiên **còn tranh cãi**: Fritz Kuttner công nhận phương pháp tính của Chu năm 1584 là chính xác và tài tình, nhưng cho rằng cả Chu lẫn Stevin đều không nên được coi là "người phát minh" bình quân. Trước đó nữa, nhà toán học Hà Thừa Thiên (thời Nam–Bắc triều) đã mô tả một phép xấp xỉ. Xem [[cac-he-thong-chinh-am]].

## Ngũ âm: cung, thương, giốc, chủy, vũ

Năm bậc của thang ngũ âm Trung Hoa mang tên **cung, thương, giốc, chủy, vũ** (gong, shang, jiao, zhi, yu), tương ứng với Do–Re–Mi–Sol–La nếu lấy cung là Do. Mỗi bậc có thể làm chủ âm, tạo ra năm điệu thức (điệu cung, điệu thương…). Hai âm phụ *biến chủy* và *biến cung* bổ sung để thành thang bảy âm. Hệ thống này truyền sang Việt Nam, Triều Tiên và Nhật Bản. Xem [[am-giai-ngu-cung]] và [[ly-thuyet-am-nhac-co-truyen-viet-nam]].

## Kịch hát: Côn khúc và Kinh kịch

### Côn khúc

*Kunqu* (Côn khúc), xuất phát từ vùng Côn Sơn (Giang Tô), thường được coi là thể loại hí khúc cổ nhất còn lưu truyền. Làn điệu Côn Sơn thường được ghi công cho **Ngụy Lương Phụ** thời Minh; Guinness đặt cuộc cải cách của ông vào khoảng năm 1530. Lối hát tinh tế của ông được gọi là *thủy ma điệu* ("điệu cối xay nước"). Tuy nhiên một phát hiện gần đây cho rằng làn điệu Côn Sơn đã có từ cuối đời Nguyên, gắn với Cố Kiên. Năm 2001, Côn khúc được UNESCO tuyên bố là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại (đợt đầu tiên), rồi đưa vào Danh sách đại diện năm 2008.

### Kinh kịch

*Kinh kịch* (jingju) hình thành ở Bắc Kinh từ thế kỷ 19. Về âm nhạc, nó thuộc hệ *thanh xoang* (shengqiang) dựa trên hai làn điệu chính **tây bì** và **nhị hoàng**, đệm bằng đàn kéo *kinh hồ* và dàn gõ (trống, phách, thanh la) điều khiển nhịp sân khấu. Lưu ý: chi tiết về Kinh kịch trong bài này chưa được kiểm chứng đầy đủ qua nguồn trong đợt tra cứu này (kể cả năm UNESCO ghi danh, thường được nêu là 2010). Xem [[opera]] để so sánh.

## Ti trúc: nhạc thính phòng dân gian

*Ti trúc* ("tơ và trúc") chỉ các dàn nhạc nhỏ kết hợp nhạc cụ dây (tơ) và nhạc cụ hơi bằng tre (trúc). Dạng nổi tiếng nhất là *Giang Nam ti trúc* quanh Thượng Hải, với nhị hồ, sáo, tỳ bà, dương cầm, tiêu. Các nhạc công cùng chơi một giai điệu nhưng mỗi người tô điểm theo cách riêng của nhạc cụ mình, tạo nên kết cấu phức điệu dị âm, giống gamelan và nhạc tài tử Việt Nam. Phần này dựa trên kiến thức tổng quát và **chưa được đối chiếu nguồn** trong đợt này. Xem [[hoi-trong-nhac-tai-tu-cai-luong]].

## Nguồn và độ tin cậy

Phần Chu Tái Dục và Côn khúc có nguồn đối chiếu (bách khoa mở có trích Kuttner, Guinness). Phần luật lữ, tam phân tổn ích và ngũ âm là kiến thức giáo khoa phổ biến. Phần Kinh kịch và ti trúc **cần bổ sung nguồn** (gợi ý: Grove Music Online, mục "China"; Lawrence Witzleben, *Silk and Bamboo Music in Shanghai*).

Xem thêm: [[guqin]], [[am-nhac-truyen-thong-nhat-ban]], [[am-giai-ngu-cung]], [[nhac-cu-dong-a]].
`,
  },
]
