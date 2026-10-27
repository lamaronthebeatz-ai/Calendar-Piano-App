\version "2.24.0"
% Mưa rơi — new piece by Lamar for this book (pentatonic C D E G A; A – B – A', the middle section over A minor, F and G fifths ending on a half close).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key c \major \tempo "Nhẹ, như mưa nhỏ" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      a'4-5\p g' e' g' | a'2 g' | e'4-3 d' c' d' | e'1 \break
      a'4 g' e' g' | a'2 g' | e'4 d' e' d' | c'1 \break
      e'4-3\mf g' a' g' | e'2 d' | c'4 d' e' g' | a'1 \break
      a'4 g' e' d' | c'2 d' | e'4 g' e' d' | d'1 \break
      a'4\p g' e' g' | a'2 g' | e'4 d' c' d' | e'1 \break
      a'4 g' e' g' | a'2 g'4 e' | d'2 e'4 d' | c'1\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key c \major
      <c g>1-5-1 | <c g>1 | <c g>1 | <c g>1 \break
      <c g>1 | <c g>1 | <c g>1 | <c g>1 \break
      <a, e>1-5-1 | <a, e>1 | <f, c>1 | <a, e>1 \break
      <f, c>1 | <c g>1 | <a, e>1 | <g, d>1 \break
      <c g>1 | <c g>1 | <c g>1 | <c g>1 \break
      <c g>1 | <c g>1 | <g, d>1 | <c g>1\fermata }
  >>
  \layout {}
}
