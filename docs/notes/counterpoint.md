# Giải phức điệu — hồ sơ luật và bộ giải (kiểm toán 17/11/2026)

Nguồn duy nhất: Phạm Tú Hương, *Phức điệu nghiêm khắc*, Nhạc viện Hà Nội 1991 (theo Taneyev). PDF Lamar gửi: tr. in = trang PDF − 2. Bài thư viện: `giai-dieu-phuc-dieu-nghiem-khac`, `doi-vi-don-gian-hai-be`, `doi-vi-chuyen-dong-chieu-doc`. Không lấy luật từ Fux/Palestrina/species.

## Bảng luật (cột "Mã" = `RuleId` trong `rules.ts`; B = bắt buộc, K = khuyến nghị/ghi chú, X = cần xác minh)
| Luật | Nguồn | Loại | Mã |
|---|---|---|---|
| Không nửa cung cromatic trong giai điệu | tr. 6 "không được sử dụng" | B | `leap` (`melodicOk`) — **lỗi cũ: trước 17/11 cho qua** |
| Âm nguyên và âm biến "phải ở xa nhau" | tr. 6, Thí dụ 9b "Không nên" | K (khoảng cách không định lượng; cách một nốt = ghi chú) | `chromatic-near` |
| Cấm nhảy quãng nghịch (7, tăng, giảm) và rộng hơn quãng 8 | tr. 6 | B | `leap` |
| Sau bước nhảy quãng thuận phải phản hồi ngược hướng; quãng 3 là bước nhảy | tr. 6 | B (**quãng 3 trước là K**) | `leap-response`, `leap3-response` |
| Tránh hai bước nhảy liên tiếp cùng hướng | tr. 6 "Tránh" | K | `two-leaps` |
| Âm hưởng ba cung khi đi liền bậc | tr. 7 "không nên" | K | `tritone-line` |
| Không nhắc một nốt nhiều lần | tr. 7 "không sử dụng" + Thí dụ 12 "Không nên" | B cho 3 lần liền (X: chữ và thí dụ lệch nhau), K cho 2 | `repeat3`, `repeat` |
| Mô tiến, nhiều dấu lặng | tr. 7 "Tránh", "không nên" | K — chưa cài (bè đối vị không có dấu lặng) | — |
| Không đảo phách, nghịch phách; nối nốt: trắng → tròn được, ngắn → dài không | tr. 8, Thí dụ 15 | B | `seg-place`, `tie` |
| Đổi sang nốt ngắn hơn ở phách mạnh phải chuẩn bị bằng nốt lưu | tr. 8 "không được thay đổi đột ngột, nhất là ở phách mạnh" | B ở phách đầu ô; phách khác: X (chưa cài) | `rhythm-change` |
| Tiết tấu hai bè giống nhau kéo dài | tr. 8–9 "Không nên" | K | `same-rhythm` |
| Song song, cùng hướng | tr. 9 "nên hạn chế" | K | `hidden` |
| Quãng hoàn toàn song song (cùng hướng) | tr. 9–10 "bị cấm" | B. **Trước 17/11 code cấm cả ngược hướng** — nay ngược hướng chỉ là `perfects` | `parallel` |
| Không dùng nhiều quãng thuận hoàn toàn liền nhau | tr. 9 "không được phép" | B từ 3 quãng (X: "nhiều" không định lượng), K cho 2 | `perfects3`, `perfects` |
| Quãng hoàn toàn chủ yếu ở mở đầu, kết; ở giữa nên ở phách yếu; đồng âm gây ngưng đọng | tr. 9 "chủ yếu", "nên" | K. **`final` trước là B** | `first`, `final`, `strong-perfect`, `unison` |
| Quãng nghịch: 2, 7, tăng, giảm, quãng 4 đúng | tr. 10 | định nghĩa (`interval`) | — |
| Trước và sau quãng nghịch là quãng thuận; không hai quãng nghịch liền nhau | tr. 10 | B | trong `dis-strong`/`dis-weak` |
| Phách mạnh: nốt lưu — chuẩn bị (≥ nốt lưu, không nốt đen), giải quyết xuống liền bậc | tr. 10 | B (nốt đen chuẩn bị: tuỳ chọn thầy `quarterPrep`) | `dis-strong` |
| Nốt chuẩn bị: chỉ cần thuận – nghịch – thuận (vào thuận, quãng ngay trước thuận) | tr. 10 (Lamar chốt 17/11) | B | `suspension()` |
| Vị trí nốt nghịch: 1 dưới · 3 trên/dưới · 6 trên · 8 dưới/trên · 10, 13 trên | tr. 11 sơ đồ 2 | B | `suspension()` |
| Nốt lưu ở các quãng nghịch ngoài sơ đồ 2 (quãng 5 giảm, quãng 12 giảm…) | sơ đồ 2 không nhắc | X — đang cho phép | — |
| Bè tự do không đánh nốt mới trước khi nốt lưu giải quyết | suy từ định nghĩa (nghịch phải giải quyết bằng chính nốt nghịch đi xuống, không hai quãng nghịch liền) | B | `suspension()` |
| Bè tự do nhảy đúng lúc giải quyết, miễn thuận | tr. 12, Thí dụ 30 | được phép | — |
| Nốt nghịch nhảy sang nốt thuận rồi mới xuống liền bậc | tr. 13, Thí dụ 31 (nốt nhảy là nốt đen ở cả hai thí dụ) | được phép (nốt đen: theo thí dụ) | `suspension()` |
| Giải quyết lướt khi nốt giải quyết rơi vào quãng nghịch ở biến thể | bài chuyển động chiều dọc, nguyên tắc 3 | được phép | `suspension()` |
| Phách nhẹ: nốt lướt, thêu (thường thêu dưới), sớm, thoát (= thêu dưới xuống quãng 3) | tr. 11–12 | B (phải là một trong các dạng) | `dis-weak`; thêu trên = `upper-neighbor` K |
| Nốt nghịch phách nhẹ: ở phách chỉ nốt lướt, dài hơn nốt đen chỉ nốt trắng lướt | chỉ thấy trong Thí dụ 25–28, không thành chữ | K (**trước là B**) | `weak-form` |
| Cả hai bè cùng đánh nốt mới vào quãng nghịch ở phách nhẹ | không nhắc | K nếu một bè thành dạng hợp lệ (**trước là B**) | `dis-both` |
| ✱ phải nghịch; ngoài ✱ không nghịch ở phách mạnh | quy ước đề của thầy (không phải luật sách) | B | `star`, `star-extra` |
| Biến thể: mọi bản đều đúng luật đối vị đơn giản; chéo bè = vượt giới hạn Iv | bài chuyển động chiều dọc | B | `crossing` + mọi luật trên ở từng bản |

## Bộ giải (`solver.ts`)
- **Miền tìm kiếm** (`domainOf`, ghi kèm mọi kết luận vô nghiệm): bè đối vị bắt đầu ở 0, không dấu lặng, không nốt móc đơn (sách cho móc đơn làm nốt lướt/thêu — chưa có), trường độ 1/2/3/4/6/8 phách đen, nốt của giọng + biến âm có trong đề, phía bè đối vị xa nhất 2 quãng 8 (`SPAN = 14`) — phía kia chặn đúng bằng luật chéo bè.
- **Ba trạng thái** (`SolveResult.status`): `valid` = có lời giải qua cả `check` lẫn `verify.ts`; `unsat` = duyệt hết miền (hoặc `starCheck` chứng minh một ✱ bất khả); `unknown` = hết giờ, hoặc hai bộ kiểm bất đồng (`disputed` > 0, không bao giờ thành đáp án). Trang hiện "Không có lời giải đúng luật" chỉ với `unsat`, kèm miền tìm kiếm.
- **Bộ kiểm độc lập** `verify.ts`: viết lại mọi luật B trên lưới phách đen, không dùng `rules.ts`. Test đổi từng nốt quanh lời giải của 6 đề sinh ra: hai bộ kiểm phải cùng kết luận.
- **Nhớ trạng thái chết**: khoá = thời điểm + 3 nốt cuối (bước + dấu hoá) + trường độ đoạn cuối; đúng vì luật B nhìn lùi tối đa 3 nốt (phản hồi bước nhảy, nhắc 3 lần, giải quyết hai bước). Thêm luật nhìn xa hơn thì phải nới khoá.
- **`starCheck`** chỉ dùng điều kiện cần (không xét cách giải quyết, không xét chỗ bắt đầu chuẩn bị) — trước 17/11 nó đòi giải quyết thuận ở mọi bản và chuẩn bị trong một ô, có thể báo vô nghiệm sai.
- Nút Giải chạy 15 s; hết giờ → "Chưa kết luận" + nút "Tìm tiếp (thêm 60 giây)". `check(…, from)` chỉ xét lại quanh 3 nốt cuối khi tìm (lời giải cuối vẫn kiểm toàn bài, hai bộ kiểm).
- `hints`: `dead` chỉ khi tìm hết; `rescue`: phương án nới (nốt đen chuẩn bị, bỏ một ✱, ít lỗi nhất) luôn ghi rõ điều đã đổi, không bao giờ là đáp án của đề gốc.

## Test
`src/features/counterpoint/counterpoint.test.ts` (26 test): từng luật (đúng/sai/biên/ngoại lệ), đúng ở NT sai ở BT, vô nghiệm (bài mẫu: `unsat` sau ~2 s), hết giờ → `unknown`, nhiều seed, `starCheck` không báo sai trên đề sinh ra, đối chiếu hai bộ kiểm. E2E: `tests/counterpoint.spec.ts`.

## Còn mở (X)
Nốt lưu ở quãng nghịch ngoài sơ đồ 2; "nhiều" quãng hoàn toàn/nhắc nốt là bao nhiêu; đổi trường độ ở phách không phải đầu ô; quan hệ đối chéo giữa hai bè; móc đơn và dấu lặng trong bè đối vị. Cần hỏi Lamar/thầy.
