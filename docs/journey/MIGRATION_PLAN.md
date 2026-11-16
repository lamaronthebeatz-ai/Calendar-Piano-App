# Hành trình — Kế hoạch chuyển đổi và tương thích ngược

## 1. Save `journey:v1` → v2
- Khoá mới `journey:v2`. Lần đầu chạy bản mới: đọc `journey:v1`, **chép nguyên văn sang `journey:v1.bak`** (một lần, không ghi đè nếu đã có), chuyển đổi, ghi v2. `journey:v1` để nguyên (bản cũ của app, nếu còn tab mở, vẫn đọc được).
- Ánh xạ:

| v1 | v2 |
|---|---|
| `name`, `portrait` | `player.name`, `player.portrait` |
| `done` (`chương/cảnh`) | `legacy.done`; thêm `world.locations` (địa điểm của cảnh) |
| `cards` | `evidence` (id thẻ giữ nguyên = id `EvidenceDef` do adapter sinh) |
| `verdicts` | `court` |
| `step` | `legacy.step` |
| `seen`, `endless` | giữ nguyên |
| (suy ra) | `world.chaptersOpen` = mọi chương mà `opened()` cũ trả về true **tại thời điểm chuyển đổi**; `world.chaptersDone` tương tự `finished()` |
| (suy ra) | `xp`, `skills`: cấp lại theo bảng thưởng mới cho các cảnh/phán quyết đã xong (cùng công thức với người chơi mới, không thưởng thêm) |
| (suy ra) | `codex`: `a:` của mọi `read`/`npc.slug` trong cảnh đã xong |

- Bộ đọc v2 kiểm từng trường (mảng chuỗi, record số…); trường hỏng → giá trị rỗng **cho riêng trường đó**, ghi `journey:repair-log` (tối đa 20 mục) — không bao giờ xoá cả save vì một trường hỏng.
- Save có `version`; mỗi lần đổi hình dạng sau này thêm một hàm `migrate_vN_vN+1` (cùng mẫu `knowledge/model.ts migrate`).
- Test: fixture save v1 thật (lấy hình dạng từ máy Lamar — chỉ hình dạng, không dữ liệu cá nhân), fixture hỏng từng trường, fixture rỗng; round-trip v2 → JSON → v2.

## 2. Nội dung cũ chạy trong engine mới (adapter)
`content/legacy.ts` biến mỗi `Chapter` cũ thành `ChapterDef`:
- Cảnh → `LocationDef` (cùng toạ độ, ảnh, nhạc) + `CharacterDef` (`historical` nếu có `slug`, `fictional` nếu `invented`) + `DialogueDef` tuyến tính (mỗi `Line` → một node; `fiction` → `voice:'fiction'`, `quote` → `voice:'quote'`, còn lại `voice:'reconstructed'`) + `QuestDef` main một giai đoạn + `PuzzleDef` `choice` + `EvidenceDef` từ `card`.
- Id: `loc:<chương>/<cảnh>`, `q:<chương>/<cảnh>`… — suy ra tất định từ id cũ, nên tiến trình cũ ánh xạ thẳng.
- Màn hình cũ (`ScenePlayer`, `Atlas`, `Court`) tiếp tục hiển thị chương cũ cho tới khi renderer mới đạt cùng chất lượng; adapter cho phép engine (XP, Codex, chứng cứ) nhìn thấy nội dung cũ ngay.

## 3. Mở khoá chương
- Hiện tại: `opened(i) = finished(chương i−1)` tính lại mỗi lần → thêm cảnh vào Chương I sẽ khoá lại Chương II của người đã chơi (lỗi L1).
- Mới: `world.chaptersOpen` là **sự kiện đã xảy ra, không thu hồi**. Điều kiện `unlock` chỉ được xét để *thêm* chương vào danh sách. Nội dung mới thêm vào chương đã xong là nội dung tuỳ chọn hoặc tuyến mới, không phải điều kiện của chương sau.

## 4. URL
`?c=&s=&v=prologue|court|endless` giữ nguyên nghĩa. Thêm: `?l=<location>` (địa điểm của thế giới mới), `?q=<quest>` (nhật ký nhiệm vụ), `?p=<puzzle>` (mở thẳng một câu đố — để "Đọc bài" rồi Back quay lại). Điều hướng `go()` giữ luật push/back/replace hiện có.

## 5. Sao lưu
Thêm `journey?: SaveV2` vào `BackupPayload` (tuỳ chọn; file v2/v3 cũ nhập như trước). Nhập "gộp": giữ bản có nhiều tiến trình hơn theo từng phần (quest đã xong ∪, evidence ∪, xp = max); "thay thế": chép bản đang có vào `journey:v2.bak` trước.

## 6. Quyết định (Lamar đã chốt 16/11: 1 duyệt, 2 duyệt, 3 push thẳng main, 4 chỉ bản thu thật)
1. **Nhãn lời thoại theo dòng** (`voice`): giữ cách cũ "Lời dựng lại" cho lời của nhân vật lịch sử, hay đổi thành mặc định lời người kể/nhân vật hư cấu nói, nhân vật lịch sử chỉ nói câu có nguồn (`quote`) — như kế hoạch mới đòi ("không gán lời thoại hư cấu như thể là lời thật")? Đề xuất: giữ lời dựng lại nhưng **mỗi dòng của nhân vật lịch sử có dấu nhỏ** "dựng lại" / "trích nguyên văn", dòng bịa vẫn "✦ hư cấu"; chương mới dùng nhân vật hư cấu (thầy tu chép nhạc…) dẫn chuyện nhiều hơn.
2. **Không có thua** (quyết định 15/11) vs "quest failure & retry" của kế hoạch: đề xuất giữ không có thua — sai thì mất điểm/gợi ý, rẽ nhánh, thử lại; không có màn game over.
3. **Git**: CLAUDE.md quy định làm trên `main` (push = deploy); kế hoạch mới đòi branch riêng, không deploy thẳng. Đề xuất: engine + lát cắt Trung cổ làm trên branch `journey-max`, mở PR, CI chạy đủ; chỉ merge khi Lamar duyệt. Hệ quả: Lamar không thấy trên app thật cho tới khi merge (không có bản xem trước) — hoặc chọn cách thứ hai: merge từng phần nhưng ẩn sau cờ `?beta=1`.
4. **Âm thanh thử thách nghe Trung cổ**: chỉ dùng bản thu người hát thật trên Commons (có thể không đủ đoạn ngắn), hay chấp nhận âm tổng hợp (sampler sáo/organ có sẵn) cho quãng và tiết tấu, có ghi "âm minh hoạ"?
