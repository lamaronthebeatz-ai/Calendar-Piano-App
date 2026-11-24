# Phần 2. Bản đồ route

## 2.1. Quy ước địa chỉ

Mọi địa chỉ có dạng **https://lamaronthebeatz-ai.github.io/Calendar-Piano-App/#/đường-dẫn?tham-số**. Phần sau dấu # do ứng dụng xử lý (React Router, `createHashRouter`), nên mở thẳng bất kỳ địa chỉ nào cũng được. Không cần máy chủ hiểu đường dẫn.

Mọi trang đều nằm trong một *khung chung* (AppShell). Khung này gồm thanh điều hướng, ngăn kéo, bảng tìm kiếm ⌘K, thẻ xem nhanh khi bấm liên kết (LinkPeekHost) và trang báo lỗi (RouteError). Mỗi trang chỉ được tải mã khi mở lần đầu (lazy loading). Trong lúc chờ tải, màn hình hiện logo.

## 2.2. Danh sách route

| Route | Trang | Ghi chú |
|---|---|---|
| #/ | Thời khoá biểu | Riêng tư (PrivateArea) |
| #/students | Danh sách học viên | Riêng tư |
| #/students/:id | Hồ sơ một học viên | Riêng tư |
| #/home | Trang chủ | Trang mở đầu |
| #/theory | Trang chủ Lý thuyết | Thẻ các mục, tìm kiếm |
| #/theory/:slug | Một bài viết | slug = mã bài, ví dụ doi-vi-don-gian-hai-be |
| #/musicology | Trang chủ Âm nhạc học (bầu trời) | |
| #/musicology/:branch | Một phân ngành | branch = mã phân ngành; ban-do = bản đồ âm nhạc |
| #/explore | Mạng tri thức | Người, tác phẩm, dòng thời gian, dòng truyền |
| #/graph | Đồ thị đối tượng | Tham số id |
| #/umk | Trung tâm tri thức (UMK): phân loại, thuật ngữ, sổ luật, nguồn, khoảng trống | Tham số id, tab |
| #/terms | Từ điển âm nhạc | Grove, thuật ngữ đa ngữ |
| #/sources | Thư mục học | |
| #/sources/:id | Trang một nguồn | id = mã nguồn; cua-toi = Nguồn của tôi |
| #/curriculum | Tủ sách | |
| #/curriculum/:id | Bìa và mục lục một cuốn | id = mã sách |
| #/curriculum/:id/:item | Đọc một chương | item = slug bài; in = bản in/PDF; tong-quan = tổng quan giáo trình |
| #/counterpoint | Giải phức điệu | |
| #/analyze | Phân tích tác phẩm | |
| #/analyze/:id | Phân tích một bản nhạc | id = bản nhạc trong kho |
| #/compose | Soạn nhạc | |
| #/solfege | Solfège | |
| #/chord-ear | Nghe hợp âm | Cần quyền micro |
| #/tools | Bảng tính nhạc lý | |
| #/brain | Sổ tay tri thức | |
| #/brain/:id | Một ghi chú | |
| #/research | Bàn làm việc nghiên cứu | |
| #/research/:id | Một đề tài | |
| #/notes | Sổ nghiên cứu (mọi đánh dấu khi đọc) | |
| #/hanh-trinh | Trò chơi Hành trình | Nhiều tham số |
| #/settings | Cài đặt | |
| #/settings/about | Giới thiệu tác giả | |
| #/settings/center | Giới thiệu trung tâm | |
| #/statistics | (cũ) | Tự chuyển sang #/curriculum |

## 2.3. Tham số trên địa chỉ

Một số trang đọc trạng thái từ tham số sau dấu ?. Nhờ đó trạng thái của trang chép gửi được cho người khác.

| Trang | Tham số | Ý nghĩa |
|---|---|---|
| Lý thuyết | c | Mục đang lọc |
| Lý thuyết | q | Từ khoá tìm kiếm |
| Từ điển | tab | grove (mặc định) hoặc thuật ngữ đa ngữ |
| Từ điển | g | Mở sẵn một mục Grove (ví dụ g=fugue-2-114) |
| Từ điển | q | Từ khoá tìm |
| Mạng tri thức | tab | nguoi (mặc định), tac-pham, thoi-gian, pha-he (dòng truyền) |
| Mạng tri thức | p | Mở hồ sơ một người |
| Đồ thị | id | Đối tượng đang xem, dạng mã thống nhất (mục 5.3) |
| Nguồn của tôi | ms | Mở một tài liệu trong kho riêng (#/sources/cua-toi?ms=…) |
| Âm nhạc học | p, j | Địa điểm, hành trình đang chọn trên bản đồ |
| Hành trình | t | Hành trình: the-gioi hoặc viet-nam |
| Hành trình | c | Chương (ví dụ trung-co, vn-co-dai) |
| Hành trình | s | Chặng đang chơi |
| Hành trình | v | Màn: prologue (bối cảnh), court (phiên toà), arc (tuyến điều tra), endless (vô tận), daily (thử thách hôm nay) |
| Hành trình | a, l, p, r | Trong tuyến điều tra: mã tuyến, địa điểm, câu đố; r=1 là chế độ ôn luyện |

*Ví dụ*:
- #/theory/fugue — bài Fugue;
- #/terms?g=fugue-2-114 — mục FUGUE trong Grove, tập 2, trang 114;
- #/hanh-trinh?c=trung-co&v=court — phiên toà chương Trung cổ;
- #/curriculum/phuc-dieu-nghiem-khac — cuốn Phức điệu nghiêm khắc.

## 2.4. Sơ đồ đi lại giữa các khu vực

Các khu vực không đứng riêng mà dẫn sang nhau. Bảng dưới ghi những đường đi chính.

| Từ | Đi tới | Bằng cách |
|---|---|---|
| Mọi bài viết | Bài khác | Liên kết trong bài (thẻ xem nhanh), liên kết ngược cuối bài |
| Bài viết | Nguồn | Trích dẫn trong câu "(Tác giả năm, tr. n)" |
| Bài viết | Công cụ | Nút mở Giải phức điệu, Phân tích… trong các bài kỹ thuật |
| Tủ sách | Bài viết | Mỗi chương sách là một bài thư viện |
| Tủ sách, bài viết | Sổ nghiên cứu, Bàn làm việc | Tô màu – ghi chú – gắn thẻ đề tài |
| Bản đồ, Mạng tri thức | Bài viết | Chấm địa điểm, hồ sơ người |
| Từ điển | Bài viết | Mục Grove trùng bài thư viện |
| Giải phức điệu, Nghe hợp âm | Bài viết | Tên luật, "hướng đi" dẫn về bài nguồn |
| Hành trình | Bài viết | Nút "Đọc bài" ở mỗi câu hỏi; Back quay lại đúng câu hỏi |
| Hành trình | Bàn làm việc | Báo cáo tuyến điều tra thành đề tài |
| Sổ tay | Mọi đối tượng | Liên kết hai cặp ngoặc vuông với mã thống nhất |
