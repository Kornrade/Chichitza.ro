
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

var RoomPictures00 = []; // Maze 0 room picture paths                                                                                       
    RoomPictures00[0] = "Images/C2.Macrochitze/Maze00-Pacific.png";                                                                      
    RoomPictures00[1] = "Images/C2.Macrochitze/Maze00-Australia.png";                                                                      
    RoomPictures00[2] = "Images/C2.Macrochitze/Maze00-AmericaN.png";                                                                      
    RoomPictures00[3] = "Images/C2.Macrochitze/Maze00-AmericaS.png";                                                                      
    RoomPictures00[4] = "Images/C2.Macrochitze/Maze00-Europe.png";                                                                      
    RoomPictures00[5] = "Images/C2.Macrochitze/Maze00-Africa.png";                                                                      
    RoomPictures00[6] = "Images/C2.Macrochitze/Maze00-Asia.png";                                                                      
    RoomPictures00[7] = "Images/C2.Macrochitze/Maze00-Indian.png";                                                                      
    RoomPictures00[8] = "Images/C2.Macrochitze/Maze00-Antarctica.png";                                                                      
    RoomPictures00[9] = "Images/C2.Macrochitze/Maze00-Arctic.png";

var RoomHidingPicture00 = "Images/C2.Macrochitze/Maze00.png";

var RoomPictureSources00 = []; // Maze 0 room picture sources
    RoomPictureSources00[0] = "en.wikipedia.org";
    RoomPictureSources00[1] = "en.wikipedia.org";
    RoomPictureSources00[2] = "en.wikipedia.org";
    RoomPictureSources00[3] = "en.wikipedia.org";
    RoomPictureSources00[4] = "en.wikipedia.org";
    RoomPictureSources00[5] = "en.wikipedia.org";
    RoomPictureSources00[6] = "en.wikipedia.org";
    RoomPictureSources00[7] = "en.wikipedia.org";
    RoomPictureSources00[8] = "en.wikipedia.org";
    RoomPictureSources00[9] = "en.wikipedia.org";

var RoomHidingPictureSource00 = "iconfinder.com";