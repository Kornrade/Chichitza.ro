// This file contains the global variables. these have been separated into DYNAMIC and STATIC variables

// DYNAMIC variables (may be changed in functions)

var currqid; // the currently displayed question in the page

var QuizTitle = []; // the quiz title in various languages ( 0 = ro; 1 = en; 2 = de )
var IndexList = []; // the IndexList (question indices)
var QList = []; // the QuestionList
var AType = []; // the AnswerTypeList
var AList = []; // the AnswerList with user answers
var CList = []; // the AnswerList with correct answers in plaintext
var EList = []; // the ExplanationList
var RList = []; // the ReferencesList
var HList = []; // the HintList
var IList    = []; // the ImageList when showing the question
var IListSrc = []; // the ImageList sources  for the question images
var JList    = []; // the ImageList when showing the answer
var JListSrc = []; // the ImageList sources  for the answer images


var htmlResultsPhase = false; // a bool indicating whether the "Show Results" button has been clicked or not
var truthValues; // an array containing the truth values of the answers (0=false, 1=true)

// STATIC variables

var aQcolour = "#FFBB66"; // answered   question colour on the page
var bQcolour = "#FFFFAA"; // unanswered question colour on the page (blank)
var cQcolour = "#AACCEE"; // current    question colour on the page

var rightAnswerColour = "#AAEEAA";
var wrongAnswerColour = "#EEAAAA";
var rightAnswerBgColour = "#AAEEAA"; // background colour for the readonly field when the answer is true
var wrongAnswerBgColour = "#EEAAAA"; // background colour for the readonly field when the answer is false

// DATABASE static variables

var dbQList  = [];   // database questions
var dbAType  = [];   // database answer types (0 = no input accepted; 1 = free text; 2 = numeric)
var dbAList  = [];   // database answer part to be checked
var dbACrit  = [];   // database check criterion for answers (see 2.Database.js head comment)
var dbAnswer = [];   // database correct answers in plaintext
var dbExpln  = [];   // database explanations    associated with each answer
var dbRefer  = [];   // database references      associated with each answer/explanation
var dbQHint  = [];   // database question remark  displayed with each question
var dbQImage = [];   // database question images associated with each question
var dbQImageSrc = [];// database internet source associated with each question image
var dbAImage    = [];// database answer   images associated with each answer
var dbAImageSrc = [];// database internet source associated with each answer   image

// TEST DEFINITIONS:

function initIndexList()
{
    switch(auxparam)
    {
        case  1: IndexList = [100,101,102,103,104,105,106,107,108,109]; 
                    QuizTitle[0] = "Minimix1: ADEV&#x102;RAT sau FALS";
                    QuizTitle[1] = "Minimix1: TRUE or FALSE";
                    QuizTitle[2] = "Minimix1: WAHR oder FALSCH";
                    break;
        case  2: IndexList = [110,111,112,113,114,115,116,117,118,119];
                    QuizTitle[0] = "Minimix2: Siruri";
                    QuizTitle[1] = "Minimix2: Sequences";
                    QuizTitle[2] = "Minimix2: Reihen";
                    break;
        case  3: IndexList = [120,129,121,122,124,123,125,126,127,128];
                    QuizTitle[0] = "Minimix3";
                    QuizTitle[1] = "Minimix3";
                    QuizTitle[2] = "Minimix3";
                    break;
        case  4: IndexList = [130,131,132,133,134,135,136,137,138,139]; 
                    QuizTitle[0] = "Minimix4";
                    QuizTitle[1] = "Minimix4";
                    QuizTitle[2] = "Minimix4";
                    break;
        case  5: IndexList = [140,141,142,143,144,145,146,147,148,149];
                    QuizTitle[0] = "Minimix5";
                    QuizTitle[1] = "Minimix5";
                    QuizTitle[2] = "Minimix5";
                    break;
        case 10: IndexList = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
                    QuizTitle[0] = "Psihochitze";
                    QuizTitle[1] = "Psychoteasers";
                    QuizTitle[2] = "Psychoknobeleien";
                    break;
        case 11: IndexList = [10,11,12,13,14,15,16,17,18,19];
                    QuizTitle[0] = "Sociochitze";
                    QuizTitle[1] = "Socioteasers";
                    QuizTitle[2] = "Sozioknobeleien";
                    break;
        case 12: IndexList = [24,20,21,22,23,25,26,27,28,29];
                    QuizTitle[0] = "Histochitze";
                    QuizTitle[1] = "Histoteasers";
                    QuizTitle[2] = "Histoknobeleien";
                    break;
        case 13: IndexList = [31,30,32,33,34,35,36,37,38,39]; 
                    QuizTitle[0] = "Geochitze";
                    QuizTitle[1] = "Geoteasers";
                    QuizTitle[2] = "Geoknobeleien";
                    break;
        case 14: IndexList = [40,41,42,43,44,45,46,47,48,49];
                    QuizTitle[0] = "Zoochitze";
                    QuizTitle[1] = "Zooteasers";
                    QuizTitle[2] = "Zooknobeleien";
                    break;
        case 15: IndexList = [50,51,52,53,54,55,56,57,58,59];
                    QuizTitle[0] = "Secvenchitze";
                    QuizTitle[1] = "Sequenteasers";
                    QuizTitle[2] = "Sequenknobeleien";
                    break;
        case 16: IndexList = [60,61,62,63,64,65,66,67,68,69]; 
                    QuizTitle[0] = "Matechitze";
                    QuizTitle[1] = "Mathteasers";
                    QuizTitle[2] = "Matheknobeleien";
                    break;
        case 17: IndexList = [70,71,72,73,74,75,76,77,78,79];
                    QuizTitle[0] = "Chemochitze";
                    QuizTitle[1] = "Chemoteasers";
                    QuizTitle[2] = "Chemoknobeleien";
                    break;
        case 18: IndexList = [80,81,82,83,84,85,86,87,88,89];
                    QuizTitle[0] = "Cronochitze";
                    QuizTitle[1] = "Chronoteasers";
                    QuizTitle[2] = "Chronoknobeleien";
                    break;
        case 19: IndexList = [90,91,92,93,94,95,96,97,98,99];
                    QuizTitle[0] = "Astrochitze";
                    QuizTitle[1] = "Astroteasers";
                    QuizTitle[2] = "Astroknobeleien";
                    break;
        default: IndexList = []; break;
    }
}