Orchestral samples used by src/features/theory/audio.ts (score editor, /compose)

Source: VSCO 2: Community Edition by Versilian Studios (Sam Gossner, Simon Dalzell), https://versilian-studios.com/vsco-community/
— repository https://github.com/sgossner/VSCO-2-CE. Licence: CC0 1.0 Universal (the repository's LICENSE file); the
authors ask for credit to Versilian Studios and a link to the VSCO: CE homepage, given here and in the editor.

Used (the library's SFZ instruments): ViolinEnsSusVib, ViolaEnsSusVib, CelloEnsSusVib, ContrabassSusVB, FluteSusVib,
OboeSusVib, ClarinetSus, BassoonSus, FHornSus, TrumpetSusVib, TromboneSus, TubaSus; the softest (p) and loudest (f)
take of each pitch (file name = MIDI number; one take twice where the library has one layer).
Changes (scripts/instruments/build.py): leading silence cut, mixed to mono, one level per instrument, cut at the loop
end (4.6 s, shorter for winds from their shortest take) + 0.3 s, the last 0.5 s before the loop end crossfaded into
the audio before the loop start; Opus (.ogg) and AAC (.m4a).
