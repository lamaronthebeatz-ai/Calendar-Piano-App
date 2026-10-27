\version "2.24.0"
% Boogie nhỏ — new piece by Lamar for this book (two 12-bar boogie-woogie choruses in C over a walking left hand C – E – G – A – B-flat, intro and ending).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key c \major \tempo \markup { "Swing" \small \concat { "( " \rhythm { 8[ 8] } " = " \rhythm { \tuplet 3/2 { 4 8 } } " )" } } 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      R1 | R1 | g'8-5\f e' g' e' c'4 r | g'8 e' g' e' c'4 r \break
      ees'8-3 e' g' a' g'4 e' | c'2. r4 | a'8-5 f' a' f' c'4 r | a'8 f' a' f' c'4 r \break
      g'8 e' g' e' c'4 r | ees'8 e' g' a' g'2 | b'8-5 g' b' g' d'4 r | a'8 f' a' f' c'4 r \break
      g'8 e' ees' c' a c'4. | c'2. r4 | g'8-1\mf a' bes' a' g'4 e' | c''4-5 bes'8 g' a'4 g' \break
      g'8 a' bes' a' g'4 e' | c'2. r4 | c''8-1 d'' ees'' d'' c''4 a' | f''4-5 ees''8 c'' d''4 c'' \break
      g'8 a' bes' a' g'4 e' | c'2. r4 | d''8-1 e'' f'' e'' d''4 b' | c''8 d'' ees'' d'' c''4 a' \break
      g'8 e' g' a' bes'4 g' | c''2. r4 | g'8\f e' c' e' g'4 c''-> | <c' e' g' c''>2.-> r4 \bar "|." }
    \new Staff { \clef bass \time 4/4 \key c \major
      c4-5 e g a | bes4 a g e | c4 e g a | bes4 a g e \break
      c4 e g a | bes4 a g e | f4 a c' d' | ees'4 d' c' a \break
      c4 e g a | bes4 a g e | g4 b d' e' | f4 a c' d' \break
      c4 e g bes | c2.-> r4 | c4 e g a | bes4 a g e \break
      c4 e g a | bes4 a g e | f4 a c' d' | ees'4 d' c' a \break
      c4 e g a | bes4 a g e | g4 b d' e' | f4 a c' d' \break
      c4 e g bes | c4 e g bes | c4 e g bes | <c, c>2.-> r4 }
  >>
  \layout {}
}
