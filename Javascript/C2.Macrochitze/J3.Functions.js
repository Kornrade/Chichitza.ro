/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
\*----------------------------------------------------------------------------------------*/

/*jslint es5: true */
/*jslint evil: true*/
/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam, TINY;
var nextRoomNameID, currRoomNameID, prevRoomNameID, solutionTable;
var rightAnswerBgColour, wrongAnswerBgColour, currNUM, currANS, Mazelen;
var Maze00, Doors00, RoomNames00, RoomPictures00, RoomPictureSources00, GamePuzzles00, DoorPuzzles00, DoorNumFormula00, DoorAnsFormula00;
var Maze01, Doors01, RoomNames01, RoomPictures01, RoomPictureSources01, GamePuzzles01, DoorPuzzles01, DoorNumFormula01, DoorAnsFormula01;


// variables for the current game (overwritten when a new game is started);
var Maze, Doors, RoomNames, RoomPictures, RoomPictureSources, GamePuzzles, DoorPuzzles, DoorNumFormula, DoorAnsFormula;

/*global setInnerHTML */
/*global setupMazeStructure */
/*global initSolutionTable */
/*global setupRoom */
/*global setRoomName */
/*global setRoomPicture */
/*global setupGame */
/*global setupGameInstructions */
/*global setupDoorPictures */
/*global setupDoorPuzzles */
/*global showDoorPuzzle */
/*global showSolutionField */
/*global composeTableWithSortedRoomNames */
/*global customizeDoorPuzzle */
/*global setNUMandANS */
/*global validateAnswer */

function initMaze()
{
    
    setupMazeStructure();
    
    initSolutionTable(Mazelen + 1);
    setNUMandANS(0,0);
    setupRoom(0,0);
}

function setupMazeStructure()
{
    switch(auxparam)
    {
        case  1:
            Maze = Maze01;
            Mazelen = Maze.length;
            RoomNames = RoomNames01;
            RoomPictures = RoomPictures01;
            RoomPictureSources = RoomPictureSources01;
            GamePuzzles = GamePuzzles01;
            Doors = Doors01;
            DoorPuzzles = DoorPuzzles01;
            DoorNumFormula = DoorNumFormula01;
            DoorAnsFormula = DoorAnsFormula01;
            break;
        default:
            Maze = Maze00;
            Mazelen = Maze.length;
            RoomNames = RoomNames00;
            RoomPictures = RoomPictures00;
            RoomPictureSources = RoomPictureSources00;
            GamePuzzles = GamePuzzles00;
            Doors = Doors00;
            DoorPuzzles = DoorPuzzles00;
            DoorNumFormula = DoorNumFormula00;
            DoorAnsFormula = DoorAnsFormula00;
    }
}

function initSolutionTable(dimensions)
{
    var i;
    solutionTable = [];
    for (i = 0; i < dimensions*dimensions; i++)
    {
        solutionTable[i] = 0;
    }
}

function setupRoom(curr,prev)
{
    //current state condition
    nextRoomNameID = -1;
    currRoomNameID = curr;
    prevRoomNameID = prev;
    
    setRoomName();
    setRoomPicture();
    
    setupGame();
    setupGameInstructions();
    
    setupDoorPictures();
    setupDoorPuzzles();
    
}

function setRoomName()
{
    setInnerHTML("RoomName", RoomNames[currRoomNameID]);
    document.getElementById("RoomName").setAttribute("onclick", "setupDoors("+currRoomNameID+",-1);" );
}


function setRoomPicture()
{
    var Img = RoomPictures[currRoomNameID], ImgSrc = RoomPictureSources[currRoomNameID];
    setInnerHTML("RoomPicture","<a id=\"thumb\" href=\""+Img+"\" class=\"highslide\" onclick=\"return hs.expand(this)\"><img src=\""+Img+"\" alt=\""+Img+"\" width=\"100\" title=\"Click to enlarge\" /></a><div class=\"highslide-caption\">"+ImgSrc+"</div>");   
}

function setupGame()
{

}

function setupGameInstructions()
{

}

function setupDoorPictures()
{
    document.getElementById("imgDoorDown"  ).setAttribute("src", "Images/C2.Macrochitze/doorDown.png" );
    document.getElementById("imgDoorRight" ).setAttribute("src", "Images/C2.Macrochitze/doorRight.png");
    document.getElementById("imgDoorUp"    ).setAttribute("src", "Images/C2.Macrochitze/doorUp.png"   );
    document.getElementById("imgDoorLeft"  ).setAttribute("src", "Images/C2.Macrochitze/doorLeft.png" );
    
    //indicate door used for entering the room
    if( Maze[currRoomNameID][0] === prevRoomNameID ) { document.getElementById("imgDoorDown"  ).setAttribute("src", "Images/C2.Macrochitze/doorDownActive.png"  ); }
    if( Maze[currRoomNameID][1] === prevRoomNameID ) { document.getElementById("imgDoorRight" ).setAttribute("src", "Images/C2.Macrochitze/doorRightActive.png" ); }
    if( Maze[currRoomNameID][2] === prevRoomNameID ) { document.getElementById("imgDoorUp"    ).setAttribute("src", "Images/C2.Macrochitze/doorUpActive.png"    ); }
    if( Maze[currRoomNameID][3] === prevRoomNameID ) { document.getElementById("imgDoorLeft"  ).setAttribute("src", "Images/C2.Macrochitze/doorLeftActive.png"  ); }
     
}

function setupDoorPuzzles()
{
    document.getElementById("buttonDoorDown" ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomNameID+","+Maze[currRoomNameID][0]+");" );
    document.getElementById("buttonDoorRight").setAttribute("onclick", "customizeDoorPuzzle("+currRoomNameID+","+Maze[currRoomNameID][1]+");" );
    document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomNameID+","+Maze[currRoomNameID][2]+");" );
    document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomNameID+","+Maze[currRoomNameID][3]+");" );
    
    //document.getElementById("buttonDoorDown" ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][0]+","+currRoomNameID+")");
    //document.getElementById("buttonDoorRight").setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][1]+","+currRoomNameID+")");
    //document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][2]+","+currRoomNameID+")");
    //document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][3]+","+currRoomNameID+")");
}

function customizeDoorPuzzle(currRoomID,nextRoomID)
{
    
    if(nextRoomID===prevRoomNameID)
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
            <body>\
                            <a id="buttonX" href="JavaScript:TINY.box.hide();">\
                                <img src="Images/C0.Common/Helpertools/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
                            <br/>\
                            <br/>\
                            [QUESTION]\
                            <br/>\
                            <input id = "AnswerField" type="text" size="5" style="text-align:center; font-size:16px;" onKeyPress="return processKeyEvent(event)"></input>\
                            <a id="buttonOK" href="JavaScript:validateAnswer();">\
                                <img src="Images/C0.Common/Helpertools/BigAccept.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
            </body>\
            </html>\
        ';

        if("ro"===lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][0].replace("<NUM>",currNUM));}
        if("en"===lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][1].replace("<NUM>",currNUM));}
        if("de"===lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][2].replace("<NUM>",currNUM));}

        showDoorPuzzle(customDoorTinyBoxContent);
        
    }
}

function showDoorPuzzle(id)
{
    TINY.box.show(id, 0,0,0,1);
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
                    <img src="Images/C0.Common/Helpertools/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                </a>\
                <a id="buttonOK" href="JavaScript:validateSolution();">\
                    <img src="Images/C0.Common/Helpertools/BigAccept.png" alt="X" width="24" height="24" border="0" align="right" />\
                </a>\
                <br/>\
                <br/>\
                [TABLE]\
            </body>\
        </html>';
    
    solutionFieldHTML = solutionFieldHTML.replace("[TABLE]", composeTableWithSortedRoomNames() );

    TINY.box.show(solutionFieldHTML, 0,0,0,1);
}

function composeTableWithSortedRoomNames()
{
    var tableHTML, i,j, tempnum,tempstr, rowsandcols, sortedRoomNames;
    
    // create table
    
    tableHTML = '<table>\
                <tr>\
                    <td>\
                    </td>\
                    <th>\
                        [HEADER_ROW]\
                    </th>\
                </tr>\
                <tr>\
                    <th>\
                        [HEADER_COL]\
                    </th>\
                    <td>\
                        [ROWSandCOLS]\
                    </td>\
                </tr>\
                </table>';
    
    rowsandcols = "<table>";
    for(i = 0; i < Mazelen + 1; i++) //+1 to add room for fake room
    {
        rowsandcols += "<tr>";
        for(j = 0; j < Mazelen + 1; j++) //+2 to add room for fake room
        {
            if(i===j)
            {
                rowsandcols += "<td>";
                rowsandcols += '<a id="buttonX" href="JavaScript:void();">\
                                    <img src="Images/C2.Macrochitze/solutionSelf.png" alt="---" width="24" height="24" border="0"/>\
                                </a>';
                rowsandcols += "</td>";
            }
            else
            {
                tempnum = i*(Mazelen + 1) + j;
                tempstr = tempnum.toString();
                rowsandcols += "<td>";
                if(0===solutionTable[tempnum])
                {
                    rowsandcols += '<a id="td'+tempstr+'" href="JavaScript:toggleIcon('+i.toString()+','+j.toString()+');">\
                                        <img src="Images/C2.Macrochitze/solutionWall.png" alt="Wall" width="24" height="24" border="0"/>\
                                    </a>';
                }
                else
                {
                    rowsandcols += '<a id="td'+tempstr+'" href="JavaScript:toggleIcon('+i.toString()+','+j.toString()+');">\
                                        <img src="Images/C2.Macrochitze/solutionDoor.png" alt="Door" width="24" height="24" border="0"/>\
                                    </a>';
                }
                rowsandcols += "</td>";
            }
        }
        rowsandcols += "</tr>";
    }
    rowsandcols += "</table>";
    
    tableHTML = tableHTML.replace("[ROWSandCOLS]",rowsandcols);
    
    // sort room names
    sortedRoomNames = RoomNames.sort();
    
    // fill room names
    rowsandcols = "<table>";
    rowsandcols += "<tr>";
    for(i = 0; i < Mazelen + 1; i++) //+1 to add room for fake room
    {
        rowsandcols += "<td>";
        rowsandcols += "<div class='verticalText'>";
        rowsandcols += sortedRoomNames[i];
        rowsandcols += "</div>";
        rowsandcols += "</td>";
    }
    rowsandcols += "</tr>";
    rowsandcols += "</table>";
    
    tableHTML = tableHTML.replace("[HEADER_ROW]",rowsandcols);
    
    rowsandcols = "<table>";
    for(i = 0; i < Mazelen + 1; i++) //+1 to add room for fake room
    {
        rowsandcols += "<tr>";
        rowsandcols += "<td height='26' align='right'>";
        rowsandcols += sortedRoomNames[i];
        rowsandcols += "</td>";
        rowsandcols += "</tr>";
    }
    rowsandcols += "</table>";
    
    tableHTML = tableHTML.replace("[HEADER_COL]",rowsandcols);
    
    // fill the rest of the table
    
    // return
    return tableHTML;
}

function toggleIcon(index1, index2)
{
    var tempnum = parseInt(index1,10)*(Mazelen+1)+parseInt(index2,10);
    if(0===solutionTable[parseInt(tempnum,10)])
    {
        document.getElementById("td"+tempnum.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionDoor.png" alt="Door" width="24" height="24" border="0"/>';
        solutionTable[tempnum] = 1;
        tempnum = parseInt(index2,10)*(Mazelen+1)+parseInt(index1,10);
        document.getElementById("td"+tempnum.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionDoor.png" alt="Door" width="24" height="24" border="0"/>';
        solutionTable[tempnum] = 1;
    }
    else
    {
        document.getElementById("td"+tempnum.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionWall.png" alt="Wall" width="24" height="24" border="0"/>';
        solutionTable[tempnum] = 0;
        tempnum = parseInt(index2,10)*(Mazelen+1)+parseInt(index1,10);
        document.getElementById("td"+tempnum.toString()).innerHTML = '<img src="Images/C2.Macrochitze/solutionWall.png" alt="Wall" width="24" height="24" border="0"/>';
        solutionTable[tempnum] = 0;
    }
}

function setNUMandANS(currRoomID,nextRoomID)
{
    var numFormula, ansFormula;
    numFormula = DoorNumFormula[currRoomID][nextRoomID];
    if( 0 < numFormula.length )
    {
        nextRoomNameID = nextRoomID;
            
        currNUM = eval(numFormula);

        ansFormula = DoorAnsFormula[currRoomID][nextRoomID].replace("<NUM>",currNUM);
        currANS = eval(ansFormula);
    }
    else
    {
        currNUM = -1;
        currANS = -1;
        
        nextRoomID = -1;
    }
}

function processKeyEvent(evt)
{
    var cCode;
    
    if(!evt)      { evt = window.event;  }
    if(evt.which) { cCode = evt.which;   }
    else          { cCode = evt.keyCode; }
    
	if(cCode===13) // enter key pressed
	{
		validateAnswer();
	}
}

function validateAnswer()
{
    // get answer
    var container, tempAnswer;
	container = document.getElementById("AnswerField");
	tempAnswer = container.value;
    if(parseInt(tempAnswer,10) === currANS)
    {
        container.setAttribute("style","text-align:center;background-color:"+rightAnswerBgColour);
        setTimeout(function(){TINY.box.hide();},500); //500ms
        setTimeout(function(){setupRoom(nextRoomNameID,currRoomNameID);},700); //700ms      
    }
    else
    {
        container.setAttribute("style","text-align:center;background-color:"+wrongAnswerBgColour);
        setTimeout(function(){TINY.box.hide();},500); //500ms
    }
}