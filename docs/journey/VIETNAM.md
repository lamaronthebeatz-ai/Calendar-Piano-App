# Hành trình Việt Nam — thiết kế (16/11/2026)

Lamar yêu cầu: một hành trình **chơi độc lập** với chuỗi chương thế giới, cùng công thức (chương = thời kỳ, chặng = cảnh có câu hỏi đọc bài, phiên toà, bối cảnh, bản đồ cổ, nhạc thật; sau đó tuyến điều tra), gắn với lịch sử và các cuộc chiến của Việt Nam, kể sinh động.

## Kiến trúc
- `chapters/index.ts`: `TRACKS` = hành trình thế giới (`CHAPTERS`) và hành trình Việt Nam (`VN_CHAPTERS`); `ALL_CHAPTERS`, `trackOf(id)`.
- `progress.ts` `opened(chapter, save)`: chương đầu **của mỗi hành trình** mở sẵn; chương sau mở khi chương trước **cùng hành trình** xong. Save dùng chung (id chương, cảnh, thẻ đều khác nhau — test đòi không trùng).
- `JourneyPage`: `?t=viet-nam` chọn hành trình, `?c=` chọn chương (suy ra hành trình); hàng nút "Hành trình thế giới / Hành trình Việt Nam" trên bản đồ chương. Lữ hành vô tận, thử thách ngày, NG+ vẫn chỉ cho hành trình thế giới (kho câu hỏi sinh từ tiểu sử nhạc sĩ châu Âu).
- Nội dung: `chapters/vn-*.ts`, `music-vn.ts` (gộp vào `MUSIC`), `context-vn.ts` (gộp vào `CONTEXT`), bản đồ `map-vn` (Taberd 1838) trong `maps.ts`, style `jr-era-vn`.

## Sáu chương
| | Chương | Năm | Chặng |
|---|---|---|---|
| I | Tiếng trống và bãi cọc | Đông Sơn – 1789 | trống đồng, Bạch Đằng 938, trống Chăm 1060, Bạch Đằng 1288, Nguyễn Trãi định nhạc lễ, trống Tây Sơn, Ngọc Hồi – Đống Đa |
| II | Nhã nhạc và tiếng súng phương Nam | 1802 – 1920 | nhã nhạc, ca Huế, Đà Nẵng 1858, ca trù, kinh thành 1885 – Cần Vương, đờn ca tài tử, Dạ cổ hoài lang |
| III | Kèn Tây và bài hát mới | 1900 – 1945 | ghi âm 1900, Nhạc viện Viễn Đông, Nguyễn Văn Tuyên 1938, báo Ngày Nay, Đặng Thế Phong, Tiến quân ca, tháng Tám 1945 |
| IV | Những bài ca kháng chiến | 1946 – 1954 | Hà Nội 1946, sông Lô, Việt Bắc, người về thành, đĩa Oria, Điện Biên Phủ, Genève – di cư |
| V | Hai miền, một dải đất | 1954 – 1975 | hai trường nhạc 1956, phòng trà Sài Gòn, Cô Sao, Hoàng Việt, Mậu Thân – nhạc phản chiến, du ca, Hà Nội 12/1972, 30/4/1975 |
| VI | Sau tiếng súng | 1975 – 2021 | thống nhất, thuyền nhân, biên giới 1979, Chopin 1980, Paris By Night, Đổi mới, Làn Sóng Xanh – Nghị định 144 |

## Luật riêng của hành trình này
- **Nguồn**: thư viện chưa có bài lịch sử chiến tranh → viết trước 6 bài `lich-su-viet-nam-*` (`content/lich-su-viet-nam.ts`) từ Wikipedia tiếng Anh, ghi con số thương vong kèm khoảng ước tính và **của bên nào**.
- **Trung lập**: dùng cả hai tên gọi (kháng chiến chống Pháp / Chiến tranh Đông Dương lần thứ nhất; kháng chiến chống Mỹ / Chiến tranh Việt Nam); khi các bên đưa con số khác nhau thì ghi cả. Hai miền 1954 – 1975 kể bằng nguồn của mỗi miền.
- **Người còn sống** không bị gán lời thoại bịa: chặng có họ do nhân vật hư cấu kể (Đặng Thái Sơn, các nhạc sĩ đương thời).
- **Bản quyền**: không chép lời bài hát còn bản quyền; chỉ nêu tên bài.
- **Nhạc nền**: Commons gần như không có bản thu tự do của nhạc cổ truyền Việt Nam; dùng 8 bản có thật (tụng kinh, Đăng đàn cung bản dựng lại, đĩa cải lương Beka k. 1928, Quốc ca, Tuyên ngôn độc lập bản đọc lại, quốc ca VNCH, đài Sài Gòn 1974) và ghi `note` "âm thanh minh hoạ" ở cảnh không có bản đúng thời kỳ.

## Còn làm
- Tuyến điều tra cho từng chương (Phase VN-3), cùng công thức Phase 7.
- Tìm thêm bản thu tự do của nhạc cổ truyền (Internet Archive, CREM-CNRS) để thay âm thanh minh hoạ.
