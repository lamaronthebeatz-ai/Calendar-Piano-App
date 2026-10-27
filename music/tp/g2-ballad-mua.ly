\version "2.24.0"
% Ballad mưa — new piece by Lamar for this book (pop ballad: Am – F – C – G, left hand in broken chords).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \tempo "Chậm, hát" 4 = 72
      e2-3\mp d4 c | c2 a | g'2-5 f4 e | d1 |
      e2 d4 c | c2 e4 g | a2 g4( e) | e1 |
      a2-5\mf g4 e | f2 c | c'2 b4 g | g1 |
      a4\> g e d | c2 a\! | b4 c d g, | a1\fermata \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      a8-5\mp e' a e-1 a, e' a e | f, c' f c f, c' f c | c e g e c e g e | g, d' g d g, d' g d |
      a e' a e a, e' a e | f, c' f c f, c' f c | c e g e c e g e | e, b' e b e, b' e b |
      f c' f c f, c' f c | c e g e c e g e | g, d' g d g, d' g d | e, b' e b e, b' e b |
      f c' f c f, c' f c | a e' a e a, e' a e | g, d' g d g, d' g d | <a e'>1\fermata }
  >>
  \layout {}
}
