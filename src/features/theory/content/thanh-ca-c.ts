import type { Article } from '../wiki'

/** Thánh ca Việt Nam — lý thuyết và hội nhập. Nguồn ghi trong `refs` từng bài. */
export const thanhCaC: Article[] = [
  {
    slug: "thanh-dieu-va-giai-dieu-thanh-ca",
    title: "Thanh điệu và giai điệu thánh ca",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["sáu thanh điệu và thánh ca", "dấu giọng và giai điệu", "thanh điệu tiếng Việt trong thánh ca"],
    summary: "Tiếng Việt có sáu thanh (năm hoặc bốn ở một số vùng) nên giai điệu đặt cho lời Việt dễ làm đổi nghĩa; bài đối chiếu bốn hệ mô tả khác nhau (Thảo, Ngọc Kôn, Hoàng Kiều, Hà Nội) và văn kiện HDMVTN số 148 – 149.",
    refs: [
      ["Nguyễn Xuân Thảo — Music Ministry: The Inculturation of Liturgical Vocal Music in Vietnam, luận án D.Min., Catholic Theological Union, 2007, Chương II, tr. 63 – 184", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
      ["Trần Văn Khê — Lời giới thiệu luận án của Nguyễn Xuân Thảo (Bình Thạnh, 18/04/2008)", "https://nghiasinh.org/userfiles/tonghop/08_2008/NXT-TVK.pdf"],
      ["Ủy ban Thánh nhạc HĐGMVN — Hướng dẫn mục vụ Thánh nhạc (bản cập nhật 12/2022), số 148 – 149", "https://hdgmvietnam.com/chi-tiet/uy-ban-thanh-nhac-tai-lieu-huong-dan-muc-vu-thanh-nhac-ban-cap-nhat-thang-12-2022--50722"],
      ["Ngọc Kôn — Sáng tác Đáp ca & Đối ca (loạt Thánh nhạc ngày nay, 2012)", "http://www.thanhnhacngaynay.vn/pictures/DAY-HOC%20SANG%20TAC%20THANH%20CA%20PHUNG%20VU%281%29.pdf"],
      ["Trần Thị Thu Hà, Trần Ngọc Lan, Bùi Huyền Nga — Thanh điệu tiếng Việt và Âm nhạc cổ truyền của Hoàng Kiều: tổng quan, Tạp chí Giáo dục Nghệ thuật số 57/2025", "https://vjol.info.vn/tcgiaoducnghethuat/article/view/138810"],
      ["Hùng Luân — Ngắm nguyện, một truyền thống cần gìn giữ, Báo Công giáo và Dân tộc, 06/03/2024", "https://www.cgvdt.vn/public/ngam-nguyen-mot-truyen-thong-can-gin-giu_a18277"],
      ["Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam, Boston University, 2009", "https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download"],
      ["Thánh bộ Nghi lễ — Huấn thị Musicam Sacram (5/3/1967), số 54", "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_instr_19670305_musicam-sacram_en.html"],
    ],
    body: `
## Vì sao đây là bài toán riêng

Tiếng Việt đơn âm tiết và có thanh điệu: cùng một âm "ma" đổi nghĩa theo sáu thanh (ma, mà, má, mả, mã, mạ). Tùng Công Kiều lập bảng sáu thanh này kèm bản ký âm thanh điệu của Trần Văn Khê (1962) (Kiều 2009, tr. 72). Khi một nhạc sĩ đặt giai điệu lên lời, cao độ có thể đi cùng hoặc đi ngược đường nét của thanh; đi ngược thì người nghe dễ nghe ra một từ khác, hoặc ít nhất thấy câu hát "lạ tai".

Văn kiện của Giáo hội Việt Nam nói thẳng điều này. Hướng dẫn mục vụ Thánh nhạc số 148 ghi rằng tiếng Việt "có tới sáu thanh điệu" nên việc hoà hợp thanh điệu với nốt nhạc "không phải luôn dễ dàng"; số 149 nhắc rằng nếu mỗi âm điệu đòi sửa bản văn thì bản văn phụng vụ sẽ lộn xộn, và các nhạc sĩ được yêu cầu chấp nhận "hy sinh cần thiết". Cùng chiều ấy, Huấn thị Musicam Sacram số 54 yêu cầu bản dịch để phổ nhạc tôn trọng "bản tính và luật của mỗi ngôn ngữ". Hai văn kiện chỉ nêu nguyên tắc, không đưa ra bảng quy tắc cao độ cho từng thanh.

## Điều luận án Thảo (2007) ghi nhận

Nguyễn Xuân Thảo khảo sát quan hệ thanh điệu – giai điệu chủ yếu trong dân ca, rồi mang sang cung kinh và thánh ca (Thảo 2007, Chương II). Một số điểm:

- Số thanh khác nhau theo vùng: Bắc 6 thanh; Nam Trung bộ và Nam 5 thanh (mã trùng mả); Bắc Trung bộ gần 4 (tr. 67).
- Thanh "đơn" (ngang, huyền, sắc) diễn được bằng một cao độ; thanh "kép" (ngã, hỏi, nặng) cần ít nhất hai cao độ. Sắc phần lớn cao hơn ngang; ngã đôi khi bắt đầu thấp hơn ngang (tr. 67).
- Các bản ký âm thanh điệu (Taberd 1838, Lê Văn Lý 1948, Trần Văn Khê 1962, Phạm Duy, Đoàn Xuân Kiên) chỉ cho kết quả xấp xỉ (tr. 67 – 68).
- Nguyên tắc chung là đường nét giai điệu lên hoặc xuống theo thanh điệu của lời (tr. 154, Thảo dẫn Trần Linh Quý – Hồng Thao 1997).
- Trong hò, hát ru, ngâm, mỗi thanh gắn với một số bậc cố định của điệu thức nên giai điệu "dự đoán được nếu biết lời" (tr. 155 – 156). Trong lý và hát, nhạc tự do hơn; khoảng tối thiểu để phân biệt huyền/nặng – ngang – sắc là một quãng 2 trưởng (tr. 156 – 157).
- Thực hành: gần như mọi ca viên tự thêm "vỗ" (láy lại nốt đầu) cho thanh nặng khi hát "Lạy Mẹ xin yên ủi" (chú thích 366, tr. 156).

Trần Văn Khê, trong lời giới thiệu luận án, nhận xét Thảo "nêu rõ sự liên quan mật thiết giữa thanh giọng và nét nhạc". Đây là lời giới thiệu mang tính khen, không phải phản biện độc lập.

## Bốn hệ mô tả, không gộp thành một quy tắc

Các nguồn dưới đây không nói cùng một đối tượng, và không thống nhất về từng thanh. Người biên soạn cho rằng không nên rút thành một bảng duy nhất.

| Hệ | Đối tượng | Điều được nói |
|---|---|---|
| Thảo 2007 | dân ca, cung kinh | thanh đơn một cao độ, thanh kép hai cao độ; sắc cao hơn ngang |
| Ngọc Kôn 2012 | xướng thánh vịnh (đề xuất của một người soạn) | ba "dấu trụ": cao cho sắc, ngã; trung cho ngang; trầm cho huyền, hỏi, nặng |
| Hoàng Kiều (qua tổng quan 2025) | làn điệu chèo | sắc có xu hướng đi lên, huyền hạ thấp, hỏi – ngã luyến uốn phức tạp hơn |
| Hà Nội (Hùng Luân 2024) | ngắm Mùa Chay | hai nhóm: nặng, huyền, hỏi thấp; không dấu, sắc, ngã cao |

Hai chỗ lệch đáng để ý: Ngọc Kôn xếp ngang ở bậc trung, còn cách ngắm ở Hà Nội xếp không dấu cùng nhóm cao với sắc; Thảo mô tả ngã đôi khi khởi đầu thấp hơn ngang, trong khi Ngọc Kôn xếp ngã cùng bậc cao với sắc. Một bảng gán nốt cho sáu thanh còn lưu hành trên trang bách khoa mở (ngang, sắc = mi; huyền = si; nặng = rê; hỏi, ngã = rê – mi) chưa tìm ra được nguồn gốc trong các tài liệu đã đọc, nên bài này không dùng.

## Điều chưa rõ

Người biên soạn chưa tìm thấy văn bản của Kim Long, Văn Chi hay Hải Linh nói trực tiếp về luật dấu giọng khi phổ nhạc. Nghiên cứu đo đạc có hệ thống về thánh ca cũng chưa thấy. Một phương pháp gợi ý là của Phan Gia Anh Thư và Ngô Thanh Nhàn (2017): vẽ đồ thị cao độ từ phổ tần số cho một bài dân ca Nam bộ; xem [[hoang-kieu-thanh-dieu-va-dieu-thuc]].

## Câu hỏi ôn tập

- Vì sao thanh nặng, hỏi, ngã được gọi là thanh "kép" trong mô tả của Thảo?
- Số 148 – 149 của Hướng dẫn mục vụ Thánh nhạc đặt nhạc sĩ vào thế khó nào?
- Vì sao không nên coi bảng ba "dấu trụ" của Ngọc Kôn là quy định chính thức?
- Nêu một chỗ hai nguồn trong bảng trên xếp cùng một thanh vào hai nhóm khác nhau.

**Xem thêm:** [[dau-giong-trong-hop-xuong]], [[cung-kinh-cung-sach]], [[thanh-vinh-dap-ca-va-dau-tru]], [[am-nhac-va-ngon-ngu]], [[thanh-ca-viet-nam]]
`,
  },
  {
    slug: "cung-kinh-cung-sach",
    title: "Cung kinh và cung sách",
    category: 'thanhca',
    also: ['vietnam', 'sacred'],
    aliases: ["đọc kinh", "cung đọc kinh", "cung đọc sách", "cung Vui cung Thương cung Mừng", "15 công thức cung kinh"],
    summary: "Cách người Công giáo Việt Nam ngâm lời kinh và đọc sách theo công thức vài nốt, chia ba sắc thái Vui, Thương, Mừng; luận án Thảo (2007) liệt kê 15 công thức đơn giản ở bảng 2.91.",
    refs: [
      ["Nguyễn Xuân Thảo — Music Ministry: The Inculturation of Liturgical Vocal Music in Vietnam, luận án D.Min., CTU, 2007, Chương II, tr. 63 – 184", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
      ["Trần Văn Khê — Lời giới thiệu luận án của Nguyễn Xuân Thảo (2008)", "https://nghiasinh.org/userfiles/tonghop/08_2008/NXT-TVK.pdf"],
      ["Nguyễn Bách — luận án tiến sĩ về nhạc hợp xướng ở Sài Gòn trước 1975 và TP.HCM, Học viện Âm nhạc Quốc gia Việt Nam, 2015, chú thích 10", "https://vnam.edu.vn/rs/Document/2015-NguyenBach-LATS.pdf"],
      ["Ủy ban Thánh nhạc HĐGMVN — Hướng dẫn mục vụ Thánh nhạc (bản cập nhật 12/2022), số 90 – 91", "https://hdgmvietnam.com/chi-tiet/uy-ban-thanh-nhac-tai-lieu-huong-dan-muc-vu-thanh-nhac-ban-cap-nhat-thang-12-2022--50722"],
    ],
    body: `
## Hai thuật ngữ

Trong Công giáo Việt Nam, lời kinh và sách được ngâm theo "cung đọc kinh" (cung kinh) cho cộng đoàn, và "cung đọc sách" (cung sách) cho người đọc đơn ca. Cung đọc sách thường nhiều luyến hơn cung kinh. Mỗi cung thay đổi theo giọng nói của giáo phận, đôi khi theo loại kinh, chủ yếu theo mùa phụng vụ (Thảo 2007, tr. 167 – 168). Hướng dẫn mục vụ Thánh nhạc số 90 – 91 vẫn dùng các thuật ngữ cung kinh, cung sách, cung ca khi bàn về nhạc cụ và cách hát, nghĩa là chúng còn sống trong văn kiện hiện hành.

Trần Văn Khê, trong lời giới thiệu luận án của Nguyễn Xuân Thảo, cho rằng đây là lần đầu có một bức tranh khá đầy đủ về cung kinh, cung sách và các thánh ca dân gian đạo đức của Công giáo Việt Nam. Người biên soạn ghi đó là nhận định của Khê, không phải kết quả đối chiếu độc lập.

## Ba sắc thái và 15 công thức

Thảo chia cung kinh – cung sách thành ba sắc thái: Cung Vui, Cung Thương (dùng ở mùa Vọng và mùa Chay) và Cung Mừng, gắn với ba điệu thức dân ca Xang, Xự, Xê (tr. 172). Bảng 2.91 liệt kê 15 công thức đơn giản, quy về vị trí Fa (tr. 171 – 172):

| Số nốt | Công thức |
|---|---|
| Hai nốt | Re – Fa (cung thương) |
| Ba nốt | Fa – (Sol) – La; Fa – Sol – La; Re – Fa – Sol; Do – Re – Fa; La – Re – Fa; Do – Fa – La |
| Bốn nốt | Re – (Fa) – Sol – La; Re – Fa – Sol – La; Do – Re – Fa – Sol; La – (Do) – Re – Fa; La – Re – Fa – (Sol) |
| Năm nốt | Do – (Re) – Fa – (Sol) – La |

Nốt đặt trong ngoặc là nốt có thể có hoặc không. Cùng ba nốt Re – Fa – Sol vẫn cho cảm xúc khác nhau tuỳ nốt nào gánh thanh nào và nốt nào kết câu. Ở Cung Thương 1, hai nốt fa – sol gánh ba thanh huyền, hỏi, nặng nên giọng trầm mặc; việc không phân biệt hai thanh cao là ngang và sắc làm âm nghe buồn. Cung Thương 2 (gọi là Mũi Né) dừng ở sol – fa nên buồn hơn (tr. 172).

Một công thức có thể đổi giữa chừng. Kinh Vua Đavít (Thánh vịnh 130) mở bằng Cung Thương La – Do (hoặc Re – Fa), chuyển sang Mi – La – Do, rồi kết bằng Cung Vui Sol – La – Si (tr. 172, thí dụ 2.50).

Trong đọc kinh, sự phân biệt giữa thanh cao và thanh thấp chỉ được phép ở mức tối thiểu (chú thích 361, tr. 155). Về tốc độ, Thảo ghi theo kinh nghiệm cá nhân: cung thương mùa Chay khoảng 96 – 120 tiếng (móc đơn) mỗi phút, vừa 130 – 150, nhanh 170 – 200 (chú thích 431, tr. 173). Đây không phải số đo từ khảo sát.

## Những bài đã được nêu tên

Thảo nêu Kinh Ăn Năn Tội, Kinh Cầu Chịu Nạn, Ngắm Năm Sự Thương, Ngắm Đàng Thánh Giá (tr. 173), và các sách đọc như Sách Ngắm Thương Khó, Sách Than Mồ, Ngắm Lễ, Sử Ký Hội Thánh, Sách Giảng Cấm Phòng, Ngắm 15 Sự Thương Khó (tr. khoảng 134 – 135 và 156). Về lịch sử, Thảo dẫn Tissanier (1663, qua Nguyễn Khắc Xuyên 1991) rằng ở Đàng Ngoài tín hữu đọc kinh tại nhà hai lần mỗi ngày, mỗi cộng đoàn có thầy giảng đọc sách vào Chúa nhật (tr. 71); người biên soạn chưa đối chiếu được bản gốc của Tissanier.

## Điều chưa rõ

- Nguyễn Bách ghi (chú thích 10) rằng cung đọc kinh thường chỉ gồm ba cao độ Mi, Sol, La, trong khi Thảo dùng công thức Fa – Sol – La và Re – Fa – Sol quy về vị trí Fa. Hai cách ghi có thể khớp nhau nếu chuyển vị, nhưng người biên soạn không đồng nhất chúng khi chưa kiểm.
- Bảng gán nốt theo từng thanh và khái niệm "dấu trụ" hai hay ba nốt theo giáo phận trên một trang bách khoa mở chưa tìm thấy trong chương II của Thảo; có thể nằm ở các chương khác chưa đọc hoặc trong hai bài của Zaragoza và của Thảo – Zaragoza về đọc kinh, chưa đọc được nguyên văn.
- Đặc điểm cụ thể giọng đọc kinh từng miền (Bắc, Huế, Nam, Thanh – Nghệ…) chưa có ký âm đọc được.

## Câu hỏi ôn tập

- Phân biệt cung kinh và cung sách về người hát và mức luyến.
- Ba sắc thái Vui, Thương, Mừng gắn với những điệu thức nào và dùng ở mùa nào?
- Vì sao cùng ba nốt Re – Fa – Sol vẫn cho cảm xúc khác nhau?
- Số 96 – 120 tiếng mỗi phút của Thảo có phải kết quả khảo sát không?

**Xem thêm:** [[ngam-mua-chay]], [[thanh-ca-co-truyen-va-van-dang-hoa]], [[thanh-dieu-va-giai-dieu-thanh-ca]], [[luan-an-xuan-thao-2007]], [[am-nhac-ton-giao-va-dan-toc-viet-nam]]
`,
  },
  {
    slug: "ngam-mua-chay",
    title: "Ngắm Mùa Chay",
    category: 'thanhca',
    also: ['vietnam', 'sacred'],
    aliases: ["ngắm", "ngắm 15 sự thương khó", "ngắm mười lăm sự thương khó", "ngắm đứng", "than mồ", "Lễ Đèn"],
    summary: "Truyền thống ngâm mười lăm đoạn suy niệm Thương khó trong Mùa Chay, có từ thời Alexandre de Rhodes theo một nguồn sơ cấp, nhưng tác giả và niên đại bản văn hiện dùng chưa có bằng chứng; ở Phát Diệm có biến thể Ngắm đứng và Than mồ của giáo dân Mường.",
    refs: [
      ["Alexandre de Rhodes — Lịch sử vương quốc Đàng Ngoài, bản dịch Việt Hồng Nhuệ, Ủy ban Đoàn kết Công giáo TP.HCM, 1994 (bản quét)", "https://archive.org/details/lichsuvuongquocdangngoai"],
      ["CNA / Catholic World Report — This unique chant brings Vietnamese Catholics deeper into Christ's Passion (gốc 25/3/2016)", "https://www.catholicworldreport.com/2019/04/19/this-unique-chant-brings-vietnamese-catholics-deeper-into-christs-passion-2/"],
      ["Hùng Luân — Ngắm nguyện, một truyền thống cần gìn giữ, Báo Công giáo và Dân tộc, 06/03/2024", "https://www.cgvdt.vn/public/ngam-nguyen-mot-truyen-thong-can-gin-giu_a18277"],
      ["Nguyễn Thanh Quang — Thừa sai Girolamo Maiorica, người đầu tiên viết văn xuôi bằng chữ Nôm", "https://giaophankontum.com/muc-vu/van-hoa-lich-su/thua-sai-girolamo-maiorica-nguoi-dau-tien-viet-van-xuoi-bang-chu-nom"],
      ["Bùi Trung Thành — Đặc trưng văn hóa âm nhạc Công giáo của giáo dân giáo xứ Đồng Bài và An Ngải hiện nay, Nghiên cứu Tôn giáo số 9 (2024), tr. 27 – 42", "https://vjol.info.vn/rsr/article/view/126427"],
      ["Bùi Trung Thành — Tiếp biến văn hóa âm nhạc Công giáo trong nhạc cụ và nhạc hát ở Việt Nam, Tạp chí Dân tộc học và Tôn giáo học số 1 (06), 2026, tr. 110 – 125", "https://vjol.info.vn/tcdantochocvatongiaohoc/article/view/135319"],
      ["Nguyễn Xuân Thảo — Music Ministry (luận án D.Min., CTU, 2007), Chương II", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
    ],
    body: `
## Ngắm là gì

"Ngắm" (còn gọi Ngắm mười lăm sự thương khó, Ngắm đứng ở miền Bắc, và "Lễ Đèn" ở miền Nam theo Hùng Luân 2024) là lòng đạo đức bình dân trong Mùa Chay: mười lăm đoạn suy niệm về cuộc Thương khó, từ Giuđa phản bội đến nhát đòng đâm cạnh sườn. Theo bản tin của CNA, giữa các đoạn cộng đoàn đọc một kinh Lạy Cha và mười kinh Kính Mừng; bản văn xưa viết chữ Nôm, sang thế kỷ XX in chữ quốc ngữ; nghi thức hát không nhạc cụ, giai điệu ai oán và có thể kéo dài trên hai giờ. Số kinh Kính Mừng giữa các đoạn được ghi khác nhau ở các nguồn (7 theo một trang bách khoa mở, 10 theo CNA, và "mười kinh chuỗi hạt" trong lời Rhodes); có thể do khác biệt vùng hoặc thời, người biên soạn chưa có sách nghi thức từng giáo phận để đối chiếu.

Một nguồn tiếng Việt đã đọc ghi sách ngắm cổ nhất có năm là "Sách Ngắm Mười Lăm Sự Thương Khó Đức Chúa Giêsu" của giáo phận Vinh, in năm 1941; ngắm được truyền khẩu trong giáo xứ, từ 2013 có hội thi cấp giáo tỉnh Hà Nội (Hùng Luân 2024). Về giọng, Hùng Luân cho biết ở Hà Nội ngắm dùng hai nhóm cao độ theo dấu thanh: nặng, huyền, hỏi thấp; không dấu, sắc, ngã cao.

## Thời Rhodes: điều có bằng chứng và điều chưa

Trong sách về Đàng Ngoài (bản dịch Việt 1994), Alexandre de Rhodes kể rằng vì ít người và giáo dân tân tòng chưa biết chữ Latinh, ông không cử hành kinh đêm Tuần Thánh theo lệ thường; ông "chia các mầu nhiệm thương khó làm mười lăm đề tài chính", sau khi đọc chung mười kinh chuỗi hạt thì ngắm một đoạn và tắt một trong mười lăm ngọn nến "theo tục lệ trong Giáo hội Rôma". Giáo dân khóc lóc đến mức ông phải khuyên họ kiềm chế. Đây là bằng chứng văn bản sớm nhất mà các tài liệu đã đọc đưa ra cho một nghi thức mười lăm sự thương khó kèm mười lăm ngọn nến ở Đàng Ngoài. Đoạn này không nói bản văn vần hiện dùng do ai soạn, cũng không nói giai điệu.

Nhiều trang tiếng Việt và tiếng Anh gán thẳng bản ngắm cho Rhodes, nhưng không dẫn bằng chứng. Thảo (2007, tr. 71) dẫn Tissanier (1663, qua Nguyễn Khắc Xuyên 1991) rằng Rhodes soạn mười lăm sự thương khó bằng tiếng miền Bắc; người biên soạn chưa đối chiếu được gốc. Danh mục tác phẩm Maiorica đã chụp ảnh có "Ngắm lễ trong mùa Phục Sinh tháng bảy" (1634) và "Những điều ngắm trong các ngày lễ trọng", không có đầu sách mang tên thương khó. Một trang bách khoa mở còn ghi "bộ suy niệm Thương khó 1865" và gắn với "Vincentian order"; cả hai chi tiết không kiểm được, và chi tiết sau lệch với lời Rhodes (ông nói theo tục lệ Giáo hội Rôma). Vì vậy bài này không khẳng định tác giả hay niên đại của bản văn.

## Cung ngắm và biến thể

Một trang bách khoa mở tiếng Việt chia cung ngắm miền Bắc thành "cung triều" (Hà Nội, Hưng Hoá, Phát Diệm, Thanh Hoá, Vinh – Hà Tĩnh) và "cung dòng" (Bùi Chu, Thái Bình, Hải Phòng, Bắc Ninh, Lạng Sơn), tuỳ giáo phận trước thuộc Hội Thừa sai Paris hay Dòng Đa Minh; đoạn này không có nguồn riêng nên chỉ ghi như một điều cần kiểm.

Bùi Trung Thành (2024, tr. 33 – 34) mô tả ở hai giáo xứ Mường Đồng Bài và An Ngải (giáo phận Phát Diệm): Ngắm Mười lăm Sự Thương Khó ("Ngắm đứng") và Than mồ mùa Chay có từ thời "cha Đắc Lộ" nhưng "làn điệu gốc hầu như đã biến đổi"; giáo dân xen vào làn Bộ Mẹng, Rằng Thường của người Mường và lối ngân "í i" của dân ca, chèo. Ngắm đứng, tháo đinh, táng xác được tác giả liên hệ với tục hèm ở đình làng, và ngắm dùng trống con để mở đầu và dẫn đoàn (Bùi Trung Thành 2026). Đây là nhận định của tác giả, không kèm ký âm. Thảo cũng nêu Sách Than Mồ trong số các sách đọc của giáo dân. Về Mường, xem [[thanh-nhac-nguoi-muong-phat-diem]].

## Điều chưa rõ

Chưa có công trình dân tộc nhạc học độc lập về ký âm ngắm và than mồ ngoài chương II của Thảo và bài của Bùi Trung Thành; bài của Nguyễn Long Thao (2017) về phong tục ngắm chưa đọc được.

## Câu hỏi ôn tập

- Điều gì trong sách của Rhodes là bằng chứng cho nghi thức mười lăm sự thương khó, và điều gì không?
- Vì sao bài này không khẳng định Rhodes hay Maiorica là tác giả bản văn ngắm?
- Hà Nội ngắm theo hai nhóm cao độ nào?
- Ở Đồng Bài và An Ngải, giáo dân đã xen những làn điệu nào vào ngắm?

**Xem thêm:** [[dem-tuan-thanh-thoi-rhodes]], [[maiorica-va-sach-nom-cong-giao]], [[cung-kinh-cung-sach]], [[thanh-nhac-nguoi-muong-phat-diem]], [[ca-van-va-van-van-cong-giao]]
`,
  },
  {
    slug: "thanh-ca-co-truyen-va-van-dang-hoa",
    title: "Thánh ca cổ truyền và vãn dâng hoa",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["vãn dâng hoa", "bộ vãn dâng hoa", "điệu Xang Xự Xê Liu", "thánh ca cổ truyền"],
    summary: "Nhóm bài hát của giáo dân theo thang ngũ cung, phần lớn ở ba điệu Xang, Xự, Xê (có thêm Liu); Thảo (2007, tr. 174 – 179) liệt kê bài theo điệu và mô tả bộ vãn dâng hoa ba phần.",
    refs: [
      ["Nguyễn Xuân Thảo — Music Ministry: The Inculturation of Liturgical Vocal Music in Vietnam, luận án D.Min., CTU, 2007, Chương II, tr. 174 – 179", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
      ["Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam, Boston University, 2009 (chương V)", "https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download"],
      ["Trần Văn Khê — Lời giới thiệu luận án của Nguyễn Xuân Thảo (2008)", "https://nghiasinh.org/userfiles/tonghop/08_2008/NXT-TVK.pdf"],
    ],
    body: `
## Thánh ca cổ truyền là gì

Trong chương II luận án của mình, Nguyễn Xuân Thảo xếp "thánh ca cổ truyền" của giáo dân vào tầng giữa, nằm giữa dân ca và nhạc của Hải Linh. Thảo nhận xét mọi bài loại này đều dùng thang ngũ cung, và phần lớn thuộc ba điệu thức chính của dân ca là Xang, Xự, Xê (Thảo 2007, tr. 174). Kiều cũng nêu bốn điệu chính Hò, Xự, Xang, Xê khi bàn về sáng tác dựa trên dân ca (Kiều 2009, chương V). Nhãn Xang, Xự, Xê, Liu là nhãn của Thảo theo Lư Nhất Vũ và Phạm Duy, khác với hệ năm cung Nam – Pha – Huỳnh – Bắc – Nao của Hoàng Kiều; hai hệ cần được ghi rõ khi so sánh (xem [[hoang-kieu-thanh-dieu-va-dieu-thuc]]).

## Bài theo điệu thức

| Điệu | Bài do Thảo liệt kê |
|---|---|
| Xang | Hoa đỏ hồng hồng 2, Dâng bộ khải hoàn, Thánh Tô-ma |
| Xự | Hãy hiệp vui, Này sắc hoa vàng, Hoa đỏ hồng hồng 1, Tiến hoa, Dâng tấm lòng thành |
| Xê | Lạy Nữ Vương, Phục vọng khấu đầu, Hoa dâng thơm tho, Đức đồng trinh, Lòng yêu dấu, Hoa bốn mùa |

Theo Thảo, điệu Xê phổ biến ở thánh ca cổ truyền hơn ở dân ca thế tục (tr. 174 – 176). Ngoài ba điệu trên còn có điệu Liu, khác Xê ở cấu trúc bước (1 – 1½ – 1 – 1 – 1½), và những bài hoà trộn Xự – Liu. Chuyển hệ (đổi chủ âm giữa bài) thường gặp, thí dụ Bộ vãn tứ cảnh B, hay Vãn dâng bộ khải hoàn chuyển xuống Mi giáng, điệu Xự (tr. 176 – 178).

## Bộ vãn dâng hoa

Bộ vãn dâng hoa gồm ba phần: A dẫn nhập, B dâng hoa, C tạ ơn. Thảo mô tả đây là hình thức đơn điệu ba phần có tính thống nhất nội tại; ông ghi rằng Tiến Dũng so sánh với fuga (tr. 179, chú thích 450 – 453). Nguồn nhạc mà Thảo dùng là tuyển tập của Hải Linh, giáo trình sáng tác của Tiến Dũng và tư liệu của chính ông.

Một nhận xét kỹ thuật đáng nhớ: ở các bài này, đôi khi thanh điệu của khổ sau bị giai điệu khổ đầu "che mờ", thí dụ "lạy, Mẹ… Mẹ" (thí dụ 2.55); nhạc vẫn làm nổi lời qua nhịp, điệu thức và chuyển hệ, một vai trò Thảo gọi là làm giàu nghi lễ (tr. 178 – 179). Đây là hiện tượng chung của thánh ca khổ (strophic): một giai điệu phải phục vụ nhiều khổ lời có thanh điệu khác nhau; xem [[thanh-dieu-va-giai-dieu-thanh-ca]].

## Vì sao nhóm bài này quan trọng

Theo Trần Văn Khê, luận án của Thảo lần đầu trình bày khá đầy đủ về cung kinh, cung sách và các ca vãn đậm nét dân ca trong Công giáo Việt Nam, vốn ít được nhắc trước đó. Với người nghiên cứu, nhóm bài này cho thấy phần đã có sẵn trong thực hành của giáo dân trước khi có phong trào sáng tác mới; xem thêm [[ca-van-va-van-van-cong-giao]] về dòng văn vần từ thế kỷ XVII.

## Điều chưa rõ

Bài mới dựa vào chương II (tr. 63 – 184) của luận án; các chương khác chưa đọc. Tuổi của từng bài trong danh sách và người soạn chưa được ghi trong phần đã đọc.

## Câu hỏi ôn tập

- Ba điệu thức chính của thánh ca cổ truyền theo Thảo là gì?
- Bộ vãn dâng hoa có ba phần nào?
- "Che mờ thanh điệu" ở khổ sau là gì, và vì sao nó xảy ra?
- Vì sao nhãn Xang, Xự, Xê không đồng nhất với hệ của Hoàng Kiều?

**Xem thêm:** [[cung-kinh-cung-sach]], [[ngu-cung-trong-thanh-ca]], [[hai-linh]], [[tien-dung]], [[am-giai-ngu-cung]]
`,
  },
  {
    slug: "thanh-vinh-dap-ca-va-dau-tru",
    title: "Thánh vịnh đáp ca và dấu trụ",
    category: 'thanhca',
    also: ['vietnam', 'sacred'],
    aliases: ["thánh vịnh đáp ca", "đáp ca", "dấu trụ", "câu xướng câu đáp"],
    summary: "Vị trí của thánh vịnh đáp ca trong Thánh lễ (QCTQ số 61, HDMVTN số 144 – 149) và đề xuất ba dấu trụ cao – trung – trầm của Ngọc Kôn (2012) để xướng lời Việt; đề xuất này chưa phải quy định chính thức.",
    refs: [
      ["Sách lễ Rôma, bản tiếng Việt, Quy chế tổng quát (UBPT HĐGMVN, 2009), số 61", "https://fwdioc.org/7-quy-che-slrm-2002.pdf"],
      ["Ủy ban Thánh nhạc HĐGMVN — Hướng dẫn mục vụ Thánh nhạc (bản cập nhật 12/2022), số 37 – 39, 144 – 149", "https://hdgmvietnam.com/chi-tiet/uy-ban-thanh-nhac-tai-lieu-huong-dan-muc-vu-thanh-nhac-ban-cap-nhat-thang-12-2022--50722"],
      ["Ngọc Kôn — Sáng tác Đáp ca & Đối ca (loạt Thánh nhạc ngày nay, 2012), tr. 7, 11 – 13", "http://www.thanhnhacngaynay.vn/pictures/DAY-HOC%20SANG%20TAC%20THANH%20CA%20PHUNG%20VU%281%29.pdf"],
      ["Thánh bộ Nghi lễ — Huấn thị Musicam Sacram (5/3/1967), số 33, 54", "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_instr_19670305_musicam-sacram_en.html"],
      ["Trần Thị Thu Hà, Trần Ngọc Lan, Bùi Huyền Nga — Thanh điệu tiếng Việt và Âm nhạc cổ truyền của Hoàng Kiều: tổng quan (2025)", "https://vjol.info.vn/tcgiaoducnghethuat/article/view/138810"],
    ],
    body: `
## Thánh vịnh đáp ca trong Thánh lễ

Thánh vịnh đáp ca là bài hát sau bài đọc I. Huấn thị Musicam Sacram số 33 gọi bài hát sau bài đọc này là có "tầm quan trọng đặc biệt". Quy chế tổng quát Sách lễ Rôma (bản Việt) số 61 viết rằng nên hát thánh vịnh đáp ca, "ít là câu đáp của cộng đoàn"; người xướng hát ở giảng đài trong khi cộng đoàn ngồi nghe. Văn bản cũng cho phép dùng các câu đáp và thánh vịnh chọn sẵn theo mùa hoặc loại lễ thay cho bản ứng với bài đọc.

Hướng dẫn mục vụ Thánh nhạc số 37 – 39 mô tả người xướng thánh vịnh: đọc hoặc hát câu xướng sau bài đọc I tại giảng đài, giúp cộng đoàn hát hoặc đọc câu đáp, và phải biết ca hát, phát âm đúng. Tóm lại là hình thức xướng – đáp: người xướng hát các câu của thánh vịnh, cộng đoàn lặp một câu đáp ngắn. Xem [[ca-doan-ca-truong-ca-xuong-vien]] và [[cac-bai-hat-trong-thanh-le]].

## Khó khăn của lời Việt

Số 148 của Hướng dẫn mục vụ Thánh nhạc nêu rõ vấn đề: bản văn thánh vịnh đáp ca tiếng Việt khó soạn âm điệu vì tiếng Việt có sáu thanh điệu. Văn kiện kèm yêu cầu trung thành tuyệt đối với bản dịch đã được chuẩn nhận (chú thích 105 dẫn một huấn dụ về phụng vụ và hội nhập), nên nhạc sĩ phải thích nghi giai điệu, không sửa bản văn. Chi tiết xem [[thanh-dieu-va-giai-dieu-thanh-ca]].

## Đề xuất "dấu trụ" của Ngọc Kôn

Trong tài liệu dạy sáng tác của mình, Ngọc Kôn mô tả hình thể đáp ca gồm nhiều câu xướng (thánh vịnh nguyên văn, hát theo lối cantillare, tức xướng ngâm trên một nốt đọc) và một câu đáp ngắn hát đúng nhịp (cantare). Ca đoàn hát câu xướng, cộng đoàn hát câu đáp. Ông lập luận rằng ngôn ngữ phương Tây không có dấu giọng nên chỉ cần một "dấu trụ" (nốt đọc), còn tiếng Việt có sáu dấu giọng nên cần ba:

| Dấu trụ | Thanh | Thí dụ ông nêu |
|---|---|---|
| Cao | sắc, ngã | La |
| Trung | ngang (không dấu) | Sol |
| Trầm | huyền, hỏi, nặng | Mi |

Bộ "la – sol – mi" chỉ là một thí dụ; ông cũng nêu mi – rê – đô và đô – sol – mi, và lưu ý ba trụ không nên cách nhau quá xa (như mi – sol – rê). Về biến tấu, ông nói có công thức mở đầu câu, nghỉ giữa câu và kết câu; nửa câu đầu có thể ở trụ thấp, nửa sau ở trụ cao; bè hai song song quãng 4 hoặc 5; vẫn ba trụ nhưng thường chỉ hát hai (Ngọc Kôn 2012, tr. 11 – 13). Ông còn khẳng định giáo dân ba miền đọc kinh theo ba bộ dấu trụ khác nhau, và dấu trụ trong kinh đọc do dân gian từng miền tạo ra, còn trong thánh ca phụng vụ do từng nhạc sĩ chế tác (tr. 12 – 13).

Cần giữ giới hạn cho đề xuất này. Đây là tài liệu dạy sáng tác của một tác giả có lập trường riêng, không phải văn kiện chính thức. Cách xếp hỏi, ngã, nặng của Kôn không trùng bảng mô tả trên trang bách khoa mở, cũng không trùng nhận xét của Hoàng Kiều về chèo (sắc đi lên, huyền hạ thấp, hỏi – ngã luyến uốn). Ba nguồn không cùng đối tượng (xướng thánh vịnh, kinh đọc, làn điệu chèo), nên không thể gộp thành một quy tắc.

## Điều chưa rõ

- Công thức xướng thánh vịnh tiếng Việt chuẩn nhận, cách đặt dấu sao hay vạch ngắt câu trong bản Thánh vịnh: chưa có tài liệu đọc được (hai tài liệu liên quan trên mạng không mở được).
- Danh sách các bộ thánh vịnh đáp ca đang dùng và tác giả của chúng: chưa có nguồn.
- Đặc điểm giọng ba miền: chỉ có nhận định chung, chưa có ký âm.

## Câu hỏi ôn tập

- Hình thức xướng – đáp của đáp ca gồm những thành phần nào và ai hát từng phần?
- Vì sao Ngọc Kôn cho rằng tiếng Việt cần ba dấu trụ?
- Hai lý do nào khiến người biên soạn không coi bảng ba dấu trụ là quy tắc chung?

**Xem thêm:** [[tam-dieu-thuc-va-giong-thanh-vinh]], [[cung-kinh-cung-sach]], [[huong-dan-muc-vu-thanh-nhac]], [[ca-doan-ca-truong-ca-xuong-vien]], [[cac-bai-hat-trong-thanh-le]]
`,
  },
  {
    slug: "dau-giong-trong-hop-xuong",
    title: "Dấu giọng trong hoà âm hợp xướng lời Việt",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["dấu giọng", "dấu giọng khi hoà âm", "hoà âm hợp xướng lời Việt", "Nguyễn Bách 2015"],
    summary: "Theo luận án Nguyễn Bách (2015), ca từ và dấu giọng là khó khăn hàng đầu của hoà âm hợp xướng tiếng Việt; bài tóm các giải pháp (vocalise ở bè phụ, tiếng đệm, thận trọng với chuyển động ngược) và đối chiếu với Thảo và Kiều.",
    refs: [
      ["Nguyễn Bách — luận án tiến sĩ về nhạc hợp xướng ở Sài Gòn trước 1975 và TP.HCM, Học viện Âm nhạc Quốc gia Việt Nam, 2015, 164 tr., các mục 3.2.3 và 3.3.3 (nhan đề chính xác chưa kiểm)", "https://vnam.edu.vn/rs/Document/2015-NguyenBach-LATS.pdf"],
      ["Nguyễn Xuân Thảo — Music Ministry (luận án D.Min., CTU, 2007), Chương II, tr. 178 – 183", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
      ["Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam, Boston University, 2009", "https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download"],
    ],
    body: `
## Vấn đề

Khi hoà âm cho hợp xướng, nhiều bè hát cùng một lúc những âm tiết khác nhau về thanh điệu. Một bè có thể đi lên trong khi lời của nó đòi đi xuống; các bè song song có thể làm đổi nghĩa của câu. Nguyễn Bách, trong luận án tiến sĩ về nhạc hợp xướng ở Sài Gòn trước 1975 và thành phố Hồ Chí Minh (Học viện Âm nhạc Quốc gia Việt Nam, 2015), coi ca từ, tức "dấu giọng", là khó khăn hàng đầu khi hoà âm và hợp xướng tiếng Việt (mục 3.2.3). Thánh ca chỉ là một mảng trong luận án: trong loại tác phẩm tôn giáo có 4 tác phẩm Công giáo và 2 Phật giáo (Bách 2015, tr. 6, theo ghi chú của người biên soạn).

Kiều (2009) nói cùng ý theo cách khác: phải đặt giai điệu mới cho lời thay vì lấy giai điệu sẵn; khi các bè đi song song phải chú ý để không đổi nghĩa; đôi khi nên dùng đối âm thay vì hoà âm đồng điệu vì chuyển động ngược có thể làm sai nghĩa.

## Các giải pháp Bách nêu (mục 3.3.3)

- Dùng nguyên âm hoặc từ tận cùng bằng nguyên âm thay lời ở các bè phụ (kiểu vocalise), để bè chính giữ nguyên lời. Thí dụ ông nêu là "Đi cấy đi cày" của Hồ Đăng Tín, ở đoạn nhịp 110 – 115.
- Dùng tiếng đệm, nhưng tránh những từ xa lạ với truyền thống văn học.
- Trong đối âm, chuyển động ngược dễ làm dấu giọng của bè đáp và bè đối ngược với bè chính; cần thận trọng.

Bách cũng trích Hải Linh về lối hoà âm "thoáng mỏng": "trước hết cứ nắn cho giai điệu thật hay, có nhiều âm hưởng dân ca càng tốt, sau đó mới lựa vào hòa âm". Ông phân tích hoặc nhắc các tác phẩm Công giáo như "Ave Maria" (Hải Linh, thơ Hàn Mặc Tử; giọng Fa trưởng, ba phần), "Bài ca Truyền tin" và cantata "Tình một nhà" của Tiến Dũng, "Đêm Giáng sinh" của Kim Long (thơ Đỗ Xuân Quế), "Dâng hương" của Hồ Đăng Tín.

## So với Thảo

Thảo (2007) mô tả cách của Hải Linh: dùng điệu thức ngũ cung và thành ngữ dân ca, chủ yếu hợp âm I, IV, V, VI, "ngũ âm hoá" thang bảy âm (tránh nốt IV và VII, đặt chúng ở phách nhẹ, hoặc dùng làm nốt trang trí) và nhận xét nhạc Hải Linh giữ thanh điệu ở bè chính lẫn bè phụ (tr. 180 – 183). Điều này khớp với cách đặt vấn đề của Bách, và là hướng giải quyết khác với việc để bè phụ hát nguyên âm: giữ lời ở mọi bè nhưng chọn chuyển động bè sao cho hợp thanh. Xem [[hai-linh]] và [[hoa-am-cho-giai-dieu-ngu-cung]].

Bách còn ghi Tiến Dũng viết sách "Tôi viết ca khúc tiếng Việt" (tái bản 2001, NXB Trẻ) với hai chương XX – XXI bàn việc thích ứng văn bản tiếng Việt với bài nhiều bè (Bách 2015, tr. 3, chú thích 3); xem [[tien-dung]].

## Điều chưa rõ

- Nhan đề chính xác của luận án Bách chưa kiểm vì trang bìa không có trong bản trích; số trang trong bài này là số ước lượng của người thu thập.
- Chưa có thực nghiệm đo xem cách xử lý nào của Bách làm người nghe nhận sai nghĩa ít hơn. Phương pháp đo cao độ từ phổ tần số của Phan Gia Anh Thư và Ngô Thanh Nhàn (2017) có thể gợi ý hướng làm, nhưng bài ấy là về dân ca, không phải hợp xướng; xem [[hoang-kieu-thanh-dieu-va-dieu-thuc]].

## Câu hỏi ôn tập

- Vì sao chuyển động ngược giữa các bè dễ làm sai dấu giọng?
- Giải pháp "vocalise ở bè phụ" khác gì với giữ lời ở mọi bè như Hải Linh?
- Thánh ca chiếm vị trí thế nào trong luận án của Bách?

**Xem thêm:** [[thanh-dieu-va-giai-dieu-thanh-ca]], [[hai-linh]], [[tien-dung]], [[hoa-am-cho-giai-dieu-ngu-cung]]
`,
  },
  {
    slug: "bon-huong-sang-tac-thanh-ca",
    title: "Bốn hướng sáng tác thánh ca",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["bốn hướng sáng tác", "Tùng Công Kiều 2009", "hướng sáng tác thánh ca"],
    summary: "Phân loại của Tùng Công Kiều (Boston University, 2009) về bốn hướng sáng tác thánh ca Việt Nam: dùng bình ca, hợp xướng Tây phương, nhạc trẻ và hội nhập thật sự trên ngũ cung hay làn điệu cổ.",
    refs: [
      ["Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam, đồ án S.T.M., Boston University School of Theology, 05/2009 (số trang tr. ~ theo bản OCR)", "https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download"],
      ["Tuan Hoang — Postcolonial Catholicism in South Vietnam, 1954 – 1975, trong A History of Vietnamese Christianity (Brill, 2026), tr. 387 – 391", "https://tuannyriver.com/wp-content/uploads/2026/09/2026-hoang-postcolonial-catholicism-in-south-vietnam.pdf"],
      ["Nguyễn Xuân Thảo — Music Ministry (luận án D.Min., CTU, 2007)", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
    ],
    body: `
## Công trình và giới hạn

Tùng Công Kiều viết đồ án S.T.M. tại Boston University School of Theology (tháng 5/2009, 136 trang và phụ lục) với câu hỏi: làm sao phát triển nhạc phụng vụ Công giáo ở Việt Nam sau Vatican II. Người đọc duyệt là Karen B. Westerfield Tucker và Andrew Shenton. Đây là đồ án mục vụ có trích dẫn kỹ chứ không phải nghiên cứu thực nghiệm. Bản trực tuyến là ảnh quét, người thu thập tự nhận dạng chữ nên số trang dưới đây ghi xấp xỉ ("tr. ~"). Theo trang OpenBU, tài liệu cấp phép Attribution Non-Commercial 3.0. Cần phân biệt tác giả này với Nguyễn Xuân Thảo; một công cụ tìm kiếm từng gộp hai người làm một, và điều đó là sai.

## Bốn hướng

Ở chương III, Kiều phân các nhạc sĩ thánh ca theo bốn hướng (tr. ~58 – 63):

| Hướng | Nội dung | Thí dụ ông nêu |
|---|---|---|
| 1. Dùng Bình ca | bám giai điệu và điệu thức Gregorian | không nêu trong phần đã đọc |
| 2. Hợp xướng Tây phương truyền thống | đa số nhạc sĩ theo hướng này | không nêu trong phần đã đọc |
| 3. Nhạc trẻ, pop, praise and worship | nhịp hiện đại; bị phê phán mạnh nhưng lan rộng | "Bài ca hiệp nhất" của Thanh Tâm (nhịp swing) |
| 4. Hội nhập thật sự | ngũ cung hoặc làn điệu cổ cộng hoà âm Tây phương | "Mẹ đẹp tươi" của Kim Long |

Về hướng 4, Kiều nhắc "Mẹ đẹp tươi" viết trên thang ngũ cung thứ D – F – G – A – C, không lấy từ dân ca nào. Ông xếp Hải Linh và Hùng Lân vào hàng tiên phong của hướng này, theo sau là Viết Chung, Phanxicô, Ân Đức, Ngọc Linh. Với hướng 2, ông nhận xét đa số thánh ca là hình thức khổ (strophic), hoà âm Tây phương, giai điệu giản dị; một bài thường có ba hoặc bốn phiên khúc đơn âm và một điệp khúc hoà âm (tr. ~10).

## Dân ca làm nền: lời cảnh báo

Ở chương V (dân ca, tr. 71 – 83), Kiều nêu bốn điệu chính Hò, Xự, Xang, Xê (điệu Cống không dùng làm điệu chính) và các điệu không chính quy như Oán và Tây Nguyên. Quy tắc ông trích từ Hải Linh, Phạm Duy và Lư Nhất Vũ là giai điệu chính nên dùng ngũ cung, hoặc thang bảy âm đã được "ngũ âm hoá". Ông phân tích "Cát biển sao trời" của Phanxicô (kết hợp Xang chính quy và điệu Oán). Ông cũng dẫn lời cảnh báo của Nguyễn Thị Minh Châu rằng có những bài chỉ dùng giai điệu dân ca quen thuộc nên nghe như dân ca đặt lời mới (tr. ~82). Xem [[thanh-ca-lan-dieu-quan-ho]] về loại bài này.

Kiều kết luận (tr. 116 – 117) rằng thành tựu đã lớn nhưng cần rà soát; ba điều kiện được nêu là tăng thẩm quyền địa phương, khuyến khích sáng tác và giúp cộng đoàn hát; ông viện câu "lex canendi, lex credendi, lex vivendi" (luật hát, luật tin, luật sống).

## Đối chiếu

Hoang (2026, tr. 390, chú thích 36) ghi rằng một đề nghị dùng ngũ cung truyền thống để viết lễ ca và thánh ca mới ở miền Nam sau Vatican II "không được chấp nhận vì nhạc sĩ vẫn viết kiểu Tây". Nhận định này gần với điều Kiều thấy: hướng 2 chiếm đa số, hướng 4 là thiểu số tiên phong. Người biên soạn chưa xem chú thích 36 trong bản đầy đủ nên chưa rõ chi tiết.

## Điều chưa rõ

Kiều không đưa bảng đếm số bài theo hướng nào; mọi tỉ lệ ở trên là nhận xét của tác giả, không phải số liệu. Hai hướng đầu không có thí dụ trong phần đã đọc.

## Câu hỏi ôn tập

- Bốn hướng sáng tác của Kiều là gì, hướng nào có nhiều nhạc sĩ theo nhất?
- "Mẹ đẹp tươi" được dùng để minh hoạ hướng nào và vì sao?
- Lời cảnh báo của Nguyễn Thị Minh Châu về dân ca đặt lời mới là gì?

**Xem thêm:** [[ngu-cung-trong-thanh-ca]], [[hoi-nhap-van-hoa-trong-thanh-ca]], [[kim-long]], [[hai-linh]], [[thanh-tam-va-ban-nhac-alleluia]]
`,
  },
  {
    slug: "ngu-cung-trong-thanh-ca",
    title: "Ngũ cung trong thánh ca",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["ngũ cung thánh ca", "bao nhiêu bài thánh ca dùng ngũ cung", "Mẹ đẹp tươi"],
    summary: "Con số duy nhất tìm thấy về tỉ lệ ngũ cung trong thánh ca đương đại là 10 trên 20 bài phụng vụ dùng nhiều nhất (Thảo, qua Kiều), kèm ước lượng truyền miệng 100.000 bài; bài bàn rõ giới hạn của hai con số đó.",
    refs: [
      ["Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam, Boston University, 2009 (tr. ~10 – 11, chú thích 16)", "https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download"],
      ["Nguyễn Xuân Thảo — Music Ministry (luận án D.Min., CTU, 2007), Chương II, tr. 174 – 184", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
      ["Trần Văn Khê — Lời giới thiệu luận án của Nguyễn Xuân Thảo (2008)", "https://nghiasinh.org/userfiles/tonghop/08_2008/NXT-TVK.pdf"],
      ["Nguyễn Bách — luận án tiến sĩ, Học viện Âm nhạc Quốc gia Việt Nam, 2015, chú thích 10", "https://vnam.edu.vn/rs/Document/2015-NguyenBach-LATS.pdf"],
      ["Tuan Hoang — Postcolonial Catholicism in South Vietnam, 1954 – 1975 (Brill, 2026), tr. 390", "https://tuannyriver.com/wp-content/uploads/2026/09/2026-hoang-postcolonial-catholicism-in-south-vietnam.pdf"],
    ],
    body: `
## Hai con số hay được nhắc

Khi nói thánh ca Việt Nam "đậm màu dân tộc", người ta thường nói đến thang ngũ cung. Thực ra các tài liệu đã đọc chỉ cho hai con số, và cả hai đều cần dè dặt.

- **10 trên 20.** Kiều trích luận án của Thảo (tr. 42 của luận án): trong 20 bài thánh ca phụng vụ được dùng nhiều nhất, 10 bài dùng thang ngũ cung "ở mức nào đó" (Kiều 2009, tr. ~11, chú thích 16). Theo Trần Văn Khê, luận án có khảo sát bằng bảng hỏi gửi ca trưởng và thống kê cộng đồng Công giáo.
- **Khoảng 100.000 bài.** Cũng Kiều (tr. ~10), dẫn Ủy ban Thánh nhạc 2002 và Paul Văn Chi (tr. 96), cho biết "một số nhạc sĩ" ước tính tổng số thánh ca vào khoảng 100.000 bài. Đây là ước lượng truyền miệng, không có bảng đếm; người biên soạn đề nghị chỉ viết là "có người ước tính".

## Giới hạn của con số 10/20

Người biên soạn không thấy trong phần đã đọc cách chọn "20 bài dùng nhiều nhất": cỡ mẫu phiếu, địa bàn khảo sát và cách xác định một bài là "ngũ cung ở mức nào đó" đều chưa rõ, vì chương I và chương III trở đi của luận án chưa đọc. Con số này đo một lát cắt rất hẹp (20 bài phụng vụ phổ biến), không cho biết tỉ lệ trong toàn bộ vài chục nghìn hay hàng trăm nghìn bài. Vì vậy không nên viết câu "một nửa thánh ca Việt Nam là ngũ cung". Nó cũng không so sánh được với con số 100.000: một số nhỏ về bài hay hát, một số lớn không kiểm được.

## Ngũ cung được dùng thế nào

Các nguồn mô tả nhiều cách dùng khác nhau:

- Thánh ca cổ truyền của giáo dân: Thảo cho rằng mọi bài loại này đều ngũ cung, phần lớn ở các điệu Xang, Xự, Xê (tr. 174); xem [[thanh-ca-co-truyen-va-van-dang-hoa]].
- Hải Linh: "ngũ âm hoá" thang bảy âm, tránh hoặc đặt ở phách nhẹ các nốt bậc IV và VII (hoặc dùng như nốt trang trí), và chủ yếu dùng hợp âm I, IV, V, VI (Thảo 2007, tr. 180 – 183); xem [[hai-linh]].
- "Mẹ đẹp tươi" của Kim Long: theo Kiều, viết trên thang ngũ cung thứ D – F – G – A – C, không rút từ dân ca nào, nên được xếp vào hướng "hội nhập thật sự" (xem [[bon-huong-sang-tac-thanh-ca]]).
- Cung đọc kinh: Bách ghi ba cao độ Mi, Sol, La; Thảo ghi các công thức hai đến năm nốt (xem [[cung-kinh-cung-sach]]). Đây là các nhóm nốt hẹp hơn một thang ngũ cung đầy đủ.

## Ý kiến về mức hội nhập

Hoang (2026, tr. 390, chú thích 36) ghi rằng một đề nghị dùng ngũ cung truyền thống cho lễ ca ở miền Nam sau Vatican II không được chấp nhận vì nhạc sĩ vẫn viết kiểu Tây; Kiều cũng thừa nhận đa số nhạc sĩ vẫn theo hợp xướng Tây phương và nhạc trẻ. Thảo và Kiều cho hướng ngũ cung là hội nhập đúng nghĩa. Người biên soạn ghi cả hai ý để người đọc tự cân nhắc, không coi một bên là kết luận cuối.

## Điều chưa rõ

- Danh sách 20 bài và cách chọn.
- Tỉ lệ ngũ cung trong thánh ca của các nhạc sĩ ngoài nhóm tiên phong.
- Liệu khung năm cung của Hoàng Kiều (xem [[hoang-kieu-thanh-dieu-va-dieu-thuc]]) có áp dụng được: chưa thấy công trình nào áp dụng.

## Câu hỏi ôn tập

- Hai con số 10/20 và 100.000 có nguồn từ đâu, và vì sao không so sánh trực tiếp được?
- Hải Linh "ngũ âm hoá" thang bảy âm bằng những cách nào?
- Vì sao câu "một nửa thánh ca Việt Nam là ngũ cung" không có căn cứ?

**Xem thêm:** [[am-giai-ngu-cung]], [[hoa-am-cho-giai-dieu-ngu-cung]], [[bon-huong-sang-tac-thanh-ca]], [[kim-long]], [[luan-an-xuan-thao-2007]]
`,
  },
  {
    slug: "hoi-nhap-van-hoa-trong-thanh-ca",
    title: "Hội nhập văn hoá trong thánh ca",
    category: 'thanhca',
    also: ['vietnam', 'sacred'],
    aliases: ["hội nhập văn hoá", "tiếp biến văn hoá", "Thư chung 1980 và thánh ca", "inculturation"],
    summary: "Hội nhập văn hoá (inculturation) và tiếp biến văn hoá (acculturation) áp dụng cho thánh ca: câu hỏi của Thảo, ba lớp hội nhập theo các nguồn, câu trích Thư chung 1980 mới có qua nguồn thứ cấp, và những chỗ lập luận cần kiểm.",
    refs: [
      ["Nguyễn Xuân Thảo — Music Ministry: The Inculturation of Liturgical Vocal Music in Vietnam, luận án D.Min., CTU, 2007, Chương II, tr. 63 – 64", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
      ["Bùi Trung Thành — Tiếp biến văn hóa âm nhạc Công giáo trong nhạc cụ và nhạc hát ở Việt Nam, Tạp chí Dân tộc học và Tôn giáo học số 1 (06), 2026, tr. 110 – 125", "https://vjol.info.vn/tcdantochocvatongiaohoc/article/view/135319"],
      ["Công đồng Vatican II — Sacrosanctum Concilium (4/12/1963), số 119", "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html"],
      ["Tuan Hoang — Postcolonial Catholicism in South Vietnam, 1954 – 1975 (Brill, 2026), tr. 387 – 391", "https://tuannyriver.com/wp-content/uploads/2026/09/2026-hoang-postcolonial-catholicism-in-south-vietnam.pdf"],
      ["Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam, Boston University, 2009", "https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download"],
      ["Lê Hải Đăng — Tiếp biến văn hóa Công giáo nhìn từ góc độ âm nhạc nhà thờ, Tạp chí Nghiên cứu và Phát triển (Huế) số 1(135), 2017 (chỉ đọc phần tóm tắt)", "https://vjol.info.vn/ncpt-hue/article/view/28101"],
      ["Bùi Trung Thành — Đặc trưng văn hóa âm nhạc Công giáo của giáo dân giáo xứ Đồng Bài và An Ngải hiện nay, Nghiên cứu Tôn giáo số 9 (2024)", "https://vjol.info.vn/rsr/article/view/126427"],
    ],
    body: `
## Hai thuật ngữ

Trong tiếng Việt, "hội nhập văn hoá" thường dịch inculturation: Giáo hội diễn đạt đức tin bằng ngôn ngữ và hình thức văn hoá bản địa; "tiếp biến văn hoá" (acculturation) là thuật ngữ của nhân học chỉ sự thay đổi khi hai nền văn hoá tiếp xúc. Các bài viết đã đọc, như của Bùi Trung Thành (2026), dùng cả hai và lập một chuỗi văn kiện làm bối cảnh: huấn thị Propaganda 1659 (bốn điểm: không can dự chính trị, tuân lệnh Rôma, đào tạo giáo sĩ bản xứ, tôn trọng phong tục địa phương), tông thư Plane compertum est (8/12/1939; áp dụng cho Việt Nam, Trung Quốc, Nhật Bản ngày 2/10/1964), rồi Lumen Gentium, Evangelii Nuntiandi (1975), Catechesi Tradendae (1979) và Thượng Hội đồng 1985. Người biên soạn chỉ ghi chúng như bối cảnh nguồn thứ cấp, cần đối chiếu văn kiện gốc nếu dùng.

Về văn kiện công đồng, Sacrosanctum Concilium số 119 nói ở các miền truyền giáo có truyền thống âm nhạc riêng thì phải coi trọng và dành chỗ thích hợp cho nhạc ấy, để thích nghi phụng tự theo "thiên tài bản địa" (người biên soạn tóm theo bản tiếng Anh). Bùi Trung Thành trích đúng nội dung này nhưng ghi xuất xứ là "Thánh bộ Lễ nghi 1958"; người biên soạn cho là ghi nhầm và khuyên dẫn trực tiếp SC 119.

## Câu hỏi của Thảo và ba lớp hội nhập

Thảo (2007, tr. 63 – 64) mở chương II bằng câu hỏi: điều gì làm cho nhạc nghe ra "Việt"? Ông mượn cách đặt câu hỏi của Leonard Bernstein về nhạc Mỹ và trả lời qua ba tầng: dân ca; cung đọc kinh, cung đọc sách và thánh ca cổ truyền của giáo dân; và nhạc Hải Linh như mẫu hội nhập thành công.

Từ các nguồn khác, người biên soạn ghi lại một trình tự ba lớp, ghi rõ đó là cách sắp xếp của người soạn bài chứ không phải một phân kỳ chính thức:

1. Lời Việt đặt cho nhạc Tây (1900 – 1944 theo Bùi Trung Thành 2026).
2. Sáng tác mới mang màu dân ca (từ 1945: Hải Linh, Hùng Lân, nhạc đoàn Lê Bảo Tịnh theo Bùi Trung Thành, Hoang, Kiều).
3. Đặt lời trực tiếp vào làn điệu dân ca cụ thể (từ khoảng 1990 theo Bùi Trung Thành); xem [[thanh-ca-lan-dieu-quan-ho]] và [[thanh-nhac-nguoi-muong-phat-diem]].

Hoang gọi giai đoạn 1945 – 1954 và thời Việt Nam Cộng hoà là "thời hoàng kim" của nhạc nhà thờ hiện đại, "đỉnh cao chưa được vượt" (Hoang 2026, tr. 387 – 391). Phân kỳ chi tiết xem [[phan-ky-thanh-nhac-viet-nam]].

## Thư chung 1980

Bùi Trung Thành (2026, tr. 116) trích phương châm "Về nội dung, phụng vụ Thiên Chúa và Tổ quốc. Về nghệ thuật, lấy dân ca cổ truyền làm cấu trúc âm thanh", gán cho Thư chung 1980 của Hội đồng Giám mục Việt Nam. Nguồn trích của chính tác giả là Nguyễn Đình Lâm (2011, tr. 7), và người biên soạn chưa mở được văn bản gốc Thư chung trên trang của HĐGMVN. Vì vậy câu này chỉ nên dẫn là "theo Bùi Trung Thành, dẫn Nguyễn Đình Lâm", không trích như lời văn kiện. Cũng cần kiểm tra ngày: bản đọc chỉ cho biết ngày 1/5/1980 qua một kết quả tìm kiếm.

## Các đánh giá khác nhau

Thảo và Kiều coi hướng ngũ cung và làn điệu cổ là hội nhập đúng nghĩa; Kiều cũng ghi đa số nhạc sĩ vẫn viết hợp xướng Tây phương và nhạc trẻ ([[bon-huong-sang-tac-thanh-ca]]). Hoang ghi một đề nghị dùng ngũ cung ở miền Nam sau Vatican II đã không được chấp nhận. Bùi Trung Thành kết luận ở Đồng Bài và An Ngải rằng dân gian chỉ tiếp biến "trong khuôn mẫu tôn giáo" và nhạc phương Tây vẫn đan xen. Lê Hải Đăng (2017), theo phần tóm tắt, cho rằng nhạc nhà thờ đã ra khỏi không gian nghi lễ và ảnh hưởng đến thị hiếu thẩm mỹ rộng hơn cộng đồng tín hữu; toàn văn chưa đọc.

## Điều chưa rõ

Một lập luận trong bài của Bùi Trung Thành cần kiểm: câu nói rằng giáo sư J. Masson (1962) là người đầu tiên dùng cụm "inculturé" trong "văn bản chính thức của Toà Thánh". Người biên soạn nghi ngờ vì Masson là nhà học thuật dòng Tên; không dùng khi chưa kiểm chứng.

## Câu hỏi ôn tập

- Phân biệt hội nhập văn hoá và tiếp biến văn hoá bằng lời của bạn.
- Câu hỏi nào mở đầu chương II luận án Thảo, và ba tầng trả lời là gì?
- Vì sao câu trích Thư chung 1980 chưa thể coi là lời văn kiện?
- Hai nhận định khác nhau về mức hội nhập của thánh ca miền Nam là gì?

**Xem thêm:** [[am-nhac-ton-giao-va-dan-toc-viet-nam]], [[viet-binh-ca-cho-tieng-ban-dia]], [[sacrosanctum-concilium-chuong-vi]], [[ngu-cung-trong-thanh-ca]], [[thanh-ca-viet-nam]]
`,
  },
  {
    slug: "thanh-ca-lan-dieu-quan-ho",
    title: "Thánh ca đặt lời theo làn điệu Quan họ",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["thánh ca Quan họ", "Quan họ Công giáo", "Tám mối phúc thật Quan họ"],
    summary: "Năm bài thánh ca đặt lời trên làn điệu Quan họ cổ (Tám mối phúc thật, Ai hỏi vì sao, Mến Chúa yêu người, Nghĩa sinh thành, Chúa chăn nuôi tôi) theo Nguyễn Đình Lâm 2011 qua Bùi Trung Thành; nguồn gốc chưa đối chiếu nguyên bản.",
    refs: [
      ["Bùi Trung Thành — Đặc trưng văn hóa âm nhạc Công giáo của giáo dân giáo xứ Đồng Bài và An Ngải hiện nay, Nghiên cứu Tôn giáo số 9 (2024), tr. 27 – 42 (tr. 33, 35)", "https://vjol.info.vn/rsr/article/view/126427"],
      ["Bùi Trung Thành — Tiếp biến văn hóa âm nhạc Công giáo trong nhạc cụ và nhạc hát ở Việt Nam, Tạp chí Dân tộc học và Tôn giáo học số 1 (06), 2026, tr. 110 – 125", "https://vjol.info.vn/tcdantochocvatongiaohoc/article/view/135319"],
      ["Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam, Boston University, 2009 (tr. ~82)", "https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download"],
      ["CNA / Catholic World Report — This unique chant brings Vietnamese Catholics deeper into Christ's Passion", "https://www.catholicworldreport.com/2019/04/19/this-unique-chant-brings-vietnamese-catholics-deeper-into-christs-passion-2/"],
    ],
    body: `
## Năm bài được nêu tên

Bài này ngắn vì tư liệu mới dừng ở một danh sách và nguồn gốc của danh sách còn là bài báo thứ cấp. Theo Bùi Trung Thành (2024, tr. 33), các bài thánh ca đặt lời theo làn điệu Quan họ cổ được Nguyễn Đình Lâm (2011, tr. 51) nêu như sau:

| Thánh ca | Làn điệu Quan họ |
|---|---|
| Tám mối phúc thật | Khách đến chơi nhà |
| Ai hỏi vì sao | Ngồi tựa mạn thuyền |
| Mến Chúa yêu người | Ra ngó vào trông |
| Nghĩa sinh thành | Chuông vàng gác cửa tam quan |
| Chúa chăn nuôi tôi | Tương phùng tương ngộ |

Bùi Trung Thành (2026) nhắc lại ba bài đầu của danh sách này khi mô tả giai đoạn "hoàng kim" từ khoảng 1990, lúc lời Việt được đặt thẳng vào giai điệu dân ca cụ thể. Cũng theo Nguyễn Đình Lâm, ở miền Trung, Tây Nguyên và Nam bộ có việc đặt thánh ca theo vọng cổ và dân ca Tây Nguyên (Bùi Trung Thành 2024, tr. 35, dẫn Lâm 2011, tr. 8).

Nên lưu ý: cột bên phải là tên làn điệu Quan họ, không phải lời thánh ca; người biên soạn chưa đối chiếu xem lời mới có giữ nguyên cấu trúc câu và thanh điệu của lời gốc không. Nguồn gốc của danh sách là bài của Nguyễn Đình Lâm đăng mạng (bị chặn khi tải), nên Bùi Trung Thành chỉ lặp lại; người biên soạn chưa đọc bản gốc.

## Vì sao đáng chú ý, vì sao cần thận trọng

Về mặt kỹ thuật, đặt lời mới lên làn điệu có sẵn buộc nhạc sĩ giữ quan hệ giữa thanh điệu và cao độ của lời cũ; nếu lời mới có thanh khác ở cùng vị trí, giai điệu và nghĩa có thể "chọi" nhau (xem [[thanh-dieu-va-giai-dieu-thanh-ca]]). Với Quan họ, thể hát nhiều luyến láy, yêu cầu này càng khó. Tuy vậy tài liệu đã đọc chưa phân tích bài nào trong năm bài trên về mặt này.

Kiều (2009, tr. ~82) trích cảnh báo của Nguyễn Thị Minh Châu rằng có những bài "chỉ dùng giai điệu dân ca quen thuộc nên như dân ca đặt lời mới". Đây là phê bình chung về cách hội nhập, không riêng nhóm Quan họ.

Một thực hành gần: CNA kể rằng ngắm Mùa Chay xuất phát từ lối ngâm dân gian mà giáo lý viên bản xứ dạy theo lối đình chùa, quan họ. Đó là nhận định của một bản tin báo chí, không có ký âm kèm theo; xem [[ngam-mua-chay]].

## Điều chưa rõ

- Ai soạn lời, năm nào, bản nào đã được chuẩn nhận cho phụng vụ (xem [[chuan-nhan-imprimatur-thanh-ca]]): chưa có nguồn.
- Bài báo Nguyễn Đình Lâm 2011 ghi ở hai chỗ với nhan đề hơi khác nhau (một nơi có chữ "âm nhạc", một nơi không); chưa mở mục lục gốc nên chưa quyết nhan đề.
- Sách Quan họ được dùng làm nguyên mẫu (bản ký âm nào) chưa rõ; xem [[quan-ho]] về bản thân thể loại.

## Câu hỏi ôn tập

- Hãy nêu ít nhất hai bài trong danh sách và làn điệu Quan họ tương ứng.
- Vì sao người biên soạn nói danh sách này mới là nguồn thứ cấp?
- Điều gì khiến đặt lời lên làn điệu có sẵn khó về thanh điệu?

**Xem thêm:** [[quan-ho]], [[dan-ca-viet-nam]], [[hoi-nhap-van-hoa-trong-thanh-ca]], [[thanh-nhac-nguoi-muong-phat-diem]], [[bon-huong-sang-tac-thanh-ca]]
`,
  },
  {
    slug: "thanh-nhac-nguoi-muong-phat-diem",
    title: "Thánh nhạc của giáo dân Mường ở Phát Diệm",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["thánh nhạc người Mường", "Đồng Bài An Ngải", "giáo dân Mường Phát Diệm", "Bộ Mẹng Rằng Thường"],
    summary: "Khảo sát thực địa năm 2020 của Bùi Trung Thành ở hai giáo xứ Mường Đồng Bài và An Ngải (Nho Quan, Ninh Bình): làn Bộ Mẹng và Rằng Thường trong Ngắm, bài tự sáng tác, múa sạp, cồng chiêng và chuông nhỏ.",
    refs: [
      ["Bùi Trung Thành — Đặc trưng văn hóa âm nhạc Công giáo của giáo dân giáo xứ Đồng Bài và An Ngải hiện nay, Nghiên cứu Tôn giáo số 9 (2024), tr. 27 – 42", "https://vjol.info.vn/rsr/article/view/126427"],
      ["Bùi Trung Thành — Tiếp biến văn hóa âm nhạc Công giáo trong nhạc cụ và nhạc hát ở Việt Nam, Tạp chí Dân tộc học và Tôn giáo học số 1 (06), 2026, tr. 110 – 125", "https://vjol.info.vn/tcdantochocvatongiaohoc/article/view/135319"],
    ],
    body: `
## Hai giáo xứ

Bùi Trung Thành (2024, tr. 27) nghiên cứu hai giáo xứ Mường thuộc giáo phận Phát Diệm, ở xã Quảng Lạc, huyện Nho Quan, tỉnh Ninh Bình; bài dựa trên phỏng vấn sâu và quan sát thực địa năm 2020. Tác giả được giới thiệu là nghiên cứu tự do về Việt Nam học (chú thích tr. 27). Số liệu cơ bản (tr. 29 – 31):

| Giáo xứ | Dữ kiện |
|---|---|
| An Ngải | thành lập 1903; nhà thờ hiện nay xây 1993; khoảng 2.500 giáo dân, trên 98% là người Mường; lúc đầu 8 giáo họ |
| Đồng Bài | tách thành giáo xứ ngày 28/8/2007; khoảng 2.000 tín hữu; nhà thờ xây 2003 – 2005, hoàn thiện 2007; 4 giáo họ |

Theo lời một chi hội trưởng người cao tuổi, người Mường ở đây gốc Mường Vang, di cư từ Hoà Bình và Thanh Hoá cách nay 400 – 500 năm (tr. 29 – 30).

## Điều quan sát được

- **Ngắm và Than mồ.** Ngắm Mười lăm Sự Thương Khó ("Ngắm đứng") và Than mồ ở Mùa Chay có từ thời "cha Đắc Lộ", nhưng theo tác giả "làn điệu gốc hầu như đã biến đổi"; hai giáo xứ xen điệu Bộ Mẹng, Rằng Thường (lối hát – nói – ngâm – ngợi tự sự của người Mường) và cách ngân "í i" của dân ca và chèo (tr. 33 – 34). Tác giả cho chất liệu được "cách điệu từ các bài cúng tế" ở đình, chùa, miếu; đây là nhận định, không có ký âm. Xem [[ngam-mua-chay]].
- **Bài tự sáng tác.** "Chào cha xứ" của giáo dân Đồng Bài dùng làn Bộ Mẹng với lời lục bát; "Tạ ơn" và "Chào đón cha" là các bài Mường khác; cũng có hát ứng tác không tên (tr. 34 – 35).
- **Hát Ví, Đúm, giao duyên** của người Mường được đưa vào cầu nguyện và tạ ơn (tr. 35).
- **Múa sạp** "Bước theo Thầy" (linh mục Nguyễn Duy) được trình diễn ở Đồng Bài và nhà thờ chính toà Phát Diệm (tr. 35 – 36).
- **Nhạc cụ.** Cồng chiêng đón linh mục vào cung thánh thay kèn Tây; chuông nhỏ của người Mường được dùng ở năm thời điểm trong Thánh lễ: nhập lễ, xin Chúa Thánh Thần thánh hoá lễ vật, nâng Mình Máu Thánh, trước rước lễ, ban phép lành (tr. 37 – 39). Xem [[cong-chieng]].

Tác giả kết luận nhạc phương Tây vẫn đan xen và dân gian chỉ tiếp biến "trong khuôn mẫu tôn giáo" (tr. 37 – 39). Trong bài tổng thuật 2026, ông nhắc lại các hiện tượng này như một ví dụ của giai đoạn dùng làn điệu cụ thể.

## Giới hạn của tư liệu

Bảng so sánh trong bài 2024 là ảnh nên người thu thập không đọc được. Thông tin về "cha già Vượng" (Pierre Marie Nguyễn An Vượng, cha quản xứ Nam Định) đặt lời Việt cho thánh ca Pháp và Latinh, và việc dùng "trở lại" điệu cổ của dân tộc không được hưởng ứng, tác giả lấy lại từ nguồn thứ cấp (Hồng Huệ 2020), nên cần kiểm trước khi dùng (tr. 32 – 33). Người biên soạn cũng chưa có ghi âm hay ký âm các làn Bộ Mẹng và Rằng Thường dùng ở đây; vì thế chưa thể nói làn nào giống làn nào ở mức cao độ.

## Điều chưa rõ

Chưa có nghiên cứu dân tộc nhạc học độc lập, có ký âm, cho thánh nhạc người Mường Công giáo; bài của Bùi Trung Thành là nguồn duy nhất tìm thấy. Điều này làm cho các quan sát ở trên thuộc loại thực địa một lần, chưa được đối chiếu.

## Câu hỏi ôn tập

- Hai giáo xứ Đồng Bài và An Ngải thuộc giáo phận nào và có quy mô ra sao?
- Người Mường ở đây đã đưa những làn điệu nào vào ngắm và vào bài tự sáng tác?
- Chuông nhỏ và cồng chiêng được dùng vào những lúc nào trong Thánh lễ?
- Vì sao nhận định "cách điệu từ các bài cúng tế" cần được đối chiếu?

**Xem thêm:** [[ngam-mua-chay]], [[cong-chieng]], [[hoi-nhap-van-hoa-trong-thanh-ca]], [[nhac-cu-trong-phung-vu-viet-nam]], [[am-nhac-ton-giao-va-dan-toc-viet-nam]]
`,
  },
  {
    slug: "hoang-kieu-thanh-dieu-va-dieu-thuc",
    title: "Hoàng Kiều: thanh điệu và điệu thức",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Hoàng Kiều thanh điệu", "Nam Pha Huỳnh Bắc Nao", "đo thanh điệu bằng phổ tần số", "nPIC"],
    summary: "Luận điểm của Hoàng Kiều (2001, qua tổng quan 2025) rằng thanh điệu quyết định cấu trúc điệu thức nhạc cổ truyền Việt Nam, nghiên cứu 127 làn điệu chèo; kèm phương pháp đo thanh điệu trên giai điệu bằng phổ tần số của Phan Gia Anh Thư và Ngô Thanh Nhàn (2017). Cả hai không phải nghiên cứu thánh ca.",
    refs: [
      ["Trần Thị Thu Hà, Trần Ngọc Lan, Bùi Huyền Nga — Thanh điệu tiếng Việt và Âm nhạc cổ truyền của Hoàng Kiều: tổng quan, phân tích và ứng dụng trong dạy học thanh nhạc, Tạp chí Giáo dục Nghệ thuật số 57/2025", "https://vjol.info.vn/tcgiaoducnghethuat/article/view/138810"],
      ["Phan Gia Anh Thư, Ngô Thanh Nhàn — An Initial Analysis on the Interactions of Vietnamese Linguistic Tones & Vietnamese Folk Music, MARAAS lần thứ 46, Drexel University, 6 – 8/10/2017", "https://cs.nyu.edu/~nhan/full_paper_vs2.032p1.pdf"],
      ["Nguyễn Xuân Thảo — Music Ministry (luận án D.Min., CTU, 2007), Chương II", "https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf"],
    ],
    body: `
## Vì sao đưa Hoàng Kiều vào đề tài thánh ca

Hoàng Kiều không viết về thánh ca. Ông được nhắc ở đây vì là một trong rất ít công trình chính ngạch về quan hệ giữa thanh điệu tiếng Việt và âm nhạc. Sách của ông, *Thanh điệu tiếng Việt và Âm nhạc cổ truyền* (Viện Âm nhạc, 2001, 472 trang), người biên soạn chưa đọc; mọi điều dưới đây lấy từ bài tổng quan năm 2025 của Trần Thị Thu Hà, Trần Ngọc Lan và Bùi Huyền Nga (tr. 32 – 34), một bài thứ cấp ở mức tin cậy trung bình.

## Luận điểm theo bài tổng quan

- Thanh điệu không chỉ ảnh hưởng đến cách phổ thơ mà còn "quyết định" cấu trúc điệu thức trong nhạc truyền thống.
- Hệ năm cung Nam – Pha – Huỳnh – Bắc – Nao, với cung Nam là gốc. Điệu Nam (giọng Ai) buồn, điệu Bắc tươi. Nhạc luật "mở": cùng một điệu Bắc có biến thể nhỏ về cao độ để hợp thanh điệu địa phương.
- Số liệu thực nghiệm: Hoàng Kiều cùng Bùi Đức Hạnh và Hà Hoa ký âm, biên tập và phân tích hơn 127 làn điệu chèo ghi âm từ 1958 đến 1996; cung Nam và Nao có tần suất cao nhất.
- Xu hướng cao độ: cao độ giai điệu thường tương ứng thanh điệu của lời; thanh sắc có xu hướng đi lên, thanh huyền hạ thấp, thanh hỏi và ngã có độ luyến uốn phức tạp hơn (tr. 34).

Bảng tổng quan không nêu bảng đầy đủ cho từng thanh, nên người dùng không thể rút ra "quy tắc gán nốt" từ đây.

## Hai hệ nhãn không nên trộn

Thảo dùng nhãn Xang, Xự, Xê, Liu theo Lư Nhất Vũ và Phạm Duy khi mô tả thánh ca cổ truyền (xem [[thanh-ca-co-truyen-va-van-dang-hoa]]); ông không dùng nhãn năm cung của Hoàng Kiều. Người biên soạn chưa tìm thấy công trình nào áp dụng khung của Hoàng Kiều vào thánh ca hay cung kinh. Việc đối chiếu cung Nam hay cung Bắc với Cung Thương hay Cung Vui là phỏng đoán, chưa có nguồn, nên không được ghi như kết luận.

## Phương pháp đo: nPIC

Phan Gia Anh Thư và Ngô Thanh Nhàn (2017) đề xuất một cách đo thay cho ký âm bằng tai: vẽ đồ thị đường nét cao độ và cường độ có ký âm (nPIC) từ phổ tần số, đánh dấu khởi đầu từng âm tiết (syllamelis). Họ đặt các khái niệm "toneume" (tone cộng neume), "inter-toneume", "adjacency" và "congruence" (độ khớp giữa thanh của lời và giai điệu). Mẫu gồm 412 nPIC từ 7 bản thu hát và 6 bản đọc cùng một bài dân ca Nam bộ "Ru con miền Nam". Kết quả là toneume hiện rõ trong syllamelis, để chỗ cho biến thể và cách diễn của nghệ sĩ; với ngôn ngữ có thanh, độ khớp là ưu thế, còn lệch khớp có thể là sáng tạo cá nhân.

Giới hạn: một bài, một vùng, không phải thánh ca; người biên soạn chỉ dùng như phương pháp gợi ý để đo thánh ca về sau, không dùng như kết quả. Thảo (2007, tr. 156 – 157) đã dùng cách ký âm bằng tai cho khoảng tối thiểu giữa các thanh trong dân ca; đo bằng phổ tần số có thể kiểm lại các khoảng ấy một cách khách quan hơn.

## Điều chưa rõ

- Nội dung sách gốc của Hoàng Kiều, đặc biệt bảng quan hệ từng thanh – cao độ.
- Có áp dụng được khung năm cung cho thánh ca và cung đọc kinh hay không.
- Cỡ mẫu và cách chọn trong bài của Thư và Nhàn ngoài một bài dân ca.

## Câu hỏi ôn tập

- Luận điểm trung tâm của Hoàng Kiều về quan hệ thanh điệu và điệu thức là gì?
- Vì sao không nên trộn nhãn Xang, Xự, Xê của Thảo với năm cung của Hoàng Kiều?
- nPIC đo điều gì, và vì sao nghiên cứu này chưa thể xem là kết quả về thánh ca?

**Xem thêm:** [[thanh-dieu-va-giai-dieu-thanh-ca]], [[am-nhac-va-ngon-ngu]], [[cheo]], [[ly-thuyet-am-nhac-co-truyen-viet-nam]], [[cac-cong-trinh-nghien-cuu-thanh-ca]]
`,
  },
]
