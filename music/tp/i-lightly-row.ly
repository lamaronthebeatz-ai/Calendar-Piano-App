\version "2.24.0"
% Hänschen klein (Lightly Row) — German folk tune, words by F. Wiedemann (1840s), public domain. Arrangement: Lamar.
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \tempo "Vừa phải"
      g4-5\mf e e2 | f4 d d2 | c4-1 d e f | g g g2 |
      g4 e e2 | f4 d d2 | c4 e g g | c,1
      d4-2\p d d d | d e f2 | e4 e e e | e f g2-5 |
      g4\mf e e2 | f4 d d2 | c4 e g g | c,1 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      c1-5 | g'-1 | c, | c |
      c | g' | c,2 g' | c,1 |
      g'1 | g | c, | c |
      c | g' | c,2 g' | c,1 }
  >>
  \layout {}
}
