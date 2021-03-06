/*----------------------------------------------------------------------------------------*\
| This file contains the SAVE, LOAD, and auxiliary functions called from the page.         |     
\*----------------------------------------------------------------------------------------*/

/*jslint es5: true */ /* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
/*jslint evil: true*/

var lang, TINY;
var NumberOfMazes, rightAnswerBgColour, wrongAnswerBgColour;
var MazeID, prevRoomID, currRoomID, solutionTable, solvedRoomPictures;
var tmpMazeID, tmpCurrRoom, tmpPrevRoom, tmpSolutionValues, tmpSolvedRoomPictures;

/*global computeExtendedHexa */
/*global decodeExtendedHexa */
/*global computeCustomRLE */
/*global showMazeState */
/*global encodeMazeState */
/*global showLoadDialog */
/*global decodeMazeState */
/*global showTinyBoxGame */
/*global loadMaze */
/*global initMaze */

/*global readoutEncodedStateIntoNumbers */
/*global computeMazeLength */
/*global buildtmpValues */

/////////////////////////////////////////////
/*
    MazeID   (hexa: 0-F extended with G,H,... if necessary; Z=35 ... |=71; .=71+ and continuing with same bit)
    PrevRoom (hexa: 0-F extended with G,H,... if necessary; Z=35 ... |=71; .=71+ and continuing with same bit)
    CurrRoom (hexa: 0-F extended with G,H,... if necessary; Z=35 ... |=71; .=71+ and continuing with same bit)
    solutionTableValues + solvedRoomPicturesValues; 
            Note: solutionTableValues always starts with 0
            (RLE on binary, using extended hexa convention)
    EXAMPLE:        
    encoded: 312.TA = Maze #3, currRoom 1, prevRoom 2, 71+ zeros, 29 zeros, 10 ones
     => raw: 3, 1, 2, 100 zeros, 10 ones
    
    
*/

function computeExtendedHexa(number)
{
    var retVal = 'computeExtendedHexa ERROR';
    
    if(number < 10)
    {
        retVal = number.toString();
    }
    else if(number < 72)
    {
        retVal = String.fromCharCode(65 + number - 10);
    }
    
    return retVal;
}

function decodeExtendedHexa(charu)
{
    var retVal = 0;
    if( (48 <= charu.charCodeAt(0)) && (charu.charCodeAt(0) <= 57) )
    {
        retVal = parseInt(charu,10);
    }
    else
    {
        retVal = charu.charCodeAt(0) - 65 + 10;
    }
    
    return retVal;
}

function computeCustomRLE(vector)
{
    var i, bit = 0, counter = 0, retVal = '';
    for(i=0;i<vector.length;i++)
    {
        if(vector[i] === bit)
        {
            counter++;
        }
        else
        {
            bit = 1-bit;
            retVal += computeExtendedHexa(counter);
            counter = 1;
        }
        
        if(counter === 72)
        {
            
            retVal += '.';
            counter = 1;
        }
    }
    
    if(counter > 0)
    {
        retVal += computeExtendedHexa(counter);
    }
    
    return retVal;
}

function showMazeState()
{
    var text, currentState, mazeSaveTinyBoxContent;
    
    currentState = encodeMazeState();
    mazeSaveTinyBoxContent='\
        <html>\
            <head>\
                <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\
                <meta content="utf-8" http-equiv="encoding">\
            </head>\
            <body style="text-align: center">\
                            <a id="buttonX" href="JavaScript:TINY.box.hide();">\
                                <img src="Images/C0.Common/Helpertools/TinyBox/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
                            <br/>\
                            <br/>\
                            [TEXT]\
                            <br/>\
                            <p style="background-color:yellow; text-align:center">[CODE]</p>\
            </body>\
            </html>\
        ';

    if("ro"===lang) {text = "Pentru a continua jocul mai t&#xE2;rziu, re&#x163;ine codul:";}
    if("en"===lang) {text = "To continue the game later, remember the code:";}
    if("de"===lang) {text = "Um sp&#228;ter weiterzuspielen, Code merken:";}

    mazeSaveTinyBoxContent = mazeSaveTinyBoxContent.replace("[TEXT]",text);
    mazeSaveTinyBoxContent = mazeSaveTinyBoxContent.replace("[CODE]",encodeMazeState());
    
    showTinyBoxGame(mazeSaveTinyBoxContent);
}

function encodeMazeState()
{
    var rawbits = solutionTable.concat(solvedRoomPictures);
    
    return MazeID + computeExtendedHexa(prevRoomID) + computeExtendedHexa(currRoomID) + computeCustomRLE(rawbits);   
    
}

function showLoadDialog()
{
    var text, mazeLoadTinyBoxContent='\
        <html>\
            <head>\
                <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\
                <meta content="utf-8" http-equiv="encoding">\
            </head>\
            <body style="text-align: center">\
                            <a id="buttonX" href="JavaScript:TINY.box.hide();">\
                                <img src="Images/C0.Common/Helpertools/TinyBox/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
                            <br/>\
                            <br/>\
                            [QUESTION]\
                            <br/>\
                            <input id = "LoadField" type="text" size="25" style="text-align:center; font-size:16px;" onKeyPress="processKeyEventLoad(event)"></input>\
                            <a id="buttonOK" href="JavaScript:loadMaze();">\
                                <img src="Images/C0.Common/Helpertools/TinyBox/BigAccept.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
            </body>\
            </html>\
        ';

        if("ro"===lang) {text = "Introdu codul:";}
        if("en"===lang) {text = "Enter code:";}
        if("de"===lang) {text = "Code eingeben:";}
    
        mazeLoadTinyBoxContent = mazeLoadTinyBoxContent.replace("[QUESTION]",text);

        showTinyBoxGame(mazeLoadTinyBoxContent);
}

function processKeyEventLoad(evt)
{
    var cCode;
    
    if(!evt)      { evt = window.event;  }
    if(evt.which) { cCode = evt.which;   }
    else          { cCode = evt.keyCode; }
    
	if(cCode===13) // enter key pressed
	{
		loadMaze();
	}
}

function loadMaze()
{
    var container, encodedMazeState, success;
    
    container = document.getElementById("LoadField");
    encodedMazeState = container.value;
    
    success = decodeMazeState(encodedMazeState);
    if(success)
    {
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+rightAnswerBgColour);
        setTimeout(function(){TINY.box.hide();},200); //200ms
        initMaze(tmpMazeID, tmpCurrRoom, tmpPrevRoom, tmpSolutionValues, tmpSolvedRoomPictures);
    }
    else
    {
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+wrongAnswerBgColour);
    }
}

function decodeMazeState(encodedMazeState)
{   // unpack state and init maze
    
    tmpMazeID   = decodeExtendedHexa(encodedMazeState[0]);
    tmpCurrRoom = decodeExtendedHexa(encodedMazeState[1]);
    tmpPrevRoom = decodeExtendedHexa(encodedMazeState[2]);
    
    var intMatrix, computedMazeLength, desiredMazeLength;
    
    if(tmpMazeID <= NumberOfMazes)
    {
        intMatrix = readoutEncodedStateIntoNumbers(encodedMazeState);
        computedMazeLength = computeMazeLength(intMatrix);
        if(computedMazeLength === eval("Maze"+encodedMazeState[0]+".length"))
        {
            buildtmpValues(intMatrix, computedMazeLength);
            return true;
        }
        else
        {

            return false;
        }
    }
}

function readoutEncodedStateIntoNumbers(encodedMazeState)
{
    var intMatrix = [], decCounter = 0, encCounter = 3;
    intMatrix[0] = 0;
    while(encCounter < encodedMazeState.length)
    {
        if("." === encodedMazeState[encCounter])
        {
            intMatrix[decCounter] += 71;
        }
        else
        {
            intMatrix[decCounter] += decodeExtendedHexa(encodedMazeState[encCounter]);
            decCounter += 1;
            intMatrix[decCounter] = 0;
        }
        
        encCounter += 1;
    }
    
    return intMatrix;
}

function computeMazeLength(intMatrix)
{
    // n*n bits for the solution table + n bits for the solved rooms
    // n*n + n = k => delta = sqrt(1 + 4k) => n = (-1 + delta)/2
    var k, delta, n = 0;
    
    k = eval(intMatrix.join('+'));
    delta = Math.sqrt( 1 + 4 * k);
    n = ( delta - 1)/2;
    
    return n;
}

function buildtmpValues(intMatrix, n)
{
    var i,j, bit = 0, counterBits=0, tmpBits = [];
    
    for(i=0; i<intMatrix.length; i++)
    {
        for(j=0; j<intMatrix[i];j++)
        {
            tmpBits[counterBits] = bit;
            counterBits ++;
            
            if(counterBits === n*n)
            {
                tmpSolutionValues = tmpBits;
                tmpBits = [];
                counterBits = 0;
            }
        }
        bit = 1 - bit;
    }
    
    tmpSolvedRoomPictures = tmpBits;
}