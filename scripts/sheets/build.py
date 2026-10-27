#!/usr/bin/env python3
"""
Engraves the music of the children's piano books with LilyPond.

  music/ex/*.txt   short examples, blocks headed `=== <id>` (the block is the body of a \\score,
                   or a whole file when it contains \\score itself)
  music/tp/<id>.ly pieces, complete LilyPond files (own arrangements, or Mutopia sources
                   run through convert-ly)

Each system becomes one cropped SVG in public/sheets/{ex,tp}/ named <id>[-n].<hash>.svg, and
src/features/theory/sheets.json lists them with their size in CSS px:
  { "ex" | "tp": { id: [[file, w, h], ...] } }  (one entry per system)
Unchanged sources are skipped. Usage: LILYPOND=/path/to/lilypond python3 scripts/sheets/build.py [ids...]
"""
import hashlib, json, os, re, subprocess, sys, tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MUSIC, OUT = ROOT / 'music', ROOT / 'public' / 'sheets'
MANIFEST = ROOT / 'src' / 'features' / 'theory' / 'sheets.json'
LILYPOND = os.environ.get('LILYPOND', 'lilypond')
COMMON = (MUSIC / 'kids.ily').read_text()
PT2PX = 4 / 3
DPI = 144


def sources():
    for f in sorted((MUSIC / 'ex').glob('*.txt')):
        for block in re.split(r'^=== ', f.read_text(), flags=re.M)[1:]:
            head, _, body = block.partition('\n')
            body = body.strip()
            ragged = '\\paper { ragged-right = ##t }\n\\layout { \\context { \\Score \\omit BarNumber \\override SpacingSpanner.spacing-increment = #0.9 } }\n'
            text = body if '\\score' in body else f'\\score {{\n{body}\n\\layout {{}}\n}}'
            yield 'ex', head.strip(), f'\\version "2.24.0"\n{text}\n{COMMON}\n{ragged}'
    for f in sorted((MUSIC / 'tp').glob('*.ly')):
        # the piece first, then the common settings, so they win over the source's own paper block
        yield 'tp', f.stem, f'{f.read_text()}\n{COMMON}\n\\paper {{ ragged-last = ##t }}\n'


def crop(svg: Path, png: Path):
    """Crop the page SVG to the ink of its raster (pt units: the SVG viewBox is in pt)."""
    from PIL import Image
    im = Image.open(png).convert('L').point(lambda v: 255 if v < 250 else 0)
    box = im.getbbox()
    if not box:
        return None
    k = 72 / DPI
    pad = 3
    x0, y0, x1, y1 = box[0] * k - pad, box[1] * k - pad, box[2] * k + pad, box[3] * k + pad
    w, h = x1 - x0, y1 - y0
    s = svg.read_text()
    s = re.sub(r'<svg([^>]*?) width="[^"]*" height="[^"]*" viewBox="[^"]*"',
               lambda m: f'<svg{m.group(1)} width="{w * PT2PX:.0f}" height="{h * PT2PX:.0f}" viewBox="{x0:.2f} {y0:.2f} {w:.2f} {h:.2f}"', s, count=1)
    svg.write_text(s)
    return round(w * PT2PX), round(h * PT2PX)


def engrave(kind: str, id_: str, text: str, h: str):
    with tempfile.TemporaryDirectory() as tmp:
        src = Path(tmp) / 'm.ly'
        src.write_text(text)
        r = subprocess.run([LILYPOND, '-dno-point-and-click', '-o', str(Path(tmp) / 'm'), str(src)], cwd=MUSIC, capture_output=True, text=True)
        pdf = Path(tmp) / 'm.pdf'
        if r.returncode or not pdf.exists():
            sys.exit(f'{id_}: LilyPond failed\n{r.stderr[-3000:]}')
        warn = [l for l in r.stderr.splitlines() if 'warning' in l or 'error' in l]
        if warn:
            print(f'  {id_}:', *warn[:6], sep='\n    ')
        pages = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', str(pdf)], capture_output=True, text=True).stdout).group(1))
        out = []
        for p in range(1, pages + 1):
            name = f'{id_}.{h}.svg' if kind == 'ex' and pages == 1 else f'{id_}-{p}.{h}.svg'
            svg = OUT / kind / name
            subprocess.run(['pdftocairo', '-svg', '-f', str(p), '-l', str(p), str(pdf), str(svg)], check=True)
            png = Path(tmp) / f'p{p}'
            subprocess.run(['pdftoppm', '-gray', '-r', str(DPI), '-f', str(p), '-l', str(p), '-singlefile', '-png', str(pdf), str(png)], check=True)
            size = crop(svg, png.with_suffix('.png'))
            if size:
                out.append([name, *size])
            else:
                svg.unlink()
        return out


def main():
    only = set(sys.argv[1:])
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {'ex': {}, 'tp': {}}
    seen = {'ex': set(), 'tp': set()}
    for kind, id_, text in sources():
        if id_ in seen[kind]:
            sys.exit(f'duplicate id {id_}')
        seen[kind].add(id_)
        h = hashlib.sha1(text.encode()).hexdigest()[:8]
        old = manifest[kind].get(id_)
        files = old or []
        if files and all(f'.{h}.' in f[0] for f in files) and (not only or id_ not in only):
            continue
        if only and id_ not in only and files:
            continue
        (OUT / kind).mkdir(parents=True, exist_ok=True)
        for f in files:
            (OUT / kind / f[0]).unlink(missing_ok=True)
        print('engrave', kind, id_)
        res = engrave(kind, id_, text, h)
        # a piece ending on a lone short system: engrave again with one system fewer, so the bars spread evenly
        if kind == 'tp' and 'line-break-permission' not in text and len(res) > 1 and res[-1][1] < 0.5 * max(r[1] for r in res):
            for f in res:
                (OUT / kind / f[0]).unlink(missing_ok=True)
            res = engrave(kind, id_, text + f'\\paper {{ system-count = #{len(res) - 1} }}\n', h)
        manifest[kind][id_] = res
    for kind in ('ex', 'tp'):
        for gone in set(manifest[kind]) - seen[kind]:
            val = manifest[kind].pop(gone)
            for f in val:
                (OUT / kind / f[0]).unlink(missing_ok=True)
        manifest[kind] = dict(sorted(manifest[kind].items()))
        used = {f[0] for v in manifest[kind].values() for f in v}
        for stale in (OUT / kind).glob('*.svg'):
            if stale.name not in used:
                stale.unlink()
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, separators=(',', ':')) + '\n')


main()
