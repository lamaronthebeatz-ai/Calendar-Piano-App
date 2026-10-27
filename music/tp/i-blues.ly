\version "2.24.0"
% Blues năm ngón — new piece by Lamar for this book (two 12-bar blues choruses in C and a tag; right hand in C position plus E-flat, the "blue note").
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key c \major \tempo "Chậm, nhún nhảy" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      c'4-1\mf ees'-2 e'-3 g'-5 | e'2 c' | c'4 ees' e' g' | e'1 \break
      f'4-1 g'-2 a'-3 g' | f'2 c' | c'4 ees' e' g' | e'1 \break
      g'4-5 g' e' c' | f'-4 e' ees'2 | c'4 ees' e' g' | e'2 d' \break
      g'4-5\f g' g' e' | g'2 e' | g'4 a'-5 g' e' | ees'2-2 c' \break
      a'4-3 a' a' f'-1 | a'2 f' | g'4-5 g' g' e' | c'2 ees' \break
      d'4-2 d' d' g'-5 | c'4-1 c' f'-4 c' | c'4 ees' e' g' | e'2 d' \break
      c'4\p ees' e' g' | c'1\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key c \major
      <c g>1-5-1 | <c g>1 | <c g>1 | <c g>1 \break
      <f c'>1 | <f c'>1 | <c g>1 | <c g>1 \break
      <g d'>1 | <f c'>1 | <c g>1 | <g d'>1 \break
      <c g>1 | <c g>1 | <c g>1 | <c g>1 \break
      <f c'>1 | <f c'>1 | <c g>1 | <c g>1 \break
      <g d'>1 | <f c'>1 | <c g>1 | <g d'>1 \break
      <c g>1 | <c g>1\fermata }
  >>
  \layout {}
}
