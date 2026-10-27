\version "2.24.0"
% Rock nhỏ — new piece by Lamar for this book (rock: steady crotchets, accents; A A B A and an ending; I – IV – V in C with left-hand open fifths).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key c \major \tempo "Mạnh mẽ, đều nhịp" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      c'4->-1\f c'8 c' d'4 e' | g'4-> e' d' c' | c'4-> c'8 c' d'4 e' | d'2. r4 \break
      c'4-> c'8 c' d'4 e' | g'4-> a' g' e' | d'4-> c' d' e' | c'2. r4 \break
      c'4->-1 c'8 c' d'4 e' | g'4-> e' d' c' | c'4-> c'8 c' d'4 e' | d'2. r4 \break
      c'4-> c'8 c' d'4 e' | g'4-> a' g' e' | d'4-> e' d' b | c'2. r4 \break
      f'4->-4\mf f'8 f' e'4 d' | e'4-> e'8 e' d'4 c' | d'4-> d'8 d' c'4 b | c'2 d'2 \break
      f'4-> f'8 f' e'4 d' | e'4-> e'8 e' d'4 c' | d'4-> e' d' c' | b2. r4 \break
      c'4->-1\f c'8 c' d'4 e' | g'4-> e' d' c' | c'4-> c'8 c' d'4 e' | d'2. r4 \break
      c'4-> c'8 c' d'4 e' | g'4-> a' g' e' | d'4-> c' d' e' | c'2. r4 \break
      g'4->-5 e' c' e' | c'2.-> r4 \bar "|." }
    \new Staff { \clef bass \time 4/4 \key c \major
      <c g>4-5-1 q q q | <c g>4 q q q | <c g>4 q q q | <g, d>4 q q q \break
      <c g>4 q q q | <c g>4 q q q | <g, d>4 q q q | <c g>4 q q q \break
      <c g>4 q q q | <c g>4 q q q | <c g>4 q q q | <g, d>4 q q q \break
      <c g>4 q q q | <c g>4 q q q | <g, d>4 q q q | <c g>4 q q q \break
      <f, c>4 q q q | <c g>4 q q q | <g, d>4 q q q | <c g>4 q q q \break
      <f, c>4 q q q | <c g>4 q q q | <g, d>4 q q q | <g, d>4 q q q \break
      <c g>4 q q q | <c g>4 q q q | <c g>4 q q q | <g, d>4 q q q \break
      <c g>4 q q q | <c g>4 q q q | <g, d>4 q q q | <c g>4 q q q \break
      <c g>4 q q q | <c g>2.-> r4 }
  >>
  \layout {}
}
