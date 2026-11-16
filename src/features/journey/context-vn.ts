import type { ContextPanel } from './context'

/** Bối cảnh lịch sử các chương Hành trình Việt Nam: mọi sự kiện lấy từ các bài lịch sử và âm nhạc Việt Nam của thư viện. */
export const CONTEXT_VN: Record<string, ContextPanel[]> = {
  'vn-co-dai': [
    { title: 'Âm nhạc trước chữ viết', text: 'Bằng chứng âm nhạc cổ nhất ở Việt Nam là hiện vật: trống đồng Đông Sơn, và bộ đàn đá mười một thanh người M\'nông đào được ở Đắk Lắk năm 1949. Đọc những hình trên mặt trống là việc của nhà khảo cổ — báo chí thường đọc nhanh hơn họ.', img: 'vn-dong-son', read: 'am-nhac-co-trung-dai-viet-nam' },
    { title: 'Những dòng sông cắm cọc', text: 'Năm 938 trên sông Bạch Đằng, Ngô Quyền đánh hạm đội Nam Hán bằng bãi cọc và con nước; năm 1288 Trần Hưng Đạo dùng lại cách đánh ấy với quân Nguyên. Giữa hai trận là ba trăm năm của triều Lý, triều Trần.', img: 'vn-bach-dang', read: 'viet-nam-giu-nuoc-938-1802' },
    { title: 'Trống Chăm, kinh Phật, nhạc lễ', text: 'Âm nhạc triều đình tiếp nhận cả Chăm lẫn Trung Hoa; Phật giáo để dấu ấn lớn. Thời Lê sơ, Nguyễn Trãi và Lương Đăng tranh luận khi định nhạc lễ.', img: 'vn-van-mieu', read: 'am-nhac-co-trung-dai-viet-nam' },
    { title: 'Mười hai chiếc trống', text: 'Từ năm 1771 phong trào Tây Sơn nổi lên ở Bình Định; Tết 1789 Quang Trung đánh quân Thanh ở Ngọc Hồi – Đống Đa. Bộ trống trận Tây Sơn còn đó; chuyện nổi trống sau mỗi trận thắng thì chỉ là tương truyền.', img: 'vn-tay-son', read: 'viet-nam-giu-nuoc-938-1802' },
  ],
  'vn-nguyen': [
    { title: 'Kinh đô bên sông Hương', text: 'Năm 1802 Gia Long lên ngôi, đóng đô ở Phú Xuân — nay là Huế. Nhã nhạc được thể chế hoá; ca Huế định hình trong thế kỷ 19.', img: 'vn-hue', read: 'am-nhac-thoi-nguyen' },
    { title: 'Tàu chiến và hoà ước', text: 'Ngày 1/9/1858 Pháp đánh Đà Nẵng. Các hoà ước 1883 – 1884 đặt nền bảo hộ; tháng 7/1885, sau cuộc tấn công thất bại ở Huế, vua Hàm Nghi ra chiếu Cần Vương.', img: 'vn-da-nang', read: 'viet-nam-1802-1945' },
    { title: 'Phương Nam', text: 'Cuối thế kỷ 19, ở Nam Bộ, đờn ca tài tử thành hình trên nền nhạc lễ và dân ca; đầu thế kỷ 20 ra đời cải lương và bài vọng cổ.', img: 'vn-tai-tu', read: 'don-ca-tai-tu' },
  ],
  'vn-phap-thuoc': [
    { title: 'Nhà thờ, kèn Tây, đĩa hát', text: 'Âm nhạc phương Tây vào Việt Nam chủ yếu qua nhà thờ và quân nhạc. Từ năm 1900 nhạc Việt bắt đầu được ghi âm; từ khoảng 1906 hãng Beka thu hàng trăm bản.', img: 'vn-ha-noi-1900', read: 'am-nhac-thoi-phap-thuoc' },
    { title: 'Bài hát của chính mình', text: 'Năm 1938, những bài hát Việt viết theo lối Tây ra mắt công chúng và lên mặt báo Ngày Nay. Người đương thời gọi là nhạc cải cách; sau này gọi là tân nhạc.', img: 'vn-nha-hat-lon', read: 'nhac-cai-cach-1938' },
    { title: 'Mùa thu năm 1945', text: 'Tháng 8/1945 Việt Minh giành chính quyền; ngày 2/9 Hồ Chí Minh đọc Tuyên ngôn độc lập ở Hà Nội. Tiến quân ca của Văn Cao, viết cuối 1944, thành quốc ca.', img: 'vn-ha-noi-1945', read: 'chien-tranh-dong-duong-1945-1954' },
  ],
  'vn-khang-chien': [
    { title: 'Chiến khu và đô thị', text: 'Từ đêm 19/12/1946, tân nhạc chia thành hai không gian: chiến khu của Việt Minh và các đô thị do Pháp kiểm soát. Ở chiến khu có văn công, ca khúc kháng chiến; ở đô thị có phòng trà, đài phát thanh, tình ca.', img: 'vn-viet-bac', read: 'tan-nhac-1945-1954' },
    { title: 'Tám năm chiến tranh', text: 'Chiến tranh 1946 – 1954 lấy đi khoảng 400.000 đến hơn 800.000 sinh mạng theo các ước tính khác nhau, trong đó rất nhiều dân thường. Nó kết thúc sau trận Điện Biên Phủ (13/3 – 7/5/1954).', img: 'vn-dien-bien', read: 'chien-tranh-dong-duong-1945-1954' },
    { title: 'Một đất nước bị chia đôi', text: 'Hiệp định Genève (21/7/1954) chia Việt Nam ở vĩ tuyến 17, gọi là ranh giới tạm thời. Ít nhất 892.876 người miền Bắc vào Nam; tổng tuyển cử dự định năm 1956 không bao giờ diễn ra.', img: 'vn-di-cu', read: 'chien-tranh-dong-duong-1945-1954' },
  ],
  'vn-hai-mien': [
    { title: 'Hai đời sống âm nhạc', text: 'Ở miền Bắc, âm nhạc thành một bộ phận của bộ máy văn hoá nhà nước: trường, hội, đài, đoàn nghệ thuật. Ở miền Nam, tân nhạc lớn lên như một thị trường, trong một xã hội chiến tranh và có kiểm duyệt.', img: 'vn-sai-gon', read: 'am-nhac-viet-nam-1945-1975' },
    { title: 'Chiến tranh lan rộng', text: 'Từ khoảng năm 1955 đến 30/4/1975: Vịnh Bắc Bộ, Ia Drang, Tết Mậu Thân, mười hai ngày đêm ném bom Hà Nội, Hiệp định Paris. Số người Việt Nam thiệt mạng được ước tính từ khoảng 970.000 đến 3 triệu.', img: 'vn-hue-1968', read: 'chien-tranh-viet-nam-1954-1975' },
    { title: 'Những bài hát chống chiến tranh', text: 'Ở Sài Gòn có du ca, có ca khúc phản chiến của Trịnh Công Sơn — bị cả hai chính quyền kiểm duyệt ở những mức khác nhau. Ở Hà Nội có opera, giao hưởng đầu tiên, và những nhạc sĩ ngã xuống ở chiến trường.', img: 'vn-song-nuoc', read: 'tan-nhac-mien-nam-1954-1975' },
  ],
  'vn-sau-1975': [
    { title: 'Thống nhất và chia ly', text: 'Ngày 2/7/1976 đất nước thống nhất. Nhạc vàng bị cấm; từ năm 1978 làn sóng thuyền nhân mang theo cả những bài hát ra biển.', img: 'vn-thuyen-nhan', read: 'viet-nam-sau-1975' },
    { title: 'Đổi mới', text: 'Từ cuối năm 1986, Đổi mới mở đường cho nhạc nhẹ phục hồi, rồi nhạc trẻ, rồi một thị trường V-pop. Nhạc hải ngoại lớn lên song song ở Paris và California.', img: 'vn-nha-hat-lon', read: 'am-nhac-viet-nam-sau-1975' },
    { title: 'Những bài hát cũ được hát lại', text: 'Ca khúc trước 1975 phải xin phép phổ biến cho tới khi Nghị định 144/2020 có hiệu lực ngày 1/2/2021 — nhưng các danh sách bài bị cấm vẫn còn hiệu lực.', img: 'vn-sai-gon', read: 'am-nhac-viet-nam-sau-1975' },
  ],
}
