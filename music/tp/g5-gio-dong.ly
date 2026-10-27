\version "2.24.0"
% Gió đồng — new piece by Lamar for this book: 5/4 (3 + 2) on the pentatonic F G A C D (A), moving to the pentatonic on C in the middle (B, ending on C as the dominant of F), then A' with a higher climax; a field-wind colour, not a quotation of any folk song.
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 5/4 \key f \major \tempo "Thong thả, rộng" 4 = 88 \set Timing.beatStructure = 3,2
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      c''4-3(\mp d'' c'') a'( g') | f'4( g' a') c''2 | d''4( c'' a') g'( f') \break
      g'2. a'4( c'') | d''4( f'' d'') c''( a') | g'2. f'2 \break
      a'4( c'' d'') c''( a') | d''4( f'' d'') c''( d'') | f''2. d''4( c'') \break
      d''4( c'' a') g'2 | f'4( g' a') c''( a') | g'2. f'2 \break
      g'4(\mf a' c'') d''( e'') | e''2. d''4( c'') | d''4( e'' d'') a'2 \break
      e''4( d'' c'') a'( g') | e'4( g' a') c''( d'') | d''2. ~ d''2 \break
      g''4( e'' d'') e''( g'') | a''2. g''4( e'') | g''4( e'' d'') c''( e'') \break
      d''4( c'' a') g'( a') | c''4( a' g') d''( c'') | c''2. ~ c''2 \break
      c''4-3(\mp d'' c'') a'( g') | f'4( g' a') c''2 | d''4( c'' a') g'( f') \break
      g'2. a'4( c'') | d''4( f'' d'') c''( a') | g'2. f'2 \break
      a'4(\f c'' d'') f''( d'') | d''4( f'' d'') c''( a') | a''2. g''4( f'') \break
      f''4( g'' f'') g''( c'') | d''4( c'' a') a'( c'') | g'2.\p f'2\fermata \bar "|." }
    \new Staff { \clef bass \time 5/4 \key f \major
      <f, c>2.-5-1 <c g>2 | <f, c>2. <f, c>2 | <bes, f>2. <c g>2 \break
      <c g>2. <f, c>2 | <bes, f>2. <f, c>2 | <c g>2. <f,, c,>2 \break
      <f, c>2. <f, c>2 | <bes, f>2. <c g>2 | <d a>2. <d a>2 \break
      <g, d>2. <c g>2 | <bes, f>2. <f, c>2 | <c g>2. <f, c>2 \break
      <c g>2. <c g>2 | <a, e>2. <a, e>2 | <d a>2. <d a>2 \break
      <a, e>2. <g, d>2 | <c g>2. <c g>2 | <g, d>2. <g, d>2 \break
      <c g>2. <c g>2 | <a, e>2. <a, e>2 | <e b>2. <a, e>2 \break
      <d a>2. <g, d>2 | <a, e>2. <g, d>2 | <c g>2. <c g>2 \break
      <f, c>2. <c g>2 | <f, c>2. <f, c>2 | <bes, f>2. <c g>2 \break
      <c g>2. <f, c>2 | <bes, f>2. <f, c>2 | <c g>2. <f,, c,>2 \break
      <f, c>2. <bes, f>2 | <bes, f>2. <c g>2 | <d a>2. <d a>2 \break
      <bes, f>2. <c g>2 | <bes, f>2. <f, c>2 | <c g>2. <f, c>2\fermata }
  >>
  \layout {}
}
