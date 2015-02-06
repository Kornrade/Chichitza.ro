/*-----------------------------------------------------------------------------------------------------------*\
| This file contains the chess-related javascript functions.                                                  |     
| The following functions are available:                                                                      |
|       showInteractive(n)........... sets interactive puzzle                                                 |
\*-----------------------------------------------------------------------------------------------------------*/
/* GLOBAL VARS USED IN THIS FILE:*/
var lang;

var AppTitleArray = [];

AppTitleArray[ 1] = [];
AppTitleArray[ 1][0] = 'S&#x103;ge&#x21B;i';
AppTitleArray[ 1][1] = 'Arrows';
AppTitleArray[ 1][2] = 'Pfeile';
AppTitleArray[ 2] = [];
AppTitleArray[ 2][0] = 'Trei Dame';
AppTitleArray[ 2][1] = 'Three queens';
AppTitleArray[ 2][2] = 'Drei Damen';
AppTitleArray[ 3] = [];
AppTitleArray[ 3][0] = 'Cand o face plopul mere';
AppTitleArray[ 3][1] = 'When hell freezes...';
AppTitleArray[ 3][2] = 'Wenn es schwarz schneit...';
AppTitleArray[ 4] = [];
AppTitleArray[ 4][0] = 'Sudoku zg&#xE2;rie-nori';
AppTitleArray[ 4][1] = 'Skyscraper Sudoku';
AppTitleArray[ 4][2] = 'Wolkenkratzer Sudoku';
AppTitleArray[ 5] = [];
AppTitleArray[ 5][0] = 'Problema fermierului';
AppTitleArray[ 5][1] = 'Farmer puzzle';
AppTitleArray[ 5][2] = 'Das Bauer-R&auml;tsel';
AppTitleArray[ 6] = [];
AppTitleArray[ 6][0] = 'Segmente';
AppTitleArray[ 6][1] = 'Segments';
AppTitleArray[ 6][2] = 'Strecken';
AppTitleArray[ 7] = [];
AppTitleArray[ 7][0] = 'Testul Mensa';
AppTitleArray[ 7][1] = 'Mensa Test';
AppTitleArray[ 7][2] = 'Mensa Test';

var AppExplArray = [];

AppExplArray[ 1] = [];
AppExplArray[ 1][0] = 'Completa&#x21B;i tabla cu s&#x103;ge&#x21B;i astfel &#xEE;nc&#xE2;t fiecare num&#x103;r de pe margine s&#x103; indice corect c&#xE2;te s&#x103;ge&#x21B;i arat&#x103; spre el.';
AppExplArray[ 1][1] = 'Fill the board with arrows, so that all the numbers on the rim correctly indicate how many arrows point towards them.';
AppExplArray[ 1][2] = 'F&#252;llen Sie das Brett mit Pfeilen, so dass alle Zahlen auf dem Rand richtig anzeigen, wie viele Pfeile auf sie hinweisen.';
AppExplArray[ 2] = [];
AppExplArray[ 2][0] = 'Plasa&#x163;i cele 3 dame pe tabl&#x103;, astfel &#xEE;nc&#xE2;t toate c&#xE2;mpurile s&#x103; fie atacate.';
AppExplArray[ 2][1] = 'Place the 3 queens on the board so that all fields are attacked.';
AppExplArray[ 2][2] = 'Legen Sie die 3 Damen auf dem Brett, so dass alle Felder angegriffen werden.';
AppExplArray[ 3] = [];
AppExplArray[ 3][0] = 'Rearanja&#x21B;i piesele astfel &#xEE;nc&#xE2;t &#xEE;n tabel s&#x103; scrie:<br/> <img src="Javascript/C3.Interactive/plop.png">';
AppExplArray[ 3][1] = 'Rearrange the tiles so that the table reads: <br/> <img src="Javascript/C3.Interactive/plop.png"><br/><br/><i>The Romanian phrase <br/><q>Cand o face plopu\' mere...</q><br/> is equivalent to the English<br/><q>When Hell freezes over...</q></i>';
AppExplArray[ 3][2] = 'Ordnen Sie die Teile so dass die Tabelle lautet: <br/> <img src="Javascript/C3.Interactive/plop.png"><br/><br/><i>Der Rum&#228;nische Ausdruck <br/><q>Cand o face plopu\' mere...</q><br/> bedeutet in etwa<br/><q>Wenn es schwarz schneit...</q></i>';
AppExplArray[ 4] = [];
AppExplArray[ 4][0] = 'C&#xE2;mpurile galbene/gri sunt cl&#x103;diri de diferite &#xEE;n&#x103;l&#x163;imi (&#xEE;ntre 1 &#x15F;i 9 etaje).<br/><br/> <i>[Partea zg&#xE2;rie-nori]</i> <br/> Numerele de pe margine reprezint&#x103; num&#x103;rul de cl&#x103;diri vizibile din acest punct, av&#xE2;nd &#xEE;n vedere c&#x103; o cl&#x103;dire mai mic&#x103; nu poate fi v&#x103;zut&#x103; din spatele uneia mai &#xEE;nalte. Numerele din col&#x163;uri reprezint&#x103; num&#x103;rul de cl&#x103;diri vizibile pe diagonal&#x103;.<br/> <i>[Partea sudoku]</i> <br/> &#xCE;n&#x103;l&#x163;imile cl&#x103;dirilor constituie de asemenea un tabel sudoku, &#xEE;n care fiecare linie, coloan&#x103; &#x15F;i p&#x103;trat 3x3 con&#x163;ine &#xEE;n&#x103;l&#x163;imile 1-9 exact o dat&#x103;.';
AppExplArray[ 4][1] = 'The yellow/gray fields are buildings of various heights (between 1 and 9).<br/><br/> <i>[The skyscraper part]</i><br/> The numbers on the rim represent the number of buildings visible from that point of view, considering that a smaller building cannot be seen from behind a taller one. The numbers in the corners represent the number of buildings visible on the diagonal.<br/> <i>[The sudoku part]</i><br/> The heights of the buildings also form a sudoku table, in which each line, column and 3x3 square contain the heights 1-9 exactly once.';
AppExplArray[ 4][2] = 'Die gelben/grauen Felder sind Geb&#228;ude in verschiedenen H&#246;hen (zwischen 1 und 9).<br/><br/> <i>[Der Wolkenkratzer Teil]</i><br/>  Die Zahlen am Rand geben Hinweise, wie viele Geb&#228;ude aus dem Blickwinkel zu sehen sind. Ein kleineres Geb&#228;ude ist nicht sichtbar, wenn es hinter ein gr&#246;ßeren Geb&#228;ude steht. Die Eck-Zahlen zeigen an, wie viele Geb&#228;ude auf der Diagonale sichtbar sind.<br/> <i>[Der Sudoku Teil]</i><br/> Die H&#246;hen der Geb&#228;ude bilden eine Sudoku-Tabelle, in der jede Zeile, Spalte und 3x3-Quadrat die H&#246;hen 1-9 genau einmal enth&#228;lt.';
AppExplArray[ 5] = [];
AppExplArray[ 5][0] = 'Spor la rezolvat!';
AppExplArray[ 5][1] = 'This puzzle is only available in Romanian for now...';
AppExplArray[ 5][2] = 'Dieses R&#228;tsel ist vorerst nur auf Rum&#228;nisch verf&#252;gbar...';
AppExplArray[ 6] = [];
AppExplArray[ 6][0] = 'C&#xE2;nd un punct verde este pozi&#x163;ionat, proiec&#x163;iile sale (albastre) sunt &#x15F;i ele marcate pe segmentele urmato&#x103;re.<br/><br/>Aranja&#x163;i marcajele astfel &#xEE;nc&#xE2;t:<i><br/>&bull; &nbspR&#xE2;ndul 1 s&#x103; fie marcat;<br/>&bull; Fiecare jum&#x103;tate a R&#xE2;ndului 2 s&#x103; fie marcat&#x103;;<br/>&bull; Fiecare treime a R&#xE2;ndului 3 s&#x103; fie marcat&#x103;;<br/>&bull; Fiecare sfert al R&#xE2;ndului 4 s&#x103; fie marcat;</i><br/> ... &#x15F;i a&#x15F;a mai departe.';
AppExplArray[ 6][1] = 'When a green marker is positioned, its (blue) projections are marked to all segments below.<br/><br/>Arrange the markers so that:<i><br/>&bull; Row 1 is marked<br/>&bull; Each half of Row 2 is marked<br/>&bull; Each third of Row 3 is marked<br/>&bull; Each quarter of Row 4 ...</i><br/> ... and so on.<br/><br/>You can check your progress any time without losing your markers.';
AppExplArray[ 6][2] = 'Wenn eine gr&#252;ne Markierung positioniert ist, werden seine (blaue) Projektionen auf alle unteren Strecken auch markiert.<br/><br/>Ordnen Sie die Marker, so dass:<i><br/>&bull; &nbspReihe 1 ist markiert;<br/>&bull; Jede H&#228;lfte der Reihe 2 ist markiert;<br/>&bull; Jeder Drittel der Reihe 3 ist markiert;<br/>&bull; Jeder Viertel der Reihe 4 ist markiert;</i><br/> ... usw.';
AppExplArray[ 7] = [];
AppExplArray[ 7][0] = 'Spor la rezolvat!';
AppExplArray[ 7][1] = 'This puzzle is only available in Romanian for now...';
AppExplArray[ 7][2] = 'Dieses R&#228;tsel ist vorerst nur auf Rum&#228;nisch verf&#252;gbar...';

function showInteractive(n)
{
	if( 'ro' === lang )
	{
		document.getElementById("AppTitle").innerHTML      = AppTitleArray[n][0];
		document.getElementById("AppExplField").innerHTML  =  AppExplArray[n][0];
	}
	if( 'en' === lang )
	{
		document.getElementById("AppTitle").innerHTML      = AppTitleArray[n][1];
		document.getElementById("AppExplField").innerHTML  =  AppExplArray[n][1];
	}
	if( 'de' === lang )
	{
		document.getElementById("AppTitle").innerHTML      = AppTitleArray[n][2];
		document.getElementById("AppExplField").innerHTML  =  AppExplArray[n][2];
	}
	
	switch(n)
	{	case  1: document.getElementById("AppField").innerHTML = '<object type="application/x-shockwave-flash" data="Javascript/C3.Interactive/A01.arrows.swf"     width="680" height="450" align="top"><param name="movie" value="Javascript/C3.Interactive/A01.arrows.swf"     ><param name="quality" value="high"><param name=FlashVars value="lang='+lang+'"></object>'; break;
		case  2: document.getElementById("AppField").innerHTML = '<object type="application/x-shockwave-flash" data="Javascript/C3.Interactive/A02.queens.swf"    width="680" height="450" align="top"><param name="movie" value="Javascript/C3.Interactive/A02.queens.swf"    ><param name="quality" value="high"><param name=FlashVars value="lang='+lang+'"></object>'; break;
		case  3: document.getElementById("AppField").innerHTML = '<object type="application/x-shockwave-flash" data="Javascript/C3.Interactive/A03.plopul.swf"     width="680" height="450" align="top"><param name="movie" value="Javascript/C3.Interactive/A03.plopul.swf"     ><param name="quality" value="high"><param name=FlashVars value="lang='+lang+'"></object>'; break;
		case  4: document.getElementById("AppField").innerHTML = '<object type="application/x-shockwave-flash" data="Javascript/C3.Interactive/A04.skyscraper.swf" width="680" height="450" align="top"><param name="movie" value="Javascript/C3.Interactive/A04.skyscraper.swf" ><param name="quality" value="high"><param name=FlashVars value="lang='+lang+'"></object>'; break;
		case  5: document.getElementById("AppField").innerHTML = '<object type="application/x-shockwave-flash" data="Javascript/C3.Interactive/A05.farmer.swf"     width="680" height="450" align="top"><param name="movie" value="Javascript/C3.Interactive/A05.farmer.swf"     ><param name="quality" value="high"><param name=FlashVars value="lang='+lang+'"></object>'; break;
		case  6: document.getElementById("AppField").innerHTML = '<object type="application/x-shockwave-flash" data="Javascript/C3.Interactive/A06.segments.swf"   width="680" height="450" align="top"><param name="movie" value="Javascript/C3.Interactive/A06.segments.swf"	 ><param name="quality" value="high"><param name=FlashVars value="lang='+lang+'"></object>'; break;
		case  7: document.getElementById("AppField").innerHTML = '<object type="application/x-shockwave-flash" data="Javascript/C3.Interactive/A07.mensa.swf"      width="680" height="450" align="top"><param name="movie" value="Javascript/C3.Interactive/A07.mensa.swf"      ><param name="quality" value="high"><param name=FlashVars value="lang='+lang+'"></object>'; break;
		default: window.open('UnderConstruction.html', '_self');
	}

}