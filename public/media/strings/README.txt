String samples used by src/features/theory/strings.ts (score editor, /compose)

Source: VSCO 2: Community Edition by Versilian Studios (Sam Gossner, Simon Dalzell), https://versilian-studios.com/vsco-community/
— repository https://github.com/sgossner/VSCO-2-CE. Licence: CC0 1.0 Universal (the repository's LICENSE file); the
authors ask for credit to Versilian Studios and a link to the VSCO: CE homepage, given here and in the editor.

Used: Violin Section, Viola Section and Cello Section "sustain vibrato", Solo Contrabass "SusVib"; a soft (p) and a
loud (f) take of each pitch, pitches as in the library's own SFZ files (file name = MIDI number).
Changes (scripts/strings/build.py): leading silence cut, mixed to mono, one level per instrument, cut at 4.6 s with
the last 0.5 s crossfaded into the audio before 1.4 s so 1.4–4.6 s loops for long notes; Opus (.ogg) and AAC (.m4a).
