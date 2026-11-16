# Hành trình — Khảo sát kiến trúc hiện tại (Phase 0)

Khảo sát ngày 16/11/2026 trên `main` @ ecec334. Chỉ đọc mã, **không sửa code**. Số liệu đo trực tiếp trên repo.

## 1. Kiến trúc hiện tại

```
App.tsx ── route /hanh-trinh (lazy) ── JourneyPage.tsx (786 dòng, toàn bộ UI + điều hướng)
                                         │
     ┌───────────────┬───────────────┬───┴──────────┬──────────────┬───────────────┐
 chapters/*.ts    context.ts       maps.ts       endless.ts     music.ts +      progress.ts
 (6 chương, nội   (bối cảnh lịch   (bản đồ cổ +  (bộ sinh chặng  soundtrack.ts   (journey:v1,
 dung tĩnh, TS)   sử, 5–6 tấm/ch.) đa thức bậc 2) từ pool.json)   (Web Audio)     localStorage)
     │                                              │
 types.ts (Chapter, Scene, Line, Quest, Card, Claim)  scripts/journey/pool.py → pool.json (384 KB, tải lười)
```

- **Một màn hình, URL là trạng thái**: `?c=<chương>&s=<cảnh>&v=prologue|court|endless`. `JourneyPage` chọn view: `create → prologue → atlas → scene → court`, cộng `endless`.
- **Điều hướng** `go(p, 'push'|'replace'|'back')`: `push` gắn `state.jr`; `back` dùng `navigate(-1)` khi có `jr` (sửa lỗi Back quay lại cảnh, 16/11).
- **Thành phần UI** (đều trong `JourneyPage.tsx`): `Create`, `Atlas`, `ChapterMap`, `EndlessTrip`, `Prologue`, `Evidence` + `EvidenceCard`, `ScenePlayer`, `SoundToggle`, `NpcFace`, `Court`.
- **CSS** `journey.css` (235 dòng): sân khấu cố định z 70, ảnh nền Ken Burns chạy một lần, lớp màu theo thời kỳ `.jr-era-<style>`, chữ hiện từng từ, thẻ lật. Mọi animation `both` từ `from` (nội dung thấy được khi animation không chạy — luật CLAUDE.md).

## 2. Cấu trúc dữ liệu

### Nội dung tĩnh (biên soạn, trong bundle)
| Kiểu | Trường | Số lượng hiện có |
|---|---|---|
| `Chapter` | id, numeral, title, era, years, style, cover, theme, intro, scenes, court, outro | 6 |
| `Scene` | id, place, lat, lon, year, title, bg, focus?, npc, lines, quest, card, listen?, track?, far? | 66 (10 + 10 + 13 + 11 + 11 + 11) |
| `Line` | who (narrator/me/npc), text, quote? (nguồn trích thật), fiction? (tình tiết bịa) | ~700; 69 dòng `fiction` |
| `Npc` | name, role, img?, slug? (bài thư viện), invented? | 66; 3 NPC hư cấu (Ch. I) |
| `Quest` | ask, choices, answer (chỉ số), read (slug), where, explain | 66 — **chỉ một dạng: trắc nghiệm 4 lựa chọn** |
| `Card` | id, title, text, read | 66 |
| `Claim` (phiên toà) | id, text, verdict fact/legend/unsure, explain, read | 52 |
| `CONTEXT` | title, text, img, read | 5–6 tấm × 6 chương |
| `MAPS` | img, w, h, hệ số x[], y[] (đa thức bậc 2 lat/lon → px) | 6 |
| `MUSIC` | theo id cảnh: url Commons, người biểu diễn, giấy phép, note | 66 + 6 theme |
| `CREDITS` | ảnh: tác giả, giấy phép, nguồn | 193 file ảnh, 54 MB (không precache) |
| `pool.json` | 324 người, 1.832 mốc, 809 giai thoại (sinh từ tiểu sử thư viện) | — |

### Trạng thái người chơi (`progress.ts`, localStorage `journey:v1`)
```ts
Save { name, portrait, done: string[] /* chương/cảnh */, cards: string[], verdicts: Record<chương/claim, Verdict>,
       step: Record<chương/cảnh, number> /* dòng thoại đang đọc */, seen: string[] /* đã xem bối cảnh */,
       endless: Record<chương, { seed, at, total, right, asked: string[≤1500] }> }
```
- Phiên âm nhạc: `journey:mute`. Không có trường `version`.

## 3. Luồng gameplay hiện tại
1. **Tạo nhân vật**: tên + 1 trong 6 chân dung Phục hưng.
2. **Bối cảnh lịch sử** (lần đầu vào chương, bỏ qua được).
3. **Bản đồ chương** (bản đồ cổ, tuyến chặng tuyến tính; chặng i mở khi chặng i−1 xong).
4. **Cảnh**: title card → chạm đọc từng dòng → câu hỏi trắc nghiệm → sai thì đánh dấu, thử tiếp (không có thua) → đúng thì giải thích + nhận thẻ chứng cứ. Nút "Đọc bài" sang thư viện, Back quay lại đúng câu hỏi (`step`).
5. Xong mọi cảnh → **Phiên toà sử gia**: phán từng lời khai Thật / Giai thoại / Chưa chắc, có giải thích + bài.
6. **Outro** → mở chương sau.
7. **Lữ hành vô tận**: chuyến 5 chặng sinh từ pool, không lặp câu đã hỏi.

Đánh giá đối chiếu kế hoạch Maximum Edition: game hiện là **truyện tuyến tính + câu hỏi trắc nghiệm** — đúng điều kế hoạch muốn tránh ("trắc nghiệm có bản đồ trang trí"), dù câu hỏi buộc đọc thư viện và phiên toà đã là mầm của điều tra học thuật.

## 4. Lưu và khôi phục tiến trình
- `read()` = `{ ...EMPTY, ...JSON.parse(localStorage) }` — trộn nông; trường thiếu được bù, **trường sai kiểu không được kiểm** (vd. `done` là chuỗi → `.includes` vẫn chạy nhưng sai nghĩa; `endless` hỏng → lỗi lúc render).
- `update()` ghi đồng bộ, nuốt lỗi (chế độ riêng tư). Phát cho người nghe qua `useSyncExternalStore`.
- `resetJourney()` xoá sạch.
- **Không nằm trong bản sao lưu** (`services/backup.ts` không có `journey`) → đổi máy / xoá dữ liệu trình duyệt là mất tiến trình.
- Không mã hoá (dữ liệu không nhạy cảm — chấp nhận được).
- Khôi phục "giữa chừng": URL + `step` cho phép đọc bài rồi quay lại đúng dòng.

## 5. Mô-đun tái sử dụng được

| Trong Journey | Giữ / mở rộng |
|---|---|
| `maps.ts` + `ChapterMap` (đa thức bậc 2, kẹp mép, `far`) | **Giữ**: thành lớp World Map; thêm địa điểm phụ/ẩn |
| `soundtrack.ts` (một bài, crossfade, mute nhớ được, tháo nút cũ) | **Giữ**: thêm kênh hiệu ứng / ví dụ nhạc dùng chung `GainNode` tắt tiếng |
| `context.ts`, `Prologue` | Giữ nguyên |
| `endless.ts` + `pool.py` | Giữ; Phase 8 thêm kiểu câu và chọn theo năng lực |
| `Court` | Mở rộng thành Historian Trial (Phase 6) |
| `credits.ts`, `music.ts`, test ảnh/nhạc | Giữ nguyên |
| `ScenePlayer` | Tách: phần trình diễn thoại giữ; phần câu hỏi → Puzzle Registry |

| Ngoài Journey (đã có trong app) | Dùng cho |
|---|---|
| `theory/wiki.ts` `findArticle`, `LinkPeek` | Liên kết tri thức, Codex |
| `knowledge/` (16/11): mã `a: w: s: ms: c: e: m:`, `relations`, `useGraph`, `check.ts` | **Knowledge Link, Evidence, Codex, Investigation** — không làm kho tri thức riêng cho game |
| `sources/data.ts` (thư mục 4.300 nguồn, trang trích) | Nguồn của thẻ chứng cứ |
| `explore/data.ts` (people, works Wikidata, relations thầy–trò) | Quan hệ nhân vật lịch sử, câu ghép người–tác phẩm |
| `theory/audio.ts` (`playNow`, `playSequence`, sampler 11 nhạc cụ thật) | Thử thách nghe quãng, tiết tấu, điệu thức |
| `counterpoint/rules.ts` `check`, `model.ts` (pitch, interval) | Puzzle đối âm / organum |
| `tools/harmony.ts` | Puzzle dựng hợp âm |
| `analyze/engine` | Score analysis (Phase 3, chương Cổ điển trở đi) |
| `compose/engrave.ts` (Verovio) | Đọc bản nhạc khuông 5 dòng (không dùng cho neume — sai lịch sử) |
| Bài `ky-am-binh-ca-gregorian`, `tam-dieu-thuc-va-giong-thanh-vinh`, `lich-su-ky-am`, `thanh-ca-gregorian`, `organum`, `guido-d-arezzo` (tiểu sử có mục giai thoại "Bàn tay Guido") | Nội dung lát cắt Trung cổ |

## 6. Hạn chế kiến trúc
1. **Nội dung và logic dính nhau** trong `JourneyPage.tsx`: luật mở chặng, luật xong chương, chấm câu hỏi, phần thưởng đều nằm trong component.
2. **Một dạng câu đố duy nhất** (`Quest` = trắc nghiệm). Không có schema cho dạng khác.
3. **Không có trạng thái thế giới**: không biến, không cờ, không điều kiện ngoài "cảnh trước đã xong". Không phân nhánh thoại, không trí nhớ NPC.
4. **Tiến trình suy ra từ nội dung hiện hành** (`finished(chapter) = mọi cảnh trong done`) → thêm cảnh vào chương cũ làm thay đổi trạng thái người đã chơi (xem §8).
5. Tiến trình không version, không validate, không sao lưu.
6. Mọi chương nằm chung bundle với trang (~2.000 dòng nội dung) — chấp nhận được hiện tại, sẽ nặng khi nội dung tăng 5–10 lần.
7. `step` chỉ nhớ chỉ số dòng — vô nghĩa khi thoại phân nhánh.
8. Thẻ chứng cứ chỉ có `read` (một bài); không phân loại nguồn sơ cấp / thứ cấp / giai thoại / giả thuyết / hư cấu, không trang.

## 7. Lỗi đã phát hiện
| # | Lỗi | Mức |
|---|---|---|
| L1 | Thêm cảnh/nhiệm vụ vào chương đã xong làm khoá lại chương sau (`opened` tính lại từ nội dung) | **Cao** khi mở rộng |
| L2 | Tiến trình không vào bản sao lưu | Cao (mất dữ liệu khi đổi máy) |
| L3 | `read()` không kiểm kiểu từng trường; dữ liệu hỏng có thể làm sập trang (không có error boundary riêng cho game) | Trung bình |
| L4 | Test WebKit `journey.spec` chập chờn trên CI một lần (nút đáp án bị tháo khỏi DOM) — chưa tái hiện ở máy (48/48) | Trung bình (chặn deploy khi trúng) |
| L5 | `asked` của vô tận cắt ở 1.500 mục, cắt đầu danh sách — có thể lặp lại câu cũ sau rất lâu (thiết kế, chấp nhận) | Thấp |
| L6 | Nhãn "Lời dựng lại" áp cho toàn bộ thoại: kế hoạch mới đòi nhân vật lịch sử không bị gán lời hư cấu "như thể có thật" — cách hiện tại có nhãn nhưng ở mức cả cảnh, chưa ở mức dòng | Cần quyết định (xem MIGRATION_PLAN §6) |

## 8. Rủi ro khi nâng cấp
| Rủi ro | Cách tránh |
|---|---|
| Mất/hỏng tiến trình `journey:v1` | Save v2 có version; đọc v1 qua migration; giữ bản v1 gốc `journey:v1.bak`; test migration bằng fixture thật |
| Khoá nhầm chương (L1) | Ghi sự kiện "đã mở chương" vĩnh viễn vào save; điều kiện mới chỉ áp cho nội dung mới |
| Đổi id cảnh/thẻ | Id là khoá lưu → cấm đổi; validator báo id biến mất so với danh sách id đã phát hành (`ids.lock.json`) |
| Viết lại toàn bộ `JourneyPage` | Không viết lại: adapter đưa 6 chương cũ vào engine mới, UI cũ thành renderer của kiểu node "cảnh tuyến tính" |
| Nội dung lịch sử chưa kiểm chứng lọt vào | Validator đòi `sourceIds`/`read` cho mọi node có `historicalStatus` khác `fictional`; luật viết chương hiện có giữ nguyên |
| Thử thách nghe dùng âm sắc sai thời kỳ (piano cho thánh ca) | Ưu tiên bản thu Commons thật; âm tổng hợp chỉ cho quãng/tiết tấu và ghi "âm minh hoạ" |
| Ký âm cổ vẽ bằng khuông hiện đại | Vẽ neume vuông 4 dòng bằng SVG riêng; không dùng Verovio cho Trung cổ |
| Hiệu năng điện thoại (ảnh 54 MB, nhiều chương) | Tải chương theo yêu cầu (`import()` mỗi chương), ảnh hai cỡ đã có |
| CI WebKit chập chờn chặn deploy | Sửa gốc L4 trong Phase 1 trước khi thêm test mới |

## 9. Kiến trúc đề xuất (tóm tắt — chi tiết ở DATA_MODEL.md, TECHNICAL_ROADMAP.md)
- `src/features/journey/engine/` — **logic thuần TS, không React**, test bằng Vitest: `schema` + `validate`, `world` (trạng thái + điều kiện), `dialogue` (đồ thị node), `quest` (máy trạng thái nhiều giai đoạn), `puzzles/registry` (mỗi dạng: `check(content, answer) → Result`), `progression` (XP, kỹ năng, mastery), `save` (v2 + migration).
- `src/features/journey/content/<chương>/` — dữ liệu biên soạn (TS có kiểu), tải lười từng chương.
- `src/features/journey/ui/` — renderer: tách dần từ `JourneyPage.tsx`; mỗi dạng câu đố một component nhỏ.
- **Adapter** `legacy.ts`: `Chapter` cũ → World mới (cảnh = địa điểm + thoại một nhánh + quest một giai đoạn với puzzle `choice`). 6 chương cũ chạy qua engine mới mà không viết lại nội dung.
- Tri thức, nguồn, chứng cứ: **dùng mã thống nhất của `knowledge/`** (`a:`, `w:`, `s:`, `ms:`, `m:`), không bản sao.

## 10. Kế hoạch tương thích ngược (chi tiết ở MIGRATION_PLAN.md)
1. Save v2 đọc được v1; mọi trường v1 có chỗ trong v2; v1 gốc giữ nguyên ở khoá riêng.
2. URL `?c=&s=&v=` giữ nghĩa cũ; thêm tham số mới không đổi tham số cũ.
3. Id cảnh, thẻ, lời khai đã phát hành bị khoá (test).
4. Chương đã mở không bao giờ bị khoá lại.
5. Tiến trình game vào bản sao lưu (trường tuỳ chọn, file cũ vẫn nhập được).
