/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
| The following functions are available:                                                   |
|   initGame()................... initializes the static and dynamic variables of the page |
\*----------------------------------------------------------------------------------------*/

/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam;
var nextRoomNameID, currRoomNameID, prevRoomNameID;
var currNUM, currANS;
var Maze00, Doors00, RoomNames00, RoomPictures00, RoomPictureSources00, BonusPuzzles00, GamePuzzles00, DoorPuzzles00, DoorNumFormula00, DoorAnsFormula00;
var Maze01, Doors01, RoomNames01, RoomPictures01, RoomPictureSources01, BonusPuzzles01, GamePuzzles01, DoorPuzzles01, DoorNumFormula01, DoorAnsFormula01;


// variables for the current game (overwritten when a new game is started);
var Maze, Doors, RoomNames, RoomPictures, RoomPictureSources, BonusPuzzles, GamePuzzles, DoorNumFormula, DoorAnsFormula;

/*global setInnerHTML */
/*global setupMazeStructure */
/*global setupRoom */
/*global setRoomName */
/*global setRoomPicture */
/*global setupBonusPuzzle */
/*global setupGame */
/*global setupGameInstructions */
/*global setupDoorPictures */
/*global setupDoorPuzzles */
/*global showDoorPuzzle */
/*global customizeDoorPuzzle */

function initMaze()
{
    
    setupMazeStructure();
    
    setNUMandANS(0,0);
    setupRoom(0,0);
}

function setupMazeStructure()
{
    switch(auxparam)
    {
        case  1:
            Maze = Maze01;
            RoomNames = RoomNames01;
            RoomPictures = RoomPictures01;
            RoomPictureSources = RoomPictureSources01;
            BonusPuzzles = BonusPuzzles01;
            GamePuzzles = GamePuzzles01;
            Doors = Doors01;
            DoorPuzzles = DoorPuzzles01;
            DoorNumFormula = DoorNumFormula01;
            DoorAnsFormula = DoorAnsFormula01;
            break;
        default:
            Maze = Maze00;
            RoomNames = RoomNames00;
            RoomPictures = RoomPictures00;
            RoomPictureSources = RoomPictureSources00;
            BonusPuzzles = BonusPuzzles00;
            GamePuzzles = GamePuzzles00;
            Doors = Doors00;
            DoorPuzzles = DoorPuzzles00;
            DoorNumFormula = DoorNumFormula00;
            DoorAnsFormula = DoorAnsFormula00;
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
    setupBonusPuzzle();
    
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

function setupBonusPuzzle()
{
    document.getElementById("bonusPuzzle").href   = "Javascript:TINY.box.show('TestTest', 0,0,0,1);";
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
                            <a id="buttonX" 	 href="JavaScript:TINY.box.hide();">\
                                <img src="Images/C0.Common/Helpertools/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
                            <br/>\
                            <br/>\
                            [QUESTION]\
                            <br/>\
                            <input id = "AnswerField" type="text" size="5" style="text-align:center; font-size:16px;" onKeyPress="return processKeyEvent(event)"></input>\
                            <a id="buttonX" 	 href="JavaScript:validateAnswer();">\
                                <img src="Images/C0.Common/Helpertools/BigAccept.png" alt="X" width="24" height="24" border="0" align="right" />\
                            </a>\
            </body>\
            </html>\
        ';

        if("ro"==lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][0].replace("<NUM>",currNUM));}
        if("en"==lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][1].replace("<NUM>",currNUM));}
        if("de"==lang) {customDoorTinyBoxContent = customDoorTinyBoxContent.replace("[QUESTION]",DoorPuzzles[currRoomID][nextRoomID][2].replace("<NUM>",currNUM));}

        showDoorPuzzle(customDoorTinyBoxContent);
        
    }
}

function showDoorPuzzle(id)
{
    TINY.box.show(id, 0,0,0,1);
}

function setNUMandANS(currRoomID,nextRoomID)
{
    var numFormula = DoorNumFormula[currRoomID][nextRoomID];
    if( 0 < numFormula.length )
    {
        nextRoomNameID = nextRoomID;
            
        currNUM = eval(numFormula);

        var ansFormula = DoorAnsFormula[currRoomID][nextRoomID].replace("<NUM>",currNUM);
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
	var container = document.getElementById("AnswerField");
	var tempAnswer = container.value;
    if(parseInt(tempAnswer) === currANS)
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