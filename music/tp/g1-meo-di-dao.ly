\version "2.24.0"
% Mèo đi dạo — new piece by Lamar for this book (swing in G, A A B A: the A over G – C – D7, the bridge over C – Am – G – D7 in C position; walking left hand in crotchets).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key g \major \tempo \markup { "Swing" \small \concat { "( " \rhythm { 8[ 8] } " = " \rhythm { \tuplet 3/2 { 4 8 } } " )" } } 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      g'8-1\mp a' b' d''-4 e''4-5 d'' | b'8 a' g'4 r2 | g'8 a' b' d'' e''4 d'' | b'2. r4 \break
      e''8-5 d'' b' a' g'4 a' | b'8 a' g' e'-1 g'2 | a'8 b' a' g' e'4 d' | g'2. r4 \break
      g'8-1 a' b' d''-4 e''4-5 d'' | b'8 a' g'4 r2 | g'8 a' b' d'' e''4 d'' | b'2. r4 \break
      e''8-5 d'' b' a' g'4 a' | b'8 a' g' e'-1 g'2 | a'8 b' a' g' e'4 d' | g'2. r4 \break
      e'8-3\mf f' g' e' c'4 e' | c'8 e' d' c' e'2 | g'8 f' e' d' e'4 c' | d'2 g'2 \break
      e'8 f' g' e' c'4 e' | c'8 e' d' c' a2 | e'8 d' c' e' g'4 e' | d'2 c'2 \break
      g'8-1\mp a' b' d''-4 e''4-5 d'' | b'8 a' g'4 r2 | g'8 a' b' d'' e''4 d'' | b'2. r4 \break
      e''8-5 d'' b' a' g'4 a' | b'8 a' g' e'-1 g'2 | a'8 b' a' g' e'4 d' | g'2.\fermata r4 \bar "|." }
    \new Staff { \clef bass \time 4/4 \key g \major
      g,4-5 b, d b, | g,4 b, d b, | g,4 b, d b, | g,4 b, d2 \break
      c4 e g e | g,4 b, d b, | d4 fis a c' | g,4 d g,2 \break
      g,4 b, d b, | g,4 b, d b, | g,4 b, d b, | g,4 b, d2 \break
      c4 e g e | g,4 b, d b, | d4 fis a c' | g,4 d g,2 \break
      c4 e g e | a,4 c e c | c4 e g e | g,4 b, d2 \break
      c4 e g e | a,4 c e c | a,4 c e c | d4 fis a c' \break
      g,4 b, d b, | g,4 b, d b, | g,4 b, d b, | g,4 b, d2 \break
      c4 e g e | g,4 b, d b, | d4 fis a c' | g,2.\fermata r4 }
  >>
  \layout {}
}
