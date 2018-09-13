/*----------------------------------------------------------------------------------------*\
| This file contains the display of the list of teasers and auxiliary functions.          |     
\*----------------------------------------------------------------------------------------*/

/*jslint es5: true */ /* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
/*jslint evil: true*/

var lang, Mazelen, solutionReference, isMazeSolved, rightAnswerBgColour, wrongAnswerBgColour;
var DoorPuzzles, DoorNum1Formula, DoorNum2Formula, DoorNum3Formula, DoorAnsFormula;
var numbersForListOfTeasers = [];

/*global displayListOfTeasers */
/*global composeTeasersTable */
/*global showTinyBoxGame */
/*global validateListAnswer */
/*global validateEntireList */
/*global goDirectlyToFinalQuestion */
/*global autosolveMap */
/*global initSolvedRoomPictures */
/*global initSolutionTable */
/*global setupJigsawPuzzle */
/*global showFinalQuestion */

function displayListOfTeasers()
{
    var forDisplay, langIndex, headertext, teaserTableContents;
    
    // get language index
    if("ro"===lang) {langIndex = 0; headertext = "Mai jos este lista cu toate chichitzele de la usi.<br/> Cine le rezolva pe toate corect, trece direct la intrebarea finala a labirintului.";}
    if("en"===lang) {langIndex = 1; headertext = "Below is the list of all door teasers.<br/> Whoever solves them all, goes directly to the final question of the maze.";}
    if("de"===lang) {langIndex = 2; headertext = "Hier ist die Liste aller Tür-Knobeleien.<br/> Wer sie alle richtig löst, geht direkt zur letzten Frage des Labyrinths.";}
    
    teaserTableContents = composeTeasersTable(langIndex);
    
    forDisplay = '\
                    <html>\
                        <head>\
                            </style>\
                        </head>\
                        <body>\
                            <a id="buttonX" href="JavaScript:TINY.box.hide();">\
                                <img src="Images/C0.Common/Helpertools/TinyBox/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
                            <br/>\
                            [HEADERTEXT]\
                            <br/><br/>\
                            <div style="height:250px; overflow-y: scroll;">\
                            [TEASERTABLE]\
                            </div>\
                        </body>\
                    </html>';
    
    forDisplay = forDisplay.replace("[HEADERTEXT]", headertext );
    forDisplay = forDisplay.replace("[TEASERTABLE]", teaserTableContents );
    showTinyBoxGame(forDisplay); 
}

function composeTeasersTable(langIndex)
{
    var i,j, counter, currNUM1, currNUM2, currNUM3, tableHTML = '';
    
    counter = 0;
    tableHTML += '<table style="width:100%;">';
    
    for(i = 0; i < Mazelen; i++)
    {
        for(j = 0; j < Mazelen; j++)
        {
            if(typeof DoorPuzzles[i][j] !== "undefined")
            {
                counter++;
                currNUM1 = eval(DoorNum1Formula[i][j]);
                currNUM2 = eval(DoorNum2Formula[i][j]);
                currNUM3 = eval(DoorNum3Formula[i][j]);
                numbersForListOfTeasers[counter] = [];
                numbersForListOfTeasers[counter][0] = eval(DoorAnsFormula[i][j].replace("<NUM1>",currNUM1).replace("<NUM2>",currNUM2).replace("<NUM3>",currNUM3));
                numbersForListOfTeasers[counter][1] = currNUM1;
                numbersForListOfTeasers[counter][2] = currNUM2;
                numbersForListOfTeasers[counter][3] = currNUM3;
                
                if(counter%2) {tableHTML += "<tr bgcolor=#CCCCCC>";}
                else          {tableHTML += "<tr bgcolor=#EEEEEE>";}

                tableHTML += "<td>";
                tableHTML += counter.toString();
                tableHTML += "</td>";
                
                tableHTML += "<td>";
                tableHTML += DoorPuzzles[i][j][langIndex].replace("<NUM1>",currNUM1).replace("<NUM2>",currNUM2).replace("<NUM3>",currNUM3);
                tableHTML += "</td>";

                tableHTML += "<td>";
                tableHTML += '<input id = "AnswerField'+counter.toString()+'" type="text" size="15" style="text-align:center; font-size:16px;" onKeyPress="return processKeyEventList(event)"></input>';
                tableHTML += "</td>";

                tableHTML += "<td>";
                tableHTML += '<a href="JavaScript:validateListAnswer('+counter.toString()+');">\
                                <img src="Images/C0.Common/Helpertools/TinyBox/BigAccept.png" alt="X" width="24" height="24" border="0" align="right" />\
                             </a>';
                tableHTML += "</tr>";
            }
        }
    }
    
    tableHTML += '</table>';
    
    return tableHTML;
}


function processKeyEventList(evt)
{
    var cCode, k;
    
    if(!evt)      { evt = window.event;  }
    if(evt.which) { cCode = evt.which;   }
    else          { cCode = evt.keyCode; }
    
	if(cCode===13) // enter key pressed
	{
        k = evt.currentTarget.id.substring(11);
		validateListAnswer(k);
	}
    else
    {
        //numeric answers only
        if (cCode < 48 || cCode > 57) 
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}

function validateListAnswer(k)
{
    // get answer
    var container, tempAnswer;
	container = document.getElementById('AnswerField'+k.toString());
	tempAnswer = container.value;
    if(parseInt(tempAnswer,10) === numbersForListOfTeasers[k][0])
    {
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+rightAnswerBgColour);
        validateEntireList();
    }
    else
    {
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+wrongAnswerBgColour);
    }
}


function validateEntireList()
{
    var k, container, tempAnswer, unbroken = true;
    
    for(k=1;k<=2/*Mazelen*/;k++)
    {
        container = document.getElementById('AnswerField'+k.toString());
	    tempAnswer = container.value;
        
        if(parseInt(tempAnswer,10) !== numbersForListOfTeasers[k][0]) 
        {
            unbroken = false; 
            break;
        }
    }
    
    if(unbroken)
    {
        autosolveMap();
        goDirectlyToFinalQuestion();
    }
}

function autosolveMap()
{
    var solutionPictures = [1];
    isMazeSolved = true;
    initSolvedRoomPictures(solutionPictures);
    initSolutionTable(solutionReference);
    setupJigsawPuzzle();
    
}

function goDirectlyToFinalQuestion()
{
    showFinalQuestion();
}