\version "2.24.0"
% Mary Had a Little Lamb — tune printed by Lowell Mason, 1830s (public domain). Arrangement: Lamar.
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 2 { s1*4 \break } }
    \new Staff \relative c' { \clef treble \time 4/4 \tempo "Vui vẻ"
      e4-3\mf d-2 c-1 d | e e e2 | d4 d d2 | e4 g-5 g2 |
      e4-3 d c d | e e e e | d d e d | c1 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      c1-5 | c | g'-1 | c, | c | c | g' | c, }
  >>
  \layout {}
}
