# Hành trình — Lộ trình kỹ thuật

Mỗi bước: khảo sát → thiết kế → code → test → báo cáo (A–G theo kế hoạch) → Lamar nghiệm thu → bước sau. Mỗi bước là một nhóm commit nhỏ truy vết được.

## Giữ – mở rộng – thay

| Thành phần | Quyết định |
|---|---|
| `chapters/*.ts`, `types.ts` | **Giữ** làm nội dung; đọc qua adapter `content/legacy.ts` |
| `maps.ts`, `ChapterMap` | **Mở rộng**: nhiều địa điểm, nơi ẩn |
| `soundtrack.ts`, `music.ts`, `credits.ts`, `context.ts`, `Prologue` | **Giữ** |
| `endless.ts`, `pool.py` | Giữ; Phase 8 chọn theo mastery |
| `progress.ts` | **Thay** bằng `engine/save.ts` (v2 + migration), giữ API `useSave` dạng tương thích |
| `ScenePlayer` | **Tách**: renderer thoại (dùng lại) + puzzle registry |
| `Court` | **Mở rộng** thành Historian Trial |
| `JourneyPage.tsx` | Tách dần thành `ui/*`; không viết lại một lần |

## Phase 1 — Nền móng (không đổi giao diện người chơi)
1. Sửa gốc test WebKit chập chờn (L4) — trước khi thêm test.
2. `engine/schema.ts` (kiểu DATA_MODEL) + `engine/validate.ts` + test.
3. `engine/save.ts`: v2, đọc v1, `.bak`, sửa từng trường hỏng; `useSave` cũ đọc từ v2 (chương cũ chạy y nguyên). Test migration bằng fixture.
4. Mở khoá chương dạng sự kiện (sửa L1).
5. `engine/world.ts` (cond/effect thuần), `engine/quest.ts`, `engine/dialogue.ts`, `engine/puzzles/registry.ts` + dạng `choice`.
6. `engine/progression.ts` (XP, kỹ năng, mastery, thành tích), túi đồ.
7. `content/legacy.ts`: 6 chương cũ → `ChapterDef`, validator chạy trên cả 6 (bằng chứng engine đủ biểu diễn nội dung cũ).
8. Tiến trình game vào bản sao lưu.
**Nghiệm thu**: toàn bộ test cũ xanh; save v1 thật chuyển sang v2 không mất trường; chạy được một chương cũ qua engine (test thuần) — người chơi không thấy khác biệt.

## Phase 2 + 3 + 4 (rút gọn) — Lát cắt Trung cổ "Bản thảo thất lạc"
1. Renderer thoại phân nhánh (dùng lại giao diện `ScenePlayer`: title card, chữ hiện từng từ, nhãn từng dòng).
2. Màn địa điểm (nền + người + vật tương tác) và bản đồ nhiều địa điểm của Chương I.
3. 8 dạng câu đố cho lát cắt: `choice`, `classify`, `order`, `match`, `blank`, `neume` (SVG), `hexachord`, `aural`; thêm `investigation`.
4. Nhật ký nhiệm vụ, túi đồ, thẻ chứng cứ mới (loại + nguồn + trang), Codex (đọc `knowledge/useGraph`).
5. Nội dung tuyến (sau khi kiểm chứng nguồn) + 2 nhiệm vụ phụ.
**Nghiệm thu**: danh sách §VI.3 của kế hoạch, e2e + bot sweep.

## Phase 5 → 9
5. Cây kỹ năng đầy đủ + mastery hiển thị. 6. Điều tra: tranh luận, phiên toà nâng cấp, báo cáo nghiên cứu → `/research`. 7. Năm chương còn lại (mỗi chương một đợt). 8. Vô tận theo năng lực, New Game+. 9. QA, hiệu năng (tải chương lười), khả năng tiếp cận.

## Chiến lược kiểm thử
| Lớp | Công cụ | Nội dung |
|---|---|---|
| Engine thuần | Vitest | cond/effect, quest (mọi nhánh), dialogue (duyệt đồ thị: tới được `end`, không ngõ cụt/vòng kín), mỗi puzzle `check` (đúng, sai, đáp án thay thế, phản hồi riêng), progression (mastery không vượt bậc vô lý, XP không lặp), save (v1→v2, hỏng từng trường, round-trip) |
| Nội dung | Vitest + `check:links` | validator DATA_MODEL §12 trên mọi chương; slug/nguồn có thật; id khoá |
| Giao diện | Playwright Chromium + WebKit, điện thoại 393×852 + máy tính | lát cắt từ đầu tới cuối, lưu – tải lại giữa chừng, Back/đọc bài, âm thanh bật/tắt |
| Trải nghiệm | `scratchpad/sweep.cjs` mở rộng | bot chơi hết mọi nhánh, đo tràn khung, nút giả, ảnh/âm thanh thiếu |
| Kiểm chứng học thuật | báo cáo F mỗi phase | bảng: dữ kiện → bài/nguồn → trạng thái |

## Ước lượng (phiên làm việc)
Phase 1: 1–2 phiên. Lát cắt Trung cổ: 2–3 phiên (nhiều nhất ở nội dung + SVG neume + âm thanh). Mỗi chương sau: 1–2 phiên.
