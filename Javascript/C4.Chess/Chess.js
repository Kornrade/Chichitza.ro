/*-----------------------------------------------------------------------------------------------------------*\
| This file contains the chess-related javascript functions.                                                  |     
| The following functions are available:                                                                      |
|       showChessPositionOnHover(n)........... shows position on the board, with title (name) and stipulation |
\*-----------------------------------------------------------------------------------------------------------*/

/*jslint es5: true */

/* GLOBAL VARS USED IN THIS FILE:*/
var lang, auxparam;

/*global PgnViewer */

var currchessfen;
var coauthor;
var currpgn = [];
var currchessinfo = [];

var allstudynames = [];
allstudynames[ 0] = [];
allstudynames[ 0][0] = '...';
allstudynames[ 0][1] = '...';
allstudynames[ 0][2] = '...';
allstudynames[ 1] = [];
allstudynames[ 1][0] = 'Constrictor';
allstudynames[ 1][1] = 'Constrictor';
allstudynames[ 1][2] = 'Constrictor';
allstudynames[ 2] = [];
allstudynames[ 2][0] = 'Oglind&#x103;';
allstudynames[ 2][1] = 'Mirror';
allstudynames[ 2][2] = 'Spiegel';
allstudynames[ 3] = [];
allstudynames[ 3][0] = 'Plimbare';
allstudynames[ 3][1] = 'Walk';
allstudynames[ 3][2] = 'Spaziergang';
allstudynames[ 4] = [];
allstudynames[ 4][0] = 'Ocol';
allstudynames[ 4][1] = 'Detour';
allstudynames[ 4][2] = 'Umweg';
allstudynames[ 5] = [];
allstudynames[ 5][0] = '&#xCE;nc&#x103;p&#x103;&#x21B;&#xE2;nare';
allstudynames[ 5][1] = 'Stubbornness';
allstudynames[ 5][2] = 'Widerspenstigkeit';
allstudynames[ 6] = [];
allstudynames[ 6][0] = 'Schimbarea g&#x103;rzii';
allstudynames[ 6][1] = 'Guard Change';
allstudynames[ 6][2] = 'Wachwechsel';
allstudynames[ 7] = [];
allstudynames[ 7][0] = '...';
allstudynames[ 7][1] = '...';
allstudynames[ 7][2] = '...';
allstudynames[ 8] = [];
allstudynames[ 8][0] = '&#xCE;ncetineal&#x103;';
allstudynames[ 8][1] = 'Sloth';
allstudynames[ 8][2] = 'Faultier';
allstudynames[ 9] = [];
allstudynames[ 9][0] = 'Impas';
allstudynames[ 9][1] = 'Standstill';
allstudynames[ 9][2] = 'Stillstand';
allstudynames[10] = [];
allstudynames[10][0] = 'Ocrotire';
allstudynames[10][1] = 'Shelter';
allstudynames[10][2] = 'Schutz';
allstudynames[11] = [];
allstudynames[11][0] = 'Urm&#x103;rire';
allstudynames[11][1] = 'Chase';
allstudynames[11][2] = 'Verfolgung';
allstudynames[12] = [];
allstudynames[12][0] = 'Rgg1';
allstudynames[12][1] = 'Rgg1';
allstudynames[12][2] = 'Rgg1';
allstudynames[13] = [];
allstudynames[13][0] = 'Scut';
allstudynames[13][1] = 'Shield';
allstudynames[13][2] = 'Schild';

var allstudystips = [];
allstudystips[ 0] = [];
allstudystips[ 0][0] = '...';
allstudystips[ 0][1] = '...';
allstudystips[ 0][2] = '...';
allstudystips[ 1] = [];
allstudystips[ 1][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 1][1] = 'White to move and win';
allstudystips[ 1][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 2] = [];
allstudystips[ 2][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 2][1] = 'White to move and win';
allstudystips[ 2][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 3] = [];
allstudystips[ 3][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 3][1] = 'White to move and win';
allstudystips[ 3][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 4] = [];
allstudystips[ 4][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 4][1] = 'White to move and win';
allstudystips[ 4][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 5] = [];
allstudystips[ 5][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[ 5][1] = 'White to move and draw';
allstudystips[ 5][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[ 6] = [];
allstudystips[ 6][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 6][1] = 'White to move and win';
allstudystips[ 6][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 7] = [];
allstudystips[ 7][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 7][1] = 'White to move and win';
allstudystips[ 7][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 8] = [];
allstudystips[ 8][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 8][1] = 'White to move and win';
allstudystips[ 8][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 9] = [];
allstudystips[ 9][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[ 9][1] = 'White to move and draw';
allstudystips[ 9][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[10] = [];
allstudystips[10][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[10][1] = 'White to move and draw';
allstudystips[10][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[11] = [];
allstudystips[11][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[11][1] = 'White to move and win';
allstudystips[11][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[12] = [];
allstudystips[12][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[12][1] = 'White to move and draw';
allstudystips[12][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[13] = [];
allstudystips[13][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[13][1] = 'White to move and win';
allstudystips[13][2] = 'Wei&szlig; zieht und gewinnt';

function setcurrchessvars(n)
{
    switch(n)
    {	case  1: 
            currchessfen = '[FEN "3k4/2pq3p/pp5R/4P3/P6P/2PN4/1PN3K1/8 w - - 0 1"]';
            coauthor = 'Peter Martan';
            currpgn[0] = '[Event "'+allstudystips[1][0]+'"][Site "Glarean"][Date "10.2009"][Round "'+allstudynames[1][0]+'"][White "Mihai Neghina"][Black "Peter Martan"][Result "1-0"][FEN "3k4/2pq3p/pp5R/4P3/P6P/2PN4/1PN3K1/8 w - - 0 1"] 1. Nd4! Qg7+ 2. Kh3! Qxh6 3. Nf4 Kc8 ( 3... Kd7 4. Nde6 Kc6 ( 4... Qxe6+ 5. Nxe6 Kxe6 6. Kg4 Kxe5 7. Kg5 ) ( 4... b5 5. a5 Kc6 6. h5 b4 7. c4 Kb7 8. Kg4 Kb8 9. Kf5 Kb7 10. Ke4 Kc6 11. b3 Kd7 12. Kd5 ) ( 4... c5 5. Kg3 Kc6 6. h5 a5 7. c4 Kd7 8. Kf3 Kc6 9. Ke4 Kb7 10. Kd5 Ka7 11. Kc6 Ka6 12. Kd6 Kb7 13. Kd7 Ka7 14. Kc7 Ka6 15. Kb8 ) ( 4... a5 5. h5 c6 6. Kg3 Kc8 7. Kf3 Kd7 8. Ke4 Kc8 9. c4 Kb8 10. Kd4 Ka7 11. c5 Ka6 12. Kc4 Ka7 13. cxb6+ Kxb6 14. Kd4 c5+ 15. Kd5 c4 16. Kxc4 Kc6 17. b4 axb4 18. Kxb4 ) 5. h5 b5 6. a5 Kd7 7. Kg3 c6 8. Kf3 Kc8 9. Ke4 ) 4. Nde6 Kb7 5. h5 c5 ( 5... c6 6. Kg3 Kc8 7. Kf3 Kb8 8. Ke4 a5 ( 8... Kb7 9. c4 Kb8 10. b4 Kc8 11. Kd4 Kb8 12. b5 Kb7 13. Ke4 a5 14. Kd4 cxb5 15. cxb5 Kc8 16. Ke4 Kb8 17. Kd5 Kb7 18. Kd6 ) 9. c4 Kc8 ( 9... Ka7 10. c5 bxc5 11. Kd3 Kb8 12. Kc4 Kc8 13. Kxc5 ) 10. Kd4 Kb7 11. c5 Ka7 12. Kc4 Ka6 13. cxb6 Kxb6 14. Kd4 c5+ 15. Kd5 ) ( 5... Kc6 6. Kg3 b5 7. a5 b4 8. c4 b3 9. Kf3 Kb7 10. Ke4 Kc8 11. Kd4 ) ( 5... a5 6. Kg4 Kc6 7. c4 Kb7 8. Kf5 c6 9. Ke4 b5 10. axb5 cxb5 11. c5 Kc6 12. Kd4 a4 13. Kc3 ) 6. Kg4 c4 ( 6... Kc6 7. Kf3 b5 ( 7... a5 8. c4 ) ( 7... Kd7 8. Ke3 Kc6 9. Ke4 ) 8. a5 c4 9. Ke4 b4 10. Kd4 Kb5 11. Kd5 bxc3 12. bxc3 Kxa5 13. Kxc4 ) ( 6... Kc6 7. Kf3 ) 7. Kf5 Kc6 8. Ke4 b5 9. axb5+ axb5 ( 9... Kxb5 10. Kd4 a5 11. Kd5 a4 12. Kd4 Kc6 13. Kxc4 ) 10. Kd4 Kb6 11. Kd5 Ka5 12. Kc5 Ka6 13. Kc6 Ka5 14. Kb7 b4 15. Kc6 bxc3 16. bxc3 Ka4 17. Kc5 Kb3 18. Kd4 Kc2 19. Kxc4 ';
            currpgn[1] = '[Event "'+allstudystips[1][1]+'"][Site "Glarean"][Date "10.2009"][Round "'+allstudynames[1][1]+'"][White "Mihai Neghina"][Black "Peter Martan"][Result "1-0"][FEN "3k4/2pq3p/pp5R/4P3/P6P/2PN4/1PN3K1/8 w - - 0 1"] 1. Nd4! Qg7+ 2. Kh3! Qxh6 3. Nf4 Kc8 ( 3... Kd7 4. Nde6 Kc6 ( 4... Qxe6+ 5. Nxe6 Kxe6 6. Kg4 Kxe5 7. Kg5 ) ( 4... b5 5. a5 Kc6 6. h5 b4 7. c4 Kb7 8. Kg4 Kb8 9. Kf5 Kb7 10. Ke4 Kc6 11. b3 Kd7 12. Kd5 ) ( 4... c5 5. Kg3 Kc6 6. h5 a5 7. c4 Kd7 8. Kf3 Kc6 9. Ke4 Kb7 10. Kd5 Ka7 11. Kc6 Ka6 12. Kd6 Kb7 13. Kd7 Ka7 14. Kc7 Ka6 15. Kb8 ) ( 4... a5 5. h5 c6 6. Kg3 Kc8 7. Kf3 Kd7 8. Ke4 Kc8 9. c4 Kb8 10. Kd4 Ka7 11. c5 Ka6 12. Kc4 Ka7 13. cxb6+ Kxb6 14. Kd4 c5+ 15. Kd5 c4 16. Kxc4 Kc6 17. b4 axb4 18. Kxb4 ) 5. h5 b5 6. a5 Kd7 7. Kg3 c6 8. Kf3 Kc8 9. Ke4 ) 4. Nde6 Kb7 5. h5 c5 ( 5... c6 6. Kg3 Kc8 7. Kf3 Kb8 8. Ke4 a5 ( 8... Kb7 9. c4 Kb8 10. b4 Kc8 11. Kd4 Kb8 12. b5 Kb7 13. Ke4 a5 14. Kd4 cxb5 15. cxb5 Kc8 16. Ke4 Kb8 17. Kd5 Kb7 18. Kd6 ) 9. c4 Kc8 ( 9... Ka7 10. c5 bxc5 11. Kd3 Kb8 12. Kc4 Kc8 13. Kxc5 ) 10. Kd4 Kb7 11. c5 Ka7 12. Kc4 Ka6 13. cxb6 Kxb6 14. Kd4 c5+ 15. Kd5 ) ( 5... Kc6 6. Kg3 b5 7. a5 b4 8. c4 b3 9. Kf3 Kb7 10. Ke4 Kc8 11. Kd4 ) ( 5... a5 6. Kg4 Kc6 7. c4 Kb7 8. Kf5 c6 9. Ke4 b5 10. axb5 cxb5 11. c5 Kc6 12. Kd4 a4 13. Kc3 ) 6. Kg4 c4 ( 6... Kc6 7. Kf3 b5 ( 7... a5 8. c4 ) ( 7... Kd7 8. Ke3 Kc6 9. Ke4 ) 8. a5 c4 9. Ke4 b4 10. Kd4 Kb5 11. Kd5 bxc3 12. bxc3 Kxa5 13. Kxc4 ) ( 6... Kc6 7. Kf3 ) 7. Kf5 Kc6 8. Ke4 b5 9. axb5+ axb5 ( 9... Kxb5 10. Kd4 a5 11. Kd5 a4 12. Kd4 Kc6 13. Kxc4 ) 10. Kd4 Kb6 11. Kd5 Ka5 12. Kc5 Ka6 13. Kc6 Ka5 14. Kb7 b4 15. Kc6 bxc3 16. bxc3 Ka4 17. Kc5 Kb3 18. Kd4 Kc2 19. Kxc4 ';
            currpgn[2] = '[Event "'+allstudystips[1][2]+'"][Site "Glarean"][Date "10.2009"][Round "'+allstudynames[1][2]+'"][White "Mihai Neghina"][Black "Peter Martan"][Result "1-0"][FEN "3k4/2pq3p/pp5R/4P3/P6P/2PN4/1PN3K1/8 w - - 0 1"] 1. Nd4! Qg7+ 2. Kh3! Qxh6 3. Nf4 Kc8 ( 3... Kd7 4. Nde6 Kc6 ( 4... Qxe6+ 5. Nxe6 Kxe6 6. Kg4 Kxe5 7. Kg5 ) ( 4... b5 5. a5 Kc6 6. h5 b4 7. c4 Kb7 8. Kg4 Kb8 9. Kf5 Kb7 10. Ke4 Kc6 11. b3 Kd7 12. Kd5 ) ( 4... c5 5. Kg3 Kc6 6. h5 a5 7. c4 Kd7 8. Kf3 Kc6 9. Ke4 Kb7 10. Kd5 Ka7 11. Kc6 Ka6 12. Kd6 Kb7 13. Kd7 Ka7 14. Kc7 Ka6 15. Kb8 ) ( 4... a5 5. h5 c6 6. Kg3 Kc8 7. Kf3 Kd7 8. Ke4 Kc8 9. c4 Kb8 10. Kd4 Ka7 11. c5 Ka6 12. Kc4 Ka7 13. cxb6+ Kxb6 14. Kd4 c5+ 15. Kd5 c4 16. Kxc4 Kc6 17. b4 axb4 18. Kxb4 ) 5. h5 b5 6. a5 Kd7 7. Kg3 c6 8. Kf3 Kc8 9. Ke4 ) 4. Nde6 Kb7 5. h5 c5 ( 5... c6 6. Kg3 Kc8 7. Kf3 Kb8 8. Ke4 a5 ( 8... Kb7 9. c4 Kb8 10. b4 Kc8 11. Kd4 Kb8 12. b5 Kb7 13. Ke4 a5 14. Kd4 cxb5 15. cxb5 Kc8 16. Ke4 Kb8 17. Kd5 Kb7 18. Kd6 ) 9. c4 Kc8 ( 9... Ka7 10. c5 bxc5 11. Kd3 Kb8 12. Kc4 Kc8 13. Kxc5 ) 10. Kd4 Kb7 11. c5 Ka7 12. Kc4 Ka6 13. cxb6 Kxb6 14. Kd4 c5+ 15. Kd5 ) ( 5... Kc6 6. Kg3 b5 7. a5 b4 8. c4 b3 9. Kf3 Kb7 10. Ke4 Kc8 11. Kd4 ) ( 5... a5 6. Kg4 Kc6 7. c4 Kb7 8. Kf5 c6 9. Ke4 b5 10. axb5 cxb5 11. c5 Kc6 12. Kd4 a4 13. Kc3 ) 6. Kg4 c4 ( 6... Kc6 7. Kf3 b5 ( 7... a5 8. c4 ) ( 7... Kd7 8. Ke3 Kc6 9. Ke4 ) 8. a5 c4 9. Ke4 b4 10. Kd4 Kb5 11. Kd5 bxc3 12. bxc3 Kxa5 13. Kxc4 ) ( 6... Kc6 7. Kf3 ) 7. Kf5 Kc6 8. Ke4 b5 9. axb5+ axb5 ( 9... Kxb5 10. Kd4 a5 11. Kd5 a4 12. Kd4 Kc6 13. Kxc4 ) 10. Kd4 Kb6 11. Kd5 Ka5 12. Kc5 Ka6 13. Kc6 Ka5 14. Kb7 b4 15. Kc6 bxc3 16. bxc3 Ka4 17. Kc5 Kb3 18. Kd4 Kc2 19. Kxc4 ';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(11);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Versiunea final&#x103; publicat&#x103; &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(12);">Glarean</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(13);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Povestea studiului publicat&#x103; &#xEE;n cartea lui G. Josten <a href="javascript:void(0);" onClick="openChessObject(14);">A Study Apiece</a>\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(15);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Versiunea ini&#x21B;ial&#x103; publicat&#x103; &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(17);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul revistei <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> [2009]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(11);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Final version published in <a href="javascript:void(0);" onClick="openChessObject(12);">Glarean</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(13);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Story of the study published in G. Josten\'s book <a href="javascript:void(0);" onClick="openChessObject(14);">A Study Apiece</a>\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(15);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Initial (cooked) version published in <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(17);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Awarded an honorable mention in <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> Informal Tourney 2009\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(11);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Endversion in <a href="javascript:void(0);" onClick="openChessObject(12);">Glarean</a> Magazin ver&ouml;ffentlicht [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(13);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Geschichte der Studie in G. Jostens buch <a href="javascript:void(0);" onClick="openChessObject(14);">A Study Apiece</a> ver&ouml;ffentlicht\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(15);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erstversion (cooked) in <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> ver&ouml;ffentlicht [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(17);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> Informal Tourney 2009 gewonnen\
                        ';
            break;
            
        case  2: 
            currchessfen = '[FEN "6Nk/pp2Np1p/2p2Pp1/2R2bP1/7K/P7/1q1n1Q2/5n2 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[2][0]+'"][Site "Glarean"][Date "12.2009"][Round "'+allstudynames[2][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "6Nk/pp2Np1p/2p2Pp1/2R2bP1/7K/P7/1q1n1Q2/5n2 w - - 0 1"] 1. Rxf5 {Amenintarea: 1.-- Nf3+ 2.Qxf3 Qh2+ 3.Qh3 Qxh3#} (1. Nxf5? Nf3+ 2. Qxf3 (2. Kg4?? Qxf2{Negrul castiga}) 2... Qh2+ 3. Qh3 Qf4+ 4. Qg4 Qh2+{remiza}) 1... gxf5 2. Nh6 {amenintand Nxf7#} (2. Nxf5?? Qc1 3. Qf4 (3. Ngh6 Ne4 4. Qf3 Qxg5+ 5. Kh3 Nfd2 {Negrul castiga}) 3... Qe1+ 4. Kh3 Qe4 5. Qxe4 Nxe4 6. Ngh6 Nxg5+ {Negrul castiga}) 2... Nf3+ {Zwichenzug} 3. Kh5! (3. Qxf3? Qh2+ 4. Qh3 Qf2+ 5. Kh5 Qe2+ 6. Kh4{remiza}) 3... Qa2 {Damele se ataca reciproc, insa niciuna nu poate captura ceva fara sa permita matul advers. Negrul are doar mutari de pion, in timp ce Albul poate muta Qf7<->Qg7} 4. a4{Apararea pasiva 4.Qg2 ar putea functiona...} (4. Qg2 b5 5. Qf2 a5 6. Qg2 b4 7. axb4 a4 8. b5 cxb5 {transpunere la varianta principala}) 4... a5 (4... b6 5. Qg2 a6 6. Qf2 b5 7. a5! {Pionul a este vital pentru varianta aceasta} b4 8. Qg2 Qc4 9. Qxf3 Ng3+ 10. Qxg3 Qe2+ 11. Kh4 Qe4+ 12. Kh3 Qh1+ 13. Qh2 Qf3+ 14. Kh4 Qe4+ 15. Kh5 Qf3+ 16. Ng4 Qxg4+ 17. Kh6 f4 18. Qh1 b3 19. Nxc6 f3 20. Ne5 Qf5 21. Qxf3 Qxf3 22. Nxf3 b2 23. Nd2 Kg8 24. Nb1 {tempo} Kh8 25. Kh5 Kg8 26. Kg4 Kf8 27. Kf5 Ke8 28. Ke5 Kd7 29. Kd5 Kc7 30. Kc5{Albul castiga}) 5. Qg2 b6 6. Qf2 b5 7. axb5 (7. Qg2{Comparativ cu varianta principala, diagonala a8-h1 inca este blocata} bxa4 8. Qf2 a3 9. Qg2 Qc4 10. Qxf3 Ng3+ 11. Qxg3 Qe2+ 12. Kh4 Qe4+ 13. Kh3 Qh1+ 14. Qh2 Qf3+ 15. Kh4 Qe4+ 16. Kh5 Qf3+ 17. Kh4{remiza} (17. Ng4?? Qxg4+ 18. Kh6 f4 19. Nxc6 a2{Negrul castiga})) 7... cxb5 8. Qg2 a4 9. Qf2 a3 10. Qg2 b4 11. Qf2 {zugzwang adevarat} Qb3 (11... Qc4 12. Qxf3 {Albul castiga}) 12. Qxf1 Nd2 13. Qg2 {ameninta Qa8#} Ne4 14. Nhxf5 a2 15. Qxe4 a1=Q {apara campul a8} 16. Kh6! {evita Qd1+} (16. Nh4?? Qe6 17. Qb7 Qd1+ 18. Kh6 Qd8 {winning for Black}) 16... Qh3+ (16... Qe6 17. Qb7 Qc3 18. Qb8+ Qec8 19. Qxc8+ Qxc8 20. Nxc8{Albul castiga}) 17. Nh4 {ameninta Ng6 - Qe8#} Qxh4+ 18. Qxh4 {Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[2][1]+'"][Site "Glarean"][Date "12.2009"][Round "'+allstudynames[2][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "6Nk/pp2Np1p/2p2Pp1/2R2bP1/7K/P7/1q1n1Q2/5n2 w - - 0 1"] 1. Rxf5 {The threat was 1.-- Nf3+ 2.Qxf3 Qh2+ 3.Qh3 Qxh3#} (1. Nxf5? Nf3+ 2. Qxf3 (2. Kg4?? Qxf2{winning for Black}) 2... Qh2+ 3. Qh3 Qf4+ 4. Qg4 Qh2+{draw}) 1... gxf5 2. Nh6 {Threatening Nxf7#} (2. Nxf5?? Qc1 3. Qf4 (3. Ngh6 Ne4 4. Qf3 Qxg5+ 5. Kh3 Nfd2 {winning for Black}) 3... Qe1+ 4. Kh3 Qe4 5. Qxe4 Nxe4 6. Ngh6 Nxg5+ {winning for Black}) 2... Nf3+ {Zwichenzug} 3. Kh5! (3. Qxf3? Qh2+ 4. Qh3 Qf2+ 5. Kh5 Qe2+ 6. Kh4{draw}) 3... Qa2 {Queens attack each other, but neither can capture anything without allowing mate. Black only has pawn moves, while White can shuffle Qf7<>Qg7 indefinitely} 4. a4{Passive defense 4.Qg2 may also work} (4. Qg2 b5 5. Qf2 a5 6. Qg2 b4 7. axb4 a4 8. b5 cxb5 {transposing to mainline}) 4... a5 (4... b6 5. Qg2 a6 6. Qf2 b5 7. a5! {The a-pawn must stay alive in this variation, it is vital for winning the game} b4 8. Qg2 Qc4 9. Qxf3 Ng3+ 10. Qxg3 Qe2+ 11. Kh4 Qe4+ 12. Kh3 Qh1+ 13. Qh2 Qf3+ 14. Kh4 Qe4+ 15. Kh5 Qf3+ 16. Ng4 Qxg4+ 17. Kh6 f4 18. Qh1 b3 19. Nxc6 f3 20. Ne5 Qf5 21. Qxf3 Qxf3 22. Nxf3 b2 23. Nd2 Kg8 24. Nb1 {temporizing} Kh8 25. Kh5 Kg8 26. Kg4 Kf8 27. Kf5 Ke8 28. Ke5 Kd7 29. Kd5 Kc7 30. Kc5{winning for White}) 5. Qg2 b6 6. Qf2 b5 7. axb5 (7. Qg2{Compared to the mainline, the long diagonal a8-h1 is still blocked, which is extremely important} bxa4 8. Qf2 a3 9. Qg2 Qc4 10. Qxf3 Ng3+ 11. Qxg3 Qe2+ 12. Kh4 Qe4+ 13. Kh3 Qh1+ 14. Qh2 Qf3+ 15. Kh4 Qe4+ 16. Kh5 Qf3+ 17. Kh4{draw} (17. Ng4?? Qxg4+ 18. Kh6 f4 19. Nxc6 a2{winning for Black})) 7... cxb5 8. Qg2 a4 9. Qf2 a3 10. Qg2 b4 11. Qf2 {Finally, true zugzwang for Black} Qb3 (11... Qc4 12. Qxf3 {winning for White}) 12. Qxf1 Nd2 13. Qg2 {threatens Qa8#} Ne4 14. Nhxf5 a2 15. Qxe4 a1=Q {defends a8} 16. Kh6! {thwarts the Qd1+ resource} (16. Nh4?? Qe6 17. Qb7 Qd1+ 18. Kh6 Qd8 {winning for Black}) 16... Qh3+ (16... Qe6 17. Qb7 Qc3 18. Qb8+ Qec8 19. Qxc8+ Qxc8 20. Nxc8{winning for White}) 17. Nh4 {threatens Ng6 - Qe8#} Qxh4+ 18. Qxh4 {winning for White}';
            currpgn[2] = '[Event "'+allstudystips[2][2]+'"][Site "Glarean"][Date "12.2009"][Round "'+allstudynames[2][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "6Nk/pp2Np1p/2p2Pp1/2R2bP1/7K/P7/1q1n1Q2/5n2 w - - 0 1"] 1. Rxf5 {Die Drohung war 1.-- Nf3+ 2.Qxf3 Qh2+ 3.Qh3 Qxh3#} (1. Nxf5? Nf3+ 2. Qxf3 (2. Kg4?? Qxf2{Schwarz gewinnt}) 2... Qh2+ 3. Qh3 Qf4+ 4. Qg4 Qh2+{Remis}) 1... gxf5 2. Nh6 {drohend Nxf7#} (2. Nxf5?? Qc1 3. Qf4 (3. Ngh6 Ne4 4. Qf3 Qxg5+ 5. Kh3 Nfd2 {Schwarz gewinnt}) 3... Qe1+ 4. Kh3 Qe4 5. Qxe4 Nxe4 6. Ngh6 Nxg5+ {Schwarz gewinnt}) 2... Nf3+ {Zwichenzug} 3. Kh5! (3. Qxf3? Qh2+ 4. Qh3 Qf2+ 5. Kh5 Qe2+ 6. Kh4{Remis}) 3... Qa2 {Die Damen greifen einander an, aber keine kann irgend etwas schlagen ohne Matt zuzulassen. Fast gegenseitiger Zugzwang: Schwarz hat nur Bauernzüge, Weiß hat nur Df7<->g7, während der weiße Bauer Wache hält.} 4. a4{Passive Verteidigung 4.Qg2 könnte auch funktionieren...} (4. Qg2 b5 5. Qf2 a5 6. Qg2 b4 7. axb4 a4 8. b5 cxb5 {zurück zur Hauptvariante}) 4... a5 (4... b6 5. Qg2 a6 6. Qf2 b5 7. a5! {Der a-Bauer ist in dieser Variante entscheidend} b4 8. Qg2 Qc4 9. Qxf3 Ng3+ 10. Qxg3 Qe2+ 11. Kh4 Qe4+ 12. Kh3 Qh1+ 13. Qh2 Qf3+ 14. Kh4 Qe4+ 15. Kh5 Qf3+ 16. Ng4 Qxg4+ 17. Kh6 f4 18. Qh1 b3 19. Nxc6 f3 20. Ne5 Qf5 21. Qxf3 Qxf3 22. Nxf3 b2 23. Nd2 Kg8 24. Nb1 {Wartezug} Kh8 25. Kh5 Kg8 26. Kg4 Kf8 27. Kf5 Ke8 28. Ke5 Kd7 29. Kd5 Kc7 30. Kc5{Weiß gewinnt}) 5. Qg2 b6 6. Qf2 b5 7. axb5 (7. Qg2{Im Vergleich zur Hauptvariante, ist die a8-h1 Diagonale immer noch gesperrt} bxa4 8. Qf2 a3 9. Qg2 Qc4 10. Qxf3 Ng3+ 11. Qxg3 Qe2+ 12. Kh4 Qe4+ 13. Kh3 Qh1+ 14. Qh2 Qf3+ 15. Kh4 Qe4+ 16. Kh5 Qf3+ 17. Kh4{Remis} (17. Ng4?? Qxg4+ 18. Kh6 f4 19. Nxc6 a2{winning for Black})) 7... cxb5 8. Qg2 a4 9. Qf2 a3 10. Qg2 b4 11. Qf2 {Endlich, wahrer Zugzwang für Schwarz} Qb3 (11... Qc4 12. Qxf3 {Weiß gewinnt}) 12. Qxf1 Nd2 13. Qg2 {droht Qa8#} Ne4 14. Nhxf5 a2 15. Qxe4 a1=Q {verteidigt a8} 16. Kh6! {vermeidet Qd1+} (16. Nh4?? Qe6 17. Qb7 Qd1+ 18. Kh6 Qd8 {Schwarz gewinnt}) 16... Qh3+ (16... Qe6 17. Qb7 Qc3 18. Qb8+ Qec8 19. Qxc8+ Qxc8 20. Nxc8{Weiß gewinnt}) 17. Nh4 {droht Ng6 - Qe8#} Qxh4+ 18. Qxh4 {Weiß gewinnt}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(21);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(22);">Glarean</a> [2009]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(21);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(22);">Glarean</a> [2009]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(21);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(22);">Glarean</a> [2009]\
                        ';
            break;
            
        case  3: 
            currchessfen = '[FEN "5B1q/3N3p/p3p2p/7k/B7/5PP1/K6P/8 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[3][0]+'"][Site "Glarean"][Date "07.2010"][Round "'+allstudynames[3][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "5B1q/3N3p/p3p2p/7k/B7/5PP1/K6P/8 w - - 0 1"] 1. Ne5 Qxf8 (1... Qxe5 2. Be8+ Kg5 3. f4+ {Albul castiga}) 2. f4 (2. Bc6? Kg5 3. h4+ Kf5 4. Nd7 Qb4 5. Be4+ Qxe4 6. fxe4+ Kxe4 {remiza}) 2... Qd8 {aparand atat e8 cat si d1} 3. Bc6 (3. Bd7? {nebunul nu acopera campul d5} Qa5+ 4. Kb3 Qd5+ {remiza, deoarece regele nu poate avansa}) (3. Bc2? Qa5+ 4. Kb2 Qb5+ 5. Kc1 Qc5 6. Kd2 Qa5+ 7. Ke3 Qc5+ {remiza deoarece regele nici nu poate abandona nebunul, nici nu-l poate ajuta sa ajunga la d1}) (3. Kb2? {sau 6.Ka3 sau 6.Kb3} Qb6+ 4. Kc3 Qa5+ 5. Kb3 Qd5+ 6. Ka3 Qc5+ 7. Ka2 Qd5+ {remiza deoarece regele nici nu poate abandona nebunul, nici nu-l poate ajuta sa ajunga la d1}) 3... Qd2+ 4. Kb3 Qe3+ 5. Kc4 Qc1+ 6. Kb4 Qb2+ 7. Kc5 Qa3+ 8. Kb6 Qd6 9. Kb7 ({Pionul negru din a nu trebuie luat in nici o varianta.} 9. Kxa6? Qa3+ 10. Kb7 Qa7+ 11. Kc8 Qc7+ 12. Kxc7 {Stalemate}) 9... Qe7+ 10. Kc8 Qf8+ 11. Kd7 Qg7+ 12. Kd8 {Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[3][1]+'"][Site "Glarean"][Date "07.2010"][Round "'+allstudynames[3][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "5B1q/3N3p/p3p2p/7k/B7/5PP1/K6P/8 w - - 0 1"] 1. Ne5 Qxf8 (1... Qxe5 2. Be8+ Kg5 3. f4+ {winning for White}) 2. f4 (2. Bc6? Kg5 3. h4+ Kf5 4. Nd7 Qb4 5. Be4+ Qxe4 6. fxe4+ Kxe4 {draw}) 2... Qd8 {covering both e8 and d1} 3. Bc6 (3. Bd7? {the bishop does not cover the important d5 square} Qa5+ 4. Kb3 Qd5+ {draw because the king cannot advance to the 5th row and beyond}) (3. Bc2? Qa5+ 4. Kb2 Qb5+ 5. Kc1 Qc5 6. Kd2 Qa5+ 7. Ke3 Qc5+ {draw by perpetual,because the king can neither abandon the bishop, nor drive it to d1}) (3. Kb2? {Also similar for 6.Ka3 and 6.Kb3} Qb6+ 4. Kc3 Qa5+ 5. Kb3 Qd5+ 6. Ka3 Qc5+ 7. Ka2 Qd5+ {draw by perpetual check, because the king can neither abandon the bishop, nor drive it to d1}) 3... Qd2+ 4. Kb3 Qe3+ 5. Kc4 Qc1+ 6. Kb4 Qb2+ 7. Kc5 Qa3+ 8. Kb6 Qd6 9. Kb7 ({The black a-pawn is the crucial piece that prevents a rambling queen, and therefore should not be taken in any variation.} 9. Kxa6? Qa3+ 10. Kb7 Qa7+ 11. Kc8 Qc7+ 12. Kxc7 {Stalemate}) 9... Qe7+ 10. Kc8 Qf8+ 11. Kd7 Qg7+ 12. Kd8 {winning for White}';
            currpgn[2] = '[Event "'+allstudystips[3][2]+'"][Site "Glarean"][Date "07.2010"][Round "'+allstudynames[3][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "5B1q/3N3p/p3p2p/7k/B7/5PP1/K6P/8 w - - 0 1"] 1. Ne5 Qxf8 (1... Qxe5 2. Be8+ Kg5 3. f4+ {Weiß gewinnt}) 2. f4 (2. Bc6? Kg5 3. h4+ Kf5 4. Nd7 Qb4 5. Be4+ Qxe4 6. fxe4+ Kxe4 {draw}) 2... Qd8 {verteidigt beide Felder e8 und d1} 3. Bc6 (3. Bd7? {der Läufer verteidigt d5 nicht} Qa5+ 4. Kb3 Qd5+ {Remis, denn der König cann nicht über die 5. Linie gehen}) (3. Bc2? Qa5+ 4. Kb2 Qb5+ 5. Kc1 Qc5 6. Kd2 Qa5+ 7. Ke3 Qc5+ {Remis, denn der König kann weder den Läufer verlassen, noch es zu d1 führen}) (3. Kb2? {oder 6.Ka3 oder 6.Kb3} Qb6+ 4. Kc3 Qa5+ 5. Kb3 Qd5+ 6. Ka3 Qc5+ 7. Ka2 Qd5+ {Remis, denn der König kann weder den Läufer verlassen, noch es zu d1 führen}) 3... Qd2+ 4. Kb3 Qe3+ 5. Kc4 Qc1+ 6. Kb4 Qb2+ 7. Kc5 Qa3+ 8. Kb6 Qd6 9. Kb7 ({Der a-Bauer muss stehen bleiben um Patt zu vermeiden.} 9. Kxa6? Qa3+ 10. Kb7 Qa7+ 11. Kc8 Qc7+ 12. Kxc7 {Patt}) 9... Qe7+ 10. Kc8 Qf8+ 11. Kd7 Qg7+ 12. Kd8 {Weiß gewinnt}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(31);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(32);">Glarean</a> [2010]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(31);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(32);">Glarean</a> [2010]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(31);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(32);">Glarean</a> [2010]\
                        ';
            break;
            
        case  4: 
            currchessfen = '[FEN "7q/b1p5/1p1Npkb1/pPP2ppP/P1P5/3B2P1/5P1R/K3R3 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[4][0]+'"][Site "Euxinus Pontus"][Date "09.2010"][Round "'+allstudynames[4][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "7q/b1p5/1p1Npkb1/pPP2ppP/P1P5/3B2P1/5P1R/K3R3 w - - 0 1"] 1. hxg6! (1. Nb7? Ke7+ 2. Ka2 Qc3 {remiza}) 1... Qxh2 2. Rxe6+! {dublu-sacrificiu de tura} Kxe6 3. g7 Qh1+ (3... Qh7 4. Bxf5+ {Albul castiga}) 4. Kb2 Qa8 5. Bxf5+ Kf6 6. Nc8 Kxg7 (6... Qxc8 7. Bxc8 Kxg7 8. c6 {Albul castiga}) 7. c6 Kf6 8. Bd7 Ke5 9. f3 Qb8 10. Kc3 Qa8 11. Kd3 Qb8 12. Ke3 Qa8 13. f4+ (13. Kf2 Qb8 14. Kg2 Qa8 15. Kh3 Qb8 16. Kg4 Kf6 17. f4 gxf4 18. Kxf4? {18.gxf4 transpozitie la varianta principala} Qa8 19. g4 Qb8 20. g5+ Kg6 21. Bf5+ Kg7 {si regele alb nu poate ajunge la d7 fara a trece prin e6, astfel ca ramane calul fara aparare}) 13... gxf4+ 14. gxf4+ Kf6 15. Kf3 Qb8 16. Kg4 Kg6 17. f5+ Kf6 (17... Kh6 18. Kf4 Kg7 19. Ke5 {Albul castiga}) 18. Kh5 Qa8 19. Kh6 Qb8 20. Kh7 Kf7 21. Be6+ Kf6 ( 21... Kf8 22. Kg6 {Albul castiga}) 22. Kg8 Qa8 23. Kf8 Qb8 24. Ke8 Qa8 25. Kd8 Qb8 26. Kd7';
            currpgn[1] = '[Event "'+allstudystips[4][1]+'"][Site "Euxinus Pontus"][Date "09.2010"][Round "'+allstudynames[4][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "7q/b1p5/1p1Npkb1/pPP2ppP/P1P5/3B2P1/5P1R/K3R3 w - - 0 1"] 1. hxg6! (1. Nb7? Ke7+ 2. Ka2 Qc3 {draw}) 1... Qxh2 2. Rxe6+! {double rook sacrifice} Kxe6 3. g7 Qh1+ (3... Qh7 4. Bxf5+ {winning for White}) 4. Kb2 Qa8 5. Bxf5+ Kf6 6. Nc8 Kxg7 (6... Qxc8 7. Bxc8 Kxg7 8. c6 {winning for White}) 7. c6 Kf6 8. Bd7 Ke5 9. f3 Qb8 10. Kc3 Qa8 11. Kd3 Qb8 12. Ke3 Qa8 13. f4+ (13. Kf2 Qb8 14. Kg2 Qa8 15. Kh3 Qb8 16. Kg4 Kf6 17. f4 gxf4 18. Kxf4? {18.gxf4 transposes to the mainline} Qa8 19. g4 Qb8 20. g5+ Kg6 21. Bf5+ Kg7 {and the white king cannot reach d7 without passing through e6, thus leaving the knight undefended}) 13... gxf4+ 14. gxf4+ Kf6 15. Kf3 Qb8 16. Kg4 Kg6 17. f5+ Kf6 (17... Kh6 18. Kf4 Kg7 19. Ke5 {winning for White}) 18. Kh5 Qa8 19. Kh6 Qb8 20. Kh7 Kf7 21. Be6+ Kf6 ( 21... Kf8 22. Kg6 {winning for White}) 22. Kg8 Qa8 23. Kf8 Qb8 24. Ke8 Qa8 25. Kd8 Qb8 26. Kd7';
            currpgn[2] = '[Event "'+allstudystips[4][2]+'"][Site "Euxinus Pontus"][Date "09.2010"][Round "'+allstudynames[4][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "7q/b1p5/1p1Npkb1/pPP2ppP/P1P5/3B2P1/5P1R/K3R3 w - - 0 1"] 1. hxg6! (1. Nb7? Ke7+ 2. Ka2 Qc3 {draw}) 1... Qxh2 2. Rxe6+! {doppel-Turm Opfer} Kxe6 3. g7 Qh1+ (3... Qh7 4. Bxf5+ {Weiß gewinnt}) 4. Kb2 Qa8 5. Bxf5+ Kf6 6. Nc8 Kxg7 (6... Qxc8 7. Bxc8 Kxg7 8. c6 {Weiß gewinnt}) 7. c6 Kf6 8. Bd7 Ke5 9. f3 Qb8 10. Kc3 Qa8 11. Kd3 Qb8 12. Ke3 Qa8 13. f4+ (13. Kf2 Qb8 14. Kg2 Qa8 15. Kh3 Qb8 16. Kg4 Kf6 17. f4 gxf4 18. Kxf4? {18.gxf4 transposes to the mainline} Qa8 19. g4 Qb8 20. g5+ Kg6 21. Bf5+ Kg7 {und der König kann nicht d7 erreichen, ohne dass er zuvor durch e6 tritt und den Springer unverteidigt lässt}) 13... gxf4+ 14. gxf4+ Kf6 15. Kf3 Qb8 16. Kg4 Kg6 17. f5+ Kf6 (17... Kh6 18. Kf4 Kg7 19. Ke5 {Weiß gewinnt}) 18. Kh5 Qa8 19. Kh6 Qb8 20. Kh7 Kf7 21. Be6+ Kf6 ( 21... Kf8 22. Kg6 {Weiß gewinnt}) 22. Kg8 Qa8 23. Kf8 Qb8 24. Ke8 Qa8 25. Kd8 Qb8 26. Kd7';
            currchessinfo[0] = 'Publicat &#xEE;n Euxinus Pontus [2010]';
            currchessinfo[1] = 'Published in Euxinus Pontus [2010]';
            currchessinfo[2] = 'Ver&ouml;ffentlicht in Euxinus Pontus [2010]';
            break;
            
        case  5: 
            currchessfen = '[FEN "8/b4kp1/2p1p3/5pB1/p1PP4/1p6/3K1P2/3N4 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[5][0]+'"][Site "Glarean"][Date "03.2011"][Round "'+allstudynames[5][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "8/b4kp1/2p1p3/5pB1/p1PP4/1p6/3K1P2/3N4 w - - 0 1"] 1. Kc3! (1. c5 a3 2. Kc3 a2 3. Kb2 e5 4. dxe5 Bxc5 5. Bd2 Bd4+ 6. Bc3 c5 {Negrul castiga})(1. Kd3 e5 {Negrul castiga})(1. Be3 f4 {Negrul castiga}) 1... Bxd4+ {momeala pentru rege} 2. Kxd4 (2. Kb4 b2 3. Nxb2 Bxb2 {Negrul castiga}) 2... b2 {sacrifica un pion pentru a-l promova pe celalalt} 3. Nxb2 {regele inca este in patratul pionului, insa acum calul ii sta in drum...} a3 4. Nd3 {Albul nu poate face nimic sa impiedice promovarea, asa ca aranjeaza o aparare tenace} a2 5. Ne5+ Ke8 6. f4 {Toate piesele sunt aparate, iar regele negru este inchis in jurul h8... regina nu poate da mat singura.}';
            currpgn[1] = '[Event "'+allstudystips[5][1]+'"][Site "Glarean"][Date "03.2011"][Round "'+allstudynames[5][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "8/b4kp1/2p1p3/5pB1/p1PP4/1p6/3K1P2/3N4 w - - 0 1"] 1. Kc3! (1. c5 a3 2. Kc3 a2 3. Kb2 e5 4. dxe5 Bxc5 5. Bd2 Bd4+ 6. Bc3 c5 {winning for Black})(1. Kd3 e5 {winning for Black})(1. Be3 f4 {winning for Black}) 1... Bxd4+ {decoy for the king} 2. Kxd4 (2. Kb4 b2 3. Nxb2 Bxb2 {winning for Black}) 2... b2 {sacrificing one pawn in order to promote the other} 3. Nxb2 {the king is still in the square of the a-pawn, but the knight is now blocking the path...} a3 4. Nd3 {White can do nothing about the promotion, but can arrange for a stubborn defense} a2 5. Ne5+ Ke8 6. f4 {All pieces are protected and the black king is confined to squares around h8... well, the queen cannot mate all by herself.}';
            currpgn[2] = '[Event "'+allstudystips[5][2]+'"][Site "Glarean"][Date "03.2011"][Round "'+allstudynames[5][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "8/b4kp1/2p1p3/5pB1/p1PP4/1p6/3K1P2/3N4 w - - 0 1"] 1. Kc3! (1. c5 a3 2. Kc3 a2 3. Kb2 e5 4. dxe5 Bxc5 5. Bd2 Bd4+ 6. Bc3 c5 {Schwarz gewinnt})(1. Kd3 e5 {Schwarz gewinnt})(1. Be3 f4 {Schwarz gewinnt}) 1... Bxd4+ {Köder für den König} 2. Kxd4 (2. Kb4 b2 3. Nxb2 Bxb2 {Schwarz gewinnt}) 2... b2 {ein Bauer wird geopfert, um den anderen eine Umwandlung zu verschaffen} 3. Nxb2 {der König ist immer noch im Quadrat des Bauern, aber der Springer steht jetzt im Weg...} a3 4. Nd3 {Weiß kann nichts gegen der Umwandlung machen, aber kann für eine widerspenstige Verteidigung sorgen.} a2 5. Ne5+ Ke8 6. f4 {Alle Figuren sind verteidigt und der König ist un den Feld a8 eingeschlossen... Die Dame kann allein nicht Matt geben.}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(51);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(52);">Glarean</a> [2011]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(51);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(52);">Glarean</a> [2011]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(51);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(52);">Glarean</a> [2011]\
                        ';
            break;
            
        case  6: 
            currchessfen = '[FEN "2k4N/Q1np4/2p2Bpp/1p1P4/pPP1p2P/P7/7q/1K6 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[6][0]+'"][Site "H.v.d.Heijden 50 JT"][Date "03.2011"][Round "'+allstudynames[6][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "2k4N/Q1np4/2p2Bpp/1p1P4/pPP1p2P/P7/7q/1K6 w - - 0 1"] 1. Nf7 Qg3 2. Qxc7+! Qxc7 (2... Kxc7 3. Be5+ {Albul castiga}) 3. d6 Qb8 4. c5 Kb7 5. Nd8+ {Prima configuratie a garzilor: Cal+Nebun} (5. Bd8? g5 {Negrul castiga}) 5... Ka8 6. Kc2 g5 {eliminand pionul alb} 7. hxg5 hxg5 8. Bxg5 Qc8 9. Kd2 e3+ 10. Kxe3 Ka7 11. Kf4 Ka8 12. Kf5 Ka7 13. Kg6 Ka8 14. Kf7 Ka7 15. Ke7 {a doua configuratie: Cal+Rege} Ka8 16. Bh6 Ka7 17. Bf8 {a treia configuratie: Nebun+Rege} Ka8 (17... Kb8 18. Nf7 Qb7 19. Ne5 Kc8 20. Ke8 Qa7 21. Be7 Qb7 22. Bd8 Qa7 23. Bc7 {Albul castiga}) 18. Nf7 Ka7 19. Ne5 Ka6 20. Nxd7';
            currpgn[1] = '[Event "'+allstudystips[6][1]+'"][Site "H.v.d.Heijden 50 JT"][Date "03.2011"][Round "'+allstudynames[6][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "2k4N/Q1np4/2p2Bpp/1p1P4/pPP1p2P/P7/7q/1K6 w - - 0 1"] 1. Nf7 Qg3 2. Qxc7+! Qxc7 (2... Kxc7 3. Be5+ {winning for White}) 3. d6 Qb8 4. c5 Kb7 5. Nd8+ {First configuration of the guards: N+B} (5. Bd8? g5 {winning for Black}) 5... Ka8 6. Kc2 g5 {removing the white pawn} 7. hxg5 hxg5 8. Bxg5 Qc8 9. Kd2 e3+ 10. Kxe3 Ka7 11. Kf4 Ka8 12. Kf5 Ka7 13. Kg6 Ka8 14. Kf7 Ka7 15. Ke7 {Second configuration: N+K} Ka8 16. Bh6 Ka7 17. Bf8 {Third configuration: B+K} Ka8 (17... Kb8 18. Nf7 Qb7 19. Ne5 Kc8 20. Ke8 Qa7 21. Be7 Qb7 22. Bd8 Qa7 23. Bc7 {winning for White}) 18. Nf7 {This is the way of the knight extraction} Ka7 19. Ne5 Ka6 20. Nxd7';
            currpgn[2] = '[Event "'+allstudystips[6][2]+'"][Site "H.v.d.Heijden 50 JT"][Date "03.2011"][Round "'+allstudynames[6][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "2k4N/Q1np4/2p2Bpp/1p1P4/pPP1p2P/P7/7q/1K6 w - - 0 1"] 1. Nf7 Qg3 2. Qxc7+! Qxc7 (2... Kxc7 3. Be5+ {Weiß gewinnt}) 3. d6 Qb8 4. c5 Kb7 5. Nd8+ {die erste Konfiguration der Wächter: S+L} (5. Bd8? g5 {Schwarz gewinnt}) 5... Ka8 6. Kc2 g5 {Entfernung des weißen Bauern} 7. hxg5 hxg5 8. Bxg5 Qc8 9. Kd2 e3+ 10. Kxe3 Ka7 11. Kf4 Ka8 12. Kf5 Ka7 13. Kg6 Ka8 14. Kf7 Ka7 15. Ke7 {die zweite Konfiguration: S+K} Ka8 16. Bh6 Ka7 17. Bf8 {die dritte Konfiguration: L+K} Ka8 (17... Kb8 18. Nf7 Qb7 19. Ne5 Kc8 20. Ke8 Qa7 21. Be7 Qb7 22. Bd8 Qa7 23. Bc7 {Weiß gewinnt}) 18. Nf7 Ka7 19. Ne5 Ka6 20. Nxd7';
            currchessinfo[0] = '\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul <a href="javascript:void(0);" onClick="openChessObject(61);">H.v.d.Heijden 50 JT</a> [2011-2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(62);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n revista <a href="javascript:void(0);" onClick="openChessObject(63);">EG</a> [2012]\
                        ';
            currchessinfo[1] = '\
                        Awarded a mention in <a href="javascript:void(0);" onClick="openChessObject(61);">H.v.d.Heijden 50 JT</a> [2011-2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(62);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(63);">EG</a> magazine [2012]\
                        ';
            currchessinfo[2] = '\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(61);">H.v.d.Heijden 50 JT</a> gewonnen [2011-2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(62);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(63);">EG</a> Magazin [2012]\
                        ';
            break;
            
        case  8: 
            currchessfen = '[FEN "q7/b1p5/kp1p4/p2PN3/PPP5/1K6/8/5B2 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[8][0]+'"][Site "Componist"][Date "01.2012"][Round "'+allstudynames[8][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "q7/b1p5/kp1p4/p2PN3/PPP5/1K6/8/5B2 w - - 0 1"] 1. c5+ Kb7 (1... b5 2. Bxb5+ Kb7 3. Bc6+ Kc8 4. Bxa8 dxe5 5. Bc6 {Albul castiga}) 2. Ba6+! Kxa6 3. b5+ Kb7 4. c6+ Kc8 5. Nf7 Qb8 6. Kc4 Qa8 7. Kd4 Qb8 8. Ke4 Qa8 9. Kf5 Qb8 (9... Bb8 10. Ke6 Qa7 11. Ng5 Qa6 12. bxa6 b5 13. axb5 Ba7 14. Ne4 a4 15. Nc3 {Albul castiga, deoarece regele se poate intoarce.}) 10. Ke6 Qa8 11. Ng5 Kd8 12. Kf7 Qb8 13. Ne6+ Kc8 14. Ke8 Qa8 15. Ng7 Qb8 16. Nf5 Qa8 17. Ne7+ Kb8 18. Kd8 {zugzwang, Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[8][1]+'"][Site "Componist"][Date "01.2012"][Round "'+allstudynames[8][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "q7/b1p5/kp1p4/p2PN3/PPP5/1K6/8/5B2 w - - 0 1"] 1. c5+ Kb7 (1... b5 2. Bxb5+ Kb7 3. Bc6+ Kc8 4. Bxa8 dxe5 5. Bc6 {winning for White}) 2. Ba6+! Kxa6 3. b5+ Kb7 4. c6+ Kc8 5. Nf7 Qb8 6. Kc4 Qa8 7. Kd4 Qb8 8. Ke4 Qa8 9. Kf5 Qb8 (9... Bb8 10. Ke6 Qa7 11. Ng5 Qa6 12. bxa6 b5 13. axb5 Ba7 14. Ne4 a4 15. Nc3 {winning for White, since the king can come back to hold in place the black a-pawn and the bishop, while the knight and white pawns can force a breakthrough.}) 10. Ke6 Qa8 11. Ng5 Kd8 12. Kf7 Qb8 13. Ne6+ Kc8 14. Ke8 Qa8 15. Ng7 Qb8 16. Nf5 Qa8 17. Ne7+ Kb8 18. Kd8 {zugzwang, winning for White}';
            currpgn[2] = '[Event "'+allstudystips[8][2]+'"][Site "Componist"][Date "01.2012"][Round "'+allstudynames[8][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "q7/b1p5/kp1p4/p2PN3/PPP5/1K6/8/5B2 w - - 0 1"] 1. c5+ Kb7 (1... b5 2. Bxb5+ Kb7 3. Bc6+ Kc8 4. Bxa8 dxe5 5. Bc6 {Weiß gewinnt}) 2. Ba6+! Kxa6 3. b5+ Kb7 4. c6+ Kc8 5. Nf7 Qb8 6. Kc4 Qa8 7. Kd4 Qb8 8. Ke4 Qa8 9. Kf5 Qb8 (9... Bb8 10. Ke6 Qa7 11. Ng5 Qa6 12. bxa6 b5 13. axb5 Ba7 14. Ne4 a4 15. Nc3 {Weiß gewinnt, denn der König kann zurückgekommen.}) 10. Ke6 Qa8 11. Ng5 Kd8 12. Kf7 Qb8 13. Ne6+ Kc8 14. Ke8 Qa8 15. Ng7 Qb8 16. Nf5 Qa8 17. Ne7+ Kb8 18. Kd8 {Zugzwang, Weiß gewinnt}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(81);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(82);">Componist</a> [2012]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(81);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(82);">Componist</a> [2012]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(81);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(82);">Componist</a> [2012]\
                        ';
            break;
            
        case  9: 
            currchessfen = '[FEN "1N4K1/1pp1p3/7k/2r3pP/p2pp1P1/P6N/8/2B5 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[9][0]+'"][Site "chichitza.ro"][Date "09.2012"][Round "'+allstudynames[9][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "1N4K1/1pp1p3/7k/2r3pP/p2pp1P1/P6N/8/2B5 w - - 0 1"] 1. Nc6 {Sacrificand calul doar pentru a muta un pion de pe coloana b pe coloana c} (1. Na6 {nu este suficient de agresiv, permitand Rxc1}) (1. Nd7 Rxc1 {Negrul castiga}) (1. Bd2 Rd5 {!} 2. Nc6 {acum este prea tarziu pentru a reveni la ideea de remiza} bxc6 3. Nxg5 Rd8+ 4. Kf7 e3 {Negrul castiga}) 1... bxc6 (1... Rxc1 2. Nxe7 Rf1 3. Kh8 Rf8+ 4. Ng8+ Rxg8+ 5. Kxg8 e3 6. Ng1 d3 7. Nf3 d2 8. Ne5 d1=Q 9. Nf7#) (1... Rxc6 2. Bxg5#) 2. Nxg5 Rxg5+ (2... Rxc1 3. Nf7#) 3. Kh8 {Negrul are ciudatul privilegiu de a decide daca Negrul face pat pe Alb prin capturarea nebunului, sau invers -- Albul face pat pe Negru --, prin cedarea tuturor pionilor pe diagonala c1-h6... remiza}';
            currpgn[1] = '[Event "'+allstudystips[9][1]+'"][Site "chichitza.ro"][Date "09.2012"][Round "'+allstudynames[9][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "1N4K1/1pp1p3/7k/2r3pP/p2pp1P1/P6N/8/2B5 w - - 0 1"] 1. Nc6 {Sacrificing the knight only to displace the b-pawn on the c-column} (1. Na6 {is not aggressive enough, Black has time for Rxc1, winning}) (1. Nd7 Rxc1 {winning for Black}) (1. Bd2 Rd5 {the only way to win for Black} 2. Nc6 {now it is too late to get back to the mainline drawing idea} bxc6 3. Nxg5 Rd8+ 4. Kf7 e3 {winning for Black}) 1... bxc6 {forced, otherwise mate at move 9:} (1... Rxc1 2. Nxe7 Rf1 3. Kh8 Rf8+ 4. Ng8+ Rxg8+ 5. Kxg8 e3 6. Ng1 d3 7. Nf3 d2 8. Ne5 d1=Q 9. Nf7#) (1... Rxc6 2. Bxg5# {is the threat that keeps the rook from taking the knight}) 2. Nxg5 Rxg5+ (2... Rxc1 3. Nf7#) 3. Kh8 {Black now has the awkward privilege of choosing whether he prefers to stalemate White by capturing the bishop or to be stalemated by White after having pushed all pawns in the diagonal of death c1-h6... draw}';
            currpgn[2] = '[Event "'+allstudystips[9][2]+'"][Site "chichitza.ro"][Date "09.2012"][Round "'+allstudynames[9][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "1N4K1/1pp1p3/7k/2r3pP/p2pp1P1/P6N/8/2B5 w - - 0 1"] 1. Nc6 {Opfer, um den b-Bauer auf c zu bringen} (1. Na6 {ist nicht aggressiv genug und ermöglicht Rxc1}) (1. Nd7 Rxc1 {Schwarz gewinnt}) (1. Bd2 Rd5 {!} 2. Nc6 {nun ist es zu spät für die Remis-Idee} bxc6 3. Nxg5 Rd8+ 4. Kf7 e3 {Schwarz gewinnt}) 1... bxc6 {!} (1... Rxc1 2. Nxe7 Rf1 3. Kh8 Rf8+ 4. Ng8+ Rxg8+ 5. Kxg8 e3 6. Ng1 d3 7. Nf3 d2 8. Ne5 d1=Q 9. Nf7#) (1... Rxc6 2. Bxg5#) 2. Nxg5 Rxg5+ (2... Rxc1 3. Nf7#) 3. Kh8 {Schwarz hat nun den unangenehmen Wahl, wer wen Patt setzt: Schwarz kann den Läufer schlagen um Weiß Patt zu setzen, oder kann alle seine Bauern auf die c1-h6 Diagonal opfern um Patt gesetzt zu werden... Remis}';
            currchessinfo[0] = '\
                        Publicat pe chichitza [2012]\
                        ';
            currchessinfo[1] = '\
                        Published on chichitza [2012]\
                        ';
            currchessinfo[2] = '\
                        Ver&ouml;ffentlicht auf chichitza [2012]\
                        ';
            break;
            
        case 10: 
            currchessfen = '[FEN "4B3/k1K1pp2/p3bq2/2p1p3/1p2P1P1/4P2Q/nR6/8 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[10][0]+'"][Site "Schach"][Date "09.2012"][Round "'+allstudynames[10][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "4B3/k1K1pp2/p3bq2/2p1p3/1p2P1P1/4P2Q/nR6/8 w - - 0 1"] 1. g5 (1. Rd2 Nc3 {Negrul castiga}) 1... Qxg5 2. Qxe6 (2. Qh8 Qf6 3. Rh2 (3. Qxf6 exf6 4. Rd2 b3 5. Rd8 Nc3 6. Bc6 Nb5+ 7. Bxb5 axb5 {Negrul castiga}) 3... Qxh8 4. Rxh8 Nc3 5. Bc6 Nb5+ 6. Bxb5 axb5 7. Rb8 b3 8. Rxb5 Ka6 9. Rxc5 Bg4 {Negrul castiga}) 2... fxe6 3. Rxa2 Qg8 (3... Qxe3 4. Bb5 Qa3 5. Rxa3 bxa3 6. Bc4 {Albul castiga}) 4. Ra4 {sau Ra5, pastrand campul a1 liber} (4. Ra1 Qf8 5. Ra5 Qf1 6. Bb5 Qxb5 7. Rxb5 axb5 {Negrul castiga}) 4... Qf8 5. Ra1 (5. Ra2 {sau Ra5} Qf1 {Negrul castiga}) 5... b3 (5... c4 6. Ra4 c3 7. Rxb4 Qxe8 8. Rb7+ Ka8 9. Ra7+ Kxa7 {pat}) 6. Ra3 b2 7. Rb3 b1=Q 8. Rxb1 Qxe8 9. Rb7+ Ka8 10. Ra7+ Kxa7{pat}';
            currpgn[1] = '[Event "'+allstudystips[10][1]+'"][Site "Schach"][Date "09.2012"][Round "'+allstudynames[10][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "4B3/k1K1pp2/p3bq2/2p1p3/1p2P1P1/4P2Q/nR6/8 w - - 0 1"] 1. g5 (1. Rd2 Nc3 {winning for Black}) 1... Qxg5 2. Qxe6 (2. Qh8 Qf6 3. Rh2 (3. Qxf6 exf6 4. Rd2 b3 5. Rd8 Nc3 6. Bc6 Nb5+ 7. Bxb5 axb5 {winning for Black}) 3... Qxh8 4. Rxh8 Nc3 5. Bc6 Nb5+ 6. Bxb5 axb5 7. Rb8 b3 8. Rxb5 Ka6 9. Rxc5 Bg4 {winning for Black}) 2... fxe6 3. Rxa2 Qg8 (3... Qxe3 4. Bb5 Qa3 5. Rxa3 bxa3 6. Bc4 {winning for White}) 4. Ra4 {or Ra5, but keeping the a1 square cleared} (4. Ra1 Qf8 5. Ra5 Qf1 6. Bb5 Qxb5 7. Rxb5 axb5 {winning for Black}) 4... Qf8 5. Ra1 (5. Ra2 {or Ra5} Qf1 {winning for Black}) 5... b3 (5... c4 6. Ra4 c3 7. Rxb4 Qxe8 8. Rb7+ Ka8 9. Ra7+ Kxa7 {stalemate}) 6. Ra3 b2 7. Rb3 b1=Q 8. Rxb1 Qxe8 9. Rb7+ Ka8 10. Ra7+ Kxa7{stalemate}';
            currpgn[2] = '[Event "'+allstudystips[10][2]+'"][Site "Schach"][Date "09.2012"][Round "'+allstudynames[10][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"][FEN "4B3/k1K1pp2/p3bq2/2p1p3/1p2P1P1/4P2Q/nR6/8 w - - 0 1"] 1. g5 (1. Rd2 Nc3 {Schwarz gewinnt}) 1... Qxg5 2. Qxe6 (2. Qh8 Qf6 3. Rh2 (3. Qxf6 exf6 4. Rd2 b3 5. Rd8 Nc3 6. Bc6 Nb5+ 7. Bxb5 axb5 {Schwarz gewinnt}) 3... Qxh8 4. Rxh8 Nc3 5. Bc6 Nb5+ 6. Bxb5 axb5 7. Rb8 b3 8. Rxb5 Ka6 9. Rxc5 Bg4 {Schwarz gewinnt}) 2... fxe6 3. Rxa2 Qg8 (3... Qxe3 4. Bb5 Qa3 5. Rxa3 bxa3 6. Bc4 {Weiß gewinnt}) 4. Ra4 {oder Ra5, somit der a1 Feld frei bleibt} (4. Ra1 Qf8 5. Ra5 Qf1 6. Bb5 Qxb5 7. Rxb5 axb5 {Schwarz gewinnt}) 4... Qf8 5. Ra1 (5. Ra2 {oder Ra5} Qf1 {Schwarz gewinnt}) 5... b3 (5... c4 6. Ra4 c3 7. Rxb4 Qxe8 8. Rb7+ Ka8 9. Ra7+ Kxa7 {Patt}) 6. Ra3 b2 7. Rb3 b1=Q 8. Rxb1 Qxe8 9. Rb7+ Ka8 10. Ra7+ Kxa7{Patt}';
            currchessinfo[0] = '\
                        Publicat &#xEE;n revista <a href="javascript:void(0);" onClick="openChessObject(101);">Schach</a> [2012]\
                        ';
            currchessinfo[1] = '\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(101);">Schach</a> magazine [2012]\
                        ';
            currchessinfo[2] = '\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(101);">Schach</a> Magazin [2012]\
                        ';
            break;
            
        case 11: 
            currchessfen = '[FEN "4N2k/4PB1p/7P/B1p5/2P5/3q2Pp/1P3P1K/2r5 w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[11][0]+'"][Site "chichitza.ro"][Date "11.2012"][Round "'+allstudynames[11][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "4N2k/4PB1p/7P/B1p5/2P5/3q2Pp/1P3P1K/2r5 w - - 0 1"] 1. Bc3+ (1. Nc7? {sau orice alt&#x103; mutare} Rh1+ 2. Kxh1 Qf3+ 3. Kh2 Qg2#) 1... Rxc3 (1... Qxc3 2. bxc3 {c&#xE2;&#x15F;tig&#x103;tor pentru Alb}) 2. Nc7! (2. Nd6? {sau 2. Nf6? sau 2.Ng7?} Qxg3+ 3. fxg3 Rc2+ 4. Kxh3 (4. Kg1 h2+ 5. Kh1 Rc1+ 6. Kxh2 Rh1+) 4... Rh2+ 5. Kg4 Rh4+ {remiz&#x103; prin &#x15F;ah etern}) (2. bxc3? Qf1 {c&#xE2;&#x15F;tig&#x103;tor pentru Alb}) 2... Qxg3+ (2... Qd7 {or Qe2 or Qe4} 3. e8=Q+ Qxe8 4. Bxe8 {c&#xE2;&#x15F;tig&#x103;tor pentru Alb}) 3. fxg3 Rc2+ 4. Kxh3 Rh2+ 5. Kg4 Rh4+ 6. Kf5 Rf4+ (6... Rh5+ 7. Bxh5 Kg8 8. e8=R#) 7. Ke5 Re4+ 8. Kd5 (8. Kd6? Re6+ 9. Kd5 Rd6+ 10. Ke4 (10. Kxc5 Rc6+ {remiz&#x103;}) 10... Re6+ 11. Kf3 Rxe7 {remiz&#x103;}) 8... Re5+ 9. Kc6 Re6+ 10. Kb7 (10. Kxc5? Rc6+ {remiz&#x103;}) 10... Rb6+ 11. Kc8 Rb8+ 12. Kd7 {captur&#xE2;nd tura cu mat sau dezamors&#xE2;nd amenin&#x21B;area de pat cu avantaj decisiv}';
            currpgn[1] = '[Event "'+allstudystips[11][1]+'"][Site "chichitza.ro"][Date "11.2012"][Round "'+allstudynames[11][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "4N2k/4PB1p/7P/B1p5/2P5/3q2Pp/1P3P1K/2r5 w - - 0 1"] 1. Bc3+ (1. Nc7? {or any other move} Rh1+ 2. Kxh1 Qf3+ 3. Kh2 Qg2#) 1... Rxc3 (1... Qxc3 2. bxc3 {winning for White}) 2. Nc7! (2. Nd6? {or 2. Nf6? or 2.Ng7?} Qxg3+ 3. fxg3 Rc2+ 4. Kxh3 (4. Kg1 h2+ 5. Kh1 Rc1+ 6. Kxh2 Rh1+) 4... Rh2+ 5. Kg4 Rh4+ {draw by perpetual check}) (2. bxc3? Qf1 {winning for Black}) 2... Qxg3+ (2... Qd7 {or Qe2 or Qe4} 3. e8=Q+ Qxe8 4. Bxe8 {winning for White}) 3. fxg3 Rc2+ 4. Kxh3 Rh2+ 5. Kg4 Rh4+ 6. Kf5 Rf4+ (6... Rh5+ 7. Bxh5 Kg8 8. e8=R#) 7. Ke5 Re4+ 8. Kd5 (8. Kd6? Re6+ 9. Kd5 Rd6+ 10. Ke4 (10. Kxc5 Rc6+ {draw}) 10... Re6+ 11. Kf3 Rxe7 {draw}) 8... Re5+ 9. Kc6 Re6+ 10. Kb7 (10. Kxc5? Rc6+ {draw}) 10... Rb6+ 11. Kc8 Rb8+ 12. Kd7 {capturing the rook with checkmate or releasing the stalemate threat with a decisive advantage}';
            currpgn[2] = '[Event "'+allstudystips[11][2]+'"][Site "chichitza.ro"][Date "11.2012"][Round "'+allstudynames[11][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"][FEN "4N2k/4PB1p/7P/B1p5/2P5/3q2Pp/1P3P1K/2r5 w - - 0 1"] 1. Bc3+ (1. Nc7? {oder sonstige Züge} Rh1+ 2. Kxh1 Qf3+ 3. Kh2 Qg2#) 1... Rxc3 (1... Qxc3 2. bxc3 {Weiß gewinnt}) 2. Nc7! (2. Nd6? {sowie 2. Nf6?; 2.Ng7?} Qxg3+ 3. fxg3 Rc2+ 4. Kxh3 (4. Kg1 h2+ 5. Kh1 Rc1+ 6. Kxh2 Rh1+) 4... Rh2+ 5. Kg4 Rh4+ {Remis durch Dauerschach}) (2. bxc3? Qf1 {Schwarz gewinnt}) 2... Qxg3+ (2... Qd7 {or Qe2 or Qe4} 3. e8=Q+ Qxe8 4. Bxe8 {Weiß gewinnt}) 3. fxg3 Rc2+ 4. Kxh3 Rh2+ 5. Kg4 Rh4+ 6. Kf5 Rf4+ (6... Rh5+ 7. Bxh5 Kg8 8. e8=R#) 7. Ke5 Re4+ 8. Kd5 (8. Kd6? Re6+ 9. Kd5 Rd6+ 10. Ke4 (10. Kxc5 Rc6+ {Remis}) 10... Re6+ 11. Kf3 Rxe7 {Remis}) 8... Re5+ 9. Kc6 Re6+ 10. Kb7 (10. Kxc5? Rc6+ {Remis}) 10... Rb6+ 11. Kc8 Rb8+ 12. Kd7 {der Turm wird mit Schach geschlagen, oder die Patt-Drohung wird in eine Gewinnstellung abgehoben}';
            currchessinfo[0] = '\
                        Publicat aici [2012]\
                        ';
            currchessinfo[1] = '\
                        Published here [2012]\
                        ';
            currchessinfo[2] = '\
                        Ver&ouml;ffentlicht hier [2012]\
                        ';
            break;
            
        case 13: 
            currchessfen = '[FEN "8/4Pr1N/8/6PN/8/3K1ppp/4prkb/4Bbnn w - - 0 1"]';
            coauthor = 'Arpad Rusz';
            currpgn[0] = '[Event "'+allstudystips[13][0]+'"][Site "9th WCCT (D39)"][Date "09.2013"][Round "'+allstudynames[13][0]+'"][White "Mihai Neghina"][Black "Arpad Rusz"][Result "1-0"][FEN "8/4Pr1N/8/6PN/8/3K1ppp/4prkb/4Bbnn w - - 0 1"] 1. Nf8 {forteaza tura la f8} (1. e8=Q Rd7+ {remiza}) (1. N7f6 Rxf6 2. e8=Q Rd6+ {remiza}) (1. g6 Rf5 2. Ng5 Rd5+ {remiza}) (1. Kc2 Rf6 {remiza}) 1... Rxf8 (1... Rf5 2. Kc3 {Albul castiga}) (1... Rf6 2. Ne6 Rf5 3. Nef4+ Rxf4 4. Nxf4#) 2. e8=Q {protectie pentru rege} (2. exf8=Q {pat}) (2. e8=N Rf6 3. Kc3 Rc6+ 4. Kb3 Rb6+ 5. Ka4 Ra6+ {remiza}) 2... Rf7 3. Qe7 {protectie pentru rege} (3. Qc6 Rd7+ 4. Kc4 Rd4+ {remiza}) 3... Rf6 4.Qe6 {protectie pentru rege} (4. Kc2 Rc6+ 5. Kb3 Rc4 {remiza} (5... Rb6+ 6. Bb4 {Albul castiga}) (5... Rc3+ 6. Bxc3 {Albul castiga}) (5... Rf6 6. g6 {Albul castiga ca in varianta principala})) 4... Rf5 5. Qe5 {protectie pentru rege} Rf8 6. Qd4 {protectie pentru rege} Rf5 7. Kc3 {minor duals Kc2, Kc4} Rc5+ 8. Kb3 (8. Kb4 Rc4+ {remiza}) 8... Rb5+ (8... Rc3+ 9.Bxc3 {Albul castiga}) 9. Ka4 Rf5 (9... Ra5+ 10. Bxa5 {Albul castiga}) 10. Qd8 {cea mai scurta cale catre mat} Rf7 11. g6 Rf5 (11... Ra7+ 12. Ba5 {Albul castiga}) 12. Qg5 {protectie pentru cal} Rf8 13. g7 Rf5 14. g8=N {Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[13][1]+'"][Site "9th WCCT (D39)"][Date "09.2013"][Round "'+allstudynames[13][1]+'"][White "Mihai Neghina"][Black "Arpad Rusz"][Result "1-0"][FEN "8/4Pr1N/8/6PN/8/3K1ppp/4prkb/4Bbnn w - - 0 1"] 1. Nf8 {forcing the rook to the f8 square} (1. e8=Q Rd7+ {draw}) (1. N7f6 Rxf6 2. e8=Q Rd6+ {draw}) (1. g6 Rf5 2. Ng5 Rd5+ {draw}) (1. Kc2 Rf6 {draw}) 1... Rxf8 (1... Rf5 2. Kc3 {winning for White}) (1... Rf6 2. Ne6 Rf5 3. Nef4+ Rxf4 4. Nxf4#) 2. e8=Q {shielding the king from checks} (2. exf8=Q {stalemate}) (2. e8=N Rf6 3. Kc3 Rc6+ 4. Kb3 Rb6+ 5. Ka4 Ra6+ {draw}) 2... Rf7 3. Qe7 {shielding the king from checks} (3. Qc6 Rd7+ 4. Kc4 Rd4+ {draw}) 3... Rf6 4.Qe6 {shielding the king from checks} (4. Kc2 Rc6+ 5. Kb3 Rc4 {draw} (5... Rb6+ 6. Bb4 {winning for White}) (5... Rc3+ 6. Bxc3 {winning for White}) (5... Rf6 6. g6 {winning for White as in the mainline})) 4... Rf5 5. Qe5 {shielding the king from checks} Rf8 6. Qd4 {shielding the king from checks} Rf5 7. Kc3 {minor duals Kc2, Kc4} Rc5+ 8. Kb3 (8. Kb4 Rc4+ {draw}) 8... Rb5+ (8... Rc3+ 9.Bxc3 {winning for White}) 9. Ka4 Rf5 (9... Ra5+ 10. Bxa5 {winning for White}) 10. Qd8 {shortest path to mate} Rf7 11. g6 Rf5 (11... Ra7+ 12. Ba5 {winning for White}) 12. Qg5 {Shielding the knight} Rf8 13. g7 Rf5 14. g8=N {winning for White}';
            currpgn[2] = '[Event "'+allstudystips[13][2]+'"][Site "9th WCCT (D39)"][Date "09.2013"][Round "'+allstudynames[13][2]+'"][White "Mihai Neghina"][Black "Arpad Rusz"][Result "1-0"][FEN "8/4Pr1N/8/6PN/8/3K1ppp/4prkb/4Bbnn w - - 0 1"] 1. Nf8 {zwingt den Turm zu f8} (1. e8=Q Rd7+ {Remis}) (1. N7f6 Rxf6 2. e8=Q Rd6+ {Remis}) (1. g6 Rf5 2. Ng5 Rd5+ {Remis}) (1. Kc2 Rf6 {Remis}) 1... Rxf8 (1... Rf5 2. Kc3 {Weiß gewinnt}) (1... Rf6 2. Ne6 Rf5 3. Nef4+ Rxf4 4. Nxf4#) 2. e8=Q {Abschirmung des Königs} (2. exf8=Q {Patt}) (2. e8=N Rf6 3. Kc3 Rc6+ 4. Kb3 Rb6+ 5. Ka4 Ra6+ {Remis}) 2... Rf7 3. Qe7 {Abschirmung des Königs} (3. Qc6 Rd7+ 4. Kc4 Rd4+ {Remis}) 3... Rf6 4.Qe6 {Abschirmung des Königs} (4. Kc2 Rc6+ 5. Kb3 Rc4 {Remis} (5... Rb6+ 6. Bb4 {Weiß gewinnt}) (5... Rc3+ 6. Bxc3 {Weiß gewinnt}) (5... Rf6 6. g6 {Weiß gewinnt wie in der Hauptvariante})) 4... Rf5 5. Qe5 {Abschirmung des Königs} Rf8 6. Qd4 {Abschirmung des Königs} Rf5 7. Kc3 {minor duals Kc2, Kc4} Rc5+ 8. Kb3 (8. Kb4 Rc4+ {Remis}) 8... Rb5+ (8... Rc3+ 9.Bxc3 {Weiß gewinnt}) 9. Ka4 Rf5 (9... Ra5+ 10. Bxa5 {Weiß gewinnt}) 10. Qd8 {der kürzeste Weg zum Matt} Rf7 11. g6 Rf5 (11... Ra7+ 12. Ba5 {Weiß gewinnt}) 12. Qg5 {Abschirmung des Springers} Rf8 13. g7 Rf5 14. g8=N {Weiß gewinnt}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(131);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n turneul <a href="javascript:void(0);" onClick="openChessObject(132);">9th WCCT</a> [2013]\
                        <br/><br/>\
                        <i>Pont: &#xEE;n h2 putea la fel de bine s&#x103; fie o dam&#x103;, tot Albul ar c&#xE2;&#x15F;tiga...</i>\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(131);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in tournament <a href="javascript:void(0);" onClick="openChessObject(132);">9th WCCT</a> [2013]\
                        <br/><br/>\
                        <i>Hint: There could have been a queen in h2 instead of the bishop, White would still win...</i>\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(131);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht im <a href="javascript:void(0);" onClick="openChessObject(132);">9th WCCT</a> [2013]\
                        <br/><br/>\
                        <i>Hinweis: Auf h2 k&#246;nne genau so gut eine Dame stehen, Wei&#223; w&#252;rde immer noch gewinnen...</i>\
                        ';
            break;
            
        default: 
            currchessfen = '[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1"]';
            coauthor = '';
            currpgn[0] = '[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1"]';
            currpgn[1] = '[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1"]';
            currpgn[2] = '[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1"]';
            currchessinfo[0] = '';
            currchessinfo[1] = '';
            currchessinfo[2] = '';
    }
}

function openChessObject(n)
{
    switch(n)
    {	case  11: window.open('Images/C4.Chess/pdf/Homemade01.pdf');	break;
        case  12: window.open('http://glareanverlag.wordpress.com/2009/10/01/studie_glarean_martan_neghina/');	break;
        case  13: window.open('Images/C4.Chess/pdf/Homemade01_book.pdf');	break;
        case  14: window.open('http://www.schach-agentur.de/b%C3%BCcher/');	break;
        case  15: window.open('Images/C4.Chess/pdf/Homemade01_init.pdf');	break;
        case  16: window.open('http://www.matplus.net/start.php');	break;
        case  17: window.open('Images/C4.Chess/pdf/Homemade01_award.pdf');	break;
        case  21: window.open('Images/C4.Chess/pdf/Homemade02.pdf');	break;
        case  22: window.open('http://glareanverlag.wordpress.com/2009/12/17/die-interessante-schachstudie_mihai-neghina_glarean-magazin/');	break;
        case  31: window.open('Images/C4.Chess/pdf/Homemade03.pdf');	break;
        case  32: window.open('http://glareanverlag.wordpress.com/2010/07/24/der-brillante-schachzug_69_neghina_schach_glarean-magazin/');	break;
        case  51: window.open('Images/C4.Chess/pdf/Homemade05.pdf');	break;
        case  52: window.open('http://glareanverlag.wordpress.com/2011/03/19/schach_mihai-neghina-stubborness_glarean-magazin/');	break;
        case  61: window.open('http://www.arves.org/PDF/HvdH50JTannouncement.pdf');	break;
        case  62: window.open('Images/C4.Chess/pdf/Homemade06.pdf');	break;
        case  63: window.open('http://www.arves.org/EG.htm');	break;
        case  81: window.open('Images/C4.Chess/pdf/Homemade08.pdf');	break;
        case  82: window.open('http://www.frsah.ro/index.php?action=listingview&listingID=608');	break;
        case 101: window.open('http://www.euroschach.de/Zeitschrift-Schach-Heft-2012-9.html');	break;
        case 131: window.open('Images/C4.Chess/pdf/Homemade13.pdf');	break;
        case 132: window.open('http://www.wfcc.ch/competitions/composing/9_wcct/');	break;
        default: window.open('');
    }
}

function showSolution() 
{	
    var container;    
    
    container = document.getElementById("solution-navButtons");
    container.style.visibility='visible';
    
    container = document.getElementById("solution-moves");
    container.style.visibility='visible';
    
    container = document.getElementById("divShowSolution");
    container.style.visibility='hidden';
    
    container = document.getElementById("divHideSolution");
    container.style.visibility='visible';
    
    container = document.getElementById("divShowPGN");
    container.style.visibility='visible';

}

function hideSolution() 
{	
    var container;
    
    container = document.getElementById("solution-navButtons");
    container.style.visibility='hidden';
    
    container = document.getElementById("solution-moves");
    container.style.visibility='hidden';
    
    container = document.getElementById("divShowSolution");
    container.style.visibility='visible';
    
    container = document.getElementById("divHideSolution");
    container.style.visibility='hidden';
    
    container = document.getElementById("divShowPGN");
    container.style.visibility='hidden';

}

function initChessSolution(n)
{
    var name, stip, currlangpgn, container, v;
    
    setcurrchessvars(n);
    
    if( 'ro' === lang )
    {
        name = allstudynames[n][0];
        stip = allstudystips[n][0];
        currlangpgn = currpgn[0];
    }
    if( 'en' === lang )
    {
        name = allstudynames[n][1];
        stip = allstudystips[n][1];
        currlangpgn = currpgn[1];
    }
    if( 'de' === lang )
    {
        name = allstudynames[n][2];
        stip = allstudystips[n][2];
        currlangpgn = currpgn[2];
    }
    
    container = document.getElementById("study-name");
    container.innerHTML = '<br/><strong>' + name + '</strong><br/>';
    
    container = document.getElementById("stipulation");
    container.innerHTML = '<strong>' + stip + '</strong>';		
            
    if (document.getElementById("solution-container"))
    {
        container = document.getElementById("solution-container");
        container.innerHTML = '';
        
        v = new PgnViewer({ boardName: "solution", 
                            pgnString: currlangpgn,
                            pieceSet: 'merida', pieceSize: 35 });
        
        container = document.getElementById("solution-navButtons");
        container.setAttribute('style','text-align:center');
       
    }
    
    hideSolution();

}

function showPGN() 
{	
    var currlangpgn, editedcurrlangpgn, popupcontents, finalcontents;
    currlangpgn = currpgn[1];
    if( 'ro' === lang ) { currlangpgn = currpgn[0]; }
    if( 'en' === lang ) { currlangpgn = currpgn[1]; }
    if( 'de' === lang ) { currlangpgn = currpgn[2]; }
    
    editedcurrlangpgn = currlangpgn.replace(/\]/g,"]<br/>");
    
    editedcurrlangpgn = "<div align='justify'>" + editedcurrlangpgn + "</div>";
    
    popupcontents = "<a id=\"buttonX\" href=\"JavaScript:TINY.box.hide();\">\
                    <img src=\"Images/C0.Common/Helpertools/BigXGray.png\" alt=\"X\" \
                    width=\"24\" height=\"24\" border=\"0\" align=\"right\" /> </a> ";
    
    finalcontents = popupcontents.concat( editedcurrlangpgn );          
    
    TINY.box.show(finalcontents,0,0,0,1);
}


function showChessPositionOnHover(n)
{	
    var name, stip, container, v;
    
    setcurrchessvars(n);
    
    if( 'ro' === lang )
    {
        name = allstudynames[n][0];
        stip = allstudystips[n][0];
    }
    if( 'en' === lang )
    {
        name = allstudynames[n][1];
        stip = allstudystips[n][1];
    }
    if( 'de' === lang )
    {
        name = allstudynames[n][2];
        stip = allstudystips[n][2];
    }
    
    container = document.getElementById("study-name");
    container.innerHTML = '<br/><strong>' + name + '</strong><br/>';
    
    container = document.getElementById("stipulation");
    container.innerHTML = '<strong>' + stip + '</strong>';		
            
    if (document.getElementById("position-container"))
    {
        container = document.getElementById("position-container");
        container.innerHTML = '';
        
        v = new PgnViewer({ boardName: "position", 
                            pgnString: currchessfen,
                            pieceSet: 'merida', pieceSize: 35 });
        container = document.getElementById("position-navButtons");
        container.parentNode.removeChild(container);
    }
    
}



