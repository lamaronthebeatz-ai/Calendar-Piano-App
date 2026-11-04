"""Engraves the music examples of the "Phân tích tác phẩm âm nhạc" book (giáo trình Nguyễn Thị Nhung) from Humdrum data.

The notes are not copied from the scanned book: each excerpt (same work, same bars as the book's example) is cut
from Craig Sapp's Humdrum encodings (Beethoven sonatas after the Durand 1915 edition, Chopin preludes), converted
kern -> MusicXML (music21) -> LilyPond (musicxml2ly) and written to music/ex/ptam.txt as `=== ptam-<id>` blocks.
Only public-domain works; examples of Vietnamese works in the book are still under copyright and are not reproduced.

Usage: MUSICXML2LY=/path/musicxml2ly KERN_CACHE=/tmp/kern python3 scripts/ptam/examples.py
"""
import copy, os, re, subprocess, sys, tempfile, urllib.request
from pathlib import Path
import music21 as m21

ROOT = Path(__file__).resolve().parents[2]
CACHE = Path(os.environ.get('KERN_CACHE', '/tmp/kern'))
X2LY = os.environ.get('MUSICXML2LY', 'musicxml2ly')
DUR = {0.25: '16', 0.5: '8', 0.75: '8.', 1.0: '4', 1.5: '4.', 2.0: '2', 3.0: '2.', 4.0: '1'}
STANDARD_DYN = {'ppp', 'pp', 'p', 'mp', 'mf', 'f', 'ff', 'fff', 'sf', 'sfz', 'fz', 'rfz', 'fp', 'sfp'}
BEETHOVEN = 'https://raw.githubusercontent.com/craigsapp/beethoven-piano-sonatas/master/kern/{}.krn'
CHOPIN = 'https://raw.githubusercontent.com/craigsapp/chopin-preludes/master/kern/{}.krn'

# id, source, file, first bar, last bar (bar 0 = pickup, included when the excerpt starts at bar 1), bars per line
EXAMPLES = [
    ('appassionata-1-8', BEETHOVEN, 'sonata23-1', 1, 8, 2),
    ('chopin-prelude-1-mo-dau', CHOPIN, 'prelude28-01', 1, 8, 4),
    ('chopin-prelude-1-cao-trao', CHOPIN, 'prelude28-01', 17, 24, 4),
    ('chopin-prelude-4-cao-trao', CHOPIN, 'prelude28-04', 15, 18, 2),
    ('chopin-prelude-7', CHOPIN, 'prelude28-07', 1, 8, 4),
    ('sonata10-1-chu-de', BEETHOVEN, 'sonata10-1', 1, 8, 3),
    ('sonata30-1-doi-chieu', BEETHOVEN, 'sonata30-1', 1, 12, 3),
    ('sonata06-1-motif', BEETHOVEN, 'sonata06-1', 1, 4, 4),
    ('sonata10-3-motif', BEETHOVEN, 'sonata10-3', 1, 4, 4),
    ('sonata07-2-cau', BEETHOVEN, 'sonata07-2', 1, 8, 2),
    ('sonata09-3-chia-nho', BEETHOVEN, 'sonata09-3', 1, 8, 2),
    ('sonata01-1-tong-hop', BEETHOVEN, 'sonata01-1', 1, 8, 4),
    ('anh-trang-1-9', BEETHOVEN, 'sonata14-1', 1, 9, 3),
    ('sonata03-3-scherzo', BEETHOVEN, 'sonata03-3', 1, 16, 4),
    ('sonata09-2-menuetto', BEETHOVEN, 'sonata09-2', 1, 16, 4),
    ('waldstein-chu-de-chinh', BEETHOVEN, 'sonata21-1', 1, 13, 3),
    ('waldstein-noi-tiep', BEETHOVEN, 'sonata21-1', 14, 34, 3),
    ('waldstein-chu-de-hai', BEETHOVEN, 'sonata21-1', 35, 42, 2),
]


def kern(url: str, name: str) -> Path:
    CACHE.mkdir(parents=True, exist_ok=True)
    f = CACHE / f'{name}.krn'
    if not f.exists():
        urllib.request.urlretrieve(url.format(name), f)
    return f


def set_clefs(part):
    """Clefs from the pitches, bar by bar: kern's clef changes, cut out of context, leave whole passages on the wrong
    clef. Treble when a bar's median is above G4-ish, bass when below E3-ish, otherwise keep the clef in force."""
    for c in list(part.recurse().getElementsByClass('Clef')):
        c.activeSite.remove(c)
    current = None
    for mm in part.getElementsByClass('Measure'):
        ps = sorted(p.ps for n in mm.recurse().notes for p in n.pitches)
        if ps:
            med = ps[len(ps) // 2]
            want = 'G' if med >= 60 else 'F'
            if current and current != want and 55 <= med <= 64:
                want = current
        else:
            want = current or 'G'
        if want != current:
            mm.insert(0, m21.clef.TrebleClef() if want == 'G' else m21.clef.BassClef())
            current = want


def merge_staves(path: Path, score):
    """Spines that share a *staff line (Chopin preludes) come out of music21 as separate parts: make them voices of one staff."""
    staff = next((l.split('\t') for l in path.read_text().splitlines() if l.startswith('*staff')), None)
    if not staff or len(set(staff)) == len(staff):
        return score
    groups = {}
    for p in score.parts:
        groups.setdefault(staff[int(p.id.split('_')[1])], []).append(p)
    merged = m21.stream.Score()
    for name in sorted(groups):  # *staff1 is the top staff
        parts = sorted(groups[name], key=lambda p: -int(p.id.split('_')[1]))
        base = copy.deepcopy(parts[0])
        for other in parts[1:]:
            for mm, om in zip(base.getElementsByClass('Measure'), other.getElementsByClass('Measure')):
                inner = list(mm.voices) or None
                if inner is None:
                    v = m21.stream.Voice()
                    for el in list(mm.notesAndRests):
                        mm.remove(el)
                        v.insert(el.offset, el)
                    mm.insert(0, v)
                for ov in (list(om.voices) or [om]):
                    v = m21.stream.Voice()
                    for el in ov.notesAndRests:
                        v.insert(el.offset, copy.deepcopy(el))
                    mm.insert(0, v)
        merged.insert(0, base)
    return merged


def lily(path: Path, a: int, b: int, per: int) -> str:
    score = merge_staves(path, m21.converter.parse(path))
    first = 0 if a == 1 and score.parts[0].measure(0) is not None else a
    ex = score.measures(first, b)
    for p in ex.parts:
        seen = set()
        for mm in list(p.getElementsByClass('Measure')):
            # a piece may end with a second bar numbered 0 (the bar completing the pickup): keep the bars asked for, once
            if mm.number in seen or not first <= mm.number <= b:
                p.remove(mm)
            else:
                seen.add(mm.number)
        # tuplet brackets cut at the excerpt's edges make musicxml2ly crash: rebuild them per bar
        for mm in p.recurse().getElementsByClass(('Measure', 'Voice')):
            m21.stream.makeNotation.makeTupletBrackets(mm, inPlace=True)
        # a few kern dynamics are not marks ("[ >"): musicxml2ly makes invalid identifiers of them
        for d in list(p.recurse().getElementsByClass('Dynamic')):
            if d.value not in STANDARD_DYN:
                d.activeSite.remove(d)
        bar0 = p.measure(0)
        if bar0 is not None and bar0.paddingLeft:
            # the pickup becomes a full bar opening with a hidden rest: musicxml2ly pads the voices of a short bar
            # unevenly and the bar checks fail
            pad = bar0.paddingLeft
            for box in [bar0, *bar0.voices]:
                notes = list(box.notesAndRests)
                if not notes:
                    continue
                for el in notes:
                    box.remove(el)
                    box.insert(el.offset + pad, el)
                hide = m21.note.Rest(quarterLength=pad)
                hide.style.hideObjectOnPrint = True
                box.insert(0, hide)
            bar0.paddingLeft = 0
        set_clefs(p)
    # about `per` bars a line, spread evenly so no line is left with one bar (pickup not counted); other breaks are
    # forbidden in the layout below
    bars = [mm for mm in ex.parts[0].getElementsByClass('Measure') if mm.number != 0]
    lines = -(-len(bars) // per)
    for k in range(1, lines):
        bars[round(k * len(bars) / lines)].insert(0, m21.layout.SystemLayout(isNew=True))
    for p in ex.parts:
        p.partName = None
        p.partAbbreviation = None
    ex.metadata = m21.metadata.Metadata()
    with tempfile.TemporaryDirectory() as tmp:
        xml = Path(tmp) / 'x.musicxml'
        ex.write('musicxml', fp=xml)
        r = subprocess.run([X2LY, '--no-beaming', '--absolute', '-o', str(Path(tmp) / 'x.ly'), str(xml)], capture_output=True, text=True)
        if r.returncode:
            sys.exit(f'{path.name}: musicxml2ly failed\n{r.stderr[-2000:]}')
        text = (Path(tmp) / 'x.ly').read_text()
    # keep the music: drop version, header, paper and the point-and-click line; the build adds its own
    text = re.sub(r'^\\version.*$', '', text, flags=re.M)
    text = re.sub(r'^\\pointAndClickOff\s*$', '', text, flags=re.M)
    for block in ('header', 'paper'):
        text = re.sub(r'\\' + block + r'\s*\{(?:[^{}]|\{[^{}]*\})*\}', '', text)
    text = re.sub(r'\\midi\s*\{[^}]*\}', '', text)
    text = re.sub(r'^\s*\\set Staff\.(short)?[iI]nstrumentName.*$', '', text, flags=re.M)
    text = re.sub(r'\\tempo\s+\d+\.?\s*=\s*\d+\s*', '', text)

    text = re.sub(r'\n{3,}', '\n\n', text).strip()
    # fixed lines: left alone, LilyPond often ends with a lone bar that the reader blows up to full width
    return '\\layout { \\context { \\Score \\override NonMusicalPaperColumn.line-break-permission = ##f } }\n' + text


def main():
    out = ['% Music examples of the "Phân tích tác phẩm âm nhạc" book, generated by scripts/ptam/examples.py from Humdrum data.\n']
    for id_, url, name, a, b, per in EXAMPLES:
        print(id_)
        out.append(f'=== ptam-{id_}\n{lily(kern(url, name), a, b, per)}\n')
    (ROOT / 'music/ex/ptam.txt').write_text('\n'.join(out))


if __name__ == '__main__':
    main()
