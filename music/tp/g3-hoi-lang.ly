\version "2.24.0"
% Hội làng — new piece by Lamar for this book, on the pentatonic F G A C D (A A' B A and a coda; the middle section over D minor), not a quotation of any folk song.
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 2/4 \key f \major \tempo "Vui, rộn ràng" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      c''16-3\f d'' c'' a' g'8 a' | c''4 d''8 c'' | a'16 g' f' g' a'8 c'' | g'4 r \break
      c''16 d'' c'' a' g'8 a' | c''4 f''8 d'' | c''16 a' g' a' c''8 a' | f'4 r \break
      d''8-4\mp c''16 d'' f''8 d'' | c''8 a' c''4 | d''8 c''16 a' g'8 a' | c''4 r \break
      f''8 d''16 c'' d''8 c'' | a'8 c'' g' a' | c''16 a' g' a' c''8 d'' | f'4 r \break
      d''8-4\p f''16 d'' c''8 a' | d''4 r | c''8 a'16 g' f'8 g' | a'4 r \break
      d''8 c''16 a' g'8 a' | c''4 d'' | a'8 g'16 f' g'8 a' | d'4 r \break
      c''16-3\f d'' c'' a' g'8 a' | c''4 d''8 c'' | a'16 g' f' g' a'8 c'' | g'4 r \break
      c''16 d'' c'' a' g'8 a' | c''4 f''8 d'' | c''16 a' g' a' c''8 a' | f'4 r \break
      f''8\ff d''16 c'' d''8 c'' | a'8 c'' g' a' | c''16 a' g' a' c''8 d'' | f''4 c'' \break
      f''8 d''16 c'' d''8 c'' | a'8 c'' g' a' | f'8 g' a' c'' | <f' a' c'' f''>4-> r \bar "|." }
    \new Staff { \clef bass \time 2/4 \key f \major
      <f, c>8->-5-1 q q q | <f, c>8 q q q | <f, c>8 q q q | <c g>8 q q q \break
      <f, c>8 q q q | <bes, f>8 q q q | <c g>8 q q q | <f, c>4 r \break
      <bes, f>8 q q q | <f, c>8 q q q | <bes, f>8 q <c g> q | <f, c>8 q q q \break
      <bes, f>8 q q q | <f, c>8 q <c g> q | <f, c>8 q <c g> q | <f, c>4 r \break
      <d a>8 q q q | <d a>4 r | <f, c>8 q q q | <d a>4 r \break
      <d a>8 q q q | <f, c>8 q <bes, f> q | <d a>8 q <g, d> q | <d a>4 r \break
      <f, c>8->-5-1 q q q | <f, c>8 q q q | <f, c>8 q q q | <c g>8 q q q \break
      <f, c>8 q q q | <bes, f>8 q q q | <c g>8 q q q | <f, c>4 r \break
      <bes, f>8 q q q | <f, c>8 q <c g> q | <f, c>8 q <c g> q | <f, c>8 q q q \break
      <bes, f>8 q q q | <f, c>8 q <c g> q | <f, c>8 q <c g> q | <f, c>4-> r }
  >>
  \layout {}
}
