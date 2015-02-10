/*---------------------------------------------------------------------------------------------------*\
| This file contains the general javascript functions related to translations.                        |     
| The following functions are available:                                                              |
|       retranslateENCommon()............. retranslates the common texts in the selected language     |
|       retranslateENIndexIntro()......... retranslates Index texts in the selected language          |
|       retranslateENMicrochitzeIntro().... retranslates Microchitze intro in the selected language   |
|       retranslateENMacrochitzeIntro()... retranslates Macrochitze intro in the selected language    |
|       retranslateENInteractiveIntro()... retranslates Interactive intro in the selected language    |
|       retranslateENChessIntro()......... retranslates Chess intro in the selected language          |
|       retranslateENDictionaryIntro().... retranslates Dictionary intro in the selected language     |
|       retranslateENMicrochitze()......... retranslates Microchitze texts in the selected language   |
|       retranslateENMacrochitze()........ retranslates Macrochitze texts in the selected language    |
|       retranslateENInteractive()........ retranslates Interactive texts in the selected language    |
|       retranslateENChess().............. retranslates Chess texts in the selected language          |
|       retranslateENDictionary()......... retranslates Dictionary texts in the selected language     |
\*---------------------------------------------------------------------------------------------------*/

/*jslint es5: true */

/* GLOBAL VARS USED IN THIS FILE:*/
var page; // the current page id: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var lang; // the current language: "ro" "en" "de"
var intro; // current intro text displayed: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var auxparam; //the number of the test; auxparam controls the index list initialization and the quiz/problem/application title
var allstudynames, currchessinfo, coauthor;

/*global showSolution*/

function retranslateENCommon()
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

// translations to EN =========================
	if(lang==="en")
	{
	// Cell (0)
	document.getElementById("banner").href = "index.html?lang=en";
	
	// Cell (1)
	document.getElementById("buttonMicrochitze").setAttribute("data", "Microteasers");
	document.getElementById("buttonMacrochitze").setAttribute("data", "Macroteasers");
	document.getElementById("buttonInteractive").setAttribute("data", "Interactive");
	document.getElementById("buttonDictionary" ).setAttribute("data", "Dictionary" );
	document.getElementById("buttonChess"      ).setAttribute("data", "Chess studies");
	document.getElementById("imgMicrochitze"   ).alt = "Microteasers";
	document.getElementById("imgMacrochitze"   ).alt = "Macroteasers";
	document.getElementById("imgInteractive"   ).alt = "Interactive";
	document.getElementById("imgDictionary"    ).alt = "Dictionary";
	document.getElementById("imgChess"         ).alt = "Chess studies";

	// Cell (2)
	document.getElementById("buttonAdmin"  ).href = "#";
	document.getElementById("buttonContact").href = "Javascript:TINY.box.show('Helpertools/contactEN.html', 1,0,0,1);";
	document.getElementById("buttonHome"   ).href = "index.html?lang=en";
	document.getElementById("buttonAdmin"  ).setAttribute("data","Admin"  );
	document.getElementById("buttonContact").setAttribute("data","Contact");
	document.getElementById("buttonHome"   ).setAttribute("data","Home"   );
	document.getElementById("imgAdmin"     ).alt = "Admin";
	document.getElementById("imgContact"   ).alt = "Contact";
	document.getElementById("imgHome"      ).alt = "Home";
	
	// Cells (3) is page-specific
	
	}
}

function retranslateENIndexIntro()
{
	// translations to EN =========================	
	if(lang==="en")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "...";
	
	// Cell (3)
	document.getElementById("divMainContentsLeftIcon").setAttribute("class", "common");
	document.getElementById("imgMainContentsLeft1" ).setAttribute("data", "Microteasers" );
	document.getElementById("imgMainContentsLeft2" ).setAttribute("data", "Macroteasers" );
	document.getElementById("imgMainContentsLeft3" ).setAttribute("data", "Interactive"  );
	document.getElementById("imgMainContentsLeft4" ).setAttribute("data", "Chess studies");
	document.getElementById("imgMainContentsLeft5" ).setAttribute("data", "Dictionary"   );
	
	document.getElementById("imgMainContentsRight12" ).setAttribute("data", "Microteasers" );
	document.getElementById("imgMainContentsRight22" ).setAttribute("data", "Macroteasers" );
	document.getElementById("imgMainContentsRight32" ).setAttribute("data", "Interactive"  );
	document.getElementById("imgMainContentsRight42" ).setAttribute("data", "Chess studies");
	document.getElementById("imgMainContentsRight52" ).setAttribute("data", "Dictionary"   );
			
	document.getElementById("divMainContentsRight11").innerHTML = "\
					<b>Microteasers:</b> 10-question quizzes of brainteasers. <br/>\
					<i>E.g.: Why do white sheep eat more grass than black sheep?</i>";
	document.getElementById("divMainContentsRight21").innerHTML = "\
					<b>Macroteasers</b>: recreative brainteasers. <br/>\
					<i>E.g.: Carve an object so that its projections from above, front and back look like in the drawing to the right:</i>";				
	document.getElementById("divMainContentsRight31").innerHTML = "\
					<b>Interactive</b> brainteasers. <br/>\
					<i>Ex: Try to follow the instructions in placing the green dots...</i>";
	document.getElementById("divMainContentsRight41").innerHTML = "\
					<b>Chess studies</b> that confuse the engines (computers).";
	document.getElementById("divMainContentsRight51").innerHTML = "\
					<b>Dictionary</b> with funny definitions. <br>\
					<i>E.g.: Echo [noun] Expected effect when talking to walls.</i>";
					
	}
}

function retranslateENMicrochitzeIntro() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MICROTEASERS";
	
		// Cell (3)
		document.getElementById("divpsiho"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Psihochitze.png' ,'Psychoteasers');");
		document.getElementById("divsocio"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Sociochitze.png' ,'Socioteasers' );");
		document.getElementById("divhisto"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Histochitze.png' ,'Histoteasers' );");
		document.getElementById("divgeo"     ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Geochitze.png'   ,'Geoteasers'   );");
		document.getElementById("divzoo"     ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Zoochitze.png'   ,'Zooteasers'   );");
		document.getElementById("divsecv"    ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Secvenchitze.png','Secventeasers');");
		document.getElementById("divmate"    ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Matechitze.png'  ,'Mathteasers'  );");
		document.getElementById("divchemo"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Chemochitze.png' ,'Chemoteasers' );");
		document.getElementById("divcrono"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Cronochitze.png' ,'Chronoteasers');");
		document.getElementById("divastro"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Astrochitze.png' ,'Astroteasers' );");
		document.getElementById("divminimix1").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix1.png'    ,'Minimix 1'    );");
		document.getElementById("divminimix2").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix2.png'    ,'Minimix 2'    );");
		document.getElementById("divminimix3").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix3.png'    ,'Minimix 3'    );");
		document.getElementById("divminimix4").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix4.png'    ,'Minimix 4'    );");
		document.getElementById("divminimix5").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix5.png'    ,'Minimix 5'    );");
		
		document.getElementById("apsiho"   ).innerHTML = "Psychoteasers";
		document.getElementById("asocio"   ).innerHTML = "Socioteasers ";
		document.getElementById("ahisto"   ).innerHTML = "Histoteasers ";
		document.getElementById("ageo"     ).innerHTML = "Geoteasers   ";
		document.getElementById("azoo"     ).innerHTML = "Zooteasers   ";
		document.getElementById("asecv"    ).innerHTML = "Secventeasers";
		document.getElementById("amate"    ).innerHTML = "Mathteasers  ";
		document.getElementById("achemo"   ).innerHTML = "Chemoteasers ";
		document.getElementById("acrono"   ).innerHTML = "Chronoteasers";
		document.getElementById("aastro"   ).innerHTML = "Astroteasers ";
		document.getElementById("aminimix1").innerHTML = "Minimix 1    ";
		document.getElementById("aminimix2").innerHTML = "Minimix 2    ";
		document.getElementById("aminimix3").innerHTML = "Minimix 3    ";
		document.getElementById("aminimix4").innerHTML = "Minimix 4    ";
		document.getElementById("aminimix5").innerHTML = "Minimix 5    ";
		
		document.getElementById("spanpsiho"   ).innerHTML = "Pseudo-psychological profile";
		document.getElementById("spansocio"   ).innerHTML = "Social teasers";
		document.getElementById("spanhisto"   ).innerHTML = "Historical teasers";
		document.getElementById("spangeo"     ).innerHTML = "Geography teasers";
		document.getElementById("spanzoo"     ).innerHTML = "Animal teasers";
		document.getElementById("spansecv"    ).innerHTML = "\"What comes next ...?\"";
		document.getElementById("spanmate"    ).innerHTML = "Mathematical teasers";
		document.getElementById("spanchemo"   ).innerHTML = "Chemical teasers";
		document.getElementById("spancrono"   ).innerHTML = "Time-related teasers";
		document.getElementById("spanastro"   ).innerHTML = "Astronomical teasers";
		document.getElementById("spanminimix1").innerHTML = "True/False questions";
		document.getElementById("spanminimix2").innerHTML = "\"What comes next ...?\", level II";
		document.getElementById("spanminimix3").innerHTML = "Miscellaneous I";
		document.getElementById("spanminimix4").innerHTML = "Miscellaneous II";
		document.getElementById("spanminimix5").innerHTML = "Miscellaneous III (the ultimate test)";
	
	}
}

function retranslateENMacrochitzeIntro() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "MACROTEASERS";
	
	// Cell (3)
	document.getElementById("divMainContents").innerHTML = "";
	
	}
}

function retranslateENInteractiveIntro() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "INTERACTIVE BRAINTEASERS";
	
	// Cell (3)	
	document.getElementById("divsageti"     ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Sageti.png'	, 'Arrows'					);");
	document.getElementById("divtreidame"   ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Dame.png'		, 'Three queens'			);");
	document.getElementById("divplopulmere" ).setAttribute("onMouseOver", "showImageOnHover('Interactive/PlopulMere.png', 'When hell freezes...'	);");
	document.getElementById("divssudoku"    ).setAttribute("onMouseOver", "showImageOnHover('Interactive/SkyscraperSudoku.png', 'Skyscraper Sudoku'	);");
	document.getElementById("divfermier"    ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Fermier.png'	, 'Farmers puzzle'		);");
	document.getElementById("divsegmente"   ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Segmente.png'	, 'Segments'				);");
	document.getElementById("divmensa"      ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Mensa.png'		, 'Mensa Test'				);");

	document.getElementById("sageti"    ).innerHTML="Arrows";					
	document.getElementById("treidame"  ).innerHTML="Three queens";			
	document.getElementById("plopulmere").innerHTML="When hell freezes...";	
	document.getElementById("ssudoku"   ).innerHTML="Skyscraper Sudoku";	
	document.getElementById("fermier"   ).innerHTML="Farmer puzzle";	
	document.getElementById("segmente"  ).innerHTML="Segments";		
	document.getElementById("mensa"     ).innerHTML="Mensa Test";			
	
	}
}

function retranslateENChessIntro() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "CHESS STUDIES";
	
	// Cell (3)
	document.getElementById("Homemade01").innerHTML=allstudynames[ 1][1];
	document.getElementById("Homemade02").innerHTML=allstudynames[ 2][1];
	document.getElementById("Homemade03").innerHTML=allstudynames[ 3][1];
	document.getElementById("Homemade04").innerHTML=allstudynames[ 4][1];	
	document.getElementById("Homemade05").innerHTML=allstudynames[ 5][1];	
	document.getElementById("Homemade06").innerHTML=allstudynames[ 6][1];
	document.getElementById("Homemade08").innerHTML=allstudynames[ 8][1];
	document.getElementById("Homemade09").innerHTML=allstudynames[ 9][1];	
	document.getElementById("Homemade10").innerHTML=allstudynames[10][1];
	document.getElementById("Homemade11").innerHTML=allstudynames[11][1];
	document.getElementById("Homemade13").innerHTML=allstudynames[13][1];
	
	document.getElementById("spanlegend").innerHTML="Difficulty for engines (computers)";
	
	}
}

function retranslateENDictionaryIntro() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "DICTIONARY";
	
	// Cell (3)
	//document.getElementById("randomWord" ).setAttribute("data", "Random" );
	document.getElementById("dictionarySearchIcon").setAttribute("data", "Search");
	
	}
}

function retranslateENMicrochitze() 
{		
	// translations to EN =========================	
	if(lang==="en")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MICROTEASERS";
		
		// Cell (3)
		document.getElementById("expandcompressHelpertools").innerHTML="Crib sheets";
		document.getElementById("buttonConstants"   ).setAttribute("data","Constants"  );
		document.getElementById("buttonCalendar"    ).setAttribute("data","Calendar"  );
		document.getElementById("buttonConvertor"   ).setAttribute("data","Convertor"  );
		document.getElementById("buttonCalculator"  ).setAttribute("data","Calculator"  );
		document.getElementById("buttonTerra"       ).setAttribute("data","Terra"  );
		document.getElementById("buttonMendeleev"   ).setAttribute("data","Mendeleev"  );
		document.getElementById("buttonSolar"       ).setAttribute("data","Solar System"  );
		document.getElementById("buttonStars"       ).setAttribute("data","Stars"  );
		document.getElementById("buttonMorse"       ).setAttribute("data","Morse Code"  );
		//document.getElementById("buttonBraille"   ).setAttribute("data","Braille Code"  );
		//document.getElementById("buttonAlphabet1" ).setAttribute("data","Alphabet"  );
		//document.getElementById("buttonAlphabet2" ).setAttribute("data","Alphabet"  );
		
		document.getElementById("buttonResults").setAttribute("data","Go to the answers"  );
	}
}

function retranslateENMacrochitze() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MACROTEASERS";
		
		// Cell (3)	
	}
}

function retranslateENInteractive() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "INTERACTIVE BRAINTEASERS";
		
		// Cell (3)
	}
}

function retranslateENChess() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "CHESS STUDIES";
		
		// Cell (3)	
		document.getElementById("divInfo").innerHTML = '<br/>'+currchessinfo[1]+'<br/>&nbsp';
		if(coauthor)
		{
			document.getElementById("divCoauthor").innerHTML = 'Co-author: '+coauthor;
		}
		else
		{
			document.getElementById("divCoauthor").innerHTML = '&nbsp';
		}
		if (!document.getElementById("divShowSolution"))
		{
			showSolution();
		}
		
		document.getElementById("buttonHideSolution").innerHTML = "Hide solution";
		document.getElementById("buttonShowSolution").innerHTML = "Show solution";

	}
}

function retranslateENDictionary() 
{
	// translations to EN =========================	
	if(lang==="en")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "DICTIONARY";
		//changeSrcImage('Images/C0.Common/Flags/ro_gray.png','imgRO');
		//changeSrcImage('Images/C0.Common/Flags/de_gray.png','imgDE');
		
		// Cell (3)	
		document.getElementById("SearchErrorField").innerHTML = "Such words are not in the dictionary... Search something else or choose one of these words:";
	}
}

function retranslateENUnderConstruction() 
{
	// translations to EN =========================
	if(lang==="en")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "PAGE  UNDER  CONSTRUCTION";
		
		// Cell (3)
		document.getElementById("divUnderConstruction").innerHTML = "The page you are trying to access is not available yet...";
	}
}