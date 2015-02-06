/*--------------------------------------------------------------------------------------------*\
| This file contains the general javascript functions related to helpertools.                  |     
| The following functions are available:                                                       |
|       detectLanguage()................. detects the language cue embedded in the link        |
|       newPopup(h,w,l,t,url)............ opens popup window and displays the helpertool url   |
|       submitTextToDictionarySearch()... (re-)loads dictionary.html showing search results    |
\*--------------------------------------------------------------------------------------------*/

/*jslint es5: true */
/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam, page, intro;

/*global retranslate */
/*global setIntroAndRetranslate */

function detectLanguage()
{
    var n, path, teststr, introstr;
	path=window.location.href;
	
	page = 0;
	n = path.lastIndexOf("Microchitze"); if( n > -1 ) { page = 1; }
	n = path.lastIndexOf("Macrochitze"); if( n > -1 ) { page = 2; }
	n = path.lastIndexOf("Interactive"); if( n > -1 ) { page = 3; }
	n = path.lastIndexOf("Chess");       if( n > -1 ) { page = 4; }
	n = path.lastIndexOf("Dictionary");  if( n > -1 ) { page = 5; }
	n = path.lastIndexOf("UnderConstruction");  if( n > -1 ) { page = -1; }
	
	lang = 'ro';
	n = path.lastIndexOf("lang=");  
	if( n > -1 ) 
	{ 
		lang     = path.substring(n+5,n+7); 
	}
	
	auxparam = 0;
	n = path.lastIndexOf("aux="); 
	if( n > -1 ) 
	{ 
		teststr	= path.substring(n+4);
		if( page !== 5 )
		{
			auxparam = parseInt(teststr,10);
		}
		else
		{
			auxparam = teststr;
		}
	}
	
	intro = 0;
	n = path.lastIndexOf("intro="); 
	if( n > -1 ) 
	{ 
		introstr = path.substring(n+6,n+7); 
		intro = parseInt(introstr,10); 
	}	
	
	setIntroAndRetranslate(intro);
}

function setIntroAndRetranslate(introNumber)
{
	intro = introNumber;
	retranslate(lang);
}

function newPopup(h, w, l, t, url) 
{
    var popupWindow, popUpWindowProperties;
	    popUpWindowProperties =  'height=' + h +
								 ',width=' + w +
								 ',left='  + l +
								 ',top='   + t +
								 ',resizable=yes  \
								  ,scrollbars=yes \
								  ,toolbar=no     \
								  ,titlebar=no	  \
								  ,menubar=no     \
								  ,location=no    \
								  ,directories=no \
								  ,status=no';
								  
	popupWindow = window.open( url, 'popUpWindow', popUpWindowProperties);
}

function showImageOnHover(imageName, imageTitle)
{
    var imagePath, container;
    
	if(""===imageName)
	{
		container = document.getElementById("divMainContentsPeekImageName");
		container.innerHTML = "";
		
		container = document.getElementById("divMainContentsPeekImage");
		container.innerHTML = "";
	}
	else
	{
		imagePath = "Images/0.Common/" + imageName;

		container = document.getElementById("divMainContentsPeekImageName");
		container.innerHTML = '<br/><strong>' + imageTitle + '</strong><br/>';
		
		container = document.getElementById("divMainContentsPeekImage");
		container.innerHTML = "<img src=" + imagePath +" width='128'></img>";
	}
}

var areHelpertoolsExpanded = false;
function expandcompressHelpertools()
{
	if(false===areHelpertoolsExpanded)
	{
		document.getElementById("helpertoolsField").setAttribute("style","visibility:visible"); 
		areHelpertoolsExpanded = true;
	}
	else
	{
		document.getElementById("helpertoolsField").setAttribute("style","visibility:hidden"); 
		areHelpertoolsExpanded = false;
	}
}

function gotoindex(n)
{
	window.open("index.html?lang="+lang+"&intro="+n,"_self");
}

function changeSrcImage (image, divID) {
	document.getElementById(divID).setAttribute("src", image);
}

function submitTextToDictionarySearch()
{	
    var searchText, container;
    
	container = document.getElementById("dictionarySearchField");
	searchText = container.value;

	window.open("Dictionary.html?lang="+lang+"&aux="+searchText+"*","_self");
}

//=================================================================
//=================================================================
function setInnerHTML(field,contents)
{
    var container;
    
	container = document.getElementById(field);
	container.innerHTML = contents;
}

//=================================================================
//=================================================================
function cleanSpaces(stringu)
{
	while(" " === stringu.substring(0,1))
    { stringu = stringu.substring(1,stringu.length); }
	while(" " === stringu.substring(stringu.length-1,stringu.length))
    { stringu = stringu.substring(0,stringu.length-1); }
		
	return stringu;
}