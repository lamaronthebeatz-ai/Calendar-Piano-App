"""
Jazz theory for the Jazz Licks book, following the library's own jazz articles:
  he-thong-hop-am-am-giai (chord – scale table), am-giai-bebop (the passing note that puts chord tones on the beat),
  not-tranh-va-quang-nghich (avoid notes: a half step above a chord tone — 4 on maj7 and 7, 6 on m7, 2 and 6 on m7b5),
  not-tiep-can-jazz (targets on the beat, chromatic approach, enclosure), not-dan-huong (guide tones 3 and 7).

A chord carries its chord scale as (degree, semitones, role):
  ct    chord tone              — may fall anywhere, may be held, may end a line
  t     available tension       — may fall on the beat and be held
  av    avoid note              — only as a quick note between beats, moving on by step
  p     scale passing note      — the bebop passing note: between beats only, moving on by step
Anything else is chromatic and is checked as an approach note.
"""

LET = 'cdefgab'
NAT = [0, 2, 4, 5, 7, 9, 11]

S = {
    # quality: (symbol, scale name, [(deg, semis, role)], chord-tone degrees in order)
    'maj7': ('maj7', 'Ionian', [(1, 0, 'ct'), (2, 2, 't'), (3, 4, 'ct'), (4, 5, 'av'), (5, 7, 'ct'), (5, 8, 'p'), (6, 9, 't'), (7, 11, 'ct')]),
    'maj7L': ('maj7', 'Lydian', [(1, 0, 'ct'), (2, 2, 't'), (3, 4, 'ct'), (4, 6, 't'), (5, 7, 'ct'), (6, 9, 't'), (7, 11, 'ct')]),
    '6': ('6', 'Ionian (bebop trưởng)', [(1, 0, 'ct'), (2, 2, 't'), (3, 4, 'ct'), (4, 5, 'av'), (5, 7, 'ct'), (5, 8, 'p'), (6, 9, 'ct'), (7, 11, 't')]),
    'm7': ('m7', 'Dorian', [(1, 0, 'ct'), (2, 2, 't'), (3, 3, 'ct'), (3, 4, 'p'), (4, 5, 't'), (5, 7, 'ct'), (6, 9, 'av'), (7, 10, 'ct')]),
    # modal Dorian: the 6th is the colour note of the mode (the avoid-note table calls the rule subjective)
    'm7M': ('m7', 'Dorian (điệu thức)', [(1, 0, 'ct'), (2, 2, 't'), (3, 3, 'ct'), (4, 5, 't'), (5, 7, 'ct'), (6, 9, 't'), (7, 10, 'ct')]),
    '7': ('7', 'Mixolydian (bebop át)', [(1, 0, 'ct'), (2, 2, 't'), (3, 4, 'ct'), (4, 5, 'av'), (5, 7, 'ct'), (6, 9, 't'), (7, 10, 'ct'), (7, 11, 'p')]),
    # blues: the chord's own Mixolydian plus the blue notes ♭3 (sounding as ♯9) and ♭5 (passing)
    '7B': ('7', 'Mixolydian + nốt xanh', [(1, 0, 'ct'), (2, 2, 't'), (2, 3, 't'), (3, 4, 'ct'), (4, 5, 'av'), (5, 6, 'p'), (5, 7, 'ct'), (6, 9, 't'), (7, 10, 'ct')]),
    'alt': ('7alt', 'biến đổi (altered)', [(1, 0, 'ct'), (2, 1, 't'), (2, 3, 't'), (3, 4, 'ct'), (4, 6, 't'), (6, 8, 't'), (7, 10, 'ct')]),
    'b9': ('7b9', 'bát cung nửa cung – cung', [(1, 0, 'ct'), (2, 1, 't'), (2, 3, 't'), (3, 4, 'ct'), (4, 6, 't'), (5, 7, 'ct'), (6, 9, 't'), (7, 10, 'ct')]),
    'b9P': ('7b9', 'Phrygian át', [(1, 0, 'ct'), (2, 1, 't'), (3, 4, 'ct'), (4, 5, 'av'), (5, 7, 'ct'), (6, 8, 't'), (7, 10, 'ct')]),
    'm7b5': ('m7b5', 'Locrian', [(1, 0, 'ct'), (2, 1, 'av'), (3, 3, 'ct'), (4, 5, 't'), (5, 6, 'ct'), (6, 8, 'av'), (7, 10, 'ct')]),
    'm7b5N': ('m7b5', 'Locrian ♮2', [(1, 0, 'ct'), (2, 2, 't'), (3, 3, 'ct'), (4, 5, 't'), (5, 6, 'ct'), (6, 8, 'av'), (7, 10, 'ct')]),
    'dim7': ('dim7', 'bát cung cung – nửa cung', [(1, 0, 'ct'), (2, 2, 't'), (3, 3, 'ct'), (4, 5, 't'), (5, 6, 'ct'), (6, 8, 't'), (6, 9, 'ct'), (7, 11, 't')]),
    'm6': ('m6', 'thứ giai điệu', [(1, 0, 'ct'), (2, 2, 't'), (3, 3, 'ct'), (4, 5, 't'), (5, 7, 'ct'), (6, 9, 'ct'), (7, 11, 't')]),
    'mM7': ('mM7', 'thứ giai điệu', [(1, 0, 'ct'), (2, 2, 't'), (3, 3, 'ct'), (4, 5, 't'), (5, 7, 'ct'), (6, 9, 't'), (7, 11, 'ct')]),
}

# LilyPond chordmode suffix for each symbol
CHORDMODE = {'maj7': 'maj7', '6': '6', 'm7': 'm7', '7': '7', '7alt': '7.5+.9+', '7b9': '7.9-', 'm7b5': 'm7.5-', 'dim7': 'dim7', 'm6': 'm6', 'mM7': 'm7+'}
# how the symbol reads in captions
SYMTXT = {'maj7': 'maj7', '6': '6', 'm7': 'm7', '7': '7', '7alt': '7alt', '7b9': '7♭9', 'm7b5': 'm7♭5', 'dim7': '°7', 'm6': 'm6', 'mM7': 'm(maj7)'}
DEGTXT = {(1, 0): '1', (2, 1): '♭9', (2, 2): '9', (2, 3): '♯9', (3, 3): '♭3', (3, 4): '3', (4, 5): '4', (4, 6): '♯11', (5, 6): '♭5', (5, 7): '5',
          (5, 8): '♯5', (6, 8): '♭13', (6, 9): '6', (7, 9): '6', (7, 10): '♭7', (7, 11): '7'}


def spell(midi, letter):
    """(letter, alter) for a midi note on a given letter; None when the alter is not -2..2."""
    alter = (midi - NAT[letter] + 6) % 12 - 6
    return (letter, alter) if -2 <= alter <= 2 else None


def simple(midi, letter, alter, prefer):
    """Respell double accidentals and E♯ B♯ F♭ C♭ to the plain enharmonic (jazz-chart habit)."""
    if abs(alter) < 2 and (LET[letter], alter) not in {('e', 1), ('b', 1), ('f', -1), ('c', -1)}:
        return letter, alter
    opts = [spell(midi, l) for l in range(7)]
    opts = [o for o in opts if o and abs(o[1]) <= 1 and (LET[o[0]], o[1]) not in {('e', 1), ('b', 1), ('f', -1), ('c', -1)}]
    opts.sort(key=lambda o: (abs(o[1]), -o[1] if prefer > 0 else o[1]))
    return opts[0]


def ly(midi, letter, alter):
    name = LET[letter] + ('is' * alter if alter > 0 else 'es' * -alter)
    o = (midi - alter) // 12 - 4
    return name + ("'" * o if o > 0 else ',' * -o)


class Chord:
    def __init__(self, root_letter, root_pc, qual):
        self.letter, self.pc, self.qual = root_letter, root_pc % 12, qual
        self.sym, self.scale_name, self.scale = S[qual]
        self.roles = {}
        for deg, semis, role in self.scale:
            self.roles.setdefault((self.pc + semis) % 12, (deg, semis, role))

    def role(self, midi):
        r = self.roles.get(midi % 12)
        return r[2] if r else 'c'

    def deg(self, midi):
        r = self.roles.get(midi % 12)
        if r and r[:2] == (6, 9) and self.sym in ('7', '7alt', '7b9'):
            return '13'
        return DEGTXT.get(r[:2], '?') if r else None

    def is_target(self, midi):
        return self.role(midi) in ('ct', 't')

    def notes(self, roles, lo=50, hi=96):
        return [m for m in range(lo, hi) if self.role(m) in roles]

    def root_name(self):
        l, a = simple(self.pc + 60, self.letter, spell(self.pc + 60, self.letter)[1], -1)
        return (LET[l].upper() + {1: '♯', -1: '♭', 0: ''}[a]), ly(self.pc + 48, l, a).rstrip("',")

    def text(self):
        return self.root_name()[0] + SYMTXT[self.sym]

    def chordmode(self, dur):
        return f'{self.root_name()[1]}{dur}:{CHORDMODE[self.sym]}'

    def spell_scale(self, midi):
        """Spelling of a chord-scale note: the letter follows the degree."""
        deg, semis, _ = self.roles[midi % 12]
        l = (self.letter + deg - 1) % 7
        sp = spell(midi, l)
        if not sp:
            return None
        return simple(midi, *sp, prefer=1 if semis in (6, 8) and deg in (4, 5) else -1)


# Keys (tonic letter, pc), flat side first as jazz charts lean that way
MAJOR_KEYS = [(0, 0), (3, 5), (6, 10), (2, 3), (5, 8), (1, 1), (4, 6), (4, 7), (1, 2), (5, 9), (2, 4), (6, 11)]  # C F Bb Eb Ab Db Gb G D A E B
MINOR_KEYS = [(0, 0), (4, 7), (1, 2), (5, 9), (2, 4), (6, 11), (3, 6), (0, 1), (3, 5), (6, 10), (2, 3), (4, 8)]  # C G D A E B F# C# F Bb Eb G#
for k in MAJOR_KEYS + MINOR_KEYS:
    assert spell(k[1] + 60, k[0])


def degree_root(key, steps, semis):
    """Root of the chord a diatonic `steps` and `semis` above the tonic (e.g. ii = 1, 2; V = 4, 7; ♭II = 1, 1)."""
    l, pc = key
    return (l + steps) % 7, (pc + semis) % 12
