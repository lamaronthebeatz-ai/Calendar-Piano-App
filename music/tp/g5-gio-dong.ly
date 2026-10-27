\version "2.24.0"
% Gió đồng — new piece by Lamar for this book: 5/4 (3 + 2) on the pentatonic F G A C D, moving to the pentatonic on C
% in the middle (a field-wind colour, not a quotation of any folk song).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s4*5*3 \break } }
    \new Staff \relative c'' { \clef treble \time 5/4 \set Timing.beatStructure = 3,2 \key f \major \tempo "Thong thả, rộng" 4 = 88
      c4-3\mp( d c) a( g) | f( g a) c2 | d4( c a) g( f) |
      g2. a4( c) | d( f d) c( a) | g2. f2 |
      g4\mf( a c) d( e) | g( e d) c2 | a4( c d) e( g) |
      a2.\f g4( e) | d( c a) g( a) | f2.\p ~ f2\fermata \bar "|." }
    \new Staff { \clef bass \time 5/4 \key f \major
      <f, c>2.-5-1 <c g>2 | <f, c>2. <f, c>2 | <bes, f>2. <c g>2 |
      <c g>2. <f, c>2 | <bes, f>2. <f, c>2 | <c g>2. <f,, c,>2 |
      <c g>2. <g, d>2 | <c g>2. <c g>2 | <f, c>2. <c g>2 |
      <f, c>2. <c g>2 | <bes, f>2. <c g>2 | <f, c>2. ~ <f, c>2\fermata }
  >>
  \layout {}
}
