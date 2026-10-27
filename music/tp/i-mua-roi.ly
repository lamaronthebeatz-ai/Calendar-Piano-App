\version "2.24.0"
% Mưa rơi — new piece by Lamar for this book (pentatonic C D E G A).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \tempo "Nhẹ, như mưa nhỏ"
      a4-5\p g e g | a2 g | e4-3 d c d | e1 |
      a4 g e g | a2 g | e4 d e d | c1
      e4\mf g a g | e2 d | c4 d e g | a1 |
      a4\p g e d | c2 d | e4 d e d | c1 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      <c g'>1 | <c g'> | <c g'> | <c g'> |
      <c g'> | <c g'> | <c g'> | <c g'> |
      <c g'> | <c g'> | <c g'> | <c g'> |
      <c g'> | <c g'> | <c g'> | <c g'>\fermata }
  >>
  \layout {}
}
