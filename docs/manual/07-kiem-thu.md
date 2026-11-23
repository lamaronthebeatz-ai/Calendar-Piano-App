# Phần 7. Kiểm thử và phát hành

## 7.1. Các lớp kiểm thử

| Lớp | Công cụ | Phạm vi |
|---|---|---|
| Kiểu dữ liệu | TypeScript (tsc -b) | Toàn bộ mã |
| Kiểm mã | oxlint | Lỗi thường gặp, quy ước React |
| Đơn vị | Vitest, 255 kiểm thử | Logic thuần: luật phức điệu, bộ kiểm độc lập, ba – bốn bè, canon, hình thức; bộ phân tích; ngữ pháp liên kết; mã hoá; mã khoá; trò chơi (bộ máy, câu đố, thử thách từng chặng, lưu bản 2); thư mục, thuật ngữ… |
| Liên kết | check:links | Liên kết bài, mã trùng, bản đồ |
| Giao diện | Playwright, khoảng 320 kiểm thử | Mọi route (một kiểm thử tự phát hiện route mới chưa có kiểm thử), luồng chính từng khu vực |
| Micro | Playwright, nhóm mic-* | Đưa tệp âm thanh tổng hợp vào micro giả của Chromium |

Các nhóm kiểm thử giao diện chạy trên: chromium-phone, chromium-desktop, webkit-phone, webkit-desktop (WebKit là nền của Safari), và mic-*. Một chế độ chạy với hiệu ứng tắt (reduced motion) bảo đảm **nội dung luôn hiện ra kể cả khi hiệu ứng không chạy**. Đây là luật rút ra từ lỗi thật trên iPhone.

## 7.2. Quy trình phát hành (CI)

Mỗi lần đẩy mã lên nhánh main, GitHub Actions chạy:

1. **Kiểm nhanh**: cài gói, lint, kiểm thử đơn vị, kiểm liên kết, dựng, kiểm ngân sách.
2. **Kiểm giao diện**: ma trận Chromium và WebKit, mỗi trình duyệt chia hai phần chạy song song; sau đó chạy nhóm micro.
3. **Phát hành**: chỉ khi mọi bước đều đạt, bản dựng mới được đưa lên GitHub Pages.

Kiểm thử hỏng thì không phát hành. Người dùng luôn ở bản cuối cùng đã qua kiểm thử.

## 7.3. Theo dõi lỗi trên máy người dùng

Ứng dụng có một vùng bắt lỗi chung. Lỗi xảy ra được ghi vào nhật ký trên chính máy đó (app:errors) và xem được ở Cài đặt → Nhật ký lỗi. Nhật ký không gửi đi đâu. Khi báo lỗi, người dùng chép nội dung nhật ký để gửi kèm.

## 7.4. Ghi chú phát triển

Thư mục docs/ là "bộ nhớ" của dự án:

| Tệp | Nội dung |
|---|---|
| docs/STATUS.md | Việc vừa xong, việc dở, việc chờ, đề xuất, số liệu nền |
| docs/roadmap.md | Lộ trình nâng cấp (giai đoạn 0 – 6) |
| docs/notes/decisions.md | Các quyết định chủ ứng dụng đã chốt (giao diện, nội dung, bảo mật, văn bản học thuật) |
| docs/notes/workflow.md | Quy trình làm việc, lệnh kiểm tra, chụp ảnh, chờ CI, xuất PDF, các bẫy công cụ đã gặp |
| docs/notes/‹khu vực›.md | Ghi chú kỹ thuật từng khu vực: theory, curriculum, musicology, counterpoint, analyze, compose, journey, terms, sources, knowledge, security, testing… |
