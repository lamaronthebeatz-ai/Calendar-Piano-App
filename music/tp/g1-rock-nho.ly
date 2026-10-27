\version "2.24.0"
% Rock nhỏ — new piece by Lamar for this book (rock: steady quavers, accents, LH open fifths).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \tempo "Mạnh mẽ, đều nhịp"
      c4->-1\f c8 c d4 e | g-> e d c | c-> c8 c d4 e | d2. r4 |
      c4-> c8 c d4 e | g-> a g e | d-> c d e | c2. r4 |
      f4->-4\mf f8 f e4 d | e-> e8 e d4 c | d-> d8 d c4 b | c2-1 d2 |
      c4->\f c8 c d4 e | g-> a g e | d-> e d b | c2.-> r4 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      <c g'>4-5-1 q q q | q q q q | q q q q | <g d'> q q q |
      <c g'> q q q | q q q q | <g d'> q q q | <c g'>2. r4 |
      <f c'>4 q q q | <c g'> q q q | <g d'> q q q | <c g'>2 <g d'>2 |
      <c g'>4 q q q | q q q q | <g d'> q q q | <c g'>2.-> r4 }
  >>
  \layout {}
}
