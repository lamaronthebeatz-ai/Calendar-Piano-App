\version "2.24.0"
% Ballad mưa — new piece by Lamar for this book (pop ballad in A minor: two verses Am – F – C – G, two choruses F – G – C – Am ending on E, outro; left hand in broken chords).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key a \minor \tempo "Chậm, hát" 4 = 72 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      e''2-3\mp d''4 c'' | c''2 a' | g''2-5 f''4 e'' | d''1 \break
      e''2 d''4 c'' | c''2 e''4 g'' | a''2 g''4( e'') | e''1 \break
      e''2 d''4 c'' | c''2 a' | g''2 f''4 e'' | d''2 b' \break
      c''2 d''4 e'' | f''2 e''4 d'' | e''2 d''4 c'' | b'1 \break
      a''2-5\mf g''4 f'' | g''2 d'' | e''2 g''4 c''' | c'''2 a'' \break
      a''2 g''4 f'' | g''2 b'' | c'''2 g''4 e'' | e''1 \break
      f''2\f a''4 c''' | b''2 g'' | g''2 e''4 b' | c''2 a' \break
      d''2 f''4 a'' | gis''2 b' | c''2 e''4 d'' | c''2 b' \break
      c''2\> b'4 c'' | a'1\p\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key a \minor
      a,8-5 e a e a, e a e | f,8 c f c f, c f c | c8 g c' g c g c' g | g,8 d g d g, d g d \break
      a,8 e a e a, e a e | f,8 c f c f, c f c | c8 g c' g c g c' g | e,8 b, e b, e, b, e b, \break
      a,8 e a e a, e a e | f,8 c f c f, c f c | c8 g c' g c g c' g | g,8 d g d g, d g d \break
      a,8 e a e a, e a e | f,8 c f c f, c f c | a,8 e a e a, e a e | e,8 b, gis b, e, b, gis b, \break
      f,8 c f c f, c f c | g,8 d g d g, d g d | c8 g c' g c g c' g | a,8 e a e a, e a e \break
      f,8 c f c f, c f c | g,8 d g d g, d g d | c8 g c' g c g c' g | c8 g c' g c g c' g \break
      f,8 c f c f, c f c | g,8 d g d g, d g d | e,8 b, e b, e, b, e b, | a,8 e a e a, e a e \break
      d8 a d' a d a d' a | e,8 b, gis b, e, b, gis b, | a,8 e a e e, b, e b, | a,8 e a e a, e a e \break
      f,8 c f c f, c f c | <a, e a>1\fermata }
  >>
  \layout {}
}
