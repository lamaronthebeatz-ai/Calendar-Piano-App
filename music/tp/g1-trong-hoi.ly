\version "2.24.0"
% Trống hội — new piece by Lamar for this book, on the pentatonic G A B D E (A A' B A and a coda; the middle section over E – B), not a quotation of any folk song.
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 2/4 \key g \major \tempo "Rộn ràng" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      d''4-4\f e''8 d'' | b'4 a' | g'8 a' b' d'' | a'4 r \break
      d''4 e''8 d'' | b'4 a' | g'8 a' b' a' | g'4 r \break
      b'4-3\mf d''8 b' | a'4 g' | g'8 g' a' b' | a'4 r \break
      b'4 d''8 e'' | d''4 b' | a'8 b' a' g' | g'4 r \break
      b'4-5\p a' | g'8 a' b'4 | a'8 g' e'4-1 | g'4 r \break
      e'8 g' a' b' | a'4 g' | e'8 g' a' g' | e'4 r \break
      d''4-4\f e''8 d'' | b'4 a' | g'8 a' b' d'' | a'4 r \break
      d''4 e''8 d'' | b'4 a' | g'8 a' b' a' | g'4 r \break
      d''8 b' g' a' | g'4-> r \bar "|." }
    \new Staff { \clef bass \time 2/4 \key g \major
      <g, d>8->-5-1 q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 \break
      <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>4 r \break
      <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 \break
      <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>4 r \break
      <e, b,>8 q q4 | <e, b,>8 q q4 | <e, b,>8 q q4 | <e, b,>4 r \break
      <e, b,>8 q q4 | <e, b,>8 q q4 | <e, b,>8 q q4 | <e, b,>4 r \break
      <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 \break
      <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>8-> q q4 | <g, d>4 r \break
      <g, d>8-> q q4 | <g, d>4-> r }
  >>
  \layout {}
}
