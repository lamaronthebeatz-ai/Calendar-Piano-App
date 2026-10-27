\version "2.24.0"
% Đò chiều — new piece by Lamar for this book, on the pentatonic A C D E G with crotchet triplets (A A' B A''; the middle section on the pentatonic C), not a quotation of any folk song.
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key a \minor \tempo "Thong thả, như mái chèo" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      e''2-4\p \tuplet 3/2 { d''4 c'' a' } | c''2 a' | \tuplet 3/2 { g'4 a' c'' } d''4 e'' | a'1 \break
      e''2 \tuplet 3/2 { d''4 e'' g'' } | a''2 g'' | \tuplet 3/2 { e''4 d'' c'' } d''4 c'' | a'1 \break
      e''2-4\mp \tuplet 3/2 { d''4 c'' a' } | c''2 a' | \tuplet 3/2 { g'4 a' c'' } d''4 e'' | a'1 \break
      e''2 \tuplet 3/2 { d''4 e'' g'' } | a''2 g'' | \tuplet 3/2 { e''4 d'' c'' } d''4 e'' | a'1 \break
      g''2\mf \tuplet 3/2 { e''4 g'' a'' } | g''2 e'' | \tuplet 3/2 { d''4 e'' g'' } e''4 d'' | c''1 \break
      e''2 \tuplet 3/2 { g''4 e'' d'' } | c''2 a' | \tuplet 3/2 { c''4 d'' e'' } g''4 e'' | d''1 \break
      a''2\p \tuplet 3/2 { g''4 e'' d'' } | e''2 d'' | \tuplet 3/2 { c''4 d'' e'' } d''4 c'' | a'1 \break
      e''2 \tuplet 3/2 { d''4 c'' a' } | c''2 a' | \tuplet 3/2 { g'4 a' c'' } d''4 c'' | a'1\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key a \minor
      <a, e>2-5-1 q | <a, e>2 q | <c g>2 q | <a, e>1 \break
      <a, e>2 q | <d a>2 q | <c g>2 <g, d> | <a, e>1 \break
      <a, e>2 q | <a, e>2 q | <c g>2 q | <a, e>1 \break
      <a, e>2 q | <d a>2 q | <c g>2 <g, d> | <a, e>1 \break
      <c g>2 q | <c g>2 q | <g, d>2 q | <c g>1 \break
      <c g>2 q | <a, e>2 q | <c g>2 q | <g, d>1 \break
      <a, e>2 q | <c g>2 q | <c g>2 <g, d> | <a, e>1 \break
      <a, e>2 q | <a, e>2 q | <c g>2 <g, d> | <a, e>1\fermata }
  >>
  \layout {}
}
