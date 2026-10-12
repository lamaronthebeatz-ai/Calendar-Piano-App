/**
 * Recordings on YouTube for the composer pages, two at most per person. Each video id was
 * seen verbatim in a web-search result whose title names the work (youtube.com itself can't be
 * reached from where this was compiled); official channels were preferred. A performer is
 * credited only when the video's title names them. Checked October 2026.
 */
export const COMPOSER_VIDEOS: Record<string, [string, string][]> = {
  "Hildegard von Bingen": [
    ["77M2pkkdH10", "*O virtus Sapientiae* · Sequentia"],
    ["Ursh0S6YXtk", "*Ordo Virtutum (Scene 4)* · Sequentia"],
  ],
  "Pérotin": [
    ["Q2JvIyStzNA", "*Viderunt omnes* (organum bốn bè)"],
  ],
  "Guillaume de Machaut": [
    ["1gEV42RKf6E", "*Messe de Nostre Dame* · Ensemble Organum (Marcel Pérès)"],
  ],
  "Guillaume Du Fay": [
    ["6aBxnohImzY", "*Nuper rosarum flores* · Chronos ensemble"],
  ],
  "Johannes Ockeghem": [
    ["9QuCOmjMRg0", "*Missa prolationum (Kyrie)* · The Hilliard Ensemble"],
    ["rzBhYMvnMKQ", "*Deo gratias* · Huelgas Ensemble, Paul Van Nevel"],
  ],
  "Josquin des Prez": [
    ["kyGlFisv7Ng", "*Ave Maria... virgo serena* · VOCES8"],
    ["EHdnmi4eOvs", "*Missa Pange lingua (Agnus Dei 3)*"],
  ],
  "Giovanni Pierluigi da Palestrina": [
    ["965WSmercZQ", "*Missa Papae Marcelli (Kyrie)* · Sistine Chapel Choir, Massimo Palombella"],
  ],
  "Orlande de Lassus": [
    ["oriWcQ79lXY", "*Prophetiae Sibyllarum (Carmina chromatico)* · The Hilliard Ensemble"],
  ],
  "Thomas Tallis": [
    ["qVFp5bYj6kA", "*Spem in alium* · The Tallis Scholars"],
  ],
  "William Byrd": [
    ["X33Lb-iQezI", "*Mass for Five Voices: Agnus Dei*"],
    ["gQEB1pXKFqk", "*Ave verum corpus (excerpt)* · King's College Choir, Cambridge"],
  ],
  "Tomás Luis de Victoria": [
    ["BaZO39RRScM", "*Requiem (Officium defunctorum 1605)* · Collegium Vocale Gent, Philippe Herreweghe"],
    ["8pFRuMwt-BY", "*Requiem 1605: I. Introitus* · Westminster Cathedral Choir, David Hill"],
  ],
  "John Dowland": [
    ["u3clX2CJqzs", "*Flow my tears (Lachrimae)* · Phoebe Jevtovic Rosquist (soprano), David Tayler (lute)"],
    ["3B0wcQif-bI", "*Lachrimae Antiquae (Lachrimae, 1604)* · Jordi Savall, Hespèrion XXI"],
  ],
  "Carlo Gesualdo": [
    ["TFJpgdZmUzQ", "*Moro, lasso, al mio duolo* · Collegium Vocale Gent, Philippe Herreweghe"],
  ],
  "Claudio Monteverdi": [
    ["_p1c6eJCC8o", "*Vespro della Beata Vergine 1610* · Monteverdi Choir, English Baroque Soloists, John Eliot Gardiner (Chapelle Royale, Versailles 2014)"],
    ["aI20ONfVAug", "*L'Orfeo (complete, Liceu 2002)* · Le Concert des Nations, La Capella Reial de Catalunya, Jordi Savall"],
  ],
  "Heinrich Schütz": [
    ["vTiMOsMsv2I", "*Saul, Saul, was verfolgst du mich SWV 415* · English Baroque Soloists, John Eliot Gardiner"],
    ["ikNYP6H7Ilw", "*Musikalische Exequien* · Philippe Herreweghe"],
  ],
  "Arcangelo Corelli": [
    ["DV5hkE_D_q4", "*Concerto grosso Op.6 No.8 'Christmas Concerto' (complete)* · Voices of Music"],
    ["muiK_0XWR-Y", "*Concerto grosso Op.6 No.8* · Accademia degli Astrusi, Federico Ferri"],
  ],
  "Henry Purcell": [
    ["f00nKLzCRrI", "*Dido's Lament 'When I am laid in earth'* · Joyce DiDonato"],
  ],
  "Jean-Baptiste Lully": [
    ["X54Btzutlj0", "*Marche pour la cérémonie des Turcs (Le Bourgeois gentilhomme)* · Vincent Dumestre (Le Poème Harmonique), 2004"],
  ],
  "François Couperin": [
    ["CVy8EmOsF4M", "*Les Barricades mystérieuses* · Nathaniel Mander (harpsichord)"],
  ],
  "Jean-Philippe Rameau": [
    ["2sPC8HsXxik", "*Les Indes galantes: Les Sauvages 'Forêts paisibles'* · Les Arts Florissants, Juilliard415, Sandrine Piau, Lisandro Abadie"],
  ],
  "Antonio Vivaldi": [
    ["ASSbHLQ3KGY", "*The Four Seasons: Spring* · Il Giardino Armonico (Enrico Onofri)"],
  ],
  "Georg Philipp Telemann": [
    ["o9hNUpb9PHc", "*Concerto for recorder and viola da gamba TWV 52:a1* · Bremer Barockorchester (BBO)"],
  ],
  "Johann Sebastian Bach": [
    ["LHjbRMIIhuM", "*Brandenburg Concerto No. 5 BWV 1050* · Netherlands Bach Society, Shunske Sato"],
    ["3FLbiDrn8IE", "*Mass in B minor BWV 232* · Netherlands Bach Society, Jos van Veldhoven"],
  ],
  "George Frideric Handel": [
    ["w_ccuyPO1W4", "*Messiah: Hallelujah* · Tenebrae Choir, Academy of Ancient Music, Nigel Short"],
    ["i3FXcznStUI", "*Messiah HWV 56 (complete)* · Collegium 1704 & Collegium Vocale 1704, Václav Luks"],
  ],
  "Domenico Scarlatti": [
    ["bp6__18wXEg", "*Sonata in D minor K.141* · Jean Rondeau"],
    ["5xBpx-Tu3j4", "*Sonata in E major K.380* · Vladimir Horowitz (Moscow 1986)"],
  ],
  "Christoph Willibald Gluck": [
    ["Z8dIevs0VlU", "*Orfeo ed Euridice: 'Che farò senza Euridice'* · Philippe Jaroussky"],
  ],
  "Carl Philipp Emanuel Bach": [
    ["LrErIvIMWO0", "*Symphony in C major Wq 182/3 (Hamburg)* · Croatian Baroque Ensemble"],
  ],
  "Johann Stamitz": [
    ["kgSzMHVdUvc", "*Clarinet Concerto in B-flat major (ca.1755)* · Alan Hacker (classical clarinet)"],
    ["HdTRcS_wlLw", "*Three Mannheim Symphonies* · Taras Demchyshyn"],
  ],
  "Joseph Haydn": [
    ["ympNv3Wbv0M", "*Symphony No. 94 'Surprise' (4th mvt)* · Berliner Philharmoniker, Mariss Jansons"],
    ["8pI9lLiYHuc", "*String Quartet Op.76 No.3 'Emperor'* · The Amber Quartet"],
  ],
  "Wolfgang Amadeus Mozart": [
    ["QyQ-POuTNn8", "*Symphony No. 40 K.550* · hr-Sinfonieorchester, Andrés Orozco-Estrada"],
    ["fBEN5lyy_Xg", "*Requiem K.626* · Berliner Philharmoniker, Claudio Abbado"],
  ],
  "Muzio Clementi": [
    ["dpJ-42sN0eQ", "*Sonatina Op.36 No.1: II. Andante* · Lang Lang"],
  ],
  "Ludwig van Beethoven": [
    ["fuPrcnpIRx8", "*Symphony No. 5* · hr-Sinfonieorchester, Andrés Orozco-Estrada"],
    ["fzyO3fLV5O0", "*Symphony No. 9* · London Symphony Orchestra, Sir Antonio Pappano"],
  ],
  "Franz Schubert": [
    ["oBPwpX3VDZE", "*Symphony 'Unfinished' D.759* · hr-Sinfonieorchester, Christoph Eschenbach"],
    ["lTjXk-cPkrY", "*Erlkönig D.328* · Matthias Goerne, Andreas Haefliger"],
  ],
  "Frédéric Chopin": [
    ["sU4CIW69-Ts", "*Ballade No. 1 in G minor, Op. 23* · Krystian Zimerman"],
    ["0RyWDc5_sw8", "*Polonaise in A-flat major, Op. 53 \"Heroic\"* · Rafał Blechacz"],
  ],
  "Felix Mendelssohn": [
    ["R_3da0fPLQs", "*Violin Concerto in E minor, Op. 64* · Augustin Hadelich, hr-Sinfonieorchester, Sebastian Weigle"],
    ["YICUeGM-YIc", "*Songs without Words, Op. 62 No. 6 \"Spring Song\"* · Roberto Prosseda"],
  ],
  "Carl Maria von Weber": [
    ["O9o9cEvgySE", "*Der Freischütz – Overture* · Rafael Frühbeck de Burgos"],
  ],
  "Robert Schumann": [
    ["7yMHrcsNPqQ", "*Kinderszenen, Op. 15 – No. 7 Träumerei* · Martha Argerich"],
    ["fSG1CTVD4fo", "*Carnaval, Op. 9* · Claudio Arrau (1961)"],
  ],
  "Clara Schumann": [
    ["2mQUHhwovRw", "*Piano Concerto in A minor, Op. 7* · Kit Armstrong"],
  ],
  "Franz Liszt": [
    ["z1_KA4nDewk", "*La campanella (Grandes Études de Paganini, S. 141 No. 3)* · Daniil Trifonov"],
    ["AG7Gu9G_w8o", "*Liebestraum No. 3 in A-flat, S. 541* · Lang Lang (live)"],
  ],
  "Hector Berlioz": [
    ["AgXW-57UDMc", "*Symphonie fantastique* · hr-Sinfonieorchester, Andrés Orozco-Estrada"],
  ],
  "Richard Wagner": [
    ["fzJzQ7kAVxQ", "*Tristan und Isolde – Prelude and Liebestod* · Berliner Philharmoniker, Claudio Abbado (2001)"],
    ["DfAJsPce8lk", "*Die Walküre – Ride of the Valkyries* · Berliner Philharmoniker, Herbert von Karajan"],
  ],
  "Giuseppe Verdi": [
    ["QQqjlcyDz6c", "*La traviata – Libiamo ne' lieti calici (Brindisi)* · Daniel Harding (Teatro La Fenice New Year's concert)"],
    ["02zJyTIJPMA", "*Messa da Requiem – Dies irae* · The Cleveland Orchestra and Chorus (excerpt)"],
  ],
  "Johannes Brahms": [
    ["g_Ck8OPNSJo", "*Symphony No. 4 in E minor, Op. 98* · Berliner Philharmoniker, Simon Rattle"],
    ["QAMxkietiik", "*Hungarian Dance No. 5* · Berliner Philharmoniker, Claudio Abbado"],
  ],
  "Pyotr Ilyich Tchaikovsky": [
    ["wZBz_zpzreA", "*Piano Concerto No. 1* · Arcadi Volodos, Berliner Philharmoniker, Paavo Järvi"],
    ["SVnF3x44rvU", "*Symphony No. 6 \"Pathétique\"* · hr-Sinfonieorchester, Lionel Bringuier"],
  ],
  "Antonín Dvořák": [
    ["bprw42vBUMg", "*Symphony No. 9 \"From the New World\"* · hr-Sinfonieorchester, Alain Altinoglu"],
  ],
  "Bedřich Smetana": [
    ["W5jCAelYsR0", "*Má vlast – Vltava (The Moldau)* · Chamber Orchestra of Europe, Nikolaus Harnoncourt (styriarte 2010)"],
  ],
  "Edvard Grieg": [
    ["pZtKXXrm-Xs", "*Piano Concerto in A minor, Op. 16* · Jan Lisiecki, hr-Sinfonieorchester, Alain Altinoglu"],
    ["IoBQSuXm6Yc", "*Peer Gynt Suite No. 1 – Morning Mood; In the Hall of the Mountain King*"],
  ],
  "Modest Mussorgsky": [
    ["gexw3NUTVxk", "*Pictures at an Exhibition (orch. Ravel)* · hr-Sinfonieorchester, Alain Altinoglu"],
  ],
  "Nikolai Rimsky-Korsakov": [
    ["HCfGTuo_u5g", "*Scheherazade, Op. 35* · Tokyo Metropolitan Symphony Orchestra, Alan Gilbert"],
  ],
  "Camille Saint-Saëns": [
    ["WCmAIMgNon4", "*Danse macabre, Op. 40* · Netherlands Symphony Orchestra"],
    ["eo2y23NVOg8", "*The Carnival of the Animals – The Swan (cello & piano)* · Brooklyn Duo"],
  ],
  "Gabriel Fauré": [
    ["flboe048gn4", "*Requiem, Op. 48* · Michel Corboz"],
  ],
  "Gustav Mahler": [
    ["39OFMgh6JwY", "*Symphony No. 5 – IV. Adagietto* · Berliner Philharmoniker, Simon Rattle"],
    ["2itb0r9MQco", "*Symphony No. 2 \"Resurrection\"* · Berliner Philharmoniker, Gustavo Dudamel, Nadine Sierra, Okka von der Damerau"],
  ],
  "Richard Strauss": [
    ["GfwAPg4rQQE", "*Also sprach Zarathustra, Op. 30* · hr-Sinfonieorchester, Andrés Orozco-Estrada"],
  ],
  "Giacomo Puccini": [
    ["cWc7vYjgnTs", "*Turandot – Nessun dorma* · Luciano Pavarotti (The Three Tenors in Concert 1994)"],
    ["bfozlHuZD3c", "*La bohème – Sì, mi chiamano Mimì* · Nicole Car, The Royal Opera"],
  ],
  "Claude Debussy": [
    ["8UAYCubihlc", "*Prélude à l'après-midi d'un faune* · hr-Sinfonieorchester, Alain Altinoglu"],
    ["jRYNaLvtMd4", "*Suite bergamasque – III. Clair de lune* · Lang Lang"],
  ],
  "Maurice Ravel": [
    ["rukOXP3YcwQ", "*Boléro* · hr-Sinfonieorchester, Alain Altinoglu"],
    ["2_c8JRCKq1A", "*Pavane pour une infante défunte (orchestral)* · Orchestre national de France, Dalia Stasevska"],
  ],
  "Erik Satie": [
    ["Mo9ndTg3ako", "*Gymnopédie No. 1*"],
  ],
  "Sergei Rachmaninoff": [
    ["zOCAGscOZ2A", "*Piano Concerto No. 2 in C minor, Op. 18* · Yuja Wang, Los Angeles Philharmonic, Gustavo Dudamel"],
    ["qnEfzOHdOXM", "*Prelude in C-sharp minor, Op. 3 No. 2* · Nikolai Lugansky"],
  ],
  "Alexander Scriabin": [
    ["bVBvn7Ql9NY", "*Étude in D-sharp minor, Op. 8 No. 12* · Vladimir Horowitz (1962)"],
  ],
  "Arnold Schoenberg": [
    ["L3vclwWOefM", "*Verklärte Nacht, Op. 4 (string sextet)* · Janine Jansen and colleagues (International Chamber Music Festival Utrecht)"],
    ["bd2cBUJmDr8", "*Pierrot lunaire, Op. 21* · Chicago Symphony Orchestra musicians (Beyond the Score)"],
  ],
  "Alban Berg": [
    ["ldvZ1EVUYxA", "*Violin Concerto \"To the Memory of an Angel\"* · Frank Peter Zimmermann, Gustav Mahler Jugendorchester, Daniele Gatti"],
  ],
  "Anton Webern": [
    ["NB5UzyGO5uA", "*Six Pieces for Orchestra, Op. 6* · Wiener Philharmoniker, Pierre Boulez (2001, live)"],
    ["_pcxbumjSEQ", "*Passacaglia, Op. 1*"],
  ],
  "Igor Stravinsky": [
    ["EkwqPJZe8ms", "*The Rite of Spring* · London Symphony Orchestra, Simon Rattle (Barbican 2017)"],
  ],
  "Béla Bartók": [
    ["hd744RSVAb0", "*Concerto for Orchestra, Sz. 116* · Berliner Philharmoniker, David Zinman"],
  ],
  "Sergei Prokofiev": [
    ["ljOMXgfflRI", "*Romeo and Juliet – Montagues and Capulets (Dance of the Knights)*"],
  ],
  "Dmitri Shostakovich": [
    ["fd16sNr9T2Q", "*The Second Waltz (Waltz No. 2)* · André Rieu, Johann Strauss Orchestra"],
  ],
  "George Gershwin": [
    ["v4EBV9IEx5A", "*Rhapsody in Blue* · Leonard Bernstein, New York Philharmonic (1976)"],
  ],
  "Aaron Copland": [
    ["QL9G5pjQPt0", "*Appalachian Spring (suite)* · Berliner Philharmoniker, Marin Alsop"],
  ],
  "Olivier Messiaen": [
    ["QAQmZvxVffY", "*Quatuor pour la fin du temps* · Antje Weithaas, Sol Gabetta, Sabine Meyer, Bertrand Chamayou"],
  ],
  "John Cage": [
    ["AWVUp12XPpU", "*4'33\"* · Berliner Philharmoniker, Kirill Petrenko"],
  ],
  "Steve Reich": [
    ["ZXJWO2FQ16c", "*Music for 18 Musicians* · eighth blackbird (MCA Chicago, 2011)"],
  ],
  "Arvo Pärt": [
    ["n37bNmVggtU", "*Spiegel im Spiegel* · Renaud Capuçon, Guillaume Bellom"],
  ],
  "Leonard Bernstein": [
    ["dUSPzL7lsY8", "*Symphonic Dances from West Side Story* · hr-Sinfonieorchester, Andrés Orozco-Estrada"],
  ],
}
