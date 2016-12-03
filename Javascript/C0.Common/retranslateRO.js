/*---------------------------------------------------------------------------------------------------*\
| This file contains the general javascript functions related to translations.                        |     
| The following functions are available:                                                              |
|       retranslateROCommon()............. retranslates the common texts in the selected language     |
|       retranslateROIndexIntro()......... retranslates Index texts in the selected language          |
|       retranslateROMicrochitzeIntro().... retranslates Microchitze intro in the selected language   |
|       retranslateROMacrochitzeIntro()... retranslates Macrochitze intro in the selected language    |
|       retranslateROInteractiveIntro()... retranslates Interactive intro in the selected language    |
|       retranslateROChessIntro()......... retranslates Chess intro in the selected language          |
|       retranslateRODictionaryIntro().... retranslates Dictionary intro in the selected language     |
|       retranslateROMicrochitze()......... retranslates Microchitze texts in the selected language   |
|       retranslateROMacrochitze()........ retranslates Macrochitze texts in the selected language    |
|       retranslateROInteractive()........ retranslates Interactive texts in the selected language    |
|       retranslateROChess().............. retranslates Chess texts in the selected language          |
|       retranslateRODictionary()......... retranslates Dictionary texts in the selected language     |
\*---------------------------------------------------------------------------------------------------*/

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

\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*jslint es5: true */

/* GLOBAL VARS USED IN THIS FILE:*/
var page; // the current page id: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var lang; // the current language: "ro" "en" "de"
var intro; // current intro text displayed: 0=index; 1=Microchitze; 2=Macrochitze; 3=interactive; 4=chess; 5=dictionary
var auxparam; //the number of the test; auxparam controls the index list initialization and the quiz/problem/application title
var allstudynames, currchessinfo, coauthor;

/*global showSolution*/

function retranslateROCommon()
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

// translations to RO =========================
	if(lang==="ro")
	{
	// Cell (0)
	document.getElementById("banner").href = "index.html?lang=ro";
	
	// Cell (1)
	document.getElementById("buttonMicrochitze" ).setAttribute("data", "Microchitze" );
	document.getElementById("buttonMacrochitze").setAttribute("data", "Macrochitze");
	document.getElementById("buttonInteractive").setAttribute("data", "Interactive");
	document.getElementById("buttonDictionary" ).setAttribute("data", "Dictionar"  );
	document.getElementById("buttonChess"      ).setAttribute("data", "Studii de sah");
	document.getElementById("imgMicrochitze"    ).alt = "Microchitze";
	document.getElementById("imgMacrochitze"   ).alt = "Macrochitze";
	document.getElementById("imgInteractive"   ).alt = "Interactive";
	document.getElementById("imgDictionary"    ).alt = "Dictionar";
	document.getElementById("imgChess"         ).alt = "Studii de sah";
	
	
	// Cell (2)
	document.getElementById("buttonAdmin"  ).href = "#";
	document.getElementById("buttonContact").onclick = "TINY.box.show('Helpertools/contactRO.html', 1,0,0,1);";
	document.getElementById("buttonHome"   ).href = "index.html?lang=ro";
	document.getElementById("buttonAdmin"  ).setAttribute("data","Admin"  );
	document.getElementById("buttonContact").setAttribute("data","Contact");
	document.getElementById("buttonHome"   ).setAttribute("data","Acasa"  );
	document.getElementById("imgAdmin"     ).alt = "Admin";
	document.getElementById("imgContact"   ).alt = "Contact";
	document.getElementById("imgHome"      ).alt = "Acasa";
	
	// Cell (3) is page-specific
	
	}
	
}

function retranslateROIndexIntro()
{
	// translations to RO =========================
	if(lang==="ro")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "...";
	
	// Cell (3)
	document.getElementById("divMainContentsLeftIcon").setAttribute("class", "common");
	document.getElementById("imgMainContentsLeft1" ).setAttribute("data", "Microchitze" );
	document.getElementById("imgMainContentsLeft2" ).setAttribute("data", "Macrochitze");
	document.getElementById("imgMainContentsLeft3" ).setAttribute("data", "Interactive");
	document.getElementById("imgMainContentsLeft4" ).setAttribute("data", "Studii de sah");
	document.getElementById("imgMainContentsLeft5" ).setAttribute("data", "Dictionar");
	
	document.getElementById("imgMainContentsRight12" ).setAttribute("data", "Microchitze" );
	document.getElementById("imgMainContentsRight22" ).setAttribute("data", "Macrochitze");
	document.getElementById("imgMainContentsRight32" ).setAttribute("data", "Interactive");
	document.getElementById("imgMainContentsRight42" ).setAttribute("data", "Studii de sah");
	document.getElementById("imgMainContentsRight52" ).setAttribute("data", "Dictionar");
			
	document.getElementById("divMainContentsRight11").innerHTML = "\
					<b>Microchitze:</b> Seturi de c&#xE2;te 10 &#xEE;ntreb&#x103;ri cu chichitze. <br/>\
                    <i>Ex: De ce oile albe m&#x103;n&#xE2;nc&#x103; mai mult&#x103; iarb&#x103; dec&#xE2;t oile negre?</i>";
	document.getElementById("divMainContentsRight21").innerHTML = "\
					<b>Macrochitze:</b> Jocuri cu chichitze. <br/>\
					<i>Ex: G&#x103;se&#x15F;te unde duc toate u&#x15F;ile din labirint.</i>";				
	document.getElementById("divMainContentsRight31").innerHTML = "\
					Probleme <b>interactive</b> cu chichitze. <br/>\
					<i>Ex: Pozi&#x21B;ioneaz&#x103; punctele verzi conform instruc&#x21B;iunilor...</i>";
	document.getElementById("divMainContentsRight41").innerHTML = "\
					<b> Probleme (de &#x15F;ah)</b> care las&#x103; calculatorul confuz.";
	document.getElementById("divMainContentsRight51").innerHTML = "\
					<b>Dic&#x21B;ionar</b> de defini&#x21B;ii haioase. <br>\
					<i>Ex: Ecou [s.n.] Efect scontat c&#xE2;nd vorbe&#x15F;ti la pere&#x21B;i.</i>";
	}
}

function retranslateROMicrochitzeIntro() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MICROCHITZE";
		
		// Cell (3)
		document.getElementById("divpsiho"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Psihochitze.png' ,'Psihochitze' );");
		document.getElementById("divsocio"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Sociochitze.png' ,'Sociochitze' );");
		document.getElementById("divhisto"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Histochitze.png' ,'Histochitze' );");
		document.getElementById("divgeo"     ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Geochitze.png'   ,'Geochitze'   );");
		document.getElementById("divzoo"     ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Zoochitze.png'   ,'Zoochitze'   );");
		document.getElementById("divsecv"    ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Secvenchitze.png','Secvenchitze');");
		document.getElementById("divmate"    ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Matechitze.png'  ,'Matechitze'  );");
		document.getElementById("divchemo"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Chemochitze.png' ,'Chemochitze' );");
		document.getElementById("divcrono"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Cronochitze.png' ,'Cronochitze' );");
		document.getElementById("divastro"   ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Astrochitze.png' ,'Astrochitze' );");
		document.getElementById("divlogo"    ).setAttribute("onMouseOver", "showImageOnHover('Microchitze/Logochitze.png'  ,'Logochitze'  );");
		document.getElementById("divminimix1").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix1.png'    ,'Minimix 1'   );");
		document.getElementById("divminimix2").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix2.png'    ,'Minimix 2'   );");
		document.getElementById("divminimix3").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix3.png'    ,'Minimix 3'   );");
		document.getElementById("divminimix4").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix4.png'    ,'Minimix 4'   );");
		document.getElementById("divminimix5").setAttribute("onMouseOver", "showImageOnHover('Microchitze/Minimix5.png'    ,'Minimix 5'   );");
		
		document.getElementById("apsiho"   ).innerHTML = "Psihochitze ";
		document.getElementById("asocio"   ).innerHTML = "Sociochitze ";
		document.getElementById("ahisto"   ).innerHTML = "Histochitze ";
		document.getElementById("ageo"     ).innerHTML = "Geochitze   ";
		document.getElementById("azoo"     ).innerHTML = "Zoochitze   ";
		document.getElementById("asecv"    ).innerHTML = "Secvenchitze";
		document.getElementById("amate"    ).innerHTML = "Matechitze  ";
		document.getElementById("achemo"   ).innerHTML = "Chemochitze ";
		document.getElementById("acrono"   ).innerHTML = "Cronochitze ";
		document.getElementById("aastro"   ).innerHTML = "Astrochitze ";
        document.getElementById("alogo"    ).innerHTML = "Logochitze  ";
		document.getElementById("aminimix1").innerHTML = "Minimix 1   ";
		document.getElementById("aminimix2").innerHTML = "Minimix 2   ";
		document.getElementById("aminimix3").innerHTML = "Minimix 3   ";
		document.getElementById("aminimix4").innerHTML = "Minimix 4   ";
		document.getElementById("aminimix5").innerHTML = "Minimix 5   ";
		
		document.getElementById("spanpsiho"   ).innerHTML = "Profilul pseudo-psihologic";
		document.getElementById("spansocio"   ).innerHTML = "&#xCE;ntreb&#x103;ri cu chichitze sociale";
		document.getElementById("spanhisto"   ).innerHTML = "&#xCE;ntreb&#x103;ri istorice";
		document.getElementById("spangeo"     ).innerHTML = "Chichitze de geografie";
		document.getElementById("spanzoo"     ).innerHTML = "&#xCE;ntreb&#x103;ri cu &#x15F;i despre animale";
		document.getElementById("spansecv"    ).innerHTML = "\"Ce urmeaz&#x103; dup&#x103; ...?\"";
		document.getElementById("spanmate"    ).innerHTML = "Chichitze matematice";
		document.getElementById("spanchemo"   ).innerHTML = "Chichitze chimice";
		document.getElementById("spancrono"   ).innerHTML = "&#xCE;ntreb&#x103;ri de timp";
		document.getElementById("spanastro"   ).innerHTML = "Chichitze astronomice";
        document.getElementById("spanlogo"    ).innerHTML = "Cuvinte ciudate";
		document.getElementById("spanminimix1").innerHTML = "&#xCE;ntreb&#x103;ri Adev&#x103;rat/Fals";
		document.getElementById("spanminimix2").innerHTML = "\"Ce urmeaz&#x103; dup&#x103; ...?\", nivelul II";
		document.getElementById("spanminimix3").innerHTML = "Amestec de chichitze I";
		document.getElementById("spanminimix4").innerHTML = "Amestec de chichitze II";
		document.getElementById("spanminimix5").innerHTML = "Amestec de chichitze III (testul suprem)";
        
        //document.getElementById("alogo"    ).href = "Microchitze.html?lang="+lang+"&aux=20";

	}
}

function retranslateROMacrochitzeIntro() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "MACROCHITZE";
	
	// Cell (3)
    document.getElementById("MazeRules"    ).setAttribute("data", "Regulile jocului");
        
    document.getElementById("macrotest00"   ).innerHTML = "Tutorial ";
    document.getElementById("macrotest01"   ).innerHTML = "Labirint 1 (&#238;n cur&#xE2;nd)";

	}
}

function retranslateROInteractiveIntro() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "CHICHITZE INTERACTIVE";
	
	// Cell (3)	
	document.getElementById("divsageti"     ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Sageti.png'	, 'S&#x103;ge&#x21B;i'		);");
	document.getElementById("divtreidame"   ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Dame.png'		, 'Trei Dame'				);");
	document.getElementById("divplopulmere" ).setAttribute("onMouseOver", "showImageOnHover('Interactive/PlopulMere.png', 'C&#xE2;nd o face plopul mere'	);");
	document.getElementById("divssudoku"    ).setAttribute("onMouseOver", "showImageOnHover('Interactive/SkyscraperSudoku.png', 'Sudoku zg&#xE2;rie-nori'	);");
	document.getElementById("divfermier"    ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Fermier.png'	,'Problema fermierului'		);");
	document.getElementById("divsegmente"   ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Segmente.png'	,'Segmente'					);");
	document.getElementById("divmensa"      ).setAttribute("onMouseOver", "showImageOnHover('Interactive/Mensa.png'		,'Testul Mensa'				);");

	document.getElementById("sageti"    ).innerHTML="S&#x103;ge&#x21B;i";
	document.getElementById("treidame"  ).innerHTML="Trei Dame";
	document.getElementById("plopulmere").innerHTML="C&#xE2;nd o face plopul mere";
	document.getElementById("ssudoku"   ).innerHTML="Sudoku zg&#xE2;rie-nori";
	document.getElementById("fermier"   ).innerHTML="Problema fermierului";
	document.getElementById("segmente"  ).innerHTML="Segmente";
	document.getElementById("mensa"     ).innerHTML="Testul Mensa";

	}
}

function retranslateROChessIntro() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "STUDII DE &#350;AH";
	
	// Cell (3)
	document.getElementById("Homemade01").innerHTML=allstudynames[ 1][0];
	document.getElementById("Homemade02").innerHTML=allstudynames[ 2][0];
	document.getElementById("Homemade03").innerHTML=allstudynames[ 3][0];
	document.getElementById("Homemade04").innerHTML=allstudynames[ 4][0];
	document.getElementById("Homemade05").innerHTML=allstudynames[ 5][0];
	document.getElementById("Homemade06").innerHTML=allstudynames[ 6][0];
	document.getElementById("Homemade08").innerHTML=allstudynames[ 8][0];
	document.getElementById("Homemade09").innerHTML=allstudynames[ 9][0];
	document.getElementById("Homemade10").innerHTML=allstudynames[10][0];
	document.getElementById("Homemade11").innerHTML=allstudynames[11][0];
    document.getElementById("Homemade12").innerHTML=allstudynames[12][0];
	document.getElementById("Homemade13").innerHTML=allstudynames[13][0];
    document.getElementById("Homemade14").innerHTML=allstudynames[14][0];

	document.getElementById("spanlegend").innerHTML="Dificultate pentru calculatoare";
	
	}
}

function retranslateRODictionaryIntro() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
	// Cell (1)
	document.getElementById("divTitle").innerHTML = "DIC&#x21A;IONAR";
	
	// Cell (3)
	//document.getElementById("randomWord").setAttribute("data", "Aleator" );
	document.getElementById("dictionarySearchIcon").setAttribute("data", "Cauta");

	}
}

function retranslateROMicrochitze() 
{		
	// translations to RO =========================
	if(lang==="ro")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "MICROCHITZE";
		
		// Cell (3)
		document.getElementById("expandcompressHelpertools").innerHTML="Fi&#x21B;uici";
		document.getElementById("buttonCalculator"  ).setAttribute("data","Calculator"  );
		document.getElementById("buttonTerra"       ).setAttribute("data","Terra"  );
		document.getElementById("buttonMendeleev"   ).setAttribute("data","Mendeleev"  );
		
		document.getElementById("buttonResults").innerHTML = "Vezi raspunsurile";
	}
	
}

function retranslateROMacrochitze() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
        // Cell (1)
        document.getElementById("divTitle").innerHTML = "MACROCHITZE";

        // Cell (3)
        document.getElementById("MazeRules"    ).setAttribute("data", "Regulile jocului");
        document.getElementById("solutionField").setAttribute("data", "Harta");
        document.getElementById("saveField"    ).setAttribute("data", "Salveaza");
        document.getElementById("loadField"    ).setAttribute("data", "Incarca");
        document.getElementById("teasersList"  ).setAttribute("data", "Chichitze");
        
        document.getElementById("expandcompressHelpertools").innerHTML="Fi&#x21B;uici";
		document.getElementById("buttonCalculator"  ).setAttribute("data","Calculator"  );
		document.getElementById("buttonTerra"       ).setAttribute("data","Terra"  );
		document.getElementById("buttonMendeleev"   ).setAttribute("data","Mendeleev"  );
        
        document.getElementById("MouseLeftClick").innerHTML = 'Mutare piese';
        document.getElementById("MouseDoubleClick").innerHTML = 'Rotire piese';
        document.getElementById("MouseRightClick").innerHTML = 'Oglindire piese';
	}
}

function retranslateROInteractive() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "CHICHITZE INTERACTIVE";
	
		// Cell (3)
	}
	
}

function retranslateROChess() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "STUDII DE &#350;AH";
		
		// Cell (3)
		document.getElementById("divInfo").innerHTML = '<br/>'+currchessinfo[0]+'<br/>&nbsp';
		if(coauthor)
		{
			document.getElementById("divCoauthor").innerHTML = 'Co-autor: '+coauthor;
		}
		else
		{
			document.getElementById("divCoauthor").innerHTML = '&nbsp';
		}
		if (!document.getElementById("divShowSolution"))
		{
			showSolution();
		}
		
		document.getElementById("buttonHideSolution").innerHTML = "Ascunde solu&#x21B;ia";
		document.getElementById("buttonShowSolution").innerHTML = "Arat&#x103; solu&#x21B;ia";
			
	}
}

function retranslateRODictionary() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "DIC&#x21A;IONAR";
		//changeSrcImage('Images/C0.Common/Helpertools/Flags/en_gray.png','imgEN');
		//changeSrcImage('Images/C0.Common/Helpertools/Flags/de_gray.png','imgDE');
		
		// Cell (3)
		document.getElementById("SearchErrorField").innerHTML = "Astfel de cuvinte nu sunt &#xEE;n dic&#x21B;ionar... Cauta&#x21B;i altceva sau alege&#x21B;i unul dintre cuvintele de mai jos:";
	}
}

function retranslateROUnderConstruction() 
{
	// translations to RO =========================
	if(lang==="ro")
	{
		// Cell (1)
		document.getElementById("divTitle").innerHTML = "PAGIN&#x102;  &#xCE;N  LUCRU";
		
		// Cell (3)
		document.getElementById("divUnderConstruction").innerHTML = "Pagina pe care &#xEE;ncerca&#x163;i s&#x103; o accesa&#x163;i nu este &#xEE;nc&#x103; disponibil&#x103;...";
	}
}