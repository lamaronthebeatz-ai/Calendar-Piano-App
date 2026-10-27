\version "2.24.0"
% Đèn phố — new piece by Lamar for this book (pop ballad in E-flat: syncopated melody over broken chords).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \key ees \major \tempo "Chậm, mềm mại" 4 = 76
      g4-3\mp bes8 g ~ g4 f8 ees | f4 g8 bes ~ bes2 | c4 bes8 g ~ g4 f8 ees | f2. r4 |
      g4 bes8 g ~ g4 f8 ees | f4 g8 bes ~ bes4 c8 d | ees4 d8 bes ~ bes4 g8 f | ees1 |
      c'4\mf d8 ees ~ ees4 d8 c | bes4 g8 f ~ f2 | aes4 bes8 c ~ c4 bes8 aes | g2. r4 |
      c4\f d8 ees ~ ees4 f8 g | f4 ees8 d ~ d4 bes8 c | d4\> c8 bes ~ bes4 aes8 f | ees1\p\fermata \bar "|." }
    \new Staff \transpose c c' { \clef bass \time 4/4 \key ees \major
      ees,8-5 bes, g bes, ees, bes, g bes, | bes,,8 f, d f, bes,, f, d f, | c,8 g, ees g, c, g, ees g, | bes,,8 f, d f, bes,, f, d f, |
      ees,8 bes, g bes, ees, bes, g bes, | aes,,8 ees, c ees, bes,,8 f, d f, | c,8 g, ees g, aes,,8 ees, c ees, | ees,8 bes, g bes, ees,2 |
      aes,,8 ees, c ees, aes,, ees, c ees, | g,,8 d, bes, d, g,, d, bes, d, | f,,8 c, aes, c, f,, c, aes, c, | c,8 g, ees g, c, g, ees g, |
      aes,,8 ees, c ees, aes,, ees, c ees, | bes,,8 f, d f, g,,8 d, bes, d, | aes,,8 ees, c ees, bes,,8 f, d f, | <ees, bes,>1\fermata }
  >>
  \layout {}
}
