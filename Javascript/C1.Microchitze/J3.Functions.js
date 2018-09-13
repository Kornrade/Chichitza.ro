/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
| The following functions are available:                                                   |
|   initQuiz()................... initializes the static and dynamic variables of the page |
|   retranslateQuestions(qid).... retranslates questions, explanations and images          |
|	showQuestion(qid)............ displays the question with specified id on page          |
|	proceedToNextUnanswered().... finds the next unanswered question                       |
|	computeResults() ............ computes the score and recolours the question tabs       |
\*----------------------------------------------------------------------------------------*/

/*jslint es5: true */ /* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/

/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam, QuizTitle, IndexList, aQcolour, bQcolour, cQcolour, currqid;
var htmlResultsPhase, truthValues, rightAnswerBgColour, rightAnswerColour, wrongAnswerBgColour, wrongAnswerColour;
var QList, AList, CList, EList, RList, HList, IList, JList, IListSrc, JListSrc, AType, dbACrit; 
var dbQList, dbAnswer, dbExpln, dbRefer, dbQHint, dbQImage, dbAImage, dbQImageSrc, dbAImageSrc, dbAType;

/*global initIndexList */
/*global removeUnusedLinks */
/*global retranslateQuestions */
/*global colourQLink */
/*global setInnerHTML */
/*global showQuestion */
/*global cleanSpaces */
/*global saveCurrentQidAnswer */
/*global checkAndDisplayResultsButton */
/*global colourAnswerFieldBg */
/*global computeResults */
/*global computeScore */
/*global hs */

function initQuiz()
{	
    var i; // for loop index
    
	// initialize index list for the current quiz with
	// the database indices of the selected questions
	initIndexList(auxparam);
	
	if(0===IndexList.length)
	{
		window.open('UnderConstruction.html', '_self');
		return;
	}
	
	// remove unnecessary link numbers
	removeUnusedLinks();
		
	// delete all answers in the AList
	for(i=0; i<IndexList.length; i++)
	{
		AList[i] = "";
		colourQLink(i,bQcolour,"3px " + bQcolour + " solid");
	}
	
	// initialize Highslide (click to enlarge)
    hs.wrapperClassName = 'borderless';
	
	// set currqid and show question
	currqid = 0;
	
	// add selected questions in selected language to QList
	// and show first question
	retranslateQuestions();
	
}

//=================================================================
//=================================================================
function retranslateQuestions()
{
    var i; // for loop index
	
	// add selected questions to QList
	if(lang==="ro")
	{
		for(i=0; i<IndexList.length; i++)
		{
			QList[i] = dbQList[ IndexList[i]][0];
			CList[i] = dbAnswer[IndexList[i]][0];
			EList[i] = dbExpln[ IndexList[i]][0];
			RList[i] = dbRefer[ IndexList[i]][0];
			HList[i] = dbQHint[ IndexList[i]][0];
			IList[i] = dbQImage[IndexList[i]][0];
			JList[i] = dbAImage[IndexList[i]][0];
			IListSrc[i] = dbQImageSrc[IndexList[i]][0];
			JListSrc[i] = dbAImageSrc[IndexList[i]][0];
		}
		
		// retranslate radiobuttons
		setInnerHTML("spanradioyes","adev&#x103;rat");
		setInnerHTML("spanradiono" ,"fals");
		
		// set quiz title
		setInnerHTML("QuizTitle",QuizTitle[0]);
	}
	
	if(lang==="en")
	{
		for(i=0; i<IndexList.length; i++)
		{
			QList[i] = dbQList[ IndexList[i]][1];
			CList[i] = dbAnswer[IndexList[i]][1];
			EList[i] = dbExpln[ IndexList[i]][1];
			RList[i] = dbRefer[ IndexList[i]][1];
			HList[i] = dbQHint[ IndexList[i]][1];
			IList[i] = dbQImage[IndexList[i]][1];
			JList[i] = dbAImage[IndexList[i]][1];
			IListSrc[i] = dbQImageSrc[IndexList[i]][1];
			JListSrc[i] = dbAImageSrc[IndexList[i]][1];
		}
		
		// retranslate radiobuttons
		setInnerHTML("spanradioyes","true");
		setInnerHTML("spanradiono" ,"false");
		
		// set quiz title
		setInnerHTML("QuizTitle",QuizTitle[1]);
	}

	if(lang==="de")
	{
		for(i=0; i<IndexList.length; i++)
		{
			QList[i] = dbQList[ IndexList[i]][2];
			CList[i] = dbAnswer[IndexList[i]][2];
			EList[i] = dbExpln[ IndexList[i]][2];
			RList[i] = dbRefer[ IndexList[i]][2];
			HList[i] = dbQHint[ IndexList[i]][2];
			IList[i] = dbQImage[IndexList[i]][2];
			JList[i] = dbAImage[IndexList[i]][2];
			IListSrc[i] = dbQImageSrc[IndexList[i]][2];
			JListSrc[i] = dbAImageSrc[IndexList[i]][2];
		}
		
		// retranslate radiobuttons
		setInnerHTML("spanradioyes","wahr");
		setInnerHTML("spanradiono" ,"falsch");
		
		// set quiz title
		setInnerHTML("QuizTitle",QuizTitle[2]);
	}
	
	
	for(i=0; i<IndexList.length; i++)
	{	// set answer type for each question (free text, Y/N, numeric)
		AType[i] = dbAType[IndexList[i]];
	}
	
	// re-display question
	showQuestion(currqid);
}

//=================================================================
//=================================================================
function showQuestion(qid)
{	
	var container, ele, numericAns, i;
    
    saveCurrentQidAnswer();

	// Set the question
	container = document.getElementById("QuestionField");
	container.innerHTML = QList[qid];
	
	// Set the current answer
	container = document.getElementById("AnswerField");
	container.value = AList[qid];

	if(htmlResultsPhase)
	{
		// colour the current link back to the normal state
		if(truthValues[currqid]===1)
		{ colourQLink(currqid,rightAnswerColour,"3px " + rightAnswerColour + " solid"); }
		else
		{ colourQLink(currqid,wrongAnswerColour,"3px " + wrongAnswerColour + " solid");	}	
	
		// colour the selected link to the active state
		if(truthValues[qid]===1)
		{ colourQLink(qid,rightAnswerColour,"3px " + cQcolour + " solid"); }
		else
		{ colourQLink(qid,wrongAnswerColour,"3px " + cQcolour + " solid");	}
		
		// also colour the background of the answer field
		colourAnswerFieldBg(qid);	

		// add correct answer in plaintext
		setInnerHTML("CorrectAnswerField",CList[qid]);
		
		// add explanation
		setInnerHTML("ExplnField",EList[qid]);
		
		// add references
		setInnerHTML("ReferencesField",RList[qid]);

		hs.close(); // close the expanded image (if it is expanded)
		// add image and source
		setInnerHTML("ImageField","<a id=\"thumb\" href=\""+JList[qid]+"\" class=\"highslide\" onclick=\"return hs.expand(this)\"><img src=\""+JList[qid]+"\" alt=\""+JList[qid]+"\" width=\"200\" title=\"Click to enlarge\" /></a><div class=\"highslide-caption\">"+JListSrc[qid]+"</div>");
		
		//setInnerHTML("ImgSourceField",JListSrc[qid]);
		
		// clear radiobuttons and set visibility
		ele = document.getElementsByName("radioyesno");
		for(i=0;i<ele.length;i++)
		{
			ele[i].checked = false;
			ele[i].style.visibility = "hidden";
		}
	}
	else
	{
		// colour the current link back to the normal state
		if(""===AList[currqid])
		{ colourQLink(currqid,bQcolour,"3px " + bQcolour + " solid"); }
		else
		{ colourQLink(currqid,aQcolour,"3px " + aQcolour + " solid");	}
	
		// colour the selected link to the active state
		if(""===AList[qid])
		{ colourQLink(qid,bQcolour,"3px " + cQcolour + " solid"); }
		else
		{ colourQLink(qid,aQcolour,"3px " + cQcolour + " solid");	}

		hs.close(); // close the expanded image (if it is expanded)
		// add image and source		
		setInnerHTML("ImageField","<a id=\"thumb\" href=\""+IList[qid]+"\" class=\"highslide\" onclick=\"return hs.expand(this)\"><img src=\""+IList[qid]+"\" alt=\""+IList[qid]+"\" width=\"200\" title=\"\" /></a><div class=\"highslide-caption\">"+IListSrc[qid]+"</div>");
		
		// add nothing as answer in plaintext
		setInnerHTML("CorrectAnswerField","");
		
		// add hint in explanation field
		setInnerHTML("ExplnField",HList[qid]);
		
		// add nothing as references
		setInnerHTML("ReferencesField","");
		
		numericAns = "";
		if(2===AType[qid])
		{
			if(lang==="ro")	{ numericAns = "Raspuns numeric"; }
			if(lang==="en")	{ numericAns = "Numeric Answer"; }
			if(lang==="de")	{ numericAns = "Numerische Antwort"; }
		}
			// add correct answer in plaintext
			setInnerHTML("CorrectAnswerField",numericAns);
	  
		if(0===AType[qid])
		{
			document.getElementById("AnswerField").style.visibility = "hidden";
			// clear radiobuttons and set visibility
			ele = document.getElementsByName("radioyesno");
			for(i=0;i<ele.length;i++)
			{
				ele[i].checked = false;
				ele[i].style.visibility = "visible";
			}
			
			if(""===AList[qid])
			{
				// set the focus to the yes button
				document.getElementById("radioyes").focus();
			}
			else //re-select radio button as the user did previously
			{
				if(-1!==AList[qid].indexOf("f"))  //false was selected
				{
					document.getElementById("radiono").checked = true;
					document.getElementById("radiono").focus();
				}
				else //true was selected
				{
					document.getElementById("radioyes").checked = true;
					document.getElementById("radioyes").focus();
				}
			}
			
		}
		else
		{
			document.getElementById("AnswerField").style.visibility = "visible";
			// clear radiobuttons and set visibility
			ele = document.getElementsByName("radioyesno");
			for(i=0;i<ele.length;i++)
			{
				ele[i].checked = false;
				ele[i].style.visibility = "hidden";
			}
			
			// set the focus to the answer field
			document.getElementById("AnswerField").focus();
			
		}
        
    
        checkAndDisplayResultsButton();
	
	}

	// update variable currqid
	currqid = qid;

}

//=================================================================
//=================================================================
function saveCurrentQidAnswer()
{
    var container, tempAnswer;
    
	// get answer
	container = document.getElementById("AnswerField");
	tempAnswer = container.value;
	tempAnswer = cleanSpaces(tempAnswer);
	
	// save answer
	AList[currqid] = tempAnswer;
}

//=================================================================
//=================================================================
function proceedToNextUnanswered()
{
    var i, foundNextQ;
    
	saveCurrentQidAnswer();
		
	// search for the next unanswered question
	foundNextQ = 0;
	for(i=currqid; i<QList.length; i++)
	{ if(""===AList[i])
		{	foundNextQ = 1;
			showQuestion(i);
			break;
		}
	}
	// loop from the beginning
	if(0===foundNextQ)
	{	for(i=0; i<currqid; i++)
		{ if(""===AList[i])
			{	foundNextQ = 1;	
				showQuestion(i);
				break;
			}
		}
	}

	if(0===foundNextQ)
	{
		computeResults();//show answers
	}

}

//=================================================================
//=================================================================
function setAnswerFromRadiobutton(radiotext)
{
    var container;
    
	container = document.getElementById("AnswerField");
	container.value = document.getElementById(radiotext).innerHTML;
}

//=================================================================
//=================================================================
function computeResults()
{
    var container, i, scor=0;
    
	htmlResultsPhase = true;
    container = document.getElementById("disqus_thread");
	container.style.visibility = "visible";
	
	container = document.getElementById("AnswerField");
	container.setAttribute("readonly", true);	

	truthValues = computeScore();
	for(i=0; i<IndexList.length; i++)
	{
		// colour the current link back to the normal state
		if(truthValues[i]===1)
		{ colourQLink(i,rightAnswerColour,"3px " + rightAnswerColour + " solid"); scor++;}
		else
		{ colourQLink(i,wrongAnswerColour,"3px " + wrongAnswerColour + " solid");	}	
	}
    
    
    container = document.getElementById("aKeys");
	container.parentNode.removeChild(container);
    container = document.getElementById("divResultsMarchingAnts");
	container.style.visibility = "visible";
    container = document.getElementById("buttonResults");
    container.style.fontSize = "xx-large";
    container.innerHTML = scor.toString() + " / 10";
	
	// show first question (also resets the currqid to 0)
	showQuestion(0);
}