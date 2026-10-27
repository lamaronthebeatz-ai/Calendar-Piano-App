\version "2.24.0"
% Hội làng — new piece by Lamar for this book, on the pentatonic F G A C D (a village-festival colour, not a quotation of any folk song).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s2*4 \break } }
    \new Staff \relative c'' { \clef treble \time 2/4 \key f \major \tempo "Vui, rộn ràng"
      c16-3\f d c a g8 a | c4 d8 c | a16 g f g a8 c | g4 r |
      c16 d c a g8 a | c4 f8 d | c16 a g a c8 a | f4 r |
      d'8-4\p c16 d f8 d | c a c4 | d8 c16 a g8 a | c4 r |
      f8\f d16 c d8 c | a c g a | c16 a g a c8 d | f,4-> r \bar "|." }
    \new Staff \relative c { \clef bass \time 2/4 \key f \major
      <f c'>8-5-1-> q <f c'> q | q q q q | <f c'> q q q | <c g'> q q q |
      <f c'> q q q | <bes f'> q q q | <c g'> q q q | <f, c'>4 r |
      <bes f'>4-5-1 q | <f c'> q | <bes f'> <c g'> | <f, c'> r |
      <bes f'>8-> q q q | <f c'> q <c g'> q | <f c'> q <c g'> q | <f c'>4-> r }
  >>
  \layout {}
}
