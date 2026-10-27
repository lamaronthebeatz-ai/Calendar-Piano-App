\version "2.24.0"
% Ah ! vous dirai-je, maman (Twinkle, Twinkle, Little Star) — French tune, 1761 (public domain). Arrangement: Lamar.
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 3 { s1*4 \break } }
    \new Staff \relative c' { \clef treble \time 4/4 \tempo "Vừa phải"
      c4-1\mf c g'-4 g | a-5 a g2-4 | f4-3 f e e | d d c2
      g'4-4 g f f | e e d2 | g4 g f f | e e d2
      c4-1 c g'-4 g | a-5 a g2 | f4 f e e | d d c2 \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4
      c1-5 | f2-2 c | g'1-1 | g2 c, |
      c1 | g' | c, | g' |
      c,1 | f2 c | g'1 | g2 c, }
  >>
  \layout {}
}
