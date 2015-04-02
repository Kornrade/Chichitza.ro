/*---------------------------------------------------------------------------------------------------*\
| This file contains the general javascript functions related to translations.                        |     
| The following functions are available:                                                              |
|       retranslate(selLang)............ triggers retranslates according to the page and language     |
|       retranslateCommon()............. retranslates the common texts in the selected language       |
|       retranslateIndexIntro()......... retranslates Index texts in the selected language            |
|       retranslateMicrochitzeIntro().... retranslates Microchitze intro in the selected language     |
|       retranslateMacrochitzeIntro()... retranslates Macrochitze intro in the selected language      |
|       retranslateInteractiveIntro()... retranslates Interactive intro in the selected language      |
|       retranslateDictionaryIntro().... retranslates Dictionary intro in the selected language       |
|       retranslateMicrochitze()......... retranslates Microchitze texts in the selected language     |
|       retranslateMacrochitze()........ retranslates Macrochitze texts in the selected language      |
|       retranslateInteractive()........ retranslates Interactive texts in the selected language      |
|       retranslateDictionary()......... retranslates Dictionary texts in the selected language       |
\*---------------------------------------------------------------------------------------------------*/

/*jslint es5: true */

var page; // the current page id: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var lang; // the current language: "ro" "en" "de"
var intro; // current intro text displayed: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var auxparam; //the number of the test; auxparam controls the index list initialization and the quiz/problem/application title
var currchessfen;

/*global resetDivsToDefault */
/*global retranslateCommon */
/*global retranslateIndexIntro */
/*global retranslateROIndexIntro */
/*global retranslateENIndexIntro */
/*global retranslateDEIndexIntro */
/*global retranslateMicrochitzeIntro */
/*global retranslateROMicrochitzeIntro */
/*global retranslateENMicrochitzeIntro */
/*global retranslateDEMicrochitzeIntro */
/*global retranslateMacrochitzeIntro */
/*global retranslateROMacrochitzeIntro */
/*global retranslateENMacrochitzeIntro */
/*global retranslateDEMacrochitzeIntro */
/*global retranslateInteractiveIntro */
/*global retranslateROInteractiveIntro */
/*global retranslateENInteractiveIntro */
/*global retranslateDEInteractiveIntro */
/*global retranslateChessIntro */
/*global retranslateROChessIntro */
/*global retranslateENChessIntro */
/*global retranslateDEChessIntro */
/*global retranslateDictionaryIntro */
/*global retranslateRODictionaryIntro */
/*global retranslateENDictionaryIntro */
/*global retranslateDEDictionaryIntro */
/*global retranslateMicrochitze */
/*global retranslateROMicrochitze */
/*global retranslateENMicrochitze */
/*global retranslateDEMicrochitze */
/*global retranslateMacrochitze */
/*global retranslateROMacrochitze */
/*global retranslateENMacrochitze */
/*global retranslateDEMacrochitze */
/*global retranslateInteractive */
/*global retranslateROInteractive */
/*global retranslateENInteractive */
/*global retranslateDEInteractive */
/*global retranslateChess */
/*global retranslateROChess */
/*global retranslateENChess */
/*global retranslateDEChess */
/*global retranslateDictionary */
/*global retranslateRODictionary */
/*global retranslateENDictionary */
/*global retranslateDEDictionary */
/*global retranslateUnderConstruction */
/*global retranslateROUnderConstruction */
/*global retranslateENUnderConstruction */
/*global retranslateDEUnderConstruction */
/*global retranslateROCommon */
/*global retranslateENCommon */
/*global retranslateDECommon */
/*global showImageOnHover */
/*global showChessPositionOnHover */
/*global initChessSolution */
/*global showInteractive */

function retranslate(selectedLanguage)
{
	if( page < 6 )
	{
		lang = selectedLanguage;
		resetDivsToDefault();
		retranslateCommon();
	}
	
	switch(page)
	{
		case 0: switch(intro)
				{
					case 0: retranslateIndexIntro(); break;
					case 1: retranslateMicrochitzeIntro();  document.getElementById("imgMicrochitze").setAttribute("src", "Images/C0.Common/C1.Microchitze.png"); break;
					case 2: retranslateMacrochitzeIntro();  document.getElementById("imgMacrochitze").setAttribute("src", "Images/C0.Common/C2.Macrochitze.png"); break;
					case 3: retranslateInteractiveIntro();	document.getElementById("imgInteractive").setAttribute("src", "Images/C0.Common/C3.Interactive.png"); break;
					case 4: retranslateChessIntro();		document.getElementById("imgChess"      ).setAttribute("src", "Images/C0.Common/C4.Chess.png"); break;
					case 5: retranslateDictionaryIntro();	document.getElementById("imgDictionary" ).setAttribute("src", "Images/C0.Common/C5.Dictionary.png"); break;
					default: break;
				}
				break;
		case 1: retranslateMicrochitze();	break;
		case 2: retranslateMacrochitze();	break;
		case 3: retranslateInteractive();	break;
		case 4: retranslateChess();			break;
		case 5: retranslateDictionary();	break;
		default: retranslateUnderConstruction();
	}
}

function retranslateCommon()
{
	//retranslate common text	
	if(lang==="ro") {retranslateROCommon();}
	if(lang==="en") {retranslateENCommon();}
	if(lang==="de") {retranslateDECommon();}
}

function resetDivsToDefault()
{
	// Cell (1), no language dependency
	if( (0===page) && (0===intro) )
	{
		document.getElementById("imgMicrochitze").setAttribute("src", "Images/C0.Common/C1.Microchitze.png");
		document.getElementById("imgMacrochitze").setAttribute("src", "Images/C0.Common/C2.Macrochitze.png");
		document.getElementById("imgInteractive").setAttribute("src", "Images/C0.Common/C3.Interactive.png");
		document.getElementById("imgChess"      ).setAttribute("src", "Images/C0.Common/C4.Chess.png");
		document.getElementById("imgDictionary" ).setAttribute("src", "Images/C0.Common/C5.Dictionary.png");
	}
	else
	{
		document.getElementById("imgMicrochitze").setAttribute("src", "Images/C0.Common/C1.MicrochitzeGray.png");
		document.getElementById("imgMacrochitze").setAttribute("src", "Images/C0.Common/C2.MacrochitzeGray.png");
		document.getElementById("imgInteractive").setAttribute("src", "Images/C0.Common/C3.InteractiveGray.png");
		document.getElementById("imgChess"      ).setAttribute("src", "Images/C0.Common/C4.ChessGray.png");
		document.getElementById("imgDictionary" ).setAttribute("src", "Images/C0.Common/C5.DictionaryGray.png");
	}
	
	document.getElementById("buttonMicrochitze").setAttribute("onclick", "setIntroAndRetranslate(1)");
	document.getElementById("buttonMacrochitze").setAttribute("onclick", "setIntroAndRetranslate(2)");
	document.getElementById("buttonInteractive").setAttribute("onclick", "setIntroAndRetranslate(3)");
	document.getElementById("buttonChess"      ).setAttribute("onclick", "setIntroAndRetranslate(4)");
	document.getElementById("buttonDictionary" ).setAttribute("onclick", "setIntroAndRetranslate(5)");

	// reset divTitle attribute onMouseOver
	document.getElementById("divTitle").setAttribute("onMouseOver","return false;");
		
	// Cell (3) clear main contents divs for intro pages
	switch(page)
	{
		case 0:
			document.getElementById("divMainContents").innerHTML = "";
			document.getElementById("divMainContentsLeftIcon" ).innerHTML = "";
			document.getElementById("divMainContentsPeekImageName"	).innerHTML = "";
			document.getElementById("divMainContentsPeekImage" ).innerHTML = "";
			document.getElementById("study-name"        ).innerHTML = "";
			document.getElementById("position-container").innerHTML = "";
			document.getElementById("position-moves"    ).innerHTML = "";
			document.getElementById("stipulation"       ).innerHTML = "";
			document.getElementById("credentials"       ).innerHTML = "";
			break;
		case 1:	break;
		case 2:	break;
		case 3:	break;
		case 4: break;
		case 5: break;
		default: // page is under construction
	}
			
}

function retranslateIndexIntro()
{
	document.getElementById("divMainContentsLeftIcon").innerHTML = "\
			<table border='0' style='cursor:default'>\
				<tr><td height='80'>\
					<a id='imgMainContentsLeft1' href='#'><img src='Images/C0.Common/C1.Microchitze.png' width='64' height='64' border='0' onclick='setIntroAndRetranslate(1)'></img></a>\
				</td></tr>\
				<tr><td height='80'>\
					<a id='imgMainContentsLeft2' href='#'><img src='Images/C0.Common/C2.Macrochitze.png' width='64' height='64' border='0' onclick='setIntroAndRetranslate(2)'></img></a>\
				</td></tr>\
				<tr><td height='80'>\
					<a id='imgMainContentsLeft3' href='#'><img src='Images/C0.Common/C3.Interactive.png' width='64' height='64' border='0' onclick='setIntroAndRetranslate(3)'></img></a>\
				</td></tr>\
				<tr><td height='80'>\
					<a id='imgMainContentsLeft4' href='#'><img src='Images/C0.Common/C4.Chess.png'       width='64' height='64' border='0' onclick='setIntroAndRetranslate(4)'></img></a>\
					</td></tr>\
				<tr><td height='80'>\
					<a id='imgMainContentsLeft5' href='#'><img src='Images/C0.Common/C5.Dictionary.png'  width='64' height='64' border='0' onclick='setIntroAndRetranslate(5)'></img></a>\
				</td></tr>\
			</table>";
			
	document.getElementById("divMainContents").innerHTML = "\
			<table border='0' style='text-align:left;cursor:default'>\
				<tr><td height='80'            ><div class='common' id='divMainContentsRight11'></div></td>\
					<td height='80' width='240'><div class='common' id='divMainContentsRight12'></div></td></tr>\
				<tr><td height='80'            ><div class='common' id='divMainContentsRight21'></div></td>\
					<td height='80' width='240'><div class='common' id='divMainContentsRight22'></div></td></tr>\
				<tr><td height='80'            ><div class='common' id='divMainContentsRight31'></div></td>\
					<td height='80' width='240'><div class='common' id='divMainContentsRight32'></div></td></tr>\
				<tr><td height='80'            ><div class='common' id='divMainContentsRight41'></div></td>\
					<td height='80' width='240'><div class='common' id='divMainContentsRight42'></div></td></tr>\
				<tr><td height='80'            ><div class='common' id='divMainContentsRight51'></div></td>\
					<td height='80' width='240'><div class='common' id='divMainContentsRight52'></div></td></tr>\
			</table>";

	document.getElementById("divMainContentsRight12").innerHTML = "<a id='imgMainContentsRight12' href='#'><img src='Images/C0.Common/Index/MicroIntro.png' height='70' border='0' style='float: center;' onclick='setIntroAndRetranslate(1)'></img></a>";
	document.getElementById("divMainContentsRight22").innerHTML = "<a id='imgMainContentsRight22' href='#'><img src='Images/C0.Common/Index/MacroIntro.png' height='70' border='0' style='float: center;' onclick='setIntroAndRetranslate(2)'></img></a>";
	document.getElementById("divMainContentsRight32").innerHTML = "<a id='imgMainContentsRight32' href='#'><img src='Images/C0.Common/Index/InterIntro.png' height='70' border='0' style='float: center;' onclick='setIntroAndRetranslate(3)'></img></a>";
	document.getElementById("divMainContentsRight42").innerHTML = "<a id='imgMainContentsRight42' href='#'><img src='Images/C0.Common/Index/ChessIntro.png' height='70' border='0' style='float: center;' onclick='setIntroAndRetranslate(4)'></img></a>";
	document.getElementById("divMainContentsRight52").innerHTML = "<a id='imgMainContentsRight52' href='#'><img src='Images/C0.Common/Index/Dictionary.png' height='70' border='0' style='float: center;' onclick='setIntroAndRetranslate(5)'></img></a>";
			
	//retranslate specific text	of Index
	if(lang==="ro") {retranslateROIndexIntro();}
	if(lang==="en") {retranslateENIndexIntro();}
	if(lang==="de") {retranslateDEIndexIntro();}
}

function retranslateMicrochitzeIntro() 
{
	document.getElementById("divTitle").setAttribute("onMouseOver","showImageOnHover('','');");
	
	// Cell (3)
	document.getElementById("divMainContentsLeftIcon").innerHTML="<br/><br/><img src='Images/C0.Common/C1.Microchitze.png' width='128'></img>";
	showImageOnHover("","");
	
	document.getElementById("divMainContents").innerHTML = "\
					<br/><br/>\
					<div id='divpsiho'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='apsiho' style='display:inline-block;width:120;'></a>\
						<span id='spanpsiho' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divsocio'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='asocio' style='display:inline-block;width:120;'></a>\
						<span id='spansocio' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divhisto'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='ahisto' style='display:inline-block;width:120;'></a>\
						<span id='spanhisto' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divgeo'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='ageo' style='display:inline-block;width:120;'></a>\
						<span id='spangeo' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divastro'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='aastro' style='display:inline-block;width:120;'></a>\
						<span id='spanastro' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divzoo'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='azoo' style='display:inline-block;width:120;'></a>\
						<span id='spanzoo' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divsecv'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='asecv' style='display:inline-block;width:120;'></a>\
						<span id='spansecv' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divmate'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='amate' style='display:inline-block;width:120;'></a>\
						<span id='spanmate' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divchemo'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='achemo' style='display:inline-block;width:120;'></a>\
						<span id='spanchemo' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divcrono'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='acrono' style='display:inline-block;width:120;'></a>\
						<span id='spancrono' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div onMouseOver=\"showImageOnHover('','');\"><br/><br/></div>\
					<div id='divminimix1'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='aminimix1' style='display:inline-block;width:120;'></a>\
						<span id='spanminimix1' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divminimix2'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='aminimix2' style='display:inline-block;width:120;'></a>\
						<span id='spanminimix2' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divminimix3'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='aminimix3' style='display:inline-block;width:120;'></a>\
						<span id='spanminimix3' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divminimix4'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='aminimix4' style='display:inline-block;width:120;'></a>\
						<span id='spanminimix4' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div id='divminimix5'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='aminimix5' style='display:inline-block;width:120;'></a>\
						<span id='spanminimix5' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>\
					<div onMouseOver=\"showImageOnHover('','');\"><br/></div>\
					";

	// Cell (3), no language dependency other than the parameter lang
	document.getElementById("apsiho"   ).href = "Microchitze.html?lang="+lang+"&aux=10";
	document.getElementById("asocio"   ).href = "Microchitze.html?lang="+lang+"&aux=11";
	document.getElementById("ahisto"   ).href = "Microchitze.html?lang="+lang+"&aux=12";
	document.getElementById("ageo"     ).href = "Microchitze.html?lang="+lang+"&aux=13";
	document.getElementById("azoo"     ).href = "Microchitze.html?lang="+lang+"&aux=14";
	document.getElementById("asecv"    ).href = "Microchitze.html?lang="+lang+"&aux=15";
	document.getElementById("amate"    ).href = "Microchitze.html?lang="+lang+"&aux=16";
	document.getElementById("achemo"   ).href = "Microchitze.html?lang="+lang+"&aux=17";
	document.getElementById("acrono"   ).href = "Microchitze.html?lang="+lang+"&aux=18";
	document.getElementById("aastro"   ).href = "Microchitze.html?lang="+lang+"&aux=19";
	document.getElementById("aminimix1").href = "Microchitze.html?lang="+lang+"&aux=01";
	document.getElementById("aminimix2").href = "Microchitze.html?lang="+lang+"&aux=02";
	document.getElementById("aminimix3").href = "Microchitze.html?lang="+lang+"&aux=03";
	document.getElementById("aminimix4").href = "Microchitze.html?lang="+lang+"&aux=04";
	document.getElementById("aminimix5").href = "Microchitze.html?lang="+lang+"&aux=05";
	
	//retranslate specific intro text of Microchitze
	if(lang==="ro") {retranslateROMicrochitzeIntro();}
	if(lang==="en") {retranslateENMicrochitzeIntro();}
	if(lang==="de") {retranslateDEMicrochitzeIntro();}
}

function retranslateMacrochitzeIntro() 
{
	document.getElementById("divMainContentsLeftIcon").innerHTML="<br/><br/><img src='Images/C0.Common/C2.Macrochitze.png' width='128'></img>";
	showImageOnHover("","");
    
    document.getElementById("divMainContents").innerHTML = "\
					<br/><br/>\
					<div id='divmacrotest'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'> &nbsp; &nbsp; \
						<a id='macrotest' style='display:inline-block;width:120;'></a>\
						<span id='spanmacrotest' style=\"display:inline-block;width:300;text-align:left;\"></span>\
					</div>";
	
	document.getElementById("macrotest"   ).href = "Macrochitze.html?lang="+lang+"&aux=0";
    
    //retranslate specific intro text of Microchitze
	if(lang==="ro") {retranslateROMacrochitzeIntro();}
	if(lang==="en") {retranslateENMacrochitzeIntro();}
	if(lang==="de") {retranslateDEMacrochitzeIntro();}
}

function retranslateInteractiveIntro() 
{
	document.getElementById("divTitle").setAttribute("onMouseOver","showImageOnHover('','');");
	
	// Cell (3)
	document.getElementById("divMainContentsLeftIcon").innerHTML="<br/><br/><img src='Images/C0.Common/C3.Interactive.png' width='128'></img>";
	showImageOnHover("","");
	
	document.getElementById("divMainContents").innerHTML = "\
					<br/><br/>\
					<div id='divsageti'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='sageti' style=\"display:inline-block;width:400;text-align:left;\"></a>\
					</div>\
					<div id='divtreidame'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='treidame' style=\"display:inline-block;width:400;text-align:left;\"></a>\
					</div>\
					<div id='divplopulmere'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='plopulmere' style=\"display:inline-block;width:400;text-align:left;\"></a>\
					</div>\
					<div id='divssudoku'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='ssudoku' style=\"display:inline-block;width:400;text-align:left;\"></a>\
					</div>\
					<div id='divfermier'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='fermier' style=\"display:inline-block;width:400;text-align:left;\"></a>\
					</div>\
					<div id='divsegmente'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='segmente' style=\"display:inline-block;width:400;text-align:left;\"></a>\
					</div>\
					<div id='divmensa'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='mensa' style=\"display:inline-block;width:400;text-align:left;\"></a>\
					</div>\
					<div onMouseOver=\"showImageOnHover('','');\"><br/></div>\
					";
	
	// Cell (3), no language dependency other than the parameter lang
	document.getElementById("sageti"	).href = "Interactive.html?lang="+lang+"&aux=01";
	document.getElementById("treidame"	).href = "Interactive.html?lang="+lang+"&aux=02";
	document.getElementById("plopulmere").href = "Interactive.html?lang="+lang+"&aux=03";
	document.getElementById("ssudoku"	).href = "Interactive.html?lang="+lang+"&aux=04";
	document.getElementById("fermier"	).href = "Interactive.html?lang="+lang+"&aux=05";
	document.getElementById("segmente"	).href = "Interactive.html?lang="+lang+"&aux=06";
	document.getElementById("mensa"		).href = "Interactive.html?lang="+lang+"&aux=07";
	
	//retranslate specific intro text of Interactive
	if(lang==="ro") {retranslateROInteractiveIntro();}
	if(lang==="en") {retranslateENInteractiveIntro();}
	if(lang==="de") {retranslateDEInteractiveIntro();}
}

function retranslateChessIntro() 
{
	document.getElementById("divTitle").setAttribute("onMouseOver","showChessPositionOnHover(00)");
	
	document.getElementById("divMainContentsLeftIcon").innerHTML="<br/><br/><img src='Images/C0.Common/C4.Chess.png' width='128'></img>";
	showImageOnHover("","");
	
		document.getElementById("divMainContents").innerHTML = "\
					<br/><br/>\
					<div id='divHomemade01'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade01' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div id='divHomemade02'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade02' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div id='divHomemade03'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade03' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div id='divHomemade04'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade04' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div id='divHomemade05'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade05' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> == </span> </div>\
						\
					<div id='divHomemade06'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade06' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div id='divHomemade08'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade08' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div id='divHomemade09'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade09' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> == </span> </div>\
						\
					<div id='divHomemade10'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade10' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> == </span> </div>\
						\
					<div id='divHomemade11'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade11' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div id='divHomemade13'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						&nbsp; &nbsp; <a id='Homemade13' style=\"display:inline-block;width:180;\"></a>\
						<span style=\"display:inline-block;width:100;\"> +- </span> </div>\
						\
					<div onMouseOver=\"showChessPositionOnHover(00);\"><br/><br/><br></div>\
					<div id = 'Legend' align='left' style='padding-left: 50'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_gri.png' width='16' height='16'>\
						<img src='Images/C4.Chess/bec_bej.png' width='16' height='16'>\
						<span id='spanlegend'></span>\
					";
					
	document.getElementById("divHomemade01").setAttribute("onMouseOver","showChessPositionOnHover(01);");
	document.getElementById("divHomemade02").setAttribute("onMouseOver","showChessPositionOnHover(02);");
	document.getElementById("divHomemade03").setAttribute("onMouseOver","showChessPositionOnHover(03);");
	document.getElementById("divHomemade04").setAttribute("onMouseOver","showChessPositionOnHover(04);");
	document.getElementById("divHomemade05").setAttribute("onMouseOver","showChessPositionOnHover(05);");
	document.getElementById("divHomemade06").setAttribute("onMouseOver","showChessPositionOnHover(06);");
	document.getElementById("divHomemade08").setAttribute("onMouseOver","showChessPositionOnHover(08);");
	document.getElementById("divHomemade09").setAttribute("onMouseOver","showChessPositionOnHover(09);");
	document.getElementById("divHomemade10").setAttribute("onMouseOver","showChessPositionOnHover(10);");
	document.getElementById("divHomemade11").setAttribute("onMouseOver","showChessPositionOnHover(11);");
	document.getElementById("divHomemade13").setAttribute("onMouseOver","showChessPositionOnHover(13);");
	
	document.getElementById("credentials").innerHTML = "<p><font size='1'>[<a href='http://chesstempo.com' target='_blank'>Board powered by ChessTempo Viewer</a>]</font></p>";
	
	//retranslate specific intro text of Chess
	if(lang==="ro") {retranslateROChessIntro();}
	if(lang==="en") {retranslateENChessIntro();}
	if(lang==="de") {retranslateDEChessIntro();}
	
	document.getElementById("Homemade01").href = "Chess.html?lang="+lang+"&aux=01";
	document.getElementById("Homemade02").href = "Chess.html?lang="+lang+"&aux=02";
	document.getElementById("Homemade03").href = "Chess.html?lang="+lang+"&aux=03";
	document.getElementById("Homemade04").href = "Chess.html?lang="+lang+"&aux=04";
	document.getElementById("Homemade05").href = "Chess.html?lang="+lang+"&aux=05";
	document.getElementById("Homemade06").href = "Chess.html?lang="+lang+"&aux=06";
	document.getElementById("Homemade08").href = "Chess.html?lang="+lang+"&aux=08";
	document.getElementById("Homemade09").href = "Chess.html?lang="+lang+"&aux=09";
	document.getElementById("Homemade10").href = "Chess.html?lang="+lang+"&aux=10";
	document.getElementById("Homemade11").href = "Chess.html?lang="+lang+"&aux=11";
	document.getElementById("Homemade13").href = "Chess.html?lang="+lang+"&aux=13";
	
	showChessPositionOnHover(0);
}

function retranslateDictionaryIntro() 
{
	document.getElementById("divMainContentsLeftIcon").innerHTML="<br/><br/><img src='Images/C0.Common/C5.Dictionary.png' width='128'></img>";
	showImageOnHover("","");
	
	document.getElementById("divMainContents").innerHTML = "\
				<div>\
				<a href='Dictionary.html?lang="+lang+"&aux=A*'><img src='Images/C0.Common/Alphabet/purple/letter-a-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-a-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-a-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=B*'><img src='Images/C0.Common/Alphabet/purple/letter-b-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-b-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-b-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=C*'><img src='Images/C0.Common/Alphabet/purple/letter-c-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-c-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-c-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=D*'><img src='Images/C0.Common/Alphabet/purple/letter-d-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-d-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-d-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=E*'><img src='Images/C0.Common/Alphabet/purple/letter-e-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-e-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-e-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=F*'><img src='Images/C0.Common/Alphabet/purple/letter-f-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-f-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-f-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=G*'><img src='Images/C0.Common/Alphabet/purple/letter-g-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-g-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-g-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=H*'><img src='Images/C0.Common/Alphabet/purple/letter-h-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-h-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-h-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=I*'><img src='Images/C0.Common/Alphabet/purple/letter-i-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-i-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-i-icon.png'\"/></a>\
				</div>\
				<div>\
				<a href='Dictionary.html?lang="+lang+"&aux=J*'><img src='Images/C0.Common/Alphabet/purple/letter-j-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-j-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-j-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=K*'><img src='Images/C0.Common/Alphabet/purple/letter-k-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-k-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-k-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=L*'><img src='Images/C0.Common/Alphabet/purple/letter-l-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-l-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-l-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=M*'><img src='Images/C0.Common/Alphabet/purple/letter-m-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-m-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-m-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=N*'><img src='Images/C0.Common/Alphabet/purple/letter-n-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-n-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-n-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=O*'><img src='Images/C0.Common/Alphabet/purple/letter-o-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-o-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-o-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=P*'><img src='Images/C0.Common/Alphabet/purple/letter-p-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-p-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-p-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=Q*'><img src='Images/C0.Common/Alphabet/purple/letter-q-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-q-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-q-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=R*'><img src='Images/C0.Common/Alphabet/purple/letter-r-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-r-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-r-icon.png'\"/></a>\
				</div>\
				<div>\
				<a href='Dictionary.html?lang="+lang+"&aux=S*'><img src='Images/C0.Common/Alphabet/purple/letter-s-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-s-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-s-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=T*'><img src='Images/C0.Common/Alphabet/purple/letter-t-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-t-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-t-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=U*'><img src='Images/C0.Common/Alphabet/purple/letter-u-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-u-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-u-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=V*'><img src='Images/C0.Common/Alphabet/purple/letter-v-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-v-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-v-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=W*'><img src='Images/C0.Common/Alphabet/purple/letter-w-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-w-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-w-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=X*'><img src='Images/C0.Common/Alphabet/purple/letter-x-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-x-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-x-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=Y*'><img src='Images/C0.Common/Alphabet/purple/letter-y-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-y-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-y-icon.png'\"/></a>\
				<a href='Dictionary.html?lang="+lang+"&aux=Z*'><img src='Images/C0.Common/Alphabet/purple/letter-z-icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-z-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-z-icon.png'\"/></a>\
				<a id='randomWord' href='Dictionary.html?lang="+lang+"&aux=*'><img src='Images/C0.Common/Alphabet/purple/letter---icon.png' width='48' height='48' Hspace='10' Vspace='10' border='0' onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter---icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter---icon.png'\"/></a>\
				</div>\
				<div align='center' >\
				<input id = 'dictionarySearchField' type='text' size='20' style='text-align:center; font-size:16px;' onKeyPress='{if(event.keyCode==13) submitTextToDictionarySearch();}'></input>\
				<a id='dictionarySearchIcon' href='javascript:void(0);'><img src='Images/C5.Dictionary/Find.png' width='32' height='32' onclick='submitTextToDictionarySearch();'/></a>\
				</div>\
				";
	
	//retranslate specific intro text of Interactive
	if(lang==="ro") {retranslateRODictionaryIntro();}
	if(lang==="en") {retranslateENDictionaryIntro();}
	if(lang==="de") {retranslateDEDictionaryIntro();}
	
}

function retranslateMicrochitze() 
{		
	// Cell (1), no language dependency other than the lang parameter
	document.getElementById("buttonMicrochitze").href="index.html?lang="+lang+"&intro=1";
	document.getElementById("buttonMacrochitze").href="index.html?lang="+lang+"&intro=2";
	document.getElementById("buttonInteractive").href="index.html?lang="+lang+"&intro=3";
	document.getElementById("buttonChess"      ).href="index.html?lang="+lang+"&intro=4";
	document.getElementById("buttonDictionary" ).href="index.html?lang="+lang+"&intro=5";
	
	document.getElementById("imgMicrochitze"   ).setAttribute("src", "Images/C0.Common/C1.Microchitze.png");
	
	document.getElementById("divTitle").setAttribute("onclick","gotoindex('1')");
	
	document.getElementById("imgprev" ).setAttribute("src", "Images/C0.Common/arrow_left_m.png");
	document.getElementById("imgprev" ).setAttribute("height", "50");
	document.getElementById("imgprev" ).setAttribute("onMouseOver", "changeSrcImage('Images/C0.Common/arrow_left_y.png','imgprev');");
	document.getElementById("imgprev" ).setAttribute("onMouseOut", "changeSrcImage('Images/C0.Common/arrow_left_m.png','imgprev');");
	document.getElementById("imgprev" ).setAttribute("onClick" , "gotoPrevQuestion();");
	
	document.getElementById("imgnext" ).setAttribute("src", "Images/C0.Common/arrow_right_m.png");
	document.getElementById("imgnext" ).setAttribute("height", "50");
	document.getElementById("imgnext" ).setAttribute("onMouseOver", "changeSrcImage('Images/C0.Common/arrow_right_y.png','imgnext');");
	document.getElementById("imgnext" ).setAttribute("onMouseOut", "changeSrcImage('Images/C0.Common/arrow_right_m.png','imgnext');");
	document.getElementById("imgnext" ).setAttribute("onClick" , "gotoNextQuestion();");
	
	//retranslate specific static text
	if(lang==="ro") {retranslateROMicrochitze();}
	if(lang==="en") {retranslateENMicrochitze();}
	if(lang==="de") {retranslateDEMicrochitze();}
}

function retranslateMacrochitze() 
{
	// Cell (1), no language dependency other than the lang parameter
	document.getElementById("buttonMicrochitze").href="index.html?lang="+lang+"&intro=1";
	document.getElementById("buttonMacrochitze").href="index.html?lang="+lang+"&intro=2";
	document.getElementById("buttonInteractive").href="index.html?lang="+lang+"&intro=3";
	document.getElementById("buttonChess"      ).href="index.html?lang="+lang+"&intro=4";
	document.getElementById("buttonDictionary" ).href="index.html?lang="+lang+"&intro=5";
	
	document.getElementById("imgMacrochitze"   ).setAttribute("src", "Images/C0.Common/C2.Macrochitze.png");
	
	document.getElementById("divTitle").setAttribute("onclick","gotoindex('2')");
	
	//retranslate specific static text
	if(lang==="ro") {retranslateROMacrochitze();}
	if(lang==="en") {retranslateENMacrochitze();}
	if(lang==="de") {retranslateDEMacrochitze();}
}

function retranslateInteractive() 
{
	// Cell (1), no language dependency other than the lang parameter
	document.getElementById("buttonMicrochitze").href="index.html?lang="+lang+"&intro=1";
	document.getElementById("buttonMacrochitze").href="index.html?lang="+lang+"&intro=2";
	document.getElementById("buttonInteractive").href="index.html?lang="+lang+"&intro=3";
	document.getElementById("buttonChess"      ).href="index.html?lang="+lang+"&intro=4";
	document.getElementById("buttonDictionary" ).href="index.html?lang="+lang+"&intro=5";
	
	document.getElementById("imgInteractive"   ).setAttribute("src", "Images/C0.Common/C3.Interactive.png");
	
	document.getElementById("divTitle").setAttribute("onclick","gotoindex('3')");
	
	//create interactive content
	showInteractive(auxparam);
	
	//retranslate specific static text
	if(lang==="ro") {retranslateROInteractive();}
	if(lang==="en") {retranslateENInteractive();}
	if(lang==="de") {retranslateDEInteractive();}
}

function retranslateChess() 
{
	// Cell (1), no language dependency other than the lang parameter
	document.getElementById("buttonMicrochitze").href="index.html?lang="+lang+"&intro=1";
	document.getElementById("buttonMacrochitze").href="index.html?lang="+lang+"&intro=2";
	document.getElementById("buttonInteractive").href="index.html?lang="+lang+"&intro=3";
	document.getElementById("buttonChess"      ).href="index.html?lang="+lang+"&intro=4";
	document.getElementById("buttonDictionary" ).href="index.html?lang="+lang+"&intro=5";
	
	document.getElementById("imgChess").setAttribute("src", "Images/C0.Common/C4.Chess.png");
	
	document.getElementById("divTitle").setAttribute("onclick","gotoindex('4')");
	
	//create chess content
	initChessSolution(auxparam);
	
	document.getElementById("divFen").innerHTML = "<br/>"+currchessfen;
	document.getElementById("credentials").innerHTML = "<p><font size='1'>[<a href='http://chesstempo.com' target='_blank'>Board powered by ChessTempo Viewer</a>]</font></p>";
	
	//retranslate specific static text
	if(lang==="ro") {retranslateROChess();}
	if(lang==="en") {retranslateENChess();}
	if(lang==="de") {retranslateDEChess();}
	
	document.getElementById("buttonShowPGN").innerHTML = "*.pgn";
}

function retranslateDictionary() 
{

	// Cell (1), no language dependency other than the lang parameter
	document.getElementById("buttonMicrochitze").href="index.html?lang="+lang+"&intro=1";
	document.getElementById("buttonMacrochitze").href="index.html?lang="+lang+"&intro=2";
	document.getElementById("buttonInteractive").href="index.html?lang="+lang+"&intro=3";
	document.getElementById("buttonChess"      ).href="index.html?lang="+lang+"&intro=4";
	document.getElementById("buttonDictionary" ).href="index.html?lang="+lang+"&intro=5";
	
	document.getElementById("divTitle").setAttribute("onclick","gotoindex('5')");
	
	document.getElementById("imgDictionary"   ).setAttribute("src", "Images/C0.Common/C5.Dictionary.png");
	
	document.getElementById("SearchLettersField").innerHTML = "\
			<img src='Images/C0.Common/Alphabet/purple/letter-a-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('A*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-a-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-a-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-b-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('B*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-b-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-b-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-c-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('C*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-c-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-c-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-d-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('D*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-d-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-d-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-e-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('E*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-e-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-e-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-f-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('F*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-f-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-f-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-g-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('G*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-g-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-g-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-h-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('H*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-h-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-h-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-i-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('I*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-i-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-i-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-j-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('J*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-j-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-j-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-k-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('K*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-k-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-k-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-l-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('L*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-l-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-l-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-m-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('M*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-m-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-m-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-n-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('N*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-n-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-n-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-o-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('O*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-o-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-o-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-p-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('P*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-p-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-p-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-q-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('Q*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-q-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-q-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-r-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('R*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-r-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-r-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-s-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('S*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-s-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-s-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-t-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('T*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-t-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-t-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-u-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('U*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-u-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-u-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-v-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('V*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-v-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-v-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-w-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('W*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-w-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-w-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-x-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('X*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-x-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-x-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-y-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('Y*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-y-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-y-icon.png'\"/>\
			<img src='Images/C0.Common/Alphabet/purple/letter-z-icon.png' width='24' height='24' Hspace='3' border='0' onClick=\"doDictionarySearch('Z*')\" onmouseout=\"this.src='Images/C0.Common/Alphabet/purple/letter-z-icon.png'\" onmouseover=\"this.src='Images/C0.Common/Alphabet/orange/letter-z-icon.png'\"/>\
			";
	
	document.getElementById("imgprev" ).setAttribute("src", "Images/C0.Common/arrow_left_m.png");
	document.getElementById("imgprev" ).setAttribute("height", "32");
	document.getElementById("imgprev" ).setAttribute("onMouseOver", "changeSrcImage('Images/C0.Common/arrow_left_y.png','imgprev');");
	document.getElementById("imgprev" ).setAttribute("onMouseOut", "changeSrcImage('Images/C0.Common/arrow_left_m.png','imgprev');");
	document.getElementById("imgprev" ).setAttribute("onClick" , "gotoPrevWord();");
	
	document.getElementById("imgnext" ).setAttribute("src", "Images/C0.Common/arrow_right_m.png");
	document.getElementById("imgnext" ).setAttribute("height", "32");
	document.getElementById("imgnext" ).setAttribute("onMouseOver", "changeSrcImage('Images/C0.Common/arrow_right_y.png','imgnext');");
	document.getElementById("imgnext" ).setAttribute("onMouseOut", "changeSrcImage('Images/C0.Common/arrow_right_m.png','imgnext');");
	document.getElementById("imgnext" ).setAttribute("onClick" , "gotoNextWord();");
	
	//retranslate specific text
	if(lang==="ro") {retranslateRODictionary();}
	if(lang==="en") {retranslateENDictionary();}
	if(lang==="de") {retranslateDEDictionary();}
}

function retranslateUnderConstruction()
{
	// Cell (1), no language dependency other than the lang parameter
	document.getElementById("buttonMicrochitze").href="index.html?lang="+lang+"&intro=1";
	document.getElementById("buttonMacrochitze").href="index.html?lang="+lang+"&intro=2";
	document.getElementById("buttonInteractive").href="index.html?lang="+lang+"&intro=3";
	document.getElementById("buttonChess"      ).href="index.html?lang="+lang+"&intro=4";
	document.getElementById("buttonDictionary" ).href="index.html?lang="+lang+"&intro=5";
	
	document.getElementById("imgMicrochitze").setAttribute("src", "Images/C0.Common/C1.Microchitze.png");
	document.getElementById("imgMacrochitze").setAttribute("src", "Images/C0.Common/C2.Macrochitze.png");
	document.getElementById("imgInteractive").setAttribute("src", "Images/C0.Common/C3.Interactive.png");
	document.getElementById("imgChess"      ).setAttribute("src", "Images/C0.Common/C4.Chess.png");
	document.getElementById("imgDictionary" ).setAttribute("src", "Images/C0.Common/C5.Dictionary.png");
	
	//retranslate specific text
	if(lang==="ro") {retranslateROUnderConstruction();}
	if(lang==="en") {retranslateENUnderConstruction();}
	if(lang==="de") {retranslateDEUnderConstruction();}
}