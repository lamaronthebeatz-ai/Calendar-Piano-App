import type { Article } from '../wiki'

const RFA2011: [string, string] = [
  'Vũ Hoàng — "Đôi nét về thánh nhạc", phỏng vấn Lm Kim Long (RFA, 12.12.2011)',
  'https://www.rfa.org/vietnamese/news/programs/MusicForWeekend/glimpses-on-vn-gospel-vh-12122011163037.html',
]
const PLO: [string, string] = [
  'Pháp luật TP.HCM — "Nhạc sĩ, linh mục Phêrô Nguyễn Kim Long về với Chúa" (17.6.2025)',
  'https://plo.vn/nhac-si-linh-muc-phero-nguyen-kim-long-ve-voi-chua-post855743.html',
]
const TT: [string, string] = [
  'Tuổi Trẻ — "Nhạc sĩ, linh mục Phêrô Nguyễn Kim Long về với Chúa, để lại đời hơn 5.000 ca khúc" (17.6.2025)',
  'https://tuoitre.vn/nhac-si-linh-muc-phero-nguyen-kim-long-ve-voi-chua-de-lai-doi-hon-5-000-ca-khuc-20250617152512523.htm',
]
const VCNET50085: [string, string] = [
  'VietCatholic — "Đôi nét về sự nghiệp âm nhạc của linh mục nhạc sư Kim Long" (không ghi ngày, trước 2012)',
  'http://vietcatholic.net/News/Html/50085.htm',
]
const VIWIKI_KL: [string, string] = [
  'Wikipedia tiếng Việt — "Phêrô Nguyễn Kim Long" (chỉ làm đầu mối)',
  'https://vi.wikipedia.org/wiki/Ph%C3%AAr%C3%B4_Nguy%E1%BB%85n_Kim_Long',
]
const TGP2009: [string, string] = [
  'Nguyễn Thụy Kha — "Nhạc sĩ Kim Long: 50 năm viết thánh ca" (3.6.2009)',
  'https://tgpsaigon.net/bai-viet/nhac-si-kim-long-50-nam-viet-thanh-ca-44781',
]
const XTDIENTAU: [string, string] = [
  'Lm Xuân Thảo — "Diễn tấu theo tinh thần Bình ca" (PDF, nghiasinh.org)',
  'https://www.nghiasinh.org/userfiles/tonghop/04_2016/dientautheotinhthanbinhcalmxuanthao.pdf',
]
const VC251555: [string, string] = [
  'VietCatholic — "Mừng sinh nhật thứ 70 của LM nhạc sĩ Văn Chi: Những Nốt Nhạc Cho Đời"',
  'http://www.vietcatholic.net/News/html/251555.htm',
]
const VC283403: [string, string] = [
  'VietCatholic — "Thánh lễ tạ ơn 48 năm linh mục nhạc sĩ Paul Văn Chi 1975-2023" (16.6.2023)',
  'https://vietcatholic.net/News/html/283403.htm',
]
const SBS: [string, string] = [
  'SBS Tiếng Việt — "Linh Mục Chu Văn Chi và hành trình phục vụ cộng đồng Công giáo Việt Nam tại Úc"',
  'https://www.sbs.com.au/language/vietnamese/vi/podcast-episode/ky-niem-50-nam-phat-thanh-cua-sbs-gap-go-linh-muc-chu-van-chi/nuvnferd0',
]
const OCPTG: [string, string] = ['OCP — trang tác giả "Paul Van Chi Chu"', 'https://ocp.org/en-us/artists/3446']
const OCPSACH: [string, string] = [
  'OCP — "Catholic Choral Music in Vietnam 1945-1975" (trang sản phẩm)',
  'https://www.ocp.org/en-us/collections/dg/630/catholic-choral-music-in-vietnam-1945-1975',
]
const BACH: [string, string] = [
  'Nguyễn Bách — luận án tiến sĩ về nhạc hợp xướng ở Sài Gòn trước 1975 và TP.HCM (Học viện Âm nhạc Quốc gia Việt Nam, 2015)',
  'https://vnam.edu.vn/rs/Document/2015-NguyenBach-LATS.pdf',
]
const KIEU: [string, string] = [
  'Tùng Công Kiều — A Project on Developing Catholic Liturgical Music in Vietnam (S.T.M., Boston University, 2009)',
  'https://open.bu.edu/bitstreams/8c0db2dc-919b-4ebd-924d-6df6ea4e21d3/download',
]
const HOANG26: [string, string] = [
  'Tuan Hoang — "Postcolonial Catholicism in South Vietnam, 1954–1975" (Brill, 2026), tr. 387–391',
  'https://tuannyriver.com/wp-content/uploads/2026/09/2026-hoang-postcolonial-catholicism-in-south-vietnam.pdf',
]
const THAOCH2: [string, string] = [
  'Nguyễn Xuân Thảo — Music Ministry: The Inculturation of Liturgical Vocal Music in Vietnam (D.Min., CTU, 2007), Chương II, tr. 63–184',
  'https://res.hailinhquehuong.com/media/files/04-05%20Chapter%20II%20pp_63-184.pdf',
]
const KHELGT: [string, string] = [
  'Trần Văn Khê — "Lời giới thiệu và khen ngợi" luận án của Nguyễn Xuân Thảo (18.4.2008)',
  'https://nghiasinh.org/userfiles/tonghop/08_2008/NXT-TVK.pdf',
]
const RFAHL: [string, string] = [
  'RFA — "Nhạc phẩm Hang Bêlem" (24.12.2009)',
  'https://www.rfa.org/vietnamese/in_depth/Musician-Hai-Linh-and-the-song-Belem-Cave-12242009110442.html',
]
const NSHL: [string, string] = [
  'Nguyễn Trọng Đa — tường thuật buổi tưởng niệm 25 năm Hải Linh (31.5.2013), nghiasinh.org',
  'https://nghiasinh.org/userfiles/tonghop/11_2013/nxtbytrongda.pdf',
]
const WPHL: [string, string] = ['Wikipedia tiếng Việt — "Hải Linh" (đầu mối)', 'https://vi.wikipedia.org/wiki/Hải_Linh']
const CGVDTLBT: [string, string] = [
  'Báo Công giáo và Dân tộc — "77 năm Nhạc đoàn Lê Bảo Tịnh (1945–2022)"',
  'https://www.cgvdt.vn/77-nam-nhac-doan-le-bao-tinh-1945-2022-loi-ca-nguyen-mot-doi-cua-dan-chua-viet-nam-tu-chiec-noi-so-kien-ha-nam_a15115',
]
const RFAXM: [string, string] = [
  'RFA — chương trình nhạc Giáng sinh Việt Nam (27.12.2011)',
  'https://www.rfa.org/vietnamese/news/programs/MusicForWeekend/vn-christmas-songs-12272011111223.html',
]
const BTT26: [string, string] = [
  'Bùi Trung Thành — "Tiếp biến văn hóa âm nhạc Công giáo trong nhạc cụ và nhạc hát ở Việt Nam" (Tạp chí Dân tộc học và Tôn giáo học, số 1 (06), 2026, tr. 110–125)',
  'https://vjol.info.vn/tcdantochocvatongiaohoc/article/view/135319',
]
const BTT24: [string, string] = [
  'Bùi Trung Thành — "Đặc trưng văn hóa âm nhạc Công giáo của giáo dân giáo xứ Đồng Bài và giáo xứ An Ngải hiện nay" (Nghiên cứu Tôn giáo, số 9, 2024)',
  'https://vjol.info.vn/rsr/article/view/126427',
]
const TGP2: [string, string] = [
  'Ủy ban Thánh nhạc HĐGMVN — "Thánh nhạc và đời sống đức tin của Dân Chúa tại Việt Nam 50 năm qua (2)" (tgpsaigon.net, 4.11.2010)',
  'https://tgpsaigon.net/bai-viet/thanh-nhac-va-doi-song-duc-tin-cua-dan-chua-tai-viet-nam-50-nam-qua-2-39875',
]
const TVTC: [string, string] = [
  'Thư viện Thánh Ca — bảng "Nhạc Sĩ Thánh Ca" (thuvienthanhca.com, đăng 30.10.2023; nguồn thứ cấp, không ghi gốc dữ liệu)',
  'https://thuvienthanhca.com/nhac-si-thanh-ca/',
]
const UBTN: [string, string] = [
  'hdgmvietnam.com — "Ủy ban Thánh nhạc" (cập nhật 11.12.2017)',
  'https://hdgmvietnam.com/chi-tiet/ub-thanh-nhac-31511',
]

/** Thánh ca Việt Nam — nhạc sĩ và công trình nghiên cứu. Nguồn ghi trong `refs` từng bài. */
export const thanhCaD: Article[] = [
  {
    slug: "kim-long",
    title: "Linh mục nhạc sĩ Kim Long",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Kim Long", "Phêrô Nguyễn Kim Long", "nhạc sĩ Kim Long", "Lm Kim Long"],
    summary: "Phêrô Nguyễn Kim Long (9.1.1941 – 17.6.2025), linh mục học bình ca ở Rôma, tác giả loạt tuyển tập Ca lên đi; số bài được báo chí ghi từ hơn 3.000 đến hơn 5.000 tuỳ nguồn.",
    refs: [PLO, TT, VCNET50085, VIWIKI_KL, TGP2009, RFA2011, TGP2],
    body: `
## Tên và tiểu sử
Tên gọi đầy đủ theo báo chí là **Phêrô Nguyễn Kim Long**, thường gọi nhạc sĩ Kim Long (Pháp luật TP.HCM; Tuổi Trẻ). Các mốc dưới đây lấy từ những nguồn báo chí và tiểu sử đã nêu trong mục tài liệu; riêng chỗ nguồn lệch nhau sẽ được ghi rõ.

- **Sinh 9.1.1941** tại giáo xứ Bách Tính, Nam Định (giáo phận Bùi Chu).
- **1949**: vào ca đoàn giáo xứ lúc 8 tuổi.
- **1954**: di cư cùng gia đình; học tiểu chủng viện Thánh Phanxicô.
- **1957**, năm 17 tuổi: viết bài đầu tay "Con hân hoan (bước lên bàn thờ Chúa)", được linh mục Ngô Duy Linh khích lệ (xem [[ngo-duy-linh]]); tập đầu tiên mang tên "Suối Thiêng". Bản tổng kết 50 năm thánh nhạc của Ủy ban Thánh nhạc ghi tập "Suối Thiêng" vào năm 1959.
- **1960**: phổ lời Việt "Kinh Hoà Bình", dựa trên bản dịch của Giám mục Philípphê Nguyễn Kim Điền. Trong cuộc phỏng vấn RFA năm 2011, chính ông nói đã viết bài hoà bình "lúc 20 tuổi", khớp với mốc này.
- **1968**: thụ phong linh mục, sau thời gian học Đại chủng viện Thánh Giuse Sài Gòn.
- **1969 – 1972**: du học Học viện Thánh nhạc Giáo hoàng ở Rôma, chuyên bình ca; tốt nghiệp xuất sắc năm 1972. Báo chí ghi "1969 được cử đi học", các nguồn khác ghi năm tốt nghiệp, hai mốc này không mâu thuẫn.
- **1973**: về nước làm chánh xứ Đức Hoà (giáo phận Mỹ Tho), đồng thời dạy thánh nhạc ở Đại học Đà Lạt, Đại học Thành Nhân và Đại chủng viện Sài Gòn.
- **Sau 1975**: dạy ở Trung tâm Mục vụ Tổng giáo phận TP.HCM, các đại chủng viện Hà Nội, Huế, Sài Gòn, cùng nhiều dòng tu và giáo phận.
- Ông giữ chức phó chủ tịch Ủy ban Thánh nhạc và tổng thư ký Ủy ban Phụng tự thuộc HĐGMVN. Bản Wikipedia tiếng Việt cho rằng ông thôi chức phó chủ tịch năm 2012 (người biên soạn chưa đối chiếu được nguồn thứ hai).
- **1994**: bệnh nặng, xin Chúa thêm thời gian để hoàn tất bộ Thánh vịnh đáp ca (theo bài tiểu sử trên VietCatholic).
- **Mất 12 giờ ngày 17.6.2025**, thọ 84 tuổi, tại nhà ở Tân Bình, TP.HCM; an táng tại giáo xứ Đức Hoà, Long An.

## Các tuyển tập
Theo Wikipedia tiếng Việt và bài tiểu sử VietCatholic, các tập hợp chính gồm:

| Tuyển tập | Ghi chú |
|---|---|
| *Ca lên đi* | 25 tập; tập đầu thường được nêu là năm 1961 (xem "Điều chưa rõ"); ấn bản điện tử *Ca lên đi 3* có imprimatur ngày 29.4.2001 của giáo phận Phú Cường, đó là ngày chuẩn nhận, không phải năm xuất bản đầu |
| *Chung lời ngợi ca* | 5 tập, cùng bạn hữu và môn sinh |
| *Bài ca suy niệm* | 10 tập (tập 1–5 trước 2001; tập 6 năm 2002; tập 7–9 năm 2004–2006; tập 10 năm 2007) |
| *Cộng đoàn hoà ca* | 2 tập |
| *Những bông hoa nhỏ* | 2 tập |
| *Thánh vịnh – Đáp ca*; *Tuyển hợp ca Thánh vịnh – Thánh ca*; *Hợp ca 2* (2003) | không có năm cho từng tập |

Một số bài được nêu tên: "Con hân hoan" (1957), "Kính chào Nữ Vương" (1957), "Kinh Hoà Bình" (1960), "Chúa không lầm", "Từ ngàn xưa Cha đã yêu con", "Mẹ đứng đó", "Chúa gọi con về", "Mùa xuân cứu thế". Năm 2007 ông có đêm hoà nhạc "Ca lên đi – mừng Chúa Giáng sinh" tại Đại chủng viện Thánh Giuse Hà Nội, với nhiều ca đoàn Hà Nội và ca đoàn Vượt Qua (Sài Gòn).

## Số lượng bài: nguồn không thống nhất
| Nguồn | Con số |
|---|---|
| Pháp luật TP.HCM (2025) | hơn 4.000 |
| Tuổi Trẻ (2025) | khoảng 5.000 |
| Wikipedia tiếng Việt (trích báo Công giáo và Dân tộc) | hơn 3.500 |
| Bài tiểu sử VietCatholic | hơn 3.000, và ở chỗ khác hơn 1.000 bài suy niệm |

Cách viết an toàn là "từ vài nghìn đến khoảng 5.000 bài tuỳ nguồn". Các con số này đều là ước lượng của báo chí, chưa có bảng kê.

## Vai trò
Ông là một trong những nhạc sĩ đầu tiên của miền Nam học bình ca bài bản ở Rôma rồi đưa kinh nghiệm đó vào sáng tác và giảng dạy; xem [[kim-long-ve-thanh-nhac]] về quan điểm và các giáo trình. Ông cũng đề xướng tập *Chung lời ngợi ca* khoảng năm 1985: tập 1 gồm khoảng 10 nhạc sĩ với 50 bài; các tập 2–5 gồm 65 nhạc sĩ, khoảng 400 bài (theo bản tổng kết của Ủy ban Thánh nhạc). Về phong cách, báo chí mô tả bài ngắn gọn, "xinh xắn"; "Chúa không lầm" viết điệu rê thứ và chuyển trưởng cùng chủ âm ở điệp khúc (Nguyễn Thụy Kha 2009). Bài "Mẹ đẹp tươi" được Tùng Công Kiều dẫn làm ví dụ cho hướng ngũ cung, xem [[ngu-cung-trong-thanh-ca]] và [[bon-huong-sang-tac-thanh-ca]].

## Điều chưa rõ
- **Năm *Ca lên đi* tập đầu**: Tuổi Trẻ và báo Công giáo và Dân tộc ghi 1961, nhưng ông thụ phong năm 1968. Hai điều không mâu thuẫn tuyệt đối vì ông có thể sáng tác trước khi chịu chức; cần xem bìa sách gốc. Wikipedia lại gộp 1958 – 2001 cho cả loạt tuyển tập.
- Nhà xuất bản và năm của từng tập: chưa có nguồn.
- Giáo trình *Nhạc lý căn bản*, *Hoà âm*, *Đối âm*... chỉ có tên đề mục trong bài tiểu sử; chưa tìm ra bản in.
- Ông viết gì về quan hệ thanh điệu – giai điệu: chưa tìm được văn bản của chính ông.

## Câu hỏi ôn tập
1. Vì sao con số "bao nhiêu bài" của Kim Long chưa thể ghi thành một số duy nhất?
2. Hai mốc 1969 và 1972 trong tiểu sử Kim Long chỉ cùng một quá trình học, hay là hai sự kiện khác nhau?
3. Imprimatur ngày 29.4.2001 của *Ca lên đi 3* cho biết điều gì, và không cho biết điều gì?

**Xem thêm:** [[kim-long-ve-thanh-nhac]], [[ngo-duy-linh]], [[uy-ban-thanh-nhac]], [[thanh-nhac-mien-nam-1954-1975]], [[thanh-ca-viet-nam]]
`,
  },
  {
    slug: "kim-long-ve-thanh-nhac",
    title: "Theo Kim Long: thánh nhạc là lời cầu nguyện",
    category: 'thanhca',
    also: ['sacred'],
    aliases: ["quan điểm thánh nhạc của Kim Long", "ictus arsis thesis"],
    summary: "Quan điểm của Lm Kim Long (phỏng vấn RFA 2011, bài tiểu sử, đoạn trích của Lm Xuân Thảo): thánh nhạc trước hết là lời cầu nguyện, giai điệu đơn sơ, học bình ca để viết thánh ca tiếng Việt; kèm ba tham luận về bình ca và danh sách giáo trình.",
    refs: [RFA2011, VCNET50085, XTDIENTAU, TGP2009],
    body: `
## Thánh nhạc "trước hết và trên hết là lời cầu nguyện"
Trong cuộc phỏng vấn của RFA năm 2011, Lm Kim Long nêu quan điểm nền: thánh nhạc là một phần của phụng vụ nên mục đích cũng như phụng vụ, là tôn vinh Thiên Chúa và thánh hoá tín hữu. Ông viện đến tự sắc của Đức Piô X năm 1903 (xem [[tu-tra-le-sollecitudini-den-vatican-ii]]). Lưu ý bài phỏng vấn là lời kể lại trên đài phát thanh nên có chỗ lẫn các vị giáo hoàng mang tên Piô; khi cần ngày tháng văn kiện, hãy dùng nguồn Toà Thánh.

Các ý chính trong bài phỏng vấn:
- Thánh nhạc là lời hát của cộng đoàn, nên giai điệu cần "đơn sơ, trầm lắng"; "đơn sơ" được hiểu là mọi người dễ hát và cùng hát.
- Nhạc phụng vụ luôn phải có lời.
- Ông mô tả một chuỗi từ tư tưởng, lời, giai điệu đến cử chỉ và múa, như các tầng biểu đạt kế tiếp nhau.

Bài tiểu sử đăng trên VietCatholic còn ghi hai câu mang tính châm ngôn của ông: thánh ca "được cầu nguyện hai lần", khi sáng tác và khi hát; và viết thánh ca "không phải vì mục đích để lại những tác phẩm lưu danh". Đây là bài viết về ông lúc còn tại chức, nên người biên soạn xem như nguồn thứ cấp, không phải văn bản của chính ông.

## Học bình ca như một ngôn ngữ
Ông chuyên bình ca ở Rôma vì cho rằng bình ca soi sáng việc sáng tác thánh ca ở mọi thời (bài tiểu sử VietCatholic). Một bài tóm tắt của Tổng giáo phận Hà Nội nói rằng ông học bình ca như một ngôn ngữ biểu đạt bản văn phụng vụ tiếng Việt, chứ không nhằm "Việt hoá bình ca" bằng cách dịch lời Latinh; tuy nhiên trang đó không mở được khi tra cứu, nên nhận định này **chưa đối chiếu được nguyên văn**. Về bối cảnh bình ca, xem [[thanh-ca-gregorian]] và [[viet-binh-ca-cho-tieng-ban-dia]].

## Ba tham luận về tiết tấu bình ca
Lm Xuân Thảo, trong bài "Diễn tấu theo tinh thần Bình ca", liệt kê ba bài của Kim Long đăng ở kỷ yếu Hội thảo Thánh nhạc (nội san *Hương Trầm*):

| Hội thảo | Tên bài | Trang |
|---|---|---|
| HT 20 | "Mấy cảm nghiệm bình ca khi sáng tác thánh ca" | tr. 9–18 |
| HT 21 | "Tiết tấu bình ca" | tr. 50–58 |
| HT 22 | "Phác hoạ tiết tấu bài thánh ca thông thường" | tr. 22–30 |

Người biên soạn chưa tìm được nội dung gốc của ba bài này, chỉ có các đoạn Lm Xuân Thảo trích lại. Theo các đoạn ấy, Kim Long phân biệt bình ca với tân nhạc ở thang âm – điệu thức, tiết tấu và cách điều khiển trình tấu, đồng thời nêu quy tắc về *ictus* (điểm tựa của nhịp) và cặp *arsis – thesis* (nhấn lên – hạ xuống): bước ngưng ở cuối một tiết tấu không dừng cứng mà vươn dần; bốn phách đơn chia thành hai phách kép, năm phách đơn chia theo hai cách 2/8 + 3/8 hoặc ngược lại tuỳ lời ca. Vì đây là lối trích gián tiếp, chi tiết về từng quy tắc *ictus* (ví dụ vị trí trong nhóm bốn nốt) cần đối chiếu bản gốc trước khi dùng để hướng dẫn thực hành. Trong cùng bài, danh sách năm thứ tự ưu tiên về diễn tấu là của Hải Linh chứ không phải Kim Long.

## Các giáo trình
Bài tiểu sử VietCatholic liệt kê các bài giảng và giáo trình của ông: *Nhạc lý căn bản*; *Hoà âm* và *Đối âm*; *Hướng dẫn đánh nhịp*; *Một vài kinh nghiệm để viết thánh ca*; *Thánh nhạc trong Phụng vụ*. Mới chỉ là tên đề mục. Nơi xuất bản, năm và số trang đều chưa có nguồn. Riêng sách *Thánh ca trong Phụng vụ* còn được văn bản của Ủy ban Thánh nhạc về chuẩn nhận bài hát dẫn lại ở các trang 18–44, 79–84 và 97, nhưng nội dung những trang này chưa được đọc.

## Lịch sử thánh nhạc qua lời ông kể
Cũng trong bài phỏng vấn, ông kể lại tiến trình: thập niên 1930 – 1940 là đặt lời Việt vào nhạc Pháp hoặc Latinh; sau đó ca đoàn người Việt tự sáng tác, với các tên Lê Bảo Tịnh, Hùng Lân, Tâm Bảo, Nguyễn Khắc Xuyên; ca đoàn Sao Mai ở Bùi Chu; Hải Linh, Ngô Duy Linh, Võ Thanh; Phát Diệm có Lm Hùng Sĩ, Hải Phòng có Lm Chu Cung; thập niên 1950, Lm Vinh Hạnh làm thơ và nhạc trích từ Kinh Thánh; rồi đến nhạc "đạo vào đời". Một chi tiết nhỏ: tên "Lê Bảo Tịnh" ở đây là tên nhạc đoàn đặt theo thánh Phaolô Lê Bảo Tịnh, không phải một nhạc sĩ (xem [[nhac-doan-le-bao-tinh]]).

## Điều chưa rõ
- Quan điểm của ông về thanh điệu tiếng Việt và giai điệu: chưa tìm được văn bản trực tiếp. Bạn tham khảo [[thanh-dieu-va-giai-dieu-thanh-ca]] cho các hệ phân tích khác.
- Nội dung đầy đủ của ba tham luận HT 20 – 22.

## Câu hỏi ôn tập
1. "Đơn sơ" trong lời của Kim Long có nghĩa là gì, và vì sao ông gắn nó với việc cộng đoàn cùng hát?
2. Trong bài của Lm Xuân Thảo, điều nào là của Kim Long và điều nào là của Hải Linh?
3. Vì sao người biên soạn chưa dùng các quy tắc *ictus* ở trên làm hướng dẫn thực hành?

**Xem thêm:** [[kim-long]], [[thanh-ca-gregorian]], [[viet-binh-ca-cho-tieng-ban-dia]], [[tu-tra-le-sollecitudini-den-vatican-ii]], [[hai-linh]]
`,
  },
  {
    slug: "van-chi",
    title: "Linh mục nhạc sĩ Văn Chi",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Văn Chi", "Paul Chu Văn Chi", "Chu Văn Chi", "Paul Van Chi Chu", "Trầm khúc hoan ca"],
    summary: "Paul Chu Văn Chi (sinh 14.5.1949), linh mục thụ phong 15.6.1975, bị giam từ 5.3.1984, sang Úc 1989; tác giả loạt tập Trầm khúc hoan ca và cuốn Catholic Choral Music in Vietnam 1945–1975.",
    refs: [VC251555, VC283403, SBS, OCPTG, OCPSACH, TGP2],
    body: `
## Tên gọi
Các nguồn viết tên không đồng nhất: VietCatholic ghi **Paul Chu Văn Chi**, SBS ghi **Chu Văn Chi**, nhà xuất bản OCP ghi **Paul Van Chi Chu**. Paul là Phaolô; họ là Chu, "Văn Chi" là tên gọi và bút danh quen dùng. Hai biệt danh khác lấy từ một tóm tắt tìm kiếm của trang không mở được nên người biên soạn bỏ qua.

## Tiểu sử
- **Sinh 14.5.1949**. VietCatholic ghi quê Duyên Phúc, Ninh Bình; VietCatholic (bài 2023) và SBS ghi "Hà Nam Ninh", tên tỉnh sau 1975, nên khác cách gọi nhưng chưa chắc là mâu thuẫn.
- **1954**: cha mẹ và làng di cư vào Nam.
- **Học vấn**: theo bài tạ ơn năm 2023, ông học tiểu học ở Gia Kiệm (Long Khánh) 1954 – 1960, tiểu chủng viện Long Xuyên 1960 – 1968, Đại chủng viện Thánh Giuse Sài Gòn 1968 – 1975, đồng thời học Suối Nhạc 1968 – 1974, Đại học Văn Khoa Sài Gòn 1970 – 1972, Đại học Thành Nhân 1972 – 1974. Bài kỷ niệm 70 tuổi ghi các chặng chủng viện lệch vài năm (1961 – 1968 và 1969 – 1975), nên khi dùng cần nêu nguồn.
- **15.6.1975**: thụ phong linh mục tại Sài Gòn, sau khi tình nguyện chịu chức sớm khi giám mục gọi các chủng sinh năm cuối.
- **1975 – 1984**: phụ tá ở Thái Hoà rồi Thái An, Long Xuyên.
- **5.3.1984**: bị bắt. Bài kỷ niệm 70 tuổi cho biết ông mắc loét dạ dày xuất huyết, được thả tháng 9.1987 và mổ cắt một phần dạ dày ở bệnh viện Saint Paul Sài Gòn. Bài năm 2023 tóm: khoảng bốn năm trại cải tạo và khoảng một năm ở bệnh viện; hai bài sáng tác trong thời gian này là "Như Lời Dâng Hiến" và "Chiều Mưa Cầu Mẹ" (tháng 5.1984). OCP chỉ nói "bị giam vài năm".
- **5.1988**: rời Việt Nam bằng thuyền. **24.11.1989**: được Hồng y Clancy bảo lãnh từ trại tị nạn ở Philippines sang Úc, ở Sydney từ đó. Hai mốc 1988 và 1989 khớp với nhau, không mâu thuẫn.
- Ông làm chaplain cộng đoàn Công giáo Việt Nam ở Sydney 1989 – 1996 và 2000 – 2023, gián đoạn vì đi học ở Mỹ 1996 – 1999; chăm sóc Liên đoàn Ca đoàn Lê Bảo Tịnh, Cursillo, Legio Mariae, Vinh Sơn.
- **12.6.1999**: nhận bằng Master of Arts in Music, California State University, Los Angeles. Trang OCP lại viết ông "đang làm tiến sĩ nghiên cứu âm nhạc" ở University of New South Wales; người biên soạn không tìm thấy luận án nào, và thông tin này của OCP có vẻ cũ.

## Sáng tác
- Bài đầu tay "Tình Yêu Chúa" năm 1965.
- Đến 1988 ở Việt Nam: 10 tập *Trầm khúc hoan ca*, khoảng 700 bài (thánh ca và nhạc sinh hoạt, du ca); ở hải ngoại thêm trên 700 bài, in thành các tập 11 – 25 tại Philippines, Úc, Mỹ. Tổng khoảng 1.450 bài theo VietCatholic; SBS chỉ nói "hàng ngàn ca khúc".
- Bài tiêu biểu được nêu: "Con đường Chúa đã đi qua" (lời dựa Đàng Thánh Giá; OCP có bản "The Way of Love"), "Yêu bằng tình loài người" (du ca; các bài báo ghi 1972 và 1973 không nhất quán), "Hành trình với Mẹ", "Trang sử mẹ quê hương Việt Nam", "Trường ca hãy tạ ơn Chúa". OCP còn liệt kê "Con Xin Dâng Mình", "Nhớ Lời Dấu Yêu", "Tình Hồng Dâng Mình".
- Ông làm giám đốc âm nhạc các đại hội Marian ở Mỹ và Sydney, và tham gia liên hoan "Hát Lên Mừng Chúa" 2015 ở California.
- Câu ông tự tổng kết trong buổi tạ ơn: "Tất cả là hồng ân. Tất cả là tạ ơn."

## Sách
Ông là tác giả cuốn *Catholic Choral Music in Vietnam 1945–1975*, xem [[van-chi-catholic-choral-music-in-vietnam]]. Người biên soạn không tìm thấy sách tiếng Việt nào của ông; bài năm 2023 cũng nói rõ là không nhắc sách.

## Điều chưa rõ
- Con số "1.400" bài trong một tóm tắt tìm kiếm không rõ gốc, bỏ qua; số 1.450 chỉ có một nguồn.
- Có phải người ký tên "Văn Chi" trong tập *Chúc Tụng Chúa* (Đại chủng viện Sài Gòn) và tác giả *Trầm khúc hoan ca* sau 1975 là cùng một người hay không: một bản tổng kết của Ủy ban Thánh nhạc nêu cả hai tên, nhưng không khẳng định.

## Câu hỏi ôn tập
1. Vì sao có thể thấy "1988" và "1989" cùng được dùng cho việc ông rời Việt Nam mà không phải là hai nguồn mâu thuẫn?
2. Hai chặng chủng viện trong bài 2019 và bài 2023 lệch nhau như thế nào?
3. Con số 1.450 bài đến từ đâu, và vì sao nên ghi là con số của một nguồn?

**Xem thêm:** [[van-chi-catholic-choral-music-in-vietnam]], [[thanh-ca-hai-ngoai]], [[thanh-nhac-mien-nam-1954-1975]], [[nhac-doan-le-bao-tinh]], [[thanh-ca-viet-nam]]
`,
  },
  {
    slug: "van-chi-catholic-choral-music-in-vietnam",
    title: "Theo Văn Chi: Catholic Choral Music in Vietnam 1945–1975",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Catholic Choral Music in Vietnam", "sách của Văn Chi về hợp xướng Công giáo"],
    summary: "Mô tả cuốn Catholic Choral Music in Vietnam 1945–1975 của Paul Văn Chi (Portland, 286 tr.): ba thời kỳ 1945–55, 1955–70, 1970–75 và các tiêu chí phân tích; người biên soạn chưa đọc toàn văn.",
    refs: [OCPSACH, OCPTG, BACH, KIEU, HOANG26],
    body: `
## Lưu ý trước khi đọc
Người biên soạn **chưa đọc toàn văn** cuốn sách này; sách còn bản quyền và không có bản xem trước hợp pháp. Mọi điều dưới đây lấy từ trang giới thiệu của nhà xuất bản và từ cách các học giả khác nhắc tới nó (Nguyễn Bách 2015; Tùng Công Kiều 2009; Tuan Hoang 2026). Mục lục chi tiết và nội dung từng chương: chưa có.

## Thông tin thư mục
- Tác giả: Paul Văn Chi (Chu Văn Chi); xem [[van-chi]].
- Nhà xuất bản: Oregon Catholic Press, Portland (Mỹ). Kiều và Hoang ghi "Portland: Pastoral Press, 2002". Luận án của Nguyễn Bách ghi nơi in là "Oregon (Úc)", rõ ràng là nhầm.
- 286 trang, bìa mềm, ISBN 1-56929-045-8 (theo tóm tắt trang sản phẩm của OCP; trang này không mở trực tiếp được).
- Năm xuất bản không có trong dữ liệu của chính trang OCP mà người biên soạn đọc được; năm 2002 đến từ Kiều và Hoang. Bách thì nhắc tới nó như một luận văn năm 1999, tức cùng năm ông Văn Chi nhận bằng Master of Arts ở California State University, Los Angeles. Người biên soạn chưa thấy văn bản nào xác nhận trực tiếp mối quan hệ giữa luận văn 1999 và bản in 2002.

## Ba thời kỳ
Theo mô tả của nhà xuất bản, sách chia nền hợp xướng Công giáo Việt Nam thành ba giai đoạn:

| Giai đoạn | Tên gọi theo mô tả |
|---|---|
| 1945 – 1955 | nền móng (thành hình) |
| 1955 – 1970 | phát triển |
| 1970 – 1975 | trưởng thành (chín muồi) |

Đây chỉ là một trong nhiều cách chia thời kỳ; hãy đối chiếu với các cách khác ở [[phan-ky-thanh-nhac-viet-nam]].

## Tiêu chí phân tích
Mô tả của OCP nêu các yếu tố âm nhạc mà sách xem xét: tiết tấu, giai điệu, hoà âm, lời ca, thể thơ và nhịp, kết cấu, tempo, cường độ, nhạc cụ và hình thức. Ngoài ra sách bàn về kỹ thuật sáng tác, ảnh hưởng từ các nền nhạc khác, các nhà soạn nhạc, việc xuất bản, bản chất của các ca đoàn Việt Nam, và tác động của biến chuyển chính trị – xã hội lên từng thời kỳ.

## Cuốn sách được dùng ra sao
- Tuan Hoang (Brill, 2026) dùng sách làm nguồn chính cho phần thánh nhạc miền Nam; ví dụ ông dẫn tr. 66 – 76 của sách cho các bài viết năm 1945 như "Hang Bêlem" và một bài về Đức Mẹ Fatima (xem [[hang-belem-1945]]).
- Tùng Công Kiều dẫn tr. 96 và tr. 124 cho các nhận xét về số bài và tình hình ca đoàn, và tr. 147 cho nhận xét về số ca đoàn giáo xứ.
- Nguyễn Bách (2015) có nhận xét phê bình: luận văn của Văn Chi có "chi tiết còn mơ hồ, lẫn lộn", chẳng hạn khi coi nền hợp ca hình thành từ "Hang Bê Lem" của Hải Linh hay từ thánh ca của Nguyễn Khắc Xuyên năm 1944 (Chi, tr. 56 – 98); ông cũng cho rằng bài "Nửa đêm mừng Chúa ra đời" bị xếp nhầm vào giai đoạn 1955 – 1970 (Chi, tr. 102). Theo Bách, phần phân tích âm nhạc học chỉ chiếm khoảng một phần ba đến một phần năm mỗi chương. Đây là đánh giá của một nghiên cứu sinh trong luận án khác, không phải kết luận chung.

## Điều chưa rõ
- Mục lục chi tiết, danh mục tác phẩm được phân tích: chưa có.
- Mối liên hệ giữa luận văn 1999 và sách 2002 (xem trên).
- "1944" của Nguyễn Khắc Xuyên chỉ được biết qua Bách, chưa đối chiếu với gốc.

## Câu hỏi ôn tập
1. Vì sao bài viết này nhấn mạnh rằng người biên soạn chưa đọc toàn văn cuốn sách?
2. Ba thời kỳ của Văn Chi khác với cách chia 1910 – 1940, 1945 – 1954 và 1954 – 1975 của Tuan Hoang ở điểm nào?
3. Hãy nêu một phê bình của Nguyễn Bách và cho biết vì sao đó là ý kiến của riêng ông.

**Xem thêm:** [[van-chi]], [[phan-ky-thanh-nhac-viet-nam]], [[hang-belem-1945]], [[cac-cong-trinh-nghien-cuu-thanh-ca]], [[thanh-nhac-mien-nam-1954-1975]]
`,
  },
  {
    slug: "hai-linh",
    title: "Nhạc sư Hải Linh",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Hải Linh", "Phanxicô Trần Văn Linh", "Trần Văn Linh", "ngũ âm hoá Hải Linh"],
    summary: "Hải Linh (Phanxicô Trần Văn Linh, 1920 – 6.1.1988), giáo dân, nhạc sư và ca trưởng; tác giả Hang Bêlem (1945), Nữ Vương Hoà Bình (giải nhất 1959), trường ca Ave Maria thơ Hàn Mặc Tử; lối viết ngũ âm hoá và giữ thanh điệu ở mọi bè.",
    refs: [RFAHL, NSHL, WPHL, THAOCH2, KHELGT, HOANG26, BACH, TVTC],
    body: `
## Con người
Tên thật **Trần Văn Linh**, tên thánh Phanxicô (một số bài ghi Phanxicô Átxidi). Ông là **giáo dân**: bảng tra của Thư viện Thánh Ca ghi "Gd", và các nguồn đều gọi ông là nhạc sư chứ không là linh mục. Wikipedia tiếng Việt nêu thêm vài bút danh và tên khác (Minh Đệ, Trần Văn Đệ, Trần Văn Trị) mà người biên soạn chưa kiểm được ở nguồn nào khác nên không dùng.

- **Sinh 1920** tại làng Ứng Luật, phủ Kim Sơn, Ninh Bình (địa phận Phát Diệm) theo RFA; Wikipedia ghi cụ thể 4.10.1920 nhưng không rõ gốc.
- Học tiểu chủng viện Ninh Cường, trường Thầy Giảng Bùi Chu, rồi dạy Pháp văn và âm nhạc ở đó.
- **Paris**: Wikipedia ghi ông học từ 1951 và tốt nghiệp hạng ưu 1956; Tuan Hoang ghi 1950 – 1956 ở trường César Franck và Institut Grégorien, viết luận văn về "màu sắc Việt Nam" trong bình ca. Hai nguồn lệch một năm ở điểm bắt đầu. Trần Văn Khê nhớ ông quen Hải Linh khi Hải Linh học nhạc ở Paris.
- **1956** về Sài Gòn dạy hợp ca và lập ca đoàn Hồn Nước (Hoang ghi 1957). Hồn Nước hát cả nhạc dân tộc lẫn thánh ca và thu nhiều album phát hành rộng trong thập niên 1970.
- **1961** học bổng Đại học Ohio; **1970 – 1975** dạy Đại học Đà Lạt; 1973 – đầu 1975 là phân khoa trưởng Phân khoa Âm nhạc (theo Wikipedia).
- **8.5.1986** sang Mỹ. **Mất 6.1.1988** (Wikipedia, Thư viện Thánh Ca), RFA ghi "California, nhồi máu cơ tim", Wikipedia ghi Los Angeles. Buổi tưởng niệm 25 năm tổ chức 31.5.2013 xác nhận mốc 1988.

## Tác phẩm có nguồn mạnh
| Tác phẩm | Điều biết được |
|---|---|
| [[hang-belem-1945]] | Giáng sinh 1945, Hải Linh 25 tuổi |
| "Nữ Vương Hoà Bình" | giải nhất cuộc thi sáng tác cho Đại hội Thánh Mẫu toàn quốc 1959; Nam Hải phối khí 1986 |
| Trường ca "Ave Maria" | phổ thơ Hàn Mặc Tử ("Thánh Nữ Đồng Trinh Maria"), thực hiện 1956 – 1986; giọng Fa trưởng, ba phần (theo Nguyễn Bách) |
| "Đà Lạt trăng mờ" | thơ Hàn Mặc Tử, 1958; diễn lần đầu ở Thảo Cầm Viên Sài Gòn với dàn nhạc do ông chỉ huy |
| "Thằng Bờm" | hợp xướng từ ca dao, 1970 |
| "Ngài là Thiên Chúa" (Te Deum) | phổ lời dịch của Lm Anh Minh |
| "Bài Ca Khải Hoàn", "Nhân Chứng Đức Tin" (1987) | hai tác phẩm cuối đời cho lễ tôn phong 117 Thánh Tử Đạo Việt Nam 19.6.1988 |
| "Dạo khúc cung thương" | 1983, cho đàn phím; Nam Hải soạn lại cho dàn nhạc sau 1988 |

Wikipedia còn liệt kê nhiều tên khác (Bến Thiên Đàng, Khúc ca mặt trời, Chinh phụ ngâm...) và con số hơn 300 tác phẩm; người biên soạn chưa đối chiếu được.

## Lối viết: ngũ âm hoá và giữ thanh điệu
Chương II luận án của Nguyễn Xuân Thảo (tr. 180 – 184) dành một phần cho Hải Linh làm "mẫu hội nhập thành công". Theo đó, ông dùng điệu thức ngũ cung và thành ngữ dân ca, chuyển điệu, chuyển hệ, thể lục bát và biến thể lời; **"ngũ âm hoá"** thang bảy âm bằng cách tránh các bậc IV và VII, đặt chúng ở phách nhẹ hoặc dùng như nốt trang trí; dùng chủ yếu hợp âm I, IV, V, VI; có kỹ thuật "đa điệu hoá". Thảo kết luận nhạc Hải Linh giữ thanh điệu cả ở bè chính lẫn bè phụ. Về khái niệm, xem [[am-giai-ngu-cung]] và [[hoa-am-cho-giai-dieu-ngu-cung]]; về bài toán thanh điệu trong hợp xướng, xem [[dau-giong-trong-hop-xuong]].

Nhận xét của người đương thời cũng được tường thuật lại: Giám mục Nguyễn Văn Hoà tóm lối viết của ông là "thoáng mỏng", nắn giai điệu thật hay, nhiều âm hưởng dân ca, rồi mới "lựa" hoà âm; Nguyễn Bách trích câu ấy là lời của chính Hải Linh. Trần Văn Khê nhận xét ông quan tâm nhạc dân tộc, chú ý bè phụ, đi từ đơn âm lên đa âm. Các lời này lấy từ bài tường thuật 2013 nên là trích gián tiếp.

## Điều chưa rõ
- Ngày sinh chính xác và các bút danh phụ.
- Những lời khen như "viên ngọc quý giá nhất của dân tộc" gán cho Phạm Duy chỉ có qua Wikipedia; chưa đối chiếu nguyên văn nên người biên soạn không dùng.
- Hải Linh có nhiều tác phẩm khác chưa kiểm; danh sách trên chỉ gồm những tác phẩm có nguồn đã đọc.

## Câu hỏi ôn tập
1. "Ngũ âm hoá" thang bảy âm nghĩa là gì theo mô tả của Thảo?
2. Vì sao lời "thoáng mỏng" chỉ nên xem là nhận xét gián tiếp?
3. Hai nguồn nào lệch nhau về năm Hải Linh bắt đầu học ở Paris?

**Xem thêm:** [[hang-belem-1945]], [[dau-giong-trong-hop-xuong]], [[ngu-cung-trong-thanh-ca]], [[luan-an-xuan-thao-2007]], [[nguyen-van-hoa-seraphim]]
`,
  },
  {
    slug: "hang-belem-1945",
    title: "\"Hang Bêlem\" (1945)",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Hang Bêlem", "Hang Bê Lem", "Hang Belem"],
    summary: "Bài thánh ca Giáng sinh 1945 của Hải Linh, được kể là viết xong trong ba ngày và hát lần đầu ở nhà thờ chính toà Phát Diệm đêm Giáng sinh; còn nhiều điểm chưa rõ về lời và về người đặt hàng.",
    refs: [RFAHL, NSHL, HOANG26, BACH],
    body: `
## Hoàn cảnh ra đời
Theo bài của RFA kể lại lời Hải Linh, "Hang Bêlem" được viết cho mùa Giáng sinh 1945, khi ông 25 tuổi. Ông Minh Châu, chủ nhiệm báo *Đường Sống* (Nam Định), thách ông sáng tác nhanh; ba ngày sau bài hát hoàn tất. Ca đoàn nhà thờ chính toà Phát Diệm hát lần đầu trong đêm Giáng sinh, do ông điều khiển. Tuan Hoang (2026) cũng ghi năm 1945, tuổi 25 và địa điểm Phát Diệm, dẫn sách của Paul Văn Chi (tr. 66 – 76), và cho biết cùng năm ấy ông còn viết nhiều bài khác, trong đó có bài về Đức Mẹ Fatima, "Lời Mẹ nhắn nhủ".

Bài tường thuật buổi tưởng niệm 25 năm (2013) lại ghi bài được viết "vào tháng 11 năm 1945". Hai cách ghi này không mâu thuẫn mạnh (đều là 1945) nhưng nên nêu cả hai. Cũng bài tường thuật ấy trích nhạc sĩ Phạm Duy nhận xét đây là "một trong những bài hát hay nhất thời đó", lan nhanh ở cả hai bên lương và giáo; vì là trích gián tiếp, người biên soạn chưa đối chiếu được nguyên văn.

## Tên tác giả
Bài thường được ghi "Hải Linh – Minh Châu". RFA không nói rõ Minh Châu góp lời hay có vai trò gì khác. Các tư liệu tóm lược lại vai trò của ông theo những cách khác nhau (thách thức, đặt hàng, tài trợ việc in), nên chưa thể viết thành một sự kiện duy nhất.

## Nhầm lẫn về năm
Trong luận án năm 2015, Nguyễn Bách phê bình rằng sách của Paul Văn Chi cho nền hợp ca hình thành từ "Hang Bê Lem" hoặc từ thánh ca của Nguyễn Khắc Xuyên năm 1944 mà không nhất quán. Các nguồn khác đều thống nhất năm 1945 cho Hang Bêlem; "1944" của Nguyễn Khắc Xuyên chỉ đến qua Bách từ Chi, chưa đối chiếu với gốc.  Khi dẫn, bạn hãy dùng năm 1945 kèm nguồn.

## Vị trí trong lịch sử
Bài thuộc làn sóng sáng tác tiếng Việt ngay sau 1945 ở miền Bắc, cùng thời với Nhạc đoàn Lê Bảo Tịnh và ca đoàn Sao Mai (xem [[cac-nhac-doan-mien-bac-1946-1957]] và [[nhac-doan-le-bao-tinh]]). Về tác giả, xem [[hai-linh]].

## Điều chưa rõ
- Ai viết lời, và vai trò chính xác của Minh Châu.
- Bản ký âm gốc và các bản phối sau này: không có nguồn đã đọc.
- Ngày đăng bài RFA: địa chỉ ghi 24.12.2009 nhưng một bản đọc lại ghi 2010.

## Câu hỏi ôn tập
1. Hai cách ghi thời điểm sáng tác (Giáng sinh và tháng 11.1945) có thể hoà hợp ra sao?
2. Vì sao nên tránh nói chắc chắn ai là người viết lời?
3. Hãy phân biệt "năm 1945" và "1944" trong các nguồn về nền hợp ca.

**Xem thêm:** [[hai-linh]], [[nhac-doan-le-bao-tinh]], [[cac-nhac-doan-mien-bac-1946-1957]], [[phan-ky-thanh-nhac-viet-nam]]
`,
  },
  {
    slug: "hung-lan",
    title: "Hùng Lân và lời Việt \"Đêm Thánh Vô Cùng\"",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Hùng Lân", "Đêm Thánh Vô Cùng", "Phêrô Hoàng Văn Cường", "Silent Night tiếng Việt"],
    summary: "Hùng Lân (Phêrô, 23.6.1922 – 17.9.1986), đoàn trưởng Nhạc đoàn Lê Bảo Tịnh, nhà giáo âm nhạc với nhiều giáo trình; được ghi là người dịch lời Việt bài Silent Night, nhưng năm dịch chưa có nguồn.",
    refs: [
      ['Wikipedia tiếng Việt — "Hùng Lân" (đầu mối)', 'https://vi.wikipedia.org/wiki/Hùng_Lân'],
      CGVDTLBT, RFAXM, BTT26,
      ['Hymnary.org — "Silent Night (Đêm Thánh Vô Cùng)", Thánh Ca Dân Chúa 2008, số 93', 'https://hymnary.org/hymn/TCDC2008/93'],
      TVTC,
    ],
    body: `
## Tên và tiểu sử
Hùng Lân là bút hiệu; tên thánh Phêrô. Về tên thật, các nguồn không thống nhất: Wikipedia tiếng Việt ghi **Hoàng Văn Cường** (có đoạn giải thích rối về giấy khai sinh ghi "Hường" rồi "Hương"), còn bài của Bùi Trung Thành (2026) ghi **Hoàng Văn Hường**. Người biên soạn chưa tìm được văn bản nào phân xử.

- Sinh 23.6.1922 tại Hà Nội, trong một gia đình Công giáo; mất 17.9.1986 tại TP.HCM. Thư viện Thánh Ca ghi ngày mất 17.9.1986, bài của báo Công giáo và Dân tộc ghi năm 1986; các nguồn khớp nhau.
- Giáo dân, nhạc sĩ, nhà giáo. Ông dạy ở Hà Nội, Sài Gòn và Đà Lạt (Sư phạm Âm nhạc, Đại học Đà Lạt 1971 – 1975).
- Lễ tưởng niệm tổ chức ngày 16.9.2012 tại nhà thờ Đa Kao.
- Wikipedia còn nhắc bài "Việt Nam minh châu trời đông" (1944), giải nhất cuộc thi âm nhạc toàn quốc, sau này thành đảng ca của một chính đảng; bài không thuộc thánh ca, chỉ cần khi viết tiểu sử đầy đủ.

## Nhạc đoàn Lê Bảo Tịnh
Hùng Lân là **đoàn trưởng** Nhạc đoàn Lê Bảo Tịnh, thành lập tháng 7.1945, với Hoài Đức làm phó đoàn (theo báo Công giáo và Dân tộc). Chi tiết về nhạc đoàn và tuyển tập *Cung Thánh*: xem [[nhac-doan-le-bao-tinh]]. Trong thánh ca, Wikipedia nêu tập *Ca vang lời Chúa* (ba phần) với khoảng 80 Thánh vịnh ứng tác, cùng các bài "Hoan ca Phục Sinh", "Thầy là cây nho", "Vườn địa đàng". Trong bài phỏng vấn RFA, Lm Kim Long xếp Hùng Lân cùng Tâm Bảo, Nguyễn Khắc Xuyên và Lê Bảo Tịnh (tên nhạc đoàn) trong các tên tuổi của thánh nhạc miền Bắc. Tùng Công Kiều xếp Hải Linh và Hùng Lân vào số những người tiên phong của hướng sáng tác hội nhập (xem [[bon-huong-sang-tac-thanh-ca]]).

## Sách giáo khoa
Theo Wikipedia: *Cây Đàn Sống* (1949, hai tập); *Giáo khoa âm nhạc* (1952); *Nhạc lý toàn thư* (1960); *Hỏi và đáp nhạc lý*... (1964); *Nhạc ngữ Việt Nam* (1971); *Tìm hiểu dân ca Việt Nam* (1972); *Vui Ca Lên* (1973); *Thuật sáng tác ca khúc* và *Sư phạm âm nhạc thực hành* (1974); *Nhạc lý tân biên* (di cảo). Báo Công giáo và Dân tộc ghi ông được giải của Bộ Quốc gia Giáo dục năm 1952. Đây là danh mục từ nguồn thứ cấp, người biên soạn chưa xem từng cuốn.

## "Đêm Thánh Vô Cùng"
Đây là lời Việt của bài *Silent Night* (*Stille Nacht*, lời gốc của Joseph Mohr). Chương trình nhạc Giáng sinh của RFA nói bản tiếng Việt do Hùng Lân dịch, và kể Lm Kim Long đánh giá đêm Giáng sinh thiếu bài này thì "không được". Wikipedia cũng xác nhận mà không nêu năm. Hymnary.org liệt bài ở số 93 trong *Thánh Ca Dân Chúa* (2008) và ghi tên người dịch là "Húng Lân"; có thể là lỗi chính tả của trang này.

Người biên soạn **chưa tìm thấy nguồn nào nêu năm dịch**. Bản trong sách 2008 có thể còn bản quyền nên bài này không chép lời. Một kết quả tìm kiếm có nhắc "Đêm Tháng Vô Cùng" với người dịch "Dịch Hai Lin" trên hymnary; chưa kiểm, không nên đánh đồng với bản của Hùng Lân.

## Điều chưa rõ
- Tên thật (Cường hay Hường).
- Năm dịch "Đêm Thánh Vô Cùng".
- Danh sách đầy đủ thánh ca của ông.

## Câu hỏi ôn tập
1. Vì sao nên tránh nhầm "Lê Bảo Tịnh" (tên nhạc đoàn) với một nhạc sĩ?
2. Hai nguồn nào ghi tên thật của Hùng Lân khác nhau?
3. Điều gì còn thiếu để kết luận về thời điểm có lời Việt "Đêm Thánh Vô Cùng"?

**Xem thêm:** [[nhac-doan-le-bao-tinh]], [[hoai-duc-va-cao-cung-len]], [[cac-nhac-doan-mien-bac-1946-1957]], [[bang-tra-nhac-si-thanh-ca]]
`,
  },
  {
    slug: "hoai-duc-va-cao-cung-len",
    title: "Hoài Đức và \"Cao Cung Lên\"",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Hoài Đức", "Cao Cung Lên", "Giuse Lê Đức Triệu", "Lê Đức Triệu"],
    summary: "Linh mục Giuse Lê Đức Triệu, bút danh Hoài Đức (1.7.1922 – 7.7.2007), phó đoàn Nhạc đoàn Lê Bảo Tịnh; \"Cao Cung Lên\" (1945) có nhạc của ông và lời của Nguyễn Khắc Xuyên.",
    refs: [
      ['Wikipedia tiếng Việt — "Hoài Đức (nhạc sĩ)" (đầu mối)', 'https://vi.wikipedia.org/wiki/Hoài_Đức_(nhạc_sĩ)'],
      CGVDTLBT, RFAXM, BTT26,
      ['Tuan Hoang — "Vietnamese nationalism in a popular hymn about the Sacred Heart of Jesus" (blog, 14.7.2020)', 'https://tuannyriver.com/2020/07/14/vietnamese-nationalism-in-a-popular-hymn-about-the-sacred-heart-of-jesus/'],
      TVTC,
    ],
    body: `
## Hoài Đức
Hoài Đức là bút danh của linh mục **Giuse Lê Đức Triệu** (bài của Bùi Trung Thành 2026 ghi "Hoài Đức (linh mục Lê Đức Triệu)").

- Sinh **1.7.1922** tại xã Vỉ Nhuế, Nghĩa Hưng (nay thuộc Ý Yên), Nam Định; mất **7.7.2007**; thụ phong linh mục năm 1959 tại nhà thờ Jeanne d'Arc, Chợ Lớn (Wikipedia). Thư viện Thánh Ca ghi cùng ngày mất.
- Bài báo Công giáo và Dân tộc về Nhạc đoàn Lê Bảo Tịnh tự mâu thuẫn về năm mất của ông (chỗ ghi 2007, chỗ gộp với nhiều người khác). Người biên soạn dùng 7.7.2007 vì Wikipedia và Thư viện Thánh Ca cùng ghi, và bài của Tuan Hoang cũng nêu 1922 – 2007.
- Theo Wikipedia: giáo sư âm nhạc và Latinh; giám đốc Caritas Buôn Ma Thuột; tổng thư ký thường trực Ủy ban Thánh nhạc 1967 – 1968; bị giam 1977 – 1987. Người biên soạn chưa đối chiếu các chi tiết này với nguồn gốc. Bài blog của Tuan Hoang ghi ông vào Nam năm 1954 và có mười năm cải tạo, khớp với khoảng thời gian 1977 – 1987.
- Là sinh viên chủng viện Saint-Sulpice Hà Nội, ông viết bài đầu tay "Thánh Tâm Giêsu Vua" khoảng 1945 (blog Tuan Hoang); Wikipedia ghi tác phẩm đầu là "Thánh Tâm Giêsu, Vua đất Việt" (1945). Hai tên bài khác nhau chút ít, có thể là cùng một bài.
- Ông là **phó đoàn** của Nhạc đoàn Lê Bảo Tịnh thành lập tháng 7.1945, dưới quyền đoàn trưởng Hùng Lân (xem [[hung-lan]]).
- Hơn 100 thánh ca của ông in trong *Cung Thánh*, và ông viết sách *Nhạc lý ca điệu Grêgorio* (theo Wikipedia và báo Công giáo và Dân tộc).

## "Cao Cung Lên" (1945)
Wikipedia ghi bài là **nhạc Hoài Đức, lời Nguyễn Khắc Xuyên**, viết năm 1945. Chương trình nhạc Giáng sinh của RFA nói đó là bài "của linh mục Hoài Đức", viết thể thứ và trầm lắng. Hai cách ghi không mâu thuẫn nhưng RFA chỉ nêu nhạc sĩ; nên phân biệt người viết nhạc và người viết lời. Các kết quả tìm kiếm khác còn ghi lẫn "Nguyễn Khúc Xuyên" (sic) hoặc "đồng tác giả" nên người biên soạn xem việc phân công này vẫn **chưa xác minh trọn vẹn**.

## Nguyễn Khắc Xuyên
Nguyễn Khắc Xuyên (tên thánh Giaccôbê) là một thành viên sáng lập Nhạc đoàn Lê Bảo Tịnh. Thư viện Thánh Ca ghi mất ngày 1.2.2005, báo Công giáo và Dân tộc ghi 2005. Blog của Tuan Hoang ghi ông sinh năm 1923, từng là chủng sinh rồi linh mục và hoàn tục năm 1968; Wikipedia (thẻ thiếu nguồn) cũng nói ông "trước là linh mục". Thư viện Thánh Ca lại ghi "Lm/Gd", nên tình trạng chức vụ cần nguồn gốc. Tên thật và danh mục tác phẩm chưa tìm thấy. Đừng nhầm với giám mục Micae Nguyễn Khắc Ngữ. Một cuốn sách tên *Tiến trình Thánh nhạc Việt Nam* (1992) được dẫn ở một tài liệu về chuẩn nhận; chưa tìm được bản đầy đủ. Về nhạc đoàn, xem [[nhac-doan-le-bao-tinh]]; về bối cảnh Giáng sinh 1945 xem [[hang-belem-1945]].

## Điều chưa rõ
- Phân công nhạc và lời chắc chắn cho "Cao Cung Lên".
- Chi tiết tù đày và chức vụ ở Ủy ban Thánh nhạc 1967 – 1968, vì mới có một nguồn thứ cấp.

## Câu hỏi ôn tập
1. Vì sao RFA và Wikipedia không thực sự mâu thuẫn về tác giả "Cao Cung Lên"?
2. Hoài Đức giữ vai trò gì trong Nhạc đoàn Lê Bảo Tịnh?
3. Nêu hai điểm trong tiểu sử Nguyễn Khắc Xuyên cần thêm nguồn.

**Xem thêm:** [[nhac-doan-le-bao-tinh]], [[hung-lan]], [[hang-belem-1945]], [[bang-tra-nhac-si-thanh-ca]]
`,
  },
  {
    slug: "tien-dung",
    title: "Linh mục Tiến Dũng",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Tiến Dũng", "Antôn Nguyễn Tiến Dũng", "Suối Nhạc"],
    summary: "Linh mục Antôn Nguyễn Tiến Dũng (8.6.1924 – 8.8.2005), học sáng tác ở Rôma, lập trường Suối Nhạc năm 1968, tác giả giáo trình và cuốn Tôi viết ca khúc tiếng Việt; một số chi tiết còn lệch giữa các nguồn.",
    refs: [
      ['Wikipedia tiếng Việt — "Antôn Nguyễn Tiến Dũng" (đầu mối)', 'https://vi.wikipedia.org/wiki/Ant%C3%B4n_Nguy%E1%BB%85n_Ti%E1%BA%BFn_D%C5%A9ng'],
      ['Giáo xứ Châu Sơn — "Những đại thụ của nền thánh nhạc Việt Nam" (20.8.2019)', 'https://giaoxuchauson.com/nhac/nhung-dai-thu-cua-nen-thanh-nhac-viet-nam-951.html'],
      BACH, THAOCH2, HOANG26, TVTC, TGP2, UBTN,
    ],
    body: `
## Tiểu sử
Theo Wikipedia tiếng Việt, linh mục **Antôn Nguyễn Tiến Dũng** sinh **8.6.1924** tại làng Yên Cốc, Thanh Oai, Hà Đông và mất **8.8.2005**; Thư viện Thánh Ca ghi ngày mất 9.8.2005, nên có chênh một ngày. Bài tổng hợp của giáo xứ Châu Sơn ghi 1924 – 2005 và thụ phong năm 1954.

- Học ở Hoàng Nguyên và Xuân Bích 1943 – 1950; ở Rôma 1950 – 1965; tốt nghiệp ngành sáng tác ở Nhạc viện Santa Cecilia năm 1962 (Wikipedia). Tuan Hoang ghi ông học ở Santa Cecilia "cuối thập niên 1950, đầu 1960" rồi nghiên cứu ở Tây Đức; hai cách ghi hơi khác nhau.
- **1968** lập trường Suối Nhạc. Sau 1975 ông trưởng Ban Thánh nhạc, dạy ở Nhạc viện TP.HCM.
- Cùng Lm Kim Long chủ trương nội san *Hương Trầm* (1998 – 1999, năm số).
- Nguồn Wikipedia còn nói năm 1993 Ngọc Kôn thay mặt ông lập lại trường Suối Nhạc; người biên soạn chưa kiểm.

## Giáo dục và giáo trình
Giáo trình của ông gồm Nhạc lý, Hoà âm thực tập, Đối âm, Tẩu pháp và *Tôi viết ca khúc tiếng Việt*. Luận án của Nguyễn Bách nêu cuốn sau (tái bản NXB Trẻ 2001) có hai chương, XX và XXI, bàn việc thích ứng văn bản tiếng Việt với bài nhiều bè; đó là một trong những lý do nó được dẫn trong các nghiên cứu về dấu giọng (xem [[dau-giong-trong-hop-xuong]]). Học trò và đồng nghiệp trong nhóm Suối Nhạc được nêu ở [[thanh-nhac-mien-nam-1954-1975]]: bản tổng kết của Ủy ban Thánh nhạc ghi "Nữ Vương Hoà Bình" in ở Rôma năm 1957 do Tiến Dũng và Phương Quang. Văn Chi cũng học Suối Nhạc 1968 – 1974 (xem [[van-chi]]).

## Tác phẩm
Wikipedia liệt kê: "Kính chào Nữ Vương", "Bên sông Babylon", "Bài ca lữ hành", "Thân phận lưu đày", các bộ lễ *Missa quarta* và *Missa quinta*. Bách phân tích hoặc nhắc "Bài ca Truyền tin" và cantata "Tình một nhà". Về phong cách, bài của giáo xứ Châu Sơn mô tả ông viết bình ca theo Hiến chế Phụng vụ và đi đầu trong việc kết hợp nhạc Tây phương với nhạc cụ và âm nhạc truyền thống Việt Nam. Thảo ghi Tiến Dũng so bộ vãn dâng hoa với fuga (xem [[thanh-ca-co-truyen-va-van-dang-hoa]]).

## Những chỗ nguồn lệch
- **"Trăm triệu lời ca"**: Wikipedia gán cho Tiến Dũng ở một trang và cho Giám mục Nguyễn Văn Hoà ở trang khác (xem [[nguyen-van-hoa-seraphim]]). Có thể cả hai đều có tập cùng tên, hoặc một nguồn nhầm.
- **Ủy ban Thánh nhạc**: Wikipedia ghi ông lập Ủy ban Thánh nhạc năm 1967; trang chính thức của Ủy ban ghi Ủy ban ra mắt ở Đại hội Thánh nhạc toàn quốc (miền Nam) năm 1972 (xem [[uy-ban-thanh-nhac]]). Đại hội 1971 và 1972 có thể là hai sự kiện khác nhau.
- **Một lập trường riêng**: Ngọc Kôn kể ông dạy đáp ca và đối ca ở nhà thờ Tân Định thập niên 1980 – 1990, hát mỗi tháng một lần rồi bị chê là "thánh ca buồn ngủ". Đây là quan điểm của một tác giả có lập trường riêng, cần nguồn thứ hai trước khi dùng như sự kiện.

## Điều chưa rõ
- Năm mất (8 hay 9.8.2005).
- Danh mục tác phẩm kiểm được.
- Vai trò chính xác trong việc thành lập Ủy ban Thánh nhạc.

## Câu hỏi ôn tập
1. Vì sao cuốn *Tôi viết ca khúc tiếng Việt* được dẫn trong các nghiên cứu về dấu giọng?
2. Ủy ban Thánh nhạc "ra mắt" năm nào theo hai nguồn khác nhau?
3. Tại sao nên thận trọng với lời kể về buổi hát đáp ca ở Tân Định?

**Xem thêm:** [[thanh-nhac-mien-nam-1954-1975]], [[uy-ban-thanh-nhac]], [[dau-giong-trong-hop-xuong]], [[van-chi]], [[nguyen-van-hoa-seraphim]]
`,
  },
  {
    slug: "vinh-hanh-huong-thanh-kinh",
    title: "Vinh Hạnh và Hương Thánh Kinh",
    category: 'thanhca',
    also: ['vietnam', 'sacred'],
    aliases: ["Vinh Hạnh", "Hương Thánh Kinh", "Giuse Trần Phúc Hạnh"],
    summary: "Linh mục Giuse Trần Phúc Hạnh, bút danh Vinh Hạnh (7.5.1931 – 16.3.1966), đưa Thánh Kinh vào thánh ca qua tập Hương Thánh Kinh (1957, 46 bài; I – II in 1963).",
    refs: [
      ['VietCatholic — "Lm Nhạc Sỹ Giuse Vinh Hạnh"', 'http://www.vietcatholic.net/News/html/281129.htm'],
      RFA2011, TGP2, TVTC,
    ],
    body: `
## Tiểu sử
Bài trên VietCatholic cho biết linh mục **Giuse Trần Phúc Hạnh**, bút danh **Vinh Hạnh**:
- sinh **7.5.1931** tại Kiến An, Hải Phòng; quê gốc Vinh Trung, Ninh Bình (Phát Diệm);
- tú tài 1954; thụ phong **29.4.1961**; cử nhân Văn khoa 1965;
- mất **16.3.1966** tại bệnh viện Grall (Sài Gòn) vì ung thư gan. Thư viện Thánh Ca ghi cùng ngày mất.

Như vậy ông mất chỉ năm năm sau khi chịu chức, ở tuổi 34.

## Hương Thánh Kinh
- *Hương Thánh Kinh* (1957), 46 bài.
- *Hương Thánh Kinh I – II* (1963): bản tổng kết 50 năm thánh nhạc của Ủy ban Thánh nhạc ghi Toà Giám mục Sài Gòn có nhận xét kiểm duyệt ngày 23.10.1960. Một tóm tắt tìm kiếm còn nêu con số 94 bài với cơ cấu theo loại; vì chưa mở được trang gốc, bài này không dùng.
- *Nhạc sinh hoạt* (1969), tái bản năm lần.
- Ông còn dịch *Pensées* của Pascal, bản đánh máy.

Theo bài VietCatholic, tuyển tập bám sát Thánh Kinh và phụng vụ, theo lối điệp xướng – phiên khúc. Lm Trần Phúc Vỵ khái quát công việc của ông là "đưa Thánh Kinh vào nhạc, lồng nhạc vào Thánh Kinh". Trong bài phỏng vấn RFA, Lm Kim Long cũng nhắc rằng khoảng thập niên 1950 Lm Vinh Hạnh ra những tập thơ thánh và viết nhạc hoàn toàn trích từ Kinh Thánh. Tập đầu in năm 1957 nên không mâu thuẫn với lời kể "thập niên 50".

## Vị trí trong thánh nhạc miền Nam
Hương Thánh Kinh nằm trong dòng sáng tác sau di cư 1954, cùng nhóm Thánh Gia, Suối Nhạc và các nhóm khác; xem [[thanh-nhac-mien-nam-1954-1975]]. Việc đưa lời Kinh Thánh vào hình thức bài hát tiếng Việt đi cùng yêu cầu của Hiến chế Phụng vụ về nguồn lời ca, được trình bày ở [[tu-tra-le-sollecitudini-den-vatican-ii]] và [[sacrosanctum-concilium-chuong-vi]]. Về nền tảng thánh vịnh trong thánh nhạc, xem thêm [[tam-dieu-thuc-va-giong-thanh-vinh]].

## Điều chưa rõ
- Nội dung chi tiết hai ấn bản và danh sách bài: người biên soạn chưa xem được.
- Ảnh hưởng thực tế lên ca đoàn giáo xứ: không có nguồn đo lường.
- Nhà xuất bản của các ấn bản: chưa có.

## Câu hỏi ôn tập
1. Vì sao hai mốc "thập niên 1950" và "1957" không mâu thuẫn?
2. "Điệp xướng – phiên khúc" mô tả cách tổ chức bài hát như thế nào?
3. Vì sao con số 94 bài không được ghi trong bài này?

**Xem thêm:** [[thanh-nhac-mien-nam-1954-1975]], [[sacrosanctum-concilium-chuong-vi]], [[tam-dieu-thuc-va-giong-thanh-vinh]], [[ngo-duy-linh]]
`,
  },
  {
    slug: "ngo-duy-linh",
    title: "Ngô Duy Linh",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Linh mục Ngô Duy Linh", "Thăng Ca", "Giuse Ngô Duy Linh"],
    summary: "Linh mục Giuse Ngô Duy Linh (30.4.1922 – 20.2.1998), bút danh Thăng Ca, học hoà âm ở Paris, lập Trường Quốc gia Âm nhạc và Kịch nghệ Huế (1961), tự nhận là nhà giáo dục âm nhạc hơn là nhạc sĩ.",
    refs: [
      ['Calendi — "Linh mục Nhạc sư Ngô Duy Linh" (phỏng dịch bút tích)', 'https://www.calendi.com/album/nhacsi/ns_ngoduylinh1.htm'],
      VCNET50085, RFA2011, HOANG26, TVTC, TGP2,
    ],
    body: `
## Tiểu sử (theo tiểu sử trên Calendi)
Bản phỏng dịch bút tích đăng trên Calendi, nguồn cộng đồng, cho các mốc sau.
- Sinh **30.4.1922** ở làng Liễu Đề, Trực Ninh, Nam Định (địa phận Bùi Chu); vào tiểu chủng viện năm 1934.
- Thụ phong **12.6.1952**; sang Pháp 1953; **1956** nhận bằng Giáo sư Hoà âm của Nhạc viện Quốc tế Ba-Lê; năm 1968 là ứng viên tiến sĩ ở Sorbonne với đề tài nhịp tiết trong nhạc Việt Nam.
- Dạy hoà âm ở Sài Gòn từ 1957; **1961** lập Trường Quốc gia Âm nhạc và Kịch nghệ Huế; 1964 phó viện trưởng Đại học Thụ Nhân Đà Lạt.
- **1982** sang Mỹ, làm quản nhiệm giáo xứ ở Avondale, Louisiana; mất **20.2.1998** (Thư viện Thánh Ca ghi 21.2.1998).
- Ông tự nhận mình là "nhà giáo dục âm nhạc" hơn là nhạc sĩ.

Tuan Hoang ghi ông học ở các trường César Franck, Institut Catholique và Conservatoire International de Paris (tr. 388).

## Năm thụ phong: một chỗ lệch
Calendi ghi 1952. Một kết quả tìm kiếm khác nói ông thụ phong năm 1968 tại Nhà thờ Đức Bà. Người biên soạn chưa phân xử được; bài này dùng 1952 và ghi rõ đó là theo Calendi. Ngày mất cũng chênh một ngày (20 hay 21.2.1998).

## Quan hệ với các nhạc sĩ khác
- Bài tiểu sử Kim Long trên VietCatholic kể: ông là người khích lệ bài đầu tay của chàng trai 17 tuổi, năm 1957 (xem [[kim-long]]).
- Trong bài phỏng vấn RFA, Kim Long xếp ông trong nhóm gắn với ca đoàn Sao Mai ở Bùi Chu cùng Hải Linh và Võ Thanh. Bản tổng kết của Ủy ban Thánh nhạc liệt Sao Mai gồm Hải Linh, Minh Trân, Thăng Ca (tức Ngô Duy Linh), Ngô Quang Tuấn... (xem [[cac-nhac-doan-mien-bac-1946-1957]]).

## Bài hát
Các bài được nêu: "Về Tổ Ấm", "Lúa Thơm", "Con Đi Tìm Chúa" (cộng tác Võ Thanh); những bài này chỉ có qua tóm tắt tìm kiếm, người biên soạn chưa mở trang nguồn. Cuối đời ông có "Ngoài Vũ Trụ" (thơ Hàn Mạc Tử), "Tình Yêu Tuyệt Đối" và "Giáng Sinh Tình Yêu" (Calendi).

## Điều chưa rõ
- Năm thụ phong (1952 hay 1968).
- Nội dung đề tài Sorbonne và việc ông có hoàn thành luận án hay không: không có nguồn.
- Danh mục tác phẩm đầy đủ.

## Câu hỏi ôn tập
1. Vì sao chỉ nên dùng năm thụ phong 1952 kèm chú thích "theo Calendi"?
2. Ngô Duy Linh gắn với Kim Long ra sao?
3. Ông tự mô tả vai trò của mình thế nào?

**Xem thêm:** [[kim-long]], [[hai-linh]], [[cac-nhac-doan-mien-bac-1946-1957]], [[thanh-nhac-mien-nam-1954-1975]]
`,
  },
  {
    slug: "thanh-tam-va-ban-nhac-alleluia",
    title: "Thành Tâm CSsR và ban nhạc Alleluia",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["Thành Tâm", "Bố Tâm", "ban nhạc Alleluia", "nhạc đạo vào đời", "Vào Đời"],
    summary: "Linh mục Phêrô Nguyễn Thành Tâm, Dòng Chúa Cứu Thế, cùng anh em lập ban nhạc Alleluia năm 1967 với bài \"Vào Đời\"; gần 200 bài, và dòng thánh ca dùng giai điệu, nhạc cụ phổ thông.",
    refs: [
      ['Báo Công giáo và Dân tộc — "Thành tâm trong đời tận hiến" (31.8.2018)', 'https://www.cgvdt.vn/thanh-tam-trong-doi-tan-hien_a7802'],
      TGP2, KIEU,
      ['Wikipedia tiếng Việt — "Lịch sử Thánh nhạc Công giáo Việt Nam" (thẻ thiếu nguồn, chỉ làm đầu mối)', 'https://vi.wikipedia.org/wiki/L%E1%BB%8Bch_s%E1%BB%AD_Th%C3%A1nh_nh%E1%BA%A1c_C%C3%B4ng_gi%C3%A1o_Vi%E1%BB%87t_Nam'],
    ],
    body: `
## Tiểu sử
Theo bài đăng ngày 31.8.2018 của Báo Công giáo và Dân tộc, linh mục **Phêrô Nguyễn Thành Tâm** thuộc Dòng Chúa Cứu Thế (CSsR). Ông lớn lên ở Campuchia; năm 1955, 14 tuổi, về Việt Nam nhập dòng; thụ phong **1970**. Gần 40 năm ông gắn bó với phong trào Thiếu nhi Thánh Thể ở giáo xứ Đức Mẹ Hằng Cứu Giúp (Sài Gòn), được thiếu nhi gọi là "Bố Tâm". Năm sinh chưa có trong nguồn.

## Ban nhạc Alleluia (1967)
- Năm **1967**, cùng anh em trong học viện, ông lập ban nhạc **Alleluia**, hoạt động khoảng hai năm.
- Ban ra mắt ở Domaine de Marie, Đà Lạt, với "Vào Đời" (lời Lm Giuse Trần Sỹ Tín) và "Người gieo giống".
- Dòng "Vào Đời" dùng giai điệu và nhạc cụ phổ thông, lúc đầu gây ý kiến trái chiều trong giáo hội.

Bản tổng kết 50 năm thánh nhạc của Ủy ban Thánh nhạc xếp "nhóm Thành Tâm" vào dòng "nhạc đạo vào đời", chịu ảnh hưởng của cha Duval ở Đà Lạt (xem [[thanh-nhac-mien-nam-1954-1975]]). Thuật ngữ này chỉ một hướng sáng tác khác với hợp xướng truyền thống và ngũ cung hội nhập; Tùng Công Kiều gọi nhánh nhạc trẻ và "praise and worship" là một trong bốn hướng sáng tác, kèm lời phê bình mạnh về loại "thánh ca nhạc trẻ" (xem [[bon-huong-sang-tac-thanh-ca]]). Kiều dẫn bài "Bài ca hiệp nhất" (nhịp swing) của "Thanh Tâm"; người biên soạn chưa xác minh đó có phải cùng tác giả hay không.

## Tác phẩm
Ông sáng tác gần 200 bài; các bài được nêu gồm "Trên đường Emau", "Xin Ngài thương con", "Diễm tình ca". Sau ba lần tai biến ông không còn sáng tác. Báo Công giáo và Dân tộc không cho danh mục đầy đủ.

## Điều chưa rõ
- Năm sinh và năm mất.
- Quan hệ giữa các tên "Trần Sỹ Tín, Hoàng Đức, Thành Tâm" trong dòng nhạc của Dòng Chúa Cứu Thế: bài Wikipedia về lịch sử thánh nhạc có nhắc nhưng chưa rõ.
- Việc dòng nhạc này được đón nhận thế nào về sau: chưa có nguồn đo lường.

## Câu hỏi ôn tập
1. Ban nhạc Alleluia ra đời năm nào và ra mắt bằng những bài nào?
2. Dòng "Vào Đời" khác truyền thống hợp xướng ở điểm nào theo mô tả của nguồn?
3. Vì sao không nên đồng nhất "Thành Tâm" với "Thanh Tâm" trong bản của Kiều?

**Xem thêm:** [[thanh-nhac-mien-nam-1954-1975]], [[bon-huong-sang-tac-thanh-ca]], [[thanh-ca-sau-1975]]
`,
  },
  {
    slug: "nguyen-van-hoa-seraphim",
    title: "Giám mục Nguyễn Văn Hoà và bộ lễ Seraphim",
    category: 'thanhca',
    also: ['vietnam', 'sacred'],
    aliases: ["Nguyễn Văn Hoà", "Phaolô Nguyễn Văn Hoà", "bộ lễ Seraphim", "ca đoàn Seraphim", "Đức cha Hoà"],
    summary: "Phaolô Nguyễn Văn Hoà (20.7.1931 – 14.2.2017), linh mục thụ phong 1959, sau là giám mục Nha Trang và chủ tịch Ủy ban Thánh nhạc; tác giả bộ lễ Seraphim cho ca đoàn Đà Lạt (imprimatur mùa hè 1965).",
    refs: [
      ['Wikipedia tiếng Việt — "Phaolô Nguyễn Văn Hòa" (đầu mối)', 'https://vi.wikipedia.org/wiki/Phaolô_Nguyễn_Văn_Hòa'],
      HOANG26, NSHL, UBTN, TGP2,
      ['Ủy ban Thánh nhạc — Hội thảo lần thứ 46 (20.10.2020), "Việc chuẩn nhận các bài thánh ca (Imprimatur)"', 'https://fwdioc.org/9-tai-lieu-ve-imprimatur-thanh-ca.pdf'],
      ['Giáo xứ Châu Sơn — "Những đại thụ của nền thánh nhạc Việt Nam" (20.8.2019)', 'https://giaoxuchauson.com/nhac/nhung-dai-thu-cua-nen-thanh-nhac-viet-nam-951.html'],
    ],
    body: `
## Tiểu sử
Theo Wikipedia tiếng Việt và bài tổng hợp của giáo xứ Châu Sơn, **Phaolô Nguyễn Văn Hoà** sinh 20.7.1931 và mất 14.2.2017. Ông thụ phong linh mục năm 1959, sau là giám mục Nha Trang. Bài tường thuật buổi tưởng niệm Hải Linh (2013) gọi ông là nguyên chủ tịch Hội đồng Giám mục, nguyên chủ tịch Ủy ban Thánh nhạc và cố vấn của Ủy ban lúc đó. Tuan Hoang mô tả ông là cử nhân âm nhạc ở Học viện Thánh nhạc Giáo hoàng và tiến sĩ thần học.

## Ca đoàn Seraphim và bộ lễ (Đà Lạt)
Theo Tuan Hoang (2026, tr. 389 – 390):
- Ca đoàn **Seraphim** của chính xứ Đà Lạt thành lập năm **1958** từ lực lượng Công giáo Tiến hành.
- Linh mục Nguyễn Văn Hoà phụ trách đến năm 1963 và sáng tác **Bộ lễ Seraphim**, được imprimatur vào mùa hè 1965, và "cho tới nay còn hát nhiều" ở Việt Nam và hải ngoại.
- Hoang xem sự xuất hiện của hàng chục rồi hàng trăm ca đoàn nhỏ cấp giáo xứ là một bước ngoặt trong phụng vụ miền Nam.

Wikipedia ghi bộ lễ là năm 1964 và bản ba bè năm 1969; mốc 1964 (sáng tác) và mùa hè 1965 (imprimatur) có thể hoà hợp, nhưng chưa có nguồn nói rõ. Bản tổng kết của Ủy ban Thánh nhạc cũng nhắc "Séraphim" cùng bài của Xuân Thảo và Nguyên Hữu như các bài thay ca nhập lễ, hiệp lễ sau Vatican II; Lm Xuân Thảo dẫn bộ lễ này làm ví dụ cho nhạc tự do. Khái niệm imprimatur xem [[chuan-nhan-imprimatur-thanh-ca]]; bối cảnh tiếng Việt vào phụng vụ xem [[tieng-viet-vao-phung-vu-1964-1971]].

Ông cũng được ghi là tác giả "Ý lực sống" và là người kiểm duyệt quyển II của *Tuyển tập Thánh ca Việt Nam* (Wikipedia). Người biên soạn chưa tìm được năm, nhà xuất bản hay mục lục của tuyển tập này.

## Vai trò ở Ủy ban Thánh nhạc
Ông viết lời giới thiệu số 1 nội san *Hương Trầm* (29.6.1996). Trong buổi tưởng niệm Hải Linh 2013, ông phát biểu với tư cách cố vấn Ủy ban, tóm lối viết "thoáng mỏng" của Hải Linh (xem [[hai-linh]]). Các tài liệu của Ủy ban nhắc ông là người giải thích số 35 của Hướng dẫn mục vụ Thánh nhạc và là người ký các thông cáo 1994 (chỉ qua tóm tắt tìm kiếm, chưa đọc); xem [[uy-ban-thanh-nhac]] và [[chuan-nhan-imprimatur-thanh-ca]].

## "Trăm triệu lời ca"
Wikipedia gán tập này cho Giám mục Nguyễn Văn Hoà (sáng tác 1960 – 1970) ở trang của ông, và cho linh mục Tiến Dũng ở trang kia (xem [[tien-dung]]). Cần kiểm trực tiếp với tập nhạc.

## Điều chưa rõ
- Ngày sáng tác chính xác bộ lễ.
- Các nhiệm kỳ chủ tịch Ủy ban Thánh nhạc.
- Tác giả đích thực của "Trăm triệu lời ca".

## Câu hỏi ôn tập
1. Ca đoàn Seraphim được lập ra từ lực lượng nào, ở đâu, năm nào?
2. Vì sao bộ lễ có hai mốc năm khác nhau trong tài liệu?
3. Điều gì còn phải kiểm về "Trăm triệu lời ca"?

**Xem thêm:** [[hai-linh]], [[uy-ban-thanh-nhac]], [[chuan-nhan-imprimatur-thanh-ca]], [[tieng-viet-vao-phung-vu-1964-1971]], [[tien-dung]]
`,
  },
  {
    slug: "bang-tra-nhac-si-thanh-ca",
    title: "Bảng tra nhạc sĩ thánh ca",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["bảng tra nhạc sĩ", "tên thánh bút danh nhạc sĩ thánh ca", "nhạc sĩ thánh ca bút danh"],
    summary: "Bảng tra nhanh các nhạc sĩ thánh ca đã xuất hiện trong thư viện: tên thánh, bút danh, giáo dân hay linh mục, năm sinh – mất, nguồn và chỗ lệch. Thư viện Thánh Ca chỉ dùng làm đầu mối.",
    refs: [TVTC, CGVDTLBT, BTT26, RFA2011, TGP2, UBTN, VIWIKI_KL,
      ['Giáo xứ Châu Sơn — "Những đại thụ của nền thánh nhạc Việt Nam" (20.8.2019)', 'https://giaoxuchauson.com/nhac/nhung-dai-thu-cua-nen-thanh-nhac-viet-nam-951.html']],
    body: `
## Cách dùng bảng
Cột "Giáo dân/Linh mục" lấy ký hiệu "Gd" hoặc "Lm" từ bảng "Nhạc Sĩ Thánh Ca" của Thư viện Thánh Ca (đăng 30.10.2023, không ghi gốc dữ liệu và không giải thích ký hiệu), đối chiếu thêm với bài viết khác khi có. Vài ngày mất trong bảng ấy nằm sau ngày đăng (ví dụ 13.11.2026), nên có thể là lỗi nhập, và người biên soạn bỏ qua các ngày đó. Chủ trang cũng có tên trong bảng của chính mình; khi dùng nên lưu ý. Mỗi dòng cần nguồn riêng; chỗ lệch nằm ở cột cuối.

| Tên / bút danh | Tên thánh, tên thật | Giáo dân / Lm | Năm | Nguồn chính | Chỗ lệch |
|---|---|---|---|---|---|
| Kim Long | Phêrô Nguyễn Kim Long | Lm | 1941 – 2025 | báo PLO, Tuổi Trẻ | số bài 3.000 – 5.000; xem [[kim-long]] |
| Văn Chi | Paul Chu Văn Chi | Lm | sinh 1949 | VietCatholic, SBS | tên viết khác nhau; xem [[van-chi]] |
| Hải Linh | Phanxicô Trần Văn Linh | Gd | 1920 – 1988 | RFA, tường thuật 2013 | ngày sinh; bút danh phụ; xem [[hai-linh]] |
| Hùng Lân | Phêrô Hoàng Văn Cường / Hường | Gd | 1922 – 1986 | Wikipedia, báo CGVDT | tên thật; xem [[hung-lan]] |
| Hoài Đức | Giuse Lê Đức Triệu | Lm | 1922 – 2007 | Wikipedia, TVTC | báo CGVDT tự mâu thuẫn; xem [[hoai-duc-va-cao-cung-len]] |
| Nguyễn Khắc Xuyên | Giaccôbê | Lm/Gd | 1923 – 2005 | TVTC (mất 1.2.2005) | từng là linh mục rồi hoàn tục; tên thật chưa có |
| Tiến Dũng | Antôn Nguyễn Tiến Dũng | Lm | 1924 – 2005 | Wikipedia, giáo xứ Châu Sơn | mất 8 hay 9.8.2005; xem [[tien-dung]] |
| Nguyễn Văn Hoà | Phaolô | Gm | 1931 – 2017 | Wikipedia, giáo xứ Châu Sơn | "Trăm triệu lời ca"; xem [[nguyen-van-hoa-seraphim]] |
| Ngô Duy Linh (Thăng Ca) | Giuse | Lm | 1922 – 1998 | Calendi | thụ phong 1952 hay 1968; mất 20 hay 21.2.1998; xem [[ngo-duy-linh]] |
| Vinh Hạnh | Giuse Trần Phúc Hạnh | Lm | 1931 – 1966 | VietCatholic | khớp; xem [[vinh-hanh-huong-thanh-kinh]] |
| Thành Tâm | Phêrô Nguyễn Thành Tâm CSsR | Lm | chưa có năm sinh | báo CGVDT 2018 | xem [[thanh-tam-va-ban-nhac-alleluia]] |
| Hoàng Kim | Gioakim Lương Văn Chiu | Lm | 1927 – 1985 | giáo xứ Châu Sơn, TVTC | ngày mất 5 hay 15.4.1985; Hải Linh nhận xét ông là người viết bình ca số 1 (trích lại, chưa kiểm) |
| Thiên Phụng | Anrê Trần Quang Phụng | Gd | mất 7.3.1982 | TVTC, CGVDT | khớp |
| Tâm Bảo | Giuse Nguyễn Văn Để (có dấu hỏi) | Gd | mất 1984 | CGVDT, BTT 2026 | tên thật chưa chắc |
| Duy Tân | Phêrô Trần Duy Tân | Gd | 1925 – 2011 (tóm tắt tìm kiếm) | TVTC | chưa mở nguồn |
| Mi Trầm | Phêrô Mai Tính | Lm | thụ phong 7.9.1975 | TVTC, đoạn trích tìm kiếm | hơn 2.000 bài và các chức vụ chưa kiểm |
| Ân Đức | Edouard | Lm/OC (TVTC) | — | RFA 2007 | TVTC ghi giáo phận Bà Rịa, RFA ghi đan sĩ Xitô Bãi Dâu; ngày quá vãng chưa kiểm |
| Nguyễn Duy | Rôcô | Lm | — | TVTC, UBTN | là thư ký Ủy ban Thánh nhạc 2017 |
| Xuân Thảo | Giuse (Joseph) Nguyễn Xuân Thảo OFM | Lm | — | TVTC; xem [[luan-an-xuan-thao-2007]] | — |
| Viết Chung | Giuse | Gd | mất 29.3.1996 | TVTC | chỉ có danh mục 19 bài |
| Ngọc Kôn | Phaolô | Gd | — | TVTC | 8 bài (một danh sách khác nói 5) |
| Hoàng Diệp | Phêrô CSsR | Lm | mất 23.12.2008 | TVTC | một nguồn |
| Trịnh Cát | Tôma Aquinô | Lm | — | TVTC | chính tả Trinh/Trịnh; chưa có tiểu sử |

## Những tên chỉ xuất hiện ở một nơi
Phương Anh, Thái Nguyên, Trương Huy Hoàng, Cao Huy Hoàng, Trầm Hương, Đinh Công Huỳnh: chỉ có một dòng trong bảng của Thư viện Thánh Ca, chưa có tiểu sử độc lập. Một số tên nhạc sĩ đầu thế kỷ XX (Phaolô Đạt, cha già Vượng, Phaolô Quy, Anphong Châu) xuất hiện trong bài Wikipedia về lịch sử thánh nhạc, một bài bị gắn thẻ thiếu nguồn; bản tổng kết của Ủy ban Thánh nhạc xác nhận Phaolô Quy và cha Vượng là những người đặt lời Việt thuở đầu (xem [[nhung-bai-hat-tieng-viet-dau-tien]]). Các tên Lan Thanh, Thiên Ân, Thiện Duyên, Nguyễn Văn Tuyên và Lê Đắc Trọng (chỉ thấy giám mục cùng tên) không có nguồn nên không đưa vào bảng.

## Điều chưa rõ
- Ý nghĩa các ký hiệu khác trong bảng gốc (ví dụ "Nts", "OC").
- Danh sách chưa phải bản kê đầy đủ các nhạc sĩ thánh ca; chỉ gồm những người đã xuất hiện trong nguồn đã đọc.

## Câu hỏi ôn tập
1. Vì sao ngày mất sau năm 2023 trong bảng gốc cần bị xem là có thể nhập sai?
2. Một nhạc sĩ có thể được ghi "Gd" trong bảng; cần thêm bằng chứng nào để khẳng định đó là giáo dân?
3. Hãy chọn một dòng có "chỗ lệch" và nêu hai nguồn khác nhau cho nó.

**Xem thêm:** [[kim-long]], [[hai-linh]], [[hung-lan]], [[nhac-doan-le-bao-tinh]], [[nhung-dieu-chua-biet-ve-thanh-ca-viet-nam]]
`,
  },
  {
    slug: "luan-an-xuan-thao-2007",
    title: "Luận án của Lm Nguyễn Xuân Thảo (2007): nội dung Chương II",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["luận án Xuân Thảo", "Music Ministry Xuân Thảo", "Hội nhập văn hoá thánh ca phụng vụ tại Việt Nam", "Nguyễn Xuân Thảo 2007"],
    summary: "Tóm lược Chương II (tr. 63–184) luận án D.Min. của Lm Nguyễn Xuân Thảo OFM (Catholic Theological Union, 2007): dân ca, cung kinh – cung sách, thánh ca cổ truyền và Hải Linh; có lời khen của Trần Văn Khê.",
    refs: [THAOCH2, KHELGT,
      ['Trần Văn Khê — "Foreword" cho luận án của Nguyễn Xuân Thảo (bản Anh)', 'https://nghiasinh.org/userfiles/tonghop/02_2009/forewordtvkisbn.pdf'],
      KIEU, XTDIENTAU],
    body: `
## Thông tin chung
Luận án *Music Ministry: The Inculturation of Liturgical Vocal Music in Vietnam* (nhan đề tiếng Việt thường dùng: *Hội nhập văn hoá thánh ca phụng vụ tại Việt Nam*) của Joseph Nguyễn Xuân Thảo, OFM, là luận án D.Min. ở Catholic Theological Union (Chicago), năm 2007. Trường và năm được xác nhận qua chú thích của Tùng Công Kiều. Toàn văn không có miễn phí; **người biên soạn chỉ đọc Chương II (tr. 63 – 184)** và hai lời giới thiệu của Trần Văn Khê. Luận án còn bản quyền nên bài này chỉ tóm lược. Đừng nhầm tác giả này với Tùng Công Kiều, một người khác: có công cụ tìm kiếm từng gộp hai người làm một.

## Chương II đặt câu hỏi gì
Chương có tên "Musical Culture in Catholic Vietnam: From Folksongs to Catholic Traditional Chants to Hải Linh's Songs". Mượn câu hỏi của Leonard Bernstein về nhạc Mỹ, Thảo hỏi điều gì làm một bản nhạc nghe ra "Việt", và trả lời qua ba tầng: dân ca; cung đọc kinh, cung đọc sách và thánh ca cổ truyền của giáo dân; nhạc Hải Linh như mẫu hội nhập (tr. 63 – 64).

## Các nội dung chính
- **Thanh điệu và giai điệu** (tr. 66 – 69, 154 – 157): các cách ký âm sáu thanh (Taberd 1838, Lê Văn Lý 1948, Trần Văn Khê 1962, Phạm Duy, Đoàn Xuân Kiên) chỉ là xấp xỉ; số thanh khác nhau theo vùng; thanh "đơn" (ngang, huyền, sắc) có thể một cao độ, thanh "kép" (ngã, hỏi, nặng) cần ít nhất hai. Trong hò, hát ru, ngâm, giai điệu gần như đoán trước được nếu biết lời; trong lý và hát, nhạc tự do hơn miễn giữ quan hệ cao độ tương đối. Xem chi tiết ở [[thanh-dieu-va-giai-dieu-thanh-ca]].
- **Cung kinh, cung sách** (tr. 167 – 173): ba sắc thái Vui, Thương, Mừng gắn với ba điệu thức dân ca Xang, Xự, Xê; bảng 2.91 liệt kê 15 công thức đơn giản từ hai đến năm nốt. Xem [[cung-kinh-cung-sach]].
- **Thánh ca cổ truyền và vãn dâng hoa** (tr. 174 – 179): hầu hết dùng ngũ cung, ba điệu Xang, Xự, Xê, thêm điệu Liu; bộ vãn dâng hoa có ba phần A dẫn nhập, B dâng hoa, C tạ ơn. Xem [[thanh-ca-co-truyen-va-van-dang-hoa]].
- **Hải Linh** (tr. 180 – 184): ngũ âm hoá, hợp âm I – IV – V – VI, giữ thanh điệu ở các bè. Xem [[hai-linh]].
- Thảo còn ghi kinh nghiệm cá nhân về tốc độ cung thương mùa Chay: khoảng 96 – 120 tiếng (móc đơn) mỗi phút; bình thường 130 – 150; nhanh 170 – 200 (chú thích 431). Đây là số đo của tác giả, không phải khảo sát.

## Lời của Trần Văn Khê
Lời giới thiệu ngày 18.4.2008 nêu rằng trong thời gian dạy nhạc học ở các đại học Âu Mỹ, ông chưa đọc luận án nào làm ông "thoả mãn về mặt nhạc học" như luận án này. Ông nêu ba điểm riêng: Thảo hiểu sâu tư tưởng và giá trị sáng tác của Hải Linh, lần đầu có bức tranh khá đầy đủ về cung kinh và cung sách cùng các bài ca vãn đậm nét dân ca, và Thảo phân loại các "tiếng đệm" trong dân ca. Khê viết rằng chưa học giả nào nắm được tư tưởng, quan điểm thẩm mỹ, kiến thức và giá trị sáng tác của Hải Linh như Lm Xuân Thảo. Cần nhớ đây là lời giới thiệu khen ngợi, chưa phải phản biện độc lập.

Khảo sát bằng bảng hỏi gửi ca trưởng, theo Khê và Kiều thuật lại, cho kết quả: trong 20 bài thánh ca phụng vụ dùng nhiều nhất, 10 bài dùng thang ngũ cung ở mức nào đó (Kiều dẫn luận án tr. 42). Người biên soạn không biết cách chọn 20 bài đó; xem giới hạn của con số này ở [[ngu-cung-trong-thanh-ca]].

## Điều chưa rõ
- Các chương I và III – VI chưa đọc, gồm cả khảo sát gốc và danh sách 20 bài.
- Bảng gán nốt theo thanh trên một trang bách khoa mạng chưa tìm thấy ở Chương II; có thể ở các chương khác hoặc các bài của Zaragoza.

## Câu hỏi ôn tập
1. Ba tầng trả lời cho câu hỏi "điều gì làm nhạc nghe ra Việt" trong Chương II là gì?
2. Vì sao lời của Khê là nguồn cao nhưng chưa phải đánh giá độc lập?
3. Số "10 trong 20 bài" cho biết điều gì và không cho biết điều gì?

**Xem thêm:** [[cung-kinh-cung-sach]], [[thanh-ca-co-truyen-va-van-dang-hoa]], [[thanh-dieu-va-giai-dieu-thanh-ca]], [[hai-linh]], [[cac-cong-trinh-nghien-cuu-thanh-ca]]
`,
  },
  {
    slug: "cac-cong-trinh-nghien-cuu-thanh-ca",
    title: "Điểm danh các công trình nghiên cứu thánh ca Việt Nam",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["thư mục nghiên cứu thánh ca", "công trình nghiên cứu thánh ca Việt Nam"],
    summary: "Bảng các công trình học thuật và tài liệu chính về thánh ca Việt Nam, kèm mức người biên soạn đã đọc: Thảo 2007, Kiều 2009, Văn Chi, Bách 2015, Bùi Trung Thành 2024 và 2026, Hoang 2026, v.v.",
    refs: [THAOCH2, KIEU, BACH, BTT26, BTT24, HOANG26, OCPSACH,
      ['Phan Gia Anh Thư và Ngô Thanh Nhàn — "An Initial Analysis on the Interactions of Vietnamese Linguistic Tones & Vietnamese Folk Music" (MARAAS 2017)', 'https://cs.nyu.edu/~nhan/full_paper_vs2.032p1.pdf'],
      ['Trần Thị Thu Hà, Trần Ngọc Lan, Bùi Huyền Nga — tổng quan về Hoàng Kiều (Tạp chí Giáo dục Nghệ thuật, số 57/2025)', 'https://vjol.info.vn/tcgiaoducnghethuat/article/view/138810'],
      ['Lê Hải Đăng — "Tiếp biến văn hóa Công giáo nhìn từ góc độ âm nhạc nhà thờ" (2017), chỉ đọc tóm tắt', 'https://vjol.info.vn/ncpt-hue/article/view/28101'],
    ],
    body: `
## Cách đọc bảng
Cột "Đã đọc" ghi mức mà người biên soạn thực sự đã mở: **toàn văn**, **một phần** (nói rõ phần nào), **tóm tắt** hay **chưa đọc**. Một công trình chỉ được dùng để dẫn trong thư viện này khi có ít nhất mức "một phần" và có số trang.

| Công trình | Loại | Đã đọc | Ghi chú |
|---|---|---|---|
| Nguyễn Xuân Thảo, *Music Ministry*, CTU, 2007 | luận án D.Min. | một phần: Chương II, tr. 63 – 184 | toàn văn không có miễn phí; xem [[luan-an-xuan-thao-2007]] |
| Trần Văn Khê, lời giới thiệu luận án Thảo, 2008 | lời giới thiệu (bản Việt và bản Anh) | toàn văn (2 trang) | khen ngợi; không phải phản biện |
| Tùng Công Kiều, *A Project on Developing Catholic Liturgical Music in Vietnam*, Boston University, 5.2009 | đồ án S.T.M., 136 tr. + phụ lục | toàn văn qua bản quét tự OCR | giấy phép Attribution Non-Commercial (theo trang OpenBU); số trang ước lượng từ OCR, nên ghi "tr. ~"; xem [[bon-huong-sang-tac-thanh-ca]] |
| Paul Văn Chi, *Catholic Choral Music in Vietnam 1945–1975*, Portland: OCP / Pastoral Press, 2002 (hoặc luận văn MA 1999) | sách / luận văn | chưa đọc | chỉ qua trang OCP, Bách, Kiều, Hoang; xem [[van-chi-catholic-choral-music-in-vietnam]] |
| Anthony Nguyễn, "Vietnamese Catholic sacred music: faith challenged by socio-political change, 1533–1986", Graduate Theological Union, 2006 | luận văn thạc sĩ | chưa đọc | Kiều ghi chú rằng ông không lấy được bản; chưa thấy bản trực tuyến |
| Nguyễn Bách, luận án tiến sĩ về nhạc hợp xướng ở Sài Gòn và TP.HCM, Học viện Âm nhạc Quốc gia Việt Nam, 2015, 164 tr. | luận án | một phần: Mở đầu, Chương 1 (thánh ca), các mục về dấu giọng | nhan đề chính xác chưa kiểm; thánh ca chỉ là một phần; xem [[dau-giong-trong-hop-xuong]] |
| Nguyễn Đình Lâm, "Âm nhạc Công giáo ở Việt Nam trước và sau Công đồng Vatican II", Tạp chí Nghiên cứu Văn hoá, 2011 | bài báo | chưa đọc | chỉ qua Bùi Trung Thành trích |
| Nguyễn Đình Lâm, "Quá trình hội nhập văn hóa [âm nhạc] Công giáo ở Việt Nam", Nghiên cứu Tôn giáo, số 10, 2011 | bài báo | chưa đọc | nhan đề lệch giữa mục lục tạp chí và thư mục của Bùi Trung Thành |
| Bùi Trung Thành, bài về Đồng Bài và An Ngải, Nghiên cứu Tôn giáo, số 9, 2024, tr. 27 – 42 | bài báo | toàn văn | phỏng vấn sâu 2020; tác giả là nghiên cứu tự do; bảng so sánh là ảnh, chưa đọc; xem [[thanh-nhac-nguoi-muong-phat-diem]] |
| Bùi Trung Thành, bài tiếp biến văn hoá âm nhạc Công giáo, Tạp chí Dân tộc học và Tôn giáo học, số 1 (06), 2026, tr. 110 – 125 | bài tổng thuật | toàn văn đến hết mục 2.2.2 | một số câu cần kiểm (ví dụ nhận định về Masson 1962); xem [[hoi-nhap-van-hoa-trong-thanh-ca]] |
| Tuan Hoang, "Postcolonial Catholicism in South Vietnam, 1954–1975", Brill, 2026, tr. 387 – 391 | chương sách (open access) | một phần: mục 5 | sử học, có chú thích; dùng chủ yếu Paul Văn Chi |
| Lê Hải Đăng, bài về nhạc nhà thờ và đại phong cầm, 2017 | bài báo | chỉ tóm tắt | toàn văn chưa tải được |
| Phan Gia Anh Thư và Ngô Thanh Nhàn, MARAAS 2017 | báo cáo hội nghị | tóm tắt và mở đầu | 412 mẫu từ một bài dân ca Nam bộ; không phải thánh ca; chỉ là gợi ý phương pháp |
| Tổng quan về Hoàng Kiều, Tạp chí Giáo dục Nghệ thuật, số 57/2025 | bài tổng quan | hai trang đầu | sách gốc chưa đọc; xem [[hoang-kieu-thanh-dieu-va-dieu-thuc]] |
| Eric Henry, "Tân Nhạc: Notes Toward a Social History of Vietnamese Music in the Twentieth Century", Michigan Quarterly Review 44(1), 2005, tr. 135 – 147 | bài báo | chỉ tóm tắt qua kết quả tìm kiếm | tác giả là Henry, không phải Jason Gibbs |
| Zaragoza, "The Sacred Sound of Đọc Kinh", 2001; Nguyễn Xuân Thảo và Zaragoza, "Doc Kinh: A Vietnamese Sonic Landscape", 2012 | bài báo | chưa đọc | hai nguồn đáng tìm qua thư viện |
| Nguyễn Long Thao, "Nghiên cứu phong tục ngắm của người Công giáo Việt Nam", 2017 | bài báo | chưa đọc | xem [[ngam-mua-chay]] |

## Nhận xét
- Phần lớn nghiên cứu thánh ca bằng tiếng Việt là bài báo tổng thuật hoặc văn bản mục vụ; ít công trình ký âm và phân tích hệ thống. Công trình có ký âm và khảo sát sâu nhất mà người biên soạn đọc được là Chương II của Thảo.
- Về ca đoàn giáo xứ và nhạc hải ngoại, chưa thấy luận án hay bài tạp chí độc lập; tư liệu hiện có chủ yếu mang tính thực hành (xem [[thanh-ca-hai-ngoai]]).
- Nhiều bài trong nước viết từ góc "bảo tồn bản sắc" và dẫn lại Nguyễn Đình Lâm 2011, mà bài gốc chưa đọc được; nên xem các câu như phương châm "thánh ca Quan họ" là nguồn gián tiếp.
- Tra cứu Học viện Âm nhạc Quốc gia và các nhạc viện: tìm kiếm tiếng Việt hai lần không ra luận văn thánh ca nào trực tuyến; "chưa thấy" không có nghĩa là không tồn tại.

## Điều chưa rõ
Danh sách này không đầy đủ; nó chỉ phản ánh những gì người biên soạn tìm và đọc được. Xem tiếp ở [[nhung-dieu-chua-biet-ve-thanh-ca-viet-nam]] và tổng quan [[nghien-cuu-am-nhac-viet-nam]].

## Câu hỏi ôn tập
1. Phân biệt "đã đọc toàn văn", "một phần" và "chỉ tóm tắt" trong cột thứ ba, kèm hai ví dụ.
2. Vì sao một số câu của Bùi Trung Thành cần kiểm trước khi trích?
3. Công trình nào trong bảng là đồ án mục vụ chứ không phải nghiên cứu thực nghiệm?

**Xem thêm:** [[luan-an-xuan-thao-2007]], [[van-chi-catholic-choral-music-in-vietnam]], [[nghien-cuu-am-nhac-viet-nam]], [[thanh-dieu-va-giai-dieu-thanh-ca]], [[nhung-dieu-chua-biet-ve-thanh-ca-viet-nam]]
`,
  },
  {
    slug: "nhung-dieu-chua-biet-ve-thanh-ca-viet-nam",
    title: "Những khoảng trống tư liệu và câu hỏi còn mở",
    category: 'thanhca',
    also: ['vietnam'],
    aliases: ["khoảng trống tư liệu thánh ca", "câu hỏi còn mở thánh ca Việt Nam"],
    summary: "Danh sách những điều chưa tìm được nguồn hoặc nguồn còn lệch trong tư liệu về thánh ca Công giáo Việt Nam: tên thật, năm tháng, tuyển tập, văn bản gốc, và các nghiên cứu còn thiếu.",
    refs: [TGP2, CGVDTLBT, BTT26, BACH, KIEU, THAOCH2, TVTC, UBTN],
    body: `
## Vì sao cần bài này
Người biên soạn không muốn lấp chỗ trống bằng suy đoán. Bài này gom lại những điều mà các nguồn đã đọc chưa trả lời được, để người sau biết nên tìm ở đâu. Từng mục có thể được cập nhật khi có nguồn mới.

## 1. Tiểu sử và tên gọi
- Tên thật, năm sinh của Nguyễn Khắc Xuyên, Tâm Bảo, Duy Tân, Trịnh Cát: chưa có (xem [[bang-tra-nhac-si-thanh-ca]]).
- Tiểu sử các tên như Viết Chung, Nguyễn Duy, Phương Anh, Thái Nguyên, Trương Huy Hoàng, Hoàng Diệp, Ngọc Kôn, Trầm Hương: chỉ có một dòng trong bảng Thư viện Thánh Ca hoặc danh mục bài.
- Hùng Lân: tên thật Cường hay Hường; năm dịch "Đêm Thánh Vô Cùng" (xem [[hung-lan]]).
- Hải Linh: bút danh phụ và ngày sinh chính xác (xem [[hai-linh]]).
- Ngô Duy Linh: năm thụ phong (xem [[ngo-duy-linh]]).
- Kim Long: năm tập *Ca lên đi* đầu tiên; giáo trình đã in hay chưa (xem [[kim-long]]).

## 2. Tuyển tập và ấn phẩm
- *Tuyển tập Thánh ca Việt Nam* của Ủy ban Thánh nhạc: chỉ có một dấu vết (Giám mục Nguyễn Văn Hoà kiểm duyệt quyển II); chưa rõ năm, nhà xuất bản, mục lục.
- *Thánh Ca Dân Chúa* (bản 2008 và bản 2009 của OCP): chưa rõ người biên soạn và nhà xuất bản.
- Mục lục chi tiết, năm in của *Catholic Choral Music in Vietnam 1945–1975* (xem [[van-chi-catholic-choral-music-in-vietnam]]).
- Tập *Cantemus Domino* của Nhạc đoàn Lê Bảo Tịnh: chỉ có trong một bài Wikipedia thiếu nguồn.
- Số hiệu "Cung Thánh XV": ghi 1961 hay 1962 tuỳ chỗ trong cùng một bài báo.

## 3. Văn bản gốc chưa đọc
- Thông cáo số 2/94 và 3/94 (30.8.1994) của Ủy ban Thánh nhạc: chỉ biết qua chú thích.
- Thư chung 1980 của HĐGMVN: câu "lấy dân ca cổ truyền làm cấu trúc âm thanh" chỉ được biết qua Nguyễn Đình Lâm 2011, rồi Bùi Trung Thành trích lại (xem [[hoi-nhap-van-hoa-trong-thanh-ca]]).
- Ba tham luận của Kim Long ở Hội thảo Thánh nhạc 20 – 22 (xem [[kim-long-ve-thanh-nhac]]).
- Các chương I, III – VI luận án Thảo và danh sách 20 bài thánh ca (xem [[luan-an-xuan-thao-2007]]).
- Bài của Tổng giáo phận Hà Nội về quan điểm bình ca của Kim Long (không mở được).

## 4. Nghiên cứu còn thiếu
- Nghiên cứu độc lập, có ký âm, về từng nhạc sĩ lớn (luận văn, viện âm nhạc): tìm kiếm tiếng Việt về tên ít phổ biến trả về rất ít.
- Phân tích thanh điệu – giai điệu trên thánh ca cụ thể: chỉ có phương pháp thử trên dân ca (xem [[cac-cong-trinh-nghien-cuu-thanh-ca]]) và các đề xuất như bộ dấu trụ của Ngọc Kôn (xem [[thanh-dieu-va-giai-dieu-thanh-ca]]).
- Ca đoàn giáo xứ và thánh ca hải ngoại: chưa có nghiên cứu độc lập; chủ yếu tư liệu thực hành (xem [[thanh-ca-hai-ngoai]]).
- Công trình áp dụng khung thanh điệu – điệu thức của Hoàng Kiều vào thánh ca: chưa thấy (xem [[hoang-kieu-thanh-dieu-va-dieu-thuc]]).

## 5. Những chỗ nguồn đang lệch nhau
- Năm thành lập Ủy ban Thánh nhạc, cũng như thời điểm đại hội 1971 và 1972 (xem [[uy-ban-thanh-nhac]]).
- Cuốn sách hát thánh ca "đầu tiên": tập 20 bài của Lm Vượng theo Bùi Trung Thành, hay các tập 1940 – 1941 theo bản tổng kết của Ủy ban Thánh nhạc (xem [[nhung-bai-hat-tieng-viet-dau-tien]]).
- "Nửa đêm mừng Chúa ra đời" của Phaolô Đạt: khoảng 1911 (Bách), hay 1955 – 1970 (Chi theo Bách), và phân loại hợp xướng hay tân nhạc.
- Mối quan hệ chính xác giữa Nhạc đoàn Lê Bảo Tịnh và hai bài in ở Tân Định ấn quán 1910: một nghi vấn niên đại được ghi trong tư liệu nghiên cứu.
- "Trăm triệu lời ca": Tiến Dũng hay Nguyễn Văn Hoà.
- Bảng gán nốt theo thanh của cung đọc kinh, xem [[cung-kinh-cung-sach]]: ba nguồn không thống nhất và không cùng đối tượng.

## Cách đóng góp tư liệu
Khi tìm được nguồn mới, hãy ghi: tên tác giả, nhan đề, nơi và năm, địa chỉ, số trang và điều khoản bản quyền. Nếu nguồn mâu thuẫn, ghi cả hai.

## Câu hỏi ôn tập
1. Chọn một mục ở phần 5 và nêu hai nguồn lệch nhau.
2. Vì sao câu trong Thư chung 1980 chưa thể được xem là nguyên văn?
3. Bạn sẽ tìm ở đâu để bổ sung phần nghiên cứu độc lập về từng nhạc sĩ?

**Xem thêm:** [[bang-tra-nhac-si-thanh-ca]], [[cac-cong-trinh-nghien-cuu-thanh-ca]], [[phan-ky-thanh-nhac-viet-nam]], [[thanh-ca-viet-nam]]
`,
  },
]
