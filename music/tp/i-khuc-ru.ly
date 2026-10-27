\version "2.24.0"
% Khúc ru — new piece by Lamar for this book, on the pentatonic D F G A C (the colour of Vietnamese lullabies, not a quotation of any folk song).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s2.*4 \break } }
    \new Staff \relative c'' { \clef treble \time 3/4 \tempo "Chậm, êm"
      a2-5\p g4 | f2 g4 | a2. | a2. |
      c,4-1 d f | g2 f4 | d2. ~ | d2.
      a'2\mp c4 | a2 g4 | f2 g4 | a2. |
      g4 f d | c2 d4 | d2. ~ | d2.\fermata \bar "|." }
    \new Staff \relative c { \clef bass \time 3/4
      d2.-5 | a' | d, | a' |
      d, | a' | d, | d |
      d | a' | d, | a' |
      d, | a' | d, | d\fermata }
  >>
  \layout {}
}
