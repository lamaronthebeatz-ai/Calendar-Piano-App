\version "2.24.0"
% Ode an die Freude — theme of the finale of Beethoven's Symphony No. 9 (1824), public domain. Simplified arrangement: Lamar.
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c' { \clef treble \time 4/4 \tempo "Allegro moderato"
      e4-3\mf e f g-5 | g f e d | c-1 c d e | e2 d |
      e4 e f g | g f e d | c c d e | d2 c
      d4-2\p d e c | d e f e | c d e d | c2 r |
      e4\f e f g | g f e d | c c d e | d2 c \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      c1-5 | g'-1 | c, | g' |
      c, | g' | c, | g'2 c, |
      g'1 | g | c, | c |
      c | g' | c, | g'2 c, }
  >>
  \layout {}
}
