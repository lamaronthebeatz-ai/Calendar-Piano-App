\version "2.24.0"
% Khúc ru — new piece by Lamar for this book: 3/4 lullaby on the pentatonic D F G A C (A – A' – B on the pentatonic F – A''), not a quotation of any folk song.
\score {
  \new PianoStaff <<
    \new Staff { \clef treble \time 3/4 \key d \minor \tempo "Chậm, êm" 
      \override Score.NonMusicalPaperColumn.line-break-permission = ##f
      a'2-5\p g'4 | f'2 g'4 | a'2. | a'2. \break
      c'4-1 d' f' | g'2 f'4 | d'2. ~ | d'2. \break
      a'2\mp g'4 | f'2 d'4 | f'2 g'4 | a'2. \break
      g'4 f' d' | c'2 d'4 | d'2. ~ | d'2. \break
      c'4-1\mf f'-3 a'-5 | g'2 f'4 | a'2 g'4 | f'2. \break
      g'4 a' g' | f'2 d'4 | c'2. ~ | c'2. \break
      a'2\p g'4 | f'2 g'4 | a'2 c'4 | d'2 f'4 \break
      g'2 f'4 | d'2 c'4 | d'2. ~ | d'2.\fermata \bar "|." }
    \new Staff { \clef bass \time 3/4 \key d \minor
      d2.-5 | a,2. | d2. | a,2. \break
      d2. | a,2. | d2. | d2. \break
      d2. | a,2. | d2. | a,2. \break
      c2. | a,2. | d2. | d2. \break
      f,2.-5 | c2. | f,2. | f,2. \break
      c2. | f,2. | c2. | c2. \break
      d2. | a,2. | d2. | d2. \break
      c2. | a,2. | d2. | d2.\fermata }
  >>
  \layout {}
}
