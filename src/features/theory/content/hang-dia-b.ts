import type { Article } from '../wiki'
import { SADLER_REFS } from './hang-dia-refs'

const QI_FRANKL: [string, string] = ['Quote Investigator — "Between stimulus and response there is a space" (2018): chưa tìm thấy trong tác phẩm của Frankl; Stephen Covey phổ biến và tự nhận không phải tác giả', 'https://quoteinvestigator.com/2018/02/18/response/']
const BINAURAL: [string, string] = ['Garcia-Argibay, Santed, Reales — Efficacy of binaural auditory beats in cognition, anxiety, and pain perception: a meta-analysis (Psychological Research 83, 2019, tr. 357 – 372)', 'https://pubmed.ncbi.nlm.nih.gov/30073406/']

export const hangDiaB: Article[] = [
  {
    slug: 'hang-dia-tu-duy-va-muc-tieu',
    title: 'Cỗ máy hãng đĩa (6) — Tư duy, mục tiêu và làm việc tập trung',
    category: 'musicology',
    aliases: ['growth mindset', 'tư duy phát triển', 'Carol Dweck', 'mục tiêu SMART', 'SMART goals', 'mục tiêu và hệ thống', 'Pomodoro', 'kỹ thuật Pomodoro', 'The E-Myth', 'The Slight Edge', 'binaural beats', 'chống trì hoãn'],
    summary: 'Mở đầu Phần III sách The Label Machine (Nick Sadler, 2025): hãng đĩa là một doanh nghiệp (bài học The E-Myth); tư duy phát triển theo Carol Dweck và bốn bước đổi suy nghĩ; mục tiêu SMART và hệ thống thói quen; mười lăm phút mỗi ngày (The Slight Edge), kỹ thuật Pomodoro và nhịp hai tai — kèm ghi chú về một câu trích sai tác giả và về bằng chứng khoa học.',
    refs: [...SADLER_REFS, QI_FRANKL, BINAURAL],
    body: `
Bài thứ sáu bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo các chương *Overview*, *Mindset*, *Goals, Missions, and Systems*, *Focused Work* (tr. 140 – 166).

## Hãng đĩa là một doanh nghiệp
Sadler mượn ý sách *The E-Myth* của Michael Gerber: làm giỏi chuyên môn (bác sĩ, thợ xây, nhạc sĩ) không có nghĩa là biết **điều hành doanh nghiệp** trong nghề ấy — đó là lý do nhiều doanh nghiệp mới chết sớm. Người làm nhạc nghĩ "tôi ở trong ngành nên tôi mở được hãng" là sai: hãng đĩa là một doanh nghiệp và phải học cách vận hành nó (tr. 140). Phần III chia bốn quy trình: **dựng hãng**, **tạo bản phát hành**, **tiếp thị**, và **hệ thống 360°** (tr. 141 – 142).

## Tư duy phát triển
- Sadler dựa vào nghiên cứu của **Carol S. Dweck** (Đại học Stanford). Sách gọi tên cuốn là *How to Develop a Growth Mindset*; cuốn sách phổ thông nổi tiếng của Dweck là *Mindset: The New Psychology of Success* (2006). Ý chính: **tư duy cố định** coi năng lực là bẩm sinh, không đổi; **tư duy phát triển** coi năng lực tiến bộ được qua luyện tập (tr. 146).
- Bốn bước (tr. 147 – 151): nhận ra ý nghĩ "cố định"; nhận ra mình có lựa chọn; đáp lại bằng ý nghĩ "phát triển" (ví dụ: "Mình *chưa* giỏi giao lưu với người hâm mộ trên mạng, nhưng học được"); và hành động theo đó.
- Một vài lời khuyên đáng giữ: khi việc hỏng, hiếm khi do một lỗi đơn lẻ — đừng đổ cho mình hay người khác; khó khăn là dấu hiệu bạn gặp điều chưa biết, tức là lúc học; người học giỏi hay hỏi và dám sai (tr. 150 – 152).
- **Ghi chú về câu trích**: sách dẫn câu "Giữa kích thích và phản ứng có một khoảng trống…" như của Viktor Frankl (tr. 149). Theo Quote Investigator và chính Viện Viktor Frankl, câu này **chưa được tìm thấy trong tác phẩm của Frankl**; Stephen Covey là người phổ biến nó và nói đã đọc ý ấy trong một cuốn sách ông không nhớ tên. Bộ bài không dùng câu này như lời Frankl.

## Mục tiêu SMART và hệ thống
SMART = **cụ thể, đo được, khả thi, phù hợp, có hạn chót** (tr. 156). Sadler viết một ví dụ trọn vẹn rồi rút thành một câu sứ mệnh (tr. 157 – 160), đại ý: *làm 25 phút mỗi ngày, năm ngày một tuần, để trong sáu tháng có hãng đĩa với website và nhạc trên mọi nền tảng, nhằm tăng thu nhập bản quyền.*

Ông nhấn mạnh: **mục tiêu là đích, hệ thống là đường đi**. Mục tiêu cho biết hướng, còn thói quen hằng ngày (25 phút nghiên cứu, viết kế hoạch, kết nối) mới đưa bạn tới (tr. 159).

## Làm việc tập trung
- **Mười lăm phút mỗi ngày**: theo sách *The Slight Edge* của Jeff Olson, tác giả tự học guitar mỗi ngày 15 phút và sau một năm hát trọn được *House of the Rising Sun* (tr. 163).
- **Pomodoro**: phương pháp của Francesco Cirillo (thập niên 1980) — làm một việc duy nhất 25 phút, nghỉ 5 – 10 phút, rồi lặp lại; phải **dừng** khi hết giờ để não nghỉ, trừ khi đang sáng tác trôi chảy (tr. 164 – 165).
- **Nhịp hai tai (binaural beats)**: hai tai nghe hai tần số lệch nhau; sách nói dải beta (14 – 100 Hz) giúp tập trung và phải đeo tai nghe (tr. 165 – 166). **Người biên soạn lưu ý**: bằng chứng khoa học còn khiêm tốn và không đồng nhất. Một phân tích gộp 22 nghiên cứu (Garcia-Argibay và cộng sự, 2019) ghi nhận hiệu ứng trung bình lên trí nhớ, chú ý, lo âu và cảm giác đau, nhưng hiệu ứng tuỳ tần số, thời lượng và thời điểm nghe — hãy coi đây là thử nghiệm cá nhân, không phải phương pháp đã được chứng minh.
- Tác giả gợi ý đọc thêm *The E-Myth*, *The Slight Edge* và *Building a StoryBrand* của Donald Miller (tr. 154 – 155). Về cách luyện tập trong âm nhạc, đọc [[phuong-phap-luyen-tap]].

## Câu hỏi và bài tập
1. Viết một mục tiêu SMART cho dự án âm nhạc của bạn trong sáu tháng, rồi rút thành một câu sứ mệnh.
2. Ghi lại ba ý nghĩ "tư duy cố định" bạn từng có về việc kinh doanh âm nhạc, và viết câu đáp lại cho từng ý.
3. Thử Pomodoro trong một tuần cho việc bạn hay trì hoãn; ghi số phiên mỗi ngày và nhận xét.
`,
  },
  {
    slug: 'hang-dia-dung-nen-mong',
    title: 'Cỗ máy hãng đĩa (7) — Dựng nền móng: tên, kế hoạch kinh doanh, thương hiệu',
    category: 'musicology',
    aliases: ['đặt tên hãng đĩa', 'Discogs', 'cây thư mục hãng đĩa', 'kế hoạch kinh doanh hãng đĩa', 'business plan', 'thương hiệu âm nhạc', 'branding', 'mood board', 'audience profile', 'logo hãng đĩa', 'website hãng đĩa', 'tài khoản mạng xã hội', 'kích thước ảnh mạng xã hội'],
    summary: 'Phần III sách The Label Machine (Nick Sadler, 2025), các chương dựng hãng: chọn và thử tên hãng; cây thư mục "xương sống"; kế hoạch kinh doanh từng mục kèm mốc hoà vốn 18 tháng; ba trụ cột thương hiệu, bốn hình mẫu bản sắc, hồ sơ khán giả và chiến lược "địa phương trước"; bộ tư liệu thiết kế và kích thước; bốn cách làm logo; năm kiểu website; giữ tên trên mọi mạng xã hội.',
    refs: SADLER_REFS,
    body: `
Bài thứ bảy bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo các chương *Choosing a Record Label Name* tới *Social Media Handles* (tr. 167 – 224).

## Tên hãng
- Tên phải **dễ nói to với người lạ** và chưa ai dùng: tra **Discogs** (danh mục hãng đĩa thế giới), tra tên miền và tài khoản mạng xã hội cùng lúc bằng công cụ như namechk (tr. 167 – 168). Tên trùng một hãng đã ngừng hoạt động, khác thể loại thì có thể chỉnh nhẹ — No Tomorrow *Recordings* thay vì *Records* (tr. 167).
- Cách tìm ý: dùng tên nghệ sĩ, một động từ, một hình ảnh, một chữ lấy ra khỏi ngữ cảnh, chữ tự tạo, tra từ điển đồng nghĩa và tiếng nước ngoài (tr. 168). Thử: nghe rõ qua điện thoại, không bị đọc hay viết sai, hợp phong cách, và **xem chữ viết tắt** (tr. 169).
- Không có nơi "đăng ký tên hãng đĩa". Bạn thành hãng chính thức khi có ba thứ: **bộ mặt công khai** (website), **công ty** mang tên hãng, và **nhạc đã phát hành** trên các nền tảng lớn (tr. 169 – 170). Đăng ký nhãn hiệu để sau, tập trung vào mười bản phát hành đầu (tr. 170).

## "Xương sống": cây thư mục
Lưu trên đám mây (sách thích Dropbox vì chia sẻ một chạm), **bật xác thực hai lớp** (tr. 171). Các thư mục đề xuất (tr. 172 – 173): Kế toán · Kế hoạch hành động · Nội dung truyền thông · Demo · Thiết kế · Danh bạ dữ liệu (blog, playlist, DJ) · Phân phối (siêu dữ liệu, mã ISRC) · Pháp lý · Cấp phép · Tiếp thị và PR (mỗi bản phát hành một thư mục, ví dụ RECORD001) · Hàng lưu niệm · Mật khẩu · Bản phát hành.

## Kế hoạch kinh doanh
Một số nhà phân phối có dịch vụ và một số ngân hàng **yêu cầu** kế hoạch kinh doanh; nhưng quan trọng hơn, viết kế hoạch buộc bạn ra quyết định thực tế (tr. 174 – 175). Trước khi mở hãng, nên có **ba bản phát hành** dự kiến, bản đầu đã mix và master xong (tr. 175).

| Mục | Nội dung |
|---|---|
| Trang bìa | Tên hãng, địa chỉ, liên hệ |
| Tóm tắt | Viết **sau cùng**: một đoạn mục tiêu chính |
| Tổng quan | Người sáng lập và kinh nghiệm; hiện trạng; kế hoạch tăng trưởng |
| Thế mạnh, cơ hội, giá trị cốt lõi | Điểm khác biệt, quan hệ then chốt, "mình đứng về phía nào" |
| Chiến lược 1 – 2 năm và 3 – 5 năm | Số bản phát hành, ký nghệ sĩ, thời điểm hoà vốn |
| Phân phối và sản phẩm | Kênh phân phối; sự kiện, hàng lưu niệm (nếu có) |
| Quản lý và vận hành | Ai làm gì |
| Tiếp thị | Mục tiêu, thị trường mục tiêu (thể loại, nơi chốn, độ tuổi), kênh quảng bá |
| Tài chính | Chi phí khởi đầu, chi phí phát hành, dòng tiền, lãi lỗ dự kiến |

Mốc tối thiểu theo Sadler: năm đầu **ba single/EP** nếu chỉ phát hành nhạc mình, **sáu – tám** nếu ký nghệ sĩ ngoài; **hoà vốn sau 18 tháng** kể từ bản đầu (tr. 181). Kế hoạch không cố định — xem lại mỗi năm (tr. 189). Ngân sách chi tiết ở [[hang-dia-ngan-sach-email-cong-ty]].

## Thương hiệu
- Khi mới bắt đầu, **đừng cố nổi bật**: tìm một ngách, một thể loại có sẵn để người nghe có sẵn kết nối được; có chỗ đứng rồi mới đưa phong cách riêng vào (tr. 190). Sadler kể sổ tay của Kurt Cobain cho thấy người tưởng như bất cần lại lên kế hoạch hình ảnh rất kỹ (tr. 191 – 192); nhiều hãng mang dấu một nghệ sĩ đứng đầu — Dim Mak của Steve Aoki, mau5trap của deadmau5 (tr. 192).
- Người ta **kết nối với người, không với nhãn hiệu**: thương hiệu cần một gương mặt (tr. 193).
- **Ba trụ cột** (tr. 193 – 197):
  1. *Hiểu mình là ai* — làm bảng cảm hứng (mood board) từ 8 – 10 nghệ sĩ, hãng tương tự.
  2. *Hiểu mình được nhìn thế nào* — nhất quán; ba thành phần: **bản sắc** (bốn hình mẫu: Người dẫn dắt, Nhà phiêu lưu, Người giảng giải / tường thuật, Người hùng bất đắc dĩ), **câu chuyện**, **giọng điệu**.
  3. *Hiểu khán giả* — hồ sơ khán giả: tuổi, năm nước, thành phố; playlist, tài khoản họ theo; họ nghĩ gì về mình. Công cụ: mục "Mọi người cũng tìm kiếm" của Google, Music-Map, Last.fm, Songkick, Chartmetric, Reddit…
- **Địa phương trước**: stream đưa nhạc đi toàn cầu, nhưng biểu diễn và gửi hàng lưu niệm khó khi người nghe rải khắp nơi; hãy song song xây một **cộng đồng ở thành phố của mình** (tr. 198 – 199). Xem [[marketing-am-nhac-va-mang-xa-hoi]].

## Thiết kế, logo, website, mạng xã hội
- **Bộ tư liệu** cần làm (tr. 200 – 206): logo; ảnh bìa, ảnh đại diện cho từng nền tảng; mẫu bìa bản phát hành (**3000 × 3000 px**); banner "ngày phát hành" và "đã phát hành"; ảnh vuông 1080 × 1080, story dọc 1080 × 1920; video teaser, video lời, hậu trường, Spotify Canvas. Hãy định một **gói tiếp thị tối thiểu** cho mọi bản phát hành để nhất quán.
- Nguồn ảnh miễn phí bản quyền (Pixabay, Pexels, Mixkit), trả phí (Shutterstock, Envato Elements); công cụ Canva, Photoshop, Affinity, CapCut; công cụ AI tạo hình (tr. 207 – 211). Kiểm tra giấy phép từng nguồn trước khi dùng cho mục đích thương mại.
- **Logo** (tr. 213 – 217): làm bản đen trên trắng trước; nhận đủ định dạng .eps, .png, .pdf. Bốn cách: thuê nhà thiết kế (sách nêu từ khoảng £350 – £700, tức $500 – $1.000), sàn freelancer hoặc cuộc thi thiết kế, công cụ tạo logo trực tuyến, công cụ AI.
- **Website** (tr. 218 – 221): năm cách — dựng sẵn (Squarespace, Wix), WordPress, thuê agency (yêu cầu dựng trên WordPress để không bị khoá), web bán hàng (Shopify; Bandcamp lấy 15%), trình tạo web bằng AI. Trang tối thiểu: logo, nhạc nhúng, giới thiệu, mạng xã hội, nghệ sĩ, liên hệ; email theo tên miền riêng.
- **Mạng xã hội** (tr. 222 – 224): giữ **một tên giống nhau** trên mọi nền tảng (Facebook, Instagram, YouTube, TikTok, X, Bluesky, SoundCloud, LinkedIn); nếu trùng thì thêm RECS, HQ, tiền tố WEARE… Đăng ký bằng email chung của hãng; kênh không dùng thì ghim một bài chỉ người xem sang kênh chính.

## Câu hỏi và bài tập
1. Đặt năm tên cho một hãng đĩa tưởng tượng, thử từng tên theo năm tiêu chí của Sadler, chọn một.
2. Viết bảng tóm tắt kế hoạch kinh doanh một trang cho hãng ấy theo các mục ở bảng trên.
3. Làm hồ sơ khán giả cho một nghệ sĩ Việt Nam bạn thích: tuổi, thành phố, playlist họ nghe, kênh họ theo.
`,
  },
  {
    slug: 'hang-dia-phan-phoi',
    title: 'Cỗ máy hãng đĩa (8) — Chọn nhà phân phối',
    category: 'musicology',
    aliases: ['phân phối nhạc số', 'nhà phân phối nhạc', 'DistroKid', 'CD Baby', 'TuneCore', 'AWAL', 'Believe', 'Ingrooves', 'FUGA', 'Label Engine', 'Symphonic', 'Beatport', 'đổi nhà phân phối', 'P&D deal'],
    summary: 'Phần III sách The Label Machine (Nick Sadler, 2025), chương phân phối: bốn câu hỏi chọn nhà phân phối; chiến lược bắt đầu bằng tự phân phối rồi chuyển sang nhà phân phối có dịch vụ sau ba – bốn bản phát hành; kinh nghiệm thật ở bốn hãng của tác giả; và bảng các nhà phân phối theo ba nhóm với mức phí "tại thời điểm viết".',
    refs: SADLER_REFS,
    body: `
Bài thứ tám bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo các chương *Distribution* và *Distributor Companies* (tr. 224 – 246). Khái niệm nền (tổng hợp, có dịch vụ, tự phân phối) ở [[hang-dia-nganh-nhac]].

## Ba bước, bốn câu hỏi
Ba bước: xác định nhu cầu → mở tài khoản → tải bản phát hành đầu (tr. 224 – 225). Không có nhà phân phối "tốt nhất", chỉ có hợp với mục tiêu. Hãy tự hỏi (tr. 225):
1. Bạn phát hành thể loại nào?
2. Chỉ nhạc của mình, hay ký nhiều nghệ sĩ?
3. Có phát hành bản cover không? (cần lo giấy phép cơ học — [[hang-dia-sync-cover-sample]])
4. Nghệ sĩ là người mới, hay đã có sự nghiệp?

Tự phân phối thì chỉ cần thẻ thanh toán; nhà phân phối có dịch vụ thì phải nộp hồ sơ — kế hoạch kinh doanh và **ít nhất ba bản phát hành** đã lên lịch — và chờ vài tuần (tr. 226).

## Chiến lược đổi nhà phân phối
Nhà phân phối có dịch vụ muốn người đã có thành tích. Cách nhiều thành viên của tác giả làm: **bắt đầu bằng tự phân phối**, sau ba – bốn bản phát hành thì mang thành tích và kế hoạch kinh doanh đi xin vào nhà phân phối có dịch vụ (tr. 226 – 227).

## Kinh nghiệm thật ở bốn hãng
- **Never Say Die**: tài khoản Beatport qua quen biết, phần còn lại qua TuneCore với phí khoảng **£50/năm mỗi bản phát hành**, giữ 100% tiền. Lúc đỉnh, vài bài thu khoảng £80.000/năm; nếu đưa nhà phân phối lấy 15% sẽ mất £12.000, nên £1.000 phí năm là rẻ — tác giả tính ra "chỉ khoảng 2%" (tr. 227 – 228). Sau bốn năm chuyển sang Label Engine vì **kế toán bản quyền** trên bảng tính quá rối khi có nhiều remix (tr. 228).
- **No Tomorrow / Disciple**: dùng Ingrooves và Believe (15%) để thử xem có đáng không. Kết luận: có người phụ trách, hỗ trợ tiếp thị, YouTube, chào bài lên banner cửa hàng — nhưng chỉ đáng tiền nếu bạn **liên lạc thường xuyên** và dùng các dịch vụ ấy (tr. 228 – 229).
- **Get Hype**: Triple V (Hà Lan) — tỷ lệ tốt và thoả thuận **P&D** (ép và phân phối đĩa than, ứng trước chi phí sản xuất), hợp với hãng drum & bass (tr. 229).
- **Deathstar Cult**: DistroKid lúc đầu, sau bốn dự án chuyển sang Horus Music vì mạng lưới ở Ấn Độ và Trung Quốc (tr. 229 – 230).

## Bảng nhà phân phối (theo sách)
Mức phí dưới đây là **"tại thời điểm viết"** theo sách; hãy kiểm tra lại, vì điều kiện thay đổi thường xuyên.

| Nhóm | Tên | Ghi chú theo sách |
|---|---|---|
| Tự phân phối | **DistroKid** | Phí năm, 0% hoa hồng, chia tiền tự động (mỗi người nhận cần tài khoản); Beatport qua xét duyệt |
| | **CD Baby** | 9% hoa hồng + phí một lần; có đĩa vật lý; hợp tác Songtrust thu tiền tác phẩm |
| | **TuneCore** | Phí năm, 0% hoa hồng; có TuneCore Publishing; thuộc Believe |
| | **Amuse** | Ứng dụng di động, có thể mời ký 50/50 nghệ sĩ đang lên; sách lưu ý rủi ro của mô hình dựa vào vốn đầu tư |
| | **Ditto, Fresh Tunes, LANDR, RouteNote, Songtradr, Soundrop** | Mỗi bên một điểm mạnh: phát thanh, ngôn ngữ, master tự động, thị trường châu Á, sync, cover |
| | **Horus Music** | 20% hoặc 0% kèm phí; mạnh ở Trung Quốc, Ấn Độ |
| | **OneRPM** | 15%; mạnh nhất ở Mỹ Latinh |
| Có dịch vụ | **AWAL** (Kobalt) | 15%; xét duyệt chặt; phân tích dữ liệu tốt |
| | **Believe** | 15 – 30%; đội tiếp thị, YouTube, sync |
| | **Ingrooves** | 10 – 30%; banner trên cửa hàng chuyên, quản lý quyền xuất bản |
| | **Stem** | 5%; chia tiền giữa người hợp tác rất tốt |
| | **UnitedMasters** | 10% + phí năm; thiên về hip hop, mạnh về sync |
| Chuyên nhạc điện tử | **FUGA** | 15 – 40%; nối hơn 260 nền tảng |
| | **Label Engine, Label Worx** | 15% / 10 – 30%; công cụ DJ promo và kế toán bản quyền |
| | **Symphonic** | 15%; plugger, đĩa vật lý, có thể ứng trước |
| | **Triple V** | 5 – 15%; mạng lưới đĩa than châu Âu |

Sách cũng giới thiệu dịch vụ phân phối của chính tác giả (10% hoa hồng) — đọc như thông tin từ một bên có lợi ích (tr. 241).

**Ở Việt Nam**, nghệ sĩ độc lập cũng dùng các nhà phân phối quốc tế kể trên để lên Spotify, Apple Music, YouTube Music; tiền tác phẩm vẫn cần đăng ký riêng với VCPMC — xem [[nghe-si-doc-lap-va-tu-phat-hanh]], [[cong-nghiep-am-nhac-viet-nam]].

## Câu hỏi và bài tập
1. Trả lời bốn câu hỏi chọn nhà phân phối cho dự án của bạn, rồi chọn hai nhà phân phối phù hợp và giải thích.
2. Một bài thu 2.000 USD/năm. So sánh chi phí giữa nhà phân phối phí năm 20 USD và nhà phân phối lấy 15%.
3. Vì sao nhà phân phối có dịch vụ chỉ đáng tiền khi bạn dùng các dịch vụ của họ? Dựa vào kinh nghiệm No Tomorrow / Disciple.
`,
  },
  {
    slug: 'hang-dia-ngan-sach-email-cong-ty',
    title: 'Cỗ máy hãng đĩa (9) — Ngân sách, email người hâm mộ, đăng ký công ty',
    category: 'musicology',
    aliases: ['ngân sách hãng đĩa', 'chi phí phát hành', 'recoupable', 'chi phí thu hồi', 'net profit deal', 'chia lợi nhuận ròng 50/50', 'dòng tiền hãng đĩa', 'email marketing âm nhạc', 'chuỗi email chào mừng', 'mailing list', 'đăng ký công ty hãng đĩa', 'LLC', 'LTD'],
    summary: 'Phần III sách The Label Machine (Nick Sadler, 2025): chi phí hãng (không thu hồi) và chi phí phát hành (thu hồi từ tiền bản quyền); công thức doanh thu gộp – chi phí phát hành = doanh thu ròng, chia 50/50; các khoản chi mẫu (bìa, PR, quảng cáo, playlist, remix, phát thanh, video, đĩa than); bốn bước xây danh sách email và chuỗi đếm ngược phát hành; vì sao và cách đăng ký công ty.',
    refs: SADLER_REFS,
    body: `
Bài thứ chín bộ [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]], đọc theo các chương *Budgets*, *Emails and Email Marketing*, *Registering as a Company* (tr. 246 – 286).

## Hai loại chi phí
Never Say Die bắt đầu với khoảng **£5.000 ($7.000)**, phần lớn vì bảy bản đầu ép đĩa than; phát hành số rẻ hơn nhiều (tr. 246 – 247). Khoản đầu tư lớn nhất là bản phát hành đầu và hạ tầng; tiền về thì tái đầu tư.

| | **Chi phí hãng** (không thu hồi) | **Chi phí phát hành** (thu hồi) |
|---|---|---|
| Là gì | Không gắn với một bản phát hành | Gắn trực tiếp với một bản phát hành |
| Ví dụ | Lập công ty, website, email, phần mềm, văn phòng, lương | Bìa, PR, quảng cáo, phí remix, đĩa than, master |
| Ai chịu | Trả từ **phần của hãng** | Trừ khỏi doanh thu **trước khi chia** với nghệ sĩ |

**Công thức kế toán cơ bản** (tr. 248 – 249):
- *Doanh thu bản quyền gộp − Chi phí phát hành = Doanh thu bản quyền ròng*
- Ròng chia theo hợp đồng, phổ biến ở hãng độc lập là **50/50**: ròng $100 → nghệ sĩ $50, hãng $50.
- *Phần của hãng + Doanh thu khác (hàng lưu niệm…) − Chi phí hãng = Lợi nhuận ròng của hãng*

## Các khoản chi mẫu (theo sách, tính bằng USD)
- **Chi phí hãng năm đầu**: logo khoảng $150; website dựng sẵn khoảng $310/năm; nền tảng email; tài khoản phân phối; bộ công cụ văn phòng; phí lập công ty (sách lấy ví dụ Delaware) (tr. 250 – 252).
- **Chi phí một bản phát hành**: bìa khoảng $120 qua sàn thiết kế (đặt gói năm bìa để có bản sắc liền mạch); phí phát hành số; PR khoảng $300; tư liệu (video lời) khoảng $200; quảng cáo khoảng $300 (tr. 253 – 255).
- **Tuỳ chọn**: dịch vụ chào bài lên playlist (sách xem là khoản tuỳ chọn quan trọng nhất); **phí remix** $400 – $5.000; **chào bài phát thanh** từ khoảng $1.500 kèm thưởng khi vào danh sách B, A; **video ca nhạc** chuyên nghiệp từ khoảng $4.000; **đĩa than** khoảng $2.500 cho 500 bản cộng master riêng khoảng $150 (tr. 255 – 261). Sách ước một lượt stream Spotify trả $0,004 – $0,005 (tr. 256).
- Sách không tính chi phí thu âm, mix, master vì nhiều nghệ sĩ tự làm; nếu hợp đồng có các khoản này thì thêm vào chi phí phát hành (tr. 261).
- **Dòng tiền**: dự báo thận trọng, xem lại sau một tháng, một quý, sáu tháng. Ví dụ của sách giả định bốn bản phát hành năm đầu; hãng đã đứng vững thường ra 15 – 20 bản mỗi năm, khi ấy mới có thu nhập khá (tr. 262 – 263).

## Email: tài sản quan trọng nhất
Danh sách email cho bạn **liên lạc trực tiếp** với người hâm mộ mà không phải trả tiền cho mạng xã hội để được nhìn thấy (tr. 264). Bốn bước (tr. 265 – 274):
1. **Chọn nền tảng** (Mailchimp, Brevo…).
2. **Chuỗi email tự động** cho người mới: *Chào mừng* (kèm quà — bài độc quyền) → *Chia sẻ với bạn bè* → *Kết nối mạng xã hội* (kèm playlist của hãng) → *Bản phát hành mới nhất* (có thể kèm mã giảm giá Bandcamp).
3. **Đổi giá trị lấy email**: nghe sớm, tuyển tập riêng cho người đăng ký, hậu trường, bản độc quyền (bản mộc cho rock, instrumental – acapella cho hip hop, stem cho nhạc điện tử), cuộc thi.
4. **Bản tin định kỳ**, ví dụ thứ Hai đầu tháng: kể chuyện chứ không chỉ đưa tin; cho người đăng ký biết trước ít nhất 24 giờ.

**Chuỗi đếm ngược phát hành** (tr. 277 – 278): báo trước 7 – 10 ngày (kèm pre-save) → nhắc "còn 48 giờ" → email ngày phát hành → hai tuần sau, "bạn đã nghe chưa?" kèm cột mốc và phản hồi.

Mẹo viết (tr. 279 – 281): cá nhân hoá tên; viết cho **một người**, không viết cho "toàn thể"; nói bằng giọng mình; nhiều liên kết nhưng **một đích**; chữ ký đầy đủ. **Đừng** mua danh sách hay cào email trên mạng — đó là thư rác và làm hỏng uy tín gửi thư. (Sách còn kể việc dựng "nhân viên ảo" cho các vai kế toán, mạng xã hội khi hãng mới có hai người (tr. 281); người biên soạn lưu ý cách này có thể gây hiểu lầm về danh tính với đối tác.)

## Đăng ký công ty
Lý do (tr. 283 – 284):
- **Bảo vệ tài sản cá nhân**: công ty trách nhiệm hữu hạn (LTD ở Anh, LLC ở Mỹ) giới hạn trách nhiệm trong tài sản công ty. Ví dụ của sách: một nghệ sĩ bị kiện vì tai nạn khi mở cửa xe — có công ty thì nhà, xe cá nhân không bị mang ra trả nợ. (Mức bảo vệ thực tế còn tuỳ luật từng nước và tuỳ vụ việc liên quan tới công ty hay cá nhân.)
- **Uy tín**: tên công ty trong chữ ký, email theo tên miền.
- **Động lực**: chi phí duy trì hằng năm trở thành mục tiêu lợi nhuận tối thiểu năm đầu.

Thủ tục theo sách: ở Mỹ khoảng $200 tuỳ bang, xin mã số thuế EIN trên trang IRS, mở tài khoản doanh nghiệp; ở Anh £5 – £50, mã ngành SIC **59200** (thu âm và xuất bản âm nhạc) (tr. 284 – 286). Nghệ sĩ chỉ ra một dự án qua "hãng cá nhân" có thể hoạt động như cá nhân kinh doanh (tr. 286). **Ở Việt Nam**, thủ tục và loại hình doanh nghiệp theo Luật Doanh nghiệp; nên hỏi kế toán hoặc luật sư.

## Câu hỏi và bài tập
1. Một EP thu gộp $3.000, chi phí phát hành $1.200, hợp đồng 50/50. Tính phần nghệ sĩ và phần hãng; nếu chi phí hãng trong kỳ là $600, lợi nhuận ròng của hãng là bao nhiêu?
2. Viết email chào mừng cho danh sách người hâm mộ của một hãng tưởng tượng, theo các nguyên tắc của Sadler.
3. Phân biệt chi phí thu hồi và không thu hồi cho mười khoản chi bạn tự liệt kê.
`,
  },
]
