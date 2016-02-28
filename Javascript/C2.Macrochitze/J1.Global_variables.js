// This file contains the global variables. these have been separated into DYNAMIC and STATIC variables

// DYNAMIC variables (may be changed in functions)

var rightAnswerBgColour = "#AAEEAA"; // background colour for when the answer is true
var wrongAnswerBgColour = "#EEAAAA"; // background colour for when the answer is false

mazeIsInitialized = false;
var solutionTable; // The table where the user enters the solution to the problem
var Mazelen; //length and breadth of the solution table (Mazelen = Maze.length)

// variables for the current game (overwritten when a new game is started);
var Maze, Doors, RoomHidingPicture, RoomHidingPictureSource, RoomPictures, RoomPictureSources, DoorPuzzles, DoorNumFormula, DoorAnsFormula, ValidFinalAnswer;

// STATIC variables

var NumberOfMazes = 0;

var GlobalFinalQuestion = []; // Maze 0 parts of the final answer that are checked, must be lowercase
    GlobalFinalQuestion[0] = "Ce form&#x103; are suprafa&#x163;a <br/>pe care sunt construite <br/>camerele?"; //glob, globe, Globus
    GlobalFinalQuestion[1] = "What shape is the surface <br/>on which the rooms are built?"; //sfera, sferoid
    GlobalFinalQuestion[2] = "Welche Form hat die Oberfl&#228;che, <br/>worauf die R&#228;ume gebaut sind?"; // sphere, spheroid
