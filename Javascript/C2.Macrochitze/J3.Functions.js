/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
\*----------------------------------------------------------------------------------------*/

/*jslint es5: true */
/*jslint evil: true*/
/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam, TINY;
var MazeID, nextRoomID, currRoomID, prevRoomID;
var mazeIsInitialized, solutionReference, solutionTable, solvedRoomPictures;
var rightAnswerBgColour, wrongAnswerBgColour, currNUM, currANS, Mazelen;
var Maze00, Doors00, RoomHidingPicture00, RoomHidingPictureSource00, RoomPictures00, RoomPictureSources00, GamePuzzles00, GameInstructions00, DoorPuzzles00, DoorNumFormula00, DoorAnsFormula00;
var Maze01, Doors01, RoomHidingPicture01, RoomHidingPictureSource01, RoomPictures01, RoomPictureSources01, GamePuzzles01, GameInstructions01, DoorPuzzles01, DoorNumFormula01, DoorAnsFormula01;


// variables for the current game (overwritten when a new game is started);
var Maze, Doors, RoomHidingPicture, RoomHidingPictureSource, RoomPictures, RoomPictureSources, GamePuzzles, GameInstructions, DoorPuzzles, DoorNumFormula, DoorAnsFormula;

/*global setInnerHTML */
/*global setupMazeStructure */
/*global initSolutionReference */
/*global initSolvedRoomPictures */
/*global initSolutionTable */
/*global setupRoom */
/*global setMazeRules */
/*global setupGame */
/*global setupGameInstructions */
/*global setupDoorPictures */
/*global setupDoorPuzzles */
/*global showSolutionField */
/*global composeTableWithSortedRoomPictures */
/*global customizeDoorPuzzle */
/*global validateMaze */
/*global setNUMandANS */
/*global showTinyBoxGame */
/*global validateDoorAnswer */


function initMaze(mazeIDNum, prevRoom, currRoom, solutionTableValues, solvedRoomPicturesValues)
{
    
    setupMazeStructure(mazeIDNum);
    mazeIsInitialized = true;
    
    initSolutionReference();
    initSolutionTable(solutionTableValues);
    initSolvedRoomPictures(solvedRoomPicturesValues);
    setNUMandANS(0,0);
    setupRoom(currRoom,prevRoom);
}

function setupMazeStructure(mazeIDNum)
{
    switch(mazeIDNum)
    {
        case  1:
            MazeID = '1';
            Maze = Maze01;
            Mazelen = Maze.length;
            RoomHidingPicture = RoomHidingPicture01;
            RoomHidingPictureSource = RoomHidingPictureSource01;
            RoomPictures = RoomPictures01;
            RoomPictureSources = RoomPictureSources01;
            GamePuzzles = GamePuzzles01;
            GameInstructions = GameInstructions01;
            Doors = Doors01;
            DoorPuzzles = DoorPuzzles01;
            DoorNumFormula = DoorNumFormula01;
            DoorAnsFormula = DoorAnsFormula01;
            break;
        default:
            MazeID = '0';
            Maze = Maze00;
            Mazelen = Maze.length;
            RoomHidingPicture = RoomHidingPicture00;
            RoomHidingPictureSource = RoomHidingPictureSource00;
            RoomPictures = RoomPictures00;
            RoomPictureSources = RoomPictureSources00;
            GamePuzzles = GamePuzzles00;
            GameInstructions = GameInstructions00;
            Doors = Doors00;
            DoorPuzzles = DoorPuzzles00;
            DoorNumFormula = DoorNumFormula00;
            DoorAnsFormula = DoorAnsFormula00;
    }
}

function initSolutionReference()
{
    var i,j,k, sortedRoomPictures, RoomPicturesWithStatus = [], index = [];
    
    // append the status of the room picture at the end of the room picture's path so that it can be checked after sorting
    for(i = 0; i < Mazelen; i++)
    {
        RoomPicturesWithStatus[i] = RoomPictures[i] + "!" + i.toString();
    }
    RoomPicturesWithStatus[Mazelen] = RoomPictures[Mazelen];
    
    // sort room names
    sortedRoomPictures = RoomPicturesWithStatus.sort();
    
    for(k = 0; k < Mazelen; k++)
    {
        index[parseInt(sortedRoomPictures[k].substr(sortedRoomPictures[k].indexOf("!")+1),10)] = k;
    }
    
    solutionReference = [];
    for (i = 0; i < Mazelen*Mazelen; i++)
    {
        solutionReference[i] = 0;
    }
    
    for (i = 0; i < Mazelen; i++)
    {
        for (j = 0; j < 4; j++)
        {
            k = Maze[i][j];
            solutionReference[index[i]*Mazelen+index[k]] = 1;
        }
    }   
}

function initSolvedRoomPictures(values)
{
    var i;
    solvedRoomPictures = [];
    
    if(1===values.length)
    {
        for (i = 0; i < Mazelen; i++)
        {
            solvedRoomPictures[i] = values;
        }
    }
    else if(Mazelen === values.length)
    {
        for (i = 0; i < Mazelen; i++)
        {
            solvedRoomPictures[i] = values[i];
        }
    }
    else //wrong size of values
    {
        for (i = 0; i < Mazelen; i++)
        {
            solvedRoomPictures[i] = 0;
        }
    }
}

function initSolutionTable(values)
{
    var i;
    solutionTable = [];
    
    if(1===values.length)
    {
        for (i = 0; i < Mazelen*Mazelen; i++)
        {
            solutionTable[i] = values;
        }
    }
    else if(Mazelen*Mazelen === values.length)
    {
        for (i = 0; i < Mazelen*Mazelen; i++)
        {
            solutionTable[i] = values[i];
        }
    }
    else //wrong size of values
    {
        for (i = 0; i < Mazelen*Mazelen; i++)
        {
            solutionTable[i] = 0;
        }
    }
}

function setupRoom(curr,prev)
{
    //current state condition
    nextRoomID = -1;
    currRoomID = curr;
    prevRoomID = prev;
    
    setMazeRules();
    
    setupGame();
    setupGameInstructions();
    
    setupDoorPictures();
    setupDoorPuzzles();
    
}

function setMazeRules()
{
    
}

function setupGame()
{
    if(1===solvedRoomPictures[currRoomID])
    {
        var Img = RoomPictures[currRoomID], ImgSrc = RoomPictureSources[currRoomID];
        setInnerHTML("MacroStage","<a id=\"thumb\" href=\""+Img+"\" class=\"highslide\" onclick=\"return hs.expand(this)\"><img src=\""+Img+"\" alt=\""+Img+"\" width=\"200\" title=\"Click to enlarge\" /></a><div class=\"highslide-caption\">"+ImgSrc+"</div>"); 
    }
    else
    {
        setInnerHTML("MacroStage",GamePuzzles[currRoomID]);
    }
}

function setupGameInstructions()
{
    if(mazeIsInitialized)
    {
        if("ro"===lang) {setInnerHTML("MacroStageInstructions",GameInstructions[currRoomID][0]);}
        if("en"===lang) {setInnerHTML("MacroStageInstructions",GameInstructions[currRoomID][1]);}
        if("de"===lang) {setInnerHTML("MacroStageInstructions",GameInstructions[currRoomID][2]);}
    }
}

function setupDoorPictures()
{
    document.getElementById("imgDoorDown"  ).setAttribute("src", "Images/C2.Macrochitze/doorDown.png" );
    document.getElementById("imgDoorRight" ).setAttribute("src", "Images/C2.Macrochitze/doorRight.png");
    document.getElementById("imgDoorUp"    ).setAttribute("src", "Images/C2.Macrochitze/doorUp.png"   );
    document.getElementById("imgDoorLeft"  ).setAttribute("src", "Images/C2.Macrochitze/doorLeft.png" );
    
    //indicate door used for entering the room
    if( Maze[currRoomID][0] === prevRoomID ) { document.getElementById("imgDoorDown"  ).setAttribute("src", "Images/C2.Macrochitze/doorDownActive.png"  ); }
    if( Maze[currRoomID][1] === prevRoomID ) { document.getElementById("imgDoorRight" ).setAttribute("src", "Images/C2.Macrochitze/doorRightActive.png" ); }
    if( Maze[currRoomID][2] === prevRoomID ) { document.getElementById("imgDoorUp"    ).setAttribute("src", "Images/C2.Macrochitze/doorUpActive.png"    ); }
    if( Maze[currRoomID][3] === prevRoomID ) { document.getElementById("imgDoorLeft"  ).setAttribute("src", "Images/C2.Macrochitze/doorLeftActive.png"  ); }
     
}

function setupDoorPuzzles()
{
    document.getElementById("buttonDoorDown" ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][0]+");" );
    document.getElementById("buttonDoorRight").setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][1]+");" );
    document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][2]+");" );
    document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][3]+");" );
    
    //document.getElementById("buttonDoorDown" ).setAttribute("onclick", "setupRoom("+Maze[currRoomID][0]+","+currRoomID+")");
    //document.getElementById("buttonDoorRight").setAttribute("onclick", "setupRoom("+Maze[currRoomID][1]+","+currRoomID+")");
    //document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "setupRoom("+Maze[currRoomID][2]+","+currRoomID+")");
    //document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "setupRoom("+Maze[currRoomID][3]+","+currRoomID+")");
}

function customizeDoorPuzzle(currRoomID,nextRoomID)
{
    
    if(nextRoomID===prevRoomID)
    {   //Returning to the previous room is free of charge
        setupRoom(nextRoomID,currRoomID);
    }
    else
    {   // setup question
        
        setNUMandANS(currRoomID,nextRoomID);

        var customDoorTinyBoxContent='\
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
                            <input id = "AnswerField" type="text" size="10" style="text-align:center; font-size:16px;" onKeyPress="return processKeyEventDoor(event)"></input>\
                            <a id="buttonOK" href="JavaScript:validateDoorAnswer();">\
                                <img src="Images/C0.Common/Helpertools/TinyBox/BigAccept.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
            </body>\
            </html>\
        ';

        if("ro"===lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][0].replace("<NUM>",currNUM));}
        if("en"===lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][1].replace("<NUM>",currNUM));}
        if("de"===lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][2].replace("<NUM>",currNUM));}

        showTinyBoxGame(customDoorTinyBoxContent);
        
    }
}

function showSolutionField()
{
    var solutionFieldHTML = '\
        <html>\
            <head>\
                <meta content="text/html;charset=utf-8" http-equiv="Content-Type">\
                <meta content="utf-8" http-equiv="encoding">\
                <style>\
                .verticalText{\
                    -webkit-transform: rotate(-90deg);\
                    -moz-transform: rotate(-90deg);\
                };\
                </style>\
            </head>\
            <body>\
                <a id="buttonX" href="JavaScript:TINY.box.hide();">\
                    <img src="Images/C0.Common/Helpertools/TinyBox/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                </a>\
                <br/>\
                <br/>\
                [TABLE]\
            </body>\
        </html>';
    
    solutionFieldHTML = solutionFieldHTML.replace("[TABLE]", composeTableWithSortedRoomPictures() );

    showTinyBoxGame(solutionFieldHTML);
}

function composeTableWithSortedRoomPictures()
{
    var tableHTML, i,j,tempnum, RoomPicturesWithStatus = [], sortedRoomPictures;
    
    // append the status of the room picture at the end of the room picture's path so that it can be checked after sorting
    for(i = 0; i < Mazelen; i++)
    {
        RoomPicturesWithStatus[i] = RoomPictures[i] + solvedRoomPictures[i].toString();
    }
    
    // sort room names
    sortedRoomPictures = RoomPicturesWithStatus.sort();
    
    // create table
    
    tableHTML = "<table>";
    for(i = 0; i < Mazelen + 1; i++)
    {
        tableHTML += "<tr>";
        for(j = 0; j < Mazelen + 1; j++)
        {
            tableHTML += "<td>";
            if(i===0 && j===0)
            {
                tableHTML += '<a><img src="'+RoomHidingPicture+'" alt="---" width="32" height="32" border="0"/></a>';
            }
            else if(i===0 && j!==0)
            {
                if("1"===sortedRoomPictures[j-1].slice(-1)) // last char
                {
                    tableHTML += '<a><img src="'+sortedRoomPictures[j-1].substring(0, sortedRoomPictures[j-1].length - 1)+'" alt="---" width="32" height="32" border="0"/></a>';
                }
                else
                {
                    tableHTML += '<a><img src="'+RoomHidingPicture+'" alt="---" width="32" height="32" border="0"/></a>';
                }
            }
            else if(j===0 && i!==0)
            {
                if("1"===sortedRoomPictures[i-1].slice(-1)) // last char
                {
                    tableHTML += '<a><img src="'+sortedRoomPictures[i-1].substring(0, sortedRoomPictures[i-1].length - 1)+'" alt="---" width="32" height="32" border="0"/></a>';
                }
                else
                {
                    tableHTML += '<a><img src="'+RoomHidingPicture+'" alt="---" width="32" height="32" border="0"/></a>';
                }
            }
            else if(i===j)
            {
                tableHTML += '<a><img src="Images/C2.Macrochitze/solutionSelf.png" alt="---" width="32" height="32" border="0"/></a>';
            }
            else
            {
                tempnum = parseInt(i-1,10)*Mazelen+parseInt(j-1,10);
                if(0===solutionTable[tempnum])
                {
                    tableHTML += '<a id="td'+i.toString()+","+j.toString()+'" href="JavaScript:toggleIcon('+i.toString()+','+j.toString()+');">\
                                        <img src="Images/C2.Macrochitze/solutionWall.png" alt="Wall" width="32" height="32" border="0"/>\
                                    </a>';
                }
                else
                {
                    tableHTML += '<a id="td'+i.toString()+","+j.toString()+'" href="JavaScript:toggleIcon('+i.toString()+','+j.toString()+');">\
                                        <img src="Images/C2.Macrochitze/solutionDoor.png" alt="Door" width="32" height="32" border="0"/>\
                                    </a>';
                }
            }
            tableHTML += "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    
    tableHTML = tableHTML.replace("[tableHTML]",tableHTML);
    
    // return
    return tableHTML;
}

function toggleIcon(index1, index2)
{
    var tempnum;
        tempnum = parseInt(index1-1,10)*Mazelen+parseInt(index2-1,10);
    if(0===solutionTable[parseInt(tempnum,10)])
    {
        document.getElementById("td"+index1.toString()+","+index2.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionDoor.png" alt="Door" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 1;
        tempnum = parseInt(index2-1,10)*Mazelen+parseInt(index1-1,10);
        document.getElementById("td"+index2.toString()+","+index1.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionDoor.png" alt="Door" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 1;
    }
    else
    {
        document.getElementById("td"+index1.toString()+","+index2.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionWall.png" alt="Wall" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 0;
        tempnum = parseInt(index2-1,10)*Mazelen+parseInt(index1-1,10);
        document.getElementById("td"+index2.toString()+","+index1.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionWall.png" alt="Wall" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 0;
    }
    
    validateMaze();
}

function validateMaze()
{
    var i, isMazeSolved = true;
    for (i = 0; i < Mazelen*Mazelen; i++)
    {
        isMazeSolved = isMazeSolved && (solutionReference[i] === solutionTable[i]);
    }
    
    if(isMazeSolved)
    {
        showTinyBoxGame("CONGRATS!!");
    }
        
}

function updateSolvedRoomPictures()
{
    if(0===solvedRoomPictures[currRoomID])
    {
        solvedRoomPictures[currRoomID] = 1;
        setupGame();
    }
}

function setNUMandANS(currRoomIDtmp,nextRoomIDtmp)
{
    var numFormula, ansFormula;
    numFormula = DoorNumFormula[currRoomIDtmp][nextRoomIDtmp];
    if( 0 < numFormula.length )
    {
        nextRoomID = nextRoomIDtmp;
            
        currNUM = eval(numFormula);

        ansFormula = DoorAnsFormula[currRoomIDtmp][nextRoomIDtmp].replace("<NUM>",currNUM);
        currANS = eval(ansFormula);
    }
    else
    {
        currNUM = -1;
        currANS = -1;
        
        nextRoomID = -1;
    }
}

function processKeyEventDoor(evt)
{
    var cCode;
    
    if(!evt)      { evt = window.event;  }
    if(evt.which) { cCode = evt.which;   }
    else          { cCode = evt.keyCode; }
    
	if(cCode===13) // enter key pressed
	{
		validateDoorAnswer();
	}
}

function showTinyBoxGame(id)
{
    TINY.box.show(id, 0,0,0,1);
}

function validateDoorAnswer()
{
    // get answer
    var container, tempAnswer;
	container = document.getElementById("AnswerField");
	tempAnswer = container.value;
    if(parseInt(tempAnswer,10) === currANS)
    {
        container.setAttribute("style","text-align:center;background-color:"+rightAnswerBgColour);
        setTimeout(function(){TINY.box.hide();},500); //500ms
        setTimeout(function(){setupRoom(nextRoomID,currRoomID);},700); //700ms      
    }
    else
    {
        container.setAttribute("style","text-align:center;background-color:"+wrongAnswerBgColour);
        setTimeout(function(){TINY.box.hide();},500); //500ms
    }
}