"""Works of the library's composers, from Wikidata (CC0): src/features/explore/works.json.

For every person in the knowledge graph whose page names an English Wikipedia article (`wiki`), takes the works
whose composer (P86) is that person and that have an English Wikipedia article themselves — the notable ones —
with: type (P31) and genre (P136), key (P826), year of composition (P571) or publication (P577), catalogue number
(P528, with its catalogue P972), English and Vietnamese labels, Wikidata id. At most CAP works per composer, the
most widely covered first (number of Wikipedia sitelinks). A work whose English Wikipedia article is also the
`wiki` of a library article is marked with that article (an analysis or a page about the work).

Run after a build (reads dist/content): python3 scripts/works/build.py
Answers are cached per composer in scripts/works/wikidata.json (delete an entry to ask again).
"""
import glob, json, re, sys, time, urllib.parse, urllib.request

ROOT = __file__.rsplit('/scripts/', 1)[0]
CACHE = f'{ROOT}/scripts/works/wikidata.json'
OUT = f'{ROOT}/src/features/explore/works.json'
CAP = 60  # per composer, before films are dropped
UA = 'LamarMusicLibrary/1.0 (personal music-theory library; low volume)'

QUERY = """SELECT ?t ?w ?en ?vi ?links ?typeL ?genreL ?keyL ?inc ?pub ?cat ?catL WHERE {
  VALUES ?t { %s }
  ?p schema:name ?t ; schema:isPartOf <https://en.wikipedia.org/> ; schema:about ?c .
  ?w wdt:P86 ?c ; wikibase:sitelinks ?links .
  ?wen schema:about ?w ; schema:isPartOf <https://en.wikipedia.org/> ; schema:name ?en .
  OPTIONAL { ?w rdfs:label ?vi . FILTER(LANG(?vi) = "vi") }
  OPTIONAL { ?w wdt:P31 ?ty . ?ty rdfs:label ?typeL . FILTER(LANG(?typeL) = "en") }
  OPTIONAL { ?w wdt:P136 ?g . ?g rdfs:label ?genreL . FILTER(LANG(?genreL) = "en") }
  OPTIONAL { ?w wdt:P826 ?k . ?k rdfs:label ?keyL . FILTER(LANG(?keyL) = "en") }
  OPTIONAL { ?w wdt:P571 ?inc }
  OPTIONAL { ?w wdt:P577 ?pub }
  OPTIONAL { ?w p:P528 ?cs . ?cs ps:P528 ?cat . OPTIONAL { ?cs pq:P972 ?cn . ?cn rdfs:label ?catL . FILTER(LANG(?catL) = "en") } }
}"""
# types that say nothing about the music
NOISE = {'musical work/composition', 'musical work', 'composition', 'work', 'creative work', 'version, edition or translation', 'literary work', 'written work'}


# Genre read from the English title or the Wikidata types (Wikidata gives few genres for instrumental music).
# Order matters: the first match wins ("Piano Concerto" is a concerto, "Sonata for Violin" a sonata).
KINDS = [
    ('opera', r'\bopera|opéra|singspiel|dramma|tragédie en musique|zarzuela|operetta'), ('ballet', r'\bballet|choreographic'),
    ('oratorio', r'\boratorio|passion\b|st\.? (matthew|john) passion'), ('mass', r'\bmass\b|\bmissa\b|requiem'), ('cantata', r'\bcantata|\bBWV \d+\b.*(?:kantate)'),
    ('symphony', r'\bsymphon(y|ie)\b|\bsinfonia\b'), ('concerto', r'\bconcert(o|i)\b'), ('quartet', r'\bquartet|quintet|trio\b|sextet|octet'),
    ('sonata', r'\bsonat(a|ina)'), ('fugue', r'\bfugue|\bfuga\b|prelude and fugue|art of fugue|well-tempered'), ('variations', r'\bvariation'),
    ('suite', r'\bsuite|partita'), ('etude', r'\b(é|e)tude'), ('nocturne', r'\bnocturne'), ('prelude', r'\bprelude|prélude'),
    ('dance', r'\bwaltz|valse|mazurka|polonaise|minuet|menuet|tango|rag\b|ragtime|march\b'), ('character', r'\bballade|scherzo|impromptu|rhapsod|fantasi|bagatelle|intermezzo|novelette|moment musical|song without words'),
    ('symphonic poem', r'symphonic poem|tone poem|overture'), ('song', r'\blied|\bsongs?\b|song cycle|chanson|mélodie|winterreise|dichterliebe'),
    ('choral', r'\bmotet|anthem|magnificat|stabat mater|te deum|psalm|hymn|choral'),
]


def kind(en, types):
    text = ' '.join([en, *types])
    return next((k for k, rx in KINDS if re.search(rx, text, re.I)), None)


def sparql(titles):
    q = QUERY % ' '.join(json.dumps(t) + '@en' for t in titles)
    url = 'https://query.wikidata.org/sparql?' + urllib.parse.urlencode({'query': q, 'format': 'json'})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=90) as r:
                return json.load(r)['results']['bindings']
        except Exception as e:
            print('  retry', attempt + 1, e, file=sys.stderr)
            time.sleep(6 * (attempt + 1))
    raise SystemExit('Wikidata không trả lời')


def year(v):
    m = re.match(r'(-?\d{1,4})-', v or '')
    return int(m.group(1)) if m else None


def main():
    index = json.load(open(glob.glob(f'{ROOT}/dist/content/index.*.json')[0]))['meta']
    people = json.load(open(glob.glob(f'{ROOT}/dist/content/people.*.json')[0]))['people']
    wiki = {a['slug']: a['wiki'].replace('_', ' ') for a in index if a.get('wiki')}
    about = {a['wiki'].replace('_', ' '): a['slug'] for a in index if a.get('wiki') and not a.get('person')}
    who = {wiki[p['id']]: p['id'] for p in people if p['id'] in wiki}
    try:
        cache = json.load(open(CACHE))
    except FileNotFoundError:
        cache = {}
    todo = sorted(set(who) - set(cache))
    for i in range(0, len(todo), 12):
        batch = todo[i:i + 12]
        print(f'Wikidata {i + len(batch)}/{len(todo)}', file=sys.stderr)
        works = {}
        for b in sparql(batch):
            w = works.setdefault(b['w']['value'], {'t': b['t']['value'], 'qid': b['w']['value'].rsplit('/', 1)[1], 'en': b['en']['value'], 'links': int(b['links']['value']), 'types': [], 'keys': [], 'cats': []})
            if 'vi' in b: w['vi'] = b['vi']['value']
            for k, f in (('typeL', 'types'), ('genreL', 'types'), ('keyL', 'keys')):
                if k in b and b[k]['value'] not in w[f] and b[k]['value'] not in NOISE: w[f].append(b[k]['value'])
            if 'cat' in b:
                c = (b.get('catL', {}).get('value', '') + ' ' + b['cat']['value']).strip()
                if c not in w['cats']: w['cats'].append(c)
            for k in ('inc', 'pub'):
                y = year(b.get(k, {}).get('value'))
                if y and y not in w.setdefault(k, []): w[k].append(y)
        by = {t: [] for t in batch}
        for w in works.values():
            by.setdefault(w.pop('t'), []).append(w)
        for t in batch:
            cache[t] = sorted(by[t], key=lambda w: -w['links'])[:CAP]
        json.dump(cache, open(CACHE, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
        time.sleep(1.5)

    out = []
    for t, pid in who.items():
        for w in cache.get(t, []):
            # films and TV credit a composer too (even for borrowed music): this is a list of musical works
            if any(re.search(r'\bfilm\b|television|TV series|video game|episode', x, re.I) for x in w['types']):
                continue
            row = {'id': w['qid'], 'by': pid, 'en': w['en']}
            if w.get('vi') and w['vi'] != w['en']: row['vi'] = w['vi']
            if w['types']: row['types'] = w['types'][:4]
            k = kind(w['en'], w['types'])
            if k: row['kind'] = k
            if re.search(r'\bpiano|pianoforte|keyboard|clavier|harpsichord', w['en'], re.I): row['piano'] = True
            if w['keys']: row['key'] = w['keys'][0]
            # Wikidata can hold several dates (or a wrong one): keep the span, the page says where it comes from
            ys = w.get('inc') or w.get('pub')
            if ys:
                row['year'] = min(ys)
                if max(ys) != min(ys): row['to'] = max(ys)
                if not w.get('inc'): row['pub'] = True
            if w['cats']: row['cat'] = w['cats'][:2]
            if w['en'] in about: row['article'] = about[w['en']]
            out.append(row)
    json.dump(out, open(OUT, 'w'), ensure_ascii=False, separators=(',', ':'))
    print(f'{len(out)} tác phẩm, {sum(1 for r in out if "article" in r)} có bài trong thư viện → {OUT}', file=sys.stderr)


main()
