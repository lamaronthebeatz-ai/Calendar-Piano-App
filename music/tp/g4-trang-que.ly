\version "2.24.0"
% Trăng quê — new piece by Lamar for this book, on the pentatonic D-flat E-flat F A-flat B-flat with grace notes (A A' B A and a coda; the middle section in B-flat minor over open fifths, returning through A-flat), a moonlit-village colour, not a quotation of any folk song.
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 4/4 \key des \major \tempo "Chậm, tự do" 4 = 60 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      \acciaccatura ees''8 f''2-3\p ees''4 des'' | bes'2 \acciaccatura des''8 ees''4 f'' | aes''2 ees''4 f'' | des''1 \break
      f''2 aes''4 bes'' | \acciaccatura aes''8 bes''2 aes''4 f'' | ees''2 f''4 ees'' | des''1 \break
      aes''2 bes''4 aes'' | f''2 \acciaccatura ees''8 f''4 aes'' | bes''2 aes''4 f'' | ees''1 \break
      f''2 ees''4 des'' | bes'2 des''4 f'' | ees''2 des''4 ees'' | des''1 \break
      bes'2-2\mf des''4 f'' | des''2 bes'4 des'' | ees''2 bes'4 ees'' | f''1 \break
      \acciaccatura ees''8 f''2 aes''4 f'' | bes''2 des'''4 bes'' | ees''2 bes'4 ees'' | aes'2 ees'' \break
      \acciaccatura ees''8 f''2-3\p ees''4 des'' | bes'2 \acciaccatura des''8 ees''4 f'' | aes''2 ees''4 f'' | des''1 \break
      f''2 aes''4 bes'' | \acciaccatura aes''8 bes''2 aes''4 f'' | ees''2 f''4 ees'' | des''1 \break
      des'''2\pp bes''4 aes'' | ees''2 \acciaccatura des''8 ees''4 aes' | des''2 bes'4 aes' | <aes' des''>1\fermata \bar "|." }
    \new Staff { \clef bass \time 4/4 \key des \major
      \grace s8 <des aes>1-5-1 | <bes, f>1 | <aes, ees>1 | <des aes>1 \break
      <des aes>1 | \grace s8 <ges, des>1 | <aes, ees>1 | <des aes>1 \break
      <des aes>1 | <bes, f>1 | <ges, des>1 | <aes, ees>1 \break
      <des aes>1 | <bes, f>1 | <aes, ees>1 | <des aes>1 \break
      <bes, f>2 q | <ges, des>2 q | <ees bes>2 q | <f, c>2 q \break
      \grace s8 <bes, f>2 q | <ges, des>2 q | <ees bes>2 q | <aes, ees>2 q \break
      \grace s8 <des aes>1 | <bes, f>1 | <aes, ees>1 | <des aes>1 \break
      <des aes>1 | \grace s8 <ges, des>1 | <aes, ees>1 | <des aes>1 \break
      <ges, des>1 | <aes, ees>1 | <ges, des>1 | <des, aes,>1\fermata }
  >>
  \layout {}
}
