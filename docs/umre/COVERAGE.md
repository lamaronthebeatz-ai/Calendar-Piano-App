# Độ phủ kiểm chứng — sổ luật phức điệu (Wave C, GĐ8)

Bảng dưới do test `src/umre/rulebook/rulebook.test.ts` sinh và giữ khớp (sửa tay là test hỏng; cập nhật bằng
`UMRE_WRITE_COVERAGE=1 npx vitest run src/umre/rulebook`). Mỗi luật bắt buộc có một ví dụ vi phạm viết tay
(`src/umre/rulebook/cases.ts`); cột cuối là các bộ kiểm **độc lập** (không phải bộ kiểm của bộ giải) đã bắt được nó.

- `verify` — bộ kiểm riêng của mô-đun phức điệu (`features/counterpoint/verify.ts`).
- `umre-native` — bộ kiểm viết lại trên biểu diễn UMRE (`validation/native.ts`), chỉ phủ luật giai điệu và một số luật chiều dọc.
- `umre-rules` — luật bằng ngôn ngữ luật (`rules/counterpoint.ts`) qua bộ thông dịch chung.

Luật mềm (16) không có ca vi phạm: chúng chỉ dùng để xếp hạng lời giải hợp lệ, do bộ kiểm của bộ giải chấm.

<!-- cases -->
| Luật | Tên | Ca vi phạm viết tay | Bộ kiểm độc lập bắt được | Số |
|---|---|---|---|---|
| `leap` | Bước nhảy cho phép | G4 → F5 nhảy quãng 7 | umre-native, umre-rules, verify | 3 |
| `leap-response` | Đáp bước nhảy lớn | nhảy quãng 4 lên rồi đi tiếp lên | umre-native, umre-rules, verify | 3 |
| `leap3-response` | Đáp bước nhảy quãng 3 | G4 → B4 quãng 3 lên rồi lên tiếp | umre-native, umre-rules, verify | 3 |
| `repeat3` | Nhắc nốt ba lần | A4 ba lần liền | umre-native, umre-rules, verify | 3 |
| `no-gap` | Không chỗ trống | một phách trống giữa F4 và A4 | umre-native, umre-rules, verify | 3 |
| `end` | Đi đến hết bài | bè đối vị đi quá cuối bài | umre-native, umre-rules, verify | 3 |
| `seg-place` | Chỗ đặt nốt | nốt trắng bắt đầu ở phách 2, vắt qua phách 3 | umre-rules, verify | 2 |
| `tie` | Dấu nối | nốt đen nối qua vạch nhịp vào quãng thuận | umre-rules, verify | 2 |
| `rhythm-change` | Đổi trường độ | nốt trắng → nốt đen ở phách đầu ô | umre-rules, verify | 2 |
| `crossing` | Chéo bè | bè trên xuống dưới bè đề (B3 dưới D4) | umre-native, umre-rules, verify | 3 |
| `parallel` | Song song quãng hoàn toàn | G4/C4 → A4/D4 hai quãng 5 song song | umre-native, umre-rules, verify | 3 |
| `perfects3` | Nhiều quãng hoàn toàn liền | ba quãng thuận hoàn toàn liền | umre-native, umre-rules, verify | 3 |
| `dis-strong` | Nghịch phách mạnh | quãng 4 đúng ở phách mạnh, không chuẩn bị | umre-rules, verify | 2 |
| `suspension` | Nốt lưu | nốt lưu C5/B3 giải quyết đi lên | umre-rules, verify | 2 |
| `dis-weak` | Nghịch phách nhẹ | quãng 7 ở phách nhẹ, đến bằng bước nhảy | umre-rules, verify | 2 |
| `star` | Chỗ ✱ | chỗ ✱ (ô 2) là quãng thuận | umre-rules, verify | 2 |
| `star-extra` | Nghịch ngoài ✱ | nốt lưu C5/B3 ở ô 2, đề chỉ cho nghịch ở ✱ ô 3 | umre-rules, verify | 2 |
| `hidden-hard` | Quãng ẩn ở cặp ngoài | cặp ngoài cùng chiều vào quãng 8, bè trên nhảy | umre-rules, verify | 2 |
<!-- /cases -->
