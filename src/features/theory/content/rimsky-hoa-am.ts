import type { Article } from '../wiki'

/**
 * Rimsky-Korsakov, Практический учебник гармонии (1884 – 1886; bản in lần 20, Lan' – Planeta muzyki 2014; scan Lamar
 * gửi, OCR). Văn bản của tác giả thuộc phạm vi công cộng; các lời tựa sau (Vītols – Steinberg 1912, 1924, 1936) cũng
 * đã quá hạn bảo hộ. Trang in = trang PDF tập 1 − 1; = trang PDF tập 2 + 88.
 */
export const RK_REF: [string, string] = ['Римский-Корсаков Н. А., Практический учебник гармонии. 20-е изд. — СПб.: Лань; Планета музыки, 2014 (1-е изд. 1884 – 1886)', '']

export const rimskyHoaAm: Article[] = [
  {
    slug: 'rimsky-korsakov-hoa-am-thuc-hanh',
    title: 'Rimsky-Korsakov: Sách giáo khoa hoà âm thực hành (1884 – 1886)',
    category: 'harmony',
    aliases: ['Rimsky-Korsakov hoà âm', 'Практический учебник гармонии', 'sách hoà âm Rimsky-Korsakov', 'hoà âm thực hành'],
    summary: 'Cuốn sách hoà âm của Rimsky-Korsakov (St. Petersburg 1884 – 1886, tặng Lyadov), sách gốc của trường hoà âm Petersburg và tiền thân trực tiếp của sách bốn tác giả: mục đích thực hành (phối hoà âm giai điệu, chuyển giọng), bảy bài thi cuối khoá, hệ "строй" và mức họ hàng giọng, năm phần của sách; các lần sửa (Vītols – Steinberg 1912, 1924, 1936). Bài mở đầu loạt bài đọc theo sách.',
    refs: [RK_REF],
    body: `## Vì sao cuốn sách này quan trọng
*Практический учебник гармонии* (Sách giáo khoa hoà âm thực hành) của **N. A. Rimsky-Korsakov** in ở St. Petersburg năm 1884 – 1886 và là sách hoà âm chính của Nhạc viện Petersburg suốt nhiều thập kỷ. Theo lời tựa bản 16 (1936), "hàng chục thế hệ" nhạc sĩ đã học trên sách này, từ giáo viên trường nhạc tới những nhà soạn nhạc tên tuổi thế giới [^rimsky-korsakov-1886, tr. 6]. **Sách bốn tác giả** Dubovsky – Evseev – Sposobin – Sokolov (1937) — xương sống của cuốn *Hoà Âm Cổ Điển* này — ra đời từ chính truyền thống ấy, rồi thêm hệ chức năng của Riemann – Catoire (xem [[hoa-am-truong-phai-nga-xo-viet]]).

Đọc Rimsky-Korsakov là thấy **cái gốc thực hành** của trường phái: luật bốn bè, cách nối hợp âm, thứ tự đưa hợp âm vào, các bài phối hoà âm — phần lớn sách bốn tác giả còn giữ, chỉ đặt lại trong khung chức năng T – S – D.

## Mục đích: dạy cách phối hoà âm, không chỉ liệt kê hợp âm
Lời tựa bản đầu (St. Petersburg, 1886) nói rõ: phần lớn sách hoà âm đương thời phân tích kỹ mọi hợp âm và cách giải quyết, dạy đọc bè trầm số "mà nay ít ai cần", cố giải thích vì sao cấm quãng 5 song song — nhưng hầu như **không có chỉ dẫn thực hành, từng bước** để phối hoà âm một giai điệu và chọn hợp âm cho hay. Sách về chuyển giọng thì nêu các hợp âm nghịch làm phương tiện mà bỏ qua **nền tảng chính của chuyển giọng: họ hàng giữa các giọng và hợp âm chung**. Kết quả là học trò học xong vẫn không biết phối hoà âm, hợp âm "nghe hoang dã và vô lý", chuyển giọng thì cứng và đột ngột [^rimsky-korsakov-1886, tr. 3].

Ông đặt ba yêu cầu cho sách: **gọn**; theo đúng chương trình đang dạy ở Nhạc viện Petersburg, Nhà nguyện cung đình và các trường nhạc; và **tự học được**, với nhiều mẫu và bài tập [^rimsky-korsakov-1886, tr. 3]. Sách chỉ bàn **bốn bè**; dấu lặng, vào bè lần lượt, mô phỏng, hình đệm… thuộc về đối âm và sáng tác tự do [^rimsky-korsakov-1886, tr. 4]. Sách tặng **A. K. Lyadov**, người đã giúp tác giả soạn [^rimsky-korsakov-1886, tr. 3].

## Bảy bài thi cuối khoá
Học xong, học trò phải làm được [^rimsky-korsakov-1886, tr. 4]:

| | Bài | Mẫu trong sách |
|---|---|---|
| 1 | Phối hoà âm giai điệu chorale **chỉ bằng hợp âm** | tr. 80 |
| 2 | Phối chorale có **hình hoá giai điệu nghiêm** ở ba bè dưới, giữ nguyên giai điệu | tr. 109 – 111 |
| 3 | Phối chorale **tự do**, nhiều hợp âm nghịch và tiến hành giả | tr. 135 |
| 4 | Phối một giai điệu có hình hoá giai điệu tự do | tr. 114 |
| 5 | Viết một bài **chuyển giọng dần dần** bằng hợp âm | tr. 86 |
| 6 | Viết một **prelude chuyển giọng**, tốt nhất ba đoạn, có nội dung giai điệu | — |
| 7 | Viết vài **biến tấu hoà âm** trên một câu đơn giản | tr. 140 |

Thêm vào đó: **chơi trên đàn** mọi chuyển giọng, dần dần hay đột ngột; ngẫu hứng prelude bằng hợp âm bốn bè ở mọi giọng; chơi mọi mô tiến. Khoá học cho người học chuyên sáng tác mất khoảng **8 tháng**; cần biết lý thuyết cơ bản, tai tốt, xướng âm và nhận quãng, chơi piano [^rimsky-korsakov-1886, tr. 4].

## Các lần sửa
- Từ bản 3 tác giả không sửa nữa. Sau khi ông mất (1908), **J. Vītols** và **M. Steinberg** soạn bản 9 (1912), bổ sung các mục về hợp âm sáu bậc VII, hợp âm bậc II, hợp âm bảy cảm âm, hợp âm bảy bậc II, dùng tự do mọi bậc, chuyển giọng không cromatic, chuyển giọng cromatic, nốt chờ, trùng âm của hợp âm sáu tăng và bảy giảm; phần thêm đánh dấu sao [^rimsky-korsakov-1886, tr. 5].
- Bản 13 (Leningrad 1924) thêm các mục về nối hợp âm sáu, bậc II, bậc VI, hợp âm chín, chorale có chuyển giọng, họ hàng mức hai, trùng âm hợp âm ba tăng và bảy giảm, tiến hành giả của hợp âm ba [^rimsky-korsakov-1886, tr. 6].
- Bản 16 (Leningrad 1936) viết lại mục về **bước nhảy** (§ 25) và thay prelude chuyển giọng mẫu bằng một mẫu của N. A. Sokolov [^rimsky-korsakov-1886, tr. 6 – 7].

## Khung khái niệm riêng
- **Hợp âm** là ba, bốn hay năm âm khác nhau xếp được thành **chồng quãng 3**; tổ hợp không xếp được như vậy là **tổ hợp ngẫu nhiên** (sau này: nốt ngoài hợp âm). Hợp âm ở thế gốc là **hợp âm cơ bản**; có ba loại: hợp âm ba, hợp âm bảy, hợp âm chín. Hợp âm có quãng nghịch đòi **giải quyết**; chuyển từ thuận sang thuận gọi là **tiến hành** [^rimsky-korsakov-1886, tr. 9 – 10].
- Bốn điệu thức làm nền: **trưởng tự nhiên, trưởng hoà âm, thứ tự nhiên, thứ hoà âm** [^rimsky-korsakov-1886, tr. 15].
- **Hợp âm chính và hợp âm phụ**: ba hợp âm ba chính (I, IV, V) và hợp âm bảy át; mọi hợp âm khác là phụ; hai hợp âm bảy trên âm dẫn là **hợp âm bảy cảm âm** [^rimsky-korsakov-1886, tr. 17].
- **"Строй"** (gần nghĩa với *giọng*, gồm cả trưởng và thứ có chung âm giai) và **mức họ hàng giữa các giọng** là trục của phần chuyển giọng — điều tác giả coi là bị các sách khác bỏ qua.

Đây là hệ thống **bậc** (I, IV, V…), chưa phải hệ **chức năng** T – S – D; nhưng Rimsky-Korsakov đã nói "hoà âm át" (cho hợp âm sáu bậc VII) và "hoà âm hạ át" (cho hợp âm bậc II). Hệ chức năng được ghép vào ở sách bốn tác giả — xem [[ky-hieu-chuc-nang-truong-phai-nga]].

## Năm phần của sách
| Phần | Nội dung | Bài đọc |
|---|---|---|
| I | Khái niệm sơ bộ: hợp âm ba, hợp âm bảy, điệu thức, quan hệ hợp âm, bốn bè | [[rimsky-korsakov-hoa-am-1-khai-niem]] |
| II | Phối hoà âm trong một giọng: hợp âm thuận, kết, bước nhảy, các bậc phụ, chorale; hợp âm nghịch: D7, hợp âm bảy cảm âm, II7, hợp âm chín, mô tiến | [[rimsky-korsakov-hoa-am-2-hop-am-thuan]], [[rimsky-korsakov-hoa-am-3-hop-am-nghich]] |
| III | Chuyển giọng: họ hàng giọng, chuyển không cromatic, cromatic, lệch giọng, kế hoạch chuyển giọng, giọng xa, âm ngân | [[rimsky-korsakov-hoa-am-4-chuyen-giong]] |
| IV | Hình hoá giai điệu: nốt lướt, nốt thêu, nốt chờ, hình hoá nghiêm và tự do | [[rimsky-korsakov-hoa-am-5-hinh-hoa-giai-dieu]] |
| V | Trùng âm và chuyển giọng đột ngột: hợp âm biến đổi cromatic, trùng âm, tiến hành giả; ba phụ lục; biến tấu hoà âm | [[rimsky-korsakov-hoa-am-6-trung-am]] |

## Đối chiếu với sách bốn tác giả
| | Rimsky-Korsakov (1886) | Sách bốn tác giả (1937) |
|---|---|---|
| Hệ thống | Bậc; "hoà âm át / hạ át" chỉ là cách gọi | Chức năng T – S – D, ký hiệu kiểu Riemann |
| Trình tự | Hợp âm chính → hợp âm phụ theo từng bậc → hợp âm nghịch → chuyển giọng → hình hoá → trùng âm | Gần như cùng trình tự, gom theo nhóm chức năng |
| Chuyển giọng | Trọng tâm là họ hàng giọng và hợp âm chung | Giữ nguyên ý ấy, thêm "lệch giọng" bằng át phụ |
| Bài tập | Bè trầm và giai điệu cho sẵn, chorale, prelude chuyển giọng | Tương tự, thêm phân tích |

## Loạt bài
[[rimsky-korsakov-hoa-am-1-khai-niem]] · [[rimsky-korsakov-hoa-am-2-hop-am-thuan]] · [[rimsky-korsakov-hoa-am-3-hop-am-nghich]] · [[rimsky-korsakov-hoa-am-4-chuyen-giong]] · [[rimsky-korsakov-hoa-am-5-hinh-hoa-giai-dieu]] · [[rimsky-korsakov-hoa-am-6-trung-am]]`,
  },
  {
    slug: 'rimsky-korsakov-hoa-am-1-khai-niem',
    title: 'Rimsky-Korsakov, Phần I: hợp âm, điệu thức, bốn bè và cách nối hợp âm ba',
    category: 'harmony',
    aliases: ['Rimsky-Korsakov phần I', 'nối hoà thanh và nối giai điệu', 'quan hệ quãng 4 – 5 quãng 3 quãng 2'],
    summary: 'Phần I sách hoà âm của Rimsky-Korsakov: định nghĩa hợp âm, thể đảo, bốn điệu thức (trưởng/thứ tự nhiên và hoà âm), hợp âm chính – phụ, ba quan hệ giữa các hợp âm ba (quãng 4 – 5, quãng 3, quãng 2), bốn bè, nhân đôi, xếp gần – xa, vị trí giai điệu, nối hoà thanh và nối giai điệu, các tiến hành bị cấm.',
    refs: [RK_REF],
    body: `## Hợp âm ba và hợp âm bảy
- Hợp âm ba gồm âm gốc, quãng 3, quãng 5; bốn loại: **trưởng** (3 trưởng + 3 thứ), **thứ**, **giảm**, **tăng**. Hai loại sau chứa quãng nghịch. Hợp âm ba tăng, vì "nghịch mạnh mà lại không xác định", **gác lại tới Phần V**; hợp âm bảy chứa hợp âm ba tăng cũng vậy — chúng "giống tổ hợp ngẫu nhiên hơn là hợp âm độc lập" [^rimsky-korsakov-1886, tr. 11].
- Hai thể đảo: **hợp âm sáu** (6) và **hợp âm bốn sáu** (6/4). Tên thể đảo chỉ phụ thuộc **nốt bass**; các âm vẫn giữ tên và tính chất như ở thế gốc (âm gốc, quãng 3, quãng 5), và thể đảo thuộc cùng bậc với hợp âm gốc [^rimsky-korsakov-1886, tr. 12 – 13].
- Hợp âm bảy = hợp âm ba + quãng 7; ba thể đảo: **năm sáu** (6/5), **ba bốn** (4/3), **hai** (2). Đặc điểm của mỗi thể đảo là quãng 2 sinh ra từ quãng 7 bị đảo — ở trên cùng, ở giữa, hay ở dưới cùng [^rimsky-korsakov-1886, tr. 14].

## Điệu thức, hợp âm chính và phụ
Bốn điệu thức nền: trưởng tự nhiên, **trưởng hoà âm**, thứ tự nhiên, thứ hoà âm [^rimsky-korsakov-1886, tr. 15]. Bỏ các hợp âm ba tăng, mỗi loại (trưởng, thứ) có **9 hợp âm ba** và **9 hợp âm bảy** dùng được [^rimsky-korsakov-1886, tr. 16 – 17].

- **Hợp âm chính**: hợp âm ba bậc I, IV, V và **hợp âm bảy át** (bậc V của trưởng tự nhiên và thứ hoà âm). Mọi hợp âm khác là **phụ**; hai hợp âm bảy trên âm dẫn của trưởng và thứ hoà âm gọi là **hợp âm bảy cảm âm** (nhỏ và giảm) [^rimsky-korsakov-1886, tr. 17].
- Khi chỉ dùng hợp âm chính thì dùng trưởng tự nhiên và **thứ hoà âm** (vì có âm dẫn); khi thêm hợp âm phụ thì dùng thêm thứ tự nhiên và trưởng hoà âm [^rimsky-korsakov-1886, tr. 18].

Xem thêm trong thư viện: [[hop-am-ba]], [[the-dao-hop-am]], [[hop-am-bay]], [[truong-hoa-am]].

## Ba quan hệ giữa các hợp âm ba
| Quan hệ | Âm chung | Ví dụ ở Đô trưởng |
|---|---|---|
| **Quãng 4 – 5** | 1 | I – IV, I – V |
| **Quãng 3** | 2 | I – VI, I – III |
| **Quãng 2** | 0 | IV – V, V – VI |

[^rimsky-korsakov-1886, tr. 18]. Số âm chung quyết định cách nối — đây là chìa khoá của cả phần dẫn giọng.

## Bốn bè, nhân đôi, xếp gần và xa
- Bốn bè: soprano (giai điệu), alto, tenor, bass. Ba kiểu chuyển động: **thuận** (song song là trường hợp riêng), **ngược**, **xiên** [^rimsky-korsakov-1886, tr. 19].
- Hợp âm ba bốn bè: **nhân đôi âm gốc** — "lúc đầu chỉ dùng cách này" [^rimsky-korsakov-1886, tr. 19].
- **Xếp gần**: ba bè trên cách nhau quãng 3, 4; **xếp xa**: quãng 5, 6. Theo âm ở giai điệu, hợp âm có ba **vị trí giai điệu**: vị trí quãng 8, quãng 3, quãng 5; hợp âm đầy đủ chuyển tự do giữa xếp gần và xa, đổi vị trí giai điệu [^rimsky-korsakov-1886, tr. 20].

## Nối hoà thanh và nối giai điệu
§ 11 là quy tắc nền của sách [^rimsky-korsakov-1886, tr. 21]:
1. Nối hai hợp âm ba khác bậc có thể là **hoà thanh** (âm chung giữ nguyên ở cùng bè) hoặc **giai điệu** (không âm nào giữ nguyên).
2. Khi nhân đôi âm gốc, **không bè trên nào đi xa hơn quãng 3**.
3. Quan hệ **quãng 4 – 5**: nối được cả hai cách, cách xếp không đổi; các bè trên đi cùng hướng — nối hoà thanh đi **lên** thì nối giai điệu đi **xuống**, và ngược lại.
4. Quan hệ **quãng 2**: luôn nối giai điệu (không có âm chung); ba bè trên đi cùng hướng, **ngược hướng bass**; cách xếp không đổi.
5. Quan hệ **quãng 3**: nối được cả hai cách; nối hoà thanh giữ cách xếp, nối giai điệu thì đổi từ xếp gần sang xa hoặc ngược lại.

Xem cách trình bày hiện đại ở [[noi-hop-am]] và [[dan-giong]].

## Các tiến hành bị cấm
Hệ quả trực tiếp của luật nối: **không đặt hai hợp âm ba liền nhau ở cùng vị trí giai điệu** — vì sẽ sinh ra **quãng 5 và quãng 8 song song** hoặc ngược hướng, cùng đồng âm song song, những tiến hành "tuyệt đối cấm với học trò". Cũng cấm đi **quãng tăng** ở bất kỳ bè nào, kể cả quãng 2 tăng trong thứ và trưởng hoà âm [^rimsky-korsakov-1886, tr. 22].

Luật bốn bè hiện đại: [[luat-hoa-am-bon-be]].

## Câu hỏi
1. Vì sao Rimsky-Korsakov gác hợp âm ba tăng tới Phần V?
2. Khi nào hai hợp âm ba nối được cả hoà thanh lẫn giai điệu?
3. Vì sao hai hợp âm ba ở cùng vị trí giai điệu sinh ra quãng 5 hay 8 song song?`,
  },
  {
    slug: 'rimsky-korsakov-hoa-am-2-hop-am-thuan',
    title: 'Rimsky-Korsakov, Phần II (1): phối hoà âm bằng hợp âm thuận — kết, bước nhảy, các bậc phụ, chorale',
    category: 'harmony',
    aliases: ['Rimsky-Korsakov phần II', 'kết Phrygian', 'kết ngắt', 'bước nhảy quãng 4 quãng 5', 'phối hoà âm chorale'],
    summary: 'Phần II (nửa đầu) sách hoà âm Rimsky-Korsakov, § 13 – 35: phối hoà âm giai điệu và bè trầm bằng I, IV, V; hợp âm sáu; kết trọn chính cách và plagal, kết phức có K64, bốn sáu lướt, kết nửa; bước nhảy quãng 4, 5 và quãng 3; hợp âm sáu bậc VII, bậc II, bậc VI và kết ngắt, bậc III, kết Phrygian hai loại; phối hoà âm chorale; hạ át thứ của trưởng hoà âm.',
    refs: [RK_REF],
    body: `## Cách làm bài
Mọi ví dụ trưởng áp dụng cả cho thứ, trừ chỗ có ví dụ riêng. Bài mẫu ở Đô trưởng và La thứ, nhịp hai và nhịp ba; bè trầm và giai điệu cho sẵn ở cuối sách; mỗi mục (trừ chorale) học trò còn phải **tự soạn bài theo mẫu** — thường là câu 8 ô, nhịp hai [^rimsky-korsakov-1886, tr. 23, 25].

## Chỉ với I, IV, V (§ 13 – 15)
**Phối hoà âm giai điệu** [^rimsky-korsakov-1886, tr. 23]:
1. Dưới mỗi nốt đặt hợp âm ba bậc I, IV hoặc V — chưa đặt IV và V cạnh nhau.
2. Nối theo luật nối hoà thanh / giai điệu.
3. Giai điệu nhảy hơn quãng 3 thì giữ cùng một hợp âm.
4. Nốt giai điệu lặp lại thì đổi hợp âm hoặc đổi cách xếp.
5. Mở và kết bằng hợp âm chủ.
6. Không đặt ở phách mạnh cùng hợp âm vừa có ở phách nhẹ trước đó.
7. Bass tránh hai lần liền nhảy quãng 4 (hay quãng 5) cùng hướng.

**Phối hoà âm bè trầm**: chú ý cho bè trên trôi chảy; âm dẫn ở giai điệu phải **đi lên** — nên V → I phải nối hoà thanh; kết bài có thể dùng hợp âm chủ **thiếu quãng 5** (ba âm gốc) để âm dẫn ở bè giữa đi lên [^rimsky-korsakov-1886, tr. 24]. IV – V: không có âm chung nên **luôn nối giai điệu**, và đặt **IV trước V**, không ngược lại [^rimsky-korsakov-1886, tr. 25].

(Biên tập viên lưu ý: ở vài mẫu, tác giả cho cả bốn bè đi cùng hướng khi nối IV – I, I – V; người mới học nên giữ luật nghiêm của § 11 [^rimsky-korsakov-1886, tr. 24].)

## Hợp âm sáu (§ 16 – 19)
- Ở hợp âm sáu bậc I, IV, V nhân đôi **âm gốc hoặc quãng 5, không nhân đôi quãng 3** (trừ khi ba bè trên đứng yên và bass đi từ thế gốc sang hợp âm sáu); mỗi hợp âm sáu có 10 dạng sắp xếp. Hợp âm sáu giữa hai hợp âm gốc là cách tốt để **đổi cách xếp** [^rimsky-korsakov-1886, tr. 26].
- Chưa viết hai hợp âm sáu liền nhau; nối hợp âm sáu với hợp âm ba khác bậc **luôn nối hoà thanh**; bass được nhảy quãng 6 từ hợp âm ba sang hợp âm sáu, không ngược lại; **cấm nhảy quãng 7** [^rimsky-korsakov-1886, tr. 27].
- IV6 – V: mỗi bè trên đi quãng 2 hay 3; tránh nhân đôi quãng 5 ở hai bè trên. IV – V6: bass đi **quãng 5 giảm xuống**, không đi quãng 4 tăng lên [^rimsky-korsakov-1886, tr. 27 – 28].
- IV6 – V6: IV6 nhân đôi âm gốc, V6 nhân đôi quãng 5; IV6 ở vị trí giai điệu âm gốc; hai bè trên song song, một bè ngược bass; ở thứ, bass của IV6 đi theo **âm giai giai điệu** để tránh quãng 2 tăng [^rimsky-korsakov-1886, tr. 29].

## Kết (§ 20 – 24)
- **Kết** là chỗ khép một ý nhạc và chia lời nhạc thành câu. Kết về hợp âm chủ là **kết trọn**: **chính cách** (V – I) hoặc **plagal** (IV – I). Kết trọn là **hoàn toàn** khi hai hợp âm cuối ở thế gốc, hợp âm chủ ở vị trí quãng 8 và rơi vào phách mạnh; thiếu một điều kiện là **không hoàn toàn** [^rimsky-korsakov-1886, tr. 30].
- **Kết phức** IV – V – I: nhịp hai thì IV ở phách mạnh, V ở phách nhẹ [^rimsky-korsakov-1886, tr. 31].
- **Kết phức có K64**: IV – I6/4 – V – I. **Hợp âm bốn sáu kết** nối **hoà thanh** với hợp âm trước — âm chung chính là quãng 4 của nó; chỉ **nhân đôi quãng 5 (nốt bass)**; nhịp hai thì ở phách mạnh [^rimsky-korsakov-1886, tr. 31].
- **Bốn sáu lướt**: giữa hợp âm ba và hợp âm sáu cùng bậc (hay ngược lại); nối hoà thanh, bass đi bậc liền, một bè giữ âm chung, một bè ngược bass, bè thứ ba xuống rồi lên một bậc; nên ở phách nhẹ [^rimsky-korsakov-1886, tr. 32].
- **Kết nửa**: dừng ở V (**kết nửa chính cách**) hoặc ở IV (**kết nửa plagal**); không kết bài bằng kết nửa; câu sau mở bằng IV, IV6, V… Một ý nhạc khép bằng một kết gọi là **câu** [^rimsky-korsakov-1886, tr. 33].

Bài tập trên đàn: chơi các loại kết ở mọi giọng trưởng và thứ thông dụng [^rimsky-korsakov-1886, tr. 32]. Xem [[cau-ket]], [[hop-am-sau-bon]].

## Bước nhảy (§ 25 – 27)
- **Nhảy quãng 4, 5** ở giai điệu hoặc bè giữa giữa hai hợp âm khác bậc mở rộng nhiều khả năng dẫn giọng và cho phép đổi cách xếp. Sau bước nhảy bè phải đi **ngược hướng**. Với I – IV, I – V: nếu nốt đầu có hợp âm gốc thì nốt sau đặt hợp âm sáu và ngược lại; **không hai bè nhảy cùng lúc**; ba bè trên không cách nhau quá một quãng 8 [^rimsky-korsakov-1886, tr. 34].
- **Quãng 8 và quãng 5 ẩn** giữa hai bè ngoài khi giai điệu nhảy: được phép nếu giai điệu nhảy lên và hợp âm đầu ở thế gốc, hợp âm sau là hợp âm sáu [^rimsky-korsakov-1886, tr. 35].
- **Nhảy giữa hai quãng 3** ở giai điệu chỉ giữa hai hợp âm gốc I – IV, I – V; nối hoà thanh; sau đó đi ngược hướng quãng 2 hay 3; ở tenor cũng được, alto thì không [^rimsky-korsakov-1886, tr. 36].
- **Nhảy quãng 3 ở bass**: giữa I6 và IV6, nối hoà thanh [^rimsky-korsakov-1886, tr. 37].

## Các bậc phụ (§ 28 – 33)
| Hợp âm | Dùng thế nào | Trang |
|---|---|---|
| **VII6** (hợp âm sáu của hợp âm ba giảm) | Làm **hoà âm át**; chuẩn bị bằng IV, giải quyết về I hay I6; nhân đôi chỉ quãng 5 hoặc quãng 3; âm dẫn **đi lên**; không đặt ở tenor (tránh quãng 5 song song); để phối hoà âm tứ âm trên đi lên của âm giai trưởng, đôi khi thay V ở kết; ở thứ dùng cho tứ âm trên của âm giai giai điệu (IV thành trưởng) | 38 – 39 |
| **II** (thế gốc) | **Hoà âm hạ át**, chỉ ở trưởng; sau I, IV, VI; đòi V hay V6 sau nó, nối giai điệu, ba bè trên **đi xuống** để tránh quãng 3 trưởng song song | 40 |
| **II6** | Hạ át ở cả trưởng và thứ, sau I hay I6; ở vị trí giai điệu âm gốc (đôi khi quãng 3); nhân đôi quãng 3 hoặc âm gốc — **trước K64 chỉ nhân đôi quãng 3** | 41 |
| **VI** — kết ngắt | V **lệch** khỏi I mà sang VI có **nhân đôi quãng 3** (vì âm dẫn phải đi lên), nối giai điệu; câu sau mở bằng hạ át hay II6. VI còn đặt sau I, ngăn I với V, IV, II | 41 – 42 |
| **VI ở thứ** | Nối VI – V chỉ khi VI nhân đôi quãng 3, kẻo có quãng 2 tăng | 42 – 43 |
| **III ở trưởng** | Phối hoà âm tứ âm trên **đi xuống**; sau I hay VI (nối hoà thanh), trước IV (nối giai điệu); III6 nhân đôi quãng 3 đôi khi thay V trước I | 43 |
| **III tự nhiên ở thứ** — **kết Phrygian loại 1** | Cho tứ âm trên đi xuống của thứ tự nhiên; sau I hay VI, kéo theo hạ át; chuỗi này gọi là **tiến hành Phrygian** (gốc từ điệu Phrygian trung cổ), dùng như kết nửa ở thứ thì là **kết Phrygian** | 44 |
| **VII tự nhiên ở thứ** — **kết Phrygian loại 2** | Tứ âm trên đi xuống ở **bass**: I – VII – IV6; bè nhân đôi bass ở VII nhảy quãng 4 xuống để tránh tiến hành "không tự nhiên" | 44 – 45 |

Xem [[hop-am-cam-am]], [[cau-ket]].

## Phối hoà âm chorale (§ 34)
Giai điệu chorale phần lớn đi đều bằng nốt trắng, chia câu bằng các kết có **fermata**. Mọi phương tiện đã học, áp vào chorale, làm thành **"hoà âm phong cách nghiêm"** [^rimsky-korsakov-1886, tr. 45]. Luật riêng [^rimsky-korsakov-1886, tr. 45 – 46]:
- kết càng đa dạng càng tốt, **không hai kết giống nhau liền nhau**;
- giữa chorale tránh kết trọn hoàn toàn chính cách; kết phức có K64 chỉ thỉnh thoảng, và chỉ ở cuối;
- fermata ở nửa sau ô nhịp thì cả ô thường cùng một bậc;
- nhiều chorale mở bằng nhịp lấy đà với V hay V6, ít khi với hạ át;
- trong câu đôi khi dùng V – IV (nhất là ngay sau fermata).

## Hạ át thứ của trưởng hoà âm (§ 35)
Từ đây, bài trưởng bắt đầu dùng nhóm hạ át của **trưởng hoà âm**: hợp âm ba thứ và hợp âm sáu bậc IV, hợp âm sáu bậc II có quãng 5 hạ. Không dùng tiến hành cromatic La – La giáng; không trộn hạ át của trưởng hoà âm với của trưởng tự nhiên trong cùng một câu; **không áp dụng vào chorale** [^rimsky-korsakov-1886, tr. 47]. Xem [[truong-hoa-am]].

## Đối chiếu
Sách bốn tác giả học cùng các chủ đề này (chủ đề 1 – 14, 19 – 20) nhưng đặt trong nhóm chức năng: II, II6 là **SII**, VI là **TSVI**, VII6 là **DVII6**. Luật nối hoà thanh – giai điệu, K64, kết ngắt nhân đôi quãng 3 giữ gần nguyên — xem [[phoi-hoa-am-giai-dieu]], [[noi-hop-am]].

## Bài tập
1. Phối hoà âm một giai điệu 8 ô chỉ bằng I, IV, V theo bảy quy tắc § 13.
2. Viết kết phức IV – K64 – V – I ở năm giọng.
3. Viết một kết ngắt V – VI có nhân đôi quãng 3 ở La thứ; giải thích vì sao phải nhân đôi quãng 3.
4. Viết tứ âm Mi – Rê – Đô – Si ở bass (La thứ tự nhiên) với kết Phrygian loại 2.`,
  },
  {
    slug: 'rimsky-korsakov-hoa-am-3-hop-am-nghich',
    title: 'Rimsky-Korsakov, Phần II (2): hợp âm nghịch — D7, hợp âm bảy cảm âm, II7, hợp âm chín, mô tiến, dùng tự do mọi bậc',
    category: 'harmony',
    aliases: ['Rimsky-Korsakov hợp âm bảy', 'quãng 7 chuẩn bị', 'mô tiến quãng 4 – 5', 'mô tiến hợp âm bảy', 'kết plagal đặc biệt'],
    summary: 'Phần II (nửa sau) sách hoà âm Rimsky-Korsakov, § 36 – 46: hợp âm bảy át và ba thể đảo — chuẩn bị, giải quyết, chuyển qua lại; hai hợp âm bảy cảm âm; hợp âm bảy bậc II và các dạng kết plagal đặc biệt; dùng hợp âm bảy trong chorale; hợp âm chín át; mô tiến quãng 4 – 5 và quãng 2 – 3 như bản đồ quan hệ mọi hợp âm của giọng; mô tiến hợp âm bảy; mười ba quy tắc dùng tự do mọi bậc.',
    refs: [RK_REF],
    body: `## Hợp âm bảy át (§ 36)
1. D7 thế gốc giải quyết về **hợp âm chủ thế gốc**; **quãng 7 bắt buộc đi xuống** vào quãng 3 của hợp âm chủ; các bè khác (âm của hợp âm át) theo luật nối giai điệu [^rimsky-korsakov-1886, tr. 47 – 48].
2. D7 **đầy đủ** hoặc **thiếu** (bỏ quãng 5, nhân đôi âm gốc). Khi âm dẫn đi lên: D7 đầy đủ giải quyết về hợp âm chủ **thiếu**, D7 thiếu giải quyết về hợp âm chủ **đầy đủ** [^rimsky-korsakov-1886, tr. 48].
3. D7 đứng ở chỗ hợp âm át đứng [^rimsky-korsakov-1886, tr. 48 – 49]:
   - sau I, I6, I6/4 — quãng 7 đến bằng bậc liền (quãng 5 song song, cái thứ hai là quãng 5 giảm, được phép);
   - sau IV, II (thế gốc hay hợp âm sáu), **nối hoà thanh** — âm chung là quãng 7, gọi là **quãng 7 được chuẩn bị**; sau IV thế gốc hay II6 thì D7 phải thiếu;
   - sau V hay V6 — quãng 7 là **nốt lướt** hoặc nhảy tới từ bất kỳ âm nào.
4. Lệch khỏi giải quyết: D7 → **VI nhân đôi quãng 3** trong kết ngắt (D7 thường đầy đủ) [^rimsky-korsakov-1886, tr. 49].

## Ba thể đảo (§ 37)
- Đều giải quyết về I, quãng 7 đi xuống vào quãng 3 [^rimsky-korsakov-1886, tr. 50].
- **D6/5**: sau mọi hợp âm chính, sau II, II6, IV6; giải quyết về I thế gốc. **D4/3**: sau hợp âm chính và II, II6; về I thế gốc, đôi khi I6. **D2**: sau hợp âm chính và II6; **bắt buộc về I6**; IV trước D2 phải ở thế gốc [^rimsky-korsakov-1886, tr. 50 – 51].
- Sau I, quãng 7 có thể đến bằng **bước nhảy quãng 4 lên**, khi đó bè khác không nhảy [^rimsky-korsakov-1886, tr. 51].
- D7 và các thể đảo **chuyển qua lại** được nếu quãng 7 giữ nguyên làm âm chung — vì thế D2 không tham gia (ngoại lệ: quãng 7 đổi chỗ với quãng 5) [^rimsky-korsakov-1886, tr. 52].

Xem [[hop-am-bay]].

## Hai hợp âm bảy cảm âm (§ 38)
- **Nhỏ** (trưởng tự nhiên) và **giảm** (trưởng hoà âm, thứ hoà âm) là **hoà âm át**, giải quyết về hợp âm chủ: âm dẫn lên âm gốc, quãng 7 xuống một bậc vào quãng 5, quãng 3 và quãng 5 của hợp âm bảy **hội tụ** thành quãng 3 nhân đôi của hợp âm chủ [^rimsky-korsakov-1886, tr. 53].
- Dùng ở thế gốc và hai thể đảo đầu; hợp âm bảy cảm âm nhỏ chỉ ở vị trí giai điệu quãng 7; **thể đảo hai (2) không dùng** vì giải quyết vào hợp âm bốn sáu [^rimsky-korsakov-1886, tr. 53].
- Đặt sau IV thế gốc hoặc II, II6, nối hoà thanh bằng hai – ba âm chung; chuẩn bị bằng hợp âm chủ thì "kém đẹp" [^rimsky-korsakov-1886, tr. 53 – 54].

Xem [[hop-am-cam-am]].

## Hợp âm bảy bậc II (§ 39 – 40)
- Thường dùng nhất trong các hợp âm bảy phụ là **II6/5** và **II7**: trong kết phức, thay cho II6 và II [^rimsky-korsakov-1886, tr. 54].
- **Quãng 7 phải được chuẩn bị** bằng âm chung ở I, IV hay VI; sang V thì quãng 7 xuống nửa cung; sang K64 thì **giữ nguyên**, thành quãng 4 của K64 [^rimsky-korsakov-1886, tr. 55].
- **Kết plagal đặc biệt**: II6/5 và VII4/3 tới hợp âm chủ bằng bass **xuống quãng 4** vào âm chủ, các bè trên đi êm; chuẩn bị bằng IV thế gốc [^rimsky-korsakov-1886, tr. 56].

## Hợp âm bảy trong chorale (§ 41)
Dùng D7 với các thể đảo và II6/5; thường nhất là **quãng 7 lướt**; tránh D7 thế gốc, nhất là khi quãng 7 nằm ở giai điệu; thể đảo dùng khá thường, nhất là D6/5 và D2. Tác giả chú thích: phối như vậy là bước sang **phong cách tự do** [^rimsky-korsakov-1886, tr. 57].

## Hợp âm chín (§ 42)
Hợp âm năm âm: hợp âm bảy + quãng 9 tính từ bass. Coi là hợp âm độc lập **chỉ ở bậc V** — tức hoà âm át. **Chín trưởng** ở trưởng tự nhiên, **chín thứ** ở trưởng và thứ hoà âm. Bốn bè thì bỏ quãng 5; giải quyết về hợp âm chủ thế gốc, **quãng 9 xuống một bậc** vào quãng 5 của hợp âm chủ. Đặt sau IV, II, II6, II7, nối hoà thanh, thường để quãng 9 ở giai điệu. Trong thể đảo chỉ thể đảo ba đôi khi được dùng. Không có bài tập riêng — học trò tự soạn vài câu 8 ô [^rimsky-korsakov-1886, tr. 57 – 59]. Xem [[hop-am-mo-rong]].

## Mô tiến: bản đồ quan hệ của mọi hợp âm (§ 43 – 45)
Đây là ý sư phạm đặc sắc của sách: dùng **mô tiến** để học trò thấy mọi hợp âm của giọng liên hệ với nhau thế nào.
- **Mô tiến quãng 4 – 5**: lấy motif V → I, nhắc lại mỗi lần thấp một bậc → chuỗi I – IV – VII – III – VI – II – V – I (quan hệ "tự nhiên nhất" của mọi hợp âm ba). Nối luân phiên hoà thanh – giai điệu; hợp âm ba giảm, ngoài mô tiến chỉ dùng ở dạng hợp âm sáu, trong mô tiến được dùng thế gốc. Ở thứ dùng hợp âm của thứ tự nhiên để tránh quãng 2 tăng [^rimsky-korsakov-1886, tr. 59 – 60].
- **Mô tiến quãng 2 – 3**: motif IV → V hạ dần một bậc — luân phiên nối giai điệu (quan hệ quãng 2) và nối hoà thanh (quan hệ quãng 3) [^rimsky-korsakov-1886, tr. 60 – 61].
- **Mô tiến hợp âm bảy**: mỗi hợp âm bảy giải quyết vào hợp âm ba **cao hơn quãng 4**; đầy đủ → thiếu và ngược lại. Giữ quãng 3 của hợp âm bảy này làm quãng 7 của hợp âm bảy sau thì được chuỗi toàn hợp âm bảy, thể đảo luân phiên 6/5 – 2 và 4/3 – thế gốc [^rimsky-korsakov-1886, tr. 62 – 63].
- Bài tập trên đàn: chơi mọi mô tiến ở mọi giọng, bắt đầu từ bất kỳ bậc nào [^rimsky-korsakov-1886, tr. 61, 64].

Xem [[mo-tien-hoa-am]].

## Dùng tự do mọi bậc (§ 46)
Cho học trò đã vững, mười ba quy tắc [^rimsky-korsakov-1886, tr. 64 – 68], trong đó:
- hợp âm ba giảm chỉ dùng dạng hợp âm sáu;
- hợp âm ba phụ thường đứng **thấp hơn quãng 3** sau một hợp âm chính; nhiều hợp âm ba quan hệ quãng 3 liền nhau "gây ấn tượng yếu";
- hợp âm ba đứng **cao hơn quãng 3** so với hợp âm trước đòi tiếp theo một hợp âm **cao hơn quãng 2**;
- hợp âm ba và hợp âm sáu cùng bass từ phách nhẹ sang phách mạnh nghe "uể oải"; bass nói chung không nên đứng yên từ phách nhẹ sang phách mạnh;
- hợp âm sáu của bậc phụ (trừ II) viết sau chính hợp âm ba của nó;
- K64 đôi khi thiếu âm gốc; hợp âm bốn sáu của bậc phụ dùng như hợp âm lướt;
- II và III ở trưởng hiếm khi nối nhau;
- hợp âm bảy phụ dùng như hợp âm lướt hoặc chuẩn bị kỹ bằng âm chung, và một khi đã có thì kéo theo cả phần còn lại của mô tiến tới D7; mô tiến quá bốn hợp âm bảy "nghe nặng";
- **không nhảy quãng tăng**; nhảy quãng giảm thì nên hơn.

Không có bài riêng: học trò áp dụng khi phối hoà âm chorale thật [^rimsky-korsakov-1886, tr. 68].

## Đối chiếu
Sách bốn tác giả học D7 và thể đảo (chủ đề 15 – 17), hợp âm bảy cảm âm DVII7 (21 – 22), SII7 (18), hợp âm chín (23), mô tiến diatonic (26) — trình tự gần như của Rimsky-Korsakov; điểm mới là đặt chúng trong nhóm chức năng (D, S) và ký hiệu Riemann.

## Bài tập
1. Viết D7 với ba cách đến quãng 7 (lướt, chuẩn bị, nhảy) và giải quyết đúng.
2. Viết chuỗi D2 – I6 và D4/3 – I ở ba giọng.
3. Viết mô tiến quãng 4 – 5 đủ bảy hợp âm ba ở Đô trưởng và La thứ tự nhiên.
4. Viết mô tiến bốn hợp âm bảy, thể đảo luân phiên 6/5 – 2.`,
  },
  {
    slug: 'rimsky-korsakov-hoa-am-4-chuyen-giong',
    title: 'Rimsky-Korsakov, Phần III: chuyển giọng — họ hàng giọng, chuyển không cromatic và cromatic, lệch giọng, kế hoạch chuyển giọng, âm ngân',
    category: 'harmony',
    aliases: ['Rimsky-Korsakov chuyển giọng', 'mức họ hàng giọng', 'họ hàng mức hai', 'kế hoạch chuyển giọng', 'chuyển giọng hoàn toàn', 'chuyển giọng không hoàn toàn', 'giọng xa', 'перечение', 'quan hệ chéo'],
    summary: 'Phần III sách hoà âm Rimsky-Korsakov, § 47 – 63: chuyển giọng dần dần và đột ngột; sáu giọng họ hàng mức một; chuyển không cromatic qua hợp âm chủ được "đặt tên lại"; qua giọng song song; chuyển cromatic và luật quan hệ chéo; phân biệt chuyển hẳn và lệch giọng; chuyển giọng trong chorale; họ hàng mức hai, kế hoạch chuyển giọng qua giọng trung gian, chuyển hoàn toàn và không hoàn toàn; giọng xa; âm ngân trên át và chủ.',
    refs: [RK_REF],
    body: `## Khái niệm (§ 47 – 48)
**Chuyển giọng** là chuyển từ một giọng ("строй") sang giọng khác; có thể **dần dần** hay **đột ngột**, **diatonic** (không cromatic) hay **cromatic**. Phương tiện của chuyển giọng dần dần là **họ hàng giữa các giọng**; của chuyển giọng đột ngột là **tiến hành giả** (hợp âm của các điệu thức khác nhau đứng cạnh nhau) và **trùng âm** [^rimsky-korsakov-1886, tr. 69].

**Họ hàng mức một** (giọng gần): **sáu giọng** có hợp âm chủ nằm trong giọng đã cho. Của Đô trưởng: La thứ, Sol trưởng, Fa trưởng, **Fa thứ**, Mi thứ, Rê thứ; của La thứ: Đô trưởng, Rê thứ, Mi thứ, **Mi trưởng**, Fa trưởng, Sol trưởng. Mọi giọng khác là họ hàng mức hai, ba… Chuyển giọng dựa trên **hợp âm chung** của hai giọng [^rimsky-korsakov-1886, tr. 69 – 70].

Lưu ý: danh sách này rộng hơn "sáu giọng gần" thông thường vì tính cả hạ át thứ của trưởng hoà âm (Đô – Fa thứ) và át trưởng của thứ hoà âm (La – Mi trưởng).

## Chuyển không cromatic (§ 49 – 52)
1. Mọi chuyển giọng **xuất phát từ hợp âm chủ** của giọng cũ.
2. **Đặt tên lại** hợp âm ấy thành một bậc của giọng mới, rồi thêm một kết (hay chuỗi giống kết) của giọng mới — coi như đã chuyển [^rimsky-korsakov-1886, tr. 70].

Trường hợp riêng [^rimsky-korsakov-1886, tr. 70 – 72]:
- Trưởng → hạ át trưởng hay thứ (Đô – Fa, Đô – Fa thứ): thường đi qua **kết ngắt** trước, để sau đó có hoà âm hạ át của giọng mới.
- Thứ → bậc VI (La thứ – Fa trưởng): dùng hợp âm bậc III của giọng cũ chuẩn bị D4/3 của giọng mới bằng hai âm chung — "chỉ dùng cách này".
- Thứ → hạ át (La thứ – Rê thứ): đi **qua giọng song song của giọng mới** (La thứ – Fa trưởng – Rê thứ), vì hợp âm chủ thứ của giọng cũ mâu thuẫn với hợp âm át trưởng của giọng mới. Đôi khi Đô – Fa cũng đi qua Rê thứ.
- Hợp âm IV trưởng của **thứ giai điệu** mở thêm hai cách: La thứ → Rê thứ, Đô trưởng → Rê thứ.
- Cách kém nhất: đặt **thẳng hợp âm chủ của giọng mới** cạnh hợp âm chủ giọng cũ — thường dùng khi phối hoà âm giai điệu hơn là để chuyển giọng thật sự [^rimsky-korsakov-1886, tr. 72 – 73].

Bài tập trên đàn: chơi chuyển giọng từ mọi giọng trưởng, thứ sang các giọng họ hàng mức một bằng mọi cách trên [^rimsky-korsakov-1886, tr. 72].

## Cromatic, quan hệ chéo, chuyển cromatic (§ 53 – 55)
- Nối thẳng hợp âm của điệu thức tự nhiên và hoà âm sinh ra **bước cromatic** ở một bè (lên khi thứ tự nhiên → thứ hoà âm, xuống khi trưởng tự nhiên → trưởng hoà âm) [^rimsky-korsakov-1886, tr. 73].
- Bước cromatic **phải nằm trong cùng một bè**; nếu rơi vào hai bè khác nhau là **quan hệ chéo** (*перечение*), "nghiêm cấm" [^rimsky-korsakov-1886, tr. 74].
- **Chuyển cromatic**: hợp âm trung gian thuộc điệu thức tự nhiên chạm vào và biến thành hợp âm của điệu thức hoà âm (thường là V, VII của thứ hoà âm), rồi dẫn vào giọng mới. Bước cromatic đi lên dẫn vào **thứ**. Cần dẫn giọng êm và âm chung — **bước cromatic được tính như âm chung** [^rimsky-korsakov-1886, tr. 74]. Cụ thể: từ trưởng sang bậc II và VI; từ thứ sang hạ át; nếu một âm được nhân đôi đi cromatic thì bè kia phải đi một cung ngược hướng [^rimsky-korsakov-1886, tr. 74 – 75].
- Bước cromatic **đi xuống** không phải phương tiện chuyển giọng (không đem dấu hiệu giọng mới) nhưng "nghe đẹp" [^rimsky-korsakov-1886, tr. 75].
- Ưu điểm của chuyển cromatic: **ngắn mà cực kỳ rõ**, vì cromatic biểu lộ ngay dấu hiệu giọng mới [^rimsky-korsakov-1886, tr. 76].

## Chuyển hẳn và lệch giọng (§ 56)
- **Chuyển hẳn** (*переход*): giọng mới được giữ một thời gian và củng cố bằng kết.
- **Lệch giọng** (*отклонение*): giọng mới chỉ được chạm nhẹ, có khi bằng một hợp âm, rồi rời đi để trở về hay lệch tiếp [^rimsky-korsakov-1886, tr. 76].
- Bài tập: câu 4 ô chuyển giọng; câu và đoạn 8 ô chuyển đi rồi về; đoạn 8 ô không trở về nhưng có trình bày rõ giọng cũ; lệch giọng khi trình bày hay củng cố giọng [^rimsky-korsakov-1886, tr. 77 – 78].
- Chuyển cromatic hợp nhất cho lệch giọng; thường gặp nhất là lệch sang hạ át, bậc II ở trưởng, bậc VI ở thứ; lệch sang hạ át **sau kết ngắt** rất thông dụng [^rimsky-korsakov-1886, tr. 78].
- Cảnh báo: ngay trước khi chuyển trưởng → hạ át thứ (Đô – Fa thứ) và ngay sau thứ → át trưởng (La thứ – Mi trưởng), **đừng lệch giọng**, vì hợp âm sẽ mâu thuẫn với giọng kia [^rimsky-korsakov-1886, tr. 79].

Xem [[hop-am-at-phu]] (lệch giọng bằng át phụ theo sách bốn tác giả), [[chuyen-giong]].

## Chuyển giọng trong chorale (§ 57)
- Giai điệu có khi chỉ rõ chuyển giọng bằng dấu hoá bất thường, có khi không có dấu mà vẫn cần chuyển, có khi phối được nhiều cách [^rimsky-korsakov-1886, tr. 79].
- Trong chorale **không dùng** chuyển trưởng → hạ át thứ, thứ → át trưởng; phong cách nhà thờ nghiêm cũng **không dùng chuyển cromatic**. Phải **định các kết trước**, rồi dẫn chuyển giọng tới chúng [^rimsky-korsakov-1886, tr. 79].
- Tác giả chú thích: **hợp âm bảy và chuyển cromatic cùng nhau** mới thật sự xác lập **phong cách tự do** của hoà âm [^rimsky-korsakov-1886, tr. 79].

## Họ hàng mức hai và kế hoạch chuyển giọng (§ 58 – 60)
- **Họ hàng mức hai**: giọng có hợp âm chủ không nằm trong giọng đã cho nhưng có **ít nhất một hợp âm ba chung**. Mỗi giọng có **12 giọng** mức hai; của Đô trưởng gồm La giáng, La, Si giáng, Si, Rê giáng, Rê, Mi giáng, Mi trưởng và Sol thứ, Si giáng thứ, Si thứ, Đô thứ [^rimsky-korsakov-1886, tr. 81].
- Hợp âm chung chỉ đường đi. Hai giọng cách nhau **2 dấu hoá**: đi qua **giọng trung gian** cách 1 dấu, nhưng **tránh ba giọng trưởng (hay ba giọng thứ) liền nhau**. Ví dụ Đô → Rê: kế hoạch Đô – Sol – Rê (ba trưởng, đi quãng 5 đều đặn, đơn điệu) kém hơn Đô – Mi thứ – Rê (có một giọng thứ xen giữa, bước một lên quãng 3, bước hai xuống quãng 2) [^rimsky-korsakov-1886, tr. 82 – 83].
- Cách **3 dấu trở lên**: hợp âm trung gian duy nhất là **hạ át thứ của trưởng hoà âm** hoặc **át trưởng của thứ hoà âm** — trưởng → trưởng về phía giáng đi qua hạ át thứ của giọng cũ, về phía thăng qua hạ át thứ của giọng mới; thứ → thứ ngược lại với át trưởng [^rimsky-korsakov-1886, tr. 83].
- Trưởng → thứ cùng tên (Đô – Đô thứ) phải chèn thêm giọng song song của giọng mới: Đô – (Fa thứ – Mi giáng) – Đô thứ — "chỉ dùng cách này" [^rimsky-korsakov-1886, tr. 83 – 84].
- **Chuyển hoàn toàn**: đi qua đủ các giọng của kế hoạch và củng cố giọng mới bằng kết; bài tập: chuyển giọng bằng nốt tròn không chia ô; câu 8 ô; bài 16 ô hai phần (đi rồi về) [^rimsky-korsakov-1886, tr. 84 – 86].
- **Chuyển không hoàn toàn**: thay giọng trung gian bằng **chỉ hợp âm chủ** của nó, không củng cố [^rimsky-korsakov-1886, tr. 86].

## Giọng xa (§ 61)
Mọi giọng ngoài mức một và mức hai là **giọng xa**; chuyển qua các giọng gần. Từ giọng thăng sang phía giáng: từ trưởng thì **nhảy ngay 4 dấu** (vào hạ át thứ), từ thứ thì trước hết sang trưởng song song hay một trưởng gần. Từ giọng giáng sang phía thăng: từ thứ nhảy 4 dấu (vào át trưởng), từ trưởng thì trước hết sang thứ song song hay một thứ gần. Ví dụ: Si – Mi thứ – Đô – Rê thứ – Si giáng [^rimsky-korsakov-1886, tr. 86 – 87].

## Âm ngân (§ 62 – 63)
- **Âm ngân** (*органный пункт*, "pedal") là âm giữ dài ở bass, ba bè trên đi hợp âm theo luật **ba bè** (thường bỏ quãng 5) [^rimsky-korsakov-1886, tr. 88].
- Hai loại: **trên át** — kéo dài bass của K64, kết bằng hoà âm át giải quyết về chủ; **trên chủ** — kéo dài bass của hợp âm chủ, khép bằng kết chính cách hay plagal ở ba bè trên. Âm ngân **bắt đầu ở phách mạnh**; âm ngân chủ có thể theo ngay âm ngân át [^rimsky-korsakov-1886, tr. 88].
- Trên âm ngân được mọi hợp âm của giọng và cả lệch giọng — âm ngân dài thì lệch giọng "rất nên có". Trên âm ngân át ở Đô trưởng: lệch sang mọi giọng mức một; trên âm ngân chủ: sang hạ át thứ, trưởng và các giọng gần của nó [^rimsky-korsakov-1886, tr. 88 – 89].
- Âm giữ cũng có thể ở bè trên hay bè giữa; có cả âm ngân kép chủ – át ở các bè dưới [^rimsky-korsakov-1886, tr. 90].
- Bài tập: viết **prelude chuyển giọng** có âm ngân át trước khi trở về và âm ngân chủ để kết [^rimsky-korsakov-1886, tr. 89].

Xem [[bass-ngan]].

## Đối chiếu
Sách bốn tác giả giữ ý trung tâm của Rimsky-Korsakov — chuyển giọng **qua hợp âm chung**, phân biệt **chuyển hẳn** và **lệch giọng** — nhưng giải thích lệch giọng chủ yếu bằng **át phụ** (DD, D/S…) và gọi tên theo chức năng. Khái niệm "họ hàng mức hai" và cách lập kế hoạch qua giọng trung gian vẫn dùng trong giảng dạy.

## Bài tập
1. Liệt kê sáu giọng họ hàng mức một của Sol trưởng và Mi thứ theo định nghĩa của Rimsky-Korsakov.
2. Chuyển Đô – Rê thứ bằng cả cách không cromatic và cromatic.
3. Lập kế hoạch Đô → Rê và La thứ → Si thứ, tránh ba giọng cùng loại liền nhau.
4. Viết prelude 16 ô ở Fa trưởng, lệch giọng hai lần, có âm ngân át và âm ngân chủ.`,
  },
  {
    slug: 'rimsky-korsakov-hoa-am-5-hinh-hoa-giai-dieu',
    title: 'Rimsky-Korsakov, Phần IV: hình hoá giai điệu — nốt lướt, nốt thêu, nốt chờ, hình hoá nghiêm và tự do',
    category: 'harmony',
    aliases: ['Rimsky-Korsakov hình hoá giai điệu', 'мелодическая фигурация', 'cách viết âm giai cromatic', 'nốt chờ đi lên', 'nốt đón', 'nốt thoát', 'chorale hình hoá'],
    summary: 'Phần IV sách hoà âm Rimsky-Korsakov, § 64 – 76: nốt lướt diatonic và cromatic (cách viết âm giai cromatic ở trưởng và thứ), nốt thêu, nốt chờ đi xuống, đi lên, kép, chờ quãng 8 giảm; hình hoá giai điệu nghiêm, những điều cần tránh, chorale hình hoá ở ba bè dưới; hình hoá tự do: nốt thêu nhảy tới, nốt chờ không chuẩn bị, nốt đón, nốt thoát.',
    refs: [RK_REF],
    body: `## Hình hoá giai điệu là gì
Hình hoá giai điệu gồm **nốt lướt**, **nốt thêu** và **nốt chờ** — những âm làm giai điệu và các bè của hoà âm đơn giản thêm phong phú [^rimsky-korsakov-1886, tr. 91, 105]. Chúng xen kẽ trong một bè hoặc đồng thời ở nhiều bè.

## Nốt lướt (§ 64 – 67)
- Âm ở **phách tương đối yếu** lấp khoảng trống giữa hai âm hợp âm bằng bước liền. Khoảng quãng 3 chứa một nốt lướt diatonic, quãng 4 chứa hai. Gốc từ **âm giai trưởng tự nhiên** và **thứ giai điệu**. Một bè là nốt lướt đơn; hai, ba bè cùng lúc là kép, ba [^rimsky-korsakov-1886, tr. 91].
- **Nốt lướt không che được** tiến hành bị cấm. Nốt lướt kép đi **quãng 3 hay 6 song song** hoặc ngược hướng; nốt lướt ba: hai bè song song quãng 3/6, bè thứ ba ngược hướng, hoặc cả ba song song thành chuỗi hợp âm sáu [^rimsky-korsakov-1886, tr. 92].
- Có khi phải **nhân đôi bất thường** để có chỗ cho nốt lướt. "Đẹp nhất" là những nốt lướt tạo thành hợp âm ngẫu nhiên — **quãng 7 lướt, quãng 9 lướt** [^rimsky-korsakov-1886, tr. 92 – 93].

**Cách viết âm giai cromatic** (§ 66) [^rimsky-korsakov-1886, tr. 93 – 94]:
| | Đi lên | Đi xuống |
|---|---|---|
| **Trưởng** | Nâng mọi bậc của âm giai tự nhiên, **trừ bậc VI** — thay bằng hạ bậc VII | Hạ mọi bậc, **trừ bậc V** — thay bằng nâng bậc IV |
| **Thứ** | Viết như đi lên của **trưởng song song** (Đô thứ như Mi giáng trưởng) | Viết như đi xuống của **trưởng cùng tên** (Đô thứ như Đô trưởng) |

Với nốt lướt cromatic kép, ba, đôi khi chọn cách viết **dễ đọc hơn**. Nốt lướt cromatic đặt trong khoảng **một cung** giữa hai âm hợp âm (hay giữa nốt lướt diatonic); âm đã biến cromatic **không đồng thời với chính âm đó chưa biến** ở bè khác [^rimsky-korsakov-1886, tr. 94 – 95].

## Nốt thêu (§ 68)
Âm ở phách yếu giữa hai lần lặp của **cùng một âm hợp âm**, cách nó một bậc lên (**thêu trên**) hoặc xuống (**thêu dưới**); cách một cung hay nửa cung theo âm giai, nhưng có thể **kéo sát nửa cung** bằng dấu hoá — dấu hoá ấy không phải dấu hiệu chuyển giọng. Thêu trên quanh quãng 7 thì không được. Âm chính có thể đồng thời được nhân đôi ở bè khác cách ít nhất một quãng 8 (với quãng 3: chỉ ở hợp âm sáu, khi thêu trên). Thêu ở hai, ba bè đi song song quãng 3/6 hoặc ngược hướng, có khi tạo **hợp âm "giả"** [^rimsky-korsakov-1886, tr. 95 – 97].

## Nốt chờ (§ 69 – 72)
- Bè đi bậc liền bị **giữ lại** và vào hợp âm sau muộn: đó là **nốt chờ**, đi xuống hoặc đi lên. **Chính nốt chờ** ở phách tương đối mạnh; **chuẩn bị** ở phách yếu (hay phách mạnh trước); **giải quyết** ở phách yếu sau. Nốt chờ phải tạo **nghịch âm**; nốt chờ thuận ít nên dùng [^rimsky-korsakov-1886, tr. 98].
- Ở bè trên: **4 → 3, 7 → 6, 9 → 8**; ở bass: **2 → 3**. Chuẩn bị **không ngắn hơn** nốt chờ; nốt chờ **không che** quãng 5 – 8 song song [^rimsky-korsakov-1886, tr. 99].
- **Đi xuống**: âm giải quyết **không có mặt ở bè khác** lúc nốt chờ vang — trừ khi nó là âm gốc ở bass cách quãng 9. Trong khi nốt chờ giải quyết, các bè khác được đổi thể đảo hay sang hợp âm mới; có thể chèn nốt lướt [^rimsky-korsakov-1886, tr. 100 – 102].
- **Đi lên**: nửa cung đẹp hơn một cung; thường nhất là **nốt chờ âm dẫn**; âm giải quyết không có ở bè cao hơn. Nốt chờ kép, ba đi song song quãng 3/6 hoặc ngược hướng; hai nốt chờ sai riêng lẻ có khi ghép thành một nốt chờ đúng. Một số nốt chờ phức được vài tác giả coi là **hợp âm mười một, mười ba** [^rimsky-korsakov-1886, tr. 102 – 104].
- **Nốt chờ quãng 8 giảm** (hay đồng âm tăng) với bass của hợp âm bảy giảm: gặp khi chuyển cromatic sang thứ, ở kết ngắt trong trưởng, kết nửa trong thứ… [^rimsky-korsakov-1886, tr. 104].

## Hình hoá nghiêm (§ 73 – 74)
- Các âm hợp âm thuận và quãng 7 nhỏ được lấy và rời **bằng bước nhảy** tự do, vừa giữ chuyển động vừa tạo chỗ cho nốt chờ hay nốt lướt ở nơi "tưởng không thể": dẫn giọng nhảy thì không có chỗ cho nốt chờ, dẫn giọng liền bậc thì không có chỗ cho nốt lướt [^rimsky-korsakov-1886, tr. 105].
- Nốt lướt và nốt thêu đôi khi **ở phách mạnh**, nếu không tạo hợp âm mới; âm giải quyết của nghịch âm có thể ở bè khác cách quãng 8, nhưng **phải ở dưới**, và không được là quãng 3 của hợp âm [^rimsky-korsakov-1886, tr. 105 – 106]. Một số quãng 8, 5 "ẩn" trong hình hoá vẫn **bị coi là song song** và cấm; ở phách yếu thì được [^rimsky-korsakov-1886, tr. 107].
- **Cần tránh**: hình chỉ gồm nốt thêu; hình lặp âm hợp âm; nhiều hình liền chỉ có âm hợp âm (đó là hình hoá hoà âm); nhảy sau khi giải quyết nốt chờ; nhảy quãng 3 xuống sau âm dẫn ngắn; lặp âm giải quyết của nốt chờ; lặp ngay ở phách mạnh âm vừa kết thúc hình [^rimsky-korsakov-1886, tr. 108 – 109].
- **Chorale hình hoá**: giữ nguyên giai điệu chorale, ba bè dưới **duy trì chuyển động liên tục**, chỉ dừng ở fermata; không dùng nốt lướt cromatic. Phối giai điệu có sẵn hình hoá: các bè đệm giữ chuyển động khi giai điệu dừng [^rimsky-korsakov-1886, tr. 109].

## Hình hoá tự do (§ 75 – 76)
Các thủ pháp chính, chủ yếu để trang trí bè trên [^rimsky-korsakov-1886, tr. 112 – 116]:
1. **Nốt lướt và nốt thêu ở phách mạnh**.
2. **Nốt thêu nhảy tới**, ở phách mạnh hay yếu — cái ở phách mạnh còn gọi là **nốt chờ không chuẩn bị** (appoggiatura).
3. **Nhảy từ nốt thêu trên sang nốt thêu dưới** (hay ngược lại) rồi về âm chính.
4. **Nốt đón** (*предъём*, anticipation): âm của phách mạnh sau được lấy sớm ở phách yếu trước, rất ngắn; hay gặp ở kết cuối.
5. **Nhảy từ nghịch âm** — nghịch âm bỏ dở không giải quyết, khi gọi là **nốt thoát** (*переменные ноты*), khi xếp vào nốt đón; giải thích bằng việc bỏ bớt nốt lướt hay vì nó có mặt trong hợp âm sau.
6. **Nốt chờ được chuẩn bị nhưng rời bằng bước nhảy** (thường là quãng 9).

**Luật chung**: các nghịch âm ấy theo luật nốt chờ — không nhân đôi âm giải quyết ở bè khác, trừ âm gốc ở bass cách ít nhất một quãng 8 [^rimsky-korsakov-1886, tr. 113]. Quãng 5 song song sinh ra do nhảy tới nốt chờ không chuẩn bị "không có ý nghĩa" [^rimsky-korsakov-1886, tr. 114]. Theo tác giả, dùng đúng chỗ nốt đón, nốt thoát và nốt chờ bỏ dở "rất khó với học trò" [^rimsky-korsakov-1886, tr. 116].

Xem cách trình bày hiện đại: [[not-ngoai-hop-am]].

## Bài tập
1. Viết âm giai cromatic đi lên và đi xuống ở Rê trưởng và Si thứ đúng cách viết của § 66.
2. Viết chuỗi I – IV – V – I bốn bè, thêm nốt chờ 4 – 3 ở hợp âm át và 9 – 8 ở hợp âm chủ.
3. Phối một chorale ngắn, giữ giai điệu, cho ba bè dưới chạy móc đơn liên tục.`,
  },
  {
    slug: 'rimsky-korsakov-hoa-am-6-trung-am',
    title: 'Rimsky-Korsakov, Phần V: hợp âm biến đổi, trùng âm, tiến hành giả và chuyển giọng đột ngột',
    category: 'harmony',
    aliases: ['Rimsky-Korsakov trùng âm', 'tiến hành giả', 'ложные последовательности', 'kết giả', 'hợp âm bảy át giả', 'chuyển giọng đột ngột', 'phong cách hoà âm tinh tế', 'biến tấu hoà âm', 'prelude chuyển giọng'],
    summary: 'Phần V và phụ lục sách hoà âm Rimsky-Korsakov, § 77 – 96: hợp âm biến đổi cromatic (D7 giả và bảy giảm giả trên bậc II, hợp âm trưởng trên bậc II hạ — hợp âm sáu Napoli, D7 có quãng 5 hạ), hợp âm có quãng 5 tăng, năm hợp âm có quãng 6 tăng; trùng âm của hợp âm quãng 6 tăng, hợp âm bảy giảm (24 giọng), hợp âm ba tăng; tiến hành giả, kết giả, mô tiến chuyển giọng; ba phong cách hoà âm chorale; hình hoá hoà âm; các ngoại lệ của luật dẫn giọng; biến tấu hoà âm và prelude chuyển giọng mẫu.',
    refs: [RK_REF],
    body: `## Hợp âm biến đổi cromatic (§ 77 – 79)
Nốt lướt cromatic tạo nên một số hợp âm đã có giá trị độc lập — **hợp âm biến đổi**. Hai loại [^rimsky-korsakov-1886, tr. 118]:
1. Hợp âm quen thuộc nhưng xuất hiện **ở bậc không thể có** nếu không có nốt lướt cromatic: **hợp âm bảy át giả** trên bậc II, **hợp âm bảy giảm** trên bậc II nâng, **hợp âm ba trưởng trên bậc II hạ**.
2. Hợp âm **mới về cấu tạo**: hợp âm có **quãng 5 tăng** và **quãng 6 tăng**.

- **D7 giả**: nâng quãng 3 của II7 (ở trưởng); giải quyết về I hay V. **Bảy giảm giả**: nâng thêm âm gốc; chỉ về I. Cả hai thường ở dạng 6/5, 4/3 trong kết phức; cũng dùng độc lập sau I, VI, IV. Ở thứ, D7 giả trên bậc II còn phải nâng quãng 5; bảy giảm giả trên bậc II ở thứ không có, nhưng dựng được trên bậc IV nâng [^rimsky-korsakov-1886, tr. 118 – 119].
- **Hợp âm ba trưởng trên bậc II hạ** (từ hạ âm gốc của hợp âm II trong trưởng hay thứ hoà âm): dùng ở dạng **hợp âm sáu nhân đôi quãng 3 — "hợp âm sáu Napoli"**, giải quyết về K64 hay hợp âm chủ; cũng dùng độc lập, nhất là sau I trong kết phức; sang V hay V7 thì có một bè đi **quãng 3 giảm** xuống. Hạ bậc II cũng tạo **D7 có quãng 5 hạ**. Dùng trong bài chuyển giọng, "không lạm dụng" [^rimsky-korsakov-1886, tr. 120].

Xem [[hop-am-napoli]].

## Hợp âm có quãng 5 tăng (§ 80 – 81)
- **Hợp âm ba tăng**: nâng quãng 5 của hợp âm ba trưởng hay hạ âm gốc của hợp âm ba thứ. Ngoài vai trò hợp âm lướt cromatic, dùng độc lập khi được chuẩn bị bằng chính hợp âm nó giải quyết vào [^rimsky-korsakov-1886, tr. 121].
- **D7 có quãng 5 tăng** — chỉ ở trưởng; chuẩn bị bằng chính hợp âm giải quyết, hay bằng IV; thường xếp sao cho **quãng 3 giảm thành quãng 6 tăng**. Bốn bè thì có cả hợp âm chín có quãng 5 tăng [^rimsky-korsakov-1886, tr. 121 – 122].

Xem [[hop-am-ba-tang]].

## Hợp âm có quãng 6 tăng (§ 82)
Biến đổi cromatic các hợp âm bậc II và IV của trưởng và thứ hoà âm; để dễ nhìn, tác giả dựng tất cả **trên bậc VI** làm bass [^rimsky-korsakov-1886, tr. 122 – 123]:

| Hợp âm | Ở đâu | Tương đương trùng âm |
|---|---|---|
| **Hợp âm sáu tăng** | Trưởng và thứ | D7 thiếu |
| **Năm sáu tăng kép** | Chỉ trưởng | D7 có quãng 5 nâng |
| **Năm sáu tăng** | Chỉ thứ | D7 đầy đủ |
| **Ba bốn tăng** | Trưởng và thứ | Không giống hợp âm nào |
| **Ba bốn tăng kép** | Chỉ trưởng | D7 đầy đủ |

- Tất cả giải quyết về **hợp âm át** hay **hợp âm chủ bốn sáu**; ba bốn tăng thì cả hai như nhau. Hai âm của quãng 6 tăng **không bao giờ nhân đôi** [^rimsky-korsakov-1886, tr. 123].
- Vì **quãng 6 tăng = quãng 7 thứ** về âm thanh, vài hợp âm này nghe như D7 — đó là cơ sở của chuyển giọng trùng âm [^rimsky-korsakov-1886, tr. 123].
- Tác giả khuyên: dùng hợp âm quãng 6 và quãng 5 tăng **độc lập, không để chuyển giọng** thì "không nên cho học trò", vì làm bài "có vẻ kịch tính giả tạo và khoa trương"; dùng như hợp âm lướt thì được [^rimsky-korsakov-1886, tr. 123 – 124].

Xem [[hop-am-sau-tang]].

## Trùng âm và chuyển giọng đột ngột (§ 83 – 86)
Phương tiện chuyển giọng đột ngột: trùng âm của hợp âm quãng 6 tăng, của **hợp âm bảy giảm**, của **hợp âm ba tăng**, và các **tiến hành giả** [^rimsky-korsakov-1886, tr. 124].

- **Hợp âm quãng 6 tăng**: lấy D7 của giọng cũ (thiếu thì nhân đôi quãng 3), đọc lại thành hợp âm quãng 6 tăng, giải quyết về hợp âm ba hay K64 → sang giọng xa (từ Đô: Fa thăng, Si, Si thứ…). Thực hành: tìm D7 cao hơn nửa cung, hay hợp âm hai thấp hơn nửa cung, so với át của giọng mới; có được nó (trực tiếp hay bằng chuyển giọng ngắn nhất) rồi đọc lại và giải quyết [^rimsky-korsakov-1886, tr. 124 – 125].
- **Hợp âm bảy giảm**: một hợp âm bảy giải quyết được vào mọi hợp âm ba trừ hai hợp âm ba cấu thành nó → **6 cách** giải quyết; mỗi hợp âm bảy giảm có **3 cách viết trùng âm** khác → **24 cách**, nghĩa là dẫn được vào **bất kỳ giọng nào trong 24 giọng**. Thực hành: tìm hợp âm bảy giảm chứa âm chủ của giọng mới, xếp để giải quyết vào K64 của giọng mới; trước đó có thể biến nó thành hợp âm quãng 6 tăng bằng một nốt lướt cromatic [^rimsky-korsakov-1886, tr. 125 – 126].
- **Hợp âm ba tăng**: 4 cách giải quyết, 3 cách viết → **12 cách**; trong bốn bè hiếm khi dùng để chuyển giọng [^rimsky-korsakov-1886, tr. 127 – 128].

Xem [[hop-am-bay-giam]].

## Tiến hành giả (§ 87 – 92)
**Tiến hành giả** là nối hai hợp âm thuộc **hai giọng hay hai điệu thức khác nhau**. Điều kiện bắt buộc: **dẫn giọng thật êm, giữ âm chung tại chỗ**; càng nhiều âm chung càng "mềm và đẹp" [^rimsky-korsakov-1886, tr. 128].

- **Kết giả** ở trưởng: V hay V7 giải quyết vào **hợp âm trưởng trên bậc VI hạ** (mượn của thứ cùng tên) có nhân đôi quãng 3; dùng như kết ngắt, rồi thêm kết phức qua hạ át thứ, II6 của trưởng hoà âm hay hợp âm Napoli. Năm sáu tăng và bảy giảm trên IV nâng giải quyết vào K64 trong trưởng cũng giải thích bằng sự **mượn của thứ**. Một dạng khác: V đi vào bảy giảm trên IV nâng, rồi K64 và kết phức. Nên dùng các kết giả trước khi kết bài chuyển giọng [^rimsky-korsakov-1886, tr. 128 – 130].
- **Tiến hành giả của hợp âm ba**: hai hợp âm trưởng (hay hai thứ) cách nhau quãng 3 trưởng hay thứ; hợp âm trưởng với hợp âm sáu của hợp âm thứ thấp hơn quãng 3 trưởng; hợp âm thứ với hợp âm bốn sáu của hợp âm trưởng cao hơn quãng 3 trưởng [^rimsky-korsakov-1886, tr. 130].
- **Tiến hành giả của D7**: hợp âm ba với D7 cách quãng 3; D7 với hợp âm ba trưởng cách quãng 3; hai D7 cách quãng 3; hai D7 cách quãng 4 – 5 — loại sau rất thông dụng, sinh ra **mô tiến chuyển giọng liên tục** (mô tiến quãng 4 – 5 mà mọi hợp âm bảy đều biến thành D7), và nhờ đổi trùng âm một hợp âm, đưa về lại giọng ban đầu. Ngoài ra: hai D7 cách quãng 4 tăng / 5 giảm, và hợp âm ba cách quãng 4 tăng [^rimsky-korsakov-1886, tr. 131 – 132].
- **Dùng để chuyển giọng đột ngột**: áp dụng cho cả giọng gần và xa, nhưng **chuyển đột ngột chỉ nên đi tới họ hàng mức hai**; giọng xa hơn chỉ chuyển dần mới nối được thoả đáng. Lệch đột ngột sang giọng mức hai thì nên ngay sau đó sang giọng mức một đã bị bỏ qua rồi mới về giọng ban đầu; đôi khi về thẳng cũng đủ. Khi phối hoà âm giai điệu, tiến hành giả hợp nhất ở chỗ giai điệu có dạng mô tiến và sau các kết [^rimsky-korsakov-1886, tr. 133 – 134].

Xem [[trung-am-cromatic]].

## Ba phong cách hoà âm chorale (§ 93)
Mọi tổ hợp nghịch, chuyển giọng cromatic và đột ngột, tiến hành giả đều áp vào chorale được. Tác giả phân biệt **phong cách nghiêm**, **tự do** và phong cách thứ ba — **"phong cách hoà âm tinh tế"** (*изысканный гармонический стиль*). Bài tập 35: mỗi chorale phối **ba lần** — nghiêm bằng hợp âm; có nốt chờ, nốt lướt, hình hoá nghiêm ở ba bè dưới; và tự do với hợp âm nghịch, tiến hành giả [^rimsky-korsakov-1886, tr. 135].

## Ba phụ lục
- **Phụ lục I — hình hoá hoà âm** (§ 94): rải hợp âm, lấy các âm lần lượt theo thứ tự bất kỳ; chủ yếu để làm **phần đệm nhạc cụ**, thuộc môn sáng tác tự do. Có cả các hình hoá giai điệu trên âm ngân [^rimsky-korsakov-1886, tr. 136].
- **Phụ lục II — các ngoại lệ của luật dẫn giọng** (§ 95), "chỉ để biết, nên tránh": quãng 5 giảm – đúng ở bè giữa khi VII6 → I6; quãng 7 của D4/3 đi lên khi bè giữa giữ âm át; quãng 7 át đi lên ở alto khi xếp gần, bass đi xuống; quãng 5 đúng song song khi giải quyết năm sáu tăng; quãng 5 song song sau kết khi mở câu mới; quãng 5 đúng (song song hay ngược) ở kết cuối để có hợp âm chủ đầy đủ; quãng 2 tăng (1½ cung) của âm giai thứ hoà âm ở giai điệu [^rimsky-korsakov-1886, tr. 136 – 138].
- **Phụ lục III — tiến hành giả kiểu mô tiến** (§ 96): âm giai cromatic đi xuống ở bass phối bằng chuỗi năm sáu tăng; âm giai toàn cung đi xuống ở bass phối bằng chuỗi D7; chuỗi bảy giảm cromatic lên xuống; chuỗi hợp âm sáu trưởng cromatic trên âm ngân [^rimsky-korsakov-1886, tr. 138 – 139].

## Mẫu: biến tấu hoà âm và prelude chuyển giọng
Khi đã vững, học trò viết **prelude chuyển giọng tự do bốn bè**, hai hay ba đoạn, và **biến tấu hoà âm** trên một câu cho sẵn; sách in mẫu: các biến tấu "kiểu chorale", hình hoá giai điệu ở bè trên, phối lại bằng tiến hành giả… và một prelude chuyển giọng dùng mọi phương tiện hoà âm (từ bản 16 là mẫu của N. A. Sokolov) [^rimsky-korsakov-1886, tr. 139 – 141]. Sau đó là phần bài tập (bè trầm và giai điệu cho sẵn) [^rimsky-korsakov-1886, tr. 142 – 148].

## Đối chiếu
Sách bốn tác giả học hợp âm Napoli, hợp âm quãng 6 tăng, hợp âm bảy giảm và chuyển giọng trùng âm ở cuối giáo trình (chủ đề 52 – 59 trở đi), cùng tên gọi; khái niệm "tiến hành giả" của Rimsky-Korsakov tương ứng phần **quan hệ trung âm** và **chuyển giọng đột ngột** trong cách trình bày hiện đại — xem [[trung-am-cromatic]], [[hop-am-not-chung]].

## Bài tập
1. Từ Đô trưởng chuyển sang Si trưởng bằng trùng âm D7 = hợp âm sáu tăng.
2. Dùng một hợp âm bảy giảm để đi sang bốn giọng khác nhau.
3. Viết kết giả V7 – ♭VI ở Đô trưởng rồi kết phức về Đô.
4. Phối một câu chorale ba lần: nghiêm, có hình hoá, và "tinh tế".`,
  },
]
