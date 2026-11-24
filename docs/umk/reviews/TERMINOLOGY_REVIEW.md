# Rà soát thuật ngữ — UMK Phase 1.5 (24/11/2026)

Nguồn dữ liệu: `termConflicts()` (`src/umk/terminology.ts`) chạy trên `src/features/terms/terms.json` thật (258 thuật ngữ), bộ phân giải liên kết của thư viện (`findArticle`, `keyIndex.ts`), thân 1.538 bài. Kết quả rà soát lưu ở `src/umk/reviews.json` (giao diện `/umk?tab=gaps` đọc cùng dữ liệu).

Người rà: trợ lý máy (Claude), rà trên mã nguồn và nội dung thư viện; chưa có người biên soạn hay người dạy duyệt.

## Kết luận chung

- Hàm trả **9** trường hợp ở commit 4bbdc65. Hai nguyên nhân gốc, đọc từ mã nguồn:
  1. `scripts/terms/build.py` (dòng 165–172) đưa **nhãn tiếng Việt của mục Wikidata** (`viwiki`) vào danh sách biến thể. Bài được nối với mục Wikidata qua trường `wiki` (tên bài Wikipedia tiếng Anh), mà mục đó có khi là khái niệm **rộng hơn** (Musicology cho bài sử học của ngành; Harmony cho Hoà âm cổ điển; Key signature mang nhãn "Dấu hóa"). 6/9 trường hợp do việc này.
  2. UMK so dạng viết **sau khi bỏ dấu**: "họa âm" và "Hòa âm" thành một khoá. 1 trường hợp là dương tính giả.
- Không trường hợp nào là đồng nghĩa tuyệt đối. **Không gộp Term ID nào, không đổi dạng chính, không xoá biến thể.**
- Sửa trong code (có căn cứ rõ):
  - (a) Bộ dò so **có dấu thanh**: chỉ coi hai cách đặt dấu oà/òa, oè/òe, uỳ/ùy là một (`toneKey`).
  - (b) Dạng viết đến từ nhãn Wikidata được ghi quan hệ `wikidata-label`, tách khỏi biến thể do người biên soạn ghi; dữ liệu `terms.json` không đổi. Lược đồ UMK lên 1.1.0.
- Sau sửa: bộ dò còn **8** trường hợp. Gom theo gốc: **6 vấn đề cần quyết** + 1 đã sửa ở bộ dò.
- Hiện **không bài nào** viết liên kết `[[…]]` bằng các dạng viết bị xung đột (đếm 0 liên kết cho mỗi dạng). Người đọc chưa bị dẫn sai; tìm kiếm và liên kết viết sau này thì có thể.

## Bảng tổng hợp

| # | Mã xung đột (và mã cùng gốc) | Thuật ngữ | Dạng viết | Phân loại | Trạng thái |
|---|---|---|---|---|---|
| 1 | `term-shared:am nhac hoc`<br>`term-points-elsewhere:x:lich-su-nganh-am-nhac-hoc:am nhac hoc` | x:am-nhac-hoc, x:lich-su-nganh-am-nhac-hoc | Âm nhạc học | **BROADER_NARROWER** (rộng – hẹp) | chờ người biên soạn quyết |
| 2 | `term-shared:hoa am` | x:chuoi-boi-am, x:he-thong-hoa-am-co-dien | họa âm (bí danh của bài Chuỗi bồi âm) · Hòa âm (nhãn Wikidata của mục Harmony) | **RELATED_BUT_DISTINCT** (liên quan nhưng khác khái niệm) | đã sửa bộ dò (dữ liệu không đổi) |
| 3 | `term-points-elsewhere:x:he-thong-hoa-am-co-dien:hoa am` | x:he-thong-hoa-am-co-dien | Hòa âm | **BROADER_NARROWER** (rộng – hẹp) | chờ người biên soạn quyết |
| 4 | `term-shared:dau hoa`<br>`term-points-elsewhere:x:hoa-bieu:dau hoa` | x:dau-hoa, x:hoa-bieu | Dấu hoá (dạng chính của x:dau-hoa) · Dấu hóa (nhãn Wikidata của Key signature) | **BROADER_NARROWER** (rộng – hẹp) | chờ người biên soạn quyết |
| 5 | `term-points-elsewhere:x:organ-ong:dai phong cam` | x:organ-ong | Đại phong cầm | **SAME_CONCEPT** (cùng khái niệm, khác cách gọi) | chờ người biên soạn quyết |
| 6 | `term-points-elsewhere:x:hinh-thuc-ca-khuc-pho-thong:diep khuc` | x:hinh-thuc-ca-khuc-pho-thong | điệp khúc | **BROADER_NARROWER** (rộng – hẹp) | chờ người biên soạn quyết |
| 7 | `term-points-elsewhere:x:pipa:dan ty ba` | x:pipa | Đàn tỳ bà | **RELATED_BUT_DISTINCT** (liên quan nhưng khác khái niệm) | chờ người biên soạn quyết |

## Từng trường hợp

### 1. `term-shared:am nhac hoc`

| Term ID | Dạng chính | Bài thư viện | Mục | Dạng viết (quan hệ ở 1.0.0) |
|---|---|---|---|---|
| `x:am-nhac-hoc` | Âm nhạc học | `a:am-nhac-hoc` — Âm nhạc học: bản đồ ngành và lộ trình nghiên cứu | musicology | Âm nhạc học [vi/preferred]; ngành âm nhạc học [vi/glossary-variant]; nghiên cứu âm nhạc [vi/glossary-variant]; musicology [en/foreign]; музыковедение [ru/foreign]; Musikwissenschaft [de/foreign]; musicologie [fr/foreign]; musicologia [it/foreign]; Âm nhạc học: bản đồ ngành và lộ trình nghiên cứu [vi/article-alias]; musicology [vi/article-alias]; Musikwissenschaft [vi/article-alias]; ngành âm nhạc học [vi/article-alias]; nghiên cứu âm nhạc [vi/article-alias] |
| `x:lich-su-nganh-am-nhac-hoc` | Sử học âm nhạc | `a:lich-su-nganh-am-nhac-hoc` — Sử học âm nhạc: lịch sử của ngành | musicology | Sử học âm nhạc [vi/preferred]; lịch sử ngành âm nhạc học [vi/glossary-variant]; Âm nhạc học [vi/glossary-variant]; musicology [en/foreign]; музыковедение [ru/foreign]; Musikwissenschaft [de/foreign]; musicologie [fr/foreign]; musicologia [it/foreign]; Sử học âm nhạc: lịch sử của ngành [vi/article-alias]; historiography of music [vi/article-alias]; lịch sử ngành âm nhạc học [vi/article-alias]; Burney [vi/article-alias]; Hawkins [vi/article-alias]; Forkel [vi/article-alias]; Chrysander [vi/article-alias]; Spitta [vi/article-alias]; Dahlhaus [vi/article-alias]; American Musicological Society [vi/article-alias] |

- **Định nghĩa** `x:am-nhac-hoc`: Âm nhạc học là ngành nghiên cứu âm nhạc một cách có hệ thống. Từ Guido Adler (1885), ngành được chia thành âm nhạc học lịch sử và âm nhạc học hệ thống; bài này là bản đồ của cả hai nhánh và chỉ ra các bài tương ứng trong thư viện.
- **Định nghĩa** `x:lich-su-nganh-am-nhac-hoc`: Người ta bắt đầu viết "lịch sử âm nhạc" từ thế kỷ 18 (Martini, Hawkins, Burney, Forkel); thế kỷ 19 có các tiểu sử dựa trên nguồn (Spitta) và các bộ toàn tập; Adler lập khung của ngành năm 1885; thế kỷ 20 ngành sang Mỹ cùng làn sóng di cư, rồi được chất vấn bởi Kerman (1985), Dahlhaus (1977) và "âm nhạc học mới".
- **Số lần dùng trong thư viện** `x:am-nhac-hoc`: {'Âm nhạc học': 113, 'ngành âm nhạc học': 0, 'nghiên cứu âm nhạc': 16}
- **Số lần dùng trong thư viện** `x:lich-su-nganh-am-nhac-hoc`: {'Sử học âm nhạc': 2, 'lịch sử ngành âm nhạc học': 0, 'Âm nhạc học': 113}
- **Lĩnh vực**: `x:am-nhac-hoc` → d:nhap-mon, d:topic.musicology; `x:lich-su-nganh-am-nhac-hoc` → d:su-hoc, d:topic.musicology
- **Nguồn gốc**: định nghĩa do người biên soạn viết (`terms.json`, provenance `educational/partial`); nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục.

- **Nguyên nhân**: scripts/terms/build.py (dòng 165–172) thêm nhãn tiếng Việt của mục Wikidata vào danh sách biến thể. Bài lich-su-nganh-am-nhac-hoc có wiki = "Musicology" (cùng mục Q164204 với bài am-nhac-hoc), nên thừa hưởng nhãn "Âm nhạc học".
- **Bằng chứng**: Định nghĩa x:am-nhac-hoc: "ngành nghiên cứu âm nhạc một cách có hệ thống"; định nghĩa x:lich-su-nganh-am-nhac-hoc: lịch sử viết sử âm nhạc từ thế kỷ 18 (Martini, Burney, Forkel), Adler 1885, Kerman 1985. Bộ phân giải liên kết của thư viện đưa "Âm nhạc học" tới a:am-nhac-hoc. Không bài nào viết [[Âm nhạc học]] (0 liên kết).
- **Phân loại**: **BROADER_NARROWER** — Âm nhạc học là ngành; sử học của ngành là một chủ đề trong ngành. Hai định nghĩa trong bảng thuật ngữ cho thấy rõ quan hệ rộng – hẹp; nhãn lấy từ Wikidata của khái niệm rộng.
- **Đề xuất**: Không gộp. Đề xuất: bỏ "Âm nhạc học" khỏi biến thể của x:lich-su-nganh-am-nhac-hoc, bằng cách đổi trường wiki của bài sang trang hẹp hơn hoặc bỏ trường wiki, rồi dựng lại terms.json. Đây là thay đổi dữ liệu nên cần người biên soạn quyết.
- **Phương án cho người biên soạn**: Đổi wiki của bài lich-su-nganh-am-nhac-hoc và dựng lại terms.json · Giữ nguyên, ghi chú nhãn là của khái niệm rộng · Khác
- **Trạng thái**: chờ người biên soạn quyết

### 2. `term-shared:hoa am`

| Term ID | Dạng chính | Bài thư viện | Mục | Dạng viết (quan hệ ở 1.0.0) |
|---|---|---|---|---|
| `x:chuoi-boi-am` | Chuỗi bồi âm | `a:chuoi-boi-am` — Chuỗi bồi âm | pitch | Chuỗi bồi âm [vi/preferred]; bồi âm [vi/glossary-variant]; âm bội [vi/glossary-variant]; họa âm [vi/glossary-variant]; harmonic series [en/foreign]; натуральный звукоряд [ru/foreign]; Naturtonreihe [de/foreign]; série harmonique [fr/foreign]; armonici naturali [it/foreign]; bồi âm [vi/article-alias]; âm bội [vi/article-alias]; harmonic series [vi/article-alias]; overtone [vi/article-alias]; họa âm [vi/article-alias] |
| `x:he-thong-hoa-am-co-dien` | Hoà âm cổ điển | `a:he-thong-hoa-am-co-dien` — Hoà âm cổ điển: hệ thống và lộ trình | harmony | Hoà âm cổ điển [vi/preferred]; hoà âm thời kỳ thông dụng [vi/glossary-variant]; hoà âm truyền thống [vi/glossary-variant]; lộ trình học hoà âm [vi/glossary-variant]; bản đồ hoà âm [vi/glossary-variant]; Hòa âm [vi/glossary-variant]; harmony [en/foreign]; гармония [ru/foreign]; Harmonik [de/foreign]; harmonie [fr/foreign]; armonia [it/foreign]; Hoà âm cổ điển: hệ thống và lộ trình [vi/article-alias]; hoà âm thời kỳ thông dụng [vi/article-alias]; common practice harmony [vi/article-alias]; hoà âm truyền thống [vi/article-alias]; lộ trình học hoà âm [vi/article-alias]; bản đồ hoà âm [vi/article-alias] |

- **Định nghĩa** `x:chuoi-boi-am`: Một nốt nhạc thực chất gồm âm gốc và nhiều âm phụ có tần số bằng bội số nguyên của âm gốc.
- **Định nghĩa** `x:he-thong-hoa-am-co-dien`: Bài tổng quan: lý thuyết hoà âm cổ điển hình thành thế nào (Rameau, Weber, Riemann), "bản đồ" các tiến trình hợp âm, và lộ trình học từng bước qua các bài trong thư viện.
- **Số lần dùng trong thư viện** `x:chuoi-boi-am`: {'Chuỗi bồi âm': 21, 'bồi âm': 101, 'âm bội': 0, 'họa âm': 0}
- **Số lần dùng trong thư viện** `x:he-thong-hoa-am-co-dien`: {'Hoà âm cổ điển': 28, 'hoà âm thời kỳ thông dụng': 1, 'hoà âm truyền thống': 2, 'lộ trình học hoà âm': 1, 'bản đồ hoà âm': 0, 'Hòa âm': 0}
- **Lĩnh vực**: `x:chuoi-boi-am` → d:am-hoc, d:ly-thuyet, d:topic.pitch, d:topic.listening; `x:he-thong-hoa-am-co-dien` → d:ly-thuyet, d:topic.harmony
- **Nguồn gốc**: định nghĩa do người biên soạn viết (`terms.json`, provenance `educational/partial`); nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục.

- **Nguyên nhân**: UMK so khớp dạng viết sau khi bỏ dấu (normalize), nên "họa âm" (thanh nặng) và "Hòa âm" (thanh huyền) thành cùng một khoá "hoa am".
- **Bằng chứng**: Hai dạng khác dấu thanh, là hai từ khác nhau trong tiếng Việt. Định nghĩa x:chuoi-boi-am: âm gốc và các âm phụ có tần số bội số nguyên (âm học). Định nghĩa x:he-thong-hoa-am-co-dien: hệ thống hoà âm cổ điển (Rameau, Weber, Riemann).
- **Phân loại**: **RELATED_BUT_DISTINCT** — Hai khái niệm khác nhau (âm học / hệ thống hợp âm); chỉ trùng khi bỏ dấu thanh. Xung đột "dùng chung dạng viết" là dương tính giả của bộ dò.
- **Đề xuất**: ĐÃ SỬA ở UMK: bộ dò dạng viết dùng chung nay so có dấu thanh (chỉ quy về một cách đặt dấu hoà/hòa). Dữ liệu không đổi. Phần còn lại, "Hòa âm" mở nhầm bài Chuỗi bồi âm, là trường hợp riêng ngay dưới.
- **Trạng thái**: đã sửa bộ dò (dữ liệu không đổi)

### 3. `term-points-elsewhere:x:he-thong-hoa-am-co-dien:hoa am`

| Term ID | Dạng chính | Bài thư viện | Mục | Dạng viết (quan hệ ở 1.0.0) |
|---|---|---|---|---|
| `x:he-thong-hoa-am-co-dien` | Hoà âm cổ điển | `a:he-thong-hoa-am-co-dien` — Hoà âm cổ điển: hệ thống và lộ trình | harmony | Hoà âm cổ điển [vi/preferred]; hoà âm thời kỳ thông dụng [vi/glossary-variant]; hoà âm truyền thống [vi/glossary-variant]; lộ trình học hoà âm [vi/glossary-variant]; bản đồ hoà âm [vi/glossary-variant]; Hòa âm [vi/glossary-variant]; harmony [en/foreign]; гармония [ru/foreign]; Harmonik [de/foreign]; harmonie [fr/foreign]; armonia [it/foreign]; Hoà âm cổ điển: hệ thống và lộ trình [vi/article-alias]; hoà âm thời kỳ thông dụng [vi/article-alias]; common practice harmony [vi/article-alias]; hoà âm truyền thống [vi/article-alias]; lộ trình học hoà âm [vi/article-alias]; bản đồ hoà âm [vi/article-alias] |

- **Định nghĩa** `x:he-thong-hoa-am-co-dien`: Bài tổng quan: lý thuyết hoà âm cổ điển hình thành thế nào (Rameau, Weber, Riemann), "bản đồ" các tiến trình hợp âm, và lộ trình học từng bước qua các bài trong thư viện.
- **Số lần dùng trong thư viện** `x:he-thong-hoa-am-co-dien`: {'Hoà âm cổ điển': 28, 'hoà âm thời kỳ thông dụng': 1, 'hoà âm truyền thống': 2, 'lộ trình học hoà âm': 1, 'bản đồ hoà âm': 0, 'Hòa âm': 0}
- **Lĩnh vực**: `x:he-thong-hoa-am-co-dien` → d:ly-thuyet, d:topic.harmony
- **Bài mà bộ phân giải mở**: `a:chuoi-boi-am` — Chuỗi bồi âm (bí danh: bồi âm, âm bội, harmonic series, overtone, họa âm)
- **Ngữ cảnh dùng**: gioachino-rossini: …opera buffa lên đỉnh, nối tiếp Mozart, Cimarosa và Paisiello: tiết tấu sôi nổi, hòa âm giản dị, hát hoa mỹ và "Rossini crescendo", tức một câu nhạc lặp lại, mỗi lần dày và to hơn. …
- **Ngữ cảnh dùng**: franz-liszt: …Schubert, Beethoven, opera) giúp phổ biến âm nhạc của người khác. Những đổi mới hòa âm cuối đời của ông được xem là đi trước Ấn tượng. Xem [[nghe-si-piano-the-ky-19]], [[lich-su-pi…
- **Nguồn gốc**: định nghĩa do người biên soạn viết (`terms.json`, provenance `educational/partial`); nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục.

- **Nguyên nhân**: Nhãn tiếng Việt Wikidata của mục Harmony (Q184421) được thêm làm biến thể của "Hoà âm cổ điển" (bài có wiki = Harmony). Bộ phân giải liên kết của thư viện bỏ dấu, nên "Hòa âm" khớp bí danh "họa âm" của bài Chuỗi bồi âm.
- **Bằng chứng**: findArticle("Hòa âm") → a:chuoi-boi-am. Không bài nào viết [[Hòa âm]] hay [[hoà âm]] (0 liên kết), nên hiện chưa người đọc nào bị dẫn sai. Nhưng tìm kiếm và liên kết viết sau có thể bị.
- **Phân loại**: **BROADER_NARROWER** — "Hoà âm" (nói chung) rộng hơn "Hoà âm cổ điển" (một hệ thống trong đó). Việc mở nhầm bài Chuỗi bồi âm là lỗi phân giải bỏ dấu thanh của thư viện, không phải quan hệ khái niệm.
- **Đề xuất**: Không gộp. Hai việc cho người biên soạn: (1) bỏ "Hòa âm" khỏi biến thể, hoặc chấp nhận là nhãn của khái niệm rộng; (2) bộ phân giải liên kết keyIndex.ts có nên phân biệt dấu thanh không — đổi toàn thư viện, cần chạy lại check:links.
- **Phương án cho người biên soạn**: Bỏ biến thể "Hòa âm" (đổi wiki hoặc dữ liệu) · Cho keyIndex phân biệt dấu thanh · Cả hai · Giữ nguyên
- **Trạng thái**: chờ người biên soạn quyết

### 4. `term-shared:dau hoa`

| Term ID | Dạng chính | Bài thư viện | Mục | Dạng viết (quan hệ ở 1.0.0) |
|---|---|---|---|---|
| `x:dau-hoa` | Dấu hoá | `a:dau-hoa` — Dấu hoá | basics | Dấu hoá [vi/preferred]; dấu thăng [vi/glossary-variant]; dấu giáng [vi/glossary-variant]; dấu bình [vi/glossary-variant]; thăng kép [vi/glossary-variant]; giáng kép [vi/glossary-variant]; dấu hoá bất thường [vi/glossary-variant]; accidental [en/foreign]; знак альтерации [ru/foreign]; Versetzungszeichen [de/foreign]; altération [fr/foreign]; alterazione [it/foreign]; dấu thăng [vi/article-alias]; dấu giáng [vi/article-alias]; dấu bình [vi/article-alias]; thăng kép [vi/article-alias]; giáng kép [vi/article-alias]; sharp [vi/article-alias]; flat [vi/article-alias]; natural [vi/article-alias]; accidental [vi/article-alias]; dấu hoá bất thường [vi/article-alias] |
| `x:hoa-bieu` | Hoá biểu | `a:hoa-bieu` — Hoá biểu | scales | Hoá biểu [vi/preferred]; bộ khoá [vi/glossary-variant]; Dấu hóa [vi/glossary-variant]; key signature [en/foreign]; ключевые знаки [ru/foreign]; Vorzeichen [de/foreign]; armure [fr/foreign]; armatura [it/foreign]; bộ khoá [vi/article-alias]; key signature [vi/article-alias] |

- **Định nghĩa** `x:dau-hoa`: Ký hiệu nâng hoặc hạ cao độ của nốt: thăng ♯, giáng ♭, bình ♮, thăng kép 𝄪, giáng kép 𝄫.
- **Định nghĩa** `x:hoa-bieu`: Nhóm dấu thăng hoặc giáng đặt ở đầu khuông, cho biết bản nhạc thuộc giọng nào.
- **Số lần dùng trong thư viện** `x:dau-hoa`: {'Dấu hoá': 81, 'dấu thăng': 51, 'dấu giáng': 50, 'dấu bình': 9, 'thăng kép': 13, 'giáng kép': 11, 'dấu hoá bất thường': 22}
- **Số lần dùng trong thư viện** `x:hoa-bieu`: {'Hoá biểu': 133, 'bộ khoá': 0, 'Dấu hóa': 0}
- **Lĩnh vực**: `x:dau-hoa` → d:ly-thuyet, d:topic.basics; `x:hoa-bieu` → d:ly-thuyet, d:topic.scales
- **Nguồn gốc**: định nghĩa do người biên soạn viết (`terms.json`, provenance `educational/partial`); nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục.

- **Nguyên nhân**: Nhãn tiếng Việt Wikidata của mục Key signature (Q845391) là "Dấu hóa"; build.py thêm nó làm biến thể của Hoá biểu. Cùng một từ (khác cách đặt dấu oá/óa).
- **Bằng chứng**: Định nghĩa x:dau-hoa: "Ký hiệu nâng hoặc hạ cao độ của nốt: thăng, giáng, bình…" (biến thể gồm "dấu hoá bất thường"). Định nghĩa x:hoa-bieu: "Nhóm dấu thăng hoặc giáng đặt ở đầu khuông". Bài dau-hoa phân biệt dấu hoá bất thường và hoá biểu. Từ "Dấu hóa" xuất hiện 0 lần trong thân bài (uses).
- **Phân loại**: **BROADER_NARROWER** — Theo chính định nghĩa của thư viện, hoá biểu là một nhóm dấu hoá đặt ở đầu khuông; "dấu hoá" là khái niệm rộng. Gọi hoá biểu là "Dấu hóa" là nhãn của Wikipedia tiếng Việt, không phải cách thư viện dùng.
- **Đề xuất**: Không gộp, không đổi dạng chính. Đề xuất mạnh: bỏ "Dấu hóa" khỏi biến thể của x:hoa-bieu (thêm ngoại lệ trong build.py hoặc sửa dữ liệu). Thay đổi dữ liệu nên chờ người biên soạn.
- **Phương án cho người biên soạn**: Bỏ "Dấu hóa" khỏi biến thể của Hoá biểu · Giữ, ghi là nhãn Wikidata · Khác
- **Trạng thái**: chờ người biên soạn quyết

### 5. `term-points-elsewhere:x:organ-ong:dai phong cam`

| Term ID | Dạng chính | Bài thư viện | Mục | Dạng viết (quan hệ ở 1.0.0) |
|---|---|---|---|---|
| `x:organ-ong` | Đàn organ ống | `a:organ-ong` — Đàn organ ống | organology | Đàn organ ống [vi/preferred]; đàn organ [vi/glossary-variant]; đàn ống [vi/glossary-variant]; organ nhà thờ [vi/glossary-variant]; organ nước [vi/glossary-variant]; Đại phong cầm [vi/glossary-variant]; pipe organ [en/foreign]; трубный орган [ru/foreign]; Orgel [de/foreign]; orgue [fr/foreign]; organo a canne [it/foreign]; organ [vi/article-alias]; đàn organ [vi/article-alias]; organ ống [vi/article-alias]; pipe organ [vi/article-alias]; orgue [vi/article-alias]; đàn ống [vi/article-alias]; organ nhà thờ [vi/article-alias]; hydraulis [vi/article-alias]; organ nước [vi/article-alias] |

- **Định nghĩa** `x:organ-ong`: Đàn organ ống tạo âm bằng các ống được bơm hơi, điều khiển bằng nhiều bàn phím tay và một bàn phím chân. Tổ tiên là organ nước (hydraulis) của Ctesibius ở Alexandria thế kỷ 3 TCN — nhạc cụ có bàn phím cổ nhất được biết. Organ ở Boardwalk Hall (Atlantic City) có 33.112 ống, lớn nhất thế giới theo số ống.
- **Số lần dùng trong thư viện** `x:organ-ong`: {'Đàn organ ống': 5, 'đàn organ': 14, 'đàn ống': 0, 'organ nhà thờ': 7, 'organ nước': 2, 'Đại phong cầm': 1}
- **Lĩnh vực**: `x:organ-ong` → d:nhac-khi-hoc, d:am-nhac-nha-tho, d:topic.organology
- **Bài mà bộ phân giải mở**: `a:binh-ca-va-organ-o-viet-nam` — Bình ca và organ ở Việt Nam: điều đã biết và khoảng trống (bí danh: bình ca ở Việt Nam, organ nhà thờ Lớn Hà Nội, đại phong cầm, organ Việt Nam, Uỷ ban Thánh nhạc, imprimatur thánh ca, thánh nhạc Việt Nam)
- **Ngữ cảnh dùng**: sacrosanctum-concilium-chuong-vi: … đối chiếu, nên có thể là ghi nhầm; khi dẫn nên dẫn thẳng SC 119. - **Số 120**: đại phong cầm (*pipe organ*) được trọng vọng trong Giáo hội Latinh; nhạc cụ khác được phép "với sự b…
- **Ngữ cảnh dùng**: musicam-sacram-1967: …ng chuẩn nhận (xem [[chuan-nhan-imprimatur-thanh-ca]]).  ## Nhạc cụ (số 62–66)  Đại phong cầm được trọng vọng; nhạc cụ khác được phép nếu thẩm quyền địa phương chuẩn, xét văn hoá t…
- **Nguồn gốc**: định nghĩa do người biên soạn viết (`terms.json`, provenance `educational/partial`); nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục.

- **Nguyên nhân**: Nhãn tiếng Việt Wikidata của Pipe organ (Q281460). Bài binh-ca-va-organ-o-viet-nam (chủ đề organ ở Việt Nam) có bí danh "đại phong cầm", nên liên kết đi tới bài chủ đề hẹp này.
- **Bằng chứng**: Thư viện tự chú nghĩa: "đại phong cầm (pipe organ)" ở sacrosanctum-concilium-chuong-vi, nhac-cu-trong-phung-vu-viet-nam; "đại phong cầm (organ ống)" ở binh-ca-va-organ-o-viet-nam (dẫn Lê Hải Đăng). Không bài nào viết [[đại phong cầm]].
- **Phân loại**: **SAME_CONCEPT** — Thư viện dùng "đại phong cầm" đúng nghĩa đàn organ ống. Vấn đề không nằm ở khái niệm mà ở chỗ bí danh đặt trên bài chủ đề hẹp hơn.
- **Đề xuất**: Không gộp Term ID. Người biên soạn quyết bí danh "đại phong cầm" nên mở bài Đàn organ ống hay giữ dẫn tới bài organ ở Việt Nam (có thể là chủ ý cho người đọc Công giáo Việt Nam).
- **Phương án cho người biên soạn**: Chuyển bí danh sang bài Đàn organ ống · Giữ ở bài Bình ca và organ ở Việt Nam · Khác
- **Trạng thái**: chờ người biên soạn quyết

### 6. `term-points-elsewhere:x:hinh-thuc-ca-khuc-pho-thong:diep khuc`

| Term ID | Dạng chính | Bài thư viện | Mục | Dạng viết (quan hệ ở 1.0.0) |
|---|---|---|---|---|
| `x:hinh-thuc-ca-khuc-pho-thong` | Hình thức ca khúc phổ thông | `a:hinh-thuc-ca-khuc-pho-thong` — Hình thức ca khúc phổ thông: verse – chorus, AABA, pre-chorus, bridge | form | Hình thức ca khúc phổ thông [vi/preferred]; điệp khúc [vi/glossary-variant]; tiền điệp khúc [vi/glossary-variant]; bridge (ca khúc) [vi/glossary-variant]; hình thức bài hát pop [vi/glossary-variant]; verse-chorus form [en/foreign]; Куплетная форма [ru/foreign]; Verse [de/foreign]; Hình thức ca khúc phổ thông: verse – chorus, AABA, pre-chorus, bridge [vi/article-alias]; verse-chorus [vi/article-alias]; verse chorus [vi/article-alias]; điệp khúc [vi/article-alias]; pre-chorus [vi/article-alias]; tiền điệp khúc [vi/article-alias]; bridge (ca khúc) [vi/article-alias]; SRDC [vi/article-alias]; srdc [vi/article-alias]; hình thức bài hát pop [vi/article-alias]; Covach [vi/article-alias]; hook [vi/article-alias] |

- **Định nghĩa** `x:hinh-thuc-ca-khuc-pho-thong`: Phần lớn ca khúc pop, rock, V-pop được xây từ vài khối: verse (kể chuyện), chorus (mang tựa bài và giai điệu dễ nhớ nhất), pre-chorus (đẩy lên chorus) và bridge (tương phản). Bài trình bày phân loại của John Covach (verse đơn, verse – chorus đơn và tương phản, AABA, AABA phức), nguồn gốc pre-chorus theo Jay Summach, cấu trúc câu SRDC của Walter Everett, và một cách phân tích một bài hát Việt.
- **Số lần dùng trong thư viện** `x:hinh-thuc-ca-khuc-pho-thong`: {'Hình thức ca khúc phổ thông': 0, 'điệp khúc': 124, 'tiền điệp khúc': 1, 'bridge (ca khúc)': 0, 'hình thức bài hát pop': 1}
- **Lĩnh vực**: `x:hinh-thuc-ca-khuc-pho-thong` → d:phe-phan-van-hoa, d:ly-thuyet, d:topic.form, d:topic.jazz, d:topic.genres
- **Bài mà bộ phân giải mở**: `a:sang-tac-ca-khuc` — Sáng tác ca khúc phổ thông: hook, cấu trúc, lời và quy trình (bí danh: viết ca khúc, sáng tác bài hát, songwriting, hook, topline, viết lời bài hát, sáng tác nhạc pop, điệp khúc)
- **Ngữ cảnh dùng**: dem-pop-ballad: … \| Tiếng rộng, ấm hơn — đặt thấp và mở \| \| Quãng 8 kéo dài \| C + C \| Đoạn mạnh, điệp khúc \| ::staff bass C3 G3 C4 G3 / A2 E3 A3 E3 / F2 C3 F3 C3 / G2 D3 G3 D3 \| Tay trái 1 – 5 – 8 …
- **Ngữ cảnh dùng**: dem-hat-hien-dai: … [[dich-giong]] các vòng quen ở mọi giọng \| \| **Dạo đầu** \| Lấy vòng hợp âm của điệp khúc hoặc 2 – 4 ô cuối bài; kết dạo đầu trên **hợp âm át (V)** để ca sĩ vào đúng giọng \| \| **Câ…
- **Nguồn gốc**: định nghĩa do người biên soạn viết (`terms.json`, provenance `educational/partial`); nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục.

- **Nguyên nhân**: Hai bài cùng ghi bí danh "điệp khúc": hinh-thuc-ca-khuc-pho-thong và sang-tac-ca-khuc. Quy tắc phân giải (keyIndex) chọn sang-tac-ca-khuc.
- **Bằng chứng**: Định nghĩa x:hinh-thuc-ca-khuc-pho-thong: ca khúc được xây từ verse, chorus (điệp khúc), pre-chorus, bridge — điệp khúc là MỘT phần. sang-tac-ca-khuc dạy "cách làm điệp khúc nổi bật". "điệp khúc" xuất hiện 124 lần trong thư viện; không bài nào viết [[điệp khúc]].
- **Phân loại**: **BROADER_NARROWER** — Điệp khúc là một đoạn trong hình thức verse – chorus, không phải tên khác của hình thức đó.
- **Đề xuất**: Không gộp. Người biên soạn chọn bài nào giữ bí danh "điệp khúc" (hoặc viết bài riêng); trong bảng thuật ngữ nên ghi là thành phần chứ không phải biến thể.
- **Phương án cho người biên soạn**: Bí danh chỉ ở bài Hình thức ca khúc phổ thông · Bí danh chỉ ở bài Sáng tác ca khúc · Viết bài riêng cho điệp khúc · Giữ nguyên
- **Trạng thái**: chờ người biên soạn quyết

### 7. `term-points-elsewhere:x:pipa:dan ty ba`

| Term ID | Dạng chính | Bài thư viện | Mục | Dạng viết (quan hệ ở 1.0.0) |
|---|---|---|---|---|
| `x:pipa` | Tỳ bà Trung Hoa (pipa) | `a:pipa` — Tỳ bà Trung Hoa (pipa) | organology | Tỳ bà Trung Hoa (pipa) [vi/preferred]; tỳ bà Trung Quốc [vi/glossary-variant]; Thập diện mai phục [vi/glossary-variant]; Ngô Man [vi/glossary-variant]; Đàn tỳ bà [vi/glossary-variant]; pipa [en/foreign]; пипа [ru/foreign]; Pipa [de/foreign]; pipa [fr/foreign]; pipa [it/foreign]; pipa [vi/article-alias]; tỳ bà Trung Quốc [vi/article-alias]; Thập diện mai phục [vi/article-alias]; Wu Man [vi/article-alias]; Ngô Man [vi/article-alias] |

- **Định nghĩa** `x:pipa`: Pipa là đàn gảy thân hình quả lê, bốn dây, 29 hoặc 31 phím trên cần và mặt đàn; tên gọi lấy từ hai động tác gảy ra và gảy vào. Loại cổ cong từ Trung Á vào Trung Hoa thời Nam Bắc triều; bản "Thập diện mai phục" là tác phẩm võ khúc nổi tiếng.
- **Số lần dùng trong thư viện** `x:pipa`: {'Tỳ bà Trung Hoa (pipa)': 0, 'tỳ bà Trung Quốc': 0, 'Thập diện mai phục': 1, 'Ngô Man': 1, 'Đàn tỳ bà': 7}
- **Lĩnh vực**: `x:pipa` → d:nhac-khi-hoc, d:topic.organology
- **Bài mà bộ phân giải mở**: `a:dan-ty-ba-tam-sen` — Đàn tỳ bà, đàn tam và đàn sến (bí danh: đàn tỳ bà, tỳ bà, đàn tam, đàn sến, pear-shaped lute Vietnam)
- **Ngữ cảnh dùng**: nhac-khi-the-gioi: …yet\|Đàn nguyệt]], [[dan-nhi\|Đàn nhị]], [[dan-day\|Đàn đáy]], [[dan-ty-ba-tam-sen\|Đàn tỳ bà, đàn tam và đàn sến]], [[dan-tinh\|Đàn tính]] \| [[guqin\|Cổ cầm]], [[guzheng\|Đàn tranh Trung…
- **Ngữ cảnh dùng**: nhac-cu-viet-nam: …Đờn ca tài tử]]** \| Theo hồ sơ UNESCO: đàn nguyệt, đàn nhị (đàn cò), đàn tranh, đàn tỳ bà, nhạc cụ gõ, đàn bầu, sáo trúc. "Ngũ tuyệt" xưa gồm tranh, tỳ bà, kìm (nguyệt), cò, tam; đ…
- **Nguồn gốc**: định nghĩa do người biên soạn viết (`terms.json`, provenance `educational/partial`); nhãn đa ngữ lấy từ Wikidata, chưa đối chiếu từng mục.

- **Nguyên nhân**: Nhãn tiếng Việt Wikidata của Pipa (Q6685124) được thêm làm biến thể của "Tỳ bà Trung Hoa (pipa)". Bộ phân giải đưa "Đàn tỳ bà" tới bài nhạc cụ Việt dan-ty-ba-tam-sen.
- **Bằng chứng**: Thư viện tự phân biệt: bài pipa ghi "Họ hàng: [[dan-ty-ba-tam-sen|đàn tỳ bà Việt Nam]], biwa Nhật Bản"; dan-nguyet ghi "[[pipa]] (đàn tỳ bà Trung Hoa)"; nhac-cu-viet-nam liệt kê đàn tỳ bà trong nhạc cụ đờn ca tài tử theo hồ sơ UNESCO.
- **Phân loại**: **RELATED_BUT_DISTINCT** — Hai nhạc cụ họ hàng thuộc hai truyền thống, được thư viện tách thành hai bài và tự chú "Việt Nam" / "Trung Hoa". Cách phân giải hiện tại (đưa "đàn tỳ bà" tới đàn Việt) khớp cách thư viện dùng trong ngữ cảnh Việt.
- **Đề xuất**: Không gộp. Đề xuất: bỏ "Đàn tỳ bà" (không định ngữ) khỏi biến thể của x:pipa, giữ "tỳ bà Trung Quốc". Thay đổi dữ liệu nên chờ người biên soạn.
- **Phương án cho người biên soạn**: Bỏ "Đàn tỳ bà" khỏi biến thể của Pipa · Giữ, ghi là nhãn Wikidata · Khác
- **Trạng thái**: chờ người biên soạn quyết

## Cần người biên soạn xác nhận

- `term-shared:am nhac hoc` — Không gộp.
- `term-points-elsewhere:x:he-thong-hoa-am-co-dien:hoa am` — Không gộp.
- `term-shared:dau hoa` — Không gộp, không đổi dạng chính.
- `term-points-elsewhere:x:organ-ong:dai phong cam` — Không gộp Term ID.
- `term-points-elsewhere:x:hinh-thuc-ca-khuc-pho-thong:diep khuc` — Không gộp.
- `term-points-elsewhere:x:pipa:dan ty ba` — Không gộp.

Quyết định ghi ở `/umk?tab=gaps` (lưu trên thiết bị). Sửa dữ liệu (`terms.json` qua `build.py`, bí danh bài) làm sau quyết định, trong một commit có ghi lý do.
