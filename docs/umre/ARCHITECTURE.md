# Kiến trúc UMRE

```
src/umre/
  repr/                    GĐ1 — biểu diễn (không phụ thuộc React, DOM hay IndexedDB)
    rational.ts            số hữu tỉ chính xác cho thời gian
    pitch.ts               chữ + dấu hoá + quãng tám, MIDI, viết lại trùng âm
    interval.ts            quãng = {bậc chữ, nửa cung}, tên, đảo, dịch giọng theo chữ
    tonal.ts               điệu thức, âm giai, giọng, hoá biểu
    time.ts                số chỉ nhịp, chia ô nhịp, vị trí phách ký hiệu
    score.ts               tổng phổ: phần, khuông, bè, sự kiện, truy vấn
    harmony.ts             hợp âm, thế đảo, số bass, cách xếp, nhãn hoà âm có hệ
    structure.ts           cây hình thức (câu, đoạn, phần…) có hệ và nguồn gốc
    validate.ts            bộ kiểm cấu trúc, mã lỗi ổn định
    schema.ts              tên lược đồ, phiên bản, migrate, JSON
    index.ts               lối vào công khai (không gồm bộ chuyển đổi)
    adapters/              cầu nối hai chiều với mô-đun có sẵn
      counterpoint.ts      ⇄ features/counterpoint/model.ts
      compose.ts           ⇄ features/compose/model.ts; MusicXML và tệp MIDI qua exchange.ts
      midi.ts              ⇄ danh sách nốt MIDI (key, tick)
      harmonyCalc.ts       ⇄ features/tools/harmony.ts
```

## Hướng phụ thuộc
- `repr/*` không import gì ngoài `repr/*`. Mô-đun cũ không import UMRE (chưa có màn hình nào dùng UMRE).
- `adapters/*` import mô-đun cũ và **dùng lại hàm của chúng** (`keySig`, `pitch`, `layout`, `migrate`, `fromMusicXml`, `toMusicXml`, `toMidi`) thay vì viết lại, để hai bên không lệch nhau.
- Bộ chuyển đổi không nằm trong `index.ts` để lõi không kéo theo code giao diện vào gói.

## Luồng dữ liệu (hiện có)
```
counterpoint Seg[][] ─┐                       ┌─ MusicXML (qua compose)
compose Score ────────┼──▶ UMRE Score ──▶─────┼─ tệp MIDI (qua compose)
MusicXML ─▶ compose ──┘     │ validateScore   └─ MidiNote[]
MidiNote[] ───────────────▶ │ toJson/fromJson
```

## Chưa có
Sổ luật, bộ giải chung, bằng chứng, giao diện UMRE — xem `MASTER_SPECIFICATION.md`.
