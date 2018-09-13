/*----------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                 |
| The following functions are available:                                             |
|       removeUnusedLinks()...... removes unused question link buttons               |
|       setInnerHTML(field,c).... adds contents c in html element fld                |
|		colourQLink(id, colour).. changes the colour of question link id             |
|       colourAnswerFieldBg(id).. colours the answer background in the results phase |
|		cleanSpaces()............ removes starting and ending spaces from answers    |
\*----------------------------------------------------------------------------------*/

/*jslint es5: true */ /* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/

/* GLOBAL VARS USED IN THIS FILE:*/
var IndexList, truthValues, QList, AList, AType, currqid, htmlResultsPhase, rightAnswerBgColour, wrongAnswerBgColour;

/*global showQuestion */
/*global proceedToNextUnanswered */


function removeUnusedLinks()
{
	var questionid, spaceid, container, i;
	
	for(i=IndexList.length; i<10; i++)
	{
		questionid = "Question0" + i;
		container = document.getElementById(questionid);
		container.hidden = true;
		
		spaceid = "Space0" + i;
		container = document.getElementById(spaceid);
		container.hidden = true;
	}
	
}

//=================================================================
//=================================================================
function processKeyEvent(evt)
{
    var cCode;
    
    if(!evt)      { evt = window.event;  }
    if(evt.which) { cCode = evt.which;   }
    else          { cCode = evt.keyCode; }
    
	if(cCode===13) // enter key pressed
	{
		proceedToNextUnanswered();
	}
	else
	{
		if(0===AType[currqid])
		{
			return false;
		}
		if(1===AType[currqid])
		{
			return true;
		}
		if(2===AType[currqid])
		{	//isNumber, - or . or :
			if (cCode > 31 && (cCode !== 45) && (cCode !== 46) && (cCode !== 58) && (cCode < 48 || cCode > 57)) 
			{
				return false;
			}
			else
			{
				return true;
			}
		}
	}
}

//=================================================================
//=================================================================
function colourQLink(id, backgroundColour, borderProperties)
{
	var questionid, container;
	if(10>id)
	{ questionid = "Question0" + id; }
	else
	{ questionid = "Question"  + id; }
	// change colour of the question link
	container = document.getElementById(questionid);
	container.setAttribute("style","display:inline-block; width:20; text-align:center;background-color:" + backgroundColour + ";border:" + borderProperties + ";");	
}

//=================================================================
//=================================================================
function colourAnswerFieldBg(id)
{
	var colour, container;
	if(truthValues[id]===1)
    {
		colour = rightAnswerBgColour;
    }
	else
    {
		colour = wrongAnswerBgColour;
    }
		
	container = document.getElementById("AnswerField");
	container.setAttribute("style","text-align:center; font-size:16px; background:"+colour+";");
}


//=================================================================
//=================================================================
function gotoPrevQuestion()
{
	var qid = currqid-1;
	if(currqid === 0)	{showQuestion(QList.length-1);}
	else				{showQuestion(qid);           }
}

//=================================================================
//=================================================================
function gotoNextQuestion()
{
	var qid = currqid+1;
	if(currqid === QList.length-1)	{showQuestion(0);   }
	else							{showQuestion(qid);	}
}

//=================================================================
//=================================================================
function checkAndDisplayResultsButton()
{
    var boolShowResultsButton, container, i;
	boolShowResultsButton = true;
	
	if(htmlResultsPhase)
	{
		boolShowResultsButton = false;
	}
	else
	{
		for(i=0; i<IndexList.length; i++)
		{ 
			if(""===AList[i])
			{	boolShowResultsButton = false;
				break;
			}
		}
	}
	
	// if all questions have answers, show results button
	if(true===boolShowResultsButton)
	{
		container = document.getElementById("divResultsMarchingAnts");
		container.style.visibility = "visible";	
	}
	else
	{
		container = document.getElementById("divResultsMarchingAnts");
		container.style.visibility = "hidden";		
	}
}
