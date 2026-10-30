import type { Article } from '../wiki'
import { BORG_REFS } from './borg-refs'

/** Bộ "Marketing âm nhạc cho nghệ sĩ tự lập" (Bobby Borg, bản 2020), Phần V: đo lường, lập kế hoạch, thực thi, học tiếp, tương lai (chương 18 – 22). */
export const borgE: Article[] = [
  {
    slug: 'marketing-diy-do-luong',
    title: 'Marketing cho nghệ sĩ tự lập (18) — Đo lường và điều chỉnh',
    category: 'musicology',
    aliases: ['đo lường marketing âm nhạc', 'chỉ số marketing', 'ROI nghệ sĩ', 'tỷ lệ chuyển đổi', 'CTR', 'CPM', 'tỷ lệ giữ chân học trò', 'churn', 'giá trị trọn đời khách hàng'],
    summary: 'Chương 18 sách của Bobby Borg: đo cái gì (SWOT, khách hàng, đối thủ, thương hiệu, sản phẩm, giá, kênh, quảng bá), đo bằng gì (sổ bán hàng, đếm hàng, mã vạch, đếm người hâm mộ, công cụ mạng, mã theo dõi, phiếu hiệu quả quảng bá, nghiên cứu sơ cấp – thứ cấp, chuyên gia), rồi quy đổi, xét chất lượng dữ liệu và hành động; kèm bảng chỉ số: lợi nhuận ròng, biên lợi nhuận, ROI, tỷ lệ phản hồi, chi phí mỗi đơn, CPM, CPC, CTR, chỉ số giới thiệu, tỷ lệ giữ chân, tỷ lệ rời bỏ, giá trị trọn đời.',
    refs: BORG_REFS,
    body: `
Bài thứ mười tám bộ [[marketing-diy-lo-trinh|Marketing cho nghệ sĩ tự lập]], theo chương 18 (tr. 227 – 238).

Đo lường là lập hệ thống **thu thập, phân tích và hành động** trên thông tin liên quan tới mục tiêu (tr. 227). Không đo, bạn dễ đổ hàng nghìn đô xuống cống — sách dẫn câu thường gán cho nhà buôn John Wanamaker: "một nửa số tiền tôi chi cho quảng cáo là phí, khổ nỗi tôi không biết là nửa nào" (*người biên soạn ghi chú*: câu này lưu truyền rộng nhưng chưa ai tìm thấy bằng chứng ông nói). Nhiều nghệ sĩ bỏ qua vì cho là tốn thời gian, hay vì các hoạt động chồng lên nhau khó tách nguyên nhân – kết quả. Borg không đòi hệ thống phức tạp: laptop, bảng tính, tủ hồ sơ, sổ tay và vài công cụ miễn phí là đủ để "giữ điểm" (tr. 227).

## Đo cái gì
SWOT (môi trường đổi liên tục), khách hàng mục tiêu (có đúng người không), đối thủ (họ phản ứng thế nào), **mức nhận biết thương hiệu** (người ta có nghĩ tới bạn đầu tiên khi nói về "ban nhạc ở thành phố này" không), mức hài lòng và sẵn lòng giới thiệu, giá, hiệu quả từng kênh bán, và hiệu quả quảng bá — kể cả **chi phí để có một khách** (tr. 227 – 228).

## Đo bằng gì
- **Sổ bán hàng**: bảng tính thu – chi theo đơn vị và tiền, hoá đơn, phiếu gửi hàng, báo cáo của nhà phân phối, tài khoản ngân hàng riêng cho việc kinh doanh (tr. 229).
- **Đếm hàng vào – ra** mỗi đêm diễn, đối chiếu với tiền thu — vừa đo doanh số, vừa kiểm người bán và nơi bán (tr. 229).
- **Mã vạch, mã ISRC và số liệu bán lẻ** (tr. 229 – 230).
- **Đếm người**: danh sách email, người theo dõi, khán giả — đặc biệt **trước và sau** một chiến dịch để thấy nó có tạo đột biến không (không khoa học, nhưng có ích) (tr. 230).
- **Công cụ trên mạng**: số liệu tìm kiếm (chi phí mỗi lần bấm, tỷ lệ bấm, lượt xem trang, cảnh báo khi có ai nhắc tên bạn), thống kê mạng xã hội (ai tương tác, chia sẻ, ở đâu), thống kê email (tỷ lệ mở, huỷ, thư hỏng) (tr. 230 – 231).
- **Mã theo dõi** (marketing information system code): tờ rơi phát ở bãi biển ghi "nói Code Beach ở cửa", tờ phát ở trung tâm ghi "Code Downtown"; quảng cáo tạp chí dẫn tới một trang riêng. Đặt mã cho **mọi thứ** (tr. 231).
- **Phiếu hiệu quả quảng bá**: ghi mỗi khách mới nghe về bạn từ đâu và đã mua chưa, rồi gom thành "bảng điểm" theo nguồn. Ví dụ của chính Borg khi mở lớp dạy ở Boston: quảng cáo báo in mang về nhiều học trò nhất, danh sách thuê và truyền miệng không mang về ai, gặp gỡ có người hỏi mà không ai đăng ký (tr. 231 – 232).
- **Nghiên cứu sơ cấp** (khảo sát, phỏng vấn, **thuê một người đứng cuối club** nghe khán giả nói gì khi bạn diễn) và **thứ cấp** (đọc nhận xét về mình, bảng xếp hạng streaming, báo cáo của hiệp hội ngành) (tr. 233 – 234).
- **Chuyên gia và hội nghề nghiệp**: cố vấn đang rảnh việc, chương trình hỗ trợ doanh nghiệp nhỏ, cuộc thi kế hoạch marketing (tr. 234).

## Quy đổi, xét chất lượng, hành động
Đổi dữ liệu thành biểu đồ dễ hiểu cho cả đội; xét dữ liệu có **đại diện** (khoảng 30 người hâm mộ trở lên), **tin cậy** (điều kiện giống nhau), **giá trị** (câu hỏi không dẫn dắt) không — như chương 6; rồi quyết định: sửa ngay, rút quảng cáo kém, hay đợi thêm (tr. 234 – 235).

## Bảng chỉ số (tr. 235 – 236)
| Chỉ số | Cách tính | Ví dụ trong sách |
|---|---|---|
| Lợi nhuận ròng | doanh thu − mọi chi phí | — |
| Biên lợi nhuận gộp | (giá − chi phí) ÷ giá | xem [[marketing-diy-dinh-gia]] |
| ROI | (giá − chi phí) ÷ chi phí | — |
| Tỷ lệ phản hồi | số người mua ÷ số tin gửi đi | 30 ÷ 1.000 = 3% |
| Chi phí mỗi đơn | tổng chi phí gửi ÷ số người mua | 1.000 bưu thiếp × 0,5 đô = 500 đô; 30 người tới → khoảng 16 đô/người |
| CPM | chi phí cho 1.000 lượt hiển thị | do bên bán quảng cáo cung cấp |
| CPC, CTR | chi phí mỗi lần bấm; số lần bấm ÷ số lần hiển thị | CTR không cho biết ai đã mua |
| Tỷ lệ giữ chân | số khách còn lại ÷ số khách ban đầu | 30/50 học trò gia hạn = 60% |
| Tỷ lệ rời bỏ | số khách mất ÷ số khách ban đầu | 20/50 = 40% |
| Giá trị trọn đời | (doanh thu năm ÷ số giao dịch) × số năm khách còn mua — bản rất giản lược | — |

*Người biên soạn ghi chú*: sách gọi "net promoter score" là tỷ lệ người hâm mộ trả lời "có" cho câu "bạn có giới thiệu chúng tôi không?"; chỉ số NPS chuẩn thì hỏi trên thang 0 – 10 và lấy **% người chấm 9 – 10 trừ % người chấm 0 – 6**. Định nghĩa "tỷ lệ rời bỏ" trong sách ghi chia cho "số khách giữ lại" nhưng ví dụ lại chia cho số ban đầu; bảng trên theo ví dụ. Hai ví dụ học trò trong bảng rất hợp với giáo viên dạy đàn: theo dõi tỷ lệ gia hạn từng tháng là cách đo sức khoẻ lớp học đơn giản nhất.

## Câu hỏi và bài tập
1. Thiết kế một phiếu "bạn biết chúng tôi qua đâu?" và bảng điểm theo nguồn cho một tháng.
2. Đặt mã theo dõi khác nhau cho hai đợt phát tờ rơi ở hai khu khác nhau; bạn sẽ đếm kết quả thế nào?
3. Tính tỷ lệ giữ chân và tỷ lệ rời bỏ học trò (hay người theo dõi bản tin) của bạn trong ba tháng gần nhất.
`,
  },
  {
    slug: 'marketing-diy-lap-ke-hoach',
    title: 'Marketing cho nghệ sĩ tự lập (19) — Đóng thành bản kế hoạch marketing',
    category: 'musicology',
    aliases: ['kế hoạch marketing nghệ sĩ', 'marketing plan âm nhạc', 'tóm tắt điều hành', 'executive summary', 'ngân sách marketing', 'lịch thực hiện marketing'],
    summary: 'Chương 19 sách của Bobby Borg: cấu trúc trọn vẹn của bản kế hoạch marketing (bìa, tóm tắt điều hành mười mục, mục lục, các phần từ tầm nhìn tới đo lường, bảng phân bổ chi phí, lịch thực hiện theo quý, phụ lục), cách trình bày, và bốn bản kế hoạch mẫu ở cuối sách.',
    refs: BORG_REFS,
    body: `
Bài thứ mười chín bộ [[marketing-diy-lo-trinh|Marketing cho nghệ sĩ tự lập]], theo chương 19 (tr. 239 – 252).

Gom mọi mẫu điền ở cuối từng chương thành **một văn bản** — vừa là sổ tay chiến đấu, vừa là công cụ giữ cả đội đi cùng hướng, vừa là **tài liệu bán hàng** để thuyết phục nhà đầu tư, nhà phân phối (tr. 239). Và nhớ: bản kế hoạch không bao giờ "xong" — nó sống và được sửa liên tục.

## Cấu trúc (tr. 240)
1. **Bìa**: tên công ty và dòng "kế hoạch marketing", ảnh hay bìa đĩa, một dòng nói rõ trọng tâm ("Phát hành đĩa, DVD, hàng lưu niệm và buổi diễn", "Mở phòng thu", "Đề nghị vay vốn"), website và dòng bản quyền (tr. 240 – 241).
2. **Tóm tắt điều hành** — một trang, viết **sau cùng** nhưng đặt **đầu tiên**; theo Cơ quan Doanh nghiệp nhỏ Mỹ (SBA) mà sách dẫn, đây là trang quyết định người đọc có đọc tiếp không. Mười mục in đậm (tr. 241 – 243): tiểu sử công ty (nơi, năm, thể loại, ba ban nghe giống, thành viên), một câu chuyện ngắn, tầm nhìn, nhu cầu thị trường **có số liệu chứng minh**, nguồn thu chính, mục tiêu SMART, chiến lược chung, nguồn lực, **chi phí**, và **thách thức** cùng cách giảm thiểu — kết bằng thách thức cho thấy bạn thực tế.
3. **Mục lục** có số trang.
4. Các phần theo thứ tự sách: tầm nhìn → SWOT → khách hàng → đối thủ → thử nghiệm → mục tiêu → thương hiệu công ty → thương hiệu sản phẩm → sản phẩm → giá → phân phối → quảng bá → đo lường. Bỏ câu hỏi của mẫu, giữ câu trả lời; đề mục, gạch đầu dòng nhất quán; phông dễ đọc cỡ 10 – 12, giãn dòng 1,1 – 1,2; đánh số trang; thường 10 – 30 trang — **chất lượng hơn độ dày** (tr. 244).
5. **Bảng phân bổ chi phí**: một đoạn mở nói nguồn tiền (vay nhỏ, trao đổi dịch vụ, thoả thuận "trả khi có lời", quyên góp, nhà đầu tư) và **tổng chi phí**; rồi từng bảng theo hạng mục (đĩa, buổi diễn, hàng lưu niệm, quảng bá trên mạng, du kích, báo chí, thư trực tiếp, quảng cáo), mỗi dòng có đơn giá, số lượng, thành tiền, cộng phụ. **Chỉ ghi khoản phải trả tiền**; thứ được cho hay trao đổi thì nói ở đoạn mở. Ví dụ: 1.000 CD Digipak 1,20 đô/cái = 1.200 đô; 100 USB đeo tay 7,45 đô = 745 đô; thiết lập phân phối số 69 đô — cộng 2.014 đô (tr. 246 – 249).
6. **Lịch thực hiện**: liệt kê nhiệm vụ theo từng chiến lược (thương hiệu, sản phẩm, giá, phân phối, quảng bá, đo lường), sắp theo **trình tự hợp lý** — muốn có tiệc ra mắt ngày 31/3 thì cuối tháng 1 đã phải đặt chỗ, muốn đặt chỗ thì phải có website, bài nghe thử, ảnh, nên đầu tháng 1 đã phải thu và chụp; việc nào làm song song được thì làm song song. Cách hay: **đi ngược từ cuối mỗi quý** và ước lượng mỗi việc mất bao lâu. Chia theo quý, đặt tên từng giai đoạn ("Quý 1: trước ngày phát hành") (tr. 249 – 252).
7. **Phụ lục** (không bắt buộc): danh sách địa điểm, đài, báo, blog, mẫu khảo sát, biểu đồ (tr. 252).

## Bốn bản kế hoạch mẫu ở cuối sách
Sách in trọn bốn kế hoạch (tr. 281 – 368): ban rock/rave giả định **Rally the Tribes** (phát hành đĩa, DVD, hàng lưu niệm, buổi diễn); nữ rapper drum and bass **B. Squid**; **RockHouse Music Trax** — một xưởng sáng tác – sản xuất nhạc cho phim kinh phí thấp và quảng cáo, kiêm thư viện nhạc; và một **tay trống pop tự do** nhận lưu diễn theo hợp đồng làm thuê. Bốn mẫu cho thấy cùng một khung áp được cho ban nhạc, nghệ sĩ solo, người làm nhạc cho phim và nhạc công tự do. Cuối sách còn có bảng thuật ngữ, danh mục hơn 300 dịch vụ, và 60 câu hỏi kiểm tra theo chương cho giảng viên.

## Câu hỏi và bài tập
1. Viết tóm tắt điều hành một trang cho dự án của bạn theo đúng mười mục.
2. Lập bảng phân bổ chi phí cho một đợt phát hành đĩa đơn: chỉ ghi khoản phải trả, nói rõ khoản nào được cho hay trao đổi.
3. Lập lịch thực hiện quý tới bằng cách đi ngược từ một sự kiện chốt (buổi diễn, ngày phát hành).
`,
  },
  {
    slug: 'marketing-diy-thuc-thi',
    title: 'Marketing cho nghệ sĩ tự lập (20) — Thực thi: biến kế hoạch thành việc đã làm',
    category: 'musicology',
    aliases: ['thực thi kế hoạch nghệ sĩ', 'tự lực âm nhạc', 'chọn thành viên ban nhạc', 'thoả thuận thành viên ban nhạc', 'giao việc ban nhạc', 'kiệt sức nghệ sĩ', 'lòng biết ơn trong nghề nhạc'],
    summary: 'Chương 20 sách của Bobby Borg: thử bản kế hoạch có "nói khống" không, có tiền trước khi bắt đầu, tự làm thay vì chờ người tới giúp, bền bỉ, giữ sức khoẻ, chọn thành viên – nhân sự kỹ, giao việc, gắn thưởng với kết quả, tạo cảm giác cấp bách, loại bỏ sự trì trệ – tiêu cực, thận trọng với người trong nghề tìm tới, và biết ơn.',
    refs: BORG_REFS,
    body: `
Bài thứ hai mươi bộ [[marketing-diy-lo-trinh|Marketing cho nghệ sĩ tự lập]], theo chương 20 (tr. 253 – 260).

Thực thi là **nghệ thuật làm cho xong việc** — lấp khoảng cách giữa điều bạn muốn và điều tổ chức của bạn làm được. "Kế hoạch tốt nhất thế giới cũng không đáng giá tờ giấy in nó nếu bạn không làm được" (Ralph Larsen, Johnson & Johnson) (tr. 253). Các chính sách sách đề nghị, không theo thứ tự bắt buộc:

- **Phép thử "nói khống"** (tr. 253 – 254): tầm nhìn rõ và thực tế hay chỉ là "thống trị thế giới"? Có nghiên cứu và một khoảng trống thật, hay chỉ chép người khác? Điểm mạnh có thật hay "giả bộ cho tới khi thành thật"? Mục tiêu đạt được và có cách đo không? Có một hỗn hợp chiến lược và ngân sách tương xứng, hay chỉ trông vào mạng xã hội?
- **Có tiền trước** — Borg thấy vô số nghệ sĩ bỏ dở dự án vì hết tiền hay vì ngây thơ chờ ai đó xuất hiện; có lời thì **tái đầu tư** vào chính mình (tr. 254).
- **Tự làm hoặc chết** — không ai quan tâm tới sự nghiệp của bạn hơn bạn chừng nào bạn chưa tự tạo được sức hút; người trong nghề làm việc vì phần trăm, mà phần trăm của số không vẫn là số không. Ví dụ sách nêu: Owl City thu tại nhà mẹ rồi ký hãng lớn; Macklemore & Ryan Lewis tự lập hãng rồi ký với nhánh phân phối ADA của Warner; Justin Bieber đăng video hát cover lên YouTube (tr. 254).
- **Bền bỉ** — nhiều nghệ sĩ trẻ than phiền sau vài năm; Borg nhắc Malcolm Gladwell (*Outliers*) với "mười nghìn giờ" và chuyện The Beatles chơi club nhiều năm; chính ông mất bảy tháng mới có một bài điểm sách trên *Modern Drummer*. Làm gì thì **làm cho xong** (tr. 254 – 255).
- **Cháy nhưng đừng cạn**: ngủ, ăn, tập luyện — Borg kể có lần ngủ gật khi lái xe (tr. 255).
- **Chọn thành viên, nhân sự kỹ** — đừng chọn vì ở gần hay vì màu tóc, hình xăm. Sáu câu hỏi: có chung đam mê với tầm nhìn và giá trị? có điểm mạnh bù điểm yếu của bạn? có tinh thần làm việc và sự bền bỉ? có cam kết hay vướng việc khác? có nghiện ngập gì không? vừa biết theo vừa biết dẫn? Tìm nhạc công tốt nhất qua giới thiệu của người tin cậy (tr. 255 – 256).
- **Giao việc** theo sở trường — người lo website, người lo đặt show, người làm phát ngôn; cả người hâm mộ cũng nhận việc được (phát tờ rơi, đứng quầy). Giao việc giỏi là dấu hiệu của người dẫn dắt giỏi (tr. 256).
- **Gắn thưởng với kết quả** — tiền là chuyện không nên kiêng nói: ban nhạc cần **thoả thuận thành viên** rõ ràng (chia bản quyền sáng tác chung, phần trăm thu nhập để lại cho ban); nghệ sĩ solo nói rõ trả nhạc công thế nào, khi nào; người đứng quầy có hoa hồng khi đạt mức doanh số (tr. 256). Sách kèm một danh sách dài các phẩm chất của người dẫn dắt (tr. 257).
- **Cảm giác cấp bách** — ai cũng già đi mỗi ngày, ngành nhạc nhiều phần dựa vào tuổi trẻ; chần chừ thì người khác tới trước (tr. 257).
- **Loại bỏ trì trệ, tiêu cực, thất hứa** — xử lý thẳng, chia tay nếu cần, đừng kéo dài (tr. 258).
- **Thận trọng với người trong nghề tìm tới** (quản lý, nhà sản xuất, đại lý, nhà đầu tư): ý tưởng của họ có hợp tầm nhìn? lý lịch thật? đạo đức và động cơ? bạn mất gì và được gì? và mọi hợp đồng ràng buộc phải qua luật sư (tr. 258). Đọc thêm [[quan-ly-nghe-si-lo-trinh]].
- **Biết ơn** — gửi thiệp, cảm ơn trên đĩa, nhắc tên trong phỏng vấn; và đừng chỉ liên lạc khi cần nhờ (Keith Ferrazzi, *Never Eat Alone*) (tr. 258 – 259).

Chương khép bằng hình ảnh của Borg: đời không phải hộp sô-cô-la như Forrest Gump nói, mà là **lọ ớt jalapeño** — những gì bạn làm hay không làm hôm nay có thể "cay" bạn ngày mai (tr. 259); và mười hai lời khuyên của ông để sống vui: học mỗi ngày, cho lại kiến thức, tránh người tiêu cực, cân bằng làm – chơi, tập luyện, giữ tài chính gọn, nhà cửa sạch, gần người thân, ra thiên nhiên, chủ động, luôn có một phương án độc lập, và tử tế với chính mình (tr. 260).

*Người biên soạn ghi chú*: sách kèm một trang dài các câu danh ngôn gán cho Napoleon, Edison, Churchill, Đức Phật… (tr. 259); nhiều câu trong số đó là câu lưu truyền mà nguồn gốc không rõ, nên bộ bài không chép lại.

## Câu hỏi và bài tập
1. Trả lời năm câu của phép thử "nói khống" cho bản kế hoạch của bạn.
2. Viết bản thoả thuận thành viên một trang cho ban của bạn (hay thoả thuận với nhạc công thuê): chia phần sáng tác, chia thu nhập, quyết định bằng cách nào.
3. Lập bảng phân việc cho mọi người trong đội (kể cả người hâm mộ tình nguyện), mỗi việc có một người chịu trách nhiệm.
`,
  },
  {
    slug: 'marketing-diy-hoc-tiep',
    title: 'Marketing cho nghệ sĩ tự lập (21) — Tiếp tục học marketing: hai mươi bài tập',
    category: 'musicology',
    aliases: ['học marketing âm nhạc', 'sách marketing nên đọc', 'tự học kinh doanh âm nhạc', 'người hướng dẫn nghề nhạc', 'mentor âm nhạc'],
    summary: 'Chương 21 sách của Bobby Borg: hai mươi cách giữ "cơ bắp marketing" — học từ đời các nghệ sĩ thành công và thất bại, từ doanh nghiệp ngoài ngành, từ quảng cáo quanh mình, từ cách các công ty xử lý khủng hoảng; đọc sách, theo blog, vào hội nghề nghiệp, học thêm, học mở, thực tập, tìm người hướng dẫn, dạy lại người khác, và cứ làm.',
    refs: BORG_REFS,
    body: `
Bài thứ hai mươi mốt bộ [[marketing-diy-lo-trinh|Marketing cho nghệ sĩ tự lập]], theo chương 21 (tr. 261 – 268).

Như tập thể dục giữ cơ thể khoẻ, học marketing liên tục giữ "cơ bắp marketing" (tr. 261). Hai mươi bài tập, làm theo thứ tự nào cũng được:

1. **Đời nghệ sĩ thành công**: họ bù điểm yếu, tìm chất riêng, đặt mục tiêu ra sao?
2. **Đời nghệ sĩ thất bại**: thiếu độc đáo, thiếu bài hay, sai thời điểm, nghiện ngập hay thực thi kém? Phim tài liệu *Dig!* và *Anvil! The Story of Anvil* (tr. 261).
3. **Doanh nghiệp ngoài ngành** mà bạn nể (tr. 262).
4. **Marketing quanh mình mỗi ngày**: cách siêu thị định giá, biển quảng cáo, người bán hàng ở trung tâm thương mại; giữ một cuốn sổ dán những mẫu quảng cáo hay (tr. 262).
5. **Cách công ty đối mặt nghịch cảnh**: New Coke, vụ Tylenol năm 1982, vụ tràn dầu của BP, các hãng đĩa với Napster (tr. 262).
6. **Vì sao có người trụ được hàng chục năm** (Madonna, Metallica) còn người khác chỉ có một bài hit (tr. 262).
7. **Đời những người dẫn dắt lớn** — tiểu sử Steve Jobs, Lincoln, Carnegie, Vince Lombardi (tr. 263).
8. **Sách kinh doanh – marketing**: sách nêu *Influence* (Cialdini), *Made to Stick* (Chip và Dan Heath), *Ogilvy on Advertising*, *Emotional Intelligence* (Goleman), *This Is Your Brain on Music* (Daniel Levitin), *The Five Dysfunctions of a Team*… và các tác giả Levitt, Kotter, Drucker, Aaker, Ries và Trout, Dan Ariely, Seth Godin (tr. 263 – 264; sách in nhầm tên Godin).
9. **Theo dõi các chuyên gia** trên mạng xã hội.
10. **Theo các trang, blog** kinh doanh – marketing (*Harvard Business Review*, *Wired*, *Fast Company*, *Hypebot*, *Advertising Age*…) (tr. 264).
11. **Vào hội nghề nghiệp** marketing (tr. 264).
12. **Học thêm** một lớp marketing ở trường (tr. 265).
13. **Học mở** — tài liệu miễn phí của các đại học (tr. 265).
14. **Thực tập** ở một công ty marketing (tr. 265).
15. **Tìm người hướng dẫn** — và nhớ **cho lại**: phụ giúp tìm tài liệu, chạy việc vặt, cảm ơn (tr. 265 – 266).
16. **Dạy lại người khác** — viết thử một kế hoạch marketing cho bạn nghệ sĩ, dạy các thành viên trong ban để cả đội "nói cùng một ngôn ngữ"; "học để dạy, dạy để học" (tr. 266).
17. **Nghe chương trình phát thanh, podcast** khi lái xe (tr. 266).
18. **Đọc báo nghề địa phương** (tr. 266).
19. **Cứ làm** — "marketing học một ngày, thành thạo cả đời" (câu sách gán cho Kotler) (tr. 266).
20. **Thuê một cố vấn** để xem người có kinh nghiệm làm việc (tr. 267).

Chương khép bằng phỏng vấn Rebecca Weintraub, giám đốc chương trình thạc sĩ Quản trị truyền thông trực tuyến ở USC — nơi chính tác giả học: thế giới "biến động, bất định, phức tạp, mơ hồ" (VUCA); học từ xa hợp với nhạc công hay đi lưu diễn; và việc gì hôm nay cũng làm theo nhóm, kể cả viết bài hát (tr. 267 – 268). *Người biên soạn ghi chú*: phần này là giới thiệu chương trình đào tạo, có liên quan tới tác giả.

## Gợi ý cho người đọc Việt Nam
Trong thư viện này, đọc tiếp: [[quan-ly-nghe-si-lo-trinh|Quản lý nghệ sĩ]] (Paul Allen), [[hang-dia-lo-trinh|Cỗ máy hãng đĩa]] (Nick Sadler), [[cong-nghiep-am-nhac]], [[marketing-am-nhac-va-mang-xa-hoi]], [[cong-nghiep-am-nhac-viet-nam]].

## Câu hỏi và bài tập
1. Chọn một nghệ sĩ thành công và một nghệ sĩ thất bại cùng thể loại; so sánh theo các bước của sách (tầm nhìn, nhu cầu, khách hàng, đối thủ, thực thi).
2. Lập danh sách đọc sáu tháng gồm ba cuốn sách và ba trang tin.
3. "Dạy để học": viết thử kế hoạch marketing một trang cho một người bạn nghệ sĩ.
`,
  },
  {
    slug: 'marketing-diy-tuong-lai',
    title: 'Marketing cho nghệ sĩ tự lập (22) — Tương lai: playlist, dữ liệu, AI, cấp phép',
    category: 'musicology',
    aliases: ['tương lai marketing âm nhạc', 'playlist là radio mới', 'tỷ lệ bỏ qua bài', 'skip rate', 'siêu dữ liệu âm nhạc', 'influencer âm nhạc', 'loa thông minh', 'Hatsune Miku', 'AI marketing âm nhạc'],
    summary: 'Chương 22 (chương mới của bản 2) sách của Bobby Borg: dự báo tới năm 2025 của các chuyên gia — playlist là radio mới, tối ưu bài và album cho streaming, giọng nói – tuyển chọn – dữ liệu – quan hệ, người có ảnh hưởng, âm nhạc chân thật và liên lạc trực tiếp, AI quảng bá lưu diễn, in áo số, cấp phép trên nền tảng mới, siêu dữ liệu, dữ liệu và văn hoá; đối chiếu với những gì đã xảy ra.',
    refs: BORG_REFS,
    body: `
Bài cuối bộ [[marketing-diy-lo-trinh|Marketing cho nghệ sĩ tự lập]], theo chương 22 (tr. 269 – 280), chương mới thêm ở bản 2. Borg gom ý kiến của bạn bè và đồng nghiệp về xu hướng tới năm 2025 — không ai có quả cầu pha lê, nhưng ít ra phải tò mò và cởi mở (tr. 269).

## Các dự báo
- **Playlist là radio mới** (Michael Eames, PEN Music): người biên tập playlist là "trọng tài" mới; điều thuật toán để ý là **bao nhiêu người dùng riêng lẻ** cho bài của bạn vào playlist cá nhân — dù playlist nhỏ. Hãy rủ người hâm mộ tự lập playlist và tự lập playlist của mình (tr. 269 – 270). Paulo Sigismondi (USC) thêm: streaming đưa nhạc vượt biên giới — BTS ở Mỹ, "Despacito" của Luis Fonsi khắp thế giới (tr. 270).
- **Tối ưu bài và album cho streaming** (Jesse Cannon): bản đĩa đơn ngắn hơn, có giọng hát và câu móc thật sớm; tách bài thử nghiệm dài thành nhiều phần có mã riêng; đặt bài hay nhất lên đầu album; tách đoạn nối, đoạn nói thành track riêng (tối thiểu 30 giây mới được tính là một lượt nghe có tiền bản quyền); và để ý **tỷ lệ bỏ qua** — bị bỏ qua nhiều thì thuật toán ít chọn (tr. 270).
- **Giọng nói, tuyển chọn, dữ liệu, quan hệ** (Jay Gilbert, Label Logic): loa thông minh khiến **siêu dữ liệu** (thể loại, tâm trạng, câu chuyện, vùng) trở nên quyết định; người nghe yêu cầu "nhạc thư giãn" chứ không gọi tên thể loại; dữ liệu từ Spotify for Artists, Apple Music for Artists, Shazam… giúp chọn thành phố lưu diễn, tìm người hâm mộ giống người đã có; và mạng xã hội theo tỷ lệ **80/20** — 80% hỏi ý kiến, trả lời, cùng đứng về một mục đích; 20% mới là bán hàng (tr. 271).
- **Người có ảnh hưởng** (Fred Cook, USC): nhạc sĩ phải giỏi làm nội dung, đọc số liệu, và hiểu thế nào là một người có sức thuyết phục; khi đó thương hiệu lớn sẽ tìm tới (tr. 272).
- **Âm nhạc chân thật và liên lạc trực tiếp** (David Hooper): người nghe không ngốc — họ nhận ra người mua 100.000 người theo dõi ảo; hãy mở hai ba "cửa" thật: bản tin, podcast kể chuyện đằng sau bài hát, và **sống một cuộc đời** đáng kể để có chất liệu (tr. 272 – 273).
- **AI quảng bá lưu diễn** (Sydney Alston): theo số liệu ông dẫn, cần khoảng 72 (Napster) tới 1.400 (YouTube) lượt nghe mới được một đô, trong khi một vé club 10 – 20 đô; ông hình dung AI tìm đúng những người từng nhắc tới một club để gửi tờ rơi số — kèm lo ngại về quyền riêng tư (tr. 273).
- **In áo số và bán hàng ngay trên nền tảng nghe nhạc** (Tony van Veen): áo vẫn là áo; cái đổi là giá in số lượng nhỏ giảm, và có thể bấm mua áo ngay khi đang nghe (tr. 273 – 274). Kèm câu chuyện **Hatsune Miku**, ca sĩ ảo của Crypton Future Media, "diễn" trước hàng nghìn khán giả bằng hình chiếu (tr. 274).
- **Cấp phép trên nền tảng mới và ở chỗ bất ngờ** (Michael Laskow): Netflix, Hulu, Amazon Prime cần ngày càng nhiều nhạc; còn đồ chơi, giải trí trên máy bay, sách nói… — nhạc phải hay **và đúng chỗ dùng** (tr. 275). Jeff và Todd Brabec: hơn 500 phim truyền hình có kịch bản sản xuất mỗi năm ở Mỹ; phải xem truyền hình, biết ai là người giám sát âm nhạc, và hiểu luật cấp phép (tr. 275 – 276).
- **Siêu dữ liệu** (luật sư Erin Jacobson): trong thế giới streaming, dữ liệu theo dõi bài, chủ sở hữu, tiền gần như quan trọng ngang chính quyền sở hữu; đăng ký đủ ở mọi tổ chức thu tiền, giữ hồ sơ cẩn thận (tr. 276).
- **Dữ liệu dẫn đường, nhưng phải hiểu văn hoá** (Stylés Akira, USC): theo dõi ngày càng xâm phạm, dễ biến con người thành con số; người làm marketing lâu dài phải hiểu "tinh thần thời đại", không chỉ thuật toán (tr. 276).

Bảng tổng hợp cuối chương liệt kê: AI, thực tế tăng cường, hoà nhạc thực tế ảo, chatbot, hồ sơ khách hàng chính xác tới từng cá nhân, quảng cáo tự động, trải nghiệm khách hàng, website cá nhân hoá, câu chuyện xuyên nền tảng, toàn cầu hoá âm nhạc, **lo ngại quyền riêng tư**, quản lý danh tiếng, và câu hỏi nửa đùa "hết radio, hết ban nhạc?" (tr. 276 – 278). Chương khép bằng phỏng vấn Jay Gilbert với mười hai mẹo vào playlist: nhạc hay; playlist chỉ là một mảnh của kế hoạch; viết tầm nhìn; có **câu chuyện hai ba câu** cả đội cùng dùng; gửi trước cho blog, báo, đài; đánh thức người hâm mộ sẵn có; hình ảnh nhất quán; đường dẫn thông minh tới mọi nền tảng; kênh YouTube; xác minh tài khoản và tự lập playlist; lưu trước (pre-save) trên các nền tảng; và dùng dữ liệu (tr. 278 – 279).

## Năm 2025 thực tế — ghi chú của người biên soạn
- Phần lớn dự báo đã thành sự thật: playlist, dữ liệu cho nghệ sĩ, AI, nhạc châu Á và Mỹ Latinh vượt biên giới.
- Một thay đổi sách chưa kịp nói: từ năm 2024, Spotify chỉ trả tiền bản quyền ghi âm cho bài có **ít nhất 1.000 lượt nghe trong 12 tháng**, nên lời khuyên "tách đoạn nối thành track riêng để có thêm tiền" ít tác dụng với nghệ sĩ nhỏ.
- Con số "lượt nghe để được một đô" thay đổi theo từng năm và từng hợp đồng; xem [[kinh-te-hoc-streaming]].
- Về AI trong sáng tác – sản xuất: [[tri-tue-nhan-tao-va-am-nhac]]. Về thực hành phát hành hiện nay: [[hang-dia-tiep-thi-phat-hanh]], [[hang-dia-quang-cao-va-spotify]].
- Bảng tổng hợp của sách dự đoán các nước kiểm duyệt mạnh "như Trung Quốc, Việt Nam" sẽ nới lỏng internet; đây là dự đoán của tác giả, bộ bài chỉ thuật lại.

## Câu hỏi và bài tập
1. Chọn một bài của bạn và "tối ưu cho streaming" theo gợi ý của Jesse Cannon: bạn sẽ sửa phần mở đầu thế nào?
2. Viết câu chuyện hai ba câu về âm nhạc của bạn mà cả đội có thể cùng dùng.
3. Rà lại siêu dữ liệu (tên bài, tác giả, tỷ lệ chia, thể loại, tâm trạng) của mọi bài bạn đã phát hành; còn thiếu gì?
`,
  },
]
