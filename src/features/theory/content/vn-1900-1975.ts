import type { Article } from '../wiki'

/**
 * Âm nhạc Việt Nam cuối thế kỷ XIX – 1975, viết theo dàn bài giáo trình đại học (nhạc viện) Lamar gửi
 * (93 slide), đối chiếu với nguồn công khai. Chỗ chỉ có trong dàn bài mà chưa tìm được nguồn thì ghi rõ.
 */
const MINH_CHAU: [string, string] = ['Nguyễn Thị Minh Châu — Những vấn đề lí luận âm nhạc Việt Nam giai đoạn 1954 – 1975 (Hội Nhạc sĩ Việt Nam, 2014; đăng lại trên redsvn.net)', 'https://redsvn.net/nhung-van-de-li-luan-am-nhac-viet-nam-giai-doan-1954-1975-2/']
const TIEN_TRINH: [string, string] = ['Viện Âm nhạc — Âm nhạc mới Việt Nam: tiến trình và thành tựu (Hà Nội, 2000) — công trình tổng kết thường được các bài trên dẫn; người biên soạn chưa đọc trực tiếp', 'https://vienamnhac.vn']

export const vn1900: Article[] = [
  {
    slug: 'am-nhac-viet-nam-cuoi-the-ky-xix-1975',
    title: 'Âm nhạc Việt Nam cuối thế kỷ XIX – 1975: đề cương học và ôn tập',
    category: 'vietnam',
    aliases: ['lịch sử âm nhạc Việt Nam 3', 'âm nhạc Việt Nam cận hiện đại', 'âm nhạc Việt Nam thế kỷ 20', 'đề cương âm nhạc Việt Nam', 'ôn thi âm nhạc Việt Nam', 'bối cảnh âm nhạc cuối thế kỷ XIX', 'âm nhạc Việt Nam 1900 1975'],
    summary: 'Trang đề cương cho học phần lịch sử âm nhạc Việt Nam từ cuối thế kỷ XIX tới 1975, theo dàn bài một giáo trình đại học (nhạc viện): bối cảnh cuối thế kỷ XIX – đầu thế kỷ XX (nhạc cung đình suy thoái, ca trù thính phòng, ca Huế Nam tiến, các hệ cung – hơi, kèn đồng và nhạc Tây); sân khấu cải cách; tân nhạc và ba dòng ca khúc; 1945 – 1954; 1954 – 1975 ở hai miền; tám câu hỏi ôn tập, mỗi câu dẫn tới bài trả lời.',
    refs: [
      ['Wikipedia tiếng Việt — Tân nhạc Việt Nam', 'https://vi.wikipedia.org/wiki/T%C3%A2n_nh%E1%BA%A1c_Vi%E1%BB%87t_Nam'],
      ['Wikipedia tiếng Việt — Cải lương', 'https://vi.wikipedia.org/wiki/C%E1%BA%A3i_l%C6%B0%C6%A1ng'],
      MINH_CHAU,
      TIEN_TRINH,
    ],
    body: `
Trang này đi theo dàn bài của một **giáo trình lịch sử âm nhạc Việt Nam bậc đại học** (phần cuối thế kỷ XIX – 1975) và nối mỗi mục tới bài chi tiết trong thư viện. Các dữ kiện được đối chiếu với nguồn công khai; chỗ nào chỉ có trong dàn bài mà chưa tìm được nguồn thì bài ghi "theo giáo trình, chưa đối chiếu". Tổng quan cả lịch sử: [[am-nhac-viet-nam]] · [[cac-thoi-ky-am-nhac-viet-nam]] · loạt [[lich-su-tan-nhac-viet-nam]].

::timeline 1907=Chèo_văn_minh 1917=Cải_lương 1927=Nhạc_viện_Viễn_Đông 1938=Nhạc_cải_cách 1945=Cách_mạng_tháng_Tám 1948=Hội_Văn_nghệ 1956=Hai_trường_âm_nhạc 1959=Dàn_nhạc_giao_hưởng 1965=Cô_Sao 1975=Thống_nhất | Các mốc lớn của học phần

## 1. Bối cảnh cuối thế kỷ XIX
- **Nhạc lễ cung đình** triều Nguyễn suy thoái: biên chế dàn nhạc và số bài bản đều giảm (xem [[am-nhac-thoi-nguyen]], [[ca-hue-nha-nhac]]).
- **Hát ả đào** phát triển thành **ca trù thính phòng**, tiếp nhận thêm dân ca, chèo, xẩm ([[ca-tru]], [[am-nhac-ca-tru]]).
- **Ca Huế** thịnh trong cung đình với nội dung bi thương hoặc thoát tục; nghệ nhân cung đình ra dân gian, ca Huế "Nam tiến": ở Nam Trung Bộ thành **đờn Quảng**, vào Nam Bộ góp phần thành **đờn ca tài tử** ([[don-ca-tai-tu]]).
- **Chèo** mượn vai và bài bản của **tuồng**; tuồng cung đình tiếp tục các vở "trung quân", còn **tuồng đồ** dân gian mang nội dung châm biếm ([[cheo]], [[tuong]], [[lan-dieu-cheo-va-tuong]]).
- **Âm luật.** Theo giáo trình: miền Bắc còn giữ tên các cung **huỳnh, bắc, nam, nao, pha**, cùng hai cung phụ **hãm** và **trầm**; miền Nam có các **hơi bắc, nam, xuân, ai, oán, đảo**; hai "luật" **dương kiều** và **âm kiều** từ thời Hồng Đức có thể đã biến thành hai hệ **bắc** và **nam** tương phản. Hệ hơi miền Nam được trình bày kỹ ở [[hoi-trong-nhac-tai-tu-cai-luong]] và [[ly-thuyet-am-nhac-co-truyen-viet-nam]]; phần tên cung miền Bắc và giả thuyết dương kiều – âm kiều **chưa đối chiếu được** với nguồn công khai (một băng đĩa ngâm thơ của UNESCO – Folkways có nhắc "cung pha", "cung huỳnh" mà không định nghĩa).

## 2. Đầu thế kỷ XX
- Dàn nhạc cung đình có thêm **bộ kèn đồng**; ca trù bị coi là sa sút, gắn với ăn chơi đô thị; ca Huế và đờn ca tài tử phát triển ở nông thôn và đô thị — nhạc tài tử là nền của **cải lương**.
- Sân khấu dân tộc biến đổi mạnh: **chèo văn minh, chèo cải lương, tuồng cải cách, cải lương, ca kịch Huế, ca kịch bài chòi** → [[san-khau-cai-cach-dau-the-ky-xx]].
- Văn hoá phương Tây vào ồ ạt: nhạc nhà thờ, kèn đồng nhà binh, hướng đạo, đĩa hát, phát thanh, phòng trà, sách và lớp dạy nhạc Tây → [[tien-de-tan-nhac]], [[am-nhac-thoi-phap-thuoc]].

## 3. Tân nhạc
Các mốc: nhà hát Hải Phòng (giáo trình ghi 1893), Sài Gòn (giáo trình ghi 1909), Hà Nội (1911) — bài [[tien-de-tan-nhac]] theo nguồn khác ghi Sài Gòn 1900, Hải Phòng 1912; dàn kèn nhà binh ở Huế và Hà Nội; [[nhac-vien-vien-dong]] (1927 – 1930); "bài ta theo điệu Tây" ([[bai-ta-theo-dieu-tay]]); phong trào [[nhac-cai-cach-1938]]; các nhóm [[nhom-sang-tac-tan-nhac-dau-tien|Myosotis, Tricéa, Đồng Vọng, Tổng hội Sinh viên]]. Giáo trình nêu thêm hai mốc **1922** (Trần Đại Thụ lập "hội Ca nhạc ái hữu" ở Thanh Hoá) và **khoảng 1923 – 1925** (sinh viên Cao đẳng Sư phạm Hà Nội đặt lời Việt cho bài Pháp) — hai mốc này **chưa có nguồn đối chiếu**, như đã ghi ở [[lich-su-tan-nhac-viet-nam]].

Ba dòng ca khúc trước 1945 — hùng ca yêu nước, lãng mạn, cách mạng → [[ba-dong-ca-khuc-1930-1945]].

## 4. 1945 – 1954
Thiết chế (Đề cương văn hoá 1943, Hội Văn nghệ Việt Nam 1948, trường âm nhạc ở Việt Bắc), phong trào ca hát, bảy thể loại ca khúc và ca cảnh – ca kịch → [[the-loai-ca-khuc-1945-1954]], [[tan-nhac-1945-1954]].

## 5. 1954 – 1975
- **Miền Bắc:** thiết chế nhà nước (trường, hội, viện, đoàn), ca khúc, và các thể loại lớn: [[ca-kich-nhac-kich-vu-kich-1954-1975]], [[khi-nhac-thinh-phong-giao-huong-1954-1975]], [[dao-tao-va-nghien-cuu-am-nhac-1945-1975]], [[tan-nhac-mien-bac-1954-1975]].
- **Miền Nam:** thị trường ca khúc, tình ca và nhạc lính, ca khúc hài – châm biếm (Trần Văn Trạch, ban AVT), du ca (1966), "Hát cho đồng bào tôi nghe" (1969), nhạc trẻ → [[tan-nhac-mien-nam-1954-1975]], [[nhac-tre-rock-sai-gon]], [[nhac-vang-bolero]], [[nhac-trinh]], [[hoang-thi-tho]], [[pham-duy]].

## Về cách đánh giá trong giáo trình
Dàn bài dùng ngôn ngữ chính trị của sách giáo khoa miền Bắc khi nói về miền Nam (ví dụ "đội ngũ Mỹ – ngụy", "bài hát tâm lý chiến phản động"). Thư viện thuật đúng nhận định ấy khi trích, nhưng trình bày âm nhạc miền Nam theo các nguồn đa chiều hơn ở [[tan-nhac-mien-nam-1954-1975]] — người học nên biết cả hai cách nhìn.

## Tám câu hỏi ôn tập
| # | Câu hỏi của giáo trình | Bài trả lời |
|---|---|---|
| 1 | Bối cảnh âm nhạc cuối thế kỷ XIX – đầu thế kỷ XX | Mục 1 – 2 trang này; [[am-nhac-thoi-nguyen]], [[tien-de-tan-nhac]] |
| 2 | Các thể loại chèo, tuồng, cải lương (tên thể loại, mốc ra đời, đặc điểm) | [[san-khau-cai-cach-dau-the-ky-xx]] |
| 3 | Ba dòng ca khúc nửa đầu thế kỷ XX | [[ba-dong-ca-khuc-1930-1945]] |
| 4 | Sự kiện âm nhạc 1945 – 1954 | [[the-loai-ca-khuc-1945-1954]], [[dao-tao-va-nghien-cuu-am-nhac-1945-1975]] |
| 5 | Các thể loại ca khúc 1945 – 1954 | [[the-loai-ca-khuc-1945-1954]] |
| 6 | Bối cảnh âm nhạc miền Bắc và miền Nam 1954 – 1975 | [[tan-nhac-mien-bac-1954-1975]], [[tan-nhac-mien-nam-1954-1975]], [[dao-tao-va-nghien-cuu-am-nhac-1945-1975]] |
| 7 | Các thể loại âm nhạc miền Bắc 1954 – 1975 | [[ca-kich-nhac-kich-vu-kich-1954-1975]], [[khi-nhac-thinh-phong-giao-huong-1954-1975]] |
| 8 | Các thể loại ca khúc và phong trào ca khúc miền Nam 1954 – 1975 | [[tan-nhac-mien-nam-1954-1975]], [[nhac-tre-rock-sai-gon]] |

## Câu hỏi và bài tập
1. Vẽ sơ đồ "Nam tiến" của ca Huế: ca Huế → đờn Quảng → đờn ca tài tử → cải lương. Mỗi mũi tên ghi một đặc điểm thay đổi.
2. Lập dòng thời gian 1907 – 1975 với 15 mốc, mỗi mốc một câu.
3. Chọn một câu hỏi ôn tập và viết dàn ý trả lời trong một trang.
`,
  },
  {
    slug: 'san-khau-cai-cach-dau-the-ky-xx',
    title: 'Sân khấu cải cách đầu thế kỷ XX: chèo văn minh, chèo cải lương, tuồng cải cách và sự ra đời của cải lương',
    category: 'vietnam',
    aliases: ['chèo văn minh', 'chèo cải lương', 'Nguyễn Đình Nghị', 'Trùm Nghị', 'tuồng cải cách', 'hát bội pha cải lương', 'tuồng Tàu', 'cải lương ra đời năm nào', 'ca ra bộ', 'Phó Mười Hai', 'Năm Tú', 'André Thận', 'Gia Long tẩu quốc', 'cải lương Hồ Quảng', 'cải lương tuồng Tàu', 'cải lương xã hội', 'cải lương kiếm hiệp'],
    summary: 'Ba dòng sân khấu truyền thống thay đổi khi lên sân khấu thành thị đầu thế kỷ XX: chèo văn minh rồi chèo cải lương của Nguyễn Đình Nghị (1883 – 1954) — chia hồi, bỏ giáo đầu, thêm nhạc cụ và làn điệu; tuồng cải cách, hát bội pha cải lương, tuồng Tàu; và cải lương ra đời ở Nam Bộ từ đờn ca tài tử qua ca ra bộ — với các mốc 1906, 1915 – 1916, 1917, 1918, 1920, 1922 mà giới nghiên cứu chưa thống nhất; rồi cải lương tuồng Tàu, Hồ Quảng, xã hội, kiếm hiệp.',
    refs: [
      ['Wikipedia tiếng Việt — Nguyễn Đình Nghị', 'https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_%C4%90%C3%ACnh_Ngh%E1%BB%8B'],
      ['Hà Nội Mới — Nguyễn Đình Nghị, Trùm chèo đầu thế kỷ XX', 'https://hanoimoi.vn/nguyen-dinh-nghi-trum-cheo-dau-the-ky-xx-233333.html'],
      ['Wikipedia tiếng Việt — Cải lương (dẫn Vương Hồng Sển, Trần Văn Khê, Sơn Nam, Đỗ Dũng…)', 'https://vi.wikipedia.org/wiki/C%E1%BA%A3i_l%C6%B0%C6%A1ng'],
      ['Trần Nhật Vy — Một trăm năm cải lương là năm nào? (Nghiên cứu và Phát triển, số 3(146), 2018)', 'https://vjol.info.vn/ncpt-hue/article/view/38427'],
      ['Đại học Đà Lạt — bài nghiên cứu về chèo văn minh, chèo cải lương (Tạp chí Khoa học ĐHĐL)', 'https://scholar.dlu.edu.vn/thuvienso/bitstream/DLU123456789/251241/1/CTv184V36S022020022.pdf'],
      ['Nguyễn Đức Hiệp, Nguyễn Lê Tuyên — Hát bội, đờn ca tài tử và sự hình thành cải lương từ cuối thế kỷ 19 đến đầu thế kỷ 20 (Nghiên cứu và Phát triển, số 1(99), 2013)', 'https://vjol.info.vn/ncpt-hue/article/view/9679'],
    ],
    body: `
Đầu thế kỷ XX, khi đô thị lớn lên, các gánh hát rời sân đình, rạp tạm để vào **nhà hát có sân khấu hộp, màn, phông cảnh, ánh sáng, vé bán**. Cả ba dòng sân khấu truyền thống — chèo, tuồng, nhạc tài tử — đều đổi mình, và từ nhạc tài tử sinh ra một thể loại mới: **cải lương**. Quay lại đề cương [[am-nhac-viet-nam-cuoi-the-ky-xix-1975]]; bài nền về từng thể loại: [[cheo]], [[tuong]], [[cai-luong]].

Giáo trình tóm ba dòng trong một bảng, thư viện giữ nguyên khung ấy:

| Dòng | Các dạng nửa đầu thế kỷ XX |
|---|---|
| Chèo | chèo cổ → **chèo văn minh** (giáo trình ghi 1907) → **chèo cải lương** (giáo trình ghi 1923) |
| Tuồng | tuồng cổ → **tuồng cải cách** (sân khấu kiểu Tây) → **hát bội pha cải lương**, **tuồng Tàu**, tuồng cương |
| Cải lương | ra đời khoảng **1917 – 1918** → cải lương tuồng Tàu (thập niên 1930) → cải lương tuồng xã hội; Hồ Quảng; kiếm hiệp |

## Chèo: từ sân đình vào rạp
Cuối thế kỷ XIX, ở các thành phố lớn miền Bắc đã có gánh chèo và rạp chèo; chèo mượn một số điệu hát và vai của tuồng.

**Chèo văn minh.** Theo giáo trình, năm **1907** một số nghệ sĩ đề xướng "chèo văn minh": lúc đầu chắp vá trò cũ, thêm những bài hát "mùi" hơn; lược bỏ chỗ rườm rà, lời gần ngôn ngữ thành thị; nội dung xoay quanh thuyết nhân quả, định mệnh. Wikipedia chỉ ghi chung "đầu thế kỷ 20, chèo được đưa lên sân khấu thành thị trở thành chèo văn minh", không nêu năm; một nghiên cứu ở Đại học Đà Lạt coi chèo văn minh là bước chuyển từ lối diễn theo phường hội, theo mùa vụ sang **sân khấu cố định**. Năm 1907 vì thế là mốc **chưa đối chiếu**.

**Dàn nhạc.** Theo giáo trình, dàn chèo cổ có trống, mõ, thanh la, hồ, nhị, sáo; vào thành thị thêm **tam, nguyệt, bầu**; nhiều nơi chỉ còn trống cái, trống chầu, trống cơm, mõ hoặc phách (song loan), nhị; chèo văn minh pha tuồng thêm kèn bóp, sáo, nguyệt.

### Nguyễn Đình Nghị và chèo cải lương
**Nguyễn Đình Nghị** (1883 – 1954, "Trùm Nghị"), quê Thụy Lôi, Tiên Lữ, Hưng Yên, đi từ chèo sân đình, qua chèo văn minh, tới **chèo cải lương** — Wikipedia gọi ông là người khai sinh trào lưu này; Hà Nội Mới gọi ông là "chiếc gạch nối giữa chèo cổ và chèo mới". Ông khởi đầu làm hậu đài ở rạp **Sán Nhiên Đài**, rồi làm soạn giả, dàn dựng; trong thập niên 1920 cải tổ Sán Nhiên Đài và **Cải lương hí viện** — hai rạp lớn nhất Hà Nội khi ấy — thành nơi diễn chèo cải lương; lập và điều hành các ban Tự Lập, Nghị Lập, Đức Thịnh… Giáo trình ghi mốc đề xuất "chèo cải lương" là **1923**; Wikipedia chỉ nói thập niên 1920 – 1930.

Những cải cách (tổng hợp Wikipedia và giáo trình):
- **Văn bản hoá:** ghi các vở thành kịch bản viết, chuyển chèo từ văn chương truyền miệng sang văn bản; để lại khoảng **60 kịch bản** — nổi tiếng nhất là loạt *Năm trận cười* (*Một trận cười* 1924, *Trận cười thứ hai* 1924, *thứ ba* 1925, *thứ tư* 1925, *Thiên chúa giáng sinh* 1926).
- **Cấu trúc kịch:** chia vở thành **hồi, đoạn, cảnh**; **bỏ lớp giáo đầu** rườm rà, thay bằng lời tóm tắt đọc trước buổi diễn.
- **Diễn xuất:** diễn viên thuộc lời từng chữ; bỏ bớt điệu múa, dùng động tác tự nhiên như đời sống; theo giáo trình, ở vở mang tính tôn giáo ông bỏ cả vai hề, lớp hề, tiếng đế.
- **Âm nhạc:** thêm đàn nguyệt, thập lục, đàn bầu, đàn tam, tiêu vào dàn nhạc; dùng dân ca nhiều vùng, làn điệu ca Huế, bài bản Trung Quốc và cả bài hát Tây.
- **Nội dung:** theo giáo trình có khoảng 20 vở soạn lại và 20 vở mới, phê phán phong hoá suy đồi, hô hào giữ đạo đức cũ. Năm 1931 vở *Kêu trời rằng oan* có câu yêu nước khiến ông bị Pháp giam gần hai tháng.

**Phê bình.** Các nghiên cứu nêu nhược điểm: nhân vật và cốt truyện lặp lại, lấy "số mệnh" giải thích mọi việc; lối tả thực mượn của kịch Tây làm mất tính **ước lệ** của chèo; lạm dụng hề thô (Wikipedia). Sau 1954, chèo được phục hồi theo hướng trở lại chèo cổ — bài [[cheo]].

## Tuồng: cải cách, pha cải lương, tuồng Tàu
Theo giáo trình (phần này **chưa tìm được nguồn công khai chi tiết**; bài nền ở [[tuong]]):
- **Tuồng cải cách:** sân khấu có màn buông, phông cảnh, ánh sáng, y phục cầu kỳ; nội dung mở rộng do ảnh hưởng kịch Pháp; nhiều vở dựa vào **lịch sử Việt Nam**, ca ngợi lòng yêu nước — trang phục lối xưa nhưng **nói lối rõ ràng** thay vì hát nam, hát khách.
- **Dàn nhạc:** các loại nhị, sáo tăng; nhạc cụ gõ giảm.
- **Miền Nam:** các đoàn hát Tiều (Triều Châu) diễn ở nông thôn khiến hát bội phần nào chịu ảnh hưởng hí khúc Trung Hoa; xuất hiện gánh **hát bội pha cải lương** chiều thị hiếu. Miền Bắc lại theo lối tuồng Sài Gòn "hoạt bát, tự do hơn".
- **Thập niên 1930:** tuồng cương theo truyện Trung Hoa (*Tam quốc*, *Thuỷ hử*, *Đông Chu liệt quốc*), dùng nhiều nói suông.

## Cải lương: một thể loại mới
### Từ đờn ca tài tử lên sân khấu
Cải lương hình thành ở Nam Bộ từ [[don-ca-tai-tu|đờn ca tài tử]] và dân ca đồng bằng sông Cửu Long. Nhóm tài tử vốn chơi ở tư gia — giỗ, tang, cưới — chưa lên sân khấu. Nguyễn Đức Hiệp và Nguyễn Lê Tuyên (2013) dựa trên tư liệu Pháp chỉ ra hát bội và nhạc tài tử đã nhiều lần biểu diễn ở các **hội chợ quốc tế tại Pháp**, sớm nhất là Paris **1889**; về nước, nghệ sĩ tự tin hơn khi diễn trước công chúng — mở đường cho nhạc tài tử và **ca ra bộ** lên sân khấu.

| Mốc | Sự kiện | Nguồn |
|---|---|---|
| 1906 | Ban tài tử **Nguyễn Tống Triều** (Tư Triều) dự hội chợ thuộc địa ở Marseille | Wikipedia (chú thích ảnh). Giáo trình ghi **1911**, triển lãm ở Pháp — hai nguồn **lệch nhau** |
| khoảng 1910 | Ban Tư Triều diễn trên sân khấu rạp Casino, Mỹ Tho | Wikipedia (theo Vương Hồng Sển) |
| 1915 – 1916 | **Ca ra bộ** ở Vĩnh Long: Tống Hữu Định (**Phó Mười Hai**) cho người vừa ca vừa ra bộ — giáo trình ghi "ba người thủ vai" | Wikipedia, giáo trình |
| 1917 | André Thận (Lê Văn Thận) ở Sa Đéc lập gánh, thêm các màn ca ra bộ; vở *Vì nghĩa quên nhà* của nhóm Cải lương kịch xã | Wikipedia; Trần Nhật Vy |
| 1918 | **Năm Tú** (Châu Văn Tú) ở Mỹ Tho mua lại gánh, nhờ Trương Duy Toản soạn tuồng — *Kim Vân Kiều*; giáo trình kể thêm *Lục Vân Tiên* | Wikipedia; giáo trình |
| 16/11/1918 | Tuồng *Gia Long tẩu quốc* diễn ở Nhà hát Tây Sài Gòn — Vương Hồng Sển coi là dấu mốc | Wikipedia |
| 1920 | Chữ "cải lương" xuất hiện trên bảng hiệu gánh **Tân Thịnh** (có tài liệu ghi 1922), kèm câu đối "Cải cách hát ca theo tiến bộ / Lương truyền tuồng tích sánh văn minh" | Trần Văn Khê, theo Wikipedia và các bài tổng hợp |
| 1922 | *Kim Vân Kiều* của gánh Năm Tú có bài vọng cổ | Trần Nhật Vy |

**Cải lương ra đời năm nào?** Không có câu trả lời duy nhất. Vương Hồng Sển tự nêu nhiều mốc (1915, 1916, 1918) và nói "cải lương hình thành lúc nào cũng không ai biết rõ". Trần Nhật Vy (2018) cho rằng chọn **1918** để kỷ niệm "trăm năm" là **thiếu cơ sở**: nếu tính gánh hay vở đầu tiên thì là **1917**; tính gánh hát chính thức đầu tiên thì **1919** (gánh Năm Thận); tính vở đầu tiên có vọng cổ thì **1922**. Giáo trình theo cách phổ biến: gánh thầy Năm Tú khai sinh cải lương năm **1917**, hai vở đầu tiên năm **1918**. Về tên gọi, Trần Văn Khê giải thích "cải" là sửa đổi, "lương" là tốt đẹp — "sửa đổi cho tốt hơn".

### Khác hát bội ở đâu
Cải lương vẫn kế thừa hát bội về tuồng tích, động tác, lối diễn cách điệu, nhưng **hạ màn sau mỗi lớp** và có **đờn giữa hai màn**; âm nhạc là bài bản tài tử với các hơi bắc, nam, oán ([[hoi-trong-nhac-tai-tu-cai-luong]]), về sau là **vọng cổ** ([[cai-luong]]).

### Các dòng cải lương thập niên 1920 – 1940
| Dòng | Đặc điểm | Ghi chú nguồn |
|---|---|---|
| Truyện Nôm, phóng tác | *Kim Vân Kiều*, *Lục Vân Tiên*; phỏng kịch Pháp | Wikipedia |
| **Cải lương tuồng Tàu** | Dàn nhạc tài tử thêm **nhạc cụ gõ và kèn hát bội**; khai thác nói lối và bài bản cải lương | Giáo trình |
| **Cải lương Hồ Quảng** | Giáo trình ghi ra đời **1935 – 1936**, dùng bài Quảng Đông (*Xái phỉ*, *Nhị hoàng*…), thêm **kèn Hồ Quảng** | Năm 1935 – 1936 **chưa đối chiếu**; Wikipedia chỉ nói về sau có thêm tuồng Hồ Quảng |
| **Cải lương xã hội** | Từ thập niên 1930, viết về xã hội Việt Nam (vd. *Đời cô Lựu*); giáo trình nhấn tinh thần dân tộc, hiện thực phê phán, gắn đoàn của **Năm Châu** | Wikipedia; giáo trình |
| **Kiếm hiệp** | Từ khoảng 1934, đi đầu là gánh Nhạn Trắng (Wikipedia); giáo trình: phát triển mạnh cuối thập niên 1930 – 1940 | Wikipedia; giáo trình |

Từ 1930 – 1934 cải lương lan ra Bắc, với các tên tuổi Năm Phỉ, Phùng Há, Bảy Nhiêu, Năm Châu (Wikipedia).

## Đọc bằng tai nhạc lý
Điểm chung của ba cuộc cải cách là **sân khấu hộp kiểu Tây**: màn, cảnh, hồi, vé — kéo theo lối kể chuyện tuyến tính và diễn xuất tả thực. Về âm nhạc, các dàn nhạc đều **thêm dây – hơi, bớt gõ**, và mở cửa cho làn điệu ngoại vùng, ngoại quốc. Cùng lúc ấy tân nhạc bắt đầu bằng "bài ta theo điệu Tây" ([[bai-ta-theo-dieu-tay]]) — nhiều bài đầu tiên được hát chen trong cải lương.

## Câu hỏi và bài tập
1. Kẻ bảng so sánh chèo cổ và chèo cải lương ở năm mặt: kịch bản, cấu trúc, diễn xuất, dàn nhạc, nội dung.
2. Vì sao Trần Nhật Vy cho rằng chọn năm 1918 là thiếu cơ sở? Bạn chọn tiêu chí nào để xác định "năm ra đời" của một thể loại?
3. Nghe một trích đoạn cải lương tuồng cổ và một trích đoạn cải lương xã hội; ghi lại khác biệt về dàn nhạc và cách hát.
`,
  },
  {
    slug: 'ba-dong-ca-khuc-1930-1945',
    title: 'Ba dòng ca khúc 1930 – 1945: hùng ca yêu nước, lãng mạn, cách mạng',
    category: 'vietnam',
    aliases: ['ba dòng ca khúc', 'ba dòng ca khúc nửa đầu thế kỷ 20', 'hùng ca yêu nước', 'ca khúc lãng mạn tiền chiến', 'ca khúc cách mạng trước 1945', 'motif thu', 'motif xuân', 'khuynh hướng thôn dã', 'Dân ca Xô viết Nghệ Tĩnh', 'Cùng nhau đi hồng binh'],
    summary: 'Cách chia tân nhạc trước 1945 thành ba dòng theo giáo trình đại học: hùng ca yêu nước (ba mức cảm xúc — tươi sáng, xông pha, uất hận; đề tài lịch sử chống ngoại xâm; lời biền ngẫu), lãng mạn (bi ai với motif "thu", thoát ly với motif "xuân", thôn dã; phổ thơ Thơ mới; chất thứ, ngũ cung, trường ca – hoạt cảnh) và cách mạng (từ đặt lời theo bài nước ngoài, lời mới cho dân ca, tới nhạc sĩ chuyên nghiệp ngay trước 1945).',
    refs: [
      ['Wikipedia tiếng Việt — Nhạc tiền chiến', 'https://vi.wikipedia.org/wiki/Nh%E1%BA%A1c_ti%E1%BB%81n_chi%E1%BA%BFn'],
      ['Wikipedia tiếng Việt — Hoàng Quý', 'https://vi.wikipedia.org/wiki/Ho%C3%A0ng_Qu%C3%BD'],
      ['Hội Nhạc sĩ Việt Nam — Những nhóm sáng tác đầu tiên vào thuở bình minh của tân nhạc Việt Nam thập niên 1930', 'https://hoinhacsi.vn/news/nhung-nhom-sang-tac-dau-tien-vao-thuo-binh-minh-cua-tan-nhac-viet-nam-thap-nien-1930'],
      ['Báo Đại Đoàn Kết — Những giai điệu tự hào ra đời trong thời kỳ khai sinh đất nước', 'https://daidoanket.vn/nhung-giai-dieu-tu-hao-ra-doi-trong-thoi-ky-khai-sinh-dat-nuoc.html'],
      TIEN_TRINH,
    ],
    body: `
Giáo trình chia ca khúc Việt Nam trước 1945 thành **ba dòng**: hùng ca yêu nước, lãng mạn và cách mạng. Đây là cách chia của sách giáo khoa nhạc viện (có lẽ bắt nguồn từ các công trình tổng kết của Viện Âm nhạc); các nguồn khác thường gộp hai dòng đầu là [[nhac-tien-chien|nhạc tiền chiến]] và tách dòng thứ ba là [[nhac-cach-mang|nhạc cách mạng]]. **Năm sáng tác các bài dưới đây lấy theo giáo trình**; nhiều bài chưa có bản in đầu tiên để đối chiếu. Đề cương học phần: [[am-nhac-viet-nam-cuoi-the-ky-xix-1975]]; bối cảnh ra đời của tân nhạc: [[lich-su-tan-nhac-viet-nam]], [[nhom-sang-tac-tan-nhac-dau-tien]].

| Dòng | Thời điểm | Nội dung | Đại diện |
|---|---|---|---|
| Hùng ca yêu nước | sau 1930, mạnh 1939 – 1945 | lịch sử chống ngoại xâm, kêu gọi thanh niên | [[luu-huu-phuoc]], [[hoang-quy]], Văn Cao |
| Lãng mạn | hình thành khoảng 1935 – 1938 | tình yêu, thiên nhiên, mộng mơ, đồng quê | [[van-chung]], [[le-thuong]], Lê Yên, Doãn Mẫn, [[dang-the-phong]] |
| Cách mạng | khoảng 1930 → 1945 | cổ động đấu tranh giai cấp, chống thực dân | [[dinh-nhu]], Nguyễn Văn Long; ngay trước 1945: Văn Cao, [[do-nhuan]], Nguyễn Đình Thi |

## 1. Dòng lãng mạn
Theo giáo trình, trào lưu lãng mạn hình thành khoảng **1935 – 1938** với *Bẽ bàng* (1935), *Nghệ sĩ hành khúc* (1936) của Lê Yên; *Tiếng sáo chăn trâu* (1935), *Bên hồ liễu* (1936), *Bóng ai qua thềm* (1937) của Văn Chung; *Xuân năm xưa* (1936) của Lê Thương; *Gió thu*, *Tiếng hát đêm thu* (1938), *Biệt ly* (1939) của Doãn Mẫn.

**Gắn với Thơ mới.** Văn chương lãng mạn (Tự lực văn đoàn, phong trào Thơ mới) đi vào ca khúc qua đề tài và lời; nhiều bài **phổ thơ** hoặc lấy cảm hứng từ thơ: *Màu thời gian* (Nguyễn Xuân Khoát, thơ Đoàn Phú Tứ), *Tiếng thu* (Phạm Duy, thơ Lưu Trọng Lư), *Cô lái đò* (Nguyễn Đình Phúc, thơ Nguyễn Bính), *Tiếng trúc tuyệt vời* (Văn Chung, thơ Thế Lữ).

Giáo trình chia dòng lãng mạn thành ba khuynh hướng:

| Khuynh hướng | Đặc điểm | Motif | Ví dụ |
|---|---|---|---|
| **Bi ai, thương cảm** — chiếm phần lớn | nỗi buồn da diết, cô đơn hiu quạnh | **thu** | *Giọt mưa thu* (Đặng Thế Phong), *Lệ thu* (Nguyễn Đình Phúc) |
| **Thoát ly, mộng mơ** | ngợi ca tự do phóng túng, lãng du | **xuân** | *Nghệ sĩ hành khúc* (Lê Yên), *Đoàn lữ nhạc* (Đỗ Nhuận), *Lời du tử* (Nguyễn Đình Phúc); *Bướm hoa* (Nguyễn Văn Thương), *Hồn xuân* (Nguyễn Xuân Khoát), *Vườn xuân* (Lê Yên), *Hương xuân* (Văn Chung) |
| **Thôn dã** | cảnh làng quê, âm hưởng dân gian, cổ truyền | làng, đồng | *Cô láng giềng*, *Chiều quê* (Hoàng Quý), *Thằng Cuội* (Lê Thương), *Con cò đi ăn đêm* (Văn Chung), *Cô hái mơ* (Phạm Duy) |

**Âm nhạc.** Phần lớn là tình ca **giọng thứ**; một số bài dùng [[am-giai-ngu-cung|ngũ cung]] dân gian; có bài viết theo lối **ballade** hay **trường ca** (*Thiên Thai*, *Trương Chi* của Văn Cao) hoặc mở thành **hoạt cảnh** (*Hòn vọng phu* của Lê Thương, *Tục lụy* của Lưu Hữu Phước). Đây là các ca khúc dài nhiều đoạn, đổi nhịp, đổi giọng — tiền thân của [[the-loai-ca-khuc-1945-1954|trường ca]] thời kháng chiến.

## 2. Dòng hùng ca yêu nước
Phong trào yêu nước sau 1930 sinh ra dòng hùng ca. Ở miền Bắc, Hoàng Quý lập nhóm **Đồng Vọng** (1939) ở Hải Phòng; ở miền Nam, Lưu Hữu Phước viết cho phong trào sinh viên — *Tiếng gọi thanh niên*, *Xếp bút nghiên*, *Lên đàng* (1941 – 1943) — xem [[nhom-sang-tac-tan-nhac-dau-tien]].

**Ngôn ngữ.** Lời theo lối **biền ngẫu** với biểu tượng truyền thống ("giống Tiên Rồng", "giống Lạc Hồng", "sơn hà nguy biến", "xếp bút nghiên") pha khẩu ngữ ("sao cho cả thảy", "hăng hái cố gắng luôn").

**Đề tài.**
- Lịch sử chống ngoại xâm phương Bắc: *Bóng cờ lau*, *Nước non Lam Sơn* (Hoàng Quý), *Hội nghị Diên Hồng* (Lưu Hữu Phước), *Thăng Long hành khúc* (Văn Cao).
- Thời cuộc, kêu gọi kết đoàn: *Tiếng chim gọi đàn*, *Vui ca lên* (Hoàng Quý), *Một ra đi là không trở về* (Lương Ngọc Châu), *Tiếng gọi thanh niên*, *Xếp bút nghiên*, *Lên đàng* (Lưu Hữu Phước).

**Ba mức cảm xúc** — khung phân tích của giáo trình:

| Mức | Ví dụ | Dấu hiệu âm nhạc thường gặp |
|---|---|---|
| Tươi sáng, lạc quan | *Nước non Lam Sơn*; *Bài ca thiếu nữ Việt Nam*, *Đi hội đền Hùng* (Lưu Hữu Phước) | giọng trưởng, nhịp vừa, nhảy quãng 4 – 5 đi lên |
| Xông pha, dấn thân | *Bạch Đằng giang*, *Ải Chi Lăng*, *Hội nghị Diên Hồng*; *Trên sông Bạch Đằng*, *Bóng cờ lau*; *Thăng Long hành khúc* | nhịp hành khúc 2/4 – 4/4, tiết tấu chấm dôi, âm hình kèn hiệu |
| Đau thương, uất hận | *Hờn sông Gianh*, *Người xưa đâu tá*, *Hồn tử sĩ* (Lưu Hữu Phước); *Lời cha già* (Đỗ Nhuận) | giọng thứ, nhịp chậm, kiểu ai điếu |

Cột cuối là nhận xét khái quát của người biên soạn để bạn nghe đối chiếu, không phải trích giáo trình.

## 3. Dòng ca khúc cách mạng
Theo giáo trình, dòng này đi qua hai thời kỳ: **sáng tác không chuyên** → **sáng tác chuyên nghiệp**.
- **Khoảng 1930:** những bài đầu tiên như *Cùng nhau đi hồng binh* của **Đinh Nhu** (bài [[dinh-nhu]]), *Tam bình* của Trần Văn Úc, *Nội chiến cách mạng*, *Tiến quân* (khuyết danh).
- **Đặt lời theo bài nước ngoài:** Nguyễn Văn Long dịch và đặt lời *Ca Quốc tế cộng sản*, *Ca chống khủng bố trắng*, *Ca thanh niên xích vệ* theo các bài ca cách mạng châu Âu.
- **Lời mới cho dân ca:** tiêu biểu là các bài dân ca thời **Xô viết Nghệ Tĩnh** (1930 – 1931).
- **"Bài ca" không có cao độ:** những bài thơ ghi kèm hướng dẫn hát theo điệu quen — giáo trình nêu *Ca tự vệ*, *Hòn đá to*, *Bài ca du kích*, *Ca sợi chỉ*, *Ca phụ nữ*, *Ca dân cày* của Hồ Chí Minh.
- **Đặc điểm:** người viết phần lớn không chuyên nên **nội dung được chú trọng hơn nghệ thuật**; bài đơn giản, dễ nhớ, lan truyền **truyền miệng** nên có nhiều **dị bản** như dân ca.
- **Ngay trước 1945:** nhạc sĩ chuyên nghiệp tham gia — *Du kích ca* (Đỗ Nhuận), *Tiến quân ca* (Văn Cao, 1944), *Diệt phát xít* (Nguyễn Đình Thi), *Cảm tử quân* (Hoàng Quý). Xem thêm [[nhac-cach-mang]], [[van-cao]].

## Ba dòng gặp nhau
Ranh giới không cứng: Văn Cao viết cả *Thiên Thai* (lãng mạn), *Thăng Long hành khúc* (hùng ca) lẫn *Tiến quân ca* (cách mạng); Hoàng Quý viết cả *Chiều quê* lẫn *Cảm tử quân*. Sau 1945, phần lớn nhạc sĩ của hai dòng đầu chuyển sang sáng tác kháng chiến — [[the-loai-ca-khuc-1945-1954]].

## Câu hỏi và bài tập
1. Kể ba khuynh hướng của dòng lãng mạn, mỗi khuynh hướng hai bài, và chỉ ra motif.
2. Nghe *Bạch Đằng giang* và *Hồn tử sĩ*: so sánh giọng, nhịp, tiết tấu để minh hoạ hai mức cảm xúc khác nhau.
3. Vì sao ca khúc cách mạng thời kỳ đầu có nhiều dị bản? Liên hệ với cách lưu truyền của [[dan-ca-viet-nam|dân ca]].
`,
  },
  {
    slug: 'the-loai-ca-khuc-1945-1954',
    title: 'Âm nhạc 1945 – 1954: sự kiện, thiết chế và bảy thể loại ca khúc',
    category: 'vietnam',
    aliases: ['âm nhạc kháng chiến chống Pháp', 'thể loại ca khúc 1945 1954', 'Đề cương văn hoá 1943', 'dân tộc khoa học đại chúng', 'Hội nghị Văn hoá toàn quốc 1948', 'Hội Văn nghệ Việt Nam', 'Đoàn nhạc sĩ Việt Nam', 'chính ca', 'trường ca', 'ca cảnh', 'ca kịch kháng chiến', 'đoàn văn công', 'đoàn Anh Vũ'],
    summary: 'Âm nhạc chín năm kháng chiến theo dàn bài giáo trình, đối chiếu nguồn: Đề cương văn hoá 1943 với ba nguyên tắc dân tộc – khoa học – đại chúng, các hội nghị văn hoá 1946 và 1948, Hội Văn nghệ Việt Nam, đoàn văn công, trường âm nhạc Việt Bắc; bảy thể loại ca khúc — hành khúc, chính ca, hài hước, trữ tình, thiếu nhi, trường ca, ca cảnh – ca kịch — với ví dụ và đặc điểm.',
    refs: [
      ['Báo Văn hoá — Đề cương về văn hoá Việt Nam 1943: mở đường và dẫn dắt', 'https://baovanhoa.vn/de-cuong-van-hoa-viet-nam-1943/mo-duong-va-dan-dao-56262.html'],
      ['Báo Văn hoá — Từ Hội nghị Văn hoá toàn quốc năm 1946 tới Hội nghị Văn hoá toàn quốc năm 2021', 'https://baovanhoa.vn/chien-luoc-phat-trien-van-hoa-viet-nam-den-nam-2030/tu-hoi-nghi-van-hoa-toan-quoc-nam-1946-toi-hoi-nghi-van-hoa-toan-quoc-nam-2021-79911.html'],
      ['Báo Văn hoá — Bác Hồ với các hội nghị văn hoá văn nghệ toàn quốc', 'https://baovanhoa.vn/hoc-tap-va-lam-theo-bac/bac-ho-voi-cac-hoi-nghi-van-hoa-van-nghe-toan-quoc-70628.html'],
      ['Wikipedia tiếng Anh — Trường ca Sông Lô', 'https://en.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_ca_S%C3%B4ng_L%C3%B4'],
      MINH_CHAU,
    ],
    body: `
Sau Cách mạng tháng Tám, âm nhạc chủ yếu là **ca khúc**, phổ biến bằng **truyền miệng, truyền ngón**, phục vụ kháng chiến. Bài tổng quan cùng giai đoạn: [[tan-nhac-1945-1954]], [[am-nhac-viet-nam-1945-1975]]; đề cương học phần: [[am-nhac-viet-nam-cuoi-the-ky-xix-1975]].

## Sự kiện và thiết chế
| Năm | Sự kiện | Nguồn, ghi chú |
|---|---|---|
| 2/1943 | **Đề cương về văn hoá Việt Nam** (Trường Chinh soạn, thông qua ở Võng La, Đông Anh) nêu ba nguyên tắc **dân tộc hoá – khoa học hoá – đại chúng hoá**; giáo trình viết gọn thành phương châm "Dân tộc – Khoa học – Đại chúng" | Báo Văn hoá |
| 1944 | Đoàn **Anh Vũ** ở Hà Nội (kiến trúc sư Võ Đức Diên chủ trì) gồm Thế Lữ, Lưu Quang Thuận, hoạ sĩ Phạm Văn Đôn, nhạc sĩ Nguyễn Xuân Khoát, Bùi Công Kỳ, Văn Chung, Đỗ Nhuận… | Theo giáo trình |
| 25/9/1945 | Thành lập **Đoàn Âm nhạc Việt Nam**; hai đoàn quân nhạc Trung Bộ và Bắc Bộ (về sau hợp nhất); **Hội Khuyến nhạc** (có từ trước cách mạng) tiếp tục mở lớp lý thuyết, nhạc cụ và ra báo *Khuyến nhạc* | Theo giáo trình; Hội Khuyến nhạc của Nguyễn Văn Giệp có ở [[nhom-sang-tac-tan-nhac-dau-tien]] |
| 11/1946 | **Hội nghị Văn hoá toàn quốc lần thứ nhất** ở Hà Nội | Báo Văn hoá |
| 16 – 20/7/1948 | **Hội nghị Văn hoá toàn quốc lần thứ hai** ở Đào Giã (Thanh Ba, Phú Thọ) | Báo Văn hoá. Giáo trình gọi đây là "lần thứ nhất" — **chưa khớp** |
| 23 – 25/7/1948 | **Hội nghị Văn nghệ toàn quốc** ở Yên Kỳ (Hạ Hoà, Phú Thọ), khoảng 80 văn nghệ sĩ → thành lập **Hội Văn nghệ Việt Nam** | Báo Văn hoá |
| sau 1948 | **Đoàn nhạc sĩ Việt Nam** trong Hội Văn nghệ: Nguyễn Xuân Khoát, Văn Chung, Nguyễn Đình Phúc, Đỗ Minh, Trần Ngọc Xương, Văn Thịnh, Xuân Hoà… | Theo giáo trình |
| cuối 1949 | **Trường trung cấp âm nhạc ở Việt Bắc** do Nguyễn Hữu Hiếu phụ trách, khoá ngắn trên ba tháng: nhạc cụ, hát chèo, lý thuyết — giáo trình coi là gốc của Trường Âm nhạc Việt Nam → Nhạc viện Hà Nội → Học viện Âm nhạc Quốc gia | Theo giáo trình, **chưa đối chiếu**; xem [[dao-tao-va-nghien-cuu-am-nhac-1945-1975]] |
| từ 1951 | Hình thành các **đoàn văn công**; tiếp xúc nghệ thuật Trung Quốc, Liên Xô → ca múa nhạc chuyên nghiệp | Theo giáo trình |

Ba nguyên tắc của Đề cương trở thành khung lý luận cho âm nhạc miền Bắc suốt ba mươi năm sau; Nguyễn Thị Minh Châu (2014) cho rằng giai đoạn 1954 – 1964 nhấn "khoa học", còn 1965 – 1975 nhấn "đại chúng".

## Bảy thể loại ca khúc
Giáo trình liệt kê bảy thể loại: **hành khúc, chính ca, hài hước, trữ tình, thiếu nhi, trường ca, ca cảnh – ca kịch**.

| Thể loại | Đặc điểm | Ví dụ (theo giáo trình) |
|---|---|---|
| **Hành khúc** | nhịp 2/4 hoặc 4/4, tiết tấu chấm dôi, lời kêu gọi; hát khi hành quân, mít tinh | *Đoàn Vệ quốc quân* (Phan Huỳnh Điểu), *Tiểu đoàn 307* (Nguyễn Hữu Trí), *Vì nhân dân quên mình* (Doãn Quang Khải), *Nam Bộ kháng chiến* (Tạ Thanh Sơn), *Hành quân xa* (Đỗ Nhuận) |
| **Chính ca** (hymn) | trang trọng, ca ngợi lãnh tụ, đảng, Tổ quốc; tiết tấu rộng | *Ca ngợi Hồ Chủ tịch* (Lưu Hữu Phước), *Chào mừng Đảng Lao động Việt Nam* (Đỗ Minh) |
| **Hài hước** | bài ngắn, vui, gần dân ca | *Hát mừng bộ đội chiến thắng* (Nguyễn Xuân Khoát), *Trâu ra* (Hải Châu), *Anh Ba Hưng* (Trần Kiết Tường) |
| **Trữ tình** | tình yêu, quê hương trong kháng chiến, chất dân ca vùng miền | *Dư âm* (Nguyễn Văn Tý), *Bên cầu biên giới* (Phạm Duy), *Tạ từ*, *Em đến thăm anh một chiều mưa* (Tô Vũ), *Sơn nữ ca* (Trần Hoàn) |
| **Thiếu nhi** | âm vực hẹp, nhịp rõ, lời giản dị | *Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng*, *Kim Đồng*, *Nhanh bước nhanh nhi đồng* (Phong Nhã), *Trung thu chèo thuyền* (Tống Ngọc Hạp), *Dung dăng dung dẻ* (Hùng Lân), *Đếm sao* (Văn Chung), *Con chim non* (Trần Hoàn) |
| **Trường ca** | ca khúc lớn nhiều đoạn, đổi nhịp, đổi giọng, kể một câu chuyện | *Trường ca Sông Lô* (Văn Cao — viết 1947, in 1948), *Bình ca* (Nguyễn Đình Phúc), *Người Hà Nội* (Nguyễn Đình Thi, 1947) |
| **Ca cảnh, ca kịch** | sân khấu hát, kế thừa sân khấu truyền thống, nội dung hiện thực kháng chiến | *Nàng Hồng kén chồng*, *Diệt sói lang* (Lưu Hữu Phước), *Sóng cả không ngã tay chèo* (Đỗ Nhuận) |

**Trường ca có gốc từ trước.** Trước 1945 đã có những bài dài diễn như hoạt cảnh hay liên khúc: *Hội nghị Diên Hồng* (Lưu Hữu Phước), *Thiên Thai*, *Trương Chi* (Văn Cao), *Hòn vọng phu* (Lê Thương) — xem [[ba-dong-ca-khuc-1930-1945]].

**Ca cảnh, ca kịch giai đoạn này** — nhận xét của giáo trình:
- **phụ thuộc vào ca khúc**: vở là chuỗi bài hát nối bằng lời thoại;
- nhạc nền **thiếu bề dày đa âm**, khí nhạc đóng vai rất phụ;
- tính kịch chưa được đề cao;
- **không có hát nói (recitative)**, thay bằng nói thường và nói vần.
Đây là điểm xuất phát để so với nhạc kịch thật sự sau 1954 — [[ca-kich-nhac-kich-vu-kich-1954-1975]].

## Câu hỏi và bài tập
1. Nêu bốn sự kiện thiết chế quan trọng nhất của âm nhạc 1945 – 1954 và giải thích vì sao.
2. Chọn một bài hành khúc và một bài trữ tình trong bảng; phân tích nhịp, giọng, âm vực, hình thức.
3. Vì sao ca kịch kháng chiến chưa phải là nhạc kịch? Dựa vào bốn nhận xét ở trên.
`,
  },
  {
    slug: 'ca-kich-nhac-kich-vu-kich-1954-1975',
    title: 'Ca cảnh, ca kịch, nhạc kịch và vũ kịch Việt Nam 1954 – 1975',
    category: 'vietnam',
    also: ['genres'],
    aliases: ['ca kịch', 'nhạc kịch Việt Nam', 'opera Việt Nam', 'vũ kịch Việt Nam', 'ballet Việt Nam', 'Cô Sao', 'Tấm Cám vũ kịch', 'Ngọn lửa Nghệ Tĩnh', 'Bên bờ Krông Pa', 'Người tạc tượng', 'Eugene Onegin Hà Nội 1961', 'Chúc thọ Bác Hồ'],
    summary: 'Bốn thể loại sân khấu âm nhạc ở miền Bắc 1954 – 1975: ca cảnh (chủ yếu cho thiếu nhi) và ca kịch nhiều về số lượng; nhạc kịch ít vở nhưng chuyên nghiệp — Eugene Onegin do nghệ sĩ Việt Nam dựng năm 1961, Cô Sao của Đỗ Nhuận (công diễn 1965) là opera Việt Nam đầu tiên, rồi Người tạc tượng, Bên bờ Krông Pa; vũ kịch từ Tấm Cám và Ngọn lửa Nghệ Tĩnh (1959) dưới sự hướng dẫn của chuyên gia Triều Tiên.',
    refs: [
      ['Báo Đại Đoàn Kết — Tình dường dài cho nhạc kịch Việt Nam', 'https://daidoanket.vn/tinh-duong-dai-cho-nhac-kich-viet-nam.html'],
      ['Green SM — Nhà hát Nhạc Vũ Kịch Việt Nam (lịch sử hình thành)', 'https://www.greensm.com/vn-vi/news/nha-hat-nhac-vu-kich-viet-nam'],
      MINH_CHAU,
      ['Báo Văn hoá — Đạo diễn Singapore dựng Tấm Cám', 'https://baovanhoa.vn/san-khau-mua/dao-dien-singapore-dung-tam-cam-44314.html'],
      TIEN_TRINH,
    ],
    body: `
Sau 1954, ở miền Bắc, ngoài ca khúc có thêm **ca kịch, nhạc kịch, vũ kịch**, nhạc cho kịch nói và điện ảnh. Đây là lần đầu các thể loại sân khấu âm nhạc kiểu châu Âu ([[opera]], [[ballet]]) được viết bởi nhạc sĩ Việt Nam. Đề cương: [[am-nhac-viet-nam-cuoi-the-ky-xix-1975]]; bối cảnh: [[tan-nhac-mien-bac-1954-1975]].

## So sánh bốn thể loại
Giáo trình so sánh:

| Thể loại | Số lượng | Trình độ | Ghi chú |
|---|---|---|---|
| **Ca cảnh** | nhiều | thấp hơn | chủ yếu cho **thiếu nhi** |
| **Ca kịch** | nhiều | chuyên nghiệp hơn giai đoạn trước | đề tài phong phú hơn, nhiều tác giả hơn |
| **Nhạc kịch** | ít (giáo trình ghi "4 vở được công diễn" ở chỗ này và "8 vở" ở chỗ khác — **tự mâu thuẫn**) | chuyên nghiệp nhất | cần dàn nhạc, ca sĩ opera |
| **Vũ kịch** | nhiều hơn nhạc kịch | ngang nhạc kịch | phổ biến hơn ở các đoàn nghệ thuật |

Tác giả âm nhạc thường **kiêm tác giả kịch bản**.

## Ca kịch
Khác ca kịch kháng chiến (chuỗi bài hát nối lời thoại — [[the-loai-ca-khuc-1945-1954]]), ca kịch sau 1954 có đề tài rộng hơn, nghệ thuật chuyên nghiệp hơn. Theo giáo trình, tiêu biểu: *Qua cầu sông Cái* (Lê Yên); *Chú Tễu*, *Ông Đá*, *Quả dưa đỏ* (Đỗ Nhuận); *Núi rừng nổi dậy* (Trương Châu Mỹ); *Nhật ký sông Thương*, *Đảo xa* (Văn Ký).

## Nhạc kịch (opera)
**Dựng opera nước ngoài trước.** Nghệ sĩ Việt Nam dựng *Eugene Onegin* của Tchaikovsky năm **1961** (Nguyễn Thị Minh Châu) và một vở của Triều Tiên (giáo trình ghi *Núi rừng hãy lên tiếng*) — qua đó đào tạo ca sĩ, dàn nhạc, đạo diễn cho opera.

| Vở | Tác giả | Năm | Nguồn, ghi chú |
|---|---|---|---|
| ***Cô Sao*** | [[do-nhuan|Đỗ Nhuận]] | viết 1960 – 1963, công diễn **1965** ở Hà Nội | opera Việt Nam đầu tiên (Đại Đoàn Kết, Minh Châu) |
| *Người tạc tượng* | Đỗ Nhuận | **1971** theo nguồn Việt; một bài tiếng Anh ghi 1975 | nguồn **lệch nhau** |
| *Bên bờ Krông Pa* | Nhật Lai | 1968 | đề tài Tây Nguyên |
| *Bông sen* | [[hoang-viet|Hoàng Việt]] | — | theo giáo trình; **chưa đối chiếu** năm |

**Đặc điểm âm nhạc** (khái quát của người biên soạn khi đối chiếu với opera châu Âu): dùng **aria** và **hợp xướng** kiểu châu Âu nhưng giai điệu lấy chất liệu dân ca vùng của câu chuyện (ví dụ chất Tây Nguyên trong *Bên bờ Krông Pa*); **hát nói (recitative)** là phần khó nhất vì thanh điệu tiếng Việt — đây cũng là chỗ ca kịch kháng chiến thay bằng nói thường.

## Vũ kịch (ballet)
- **Khởi đầu:** thơ múa *Chúc thọ Bác Hồ* của Lưu Hữu Phước (theo giáo trình).
- **1959:** dưới sự chỉ đạo của chuyên gia Triều Tiên (giáo trình ghi tên Kim Tế Hoàng), hai vũ kịch lớn ra đời: ***Tấm Cám*** (nhạc [[nguyen-van-thuong|Nguyễn Văn Thương]] và Văn Chi) và ***Ngọn lửa Nghệ Tĩnh*** (nhạc của một số nhạc sĩ quân đội — Lương Ngọc Trác, Huy Thục, Nguyễn Thành…). Năm 1959 khớp với Nguyễn Thị Minh Châu.
- Tiếp theo: *Rừng thương núi nhớ* (Trần Minh, Đàm Linh), *Chuyện ông Gióng* (Lệ Cung, Nguyễn Xuân Khoát)…
- Tác giả vũ kịch đông hơn nhạc kịch: Nguyễn Văn Thương, Lương Ngọc Trác, Huy Thục, Nguyễn Thành, Nguyễn Đình Tích, Đàm Linh, Hoàng Vân…

## Thiết chế phía sau
Các thể loại này cần dàn nhạc, hợp xướng, đoàn múa chuyên nghiệp — cùng ra đời trong giai đoạn: **Dàn nhạc Giao hưởng Việt Nam** (6/8/1959, 114 người theo lịch sử Nhà hát Nhạc Vũ Kịch), đoàn **hợp xướng** (1961), đoàn **múa** (khoảng 1964); về sau hợp lại thành Nhà hát Nhạc Vũ Kịch Việt Nam. Chi tiết: [[dao-tao-va-nghien-cuu-am-nhac-1945-1975]].

## Câu hỏi và bài tập
1. So sánh ca kịch kháng chiến và nhạc kịch *Cô Sao* ở ba mặt: vai trò dàn nhạc, hát nói, tính kịch.
2. Vì sao opera Việt Nam ra đời sau khi đã dựng *Eugene Onegin*? Bàn về vai trò của việc dựng tác phẩm nước ngoài trong đào tạo.
3. Tìm nghe một trích đoạn *Tấm Cám* hoặc *Cô Sao*; ghi lại chất liệu dân ca bạn nhận ra.
`,
  },
  {
    slug: 'khi-nhac-thinh-phong-giao-huong-1954-1975',
    title: 'Khí nhạc thính phòng và giao hưởng Việt Nam 1954 – 1975',
    category: 'vietnam',
    also: ['genres'],
    aliases: ['nhạc thính phòng Việt Nam', 'giao hưởng Việt Nam', 'khí nhạc Việt Nam 1954 1975', 'thơ giao hưởng Việt Nam', 'Quê hương Hoàng Việt', 'Đợi chờ Tạ Phước', 'Thành đồng Tổ quốc', 'Tổ khúc giao hưởng Điện Biên', 'Lửa cách mạng', 'âm nhạc bác học Việt Nam'],
    summary: 'Khí nhạc kiểu châu Âu ở miền Bắc 1954 – 1975: thể loại thính phòng (prelude, vũ khúc, scherzo, hát ru, rhapsodie, fantaisie, biến tấu, sonate, tứ tấu dây) và giao hưởng (thơ giao hưởng, giao hưởng sonate, tổ khúc); năm đặc điểm so với nhạc thính phòng cổ truyền — ký âm phương Tây, nhịp 2 – 3 – 4, hình thức cổ điển, hoà âm chủ điệu, điệu thức trưởng – thứ; các tác phẩm mốc từ Đợi chờ (1958) tới Quê hương (1964).',
    refs: [
      MINH_CHAU,
      ['Nguyễn Thị Nhung — Âm nhạc thính phòng – giao hưởng Việt Nam: sự hình thành và phát triển (Viện Âm nhạc, 2001) — được các nghiên cứu sau dẫn; người biên soạn chưa đọc trực tiếp', 'https://vienamnhac.vn'],
      TIEN_TRINH,
    ],
    body: `
Giáo trình chia khí nhạc miền Bắc 1954 – 1975 thành ba nhóm: **thính phòng**, **giao hưởng**, và **tác phẩm cho nhạc cụ cổ truyền**. Đề cương: [[am-nhac-viet-nam-cuoi-the-ky-xix-1975]]; bài tổng quan: [[nhac-co-dien-viet-nam]], [[tan-nhac-mien-bac-1954-1975]].

## "Thính phòng" mới và cũ
Giáo trình lưu ý: đây là loại **âm nhạc thính phòng mới**, có ở Việt Nam từ thế kỷ XX, chịu ảnh hưởng phương Tây (nhất là **Pháp và Nga**) — khác với "thính phòng" cổ truyền như [[ca-tru]], [[ca-hue-nha-nhac|ca Huế]], [[don-ca-tai-tu|nhạc tài tử]]. Năm điểm khác biệt:

| Mặt | Nhạc thính phòng cổ truyền | Nhạc thính phòng mới |
|---|---|---|
| **Ký âm** | chữ hò, xự, xang… (gốc Trung Hoa), ghi khung, nghệ nhân "lòng bản" | nốt nhạc **phương Tây** ([[ky-am]]) |
| **Nhịp** | nhịp cổ truyền (nhịp ngoại, nhịp nội, song lang…) | nhịp **2, 3, 4…** châu Âu |
| **Hình thức** | cấu trúc lớp, khổ, lề lối bài bản | **một đoạn, hai đoạn, ba đoạn đơn và phức, sonate, biến tấu** ([[hinh-thuc-hai-doan]], [[hinh-thuc-ba-doan]], [[sonata-the-loai|sonate]], [[bien-tau]]) |
| **Kết cấu** | **phức điệu tự do**: mỗi nhạc cụ "lòng" giai điệu theo cách riêng | **chủ điệu** — giai điệu trên nền đệm có **âm hình tiết tấu lặp chu kỳ** |
| **Điệu thức** | hệ cung, hơi ([[ly-thuyet-am-nhac-co-truyen-viet-nam]]) | **trưởng – thứ** châu Âu, thường pha [[am-giai-ngu-cung|ngũ cung]] ([[hoa-am-cho-giai-dieu-ngu-cung]]) |

## Thể loại và nội dung
Theo giáo trình, nhạc thính phòng **chiếm số lượng lớn** trong khí nhạc Việt Nam và **đa số có tiêu đề**; nội dung về quê hương, thiên nhiên và sự kiện hai cuộc chiến tranh. Thể loại: **prelude, vũ khúc, scherzo, hát ru, rhapsodie, fantaisie, biến tấu, sonate, tứ tấu dây**, cả ballade, caprice.

Giao hưởng gồm **thơ giao hưởng** ([[tho-giao-huong]]), **liên khúc sonate giao hưởng** ([[giao-huong]]) và **tổ khúc**.

## Các tác phẩm mốc
Năm lấy theo Nguyễn Thị Minh Châu (2014), dẫn *Âm nhạc mới Việt Nam – tiến trình và thành tựu*:

| Năm | Tác phẩm | Tác giả | Thể loại |
|---|---|---|---|
| 1958 | *Đợi chờ* | Tạ Phước | ouverture |
| 1958 | *Tổ khúc giao hưởng Điện Biên* | Đỗ Nhuận | tổ khúc |
| 1961 | *Lửa cách mạng* | Trần Ngọc Xương | giao hưởng |
| 1961 | *Thành đồng Tổ quốc* | Hoàng Vân | thơ giao hưởng (bài [[nhac-co-dien-viet-nam]] ghi 1960 — **lệch nguồn**) |
| 1964 | *Quê hương* | [[hoang-viet|Hoàng Việt]] | giao hưởng (các nguồn khác ghi 1958 hoặc 1965 — **chưa thống nhất**) |

Minh Châu nêu **ba mức dùng dân ca** trong khí nhạc: trích nguyên giai điệu; phát triển mô-típ dân ca; và tạo giai điệu mới mang chất dân gian.

## Hai giai đoạn
- **1954 – 1964:** nhạc sĩ du học Liên Xô, Đông Âu về nước từ 1960 – 1961; xu hướng **"khoa học hoá"** — học hình thức, hoà âm, phối khí bài bản.
- **1965 – 1975:** chiến tranh lan ra miền Bắc; ưu tiên **tiết mục nhỏ gọn** phục vụ chiến trường, xu hướng **"đại chúng hoá"**, chủ đề chủ nghĩa anh hùng cách mạng.

## Tác phẩm cho nhạc cụ cổ truyền
Nhóm thứ tư theo giáo trình: nhạc độc tấu, hoà tấu viết cho đàn bầu, sáo, đàn tranh, nhị… theo lối ký âm và hình thức mới — thường đi cùng việc **cải tiến nhạc cụ** (thêm dây, mở âm vực). Xem [[am-nhac-truyen-thong-viet-nam]].

## Câu hỏi và bài tập
1. Lập bảng năm điểm khác nhau giữa nhạc thính phòng cổ truyền và nhạc thính phòng mới; mỗi điểm cho một ví dụ.
2. Nghe một tác phẩm khí nhạc Việt Nam 1954 – 1975 (ví dụ *Quê hương* của Hoàng Việt): xác định hình thức và cách dùng dân ca theo ba mức của Minh Châu.
3. Vì sao thời kỳ 1965 – 1975 ưu tiên tiết mục nhỏ gọn? Liên hệ với nguyên tắc "đại chúng" của Đề cương 1943.
`,
  },
  {
    slug: 'dao-tao-va-nghien-cuu-am-nhac-1945-1975',
    title: 'Thiết chế âm nhạc 1945 – 1975: trường, hội, viện, đoàn và công tác sưu tầm',
    category: 'vietnam',
    also: ['musicology'],
    aliases: ['Trường Âm nhạc Việt Nam 1956', 'Trường Quốc gia Âm nhạc Sài Gòn', 'Viện Âm nhạc', 'Viện Nghiên cứu Âm nhạc', 'Hội Nhạc sĩ Việt Nam 1957', 'Tập san Âm nhạc', 'Dàn nhạc Giao hưởng Việt Nam 1959', 'Hội Văn nghệ dân gian', 'Nhạc viện Hà Nội', 'Nhạc viện TP.HCM lịch sử', 'Tạ Phước'],
    summary: 'Các thiết chế làm nên nền âm nhạc chuyên nghiệp hai miền: ở miền Bắc — Trường Âm nhạc Việt Nam (1956, hiệu trưởng Tạ Phước; nay là Học viện Âm nhạc Quốc gia), Hội Nhạc sĩ (1957), Ban Âm nhạc (1950) rồi Viện Âm nhạc, Tập san Âm nhạc (1957), Dàn nhạc Giao hưởng (1959) và các đoàn, công tác sưu tầm dân ca; ở miền Nam — Trường Quốc gia Âm nhạc Sài Gòn (1956, giám đốc Nguyễn Phụng; nay là Nhạc viện TP.HCM), các ban nhạc đài phát thanh.',
    refs: [
      ['Wikipedia tiếng Việt — Học viện Âm nhạc Quốc gia Việt Nam', 'https://vi.wikipedia.org/wiki/H%E1%BB%8Dc_vi%E1%BB%87n_%C3%82m_nh%E1%BA%A1c_Qu%E1%BB%91c_gia_Vi%E1%BB%87t_Nam'],
      ['SGGP — Vĩnh biệt "cây đại thụ" của âm nhạc Việt Nam GS.NSND Tạ Bôn', 'https://www.sggp.org.vn/vinh-biet-cay-dai-thu-cua-am-nhac-viet-nam-gs-nsnd-ta-bon-post736598.html'],
      ['Wikipedia tiếng Việt — Nhạc viện Thành phố Hồ Chí Minh', 'https://vi.wikipedia.org/wiki/Nh%E1%BA%A1c_vi%E1%BB%87n_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh'],
      ['Wikipedia tiếng Việt — Viện Âm nhạc (Việt Nam)', 'https://vi.wikipedia.org/wiki/Vi%E1%BB%87n_%C3%82m_nh%E1%BA%A1c_(Vi%E1%BB%87t_Nam)'],
      ['Báo Văn hoá — Kỷ niệm 60 năm thành lập Hội Nhạc sĩ Việt Nam', 'https://baovanhoa.vn/van-hoa/ky-niem-60-nam-thanh-lap-hoi-nhac-si-viet-nam-13043.html'],
      ['Green SM — Nhà hát Nhạc Vũ Kịch Việt Nam (lịch sử hình thành)', 'https://www.greensm.com/vn-vi/news/nha-hat-nhac-vu-kich-viet-nam'],
    ],
    body: `
Từ một nền âm nhạc chủ yếu truyền miệng, trong ba mươi năm cả hai miền dựng nên **trường, hội, viện, đoàn** — khung của nền âm nhạc chuyên nghiệp hôm nay. Đề cương: [[am-nhac-viet-nam-cuoi-the-ky-xix-1975]]; xem thêm [[nghien-cuu-am-nhac-viet-nam]].

## Miền Bắc
### Đào tạo
| Năm | Sự kiện | Nguồn, ghi chú |
|---|---|---|
| cuối 1949 | Trường trung cấp âm nhạc ở Việt Bắc (Nguyễn Hữu Hiếu phụ trách) | theo giáo trình, **chưa đối chiếu** |
| giữa 1955 | Bộ phận huấn luyện của Ban Nhạc vũ Trung ương (Hội Văn nghệ Việt Nam) tách ra; bảy người đầu tiên: Tạ Phước, Lê Yên, Tô Vũ, Thái Thị Liên, Vũ Tuấn Đức, Doãn Mẫn, Lều Thọ Hợp; mở lớp bổ túc trung cấp | theo giáo trình |
| 1956 | **Trường Âm nhạc Việt Nam** chính thức thành lập, hiệu trưởng **Tạ Phước** | SGGP (cáo phó Tạ Bôn), Wikipedia; giáo trình gọi "Trường Nhạc Việt Nam" |
| 1955 – 1961 | Chuyên gia Liên Xô, Trung Quốc, Triều Tiên giảng dạy; từ 1960 – 1961 nhạc sĩ du học nước ngoài về nước | theo giáo trình |
| 1982 → 2008 | Đổi tên **Nhạc viện Hà Nội** (1982), rồi **Học viện Âm nhạc Quốc gia Việt Nam** (2008) | Wikipedia |

### Hội và báo
- **1957:** **Tập san Âm nhạc** của Hội Văn nghệ ra đời; nhiều công trình về dân ca các vùng, nhạc truyền thống, nhạc cụ được xuất bản (theo giáo trình).
- **Hội Nhạc sĩ Việt Nam:** Báo Văn hoá (kỷ niệm 60 năm, 2017) ghi thành lập **1957**. Giáo trình kể: năm 1957 Hà Nội lập **Hội Nhạc sĩ sáng tác** và **Hội Nhạc sĩ biểu diễn**, năm **1962** hai hội hợp nhất thành Hội Nhạc sĩ Việt Nam — hai cách kể **chưa khớp**; người biên soạn chưa tìm được văn bản gốc về việc hợp nhất.
- **1968 (theo giáo trình):** Hội Văn nghệ dân gian thành lập, sưu tầm âm nhạc dân gian các miền; nhạc dân gian phía Nam được ghi qua cán bộ, bộ đội tập kết.

### Viện nghiên cứu
Theo Wikipedia: **Ban Âm nhạc** lập ngày 12/12/1950 → qua nhiều tên gọi → **Viện Âm nhạc** (1967 – 1971) → **Viện Nghiên cứu Âm nhạc Việt Nam** (1976, sáp nhập vào Trường) → **Viện Âm nhạc và Múa** (1985) → **Viện Âm nhạc**. Giáo trình ghi "Viện Nghiên cứu Âm nhạc (1968)" — mốc năm **lệch** với Wikipedia.

**Kho sưu tầm.** Giáo trình nêu số liệu sưu tầm của viện: 306 làn điệu và 6 vở tuồng; 306 làn điệu chèo; 59 làn điệu và 44 vở cải lương; 211 làn điệu nhạc tài tử; 305 làn điệu hát văn; 108 làn điệu ca trù; 20 làn điệu hát xẩm; 6.679 bài dân ca, dân nhạc của 44 dân tộc; 121 nhạc cụ dân gian. Những con số này **chưa đối chiếu** với tài liệu của Viện, cũng không rõ tính tới năm nào (số làn điệu tuồng và chèo trùng nhau là 306 có thể là lỗi chép).

### Đoàn biểu diễn
Theo giáo trình: **1954** Đại hội văn công toàn quốc lần đầu (26 đơn vị); **20/9/1955** thành lập Bộ Văn hoá, rồi Vụ Nghệ thuật sắp xếp các đơn vị. Các đơn vị mới:

| Ngày | Đơn vị | Nguồn |
|---|---|---|
| 6/8/1959 | **Dàn nhạc Giao hưởng Việt Nam** (114 người) | lịch sử Nhà hát Nhạc Vũ Kịch, giáo trình |
| 8/2/1960 | Đoàn Ca múa Hà Nội | giáo trình |
| 5/6/1961 | Đoàn hợp xướng 120 người | giáo trình; Nhà hát Nhạc Vũ Kịch ghi năm 1961 |
| 1962 | Đoàn Ca nhạc dân tộc Trung ương | giáo trình |
| 1965 | Đoàn Ca múa miền Nam | giáo trình |
| — | Đoàn Ca nhạc Đài Tiếng nói Việt Nam | giáo trình |

## Miền Nam
- **1947 – 1952:** ở Sài Gòn có ban nhạc Đài phát thanh Sài Gòn, ban nhạc Đài Pháp – Á, ban quân nhạc Tiểu đoàn danh dự, nhiều ban nhạc nhẹ, nhạc khiêu vũ (theo giáo trình). Sinh hoạt âm nhạc tập trung ở tiệm nhảy, phòng trà, trường học, nhà thờ, rồi rạp chiếu bóng, sân khấu.
- **Trường Quốc gia Âm nhạc Sài Gòn** (Wikipedia): tiền thân là ban nhạc trong trường mỹ thuật; thành lập **12/4/1956** ở 112 Nguyễn Du, giám đốc đầu tiên **Nguyễn Phụng** (1956 – 1970); năm 1960 đổi thành **Trường Quốc gia Âm nhạc và Kịch nghệ**; năm 1982 đổi thành **Nhạc viện TP.HCM**.
- Hai trường ở hai miền ra đời **cùng năm 1956** — một trùng hợp đáng nhớ khi ôn thi.

Các phong trào ca khúc miền Nam (du ca, Hát cho đồng bào tôi nghe, nhạc trẻ) ở [[tan-nhac-mien-nam-1954-1975]].

## Câu hỏi và bài tập
1. Vẽ sơ đồ tiến trình từ trường Việt Bắc tới Học viện Âm nhạc Quốc gia, và từ Trường Quốc gia Âm nhạc Sài Gòn tới Nhạc viện TP.HCM.
2. Liệt kê ba chỗ giáo trình và nguồn công khai ghi khác nhau trong bài này. Bạn sẽ kiểm chứng bằng tài liệu nào?
3. Vì sao công tác sưu tầm dân ca được đẩy mạnh sau 1954? Liên hệ với ba mức dùng dân ca trong [[khi-nhac-thinh-phong-giao-huong-1954-1975]].
`,
  },
]
