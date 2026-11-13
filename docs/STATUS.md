# Trạng thái làm việc — đọc ĐẦU mỗi phiên, sửa CUỐI mỗi phiên

> Sổ tay của Claude: đang ở đâu, chờ gì, làm gì tiếp. Ngắn, hiện tại; lịch sử thì để git log và `docs/roadmap.md`.
> Cập nhật lần cuối: 13/11/2026.

## Đang dở / chờ Lamar
- **Dấu kiểm mã khoá PBKDF2**: Lamar vào Cài đặt → Bảo mật → "Tạo dấu kiểm" rồi gửi dòng `pbkdf2$…`. Nhận được thì thay `HASH` ở `src/components/LockScreen.tsx` (mã màn chào). Nếu Lamar gửi dấu kiểm cho mã khu riêng tư thì thay ở `PrivateArea.tsx` (hai mã **khác nhau**). Không bao giờ hỏi hay ghi mã thật.

## Vừa xong (đợt 11/2026, commit a2c4d21, CI xanh, đã deploy)
- Vitest + CI, test chặn route chưa kiểm, nhật ký lỗi, TS chặt hơn — `notes/testing.md`.
- Sổ tay tri thức `/brain` (second brain) — `notes/brain.md`.
- Bảo mật: LICENSE, banner, kho mã hoá, dấu kiểm — `notes/security.md`.
- Luật phân giải alias trùng `theory/keyIndex.ts`.
- Quy trình xuất tiểu luận PDF vào repo: `scripts/essay/` — `notes/workflow.md` § Tiểu luận.

## Việc tiếp theo đề xuất (chưa được giao)
1. Bản đồ toàn mạng ghi chú (đồ thị toàn cục ở `/brain`, có lọc theo loại nút).
2. Liên kết ghi chú ↔ tác phẩm Wikidata (`[[w:Q…]]`) và ↔ người trong `/explore`.
3. Mã hoá Dexie (học viên, lịch) — cần lớp bọc bất đồng bộ quanh `db`, cẩn thận mất dữ liệu.
4. Bật `noUncheckedIndexedAccess` dần theo thư mục (hiện 1.053 lỗi).
5. Nút + quạt: thêm "Ghi nhanh" cần đổi bố cục 8 → 9 mục (hỏi Lamar trước).

## Số liệu nền (để biết khi có gì lệch)
- 1.479 bài, 153 nơi trên bản đồ, 0 link hỏng; 297 alias trùng (đã có luật, không cần sửa nội dung).
- 38 unit test; Playwright Chromium ~198 test, ~5 phút; lint đúng **4 warning** cũ.
- Ngân sách: JS khởi động 419/600 KB, chỉ mục 272/600 KB, precache 10,6/15 MB.
