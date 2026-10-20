import type { Article } from '../wiki'

/**
 * Lịch sử tân nhạc Việt Nam: hub lich-su-tan-nhac-viet-nam, các bài theo giai đoạn và trang các nhạc sĩ
 * tiên phong. Bài nào cũng nối về hub và sang các bài sẵn có ở mục Âm nhạc Việt Nam.
 */
export const tanNhac: Article[] = [
  {
    slug: "lich-su-tan-nhac-viet-nam",
    title: "Lịch sử tân nhạc Việt Nam: phân kỳ, lộ trình và nguồn",
    category: 'vietnam',
    also: ['musicology'],
    aliases: ["lịch sử tân nhạc", "lịch sử tân nhạc Việt Nam", "tân nhạc lộ trình", "âm nhạc mới Việt Nam", "history of Vietnamese popular song", "phân kỳ tân nhạc"],
    summary: "Trang mở đầu cho lịch sử tân nhạc Việt Nam: các cách phân kỳ (Phạm Duy, Trần Quang Hải, giáo trình trong nước), dòng thời gian từ đội kèn Tây và nhà thờ (thế kỷ 19) qua Nhạc viện Viễn Đông (1927–1930), “bài ta theo điệu Tây”, phong trào nhạc cải cách 1938, các nhóm sáng tác đầu tiên, kháng chiến 1945–1954, hai miền 1954–1975, đến sau 1975 — mỗi giai đoạn một bài, kèm danh mục nguồn và những mốc còn tranh cãi.",
    refs: [
      ["Wikipedia tiếng Việt — Tân nhạc Việt Nam", "https://vi.wikipedia.org/wiki/T%C3%A2n_nh%E1%BA%A1c_Vi%E1%BB%87t_Nam"],
      ["Jason Gibbs — Nhac Tien Chien: The Origins of Vietnamese Popular Song (ThingsAsian, 1998)", "http://thingsasian.com/node/3464.html"],
      ["Jason Gibbs — Reform and Tradition in Early Vietnamese Popular Song (ThingsAsian; Nhac Viet 1997)", "http://thingsasian.com/node/3465.html"],
      ["Wikipedia — Popular music of Vietnam", "https://en.wikipedia.org/wiki/Popular_music_of_Vietnam"],
    ],
    body: `
**Tân nhạc** (còn gọi *nhạc cải cách*, *âm nhạc mới*) là ca khúc Việt Nam viết theo hệ thống âm nhạc phương Tây — giai điệu trên âm giai trưởng – thứ, có hoà âm, ghi bằng khuông nhạc. Bài [[tan-nhac-viet-nam]] giới thiệu thể loại; trang này là **bản đồ lịch sử**: chia giai đoạn, nối sang từng bài chi tiết, và nói rõ nguồn nào kể điều gì. Bản đồ cả mục: [[am-nhac-viet-nam]].

::timeline 1861=Kèn_Tây 1900=Ghi_âm_Azoulay 1918=Cải_lương 1927=Nhạc_viện_Viễn_Đông 1930=Cùng_nhau_đi_hồng_binh 1934=Bài_ta_theo_điệu_Tây 1938=Nhạc_cải_cách 1939=Myosotis_–_Tricéa_–_Đồng_Vọng 1944=Tiến_quân_ca 1954=Genève 1956=Hai_trường_nhạc 1957=Hội_Nhạc_sĩ 1966=Du_ca 1975=Thống_nhất | Các mốc chính (chi tiết và độ tin cậy ở từng bài)

## Lộ trình đọc
| Giai đoạn | Bài | Câu hỏi chính |
|---|---|---|
| Tiền đề (1861 – 1937) | [[tien-de-tan-nhac]] | Âm nhạc phương Tây vào Việt Nam bằng những đường nào? |
| Trường nhạc đầu tiên (1927 – 1930) | [[nhac-vien-vien-dong]] | Ai học nhạc Tây bài bản đầu tiên, và vì sao trường đóng cửa? |
| Lời Việt trên nhạc Tây | [[bai-ta-theo-dieu-tay]] | Người Việt hát nhạc Tây thế nào trước khi tự sáng tác? |
| Khai sinh (1937 – 1939) | [[nhac-cai-cach-1938]] | Vì sao năm 1938 được coi là mốc? Báo *Ngày Nay* đóng vai trò gì? |
| Các nhóm đầu tiên (1938 – 1945) | [[nhom-sang-tac-tan-nhac-dau-tien]] | Myosotis, Tricéa, Đồng Vọng, Tổng hội Sinh viên khác nhau thế nào? |
| Kháng chiến (1945 – 1954) | [[tan-nhac-1945-1954]] | Tân nhạc tách đôi: chiến khu và đô thị |
| Miền Bắc (1954 – 1975) | [[tan-nhac-mien-bac-1954-1975]] | Thiết chế, ca khúc chính trị, nhạc thính phòng – giao hưởng |
| Miền Nam (1954 – 1975) | [[tan-nhac-mien-nam-1954-1975]] | Thị trường, các dòng nhạc, du ca, nhạc phản chiến |
| Sau 1975 | [[am-nhac-viet-nam-sau-1975]], [[nhac-hai-ngoai]] | Cấm đoán, hải ngoại, Đổi mới, V-pop |
| Nguồn | [[tu-lieu-lich-su-tan-nhac]] | Đọc gì, tin đến đâu? |

Các dòng nhạc có trang riêng: [[nhac-tien-chien]], [[nhac-cach-mang]], [[nhac-vang-bolero]], [[nhac-trinh]], [[nhac-tre-rock-sai-gon]], [[vpop-rap-viet]]. Nhạc sĩ: [[nhac-si-viet-nam]].

## Các cách phân kỳ
| Người phân kỳ | Các giai đoạn đầu | Ghi chú |
|---|---|---|
| **Phạm Duy** (hồi ký, các bài viết) | Đầu thập niên 1930 là "thời kỳ đi tìm nhạc ngữ mới"; 1935 – 1938 là "thời kỳ chuẩn bị" | Người trong cuộc, viết sau nhiều thập kỷ |
| **Trần Quang Hải** (*Lịch sử tân nhạc Việt Nam*) | Trước 1937 là "giai đoạn tượng hình" | Theo trích dẫn trên Wikipedia tiếng Việt; chưa đối chiếu bản gốc |
| **Jason Gibbs** | Mốc công khai đầu tiên: buổi diễn của Nguyễn Văn Tuyên ở Hà Nội (1938) | Nghiên cứu dựa trên báo chí đương thời |
| **Lịch sử chính thống trong nước** | Nhiều bài báo coi *Cùng nhau đi hồng binh* (Đinh Nhu, 1930) là ca khúc tân nhạc đầu tiên, mở đầu dòng ca khúc cách mạng | Xem [[dinh-nhu]] |

Vì thế câu hỏi "**ai là người đầu tiên**" có nhiều đáp án tuỳ tiêu chí: bài **được viết** sớm nhất, bài **được trình diễn công khai** sớm nhất, hay bài **được in** sớm nhất. Bài [[nhac-cai-cach-1938]] trình bày các tiêu chí này.

## Ba điều cần nhớ
1. **Tân nhạc không ra đời trong một ngày.** Nó là kết quả của nửa thế kỷ tiếp xúc: kèn đồng, thánh ca, đĩa hát, phim nói, cải lương, trường học.
2. **Báo chí là nhân vật chính.** Phong trào thành hình khi báo *Ngày Nay* in bài hát và tranh luận về "tính Việt Nam" của nhạc mới (1938).
3. **Lịch sử tân nhạc bị chính trị chia đôi.** Sau 1954, mỗi miền kể một câu chuyện khác; tài liệu thời kỳ này cần đọc đối chiếu cả hai phía và nghiên cứu nước ngoài ([[tu-lieu-lich-su-tan-nhac]]).
`,
  },
  {
    slug: "tien-de-tan-nhac",
    title: "Tiền đề tân nhạc (1861 – 1937): kèn Tây, thánh ca, nhà hát, đĩa hát",
    category: 'vietnam',
    aliases: ["tiền đề tân nhạc", "âm nhạc phương Tây vào Việt Nam", "kèn Tây", "quân nhạc Pháp", "Hội Ca nhạc ái hữu", "Trần Đại Thụ"],
    summary: "Những con đường đưa âm nhạc phương Tây vào Việt Nam trước tân nhạc: quân nhạc Pháp (từ 1861), nhà thờ Công giáo và trường dòng, nhà hát Sài Gòn (1900), Hà Nội (1911), Hải Phòng (1912), đĩa hát (Beka) và phim nói, nhạc cụ mandoline – guitar – violon trong giới trẻ đô thị, cải lương dùng nhạc Tây, các hội nhạc nghiệp dư; mốc 1922 và 1923–1925 trong giáo trình được ghi kèm tình trạng nguồn.",
    refs: [
      ["Đỗ Hồng Quân — Quá trình tiếp thu lý luận âm nhạc nước ngoài trong dòng chảy âm nhạc mới Việt Nam (Văn Nghệ Đà Nẵng, 2021)", "https://vannghedanang.org.vn/qua-trinh-tiep-thu-ly-luan-am-nhac-nuoc-ngoai-trong-dong-chay-am-nhac-moi-viet-nam-8883.html"],
      ["Wikipedia — Saigon Opera House", "https://en.wikipedia.org/wiki/Municipal_Theatre,_Ho_Chi_Minh_City"],
      ["Wikipedia — Hanoi Opera House", "https://en.wikipedia.org/wiki/Hanoi_Opera_House"],
      ["Liam Kelley — Beka Records in colonial Vietnam", "https://leminhkhai.blog/beka-records-in-colonial-vietnam/"],
      ["Jason Gibbs — Nhac Tien Chien: The Origins of Vietnamese Popular Song", "http://thingsasian.com/node/3464.html"],
    ],
    body: `
Trước khi người Việt **tự viết** ca khúc theo lối Tây (cuối thập niên 1930), họ đã **nghe, chơi và hát** nhạc Tây suốt mấy chục năm. Bài này liệt kê các con đường tiếp xúc đó. Quay lại [[lich-su-tan-nhac-viet-nam]]; tổng quan thời kỳ ở [[am-nhac-thoi-phap-thuoc]].

::timeline 1861=Kèn_quân_nhạc 1900=Nhà_hát_Sài_Gòn 1906=Beka_ghi_âm 1911=Nhà_hát_Hà_Nội 1912=Nhà_hát_Hải_Phòng 1918=Cải_lương 1926=Cao_đẳng_Mỹ_thuật 1927=Nhạc_viện_Viễn_Đông 1930=Đinh_Nhu 1934=Bài_ta_theo_điệu_Tây | Các mốc trong bài (năm theo nguồn ghi ở từng mục)

## 1. Quân nhạc và kèn đồng
Theo Đỗ Hồng Quân (2021), từ **1861** các đội kèn đồng của quân đội Pháp có mặt ở Sài Gòn, rồi Hà Nội, Hải Phòng, Huế. Hành khúc, nhạc nghi lễ và nhạc khiêu vũ của dàn kèn là âm thanh phương Tây đầu tiên nhiều người Việt nghe thấy. Jason Gibbs lưu ý **nhịp hành khúc** của quân nhạc Pháp còn in dấu trong các ca khúc yêu nước thập niên 1940 ([[nhom-sang-tac-tan-nhac-dau-tien]]).

## 2. Nhà thờ và trường dòng
- Thánh ca, đàn harmonium và organ, ca đoàn ở các giáo xứ (Hải Phòng, Bùi Chu, Phát Diệm…) là nơi nhiều người Việt **học nhạc lý và đọc nốt** đầu tiên — xem [[am-nhac-ton-giao-va-dan-toc-viet-nam]], [[binh-ca-va-organ-o-viet-nam]].
- Văn Cao học nhạc ở trường **Saint-Joseph** (Hải Phòng) của các sư huynh La San; nhiều nhạc sĩ tân nhạc xuất thân Công giáo (Hùng Lân, Hải Linh…), theo Wikipedia tiếng Việt.
- Gibbs ghi nhận trường và nhà thờ Công giáo là nơi **đào tạo nhiều nhạc sĩ tân nhạc thời đầu**.

## 3. Nhà hát
| Nhà hát | Khánh thành | Ghi chú |
|---|---|---|
| Nhà hát Thành phố **Sài Gòn** | 1900 | Opera, operetta, hoà nhạc cho người Pháp |
| Nhà hát Lớn **Hà Nội** | 1911 | Theo mẫu Opéra Garnier (Paris) |
| Nhà hát Lớn **Hải Phòng** | 1912 | |
Bài của Đỗ Hồng Quân ghi năm khác cho Hải Phòng (1893) và Sài Gòn (1909); bảng trên theo các trang Wikipedia về từng nhà hát — **hai nguồn không khớp**. Khán giả chủ yếu là người Pháp và giới thượng lưu bản xứ, nhưng chính ở đây nhiều nghệ sĩ Việt nghe opera và hoà nhạc đầu tiên.

## 4. Đĩa hát, máy hát, phim nói, đài phát thanh
- Hãng **Beka** ghi âm ở Việt Nam từ khoảng 1906 (ít nhất 140 bản) — chủ yếu nhạc cổ truyền; về sau Odéon, Pathé, Columbia, RCA Victor ([[am-nhac-thoi-phap-thuoc]], [[lich-su-thu-am]]).
- Đầu thập niên 1930, **khiêu vũ** và **phim nói** đưa ca khúc Pháp và các ngôi sao như Tino Rossi, Josephine Baker đến giới trẻ đô thị (Gibbs).
- **Đài phát thanh**: Radio Indochine ở Sài Gòn; Lonán Ó Briain (*Voices of Vietnam*, 2021) kể lịch sử phát thanh Đông Dương từ thập niên 1920.
- Thanh niên học **mandoline, guitar, violon, piano** — Dương Thiệu Tước mở cửa hàng đàn mandoline ở Hà Nội ([[duong-thieu-tuoc]]).

## 5. Cải lương
[[cai-luong|Cải lương]] (ghi nhận từ khoảng 1918) đưa **nhạc cụ và bài hát Tây** lên sân khấu: guitar phím lõm, violon; theo Gibbs, cả *La Marseillaise* cũng vào sân khấu cải lương miền Nam trong thập niên 1910 – 1920. Đây là cầu nối trực tiếp tới [[bai-ta-theo-dieu-tay]].

## 6. Trường học và giới trí thức mới
- **Cao đẳng Mỹ thuật Đông Dương** mở ở Hà Nội năm 1926 (Gibbs dẫn lời Tô Ngọc Vân về ảnh hưởng của trường). Năm sau có **[[nhac-vien-vien-dong|Nhạc viện Viễn Đông]]** (1927 – 1930).
- Văn học lãng mạn chữ quốc ngữ, rồi **Thơ mới** (từ 1932) đi trước tân nhạc vài năm và cung cấp lời cho nhiều bài đầu tiên.
- Phong trào **Hướng đạo** và chương trình thể dục thời Vichy (1940 – 1945) phổ biến bài hát tập thể, hành khúc (Gibbs).

## 7. Các mốc trong giáo trình chưa đối chiếu được
Bài giảng Lịch sử âm nhạc Việt Nam (slide "Tân nhạc" mà chủ thư viện được học) có ba mốc sau. Tao **chưa tìm thấy nguồn in hay nguồn trực tuyến** để đối chiếu hai mốc đầu; có thể chúng lấy từ sách *Âm nhạc mới Việt Nam: tiến trình và thành tựu* (Tú Ngọc và cộng sự, 2000) — **chưa kiểm tra được**:
| Mốc | Nội dung theo bài giảng | Tình trạng |
|---|---|---|
| 1922 | **Trần Đại Thụ** ở Thanh Hoá lập hội **Ca nhạc ái hữu** để truyền bá và sáng tác âm nhạc | Chưa tìm thấy nguồn độc lập |
| Khoảng 1923 – 1925 | Các nhóm ca nhạc kịch sinh viên **Cao đẳng Sư phạm Hà Nội** soạn lời Việt cho một số bài hát Pháp về ái tình | Chưa tìm thấy nguồn độc lập; khớp với xu hướng [[bai-ta-theo-dieu-tay]] |
| 1927 – 1930 | Nhạc viện Viễn Đông; viên chức Pháp dạy miễn phí; khoảng 50 học sinh đến khi đóng cửa | Năm mở – đóng khớp nhiều nguồn; con số 50 chưa đối chiếu — xem [[nhac-vien-vien-dong]] |

Nếu có trang sách nguồn của bài giảng, nên ghi vào đây để hoàn thiện.

## 8. Ca khúc cách mạng sớm
Năm 1930 – 1931, trong tù Hoả Lò, **Đinh Nhu** viết hành khúc *Cùng nhau đi hồng binh* — được báo chí trong nước coi là ca khúc cách mạng đầu tiên, thậm chí ca khúc tân nhạc đầu tiên ([[dinh-nhu]]). Cùng thời, bản *Quốc tế ca* được dịch sang tiếng Việt (Gibbs ghi năm 1926). Dòng này phát triển thành [[nhac-cach-mang]].
`,
  },
  {
    slug: "nhac-vien-vien-dong",
    title: "Nhạc viện Viễn Đông (Hà Nội, 1927 – 1930)",
    category: 'vietnam',
    also: ['musicianship'],
    aliases: ["Nhạc viện Viễn Đông", "Conservatoire Français d'Extrême-Orient", "Conservatoire d'Extrême-Orient", "trường nhạc Viễn Đông", "Poincignon"],
    summary: "Trường nhạc phương Tây đầu tiên ở Việt Nam: Conservatoire Français d'Extrême-Orient mở ở Hà Nội năm 1927, đóng cửa năm 1930. Người sáng lập được ghi là Albert Poincignon; trường tư nhưng được chính quyền thuộc địa cho phép và trợ cấp ít ỏi. Học trò gồm Nguyễn Xuân Khoát, Dương Thiệu Tước và nhiều nhạc sĩ tân nhạc về sau. Nghiên cứu của Michael McClellan (2009) giải thích vì sao trường thất bại; các nguồn khác nhau về nguyên nhân và quy mô.",
    refs: [
      ["McClellan (2009), Music, education and Français de couleur: Music instruction in colonial Hanoi — Fontes Artis Musicae (ResearchGate)", "https://www.researchgate.net/publication/291871988_Music_education_and_Francais_de_Couleur_Music_instruction_in_Colonial_Hanoi"],
      ["Saigoneer — Tracing my family's fondness for French tunes", "https://saigoneer.com/saigon-music-art/29188-tracing-my-family-s-fondness-for-french-tunes,-from-colonial-times-to-vietnamese-versions"],
      ["Le Courrier du Vietnam — Nguyên Xuân Khoát, l'homme de deux musiques", "https://lecourrier.vn/nguyen-xuan-khoat-lhomme-de-deux-musiques/725327.html"],
      ["Jason Gibbs — Reform and Tradition in Early Vietnamese Popular Song", "http://thingsasian.com/node/3465.html"],
    ],
    body: `
Năm 1927, Hà Nội có **trường nhạc phương Tây đầu tiên** ở Việt Nam: *Conservatoire Français d'Extrême-Orient* (Nhạc viện Pháp ở Viễn Đông). Trường chỉ sống ba năm nhưng đào tạo một phần thế hệ khai sinh tân nhạc. Quay lại [[lich-su-tan-nhac-viet-nam]]; bối cảnh ở [[tien-de-tan-nhac]].

## Những gì các nguồn thống nhất
- **Mở năm 1927, đóng năm 1930**, ở Hà Nội (Gibbs; McClellan; nhiều nguồn tiếng Việt).
- Dạy **nhạc lý, solfège và nhạc cụ phương Tây** (violon, piano, contrebasse…) cho học trò người Việt; sách giáo khoa Pháp (theo Đỗ Hồng Quân: các giáo trình của Lavignac, Vincent d'Indy, Dubois).
- Là nơi **Nguyễn Xuân Khoát** học violon và contrebasse — ông kể đã học khoảng ba năm từ 1927 ([[nguyen-xuan-khoat]]).

## Người sáng lập và cách tổ chức
- Bài trên Saigoneer ghi người sáng lập là **Albert Poincignon**, một viên chức thuế quan kiêm thầy dạy nhạc tư, và mục tiêu được tuyên bố là "thay đổi cảm thụ và thị hiếu của người Việt". Một số trang tiếng Việt ghi tên giám đốc là "Poineignor và Bilewsky" — có lẽ là cách viết sai của cùng người; **chưa đối chiếu**.
- Theo tóm tắt bài nghiên cứu của **Michael McClellan** (*Fontes Artis Musicae*, 2009), trường **tư thục nhưng được chính quyền chính thức cho phép**, và "đã thất bại từ đầu" vì các hạn chế của chính quyền, trợ cấp không đủ và dịch vụ hạn chế. Báo chí nhiệt tình khi trường mở nhưng thất vọng khi trường đóng — McClellan xem đó là khoảng cách giữa **lời lẽ** và **thực tế** của dự án thuộc địa.
- Bài giảng chủ thư viện được học ghi: một số **viên chức Pháp dạy miễn phí**, và đến khi đóng cửa trường có khoảng **50 học sinh** — **chưa tìm thấy nguồn công khai** cho con số này.

## Vì sao đóng cửa? Các nguồn khác nhau
| Nguồn | Nguyên nhân |
|---|---|
| Gibbs; lời kể của Nguyễn Xuân Khoát | Khủng hoảng kinh tế thế giới đầu thập niên 1930 |
| McClellan (2009) | Hạn chế hành chính, trợ cấp thiếu, phạm vi dịch vụ hẹp — trường yếu từ đầu |
Hai cách giải thích không loại trừ nhau: một trường đã yếu sẽ gục khi khủng hoảng đến.

## Học trò
Các trang tiếng Việt liệt kê học trò gồm **Nguyễn Xuân Khoát, Lưu Quang Duyệt, Phạm Đăng Hinh, Nguyễn Văn Giệp, Nguyễn Hữu Hiếu, Mộng Chi, Phạm Huy Quỹ, Hùng Lân**; Wikipedia tiếng Việt ghi **Dương Thiệu Tước** học piano với một giáo sư Pháp ở trường lúc 14 tuổi ([[duong-thieu-tuoc]]). Danh sách này **chưa đối chiếu được với hồ sơ của trường**.

## Sau khi trường đóng
Không có trường nhạc chính quy nào thay thế cho tới năm 1956. Việc dạy nhạc chuyển sang **lớp tư và hội nhạc**: theo Wikipedia tiếng Việt, Nguyễn Văn Giệp lập **Hội Khuyến nhạc**, Lưu Quang Duyệt lập **Nhạc đường Học xá** (chưa có nguồn thứ hai). Hai trường nhạc của hai miền năm 1956 được kể ở [[am-nhac-viet-nam-1945-1975]] và [[nhac-co-dien-viet-nam]].

Liên quan: [[phuong-phap-giao-duc-am-nhac]], [[lich-su-ky-thuat-piano]].
`,
  },
  {
    slug: "bai-ta-theo-dieu-tay",
    title: "Bài ta theo điệu Tây: lời Việt cho nhạc Pháp (thập niên 1920 – 1930)",
    category: 'vietnam',
    aliases: ["bài ta theo điệu Tây", "bài Tây theo điệu ta", "nhạc ngoại lời Việt", "lời Việt nhạc Pháp", "Tư Chơi", "Hội Ái Tino"],
    summary: "Trước khi tự sáng tác, người Việt hát nhạc Tây bằng lời Việt: cải lương đặt lời Việt cho Marinella, La Madelon (Tư Chơi – Huỳnh Thủ Trung, Bảy Nhiêu), ca sĩ Ái Liên, Kim Thoa thu đĩa Beka – Odéon, thanh niên dịch bài của Tino Rossi, Rina Ketty, Vincent Scotto; theo bài giảng, sinh viên Cao đẳng Sư phạm Hà Nội đã làm việc này khoảng 1923–1925. Bài ghi các mốc 1933–1934 hay sớm hơn mà nguồn còn vênh nhau, và vì sao giai đoạn này là bước đệm của tân nhạc.",
    refs: [
      ["Viện Âm nhạc — Nhạc ngoại lời Việt thời vang bóng: “Bài Tây theo điệu ta”", "https://vienamnhac.vn/bai-viet/nhac-moi/nhac-ngoai-loi-viet-thoi-vang-bong-bai-tay-theo-%C4%91ieu-ta"],
      ["Wikipedia tiếng Việt — Nhạc tiền chiến", "https://vi.wikipedia.org/wiki/Nh%E1%BA%A1c_ti%E1%BB%81n_chi%E1%BA%BFn"],
      ["Jason Gibbs — Nhac Tien Chien: The Origins of Vietnamese Popular Song", "http://thingsasian.com/node/3464.html"],
      ["Vọc Records — Lost & Found Grooves: Lược sử âm nhạc Việt Nam", "https://vocrecords.vn/blog/lost-and-found-grooves-luoc-su-am-nhac-viet-nam-mot-cach-sieu-de-hieu/"],
    ],
    body: `
Giữa lúc nghe nhạc Tây và lúc tự viết nhạc theo lối Tây có một bước trung gian: **giữ giai điệu Tây, thay lời Việt**. Phong trào này gọi là **"bài ta theo điệu Tây"**. Quay lại [[lich-su-tan-nhac-viet-nam]].

## Từ khi nào?
| Nguồn | Mốc |
|---|---|
| Trần Quang Hải (qua bài của Viện Âm nhạc) | Đặt lời Việt cho nhạc nước ngoài **có từ đầu thế kỷ 20**; thuật ngữ đến từ giới nhạc sĩ cổ nhạc |
| Bài giảng chủ thư viện được học | Khoảng **1923 – 1925**, nhóm ca nhạc kịch sinh viên **Cao đẳng Sư phạm Hà Nội** soạn lời Việt cho bài hát Pháp về ái tình — **chưa tìm thấy nguồn độc lập** |
| nhacxua.vn, Wikipedia tiếng Việt | **Tư Chơi** (Huỳnh Thủ Trung) và **Năm Châu** đề xướng khoảng **1933 – 1934** |
| Jason Gibbs | Phong trào nổi lên **giữa thập niên 1930** |
Cách hiểu hợp lý: việc đặt lời Việt **lẻ tẻ** đã có từ sớm; thành **phong trào** có đĩa hát, có tên gọi vào giữa thập niên 1930.

## Ai làm, làm gì?
- **Cải lương** là nơi đầu tiên: Tư Chơi viết *Tiếng nhạn trong sương*, *Hoà duyên* (bài sau nay thuộc nhạc mục cải lương) và đặt lời Việt cho *Marinella*, *La Madelon*; Bảy Nhiêu có *Hoài tình* (Wikipedia tiếng Việt).
- **Đĩa hát**: các nghệ sĩ sân khấu **Ái Liên**, **Kim Thoa** thu đĩa Beka và Odéon (Gibbs; Vọc Records).
- **Giới trẻ đô thị** dịch bài của **Tino Rossi**, **Rina Ketty**, **Vincent Scotto**, cả *Goodbye Hawaii*, *South of the Border*; có cả **hội người hâm mộ Tino Rossi** ở Hà Nội và Hải Phòng; Mai Lâm và nhiều tác giả vô danh đặt lời (Wikipedia tiếng Việt).
- Các bài Pháp phổ biến 1935 – 1938: *Marinella*, *C'est à Capri*, *Tant qu'il y aura des étoiles*.

Gibbs lưu ý lời Việt **nhiều khi khác hẳn nghĩa** lời Pháp — người đặt lời chỉ giữ giai điệu và không khí.

## Vì sao quan trọng?
1. **Tai người nghe làm quen** với giai điệu trưởng – thứ, nhịp valse, tango, slow, foxtrot — nền của [[nhac-tien-chien]].
2. **Người viết học nghề**: đặt lời Việt vào giai điệu Tây buộc phải xử lý **thanh điệu** — đúng vấn đề mà nhạc sĩ tân nhạc phải giải quyết khi tự sáng tác ([[viet-cho-loi-ca]], [[loi-bai-hat-va-tam-ly-nguoi-nghe]]).
3. **Phản ứng**: chính sự lệ thuộc vào giai điệu Tây khiến người trẻ muốn **viết bài của mình** — từ đó có [[nhac-cai-cach-1938]]. Báo *Ngày Nay* (21/8/1938) còn phàn nàn nhiều bài gửi đến "thiếu tính Việt Nam" (Gibbs).

Truyền thống này sống lại nhiều lần: nhạc ngoại lời Việt ở Sài Gòn thập niên 1960 – 70 (Phạm Duy, Nam Lộc, Tùng Giang…) — xem [[nhac-tre-rock-sai-gon]].
`,
  },
  {
    slug: "nhac-cai-cach-1938",
    title: "Phong trào nhạc cải cách 1938: Nguyễn Văn Tuyên và báo Ngày Nay",
    category: 'vietnam',
    aliases: ["nhạc cải cách", "phong trào nhạc cải cách", "âm nhạc cải cách", "musique rénovée", "báo Ngày Nay 1938", "khai sinh tân nhạc", "tân nhạc 1938"],
    summary: "Vì sao 1938 được coi là năm khai sinh tân nhạc: chuyến đi Nam – Bắc của Nguyễn Văn Tuyên (do Thống đốc Nam Kỳ Pagès tài trợ), buổi diễn ở Hà Nội (Gibbs ghi 9/6/1938; nguồn khác ghi tháng 3 ở Hội Trí Tri), bài của Thế Lữ trên Ngày Nay (26/6/1938), Bình minh của Nguyễn Xuân Khoát là bài đầu tiên in trên Ngày Nay (31/7/1938), xã luận về “tính Việt Nam” (21/8/1938), các tranh luận và phê phán (Mai Văn Lương 1942) — kèm các tiêu chí “bài đầu tiên” khác nhau.",
    refs: [
      ["Jason Gibbs — Nhac Tien Chien: The Origins of Vietnamese Popular Song", "http://thingsasian.com/node/3464.html"],
      ["Jason Gibbs — Reform and Tradition in Early Vietnamese Popular Song", "http://thingsasian.com/node/3465.html"],
      ["Wikipedia tiếng Việt — Nguyễn Văn Tuyên (nhạc sĩ)", "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_V%C4%83n_Tuy%C3%AAn_(nh%E1%BA%A1c_s%C4%A9)"],
      ["Người Lao Động (qua Tuổi Trẻ, 2005) — Người ca sĩ đầu tiên của tân nhạc", "https://tuoitre.vn/nld/van-hoa-van-nghe/nguoi-ca-si-dau-tien-cua-tan-nhac-110830.htm"],
      ["Tạp chí Sông Hương — Nguyễn Văn Tuyên và cuộc vận động cải cách tân nhạc tại Huế năm 1938", "http://tapchisonghuong.com.vn/tin-tuc/p0/c107/n31178/Nhac-sy-Nguyen-Van-Tuyen-va-cuoc-van-dong-cai-cach-tan-nhac-tai-Hue-nam-1938.html"],
    ],
    body: `
Năm 1938, những bài hát Việt viết theo lối Tây **ra mắt công chúng và lên mặt báo**. Người đương thời gọi chúng là **nhạc cải cách** (chữ của nhà thơ Nguyễn Văn Cổn, theo Phạm Duy; tiếng Pháp *musique rénovée*). Quay lại [[lich-su-tan-nhac-viet-nam]].

::timeline 1936=Tuyên_vào_Sài_Gòn 1937=Kiếp_hoa 1938=Chuyến_đi_Nam_–_Bắc 1939=Bài_hát_bán_ở_hiệu_sách 1942=Mai_Văn_Lương_phê_phán | Mốc chính (ngày tháng cụ thể ở bảng dưới)

## Nguyễn Văn Tuyên và chuyến đi 1938
- **[[nguyen-van-tuyen|Nguyễn Văn Tuyên]]** (1909 – 2009), người Huế, vào Sài Gòn năm 1936, là hội viên người Việt duy nhất của hội **Philharmonique**, hát nhạc Tây trên đài.
- Năm 1937 ông phổ thơ Nguyễn Văn Cổn thành *Kiếp hoa* — bài đầu tay. Thống đốc Nam Kỳ **Pagès** mời ông sang Pháp học nhạc; ông từ chối vì việc nhà và xin **tài trợ một chuyến đi cổ động nhạc mới** khắp nước.
- Năm 1938 ông diễn và nói chuyện ở **Huế, Hà Nội, Hải Phòng, Nam Định**; các bài: *Kiếp hoa*, *Bông cúc vàng*, *Anh hùng ca*.

**Ngày và nơi buổi diễn Hà Nội — các nguồn khác nhau:**
| Nguồn | Ngày, nơi | Kết quả |
|---|---|---|
| Jason Gibbs | **9/6/1938**, Hà Nội — "lần trình diễn công khai, có phê bình, đầu tiên" | Thành công một phần: giọng Huế, khán giả ồn |
| Wikipedia tiếng Việt | **Tháng 3/1938**, buổi nói chuyện ở **Hội Trí Tri** Hà Nội; sau đó hát ở trường nữ học Hoài Đức và rạp Palace | Buổi đầu thất bại, các buổi sau được khen |
Có thể có **nhiều buổi** ở Hà Nội trong năm 1938; ngày 9/6 là mốc được trích nhiều nhất (cũng là mốc thư viện dùng ở [[am-nhac-thoi-phap-thuoc]]).

## Báo Ngày Nay: nơi phong trào thành hình
Tờ *Ngày Nay* của nhóm **Tự Lực văn đoàn** (Nhất Linh chủ trương) biến các buổi diễn lẻ tẻ thành một **phong trào**:
| Ngày | Sự kiện (theo Gibbs và Wikipedia tiếng Việt) |
|---|---|
| 26/6/1938 | Thế Lữ viết "Một hy vọng cho đời âm nhạc của chúng ta: ông Nguyễn Văn Tuyên" |
| 31/7/1938 (số 121) | ***Bình minh*** của **Nguyễn Xuân Khoát**, lời Thế Lữ — bài hát đầu tiên in trên *Ngày Nay* |
| 7/8/1938 (số 122) | *Một kiếp hoa* của Nguyễn Văn Tuyên |
| 21/8/1938 | Xã luận phàn nàn nhiều bài gửi đến **thiếu "tính Việt Nam"** |
| Các số sau | *Bản đàn xuân* (Lê Thương), *Khúc yêu đương* (Thẩm Oánh), *Đám mây hàng*, *Cám dỗ* (Phạm Đăng Hinh), *Đường trường* (Trần Quang Ngọc) |
Đầu năm 1939, bản in bài hát được **bán ở hiệu sách** — tân nhạc có thị trường riêng.

## Tranh luận
- **"Tính Việt Nam"**: ngay từ 1938, câu hỏi nhạc mới có phải chỉ là nhạc Tây lời Việt hay không đã được đặt ra; Nguyễn Xuân Khoát trả lời phỏng vấn năm 1942 về việc Việt Nam có thể có nền âm nhạc riêng (Gibbs). Đây là câu hỏi xuyên suốt đến nay — xem [[sang-tac-voi-chat-lieu-viet]].
- **Phê phán**: năm 1942, Mai Văn Lương chế giễu những người tập tành sáng tác (Gibbs).
- **Địa vị nghề nhạc**: thành ngữ "xướng ca vô loại" khiến nhiều người trí thức chơi nhạc ở chỗ riêng tư; Thẩm Oánh (1952) trình bày phong trào như cách **nâng vị thế văn hoá** của dân tộc (Gibbs).

## "Bài đầu tiên" theo tiêu chí nào?
| Tiêu chí | Ứng viên | Nguồn |
|---|---|---|
| Bài **viết** sớm (ca khúc cách mạng) | *Cùng nhau đi hồng binh* — [[dinh-nhu|Đinh Nhu]], 1930 – 1931 | Báo chí trong nước |
| Bài **được hát công khai trước công chúng, có phê bình** | Các bài của Nguyễn Văn Tuyên, 1938 | Gibbs |
| Bài **in trên báo** đầu tiên (*Ngày Nay*) | *Bình minh* — Nguyễn Xuân Khoát, 31/7/1938 | Gibbs |
| Bài **thu đĩa** sớm | *Anh hùng ca* của Nguyễn Văn Tuyên, thu RCA Victor đầu 1939, ép ở Thượng Hải (theo lời ông kể) | Người Lao Động, 2005 |
| Bài **viết trước 1938** của các nhóm Hà Nội – Huế – Hải Phòng | *Bẽ bàng* (1935), *Tiếng sáo chăn trâu* (1935), *Trên sông Hương* (1936), *Xuân năm xưa* (1936)… | Wikipedia tiếng Việt; **năm chưa đối chiếu** |

Kết luận của thư viện: **1938 là năm tân nhạc thành phong trào công khai**, không phải năm bài tân nhạc đầu tiên được viết. Tiếp theo: [[nhom-sang-tac-tan-nhac-dau-tien]].
`,
  },
  {
    slug: "nhom-sang-tac-tan-nhac-dau-tien",
    title: "Các nhóm sáng tác tân nhạc đầu tiên: Myosotis, Tricéa, Đồng Vọng, Tổng hội Sinh viên",
    category: 'vietnam',
    aliases: ["nhóm Myosotis", "Myosotis", "nhóm Tricéa", "Tricéa", "nhóm Đồng Vọng", "Đồng Vọng", "Tổng hội Sinh viên", "Xuân Thu nhã tập", "nhóm sáng tác tân nhạc"],
    summary: "Những nhóm đưa tân nhạc từ phòng khách ra công chúng (khoảng 1937–1945): Myosotis ở Hà Nội (Thẩm Oánh, Dương Thiệu Tước, Nguyễn Thiện Tơ), Tricéa (Văn Chung, Lê Yên, Doãn Mẫn) với nhà in thạch bản riêng, Đồng Vọng ở Hải Phòng (Hoàng Quý, Văn Cao, Phạm Ngữ, Canh Thân, Tô Vũ), nhóm của Tổng hội Sinh viên (Lưu Hữu Phước) và Xuân Thu nhã tập (Nguyễn Xuân Khoát) — cùng các nhạc sĩ độc lập Lê Thương, Đặng Thế Phong, Hoàng Trọng; kèm những chỗ các nguồn vênh nhau về năm thành lập.",
    refs: [
      ["Hội Nhạc sĩ Việt Nam (theo nhacxua.vn, tư liệu Nguyễn Thụy Kha) — Những nhóm sáng tác đầu tiên của tân nhạc", "https://hoinhacsi.vn/news/nhung-nhom-sang-tac-dau-tien-vao-thuo-binh-minh-cua-tan-nhac-viet-nam-thap-nien-1930-ban-dang-sao-chep-noi-dung-cua-nhacxuavn-neu-su-dung-cho-blog-ca-nhan-vui-long-ghi-ro-nguon-nhacxuavn-kem-theo-link-bai-viet-neu-la-website-kenh-truyen-thong-hoac-lien-quan-den-thuong-mai-vui-long-lien-he-truoc-de-duoc-dong-y-moi-hinh-thuc-vi-pham-ban-quyen-noi-dung-de-kiem-tien-thong-qua-mmo-deu-se-bi-report-den-facebook-va-adsense-khong-duoc-doc-lai-bai-viet-de-tao-video-tren-youtube"],
      ["Wikipedia tiếng Việt — Tân nhạc Việt Nam", "https://vi.wikipedia.org/wiki/T%C3%A2n_nh%E1%BA%A1c_Vi%E1%BB%87t_Nam"],
      ["Wikipedia tiếng Việt — Hoàng Quý", "https://vi.wikipedia.org/wiki/Ho%C3%A0ng_Qu%C3%BD"],
      ["Jason Gibbs — Nhac Tien Chien: The Origins of Vietnamese Popular Song", "http://thingsasian.com/node/3464.html"],
    ],
    body: `
Sau năm 1938, tân nhạc lớn lên nhờ **các nhóm**: vài người bạn cùng viết, cùng in, cùng tổ chức buổi diễn. Mỗi nhóm có một hướng riêng — trữ tình đô thị, dân tộc, yêu nước, sinh viên. Quay lại [[lich-su-tan-nhac-viet-nam]]; bối cảnh ở [[nhac-cai-cach-1938]].

## Bảng tổng hợp
| Nhóm | Nơi | Thời gian (theo nguồn) | Thành viên | Hướng | Bài tiêu biểu |
|---|---|---|---|---|---|
| **Myosotis** (hoa lưu ly) | Hà Nội | Giữa thập niên 1930 | [[tham-oanh|Thẩm Oánh]], [[duong-thieu-tuoc|Dương Thiệu Tước]], Nguyễn Thiện Tơ | Trữ tình; Thẩm Oánh nghiêng âm hưởng dân tộc, Dương Thiệu Tước nghiêng ngữ điệu Tây | *Đôi oanh vàng*, *Hoa tàn*, *Ngọc lan*, *Giáo đường im bóng* |
| **Tricéa** | Hà Nội | 1939, hoạt động khoảng hai năm (Hội Nhạc sĩ); bài của nhóm có từ 1935 (Wikipedia) | [[van-chung|Văn Chung]], Lê Yên, Doãn Mẫn | Trữ tình, có nhà in thạch bản mang tên nhóm | *Bóng ai qua thềm*, *Bẽ bàng*, *Biệt ly*, *Tiếng sáo chăn trâu* |
| **Đồng Vọng** | Hải Phòng | Ra mắt hè 1939 ở Nhà hát Lớn Hải Phòng; tên Đồng Vọng do Hoàng Quý đặt cuối 1943 (các nguồn khác nhau) | [[hoang-quy|Hoàng Quý]] (trưởng nhóm), [[van-cao|Văn Cao]], Phạm Ngữ, Canh Thân, Tô Vũ | Yêu nước, lịch sử, thanh niên; hành khúc | *Cô láng giềng*, *Trên sông Bạch Đằng*, *Nước non Lam Sơn*, *Gọi bạn lên đường* |
| **Tổng hội Sinh viên** | Hà Nội | Cuối thập niên 1930 – đầu 1940 | [[luu-huu-phuoc|Lưu Hữu Phước]] và sinh viên | Chính trị, chống Pháp – Nhật, sử ca | *Tiếng gọi sinh viên* (về sau *Tiếng gọi thanh niên*), *Lên đàng*, *Bạch Đằng giang*, *Ải Chi Lăng* |
| **Xuân Thu nhã tập** | Hà Nội | Nhóm từ 1939; sách in tháng 6/1942 | Chủ yếu nhà văn, nhà thơ (Đoàn Phú Tứ…); [[nguyen-xuan-khoat|Nguyễn Xuân Khoát]] là người làm nhạc duy nhất | Mỹ học "nhã", tìm âm hưởng dân tộc | (không phải nhóm sáng tác ca khúc) |

Đồng Vọng làm ra khoảng **12 tập, chừng 70 bài**, trong đó Hoàng Quý viết khoảng 60 (Wikipedia tiếng Việt, dẫn Tú Ngọc 2000 và các sách khác). Danh sách thành viên Đồng Vọng cũng khác nhau giữa các nguồn: Wikipedia tiếng Việt (bài Tân nhạc) thêm Đỗ Nhuận và Lưu Hữu Phước, còn bài trên trang Hội Nhạc sĩ kể cả Lê Thương và Hoàng Phú trong nhóm bạn Hải Phòng ban đầu.

## Các nhạc sĩ độc lập
| Nơi | Nhạc sĩ | Bài |
|---|---|---|
| Hải Phòng | [[le-thuong|Lê Thương]] | *Bản đàn xuân*, *Nàng Hà Tiên*, *Một ngày xanh*, trường ca *Hòn vọng phu* |
| Nam Định | [[dang-the-phong|Đặng Thế Phong]], [[hoang-trong|Hoàng Trọng]], Bùi Công Kỳ | *Con thuyền không bến*, *Đêm thu*, *Giọt mưa thu* |
| Huế | [[nguyen-van-thuong|Nguyễn Văn Thương]] | *Trên sông Hương* (1936), *Đêm đông* (1939) |
| Hà Nội | Hoàng Giác, Nguyễn Văn Khánh, Văn Giảng | *Ngày về*, *Nỗi lòng*, *Ai về sông Tương* |
| Hải Phòng – Hà Nội | Văn Cao (thời trẻ) | *Buồn tàn thu*, *Thiên Thai*, *Suối mơ*, *Trương Chi* |
| Sài Gòn, gánh hát | [[pham-duy|Phạm Duy]] | Hát nhạc cải cách với gánh Đức Huy (1944 – 1945), bài đầu tay *Cô hái mơ* (1942) |

Gibbs nhận xét gánh Đức Huy là kênh **đưa bài hát mới đi khắp nước**: mỗi đêm diễn cải lương có phần hát nhạc cải cách xen giữa.

## Hai hướng lớn
1. **Trữ tình lãng mạn** (Myosotis, Tricéa, Đặng Thế Phong, Văn Cao thời đầu): valse, slow, tango; chủ đề mùa thu, tình yêu, cảnh đẹp — về sau gọi là [[nhac-tien-chien]].
2. **Yêu nước – thanh niên** (Đồng Vọng, Tổng hội Sinh viên): hành khúc, sử ca; được Hướng đạo, phong trào thể dục thời Vichy và các tổ chức sinh viên nuôi dưỡng (Gibbs). Từ hướng này ra đời *Tiến quân ca* (Văn Cao, cuối 1944) và [[nhac-cach-mang]].

Năm 1945 hai bài ra đời từ hướng thứ hai trở thành quốc ca của **hai** nhà nước: *Tiến quân ca* ở phía Việt Nam Dân chủ Cộng hoà; *Tiếng gọi thanh niên* (sửa lời) về sau thành quốc ca miền Nam (Gibbs). Tiếp theo: [[tan-nhac-1945-1954]].
`,
  },
  {
    slug: "tan-nhac-1945-1954",
    title: "Tân nhạc 1945 – 1954: chiến khu và đô thị",
    category: 'vietnam',
    aliases: ["tân nhạc kháng chiến", "nhạc kháng chiến chống Pháp", "nhạc vùng tạm chiếm", "tân nhạc 1945 1954", "Hội nghị tranh luận văn nghệ 1949"],
    summary: "Chín năm tân nhạc tách đôi: ở chiến khu, ca khúc kháng chiến (Văn Cao, Phạm Duy, Đỗ Nhuận, Nguyễn Xuân Khoát, Hoàng Việt, Nguyễn Văn Thương, Phan Huỳnh Điểu…), đoàn văn công, Hội Văn nghệ Việt Nam (1948) và các cuộc tranh luận văn nghệ ở Việt Bắc; ở các đô thị do Pháp kiểm soát, tình ca tiếp nối dòng tiền chiến (Đoàn Chuẩn, Văn Phụng, Phạm Đình Chương), đĩa 78 vòng ở Paris; một số nhạc sĩ rời kháng chiến về thành đầu thập niên 1950.",
    refs: [
      ["Wikipedia tiếng Việt — Tân nhạc Việt Nam (mục 1945–1954)", "https://vi.wikipedia.org/wiki/T%C3%A2n_nh%E1%BA%A1c_Vi%E1%BB%87t_Nam"],
      ["Jason Gibbs — Nhac Tien Chien: The Origins of Vietnamese Popular Song", "http://thingsasian.com/node/3464.html"],
      ["Báo Văn hoá — Kỷ niệm 60 năm thành lập Hội Nhạc sĩ Việt Nam", "https://baovanhoa.vn/van-hoa/ky-niem-60-nam-thanh-lap-hoi-nhac-si-viet-nam-13043.html"],
      ["Memoirs of Pham Duy (Cornell University Press)", "https://www.einaudi.cornell.edu/research/publications/memoirs-pham-duy-vietnamese-musician-turbulent-century"],
    ],
    body: `
Cách mạng tháng Tám và cuộc kháng chiến chống Pháp chia tân nhạc thành **hai không gian**: chiến khu (vùng Việt Minh) và các đô thị do Pháp kiểm soát. Quay lại [[lich-su-tan-nhac-viet-nam]]; tổng quan ba mươi năm ở [[am-nhac-viet-nam-1945-1975]].

::timeline 1945=Cách_mạng_tháng_Tám 1946=Toàn_quốc_kháng_chiến 1947=Trường_ca_Sông_Lô 1948=Hội_Văn_nghệ 1949=Tranh_luận_Việt_Bắc 1950=Việt_Nhạc 1952=Tình_ca 1954=Điện_Biên_Phủ | Mốc chính (độ tin cậy ở từng mục)

## Ở chiến khu
- **Quốc ca**: *Tiến quân ca* của [[van-cao|Văn Cao]] (viết cuối 1944) được dùng làm quốc ca năm 1945.
- **Ca khúc kháng chiến** theo Wikipedia tiếng Việt:
| Nhạc sĩ | Bài |
|---|---|
| Văn Cao | *Trường ca Sông Lô* (1947), *Tiến về Hà Nội* (1949); sửa *Bến xuân* thành *Đàn chim Việt* |
| [[pham-duy|Phạm Duy]] | *Xuất quân*, *Chiến sĩ vô danh*, *Bà mẹ Gio Linh*, *Tiếng hát trên sông Lô*, *Bên cầu biên giới* |
| [[do-nhuan|Đỗ Nhuận]] | *Du kích sông Thao*, *Áo mùa đông*, *Nhớ chiến khu*, *Chiến thắng Điện Biên* (1954) |
| [[nguyen-xuan-khoat|Nguyễn Xuân Khoát]] | *Tiếng chuông nhà thờ* |
| Nguyễn Đình Thi | *Người Hà Nội* (1947) |
| [[nguyen-van-thuong|Nguyễn Văn Thương]] | *Bình Trị Thiên khói lửa* |
| [[hoang-viet|Hoàng Việt]] | *Lên ngàn*, *Nhạc rừng* |
| Phan Huỳnh Điểu, Trần Hoàn, Hoàng Vân, Văn Chung, Lê Yên | *Có một đàn chim*; *Lời người ra đi*; *Hò kéo pháo*; *Quê tôi giải phóng*; *Bộ đội về làng* |
- **Thiết chế**: **Hội Văn nghệ Việt Nam** thành lập tháng 7/1948; trong đó có **Đoàn Nhạc sĩ Việt Nam** — tiền thân của Hội Nhạc sĩ (Báo Văn hoá). Theo Gibbs, tạp chí *Việt Nhạc* của Đài phát thanh kháng chiến liệt kê **hơn 300 bài hát** năm 1950.
- **Đường lối**: *Đề cương văn hoá Việt Nam* (1943) nêu ba nguyên tắc "dân tộc – khoa học – đại chúng"; năm 1948 Trường Chinh dùng khái niệm "hiện thực xã hội chủ nghĩa" (Đỗ Hồng Quân, 2021).

## Tranh luận và chia tay
- **Hội nghị tranh luận văn nghệ ở Việt Bắc** diễn ra tháng 9/1949. Wikipedia tiếng Việt kể một hội nghị năm 1950 ở Việt Bắc phê bình kịch thơ của Hoàng Cầm và bài *Bên cầu biên giới* của Phạm Duy. **Chưa tìm thấy nguồn thứ hai** xác nhận chi tiết bài hát bị phê bình; hồi ký Phạm Duy (bản tiếng Anh do Cornell xuất bản) là nơi nên đối chiếu.
- Đầu thập niên 1950, một số nhạc sĩ **rời kháng chiến về thành**: Phạm Duy, Phạm Đình Chương, Hoàng Thi Thơ… Phạm Duy viết *Tình ca* (1952) ở vùng thành (Wikipedia tiếng Việt).

## Ở đô thị
- Hà Nội, Hải Phòng, Sài Gòn vẫn có **phòng trà, đài phát thanh, nhà xuất bản bài hát**; tình ca nối dòng tiền chiến: [[doan-chuan|Đoàn Chuẩn]] (mùa thu Hà Nội), Văn Phụng, Lâm Tuyền, Phạm Đình Chương (*Ly rượu mừng*), Lê Thương (*Hòn vọng phu*, *Hoà bình 48*).
- Đĩa 78 vòng thu ở **Paris** (hãng Oria, 1949 – 1951) với ca sĩ Hải Minh — tên hát của **Trần Văn Khê** —, Bích Thuận, Hoàng Lan (Wikipedia tiếng Việt). Về Trần Văn Khê, xem [[nghien-cuu-am-nhac-viet-nam]].
- Nhiều bài trữ tình viết **trong** kháng chiến (*Tiếng đàn tôi*, *Sơn nữ ca* của Trần Hoàn, *Dư âm* của Nguyễn Văn Tý, *Nụ cười sơn cước* của Tô Hải) về sau được hát ở miền Nam như "nhạc tiền chiến" — một ví dụ cho thấy **tên gọi dòng nhạc phụ thuộc vào nơi bài hát được nghe**, không chỉ nơi nó được viết.

Năm 1954, Hiệp định Genève chia đôi đất nước. Tiếp theo: [[tan-nhac-mien-bac-1954-1975]] và [[tan-nhac-mien-nam-1954-1975]].
`,
  },
  {
    slug: "tan-nhac-mien-bac-1954-1975",
    title: "Tân nhạc miền Bắc 1954 – 1975: thiết chế, ca khúc và nhạc hàn lâm",
    category: 'vietnam',
    aliases: ["tân nhạc miền Bắc", "âm nhạc miền Bắc 1954 1975", "Hội Nhạc sĩ Việt Nam", "ca khúc chính trị", "nhạc Bắc 1954-1975"],
    summary: "Âm nhạc mới ở miền Bắc sau 1954 được tổ chức thành hệ thống nhà nước: Trường Âm nhạc Việt Nam (26/11/1956), Hội Nhạc sĩ Việt Nam (30/12/1957), Đài Tiếng nói Việt Nam, các đoàn văn công; ca khúc theo đường lối “dân tộc – khoa học – đại chúng” và hiện thực xã hội chủ nghĩa; ca khúc về Bác Hồ, về miền núi, về chiến đấu; hợp xướng, giao hưởng (Quê hương, 1965), nhạc kịch (Cô Sao, 1965), nhạc phim — và những người im lặng (Văn Cao sau Nhân Văn – Giai Phẩm).",
    refs: [
      ["Báo Văn hoá — Kỷ niệm 60 năm thành lập Hội Nhạc sĩ Việt Nam", "https://baovanhoa.vn/van-hoa/ky-niem-60-nam-thanh-lap-hoi-nhac-si-viet-nam-13043.html"],
      ["Wikipedia tiếng Việt — Tân nhạc Việt Nam (mục 1954–1975, miền Bắc)", "https://vi.wikipedia.org/wiki/T%C3%A2n_nh%E1%BA%A1c_Vi%E1%BB%87t_Nam"],
      ["Đỗ Hồng Quân — Quá trình tiếp thu lý luận âm nhạc nước ngoài (Văn Nghệ Đà Nẵng, 2021)", "https://vannghedanang.org.vn/qua-trinh-tiep-thu-ly-luan-am-nhac-nuoc-ngoai-trong-dong-chay-am-nhac-moi-viet-nam-8883.html"],
      ["Lonán Ó Briain — Voices of Vietnam: A Century of Radio, Red Music, and Revolution (2021)", "https://www.prestomusic.com/books/products/9252115--voices-of-vietnam-a-century-of-radio-red-music-and-revolution"],
    ],
    body: `
Sau 1954, âm nhạc mới ở miền Bắc trở thành **một bộ phận của bộ máy văn hoá nhà nước**: có trường đào tạo, hội nghề nghiệp, đài phát thanh, đoàn nghệ thuật và đường lối sáng tác. Quay lại [[lich-su-tan-nhac-viet-nam]]; tổng quan ở [[am-nhac-viet-nam-1945-1975]].

::timeline 1956=Trường_Âm_nhạc_Việt_Nam 1957=Hội_Nhạc_sĩ 1960=Thành_đồng_Tổ_quốc 1965=Quê_hương_–_Cô_Sao 1968=Chị_Sứ 1975=Thống_nhất | Mốc chính

## Thiết chế
| Thiết chế | Mốc | Ghi chú |
|---|---|---|
| **Trường Âm nhạc Việt Nam** | 26/11/1956 | Nay là Học viện Âm nhạc Quốc gia Việt Nam — xem [[nhac-co-dien-viet-nam]] |
| **Hội Nhạc sĩ Việt Nam** | 30/12/1957 | Khoảng 50 nhạc sĩ ban đầu; tiền thân là Đoàn Nhạc sĩ trong Hội Văn nghệ (1948); Chủ tịch đầu tiên [[nguyen-xuan-khoat|Nguyễn Xuân Khoát]], Tổng thư ký [[do-nhuan|Đỗ Nhuận]] |
| **Đài Tiếng nói Việt Nam** | (từ 1945) | Kênh phổ biến ca khúc chính; Lonán Ó Briain (2021) nghiên cứu vai trò của phát thanh trong "nhạc đỏ" |
| Đoàn ca múa, văn công | | Biểu diễn khắp nơi, cả ở chiến trường |

Báo cáo của Đỗ Nhuận ngày 27/5/1957 trong ban trù bị thành lập Hội nhấn mạnh **học tập Liên Xô và Trung Quốc**; đường lối "dân tộc – khoa học – đại chúng" và "hiện thực xã hội chủ nghĩa" được nhắc trong các bài nói của Trường Chinh năm 1957 và 1962 (Đỗ Hồng Quân, 2021).

## Ca khúc
Theo Wikipedia tiếng Việt, ca khúc cách mạng là dòng **độc tôn**; các mảng chính:
| Mảng | Ví dụ |
|---|---|
| Ca ngợi lãnh tụ, Đảng | *Việt Bắc nhớ Bác Hồ*, *Lá thư hậu phương* ([[pham-tuyen|Phạm Tuyên]]); *Tình Bác sáng đời ta* (Lưu Hữu Phước); *Ca ngợi Hồ Chủ tịch* (Văn Cao) |
| Miền núi, dân tộc thiểu số | *Tiếng đàn ta lư* (Huy Thục), *Cô giáo Tày cầm đàn lên đỉnh núi* (Văn Ký) |
| Chiến đấu, sản xuất | *Anh vẫn hành quân* (Huy Du), *Bài ca năm tấn* (Nguyễn Văn Tý), *Trai anh hùng, gái đảm đang* (Đỗ Nhuận), *Mỗi bước ta đi* (Thuận Yến) |
| Bài của Mặt trận ở miền Nam | *Giải phóng miền Nam* ([[luu-huu-phuoc|Lưu Hữu Phước]], 1960 – 1975) |
Đặc điểm âm nhạc chung: hành khúc và ca khúc quần chúng, nhiều chất liệu dân ca (điệu thức ngũ cung, lối hò, ví), hát đồng ca và hợp xướng — xem [[nhac-cach-mang]].

## Hợp xướng, giao hưởng, nhạc kịch, nhạc phim
| Thể loại | Tác phẩm | Năm |
|---|---|---|
| Hợp xướng | *Hò đẵn gỗ* (Đỗ Nhuận) | 1955 |
| Thanh xướng kịch | *Vượt sông Cái* (Nguyễn Xuân Khoát) | 1955 |
| Giao hưởng thơ | *Thành đồng Tổ quốc* (Hoàng Vân) — được ghi là giao hưởng thơ đầu tiên | 1960 |
| Giao hưởng | *Quê hương* ([[hoang-viet|Hoàng Việt]]), bốn chương | 1965 (một nguồn ghi 1958) |
| Nhạc kịch | *Cô Sao* (Đỗ Nhuận), *Nguyễn Văn Trỗi* (Đàm Linh) | 1965 |
| Nhạc kịch | *Chị Sứ* (Hoàng Vân) | 1968 |
| Nhạc phim | Nguyễn Đình Phúc (*Chung một dòng sông*), Trọng Bằng, [[hong-dang|Hồng Đăng]], Hoàng Vân | |
Năm giao hưởng *Quê hương*: thư viện dùng 1965 như ở [[nhac-co-dien-viet-nam]]; bài của Đỗ Hồng Quân ghi 1958 — **hai nguồn không khớp** (có thể là năm bắt đầu viết và năm hoàn thành).

## Những người im lặng
Sau vụ **Nhân Văn – Giai Phẩm** (1956), [[van-cao|Văn Cao]] gần như ngừng sáng tác ca khúc. Các bài tình ca tiền chiến và "nhạc vàng" không được phổ biến trên sóng phát thanh; văn bản cấm cụ thể ở miền Bắc **chưa tìm thấy** (xem [[nhac-vang-bolero]]).

Tiếp theo: [[tan-nhac-mien-nam-1954-1975]] · Sau 1975: [[am-nhac-viet-nam-sau-1975]].
`,
  },
  {
    slug: "tan-nhac-mien-nam-1954-1975",
    title: "Tân nhạc miền Nam 1954 – 1975: thị trường, các dòng nhạc, du ca và phản chiến",
    category: 'vietnam',
    aliases: ["tân nhạc miền Nam", "nhạc miền Nam trước 1975", "phong trào du ca", "du ca", "nhạc phản chiến", "Hát cho đồng bào tôi nghe", "đại nhạc hội nhạc trẻ"],
    summary: "Hai mươi năm tân nhạc ở miền Nam: Trường Quốc gia Âm nhạc Sài Gòn (1956), đài phát thanh, phòng trà, hãng đĩa và băng nhạc; các dòng tình ca tiếp nối tiền chiến, nhạc vàng – bolero, nhạc Trịnh, nhạc trẻ – rock, ca khúc lời Việt cho nhạc ngoại; phong trào Du ca (1966, Nguyễn Đức Quang, Đinh Gia Lập); nhạc phản chiến (Tâm ca của Phạm Duy, Ca khúc da vàng); phong trào “Hát cho đồng bào tôi nghe” của sinh viên; kiểm duyệt từ cả hai phía.",
    refs: [
      ["Wikipedia tiếng Việt — Tân nhạc Việt Nam (mục 1954–1975, miền Nam)", "https://vi.wikipedia.org/wiki/T%C3%A2n_nh%E1%BA%A1c_Vi%E1%BB%87t_Nam"],
      ["RFA (2004) — Nhạc sĩ Nguyễn Đức Quang và phong trào Du ca Việt Nam", "https://www.rfa.org/vietnamese/binhluan/136828-20040525.html"],
      ["Văn Việt — Nhìn lại âm nhạc miền Nam 1954–1975", "https://vanviet.info/tu-lieu/nhn-lai-m-nhac-mien-nam-1954-1975/"],
      ["SGGP — Nhạc sĩ Trần Long Ẩn: “Người hát rong” vì mọi người", "https://www.sggp.org.vn/nhac-si-tran-long-an-nguoi-hat-rong-vi-moi-nguoi-post746116.html"],
    ],
    body: `
Ở miền Nam, tân nhạc phát triển như **một thị trường**: đài phát thanh, phòng trà, hãng đĩa, băng nhạc, nhà xuất bản bài hát cạnh tranh nhau, trong một xã hội chiến tranh ngày càng khốc liệt và có kiểm duyệt. Quay lại [[lich-su-tan-nhac-viet-nam]]; tổng quan ở [[am-nhac-viet-nam-1945-1975]].

::timeline 1955=Duyên_quê 1956=Trường_Quốc_gia_Âm_nhạc 1959=Ướt_mi 1965=Tình_khúc_thứ_nhất 1966=Du_ca 1968=Kinh_Việt_Nam 1969=Du_ca_được_cấp_phép 1971=Đại_nhạc_hội_nhạc_trẻ 1974=Tình_ca_Ngô_Thụy_Miên 1975=30/4 | Mốc chính

## Thiết chế và thị trường
- **Trường Quốc gia Âm nhạc Sài Gòn** (12/4/1956) — có Dương Thiệu Tước, Thẩm Oánh giảng dạy ([[duong-thieu-tuoc]], [[tham-oanh]]).
- **Đài phát thanh** Sài Gòn với các ban nhạc riêng (ví dụ ban *Cổ kim hoà điệu* của Dương Thiệu Tước).
- **Phòng trà, vũ trường** (Đêm Màu Hồng, Queen Bee…); **hãng đĩa và băng nhạc** (theo Wikipedia tiếng Việt: Sơn Ca, Trường Sơn, Nhã Ca, Shotguns, Sóng Nhạc…); nhạc sĩ như Phạm Mạnh Cương, Nguyễn Văn Đông, Tùng Giang làm cả sản xuất.
- **Việt Nam Nhạc Hội** và nguyệt san *Việt Nhạc* (Thẩm Oánh là chủ bút) — tên trùng với tạp chí kháng chiến 1950 ở [[tan-nhac-1945-1954]], **không phải cùng một tạp chí**.

## Các dòng nhạc
| Dòng | Tác giả tiêu biểu (theo Wikipedia tiếng Việt) | Trang riêng |
|---|---|---|
| **Tình ca nối dòng tiền chiến** ("nhạc xanh", tình khúc) | Phạm Duy, Phạm Đình Chương, Cung Tiến, [[hoang-trong|Hoàng Trọng]], Lê Trọng Nguyễn, Vũ Thành An (*Tình khúc thứ nhất*, 1965), Ngô Thụy Miên, Lê Uyên Phương, [[tu-cong-phung|Từ Công Phụng]] | [[nhac-tien-chien]] |
| **Nhạc vàng – bolero** | [[hoang-thi-tho|Hoàng Thi Thơ]] (*Duyên quê*, 1955 – 1956), Lam Phương, Trúc Phương, Trần Thiện Thanh, Hoài Linh, Châu Kỳ | [[nhac-vang-bolero]] |
| **Nhạc Trịnh Công Sơn** | Trịnh Công Sơn, giọng Khánh Ly | [[nhac-trinh]] |
| **Nhạc trẻ, rock, nhạc ngoại lời Việt** | CBC, Phượng Hoàng (Lê Hựu Hà, Nguyễn Trung Cang), Khánh Băng; lời Việt: Phạm Duy, Nam Lộc, Tùng Giang, Trường Hải | [[nhac-tre-rock-sai-gon]] |
| **Du ca** | Nguyễn Đức Quang, Phạm Duy, Trầm Tử Thiêng, Nguyễn Quyết Thắng | (dưới đây) |
| **Phản chiến, xuống đường** | Phạm Duy (Tâm ca), Trịnh Công Sơn, Miên Đức Thắng, Phạm Thế Mỹ; Trần Long Ẩn, Tôn Thất Lập | (dưới đây) |
Ranh giới các dòng là **quy ước về sau** và nhiều khi mang màu chính trị — xem cách gọi trung tính ở [[tan-nhac-viet-nam]].

## Phong trào Du ca
- Khởi xướng năm **1966** bởi **Nguyễn Đức Quang** và **Đinh Gia Lập** (RFA, 2004): nhạc để **người nghe cùng hát**, không chỉ nghe; Nguyễn Đức Quang làm trưởng xưởng.
- Các đoàn du ca đi khắp miền Nam, sinh hoạt với **Hướng đạo**, **Gia đình Phật tử**; theo RFA có hơn ba mươi đoàn ở các tỉnh thành.
- Bài tiêu biểu: *Việt Nam quê hương ngạo nghễ* (Nguyễn Đức Quang, viết 1966, hát công khai 1967 tại Đại hội Du ca toàn quốc).
- Wikipedia tiếng Việt ghi Bộ Quốc gia Giáo dục và Thanh niên **công nhận và cấp phép toàn quốc ngày 24/1/1969**, và Phạm Duy ủng hộ phong trào; **vai trò sáng lập của Phạm Duy chưa được nguồn độc lập xác nhận**.

## Nhạc phản chiến và phong trào sinh viên
- **Phạm Duy**: *Kỷ vật cho em* (phổ thơ Linh Phương, bị cấm), mười bài **Tâm ca** in trên tạp chí Phật giáo *Giữ thơm quê mẹ* (1965) (Wikipedia tiếng Việt).
- **Trịnh Công Sơn**: các tập *Ca khúc da vàng*, *Kinh Việt Nam* (1968), *Ta phải thấy mặt trời* (1969) — bị cả hai chính quyền kiểm duyệt ở những mức khác nhau ([[nhac-trinh]]).
- **"Hát cho đồng bào tôi nghe"**: phong trào âm nhạc đấu tranh của học sinh, sinh viên Sài Gòn và các đô thị; Trần Long Ẩn (*Người mẹ Bàn Cờ*), Tôn Thất Lập (*Hát cho dân tôi nghe*, *Xuống đường*). **Năm thành lập chưa tìm thấy nguồn đáng tin**; Wikipedia tiếng Việt nhắc đợt *Hát cùng đồng bào ta* năm 1971.

## Nhạc trẻ
Cuối thập niên 1950 nhạc Âu Mỹ vào Sài Gòn; giữa thập niên 1960 có phong trào khiêu vũ tại gia; từ 1968 hộp đêm phục vụ lính Mỹ mở rộng. Theo Wikipedia tiếng Việt, **đại nhạc hội nhạc trẻ** đầu tiên tổ chức năm 1971 (sân Hoa Lư), các đại nhạc hội sau ở Taberd và Thảo Cầm Viên có hàng chục nghìn người — **số liệu chưa đối chiếu**. Nghiên cứu kỹ nhất mảng này là của Jason Gibbs ([[nghien-cuu-am-nhac-viet-nam]]).

Sau 30/4/1975: [[am-nhac-viet-nam-sau-1975]], [[nhac-hai-ngoai]].
`,
  },
  {
    slug: "tu-lieu-lich-su-tan-nhac",
    title: "Tư liệu lịch sử tân nhạc: sách, hồi ký, báo chí, đĩa hát và nghiên cứu",
    category: 'vietnam',
    also: ['musicology'],
    aliases: ["tư liệu tân nhạc", "nguồn lịch sử tân nhạc", "sách về tân nhạc", "historiography Vietnamese popular music"],
    summary: "Danh mục nguồn để học và nghiên cứu lịch sử tân nhạc, chia theo loại: báo chí đương thời (Ngày Nay 1938, Việt Nhạc), hồi ký người trong cuộc (Phạm Duy, Lê Thương, Thẩm Oánh, Nguyễn Xuân Khoát), sách tổng thuật trong nước (Tú Ngọc và cộng sự 2000, Nguyễn Thụy Kha 1998, Đỗ Kim Bảng 1970, Lê Thiên Minh Khoa 2019), nghiên cứu nước ngoài (Jason Gibbs, Michael McClellan, Lonán Ó Briain), đĩa hát và lưu trữ — kèm cách đánh giá độ tin cậy từng loại.",
    refs: [
      ["Jason Gibbs — The West's Songs, Our Songs (Asian Music 35/1)", "https://www.skidmore.edu/academics/asianmusic/contindex/v35n1.htm"],
      ["McClellan (2009) — Music instruction in colonial Hanoi (ResearchGate)", "https://www.researchgate.net/publication/291871988_Music_education_and_Francais_de_Couleur_Music_instruction_in_Colonial_Hanoi"],
      ["Lonán Ó Briain — Voices of Vietnam (2021)", "https://www.prestomusic.com/books/products/9252115--voices-of-vietnam-a-century-of-radio-red-music-and-revolution"],
      ["SFPL — Jason Gibbs: Missing Legacy (2025)", "https://sfpl.org/events/2025/03/25/presentation-missing-legacy-evidence-recorded-sound-pre-1945-vietnam"],
      ["Memoirs of Pham Duy (Cornell)", "https://www.einaudi.cornell.edu/research/publications/memoirs-pham-duy-vietnamese-musician-turbulent-century"],
    ],
    body: `
Lịch sử tân nhạc được kể bởi **người trong cuộc**, **nhà báo**, **nhà nghiên cứu trong nước** và **nhà nghiên cứu nước ngoài** — mỗi loại có điểm mạnh và điểm mù riêng. Trang này liệt kê các nguồn thư viện đã dùng và cách đọc chúng. Quay lại [[lich-su-tan-nhac-viet-nam]]; phương pháp chung ở [[phuong-phap-su-hoc-am-nhac]] và [[nguon-tra-cuu-am-nhac-hoc]].

## 1. Báo chí đương thời (nguồn gốc)
| Nguồn | Dùng cho | Ghi chú |
|---|---|---|
| ***Ngày Nay*** (1938 – 1940) | Bài hát in đầu tiên, bài của Thế Lữ (26/6/1938), xã luận 21/8/1938 | Gibbs dẫn trực tiếp; bản báo có thể tra ở thư viện số |
| ***Việt Nhạc*** (1950, đài kháng chiến) | Danh mục hơn 300 bài | Theo Gibbs |
| ***Việt Nhạc*** (nguyệt san Sài Gòn, Thẩm Oánh chủ bút) | Đời sống âm nhạc miền Nam | Trùng tên, khác tạp chí |
| Báo Sài Gòn thập niên 1930 – 1970 | Quảng cáo đĩa, phòng trà, đại nhạc hội | Gibbs dùng báo 1910 – 1930 để nghiên cứu buôn bán đĩa hát |

## 2. Hồi ký, lời kể người trong cuộc
| Tác giả | Tác phẩm | Lưu ý |
|---|---|---|
| **Phạm Duy** | *Hồi ký* (4 tập, từ 1989); bản tiếng Anh do Cornell xuất bản; *Tân nhạc Việt Nam thuở ban đầu* | Rất chi tiết nhưng viết sau hàng chục năm, có góc nhìn riêng |
| **Lê Thương** | Bài viết về tân nhạc (Gibbs dẫn 1971) | |
| **Thẩm Oánh** | Bài nói 1952, bài viết 1948, 1953 | Gibbs dẫn |
| **Nguyễn Xuân Khoát** | Phỏng vấn 1942; hồi ký 1979 | Gibbs dẫn |
| **Nguyễn Văn Tuyên** | Phỏng vấn trên báo Người Lao Động (2005) | Lời kể lúc gần 100 tuổi |
| Nhiều tác giả | *Cách mạng kháng chiến và đời sống văn học 1945 – 1954* (hồi ký, 1995) | Văn nghệ kháng chiến nói chung |

## 3. Sách tổng thuật trong nước
| Sách | Năm | Ghi chú |
|---|---|---|
| Tú Ngọc, Nguyễn Thị Nhung, Vũ Tự Lân, Nguyễn Ngọc Oánh, Thái Phiên — *Âm nhạc mới Việt Nam: tiến trình và thành tựu* | 2000 | Công trình tổng thuật lớn nhất của giới nghiên cứu trong nước; Wikipedia dẫn nhiều; **thư viện chưa đọc trực tiếp** |
| Đỗ Kim Bảng — *Nhạc tiền chiến* | 1970 (Sài Gòn) | Góc nhìn miền Nam |
| Nguyễn Thụy Kha — *Nửa thế kỷ tân nhạc* | 1998 | |
| Nguyễn Thụy Kha — *Thế kỷ âm nhạc Việt Nam: một thời đạn bom* | 2017 | |
| Phạm Tú Hương — *Âm nhạc Việt Nam: tác giả – tác phẩm* | 2007 | |
| Lê Thiên Minh Khoa — *9 thập kỷ ca khúc tân nhạc Việt Nam* | 2019 | |
| Trần Quang Hải — *Lịch sử tân nhạc Việt Nam* (bài dài) | | Phân kỳ "giai đoạn tượng hình" |

## 4. Nghiên cứu nước ngoài
| Tác giả | Công trình | Nội dung |
|---|---|---|
| **Jason Gibbs** | "The West's Songs, Our Songs" (*Asian Music* 35/1, tr. 57 – 83); các bài trên *Nhac Viet* (1997) và ThingsAsian; sách *Rock Hà Nội và Rumba Cửu Long* (2008); bài nói *Missing Legacy* (2025) | Nguồn gốc tân nhạc, đĩa hát trước 1945, nhạc Sài Gòn |
| **Michael McClellan** | Bài về dạy nhạc ở Hà Nội thuộc địa (*Fontes Artis Musicae*, 2009) | [[nhac-vien-vien-dong]] |
| **Lonán Ó Briain** | *Voices of Vietnam: A Century of Radio, Red Music, and Revolution* (2021) | Phát thanh và nhạc cách mạng |
| Các tác giả khác | Barley Norton, Lauren Meeker, Dale Olsen… | Xem [[nghien-cuu-am-nhac-viet-nam]] |

## 5. Âm thanh và lưu trữ
- Đĩa 78 vòng (Beka, Odéon, Pathé, RCA Victor, Oria), băng và đĩa Sài Gòn; nhiều bản đang được nhà sưu tầm số hoá — xem [[am-nhac-thoi-phap-thuoc]], [[lich-su-thu-am]].
- Bản in bài hát (thạch bản của nhóm Tricéa, tập bài hát của Đồng Vọng).

## Cách đọc
1. **Phân biệt nguồn gốc và nguồn kể lại.** Một con số trên Wikipedia hay blog nhạc xưa thường không ghi nguồn; thư viện đánh dấu "chưa đối chiếu".
2. **Hồi ký là lời chứng, không phải biên niên.** Đối chiếu ngày tháng với báo chí đương thời.
3. **Đọc cả hai phía cho giai đoạn 1945 – 1975.** Sách trong nước, sách hải ngoại và nghiên cứu nước ngoài thường chọn kể những chuyện khác nhau.
4. **Ghi lại chỗ vênh** thay vì chọn đại một phiên bản — như ngày buổi diễn 1938 ([[nhac-cai-cach-1938]]) hay tên đầu của *Con thuyền không bến* ([[dang-the-phong]]).
5. **Bài giảng trên lớp** là điểm khởi đầu tốt; hỏi giảng viên **sách nguồn** của từng mốc (ví dụ mốc 1922 và 1923 – 1925 ở [[tien-de-tan-nhac]]).
`,
  },
  {
    slug: "nguyen-van-tuyen",
    title: "Nguyễn Văn Tuyên (1909 – 2009)",
    category: 'vietnam',
    aliases: ["Nguyễn Văn Tuyên", "nhạc sĩ Nguyễn Văn Tuyên", "Kiếp hoa"],
    summary: "Ca sĩ – nhạc sĩ người Huế, thường được gọi là người mở đầu phong trào nhạc cải cách: vào Sài Gòn năm 1936, viết Kiếp hoa (1937, thơ Nguyễn Văn Cổn), được Thống đốc Nam Kỳ Pagès tài trợ chuyến đi Huế – Hà Nội – Hải Phòng – Nam Định năm 1938; Ngày Nay in Một kiếp hoa (7/8/1938). Ông mất ngày 30/4/2009 tại TP.HCM; các nhà phê bình cho rằng giá trị nghệ thuật các bài của ông không cao.",
    refs: [
      ["Wikipedia tiếng Việt — Nguyễn Văn Tuyên (nhạc sĩ)", "https://vi.wikipedia.org/wiki/Nguy%E1%BB%85n_V%C4%83n_Tuy%C3%AAn_(nh%E1%BA%A1c_s%C4%A9)"],
      ["Người Lao Động (qua Tuổi Trẻ, 2005) — Người ca sĩ đầu tiên của tân nhạc", "https://tuoitre.vn/nld/van-hoa-van-nghe/nguoi-ca-si-dau-tien-cua-tan-nhac-110830.htm"],
      ["Người Lao Động (2009) — Vĩnh biệt nhạc sĩ Nguyễn Văn Tuyên", "https://nld.com.vn/van-hoa-van-nghe/vinh-biet-nhac-si-nguyen-van-tuyen-2009050209189870.htm"],
    ],
    body: `
**Nguyễn Văn Tuyên** sinh năm 1909 ở Huế (một nguồn ghi làng Kim Long, trong gia đình Công giáo nghèo), tự học nhạc lý qua sách Pháp. Quay lại [[lich-su-tan-nhac-viet-nam]].

## Cuộc đời
| Năm | Sự kiện |
|---|---|
| 1936 | Vào Sài Gòn; hội viên người Việt duy nhất của hội Philharmonique; hát nhạc Tây trên đài. Ông kể: "Năm 1936, tại Sài Gòn chỉ có một ca sĩ duy nhất — đó là tôi" (Người Lao Động, 2005) |
| 1937 | *Kiếp hoa*, phổ thơ Nguyễn Văn Cổn — bài đầu tay; Thống đốc Pagès mời đi Pháp học, ông từ chối |
| 1938 | Chuyến đi cổ động nhạc cải cách Huế – Hà Nội – Hải Phòng – Nam Định do Pagès tài trợ; hát *Kiếp hoa*, *Bông cúc vàng*, *Anh hùng ca* — xem [[nhac-cai-cach-1938]] |
| 7/8/1938 | *Ngày Nay* số 122 in *Một kiếp hoa* (Thế Lữ chuyển bài tới báo) |
| Đầu 1939 | Thu đĩa RCA Victor, gửi ép ở Thượng Hải; theo lời ông, chiến tranh làm thất lạc, chỉ *Anh hùng ca* về nước |
| 30/4/2009 | Mất ở TP. Hồ Chí Minh, khoảng 100 tuổi |
Wikipedia tiếng Việt ghi tên thống đốc đôi khi được chép là "Rivoal".

## Đánh giá
- Vai trò **người cổ động** quan trọng hơn vai trò sáng tác: chính ông nói tân nhạc cần được **biểu diễn và giới thiệu** trước công chúng.
- Wikipedia tiếng Việt dẫn ý kiến các nhà phê bình rằng các bài của ông **giá trị nghệ thuật không cao** và về sau bị quên.
- Ông và [[nguyen-xuan-khoat|Nguyễn Xuân Khoát]] được một nghiên cứu trong nước coi là hai người tiên phong của tân nhạc ([[am-nhac-thoi-phap-thuoc]]).
`,
  },
  {
    slug: "tham-oanh",
    title: "Thẩm Oánh (1916 – 1996)",
    category: 'vietnam',
    aliases: ["Thẩm Oánh", "Thẩm Ngọc Oánh"],
    summary: "Thẩm Ngọc Oánh, sinh ở Hà Nội năm 1916, một trong những người lập nhóm Myosotis; Khúc yêu đương được in trên Ngày Nay năm 1938. Sau 1954 vào Nam: giám đốc trường Ca – vũ – nhạc phổ thông Sài Gòn (1955–1958), dạy xướng âm và nhạc lý ở Trường Quốc gia Âm nhạc, chủ bút nguyệt san Việt Nhạc. Sang Mỹ năm 1991, mất năm 1996.",
    refs: [
      ["Wikipedia tiếng Việt — Thẩm Oánh", "https://vi.wikipedia.org/wiki/Th%E1%BA%A9m_O%C3%A1nh"],
      ["Jason Gibbs — Nhac Tien Chien: The Origins of Vietnamese Popular Song", "http://thingsasian.com/node/3464.html"],
    ],
    body: `
**Thẩm Oánh** (Thẩm Ngọc Oánh, sinh 14/8/1916 tại Hà Nội, mất 2/1/1996) là một trong những người khai sinh tân nhạc ở Hà Nội. Quay lại [[lich-su-tan-nhac-viet-nam]].

## Tân nhạc thời đầu
- Cùng [[duong-thieu-tuoc|Dương Thiệu Tước]] và Nguyễn Thiện Tơ lập nhóm **Myosotis**; trong nhóm, ông nghiêng về **âm hưởng dân tộc** ([[nhom-sang-tac-tan-nhac-dau-tien]]).
- *Khúc yêu đương* được *Ngày Nay* in năm 1938 ([[nhac-cai-cach-1938]]). Các bài khác: *Xuân về*, *Trưng Nữ Vương*, *Tôi bán đường tơ*, *Nhớ nhung* (Wikipedia tiếng Việt, không ghi năm).
- Theo Gibbs, Thẩm Oánh viết về sự phát triển của nhạc cải cách (1948) và trong bài nói ở Đại học Hà Nội năm 1952 trình bày phong trào như cách **nâng vị thế văn hoá** Việt Nam.

## Ở miền Nam và hải ngoại
| Năm | Sự kiện |
|---|---|
| 1955 – 1958 | Giám đốc trường Ca – vũ – nhạc phổ thông Sài Gòn |
| | Dạy xướng âm, nhạc lý ở Trường Quốc gia Âm nhạc và Kịch nghệ Sài Gòn; phó chủ tịch Việt Nam Nhạc Hội, chủ bút nguyệt san *Việt Nhạc* |
| 1991 | Sang vùng Washington, D.C. |
| 4/1993 | Hội cựu nữ sinh Trưng Vương tổ chức đêm "60 năm âm nhạc Thẩm Oánh" |

Lưu ý nguồn: trang Wikipedia tiếng Việt về ông **không có chú thích nguồn** và ghi tuổi thọ không thống nhất (79 hay 80).

Xem thêm [[tan-nhac-mien-nam-1954-1975]], [[nhac-tien-chien]].
`,
  },
  {
    slug: "duong-thieu-tuoc",
    title: "Dương Thiệu Tước (1915 – 1995)",
    category: 'vietnam',
    aliases: ["Dương Thiệu Tước", "Đêm tàn bến Ngự", "Ngọc lan"],
    summary: "Nhạc sĩ tiền chiến, cháu nội nhà thơ Dương Khuê; học đàn nguyệt, đàn tranh từ nhỏ và piano ở Nhạc viện Viễn Đông, guitar từ 1931; cùng Thẩm Oánh lập nhóm Myosotis. Bài đầu tay Tâm hồn anh tìm em (1936); nổi tiếng với Đêm tàn bến Ngự, Tiếng xưa, Thề non nước (bộ ba vùng miền), Ngọc lan, Chiều (1953). Sau 1954 ở Sài Gòn, dạy Trường Quốc gia Âm nhạc; sau 1975 nhạc bị cấm, ông ngừng sáng tác.",
    refs: [
      ["Wikipedia tiếng Việt — Dương Thiệu Tước", "https://vi.wikipedia.org/wiki/D%C6%B0%C6%A1ng_Thi%E1%BB%87u_T%C6%B0%E1%BB%9Bc"],
      ["Jason Gibbs — Reform and Tradition in Early Vietnamese Popular Song", "http://thingsasian.com/node/3465.html"],
      ["RFA (2005) — Dương Thiệu Tước", "https://www.rfa.org/vietnamese/news/programs/MusicForWeekend/music_DuongThieuTuoc_TNga-20050801.html"],
    ],
    body: `
**Dương Thiệu Tước** sinh ngày 15/5/1915 ở làng Vân Đình (Ứng Hoà, Hà Đông; nay thuộc Hà Nội), trong một gia đình Nho học — cháu nội nhà thơ **Dương Khuê**. Quay lại [[lich-su-tan-nhac-viet-nam]].

## Học nhạc hai đường
- Lên 7 tuổi học **đàn nguyệt, đàn tranh** và nhạc cổ; lên 14 học **piano** với một giáo sư Pháp ở [[nhac-vien-vien-dong|Nhạc viện Viễn Đông]] (Wikipedia tiếng Việt); theo Gibbs, ông bắt đầu học **guitar cổ điển** năm 1931, lúc 16 tuổi.
- Mở cửa hàng đàn mandoline ở Hà Nội; cùng [[tham-oanh|Thẩm Oánh]], Nguyễn Thiện Tơ lập nhóm **Myosotis** ([[nhom-sang-tac-tan-nhac-dau-tien]]).

## Sáng tác
| Bài | Năm | Ghi chú |
|---|---|---|
| *Tâm hồn anh tìm em* | 1936 | Bài đầu tay, nhịp nhảy phương Tây |
| *Ngọc lan*, *Bóng chiều xưa* | Thời Myosotis | |
| *Đêm tàn bến Ngự* | Khoảng 1951 (Gibbs) | Dựa trên điệu thức Huế |
| *Tiếng xưa*, *Thề non nước* | | Cùng *Đêm tàn bến Ngự* thành **bộ ba vùng miền**: Nam, Bắc, Trung (Gibbs) |
| *Chiều* | 1953 | Phổ thơ Hồ Dzếnh |
Năm 1948 ông viết các bài luận kêu gọi **canh tân âm nhạc Việt** (Gibbs). Wikipedia ghi ông có hơn 200 bài — **chưa đối chiếu**; bài [[nhac-tien-chien]] dẫn nguồn khác ghi "hơn 50 bài".

Dương Thiệu Tước là ví dụ rõ nhất của **hai dòng âm nhạc trong một người**: nền nhạc cổ truyền và ngôn ngữ phương Tây — đúng câu hỏi "tính Việt Nam" của [[nhac-cai-cach-1938]] và [[sang-tac-voi-chat-lieu-viet]].

## Sau 1954
- Vào Sài Gòn; điều khiển ban *Cổ kim hoà điệu* trên Đài phát thanh Sài Gòn; dạy ở Trường Quốc gia Âm nhạc và Kịch nghệ ([[tan-nhac-mien-nam-1954-1975]]).
- Năm 1951 kết hôn với ca sĩ **Minh Trang**.
- Sau 1975 bị cho nghỉ dạy, nhạc bị cấm trong nước, ông ngừng sáng tác; một số bài được phổ biến lại sau Đổi mới.

**Năm mất**: phần thông tin của Wikipedia tiếng Việt ghi 1/8/1995, thân bài ghi 1/8/1998 — **mâu thuẫn ngay trong một nguồn**; thư viện dùng 1995 theo Gibbs (1915 – 1995).
`,
  },
  {
    slug: "dang-the-phong",
    title: "Đặng Thế Phong (1918 – 1942)",
    category: 'vietnam',
    aliases: ["Đặng Thế Phong", "Con thuyền không bến", "Giọt mưa thu", "Đêm thu"],
    summary: "Nhạc sĩ tiền chiến người Nam Định, mất vì lao năm 1942 khi mới 24 tuổi; để lại ba bài về mùa thu: Đêm thu (1940), Con thuyền không bến (hát ở rạp Olympia, Hà Nội, 1940 hoặc 1941), Giọt mưa thu (1942). Các nguồn khác nhau về bài nào từng mang tên Vạn cổ sầu và về một số ngày tháng.",
    refs: [
      ["Wikipedia tiếng Việt — Đặng Thế Phong", "https://vi.wikipedia.org/wiki/%C4%90%E1%BA%B7ng_Th%E1%BA%BF_Phong"],
      ["Tiền Phong — tìm thấy một nhạc phẩm của Đặng Thế Phong", "https://tienphong.vn/van-nghe/vua-tim-thay-mot-nhac-pham-cua-dang-the-phong-34732.tpo"],
    ],
    body: `
**Đặng Thế Phong** sinh năm 1918 ở Nam Định, mất ngày 2/8/1942 cũng ở Nam Định vì bệnh lao, khi mới 24 tuổi. Ông học dự thính ở Cao đẳng Mỹ thuật Đông Dương, vào Nam đầu 1941, sang Phnôm Pênh dạy nhạc rồi về quê (Wikipedia tiếng Việt). Quay lại [[lich-su-tan-nhac-viet-nam]].

## Ba bài thu
| Bài | Năm | Ghi chú |
|---|---|---|
| *Đêm thu* | 1940 | Viết cho một buổi lửa trại của sinh viên Hà Nội |
| *Con thuyền không bến* | 1940 hoặc 1941 | Hoàn thành ở Phnôm Pênh, hát lần đầu ở rạp **Olympia** (Hà Nội); Wikipedia ghi cả hai năm |
| *Giọt mưa thu* | 1942 | Viết trên giường bệnh |
Ngoài ra *Gắng bước lên chùa* được tìm thấy in trên báo năm 1940 (Tiền Phong, 2006; xem [[nhac-tien-chien]]).

## Chỗ các nguồn vênh nhau
- **Tên "Vạn cổ sầu"**: bài [[nhac-tien-chien]] của thư viện (theo nguồn đã dẫn ở đó) ghi đây là tên đầu của *Con thuyền không bến*; Wikipedia tiếng Việt ghi đây là tên đầu của *Giọt mưa thu*, bạn bè khuyên đổi. **Chưa xác định được bên nào đúng.**
- **Ngày sinh**: phần thông tin ghi 14/4, thân bài ghi 5/4/1918.
- Phạm Duy còn gán cho ông bài *Sáng rừng*.

## Ảnh hưởng
*Giọt mưa thu* gợi cảm hứng cho *Tiếc thu* (Hoàng Dương); có ý kiến cho rằng *Ướt mi* của Trịnh Công Sơn chịu ảnh hưởng của bài này (Wikipedia tiếng Việt — ý kiến, không phải sự kiện). Về âm nhạc: giai điệu thứ, nhịp chậm, hoà âm đơn giản — rất hợp để tập đệm ([[dem-dieu-viet-nam]]).

Xem [[nhom-sang-tac-tan-nhac-dau-tien]], [[nhac-tien-chien]].
`,
  },
  {
    slug: "hoang-quy",
    title: "Hoàng Quý (1920 – 1946)",
    category: 'vietnam',
    aliases: ["Hoàng Quý", "Hoàng Kim Quý", "Cô láng giềng"],
    summary: "Trưởng nhóm Đồng Vọng ở Hải Phòng, tác giả khoảng 60 trong chừng 70 bài của nhóm: Cô láng giềng, Trên sông Bạch Đằng, Cảm tử quân, Chiều quê, Nhớ quê hương (1939). Ông mất vì bệnh phổi ở Hải Phòng năm 1946, lúc 25 tuổi.",
    refs: [
      ["Wikipedia tiếng Việt — Hoàng Quý", "https://vi.wikipedia.org/wiki/Ho%C3%A0ng_Qu%C3%BD"],
      ["Hội Nhạc sĩ Việt Nam — Những nhóm sáng tác đầu tiên của tân nhạc", "https://hoinhacsi.vn/news/nhung-nhom-sang-tac-dau-tien-vao-thuo-binh-minh-cua-tan-nhac-viet-nam-thap-nien-1930-ban-dang-sao-chep-noi-dung-cua-nhacxuavn-neu-su-dung-cho-blog-ca-nhan-vui-long-ghi-ro-nguon-nhacxuavn-kem-theo-link-bai-viet-neu-la-website-kenh-truyen-thong-hoac-lien-quan-den-thuong-mai-vui-long-lien-he-truoc-de-duoc-dong-y-moi-hinh-thuc-vi-pham-ban-quyen-noi-dung-de-kiem-tien-thong-qua-mmo-deu-se-bi-report-den-facebook-va-adsense-khong-duoc-doc-lai-bai-viet-de-tao-video-tren-youtube"],
    ],
    body: `
**Hoàng Quý** (tên khai sinh Hoàng Kim Hải, sau đổi là Hoàng Kim Quý) sinh ngày 31/10/1920 ở Hải Phòng, mất ngày 26/6/1946 cũng ở Hải Phòng vì bệnh phổi, lúc 25 tuổi. Quay lại [[lich-su-tan-nhac-viet-nam]].

## Nhóm Đồng Vọng
- Trưởng nhóm **Đồng Vọng** (cùng [[van-cao|Văn Cao]], Phạm Ngữ, Canh Thân, Tô Vũ…); nhóm ra mắt hè 1939 ở Nhà hát Lớn Hải Phòng — các nguồn khác nhau về năm thành lập và tên gọi ([[nhom-sang-tac-tan-nhac-dau-tien]]).
- Đồng Vọng in khoảng 12 tập, chừng 70 bài; Hoàng Quý viết khoảng 60 (Wikipedia tiếng Việt, dẫn Tú Ngọc 2000, Phạm Tú Hương 2007, Nguyễn Thụy Kha 2017, Lê Thiên Minh Khoa 2019, Phạm Duy 2017).

## Bài tiêu biểu
| Bài | Loại |
|---|---|
| *Nhớ quê hương* (1939, với Phạm Ngữ) | Bài in đầu tiên |
| *Cô láng giềng* | Trữ tình, nổi tiếng nhất |
| *Trên sông Bạch Đằng* | Sử ca, hành khúc |
| *Cảm tử quân* | Ca khúc cách mạng |
| *Chiều quê* | Được nhắc như ví dụ **Việt hoá nhịp valse** |
| *Tiếng hát chinh phu*, *Hòn vọng phu* | Sân khấu, hợp xướng dài |

Hoàng Quý là đại diện của hướng **yêu nước – thanh niên** trong tân nhạc trước 1945, nhưng *Cô láng giềng* cho thấy ông cũng viết trữ tình — hai hướng chưa tách rời như về sau.
`,
  },
  {
    slug: "dinh-nhu",
    title: "Đinh Nhu (1910 – 1945)",
    category: 'vietnam',
    aliases: ["Đinh Nhu", "Cùng nhau đi hồng binh", "Cùng nhau đi hùng binh"],
    summary: "Nhạc sĩ cách mạng người Hải Phòng, tác giả hành khúc Cùng nhau đi hồng binh (1930–1931, viết khi bị giam ở Hoả Lò trong phong trào Xô Viết Nghệ Tĩnh) — được báo chí trong nước gọi là ca khúc cách mạng đầu tiên, có nơi gọi là ca khúc tân nhạc đầu tiên. Ông mất năm 1945 ở Yên Bái.",
    refs: [
      ["Wikipedia — Đinh Nhu", "https://en.wikipedia.org/wiki/%C4%90inh_Nhu"],
      ["Báo Nhân Dân — Những ca khúc viết về Đảng trong mạch nguồn âm nhạc dân tộc", "https://nhandan.vn/special/nhung-ca-khuc-viet-ve-dang-trong-mach-nguon-am-nhac-dan-toc/index.html"],
      ["Báo Đại Đoàn Kết — Những giai điệu tự hào ra đời trong thời kỳ khai sinh đất nước", "https://daidoanket.vn/nhung-giai-dieu-tu-hao-ra-doi-trong-thoi-ky-khai-sinh-dat-nuoc.html"],
    ],
    body: `
**Đinh Nhu** sinh năm 1910 ở Hải Phòng, mất năm 1945 ở Yên Bái. Quay lại [[lich-su-tan-nhac-viet-nam]].

## Cùng nhau đi hồng binh
- Viết năm **1930** (Đại Đoàn Kết) hoặc trong khoảng **1930 – 1931** (Nhân Dân), thời phong trào **Xô Viết Nghệ Tĩnh**, khi tác giả bị giam ở **Hoả Lò**; trong tù ông còn tổ chức kịch và hợp xướng.
- Tên bài có hai cách viết: *hồng binh* và *hùng binh*.
- Theo báo Hà Tĩnh, ngày 19/8/1945 đoàn người kéo đến quảng trường Nhà hát Lớn Hà Nội vừa đi vừa hát bài này.
- Bài của Đỗ Hồng Quân (2021) gọi đây là hành khúc cách mạng sớm nhất được **ghi bằng khuông nhạc**.

## Vị trí trong lịch sử
Báo chí trong nước gọi *Cùng nhau đi hồng binh* là **ca khúc đầu tiên của tân nhạc**, mở đầu dòng ca khúc cách mạng. Các nghiên cứu nước ngoài (Gibbs) và nhiều sách hải ngoại lại tính mốc từ các buổi diễn công khai năm 1938. Hai cách nhìn dựa trên **hai tiêu chí khác nhau** — xem bảng ở [[nhac-cai-cach-1938]] và dòng [[nhac-cach-mang]].
`,
  },
]
