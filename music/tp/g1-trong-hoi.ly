\version "2.24.0"
% Trống hội — new piece by Lamar for this book, on the pentatonic G A B D E (a festival-drum colour, not a quotation of any folk song).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s2*4 \break } }
    \new Staff \relative c'' { \clef treble \time 2/4 \tempo "Rộn ràng"
      d4-4\f e8 d | b4 a | g8 a b d | a4 r |
      d4 e8 d | b4 a | g8 a b a | g4 r |
      b4-3\p d | e8 d b4 | a8 b a g | e4-1 r |
      g8\f a b d | e4-> d-> | b8 a g a | g4-> r \bar "|." }
    \new Staff \relative c { \clef bass \time 2/4
      <g d'>8->-5-1 q q4 | \repeat unfold 6 { <g d'>8-> q q4 } | <g d'>4 r |
      \repeat unfold 3 { <e b'>8 q q4 } | <e b'>4 r |
      \repeat unfold 3 { <g d'>8-> q q4 } | <g d'>4-> r }
  >>
  \layout {}
}
