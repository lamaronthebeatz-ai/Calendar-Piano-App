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

## Nhạc nền (15/11, Lamar: "âm thanh lấy từ các bản nhạc thời kỳ hoặc nhà soạn nhạc đang giao tiếp")
- `music.ts` — `MUSIC[sceneId]` (+ `chapter.theme` cho bản đồ chương và phiên toà): bản thu **tự do trên Wikimedia Commons**, phát từ bản MP3 chuyển mã (`upload.wikimedia.org/.../transcoded/...ogg.mp3`, CORS `*`, chạy trên iOS), không tải về repo, cần mạng. Mỗi bài có người biểu diễn, giấy phép, link trang file; hiện ở góc dưới cảnh và trên nút nhạc.
- **Chỉ bản người biểu diễn thật**; Commons có nhiều bản MIDI của "Tetraktys" — script `scratchpad/journey/vet.py` đọc mục Description/Author để loại. Vitry và Landini chưa có bản thu tự do → tạm dùng MIDI, có `note` "Bản MIDI" hiện trên màn. Tìm bản thu: quét file âm thanh trong trang Wikipedia (`audio.py`) và trang `Category:<Tên>` của Commons (HTML; API trả 429).
- `soundtrack.ts` — một bài mỗi lúc, crossfade bằng Web Audio GainNode (iOS bỏ qua `audio.volume`), lặp; trình duyệt chỉ cho phát sau một lần chạm nên `onClickCapture={nudge}` ở gốc game thử lại; tắt/bật nhớ ở `journey:mute`; mở video YouTube trong cảnh thì nhạc nền dừng; rời `/hanh-trinh` thì tắt. Nút `SoundToggle` (tên bài đang phát).
- Test `chapters.test.ts` đòi mọi cảnh có `MUSIC[id]` trỏ về upload.wikimedia.org.

## Luật viết chương
- Mọi sự kiện trong lời thoại/câu hỏi phải có trong bài thư viện hoặc tiểu sử; chi tiết đẹp nhưng không nguồn thì bỏ (đã bỏ: vai ma quỷ chỉ nói trong *Ordo Virtutum*, "Kyrie đến Ite missa est", con ngựa Fauvel). Không đặt tên NPC hư cấu trùng người thật (Notker → Wolfram).
- Phiên toà lấy chất liệu từ mục `## Giai thoại và điều chưa chắc` của tiểu sử và các bài phân định.
- Ảnh nền là tranh/bản chép tay PD; niên đại tranh có thể khác cảnh (ghi ở credit).

## Chương đã có
- **I. Ánh nến và bản chép tay** (Trung cổ, `trung-co.ts`): Bourgogne (thánh ca đơn âm) → Sankt Gallen (neume) → Arezzo (Guido, Ut queant laxis) → Pomposa (Boethius, Pythagoras) → Rupertsberg (Hildegard, Ordo Virtutum) → Ventadorn (troubadour) → Notre-Dame 1198 (Pérotin, 4 bè) → Paris k. 1320 (Vitry, isorhythm) → Reims (Machaut) → Firenze (Landini, kết 7–6–8); phiên toà 7 lời khai.

- **II. Những bè đan như dây leo** (Phục hưng, `phuc-hung.ts`, style `renaissance`): Firenze 1436 (Du Fay, Dunstable) → Venezia 1501 (Petrucci, in nhiều lượt) → Ferrara 1503 (Josquin, mô phỏng) → Paris k. 1528 (Janequin, Attaingnant in một lượt) → Roma (Palestrina, nghịch âm phách yếu) → München (Lassus, 4 thứ tiếng) → London (Tallis, 40 bè) → Gesualdo (madrigal than thở) → San Marco (G. Gabrieli, hai gác đàn) → London 1600 (Dowland, Lachrimae); phiên toà 8 lời khai (Petrucci đầu tiên, Trent, Gesualdo nôi…). Tiểu sử 40 nhạc sĩ Phục hưng: `composer-details-ren-{a,b}.ts` (a: 1 nguồn Wikipedia Anh; b: Wikipedia Anh + một bản ngôn ngữ khác; vài câu "Bối cảnh" ở b là kiến thức chung — rà khi rảnh).
- Chương mở khi xong mọi cảnh chương trước (`opened`), hàng chip chương ở bản đồ; không có `?c=` thì vào chương đầu tiên chưa xong; outro phiên toà có nút sang chương sau.

- **III. Sân khấu, bè trầm và những chiếc tẩu** (Baroque, `baroque.ts`, style `baroque`): 13 cảnh — Firenze 1600 (Peri, recitative) → Mantova 1607 (Monteverdi, seconda pratica) → Venezia (Barbara Strozzi, bass số) → Dresden 1636 (Schütz) → Paris 1687 (Lully) → London (Purcell, aria) → Roma (Corelli, concertino) → Lübeck 1705 (Buxtehude, Bach trẻ, fugue) → Pietà 1725 (Vivaldi, ritornello) → Köthen 1722 (Bach, bình quân) → Paris 1722 (Rameau) → Leipzig (Bach, stretto) → Dublin 1742 (Handel); phiên toà 8 lời khai (Dafne, luận văn Monteverdi, Rembrandt–Schütz, Trumpet Voluntary, Corelli–Lully, điều kiện Buxtehude, tên "Bốn mùa", Minuet Petzold). Lời thoại 9 – 11 câu/cảnh. Tiểu sử 49 nhạc sĩ Baroque `composer-details-bar-{a,b,c}.ts` (c có nguồn thứ hai Treccani/Grove 1904 cho nhiều người; a, b chỉ Wikipedia Anh).
- **Cờ `fiction`** trên một dòng thoại = tình tiết bịa cho sinh động (Lamar cầm nến cho Peri, đôi giày bùn của Bach…), hiện nhãn "✦ Tình tiết hư cấu". **Không** gắn cờ này cho chuyện có thật (đã sửa: trường nữ sinh Chelsea là thật nhưng không có nguồn trong thư viện → bỏ hẳn chi tiết). Chi tiết thật mà thư viện chưa có nguồn thì bỏ, không bịa nhãn.
- **Ảnh nền hai cỡ** (15/11, Lamar: "phân giải cao"): `<id>.webp` 1920 + `<id>-m.webp` 1080, `srcSet` + `sizes=100vw` (hàm `bg()` ở JourneyPage); chân dung NPC 600 – 700. Tải lại bằng `scratchpad/journey/hires.py` (lấy link file gốc qua `fetch.info`, thử thumb 1920 trước, **không bao giờ ghi đè ảnh lớn bằng ảnh nhỏ**; đã có lần script cũ đọc nhầm cỡ ảnh xem trước và ghi đè fauvel/boethius bằng bản 448px → khôi phục từ git). Test đòi đủ hai cỡ. Ảnh CC BY-SA ghi đúng giấy phép + người chụp trong `credits.ts`.
- Nhạc Baroque: Lully, Schütz, Strozzi, Peri chưa có bản thu tự do của người biểu diễn → dùng nhạc cùng truyền thống (Rameau – Marcelle Meyer, Buxtehude) hoặc MIDI/bản dựng, đều có `note`.

## Tiếp theo
- Chương IV Cổ điển (Haydn Esterháza, Mozart, Gluck, Beethoven Heiligenstadt, sonata form) + tiểu sử `cla:*`; có thể kéo dài lời thoại chương I – II bằng cùng giọng chương III.
- Có thể thêm: âm thanh nền (drone quãng 5 bằng `audio.ts`), nhật ký hành trình ghi vào Sổ tay `/brain`, đề tài `/research` từ thẻ chứng cứ, chặng tự sinh từ PLACES + people.
