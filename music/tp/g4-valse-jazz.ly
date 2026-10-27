\version "2.24.0"
% Valse jazz — new piece by Lamar for this book (jazz waltz in D minor: seventh chords, ii–V–i).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s2.*4 \break } }
    \new Staff \relative c'' { \clef treble \time 3/4 \key d \minor \tempo "Valse, nhẹ, swing" 4 = 132
      a2-3\mp g4 | f2 e4 | d4. e8 f g | a2. |
      bes2 a4 | g2 f4 | e4. f8 g a | g2. |
      a2\mf c4 | bes2 a4 | g4. a8 bes c | d2. |
      e,2 f4 | g2 bes4 | a4.\> g8 f e | d2.\p\fermata \bar "|." }
    \new Staff \relative c { \clef bass \time 3/4 \key d \minor
      d4-5 <f c'>-2-1 q | g, <f' bes> q | a, <e' g cis> q | d <f a c> q |
      g, <f' bes> q | c <e bes'> q | a, <e' g cis> q | d <f a c> q |
      f <a ees'> q | bes, <f' a d> q | e <g bes d> q | a, <e' g cis> q |
      e <g bes d> q | a, <e' g cis> q | a, <e' g cis> q | <d a' c>2.\fermata }
  >>
  \layout {}
}
