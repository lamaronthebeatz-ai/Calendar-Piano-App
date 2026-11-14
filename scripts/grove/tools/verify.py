"""Check one Vietnamese Grove file against its unit: valid JSON, every id present and no extra, fields filled,
no forbidden words, and every number of 2+ digits in the Vietnamese also occurs in the English excerpt."""
import json, re, sys

out, unit = sys.argv[1], sys.argv[2]
txt = open(unit, encoding='utf-8').read()
blocks = {}
for m in re.finditer(r'^=== (\S+) \|.*?\n(.*?)(?=^=== |\Z)', txt, re.S | re.M):
    blocks[m.group(1)] = m.group(2)
try:
    d = json.load(open(out, encoding='utf-8'))
except Exception as e:
    print('JSON lỗi:', e); sys.exit(1)
errs = []
missing = [k for k in blocks if k not in d]
extra = [k for k in d if k not in blocks]
if missing: errs.append(f'thiếu {len(missing)} id: {missing[:10]}')
if extra: errs.append(f'id lạ {len(extra)}: {extra[:10]}')
for k, v in d.items():
    if k not in blocks: continue
    if not isinstance(v, dict) or not v.get('title') or not v.get('vi'):
        errs.append(f'{k}: thiếu title/vi'); continue
    if v.get('kind') not in ('term', 'person', 'work', 'institution'):
        errs.append(f'{k}: kind sai {v.get("kind")}')
    if re.search(r'\b(mày|tao)\b', v['vi'], re.I):
        errs.append(f'{k}: có chữ mày/tao')
    en = re.sub(r'(?<=\d)[ ,.]+(?=\d)', '', blocks[k])  # OCR splits years: '1 767'
    en = re.sub(r'\b(1\d)(\d\d)\s*[-–]\s*(\d\d)\b', lambda m: f'{m.group(0)} {m.group(1)}{m.group(3)}', en)  # 1657-75 → also 1675
    en = en.translate(str.maketrans({'l': '1', 'I': '1', 'O': '0', 'o': '0', 'S': '5'})) + ' ' + blocks[k]
    en_digits = re.sub(r'\D', ' ', en)
    vi_nums = re.sub(r'tháng\s*(1[0-2]|0?[1-9])\b', '', v['vi'], flags=re.I)
    vi_nums = re.sub(r'\b\d{1,2}/(1[0-2]|0?[1-9])(?=/\d{4})', '', vi_nums)  # 22/12/1819: day and month come from 'Dec. 22'
    for num in set(re.findall(r'\d{2,}', vi_nums.replace('.', '').replace(',', ''))):
        if num not in en_digits.split() and num not in en:
            errs.append(f'{k}: số {num} không có trong nguyên văn')
if errs:
    print('\n'.join(errs[:60])); print(len(errs), 'lỗi'); sys.exit(1)
print('OK', len(d))
