\version "2.24.0"
% Mèo đi dạo — new piece by Lamar for this book (swing: pairs of quavers played long–short).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 3 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4
      \tempo \markup { "Swing" \small \concat { "( " \rhythm { 8[ 8] } " = " \rhythm { \tuplet 3/2 { 4 8 } } " )" } }
      g8-1\mp a b d-4 e4-5 d | b8 a g4 r2 | g8 a b d e4 d | b2. r4 |
      e8-5 d b a g4 a | b8 a g e-1 g2 | e'8\mf d b a g4 e | g2. r4 |
      g8\mp a b d e4 g,8 a | b4 a g e | d'8 e d b a g e4 | g2.\fermata r4 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      g4-5\mp b d b | g b d b | g b d b | g b d2 |
      c4-5 e g e | g,-5 b d b | c e g e | g, b d2 |
      g,4 b d b | c e g e | d c b a | g2.\fermata r4 }
  >>
  \layout {}
}
