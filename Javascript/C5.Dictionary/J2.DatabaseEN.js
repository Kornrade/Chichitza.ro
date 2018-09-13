/*--------------------------------------------------\
| This is the dictionary database. 
| Rules for adding a word line:
|	- do NOT add any comments on the word line
|	- the word line must have the form: 
|		<<Word(intelligible)>> <<WordHTML>> <<DefinitionHTML>>
|		* if the line does not have exactly 3 pairs of << and >>, it will be disregarded
|		* quoting characters " must not be present in word definition lines, except in \" groups
|		* last characters "ENDLINE" must be present but will be disregarded for every line
\--------------------------------------------------*/

/*jslint es5: true */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

var rawDatabaseEN = "";