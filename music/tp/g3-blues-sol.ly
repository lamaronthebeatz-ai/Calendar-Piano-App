\version "2.24.0"
% Blues giọng Sol — new piece by Lamar for this book (12-bar blues in G, swing, left-hand two-note chords).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 3 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \key g \major
      \tempo \markup { "Swing, thong thả" \small \concat { "( " \rhythm { 8[ 8] } " = " \rhythm { \tuplet 3/2 { 4 8 } } " )" } }
      r8 g-2\mf bes-3 b-4 d4-5 b8 g | bes4 b8 g e4 d | r8 g bes b d4 b8 g | f'4.-> e8 d4 r |
      r8 c-2 ees e g4 e8 c | ees4 e8 c a4 g | r8 g bes b d4 b8 g | bes b g e g2 |
      a8-2\f c d e fis4 e | d8 c bes a g4 r | r8 d' f, g bes b d4 | g,1\fermata \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4 \key g \major
      <g d'>8-5-1 <g e'> q <g d'> q <g e'> q <g d'> | \repeat unfold 3 { <g d'>8 <g e'> q <g d'> q <g e'> q <g d'> } |
      \repeat unfold 2 { <c g'>8-5-1 <c a'> q <c g'> q <c a'> q <c g'> } | \repeat unfold 2 { <g d'> <g e'> q <g d'> q <g e'> q <g d'> } |
      <d' a'>8-5-1 <d b'> q <d a'> q <d b'> q <d a'> | <c g'> <c a'> q <c g'> q <c a'> q <c g'> | <g d'> <g e'> q <g d'> <d' a'>2 | <g, d'>1\fermata }
  >>
  \layout {}
}
