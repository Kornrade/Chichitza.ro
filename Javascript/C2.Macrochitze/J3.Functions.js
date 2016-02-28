/*----------------------------------------------------------------------------------------*\
| This file contains the operational functions called from the page.                       |     
\*----------------------------------------------------------------------------------------*/

/*jslint es5: true */
/*jslint evil: true*/
/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam, TINY;
var MazeID, nextRoomID, currRoomID, prevRoomID;
var mazeIsInitialized, solutionReference, solutionTable, solvedRoomPictures, isMazeSolved, doToggleDoors, jigsawPiecesDifficulty;
var rightAnswerBgColour, wrongAnswerBgColour, currNUM, currANS, Mazelen;
var Maze0, MazeTitles0, Doors0, MazeNeutralImage0, MazeNeutralImageSource0, RoomPictures0, RoomPictureSources0, DoorPuzzles0, DoorNumFormula0, DoorAnsFormula0, ValidFinalAnswer0;
var Maze1, MazeTitles1, Doors1, MazeNeutralImage1, MazeNeutralImageSource1, RoomPictures1, RoomPictureSources1, DoorPuzzles1, DoorNumFormula1, DoorAnsFormula1, ValidFinalAnswer1;


/*global setInnerHTML */
/*global setupMazeStructure */
/*global toggleMazeRules */
/*global initSolutionReference */
/*global initSolvedRoomPictures */
/*global initSolutionTable */
/*global setupRoom */
/*global setupJigsawPuzzle */
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
    doToggleDoors = true;
    jigsawPiecesDifficulty = 3; //default
    
    if(lang==="ro") {setInnerHTML("MazeTitle",MazeTitles[0]);}
    if(lang==="en") {setInnerHTML("MazeTitle",MazeTitles[1]);}
    if(lang==="de") {setInnerHTML("MazeTitle",MazeTitles[2]);}
    
    // add neutral maze image and source
    setInnerHTML("MazeNeutralImageField","<img src=\""+MazeNeutralImage+"\" alt=\""+MazeNeutralImage+"\" width=\"150\" />");	
    
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
            MazeTitles = MazeTitles1;
            Maze = Maze1;
            Mazelen = Maze.length;
            MazeNeutralImage = MazeNeutralImage1;
            MazeNeutralImageSource = MazeNeutralImageSource1;
            RoomPictures = RoomPictures1;
            RoomPictureSources = RoomPictureSources1;
            Doors = Doors1;
            DoorPuzzles = DoorPuzzles1;
            DoorNumFormula = DoorNumFormula1;
            DoorAnsFormula = DoorAnsFormula1;
            ValidFinalAnswer = ValidFinalAnswer1;
            break;
        default:
            MazeID = '0';
            MazeTitles = MazeTitles0;
            Maze = Maze0;
            Mazelen = Maze.length;
            MazeNeutralImage = MazeNeutralImage0;
            MazeNeutralImageSource = MazeNeutralImageSource0;
            RoomPictures = RoomPictures0;
            RoomPictureSources = RoomPictureSources0;
            Doors = Doors0;
            DoorPuzzles = DoorPuzzles0;
            DoorNumFormula = DoorNumFormula0;
            DoorAnsFormula = DoorAnsFormula0;
            ValidFinalAnswer = ValidFinalAnswer0;
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
    
    validateMaze();
}

function setupRoom(curr,prev)
{
    //current state condition
    nextRoomID = -1;
    currRoomID = curr;
    prevRoomID = prev;
    
    setupJigsawPuzzle();
    
    setupDoorPictures();
    setupDoorPuzzles();
    
}

function setupJigsawPuzzle()
{
    if(0===solvedRoomPictures[currRoomID])
    {
        document.getElementById("MacroStage").innerHTML = "<img id='MacroStageImg' \
            onload='snapfit.add(this, {callback:function() {updateSolvedRoomPictures(); showSolutionField(isMazeSolved);}, \
            aborder:true, level:"+jigsawPiecesDifficulty+", mixed:true, nokeys:true, polygon:true, space:0});' \
            src='"+RoomPictures[currRoomID]+"' width='250' height='250' border='0' \
            alt='"+RoomPictures[currRoomID]+"' />";
    }
    else
    {
        document.getElementById("MacroStage").innerHTML = "<img id='MacroStageImg' \
            onload='snapfit.add(this, {callback:false, \
            aborder:true, level:"+jigsawPiecesDifficulty+", mixed:false, nokeys:true, polygon:true, space:0});'\
            src='"+RoomPictures[currRoomID]+"' width='250' height='250' border='0' \
            alt='"+RoomPictures[currRoomID]+"' />";
    }
}

function setupDoorPictures()
{
    document.getElementById("imgDoorDown"  ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorDown.png" );
    document.getElementById("imgDoorRight" ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorRight.png");
    document.getElementById("imgDoorUp"    ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorUp.png"   );
    document.getElementById("imgDoorLeft"  ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorLeft.png" );
    
    //indicate door used for entering the room
    if( Maze[currRoomID][0] === prevRoomID ) { document.getElementById("imgDoorDown"  ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorDownActive.png"  ); }
    if( Maze[currRoomID][1] === prevRoomID ) { document.getElementById("imgDoorRight" ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorRightActive.png" ); }
    if( Maze[currRoomID][2] === prevRoomID ) { document.getElementById("imgDoorUp"    ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorUpActive.png"    ); }
    if( Maze[currRoomID][3] === prevRoomID ) { document.getElementById("imgDoorLeft"  ).setAttribute("src", "Images/C2.Macrochitze/Doors_And_Walls/doorLeftActive.png"  ); }
     
}

function setupDoorPuzzles()
{
    document.getElementById("buttonDoorDown" ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][0]+");" );
    document.getElementById("buttonDoorRight").setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][1]+");" );
    document.getElementById("buttonDoorUp"   ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][2]+");" );
    document.getElementById("buttonDoorLeft" ).setAttribute("onclick", "customizeDoorPuzzle("+currRoomID+","+Maze[currRoomID][3]+");" ); 
}

function customizeDoorPuzzle(currRoomID,nextRoomID)
{
    
    if(isMazeSolved||(nextRoomID===prevRoomID))
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
                            <input id = "AnswerField" type="text" size="15" style="text-align:center; font-size:16px;" onKeyPress="return processKeyEventDoor(event)"></input>\
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

function showSolutionField(withFinalQ)
{
    var solutionFieldHTML = '\
        <html>\
            <head>\
                </style>\
            </head>\
            <body>\
                <a id="buttonX" href="JavaScript:TINY.box.hide();">\
                    <img src="Images/C0.Common/Helpertools/TinyBox/BigXGray.png" alt="X" width="24" height="24" border="0" align="right" />\
                </a>\
                [FINALQTEXT]\
                <br/>\
                [TABLE]\
                [FINALQ]\
            </body>\
        </html>';
    
    if(withFinalQ)
    {
        solutionFieldHTML = solutionFieldHTML.replace("[FINALQ]", composeFinalQuestion() );
        solutionFieldHTML = solutionFieldHTML.replace("[FINALQTEXT]", composeFinalQuestionText() );
    }
    else
    {
        solutionFieldHTML = solutionFieldHTML.replace("[FINALQ]", "" );
        solutionFieldHTML = solutionFieldHTML.replace("[FINALQTEXT]", "<br/>" );
    }
    
    solutionFieldHTML = solutionFieldHTML.replace("[TABLE]", composeTableWithSortedRoomPictures() );
    

    showTinyBoxGame(solutionFieldHTML);
}

function composeFinalQuestion()
{
    var finalQuestion;
    finalQuestion = '<br/>\
            [QUESTION]\
            <br/>\
            <input id = "AnswerField" type="text" size="15" style="text-align:center; font-size:16px;" onKeyPress="return processKeyEventFinalAnswer(event)"></input>\
            <a id="buttonOK" href="JavaScript:validateFinalAnswer();">\
                <img src="Images/C0.Common/Helpertools/TinyBox/BigAccept.png" alt="X" width="24" height="24" border="0" align="right" />\
            </a>\
            </body>\
            </html>\
        ';

        if("ro"===lang) {finalQuestion = finalQuestion.replace("[QUESTION]",GlobalFinalQuestion[0]);}
        if("en"===lang) {finalQuestion = finalQuestion.replace("[QUESTION]",GlobalFinalQuestion[1]);}
        if("de"===lang) {finalQuestion = finalQuestion.replace("[QUESTION]",GlobalFinalQuestion[2]);}

    
    //return
    return finalQuestion;
}

function composeFinalQuestionText()
{
    var finalQuestiontext;
    
    if("ro"===lang) {finalQuestiontext = "Felicitari! <br/>Ai g&#x103;sit toate u&#x15F;ile.";}
    if("en"===lang) {finalQuestiontext = "Congratulations! <br/>You have found all the doors.";}
    if("de"===lang) {finalQuestiontext = "Gratuliere! <br/>Du hast alle T&#252;ren gefunden.";}
    
    //return
    return finalQuestiontext;
}


function composeTableWithSortedRoomPictures()
{
    var tableHTML, i,j,tempnum, temptoggle, RoomPicturesWithStatus = [], sortedRoomPictures;
    
    // append the status of the room picture at the end of the room picture's path so that it can be checked after sorting
    for(i = 0; i < Mazelen; i++)
    {
        RoomPicturesWithStatus[i] = RoomPictures[i] + solvedRoomPictures[i].toString();
    }
    
    // sort room names
    sortedRoomPictures = RoomPicturesWithStatus.sort();
    
    // decide on icon size
    if(doToggleDoors)
    {
        iconSize = "32";
    }
    else
    {
        iconSize = "16";
    }
    
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
                tableHTML += '<a><img src="'+MazeNeutralImage+'" alt="---" width='+iconSize+' height='+iconSize+' border="0"/></a>';
            }
            else if(i===0 && j!==0)
            {
                if("1"===sortedRoomPictures[j-1].slice(-1)) // last char
                {
                    tableHTML += '<a><img src="'+sortedRoomPictures[j-1].substring(0, sortedRoomPictures[j-1].length - 1)+'" alt="---" width='+iconSize+' height='+iconSize+' border="0"/></a>';
                }
                else
                {
                    tableHTML += '<a><img src="'+MazeNeutralImage+'" alt="---" width='+iconSize+' height='+iconSize+' border="0"/></a>';
                }
            }
            else if(j===0 && i!==0)
            {
                if("1"===sortedRoomPictures[i-1].slice(-1)) // last char
                {
                    tableHTML += '<a><img src="'+sortedRoomPictures[i-1].substring(0, sortedRoomPictures[i-1].length - 1)+'" alt="---" width='+iconSize+' height='+iconSize+' border="0"/></a>';
                }
                else
                {
                    tableHTML += '<a><img src="'+MazeNeutralImage+'" alt="---" width='+iconSize+' height='+iconSize+' border="0"/></a>';
                }
            }
            else if(i===j)
            {
                tableHTML += '<a><img src="Images/C2.Macrochitze/Doors_And_Walls/solutionSelf.png" alt="---" width='+iconSize+' height='+iconSize+' border="0"/></a>';
            }
            else
            {
                tempnum = parseInt(i-1,10)*Mazelen+parseInt(j-1,10);
                if(doToggleDoors)
                {
                    temptoggle = "toggleIcon("+i.toString()+","+j.toString()+");";
                }
                else
                {
                    temptoggle = "void(0)";
                }
                if(0===solutionTable[tempnum])
                {
                    tableHTML += '<a id="td'+i.toString()+","+j.toString()+'" href="JavaScript:'+temptoggle+'">\
                                        <img src="Images/C2.Macrochitze/Doors_And_Walls/solutionWall.png" alt="Wall" width='+iconSize+' height='+iconSize+' border="0"/>\
                                    </a>';
                }
                else
                {
                    tableHTML += '<a id="td'+i.toString()+","+j.toString()+'" href="JavaScript:'+temptoggle+'">\
                                        <img src="Images/C2.Macrochitze/Doors_And_Walls/solutionDoor.png" alt="Door" width='+iconSize+' height='+iconSize+' border="0"/>\
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

function toggleMazeRules()
{
    var mazeRules;
    mazeRules = "Instructiuni";
    showTinyBoxGame(mazeRules);
}

function toggleJigsawDifficulty(diff)
{
    if(jigsawPiecesDifficulty != diff)
    {
        switch(diff)
        {
            case 5:
                jigsawPiecesDifficulty = 5;
                document.getElementById("JigsawdDfficuly5").src="Images/C2.Macrochitze/Jigsaw/JigsawRed.png";
                document.getElementById("JigsawdDfficuly3").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                document.getElementById("JigsawdDfficuly1").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                snapfit.reset(document.getElementById('MacroStageImg'),5);
                if(0===solvedRoomPictures[currRoomID])
                {
                    snapfit.admix(document.getElementById('MacroStageImg'));
                }
                break;
            case 3:
                jigsawPiecesDifficulty = 3;
                document.getElementById("JigsawdDfficuly5").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                document.getElementById("JigsawdDfficuly3").src="Images/C2.Macrochitze/Jigsaw/JigsawYellow.png";
                document.getElementById("JigsawdDfficuly1").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                snapfit.reset(document.getElementById('MacroStageImg'),3);
                if(0===solvedRoomPictures[currRoomID])
                {
                    snapfit.admix(document.getElementById('MacroStageImg'));
                }
                break;
            case 1:
                jigsawPiecesDifficulty = 1;
                document.getElementById("JigsawdDfficuly5").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                document.getElementById("JigsawdDfficuly3").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                document.getElementById("JigsawdDfficuly1").src="Images/C2.Macrochitze/Jigsaw/JigsawGreen.png";
                snapfit.reset(document.getElementById('MacroStageImg'),1);
                if(0===solvedRoomPictures[currRoomID])
                {
                    snapfit.admix(document.getElementById('MacroStageImg'));
                }
                break;
            default:
                jigsawPiecesDifficulty = 3;
                document.getElementById("JigsawdDfficuly5").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                document.getElementById("JigsawdDfficuly3").src="Images/C2.Macrochitze/Jigsaw/JigsawYellow.png";
                document.getElementById("JigsawdDfficuly1").src="Images/C2.Macrochitze/Jigsaw/JigsawWhite.png";
                snapfit.reset(document.getElementById('MacroStageImg'),3);
                if(0===solvedRoomPictures[currRoomID])
                {
                    snapfit.admix(document.getElementById('MacroStageImg'));
                }
                break;
        }
    }
}

function toggleIcon(index1, index2)
{
    var tempnum;
        tempnum = parseInt(index1-1,10)*Mazelen+parseInt(index2-1,10);
    if(0===solutionTable[parseInt(tempnum,10)])
    {
        document.getElementById("td"+index1.toString()+","+index2.toString()).innerHTML = '<img src="Images/C2.Macrochitze/Doors_And_Walls/solutionDoor.png" alt="Door" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 1;
        tempnum = parseInt(index2-1,10)*Mazelen+parseInt(index1-1,10);
        document.getElementById("td"+index2.toString()+","+index1.toString()).innerHTML = '<img src="Images/C2.Macrochitze/Doors_And_Walls/solutionDoor.png" alt="Door" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 1;
    }
    else
    {
        document.getElementById("td"+index1.toString()+","+index2.toString()).innerHTML = '<img src="Images/C2.Macrochitze/Doors_And_Walls/solutionWall.png" alt="Wall" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 0;
        tempnum = parseInt(index2-1,10)*Mazelen+parseInt(index1-1,10);
        document.getElementById("td"+index2.toString()+","+index1.toString()).innerHTML = '<img src="Images/C2.Macrochitze/Doors_And_Walls/solutionWall.png" alt="Wall" width="32" height="32" border="0"/>';
        solutionTable[tempnum] = 0;
    }
    
    validateMaze();
}

function validateMaze()
{
    var i;
    isMazeSolved = true;
    for (i = 0; i < Mazelen*Mazelen; i++)
    {
        isMazeSolved = isMazeSolved && (solutionReference[i] === solutionTable[i]);
    }
    
    if(isMazeSolved)
    {
        doToggleDoors = false;
        setTimeout(function(){TINY.box.hide();},100);
        setTimeout(function(){showSolutionField(true)},400);
    }
        
}

function updateSolvedRoomPictures()
{
    if(0===solvedRoomPictures[currRoomID])
    {
        solvedRoomPictures[currRoomID] = 1;
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

function processKeyEventFinalAnswer(evt)
{
    var cCode;
    
    if(!evt)      { evt = window.event;  }
    if(evt.which) { cCode = evt.which;   }
    else          { cCode = evt.keyCode; }
    
	if(cCode===13) // enter key pressed
	{
		validateFinalAnswer();
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
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+rightAnswerBgColour);
        setTimeout(function(){TINY.box.hide();},500); //500ms
        setTimeout(function(){setupRoom(nextRoomID,currRoomID);},700); //700ms      
    }
    else
    {
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+wrongAnswerBgColour);
        setTimeout(function(){TINY.box.hide();},500); //500ms
    }
}

function validateFinalAnswer()
{
    // get answer
    var container, tempAnswer, i, tempTruthValue;
	container = document.getElementById("AnswerField");
	tempAnswer = container.value;
    tempAnswer = tempAnswer.toLowerCase();
    
    tempTruthValue = false;
    for (i = 0; i < ValidFinalAnswer.length; i++) 
    { 
        if(tempAnswer.indexOf(ValidFinalAnswer[i]) > -1)
        {
            tempTruthValue = true;
            break;
        }
    }
    
    if(tempTruthValue)
    {
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+rightAnswerBgColour);
    }
    else
    {
        container.setAttribute("style","text-align:center; font-size:16px; background-color:"+wrongAnswerBgColour);
    }
}