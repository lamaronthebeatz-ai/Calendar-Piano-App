\version "2.24.0"
% Scott Joplin, The Entertainer (1902), A strain — simplified arrangement by Lamar: the right hand keeps the
% top melody line of the original (octaves reduced to one note, an octave lower), the left hand a light stride.
% Melody checked against Mutopia Project no. 263 (typeset by Chris Sawer from the 1902 edition, public domain).
CC = { c8 <e g c'> g, <e g c'> }
GG = { g,8 <f g b> d <f g b> }
\score {
  \new PianoStaff <<
    \new Dynamics { \override Score.NonMusicalPaperColumn.line-break-permission = ##f s8 s2*4 \break s2*4 \break s2*4 \break s2*4 }
    \new Staff { \clef treble \time 2/4 \tempo "Không nhanh (Not fast)" \partial 8
      d'16-1\mf( dis') |
      e'16-1 c''8-5 e'16 c''8 e'16 c''16 ~ | c''4 ~ c''16 c''-1 d'' dis'' | e'' c'' d'' e'' ~ e'' b' d''8 | c''4 ~ c''8 d'16( dis') |
      e'16 c''8 e'16 c''8 e'16 c''16 ~ | c''4 ~ c''8 a'16-2 g' | fis'-1 a' c'' e''-5 ~ e'' d'' c'' a' | d''4 ~ d''8 d'16( dis') |
      e'16 c''8 e'16 c''8 e'16 c''16 ~ | c''4 ~ c''16 c'' d'' dis'' | e'' c'' d'' e'' ~ e'' b' d''8 | c''4 ~ c''8 c''16\f d'' |
      e'' c'' d'' e'' ~ e'' c'' d'' c'' | e'' c'' d'' e'' ~ e'' c'' d'' c'' | e'' c'' d'' e'' ~ e'' b' d''8 | c''4 r8 \bar "|." }
    \new Staff { \clef bass \time 2/4 \partial 8
      r8 |
      \CC | \CC | \GG | \CC |
      \CC | c8 <e g c'> a, <e g cis'> | d8 <fis a c'> fis, <fis a c'> | \GG |
      \CC | \CC | \GG | \CC |
      \CC | \CC | \GG | <c e g c'>4 r8 }
  >>
  \layout {}
}
