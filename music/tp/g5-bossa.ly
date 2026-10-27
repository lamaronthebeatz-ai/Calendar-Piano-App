\version "2.24.0"
% Bossa chiều — new piece by Lamar for this book (bossa nova: intro, A in A minor, B in C major with ii – V – I and secondary dominants, A again; syncopated chords over a two-beat bass).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key a \minor \tempo "Bossa nova" 4 = 120 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      r2\p a'4 c'' | d''2 f''4 a'' | g''2 e''4 c'' | b'1 \break
      e''4.-3\mp c''8 ~ c''4 a' | g'2 a'4 c'' | f''4. d''8 ~ d''4 a' | c''2 d''4 f'' \break
      f''4. d''8 ~ d''4 b' | gis'2 b'4 d'' | c''4. e''8 ~ e''4 g'' | e''2 cis''4 a' \break
      d''4. f''8 ~ f''4 a'' | g''2 f''4 d'' | e''4. c''8 ~ c''4 b' | a'2 c''4 e'' \break
      f''4. d''8 ~ d''4 a' | b'2 gis'4 b' | a'2. c''4 | b'1 \break
      a'4.\mf c''8 ~ c''4 d'' | f''2 d''4 b' | c''4. e''8 ~ e''4 g'' | a''2 f''4 e'' \break
      d''4. f''8 ~ f''4 d'' | e''2 d''4 b' | c''2 a'4 c'' | cis''4. e''8 ~ e''4 g'' \break
      f''4. a''8 ~ a''4 f'' | d''4. f''8 ~ f''4 d'' | e''2 g''4 e'' | cis''2 e''4 g'' \break
      f''4. d''8 ~ d''4 a' | b'2 d''4 f'' | e''2 c''4 g' | gis'2 b'4 d'' \break
      e''4.-3\mp c''8 ~ c''4 a' | g'2 a'4 c'' | f''4. d''8 ~ d''4 a' | c''2 d''4 f'' \break
      f''4. d''8 ~ d''4 b' | gis'2 b'4 d'' | c''4. e''8 ~ e''4 g'' | e''2 cis''4 a' \break
      d''4. f''8 ~ f''4 a'' | g''2 f''4 d'' | e''4. c''8 ~ c''4 b' | a'2 c''4 e'' \break
      f''4.\p d''8 ~ d''4 a' | b'2 gis'4 b' | e''4. c''8 ~ c''4 e'' | <a' c'' e''>1\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key a \minor
      a,4-5 <c e g>8 e ~ e <c e g> q4 | d,4 <c f a>8 a, ~ a, <c f a> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 \break
      a,4 <c e g>8 e ~ e <c e g> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | d,4 <c f a>8 a, ~ a, <c f a> q4 | d,4 <c f a>8 a, ~ a, <c f a> q4 \break
      b,4 <d f a>8 f ~ f <d f a> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | a,4 <cis e g>8 e ~ e <cis e g> q4 \break
      d,4 <c f a>8 a, ~ a, <c f a> q4 | g,4 <b, d f>8 d ~ d <b, d f> q4 | c,4 <e g b>8 g, ~ g, <e g b> q4 | f,4 <a, c e>8 c ~ c <a, c e> q4 \break
      b,4 <d f a>8 f ~ f <d f a> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 \break
      d,4 <c f a>8 a, ~ a, <c f a> q4 | g,4 <b, d f>8 d ~ d <b, d f> q4 | c,4 <e g b>8 g, ~ g, <e g b> q4 | f,4 <a, c e>8 c ~ c <a, c e> q4 \break
      b,4 <d f a>8 f ~ f <d f a> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | a,4 <cis e g>8 e ~ e <cis e g> q4 \break
      d,4 <c f a>8 a, ~ a, <c f a> q4 | g,4 <b, d f>8 d ~ d <b, d f> q4 | e,4 <d g b>8 b, ~ b, <d g b> q4 | a,4 <cis e g>8 e ~ e <cis e g> q4 \break
      d,4 <c f a>8 a, ~ a, <c f a> q4 | g,4 <b, d f>8 d ~ d <b, d f> q4 | c,4 <e g b>8 g, ~ g, <e g b> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 \break
      a,4 <c e g>8 e ~ e <c e g> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | d,4 <c f a>8 a, ~ a, <c f a> q4 | d,4 <c f a>8 a, ~ a, <c f a> q4 \break
      b,4 <d f a>8 f ~ f <d f a> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | a,4 <cis e g>8 e ~ e <cis e g> q4 \break
      d,4 <c f a>8 a, ~ a, <c f a> q4 | g,4 <b, d f>8 d ~ d <b, d f> q4 | c,4 <e g b>8 g, ~ g, <e g b> q4 | f,4 <a, c e>8 c ~ c <a, c e> q4 \break
      b,4 <d f a>8 f ~ f <d f a> q4 | e,4 <d gis b>8 b, ~ b, <d gis b> q4 | a,4 <c e g>8 e ~ e <c e g> q4 | <a,, e,>1\fermata }
  >>
  \layout {}
}
