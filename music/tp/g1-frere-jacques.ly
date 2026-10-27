\version "2.24.0"
% Frère Jacques — French round (tune printed c. 1780, public domain). Two-hand canon: Lamar.
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f s1*4 \break s1*4 \break s1*2 }
    \new Staff \relative c' { \clef treble \time 4/4 \tempo "Vui, vừa phải"
      c4-1\mf d e c | c d e c | e-3 f g2-5 | e4 f g2 |
      g8-5 a g f e4 c-1 | g'8 a g f e4 c | c-1 g c2 | c4 g c2 |
      R1 | R1 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      R1 | R1 | c4-5\mp d e c | c d e c |
      e-3 f g2-1 | e4 f g2 | g8-1 a g f e4 c-5 | g'8 a g f e4 c |
      c-5 g' c,2 | c4 g' c,2 }
  >>
  \layout {}
}
