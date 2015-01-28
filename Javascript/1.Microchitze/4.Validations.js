/*-----------------------------------------------------------------------------------------*\
| This file contains the functions related to the validation of answers given by the user   |
| The following functions are available:                                                    |
|		computeScore()................ computes and displays the score of the quiz          |
|		validateAnswer(i)............. checks user's answer to question i against criteria  |
\*-----------------------------------------------------------------------------------------*/

function computeScore()
{
	//var goods = 0;
	//var bads  = 0;
	var values = new Array();
	var currvalue = 0; // 0 = invalid; 1 = valid
	
	for(var i=0; i<IndexList.length; i++)
	{
		currvalue = validateAnswer(i);
		values[i] = currvalue;
		//if(0==currvalue)
		//	bads++;
		//else
		//	goods++;
	}
	
	//var score = 100 * goods/(goods + bads);
	//setInnerHTML("ScoreField","Scor: " + score.toFixed(2) + "%...");
	
	return values;
}

function validateAnswer(i)
{
	var value = 0;
	var userAnswer = cleanSpaces(AList[i]);
	var dbi = IndexList[i];
	
	if(23 == dbACrit[dbi][0])
	{	// special criterion, answer is a number between...
		value = checkCriterion23(userAnswer,dbAList[dbi][0],dbAList[dbi][1]);
	}
	else
	{
		for (var j=0; j<dbACrit[dbi].length; j++)
		{
			value += checkCriterion(userAnswer,dbACrit[dbi][j],dbAList[dbi][j])
		}
	}
	
	return value;
}

function checkCriterion(userAnswer,crit,goodAnswer)
{
	var retVal = 0;

	// Because criteria 10..14 are the same as 0..4 (except ignoring cases),
	// both the userAnswer and the goodAnswer are transformed in lower case 
	// and criteria 0..4 are applied.
	if( ( 10 <= crit ) && ( crit < 20 ) )
	{
		userAnswer = userAnswer.toLowerCase();
		goodAnswer = goodAnswer.toLowerCase();
		crit = crit - 10;
	}
	
	switch(crit)
	{
		case 0: // must match       (..text..)
			if(userAnswer==goodAnswer)
			{
				retVal = 1;
			}
			break;
		case 1: // must start with  (..text..)
			var len = goodAnswer.length;
			if(userAnswer.substring(0,len)==goodAnswer)
			{
				retVal = 1;
			}
			break;
		case 2: // must end   with  (..text..)
			var len = goodAnswer.length;
			if(userAnswer.substring(userAnswer.length-len,userAnswer.length)==goodAnswer)
			{
				retVal = 1;
			}
			break;
		case 3: // must contain     (..text..)
			if(-1!=userAnswer.indexOf(goodAnswer))
			{
				retVal = 1;
			}
			break;
		case 4: // must not contain (..text..)
			if(-1==userAnswer.indexOf(goodAnswer))
			{
				retVal = 1;
			}
			break;
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		case 20: // must be equal to       (..number..)
			if(userAnswer==goodAnswer)
			{
				retVal = 1;
			}
			break;
		case 21: // must be greater than   (..number..) 
			if(userAnswer>=goodAnswer)
			{
				retVal = 1;
			}
			break;
		case 22: // must be lower than     (..number..)  
			if(userAnswer<=goodAnswer)
			{
				retVal = 1;
			}
			break;
		case 24: // must be different from	(..number..) 
			if(userAnswer!=goodAnswer)
			{
				retVal = 1;
			}
			break;
		default:
			alert("checkCriterion: wrong criterion number ["+ crit +"]");
	}		
	
	return retVal;
}


function checkCriterion23(userAnswer,low,high)
{
	var retVal = 0;
	
	if( (low <= userAnswer) && (userAnswer <= high) )
	{
		retVal = 1;
	}
		
	return retVal;
}