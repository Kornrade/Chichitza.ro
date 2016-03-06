// This file contains the global variables. these have been separated into DYNAMIC and STATIC variables
/*jslint es5: true */

// DYNAMIC variables (may be changed in functions)

var rightAnswerBgColour = "#AAEEAA"; // background colour for when the answer is true
var wrongAnswerBgColour = "#EEAAAA"; // background colour for when the answer is false

var mazeIsInitialized = false;
var solutionTable; // The table where the user enters the solution to the problem
var Mazelen; //length and breadth of the solution table (Mazelen = Maze.length)

// UNCHANGING variables

var mazeRules = [];
    mazeRules[0] = '<b>Regulile jocului</b><br/><br/>\
                    <p align="justify">\
                    E&#x15F;ti &#xEE;nchis &#xEE;ntr-o serie de camere uria&#x15F;e, conectate prin u&#x15F;i.\
                    Sarcina ta este s&#x103; g&#x103;se&#x15F;ti toate conexiunile &#xEE;ntre camere &#x15F;i s&#x103; le notezi pe hart&#x103;.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/map.png" alt="Map" width="32" height="32" border="0"> \
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Europe.png" alt="Europe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Asia.png" alt="Asia" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Africa.png" alt="Africa" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-AmericaN.png" alt="AmericaN" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-AmericaS.png" alt="AmericaS" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Australia.png" alt="Australia" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    </center>\
                    <p align="justify">\
                    Fiecare camer&#x103; este identificat&#x103; pe hart&#x103; printr-o imagine.\
                    La &#xEE;nceput, toate imaginile sunt t&#x103;iate &#xEE;n mozaicuri, dar devin vizibile pe hart&#x103; dup&#x103; asamblarea pieselor.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    </center><br/>\
                    <p align="justify">\
                    Fiecare camer&#x103; are 4 u&#x15F;i. Fiecare u&#x15F;&#x103; este &#xEE;ncuiat&#x103; cu o chichi&#x163;&#x103; care trebuie rezolvat&#x103; pentru a trece &#xEE;n camera urm&#x103;toare.\
                    U&#x15F;a deschis&#x103; indic&#x103; u&#x15F;a folosit&#x103; pentru a intra &#xEE;n camer&#x103;, &#xEE;n cazul &#xEE;n care te razg&#xE2;nde&#x15F;ti &#x15F;i vrei s&#x103; te &#xEE;ntorci &#xEE;n camera precedent&#x103;.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUpActive.png" alt="door up" width="90" height="24" border="0">\
                    <br/>\
                    <i>Mult&#x103; baft&#x103; la g&#x103;sirea drumului prin labirint!<i>\
                    </center>';
    mazeRules[1] = '<b>Game rules</b><br/><br/>\
                    <p align="justify">\
                    You are locked in a series of huge rooms, connected by doors.\
                    Your task is to find all connections between the rooms and\
                    write them down on the map.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/map.png" alt="Map" width="32" height="32" border="0"> \
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Europe.png" alt="Europe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Asia.png" alt="Asia" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Africa.png" alt="Africa" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-AmericaN.png" alt="AmericaN" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-AmericaS.png" alt="AmericaS" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Australia.png" alt="Australia" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    </center>\
                    <p align="justify">\
                    Each room is defined on the map of connections by a picture.\
                    At the beginning, all pictures are hidden and offered as jigsaw puzzles,\
                    but they become visible on the map after putting the pieces together.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    </center><br/>\
                    <p align="justify">\
                    Each room has 4 doors. Each door is guarded by a brainteaser,\
                    you need to answer it correctly before entering the next room.\
                    The open door will indicate the door you have just used,\
                    in case you change your mind and want to go back.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUpActive.png" alt="door up" width="90" height="24" border="0">\
                    <br/>\
                    <i>Good luck finding your way through the maze!<i>\
                    </center>';
    mazeRules[2] = '<b>Spielregeln</b><br/><br/>\
                    <p align="justify">\
                    Du bist in eine Reihe von riesigen Zimmer eingeschlossen. \
                    Deine Aufgabe ist es, alle T&#252;r-Verbindungen zwischen den Zimmern zu finden \
                    und sie auf der Karte zu markieren.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/map.png" alt="Map" width="32" height="32" border="0"> \
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Europe.png" alt="Europe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Asia.png" alt="Asia" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Africa.png" alt="Africa" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-AmericaN.png" alt="AmericaN" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-AmericaS.png" alt="AmericaS" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/Maze0/Maze0-Australia.png" alt="Australia" width="24" height="24" border="0">\
                    <img src="Images/C2.Macrochitze/BlackGlobe.png" alt="BlackGlobe" width="24" height="24" border="0">\
                    </center>\
                    <p align="justify">\
                    Jedes Zimmer ist auf der Karte durch einen Bild gekennzeichnet.\
                    Am Anfang sind die Bilder versteckt und als Puzzle angeboten,\
                    aber sie werden auf der Karte sichtbar sobald die Teile zusammengesetzt wurden.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUp.png" alt="door up" width="90" height="24" border="0" align="center">\
                    </center><br/>\
                    <p align="justify">\
                    Jedes Zimmer hat 4 T&#252;ren. Jede T&#252;r ist durch eine Knobelaufgabe gesperrt,\
                    die man richtig beantworten muss, bevor man den nächsten Raum betreten kann.\
                    Die offene T&#252;r zeigt durch welche T&#252;r das Zimmer betreten wurde, f&#252;r eine eventuelle R&#252;ckkehr in den vorherigen Zimmer.\
                    </p>\
                    <center>\
                    <img src="Images/C2.Macrochitze/Doors_And_Walls/doorUpActive.png" alt="door up" width="90" height="24" border="0">\
                    <br/>\
                    <i>Viel Gl&#252;ck, den Weg durchs Labyrinth zu finden!<i>\
                    </center>';

var NumberOfMazes = 0;
var MazeNeutralImage = "Images/C2.Macrochitze/BlackGlobe.png";
var MazeNeutralImageSource = "iconfinder.com";

var GlobalFinalQuestion = []; // Maze 0 parts of the final answer that are checked, must be lowercase
    GlobalFinalQuestion[0] = "Ce form&#x103; are suprafa&#x163;a <br/>pe care sunt construite <br/>camerele?"; //glob, globe, Globus
    GlobalFinalQuestion[1] = "What shape is the surface <br/>on which the rooms are built?"; //sfera, sferoid
    GlobalFinalQuestion[2] = "Welche Form hat die Oberfl&#228;che, <br/>worauf die R&#228;ume gebaut sind?"; // sphere, spheroid
