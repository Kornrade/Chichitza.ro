/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
| The following functions are available:                                                   |
|   initGame()................... initializes the static and dynamic variables of the page |
\*----------------------------------------------------------------------------------------*/

/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam;
var currRoomNameID, prevRoomNameID;
var Maze00, Doors00, RoomNames00, RoomPictures00, RoomPictureSources00, BonusPuzzles00, GamePuzzles00;
var Maze01, Doors01, RoomNames01, RoomPictures01, RoomPictureSources01, BonusPuzzles01, GamePuzzles01;


// variables for the current game (overwritten when a new game is started);
var Maze, Doors, RoomNames, RoomPictures, RoomPictureSources, BonusPuzzles, GamePuzzles;

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
/*global  */

function initMaze()
{
    
    setupMazeStructure();
    
    //init condition
    currRoomNameID = 0;
    prevRoomNameID = 0;
    setupRoom();
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
            break;
        default:
            Maze = Maze00;
            RoomNames = RoomNames00;
            RoomPictures = RoomPictures00;
            RoomPictureSources = RoomPictureSources00;
            BonusPuzzles = BonusPuzzles00;
            GamePuzzles = GamePuzzles00;
            Doors = Doors00;
    }
}

function setupRoom()
{
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
    document.getElementById("buttonDoorDown" ).setAttribute("onclick", "showDoorPuzzle("+Doors[currRoomNameID][Maze[currRoomNameID][0]]+");" );
    document.getElementById("buttonDoorRight").setAttribute("onclick", "showDoorPuzzle("+Doors[currRoomNameID][Maze[currRoomNameID][1]]+");" );
    document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "showDoorPuzzle("+Doors[currRoomNameID][Maze[currRoomNameID][2]]+");" );
    document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "showDoorPuzzle("+Doors[currRoomNameID][Maze[currRoomNameID][3]]+");" );
    
    //document.getElementById("buttonDoorDown" ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][0]+","+currRoomNameID+")");
    //document.getElementById("buttonDoorRight").setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][1]+","+currRoomNameID+")");
    //document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][2]+","+currRoomNameID+")");
    //document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "setupRoom("+Maze[currRoomNameID][3]+","+currRoomNameID+")");
}

function showDoorPuzzle(id)
{
    TINY.box.show(id, 0,0,0,1);
}
