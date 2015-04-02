/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
| The following functions are available:                                                   |
|   initGame()................... initializes the static and dynamic variables of the page |
\*----------------------------------------------------------------------------------------*/

/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam;
var Maze00;
var RoomNames00;

// variables for the current game (overwritten when a new game is started);
var Maze = []; //current game

/*global setInnerHTML */

function initMaze()
{
    
    setupMazeStructure();
    
    //init condition
    setupRoom(0,0);
}

function setupMazeStructure()
{
    switch(auxparam)
    {
        case  1:
            Maze = Maze01;
            RoomNames = RoomNames01;
            break;
        default:
            Maze = Maze00;
            RoomNames = RoomNames00;
    }
}

function setupRoom(currRoomNameID,prevRoomNameID)
{
    setupDoors(currRoomNameID,prevRoomNameID);
    
    setRoomName(currRoomNameID);
    setRoomPicture(currRoomNameID);
    
}

function setupDoors(currRoomNameID,prevRoomNameID)
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
     
    
    document.getElementById("buttonDoorDown" ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][0]+","+currRoomNameID+")");
    document.getElementById("buttonDoorRight").setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][1]+","+currRoomNameID+")");
    document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][2]+","+currRoomNameID+")");
    document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][3]+","+currRoomNameID+")");
}

function setRoomName(currRoomNameID)
{
    setInnerHTML("RoomName", RoomNames[currRoomNameID]);
    document.getElementById("RoomName").setAttribute("onclick", "setupDoors("+currRoomNameID+",-1);" );
}


function setRoomPicture(currRoomNameID)
{
    var JList = "Images/C1.Microchitze/Img_Blank.png";
    var JListSrc = "Blabla";
    setInnerHTML("RoomPicture","<a id=\"thumb\" href=\""+JList+"\" class=\"highslide\" onclick=\"return hs.expand(this)\"><img src=\""+JList+"\" alt=\""+JList+"\" width=\"100\" title=\"Click to enlarge\" /></a><div class=\"highslide-caption\">"+JListSrc+"</div>");
    
}