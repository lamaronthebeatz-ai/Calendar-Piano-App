\version "2.24.0"
% Clementi, Introduction to the Art of Playing on the Piano Forte Op. 42 (1801), Lesson II: Aria. Source: Mutopia Project no. 1938, typeset by Javier Ruiz-Alma, CC BY-SA 4.0. Adapted for this book (layout only).
%-----------------------------------------------------------------
%Custom functions to add an upper tie between two text characters
%
#(define-markup-command (up-tied-lyric layout props a b)
  (markup? markup?)
  (let*
          ((tie-str (ly:wide-char->utf-8 #x2040))
           (joined  (list-join `(,a ,b) tie-str))
           (join-stencil (interpret-markup layout props tie-str))
           )

        (interpret-markup layout
                          (prepend-alist-chain
                           'word-space
                           (/ (interval-length (ly:stencil-extent join-stencil X)) -2.5)
                           props)
                          (make-line-markup joined))))
                          
                          
trillFour= \markup { \up-tied-lyric \finger 4 \finger 5 }
trillThree = \markup { \up-tied-lyric \finger 3 \finger 2 }
trillTwo = \markup { \up-tied-lyric \finger 2 \finger 1 }
trillOne = \markup { \up-tied-lyric \finger 1 \finger 2 }
trillFourTwo= \markup { \up-tied-lyric \finger 4 \finger 2 }
switchOneTwo= \trillOne
switchOneThree= \markup { \up-tied-lyric \finger 1 \finger 3 }
switchOneFive= \markup{\up-tied-lyric \finger 1 \finger 5}
switchTwoOne= \trillTwo
switchTwoThree = \markup{\up-tied-lyric \finger 2 \finger 3}
switchTwoFour = \markup{\up-tied-lyric \finger 2 \finger 4}
switchTwoFive = \markup{\up-tied-lyric \finger 2 \finger 5}
switchThreeOne= \markup{\up-tied-lyric \finger 3 \finger 1}
switchThreeTwo= \markup{\up-tied-lyric \finger 3 \finger 2}
switchThreeFive= \markup{\up-tied-lyric \finger 3 \finger 5}
switchThreeFour= \markup{\up-tied-lyric \finger 3 \finger 4}
switchFourOne = \markup{\up-tied-lyric \finger 4 \finger 1}
switchFourThree = \markup{\up-tied-lyric \finger 4 \finger 3}
switchFourFive= \trillFour
switchFiveOne= \markup{\up-tied-lyric \finger 5 \finger 1}
switchFiveTwo= \markup{\up-tied-lyric \finger 5 \finger 2}
switchFiveFour= \markup{\up-tied-lyric \finger 5 \finger 4}
switchFiveThree= \markup{\up-tied-lyric \finger 5 \finger 3}
switchInvertedFiveThree = \markup{ \left-align \override #'( baseline-skip . 1.5 ) \column { \finger \concat { "5" \hspace #0.4 "3 "} \raise #-1 \rotate #-180 \char ##x2040 } } 
switchFiveFourFive= \markup{ \finger \halign #CENTER \concat{"   5" \hspace #0.3 "4" \hspace #0.3 "5"}}
switchThreeFourThree = \markup{\finger \concat{ "3" \hspace #0.2 "4" \hspace #0.2 "3" }}
switchThreeTwoThree = \markup{\finger \concat{ "3" \hspace #0.2 "2" \hspace #0.2 "3" }}
switchOneTwoOne = \markup{\finger \concat{ "1" \hspace #0.2 "2" \hspace #0.2 "1" \hspace #0.2 }}
switchTwoOneTwo = \markup{\finger \concat{ "2" \hspace #0.2 "1" \hspace #0.2 "2" }}
switchFourThreeTwo = \markup{\finger \concat{ "4" \hspace #0.2 "3" \hspace #0.2 "2" }}
switchThreeTwoThreeTwo = \markup{ \center-align \finger \concat{ "3" \hspace #0.1 "2" \hspace #0.1 "3" \hspace #0.1 "2" }}
switchFourThreeFourThree = \markup{ \center-align \finger \concat{ "4" \hspace #0.1 "3" \hspace #0.1 "4" \hspace #0.1 "3" }}
locoFingering = \markup { \finger \concat { "3" \hspace #0.1 "2"\hspace #0.1 "3" \hspace #0.1 "2" \hspace #0.1 "3" } }

sampleInvertedSwitch = \markup{ \left-align \override #'( baseline-skip . 1.5 ) \column { { \finger " 5" } \finger \concat { "3" \hspace #0.4 "2 "} \raise #-1 \rotate #-180 \char ##x2040 } }

preTrill =  \once \override Staff.Script.outside-staff-priority = #0


%-----------------------------------------------------------------
                          
hideTimeSignature = \once \override Staff.TimeSignature.stencil = ##f
forceClef = \set Staff.forceClef = ##t
sameSizeClef = \override Staff.Clef.full-size-change = ##t
beamUp = \override Beam.neutral-direction = #1
beamDown = \override Beam.neutral-direction = #-1
beamFlat = \once \override Beam.damping = #+inf.0
hideTempo = \set Score.tempoHideNote = ##t
autoLineBreakOff= \override NonMusicalPaperColumn.line-break-permission = ##f
autoLineBreakOn= \override NonMusicalPaperColumn.line-break-permission = ##t

hideTuplet = \override TupletNumber.stencil = ##f
showTuplet = \override TupletNumber.stencil = ##t
hideTupletBracket = \override TupletBracket.bracket-visibility = ##f
showTupletBracket = \override TupletBracket.bracket-visibility = ##t

ignoreClashNote = \override NoteColumn.ignore-collision = ##t
ignoreClashNoteOnce = \once \override NoteColumn.ignore-collision = ##t
forceStemLeft = \once \override NoteColumn.force-hshift = #-0.5
forceStemRight = \once \override NoteColumn.force-hshift = #0.5
forceStemRightRight = \once \override NoteColumn.force-hshift = #1.0
forceStemLeftLeft = \once \override NoteColumn.force-hshift = #-1.0
lessScriptPriority = \once \override Script.script-priority = #-100
lessTextScriptPriority = \once \override TextScript.script-priority = #-100
lessFingerPriority = \once \override Fingering.script-priority = #-100
scriptRightOne = \once \override Script.extra-offset = #'(0.3 . 0.0 )
restRightOne = \once \override Voice.Rest.extra-offset = #'(5.0 . 0.0 )
hideKeyCancellation = \set Staff.printKeyCancellation = ##f
setFingeringLeft = \set fingeringOrientations = #'(left)
setFingeringRight = \set fingeringOrientations = #'(right)
setFingeringDown = \set fingeringOrientations = #'(down)
setFingeringUp = \set fingeringOrientations = #'(up)
pushFingerLeft = \once \override Voice.Fingering.extra-offset = #'(-0.2 . -1.4 )
allowFingeringInStaff = \once \override Fingering.staff-padding = #'()
forceFingeringToStem = \override Fingering.add-stem-support = ##t  % used in the context of polyphonic
onceForceFingeringToStem = \once \override Fingering.add-stem-support = ##t
pushFingeringDown = \override Voice.Fingering.extra-offset = #'(0.0 . -1.0 )
pushFingeringUp =   \override Voice.Fingering.extra-offset = #'(0.0 . 1.2 )
revertFingeringOffset = \revert Voice.Fingering.extra-offset
revertFingeringPadding = \revert Fingering.staff-padding
hideAccidental = \once \override Voice.Accidental.stencil = ##f
connectArpeggios = \set Staff.connectArpeggios = ##t

noteheadGreen = \override NoteHead.color = #green
noteheadBlue = \override NoteHead.color = #blue
noteheadRed = \override NoteHead.color = #red
noteheadMagenta = \override NoteHead.color = #magenta

hidePiano = \tweak stencil ##f\p  %usage: must add as <note>-\hidePiano
hideForte = \tweak stencil ##f\f  %usage: must add as <note>-\hidePiano

staffUp = \change Staff = "upper"
staffDown = \change Staff = "lower"

disallowCrossStaffBarLines = \override Staff.BarLine.allow-span-bar = ##f

setProportionalScore = {
		  	\override Score.SpacingSpanner.strict-note-spacing = ##t
			\set Score.proportionalNotationDuration = #(ly:make-moment 1/16)
}
setProportionalScoreCortchet = {
		  	\override Score.SpacingSpanner.strict-note-spacing = ##t
			\set Score.proportionalNotationDuration = #(ly:make-moment 1/18)
}

%{
	Function to shorten slurs
%}
shapeSlur = #(define-music-function (offsets) (list?)
    #{
        \override Slur.control-points = #(alter-slur-curve offsets)
    #})

#(define ((alter-slur-curve offsets) grob)
    ;; get default control-points
    (let ((coords (ly:slur::calc-control-points grob))
        (n 0))
    ;; add offsets to default coordinates
    (define loop (lambda (n)
        (set-car! (list-ref coords n)
            (+ (list-ref offsets (* 2 n))
                (car (list-ref coords n))))
        (set-cdr! (list-ref coords n)
            (+ (list-ref offsets (1+ (* 2 n)))
                (cdr (list-ref coords n))))
        (if (< n 3)
            (loop (1+ n)))))
    ;; return altered coordinates
    (loop n)
    coords))
     

%{
	%%USAGE OF shapeSlur FUNCTION
	
	\relative c'' {
	    c4( d)( e)( f)
	    \shapeSlur #'(0.2 0 0 0 0 0 0 -0.2)
	    c( d)( e)( f)
	    \revert Slur.control-points
	    c( d)( e)( f)
	}
%}

%To hide dynamics or other grobs, use "-\tweak stencil ##f"



%LESSON II: Aria

LessonIIAriaUpper = \relative c'' {
	\clef treble
	\tempo 4 = 110 \hideTempo
	\time 2/4
	\key c \major
	\repeat volta 2 {
		c4-1 c-1 |
		g'-4 g-4 |
		a-5 a-5 |
		g2-4 |
		f4-3 f-3|
		e-2 e-2| 
		d-1 d8-2 e-3|
		c2-1|
	}
	\repeat volta 2 {
		g'4-5\p g-5|
		f-4 f-4|
		e-3 e|
		d-2 d|
		g-5 g|
		f-4 f|
		e-3 e8-3 f-4|
		d2-2|
		c4-1\f c-1|
		g'-4 g|
		a-5 a|
		g2-4|
		f4-3 f-3|
		e-2 e-2|
		d-1 d8-2 e-3|
		c2-1
	}
}
LessonIIAriaLower = \relative c {
	\clef bass
	\time 2/4
	\key c \major
	\repeat volta 2 {
		c2-5|
		e-3|
		f-2|
		e4-3 c-5|
		g'2-1|
		c,-5|
		g'-1|
		c,-5|
	}
	\repeat volta 2 {
		e'4-1-\hidePiano g,-5|
		d'-1 g,-5|
		c-2 g-5|
		b-3 g-5|
		e'4-1 g,-5|
		d'-1 g,-5|
		c-2 g-5|
		b-3 g-5|
		c-1-\hideForte g-2|
		e-4 c-5|
		f2-2|
		e4-3 c-5|
		g'2-1|
		c,-5|
		g'4-1 g,-5|
		c2-3|
	}
}


%LESSON II - ARIA

\score { 
  \new PianoStaff <<
    \new Staff = "upper" \LessonIIAriaUpper
    \new Staff = "lower" \LessonIIAriaLower
  >>
  \layout { }	
}
