import type { Article } from '../wiki'

/**
 * Lịch sử Việt Nam qua các cuộc chiến: nền sự kiện cho Hành trình Việt Nam và cho các bài âm nhạc Việt Nam.
 * Mốc lấy từ các trang Wikipedia tiếng Anh ghi trong `refs` (đọc 16/11/2026); số liệu ghi kèm chỗ các nguồn vênh nhau.
 */
export const lichSuVn: Article[] = [
  {
    slug: 'lich-su-viet-nam-qua-cac-cuoc-chien',
    title: 'Lịch sử Việt Nam qua các cuộc chiến: dòng thời gian',
    category: 'vietnam',
    aliases: ['lịch sử Việt Nam', 'các cuộc chiến tranh Việt Nam', 'history of Vietnam', 'Vietnamese wars'],
    summary: 'Trang nối năm bài về lịch sử Việt Nam, từ trận Bạch Đằng năm 938 đến Đổi mới 1986, và cho biết âm nhạc của mỗi thời kỳ nằm ở bài nào. Mọi mốc có nguồn; con số thương vong ghi kèm khoảng ước tính.',
    wiki: 'History_of_Vietnam',
    refs: [['Wikipedia — History of Vietnam', 'https://en.wikipedia.org/wiki/History_of_Vietnam']],
    body: `
Âm nhạc Việt Nam lớn lên giữa những cuộc chiến: tiếng trống trận Tây Sơn, những bài hát ở chiến khu, những ca khúc phản chiến ở Sài Gòn. Năm bài dưới đây cho biết **chuyện gì đã xảy ra và khi nào**, để đọc các bài âm nhạc có chỗ đứng.

| Thời kỳ | Bài lịch sử | Âm nhạc |
|---|---|---|
| 938 – 1802: giành và giữ độc lập | [[viet-nam-giu-nuoc-938-1802]] | [[am-nhac-co-trung-dai-viet-nam]] |
| 1802 – 1945: triều Nguyễn và Pháp thuộc | [[viet-nam-1802-1945]] | [[am-nhac-thoi-nguyen]], [[am-nhac-thoi-phap-thuoc]] |
| 1945 – 1954: Cách mạng tháng Tám và kháng chiến chống Pháp | [[chien-tranh-dong-duong-1945-1954]] | [[tan-nhac-1945-1954]], [[the-loai-ca-khuc-1945-1954]] |
| 1954 – 1975: hai miền và Chiến tranh Việt Nam | [[chien-tranh-viet-nam-1954-1975]] | [[am-nhac-viet-nam-1945-1975]], [[tan-nhac-mien-bac-1954-1975]], [[tan-nhac-mien-nam-1954-1975]] |
| Sau 1975 | [[viet-nam-sau-1975]] | [[am-nhac-viet-nam-sau-1975]], [[nhac-hai-ngoai]] |

## Cách dùng tên gọi
Cùng một cuộc chiến có nhiều tên. Ở Việt Nam, cuộc chiến 1946 – 1954 thường gọi là **kháng chiến chống Pháp**, sách phương Tây gọi là **Chiến tranh Đông Dương lần thứ nhất**; cuộc chiến 1955 – 1975 ở Việt Nam thường gọi là **kháng chiến chống Mỹ cứu nước**, sách phương Tây gọi là **Chiến tranh Việt Nam**. Các bài ở đây dùng cả hai, và nói rõ một con số là của bên nào khi các bên đưa ra con số khác nhau.

Bối cảnh chung của mục: [[cac-thoi-ky-am-nhac-viet-nam]]. Cách phân biệt sự kiện, lời kể và truyền thuyết: [[phuong-phap-su-hoc-am-nhac]], [[giai-thoai-am-nhac-viet-nam]].
`,
  },
  {
    slug: 'viet-nam-giu-nuoc-938-1802',
    title: 'Giành và giữ độc lập, 938 – 1802: Bạch Đằng, Lam Sơn, Tây Sơn',
    category: 'vietnam',
    aliases: ['trận Bạch Đằng', 'Bạch Đằng 938', 'Bạch Đằng 1288', 'Ngô Quyền', 'Trần Hưng Đạo', 'khởi nghĩa Lam Sơn', 'Lê Lợi', 'Bình Ngô đại cáo', 'Quang Trung', 'Ngọc Hồi – Đống Đa', 'nhà Tây Sơn'],
    summary: 'Hai trận Bạch Đằng (938, 1288) với bãi cọc ngầm theo con nước; khởi nghĩa Lam Sơn (1418 – 1427) và Bình Ngô đại cáo của Nguyễn Trãi; nhà Tây Sơn và trận Ngọc Hồi – Đống Đa dịp Tết 1789. Mốc theo Wikipedia tiếng Anh, có ghi chỗ các nguồn vênh nhau.',
    refs: [
      ['Wikipedia — Battle of Bạch Đằng (938)', 'https://en.wikipedia.org/wiki/Battle_of_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng_(938)'],
      ['Wikipedia — Battle of Bạch Đằng (1288)', 'https://en.wikipedia.org/wiki/Battle_of_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng_(1288)'],
      ['Wikipedia — Lam Sơn uprising', 'https://en.wikipedia.org/wiki/Lam_S%C6%A1n_uprising'],
      ['Wikipedia — Tây Sơn dynasty', 'https://en.wikipedia.org/wiki/T%C3%A2y_S%C6%A1n_dynasty'],
      ['Wikipedia — Battle of Ngọc Hồi-Đống Đa', 'https://en.wikipedia.org/wiki/Battle_of_Ng%E1%BB%8Dc_H%E1%BB%93i-%C4%90%E1%BB%91ng_%C4%90a'],
    ],
    body: `
## Bạch Đằng, năm 938
Cuối năm 938 (hộp thông tin ghi tháng 12), quân Tĩnh Hải của **Ngô Quyền** đánh hạm đội Nam Hán do Lưu Hoằng Tháo chỉ huy trên sông Bạch Đằng.
- **Bãi cọc**: cọc lớn bịt sắt cắm dưới lòng sông, nước triều lên che khuất. Thuyền Việt nhử quân Nam Hán vào sâu; khi nước rút, thuyền giặc mắc cọc và bị phản công.
- **Kết quả**: Lưu Hoằng Tháo tử trận; trang nguồn ghi khoảng một nửa quân Nam Hán thiệt mạng.
- **Hệ quả**: mùa xuân 939 Ngô Quyền xưng vương, đóng đô ở Cổ Loa. Trang nguồn gọi đây là độc lập **trên thực tế**.

## Bạch Đằng, năm 1288
Ngày **9/4/1288**, quân Đại Việt do **Trần Quốc Tuấn (Trần Hưng Đạo)** làm tổng chỉ huy đánh hạm đội Nguyên do Ô Mã Nhi và Phàn Tiếp chỉ huy, cũng bằng bãi cọc đầu bịt sắt và con nước rút. Ô Mã Nhi bị bắt, Phàn Tiếp tử trận. Số thuyền Nguyên bị bắt hay đánh chìm được ghi khác nhau ngay trong trang nguồn: **400** (phần thân bài) hay **500** (hộp thông tin). Trang nguồn cho rằng trận này chấm dứt ý định chinh phục Đại Việt và Chăm Pa của Hốt Tất Liệt — đoạn đó còn bị gắn thẻ "cần dẫn nguồn".

## Khởi nghĩa Lam Sơn, 1418 – 1427
- Đầu năm **1418**, **Lê Lợi** dựng cờ ở Lam Sơn (Thanh Hoá), chống sự cai trị của nhà Minh kéo dài hai thập niên.
- **Nguyễn Trãi** theo nghĩa quân, viết thư cho các tướng Minh; sau thắng lợi, Lê Lợi giao ông viết **Bình Ngô đại cáo** tuyên bố khôi phục nền tự chủ.
- Cuối năm **1427**, quân Minh rút về sau hội thề Đông Quan; ngày **29/4/1428** Lê Lợi lên ngôi.
- *Trang nguồn ghi các tư liệu mâu thuẫn nhau về hoạt động của Lê Lợi những năm 1416 – 1418.*

Âm nhạc thời Lê sơ — cuộc tranh luận Nguyễn Trãi – Lương Đăng khi định nhạc triều đình: [[am-nhac-co-trung-dai-viet-nam]].

## Tây Sơn và Tết Kỷ Dậu 1789
- Phong trào Tây Sơn nổi lên năm **1771**, do ba anh em **Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ** quê ở Tây Sơn (Bình Định); tên triều đại lấy theo đất ấy.
- Cuối năm 1788 Nguyễn Huệ xưng đế, hiệu **Quang Trung**, kéo quân ra Bắc đánh quân Thanh.
- Dịp **Tết 1789** (cuối tháng 1 năm 1789 theo dương lịch), quân Tây Sơn đánh Ngọc Hồi – Đống Đa; quân Thanh do Tôn Sĩ Nghị chỉ huy rút về, nhà Thanh sau đó công nhận Tây Sơn. *Động cơ nhà Thanh can thiệp và quân số hai bên đều còn tranh cãi.*
- Nhà Tây Sơn chấm dứt năm **1802**.

Trống trận Tây Sơn (12 trống ở Bình Định) và chuyện "nổi trống sau mỗi trận thắng" là truyền khẩu: [[am-nhac-co-trung-dai-viet-nam]], [[giai-thoai-am-nhac-viet-nam]].

Tiếp theo: [[viet-nam-1802-1945]]. Toàn cảnh: [[lich-su-viet-nam-qua-cac-cuoc-chien]].
`,
  },
  {
    slug: 'viet-nam-1802-1945',
    title: 'Triều Nguyễn và Pháp thuộc, 1802 – 1945',
    category: 'vietnam',
    aliases: ['nhà Nguyễn', 'Pháp xâm lược', 'kinh thành Huế thất thủ', 'Cần Vương', 'Hàm Nghi', 'Tôn Thất Thuyết', 'Phan Đình Phùng'],
    summary: 'Gia Long lên ngôi năm 1802; Pháp đánh Đà Nẵng năm 1858; các hoà ước Huế 1883 – 1884 đặt nền bảo hộ; tháng 7/1885 cuộc tấn công quân Pháp ở Huế thất bại, vua Hàm Nghi rời kinh thành và phong trào Cần Vương nổi lên; triều Nguyễn chấm dứt khi Bảo Đại thoái vị năm 1945.',
    refs: [
      ['Wikipedia — Nguyễn dynasty', 'https://en.wikipedia.org/wiki/Nguy%E1%BB%85n_dynasty'],
      ['Wikipedia — Cần Vương', 'https://en.wikipedia.org/wiki/C%E1%BA%A7n_V%C6%B0%C6%A1ng'],
    ],
    body: `
## Một triều đại mới ở Phú Xuân
Ngày **1/6/1802** Gia Long lên ngôi; tháng 7 năm ấy Tây Sơn bị đánh bại. Kinh đô đặt ở Phú Xuân, nay thuộc **Huế**. Nhã nhạc cung đình được thể chế hoá dưới triều Nguyễn — xem [[am-nhac-thoi-nguyen]], [[ca-hue-nha-nhac]].

## Tiếng súng ở Đà Nẵng
- Ngày **1/9/1858**, quân Pháp đánh Đà Nẵng — mở đầu cuộc xâm lược.
- Hoà ước Huế ngày **25/8/1883** (trang nguồn gọi là mốc "mất độc lập") và hoà ước **6/6/1884** chia phần còn lại của đất nước thành hai xứ bảo hộ An Nam và Bắc Kỳ.

## Đêm kinh thành thất thủ và Cần Vương
- Ngày **3/7/1885**, tướng Pháp De Courcy tới Huế. **Ngay đêm ấy**, hai phụ chính **Tôn Thất Thuyết** và **Nguyễn Văn Tường** tổ chức tấn công quân Pháp. Cuộc tấn công thất bại (Wikipedia tiếng Anh gọi là "trận phục kích Huế"). *Sách Việt quen gọi đây là đêm **kinh thành thất thủ**; ngày chính xác theo dương lịch chưa đối chiếu được.*
- Tôn Thất Thuyết đưa vua **Hàm Nghi** — lên ngôi năm 1884 khi mới mười hai tuổi — chạy ra Tân Sở và thuyết phục vua ra **chiếu Cần Vương** (đề "ngày 2 tháng 6 năm Hàm Nghi thứ nhất" theo âm lịch), kêu gọi giúp vua chống Pháp.
- Phong trào yếu dần từ khoảng 1889; trang nguồn ghi mốc kết thúc **1896**, năm **Phan Đình Phùng**, người giữ vùng Hà Tĩnh, qua đời. *Theo trang nguồn, trong những tháng đầu, lực lượng của phong trào đã giết khoảng 40.000 giáo dân Công giáo — con số được ghi là còn tranh cãi.*

## Đến năm 1945
Dưới thời Pháp thuộc ra đời kèn Tây, đĩa hát, nhà hát và [[tien-de-tan-nhac|tân nhạc]] — xem [[am-nhac-thoi-phap-thuoc]], [[nhac-cai-cach-1938]]. Ngày **25/8/1945** chế độ quân chủ được tuyên bố bãi bỏ; ngày **30/8/1945** Bảo Đại trao ấn kiếm ở Huế — xem [[chien-tranh-dong-duong-1945-1954]].

Trước đó: [[viet-nam-giu-nuoc-938-1802]]. Toàn cảnh: [[lich-su-viet-nam-qua-cac-cuoc-chien]].
`,
  },
  {
    slug: 'chien-tranh-dong-duong-1945-1954',
    title: 'Cách mạng tháng Tám và kháng chiến chống Pháp, 1945 – 1954',
    category: 'vietnam',
    aliases: ['Cách mạng tháng Tám', 'Tuyên ngôn độc lập 2/9/1945', 'kháng chiến chống Pháp', 'Chiến tranh Đông Dương lần thứ nhất', 'First Indochina War', 'Điện Biên Phủ', 'Hiệp định Genève 1954', 'Trung đoàn Thủ đô', 'Việt Bắc'],
    summary: 'Tháng 8/1945 Việt Minh giành chính quyền; 2/9/1945 Hồ Chí Minh tuyên bố thành lập nước Việt Nam Dân chủ Cộng hoà. Kháng chiến chống Pháp nổ ra ở Hà Nội đêm 19/12/1946, lên chiến khu Việt Bắc, kết thúc sau Điện Biên Phủ (13/3 – 7/5/1954) và Hiệp định Genève (21/7/1954) chia đôi đất nước ở vĩ tuyến 17.',
    refs: [
      ['Wikipedia — August Revolution', 'https://en.wikipedia.org/wiki/August_Revolution'],
      ['Wikipedia — First Indochina War', 'https://en.wikipedia.org/wiki/First_Indochina_War'],
      ['Wikipedia — Battle of Hanoi (1946)', 'https://en.wikipedia.org/wiki/Battle_of_Hanoi_(1946)'],
      ['Wikipedia — Battle of Dien Bien Phu', 'https://en.wikipedia.org/wiki/Battle_of_Dien_Bien_Phu'],
      ['Wikipedia — 1954 Geneva Conference', 'https://en.wikipedia.org/wiki/1954_Geneva_Conference'],
    ],
    body: `
## Tháng Tám năm 1945
- Cách mạng tháng Tám kéo dài từ **16 đến 30/8/1945**, do **Việt Minh** lãnh đạo. Ngày **19/8** Việt Minh chiếm Phủ Khâm sai ở Hà Nội; Huế thành công ngày **23/8**; ở Sài Gòn, Uỷ ban Hành chính Nam Bộ lập ngày **24/8**.
- Ngày **25/8** chế độ quân chủ được tuyên bố bãi bỏ; ngày **30/8** Bảo Đại trao ấn kiếm ở Huế. *Trang nguồn ghi không rõ ai đã thuyết phục ông thoái vị.*
- Ngày **2/9/1945**, ở Hà Nội, **Hồ Chí Minh** đọc Tuyên ngôn độc lập, thành lập nước Việt Nam Dân chủ Cộng hoà.

Bài hát gắn với những ngày này — *Tiến quân ca* của [[van-cao|Văn Cao]], các ca khúc của [[luu-huu-phuoc|Lưu Hữu Phước]] — xem [[tan-nhac-1945-1954]].

## Hà Nội, mùa đông 1946
Đêm **19/12/1946**, lúc 20 giờ 03, tiếng nổ ở Hà Nội mở đầu chiến sự. **Trung đoàn Thủ đô** do Vương Thừa Vũ chỉ huy giữ thành phố gần hai tháng; ngày **18/2/1947** trung đoàn — chỉ còn khoảng 1.000 người — rút qua sông Hồng dưới gầm cầu Paul Doumer. Pháp chiếm Hà Nội; Việt Minh lên **Việt Bắc**.

## Chiến tranh 1946 – 1954
- Một bên là Việt Nam Dân chủ Cộng hoà (Việt Minh); bên kia là Liên hiệp Pháp, gồm cả Quốc gia Việt Nam do Bảo Đại đứng đầu.
- Ở chiến khu, âm nhạc thành một phần của kháng chiến: các đội văn công, ca khúc "kháng chiến", và ở đô thị là dòng ca khúc lãng mạn — xem [[tan-nhac-1945-1954]], [[the-loai-ca-khuc-1945-1954]], [[pham-duy]], [[nguyen-van-thuong]], [[do-nhuan]].
- **Thương vong** theo hộp thông tin của trang nguồn: tổng số người chết khoảng **400.000 đến 842.707**, trong đó dân thường **125.000 đến 400.000**. Phía Việt Minh có hai con số: ước tính của sử gia phương Tây (175.000 – 300.000 chết và mất tích) và con số của nhà nước Việt Nam (191.605).

## Điện Biên Phủ và Genève
- Trận **Điện Biên Phủ** kéo dài từ **13/3 đến 7/5/1954**. Đại tướng **Võ Nguyên Giáp** chỉ huy quân Việt Minh; đại tá **Christian de Castries** chỉ huy tập đoàn cứ điểm Pháp và đầu hàng. Trang nguồn gọi đây là trận quyết định, "một thất bại nặng nề của Pháp". Hơn 11.000 lính Pháp bị bắt. *Thương vong phía Việt Minh được ghi theo ba nguồn khác nhau: sử gia phương Tây khoảng 8.000 chết, 15.000 bị thương; sử gia châu Á 23.000 – 25.000 thương vong; số liệu Việt Nam 13.930 thương vong.*
- **Hội nghị Genève** họp từ 26/4 đến **21/7/1954**. Việt Nam bị chia ở **vĩ tuyến 17**, lời tuyên bố cuối cùng nói đây chỉ là ranh giới tạm thời; tổng tuyển cử dự định tháng 7/1956. Năm 1955 thủ tướng miền Nam Ngô Đình Diệm tuyên bố miền Nam không tham gia. Uỷ ban Quốc tế ghi nhận ít nhất **892.876** người miền Bắc đi qua các trạm tiếp nhận để vào Nam.

Trước đó: [[viet-nam-1802-1945]]. Tiếp theo: [[chien-tranh-viet-nam-1954-1975]].
`,
  },
  {
    slug: 'chien-tranh-viet-nam-1954-1975',
    title: 'Hai miền và Chiến tranh Việt Nam, 1954 – 1975',
    category: 'vietnam',
    aliases: ['Chiến tranh Việt Nam', 'kháng chiến chống Mỹ', 'Vietnam War', 'sự kiện Vịnh Bắc Bộ', 'Tết Mậu Thân 1968', 'trận Ia Drang', 'Linebacker II', 'Hà Nội 12 ngày đêm', 'Hiệp định Paris 1973', 'ngày 30/4/1975'],
    summary: 'Từ khoảng 1955 đến 30/4/1975: sự kiện Vịnh Bắc Bộ (8/1964), Ia Drang (11/1965), Tết Mậu Thân (từ 30/1/1968), ném bom Hà Nội – Hải Phòng (18 – 29/12/1972), Hiệp định Paris (27/1/1973) và ngày Sài Gòn thất thủ. Thương vong người Việt ước khoảng 970.000 đến 3 triệu.',
    refs: [
      ['Wikipedia — Vietnam War', 'https://en.wikipedia.org/wiki/Vietnam_War'],
      ['Wikipedia — Gulf of Tonkin incident', 'https://en.wikipedia.org/wiki/Gulf_of_Tonkin_incident'],
      ['Wikipedia — Battle of Ia Drang', 'https://en.wikipedia.org/wiki/Battle_of_Ia_Drang'],
      ['Wikipedia — Tet Offensive', 'https://en.wikipedia.org/wiki/Tet_Offensive'],
      ['Wikipedia — Operation Linebacker II', 'https://en.wikipedia.org/wiki/Operation_Linebacker_II'],
      ['Wikipedia — Paris Peace Accords', 'https://en.wikipedia.org/wiki/Paris_Peace_Accords'],
      ['Wikipedia — Fall of Saigon', 'https://en.wikipedia.org/wiki/Fall_of_Saigon'],
    ],
    body: `
## Hai nhà nước
Sau Genève, miền Bắc là Việt Nam Dân chủ Cộng hoà, miền Nam là Việt Nam Cộng hoà. Trang nguồn ghi chiến tranh bắt đầu **khoảng năm 1955** và kết thúc ngày **30/4/1975**. Hai miền có hai đời sống âm nhạc khác hẳn nhau — xem [[am-nhac-viet-nam-1945-1975]], [[tan-nhac-mien-bac-1954-1975]], [[tan-nhac-mien-nam-1954-1975]].

## Các mốc
| Mốc | Điều đã xảy ra | Ghi chú của nguồn |
|---|---|---|
| **2/8/1964** | Đụng độ trên Vịnh Bắc Bộ giữa tàu Mỹ và tàu phóng lôi miền Bắc | Báo cáo về trận thứ hai, đêm **4/8**, sau này được xác nhận là **không xảy ra** (nghiên cứu giải mật của NSA năm 2005; McNamara thừa nhận năm 2003) |
| **7/8/1964** | Quốc hội Mỹ thông qua Nghị quyết Vịnh Bắc Bộ | Mở đường cho việc đưa quân |
| **14 – 18/11/1965** | Trận **Ia Drang** ở Tây Nguyên | Trận lớn đầu tiên giữa lục quân Mỹ và Quân đội Nhân dân Việt Nam; số thương vong của đối phương do mỗi bên đưa ra đều có lẽ bị thổi phồng |
| **30 – 31/1/1968** | Tổng tiến công **Tết Mậu Thân** | Trận Huế kéo dài khoảng 25 ngày, thành phố bị tàn phá; hộp thông tin ghi kết quả quân sự nghiêng về Mỹ – Việt Nam Cộng hoà |
| **18 – 29/12/1972** | Chiến dịch ném bom **Linebacker II** vào Hà Nội, Hải Phòng | Ném bom dừng ngày 30/12, hai bên trở lại đàm phán. "Cả hai bên đều tuyên bố thắng"; việc Mỹ nói bệnh viện Bạch Mai có trận địa phòng không bị tranh cãi; số B-52 bị bắn rơi: Mỹ nhận 15 – 16 chiếc, miền Bắc nêu 34; số dân thường chết 1.624 theo số liệu chính thức, 2.368 theo một sách của Quân đội Nhân dân |
| **27/1/1973** | Ký **Hiệp định Paris** | Mỹ và đồng minh rút quân trong 60 ngày; quân miền Bắc được ở lại miền Nam |
| **30/4/1975** | Sài Gòn thất thủ | Xe tăng vào Dinh Độc Lập; trước đó, chiến dịch Frequent Wind — cuộc di tản bằng trực thăng lớn nhất lịch sử — đưa người ra tàu ngoài biển |

## Thương vong
Trang nguồn ghi ước tính số người Việt Nam (quân nhân và dân thường) thiệt mạng **từ khoảng 970.000 đến 3 triệu**; thêm 275.000 – 310.000 người Campuchia và 20.000 – 62.000 người Lào. Khoảng cách lớn giữa các con số là vì các bên và các nhà nghiên cứu tính khác nhau.

## Âm nhạc trong chiến tranh
Ở miền Bắc: ca khúc cách mạng, đoàn văn công, nhạc giao hưởng và opera *Cô Sao* (1965) — xem [[nhac-cach-mang]], [[nhac-co-dien-viet-nam]], [[hoang-viet]]. Ở miền Nam: thị trường đĩa nhạc, [[nhac-vang-bolero|nhạc vàng]], [[nhac-trinh|ca khúc phản chiến]] của Trịnh Công Sơn, phong trào du ca, [[nhac-tre-rock-sai-gon|nhạc trẻ]] — xem [[tan-nhac-mien-nam-1954-1975]].

Trước đó: [[chien-tranh-dong-duong-1945-1954]]. Tiếp theo: [[viet-nam-sau-1975]].
`,
  },
  {
    slug: 'viet-nam-sau-1975',
    title: 'Việt Nam sau 1975: thống nhất, thuyền nhân, biên giới, Đổi mới',
    category: 'vietnam',
    aliases: ['thống nhất 1976', 'thuyền nhân', 'boat people', 'chiến tranh biên giới 1979', 'Đổi mới', 'Đổi Mới 1986'],
    summary: 'Quốc hội biểu quyết thống nhất ngày 2/7/1976; làn sóng thuyền nhân từ 1978 (gần 800.000 người tới được nước khác, ước tính 200.000 – 250.000 người chết trên biển theo UNHCR, con số còn tranh cãi); chiến tranh biên giới phía Bắc 17/2 – 16/3/1979; Đổi mới từ Đại hội VI tháng 12/1986.',
    refs: [
      ['Wikipedia — Reunification Day', 'https://en.wikipedia.org/wiki/Reunification_Day'],
      ['Wikipedia — Vietnamese boat people', 'https://en.wikipedia.org/wiki/Vietnamese_boat_people'],
      ['Wikipedia — Sino-Vietnamese War', 'https://en.wikipedia.org/wiki/Sino-Vietnamese_War'],
      ['Wikipedia — Đổi Mới', 'https://en.wikipedia.org/wiki/%C4%90%E1%BB%95i_M%E1%BB%9Bi'],
    ],
    body: `
## Thống nhất
Ngày **30/4/1975** chiến tranh kết thúc; ngày **2/7/1976** Quốc hội biểu quyết thống nhất, lập nước Cộng hoà Xã hội Chủ nghĩa Việt Nam.

## Những người ra đi
Làn sóng **thuyền nhân** bắt đầu từ **tháng 9/1978**, cao điểm cuối thập niên 1970 – đầu 1980 (riêng tháng 6/1979 có 54.000 người tới nơi) và kéo dài tới thập niên 1990. Gần **800.000** người đến được nước khác trong khoảng 1975 – 1995. Số người chết trên biển "khó xác định": UNHCR ước **200.000 – 250.000**, một ước tính năm 1981 nêu khoảng **30.000**. Âm nhạc của cộng đồng người Việt ở nước ngoài: [[nhac-hai-ngoai]].

## Biên giới phía Bắc, 1979
Từ **17/2 đến 16/3/1979** Trung Quốc tấn công các tỉnh biên giới phía Bắc. Trang nguồn ghi kết quả là "trở về hiện trạng trước chiến tranh", cả hai bên đều tuyên bố thắng; số thương vong mỗi bên đưa ra khác nhau rất xa, và Việt Nam chưa từng công bố chính thức tổn thất quân sự.

## Đổi mới
Đại hội VI của Đảng Cộng sản Việt Nam họp từ **15 đến 18/12/1986** và khởi xướng **Đổi mới**; Nguyễn Văn Linh được bầu làm Tổng Bí thư. Với âm nhạc, những năm sau đó là các chính sách cấm rồi nới, nhạc hải ngoại, rồi thị trường V-pop — xem [[am-nhac-viet-nam-sau-1975]], [[vpop-rap-viet]].

Trước đó: [[chien-tranh-viet-nam-1954-1975]]. Toàn cảnh: [[lich-su-viet-nam-qua-cac-cuoc-chien]].
`,
  },
]
