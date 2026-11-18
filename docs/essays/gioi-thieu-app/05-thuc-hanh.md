# Chương 5. Công cụ thực hành

Chương này trình bày các công cụ để *làm* chứ không chỉ để đọc:
- giải và chấm bài phức điệu;
- phân tích tác phẩm tự động;
- soạn nhạc;
- các công cụ luyện kỹ năng: Solfège, nghe hợp âm, bảng tính nhạc lý.

Bộ giải phức điệu được trình bày kỹ nhất, vì đây là chỗ ứng dụng bám sát giáo trình đang dạy ở Việt Nam nhất. Đây cũng là chỗ người viết đã phải đọc lại từng câu của giáo trình.

## 5.1. Giải phức điệu nghiêm khắc

### 5.1.1. Vấn đề

Với môn phức điệu nghiêm khắc, người học nhận một *đề* (một bè cho sẵn) và phải viết các bè còn lại sao cho mọi cặp bè đều đúng luật. Các luật gồm quãng thuận – quãng nghịch, chuyển động, nốt lưu, giai điệu. Ở những dạng đối vị phức tạp, các *biến thể* của bài cũng phải đúng: hai bè đổi chỗ bằng một quãng (Iv), lệch nhau về thời gian (Ih), soi gương (đảo ảnh). Với người học, điều khó là biết bài mình sai ở đâu. Với người dạy, điều khó là biết một đề có lời giải hay không trước khi giao.

### 5.1.2. Luật lấy từ nguyên văn giáo trình

Bộ giải dựa trên giáo trình *Phức điệu nghiêm khắc* của Phạm Tú Hương (1991). Mỗi luật trong máy được đối chiếu với câu chữ và số trang của giáo trình, rồi xếp vào một trong ba loại:
- **Bắt buộc**: giáo trình dùng chữ "phải", "không được", "cấm". Vi phạm là lỗi.
- **Khuyến nghị**: luật chỉ thấy trong thí dụ, hoặc giáo trình ghi "nên", "chủ yếu", "tránh". Vi phạm chỉ được ghi chú, không tính là lỗi.
- **Cần xác minh**: câu chữ mơ hồ hoặc thí dụ mâu thuẫn với lời. Máy không tự biến những chỗ này thành luật mà liệt kê để hỏi ý kiến thầy cô.

Bảng luật hiện có 30 dòng (đầy đủ ở Phụ lục 3). Bảng 5.1 trích vài dòng tiêu biểu.

| Luật | Căn cứ trong giáo trình | Loại |
|---|---|---|
| Không dùng nửa cung cromatic trong giai điệu | tr. 6, "không được sử dụng" | Bắt buộc |
| Âm nguyên và âm biến "phải ở xa nhau" | tr. 6, thí dụ 9b ghi "Không nên"; khoảng cách không được định lượng | Khuyến nghị |
| Nốt chuẩn bị không được là nốt đen | tr. 10 | Bắt buộc (thầy cô có thể bật tuỳ chọn cho phép) |
| Nốt lưu: quãng nghịch đứng giữa hai quãng thuận | tr. 10 | Bắt buộc |
| Quãng 4 ở cặp trên coi như thuận, ở cặp dưới và cặp ngoài vẫn là nghịch (ba bè) | tr. 37 – 40 | Bắt buộc |
| Nhiều quãng thuận hoàn toàn liền nhau | "không được phép"; nhưng chữ "nhiều" không định lượng | Bắt buộc từ ba quãng, cần xác minh với hai |

Cách làm này có một hệ quả học thuật đáng chú ý: khi buộc từng câu của giáo trình phải thành một luật máy kiểm được, những chỗ giáo trình chưa rõ hiện ra. Ví dụ, chữ "nhiều" không cho biết là bao nhiêu; lời và thí dụ đôi khi lệch nhau. Danh sách "cần xác minh" vì vậy là một tư liệu để thầy và trò thống nhất cách chấm.

Một trường hợp cụ thể là quy định về nốt chuẩn bị. Đọc kỹ trang 10 của giáo trình, điều kiện thực sự chỉ là *thuận – nghịch – thuận*: nốt chuẩn bị vào bằng quãng thuận, và quãng ngay trước nốt lưu là quãng thuận. Nốt chuẩn bị không nhất thiết phải vào sát ngay trước. Trong lúc nó ngân, bè kia có thể đi qua nốt lướt hay nốt thêu nghịch ở phách nhẹ. Phiên bản đầu của bộ giải đòi chặt hơn, và đã được sửa lại cho đúng nguyên văn.

Một trường hợp khác là *móc xích nốt nghịch* trong ba bè (tr. 38): nốt giải quyết của một quãng nghịch đồng thời tạo quãng nghịch mới với bè khác. Khi kiểm, người viết thấy luật từng cặp bè vốn đã cho phép điều này, miễn quãng nghịch mới được chuẩn bị bằng quãng thuận ở cặp của nó. Vì vậy không cần nới luật nào; một bài kiểm thử ghi lại thí dụ cụ thể.

### 5.1.3. Ba trạng thái: có lời giải, vô nghiệm, chưa kết luận

Bộ giải tìm lời giải bằng cách thử có hệ thống mọi cách viết trong một *miền tìm kiếm* được ghi rõ trên màn hình: dùng nốt nào, trong âm vực nào, trường độ nào. Kết quả luôn là một trong ba trạng thái:
- **Có lời giải**: máy đưa ra một vài lời giải, kèm ghi chú về các luật khuyến nghị.
- **Vô nghiệm (đã chứng minh)**: máy đã duyệt hết miền tìm kiếm mà không có cách nào đúng mọi luật bắt buộc. Máy nói rõ trong phạm vi nào, và xa nhất viết được tới ô nào.
- **Chưa kết luận**: máy hết thời gian trước khi duyệt hết. Máy *không bao giờ* báo "vô nghiệm" chỉ vì hết giờ. Người dùng có thể bấm "Tìm tiếp".

Mọi lời giải còn được một *bộ kiểm độc lập*, viết riêng theo cách khác, kiểm lại. Nếu hai bộ kiểm không đồng ý, lời giải bị loại và máy báo lỗi để sửa, thay vì đưa ra một lời giải có thể sai. Hai bộ kiểm được đối chiếu tự động trên hàng nghìn bài biến đổi trong các kiểm thử: đổi từng nốt của một lời giải đúng, rồi xem hai bên có cùng kết luận không. Riêng phần phức điệu có 55 kiểm thử đơn vị.

### 5.1.4. Các dạng bài

Công cụ có 15 dạng bài, theo đúng thứ tự của giáo trình (Bảng 5.2).

| Nhóm | Dạng bài | Trang giáo trình |
|---|---|---|
| Hai bè | Chuyển động chiều dọc (Iv), chiều ngang (Ih), ngang – dọc (Ih + Iv), đảo ảnh | 13 – 36 |
| Ba – bốn bè | Đối vị ba bè, bốn bè; tam trùng, tứ trùng đối vị quãng 8 (mọi cách đổi chỗ các bè); biến thể tự chọn Iv cho từng cặp | 37 – 45 |
| Mô phỏng – canon | Mô phỏng đơn giản (bảy kiểu biến đổi: cùng hướng, đảo ảnh, phóng to, thu nhỏ, ngược hướng…), canon vô tận, canon mô tiến, canon ba bè | 46 – 63 |
| Hình thức | Thể hai đoạn tương phản, thể hai đoạn mô phỏng, thể ba đoạn | 64 – 68 |

Một số điểm đáng chú ý:
- Ở dạng Iv, người dùng chọn chỉ số Iv rồi bấm "Xét mọi BT". Máy tính riêng từng cách chia Iv giữa hai bè xem cách nào có lời giải.
- Ở dạng Ih, nguyên thể và biến thể được vẽ chung một tổng phổ ba khuông (I – I′ – II hoặc I – II – II′), thẳng hàng từng ô nhịp như thí dụ trong giáo trình (Hình 5.1). Ba nút nghe cho phép nghe riêng nguyên thể, riêng biến thể, hoặc cả ba bè.
- Ở các dạng canon, máy viết tiếp bè P sao cho mọi bè chép lại từ nó đều đúng luật. Máy cũng viết được bè tự do thứ ba và đoạn kết.
- Ở phần hình thức, giáo trình chỉ mô tả cấu trúc chứ không đặt luật riêng. Máy dựng từng đoạn bằng các bộ giải trên, tự viết *câu nối* giữa các đoạn, rồi kiểm toàn bài bằng luật ba – bốn bè.

::img cp-ih.png | Hình 5.1. Dạng chuyển động chiều ngang (Ih): nguyên thể và biến thể chung một tổng phổ I – I′ – II, số quãng của nguyên thể dưới khuông II, của biến thể dưới khuông I′

::img cp-3.png | Hình 5.2. Đối vị ba bè: đề ở bè dưới cùng, máy viết hai bè trên

### 5.1.5. Chấm bài và luyện tập

Ngoài giải, công cụ còn:
- **chấm bài người học tự viết**, kể cả bài ba – bốn bè và canon: đánh dấu đỏ đúng chỗ phạm luật, kèm tên luật và đường dẫn tới bài lý thuyết; báo bè nào chưa viết xong;
- **sinh đề có lời giải** cho người học luyện từng nốt, với gợi ý;
- khi một đề bế tắc, **đề xuất cách gỡ** giữ nguyên đề nốt nào cũng như nốt nấy.

Chẳng hạn, với một đề Iv = −7 có năm chỗ đánh dấu ✱ (bắt buộc nốt nghịch), máy chỉ ra rằng ở ô 5 không thể đặt một nốt nghịch đúng luật theo giáo trình. Khi thầy bật tuỳ chọn cho phép nốt đen làm nốt chuẩn bị, máy lại tìm được lời giải.

## 5.2. Phân tích tác phẩm

### 5.2.1. Chức năng

Trang Phân tích tác phẩm (Hình 5.3) nhận một bản nhạc dạng MusicXML, MXL, MIDI, hoặc bản viết trong trình soạn nhạc của ứng dụng; trang cũng có sẵn một kho bản nhạc mẫu. Máy tự nhận diện:
- khoá, nhịp, hoá biểu, dấu hoá bất thường;
- hợp âm và các bè;
- giọng và chỗ chuyển giọng;
- nốt ngoài hợp âm;
- câu kết, cấu trúc câu và các đoạn tương đồng.

Kết quả hiện theo ba *lăng kính*: Cổ điển, Jazz và Thế kỷ XX. Ở lăng kính Cổ điển, nhãn chức năng được ghi theo hệ ký hiệu Nga – Xô viết (T, S, D, D7, K64…), đúng hệ thống mà người học ở Việt Nam được dạy. Nhãn hiện thẳng trên bản nhạc, và một văn bản phân tích bên dưới chạy đồng bộ với bản nhạc. Mỗi thuật ngữ trong văn bản dẫn về bài thư viện tương ứng. Kết quả xuất được thành bảng từng ô nhịp.

::img analyze.png | Hình 5.3. Phân tích tác phẩm: nhãn hợp âm và chức năng hiện trên bản nhạc (hợp xướng Bach)

### 5.2.2. Cách máy phân tích

Bộ phân tích dùng hai ý tưởng đã nêu ở mục 1.1.3:
- **Hợp âm**: bản nhạc được cắt thành các lát nhỏ theo thời gian rồi chia đoạn bằng quy hoạch động, mỗi đoạn khớp với một mẫu hợp âm, theo hướng của Pardo và Birmingham (2002). Trọng số mỗi nốt tính theo độ dài, vị trí phách, việc nốt có được đánh lại hay không, việc nốt nằm ở bè trầm, và việc nốt có dáng của một nốt trang trí.
- **Giọng**: máy chọn chuỗi giọng hợp lý nhất cho cả bài trên 24 giọng trưởng – thứ. Nó kết hợp ba yếu tố: hợp âm có thuộc giọng không, quan hệ át → chủ, và mức tương quan với hồ sơ giọng của Krumhansl và Kessler (1982). Đổi giọng bị tính "giá", đổi sang giọng gần thì rẻ hơn.

Toàn bộ chạy ngay trong trình duyệt, không gửi bản nhạc đi đâu.

### 5.2.3. Đo độ đúng

Độ đúng được đo trên **19 hợp xướng Bach** có phân tích của chuyên gia, lấy từ kho dữ liệu đi kèm bộ công cụ music21 (Cuthbert và Ariza 2010). Kết quả gần nhất được ghi ở Bảng 5.3.

| Tiêu chí | Kết quả |
|---|---|
| Gốc hợp âm đúng | 83,9% |
| Đủ nốt hợp âm đúng | 78% |
| Gốc và thể đảo đúng | 78% |
| Giọng đúng | 77,5% |
| Át phụ nhận ra được | 36/90 |
| Dấu lưu có câu kết được nhận ra | 98/127 |

Cần đọc các con số này đúng mức. Phần lệch về giọng chủ yếu nằm ở những chỗ chuyển giọng ngắn hay ly điệu, nơi chính các nhà phân tích cũng có thể ghi khác nhau. Át phụ là điểm yếu rõ nhất. Người viết đã thử tinh chỉnh các tham số và thấy mô hình luật đã gần tới giới hạn của nó; muốn cao hơn cần mô hình học từ một bộ dữ liệu lớn hơn. Vì vậy công cụ được giới thiệu như một *trợ lý* để đối chiếu, không phải đáp án.

Người viết cũng đã thử nhận dạng bản nhạc từ ảnh (OMR) ngay trong trình duyệt. Kết luận là chất lượng chưa đủ để dùng, nên chức năng này chưa được đưa vào.

## 5.3. Soạn nhạc

Trình soạn nhạc (Hình 5.4) cho phép viết bản nhạc trên "giấy trắng khuông đen" ngay trên điện thoại hoặc máy tính bảng:
- **Viết bằng cử chỉ**: chạm, nhấn giữ rồi nhả. Viết là ghi đè như trong Sibelius, không đẩy phần sau.
- **Bảng công cụ nổi**: kéo đi được, thu gọn được.
- **Bản nhạc nhiều khuông**: hợp xướng SATB, lời ca, tên hợp âm, liên kết, kỹ thuật diễn tấu, sắc thái, dấu nhắc lại, chữ.
- **Nghe lại**: tiếng piano, và cả tiếng đàn dây, kèn gỗ, kèn đồng từ bộ mẫu âm thanh VSCO 2 CE (tự do sử dụng, giấy phép CC0).
- **Thu nốt**: từ phím đàn ảo, từ micro hoặc từ đường line-in; máy nhận cao độ và ghi thành nốt.
- **Xuất nhập** tệp MusicXML để trao đổi với MuseScore, Sibelius, Finale. Có phím tắt kiểu MuseScore cho máy tính bảng có bàn phím.

Bản nhạc được khắc bằng Verovio (Pugin, Zitellini và Roland 2014) từ dữ liệu MEI (Hankinson, Roland và Fujinaga 2011). Mỗi ký hiệu trong hình SVG mang mã riêng, nhờ đó máy biết chính xác người dùng chạm vào nốt nào.

::img compose.png | Hình 5.4. Trình soạn nhạc: giấy trắng, bảng công cụ nổi và phím đàn

## 5.4. Luyện kỹ năng: Solfège, nghe hợp âm, bảng tính

**Solfège** (Hình 5.5) có ba phần:
- *Đoán nốt*: nốt ngẫu nhiên trên khuông Sol hoặc Fa, ở ba chế độ nghe và nhìn, chỉ nghe, chỉ nhìn. Người dùng trả lời trên 12 phím xếp như một quãng 8 bàn phím.
- *Đoán quãng*: từ quãng 2 thứ tới quãng 8 đúng, giai điệu đi lên, đi xuống hoặc hoà âm. Hai nốt luôn được đánh vần đúng theo số quãng.
- *Xướng âm*: 540 bài đọc cromatic nhảy quãng không theo giọng, ở mức bài xướng âm bậc đại học, chia ba cấp độ. Gồm 240 nhóm năm nốt và 300 bài xướng âm ba dòng. Các bài được sinh theo luật, ví dụ không lặp một nốt trong sáu nốt gần nhất, hai bước nhảy cùng chiều không vượt quãng 8.

::img solfege.png | Hình 5.5. Solfège: đoán nốt, đoán quãng, xướng âm

**Nghe hợp âm** dùng micro để nghe người dùng chơi đàn. Máy tách phổ âm thanh thành các nửa cung, lọc bỏ hoạ âm, rồi so với mẫu của 14 loại hợp âm, và thêm 9 loại hợp âm jazz. Máy chỉ gọi tên khi nghe đủ mọi âm cần có. Tên hợp âm được ghi bằng chữ theo giọng, kèm ký hiệu chức năng Nga – Xô viết. Máy còn gợi ý những *hướng đi* quen thuộc từ hợp âm vừa nghe, theo ba phong cách Cổ điển, Jazz và Thế kỷ XX. Mỗi hướng đi dẫn về bài thư viện là nguồn của nó. Khi người chơi đi đúng một hướng, thẻ hướng đó sáng lên. Đây là cách luyện tai gắn trực tiếp với cây đàn của người học.

::img chordear.png | Hình 5.6. Nghe hợp âm qua micro, gọi tên theo ký hiệu chức năng và gợi ý hướng đi

**Bảng tính** là bộ tra cứu nhạc lý: dựng hợp âm, âm giai, quãng, hợp âm thay thế. Tên nốt luôn được ghi đúng theo giọng, ví dụ E7 chứ không phải F♭7. Bảng tính cũng có vòng quãng 5 tương tác.

## 5.5. Tiểu kết chương 5

Các công cụ thực hành biến kiến thức trong thư viện thành bài tập có phản hồi tức thì.
- Bộ giải phức điệu bám nguyên văn giáo trình Phạm Tú Hương, phân biệt luật bắt buộc, khuyến nghị và chỗ cần xác minh, và không bao giờ báo vô nghiệm khi chưa chứng minh được. Nó có 15 dạng bài, từ hai bè tới hình thức.
- Bộ phân tích tác phẩm gắn nhãn theo hệ ký hiệu Nga – Xô viết, với độ đúng đo được trên 19 hợp xướng Bach.
- Trình soạn nhạc, Solfège, nghe hợp âm và bảng tính bổ sung các kỹ năng viết, đọc và nghe.

Ở mọi công cụ, kết quả đều dẫn ngược về bài lý thuyết làm căn cứ.
