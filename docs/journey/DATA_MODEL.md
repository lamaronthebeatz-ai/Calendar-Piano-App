# Hành trình — Mô hình dữ liệu mục tiêu

Nguyên tắc: **id ổn định** (chuỗi kebab, không phụ thuộc tên hiển thị); **nội dung tĩnh** (TS có kiểu, kiểm bằng validator) tách khỏi **trạng thái người chơi** (save); tri thức dùng **mã thống nhất của nền tảng** `src/features/knowledge/ids.ts` (`a:slug`, `w:Q…`, `s:id`, `ms:id`, `m:id`) — game không chép dữ liệu thư viện.

Kiểu dưới đây là đích thiết kế; tên trường có thể tinh chỉnh khi code. Id trong game có tiền tố loại để log và validator đọc được: `loc:`, `npc:`, `dlg:`, `q:`, `pz:`, `ev:`, `item:`, `ach:`.

## 1. Điều kiện và hiệu ứng (dùng chung mọi nơi)
```ts
type Cond =
  | { flag: string } | { not: Cond } | { all: Cond[] } | { any: Cond[] }
  | { quest: string; is: 'active' | 'done' | 'stage'; stage?: string }
  | { puzzle: string; solved: true } | { evidence: string } | { item: string }
  | { met: string /* npc */ } | { topic: string /* npc:topic đã bàn */ }
  | { knows: EntityId /* đã khám phá trong Codex */ } | { skill: SkillId; level: number }
  | { chapterOpen: string }

type Effect =
  | { set: string } | { unset: string }
  | { startQuest: string } | { advance: string; to: string } | { completeQuest: string }
  | { give: string /* item */ } | { evidence: string } | { discover: EntityId }
  | { xp: number; skill?: SkillId } | { remember: { npc: string; topic: string } }
  | { unlock: string /* loc */ } | { openPuzzle: string }
```
Điều kiện là dữ liệu (không phải hàm) → validator kiểm được mọi tham chiếu.

## 2. Chapter (`content/<chương>/index.ts`)
```ts
interface ChapterDef {
  id: string; numeral: string; title: string; era: string; years: string; style: string
  period: EntityId                 // a:thoi-ky-trung-co
  historicalContext: string        // id trong CONTEXT (giữ context.ts)
  map: string                      // khoá MAPS (giữ maps.ts)
  locations: LocationDef[]; characters: CharacterDef[]; dialogues: DialogueDef[]
  quests: QuestDef[]; puzzles: PuzzleDef[]; evidence: EvidenceDef[]; items: ItemDef[]
  unlock: Cond                     // mặc định { chapterOpen: chương trước } — xem Migration §3
  recommendedLevel?: number
  soundtrack: string               // khoá MUSIC
  completion: Cond                 // vd. { quest: 'q:main-…', is: 'done' }
  court?: CourtDef                 // phiên toà (Claim cũ + yêu cầu chứng cứ)
}
```

## 3. Location
```ts
interface LocationDef {
  id: string; name: string; lat: number; lon: number; far?: boolean; year?: string
  bg: string; focus?: string; ambience?: string /* MUSIC/ambient key */
  hidden?: boolean                 // không hiện trên bản đồ tới khi unlock
  unlock?: Cond
  present: { npc: string; when?: Cond }[]
  objects: { id: string; label: string; when?: Cond; effects?: Effect[]; dialogue?: string; puzzle?: string }[]
  onEnter?: Effect[]
}
```

## 4. Character
```ts
interface CharacterDef {
  id: string; name: string
  status: 'historical' | 'fictional'
  person?: EntityId                // historical ⇒ bắt buộc: a:guido-d-arezzo (bài thư viện = nguồn)
  role: string; portrait?: string; personality?: string
  domains: EntityId[]              // khái niệm nhân vật "biết": a:hexachord…
  relations: { to: string; kind: 'mentor' | 'student' | 'colleague' | 'rival' | 'patron' | 'associate'; basis: EntityId | 'fiction' }[]
  sources: EntityId[]              // historical ⇒ ít nhất một (bài/tiểu sử/s:)
  accuracyNotes?: string
}
```
Quan hệ giữa hai người thật phải có `basis` (bài hoặc `relations.json` qua `explore`); quan hệ với nhân vật hư cấu ghi `basis: 'fiction'`.

## 5. Dialogue (đồ thị node)
```ts
interface DialogueDef { id: string; start: string; nodes: Record<string, DNode>; participants: string[] }
interface DNode {
  speaker: 'narrator' | 'me' | string /* npc id */
  text: string                     // {ten} = tên người chơi
  voice: 'reconstructed' | 'quote' | 'fiction' | 'narration'
  quote?: { source: EntityId; page?: string }   // voice='quote' ⇒ bắt buộc
  refs?: EntityId[]                // khái niệm/tác phẩm/nguồn nhắc tới → Codex
  when?: Cond                      // node bị bỏ qua nếu sai
  effects?: Effect[]
  next?: string                    // tuyến tính
  choices?: { text: string; when?: Cond; effects?: Effect[]; next: string; once?: boolean }[]
  end?: true
}
```
- `voice` thay cờ `fiction` và nhãn "Lời dựng lại" cả cảnh: mỗi dòng biết mình là trích thật, lời dựng lại, hay tình tiết bịa.
- Validator: mọi `next` tồn tại; từ `start` đến được ít nhất một `end`; không có chu trình mà không có lựa chọn thoát; node có `choices` luôn còn ≥ 1 lựa chọn khả dụng (hoặc có `next` dự phòng).

## 6. Quest (máy trạng thái nhiều giai đoạn)
```ts
interface QuestDef {
  id: string; chapter: string; title: string; summary: string
  kind: 'main' | 'side' | 'investigation' | 'academic' | 'hidden'
  requires?: Cond                  // điều kiện nhận
  stages: { id: string; text: string; objectives: Objective[]; onDone?: Effect[]; next?: string | { when: Cond; to: string }[] }[]
  rewards: Effect[]
  links: EntityId[]                // tri thức của nhiệm vụ
  evidenceNeeded?: string[]        // ev: phải có trước khi chốt
}
type Objective =
  | { talk: string; topic?: string } | { visit: string } | { solve: string }
  | { collect: string } | { decide: string /* flag do lựa chọn đặt */ } | { cond: Cond }
```
"Thất bại" theo quyết định cũ của Lamar (**không có thua**) = giai đoạn chưa qua, được thử lại; có thể rẽ nhánh `next` theo lựa chọn.

## 7. Puzzle
```ts
interface PuzzleBase<T extends string, C, A> {
  id: string; type: T; difficulty: 1 | 2 | 3 | 4 | 5; title: string; instructions: string
  content: C; answer: A; accept?: A[]   // đáp án thay thế được chấp nhận
  hints: string[]                       // lần lượt, mỗi gợi ý giảm điểm
  explanation: string                   // bắt buộc, kể cả khi đúng
  feedback?: { match: A | string; text: string }[]   // giải thích riêng cho lỗi thường gặp
  scoring: { base: number; hintCost: number; retryCost: number }
  skills: SkillId[]; links: EntityId[]; sources?: EntityId[]
}
```
Dạng (mỗi dạng một module `engine/puzzles/<type>.ts` có `check(content, answer) → { ok, partial?, wrongParts?, feedbackKey? }` và một component UI):

| type | content | answer | Ghi chú |
|---|---|---|---|
| `choice` | lựa chọn | chỉ số / tập chỉ số | dạng cũ (adapter) |
| `order` | mục | thứ tự id | niên đại, trình tự hình thức |
| `match` | hai cột | cặp id | người ↔ tác phẩm ↔ nơi |
| `classify` | mục + nhãn | id → nhãn | fact / interpretation / anecdote / hypothesis; sơ cấp / thứ cấp |
| `blank` | văn bản có ô | giá trị từng ô | thuật ngữ, âm tiết solmization |
| `neume` | neume vuông (khoá C/F, dòng, dạng punctum/clivis/podatus…) | cao độ / tên âm tiết | vẽ SVG 4 dòng, không dùng khuông hiện đại |
| `hexachord` | nốt + hexachord (naturale/durum/molle) | âm tiết / chỗ đổi (mutation) | Bàn tay Guido |
| `aural` | âm thanh (bản thu hoặc chuỗi `playSequence`) + câu hỏi | lựa chọn | phải phát được thật; ghi "âm minh hoạ" nếu tổng hợp |
| `interval`, `chord`, `cadence` | cao độ | tên / dựng | dùng `counterpoint/model.ts`, `tools/harmony.ts` |
| `counterpoint` | cantus firmus + luật | bè thêm | `counterpoint/rules.ts check` |
| `score` | MusicXML mẫu + vùng | nhãn | `analyze/engine`, trình bày là hỗ trợ, không phán quyết |
| `compose` | ràng buộc phong cách | chuỗi nốt | chấm bằng luật, không có "đáp án duy nhất" — `answer` là bộ luật |
| `investigation` | câu hỏi + chứng cứ cho sẵn/thu được | kết luận + chứng cứ chọn | xem §8 |

## 8. Evidence và Investigation
```ts
interface EvidenceDef {
  id: string; title: string; description: string
  kind: 'primary' | 'secondary' | 'artifact' | 'interpretation' | 'anecdote' | 'hypothesis' | 'fiction'
  source?: EntityId                // s:… / a:… ; bắt buộc trừ kind='fiction'
  author?: string; publication?: string; date?: string; page?: string; place?: string
  claims: string[]                 // claim id (phiên toà, điều tra) mà chứng cứ liên quan
  reliability: string              // vì sao tin được tới đâu
  verification: 'checked' | 'library' | 'unverified'   // checked = đã đối chiếu nguyên văn; library = theo bài thư viện
}
interface InvestigationDef {       // một quest kind='investigation' trỏ tới
  question: string
  conclusions: { id: string; text: string; supportedBy: string[]; contradictedBy?: string[]; verdict: 'best' | 'possible' | 'unsupported' }[]
  minEvidence: number              // phải chọn ít nhất n chứng cứ
}
```
Thẻ `Card` cũ → `EvidenceDef` `{ kind: 'secondary', source: a:<read>, verification: 'library' }` (adapter). Kết luận của người chơi được chấm theo **chứng cứ đã chọn** chứ không chỉ theo lựa chọn — `supportedBy` phải nằm trong chứng cứ người chơi đưa ra.

## 9. Item
```ts
interface ItemDef { id: string; name: string; kind: 'document' | 'manuscript' | 'instrument' | 'record' | 'work' | 'special'
  text: string; links: EntityId[]; use?: { at: string /* object/puzzle */; effects: Effect[] } }
```
Không có vật phẩm trang trí: mỗi item có `links` (Codex) hoặc `use`.

## 10. Player Profile (save v2)
```ts
interface SaveV2 {
  version: 2
  player: { name: string; portrait: string }
  world: { flags: string[]; chaptersOpen: string[]; chaptersDone: string[]; locations: string[] /* đã khám phá */ }
  quests: Record<string, { stage: string; status: 'active' | 'done'; started: number; done?: number }>
  puzzles: Record<string, { solved: boolean; tries: number; hints: number; best: number; at: number }>
  dialogue: { at?: { id: string; node: string }; history: string[] /* dlg:node đã đi, tối đa N */; topics: Record<string /*npc*/, string[]> }
  inventory: string[]; evidence: string[]; codex: EntityId[]
  xp: number; skills: Record<SkillId, number>
  mastery: Record<EntityId, { seen: number; right: number; applied: number; last: number }>
  achievements: string[]
  court: Record<string, Verdict>                     // = verdicts cũ
  legacy: { done: string[]; step: Record<string, number> }   // trạng thái cảnh tuyến tính (adapter đọc)
  seen: string[]; endless: Record<string, Endless>   // giữ nguyên
}
type SkillId = 'history' | 'theory' | 'aural' | 'analysis' | 'sources' | 'research'
```
**Mastery** bốn bậc suy ra từ số liệu, không lưu nhãn: *đã gặp* (`seen ≥ 1`) → *hiểu* (đúng ≥ 2 lần ở 2 dạng câu khác nhau) → *vận dụng* (`applied ≥ 1`: giải puzzle dạng thực hành/điều tra dùng khái niệm đó) → *thành thạo* (vận dụng ≥ 2, cách nhau ≥ 1 ngày, không dùng gợi ý). Một lần trả lời đúng không bao giờ vượt bậc "đã gặp → hiểu".

## 11. Knowledge Link và Codex
- Mọi `links`/`refs`/`domains`/`source` là `EntityId` của nền tảng tri thức → `/graph?id=` và `LinkPeek` dùng được ngay.
- **Codex** = tập `save.codex` (mã đã khám phá) hiển thị qua `useKnowledgeGraph().label` + `kindOf` (người, tác phẩm, khái niệm, nhạc cụ, thể loại, thời kỳ, trường phái), cộng chứng cứ đã thu. Không có bảng Codex riêng.
- Chuỗi truy vấn được: Quest → `links` (a:concept) → bài → nguồn (`s:`) → trang.

## 12. Validation (bắt buộc, chạy trong `npm test` + `check:links`)
- Id duy nhất toàn game; mọi tham chiếu (cond, effect, next, objective, present, evidence, puzzle) trỏ tới id có thật.
- Mọi `EntityId` `a:` là bài có thật (cách `check-links` đang làm); `s:` có trong thư mục.
- Nhân vật `historical` có `person` + `sources`; node `voice:'quote'` có `quote.source`.
- Puzzle: `answer` hợp lệ với `content` (chỉ số trong khoảng, thứ tự là hoán vị, ô có giá trị), có `explanation`, ít nhất 1 `hint`; `check(content, answer).ok === true` (đáp án tự giải được).
- Dialogue: đi được tới `end`, không ngõ cụt, không vòng lặp không lối ra (duyệt đồ thị).
- Quest: mọi giai đoạn tới được, giai đoạn cuối hoàn thành được với điều kiện có thể đạt (duyệt đồ thị điều kiện đơn giản: flag được đặt bởi effect nào đó).
- `ids.lock.json`: id đã phát hành không được biến mất.
