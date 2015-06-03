
/*
.......9.......
.0...2...4...6.
.1...3...5...7.
.......8.......
*/

//Maze[k] = [D,R,U,L] room IDs
var Maze00 = []; // Maze 0 (Tutorial) internal structure
    Maze00[0] = [1,2,9,6];
    Maze00[1] = [8,3,0,7];
    Maze00[2] = [3,4,9,0];
    Maze00[3] = [8,5,2,1];
    Maze00[4] = [5,6,9,2];
    Maze00[5] = [8,7,4,3];
    Maze00[6] = [7,0,9,4];
    Maze00[7] = [8,1,6,5];
    Maze00[8] = [1,3,5,7];
    Maze00[9] = [0,2,4,6];

//Doors[k] = [puzzle(k,0), puzzle(k,1), ... , puzzle(k,N)] door puzzle IDs to get from room k to any other room
// -1 means no connection between rooms
var Doors00 = []; // Maze 0 (Tutorial) door puzzle IDs
    Doors00[0] = [-1, 1, 2,-1,-1,-1, 6,-1,-1, 9];
    Doors00[1] = [ 0,-1,-1, 3,-1,-1,-1, 7, 8,-1];
    Doors00[2] = [ 0,-1,-1, 3, 4,-1,-1,-1,-1, 9];
    Doors00[3] = [-1, 1, 2,-1,-1, 5,-1,-1, 8,-1];
    Doors00[4] = [-1,-1, 2,-1,-1, 5, 6,-1,-1, 9];
    Doors00[5] = [-1,-1,-1, 3, 4,-1,-1, 7, 8,-1];
    Doors00[6] = [ 0,-1,-1,-1, 4,-1,-1, 7,-1, 9];
    Doors00[7] = [-1, 1,-1,-1,-1, 5, 6,-1, 8,-1];
    Doors00[8] = [-1, 1,-1, 3,-1, 5,-1, 7,-1,-1];
    Doors00[9] = [ 0,-1, 2,-1, 4,-1, 6,-1,-1,-1];

var RoomNames00 = []; // Maze 0 room names
    RoomNames00[0] = "Room Name";
    RoomNames00[1] = "Oceania";
    RoomNames00[2] = "North America";
    RoomNames00[3] = "South America";
    RoomNames00[4] = "Europa";
    RoomNames00[5] = "Africa";
    RoomNames00[6] = "Asia";
    RoomNames00[7] = "Australia";
    RoomNames00[8] = "Antarctica";
    RoomNames00[9] = "Arctica";

var RoomPictures00 = []; // Maze 0 room picture paths                                                                                       
    RoomPictures00[0] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[1] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[2] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[3] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[4] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[5] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[6] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[7] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[8] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      
    RoomPictures00[9] = "Images/C2.Macrochitze/Img_Blank.png";                                                                      

var RoomPictureSources00 = []; // Maze 0 room picture sources
    RoomPictureSources00[0] = "blabla";
    RoomPictureSources00[1] = "blabla";
    RoomPictureSources00[2] = "blabla";
    RoomPictureSources00[3] = "blabla";
    RoomPictureSources00[4] = "blabla";
    RoomPictureSources00[5] = "blabla";
    RoomPictureSources00[6] = "blabla";
    RoomPictureSources00[7] = "blabla";
    RoomPictureSources00[8] = "blabla";
    RoomPictureSources00[9] = "blabla";

var BonusPuzzles00 = [0,1,2,3,4,5,6,7,8,9]; //Bonus puzzle IDs from the big database

var GamePuzzles00 = [0,1,2,3,4,5,6,7,8,9]; //Game puzzle IDs from the big database




var DoorPuzzles00 = []; // door puzzles (corresponding IDs are used by variable Doors00[] )
var DoorNumFormula00 = []; // door puzzle acceptable NUM range formulae
var DoorAnsFormula00 = []; // door puzzle answers (depending on NUM)


 DoorNumFormula00[0] = []; //range for <NUM>
 DoorAnsFormula00[0] = []; //answer formula
    DoorPuzzles00[0] = []; //puzzles from room 0 of maze 00

    DoorNumFormula00[0][0] = ""; // Default, needed for checking

    DoorPuzzles00[0][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[0][1][0] = 'Scrie <NUM>...';
    DoorPuzzles00[0][1][1] = 'Write <NUM>...';
    DoorPuzzles00[0][1][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[0][1] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[0][1] = '<NUM>'; // no language dependency

    DoorPuzzles00[0][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[0][2][0] = 'Scrie <NUM>...';
    DoorPuzzles00[0][2][1] = 'Write <NUM>...';
    DoorPuzzles00[0][2][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[0][2] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[0][2] = '<NUM>'; // no language dependency


    DoorPuzzles00[0][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[0][6][0] = 'Scrie <NUM>...';
    DoorPuzzles00[0][6][1] = 'Write <NUM>...';
    DoorPuzzles00[0][6][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[0][6] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[0][6] = '<NUM>'; // no language dependency

    DoorPuzzles00[0][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[0][9][0] = 'Scrie <NUM>...';
    DoorPuzzles00[0][9][1] = 'Write <NUM>...';
    DoorPuzzles00[0][9][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[0][9] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[0][9] = '<NUM>'; // no language dependency

 DoorNumFormula00[1] = []; //range for <NUM>
 DoorAnsFormula00[1] = []; //answer formula
    DoorPuzzles00[1] = []; //puzzles from room 1 of maze 00

    DoorPuzzles00[1][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[1][0][0] = 'Scrie <NUM>...';
    DoorPuzzles00[1][0][1] = 'Write <NUM>...';
    DoorPuzzles00[1][0][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[1][0] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[1][0] = '<NUM>'; // no language dependency

    DoorPuzzles00[1][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[1][3][0] = 'Scrie <NUM>...';
    DoorPuzzles00[1][3][1] = 'Write <NUM>...';
    DoorPuzzles00[1][3][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[1][3] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[1][3] = '<NUM>'; // no language dependency

    DoorPuzzles00[1][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[1][7][0] = 'Scrie <NUM>...';
    DoorPuzzles00[1][7][1] = 'Write <NUM>...';
    DoorPuzzles00[1][7][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[1][7] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[1][7] = '<NUM>'; // no language dependency

    DoorPuzzles00[1][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[1][8][0] = 'Scrie <NUM>...';
    DoorPuzzles00[1][8][1] = 'Write <NUM>...';
    DoorPuzzles00[1][8][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[1][8] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[1][8] = '<NUM>'; // no language dependency

 DoorNumFormula00[2] = []; //range for <NUM>
 DoorAnsFormula00[2] = []; //answer formula
    DoorPuzzles00[2] = []; //puzzles from room 2 of maze 00

    DoorPuzzles00[2][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[2][0][0] = 'Scrie <NUM>...';
    DoorPuzzles00[2][0][1] = 'Write <NUM>...';
    DoorPuzzles00[2][0][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[2][0] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[2][0] = '<NUM>'; // no language dependency

    DoorPuzzles00[2][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[2][3][0] = 'Scrie <NUM>...';
    DoorPuzzles00[2][3][1] = 'Write <NUM>...';
    DoorPuzzles00[2][3][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[2][3] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[2][3] = '<NUM>'; // no language dependency

    DoorPuzzles00[2][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[2][4][0] = 'Scrie <NUM>...';
    DoorPuzzles00[2][4][1] = 'Write <NUM>...';
    DoorPuzzles00[2][4][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[2][4] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[2][4] = '<NUM>'; // no language dependency

    DoorPuzzles00[2][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[2][9][0] = 'Scrie <NUM>...';
    DoorPuzzles00[2][9][1] = 'Write <NUM>...';
    DoorPuzzles00[2][9][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[2][9] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[2][9] = '<NUM>'; // no language dependency

 DoorNumFormula00[3] = []; //range for <NUM>
 DoorAnsFormula00[3] = []; //answer formula
    DoorPuzzles00[3] = []; //puzzles from room 3 of maze 00

    DoorPuzzles00[3][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[3][1][0] = 'Scrie <NUM>...';
    DoorPuzzles00[3][1][1] = 'Write <NUM>...';
    DoorPuzzles00[3][1][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[3][1] = Doors00[3][1]; // no language dependency
    DoorAnsFormula00[3][1] = '<NUM>'; // no language dependency

    DoorPuzzles00[3][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[3][2][0] = 'Scrie <NUM>...';
    DoorPuzzles00[3][2][1] = 'Write <NUM>...';
    DoorPuzzles00[3][2][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[3][2] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[3][2] = '<NUM>'; // no language dependency

    DoorPuzzles00[3][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[3][5][0] = 'Scrie <NUM>...';
    DoorPuzzles00[3][5][1] = 'Write <NUM>...';
    DoorPuzzles00[3][5][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[3][5] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[3][5] = '<NUM>'; // no language dependency

    DoorPuzzles00[3][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[3][8][0] = 'Scrie <NUM>...';
    DoorPuzzles00[3][8][1] = 'Write <NUM>...';
    DoorPuzzles00[3][8][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[3][8] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[3][8] = '<NUM>'; // no language dependency

 DoorNumFormula00[4] = []; //range for <NUM>
 DoorAnsFormula00[4] = []; //answer formula
    DoorPuzzles00[4] = []; //puzzles from room 4 of maze 00

    DoorPuzzles00[4][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[4][2][0] = 'Scrie <NUM>...';
    DoorPuzzles00[4][2][1] = 'Write <NUM>...';
    DoorPuzzles00[4][2][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[4][2] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[4][2] = '<NUM>'; // no language dependency

    DoorPuzzles00[4][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[4][5][0] = 'Scrie <NUM>...';
    DoorPuzzles00[4][5][1] = 'Write <NUM>...';
    DoorPuzzles00[4][5][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[4][5] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[4][5] = '<NUM>'; // no language dependency

    DoorPuzzles00[4][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[4][6][0] = 'Scrie <NUM>...';
    DoorPuzzles00[4][6][1] = 'Write <NUM>...';
    DoorPuzzles00[4][6][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[4][6] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[4][6] = '<NUM>'; // no language dependency

    DoorPuzzles00[4][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[4][9][0] = 'Scrie <NUM>...';
    DoorPuzzles00[4][9][1] = 'Write <NUM>...';
    DoorPuzzles00[4][9][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[4][9] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[4][9] = '<NUM>'; // no language dependency

 DoorNumFormula00[5] = []; //range for <NUM>
 DoorAnsFormula00[5] = []; //answer formula
    DoorPuzzles00[5] = []; //puzzles from room 5 of maze 00

    DoorPuzzles00[5][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[5][3][0] = 'Scrie <NUM>...';
    DoorPuzzles00[5][3][1] = 'Write <NUM>...';
    DoorPuzzles00[5][3][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[5][3] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[5][3] = '<NUM>'; // no language dependency

    DoorPuzzles00[5][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[5][4][0] = 'Scrie <NUM>...';
    DoorPuzzles00[5][4][1] = 'Write <NUM>...';
    DoorPuzzles00[5][4][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[5][4] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[5][4] = '<NUM>'; // no language dependency

    DoorPuzzles00[5][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[5][7][0] = 'Scrie <NUM>...';
    DoorPuzzles00[5][7][1] = 'Write <NUM>...';
    DoorPuzzles00[5][7][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[5][7] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[5][7] = '<NUM>'; // no language dependency

    DoorPuzzles00[5][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[5][8][0] = 'Scrie <NUM>...';
    DoorPuzzles00[5][8][1] = 'Write <NUM>...';
    DoorPuzzles00[5][8][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[5][8] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[5][8] = '<NUM>'; // no language dependency

 DoorNumFormula00[6] = []; //range for <NUM>
 DoorAnsFormula00[6] = []; //answer formula
    DoorPuzzles00[6] = []; //puzzles from room 6 of maze 00

    DoorPuzzles00[6][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[6][0][0] = 'Scrie <NUM>...';
    DoorPuzzles00[6][0][1] = 'Write <NUM>...';
    DoorPuzzles00[6][0][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[6][0] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[6][0] = '<NUM>'; // no language dependency

    DoorPuzzles00[6][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[6][4][0] = 'Scrie <NUM>...';
    DoorPuzzles00[6][4][1] = 'Write <NUM>...';
    DoorPuzzles00[6][4][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[6][4] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[6][4] = '<NUM>'; // no language dependency

    DoorPuzzles00[6][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[6][7][0] = 'Scrie <NUM>...';
    DoorPuzzles00[6][7][1] = 'Write <NUM>...';
    DoorPuzzles00[6][7][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[6][7] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[0][1] = '<NUM>'; // no language dependency

    DoorPuzzles00[6][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[6][9][0] = 'Scrie <NUM>...';
    DoorPuzzles00[6][9][1] = 'Write <NUM>...';
    DoorPuzzles00[6][9][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[6][9] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[6][9] = '<NUM>'; // no language dependency

 DoorNumFormula00[7] = []; //range for <NUM>
 DoorAnsFormula00[7] = []; //answer formula
    DoorPuzzles00[7] = []; //puzzles from room 7 of maze 00

    DoorPuzzles00[7][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[7][1][0] = 'Scrie <NUM>...';
    DoorPuzzles00[7][1][1] = 'Write <NUM>...';
    DoorPuzzles00[7][1][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[7][1] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[7][1] = '<NUM>'; // no language dependency

    DoorPuzzles00[7][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[7][5][0] = 'Scrie <NUM>...';
    DoorPuzzles00[7][5][1] = 'Write <NUM>...';
    DoorPuzzles00[7][5][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[7][5] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[7][5] = '<NUM>'; // no language dependency

    DoorPuzzles00[7][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[7][6][0] = 'Scrie <NUM>...';
    DoorPuzzles00[7][6][1] = 'Write <NUM>...';
    DoorPuzzles00[7][6][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[7][6] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[7][6] = '<NUM>'; // no language dependency

    DoorPuzzles00[7][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[7][8][0] = 'Scrie <NUM>...';
    DoorPuzzles00[7][8][1] = 'Write <NUM>...';
    DoorPuzzles00[7][8][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[7][8] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[7][8] = '<NUM>'; // no language dependency

 DoorNumFormula00[8] = []; //range for <NUM>
 DoorAnsFormula00[8] = []; //answer formula
    DoorPuzzles00[8] = []; //puzzles from room 8 of maze 00

    DoorPuzzles00[8][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[8][1][0] = 'Scrie <NUM>...';
    DoorPuzzles00[8][1][1] = 'Write <NUM>...';
    DoorPuzzles00[8][1][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[8][1] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[8][1] = '<NUM>'; // no language dependency

    DoorPuzzles00[8][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[8][3][0] = 'Scrie <NUM>...';
    DoorPuzzles00[8][3][1] = 'Write <NUM>...';
    DoorPuzzles00[8][3][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[8][3] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[8][3] = '<NUM>'; // no language dependency

    DoorPuzzles00[8][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[8][5][0] = 'Scrie <NUM>...';
    DoorPuzzles00[8][5][1] = 'Write <NUM>...';
    DoorPuzzles00[8][5][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[8][5] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[8][5] = '<NUM>'; // no language dependency

    DoorPuzzles00[8][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[8][7][0] = 'Scrie <NUM>...';
    DoorPuzzles00[8][7][1] = 'Write <NUM>...';
    DoorPuzzles00[8][7][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[8][7] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[8][7] = '<NUM>'; // no language dependency

 DoorNumFormula00[9] = []; //range for <NUM>
 DoorAnsFormula00[9] = []; //answer formula
    DoorPuzzles00[9] = []; //puzzles from room 9 of maze 00

    DoorPuzzles00[9][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[9][0][0] = 'Scrie <NUM>...';
    DoorPuzzles00[9][0][1] = 'Write <NUM>...';
    DoorPuzzles00[9][0][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[9][0] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[9][0] = '<NUM>'; // no language dependency

    DoorPuzzles00[9][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[9][2][0] = 'Scrie <NUM>...';
    DoorPuzzles00[9][2][1] = 'Write <NUM>...';
    DoorPuzzles00[9][2][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[9][2] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[9][2] = '<NUM>'; // no language dependency

    DoorPuzzles00[9][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[9][4][0] = 'Scrie <NUM>...';
    DoorPuzzles00[9][4][1] = 'Write <NUM>...';
    DoorPuzzles00[9][4][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[9][4] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[9][4] = '<NUM>'; // no language dependency

    DoorPuzzles00[9][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles00[9][6][0] = 'Scrie <NUM>...';
    DoorPuzzles00[9][6][1] = 'Write <NUM>...';
    DoorPuzzles00[9][6][2] = 'Schreibe <NUM>...';
    DoorNumFormula00[9][6] = 'Math.floor((Math.random() * 10) + 1)'; // no language dependency
    DoorAnsFormula00[9][6] = '<NUM>'; // no language dependency
