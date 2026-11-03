"""Checks every link of the bibliography and finds an archived copy for the dead ones.

Reads the built bibliography (dist/content/sources.*.json), asks each URL (HEAD, then GET when HEAD is refused),
and for links that fail asks the Wayback Machine availability API for the closest snapshot.
Writes src/features/sources/linkstatus.json = { checked: date, dead: { url: { code, archive? } } } — only the
links that failed, so the file stays small. Run after a build: python3 scripts/sources/linkcheck.py
Only a server that answers 404 or 410 counts as dead. Refusals of robots (401/403/429) are `blocked`; network
errors, timeouts and 5xx (often this machine's network or a passing outage, not a dead page) are `unknown` —
counted, not marked on the articles.
"""
import concurrent.futures as cf, datetime, glob, json, sys, time, urllib.error, urllib.parse, urllib.request

ROOT = __file__.rsplit('/scripts/', 1)[0]
OUT = f'{ROOT}/src/features/sources/linkstatus.json'
UA = 'Mozilla/5.0 (compatible; LamarMusicLibrary-linkcheck/1.0; personal music library)'


def encoded(url):
    # Cyrillic or accented paths, spaces: percent-encode what urllib refuses, keep what is already encoded
    return urllib.parse.quote(url, safe=":/?&=%#+,;@~!$'()*[]")


def ask(url, method):
    req = urllib.request.Request(encoded(url), method=method, headers={'User-Agent': UA, 'Accept': '*/*'})
    with urllib.request.urlopen(req, timeout=25) as r:
        return r.status


def status(url):
    for method in ('HEAD', 'GET'):
        try:
            return ask(url, method)
        except urllib.error.HTTPError as e:
            if method == 'HEAD' and e.code in (400, 403, 404, 405, 406, 429, 500, 501, 503):
                continue
            return e.code
        except Exception as e:  # DNS, timeout, TLS
            if method == 'HEAD':
                continue
            return f'error: {type(e).__name__}'
    return 'error'


def archived(url):
    q = 'https://archive.org/wayback/available?' + urllib.parse.urlencode({'url': url})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(q, headers={'User-Agent': UA}), timeout=30) as r:
                snap = json.load(r).get('archived_snapshots', {}).get('closest')
            return snap['url'].replace('http://', 'https://', 1) if snap and snap.get('available') else None
        except urllib.error.HTTPError as e:
            if e.code != 429:
                return None
            time.sleep(10 * (attempt + 1))  # the API limits bursts: wait and ask again
        except Exception:
            return None
    return None


def main():
    bib = json.load(open(glob.glob(f'{ROOT}/dist/content/sources.*.json')[0]))
    urls = sorted({u for s in bib['sources'] for u in [*s.get('urls', []), s.get('url')] if u and u.startswith('http')})
    print(f'{len(urls)} liên kết', file=sys.stderr)
    dead, blocked, unknown = {}, 0, 0
    with cf.ThreadPoolExecutor(16) as ex:
        for i, (url, code) in enumerate(zip(urls, ex.map(status, urls))):
            if i % 400 == 0: print(f'  {i}/{len(urls)}', file=sys.stderr)
            if isinstance(code, int) and code < 400:
                continue
            if code in (401, 403, 429):
                blocked += 1
            elif code in (404, 410):
                dead[url] = {'code': code}
            else:
                unknown += 1
    for i, url in enumerate(dead):
        arch = archived(url)
        if arch: dead[url]['archive'] = arch
        time.sleep(1.5)
    json.dump({'checked': datetime.date.today().isoformat(), 'total': len(urls), 'blocked': blocked, 'unknown': unknown, 'dead': dead}, open(OUT, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
    print(f'{len(dead)} hỏng ({sum(1 for d in dead.values() if "archive" in d)} có bản lưu), {blocked} chặn máy, {unknown} chưa kiểm được → {OUT}', file=sys.stderr)


main()
