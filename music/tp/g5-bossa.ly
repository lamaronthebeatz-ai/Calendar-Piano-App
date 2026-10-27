\version "2.24.0"
% Bossa chiều — new piece by Lamar for this book (bossa nova in A minor: syncopated chords over a two-beat bass).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \key a \minor \tempo "Bossa nova" 4 = 120
      e4.-3\mp d8 ~ d4 c | b2 a | c4. b8 ~ b4 a | gis1 |
      a4. b8 ~ b4 c | d2 e | f4. e8 ~ e4 d | e1 |
      e4.\mf f8 ~ f4 e | d2 c | b4. c8 ~ c4 d | e1 |
      a,4.\p b8 ~ b4 c | d2 c4 b | c4. b8 ~ b4 gis | a1\fermata \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4 \key a \minor
      a4-5 <c e g>8 e ~ e <c e g> q4 | d,4 <c' f a>8 a ~ a <c f a> q4 | e,4 <d' g b>8 b ~ b <d g b> q4 | e,4 <d' gis b>8 b ~ b <d gis b> q4 |
      a4 <c e g>8 e ~ e <c e g> q4 | d,4 <c' f a>8 a ~ a <c f a> q4 | d,4 <c' f a>8 a ~ a <c f a> q4 | a4 <c e g>8 e ~ e <c e g> q4 |
      f,4 <a c e>8 c ~ c <a c e> q4 | d,4 <c' f a>8 a ~ a <c f a> q4 | e,4 <d' g b>8 b ~ b <d g b> q4 | a4 <c e g>8 e ~ e <c e g> q4 |
      d,4 <c' f a>8 a ~ a <c f a> q4 | g4 <b d f>8 d ~ d <b d f> q4 | e,4 <d' gis b>8 b ~ b <d gis b> q4 | <a, e' c'>1\fermata }
  >>
  \layout {}
}
