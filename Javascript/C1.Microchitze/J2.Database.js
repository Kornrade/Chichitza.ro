/*----------------------------------------------------------------------------------------*\
| This file contains the questions database. There are 3 arrays defined in this page:      |
| dbQList contains the questions                                                           |
| dbQImage contains database images associated with each question                          |
| dbAImage contains database images associated with each answer                            |
| dbExpln  contains database explanations associated with each answer                      |
|                                                                                          |
|		Note: All are in fact arrays (=> dbQList and the others are two-dimensional)       |
|				dbQList[j][k] stores question j in language k                              |
|				So far 0 = ro; 1 = en; 2 = de; (used in J3.Functions::retranslateQuestions) |
|																						   |
| dbAList contains the correct answers or parts of the answers that need to be checked     |
| dbACrit contains the criterion for checking answers                                      |
|                                                                                           |
| Possible criteria:                                                                       |
|					 0 = must match       (..text..)                                       |
|					 1 = must start with  (..text..)                                       |
|					 2 = must end   with  (..text..)                                       |
|					 3 = must contain     (..text..)                                       |
|					 4 = must not contain (..text..)                                       |
|                                                                                          |
|					10 = must match       (..text..), letter cases ignored                 |
|					11 = must start with  (..text..), letter cases ignored                 |
|					12 = must end   with  (..text..), letter cases ignored                 |
|					13 = must contain     (..text..), letter cases ignored                 |
|					14 = must not contain (..text..), letter cases ignored                 |
|                                                                                          |
|					20 = must be equal to       (..number..)   ==                          |
|					21 = must be greater than   (..number..)   >=                          |
|					22 = must be lower than     (..number..)   <=                          |
|					23 = must be between        (..number..number..)                       |
|					24 = must be different from	(..number..)   !=                          |
|                                                                                          |
|		Note: All dbAList elements are in fact arrays (=> dbAList is two-dimensional)      |
|				The k possible answers for question j are stored in dbAList[j][k]          |
|				They must obey their respective criteria dbACrit[j][k].                    |
|		Exception is dbACrit[j] = 23 (answer must be a number between .. and ..), where    |
|				dbAList[j][0] is the lower bound and dbAList[j][1] is the upper bound.     |
\*----------------------------------------------------------------------------------------*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
    HTML CODES FOR ROMANIAN: 
                Display		Numerical	Hex		Description
                A~ (MAR)    &#258;      &#x102; Capital A-breve
                a~ (mar)    &#259;      &#x103; Lowercase a-breve
                A^ (GAT)    &#194;      &#xC2;  Capital A-circumflex
                a^ (gat)    &#226;      &#xE2;  Lowercase a-circumflex
                I^ (URI)    &#206;      &#xCE;  Capital I-circumflex
                i^ (uri)    &#238;      &#xEE;  Lowercase i-circumflex
                Sh (STI)    &#350;      &#x15E; Capital S-cedilla
                sh (sti)    &#351;      &#x15F; Lowercase s-cedilla
                Tz (TIE)                &#x21A; Capital T-comma
                tz (tie)                &#x21B; Lowercase t-comma
                Tz (TIE)    &#354;      &#x162; Capital T-cedilla
                tz (tie)    &#355;      &#x163; Lowercase t-cedilla

    HTML CODES FOR GERMAN: 
                Display	Friendly	Numerical	Description
                        &Auml;		&#196;		Capital A-umlaut
                        &auml;		&#228;		Lowercase a-umlaut
                        &Eacute;	&#201;		Capital E-acute
                        &eacute;	&#233;		Lowercase E-acute
                        &Ouml;		&#214;		Capital O-umlaut
                        &ouml;		&#246;		Lowercase o-umlaut
                        &Uuml;		&#220;		Capital U-umlaut
                        &uuml;		&#252;		Lowercase u-umlaut
                        &szlig;		&#223;		SZ ligature
                        &laquo;		&#171;		Left angle quotes
                        &raquo;		&#187;		Right angle quotes
                                    &#132;		Left lower quotes
                                    &#147;		Left quotes
                                    &#148;		Right quotes
                                    &#176;		Degree sign (Grad)
                        &euro;		&#128;		Euro
                        &pound;		&#163;		Pound Sterling
\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* GLOBAL VARS USED IN THIS FILE:*/
var dbQList, dbQHint, dbQImage, dbQImageSrc, dbAList, dbAType, dbACrit, dbAnswer, dbAImage, dbAImageSrc, dbExpln, dbRefer;

// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSIHOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[0] = [];
dbQList[  0][0] = "C&#xE2;&#x163;i ani ai?"; 
dbQList[  0][1] = "How old are you?"; 
dbQList[  0][2] = "Wie alt bist du?"; 
                        dbAType[0] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[0] = []; dbAList[0][0] = 5; dbAList[0][1] = 120;
                        dbACrit[0] = []; dbACrit[0][0] = 23;
                        dbAnswer[0] = [];
                        dbAnswer[0][0] = "R&#x103;spuns corect: &#xEE;ntre 5 &#x15F;i 120 ani"; //plaintext ro answer
                        dbAnswer[0][1] = "Right answer: between 5 and 120 years"; //plaintext en answer
                        dbAnswer[0][2] = "Richtige Antwort: zwischen 5 und 120 Jahren"; //plaintext de answer
                        dbExpln[0] = [];
                        dbExpln[0][0] = ""; //explanation ro
                        dbExpln[0][1] = ""; //explanation en
                        dbExpln[0][2] = ""; //explanation de
                        dbRefer[0] = [];
                        dbRefer[0][0] = ""; //references for ro explanation
                        dbRefer[0][1] = ""; //references for en explanation
                        dbRefer[0][2] = ""; //references for de explanation
                        dbQHint[0] = [];
                        dbQHint[0][0] = "Bine-ai venit &#xEE;n lumea microchitzelor! <br/> Deoarece probabil este testul t&#x103;u introductiv, iat&#x103; cateva ponturi: <br/><br/> Unele &#xEE;ntreb&#x103;ri accept&#x103; doar r&#x103;spuns numeric format din cifrele 0 p&#xE2;n&#x103; la 9, op&#x21B;ional punct \".\" (pentru partea zecimal&#x103;) &#x15F;i op&#x21B;ional minus (pentru numere negative)."; //hint ro
                        dbQHint[0][1] = "Welcome to the world of microteasers! <br/> As this is probably your introductory test, here are some hints: <br/><br/> Some questions (like this one) only allow numeric inputs formed from the digits 0 through 9, an optional point \".\" (for decimal part) and an optional minus \"-\" (for negative numbers). <br/> The answer here should be your age in years."; //hint en
                        dbQHint[0][2] = "Wilkommen in der Welt der Mikroknobeleien! <br/> Da es wahrscheinlich dein Einf&#252;rungstest ist, hier sind einige Hinweise: <br/><br/> Manche Fragen (wie diese hier) erlauben nur numerische Eingaben, die von Zahlen 0 bis 9, Punkt \".\" (f&#252;r Dezimalzahlen) und Minus \"-\" (f&#252;r negative Zahlen) zusammengesetzt sind. <br/> Die Antwort dieser Frage sollte dein Alter in Jahren sein."; //hint de
                        dbQImage[0] = []; dbQImageSrc[0] = []; 
                        dbQImage[0][0] = "Images/C1.Microchitze/Img000HowOld.png";	dbQImageSrc[0][0] = "www.afuntab.com";
                        dbQImage[0][1] = "Images/C1.Microchitze/Img000HowOld.png";	dbQImageSrc[0][1] = "www.afuntab.com";
                        dbQImage[0][2] = "Images/C1.Microchitze/Img000HowOld.png";	dbQImageSrc[0][2] = "www.afuntab.com";
                        dbAImage[0] = []; dbAImageSrc[0] = [];
                        dbAImage[0][0] = "Images/C1.Microchitze/Img000HowOld.png";  dbAImageSrc[0][0] = "www.afuntab.com";
                        dbAImage[0][1] = "Images/C1.Microchitze/Img000HowOld.png";  dbAImageSrc[0][1] = "www.afuntab.com";
                        dbAImage[0][2] = "Images/C1.Microchitze/Img000HowOld.png";  dbAImageSrc[0][2] = "www.afuntab.com";
dbQList[1] = [];
dbQList[  1][0] = "Ce greutate ai?"; 
dbQList[  1][1] = "What is your weight?"; 
dbQList[  1][2] = "Was ist dein Gewicht?"; 
                        dbAType[1] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[1] = []; dbAList[1][0] = 250; dbAList[1][1] = 2500;
                        dbACrit[1] = []; dbACrit[1][0] = 23;
                        dbAnswer[1] = [];
                        dbAnswer[1][0] = "R&#x103;spuns corect: &#xEE;ntre 250N &#x15F;i 2500N"; //plaintext ro answer
                        dbAnswer[1][1] = "Right answer: between 250N and 2500N"; //plaintext en answer
                        dbAnswer[1][2] = "Richtige Antwort: zwischen 250N und 2500N"; //plaintext de answer
                        dbExpln[1] = [];
                        dbExpln[1][0] = "Un om cu <b>masa</b> de 100kg are aproximativ <b>greutatea</b> de 980N(Newtoni) pe P&#x103;m&#xE2;nt &#x15F;i 162N pe Lun&#x103;, depinz&#xE2;nd de accelera&#x163;ia gravita&#x163;ional&#x103; a locului.<sup>[1]</sup>"; //explanation ro
                        dbExpln[1][1] = "A man with the <b>mass</b> of 100kg has a <b>weight</b> of approximately 980N(Newtons) on Earth and 162N on the Moon,depending on the local gravitational acceleration.<sup>[1]</sup>"; //explanation en
                        dbExpln[1][2] = "Ein Mann, der die <b>Masse</b> von 100kg hat, hat ein <b>Gewicht</b> von ungef&#228;hr 980N(Newton) auf der Erde und 162N auf dem Mond, abh&#228;ngig von der lokalen Gravitationsbeschleunigung.<sup>[1]</sup>"; //explanation de
                        dbRefer[1] = [];
                        dbRefer[1][0] = "<a href='http://ro.wikipedia.org/wiki/Greutate' target='_blank'>[1] ro.wikipedia.org/wiki/Greutate</a>"; //references for ro explanation
                        dbRefer[1][1] = "<a href='http://en.wikipedia.org/wiki/Weight' target='_blank'>[1] en.wikipedia.org/wiki/Weight</a>"; //references for en explanation
                        dbRefer[1][2] = "<a href='http://de.wikipedia.org/wiki/Gewichtskraft' target='_blank'>[1] de.wikipedia.org/wiki/Gewichtskraft</a>"; //references for de explanation
                        dbQHint[1] = [];
                        dbQHint[1][0] = "Pont: in lipsa altor precizari, raspunsurile ar trebui sa tina cont de Sistemul International de Unitati (SI)..."; //hint ro
                        dbQHint[1][1] = "Hint: unless specified otherwise, the answers should consider the International System of Units(SI)..."; //hint en
                        dbQHint[1][2] = "Hinweis: wenn nicht anders angewiesen, die Antworten sollen das Internationalen Einheitensystem (SI) ber&#252;cksichtigen..."; //hint de
                        dbQImage[1] = []; dbQImageSrc[1] = []; 
                        dbQImage[1][0] = "Images/C1.Microchitze/Img001Weight.png";	dbQImageSrc[1][0] = "www.phoebeleslie.com";
                        dbQImage[1][1] = "Images/C1.Microchitze/Img001Weight.png";	dbQImageSrc[1][1] = "www.phoebeleslie.com";
                        dbQImage[1][2] = "Images/C1.Microchitze/Img001Weight.png";	dbQImageSrc[1][2] = "www.phoebeleslie.com";
                        dbAImage[1] = []; dbAImageSrc[1] = [];
                        dbAImage[1][0] = "Images/C1.Microchitze/Img001MassWeight.png";  dbAImageSrc[1][0] = "www.thecalculatorsite.com";
                        dbAImage[1][1] = "Images/C1.Microchitze/Img001MassWeight.png";  dbAImageSrc[1][1] = "www.thecalculatorsite.com";
                        dbAImage[1][2] = "Images/C1.Microchitze/Img001MassWeight.png";  dbAImageSrc[1][2] = "www.thecalculatorsite.com";
dbQList[2] = [];
dbQList[  2][0] = "In mod normal, bei."; 
dbQList[  2][1] = "You drink habitually."; 
dbQList[  2][2] = "Du trinks gew&#246;hnlich."; 
                        dbAType[2] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[2] = []; dbAList[2][0] = "f";
                        dbACrit[2] = []; dbACrit[2][0] = 14;
                        dbAnswer[2] = [];
                        dbAnswer[2][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[2][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[2][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[2] = [];
                        dbExpln[2][0] = "<b>a bea</b> vb. II. 1. (Tranz.) A &#xEE;nghi&#x21B;i un lichid.<sup>[1]</sup>"; //explanation ro
                        dbExpln[2][1] = "<b>to drink</b> verb 1. a. To take a liquid into your mouth and swallow it; imbibe.<sup>[1]</sup>"; //explanation en
                        dbExpln[2][2] = "<b>trinken</b> starkes Verb 1. a. Fl&#252;ssigkeit, ein Getr&#228;nk zu sich nehmen.<sup>[1]</sup>"; //explanation de
                        dbRefer[2] = [];
                        dbRefer[2][0] = "<a href='http://dexonline.ro/definitie/bea' target='_blank'>[1] dexonline.ro/bea</a>"; //references for ro explanation
                        dbRefer[2][1] = "<a href='http://www.merriam-webster.com/dictionary/drink' target='_blank'>[1] merriam-webster.com/drink</a>"; //references for en explanation
                        dbRefer[2][2] = "<a href='http://www.duden.de/rechtschreibung/trinken' target='_blank'>[1] duden.de/trinken</a>"; //references for de explanation
                        dbQHint[2] = [];
                        dbQHint[2][0] = "Pont: S&#x103;ge&#x21B;ile St&#xE2;nga &#x15F;i Dreapta pot fi folosite pentru a selecta r&#x103;spunsul."; //hint ro
                        dbQHint[2][1] = "Hint: The Left and Right arrows may be used to select the answer."; //hint en
                        dbQHint[2][2] = "Hinweis: Man kann die Antwort mit hilfe der Links- und Rechtspfeile w&#228;hlen."; //hint de
                        dbQImage[2] = []; dbQImageSrc[2] = []; 
                        dbQImage[2][0] = "Images/C1.Microchitze/Img002Drink.png";	dbQImageSrc[2][0] = "openclipart.org";
                        dbQImage[2][1] = "Images/C1.Microchitze/Img002Drink.png";	dbQImageSrc[2][1] = "openclipart.org";
                        dbQImage[2][2] = "Images/C1.Microchitze/Img002Drink.png";	dbQImageSrc[2][2] = "openclipart.org";
                        dbAImage[2] = []; dbAImageSrc[2] = [];
                        dbAImage[2][0] = "Images/C1.Microchitze/Img002DrinkAnswer.png";  dbAImageSrc[2][0] = "7428.net";
                        dbAImage[2][1] = "Images/C1.Microchitze/Img002DrinkAnswer.png";  dbAImageSrc[2][1] = "7428.net";
                        dbAImage[2][2] = "Images/C1.Microchitze/Img002DrinkAnswer.png";  dbAImageSrc[2][2] = "7428.net";
dbQList[3] = [];
dbQList[  3][0] = "In mod normal, fumezi."; 
dbQList[  3][1] = "You smoke habitually."; 
dbQList[  3][2] = "Du rauchst gew&#246;hnlich."; 
                        dbAType[3] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[3] = []; dbAList[3][0] = "f"; dbAList[3][1] = "f";
                        dbACrit[3] = []; dbACrit[3][0] = 13; dbACrit[3][1] = 14;
                        dbAnswer[3] = [];
                        dbAnswer[3][0] = "R&#x103;spuns corect: oricare"; //plaintext ro answer
                        dbAnswer[3][1] = "Right answer: any"; //plaintext en answer
                        dbAnswer[3][2] = "Richtige Antwort: beliebig"; //plaintext de answer
                        dbExpln[3] = [];
                        dbExpln[3][0] = ""; //explanation ro
                        dbExpln[3][1] = ""; //explanation en
                        dbExpln[3][2] = ""; //explanation de
                        dbRefer[3] = [];
                        dbRefer[3][0] = ""; //references for ro explanation
                        dbRefer[3][1] = ""; //references for en explanation
                        dbRefer[3][2] = ""; //references for de explanation
                        dbQHint[3] = [];
                        dbQHint[3][0] = "Pont: Urm&#x103;toarea &#xEE;ntrebare f&#x103;r&#x103; r&#x103;spuns poate fi afi&#x15F;at&#x103; prin ap&#x103;sarea tastei \"Enter\"."; //hint ro
                        dbQHint[3][1] = "Hint: The next unanswered question can be displayed by pressing \"Enter\"."; //hint en
                        dbQHint[3][2] = "Hinweis: Die n&#228;chste unbeantwortete Frage kann durch \"Enter\" dr&#252;cken gezeigt werden."; //hint de
                        dbQImage[3] = []; dbQImageSrc[3] = []; 
                        dbQImage[3][0] = "Images/C1.Microchitze/Img003Cigarette.png";	dbQImageSrc[3][0] = "www.zedge.net/";
                        dbQImage[3][1] = "Images/C1.Microchitze/Img003Cigarette.png";	dbQImageSrc[3][1] = "www.zedge.net/";
                        dbQImage[3][2] = "Images/C1.Microchitze/Img003Cigarette.png";	dbQImageSrc[3][2] = "www.zedge.net/";
                        dbAImage[3] = []; dbAImageSrc[3] = [];
                        dbAImage[3][0] = "Images/C1.Microchitze/Img003Ashtray.png";  dbAImageSrc[3][0] = "www.aliexpress.com";
                        dbAImage[3][1] = "Images/C1.Microchitze/Img003Ashtray.png";  dbAImageSrc[3][1] = "www.aliexpress.com";
                        dbAImage[3][2] = "Images/C1.Microchitze/Img003Ashtray.png";  dbAImageSrc[3][2] = "www.aliexpress.com";
dbQList[4] = [];
dbQList[  4][0] = "In mod normal, auzi voci."; 
dbQList[  4][1] = "You hear voices habitually."; 
dbQList[  4][2] = "Du h&#246;rst Stimmen gew&#246;hnlich."; 
                        dbAType[4] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[4] = []; dbAList[4][0] = "f";
                        dbACrit[4] = []; dbACrit[4][0] = 14;
                        dbAnswer[4] = [];
                        dbAnswer[4][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[4][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[4][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[4] = [];
                        dbExpln[4][0] = "... vocile oamenilor cu care interac&#x21B;ionezi."; //explanation ro
                        dbExpln[4][1] = "... the voices of the persons you interact with."; //explanation en
                        dbExpln[4][2] = "... die Stimmen der Menschen mit dennen du kommunizierst."; //explanation de
                        dbRefer[4] = [];
                        dbRefer[4][0] = ""; //references for ro explanation
                        dbRefer[4][1] = ""; //references for en explanation
                        dbRefer[4][2] = ""; //references for de explanation
                        dbQHint[4] = [];
                        dbQHint[4][0] = ""; //hint ro
                        dbQHint[4][1] = ""; //hint en
                        dbQHint[4][2] = ""; //hint de
                        dbQImage[4] = []; dbQImageSrc[4] = []; 
                        dbQImage[4][0] = "Images/C1.Microchitze/Img004Voices.png";	dbQImageSrc[4][0] = "oldereyes.wordpress.com";
                        dbQImage[4][1] = "Images/C1.Microchitze/Img004Voices.png";	dbQImageSrc[4][1] = "oldereyes.wordpress.com";
                        dbQImage[4][2] = "Images/C1.Microchitze/Img004Voices.png";	dbQImageSrc[4][2] = "oldereyes.wordpress.com";
                        dbAImage[4] = []; dbAImageSrc[4] = [];
                        dbAImage[4][0] = "Images/C1.Microchitze/Img004VoicesHuman.png";  dbAImageSrc[4][0] = "www.lara-bx2.com";
                        dbAImage[4][1] = "Images/C1.Microchitze/Img004VoicesHuman.png";  dbAImageSrc[4][1] = "www.lara-bx2.com";
                        dbAImage[4][2] = "Images/C1.Microchitze/Img004VoicesHuman.png";  dbAImageSrc[4][2] = "www.lara-bx2.com";
dbQList[5] = [];
dbQList[  5][0] = "In mod normal, vezi puncte negre."; 
dbQList[  5][1] = "You see black dots habitually."; 
dbQList[  5][2] = "Du siehst schwarze Punkte gew&#246;hnlich."; 
                        dbAType[5] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[5] = []; dbAList[5][0] = "f";
                        dbACrit[5] = []; dbACrit[5][0] = 14;
                        dbAnswer[5] = [];
                        dbAnswer[5][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[5][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[5][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[5] = [];
                        dbExpln[5][0] = "... de exemplu cele din imagine"; //explanation ro
                        dbExpln[5][1] = "... e.g. the ones in the image"; //explanation en
                        dbExpln[5][2] = "... z.B. die im Bild"; //explanation de
                        dbRefer[5] = [];
                        dbRefer[5][0] = ""; //references for ro explanation
                        dbRefer[5][1] = ""; //references for en explanation
                        dbRefer[5][2] = ""; //references for de explanation
                        dbQHint[5] = [];
                        dbQHint[5][0] = ""; //hint ro
                        dbQHint[5][1] = ""; //hint en
                        dbQHint[5][2] = ""; //hint de
                        dbQImage[5] = []; dbQImageSrc[5] = []; 
                        dbQImage[5][0] = "Images/C1.Microchitze/Img005DotsIllusion.png";	dbQImageSrc[5][0] = "psychology.wikia.com";
                        dbQImage[5][1] = "Images/C1.Microchitze/Img005DotsIllusion.png";	dbQImageSrc[5][1] = "psychology.wikia.com";
                        dbQImage[5][2] = "Images/C1.Microchitze/Img005DotsIllusion.png";	dbQImageSrc[5][2] = "psychology.wikia.com";
                        dbAImage[5] = []; dbAImageSrc[5] = [];
                        dbAImage[5][0] = "Images/C1.Microchitze/Img005DotsBraille.png";  dbAImageSrc[5][0] = "commons.wikimedia.org";
                        dbAImage[5][1] = "Images/C1.Microchitze/Img005DotsBraille.png";  dbAImageSrc[5][1] = "commons.wikimedia.org";
                        dbAImage[5][2] = "Images/C1.Microchitze/Img005DotsBraille.png";  dbAImageSrc[5][2] = "commons.wikimedia.org";
dbQList[6] = [];
dbQList[  6][0] = "C&#xE2;te degete vezi &#xEE;n imagine?"; 
dbQList[  6][1] = "How many fingers do you see in the picture?"; 
dbQList[  6][2] = "Wie viele Finger siehst du in diesen Bild?"; 
                        dbAType[6] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[6] = []; dbAList[6][0] = 5;
                        dbACrit[6] = []; dbACrit[6][0] = 20;
                        dbAnswer[6] = [];
                        dbAnswer[6][0] = "R&#x103;spuns corect: 5"; //plaintext ro answer
                        dbAnswer[6][1] = "Right answer: 5"; //plaintext en answer
                        dbAnswer[6][2] = "Richtige Antwort: 5"; //plaintext de answer
                        dbExpln[6] = [];
                        dbExpln[6][0] = "Doar un deget este ridicat, ins&#x103; vizibile sunt toate."; //explanation ro
                        dbExpln[6][1] = "Only one finger is raised, but all are vizible."; //explanation en
                        dbExpln[6][2] = "Nur ein Finger ist erh&#246;ht, aber sichtbar sind alle."; //explanation de
                        dbRefer[6] = [];
                        dbRefer[6][0] = ""; //references for ro explanation
                        dbRefer[6][1] = ""; //references for en explanation
                        dbRefer[6][2] = ""; //references for de explanation
                        dbQHint[6] = [];
                        dbQHint[6][0] = ""; //hint ro
                        dbQHint[6][1] = ""; //hint en
                        dbQHint[6][2] = ""; //hint de
                        dbQImage[6] = []; dbQImageSrc[6] = []; 
                        dbQImage[6][0] = "Images/C1.Microchitze/Img006FingersRaised.png";	dbQImageSrc[6][0] = "aarondavis.net";
                        dbQImage[6][1] = "Images/C1.Microchitze/Img006FingersRaised.png";	dbQImageSrc[6][1] = "aarondavis.net";
                        dbQImage[6][2] = "Images/C1.Microchitze/Img006FingersRaised.png";	dbQImageSrc[6][2] = "aarondavis.net";
                        dbAImage[6] = []; dbAImageSrc[6] = [];
                        dbAImage[6][0] = "Images/C1.Microchitze/Img006FingersRaised.png";  dbAImageSrc[6][0] = "aarondavis.net";
                        dbAImage[6][1] = "Images/C1.Microchitze/Img006FingersRaised.png";  dbAImageSrc[6][1] = "aarondavis.net";
                        dbAImage[6][2] = "Images/C1.Microchitze/Img006FingersRaised.png";  dbAImageSrc[6][2] = "aarondavis.net";
dbQList[7] = [];
dbQList[  7][0] = "Cum gole&#x15F;ti o cad&#x103; plin&#x103; cu ap&#x103; dac&#x103; ai la dispozi&#x163;ie o lingur&#x103;, o can&#x103; &#x15F;i o g&#x103;leat&#x103;?"; 
dbQList[  7][1] = "How do you empty a bathtub full of water if you have a spoon, a mug and a bucket?"; 
dbQList[  7][2] = "Wie leerst du eine mit Wasser volle Badewanne, wenn du ein L&#246;ffel, eine Tasse und ein Eimer hast?"; 
                        dbAType[7] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[7] = []; dbAList[7][0] = "dop"; dbAList[7][1] = "plug"; dbAList[7][2] = "psel"; /*stoepsel*/
                        dbACrit[7] = []; dbACrit[7][0] = 13; dbACrit[7][1] = 13; dbACrit[7][2] = 13;
                        dbAnswer[7] = [];
                        dbAnswer[7][0] = "R&#x103;spuns corect: trag dopul"; //plaintext ro answer
                        dbAnswer[7][1] = "Right answer: pull the plug"; //plaintext en answer
                        dbAnswer[7][2] = "Richtige Antwort: nehme den St&#246;psel raus"; //plaintext de answer
                        dbExpln[7] = [];
                        dbExpln[7][0] = ""; //explanation ro
                        dbExpln[7][1] = ""; //explanation en
                        dbExpln[7][2] = ""; //explanation de
                        dbRefer[7] = [];
                        dbRefer[7][0] = ""; //references for ro explanation
                        dbRefer[7][1] = ""; //references for en explanation
                        dbRefer[7][2] = ""; //references for de explanation
                        dbQHint[7] = [];
                        dbQHint[7][0] = "Pont: Majoritatea &#xEE;ntreb&#x103;rilor permit r&#x103;spuns liber. Pentru validare, te rog nu folosi diacritice. <br/><br/> De exemplu folose&#x15F;te <i>ulita</i> &#xEE;n locul <i>uli&#x21B;&#x103;</i> "; //hint ro
                        dbQHint[7][1] = "Hint: Most questions allow you to enter free text. For validation purposes, please do not use diacritics or special characters. <br/><br/> e.g. use <i>naive</i> instead of <i>na&#239;ve</i>"; //hint en
                        dbQHint[7][2] = "Hinweis: Die meisten Fragen k&#246;nnen mit Freitext geantwortet werden. F&#252;r eine optimale Bewertung, bitte benutze keine diakritische Zeichen. <br/><br/> z.B. benutze <i>Fuesse</i> statt <i>F&#252;&#223;e</i>"; //hint de
                        dbQImage[7] = []; dbQImageSrc[7] = []; 
                        dbQImage[7][0] = "Images/C1.Microchitze/Img007Bathtub.png";	dbQImageSrc[7][0] = "www.dreamstime.com/";
                        dbQImage[7][1] = "Images/C1.Microchitze/Img007Bathtub.png";	dbQImageSrc[7][1] = "www.dreamstime.com/";
                        dbQImage[7][2] = "Images/C1.Microchitze/Img007Bathtub.png";	dbQImageSrc[7][2] = "www.dreamstime.com/";
                        dbAImage[7] = [];							dbAImageSrc[7] = [];
                        dbAImage[7][0] = "Images/C1.Microchitze/Img007BathtubAnswer.png";  dbAImageSrc[7][0] = "www.physics.umd.edu";
                        dbAImage[7][1] = "Images/C1.Microchitze/Img007BathtubAnswer.png";  dbAImageSrc[7][1] = "www.physics.umd.edu";
                        dbAImage[7][2] = "Images/C1.Microchitze/Img007BathtubAnswer.png";  dbAImageSrc[7][2] = "www.physics.umd.edu";
dbQList[8] = [];
dbQList[  8][0] = "Ce faci dac&#x103; g&#x103;se&#x15F;ti clorur&#x103; de sodiu &#xEE;n m&#xE2;ncare?"; 
dbQList[  8][1] = "What do you do when you find sodium chloride in your food?"; 
dbQList[  8][2] = "Was machst du, wenn du Natriumchlorid in Essen findest?"; 
                        dbAType[8] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[8] = []; dbAList[8][0] = "mananc"; dbAList[8][1] = "eat"; dbAList[8][2] = "esse";
                        dbACrit[8] = []; dbACrit[8][0] = 13; dbACrit[8][1] = 13; dbACrit[8][2] = 13;
                        dbAnswer[8] = [];
                        dbAnswer[8][0] = "R&#x103;spuns corect: o m&#x103;n&#xE2;nc."; //plaintext ro answer
                        dbAnswer[8][1] = "Right answer: I eat it."; //plaintext en answer
                        dbAnswer[8][2] = "Richtige Antwort: ich esse es."; //plaintext de answer
                        dbExpln[8] = [];
                        dbExpln[8][0] = "Clorura de sodiu este sare pura."; //explanation ro
                        dbExpln[8][1] = "Sodium chloride is pure salt."; //explanation en
                        dbExpln[8][2] = "Natriumchlorid ist pure Salz."; //explanation de
                        dbRefer[8] = [];
                        dbRefer[8][0] = "<a href='http://dexonline.ro/definitie/sare' target='_blank'>[1] dexonline.ro/sare</a>"; //references for ro explanation
                        dbRefer[8][1] = "<a href='http://www.merriam-webster.com/dictionary/salt' target='_blank'>[1] merriam-webster.com/salt"; //references for en explanation
                        dbRefer[8][2] = "<a href='http://www.duden.de/rechtschreibung/Salz' target='_blank'>[1] duden.de/Salz"; //references for de explanation
                        dbQHint[8] = [];
                        dbQHint[8][0] = ""; //hint ro
                        dbQHint[8][1] = ""; //hint en
                        dbQHint[8][2] = ""; //hint de
                        dbQImage[8] = []; dbQImageSrc[8] = []; 
                        dbQImage[8][0] = "Images/C1.Microchitze/Img008NaCl.png";	dbQImageSrc[8][0] = "www.chemistry.wustl.edu";
                        dbQImage[8][1] = "Images/C1.Microchitze/Img008NaCl.png";	dbQImageSrc[8][1] = "www.chemistry.wustl.edu";
                        dbQImage[8][2] = "Images/C1.Microchitze/Img008NaCl.png";	dbQImageSrc[8][2] = "www.chemistry.wustl.edu";
                        dbAImage[8] = [];							dbAImageSrc[8] = [];
                        dbAImage[8][0] = "Images/C1.Microchitze/Img008Salt.png";  dbAImageSrc[8][0] = "coolclips.com";
                        dbAImage[8][1] = "Images/C1.Microchitze/Img008Salt.png";  dbAImageSrc[8][1] = "coolclips.com";
                        dbAImage[8][2] = "Images/C1.Microchitze/Img008Salt.png";  dbAImageSrc[8][2] = "coolclips.com";
dbQList[9] = [];
dbQList[  9][0] = "Dac&#x103; atunci c&#xE2;nd conduci ma&#x15F;ina &#xEE;&#x163;i sar &#xEE;n fa&#x163;&#x103; iepure &#x15F;i un porc, ce calci mai &#xEE;nt&#xE2;i?"; 
dbQList[  9][1] = "If a rabbit and a snail jump in front of the car while you are driving, what would you hit first?"; 
dbQList[  9][2] = "Wenn du mit dem Auto f&#228;hrst und ein Hase und ein Schwein in dem Weg springen, was tretest du als erstes?"; 
                        dbAType[9] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[9] = []; dbAList[9][0] = "frana"; dbAList[9][1] = "brake"; dbAList[9][2] = "Bremse";
                        dbACrit[9] = []; dbACrit[9][0] = 13; dbACrit[9][1] = 13; dbACrit[9][2] = 13;
                        dbAnswer[9] = [];
                        dbAnswer[9][0] = "R&#x103;spuns corect: fr&#xE2;na"; //plaintext ro answer
                        dbAnswer[9][1] = "Right answer: the brakes"; //plaintext en answer
                        dbAnswer[9][2] = "Richtige Antwort: die Bremse"; //plaintext de answer
                        dbExpln[9] = [];
                        dbExpln[9][0] = ""; //explanation ro
                        dbExpln[9][1] = ""; //explanation en
                        dbExpln[9][2] = ""; //explanation de
                        dbRefer[9] = [];
                        dbRefer[9][0] = ""; //references for ro explanation
                        dbRefer[9][1] = ""; //references for en explanation
                        dbRefer[9][2] = ""; //references for de explanation
                        dbQHint[9] = [];
                        dbQHint[9][0] = "Pont: Cand toate intrebarile au raspuns, butonul de rezultate apare sub numerele intrebarilor."; //hint ro
                        dbQHint[9][1] = "Hint: When all questions have been answered, the results button appears below the question numbers."; //hint en
                        dbQHint[9][2] = "Hinweis: Wenn alle Fragen beantwortet sind, die Bewertung-drucktaste wird unter den Fragennummer sichtbar gemacht."; //hint de
                        dbQImage[9] = []; dbQImageSrc[9] = []; 
                        dbQImage[9][0] = "Images/C1.Microchitze/Img009RacingPig.png";	dbQImageSrc[9][0] = "www.clipartof.com";
                        dbQImage[9][1] = "Images/C1.Microchitze/Img009RacingPig.png";	dbQImageSrc[9][1] = "www.clipartof.com";
                        dbQImage[9][2] = "Images/C1.Microchitze/Img009RacingPig.png";	dbQImageSrc[9][2] = "www.clipartof.com";
                        dbAImage[9] = [];							dbAImageSrc[9] = [];
                        dbAImage[9][0] = "Images/C1.Microchitze/Img009Brake.png";  dbAImageSrc[9][0] = "campusreporter.wordpress.com";
                        dbAImage[9][1] = "Images/C1.Microchitze/Img009Brake.png";  dbAImageSrc[9][1] = "campusreporter.wordpress.com";
                        dbAImage[9][2] = "Images/C1.Microchitze/Img009Brake.png";  dbAImageSrc[9][2] = "campusreporter.wordpress.com";
                        
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOCIOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[10] = [];
dbQList[ 10][0] = "Ce &#x163;i se d&#x103;, e al t&#x103;u, dar ceilal&#x163;i &#xEE;l folosesc mai des dec&#xE2;t tine?"; 
dbQList[ 10][1] = "What is yours but others use it more than you do?"; 
dbQList[ 10][2] = "Was geh&#246;rt dir, aber die anderen gebrauchen es h&#228;ufiger als du selbst?"; 
                        dbAType[10] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[10] = []; dbAList[10][0] = "nume"; dbAList[10][1] = "name";  dbAList[10][2] = "porecla";
                        dbACrit[10] = []; dbACrit[10][0] = 13; dbACrit[10][1] = 13; dbACrit[10][2] = 13;
                        dbAnswer[10] = [];
                        dbAnswer[10][0] = "R&#x103;spuns corect: numele"; //plaintext ro answer
                        dbAnswer[10][1] = "Right answer: the name"; //plaintext en answer
                        dbAnswer[10][2] = "Richtige Antwort: der Name"; //plaintext de answer
                        dbExpln[10] = [];
                        dbExpln[10][0] = ""; //explanation ro
                        dbExpln[10][1] = ""; //explanation en
                        dbExpln[10][2] = ""; //explanation de
                        dbRefer[10] = [];
                        dbRefer[10][0] = ""; //references for ro explanation
                        dbRefer[10][1] = ""; //references for en explanation
                        dbRefer[10][2] = ""; //references for de explanation
                        dbQHint[10] = [];
                        dbQHint[10][0] = ""; //hint ro
                        dbQHint[10][1] = ""; //hint en
                        dbQHint[10][2] = ""; //hint de
                        dbQImage[10] = []; dbQImageSrc[10] = []; 
                        dbQImage[10][0] = "Images/C1.Microchitze/Img010Robber.png";	dbQImageSrc[10][0] = "library.queensu.ca";
                        dbQImage[10][1] = "Images/C1.Microchitze/Img010Robber.png";	dbQImageSrc[10][1] = "library.queensu.ca";
                        dbQImage[10][2] = "Images/C1.Microchitze/Img010Robber.png";	dbQImageSrc[10][2] = "library.queensu.ca";
                        dbAImage[10] = [];							dbAImageSrc[10] = [];
                        dbAImage[10][0] = "Images/C1.Microchitze/Img010Nume.png";  dbAImageSrc[10][0] = "www.zazzle.com/";
                        dbAImage[10][1] = "Images/C1.Microchitze/Img010Name.png";  dbAImageSrc[10][1] = "www.zazzle.com/";
                        dbAImage[10][2] = "Images/C1.Microchitze/Img010Name.png";  dbAImageSrc[10][2] = "www.zazzle.com/";
dbQList[11] = [];
dbQList[ 11][0] = "Ce ai putut face oric&#xE2;nd cu m&#xE2;na stang&#x103; dar niciodat&#x103; cu m&#xE2;na dreapt&#x103;?"; 
dbQList[ 11][1] = "What could you always do with your left hand but never with your right hand?"; 
dbQList[ 11][2] = "Was konntest du schon immer mit der linken Hand tun, aber nie mit der rechten Hand?"; 
                        dbAType[11] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[11] = []; dbAList[11][0] = "drept"; dbAList[11][1] = "dreapta"; dbAList[11][2] = "right"; dbAList[11][3] = "recht";
                        dbACrit[11] = []; dbACrit[11][0] = 13; dbACrit[11][1] = 13; dbACrit[11][2] = 13; dbACrit[11][3] = 13;
                        dbAnswer[11] = [];
                        dbAnswer[11][0] = "R&#x103;spuns corect: sa ating cotul drept"; //plaintext ro answer
                        dbAnswer[11][1] = "Right answer: touch the right elbow"; //plaintext en answer
                        dbAnswer[11][2] = "Richtige Antwort: den rechten Ellbogen ber&#252;hren"; //plaintext de answer
                        dbExpln[11] = [];
                        dbExpln[11][0] = ""; //explanation ro
                        dbExpln[11][1] = ""; //explanation en
                        dbExpln[11][2] = ""; //explanation de
                        dbRefer[11] = [];
                        dbRefer[11][0] = ""; //references for ro explanation
                        dbRefer[11][1] = ""; //references for en explanation
                        dbRefer[11][2] = ""; //references for de explanation
                        dbQHint[11] = [];
                        dbQHint[11][0] = ""; //hint ro
                        dbQHint[11][1] = ""; //hint en
                        dbQHint[11][2] = ""; //hint de
                        dbQImage[11] = []; dbQImageSrc[11] = []; 
                        dbQImage[11][0] = "Images/C1.Microchitze/Img011Hands.png";	dbQImageSrc[11][0] = "www.123rf.com";
                        dbQImage[11][1] = "Images/C1.Microchitze/Img011Hands.png";	dbQImageSrc[11][1] = "www.123rf.com";
                        dbQImage[11][2] = "Images/C1.Microchitze/Img011Hands.png";	dbQImageSrc[11][2] = "www.123rf.com";
                        dbAImage[11] = [];							dbAImageSrc[11] = [];
                        dbAImage[11][0] = "Images/C1.Microchitze/Img011Elbow.png";  dbAImageSrc[11][0] = "kippywinston.wordpress.com";
                        dbAImage[11][1] = "Images/C1.Microchitze/Img011Elbow.png";  dbAImageSrc[11][1] = "kippywinston.wordpress.com";
                        dbAImage[11][2] = "Images/C1.Microchitze/Img011Elbow.png";  dbAImageSrc[11][2] = "kippywinston.wordpress.com";
dbQList[12] = [];
dbQList[ 12][0] = "Ce po&#x163;i vedea de&#x15F;i nu are con&#x163;inut?"; 
dbQList[ 12][1] = "What has no content yet you are still able to see it?"; 
dbQList[ 12][2] = "Was hat kein Inhalt, kann dennoch gesehen werden?"; 
                        dbAType[12] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[12] = []; dbAList[12][0] = "gaur"; dbAList[12][1] = "groapa"; dbAList[12][2] = "gropi"; dbAList[12][3] = "hole"; dbAList[12][4] = "gap"; dbAList[12][5] = "hollow"; dbAList[12][6] = "loch"; dbAList[12][7] = "hohl"; dbAList[12][8] = "lucke";
                        dbACrit[12] = []; dbACrit[12][0] = 13; dbACrit[12][1] = 13; dbACrit[12][2] = 13; dbACrit[12][3] = 13; dbACrit[12][4] = 13; dbACrit[12][5] = 13; dbACrit[12][6] = 13; dbACrit[12][7] = 13; dbACrit[12][8] = 13;
                        dbAnswer[12] = [];
                        dbAnswer[12][0] = "R&#x103;spuns corect: g&#x103;urile, gropile"; //plaintext ro answer
                        dbAnswer[12][1] = "Right answer: hollows, holes, gaps"; //plaintext en answer
                        dbAnswer[12][2] = "Richtige Antwort: Hohlr&#228;ume, L&#252;cken, L&#246;cher"; //plaintext de answer
                        dbExpln[12] = [];
                        dbExpln[12][0] = "Orice se remarc&#x103; prin lips&#x103;..."; //explanation ro
                        dbExpln[12][1] = "Anything that stands out by absence..."; //explanation en
                        dbExpln[12][2] = "Alles, dass sich durch Abwesenheit auszeichnet..."; //explanation de
                        dbRefer[12] = [];
                        dbRefer[12][0] = ""; //references for ro explanation
                        dbRefer[12][1] = ""; //references for en explanation
                        dbRefer[12][2] = ""; //references for de explanation
                        dbQHint[12] = [];
                        dbQHint[12][0] = ""; //hint ro
                        dbQHint[12][1] = ""; //hint en
                        dbQHint[12][2] = ""; //hint de
                        dbQImage[12] = []; dbQImageSrc[12] = []; 
                        dbQImage[12][0] = "Images/C1.Microchitze/Img012Blind.png";	dbQImageSrc[12][0] = "nobrowcartoons.wordpress.com";
                        dbQImage[12][1] = "Images/C1.Microchitze/Img012Blind.png";	dbQImageSrc[12][1] = "nobrowcartoons.wordpress.com";
                        dbQImage[12][2] = "Images/C1.Microchitze/Img012Blind.png";	dbQImageSrc[12][2] = "nobrowcartoons.wordpress.com";
                        dbAImage[12] = [];							dbAImageSrc[12] = [];
                        dbAImage[12][0] = "Images/C1.Microchitze/Img012Hole.png";  dbAImageSrc[12][0] = "www.hongkiat.com";
                        dbAImage[12][1] = "Images/C1.Microchitze/Img012Hole.png";  dbAImageSrc[12][1] = "www.hongkiat.com";
                        dbAImage[12][2] = "Images/C1.Microchitze/Img012Hole.png";  dbAImageSrc[12][2] = "www.hongkiat.com";
dbQList[13] = [];
dbQList[ 13][0] = "Ce po&#x163;i p&#x103;stra dar nu &#xEE;mp&#x103;r&#x163;i, deoarece odat&#x103; &#xEE;mp&#x103;r&#x163;it nu-l mai po&#x163;i p&#x103;stra?"; 
dbQList[ 13][1] = "What can you keep but cannot share because once you share it, you cannot keep it anymore?"; 
dbQList[ 13][2] = "Was kannst du bewahren, aber nicht mit die anderen teilen, denn dann kannst du nicht mehr bewahren?"; 
                        dbAType[13] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[13] = []; dbAList[13][0] = "secret"; dbAList[13][1] = "Geheimnis";
                        dbACrit[13] = []; dbACrit[13][0] = 13; dbACrit[13][1] = 13;
                        dbAnswer[13] = [];
                        dbAnswer[13][0] = "R&#x103;spuns corect: un secret"; //plaintext ro answer
                        dbAnswer[13][1] = "Right answer: a secret"; //plaintext en answer
                        dbAnswer[13][2] = "Richtige Antwort: ein Geheimnis"; //plaintext de answer
                        dbExpln[13] = [];
                        dbExpln[13][0] = ""; //explanation ro
                        dbExpln[13][1] = ""; //explanation en
                        dbExpln[13][2] = ""; //explanation de
                        dbRefer[13] = [];
                        dbRefer[13][0] = ""; //references for ro explanation
                        dbRefer[13][1] = ""; //references for en explanation
                        dbRefer[13][2] = ""; //references for de explanation
                        dbQHint[13] = [];
                        dbQHint[13][0] = ""; //hint ro
                        dbQHint[13][1] = ""; //hint en
                        dbQHint[13][2] = ""; //hint de
                        dbQImage[13] = []; dbQImageSrc[13] = []; 
                        dbQImage[13][0] = "Images/C1.Microchitze/Img013Chest.png";	dbQImageSrc[13][0] = "www.istockphoto.com";
                        dbQImage[13][1] = "Images/C1.Microchitze/Img013Chest.png";	dbQImageSrc[13][1] = "www.istockphoto.com";
                        dbQImage[13][2] = "Images/C1.Microchitze/Img013Chest.png";	dbQImageSrc[13][2] = "www.istockphoto.com";
                        dbAImage[13] = [];							dbAImageSrc[13] = [];
                        dbAImage[13][0] = "Images/C1.Microchitze/Img013Shh.png";  dbAImageSrc[13][0] = "crayzys.blogspot.com";
                        dbAImage[13][1] = "Images/C1.Microchitze/Img013Shh.png";  dbAImageSrc[13][1] = "crayzys.blogspot.com";
                        dbAImage[13][2] = "Images/C1.Microchitze/Img013Shh.png";  dbAImageSrc[13][2] = "crayzys.blogspot.com";
dbQList[14] = [];
dbQList[ 14][0] = "Ce arunci c&#xE2;nd vrei s&#x103; folose&#x15F;ti &#x15F;i iei &#xEE;napoi c&#xE2;nd nu vrei s&#x103; folose&#x15F;ti?"; 
dbQList[ 14][1] = "What do you throw when you want to use and take back when you don't?"; 
dbQList[ 14][2] = "Was wirfst du wenn du es benutzen willst, und nimmst zur&#252;ck wenn nicht?"; 
                        dbAType[14] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[14] = []; dbAList[14][0] = "ancora"; dbAList[14][1] = "anchor"; dbAList[14][2] = "Anker";
                                                    dbAList[14][3] = "sulita"; dbAList[14][4] = "lance"; dbAList[14][5] = "spear"; dbAList[14][6] = "javelin"; dbAList[14][7] = "Speer"; dbAList[14][8] = "Spie"; //Spiess
                                                    dbAList[14][9] = "harp"; //harpon/harpoon/Harpune
                        dbACrit[14] = []; dbACrit[14][0] = 13; dbACrit[14][1] = 13; dbACrit[14][2] = 13;
                                                    dbACrit[14][3] = 13; dbACrit[14][4] = 13; dbACrit[14][5] = 13; dbACrit[14][6] = 13; dbACrit[14][7] = 13; dbACrit[14][8] = 13; dbACrit[14][9] = 13;
                        dbAnswer[14] = [];
                        dbAnswer[14][0] = "R&#x103;spuns corect: ancora, suli&#x21B;a..."; //plaintext ro answer
                        dbAnswer[14][1] = "Right answer: the anchor, the spear, the javelin..."; //plaintext en answer
                        dbAnswer[14][2] = "Richtige Antwort: die Anker, der Speer..."; //plaintext de answer
                        dbExpln[14] = [];
                        dbExpln[14][0] = ""; //explanation ro
                        dbExpln[14][1] = ""; //explanation en
                        dbExpln[14][2] = ""; //explanation de
                        dbRefer[14] = [];
                        dbRefer[14][0] = ""; //references for ro explanation
                        dbRefer[14][1] = ""; //references for en explanation
                        dbRefer[14][2] = ""; //references for de explanation
                        dbQHint[14] = [];
                        dbQHint[14][0] = ""; //hint ro
                        dbQHint[14][1] = ""; //hint en
                        dbQHint[14][2] = ""; //hint de
                        dbQImage[14] = []; dbQImageSrc[14] = []; 
                        dbQImage[14][0] = "Images/C1.Microchitze/Img014Trash.png";	dbQImageSrc[14][0] = "www.dreamstime.com";
                        dbQImage[14][1] = "Images/C1.Microchitze/Img014Trash.png";	dbQImageSrc[14][1] = "www.dreamstime.com";
                        dbQImage[14][2] = "Images/C1.Microchitze/Img014Trash.png";	dbQImageSrc[14][2] = "www.dreamstime.com";
                        dbAImage[14] = [];							dbAImageSrc[14] = [];
                        dbAImage[14][0] = "Images/C1.Microchitze/Img014Anchor.png";  dbAImageSrc[14][0] = "www.etsy.com";
                        dbAImage[14][1] = "Images/C1.Microchitze/Img014Anchor.png";  dbAImageSrc[14][1] = "www.etsy.com";
                        dbAImage[14][2] = "Images/C1.Microchitze/Img014Anchor.png";  dbAImageSrc[14][2] = "www.etsy.com";
dbQList[15] = [];
dbQList[ 15][0] = "Ce se rupe c&#xE2;nd &#xEE;i zici pe nume?"; 
dbQList[ 15][1] = "What is broken when you name it?"; 
dbQList[ 15][2] = "Was wird gebrochen wenn du es nennst?"; 
                        dbAType[15] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[15] = []; dbAList[15][0] = "liniste";  dbAList[15][1] = "tacere";  dbAList[15][2] = "silence";  dbAList[15][3] = "Stille"; dbAList[15][4] = "Schweigen";
                        dbACrit[15] = []; dbACrit[15][0] = 13; dbACrit[15][1] = 13; dbACrit[15][2] = 13; dbACrit[15][3] = 13; dbACrit[15][4] = 13;
                        dbAnswer[15] = [];
                        dbAnswer[15][0] = "R&#x103;spuns corect: t&#x103;cerea"; //plaintext ro answer
                        dbAnswer[15][1] = "Right answer: the silence"; //plaintext en answer
                        dbAnswer[15][2] = "Richtige Antwort: das Schweigen"; //plaintext de answer
                        dbExpln[15] = [];
                        dbExpln[15][0] = ""; //explanation ro
                        dbExpln[15][1] = ""; //explanation en
                        dbExpln[15][2] = ""; //explanation de
                        dbRefer[15] = [];
                        dbRefer[15][0] = ""; //references for ro explanation
                        dbRefer[15][1] = ""; //references for en explanation
                        dbRefer[15][2] = ""; //references for de explanation
                        dbQHint[15] = [];
                        dbQHint[15][0] = ""; //hint ro
                        dbQHint[15][1] = ""; //hint en
                        dbQHint[15][2] = ""; //hint de
                        dbQImage[15] = []; dbQImageSrc[15] = []; 
                        dbQImage[15][0] = "Images/C1.Microchitze/Img015Chain.png";	dbQImageSrc[15][0] = "www.gograph.com";
                        dbQImage[15][1] = "Images/C1.Microchitze/Img015Chain.png";	dbQImageSrc[15][1] = "www.gograph.com";
                        dbQImage[15][2] = "Images/C1.Microchitze/Img015Chain.png";	dbQImageSrc[15][2] = "www.gograph.com";
                        dbAImage[15] = [];							dbAImageSrc[15] = [];
                        dbAImage[15][0] = "Images/C1.Microchitze/Img015Shh.png";  dbAImageSrc[15][0] = "www.zazzle.com";
                        dbAImage[15][1] = "Images/C1.Microchitze/Img015Shh.png";  dbAImageSrc[15][1] = "www.zazzle.com";
                        dbAImage[15][2] = "Images/C1.Microchitze/Img015Shh.png";  dbAImageSrc[15][2] = "www.zazzle.com";
dbQList[16] = [];
dbQList[ 16][0] = "Ce trebuie s&#x103; fi f&#x103;cut neap&#x103;rat &#xEE;nainte s&#x103; po&#x21B;i cobor&#xEE; din tren?"; 
dbQList[ 16][1] = "What must you necessarily have done before being able to get off a train?"; 
dbQList[ 16][2] = "Was musst du unbedingt getan haben, bevor du aus einem Zug aussteigen kannst?"; 
                        dbAType[16] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[16] = []; dbAList[16][0] = "urc";  dbAList[16][1] = "get on"; dbAList[16][2] = "got on"; dbAList[16][3] = "gotten on";  dbAList[16][4] = "einsteigen";  dbAList[16][5] = "eingestiegen";
                        dbACrit[16] = []; dbACrit[16][0] = 13; dbACrit[16][1] = 13; dbACrit[16][2] = 13; dbACrit[16][3] = 13; dbACrit[16][4] = 13; dbACrit[16][5] = 13;
                        dbAnswer[16] = [];
                        dbAnswer[16][0] = "R&#x103;spuns corect: trebuie s&#x103; fi urcat &#xEE;n tren"; //plaintext ro answer
                        dbAnswer[16][1] = "Right answer: you must have got on the train"; //plaintext en answer
                        dbAnswer[16][2] = "Richtige Antwort: du musstest in den Zug einsteigen"; //plaintext de answer
                        dbExpln[16] = [];
                        dbExpln[16][0] = ""; //explanation ro
                        dbExpln[16][1] = ""; //explanation en
                        dbExpln[16][2] = ""; //explanation de
                        dbRefer[16] = [];
                        dbRefer[16][0] = ""; //references for ro explanation
                        dbRefer[16][1] = ""; //references for en explanation
                        dbRefer[16][2] = ""; //references for de explanation
                        dbQHint[16] = [];
                        dbQHint[16][0] = ""; //hint ro
                        dbQHint[16][1] = ""; //hint en
                        dbQHint[16][2] = ""; //hint de
                        dbQImage[16] = []; dbQImageSrc[16] = []; 
                        dbQImage[16][0] = "Images/C1.Microchitze/Img016Railway.png";	dbQImageSrc[16][0] = "www.canstockphoto.com";
                        dbQImage[16][1] = "Images/C1.Microchitze/Img016Railway.png";	dbQImageSrc[16][1] = "www.canstockphoto.com";
                        dbQImage[16][2] = "Images/C1.Microchitze/Img016Railway.png";	dbQImageSrc[16][2] = "www.canstockphoto.com";
                        dbAImage[16] = [];							dbAImageSrc[16] = [];
                        dbAImage[16][0] = "Images/C1.Microchitze/Img016Railway.png";  dbAImageSrc[16][0] = "www.canstockphoto.com";
                        dbAImage[16][1] = "Images/C1.Microchitze/Img016Railway.png";  dbAImageSrc[16][1] = "www.canstockphoto.com";
                        dbAImage[16][2] = "Images/C1.Microchitze/Img016Railway.png";  dbAImageSrc[16][2] = "www.canstockphoto.com";
dbQList[17] = [];
dbQList[ 17][0] = "Dac&#x103; &#xEE;ntr-o curs&#x103; dep&#x103;&#x15F;e&#x15F;ti ocupantul locului 2, pe ce loc treci?"; 
dbQList[ 17][1] = "If you overtake the second-placed person in a race, which place would you be in?"; 
dbQList[ 17][2] = "Auf welchem Platz liegt man, wenn man den Zweitplatzierten &#252;berholt?"; 
                        dbAType[17] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[17] = []; dbAList[17][0] = 2;
                        dbACrit[17] = []; dbACrit[17][0] = 20;
                        dbAnswer[17] = [];
                        dbAnswer[17][0] = "R&#x103;spuns corect: 2"; //plaintext ro answer
                        dbAnswer[17][1] = "Right answer: 2"; //plaintext en answer
                        dbAnswer[17][2] = "Richtige Antwort: 2"; //plaintext de answer
                        dbExpln[17] = [];
                        dbExpln[17][0] = "Dup&#x103; ce dep&#x103;&#x15F;e&#x15F;ti ocupantul locului doi, tu devii locul doi &#x15F;i el devine locul trei. Ocupantul locului 1 &#xEE;nc&#x103; este &#xEE;naintea voastr&#x103;."; //explanation ro
                        dbExpln[17][1] = "After you overtake the second placed person, you become second-placed and he becomes third-placed. The first-placed person still is ahead of you."; //explanation en
                        dbExpln[17][2] = "Nachdem du den Zweitplatzierten &#252;berholt, du wirst Zweitplatzierte und er wird Drittplazierte sein. Der Erstplazierte wird immer noch vor euch sein"; //explanation de
                        dbRefer[17] = [];
                        dbRefer[17][0] = ""; //references for ro explanation
                        dbRefer[17][1] = ""; //references for en explanation
                        dbRefer[17][2] = ""; //references for de explanation
                        dbQHint[17] = [];
                        dbQHint[17][0] = ""; //hint ro
                        dbQHint[17][1] = ""; //hint en
                        dbQHint[17][2] = ""; //hint de
                        dbQImage[17] = []; dbQImageSrc[17] = []; 
                        dbQImage[17][0] = "Images/C1.Microchitze/Img017Race.png";	dbQImageSrc[17][0] = "www.toonpool.com";
                        dbQImage[17][1] = "Images/C1.Microchitze/Img017Race.png";	dbQImageSrc[17][1] = "www.toonpool.com";
                        dbQImage[17][2] = "Images/C1.Microchitze/Img017Race.png";	dbQImageSrc[17][2] = "www.toonpool.com";
                        dbAImage[17] = [];							dbAImageSrc[17] = [];
                        dbAImage[17][0] = "Images/C1.Microchitze/Img017Racers.png";  dbAImageSrc[17][0] = "www.chrismadden.co.uk";
                        dbAImage[17][1] = "Images/C1.Microchitze/Img017Racers.png";  dbAImageSrc[17][1] = "www.chrismadden.co.uk";
                        dbAImage[17][2] = "Images/C1.Microchitze/Img017Racers.png";  dbAImageSrc[17][2] = "www.chrismadden.co.uk";
dbQList[18] = [];
dbQList[ 18][0] = "Te po&#x21B;i c&#x103;s&#x103;tori legal cu sora v&#x103;duvei tale."; 
dbQList[ 18][1] = "You can legally marry your widow's sister."; 
dbQList[ 18][2] = "Du kannst gesetzlich die Schwester deiner Witwe heiraten."; 
                        dbAType[18] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[18] = []; dbAList[18][0] = "f";
                        dbACrit[18] = []; dbACrit[18][0] = 13;
                        dbAnswer[18] = [];
                        dbAnswer[18][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[18][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[18][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[18] = [];
                        dbExpln[18][0] = "Nu, pentru ca ai fi mort."; //explanation ro
                        dbExpln[18][1] = "No, because you would be dead."; //explanation en
                        dbExpln[18][2] = "Nein, denn du w&#228;rst tot."; //explanation de
                        dbRefer[18] = [];
                        dbRefer[18][0] = ""; //references for ro explanation
                        dbRefer[18][1] = ""; //references for en explanation
                        dbRefer[18][2] = ""; //references for de explanation
                        dbQHint[18] = [];
                        dbQHint[18][0] = ""; //hint ro
                        dbQHint[18][1] = ""; //hint en
                        dbQHint[18][2] = ""; //hint de
                        dbQImage[18] = []; dbQImageSrc[18] = []; 
                        dbQImage[18][0] = "Images/C1.Microchitze/Img018GameOver.png";	dbQImageSrc[18][0] = "www.dein-blechschild.de";
                        dbQImage[18][1] = "Images/C1.Microchitze/Img018GameOver.png";	dbQImageSrc[18][1] = "www.dein-blechschild.de";
                        dbQImage[18][2] = "Images/C1.Microchitze/Img018GameOver.png";	dbQImageSrc[18][2] = "www.dein-blechschild.de";
                        dbAImage[18] = [];							dbAImageSrc[18] = [];
                        dbAImage[18][0] = "Images/C1.Microchitze/Img018Coffin.png";  dbAImageSrc[18][0] = "www.trendhunter.com";
                        dbAImage[18][1] = "Images/C1.Microchitze/Img018Coffin.png";  dbAImageSrc[18][1] = "www.trendhunter.com";
                        dbAImage[18][2] = "Images/C1.Microchitze/Img018Coffin.png";  dbAImageSrc[18][2] = "www.trendhunter.com";
dbQList[19] = [];
dbQList[ 19][0] = "Este plauzibil s&#x103; afirmi c&#x103; bunicul t&#x103;u este cu 6 ani mai &#xEE;n v&#xE2;rst&#x103; dec&#xE2;t tat&#x103;l t&#x103;u."; 
dbQList[ 19][1] = "It is plausible to claim that your grandfather is 6 years older than your father."; 
dbQList[ 19][2] = "Es ist glaubhaft zu behaupten, dass dein Gro&#223;vater 6 Jahre &#228;lter als dein Vater ist."; 
                        dbAType[19] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[19] = []; dbAList[19][0] = "f";
                        dbACrit[19] = []; dbACrit[19][0] = 14;
                        dbAnswer[19] = [];
                        dbAnswer[19][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[19][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[19][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[19] = [];
                        dbExpln[19][0] = "Ar putea fi vorba despre cel&#x103;lalt bunic al t&#x103;u, tat&#x103;l mamei tale."; //explanation ro
                        dbExpln[19][1] = "You could be talking about your other grandfather, your mother's father."; //explanation en
                        dbExpln[19][2] = "Du k&#246;nntest &#252;ber dein anderen Gro&#223;vater, der Vater deiner Mutter, sprechen"; //explanation de
                        dbRefer[19] = [];
                        dbRefer[19][0] = ""; //references for ro explanation
                        dbRefer[19][1] = ""; //references for en explanation
                        dbRefer[19][2] = ""; //references for de explanation
                        dbQHint[19] = [];
                        dbQHint[19][0] = ""; //hint ro
                        dbQHint[19][1] = ""; //hint en
                        dbQHint[19][2] = ""; //hint de
                        dbQImage[19] = []; dbQImageSrc[19] = []; 
                        dbQImage[19][0] = "Images/C1.Microchitze/Img019Granpa.png";	dbQImageSrc[19][0] = "www.campacademia.com";
                        dbQImage[19][1] = "Images/C1.Microchitze/Img019Granpa.png";	dbQImageSrc[19][1] = "www.campacademia.com";
                        dbQImage[19][2] = "Images/C1.Microchitze/Img019Granpa.png";	dbQImageSrc[19][2] = "www.campacademia.com";
                        dbAImage[19] = [];							dbAImageSrc[19] = [];
                        dbAImage[19][0] = "Images/C1.Microchitze/Img019Tree.png";  dbAImageSrc[19][0] = "docs.google.com";
                        dbAImage[19][1] = "Images/C1.Microchitze/Img019Tree.png";  dbAImageSrc[19][1] = "docs.google.com";
                        dbAImage[19][2] = "Images/C1.Microchitze/Img019Tree.png";  dbAImageSrc[19][2] = "docs.google.com";

// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HISTOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[20] = [];
dbQList[ 20][0] = "C&#xE2;t a durat R&#x103;zboiul de Treizeci de Ani?"; 
dbQList[ 20][1] = "How long did the Thirty Years War last?"; 
dbQList[ 20][2] = "Wie lange dauerte der drei&#223;igj&#228;hrige Krieg?"; 
                        dbAType[20] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[20] = []; dbAList[20][0] = 30;
                        dbACrit[20] = []; dbACrit[20][0] = 20;
                        dbAnswer[20] = [];
                        dbAnswer[20][0] = "R&#x103;spuns corect: 30 de ani (1618-1648)"; //plaintext ro answer
                        dbAnswer[20][1] = "Right answer: 30 years (1618-1648)"; //plaintext en answer
                        dbAnswer[20][2] = "Richtige Antwort: 30 Jahre (1618-1648)"; //plaintext de answer
                        dbExpln[20] = [];
                        dbExpln[20][0] = ""; //explanation ro
                        dbExpln[20][1] = ""; //explanation en
                        dbExpln[20][2] = ""; //explanation de
                        dbRefer[20] = [];
                        dbRefer[20][0] = ""; //references for ro explanation
                        dbRefer[20][1] = ""; //references for en explanation
                        dbRefer[20][2] = ""; //references for de explanation
                        dbQHint[20] = [];
                        dbQHint[20][0] = ""; //hint ro
                        dbQHint[20][1] = ""; //hint en
                        dbQHint[20][2] = ""; //hint de
                        dbQImage[20] = []; dbQImageSrc[20] = []; 
                        dbQImage[20][0] = "Images/C1.Microchitze/Img020ThirtyYears.png";	dbQImageSrc[20][0] = "regiowiki.hna.de";
                        dbQImage[20][1] = "Images/C1.Microchitze/Img020ThirtyYears.png";	dbQImageSrc[20][1] = "regiowiki.hna.de";
                        dbQImage[20][2] = "Images/C1.Microchitze/Img020ThirtyYears.png";	dbQImageSrc[20][2] = "regiowiki.hna.de";
                        dbAImage[20] = [];							dbAImageSrc[20] = [];
                        dbAImage[20][0] = "Images/C1.Microchitze/Img020ThirtyYearsAnswer.png";  dbAImageSrc[20][0] = "modelsforsale.com";
                        dbAImage[20][1] = "Images/C1.Microchitze/Img020ThirtyYearsAnswer.png";  dbAImageSrc[20][1] = "modelsforsale.com";
                        dbAImage[20][2] = "Images/C1.Microchitze/Img020ThirtyYearsAnswer.png";  dbAImageSrc[20][2] = "modelsforsale.com";
dbQList[21] = [];
dbQList[ 21][0] = "C&#xE2;te cuvinte avea numele ora&#x15F;ului american L.A. &#xEE;n 1781?"; 
dbQList[ 21][1] = "How many words did the name of the American city L.A. have in 1781?"; 
dbQList[ 21][2] = "Wie viele Worter hatte in 1781 der Name der amerikanischen Stadt L.A?"; 
                        dbAType[21] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[21] = []; dbAList[21][0] = 14;
                        dbACrit[21] = []; dbACrit[21][0] = 20; 
                        dbAnswer[21] = [];
                        dbAnswer[21][0] = "R&#x103;spuns corect: 14 <br/>(El Pueblo de Nuestra Se&ntilde;ora la Reina de los &Aacute;ngeles del R&iacute;o de Porci&uacute;ncula)"; //plaintext ro answer
                        dbAnswer[21][1] = "Right answer: 14 <br/>(El Pueblo de Nuestra Se&ntilde;ora la Reina de los &Aacute;ngeles del R&iacute;o de Porci&uacute;ncula)"; //plaintext en answer
                        dbAnswer[21][2] = "Richtige Antwort: 14 <br/>(El Pueblo de Nuestra Se&ntilde;ora la Reina de los &Aacute;ngeles del R&iacute;o de Porci&uacute;ncula)"; //plaintext de answer
                        dbExpln[21] = [];
                        dbExpln[21][0] = ""; //explanation ro
                        dbExpln[21][1] = ""; //explanation en
                        dbExpln[21][2] = ""; //explanation de
                        dbRefer[21] = [];
                        dbRefer[21][0] = ""; //references for ro explanation
                        dbRefer[21][1] = ""; //references for en explanation
                        dbRefer[21][2] = ""; //references for de explanation
                        dbQHint[21] = [];
                        dbQHint[21][0] = ""; //hint ro
                        dbQHint[21][1] = ""; //hint en
                        dbQHint[21][2] = ""; //hint de
                        dbQImage[21] = []; dbQImageSrc[21] = []; 
                        dbQImage[21][0] = "Images/C1.Microchitze/Img021Hollywood.png";	dbQImageSrc[21][0] = "www.cagle.com";
                        dbQImage[21][1] = "Images/C1.Microchitze/Img021Hollywood.png";	dbQImageSrc[21][1] = "www.cagle.com";
                        dbQImage[21][2] = "Images/C1.Microchitze/Img021Hollywood.png";	dbQImageSrc[21][2] = "www.cagle.com";
                        dbAImage[21] = [];							dbAImageSrc[21] = [];
                        dbAImage[21][0] = "Images/C1.Microchitze/Img021LA.png";  dbAImageSrc[21][0] = "cheezburger.com";
                        dbAImage[21][1] = "Images/C1.Microchitze/Img021LA.png";  dbAImageSrc[21][1] = "cheezburger.com";
                        dbAImage[21][2] = "Images/C1.Microchitze/Img021LA.png";  dbAImageSrc[21][2] = "cheezburger.com";
dbQList[22] = [];
dbQList[ 22][0] = "Ignor&#xE2;nd domnia de 20 de minute a lui Louis-Antoine (Ludovic XIX, ultimul rege Ludovic al Fran&#x21B;ei), c&#xE2;&#x21B;i regi numi&#x21B;i 'Ludovic' a avut Fran&#x21B;a?"; 
dbQList[ 22][1] = "Ignoring the 20-minute reign of Louis-Antoine (Louis XIX, the last king Louis of France), how many French kings were named 'Louis'?"; 
dbQList[ 22][2] = "Abgesehen von der 20-minutigen Herrschaft von Louis-Antoine (Ludwig XIX., der letzte K&#246;nig Ludwig in Frankreich), wie viele franz&#246;sische K&#246;nige hatten den Namen 'Ludwig'?"; 
                        dbAType[22] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[22] = []; dbAList[22][0] = 17;
                        dbACrit[22] = []; dbACrit[22][0] = 20;
                        dbAnswer[22] = [];
                        dbAnswer[22][0] = "R&#x103;spuns corect: 17"; //plaintext ro answer
                        dbAnswer[22][1] = "Right answer: 17"; //plaintext en answer
                        dbAnswer[22][2] = "Richtige Antwort: 17"; //plaintext de answer
                        dbExpln[22] = [];
                        dbExpln[22][0] = "Ludovic I p&#xE2;n&#x103; la Ludovic XVI &#x15F;i Ludovic XVIII. <br/>Ludovic-Carol, fiu al lui Ludovic XVI &#x15F;i al Mariei Antoinette, era succesorul nominal atunci c&#xE2;nd parin&#x21B;ii s&#x103;i au fost ghilotina&#x21B;i. &#xCE;ns&#x103;, din moment ce Fran&#x21B;a devenise deja Prima Republic&#x103;, el nu a devenit niciodat&#x103; rege &#xEE;n mod oficial. Titlul de Ludovic XVII i-a fost acordat doar de c&#x103;tre suporterii monarhiei &#x15F;i de c&#x103;tre Ludovic XVIII implicit prin alegerea num&#x103;rului regal (XVIII).<sup>[1]</sup>"; //explanation ro
                        dbExpln[22][1] = "Louis I to Louis XVI and Louis XVIII. <br/>Louis-Charles, son of Louis XVI and Marie Antoinette, was the nominal successor when his parents were beheaded during the French Revolution. However, since France was by then the First French Republic, he was never officially king, nor did he rule. The title Louis XVII was bestowed only by his royalist supporters and by Louis XVIII implicitly through his choice of regnal number (XVIII).<sup>[1]</sup>"; //explanation en
                        dbExpln[22][2] = "Ludwig I. bis Ludwig XVI. und Ludwig XVIII. <br/>Louis-Charles, Sohn von Ludwig XVI. und Marie Antoinette, war der nominale Nachfolger als seine Eltern enthauptet wurden. Allerdings, da Frankreich bis dann die Erste Republik geworden ist, hat Louis niemals regiert oder offiziell K&#246;nig geworden. Der Titel Ludwig XVII war ihm nur von Royalisten gew&#228;hrt, und von Ludwig XVIII eingeschlossen in seine Wahl der k&#228;niglichen Nummer (XVIII).<sup>[1]</sup>"; //explanation de
                        dbRefer[22] = [];
                        dbRefer[22][0] = "<a href='http://en.wikipedia.org/wiki/Louis_XVII' target='_blank'>[1] en.wikipedia.org/wiki/Louis_XVII</a>"; //references for ro explanation
                        dbRefer[22][1] = "<a href='http://en.wikipedia.org/wiki/Louis_XVII' target='_blank'>[1] en.wikipedia.org/wiki/Louis_XVII</a>"; //references for en explanation
                        dbRefer[22][2] = "<a href='http://en.wikipedia.org/wiki/Louis_XVII' target='_blank'>[1] en.wikipedia.org/wiki/Louis_XVII</a>"; //references for de explanation
                        dbQHint[22] = [];
                        dbQHint[22][0] = ""; //hint ro
                        dbQHint[22][1] = ""; //hint en
                        dbQHint[22][2] = ""; //hint de
                        dbQImage[22] = []; dbQImageSrc[22] = []; 
                        dbQImage[22][0] = "Images/C1.Microchitze/Img022LouisRo.png";	dbQImageSrc[22][0] = "www.toonpool.com";
                        dbQImage[22][1] = "Images/C1.Microchitze/Img022LouisEn.png";	dbQImageSrc[22][1] = "www.toonpool.com";
                        dbQImage[22][2] = "Images/C1.Microchitze/Img022LouisDe.png";	dbQImageSrc[22][2] = "www.toonpool.com";
                        dbAImage[22] = [];							dbAImageSrc[22] = [];
                        dbAImage[22][0] = "Images/C1.Microchitze/Img022LouisRo.png";  dbAImageSrc[22][0] = "www.toonpool.com";
                        dbAImage[22][1] = "Images/C1.Microchitze/Img022LouisEn.png";  dbAImageSrc[22][1] = "www.toonpool.com";
                        dbAImage[22][2] = "Images/C1.Microchitze/Img022LouisDe.png";  dbAImageSrc[22][2] = "www.toonpool.com";
dbQList[23] = [];
dbQList[ 23][0] = "&#xCE;n ce an a devenit Mihail Gorbaciov pre&#x15F;edinte al URSS?"; 
dbQList[ 23][1] = "When did Mikhail Gorbachev become the president of the USSR?"; 
dbQList[ 23][2] = "Wann ist Michail Gorbatschow Staatspr&#228;sident der Sowjetunion geworden?"; 
                        dbAType[23] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[23] = []; dbAList[23][0] = 1990;
                        dbACrit[23] = []; dbACrit[23][0] = 13;
                        dbAnswer[23] = [];
                        dbAnswer[23][0] = "R&#x103;spuns corect: 1990"; //plaintext ro answer
                        dbAnswer[23][1] = "Right answer: 1990"; //plaintext en answer
                        dbAnswer[23][2] = "Richtige Antwort: 1990"; //plaintext de answer
                        dbExpln[23] = [];
                        dbExpln[23][0] = "&#xCE;n martie 1990, Gorbaciov a fost ales pre&#x15F;edinte al Uniunii Sovietice cu 59% dintre voturile deputa&#x21B;ilor.<sup>[1]</sup>"; //explanation ro
                        dbExpln[23][1] = "In March 1990, Gorbachev was elected as the President of the Soviet Union with 59% of the Deputies' votes. He was the sole candidate on the ballot.<sup>[1]</sup>"; //explanation en
                        dbExpln[23][2] = "In M&#228;rz 1990 wurde Gorbatschow auf einem Sonderkongress der Volksdeputierten der UDSSR mit 59% der Stimmen zum Staatspr&#228;sidenten der Sowjetunion gew&#228;hlt.<sup>[1]</sup>"; //explanation de
                        dbRefer[23] = [];
                        dbRefer[23][0] = "<a href='http://en.wikipedia.org/wiki/Mikhail_Gorbachev' target='_blank'>[1] de.wikipedia.org/wiki/Gorbachev</a><br/><a href='http://en.wikipedia.org/wiki/President_of_the_Soviet_Union' target='_blank'>[2] de.wikipedia.org/wiki/President_of_the_Soviet_Union</a>"; //references for ro explanation
                        dbRefer[23][1] = "<a href='http://en.wikipedia.org/wiki/Mikhail_Gorbachev' target='_blank'>[1] de.wikipedia.org/wiki/Gorbachev</a><br/><a href='http://en.wikipedia.org/wiki/President_of_the_Soviet_Union' target='_blank'>[2] de.wikipedia.org/wiki/President_of_the_Soviet_Union</a>"; //references for en explanation
                        dbRefer[23][2] = "<a href='http://de.wikipedia.org/wiki/Michail_Sergejewitsch_Gorbatschow' target='_blank'>[1] de.wikipedia.org/wiki/Gorbatschow</a><br/><a href='http://en.wikipedia.org/wiki/President_of_the_Soviet_Union' target='_blank'>[2] de.wikipedia.org/wiki/President_of_the_Soviet_Union</a>"; //references for de explanation
                        dbQHint[23] = [];
                        dbQHint[23][0] = ""; //hint ro
                        dbQHint[23][1] = ""; //hint en
                        dbQHint[23][2] = ""; //hint de
                        dbQImage[23] = []; dbQImageSrc[23] = []; 
                        dbQImage[23][0] = "Images/C1.Microchitze/Img023BaldHairy.png";	dbQImageSrc[23][0] = "stephenwildish.tumblr.com";
                        dbQImage[23][1] = "Images/C1.Microchitze/Img023BaldHairy.png";	dbQImageSrc[23][1] = "stephenwildish.tumblr.com";
                        dbQImage[23][2] = "Images/C1.Microchitze/Img023BaldHairy.png";	dbQImageSrc[23][2] = "stephenwildish.tumblr.com";
                        dbAImage[23] = [];							dbAImageSrc[23] = [];
                        dbAImage[23][0] = "Images/C1.Microchitze/Img023Gorbachev.png";  dbAImageSrc[23][0] = "www.loc.gov";
                        dbAImage[23][1] = "Images/C1.Microchitze/Img023Gorbachev.png";  dbAImageSrc[23][1] = "www.loc.gov";
                        dbAImage[23][2] = "Images/C1.Microchitze/Img023Gorbachev.png";  dbAImageSrc[23][2] = "www.loc.gov";
dbQList[24] = [];
dbQList[ 24][0] = "&#xCE;n ce tara s-a nascut Cristofor Columb?"; 
dbQList[ 24][1] = "In which country was Christopher Columbus born?"; 
dbQList[ 24][2] = "In welchem Land wurde Christoph Kolumbus geboren?"; 
                        dbAType[24] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[24] = []; dbAList[24][0] = "Genova"; dbAList[24][1] = "Genoa"; dbAList[24][2] = "Genua";
                        dbACrit[24] = []; dbACrit[24][0] = 13; dbACrit[24][1] = 13; dbACrit[24][2] = 13;
                        dbAnswer[24] = [];
                        dbAnswer[24][0] = "R&#x103;spuns corect: Republica Genova"; //plaintext ro answer
                        dbAnswer[24][1] = "Right answer: the Republic of Genoa"; //plaintext en answer
                        dbAnswer[24][2] = "Richtige Antwort: Republik Genua"; //plaintext de answer
                        dbExpln[24] = [];
                        dbExpln[24][0] = "Magnifica Republic&#x103; Genova (&#xEE;n italian&#x103; <i>Serenissima Repubblica di Genova</i>) a fost un stat independent pe actualul teritoriu al Italiei din 1005 pan&#x103; &#xEE;n 1797.<sup>[1]</sup>"; //explanation ro
                        dbExpln[24][1] = "The Most Serene Republic of Genoa (Italian: <i>Serenissima Repubblica di Genova</i>) was an independent state from 1005 to 1797.<sup>[1]</sup>"; //explanation en
                        dbExpln[24][2] = "Die Erlauchteste Republik Genua (italienisch <i>Serenissima Repubblica di Genova</i>) war eine Republik bzw. Adelsrepublik im heutigen Italien von 1005 bis 1797.<sup>[1]</sup>"; //explanation de
                        dbRefer[24] = [];
                        dbRefer[24][0] = "<a href='http://en.wikipedia.org/wiki/Republic_of_Genoa' target='_blank'>[1] en.wikipedia.org/wiki/Republic_of_Genoa</a>"; //references for ro explanation
                        dbRefer[24][1] = "<a href='http://en.wikipedia.org/wiki/Republic_of_Genoa' target='_blank'>[1] en.wikipedia.org/wiki/Republic_of_Genoa</a>"; //references for en explanation
                        dbRefer[24][2] = "<a href='http://de.wikipedia.org/wiki/Republik_Genua' target='_blank'>[1] de.wikipedia.org/wiki/Republik_Genua</a>"; //references for de explanation
                        dbQHint[24] = [];
                        dbQHint[24][0] = ""; //hint ro
                        dbQHint[24][1] = ""; //hint en
                        dbQHint[24][2] = ""; //hint de
                        dbQImage[24] = []; dbQImageSrc[24] = []; 
                        dbQImage[24][0] = "Images/C1.Microchitze/Img024Columbus.png";	dbQImageSrc[24][0] = "cocos-seo.blogspot.com";
                        dbQImage[24][1] = "Images/C1.Microchitze/Img024Columbus.png";	dbQImageSrc[24][1] = "cocos-seo.blogspot.com";
                        dbQImage[24][2] = "Images/C1.Microchitze/Img024Columbus.png";	dbQImageSrc[24][2] = "cocos-seo.blogspot.com";
                        dbAImage[24] = [];							dbAImageSrc[24] = [];
                        dbAImage[24][0] = "Images/C1.Microchitze/Img024Genoa.png";  dbAImageSrc[24][0] = "en.wikipedia.org";
                        dbAImage[24][1] = "Images/C1.Microchitze/Img024Genoa.png";  dbAImageSrc[24][1] = "en.wikipedia.org";
                        dbAImage[24][2] = "Images/C1.Microchitze/Img024Genoa.png";  dbAImageSrc[24][2] = "en.wikipedia.org";
dbQList[25] = [];
dbQList[ 25][0] = "Care dou&#x103; state au semnat Tratatul de la Frankfurt (10 mai 1871) la sf&#xE2;r&#x15F;itul r&#x103;zboiului franco-prusac?"; 
dbQList[ 25][1] = "Which two states signed the Treaty of Frankfurt (10<sup>th</sup> of May 1871) at the end of the Franco-Prussian War?"; 
dbQList[ 25][2] = "Welche zwei Staaten haben den Frieden von Frankfurt (10. Mai 1871) geschlossen am Ende des Fraz&#246;sisch-Preu&#223;ischen Krieg?"; 
                        dbAType[25] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[25] = []; dbAList[25][0] = "German";  dbAList[25][1] = "Deutsch";
                        dbACrit[25] = []; dbACrit[25][0] = 13; dbACrit[25][1] = 13;
                        dbAnswer[25] = [];
                        dbAnswer[25][0] = "R&#x103;spuns corect: A Treia Republic&#x103; Francez&#x103; &#x15F;i Imperiul German"; //plaintext ro answer
                        dbAnswer[25][1] = "Right answer: The Third French Republic and the German Empire"; //plaintext en answer
                        dbAnswer[25][2] = "Richtige Antwort: die Dritte Franz??che Republik und das Deutsche (Keiser-)Reich"; //plaintext de answer
                        dbExpln[25] = [];
                        dbExpln[25][0] = "R&#x103;zboiul a &#xEE;nceput &#xEE;n vara anului 1870 &#xEE;ntre Al Doilea Imperiul Francez &#x15F;i o coali&#x21B;ie german&#x103; condus&#x103; de Prusia, deci r&#x103;zboiul franco-prusac. Dar Imperiul Francez a c&#x103;zut (&#xEE;n septembrie 1870, dup&#x103; capturarea lui Napoleon III) &#x15F;i a Treia Republic&#x103; Francez&#x103; a fost proclamat&#x103;. De partea cealalt&#x103;, &#xEE;n timpul Asediului Parisului pe 18 ianuarie 1871, regele Wilhelm I al Prusiei a fost proclamat &#xCE;mp&#x103;rat al Imperiului German &#xEE;n Sala Oglinzilor, Versailles.<sup>[1][2]</sup>"; //explanation ro
                        dbExpln[25][1] = "The war began in the summer of 1870 between the Second French Empire and a German coalition led by Prussia, hence the name franco-prussian. However, the French Empire fell (in September 1870, after Napoleon III was captured) and the Third French Republic was proclaimed. On the other side, during the Siege of Paris on 18 January 1871, King Wilhelm I of Prussia was proclaimed Emperor of the German Empire in the Hall of Mirrors at the Palace of Versailles.<sup>[1][2]</sup>"; //explanation en
                        dbExpln[25][2] = "Der Krieg began in Sommer von 1870 zwischen den Zweiten Franz&#246;sischen Reich und ein Deutscher Bund angef&#252;hrt von Preu&#223;en. Dennoch, w&#228;hrend der Krieg wurde der Franz&#246;sische Reich in September 1870 durch die Dritte Republik ersetzt, nachdem Napoleon III. gefangen genommen wurde. Auf der anderen Seite, der Preussische K&#246;nig Wilhelm I. wurde, w&#228;herend der Belagerung von Paris, am 18. Januar 1871 im Spiegelsaal des Schlosses von Versailles als Deutscher Kaiser proklamiert.<sup>[1][2]</sup>"; //explanation de
                        dbRefer[25] = [];
                        dbRefer[25][0] = "<a href='http://ro.wikipedia.org/wiki/R%C4%83zboiul_franco-prusac' target='_blank'>[1] ro.wikipedia.org/wiki/r&#x103;zboiului-franco-prusac</a> <br/><a href='http://en.wikipedia.org/wiki/Treaty_of_Frankfurt_(1871)' target='_blank'>[2] en.wikipedia.org/wiki/Treaty-of-Frankfurt</a>"; //references for ro explanation
                        dbRefer[25][1] = "<a href='http://en.wikipedia.org/wiki/Franco-Prussian_War' target='_blank'>[1] en.wikipedia.org/wiki/Franco-Prussian-War</a> <br/><a href='http://en.wikipedia.org/wiki/Treaty_of_Frankfurt_(1871)' target='_blank'>[2] en.wikipedia.org/wiki/Treaty-of-Frankfurt</a>"; //references for en explanation
                        dbRefer[25][2] = "<a href='http://de.wikipedia.org/wiki/Deutsch-Franz%C3%B6sischer_Krieg' target='_blank'>[1] de.wikipedia.org/wiki/Deutsch-Franz&#246;sischer_Krieg</a> <br/><a href='http://de.wikipedia.org/wiki/Friede_von_Frankfurt' target='_blank'>[2] de.wikipedia.org/wiki/Friede_von_Frankfurt</a>"; //references for de explanation
                        dbQHint[25] = [];
                        dbQHint[25][0] = ""; //hint ro
                        dbQHint[25][1] = ""; //hint en
                        dbQHint[25][2] = ""; //hint de
                        dbQImage[25] = []; dbQImageSrc[25] = []; 
                        dbQImage[25][0] = "Images/C1.Microchitze/Img025War1870.png";	dbQImageSrc[25][0] = "www.welt.de";
                        dbQImage[25][1] = "Images/C1.Microchitze/Img025War1870.png";	dbQImageSrc[25][1] = "www.welt.de";
                        dbQImage[25][2] = "Images/C1.Microchitze/Img025War1870.png";	dbQImageSrc[25][2] = "www.welt.de";
                        dbAImage[25] = [];							dbAImageSrc[25] = [];
                        dbAImage[25][0] = "Images/C1.Microchitze/Img025Unification.png";  dbAImageSrc[25][0] = "ukrmap.su";
                        dbAImage[25][1] = "Images/C1.Microchitze/Img025Unification.png";  dbAImageSrc[25][1] = "ukrmap.su";
                        dbAImage[25][2] = "Images/C1.Microchitze/Img025Unification.png";  dbAImageSrc[25][2] = "ukrmap.su";
dbQList[26] = [];
dbQList[ 26][0] = "&#xCE;n ce lun&#x103; se serbeaz&#x103; Revolu&#x21B;ia din Octombrie?"; 
dbQList[ 26][1] = "In which month is the October Revolution celebrated?"; 
dbQList[ 26][2] = "In welchen Monat ist die Oktoberrevolution gefeiert?"; 
                        dbAType[26] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[26] = []; dbAList[26][0] = "Noiem";  dbAList[26][1] = "Novem"; dbAList[26][2] = "11";
                        dbACrit[26] = []; dbACrit[26][0] = 13; dbACrit[26][1] = 13; dbACrit[26][2] = 13;
                        dbAnswer[26] = [];
                        dbAnswer[26][0] = "R&#x103;spuns corect: Noiembrie"; //plaintext ro answer
                        dbAnswer[26][1] = "Right answer: November"; //plaintext en answer
                        dbAnswer[26][2] = "Richtige Antwort: November"; //plaintext de answer
                        dbExpln[26] = [];
                        dbExpln[26][0] = "Revolu&#x21B;ia din Octombrie a fost lovitura de stat prin care bol&#x15F;evicii au preluat puterea. Insurec&#x21B;ia armat&#x103; de la Petrograd este datat&#x103; &#xEE;n mod tradi&#x21B;ional cu 25 octombrie 1917 (dup&#x103; calendarul Iulian), care corespunde cu 7 noiembrie 1917(dup&#x103; calendarul Gregorian). Aniversarea Revolu&#x21B;iei din Octombrie la 7 noiembrie a fost ziua na&#x21B;ional&#x103; a Uniunii Sovietice &#xEE;ncep&#xE2;nd cu 1918 &#x15F;i &#xEE;nc&#x103; este s&#x103;rb&#x103;toare public&#x103; &#xEE;n &#x21B;&#x103;ri precum Belarus sau Kirgistan."; //explanation ro
                        dbExpln[26][1] = "The October Socialist Revolution, commonly referred to as Red October, was a seizure of state power instrumental in the larger Russian Revolution of 1917. It took place with an armed insurrection in Petrograd traditionally dated to 25 October 1917 (Julian calendar), which corresponds to 7 November 1917 in the Gregorian calendar). 7 November, the anniversary of the October Revolution, was the official national day of the Soviet Union from 1918 onward and still is a public holiday in countries such as Belarus and Kyrgyzstan."; //explanation en
                        dbExpln[26][2] = "Die Oktoberrevolution, auch als Roter Oktober bekannt, war eine gewaltsame Macht&#252;bernahme durch die russischen kommunistischen Bolschewiki, dessen bewaffneter Aufstand in Petrograd am 25. Oktober 1917 (julianischer Kalender) oder 7. November 1917 (gregorianischer Kalender) statt fand. Der 7. November, der Jahrestag der Oktoberrevolution, war der offizielle Nationalfeiertag der Sowjetunion seit 1918 und ist immer noch ein Feiertag in L&#228;nder wie Wei&#223;russland oder Kirgistan."; //explanation de
                        dbRefer[26] = [];
                        dbRefer[26][0] = ""; //references for ro explanation
                        dbRefer[26][1] = ""; //references for en explanation
                        dbRefer[26][2] = ""; //references for de explanation
                        dbQHint[26] = [];
                        dbQHint[26][0] = ""; //hint ro
                        dbQHint[26][1] = ""; //hint en
                        dbQHint[26][2] = ""; //hint de
                        dbQImage[26] = []; dbQImageSrc[26] = []; 
                        dbQImage[26][0] = "Images/C1.Microchitze/Img026_1917.png";	dbQImageSrc[26][0] = "ciml.250x.com";
                        dbQImage[26][1] = "Images/C1.Microchitze/Img026_1917.png";	dbQImageSrc[26][1] = "ciml.250x.com";
                        dbQImage[26][2] = "Images/C1.Microchitze/Img026_1917.png";	dbQImageSrc[26][2] = "ciml.250x.com";
                        dbAImage[26] = [];							dbAImageSrc[26] = [];
                        dbAImage[26][0] = "Images/C1.Microchitze/Img026_1917.png";  dbAImageSrc[26][0] = "ciml.250x.com";
                        dbAImage[26][1] = "Images/C1.Microchitze/Img026_1917.png";  dbAImageSrc[26][1] = "ciml.250x.com";
                        dbAImage[26][2] = "Images/C1.Microchitze/Img026_1917.png";  dbAImageSrc[26][2] = "ciml.250x.com";
dbQList[27] = [];
dbQList[ 27][0] = "&#xCE;n ce an a avut loc ultima declara&#x21B;ie oficial&#x103; de r&#x103;zboi din partea Statelor Unite?"; 
dbQList[ 27][1] = "In which year have the United States issued the last formal declaration of war?"; 
dbQList[ 27][2] = "In welchem Jahr haben die Vereinigte Staaten zum letzten Mal eine formale Kriegserkl&#xE4;rung gemacht?"; 
                        dbAType[27] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[27] = []; dbAList[27][0] = 1942;
                        dbACrit[27] = []; dbACrit[27][0] = 20;
                        dbAnswer[27] = [];
                        dbAnswer[27][0] = "R&#x103;spuns corect: 1942"; //plaintext ro answer
                        dbAnswer[27][1] = "Right answer: 1942"; //plaintext en answer
                        dbAnswer[27][2] = "Richtige Antwort: 1942"; //plaintext de answer
                        dbExpln[27] = [];
                        dbExpln[27][0] = "Statele Unite au emis o legisla&#x21B;ie a Congresului care s&#x103; con&#x21B;in&#x103; expresia \"Declara&#x21B;ie de R&#x103;zboi\" &#xEE;n titlu pentru doar 5 r&#x103;zboaie. Acest lucru s-a &#xEE;nt&#xE2;mplat ultima dat&#x103; &#xEE;n Cel de-al Doilea R&#x103;zboi Mondial, cu declara&#x21B;ii de razboi impotriva Japoniei, Germaniei si Italiei in 1941 si impotriva Bulgariei, Ungariei si Rom&#xE2;niei in 1942. Toate conflictele mai recente au fost doar autorizate de Congres, autorizate de Consiliul de Securitate al Natiunilor Unite sau au fost conflicte nedeclarate, toate fara o declara&#x21B;ie formala de razboi.<sup>[1]</sup>"; //explanation ro
                        dbExpln[27][1] = "For only 5 wars have the United States issued a Congress legislation that uses the phrase \"Declaration of War\" in the title. The last instance of this was World War II, with declarations of war against Japan, Germany and Italy in 1941 and against Bulgaria, Hungary and Romania in 1942. All the more recent conflicts were merely authorized by the Congress, authorized by the United Nations Security Council or were undeclared conflicts, all without a formal declaration of war.<sup>[1]</sup>"; //explanation en
                        dbExpln[27][2] = "Die Vereinigte Staaten haben fuer nur 5 Kriege Kongress Legislaturen mit \"Kriegserkl&#xE4;rung\" im Titel gehabt. Zum letzten Mal ist das im Zweiten Weltkrig passiert, mit Kriegserkl&#xE4;rung gegen Japan, Deutschland und Italien in 1941 und gegen Bulgarien, Ungarn und Rumanien in 1942. Alle neuere Konflikte waren entweder von Kongress oder vom Sicherheitsrat der UN genehmigt, oder waren &#xFCberhaupt nicht deklariert, alle ohne formale Kriegserklaerung.<sup>[1]</sup>"; //explanation de
                        dbRefer[27] = [];
                        dbRefer[27][0] = "<a href='http://en.wikipedia.org/wiki/Declaration_of_war_by_the_United_States' target='_blank'>[1] en.wikipedia.org/wiki/Declaration_of_war_by_the_United_States</a>"; //references for ro explanation
                        dbRefer[27][1] = "<a href='http://en.wikipedia.org/wiki/Declaration_of_war_by_the_United_States' target='_blank'>[1] en.wikipedia.org/wiki/Declaration_of_war_by_the_United_States</a>"; //references for en explanation
                        dbRefer[27][2] = "<a href='http://en.wikipedia.org/wiki/Declaration_of_war_by_the_United_States' target='_blank'>[1] en.wikipedia.org/wiki/Declaration_of_war_by_the_United_States</a>"; //references for de explanation
                        dbQHint[27] = [];
                        dbQHint[27][0] = ""; //hint ro
                        dbQHint[27][1] = ""; //hint en
                        dbQHint[27][2] = ""; //hint de
                        dbQImage[27] = []; dbQImageSrc[27] = []; 
                        dbQImage[27][0] = "Images/C1.Microchitze/Img027WWIChainRo.png";	dbQImageSrc[27][0] = "www.docstoc.com";
                        dbQImage[27][1] = "Images/C1.Microchitze/Img027WWIChainEn.png";	dbQImageSrc[27][1] = "www.docstoc.com";
                        dbQImage[27][2] = "Images/C1.Microchitze/Img027WWIChainDe.png";	dbQImageSrc[27][2] = "www.docstoc.com";
                        dbAImage[27] = [];							dbAImageSrc[27] = [];
                        dbAImage[27][0] = "Images/C1.Microchitze/Img027DeclWar.png";  dbAImageSrc[27][0] = "www.truthdig.com";
                        dbAImage[27][1] = "Images/C1.Microchitze/Img027DeclWar.png";  dbAImageSrc[27][1] = "www.truthdig.com";
                        dbAImage[27][2] = "Images/C1.Microchitze/Img027DeclWar.png";  dbAImageSrc[27][2] = "www.truthdig.com";
dbQList[28] = [];
dbQList[ 28][0] = "Ce s-a intamplat pe 31 aprilie 1945?"; 
dbQList[ 28][1] = "What happened on the 31<sup>st</sup> of April 1945?"; 
dbQList[ 28][2] = "Was ist am 31. April 1945 passiert?"; 
                        dbAType[28] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[28] = []; dbAList[28][0] = "nimic"; dbAList[28][1] = "nothing"; dbAList[28][2] = "nichts"; dbAList[28][3] = "kein"; dbAList[28][4] = "exist";  dbAList[28][5] = "31";
                        dbACrit[28] = []; dbACrit[28][0] = 13; dbACrit[28][1] = 13; dbACrit[28][2] = 13; dbACrit[28][3] = 13; dbACrit[28][4] = 13; dbACrit[28][5] = 13;
                        dbAnswer[28] = [];
                        dbAnswer[28][0] = "R&#x103;spuns corect: nu exista 31 aprilie"; //plaintext ro answer
                        dbAnswer[28][1] = "Right answer: there is no 31<sup>st</sup> of April"; //plaintext en answer
                        dbAnswer[28][2] = "Richtige Antwort: Es gibt kein 31. April"; //plaintext de answer
                        dbExpln[28] = [];
                        dbExpln[28][0] = ""; //explanation ro
                        dbExpln[28][1] = ""; //explanation en
                        dbExpln[28][2] = ""; //explanation de
                        dbRefer[28] = [];
                        dbRefer[28][0] = ""; //references for ro explanation
                        dbRefer[28][1] = ""; //references for en explanation
                        dbRefer[28][2] = ""; //references for de explanation
                        dbQHint[28] = [];
                        dbQHint[28][0] = ""; //hint ro
                        dbQHint[28][1] = ""; //hint en
                        dbQHint[28][2] = ""; //hint de
                        dbQImage[28] = []; dbQImageSrc[28] = []; 
                        dbQImage[28][0] = "Images/C1.Microchitze/Img028April1945.png";	dbQImageSrc[28][0] = "www.lonesentry.com";
                        dbQImage[28][1] = "Images/C1.Microchitze/Img028April1945.png";	dbQImageSrc[28][1] = "www.lonesentry.com";
                        dbQImage[28][2] = "Images/C1.Microchitze/Img028April1945.png";	dbQImageSrc[28][2] = "www.lonesentry.com";
                        dbAImage[28] = [];							dbAImageSrc[28] = [];
                        dbAImage[28][0] = "Images/C1.Microchitze/Img028AprilFools.png";  dbAImageSrc[28][0] = "www.cute-calendar.com";
                        dbAImage[28][1] = "Images/C1.Microchitze/Img028AprilFools.png";  dbAImageSrc[28][1] = "www.cute-calendar.com";
                        dbAImage[28][2] = "Images/C1.Microchitze/Img028AprilFools.png";  dbAImageSrc[28][2] = "www.cute-calendar.com";
dbQList[29] = [];
dbQList[ 29][0] = "Care era numele pre&#x15F;edintelui Rom&#xE2;niei &#xEE;n 1999?"; 
dbQList[ 29][1] = "Which was the name of the Romanian President in 1999?"; 
dbQList[ 29][2] = "Wie war der Name des rum&#228;nischen Presidenten in 1999?"; 
                        dbAType[29] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[29] = []; dbAList[29][0] = "ohannis";
                        dbACrit[29] = []; dbACrit[29][0] = 13;
                        dbAnswer[29] = [];
                        dbAnswer[29][0] = "R&#x103;spuns corect: Klaus Iohannis"; //plaintext ro answer
                        dbAnswer[29][1] = "Right answer: Klaus Iohannis"; //plaintext en answer
                        dbAnswer[29][2] = "Richtige Antwort: Klaus Iohannis"; //plaintext de answer
                        dbExpln[29] = [];
                        dbExpln[29][0] = "Numele pre&#x15F;edintelui era acela&#x15F;i &#xEE;n 1999 ca &#x15F;i acum."; //explanation ro
                        dbExpln[29][1] = "The name of the President was the same in 1999 as it is now. "; //explanation en
                        dbExpln[29][2] = "Der Name des Presidenten war derselbe in 1999 wie heute."; //explanation de
                        dbRefer[29] = [];
                        dbRefer[29][0] = ""; //references for ro explanation
                        dbRefer[29][1] = ""; //references for en explanation
                        dbRefer[29][2] = ""; //references for de explanation
                        dbQHint[29] = [];
                        dbQHint[29][0] = ""; //hint ro
                        dbQHint[29][1] = ""; //hint en
                        dbQHint[29][2] = ""; //hint de
                        dbQImage[29] = []; dbQImageSrc[29] = []; 
                        dbQImage[29][0] = "Images/C1.Microchitze/Img029HeadQM.png";	dbQImageSrc[29][0] = "fellowshipoftheminds.com";
                        dbQImage[29][1] = "Images/C1.Microchitze/Img029HeadQM.png";	dbQImageSrc[29][1] = "fellowshipoftheminds.com";
                        dbQImage[29][2] = "Images/C1.Microchitze/Img029HeadQM.png";	dbQImageSrc[29][2] = "fellowshipoftheminds.com";
                        dbAImage[29] = [];							dbAImageSrc[29] = [];
                        dbAImage[29][0] = "Images/C1.Microchitze/Img029Iohannis.png";  dbAImageSrc[29][0] = "www.iohannispresedinte.ro";
                        dbAImage[29][1] = "Images/C1.Microchitze/Img029Iohannis.png";  dbAImageSrc[29][1] = "www.iohannispresedinte.ro";
                        dbAImage[29][2] = "Images/C1.Microchitze/Img029Iohannis.png";  dbAImageSrc[29][2] = "www.iohannispresedinte.ro";
                        
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GEOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[30] = [];
dbQList[ 30][0] = "Care v&#xE2;rf montan de pe P&#x103;m&#xE2;nt este cel mai dep&#x103;rtat de centrul P&#x103;m&#xE2;ntului?"; 
dbQList[ 30][1] = "Which mountain top on the Earth is the farthest away from the center of the Earth?"; 
dbQList[ 30][2] = "Welcher Berggipfel auf der Erde ist am weitesten vom Mittelpunkt der Erde entfernt?"; 
                        dbAType[30] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[30] = []; dbAList[30][0] = "Chimborazo";
                        dbACrit[30] = []; dbACrit[30][0] = 13;
                        dbAnswer[30] = [];
                        dbAnswer[30][0] = "Chimborazo (Ecuador)"; //plaintext ro answer
                        dbAnswer[30][1] = "Chimborazo (Ecuador)"; //plaintext en answer
                        dbAnswer[30][2] = "Chimborazo (Ecuador)"; //plaintext de answer
                        dbExpln[30] = [];
                        dbExpln[30][0] = "Chimborazo are o altitudine de 6310 metri. Dar P&#x103;m&#xE2;ntul nu este o sfer&#x103; perfect&#x103; - este un sferoid aplatizat la poli &#x15F;i bombat la ecuator. Chimborazo este localizat la doar un grad sud de ecuator, la o distan&#x163;&#x103; de 6384 kilometri de centrul P&#x103;m&#xE2;ntului (aproximativ 2 kilometri mai departe dec&#xE2;t Everest). "; //explanation ro
                        dbExpln[30][1] = "Chimborazo has an altitude of 6310 meters. But Earth is not a perfect sphere - it's an oblate spheroid, widest at its equator. Chimborazo is just one degree south of the equator. At that location it is 6384 kilometers above Earth's center (about 2 kilometers farther than Mount Everest)."; //explanation en
                        dbExpln[30][2] = "Chimborazo hat eine H&#246;he von 6310 Meter. Aber die Erde ist nicht eine perfekte Sph&#228;re - es ist ein abgeplatteten Sph&#228;roid, breiter am &#xC4;quator. Chimborazo ist nur ein Grad s&#252;dlich vom &#196;quator. An dieser Stelle ist es 6384 Kilometer vom Mittelpunkt der Erde entfernt (ungef&#228;hr 2 kilometer weiter als Everest)."; //explanation de
                        dbRefer[30] = [];
                        dbRefer[30][0] = ""; //references for ro explanation
                        dbRefer[30][1] = ""; //references for en explanation
                        dbRefer[30][2] = ""; //references for de explanation
                        dbQHint[30] = [];
                        dbQHint[30][0] = ""; //hint ro
                        dbQHint[30][1] = ""; //hint en
                        dbQHint[30][2] = ""; //hint de
                        dbQImage[30] = []; dbQImageSrc[30] = []; 
                        dbQImage[30][0] = "Images/C1.Microchitze/Img030Mountain.png";	dbQImageSrc[30][0] = "www.toonpool.com";
                        dbQImage[30][1] = "Images/C1.Microchitze/Img030Mountain.png";	dbQImageSrc[30][1] = "www.toonpool.com";
                        dbQImage[30][2] = "Images/C1.Microchitze/Img030Mountain.png";	dbQImageSrc[30][2] = "www.toonpool.com";
                        dbAImage[30] = [];							dbAImageSrc[30] = [];
                        dbAImage[30][0] = "Images/C1.Microchitze/Img030Chimborazo.png";  dbAImageSrc[30][0] = "www.featurepics.com";
                        dbAImage[30][1] = "Images/C1.Microchitze/Img030Chimborazo.png";  dbAImageSrc[30][1] = "www.featurepics.com";
                        dbAImage[30][2] = "Images/C1.Microchitze/Img030Chimborazo.png";  dbAImageSrc[30][2] = "www.featurepics.com";
dbQList[31] = [];
dbQList[ 31][0] = "Se poate organiza o b&#x103;taie cu z&#x103;pad&#x103; natural&#x103; &#xEE;n Africa."; 
dbQList[ 31][1] = "You could organize a snow fight with natural snow in Africa."; 
dbQList[ 31][2] = "Man kann in Afrika eine Schneeballschlacht mit nat&#252;rlicher Schnee organisieren."; 
                        dbAType[31] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[31] = []; dbAList[31][0] = "f";
                        dbACrit[31] = []; dbACrit[31][0] = 14; 
                        dbAnswer[31] = [];
                        dbAnswer[31][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[31][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[31][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[31] = [];
                        dbExpln[31][0] = "De exemplu, v&#xE2;rful Kilimanjaro este acoperit de z&#x103;pad&#x103; &#x15F;i ghea&#x163;&#x103;."; //explanation ro
                        dbExpln[31][1] = "For instance, the top of Kilimanjaro is covered in snow and ice."; //explanation en
                        dbExpln[31][2] = "Zum Beispiel, die Bergspitze von Kilimanjaro ist von Schnee und Eis bedecked."; //explanation de
                        dbRefer[31] = [];
                        dbRefer[31][0] = ""; //references for ro explanation
                        dbRefer[31][1] = ""; //references for en explanation
                        dbRefer[31][2] = ""; //references for de explanation
                        dbQHint[31] = [];
                        dbQHint[31][0] = ""; //hint ro
                        dbQHint[31][1] = ""; //hint en
                        dbQHint[31][2] = ""; //hint de
                        dbQImage[31] = []; dbQImageSrc[31] = []; 
                        dbQImage[31][0] = "Images/C1.Microchitze/Img031Snowman.png";	dbQImageSrc[31][0] = "www.flaticon.com";
                        dbQImage[31][1] = "Images/C1.Microchitze/Img031Snowman.png";	dbQImageSrc[31][1] = "www.flaticon.com";
                        dbQImage[31][2] = "Images/C1.Microchitze/Img031Snowman.png";	dbQImageSrc[31][2] = "www.flaticon.com";
                        dbAImage[31] = [];							dbAImageSrc[31] = [];
                        dbAImage[31][0] = "Images/C1.Microchitze/Img031Kilimanjaro.png";  dbAImageSrc[31][0] = "www.zagranitsa.info";
                        dbAImage[31][1] = "Images/C1.Microchitze/Img031Kilimanjaro.png";  dbAImageSrc[31][1] = "www.zagranitsa.info";
                        dbAImage[31][2] = "Images/C1.Microchitze/Img031Kilimanjaro.png";  dbAImageSrc[31][2] = "www.zagranitsa.info";
dbQList[32] = [];
dbQList[ 32][0] = "De la ce animal provine denumirea insulelor Canare din Oceanul Atlantic?"; 
dbQList[ 32][1] = "What animal are the Canary Islands named after?"; 
dbQList[ 32][2] = "Nach welchem Tier sind die Kanarischen Inseln benannt?"; 
                        dbAType[32] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[32] = []; dbAList[32][0] = "cain"; dbAList[32][1] = "dog"; dbAList[32][2] = "Hund";
                        dbACrit[32] = []; dbACrit[32][0] = 13; dbACrit[32][1] = 13; dbACrit[32][2] = 13;
                        dbAnswer[32] = [];
                        dbAnswer[32][0] = "R&#x103;spuns corect: c&#xE2;ine"; //plaintext ro answer
                        dbAnswer[32][1] = "Right answer: dog"; //plaintext en answer
                        dbAnswer[32][2] = "Richtige Antwort: Hund"; //plaintext de answer
                        dbExpln[32] = [];
                        dbExpln[32][0] = "Numele Insulelor Canare vine de la cuv&#xE2;ntul latin <i>canis</i> (c&#xE2;ine). Mai t&#xE2;rziu, canarii au primit numele de la insule.<sup>[1]</sup>"; //explanation ro
                        dbExpln[32][1] = "The Canary Islands have their name from the latin word <i>canis</i> (dog). Later, the canary birds got their name from the islands.<sup>[1]</sup>"; //explanation en
                        dbExpln[32][2] = "Die Kanarischen Inseln haben ihren Namen von dem lateinischen Wort <i>canis</i> (Hund). Sp&#228;ter haben die Kanarienv&#246;gel ihren Namen von den Inseln bekommen.<sup>[1]</sup>"; //explanation de
                        dbRefer[32] = [];
                        dbRefer[32][0] = "<a href='http://en.wikipedia.org/wiki/Canary_Islands' target='_blank'>[1] en.wikipedia.org/wiki/Canary_Islands</a>"; //references for ro explanation
                        dbRefer[32][1] = "<a href='http://en.wikipedia.org/wiki/Canary_Islands' target='_blank'>[1] en.wikipedia.org/wiki/Canary_Islands</a>"; //references for en explanation
                        dbRefer[32][2] = "<a href='http://en.wikipedia.org/wiki/Canary_Islands' target='_blank'>[1] en.wikipedia.org/wiki/Canary_Islands</a>"; //references for de explanation
                        dbQHint[32] = [];
                        dbQHint[32][0] = ""; //hint ro
                        dbQHint[32][1] = ""; //hint en
                        dbQHint[32][2] = ""; //hint de
                        dbQImage[32] = []; dbQImageSrc[32] = []; 
                        dbQImage[32][0] = "Images/C1.Microchitze/Img032Canary.png";	dbQImageSrc[32][0] = "www.californiaair.net";
                        dbQImage[32][1] = "Images/C1.Microchitze/Img032Canary.png";	dbQImageSrc[32][1] = "www.californiaair.net";
                        dbQImage[32][2] = "Images/C1.Microchitze/Img032Canary.png";	dbQImageSrc[32][2] = "www.californiaair.net";
                        dbAImage[32] = [];							dbAImageSrc[32] = [];
                        dbAImage[32][0] = "Images/C1.Microchitze/Img032Crest.png";  dbAImageSrc[32][0] = "johnansell.wordpress.com";
                        dbAImage[32][1] = "Images/C1.Microchitze/Img032Crest.png";  dbAImageSrc[32][1] = "johnansell.wordpress.com";
                        dbAImage[32][2] = "Images/C1.Microchitze/Img032Crest.png";  dbAImageSrc[32][2] = "johnansell.wordpress.com";
dbQList[33] = [];
dbQList[ 33][0] = "Care stat al Statelor Unite are teritoriul cel mai sudic?"; 
dbQList[ 33][1] = "Which is the southernmost US state?"; 
dbQList[ 33][2] = "Welcher ist der s&#252;dlichste Staat der USA?"; 
                        dbAType[33] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[33] = []; dbAList[33][0] = "Hawai";
                        dbACrit[33] = []; dbACrit[33][0] = 13;
                        dbAnswer[33] = [];
                        dbAnswer[33][0] = "R&#x103;spuns corect: Hawaii"; //plaintext ro answer
                        dbAnswer[33][1] = "Right answer: Hawaii"; //plaintext en answer
                        dbAnswer[33][2] = "Richtige Antwort: Hawaii"; //plaintext de answer
                        dbExpln[33] = [];
                        dbExpln[33][0] = ""; //explanation ro
                        dbExpln[33][1] = ""; //explanation en
                        dbExpln[33][2] = ""; //explanation de
                        dbRefer[33] = [];
                        dbRefer[33][0] = ""; //references for ro explanation
                        dbRefer[33][1] = ""; //references for en explanation
                        dbRefer[33][2] = ""; //references for de explanation
                        dbQHint[33] = [];
                        dbQHint[33][0] = ""; //hint ro
                        dbQHint[33][1] = ""; //hint en
                        dbQHint[33][2] = ""; //hint de
                        dbQImage[33] = []; dbQImageSrc[33] = []; 
                        dbQImage[33][0] = "Images/C1.Microchitze/Img033US.png";	dbQImageSrc[33][0] = "www.bestwallpaperdesign.com";
                        dbQImage[33][1] = "Images/C1.Microchitze/Img033US.png";	dbQImageSrc[33][1] = "www.bestwallpaperdesign.com";
                        dbQImage[33][2] = "Images/C1.Microchitze/Img033US.png";	dbQImageSrc[33][2] = "www.bestwallpaperdesign.com";
                        dbAImage[33] = [];							dbAImageSrc[33] = [];
                        dbAImage[33][0] = "Images/C1.Microchitze/Img033Hawaii.png";  dbAImageSrc[33][0] = "www.sheppardsoftware.com";
                        dbAImage[33][1] = "Images/C1.Microchitze/Img033Hawaii.png";  dbAImageSrc[33][1] = "www.sheppardsoftware.com";
                        dbAImage[33][2] = "Images/C1.Microchitze/Img033Hawaii.png";  dbAImageSrc[33][2] = "www.sheppardsoftware.com";
dbQList[34] = [];
dbQList[ 34][0] = "Dac&#x103; ai zbura din Hannover (Germania) 1000km nord, apoi 1200km vest, apoi 1000km sud, apoi 1200km est, &#xEE;n ce ora&#x15F; ai ateriza?"; 
dbQList[ 34][1] = "If you fly from Hannover (Germany) 1000km north, then 1200km West, then 1000km South then 1200km East, in which town would you land?"; 
dbQList[ 34][2] = "Wenn man von Hannover (Deutschland) 1000km Nord, dann 1200km West, dann 1000km S&#252;d, dann 1200km Ost fliegt, in welcher Stadt w&#252;rde man landen?"; 
                        dbAType[34] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[34] = []; dbAList[34][0] = "Amsterdam";
                        dbACrit[34] = []; dbACrit[34][0] = 13;
                        dbAnswer[34] = [];
                        dbAnswer[34][0] = "R&#x103;spuns corect: Amsterdam"; //plaintext ro answer
                        dbAnswer[34][1] = "Right answer: Amsterdam"; //plaintext en answer
                        dbAnswer[34][2] = "Richtige Antwort: Amsterdam"; //plaintext de answer
                        dbExpln[34] = [];
                        dbExpln[34][0] = ""; //explanation ro
                        dbExpln[34][1] = ""; //explanation en
                        dbExpln[34][2] = ""; //explanation de
                        dbRefer[34] = [];
                        dbRefer[34][0] = ""; //references for ro explanation
                        dbRefer[34][1] = ""; //references for en explanation
                        dbRefer[34][2] = ""; //references for de explanation
                        dbQHint[34] = [];
                        dbQHint[34][0] = ""; //hint ro
                        dbQHint[34][1] = ""; //hint en
                        dbQHint[34][2] = ""; //hint de
                        dbQImage[34] = []; dbQImageSrc[34] = []; 
                        dbQImage[34][0] = "Images/C1.Microchitze/Img034Hannover.png";	dbQImageSrc[34][0] = "portlandhannovergapp2013.blogspot.com";
                        dbQImage[34][1] = "Images/C1.Microchitze/Img034Hannover.png";	dbQImageSrc[34][1] = "portlandhannovergapp2013.blogspot.com";
                        dbQImage[34][2] = "Images/C1.Microchitze/Img034Hannover.png";	dbQImageSrc[34][2] = "portlandhannovergapp2013.blogspot.com";
                        dbAImage[34] = [];							dbAImageSrc[34] = [];
                        dbAImage[34][0] = "Images/C1.Microchitze/Img034Amsterdam.png";  dbAImageSrc[34][0] = "www.distance.to/";
                        dbAImage[34][1] = "Images/C1.Microchitze/Img034Amsterdam.png";  dbAImageSrc[34][1] = "www.distance.to/";
                        dbAImage[34][2] = "Images/C1.Microchitze/Img034Amsterdam.png";  dbAImageSrc[34][2] = "www.distance.to/";
dbQList[35] = [];
dbQList[ 35][0] = "Nume&#x15F;te o &#x163;ar&#x103; care nu este &#xEE;n Uniunea European&#x103;, dar are dreptul s&#x103; bat&#x103; &#x15F;i s&#x103; foloseasc&#x103; euro."; 
dbQList[ 35][1] = "Name a country that is not in the European Union, but has the right to mint and use euros."; 
dbQList[ 35][2] = "Nenne ein Staat, der nicht in die Europ&#228;ische Union ist, jedoch das Recht Euros zu m&#252;nzen und zu benutzen hat."; 
                        dbAType[35] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[35] = []; dbAList[35][0] = "Monaco";  dbAList[35][1] = "Marino";   dbAList[35][2] = "Andorra";   dbAList[35][3] = "Vati";
                        dbACrit[35] = []; dbACrit[35][0] = 13; dbACrit[35][1] = 13;  dbACrit[35][2] = 13;  dbACrit[35][3] = 13;
                        dbAnswer[35] = [];
                        dbAnswer[35][0] = "R&#x103;spuns corect: Monaco, San Marino, Vatican, Andorra"; //plaintext ro answer
                        dbAnswer[35][1] = "Right answer: Monaco, San Marino, Vatican, Andorra"; //plaintext en answer
                        dbAnswer[35][2] = "Richtige Antwort: Monaco, San Marino, Vatikan, Andorra"; //plaintext de answer
                        dbExpln[35] = [];
                        dbExpln[35][0] = "&#xCE;nainte de lansarea Euro, au fost &#xEE;ncheiate &#xEE;n&#x163;elegeri &#xEE;ntre aceste microstate &#x15F;i membri ai UE (Italia &#xEE;n cazul San Marino &#x15F;i Vatican, Fran&#x163;a &#xEE;n cazul Monaco), permi&#x163;&#xE2;ndu-le s&#x103; bat&#x103; un num&#x103;r limitat de monede (cu simbolurile na&#x163;ionale pe verso) care s&#x103; fie recunoscute &#xEE;n &#xEE;ntraga zon&#x103; Euro. Un acord similar a fost negociat &#x15F;i cu Andorra, care nu avea o moned&#x103; oficial&#x103;. Totu&#x15F;i aceste microstate nu pot imprima banknote. <sup>[1][2]</sup>"; //explanation ro
                        dbExpln[35][1] = "Prior to the launch of the euro, agreements were reached with Monaco, San Marino, and Vatican by EU member states (Italy in the case of San Marino and Vatican City, and France in the case of Monaco) allowing them to use and mint a limited amount of euro (with their own national symbols on the obverse side) to be valid throughout the Eurozone. A similar agreement was also negotiated with Andorra, who did not previously have an official currency. However, these states cannot print banknotes.<sup>[1][2]</sup>"; //explanation en
                        dbExpln[35][2] = "Bevor der Einf&#252;hrung der Euro, Vereinbarungen zwischen diese Mikrostaaten und EU Mitglieder wurden getroffen (Italien im Falle von San Marino und Vatikan, Frankreich im Falle von Monaco), wodurch sie eine begrenzte Anzahl von Euros (mit ihre Nationalsymbole auf der Vorderseite) m&#252;nzen d&#252;rfen. Eine &#228;hnliche Vereinbarung wurde auch mit Andorra, die bis dann keine offizielle W&#228;hrung hatte, vereinbart. Dennoch, d&#252;rfen diese Staaten keine Banknoten dr&#252;cken. <sup>[1][2]</sup>"; //explanation de
                        dbRefer[35] = [];
                        dbRefer[35][0] = "<a href='http://en.wikipedia.org/wiki/International_status_and_usage_of_the_euro' target='_blank'>[1] en.wikipedia.org/wiki/euro</a> <br/><a href='http://www.youtube.com/watch?v=O37yJBFRrfg' target='_blank'>[2] youtube.com/EuropeanUnion(CGP Grey)</a>"; //references for ro explanation
                        dbRefer[35][1] = "<a href='http://en.wikipedia.org/wiki/International_status_and_usage_of_the_euro' target='_blank'>[1] en.wikipedia.org/wiki/euro</a> <br/><a href='http://www.youtube.com/watch?v=O37yJBFRrfg' target='_blank'>[2] youtube.com/EuropeanUnion(CGP Grey)</a>"; //references for en explanation
                        dbRefer[35][2] = "<a href='http://en.wikipedia.org/wiki/International_status_and_usage_of_the_euro' target='_blank'>[1] en.wikipedia.org/wiki/euro</a> <br/><a href='http://www.youtube.com/watch?v=O37yJBFRrfg' target='_blank'>[2] youtube.com/EuropeanUnion(CGP Grey)</a>"; //references for de explanation
                        dbQHint[35] = [];
                        dbQHint[35][0] = ""; //hint ro
                        dbQHint[35][1] = ""; //hint en
                        dbQHint[35][2] = ""; //hint de
                        dbQImage[35] = []; dbQImageSrc[35] = []; 
                        dbQImage[35][0] = "Images/C1.Microchitze/Img035Euro.png";	dbQImageSrc[35][0] = "www.fleur-de-coin.com";
                        dbQImage[35][1] = "Images/C1.Microchitze/Img035Euro.png";	dbQImageSrc[35][1] = "www.fleur-de-coin.com";
                        dbQImage[35][2] = "Images/C1.Microchitze/Img035Euro.png";	dbQImageSrc[35][2] = "www.fleur-de-coin.com";
                        dbAImage[35] = [];							dbAImageSrc[35] = [];
                        dbAImage[35][0] = "Images/C1.Microchitze/Img035Coins.png";  dbAImageSrc[35][0] = "www.forexticket.com";
                        dbAImage[35][1] = "Images/C1.Microchitze/Img035Coins.png";  dbAImageSrc[35][1] = "www.forexticket.com";
                        dbAImage[35][2] = "Images/C1.Microchitze/Img035Coins.png";  dbAImageSrc[35][2] = "www.forexticket.com";
dbQList[36] = [];
dbQList[ 36][0] = "Nume&#x15F;te o &#x163;ar&#x103; care incepe cu O."; 
dbQList[ 36][1] = "Name a country that starts with HO."; 
dbQList[ 36][2] = "Nenne ein Land, der mit HO beginnt."; 
                        dbAType[36] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[36] = []; dbAList[36][0] = "Oman";  dbAList[36][1] = "Honduras"; 
                        dbACrit[36] = []; dbACrit[36][0] = 13; dbACrit[36][1] = 13;
                        dbAnswer[36] = [];
                        dbAnswer[36][0] = "R&#x103;spuns corect: Oman"; //plaintext ro answer
                        dbAnswer[36][1] = "Right answer: Honduras"; //plaintext en answer
                        dbAnswer[36][2] = "Richtige Antwort: Honduras"; //plaintext de answer
                        dbExpln[36] = [];
                        dbExpln[36][0] = "Olanda (de Nord &#x15F;i de Sud) sunt doar provincii ale &#x162;arilor de Jos...<sup>[1][2]</sup>"; //explanation ro
                        dbExpln[36][1] = "Holland (North and South) are just provinces of the Netherlands...<sup>[1][2]</sup>"; //explanation en
                        dbExpln[36][2] = "Holland (Nord un S&#252;d) sind nur Provinzen der Niederlande...<sup>[1][2]</sup>"; //explanation de
                        dbRefer[36] = [];
                        dbRefer[36][0] = "<a href='http://ro.wikipedia.org/wiki/Olanda_(regiune)' target='_blank'>[1] ro.wikipedia.org/wiki/Olanda</a> <br/><a href='http://www.youtube.com/watch?v=eE_IUPInEuc&feature=kp' target='_blank'>[2] youtube.com/Holland-vs-Netherlands(CGP Grey)</a>"; //references for ro explanation
                        dbRefer[36][1] = "<a href='http://en.wikipedia.org/wiki/Holland' target='_blank'>[1] en.wikipedia.org/wiki/Holland</a> <br/><a href='http://www.youtube.com/watch?v=eE_IUPInEuc&feature=kp' target='_blank'>[2] youtube.com/Holland-vs-Netherlands(CGP Grey)</a>"; //references for en explanation
                        dbRefer[36][2] = "<a href='http://de.wikipedia.org/wiki/Holland' target='_blank'>[1] de.wikipedia.org/wiki/Holland</a> <br/><a href='http://www.youtube.com/watch?v=eE_IUPInEuc&feature=kp' target='_blank'>[2] youtube.com/Holland-vs-Netherlands(CGP Grey)</a>"; //references for de explanation
                        dbQHint[36] = [];
                        dbQHint[36][0] = ""; //hint ro
                        dbQHint[36][1] = ""; //hint en
                        dbQHint[36][2] = ""; //hint de
                        dbQImage[36] = []; dbQImageSrc[36] = []; 
                        dbQImage[36][0] = "Images/C1.Microchitze/Img036CountryNames.png";	dbQImageSrc[36][0] = "www.pozorblog.com";
                        dbQImage[36][1] = "Images/C1.Microchitze/Img036CountryNames.png";	dbQImageSrc[36][1] = "www.pozorblog.com";
                        dbQImage[36][2] = "Images/C1.Microchitze/Img036CountryNames.png";	dbQImageSrc[36][2] = "www.pozorblog.com";
                        dbAImage[36] = [];							dbAImageSrc[36] = [];
                        dbAImage[36][0] = "Images/C1.Microchitze/Img036Oman.png";      dbAImageSrc[36][0] = "www.operationworld.org";
                        dbAImage[36][1] = "Images/C1.Microchitze/Img036Honduras.png";  dbAImageSrc[36][1] = "www.operationworld.org";
                        dbAImage[36][2] = "Images/C1.Microchitze/Img036Honduras.png";  dbAImageSrc[36][2] = "www.operationworld.org";
dbQList[37] = [];
dbQList[ 37][0] = "Pronun&#x163;ia numelui c&#x103;rei &#x163;&#x103;ri europene &#xEE;ncepe (&#xEE;n limba oficial&#x103; a acelei &#x163;&#x103;ri) cu G?"; 
dbQList[ 37][1] = "For which European country does the pronounciation of the country name start with G (in the official language of that country)?"; 
dbQList[ 37][2] = "F&#252;r welchen Europ&#228;ischen Land beginnt (in die offizielle Sprache des Landes) die Aussprache des L&#228;ndernamens mit G?"; 
                        dbAType[37] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[37] = []; dbAList[37][0] = "Luxemb";
                        dbACrit[37] = []; dbACrit[37][0] = 13;
                        dbAnswer[37] = [];
                        dbAnswer[37][0] = "R&#x103;spuns corect: Marele Ducat de Luxemburg"; //plaintext ro answer
                        dbAnswer[37][1] = "Right answer: Grand Duchy of Luxembourg"; //plaintext en answer
                        dbAnswer[37][2] = "Richtige Antwort: Gro&#223;herzogtum Luxemburg"; //plaintext de answer
                        dbExpln[37] = [];
                        dbExpln[37][0] = "Numele oficial al Luxemburgului &#xEE;ncepe &#xEE;n toate cele trei limbi oficiale cu G <sup>[1]</sup>:<br/>&nbsp;&nbsp;&nbsp;Luxemburghez&#x103;: Groussherzogtum L&#235;tzebuerg <br/>&nbsp;&nbsp;&nbsp;Francez&#x103;: Grand-Duch&#233; de Luxembourg <br/>&nbsp;&nbsp;&nbsp;German&#x103;: Gro&#223;herzogtum Luxemburg) <br/><br/> Alte &#x163;&#x103;ri candidate nu &#xEE;ndeplinesc condi&#x163;ia: <br/>&nbsp;&nbsp;&nbsp;Germania: Bundesrepublik Deutschland <sup>[2]</sup><br/>&nbsp;&nbsp;&nbsp;Grecia: &#917;&#955;&#955;&#940;&#962; (Ell&#225;s) <sup>[3]</sup><br/>&nbsp;&nbsp;&nbsp;Georgia: &#4321;&#4304;&#4325;&#4304;&#4320;&#4311;&#4309;&#4308;&#4314;&#4317; (Sak'art'velo) <sup>[4]</sup><br/>&nbsp;&nbsp;&nbsp;Marea Britanie (Great Britain) este doar o insul&#x103;, parte a Regatului Unit (United Kingdom of Great Britain and Northern Ireland).<sup>[5]</sup>"; //explanation ro
                        dbExpln[37][1] = "The official name of Luxembourg starts in all three official languages with a G <sup>[1]</sup>:<br/>&nbsp;&nbsp;&nbsp;Luxembourgish: Groussherzogtum L&#235;tzebuerg <br/>&nbsp;&nbsp;&nbsp;French: Grand-Duch&#233; de Luxembourg <br/>&nbsp;&nbsp;&nbsp;German: Gro&#223;herzogtum Luxemburg) <br/><br/> Other candidate countries fail: <br/>&nbsp;&nbsp;&nbsp;Germany: Bundesrepublik Deutschland <sup>[2]</sup><br/>&nbsp;&nbsp;&nbsp;Greece: &#917;&#955;&#955;&#940;&#962; (Ell&#225;s) <sup>[3]</sup><br/>&nbsp;&nbsp;&nbsp;Georgia: &#4321;&#4304;&#4325;&#4304;&#4320;&#4311;&#4309;&#4308;&#4314;&#4317; (Sak'art'velo) <sup>[4]</sup><br/>&nbsp;&nbsp;&nbsp;Great Britain is just an island, part of the United Kingdom of Great Britain and Northern Ireland.<sup>[5]</sup>"; //explanation en
                        dbExpln[37][2] = "Der offizielle Name von Luxemburg beginnt in alle drei offizielle Sprachen mit G <sup>[1]</sup>:<br/>&nbsp;&nbsp;&nbsp;Luxemburgisch: Groussherzogtum L&#235;tzebuerg <br/>&nbsp;&nbsp;&nbsp;Franz&#246;sisch: Grand-Duch&#233; de Luxembourg <br/>&nbsp;&nbsp;&nbsp;Deutsch: Gro&#223;herzogtum Luxemburg) <br/><br/> Andere L&#228;nder scheitern: <br/>&nbsp;&nbsp;&nbsp;Deutschland: Bundesrepublik Deutschland <sup>[2]</sup><br/>&nbsp;&nbsp;&nbsp;Griechenland: &#917;&#955;&#955;&#940;&#962; (Ell&#225;s) <sup>[3]</sup><br/>&nbsp;&nbsp;&nbsp;Georgien: &#4321;&#4304;&#4325;&#4304;&#4320;&#4311;&#4309;&#4308;&#4314;&#4317; (Sak'art'velo) <sup>[4]</sup><br/>&nbsp;&nbsp;&nbsp;Gro&#223;britanien (Great Britain) ist nur eine Insel, Teil des Vereinigten K&#246;nigreich (United Kingdom of Great Britain and Northern Ireland).<sup>[5]</sup>"; //explanation de
                        dbRefer[37] = [];
                        dbRefer[37][0] = "<a href='http://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_in_Europe' target='_blank'>[0] en.wikipedia.org/wiki/StateEuropene</a><br/><a href='http://en.wikipedia.org/wiki/Luxembourg' target='_blank'>[1] en.wikipedia.org/wiki/Luxemburg</a><br/><a href='http://en.wikipedia.org/wiki/Germany' target='_blank'>[2] en.wikipedia.org/wiki/Germania</a><br/><a href='http://en.wikipedia.org/wiki/Greece' target='_blank'>[3] en.wikipedia.org/wiki/Grecia</a><br/><a href='http://en.wikipedia.org/wiki/Georgia_(country)' target='_blank'>[4] en.wikipedia.org/wiki/Georgia</a><br/><a href='http://en.wikipedia.org/wiki/Great_britain' target='_blank'>[5] en.wikipedia.org/MareaBritanie</a>"; //references for ro explanation
                        dbRefer[37][1] = "<a href='http://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_in_Europe' target='_blank'>[0] en.wikipedia.org/wiki/EuropeanStates</a><br/><a href='http://en.wikipedia.org/wiki/Luxembourg' target='_blank'>[1] en.wikipedia.org/wiki/Luxembourg</a><br/><a href='http://en.wikipedia.org/wiki/Germany' target='_blank'>[2] en.wikipedia.org/wiki/Germany</a><br/><a href='http://en.wikipedia.org/wiki/Greece' target='_blank'>[3] en.wikipedia.org/wiki/Greece</a><br/><a href='http://en.wikipedia.org/wiki/Georgia_(country)' target='_blank'>[4] en.wikipedia.org/wiki/Georgia</a><br/><a href='http://en.wikipedia.org/wiki/Great_britain' target='_blank'>[5] en.wikipedia.org/GreatBritain</a>"; //references for en explanation
                        dbRefer[37][2] = "<a href='http://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_in_Europe' target='_blank'>[0] en.wikipedia.org/wiki/Europ&#228;ischeStaaten</a><br/><a href='http://en.wikipedia.org/wiki/Luxembourg' target='_blank'>[1] en.wikipedia.org/wiki/Luxemburg</a><br/><a href='http://en.wikipedia.org/wiki/Germany' target='_blank'>[2] en.wikipedia.org/wiki/Deutschland</a><br/><a href='http://en.wikipedia.org/wiki/Greece' target='_blank'>[3] en.wikipedia.org/wiki/Griechenland</a><br/><a href='http://en.wikipedia.org/wiki/Georgia_(country)' target='_blank'>[4] en.wikipedia.org/wiki/Georgien</a><br/><a href='http://en.wikipedia.org/wiki/Great_britain' target='_blank'>[5] en.wikipedia.org/Gro&#223;britanien</a>"; //references for de explanation
                        dbQHint[37] = [];
                        dbQHint[37][0] = ""; //hint ro
                        dbQHint[37][1] = ""; //hint en
                        dbQHint[37][2] = ""; //hint de
                        dbQImage[37] = []; dbQImageSrc[37] = []; 
                        dbQImage[37][0] = "Images/C1.Microchitze/Img037Europe.png";	dbQImageSrc[37][0] = "funny-pictures.picphotos.net";
                        dbQImage[37][1] = "Images/C1.Microchitze/Img037Europe.png";	dbQImageSrc[37][1] = "funny-pictures.picphotos.net";
                        dbQImage[37][2] = "Images/C1.Microchitze/Img037Europe.png";	dbQImageSrc[37][2] = "funny-pictures.picphotos.net";
                        dbAImage[37] = [];							dbAImageSrc[37] = [];
                        dbAImage[37][0] = "Images/C1.Microchitze/Img037Lux.png";  dbAImageSrc[37][0] = "www.dezwerver.nl";
                        dbAImage[37][1] = "Images/C1.Microchitze/Img037Lux.png";  dbAImageSrc[37][1] = "www.dezwerver.nl";
                        dbAImage[37][2] = "Images/C1.Microchitze/Img037Lux.png";  dbAImageSrc[37][2] = "www.dezwerver.nl";
dbQList[38] = [];
dbQList[ 38][0] = "Care dou&#x103; &#x163;&#x103;ri &#xEE;nvecinate au capitalele cele mai &#xEE;ndep&#x103;rtate una de alta?"; 
dbQList[ 38][1] = "Which two neighbouring countries have the capitals farthest apart from each other?"; 
dbQList[ 38][2] = "Welche zwei Nachbarl&#228;nder haben die Hauptst&#228;dte am weitesten voneinander entfernt?"; 
                        dbAType[38] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[38] = []; dbAList[38][0] = "Brazil"; dbAList[38][1] = "Brasil";
                        dbACrit[38] = []; dbACrit[38][0] = 13; dbACrit[38][1] = 13;
                        dbAnswer[38] = [];
                        dbAnswer[38][0] = "R&#x103;spuns corect: Brazilia si Fran&#x163;a (~8725km)"; //plaintext ro answer
                        dbAnswer[38][1] = "Right answer: Brasil and France (~8725km)"; //plaintext en answer
                        dbAnswer[38][2] = "Richtige Antwort: Brasilien und Frankreich (~8725km)"; //plaintext de answer
                        dbExpln[38] = [];
                        dbExpln[38][0] = "Guyana Francez&#x103; este una dintre cele 26 regiuni ale Fran&#x163;ei, fiind totodat&#x103; o parte integrant&#x103; a Republicii Franceze &#x15F;i a Uniunii Europene. Frontiera cu Brazilia este cea mai lung&#x103; frontier&#x103; a Fran&#x163;ei.<sup>[1]</sup>"; //explanation ro
                        dbExpln[38][1] = "French Guyana is a region of France in South America. As an overseas region, it is inside the European Union, and its official currency is the Euro. The border with Brasil is the longest border of France with a neighbouring country.<sup>[1]</sup>"; //explanation en
                        dbExpln[38][2] = "Franz&#246;sisch-Guyana ist eine Region Frankreichs im Norden von S&#252;damerika. Es ist ein vollintegrierter Teil des franz&#246;sischen Staates und damit auch Teil der Europ&#228;ischen Union. Der Euro ist gesetzliches Zahlungsmittel. Die Grenze zu Brasilien ist die Frankreichs l&#228;ngste Grenze mit einem Nachbarland.<sup>[1]</sup>"; //explanation de
                        dbRefer[38] = [];
                        dbRefer[38][0] = "<a href='http://ro.wikipedia.org/wiki/Guyana_Francez%C4%83' target='_blank'>[1] ro.wikipedia.org/wiki/GuyanaFrancez&#x103;</a>"; //references for ro explanation
                        dbRefer[38][1] = "<a href='http://en.wikipedia.org/wiki/French_Guiana' target='_blank'>[1] en.wikipedia.org/wiki/FrenchGuyana</a>"; //references for en explanation
                        dbRefer[38][2] = "<a href='http://de.wikipedia.org/wiki/Franz%C3%B6sisch-Guayana' target='_blank'>[1] de.wikipedia.org/wiki/Franz&#246;sischGuyana</a>"; //references for de explanation
                        dbQHint[38] = [];
                        dbQHint[38][0] = ""; //hint ro
                        dbQHint[38][1] = ""; //hint en
                        dbQHint[38][2] = ""; //hint de
                        dbQImage[38] = []; dbQImageSrc[38] = []; 
                        dbQImage[38][0] = "Images/C1.Microchitze/Img038Nowhere.png";	dbQImageSrc[38][0] = "www.dreamstime.com";
                        dbQImage[38][1] = "Images/C1.Microchitze/Img038Nowhere.png";	dbQImageSrc[38][1] = "www.dreamstime.com";
                        dbQImage[38][2] = "Images/C1.Microchitze/Img038Nowhere.png";	dbQImageSrc[38][2] = "www.dreamstime.com";
                        dbAImage[38] = [];							dbAImageSrc[38] = [];
                        dbAImage[38][0] = "Images/C1.Microchitze/Img038Globe.png";  dbAImageSrc[38][0] = "www.actualitte.com";
                        dbAImage[38][1] = "Images/C1.Microchitze/Img038Globe.png";  dbAImageSrc[38][1] = "www.actualitte.com";
                        dbAImage[38][2] = "Images/C1.Microchitze/Img038Globe.png";  dbAImageSrc[38][2] = "www.actualitte.com";
dbQList[39] = [];
dbQList[ 39][0] = "&#xCE;n steagul c&#x103;rei &#x163;&#x103;ri difer&#x103; imaginile de pe fa&#x163;&#x103; &#x15F;i verso?"; 
dbQList[ 39][1] = "In the flag of which country do the images on obverse and reverse sides differ?"; 
dbQList[ 39][2] = "In der Flagge von welchem Land sind die Bilder auf der Vorder- und R&#252;ckseite verschieden?"; 
                        dbAType[39] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[39] = []; dbAList[39][0] = "Paraguay";
                        dbACrit[39] = []; dbACrit[39][0] = 13;
                        dbAnswer[39] = [];
                        dbAnswer[39][0] = "R&#x103;spuns corect: Paraguay"; //plaintext ro answer
                        dbAnswer[39][1] = "Right answer: Paraguay"; //plaintext en answer
                        dbAnswer[39][2] = "Richtige Antwort: Paraguay"; //plaintext de answer
                        dbExpln[39] = [];
                        dbExpln[39][0] = ""; //explanation ro
                        dbExpln[39][1] = ""; //explanation en
                        dbExpln[39][2] = ""; //explanation de
                        dbRefer[39] = [];
                        dbRefer[39][0] = "<a href='http://en.wikipedia.org/wiki/Flag_of_Paraguay' target='_blank'>[1] en.wikipedia.org/wiki/Paraguay</a>"; //references for ro explanation
                        dbRefer[39][1] = "<a href='http://en.wikipedia.org/wiki/Flag_of_Paraguay' target='_blank'>[1] en.wikipedia.org/wiki/Paraguay</a>"; //references for en explanation
                        dbRefer[39][2] = "<a href='http://en.wikipedia.org/wiki/Flag_of_Paraguay' target='_blank'>[1] en.wikipedia.org/wiki/Paraguay</a>"; //references for de explanation
                        dbQHint[39] = [];
                        dbQHint[39][0] = ""; //hint ro
                        dbQHint[39][1] = ""; //hint en
                        dbQHint[39][2] = ""; //hint de
                        dbQImage[39] = []; dbQImageSrc[39] = []; 
                        dbQImage[39][0] = "Images/C1.Microchitze/Img039NCaucasian.png";	dbQImageSrc[39][0] = "humorsharing.com";
                        dbQImage[39][1] = "Images/C1.Microchitze/Img039NCaucasian.png";	dbQImageSrc[39][1] = "humorsharing.com";
                        dbQImage[39][2] = "Images/C1.Microchitze/Img039NCaucasian.png";	dbQImageSrc[39][2] = "humorsharing.com";
                        dbAImage[39] = [];							dbAImageSrc[39] = [];
                        dbAImage[39][0] = "Images/C1.Microchitze/Img039Paraguay.png";  dbAImageSrc[39][0] = "www.globenotes.com";
                        dbAImage[39][1] = "Images/C1.Microchitze/Img039Paraguay.png";  dbAImageSrc[39][1] = "www.globenotes.com";
                        dbAImage[39][2] = "Images/C1.Microchitze/Img039Paraguay.png";  dbAImageSrc[39][2] = "www.globenotes.com";
                        
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ZOOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 40] = [];
dbQList[ 40][0] = "C&#xE2;te r&#xE2;me vii supravie&#x163;uiesc dup&#x103; t&#x103;ierea unei r&#xE2;me &#xEE;n dou&#x103;?"; 
dbQList[ 40][1] = "How many living earthworms do survive after cutting an earthworm in half?"; 
dbQList[ 40][2] = "Wie viele lebende Regenw&#252;rmer &#252;berleben nach dem Zerschneiden eines Regenwurms in Halb?"; 
                        dbAType[ 40] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 40] = []; dbAList[40][0] = 0;
                        dbACrit[ 40] = []; dbACrit[40][0] = 20;
                        dbAnswer[40] = [];
                        dbAnswer[40][0] = "R&#x103;spuns corect: 0"; //plaintext ro answer
                        dbAnswer[40][1] = "Right answer: 0"; //plaintext en answer
                        dbAnswer[40][2] = "Richtige Antwort: 0"; //plaintext de answer
                        dbExpln[ 40] = [];
                        dbExpln[ 40][0] = "O r&#xE2;m&#x103; t&#x103;iat&#x103; &#xEE;n dou&#x103; &#xEE;n mod normal moare din cauza r&#x103;nilor. Dac&#x103; este t&#x103;iat&#x103; o por&#x163;iune de maxim o treime din coad&#x103;, r&#xE2;ma poate regenera acea por&#x163;iune, dar posteriorul nu poate genera un cap nou.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 40][1] = "If an earthworm is cut in half, it will usually die of the wounds. However, if a third or less of the posterior portion of the worm gets chopped off, the earthworm can usually regrow that portion - but the chopped off posterior will not grow a new head.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 40][2] = "Wenn ein Regenwurm in zwei H&#228;lften geschnitten wird, wird es in der Regel an den Wunden sterben. Wenn nur ein Drittel oder weniger des hinteren Teils des Wurms abgehackt wird, kann der Regenwurm &#252;blicherweise den Teil nachwachsen, aber der abgehackte Hinterteil kann einen neuen Kopf nuch wachsen.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 40] = [];
                        dbRefer[ 40][0] = "<a href='http://www.wormfarmguide.com/earthworms.html' target='_blank'>[1] www.wormfarmguide.com</a>"; //references for ro explanation
                        dbRefer[ 40][1] = "<a href='http://www.wormfarmguide.com/earthworms.html' target='_blank'>[1] www.wormfarmguide.com</a>"; //references for en explanation
                        dbRefer[ 40][2] = "<a href='http://www.wormfarmguide.com/earthworms.html' target='_blank'>[1] www.wormfarmguide.com</a>"; //references for de explanation
                        dbQHint[ 40] = [];
                        dbQHint[ 40][0] = ""; //hint ro
                        dbQHint[ 40][1] = ""; //hint en
                        dbQHint[ 40][2] = ""; //hint de
                        dbQImage[40] = []; dbQImageSrc[40] = []; 
                        dbQImage[40][0] = "Images/C1.Microchitze/Img040Earthworm.png";	dbQImageSrc[40][0] = "www.istockphoto.com";
                        dbQImage[40][1] = "Images/C1.Microchitze/Img040Earthworm.png";	dbQImageSrc[40][1] = "www.istockphoto.com";
                        dbQImage[40][2] = "Images/C1.Microchitze/Img040Earthworm.png";	dbQImageSrc[40][2] = "www.istockphoto.com";
                        dbAImage[40] = [];							dbAImageSrc[40] = [];
                        dbAImage[40][0] = "Images/C1.Microchitze/Img040EarthwormX.png";  dbAImageSrc[40][0] = "museumofbadideas.blogspot.com";
                        dbAImage[40][1] = "Images/C1.Microchitze/Img040EarthwormX.png";  dbAImageSrc[40][1] = "museumofbadideas.blogspot.com";
                        dbAImage[40][2] = "Images/C1.Microchitze/Img040EarthwormX.png";  dbAImageSrc[40][2] = "museumofbadideas.blogspot.com";
dbQList[ 41] = [];
dbQList[ 41][0] = "C&#xE2;&#x163;i ochi are o albin&#x103;?"; 
dbQList[ 41][1] = "How many eyes does a bee have?"; 
dbQList[ 41][2] = "Wie viele Augen hat eine Biene?"; 
                        dbAType[ 41] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 41] = []; dbAList[41][0] = 5;
                        dbACrit[ 41] = []; dbACrit[41][0] = 20; 
                        dbAnswer[41] = [];
                        dbAnswer[41][0] = "R&#x103;spuns corect: 5"; //plaintext ro answer
                        dbAnswer[41][1] = "Right answer: 5"; //plaintext en answer
                        dbAnswer[41][2] = "Richtige Antwort: 5"; //plaintext de answer
                        dbExpln[ 41] = [];
                        dbExpln[ 41][0] = "O albin&#x103; are 2 ochi compu&#x15F;i &#x15F;i 3 simpli (ocelli).<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 41][1] = "A bee has 2 compound eyes and 3 simple eyes (ocelli).<sup>[1]</sup>"; //explanation en
                        dbExpln[ 41][2] = "Eine Biene hat 2 Komplexaugen (Facettenaugen) und 3 Punktaugen (Ocellen).<sup>[1]</sup>"; //explanation de
                        dbRefer[ 41] = [];
                        dbRefer[ 41][0] = "<a href='http://www.proapicultura.ro/biologia_albinei/ochii.html' target='_blank'>[1] www.proapicultura.ro</a>"; //references for ro explanation
                        dbRefer[ 41][1] = "<a href='http://animals.howstuffworks.com/insects/bee1.htm' target='_blank'>[1] animals.howstuffworks.com</a>"; //references for en explanation
                        dbRefer[ 41][2] = "<a href='http://www.bienenschade.de/Honigbienen/Sprache/Sinnesorgane%20Bienen.htm' target='_blank'>[1] www.bienenschade.de</a>"; //references for de explanation
                        dbQHint[ 41] = [];
                        dbQHint[ 41][0] = ""; //hint ro
                        dbQHint[ 41][1] = ""; //hint en
                        dbQHint[ 41][2] = ""; //hint de
                        dbQImage[41] = []; dbQImageSrc[41] = []; 
                        dbQImage[41][0] = "Images/C1.Microchitze/Img041Bee.png";	dbQImageSrc[41][0] = "theperksofbeinggustine.blogspot.com";
                        dbQImage[41][1] = "Images/C1.Microchitze/Img041Bee.png";	dbQImageSrc[41][1] = "theperksofbeinggustine.blogspot.com";
                        dbQImage[41][2] = "Images/C1.Microchitze/Img041Bee.png";	dbQImageSrc[41][2] = "theperksofbeinggustine.blogspot.com";
                        dbAImage[41] = [];							dbAImageSrc[41] = [];
                        dbAImage[41][0] = "Images/C1.Microchitze/Img041Ocelli.png";  dbAImageSrc[41][0] = "www.flickr.com";
                        dbAImage[41][1] = "Images/C1.Microchitze/Img041Ocelli.png";  dbAImageSrc[41][1] = "www.flickr.com";
                        dbAImage[41][2] = "Images/C1.Microchitze/Img041Ocelli.png";  dbAImageSrc[41][2] = "www.flickr.com";
dbQList[ 42] = [];
dbQList[ 42][0] = "C&#xE2;te degete are un picior de stru&#x163;?"; 
dbQList[ 42][1] = "How many toes does an ostrich foot have?"; 
dbQList[ 42][2] = "Wie viele Zehen hat ein Strau&#223;en Fu&#223;?"; 
                        dbAType[ 42] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 42] = []; dbAList[42][0] = 2;
                        dbACrit[ 42] = []; dbACrit[42][0] = 20;
                        dbAnswer[42] = [];
                        dbAnswer[42][0] = "R&#x103;spuns corect: 2"; //plaintext ro answer
                        dbAnswer[42][1] = "Right answer: 2"; //plaintext en answer
                        dbAnswer[42][2] = "Richtige Antwort: 2"; //plaintext de answer
                        dbExpln[ 42] = [];
                        dbExpln[ 42][0] = ""; //explanation ro
                        dbExpln[ 42][1] = ""; //explanation en
                        dbExpln[ 42][2] = ""; //explanation de
                        dbRefer[ 42] = [];
                        dbRefer[ 42][0] = ""; //references for ro explanation
                        dbRefer[ 42][1] = ""; //references for en explanation
                        dbRefer[ 42][2] = ""; //references for de explanation
                        dbQHint[ 42] = [];
                        dbQHint[ 42][0] = ""; //hint ro
                        dbQHint[ 42][1] = ""; //hint en
                        dbQHint[ 42][2] = ""; //hint de
                        dbQImage[42] = []; dbQImageSrc[42] = []; 
                        dbQImage[42][0] = "Images/C1.Microchitze/Img042Ostrich.png";	dbQImageSrc[42][0] = "barelyawakeinfrogpajamas.wordpress.com";
                        dbQImage[42][1] = "Images/C1.Microchitze/Img042Ostrich.png";	dbQImageSrc[42][1] = "barelyawakeinfrogpajamas.wordpress.com";
                        dbQImage[42][2] = "Images/C1.Microchitze/Img042Ostrich.png";	dbQImageSrc[42][2] = "barelyawakeinfrogpajamas.wordpress.com";
                        dbAImage[42] = [];							dbAImageSrc[42] = [];
                        dbAImage[42][0] = "Images/C1.Microchitze/Img042OstrichToes.png";  dbAImageSrc[42][0] = "www.scienceinschool.org";
                        dbAImage[42][1] = "Images/C1.Microchitze/Img042OstrichToes.png";  dbAImageSrc[42][1] = "www.scienceinschool.org";
                        dbAImage[42][2] = "Images/C1.Microchitze/Img042OstrichToes.png";  dbAImageSrc[42][2] = "www.scienceinschool.org";
dbQList[ 43] = [];
dbQList[ 43][0] = "Care animal vede cel mai bine &#xEE;n total&#x103; obscuritate?"; 
dbQList[ 43][1] = "Which animal has the best sight in total obscurity?"; 
dbQList[ 43][2] = "Welches Tier hat die beste Sicht in v&#246;llige Dunkelheit?"; 
                        dbAType[ 43] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 43] = []; dbAList[43][0] = "licurici"; dbAList[43][1] = "glowworm"; dbAList[43][2] = "firefly"; dbAList[43][3] = "hwurm"; dbAList[43][4] = "rmchen";  dbAList[43][5] = "leuchtk";
                        dbACrit[ 43] = []; dbACrit[43][0] = 13; dbACrit[43][1] = 13; dbACrit[43][2] = 13; dbACrit[43][3] = 13; dbACrit[43][4] = 13; dbACrit[43][5] = 13;
                        dbAnswer[43] = [];
                        dbAnswer[43][0] = "R&#x103;spuns corect: licuriciul"; //plaintext ro answer
                        dbAnswer[43][1] = "Right answer: the firefly"; //plaintext en answer
                        dbAnswer[43][2] = "Richtige Antwort: das Gl&#252;hw&#252;rmchen"; //plaintext de answer
                        dbExpln[ 43] = [];
                        dbExpln[ 43][0] = "Singurele animale care v&#x103;d ceva &#xEE;n lipsa unei surse externe de lumin&#x103; (total&#x103; obscuritate) sunt cele care pot s&#x103; produc&#x103; lumin&#x103; (bioluminiscen&#x163;&#x103;<sup>[1]</sup>): licuricii, diverse specii de pe&#x15F;ti &#x15F;i molu&#x15F;te abisale, etc."; //explanation ro
                        dbExpln[ 43][1] = "The only animals which could see something in the absence of an external source of light (total obscurity) are the ones who can produce light (bioluminescence<sup>[1]</sup>): fireflies, glowworms, various species of deep-sea fish and mollusks, etc."; //explanation en
                        dbExpln[ 43][2] = "Die einzigen Tiere, die etwas in Abwesenheit von einer &#228;u?ren Lichtquelle (v&#246;llige Dunkelheit) sehen k&#246;nnen, sind diejenige, die Licht erzeugen k&#246;nnen (biolumineszenz<sup>[1]</sup>):  Leuchtk&#228;fer, Gl&#252;hw&#252;rmchen, verschiedene Arten von Tiefsee-Fische und Weichtiere, usw."; //explanation de
                        dbRefer[ 43] = [];
                        dbRefer[ 43][0] = "<a href='http://ro.wikipedia.org/wiki/Bioluminiscen%C8%9B%C4%83' target='_blank'>[1] ro.wikipedia.org/Bioluminescenta</a>"; //references for ro explanation
                        dbRefer[ 43][1] = "<a href='http://en.wikipedia.org/wiki/Bioluminescence' target='_blank'>[1] en.wikipedia.org/Bioluminescence</a>"; //references for en explanation
                        dbRefer[ 43][2] = "<a href='http://de.wikipedia.org/wiki/Biolumineszenz' target='_blank'>[1] de.wikipedia.org/Biolumineszenz</a>"; //references for de explanation
                        dbQHint[ 43] = [];
                        dbQHint[ 43][0] = ""; //hint ro
                        dbQHint[ 43][1] = ""; //hint en
                        dbQHint[ 43][2] = ""; //hint de
                        dbQImage[43] = []; dbQImageSrc[43] = []; 
                        dbQImage[43][0] = "Images/C1.Microchitze/Img043Darkness.png";	dbQImageSrc[43][0] = "www.colourbox.de";
                        dbQImage[43][1] = "Images/C1.Microchitze/Img043Darkness.png";	dbQImageSrc[43][1] = "www.colourbox.de";
                        dbQImage[43][2] = "Images/C1.Microchitze/Img043Darkness.png";	dbQImageSrc[43][2] = "www.colourbox.de";
                        dbAImage[43] = [];							dbAImageSrc[43] = [];
                        dbAImage[43][0] = "Images/C1.Microchitze/Img043Glowworm.png";  dbAImageSrc[43][0] = "www.davekilbeyphotography.co.uk";
                        dbAImage[43][1] = "Images/C1.Microchitze/Img043Glowworm.png";  dbAImageSrc[43][1] = "www.davekilbeyphotography.co.uk";
                        dbAImage[43][2] = "Images/C1.Microchitze/Img043Glowworm.png";  dbAImageSrc[43][2] = "www.davekilbeyphotography.co.uk";
dbQList[ 44] = [];
dbQList[ 44][0] = "Care este cea mai frecvent&#x103; utilizare a pieii de crocodil?"; 
dbQList[ 44][1] = "Which is the most frequent use of crocodile skin?"; 
dbQList[ 44][2] = "Welche ist die h&#228;ufigste Verwendung von Krokodilhaut?"; 
                        dbAType[ 44] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 44] = []; dbAList[44][0] = "crocod"; dbAList[44][1] = "krokod";
                        dbACrit[ 44] = []; dbACrit[44][0] = 13; dbACrit[44][1] = 13;
                        dbAnswer[44] = [];
                        dbAnswer[44][0] = "R&#x103;spuns corect: p&#x103;strarea crocodililor &#xEE;n ele"; //plaintext ro answer
                        dbAnswer[44][1] = "Right answer: keeping the crocodiles in them"; //plaintext en answer
                        dbAnswer[44][2] = "Richtige Antwort: Aufbewahrung von Krokodilen drin"; //plaintext de answer
                        dbExpln[ 44] = [];
                        dbExpln[ 44][0] = ""; //explanation ro
                        dbExpln[ 44][1] = ""; //explanation en
                        dbExpln[ 44][2] = ""; //explanation de
                        dbRefer[ 44] = [];
                        dbRefer[ 44][0] = ""; //references for ro explanation
                        dbRefer[ 44][1] = ""; //references for en explanation
                        dbRefer[ 44][2] = ""; //references for de explanation
                        dbQHint[ 44] = [];
                        dbQHint[ 44][0] = ""; //hint ro
                        dbQHint[ 44][1] = ""; //hint en
                        dbQHint[ 44][2] = ""; //hint de
                        dbQImage[44] = []; dbQImageSrc[44] = []; 
                        dbQImage[44][0] = "Images/C1.Microchitze/Img044CrocAlbum.png";	dbQImageSrc[44][0] = "www.funny-and-hilarious.com";
                        dbQImage[44][1] = "Images/C1.Microchitze/Img044CrocAlbum.png";	dbQImageSrc[44][1] = "www.funny-and-hilarious.com";
                        dbQImage[44][2] = "Images/C1.Microchitze/Img044CrocAlbum.png";	dbQImageSrc[44][2] = "www.funny-and-hilarious.com";
                        dbAImage[44] = [];							dbAImageSrc[44] = [];
                        dbAImage[44][0] = "Images/C1.Microchitze/Img044babyCroc.png";  dbAImageSrc[44][0] = "www.123rf.com";
                        dbAImage[44][1] = "Images/C1.Microchitze/Img044babyCroc.png";  dbAImageSrc[44][1] = "www.123rf.com";
                        dbAImage[44][2] = "Images/C1.Microchitze/Img044babyCroc.png";  dbAImageSrc[44][2] = "www.123rf.com";
dbQList[ 45] = [];
dbQList[ 45][0] = "Care continent este nativ viperei mor&#x163;ii (<i>Acanthophis antarcticus</i>)?"; 
dbQList[ 45][1] = "To which continent is the common death adder (<i>Acanthophis antarcticus</i>) native?"; 
dbQList[ 45][2] = "In welchem Kontinent ist die Todesotter (<i>Acanthophis antarcticus</i>) beheimatet?"; 
                        dbAType[ 45] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 45] = []; dbAList[45][0] = "Austral";
                        dbACrit[ 45] = []; dbACrit[45][0] = 13;
                        dbAnswer[45] = [];
                        dbAnswer[45][0] = "R&#x103;spuns corect: Australia"; //plaintext ro answer
                        dbAnswer[45][1] = "Right answer: Australia"; //plaintext en answer
                        dbAnswer[45][2] = "Richtige Antwort: Australien"; //plaintext de answer
                        dbExpln[ 45] = [];
                        dbExpln[ 45][0] = "Etimologie<br/> Acanthophis: '&#x15F;arpe ghimpos', cu referire la ghimpele din v&#xE2;rful cozii.<br/> Antarcticus: 'sudic', cu referire la pozi&#x163;ia Australiei &#xEE;n Emisfera Sudic&#x103;.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 45][1] = "Etymology<br/> Acanthophis: 'spine snake', refering to the spine at the tip of the tail.<br/> Antarcticus: 'southern', referring to Australia's position in the Southern Hemisphere.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 45][2] = "Etymologie<br/> Acanthophis: 'stachelige Schlange', mit Bezug auf dem Stachel an der Spitze des Schwanzes.<br/> Antarcticus: 's&#252;dlich', mit Bezug auf der Positionierung von Australien in der S&#252;dlichen Hemisph&#228;re.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 45] = [];
                        dbRefer[ 45][0] = "<a href='http://www.arod.com.au/arod/reptilia/Squamata/Elapidae/Acanthophis/antarcticus' target='_blank'>[1] www.arod.com.au/Acanthophis/antarcticus</a>"; //references for ro explanation
                        dbRefer[ 45][1] = "<a href='http://www.arod.com.au/arod/reptilia/Squamata/Elapidae/Acanthophis/antarcticus' target='_blank'>[1] www.arod.com.au/Acanthophis/antarcticus</a>"; //references for en explanation
                        dbRefer[ 45][2] = "<a href='http://www.arod.com.au/arod/reptilia/Squamata/Elapidae/Acanthophis/antarcticus' target='_blank'>[1] www.arod.com.au/Acanthophis/antarcticus</a>"; //references for de explanation
                        dbQHint[ 45] = [];
                        dbQHint[ 45][0] = ""; //hint ro
                        dbQHint[ 45][1] = ""; //hint en
                        dbQHint[ 45][2] = ""; //hint de
                        dbQImage[45] = []; dbQImageSrc[45] = []; 
                        dbQImage[45][0] = "Images/C1.Microchitze/Img045DeathAdder.png";	dbQImageSrc[45][0] = "en.wikipedia.org";
                        dbQImage[45][1] = "Images/C1.Microchitze/Img045DeathAdder.png";	dbQImageSrc[45][1] = "en.wikipedia.org";
                        dbQImage[45][2] = "Images/C1.Microchitze/Img045DeathAdder.png";	dbQImageSrc[45][2] = "en.wikipedia.org";
                        dbAImage[45] = [];							dbAImageSrc[45] = [];
                        dbAImage[45][0] = "Images/C1.Microchitze/Img045Distribution.png";  dbAImageSrc[45][0] = "en.wikipedia.org";
                        dbAImage[45][1] = "Images/C1.Microchitze/Img045Distribution.png";  dbAImageSrc[45][1] = "en.wikipedia.org";
                        dbAImage[45][2] = "Images/C1.Microchitze/Img045Distribution.png";  dbAImageSrc[45][2] = "en.wikipedia.org";
dbQList[ 46] = [];
dbQList[ 46][0] = "Ce (&#xEE;n leg&#x103;tur&#x103; cu flautul) face &#x15F;erpii s&#x103; danseze?"; 
dbQList[ 46][1] = "What (regarding the flute) makes snakes dance?"; 
dbQList[ 46][2] = "Was (mit Bezug auf der Fl&#246;te) bringt Schlangen zum Tanzen?"; 
                        dbAType[ 46] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 46] = []; dbAList[46][0] = "miscare";  dbAList[46][1] = "move";  dbAList[46][2] = "beweg"; 
                        dbACrit[ 46] = []; dbACrit[46][0] = 13; dbACrit[46][1] = 13;  dbACrit[46][2] = 13;
                        dbAnswer[46] = [];
                        dbAnswer[46][0] = "R&#x103;spuns corect: mi&#x15F;carea"; //plaintext ro answer
                        dbAnswer[46][1] = "Right answer: the movement"; //plaintext en answer
                        dbAnswer[46][2] = "Richtige Antwort: die Bewegung"; //plaintext de answer
                        dbExpln[ 46] = [];
                        dbExpln[ 46][0] = "&#x15E;erpii au auz slab &#x15F;i reac&#x163;ioneaz&#x103; mai degrab&#x103; la mi&#x15F;c&#x103;rile flautului &#x15F;i la vibra&#x163;iile slabe ale p&#x103;mantului. C&#xE2;nd &#x15F;arpele se ridic&#x103; (din co&#x15F;), el de fapt intr&#x103; &#xEE;n postura sa natural&#x103; de aparare.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 46][1] = "Snakes have very poor hearing and are actually reacting to the movements of the flute and slight vibrations in the ground. When the snake rises (out of its basket), it is actually just going into its natural defensive posture.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 46][2] = "Schlangen haben sehr schlechtes Geh&#246;r und reagieren eigentlich auf die Bewegungen der Fl&#246;te und die leichten Vibrationen in den Boden. Wenn die Schlange (aus dem Korb) steigt, geht es in seine nat&#252;rliche Abwehrhaltung.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 46] = [];
                        dbRefer[ 46][0] = "<a href='http://www.ehow.com/about_5457725_snake-charmer.html' target='_blank'>[1] http://www.ehow.com/snake-charmer.html</a>"; //references for ro explanation
                        dbRefer[ 46][1] = "<a href='http://www.ehow.com/about_5457725_snake-charmer.html' target='_blank'>[1] http://www.ehow.com/snake-charmer.html</a>"; //references for en explanation
                        dbRefer[ 46][2] = "<a href='http://www.ehow.com/about_5457725_snake-charmer.html' target='_blank'>[1] http://www.ehow.com/snake-charmer.html</a>"; //references for de explanation
                        dbQHint[ 46] = [];
                        dbQHint[ 46][0] = ""; //hint ro
                        dbQHint[ 46][1] = ""; //hint en
                        dbQHint[ 46][2] = ""; //hint de
                        dbQImage[46] = []; dbQImageSrc[46] = []; 
                        dbQImage[46][0] = "Images/C1.Microchitze/Img046Charmer.png";	dbQImageSrc[46][0] = "www.fotolibra.com";
                        dbQImage[46][1] = "Images/C1.Microchitze/Img046Charmer.png";	dbQImageSrc[46][1] = "www.fotolibra.com";
                        dbQImage[46][2] = "Images/C1.Microchitze/Img046Charmer.png";	dbQImageSrc[46][2] = "www.fotolibra.com";
                        dbAImage[46] = [];							dbAImageSrc[46] = [];
                        dbAImage[46][0] = "Images/C1.Microchitze/Img046SnakesRO.png";  dbAImageSrc[46][0] = "www.stefan-wirkus.de";
                        dbAImage[46][1] = "Images/C1.Microchitze/Img046SnakesEN.png";  dbAImageSrc[46][1] = "www.stefan-wirkus.de";
                        dbAImage[46][2] = "Images/C1.Microchitze/Img046SnakesDE.png";  dbAImageSrc[46][2] = "www.stefan-wirkus.de";
dbQList[ 47] = [];
dbQList[ 47][0] = "C&#xE2;te mamifere sunt &#xEE;n aceast&#x103; imagine de prezentare a zoo?"; 
dbQList[ 47][1] = "How many mammals are there in the this zoo presentation image?"; 
dbQList[ 47][2] = "Wie viele S&#228;ugetiere gibt es in diesen Pr&#228;sentationsbild der Zoo?"; 
                        dbAType[ 47] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 47] = []; dbAList[47][0] = 5;
                        dbACrit[ 47] = []; dbACrit[47][0] = 20;
                        dbAnswer[47] = [];
                        dbAnswer[47][0] = "R&#x103;spuns corect: 5"; //plaintext ro answer
                        dbAnswer[47][1] = "Right answer: 5"; //plaintext en answer
                        dbAnswer[47][2] = "Richtige Antwort: 5"; //plaintext de answer
                        dbExpln[ 47] = [];
                        dbExpln[ 47][0] = "Urs, c&#x103;mil&#x103;, leu, lemurian, om"; //explanation ro
                        dbExpln[ 47][1] = "Bear, camel, lion, lemur, human"; //explanation en
                        dbExpln[ 47][2] = "B&#228;r, Kamel, L&#246;we, Lemur, Mensch"; //explanation de
                        dbRefer[ 47] = [];
                        dbRefer[ 47][0] = ""; //references for ro explanation
                        dbRefer[ 47][1] = ""; //references for en explanation
                        dbRefer[ 47][2] = ""; //references for de explanation
                        dbQHint[ 47] = [];
                        dbQHint[ 47][0] = ""; //hint ro
                        dbQHint[ 47][1] = ""; //hint en
                        dbQHint[ 47][2] = ""; //hint de
                        dbQImage[47] = []; dbQImageSrc[47] = []; 
                        dbQImage[47][0] = "Images/C1.Microchitze/Img047Zoo.png";	dbQImageSrc[47][0] = "itunes.apple.com";
                        dbQImage[47][1] = "Images/C1.Microchitze/Img047Zoo.png";	dbQImageSrc[47][1] = "itunes.apple.com";
                        dbQImage[47][2] = "Images/C1.Microchitze/Img047Zoo.png";	dbQImageSrc[47][2] = "itunes.apple.com";
                        dbAImage[47] = [];							dbAImageSrc[47] = [];
                        dbAImage[47][0] = "Images/C1.Microchitze/Img047Zoo.png";  dbAImageSrc[47][0] = "itunes.apple.com";
                        dbAImage[47][1] = "Images/C1.Microchitze/Img047Zoo.png";  dbAImageSrc[47][1] = "itunes.apple.com";
                        dbAImage[47][2] = "Images/C1.Microchitze/Img047Zoo.png";  dbAImageSrc[47][2] = "itunes.apple.com";
dbQList[ 48] = [];
dbQList[ 48][0] = "Care este cel mai voluminos mamifer?"; 
dbQList[ 48][1] = "Which is the largest mammal?"; 
dbQList[ 48][2] = "Welches ist das gr&#246;&#xDF;te S&#228;ugetier?"; 
                        dbAType[ 48] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 48] = []; dbAList[48][0] = "balen"; dbAList[48][1] = "whale";  dbAList[48][2] = "Wal";
                        dbACrit[ 48] = []; dbACrit[48][0] = 13; dbACrit[48][1] = 13;  dbACrit[48][2] = 13;
                        dbAnswer[48] = [];
                        dbAnswer[48][0] = "R&#x103;spuns corect: Balena albastr&#x103; (<i>Balaenoptera musculus</i>)"; //plaintext ro answer
                        dbAnswer[48][1] = "Right answer: the blue whale (<i>Balaenoptera musculus</i>)"; //plaintext en answer
                        dbAnswer[48][2] = "Richtige Antwort: der Blauwal (<i>Balaenoptera musculus</i>)"; //plaintext de answer
                        dbExpln[ 48] = [];
                        dbExpln[ 48][0] = ""; //explanation ro
                        dbExpln[ 48][1] = ""; //explanation en
                        dbExpln[ 48][2] = ""; //explanation de
                        dbRefer[ 48] = [];
                        dbRefer[ 48][0] = ""; //references for ro explanation
                        dbRefer[ 48][1] = ""; //references for en explanation
                        dbRefer[ 48][2] = ""; //references for de explanation
                        dbQHint[ 48] = [];
                        dbQHint[ 48][0] = ""; //hint ro
                        dbQHint[ 48][1] = ""; //hint en
                        dbQHint[ 48][2] = ""; //hint de
                        dbQImage[48] = []; dbQImageSrc[48] = []; 
                        dbQImage[48][0] = "Images/C1.Microchitze/Img048Safari.png";	dbQImageSrc[48][0] = "extraordinaryintelligence.com";
                        dbQImage[48][1] = "Images/C1.Microchitze/Img048Safari.png";	dbQImageSrc[48][1] = "extraordinaryintelligence.com";
                        dbQImage[48][2] = "Images/C1.Microchitze/Img048Safari.png";	dbQImageSrc[48][2] = "extraordinaryintelligence.com";
                        dbAImage[48] = [];							dbAImageSrc[48] = [];
                        dbAImage[48][0] = "Images/C1.Microchitze/Img048SizeComp.png";  dbAImageSrc[48][0] = "www.dinosaurhome.com";
                        dbAImage[48][1] = "Images/C1.Microchitze/Img048SizeComp.png";  dbAImageSrc[48][1] = "www.dinosaurhome.com";
                        dbAImage[48][2] = "Images/C1.Microchitze/Img048SizeComp.png";  dbAImageSrc[48][2] = "www.dinosaurhome.com";
dbQList[ 49] = [];
dbQList[ 49][0] = "Ce trebuie s&#x103; &#xEE;i faci unui hipopotam cu diaree?"; 
dbQList[ 49][1] = "What do you need to make a hippo with diarrhoea?"; 
dbQList[ 49][2] = "Was muss man einem Nilpferd mit Durchfall machen?"; 
                        dbAType[ 49] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 49] = []; dbAList[49][0] = "loc"; dbAList[49][1] = "room"; dbAList[49][2] = "platz";
                        dbACrit[ 49] = []; dbACrit[49][0] = 13; dbACrit[49][1] = 13; dbACrit[49][2] = 13;
                        dbAnswer[49] = [];
                        dbAnswer[49][0] = "R&#x103;spuns corect: loc"; //plaintext ro answer
                        dbAnswer[49][1] = "Right answer: room"; //plaintext en answer
                        dbAnswer[49][2] = "Richtige Antwort: Platz"; //plaintext de answer
                        dbExpln[ 49] = [];
                        dbExpln[ 49][0] = ""; //explanation ro
                        dbExpln[ 49][1] = ""; //explanation en
                        dbExpln[ 49][2] = ""; //explanation de
                        dbRefer[ 49] = [];
                        dbRefer[ 49][0] = ""; //references for ro explanation
                        dbRefer[ 49][1] = ""; //references for en explanation
                        dbRefer[ 49][2] = ""; //references for de explanation
                        dbQHint[ 49] = [];
                        dbQHint[ 49][0] = ""; //hint ro
                        dbQHint[ 49][1] = ""; //hint en
                        dbQHint[ 49][2] = ""; //hint de
                        dbQImage[49] = []; dbQImageSrc[49] = []; 
                        dbQImage[49][0] = "Images/C1.Microchitze/Img049Hippo.png";	dbQImageSrc[49][0] = "www.how-to-draw-funny-cartoons.com";
                        dbQImage[49][1] = "Images/C1.Microchitze/Img049Hippo.png";	dbQImageSrc[49][1] = "www.how-to-draw-funny-cartoons.com";
                        dbQImage[49][2] = "Images/C1.Microchitze/Img049Hippo.png";	dbQImageSrc[49][2] = "www.how-to-draw-funny-cartoons.com";
                        dbAImage[49] = [];							dbAImageSrc[49] = [];
                        dbAImage[49][0] = "Images/C1.Microchitze/Img049SplatterZone.png";  dbAImageSrc[49][0] = "cheaperthantherapy.me";
                        dbAImage[49][1] = "Images/C1.Microchitze/Img049SplatterZone.png";  dbAImageSrc[49][1] = "cheaperthantherapy.me";
                        dbAImage[49][2] = "Images/C1.Microchitze/Img049SplatterZone.png";  dbAImageSrc[49][2] = "cheaperthantherapy.me";
                                                
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECVENCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 50] = [];
dbQList[ 50][0] = "Ce urmeaz&#x103;:<br/><br/> 1 4 9 1 6 2 5 3 6 4 ?"; 
dbQList[ 50][1] = "What comes next:<br/><br/> 1 4 9 1 6 2 5 3 6 4 ?"; 
dbQList[ 50][2] = "Was kommt als n&#228;chstes:<br/><br/> 1 4 9 1 6 2 5 3 6 4 ?"; 
                        dbAType[ 50] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 50] = []; dbAList[50][0] = 9;
                        dbACrit[ 50] = []; dbACrit[50][0] = 20;
                        dbAnswer[50] = [];
                        dbAnswer[50][0] = "R&#x103;spuns corect: 9"; //plaintext ro answer
                        dbAnswer[50][1] = "Right answer: 9"; //plaintext en answer
                        dbAnswer[50][2] = "Richtige Antwort: 9"; //plaintext de answer
                        dbExpln[ 50] = [];
                        dbExpln[ 50][0] = "1, 4, 9, 16, 25, 36, 49, ... scrise cifr&#x103; cu cifr&#x103;."; //explanation ro
                        dbExpln[ 50][1] = "1, 4, 9, 16, 25, 36, 49, ... written digit by digit."; //explanation en
                        dbExpln[ 50][2] = "1, 4, 9, 16, 25, 36, 49, ... geschrieben Ziffer f&#252;r Ziffer."; //explanation de
                        dbRefer[ 50] = [];
                        dbRefer[ 50][0] = ""; //references for ro explanation
                        dbRefer[ 50][1] = ""; //references for en explanation
                        dbRefer[ 50][2] = ""; //references for de explanation
                        dbQHint[ 50] = [];
                        dbQHint[ 50][0] = ""; //hint ro
                        dbQHint[ 50][1] = ""; //hint en
                        dbQHint[ 50][2] = ""; //hint de
                        dbQImage[50] = []; dbQImageSrc[50] = []; 
                        dbQImage[50][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[50][0] = "";
                        dbQImage[50][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[50][1] = "";
                        dbQImage[50][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[50][2] = "";
                        dbAImage[50] = [];							dbAImageSrc[50] = [];
                        dbAImage[50][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[50][0] = "";
                        dbAImage[50][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[50][1] = "";
                        dbAImage[50][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[50][2] = "";
dbQList[ 51] = [];
dbQList[ 51][0] = "Ce urmeaz&#x103;:<br/><br/> 1 11 21 1211 111221 312211 ?";  
dbQList[ 51][1] = "What comes next:<br/><br/> 1 11 21 1211 111221 312211 ?"; 
dbQList[ 51][2] = "Was kommt als n&#228;chstes:<br/><br/> 1 11 21 1211 111221 312211 ?"; 
                        dbAType[ 51] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 51] = []; dbAList[51][0] = 13112221;
                        dbACrit[ 51] = []; dbACrit[51][0] = 20; 
                        dbAnswer[51] = [];
                        dbAnswer[51][0] = "R&#x103;spuns corect: 13112221"; //plaintext ro answer
                        dbAnswer[51][1] = "Right answer: 13112221"; //plaintext en answer
                        dbAnswer[51][2] = "Richtige Antwort: 13112221"; //plaintext de answer
                        dbExpln[ 51] = [];
                        dbExpln[ 51][0] = "1 --> un 1 (11) --> doi de 1 (21) --> un 2 un 1 (1211) --> ..."; //explanation ro
                        dbExpln[ 51][1] = "1 --> one 1 (11) --> two 1s (21) --> one 2 one 1 (1211) --> ..."; //explanation en
                        dbExpln[ 51][2] = "1 --> ein 1 (11) --> zwei 1 (21) --> ein 2 ein 1 (1211) --> ..."; //explanation de
                        dbRefer[ 51] = [];
                        dbRefer[ 51][0] = "<a href='http://mathworld.wolfram.com/LookandSaySequence.html' target='_blank'>[1] mathworld.wolfram.com/LookandSaySequence.html</a>"; //references for ro explanation
                        dbRefer[ 51][1] = "<a href='http://mathworld.wolfram.com/LookandSaySequence.html' target='_blank'>[1] mathworld.wolfram.com/LookandSaySequence.html</a>"; //references for en explanation
                        dbRefer[ 51][2] = "<a href='http://mathworld.wolfram.com/LookandSaySequence.html' target='_blank'>[1] mathworld.wolfram.com/LookandSaySequence.html</a>"; //references for de explanation
                        dbQHint[ 51] = [];
                        dbQHint[ 51][0] = ""; //hint ro
                        dbQHint[ 51][1] = ""; //hint en
                        dbQHint[ 51][2] = ""; //hint de
                        dbQImage[51] = []; dbQImageSrc[51] = []; 
                        dbQImage[51][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[51][0] = "";
                        dbQImage[51][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[51][1] = "";
                        dbQImage[51][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[51][2] = "";
                        dbAImage[51] = [];							dbAImageSrc[51] = [];
                        dbAImage[51][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[51][0] = "";
                        dbAImage[51][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[51][1] = "";
                        dbAImage[51][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[51][2] = "";
dbQList[ 52] = [];
dbQList[ 52][0] = "Ce urmeaz&#x103;:<br/><br/> 6 15 35 77 143 221 323 ?";  
dbQList[ 52][1] = "What comes next:<br/><br/> 6 15 35 77 143 221 323 ?"; 
dbQList[ 52][2] = "Was kommt als n&#228;chstes:<br/><br/> 6 15 35 77 143 221 323 ?"; 
                        dbAType[ 52] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 52] = []; dbAList[52][0] = 437;
                        dbACrit[ 52] = []; dbACrit[52][0] = 20;
                        dbAnswer[52] = [];
                        dbAnswer[52][0] = "R&#x103;spuns corect: 437"; //plaintext ro answer
                        dbAnswer[52][1] = "Right answer: 437"; //plaintext en answer
                        dbAnswer[52][2] = "Richtige Antwort: 437"; //plaintext de answer
                        dbExpln[ 52] = [];
                        dbExpln[ 52][0] = "Numerele prime sunt: 2 3 5 7 11 13 17 19 23 ... <br/> 2*3=6, 3*5=15, 5*7=35, ..."; //explanation ro
                        dbExpln[ 52][1] = "The prime numbers are: 2 3 5 7 11 13 17 19 23 ... <br/> 2*3=6, 3*5=15, 5*7=35, ..."; //explanation en
                        dbExpln[ 52][2] = "Die Primzahlen sind: 2 3 5 7 11 13 17 19 23 ... <br/> 2*3=6, 3*5=15, 5*7=35, ..."; //explanation de
                        dbRefer[ 52] = [];
                        dbRefer[ 52][0] = "<a href='https://oeis.org/A006094' target='_blank'>[1] oeis.org/A006094</a>"; //references for ro explanation
                        dbRefer[ 52][1] = "<a href='https://oeis.org/A006094' target='_blank'>[1] oeis.org/A006094</a>"; //references for en explanation
                        dbRefer[ 52][2] = "<a href='https://oeis.org/A006094' target='_blank'>[1] oeis.org/A006094</a>"; //references for de explanation
                        dbQHint[ 52] = [];
                        dbQHint[ 52][0] = ""; //hint ro
                        dbQHint[ 52][1] = ""; //hint en
                        dbQHint[ 52][2] = ""; //hint de
                        dbQImage[52] = []; dbQImageSrc[52] = []; 
                        dbQImage[52][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[52][0] = "";
                        dbQImage[52][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[52][1] = "";
                        dbQImage[52][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[52][2] = "";
                        dbAImage[52] = [];							dbAImageSrc[52] = [];
                        dbAImage[52][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[52][0] = "";
                        dbAImage[52][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[52][1] = "";
                        dbAImage[52][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[52][2] = "";
dbQList[ 53] = [];
dbQList[ 53][0] = "Ce urmeaz&#x103;:<br/><br/> 0 1 1 3 6 9 27 31 ?";   
dbQList[ 53][1] = "What comes next:<br/><br/> 0 1 1 3 6 9 27 31 ?"; 
dbQList[ 53][2] = "Was kommt als n&#228;chstes:<br/><br/> 0 1 1 3 6 9 27 31 ?"; 
                        dbAType[ 53] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 53] = []; dbAList[53][0] = 124;
                        dbACrit[ 53] = []; dbACrit[53][0] = 20;
                        dbAnswer[53] = [];
                        dbAnswer[53][0] = "R&#x103;spuns corect: 124"; //plaintext ro answer
                        dbAnswer[53][1] = "Right answer: 124"; //plaintext en answer
                        dbAnswer[53][2] = "Richtige Antwort: 124"; //plaintext de answer
                        dbExpln[ 53] = [];
                        dbExpln[ 53][0] = "0+1=1; 1*1=1;<br/>1+2=3; 3*2=6;<br/>6+3=9; 9*3=27;<br/>27+4=31; 31*4=124;"; //explanation ro
                        dbExpln[ 53][1] = "0+1=1; 1*1=1;<br/>1+2=3; 3*2=6;<br/>6+3=9; 9*3=27;<br/>27+4=31; 31*4=124;"; //explanation en
                        dbExpln[ 53][2] = "0+1=1; 1*1=1;<br/>1+2=3; 3*2=6;<br/>6+3=9; 9*3=27;<br/>27+4=31; 31*4=124;"; //explanation de
                        dbRefer[ 53] = [];
                        dbRefer[ 53][0] = "<a href='https://oeis.org/A019461' target='_blank'>[1] oeis.org/A019461</a>"; //references for ro explanation
                        dbRefer[ 53][1] = "<a href='https://oeis.org/A019461' target='_blank'>[1] oeis.org/A019461</a>"; //references for en explanation
                        dbRefer[ 53][2] = "<a href='https://oeis.org/A019461' target='_blank'>[1] oeis.org/A019461</a>"; //references for de explanation
                        dbQHint[ 53] = [];
                        dbQHint[ 53][0] = ""; //hint ro
                        dbQHint[ 53][1] = ""; //hint en
                        dbQHint[ 53][2] = ""; //hint de
                        dbQImage[53] = []; dbQImageSrc[53] = []; 
                        dbQImage[53][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[53][0] = "";
                        dbQImage[53][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[53][1] = "";
                        dbQImage[53][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[53][2] = "";
                        dbAImage[53] = [];							dbAImageSrc[53] = [];
                        dbAImage[53][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[53][0] = "";
                        dbAImage[53][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[53][1] = "";
                        dbAImage[53][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[53][2] = "";
dbQList[ 54] = [];
dbQList[ 54][0] = "Ce urmeaz&#x103;:<br/><br/> 11 12 23 35 57 80 14 ?";  
dbQList[ 54][1] = "What comes next:<br/><br/> 11 12 23 35 57 80 14 ?"; 
dbQList[ 54][2] = "Was kommt als n&#228;chstes:<br/><br/> 11 12 23 35 57 80 14 ?"; 
                        dbAType[ 54] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 54] = []; dbAList[54][0] = 48;
                        dbACrit[ 54] = []; dbACrit[54][0] = 20; 
                        dbAnswer[54] = [];
                        dbAnswer[54][0] = "R&#x103;spuns corect: 48"; //plaintext ro answer
                        dbAnswer[54][1] = "Right answer: 48"; //plaintext en answer
                        dbAnswer[54][2] = "Richtige Antwort: 48"; //plaintext de answer
                        dbExpln[ 54] = [];
                        dbExpln[ 54][0] = "11 oglindit => 11; 11+1=12;<br/>12 oglindit => 21; 21+2=23;<br/>23 oglindit => 32; 32+3=35;<br/>35 oglindit => 53; 53+4=57;<br/>57 oglindit => 75; 75+5=80;<br/>80 oglindit => 08; 08+6=14;<br/>14 oglindit => 41; 41+7=48;"; //explanation ro
                        dbExpln[ 54][1] = "11 mirrored => 11; 11+1=12;<br/>12 mirrored => 21; 21+2=23;<br/>23 mirrored => 32; 32+3=35;<br/>35 mirrored => 53; 53+4=57;<br/>57 mirrored => 75; 75+5=80;<br/>80 mirrored => 08; 08+6=14;<br/>14 mirrored => 41; 41+7=48;"; //explanation en
                        dbExpln[ 54][2] = "11 gespiegelt => 11; 11+1=12;<br/>12 gespiegelt => 21; 21+2=23;<br/>23 gespiegelt => 32; 32+3=35;<br/>35 gespiegelt => 53; 53+4=57;<br/>57 gespiegelt => 75; 75+5=80;<br/>80 gespiegelt => 08; 08+6=14;<br/>14 gespiegelt => 41; 41+7=48;"; //explanation de
                        dbRefer[ 54] = [];
                        dbRefer[ 54][0] = ""; //references for ro explanation
                        dbRefer[ 54][1] = ""; //references for en explanation
                        dbRefer[ 54][2] = ""; //references for de explanation
                        dbQHint[ 54] = [];
                        dbQHint[ 54][0] = ""; //hint ro
                        dbQHint[ 54][1] = ""; //hint en
                        dbQHint[ 54][2] = ""; //hint de
                        dbQImage[54] = []; dbQImageSrc[54] = []; 
                        dbQImage[54][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[54][0] = "";
                        dbQImage[54][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[54][1] = "";
                        dbQImage[54][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[54][2] = "";
                        dbAImage[54] = [];							dbAImageSrc[54] = [];
                        dbAImage[54][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[54][0] = "";
                        dbAImage[54][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[54][1] = "";
                        dbAImage[54][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[54][2] = "";
dbQList[ 55] = [];
dbQList[ 55][0] = "Ce urmeaz&#x103;:<br/><br/> 1 8 11 18 80 ?";  
dbQList[ 55][1] = "What comes next:<br/><br/> 1 8 11 18 80 ?";  
dbQList[ 55][2] = "Was kommt als n&#228;chstes:<br/><br/> 1 8 11 18 80 ?";
                        dbAType[ 55] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 55] = []; dbAList[55][0] = 81;
                        dbACrit[ 55] = []; dbACrit[55][0] = 20;
                        dbAnswer[55] = [];
                        dbAnswer[55][0] = "R&#x103;spuns corect: 81"; //plaintext ro answer
                        dbAnswer[55][1] = "Right answer: 81"; //plaintext en answer
                        dbAnswer[55][2] = "Richtige Antwort: 81"; //plaintext de answer
                        dbExpln[ 55] = [];
                        dbExpln[ 55][0] = "&#x15E;irul numerelor naturale care &#xEE;ncep cu vocal&#x103;: unu, opt, unsprezece, optsprezece, optzeci, optzeci &#x15F;i unu, ..."; //explanation ro
                        dbExpln[ 55][1] = "The sequence of natural numbers starting with a vowel: one, eight, eleven, eighteen, eighty, eighty one, ..."; //explanation en
                        dbExpln[ 55][2] = "Die Folge der nat&#252;rlichen Zahlen beginnend mit einem Vokal: eins, acht, elf, achtzehn, achtzig, einundachzig, ..."; //explanation de
                        dbRefer[ 55] = [];
                        dbRefer[ 55][0] = "<a href='https://oeis.org/A000852' target='_blank'>[1] oeis.org/A000852</a>"; //references for ro explanation
                        dbRefer[ 55][1] = "<a href='https://oeis.org/A000852' target='_blank'>[1] oeis.org/A000852</a>"; //references for en explanation
                        dbRefer[ 55][2] = "<a href='https://oeis.org/A000852' target='_blank'>[1] oeis.org/A000852</a>"; //references for de explanation
                        dbQHint[ 55] = [];
                        dbQHint[ 55][0] = ""; //hint ro
                        dbQHint[ 55][1] = ""; //hint en
                        dbQHint[ 55][2] = ""; //hint de
                        dbQImage[55] = []; dbQImageSrc[55] = []; 
                        dbQImage[55][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[55][0] = "";
                        dbQImage[55][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[55][1] = "";
                        dbQImage[55][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[55][2] = "";
                        dbAImage[55] = [];							dbAImageSrc[55] = [];
                        dbAImage[55][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[55][0] = "";
                        dbAImage[55][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[55][1] = "";
                        dbAImage[55][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[55][2] = "";
dbQList[ 56] = [];
dbQList[ 56][0] = "Ce urmeaz&#x103;:<br/><br/> 2 71 82 81 82 84 59 ?";   
dbQList[ 56][1] = "What comes next:<br/><br/> 2 71 82 81 82 84 59 ?";  
dbQList[ 56][2] = "Was kommt als n&#228;chstes:<br/><br/> 2 71 82 81 82 84 59 ?";
                        dbAType[ 56] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 56] = []; dbAList[56][0] =  4;  
                        dbACrit[ 56] = []; dbACrit[56][0] = 20; 
                        dbAnswer[56] = [];
                        dbAnswer[56][0] = "R&#x103;spuns corect: 04"; //plaintext ro answer
                        dbAnswer[56][1] = "Right answer: 04"; //plaintext en answer
                        dbAnswer[56][2] = "Richtige Antwort: 04"; //plaintext de answer
                        dbExpln[ 56] = [];
                        dbExpln[ 56][0] = "<b>e</b> (baza logaritmului natural) = 2.718281828459045...<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 56][1] = "<b>e</b> (the base of the natural logarithm) = 2.718281828459045...<sup>[1]</sup>"; //explanation en
                        dbExpln[ 56][2] = "<b>e</b> (die Basis des nat&#xFC;rlichen Logarithmus) = 2.718281828459045...<sup>[1]</sup>"; //explanation de
                        dbRefer[ 56] = [];
                        dbRefer[ 56][0] = "<a href='http://www.mathsisfun.com/numbers/e-eulers-number.html' target='_blank'>[1] www.mathsisfun.com/e-eulers-number.html</a>"; //references for ro explanation
                        dbRefer[ 56][1] = "<a href='http://www.mathsisfun.com/numbers/e-eulers-number.html' target='_blank'>[1] www.mathsisfun.com/e-eulers-number.html</a>"; //references for en explanation
                        dbRefer[ 56][2] = "<a href='http://www.mathsisfun.com/numbers/e-eulers-number.html' target='_blank'>[1] www.mathsisfun.com/e-eulers-number.html</a>"; //references for de explanation
                        dbQHint[ 56] = [];
                        dbQHint[ 56][0] = ""; //hint ro
                        dbQHint[ 56][1] = ""; //hint en
                        dbQHint[ 56][2] = ""; //hint de
                        dbQImage[56] = []; dbQImageSrc[56] = []; 
                        dbQImage[56][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[56][0] = "";
                        dbQImage[56][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[56][1] = "";
                        dbQImage[56][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[56][2] = "";
                        dbAImage[56] = [];							dbAImageSrc[56] = [];
                        dbAImage[56][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[56][0] = "";
                        dbAImage[56][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[56][1] = "";
                        dbAImage[56][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[56][2] = "";
dbQList[ 57] = [];
dbQList[ 57][0] = "Ce urmeaz&#x103;:<br/><br/> <span style=\"display:inline-block;width:100;\"> 0 6 </span><span style=\"display:inline-block;width:100;\"> 3 5 </span><span style=\"display:inline-block;width:100;\"> 6 6 </span><br/><span style=\"display:inline-block;width:100;\"> 1 2 </span><span style=\"display:inline-block;width:100;\"> 4 4 </span><span style=\"display:inline-block;width:100;\"> 7 3 </span><br/><span style=\"display:inline-block;width:100;\"> 2 5 </span><span style=\"display:inline-block;width:100;\"> 5 5 </span><span style=\"display:inline-block;width:100;\"> 8 ? </span>";   
dbQList[ 57][1] = "What comes next:<br/><br/> <span style=\"display:inline-block;width:100;\"> 0 6 </span><span style=\"display:inline-block;width:100;\"> 3 5 </span><span style=\"display:inline-block;width:100;\"> 6 6 </span><br/><span style=\"display:inline-block;width:100;\"> 1 2 </span><span style=\"display:inline-block;width:100;\"> 4 4 </span><span style=\"display:inline-block;width:100;\"> 7 3 </span><br/><span style=\"display:inline-block;width:100;\"> 2 5 </span><span style=\"display:inline-block;width:100;\"> 5 5 </span><span style=\"display:inline-block;width:100;\"> 8 ? </span>?";  
dbQList[ 57][2] = "Was kommt als n&#228;chstes:<br/><br/> <span style=\"display:inline-block;width:100;\"> 0 6 </span><span style=\"display:inline-block;width:100;\"> 3 5 </span><span style=\"display:inline-block;width:100;\"> 6 6 </span><br/><span style=\"display:inline-block;width:100;\"> 1 2 </span><span style=\"display:inline-block;width:100;\"> 4 4 </span><span style=\"display:inline-block;width:100;\"> 7 3 </span><br/><span style=\"display:inline-block;width:100;\"> 2 5 </span><span style=\"display:inline-block;width:100;\"> 5 5 </span><span style=\"display:inline-block;width:100;\"> 8 ? </span>"; 
                        dbAType[ 57] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 57] = []; dbAList[57][0] = 7;
                        dbACrit[ 57] = []; dbACrit[57][0] = 20;
                        dbAnswer[57] = [];
                        dbAnswer[57][0] = "R&#x103;spuns corect: 7"; //plaintext ro answer
                        dbAnswer[57][1] = "Right answer: 7"; //plaintext en answer
                        dbAnswer[57][2] = "Richtige Antwort: 7"; //plaintext de answer
                        dbExpln[ 57] = [];
                        dbExpln[ 57][0] = "Num&#x103;rul din dreapta reprezint&#x103; num&#x103;rul de segmente necesare afi&#x15F;&#x103;rii num&#x103;rului din st&#xE2;nga."; //explanation ro
                        dbExpln[ 57][1] = "The right number represents the number of segments needed to display the left number."; //explanation en
                        dbExpln[ 57][2] = "Die rechte Zahl ist die Anzahl der Segmente, die man ben&#246;tigt, um die linke Zahl anzuzeigen."; //explanation de
                        dbRefer[ 57] = [];
                        dbRefer[ 57][0] = ""; //references for ro explanation
                        dbRefer[ 57][1] = ""; //references for en explanation
                        dbRefer[ 57][2] = ""; //references for de explanation
                        dbQHint[ 57] = [];
                        dbQHint[ 57][0] = ""; //hint ro
                        dbQHint[ 57][1] = ""; //hint en
                        dbQHint[ 57][2] = ""; //hint de
                        dbQImage[57] = []; dbQImageSrc[57] = []; 
                        dbQImage[57][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[57][0] = "";
                        dbQImage[57][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[57][1] = "";
                        dbQImage[57][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[57][2] = "";
                        dbAImage[57] = [];							dbAImageSrc[57] = [];
                        dbAImage[57][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[57][0] = "";
                        dbAImage[57][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[57][1] = "";
                        dbAImage[57][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[57][2] = "";
dbQList[ 58] = [];
dbQList[ 58][0] = "Ce urmeaz&#x103;:<br/><br/> <span style=\"display:inline-block;width:100;\"> 1 1 </span><span style=\"display:inline-block;width:100;\"> 4 3 </span><span style=\"display:inline-block;width:100;\"> 7 4 </span><br/><span style=\"display:inline-block;width:100;\"> 2 2 </span><span style=\"display:inline-block;width:100;\"> 5 2 </span><span style=\"display:inline-block;width:100;\"> 8 5 </span><br/><span style=\"display:inline-block;width:100;\"> 3 3 </span><span style=\"display:inline-block;width:100;\"> 6 3 </span><span style=\"display:inline-block;width:100;\"> 9 ? </span>";   
dbQList[ 58][1] = "What comes next:<br/><br/> <span style=\"display:inline-block;width:100;\"> 1 1 </span><span style=\"display:inline-block;width:100;\"> 4 3 </span><span style=\"display:inline-block;width:100;\"> 7 4 </span><br/><span style=\"display:inline-block;width:100;\"> 2 2 </span><span style=\"display:inline-block;width:100;\"> 5 2 </span><span style=\"display:inline-block;width:100;\"> 8 5 </span><br/><span style=\"display:inline-block;width:100;\"> 3 3 </span><span style=\"display:inline-block;width:100;\"> 6 3 </span><span style=\"display:inline-block;width:100;\"> 9 ? </span>";  
dbQList[ 58][2] = "Was kommt als n&#228;chstes:<br/><br/> <span style=\"display:inline-block;width:100;\"> 1 1 </span><span style=\"display:inline-block;width:100;\"> 4 3 </span><span style=\"display:inline-block;width:100;\"> 7 4 </span><br/><span style=\"display:inline-block;width:100;\"> 2 2 </span><span style=\"display:inline-block;width:100;\"> 5 2 </span><span style=\"display:inline-block;width:100;\"> 8 5 </span><br/><span style=\"display:inline-block;width:100;\"> 3 3 </span><span style=\"display:inline-block;width:100;\"> 6 3 </span><span style=\"display:inline-block;width:100;\"> 9 ? </span>";
                        dbAType[ 58] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 58] = []; dbAList[58][0] = 3; 
                        dbACrit[ 58] = []; dbACrit[58][0] = 20; 
                        dbAnswer[58] = [];
                        dbAnswer[58][0] = "R&#x103;spuns corect: 3"; //plaintext ro answer
                        dbAnswer[58][1] = "Right answer: 3"; //plaintext en answer
                        dbAnswer[58][2] = "Richtige Antwort: 3"; //plaintext de answer
                        dbExpln[ 58] = [];
                        dbExpln[ 58][0] = "Num&#x103;rul din dreapta reprezint&#x103; num&#x103;rul de segmente necesare scrierii num&#x103;rului din st&#xE2;nga cu cifre romane."; //explanation ro
                        dbExpln[ 58][1] = "The right number represents the number of segments needed to write the left number with in roman numerals."; //explanation en
                        dbExpln[ 58][2] = "Die rechte Zahl ist die Anzahl der Segmente, die man ben&#246;tigt, um die linke Zahl mit r&#246;mischen Ziffern zu schreiben."; //explanation de
                        dbRefer[ 58] = [];
                        dbRefer[ 58][0] = ""; //references for ro explanation
                        dbRefer[ 58][1] = ""; //references for en explanation
                        dbRefer[ 58][2] = ""; //references for de explanation
                        dbQHint[ 58] = [];
                        dbQHint[ 58][0] = ""; //hint ro
                        dbQHint[ 58][1] = ""; //hint en
                        dbQHint[ 58][2] = ""; //hint de
                        dbQImage[58] = []; dbQImageSrc[58] = []; 
                        dbQImage[58][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[58][0] = "";
                        dbQImage[58][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[58][1] = "";
                        dbQImage[58][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[58][2] = "";
                        dbAImage[58] = [];							dbAImageSrc[58] = [];
                        dbAImage[58][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[58][0] = "";
                        dbAImage[58][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[58][1] = "";
                        dbAImage[58][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[58][2] = "";
dbQList[ 59] = [];
dbQList[ 59][0] = "Ce urmeaz&#x103;:<br/><br/><span style=\"display:inline-block;width:100;\"> 1 </span><span style=\"display:inline-block;width:100;\"> 5 2 4 3 1 </span><br/><span style=\"display:inline-block;width:100;\"> 2 1 </span><span style=\"display:inline-block;width:100;\"> 5 2 4 6 3 1 </span><br/><span style=\"display:inline-block;width:100;\"> 2 3 1 </span><span style=\"display:inline-block;width:100;\"> 5 2 4 7 6 3 1 </span><br/><span style=\"display:inline-block;width:100;\"> 2 4 3 1 </span><span style=\"display:inline-block;width:100;\"> ? ? ? ? ? ? ? ? </span>";    
dbQList[ 59][1] = "What comes next:<br/><br/><span style=\"display:inline-block;width:100;\"> 1 </span><span style=\"display:inline-block;width:100;\"> 5 4 1 3 2 </span><br/><span style=\"display:inline-block;width:100;\"> 1 2 </span><span style=\"display:inline-block;width:100;\"> 5 4 1 6 3 2 </span><br/><span style=\"display:inline-block;width:100;\"> 1 3 2 </span><span style=\"display:inline-block;width:100;\"> 5 4 1 7 6 3 2 </span><br/><span style=\"display:inline-block;width:100;\"> 4 1 3 2 </span><span style=\"display:inline-block;width:100;\"> ? ? ? ? ? ? ? ? </span>";  
dbQList[ 59][2] = "Was kommt als n&#228;chstes:<br/><br/><span style=\"display:inline-block;width:100;\"> 1 </span><span style=\"display:inline-block;width:100;\"> 3 1 5 4 2 </span><br/><span style=\"display:inline-block;width:100;\"> 1 2 </span><span style=\"display:inline-block;width:100;\"> 3 1 5 6 4 2 </span><br/><span style=\"display:inline-block;width:100;\"> 3 1 2 </span><span style=\"display:inline-block;width:100;\"> 3 1 5 6 7 4 2 </span><br/><span style=\"display:inline-block;width:100;\"> 3 1 4 2 </span><span style=\"display:inline-block;width:100;\"> ? ? ? ? ? ? ? </span>";
                        dbAType[ 59] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 59] = []; dbAList[59][0] = "5 2 8 4 7 6 3 1"; dbAList[59][1] = "8 5 4 1 7 6 3 2"; dbAList[59][2] = "8 3 1 5 6 7 4 2";
                        dbACrit[ 59] = []; dbACrit[59][0] = 13; dbACrit[59][1] = 13; dbACrit[59][2] = 13;
                        dbAnswer[59] = [];
                        dbAnswer[59][0] = "R&#x103;spuns corect: 5 2 8 4 7 6 3 1"; //plaintext ro answer
                        dbAnswer[59][1] = "Right answer: 8 5 4 1 7 6 3 2"; //plaintext en answer
                        dbAnswer[59][2] = "Richtige Antwort: 8 3 1 5 6 7 4 2"; //plaintext de answer
                        dbExpln[ 59] = [];
                        dbExpln[ 59][0] = "Numerele sunt aranjate &#xEE;n ordine alfabetic&#x103;."; //explanation ro
                        dbExpln[ 59][1] = "Numbers are arranged alphabetically."; //explanation en
                        dbExpln[ 59][2] = "Die Zahlen sind alphabetisch angeordnet."; //explanation de
                        dbRefer[ 59] = [];
                        dbRefer[ 59][0] = ""; //references for ro explanation
                        dbRefer[ 59][1] = ""; //references for en explanation
                        dbRefer[ 59][2] = ""; //references for de explanation
                        dbQHint[ 59] = [];
                        dbQHint[ 59][0] = ""; //hint ro
                        dbQHint[ 59][1] = ""; //hint en
                        dbQHint[ 59][2] = ""; //hint de
                        dbQImage[59] = []; dbQImageSrc[59] = []; 
                        dbQImage[59][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[59][0] = "";
                        dbQImage[59][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[59][1] = "";
                        dbQImage[59][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[59][2] = "";
                        dbAImage[59] = [];							dbAImageSrc[59] = [];
                        dbAImage[59][0] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[59][0] = "";
                        dbAImage[59][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[59][1] = "";
                        dbAImage[59][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[59][2] = "";
                        
                                                
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MATECHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 60] = [];
dbQList[ 60][0] = "C&#xE2;te numere romane &#xEE;ncep cu I?"; 
dbQList[ 60][1] = "How many roman numbers start with I?"; 
dbQList[ 60][2] = "Wie viele r&#246;mische Zahlen beginnen mit I?"; 
                        dbAType[ 60] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 60] = []; dbAList[60][0] = 5;
                        dbACrit[ 60] = []; dbACrit[60][0] = 20;
                        dbAnswer[60] = [];
                        dbAnswer[60][0] = "R&#x103;spuns corect: 5"; //plaintext ro answer
                        dbAnswer[60][1] = "Right answer: 5"; //plaintext en answer
                        dbAnswer[60][2] = "Richtige Antwort: 5"; //plaintext de answer
                        dbExpln[ 60] = [];
                        dbExpln[ 60][0] = "I, II, III, IV, IX. 49 se scrie XLIX."; //explanation ro
                        dbExpln[ 60][1] = "I, II, III, IV, IX. 49 is written XLIX."; //explanation en
                        dbExpln[ 60][2] = "I, II, III, IV, IX. 49 ist XLIX geschrieben."; //explanation de
                        dbRefer[ 60] = [];
                        dbRefer[ 60][0] = ""; //references for ro explanation
                        dbRefer[ 60][1] = ""; //references for en explanation
                        dbRefer[ 60][2] = ""; //references for de explanation
                        dbQHint[ 60] = [];
                        dbQHint[ 60][0] = ""; //hint ro
                        dbQHint[ 60][1] = ""; //hint en
                        dbQHint[ 60][2] = ""; //hint de
                        dbQImage[60] = []; dbQImageSrc[60] = []; 
                        dbQImage[60][0] = "Images/C1.Microchitze/Img060Colosseum.png";	dbQImageSrc[60][0] = "www.world-mysteries.com";
                        dbQImage[60][1] = "Images/C1.Microchitze/Img060Colosseum.png";	dbQImageSrc[60][1] = "www.world-mysteries.com";
                        dbQImage[60][2] = "Images/C1.Microchitze/Img060Colosseum.png";	dbQImageSrc[60][2] = "www.world-mysteries.com";
                        dbAImage[60] = [];							  dbAImageSrc[60] = [];
                        dbAImage[60][0] = "Images/C1.Microchitze/Img060Roman.png";  dbAImageSrc[60][0] = "www.greatmathsgames.com";
                        dbAImage[60][1] = "Images/C1.Microchitze/Img060Roman.png";  dbAImageSrc[60][1] = "www.greatmathsgames.com";
                        dbAImage[60][2] = "Images/C1.Microchitze/Img060Roman.png";  dbAImageSrc[60][2] = "www.greatmathsgames.com";
dbQList[ 61] = [];
dbQList[ 61][0] = "Care este cel mai mic num&#x103;r arab care privit cu susu-n jos reprezint&#x103; jum&#x103;tatea sa?";  
dbQList[ 61][1] = "Which is the lowest arab number that, viewed upside down, represents its half?"; 
dbQList[ 61][2] = "Welche ist die niedrigste arabische Zahl die, auf den Kopf gestellt, seine H&#228;lfte ist?"; 
                        dbAType[ 61] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 61] = []; dbAList[61][0] = 0;
                        dbACrit[ 61] = []; dbACrit[61][0] = 20; 
                        dbAnswer[61] = [];
                        dbAnswer[61][0] = "R&#x103;spuns corect: 0"; //plaintext ro answer
                        dbAnswer[61][1] = "Right answer: 0"; //plaintext en answer
                        dbAnswer[61][2] = "Richtige Antwort: 0"; //plaintext de answer
                        dbExpln[ 61] = [];
                        dbExpln[ 61][0] = "Nici un alt num&#x103;r nu are aceast&#x103; proprietate."; //explanation ro
                        dbExpln[ 61][1] = "No other number has this property."; //explanation en
                        dbExpln[ 61][2] = "Keine andere Zahl hat diese Eigenschaft."; //explanation de
                        dbRefer[ 61] = [];
                        dbRefer[ 61][0] = ""; //references for ro explanation
                        dbRefer[ 61][1] = ""; //references for en explanation
                        dbRefer[ 61][2] = ""; //references for de explanation
                        dbQHint[ 61] = [];
                        dbQHint[ 61][0] = ""; //hint ro
                        dbQHint[ 61][1] = ""; //hint en
                        dbQHint[ 61][2] = ""; //hint de
                        dbQImage[61] = []; dbQImageSrc[61] = []; 
                        dbQImage[61][0] = "Images/C1.Microchitze/Img061Question.png";	dbQImageSrc[61][0] = "kellogthoughts.com";
                        dbQImage[61][1] = "Images/C1.Microchitze/Img061Question.png";	dbQImageSrc[61][1] = "kellogthoughts.com";
                        dbQImage[61][2] = "Images/C1.Microchitze/Img061Question.png";	dbQImageSrc[61][2] = "kellogthoughts.com";
                        dbAImage[61] = [];							dbAImageSrc[61] = [];
                        dbAImage[61][0] = "Images/C1.Microchitze/Img061Zero.png";  dbAImageSrc[61][0] = "www.shutterstock.com";
                        dbAImage[61][1] = "Images/C1.Microchitze/Img061Zero.png";  dbAImageSrc[61][1] = "www.shutterstock.com";
                        dbAImage[61][2] = "Images/C1.Microchitze/Img061Zero.png";  dbAImageSrc[61][2] = "www.shutterstock.com";
dbQList[ 62] = [];
dbQList[ 62][0] = "Care este num&#x103;rul minim de divizori naturali pe care &#xEE;i poate avea un num&#x103;r natural?";  
dbQList[ 62][1] = "Which is the lowest number of natural divisors that a natural number can have?"; 
dbQList[ 62][2] = "Welche ist die geringste Anzahl von nat&#252;rlichen Teiler, die eine nat&#252;rliche Zahl haben kann?"; 
                        dbAType[ 62] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 62] = []; dbAList[62][0] = 1;
                        dbACrit[ 62] = []; dbACrit[62][0] = 20;
                        dbAnswer[62] = [];
                        dbAnswer[62][0] = "R&#x103;spuns corect: 1"; //plaintext ro answer
                        dbAnswer[62][1] = "Right answer: 1"; //plaintext en answer
                        dbAnswer[62][2] = "Richtige Antwort: 1"; //plaintext de answer
                        dbExpln[ 62] = [];
                        dbExpln[ 62][0] = "1 are doar un divizor: pe el &#xEE;nsu&#x15F;i."; //explanation ro
                        dbExpln[ 62][1] = "1 has only one divisor: itself."; //explanation en
                        dbExpln[ 62][2] = "1 hat nur ein Teiler: sich selbst."; //explanation de
                        dbRefer[ 62] = [];
                        dbRefer[ 62][0] = ""; //references for ro explanation
                        dbRefer[ 62][1] = ""; //references for en explanation
                        dbRefer[ 62][2] = ""; //references for de explanation
                        dbQHint[ 62] = [];
                        dbQHint[ 62][0] = ""; //hint ro
                        dbQHint[ 62][1] = ""; //hint en
                        dbQHint[ 62][2] = ""; //hint de
                        dbQImage[62] = []; dbQImageSrc[62] = []; 
                        dbQImage[62][0] = "Images/C1.Microchitze/Img062GCD.png";	dbQImageSrc[62][0] = "www.mathx.net";
                        dbQImage[62][1] = "Images/C1.Microchitze/Img062GCD.png";	dbQImageSrc[62][1] = "www.mathx.net";
                        dbQImage[62][2] = "Images/C1.Microchitze/Img062GCD.png";	dbQImageSrc[62][2] = "www.mathx.net";
                        dbAImage[62] = [];							dbAImageSrc[62] = [];
                        dbAImage[62][0] = "Images/C1.Microchitze/Img062Factors.png";  dbAImageSrc[62][0] = "www.fishershypnosis.com";
                        dbAImage[62][1] = "Images/C1.Microchitze/Img062Factors.png";  dbAImageSrc[62][1] = "www.fishershypnosis.com";
                        dbAImage[62][2] = "Images/C1.Microchitze/Img062Factors.png";  dbAImageSrc[62][2] = "www.fishershypnosis.com";
dbQList[ 63] = [];
dbQList[ 63][0] = "C&#xE2;te v&#xE2;rfuri are steaua din imagine?";   
dbQList[ 63][1] = "How many vertices does the pictured star have?"; 
dbQList[ 63][2] = "Wie viele Ecken hat der abgebildete Stern?"; 
                        dbAType[ 63] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 63] = []; dbAList[63][0] = 10;
                        dbACrit[ 63] = []; dbACrit[63][0] = 20;
                        dbAnswer[63] = [];
                        dbAnswer[63][0] = "R&#x103;spuns corect: 10"; //plaintext ro answer
                        dbAnswer[63][1] = "Right answer: 10"; //plaintext en answer
                        dbAnswer[63][2] = "Richtige Antwort: 10"; //plaintext de answer
                        dbExpln[ 63] = [];
                        dbExpln[ 63][0] = ""; //explanation ro
                        dbExpln[ 63][1] = ""; //explanation en
                        dbExpln[ 63][2] = ""; //explanation de
                        dbRefer[ 63] = [];
                        dbRefer[ 63][0] = ""; //references for ro explanation
                        dbRefer[ 63][1] = ""; //references for en explanation
                        dbRefer[ 63][2] = ""; //references for de explanation
                        dbQHint[ 63] = [];
                        dbQHint[ 63][0] = ""; //hint ro
                        dbQHint[ 63][1] = ""; //hint en
                        dbQHint[ 63][2] = ""; //hint de
                        dbQImage[63] = []; dbQImageSrc[63] = []; 
                        dbQImage[63][0] = "Images/C1.Microchitze/Img063Star.png";	dbQImageSrc[63][0] = "gojko.net";
                        dbQImage[63][1] = "Images/C1.Microchitze/Img063Star.png";	dbQImageSrc[63][1] = "gojko.net";
                        dbQImage[63][2] = "Images/C1.Microchitze/Img063Star.png";	dbQImageSrc[63][2] = "gojko.net";
                        dbAImage[63] = [];							dbAImageSrc[63] = [];
                        dbAImage[63][0] = "Images/C1.Microchitze/Img063Vertices.png";  dbAImageSrc[63][0] = "gojko.net";
                        dbAImage[63][1] = "Images/C1.Microchitze/Img063Vertices.png";  dbAImageSrc[63][1] = "gojko.net";
                        dbAImage[63][2] = "Images/C1.Microchitze/Img063Vertices.png";  dbAImageSrc[63][2] = "gojko.net";
dbQList[ 64] = [];
dbQList[ 64][0] = "C&#xE2;te capete au dou&#x103; be&#x163;e &#x15F;i jum&#x103;tate?";  
dbQList[ 64][1] = "How many ends do two and a half sticks have?"; 
dbQList[ 64][2] = "Wie viele Endpunkte haben zweieinhalb St&#246;cke?"; 
                        dbAType[ 64] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 64] = []; dbAList[64][0] = 6;
                        dbACrit[ 64] = []; dbACrit[64][0] = 20; 
                        dbAnswer[64] = [];
                        dbAnswer[64][0] = "R&#x103;spuns corect: 6"; //plaintext ro answer
                        dbAnswer[64][1] = "Right answer: 6"; //plaintext en answer
                        dbAnswer[64][2] = "Richtige Antwort: 6"; //plaintext de answer
                        dbExpln[ 64] = [];
                        dbExpln[ 64][0] = "Chiar &#x15F;i o jum&#x103;tate de b&#x103;&#x163; are dou&#x103; capete."; //explanation ro
                        dbExpln[ 64][1] = "Even half a stick has two ends."; //explanation en
                        dbExpln[ 64][2] = "Selbst ein halbes Stock hat zwei Enden."; //explanation de
                        dbRefer[ 64] = [];
                        dbRefer[ 64][0] = ""; //references for ro explanation
                        dbRefer[ 64][1] = ""; //references for en explanation
                        dbRefer[ 64][2] = ""; //references for de explanation
                        dbQHint[ 64] = [];
                        dbQHint[ 64][0] = ""; //hint ro
                        dbQHint[ 64][1] = ""; //hint en
                        dbQHint[ 64][2] = ""; //hint de
                        dbQImage[64] = []; dbQImageSrc[64] = []; 
                        dbQImage[64][0] = "Images/C1.Microchitze/Img064Bamboo.png";	dbQImageSrc[64][0] = "upww.us";
                        dbQImage[64][1] = "Images/C1.Microchitze/Img064Bamboo.png";	dbQImageSrc[64][1] = "upww.us";
                        dbQImage[64][2] = "Images/C1.Microchitze/Img064Bamboo.png";	dbQImageSrc[64][2] = "upww.us";
                        dbAImage[64] = [];							dbAImageSrc[64] = [];
                        dbAImage[64][0] = "Images/C1.Microchitze/Img064Sticks.png";  dbAImageSrc[64][0] = "plus.google.com";
                        dbAImage[64][1] = "Images/C1.Microchitze/Img064Sticks.png";  dbAImageSrc[64][1] = "plus.google.com";
                        dbAImage[64][2] = "Images/C1.Microchitze/Img064Sticks.png";  dbAImageSrc[64][2] = "plus.google.com";
dbQList[ 65] = [];
dbQList[ 65][0] = "Doi plus doi &#xEE;mp&#x103;r&#x163;it la doi este egal cu ...";  
dbQList[ 65][1] = "Two plus two divided by two is equal to ...";  
dbQList[ 65][2] = "Zwei plus Zwei durch Zwei gleicht ...";
                        dbAType[ 65] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 65] = []; dbAList[65][0] = 3;
                        dbACrit[ 65] = []; dbACrit[65][0] = 20;
                        dbAnswer[65] = [];
                        dbAnswer[65][0] = "R&#x103;spuns corect: 3"; //plaintext ro answer
                        dbAnswer[65][1] = "Right answer: 3"; //plaintext en answer
                        dbAnswer[65][2] = "Richtige Antwort: 3"; //plaintext de answer
                        dbExpln[ 65] = [];
                        dbExpln[ 65][0] = "2 + 2 / 2 = 2 + (2/2) = 3"; //explanation ro
                        dbExpln[ 65][1] = "2 + 2 / 2 = 2 + (2/2) = 3"; //explanation en
                        dbExpln[ 65][2] = "2 + 2 / 2 = 2 + (2/2) = 3"; //explanation de
                        dbRefer[ 65] = [];
                        dbRefer[ 65][0] = ""; //references for ro explanation
                        dbRefer[ 65][1] = ""; //references for en explanation
                        dbRefer[ 65][2] = ""; //references for de explanation
                        dbQHint[ 65] = [];
                        dbQHint[ 65][0] = ""; //hint ro
                        dbQHint[ 65][1] = ""; //hint en
                        dbQHint[ 65][2] = ""; //hint de
                        dbQImage[65] = []; dbQImageSrc[65] = []; 
                        dbQImage[65][0] = "Images/C1.Microchitze/Img065Mix.png";	dbQImageSrc[65][0] = "imet.csus.edu";
                        dbQImage[65][1] = "Images/C1.Microchitze/Img065Mix.png";	dbQImageSrc[65][1] = "imet.csus.edu";
                        dbQImage[65][2] = "Images/C1.Microchitze/Img065Mix.png";	dbQImageSrc[65][2] = "imet.csus.edu";
                        dbAImage[65] = [];							dbAImageSrc[65] = [];
                        dbAImage[65][0] = "Images/C1.Microchitze/Img065Order.png";  dbAImageSrc[65][0] = "calculator.mathcaptain.com";
                        dbAImage[65][1] = "Images/C1.Microchitze/Img065Order.png";  dbAImageSrc[65][1] = "calculator.mathcaptain.com";
                        dbAImage[65][2] = "Images/C1.Microchitze/Img065Order.png";  dbAImageSrc[65][2] = "calculator.mathcaptain.com";
dbQList[ 66] = [];
dbQList[ 66][0] = "C&#xE2;&#x163;i metri cubi de p&#x103;m&#xE2;nt exist&#x103; &#xEE;ntr-o groap&#x103; de 4m lungime, 3m l&#x103;&#x163;ime &#x15F;i 1m ad&#xE2;ncime?";   
dbQList[ 66][1] = "How many cubic meters of soil are there in a hole 4m long, 3m wide and 1m deep?";  
dbQList[ 66][2] = "Wie viele Kubikmeter Erde gibt es in einem Loch 4 m lang, 3 m breit und 1 m tief?";
                        dbAType[ 66] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 66] = []; dbAList[66][0] = 0;  
                        dbACrit[ 66] = []; dbACrit[66][0] = 20; 
                        dbAnswer[66] = [];
                        dbAnswer[66][0] = "R&#x103;spuns corect: 0"; //plaintext ro answer
                        dbAnswer[66][1] = "Right answer: 0"; //plaintext en answer
                        dbAnswer[66][2] = "Richtige Antwort: 0"; //plaintext de answer
                        dbExpln[ 66] = [];
                        dbExpln[ 66][0] = "Gropile nu con&#x163;in p&#x103;m&#xE2;nt."; //explanation ro
                        dbExpln[ 66][1] = "Holes do not contain soil."; //explanation en
                        dbExpln[ 66][2] = "L&#246;cher beinhalten keine Erde."; //explanation de
                        dbRefer[ 66] = [];
                        dbRefer[ 66][0] = ""; //references for ro explanation
                        dbRefer[ 66][1] = ""; //references for en explanation
                        dbRefer[ 66][2] = ""; //references for de explanation
                        dbQHint[ 66] = [];
                        dbQHint[ 66][0] = ""; //hint ro
                        dbQHint[ 66][1] = ""; //hint en
                        dbQHint[ 66][2] = ""; //hint de
                        dbQImage[66] = []; dbQImageSrc[66] = []; 
                        dbQImage[66][0] = "Images/C1.Microchitze/Img066Parallelipiped.png";	dbQImageSrc[66][0] = "fodosiq.cwahi.net";
                        dbQImage[66][1] = "Images/C1.Microchitze/Img066Parallelipiped.png";	dbQImageSrc[66][1] = "fodosiq.cwahi.net";
                        dbQImage[66][2] = "Images/C1.Microchitze/Img066Parallelipiped.png";	dbQImageSrc[66][2] = "fodosiq.cwahi.net";
                        dbAImage[66] = [];							dbAImageSrc[66] = [];
                        dbAImage[66][0] = "Images/C1.Microchitze/Img066ArcheologyRO.png";  dbAImageSrc[66][0] = "www.network5C4.Com";
                        dbAImage[66][1] = "Images/C1.Microchitze/Img066ArcheologyEN.png";  dbAImageSrc[66][1] = "www.network5C4.Com";
                        dbAImage[66][2] = "Images/C1.Microchitze/Img066ArcheologyDE.png";  dbAImageSrc[66][2] = "www.network5C4.Com";
dbQList[ 67] = [];
dbQList[ 67][0] = "Dac&#x103; din 5 chi&#x15F;toace se poate face o &#x163;igaret&#x103;, c&#xE2;te &#x163;igarete se pot fuma av&#xE2;nd 25 de chi&#x15F;toace?";   
dbQList[ 67][1] = "If you can make a cigarette from 5 butts, how many cigarettes can you smoke having 25 butts?";  
dbQList[ 67][2] = "Wenn man eine Zigarette aus 5 Stummel machen kann, wie viele Zigaretten can man aus 25 Stummel rauchen?"; 
                        dbAType[ 67] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 67] = []; dbAList[67][0] = 6;
                        dbACrit[ 67] = []; dbACrit[67][0] = 20;
                        dbAnswer[67] = [];
                        dbAnswer[67][0] = "R&#x103;spuns corect: 6"; //plaintext ro answer
                        dbAnswer[67][1] = "Right answer: 6"; //plaintext en answer
                        dbAnswer[67][2] = "Richtige Antwort: 6"; //plaintext de answer
                        dbExpln[ 67] = [];
                        dbExpln[ 67][0] = "25 chi&#x15F;toace => 5 &#x163;igarete, iar din chi&#x15F;toacele lor se mai poate face o &#x163;igaret&#x103;."; //explanation ro
                        dbExpln[ 67][1] = "25 butts => 5 cigarettes, and from their butts you can make another cigarette."; //explanation en
                        dbExpln[ 67][2] = "25 Stummel => 5 Zigaretten, und von ihre Stummel kann man eine weitere Zigarette machen."; //explanation de
                        dbRefer[ 67] = [];
                        dbRefer[ 67][0] = ""; //references for ro explanation
                        dbRefer[ 67][1] = ""; //references for en explanation
                        dbRefer[ 67][2] = ""; //references for de explanation
                        dbQHint[ 67] = [];
                        dbQHint[ 67][0] = ""; //hint ro
                        dbQHint[ 67][1] = ""; //hint en
                        dbQHint[ 67][2] = ""; //hint de
                        dbQImage[67] = []; dbQImageSrc[67] = []; 
                        dbQImage[67][0] = "Images/C1.Microchitze/Img067Butts.png";	dbQImageSrc[67][0] = "www.thestar.com";
                        dbQImage[67][1] = "Images/C1.Microchitze/Img067Butts.png";	dbQImageSrc[67][1] = "www.thestar.com";
                        dbQImage[67][2] = "Images/C1.Microchitze/Img067Butts.png";	dbQImageSrc[67][2] = "www.thestar.com";
                        dbAImage[67] = [];							dbAImageSrc[67] = [];
                        dbAImage[67][0] = "Images/C1.Microchitze/Img067Cigarettes.png";  dbAImageSrc[67][0] = "www.zaubershop-frenchdrop.de";
                        dbAImage[67][1] = "Images/C1.Microchitze/Img067Cigarettes.png";  dbAImageSrc[67][1] = "www.zaubershop-frenchdrop.de";
                        dbAImage[67][2] = "Images/C1.Microchitze/Img067Cigarettes.png";  dbAImageSrc[67][2] = "www.zaubershop-frenchdrop.de";
dbQList[ 68] = [];
dbQList[ 68][0] = "&#x15E;apte fra&#x163;i au c&#xE2;te o sor&#x103;, c&#xE2;&#x163;i sunt &#xEE;n total?";   
dbQList[ 68][1] = "Seven brothers have a sister each, how many are they?";  
dbQList[ 68][2] = "Sieben Brueder haben je eine Schwester, wie viele sind sie zusammen?";
                        dbAType[ 68] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 68] = []; dbAList[68][0] = 8; 
                        dbACrit[ 68] = []; dbACrit[68][0] = 20; 
                        dbAnswer[68] = [];
                        dbAnswer[68][0] = "R&#x103;spuns corect: 8"; //plaintext ro answer
                        dbAnswer[68][1] = "Right answer: 8"; //plaintext en answer
                        dbAnswer[68][2] = "Richtige Antwort: 8"; //plaintext de answer
                        dbExpln[ 68] = [];
                        dbExpln[ 68][0] = "To&#x163;i au aceea&#x15F;i sor&#x103;."; //explanation ro
                        dbExpln[ 68][1] = "All have the same sister."; //explanation en
                        dbExpln[ 68][2] = "Alle haben dieselbe Schwester."; //explanation de
                        dbRefer[ 68] = [];
                        dbRefer[ 68][0] = ""; //references for ro explanation
                        dbRefer[ 68][1] = ""; //references for en explanation
                        dbRefer[ 68][2] = ""; //references for de explanation
                        dbQHint[ 68] = [];
                        dbQHint[ 68][0] = ""; //hint ro
                        dbQHint[ 68][1] = ""; //hint en
                        dbQHint[ 68][2] = ""; //hint de
                        dbQImage[68] = []; dbQImageSrc[68] = []; 
                        dbQImage[68][0] = "Images/C1.Microchitze/Img068Seven.png";	dbQImageSrc[68][0] = "www.aliexpress.com";
                        dbQImage[68][1] = "Images/C1.Microchitze/Img068Seven.png";	dbQImageSrc[68][1] = "www.aliexpress.com";
                        dbQImage[68][2] = "Images/C1.Microchitze/Img068Seven.png";	dbQImageSrc[68][2] = "www.aliexpress.com";
                        dbAImage[68] = [];							dbAImageSrc[68] = [];
                        dbAImage[68][0] = "Images/C1.Microchitze/Img068Sister.png";  dbAImageSrc[68][0] = "www.aliexpress.com";
                        dbAImage[68][1] = "Images/C1.Microchitze/Img068Sister.png";  dbAImageSrc[68][1] = "www.aliexpress.com";
                        dbAImage[68][2] = "Images/C1.Microchitze/Img068Sister.png";  dbAImageSrc[68][2] = "www.aliexpress.com";
dbQList[ 69] = [];
dbQList[ 69][0] = "Dac&#x103; 8 muncitori au avut nevoie de 10 ore pentru a construi un zid, de c&#xE2;te ore au nevoie 4 muncitori pentru a construi acela&#x15F;i zid?";    
dbQList[ 69][1] = "If 8 workers needed 10 hours to build a wall, how many hours do 4 workers need to build the same wall?";  
dbQList[ 69][2] = "Wenn 8 Arbeiter 10 Stunden ben&#246;tit haben, um eine Wand zu bauen, wie viele Stunden ben&#246;tigen 4 Arbeiter, um die gleiche Wand zu bauen?";
                        dbAType[ 69] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 69] = []; dbAList[69][0] = 0;
                        dbACrit[ 69] = []; dbACrit[69][0] = 20;
                        dbAnswer[69] = [];
                        dbAnswer[69][0] = "R&#x103;spuns corect: 0"; //plaintext ro answer
                        dbAnswer[69][1] = "Right answer: 0"; //plaintext en answer
                        dbAnswer[69][2] = "Richtige Antwort: 0"; //plaintext de answer
                        dbExpln[ 69] = [];
                        dbExpln[ 69][0] = "Zidul e deja construit."; //explanation ro
                        dbExpln[ 69][1] = "The wall is already built."; //explanation en
                        dbExpln[ 69][2] = "Die Wand ist schon gebaut."; //explanation de
                        dbRefer[ 69] = [];
                        dbRefer[ 69][0] = ""; //references for ro explanation
                        dbRefer[ 69][1] = ""; //references for en explanation
                        dbRefer[ 69][2] = ""; //references for de explanation
                        dbQHint[ 69] = [];
                        dbQHint[ 69][0] = ""; //hint ro
                        dbQHint[ 69][1] = ""; //hint en
                        dbQHint[ 69][2] = ""; //hint de
                        dbQImage[69] = []; dbQImageSrc[69] = []; 
                        dbQImage[69][0] = "Images/C1.Microchitze/Img069Wall.png";	dbQImageSrc[69][0] = "albanyanalytical.com";
                        dbQImage[69][1] = "Images/C1.Microchitze/Img069Wall.png";	dbQImageSrc[69][1] = "albanyanalytical.com";
                        dbQImage[69][2] = "Images/C1.Microchitze/Img069Wall.png";	dbQImageSrc[69][2] = "albanyanalytical.com";
                        dbAImage[69] = [];							dbAImageSrc[69] = [];
                        dbAImage[69][0] = "Images/C1.Microchitze/Img069Completed.png";  dbAImageSrc[69][0] = "www.pptbackgrounds.net";
                        dbAImage[69][1] = "Images/C1.Microchitze/Img069Completed.png";  dbAImageSrc[69][1] = "www.pptbackgrounds.net";
                        dbAImage[69][2] = "Images/C1.Microchitze/Img069Completed.png";  dbAImageSrc[69][2] = "www.pptbackgrounds.net";
                        
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHEMOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 70] = [];
dbQList[ 70][0] = "Ce element a fost descoperit prin studierea urinei?"; 
dbQList[ 70][1] = "Which element was discovered by studying urine?"; 
dbQList[ 70][2] = "Welcher Element wurde durch das Studium von Urin entdeckt?"; 
                        dbAType[ 70] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 70] = []; dbAList[70][0] = "fosfor"; dbAList[70][1] = "phosphor";
                        dbACrit[ 70] = []; dbACrit[70][0] = 13; dbACrit[70][1] = 13;
                        dbAnswer[70] = [];
                        dbAnswer[70][0] = "R&#x103;spuns corect: Fosfor"; //plaintext ro answer
                        dbAnswer[70][1] = "Right answer: Phosphorus"; //plaintext en answer
                        dbAnswer[70][2] = "Richtige Antwort: Phosphor"; //plaintext de answer
                        dbExpln[ 70] = [];
                        dbExpln[ 70][0] = "Hennig Brand a descoperit fosforul &#xEE;n 1669, &#xEE;n Hamburg (Germania), preg&#x103;tindu-l din urin&#x103; printr-o metod&#x103; tipic alchimic&#x103;. Astfel, el a devenit prima persoan&#x103; recunoscut&#x103; ca descoperitor al unui element (elemente precum aurul &#x15F;i argintul erau cunoscute, dar nu aveau asociat un descoperitor).<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 70][1] = "Hennig Brand discovered phosphorus in 1669, in Hamburg (Germany), preparing it from urine in a typically alchemical method. Thus, he became the first person to be recognized as the discover of an element (elements such as gold and silver were already known, but had no named discoverer).<sup>[1]</sup>"; //explanation en
                        dbExpln[ 70][2] = "Hennig Brand hat Phosphor im Jahr 1669 in Hamburg (Deutschland) entdeckt. Er stellte es her aus Urin in einem typisch alchemistischen Verfahren. So wurde er der erste Mensch, der als Entdecker eines Elements anerkannt wurde (Elemente wie Gold und Silber waren schon bekannt, aber hatten kein Entdecker).<sup>[1]</sup>"; //explanation de
                        dbRefer[ 70] = [];
                        dbRefer[ 70][0] = "<a href='http://www.chemicool.com/elements/phosphorus.html' target='_blank'>[1] www.chemicool.com/elements/phosphorus.html</a>"; //references for ro explanation
                        dbRefer[ 70][1] = "<a href='http://www.chemicool.com/elements/phosphorus.html' target='_blank'>[1] www.chemicool.com/elements/phosphorus.html</a>"; //references for en explanation
                        dbRefer[ 70][2] = "<a href='http://www.chemicool.com/elements/phosphorus.html' target='_blank'>[1] www.chemicool.com/elements/phosphorus.html</a>"; //references for de explanation
                        dbQHint[ 70] = [];
                        dbQHint[ 70][0] = ""; //hint ro
                        dbQHint[ 70][1] = ""; //hint en
                        dbQHint[ 70][2] = ""; //hint de
                        dbQImage[70] = []; dbQImageSrc[70] = []; 
                        dbQImage[70][0] = "Images/C1.Microchitze/Img070DogPee.png";	dbQImageSrc[70][0] = "ehsbioblog.blogspot.com";
                        dbQImage[70][1] = "Images/C1.Microchitze/Img070DogPee.png";	dbQImageSrc[70][1] = "ehsbioblog.blogspot.com";
                        dbQImage[70][2] = "Images/C1.Microchitze/Img070DogPee.png";	dbQImageSrc[70][2] = "ehsbioblog.blogspot.com";
                        dbAImage[70] = [];							  dbAImageSrc[70] = [];
                        dbAImage[70][0] = "Images/C1.Microchitze/Img070Painting.png";  dbAImageSrc[70][0] = "The Alchymist. Joseph Wright 1717";
                        dbAImage[70][1] = "Images/C1.Microchitze/Img070Painting.png";  dbAImageSrc[70][1] = "The Alchymist. Joseph Wright 1717";
                        dbAImage[70][2] = "Images/C1.Microchitze/Img070Painting.png";  dbAImageSrc[70][2] = "The Alchymist. Joseph Wright 1717";
dbQList[ 71] = [];
dbQList[ 71][0] = "Care este simbolul chimic pentru cositor?";  
dbQList[ 71][1] = "What is the chemical symbol for tin?"; 
dbQList[ 71][2] = "Was ist das Elementsymbol f&#252;r Zinn?"; 
                        dbAType[ 71] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 71] = []; dbAList[71][0] = "Sn";
                        dbACrit[ 71] = []; dbACrit[71][0] = 13; 
                        dbAnswer[71] = [];
                        dbAnswer[71][0] = "R&#x103;spuns corect: Sn"; //plaintext ro answer
                        dbAnswer[71][1] = "Right answer: Sn"; //plaintext en answer
                        dbAnswer[71][2] = "Richtige Antwort: Sn"; //plaintext de answer
                        dbExpln[ 71] = [];
                        dbExpln[ 71][0] = "Simbolul vine de la numele latin <i>stannum</i>.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 71][1] = "The symbol comes from the Latin name <i>stannum</i>.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 71][2] = "Das Symbol kommt von lateinischen <i>stannum</i>.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 71] = [];
                        dbRefer[ 71][0] = "<a href='http://www.chemicool.com/elements/tin.html' target='_blank'>[1] www.chemicool.com/elements/tin.html</a>"; //references for ro explanation
                        dbRefer[ 71][1] = "<a href='http://www.chemicool.com/elements/tin.html' target='_blank'>[1] www.chemicool.com/elements/tin.html</a>"; //references for en explanation
                        dbRefer[ 71][2] = "<a href='http://www.chemicool.com/elements/tin.html' target='_blank'>[1] www.chemicool.com/elements/tin.html</a>"; //references for de explanation
                        dbQHint[ 71] = [];
                        dbQHint[ 71][0] = ""; //hint ro
                        dbQHint[ 71][1] = ""; //hint en
                        dbQHint[ 71][2] = ""; //hint de
                        dbQImage[71] = []; dbQImageSrc[71] = []; 
                        dbQImage[71][0] = "Images/C1.Microchitze/Img071Warrior.png";	dbQImageSrc[1][0] = "www.etsy.com";
                        dbQImage[71][1] = "Images/C1.Microchitze/Img071Warrior.png";	dbQImageSrc[1][1] = "www.etsy.com";
                        dbQImage[71][2] = "Images/C1.Microchitze/Img071Warrior.png";	dbQImageSrc[1][2] = "www.etsy.com";
                        dbAImage[71] = [];							dbAImageSrc[71] = [];
                        dbAImage[71][0] = "Images/C1.Microchitze/Img071Tin.png";  dbAImageSrc[71][0] = "periodictable.com";
                        dbAImage[71][1] = "Images/C1.Microchitze/Img071Tin.png";  dbAImageSrc[71][1] = "periodictable.com";
                        dbAImage[71][2] = "Images/C1.Microchitze/Img071Tin.png";  dbAImageSrc[71][2] = "periodictable.com";
dbQList[ 72] = [];
dbQList[ 72][0] = "Dupa ce a fost numit elementul <i>indiu</i>?";  
dbQList[ 72][1] = "What was element <i>indium</i> named after?"; 
dbQList[ 72][2] = "Wonach war das Element <i>indium</i> benannt?"; 
                        dbAType[ 72] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 72] = []; dbAList[72][0] = "indigo";
                        dbACrit[ 72] = []; dbACrit[72][0] = 13;
                        dbAnswer[72] = [];
                        dbAnswer[72][0] = "R&#x103;spuns corect: indigo"; //plaintext ro answer
                        dbAnswer[72][1] = "Right answer: indigo"; //plaintext en answer
                        dbAnswer[72][2] = "Richtige Antwort: Indigo"; //plaintext de answer
                        dbExpln[ 72] = [];
                        dbExpln[ 72][0] = "Ferdinand Reich a descoperit indiu in 1863. Elementul a fost numit dupa linia sa spectral&#x103; caracteristic&#x103; - \"indi\" indic&#xE2;nd culoarea indigo.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 72][1] = "Ferdinand Reich discovered indium in 1863. The element was named after its characteristic spectral line ?the \"indi\" coming from the color indigo.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 72][2] = "Ferdinand Reich hat Indium in 1863 entdeckt. Das Element wurde nach seine charakteristische spektrale Linie genannt - \"indi\" deutet auf die Farbe Indigo auf.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 72] = [];
                        dbRefer[ 72][0] = "<a href='http://www.chemicool.com/elements/indium.html' target='_blank'>[1] www.chemicool.com/elements/indium.html</a>"; //references for ro explanation
                        dbRefer[ 72][1] = "<a href='http://www.chemicool.com/elements/indium.html' target='_blank'>[1] www.chemicool.com/elements/indium.html</a>"; //references for en explanation
                        dbRefer[ 72][2] = "<a href='http://www.chemicool.com/elements/indium.html' target='_blank'>[1] www.chemicool.com/elements/indium.html</a>"; //references for de explanation
                        dbQHint[ 72] = [];
                        dbQHint[ 72][0] = ""; //hint ro
                        dbQHint[ 72][1] = ""; //hint en
                        dbQHint[ 72][2] = ""; //hint de
                        dbQImage[72] = []; dbQImageSrc[72] = []; 
                        dbQImage[72][0] = "Images/C1.Microchitze/Img072Indium.png";	dbQImageSrc[72][0] = "periodictable.com";
                        dbQImage[72][1] = "Images/C1.Microchitze/Img072Indium.png";	dbQImageSrc[72][1] = "periodictable.com";
                        dbQImage[72][2] = "Images/C1.Microchitze/Img072Indium.png";	dbQImageSrc[72][2] = "periodictable.com";
                        dbAImage[72] = [];							dbAImageSrc[72] = [];
                        dbAImage[72][0] = "Images/C1.Microchitze/Img072Spectrum.png";  dbAImageSrc[72][0] = "www.alexpetty.com";
                        dbAImage[72][1] = "Images/C1.Microchitze/Img072Spectrum.png";  dbAImageSrc[72][1] = "www.alexpetty.com";
                        dbAImage[72][2] = "Images/C1.Microchitze/Img072Spectrum.png";  dbAImageSrc[72][2] = "www.alexpetty.com";
dbQList[ 73] = [];
dbQList[ 73][0] = "Protiu, deuteriu si tritiu sunt izotopi ai carui element?";   
dbQList[ 73][1] = "Protium, deuterium and tritium are isotopes of which element?"; 
dbQList[ 73][2] = "Protium, Deuterium und Tritium sind Isotopen von welchem Element?"; 
                        dbAType[ 73] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 73] = []; dbAList[73][0] = "Hidrogen"; dbAList[73][1] = "Hydrogen"; dbAList[73][2] = "Wasserstoff";
                        dbACrit[ 73] = []; dbACrit[73][0] = 13; dbACrit[73][1] = 13; dbACrit[73][2] = 13;
                        dbAnswer[73] = [];
                        dbAnswer[73][0] = "R&#x103;spuns corect: hidrogen"; //plaintext ro answer
                        dbAnswer[73][1] = "Right answer: hydrogen"; //plaintext en answer
                        dbAnswer[73][2] = "Richtige Antwort: Wasserstoff"; //plaintext de answer
                        dbExpln[ 73] = [];
                        dbExpln[ 73][0] = "Hidrogenul este singurul element ai carui izotopi au nume uzuale diferite de numele elementului.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 73][1] = "Hydrogen is the only element whose isotopes have commonly-used names that are different from the name of the element.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 73][2] = "Wasserstoff ist das einzige Element, dessen Isotope h&#xE4;ufig-verwendete Namen haben, die sich von den Namen des Elements unterscheiden.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 73] = [];
                        dbRefer[ 73][0] = "<a href='http://www.chemicool.com/elements/hydrogen.html' target='_blank'>[1] www.chemicool.com/elements/hydrogen.html</a>"; //references for ro explanation
                        dbRefer[ 73][1] = "<a href='http://www.chemicool.com/elements/hydrogen.html' target='_blank'>[1] www.chemicool.com/elements/hydrogen.html</a>"; //references for en explanation
                        dbRefer[ 73][2] = "<a href='http://www.chemicool.com/elements/hydrogen.html' target='_blank'>[1] www.chemicool.com/elements/hydrogen.html</a>"; //references for de explanation
                        dbQHint[ 73] = [];
                        dbQHint[ 73][0] = ""; //hint ro
                        dbQHint[ 73][1] = ""; //hint en
                        dbQHint[ 73][2] = ""; //hint de
                        dbQImage[73] = []; dbQImageSrc[73] = []; 
                        dbQImage[73][0] = "Images/C1.Microchitze/Img073Isotopes.png";	dbQImageSrc[73][0] = "pbsg.npolar.no";
                        dbQImage[73][1] = "Images/C1.Microchitze/Img073Isotopes.png";	dbQImageSrc[73][1] = "pbsg.npolar.no";
                        dbQImage[73][2] = "Images/C1.Microchitze/Img073Isotopes.png";	dbQImageSrc[73][2] = "pbsg.npolar.no";
                        dbAImage[73] = [];							dbAImageSrc[73] = [];
                        dbAImage[73][0] = "Images/C1.Microchitze/Img073HydrogenIsotopes.png";  dbAImageSrc[73][0] = "en.wikipedia.org";
                        dbAImage[73][1] = "Images/C1.Microchitze/Img073HydrogenIsotopes.png";  dbAImageSrc[73][1] = "en.wikipedia.org";
                        dbAImage[73][2] = "Images/C1.Microchitze/Img073HydrogenIsotopes.png";  dbAImageSrc[73][2] = "en.wikipedia.org";
dbQList[ 74] = [];
dbQList[ 74][0] = "Care este cel mai abundent gaz &#xEE;n atmosfera P&#x103;m&#xE2;ntului?";  
dbQList[ 74][1] = "What is the most abundant gas in Earth's atmosphere?"; 
dbQList[ 74][2] = "Was ist das h&#xE4;ufigste Gas der Erdatmosph&#xE4;re?"; 
                        dbAType[ 74] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 74] = []; dbAList[74][0] = "N2"; dbAList[74][1] = "azot"; dbAList[74][2] = "nitrogen"; dbAList[74][3] = "Stickstoff";
                        dbACrit[ 74] = []; dbACrit[74][0] = 13; dbACrit[74][1] = 13; dbACrit[74][2] = 13; dbACrit[74][3] = 13;
                        dbAnswer[74] = [];
                        dbAnswer[74][0] = "R&#x103;spuns corect: azot"; //plaintext ro answer
                        dbAnswer[74][1] = "Right answer: nitrogen"; //plaintext en answer
                        dbAnswer[74][2] = "Richtige Antwort: Stickstoff"; //plaintext de answer
                        dbExpln[ 74] = [];
                        dbExpln[ 74][0] = "Aerul uscat con&#x163;ine aproximativ 78% azot, 21% oxigen &#x15F;i cantit&#x103;&#x163;i mici de alte gaze. Aerul con&#x163;ine &#x15F;i o cantitate variabil&#x103; de vapori de ap&#x103;, &#xEE;n medie &#xEE;n jur de 1%.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 74][1] = "Dry air contains about 78% nitrogen, 21% oxygen and small amounts of other gases. Air also contains a variable amount of water vapors, on average around 1%.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 74][2] = "Wasserdampffreie Luft besteht aus ungef&#xE4;hr 78% Stickstoff, 21% Sauerstoff und kleine Mengen anderer Gase. Luft enth&#xE4;lt auch eine variable Menge Wasserdampf, im Durchschnitt etwa 1%.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 74] = [];
                        dbRefer[ 74][0] = "<a href='http://ro.wikipedia.org/wiki/Atmosfera_P%C4%83m%C3%A2ntului' target='_blank'>[1] ro.wikipedia.org/Atmosfera_P&#x103;m&#xE2;ntului</a>"; //references for ro explanation
                        dbRefer[ 74][1] = "<a href='http://en.wikipedia.org/wiki/Atmosphere_of_Earth' target='_blank'>[1] en.wikipedia.org/Atmosphere_of_Earth</a>"; //references for en explanation
                        dbRefer[ 74][2] = "<a href='http://de.wikipedia.org/wiki/Erdatmosph%C3%A4re' target='_blank'>[1] de.wikipedia.org/Erdatmosph&#228;re</a>"; //references for de explanation
                        dbQHint[ 74] = [];
                        dbQHint[ 74][0] = ""; //hint ro
                        dbQHint[ 74][1] = ""; //hint en
                        dbQHint[ 74][2] = ""; //hint de
                        dbQImage[74] = []; dbQImageSrc[74] = []; 
                        dbQImage[74][0] = "Images/C1.Microchitze/Img074Air.png";	dbQImageSrc[74][0] = "offbeatchina.com";
                        dbQImage[74][1] = "Images/C1.Microchitze/Img074Air.png";	dbQImageSrc[74][1] = "offbeatchina.com";
                        dbQImage[74][2] = "Images/C1.Microchitze/Img074Air.png";	dbQImageSrc[74][2] = "offbeatchina.com";
                        dbAImage[74] = [];							dbAImageSrc[74] = [];
                        dbAImage[74][0] = "Images/C1.Microchitze/Img074Atmosphere.png";  dbAImageSrc[74][0] = "www.cmmap.org";
                        dbAImage[74][1] = "Images/C1.Microchitze/Img074Atmosphere.png";  dbAImageSrc[74][1] = "www.cmmap.org";
                        dbAImage[74][2] = "Images/C1.Microchitze/Img074Atmosphere.png";  dbAImageSrc[74][2] = "www.cmmap.org";
dbQList[ 75] = [];
dbQList[ 75][0] = "Care este formula acidului periodic?";  
dbQList[ 75][1] = "What is the formula of the periodic acid?";  
dbQList[ 75][2] = "Was ist die Formel der Periods&#228;ure?";
                        dbAType[ 75] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 75] = []; dbAList[75][0] = "H5IO6"; dbAList[75][1] = "HIO4";
                        dbACrit[ 75] = []; dbACrit[75][0] = 13;  dbACrit[75][1] = 13;
                        dbAnswer[75] = [];
                        dbAnswer[75][0] = "R&#x103;spuns corect: H<sub>5</sub>IO<sub>6</sub> (acid ortoperiodic); HIO<sub>4</sub> (acid metaperiodic)"; //plaintext ro answer
                        dbAnswer[75][1] = "Right answer: H<sub>5</sub>IO<sub>6</sub> (ortoperiodic acid); HIO<sub>4</sub> (metaperiodic acid)"; //plaintext en answer
                        dbAnswer[75][2] = "Richtige Antwort: H<sub>5</sub>IO<sub>6</sub> (Orthoperiods&#228;ure); HIO<sub>4</sub> (Metaperiods&#228;ure)"; //plaintext de answer
                        dbExpln[ 75] = [];
                        dbExpln[ 75][0] = "Acidul periodic (pronun&#x163;at <i>per-iodic</i>), H<sub>5</sub>IO<sub>6</sub>, este cel mai mare oxoacid al iodului (num&#x103;r de oxidare VII).<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 75][1] = "The periodic acid (pronounced <i>per-iodic</i>), H<sub>5</sub>IO<sub>6</sub>, is the highest oxoacid of iodine  (oxidation number VII).<sup>[1]</sup>"; //explanation en
                        dbExpln[ 75][2] = "Die Periods&#228;ure (auch bekannt als Perjods&#228;ure), H<sub>5</sub>IO<sub>6</sub>, ist der h&#xF6;chste oxos&#228;ure von Jod (Oxidationszahl VII).<sup>[1]</sup>"; //explanation de
                        dbRefer[ 75] = [];
                        dbRefer[ 75][0] = "<a href='http://en.wikipedia.org/wiki/Periodic_acid' target='_blank'>[1] en.wikipedia.org/Periodic_acid</a>"; //references for ro explanation
                        dbRefer[ 75][1] = "<a href='http://en.wikipedia.org/wiki/Periodic_acid' target='_blank'>[1] en.wikipedia.org/Periodic_acid</a>"; //references for en explanation
                        dbRefer[ 75][2] = "<a href='http://de.wikipedia.org/wiki/Periods%C3%A4ure' target='_blank'>[1] de.wikipedia.org/Periods&#228;ure</a>"; //references for de explanation
                        dbQHint[ 75] = [];
                        dbQHint[ 75][0] = ""; //hint ro
                        dbQHint[ 75][1] = ""; //hint en
                        dbQHint[ 75][2] = ""; //hint de
                        dbQImage[75] = []; dbQImageSrc[75] = []; 
                        dbQImage[75][0] = "Images/C1.Microchitze/Img075FemChem.png";	dbQImageSrc[75][0] = "2daisyblogger.blogspot.comx";
                        dbQImage[75][1] = "Images/C1.Microchitze/Img075FemChem.png";	dbQImageSrc[75][1] = "2daisyblogger.blogspot.comx";
                        dbQImage[75][2] = "Images/C1.Microchitze/Img075FemChem.png";	dbQImageSrc[75][2] = "2daisyblogger.blogspot.comx";
                        dbAImage[75] = [];							dbAImageSrc[75] = [];
                        dbAImage[75][0] = "Images/C1.Microchitze/Img075Orthoperiodic.png";  dbAImageSrc[75][0] = "www.hmdb.ca";
                        dbAImage[75][1] = "Images/C1.Microchitze/Img075Orthoperiodic.png";  dbAImageSrc[75][1] = "www.hmdb.ca";
                        dbAImage[75][2] = "Images/C1.Microchitze/Img075Orthoperiodic.png";  dbAImageSrc[75][2] = "www.hmdb.ca";
dbQList[ 76] = [];
dbQList[ 76][0] = "Cati atomi de hidrogen sunt intr-o molecula de TNT?";   
dbQList[ 76][1] = "How many hidrogen atoms are there in a molecule of TNT?";  
dbQList[ 76][2] = "Wie viele Wasserstoff Atome gibt es in ein Molek&#xFC;l TNT?";
                        dbAType[ 76] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 76] = []; dbAList[76][0] = 5;  
                        dbACrit[ 76] = []; dbACrit[76][0] = 20; 
                        dbAnswer[76] = [];
                        dbAnswer[76][0] = "R&#x103;spuns corect: 5"; //plaintext ro answer
                        dbAnswer[76][1] = "Right answer: 5"; //plaintext en answer
                        dbAnswer[76][2] = "Richtige Antwort: 5"; //plaintext de answer
                        dbExpln[ 76] = [];
                        dbExpln[ 76][0] = "O molecula de trinitrotoluen (TNT), C<sub>6</sub>H<sub>2</sub>(NO<sub>2</sub>)<sub>3</sub>CH<sub>3</sub>, contine 5 atomi de hidrogen. In imagine, Carbonul este negru, Azotul este albastru, Oxigenul este rosu si Hidrogenul este alb.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 76][1] = "A molecule of trinitrotoluene (TNT), C<sub>6</sub>H<sub>2</sub>(NO<sub>2</sub>)<sub>3</sub>CH<sub>3</sub>, contains 5 atoms of Hydrogen. In the image, Carbon is black, Nitrogen is blue, Oxygen is red and Hydrogen is white.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 76][2] = "Ein Molek&#xFC;l Trinitrotoluol (TNT), C<sub>6</sub>H<sub>2</sub>(NO<sub>2</sub>)<sub>3</sub>CH<sub>3</sub>, beinhaltet 5 Wasserstoff Atome. Im Bild, Kohlenstoff ist schwarz, Stickstoff ist blau, Saurestoff ist rot und Wasserstoff ist weiss.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 76] = [];
                        dbRefer[ 76][0] = "<a href='http://ro.wikipedia.org/wiki/Trinitrotoluen' target='_blank'>[1] ro.wikipedia.org/Trinitrotoluen</a>"; //references for ro explanation
                        dbRefer[ 76][1] = "<a href='http://en.wikipedia.org/wiki/Trinitrotoluene' target='_blank'>[1] en.wikipedia.org/Trinitrotoluene</a>"; //references for en explanation
                        dbRefer[ 76][2] = "<a href='http://de.wikipedia.org/wiki/Trinitrotoluol' target='_blank'>[1] de.wikipedia.org/Trinitrotoluol</a>"; //references for de explanation
                        dbQHint[ 76] = [];
                        dbQHint[ 76][0] = ""; //hint ro
                        dbQHint[ 76][1] = ""; //hint en
                        dbQHint[ 76][2] = ""; //hint de
                        dbQImage[76] = []; dbQImageSrc[76] = []; 
                        dbQImage[76][0] = "Images/C1.Microchitze/Img076TNT.png";	dbQImageSrc[76][0] = "commons.wikimedia.org";
                        dbQImage[76][1] = "Images/C1.Microchitze/Img076TNT.png";	dbQImageSrc[76][1] = "commons.wikimedia.org";
                        dbQImage[76][2] = "Images/C1.Microchitze/Img076TNT.png";	dbQImageSrc[76][2] = "commons.wikimedia.org";
                        dbAImage[76] = [];							dbAImageSrc[76] = [];
                        dbAImage[76][0] = "Images/C1.Microchitze/Img076TNT2.png";  dbAImageSrc[76][0] = "ryukiworlds.blogspot.com";
                        dbAImage[76][1] = "Images/C1.Microchitze/Img076TNT2.png";  dbAImageSrc[76][1] = "ryukiworlds.blogspot.com";
                        dbAImage[76][2] = "Images/C1.Microchitze/Img076TNT2.png";  dbAImageSrc[76][2] = "ryukiworlds.blogspot.com";
dbQList[ 77] = [];
dbQList[ 77][0] = "Ce se ob&#x163;ine la arderea hidrogenului, &#xEE;n afar&#x103; de ap&#x103;?";   
dbQList[ 77][1] = "What is produced when burning hydrogen, except water?";  
dbQList[ 77][2] = "Was ist erzeugt bei der Verbrennung von Wasserstoff, au&#223;er Wasser?"; 
                        dbAType[ 77] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 77] = []; dbAList[77][0] = "heat"; dbAList[77][1] = "ldur"; dbAList[77][2] = "rme";
                        dbACrit[ 77] = []; dbACrit[77][0] = 13; dbACrit[77][1] = 13; dbACrit[77][2] = 12;
                        dbAnswer[77] = [];
                        dbAnswer[77][0] = "R&#x103;spuns corect: c&#x103;ldur&#x103;"; //plaintext ro answer
                        dbAnswer[77][1] = "Right answer: heat"; //plaintext en answer
                        dbAnswer[77][2] = "Richtige Antwort: W&#228;rme"; //plaintext de answer
                        dbExpln[ 77] = [];
                        dbExpln[ 77][0] = "Prin ardere &#xEE;n aer, hidrogenul pur (H<sub>2</sub>) reac&#x163;ioneaz&#x103; cu oxigenul (O<sub>2</sub>) pentru a crea ap&#x103; (H<sub>2</sub>O) &#x15F;i degaj&#x103; c&#x103;ldur&#x103;.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 77][1] = "By burning in air, pure hydrogen (H<sub>2</sub>) reacts with oxygen (O<sub>2</sub>) to form water (H<sub>2</sub>O) and releases heat.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 77][2] = "Durch Verbrennung in der Luft, reines Wasserstoff (H<sub>2</sub>) reagiert mit Sauerstoff (O<sub>2</sub>) um Wasser (H<sub>2</sub>O) und W&#228;rme zu erzeugen.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 77] = [];
                        dbRefer[ 77][0] = "<a href='http://en.wikipedia.org/wiki/Hydrogen_fuel' target='_blank'>[1] en.wikipedia.org/Hydrogen_fuel</a>"; //references for ro explanation
                        dbRefer[ 77][1] = "<a href='http://en.wikipedia.org/wiki/Hydrogen_fuel' target='_blank'>[1] en.wikipedia.org/Hydrogen_fuel</a>"; //references for en explanation
                        dbRefer[ 77][2] = "<a href='http://en.wikipedia.org/wiki/Hydrogen_fuel' target='_blank'>[1] en.wikipedia.org/Hydrogen_fuel</a>"; //references for de explanation
                        dbQHint[ 77] = [];
                        dbQHint[ 77][0] = ""; //hint ro
                        dbQHint[ 77][1] = ""; //hint en
                        dbQHint[ 77][2] = ""; //hint de
                        dbQImage[77] = []; dbQImageSrc[77] = []; 
                        dbQImage[77][0] = "Images/C1.Microchitze/Img077Reaction.png";	dbQImageSrc[77][0] = "www.ck12.org";
                        dbQImage[77][1] = "Images/C1.Microchitze/Img077Reaction.png";	dbQImageSrc[77][1] = "www.ck12.org";
                        dbQImage[77][2] = "Images/C1.Microchitze/Img077Reaction.png";	dbQImageSrc[77][2] = "www.ck12.org";
                        dbAImage[77] = [];							dbAImageSrc[77] = [];
                        dbAImage[77][0] = "Images/C1.Microchitze/Img077Combustion.png";  dbAImageSrc[77][0] = "www.cleanboiler.org";
                        dbAImage[77][1] = "Images/C1.Microchitze/Img077Combustion.png";  dbAImageSrc[77][1] = "www.cleanboiler.org";
                        dbAImage[77][2] = "Images/C1.Microchitze/Img077Combustion.png";  dbAImageSrc[77][2] = "www.cleanboiler.org";
dbQList[ 78] = [];
dbQList[ 78][0] = "Care este cea mai abundent&#x103; molecul&#x103; &#xEE;n o&#x163;et?";   
dbQList[ 78][1] = "What is the most abundant molecule in vinegar?";  
dbQList[ 78][2] = "Was ist das h&#228;ufigste Molek&#252;l in Essig?";
                        dbAType[ 78] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 78] = []; dbAList[78][0] = "H2O"; dbAList[78][1] = "Wasser"; dbAList[78][2] = "water"; dbAList[78][3] = "apa";  dbAList[78][4] = "ap";
                        dbACrit[ 78] = []; dbACrit[78][0] = 13; dbACrit[78][1] = 13; dbACrit[78][2] = 13; dbACrit[78][3] = 13;  dbACrit[78][4] = 11; 
                        dbAnswer[78] = [];
                        dbAnswer[78][0] = "R&#x103;spuns corect: apa"; //plaintext ro answer
                        dbAnswer[78][1] = "Right answer: water"; //plaintext en answer
                        dbAnswer[78][2] = "Richtige Antwort: Wasser"; //plaintext de answer
                        dbExpln[ 78] = [];
                        dbExpln[ 78][0] = "O&#x163;etul este aproximativ 4%-8% acid acetic (CH<sub>3</sub>COOH). Acidul acetic este principala component&#x103; a o&#x163;etului &#xEE;n afara apei.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 78][1] = "Vinegar is roughly 4%-8% acetic acid (CH<sub>3</sub>COOH), making acetic acid the main component of vinegar apart from water.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 78][2] = "Essig ist ungef&#228;hr 4%-8% Essigs&#228;ure (CH<sub>3</sub>COOH). Essigs&#228;ure ist der Hauptbestandteil von Essig au&#223;er Wasser.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 78] = [];
                        dbRefer[ 78][0] = "<a href='http://en.wikipedia.org/wiki/Acetic_acid' target='_blank'>[1] en.wikipedia.org/Acetic_acid</a>"; //references for ro explanation
                        dbRefer[ 78][1] = "<a href='http://en.wikipedia.org/wiki/Acetic_acid' target='_blank'>[1] en.wikipedia.org/Acetic_acid</a>"; //references for en explanation
                        dbRefer[ 78][2] = "<a href='http://en.wikipedia.org/wiki/Acetic_acid' target='_blank'>[1] en.wikipedia.org/Acetic_acid</a>"; //references for de explanation
                        dbQHint[ 78] = [];
                        dbQHint[ 78][0] = ""; //hint ro
                        dbQHint[ 78][1] = ""; //hint en
                        dbQHint[ 78][2] = ""; //hint de
                        dbQImage[78] = []; dbQImageSrc[78] = []; 
                        dbQImage[78][0] = "Images/C1.Microchitze/Img078Vinegar.png";	dbQImageSrc[78][0] = "theawkwardyeti.com";
                        dbQImage[78][1] = "Images/C1.Microchitze/Img078Vinegar.png";	dbQImageSrc[78][1] = "theawkwardyeti.com";
                        dbQImage[78][2] = "Images/C1.Microchitze/Img078Vinegar.png";	dbQImageSrc[78][2] = "theawkwardyeti.com";
                        dbAImage[78] = [];							dbAImageSrc[78] = [];
                        dbAImage[78][0] = "Images/C1.Microchitze/Img078Vinegar.png";  dbAImageSrc[78][0] = "www.thisnext.com";
                        dbAImage[78][1] = "Images/C1.Microchitze/Img078Vinegar.png";  dbAImageSrc[78][1] = "www.thisnext.com";
                        dbAImage[78][2] = "Images/C1.Microchitze/Img078Vinegar.png";  dbAImageSrc[78][2] = "www.thisnext.com";
dbQList[ 79] = [];
dbQList[ 79][0] = "Ce con&#x163;inea apa vie (latin&#x103;: <i>aqua vitae</i>), &#xEE;n afar&#x103; de ap&#x103;?";    
dbQList[ 79][1] = "What did the water of life (latin: <i>aqua vitae</i>) contain, except water?";  
dbQList[ 79][2] = "Was enthielt das Wasser des Lebens (Latein: <i>aqua vitae</i>), au&#223;er Wasser?";
                        dbAType[ 79] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 79] = []; dbAList[79][0] = "etanol"; dbAList[79][1] = "alcool"; dbAList[79][2] = "ethanol"; dbAList[79][3] = "alcohol"; dbAList[79][4] = "Alkohol";
                        dbACrit[ 79] = []; dbACrit[79][0] = 13; dbACrit[79][1] = 13; dbACrit[79][2] = 13; dbACrit[79][3] = 13; dbACrit[79][4] = 13;
                        dbAnswer[79] = [];
                        dbAnswer[79][0] = "R&#x103;spuns corect: etanol / alcool"; //plaintext ro answer
                        dbAnswer[79][1] = "Right answer: ethanol / alcohol"; //plaintext en answer
                        dbAnswer[79][2] = "Richtige Antwort: Ethanol / Alkohol"; //plaintext de answer
                        dbExpln[ 79] = [];
                        dbExpln[ 79][0] = "Aqua vitae este numele arhaic pentru o solu&#x163;ie apoas&#x103; concentrat&#x103; de etanol (CH<sub>3</sub>Ch<sub>2</sub>OH).<sup>[1]</sup><sup>[2]</sup>"; //explanation ro
                        dbExpln[ 79][1] = "Aqua vitae is the archaic name for a concentrated aqueous solution of ethanol (CH<sub>3</sub>Ch<sub>2</sub>OH).<sup>[1]</sup><sup>[2]</sup>"; //explanation en
                        dbExpln[ 79][2] = "Aqua vitae ist der archaische Name f&#252;r eine konzentrierte w&#228;ssrige L&#246;sung von Ethanol (CH<sub>3</sub>Ch<sub>2</sub>OH).<sup>[1]</sup><sup>[2]</sup>"; //explanation de
                        dbRefer[ 79] = [];
                        dbRefer[ 79][0] = "<a href='http://en.wikipedia.org/wiki/Aqua_vitae' target='_blank'>[1] en.wikipedia.org/Aqua_vitae</a><br/><a href='http://en.wikipedia.org/wiki/Ethanol' target='_blank'>[2] en.wikipedia.org/Ethanol</a>"; //references for ro explanation
                        dbRefer[ 79][1] = "<a href='http://en.wikipedia.org/wiki/Aqua_vitae' target='_blank'>[1] en.wikipedia.org/Aqua_vitae</a><br/><a href='http://en.wikipedia.org/wiki/Ethanol' target='_blank'>[2] en.wikipedia.org/Ethanol</a>"; //references for en explanation
                        dbRefer[ 79][2] = "<a href='http://en.wikipedia.org/wiki/Aqua_vitae' target='_blank'>[1] en.wikipedia.org/Aqua_vitae</a><br/><a href='http://en.wikipedia.org/wiki/Ethanol' target='_blank'>[2] en.wikipedia.org/Ethanol</a>"; //references for de explanation
                        dbQHint[ 79] = [];
                        dbQHint[ 79][0] = ""; //hint ro
                        dbQHint[ 79][1] = ""; //hint en
                        dbQHint[ 79][2] = ""; //hint de
                        dbQImage[79] = []; dbQImageSrc[79] = []; 
                        dbQImage[79][0] = "Images/C1.Microchitze/Img079Grimm.png";	dbQImageSrc[79][0] = "lamnhospot.blogspot.com";
                        dbQImage[79][1] = "Images/C1.Microchitze/Img079Grimm.png";	dbQImageSrc[79][1] = "lamnhospot.blogspot.com";
                        dbQImage[79][2] = "Images/C1.Microchitze/Img079Grimm.png";	dbQImageSrc[79][2] = "lamnhospot.blogspot.com";
                        dbAImage[79] = [];							dbAImageSrc[79] = [];
                        dbAImage[79][0] = "Images/C1.Microchitze/Img079AquaVitae.png";  dbAImageSrc[79][0] = "www.foodandwine.hu";
                        dbAImage[79][1] = "Images/C1.Microchitze/Img079AquaVitae.png";  dbAImageSrc[79][1] = "www.foodandwine.hu";
                        dbAImage[79][2] = "Images/C1.Microchitze/Img079AquaVitae.png";  dbAImageSrc[79][2] = "www.foodandwine.hu";						
                        
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRONOCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 80] = [];
dbQList[ 80][0] = "Care a fost primul an al mileniului trecut?"; 
dbQList[ 80][1] = "Which was the previous millennium\'s first year?"; 
dbQList[ 80][2] = "Welches war das erste Jahr des vorigen Jahrtausends?"; 
                        dbAType[ 80] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 80] = []; dbAList[80][0] = 1001;
                        dbACrit[ 80] = []; dbACrit[80][0] = 20;
                        dbAnswer[80] = [];
                        dbAnswer[80][0] = "R&#x103;spuns corect: 1001"; //plaintext ro answer
                        dbAnswer[80][1] = "Right answer: 1001"; //plaintext en answer
                        dbAnswer[80][2] = "Richtige Antwort: 1001"; //plaintext de answer
                        dbExpln[ 80] = [];
                        dbExpln[ 80][0] = "Mileniul  I: anii    1 .. 1000<br/>Mileniul II: anii 1001 .. 2000"; //explanation ro
                        dbExpln[ 80][1] = "1<sup>st</sup> millennium: years    1 .. 1000<br/>2<sup>nd</sup> millennium: years 1001 .. 2000"; //explanation en
                        dbExpln[ 80][2] = "1. Jahrtausend: Jahren    1 .. 1000<br/>2. Jahrtausend: Jahren 1001 .. 2000"; //explanation de
                        dbRefer[ 80] = [];
                        dbRefer[ 80][0] = ""; //references for ro explanation
                        dbRefer[ 80][1] = ""; //references for en explanation
                        dbRefer[ 80][2] = ""; //references for de explanation
                        dbQHint[ 80] = [];
                        dbQHint[ 80][0] = ""; //hint ro
                        dbQHint[ 80][1] = ""; //hint en
                        dbQHint[ 80][2] = ""; //hint de
                        dbQImage[80] = []; dbQImageSrc[80] = []; 
                        dbQImage[80][0] = "Images/C1.Microchitze/Img080Y2K.png";	dbQImageSrc[80][0] = "onthisdatedotdot.blogspot.com";
                        dbQImage[80][1] = "Images/C1.Microchitze/Img080Y2K.png";	dbQImageSrc[80][1] = "onthisdatedotdot.blogspot.com";
                        dbQImage[80][2] = "Images/C1.Microchitze/Img080Y2K.png";	dbQImageSrc[80][2] = "onthisdatedotdot.blogspot.com";
                        dbAImage[80] = [];							  dbAImageSrc[80] = [];
                        dbAImage[80][0] = "Images/C1.Microchitze/Img080Millennium.png";  dbAImageSrc[80][0] = "www.astronomy.net";
                        dbAImage[80][1] = "Images/C1.Microchitze/Img080Millennium.png";  dbAImageSrc[80][1] = "www.astronomy.net";
                        dbAImage[80][2] = "Images/C1.Microchitze/Img080Millennium.png";  dbAImageSrc[80][2] = "www.astronomy.net";
dbQList[ 81] = [];
dbQList[ 81][0] = "In ce an s-au n&#x103;scut ultimii oameni care &#x15F;i-au putut s&#x103;rb&#x103;tori ziua pentru prima dat&#x103; abia dup&#x103; 8 ani?";  
dbQList[ 81][1] = "In which year have the last persons been born, who were able celebrate their birthday for the first time only 8 years later?"; 
dbQList[ 81][2] = "In welchem Jahr wurden die letzten Menschen geboren, die ihr Geburtstag zum ersten Mal nur 8 Jahre sp&#228;ter feiern konnten?"; 
                        dbAType[ 81] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 81] = []; dbAList[81][0] = 1896;
                        dbACrit[ 81] = []; dbACrit[81][0] = 20; 
                        dbAnswer[81] = [];
                        dbAnswer[81][0] = "R&#x103;spuns corect: 1896"; //plaintext ro answer
                        dbAnswer[81][1] = "Right answer: 1896"; //plaintext en answer
                        dbAnswer[81][2] = "Richtige Antwort: 1896"; //plaintext de answer
                        dbExpln[ 81] = [];
                        dbExpln[ 81][0] = "1900 nu a fost an bisect, a&#x15F;a c&#x103; cei n&#x103;scu&#x163;i pe 29.02.1896 &#x15F;i-au putut s&#x103;rb&#x103;tori ziua pentru prima dat&#x103; &#xEE;n 1904."; //explanation ro
                        dbExpln[ 81][1] = "1900 was not a leap year, so those born on 29.02.1896 could first celebrate their birthday in 1904."; //explanation en
                        dbExpln[ 81][2] = "1900 war kein Schaltjahr, so dass die am 29.02.1896 geborenen Menschen konnten ihren Geburtstag erst im Jahr 1904 feiern."; //explanation de
                        dbRefer[ 81] = [];
                        dbRefer[ 81][0] = ""; //references for ro explanation
                        dbRefer[ 81][1] = ""; //references for en explanation
                        dbRefer[ 81][2] = ""; //references for de explanation
                        dbQHint[ 81] = [];
                        dbQHint[ 81][0] = ""; //hint ro
                        dbQHint[ 81][1] = ""; //hint en
                        dbQHint[ 81][2] = ""; //hint de
                        dbQImage[81] = []; dbQImageSrc[81] = []; 
                        dbQImage[81][0] = "Images/C1.Microchitze/Img081Feb29.png";	dbQImageSrc[81][0] = "qtpi1969.net";
                        dbQImage[81][1] = "Images/C1.Microchitze/Img081Feb29.png";	dbQImageSrc[81][1] = "qtpi1969.net";
                        dbQImage[81][2] = "Images/C1.Microchitze/Img081Feb29.png";	dbQImageSrc[81][2] = "qtpi1969.net";
                        dbAImage[81] = [];							dbAImageSrc[81] = [];
                        dbAImage[81][0] = "Images/C1.Microchitze/Img081LeapYears.png";  dbAImageSrc[81][0] = "dailyvsvidz.blogspot.com";
                        dbAImage[81][1] = "Images/C1.Microchitze/Img081LeapYears.png";  dbAImageSrc[81][1] = "dailyvsvidz.blogspot.com";
                        dbAImage[81][2] = "Images/C1.Microchitze/Img081LeapYears.png";  dbAImageSrc[81][2] = "dailyvsvidz.blogspot.com";
dbQList[ 82] = [];
dbQList[ 82][0] = "Care a fost data scris&#x103; doar cu cifre pare &#xEE;nainte de 02.02.2000? (ZZ.LL.AAAA)";  
dbQList[ 82][1] = "Which was the last date before 02.02.2000 that was written only with even digits? (DD.MM.YYYY)"; 
dbQList[ 82][2] = "Welches war das letzte Datum vor 02.02.2000, das nur mit gerade Ziffern geschrieben wurde? (TT.MM.JJJJ)"; 
                        dbAType[ 82] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 82] = []; dbAList[82][0] = "28.08.0888";
                        dbACrit[ 82] = []; dbACrit[82][0] = 10;
                        dbAnswer[82] = [];
                        dbAnswer[82][0] = "R&#x103;spuns corect: 28.08.0888"; //plaintext ro answer
                        dbAnswer[82][1] = "Right answer: 28.08.0888"; //plaintext en answer
                        dbAnswer[82][2] = "Richtige Antwort: 28.08.0888"; //plaintext de answer
                        dbExpln[ 82] = [];
                        dbExpln[ 82][0] = ""; //explanation ro
                        dbExpln[ 82][1] = ""; //explanation en
                        dbExpln[ 82][2] = ""; //explanation de
                        dbRefer[ 82] = [];
                        dbRefer[ 82][0] = ""; //references for ro explanation
                        dbRefer[ 82][1] = ""; //references for en explanation
                        dbRefer[ 82][2] = ""; //references for de explanation
                        dbQHint[ 82] = [];
                        dbQHint[ 82][0] = ""; //hint ro
                        dbQHint[ 82][1] = ""; //hint en
                        dbQHint[ 82][2] = ""; //hint de
                        dbQImage[82] = []; dbQImageSrc[82] = []; 
                        dbQImage[82][0] = "Images/C1.Microchitze/Img082Odd.png";	dbQImageSrc[82][0] = "every-day-is-special.blogspot.com";
                        dbQImage[82][1] = "Images/C1.Microchitze/Img082Odd.png";	dbQImageSrc[82][1] = "every-day-is-special.blogspot.com";
                        dbQImage[82][2] = "Images/C1.Microchitze/Img082Odd.png";	dbQImageSrc[82][2] = "every-day-is-special.blogspot.com";
                        dbAImage[82] = [];							dbAImageSrc[82] = [];
                        dbAImage[82][0] = "Images/C1.Microchitze/Img082Odd.png";  dbAImageSrc[82][0] = "every-day-is-special.blogspot.com";
                        dbAImage[82][1] = "Images/C1.Microchitze/Img082Odd.png";  dbAImageSrc[82][1] = "every-day-is-special.blogspot.com";
                        dbAImage[82][2] = "Images/C1.Microchitze/Img082Odd.png";  dbAImageSrc[82][2] = "every-day-is-special.blogspot.com";
dbQList[ 83] = [];
dbQList[ 83][0] = "Pentru calendarul din imagine, c&#xE2;te foi trebuie rupte pentru ca el s&#x103; arate data de 31?";   
dbQList[ 83][1] = "For the shown calendar, how many files need to torn off for it to display the date of 31<sup>st</sup>?"; 
dbQList[ 83][2] = "F&#252;r den abgebildeten Kalendar, wie viele Bl&#228;tter muss man rei&#223;en, damit es den 31. anzeigt?"; 
                        dbAType[ 83] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 83] = []; dbAList[83][0] = 60;
                        dbACrit[ 83] = []; dbACrit[83][0] = 20;
                        dbAnswer[83] = [];
                        dbAnswer[83][0] = "R&#x103;spuns corect: 60"; //plaintext ro answer
                        dbAnswer[83][1] = "Right answer: 60"; //plaintext en answer
                        dbAnswer[83][2] = "Richtige Antwort: 60"; //plaintext de answer
                        dbExpln[ 83] = [];
                        dbExpln[ 83][0] = "... &#x15F;i calendarul va ar&#x103;ta 31 Decembrie."; //explanation ro
                        dbExpln[ 83][1] = "... and the calendar will display the 31<sup>st</sup> of December."; //explanation en
                        dbExpln[ 83][2] = "... und der Kalendar wird den 31. Dezember anzeigen."; //explanation de
                        dbRefer[ 83] = [];
                        dbRefer[ 83][0] = ""; //references for ro explanation
                        dbRefer[ 83][1] = ""; //references for en explanation
                        dbRefer[ 83][2] = ""; //references for de explanation
                        dbQHint[ 83] = [];
                        dbQHint[ 83][0] = ""; //hint ro
                        dbQHint[ 83][1] = ""; //hint en
                        dbQHint[ 83][2] = ""; //hint de
                        dbQImage[83] = []; dbQImageSrc[83] = []; 
                        dbQImage[83][0] = "Images/C1.Microchitze/Img083Nov1.png";	dbQImageSrc[83][0] = "iftodayisyourbirthday.com";
                        dbQImage[83][1] = "Images/C1.Microchitze/Img083Nov1.png";	dbQImageSrc[83][1] = "iftodayisyourbirthday.com";
                        dbQImage[83][2] = "Images/C1.Microchitze/Img083Nov1.png";	dbQImageSrc[83][2] = "iftodayisyourbirthday.com";
                        dbAImage[83] = [];							dbAImageSrc[83] = [];
                        dbAImage[83][0] = "Images/C1.Microchitze/Img083Dec31.png";  dbAImageSrc[83][0] = "www.southeastfamilydental.com";
                        dbAImage[83][1] = "Images/C1.Microchitze/Img083Dec31.png";  dbAImageSrc[83][1] = "www.southeastfamilydental.com";
                        dbAImage[83][2] = "Images/C1.Microchitze/Img083Dec31.png";  dbAImageSrc[83][2] = "www.southeastfamilydental.com";
dbQList[ 84] = [];
dbQList[ 84][0] = "Care este cea mai lung&#x103; lun&#x103; &#xEE;n Europa central&#x103;?";  
dbQList[ 84][1] = "Which is the longest month in central Europe?"; 
dbQList[ 84][2] = "Welcher ist der l&#228;ngste Monat in Mitteleuropa?"; 
                        dbAType[ 84] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 84] = []; dbAList[84][0] = "Oct"; dbAList[84][1] = "Okt";
                        dbACrit[ 84] = []; dbACrit[84][0] = 13;  dbACrit[84][1] = 13; 
                        dbAnswer[84] = [];
                        dbAnswer[84][0] = "R&#x103;spuns corect: Octombrie (31 zile + o or&#x103;)"; //plaintext ro answer
                        dbAnswer[84][1] = "Right answer: October (31 days + one hour)"; //plaintext en answer
                        dbAnswer[84][2] = "Richtige Antwort: Oktober (31 Tagen + eine Stunde)"; //plaintext de answer
                        dbExpln[ 84] = [];
                        dbExpln[ 84][0] = "Ora de var&#x103; &#xEE;n Europa central&#x103; se termin&#x103; &#xEE;n ultima duminic&#x103; din octombrie, c&#xE2;nd ceasurile se dau &#xEE;napoi cu o or&#x103;.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 84][1] = "Summer Time in Central Europe ends in the last Sunday in October, when the clocks go backward one hour.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 84][2] = "Sommerzeit in Mitteleuropa endet am letzten Sonntag in Oktober, indem die Stundenz&#228;hlung um eine Stunde zur&#252;ckgestellt wird.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 84] = [];
                        dbRefer[ 84][0] = "<a href='http://ro.wikipedia.org/wiki/Ora_de_var%C4%83' target='_blank'>[1] ro.wikipedia.org/Ora_de_vara</a>"; //references for ro explanation
                        dbRefer[ 84][1] = "<a href='http://en.wikipedia.org/wiki/Summer_Time_in_Europe' target='_blank'>[1] en.wikipedia.org/Summer_Time_in_Europe</a>"; //references for en explanation
                        dbRefer[ 84][2] = "<a href='http://de.wikipedia.org/wiki/Sommerzeit' target='_blank'>[1] de.wikipedia.org/Sommerzeit</a>"; //references for de explanation
                        dbQHint[ 84] = [];
                        dbQHint[ 84][0] = ""; //hint ro
                        dbQHint[ 84][1] = ""; //hint en
                        dbQHint[ 84][2] = ""; //hint de
                        dbQImage[84] = []; dbQImageSrc[84] = []; 
                        dbQImage[84][0] = "Images/C1.Microchitze/Img084Month.png";	dbQImageSrc[84][0] = "www.astro.virginia.edu";
                        dbQImage[84][1] = "Images/C1.Microchitze/Img084Month.png";	dbQImageSrc[84][1] = "www.astro.virginia.edu";
                        dbQImage[84][2] = "Images/C1.Microchitze/Img084Month.png";	dbQImageSrc[84][2] = "www.astro.virginia.edu";
                        dbAImage[84] = [];							dbAImageSrc[84] = [];
                        dbAImage[84][0] = "Images/C1.Microchitze/Img084SummertimeEnd.png";  dbAImageSrc[84][0] = "www.blogoncherry.com";
                        dbAImage[84][1] = "Images/C1.Microchitze/Img084SummertimeEnd.png";  dbAImageSrc[84][1] = "www.blogoncherry.com";
                        dbAImage[84][2] = "Images/C1.Microchitze/Img084SummertimeEnd.png";  dbAImageSrc[84][2] = "www.blogoncherry.com";
dbQList[ 85] = [];
dbQList[ 85][0] = "Cu c&#xE2;te minute trebuie dat ceasul &#xEE;nainte la trecerea grani&#x21B;ei dinspre China spre Afganistan?";  
dbQList[ 85][1] = "How many minutes must the clock be set forward when crossing the border from China to Afghanistan?";  
dbQList[ 85][2] = "Wie viele minuten muss die Uhr umgestellt werden, wenn man die Grenze von China nach Afghanistan &#252;berquert?";
                        dbAType[ 85] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 85] = []; dbAList[85][0] = 210;
                        dbACrit[ 85] = []; dbACrit[85][0] = 20;
                        dbAnswer[85] = [];
                        dbAnswer[85][0] = "R&#x103;spuns corect: 210 (3h 30m)"; //plaintext ro answer
                        dbAnswer[85][1] = "Right answer: 210 (3h 30m)"; //plaintext en answer
                        dbAnswer[85][2] = "Richtige Antwort: 210 (3h 30m)"; //plaintext de answer
                        dbExpln[ 85] = [];
                        dbExpln[ 85][0] = "China: UTC + 8h;<br/> Afganistan: UTC + 4:30"; //explanation ro
                        dbExpln[ 85][1] = "China: UTC + 8h;<br/> Afghanistan: UTC + 4:30"; //explanation en
                        dbExpln[ 85][2] = "China: UTC + 8h;<br/> Afghanistan: UTC + 4:30"; //explanation de
                        dbRefer[ 85] = [];
                        dbRefer[ 85][0] = ""; //references for ro explanation
                        dbRefer[ 85][1] = ""; //references for en explanation
                        dbRefer[ 85][2] = ""; //references for de explanation
                        dbQHint[ 85] = [];
                        dbQHint[ 85][0] = ""; //hint ro
                        dbQHint[ 85][1] = ""; //hint en
                        dbQHint[ 85][2] = ""; //hint de
                        dbQImage[85] = []; dbQImageSrc[85] = []; 
                        dbQImage[85][0] = "Images/C1.Microchitze/Img085Wakhan.png";	dbQImageSrc[85][0] = "www.afghanwarnews.info";
                        dbQImage[85][1] = "Images/C1.Microchitze/Img085Wakhan.png";	dbQImageSrc[85][1] = "www.afghanwarnews.info";
                        dbQImage[85][2] = "Images/C1.Microchitze/Img085Wakhan.png";	dbQImageSrc[85][2] = "www.afghanwarnews.info";
                        dbAImage[85] = [];							dbAImageSrc[85] = [];
                        dbAImage[85][0] = "Images/C1.Microchitze/Img085H3M30.png";  dbAImageSrc[85][0] = "guitarbreakthrough.wordpress.com";
                        dbAImage[85][1] = "Images/C1.Microchitze/Img085H3M30.png";  dbAImageSrc[85][1] = "guitarbreakthrough.wordpress.com";
                        dbAImage[85][2] = "Images/C1.Microchitze/Img085H3M30.png";  dbAImageSrc[85][2] = "guitarbreakthrough.wordpress.com";
dbQList[ 86] = [];
dbQList[ 86][0] = "Cum se mi&#x15F;c&#x103; umbra unui cadran solar &#xEE;n China? <br/> (&#xEE;n sens orar, trigonometric sau ambele?)";   
dbQList[ 86][1] = "How does the shadow of a sundial turn in China? <br/> (clockwise, trigonometric or both?)";  
dbQList[ 86][2] = "Wie dreht sich der Schatten einer Sonnenuhr in China? <br/> (im Uhrzeigersinn, trigonometrisch oder beides?)";
                        dbAType[ 86] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 86] = []; dbAList[86][0] = "orar"; dbAList[86][1] = "clockwise"; dbAList[86][2] = "Uhrzeigersinn";  
                        dbACrit[ 86] = []; dbACrit[86][0] = 13; dbACrit[86][1] = 13; dbACrit[86][2] = 13;
                        dbAnswer[86] = [];
                        dbAnswer[86][0] = "R&#x103;spuns corect: in sens orar"; //plaintext ro answer
                        dbAnswer[86][1] = "Right answer: clockwise"; //plaintext en answer
                        dbAnswer[86][2] = "Richtige Antwort: im Uhrzeigersinn"; //plaintext de answer
                        dbExpln[ 86] = [];
                        dbExpln[ 86][0] = "Doar &#xEE;n emisfera sudic&#x103;, umbra cadranelor solare are rota&#x21B;ie invers&#x103; (trigonometric&#x103;), iar &#xEE;n jurul ecuatorului -- c&#xE2;nd &#xEE;ntr-un sens, c&#xE2;nd &#xEE;n altul.<sup>[1]</sup> "; //explanation ro
                        dbExpln[ 86][1] = "In the southern hemisphere does the shadow of a sundial turn the other way around (trigonometric), and around the equator -- sometimes it turns one way, other times it turns the other way.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 86][2] = "Nur in der s&#252;dlichen Hemisph&#228;re dreht der Schatten einer Sonnenuhr anders herum (trigonometrisch); um den &#196;quator dreht es sich manchmal so, manchmal umgekehrt.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 86] = [];
                        dbRefer[ 86][0] = "<a href='http://www.mysundial.ca/tsp/north_vs_south.html' target='_blank'>[1] www.mysundial.ca/north_vs_south.html</a>"; //references for ro explanation
                        dbRefer[ 86][1] = "<a href='http://www.mysundial.ca/tsp/north_vs_south.html' target='_blank'>[1] www.mysundial.ca/north_vs_south.html</a>"; //references for en explanation
                        dbRefer[ 86][2] = "<a href='http://www.mysundial.ca/tsp/north_vs_south.html' target='_blank'>[1] www.mysundial.ca/north_vs_south.html</a>"; //references for de explanation
                        dbQHint[ 86] = [];
                        dbQHint[ 86][0] = ""; //hint ro
                        dbQHint[ 86][1] = ""; //hint en
                        dbQHint[ 86][2] = ""; //hint de
                        dbQImage[86] = []; dbQImageSrc[86] = []; 
                        dbQImage[86][0] = "Images/C1.Microchitze/Img086Sundial.png";	dbQImageSrc[86][0] = "cn.dreamstime.com";
                        dbQImage[86][1] = "Images/C1.Microchitze/Img086Sundial.png";	dbQImageSrc[86][1] = "cn.dreamstime.com";
                        dbQImage[86][2] = "Images/C1.Microchitze/Img086Sundial.png";	dbQImageSrc[86][2] = "cn.dreamstime.com";
                        dbAImage[86] = [];							dbAImageSrc[86] = [];
                        dbAImage[86][0] = "Images/C1.Microchitze/Img086SundialAustralia.png";  dbAImageSrc[86][0] = "whitey.net";
                        dbAImage[86][1] = "Images/C1.Microchitze/Img086SundialAustralia.png";  dbAImageSrc[86][1] = "whitey.net";
                        dbAImage[86][2] = "Images/C1.Microchitze/Img086SundialAustralia.png";  dbAImageSrc[86][2] = "whitey.net";
dbQList[ 87] = [];
dbQList[ 87][0] = "Care este aparatul de masurare a timpului cu cele mai multe p&#x103;r&#x21B;i mobile?";   
dbQList[ 87][1] = "Which time-measuring device has the most mobile parts?";  
dbQList[ 87][2] = "Welches Ger&#228;t f&#252;r Zeitmessung hat die meisten beweglichen Teile?"; 
                        dbAType[ 87] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 87] = []; dbAList[87][0] = "Clepsidra"; dbAList[87][1] = "Sanduhr"; dbAList[87][2] = "sandglass"; dbAList[87][3] = "hourglass";
                        dbACrit[ 87] = []; dbACrit[87][0] = 13; dbACrit[87][1] = 13; dbACrit[87][2] = 13; dbACrit[87][3] = 13;
                        dbAnswer[87] = [];
                        dbAnswer[87][0] = "R&#x103;spuns corect: clepsidra"; //plaintext ro answer
                        dbAnswer[87][1] = "Right answer: the hourglass"; //plaintext en answer
                        dbAnswer[87][2] = "Richtige Antwort: die Sanduhr"; //plaintext de answer
                        dbExpln[ 87] = [];
                        dbExpln[ 87][0] = ""; //explanation ro
                        dbExpln[ 87][1] = ""; //explanation en
                        dbExpln[ 87][2] = ""; //explanation de
                        dbRefer[ 87] = [];
                        dbRefer[ 87][0] = ""; //references for ro explanation
                        dbRefer[ 87][1] = ""; //references for en explanation
                        dbRefer[ 87][2] = ""; //references for de explanation
                        dbQHint[ 87] = [];
                        dbQHint[ 87][0] = ""; //hint ro
                        dbQHint[ 87][1] = ""; //hint en
                        dbQHint[ 87][2] = ""; //hint de
                        dbQImage[87] = []; dbQImageSrc[87] = []; 
                        dbQImage[87][0] = "Images/C1.Microchitze/Img087Timepieces.png";	dbQImageSrc[87][0] = "www.popularmechanics.com";
                        dbQImage[87][1] = "Images/C1.Microchitze/Img087Timepieces.png";	dbQImageSrc[87][1] = "www.popularmechanics.com";
                        dbQImage[87][2] = "Images/C1.Microchitze/Img087Timepieces.png";	dbQImageSrc[87][2] = "www.popularmechanics.com";
                        dbAImage[87] = [];							dbAImageSrc[87] = [];
                        dbAImage[87][0] = "Images/C1.Microchitze/Img087Hourglass.png";  dbAImageSrc[87][0] = "hplusmagazine.com";
                        dbAImage[87][1] = "Images/C1.Microchitze/Img087Hourglass.png";  dbAImageSrc[87][1] = "hplusmagazine.com";
                        dbAImage[87][2] = "Images/C1.Microchitze/Img087Hourglass.png";  dbAImageSrc[87][2] = "hplusmagazine.com";
dbQList[ 88] = [];
dbQList[ 88][0] = "De c&#xE2;te ori se suprapun cele dou&#x103; limbi ale ceasului &#xEE;ntre miezul zilei &#x15F;i miezul nop&#x163;ii?";   
dbQList[ 88][1] = "How many times do the two clock hands overlap between midday and midnight?";  
dbQList[ 88][2] = "Wie viele Male stehen die zwei Zeiger einer Uhr &#252;bereinander zwischen Mittag und Mitternacht?";
                        dbAType[ 88] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 88] = []; dbAList[88][0] = 10; 
                        dbACrit[ 88] = []; dbACrit[88][0] = 20; 
                        dbAnswer[88] = [];
                        dbAnswer[88][0] = "R&#x103;spuns corect: 10"; //plaintext ro answer
                        dbAnswer[88][1] = "Right answer: 10"; //plaintext en answer
                        dbAnswer[88][2] = "Richtige Antwort: 10"; //plaintext de answer
                        dbExpln[ 88] = [];
                        dbExpln[ 88][0] = "~ 1:05 <br/>~ 2:11 <br/>~ 3:16 <br/>~ 4:22 <br/>~ 5:27 <br/>~ 6:33 <br/>~ 7:38 <br/>~ 8:44 <br/>~ 9:49 <br/>~10:55"; //explanation ro
                        dbExpln[ 88][1] = "~ 1:05 <br/>~ 2:11 <br/>~ 3:16 <br/>~ 4:22 <br/>~ 5:27 <br/>~ 6:33 <br/>~ 7:38 <br/>~ 8:44 <br/>~ 9:49 <br/>~10:55"; //explanation en
                        dbExpln[ 88][2] = "~ 1:05 <br/>~ 2:11 <br/>~ 3:16 <br/>~ 4:22 <br/>~ 5:27 <br/>~ 6:33 <br/>~ 7:38 <br/>~ 8:44 <br/>~ 9:49 <br/>~10:55"; //explanation de
                        dbRefer[ 88] = [];
                        dbRefer[ 88][0] = ""; //references for ro explanation
                        dbRefer[ 88][1] = ""; //references for en explanation
                        dbRefer[ 88][2] = ""; //references for de explanation
                        dbQHint[ 88] = [];
                        dbQHint[ 88][0] = ""; //hint ro
                        dbQHint[ 88][1] = ""; //hint en
                        dbQHint[ 88][2] = ""; //hint de
                        dbQImage[88] = []; dbQImageSrc[88] = []; 
                        dbQImage[88][0] = "Images/C1.Microchitze/Img088Hands.png";	dbQImageSrc[88][0] = "www.experto.de";
                        dbQImage[88][1] = "Images/C1.Microchitze/Img088Hands.png";	dbQImageSrc[88][1] = "www.experto.de";
                        dbQImage[88][2] = "Images/C1.Microchitze/Img088Hands.png";	dbQImageSrc[88][2] = "www.experto.de";
                        dbAImage[88] = [];							dbAImageSrc[88] = [];
                        dbAImage[88][0] = "Images/C1.Microchitze/Img088Overlaps.png";  dbAImageSrc[88][0] = "www.techques.com";
                        dbAImage[88][1] = "Images/C1.Microchitze/Img088Overlaps.png";  dbAImageSrc[88][1] = "www.techques.com";
                        dbAImage[88][2] = "Images/C1.Microchitze/Img088Overlaps.png";  dbAImageSrc[88][2] = "www.techques.com";
dbQList[ 89] = [];
dbQList[ 89][0] = "Dac&#x103; un ceas are nevoie de 6 secunde s&#x103; bat&#x103; ora 6, de c&#xE2;te secunde va avea nevoie s&#x103; bat&#x103; ora 11?";    
dbQList[ 89][1] = "If a clock needs 6 seconds to strike the hour at 6 o'clock, how many seconds does it need to strike the hour at 11 o'clock?";  
dbQList[ 89][2] = "Wenn eine Uhr 6 Sekunden braucht, um die Stunde 6 zu schlagen, wie viele Sekunden braucht es, um die Stunde 11 zu schlagen?";
                        dbAType[ 89] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 89] = []; dbAList[89][0] = 12;
                        dbACrit[ 89] = []; dbACrit[89][0] = 20;
                        dbAnswer[89] = [];
                        dbAnswer[89][0] = "R&#x103;spuns corect: 12"; //plaintext ro answer
                        dbAnswer[89][1] = "Right answer: 12"; //plaintext en answer
                        dbAnswer[89][2] = "Richtige Antwort: 12"; //plaintext de answer
                        dbExpln[ 89] = [];
                        dbExpln[ 89][0] = "&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;<br/> 6 sunete au nevoie de 5 pauze de c&#xE2;te 1.2 secunde.<br/>&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;<br/> 11 sunete au nevoie de 10 pauze de c&#xE2;te 1.2 secunde, adic&#x103; 12 secunde."; //explanation ro
                        dbExpln[ 89][1] = "&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;<br/> 6 chimes need 5 pauses of 1.2 seconds each.<br/>&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;<br/> 11 chimes need 10 pauses of 1.2 seconds each => 12 seconds."; //explanation en
                        dbExpln[ 89][2] = "&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;<br/> 6 Gel&#228;ute brauchen 5 Pausen von je 1.2 Sekunden.<br/>&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;---&#9834;<br/> 11 Gel&#228;ute brauchen 10 Pausen von je 1.2 Sekunden => 12 Sekunden."; //explanation de
                        dbRefer[ 89] = [];
                        dbRefer[ 89][0] = ""; //references for ro explanation
                        dbRefer[ 89][1] = ""; //references for en explanation
                        dbRefer[ 89][2] = ""; //references for de explanation
                        dbQHint[ 89] = [];
                        dbQHint[ 89][0] = ""; //hint ro
                        dbQHint[ 89][1] = ""; //hint en
                        dbQHint[ 89][2] = ""; //hint de
                        dbQImage[89] = []; dbQImageSrc[89] = []; 
                        dbQImage[89][0] = "Images/C1.Microchitze/Img089Cuckoo.png";	dbQImageSrc[89][0] = "coolclips.com";
                        dbQImage[89][1] = "Images/C1.Microchitze/Img089Cuckoo.png";	dbQImageSrc[89][1] = "coolclips.com";
                        dbQImage[89][2] = "Images/C1.Microchitze/Img089Cuckoo.png";	dbQImageSrc[89][2] = "coolclips.com";
                        dbAImage[89] = [];							dbAImageSrc[89] = [];
                        dbAImage[89][0] = "Images/C1.Microchitze/Img089Cuckoo.png";  dbAImageSrc[89][0] = "coolclips.com";
                        dbAImage[89][1] = "Images/C1.Microchitze/Img089Cuckoo.png";  dbAImageSrc[89][1] = "coolclips.com";
                        dbAImage[89][2] = "Images/C1.Microchitze/Img089Cuckoo.png";  dbAImageSrc[89][2] = "coolclips.com";
                    
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASTROCHITZE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 90] = [];
dbQList[ 90][0] = "C&#xE2;te planete sunt &#xEE;n Sistemul Solar?"; 
dbQList[ 90][1] = "How many planets are there in the Solar System?"; 
dbQList[ 90][2] = "Wie viele Planeten gibt es im Sonnensystem?"; 
                        dbAType[ 90] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 90] = []; dbAList[90][0] = 8;
                        dbACrit[ 90] = []; dbACrit[90][0] = 20;
                        dbAnswer[90] = [];
                        dbAnswer[90][0] = "R&#x103;spuns corect: 8"; //plaintext ro answer
                        dbAnswer[90][1] = "Right answer: 8"; //plaintext en answer
                        dbAnswer[90][2] = "Richtige Antwort: 8"; //plaintext de answer
                        dbExpln[ 90] = [];
                        dbExpln[ 90][0] = "O planet&#x103; este un corp ceresc care<sup>[1]</sup> <br/><ul><li> are o mas&#x103; suficient&#x103; astfel &#xEE;nc&#xE2;t for&#x163;a gravita&#x163;ionala sa &#xEE;i confere o forma aproximativ sferic&#x103; </li><li> nu sufer&#x103; &#xEE;n interiorul s&#x103;u reac&#x163;ii de fuziune nuclear&#x103; </li><li> \"cur&#x103;&#x163;&#x103;\" spa&#x163;iul cosmic din vecin&#x103;tatea orbitei sale </li></ul><br/>Ceres, Pluto, Haumea, Makemake, Eris, etc. sunt doar planete pitice, fiindc&#x103; nu respect&#x103; ultimul criteriu.<sup>[2]</sup>"; //explanation ro
                        dbExpln[ 90][1] = "A planet is an astronomical object that needs to<sup>[1]</sup> <br/><ul><li> be massive enough to be rounded by its own gravity </li><li> be not massive enough to cause thermonuclear fusion </li><li> have cleared its orbit </li></ul><br/>Ceres, Pluto, Haumea, Makemake, Eris, etc. are only dwarf planets, because they have not cleared their orbits.<sup>[2]</sup>"; //explanation en
                        dbExpln[ 90][2] = "Ein Planet ist ein Himmelsk&#246;rper, <sup>[1]</sup> <br/><ul><li> dessen Masse gro&#223; genug ist, dass das Objekt eine n&#228;herungsweise kugel&#228;hnliche Gestalt besitzt </li><li> der das dominierende Objekt seiner Umlaufbahn ist, das hei&#223;t, diese &#252;ber die Zeit durch sein Gravitationsfeld von weiteren Objekten \"ger&#228;umt\" hat </li></ul><br/>Ceres, Pluto, Haumea, Makemake, Eris, usw. sind nur Zwergplaneten, da sie die Umgebung ihrer Bahn nicht bereinigt haben.<sup>[2]</sup>"; //explanation de
                        dbRefer[ 90] = [];
                        dbRefer[ 90][0] = "<a href='http://ro.wikipedia.org/wiki/Planet%C4%83' target='_blank'>[1] ro.wikipedia.org/Planet&#x103;</a><br/><a href='http://ro.wikipedia.org/wiki/Planet%C4%83_pitic%C4%83' target='_blank'>[2] ro.wikipedia.org/Planet&#x103;_pitic&#x103;</a>"; //references for ro explanation
                        dbRefer[ 90][1] = "<a href='http://en.wikipedia.org/wiki/Planet' target='_blank'>[1] en.wikipedia.org/Planet</a><br/><a href='http://en.wikipedia.org/wiki/Dwarf_planet' target='_blank'>[2] en.wikipedia.org/Dwarf_planet</a>"; //references for en explanation
                        dbRefer[ 90][2] = "<a href='http://de.wikipedia.org/wiki/Planet' target='_blank'>[1] de.wikipedia.org/Planet</a><br/><a href='http://de.wikipedia.org/wiki/Zwergplanet' target='_blank'>[2] de.wikipedia.org/Zwergplanet</a>"; //references for de explanation
                        dbQHint[ 90] = [];
                        dbQHint[ 90][0] = ""; //hint ro
                        dbQHint[ 90][1] = ""; //hint en
                        dbQHint[ 90][2] = ""; //hint de
                        dbQImage[90] = []; dbQImageSrc[90] = []; 
                        dbQImage[90][0] = "Images/C1.Microchitze/Img090PlanetsDrawing.png";	dbQImageSrc[90][0] = "solarsystem.nasa.gov";
                        dbQImage[90][1] = "Images/C1.Microchitze/Img090PlanetsDrawing.png";	dbQImageSrc[90][1] = "solarsystem.nasa.gov";
                        dbQImage[90][2] = "Images/C1.Microchitze/Img090PlanetsDrawing.png";	dbQImageSrc[90][2] = "solarsystem.nasa.gov";
                        dbAImage[90] = []; dbAImageSrc[90] = [];
                        dbAImage[90][0] = "Images/C1.Microchitze/Img090Planets.png"; dbAImageSrc[90][0] = "www.sciencehelpdesk.com";
                        dbAImage[90][1] = "Images/C1.Microchitze/Img090Planets.png"; dbAImageSrc[90][1] = "www.sciencehelpdesk.com";
                        dbAImage[90][2] = "Images/C1.Microchitze/Img090Planets.png"; dbAImageSrc[90][2] = "www.sciencehelpdesk.com";
dbQList[ 91] = [];
dbQList[ 91][0] = "Care planet&#x103; din Sistemul Solar nu este numit&#x103; dup&#x103; un zeu?";  
dbQList[ 91][1] = "Which planet in the Solar System is not named after a god?"; 
dbQList[ 91][2] = "Welcher Planet des Sonnensystem ist nicht nach einem Got benannt?"; 
                        dbAType[ 91] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 91] = []; dbAList[91][0] = "Pam"; dbAList[91][1] = "Erde"; dbAList[91][2] = "Earth"; dbAList[91][3] = "Terra";
                        dbACrit[ 91] = []; dbACrit[91][0] = 13; dbACrit[91][1] = 13; dbACrit[91][2] = 13; dbACrit[91][3] = 13; 
                        dbAnswer[91] = [];
                        dbAnswer[91][0] = "R&#x103;spuns corect: P&#x103;m&#xE2;ntul"; //plaintext ro answer
                        dbAnswer[91][1] = "Right answer: the Earth"; //plaintext en answer
                        dbAnswer[91][2] = "Richtige Antwort: die Erde"; //plaintext de answer
                        dbExpln[ 91] = [];
                        dbExpln[ 91][0] = ""; //explanation ro
                        dbExpln[ 91][1] = ""; //explanation en
                        dbExpln[ 91][2] = ""; //explanation de
                        dbRefer[ 91] = [];
                        dbRefer[ 91][0] = ""; //references for ro explanation
                        dbRefer[ 91][1] = ""; //references for en explanation
                        dbRefer[ 91][2] = ""; //references for de explanation
                        dbQHint[ 91] = [];
                        dbQHint[ 91][0] = ""; //hint ro
                        dbQHint[ 91][1] = ""; //hint en
                        dbQHint[ 91][2] = ""; //hint de
                        dbQImage[91] = []; dbQImageSrc[91] = []; 
                        dbQImage[91][0] = "Images/C1.Microchitze/Img091Purple.png";	dbQImageSrc[91][0] = "starwars.wikia.com";
                        dbQImage[91][1] = "Images/C1.Microchitze/Img091Purple.png";	dbQImageSrc[91][1] = "starwars.wikia.com";
                        dbQImage[91][2] = "Images/C1.Microchitze/Img091Purple.png";	dbQImageSrc[91][2] = "starwars.wikia.com";
                        dbAImage[91] = [];							dbAImageSrc[91] = [];
                        dbAImage[91][0] = "Images/C1.Microchitze/Img091Earth.png";  dbAImageSrc[91][0] = "www.solarviews.com";
                        dbAImage[91][1] = "Images/C1.Microchitze/Img091Earth.png";  dbAImageSrc[91][1] = "www.solarviews.com";
                        dbAImage[91][2] = "Images/C1.Microchitze/Img091Earth.png";  dbAImageSrc[91][2] = "www.solarviews.com";
dbQList[ 92] = [];
dbQList[ 92][0] = "Care planet&#x103; are sateli&#x163;i naturali numi&#x163;i Ariel, Bianca, Ferdinand, Francisco, Margaret, Miranda, Stephano, etc.?";  
dbQList[ 92][1] = "Which planet has moons named Ariel, Bianca, Ferdinand, Francisco, Margaret, Miranda, Stephano, etc.?"; 
dbQList[ 92][2] = "Welcher Planet hat Monde benannt Ariel, Bianca, Ferdinand, Francisco, Margaret, Miranda, Stephano, usw.?"; 
                        dbAType[ 92] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 92] = []; dbAList[92][0] = "Uranus";
                        dbACrit[ 92] = []; dbACrit[92][0] = 13;
                        dbAnswer[92] = [];
                        dbAnswer[92][0] = "R&#x103;spuns corect: Uranus"; //plaintext ro answer
                        dbAnswer[92][1] = "Right answer: Uranus"; //plaintext en answer
                        dbAnswer[92][2] = "Richtige Antwort: Uranus"; //plaintext de answer
                        dbExpln[ 92] = [];
                        dbExpln[ 92][0] = "Sateli&#x163;ii planetei Uranus sunt numi&#x163;i dup&#x103; personaje din piese de William Shakespeare sau Alexander Pole.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 92][1] = "Uranus\' moons are named after characters from the works of William Shakespeare or Alexander Pope.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 92][2] = "Alle Monde von Uranus wurden nach Figuren von William Shakespeare oder Alexander Pope benannt.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 92] = [];
                        dbRefer[ 92][0] = "<a href='http://solarsystem.nasa.gov/planets/profile.cfm?Object=Uranus&Display=Sats' target='_blank'>[1] solarsystem.nasa.gov/Uranus</a>"; //references for ro explanation
                        dbRefer[ 92][1] = "<a href='http://solarsystem.nasa.gov/planets/profile.cfm?Object=Uranus&Display=Sats' target='_blank'>[1] solarsystem.nasa.gov/Uranus</a>"; //references for en explanation
                        dbRefer[ 92][2] = "<a href='http://solarsystem.nasa.gov/planets/profile.cfm?Object=Uranus&Display=Sats' target='_blank'>[1] solarsystem.nasa.gov/Uranus</a>"; //references for de explanation
                        dbQHint[ 92] = [];
                        dbQHint[ 92][0] = ""; //hint ro
                        dbQHint[ 92][1] = ""; //hint en
                        dbQHint[ 92][2] = ""; //hint de
                        dbQImage[92] = []; dbQImageSrc[92] = []; 
                        dbQImage[92][0] = "Images/C1.Microchitze/Img092Moons.png";	dbQImageSrc[92][0] = "en.wikipedia.org";
                        dbQImage[92][1] = "Images/C1.Microchitze/Img092Moons.png";	dbQImageSrc[92][1] = "en.wikipedia.org";
                        dbQImage[92][2] = "Images/C1.Microchitze/Img092Moons.png";	dbQImageSrc[92][2] = "en.wikipedia.org";
                        dbAImage[92] = [];							dbAImageSrc[92] = [];
                        dbAImage[92][0] = "Images/C1.Microchitze/Img092UranusMoons.png";  dbAImageSrc[92][0] = "www.practicalspace.com";
                        dbAImage[92][1] = "Images/C1.Microchitze/Img092UranusMoons.png";  dbAImageSrc[92][1] = "www.practicalspace.com";
                        dbAImage[92][2] = "Images/C1.Microchitze/Img092UranusMoons.png";  dbAImageSrc[92][2] = "www.practicalspace.com";
dbQList[ 93] = [];
dbQList[ 93][0] = "Care este cel mai mare obiect din Centura Kuiper (regiunea de dincolo de Neptun)?";   
dbQList[ 93][1] = "Which is the largest object in the Kuiper belt (the region beyond Neptune)?"; 
dbQList[ 93][2] = "Welcher ist der gr&#246;&#223;te Objekt im Kuiperg&#252;rtel (die Region jenseits Neptun)?"; 
                        dbAType[ 93] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 93] = []; dbAList[93][0] = "Eris";
                        dbACrit[ 93] = []; dbACrit[93][0] = 13;
                        dbAnswer[93] = [];
                        dbAnswer[93][0] = "R&#x103;spuns corect: Eris"; //plaintext ro answer
                        dbAnswer[93][1] = "Right answer: Eris"; //plaintext en answer
                        dbAnswer[93][2] = "Richtige Antwort: Eris"; //plaintext de answer
                        dbExpln[ 93] = [];
                        dbExpln[ 93][0] = ""; //explanation ro
                        dbExpln[ 93][1] = ""; //explanation en
                        dbExpln[ 93][2] = ""; //explanation de
                        dbRefer[ 93] = [];
                        dbRefer[ 93][0] = "<a href='http://en.wikipedia.org/wiki/Eris_(dwarf_planet)' target='_blank'>[1] en.wikipedia.org/Eris</a>"; //references for ro explanation
                        dbRefer[ 93][1] = "<a href='http://en.wikipedia.org/wiki/Eris_(dwarf_planet)' target='_blank'>[1] en.wikipedia.org/Eris</a>"; //references for en explanation
                        dbRefer[ 93][2] = "<a href='http://en.wikipedia.org/wiki/Eris_(dwarf_planet)' target='_blank'>[1] en.wikipedia.org/Eris</a>"; //references for de explanation
                        dbQHint[ 93] = [];
                        dbQHint[ 93][0] = ""; //hint ro
                        dbQHint[ 93][1] = ""; //hint en
                        dbQHint[ 93][2] = ""; //hint de
                        dbQImage[93] = []; dbQImageSrc[93] = []; 
                        dbQImage[93][0] = "Images/C1.Microchitze/Img093Kuiper.png";	dbQImageSrc[93][0] = "uncleeddiestheorycorner.blogspot.com";
                        dbQImage[93][1] = "Images/C1.Microchitze/Img093Kuiper.png";	dbQImageSrc[93][1] = "uncleeddiestheorycorner.blogspot.com";
                        dbQImage[93][2] = "Images/C1.Microchitze/Img093Kuiper.png";	dbQImageSrc[93][2] = "uncleeddiestheorycorner.blogspot.com";
                        dbAImage[93] = [];							dbAImageSrc[93] = [];
                        dbAImage[93][0] = "Images/C1.Microchitze/Img093Eris.png";  dbAImageSrc[93][0] = "www.universetoday.com";
                        dbAImage[93][1] = "Images/C1.Microchitze/Img093Eris.png";  dbAImageSrc[93][1] = "www.universetoday.com";
                        dbAImage[93][2] = "Images/C1.Microchitze/Img093Eris.png";  dbAImageSrc[93][2] = "www.universetoday.com";
dbQList[ 94] = [];
dbQList[ 94][0] = "Care este cea mai apropiat&#x103; stea fa&#x163;&#x103; de P&#x103;m&#xE2;nt?";  
dbQList[ 94][1] = "Which is the nearest star to Earth?"; 
dbQList[ 94][2] = "Welcher ist der n&#228;chste Stern zur Erde?"; 
                        dbAType[ 94] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 94] = []; dbAList[94][0] = "Soare"; dbAList[94][1] = "Sonne"; dbAList[94][2] = "Sun"; dbAList[94][3] = "Sol";
                        dbACrit[ 94] = []; dbACrit[94][0] = 13;  dbACrit[94][1] = 13; dbACrit[94][2] = 13; dbACrit[94][3] = 13; 
                        dbAnswer[94] = [];
                        dbAnswer[94][0] = "R&#x103;spuns corect: Soarele"; //plaintext ro answer
                        dbAnswer[94][1] = "Right answer: the Sun"; //plaintext en answer
                        dbAnswer[94][2] = "Richtige Antwort: die Sonne"; //plaintext de answer
                        dbExpln[ 94] = [];
                        dbExpln[ 94][0] = ""; //explanation ro
                        dbExpln[ 94][1] = ""; //explanation en
                        dbExpln[ 94][2] = ""; //explanation de
                        dbRefer[ 94] = [];
                        dbRefer[ 94][0] = ""; //references for ro explanation
                        dbRefer[ 94][1] = ""; //references for en explanation
                        dbRefer[ 94][2] = ""; //references for de explanation
                        dbQHint[ 94] = [];
                        dbQHint[ 94][0] = ""; //hint ro
                        dbQHint[ 94][1] = ""; //hint en
                        dbQHint[ 94][2] = ""; //hint de
                        dbQImage[94] = []; dbQImageSrc[94] = []; 
                        dbQImage[94][0] = "Images/C1.Microchitze/Img094Stars.png";	dbQImageSrc[94][0] = "livasperiklis.com";
                        dbQImage[94][1] = "Images/C1.Microchitze/Img094Stars.png";	dbQImageSrc[94][1] = "livasperiklis.com";
                        dbQImage[94][2] = "Images/C1.Microchitze/Img094Stars.png";	dbQImageSrc[94][2] = "livasperiklis.com";
                        dbAImage[94] = [];							dbAImageSrc[94] = [];
                        dbAImage[94][0] = "Images/C1.Microchitze/Img094Sun.png";  dbAImageSrc[94][0] = "www.presentationzen.com";
                        dbAImage[94][1] = "Images/C1.Microchitze/Img094Sun.png";  dbAImageSrc[94][1] = "www.presentationzen.com";
                        dbAImage[94][2] = "Images/C1.Microchitze/Img094Sun.png";  dbAImageSrc[94][2] = "www.presentationzen.com";
dbQList[ 95] = [];
dbQList[ 95][0] = "Din ce limb&#x103; provine numele stelei Betelgeuse?";  
dbQList[ 95][1] = "From which language does the name of the star Betelgeuse come?";  
dbQList[ 95][2] = "Aus welcher Sprache kommt der Name des Sterns Betelgeuse (Beteigeuze)?";
                        dbAType[ 95] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 95] = []; dbAList[95][0] = "Arab";
                        dbACrit[ 95] = []; dbACrit[95][0] = 13;
                        dbAnswer[95] = [];
                        dbAnswer[95][0] = "R&#x103;spuns corect: Arab&#x103;"; //plaintext ro answer
                        dbAnswer[95][1] = "Right answer: Arabic"; //plaintext en answer
                        dbAnswer[95][2] = "Richtige Antwort: Arabisch"; //plaintext de answer
                        dbExpln[ 95] = [];
                        dbExpln[ 95][0] = "Numele stelei vine din arab&#x103; \'Yad al-Jauza\', care &#xEE;nseamn&#x103; \'m&#xE2;na lui Orion\'. Caracterul arab pentru Y a fost interpretat gre&#x15F;it ca B de c&#x103;tre traduc&#x103;torii medievali, de aceea B este prima liter&#x103; &#xEE;n Betelgeuse.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 95][1] = "The star's name is derived from the Arabic \'Yad al-Jauza\', meaning \'the hand of Orion\'. The Arabic character for Y was misread as B by medieval translators, creating the initial B in Betelgeuse.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 95][2] = "Der Name des Sterns kommt dem Arabischen \'Yad al-Jauza\', und bedeutet \'Hand der Riesin\'. Der arabische Zeichen f&#252;r Y wurde von mittelalterliche &#220;bersetzer als B falsch gelesen, deswegen ist B der Anfangsbuchstabe in Betelgeuse.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 95] = [];
                        dbRefer[ 95][0] = "<a href='http://ro.wikipedia.org/wiki/Betelgeuse' target='_blank'>[1] ro.wikipedia.org/Betelgeuse</a>"; //references for ro explanation
                        dbRefer[ 95][1] = "<a href='http://en.wikipedia.org/wiki/Betelgeuse' target='_blank'>[1] en.wikipedia.org/Betelgeuse</a>"; //references for en explanation
                        dbRefer[ 95][2] = "<a href='http://de.wikipedia.org/wiki/Beteigeuze' target='_blank'>[1] de.wikipedia.org/Betelgeuse</a>"; //references for de explanation
                        dbQHint[ 95] = [];
                        dbQHint[ 95][0] = ""; //hint ro
                        dbQHint[ 95][1] = ""; //hint en
                        dbQHint[ 95][2] = ""; //hint de
                        dbQImage[95] = []; dbQImageSrc[95] = []; 
                        dbQImage[95][0] = "Images/C1.Microchitze/Img095Betelgeuse.png";	dbQImageSrc[95][0] = "northtexasdrifter.blogspot.com";
                        dbQImage[95][1] = "Images/C1.Microchitze/Img095Betelgeuse.png";	dbQImageSrc[95][1] = "northtexasdrifter.blogspot.com";
                        dbQImage[95][2] = "Images/C1.Microchitze/Img095Betelgeuse.png";	dbQImageSrc[95][2] = "northtexasdrifter.blogspot.com";
                        dbAImage[95] = [];							dbAImageSrc[95] = [];
                        dbAImage[95][0] = "Images/C1.Microchitze/Img095Arabic.png";  dbAImageSrc[95][0] = "www.examiner.com";
                        dbAImage[95][1] = "Images/C1.Microchitze/Img095Arabic.png";  dbAImageSrc[95][1] = "www.examiner.com";
                        dbAImage[95][2] = "Images/C1.Microchitze/Img095Arabic.png";  dbAImageSrc[95][2] = "www.examiner.com";
dbQList[ 96] = [];
dbQList[ 96][0] = "Care este numele corect al Luceaf&#x103;rului de sear&#x103;?";   
dbQList[ 96][1] = "Which is the proper name of the Evening Star?";  
dbQList[ 96][2] = "Welches ist der richtige Name des Abendsterns?";
                        dbAType[ 96] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 96] = []; dbAList[96][0] = "Venus";  
                        dbACrit[ 96] = []; dbACrit[96][0] = 13;
                        dbAnswer[96] = [];
                        dbAnswer[96][0] = "R&#x103;spuns corect: Venus"; //plaintext ro answer
                        dbAnswer[96][1] = "Right answer: Venus"; //plaintext en answer
                        dbAnswer[96][2] = "Richtige Antwort: Venus"; //plaintext de answer
                        dbExpln[ 96] = [];
                        dbExpln[ 96][0] = ""; //explanation ro
                        dbExpln[ 96][1] = ""; //explanation en
                        dbExpln[ 96][2] = ""; //explanation de
                        dbRefer[ 96] = [];
                        dbRefer[ 96][0] = "<a href='http://www.universetoday.com/22570/venus-the-morning-star/' target='_blank'>[1] www.universetoday.com/Venus</a>"; //references for ro explanation
                        dbRefer[ 96][1] = "<a href='http://www.universetoday.com/22570/venus-the-morning-star/' target='_blank'>[1] www.universetoday.com/Venus</a>"; //references for en explanation
                        dbRefer[ 96][2] = "<a href='http://www.universetoday.com/22570/venus-the-morning-star/' target='_blank'>[1] www.universetoday.com/Venus</a>"; //references for de explanation
                        dbQHint[ 96] = [];
                        dbQHint[ 96][0] = ""; //hint ro
                        dbQHint[ 96][1] = ""; //hint en
                        dbQHint[ 96][2] = ""; //hint de
                        dbQImage[96] = []; dbQImageSrc[96] = []; 
                        dbQImage[96][0] = "Images/C1.Microchitze/Img096EveningStar.png";	dbQImageSrc[96][0] = "indianapublicmedia.org";
                        dbQImage[96][1] = "Images/C1.Microchitze/Img096EveningStar.png";	dbQImageSrc[96][1] = "indianapublicmedia.org";
                        dbQImage[96][2] = "Images/C1.Microchitze/Img096EveningStar.png";	dbQImageSrc[96][2] = "indianapublicmedia.org";
                        dbAImage[96] = [];							dbAImageSrc[96] = [];
                        dbAImage[96][0] = "Images/C1.Microchitze/Img096Venus.png";  dbAImageSrc[96][0] = "www.astronomy.com";
                        dbAImage[96][1] = "Images/C1.Microchitze/Img096Venus.png";  dbAImageSrc[96][1] = "www.astronomy.com";
                        dbAImage[96][2] = "Images/C1.Microchitze/Img096Venus.png";  dbAImageSrc[96][2] = "www.astronomy.com";
dbQList[ 97] = [];
dbQList[ 97][0] = "Ce este o stea c&#x103;z&#x103;toare?";   
dbQList[ 97][1] = "What is a falling (or shooting) star?";  
dbQList[ 97][2] = "Was ist eine Sternschnuppe?"; 
                        dbAType[ 97] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 97] = []; dbAList[97][0] = "Meteor";
                        dbACrit[ 97] = []; dbACrit[97][0] = 13;
                        dbAnswer[97] = [];
                        dbAnswer[97][0] = "R&#x103;spuns corect: d&#xE2;ra luminoas&#x103; l&#x103;sat&#x103; de un meteor"; //plaintext ro answer
                        dbAnswer[97][1] = "Right answer: the streak of light from a meteor"; //plaintext en answer
                        dbAnswer[97][2] = "Richtige Antwort: die Leuchterscheinungen eines Meteors"; //plaintext de answer
                        dbExpln[ 97] = [];
                        dbExpln[ 97][0] = ""; //explanation ro
                        dbExpln[ 97][1] = ""; //explanation en
                        dbExpln[ 97][2] = ""; //explanation de
                        dbRefer[ 97] = [];
                        dbRefer[ 97][0] = "<a href='http://coolcosmos.ipac.caltech.edu/ask/255-What-is-a-shooting-star-' target='_blank'>[1] coolcosmos.ipac.caltech.edu/shooting-star</a>"; //references for ro explanation
                        dbRefer[ 97][1] = "<a href='http://coolcosmos.ipac.caltech.edu/ask/255-What-is-a-shooting-star-' target='_blank'>[1] coolcosmos.ipac.caltech.edu/shooting-star</a>"; //references for en explanation
                        dbRefer[ 97][2] = "<a href='http://coolcosmos.ipac.caltech.edu/ask/255-What-is-a-shooting-star-' target='_blank'>[1] coolcosmos.ipac.caltech.edu/shooting-star</a>"; //references for de explanation
                        dbQHint[ 97] = [];
                        dbQHint[ 97][0] = ""; //hint ro
                        dbQHint[ 97][1] = ""; //hint en
                        dbQHint[ 97][2] = ""; //hint de
                        dbQImage[97] = []; dbQImageSrc[97] = []; 
                        dbQImage[97][0] = "Images/C1.Microchitze/Img097Falling.png";	dbQImageSrc[97][0] = "worldofpopculture.com";
                        dbQImage[97][1] = "Images/C1.Microchitze/Img097Falling.png";	dbQImageSrc[97][1] = "worldofpopculture.com";
                        dbQImage[97][2] = "Images/C1.Microchitze/Img097Falling.png";	dbQImageSrc[97][2] = "worldofpopculture.com";
                        dbAImage[97] = [];							dbAImageSrc[97] = [];
                        dbAImage[97][0] = "Images/C1.Microchitze/Img097Meteor.png";  dbAImageSrc[97][0] = "shark-tank.com";
                        dbAImage[97][1] = "Images/C1.Microchitze/Img097Meteor.png";  dbAImageSrc[97][1] = "shark-tank.com";
                        dbAImage[97][2] = "Images/C1.Microchitze/Img097Meteor.png";  dbAImageSrc[97][2] = "shark-tank.com";
dbQList[ 98] = [];
dbQList[ 98][0] = "Care este unghiul de zenit (solar) la r&#x103;s&#x103;ritul soarelui? (&#xEE;n grade)";   
dbQList[ 98][1] = "What is the (solar) zenith angle at sunrise? (in degrees)";  
dbQList[ 98][2] = "Was ist der (Sonnen-)Zenitwinkel bei Sonnenaufgang? (in Grade)";
                        dbAType[ 98] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 98] = []; dbAList[98][0] = 90; 
                        dbACrit[ 98] = []; dbACrit[98][0] = 20; 
                        dbAnswer[98] = [];
                        dbAnswer[98][0] = "R&#x103;spuns corect: 90&#176;"; //plaintext ro answer
                        dbAnswer[98][1] = "Right answer: 90&#176;"; //plaintext en answer
                        dbAnswer[98][2] = "Richtige Antwort: 90&#176;"; //plaintext de answer
                        dbExpln[ 98] = [];
                        dbExpln[ 98][0] = "Unghiul de zenit se m&#x103;soar&#x103; de la vertical&#x103;; zenitul maxim de 90&#176; este atunci c&#xE2;nd eleva&#x163;ia are un unghi de 0&#176; (la r&#x103;s&#x103;ritul soarelui).<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 98][1] = "The zenith angle is measured from the vertical; the zenith is at a maxmium 90&#176; angle when the elevation is at a 0&#176; angle (sunrise).<sup>[1]</sup>"; //explanation en
                        dbExpln[ 98][2] = "Der Zenitwinkel ist von der Senkrechte gemessen; es hat also ein H&#246;chstwert von 90&#176;, wenn die Erhebung bei einem Winkel von 0&#176; ist (Sonnenaufgang).<sup>[1]</sup>"; //explanation de
                        dbRefer[ 98] = [];
                        dbRefer[ 98][0] = "<a href='http://solarwiki.ucdavis.edu/The_Science_of_Solar/Solar_Basics/B._Basics_of_the_Sun/VI._The_Sun&#39;s_Motion' target='_blank'>[1] solarwiki.ucdavis.edu/Sun&#39;s_Motion</a>"; //references for ro explanation
                        dbRefer[ 98][1] = "<a href='http://solarwiki.ucdavis.edu/The_Science_of_Solar/Solar_Basics/B._Basics_of_the_Sun/VI._The_Sun&#39;s_Motion' target='_blank'>[1] solarwiki.ucdavis.edu/Sun&#39;s_Motion</a>"; //references for en explanation
                        dbRefer[ 98][2] = "<a href='http://solarwiki.ucdavis.edu/The_Science_of_Solar/Solar_Basics/B._Basics_of_the_Sun/VI._The_Sun&#39;s_Motion' target='_blank'>[1] solarwiki.ucdavis.edu/Sun&#39;s_Motion</a>"; //references for de explanation
                        dbQHint[ 98] = [];
                        dbQHint[ 98][0] = ""; //hint ro
                        dbQHint[ 98][1] = ""; //hint en
                        dbQHint[ 98][2] = ""; //hint de
                        dbQImage[98] = []; dbQImageSrc[98] = []; 
                        dbQImage[98][0] = "Images/C1.Microchitze/Img098Zenith.png";	dbQImageSrc[98][0] = "www.contemporarypsychotherapy.org";
                        dbQImage[98][1] = "Images/C1.Microchitze/Img098Zenith.png";	dbQImageSrc[98][1] = "www.contemporarypsychotherapy.org";
                        dbQImage[98][2] = "Images/C1.Microchitze/Img098Zenith.png";	dbQImageSrc[98][2] = "www.contemporarypsychotherapy.org";
                        dbAImage[98] = [];							dbAImageSrc[98] = [];
                        dbAImage[98][0] = "Images/C1.Microchitze/Img098Expl.png";  dbAImageSrc[98][0] = "solarwiki.ucdavis.edu";
                        dbAImage[98][1] = "Images/C1.Microchitze/Img098Expl.png";  dbAImageSrc[98][1] = "solarwiki.ucdavis.edu";
                        dbAImage[98][2] = "Images/C1.Microchitze/Img098Expl.png";  dbAImageSrc[98][2] = "solarwiki.ucdavis.edu";
dbQList[ 99] = [];
dbQList[ 99][0] = "Cum se numea primul satelit artificial al P&#x103;m&#xE2;ntului?";    
dbQList[ 99][1] = "What name did the first artificial Earth satellite have?";  
dbQList[ 99][2] = "Wie hie&#223; der erste k&#252;nstliche Erdsatellit?";
                        dbAType[ 99] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 99] = []; dbAList[99][0] = "Sputnik";
                        dbACrit[ 99] = []; dbACrit[99][0] = 13;
                        dbAnswer[99] = [];
                        dbAnswer[99][0] = "R&#x103;spuns corect: Sputnik-1 (1957)"; //plaintext ro answer
                        dbAnswer[99][1] = "Right answer: Sputnik-1 (1957)"; //plaintext en answer
                        dbAnswer[99][2] = "Richtige Antwort: Sputnik-1 (1957)"; //plaintext de answer
                        dbExpln[ 99] = [];
                        dbExpln[ 99][0] = ""; //explanation ro
                        dbExpln[ 99][1] = ""; //explanation en
                        dbExpln[ 99][2] = ""; //explanation de
                        dbRefer[ 99] = [];
                        dbRefer[ 99][0] = "<a href='http://en.wikipedia.org/wiki/Sputnik_1' target='_blank'>[1] en.wikipedia.org/Sputnik_1</a>"; //references for ro explanation
                        dbRefer[ 99][1] = "<a href='http://en.wikipedia.org/wiki/Sputnik_1' target='_blank'>[1] en.wikipedia.org/Sputnik_1</a>"; //references for en explanation
                        dbRefer[ 99][2] = "<a href='http://en.wikipedia.org/wiki/Sputnik_1' target='_blank'>[1] en.wikipedia.org/Sputnik_1</a>"; //references for de explanation
                        dbQHint[ 99] = [];
                        dbQHint[ 99][0] = ""; //hint ro
                        dbQHint[ 99][1] = ""; //hint en
                        dbQHint[ 99][2] = ""; //hint de
                        dbQImage[99] = []; dbQImageSrc[99] = []; 
                        dbQImage[99][0] = "Images/C1.Microchitze/Img099Satellite.png";	dbQImageSrc[99][0] = "www.bbc.co.uk";
                        dbQImage[99][1] = "Images/C1.Microchitze/Img099Satellite.png";	dbQImageSrc[99][1] = "www.bbc.co.uk";
                        dbQImage[99][2] = "Images/C1.Microchitze/Img099Satellite.png";	dbQImageSrc[99][2] = "www.bbc.co.uk";
                        dbAImage[99] = [];							dbAImageSrc[99] = [];
                        dbAImage[99][0] = "Images/C1.Microchitze/Img099Sputnik.png";  dbAImageSrc[99][0] = "space-club.deviantart.com";
                        dbAImage[99][1] = "Images/C1.Microchitze/Img099Sputnik.png";  dbAImageSrc[99][1] = "space-club.deviantart.com";
                        dbAImage[99][2] = "Images/C1.Microchitze/Img099Sputnik.png";  dbAImageSrc[99][2] = "space-club.deviantart.com";
                    
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX T/F ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 100] = [];
dbQList[ 100][0] = "&pi; = 3.14"; 
dbQList[ 100][1] = "&pi; = 3.14"; 
dbQList[ 100][2] = "&pi; = 3.14"; 
                        dbAType[ 100] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 100] = []; dbAList[100][0] = "f";
                        dbACrit[ 100] = []; dbACrit[100][0] = 13;
                        dbAnswer[100] = [];
                        dbAnswer[100][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[100][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[100][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[ 100] = [];
                        dbExpln[ 100][0] = "&pi; = 3.1415926535897932384626433832795...<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 100][1] = "&pi; = 3.1415926535897932384626433832795...<sup>[1]</sup>"; //explanation en
                        dbExpln[ 100][2] = "&pi; = 3.1415926535897932384626433832795...<sup>[1]</sup>"; //explanation de
                        dbRefer[ 100] = [];
                        dbRefer[ 100][0] = "<a href='http://www.geom.uiuc.edu/~huberty/math5337/groupe/digits.html' target='_blank'>[1] www.geom.uiuc.edu/digits.html</a>"; //references for ro explanation
                        dbRefer[ 100][1] = "<a href='http://www.geom.uiuc.edu/~huberty/math5337/groupe/digits.html' target='_blank'>[1] www.geom.uiuc.edu/digits.html</a>"; //references for en explanation
                        dbRefer[ 100][2] = "<a href='http://www.geom.uiuc.edu/~huberty/math5337/groupe/digits.html' target='_blank'>[1] www.geom.uiuc.edu/digits.html</a>"; //references for de explanation
                        dbQHint[ 100] = [];
                        dbQHint[ 100][0] = ""; //hint ro
                        dbQHint[ 100][1] = ""; //hint en
                        dbQHint[ 100][2] = ""; //hint de
                        dbQImage[100] = []; dbQImageSrc[100] = []; 
                        dbQImage[100][0] = "Images/C1.Microchitze/Img100Pi.png";	dbQImageSrc[100][0] = "engage.stanford.edu";
                        dbQImage[100][1] = "Images/C1.Microchitze/Img100Pi.png";	dbQImageSrc[100][1] = "engage.stanford.edu";
                        dbQImage[100][2] = "Images/C1.Microchitze/Img100Pi.png";	dbQImageSrc[100][2] = "engage.stanford.edu";
                        dbAImage[100] = [];							  dbAImageSrc[100] = [];
                        dbAImage[100][0] = "Images/C1.Microchitze/Img100PiDigits.png";  dbAImageSrc[100][0] = "fwsu-blog.org";
                        dbAImage[100][1] = "Images/C1.Microchitze/Img100PiDigits.png";  dbAImageSrc[100][1] = "fwsu-blog.org";
                        dbAImage[100][2] = "Images/C1.Microchitze/Img100PiDigits.png";  dbAImageSrc[100][2] = "fwsu-blog.org";
dbQList[ 101] = [];
dbQList[ 101][0] = "Prin fotosintez&#x103; se produce lumin&#x103;.";  
dbQList[ 101][1] = "Through photosynthesis, light is produced."; 
dbQList[ 101][2] = "Durch Photosynthese wird Licht erzeugt."; 
                        dbAType[ 101] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 101] = []; dbAList[101][0] = "f";
                        dbACrit[ 101] = []; dbACrit[101][0] = 13; 
                        dbAnswer[101] = [];
                        dbAnswer[101][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[101][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[101][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[ 101] = [];
                        dbExpln[ 101][0] = "Fotosinteza este procesul de fixare a dioxidului de carbon din atmosfer&#x103; de c&#x103;tre plantele verzi (cu clorofil&#x103;), &#xEE;n prezen&#x163;a radia&#x163;iilor solare, cu eliminare de oxigen &#x15F;i formare de compu&#x15F;i organici.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 101][1] = "Photosynthesis is a process used by plants and other organisms to convert light energy, normally from the Sun, into chemical energy that can be later released to fuel the organisms' activities. Oxygen may be released as a waste product.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 101][2] = "Photosynthese bezeichnet die Erzeugung von energiereichen Stoffen aus energie&#228;rmeren Stoffen mit Hilfe von Lichtenergie, wobei molekularer Sauerstoff auch erzeugt werden kann.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 101] = [];
                        dbRefer[ 101][0] = "<a href='http://ro.wikipedia.org/wiki/Fotosintez%C4%83' target='_blank'>[1] ro.wikipedia.org/Fotosinteza</a>"; //references for ro explanation
                        dbRefer[ 101][1] = "<a href='http://en.wikipedia.org/wiki/Photosynthesis' target='_blank'>[1] en.wikipedia.org/Photosynthesis</a>"; //references for en explanation
                        dbRefer[ 101][2] = "<a href='http://de.wikipedia.org/wiki/Photosynthese' target='_blank'>[1] de.wikipedia.org/Photosynthese</a>"; //references for de explanation
                        dbQHint[ 101] = [];
                        dbQHint[ 101][0] = ""; //hint ro
                        dbQHint[ 101][1] = ""; //hint en
                        dbQHint[ 101][2] = ""; //hint de
                        dbQImage[101] = []; dbQImageSrc[101] = []; 
                        dbQImage[101][0] = "Images/C1.Microchitze/Img101Candle.png";	dbQImageSrc[101][0] = "blog.pauldorset.com";
                        dbQImage[101][1] = "Images/C1.Microchitze/Img101Candle.png";	dbQImageSrc[101][1] = "blog.pauldorset.com";
                        dbQImage[101][2] = "Images/C1.Microchitze/Img101Candle.png";	dbQImageSrc[101][2] = "blog.pauldorset.com";
                        dbAImage[101] = [];							dbAImageSrc[101] = [];
                        dbAImage[101][0] = "Images/C1.Microchitze/Img101Photosynthesis.png";  dbAImageSrc[101][0] = "bioweb.uwlax.edu";
                        dbAImage[101][1] = "Images/C1.Microchitze/Img101Photosynthesis.png";  dbAImageSrc[101][1] = "bioweb.uwlax.edu";
                        dbAImage[101][2] = "Images/C1.Microchitze/Img101Photosynthesis.png";  dbAImageSrc[101][2] = "bioweb.uwlax.edu";
dbQList[ 102] = [];
dbQList[ 102][0] = "C&#x103;rbunele este un mineral.";
dbQList[ 102][1] = "Coal is a mineral."; 
dbQList[ 102][2] = "Kohle ist ein Mineral."; 
                        dbAType[ 102] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 102] = []; dbAList[102][0] = "f";
                        dbACrit[ 102] = []; dbACrit[102][0] = 13;
                        dbAnswer[102] = [];
                        dbAnswer[102][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[102][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[102][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[ 102] = [];
                        dbExpln[ 102][0] = "Mineralele sunt substan&#x163;e naturale solide, omogene, anorganice, av&#xE2;nd o compozi&#x163;ie chimic&#x103; &#x15F;i structur&#x103; cristalin&#x103; definit&#x103;. C&#x103;rbunele nu este anorganic.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 102][1] = "Minerals are naturally occurring, homogeneous inorganic solid substances having a definite chemical composition and crystalline structure. Coal is not inorganic, because it is composed primarily of organically derived carbon.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 102][2] = "Mineralien sind nat&#252;rlich vorkommende, homogene anorganische, kristalline Feststoffe mit bestimmter chemischer Zusammensetzung. Kohle ist nicht anorganischen.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 102] = [];
                        dbRefer[ 102][0] = "<a href='http://en.wikipedia.org/wiki/Mineral' target='_blank'>[1] en.wikipedia.org/Mineral</a>"; //references for ro explanation
                        dbRefer[ 102][1] = "<a href='http://en.wikipedia.org/wiki/Mineral' target='_blank'>[1] en.wikipedia.org/Mineral</a>"; //references for en explanation
                        dbRefer[ 102][2] = "<a href='http://en.wikipedia.org/wiki/Mineral' target='_blank'>[1] en.wikipedia.org/Mineral</a>"; //references for de explanation
                        dbQHint[ 102] = [];
                        dbQHint[ 102][0] = ""; //hint ro
                        dbQHint[ 102][1] = ""; //hint en
                        dbQHint[ 102][2] = ""; //hint de
                        dbQImage[102] = []; dbQImageSrc[102] = []; 
                        dbQImage[102][0] = "Images/C1.Microchitze/Img102Coal.png";	dbQImageSrc[102][0] = "www.csrwire.com";
                        dbQImage[102][1] = "Images/C1.Microchitze/Img102Coal.png";	dbQImageSrc[102][1] = "www.csrwire.com";
                        dbQImage[102][2] = "Images/C1.Microchitze/Img102Coal.png";	dbQImageSrc[102][2] = "www.csrwire.com";
                        dbAImage[102] = [];							dbAImageSrc[102] = [];
                        dbAImage[102][0] = "Images/C1.Microchitze/Img102Formation.png";  dbAImageSrc[102][0] = "www.energy.alberta.ca";
                        dbAImage[102][1] = "Images/C1.Microchitze/Img102Formation.png";  dbAImageSrc[102][1] = "www.energy.alberta.ca";
                        dbAImage[102][2] = "Images/C1.Microchitze/Img102Formation.png";  dbAImageSrc[102][2] = "www.energy.alberta.ca";
dbQList[ 103] = [];
dbQList[ 103][0] = "Polul Nord Geografic poate fi atins zbur&#xE2;nd mereu c&#x103;tre Nord-Est.";   
dbQList[ 103][1] = "The Geographic North Pole can be reached by always flying due North-East."; 
dbQList[ 103][2] = "Der geographische Nordpol kann erreicht werden, wenn man immer Richtung Nord-Osten fliegt."; 
                        dbAType[ 103] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 103] = []; dbAList[103][0] = "f";
                        dbACrit[ 103] = []; dbACrit[103][0] = 13;
                        dbAnswer[103] = [];
                        dbAnswer[103][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[103][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[103][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[ 103] = [];
                        dbExpln[ 103][0] = "Dac&#x103; s-ar putea, drumul de &#xEE;ntoarcere ar fi mereu &#xEE;n direc&#x163;ia Sud-Vest. Dar la Polul Nord nu exist&#x103; dec&#xE2;t direc&#x163;ia Sud..."; //explanation ro
                        dbExpln[ 103][1] = "If it could be reached, the way back would be due South-West. But at the North pole, all directions are South... "; //explanation en
                        dbExpln[ 103][2] = "Wenn es m&#246;glich w&#228;re, w&#252;rde der R&#252;ckweg immer Richtung S&#252;d-Westen sein. Aber am Nordpol gibt es nur Richtung S&#252;den..."; //explanation de
                        dbRefer[ 103] = [];
                        dbRefer[ 103][0] = ""; //references for ro explanation
                        dbRefer[ 103][1] = ""; //references for en explanation
                        dbRefer[ 103][2] = ""; //references for de explanation
                        dbQHint[ 103] = [];
                        dbQHint[ 103][0] = ""; //hint ro
                        dbQHint[ 103][1] = ""; //hint en
                        dbQHint[ 103][2] = ""; //hint de
                        dbQImage[103] = []; dbQImageSrc[103] = []; 
                        dbQImage[103][0] = "Images/C1.Microchitze/Img103Plane.png";	dbQImageSrc[103][0] = "www.freevectors.com";
                        dbQImage[103][1] = "Images/C1.Microchitze/Img103Plane.png";	dbQImageSrc[103][1] = "www.freevectors.com";
                        dbQImage[103][2] = "Images/C1.Microchitze/Img103Plane.png";	dbQImageSrc[103][2] = "www.freevectors.com";
                        dbAImage[103] = [];							dbAImageSrc[103] = [];
                        dbAImage[103][0] = "Images/C1.Microchitze/Img103Spiral.png";  dbAImageSrc[103][0] = "www.progonos.com";
                        dbAImage[103][1] = "Images/C1.Microchitze/Img103Spiral.png";  dbAImageSrc[103][1] = "www.progonos.com";
                        dbAImage[103][2] = "Images/C1.Microchitze/Img103Spiral.png";  dbAImageSrc[103][2] = "www.progonos.com";
dbQList[ 104] = [];
dbQList[ 104][0] = "C&#x103;p&#x15F;unile au semin&#x163;e.";  
dbQList[ 104][1] = "Strawberries have seeds."; 
dbQList[ 104][2] = "Erdbeeren haben Samen."; 
                        dbAType[ 104] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 104] = []; dbAList[104][0] = "f";
                        dbACrit[ 104] = []; dbACrit[104][0] = 14; 
                        dbAnswer[104] = [];
                        dbAnswer[104][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[104][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[104][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[ 104] = [];
                        dbExpln[ 104][0] = "Partea ro&#x15F;ie a c&#x103;p&#x15F;unii nu este fruct, ci doar stamina. Adev&#x103;ratele fructe - numite achene - sunt structurile g&#x103;lbui de pe exterior, iar semin&#x163;ele sunt &#xEE;n interiorul achenelor.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 104][1] = "Technically, the fleshy red part is derived from the stamen, not the plant's ovaries. Each apparent seed (achene) on the outside is actually one of the ovaries of the flower, with a seed inside it.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 104][2] = "Die rote Erdbeere an sich ist keine Frucht, sondern nur das Staubblat, an den die eigentliche Fr&#252;chte - die gelbe N&#252;sse gennant Ach&#228;ne - h&#228;ngen. Die eigentlichen Samen sind innerhalb der Ach&#228;ne.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 104] = [];
                        dbRefer[ 104][0] = "<a href='http://en.wikipedia.org/wiki/Strawberry' target='_blank'>[1] en.wikipedia.org/c&#x103;p&#x15F;un&#x103;</a>"; //references for ro explanation
                        dbRefer[ 104][1] = "<a href='http://en.wikipedia.org/wiki/Strawberry' target='_blank'>[1] en.wikipedia.org/Strawberry</a>"; //references for en explanation
                        dbRefer[ 104][2] = "<a href='http://en.wikipedia.org/wiki/Strawberry' target='_blank'>[1] en.wikipedia.org/Erdbeere</a>"; //references for de explanation
                        dbQHint[ 104] = [];
                        dbQHint[ 104][0] = ""; //hint ro
                        dbQHint[ 104][1] = ""; //hint en
                        dbQHint[ 104][2] = ""; //hint de
                        dbQImage[104] = []; dbQImageSrc[104] = []; 
                        dbQImage[104][0] = "Images/C1.Microchitze/Img104Strawberry.png";	dbQImageSrc[104][0] = "blog.ingredientmag.com";
                        dbQImage[104][1] = "Images/C1.Microchitze/Img104Strawberry.png";	dbQImageSrc[104][1] = "blog.ingredientmag.com";
                        dbQImage[104][2] = "Images/C1.Microchitze/Img104Strawberry.png";	dbQImageSrc[104][2] = "blog.ingredientmag.com";
                        dbAImage[104] = [];							dbAImageSrc[104] = [];
                        dbAImage[104][0] = "Images/C1.Microchitze/Img104StrawberrySeed.png";  dbAImageSrc[104][0] = "factmonster.com";
                        dbAImage[104][1] = "Images/C1.Microchitze/Img104StrawberrySeed.png";  dbAImageSrc[104][1] = "factmonster.com";
                        dbAImage[104][2] = "Images/C1.Microchitze/Img104StrawberrySeed.png";  dbAImageSrc[104][2] = "factmonster.com";
dbQList[ 105] = [];
dbQList[ 105][0] = "Zebrele sunt negre cu dungi albe (nu invers).";  
dbQList[ 105][1] = "Zebras are black with white stripes (not the other way around).";  
dbQList[ 105][2] = "Zebras sind schwarz mit wei&#223;en Streifen (nicht umgekehrt).";
                        dbAType[ 105] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 105] = []; dbAList[105][0] = "f";
                        dbACrit[ 105] = []; dbACrit[105][0] = 14;
                        dbAnswer[105] = [];
                        dbAnswer[105][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[105][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[105][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[ 105] = [];
                        dbExpln[ 105][0] = "Se crede c&#x103; zebrele sunt negre (&#xEE;nchise la culoare) cu dungi albe deoarece: <ul><li>dovezile embriologice arat&#x103; c&#x103; negrul este culoarea de baz&#x103;, iar zonele albe sunt ad&#x103;ugate ulterior<sup>[1]</sup>; modelul p&#x103;rului zebrei este rezultatul activ&#x103;rii (negru) &#x15F;i inhib&#x103;rii (alb) a pigmentului -- dungile albe sunt doar zone &#xEE;n care lipseste pigmentul<sup>[2]</sup><li>Quagga, o subspecie disp&#x103;rut&#x103; de zebr&#x103;, are model de dungi maro &#x15F;i albe limitat, posteriorul fiind &#xEE;n &#xEE;ntregime maro<sup>[3]</sup> (vezi imagine)</li></ul>Culoarea alb&#x103; a bur&#x163;ii zebrelor nu este un bun contra-argument, deoarece multe animale au bur&#x163;i albe &#x15F;i cu siguran&#x163;&#x103; nu sunt considerate albe (tigri, broa&#x15F;te, delfini, etc.)..."; //explanation ro
                        dbExpln[ 105][1] = "Zebras are believed to be black(dark) with white stripes because: <ul><li>embryological evidence shows that the animal's background color is black and the white stripes and bellies are additions<sup>[1]</sup>; the pattern of the fur is a result of pigment activation (black) and inhibition (white) -- white patches are simply areas that lack pigmentation<sup>[2]</sup><li>Quagga, an extinct subspecies of plain zebra, had a limited pattern of brown and white stripes, while the rear was brown and without stripes<sup>[3]</sup> (see picture)</li></ul>The white underbelly of zebras is not a good counter-argument, since many animals have white underbellies and are definitely not considered white (tigers, toads, dolphins, etc)..."; //explanation en
                        dbExpln[ 105][2] = "Zebras sind vermutlich schwarz (dunkel) mit wei&#223;en Streifen, denn: <ul><li>embryologische Beweise zeigen, dass die Hintergrundfarbe des Tieres schwarz ist<sup>[1]</sup>; das Muster des Fells ist ein Ergebnis der Aktivierung von Pigmenten (schwarz) und dessen Hemmung (wei&#223;) - wei&#223;e Stellen sind einfach Bereiche, wo die Pigmentierung fehlt<sup>[2]</sup><li> Quagga, eine ausgestorbene Unterart des Zebras, hatten ein begrenztes Muster von braune und wei&#223;e Streifen, und der hintere Teil war braun und ohne Streifen<sup>[3]</sup> (siehe Bild)</li></ul>Die wei&#xDF;en Bauchbereiche der Zebras sind keine gute Gegenargumente, da viele Tiere bestimmt nicht als wei&#223; bezeichnet werden, obwohl sie wei&#223;e B&#228;uche haben (Tiger, Kr&#246;ten, Delphine, usw.) ...  "; //explanation de
                        dbRefer[ 105] = [];
                        dbRefer[ 105][0] = "<a href='http://en.wikipedia.org/wiki/Zebra' target='_blank'>[1] en.wikipedia.org/Zebra</a><br/><a href='http://animals.howstuffworks.com/mammals/zebra-stripes1.htm' target='_blank'>[2] animals.howstuffworks.com/zebra.htm</a><br/><a href='http://en.wikipedia.org/wiki/Quagga' target='_blank'>[3] en.wikipedia.org/Quagga</a>"; //references for ro explanation
                        dbRefer[ 105][1] = "<a href='http://en.wikipedia.org/wiki/Zebra' target='_blank'>[1] en.wikipedia.org/Zebra</a><br/><a href='http://animals.howstuffworks.com/mammals/zebra-stripes1.htm' target='_blank'>[2] animals.howstuffworks.com/zebra.htm</a><br/><a href='http://en.wikipedia.org/wiki/Quagga' target='_blank'>[3] en.wikipedia.org/Quagga</a>"; //references for en explanation
                        dbRefer[ 105][2] = "<a href='http://en.wikipedia.org/wiki/Zebra' target='_blank'>[1] en.wikipedia.org/Zebra</a><br/><a href='http://animals.howstuffworks.com/mammals/zebra-stripes1.htm' target='_blank'>[2] animals.howstuffworks.com/zebra.htm</a><br/><a href='http://en.wikipedia.org/wiki/Quagga' target='_blank'>[3] en.wikipedia.org/Quagga</a>"; //references for de explanation
                        dbQHint[ 105] = [];
                        dbQHint[ 105][0] = ""; //hint ro
                        dbQHint[ 105][1] = ""; //hint en
                        dbQHint[ 105][2] = ""; //hint de
                        dbQImage[105] = []; dbQImageSrc[105] = []; 
                        dbQImage[105][0] = "Images/C1.Microchitze/Img105Zebra.png";	dbQImageSrc[105][0] = "xkaseix.deviantart.com";
                        dbQImage[105][1] = "Images/C1.Microchitze/Img105Zebra.png";	dbQImageSrc[105][1] = "xkaseix.deviantart.com";
                        dbQImage[105][2] = "Images/C1.Microchitze/Img105Zebra.png";	dbQImageSrc[105][2] = "xkaseix.deviantart.com";
                        dbAImage[105] = [];							dbAImageSrc[105] = [];
                        dbAImage[105][0] = "Images/C1.Microchitze/Img105Quagga.png";  dbAImageSrc[105][0] = "en.wikipedia.org";
                        dbAImage[105][1] = "Images/C1.Microchitze/Img105Quagga.png";  dbAImageSrc[105][1] = "en.wikipedia.org";
                        dbAImage[105][2] = "Images/C1.Microchitze/Img105Quagga.png";  dbAImageSrc[105][2] = "en.wikipedia.org";
dbQList[ 106] = [];
dbQList[ 106][0] = "Paianjenii au 6 picioare.";   
dbQList[ 106][1] = "Spiders have 6 legs.";  
dbQList[ 106][2] = "Spinnen haben 6 Beine.";
                        dbAType[ 106] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 106] = []; dbAList[106][0] = "f";  
                        dbACrit[ 106] = []; dbACrit[106][0] = 13;
                        dbAnswer[106] = [];
                        dbAnswer[106][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[106][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[106][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[ 106] = [];
                        dbExpln[ 106][0] = "Paianjenii au 8 picioare, nu 6."; //explanation ro
                        dbExpln[ 106][1] = "Spiders have 8 legs, not 6."; //explanation en
                        dbExpln[ 106][2] = "Spinnen haben 8 Beine, nicht 6."; //explanation de
                        dbRefer[ 106] = [];
                        dbRefer[ 106][0] = ""; //references for ro explanation
                        dbRefer[ 106][1] = ""; //references for en explanation
                        dbRefer[ 106][2] = ""; //references for de explanation
                        dbQHint[ 106] = [];
                        dbQHint[ 106][0] = ""; //hint ro
                        dbQHint[ 106][1] = ""; //hint en
                        dbQHint[ 106][2] = ""; //hint de
                        dbQImage[106] = []; dbQImageSrc[106] = []; 
                        dbQImage[106][0] = "Images/C1.Microchitze/Img106CuteSpider.png";	dbQImageSrc[106][0] = "likes.com";
                        dbQImage[106][1] = "Images/C1.Microchitze/Img106CuteSpider.png";	dbQImageSrc[106][1] = "likes.com";
                        dbQImage[106][2] = "Images/C1.Microchitze/Img106CuteSpider.png";	dbQImageSrc[106][2] = "likes.com";
                        dbAImage[106] = [];							dbAImageSrc[106] = [];
                        dbAImage[106][0] = "Images/C1.Microchitze/Img106Spiders.png";  dbAImageSrc[106][0] = "ebay.com";
                        dbAImage[106][1] = "Images/C1.Microchitze/Img106Spiders.png";  dbAImageSrc[106][1] = "ebay.com";
                        dbAImage[106][2] = "Images/C1.Microchitze/Img106Spiders.png";  dbAImageSrc[106][2] = "ebay.com";
dbQList[ 107] = [];
dbQList[ 107][0] = "Pinguinii nu au genunchi.";   
dbQList[ 107][1] = "Penguins don\'t have knees.";  
dbQList[ 107][2] = "Pinguine haben keine Knie."; 
                        dbAType[ 107] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 107] = []; dbAList[107][0] = "f";
                        dbACrit[ 107] = []; dbACrit[107][0] = 13;
                        dbAnswer[107] = [];
                        dbAnswer[107][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[107][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[107][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[ 107] = [];
                        dbExpln[ 107][0] = "&#xCE;n imagine este radiografia unui pinguin, incluz&#xE2;nd articula&#x163;iile genunchilor.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 107][1] = "The image shows x-rays of a penguin, including the knee joints.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 107][2] = "Links ist das R&#246;ntgenbild eines Penguins, einschlie&#223;lich der Kniegelenke.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 107] = [];
                        dbRefer[ 107][0] = "<a href='http://penguins.neaq.org/2010/07/faq-do-penguins-have-knees.html' target='_blank'>[1] penguins.neaq.org</a>"; //references for ro explanation
                        dbRefer[ 107][1] = "<a href='http://penguins.neaq.org/2010/07/faq-do-penguins-have-knees.html' target='_blank'>[1] penguins.neaq.org</a>"; //references for en explanation
                        dbRefer[ 107][2] = "<a href='http://penguins.neaq.org/2010/07/faq-do-penguins-have-knees.html' target='_blank'>[1] penguins.neaq.org</a>"; //references for de explanation
                        dbQHint[ 107] = [];
                        dbQHint[ 107][0] = ""; //hint ro
                        dbQHint[ 107][1] = ""; //hint en
                        dbQHint[ 107][2] = ""; //hint de
                        dbQImage[107] = []; dbQImageSrc[107] = []; 
                        dbQImage[107][0] = "Images/C1.Microchitze/Img107Penguins.png";	dbQImageSrc[107][0] = "worldofpopculture.com";
                        dbQImage[107][1] = "Images/C1.Microchitze/Img107Penguins.png";	dbQImageSrc[107][1] = "worldofpopculture.com";
                        dbQImage[107][2] = "Images/C1.Microchitze/Img107Penguins.png";	dbQImageSrc[107][2] = "worldofpopculture.com";
                        dbAImage[107] = [];							dbAImageSrc[107] = [];
                        dbAImage[107][0] = "Images/C1.Microchitze/Img107Knees.png";  dbAImageSrc[107][0] = "penguins.neaq.org";
                        dbAImage[107][1] = "Images/C1.Microchitze/Img107Knees.png";  dbAImageSrc[107][1] = "penguins.neaq.org";
                        dbAImage[107][2] = "Images/C1.Microchitze/Img107Knees.png";  dbAImageSrc[107][2] = "penguins.neaq.org";
dbQList[ 108] = [];
dbQList[ 108][0] = "Infertilitatea e transmisibil&#x103;.";   
dbQList[ 108][1] = "Infertility is transmissible.";  
dbQList[ 108][2] = "Unfruchtbarkeit ist &#252;bertragbar.";
                        dbAType[ 108] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 108] = []; dbAList[108][0] = "f"; 
                        dbACrit[ 108] = []; dbACrit[108][0] = 13; 
                        dbAnswer[108] = [];
                        dbAnswer[108][0] = "R&#x103;spuns corect: fals"; //plaintext ro answer
                        dbAnswer[108][1] = "Right answer: false"; //plaintext en answer
                        dbAnswer[108][2] = "Richtige Antwort: falsch"; //plaintext de answer
                        dbExpln[ 108] = [];
                        dbExpln[ 108][0] = "Fiin&#x163;ele infertile nu pot produce urma&#x15F;i, iar infertilitatea nu e contagioas&#x103;."; //explanation ro
                        dbExpln[ 108][1] = "Infertile beings cannot produce offsprings and infertility is also not contageous."; //explanation en
                        dbExpln[ 108][2] = "Unfruchtbare Wesen k&#246;nnen nicht Nachkommen erzeugen und Unfruchtbarkeit ist auch nicht ansteckend."; //explanation de
                        dbRefer[ 108] = [];
                        dbRefer[ 108][0] = ""; //references for ro explanation
                        dbRefer[ 108][1] = ""; //references for en explanation
                        dbRefer[ 108][2] = ""; //references for de explanation
                        dbQHint[ 108] = [];
                        dbQHint[ 108][0] = ""; //hint ro
                        dbQHint[ 108][1] = ""; //hint en
                        dbQHint[ 108][2] = ""; //hint de
                        dbQImage[108] = []; dbQImageSrc[108] = []; 
                        dbQImage[108][0] = "Images/C1.Microchitze/Img108SneezeBlue.png";	dbQImageSrc[108][0] = "openclipart.org";
                        dbQImage[108][1] = "Images/C1.Microchitze/Img108SneezeBlue.png";	dbQImageSrc[108][1] = "openclipart.org";
                        dbQImage[108][2] = "Images/C1.Microchitze/Img108SneezeBlue.png";	dbQImageSrc[108][2] = "openclipart.org";
                        dbAImage[108] = [];							dbAImageSrc[108] = [];
                        dbAImage[108][0] = "Images/C1.Microchitze/Img108SneezeYellow.png";  dbAImageSrc[108][0] = "openclipart.org";
                        dbAImage[108][1] = "Images/C1.Microchitze/Img108SneezeYellow.png";  dbAImageSrc[108][1] = "openclipart.org";
                        dbAImage[108][2] = "Images/C1.Microchitze/Img108SneezeYellow.png";  dbAImageSrc[108][2] = "openclipart.org";
dbQList[ 109] = [];
dbQList[ 109][0] = "&#xCE;n data de 23 aprilie 1616, William Shakespeare a murit &#xEE;n casa sa din Stratford-upon-Avon. Tot pe 23 aprilie 1616, Miguel de Cervantes a murit &#xEE;n Madrid. Totu&#x15F;i este plauzibil s&#x103; afirmi c&#x103; unul dintre ei ar fi putut afla de moartea celuilalt."; 
dbQList[ 109][1] = "On the 23<sup>rd</sup> of April 1616 William Shakespeare died in his home at Stratford-upon-Avon. Also on the 23<sup>rd</sup> of April 1616, Miguel de Cervantes died in Madrid. Nevertheless, it is plausible to claim that one of them could have heard about the other's death."; 
dbQList[ 109][2] = "Am 23. April 1616, starb William Shakespeare in sein Haus in Stratford-upon-Avon. Ebenfalls am 23. April 1616 starb Miguel de Cervantes in Madrid. Dennoch ist es glaubhaft zu behaupten, dass Einer von dem Tod des Anderen h&#228;tte erfahren k&#246;nnen."; 
                        dbAType[109] = 0; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[109] = []; dbAList[109][0] = "f"; 
                        dbACrit[109] = []; dbACrit[109][0] = 14;
                        dbAnswer[109] = [];
                        dbAnswer[109][0] = "R&#x103;spuns corect: adev&#x103;rat"; //plaintext ro answer
                        dbAnswer[109][1] = "Right answer: true"; //plaintext en answer
                        dbAnswer[109][2] = "Richtige Antwort: wahr"; //plaintext de answer
                        dbExpln[109] = [];
                        dbExpln[109][0] = "Pentru a onora aceast&#x103; coinciden&#x21B;&#x103;, UNESCO a declarat 23 aprilie Ziua Interna&#x21B;ional&#x103; a C&#x103;r&#x21B;ii. Totu&#x15F;i, aceste date reprezint&#x103; zile diferite: Spania adoptase calendarul Gregorian &#xEE;n 1582, dar Anglia &#xEE;nca folosea calendarul Iulian. &#xCE;n cazul lui Shakespeare, 23 aprilie 1616 (Iulian) era echivalent cu 3 mai 1616 (Gregorian) -- 10 zile dup&#x103; Cervantes, suficient timp pentru un mesager s&#x103; transmit&#x103; vestea."; //explanation ro
                        dbExpln[109][1] = "To honour this coincidence, UNESCO established the 23<sup>rd</sup> of April as the International Day of the Book. However, these dates refer to different days: Spain had adopted the Gregorian calendar in 1582, but England was still using the Julian calendar. In the case of Shakespeare, 23 April 1616 (Julian) was equivalent to 3 May 1616 (Gregorian) --- 10 days after Cervantes, sufficient time for a messenger to deliver the news."; //explanation en
                        dbExpln[109][2] = "Als Anerkennung dieses Zufalls, hat UNESCO den 23. April als Weltbuchtag eingerichtet. Jedoch beziehen sich diese Daten auf verschiedene Tagen: in Spanien wurde schon seit 1582 der gregorianische Kalender angewandt, w&#228;hrend in England immer noch der Julianische Kalender galt. Im Falle von Shakespeare, 23. April 1616 (Julian) entsprach den 3. Mai 1616 (Gregorian) --- 10 Tagen nach Cervantes, gen&#252;gend Zeit f&#252;r einen Bote die Nachricht auszutragen."; //explanation de
                        dbRefer[109] = [];
                        dbRefer[109][0] = "<a href='http://ro.wikipedia.org/wiki/Cervantes' target='_blank'>[1] ro.wikipedia.org/wiki/Cervantes</a> <br/><a href='http://ro.wikipedia.org/wiki/Shakespeare' target='_blank'>[2] ro.wikipedia.org/wiki/Shakespeare</a>"; //references for ro explanation
                        dbRefer[109][1] = "<a href='http://en.wikipedia.org/wiki/Cervantes' target='_blank'>[1] en.wikipedia.org/wiki/Cervantes</a> <br/><a href='http://en.wikipedia.org/wiki/Shakespeare' target='_blank'>[2] en.wikipedia.org/wiki/Shakespeare</a>"; //references for en explanation
                        dbRefer[109][2] = "<a href='http://de.wikipedia.org/wiki/Cervantes' target='_blank'>[1] de.wikipedia.org/wiki/Cervantes</a> <br/><a href='http://de.wikipedia.org/wiki/Shakespeare' target='_blank'>[2] de.wikipedia.org/wiki/Shakespeare</a>"; //references for de explanation
                        dbQHint[109] = [];
                        dbQHint[109][0] = ""; //hint ro
                        dbQHint[109][1] = ""; //hint en
                        dbQHint[109][2] = ""; //hint de
                        dbQImage[109] = []; dbQImageSrc[109] = []; 
                        dbQImage[109][0] = "Images/C1.Microchitze/Img109ShakespeareCervantes.png";	dbQImageSrc[109][0] = "letras-adamar.blogspot.com";
                        dbQImage[109][1] = "Images/C1.Microchitze/Img109ShakespeareCervantes.png";	dbQImageSrc[109][1] = "letras-adamar.blogspot.com";
                        dbQImage[109][2] = "Images/C1.Microchitze/Img109ShakespeareCervantes.png";	dbQImageSrc[109][2] = "letras-adamar.blogspot.com";
                        dbAImage[109] = [];							dbAImageSrc[109] = [];
                        dbAImage[109][0] = "Images/C1.Microchitze/Img109Gregorian.png";  dbAImageSrc[109][0] = "macquirelatory.com";
                        dbAImage[109][1] = "Images/C1.Microchitze/Img109Gregorian.png";  dbAImageSrc[109][1] = "macquirelatory.com";
                        dbAImage[109][2] = "Images/C1.Microchitze/Img109Gregorian.png";  dbAImageSrc[109][2] = "macquirelatory.com";
                
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX SEQ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 110] = [];
dbQList[ 110][0] = "Ce urmeaz&#x103; dup&#x103;: <br/> ... maimu&#x163;&#x103;, coco&#x15F;, c&#xE2;ine, porc, &#x15F;obolan, bivol, tigru, iepure, ?"; 
dbQList[ 110][1] = "What comes next: <br/> ... monkey, rooster, dog, pig, rat, ox, tiger, rabbit, ?"; 
dbQList[ 110][2] = "Was kommt als n&#228;chstes: <br/> ... Affe, Hahn, Hund, Schwein, Ratte, B&#252;ffel, Tiger, Hase, ?"; 
                        dbAType[ 110] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 110] = []; dbAList[110][0] = "dragon"; dbAList[110][1] = "Drache";
                        dbACrit[ 110] = []; dbACrit[110][0] = 13; dbACrit[110][1] = 13;
                        dbAnswer[110] = [];
                        dbAnswer[110][0] = "R&#x103;spuns corect: dragon"; //plaintext ro answer
                        dbAnswer[110][1] = "Right answer: dragon"; //plaintext en answer
                        dbAnswer[110][2] = "Richtige Antwort: Drache"; //plaintext de answer
                        dbExpln[ 110] = [];
                        dbExpln[ 110][0] = "Dragonul urmeaz&#x103;, conform zodiacului chinezesc.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 110][1] = "The dragon comes next, according to the chinese calendar.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 110][2] = "Der Drache kommt als n&#228;chstes, laut chinesischer Kalender.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 110] = [];
                        dbRefer[ 110][0] = "<a href='http://ro.wikipedia.org/wiki/Zodiacul_chinezesc' target='_blank'>[1] ro.wikipedia.org/Zodiacul_chinezesc</a>"; //references for ro explanation
                        dbRefer[ 110][1] = "<a href='http://en.wikipedia.org/wiki/Chinese_zodiac' target='_blank'>[1] en.wikipedia.org/Chinese_zodiac</a>"; //references for en explanation
                        dbRefer[ 110][2] = "<a href='http://de.wikipedia.org/wiki/Chinesischer_Kalender' target='_blank'>[1] de.wikipedia.org/Chinesischer_Kalender</a>"; //references for de explanation
                        dbQHint[ 110] = [];
                        dbQHint[ 110][0] = ""; //hint ro
                        dbQHint[ 110][1] = ""; //hint en
                        dbQHint[ 110][2] = ""; //hint de
                        dbQImage[110] = []; dbQImageSrc[110] = []; 
                        dbQImage[110][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[110][0] = "";
                        dbQImage[110][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[110][1] = "";
                        dbQImage[110][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[110][2] = "";
                        dbAImage[110] = [];							  dbAImageSrc[110] = [];
                        dbAImage[110][0] = "Images/C1.Microchitze/Img110ChineseCalendar.png";  dbAImageSrc[110][0] = "moonlightenedshelves.wordpress.com";
                        dbAImage[110][1] = "Images/C1.Microchitze/Img110ChineseCalendar.png";  dbAImageSrc[110][1] = "moonlightenedshelves.wordpress.com";
                        dbAImage[110][2] = "Images/C1.Microchitze/Img110ChineseCalendar.png";  dbAImageSrc[110][2] = "moonlightenedshelves.wordpress.com";
dbQList[ 111] = [];
dbQList[ 111][0] = "Ce urmeaz&#x103; dup&#x103;: <br/> luni, joi, joi, duminica, marti, vineri, duminica, miercuri, sambata, ?";  
dbQList[ 111][1] = "What comes next: <br/> Monday, Thursday, Thursday, Sunday, Tuesday, Friday, Sunday, Wednesday, Saturday, ?"; 
dbQList[ 111][2] = "Was kommt als n&#228;chstes: <br/> Montag, Donnerstag, Donnerstag, Sonntag, Dienstag, Freitag, Sonntag, Mittwoch, Samstag,?"; 
                        dbAType[ 111] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 111] = []; dbAList[111][0] = "luni"; dbAList[111][1] = "Mon";
                        dbACrit[ 111] = []; dbACrit[111][0] = 13; dbACrit[111][1] = 13; 
                        dbAnswer[111] = [];
                        dbAnswer[111][0] = "R&#x103;spuns corect: luni"; //plaintext ro answer
                        dbAnswer[111][1] = "Right answer: Monday"; //plaintext en answer
                        dbAnswer[111][2] = "Richtige Antwort: Montag"; //plaintext de answer
                        dbExpln[ 111] = [];
                        dbExpln[ 111][0] = "Daca 1.Ianuarie cade luni si anul nu este bisect, atunci 1.Februarie cade joi, C1.Martie cade joi, etc... <br/>Exemplu: anul 2007."; //explanation ro
                        dbExpln[ 111][1] = "If the 1<sup>st</sup> of January falls on Monday in a non-leap year, then the 1<sup>st</sup> of February falls on Thursday, the 1<sup>st</sup> of March falls on Thirday, and so on... <br/>E.g.: year 2007."; //explanation en
                        dbExpln[ 111][2] = "Wen der 1.Januar Montag f&#228;llt und es ist kein Schaltjahr, dann f&#228;llt der 1.Februar Donnerstag, der C1.M&#228;rz Donnerstag, usw. <br/> z.B. Jahr 2007"; //explanation de
                        dbRefer[ 111] = [];
                        dbRefer[ 111][0] = ""; //references for ro explanation
                        dbRefer[ 111][1] = ""; //references for en explanation
                        dbRefer[ 111][2] = ""; //references for de explanation
                        dbQHint[ 111] = [];
                        dbQHint[ 111][0] = ""; //hint ro
                        dbQHint[ 111][1] = ""; //hint en
                        dbQHint[ 111][2] = ""; //hint de
                        dbQImage[111] = []; dbQImageSrc[111] = []; 
                        dbQImage[111][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[111][0] = "";
                        dbQImage[111][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[111][1] = "";
                        dbQImage[111][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[111][2] = "";
                        dbAImage[111] = [];							dbAImageSrc[111] = [];
                        dbAImage[111][0] = "Images/C1.Microchitze/Img111CalendarRO.png";  dbAImageSrc[111][0] = "www.notar-ionascu.ro";
                        dbAImage[111][1] = "Images/C1.Microchitze/Img111CalendarEN.png";  dbAImageSrc[111][1] = "annystudio.com";
                        dbAImage[111][2] = "Images/C1.Microchitze/Img111CalendarDE.png";  dbAImageSrc[111][2] = "news.manegenwelt.de";
dbQList[ 112] = [];
dbQList[ 112][0] = "Ce lipse&#x15F;te? <br/> mono, di, tri, tetra, penta, hexa, hepta, octa, ___, deca, hendeca, dodeca, ...";  
dbQList[ 112][1] = "What is missing? <br/> mono, di, tri, tetra, penta, hexa, hepta, octa, ___, deca, hendeca, dodeca, ..."; 
dbQList[ 112][2] = "Was fehlt? <br/> mono, di, tri, tetra, penta, hexa, hepta, octa, ___, deca, hendeca, dodeca, ..."; 
                        dbAType[ 112] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 112] = []; dbAList[112][0] = "enea"; dbAList[112][1] = "ennea";
                        dbACrit[ 112] = []; dbACrit[112][0] = 13; dbACrit[112][1] = 13; 
                        dbAnswer[112] = [];
                        dbAnswer[112][0] = "R&#x103;spuns corect: ennea (enea)"; //plaintext ro answer
                        dbAnswer[112][1] = "Right answer: ennea"; //plaintext en answer
                        dbAnswer[112][2] = "Richtige Antwort: ennea"; //plaintext de answer
                        dbExpln[ 112] = [];
                        dbExpln[ 112][0] = "Acestea sunt prefixele grece&#x15F;ti (nu latine), folosite de exemplu &#xEE;n numele poligoanelor &#x15F;i poliedrelor."; //explanation ro
                        dbExpln[ 112][1] = "These are the Greek (not Latin) prefixes, used for instance in naming polygons and polyhedra."; //explanation en
                        dbExpln[ 112][2] = "Diese sind die griechischen (nicht die lateinische) Pr&#228;fixe, verwendet z.B. bei der Benennung von Polygone und Polyeder."; //explanation de
                        dbRefer[ 112] = [];
                        dbRefer[ 112][0] = ""; //references for ro explanation
                        dbRefer[ 112][1] = ""; //references for en explanation
                        dbRefer[ 112][2] = ""; //references for de explanation
                        dbQHint[ 112] = [];
                        dbQHint[ 112][0] = ""; //hint ro
                        dbQHint[ 112][1] = ""; //hint en
                        dbQHint[ 112][2] = ""; //hint de
                        dbQImage[112] = []; dbQImageSrc[112] = []; 
                        dbQImage[112][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[112][0] = "";
                        dbQImage[112][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[112][1] = "";
                        dbQImage[112][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[112][2] = "";
                        dbAImage[112] = [];							dbAImageSrc[112] = [];
                        dbAImage[112][0] = "Images/C1.Microchitze/Img112Prefixes.png";  dbAImageSrc[112][0] = "images.frompo.com";
                        dbAImage[112][1] = "Images/C1.Microchitze/Img112Prefixes.png";  dbAImageSrc[112][1] = "images.frompo.com";
                        dbAImage[112][2] = "Images/C1.Microchitze/Img112Prefixes.png";  dbAImageSrc[112][2] = "images.frompo.com";
dbQList[ 113] = [];
dbQList[ 113][0] = "Ce urmeaz&#x103; dup&#x103;: <br/>... 10, 11, 12, 13, 14, 15, 16, 17, 21, 23, 30, 33, 120, ? ";   
dbQList[ 113][1] = "What comes next: <br/> ... 10, 11, 12, 13, 14, 15, 16, 17, 21, 23, 30, 33, 120, ?"; 
dbQList[ 113][2] = "Was kommt als n&#228;chstes: <br/>... 10, 11, 12, 13, 14, 15, 16, 17, 21, 23, 30, 33, 120, ?"; 
                        dbAType[ 113] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 113] = []; dbAList[113][0] = 1111;
                        dbACrit[ 113] = []; dbACrit[113][0] = 20;
                        dbAnswer[113] = [];
                        dbAnswer[113][0] = "R&#x103;spuns corect: 1111"; //plaintext ro answer
                        dbAnswer[113][1] = "Right answer: 1111"; //plaintext en answer
                        dbAnswer[113][2] = "Richtige Antwort: 1111"; //plaintext de answer
                        dbExpln[ 113] = [];
                        dbExpln[ 113][0] = "15(baza 15) = 10<br/>15(baza 14) = 11<br/>15(baza 13) = 12<br/>15(baza 12) = 13<br/>15(baza 11) = 14<br/>15(baza 10) = 15<br/>15(baza 9) = 16<br/>15(baza 8) = 17<br/>15(baza 7) = 21<br/>15(baza 6) = 23<br/>15(baza 5) = 30<br/>15(baza 4) = 33<br/>15(baza 3) = 120<br/>15(baza 2) = 1111"; //explanation ro
                        dbExpln[ 113][1] = "15(base 15) = 10<br/>15(base 14) = 11<br/>15(base 13) = 12<br/>15(base 12) = 13<br/>15(base 11) = 14<br/>15(base 10) = 15<br/>15(base 9) = 16<br/>15(base 8) = 17<br/>15(base 7) = 21<br/>15(base 6) = 23<br/>15(base 5) = 30<br/>15(base 4) = 33<br/>15(base 3) = 120<br/>15(base 2) = 1111"; //explanation en
                        dbExpln[ 113][2] = "15(baza 15) = 10<br/>15(baza 14) = 11<br/>15(baza 13) = 12<br/>15(baza 12) = 13<br/>15(baza 11) = 14<br/>15(baza 10) = 15<br/>15(baza 9) = 16<br/>15(baza 8) = 17<br/>15(baza 7) = 21<br/>15(baza 6) = 23<br/>15(baza 5) = 30<br/>15(baza 4) = 33<br/>15(baza 3) = 120<br/>15(baza 2) = 1111"; //explanation de
                        dbRefer[ 113] = [];
                        dbRefer[ 113][0] = "<a href='http://ro.wikipedia.org/wiki/Sistem_de_numera%C8%9Bie_pozi%C8%9Bional' target='_blank'>[1] ro.wikipedia.org/wiki/Sistem_de_numera&#x163;ie</a>"; //references for ro explanation
                        dbRefer[ 113][1] = "<a href='http://en.wikipedia.org/wiki/Positional_notation' target='_blank'>[1] en.wikipedia.org/Positional_notation</a>"; //references for en explanation
                        dbRefer[ 113][2] = "<a href='http://de.wikipedia.org/wiki/Stellenwertsystem' target='_blank'>[1] de.wikipedia.org/Stellenwertsystem</a>"; //references for de explanation
                        dbQHint[ 113] = [];
                        dbQHint[ 113][0] = ""; //hint ro
                        dbQHint[ 113][1] = ""; //hint en
                        dbQHint[ 113][2] = ""; //hint de
                        dbQImage[113] = []; dbQImageSrc[113] = []; 
                        dbQImage[113][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[113][0] = "";
                        dbQImage[113][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[113][1] = "";
                        dbQImage[113][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[113][2] = "";
                        dbAImage[113] = [];							dbAImageSrc[113] = [];
                        dbAImage[113][0] = "Images/C1.Microchitze/Img113Base2.png";  dbAImageSrc[113][0] = "images.1233.tw";
                        dbAImage[113][1] = "Images/C1.Microchitze/Img113Base2.png";  dbAImageSrc[113][1] = "images.1233.tw";
                        dbAImage[113][2] = "Images/C1.Microchitze/Img113Base2.png";  dbAImageSrc[113][2] = "images.1233.tw";
dbQList[ 114] = [];
dbQList[ 114][0] = "Ce urmeaz&#x103; dup&#x103;: <br/>... F9, O8, N7, C6, B5, ?";  
dbQList[ 114][1] = "What comes next: <br/>... F9, O8, N7, C6, B5, ?"; 
dbQList[ 114][2] = "Was kommt als n&#228;chstes: <br/>... F9, O8, N7, C6, B5, ?"; 
                        dbAType[ 114] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 114] = []; dbAList[114][0] = "Be4";
                        dbACrit[ 114] = []; dbACrit[114][0] = 0;
                        dbAnswer[114] = [];
                        dbAnswer[114][0] = "R&#x103;spuns corect: Be4"; //plaintext ro answer
                        dbAnswer[114][1] = "Right answer: Be4"; //plaintext en answer
                        dbAnswer[114][2] = "Richtige Antwort: Be4"; //plaintext de answer
                        dbExpln[ 114] = [];
                        dbExpln[ 114][0] = "F9: Fluor <br/>O8: Oxigen <br/>N7: Azot <br/>C6: Carbon <br/>B5: Bor<br/>Be4: Beriliu"; //explanation ro
                        dbExpln[ 114][1] = "F9: Fluorine <br/>O8: Oxygen <br/>N7: Nitrogen <br/>C6: Carbon <br/>B5: Boron<br/>Be4: Beryllium"; //explanation en
                        dbExpln[ 114][2] = "F9: Fluor <br/>O8: Sauerstoff <br/>N7: Stickstoff <br/>C6: Kohlenstoff <br/>B5: Bor<br/>Be4: Beryllium"; //explanation de
                        dbRefer[ 114] = [];
                        dbRefer[ 114][0] = ""; //references for ro explanation
                        dbRefer[ 114][1] = ""; //references for en explanation
                        dbRefer[ 114][2] = ""; //references for de explanation
                        dbQHint[ 114] = [];
                        dbQHint[ 114][0] = ""; //hint ro
                        dbQHint[ 114][1] = ""; //hint en
                        dbQHint[ 114][2] = ""; //hint de
                        dbQImage[114] = []; dbQImageSrc[114] = []; 
                        dbQImage[114][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[114][0] = "";
                        dbQImage[114][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[114][1] = "";
                        dbQImage[114][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[114][2] = "";
                        dbAImage[114] = [];							dbAImageSrc[114] = [];
                        dbAImage[114][0] = "Images/C1.Microchitze/Img114Z.png";  dbAImageSrc[114][0] = "www.grand-theory.com";
                        dbAImage[114][1] = "Images/C1.Microchitze/Img114Z.png";  dbAImageSrc[114][1] = "www.grand-theory.com";
                        dbAImage[114][2] = "Images/C1.Microchitze/Img114Z.png";  dbAImageSrc[114][2] = "www.grand-theory.com";
dbQList[ 115] = [];
dbQList[ 115][0] = "Ce urmeaz&#x103; dup&#x103;: <br/> A, E, F, H, I, K, L, M, N, ?";  
dbQList[ 115][1] = "What comes next: <br/> A, E, F, H, I, K, L, M, N, ?";  
dbQList[ 115][2] = "Was kommt als n&#228;chstes: <br/> A, E, F, H, I, K, L, M, N, ?";
                        dbAType[ 115] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 115] = []; dbAList[115][0] = "T";
                        dbACrit[ 115] = []; dbACrit[115][0] = 0;
                        dbAnswer[115] = [];
                        dbAnswer[115][0] = "R&#x103;spuns corect: T"; //plaintext ro answer
                        dbAnswer[115][1] = "Right answer: T"; //plaintext en answer
                        dbAnswer[115][2] = "Richtige Antwort: T"; //plaintext de answer
                        dbExpln[ 115] = [];
                        dbExpln[ 115][0] = "T este urm&#x103;toarea liter&#x103; mare scris&#x103; doar cu linii drepte."; //explanation ro
                        dbExpln[ 115][1] = "T is the next capital letter written only with straight lines."; //explanation en
                        dbExpln[ 115][2] = "T ist der n&#228;chste Gro&#223;buchstabe geschrieben ausschlie&#223;lich mit gerade Linien."; //explanation de
                        dbRefer[ 115] = [];
                        dbRefer[ 115][0] = ""; //references for ro explanation
                        dbRefer[ 115][1] = ""; //references for en explanation
                        dbRefer[ 115][2] = ""; //references for de explanation
                        dbQHint[ 115] = [];
                        dbQHint[ 115][0] = ""; //hint ro
                        dbQHint[ 115][1] = ""; //hint en
                        dbQHint[ 115][2] = ""; //hint de
                        dbQImage[115] = []; dbQImageSrc[115] = []; 
                        dbQImage[115][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[115][0] = "";
                        dbQImage[115][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[115][1] = "";
                        dbQImage[115][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[115][2] = "";
                        dbAImage[115] = [];							dbAImageSrc[115] = [];
                        dbAImage[115][0] = "Images/C1.Microchitze/Img115T.png";  dbAImageSrc[115][0] = "en.wikipedia.org";
                        dbAImage[115][1] = "Images/C1.Microchitze/Img115T.png";  dbAImageSrc[115][1] = "en.wikipedia.org";
                        dbAImage[115][2] = "Images/C1.Microchitze/Img115T.png";  dbAImageSrc[115][2] = "en.wikipedia.org";
dbQList[ 116] = [];
dbQList[ 116][0] = "Ce urmeaz&#x103; dup&#x103;: <br/> U, D, T, P, C, S, S, O, ?"; 
dbQList[ 116][1] = "What comes next: <br/> O, T, T, F, F, S, S, E, ?";  
dbQList[ 116][2] = "Was kommt als n&#228;chstes: <br/> E, Z, D, V, F, S, S, A, ?";
                        dbAType[ 116] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 116] = []; dbAList[116][0] = "N";  
                        dbACrit[ 116] = []; dbACrit[116][0] = 0;
                        dbAnswer[116] = [];
                        dbAnswer[116][0] = "R&#x103;spuns corect: N"; //plaintext ro answer
                        dbAnswer[116][1] = "Right answer: N"; //plaintext en answer
                        dbAnswer[116][2] = "Richtige Antwort: N"; //plaintext de answer
                        dbExpln[ 116] = [];
                        dbExpln[ 116][0] = "Unu, Doi, Trei, Patru, Cinci, &#x15E;ase, &#x15E;apte, Opt, Nou&#x103;, ..."; //explanation ro
                        dbExpln[ 116][1] = "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, ..."; //explanation en
                        dbExpln[ 116][2] = "Eins, Zwei, Drei, Vier, F&#252;nf, Sechs, Sieben, Acht, Neun, ..."; //explanation de
                        dbRefer[ 116] = [];
                        dbRefer[ 116][0] = ""; //references for ro explanation
                        dbRefer[ 116][1] = ""; //references for en explanation
                        dbRefer[ 116][2] = ""; //references for de explanation
                        dbQHint[ 116] = [];
                        dbQHint[ 116][0] = ""; //hint ro
                        dbQHint[ 116][1] = ""; //hint en
                        dbQHint[ 116][2] = ""; //hint de
                        dbQImage[116] = []; dbQImageSrc[116] = []; 
                        dbQImage[116][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[116][0] = "";
                        dbQImage[116][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[116][1] = "";
                        dbQImage[116][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[116][2] = "";
                        dbAImage[116] = [];							dbAImageSrc[116] = [];
                        dbAImage[116][0] = "Images/C1.Microchitze/Img116Numbers.png";  dbAImageSrc[116][0] = "www.wikiart.org";
                        dbAImage[116][1] = "Images/C1.Microchitze/Img116Numbers.png";  dbAImageSrc[116][1] = "www.wikiart.org";
                        dbAImage[116][2] = "Images/C1.Microchitze/Img116Numbers.png";  dbAImageSrc[116][2] = "www.wikiart.org";
dbQList[ 117] = [];
dbQList[ 117][0] = "Ce lipse&#x15F;te?<br/> d c m _ n p f a z y ";   
dbQList[ 117][1] = "What is missing?<br/> d c m _ n p f a z y ";  
dbQList[ 117][2] = "Was fehlt?<br/> d c m _ n p f a z y "; 
                        dbAType[ 117] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 117] = []; dbAList[117][0] = "m";
                        dbACrit[ 117] = []; dbACrit[117][0] = 1;
                        dbAnswer[117] = [];
                        dbAnswer[117][0] = "R&#x103;spuns corect: m (sau &#956;)"; //plaintext ro answer
                        dbAnswer[117][1] = "Right answer: m (or &#956;)"; //plaintext en answer
                        dbAnswer[117][2] = "Richtige Antwort: m (oder &#956;)"; //plaintext de answer
                        dbExpln[ 117] = [];
                        dbExpln[ 117][0] = "deci-, centi-, mili-, micro-, nano-, pico-, femto-, atto-, zepto-, yocto-"; //explanation ro
                        dbExpln[ 117][1] = "deci-, centi-, milli-, micro-, nano-, pico-, femto-, atto-, zepto-, yocto-"; //explanation en
                        dbExpln[ 117][2] = "dezi-, zenti-, milli-, mikro-, nano-, piko-, femto-, atto-, zepto-, yokto-"; //explanation de
                        dbRefer[ 117] = [];
                        dbRefer[ 117][0] = "<a href='http://ro.wikipedia.org/wiki/Prefix_SI' target='_blank'>[1] ro.wikipedia.org/Prefix_SI</a>"; //references for ro explanation
                        dbRefer[ 117][1] = "<a href='http://en.wikipedia.org/wiki/Metric_prefix' target='_blank'>[1] en.wikipedia.org/Metric_prefix</a>"; //references for en explanation
                        dbRefer[ 117][2] = "<a href='http://de.wikipedia.org/wiki/Vors%C3%A4tze_f%C3%BCr_Ma%C3%9Feinheiten' target='_blank'>[1] de.wikipedia.org/Vors&#228;tze</a>"; //references for de explanation
                        dbQHint[ 117] = [];
                        dbQHint[ 117][0] = ""; //hint ro
                        dbQHint[ 117][1] = ""; //hint en
                        dbQHint[ 117][2] = ""; //hint de
                        dbQImage[117] = []; dbQImageSrc[117] = []; 
                        dbQImage[117][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[117][0] = "";
                        dbQImage[117][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[117][1] = "";
                        dbQImage[117][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[117][2] = "";
                        dbAImage[117] = [];							dbAImageSrc[117] = [];
                        dbAImage[117][0] = "Images/C1.Microchitze/Img117Prefixes.png";  dbAImageSrc[117][0] = "slideplayer.us";
                        dbAImage[117][1] = "Images/C1.Microchitze/Img117Prefixes.png";  dbAImageSrc[117][1] = "slideplayer.us";
                        dbAImage[117][2] = "Images/C1.Microchitze/Img117Prefixes.png";  dbAImageSrc[117][2] = "slideplayer.us";
dbQList[ 118] = [];
dbQList[ 118][0] = "Ce lipse&#x15F;te?<br/> V I I I I X X _ I X I I X I I I X I V";   
dbQList[ 118][1] = "What is missing?<br/> V I I I I X X _ I X I I X I I I X I V";  
dbQList[ 118][2] = "Was fehlt?<br/> V I I I I X X _ I X I I X I I I X I V";
                        dbAType[ 118] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 118] = []; dbAList[118][0] = "X"; 
                        dbACrit[ 118] = []; dbACrit[118][0] = 0; 
                        dbAnswer[118] = [];
                        dbAnswer[118][0] = "R&#x103;spuns corect: X"; //plaintext ro answer
                        dbAnswer[118][1] = "Right answer: X"; //plaintext en answer
                        dbAnswer[118][2] = "Richtige Antwort: X"; //plaintext de answer
                        dbExpln[ 118] = [];
                        dbExpln[ 118][0] = "VIII IX X <u>X</u>I XII XIII XIV"; //explanation ro
                        dbExpln[ 118][1] = "VIII IX X <u>X</u>I XII XIII XIV"; //explanation en
                        dbExpln[ 118][2] = "VIII IX X <u>X</u>I XII XIII XIV"; //explanation de
                        dbRefer[ 118] = [];
                        dbRefer[ 118][0] = ""; //references for ro explanation
                        dbRefer[ 118][1] = ""; //references for en explanation
                        dbRefer[ 118][2] = ""; //references for de explanation
                        dbQHint[ 118] = [];
                        dbQHint[ 118][0] = ""; //hint ro
                        dbQHint[ 118][1] = ""; //hint en
                        dbQHint[ 118][2] = ""; //hint de
                        dbQImage[118] = []; dbQImageSrc[118] = []; 
                        dbQImage[118][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[118][0] = "";
                        dbQImage[118][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[118][1] = "";
                        dbQImage[118][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[118][2] = "";
                        dbAImage[118] = [];							dbAImageSrc[118] = [];
                        dbAImage[118][0] = "Images/C1.Microchitze/Img118Roman.png";  dbAImageSrc[118][0] = "risingcaren.hubpages.com";
                        dbAImage[118][1] = "Images/C1.Microchitze/Img118Roman.png";  dbAImageSrc[118][1] = "risingcaren.hubpages.com";
                        dbAImage[118][2] = "Images/C1.Microchitze/Img118Roman.png";  dbAImageSrc[118][2] = "risingcaren.hubpages.com";
dbQList[ 119] = [];
dbQList[ 119][0] = "Ce lipse&#x15F;te?<br/> A A A A _ A A A A A A U U";    
dbQList[ 119][1] = "What is missing?<br/> A A A A _ A A A A A A U U";  
dbQList[ 119][2] = "Was fehlt?<br/> A A A A _ A A A A A A U U";
                        dbAType[ 119] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 119] = []; dbAList[119][0] = "N";
                        dbACrit[ 119] = []; dbACrit[119][0] = 0;
                        dbAnswer[119] = [];
                        dbAnswer[119][0] = "R&#x103;spuns corect: N"; //plaintext ro answer
                        dbAnswer[119][1] = "Right answer: N"; //plaintext en answer
                        dbAnswer[119][2] = "Richtige Antwort: N"; //plaintext de answer
                        dbExpln[ 119] = [];
                        dbExpln[ 119][0] = "ALF<u>A</u> BET<u>A</u> GAMM<u>A</u> DELT<u>A</u> <b>EPSILO<u>N</u></b> ZET<u>A</u> ET<u>A</u> THET<u>A</u> IOT<u>A</u> KAPP<u>A</u> ..."; //explanation ro
                        dbExpln[ 119][1] = "ALPH<u>A</u> BET<u>A</u> GAMM<u>A</u> DELT<u>A</u> <b>EPSILO<u>N</u></b> ZET<u>A</u> ET<u>A</u> THET<u>A</u> IOT<u>A</u> KAPP<u>A</u> ..."; //explanation en
                        dbExpln[ 119][2] = "ALPH<u>A</u> BET<u>A</u> GAMM<u>A</u> DELT<u>A</u> <b>EPSILO<u>N</u></b> ZET<u>A</u> ET<u>A</u> THET<u>A</u> IOT<u>A</u> KAPP<u>A</u> ..."; //explanation de
                        dbRefer[ 119] = [];
                        dbRefer[ 119][0] = ""; //references for ro explanation
                        dbRefer[ 119][1] = ""; //references for en explanation
                        dbRefer[ 119][2] = ""; //references for de explanation
                        dbQHint[ 119] = [];
                        dbQHint[ 119][0] = "Pont: Nu este A..."; //hint ro
                        dbQHint[ 119][1] = "Hint: It is not A..."; //hint en
                        dbQHint[ 119][2] = "Hinweis: Es ist nicht A..."; //hint de
                        dbQImage[119] = []; dbQImageSrc[119] = []; 
                        dbQImage[119][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[119][0] = "";
                        dbQImage[119][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[119][1] = "";
                        dbQImage[119][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[119][2] = "";
                        dbAImage[119] = [];							dbAImageSrc[119] = [];
                        dbAImage[119][0] = "Images/C1.Microchitze/Img119Greek.png";  dbAImageSrc[119][0] = "www.1728.org";
                        dbAImage[119][1] = "Images/C1.Microchitze/Img119Greek.png";  dbAImageSrc[119][1] = "www.1728.org";
                        dbAImage[119][2] = "Images/C1.Microchitze/Img119Greek.png";  dbAImageSrc[119][2] = "www.1728.org";
                    
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX A ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 120] = [];
dbQList[ 120][0] = "C&#xE2;te sferturi are o jum&#x103;tate de biscuite?"; 
dbQList[ 120][1] = "How many quarters does half a buscuit have?"; 
dbQList[ 120][2] = "Wie viele Viertel hat ein halbes Keks?"; 
                        dbAType[ 120] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 120] = []; dbAList[120][0] = 4;
                        dbACrit[ 120] = []; dbACrit[120][0] = 20;
                        dbAnswer[120] = [];
                        dbAnswer[120][0] = "R&#x103;spuns corect: 4"; //plaintext ro answer
                        dbAnswer[120][1] = "Right answer: 4"; //plaintext en answer
                        dbAnswer[120][2] = "Richtige Antwort: 4"; //plaintext de answer
                        dbExpln[ 120] = [];
                        dbExpln[ 120][0] = "Orice are 4 sferturi, inclusiv o jum&#x103;tate de biscuite."; //explanation ro
                        dbExpln[ 120][1] = "Everything has 4 quarters, including the half-biscuit."; //explanation en
                        dbExpln[ 120][2] = "Alles hat 4 Viertel, einschlie&#223;lich das halbe Keks."; //explanation de
                        dbRefer[ 120] = [];
                        dbRefer[ 120][0] = ""; //references for ro explanation
                        dbRefer[ 120][1] = ""; //references for en explanation
                        dbRefer[ 120][2] = ""; //references for de explanation
                        dbQHint[ 120] = [];
                        dbQHint[ 120][0] = ""; //hint ro
                        dbQHint[ 120][1] = ""; //hint en
                        dbQHint[ 120][2] = ""; //hint de
                        dbQImage[120] = []; dbQImageSrc[120] = []; 
                        dbQImage[120][0] = "Images/C1.Microchitze/Img120BiscuitArt.png";	dbQImageSrc[120][0] = "www.traxsource.com";
                        dbQImage[120][1] = "Images/C1.Microchitze/Img120BiscuitArt.png";	dbQImageSrc[120][1] = "www.traxsource.com";
                        dbQImage[120][2] = "Images/C1.Microchitze/Img120BiscuitArt.png";	dbQImageSrc[120][2] = "www.traxsource.com";
                        dbAImage[120] = [];							  dbAImageSrc[120] = [];
                        dbAImage[120][0] = "Images/C1.Microchitze/Img120Biscuit.png";  dbAImageSrc[120][0] = "johnlew123.blogspot.com";
                        dbAImage[120][1] = "Images/C1.Microchitze/Img120Biscuit.png";  dbAImageSrc[120][1] = "johnlew123.blogspot.com";
                        dbAImage[120][2] = "Images/C1.Microchitze/Img120Biscuit.png";  dbAImageSrc[120][2] = "johnlew123.blogspot.com";
dbQList[ 121] = [];
dbQList[ 121][0] = "Cat a durat razboiul de 100 de ani?";  
dbQList[ 121][1] = "How long did the hundred years war last?"; 
dbQList[ 121][2] = "Wie lange dauerte der Hundertj&#xE4;hrige Krieg?"; 
                        dbAType[ 121] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 121] = []; dbAList[121][0] = 116; dbAList[121][1] = 117;
                        dbACrit[ 121] = []; dbACrit[121][0] = 23;
                        dbAnswer[121] = [];
                        dbAnswer[121][0] = "R&#x103;spuns corect: 116 ani (1337-1453)"; //plaintext ro answer
                        dbAnswer[121][1] = "Right answer: 116 years (1337-1453)"; //plaintext en answer
                        dbAnswer[121][2] = "Richtige Antwort: 116 Jahren (1337-1453)"; //plaintext de answer
                        dbExpln[ 121] = [];
                        dbExpln[ 121][0] = ""; //explanation ro
                        dbExpln[ 121][1] = ""; //explanation en
                        dbExpln[ 121][2] = ""; //explanation de
                        dbRefer[ 121] = [];
                        dbRefer[ 121][0] = ""; //references for ro explanation
                        dbRefer[ 121][1] = ""; //references for en explanation
                        dbRefer[ 121][2] = ""; //references for de explanation
                        dbQHint[ 121] = [];
                        dbQHint[ 121][0] = ""; //hint ro
                        dbQHint[ 121][1] = ""; //hint en
                        dbQHint[ 121][2] = ""; //hint de
                        dbQImage[121] = []; dbQImageSrc[121] = []; 
                        dbQImage[121][0] = "Images/C1.Microchitze/Img121HundredYearsWar.png";	dbQImageSrc[121][0] = "wordinfo.info";
                        dbQImage[121][1] = "Images/C1.Microchitze/Img121HundredYearsWar.png";	dbQImageSrc[121][1] = "wordinfo.info";
                        dbQImage[121][2] = "Images/C1.Microchitze/Img121HundredYearsWar.png";	dbQImageSrc[121][2] = "wordinfo.info";
                        dbAImage[121] = [];							dbAImageSrc[121] = [];
                        dbAImage[121][0] = "Images/C1.Microchitze/Img121HundredYearsWar.png";  dbAImageSrc[121][0] = "wordinfo.info";
                        dbAImage[121][1] = "Images/C1.Microchitze/Img121HundredYearsWar.png";  dbAImageSrc[121][1] = "wordinfo.info";
                        dbAImage[121][2] = "Images/C1.Microchitze/Img121HundredYearsWar.png";  dbAImageSrc[121][2] = "wordinfo.info";
dbQList[ 122] = [];
dbQList[ 122][0] = "Care era numele mijlociu al lui Harry S. Truman?";  
dbQList[ 122][1] = "What was Harry S. Truman's middle name?"; 
dbQList[ 122][2] = "Was war Harry S. Trumans zweiter Vorname?"; 
                        dbAType[ 122] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 122] = []; dbAList[122][0] = "S"; dbAList[122][1] = "S.";
                        dbACrit[ 122] = []; dbACrit[122][0] = 10; dbACrit[122][1] = 10; 
                        dbAnswer[122] = [];
                        dbAnswer[122][0] = "R&#x103;spuns corect: S"; //plaintext ro answer
                        dbAnswer[122][1] = "Right answer: S"; //plaintext en answer
                        dbAnswer[122][2] = "Richtige Antwort: S"; //plaintext de answer
                        dbExpln[ 122] = [];
                        dbExpln[ 122][0] = "Parin&#x163;ii lui Truman nu i-au ales propriu-zis un al doilea nume de botez, adaug&#xE2;ndu-i doar ini&#x163;iala \"S\" pentru a-i mul&#x163;umi pe ambii s&#x103;i bunici, Anderson Shipp Truman &#x15F;i Solomon Young. Litera \"S\" nu abreviaz&#x103; un cuv&#xE2;nt anume, practic&#x103; frecvent&#x103; la popula&#x163;ia de origine sco&#x163;iano-irlandez&#x103;.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 122][1] = "Truman's parents chose \"S\" as his middle initial to please both of his grandfathers, Anderson Shipp Truman and Solomon Young. The \"S\" did not stand for anything, a common practice among the Scots-Irish.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 122][2] = "Da sich Trumans Eltern nicht entscheiden konnten, ob sie den Mittelnamen Shippe oder Solomon w&#228;hlen sollten, verwendeten sie blo&#223; das Initial. Obwohl das \"S\" somit keine Abk&#252;rzung ist, setzte Truman selbst einen Punkt dahinter.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 122] = [];
                        dbRefer[ 122][0] = "<a href='http://ro.wikipedia.org/wiki/Harry_S._Truman' target='_blank'>[1] ro.wikipedia.org/Truman</a>"; //references for ro explanation
                        dbRefer[ 122][1] = "<a href='http://en.wikipedia.org/wiki/Harry_S._Truman' target='_blank'>[1] en.wikipedia.org/Truman</a>"; //references for en explanation
                        dbRefer[ 122][2] = "<a href='http://de.wikipedia.org/wiki/Harry_S._Truman' target='_blank'>[1] de.wikipedia.org/Truman</a>"; //references for de explanation
                        dbQHint[ 122] = [];
                        dbQHint[ 122][0] = ""; //hint ro
                        dbQHint[ 122][1] = ""; //hint en
                        dbQHint[ 122][2] = ""; //hint de
                        dbQImage[122] = []; dbQImageSrc[122] = []; 
                        dbQImage[122][0] = "Images/C1.Microchitze/Img122TrumanStamp.png";	dbQImageSrc[122][0] = "en.wikipedia.org";
                        dbQImage[122][1] = "Images/C1.Microchitze/Img122TrumanStamp.png";	dbQImageSrc[122][1] = "en.wikipedia.org";
                        dbQImage[122][2] = "Images/C1.Microchitze/Img122TrumanStamp.png";	dbQImageSrc[122][2] = "en.wikipedia.org";
                        dbAImage[122] = [];							dbAImageSrc[122] = [];
                        dbAImage[122][0] = "Images/C1.Microchitze/Img122TrumanSign.png";  dbAImageSrc[122][0] = "commons.wikimedia.org";
                        dbAImage[122][1] = "Images/C1.Microchitze/Img122TrumanSign.png";  dbAImageSrc[122][1] = "commons.wikimedia.org";
                        dbAImage[122][2] = "Images/C1.Microchitze/Img122TrumanSign.png";  dbAImageSrc[122][2] = "commons.wikimedia.org";
dbQList[ 123] = [];
dbQList[ 123][0] = "Ce planet&#x103; a fost numit&#x103; George (Georgium Sidus) de c&#x103;tre cel care a descoperit-o? ";   
dbQList[ 123][1] = "Which planet was named George (Georgium Sidus) by its discoverer?"; 
dbQList[ 123][2] = "Welcher Planet wurde von seinem Entdecker George (Georgium Sidus) benannt?"; 
                        dbAType[ 123] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 123] = []; dbAList[123][0] = "Uran";
                        dbACrit[ 123] = []; dbACrit[123][0] = 13;
                        dbAnswer[123] = [];
                        dbAnswer[123][0] = "R&#x103;spuns corect: Uranus"; //plaintext ro answer
                        dbAnswer[123][1] = "Right answer: Uranus"; //plaintext en answer
                        dbAnswer[123][2] = "Richtige Antwort: Uranus"; //plaintext de answer
                        dbExpln[ 123] = [];
                        dbExpln[ 123][0] = "William Herschel a numit planeta \"Georgium Sidus\" &#xEE;n onoarea patronului s&#x103;u, Regele George al III-lea al Angliei; &#xEE;n Fran&#x163;a, astronomii foloseau numele \"Herschel\". Numele de \"Uranus\" a fost propus pentru prima dat&#x103; de Bode &#xEE;n conformitate cu numele celorlalte planete.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 123][1] = "William Herschel named the planet \"Georgium Sidus\" in honor of King George III of England. The name \"Uranus\" was first proposed by German astronomer Johann Elert Bode in order for it to be in conformity with the other planetary names. Bode argued that just as Saturn was the father of Jupiter, the new planet should be named after the father of Saturn.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 123][2] = "Mit Herschels Entdeckung des neuen Planeten begann eine &#252;ber sechzig Jahre dauernde Debatte um seine Benennung. William Herschel selbst benannte ihn zu Ehren des englischen K&#246;nigs Georg III. \"Georgium Sidus\". In Frankreich bezeichneten ihn die Astronomen als \"Herschel\", bis Bode vorschlug, ihn nach dem griechischen Gott \"Uranos\" zu benennen.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 123] = [];
                        dbRefer[ 123][0] = "<a href='http://ro.wikipedia.org/wiki/Uranus' target='_blank'>[1] ro.wikipedia.org/Uranus</a>"; //references for ro explanation
                        dbRefer[ 123][1] = "<a href='http://en.wikipedia.org/wiki/Uranus' target='_blank'>[1] en.wikipedia.org/Uranus</a>"; //references for en explanation
                        dbRefer[ 123][2] = "<a href='http://de.wikipedia.org/wiki/Uranus_(Planet)' target='_blank'>[1] de.wikipedia.org/Uranus</a>"; //references for de explanation
                        dbQHint[ 123] = [];
                        dbQHint[ 123][0] = ""; //hint ro
                        dbQHint[ 123][1] = ""; //hint en
                        dbQHint[ 123][2] = ""; //hint de
                        dbQImage[123] = []; dbQImageSrc[123] = []; 
                        dbQImage[123][0] = "Images/C1.Microchitze/Img123George.png";	dbQImageSrc[123][0] = "faktoider.blogspot.com";
                        dbQImage[123][1] = "Images/C1.Microchitze/Img123George.png";	dbQImageSrc[123][1] = "faktoider.blogspot.com";
                        dbQImage[123][2] = "Images/C1.Microchitze/Img123George.png";	dbQImageSrc[123][2] = "faktoider.blogspot.com";
                        dbAImage[123] = [];							dbAImageSrc[123] = [];
                        dbAImage[123][0] = "Images/C1.Microchitze/Img123Uranus.png";  dbAImageSrc[123][0] = "becuo.com";
                        dbAImage[123][1] = "Images/C1.Microchitze/Img123Uranus.png";  dbAImageSrc[123][1] = "becuo.com";
                        dbAImage[123][2] = "Images/C1.Microchitze/Img123Uranus.png";  dbAImageSrc[123][2] = "becuo.com";
dbQList[ 124] = [];
dbQList[ 124][0] = "Care era prenumele naturalistului francez Georges Cuvier (1769-1832)?";  
dbQList[ 124][1] = "What was the given name of French naturalist George Cuvier (1769-1832)?"; 
dbQList[ 124][2] = "Was war der Vorname des franz&#246;sischen Naturforscher Georges Cuvier (1769-1832)?"; 
                        dbAType[ 124] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 124] = []; dbAList[124][0] = "Leopold"; dbAList[124][1] = "Chretien";  dbAList[124][2] = "Frederic";  dbAList[124][3] = "Dagobert";
                        dbACrit[ 124] = []; dbACrit[124][0] = 13; dbACrit[124][1] = 13; dbACrit[124][2] = 13; dbACrit[124][3] = 13;
                        dbAnswer[124] = [];
                        dbAnswer[124][0] = "R&#x103;spuns corect: L&#233;opold Chr&#233;tien Fr&#233;d&#233;ric Dagobert"; //plaintext ro answer
                        dbAnswer[124][1] = "Right answer: L&#233;opold Chr&#233;tien Fr&#233;d&#233;ric Dagobert"; //plaintext en answer
                        dbAnswer[124][2] = "Richtige Antwort: L&#233;opold Chr&#233;tien Fr&#233;d&#233;ric Dagobert"; //plaintext de answer
                        dbExpln[ 124] = [];
                        dbExpln[ 124][0] = "El a preferat s&#x103; fie numit Georges Cuvier, de&#x15F;i nu era numele s&#x103;u oficial.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 124][1] = "He preferred to be called Georges Cuvier although it was not his legal name.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 124][2] = "Er zog es vor Georges Cuvier genannt zu werden, obwohl es nicht sein offizieller Name war.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 124] = [];
                        dbRefer[ 124][0] = "<a href='http://www.newworldencyclopedia.org/entry/Georges_Cuvier' target='_blank'>[1] www.newworldencyclopedia.org/Georges_Cuvier</a>"; //references for ro explanation
                        dbRefer[ 124][1] = "<a href='http://www.newworldencyclopedia.org/entry/Georges_Cuvier' target='_blank'>[1] www.newworldencyclopedia.org/Georges_Cuvier</a>"; //references for en explanation
                        dbRefer[ 124][2] = "<a href='http://www.newworldencyclopedia.org/entry/Georges_Cuvier' target='_blank'>[1] www.newworldencyclopedia.org/Georges_Cuvier</a>"; //references for de explanation
                        dbQHint[ 124] = [];
                        dbQHint[ 124][0] = ""; //hint ro
                        dbQHint[ 124][1] = ""; //hint en
                        dbQHint[ 124][2] = ""; //hint de
                        dbQImage[124] = []; dbQImageSrc[124] = []; 
                        dbQImage[124][0] = "Images/C1.Microchitze/Img124Cuvier.png";	dbQImageSrc[124][0] = "yooniqimages.com";
                        dbQImage[124][1] = "Images/C1.Microchitze/Img124Cuvier.png";	dbQImageSrc[124][1] = "yooniqimages.com";
                        dbQImage[124][2] = "Images/C1.Microchitze/Img124Cuvier.png";	dbQImageSrc[124][2] = "yooniqimages.com";
                        dbAImage[124] = [];							dbAImageSrc[124] = [];
                        dbAImage[124][0] = "Images/C1.Microchitze/Img124Cuvier.png";  dbAImageSrc[124][0] = "yooniqimages.com";
                        dbAImage[124][1] = "Images/C1.Microchitze/Img124Cuvier.png";  dbAImageSrc[124][1] = "yooniqimages.com";
                        dbAImage[124][2] = "Images/C1.Microchitze/Img124Cuvier.png";  dbAImageSrc[124][2] = "yooniqimages.com";
dbQList[ 125] = [];
dbQList[ 125][0] = "De unde vine numele elementului chimic Cobalt?";  
dbQList[ 125][1] = "Where does the name of element Cobalt come from?";  
dbQList[ 125][2] = "Woher kommt der Name des Elements Cobalt (Kobalt)?";
                        dbAType[ 125] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 125] = []; dbAList[125][0] = "kobold"; dbAList[125][1] = "kobald"; dbAList[125][2] = "goblin"; dbAList[125][3] = "spiri"; //evil_spirit; spiridus
                        dbACrit[ 125] = []; dbACrit[125][0] = 13; dbACrit[125][1] = 13; dbACrit[125][2] = 13; dbACrit[125][3] = 13;
                        dbAnswer[125] = [];
                        dbAnswer[125][0] = "R&#x103;spuns corect: Kobold (spiridu&#x15F;)"; //plaintext ro answer
                        dbAnswer[125][1] = "Right answer: Kobold (goblin)"; //plaintext en answer
                        dbAnswer[125][2] = "Richtige Antwort: Kobold"; //plaintext de answer
                        dbExpln[ 125] = [];
                        dbExpln[ 125][0] = "Numele Cobalt provine din cuv&#xE2;ntul german \"Kobold\", &#xEE;nsemn&#xE2;nd \"spiridu&#x15F;\" sau \"spirit r&#x103;u\". &#xCE;n evul mediu, minereurile de cobalt erau adesea confundate cu minereuri de argint sau cupru. Dar, deoarece minereurile de cobalt nu puteau fi prelucrate, iar prin topire produceau gaze ur&#xE2;t mirositoare &#x15F;i toxice (datorit&#x103; con&#x163;inutului de arseniu), s-a crezut c&#x103; sunt vr&#x103;jite, c&#x103; spiridu&#x15F;ii (Kobold) au furat argintul pre&#x163;ios &#x15F;i au l&#x103;sat &#xEE;n locul lui minereuri argintii f&#x103;r&#x103; valoare.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 125][1] = "The word cobalt is derived from the German \"Kobold\" meaning \"goblin\", a superstitious term used for the ore of cobalt by miners. The first attempts at smelting these ores to produce metals such as copper or nickel failed, yielding simply powder (cobalt<sub>II</sub> oxide: CoO) instead. Also, because the primary ores of cobalt always contain arsenic, smelting the ore oxidized the arsenic content into the highly toxic and volatile arsenic oxide, which also decreased the reputation of the ore for the miners.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 125][2] = "Cobalterze und Cobaltverbindungen sind schon seit sehr langer Zeit bekannt und wurden vorwiegend zum F&#228;rben von Glas und Keramik verwendet (Cobaltblau). Im Mittelalter wurden sie h&#228;ufig f&#252;r wertvolle Silber- und Kupfererze gehalten. Da sie sich aber nicht verarbeiten lie&#223;en und wegen des Arsengehalts beim Erhitzen schlechte Ger&#252;che abgaben und toxisch waren, wurden sie als verhext angesehen. Angeblich h&#228;tten Kobolde das kostbare Silber aufgefressen und an seiner Stelle wertlosere silberfarbene Erze ausgeschieden.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 125] = [];
                        dbRefer[ 125][0] = "<a href='http://en.wikipedia.org/wiki/Cobalt' target='_blank'>[1] en.wikipedia.org/Cobalt</a>"; //references for ro explanation
                        dbRefer[ 125][1] = "<a href='http://en.wikipedia.org/wiki/Cobalt' target='_blank'>[1] en.wikipedia.org/Cobalt</a>"; //references for en explanation
                        dbRefer[ 125][2] = "<a href='http://de.wikipedia.org/wiki/Cobalt' target='_blank'>[1] de.wikipedia.org/Cobalt</a>"; //references for de explanation
                        dbQHint[ 125] = [];
                        dbQHint[ 125][0] = ""; //hint ro
                        dbQHint[ 125][1] = ""; //hint en
                        dbQHint[ 125][2] = ""; //hint de
                        dbQImage[125] = []; dbQImageSrc[125] = []; 
                        dbQImage[125][0] = "Images/C1.Microchitze/Img125Cobalt.png";	dbQImageSrc[125][0] = "www.easycalculation.com";
                        dbQImage[125][1] = "Images/C1.Microchitze/Img125Cobalt.png";	dbQImageSrc[125][1] = "www.easycalculation.com";
                        dbQImage[125][2] = "Images/C1.Microchitze/Img125Cobalt.png";	dbQImageSrc[125][2] = "www.easycalculation.com";
                        dbAImage[125] = [];							dbAImageSrc[125] = [];
                        dbAImage[125][0] = "Images/C1.Microchitze/Img125Kobold.png";  dbAImageSrc[125][0] = "finanznews-blog.de";
                        dbAImage[125][1] = "Images/C1.Microchitze/Img125Kobold.png";  dbAImageSrc[125][1] = "finanznews-blog.de";
                        dbAImage[125][2] = "Images/C1.Microchitze/Img125Kobold.png";  dbAImageSrc[125][2] = "finanznews-blog.de";
dbQList[ 126] = [];
dbQList[ 126][0] = "Ce culoare are cutia neagr&#x103; a avioanelor?"; 
dbQList[ 126][1] = "What colour is a plane's black box?";  
dbQList[ 126][2] = "Welche Farbe hat die Blackbox in Flugzeuge?";
                        dbAType[ 126] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 126] = []; dbAList[126][0] = "orange"; dbAList[126][1] = "portocal";
                        dbACrit[ 126] = []; dbACrit[126][0] = 13; dbACrit[126][1] = 13;
                        dbAnswer[126] = [];
                        dbAnswer[126][0] = "R&#x103;spuns corect: portocalie"; //plaintext ro answer
                        dbAnswer[126][1] = "Right answer: orange"; //plaintext en answer
                        dbAnswer[126][2] = "Richtige Antwort: orange"; //plaintext de answer
                        dbExpln[ 126] = [];
                        dbExpln[ 126][0] = "&#xCE;nregistratoarele de zbor nu sunt negre, ci viu colorate (cel mai adesea portocaliu), deoarece scopul lor este de a fi v&#x103;zute &#x15F;i recuperate dup&#x103; accidente.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 126][1] = "The term \"flight recorder\" is more precise, and the popular synonym \"black box\" is used only informally. The recorders are not black in color, but usually bright orange, as they are intended to be spotted and recovered after incidents.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 126][2] = "Heutige Flugschreiber Modelle sind jeweils etwa so gro&#223; wie ein Schuhkarton und in auff&#228;lligem Leuchtorange gef&#228;rbt.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 126] = [];
                        dbRefer[ 126][0] = "<a href='http://en.wikipedia.org/wiki/Flight_recorder' target='_blank'>[1] en.wikipedia.org/Flight_recorder</a>"; //references for ro explanation
                        dbRefer[ 126][1] = "<a href='http://en.wikipedia.org/wiki/Flight_recorder' target='_blank'>[1] en.wikipedia.org/Flight_recorder</a>"; //references for en explanation
                        dbRefer[ 126][2] = "<a href='http://de.wikipedia.org/wiki/Flugschreiber' target='_blank'>[1] de.wikipedia.org/Flugschreiber</a>"; //references for de explanation
                        dbQHint[ 126] = [];
                        dbQHint[ 126][0] = ""; //hint ro
                        dbQHint[ 126][1] = ""; //hint en
                        dbQHint[ 126][2] = ""; //hint de
                        dbQImage[126] = []; dbQImageSrc[126] = []; 
                        dbQImage[126][0] = "Images/C1.Microchitze/Img126Burnt.png";	dbQImageSrc[126][0] = "www.pinterest.com";
                        dbQImage[126][1] = "Images/C1.Microchitze/Img126Burnt.png";	dbQImageSrc[126][1] = "www.pinterest.com";
                        dbQImage[126][2] = "Images/C1.Microchitze/Img126Burnt.png";	dbQImageSrc[126][2] = "www.pinterest.com";
                        dbAImage[126] = [];							dbAImageSrc[126] = [];
                        dbAImage[126][0] = "Images/C1.Microchitze/Img126FlightRecorder.png";  dbAImageSrc[126][0] = "mentalfloss.com";
                        dbAImage[126][1] = "Images/C1.Microchitze/Img126FlightRecorder.png";  dbAImageSrc[126][1] = "mentalfloss.com";
                        dbAImage[126][2] = "Images/C1.Microchitze/Img126FlightRecorder.png";  dbAImageSrc[126][2] = "mentalfloss.com";
dbQList[ 127] = [];
dbQList[ 127][0] = "&#xCE;n ce &#x163;ara sunt produse p&#x103;l&#x103;riile de Panama autentice?";   
dbQList[ 127][1] = "In which country are the authentic Panama hats made?";  
dbQList[ 127][2] = "In welchem Land sind die echten Panamah&#252;te gemacht?"; 
                        dbAType[ 127] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 127] = []; dbAList[127][0] = "Ecuador"; dbAList[127][1] = "Ekuador";
                        dbACrit[ 127] = []; dbACrit[127][0] = 13; dbACrit[127][1] = 13;
                        dbAnswer[127] = [];
                        dbAnswer[127][0] = "R&#x103;spuns corect: Ecuador"; //plaintext ro answer
                        dbAnswer[127][1] = "Right answer: Ecuador"; //plaintext en answer
                        dbAnswer[127][2] = "Richtige Antwort: Ecuador"; //plaintext de answer
                        dbExpln[ 127] = [];
                        dbExpln[ 127][0] = "&#xCE;n secolele XIX &#x15F;i XX, p&#x103;l&#x103;riile ecuadoriene, ca multe alte produse sud-americane, erau transportate mai &#xEE;nt&#xE2;i la istmul Panama, de unde erau &#xEE;mbarcate c&#x103;tre destina&#x163;iile din Asia, America de Nord &#x15F;i Europa. Cu timpul, p&#x103;l&#x103;riile au ajuns s&#x103; fie cunoscute dup&#x103; numele locului de unde se cump&#x103;rau &#x15F;i nu dup&#x103; numele locului de origine.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 127][1] = "Straw hats woven in Ecuador, like many other 19th and early 20th century South American goods, were shipped first to the Isthmus of Panama before sailing for their destinations in Asia, the rest of the Americas and Europe, subsequently acquiring a name that reflected their point of international sale, \"Panama hats\", rather than their place of domestic origin.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 127][2] = "Vormals konnten G&#252;ter, die in S&#252;damerika ohne Mitwirkung von in den USA beheimateten Firmen produziert wurden, nicht direkt aus den Ursprungsl&#228;ndern in die USA eingef&#252;hrt werden. Zentrale Sammel- und Zollstelle f&#252;r deren USA-Import war allein Panama. Also trugen alle diese H&#252;te, aus welchem Land sie urspr&#252;nglich auch stammten, die Zollstempel aus Panama. Man nannte sie daher in den USA kurzerhand \"Panama hat\". Dieser Begriff hatte sich dann in mehreren Sprachen durchgesetzt.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 127] = [];
                        dbRefer[ 127][0] = "<a href='http://en.wikipedia.org/wiki/Panama_hat' target='_blank'>[1] en.wikipedia.org/Panama_hat</a>"; //references for ro explanation
                        dbRefer[ 127][1] = "<a href='http://en.wikipedia.org/wiki/Panama_hat' target='_blank'>[1] en.wikipedia.org/Panama_hat</a>"; //references for en explanation
                        dbRefer[ 127][2] = "<a href='http://de.wikipedia.org/wiki/Panama-Hut' target='_blank'>[1] de.wikipedia.org/Panama_Hut</a>"; //references for de explanation
                        dbQHint[ 127] = [];
                        dbQHint[ 127][0] = ""; //hint ro
                        dbQHint[ 127][1] = ""; //hint en
                        dbQHint[ 127][2] = ""; //hint de
                        dbQImage[127] = []; dbQImageSrc[127] = []; 
                        dbQImage[127][0] = "Images/C1.Microchitze/Img127PanamaHat.png";	dbQImageSrc[127][0] = "www.cnjtc.com";
                        dbQImage[127][1] = "Images/C1.Microchitze/Img127PanamaHat.png";	dbQImageSrc[127][1] = "www.cnjtc.com";
                        dbQImage[127][2] = "Images/C1.Microchitze/Img127PanamaHat.png";	dbQImageSrc[127][2] = "www.cnjtc.com";
                        dbAImage[127] = [];							dbAImageSrc[127] = [];
                        dbAImage[127][0] = "Images/C1.Microchitze/Img127PanamaHat.png";  dbAImageSrc[127][0] = "www.cnjtc.com";
                        dbAImage[127][1] = "Images/C1.Microchitze/Img127PanamaHat.png";  dbAImageSrc[127][1] = "www.cnjtc.com";
                        dbAImage[127][2] = "Images/C1.Microchitze/Img127PanamaHat.png";  dbAImageSrc[127][2] = "www.cnjtc.com";
dbQList[ 128] = [];
dbQList[ 128][0] = "Ce limb&#x103; are cel mai mare num&#x103;r de vorbitori?";   
dbQList[ 128][1] = "Which language has the greatest number of speakers?";  
dbQList[ 128][2] = "Welche Sprache hat die gr&#246;&#223;te Anzahl von Sprechern?";
                        dbAType[ 128] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 128] = []; dbAList[128][0] = "Chin";  dbAList[128][1] = "Mandarin"; 
                        dbACrit[ 128] = []; dbACrit[128][0] = 13; dbACrit[128][1] = 13; 
                        dbAnswer[128] = [];
                        dbAnswer[128][0] = "R&#x103;spuns corect: Chineza (Mandarin)"; //plaintext ro answer
                        dbAnswer[128][1] = "Right answer: Chinese (Mandarin)"; //plaintext en answer
                        dbAnswer[128][2] = "Richtige Antwort: Chinesisch (Mandarin)"; //plaintext de answer
                        dbExpln[ 128] = [];
                        dbExpln[ 128][0] = "Conform <i>Ethnologue (edi&#x163;ia a 17-a, 2013)</i>, chineza (Mandarin) are aproximativ 1030 de milioane de vorbitori, &#xEE;n timp ce engleza are doar circa 840 de milioane de vorbitori.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 128][1] = "According to <i>Ethnologue (17<sup>th</sup> edition, 2013)</i>, Mandarin Chinese has about 1030-million speakers (850-million native and 180-million secondary speakers), whereas English only has only about 840-million speakers (335-million native and 505-million secondary speakers).<sup>[1]</sup>"; //explanation en
                        dbExpln[ 128][2] = "Gem&#228;&#223; <i>Ethnologue (17. Edition, 2013)</i>, Mandarin-Chinesisch hat ungef&#228;hr 1030-Millionen Sprecher, w&#228;hrend Englisch hat nur etwa 840-Millionen Sprecher.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 128] = [];
                        dbRefer[ 128][0] = "<a href='http://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers' target='_blank'>[1] en.wikipedia.org/Speakers</a>"; //references for ro explanation
                        dbRefer[ 128][1] = "<a href='http://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers' target='_blank'>[1] en.wikipedia.org/Speakers</a>"; //references for en explanation
                        dbRefer[ 128][2] = "<a href='http://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers' target='_blank'>[1] en.wikipedia.org/Speakers</a>"; //references for de explanation
                        dbQHint[ 128] = [];
                        dbQHint[ 128][0] = ""; //hint ro
                        dbQHint[ 128][1] = ""; //hint en
                        dbQHint[ 128][2] = ""; //hint de
                        dbQImage[128] = []; dbQImageSrc[128] = []; 
                        dbQImage[128][0] = "Images/C1.Microchitze/Img128Languages.png";	dbQImageSrc[128][0] = "blog.internationalstudent.com";
                        dbQImage[128][1] = "Images/C1.Microchitze/Img128Languages.png";	dbQImageSrc[128][1] = "blog.internationalstudent.com";
                        dbQImage[128][2] = "Images/C1.Microchitze/Img128Languages.png";	dbQImageSrc[128][2] = "blog.internationalstudent.com";
                        dbAImage[128] = [];							dbAImageSrc[128] = [];
                        dbAImage[128][0] = "Images/C1.Microchitze/Img128Bars.png";  dbAImageSrc[128][0] = "www.statschat.org.nz";
                        dbAImage[128][1] = "Images/C1.Microchitze/Img128Bars.png";  dbAImageSrc[128][1] = "www.statschat.org.nz";
                        dbAImage[128][2] = "Images/C1.Microchitze/Img128Bars.png";  dbAImageSrc[128][2] = "www.statschat.org.nz";
dbQList[ 129] = [];
dbQList[ 129][0] = "C&#xE2;te p&#x103;trate sunt pe o tabl&#x103; de &#x15F;ah?";    
dbQList[ 129][1] = "How many squares are there on a chess board?";  
dbQList[ 129][2] = "Wie viele Quadrate gibt es auf einem Schachbrett?";
                        dbAType[ 129] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 129] = []; dbAList[129][0] = 204;
                        dbACrit[ 129] = []; dbACrit[129][0] = 20;
                        dbAnswer[129] = [];
                        dbAnswer[129][0] = "R&#x103;spuns corect: 204"; //plaintext ro answer
                        dbAnswer[129][1] = "Right answer: 204"; //plaintext en answer
                        dbAnswer[129][2] = "Richtige Antwort: 204"; //plaintext de answer
                        dbExpln[ 129] = [];
                        dbExpln[ 129][0] = "64 p&#x103;trate 1x1<br/>49 p&#x103;trate 2x2<br/>36 p&#x103;trate 3x3<br/>25 p&#x103;trate 4x4<br/>16 p&#x103;trate 5x5<br/> 9 p&#x103;trate 6x6<br/> 4 p&#x103;trate 7x7<br/> 1 p&#x103;trat 8x8"; //explanation ro
                        dbExpln[ 129][1] = "64 squares of dimensions 1x1<br/>49 squares of dimensions 2x2<br/>36 squares of dimensions 3x3<br/>25 squares of dimensions 4x4<br/>16 squares of dimensions 5x5<br/> 9 squares of dimensions 6x6<br/> 4 squares of dimensions 7x7<br/> 1 square of dimensions 8x8<br/>"; //explanation en
                        dbExpln[ 129][2] = "64 Quadrate 1x1<br/>49 Quadrate 2x2<br/>36 Quadrate 3x3<br/>25 Quadrate 4x4<br/>16 Quadrate 5x5<br/> 9 Quadrate 6x6<br/> 4 Quadrate 7x7<br/> 1 Quadrat 8x8";//explanation de
                        dbRefer[ 129] = [];
                        dbRefer[ 129][0] = ""; //references for ro explanation
                        dbRefer[ 129][1] = ""; //references for en explanation
                        dbRefer[ 129][2] = ""; //references for de explanation
                        dbQHint[ 129] = [];
                        dbQHint[ 129][0] = ""; //hint ro
                        dbQHint[ 129][1] = ""; //hint en
                        dbQHint[ 129][2] = ""; //hint de
                        dbQImage[129] = []; dbQImageSrc[129] = []; 
                        dbQImage[129][0] = "Images/C1.Microchitze/Img129Chessboard.png";	dbQImageSrc[129][0] = "extremelifechanger.com";
                        dbQImage[129][1] = "Images/C1.Microchitze/Img129Chessboard.png";	dbQImageSrc[129][1] = "extremelifechanger.com";
                        dbQImage[129][2] = "Images/C1.Microchitze/Img129Chessboard.png";	dbQImageSrc[129][2] = "extremelifechanger.com";
                        dbAImage[129] = [];							dbAImageSrc[129] = [];
                        dbAImage[129][0] = "Images/C1.Microchitze/Img129Squares.png";  dbAImageSrc[129][0] = "mathandmultimedia.com";
                        dbAImage[129][1] = "Images/C1.Microchitze/Img129Squares.png";  dbAImageSrc[129][1] = "mathandmultimedia.com";
                        dbAImage[129][2] = "Images/C1.Microchitze/Img129Squares.png";  dbAImageSrc[129][2] = "mathandmultimedia.com";
                    
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX B ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dbQList[ 130] = [];
dbQList[ 130][0] = "&#xCE;n medie, c&#xE2;te nop&#x163;i pe an poate fi vazut Luceaf&#x103;rul la miezul nop&#x163;ii?"; 
dbQList[ 130][1] = "On average, during how many nights a year can the evening star be seen at midnight?"; 
dbQList[ 130][2] = "Im Durchschnitt, w&#228;hrend wie viele N&#xE4;chte im Jahr kann der Abendstern am Mitternacht gesehen werden?"; 
                        dbAType[ 130] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 130] = []; dbAList[130][0] = 0;
                        dbACrit[ 130] = []; dbACrit[130][0] = 20;
                        dbAnswer[130] = [];
                        dbAnswer[130][0] = "R&#x103;spuns corect: 0"; //plaintext ro answer
                        dbAnswer[130][1] = "Right answer: 0"; //plaintext en answer
                        dbAnswer[130][2] = "Richtige Antwort: 0"; //plaintext de answer
                        dbExpln[ 130] = [];
                        dbExpln[ 130][0] = "Luceaf&#x103;rul este paneta Venus, care are o orbit&#x103; mai apropiat&#x103; de Soare dec&#xE2;t P&#x103;m&#xE2;ntul. De aceea, nu poate fi vazut&#x103; niciodat&#x103; la miezul nop&#x163;ii."; //explanation ro
                        dbExpln[ 130][1] = "The evening star is planet Venus, which has an orbit closer to the Sun than Earth. Therefore, it can never be seen at midnight."; //explanation en
                        dbExpln[ 130][2] = "Der Abendstern ist Planet Venus und hat eine Bahn n&#228;her an der Sonne als die Erde. Deswegen kann es nicht am Mitternacht gesehen werden."; //explanation de
                        dbRefer[ 130] = [];
                        dbRefer[ 130][0] = ""; //references for ro explanation
                        dbRefer[ 130][1] = ""; //references for en explanation
                        dbRefer[ 130][2] = ""; //references for de explanation
                        dbQHint[ 130] = [];
                        dbQHint[ 130][0] = ""; //hint ro
                        dbQHint[ 130][1] = ""; //hint en
                        dbQHint[ 130][2] = ""; //hint de
                        dbQImage[130] = []; dbQImageSrc[130] = []; 
                        dbQImage[130][0] = "Images/C1.Microchitze/Img130EveningStar.png";	dbQImageSrc[130][0] = "indianapublicmedia.org";
                        dbQImage[130][1] = "Images/C1.Microchitze/Img130EveningStar.png";	dbQImageSrc[130][1] = "indianapublicmedia.org";
                        dbQImage[130][2] = "Images/C1.Microchitze/Img130EveningStar.png";	dbQImageSrc[130][2] = "indianapublicmedia.org";
                        dbAImage[130] = [];							  dbAImageSrc[130] = [];
                        dbAImage[130][0] = "Images/C1.Microchitze/Img130Venus.png";  dbAImageSrc[130][0] = "sensuouscurmudgeon.wordpress.com";
                        dbAImage[130][1] = "Images/C1.Microchitze/Img130Venus.png";  dbAImageSrc[130][1] = "sensuouscurmudgeon.wordpress.com";
                        dbAImage[130][2] = "Images/C1.Microchitze/Img130Venus.png";  dbAImageSrc[130][2] = "sensuouscurmudgeon.wordpress.com";
dbQList[ 131] = [];
dbQList[ 131][0] = "&#xCE;n ce direc&#x163;ie ( N, NV, V, SV, S, SE, E sau NE ) trebuie traversat canalul Panama pentru a ajunge &#xEE;n Oceanul Pacific?";  
dbQList[ 131][1] = "In which direction ( N, NW, W, SW, S, SE, E or NE ) must the Panama Canal be navigated in order to reach the Pacific Ocean?"; 
dbQList[ 131][2] = "In welcher Richtung (N, NW, W, SW, S, SO, O oder NO) muss der Panama-Kanal navigiert werden, um den Pazifischen Ozean zu erreichen?"; 
                        dbAType[ 131] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 131] = []; dbAList[131][0] = "SE"; dbAList[131][1] = "SO";
                        dbACrit[ 131] = []; dbACrit[131][0] = 10; dbACrit[131][1] = 10;
                        dbAnswer[131] = [];
                        dbAnswer[131][0] = "R&#x103;spuns corect: SE"; //plaintext ro answer
                        dbAnswer[131][1] = "Right answer: SE"; //plaintext en answer
                        dbAnswer[131][2] = "Richtige Antwort: SO"; //plaintext de answer
                        dbExpln[ 131] = [];
                        dbExpln[ 131][0] = "Pentru a ajunge &#xEE;n Oceanul Pacific, canalul Panama trebuie traversat &#xEE;n direc&#x163;ia sud-est. Vezi harta."; //explanation ro
                        dbExpln[ 131][1] = "In order to reach the Pacific Ocean, the Panama canal needs to be navigated mainly in the direction south-east. See map."; //explanation en
                        dbExpln[ 131][2] = "Um den Pazifischen Ozean zu erreichen, muss der Panama-Kanal Richtung S&#252;d-Ost navigiert werden. Siehe Karte."; //explanation de
                        dbRefer[ 131] = [];
                        dbRefer[ 131][0] = ""; //references for ro explanation
                        dbRefer[ 131][1] = ""; //references for en explanation
                        dbRefer[ 131][2] = ""; //references for de explanation
                        dbQHint[ 131] = [];
                        dbQHint[ 131][0] = ""; //hint ro
                        dbQHint[ 131][1] = ""; //hint en
                        dbQHint[ 131][2] = ""; //hint de
                        dbQImage[131] = []; dbQImageSrc[131] = []; 
                        dbQImage[131][0] = "Images/C1.Microchitze/Img131PanamaCanal.png";	dbQImageSrc[131][0] = "beyondthepunchline.blogspot.com";
                        dbQImage[131][1] = "Images/C1.Microchitze/Img131PanamaCanal.png";	dbQImageSrc[131][1] = "beyondthepunchline.blogspot.com";
                        dbQImage[131][2] = "Images/C1.Microchitze/Img131PanamaCanal.png";	dbQImageSrc[131][2] = "beyondthepunchline.blogspot.com";
                        dbAImage[131] = [];							dbAImageSrc[131] = [];
                        dbAImage[131][0] = "Images/C1.Microchitze/Img131PanamaMap.png";  dbAImageSrc[131][0] = "dayanaratorresbuzz.blogspot.com";
                        dbAImage[131][1] = "Images/C1.Microchitze/Img131PanamaMap.png";  dbAImageSrc[131][1] = "dayanaratorresbuzz.blogspot.com";
                        dbAImage[131][2] = "Images/C1.Microchitze/Img131PanamaMap.png";  dbAImageSrc[131][2] = "dayanaratorresbuzz.blogspot.com";
dbQList[ 132] = [];
dbQList[ 132][0] = "Ce nume avea Primul R&#x103;zboi Mondial pe medaliile &#xEE;nving&#x103;torilor?";  
dbQList[ 132][1] = "What name did World War I have on the victors' medals?"; 
dbQList[ 132][2] = "Wie hie&#223; der Erste Weltkrieg auf die Medaillen der Sieger?"; 
                        dbAType[ 132] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 132] = []; dbAList[132][0] = "civil";
                        dbACrit[ 132] = []; dbACrit[132][0] = 13; 
                        dbAnswer[132] = [];
                        dbAnswer[132][0] = "R&#x103;spuns corect: Marele R&#x103;zboi Pentru Civiliza&#x163;ie"; //plaintext ro answer
                        dbAnswer[132][1] = "Right answer: The Great War For Civilis(z)ation"; //plaintext en answer
                        dbAnswer[132][2] = "Richtige Antwort: Der Grosse Krieg F&#252;r Die Zivilisation"; //plaintext de answer
                        dbExpln[ 132] = [];
                        dbExpln[ 132][0] = ""; //explanation ro
                        dbExpln[ 132][1] = ""; //explanation en
                        dbExpln[ 132][2] = ""; //explanation de
                        dbRefer[ 132] = [];
                        dbRefer[ 132][0] = "<a href='http://www.victorymedal.it/home' target='_blank'>[1] www.victorymedal.it	</a>"; //references for ro explanation
                        dbRefer[ 132][1] = "<a href='http://www.victorymedal.it/home' target='_blank'>[1] www.victorymedal.it	</a>"; //references for en explanation
                        dbRefer[ 132][2] = "<a href='http://www.victorymedal.it/home' target='_blank'>[1] www.victorymedal.it	</a>"; //references for de explanation
                        dbQHint[ 132] = [];
                        dbQHint[ 132][0] = ""; //hint ro
                        dbQHint[ 132][1] = ""; //hint en
                        dbQHint[ 132][2] = ""; //hint de
                        dbQImage[132] = []; dbQImageSrc[132] = []; 
                        dbQImage[132][0] = "Images/C1.Microchitze/Img132Juggler.png";	dbQImageSrc[132][0] = "www.dailymail.co.uk";
                        dbQImage[132][1] = "Images/C1.Microchitze/Img132Juggler.png";	dbQImageSrc[132][1] = "www.dailymail.co.uk";
                        dbQImage[132][2] = "Images/C1.Microchitze/Img132Juggler.png";	dbQImageSrc[132][2] = "www.dailymail.co.uk";
                        dbAImage[132] = [];							dbAImageSrc[132] = [];
                        dbAImage[132][0] = "Images/C1.Microchitze/Img132Medal.png";  dbAImageSrc[132][0] = "www.borlin-family.com";
                        dbAImage[132][1] = "Images/C1.Microchitze/Img132Medal.png";  dbAImageSrc[132][1] = "www.borlin-family.com";
                        dbAImage[132][2] = "Images/C1.Microchitze/Img132Medal.png";  dbAImageSrc[132][2] = "www.borlin-family.com";
dbQList[ 133] = [];
dbQList[ 133][0] = "Ce na&#x163;ionalitate are Aladdin &#xEE;n \"O mie &#x15F;i una de nop&#x163;i\"? ";   
dbQList[ 133][1] = "What nationality does Aladdin have in \"The Book of One Thousand and One Nights\" (\"The Arabian Nights\")?"; 
dbQList[ 133][2] = "Welche Nationalit&#228;t hat Aladdin in \"Tausendundeine Nacht\"?"; 
                        dbAType[ 133] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 133] = []; dbAList[133][0] = "chin";
                        dbACrit[ 133] = []; dbACrit[133][0] = 13;
                        dbAnswer[133] = [];
                        dbAnswer[133][0] = "R&#x103;spuns corect: chinez"; //plaintext ro answer
                        dbAnswer[133][1] = "Right answer: Chinese"; //plaintext en answer
                        dbAnswer[133][2] = "Richtige Antwort: Chinesisch"; //plaintext de answer
                        dbExpln[ 133] = [];
                        dbExpln[ 133][0] = "De&#x15F;i \"Aladin &#x15F;i lampa fermecat&#x103;\" este o poveste din Orientul Mijlociu, povestea se desf&#x103;&#x15F;oar&#x103; &#xEE;n China &#x15F;i Aladdin este &#xEE;n mod explicit chinez.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 133][1] = "Although Aladdin is a Middle Eastern tale, the story is set in China, and Aladdin is explicitly Chinese.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 133][2] = "Obwohl Aladdin ein Nahost-M&#228;rchen ist, spielt sich die Geschichte in China ab, und Aladdin ist ausdr&#252;cklich Chinese.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 133] = [];
                        dbRefer[ 133][0] = "<a href='http://en.wikipedia.org/wiki/Aladdin' target='_blank'>[1] en.wikipedia.org/Aladdin</a>"; //references for ro explanation
                        dbRefer[ 133][1] = "<a href='http://en.wikipedia.org/wiki/Aladdin' target='_blank'>[1] en.wikipedia.org/Aladdin</a>"; //references for en explanation
                        dbRefer[ 133][2] = "<a href='http://en.wikipedia.org/wiki/Aladdin' target='_blank'>[1] en.wikipedia.org/Aladdin</a>"; //references for de explanation
                        dbQHint[ 133] = [];
                        dbQHint[ 133][0] = ""; //hint ro
                        dbQHint[ 133][1] = ""; //hint en
                        dbQHint[ 133][2] = ""; //hint de
                        dbQImage[133] = []; dbQImageSrc[133] = []; 
                        dbQImage[133][0] = "Images/C1.Microchitze/Img133Aladdin.png";	dbQImageSrc[133][0] = "www.sodahead.com";
                        dbQImage[133][1] = "Images/C1.Microchitze/Img133Aladdin.png";	dbQImageSrc[133][1] = "www.sodahead.com";
                        dbQImage[133][2] = "Images/C1.Microchitze/Img133Aladdin.png";	dbQImageSrc[133][2] = "www.sodahead.com";
                        dbAImage[133] = [];							dbAImageSrc[133] = [];
                        dbAImage[133][0] = "Images/C1.Microchitze/Img133Chinese.png";  dbAImageSrc[133][0] = "storyseer.blogspot.com";
                        dbAImage[133][1] = "Images/C1.Microchitze/Img133Chinese.png";  dbAImageSrc[133][1] = "storyseer.blogspot.com";
                        dbAImage[133][2] = "Images/C1.Microchitze/Img133Chinese.png";  dbAImageSrc[133][2] = "storyseer.blogspot.com";					
dbQList[ 134] = [];
dbQList[ 134][0] = "Care era prenumele lui Frankenstein &#xEE;n nuvela de Mary Shelley?";  
dbQList[ 134][1] = "What was the Frankenstein's first name in Mary Shelley's novel?"; 
dbQList[ 134][2] = "Was war Frankensteins Vorname in Mary Shelleys Roman?"; 
                        dbAType[ 134] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 134] = []; dbAList[134][0] = "Victor"; dbAList[134][1] = "Viktor";
                        dbACrit[ 134] = []; dbACrit[134][0] = 13; dbACrit[134][1] = 13;
                        dbAnswer[134] = [];
                        dbAnswer[134][0] = "R&#x103;spuns corect: Victor"; //plaintext ro answer
                        dbAnswer[134][1] = "Right answer: Victor"; //plaintext en answer
                        dbAnswer[134][2] = "Richtige Antwort: Viktor"; //plaintext de answer
                        dbExpln[ 134] = [];
                        dbExpln[ 134][0] = "&#xCE;n nuvel&#x103;, Victor Frankenstein este omul de &#x15F;tiin&#x163;&#x103; care reu&#x15F;e&#x15F;te s&#x103; realizeze un om artificial. Creatura este numit&#x103; &#xEE;n cultura popular&#x103; &#xEE;n mod gre&#x15F;it Frankenstein, de&#x15F;i &#xEE;n roman nu prime&#x15F;te nume.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 134][1] = "In the novel, Victor Frankenstein was the scientist who, after studying chemical processes and the decay of living beings, gains an insight into the creation of life and gives life to his own creature (often referred to as Frankenstein's monster, or incorrectly referred to as simply \"Frankenstein\").<sup>[1]</sup>"; //explanation en
                        dbExpln[ 134][2] = "Im Roman, Viktor Frankenstein war der Wissenschaftler, der an der damals ber&#252;hmten Universit&#228;t Ingolstadt einen k&#252;nstlichen Menschen erschuf. Dieses Wesen wird volkst&#252;mlich fehlerhaft als Frankenstein bezeichnet, obwohl es im Roman namelos bleibt.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 134] = [];
                        dbRefer[ 134][0] = "<a href='http://en.wikipedia.org/wiki/Victor_Frankenstein' target='_blank'>[1] en.wikipedia.org/Victor_Frankenstein</a>"; //references for ro explanation
                        dbRefer[ 134][1] = "<a href='http://en.wikipedia.org/wiki/Victor_Frankenstein' target='_blank'>[1] en.wikipedia.org/Victor_Frankenstein</a>"; //references for en explanation
                        dbRefer[ 134][2] = "<a href='http://en.wikipedia.org/wiki/Victor_Frankenstein' target='_blank'>[1] en.wikipedia.org/Victor_Frankenstein</a>"; //references for de explanation
                        dbQHint[ 134] = [];
                        dbQHint[ 134][0] = ""; //hint ro
                        dbQHint[ 134][1] = ""; //hint en
                        dbQHint[ 134][2] = ""; //hint de
                        dbQImage[134] = []; dbQImageSrc[134] = []; 
                        dbQImage[134][0] = "Images/C1.Microchitze/Img134Frankestein.png";	dbQImageSrc[134][0] = "shenanitims.wordpress.com";
                        dbQImage[134][1] = "Images/C1.Microchitze/Img134Frankestein.png";	dbQImageSrc[134][1] = "shenanitims.wordpress.com";
                        dbQImage[134][2] = "Images/C1.Microchitze/Img134Frankestein.png";	dbQImageSrc[134][2] = "shenanitims.wordpress.com";
                        dbAImage[134] = [];							dbAImageSrc[134] = [];
                        dbAImage[134][0] = "Images/C1.Microchitze/Img134Victor.png";  dbAImageSrc[134][0] = "nerdfighters.ning.com";
                        dbAImage[134][1] = "Images/C1.Microchitze/Img134Victor.png";  dbAImageSrc[134][1] = "nerdfighters.ning.com";
                        dbAImage[134][2] = "Images/C1.Microchitze/Img134Victor.png";  dbAImageSrc[134][2] = "nerdfighters.ning.com";
dbQList[ 135] = [];
dbQList[ 135][0] = "Care mamifere au coarne &#xEE;nca de la na&#x15F;tere?";  
dbQList[ 135][1] = "Which mammals have horns already from birth?"; 
dbQList[ 135][2] = "Welche S&#228;ugetiere haben H&#246;rner bereits von Geburt an?"; 
                        dbAType[ 135] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 135] = []; dbAList[135][0] = "giraf";
                        dbACrit[ 135] = []; dbACrit[135][0] = 13;
                        dbAnswer[135] = [];
                        dbAnswer[135][0] = "R&#x103;spuns corect: Girafele"; //plaintext ro answer
                        dbAnswer[135][1] = "Right answer: Giraffes"; //plaintext en answer
                        dbAnswer[135][2] = "Richtige Antwort: Giraffen"; //plaintext de answer
                        dbExpln[ 135] = [];
                        dbExpln[ 135][0] = "Coarnele girafelor sunt formate din cartilagiu osificat, acoperit de piele. Girafele se nasc cu coarne, &#xEE;ns&#x103; acestea nu sunt &#xEE;nc&#x103; ata&#x15F;ate de craniu (pentru a evita leziunile la na&#x15F;tere).<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 135][1] = "Giraffe \"horns\" are actually ossicones, formed from ossified cartilage and are covered in skin. Giraffe are born with their ossicones, however, they lie flat and are not attached to the skull to avoid injury at birth. They only fuse with the skull later in life.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 135][2] = "Giraffenbabys haben 2 kn&#246;chrigen H&#246;cker schon im Mutterleib. Dort und w&#228;hrend der Geburt liegen sie noch am Sch&#228;del an und richten sich danach auf, wenn etwa 1 Woche vergangen ist. Anders als echte H&#246;rner ( bestehen aus Hornsubstanz und wachsen mit ) oder Geweihe ( bestehen zwar aus Knochensubstanz, werden aber j&#228;hrlich abgeworfen ), sind diese haut&#252;berzogenen Knochenzapfen Bestandteil des Sch&#228;dels.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 135] = [];
                        dbRefer[ 135][0] = "<a href='http://www.giraffeconservation.org/giraffe_facts.php?pgid=1' target='_blank'>[1] www.giraffeconservation.org</a>"; //references for ro explanation
                        dbRefer[ 135][1] = "<a href='http://www.giraffeconservation.org/giraffe_facts.php?pgid=1' target='_blank'>[1] www.giraffeconservation.org</a>"; //references for en explanation
                        dbRefer[ 135][2] = "<a href='http://www.giraffeconservation.org/giraffe_facts.php?pgid=1' target='_blank'>[1] www.giraffeconservation.org</a>"; //references for de explanation
                        dbQHint[ 135] = [];
                        dbQHint[ 135][0] = ""; //hint ro
                        dbQHint[ 135][1] = ""; //hint en
                        dbQHint[ 135][2] = ""; //hint de
                        dbQImage[135] = []; dbQImageSrc[135] = []; 
                        dbQImage[135][0] = "Images/C1.Microchitze/Img135Dragon.png";	dbQImageSrc[135][0] = "www.zazzle.co.uk";
                        dbQImage[135][1] = "Images/C1.Microchitze/Img135Dragon.png";	dbQImageSrc[135][1] = "www.zazzle.co.uk";
                        dbQImage[135][2] = "Images/C1.Microchitze/Img135Dragon.png";	dbQImageSrc[135][2] = "www.zazzle.co.uk";
                        dbAImage[135] = [];							dbAImageSrc[135] = [];
                        dbAImage[135][0] = "Images/C1.Microchitze/Img135Giraffe.png";  dbAImageSrc[135][0] = "www.giraffeconservation.org";
                        dbAImage[135][1] = "Images/C1.Microchitze/Img135Giraffe.png";  dbAImageSrc[135][1] = "www.giraffeconservation.org";
                        dbAImage[135][2] = "Images/C1.Microchitze/Img135Giraffe.png";  dbAImageSrc[135][2] = "www.giraffeconservation.org";
dbQList[ 136] = [];
dbQList[ 136][0] = "De ce m&#x103;n&#xE2;nc&#x103; oile albe mai mult&#x103; iarb&#x103; dec&#xE2;t oile negre?";  
dbQList[ 136][1] = "Why do white sheep eat more grass than black sheep?"; 
dbQList[ 136][2] = "Warum essen wei&#223;e Schafe mehr Gras als schwarze Schafe?"; 
                        dbAType[ 136] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 136] = []; dbAList[136][0] = "multe"; dbAList[136][1] = "numer"; dbAList[136][2] = "numar"; dbAList[136][3] = "more"; dbAList[136][4] = "number"; dbAList[136][5] = "mehr"; dbAList[136][6] = "Nummer"; dbAList[136][7] = "zahl";
                        dbACrit[ 136] = []; dbACrit[136][0] = 13; dbACrit[136][1] = 13; dbACrit[136][2] = 13; dbACrit[136][3] = 13; dbACrit[136][4] = 13; dbACrit[136][5] = 13; dbACrit[136][6] = 13; dbACrit[136][7] = 13;
                        dbAnswer[136] = [];
                        dbAnswer[136][0] = "R&#x103;spuns corect: pentru c&#x103; sunt mai multe"; //plaintext ro answer
                        dbAnswer[136][1] = "Right answer: because they are more numerous"; //plaintext en answer
                        dbAnswer[136][2] = "Richtige Antwort: weil sie zahlreicher sind"; //plaintext de answer
                        dbExpln[ 136] = [];
                        dbExpln[ 136][0] = ""; //explanation ro
                        dbExpln[ 136][1] = ""; //explanation en
                        dbExpln[ 136][2] = ""; //explanation de
                        dbRefer[ 136] = [];
                        dbRefer[ 136][0] = ""; //references for ro explanation
                        dbRefer[ 136][1] = ""; //references for en explanation
                        dbRefer[ 136][2] = ""; //references for de explanation
                        dbQHint[ 136] = [];
                        dbQHint[ 136][0] = ""; //hint ro
                        dbQHint[ 136][1] = ""; //hint en
                        dbQHint[ 136][2] = ""; //hint de
                        dbQImage[136] = []; dbQImageSrc[136] = []; 
                        dbQImage[136][0] = "Images/C1.Microchitze/Img136Sheep.png";	dbQImageSrc[136][0] = "www.wallpaperfo.com";
                        dbQImage[136][1] = "Images/C1.Microchitze/Img136Sheep.png";	dbQImageSrc[136][1] = "www.wallpaperfo.com";
                        dbQImage[136][2] = "Images/C1.Microchitze/Img136Sheep.png";	dbQImageSrc[136][2] = "www.wallpaperfo.com";
                        dbAImage[136] = [];							dbAImageSrc[136] = [];
                        dbAImage[136][0] = "Images/C1.Microchitze/Img136Sheep2.png";  dbAImageSrc[136][0] = "www.wallpaperfo.com";
                        dbAImage[136][1] = "Images/C1.Microchitze/Img136Sheep2.png";  dbAImageSrc[136][1] = "www.wallpaperfo.com";
                        dbAImage[136][2] = "Images/C1.Microchitze/Img136Sheep2.png";  dbAImageSrc[136][2] = "www.wallpaperfo.com";
dbQList[ 137] = [];
dbQList[ 137][0] = "Care este numele &#x15F;tiin&#x163;ific al brontozaurului?";  
dbQList[ 137][1] = "Which is the scientific name of the brontosaur (the Thunder Lizard)?"; 
dbQList[ 137][2] = "Was ist der wissenschaftliche Name des Brontosaurus (die Donnerechse)?"; 
                        dbAType[ 137] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 137] = []; dbAList[137][0] = "Apato";
                        dbACrit[ 137] = []; dbACrit[137][0] = 13;
                        dbAnswer[137] = [];
                        dbAnswer[137][0] = "R&#x103;spuns corect: Apatosaurus (excelsus)"; //plaintext ro answer
                        dbAnswer[137][1] = "Right answer: Apatosaurus (excelsus)"; //plaintext en answer
                        dbAnswer[137][2] = "Richtige Antwort: Apatosaurus (excelsus)"; //plaintext de answer
                        dbExpln[ 137] = [];
                        dbExpln[ 137][0] = "&#xCE;n 1877, Othniel Charles Marsh a descoperit scheletul par&#xCE;ial al unui dinozaur erbivor cu coad&#x103; lung&#x103; &#x15F;i g&#xE2;t foarte lung, pe care l-a denumit Apatosaurus ajax. Doi ani mai t&#xE2;rziu, echipa sa de colectori de fosile i-a trimis un al doilea schelet, despre care Marsh a crezut c&#x103; apar&#x163;inea unui dinozaur diferit, pe care l-a numit Brontosaurus excelsus. In 1903, Elmer Riggs a re-examinat fosilele. De&#x15F;i a fost de acord cu Marsh c&#x103; sunt specii diferite, Riggs a descoperit multe similarita&#x163;i &#xEE;ntre B. excelsus &#x15F;i A. ajax, reclasific&#xE2;nd noua specie ca Apatosaurus excelsus. Marea majoritate a paleontologilor sunt de acord c&#x103; cele dou&#x103; specii trebuie clasificate cu acelasi gen, iar Apatosaurus a avut prioritate.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 137][1] = "In 1877, Othniel Charles Marsh published the name of the type species Apatosaurus ajax. He followed this in 1879 with a description of another, more complete specimen, which he thought represented a new genus and species, which he named Brontosaurus excelsus. In 1903, Elmer Riggs re-examined the fossils. While he agreed with Marsh that Brontosaurus excelsus was likely a distinct species, he also noted many similarities between B. excelsus and A. ajax, and decided that both should be placed in the same genus. Riggs re-classified the species as Apatosaurus excelsus in 1903. Since Riggs published his opinions, almost all paleontologists have agreed that the two species should be classified together in a single genus. According to the rules of the ICZN (which governs the scientific names of animals), the name Apatosaurus, having been published first, had priority as the official name; Brontosaurus is considered a junior synonym and has therefore been discarded from formal use..<sup>[1]</sup>"; //explanation en
                        dbExpln[ 137][2] = "Der amerikanische Pal&#228;ontologe Othniel Charles Marsh entdeckte die ersten Fossilien und nannte das Tier 1877 Apatosaurus. Zwei Jahre sp&#228;ter fand er weitere Reste und beschrieb diese als Brontosaurus. 1903 stellte sich heraus, dass die beiden Gattungen identisch sind. Gem&#228;&#223; den Regeln des International Code of Zoological Nomenclature (ICZN) ist der &#228;ltere Name in diesem Fall der g&#252;ltige (Priorit&#228;tsregel), daher ist der g&#252;ltige Name der Gattung Apatosaurus.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 137] = [];
                        dbRefer[ 137][0] = "<a href='http://en.wikipedia.org/wiki/Apatosaurus' target='_blank'>[1] en.wikipedia.org/Apatosaurus</a>"; //references for ro explanation
                        dbRefer[ 137][1] = "<a href='http://en.wikipedia.org/wiki/Apatosaurus' target='_blank'>[1] en.wikipedia.org/Apatosaurus</a>"; //references for en explanation
                        dbRefer[ 137][2] = "<a href='http://en.wikipedia.org/wiki/Apatosaurus' target='_blank'>[1] en.wikipedia.org/Apatosaurus</a>"; //references for de explanation
                        dbQHint[ 137] = [];
                        dbQHint[ 137][0] = ""; //hint ro
                        dbQHint[ 137][1] = ""; //hint en
                        dbQHint[ 137][2] = ""; //hint de
                        dbQImage[137] = []; dbQImageSrc[137] = []; 
                        dbQImage[137][0] = "Images/C1.Microchitze/Img137Brontosaurus.png";	dbQImageSrc[137][0] = "thrivingatschool.com";
                        dbQImage[137][1] = "Images/C1.Microchitze/Img137Brontosaurus.png";	dbQImageSrc[137][1] = "thrivingatschool.com";
                        dbQImage[137][2] = "Images/C1.Microchitze/Img137Brontosaurus.png";	dbQImageSrc[137][2] = "thrivingatschool.com";
                        dbAImage[137] = [];							dbAImageSrc[137] = [];
                        dbAImage[137][0] = "Images/C1.Microchitze/Img137Apatosaurus.png";  dbAImageSrc[137][0] = "imgur.com";
                        dbAImage[137][1] = "Images/C1.Microchitze/Img137Apatosaurus.png";  dbAImageSrc[137][1] = "imgur.com";
                        dbAImage[137][2] = "Images/C1.Microchitze/Img137Apatosaurus.png";  dbAImageSrc[137][2] = "imgur.com";
dbQList[ 138] = [];
dbQList[ 138][0] = "Care este codul auto international pentru Elvetia?";  
dbQList[ 138][1] = "What is the international licence plate country code for Switzerland?"; 
dbQList[ 138][2] = "Was ist das internationale Landeskennzeichen f&#xFC;r Kraftfahrzeuge aus der Schweiz?"; 
                        dbAType[ 138] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 138] = []; dbAList[138][0] = "CH";
                        dbACrit[ 138] = []; dbACrit[138][0] = 13;
                        dbAnswer[138] = [];
                        dbAnswer[138][0] = "R&#x103;spuns corect: CH (Confoederatio Helvetica)"; //plaintext ro answer
                        dbAnswer[138][1] = "Right answer: CH (Confoederatio Helvetica)"; //plaintext en answer
                        dbAnswer[138][2] = "Richtige Antwort: CH (Confoederatio Helvetica)"; //plaintext de answer
                        dbExpln[ 138] = [];
                        dbExpln[ 138][0] = ""; //explanation ro
                        dbExpln[ 138][1] = ""; //explanation en
                        dbExpln[ 138][2] = ""; //explanation de
                        dbRefer[ 138] = [];
                        dbRefer[ 138][0] = "<a href='http://ro.wikipedia.org/wiki/List%C4%83_de_sigle_interna%C8%9Bionale_pentru_ma%C8%99ini' target='_blank'>[1] ro.wikipedia.org/Sigle</a>"; //references for ro explanation
                        dbRefer[ 138][1] = "<a href='http://en.wikipedia.org/wiki/List_of_international_vehicle_registration_codes' target='_blank'>[1] en.wikipedia.org/Registration_codes</a>"; //references for en explanation
                        dbRefer[ 138][2] = "<a href='http://de.wikipedia.org/wiki/Liste_der_Kfz-Nationalit%C3%A4tszeichen' target='_blank'>[1] de.wikipedia.org/Kfz-Landeskennzeichen</a>"; //references for de explanation
                        dbQHint[ 138] = [];
                        dbQHint[ 138][0] = ""; //hint ro
                        dbQHint[ 138][1] = ""; //hint en
                        dbQHint[ 138][2] = ""; //hint de
                        dbQImage[138] = []; dbQImageSrc[138] = []; 
                        dbQImage[138][0] = "Images/C1.Microchitze/Img138Tank.png";	dbQImageSrc[138][0] = "www.macgyveronline.com";
                        dbQImage[138][1] = "Images/C1.Microchitze/Img138Tank.png";	dbQImageSrc[138][1] = "www.macgyveronline.com";
                        dbQImage[138][2] = "Images/C1.Microchitze/Img138Tank.png";	dbQImageSrc[138][2] = "www.macgyveronline.com";
                        dbAImage[138] = [];							dbAImageSrc[138] = [];
                        dbAImage[138][0] = "Images/C1.Microchitze/Img138CH.png";  dbAImageSrc[138][0] = "en.comparis.ch";
                        dbAImage[138][1] = "Images/C1.Microchitze/Img138CH.png";  dbAImageSrc[138][1] = "en.comparis.ch";
                        dbAImage[138][2] = "Images/C1.Microchitze/Img138CH.png";  dbAImageSrc[138][2] = "en.comparis.ch";
dbQList[ 139] = [];
dbQList[ 139][0] = "C&#xE2;nd o ma&#x15F;in&#x103; ia o curb&#x103; str&#xE2;ns&#x103; la st&#xE2;nga, care roat&#x103; se &#xEE;nv&#xE2;rte mai pu&#x163;in?";  
dbQList[ 139][1] = "When a car takes a sharp turn to the left, which wheel spins the least?"; 
dbQList[ 139][2] = "Wenn ein Auto eine scharfe Kurve nach Links nimmt, welches Rad dreht sich am wenigsten?"; 
                        dbAType[ 139] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 139] = []; dbAList[139][0] = "rezerv"; dbAList[134][1] = "spare"; dbAList[134][2] = "reserv";  dbAList[134][3] = "ersatz";
                        dbACrit[ 139] = []; dbACrit[139][0] = 13; dbACrit[134][1] = 13; dbACrit[134][2] = 13; dbACrit[134][3] = 13;
                        dbAnswer[139] = [];
                        dbAnswer[139][0] = "R&#x103;spuns corect: roata de rezerv&#x103;"; //plaintext ro answer
                        dbAnswer[139][1] = "Right answer: the spare wheel"; //plaintext en answer
                        dbAnswer[139][2] = "Richtige Antwort: das Ersatzrad"; //plaintext de answer
                        dbExpln[ 139] = [];
                        dbExpln[ 139][0] = ""; //explanation ro
                        dbExpln[ 139][1] = ""; //explanation en
                        dbExpln[ 139][2] = ""; //explanation de
                        dbRefer[ 139] = [];
                        dbRefer[ 139][0] = ""; //references for ro explanation
                        dbRefer[ 139][1] = ""; //references for en explanation
                        dbRefer[ 139][2] = ""; //references for de explanation
                        dbQHint[ 139] = [];
                        dbQHint[ 139][0] = ""; //hint ro
                        dbQHint[ 139][1] = ""; //hint en
                        dbQHint[ 139][2] = ""; //hint de
                        dbQImage[139] = []; dbQImageSrc[139] = []; 
                        dbQImage[139][0] = "Images/C1.Microchitze/Img139Left.png";	dbQImageSrc[139][0] = "www.cartoonstock.com";
                        dbQImage[139][1] = "Images/C1.Microchitze/Img139Left.png";	dbQImageSrc[139][1] = "www.cartoonstock.com";
                        dbQImage[139][2] = "Images/C1.Microchitze/Img139Left.png";	dbQImageSrc[139][2] = "www.cartoonstock.com";
                        dbAImage[139] = [];							dbAImageSrc[139] = [];
                        dbAImage[139][0] = "Images/C1.Microchitze/Img139Spare.png";  dbAImageSrc[139][0] = "www.team-bhp.com";
                        dbAImage[139][1] = "Images/C1.Microchitze/Img139Spare.png";  dbAImageSrc[139][1] = "www.team-bhp.com";
                        dbAImage[139][2] = "Images/C1.Microchitze/Img139Spare.png";  dbAImageSrc[139][2] = "www.team-bhp.com";

                        
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MINIMIX INGINER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
dbQList[ 140] = [];
dbQList[ 140][0] = "C&#xE2;te litere are r&#x103;spunsul acestei &#xEE;ntreb&#x103;ri?";    
dbQList[ 140][1] = "How many letters does the answer to this question have?";  
dbQList[ 140][2] = "Wie viele Buchstaben hat die Antwort zu dieser Frage?";
                        dbAType[ 140] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 140] = []; dbAList[140][0] = "cinci"; dbAList[140][1] = "four"; dbAList[140][2] = "vier"; dbAList[140][3] = 0;
                        dbACrit[ 140] = []; dbACrit[140][0] = 10; dbACrit[140][1] = 10; dbACrit[140][2] = 10; dbACrit[140][3] = 20;
                        dbAnswer[140] = [];
                        dbAnswer[140][0] = "R&#x103;spuns corect: cinci"; //plaintext ro answer
                        dbAnswer[140][1] = "Right answer: four"; //plaintext en answer
                        dbAnswer[140][2] = "Richtige Antwort: vier"; //plaintext de answer
                        dbExpln[ 140] = [];
                        dbExpln[ 140][0] = "Nici un alt num&#x103;r nu se auto-descrie. Alte r&#x103;spunsuri acceptate:<br/><i>0</i> (scris cu o cifr&#x103;, nu cu litere)<br/><i>R&#x103;spunsul acestei &#xEE;ntreb&#x103;ri are 34 litere.</i>"; //explanation ro
                        dbExpln[ 140][1] = "No other number describes itself. Other accepted answers:<br/><i>0</i> (written with one digit, not with letters)<br/><i>The answer to this question has 33 letters.</i>"; //explanation en
                        dbExpln[ 140][2] = "Keine andere Zahl beschreibt sich selbst. Andere gueltige Antworten:<br/><i>0</i> (geschrieben als Zahl, nicht mit Buchstaben)<br/><i>Die Antwort zu dieser Frage hat 36 Buchstaben.</i>"; //explanation de
                        dbRefer[ 140] = [];
                        dbRefer[ 140][0] = ""; //references for ro explanation
                        dbRefer[ 140][1] = ""; //references for en explanation
                        dbRefer[ 140][2] = ""; //references for de explanation
                        dbQHint[ 140] = [];
                        dbQHint[ 140][0] = ""; //hint ro
                        dbQHint[ 140][1] = ""; //hint en
                        dbQHint[ 140][2] = ""; //hint de
                        dbQImage[140] = []; dbQImageSrc[140] = []; 
                        dbQImage[140][0] = "Images/C1.Microchitze/Img140QMarks.png";	dbQImageSrc[140][0] = "righttruth.typepad.com";
                        dbQImage[140][1] = "Images/C1.Microchitze/Img140QMarks.png";	dbQImageSrc[140][1] = "righttruth.typepad.com";
                        dbQImage[140][2] = "Images/C1.Microchitze/Img140QMarks.png";	dbQImageSrc[140][2] = "righttruth.typepad.com";
                        dbAImage[140] = [];							dbAImageSrc[140] = [];
                        dbAImage[140][0] = "Images/C1.Microchitze/Img140Cinci.png"; dbAImageSrc[140][0] = "www.taverntrove.com";
                        dbAImage[140][1] = "Images/C1.Microchitze/Img140Four.png";  dbAImageSrc[140][1] = "driverlayer.com";
                        dbAImage[140][2] = "Images/C1.Microchitze/Img140Vier.png";  dbAImageSrc[140][2] = "brandingsource.blogspot.com";
dbQList[ 141] = [];
dbQList[ 141][0] = "Ce zi a s&#x103;pt&#x103;m&#xE2;nii a fost 30 Februarie 1712 &#xEE;n Suedia?";    
dbQList[ 141][1] = "What day of the week was 30<sup>th</sup> February 1712 in Sweden?";  
dbQList[ 141][2] = "Welcher Tag der Woche war der 30. Februar 1712 in Schweden?";
                        dbAType[ 141] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 141] = []; dbAList[141][0] = "Vineri"; dbAList[141][1] = "Friday"; dbAList[141][2] = "Freitag";
                        dbACrit[ 141] = []; dbACrit[141][0] = 13; dbACrit[141][1] = 13; dbACrit[141][2] = 13;
                        dbAnswer[141] = [];
                        dbAnswer[141][0] = "R&#x103;spuns corect: Vineri"; //plaintext ro answer
                        dbAnswer[141][1] = "Right answer: Friday"; //plaintext en answer
                        dbAnswer[141][2] = "Richtige Antwort: Freitag"; //plaintext de answer
                        dbExpln[ 141] = [];
                        dbExpln[ 141][0] = "&#xCE;n Suedia secolului al XVIII, trecerea de la calendarul iulian la cel gregorian urma s&#x103; se fac&#x103; treptat, &#xEE;ncep&#xE2;nd din anul 1700 dup&#x103; un plan care prevedea omiterea datei de 29 februarie din to&#x163;i anii bisec&#x163;i, astfel &#xEE;nc&#x103;t dup&#x103; 40 de ani s&#x103; se ajung&#x103; la coinciden&#x163;&#x103; cu calendarul gregorian. Planul nu a fost respectat &#xEE;ntocmai: anul 1700 nu a fost bisect (conform planului), dar anii 1704 &#x15F;i 1708 au ramas bisec&#x163;i. &#xCE;n aceste condi&#x163;ii s-a decis s&#x103; se renun&#x163;e la schimbarea calendarului &#x15F;i s&#x103; se revin&#x103; la calendarul iulian. Acest lucru s-a petrecut &#xEE;n 1712, c&#xE2;nd luna februarie a avut nu numai 29 de zile, ci o zi suplimentar&#x103;, 30 februarie. (&#xCE;n perioada 1700-1721, Suedia se afla &#xEE;n r&#x103;zboi cu Rusia, Danemarca, Saxonia, etc., &#xEE;n Marele R&#x103;zboi Nordic.)<br/>Trecerea la calendarul gregorian s-a realizat &#xEE;n 1753, c&#xE2;nd dup&#x103; data de 16 februarie a urmat 1 martie.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 141][1] = "Instead of changing from the Julian calendar to the Gregorian calendar by omitting a block of consecutive days as had been done in other countries, the Swedish Empire planned to change gradually by omitting all leap days for the entire period from 1700 to 1740 inclusive. Although the leap day was omitted in February 1700, the Great Northern War began later that year, diverting the attention of the Swedes from their calendar so that they did not omit leap days on the next two occasions and 1704 and 1708 remained leap years.<br/>To avoid confusion and further mistakes, the Julian calendar was restored in 1712 by adding an extra leap day, thus giving that year the only 30th of February in history. That date corresponded to February 29 in the Julian calendar and to March 11 in the Gregorian calendar.<br/>The Swedish conversion to the Gregorian calendar was finally accomplished in the usual way in 1753, by omitting the last 11 days of February.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 141][2] = "Zu Beginn des Jahres 1700 entschied Schweden, vom Julianischen zum Gregorianischen Kalender zu wechseln. Die urspr&#252;ngliche Idee war, beginnend mit dem Jahr 1700, letztmals 1740 auf insgesamt elf Schaltjahre zu verzichten und so schrittweise die Tagesdifferenz zwischen Julianischem und Gregorianischem Kalender auszugleichen. Das h&#228;tte zwar die Umstellung innerhalb Schwedens vereinfacht, die Beziehungen zu allen anderen Staaten aber erheblich komplizierter gemacht, da Schweden dann 40 Jahre lang mit keinem anderen Staat denselben Kalender gehabt und sich obendrein der kalendarische Abstand zum Rest Europas alle vier Jahre ver&#xE4;ndert h&#228;tte. So wurde im Jahre 1700 der 29. Februar &#252;bersprungen. Schweden war nun dem Julianischen Kalender einen Tag voraus und dem Gregorianischen noch zehn Tage hinterher.<br/>W&#228;hrend des Gro&#xDF;en Nordischen Krieges behielt man jedoch den Schalttag 29. Februar 1704 und 1708 bei, sodass der Unterschied von einem Tag zum Julianischen Kalender und zehn Tagen zum Gregorianischen erhalten blieb. Im Januar 1711 entschied K&#246;nig Karl XII., wieder zum Julianischen Kalender zur&#252;ckzukehren. Der Tag, den Schweden nun der Zeitrechnung dieses Kalenders voraus war, musste durch einen zus&#228;tzlichen Tag ausgeglichen werden: Dies war der 30. Februar 1712, ein zweiter Schalttag, es war ein Freitag und entsprach dem 11. M&#228;rz 1712 im Gregorianischen Kalender. Die Regelung galt auch f&#252;r das damals von Schweden abh&#228;ngige Finnland, nicht jedoch in den schwedischen Provinzen in Deutschland, die mit den &#252;brigen protestantischen Gebieten Deutschlands bereits 1700 den Gregorianischen Kalender eingef&#xFC;hrt hatten. 1753 wechselte Schweden dann endg&#252;ltig zum Gregorianischen Kalender.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 141] = [];
                        dbRefer[ 141][0] = "<a href='http://ro.wikipedia.org/wiki/30_februarie' target='_blank'>[1] ro.wikipedia.org/30Februarie</a>"; //references for ro explanation
                        dbRefer[ 141][1] = "<a href='http://en.wikipedia.org/wiki/February_30' target='_blank'>[1] en.wikipedia.org/February30</a>"; //references for en explanation
                        dbRefer[ 141][2] = "<a href='http://de.wikipedia.org/wiki/30._Februar' target='_blank'>[1] de.wikipedia.org/30.Februar</a>"; //references for de explanation
                        dbQHint[ 141] = [];
                        dbQHint[ 141][0] = ""; //hint ro
                        dbQHint[ 141][1] = ""; //hint en
                        dbQHint[ 141][2] = ""; //hint de
                        dbQImage[141] = []; dbQImageSrc[141] = []; 
                        dbQImage[141][0] = "Images/C1.Microchitze/Img141Feb30.png";	dbQImageSrc[141][0] = "www.imbecile.me";
                        dbQImage[141][1] = "Images/C1.Microchitze/Img141Feb30.png";	dbQImageSrc[141][1] = "www.imbecile.me";
                        dbQImage[141][2] = "Images/C1.Microchitze/Img141Feb30.png";	dbQImageSrc[141][2] = "www.imbecile.me";
                        dbAImage[141] = [];							dbAImageSrc[141] = [];
                        dbAImage[141][0] = "Images/C1.Microchitze/Img141Feb1712.png";  dbAImageSrc[141][0] = "en.wikipedia.org";
                        dbAImage[141][1] = "Images/C1.Microchitze/Img141Feb1712.png";  dbAImageSrc[141][1] = "en.wikipedia.org";
                        dbAImage[141][2] = "Images/C1.Microchitze/Img141Feb1712.png";  dbAImageSrc[141][2] = "en.wikipedia.org";
dbQList[ 142] = [];
dbQList[ 142][0] = "C&#xE2;te secunde a avut anul 2012?";    
dbQList[ 142][1] = "How many seconds did the year 2012 have?";  
dbQList[ 142][2] = "Wie viele Sekunden hat das Jahr 2012 gehabt?";
                        dbAType[ 142] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 142] = []; dbAList[142][0] = 31622401;
                        dbACrit[ 142] = []; dbACrit[142][0] = 20;
                        dbAnswer[142] = [];
                        dbAnswer[142][0] = "R&#x103;spuns corect: 31622401"; //plaintext ro answer
                        dbAnswer[142][1] = "Right answer: 31622401"; //plaintext en answer
                        dbAnswer[142][2] = "Richtige Antwort: 31622401"; //plaintext de answer
                        dbExpln[ 142] = [];
                        dbExpln[ 142][0] = "366 zile * 24 ore/zi * 60 minute/ora * 60 secunde/minut = 31622400 secunde. La acestea trebuie adaugat&#x103; secunda bisect&#x103; din 30 iunie 2012, introdus&#x103; pentru a permite timpului universal (UTC) definit de ceasurile atomice s&#x103; compenseze avansul fa&#x163;&#x103; de ritmul de rota&#x163;ie al P&#x103;m&#xE2;ntului. &#xCE;n imagine este o captur&#x103; de ecran a ceasului UTC de la time.gov &#xEE;n timpul introducerii secundei bisecte la data de 30 iunie 2012, 23:59:60.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 142][1] = "366 days * 24 hours/day * 60 minutes/hour * 60 seconds/minute = 31622400 seconds. To these you need to add the leap second from 30th of June 2012, applied to Coordinated Universal Time (UTC) in order to keep its time of day close to the mean solar time. Without such a correction, time reckoned by Earth rotation drifts away from atomic time because of irregularities in the Earth's rate of rotation. The image shows a screen capture of the UTC clock from time.gov during the UTC leap second, on June 30, 2012, 23:59:60.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 142][2] = "366 Tagen * 24 Stunden/Tag * 60 Minuten/Stunde * 60 Sekunden/Minute = 31622400 Sekunden. Dazu muss man noch die Schaltsekunde von 30. Juni 2012 z&#228;hlen. Die Schaltsekunde ist eine bei Bedarf in die Koordinierte Weltzeit UTC zus&#228;tzlich eingef&#252;gte Sekunde, um sie mit der Universellen Sonnenzeit zu synchronisieren. Links ist die Bildschirmaufnahme der UTC Uhr von time.gov w&#228;hrend der Schaltsekunde am 30. Juni 2012, 23:59:60.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 142] = [];
                        dbRefer[ 142][0] = "<a href='http://ro.wikipedia.org/wiki/Secund%C4%83_intercalat%C4%83' target='_blank'>[1] ro.wikipedia.org/Secunda_bisect&#x103;</a>"; //references for ro explanation
                        dbRefer[ 142][1] = "<a href='http://en.wikipedia.org/wiki/Leap_second' target='_blank'>[1] en.wikipedia.org/Leap_second</a>"; //references for en explanation
                        dbRefer[ 142][2] = "<a href='http://de.wikipedia.org/wiki/Schaltsekunde' target='_blank'>[1] de.wikipedia.org/Schaltsekunde</a>"; //references for de explanation
                        dbQHint[ 142] = [];
                        dbQHint[ 142][0] = ""; //hint ro
                        dbQHint[ 142][1] = ""; //hint en
                        dbQHint[ 142][2] = ""; //hint de
                        dbQImage[142] = []; dbQImageSrc[142] = []; 
                        dbQImage[142][0] = "Images/C1.Microchitze/Img142Message.png";	dbQImageSrc[142][0] = "boardofwisdom.com";
                        dbQImage[142][1] = "Images/C1.Microchitze/Img142Message.png";	dbQImageSrc[142][1] = "boardofwisdom.com";
                        dbQImage[142][2] = "Images/C1.Microchitze/Img142Message.png";	dbQImageSrc[142][2] = "boardofwisdom.com";
                        dbAImage[142] = [];							dbAImageSrc[142] = [];
                        dbAImage[142][0] = "Images/C1.Microchitze/Img142Leap.png";  dbAImageSrc[142][0] = "en.wikipedia.org";
                        dbAImage[142][1] = "Images/C1.Microchitze/Img142Leap.png";  dbAImageSrc[142][1] = "en.wikipedia.org";
                        dbAImage[142][2] = "Images/C1.Microchitze/Img142Leap.png";  dbAImageSrc[142][2] = "en.wikipedia.org";
dbQList[ 143] = [];
dbQList[ 143][0] = "Care stat con&#x163;ine teritoriul cel mai estic al Statelor Unite?";    
dbQList[ 143][1] = "Which state contains the easternmost territory of the US?";  
dbQList[ 143][2] = "Welcher Staat enth&#228;lt den &#246;stlichsten Gebiet der USA?";
                        dbAType[ 143] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 143] = []; dbAList[143][0] = "Alaska";
                        dbACrit[ 143] = []; dbACrit[143][0] = 13;
                        dbAnswer[143] = [];
                        dbAnswer[143][0] = "R&#x103;spuns corect: Alaska"; //plaintext ro answer
                        dbAnswer[143][1] = "Right answer: Alaska"; //plaintext en answer
                        dbAnswer[143][2] = "Richtige Antwort: Alaska"; //plaintext de answer
                        dbExpln[ 143] = [];
                        dbExpln[ 143][0] = "Insulele Aleutine formeaz&#x103; un lan&#x163; de insule vulcanice care se extinde spre vest de la Peninsula Alaska &#xEE;nspre Peninsula Kamchatka &#x15F;i care trece de longitudinea 180&#xB0;. Astfel, arhipelagul con&#x163;ine at&#xE2;t cel mai vestic teritoriu (Insula Amatignak) c&#xE2;t &#x15F;i cel mai estic teritoriu (Insula Semisopochnoi) al Statelor Unite. Aproape &#xEE;ntregul arhipelag face parte din statul Alaska.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 143][1] = "The Aleutian Islands are a chain of volcanic islands extending westward from the Alaska Peninsula towards the Kamchatka Peninsula and crossing longitude 180&#xB0; (at which point east and west longitude end). Thus, the archipelago contains both the westernmost part of the United States by longitude (Amatignak Island) and the easternmost by longitude (Semisopochnoi Island). Nearly all the archipelago is part of Alaska.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 143][2] = "Die Aleuten sind eine Inselkette zwischen Nordamerika und Asien am S&#252;drand des nordpazifischen Beringmeers und &#252;berqueren L&#228;ngengrad 180&#xB0;. Somit enthalten sie der westlichste Gebiet (Amatignak Insel), sowie der &#246;stlichste Gebiet (Semisopochnoi Insel) der Vereinigten Staaten. Nahezu die gesamte Inselgruppe ist Teil von Alaska.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 143] = [];
                        dbRefer[ 143][0] = "<a href='http://en.wikipedia.org/wiki/Aleutian_Islands' target='_blank'>[1] en.wikipedia.org/Aleutine</a>"; //references for ro explanation
                        dbRefer[ 143][1] = "<a href='http://en.wikipedia.org/wiki/Aleutian_Islands' target='_blank'>[1] en.wikipedia.org/Aleutian</a>"; //references for en explanation
                        dbRefer[ 143][2] = "<a href='http://en.wikipedia.org/wiki/Aleutian_Islands' target='_blank'>[1] en.wikipedia.org/Aleuten</a>"; //references for de explanation
                        dbQHint[ 143] = [];
                        dbQHint[ 143][0] = ""; //hint ro
                        dbQHint[ 143][1] = ""; //hint en
                        dbQHint[ 143][2] = ""; //hint de
                        dbQImage[143] = []; dbQImageSrc[143] = []; 
                        dbQImage[143][0] = "Images/C1.Microchitze/Img143US.png";	dbQImageSrc[143][0] = "center.serve.org";
                        dbQImage[143][1] = "Images/C1.Microchitze/Img143US.png";	dbQImageSrc[143][1] = "center.serve.org";
                        dbQImage[143][2] = "Images/C1.Microchitze/Img143US.png";	dbQImageSrc[143][2] = "center.serve.org";
                        dbAImage[143] = [];							dbAImageSrc[143] = [];
                        dbAImage[143][0] = "Images/C1.Microchitze/Img143Aleutian.png";  dbAImageSrc[143][0] = "en.wikipedia.org";
                        dbAImage[143][1] = "Images/C1.Microchitze/Img143Aleutian.png";  dbAImageSrc[143][1] = "en.wikipedia.org";
                        dbAImage[143][2] = "Images/C1.Microchitze/Img143Aleutian.png";  dbAImageSrc[143][2] = "en.wikipedia.org";
dbQList[ 144] = [];
dbQList[ 144][0] = "Dac&#x103; la Londra este miezul nop&#x163;ii de Craciun, c&#xE2;t este ceasul la Polul Sud? <br/>(Sta&#x163;ia Amundsen-Scott) <br/> (HH:MM)";    
dbQList[ 144][1] = "If it is Christmas midnight in London, what time is it at the South Pole? <br/>(Amundsen-Scott Station) <br/> (HH:MM)";  
dbQList[ 144][2] = "Wenn es in London Weihnachten Mitternacht ist, wie sp&#228;t ist es am S&#252;dpol? <br/>(Amundsen-Scott-Station) <br/> (HH:MM)";
                        dbAType[ 144] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 144] = []; dbAList[144][0] = "13:00";
                        dbACrit[ 144] = []; dbACrit[144][0] = 13;
                        dbAnswer[144] = [];
                        dbAnswer[144][0] = "R&#x103;spuns corect: 13:00"; //plaintext ro answer
                        dbAnswer[144][1] = "Right answer: 13:00"; //plaintext en answer
                        dbAnswer[144][2] = "Richtige Antwort: 13:00"; //plaintext de answer
                        dbExpln[ 144] = [];
                        dbExpln[ 144][0] = "Sta&#x163;ia folose&#x15F;te ora Noii Zeelande (UTC+13, ora de var&#x103;, care corespunde iernii din emisfera nordic&#x103;), deoarece toate c&#x103;l&#x103;toriile oficiale de la Polul Sud se fac prin Noua Zeeland&#x103;.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 144][1] = "The station uses New Zealand time (UTC+13 during daylight saving time, i.e. the northern winter), since all official travel from the pole goes through New Zealand.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 144][2] = "Die Station verwendet Neuseeland Zeit (UTC+13 w&#228;hrend der Sommerzeit, also den n&#246;rdlichen Winter), da alle offiziellen Reisen vom S&#252;dpol durch Neuseeland gehen.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 144] = [];
                        dbRefer[ 144][0] = "<a href='http://en.wikipedia.org/wiki/Amundsen%E2%80%93Scott_South_Pole_Station' target='_blank'>[1] en.wikipedia.org/Amundsen-Scott</a>"; //references for ro explanation
                        dbRefer[ 144][1] = "<a href='http://en.wikipedia.org/wiki/Amundsen%E2%80%93Scott_South_Pole_Station' target='_blank'>[1] en.wikipedia.org/Amundsen-Scott</a>"; //references for en explanation
                        dbRefer[ 144][2] = "<a href='http://en.wikipedia.org/wiki/Amundsen%E2%80%93Scott_South_Pole_Station' target='_blank'>[1] en.wikipedia.org/Amundsen-Scott</a>"; //references for de explanation
                        dbQHint[ 144] = [];
                        dbQHint[ 144][0] = ""; //hint ro
                        dbQHint[ 144][1] = ""; //hint en
                        dbQHint[ 144][2] = ""; //hint de
                        dbQImage[144] = []; dbQImageSrc[144] = []; 
                        dbQImage[144][0] = "Images/C1.Microchitze/Img144SouthPole.png";	dbQImageSrc[144][0] = "www.nsf.gov";
                        dbQImage[144][1] = "Images/C1.Microchitze/Img144SouthPole.png";	dbQImageSrc[144][1] = "www.nsf.gov";
                        dbQImage[144][2] = "Images/C1.Microchitze/Img144SouthPole.png";	dbQImageSrc[144][2] = "www.nsf.gov";
                        dbAImage[144] = [];							dbAImageSrc[144] = [];
                        dbAImage[144][0] = "Images/C1.Microchitze/Img144Antarctica.png";  dbAImageSrc[144][0] = "en.wikipedia.org";
                        dbAImage[144][1] = "Images/C1.Microchitze/Img144Antarctica.png";  dbAImageSrc[144][1] = "en.wikipedia.org";
                        dbAImage[144][2] = "Images/C1.Microchitze/Img144Antarctica.png";  dbAImageSrc[144][2] = "en.wikipedia.org";
dbQList[ 145] = [];
dbQList[ 145][0] = "Ce a fost primul obiect (f&#x103;cut de om) care a dep&#x103;&#x15F;it viteza sunetului?";    
dbQList[ 145][1] = "What was the first man-made object that crossed the sound speed?";  
dbQList[ 145][2] = "Was war das erste k&#252;nstliche Objekt, das die Schallgeschwindigkeit &#252;berquert hat?";
                        dbAType[ 145] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 145] = []; dbAList[145][0] = "bici"; dbAList[145][1] = "whip"; dbAList[145][2] = "Peitsche";
                        dbACrit[ 145] = []; dbACrit[145][0] = 13; dbACrit[145][1] = 13; dbACrit[145][2] = 13;
                        dbAnswer[145] = [];
                        dbAnswer[145][0] = "R&#x103;spuns corect: biciul"; //plaintext ro answer
                        dbAnswer[145][1] = "Right answer: the whip"; //plaintext en answer
                        dbAnswer[145][2] = "Richtige Antwort: die Peitsche"; //plaintext de answer
                        dbExpln[ 145] = [];
                        dbExpln[ 145][0] = "Pentru anumite tipuri de bici, v&#xE2;rful poate fi accelerat p&#xE2;n&#x103; la viteze supersonice, produc&#xE2;nd pocnetul caracteristic (care este de fapt un bang sonic). Biciul este primul obiect creat de om care poate dep&#x103;&#x15F;i viteza sunetului.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 145][1] = "When some types of flexible whip are swung in a certain way, a loop in the material can move down the whip, rapidly increasing in speed, until the tip moves faster than the speed of sound. This creates a small sonic boom. Whips were the first man-made objects to break the sound barrier.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 145][2] = "Das Ende einer Peitsche kann, bei korrektem Schlag, auf &#220;berschallgeschwindigkeit beschleunigt werden, was den Peitschenknall hervorruft. Der Knall resultiert aus der Bildung einer Schlaufe, welche sich mit steigender Geschwindigkeit auf das Peitschenende zubewegt und dabei, beim &#214;ffnen am Ende der Schnur, die Schallgeschwindigkeit &#252;berschreitet. Die Schnur erreicht im Scheitelpunkt der Schlaufe etwa doppelte Schallgeschwindigkeit.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 145] = [];
                        dbRefer[ 145][0] = "<a href='http://en.wikipedia.org/wiki/Whip' target='_blank'>[1] en.wikipedia.org/Bici</a>"; //references for ro explanation
                        dbRefer[ 145][1] = "<a href='http://en.wikipedia.org/wiki/Whip' target='_blank'>[1] en.wikipedia.org/Whip</a>"; //references for en explanation
                        dbRefer[ 145][2] = "<a href='http://de.wikipedia.org/wiki/Peitsche' target='_blank'>[1] de.wikipedia.org/Peitsche</a>"; //references for de explanation
                        dbQHint[ 145] = [];
                        dbQHint[ 145][0] = ""; //hint ro
                        dbQHint[ 145][1] = ""; //hint en
                        dbQHint[ 145][2] = ""; //hint de
                        dbQImage[145] = []; dbQImageSrc[145] = []; 
                        dbQImage[145][0] = "Images/C1.Microchitze/Img145Mach.png";	dbQImageSrc[145][0] = "www.faqalert.com";
                        dbQImage[145][1] = "Images/C1.Microchitze/Img145Mach.png";	dbQImageSrc[145][1] = "www.faqalert.com";
                        dbQImage[145][2] = "Images/C1.Microchitze/Img145Mach.png";	dbQImageSrc[145][2] = "www.faqalert.com";
                        dbAImage[145] = [];							dbAImageSrc[145] = [];
                        dbAImage[145][0] = "Images/C1.Microchitze/Img145Whip.png";  dbAImageSrc[145][0] = "www.golfbrekers.be";
                        dbAImage[145][1] = "Images/C1.Microchitze/Img145Whip.png";  dbAImageSrc[145][1] = "www.golfbrekers.be";
                        dbAImage[145][2] = "Images/C1.Microchitze/Img145Whip.png";  dbAImageSrc[145][2] = "www.golfbrekers.be";
dbQList[ 146] = [];
dbQList[ 146][0] = "Ce nu avea nevoie un tren cu aburi pentru a merge, dar totu&#x15F;i nu a mers niciodat&#x103; f&#x103;r&#x103;?";    
dbQList[ 146][1] = "What did a steam train not need in order to work, yet has never worked without?";  
dbQList[ 146][2] = "Was brauchte ein Dampfzug nicht, um zu funktionieren, jedoch hat nie ohne funktioniert?";
                        dbAType[ 146] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 146] = []; dbAList[146][0] = "zgomot"; dbAList[146][1] = "noise"; dbAList[146][2] = "rm"; dbAList[146][3] = "usch";
                        dbACrit[ 146] = []; dbACrit[146][0] = 13; dbACrit[146][1] = 13; dbACrit[146][2] = 13; dbACrit[146][2] = 12; dbACrit[146][2] = 13;
                        dbAnswer[146] = [];
                        dbAnswer[146][0] = "R&#x103;spuns corect: zgomot"; //plaintext ro answer
                        dbAnswer[146][1] = "Right answer: noise"; //plaintext en answer
                        dbAnswer[146][2] = "Richtige Antwort: Ger&#228;usche"; //plaintext de answer
                        dbExpln[ 146] = [];
                        dbExpln[ 146][0] = ""; //explanation ro
                        dbExpln[ 146][1] = ""; //explanation en
                        dbExpln[ 146][2] = ""; //explanation de
                        dbRefer[ 146] = [];
                        dbRefer[ 146][0] = ""; //references for ro explanation
                        dbRefer[ 146][1] = ""; //references for en explanation
                        dbRefer[ 146][2] = ""; //references for de explanation
                        dbQHint[ 146] = [];
                        dbQHint[ 146][0] = ""; //hint ro
                        dbQHint[ 146][1] = ""; //hint en
                        dbQHint[ 146][2] = ""; //hint de
                        dbQImage[146] = []; dbQImageSrc[146] = []; 
                        dbQImage[146][0] = "Images/C1.Microchitze/Img146Steam.png";	dbQImageSrc[146][0] = "pictures.4ever.eu";
                        dbQImage[146][1] = "Images/C1.Microchitze/Img146Steam.png";	dbQImageSrc[146][1] = "pictures.4ever.eu";
                        dbQImage[146][2] = "Images/C1.Microchitze/Img146Steam.png";	dbQImageSrc[146][2] = "pictures.4ever.eu";
                        dbAImage[146] = [];							dbAImageSrc[146] = [];
                        dbAImage[146][0] = "Images/C1.Microchitze/Img146Train.png";  dbAImageSrc[146][0] = "www.condenaststore.com";
                        dbAImage[146][1] = "Images/C1.Microchitze/Img146Train.png";  dbAImageSrc[146][1] = "www.condenaststore.com";
                        dbAImage[146][2] = "Images/C1.Microchitze/Img146Train.png";  dbAImageSrc[146][2] = "www.condenaststore.com";
dbQList[ 147] = [];
dbQList[ 147][0] = "Ce face iepurele inevitabil la lumina soarelui?";    
dbQList[ 147][1] = "What does every rabbit unavoidably make when exposed to sunlight?";  
dbQList[ 147][2] = "Was macht jeder Kaninchen unvermeidlich, wenn\'s dem Sonnenlicht ausgesetzt ist?";
                        dbAType[ 147] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 147] = []; dbAList[147][0] = "umbr"; dbAList[147][1] = "shad"; dbAList[147][2] = "Schatten";
                        dbACrit[ 147] = []; dbACrit[147][0] = 13; dbACrit[147][1] = 13; dbACrit[147][2] = 13;
                        dbAnswer[147] = [];
                        dbAnswer[147][0] = "R&#x103;spuns corect: umbr&#x103;"; //plaintext ro answer
                        dbAnswer[147][1] = "Right answer: a shaddow"; //plaintext en answer
                        dbAnswer[147][2] = "Richtige Antwort: ein Schatten"; //plaintext de answer
                        dbExpln[ 147] = [];
                        dbExpln[ 147][0] = ""; //explanation ro
                        dbExpln[ 147][1] = ""; //explanation en
                        dbExpln[ 147][2] = ""; //explanation de
                        dbRefer[ 147] = [];
                        dbRefer[ 147][0] = ""; //references for ro explanation
                        dbRefer[ 147][1] = ""; //references for en explanation
                        dbRefer[ 147][2] = ""; //references for de explanation
                        dbQHint[ 147] = [];
                        dbQHint[ 147][0] = ""; //hint ro
                        dbQHint[ 147][1] = ""; //hint en
                        dbQHint[ 147][2] = ""; //hint de
                        dbQImage[147] = []; dbQImageSrc[147] = []; 
                        dbQImage[147][0] = "Images/C1.Microchitze/Img147Rabbit.png";	dbQImageSrc[147][0] = "www.desicomments.com";
                        dbQImage[147][1] = "Images/C1.Microchitze/Img147Rabbit.png";	dbQImageSrc[147][1] = "www.desicomments.com";
                        dbQImage[147][2] = "Images/C1.Microchitze/Img147Rabbit.png";	dbQImageSrc[147][2] = "www.desicomments.com";
                        dbAImage[147] = [];							dbAImageSrc[147] = [];
                        dbAImage[147][0] = "Images/C1.Microchitze/Img147Shadow.png";  dbAImageSrc[147][0] = "footage.framepool.com";
                        dbAImage[147][1] = "Images/C1.Microchitze/Img147Shadow.png";  dbAImageSrc[147][1] = "footage.framepool.com";
                        dbAImage[147][2] = "Images/C1.Microchitze/Img147Shadow.png";  dbAImageSrc[147][2] = "footage.framepool.com";
dbQList[ 148] = [];
dbQList[ 148][0] = "Care este partea alb&#x103; a majorit&#x103;&#x163;ii ou&#x103;lor crude?";    
dbQList[ 148][1] = "Which part is white in most raw eggs?";  
dbQList[ 148][2] = "Welcher Teil ist wei&#223; in den meisten rohen Eiern?";
                        dbAType[ 148] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 148] = []; dbAList[148][0] = "coaja"; dbAList[148][1] = "shell"; dbAList[148][2] = "Schale";
                        dbACrit[ 148] = []; dbACrit[148][0] = 13; dbACrit[148][1] = 13; dbACrit[148][2] = 13;
                        dbAnswer[148] = [];
                        dbAnswer[148][0] = "R&#x103;spuns corect: coaja"; //plaintext ro answer
                        dbAnswer[148][1] = "Right answer: the eggshell"; //plaintext en answer
                        dbAnswer[148][2] = "Richtige Antwort: die Eierschale"; //plaintext de answer
                        dbExpln[ 148] = [];
                        dbExpln[ 148][0] = "Albu&#x15F;ul este transparent &#xEE;n ou&#x103;le crude."; //explanation ro
                        dbExpln[ 148][1] = "The eggwhite is transparent in raw eggs."; //explanation en
                        dbExpln[ 148][2] = "Das Eiwei&#223; ist transparent in rohen Eiern."; //explanation de
                        dbRefer[ 148] = [];
                        dbRefer[ 148][0] = ""; //references for ro explanation
                        dbRefer[ 148][1] = ""; //references for en explanation
                        dbRefer[ 148][2] = ""; //references for de explanation
                        dbQHint[ 148] = [];
                        dbQHint[ 148][0] = ""; //hint ro
                        dbQHint[ 148][1] = ""; //hint en
                        dbQHint[ 148][2] = ""; //hint de
                        dbQImage[148] = []; dbQImageSrc[148] = []; 
                        dbQImage[148][0] = "Images/C1.Microchitze/Img148Egg.png";	dbQImageSrc[148][0] = "www.jokideo.com";
                        dbQImage[148][1] = "Images/C1.Microchitze/Img148Egg.png";	dbQImageSrc[148][1] = "www.jokideo.com";
                        dbQImage[148][2] = "Images/C1.Microchitze/Img148Egg.png";	dbQImageSrc[148][2] = "www.jokideo.com";
                        dbAImage[148] = [];							dbAImageSrc[148] = [];
                        dbAImage[148][0] = "Images/C1.Microchitze/Img148Raw.png";  dbAImageSrc[148][0] = "www.foodsthatcure.com";
                        dbAImage[148][1] = "Images/C1.Microchitze/Img148Raw.png";  dbAImageSrc[148][1] = "www.foodsthatcure.com";
                        dbAImage[148][2] = "Images/C1.Microchitze/Img148Raw.png";  dbAImageSrc[148][2] = "www.foodsthatcure.com";
dbQList[ 149] = [];
dbQList[ 149][0] = "Ce au vacile 4 &#x15F;i femeile 2?";    
dbQList[ 149][1] = "What do cows have 4 and women 2?";  
dbQList[ 149][2] = "Was haben K&#252;he 4 und Frauen 2?";
                        dbAType[ 149] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 149] = []; dbAList[149][0] = "picio"; dbAList[149][1] = "leg"; dbAList[149][2] = "Bein";
                        dbACrit[ 149] = []; dbACrit[149][0] = 13; dbACrit[149][1] = 13; dbACrit[149][2] = 13;
                        dbAnswer[149] = [];
                        dbAnswer[149][0] = "R&#x103;spuns corect: picioare"; //plaintext ro answer
                        dbAnswer[149][1] = "Right answer: legs"; //plaintext en answer
                        dbAnswer[149][2] = "Richtige Antwort: Beine"; //plaintext de answer
                        dbExpln[ 149] = [];
                        dbExpln[ 149][0] = "Pentru curio&#x15F;i, vacile au patru mameloane func&#x163;ionale, fiecare conectat la c&#xE2;te o gland&#x103; mamar&#x103;, dar adesea exist&#x103; mameloane suplimentare, nefunc&#x163;ionale.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 149][1] = "In case you wonder, cows have four functional teats, each with one mammary gland in the udder, but extra (non-functional) teats occur often and are known as supernumerary teats.<sup>[1]</sup>"; //explanation en
                        dbExpln[ 149][2] = "Falls neugierig, K&#252;he haben vier funktionelle Zitzen, jeweils mit einer Milchdr&#252;se im Euter verbunden, aber extra (nicht funktionsf&#228;hige) Zitzen kommen h&#228;ufig vor.<sup>[1]</sup>"; //explanation de
                        dbRefer[ 149] = [];
                        dbRefer[ 149][0] = "<a href='http://en.wikipedia.org/wiki/Nipple' target='_blank'>[1] en.wikipedia.org/Mamelon</a>"; //references for ro explanation
                        dbRefer[ 149][1] = "<a href='http://en.wikipedia.org/wiki/Nipple' target='_blank'>[1] en.wikipedia.org/Nipple</a>"; //references for en explanation
                        dbRefer[ 149][2] = "<a href='http://en.wikipedia.org/wiki/Nipple' target='_blank'>[1] en.wikipedia.org/Brustwarze</a>"; //references for de explanation
                        dbQHint[ 149] = [];
                        dbQHint[ 149][0] = ""; //hint ro
                        dbQHint[ 149][1] = ""; //hint en
                        dbQHint[ 149][2] = ""; //hint de
                        dbQImage[149] = []; dbQImageSrc[149] = []; 
                        dbQImage[149][0] = "Images/C1.Microchitze/Img149Cow.png";	dbQImageSrc[149][0] = "www.wpclipart.com";
                        dbQImage[149][1] = "Images/C1.Microchitze/Img149Cow.png";	dbQImageSrc[149][1] = "www.wpclipart.com";
                        dbQImage[149][2] = "Images/C1.Microchitze/Img149Cow.png";	dbQImageSrc[149][2] = "www.wpclipart.com";
                        dbAImage[149] = [];							dbAImageSrc[149] = [];
                        dbAImage[149][0] = "Images/C1.Microchitze/Img149Cow.png";  dbAImageSrc[149][0] = "www.wpclipart.com";
                        dbAImage[149][1] = "Images/C1.Microchitze/Img149Cow.png";  dbAImageSrc[149][1] = "www.wpclipart.com";
                        dbAImage[149][2] = "Images/C1.Microchitze/Img149Cow.png";  dbAImageSrc[149][2] = "www.wpclipart.com";
                        
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGOCHITZE RO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
dbQList[ 150] = [];
dbQList[ 150][0] = "Pentru ce substantiv, forma de plural se termin&#x103; cu litera &quot;<b>&#x103;</b>&quot;?";    
dbQList[ 150][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 150][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 150] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 150] = []; dbAList[150][0] = "ou";
                        dbACrit[ 150] = []; dbACrit[150][0] = 11;
                        dbAnswer[150] = [];
                        dbAnswer[150][0] = "R&#x103;spuns corect: ou - ou&#x103;"; //plaintext ro answer
                        dbAnswer[150][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[150][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 150] = [];
                        dbExpln[ 150][0] = ""; //explanation ro
                        dbExpln[ 150][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 150][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 150] = [];
                        dbRefer[ 150][0] = ""; //references for ro explanation
                        dbRefer[ 150][1] = ""; //references for en explanation
                        dbRefer[ 150][2] = ""; //references for de explanation
                        dbQHint[ 150] = [];
                        dbQHint[ 150][0] = "Cuv&#xE2;ntul are &#x15F;i form&#x103; de singular, &#x15F;i form&#x103; de plural."; //hint ro
                        dbQHint[ 150][1] = ""; //hint en
                        dbQHint[ 150][2] = ""; //hint de
                        dbQImage[150] = []; dbQImageSrc[150] = []; 
                        dbQImage[150][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[150][0] = "";
                        dbQImage[150][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[150][1] = "";
                        dbQImage[150][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[150][2] = "";
                        dbAImage[150] = [];							               dbAImageSrc[150] = [];
                        dbAImage[150][0] = "Images/C1.Microchitze/Img150Eggs.png"; dbAImageSrc[150][0] = "gallery.yopriceville.com";
                        dbAImage[150][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[150][1] = "";
                        dbAImage[150][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[150][2] = "";
dbQList[ 151] = [];
dbQList[ 151][0] = "Pentru ce substantiv feminin, forma de singular se termin&#x103; cu litera &quot;<b>i</b>&quot;?";    
dbQList[ 151][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 151][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 151] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 151] = []; dbAList[151][0] = "zi";
                        dbACrit[ 151] = []; dbACrit[151][0] = 11;
                        dbAnswer[151] = [];
                        dbAnswer[151][0] = "R&#x103;spuns corect: zi - zile"; //plaintext ro answer
                        dbAnswer[151][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[151][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 151] = [];
                        dbExpln[ 151][0] = ""; //explanation ro
                        dbExpln[ 151][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 151][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 151] = [];
                        dbRefer[ 151][0] = ""; //references for ro explanation
                        dbRefer[ 151][1] = ""; //references for en explanation
                        dbRefer[ 151][2] = ""; //references for de explanation
                        dbQHint[ 151] = [];
                        dbQHint[ 151][0] = "Cuv&#xE2;ntul are &#x15F;i form&#x103; de singular, &#x15F;i form&#x103; de plural."; //hint ro
                        dbQHint[ 151][1] = ""; //hint en
                        dbQHint[ 151][2] = ""; //hint de
                        dbQImage[151] = []; dbQImageSrc[151] = []; 
                        dbQImage[151][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[151][0] = "";
                        dbQImage[151][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[151][1] = "";
                        dbQImage[151][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[151][2] = "";
                        dbAImage[151] = [];							               dbAImageSrc[151] = [];
                        dbAImage[151][0] = "Images/C1.Microchitze/Img151Day.png";  dbAImageSrc[151][0] = "www.clipartkid.com";
                        dbAImage[151][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[151][1] = "";
                        dbAImage[151][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[151][2] = "";
dbQList[ 152] = [];
dbQList[ 152][0] = "Care este cel mai scurt substantiv, pentru care forma de singular &#x15F;i cea de plural sunt identice?";    
dbQList[ 152][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 152][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 152] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 152] = []; dbAList[152][0] = "pui"; dbAList[152][1] = "tei";
                        dbACrit[ 152] = []; dbACrit[152][0] = 11; dbACrit[152][1] = 11;
                        dbAnswer[152] = [];
                        dbAnswer[152][0] = "R&#x103;spuns corect: pui / tei"; //plaintext ro answer
                        dbAnswer[152][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[152][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 152] = [];
                        dbExpln[ 152][0] = ""; //explanation ro
                        dbExpln[ 152][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 152][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 152] = [];
                        dbRefer[ 152][0] = ""; //references for ro explanation
                        dbRefer[ 152][1] = ""; //references for en explanation
                        dbRefer[ 152][2] = ""; //references for de explanation
                        dbQHint[ 152] = [];
                        dbQHint[ 152][0] = "Cuv&#xE2;ntul are &#x15F;i form&#x103; de singular, &#x15F;i form&#x103; de plural."; //hint ro
                        dbQHint[ 152][1] = ""; //hint en
                        dbQHint[ 152][2] = ""; //hint de
                        dbQImage[152] = []; dbQImageSrc[152] = []; 
                        dbQImage[152][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[152][0] = "";
                        dbQImage[152][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[152][1] = "";
                        dbQImage[152][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[152][2] = "";
                        dbAImage[152] = [];							               dbAImageSrc[152] = [];
                        dbAImage[152][0] = "Images/C1.Microchitze/Img152Pui.png";  dbAImageSrc[152][0] = "www.divahair.ro";
                        dbAImage[152][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[152][1] = "";
                        dbAImage[152][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[152][2] = "";
dbQList[ 153] = [];
dbQList[ 153][0] = "Pentru ce substantiv, forma de plural are cu patru litere mai mult dec&#xE2;t cea de singular?";    
dbQList[ 153][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 153][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 153] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 153] = []; dbAList[153][0] = "om"; dbAList[153][1] = "oameni";
                        dbACrit[ 153] = []; dbACrit[153][0] = 11; dbACrit[153][1] = 13;
                        dbAnswer[153] = [];
                        dbAnswer[153][0] = "R&#x103;spuns corect: om - oameni"; //plaintext ro answer
                        dbAnswer[153][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[153][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 153] = [];
                        dbExpln[ 153][0] = ""; //explanation ro
                        dbExpln[ 153][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 153][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 153] = [];
                        dbRefer[ 153][0] = ""; //references for ro explanation
                        dbRefer[ 153][1] = ""; //references for en explanation
                        dbRefer[ 153][2] = ""; //references for de explanation
                        dbQHint[ 153] = [];
                        dbQHint[ 153][0] = "Cuv&#xE2;ntul are &#x15F;i form&#x103; de singular, &#x15F;i form&#x103; de plural."; //hint ro
                        dbQHint[ 153][1] = ""; //hint en
                        dbQHint[ 153][2] = ""; //hint de
                        dbQImage[153] = []; dbQImageSrc[153] = []; 
                        dbQImage[153][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[153][0] = "";
                        dbQImage[153][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[153][1] = "";
                        dbQImage[153][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[153][2] = "";
                        dbAImage[153] = [];							               dbAImageSrc[153] = [];
                        dbAImage[153][0] = "Images/C1.Microchitze/Img153Om.png";   dbAImageSrc[153][0] = "www.pixabay.com";
                        dbAImage[153][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[153][1] = "";
                        dbAImage[153][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[153][2] = "";
dbQList[ 154] = [];
dbQList[ 154][0] = "Pentru ce substantiv, forma de plural are cu dou&#x103; litere mai pu&#x163;in dec&#xE2;t cea de singular?";    
dbQList[ 154][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 154][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 154] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 154] = []; dbAList[154][0] = "oaie"; dbAList[154][1] = "oi";
                        dbACrit[ 154] = []; dbACrit[154][0] = 11; dbACrit[154][1] = 13;
                        dbAnswer[154] = [];
                        dbAnswer[154][0] = "R&#x103;spuns corect: oaie - oi"; //plaintext ro answer
                        dbAnswer[154][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[154][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 154] = [];
                        dbExpln[ 154][0] = ""; //explanation ro
                        dbExpln[ 154][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 154][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 154] = [];
                        dbRefer[ 154][0] = ""; //references for ro explanation
                        dbRefer[ 154][1] = ""; //references for en explanation
                        dbRefer[ 154][2] = ""; //references for de explanation
                        dbQHint[ 154] = [];
                        dbQHint[ 154][0] = "Cuv&#xE2;ntul are &#x15F;i form&#x103; de singular, &#x15F;i form&#x103; de plural."; //hint ro
                        dbQHint[ 154][1] = ""; //hint en
                        dbQHint[ 154][2] = ""; //hint de
                        dbQImage[154] = []; dbQImageSrc[154] = []; 
                        dbQImage[154][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[154][0] = "";
                        dbQImage[154][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[154][1] = "";
                        dbQImage[154][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[154][2] = "";
                        dbAImage[154] = [];							               dbAImageSrc[154] = [];
                        dbAImage[154][0] = "Images/C1.Microchitze/Img154Oaie.png"; dbAImageSrc[154][0] = "www.pixabay.com";
                        dbAImage[154][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[154][1] = "";
                        dbAImage[154][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[154][2] = "";
dbQList[ 155] = [];
dbQList[ 155][0] = "Cu c&#xE2;&#x163;i de &quot;<b>i</b>&quot; se scrie pluralul cuv&#xE2;ntului &quot;<b>antipatie</b>&quot;?";    
dbQList[ 155][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 155][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 155] = 2; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 155] = []; dbAList[155][0] = 3;
                        dbACrit[ 155] = []; dbACrit[155][0] = 20;
                        dbAnswer[155] = [];
                        dbAnswer[155][0] = "R&#x103;spuns corect: 3"; //plaintext ro answer
                        dbAnswer[155][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[155][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 155] = [];
                        dbExpln[ 155][0] = ""; //explanation ro
                        dbExpln[ 155][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 155][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 155] = [];
                        dbRefer[ 155][0] = ""; //references for ro explanation
                        dbRefer[ 155][1] = ""; //references for en explanation
                        dbRefer[ 155][2] = ""; //references for de explanation
                        dbQHint[ 155] = [];
                        dbQHint[ 155][0] = ""; //hint ro
                        dbQHint[ 155][1] = ""; //hint en
                        dbQHint[ 155][2] = ""; //hint de
                        dbQImage[155] = []; dbQImageSrc[155] = []; 
                        dbQImage[155][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[155][0] = "";
                        dbQImage[155][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[155][1] = "";
                        dbQImage[155][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[155][2] = "";
                        dbAImage[155] = [];							               dbAImageSrc[155] = [];
                        dbAImage[155][0] = "Images/C1.Microchitze/Img155Anti.png";  dbAImageSrc[155][0] = "";
                        dbAImage[155][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[155][1] = "";
                        dbAImage[155][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[155][2] = "";
dbQList[ 156] = [];
dbQList[ 156][0] = "Care este cel mai lung cuv&#xE2;nt care &#238;ncepe cu o vocal&#x103;, se termin&#x103; cu o vocal&#x103; &#x15F;i &#238;n rest con&#x163;ine doar consoane?";    
dbQList[ 156][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 156][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 156] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 156] = []; dbAList[156][0] = "nspre";
                        dbACrit[ 156] = []; dbACrit[156][0] = 13;
                        dbAnswer[156] = [];
                        dbAnswer[156][0] = "R&#x103;spuns corect: &#238;nspre"; //plaintext ro answer
                        dbAnswer[156][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[156][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 156] = [];
                        dbExpln[ 156][0] = ""; //explanation ro
                        dbExpln[ 156][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 156][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 156] = [];
                        dbRefer[ 156][0] = ""; //references for ro explanation
                        dbRefer[ 156][1] = ""; //references for en explanation
                        dbRefer[ 156][2] = ""; //references for de explanation
                        dbQHint[ 156] = [];
                        dbQHint[ 156][0] = ""; //hint ro
                        dbQHint[ 156][1] = ""; //hint en
                        dbQHint[ 156][2] = ""; //hint de
                        dbQImage[156] = []; dbQImageSrc[156] = []; 
                        dbQImage[156][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[156][0] = "";
                        dbQImage[156][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[156][1] = "";
                        dbQImage[156][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[156][2] = "";
                        dbAImage[156] = [];							               dbAImageSrc[156] = [];
                        dbAImage[156][0] = "Images/C1.Microchitze/Img156Inspre.png";  dbAImageSrc[156][0] = "www.colegiojuanbosco.com";
                        dbAImage[156][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[156][1] = "";
                        dbAImage[156][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[156][2] = "";
dbQList[ 157] = [];
dbQList[ 157][0] = "Ce cuv&#xE2;nt con&#x163;ine 5 consoane consecutive?";    
dbQList[ 157][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 157][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 157] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 157] = []; dbAList[157][0] = "optsprezece"; dbAList[157][1] = "18";
                        dbACrit[ 157] = []; dbACrit[157][0] = 10; dbACrit[157][1] = 10;
                        dbAnswer[157] = [];
                        dbAnswer[157][0] = "R&#x103;spuns corect: optsprezece"; //plaintext ro answer
                        dbAnswer[157][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[157][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 157] = [];
                        dbExpln[ 157][0] = ""; //explanation ro
                        dbExpln[ 157][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 157][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 157] = [];
                        dbRefer[ 157][0] = ""; //references for ro explanation
                        dbRefer[ 157][1] = ""; //references for en explanation
                        dbRefer[ 157][2] = ""; //references for de explanation
                        dbQHint[ 157] = [];
                        dbQHint[ 157][0] = ""; //hint ro
                        dbQHint[ 157][1] = ""; //hint en
                        dbQHint[ 157][2] = ""; //hint de
                        dbQImage[157] = []; dbQImageSrc[157] = []; 
                        dbQImage[157][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[157][0] = "";
                        dbQImage[157][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[157][1] = "";
                        dbQImage[157][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[157][2] = "";
                        dbAImage[157] = [];							               dbAImageSrc[157] = [];
                        dbAImage[157][0] = "Images/C1.Microchitze/Img157_18.png";  dbAImageSrc[157][0] = "www.reading-buses.co.uk";
                        dbAImage[157][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[157][1] = "";
                        dbAImage[157][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[157][2] = "";
dbQList[ 158] = [];
dbQList[ 158][0] = "Dintre cuvintele care se termin&#x103; &#xEE;n &quot;<b>-ologie</b>&quot;, care este cel mai scurt?";    
dbQList[ 158][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 158][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 158] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 158] = []; dbAList[158][0] = "oologi";
                        dbACrit[ 158] = []; dbACrit[158][0] = 13;
                        dbAnswer[158] = [];
                        dbAnswer[158][0] = "R&#x103;spuns corect: oologie"; //plaintext ro answer
                        dbAnswer[158][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[158][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 158] = [];
                        dbExpln[ 158][0] = "OOLOGIE s.f. Parte a ornitologiei care se ocup&#x103; cu studiul &#x15F;tiin&#x163;ific al ou&#x103;lor.<sup>[1]</sup>"; //explanation ro
                        dbExpln[ 158][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 158][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 158] = [];
                        dbRefer[ 158][0] = "<a href='http://dexonline.ro/definitie/oologie' target='_blank'>[1] dexonline.ro/oologie</a>"; //references for ro explanation
                        dbRefer[ 158][1] = ""; //references for en explanation
                        dbRefer[ 158][2] = ""; //references for de explanation
                        dbQHint[ 158] = [];
                        dbQHint[ 158][0] = ""; //hint ro
                        dbQHint[ 158][1] = ""; //hint en
                        dbQHint[ 158][2] = ""; //hint de
                        dbQImage[158] = []; dbQImageSrc[158] = []; 
                        dbQImage[158][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[158][0] = "";
                        dbQImage[158][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[158][1] = "";
                        dbQImage[158][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[158][2] = "";
                        dbAImage[158] = [];							               dbAImageSrc[158] = [];
                        dbAImage[158][0] = "Images/C1.Microchitze/Img158Ool.png";  dbAImageSrc[158][0] = "nhm_oology";
                        dbAImage[158][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[158][1] = "";
                        dbAImage[158][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[158][2] = "";
dbQList[ 159] = [];
dbQList[ 159][0] = "Rescrie&#x163;i urm&#x103;toarea propozi&#x163;ie ad&#x103;ug&#xE2;nd spa&#x163;iile &#x15F;i cratimele omise <br/> &quot;<b>Copiiiiiiiiau mamei lor.</b>&quot;";    
dbQList[ 159][1] = "This question is specific to the Romanian language and cannot be translated...";  
dbQList[ 159][2] = "Diese Frage ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden...";
                        dbAType[ 159] = 1; // 0 = no input accepted; 1 = free text; 2 = numeric only;
                        dbAList[ 159] = []; dbAList[159][0] = "Copiii-i ii-i iau mamei lor";
                        dbACrit[ 159] = []; dbACrit[159][0] = 13;
                        dbAnswer[159] = [];
                        dbAnswer[159][0] = "R&#x103;spuns corect: Copiii-i ii-i iau mamei lor."; //plaintext ro answer
                        dbAnswer[159][1] = "Right answer: -- "; //plaintext en answer
                        dbAnswer[159][2] = "Richtige Antwort: --"; //plaintext de answer
                        dbExpln[ 159] = [];
                        dbExpln[ 159][0] = "Cu alte cuvinte: <i>Ai ei copii (Copiii-i) cama&#x15F;i &#xEE;i iau (ii-i iau) mamei lor.</i>"; //explanation ro
                        dbExpln[ 159][1] = "This answer is specific to the Romanian language and cannot be translated..."; //explanation en
                        dbExpln[ 159][2] = "Diese Antwort ist spezifisch f&#252;r die rum&#228;nische Sprache und kann nicht &#252;bersetzt werden..."; //explanation de
                        dbRefer[ 159] = [];
                        dbRefer[ 159][0] = ""; //references for ro explanation
                        dbRefer[ 159][1] = ""; //references for en explanation
                        dbRefer[ 159][2] = ""; //references for de explanation
                        dbQHint[ 159] = [];
                        dbQHint[ 159][0] = "Doar spa&#x163;ii &#x15F;i cratime au fost omise; propozi&#x163;ia nu con&#x163;ine litera &quot;<b>&#xEE;</b>&quot;."; //hint ro
                        dbQHint[ 159][1] = ""; //hint en
                        dbQHint[ 159][2] = ""; //hint de
                        dbQImage[159] = []; dbQImageSrc[159] = []; 
                        dbQImage[159][0] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[159][0] = "";
                        dbQImage[159][1] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[159][1] = "";
                        dbQImage[159][2] = "Images/C1.Microchitze/Img_Blank.png";	dbQImageSrc[159][2] = "";
                        dbAImage[159] = [];							               dbAImageSrc[159] = [];
                        dbAImage[159][0] = "Images/C1.Microchitze/Img159iii.png";  dbAImageSrc[159][0] = "www.iiiimusic.com";
                        dbAImage[159][1] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[159][1] = "";
                        dbAImage[159][2] = "Images/C1.Microchitze/Img_Blank.png";  dbAImageSrc[159][2] = "";