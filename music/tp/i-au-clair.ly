\version "2.24.0"
% Au clair de la lune — French folk song, 18th century (public domain). Arrangement: Lamar.
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c' { \clef treble \time 4/4 \tempo "Nhẹ nhàng"
      c4-1\p c c d | e2 d | c4 e d d | c1 |
      c4 c c d | e2 d | c4 e d d | c1
      R1 | R1 | R1 | R1 |
      c4\mf c c d | e2 d | c4 e d d | c1 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      c2-5 g' | c, g' | c, g' | c,1 |
      c2 g' | c, g' | c, g' | c,1 |
      d'4-1\mp d d d | a2-5 a | d4-1 c-2 b-3 a-4 | g1-5 |
      c,2 g' | c, g' | c, g' | c,1 }
  >>
  \layout {}
}
