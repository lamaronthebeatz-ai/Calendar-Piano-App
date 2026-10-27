\version "2.24.0"
% Blues năm ngón — new piece by Lamar for this book (12-bar blues in C, the right hand in C position plus E-flat).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 3 { s1*4 \break } }
    \new Staff \relative c' { \clef treble \time 4/4 \tempo "Chậm, nhún nhảy"
      c4-1\mf ees-2 e-3 g-5 | e2 c | c4 ees e g | e1 |
      f4-1 g-2 a-3 g | f2 c | c4 ees e g | e1
      g4-5 g e c | f-4 e ees2 | c4\f ees e g | c,1 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      <c g'>1-5-1 | <c g'> | <c g'> | <c g'> |
      <f c'> | <f c'> | <c g'> | <c g'> |
      <g' d'> | <f c'> | <c g'> | <c g'> }
  >>
  \layout {}
}
