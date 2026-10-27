\version "2.24.0"
% Trăng quê — new piece by Lamar for this book, on the pentatonic D-flat E-flat F A-flat B-flat with grace notes
% (a moonlit-village colour, not a quotation of any folk song).
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f \repeat unfold 4 { s1*4 \break } }
    \new Staff \relative c'' { \clef treble \time 4/4 \key des \major \tempo "Chậm, tự do" 4 = 60
      \acciaccatura ees8 f2-3\p ees4 des | bes2 \acciaccatura des8 ees4 f | aes2 f4 ees | des1 |
      f2 aes4 bes | \acciaccatura aes8 bes2 aes4 f | ees2 f4 ees | des1 |
      bes'2\mf des4 bes | aes2 \acciaccatura aes8 bes4 aes | f2 ees4 f | aes1 |
      bes2\p aes4 f | ees2 \acciaccatura ees8 f4 ees | des2 bes4 ees | des1\fermata \bar "|." }
    \new Staff \relative c { \clef bass \time 4/4 \key des \major
      \grace s8 <des aes'>1-5-1 | <ges, des'> | <aes ees'> | <des aes'> |
      <des aes'> | <ges, des'> | <aes ees'> | <des aes'> |
      <ges, des'> | <ges des'> | <aes ees'> | <des aes'> |
      <ges, des'> | <aes ees'> | <bes f'>2 <aes ees'> | <des, aes'>1\fermata }
  >>
  \layout {}
}
