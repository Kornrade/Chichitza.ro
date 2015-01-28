/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
| The following functions are available:                                                   |
| 	initDict()................... initializes the static and dynamic variables of the page |
|	showDefinition(wid).......... displays the definition of specified word id on page     |
\*----------------------------------------------------------------------------------------*/

function initDict()
{
	// init variables
	currwid = -1;
	dictSize = 0;
	dbWordList = [];
	dbDefList = [];
	
	
	// get raw database
	var rawDatabase;
	if(lang=="ro") {rawDatabase = rawDatabaseRO;}
	if(lang=="en") {rawDatabase = rawDatabaseEN;}
	if(lang=="de") {rawDatabase = rawDatabaseDE;}
	
	// read database, process lines and store words and definitions
	var splarray = rawDatabase.split("ENDLINE");
	for(var i=0; i<splarray.length; i++)
	{
		var currLine = splarray[i];
		if(currLine.length > 15)
		{
			var pos1 = currLine.indexOf("<<",0);
			var pos2 = currLine.indexOf("<<",2 + pos1);
			var pos3 = currLine.indexOf("<<",2 + pos2);
			var end1 = currLine.indexOf(">>",0);
			var end2 = currLine.indexOf(">>",2 + end1);
			var end3 = currLine.indexOf(">>",2 + end2);
			
			if( (pos1 != -1) && (pos2 != -1) && (pos3 != -1) && (end1 != -1) && (end2 != -1) && (end3 != -1) )
			{	
				dbReadable[dictSize] = currLine.substring( 2 + pos1, end1);
				dbWordList[dictSize] = currLine.substring( 2 + pos2, end2);
				dbDefList[dictSize]  = currLine.substring( 2 + pos3, end3);
				dictSize = 1 + dictSize;		
			}
		}
	} 
	
	if(dictSize == 0)
	{
		window.open('UnderConstruction.html?lang='+lang, '_self');
	}
	
	doDictionarySearch(auxparam);
}

//=================================================================
//=================================================================

function setPrevNextVisibility(state)
{
	
	container = document.getElementById("aprev");
	container.style.visibility = state;	
	container = document.getElementById("anext");
	container.style.visibility = state;	

}

//=================================================================
//=================================================================

function showSearchErrorMessage()
{
	currwid = -1;
	
	setInnerHTML("WordField" ,"");
	setInnerHTML("DefinitionField" ,"");
	
	setPrevNextVisibility("hidden");

	showRelatedWords();
	
	container = document.getElementById("SearchErrorField");
	container.style.visibility = "visible";
	
}

//=================================================================
//=================================================================

function showRelatedWords()
{
	var indexList = new Array();
	
	if( -1 == currwid )
	{	//offer 9 random words
		for(var i=0; i<9; i++)
		{ 
			indexList[i] = Math.floor( Math.random() * dictSize );
		}
	}
	else
	{	// gather words around the defined one
		var j = 0;
		for(var i=currwid; i<=currwid+8; i++)
		{
							var reali  = i;
			if( 0 > i) 		  { reali += dictSize; }
			if(dictSize <= i) { reali -= dictSize; }
				
			indexList[j] = reali;
			j = j+1;
		}
	}
	
	showSearchResults(indexList);
}

//=================================================================
//=================================================================

function showDefinition(index)
{
	currwid = index;
	
	setInnerHTML("WordField" ,dbWordList[index]);
	setInnerHTML("DefinitionField" ,dbDefList[index]);
	
	setPrevNextVisibility("visible");
	
	container = document.getElementById("SearchErrorField");
	container.style.visibility = "hidden";
	
	showRelatedWords();
}

//=================================================================
//=================================================================

function showSearchResults(indexList)
{
	var searchResultsFromIndexList = "";
	for(var i=0; i<indexList.length; i++)
	{ 
		if( indexList[i] == currwid )
		{ 	// add a break at regular intervals
			searchResultsFromIndexList += "<span style='display:inline-block;width:88; text-align: center;' class='style_orange'><b><i>" + dbWordList[indexList[i]] + "</i></b></span>";
		}
		else
		{
			searchResultsFromIndexList += "<a style='display:inline-block;width:88; text-align: center;' onClick='showDefinition(" + indexList[i] + ")'><b><i>" + dbWordList[indexList[i]] + "</i></b></a>";
		}
	}
	
	for(var i=indexList.length; i<=8; i++)
	{
		searchResultsFromIndexList += "<span style='display:inline-block;width:88; text-align: center;'>&nbsp;</span>";
	}
	
	container = document.getElementById("SearchErrorField");
	container.style.visibility = "hidden";
	
	setInnerHTML("SearchResultsField" , searchResultsFromIndexList);
}


//=================================================================
//=================================================================

function doDictionarySearch(pattern)
{
	var k   = 0;
	var indexList = new Array();
	
	pattern = cleanSpaces(pattern);
	
	if("" == pattern)
	{
		// predefined patterns are empty => use pattern from search field
		container = document.getElementById("dictionarySearchField");
		pattern = container.value;	
		pattern = cleanSpaces(pattern);		
	}
	
	// delete pattern from search field
	container = document.getElementById("dictionarySearchField");
	container.value = "";
	
	pattern = pattern.toLowerCase();
	if( -1 == pattern.indexOf("*")) { pattern +="*"; }
	
	if("*"==pattern)
	{
		// show random word
		indexList[0] = Math.floor( Math.random() * dictSize );
	}
	else
	{
		var patternParts = pattern.split("*");
		for(var i=0; i<dictSize; i++)
		{
			var tempCurrWord = dbReadable[i].toLowerCase();
			var patternPartsIndices = new Array();
			patternPartsIndices[0] = tempCurrWord.indexOf(patternParts[0]);

			// patternFoundIndex = the product of all incremented indices from patternPartsIndices
			// If any part of patternParts is not found, its index will be -1 => its incremented index will be 0 => product = 0
			// For a word to contain the pattern, the product must be different from 0;
			var patternFoundIndex = 0;
			if(0==patternPartsIndices[0]) { patternFoundIndex = 1; }
			
			for(var j=1; j<patternParts.length; j++)
			{
				patternPartsIndices[j] = tempCurrWord.indexOf(patternParts[j],patternPartsIndices[j-1]);
				patternFoundIndex = patternFoundIndex * (1 + patternPartsIndices[j]);
			}
			
			if( 0 != patternFoundIndex )
			{
				indexList[k] = i;
				k += 1;
			}
			
			if(9==k)
			{
				break;
			}
		}
		
	}
	
	switch(indexList.length)
	{
		case 0:
			showSearchErrorMessage();
			break;
		case 1:
			showDefinition(indexList[0]);	
			break;
		default: 
			showDefinition(indexList[0]);
			showSearchResults(indexList);
			break;
	
	}

}

//=================================================================
//=================================================================

function gotoPrevWord()
{
	if(currwid == 0)
		showDefinition(-1+dictSize);
	else
		showDefinition(-1+currwid);
}

//=================================================================
//=================================================================

function gotoNextWord()
{
	if(currwid == dictSize - 1)
		showDefinition(0);
	else
		showDefinition(1+currwid);
}