
/*
.......9.......
.0...2...4...6.
.1...3...5...7.
.......8.......
*/

var MazeTitles0 = [];
    MazeTitles0[0] = "Tutorial";
    MazeTitles0[1] = "Tutorial";
    MazeTitles0[2] = "Tutorial";

//Maze[k] = [D,R,U,L] room IDs
var Maze0 = []; // Maze 0 (Tutorial) internal structure
    Maze0[0] = [1,2,9,6];
    Maze0[1] = [8,3,0,7];
    Maze0[2] = [3,4,9,0];
    Maze0[3] = [8,5,2,1];
    Maze0[4] = [5,6,9,2];
    Maze0[5] = [8,7,4,3];
    Maze0[6] = [7,0,9,4];
    Maze0[7] = [8,1,6,5];
    Maze0[8] = [1,3,5,7];
    Maze0[9] = [0,2,4,6];

//Doors[k] = [puzzle(k,0), puzzle(k,1), ... , puzzle(k,N)] door puzzle IDs to get from room k to any other room
// -1 means no connection between rooms
var Doors0 = []; // Maze 0 (Tutorial) door puzzle IDs
    Doors0[0] = [-1, 1, 2,-1,-1,-1, 6,-1,-1, 9];
    Doors0[1] = [ 0,-1,-1, 3,-1,-1,-1, 7, 8,-1];
    Doors0[2] = [ 0,-1,-1, 3, 4,-1,-1,-1,-1, 9];
    Doors0[3] = [-1, 1, 2,-1,-1, 5,-1,-1, 8,-1];
    Doors0[4] = [-1,-1, 2,-1,-1, 5, 6,-1,-1, 9];
    Doors0[5] = [-1,-1,-1, 3, 4,-1,-1, 7, 8,-1];
    Doors0[6] = [ 0,-1,-1,-1, 4,-1,-1, 7,-1, 9];
    Doors0[7] = [-1, 1,-1,-1,-1, 5, 6,-1, 8,-1];
    Doors0[8] = [-1, 1,-1, 3,-1, 5,-1, 7,-1,-1];
    Doors0[9] = [ 0,-1, 2,-1, 4,-1, 6,-1,-1,-1];

var RoomPictures0 = []; // Maze 0 room picture paths                                                                                       
    RoomPictures0[0] = "Images/C2.Macrochitze/Maze0/Maze0-Pacific.png";                                                                      
    RoomPictures0[1] = "Images/C2.Macrochitze/Maze0/Maze0-Australia.png";                                                                    
    RoomPictures0[2] = "Images/C2.Macrochitze/Maze0/Maze0-AmericaN.png";                                                                      
    RoomPictures0[3] = "Images/C2.Macrochitze/Maze0/Maze0-AmericaS.png";                                                                      
    RoomPictures0[4] = "Images/C2.Macrochitze/Maze0/Maze0-Europe.png";                                                                      
    RoomPictures0[5] = "Images/C2.Macrochitze/Maze0/Maze0-Africa.png";                                                                      
    RoomPictures0[6] = "Images/C2.Macrochitze/Maze0/Maze0-Asia.png";                                                                      
    RoomPictures0[7] = "Images/C2.Macrochitze/Maze0/Maze0-Indian.png";                                                                      
    RoomPictures0[8] = "Images/C2.Macrochitze/Maze0/Maze0-Antarctica.png";                                                                    
    RoomPictures0[9] = "Images/C2.Macrochitze/Maze0/Maze0-Arctic.png";

var RoomPictureSources0 = []; // Maze 0 room picture sources
    RoomPictureSources0[0] = "en.wikipedia.org";
    RoomPictureSources0[1] = "en.wikipedia.org";
    RoomPictureSources0[2] = "en.wikipedia.org";
    RoomPictureSources0[3] = "en.wikipedia.org";
    RoomPictureSources0[4] = "en.wikipedia.org";
    RoomPictureSources0[5] = "en.wikipedia.org";
    RoomPictureSources0[6] = "en.wikipedia.org";
    RoomPictureSources0[7] = "en.wikipedia.org";
    RoomPictureSources0[8] = "en.wikipedia.org";
    RoomPictureSources0[9] = "en.wikipedia.org";

var ValidFinalAnswer0 = []; // Maze 0 parts of the final answer that are checked, must be lowercase
    ValidFinalAnswer0[0] = "glob"; //glob, globe, Globus
    ValidFinalAnswer0[1] = "sfer"; //sfera, sferoid
    ValidFinalAnswer0[2] = "spher"; // sphere, spheroid
    ValidFinalAnswer0[3] = "sphäre"; //Sphäre
    ValidFinalAnswer0[4] = "sphaere"; //Sphäre
    ValidFinalAnswer0[5] = "sphare"; //Sphäre