# Hành trình âm nhạc — game nhập vai `/hanh-trinh` (`src/features/journey/`)

Lamar yêu cầu 15/11/2026: game cốt truyện đi qua lịch sử âm nhạc thế giới, người chơi là nhân vật chính, dùng mọi nguồn của app, rất dài, cập nhật dần. Quyết định của Lamar (`decisions.md`):
1. Lời thoại **dựng lại** như truyện sử, giọng văn theo từng thời kỳ (ghi "Lời dựng lại" trên màn; NPC hư cấu có nhãn "nhân vật hư cấu").
2. Tên tự đặt; hình là chân dung Phục hưng (6 tranh PD: Leonardo *Chân dung nhạc sĩ*, Dürer, Van Eyck, Raphael – Castiglione, *Lady with an Ermine*, Pollaiuolo).
3. **Không có thua**; NPC hỏi, đáp án nằm trong bài lý thuyết — nút "📖 Đọc bài" dẫn sang bài, Back quay lại đúng câu hỏi.
4. Chương đầu: Trung cổ.
5. Bổ sung tiểu sử nhà soạn nhạc từng thời kỳ khi làm chương tương ứng (Trung cổ: `theory/content/composer-details-med.ts`, 17 người, nối trong `composers.ts` sau `COMPOSER_DETAILS`).
6. Hiệu ứng điện ảnh, nhập vai.

## File
- `types.ts` — `Chapter` (cảnh + phiên toà + intro/outro), `Scene` (nơi, toạ độ, năm, ảnh nền, NPC, lời, `quest {ask, choices, answer, read, where, explain}`, `card`, `listen` YouTube), `Claim` (verdict `fact|legend|unsure`).
- `chapters/<thời kỳ>.ts` + `chapters/index.ts` (`CHAPTERS` theo thứ tự lịch sử). **Thêm chương = một file + một dòng.**
- `progress.ts` — `journey:v1` localStorage (`useSyncExternalStore`): tên, chân dung, cảnh xong, thẻ, phán quyết, `step` (dòng thoại đang đọc — để đọc bài xong quay lại không mất chỗ). `{ten}` trong truyện = tên người chơi (`named`).
- `JourneyPage.tsx` — URL là trạng thái: `?c=<chương>&s=<cảnh>` / `&v=court`. Màn: `Create` → `Atlas` (bản đồ Equal Earth dùng chung `musicology/projection.ts` + `world-lo.json`, tuyến chấm vàng, chặng khoá/mở, Sổ chứng cứ) → `ScenePlayer` (title card → lời thoại chạm để tiếp → câu hỏi → thẻ) → `Court` (Thật / Giai thoại / Chưa chắc, giải thích + link bài) → outro.
- `journey.css` — sân khấu cố định z 70 (dưới LinkPeek 75): ảnh nền Ken Burns 26 s một lần, lớp màu theo thời kỳ (`.jr-era-<style>`, biến `--jr-grade`), vignette, hạt phim tĩnh (SVG turbulence), ánh nến nhấp nháy + bụi sáng (opacity/transform lặp — compositor; tắt trên Android), thanh letterbox, chữ hiện từng từ, thẻ lật `rotateY`. Trung cổ: chữ cái đầu mạ vàng ở lời dẫn. Mọi animation `both` từ keyframe `from` → không chạy vẫn thấy nội dung.
- Ảnh: `public/images/journey/*.webp` (nền 1400px, chân dung 600px, q72; ~5 MB, **không precache** — `vite.config.ts` globIgnores), nguồn ở `credits.ts` (hiện góc dưới mỗi cảnh). Tải bằng `scratchpad/journey/fetch.py` + `dl.py`: đọc trang HTML Wikipedia/Commons (API trả 429), ảnh qua `upload.wikimedia.org/.../thumb/...` cỡ 960/1920.
- Lối vào: nút vàng "⚜ Hành trình" trên thanh trên của bản đồ (`MusicMap.tsx`, `.mm-quest`).
- Kiểm tra: `chapters.test.ts` (Vitest — mọi `read`/`card.read`/`npc.slug`/`claim.read` là slug có thật, ảnh có file + credit, đáp án trong khoảng, id không trùng); `tests/journey.spec.ts` (tạo nhân vật → cảnh → đọc bài → Back → trả lời sai rồi đúng → thẻ); route trong `smoke.spec.ts`.

## Luật viết chương
- Mọi sự kiện trong lời thoại/câu hỏi phải có trong bài thư viện hoặc tiểu sử; chi tiết đẹp nhưng không nguồn thì bỏ (đã bỏ: vai ma quỷ chỉ nói trong *Ordo Virtutum*, "Kyrie đến Ite missa est", con ngựa Fauvel). Không đặt tên NPC hư cấu trùng người thật (Notker → Wolfram).
- Phiên toà lấy chất liệu từ mục `## Giai thoại và điều chưa chắc` của tiểu sử và các bài phân định.
- Ảnh nền là tranh/bản chép tay PD; niên đại tranh có thể khác cảnh (ghi ở credit).

## Chương đã có
- **I. Ánh nến và bản chép tay** (Trung cổ, `trung-co.ts`): Bourgogne (thánh ca đơn âm) → Sankt Gallen (neume) → Arezzo (Guido, Ut queant laxis) → Pomposa (Boethius, Pythagoras) → Rupertsberg (Hildegard, Ordo Virtutum) → Ventadorn (troubadour) → Notre-Dame 1198 (Pérotin, 4 bè) → Paris k. 1320 (Vitry, isorhythm) → Reims (Machaut) → Firenze (Landini, kết 7–6–8); phiên toà 7 lời khai.

## Tiếp theo
- Chương II Phục hưng (Dufay, Josquin, Palestrina, Venice/Gabrieli, madrigal) + bổ sung tiểu sử nhóm `ren:*` trước.
- Có thể thêm: âm thanh nền (drone quãng 5 bằng `audio.ts`), nhật ký hành trình ghi vào Sổ tay `/brain`, đề tài `/research` từ thẻ chứng cứ, chặng tự sinh từ PLACES + people.
