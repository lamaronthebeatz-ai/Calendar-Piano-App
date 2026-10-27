\version "2.24.0"
% Valse jazz — new piece by Lamar for this book (jazz waltz, A B A: A in D minor with ii – V – i, B in F with ii – V – I, a secondary ii – V to vi and back; left hand root plus a 3rd–7th shell).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 3/4 \key d \minor \tempo "Valse, nhẹ, swing" 4 = 132 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      f''2-4\mp e''8 d'' | c''2. | d''4 bes'8 a' bes'4 | g'2. \break
      bes'4 d''8 e'' g''4 | f''4 e''8 cis'' a'4 | a'4 d''8 f'' a''4 | f''2. \break
      bes''4. a''8 g'' f'' | e''2 bes'4 | a'2 c''4 | d''2. \break
      g''4 e''8 d'' bes'4 | a'4 cis''8 e'' g''4 | f''2 a'4 | d''2. \break
      d''4\mf f''8 a'' g''4 | e''4 d''8 c'' bes'4 | a'2. | c''4 e''8 f'' a''4 \break
      bes''4 a''8 f'' d''4 | e''4 g''8 e'' d''4 | cis''4 e''8 a'' g''4 | f''2. \break
      d''4 g''8 f'' d''4 | c''4 e''8 g'' bes''4 | a''2 g''4 | fis''4 d''8 c'' a'4 \break
      bes'4 d''8 f'' g''4 | g''4 e''8 c'' bes'4 | a'2 c''4 | e''4 cis''8 e'' g''4 \break
      f''2-4\mp e''8 d'' | c''2. | d''4 bes'8 a' bes'4 | g'2. \break
      bes'4 d''8 e'' g''4 | f''4 e''8 cis'' a'4 | a'4 d''8 f'' a''4 | f''2. \break
      bes''4. a''8 g'' f'' | e''2 bes'4 | a'2 c''4 | d''2. \break
      g''4\> e''8 d'' bes'4 | a'4 cis''8 e'' g''4 | f''4\p e''8 cis'' d''4 | <a' d'' f''>2.\fermata \bar "|." }
    \new Staff { \clef bass \time 3/4 \key d \minor
      d4-5 <f c'>-2-1 q | d4 <f c'> q | g,4 <f bes> q | g,4 <f bes> q \break
      e4 <g d'> q | a,4 <g cis'> q | d4 <f c'> q | d4 <f c'> q \break
      g,4 <f bes> q | c4 <e bes> q | f,4 <e a> q | bes,4 <a d'> q \break
      e4 <g d'> q | a,4 <g cis'> q | d4 <f c'> q | d4 <f c'> q \break
      g,4 <f bes> q | c4 <e bes> q | f,4 <e a> q | f,4 <e a> q \break
      bes,4 <a d'> q | e4 <g d'> q | a,4 <g cis'> q | d4 <f c'> q \break
      g,4 <f bes> q | c4 <e bes> q | a,4 <g c'> q | d4 <fis c'> q \break
      g,4 <f bes> q | c4 <e bes> q | f,4 <e a> q | a,4 <g cis'> q \break
      d4 <f c'> q | d4 <f c'> q | g,4 <f bes> q | g,4 <f bes> q \break
      e4 <g d'> q | a,4 <g cis'> q | d4 <f c'> q | d4 <f c'> q \break
      g,4 <f bes> q | c4 <e bes> q | f,4 <e a> q | bes,4 <a d'> q \break
      e4 <g d'> q | a,4 <g cis'> q | d4 <f c'> q | <d, a,>2.\fermata }
  >>
  \layout {}
}
