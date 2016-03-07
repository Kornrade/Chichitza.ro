var DoorPuzzles0 = []; // door puzzles (corresponding IDs are used by variable Doors0[] )
var DoorNum1Formula0 = []; // door puzzle acceptable NUM1 range formulae
var DoorNum2Formula0 = []; // door puzzle acceptable NUM2 range formulae
var DoorNum3Formula0 = []; // door puzzle acceptable NUM3 range formulae
var DoorAnsFormula0 = []; // door puzzle answers (depending on NUM)


DoorNum1Formula0[0] = []; //range for <NUM1>
DoorNum2Formula0[0] = []; //range for <NUM2>
DoorNum3Formula0[0] = []; //range for <NUM3>
 DoorAnsFormula0[0] = []; //answer formula
    DoorPuzzles0[0] = []; //puzzles from room 0 of maze 00

    DoorNum1Formula0[0][0] = ""; // Default, needed for checking

    DoorPuzzles0[0][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[0][1][0] = '<div style="margin: auto; text-align: justify"> Pentru a trece intr-o alta camera, scrie raspunsul corect pentru chichitza de la usa. <br/><br/> <NUM1>+<NUM2>+<NUM3>=?... </div>';
    DoorPuzzles0[0][1][1] = '<div style="margin: auto; text-align: justify"> To go into another room, write the correct answer to the door brainteaser. <br/><br/> <NUM1>+<NUM2>+<NUM3>=?...</div>';
    DoorPuzzles0[0][1][2] = '<div style="margin: auto; text-align: justify"> Um in ein anderes Zimmer zu gehen, schreibe die richtige Antwort fur die Tur-Knobelei. <br/><br/> <NUM1>+<NUM2>+<NUM3>=?...</div>';
    DoorNum1Formula0[0][1] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[0][1] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[0][1] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[0][1] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[0][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[0][2][0] = DoorPuzzles0[0][1][0];
    DoorPuzzles0[0][2][1] = DoorPuzzles0[0][1][1];
    DoorPuzzles0[0][2][2] = DoorPuzzles0[0][1][2];
    DoorNum1Formula0[0][2] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[0][2] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[0][2] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[0][2] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency


    DoorPuzzles0[0][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[0][6][0] = DoorPuzzles0[0][1][0];
    DoorPuzzles0[0][6][1] = DoorPuzzles0[0][1][1];
    DoorPuzzles0[0][6][2] = DoorPuzzles0[0][1][2];
    DoorNum1Formula0[0][6] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[0][6] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[0][6] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[0][6] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[0][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[0][9][0] = DoorPuzzles0[0][1][0];
    DoorPuzzles0[0][9][1] = DoorPuzzles0[0][1][1];
    DoorPuzzles0[0][9][2] = DoorPuzzles0[0][1][2];
    DoorNum1Formula0[0][9] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[0][9] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[0][9] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[0][9] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[1] = []; //range for <NUM1>
DoorNum2Formula0[1] = []; //range for <NUM2>
DoorNum3Formula0[1] = []; //range for <NUM3>
 DoorAnsFormula0[1] = []; //answer formula
    DoorPuzzles0[1] = []; //puzzles from room 1 of maze 00

    DoorPuzzles0[1][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[1][0][0] = '<div style="margin: auto; text-align: justify"> Intrebare usoara: <NUM1>+<NUM2>+<NUM3>=?...</div>';
    DoorPuzzles0[1][0][1] = '<div style="margin: auto; text-align: justify"> Easy question: <NUM1>+<NUM2>+<NUM3>=?...</div>';
    DoorPuzzles0[1][0][2] = '<div style="margin: auto; text-align: justify"> Leichte Frage: <NUM1>+<NUM2>+<NUM3>=?...</div>';
    DoorNum1Formula0[1][0] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[1][0] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[1][0] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[1][0] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[1][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[1][3][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[1][3][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[1][3][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[1][3] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[1][3] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[1][3] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[1][3] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[1][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[1][7][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[1][7][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[1][7][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[1][7] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[1][7] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[1][7] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[1][7] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[1][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[1][8][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[1][8][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[1][8][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[1][8] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[1][8] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[1][8] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[1][8] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[2] = []; //range for <NUM1>
DoorNum2Formula0[2] = []; //range for <NUM2>
DoorNum3Formula0[2] = []; //range for <NUM3>
 DoorAnsFormula0[2] = []; //answer formula
    DoorPuzzles0[2] = []; //puzzles from room 2 of maze 00

    DoorPuzzles0[2][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[2][0][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[2][0][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[2][0][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[2][0] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[2][0] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[2][0] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[2][0] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[2][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[2][3][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[2][3][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[2][3][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[2][3] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[2][3] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[2][3] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[2][3] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[2][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[2][4][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[2][4][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[2][4][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[2][4] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[2][4] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[2][4] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[2][4] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[2][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[2][9][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[2][9][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[2][9][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[2][9] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[2][9] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[2][9] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[2][9] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[3] = []; //range for <NUM1>
DoorNum2Formula0[3] = []; //range for <NUM2>
DoorNum3Formula0[3] = []; //range for <NUM3>
 DoorAnsFormula0[3] = []; //answer formula
    DoorPuzzles0[3] = []; //puzzles from room 3 of maze 00

    DoorPuzzles0[3][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[3][1][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[3][1][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[3][1][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[3][1] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[3][1] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[3][1] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[3][1] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[3][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[3][2][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[3][2][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[3][2][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[3][2] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[3][2] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[3][2] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[3][2] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[3][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[3][5][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[3][5][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[3][5][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[3][5] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[3][5] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[3][5] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[3][5] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[3][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[3][8][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[3][8][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[3][8][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[3][8] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[3][8] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[3][8] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[3][8] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[4] = []; //range for <NUM1>
DoorNum2Formula0[4] = []; //range for <NUM2>
DoorNum3Formula0[4] = []; //range for <NUM3>
 DoorAnsFormula0[4] = []; //answer formula
    DoorPuzzles0[4] = []; //puzzles from room 4 of maze 00

    DoorPuzzles0[4][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[4][2][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[4][2][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[4][2][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[4][2] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[4][2] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[4][2] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[4][2] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[4][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[4][5][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[4][5][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[4][5][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[4][5] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[4][5] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[4][5] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[4][5] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[4][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[4][6][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[4][6][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[4][6][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[4][6] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[4][6] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[4][6] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[4][6] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[4][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[4][9][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[4][9][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[4][9][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[4][9] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[4][9] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[4][9] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[4][9] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[5] = []; //range for <NUM1>
DoorNum2Formula0[5] = []; //range for <NUM2>
DoorNum3Formula0[5] = []; //range for <NUM3>
 DoorAnsFormula0[5] = []; //answer formula
    DoorPuzzles0[5] = []; //puzzles from room 5 of maze 00

    DoorPuzzles0[5][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[5][3][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[5][3][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[5][3][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[5][3] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[5][3] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[5][3] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[5][3] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[5][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[5][4][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[5][4][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[5][4][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[5][4] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[5][4] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[5][4] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[5][4] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[5][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[5][7][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[5][7][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[5][7][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[5][7] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[5][7] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[5][7] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[5][7] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[5][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[5][8][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[5][8][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[5][8][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[5][8] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[5][8] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[5][8] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[5][8] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[6] = []; //range for <NUM1>
DoorNum2Formula0[6] = []; //range for <NUM2>
DoorNum3Formula0[6] = []; //range for <NUM3>
 DoorAnsFormula0[6] = []; //answer formula
    DoorPuzzles0[6] = []; //puzzles from room 6 of maze 00

    DoorPuzzles0[6][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[6][0][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[6][0][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[6][0][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[6][0] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[6][0] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[6][0] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[6][0] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[6][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[6][4][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[6][4][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[6][4][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[6][4] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[6][4] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[6][4] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[6][4] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[6][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[6][7][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[6][7][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[6][7][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[6][7] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[6][7] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[6][7] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[6][7] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[6][9] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[6][9][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[6][9][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[6][9][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[6][9] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[6][9] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[6][9] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[6][9] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[7] = []; //range for <NUM1>
DoorNum2Formula0[7] = []; //range for <NUM2>
DoorNum3Formula0[7] = []; //range for <NUM3>
 DoorAnsFormula0[7] = []; //answer formula
    DoorPuzzles0[7] = []; //puzzles from room 7 of maze 00

    DoorPuzzles0[7][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[7][1][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[7][1][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[7][1][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[7][1] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[7][1] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[7][1] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[7][1] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[7][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[7][5][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[7][5][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[7][5][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[7][5] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[7][5] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[7][5] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[7][5] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[7][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[7][6][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[7][6][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[7][6][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[7][6] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[7][6] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[7][6] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[7][6] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[7][8] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[7][8][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[7][8][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[7][8][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[7][8] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[7][8] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[7][8] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[7][8] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[8] = []; //range for <NUM1>
DoorNum2Formula0[8] = []; //range for <NUM2>
DoorNum3Formula0[8] = []; //range for <NUM3>
 DoorAnsFormula0[8] = []; //answer formula
    DoorPuzzles0[8] = []; //puzzles from room 8 of maze 00

    DoorPuzzles0[8][1] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[8][1][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[8][1][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[8][1][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[8][1] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[8][1] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[8][1] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[8][1] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[8][3] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[8][3][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[8][3][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[8][3][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[8][3] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[8][3] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[8][3] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[8][3] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[8][5] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[8][5][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[8][5][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[8][5][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[8][5] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[8][5] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[8][5] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[8][5] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[8][7] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[8][7][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[8][7][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[8][7][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[8][7] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[8][7] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[8][7] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[8][7] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

DoorNum1Formula0[9] = []; //range for <NUM1>
DoorNum2Formula0[9] = []; //range for <NUM2>
DoorNum3Formula0[9] = []; //range for <NUM3>
 DoorAnsFormula0[9] = []; //answer formula
    DoorPuzzles0[9] = []; //puzzles from room 9 of maze 00

    DoorPuzzles0[9][0] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[9][0][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[9][0][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[9][0][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[9][0] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[9][0] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[9][0] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[9][0] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[9][2] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[9][2][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[9][2][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[9][2][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[9][2] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[9][2] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[9][2] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[9][2] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[9][4] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[9][4][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[9][4][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[9][4][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[9][4] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[9][4] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[9][4] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[9][4] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency

    DoorPuzzles0[9][6] = []; //third argument is for the language 0=ro, 1=en, 2=de
    DoorPuzzles0[9][6][0] = DoorPuzzles0[1][0][0];
    DoorPuzzles0[9][6][1] = DoorPuzzles0[1][0][1];
    DoorPuzzles0[9][6][2] = DoorPuzzles0[1][0][2];
    DoorNum1Formula0[9][6] = 'Math.floor((Math.random() *  9) + 1)'; // no language dependency
    DoorNum2Formula0[9][6] = 'Math.floor((Math.random() * 19) + 1)'; // no language dependency
    DoorNum3Formula0[9][6] = 'Math.floor((Math.random() * 99) + 1)'; // no language dependency
    DoorAnsFormula0[9][6] = '<NUM1>+<NUM2>+<NUM3>'; // no language dependency
