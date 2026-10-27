\version "2.24.0"
% Đò chiều — new piece by Lamar for this book, on the pentatonic A C D E G with triplets (a river-boat colour, not a quotation of any folk song).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \tempo "Thong thả, như mái chèo"
      e2-4\p \tuplet 3/2 { d4 c a } | c2 a | \tuplet 3/2 { g4 a c } d4 e | a,1 |
      e'2 \tuplet 3/2 { d4 e g } | a2 g | \tuplet 3/2 { e4 d c } d4 c | a1 |
      g'2\mf \tuplet 3/2 { e4 g a } | g2 e | \tuplet 3/2 { d4 e g } e4 d | c1 |
      e2\p \tuplet 3/2 { d4 c a } | c2 a | \tuplet 3/2 { g4 a c } d4 c | a1\fermata \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      <a e'>2-5-1 q | q q | <c g'> q | <a e'>1 |
      q2 q | <d a'> q | <c g'> <g d'> | <a e'>1 |
      <c g'>2 q | q q | <g d'> q | <c g'>1 |
      <a e'>2 q | q q | <c g'> <g d'> | <a e'>1\fermata }
  >>
  \layout {}
}
