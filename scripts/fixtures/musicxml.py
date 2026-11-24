"""Deterministic MusicXML fixtures for the import / rendering pipeline tests (no randomness: the same file every run).
   python3 scripts/fixtures/musicxml.py   → tests/fixtures/musicxml/*.musicxml
Each file states its expected measure count in its name; the content exercises staves, voices, parts, meter changes,
a pickup, irregular bars, repeats, ties, tuplets, dynamics, slurs and articulations."""
import os
OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'tests', 'fixtures', 'musicxml')
STEPS = 'CDEFGAB'

def note(step, octave, dur, typ, voice=1, staff=None, extra='', chord=False, alter=0):
    return (f'<note>{"<chord/>" if chord else ""}<pitch><step>{step}</step>{f"<alter>{alter}</alter>" if alter else ""}<octave>{octave}</octave></pitch>'
            f'<duration>{dur}</duration><voice>{voice}</voice><type>{typ}</type>{f"<staff>{staff}</staff>" if staff else ""}{extra}</note>')

def rest(dur, typ, voice=1, staff=None, measure=False):
    return f'<note><rest{" measure=\"yes\"" if measure else ""}/><duration>{dur}</duration><voice>{voice}</voice>{"" if measure else f"<type>{typ}</type>"}{f"<staff>{staff}</staff>" if staff else ""}</note>'

def piano(n, name, meter_changes=None, pickup=False, repeats=False, odd_bar=None, two_voices=False):
    """Grand staff, DIV=4 per quarter. Melody steps up and down (deterministic), left hand whole/half notes."""
    meter_changes = meter_changes or {}
    out = ['<?xml version="1.0" encoding="UTF-8"?>', '<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">',
           '<score-partwise version="4.0">', f'<work><work-title>{name}</work-title></work>',
           '<part-list><score-part id="P1"><part-name>Piano</part-name></score-part></part-list>', '<part id="P1">']
    beats = 4
    for m in range(n):
        num = m if pickup else m + 1
        attrs = ''
        if m in meter_changes: beats = meter_changes[m]
        implicit = ' implicit="yes"' if pickup and m == 0 else ''
        out.append(f'<measure number="{num}"{implicit}>')
        if m == 0:
            attrs = f'<attributes><divisions>12</divisions><key><fifths>0</fifths></key><time><beats>{beats}</beats><beat-type>4</beat-type></time><staves>2</staves><clef number="1"><sign>G</sign><line>2</line></clef><clef number="2"><sign>F</sign><line>4</line></clef></attributes>'
        elif m in meter_changes:
            attrs = f'<attributes><time><beats>{beats}</beats><beat-type>4</beat-type></time></attributes>'
        out.append(attrs)
        if repeats and m == 4: out.append('<barline location="left"><bar-style>heavy-light</bar-style><repeat direction="forward"/></barline>')
        if m % 8 == 0: out.append(f'<direction placement="below"><direction-type><dynamics><{"p" if m % 16 else "mf"}/></dynamics></direction-type><staff>1</staff></direction>')
        bar_beats = 1 if pickup and m == 0 else (odd_bar[1] if odd_bar and m == odd_bar[0] else beats)
        # right hand: quarters; a slur over the first two, a staccato on the third; a triplet in bar 3
        for b in range(bar_beats):
            d = (m * 3 + b) % 14
            step, octv = STEPS[d % 7], 4 + d // 7
            if m == 2 and b == 0:
                # a quarter beat as an eighth-note triplet: 3 × 4 divisions = one beat of 12
                for k in range(3):
                    tm = '<time-modification><actual-notes>3</actual-notes><normal-notes>2</normal-notes></time-modification>'
                    nt = '<notations><tuplet type="start"/></notations>' if k == 0 else '<notations><tuplet type="stop"/></notations>' if k == 2 else ''
                    out.append(note(STEPS[(d + k) % 7], 5, 4, 'eighth', 1, 1, tm + nt))
                continue
            extra = ''
            if b == 0 and m % 4 == 1: extra = '<notations><slur type="start"/></notations>'
            if b == 1 and m % 4 == 1: extra = '<notations><slur type="stop"/></notations>'
            if b == 2: extra = '<notations><articulations><staccato/></articulations></notations>'
            # a tie across the bar line in bar 6 → 7
            if m == 6 and b == bar_beats - 1: out.append(note('G', 4, 12, 'quarter', 1, 1, '<tie type="start"/><notations><tied type="start"/></notations>')); continue
            if m == 7 and b == 0: out.append(note('G', 4, 12, 'quarter', 1, 1, '<tie type="stop"/><notations><tied type="stop"/></notations>')); continue
            out.append(note(step, octv, 12, 'quarter', 1, 1, extra))
        if two_voices:
            out.append(f'<backup><duration>{bar_beats * 12}</duration></backup>')
            for b in range(bar_beats): out.append(note(STEPS[(m + b) % 7], 3 + (1 if (m + b) % 7 > 3 else 0), 12, 'quarter', 2, 1))
        out.append(f'<backup><duration>{bar_beats * 12}</duration></backup>')
        # left hand: one note filling the bar (whole / dotted / half…) or rests in every 10th bar
        lh = bar_beats * 12
        typ = {48: 'whole', 36: 'half', 24: 'half', 12: 'quarter'}.get(lh, 'whole')
        dots = '<dot/>' if lh == 36 else ''
        if m % 10 == 9: out.append(rest(lh, typ, 5, 2, measure=True))
        elif lh == 60:
            out.append(note(STEPS[m % 7], 2, 48, 'whole', 5, 2)); out.append(note(STEPS[m % 7], 2, 12, 'quarter', 5, 2))
        else: out.append(note(STEPS[m % 7], 3 if m % 2 else 2, lh, typ, 5, 2, dots))
        if repeats and m == 11: out.append('<barline location="right"><bar-style>light-heavy</bar-style><repeat direction="backward"/></barline>')
        if m == n - 1: out.append('<barline location="right"><bar-style>light-heavy</bar-style></barline>')
        out.append('</measure>')
    out += ['</part>', '</score-partwise>']
    return '\n'.join(out)

def ensemble(n, name):
    """Three instruments (flute, clarinet in B♭ with its transposition, cello), 3/4 → 6/8 change at bar 33."""
    parts = [('P1', 'Flute', 'G', 2, 5, None), ('P2', 'Clarinet in Bb', 'G', 2, 4, '<transpose><diatonic>-1</diatonic><chromatic>-2</chromatic></transpose>'), ('P3', 'Violoncello', 'F', 4, 3, None)]
    out = ['<?xml version="1.0" encoding="UTF-8"?>', '<score-partwise version="4.0">', f'<work><work-title>{name}</work-title></work>', '<part-list>']
    out += [f'<score-part id="{p}"><part-name>{nm}</part-name></score-part>' for p, nm, *_ in parts]
    out.append('</part-list>')
    for p, nm, sign, line, octv, tr in parts:
        out.append(f'<part id="{p}">')
        for m in range(n):
            out.append(f'<measure number="{m + 1}">')
            if m == 0: out.append(f'<attributes><divisions>2</divisions><key><fifths>1</fifths></key><time><beats>3</beats><beat-type>4</beat-type></time><clef><sign>{sign}</sign><line>{line}</line></clef>{tr or ""}</attributes>')
            if m == 32: out.append('<attributes><time><beats>6</beats><beat-type>8</beat-type></time></attributes>')
            for b in range(3):
                out.append(note(STEPS[(m + b + len(p)) % 7], octv, 2 if m < 32 else 2, 'quarter' if m < 32 else 'quarter', 1, None, '<notations><articulations><accent/></articulations></notations>' if b == 0 and m % 5 == 0 else ''))
            out.append('</measure>')
        out.append('</part>')
    out.append('</score-partwise>')
    return '\n'.join(out)

FILES = {
    'piano-8.musicxml': piano(8, 'Thử 8 ô'),
    'piano-11.musicxml': piano(11, 'Thử 11 ô'),
    'piano-12.musicxml': piano(12, 'Thử 12 ô', repeats=True),
    'piano-32.musicxml': piano(32, 'Thử 32 ô', meter_changes={16: 3, 24: 4}),
    'piano-64.musicxml': piano(64, 'Thử 64 ô', two_voices=True),
    # bar 91 holds five beats under 4/4: an irregular bar as some editions write a cadenza-like bar
    'piano-105.musicxml': piano(105, 'Thử 105 ô', meter_changes={40: 3, 60: 2, 70: 4}, repeats=True, two_voices=True, odd_bar=(90, 5)),
    'pickup-17.musicxml': piano(17, 'Thử ô lấy đà', pickup=True),
    'ensemble-105.musicxml': ensemble(105, 'Thử ba nhạc cụ 105 ô'),
}
if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for f, x in FILES.items():
        open(os.path.join(OUT, f), 'w').write(x)
    print(len(FILES), 'files')
