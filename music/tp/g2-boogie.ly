\version "2.24.0"
% Boogie nhỏ — new piece by Lamar for this book (12-bar boogie-woogie in C, walking left hand).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 3 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4
      \tempo \markup { "Swing" \small \concat { "( " \rhythm { 8[ 8] } " = " \rhythm { \tuplet 3/2 { 4 8 } } " )" } }
      g8-5\f e g e c4 r | g'8 e g e c4 r | ees8-3 e g a g4 e | c2. r4 |
      a'8-5 f a f c4 r | a'8 f a f c4 r | g'8 e g e c4 r | ees8 e g a g2 |
      b8-5 g b g d4 r | a'8 f a f c4 r | g'8 e ees c a-> c4. | c2.-> r4 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      c4-5 e g a | bes a g e | c e g a | bes a g e |
      f-5 a c d | ees d c a | c, e g a | bes a g e |
      g-5 b d e | f, a c d | c, e g bes | c,2.-> r4 }
  >>
  \layout {}
}
