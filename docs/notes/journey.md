# Hành trình âm nhạc — game nhập vai `/hanh-trinh` (`src/features/journey/`)

Lamar yêu cầu 15/11/2026: game cốt truyện đi qua lịch sử âm nhạc thế giới, người chơi là nhân vật chính, dùng mọi nguồn của app, rất dài, cập nhật dần. Quyết định của Lamar (`decisions.md`):
1. Lời thoại **dựng lại** như truyện sử, giọng văn theo từng thời kỳ (ghi "Lời dựng lại" trên màn; NPC hư cấu có nhãn "nhân vật hư cấu").
2. Tên tự đặt; hình là chân dung Phục hưng (6 tranh PD: Leonardo *Chân dung nhạc sĩ*, Dürer, Van Eyck, Raphael – Castiglione, *Lady with an Ermine*, Pollaiuolo).
3. **Không có thua**; NPC hỏi, đáp án nằm trong bài lý thuyết — nút "📖 Đọc bài" dẫn sang bài, Back quay lại đúng câu hỏi.
4. Chương đầu: Trung cổ.
5. Bổ sung tiểu sử nhà soạn nhạc từng thời kỳ khi làm chương tương ứng (Trung cổ: `theory/content/composer-details-med.ts`, 17 người, nối trong `composers.ts` sau `COMPOSER_DETAILS`).
6. Hiệu ứng điện ảnh, nhập vai.

> **Nâng cấp Maximum Edition (16/11):** khảo sát + thiết kế ở `docs/journey/` — đọc `ARCHITECTURE_AUDIT.md` và `TECHNICAL_ROADMAP.md` trước khi sửa engine. Lỗi đã biết: thêm cảnh vào chương cũ làm khoá lại chương sau (L1); tiến trình chưa vào sao lưu (L2).

## Engine (Phase 1, 16/11) — `src/features/journey/engine/`, logic thuần, test `engine.test.ts`
- `types.ts` mô hình nội dung (Cond/Effect là dữ liệu, Dialogue đồ thị node có `voice` từng dòng, Quest nhiều giai đoạn, Puzzle, Evidence, Item, ChapterDef). `world.ts` `holds`/`apply`; `dialogue.ts` `enter`/`step`/`analyzeDialogue` (ngõ cụt, vòng kín, không tới được, trích không nguồn); `quest.ts` `settleQuests`/`analyzeQuest`; `puzzles.ts` registry `choice order match classify blank` (`check`, `puzzleProblem`: đáp án phải tự giải được); `progression.ts` XP (một lần/câu, trừ gợi ý và lần sai), level, kỹ năng 6 nhánh, mastery 4 bậc (một câu đúng không vượt "Đã gặp"), thành tích; `validate.ts` kiểm cả chương.
- **Save v2** (`engine/save.ts`, `progress.ts`): khoá `journey:v2`, giữ phẳng mọi trường v1 (màn cũ đọc như trước) + `chaptersOpen flags visited quests puzzles dialogue inventory codex xp skills mastery achievements`. Đọc v1 một lần → `journey:v1.bak` (v1 để nguyên); trường hỏng sửa riêng, ghi `journey:repair-log`; JSON hỏng cất `journey:v2.broken`; "Bắt đầu lại" cất `journey:v2.reset`; nhập sao lưu cất `journey:v2.bak`. **Chương đã mở không khoá lại** (`opened` = chương đầu ∨ `chaptersOpen` ∨ chương trước xong; `settle` ghi mọi chương mở vào save).
- `content/legacy.ts`: 6 chương cũ → `ChapterDef` (id `q:/pz:/loc:/dlg:` suy từ id cũ; `q:chương/cảnh` xong ⇔ `save.done`; thẻ giữ id). Cả 6 qua `validateChapter` 0 lỗi. Trả lời câu hỏi cảnh ghi `recordAttempt` (XP, mastery, Codex); phán quyết đúng lần đầu +5 kỹ năng nguồn.
- `content/ids.lock.json` (190 id chương/cảnh/thẻ/lời khai đã phát hành) — test đòi không id nào biến mất. Thêm chương mới: chạy lại script sinh khoá (xem engine.test) hoặc thêm tay.
- Sao lưu: `BackupPayload.journey` (nạp lười module game), nhập "gộp" = `mergeSaves` (hợp, không mất gì), "thay" cất bản cũ trước.

## Lát cắt "Bản thảo thất lạc" (Phase 2–4, 16/11) — báo cáo `docs/journey/REPORTS.md`
- Nội dung `content/ban-thao.ts` (`ArcDef`, đăng ký ở `content/arcs.ts`), chạy bằng `engine/runtime.ts`, giao diện `ui/Arc.tsx` + `arc.css`. View `?v=arc&a=<arc>&l=<nơi>&p=<câu đố>`; nút "✦ <tên>" trên bản đồ chương khi `arc.opens` đúng. Mở/đóng câu đố là push/back (Back của máy về địa điểm).
- Câu đố mới: `neume` (vị trí 0 = dòng 1, khoá Đô/Fa; đáp án do validator tự tính), `hexachord` (`HEXACHORDS`, đáp án tự tính), `aural` (`{track: khoá MUSIC, start, end}` — bản thu thật Commons; mốc đầu câu Ut queant đo bằng YIN, ghi trong REPORTS §F), `investigation` (đáp án = kết luận + `support` bắt buộc + `reject` không được dùng làm chỗ dựa; feedback `ket-luan:<id>`, `yeu:<ev>`, `thieu`).
- Viết lát cắt mới: mọi dữ kiện phải có bài thư viện (thiếu thì viết bài trước — đã viết `hexachord-va-ban-tay-guido`); nhân vật hư cấu đặt tên không trùng người thật; mỗi node thoại có `voice`; vật/chứng cứ hư cấu có `kind: 'fiction'`. Test e2e đọc đáp án từ file nội dung (`tests/journey-arc.spec.ts`), hội thoại đi theo danh sách lựa chọn ưu tiên (đặt lựa chọn kết thúc trước lựa chọn lặp lại).

## Phase 5–6 (16/11) — báo cáo `docs/journey/REPORTS.md`
- `engine/skills.ts`: `SKILL_TREE` (6 nhánh × 5 bậc có tên), `PERKS` (phần thưởng thật; nội dung dùng điều kiện `{ skill, level }`), `branch()`, `hasPerk()`. `engine/report.ts`: `reportProblems` (≥ 2 chứng cứ có nguồn, không giai thoại/hư cấu làm chỗ dựa, phân tích ≥ 80 ký tự) + `reportDraft` → đề tài `/research` (`createProject` + `updateProject`).
- Câu đố `debate` (lượt → câu đáp; feedback `<lượt>:<câu>`). Vật phẩm `use.at` = id câu đố → nút "Dùng …" mở gợi ý không trừ điểm.
- Phiên toà (JourneyPage `Court`): sau phán quyết chọn bài căn cứ (`groundsOf`: bài của lời khai + 2 bài khác của phiên toà, `data-slug` cho test) → `save.trial`.

## Phase 8 (16/11) — `engine/replay.ts`
- `levelFrom(recent)` → `KIND_WEIGHTS` truyền vào `makeTrip(…, weights)`; mức chốt đầu chuyến (`recent.slice(0, len − at)`, cùng mẹo với `asked`). `Endless.recent` (40 câu gần nhất).
- Thử thách ngày: `?v=daily`, khoá save `endless["daily:YYYY-MM-DD"]`, `dailySeed`, `dailyChapter` (chương đã mở có `ERA`), `streak`. `EndlessTrip` nhận `daily`.
- Ôn luyện: `dueReviews(puzzles, save)`, `recordReview` (không XP); `?v=arc&a=…&p=…&r=1` → `PuzzleScreen review`.
- `replayChapter`, `newGamePlus` (nút trên bản đồ chương; NG+ khi xong cả 6 chương). `save.ngPlus`.

## Hành trình Việt Nam (16/11) — thiết kế ở `docs/journey/VIETNAM.md`
- Hai hành trình chơi độc lập: `TRACKS` (`chapters/index.ts`), `opened(chapter, save)` theo hành trình, `?t=viet-nam`; nút chọn hành trình (`.jr-tracks`) trên bản đồ chương. Vô tận / thử thách ngày / NG+ chỉ cho hành trình thế giới.
- 6 chương `chapters/vn-*.ts` (id chương và thẻ có tiền tố `vn-`); nhạc `music-vn.ts`, bối cảnh `context-vn.ts`, bản đồ Taberd 1838 `map-vn`; style `jr-era-vn`.
- Nền sự kiện: 6 bài `lich-su-viet-nam-*` (`theory/content/lich-su-viet-nam.ts`), viết từ Wikipedia tiếng Anh qua agent đọc web — chỉ giữ điều trang nguồn ghi; số thương vong ghi khoảng và của bên nào.
- Người còn sống không có lời thoại bịa; nhạc nền phần lớn là "âm thanh minh hoạ" (Commons gần như không có nhạc cổ truyền Việt tự do) — `note` hiện trên màn.
- Commons: ảnh gốc bị 429, bản `/thumb/` thì được → bộ tải xin thumb rộng = min(1920, rộng gốc − 1). Tìm file: API `generator=search` + `filemime:audio`/`filetype:bitmap` (quét danh mục "Music of Vietnam" sâu 3 tầng quá chậm vì có cả danh mục nhạc sĩ).

## Phase 7 (16/11) — một tuyến điều tra cho mỗi chương II–VI
- `content/thanh-le.ts` (tl), `clavier.ts` (cb), `loi-don.ts` (sl), `leitmotif.ts` (lm), `goin-home.ts` (gh); đăng ký ở `arcs.ts`; mở khi xong cảnh tương ứng (`opens`). Bảng tóm ở `docs/journey/REPORTS.md` § Phase 7.
- Câu đố mới `figured` (`{key, items: {bass, figure: '5/3'|'6'|'6/4'|'7'}}`, chỉ giọng trưởng) và `scale` (`{items: {tonic, scale: id của harmony.ts SCALES}}`); giao diện `PickUI` (nút bật/tắt từng nốt, `role=group` tên "Đô – 6" / "Dorian trên Rê").
- Test chung trong `engine.test.ts` chạy cho mọi `ARCS`: thêm tuyến mới không cần viết test engine riêng. Chứng cứ nào câu kết luận cần mà không có hiệu ứng `evidence` nào cho → test đỏ (đã bắt 2 lần).
- Đoạn nghe: chọn mốc bằng `ffmpeg volumedetect` trên bản tải về scratchpad (Wikimedia hay trả 429 → thử lại chậm).

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

- **IV. Cân bằng, ánh sáng và một người điếc** (Cổ điển, `co-dien.ts`, style `classical` — chữ đầu gạch chân vàng): 11 cảnh — Sanssouci (C. P. E. Bach, empfindsamer Stil) → Vienna 1762 (Gluck, cải cách opera) → London 1764 (J. C. Bach + Mozart bé, piano Zumpe) → Esterháza (Haydn, sonata form) → Paris (Saint-Georges, giao hưởng Paris) → Hofburg 24/12/1781 (Clementi–Mozart, Cristofori) → Vienna 1786 (Figaro, opera buffa) → 1791 (Zauberflöte Singspiel, Requiem dang dở) → Heiligenstadt 1802 → Bệnh viện Đa khoa 1823 (Salieri, học trò) → Kärntnertor 7/5/1824 (Giao hưởng số 9, Schiller); phiên toà 9 lời khai (Salieri đầu độc, "Bach là cha", "prima le parole", thầy duy nhất, sọ Haydn, hoà 1781, Napoléon cấm, tên "Ánh trăng", số 9 đầu tiên có giọng hát). Tiểu sử 26 nhạc sĩ Cổ điển `composer-details-cla-{a,b}.ts`. Nhạc: Saint-Georges, Salieri chưa có bản thu tự do → Haydn / Requiem Mozart có `note`; "Ánh trăng" trên Commons là MIDI → dùng Pathétique (Musopen). Lần rà nguồn đã bỏ: Mozart nuôi chim sáo, chuỗi quãng ba của Clementi, Beethoven quay lưng không nghe tiếng vỗ tay, "O Freunde", lời tựa Alceste, Schubert đưa tang, nghĩa trang Währing — thư viện chưa có nguồn.

- **V. Những trái tim không chịu im lặng** (Lãng mạn, `lang-man.ts`, style `romantic` — chữ đầu nghiêng, quầng hồng): 11 cảnh — Schubertiade 1821 (Erlkönig, Lied) → Sing-Akademie 11/3/1829 (Mendelssohn, Thương khó Matthew) → Berlin 1829 (Paganini, Op. 1) → Paris 5/12/1830 (Berlioz, idée fixe) → salon Paris (Chopin, rubato) → Leipzig 1840 (Clara kiện cha, Neue Zeitschrift) → Berlin 1841 (Liszt, recital) → La Scala 9/3/1842 (Nabucco, "Viva VERDI") → Opéra-Comique 3/3/1875 (Carmen, Habanera – Yradier) → Bayreuth 13/8/1876 (Ring, leitmotif) → Vienna 1890 (Brahms, Hanslick, âm nhạc tuyệt đối); phiên toà 10 lời khai. Tiểu sử 73 nhạc sĩ Lãng mạn `composer-details-rom-{a…f}.ts` (a sớm, b opera, c Đức, d Pháp, e Nga, f dân tộc + Anh – Mỹ). Nhạc: "Ride of the Valkyries" trên Commons là dàn nhạc giả lập (Philip Milman) → dùng Vorspiel Tristan (Fulda, CC0) có `note`; nhạc Kreuger/Bernd Krueger là MIDI. Ảnh Siemiradzki *Chopin ở salon Radziwiłł*: file `Chopinradziwill.jpg` chỉ có trên en-wiki → dùng `Chopin_concertFXD.jpg` của Commons.

- **VI. Tiếng nói của những dân tộc** (Dân tộc và cuối Lãng mạn, `quoc-gia.ts`, style `national` — chữ đầu trên nền son): 11 cảnh — Bolshoi Kamenny 9/12/1836 (Glinka) → Nhạc viện Sankt-Peterburg 1862 (Rubinstein, Tchaikovsky học) → Moskva 5/1867 (Balakirev, "moguchaya kuchka") → Học viện Y – Phẫu thuật (Borodin) → Mariinsky 8/2/1874 (Mussorgsky, Bức tranh triển lãm) → Praha 1874–75 (Smetana điếc, Má vlast) → Christiania 24/2/1876 (Grieg, thư của Ibsen) → Carnegie Hall 16/12/1893 (Dvořák, Goin' Home) → Turin 1896 (Puccini, Toscanini) → Helsinki 4/11/1899 (Sibelius, Finlandia) → Opera Cung đình Vienna 1897 (Mahler); phiên toà 10 lời khai. Bản đồ: dùng lại Radefeld 1843 (khớp toạ độ tốt; Andree 1881 đẹp nhưng chữ quá nhỏ để dò mốc), thêm mốc Petersburg, Moskva, Christiania, Helsinki. Cảnh ngoài bản đồ (New York) có cờ `far`: chấm kẹp ở mép kèm nhãn "◂ New York"; nhiều chặng cùng một thành phố tự xoè ra quanh điểm. Nhạc: Rubinstein, Sibelius chưa có bản thu tự do → Tchaikovsky (Furtwängler 1951), Grieg, có `note`; Barcarole Glinka trên Commons là piano tổng hợp → dùng Trio pathétique.

## Bối cảnh lịch sử và bản đồ cổ (16/11, Lamar yêu cầu)
- `context.ts` — `CONTEXT[chương]`: 5–6 tấm "Bối cảnh lịch sử" (tiêu đề, đoạn văn, ảnh nền đã có, `read`), lấy từ đoạn giới thiệu trường phái `theory/content/schools.ts` + bài `doi-song-am-nhac-va-thiet-che`. Màn `Prologue` (`?v=prologue`) tự mở lần đầu vào chương (`save.seen`), có "Bỏ qua"; nút "Bối cảnh lịch sử" trên bản đồ xem lại.
- `maps.ts` — bản đồ cổ PD mỗi chương: Shepherd 1190 (Trung cổ; bản đồ lịch sử 1911 vì không có bản đồ Trung cổ đúng địa lý), Ortelius *Europae* 1570, Delisle *Carte de l'Europe* 1724, Bonne 1780, Radefeld 1843. Ảnh cắt quanh tuyến đường (`map-<chương>.webp`, ≤2400px). Toạ độ: **đa thức bậc 2** (lat, lon → x, y) khớp từ ~15 thành phố mốc đọc trên ảnh có lưới (`scratchpad/journey/maps/grid.py`, `gcp.json`, `fit.py`), RMS 20–40px trên ảnh gốc 3840. Thêm chương = tải bản đồ, đọc mốc, chạy fit, thêm một dòng `MAPS`. Test đòi mọi chặng nằm trong ảnh.
- `ChapterMap`: khung cuộn + "Phóng to bản đồ" (canvas `min(260%, w px)`, cuộn tới chặng hiện tại); chấm son đỏ – giấy, chạm chấm đã mở để vào cảnh. `.jr-oldmap` phải `position: relative` (lớp `jr-atlas-wash` cố định đè lên, chặn chạm).

## Điều hướng (16/11, Lamar báo lỗi)
- `go(p, how)` trong JourneyPage: `push` khi mở sâu (cảnh, phiên toà, vô tận — gắn `state.jr`), `back` khi quay về (nút ←, "Lên đường", "Về cốt truyện"): có `state.jr` thì `navigate(-1)`, không thì thay trang hiện tại; `replace` khi đổi ngang (cảnh cuối → phiên toà, chặng vô tận kế tiếp). Trước đây ← đẩy thêm trang bản đồ vào lịch sử nên Back của máy quay lại cảnh. Test e2e "nút ← trong game lùi lịch sử".

## Rà lỗi trải nghiệm (16/11, Lamar: "đôi khi bị đứng, vuốt không được")
- Khung bản đồ cổ: trước tự cuộn bên trong (`overflow: auto` + `overscroll-behavior: contain`), vuốt trên bản đồ (hơn nửa màn) không cuộn được trang → nay khung không cuộn khi chưa phóng to; phóng to (`.is-zoom`) mới cuộn, và trả cú vuốt cho trang ở mép (`overscroll-behavior: auto`).
- Khung bối cảnh lịch sử: thêm `max-height` + cuộn (chữ dài tràn trên máy nhỏ).
- Phần mở đầu: mở một lần là tính đã xem (`seen`) — trước đó thoát giữa chừng thì lần nào vào chương cũng bị kéo lại vào bối cảnh. Tự mở thì "Vào bản đồ" thay trang; mở từ nút thì lùi về.
- Nhạc nền: bài cũ được tháo khỏi đồ thị Web Audio khi chuyển bài (trước để lại mọi nút qua cả buổi chơi). Hạt phim bỏ `mix-blend-mode` (đắt trên điện thoại). Cảnh: `-webkit-touch-callout: none` (nhấn giữ không bật menu ảnh). Kho vô tận tải lỗi thì báo, không treo "Đang trải bản đồ…".
- **Bot rà toàn game** `scratchpad/sweep.cjs` (máy 360×640, chạm): mọi tấm bối cảnh, vuốt trên bản đồ phải cuộn trang, mọi cảnh tới câu hỏi → bấm đáp án → nút đi tiếp thấy được, khung không tràn/không cuộn được, phiên toà, một chuyến vô tận mỗi chương. Lần chạy 16/11: 0 lỗi.

## Lữ hành vô tận — bộ sinh màn chơi (16/11)
- `scripts/journey/pool.py` (`npm run journey:pool`, chạy lại khi tiểu sử đổi) → `src/features/journey/pool.json` (commit; ~390 KB, tải lười): 324 người (tên, slug, năm, quốc gia, nhóm, mô tả, tác phẩm từ `composers.ts`), 1.832 mốc từ bảng "Tiểu sử" (bỏ dòng có "hoặc", "bài tiếng…", "Wikipedia", "có lẽ", năm "?"; năm "k." giữ cho câu "việc gì" nhưng không làm đáp án câu "năm nào"), 809 giai thoại (đề + lời nguồn, cắt ≤230 ký tự).
- `endless.ts` `makeTrip(chương, pool, seed, asked)`: 5 chặng/chuyến, hạt giống cố định (cùng seed = cùng chuyến); 4 kiểu câu: việc gì năm X, năm nào, tác phẩm nào của ai, nguồn nói gì về giai thoại (2 nhiễu là giai thoại khác của chính người đó). Nhiễu = dữ kiện của người khác cùng thời kỳ, không chứa tên người được hỏi. Lời dẫn tự viết (`MOOD`, `GREET`) không chứa sự kiện. Nơi chốn = quốc gia → toạ độ (`PLACE`), chấm ngoài bản đồ bị kẹp vào mép.
- `EndlessTrip` (`?v=endless`) dùng lại `ChapterMap` + `ScenePlayer` (prop `endless`); tiến độ `save.endless[chương]` (seed, at, total, right, asked ≤1500). Nút "∞ Lữ hành vô tận" trên bản đồ chương. `ERA` là danh sách tiền tố nhóm: Chương V lấy rom:early/opera/german/france, Chương VI lấy rom:russia/national/americas.
- Test: `endless.test.ts` (mọi người trong kho là bài có thật; 40 chuyến/thời kỳ đều 4 lựa chọn khác nhau, có ảnh, có nhạc; cùng seed cùng chuyến; câu đã hỏi không lặp) + e2e trong `journey.spec.ts`.
- Giới hạn: Trung cổ chỉ 54 mốc (đa số năm "k."); 108 nhạc sĩ chưa có tiểu sử chi tiết (thế kỷ XX, ngoài châu Âu) nên chưa vào kho; phán quyết thật/giai thoại tự động chỉ chắc cho 25 mục nên chưa dùng kiểu câu phiên toà.

## Thử thách âm nhạc mỗi chặng + hồ sơ người chơi (17/11, Lamar: "không thấy thông tin người chơi", "không có giải đố âm nhạc, chỉ đi")
- Nguyên nhân: XP/cấp/kỹ năng/thành tích có trong save nhưng màn chính chỉ hiện "x chặng · y thẻ"; câu đố âm nhạc chỉ nằm trong tuyến điều tra, mở bằng nút "✦" nhỏ sau một chặng nhất định.
- `engine/challenge.ts` `sceneChallenge(chương, chặng, thứ tự)`: một câu đố theo thời kỳ sau câu hỏi của chặng — Trung cổ đọc neume, Phục hưng hexachord, Baroque/Cổ điển bè trầm có số, Lãng mạn thang trưởng/thứ, Quốc gia Dorian/Mixolydian/ngũ cung, Việt Nam ngũ cung. Sinh từ id chặng (cố định), đáp án do hàm của dạng câu đố tính; id `pz:ch/<chương>/<chặng>`; ghi `recordAttempt` (XP, thông thạo). Phrygian/Lydian không dùng (nốt ngoài bảng chọn trưởng + thứ). Test `engine/challenge.test.ts` chạy mọi chặng mọi chương.
- Màn chặng: pha `music` giữa câu hỏi và thẻ (`MusicChallenge` trong JourneyPage, dùng `PuzzleBody` xuất từ `ui/Arc.tsx`); có gợi ý, giải thích, "Bỏ qua" (chặng vẫn tính xong từ lúc trả lời đúng câu hỏi). Lữ hành vô tận không có.
- Hồ sơ: thẻ người chơi ở chân bản đồ hiện "Cấp N · XP · Hồ sơ ›", bấm mở `ui/Profile.tsx` (thanh XP tới cấp sau, số liệu, mức thông thạo, tiến độ từng chương, tab Kỹ năng = `SkillList` dùng chung với Arc, tab Thành tích).
- Tuyến điều tra là một dòng trong danh sách chặng, ngay dưới chặng mở nó, thấy từ đầu (khoá, "mở sau chặng N", kể các dạng câu đố). Nút "✦" ở đầu bản đồ đã bỏ; test chọn `.jr-stop-row.is-arc`.

## Tiếp theo
- Chương VII: thế kỷ XX (Debussy, Stravinsky – Diaghilev, Schoenberg, Bartók, Shostakovich…) — cần bổ sung tiểu sử thế kỷ XX trước; có thể kéo dài lời thoại chương I – II bằng cùng giọng chương III.
- Có thể thêm: âm thanh nền (drone quãng 5 bằng `audio.ts`), nhật ký hành trình ghi vào Sổ tay `/brain`, đề tài `/research` từ thẻ chứng cứ, chặng tự sinh từ PLACES + people.

## Clip mở đầu Hành trình (24/11/2026, Lamar gửi 2 clip)
- Mỗi lần vào `/hanh-trinh` (kể cả tải lại), clip chạy trước rồi game mới mount; nhạc nền của game bắt đầu khi clip tan. Wrapper `JourneyPage` → `JourneyGame` trong `JourneyPage.tsx`.
- Dùng lại `components/IntroClip.tsx` với `clip="journey"`, `remember={false}`. Luật giống clip mở app: luôn có tiếng, không nút bỏ qua/tắt tiếng, xem hết; trình duyệt chặn tiếng thì hiện "Chạm để bắt đầu"; không tải được (ngoại tuyến, 8 s) thì vào thẳng game.
- Tệp `public/media/journey-{portrait,landscape}.{mp4,webm,webp}` (mp4 H.264 CRF 25 ~1,7–1,9 MB, webm VP9 dự phòng, webp làm poster), **không precache** (`globIgnores: media/journey-*`).
- Test: `tests/intro.spec.ts` (2 ca mới). Các test khác đặt `sessionStorage['journey:clip-off']='1'` để vào thẳng game (`shouldShowJourneyClip` trong `introGate.ts`; app không bao giờ đặt khoá này). Mở trang mới bằng `context().newPage()` thì phải `addInitScript` lại khoá đó.

## Phase 1 — khung cảnh 2D nhìn ngang (25/11/2026, Lamar giao "Phase 1 — prototype hình ảnh và lối chơi")
- **Một cảnh thử: Thư viện Pomposa** (`loc:bt/thu-vien` của tuyến "Bản thảo thất lạc"). URL thêm `&w=1`: `?c=trung-co&v=arc&a=ban-thao&l=loc:bt/thu-vien&w=1`; màn danh sách của nơi đó có nút "Đi vào khung cảnh", khung cảnh có "← Danh sách". Màn danh sách cũ giữ nguyên.
- **Không có hệ thống nghiệp vụ mới**: ai ở đó, đồ vật nào dùng được (điều kiện `when`), hội thoại, effects, quest, item, chứng cứ đều lấy từ `LocationDef` qua `engine/runtime.ts` (`enter`, `effects`) và `DialoguePanel` dùng chung với màn danh sách; ghi vào save v2 qua `progress.update`. Khoá `journey:v2` và định dạng save **không đổi**. Vị trí nhân vật chỉ giữ trong bộ nhớ (`lastSpot`), không phải save — tải lại thì về chỗ đứng đầu.
- File: từ Phase 2 xem mục dưới (`scene/` + `ui/walk/`). `ui/arcShared.ts`: `useEscape`, `KIND` tách khỏi `Arc.tsx` để không thêm cảnh báo fast refresh.
- Lớp: xa (ảnh `bg` của nơi đó, thị sai 0,4) · giữa (tường, cửa sổ, giá sách, bục đọc, rương, rào, cửa kho) · nhân vật · tiền cảnh che (cột, đèn, thị sai 1,18) · lớp tương tác (nút trong suốt phủ người/vật + hình thoi vàng) · va chạm (dữ liệu).
- Điều khiển: chạm sàn để đi; chạm người hoặc vật thì nhân vật tự đi tới cạnh rồi dùng; giữ ◀ ▶; phím ← →, E/Enter, Esc. Nút ở hàng riêng dưới khung cảnh, có vùng an toàn. Khi hội thoại hoặc xem xét: khoá di chuyển, ẩn nút; đóng lại thì trả điều khiển. Rào gỗ chặn kho lưu trữ, đi vào thì hiện câu báo. Lần đầu vào có đoạn tự bước vào (khoá điều khiển); khi giảm chuyển động thì bỏ.
- Camera: tỷ lệ = chiều cao khung, nhưng luôn hiện ít nhất 560 đơn vị bề ngang (điện thoại dọc có dải cảnh ở giữa); cuộn ngang có giới hạn theo nhân vật.
- **Bẫy đã gặp**:
  - Vòng `requestAnimationFrame` giữ closure `paint` cũ (lúc tỷ lệ = 0), nhân vật không hiện → đọc `paint` qua ref.
  - Focus nút ngoài màn hình làm trình duyệt (và Playwright) cuộn `.wk-stage` dù `overflow: hidden` → `overflow: clip` + `onScroll` kéo về 0.
  - Tập phím giữ tạo lại mỗi lần render nên thả phím không dừng → `useRef`.
  - Route là `/hanh-trinh`; gõ `/journey` thì ra lỗi 404 của router hiện "[object Object]".
- Test: `tests/journey-walk.spec.ts` (save cũ v1 → đi, nói chuyện có khoá, xem giá sách nhận item + chứng cứ, rào, tải lại, quay về danh sách; phím; bố cục điện thoại), `ui/walk/walk.test.ts`.
- Chưa có: các nơi khác của tuyến (thêm bố cục vào `scenes.ts` + tranh), âm bước chân, chân dung người chơi trên hình nhân vật (đang dùng một hình lữ khách chung). Chưa thử iPhone/Safari thật.

## Phase 2 — Scene & World Engine (25/11/2026)
- **Tách ba tầng**: `scene/` = lõi TS thuần (không React), `content/scenes/<arc>.ts` = dữ liệu cảnh/thế giới (chỉ dữ liệu thuần, test kiểm), `ui/walk/` = hiển thị.
  - `scene/types.ts`: `SceneDef`, `LayerDef`, `InteractableDef`, `TransitionDef`, `SceneEventDef`, `RegionDef`, `WorldDef`.
  - `scene/actor.ts`: nhân vật + va chạm + `standSpot` (khoảng cách, phía tiếp cận, null khi không tới được).
  - `scene/view.ts`: hệ toạ độ cảnh/thế giới/màn hình, camera.
  - `scene/lifecycle.ts`: `SceneHost`.
  - `scene/world.ts`: registry cảnh, thế giới/khu vực, `passage`.
  - `scene/interact.ts`: điểm tương tác lấy nhãn và điều kiện từ arc.
  - `scene/session.ts`: vị trí đứng và câu đã nói, lưu trong sessionStorage — **không phải tiến trình**.
- **Không nhân đôi dữ liệu**: cảnh chỉ trỏ id (`ref`) vào `LocationDef` (người, đồ vật); nhãn, điều kiện, hội thoại, effects đều lấy từ arc. Quyền vào một nơi = `isOpen` của arc (hidden/unlock); khu vực mở khi có nơi mở. Trạng thái lâu dài chỉ là save v2 có sẵn (visited, flags…). Khoá/định dạng save không đổi.
- **URL**: `&w=<scene id>` (hoặc `1` = cảnh đầu của nơi đó, giữ được địa chỉ Phase 1), `&sp=<spawn>` chỉ dùng một lần rồi bị gỡ khỏi địa chỉ (để tải lại trang thì giữ chỗ đứng). `w` sai → màn danh sách.
- **Vòng đời**: unloaded → loading (định nghĩa + chunk tranh `ui/walk/art/<module>.tsx` tải động + giải mã ảnh, có hạn giờ) → ready → active ⇄ suspended (app chạy nền: dừng vòng khung hình, nhân vật đứng yên) → unloading → unloaded. Ảnh hỏng thì bỏ lớp đó, cảnh vẫn chơi; định nghĩa hoặc tranh hỏng → `failed`, màn báo lỗi có Thử lại và ← Danh sách.
- **Lớp**: vai trò distant/background/midground/effects/characters/foreground/occlusion/interaction, `z`, `parallax`, `opacity`, `when` (điều kiện trên save — cửa phòng họp vẽ mở khi `open:loc:bt/phong-hop`). Thị sai chỉ khi camera di chuyển.
- **Camera**:
  - `follow`: có vùng chết (`deadZone`), không rung, kẹp trong cảnh.
  - `fixed`: hiện trọn phòng — trừ khi màn quá hẹp (thu nhỏ dưới 75% so với vừa chiều cao) thì cuộn như cảnh rộng.
  - Khi đổi cỡ hoặc xoay màn: đặt lại theo nhân vật.
- **Tương tác** (một cơ chế, hành động riêng theo loại): npc → hội thoại của arc; object → effects/câu đố/xem xét; door/exit → chuyển cảnh; lookout → câu mô tả của cảnh. Vùng chạm (`width/height`) tách khỏi vùng va chạm (`solids`) và chỗ đứng (`approach`).
- **Chuyển cảnh**: `passage()` kiểm nơi đích mở + `when`. Đi qua được: tối dần 0,28 s → cảnh cũ suspend → URL mới → cảnh mới tải, nhân vật ở spawn. Đóng: nói lý do. Nơi đích chưa có cảnh → màn danh sách.
- **Sự kiện vùng**: `once: session|visit`, `when`, `note`, `effects` (đi qua engine).
- **Hai cảnh mẫu**: thư viện (`sc:bt/thu-vien`, 2000 đơn vị, follow) ⇄ phòng chép sách (`sc:bt/phong-chep`, 1000 đơn vị, fixed, bàn chép là vật cản, chỉ dùng được từ bên trái). Thế giới `w:ban-thao`: khu vực Pomposa (3 nơi) và Arezzo (2 nơi, chưa có cảnh). Bảng "Khu vực" trong cảnh.
- **Bẫy đã gặp**:
  - `.wk-stage` không có stacking context → các lớp z 40/60 đè lên hộp thoại (z 5) và chặn bấm → `isolation: isolate`.
  - `setState` trong hàm gọi từ layout effect bị lint bắt → tách `paint` (chỉ DOM) và `sense` (state, gọi từ vòng khung hình và sự kiện).
  - Vùng chạm cửa sổ kéo tới sàn nên chạm sàn lại mở cửa sổ → thêm `height`.
- Test: `scene/scene.test.ts` (22), `tests/journey-walk.spec.ts` (7 × 2 dự án: chuyển cảnh hai chiều, cửa khoá, bảng khu vực, tải lại, lỗi tải chunk tranh, `w` sai).
- **Thêm cảnh mới**:
  1. Thêm `SceneDef` vào `content/scenes/<arc>.ts`, đăng ký trong `scene/world.ts` (`SCENES`, `WORLDS`).
  2. Vẽ tranh trong `ui/walk/art/<module>.tsx` và khai báo khoá ở `art/index.ts`.
  3. Test nội dung sẽ báo id sai hoặc điểm không tới được.

## Phase 3 — nhân vật và hoạt ảnh (25/11/2026)
- **Kiến trúc** (`scene/character/`, TS thuần, test ở `character.test.ts`):
  - `defs.ts`: định nghĩa nhân vật = ngoại hình + rig + clip nghỉ + tốc độ. Khoá theo id nhân vật của arc (`npc:bt/rinaldo`), cộng thêm `player` và `extra:*`. Tên, vai, hội thoại vẫn ở `CharacterDef` của arc.
  - `machine.ts`: máy trạng thái điều khiển `idle walk turn approach interact talk listen inspect gesture scripted disabled`. Có bảng chuyển; nước chuyển không hợp lệ bị bỏ qua.
  - `actor.ts`: bộ điều khiển chuyển động (Character Controller): `setState`/`goTo` đi qua máy trạng thái.
  - `clips.ts`: clip dạng dữ liệu (keyframe transform theo bộ phận rig + điểm sự kiện), `clipFor(state, ctx)`.
  - `animator.ts`: bộ điều khiển hoạt ảnh (Animation Controller) — token, sự kiện một lần, `then`, pause/resume, giảm chuyển động.
  - `npc.ts`: hành vi NPC (watch, kịch bản `walk/face/play/wait/say/leave`).
  - `cast.ts`: các thể hiện nhân vật (Character Instance) của một cảnh, gửi sự kiện tới đúng lần play.
  - Renderer: `ui/walk/Character.tsx` (một rig cho mọi nhân vật, Web Animations chỉ trên transform).
- **Trạng thái điều khiển ≠ hoạt ảnh**: `Cast.sync` chọn clip chuyển động (start → walk → stop → nghỉ, turn). Clip của hành động (greet, reach, push, look-up, read, talk/listen/nod, surprise, point, settle) do cảnh phát theo ngữ cảnh.
- **Sự kiện hoạt ảnh** điều khiển tương tác (không còn `setTimeout` ước lượng):
  - `reach.contact` → effects của vật (lấy trang bản thảo).
  - `reach.done` → mở ô xem xét hoặc câu đố.
  - `push.open` → chuyển cảnh, hoặc báo cửa đóng.
  - `greet.ready` → mở hội thoại.
  - `look-up.open` → mở ô quan sát.
  - Sự kiện của clip đã bị thay thì không bao giờ được gửi.
- **Hội thoại**: `DialoguePanel` có thêm `onNode` (chỉ để trình bày). Người nói → `talk` (tay, miệng); người nghe → `nod` rồi `listen`; mặt theo `mood` của node (trường tuỳ chọn mới trong `DNode`, engine bỏ qua). Đóng hội thoại → `settle`, NPC về clip nghỉ hoặc chạy `afterTalk` (thầy quản thư chỉ về giá sách khi quest đang chạy).
- **NPC**: thầy quản thư (`read`, râu xám, áo đen, chùm chìa khoá), Rinaldo (`write`, trẻ, bút lông), thầy trợ sĩ (nhân vật tạm thời trong sự kiện vùng: mang sách đi ngang rồi ra cửa phòng họp). NPC quay về người chơi khi tới gần (`watch`).
- **Tích hợp Scene Engine**:
  - `Cast` sống cùng cảnh, bỏ đi khi rời cảnh.
  - App chạy nền → `cast.pause` + dừng Web Animations; quay lại → tiếp tục.
  - Vòng khung hình chạy khi người chơi đi hoặc khi `cast.busy`.
  - Điểm tương tác của NPC đi theo vị trí thể hiện.
- **Bẫy**:
  - Bảng chuyển thiếu `interact → listen` làm người chơi kẹt `interact` khi hội thoại mở.
  - `.jr-dialog` (journey.css nạp sau) đè `.ar-dialog-box` về `position: absolute` đáy màn → hộp thoại trong cảnh không đổi chỗ được; sửa bằng `.wk .ar-dialog-box`. Trên màn ngang hộp thoại nằm trên để không che hai người đang nói.
- **Tài nguyên tạm**: hình nhân vật vẽ vector đơn giản trên rig chung (không có sprite sheet). Mặt chỉ có lông mày/mắt/miệng đổi theo mood. Chưa có chân dung người chơi trên nhân vật, chưa có âm thanh.

## Phase 4 — hệ thống kể chuyện (26/11/2026)
- **Kiến trúc** (`engine/narrative.ts`, thuần, test `engine/narrative.test.ts`):
  - Tuyến chính = chương (`ChapterDef`) → tuyến (`ArcDef`, quest chính).
  - Tuyến thành phần = `NarrativeDef` gắn vào arc (`arc.narrative`): 4 hồi (setup / development / climax / resolution) chứa nhịp `BeatDef`.
  - Mỗi nhịp có: kích hoạt (`state | enter | look | talked`), `when`, `after`, `effects` (đi qua engine), `show` (suy nghĩ / lời dẫn), `journal` (`knowing`: known / hypothesis / confirmed; `basis`: fact / interpretation / fiction; `refs`; `settles`).
- **Không thêm lưu trữ**: nhịp đã xảy ra = cờ `beat:<id>`; chi tiết tài liệu đã xem = cờ `seen:<doc>/<spot>`. Lựa chọn ghi bằng cờ/topic có sẵn, quest vẫn là quest. Tải lại trang thì mọi thứ dựng lại từ save. Nhật ký sinh ra từ các nhịp đã xảy ra, không lưu riêng.
- **`advanceStory`**: mỗi nhịp đặt cờ trước khi chạy, nên không bắn hai lần và không lặp vòng (có trần bằng số nhịp).
- **`analyzeNarrative`** (test cho mọi arc) chặn trường hợp người chơi kẹt:
  - id hợp lệ; cờ mà nhịp chờ phải có thứ gì đó đặt nó;
  - `after` không vòng; điểm kích hoạt `look` tồn tại;
  - dữ kiện `fact` phải có nguồn.
- **Lựa chọn**: trường `kind` tuỳ chọn trên lựa chọn hội thoại (`expressive | info | consequence | conditional`). Test bắt buộc mọi lựa chọn `consequence` phải có effects (không có lựa chọn giả).
- **Kể qua môi trường**: `arc.documents` (`DocumentDef`: trang vẽ + các điểm xem kỹ, mỗi điểm có basis/refs/when), mở từ đồ vật có `document`. Giao diện `ui/DocumentView.tsx`: xem từng điểm, chi tiết mới lộ ra sau chi tiết khác, có đếm "đã xem".
- **Trình bày**:
  - `ui/useStory.ts`: bộ đạo diễn của arc — `narrate(trigger)`, và tự chạy nhịp `state` mỗi khi save đổi.
  - `ui/StoryLines.tsx`: suy nghĩ / lời dẫn / "Sổ tay có ghi chép mới".
  - `ui/Journal.tsx`: tab "Nhật ký" trong Sổ hành trình (`Book`, nay export, có nút "Sổ tay" trong khung cảnh). Giả thuyết đã có lời giải bị gạch, chỉ tới lời giải; quyết định tách riêng; không lộ trước gì.
- **Nguồn**: `refs` chỉ là `ev:` (chứng cứ có `source`) hoặc `a:` (bài thư viện); test kiểm từng ref có thật và chứng cứ được dẫn không phải hư cấu. Truy nguyên UMK: `getKnowledge(a:…)` (nạp động) hiện loại nguồn và trạng thái kiểm chứng đúng như UMK ghi, không nâng cấp.
- **UMRE**: không dùng. UMRE chỉ có các lĩnh vực âm nhạc (phức điệu, hoà âm…), không có niên đại/sự kiện, và yêu cầu cấm đưa logic kể chuyện vào lõi UMRE. Phần kiểm nhất quán tự sự là `analyzeNarrative` + test nội dung, đặt ở Journey.
- **Arc mẫu "Ghi chú bên lề"** (`content/story-ban-thao.ts`, HƯ CẤU, nguồn duy nhất là `ev:bt/neume-dong-ke` ← `a:lich-su-ky-am`):
  - Diễn biến: sách ca trên bục đọc thư viện → khảo sát (dòng kẻ = dữ kiện có nguồn; chỗ cạo; ghi chú "R." chỉ lộ sau chỗ cạo) → lời thầy quản thư → chọn tin hoặc hỏi Rinaldo → (điều tra) lời kể thứ hai + mảnh giấy da, "R." được xác nhận → kể lại → khép.
  - Quest `q:bt/ghi-chu` có rẽ nhánh. `next: []` để kết thúc rõ, vì mặc định quest đi tiếp sang giai đoạn đứng sau trong danh sách.
  - Hội thoại đổi theo lựa chọn ở lần gặp sau.
- **Bỏ ngỏ**: chưa có hồi tưởng / cảnh chuyển có hình; tuyến chính chưa có màn tổng quan riêng.
