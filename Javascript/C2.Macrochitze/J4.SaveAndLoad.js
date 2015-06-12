/*----------------------------------------------------------------------------------------*\
| This file contains the SAVE, LOAD, and auxiliary functions called from the page.         |     
\*----------------------------------------------------------------------------------------*/

var MazeID, prevRoomID, currRoomID, solutionTable, solvedRoomPictures;

/*global computeExtendedHexa */
/*global computeCustomRLE */
/*global showMazeState */
/*global encodeMazeState */
/*global showLoadDialog */
/*global decodeMazeState */
/*global showTinyBoxGame */

/////////////////////////////////////////////
/*
    MazeID   (hexa: 0-F extended with G,H,... if necessary; Z=35 ... |=71; .=71+ and continuing with same bit)
    PrevRoom (hexa: 0-F extended with G,H,... if necessary; Z=35 ... |=71; .=71+ and continuing with same bit)
    CurrRoom (hexa: 0-F extended with G,H,... if necessary; Z=35 ... |=71; .=71+ and continuing with same bit)
    solutionTableValues + solvedRoomPicturesValues; 
            Note: solutionTableValues always starts with 0
            (RLE on binary, using extended hexa convention)
    EXAMPLE:        
    encoded: 312.TA = Maze #3, currRoom 1, prevRoom 2, 71+ zeros, 29 zeros, 10 ones
     => raw: 3, 1, 2, 100 zeros, 10 ones
    
    
*/

function computeExtendedHexa(number)
{
    var retVal = 'computeExtendedHexa ERROR';
    
    if(number < 10)
    {
        retVal = number.toString();
    }
    else if(number < 72)
    {
        retVal = String.fromCharCode(65 + number - 10);
    }
    
    return retVal;
}

function computeCustomRLE(vector)
{
    var i, bit = 0, counter = 0, retVal = '';
    for(i=0;i<vector.length;i++)
    {
        if(vector[i] === bit)
        {
            counter++;
        }
        else
        {
            bit = 1-bit;
            retVal += computeExtendedHexa(counter);
            counter = 1;
        }
        
        if(counter === 72)
        {
            
            retVal += '.';
            counter = 1;
        }
    }
    
    if(counter > 0)
    {
        retVal += computeExtendedHexa(counter);
    }
    
    return retVal;
}

function showMazeState()
{
    var currentState = encodeMazeState();

    showTinyBoxGame(currentState);
}

function encodeMazeState()
{
    var rawbits = solutionTable.concat(solvedRoomPictures);
    
    return MazeID + computeExtendedHexa(prevRoomID) + computeExtendedHexa(currRoomID) + computeCustomRLE(rawbits);   
    
}

function showLoadDialog()
{

}

function decodeMazeState()
{   // unpack state and init maze

    var encodedMazeState, tmpMazeID, tmpCurrRoom, tmpPrevRoom, tmpSolutionValues, tmpSolvedRoomPictures;
    
    tmpMazeID   = decodeExtendedHexa(encodedMazeState[0]);
    tmpCurrRoom = decodeExtendedHexa(encodedMazeState[1]);
    tmpPrevRoom = decodeExtendedHexa(encodedMazeState[2]);
    
    
}