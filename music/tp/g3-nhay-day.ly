\version "2.24.0"
% Nhảy dây — new piece by Lamar for this book (a jig in 6/8 in G: A A' B A and a coda; the middle section in E minor, i – V – iv – i, turning back through D7).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 6/8 \key g \major \tempo "Allegro, nhún nhảy" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      d''8-4\mf b' g' d''4 b'8 | c''8 a' fis' c''4 a'8 | b'8 g' b' d'' e'' d'' | c''4. a' \break
      d''8 b' g' d''4 b'8 | c''8 a' fis' c''4 a'8 | b'8 c'' d'' a' b' c'' | b'4. g' \break
      e''8-5\f d'' c'' d'' c'' b' | c''8 b' a' b'4 g'8 | a'8 b' c'' d''4 d''8 | e''4.( d'') \break
      d''8 b' g' d''4 b'8 | c''8 a' fis' c''4 a'8 | b'8 d'' g'' fis'' e'' d'' | g'4. r \break
      b'8-1\p e'' g'' fis''4 e''8 | dis''8 e'' fis'' b'4. | c''8 b' a' e''4 c''8 | b'4. a' \break
      g'8 b' e'' dis''4 e''8 | fis''8 e'' dis'' b'4. | a'8 c'' e'' c''4 a'8 | fis'4. a'4 d''8 \break
      d''8-4\mf b' g' d''4 b'8 | c''8 a' fis' c''4 a'8 | b'8 g' b' d'' e'' d'' | c''4. a' \break
      d''8 b' g' d''4 b'8 | c''8 a' fis' c''4 a'8 | b'8 c'' d'' a' b' c'' | b'4. g' \break
      g''8\f fis'' e'' d''4 b'8 | c''8 a' fis' d''4 c''8 | b'8 d'' g'' fis'' a' fis' | <b' d'' g''>4.-> r \bar "|." }
    \new Staff { \clef bass \time 6/8 \key g \major
      <g, b,>4.-1-3 <g, d> | <a, d>4. <a, c> | <g, b,>4. <g, d> | <fis, a,>4. <d, a,> \break
      <g, b,>4. <g, d> | <a, d>4. <a, c> | <g, b,>4. <d, fis,> | <g,, g,>4. q \break
      <c g>4. <g, g> | <a, e>4. <b, g> | <c e>4. <d fis> | <c e>4. <b, d> \break
      <g, b,>4. <g, d> | <a, d>4. <a, c> | <b, d>4. <c d> | <g, d>4. r \break
      <e, b,>4. <e, g,> | <b,, dis,>4. <b,, fis,> | <a,, e,>4. <a,, c,> | <e, b,>4. <e, g,> \break
      <e, b,>4. <e, g,> | <b,, dis,>4. <b,, fis,> | <a,, e,>4. <a,, c,> | <d, a,>4. <d, c> \break
      <g, b,>4.-1-3 <g, d> | <a, d>4. <a, c> | <g, b,>4. <g, d> | <fis, a,>4. <d, a,> \break
      <g, b,>4. <g, d> | <a, d>4. <a, c> | <g, b,>4. <d, fis,> | <g,, g,>4. q \break
      <c g>4. <b, g> | <a, d>4. <fis, d> | <g, d>4. <d, a,> | <g,, d, g,>4.-> r }
  >>
  \layout {}
}
