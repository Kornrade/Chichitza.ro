// This file contains the global variables. these have been separated into DYNAMIC and STATIC variables


// DYNAMIC variables (may be changed in functions)

var currwid; // the currently displayed word in the page
var dbReadable  = []; 	// database words in readable format (no special characters), arranged alphabetically
var dbWordList  = []; 	// database words, arranged alphabetically
var dbDefList  = []; 	// database definitions corresponding with the above
var dictSize; // the number of words in the dictionary

// STATIC variables


// DATABASE static variables

var rawDatabaseRO; // raw database for RO
var rawDatabaseEN; // raw database for EN
var rawDatabaseDE; // raw database for DE
