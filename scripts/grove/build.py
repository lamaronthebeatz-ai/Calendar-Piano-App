"""Build the Grove part of "Từ điển âm nhạc Lamar" (/terms).

Input: the entries parsed by parse.py from Grove's Dictionary of Music and Musicians, 2nd ed., vol. III (M–P), New York:
Macmillan, 1907 (public domain; Internet Archive cu31924021782853), and the Vietnamese entries written for the app in
scripts/grove/vi/*.json ({id: {title, kind?, vi}}).
Output: public/grove/iii-<letter>.json (each entry with its Vietnamese text and the original English, fetched when a
letter is opened) and src/features/terms/grove-index.json (headwords, pages, Vietnamese titles and first sentences).

Usage: python3 scripts/grove/build.py scripts/grove/entries-iii.json.gz
"""
import gzip, json, re, sys, unicodedata, glob, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
entries = json.load(gzip.open(sys.argv[1]) if sys.argv[1].endswith('.gz') else open(sys.argv[1]))

vi = {}
for f in sorted(glob.glob(f'{ROOT}/scripts/grove/vi/*.json')):
    vi.update(json.load(open(f)))

def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')

def kind(e):
    t = e['text'][:260]
    if re.search(r'\b(born|bom|bora|died|baptized|flourished|fl\.)\b', t) or re.search(r'\(\d{4}', t): return 'person'
    if re.search(r'\b(opera|oratorio|cantata|operetta|ballet|tragedie|comic opera|libretto)\b', t[:120], re.I): return 'work'
    if re.search(r'\b(society|festival|academy|conservatoire|conservatorium|school|college|club|union|institution)\b', t[:100], re.I): return 'institution'
    return 'term'

# the letter of each entry: the majority of the headwords around it (OCR headings such as 'OBCHESTBAL OVBETUBES'
# inside an M article must not switch the volume to O)
firsts = [e['head'][0].lower() for e in entries]
def letter_at(i):
    win = [c for c in firsts[max(0, i - 6):i + 7] if c in 'mnop']
    return max(set(win), key=win.count) if win else 'm'
letters, cur = [], 'm'
for i in range(len(entries)):
    l = letter_at(i)
    if l > cur: cur = l
    letters.append(cur)

seen = set()
index, shards = [], {}
for e, shard in zip(entries, letters):
    base = f"{slug(e['head'])}-{e['page']}"
    eid, n = base, 2
    while eid in seen:
        eid, n = f'{base}-{n}', n + 1
    seen.add(eid)
    v = vi.get(eid, {})
    k = v.get('kind') or kind(e)
    item = {'id': eid, 'head': e['head'], 'page': e['page'], 'leaf': e['leaf'], 'kind': k, 'words': e['words']}
    if v:
        item['title'] = v['title']
        item['vi'] = v['vi']
    shards.setdefault(shard, []).append({**item, 'en': e['text']})
    gist = re.split(r'(?<=[.!?])\s', v['vi'].replace('*', '').strip(), maxsplit=1)[0][:220] if v else ''
    index.append({'id': eid, 'h': e['head'], 'p': e['page'], 's': shard, 'k': k, **({'t': v['title'], 'g': gist} if v else {})})

os.makedirs(f'{ROOT}/public/grove', exist_ok=True)
for s, items in shards.items():
    json.dump(items, open(f'{ROOT}/public/grove/iii-{s}.json', 'w'), ensure_ascii=False, separators=(',', ':'))
json.dump(index, open(f'{ROOT}/src/features/terms/grove-index.json', 'w'), ensure_ascii=False, separators=(',', ':'))
missing = [k for k in vi if k not in seen]
print(len(index), 'entries,', sum(1 for i in index if 't' in i), 'with Vietnamese;', {s: len(v) for s, v in shards.items()}, '; unknown vi ids:', missing[:5])
