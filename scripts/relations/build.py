"""Teacher, student and influence relations between people of the library, from Wikidata (CC0):
src/features/explore/relations.json = { person id: { teachers, students, influences } }, each entry
[id-or-null, name, qid] — id when the other person is in the library too, else null (name from Wikidata).
- teachers: P1066 (student of) on the person, plus P802 (student) on the teacher;
- students: the reverse;
- influences: P737 (influenced by).
Only relations Wikidata states; nothing inferred. Run after a build: python3 scripts/relations/build.py
"""
import glob, json, sys, time, urllib.parse, urllib.request

ROOT = __file__.rsplit('/scripts/', 1)[0]
OUT = f'{ROOT}/src/features/explore/relations.json'
UA = 'LamarMusicLibrary/1.0 (personal music-theory library; low volume)'
Q = """SELECT ?t ?p ?o ?oL ?oEn WHERE {
  VALUES ?t { %s }
  ?en schema:name ?t ; schema:isPartOf <https://en.wikipedia.org/> ; schema:about ?s .
  { ?s wdt:P1066 ?o . BIND("teacher" AS ?p) } UNION { ?o wdt:P802 ?s . BIND("teacher" AS ?p) }
  UNION { ?s wdt:P802 ?o . BIND("student" AS ?p) } UNION { ?o wdt:P1066 ?s . BIND("student" AS ?p) }
  UNION { ?s wdt:P737 ?o . BIND("influence" AS ?p) }
  OPTIONAL { ?o rdfs:label ?oL . FILTER(LANG(?oL) = "en") }
  OPTIONAL { ?oe schema:about ?o ; schema:isPartOf <https://en.wikipedia.org/> ; schema:name ?oEn . }
}"""


def sparql(titles):
    url = 'https://query.wikidata.org/sparql?' + urllib.parse.urlencode({'query': Q % ' '.join(json.dumps(t) + '@en' for t in titles), 'format': 'json'})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=90) as r:
                return json.load(r)['results']['bindings']
        except Exception as e:
            print('  retry', attempt + 1, e, file=sys.stderr)
            time.sleep(6 * (attempt + 1))
    raise SystemExit('Wikidata không trả lời')


def main():
    index = json.load(open(glob.glob(f'{ROOT}/dist/content/index.*.json')[0]))['meta']
    people = json.load(open(glob.glob(f'{ROOT}/dist/content/people.*.json')[0]))['people']
    wiki = {a['slug']: a['wiki'].replace('_', ' ') for a in index if a.get('wiki')}
    who = {wiki[p['id']]: p['id'] for p in people if p['id'] in wiki}
    out = {}
    titles = sorted(who)
    for i in range(0, len(titles), 25):
        print(f'Wikidata {min(i + 25, len(titles))}/{len(titles)}', file=sys.stderr)
        for b in sparql(titles[i:i + 25]):
            pid = who[b['t']['value']]
            qid = b['o']['value'].rsplit('/', 1)[1]
            other = who.get(b.get('oEn', {}).get('value'))
            name = b.get('oL', {}).get('value') or qid
            key = {'teacher': 'teachers', 'student': 'students', 'influence': 'influences'}[b['p']['value']]
            lst = out.setdefault(pid, {}).setdefault(key, [])
            if not any(x[2] == qid for x in lst):
                lst.append([other, name, qid])
        time.sleep(1.5)
    for rel in out.values():
        for lst in rel.values():
            lst.sort(key=lambda x: (x[0] is None, x[1]))
    json.dump(out, open(OUT, 'w'), ensure_ascii=False, separators=(',', ':'))
    n = sum(len(l) for r in out.values() for l in r.values())
    inside = sum(1 for r in out.values() for l in r.values() for x in l if x[0])
    print(f'{len(out)} người, {n} quan hệ ({inside} nối hai người cùng trong thư viện) → {OUT}', file=sys.stderr)


main()
