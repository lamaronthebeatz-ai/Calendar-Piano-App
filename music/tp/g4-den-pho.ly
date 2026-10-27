\version "2.24.0"
% Đèn phố — new piece by Lamar for this book (pop ballad in E-flat: intro, two verses, pre-chorus ii – iii – IV – V7, two choruses — the second with a deceptive cadence to vi — and an outro; broken-chord left hand).
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key ees \major \tempo "Chậm, mềm mại" 4 = 76 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      g''2\p ees''4 bes' | c''2 aes'4 ees'' | ees''4 d''8 c'' ~ c''2 | d''2. r4 \break
      g'4-3\mp bes'8 g' ~ g'4 f'8 ees' | f'4 g'8 bes' ~ bes'2 | c''4 bes'8 g' ~ g'4 f'8 ees' | ees'2. r4 \break
      g'4 bes'8 g' ~ g'4 f'8 ees' | f'4 g'8 bes' ~ bes'4 c''8 d'' | ees''4 c''8 aes' ~ aes'4 bes'8 d'' | ees''1 \break
      g'4 bes'8 ees'' ~ ees''4 d''8 bes' | d''4 c''8 bes' ~ bes'2 | c''4 ees''8 g'' ~ g''4 f''8 ees'' | c''2. r4 \break
      bes'4 g'8 bes' ~ bes'4 ees''8 g'' | f''4 d''8 bes' ~ bes'4 c''8 d'' | ees''4 c''8 aes' ~ aes'2 | bes'2. r4 \break
      aes'4\mf c''8 f'' ~ f''4 ees''8 c'' | bes'4 d''8 g'' ~ g''4 f''8 d'' | c''4 ees''8 aes'' ~ aes''4 g''8 ees'' | d''2 f''4 aes'' \break
      g''4\f f''8 ees'' ~ ees''4 bes'8 g' | c''4 d''8 ees'' ~ ees''4 g''8 ees'' | c''4 ees''8 aes'' ~ aes''4 g''8 f'' | f''4 d''8 bes' ~ bes'2 \break
      g''4 f''8 ees'' ~ ees''4 bes'8 g' | c''4 d''8 ees'' ~ ees''4 f''8 g'' | aes''4 g''8 f'' f''4 d'' | ees''1 \break
      g''4 f''8 ees'' ~ ees''4 bes'8 g' | c''4 d''8 ees'' ~ ees''4 g''8 ees'' | c''4 ees''8 aes'' ~ aes''4 g''8 f'' | f''4 d''8 bes' ~ bes'2 \break
      g''4 f''8 ees'' ~ ees''4 bes'8 g' | c''4 d''8 ees'' ~ ees''4 f''8 g'' | aes''4 g''8 f'' f''4 d'' | c''2 ees''4 g'' \break
      aes''4 g''8 ees'' ~ ees''4 c''8 ees'' | f''4 aes''8 c''' ~ c'''4 aes''8 f'' | f''4 g''8 f'' ~ f''4 d'' | ees''1 \break
      c''2\p ees''4 c'' | bes'2 g'4 bes' | aes'2 f'4 d' | ees'1\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key ees \major
      ees,8-5 bes, g bes, ees, bes, g bes, | aes,8 ees c' ees aes, ees c' ees | c8 g ees' g c g ees' g | bes,8 f d' f bes, f d' f \break
      ees,8 bes, g bes, ees, bes, g bes, | bes,8 f d' f bes, f d' f | c8 g ees' g c g ees' g | aes,8 ees c' ees aes, ees c' ees \break
      ees,8 bes, g bes, ees, bes, g bes, | bes,8 f d' f bes, f d' f | aes,8 ees c' ees bes, f aes f | ees,8 bes, g bes, ees, bes, g bes, \break
      ees,8 bes, g bes, ees, bes, g bes, | bes,8 f d' f bes, f d' f | c8 g ees' g c g ees' g | aes,8 ees c' ees aes, ees c' ees \break
      ees,8 bes, g bes, ees, bes, g bes, | bes,8 f d' f bes, f d' f | aes,8 ees c' ees aes, ees c' ees | bes,8 f d' f bes, f d' f \break
      f,8 c aes c f, c aes c | g,8 d bes d g, d bes d | aes,8 ees c' ees aes, ees c' ees | bes,8 f aes f bes, f aes f \break
      ees,8 bes, g bes, ees, bes, g bes, | c8 g ees' g c g ees' g | aes,8 ees c' ees aes, ees c' ees | bes,8 f d' f bes, f d' f \break
      ees,8 bes, g bes, ees, bes, g bes, | c8 g ees' g c g ees' g | f,8 c aes c bes, f aes f | ees,8 bes, g bes, ees, bes, g bes, \break
      ees,8 bes, g bes, ees, bes, g bes, | c8 g ees' g c g ees' g | aes,8 ees c' ees aes, ees c' ees | bes,8 f d' f bes, f d' f \break
      ees,8 bes, g bes, ees, bes, g bes, | c8 g ees' g c g ees' g | f,8 c aes c bes, f aes f | c8 g ees' g c g ees' g \break
      aes,8 ees c' ees aes, ees c' ees | f,8 c aes c f, c aes c | bes,8 f aes f bes, f aes f | ees,8 bes, g bes, ees, bes, g bes, \break
      aes,8 ees c' ees aes, ees c' ees | ees,8 bes, g bes, ees, bes, g bes, | f,8 c aes c bes, f aes f | <ees, bes,>1\fermata }
  >>
  \layout {}
}
