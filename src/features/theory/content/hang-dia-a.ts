import type { Article } from '../wiki'
import { SADLER_REFS, CRB_2025, YPP, LUAT_SHTT } from './hang-dia-refs'

export const hangDiaA: Article[] = [
  {
    slug: 'hang-dia-nganh-nhac',
    title: 'Cỗ máy hãng đĩa (1) — Các vai trong ngành nhạc',
    category: 'musicology',
    aliases: ['các vai trong ngành nhạc', 'A&R là gì', 'major label', 'Big Three', 'hãng đĩa lớn', 'hãng đĩa độc lập', 'artist label', 'upstream deal', 'nhà phân phối nhạc', 'aggregator', 'self-distribution', 'distributor', 'nhà xuất bản âm nhạc', 'PRO', 'performing rights organisation', 'DJ promo'],
    summary: 'Phần I sách The Label Machine (Nick Sadler, 2025), chương nghệ sĩ – âm nhạc – phòng thu – A&R – người quản lý – hãng đĩa – nhà phân phối – công ty quản lý – nhà xuất bản – tổ chức quản lý quyền – DJ – người hâm mộ: mỗi vai làm gì, kiếm tiền thế nào, và chỗ đứng của một hãng đĩa nhỏ giữa họ.',
    refs: SADLER_REFS,
    body: `
Bài đầu bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo Phần I sách *The Label Machine* của **Nick Sadler** (bản 2025). Số trang trong ngoặc là số trang bản in. Sadler mở phần này bằng một sơ đồ quan hệ trong ngành nhạc nhìn từ phía hãng đĩa — ông nói rõ sơ đồ "không hoàn hảo", vì ngành có rất nhiều quan hệ gián tiếp (tr. 5).

## Nghệ sĩ, âm nhạc, phòng thu
- **Nghệ sĩ** trong sách là người hoặc nhóm làm ra bản thu được phát hành — ban nhạc, nhà sản xuất, ca sĩ – nhạc sĩ. Ngành vẫn phân biệt *recording artist* (người chơi và thu) với *songwriter* (người viết nhạc và lời), vì hai vai mang hai loại quyền khác nhau (tr. 6) — xem [[hang-dia-hai-loai-ban-quyen]].
- **Âm nhạc** là thứ duy nhất nối mọi phần của ngành. Tiếp thị giỏi có thể nâng một bài tầm thường, nhưng muốn sự nghiệp dài thì nhạc phải tốt (tr. 7).
- **Phòng thu và phần mềm**: DAW (Logic, Pro Tools, Ableton Live), plugin, nhạc cụ ảo; ba vai nhà sản xuất – kỹ sư mix – kỹ sư master. Sadler cho rằng **AI** đang tác động mạnh nhất ở khâu này — từ hỗ trợ mix, master tới sáng tác cả bài từ vài chữ gợi ý (tr. 9 – 10). Bàn rộng hơn: [[tri-tue-nhan-tao-va-am-nhac]].

## A&R
*Artist and Repertoire* — người chọn và ký nhạc cho hãng, thường từng là nghệ sĩ; A&R giỏi góp ý cả bản phối, bản mix (tr. 11). Nếu bạn là nghệ sĩ tự mở hãng, bạn **chính là trưởng A&R**: không cần nổi tiếng, chỉ cần biết nhạc hay nghe ra sao và hiểu xu hướng của thể loại mình. Sadler dẫn mẹo "thử nhạc" từ sách *Mixing With Your Mind* của Michael Paul Stavrou: cầm một vật nặng rồi nâng hạ theo nhịp bài — càng dễ theo, bài càng có "độ cuốn" (tr. 11 – 12). Đây là kinh nghiệm thực hành, không phải phép đo. Xem thêm [[a-r-va-phat-trien-nghe-si]].

## Người quản lý
- Ngành nhạc là nơi duy nhất mà "manager" **không phải là sếp**: nghệ sĩ mới là sếp, người quản lý giúp họ thực hiện ước mơ — lập chiến lược, dựng đội ngũ (hãng đĩa, nhà xuất bản, PR, đại lý đặt show), báo tin xấu khi cần (tr. 13).
- Hoa hồng thường **10 – 20%** thu nhập nghệ sĩ, theo kinh nghiệm tác giả là **15%** với nghệ sĩ độc lập. Có thể ký sáu tháng "trăng mật" trước, rồi hợp đồng đầy đủ khoảng ba năm, sau đó gia hạn từng năm (tr. 14).
- Lời khuyên: kiểm tra lý lịch, hỏi nghệ sĩ từng làm với họ, và hỏi thử vài câu về các dòng tiền bản quyền — người quản lý đáng tin phải giải thích được (tr. 14). Phân tích sâu hơn ở [[quan-ly-nghe-si-lo-trinh]].

## Ba kiểu hãng đĩa
Hãng đĩa lo phần kinh doanh của nhạc thu âm: phân phối, tiếp thị, PR, thu tiền bản quyền cho một bản phát hành (tr. 15).

| Kiểu | Đặc điểm (theo sách) |
|---|---|
| **Hãng lớn** — "Big Three": Universal Music Group, Sony Music Entertainment, Warner Music Group | Vẫn là đường tốt nhất nếu bạn muốn thành ngôi sao pop, nhất là khi dưới 21 tuổi (tr. 15) |
| **Hãng độc lập** — mọi hãng không thuộc Big Three, kể cả công ty lớn đa quốc gia | Thân thiện với nghệ sĩ hơn, thường do nghệ sĩ lập, bám một thể loại hay một "scene"; ví dụ XL, Warp, Domino, 4AD (tr. 16) |
| **Hãng của nghệ sĩ** | Do nghệ sĩ và đội ngũ lập, ít sản phẩm hơn; nghệ sĩ chủ hãng luôn được ưu tiên phát hành (tr. 16) |

**Thoả thuận "upstream"**: hãng độc lập có thoả thuận với hãng lớn để chuyển một nghệ sĩ đang lên sang chiến dịch đại chúng — ví dụ Wilkinson từ RAM Records lên Virgin (Universal) (tr. 17). Con đường điển hình: hãng của nghệ sĩ → hãng độc lập → hãng lớn. Sadler nhận xét nghệ sĩ thành công **không chờ được ký**, mà tự làm nhạc, tự lập hãng, tự xây người hâm mộ — rồi chính điều đó hút người quản lý, đại lý và hãng lớn tới (tr. 17 – 18).

## Nhà phân phối
Nhà phân phối nhận file master và ảnh bìa, đưa lên các cửa hàng (Spotify, Apple Music, Amazon, Deezer…), thu tiền và gửi báo cáo hằng tháng; độ trễ từ lượt nghe tới lúc nhận tiền khoảng **ba tháng** (tr. 18 – 19). Nhà phân phối **không phải hãng đĩa** và không sở hữu bản quyền của bạn — họ bán dịch vụ, lấy phí hoặc phần trăm (tr. 19).

| Loại | Cách làm | Ví dụ trong sách |
|---|---|---|
| **Tổng hợp (aggregator)** | Gom hàng trăm nền tảng, làm "hậu trường" cho các nhà phân phối nhỏ; cần kho nhạc lớn | The Orchard (tr. 20) |
| **Có dịch vụ (serviced)** | Lấy **15 – 30%** doanh thu, không phí trả trước; có người phụ trách, tiếp thị, kế toán; phải nộp hồ sơ kèm kế hoạch kinh doanh | Believe, Ingrooves, AWAL; chuyên điện tử: FUGA, Label Engine, Label Worx, Symphonic (tr. 21 – 22) |
| **Tự phân phối** | Phí cố định, không hỗ trợ; rẻ khi mới bắt đầu | DistroKid, CD Baby, TuneCore (tr. 22) |

Sadler nêu một lý lẽ: nhà phân phối lấy phần trăm thì **có lợi ích khi nhạc bạn bán chạy**, còn nhà phân phối thu phí cố định thì không (tr. 22). Chi tiết chọn nhà phân phối ở [[hang-dia-phan-phoi]].

## Công ty quản lý và chuyện "ăn hai lần"
Công ty quản lý là tập hợp nhiều người quản lý (UAA, Red Light, Q Prime…); lớn nhất thường nằm trong các hãng đại diện tài năng như CAA, UTA, WME (tr. 24). Hãng đĩa nhỏ hay phải làm luôn việc quản lý nghệ sĩ trẻ — viết tiểu sử, chuẩn bị ảnh, đăng ký bài hát. Nếu làm cả hai, đừng **double-dip**: đã hưởng phần của hãng trên doanh thu đĩa thì không lấy thêm hoa hồng quản lý trên chính khoản đó (tr. 25).

## Nhà xuất bản và tổ chức quản lý quyền
- **Nhà xuất bản âm nhạc** đại diện cho **tác phẩm** (phần nhạc và lời), không phải bản ghi; hãng đĩa thì khai thác bản ghi. Vì thế "nghệ sĩ có nhà xuất bản, hãng đĩa thì không" (tr. 26). Nguồn thu của nhà xuất bản: phát thanh, đưa bài vào album nghệ sĩ khác, viết chung, sync (tr. 27). Xem [[xuat-ban-am-nhac-va-cac-loai-tac-quyen]].
- **Tổ chức quản lý quyền biểu diễn (PRO)** cấp phép cho nơi sử dụng nhạc và thu – chia tiền khi nhạc được trình diễn công cộng (tr. 29). Sách kể: Mỹ có ASCAP (1914), BMI, SESAC (vì lợi nhuận), The MLC (tiền cơ học streaming, từ 2019), SoundExchange (bản ghi phát qua truyền dẫn số); Anh có PRS – MCPS và PPL (tr. 30 – 31).
- **Ở Việt Nam**: VCPMC quản lý quyền tác giả âm nhạc, RIAV đại diện nhà sản xuất bản ghi — xem [[to-chuc-quan-ly-tap-the-quyen-tac-gia]], [[cong-nghiep-am-nhac]].

## DJ và người hâm mộ
- **DJ** là "người có ảnh hưởng đầu tiên" của ngành. Với nhạc điện tử, hip hop, trap, mạng lưới DJ quyết định remix, hợp tác và lượt chơi; nếu bạn làm nhạc kiểu đó mà chưa DJ thì nên học, vì đó là cách dễ nhất kiếm tiền từ biểu diễn (tr. 33 – 34). Với thể loại khác, DJ phát thanh vẫn có thể "làm nên" một nghệ sĩ.
- **Người hâm mộ** là khách hàng. Khảo sát của tác giả với 182 hãng độc lập: điều họ muốn được giúp nhất là **tăng người hâm mộ** (tr. 35). Với nhạc câu lạc bộ, có hai kiểu fan: người nghe thường, và DJ mua nhạc để chơi (tr. 35 – 36).

## Câu hỏi và bài tập
1. Vẽ lại sơ đồ quan hệ trong ngành nhạc nhìn từ một hãng đĩa nhỏ ở Việt Nam: ai là nhà phân phối, ai thu tiền tác phẩm, ai thu tiền bản ghi?
2. So sánh nhà phân phối "có dịch vụ" và "tự phân phối" ở bốn mặt: chi phí, hỗ trợ, điều kiện nhận, động cơ của nhà phân phối.
3. Bạn quản lý một nghệ sĩ và đồng thời là chủ hãng phát hành nhạc của họ. Viết một đoạn giải thích cách bạn tránh "ăn hai lần".
`,
  },
  {
    slug: 'hang-dia-tiep-thi-va-bieu-dien',
    title: 'Cỗ máy hãng đĩa (2) — Tiếp thị, PR, biểu diễn và đội ngũ chuyên môn',
    category: 'musicology',
    aliases: ['marketing âm nhạc', 'PR âm nhạc', 'plugging', 'pitching', 'premiere', 'booking agent', 'đại lý đặt show', 'advancing', 'event promoter', 'talent buyer', 'all-in deal', 'luật sư âm nhạc', 'kế toán âm nhạc', 'thành công trong âm nhạc'],
    summary: 'Nửa sau Phần I sách The Label Machine (Nick Sadler, 2025): tiếp thị là kể chuyện, tư liệu nội dung, thương hiệu, mạng xã hội và quảng cáo trả phí; PR, plugging và pitching (chi phí chiến dịch theo sách); biểu diễn, đại lý đặt show (10 – 15%), nhà tổ chức và hai kiểu cát-xê Âu – Mỹ; luật sư, kế toán; và một định nghĩa thành công thực tế.',
    refs: SADLER_REFS,
    body: `
Bài thứ hai bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo các chương *Marketing* tới *Success* (tr. 37 – 63) sách của Nick Sadler.

## Tiếp thị là kể chuyện
Sadler định nghĩa tiếp thị âm nhạc là "hoạt động quảng bá và bán nhạc, gồm nghiên cứu thị trường và quảng cáo", và nói gọn: tiếp thị tốt là **kể một câu chuyện thú vị theo cách chạm tới cảm xúc** (tr. 37 – 38). Nghệ sĩ có câu chuyện thật về mình là ai, từ đâu tới, đi về đâu thường làm tốt trên mạng xã hội; cũng có người làm "phản tiếp thị", gần như không đăng gì — sách nêu Burial — và vẫn thành công nếu nhạc đủ độc đáo (tr. 39).

- **Tư liệu (assets)**: "nội dung là vua"; có người thiết kế trong đội tiết kiệm rất nhiều, nếu không thì học Canva, Adobe Express (tr. 39 – 40).
- **Thương hiệu**: album khái niệm là dạng trọn vẹn nhất của kể chuyện — David Bowie với *Ziggy Stardust*; tác giả kể album *City of Gold* của The Prototypes, có cả hình ảnh trình diễn theo chủ đề (tr. 40 – 41). Kênh YouTube Majestic Casual là ví dụ về một "tông" hình ảnh nhất quán (tr. 41).
- **Mạng xã hội** đứng ở đỉnh phễu tiếp thị; cách giữ chân người mới là đổi một bản nhạc lấy địa chỉ email, hay ngày nay đổi lấy lượt theo dõi trên Spotify, SoundCloud (tr. 42 – 43). Phễu được giải thích kỹ ở [[hang-dia-tiep-thi-phat-hanh]].
- **Quảng cáo trả phí**: từ khi Facebook bắt trang âm nhạc trả tiền để tới được chính người theo dõi mình, ngân sách quảng cáo là bắt buộc (tr. 43). Sadler cảnh báo các dịch vụ **bán lượt nghe**: Spotify ngày càng kiểm tra và gỡ bài có lượt nghe từ bot (tr. 44).

## PR, plugging, pitching
PR là gửi tin tới báo chí, blog, DJ và các nền tảng (DSP) để họ giới thiệu nhạc của bạn (tr. 44 – 45).
- **Plugging**: chào bài cho một kênh để họ phát — xưa là phát thanh, nay gồm playlist Spotify, Apple Music, kênh YouTube và SoundCloud. Cách "mồi" phổ biến là cho kênh quyền **công chiếu (premiere)** (tr. 47 – 48).
- **Pitching**: chào bài cho blog và tạp chí để họ viết về bản phát hành và nghệ sĩ (tr. 48). Sadler lưu ý người đọc đã dồn lên mạng: *Rolling Stone* tháng 3/2024 in khoảng 110 nghìn bản nhưng có 19 triệu lượt đọc trực tuyến mỗi tháng — số liệu theo sách (tr. 48).
- **Chi phí**: một chiến dịch PR cho nhạc độc lập khoảng **£500 – £2.400 ($625 – $3.000)**, mức cao gồm cả chào bài phát thanh và Spotify (tr. 46). Lời khuyên: làm PR **nội bộ** để giữ quan hệ và quyền chủ động, thuê công ty ngoài cho dự án lớn như album kèm lưu diễn (tr. 49).
- Báo chí còn là **bằng chứng** khi xin thị thực lưu diễn, nhất là vào Mỹ (tr. 48 – 49).

## Biểu diễn và lưu diễn
Với nhiều nghệ sĩ, biểu diễn là nguồn thu lớn nhất, nhất là DJ hay nghệ sĩ đơn ca vì chi phí thấp, ít người chia (tr. 50). Bốn vai chính: nghệ sĩ (tập luyện; lúc đầu tự tìm show), người quản lý (đầu mối), **đại lý đặt show** và **nhà tổ chức** (tr. 51).

| Vai | Việc | Thù lao (theo sách) |
|---|---|---|
| **Đại lý đặt show (booking agent)** | Tìm show, đàm phán, thu cát-xê, chào lễ hội, lo hậu cần; thường phụ trách một vùng (châu Âu, Bắc Mỹ, châu Á – Úc…) | DJ: **15%** trọn gói, **10%** nếu không lo *advancing* (sắp xếp đi lại, khách sạn, rider trước show); ban nhạc: thường **10%** (tr. 52 – 53) |
| **Nhà tổ chức (promoter, ở Mỹ: talent buyer)** | Thuê địa điểm, bán vé, lời từ vé sau khi trừ chi phí | Live Nation, Eventim, AEG Presents… (tr. 55) |

- Không "thuê" được đại lý: họ tìm tới khi nhu cầu đủ để có lời; tốt nhất là chờ họ chủ động (tr. 51, 53). Phát hành nhạc đều đặn là cách tăng lượng show chắc nhất (tr. 54).
- **Hai kiểu cát-xê**: ở Anh, châu Âu, Úc, châu Á thường là cát-xê cho 60 – 90 phút, nhà tổ chức lo đi lại, khách sạn, rider; ở Mỹ và Canada thường là **"all-in"** — một khoản gồm cả đi lại, ăn ở, nên cao hơn (tr. 56). Quy trình đặt show chi tiết ở [[hang-dia-truong-thanh]].

## Luật sư và kế toán
- Luật sư âm nhạc bảo vệ nghệ sĩ khi ký hãng, ký xuất bản; với hãng đĩa, họ lo hợp đồng giữa doanh nghiệp. Hãng nhỏ với hợp đồng đơn giản có thể không cần luật sư cho mỗi lần ký, miễn là **hiểu hợp đồng của mình** (tr. 59).
- Ở Anh, luật sư tính theo giờ hoặc trọn gói và **không được** lấy phần trăm thu nhập tương lai; ở Mỹ, có luật sư nhận khoảng **5%** giá trị thương vụ (tr. 59 – 60). Cảnh giác người "biết luật" nhưng không có kinh nghiệm ngành nhạc.
- Kế toán: phần mềm Quickbooks, Xero cho sổ sách công ty; còn kế toán **bản quyền cho nghệ sĩ** cần phần mềm chuyên dụng (Label Engine, Infinite Catalog, Curve) (tr. 60 – 61). Xem [[hang-dia-truong-thanh]].

## Thành công nghĩa là gì
Hình mẫu sáo rỗng — quán quân Billboard, bìa *Rolling Stone* — chỉ dành cho khoảng **0,001%** nghệ sĩ, theo ước lượng của tác giả (tr. 62; sách không dẫn nguồn con số). Một định nghĩa thực tế hơn:
1. phát hành nhạc đều đặn;
2. có lượng người hâm mộ đủ nuôi các buổi diễn;
3. kiếm đủ tiền để sự nghiệp tự đứng mà không lỗ.

Không sống hoàn toàn bằng nhạc không có nghĩa là thất bại: nhiều nghệ sĩ lâu năm là người "đa nghề", và nếu nghề phụ cũng trong ngành nhạc (thiết kế bìa, chạy hãng đĩa) thì càng có lợi (tr. 62 – 63). So sánh với định nghĩa thành công của Paul Allen ở [[quan-ly-nghe-si-nghe-va-nguyen-tac]].

## Câu hỏi và bài tập
1. Viết câu chuyện của bạn (hoặc một nghệ sĩ bạn biết) trong năm câu: là ai, từ đâu, đi về đâu.
2. Giải thích khác nhau giữa *plugging* và *pitching*, mỗi khái niệm cho một ví dụ ở thị trường Việt Nam.
3. Một DJ nhận show 1.000 USD qua đại lý trọn gói. Tính phần đại lý và phần còn lại; nếu DJ tự lo advancing thì chênh lệch bao nhiêu?
`,
  },
  {
    slug: 'hang-dia-hai-loai-ban-quyen',
    title: 'Cỗ máy hãng đĩa (3) — Hai loại bản quyền: tác phẩm và bản ghi',
    category: 'musicology',
    aliases: ['composition vs sound recording', 'bản quyền tác phẩm', 'bản quyền bản ghi', 'master', 'publishing', 'bốn bên của một bài hát', 'master licence', 'master ownership', 'giấy phép bản ghi', 'thời hạn bản quyền', 'đăng ký bản quyền Mỹ', 'UK US copyright'],
    summary: 'Phần II sách The Label Machine (Nick Sadler, 2025), các chương đầu: bản quyền phát sinh tự động; mỗi bài hát có hai bản quyền — tác phẩm và bản ghi (master); bốn bên (người viết, nhà xuất bản, nghệ sĩ biểu diễn, hãng đĩa) qua ví dụ "176 Nights in Dalston"; giấy phép bản ghi và sở hữu bản ghi; đăng ký ở Mỹ và cách chứng minh ở Anh; thời hạn bảo hộ, kèm ghi chú Việt Nam.',
    refs: [...SADLER_REFS, LUAT_SHTT],
    body: `
Bài thứ ba bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo Phần II (tr. 65 – 80). Sadler thừa nhận đây là phần "khô và rối nhất" — và chính sự rối ấy từng giúp các hãng lớn ký hợp đồng bất lợi cho nghệ sĩ (tr. 65). Lý do rối: ngày trước mỗi vai (người viết, nhạc công, nhà sản xuất, kỹ sư) là một người, mỗi vai gắn một loại quyền; nay một nghệ sĩ độc lập làm hết các vai ở nhà, nên các quyền chồng lên nhau (tr. 66).

## Bản quyền phát sinh tự động
Mỗi khi bạn ghi một câu lời, thu một đoạn guitar hay xuất một file WAV, tác phẩm **tự động có bản quyền**; nếu nhóm cùng làm thì mặc định chia đều, trừ khi đã thoả thuận khác (tr. 68). Bản quyền có thể **chuyển nhượng** (người nhận thành chủ sở hữu) hoặc **cấp phép** (cho dùng có thời hạn, có tiền) (tr. 68). Ba cách sinh tiền lớn nhất: trình diễn công cộng, phát sóng, bán bản ghi (tr. 68).

## Tác phẩm và bản ghi
| | **Tác phẩm (composition, "work")** | **Bản ghi (sound recording, master)** |
|---|---|---|
| Là gì | Giai điệu, có hoặc không lời, khi đã được ghi lại (bản nhạc, file thu) | Một lần thu hoàn chỉnh việc trình diễn tác phẩm; bản mix cuối là "master" để ép đĩa, đưa lên nền tảng |
| Hai bên | **Người viết** và **nhà xuất bản** | **Nghệ sĩ biểu diễn** và **hãng đĩa** |
| Số lượng | Một bài | Có thể có hàng nghìn bản ghi của cùng một bài — sách nêu *Yesterday* của The Beatles với hơn 3.000 bản cover (tr. 71 – 72) |

Nghệ sĩ độc lập chưa ký xuất bản, phát hành trên hãng của chính mình thì **là cả bốn bên** (tr. 72 – 73). Khi ký với nhà xuất bản hay hãng đĩa, bạn bắt đầu chia các quyền ấy ra. Luật áp dụng là luật nơi người viết (hay hãng) **đóng thuế**, không phải nơi phát hành (tr. 70, 78). Đối chiếu khái niệm ở [[xuat-ban-am-nhac-va-cac-loai-tac-quyen]].

## Ví dụ "176 Nights in Dalston"
Sadler dựng một ví dụ (tr. 74 – 76), tóm lại như sau:
- **Tác phẩm**: tác giả và Robbie B viết chung, chia 50/50; tặng nhà sản xuất 20% phần xuất bản để đổi công sản xuất → nhà sản xuất 20%, hai người viết mỗi người 40%.
- **Bản ghi**: ký với một hãng, hãng nhận 50% master để đổi chi phí thu; ca sĩ Molly 10%, kỹ sư mix 5%, tác giả giữ phần còn lại.
- Sau đó tác giả ký xuất bản 50% cho mọi bài viết trong ba năm → phần tác phẩm của ông lại chia đôi với nhà xuất bản.
- Bài học: master và xuất bản là **hai cái bánh riêng**. Người khác cover bài này thì họ chia master của họ tuỳ ý, nhưng phần tác phẩm vẫn thuộc người viết.

## Giấy phép hay sở hữu bản ghi
- **Giấy phép bản ghi (master licence)**: giao master cho hãng **có thời hạn**, ví dụ 5 – 7 năm.
- **Sở hữu bản ghi (master ownership)**: giao **vĩnh viễn** (tr. 76). Mẫu hợp đồng cho từng kiểu ở [[hang-dia-hop-dong]].

## Anh, Mỹ và chuyện "đăng ký"
- **Mỹ**: đăng ký với Cục Bản quyền không bắt buộc để có bảo hộ cơ bản, nhưng là bằng chứng mạnh khi tranh chấp. Sách nêu đơn "Group of Unpublished Works" — tối đa 10 tác phẩm chưa công bố, phí **$85**, các bài phải cùng tác giả (tr. 78); một mẫu đơn có thể đăng ký cả tác phẩm lẫn bản ghi (tr. 79).
- **Anh**: không có thủ tục chính thức; tạo bằng chứng có dấu thời gian (email, lưu trữ, gửi bảo đảm cho chính mình và để niêm phong) (tr. 78 – 79).
- Sadler thực tế: người mới bắt đầu không nhất thiết làm việc này; quan trọng hơn là **đăng ký với các tổ chức thu tiền bản quyền** (tr. 80) — [[hang-dia-bon-dong-tien-ban-quyen]].

## Thời hạn bảo hộ
- Theo sách: tác phẩm ở **hầu hết các nước** được bảo hộ tới **70 năm** sau năm tác giả mất; bản ghi **70 năm** kể từ khi công bố (tr. 80; đây là mức của Anh – EU, ở Mỹ bản ghi có quy tắc riêng).
- **Việt Nam** khác: theo Luật Sở hữu trí tuệ (Điều 27), tác phẩm âm nhạc được bảo hộ **suốt cuộc đời tác giả và 50 năm** sau khi mất (đồng tác giả: 50 năm sau khi người cuối cùng mất); quyền nhân thân như đặt tên, đứng tên, bảo vệ sự toàn vẹn được bảo hộ vô thời hạn. Việt Nam cũng đăng ký quyền tác giả tự nguyện tại Cục Bản quyền tác giả. Xem [[ban-quyen-am-nhac-viet-nam]], [[ban-quyen-am-nhac-quoc-te]].

## Câu hỏi và bài tập
1. Một bài hát do hai người viết, ba người thu. Lập bảng phần trăm tác phẩm và bản ghi theo một thoả thuận bạn tự đặt.
2. Bạn cover một ca khúc của Văn Cao. Bạn sở hữu gì và không sở hữu gì? Cần xin phép ai?
3. So sánh giấy phép bản ghi 7 năm và sở hữu bản ghi vĩnh viễn từ hai phía nghệ sĩ và hãng.
`,
  },
  {
    slug: 'hang-dia-bon-dong-tien-ban-quyen',
    title: 'Cỗ máy hãng đĩa (4) — Bốn dòng tiền bản quyền và cách thu',
    category: 'musicology',
    aliases: ['bốn dòng tiền bản quyền', 'royalties', 'neighbouring rights', 'quyền liên quan', 'SoundExchange', 'PPL', 'mechanical royalties', 'tiền cơ học', 'statutory rate', 'MLC', 'Music Modernization Act', 'tiền biểu diễn', 'PRS', 'ASCAP', 'đăng ký PRO', 'publishing admin'],
    summary: 'Phần II sách The Label Machine (Nick Sadler, 2025): bốn dòng tiền — bản ghi từ bán, bản ghi từ trình diễn công cộng (quyền liên quan, SoundExchange chia 50/45/5), tác phẩm từ bán (tiền cơ học, mức luật định Mỹ — sách ghi 12,4 xu, năm 2025 là 12,7 xu), tác phẩm từ trình diễn (PRO, chia 50/50 người viết – nhà xuất bản); sơ đồ dòng tiền và việc ai phải đăng ký gì.',
    refs: [...SADLER_REFS, CRB_2025],
    body: `
Bài thứ tư bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo các chương *Royalties* tới *Collecting Royalties* (tr. 81 – 138). Khung của Sadler: **hai loại bản quyền** (tác phẩm, bản ghi — [[hang-dia-hai-loai-ban-quyen]]) nhân **hai cách sinh tiền** (bán, trình diễn công cộng) thành **bốn dòng tiền** (tr. 82).

| Dòng tiền | Ai lo (theo sách) | Ai thu |
|---|---|---|
| 1. **Bản ghi – bán** (tải, đĩa, stream) | Hãng đĩa | Nhà phân phối → hãng → nghệ sĩ |
| 2. **Bản ghi – trình diễn công cộng** (quyền liên quan) | Hãng **và** nghệ sĩ | PPL (Anh), SoundExchange (Mỹ), Re:Sound (Canada) |
| 3. **Tác phẩm – bán** (tiền cơ học) | Hãng **và** nghệ sĩ / nhà xuất bản | MCPS (Anh), The MLC và HFA (Mỹ) |
| 4. **Tác phẩm – trình diễn công cộng** | Nghệ sĩ / nhà xuất bản | PRS (Anh), ASCAP – BMI – SESAC (Mỹ), SOCAN (Canada) |

Quy tắc gọn: dòng 1 là "cơm áo" của hãng; ba dòng còn lại chủ yếu đi qua các tổ chức quản lý quyền (tr. 83). Sadler nói một lượt stream trên Spotify trả khoảng **$0,003 – $0,005** cho chủ bản ghi (tr. 81) — xem bàn kỹ ở [[kinh-te-hoc-streaming]].

## 1. Bản ghi – bán
Muốn bán bản ghi, hãng phải có quyền từ nghệ sĩ qua **hợp đồng thu âm** — từ đó mới có chữ "ký hợp đồng" (tr. 84). Hãng trả trực tiếp cho nghệ sĩ, thường **sáu tháng một lần** (có hãng ba tháng hoặc hằng tháng): gửi bảng kê, nghệ sĩ xuất hoá đơn, hãng chuyển khoản (tr. 84).

## 2. Bản ghi – trình diễn công cộng: quyền liên quan
- Khi bản ghi được phát công cộng (đài, TV, quán, stream không tương tác), nơi phát phải trả tiền cho chủ bản ghi và nghệ sĩ biểu diễn — gọi là **quyền liên quan** (*neighbouring rights*); sách nói hơn 80 nước có luật này (tr. 86).
- **Mỹ là ngoại lệ**: không trả cho phát thanh mặt đất; chỉ từ luật DPRA 1995 mới có quyền đối với **truyền dẫn số** (Pandora, Sirius…) (tr. 87).
- **SoundExchange** chia **50%** cho chủ bản ghi, **45%** cho nghệ sĩ chính, **5%** cho quỹ AFM / SAG-AFTRA dành cho nhạc công không đứng tên (tr. 87, 124).
- PPL (Anh) nhận đăng ký của hãng ở **bất cứ nước nào**, miễn nước đó có luật quyền liên quan, và hợp tác thu hộ với SoundExchange (tr. 86 – 87).
- Lời khuyên: ghi lại **bài nào, ở đâu, khi nào** mỗi lần biểu diễn để kê khai (tr. 85).

## 3. Tác phẩm – bán: tiền cơ học
- Muốn sao chép, phát hành một bài **không do mình viết**, hãng cần **giấy phép cơ học** và trả tiền cơ học cho chủ tác phẩm (tr. 89).
- Hãng trả cơ học cho **đĩa và bản tải về**; với **stream**, nền tảng trả thẳng cho chủ tác phẩm (tr. 89). Nhiều nhà phân phối có tuỳ chọn chuyển tiền cơ học qua tổ chức thu hộ, đỡ việc cho hãng nhỏ (tr. 90).
- **Mức luật định ở Mỹ**: sách ghi **12,4 xu/bài** (bài tới năm phút) hoặc 2,38 xu/phút cho bài dài hơn (tr. 89). Đó là mức **năm 2024**; theo công bố của Ban Thẩm phán Tiền bản quyền (Federal Register, 27/11/2024), mức năm **2025 là 12,7 xu** hoặc **2,45 xu/phút**. Mức này chỉnh theo lạm phát hằng năm từ nền 12 xu (2023), và chỉ áp cho đĩa và tải về, không áp cho stream.
- Ở châu Âu, tiền cơ học tính theo phần trăm giá bán buôn (PPD); sách ghi mức thực tế **8,712% PPD** (tr. 89 – 90).
- Phía nghệ sĩ: nếu tự phát hành và chưa có nhà xuất bản, hãy chắc tiền cơ học **về tay mình**. PRO như ASCAP, BMI **không thu** tiền cơ học; ở Mỹ cần nhà xuất bản, công ty quản trị xuất bản hoặc đăng ký với **The MLC** (thành lập theo Đạo luật Hiện đại hoá Âm nhạc 2018) (tr. 91, 126 – 127, 376).

## 4. Tác phẩm – trình diễn công cộng
- PRO cấp **giấy phép trọn gói** cho quán xá, địa điểm, đài, rồi chia tiền dựa trên khảo sát âm thanh (tr. 93). Nghệ sĩ và hãng nhỏ, nhất là nhạc điện tử ở câu lạc bộ, thường phàn nàn bị chia thiệt; Pioneer thử hệ thống KUVO nhận diện bài đang phát nhưng kết quả còn hạn chế (tr. 93).
- Cách tốt nhất cho người biểu diễn: **kê khai danh sách bài sau mỗi show**; PRS làm việc này dễ (tr. 93).
- Phát thanh có thể rất đáng tiền: sách nói một bài nằm danh sách A của BBC trong một tháng trả khoảng **£15.000 – £20.000** (tr. 94; số liệu theo sách).
- PRO trả riêng **50% phần người viết, 50% phần nhà xuất bản**. Chưa có nhà xuất bản: ở Anh báo PRS trả 100% cho người viết; ở Mỹ tự đăng ký **làm nhà xuất bản** (ASCAP nhận cá nhân, chỉ cần địa chỉ, email, mã số thuế) (tr. 94, 374 – 375). Tiền nước ngoài có thể mất tới hai năm mới về (tr. 94).

## Ai đăng ký gì
- **Hãng**: tiền bán và stream về qua nhà phân phối; quyền liên quan đăng ký với SoundExchange / PPL; tiền YouTube qua nhà phân phối hoặc bên chuyên (tr. 130 – 133).
- **Nghệ sĩ**: đăng ký làm người viết (và nhà xuất bản, nếu tự xuất bản) với PRO; đăng ký quyền liên quan với tư cách nghệ sĩ biểu diễn; thu tiền cơ học qua công ty quản trị xuất bản (Songtrust, Kobalt, Sentric, TuneCore Publishing — sách nêu phí quản trị 10 – 15%) hoặc tổ chức thu hộ (tr. 133 – 138).
- Chỉ đăng ký được **sau khi** nhạc đã phát hành chính thức (tr. 130).
- **Ở Việt Nam**: tiền tác phẩm qua VCPMC; quyền của nhà sản xuất bản ghi qua RIAV — xem [[to-chuc-quan-ly-tap-the-quyen-tac-gia]], [[cong-nghiep-am-nhac]].

## Câu hỏi và bài tập
1. Một bài bạn viết và tự thu được phát trên một đài FM ở Anh. Liệt kê các dòng tiền phát sinh và tổ chức thu từng dòng.
2. Vì sao một DJ chơi nhiều bài của chính mình nên kê khai danh sách bài sau mỗi show?
3. Tính tiền cơ học cho 1.000 bản tải về một bản cover dài 4 phút ở Mỹ năm 2025, và so với con số trong sách.
`,
  },
  {
    slug: 'hang-dia-sync-cover-sample',
    title: 'Cỗ máy hãng đĩa (5) — Sync, cấp phép, YouTube, cover và sample',
    category: 'musicology',
    aliases: ['sync', 'đồng bộ hoá âm nhạc', 'sync licensing', 'MFN', 'micro-sync', 'sync agent', 'licensing deal', 'cấp phép nhạc', 'Content ID', 'YouTube monetisation', 'cover song', 'giấy phép cover', 'Songfile', 'sample clearance', 'soundalike', 'creative sampling'],
    summary: 'Phần II sách The Label Machine (Nick Sadler, 2025), các chương ứng dụng: sync — nguồn, đại lý, phí thật tác giả từng nhận, MFN, micro-sync; thoả thuận cấp phép giữa các hãng; kiếm tiền YouTube và Content ID (ngưỡng sách nêu chỉ mở tính năng gây quỹ); phát hành bản cover và giấy phép cơ học theo nước; sample "trọn khối" và "sáng tạo", soundalike — kèm cảnh báo về rủi ro pháp lý.',
    refs: [...SADLER_REFS, YPP],
    body: `
Bài thứ năm bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo các chương *Synchronisations* tới *Samples* (tr. 95 – 119).

## Sync: đồng bộ nhạc với hình
*Sync* là ghép nhạc vào hình ảnh động — phim, chương trình TV, trailer, trò chơi, quảng cáo (tr. 95). Sadler giữ một thái độ tỉnh táo: sync có thể rất đáng tiền nhưng **đến thưa thớt**; trừ khi bạn chuyên làm nhạc sync, hãy coi nó là "quả anh đào trên bánh", đừng tính vào thu nhập (tr. 96). Ông cũng cho rằng nhạc AI rẻ sẽ dần làm giảm nhu cầu nhạc sync đặt riêng (tr. 96).

- **Nguồn sync** (tr. 97 – 100): thư viện trực tuyến (phí thấp, thường chia 50%, không độc quyền — hợp cho nhạc cũ trong kho); **đại lý sync** không độc quyền (lấy 10 – 30%, theo kinh nghiệm tác giả 10 – 15%); **nhạc đặt theo yêu cầu** cho quảng cáo, thời hạn 24 – 48 giờ.
- **Mẹo cho hãng**: xin luôn **bản không lời** của mọi bài khi ký (đa số sync dùng instrumental); và đưa vào hợp đồng thu âm quyền **không độc quyền** được duyệt phần xuất bản *chỉ cho mục đích sync* với nghệ sĩ chưa ký xuất bản — người tuyển nhạc thích làm việc với bên duyệt được cả hai phía trong một lần (tr. 97).
- **Phí thật** tác giả kể (trọn gói, chia đôi master – tác phẩm theo điều kiện **MFN — "đối xử như nhau"**): bài của chính tác giả trong trò chơi *FIFA Street*: $4.000; một bài của Zomboy trong trailer phim *Hansel and Gretel*: $38.000; quảng cáo Honda ở Nhật: $5.000; ba giây trong quảng cáo McDonald's: $8.000 (tr. 101 – 102). Hầu hết đến vì người làm phim **tự nghe thấy** bài ở đâu đó.
- Ngoài phí sync một lần, việc phát sóng còn sinh **tiền biểu diễn** cho cả hai phía (tr. 102 – 103). **Micro-sync** là hàng nghìn lượt dùng nhạc trong video người dùng trên YouTube, TikTok (tr. 103).

## Thoả thuận cấp phép
Cấp phép là cho một hãng khác dùng nhạc **có thời hạn**, không chuyển bản quyền (tr. 104). Dạng thường gặp:
- **Tuyển tập** (compilation): "best of" cuối năm, nhạc phim (*Guardians of the Galaxy*, *Pulp Fiction*), chuỗi theo chủ đề như *Now That's What I Call Music* (từ 1983) (tr. 104 – 105).
- **Cấp phép theo vùng**: một hãng Đức xin độc quyền phát hành ở Đức một bài đang lên ở Anh, đổi lại chia tới 50% (tr. 105).
- **Mở hãng mà chưa ký nghệ sĩ nào**: cấp phép không độc quyền những bài đã phát hành — với nghệ sĩ, chia lợi nhuận 50/50; với hãng khác, thường 80/20 nghiêng về hãng mình, đôi khi kèm ứng trước $500 – $2.000 (tr. 106). Xem [[hang-dia-truong-thanh]].

## YouTube
- Về lý thuyết, mọi video dùng nhạc của bạn cần giấy phép sync và master; có quảng cáo thì chủ quyền được chia doanh thu — sách nói **55% doanh thu quảng cáo** được tính cho chủ quyền âm nhạc (tr. 107 – 108).
- Thực tế người đăng ít khi xin phép, nên YouTube lập **Content ID**: chủ quyền nộp nhạc vào cơ sở dữ liệu, video tải lên bị quét và "nhận quyền" khi khớp (tr. 108). Nhà phân phối hoặc bên chuyên (Audiam, AdRev) thu hộ, lấy 10 – 50% (tr. 108).
- Sách nêu ngưỡng bật kiếm tiền: **500 người đăng ký**, 3 video công khai trong 90 ngày, và 3.000 giờ xem trong năm hoặc 3 triệu lượt xem Shorts trong 90 ngày (tr. 109). **Lưu ý**: theo trang trợ giúp của YouTube, ngưỡng này chỉ mở chương trình đối tác *mở rộng* (gây quỹ từ người hâm mộ, mua sắm); **chia doanh thu quảng cáo** cần **1.000 người đăng ký** và 4.000 giờ xem trong 12 tháng hoặc 10 triệu lượt xem Shorts trong 90 ngày. Điều kiện còn tuỳ quốc gia.

## Phát hành bản cover
Ví dụ của Sadler (tr. 110 – 111): bạn viết và thu "Bright Lights", sở hữu 100% cả hai phía; JDubz cover và phát hành qua một hãng — JDubz (và hãng) sở hữu master bản cover, còn **tác phẩm vẫn của bạn**. Khi phát hành cover, bạn phải (tr. 111 – 112):
1. có **giấy phép cơ học** ở những nước bắt buộc;
2. ghi đúng **người viết** gốc trong trường tác giả – nhà xuất bản khi tải lên nhà phân phối;
3. **không** đặt tên nghệ sĩ gốc trong tên bài hay tên bản phát hành.

Theo sách, giấy phép cơ học là bắt buộc ở Mỹ (trừ stream), Mexico, Canada, Nhật, Ấn Độ và Pakistan; nơi khác cửa hàng trả thẳng cho tổ chức thu hộ (tr. 112). Ở Mỹ, stream đã có giấy phép trọn gói qua The MLC; bản **tải về và đĩa** thì phải tự xin qua Songfile (HFA) hay Easy Song Licensing (tr. 112 – 113). Sách tính ví dụ 1.000 bản tải theo 12,4 xu = $124 cộng phí dịch vụ khoảng $15 (tr. 115); với mức 2025 (12,7 xu) là $127 — xem [[hang-dia-bon-dong-tien-ban-quyen]]. Ở Việt Nam, xin phép tác giả hoặc qua VCPMC — [[to-chuc-quan-ly-tap-the-quyen-tac-gia]].

## Sample
- Sadler chia hai kiểu: **sample trọn khối** — lấy nguyên một đoạn nổi tiếng làm vòng lặp (*I'll Be Missing You* lấy *Every Breath You Take*); và **sample sáng tạo** — một mẩu rất nhỏ, biến đổi nhiều (The Prodigy lấy hai nốt đầu của Nirvana trong *Voodoo People*) (tr. 117). Tra bài có sample ở WhoSampled (tr. 118).
- **Nguyên tắc cứng**: mọi sample phải được duyệt **cả hai phía** — tác phẩm và bản ghi (tr. 118).
- Sadler mô tả thực tế: sample trọn khối hầu như luôn được duyệt; sample sáng tạo trong nhạc underground hiếm khi được duyệt vì chi phí truy tìm chủ quyền quá lớn so với tiền thu được, và ông đưa ra "quy tắc ngón tay cái" rằng nếu không kỳ vọng bài lên top 40 thì "khá an toàn" (tr. 118). **Người biên soạn lưu ý**: đó là mô tả tập quán, không phải quy định pháp lý — dùng sample chưa duyệt vẫn là vi phạm, và chủ quyền có thể đòi tới 100% doanh thu, như sách kể về *Harlem Shake* của Baauer (tr. 118 – 119). Xem [[vi-pham-ban-quyen-va-chia-se-tep]].
- **Soundalike**: thuê thu lại một đoạn nghe giống bản gốc — bạn sở hữu 100% bản ghi mới (tr. 119). Lưu ý: soundalike chỉ giải quyết phía **bản ghi**; phần **tác phẩm** (giai điệu, lời) vẫn phải xin phép.

## Câu hỏi và bài tập
1. Một đại lý sync đề nghị $10.000 trọn gói, MFN, cho một bài bạn viết và tự phát hành. Bạn nhận bao nhiêu ở mỗi phía? Nếu đại lý lấy 15% thì sao?
2. Liệt kê ba việc bắt buộc khi phát hành một bản cover, và giải thích vì sao không được ghi tên nghệ sĩ gốc trong tên bài.
3. Vì sao soundalike không thay được việc xin phép phần tác phẩm? Cho một ví dụ.
`,
  },
]
