\version "2.24.0"
% Blues giọng Sol — new piece by Lamar for this book (three 12-bar blues choruses in G, swing; left-hand shuffle on two-note chords).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key g \major \tempo \markup { "Swing, thong thả" \small \concat { "( " \rhythm { 8[ 8] } " = " \rhythm { \tuplet 3/2 { 4 8 } } " )" } } 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      r8\mf g'-2 bes'-3 b'-4 d''4-5 b'8 g' | bes'4 b'8 g' e'4 d' | r8 g' bes' b' d''4 b'8 g' | f''4.-> e''8 d''4 r \break
      r8 c''-2 ees'' e'' g''4 e''8 c'' | ees''4 e''8 c'' a'4 g' | r8 g' bes' b' d''4 b'8 g' | bes' b' g' e' g'2 \break
      a'8-2 c'' d'' e'' fis''4 e'' | d''8 c'' bes' a' g'4 r | r8 d'' f' g' bes' b' d''4 | g'2 r \break
      r8\f b'-1 d'' e'' g''4 e''8 d'' | bes'4 b'8 g' g'2 | r8 b' d'' e'' g''4 e''8 d'' | f''4 e''8 d'' bes'2 \break
      r8 c'' e'' g'' bes''4 g''8 e'' | ees''4 e''8 c'' c''2 | r8 b' d'' e'' g''4 e''8 d'' | bes'4 b'8 g' e'4 d' \break
      fis''8 e'' d'' c'' a'4 fis' | g''8 e'' ees'' c'' a'4 g' | r8 b' d'' f'' e''4 d'' | d'4 fis' a' c'' \break
      r8\mp g'-2 bes'-3 b'-4 d''4-5 b'8 g' | bes'4 b'8 g' e'4 d' | r8 g' bes' b' d''4 b'8 g' | f''4.-> e''8 d''4 r \break
      r8 c''-2 ees'' e'' g''4 e''8 c'' | ees''4 e''8 c'' a'4 g' | r8 g' bes' b' d''4 b'8 g' | bes' b' g' e' g'2 \break
      a'8-2 c'' d'' e'' fis''4 e'' | d''8 c'' bes' a' g'4 r | r8 d'' f' g' bes' b' d''4 | g'1\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key g \major
      <g, d>8-5-1 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> \break
      <c g>8 <c a> q <c g> q <c a> q <c g> | <c g>8 <c a> q <c g> q <c a> q <c g> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> \break
      <d a>8 <d b> q <d a> q <d b> q <d a> | <c g>8 <c a> q <c g> q <c a> q <c g> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> <d a>2 \break
      <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> \break
      <c g>8 <c a> q <c g> q <c a> q <c g> | <c g>8 <c a> q <c g> q <c a> q <c g> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> \break
      <d a>8 <d b> q <d a> q <d b> q <d a> | <c g>8 <c a> q <c g> q <c a> q <c g> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> <d a>2 \break
      <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> \break
      <c g>8 <c a> q <c g> q <c a> q <c g> | <c g>8 <c a> q <c g> q <c a> q <c g> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> \break
      <d a>8 <d b> q <d a> q <d b> q <d a> | <c g>8 <c a> q <c g> q <c a> q <c g> | <g, d>8 <g, e> q <g, d> q <g, e> q <g, d> | <g, d>1\fermata }
  >>
  \layout {}
}
