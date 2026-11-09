# Kiểm thử tự động và ngân sách dung lượng (giai đoạn 1, 11/2026)

- `playwright.config.ts` + `tests/`: chạy trên bản build (`vite preview` cổng 4173, Playwright tự bật). 4 project: `chromium-phone` (393×852), `chromium-desktop` (1280×820), `webkit-phone`, `webkit-desktop`. `@playwright/test` ghim **1.56.1** cho khớp Chromium cài sẵn trong máy cloud; máy này **không có WebKit** → chạy `npx playwright test --project='chromium-*'`; WebKit chỉ chạy trên GitHub Actions.
- `tests/smoke.spec.ts`: 14 trang chính (`PAGES`: tên, địa chỉ, bộ chọn nội dung chính — mặc định `h1, h2`, Bản đồ dùng `.mm-full svg`) × 2 chế độ: bình thường và **không hiệu ứng** (chèn CSS `animation: none; transition: none` cho mọi phần tử). Mỗi trang: không lỗi script, có > 200 ký tự, màn đầu có phần tử chính nhìn thấy được (tính opacity cả chuỗi cha, trong khung nhìn). Phiên mở khoá giả bằng `sessionStorage['app:unlocked']` — không dùng mã thật. Trang mới: thêm một dòng vào `PAGES`.
- `tests/library.spec.ts`: tìm "passacaglia chaconne" chỉ tải ≤ 2 mảnh và ra `passacaglia-va-chaconne`; lưu mục `organ` để đọc offline rồi tắt mạng mở bài (chỉ Chromium).
- Đã thử làm hỏng có chủ đích (`main` mờ 0 chờ animation hiện): bản "không hiệu ứng" báo đỏ.
- `scripts/budget.mjs` (`npm run budget`, sau build; gzip): JS khởi động ≤ 600 KB (hiện 409), chỉ mục ≤ 600 KB (256), mảnh tìm kiếm lớn nhất ≤ 80 KB (6), precache ≤ 15 MB thô (9,2). Nâng ngưỡng chỉ khi có lý do, ghi vào đây.
- CI (`.github/workflows/deploy-pages.yml`): lint → `check:links` → build `--base=./` → budget → cài Chromium + WebKit → `test:e2e`; hỏng bước nào thì **không deploy**, ảnh/trace lỗi ở artifact `playwright-results` (7 ngày). `retries: 1` trên CI.
- `test-results/`, `playwright-report/` nằm trong `.gitignore`.

- **Deploy Pages treo (11/2026):** bước `deploy-pages` hết giờ 10 phút dù build + test xanh (lỗi phía GitHub). Chạy lại job trên **cùng commit** bị "Deployment cancelled" ngay, vì mã deploy = SHA commit đã bị huỷ. Muốn deploy lại phải có commit mới (có nội dung thật, không commit rỗng).
