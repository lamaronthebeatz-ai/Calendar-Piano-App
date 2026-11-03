"""Builds the multilingual glossary (src/features/terms/terms.json) from the library and Wikidata.

There is no Vietnamese standard we can use (TCVN 14301:2024 is sold, not published), so:
- the Vietnamese name is the one the library uses: the title of the concept's own article; the article's search
  keywords (aliases — related words, not necessarily synonyms) and the title of the Vietnamese Wikipedia article
  are listed with how often each occurs across the library's text (diacritics kept: "hoà âm" ≠ "hoạ âm");
- the English, Russian, German, French and Italian names are the Wikidata labels of the item behind the article's
  English Wikipedia page (its `wiki` field) — a public, checkable source; where an item has no label in a language,
  the title of that language's Wikipedia article stands in;
- the short definition is the article's own summary.
People are left out (Wikidata P31 = human), as are composers and pianists.

Run after a build (it reads dist/content): python3 scripts/terms/build.py
Wikidata answers are cached in scripts/terms/wikidata.json; delete an entry to fetch it again.
"""
import glob, json, re, sys, time, unicodedata, urllib.parse, urllib.request
from collections import Counter

ROOT = __file__.rsplit('/scripts/', 1)[0]
CACHE = f'{ROOT}/scripts/terms/wikidata.json'
OUT = f'{ROOT}/src/features/terms/terms.json'
LANGS = ['ru', 'de', 'fr', 'it', 'vi']
SKIP_CATS = {'composers', 'pianists'}
# Articles whose Wikipedia page is a neighbouring subject, not the same concept (reviewed by eye, 11/2026):
# "Khoá Sol" → clef, "Nhạc cụ Nam Á và Tây Á" → sitar, topic surveys; analyses of single works (phan-tich-*) too.
EXCLUDE = {
    "am-nhac-co-dai",
    "doi-song-am-nhac-va-thiet-che",
    "bao-ve-thinh-giac",
    "bo-go-phim",
    "bo-go-dan-nhac",
    "am-giai-doi-xung-jazz",
    "dieu-thuc-thu-giai-dieu",
    "cac-loai-dan-piano",
    "phong-cach-jazz",
    "phuong-phap-giao-duc-am-nhac",
    "cac-thoi-ky",
    "lick-va-trich-dan",
    "cau-tao-piano",
    "cong-chieng",
    "dan-ty-ba-tam-sen",
    "doi-am-5-loai",
    "lo-trinh-hinh-thuc",
    "hinh-thuc-concerto",
    "hoa-am-dieu-thuc",
    "hoc-piano-jazz",
    "hop-am-sau-bon",
    "hop-am-not-chung",
    "cau-ket",
    "khen",
    "khoa-do",
    "khoa-fa",
    "khoa-sol",
    "kiem-soat-toc-do",
    "ky-am",
    "ky-hieu-quang-tam",
    "ky-hieu-hop-am",
    "ky-hieu-nang-cao",
    "doc-not-nhanh",
    "luyen-am-giai",
    "ky-thuat-piano",
    "lich-su-am-nhac-viet-nam",
    "lich-su-piano",
    "lich-su-in-an-am-nhac",
    "lich-su-ngau-hung",
    "lich-su-phan-tich-am-nhac",
    "lich-su-thu-am",
    "lich-su-tiep-nhan-am-nhac",
    "luat-hoa-am-bon-be",
    "lo-trinh-luyen-tai-su-pham",
    "mo-rong-cau-nhac",
    "ngau-hung-doc-ngang",
    "ngon-bam",
    "nhac-cu-dong-a",
    "nhac-cu-nam-a-tay-a",
    "nhac-khi-hoc",
    "nhac-khi-the-gioi",
    "nhac-tre-rock-sai-gon",
    "nhac-trong-tu-tuong-nho-gia",
    "nhip-hon-hop",
    "phoi-hop-tay-chan-organ",
    "nhac-cu-go-nghi-le-viet-nam",
    "suc-khoe-nguoi-choi-dan",
    "tai-lieu-su-pham-cua-bach",
    "tam-dieu-thuc-va-giong-thanh-vinh",
    "the-bam-bac-thay-jazz",
    "the-loai",
    "thiet-ke-nghien-cuu-thuc-nghiem",
    "tim-giong-bang-may",
    "tinh-xac-thuc-bieu-dien",
    "triet-hoc-lang-man-ve-am-nhac",
    "trong-viet-nam",
}
UA = 'LamarMusicLibrary/1.0 (personal music-theory library; low volume)'


def norm(s):
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn').replace('đ', 'd').replace('Đ', 'D')
    return s.lower().strip()


def low(s):
    return unicodedata.normalize('NFC', s).lower()


def sparql(titles):
    values = ' '.join(json.dumps(t) + '@en' for t in titles)
    q = f"""SELECT ?t ?item ?human {' '.join('?' + l for l in LANGS)} {' '.join('?L' + l for l in ['en', *LANGS])} WHERE {{
      VALUES ?t {{ {values} }}
      ?en schema:name ?t ; schema:isPartOf <https://en.wikipedia.org/> ; schema:about ?item .
      BIND(EXISTS {{ ?item wdt:P31 wd:Q5 }} AS ?human)
      {' '.join(f'OPTIONAL {{ ?s{l} schema:about ?item ; schema:isPartOf <https://{l}.wikipedia.org/> ; schema:name ?{l} . }}' for l in LANGS)}
      {' '.join(f'OPTIONAL {{ ?item rdfs:label ?L{l} . FILTER(LANG(?L{l}) = "{l}") }}' for l in ['en', *LANGS])}
    }}"""
    url = 'https://query.wikidata.org/sparql?' + urllib.parse.urlencode({'query': q, 'format': 'json'})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60) as r:
                return json.load(r)['results']['bindings']
        except Exception as e:  # rate limit or timeout: wait and retry
            print('  retry', attempt + 1, e, file=sys.stderr)
            time.sleep(5 * (attempt + 1))
    raise SystemExit('Wikidata không trả lời')


def main():
    index = json.load(open(glob.glob(f'{ROOT}/dist/content/index.*.json')[0]))['meta']
    concepts = [a for a in index if a.get('wiki') and a['category'] not in SKIP_CATS and a['slug'] not in EXCLUDE and not a['slug'].startswith('phan-tich-')]
    try:
        cache = json.load(open(CACHE))
    except FileNotFoundError:
        cache = {}
    todo = sorted({a['wiki'].replace('_', ' ') for a in concepts} - set(cache))
    for i in range(0, len(todo), 60):
        batch = todo[i:i + 60]
        print(f'Wikidata {i + len(batch)}/{len(todo)}', file=sys.stderr)
        found = {}
        for b in sparql(batch):
            t = b['t']['value']
            row = found.setdefault(t, {'qid': b['item']['value'].rsplit('/', 1)[1], 'human': b['human']['value'] == 'true'})
            for l in LANGS:
                if l in b and l not in row:
                    row[l] = b[l]['value']
            for l in ['en', *LANGS]:
                if 'L' + l in b and 'label_' + l not in row:
                    row['label_' + l] = b['L' + l]['value']
        for t in batch:
            cache[t] = found.get(t, {})  # {} = no item: not asked again
        json.dump(cache, open(CACHE, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
        time.sleep(1)

    # how often each name occurs in the library's text (whole words, accents ignored)
    texts = [low(json.load(open(f))['body']) for f in glob.glob(f'{ROOT}/dist/content/*.json') if not re.search(r'/(index|sources)\.', f)]
    words = lambda t: re.sub(r'[\W_]+', ' ', t).strip()
    corpus = f' {words(" ".join(texts))} '
    count = lambda name: corpus.count(f' {words(low(name))} ') if len(norm(name)) > 2 else 0

    terms = []
    for a in concepts:
        wd = cache.get(a['wiki'].replace('_', ' '), {})
        if not wd or wd.get('human'):
            continue
        vi = a['title'].split(':')[0].strip()
        names = [n for n in [*a.get('aliases', []), wd.get('vi')] if n and norm(n) != norm(vi)]
        # aliases also hold English or other-language names; keep Vietnamese-looking ones as variants
        variants = list(dict.fromkeys(n for n in names if re.search(r'[ăâđêôơưàáảãạèéẻẽẹìíỉĩịòóỏõọùúủũụỳýỷỹỵ]', n.lower()) or n == wd.get('vi')))
        terms.append({
            'id': a['slug'], 'vi': vi, 'variants': variants, 'category': a['category'],
            # a label is the concept's name; an article title (fallback) can be a wider topic
            **{l: wd.get('label_' + l) or wd.get(l) or (a['wiki'].replace('_', ' ') if l == 'en' else None) for l in ['en', 'ru', 'de', 'fr', 'it'] if wd.get('label_' + l) or wd.get(l) or l == 'en'},
            **({'viwiki': wd['vi']} if 'vi' in wd else {}), 'qid': wd['qid'], 'def': a['summary'],
            'uses': {n: count(n) for n in [vi, *variants]},
        })
    terms.sort(key=lambda t: norm(t['vi']))
    json.dump(terms, open(OUT, 'w'), ensure_ascii=False, separators=(',', ':'))
    print(f'{len(terms)} thuật ngữ → {OUT}', file=sys.stderr)


main()
