// This file contains the global variables. these have been separated into DYNAMIC and STATIC variables

// DYNAMIC variables (may be changed in functions)

var rightAnswerBgColour = "#AAEEAA"; // background colour for when the answer is true
var wrongAnswerBgColour = "#EEAAAA"; // background colour for when the answer is false

var mazeIsInitialized = false;
var solutionTable; // The table where the user enters the solution to the problem
var Mazelen; //length and breadth of the solution table (Mazelen = Maze.length)

// UNCHANGING variables

var mazeRules = [];
    mazeRules[0] = 'Before text editors existed, computer text was punched into cards with keypunch machines. Physical boxes of these thin cardboard cards were then inserted into a card-reader. Magnetic tape and disk "card-image" files created from such card decks often had no line-separation characters at all, and assumed fixed-length 80-character records. An alternative to cards was punched paper tape. It could be created by some teleprinters (such as the Teletype), which used special characters to indicate ends of records.';
    mazeRules[1] = 'ENEN';
    mazeRules[2] = 'DEDE';

var NumberOfMazes = 0;
var MazeNeutralImage = "Images/C2.Macrochitze/BlackGlobe.png";
var MazeNeutralImageSource = "iconfinder.com";

var GlobalFinalQuestion = []; // Maze 0 parts of the final answer that are checked, must be lowercase
    GlobalFinalQuestion[0] = "Ce form&#x103; are suprafa&#x163;a <br/>pe care sunt construite <br/>camerele?"; //glob, globe, Globus
    GlobalFinalQuestion[1] = "What shape is the surface <br/>on which the rooms are built?"; //sfera, sferoid
    GlobalFinalQuestion[2] = "Welche Form hat die Oberfl&#228;che, <br/>worauf die R&#228;ume gebaut sind?"; // sphere, spheroid
