\version "2.24.0"
% Nhảy dây — new piece by Lamar for this book (a jig in 6/8: two dotted-crotchet beats per bar).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s2.*4 \break } }
    \new Staff \relative c'' { \clef treble \time 6/8 \key g \major \tempo "Allegro, nhún nhảy"
      d8-4\mf b g d'4 b8 | c a fis c'4 a8 | b g b d e d | c4. a |
      d8 b g d'4 b8 | c a fis c'4 a8 | b c d a b c | b4. g |
      e'8-5\f d c d c b | c b a b4 g8 | a b c d4 d8 | e4.( d) |
      d8\mf b g d'4 b8 | c a fis c'4 a8 | b d g fis e d | g,4.-> r \bar "|." }
    \new Staff \relative c' { \clef bass \time 6/8 \key g \major
      <g b>4.-1-3 <g d'> | <a d> <a c> | <g b> <g d'> | <fis a> <d a'> |
      <g b> <g d'> | <a d> <a c> | <g b> <d fis> | <g, g'> q |
      <c g'> <g g'> | <a e'> <b g'> | <c e> <d fis> | <c e> <b d> |
      <g' b> <g d'> | <a d> <a c> | <b d> <c d> | <g d'>-> r }
  >>
  \layout {}
}
