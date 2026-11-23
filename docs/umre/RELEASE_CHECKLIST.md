# Checklist phát hành UMRE

Dùng cho mỗi lần đổi làm thay đổi kết quả (sổ luật, bộ giải, bộ kiểm, biểu diễn, API). Không phát hành nếu còn lỗi làm sai kết quả học thuật hoặc phá chức năng app.

## 1. Phiên bản
- [ ] Đổi luật / ngưỡng / phạm vi / cách áp ngoại lệ → tăng `*_RULEBOOK_VERSION`, ghi `RULEBOOK_CHANGELOG.md`.
- [ ] Đổi thuật toán làm đổi kết quả → tăng `version` của bộ giải / bộ kiểm / mô-đun.
- [ ] Đổi yêu cầu / trả lời → tăng `UMRE_API_VERSION` (major nếu phá tương thích), cập nhật `API.md`.
- [ ] Đổi lõi → tăng `UMRE_ENGINE_VERSION`; major.minor đổi thì sửa `requires.umre` của các bộ giải.

## 2. Đúng (chạy một lần, đủ)
- [ ] `npx tsc -b && npm run lint && npm test` (lint còn đúng 4 cảnh báo cũ).
- [ ] Bảng phủ và bảng kiểm chứng khớp: `npx vitest run src/umre/rulebook` (nếu đổi có chủ ý: `UMRE_WRITE_COVERAGE=1`, rồi đọc lại khác biệt).
- [ ] Tối ưu không đổi kết quả: `node scripts/umre/bench.mjs --check` báo "mọi kết quả giống lần đo chuẩn" (nếu đổi có chủ ý: chạy đủ bộ đo và ghi lý do ở `BENCHMARKS.md`).
- [ ] Chuẩn Bach khi đụng phân tích: `node scripts/analyze/eval.mjs <gt> --umre` không tụt (83,9 / 78,1 / 77,1%).

## 3. Ứng dụng
- [ ] `npm run check:links && npm run build && npm run budget`.
- [ ] `npx playwright test --project='chromium-*' --trace off` (WebKit chạy trên CI).
- [ ] Nếu đổi giao diện: ảnh điện thoại 393×852 + màn rộng, không tràn ngang.

## 4. Tài liệu
- [ ] `KNOWN_LIMITATIONS.md`, `ACADEMIC_VERIFICATION.md` (nhãn kiểm chứng đúng sự thật), `MASTER_SPECIFICATION.md`, `docs/STATUS.md`.

## 5. Sau khi push
- [ ] CI xanh (Chromium + WebKit) → deploy. Đỏ ở test không liên quan: xem `docs/notes/workflow.md` § Bẫy trước khi chạy lại.

## Phát hành 1.0.0 (23/11/2026) — đã chạy
Mục 1–4 đều chạy, kết quả ở `WAVE_D.md`; mục 5 xem `docs/STATUS.md`.
