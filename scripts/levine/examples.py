"""Music examples (Lamar's own) for the Jazz Theory Book chapters added after reading Mark Levine:
writes music/ex/jazz-levine.txt, one block `lv-<name>` per example. Run, then scripts/sheets/build.py."""
from pathlib import Path

# jazz chord names: maj7, m7, 7, ø, alt, sus… instead of LilyPond's default triangle and "7/9" stacks
HEAD = r'''lvFlat = \markup { \raise #0.6 \small \flat }
lvSharp = \markup { \raise #0.6 \small \sharp }
lvEx = {
  <c e g b>1-\markup { "maj7" } <c e g b d'>1-\markup { "maj9" } <c e g a>1-\markup { "6" }
  <c ees g bes>1-\markup { "m7" } <c ees g bes d'>1-\markup { "m9" } <c e g bes>1-\markup { "7" }
  <c ees ges bes>1-\markup { "ø" } <c ees ges beses>1-\markup { "°7" } <c ees g b>1-\markup { "m(maj7)" }
  <c ees g a>1-\markup { "m6" } <c f g bes>1-\markup { "sus" } <c f g bes d'>1-\markup { "9sus" }
  <c e g bes des'>1-\markup { "7" \lvFlat "9" } <c e g bes dis'>1-\markup { "7" \lvSharp "9" }
  <c e gis bes dis'>1-\markup { "7alt" } <c e g bes d' fis'>1-\markup { "7" \lvSharp "11" }
  <c e g b fis'>1-\markup { "maj7" \lvSharp "11" } <c e gis b>1-\markup { "maj7" \lvSharp "5" }
  <c f g bes des'>1-\markup { "sus" \lvFlat "9" } <c e g bes d' a'>1-\markup { "13" } <c e g a d'>1-\markup { "6/9" }
}
\layout { \context { \ChordNames chordNameExceptions = #(append (sequential-music-to-chord-exceptions lvEx #t) ignatzekExceptions) } }
'''

# no automatic line breaks: short examples stay on one line, longer ones carry their own \break every four bars
NOBREAK = r'\override Score.NonMusicalPaperColumn.line-break-permission = ##f '

def lead(chords, notes, time='4/4'):
    """A one-staff line with chord symbols above (chords and notes in LilyPond syntax, absolute pitches)."""
    return HEAD + rf'''\score {{ <<
  \new ChordNames \chordmode {{ {chords} }}
  \new Staff {{ \accidentalStyle modern \time {time} {NOBREAK}{notes} \bar "|." }}
>> \layout {{ }} }}'''

def piano(chords, up, lo, time='4/4'):
    """Chord symbols over a piano staff (two hands, absolute pitches)."""
    return HEAD + rf'''\score {{ <<
  \new ChordNames \chordmode {{ {chords} }}
  \new PianoStaff <<
    \new Staff {{ \accidentalStyle modern \time {time} {NOBREAK}{up} \bar "|." }}
    \new Staff {{ \accidentalStyle modern \clef bass \time {time} {lo} \bar "|." }}
  >>
>> \layout {{ }} }}'''

EX = {}

# ngu-cung-trong-jazz: G pentatonic only, over ii – V – I in C
EX['pent-251'] = lead('d1:m7 g:7 c:maj7 c:maj7',
  "r8 g'8 a'8 b'8 d''8 e''8 d''8 b'8 | a'8 g'8 e'8 g'8 a'4 b'8 d''8~ | d''4 b'8 a'8 g'8 e'8 g'4 | b'2. r4")

# am-giai-hoa-thanh-va-am-giai-bon-not: C harmonic minor running through a minor ii – V – i
EX['harm-minor'] = lead('d1:m7.5- g:7.9- c:m7+',
  "d''8 c''8 b'8 aes'8 g'8 f'8 ees'8 d'8 | b8 d'8 f'8 aes'8 b'8 aes'8 g'8 f'8 | ees'8 d'8 c'8 b8 c'2")

# tu-am-giai-den-am-nhac
EX['seq-motif'] = lead('d1:m7 g:7 c:maj7 a:m7',
  "r8 f'8 g'8 a'8 c''2 | r8 b'8 c''8 d''8 f''2 | r8 e'8 f'8 g'8 b'2 | r8 c''8 d''8 e''8 g''2")
EX['continuous'] = lead('e1:m7.5- a:7.5+.9+ c:m7 f:7 f:m7 bes:7 ees:maj7 aes:9.11+',
  "d'4 e'4 fis'4 g'4 | a'4 bes'4 c''4 des''4 | ees''4 d''4 c''4 bes'4 | a'4 b'4 c''4 d''4 \\break "
  "ees''4 d''4 c''4 bes'4 | aes'4 g'4 f'4 e'4 | d'4 c'4 bes4 a4 | bes4 c'4 d'4 ees'4")
EX['iio-valt'] = lead('e1:m7.5- a:7.5+.9+ d:m6',
  "g'8 bes'8 d''8 c''8 bes'8 a'8 g'8 e'8 | bes'8 des''8 f''8 ees''8 des''8 c''8 bes'8 g'8 | f'2 r2")

# tai-hoa-am-nang-cao: one melody (Lamar's), three harmonizations
EX['rh-melody'] = lead('c1:maj7 a:m7 g:7 c:maj9', "e'2 f'2 | g'2 a'2 | b'2 c''2 | d''1")
EX['rh-contrary'] = piano('c2:maj7 b:m7.5- bes:13^11 a:m7 aes:7.9+ g:9sus4 ges:maj7.5+ f:6.9',
  "<b e'>2 <d' f'>2 | <d' g'>2 <e' a'>2 | <c' b'>2 <a' c''>2 | <bes' d''~>2 <g' a' d''>2",
  "<c g>2 <b, a>2 | <bes, aes>2 <a, g>2 | <aes, ges>2 <g, f>2 | <ges, f>2 <f, c>2")
EX['rh-combined'] = piano('c2:maj7/g f/g e:m/g d/g e:9sus4 des:maj7 c1:maj9',
  "<b c' e'>2 <a c' f'>2 | <b e' g'>2 <d' fis' a'>2 | <fis' a' b'>2 <f' aes' c''>2 | <e' g' d''>1",
  "g,1~ | g,1 | <e, d>2 <des, c>2 | <c b>1")

# clave-va-latin-jazz: a plain montuno with a tumbao bass, 2-3 clave
EX['montuno'] = piano('c1 f2 g:7',
  "r8 <e' g' c''>8 r8 <e' g' c''>8 <e' g' c''>8 r8 <e' g' c''>8 <f' a' c''>8~ | <f' a' c''>4 r8 <f' a' c''>8 <f' b' d''>4 r8 <f' b' d''>8",
  "r4. g,8~ g,4 f,4~ | f,4. c8~ c4 g,4")

# head-dao-dau-va-ket: iii – VI – ii – V vamp over a C pedal as the intro, the same turnaround as a tag ending (F major)
EX['intro-ending'] = piano('a2:m7/c d:7/c g:m7/c c:7 a:m7/c d:7/c g:m7/c c:7 a:m7 d:7 g:m7 c:7 a:m7 d:7 g:m7 c:7 a:m7 d:7 g:m7 c:7 f1:maj7',
  "\\mark \\markup \\small \"Dạo đầu\" <c' e' g'>2 <c' fis' a'>2 | <bes d' f'>2 <bes e' g'>2 | <c' e' g'>2 <c' fis' a'>2 | <bes d' f'>2 <bes e' g'>2 \\break "
  "\\mark \\markup \\small \"Kết (tag ba lần)\" <c' e' g'>2 <c' fis' a'>2 | <bes d' f'>2 <bes e' g'>2 | <c' e' g'>2 <c' fis' a'>2 | <bes d' f'>2 <bes e' g'>2 \\break "
  "<c' e' g'>2 <c' fis' a'>2 | <bes d' f'>2 <bes e' g'>2 | <c' e' a'>1",
  "c1 | c1 | c1 | c1 | a,2 d2 | g,2 c2 | a,2 d2 | g,2 c2 | a,2 d2 | g,2 c2 | f,1")

out = Path(__file__).resolve().parents[2] / 'music/ex/jazz-levine.txt'
out.write_text('% Jazz Theory Book — examples added after reading Mark Levine: written by scripts/levine/examples.py, do not edit by hand.\n\n'
               + '\n\n'.join(f'=== lv-{k}\n{v}' for k, v in EX.items()) + '\n')
print(len(EX), 'examples')
