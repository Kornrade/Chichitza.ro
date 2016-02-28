/*---------------------------------------------------------------------------------------------------*\
| This file contains the general javascript functions related to translations.                        |     
| The following functions are available:                                                              |
|       retranslateDECommon()............. retranslates the common texts in the selected language     |
|       retranslateDEIndexIntro()......... retranslates Index texts in the selected language          |
|       retranslateDEMicrochitzeIntro().... retranslates Microchitze intro in the selected language   |
|       retranslateDEMacrochitzeIntro()... retranslates Macrochitze intro in the selected language    |
|       retranslateDEInteractiveIntro()... retranslates Interactive intro in the selected language    |
|       retranslateDEChessIntro()......... retranslates Chess intro in the selected language          |
|       retranslateDEDictionaryIntro().... retranslates Dictionary intro in the selected language     |
|       retranslateDEMicrochitze()......... retranslates Microchitze texts in the selected language   |
|       retranslateDEMacrochitze()........ retranslates Macrochitze texts in the selected language    |
|       retranslateDEInteractive()........ retranslates Interactive texts in the selected language    |
|       retranslateDEChess().............. retranslates Chess texts in the selected language          |
|       retranslateDEDictionary()......... retranslates Dictionary texts in the selected language     |
\*---------------------------------------------------------------------------------------------------*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
	HTML CODES FOR GERMAN: 
				Display	Friendly	Numerical	Description
				        &Auml;	    &#196;      Capital A-umlaut
				        &auml;	    &#228;      Lowercase a-umlaut
				        &Eacute;    &#201;      Capital E-acute
				        &eacute;    &#233;      Lowercase E-acute
				        &Ouml;	    &#214;      Capital O-umlaut
				        &ouml;	    &#246;      Lowercase o-umlaut
				        &Uuml;	    &#220;      Capital U-umlaut
				        &uuml;	    &#252;      Lowercase u-umlaut
				        &szlig;	    &#223;      SZ ligature
				        &laquo;	    &#171;      Left angle quotes
				        &raquo;	    &#187;      Right angle quotes
				                    &#132;      Left lower quotes
				                    &#147;      Left quotes
				                    &#148;      Right quotes
				                    &#176;      Degree sign (Grad)
				        &euro;	    &#128;      Euro
				        &pound;	    &#163;      Pound Sterling
\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*jslint es5: true */

/* GLOBAL VARS USED IN THIS FILE:*/
var page; // the current page id: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var lang; // the current language: "ro" "en" "de"
var intro; // current intro text displayed: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var auxparam; //the number of the test; auxparam controls the index list initialization and the quiz/problem/application title
var allstudynames, currchessinfo, coauthor;

/*global showSolution*/


function retranslateDECommon()
{
// HTML page layout
/*-------------------900-----------------------\ 
+---------+------------------------------------+
|  BANNER |  Micro-/Macrochitze/...  | ro/en/de|  Cell (0), Cell (1), Cell (2)
|         |        <divTitle>        | home/etc|  
+---200---+---------500--------------+---200---+   
+----------------------------------------------+  orange line
|                                              |  
|   +---------+---tableMainContents--------+   |  Cell (3)
|   |  image  |    <divMainContents>       |   |
|   +---300---+-------------600------------+   |
|                                              |
+----------------------------------------------+
+----------------------------------------------+  orange line
+--------------------900----------------------*/

// translations to DE =========================	
	if(lang==="de")
	{
	// Cell (0)
	document.getElementById("banner").href = "index.html?lang=de";

	// Cell (1)
	document.getElementById("buttonMicrochitze").setAttribute("data", "Mikroknobeleien" );
	document.getElementById("buttonMacrochitze").setAttribute("data", "Makroknobeleien" );
	document.getElementById("buttonInteractive").setAttribute("data", "Interaktive"     );
	document.getElementById("buttonDictionary" ).setAttribute("data", "Wörterbuch"      );
	document.getElementById("buttonChess"      ).setAttribute("data", "Schachstudien"   );
	document.getElementById("imgMicrochitze"   ).alt = "Mikroknobeleien";
	document.getElementById("imgMacrochitze"   ).alt = "Makroknobeleien";
	document.getElementById("imgInteractive"   ).alt = "Interaktive";
	document.getElementById("imgDictionary"    ).alt = "Wörterbuch";
	document.getElementById("imgChess"         ).alt = "Schachstudien";
	
	// Cell (2)
	document.getElementById("buttonAdmin"  ).href   = "#";
	document.getElementById("buttonContact").onclick   = "TINY.box.show('Helpertools/contactDE.html', 1,0,0,1);";
	document.getElementById("buttonHome"   ).href   = "index.html?lang=de";
	document.getElementById("buttonAdmin"  ).setAttribute("data","Admin");
	document.getElementById("buttonContact").setAttribute("data","Kontakt");
	document.getElementById("buttonHome"   ).setAttribute("data","Heimseite");
	document.getElementById("imgAdmin"     ).alt    = "Admin";
	document.getElementById("imgContact"   ).alt    = "Kontakt";
	document.getElementById("imgHome"      ).alt    = "Heimseite";
	
	// Cells (3) is page-specific
	
	}

}

function retranslateDEIndexIntro()
{
	// translations to DE =========================	
	if(lang==="de")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "...";
	
	// Cell (3)
	document.getElementById("divMainContentsLeftIcon").setAttribute("class", "common");
	document.getElementById("imgMainContentsLeft1" ).setAttribute("data", "Mikroknobeleien" );
	document.getElementById("imgMainContentsLeft2" ).setAttribute("data", "Makroknobeleien"	);
	document.getElementById("imgMainContentsLeft3" ).setAttribute("data", "Interaktive"		);
	document.getElementById("imgMainContentsLeft4" ).setAttribute("data", "Schachstudien"   );
	document.getElementById("imgMainContentsLeft5" ).setAttribute("data", "Wörterbuch"     );
	
	document.getElementById("imgMainContentsRight12" ).setAttribute("data", "Mikroknobeleien" );
	document.getElementById("imgMainContentsRight22" ).setAttribute("data", "Makroknobeleien" );
	document.getElementById("imgMainContentsRight32" ).setAttribute("data", "Interaktive"	  );
	document.getElementById("imgMainContentsRight42" ).setAttribute("data", "Schachstudien"   );
	document.getElementById("imgMainContentsRight52" ).setAttribute("data", "Wörterbuch"     );
			
	document.getElementById("divMainContentsRight11").innerHTML = "\
					<b>Mikroknobeleien:</b> 10-Fragen Knobelaufgaben. <br/>\
					<i>z.B.: Warum fressen wei&szlig;e Schafe mehr Gras als schwarze?</i>";
	document.getElementById("divMainContentsRight21").innerHTML = "\
					<b>Makroknobeleien:</b> knifflige Denkaufgaben. <br/>\
					<i>z.B.: Gestalten Sie ein Holzobjekt, so dass es von oben, vorne und hinten so aussieht wie im Bild:</i>";				
	document.getElementById("divMainContentsRight31").innerHTML = "\
					<b>Interaktive</b> Denkaufgaben. <br/>\
					<i>z.B.: Versuchen Sie die Anweisungen f&uuml;r die Platzierung der gr&uuml;nen Punkte zu folgen...";
	document.getElementById("divMainContentsRight41").innerHTML = "\
					<b>Schach Studien</b>, die die Computer verwirren.";
	document.getElementById("divMainContentsRight51").innerHTML = "\
					<b>W&ouml;rterbuch</b> mit lustigen Erkl&auml;rungen. <br>\
					<i>z.B.: Echo [n.] Erwarteter Effekt wenn man zur Wand redet.</i>";
		
	}
}

function retranslateDEMicrochitzeIntro() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MIKROKNOBELEIEN";
	
		// Cell (3)
		document.getElementById("divpsiho"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Psihochitze.png' ,'Psychoknobeleien');");
		document.getElementById("divsocio"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Sociochitze.png' ,'Sozioknobeleien' );");
		document.getElementById("divhisto"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Histochitze.png' ,'Histoknobeleien' );");
		document.getElementById("divgeo"     ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Geochitze.png'   ,'Geoknobeleien'   );");
		document.getElementById("divzoo"     ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Zoochitze.png'   ,'Zooknobeleien'   );");
		document.getElementById("divsecv"    ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Secvenchitze.png','Secvenknobeleien');");
		document.getElementById("divmate"    ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Matechitze.png'  ,'Matheknobeleien' );");
		document.getElementById("divchemo"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Chemochitze.png' ,'Chemoknobeleien' );");
		document.getElementById("divcrono"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Cronochitze.png' ,'Chronoknobeleien');");
		document.getElementById("divastro"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Astrochitze.png' ,'Astroknobeleien' );");
		document.getElementById("divminimix1").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix1.png'    ,'Minimix 1'       );");
		document.getElementById("divminimix2").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix2.png'    ,'Minimix 2'       );");
		document.getElementById("divminimix3").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix3.png'    ,'Minimix 3'       );");
		document.getElementById("divminimix4").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix4.png'    ,'Minimix 4'       );");
		document.getElementById("divminimix5").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix5.png'    ,'Minimix 5'       );");
		
		document.getElementById("apsiho"   ).innerHTML = "Psychoknobeleien";
		document.getElementById("asocio"   ).innerHTML = "Sozioknobeleien ";
		document.getElementById("ahisto"   ).innerHTML = "Histoknobeleien ";
		document.getElementById("ageo"     ).innerHTML = "Geoknobeleien   ";
		document.getElementById("azoo"     ).innerHTML = "Zooknobeleien   ";
		document.getElementById("asecv"    ).innerHTML = "Secvenknobeleien";
		document.getElementById("amate"    ).innerHTML = "Matheknobeleien ";
		document.getElementById("achemo"   ).innerHTML = "Chemoknobeleien ";
		document.getElementById("acrono"   ).innerHTML = "Chronoknobeleien";
		document.getElementById("aastro"   ).innerHTML = "Astroknobeleien ";
		document.getElementById("aminimix1").innerHTML = "Minimix 1       ";
		document.getElementById("aminimix2").innerHTML = "Minimix 2       ";
		document.getElementById("aminimix3").innerHTML = "Minimix 3       ";
		document.getElementById("aminimix4").innerHTML = "Minimix 4       ";
		document.getElementById("aminimix5").innerHTML = "Minimix 5       ";
		
		document.getElementById("spanpsiho"   ).innerHTML = "Pseudo-psychologisches Profil";
		document.getElementById("spansocio"   ).innerHTML = "Soziale Knobeleien";
		document.getElementById("spanhisto"   ).innerHTML = "Historische Knobeleien";
		document.getElementById("spangeo"     ).innerHTML = "Geographische Knobeleien";
		document.getElementById("spanzoo"     ).innerHTML = "Tier-Knobeleien";
		document.getElementById("spansecv"    ).innerHTML = "\"Was kommt als n&#228;chstes ...?\"";
		document.getElementById("spanmate"    ).innerHTML = "Mathematische Knobeleien";
		document.getElementById("spanchemo"   ).innerHTML = "Chemische Knobeleien";
		document.getElementById("spancrono"   ).innerHTML = "Zeit-Knobeleien";
		document.getElementById("spanastro"   ).innerHTML = "Astronomische Knobeleien";
		document.getElementById("spanminimix1").innerHTML = "Wahr/Falsch Fragen";
		document.getElementById("spanminimix2").innerHTML = "\"Was kommt als n&#228;chstes ...?\", Stufe II";
		document.getElementById("spanminimix3").innerHTML = "Allgemeines I";
		document.getElementById("spanminimix4").innerHTML = "Allgemeines II";
		document.getElementById("spanminimix5").innerHTML = "Allgemeines III (die ultimative Knobelaufgabe)";
	
	}
}

function retranslateDEMacrochitzeIntro() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "MAKROKNOBELEIEN";
	
	// Cell (3)
	document.getElementById("divMainContents").innerHTML = "";
		
	}
}

function retranslateDEInteractiveIntro() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "INTERAKTIVE DENKAUFGABEN";
	
	// Cell (3)	
	document.getElementById("divsageti"     ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Sageti.png'    , 'Pfeile' );");
	document.getElementById("divtreidame"   ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Dame.png'     , 'Drei Damen'			);");
	document.getElementById("divplopulmere" ).setAttribute("onMouseOver", "showImageOnHover('Interactive/PlopulMere.png', 'Wenn es schwarz schneit...'	);");
	document.getElementById("divssudoku"    ).setAttribute("onMouseOver", "showImageOnHover('Interactive/SkyscraperSudoku.png', 'Wolkenkratzer Sudoku'	);");
	document.getElementById("divfermier"    ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Fermier.png'   , 'Das Bauer-R&auml;tsel'		);");
	document.getElementById("divsegmente"   ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Segmente.png'  , 'Strecken'				);");
	document.getElementById("divmensa"      ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Mensa.png'	    , 'Mensa Test'				);");

	document.getElementById("sageti"    ).innerHTML="Pfeile";	
	document.getElementById("treidame"  ).innerHTML="Drei Damen";
	document.getElementById("plopulmere").innerHTML="Wenn es schwarz schneit...";
	document.getElementById("ssudoku"   ).innerHTML="Wolkenkratzer Sudoku";
	document.getElementById("fermier"   ).innerHTML="Das Bauer-R&auml;tsel";
	document.getElementById("segmente"  ).innerHTML="Strecken";
	document.getElementById("mensa"     ).innerHTML="Mensa Test";
	
		
	}
}

function retranslateDEChessIntro() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "SCHACH STUDIEN";
	
	// Cell (3)
	document.getElementById("Homemade01").innerHTML=allstudynames[ 1][2];
	document.getElementById("Homemade02").innerHTML=allstudynames[ 2][2];
	document.getElementById("Homemade03").innerHTML=allstudynames[ 3][2];
	document.getElementById("Homemade04").innerHTML=allstudynames[ 4][2];
	document.getElementById("Homemade05").innerHTML=allstudynames[ 5][2];
	document.getElementById("Homemade06").innerHTML=allstudynames[ 6][2];
	document.getElementById("Homemade08").innerHTML=allstudynames[ 8][2];
	document.getElementById("Homemade09").innerHTML=allstudynames[ 9][2];	
	document.getElementById("Homemade10").innerHTML=allstudynames[10][2];
	document.getElementById("Homemade11").innerHTML=allstudynames[11][2];
	document.getElementById("Homemade13").innerHTML=allstudynames[13][2];

	document.getElementById("spanlegend").innerHTML="Schwierigkeit f&#252;r Engines (Rechner)";	
		
	}
}

function retranslateDEDictionaryIntro() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "W&#214;RTERBUCH";
	
	// Cell (3)
	//document.getElementById("randomWord" ).setAttribute("data", "zufaellig" );
	document.getElementById("dictionarySearchIcon").setAttribute("data",  "Suche" );
		
	}
}

function retranslateDEMicrochitze() 
{	
	// translations to DE =========================	
	if(lang==="de")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MIKROKNOBELEIEN";
		
		// Cell (3)	
		document.getElementById("expandcompressHelpertools").innerHTML="Spickzettel";
		document.getElementById("buttonCalculator"  ).setAttribute("data","Rechner"  );
		document.getElementById("buttonTerra"       ).setAttribute("data","Terra"  );
		document.getElementById("buttonMendeleev"   ).setAttribute("data","Mendeleev"  );
		
		document.getElementById("buttonResults").innerHTML = "Siehe Antworten";
	}
}

function retranslateDEMacrochitze() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MAKROKNOBELEIEN";
		
		// Cell (3)		
        document.getElementById("MazeRules"    ).setAttribute("data", "Spielregeln");
        document.getElementById("solutionField").setAttribute("data", "Karte");
        document.getElementById("saveField"    ).setAttribute("data", "Speichern");
        document.getElementById("loadField"    ).setAttribute("data", "Laden");
        
		document.getElementById("expandcompressHelpertools").innerHTML="Spickzettel";
		document.getElementById("buttonCalculator"  ).setAttribute("data","Rechner"  );
		document.getElementById("buttonTerra"       ).setAttribute("data","Terra"  );
		document.getElementById("buttonMendeleev"   ).setAttribute("data","Mendeleev"  );
        
        document.getElementById("MouseLeftClick").innerHTML = 'Teile bewegen';
        document.getElementById("MouseDoubleClick").innerHTML = 'Teile drehen';
        document.getElementById("MouseRightClick").innerHTML = 'Teile spiegeln';
	}
}

function retranslateDEInteractive() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "INTERAKTIVE DENKAUFGABEN";
		
		// Cell (3)		
	}
}

function retranslateDEChess() 
{
	// translations to DE =========================	
	if(lang==="de")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "SCHACH STUDIEN";
		
		// Cell (3)
		document.getElementById("divInfo").innerHTML = '<br/>'+currchessinfo[2]+'<br/>&nbsp';
		if(coauthor)
		{
			document.getElementById("divCoauthor").innerHTML = 'Co-Autor: '+coauthor;
		}		
		else
		{
			document.getElementById("divCoauthor").innerHTML = '&nbsp';
		}
		if (!document.getElementById("divShowSolution"))
		{
			showSolution();
		}
		
		document.getElementById("buttonHideSolution").innerHTML = "L&ouml;sung verstecken";
		document.getElementById("buttonShowSolution").innerHTML = "L&ouml;sung zeigen";

	}
}

function retranslateDEDictionary() 
{
// translations to DE =========================	
	if(lang==="de")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "W&#214;RTERBUCH";
		//changeSrcImage('Images/C0.Common/Helpertools/Flags/ro_gray.png','imgRO');
		//changeSrcImage('Images/C0.Common/Helpertools/Flags/en_gray.png','imgEN');
		
		// Cell (3)
		document.getElementById("SearchErrorField").innerHTML = "Solche W&#246;rter sind nicht im W&#246;rterbuch... Suchen Sie etwas anderes oder w&#228;hlen Sie einer dieser W&#246;rter:";
	}
}

function retranslateDEUnderConstruction() 
{
	// translations to DE =========================
	if(lang==="de")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "SEITE  IM  AUFBAU";
		
		// Cell (3)
		document.getElementById("divUnderConstruction").innerHTML = "Diese Seite ist noch nicht verf&#252;gbar...";
	}
}