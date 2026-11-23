# Phần 11. Quy tắc kỹ thuật cho người phát triển

Những quy tắc dưới đây rút ra từ lỗi thật đã gặp. Vi phạm thường gây lỗi trên điện thoại mà máy tính không thấy.

## 11.1. Quy trình trước khi phát hành

1. Chạy một lần bộ kiểm nhanh: tsc, lint, test, check:links, build, budget. Chạy với `set -o pipefail` để không nuốt lỗi.
2. Thay đổi giao diện thì chụp ảnh trên khổ điện thoại 393 × 852 và màn rộng, rồi chạy kiểm thử giao diện Chromium (khoảng 8 phút). WebKit chạy trên CI.
3. **Dựng lại dist/ trước khi chạy Playwright.** Kiểm thử chạy trên bản đã dựng, nên bản cũ có thể làm kiểm thử "qua" giả.
4. Sau khi đẩy mã, theo dõi CI tới khi xanh. Cập nhật docs/STATUS.md, decisions.md và workflow.md (mục Bẫy).

## 11.2. Luật mã đã "trả giá" mới có

| Luật | Lý do |
|---|---|
| Effect không trả về giá trị nào ngoài hàm dọn dẹp | scrollIntoView, scrollTo trả về Promise trên Chrome mới; React gọi nó như hàm dọn dẹp và ứng dụng sập trên Android |
| Hiệu ứng không bao giờ là điều kiện để nội dung hiện ra | Trên iPhone, hiệu ứng không chạy làm nội dung biến mất |
| Chỉ animate transform và opacity; không có hiệu ứng lặp vô hạn bằng thuộc tính khác | Từng làm cả trang tính lại kiểu chữ 60 lần mỗi giây |
| Không mask-image, clip-path động, backdrop-filter lồng nhau trên lớp đang chuyển động | Giật, nhất là Android |
| Shorthand animation phải đặt trước animation-timeline | Shorthand xoá timeline |
| Trong startViewTransition, chờ bằng setTimeout, không dùng requestAnimationFrame | rAF không chạy, ứng dụng treo |
| Android: không nghiêng theo con quay, không làm mờ kính, dùng bìa nhỏ | Máy tính bảng Android giật |
| Chữ vàng gradient: dùng filter drop-shadow ở dòng chứa, không dùng text-shadow | iOS vẽ vệt tối |
| So sánh bài theo slug, không theo tham chiếu đối tượng | Đối tượng được tải lại nhiều lần |
| Thanh đếm giờ dùng CountdownBar, không dùng setInterval cộng state | Tránh vẽ lại liên tục |
| Màu riêng đi qua src/lib/tint.ts; vàng là màu nhấn duy nhất; chỉ giao diện tối | Nhận diện thống nhất |
| Theo mẫu có sẵn (hook, lớp CSS, audio.ts, useStageTilt) thay vì viết cái mới | Giữ mã gọn, ít lỗi |

## 11.3. Kiểm thử giao diện ổn định

- Trên WebKit ở CI, nút nằm trên lớp ánh sáng chuyển động có thể không bao giờ "đứng yên". Khi thao tác không phải là thứ đang kiểm, bấm thẳng bằng `dispatchEvent('click')` sau khi đã chắc nút hiện. Bật giảm chuyển động cho WebKit.
- Kiểm thử dài trên WebKit dùng `test.slow()`.
- Đáp án trong kiểm thử luôn đọc từ dữ liệu nội dung, không viết cứng.
- Tệp thử nghiệm chỉ để ở thư mục tạm, không đưa vào repo. Tắt máy chủ thử bằng PID.

## 11.4. Quy tắc nội dung và cách xưng hô

- Nội dung trong ứng dụng gọi người đọc là "bạn". Ghi chú của người soạn viết là "người biên soạn".
- Mọi sự kiện có nguồn; chỗ chưa đối chiếu ghi rõ; không chép sách còn bản quyền; không vượt captcha của các thư viện số.
- Không ghi mã khoá, thông tin cá nhân vào repo. Kiểm thử màn khoá bằng cách giả lập hàm mã hoá của trình duyệt.
- Commit: tiếng Việt, một dòng tóm tắt.
