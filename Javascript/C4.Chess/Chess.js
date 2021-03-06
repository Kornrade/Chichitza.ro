/*-----------------------------------------------------------------------------------------------------------*\
| This file contains the chess-related javascript functions.                                                  |     
| The following functions are available:                                                                      |
|       showChessPositionOnHover(n)........... shows position on the board, with title (name) and stipulation |
\*-----------------------------------------------------------------------------------------------------------*/

/*jslint es5: true */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* GLOBAL VARS USED IN THIS FILE:*/
var lang, TINY;

/*global PgnViewer */

var currchessfen;
var coauthor;
var currpgn = [];
var currchessinfo = [];

var allstudydates = [];
allstudydates[ 0] = '';
allstudydates[ 1] = '[2009]';
allstudydates[ 2] = '[2009]';
allstudydates[ 3] = '[2010]';
allstudydates[ 4] = '[2010]';
allstudydates[ 5] = '[2011]';
allstudydates[ 6] = '[2011]';
allstudydates[ 7] = '[2011]';
allstudydates[ 8] = '[2012]';
allstudydates[ 9] = '[2012]';
allstudydates[10] = '[2012]';
allstudydates[11] = '[2012]';
allstudydates[12] = '[2012]';
allstudydates[13] = '[2013]';
allstudydates[14] = '[2015]';
allstudydates[15] = '[2015]';
allstudydates[16] = '[2016]';
allstudydates[17] = '[2017]';
allstudydates[18] = '[2017]';
allstudydates[19] = '[2017]';
allstudydates[20] = '[2018]';
allstudydates[21] = '[2019]';

var allstudyawards = [];
allstudyawards[ 0] = '';
allstudyawards[ 1] = 'Medal_H.png';
allstudyawards[ 2] = '';
allstudyawards[ 3] = '';
allstudyawards[ 4] = '';
allstudyawards[ 5] = '';
allstudyawards[ 6] = 'Medal_H.png';
allstudyawards[ 7] = 'Medal_H.png';
allstudyawards[ 8] = '';
allstudyawards[ 9] = '';
allstudyawards[10] = '';
allstudyawards[11] = '';
allstudyawards[12] = 'Medal_H.png';
allstudyawards[13] = '';
allstudyawards[14] = '';
allstudyawards[15] = '';
allstudyawards[16] = 'Medal_3.png';
allstudyawards[17] = 'Medal_H.png';
allstudyawards[18] = 'Medal_H.png';
allstudyawards[19] = '';
allstudyawards[20] = 'Medal_H.png';
allstudyawards[21] = 'Medal_1.png';

var allstudydifficulty = [];
allstudydifficulty[ 0] = [];
allstudydifficulty[ 0][0] = 'bec_bej.png';
allstudydifficulty[ 0][1] = 'bec_bej.png';
allstudydifficulty[ 0][2] = 'bec_bej.png';
allstudydifficulty[ 1] = [];
allstudydifficulty[ 1][0] = 'bec_bej.png';
allstudydifficulty[ 1][1] = 'bec_bej.png';
allstudydifficulty[ 1][2] = 'bec_bej.png';
allstudydifficulty[ 2] = [];
allstudydifficulty[ 2][0] = 'bec_bej.png';
allstudydifficulty[ 2][1] = 'bec_bej.png';
allstudydifficulty[ 2][2] = 'bec_gri.png';
allstudydifficulty[ 3] = [];
allstudydifficulty[ 3][0] = 'bec_bej.png';
allstudydifficulty[ 3][1] = 'bec_gri.png';
allstudydifficulty[ 3][2] = 'bec_gri.png';
allstudydifficulty[ 4] = [];
allstudydifficulty[ 4][0] = 'bec_bej.png';
allstudydifficulty[ 4][1] = 'bec_bej.png';
allstudydifficulty[ 4][2] = 'bec_bej.png';
allstudydifficulty[ 5] = [];
allstudydifficulty[ 5][0] = 'bec_bej.png';
allstudydifficulty[ 5][1] = 'bec_bej.png';
allstudydifficulty[ 5][2] = 'bec_gri.png';
allstudydifficulty[ 6] = [];
allstudydifficulty[ 6][0] = 'bec_bej.png';
allstudydifficulty[ 6][1] = 'bec_bej.png';
allstudydifficulty[ 6][2] = 'bec_bej.png';
allstudydifficulty[ 7] = [];
allstudydifficulty[ 7][0] = 'bec_bej.png';
allstudydifficulty[ 7][1] = 'bec_bej.png';
allstudydifficulty[ 7][2] = 'bec_gri.png';
allstudydifficulty[ 8] = [];
allstudydifficulty[ 8][0] = 'bec_bej.png';
allstudydifficulty[ 8][1] = 'bec_bej.png';
allstudydifficulty[ 8][2] = 'bec_gri.png';
allstudydifficulty[ 9] = [];
allstudydifficulty[ 9][0] = 'bec_bej.png';
allstudydifficulty[ 9][1] = 'bec_bej.png';
allstudydifficulty[ 9][2] = 'bec_gri.png';
allstudydifficulty[10] = [];
allstudydifficulty[10][0] = 'bec_bej.png';
allstudydifficulty[10][1] = 'bec_gri.png';
allstudydifficulty[10][2] = 'bec_gri.png';
allstudydifficulty[11] = [];
allstudydifficulty[11][0] = 'bec_bej.png';
allstudydifficulty[11][1] = 'bec_bej.png';
allstudydifficulty[11][2] = 'bec_gri.png';
allstudydifficulty[12] = [];
allstudydifficulty[12][0] = 'bec_bej.png';
allstudydifficulty[12][1] = 'bec_bej.png';
allstudydifficulty[12][2] = 'bec_gri.png';
allstudydifficulty[13] = [];
allstudydifficulty[13][0] = 'bec_bej.png';
allstudydifficulty[13][1] = 'bec_bej.png';
allstudydifficulty[13][2] = 'bec_bej.png';
allstudydifficulty[14] = [];
allstudydifficulty[14][0] = 'bec_bej.png';
allstudydifficulty[14][1] = 'bec_bej.png';
allstudydifficulty[14][2] = 'bec_gri.png';
allstudydifficulty[15] = [];
allstudydifficulty[15][0] = 'bec_bej.png';
allstudydifficulty[15][1] = 'bec_bej.png';
allstudydifficulty[15][2] = 'bec_gri.png';
allstudydifficulty[16] = [];
allstudydifficulty[16][0] = 'bec_bej.png';
allstudydifficulty[16][1] = 'bec_gri.png';
allstudydifficulty[16][2] = 'bec_gri.png';
allstudydifficulty[17] = [];
allstudydifficulty[17][0] = 'bec_bej.png';
allstudydifficulty[17][1] = 'bec_gri.png';
allstudydifficulty[17][2] = 'bec_gri.png';
allstudydifficulty[18] = [];
allstudydifficulty[18][0] = 'bec_bej.png';
allstudydifficulty[18][1] = 'bec_bej.png';
allstudydifficulty[18][2] = 'bec_bej.png';
allstudydifficulty[19] = [];
allstudydifficulty[19][0] = 'bec_bej.png';
allstudydifficulty[19][1] = 'bec_bej.png';
allstudydifficulty[19][2] = 'bec_gri.png';
allstudydifficulty[20] = [];
allstudydifficulty[20][0] = 'bec_bej.png';
allstudydifficulty[20][1] = 'bec_bej.png';
allstudydifficulty[20][2] = 'bec_bej.png';
allstudydifficulty[21] = [];
allstudydifficulty[21][0] = 'bec_bej.png';
allstudydifficulty[21][1] = 'bec_bej.png';
allstudydifficulty[21][2] = 'bec_bej.png';

var allstudyfens = [];
allstudyfens[ 0] = '[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1"]';
allstudyfens[ 1] = '[FEN "3k4/2pq3p/pp5R/4P3/P6P/2PN4/1PN3K1/8 w - - 0 1"]';
allstudyfens[ 2] = '[FEN "6Nk/pp2Np1p/2p2Pp1/2R2bP1/7K/P7/1q1n1Q2/5n2 w - - 0 1"]';
allstudyfens[ 3] = '[FEN "5B1q/3N3p/p3p2p/7k/B7/5PP1/K6P/8 w - - 0 1"]';
allstudyfens[ 4] = '[FEN "7q/b1p5/1p1Npkb1/pPP2ppP/P1P5/3B2P1/5P1R/K3R3 w - - 0 1"]';
allstudyfens[ 5] = '[FEN "8/b4kp1/2p1p3/5pB1/p1PP4/1p6/3K1P2/3N4 w - - 0 1"]';
allstudyfens[ 6] = '[FEN "2k4N/Q1np4/2p2Bpp/1p1P4/pPP1p2P/P7/7q/1K6 w - - 0 1"]';
allstudyfens[ 7] = '[FEN "8/b7/3p2b1/5p1n/5Pk1/4P1p1/B5P1/R4K2 w - - 0 1"]';
allstudyfens[ 8] = '[FEN "q7/b1p5/kp1p4/p2PN3/PPP5/1K6/8/5B2 w - - 0 1"]';
allstudyfens[ 9] = '[FEN "1N4K1/1pp1p3/7k/2r3pP/p2pp1P1/P6N/8/2B5 w - - 0 1"]'; 
allstudyfens[10] = '[FEN "4B3/k1K1pp2/p3bq2/2p1p3/1p2P1P1/4P2Q/nR6/8 w - - 0 1"]';
allstudyfens[11] = '[FEN "4N2k/4PB1p/7P/B1p5/2P5/3q2Pp/1P3P1K/2r5 w - - 0 1"]';  
allstudyfens[12] = '[FEN "2b5/1pr4p/3bp1pk/1p6/1PpN2PP/K1P1n3/P3N1R1/3R4 w - - 0 1"]';
allstudyfens[13] = '[FEN "8/4Pr1N/8/6PN/8/3K1ppp/4prkb/4Bbnn w - - 0 1"]';  
allstudyfens[14] = '[FEN "3B2r1/n3Pp2/P7/5k1p/q3NP2/7K/5P2/4NB2 w - - 0 1"]'; 
allstudyfens[15] = '[FEN "8/q1p1N1p1/3p1p1p/pk5P/1p2BB2/8/PK3P2/8 w - - 0 1"]'; 
allstudyfens[16] = '[FEN "6kq/2p4p/6P1/5nN1/K7/2P5/7B/3B4 w - - 0 1"]'; 
allstudyfens[17] = '[FEN "8/1B3b1p/7P/p2p4/P2pp1kp/Q7/1N1Pq2P/7K w - - 0 1"]';
allstudyfens[18] = '[FEN "6k1/1qr1p2p/ppN5/3p1N2/6p1/1P1P2Pp/PP2PP1P/2RK4 w - - 0 1"]';
allstudyfens[19] = '[FEN "8/pr1Pq3/br1kP3/1R2RQ2/5p2/1nPK4/5P2/8 w - - 0 1"]';
allstudyfens[20] = '[FEN "4b3/5p2/2p4p/P1p1PN2/2pn2P1/P2k4/Pr1npKN1/B7 w - - 0 1"]'; 
allstudyfens[21] = '[FEN "4q1kn/2Bp1p2/1N1PpPp1/1P2P1P1/2N3b1/6p1/1P4Pb/7K w - - 0 1"]'; 
 
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
allstudynames[ 7][0] = 'Fund&#x103;tur&#x103;';
allstudynames[ 7][1] = 'Blind Alley';
allstudynames[ 7][2] = 'Sackgasse';
allstudynames[ 8] = [];
allstudynames[ 8][0] = '&#xCE;ncetineal&#x103;';
allstudynames[ 8][1] = 'Slowness';
allstudynames[ 8][2] = 'Langsamkeit';
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
allstudynames[12][0] = 'Disperare';
allstudynames[12][1] = 'Desperation';
allstudynames[12][2] = 'Verzweiflung';
allstudynames[13] = [];
allstudynames[13][0] = 'Scut';
allstudynames[13][1] = 'Shield';
allstudynames[13][2] = 'Schild';
allstudynames[14] = [];
allstudynames[14][0] = 'Furculi&#x21B;e';
allstudynames[14][1] = 'Fork-field';
allstudynames[14][2] = 'Gabel-Feld';
allstudynames[15] = [];
allstudynames[15][0] = 'H&#x103;r&#x163;uial&#x103;';
allstudynames[15][1] = 'Harassment';
allstudynames[15][2] = 'Bel&#228;stigung';
allstudynames[16] = [];
allstudynames[16][0] = 'Sufocare';
allstudynames[16][1] = 'Smothering';
allstudynames[16][2] = 'Erstickung';
allstudynames[17] = [];
allstudynames[17][0] = 'Undi&#x163;&#x103;';
allstudynames[17][1] = 'Fishing Rod';
allstudynames[17][2] = 'Angelrute';
allstudynames[18] = [];
allstudynames[18][0] = 'Cetate';
allstudynames[18][1] = 'Stronghold';
allstudynames[18][2] = 'Schloss';
allstudynames[19] = [];
allstudynames[19][0] = 'Deochi';
allstudynames[19][1] = 'Evil Eye';
allstudynames[19][2] = 'B&ouml;ser Blick';
allstudynames[20] = [];
allstudynames[20][0] = 'Carusel';
allstudynames[20][1] = 'Roundabout';
allstudynames[20][2] = 'Karussell';
allstudynames[21] = [];
allstudynames[21][0] = 'Confuzie';
allstudynames[21][1] = 'Confusion';
allstudynames[21][2] = 'Verwirrspiel';

var allstudystips = [];
allstudystips[ 0] = [];
allstudystips[ 0][0] = '...';
allstudystips[ 0][1] = '...';
allstudystips[ 0][2] = '...';
allstudystips[ 0][3] = '...';
allstudystips[ 1] = [];
allstudystips[ 1][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 1][1] = 'White to move and win';
allstudystips[ 1][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 1][3] = '+-';
allstudystips[ 2] = [];
allstudystips[ 2][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 2][1] = 'White to move and win';
allstudystips[ 2][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 2][3] = '+-';
allstudystips[ 3] = [];
allstudystips[ 3][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 3][1] = 'White to move and win';
allstudystips[ 3][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 3][3] = '+-';
allstudystips[ 4] = [];
allstudystips[ 4][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 4][1] = 'White to move and win';
allstudystips[ 4][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 4][3] = '+-';
allstudystips[ 5] = [];
allstudystips[ 5][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[ 5][1] = 'White to move and draw';
allstudystips[ 5][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[ 5][3] = '==';
allstudystips[ 6] = [];
allstudystips[ 6][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 6][1] = 'White to move and win';
allstudystips[ 6][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 6][3] = '+-';
allstudystips[ 7] = [];
allstudystips[ 7][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[ 7][1] = 'White to move and draw';
allstudystips[ 7][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[ 7][3] = '==';
allstudystips[ 8] = [];
allstudystips[ 8][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[ 8][1] = 'White to move and win';
allstudystips[ 8][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[ 8][3] = '+-';
allstudystips[ 9] = [];
allstudystips[ 9][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[ 9][1] = 'White to move and draw';
allstudystips[ 9][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[ 9][3] = '==';
allstudystips[10] = [];
allstudystips[10][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[10][1] = 'White to move and draw';
allstudystips[10][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[10][3] = '==';
allstudystips[11] = [];
allstudystips[11][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[11][1] = 'White to move and win';
allstudystips[11][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[11][3] = '+-';
allstudystips[12] = [];
allstudystips[12][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[12][1] = 'White to move and draw';
allstudystips[12][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[12][3] = '==';
allstudystips[13] = [];
allstudystips[13][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[13][1] = 'White to move and win';
allstudystips[13][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[13][3] = '+-';
allstudystips[14] = [];
allstudystips[14][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[14][1] = 'White to move and win';
allstudystips[14][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[14][3] = '+-';
allstudystips[15] = [];
allstudystips[15][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[15][1] = 'White to move and win';
allstudystips[15][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[15][3] = '+-';
allstudystips[16] = [];
allstudystips[16][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[16][1] = 'White to move and win';
allstudystips[16][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[16][3] = '+-';
allstudystips[17] = [];
allstudystips[17][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[17][1] = 'White to move and draw';
allstudystips[17][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[17][3] = '==';
allstudystips[18] = [];
allstudystips[18][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[18][1] = 'White to move and draw';
allstudystips[18][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[18][3] = '==';
allstudystips[19] = [];
allstudystips[19][0] = 'Albul mut&#x103; &#x15F;i face remiz&#x103;';
allstudystips[19][1] = 'White to move and draw';
allstudystips[19][2] = 'Wei&szlig; zieht und h&auml;lt Remis';
allstudystips[19][3] = '==';
allstudystips[20] = [];
allstudystips[20][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[20][1] = 'White to move and win';
allstudystips[20][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[20][3] = '+-';
allstudystips[21] = [];
allstudystips[21][0] = 'Albul mut&#x103; &#x15F;i c&#xE2;&#x15F;tig&#x103;';
allstudystips[21][1] = 'White to move and win';
allstudystips[21][2] = 'Wei&szlig; zieht und gewinnt';
allstudystips[21][3] = '+-';

function setcurrchessvars(n)
{
    switch(n)
    {	case  1: 
            currchessfen = allstudyfens[1];
            coauthor = 'Peter Martan';
            currpgn[0] = '[Event "'+allstudystips[1][0]+'"][Site "Glarean"][Date "10.2009"][Round "'+allstudynames[1][0]+'"][White "Mihai Neghina"][Black "Peter Martan"][Result "1-0"]'+allstudyfens[1]+' 1. Nd4! Qg7+ 2. Kh3! Qxh6 3. Nf4 Kc8 ( 3... Kd7 4. Nde6 Kc6 ( 4... Qxe6+ 5. Nxe6 Kxe6 6. Kg4 Kxe5 7. Kg5 ) ( 4... b5 5. a5 Kc6 6. h5 b4 7. c4 Kb7 8. Kg4 Kb8 9. Kf5 Kb7 10. Ke4 Kc6 11. b3 Kd7 12. Kd5 ) ( 4... c5 5. Kg3 Kc6 6. h5 a5 7. c4 Kd7 8. Kf3 Kc6 9. Ke4 Kb7 10. Kd5 Ka7 11. Kc6 Ka6 12. Kd6 Kb7 13. Kd7 Ka7 14. Kc7 Ka6 15. Kb8 ) ( 4... a5 5. h5 c6 6. Kg3 Kc8 7. Kf3 Kd7 8. Ke4 Kc8 9. c4 Kb8 10. Kd4 Ka7 11. c5 Ka6 12. Kc4 Ka7 13. cxb6+ Kxb6 14. Kd4 c5+ 15. Kd5 c4 16. Kxc4 Kc6 17. b4 axb4 18. Kxb4 ) 5. h5 b5 6. a5 Kd7 7. Kg3 c6 8. Kf3 Kc8 9. Ke4 ) 4. Nde6 Kb7 5. h5 c5 ( 5... c6 6. Kg3 Kc8 7. Kf3 Kb8 8. Ke4 a5 ( 8... Kb7 9. c4 Kb8 10. b4 Kc8 11. Kd4 Kb8 12. b5 Kb7 13. Ke4 a5 14. Kd4 cxb5 15. cxb5 Kc8 16. Ke4 Kb8 17. Kd5 Kb7 18. Kd6 ) 9. c4 Kc8 ( 9... Ka7 10. c5 bxc5 11. Kd3 Kb8 12. Kc4 Kc8 13. Kxc5 ) 10. Kd4 Kb7 11. c5 Ka7 12. Kc4 Ka6 13. cxb6 Kxb6 14. Kd4 c5+ 15. Kd5 ) ( 5... Kc6 6. Kg3 b5 7. a5 b4 8. c4 b3 9. Kf3 Kb7 10. Ke4 Kc8 11. Kd4 ) ( 5... a5 6. Kg4 Kc6 7. c4 Kb7 8. Kf5 c6 9. Ke4 b5 10. axb5 cxb5 11. c5 Kc6 12. Kd4 a4 13. Kc3 ) 6. Kg4 c4 ( 6... Kc6 7. Kf3 b5 ( 7... a5 8. c4 ) ( 7... Kd7 8. Ke3 Kc6 9. Ke4 ) 8. a5 c4 9. Ke4 b4 10. Kd4 Kb5 11. Kd5 bxc3 12. bxc3 Kxa5 13. Kxc4 ) ( 6... Kc6 7. Kf3 ) 7. Kf5 Kc6 8. Ke4 b5 9. axb5+ axb5 ( 9... Kxb5 10. Kd4 a5 11. Kd5 a4 12. Kd4 Kc6 13. Kxc4 ) 10. Kd4 Kb6 11. Kd5 Ka5 12. Kc5 Ka6 13. Kc6 Ka5 14. Kb7 b4 15. Kc6 bxc3 16. bxc3 Ka4 17. Kc5 Kb3 18. Kd4 Kc2 19. Kxc4 ';
            currpgn[1] = '[Event "'+allstudystips[1][1]+'"][Site "Glarean"][Date "10.2009"][Round "'+allstudynames[1][1]+'"][White "Mihai Neghina"][Black "Peter Martan"][Result "1-0"]'+allstudyfens[1]+' 1. Nd4! Qg7+ 2. Kh3! Qxh6 3. Nf4 Kc8 ( 3... Kd7 4. Nde6 Kc6 ( 4... Qxe6+ 5. Nxe6 Kxe6 6. Kg4 Kxe5 7. Kg5 ) ( 4... b5 5. a5 Kc6 6. h5 b4 7. c4 Kb7 8. Kg4 Kb8 9. Kf5 Kb7 10. Ke4 Kc6 11. b3 Kd7 12. Kd5 ) ( 4... c5 5. Kg3 Kc6 6. h5 a5 7. c4 Kd7 8. Kf3 Kc6 9. Ke4 Kb7 10. Kd5 Ka7 11. Kc6 Ka6 12. Kd6 Kb7 13. Kd7 Ka7 14. Kc7 Ka6 15. Kb8 ) ( 4... a5 5. h5 c6 6. Kg3 Kc8 7. Kf3 Kd7 8. Ke4 Kc8 9. c4 Kb8 10. Kd4 Ka7 11. c5 Ka6 12. Kc4 Ka7 13. cxb6+ Kxb6 14. Kd4 c5+ 15. Kd5 c4 16. Kxc4 Kc6 17. b4 axb4 18. Kxb4 ) 5. h5 b5 6. a5 Kd7 7. Kg3 c6 8. Kf3 Kc8 9. Ke4 ) 4. Nde6 Kb7 5. h5 c5 ( 5... c6 6. Kg3 Kc8 7. Kf3 Kb8 8. Ke4 a5 ( 8... Kb7 9. c4 Kb8 10. b4 Kc8 11. Kd4 Kb8 12. b5 Kb7 13. Ke4 a5 14. Kd4 cxb5 15. cxb5 Kc8 16. Ke4 Kb8 17. Kd5 Kb7 18. Kd6 ) 9. c4 Kc8 ( 9... Ka7 10. c5 bxc5 11. Kd3 Kb8 12. Kc4 Kc8 13. Kxc5 ) 10. Kd4 Kb7 11. c5 Ka7 12. Kc4 Ka6 13. cxb6 Kxb6 14. Kd4 c5+ 15. Kd5 ) ( 5... Kc6 6. Kg3 b5 7. a5 b4 8. c4 b3 9. Kf3 Kb7 10. Ke4 Kc8 11. Kd4 ) ( 5... a5 6. Kg4 Kc6 7. c4 Kb7 8. Kf5 c6 9. Ke4 b5 10. axb5 cxb5 11. c5 Kc6 12. Kd4 a4 13. Kc3 ) 6. Kg4 c4 ( 6... Kc6 7. Kf3 b5 ( 7... a5 8. c4 ) ( 7... Kd7 8. Ke3 Kc6 9. Ke4 ) 8. a5 c4 9. Ke4 b4 10. Kd4 Kb5 11. Kd5 bxc3 12. bxc3 Kxa5 13. Kxc4 ) ( 6... Kc6 7. Kf3 ) 7. Kf5 Kc6 8. Ke4 b5 9. axb5+ axb5 ( 9... Kxb5 10. Kd4 a5 11. Kd5 a4 12. Kd4 Kc6 13. Kxc4 ) 10. Kd4 Kb6 11. Kd5 Ka5 12. Kc5 Ka6 13. Kc6 Ka5 14. Kb7 b4 15. Kc6 bxc3 16. bxc3 Ka4 17. Kc5 Kb3 18. Kd4 Kc2 19. Kxc4 ';
            currpgn[2] = '[Event "'+allstudystips[1][2]+'"][Site "Glarean"][Date "10.2009"][Round "'+allstudynames[1][2]+'"][White "Mihai Neghina"][Black "Peter Martan"][Result "1-0"]'+allstudyfens[1]+' 1. Nd4! Qg7+ 2. Kh3! Qxh6 3. Nf4 Kc8 ( 3... Kd7 4. Nde6 Kc6 ( 4... Qxe6+ 5. Nxe6 Kxe6 6. Kg4 Kxe5 7. Kg5 ) ( 4... b5 5. a5 Kc6 6. h5 b4 7. c4 Kb7 8. Kg4 Kb8 9. Kf5 Kb7 10. Ke4 Kc6 11. b3 Kd7 12. Kd5 ) ( 4... c5 5. Kg3 Kc6 6. h5 a5 7. c4 Kd7 8. Kf3 Kc6 9. Ke4 Kb7 10. Kd5 Ka7 11. Kc6 Ka6 12. Kd6 Kb7 13. Kd7 Ka7 14. Kc7 Ka6 15. Kb8 ) ( 4... a5 5. h5 c6 6. Kg3 Kc8 7. Kf3 Kd7 8. Ke4 Kc8 9. c4 Kb8 10. Kd4 Ka7 11. c5 Ka6 12. Kc4 Ka7 13. cxb6+ Kxb6 14. Kd4 c5+ 15. Kd5 c4 16. Kxc4 Kc6 17. b4 axb4 18. Kxb4 ) 5. h5 b5 6. a5 Kd7 7. Kg3 c6 8. Kf3 Kc8 9. Ke4 ) 4. Nde6 Kb7 5. h5 c5 ( 5... c6 6. Kg3 Kc8 7. Kf3 Kb8 8. Ke4 a5 ( 8... Kb7 9. c4 Kb8 10. b4 Kc8 11. Kd4 Kb8 12. b5 Kb7 13. Ke4 a5 14. Kd4 cxb5 15. cxb5 Kc8 16. Ke4 Kb8 17. Kd5 Kb7 18. Kd6 ) 9. c4 Kc8 ( 9... Ka7 10. c5 bxc5 11. Kd3 Kb8 12. Kc4 Kc8 13. Kxc5 ) 10. Kd4 Kb7 11. c5 Ka7 12. Kc4 Ka6 13. cxb6 Kxb6 14. Kd4 c5+ 15. Kd5 ) ( 5... Kc6 6. Kg3 b5 7. a5 b4 8. c4 b3 9. Kf3 Kb7 10. Ke4 Kc8 11. Kd4 ) ( 5... a5 6. Kg4 Kc6 7. c4 Kb7 8. Kf5 c6 9. Ke4 b5 10. axb5 cxb5 11. c5 Kc6 12. Kd4 a4 13. Kc3 ) 6. Kg4 c4 ( 6... Kc6 7. Kf3 b5 ( 7... a5 8. c4 ) ( 7... Kd7 8. Ke3 Kc6 9. Ke4 ) 8. a5 c4 9. Ke4 b4 10. Kd4 Kb5 11. Kd5 bxc3 12. bxc3 Kxa5 13. Kxc4 ) ( 6... Kc6 7. Kf3 ) 7. Kf5 Kc6 8. Ke4 b5 9. axb5+ axb5 ( 9... Kxb5 10. Kd4 a5 11. Kd5 a4 12. Kd4 Kc6 13. Kxc4 ) 10. Kd4 Kb6 11. Kd5 Ka5 12. Kc5 Ka6 13. Kc6 Ka5 14. Kb7 b4 15. Kc6 bxc3 16. bxc3 Ka4 17. Kc5 Kb3 18. Kd4 Kc2 19. Kxc4 ';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(19);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Men&#x21B;ionat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(18);">Chess, Imagination and Perceptual Understanding</a> [P.Coates,2013]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(13);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Povestea studiului publicat&#x103; &#xEE;n cartea <a href="javascript:void(0);" onClick="openChessObject(14);">A Study Apiece</a> [G.Josten,2010]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(11);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Versiunea final&#x103; publicat&#x103; &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(12);">Glarean</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(15);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Versiunea ini&#x21B;ial&#x103; publicat&#x103; &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(17);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul revistei <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> [2009]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(19);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Mentioned in paper <a href="javascript:void(0);" onClick="openChessObject(18);">Chess, Imagination and Perceptual Understanding</a> [P.Coates,2013]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(13);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Story of the study published in book <a href="javascript:void(0);" onClick="openChessObject(14);">A Study Apiece</a> [G.Josten,2010]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(11);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Final version published in <a href="javascript:void(0);" onClick="openChessObject(12);">Glarean</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(15);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Initial (cooked) version published in <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(17);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Awarded an honorable mention in the <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> Informal Tourney 2009\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(19);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erw&auml;hnt im Artikel <a href="javascript:void(0);" onClick="openChessObject(18);">Chess, Imagination and Perceptual Understanding</a> [P.Coates,2013]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(13);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Geschichte der Studie im Buch <a href="javascript:void(0);" onClick="openChessObject(14);">A Study Apiece</a> ver&ouml;ffentlicht [G.Josten,2010]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(11);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Endversion in <a href="javascript:void(0);" onClick="openChessObject(12);">Glarean</a> Magazin ver&ouml;ffentlicht [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(15);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erstversion (cooked) in <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> ver&ouml;ffentlicht [2009]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(17);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(16);">MatPlus</a> Informal Tourney 2009 gewonnen\
                        ';
            break;
            
        case  2: 
            currchessfen = allstudyfens[2];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[2][0]+'"][Site "Glarean"][Date "12.2009"][Round "'+allstudynames[2][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[2]+' 1. Rxf5 {Amenintarea: 1.-- Nf3+ 2.Qxf3 Qh2+ 3.Qh3 Qxh3#} (1. Nxf5? Nf3+ 2. Qxf3 (2. Kg4?? Qxf2{Negrul castiga}) 2... Qh2+ 3. Qh3 Qf4+ 4. Qg4 Qh2+{remiza}) 1... gxf5 2. Nh6 {amenintand Nxf7#} (2. Nxf5?? Qc1 3. Qf4 (3. Ngh6 Ne4 4. Qf3 Qxg5+ 5. Kh3 Nfd2 {Negrul castiga}) 3... Qe1+ 4. Kh3 Qe4 5. Qxe4 Nxe4 6. Ngh6 Nxg5+ {Negrul castiga}) 2... Nf3+ {Zwichenzug} 3. Kh5! (3. Qxf3? Qh2+ 4. Qh3 Qf2+ 5. Kh5 Qe2+ 6. Kh4{remiza}) 3... Qa2 {Damele se ataca reciproc, insa niciuna nu poate captura ceva fara sa permita matul advers. Negrul are doar mutari de pion, in timp ce Albul poate muta Qf7<->Qg7} 4. a4{Apararea pasiva 4.Qg2 ar putea functiona...} (4. Qg2 b5 5. Qf2 a5 6. Qg2 b4 7. axb4 a4 8. b5 cxb5 {transpunere la varianta principala}) 4... a5 (4... b6 5. Qg2 a6 6. Qf2 b5 7. a5! {Pionul a este vital pentru varianta aceasta} b4 8. Qg2 Qc4 9. Qxf3 Ng3+ 10. Qxg3 Qe2+ 11. Kh4 Qe4+ 12. Kh3 Qh1+ 13. Qh2 Qf3+ 14. Kh4 Qe4+ 15. Kh5 Qf3+ 16. Ng4 Qxg4+ 17. Kh6 f4 18. Qh1 b3 19. Nxc6 f3 20. Ne5 Qf5 21. Qxf3 Qxf3 22. Nxf3 b2 23. Nd2 Kg8 24. Nb1 {tempo} Kh8 25. Kh5 Kg8 26. Kg4 Kf8 27. Kf5 Ke8 28. Ke5 Kd7 29. Kd5 Kc7 30. Kc5{Albul castiga}) 5. Qg2 b6 6. Qf2 b5 7. axb5 (7. Qg2{Comparativ cu varianta principala, diagonala a8-h1 inca este blocata} bxa4 8. Qf2 a3 9. Qg2 Qc4 10. Qxf3 Ng3+ 11. Qxg3 Qe2+ 12. Kh4 Qe4+ 13. Kh3 Qh1+ 14. Qh2 Qf3+ 15. Kh4 Qe4+ 16. Kh5 Qf3+ 17. Kh4{remiza} (17. Ng4?? Qxg4+ 18. Kh6 f4 19. Nxc6 a2{Negrul castiga})) 7... cxb5 8. Qg2 a4 9. Qf2 a3 10. Qg2 b4 11. Qf2 {zugzwang adevarat} Qb3 (11... Qc4 12. Qxf3 {Albul castiga}) 12. Qxf1 Nd2 13. Qg2 {ameninta Qa8#} Ne4 14. Nhxf5 a2 15. Qxe4 a1=Q {apara campul a8} 16. Kh6! {evita Qd1+} (16. Nh4?? Qe6 17. Qb7 Qd1+ 18. Kh6 Qd8 {winning for Black}) 16... Qh3+ (16... Qe6 17. Qb7 Qc3 18. Qb8+ Qec8 19. Qxc8+ Qxc8 20. Nxc8{Albul castiga}) 17. Nh4 {ameninta Ng6 - Qe8#} Qxh4+ 18. Qxh4 {Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[2][1]+'"][Site "Glarean"][Date "12.2009"][Round "'+allstudynames[2][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[2]+' 1. Rxf5 {The threat was 1.-- Nf3+ 2.Qxf3 Qh2+ 3.Qh3 Qxh3#} (1. Nxf5? Nf3+ 2. Qxf3 (2. Kg4?? Qxf2{winning for Black}) 2... Qh2+ 3. Qh3 Qf4+ 4. Qg4 Qh2+{draw}) 1... gxf5 2. Nh6 {Threatening Nxf7#} (2. Nxf5?? Qc1 3. Qf4 (3. Ngh6 Ne4 4. Qf3 Qxg5+ 5. Kh3 Nfd2 {winning for Black}) 3... Qe1+ 4. Kh3 Qe4 5. Qxe4 Nxe4 6. Ngh6 Nxg5+ {winning for Black}) 2... Nf3+ {Zwichenzug} 3. Kh5! (3. Qxf3? Qh2+ 4. Qh3 Qf2+ 5. Kh5 Qe2+ 6. Kh4{draw}) 3... Qa2 {Queens attack each other, but neither can capture anything without allowing mate. Black only has pawn moves, while White can shuffle Qf7<>Qg7 indefinitely} 4. a4{Passive defense 4.Qg2 may also work} (4. Qg2 b5 5. Qf2 a5 6. Qg2 b4 7. axb4 a4 8. b5 cxb5 {transposing to mainline}) 4... a5 (4... b6 5. Qg2 a6 6. Qf2 b5 7. a5! {The a-pawn must stay alive in this variation, it is vital for winning the game} b4 8. Qg2 Qc4 9. Qxf3 Ng3+ 10. Qxg3 Qe2+ 11. Kh4 Qe4+ 12. Kh3 Qh1+ 13. Qh2 Qf3+ 14. Kh4 Qe4+ 15. Kh5 Qf3+ 16. Ng4 Qxg4+ 17. Kh6 f4 18. Qh1 b3 19. Nxc6 f3 20. Ne5 Qf5 21. Qxf3 Qxf3 22. Nxf3 b2 23. Nd2 Kg8 24. Nb1 {temporizing} Kh8 25. Kh5 Kg8 26. Kg4 Kf8 27. Kf5 Ke8 28. Ke5 Kd7 29. Kd5 Kc7 30. Kc5{winning for White}) 5. Qg2 b6 6. Qf2 b5 7. axb5 (7. Qg2{Compared to the mainline, the long diagonal a8-h1 is still blocked, which is extremely important} bxa4 8. Qf2 a3 9. Qg2 Qc4 10. Qxf3 Ng3+ 11. Qxg3 Qe2+ 12. Kh4 Qe4+ 13. Kh3 Qh1+ 14. Qh2 Qf3+ 15. Kh4 Qe4+ 16. Kh5 Qf3+ 17. Kh4{draw} (17. Ng4?? Qxg4+ 18. Kh6 f4 19. Nxc6 a2{winning for Black})) 7... cxb5 8. Qg2 a4 9. Qf2 a3 10. Qg2 b4 11. Qf2 {Finally, true zugzwang for Black} Qb3 (11... Qc4 12. Qxf3 {winning for White}) 12. Qxf1 Nd2 13. Qg2 {threatens Qa8#} Ne4 14. Nhxf5 a2 15. Qxe4 a1=Q {defends a8} 16. Kh6! {thwarts the Qd1+ resource} (16. Nh4?? Qe6 17. Qb7 Qd1+ 18. Kh6 Qd8 {winning for Black}) 16... Qh3+ (16... Qe6 17. Qb7 Qc3 18. Qb8+ Qec8 19. Qxc8+ Qxc8 20. Nxc8{winning for White}) 17. Nh4 {threatens Ng6 - Qe8#} Qxh4+ 18. Qxh4 {winning for White}';
            currpgn[2] = '[Event "'+allstudystips[2][2]+'"][Site "Glarean"][Date "12.2009"][Round "'+allstudynames[2][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[2]+' 1. Rxf5 {Die Drohung war 1.-- Nf3+ 2.Qxf3 Qh2+ 3.Qh3 Qxh3#} (1. Nxf5? Nf3+ 2. Qxf3 (2. Kg4?? Qxf2{Schwarz gewinnt}) 2... Qh2+ 3. Qh3 Qf4+ 4. Qg4 Qh2+{Remis}) 1... gxf5 2. Nh6 {drohend Nxf7#} (2. Nxf5?? Qc1 3. Qf4 (3. Ngh6 Ne4 4. Qf3 Qxg5+ 5. Kh3 Nfd2 {Schwarz gewinnt}) 3... Qe1+ 4. Kh3 Qe4 5. Qxe4 Nxe4 6. Ngh6 Nxg5+ {Schwarz gewinnt}) 2... Nf3+ {Zwichenzug} 3. Kh5! (3. Qxf3? Qh2+ 4. Qh3 Qf2+ 5. Kh5 Qe2+ 6. Kh4{Remis}) 3... Qa2 {Die Damen greifen einander an, aber keine kann irgend etwas schlagen ohne Matt zuzulassen. Fast gegenseitiger Zugzwang: Schwarz hat nur Bauernzüge, Weiß hat nur Df7<->g7, während der weiße Bauer Wache hält.} 4. a4{Passive Verteidigung 4.Qg2 könnte auch funktionieren...} (4. Qg2 b5 5. Qf2 a5 6. Qg2 b4 7. axb4 a4 8. b5 cxb5 {zurück zur Hauptvariante}) 4... a5 (4... b6 5. Qg2 a6 6. Qf2 b5 7. a5! {Der a-Bauer ist in dieser Variante entscheidend} b4 8. Qg2 Qc4 9. Qxf3 Ng3+ 10. Qxg3 Qe2+ 11. Kh4 Qe4+ 12. Kh3 Qh1+ 13. Qh2 Qf3+ 14. Kh4 Qe4+ 15. Kh5 Qf3+ 16. Ng4 Qxg4+ 17. Kh6 f4 18. Qh1 b3 19. Nxc6 f3 20. Ne5 Qf5 21. Qxf3 Qxf3 22. Nxf3 b2 23. Nd2 Kg8 24. Nb1 {Wartezug} Kh8 25. Kh5 Kg8 26. Kg4 Kf8 27. Kf5 Ke8 28. Ke5 Kd7 29. Kd5 Kc7 30. Kc5{Weiß gewinnt}) 5. Qg2 b6 6. Qf2 b5 7. axb5 (7. Qg2{Im Vergleich zur Hauptvariante, ist die a8-h1 Diagonale immer noch gesperrt} bxa4 8. Qf2 a3 9. Qg2 Qc4 10. Qxf3 Ng3+ 11. Qxg3 Qe2+ 12. Kh4 Qe4+ 13. Kh3 Qh1+ 14. Qh2 Qf3+ 15. Kh4 Qe4+ 16. Kh5 Qf3+ 17. Kh4{Remis} (17. Ng4?? Qxg4+ 18. Kh6 f4 19. Nxc6 a2{winning for Black})) 7... cxb5 8. Qg2 a4 9. Qf2 a3 10. Qg2 b4 11. Qf2 {Endlich, wahrer Zugzwang für Schwarz} Qb3 (11... Qc4 12. Qxf3 {Weiß gewinnt}) 12. Qxf1 Nd2 13. Qg2 {droht Qa8#} Ne4 14. Nhxf5 a2 15. Qxe4 a1=Q {verteidigt a8} 16. Kh6! {vermeidet Qd1+} (16. Nh4?? Qe6 17. Qb7 Qd1+ 18. Kh6 Qd8 {Schwarz gewinnt}) 16... Qh3+ (16... Qe6 17. Qb7 Qc3 18. Qb8+ Qec8 19. Qxc8+ Qxc8 20. Nxc8{Weiß gewinnt}) 17. Nh4 {droht Ng6 - Qe8#} Qxh4+ 18. Qxh4 {Weiß gewinnt}';
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
            currchessfen = allstudyfens[3];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[3][0]+'"][Site "Glarean"][Date "07.2010"][Round "'+allstudynames[3][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[3]+' 1. Ne5 Qxf8 (1... Qxe5 2. Be8+ Kg5 3. f4+ {Albul castiga}) 2. f4 (2. Bc6? Kg5 3. h4+ Kf5 4. Nd7 Qb4 5. Be4+ Qxe4 6. fxe4+ Kxe4 {remiza}) 2... Qd8 {aparand atat e8 cat si d1} 3. Bc6 (3. Bd7? {nebunul nu acopera campul d5} Qa5+ 4. Kb3 Qd5+ {remiza, deoarece regele nu poate avansa}) (3. Bc2? Qa5+ 4. Kb2 Qb5+ 5. Kc1 Qc5 6. Kd2 Qa5+ 7. Ke3 Qc5+ {remiza deoarece regele nici nu poate abandona nebunul, nici nu-l poate ajuta sa ajunga la d1}) (3. Kb2? {sau 6.Ka3 sau 6.Kb3} Qb6+ 4. Kc3 Qa5+ 5. Kb3 Qd5+ 6. Ka3 Qc5+ 7. Ka2 Qd5+ {remiza deoarece regele nici nu poate abandona nebunul, nici nu-l poate ajuta sa ajunga la d1}) 3... Qd2+ 4. Kb3 Qe3+ 5. Kc4 Qc1+ 6. Kb4 Qb2+ 7. Kc5 Qa3+ 8. Kb6 Qd6 9. Kb7 ({Pionul negru din a nu trebuie luat in nici o varianta.} 9. Kxa6? Qa3+ 10. Kb7 Qa7+ 11. Kc8 Qc7+ 12. Kxc7 {Stalemate}) 9... Qe7+ 10. Kc8 Qf8+ 11. Kd7 Qg7+ 12. Kd8 {Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[3][1]+'"][Site "Glarean"][Date "07.2010"][Round "'+allstudynames[3][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[3]+' 1. Ne5 Qxf8 (1... Qxe5 2. Be8+ Kg5 3. f4+ {winning for White}) 2. f4 (2. Bc6? Kg5 3. h4+ Kf5 4. Nd7 Qb4 5. Be4+ Qxe4 6. fxe4+ Kxe4 {draw}) 2... Qd8 {covering both e8 and d1} 3. Bc6 (3. Bd7? {the bishop does not cover the important d5 square} Qa5+ 4. Kb3 Qd5+ {draw because the king cannot advance to the 5th row and beyond}) (3. Bc2? Qa5+ 4. Kb2 Qb5+ 5. Kc1 Qc5 6. Kd2 Qa5+ 7. Ke3 Qc5+ {draw by perpetual,because the king can neither abandon the bishop, nor drive it to d1}) (3. Kb2? {Also similar for 6.Ka3 and 6.Kb3} Qb6+ 4. Kc3 Qa5+ 5. Kb3 Qd5+ 6. Ka3 Qc5+ 7. Ka2 Qd5+ {draw by perpetual check, because the king can neither abandon the bishop, nor drive it to d1}) 3... Qd2+ 4. Kb3 Qe3+ 5. Kc4 Qc1+ 6. Kb4 Qb2+ 7. Kc5 Qa3+ 8. Kb6 Qd6 9. Kb7 ({The black a-pawn is the crucial piece that prevents a rambling queen, and therefore should not be taken in any variation.} 9. Kxa6? Qa3+ 10. Kb7 Qa7+ 11. Kc8 Qc7+ 12. Kxc7 {Stalemate}) 9... Qe7+ 10. Kc8 Qf8+ 11. Kd7 Qg7+ 12. Kd8 {winning for White}';
            currpgn[2] = '[Event "'+allstudystips[3][2]+'"][Site "Glarean"][Date "07.2010"][Round "'+allstudynames[3][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[3]+' 1. Ne5 Qxf8 (1... Qxe5 2. Be8+ Kg5 3. f4+ {Weiß gewinnt}) 2. f4 (2. Bc6? Kg5 3. h4+ Kf5 4. Nd7 Qb4 5. Be4+ Qxe4 6. fxe4+ Kxe4 {draw}) 2... Qd8 {verteidigt beide Felder e8 und d1} 3. Bc6 (3. Bd7? {der Läufer verteidigt d5 nicht} Qa5+ 4. Kb3 Qd5+ {Remis, denn der König cann nicht über die 5. Linie gehen}) (3. Bc2? Qa5+ 4. Kb2 Qb5+ 5. Kc1 Qc5 6. Kd2 Qa5+ 7. Ke3 Qc5+ {Remis, denn der König kann weder den Läufer verlassen, noch es zu d1 führen}) (3. Kb2? {oder 6.Ka3 oder 6.Kb3} Qb6+ 4. Kc3 Qa5+ 5. Kb3 Qd5+ 6. Ka3 Qc5+ 7. Ka2 Qd5+ {Remis, denn der König kann weder den Läufer verlassen, noch es zu d1 führen}) 3... Qd2+ 4. Kb3 Qe3+ 5. Kc4 Qc1+ 6. Kb4 Qb2+ 7. Kc5 Qa3+ 8. Kb6 Qd6 9. Kb7 ({Der a-Bauer muss stehen bleiben um Patt zu vermeiden.} 9. Kxa6? Qa3+ 10. Kb7 Qa7+ 11. Kc8 Qc7+ 12. Kxc7 {Patt}) 9... Qe7+ 10. Kc8 Qf8+ 11. Kd7 Qg7+ 12. Kd8 {Weiß gewinnt}';
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
            currchessfen = allstudyfens[4];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[4][0]+'"][Site "Euxinus Pontus"][Date "09.2010"][Round "'+allstudynames[4][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[4]+' 1. hxg6! (1. Nb7? Ke7+ 2. Ka2 Qc3 {remiza}) 1... Qxh2 2. Rxe6+! {dublu-sacrificiu de tura} Kxe6 3. g7 Qh1+ (3... Qh7 4. Bxf5+ {Albul castiga}) 4. Kb2 Qa8 5. Bxf5+ Kf6 6. Nc8 Kxg7 (6... Qxc8 7. Bxc8 Kxg7 8. c6 {Albul castiga}) 7. c6 Kf6 8. Bd7 Ke5 9. f3 Qb8 10. Kc3 Qa8 11. Kd3 Qb8 12. Ke3 Qa8 13. f4+ (13. Kf2 Qb8 14. Kg2 Qa8 15. Kh3 Qb8 16. Kg4 Kf6 17. f4 gxf4 18. Kxf4? {18.gxf4 transpozitie la varianta principala} Qa8 19. g4 Qb8 20. g5+ Kg6 21. Bf5+ Kg7 {si regele alb nu poate ajunge la d7 fara a trece prin e6, astfel ca ramane calul fara aparare}) 13... gxf4+ 14. gxf4+ Kf6 15. Kf3 Qb8 16. Kg4 Kg6 17. f5+ Kf6 (17... Kh6 18. Kf4 Kg7 19. Ke5 {Albul castiga}) 18. Kh5 Qa8 19. Kh6 Qb8 20. Kh7 Kf7 21. Be6+ Kf6 ( 21... Kf8 22. Kg6 {Albul castiga}) 22. Kg8 Qa8 23. Kf8 Qb8 24. Ke8 Qa8 25. Kd8 Qb8 26. Kd7';
            currpgn[1] = '[Event "'+allstudystips[4][1]+'"][Site "Euxinus Pontus"][Date "09.2010"][Round "'+allstudynames[4][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[4]+' 1. hxg6! (1. Nb7? Ke7+ 2. Ka2 Qc3 {draw}) 1... Qxh2 2. Rxe6+! {double rook sacrifice} Kxe6 3. g7 Qh1+ (3... Qh7 4. Bxf5+ {winning for White}) 4. Kb2 Qa8 5. Bxf5+ Kf6 6. Nc8 Kxg7 (6... Qxc8 7. Bxc8 Kxg7 8. c6 {winning for White}) 7. c6 Kf6 8. Bd7 Ke5 9. f3 Qb8 10. Kc3 Qa8 11. Kd3 Qb8 12. Ke3 Qa8 13. f4+ (13. Kf2 Qb8 14. Kg2 Qa8 15. Kh3 Qb8 16. Kg4 Kf6 17. f4 gxf4 18. Kxf4? {18.gxf4 transposes to the mainline} Qa8 19. g4 Qb8 20. g5+ Kg6 21. Bf5+ Kg7 {and the white king cannot reach d7 without passing through e6, thus leaving the knight undefended}) 13... gxf4+ 14. gxf4+ Kf6 15. Kf3 Qb8 16. Kg4 Kg6 17. f5+ Kf6 (17... Kh6 18. Kf4 Kg7 19. Ke5 {winning for White}) 18. Kh5 Qa8 19. Kh6 Qb8 20. Kh7 Kf7 21. Be6+ Kf6 ( 21... Kf8 22. Kg6 {winning for White}) 22. Kg8 Qa8 23. Kf8 Qb8 24. Ke8 Qa8 25. Kd8 Qb8 26. Kd7';
            currpgn[2] = '[Event "'+allstudystips[4][2]+'"][Site "Euxinus Pontus"][Date "09.2010"][Round "'+allstudynames[4][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[4]+' 1. hxg6! (1. Nb7? Ke7+ 2. Ka2 Qc3 {draw}) 1... Qxh2 2. Rxe6+! {doppel-Turm Opfer} Kxe6 3. g7 Qh1+ (3... Qh7 4. Bxf5+ {Weiß gewinnt}) 4. Kb2 Qa8 5. Bxf5+ Kf6 6. Nc8 Kxg7 (6... Qxc8 7. Bxc8 Kxg7 8. c6 {Weiß gewinnt}) 7. c6 Kf6 8. Bd7 Ke5 9. f3 Qb8 10. Kc3 Qa8 11. Kd3 Qb8 12. Ke3 Qa8 13. f4+ (13. Kf2 Qb8 14. Kg2 Qa8 15. Kh3 Qb8 16. Kg4 Kf6 17. f4 gxf4 18. Kxf4? {18.gxf4 transposes to the mainline} Qa8 19. g4 Qb8 20. g5+ Kg6 21. Bf5+ Kg7 {und der König kann nicht d7 erreichen, ohne dass er zuvor durch e6 tritt und den Springer unverteidigt lässt}) 13... gxf4+ 14. gxf4+ Kf6 15. Kf3 Qb8 16. Kg4 Kg6 17. f5+ Kf6 (17... Kh6 18. Kf4 Kg7 19. Ke5 {Weiß gewinnt}) 18. Kh5 Qa8 19. Kh6 Qb8 20. Kh7 Kf7 21. Be6+ Kf6 ( 21... Kf8 22. Kg6 {Weiß gewinnt}) 22. Kg8 Qa8 23. Kf8 Qb8 24. Ke8 Qa8 25. Kd8 Qb8 26. Kd7';
            currchessinfo[0] = 'Publicat &#xEE;n Euxinus Pontus [2010]';
            currchessinfo[1] = 'Published in Euxinus Pontus [2010]';
            currchessinfo[2] = 'Ver&ouml;ffentlicht in Euxinus Pontus [2010]';
            break;
            
        case  5: 
            currchessfen = allstudyfens[5];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[5][0]+'"][Site "Glarean"][Date "03.2011"][Round "'+allstudynames[5][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[5]+' 1. Kc3! (1. c5 a3 2. Kc3 a2 3. Kb2 e5 4. dxe5 Bxc5 5. Bd2 Bd4+ 6. Bc3 c5 {Negrul castiga})(1. Kd3 e5 {Negrul castiga})(1. Be3 f4 {Negrul castiga}) 1... Bxd4+ {momeala pentru rege} 2. Kxd4 (2. Kb4 b2 3. Nxb2 Bxb2 {Negrul castiga}) 2... b2 {sacrifica un pion pentru a-l promova pe celalalt} 3. Nxb2 {regele inca este in patratul pionului, insa acum calul ii sta in drum...} a3 4. Nd3 {Albul nu poate face nimic sa impiedice promovarea, asa ca aranjeaza o aparare tenace} a2 5. Ne5+ Ke8 6. f4 {Toate piesele sunt aparate, iar regele negru este inchis in jurul h8... regina nu poate da mat singura.}';
            currpgn[1] = '[Event "'+allstudystips[5][1]+'"][Site "Glarean"][Date "03.2011"][Round "'+allstudynames[5][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[5]+' 1. Kc3! (1. c5 a3 2. Kc3 a2 3. Kb2 e5 4. dxe5 Bxc5 5. Bd2 Bd4+ 6. Bc3 c5 {winning for Black})(1. Kd3 e5 {winning for Black})(1. Be3 f4 {winning for Black}) 1... Bxd4+ {decoy for the king} 2. Kxd4 (2. Kb4 b2 3. Nxb2 Bxb2 {winning for Black}) 2... b2 {sacrificing one pawn in order to promote the other} 3. Nxb2 {the king is still in the square of the a-pawn, but the knight is now blocking the path...} a3 4. Nd3 {White can do nothing about the promotion, but can arrange for a stubborn defense} a2 5. Ne5+ Ke8 6. f4 {All pieces are protected and the black king is confined to squares around h8... well, the queen cannot mate all by herself.}';
            currpgn[2] = '[Event "'+allstudystips[5][2]+'"][Site "Glarean"][Date "03.2011"][Round "'+allstudynames[5][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[5]+' 1. Kc3! (1. c5 a3 2. Kc3 a2 3. Kb2 e5 4. dxe5 Bxc5 5. Bd2 Bd4+ 6. Bc3 c5 {Schwarz gewinnt})(1. Kd3 e5 {Schwarz gewinnt})(1. Be3 f4 {Schwarz gewinnt}) 1... Bxd4+ {Köder für den König} 2. Kxd4 (2. Kb4 b2 3. Nxb2 Bxb2 {Schwarz gewinnt}) 2... b2 {ein Bauer wird geopfert, um den anderen eine Umwandlung zu verschaffen} 3. Nxb2 {der König ist immer noch im Quadrat des Bauern, aber der Springer steht jetzt im Weg...} a3 4. Nd3 {Weiß kann nichts gegen der Umwandlung machen, aber kann für eine widerspenstige Verteidigung sorgen.} a2 5. Ne5+ Ke8 6. f4 {Alle Figuren sind verteidigt und der König ist un den Feld a8 eingeschlossen... Die Dame kann allein nicht Matt geben.}';
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
            currchessfen = allstudyfens[6];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[6][0]+'"][Site "H.v.d.Heijden 50 JT"][Date "03.2011"][Round "'+allstudynames[6][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[6]+' 1. Nf7 Qg3 2. Qxc7+! Qxc7 (2... Kxc7 3. Be5+ {Albul castiga}) 3. d6 Qb8 4. c5 Kb7 5. Nd8+ {Prima configuratie a garzilor: Cal+Nebun} (5. Bd8? g5 {Negrul castiga}) 5... Ka8 6. Kc2 g5 {eliminand pionul alb} 7. hxg5 hxg5 8. Bxg5 Qc8 9. Kd2 e3+ 10. Kxe3 Ka7 11. Kf4 Ka8 12. Kf5 Ka7 13. Kg6 Ka8 14. Kf7 Ka7 15. Ke7 {a doua configuratie: Cal+Rege} Ka8 16. Bh6 Ka7 17. Bf8 {a treia configuratie: Nebun+Rege} Ka8 (17... Kb8 18. Nf7 Qb7 19. Ne5 Kc8 20. Ke8 Qa7 21. Be7 Qb7 22. Bd8 Qa7 23. Bc7 {Albul castiga}) 18. Nf7 Ka7 19. Ne5 Ka6 20. Nxd7';
            currpgn[1] = '[Event "'+allstudystips[6][1]+'"][Site "H.v.d.Heijden 50 JT"][Date "03.2011"][Round "'+allstudynames[6][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[6]+' 1. Nf7 Qg3 2. Qxc7+! Qxc7 (2... Kxc7 3. Be5+ {winning for White}) 3. d6 Qb8 4. c5 Kb7 5. Nd8+ {First configuration of the guards: N+B} (5. Bd8? g5 {winning for Black}) 5... Ka8 6. Kc2 g5 {removing the white pawn} 7. hxg5 hxg5 8. Bxg5 Qc8 9. Kd2 e3+ 10. Kxe3 Ka7 11. Kf4 Ka8 12. Kf5 Ka7 13. Kg6 Ka8 14. Kf7 Ka7 15. Ke7 {Second configuration: N+K} Ka8 16. Bh6 Ka7 17. Bf8 {Third configuration: B+K} Ka8 (17... Kb8 18. Nf7 Qb7 19. Ne5 Kc8 20. Ke8 Qa7 21. Be7 Qb7 22. Bd8 Qa7 23. Bc7 {winning for White}) 18. Nf7 {This is the way of the knight extraction} Ka7 19. Ne5 Ka6 20. Nxd7';
            currpgn[2] = '[Event "'+allstudystips[6][2]+'"][Site "H.v.d.Heijden 50 JT"][Date "03.2011"][Round "'+allstudynames[6][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[6]+' 1. Nf7 Qg3 2. Qxc7+! Qxc7 (2... Kxc7 3. Be5+ {Weiß gewinnt}) 3. d6 Qb8 4. c5 Kb7 5. Nd8+ {die erste Konfiguration der Wächter: S+L} (5. Bd8? g5 {Schwarz gewinnt}) 5... Ka8 6. Kc2 g5 {Entfernung des weißen Bauern} 7. hxg5 hxg5 8. Bxg5 Qc8 9. Kd2 e3+ 10. Kxe3 Ka7 11. Kf4 Ka8 12. Kf5 Ka7 13. Kg6 Ka8 14. Kf7 Ka7 15. Ke7 {die zweite Konfiguration: S+K} Ka8 16. Bh6 Ka7 17. Bf8 {die dritte Konfiguration: L+K} Ka8 (17... Kb8 18. Nf7 Qb7 19. Ne5 Kc8 20. Ke8 Qa7 21. Be7 Qb7 22. Bd8 Qa7 23. Bc7 {Weiß gewinnt}) 18. Nf7 Ka7 19. Ne5 Ka6 20. Nxd7';
            currchessinfo[0] = '\
                        Publicat &#xEE;n revista <a href="javascript:void(0);" onClick="openChessObject(63);">EG</a> [2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(62);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
						A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul <a href="javascript:void(0);" onClick="openChessObject(61);">H.v.d.Heijden 50 JT</a> [2011-2012]\
						<br/><br/>\
						<a href="javascript:void(0);" onClick="openChessObject(64);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Men&#x21B;ionat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(65);">Les échecs électroniques</a> [P.Nolot,2012]\
                        ';
            currchessinfo[1] = '\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(63);">EG</a> magazine [2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(62);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
						Awarded a mention in <a href="javascript:void(0);" onClick="openChessObject(61);">H.v.d.Heijden 50 JT</a> [2011-2012]\
						<br/><br/>\
						<a href="javascript:void(0);" onClick="openChessObject(64);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Mentioned in paper <a href="javascript:void(0);" onClick="openChessObject(65);">Les échecs électroniques</a> [P.Nolot,2012]\
                        ';
            currchessinfo[2] = '\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(63);">EG</a> Magazin [2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(62);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
						Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(61);">H.v.d.Heijden 50 JT</a> gewonnen [2011-2012]\
						<br/><br/>\
						<a href="javascript:void(0);" onClick="openChessObject(64);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erw&auml;hnt im Artikel <a href="javascript:void(0);" onClick="openChessObject(65);">Les échecs électroniques</a> [P.Nolot,2012]\
                        ';
            break;
            
        case  7: 
            currchessfen = allstudyfens[7];
            coauthor = 'Mário Kamody';
            currpgn[0] = '[Event "'+allstudystips[7][0]+'"][Site "Pat-a-Mat"][Date "04.2019"][Round "'+allstudynames[7][0]+'"][White "Mihai Neghina"][Black "Mário Kamody"][Result "1/2-1/2"]'+allstudyfens[7]+' 1. Ke2 (1. Bf7 Bxf7 2. Rxa7 Bc4+ {-+}) (1. Rd1 Bxe3 2. Rxd6 Nxf4 {-+}) 1... Bxe3 (1... Nxf4+ 2. exf4 Kxf4 3. Rh1 {==}) 2. Kxe3 Nxf4 3. Rg1 Nxg2+ 4. Rxg2 f4+ 5. Ke2 f3+ 6. Kf1 fxg2+ 7. Kg1 {(==) ajung&#xE2;nd la pozi&#x21B;ia cheie; urm&#x103;toarele ~10 mut&#x103;ri nu sunt unice, dar necesare preg&#x103;tirii singurei incerc&#x103;ri posibile a negrului: d5 } Be4 8. Bd5 Kf5 9. Bc6 Kf4 10. Bd5 Ke5 11. Bc6 Bd5 12. Bb7 Ke4 13. Bc8 Bc6 14. Be6 Ke5 15. Bb3 Bd7 16. Ba2 {!} (16. Kxg2 Kf4 {-+}) (16. Bc4 {or Bg8 or Bf7} Be6 17. Ba6 d5 {-+}) 16... Be6 17. Bb1 d5 {d5 este for&#x163;at, dar...} (17... Kd4 18. Kxg2 {== deoarece regele negru este prea departe}) 18. Kxg2 {g2 poate fi capturat acum} Kf4 {regele ap&#x103;r&#x103; g3} 19. Ba2 {! nebunul leag&#x103; d5} Bg8 20. Bb3 {... &#x15F;i men&#x163;ine leg&#x103;tura} Bf7 21. Ba2 {==}';
            currpgn[1] = '[Event "'+allstudystips[7][1]+'"][Site "Pat-a-Mat"][Date "04.2019"][Round "'+allstudynames[7][1]+'"][White "Mihai Neghina"][Black "Mário Kamody"][Result "1/2-1/2"]'+allstudyfens[7]+' 1. Ke2 (1. Bf7 Bxf7 2. Rxa7 Bc4+ {-+}) (1. Rd1 Bxe3 2. Rxd6 Nxf4 {-+}) 1... Bxe3 (1... Nxf4+ 2. exf4 Kxf4 3. Rh1 {==}) 2. Kxe3 Nxf4 3. Rg1 Nxg2+ 4. Rxg2 f4+ 5. Ke2 f3+ 6. Kf1 fxg2+ 7. Kg1 {(==) reaching the key position; the next ~10 moves are not forced, but are necessary for setting up the only try for Black: d5 } Be4 8. Bd5 Kf5 9. Bc6 Kf4 10. Bd5 Ke5 11. Bc6 Bd5 12. Bb7 Ke4 13. Bc8 Bc6 14. Be6 Ke5 15. Bb3 Bd7 16. Ba2 {!} (16. Kxg2 Kf4 {-+}) (16. Bc4 {or Bg8 or Bf7} Be6 17. Ba6 d5 {-+}) 16... Be6 17. Bb1 d5 {d5 is enforced, but...} (17... Kd4 18. Kxg2 {== since the bK went too far}) 18. Kxg2 {g2 can be taken now} Kf4 {the king covers g3} 19. Ba2 {! the bishop pins d5} Bg8 20. Bb3 {... and maintains the pin} Bf7 21. Ba2 {==}';
            currpgn[2] = '[Event "'+allstudystips[7][2]+'"][Site "Pat-a-Mat"][Date "04.2019"][Round "'+allstudynames[7][2]+'"][White "Mihai Neghina"][Black "Mário Kamody"][Result "1/2-1/2"]'+allstudyfens[7]+' 1. Ke2 (1. Bf7 Bxf7 2. Rxa7 Bc4+ {-+}) (1. Rd1 Bxe3 2. Rxd6 Nxf4 {-+}) 1... Bxe3 (1... Nxf4+ 2. exf4 Kxf4 3. Rh1 {==}) 2. Kxe3 Nxf4 3. Rg1 Nxg2+ 4. Rxg2 f4+ 5. Ke2 f3+ 6. Kf1 fxg2+ 7. Kg1 {(==) erreicht die Schl&uuml;sselstellung; die n&auml;chsten ~10 Z&uuml;ge sind nicht erzwungen, aber notwendig, um den einzigen Versuch f&uuml;r Schwarz einzurichten: d5 } Be4 8. Bd5 Kf5 9. Bc6 Kf4 10. Bd5 Ke5 11. Bc6 Bd5 12. Bb7 Ke4 13. Bc8 Bc6 14. Be6 Ke5 15. Bb3 Bd7 16. Ba2 {!} (16. Kxg2 Kf4 {-+}) (16. Bc4 {or Bg8 or Bf7} Be6 17. Ba6 d5 {-+}) 16... Be6 17. Bb1 d5 {d5 ist durchgesetzt, aber...} (17... Kd4 18. Kxg2 {== weil der K&ouml;nig zu weit gegangen ist}) 18. Kxg2 {g2 kann jetzt geschlagen werden} Kf4 {der K&ouml;nig verteidigt g3} 19. Ba2 {! der L&auml;ufer fesselt d5} Bg8 20. Bb3 {... und erh&auml;lt die Fesselung} Bf7 21. Ba2 {==}';
            currchessinfo[0] = '\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul revistei <a href="javascript:void(0);" onClick="openChessObject(72);">Pat-a-Mat</a> [2018-2019]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(71);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Versiunea final&#x103; publicat&#x103; &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(72);">Pat-a-Mat</a> [2019]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(73);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Versiunea ini&#x21B;ial&#x103; (incorect&#x103;) publicat&#x103; &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(74);">Pat-a-Mat</a> [2011]\
                        ';
            currchessinfo[1] = '\
                        Awarded an honorable mention in the <a href="javascript:void(0);" onClick="openChessObject(72);">Pat-a-Mat</a> Informal Tourney [2018-2019]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(71);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Final version published in <a href="javascript:void(0);" onClick="openChessObject(72);">Pat-a-Mat</a> [2019]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(73);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Initial (cooked) version published in <a href="javascript:void(0);" onClick="openChessObject(74);">Pat-a-Mat</a> [2011]\
                        ';
            currchessinfo[2] = '\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(72);">Pat-a-Mat</a> Informal Tourney gewonnen [2018-2019]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(71);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Endversion in <a href="javascript:void(0);" onClick="openChessObject(72);">Pat-a-Mat</a> Magazin ver&ouml;ffentlicht [2019]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(73);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erstversion (cooked) in <a href="javascript:void(0);" onClick="openChessObject(74);">Pat-a-Mat</a> Magazin ver&ouml;ffentlicht [2011]\
                        ';
            break;
            
        case  8: 
            currchessfen = allstudyfens[8];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[8][0]+'"][Site "Componist"][Date "01.2012"][Round "'+allstudynames[8][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[8]+' 1. c5+ Kb7 (1... b5 2. Bxb5+ Kb7 3. Bc6+ Kc8 4. Bxa8 dxe5 5. Bc6 {Albul castiga}) 2. Ba6+! Kxa6 3. b5+ Kb7 4. c6+ Kc8 5. Nf7 Qb8 6. Kc4 Qa8 7. Kd4 Qb8 8. Ke4 Qa8 9. Kf5 Qb8 (9... Bb8 10. Ke6 Qa7 11. Ng5 Qa6 12. bxa6 b5 13. axb5 Ba7 14. Ne4 a4 15. Nc3 {Albul castiga, deoarece regele se poate intoarce.}) 10. Ke6 Qa8 11. Ng5 Kd8 12. Kf7 Qb8 13. Ne6+ Kc8 14. Ke8 Qa8 15. Ng7 Qb8 16. Nf5 Qa8 17. Ne7+ Kb8 18. Kd8 {zugzwang, Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[8][1]+'"][Site "Componist"][Date "01.2012"][Round "'+allstudynames[8][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[8]+' 1. c5+ Kb7 (1... b5 2. Bxb5+ Kb7 3. Bc6+ Kc8 4. Bxa8 dxe5 5. Bc6 {winning for White}) 2. Ba6+! Kxa6 3. b5+ Kb7 4. c6+ Kc8 5. Nf7 Qb8 6. Kc4 Qa8 7. Kd4 Qb8 8. Ke4 Qa8 9. Kf5 Qb8 (9... Bb8 10. Ke6 Qa7 11. Ng5 Qa6 12. bxa6 b5 13. axb5 Ba7 14. Ne4 a4 15. Nc3 {winning for White, since the king can come back to hold in place the black a-pawn and the bishop, while the knight and white pawns can force a breakthrough.}) 10. Ke6 Qa8 11. Ng5 Kd8 12. Kf7 Qb8 13. Ne6+ Kc8 14. Ke8 Qa8 15. Ng7 Qb8 16. Nf5 Qa8 17. Ne7+ Kb8 18. Kd8 {zugzwang, winning for White}';
            currpgn[2] = '[Event "'+allstudystips[8][2]+'"][Site "Componist"][Date "01.2012"][Round "'+allstudynames[8][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[8]+' 1. c5+ Kb7 (1... b5 2. Bxb5+ Kb7 3. Bc6+ Kc8 4. Bxa8 dxe5 5. Bc6 {Weiß gewinnt}) 2. Ba6+! Kxa6 3. b5+ Kb7 4. c6+ Kc8 5. Nf7 Qb8 6. Kc4 Qa8 7. Kd4 Qb8 8. Ke4 Qa8 9. Kf5 Qb8 (9... Bb8 10. Ke6 Qa7 11. Ng5 Qa6 12. bxa6 b5 13. axb5 Ba7 14. Ne4 a4 15. Nc3 {Weiß gewinnt, denn der König kann zurückgekommen.}) 10. Ke6 Qa8 11. Ng5 Kd8 12. Kf7 Qb8 13. Ne6+ Kc8 14. Ke8 Qa8 15. Ng7 Qb8 16. Nf5 Qa8 17. Ne7+ Kb8 18. Kd8 {Zugzwang, Weiß gewinnt}';
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
            currchessfen = allstudyfens[9];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[9][0]+'"][Site "chichitza.ro"][Date "09.2012"][Round "'+allstudynames[9][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[9]+' 1. Nc6 {Sacrificand calul doar pentru a muta un pion de pe coloana b pe coloana c} (1. Na6 {nu este suficient de agresiv, permitand Rxc1}) (1. Nd7 Rxc1 {Negrul castiga}) (1. Bd2 Rd5 {!} 2. Nc6 {acum este prea tarziu pentru a reveni la ideea de remiza} bxc6 3. Nxg5 Rd8+ 4. Kf7 e3 {Negrul castiga}) 1... bxc6 (1... Rxc1 2. Nxe7 Rf1 3. Kh8 Rf8+ 4. Ng8+ Rxg8+ 5. Kxg8 e3 6. Ng1 d3 7. Nf3 d2 8. Ne5 d1=Q 9. Nf7#) (1... Rxc6 2. Bxg5#) 2. Nxg5 Rxg5+ (2... Rxc1 3. Nf7#) 3. Kh8 {Negrul are ciudatul privilegiu de a decide daca Negrul face pat pe Alb prin capturarea nebunului, sau invers -- Albul face pat pe Negru --, prin cedarea tuturor pionilor pe diagonala c1-h6... remiza}';
            currpgn[1] = '[Event "'+allstudystips[9][1]+'"][Site "chichitza.ro"][Date "09.2012"][Round "'+allstudynames[9][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[9]+' 1. Nc6 {Sacrificing the knight only to displace the b-pawn on the c-column} (1. Na6 {is not aggressive enough, Black has time for Rxc1, winning}) (1. Nd7 Rxc1 {winning for Black}) (1. Bd2 Rd5 {the only way to win for Black} 2. Nc6 {now it is too late to get back to the mainline drawing idea} bxc6 3. Nxg5 Rd8+ 4. Kf7 e3 {winning for Black}) 1... bxc6 {forced, otherwise mate at move 9:} (1... Rxc1 2. Nxe7 Rf1 3. Kh8 Rf8+ 4. Ng8+ Rxg8+ 5. Kxg8 e3 6. Ng1 d3 7. Nf3 d2 8. Ne5 d1=Q 9. Nf7#) (1... Rxc6 2. Bxg5# {is the threat that keeps the rook from taking the knight}) 2. Nxg5 Rxg5+ (2... Rxc1 3. Nf7#) 3. Kh8 {Black now has the awkward privilege of choosing whether he prefers to stalemate White by capturing the bishop or to be stalemated by White after having pushed all pawns in the diagonal of death c1-h6... draw}';
            currpgn[2] = '[Event "'+allstudystips[9][2]+'"][Site "chichitza.ro"][Date "09.2012"][Round "'+allstudynames[9][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[9]+' 1. Nc6 {Opfer, um den b-Bauer auf c zu bringen} (1. Na6 {ist nicht aggressiv genug und ermöglicht Rxc1}) (1. Nd7 Rxc1 {Schwarz gewinnt}) (1. Bd2 Rd5 {!} 2. Nc6 {nun ist es zu spät für die Remis-Idee} bxc6 3. Nxg5 Rd8+ 4. Kf7 e3 {Schwarz gewinnt}) 1... bxc6 {!} (1... Rxc1 2. Nxe7 Rf1 3. Kh8 Rf8+ 4. Ng8+ Rxg8+ 5. Kxg8 e3 6. Ng1 d3 7. Nf3 d2 8. Ne5 d1=Q 9. Nf7#) (1... Rxc6 2. Bxg5#) 2. Nxg5 Rxg5+ (2... Rxc1 3. Nf7#) 3. Kh8 {Schwarz hat nun den unangenehmen Wahl, wer wen Patt setzt: Schwarz kann den Läufer schlagen um Weiß Patt zu setzen, oder kann alle seine Bauern auf die c1-h6 Diagonal opfern um Patt gesetzt zu werden... Remis}';
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
            
        case 10: 
            currchessfen = allstudyfens[10];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[10][0]+'"][Site "Schach"][Date "09.2012"][Round "'+allstudynames[10][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[10]+' 1. g5 (1. Rd2 Nc3 {Negrul castiga}) 1... Qxg5 2. Qxe6 (2. Qh8 Qf6 3. Rh2 (3. Qxf6 exf6 4. Rd2 b3 5. Rd8 Nc3 6. Bc6 Nb5+ 7. Bxb5 axb5 {Negrul castiga}) 3... Qxh8 4. Rxh8 Nc3 5. Bc6 Nb5+ 6. Bxb5 axb5 7. Rb8 b3 8. Rxb5 Ka6 9. Rxc5 Bg4 {Negrul castiga}) 2... fxe6 3. Rxa2 Qg8 (3... Qxe3 4. Bb5 Qa3 5. Rxa3 bxa3 6. Bc4 {Albul castiga}) 4. Ra4 {sau Ra5, pastrand campul a1 liber} (4. Ra1 Qf8 5. Ra5 Qf1 6. Bb5 Qxb5 7. Rxb5 axb5 {Negrul castiga}) 4... Qf8 5. Ra1 (5. Ra2 {sau Ra5} Qf1 {Negrul castiga}) 5... b3 (5... c4 6. Ra4 c3 7. Rxb4 Qxe8 8. Rb7+ Ka8 9. Ra7+ Kxa7 {pat}) 6. Ra3 b2 7. Rb3 b1=Q 8. Rxb1 Qxe8 9. Rb7+ Ka8 10. Ra7+ Kxa7{pat}';
            currpgn[1] = '[Event "'+allstudystips[10][1]+'"][Site "Schach"][Date "09.2012"][Round "'+allstudynames[10][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[10]+' 1. g5 (1. Rd2 Nc3 {winning for Black}) 1... Qxg5 2. Qxe6 (2. Qh8 Qf6 3. Rh2 (3. Qxf6 exf6 4. Rd2 b3 5. Rd8 Nc3 6. Bc6 Nb5+ 7. Bxb5 axb5 {winning for Black}) 3... Qxh8 4. Rxh8 Nc3 5. Bc6 Nb5+ 6. Bxb5 axb5 7. Rb8 b3 8. Rxb5 Ka6 9. Rxc5 Bg4 {winning for Black}) 2... fxe6 3. Rxa2 Qg8 (3... Qxe3 4. Bb5 Qa3 5. Rxa3 bxa3 6. Bc4 {winning for White}) 4. Ra4 {or Ra5, but keeping the a1 square cleared} (4. Ra1 Qf8 5. Ra5 Qf1 6. Bb5 Qxb5 7. Rxb5 axb5 {winning for Black}) 4... Qf8 5. Ra1 (5. Ra2 {or Ra5} Qf1 {winning for Black}) 5... b3 (5... c4 6. Ra4 c3 7. Rxb4 Qxe8 8. Rb7+ Ka8 9. Ra7+ Kxa7 {stalemate}) 6. Ra3 b2 7. Rb3 b1=Q 8. Rxb1 Qxe8 9. Rb7+ Ka8 10. Ra7+ Kxa7{stalemate}';
            currpgn[2] = '[Event "'+allstudystips[10][2]+'"][Site "Schach"][Date "09.2012"][Round "'+allstudynames[10][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[10]+' 1. g5 (1. Rd2 Nc3 {Schwarz gewinnt}) 1... Qxg5 2. Qxe6 (2. Qh8 Qf6 3. Rh2 (3. Qxf6 exf6 4. Rd2 b3 5. Rd8 Nc3 6. Bc6 Nb5+ 7. Bxb5 axb5 {Schwarz gewinnt}) 3... Qxh8 4. Rxh8 Nc3 5. Bc6 Nb5+ 6. Bxb5 axb5 7. Rb8 b3 8. Rxb5 Ka6 9. Rxc5 Bg4 {Schwarz gewinnt}) 2... fxe6 3. Rxa2 Qg8 (3... Qxe3 4. Bb5 Qa3 5. Rxa3 bxa3 6. Bc4 {Weiß gewinnt}) 4. Ra4 {oder Ra5, somit der a1 Feld frei bleibt} (4. Ra1 Qf8 5. Ra5 Qf1 6. Bb5 Qxb5 7. Rxb5 axb5 {Schwarz gewinnt}) 4... Qf8 5. Ra1 (5. Ra2 {oder Ra5} Qf1 {Schwarz gewinnt}) 5... b3 (5... c4 6. Ra4 c3 7. Rxb4 Qxe8 8. Rb7+ Ka8 9. Ra7+ Kxa7 {Patt}) 6. Ra3 b2 7. Rb3 b1=Q 8. Rxb1 Qxe8 9. Rb7+ Ka8 10. Ra7+ Kxa7{Patt}';
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
            currchessfen = allstudyfens[11];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[11][0]+'"][Site "chichitza.ro"][Date "11.2012"][Round "'+allstudynames[11][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[11]+' 1. Bc3+ (1. Nc7? {sau orice alt&#x103; mutare} Rh1+ 2. Kxh1 Qf3+ 3. Kh2 Qg2#) 1... Rxc3 (1... Qxc3 2. bxc3 {c&#xE2;&#x15F;tig&#x103;tor pentru Alb}) 2. Nc7! (2. Nd6? {sau 2. Nf6? sau 2.Ng7?} Qxg3+ 3. fxg3 Rc2+ 4. Kxh3 (4. Kg1 h2+ 5. Kh1 Rc1+ 6. Kxh2 Rh1+) 4... Rh2+ 5. Kg4 Rh4+ {remiz&#x103; prin &#x15F;ah etern}) (2. bxc3? Qf1 {c&#xE2;&#x15F;tig&#x103;tor pentru Alb}) 2... Qxg3+ (2... Qd7 {or Qe2 or Qe4} 3. e8=Q+ Qxe8 4. Bxe8 {c&#xE2;&#x15F;tig&#x103;tor pentru Alb}) 3. fxg3 Rc2+ 4. Kxh3 Rh2+ 5. Kg4 Rh4+ 6. Kf5 Rf4+ (6... Rh5+ 7. Bxh5 Kg8 8. e8=R#) 7. Ke5 Re4+ 8. Kd5 (8. Kd6? Re6+ 9. Kd5 Rd6+ 10. Ke4 (10. Kxc5 Rc6+ {remiz&#x103;}) 10... Re6+ 11. Kf3 Rxe7 {remiz&#x103;}) 8... Re5+ 9. Kc6 Re6+ 10. Kb7 (10. Kxc5? Rc6+ {remiz&#x103;}) 10... Rb6+ 11. Kc8 Rb8+ 12. Kd7 {captur&#xE2;nd tura cu mat sau dezamors&#xE2;nd amenin&#x21B;area de pat cu avantaj decisiv}';
            currpgn[1] = '[Event "'+allstudystips[11][1]+'"][Site "chichitza.ro"][Date "11.2012"][Round "'+allstudynames[11][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[11]+' 1. Bc3+ (1. Nc7? {or any other move} Rh1+ 2. Kxh1 Qf3+ 3. Kh2 Qg2#) 1... Rxc3 (1... Qxc3 2. bxc3 {winning for White}) 2. Nc7! (2. Nd6? {or 2. Nf6? or 2.Ng7?} Qxg3+ 3. fxg3 Rc2+ 4. Kxh3 (4. Kg1 h2+ 5. Kh1 Rc1+ 6. Kxh2 Rh1+) 4... Rh2+ 5. Kg4 Rh4+ {draw by perpetual check}) (2. bxc3? Qf1 {winning for Black}) 2... Qxg3+ (2... Qd7 {or Qe2 or Qe4} 3. e8=Q+ Qxe8 4. Bxe8 {winning for White}) 3. fxg3 Rc2+ 4. Kxh3 Rh2+ 5. Kg4 Rh4+ 6. Kf5 Rf4+ (6... Rh5+ 7. Bxh5 Kg8 8. e8=R#) 7. Ke5 Re4+ 8. Kd5 (8. Kd6? Re6+ 9. Kd5 Rd6+ 10. Ke4 (10. Kxc5 Rc6+ {draw}) 10... Re6+ 11. Kf3 Rxe7 {draw}) 8... Re5+ 9. Kc6 Re6+ 10. Kb7 (10. Kxc5? Rc6+ {draw}) 10... Rb6+ 11. Kc8 Rb8+ 12. Kd7 {capturing the rook with checkmate or releasing the stalemate threat with a decisive advantage}';
            currpgn[2] = '[Event "'+allstudystips[11][2]+'"][Site "chichitza.ro"][Date "11.2012"][Round "'+allstudynames[11][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[11]+' 1. Bc3+ (1. Nc7? {oder sonstige Züge} Rh1+ 2. Kxh1 Qf3+ 3. Kh2 Qg2#) 1... Rxc3 (1... Qxc3 2. bxc3 {Weiß gewinnt}) 2. Nc7! (2. Nd6? {sowie 2. Nf6?; 2.Ng7?} Qxg3+ 3. fxg3 Rc2+ 4. Kxh3 (4. Kg1 h2+ 5. Kh1 Rc1+ 6. Kxh2 Rh1+) 4... Rh2+ 5. Kg4 Rh4+ {Remis durch Dauerschach}) (2. bxc3? Qf1 {Schwarz gewinnt}) 2... Qxg3+ (2... Qd7 {or Qe2 or Qe4} 3. e8=Q+ Qxe8 4. Bxe8 {Weiß gewinnt}) 3. fxg3 Rc2+ 4. Kxh3 Rh2+ 5. Kg4 Rh4+ 6. Kf5 Rf4+ (6... Rh5+ 7. Bxh5 Kg8 8. e8=R#) 7. Ke5 Re4+ 8. Kd5 (8. Kd6? Re6+ 9. Kd5 Rd6+ 10. Ke4 (10. Kxc5 Rc6+ {Remis}) 10... Re6+ 11. Kf3 Rxe7 {Remis}) 8... Re5+ 9. Kc6 Re6+ 10. Kb7 (10. Kxc5? Rc6+ {Remis}) 10... Rb6+ 11. Kc8 Rb8+ 12. Kd7 {der Turm wird mit Schach geschlagen, oder die Patt-Drohung wird in eine Gewinnstellung abgehoben}';
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
            
        case 12: 
            currchessfen = allstudyfens[12];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[12][0]+'"][Site "Componist"][Date "12.2012"][Round "'+allstudynames[12][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[12]+' 1. Nxb5 {Alte mut&#x103;ri produc pozi&#x163;ii normale cu un pion &#xEE;n plus pentru Negru. -+} (1. Rgg1 Nxd1 2. Rxd1 Rf7 3. Nxb5 Bh2 {-+}) (1. Rd2 Nxg2 2. Nxb5 e5 3. g5+ Kh5 {-+}) (1. Rdg1 Nxg2 2. Rxg2 Bd7 {-+}) (1. g5+ Kh5 2. Rdg1 Nxg2 {-+}) 1. .. Nxd1 (1. .. Nxg2 $2 2. Rxd6 Re7 (2. .. Rg7 3. Na7 Bd7 4. Rb6 Be8 5. Nd4 {+-}) 3. Na7 Bd7 4. Rb6 Be8 5. Nd4 Nxh4 6. Nc8 Rc7 7. Nd6 Bc6 8. Nxe6 Re7 9. Nd4 Rd7 10. Nxc6 Rxd6 11. Rxb7 Rxc6 12. b5 {+-}) 2. Nxd6 (2. g5+ $2 Kh5 3. Nxd6 Rc6 4. Nxb7 Bxb7 {-+}) 2. .. b5 (2. .. e5 3. Rg1 Nf2 4. Rg2 Nd3 5. Ka4 {=}) (2. .. Rc6 3. Nf7+ Kg7 4. b5 Rb6 5. Kb4 Ne3 (5. .. Kxf7 6. Kc5 {+-}) 6. Rf2 {or Rg3 =}) (2. .. b6 3. Nxc8 Rxc8 4. Ka4 {=}) 3. g5+ {This move order does not work:} (3. Nxc8 $2 Rxc8 4. g5+ Kg7 5. Nd4 Ra8#) 3. .. Kh5 (3. .. Kg7 $2 4. Ne8+ Kf7 5. Nxc7 {+-}) 4. Nxc8 {This move order does not work:} (4. Nf4+ Kxh4 5. Nxc8 e5 {-+}) 4. .. Rxc8 5. Nf4+ Kxh4 6. Nxg6+ Kh3 7. Nf4+ Kh4 8. Ng6+ {Cererea 1: &#x15F;ah cu calul} hxg6 9. Rg4+ Kh3 10. Rg3+ Kh2 11. Rg2+ Kh1 12. Rg1+ Kh2 13. Rg2+ Kh3 14. Rg3+ Kh4 15. Rg4+ Kh5 16. Rh4+ Kxg5 17. Rg4+ {Cererea 2: &#x15F;ah cu tura} (17. Rh5+ $2 Kf4 18. Rf5+ Ke3 19. Re5+ Kf2 20. Rf5+ Ke2 21. Re5+ Ne3 {-+}) 17. .. Kf6 18. Rf4+ (18. Rxg6+ $2 Kf5 19. Rf6+ Kg4 20. Rg6+ Kf3 21. Rf6+ Ke2 22. Rxe6+ Ne3 {-+}) 18. .. Kg7 (18. .. Ke7 19. Rf8 (19. Rf7+ $2 Kd6 20. Rd7+ Ke5 21. Rd8 Nxc3 22. Rxc8 Kd4 {-+}) 19. .. Rxf8 {pat} (19. .. Rc6 20. Re8+ Kf7 21. Rxe6 Rc8 22. Re8 Rc6 23. Re6 {=}) (19. .. g5 20. Rxc8 Nxc3 21. Kb2 Nd5 22. Rb8 g4 23. a3 c3+ 24. Kb3 Kf7 25. Rxb5 g3 26. Rb7+ Kf6 27. Rb8 Kf7 28. Rb7+ Kf6 {=}) (19. .. Nxc3 20. Rxc8 g5 {ca mai devreme =}) (19. .. Rc5 20. Rc8 Rd5 21. Re8+ Kf6 (21. .. Kd6 22. Rd8+ Ke5 23. Rxd5+ {=}) 22. Rxe6+ Kg5 23. Re5+ Kf4 24. Rxd5 Nxc3 25. Rd8 g5 26. Kb2 Na4+ 27. Kc2 g4 28. Rf8+ Ke4 29. Rb8 g3 30. Rxb5 g2 31. Rg5 Kf3 32. Rg8 Kf2 33. Rf8+ Kg3 34. Rg8+ Kh2 35. Rh8+ Kg1 36. Rg8 {=})) 19. Rf8 (19. Rf7+ {?} Kh6 20. Rf8 Rc6 21. Rh8+ Kg5 22. Rh5+ Kg4 23. Rg5+ Kf3 24. Rg3+ Ke2 25. Rg2+ Nf2 {-+}) 19. .. Rc6 (19. .. Rc5 20. Rc8 {ca mai devreme}) 20. Rg8+ (20. Rf7+ $2 20. .. Kh6 21. Rh7+ Kg5 22. Rh5+ Kf4 23. Rf5+ Kg3 24. Rg5+ Kf3 25. Rf5+ Ke2 26. Re5+ Ne3 {-+}) (20. Ra8 $2 Nxc3 {-+}) 20. .. Kf6 (20. .. Kh6 21. Rxg6+ {=}) 21. Rxg6+ Kf5 22. Rxe6 (22. Rf6+ {aceea&#x15F;i idee de remiz&#x103;} Kg4 23. Rg6+ (23. Rf4+ $2 Kg3 24. Rf3+ Kg2 25. Rg3+ Kf2 26. Rg2+ Kf3 27. Rg3+ Ke2 {-+}) 23. .. Kf3 24. Rf6+ (24. Rg3+ $2 Ke2 {-+}) 24. .. Kg2 25. Rg6+ Kf1 26. Rxe6 (26. Rg1+ Ke2 27. Re1+ Kd3 28. Rxd1+ Kxc3 29. Rd6 {aceea&#x15F;i idee de remiz&#x103;}) 26. .. Rc7 27. Re7 Rc8 28. Re8 {repeti#x163;ie} Rxe8 {sau pat...}) 22. .. Rc7 23. Re7 Rc8 24. Re8 {Cererea 3: Tura vs. Tura} Rxe8 {pat...}';
            currpgn[1] = '[Event "'+allstudystips[12][1]+'"][Site "Componist"][Date "12.2012"][Round "'+allstudynames[12][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[12]+' 1. Nxb5 {Other moves lead to normal positions with Black being a pawn ahead. -+} (1. Rgg1 Nxd1 2. Rxd1 Rf7 3. Nxb5 Bh2 {-+}) (1. Rd2 Nxg2 2. Nxb5 e5 3. g5+ Kh5 {-+}) (1. Rdg1 Nxg2 2. Rxg2 Bd7 {-+}) (1. g5+ Kh5 2. Rdg1 Nxg2 {-+}) 1. .. Nxd1 (1. .. Nxg2 $2 2. Rxd6 Re7 (2. .. Rg7 3. Na7 Bd7 4. Rb6 Be8 5. Nd4 {+-}) 3. Na7 Bd7 4. Rb6 Be8 5. Nd4 Nxh4 6. Nc8 Rc7 7. Nd6 Bc6 8. Nxe6 Re7 9. Nd4 Rd7 10. Nxc6 Rxd6 11. Rxb7 Rxc6 12. b5 {+-}) 2. Nxd6 (2. g5+ $2 Kh5 3. Nxd6 Rc6 4. Nxb7 Bxb7 {-+}) 2. .. b5 (2. .. e5 3. Rg1 Nf2 4. Rg2 Nd3 5. Ka4 {=}) (2. .. Rc6 3. Nf7+ Kg7 4. b5 Rb6 5. Kb4 Ne3 (5. .. Kxf7 6. Kc5 {+-}) 6. Rf2 {or Rg3 =}) (2. .. b6 3. Nxc8 Rxc8 4. Ka4 {=}) 3. g5+ {This move order does not work:} (3. Nxc8 $2 Rxc8 4. g5+ Kg7 5. Nd4 Ra8#) 3. .. Kh5 (3. .. Kg7 $2 4. Ne8+ Kf7 5. Nxc7 {+-}) 4. Nxc8 {This move order does not work:} (4. Nf4+ Kxh4 5. Nxc8 e5 {-+}) 4. .. Rxc8 5. Nf4+ Kxh4 6. Nxg6+ Kh3 7. Nf4+ Kh4 8. Ng6+ {Draw request 1: Knight checks} hxg6 9. Rg4+ Kh3 10. Rg3+ Kh2 11. Rg2+ Kh1 12. Rg1+ Kh2 13. Rg2+ Kh3 14. Rg3+ Kh4 15. Rg4+ Kh5 16. Rh4+ Kxg5 17. Rg4+ {Draw request 2: Rook checks} (17. Rh5+ $2 Kf4 18. Rf5+ Ke3 19. Re5+ Kf2 20. Rf5+ Ke2 21. Re5+ Ne3 {-+}) 17. .. Kf6 18. Rf4+ (18. Rxg6+ $2 Kf5 19. Rf6+ Kg4 20. Rg6+ Kf3 21. Rf6+ Ke2 22. Rxe6+ Ne3 {-+}) 18. .. Kg7 (18. .. Ke7 19. Rf8 (19. Rf7+ $2 Kd6 20. Rd7+ Ke5 21. Rd8 Nxc3 22. Rxc8 Kd4 {-+}) 19. .. Rxf8 {stalemate} (19. .. Rc6 20. Re8+ Kf7 21. Rxe6 Rc8 22. Re8 Rc6 23. Re6 {=}) (19. .. g5 20. Rxc8 Nxc3 21. Kb2 Nd5 22. Rb8 g4 23. a3 c3+ 24. Kb3 Kf7 25. Rxb5 g3 26. Rb7+ Kf6 27. Rb8 Kf7 28. Rb7+ Kf6 {=}) (19. .. Nxc3 20. Rxc8 g5 {transposing to the previous variation =}) (19. .. Rc5 20. Rc8 Rd5 21. Re8+ Kf6 (21. .. Kd6 22. Rd8+ Ke5 23. Rxd5+ {=}) 22. Rxe6+ Kg5 23. Re5+ Kf4 24. Rxd5 Nxc3 25. Rd8 g5 26. Kb2 Na4+ 27. Kc2 g4 28. Rf8+ Ke4 29. Rb8 g3 30. Rxb5 g2 31. Rg5 Kf3 32. Rg8 Kf2 33. Rf8+ Kg3 34. Rg8+ Kh2 35. Rh8+ Kg1 36. Rg8 {=})) 19. Rf8 (19. Rf7+ {?} Kh6 20. Rf8 Rc6 21. Rh8+ Kg5 22. Rh5+ Kg4 23. Rg5+ Kf3 24. Rg3+ Ke2 25. Rg2+ Nf2 {-+}) 19. .. Rc6 (19. .. Rc5 20. Rc8 {similar to a previous variation}) 20. Rg8+ (20. Rf7+ $2 20. .. Kh6 21. Rh7+ Kg5 22. Rh5+ Kf4 23. Rf5+ Kg3 24. Rg5+ Kf3 25. Rf5+ Ke2 26. Re5+ Ne3 {-+}) (20. Ra8 $2 Nxc3 {-+}) 20. .. Kf6 (20. .. Kh6 21. Rxg6+ {=}) 21. Rxg6+ Kf5 22. Rxe6 (22. Rf6+ {the same drawing idea} Kg4 23. Rg6+ (23. Rf4+ $2 Kg3 24. Rf3+ Kg2 25. Rg3+ Kf2 26. Rg2+ Kf3 27. Rg3+ Ke2 {-+}) 23. .. Kf3 24. Rf6+ (24. Rg3+ $2 Ke2 {-+}) 24. .. Kg2 25. Rg6+ Kf1 26. Rxe6 (26. Rg1+ Ke2 27. Re1+ Kd3 28. Rxd1+ Kxc3 29. Rd6 {the same drawing idea}) 26. .. Rc7 27. Re7 Rc8 28. Re8 {repetition} Rxe8 {or stalemate...}) 22. .. Rc7 23. Re7 Rc8 24. Re8 {Draw request 3: Rook versus Rook} Rxe8 {stalemate...}';
            currpgn[2] = '[Event "'+allstudystips[12][2]+'"][Site "Componist"][Date "12.2012"][Round "'+allstudynames[12][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[12]+' 1. Nxb5 {Andere Z&uuml;ge f&uuml;hren zu normalen Stellungen mit extra Bauer f&uuml;r Schwarz. -+} (1. Rgg1 Nxd1 2. Rxd1 Rf7 3. Nxb5 Bh2 {-+}) (1. Rd2 Nxg2 2. Nxb5 e5 3. g5+ Kh5 {-+}) (1. Rdg1 Nxg2 2. Rxg2 Bd7 {-+}) (1. g5+ Kh5 2. Rdg1 Nxg2 {-+}) 1. .. Nxd1 (1. .. Nxg2 $2 2. Rxd6 Re7 (2. .. Rg7 3. Na7 Bd7 4. Rb6 Be8 5. Nd4 {+-}) 3. Na7 Bd7 4. Rb6 Be8 5. Nd4 Nxh4 6. Nc8 Rc7 7. Nd6 Bc6 8. Nxe6 Re7 9. Nd4 Rd7 10. Nxc6 Rxd6 11. Rxb7 Rxc6 12. b5 {+-}) 2. Nxd6 (2. g5+ $2 Kh5 3. Nxd6 Rc6 4. Nxb7 Bxb7 {-+}) 2. .. b5 (2. .. e5 3. Rg1 Nf2 4. Rg2 Nd3 5. Ka4 {=}) (2. .. Rc6 3. Nf7+ Kg7 4. b5 Rb6 5. Kb4 Ne3 (5. .. Kxf7 6. Kc5 {+-}) 6. Rf2 {or Rg3 =}) (2. .. b6 3. Nxc8 Rxc8 4. Ka4 {=}) 3. g5+ {This move order does not work:} (3. Nxc8 $2 Rxc8 4. g5+ Kg7 5. Nd4 Ra8#) 3. .. Kh5 (3. .. Kg7 $2 4. Ne8+ Kf7 5. Nxc7 {+-}) 4. Nxc8 {This move order does not work:} (4. Nf4+ Kxh4 5. Nxc8 e5 {-+}) 4. .. Rxc8 5. Nf4+ Kxh4 6. Nxg6+ Kh3 7. Nf4+ Kh4 8. Ng6+ {1. Anfrage: Springer Schachgebote} hxg6 9. Rg4+ Kh3 10. Rg3+ Kh2 11. Rg2+ Kh1 12. Rg1+ Kh2 13. Rg2+ Kh3 14. Rg3+ Kh4 15. Rg4+ Kh5 16. Rh4+ Kxg5 17. Rg4+ {2. Anfrage: Turm Schachgebote} (17. Rh5+ $2 Kf4 18. Rf5+ Ke3 19. Re5+ Kf2 20. Rf5+ Ke2 21. Re5+ Ne3 {-+}) 17. .. Kf6 18. Rf4+ (18. Rxg6+ $2 Kf5 19. Rf6+ Kg4 20. Rg6+ Kf3 21. Rf6+ Ke2 22. Rxe6+ Ne3 {-+}) 18. .. Kg7 (18. .. Ke7 19. Rf8 (19. Rf7+ $2 Kd6 20. Rd7+ Ke5 21. Rd8 Nxc3 22. Rxc8 Kd4 {-+}) 19. .. Rxf8 {Patt} (19. .. Rc6 20. Re8+ Kf7 21. Rxe6 Rc8 22. Re8 Rc6 23. Re6 {=}) (19. .. g5 20. Rxc8 Nxc3 21. Kb2 Nd5 22. Rb8 g4 23. a3 c3+ 24. Kb3 Kf7 25. Rxb5 g3 26. Rb7+ Kf6 27. Rb8 Kf7 28. Rb7+ Kf6 {=}) (19. .. Nxc3 20. Rxc8 g5 {twie vorher =}) (19. .. Rc5 20. Rc8 Rd5 21. Re8+ Kf6 (21. .. Kd6 22. Rd8+ Ke5 23. Rxd5+ {=}) 22. Rxe6+ Kg5 23. Re5+ Kf4 24. Rxd5 Nxc3 25. Rd8 g5 26. Kb2 Na4+ 27. Kc2 g4 28. Rf8+ Ke4 29. Rb8 g3 30. Rxb5 g2 31. Rg5 Kf3 32. Rg8 Kf2 33. Rf8+ Kg3 34. Rg8+ Kh2 35. Rh8+ Kg1 36. Rg8 {=})) 19. Rf8 (19. Rf7+ {?} Kh6 20. Rf8 Rc6 21. Rh8+ Kg5 22. Rh5+ Kg4 23. Rg5+ Kf3 24. Rg3+ Ke2 25. Rg2+ Nf2 {-+}) 19. .. Rc6 (19. .. Rc5 20. Rc8 {wie vorher}) 20. Rg8+ (20. Rf7+ $2 20. .. Kh6 21. Rh7+ Kg5 22. Rh5+ Kf4 23. Rf5+ Kg3 24. Rg5+ Kf3 25. Rf5+ Ke2 26. Re5+ Ne3 {-+}) (20. Ra8 $2 Nxc3 {-+}) 20. .. Kf6 (20. .. Kh6 21. Rxg6+ {=}) 21. Rxg6+ Kf5 22. Rxe6 (22. Rf6+ {die selbe Remisidee} Kg4 23. Rg6+ (23. Rf4+ $2 Kg3 24. Rf3+ Kg2 25. Rg3+ Kf2 26. Rg2+ Kf3 27. Rg3+ Ke2 {-+}) 23. .. Kf3 24. Rf6+ (24. Rg3+ $2 Ke2 {-+}) 24. .. Kg2 25. Rg6+ Kf1 26. Rxe6 (26. Rg1+ Ke2 27. Re1+ Kd3 28. Rxd1+ Kxc3 29. Rd6 {die selbe Remisidee}) 26. .. Rc7 27. Re7 Rc8 28. Re8 {Wiederholung} Rxe8 {oder Patt...}) 22. .. Rc7 23. Re7 Rc8 24. Re8 {3. Anfrage: Turm gegen Turm} Rxe8 {Patt...}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(123);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul revistei <a href="javascript:void(0);" onClick="openChessObject(122);">Componist</a> [2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(121);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(122);">Componist</a> [2012]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(123);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Awarded an honorable mention in the <a href="javascript:void(0);" onClick="openChessObject(122);">Componist</a> Informal Tourney [2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(121);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(122);">Componist</a> [2012]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(123);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(122);">Componist</a> Informal Tourney gewonnen [2012]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(121);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(122);">Componist</a> [2012]\
                        ';
            break;
               
        case 13: 
            currchessfen = allstudyfens[13];
            coauthor = 'Arpad Rusz';
            currpgn[0] = '[Event "'+allstudystips[13][0]+'"][Site "9th WCCT (D39)"][Date "09.2013"][Round "'+allstudynames[13][0]+'"][White "Mihai Neghina"][Black "Arpad Rusz"][Result "1-0"]'+allstudyfens[13]+' 1. Nf8 {forteaza tura la f8} (1. e8=Q Rd7+ {remiza}) (1. N7f6 Rxf6 2. e8=Q Rd6+ {remiza}) (1. g6 Rf5 2. Ng5 Rd5+ {remiza}) (1. Kc2 Rf6 {remiza}) 1... Rxf8 (1... Rf5 2. Kc3 {Albul castiga}) (1... Rf6 2. Ne6 Rf5 3. Nef4+ Rxf4 4. Nxf4#) 2. e8=Q {protectie pentru rege} (2. exf8=Q {pat}) (2. e8=N Rf6 3. Kc3 Rc6+ 4. Kb3 Rb6+ 5. Ka4 Ra6+ {remiza}) 2... Rf7 3. Qe7 {protectie pentru rege} (3. Qc6 Rd7+ 4. Kc4 Rd4+ {remiza}) 3... Rf6 4.Qe6 {protectie pentru rege} (4. Kc2 Rc6+ 5. Kb3 Rc4 {remiza} (5... Rb6+ 6. Bb4 {Albul castiga}) (5... Rc3+ 6. Bxc3 {Albul castiga}) (5... Rf6 6. g6 {Albul castiga ca in varianta principala})) 4... Rf5 5. Qe5 {protectie pentru rege} Rf8 6. Qd4 {protectie pentru rege} Rf5 7. Kc3 {minor duals Kc2, Kc4} Rc5+ 8. Kb3 (8. Kb4 Rc4+ {remiza}) 8... Rb5+ (8... Rc3+ 9.Bxc3 {Albul castiga}) 9. Ka4 Rf5 (9... Ra5+ 10. Bxa5 {Albul castiga}) 10. Qd8 {cea mai scurta cale catre mat} Rf7 11. g6 Rf5 (11... Ra7+ 12. Ba5 {Albul castiga}) 12. Qg5 {protectie pentru cal} Rf8 13. g7 Rf5 14. g8=N {Albul castiga}';
            currpgn[1] = '[Event "'+allstudystips[13][1]+'"][Site "9th WCCT (D39)"][Date "09.2013"][Round "'+allstudynames[13][1]+'"][White "Mihai Neghina"][Black "Arpad Rusz"][Result "1-0"]'+allstudyfens[13]+' 1. Nf8 {forcing the rook to the f8 square} (1. e8=Q Rd7+ {draw}) (1. N7f6 Rxf6 2. e8=Q Rd6+ {draw}) (1. g6 Rf5 2. Ng5 Rd5+ {draw}) (1. Kc2 Rf6 {draw}) 1... Rxf8 (1... Rf5 2. Kc3 {winning for White}) (1... Rf6 2. Ne6 Rf5 3. Nef4+ Rxf4 4. Nxf4#) 2. e8=Q {shielding the king from checks} (2. exf8=Q {stalemate}) (2. e8=N Rf6 3. Kc3 Rc6+ 4. Kb3 Rb6+ 5. Ka4 Ra6+ {draw}) 2... Rf7 3. Qe7 {shielding the king from checks} (3. Qc6 Rd7+ 4. Kc4 Rd4+ {draw}) 3... Rf6 4.Qe6 {shielding the king from checks} (4. Kc2 Rc6+ 5. Kb3 Rc4 {draw} (5... Rb6+ 6. Bb4 {winning for White}) (5... Rc3+ 6. Bxc3 {winning for White}) (5... Rf6 6. g6 {winning for White as in the mainline})) 4... Rf5 5. Qe5 {shielding the king from checks} Rf8 6. Qd4 {shielding the king from checks} Rf5 7. Kc3 {minor duals Kc2, Kc4} Rc5+ 8. Kb3 (8. Kb4 Rc4+ {draw}) 8... Rb5+ (8... Rc3+ 9.Bxc3 {winning for White}) 9. Ka4 Rf5 (9... Ra5+ 10. Bxa5 {winning for White}) 10. Qd8 {shortest path to mate} Rf7 11. g6 Rf5 (11... Ra7+ 12. Ba5 {winning for White}) 12. Qg5 {Shielding the knight} Rf8 13. g7 Rf5 14. g8=N {winning for White}';
            currpgn[2] = '[Event "'+allstudystips[13][2]+'"][Site "9th WCCT (D39)"][Date "09.2013"][Round "'+allstudynames[13][2]+'"][White "Mihai Neghina"][Black "Arpad Rusz"][Result "1-0"]'+allstudyfens[13]+' 1. Nf8 {zwingt den Turm zu f8} (1. e8=Q Rd7+ {Remis}) (1. N7f6 Rxf6 2. e8=Q Rd6+ {Remis}) (1. g6 Rf5 2. Ng5 Rd5+ {Remis}) (1. Kc2 Rf6 {Remis}) 1... Rxf8 (1... Rf5 2. Kc3 {Weiß gewinnt}) (1... Rf6 2. Ne6 Rf5 3. Nef4+ Rxf4 4. Nxf4#) 2. e8=Q {Abschirmung des Königs} (2. exf8=Q {Patt}) (2. e8=N Rf6 3. Kc3 Rc6+ 4. Kb3 Rb6+ 5. Ka4 Ra6+ {Remis}) 2... Rf7 3. Qe7 {Abschirmung des Königs} (3. Qc6 Rd7+ 4. Kc4 Rd4+ {Remis}) 3... Rf6 4.Qe6 {Abschirmung des Königs} (4. Kc2 Rc6+ 5. Kb3 Rc4 {Remis} (5... Rb6+ 6. Bb4 {Weiß gewinnt}) (5... Rc3+ 6. Bxc3 {Weiß gewinnt}) (5... Rf6 6. g6 {Weiß gewinnt wie in der Hauptvariante})) 4... Rf5 5. Qe5 {Abschirmung des Königs} Rf8 6. Qd4 {Abschirmung des Königs} Rf5 7. Kc3 {minor duals Kc2, Kc4} Rc5+ 8. Kb3 (8. Kb4 Rc4+ {Remis}) 8... Rb5+ (8... Rc3+ 9.Bxc3 {Weiß gewinnt}) 9. Ka4 Rf5 (9... Ra5+ 10. Bxa5 {Weiß gewinnt}) 10. Qd8 {der kürzeste Weg zum Matt} Rf7 11. g6 Rf5 (11... Ra7+ 12. Ba5 {Weiß gewinnt}) 12. Qg5 {Abschirmung des Springers} Rf8 13. g7 Rf5 14. g8=N {Weiß gewinnt}';
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
            
        case 14: 
            currchessfen = allstudyfens[14];
            currpgn[0] = '[Event "'+allstudystips[14][0]+'"][Site "EG"][Date "02.2015"][Round "'+allstudynames[14][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[14]+' 1. Nf6 (1. Bd3 Qxe4 2. Bxe4+ Kxe4 {=}) (1. Ng3+ Ke6 2. Nd3 Qd4 3. Ne4 Rxd8 (3... Qxe4 4. Nc5+) 4. exd8=Q Qxd8 {-+}) 1... Rh8 (1... Kxf6 2. e8=Q+ {#11}) (1... Qd1 2. Bd3+ Ke6 3. f5+ Kd6 4. Nxg8 {+-}) (1... Re8 2. Nxe8 Qxe8 3. Kh2 {+-}) 2. Bd3+ (2. Nf3 Qa3 3. Kg2 Nc6 4. Nh4+ (4. e8=Q Rxe8 5. Nxe8 Nxd8 {-+}) 4... Ke6 5. Bc4+ Kd6 6. Ne4+ Kd7 7. Bb5 Qc1 8. a7 Rg8+ 9. Ng3 Qa1 10. Nhf5 Qxa7 11. Nh6 Rxd8 12. exd8=Q+ Kxd8 13. Bxc6 Qc7 14. Bf3 Qxf4 15. Ngf5 Qg5+ {-=}) (2. Be2 Qc6 3. Nf3 Qxf6 4. e8=Q Rxe8 5. Bd3+ Kxf4 6. Bxf6 Kxf3 {=}) (2. Bg2 Nc6 3. Be4+ Qxe4 4. Nxe4 Kxe4 {-=}) 2... Ke6 (2... Kxf6 3. e8=Q+ Kg7 4. Bf6+ Kxf6 5. Qe5#) (2... Kxf4 3. Bc7+ Kg5 4. Ne4+ Kh6 5. Bf4+ Kg7 6. Be5+ f6 (6... Kh6 7. Bxh8 {+-}) (6... Kh7 7. Nc3+ {fork +-}) 7. Bxf6+ Kf7 8. Bxh8 {+-}) 3. f5+ (3. Be4 Qxa6 4. Nf3 Qc8 5. f5+ Kd6 6. Ng5 Qc4 7. Bd5 Qd3+ 8. Kh2 Qxf5 9. Nxf7+ (9. Nge4+ Ke5 {=}) 9... Kc5 10. Nxh8 Qxf2+ {=}) (3. Nf3 Qxf4 4. Be4 Qxf6 5. e8=Q+ Rxe8 6. Ng5+ Qxg5 7. Bxg5 Kd7 {-=}) (3. e8=Q+ Rxe8 4. Nxe8 Qxe8 {-+}) 3... Kd6 (3... Ke5 4. Nf3+ Kd6 5. Ne4+ Kc6 6. Ne5+ Kd5 7. Nc3+ Kxe5 8. Nxa4 {+-}) 4. Ne4+ (4. Nf3 Qa3 5. Be4 Nc8 6. a7 (6. e8=Q Rxe8 7. Nxe8+ Kd7 {-+}) 6... Nxa7 {-=}) 4... Kc6 (4... Ke5 5. Bc7+ Kd4 (5... Kxf5 {or Kd5} 6. Nc3+ {+-}) 6. Bb6+ Ke5 7. Nf3+ Kf4 (7... Kxf5 {or Kd5} 8. Nc3+ {+-}) 8. Neg5 {or Nd2 #2}) 5. Nc2 {Figurile negre (regele &#x15F;i regina) nu sunt dominate individual, dar sunt legate &#xEE;mpreun&#x103; &#xEE;ntr-un c&#xE2;mp de furculi&#x163;e...} (5. Nf3 Qa3 6. Ne5+ Kd5 7. f4 Nc8 8. e8=Q (8. Nf6+ Kd4 9. a7 Nxe7 10. Bxe7 Qc1 {=}) (8. a7 Qxa7 {=}) 8... Rxe8 9. Nf6+ Kd4 10. Nxe8 Qc1 {=}) 5... h4 (5... Re8 6. Kg3 {dac&#x103; i se permite, merg&#xE2;nd c&#x103;tre e3 pentru a &#xEE;nt&#x103;ri c&#xE2;mpul de furculi&#x163;e} h4+ (6... Nc8 7. Bb5+ Kxb5 8. Nc3+ Kxa6 9. Nxa4 Nxe7 10. Bxe7 Rxe7 11. Nc3 Rc7 {(11...Re5 12. Ne3 +-)} 12. Nd5 {furculi&#x163;e (II) +-}) 7. Kh3 Rh8 (7... Rg8 8. f4 Re8 9. Kxh4 {+-}) 8. f3 {+-}) (5... Rg8 6. f4 Rh8 7. Kh4 {+-}) (5... Kd7 6. Nc5+ {furculi&#x163;e}) (5... Kd5 {or Kb5} 6. Nc3+ {furculi&#x163;e}) (5... Qxa6 {or Qa2} 6. Nb4+ {furculi&#x163;e}) (5... Qb5 {or Qb3} 6. Nd4+ {furculi&#x163;e}) 6. f3 {(Kh2 nu este necesar)} (6. f4 f6 {Zugzwang Alb =}) (6. Kg2 h3+ 7. Kh2 f6 8. Kg1 (8. f3 {or f4} Qa2 {=}) 8... Rg8+ 9. Kh1 Re8 10. Kh2 Rh8 {Albul nu poate folosi triangula&#x163;ia aici... =}) (6. f6 Rg8 7. Kh2 (7. f3 Re8 8. f4 Rh8 {-+}) 7... Rh8 {ap&#x103;rare pasiv&#x103; =}) 6... Re8 {(mutarea Rg8 este chiar mai rea, pierde un tempo pentru Negru )} 7. f4 (7. Kxh4 Kd7 {-=}) 7... Nc8 (7... Rh8 8. f6 Re8 9. Kxh4 Rg8 10. Kh3 Re8 11. Kg3 Rg8+ 12. Kf3 Re8 13. Nc3 {deoarece c&#xE2;mpurile f/g/h4 sunt acum controlate, Nc3 for&#x163;eaz&#x103; dama s&#x103; mute &#xEE;ntr-o furculi&#x163;&#x103; +-}) 8. Bb5+ Kxb5 9. Nc3+ Kxa6 10. Nxa4 Nxe7 11. Bxe7 Rxe7 12. Nc3 {!} Rc7 13. Nd5 {forkfield (II) p&#x103;streaz&#x103; ambii pioni &#x15F;i ambii cai, Albul c&#xE2;&#x15F;tig&#x103;}';
            currpgn[1] = '[Event "'+allstudystips[14][1]+'"][Site "EG"][Date "02.2015"][Round "'+allstudynames[14][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[14]+' 1. Nf6 (1. Bd3 Qxe4 2. Bxe4+ Kxe4 {=}) (1. Ng3+ Ke6 2. Nd3 Qd4 3. Ne4 Rxd8 (3... Qxe4 4. Nc5+) 4. exd8=Q Qxd8 {-+}) 1... Rh8 (1... Kxf6 2. e8=Q+ {#11}) (1... Qd1 2. Bd3+ Ke6 3. f5+ Kd6 4. Nxg8 {+-}) (1... Re8 2. Nxe8 Qxe8 3. Kh2 {+-}) 2. Bd3+ (2. Nf3 Qa3 3. Kg2 Nc6 4. Nh4+ (4. e8=Q Rxe8 5. Nxe8 Nxd8 {-+}) 4... Ke6 5. Bc4+ Kd6 6. Ne4+ Kd7 7. Bb5 Qc1 8. a7 Rg8+ 9. Ng3 Qa1 10. Nhf5 Qxa7 11. Nh6 Rxd8 12. exd8=Q+ Kxd8 13. Bxc6 Qc7 14. Bf3 Qxf4 15. Ngf5 Qg5+ {-=}) (2. Be2 Qc6 3. Nf3 Qxf6 4. e8=Q Rxe8 5. Bd3+ Kxf4 6. Bxf6 Kxf3 {=}) (2. Bg2 Nc6 3. Be4+ Qxe4 4. Nxe4 Kxe4 {-=}) 2... Ke6 (2... Kxf6 3. e8=Q+ Kg7 4. Bf6+ Kxf6 5. Qe5#) (2... Kxf4 3. Bc7+ Kg5 4. Ne4+ Kh6 5. Bf4+ Kg7 6. Be5+ f6 (6... Kh6 7. Bxh8 {+-}) (6... Kh7 7. Nc3+ {fork +-}) 7. Bxf6+ Kf7 8. Bxh8 {+-}) 3. f5+ (3. Be4 Qxa6 4. Nf3 Qc8 5. f5+ Kd6 6. Ng5 Qc4 7. Bd5 Qd3+ 8. Kh2 Qxf5 9. Nxf7+ (9. Nge4+ Ke5 {=}) 9... Kc5 10. Nxh8 Qxf2+ {=}) (3. Nf3 Qxf4 4. Be4 Qxf6 5. e8=Q+ Rxe8 6. Ng5+ Qxg5 7. Bxg5 Kd7 {-=}) (3. e8=Q+ Rxe8 4. Nxe8 Qxe8 {-+}) 3... Kd6 (3... Ke5 4. Nf3+ Kd6 5. Ne4+ Kc6 6. Ne5+ Kd5 7. Nc3+ Kxe5 8. Nxa4 {+-}) 4. Ne4+ (4. Nf3 Qa3 5. Be4 Nc8 6. a7 (6. e8=Q Rxe8 7. Nxe8+ Kd7 {-+}) 6... Nxa7 {-=}) 4... Kc6 (4... Ke5 5. Bc7+ Kd4 (5... Kxf5 {or Kd5} 6. Nc3+ {+-}) 6. Bb6+ Ke5 7. Nf3+ Kf4 (7... Kxf5 {or Kd5} 8. Nc3+ {+-}) 8. Neg5 {or Nd2 #2}) 5. Nc2 {The Black King and Queen are not individually dominated, but they chained together in a forkfield...} (5. Nf3 Qa3 6. Ne5+ Kd5 7. f4 Nc8 8. e8=Q (8. Nf6+ Kd4 9. a7 Nxe7 10. Bxe7 Qc1 {=}) (8. a7 Qxa7 {=}) 8... Rxe8 9. Nf6+ Kd4 10. Nxe8 Qc1 {=}) 5... h4 (5... Re8 6. Kg3 {if allowed, heading towards e3 to support the forkfield} h4+ (6... Nc8 7. Bb5+ Kxb5 8. Nc3+ Kxa6 9. Nxa4 Nxe7 10. Bxe7 Rxe7 11. Nc3 Rc7 {(11...Re5 12. Ne3 +-)} 12. Nd5 {forkfield (II) +-}) 7. Kh3 Rh8 (7... Rg8 8. f4 Re8 9. Kxh4 {+-}) 8. f3 {+-}) (5... Rg8 6. f4 Rh8 7. Kh4 {+-}) (5... Kd7 6. Nc5+ {fork}) (5... Kd5 {or Kb5} 6. Nc3+ {fork}) (5... Qxa6 {or Qa2} 6. Nb4+ {fork}) (5... Qb5 {or Qb3} 6. Nd4+ {fork}) 6. f3 {(Kh2 is unnecessary, leading back to the mainline some moves later)} (6. f4 f6 {Zugzwang White =}) (6. Kg2 h3+ 7. Kh2 f6 8. Kg1 (8. f3 {or f4} Qa2 {no fork =}) 8... Rg8+ 9. Kh1 Re8 10. Kh2 Rh8 {White cannot triangulate his way out of this... =}) (6. f6 Rg8 7. Kh2 (7. f3 Re8 8. f4 Rh8 {-+}) 7... Rh8 {passive defense =}) 6... Re8 {(Rg8 is worse, losing a tempo for Black)} 7. f4 (7. Kxh4 Kd7 {no fork -=}) 7... Nc8 (7... Rh8 8. f6 Re8 9. Kxh4 Rg8 10. Kh3 Re8 11. Kg3 Rg8+ 12. Kf3 Re8 13. Nc3 {since the White king now blocks the queen\'s escape squares f/g/h4, Nc3 forces the Queen to move into the forkfield +-}) 8. Bb5+ Kxb5 9. Nc3+ Kxa6 10. Nxa4 Nxe7 11. Bxe7 Rxe7 12. Nc3 {!} Rc7 13. Nd5 {forkfield (II) secures both pawns and both knights; winning for White}';
            currpgn[2] = '[Event "'+allstudystips[14][2]+'"][Site "EG"][Date "02.2015"][Round "'+allstudynames[14][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[14]+' 1. Nf6 (1. Bd3 Qxe4 2. Bxe4+ Kxe4 {=}) (1. Ng3+ Ke6 2. Nd3 Qd4 3. Ne4 Rxd8 (3... Qxe4 4. Nc5+) 4. exd8=Q Qxd8 {-+}) 1... Rh8 (1... Kxf6 2. e8=Q+ {#11}) (1... Qd1 2. Bd3+ Ke6 3. f5+ Kd6 4. Nxg8 {+-}) (1... Re8 2. Nxe8 Qxe8 3. Kh2 {+-}) 2. Bd3+ (2. Nf3 Qa3 3. Kg2 Nc6 4. Nh4+ (4. e8=Q Rxe8 5. Nxe8 Nxd8 {-+}) 4... Ke6 5. Bc4+ Kd6 6. Ne4+ Kd7 7. Bb5 Qc1 8. a7 Rg8+ 9. Ng3 Qa1 10. Nhf5 Qxa7 11. Nh6 Rxd8 12. exd8=Q+ Kxd8 13. Bxc6 Qc7 14. Bf3 Qxf4 15. Ngf5 Qg5+ {-=}) (2. Be2 Qc6 3. Nf3 Qxf6 4. e8=Q Rxe8 5. Bd3+ Kxf4 6. Bxf6 Kxf3 {=}) (2. Bg2 Nc6 3. Be4+ Qxe4 4. Nxe4 Kxe4 {-=}) 2... Ke6 (2... Kxf6 3. e8=Q+ Kg7 4. Bf6+ Kxf6 5. Qe5#) (2... Kxf4 3. Bc7+ Kg5 4. Ne4+ Kh6 5. Bf4+ Kg7 6. Be5+ f6 (6... Kh6 7. Bxh8 {+-}) (6... Kh7 7. Nc3+ {fork +-}) 7. Bxf6+ Kf7 8. Bxh8 {+-}) 3. f5+ (3. Be4 Qxa6 4. Nf3 Qc8 5. f5+ Kd6 6. Ng5 Qc4 7. Bd5 Qd3+ 8. Kh2 Qxf5 9. Nxf7+ (9. Nge4+ Ke5 {=}) 9... Kc5 10. Nxh8 Qxf2+ {=}) (3. Nf3 Qxf4 4. Be4 Qxf6 5. e8=Q+ Rxe8 6. Ng5+ Qxg5 7. Bxg5 Kd7 {-=}) (3. e8=Q+ Rxe8 4. Nxe8 Qxe8 {-+}) 3... Kd6 (3... Ke5 4. Nf3+ Kd6 5. Ne4+ Kc6 6. Ne5+ Kd5 7. Nc3+ Kxe5 8. Nxa4 {+-}) 4. Ne4+ (4. Nf3 Qa3 5. Be4 Nc8 6. a7 (6. e8=Q Rxe8 7. Nxe8+ Kd7 {-+}) 6... Nxa7 {-=}) 4... Kc6 (4... Ke5 5. Bc7+ Kd4 (5... Kxf5 {or Kd5} 6. Nc3+ {+-}) 6. Bb6+ Ke5 7. Nf3+ Kf4 (7... Kxf5 {or Kd5} 8. Nc3+ {+-}) 8. Neg5 {or Nd2 #2}) 5. Nc2 {Die schwarzen Figuren (der K&#246;nig und die Dame) sind nicht einzeln dominiert, aber in ein Gabel-Feld aneinander gekettet...} (5. Nf3 Qa3 6. Ne5+ Kd5 7. f4 Nc8 8. e8=Q (8. Nf6+ Kd4 9. a7 Nxe7 10. Bxe7 Qc1 {=}) (8. a7 Qxa7 {=}) 8... Rxe8 9. Nf6+ Kd4 10. Nxe8 Qc1 {=}) 5... h4 (5... Re8 6. Kg3 {wenn erlaubt, Richtung e3, um das Gabel-Feld to st&#228;rken} h4+ (6... Nc8 7. Bb5+ Kxb5 8. Nc3+ Kxa6 9. Nxa4 Nxe7 10. Bxe7 Rxe7 11. Nc3 Rc7 {(11...Re5 12. Ne3 +-)} 12. Nd5 {Gabel-Feld (II) +-}) 7. Kh3 Rh8 (7... Rg8 8. f4 Re8 9. Kxh4 {+-}) 8. f3 {+-}) (5... Rg8 6. f4 Rh8 7. Kh4 {+-}) (5... Kd7 6. Nc5+ {Gabel}) (5... Kd5 {or Kb5} 6. Nc3+ {Gabel}) (5... Qxa6 {or Qa2} 6. Nb4+ {Gabel}) (5... Qb5 {or Qb3} 6. Nd4+ {Gabel}) 6. f3 {(Kh2 ist unn&ouml;tig)} (6. f4 f6 {Zugzwang Wei&szlig; =}) (6. Kg2 h3+ 7. Kh2 f6 8. Kg1 (8. f3 {or f4} Qa2 {keine Gabel =}) 8... Rg8+ 9. Kh1 Re8 10. Kh2 Rh8 {Wei&szlig; kann das Dreiecksmanöver nicht verwenden um weiterzukommen.. =}) (6. f6 Rg8 7. Kh2 (7. f3 Re8 8. f4 Rh8 {-+}) 7... Rh8 {passive Verteidigung =}) 6... Re8 {(Rg8 ist schlimmer, verliert ein Tempo f&uuml;r Schwarz)} 7. f4 (7. Kxh4 Kd7 {keine Gabel -=}) 7... Nc8 (7... Rh8 8. f6 Re8 9. Kxh4 Rg8 10. Kh3 Re8 11. Kg3 Rg8+ 12. Kf3 Re8 13. Nc3 {da die Fluchtfelder der schwarzen Dame f/g/h4 blockiert sind, zwingt Nc3 Schwarz ins Gabel-Feld zu ziehen +-}) 8. Bb5+ Kxb5 9. Nc3+ Kxa6 10. Nxa4 Nxe7 11. Bxe7 Rxe7 12. Nc3 {!} Rc7 13. Nd5 {Gabel-Feld (II) sichert beide Bauern und beide Springer, Wei&szlig; gewinnt}';
            currchessinfo[0] = '<a href="javascript:void(0);" onClick="openChessObject(141);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                                Publicat &#xEE;n revista <a href="javascript:void(0);" onClick="openChessObject(142);">EG</a> [2015]';
            currchessinfo[1] = '<a href="javascript:void(0);" onClick="openChessObject(141);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                                Published in <a href="javascript:void(0);" onClick="openChessObject(142);">EG</a> magazine [2015]';
            currchessinfo[2] = '<a href="javascript:void(0);" onClick="openChessObject(141);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                                Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(142);">EG</a> Zeitschrift [2015]';
            break;
            
        case  15: 
            currchessfen = allstudyfens[15];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[15][0]+'"][Site "Glarean"][Date "10.2015"][Round "'+allstudynames[15][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[15]+' 1. Be3 ({Nu} 1. Bd3+ {?} Ka4 2. Be3 Qb7 3. Bg6 (3. Nf5 {?} b3 4. a3 Qd5 5. Nd4 c6 6. Be2 Qc5 7. Bd1 Qxa3+ {-+}) 3... Kb5 4. Bd3+ Ka4 {=}) ({Nu} 1. Bc6+ {?} Kc4 2. Be3 Qb8 3. Bf3 {amenin&#x163;&#xE2;nd Be2#} Kd3 4. Ng6 {amenin&#x163;&#xE2;nd Nf4+ Be2#} (4. Nd5 {similar cu 4.Ng6}) 4... Kc4 5. Ne7 {=} (5. Nf4 {?} Kb5 6. Be2+ Kc6 {-+})) 1... c5 (1... Qb8 2. Bd3+ Ka4 3. Nc6 Qb7 4. Nd4 Qd5 5. Bc2+ b3 6. Bxb3+ {+-}) 2. Bd3+ ({Nu} 2. Bc6+ {?} Kc4 {-+}) 2... Ka4 (2... Kb6 3. Nc8+ {+-}) (2... c4 3. Bxc4+ Kxc4 4. Bxa7) 3. Nd5 ({Nu} 3. Bc2+ {?} Kb5 (3... b3 {?} 4. axb3+ Kb5 5. Bd3+ Kb6 6. Nc8+ {+-}) 4. Bd3+ Ka4 {=}) 3... Qb7 (3... f5 4. f4 Qb7 5. Bc4 Qb8 6. Bf2 Qd8 7. Bh4 Qb8 (7... Qxh4 8. Nb6#) 8. Be7 Qb7 9. Bd8 Qa7 10. Nc7 {+-}) (3... Qb8 {similar cu 3...Qb7}) 4. Bc4 Qb8 {Cea mai bun&#x103; ap&#x103;rare a Negrului este pasiv&#x103;, cu dama protej&#xE2;nd c&#xE2;mpul b6.} 5. Bc1 {Nebunul de negru nu poate p&#x103;trunde nici prin for&#x163;&#x103; brut&#x103; (sacrificiu la h6), nici prin &#xEE;nv&#x103;luire. Este r&#xE2;ndul regelui s&#x103; conduc&#x103; atacul; &#xEE;ntre timp &#xEE;ns&#x103; trebuie &#x163;inute c&#xE2;mpurile a3 &#x15F;i b2 sub control.} (5. Bf4 Qd8 6. Bg3 Qb8 {ap&#x103;r&#x103; ambele c&#xE2;mpuri b6 &#x15F;i d6}) 5... Qd8 6. Kc2 ({rezolvare secundar&#x103; nedorit&#x103;:} 6. Kb1 Qb8 7. f3 Qd8 8. Nf4 Qc8 9. Nd3 Qf5 10. Ka1 Qxf3 11. Nb2+ Ka3 12. Be6 Qc3 13. Kb1 {+-}) 6... Qb8 7. Bb2 Qa7 8. f3 {controleaz&#x103; g4} (8. f4 {?} Qb8 9. Kd3 Qa7 10. Ke4 Qb8 11. Kf5 (11. Kf3 Qd8 12. Kg4 Qc8+ 13. Kg3 {=}) 11... Qc8+ 12. Kg6 Qb7 13. Kh7 {?} g5+ 14. Kxh6 g4 15. Kg6 g3 16. Bc1 (16. h6 g2 17. h7 g1=Q+ {-+}) 16... g2 17. Be3 Qb8 18. Kg7 (18. Kf7 b3 19. axb3+ Ka3 20. h6 Qh8 21. f5 Qh7+ 22. Kxf6 g1=Q 23. Bxg1 Qxh6+ 24. Ke7 Qg7+ 25. Kxd6 Qxg1 26. f6 Qg3+ 27. Kxc5 a4 28. bxa4 Kxa4) 18... b3 19. axb3+ Ka3 20. h6 Qe8 21. h7 Qxe3 22. Nxe3 g1=Q+ 23. Kf7 Qh1 24. Kg7 Qg1+ 25. Kf7) (8. Kd3 {Mutarea nu este rea &#xEE;n sine, &#xEE;ns&#x103; f&#x103;r&#x103; f3 este remiz&#x103;.} Qb7 9. Ke4 Qb8 10. Kf4 Qd8 11. Kf5 Qc8+ 12. Kg6 Qg4+ 13. Kh7 Qxc4 14. Nb6+ Kb5 15. Nxc4 Kxc4 16. Kxg7 b3 17. axb3+ Kxb3 18. Bxf6 (18. Bc1 c4 19. Kxh6 c3 20. Kg6 a4 21. h6 a3 22. Bxa3 Kxa3 23. h7 c2 24. h8=Q c1=Q {=}) 18... d5 19. Kxh6 d4 20. Kg6 d3 21. Bg5 c4 22. h6 c3 23. h7 d2 24. h8=Q d1=Q {=}) 8... Qb7 9. Kd3 Qa7 10. Ke4 Qb7 11. Kf5 Qd7+ 12. Kg6 Qb7 13. Kh7 {trucul g5+ nu mai &#x163;ine, deoarece pionul f3 poate intercepta} Qa7 14. Kg8 Qb7 15. Kf8 Qa7 16. Ke8 Qb7 17. Kd8 Qa7 18. Kc8 Qa8+ 19. Kd7 Qb8 (19... Qb7+ 20. Nc7 b3 21. a3 Qb6 22. Nd5 {amenin&#x163;&#xE2;nd Nc3#} Qb5+ 23. Bxb5+ Kxb5 24. Kxd6 {+-}) 20. Nc7 b3 21. a3 Qb7 22. Bd5 Qxd5 23. Nxd5 Kb5 24. Kxd6';
            currpgn[1] = '[Event "'+allstudystips[15][1]+'"][Site "Glarean"][Date "10.2015"][Round "'+allstudynames[15][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[15]+' 1. Be3 ({Not} 1. Bd3+ {?} Ka4 2. Be3 Qb7 3. Bg6 (3. Nf5 {?} b3 4. a3 Qd5 5. Nd4 c6 6. Be2 Qc5 7. Bd1 Qxa3+ {-+}) 3... Kb5 4. Bd3+ Ka4 {=}) ({Not} 1. Bc6+ {?} Kc4 2. Be3 Qb8 3. Bf3 {threatening Be2#} Kd3 4. Ng6 {threatening Nf4+ Be2#} (4. Nd5 {similar to 4.Ng6}) 4... Kc4 5. Ne7 {=} (5. Nf4 {?} Kb5 6. Be2+ Kc6 {-+})) 1... c5 (1... Qb8 2. Bd3+ Ka4 3. Nc6 Qb7 4. Nd4 Qd5 5. Bc2+ b3 6. Bxb3+ {+-}) 2. Bd3+ ({Not} 2. Bc6+ {?} Kc4 {-+}) 2... Ka4 (2... Kb6 3. Nc8+ {+-}) (2... c4 3. Bxc4+ Kxc4 4. Bxa7) 3. Nd5 ({Not} 3. Bc2+ {?} Kb5 (3... b3 {?} 4. axb3+ Kb5 5. Bd3+ Kb6 6. Nc8+ {+-}) 4. Bd3+ Ka4 {=}) 3... Qb7 (3... f5 4. f4 Qb7 5. Bc4 Qb8 6. Bf2 Qd8 7. Bh4 Qb8 (7... Qxh4 8. Nb6#) 8. Be7 Qb7 9. Bd8 Qa7 10. Nc7 {+-}) (3... Qb8 {similar to 3...Qb7}) 4. Bc4 Qb8 {Black\'s best defense is passive, trying not to create any weaknesses while the queen keeps b6 guarded.} 5. Bc1 {The bishop cannot break Black with sheer force (sacrifice), nor can he sneak around the defense. It\'s therefore the king\'s turn to attempt a siege. But in the meantime, a3 must be protected to keep the black king cornered and to prevent b3 breakthroughs.} (5. Bf4 Qd8 6. Bg3 Qb8 {keeping both b6 and d6 defended}) 5... Qd8 6. Kc2 ({cooked: undesired secondary winning plan:} 6. Kb1 Qb8 7. f3 Qd8 8. Nf4 Qc8 9. Nd3 Qf5 10. Ka1 Qxf3 11. Nb2+ Ka3 12. Be6 Qc3 13. Kb1 {+-}) 6... Qb8 7. Bb2 Qa7 8. f3 {defending g4} (8. f4 {?} Qb8 9. Kd3 Qa7 10. Ke4 Qb8 11. Kf5 (11. Kf3 Qd8 12. Kg4 Qc8+ 13. Kg3 {=}) 11... Qc8+ 12. Kg6 Qb7 13. Kh7 {?} g5+ 14. Kxh6 g4 15. Kg6 g3 16. Bc1 (16. h6 g2 17. h7 g1=Q+ {-+}) 16... g2 17. Be3 Qb8 18. Kg7 (18. Kf7 b3 19. axb3+ Ka3 20. h6 Qh8 21. f5 Qh7+ 22. Kxf6 g1=Q 23. Bxg1 Qxh6+ 24. Ke7 Qg7+ 25. Kxd6 Qxg1 26. f6 Qg3+ 27. Kxc5 a4 28. bxa4 Kxa4) 18... b3 19. axb3+ Ka3 20. h6 Qe8 21. h7 Qxe3 22. Nxe3 g1=Q+ 23. Kf7 Qh1 24. Kg7 Qg1+ 25. Kf7) (8. Kd3 {The king move is not terrible by itself, but without f3 it is a draw.} Qb7 9. Ke4 Qb8 10. Kf4 Qd8 11. Kf5 Qc8+ 12. Kg6 Qg4+ 13. Kh7 Qxc4 14. Nb6+ Kb5 15. Nxc4 Kxc4 16. Kxg7 b3 17. axb3+ Kxb3 18. Bxf6 (18. Bc1 c4 19. Kxh6 c3 20. Kg6 a4 21. h6 a3 22. Bxa3 Kxa3 23. h7 c2 24. h8=Q c1=Q {=}) 18... d5 19. Kxh6 d4 20. Kg6 d3 21. Bg5 c4 22. h6 c3 23. h7 d2 24. h8=Q d1=Q {=}) 8... Qb7 9. Kd3 Qa7 10. Ke4 Qb7 11. Kf5 Qd7+ 12. Kg6 Qb7 13. Kh7 {the g5+ trick does not work, as the f-pawn can intercept} Qa7 14. Kg8 Qb7 15. Kf8 Qa7 16. Ke8 Qb7 17. Kd8 Qa7 18. Kc8 Qa8+ 19. Kd7 Qb8 (19... Qb7+ 20. Nc7 b3 21. a3 Qb6 22. Nd5 {threatening Nc3#} Qb5+ 23. Bxb5+ Kxb5 24. Kxd6 {+-}) 20. Nc7 b3 21. a3 Qb7 22. Bd5 Qxd5 23. Nxd5 Kb5 24. Kxd6';
            currpgn[2] = '[Event "'+allstudystips[15][2]+'"][Site "Glarean"][Date "10.2015"][Round "'+allstudynames[15][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[15]+' 1. Be3 ({Nicht} 1. Bd3+ {?} Ka4 2. Be3 Qb7 3. Bg6 (3. Nf5 {?} b3 4. a3 Qd5 5. Nd4 c6 6. Be2 Qc5 7. Bd1 Qxa3+ {-+}) 3... Kb5 4. Bd3+ Ka4 {=}) ({Nicht} 1. Bc6+ {?} Kc4 2. Be3 Qb8 3. Bf3 {droht Be2#} Kd3 4. Ng6 {droht Nf4+ Be2#} (4. Nd5 {wie 4.Ng6}) 4... Kc4 5. Ne7 {=} (5. Nf4 {?} Kb5 6. Be2+ Kc6 {-+})) 1... c5 (1... Qb8 2. Bd3+ Ka4 3. Nc6 Qb7 4. Nd4 Qd5 5. Bc2+ b3 6. Bxb3+ {+-}) 2. Bd3+ ({Nicht} 2. Bc6+ {?} Kc4 {-+}) 2... Ka4 (2... Kb6 3. Nc8+ {+-}) (2... c4 3. Bxc4+ Kxc4 4. Bxa7) 3. Nd5 ({Nicht} 3. Bc2+ {?} Kb5 (3... b3 {?} 4. axb3+ Kb5 5. Bd3+ Kb6 6. Nc8+ {+-}) 4. Bd3+ Ka4 {=}) 3... Qb7 (3... f5 4. f4 Qb7 5. Bc4 Qb8 6. Bf2 Qd8 7. Bh4 Qb8 (7... Qxh4 8. Nb6#) 8. Be7 Qb7 9. Bd8 Qa7 10. Nc7 {+-}) (3... Qb8 {wie 3...Qb7}) 4. Bc4 Qb8 {Die beste Verteidigung f&#252;r Schwarz besteht darin, passiv zu bleiben und keine weitere Schw&#228;chen zu produzieren, w&#228;hrend die Dame das Feld b6 bewacht.} 5. Bc1 {Der schwarzfeldrige L&#228;ufer kann nicht mit roher Opfer-Gewalt auf h6 durchbrechen, noch kann er die schwarze Verteidigung umgehen. Es ist also der weisse K&#246;nig selbst, der nun eine Belagerung in Angriff nimmt. In der Zwischenzeit muss a3 gesch&#252;tzt bleiben, um den schwarzen K&#246;nig in seinem Gef&#228;ngnis halten zu k&#246;nnen bzw. um einen Durchbruch mittels b3 zu verhindern.} (5. Bf4 Qd8 6. Bg3 Qb8 {verteidigt beide Felder b6 und d6}) 5... Qd8 6. Kc2 ({Nebenl&#246;sung:} 6. Kb1 Qb8 7. f3 Qd8 8. Nf4 Qc8 9. Nd3 Qf5 10. Ka1 Qxf3 11. Nb2+ Ka3 12. Be6 Qc3 13. Kb1 {+-}) 6... Qb8 7. Bb2 Qa7 8. f3 {verteidigt g4} (8. f4 {?} Qb8 9. Kd3 Qa7 10. Ke4 Qb8 11. Kf5 (11. Kf3 Qd8 12. Kg4 Qc8+ 13. Kg3 {=}) 11... Qc8+ 12. Kg6 Qb7 13. Kh7 {?} g5+ 14. Kxh6 g4 15. Kg6 g3 16. Bc1 (16. h6 g2 17. h7 g1=Q+ {-+}) 16... g2 17. Be3 Qb8 18. Kg7 (18. Kf7 b3 19. axb3+ Ka3 20. h6 Qh8 21. f5 Qh7+ 22. Kxf6 g1=Q 23. Bxg1 Qxh6+ 24. Ke7 Qg7+ 25. Kxd6 Qxg1 26. f6 Qg3+ 27. Kxc5 a4 28. bxa4 Kxa4) 18... b3 19. axb3+ Ka3 20. h6 Qe8 21. h7 Qxe3 22. Nxe3 g1=Q+ 23. Kf7 Qh1 24. Kg7 Qg1+ 25. Kf7) (8. Kd3 {Der K&#246;nigszug selbst ist nicht schlecht, aber ohne f3 ist es Remis.} Qb7 9. Ke4 Qb8 10. Kf4 Qd8 11. Kf5 Qc8+ 12. Kg6 Qg4+ 13. Kh7 Qxc4 14. Nb6+ Kb5 15. Nxc4 Kxc4 16. Kxg7 b3 17. axb3+ Kxb3 18. Bxf6 (18. Bc1 c4 19. Kxh6 c3 20. Kg6 a4 21. h6 a3 22. Bxa3 Kxa3 23. h7 c2 24. h8=Q c1=Q {=}) 18... d5 19. Kxh6 d4 20. Kg6 d3 21. Bg5 c4 22. h6 c3 23. h7 d2 24. h8=Q d1=Q {=}) 8... Qb7 9. Kd3 Qa7 10. Ke4 Qb7 11. Kf5 Qd7+ 12. Kg6 Qb7 13. Kh7 {wonach der g5-Trick nicht funktioniert, denn der weisse f-Bauer h&#228;lt dagegen.} Qa7 14. Kg8 Qb7 15. Kf8 Qa7 16. Ke8 Qb7 17. Kd8 Qa7 18. Kc8 Qa8+ 19. Kd7 Qb8 (19... Qb7+ 20. Nc7 b3 21. a3 Qb6 22. Nd5 {droht Nc3#} Qb5+ 23. Bxb5+ Kxb5 24. Kxd6 {+-}) 20. Nc7 b3 21. a3 Qb7 22. Bd5 Qxd5 23. Nxd5 Kb5 24. Kxd6';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(151);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(152);">Glarean</a> [2015]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(151);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(152);">Glarean</a> [2015]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(151);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(152);">Glarean</a> [2015]\
                        ';
            break;
            
            
        case 16: 
            currchessfen = allstudyfens[16];
            coauthor = 'Michael Roxlau';
            currpgn[0] = '[Event "'+allstudystips[16][0]+'"][Site "Die Schwalbe"][Date "12.2016"][Round "'+allstudynames[16][0]+'"][White "Mihai Neghina"][Black "Michael Roxlau"][Result "1-0"]'+allstudyfens[16]+' 1. Bb3+ {!} (1. g7 Nxg7 2. Bb3+ Ne6 {!} {=}) 1... Kf8 2. g7+ {!} Nxg7 3. Nf7 Qg8 4. Nh6 Qh8 5. Be5 Ke7 6. Bg8 Kf8 (6... Qxg8 7. Nxg8+ Kf7 8. Nh6+ Kg6 9. Ng4 {+-}) 7. Bd4 {!} (7. Kb5 Qxg8 {=}) 7... Ke8 (7... Qxg8 8. Bc5+ Ke8 9. Nxg8 {+-}) 8.Kb5 Kd7 9. Be5 {!} (9. Kc5 Kc8 {!} 10. Kc6 Kb8 {=}) 9... Ke8 (9... Kc8 10. Kc6 {+-}) 10. Kc6 Kf8 11. Bd4 {!} Qxg8 12. Bc5+ Ke8 13. Nxg8 {+-}';
            currpgn[1] = '[Event "'+allstudystips[16][1]+'"][Site "Die Schwalbe"][Date "12.2016"][Round "'+allstudynames[16][1]+'"][White "Mihai Neghina"][Black "Michael Roxlau"][Result "1-0"]'+allstudyfens[16]+' 1. Bb3+ {!} (1. g7 Nxg7 2. Bb3+ Ne6 {!} {=}) 1... Kf8 2. g7+ {!} Nxg7 3. Nf7 Qg8 4. Nh6 Qh8 5. Be5 Ke7 6. Bg8 Kf8 (6... Qxg8 7. Nxg8+ Kf7 8. Nh6+ Kg6 9. Ng4 {+-}) 7. Bd4 {!} (7. Kb5 Qxg8 {=}) 7... Ke8 (7... Qxg8 8. Bc5+ Ke8 9. Nxg8 {+-}) 8.Kb5 Kd7 9. Be5 {!} (9. Kc5 Kc8 {!} 10. Kc6 Kb8 {=}) 9... Ke8 (9... Kc8 10. Kc6 {+-}) 10. Kc6 Kf8 11. Bd4 {!} Qxg8 12. Bc5+ Ke8 13. Nxg8 {+-}';
            currpgn[2] = '[Event "'+allstudystips[16][2]+'"][Site "Die Schwalbe"][Date "12.2016"][Round "'+allstudynames[16][2]+'"][White "Mihai Neghina"][Black "Michael Roxlau"][Result "1-0"]'+allstudyfens[16]+' 1. Bb3+ {!} (1. g7 Nxg7 2. Bb3+ Ne6 {!} {=}) 1... Kf8 2. g7+ {!} Nxg7 3. Nf7 Qg8 4. Nh6 Qh8 5. Be5 Ke7 6. Bg8 Kf8 (6... Qxg8 7. Nxg8+ Kf7 8. Nh6+ Kg6 9. Ng4 {+-}) 7. Bd4 {!} (7. Kb5 Qxg8 {=}) 7... Ke8 (7... Qxg8 8. Bc5+ Ke8 9. Nxg8 {+-}) 8.Kb5 Kd7 9. Be5 {!} (9. Kc5 Kc8 {!} 10. Kc6 Kb8 {=}) 9... Ke8 (9... Kc8 10. Kc6 {+-}) 10. Kc6 Kf8 11. Bd4 {!} Qxg8 12. Bc5+ Ke8 13. Nxg8 {+-}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(161);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(162);">Die Schwalbe</a> [2016]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(163);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        A c&#xE2;&#x15F;tigat premiul 3 &#xEE;n turneul revistei <a href="javascript:void(0);" onClick="openChessObject(162);">Die Schwalbe</a>\
                        <br/><br/>\
                        <i>O versiune mai grea (pentru  calculatoare) ar fi urm&#x103;toarea:</i> <a href="javascript:void(0);" onClick="openChessObject(160);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(161);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(162);">Die Schwalbe</a> [2016]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(163);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Awarded 3rd prize in the <a href="javascript:void(0);" onClick="openChessObject(162);">Die Schwalbe</a> Informal Tourney\
                        <br/><br/>\
                        <i>A tougher version of the puzzle (for the engines) would be the following:</i> <a href="javascript:void(0);" onClick="openChessObject(160);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(161);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(162);">Die Schwalbe</a> [2016]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(163);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Hat den 3. Preis in <a href="javascript:void(0);" onClick="openChessObject(162);">Die Schwalbe</a> Informal Tourney gewonnen\
                        <br/><br/>\
                        <i>Eine schwerere Version (f&uuml;r die Engines) w&auml;re die folgende:</i> <a href="javascript:void(0);" onClick="openChessObject(160);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        ';
            break;
            
        case 17: 
            currchessfen = allstudyfens[17];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[17][0]+'"][Site "ARVES/UAPA"][Date "09.2017"][Round "'+allstudynames[17][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[17]+' 1. Qh3{!} (1. Bc8{?} Kh5{-+}) (1. h3{?} Kh5{-+}) (1. Qa1{?} Kf3{-+}) 1... Kh3 (1... Kg5 2. Qg2{=}) (1... Kf4{?} 2. Qh4{+-}) 2. Bc8 Qg4 3. Nd1{!} (3. Nd3{?} exd3 {nu poate mentine amenintarea de pat}) 3... e3 4. d3 (4. dxe3 dxe3 5. Be6 d4 {mutare de tempo care rupe simetria nebunilor, -+}) 4... Qxc8 (4... Bg6 5. Bf5{=}) (4... Bh5 5. Be6{=}) (4... Be8 5. Bd7{=}) (4... Bg8 5. Be6{=}) (4... Be6 5. Be6{=}) 5. Nf2 exf2 {pat}';
            currpgn[1] = '[Event "'+allstudystips[17][1]+'"][Site "ARVES/UAPA"][Date "09.2017"][Round "'+allstudynames[17][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[17]+' 1. Qh3{!} (1. Bc8{?} Kh5{-+}) (1. h3{?} Kh5{-+}) (1. Qa1{?} Kf3{-+}) 1... Kh3 (1... Kg5 2. Qg2{=}) (1... Kf4{?} 2. Qh4{+-}) 2. Bc8 Qg4 3. Nd1{!} (3. Nd3{?} exd3 {cannot sustain the stalemate threat}) 3... e3 4. d3 (4. dxe3 dxe3 5. Be6 d4 {tempo-losing move that breaks the bishop symmetry, -+}) 4... Qxc8 (4... Bg6 5. Bf5{=}) (4... Bh5 5. Be6{=}) (4... Be8 5. Bd7{=}) (4... Bg8 5. Be6{=}) (4... Be6 5. Be6{=}) 5. Nf2 exf2 {stalemate}';
            currpgn[2] = '[Event "'+allstudystips[17][2]+'"][Site "ARVES/UAPA"][Date "09.2017"][Round "'+allstudynames[17][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[17]+' 1. Qh3{!} (1. Bc8{?} Kh5{-+}) (1. h3{?} Kh5{-+}) (1. Qa1{?} Kf3{-+}) 1... Kh3 (1... Kg5 2. Qg2{=}) (1... Kf4{?} 2. Qh4{+-}) 2. Bc8 Qg4 3. Nd1{!} (3. Nd3{?} exd3 {kann die Pattsituation nicht aufrechterhalten}) 3... e3 4. d3 (4. dxe3 dxe3 5. Be6 d4 {Tempo-Zug, der die L&aumlufersymmetrie bricht, -+}) 4... Qxc8 (4... Bg6 5. Bf5{=}) (4... Bh5 5. Be6{=}) (4... Be8 5. Bd7{=}) (4... Bg8 5. Be6{=}) (4... Be6 5. Be6{=}) 5. Nf2 exf2 {Patt}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(171);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul formal <a href="javascript:void(0);" onClick="openChessObject(172);">Peter Krug 50JT</a> [2017]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(171);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Awarded an honorable mention in the formal tourney <a href="javascript:void(0);" onClick="openChessObject(172);">Peter Krug 50JT</a> [2017]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(171);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(172);">Peter Krug 50JT</a> Formal Tourney [2017] gewonnen\
                        ';
            break;
            
        case 18: 
            currchessfen = allstudyfens[18];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[18][0]+'"][Site "StrateGems"][Date "03.2017"][Round "'+allstudynames[18][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[18]+' {Inspirat de studiul lui V Chekover 1947 (FEN: 7r/p3k3/2p5/1pPp4/3P4/PP4P1/3P1PB1/2K5 w - - 0 1)} 1. Ncxe7+ (1. b4 {?} Rxc6 2. Rxc6 Qd7 {-+}) (1. Nfd4 e5 2. Nxe5 Rxc1+ 3. Kxc1 Qc8+ {urmat de Qf8 -+}) 1... Kf8 (1... Kh8 {similar variantei principale}) (1... Rxe7 2. Rc8+ Qxc8 (2... Kf7 3. Nd6+ {+-}) 3. Nxe7+ Kf7 4. Nxc8 {+-}) (1... Kf7 2. Nd6+ Kxe7 3. Nxb7 {+-}) 2. Ng6+ (2. Rxc7 Qxc7 3. Ng6+ Ke8 {-+}) 2... hxg6 (2... Kg8 3. Nge7+ {=}) (2... Ke8 {or Kf7} 3.Nd6+ {+-}) 3. Rxc7 (3. Nd4 Rxc1+ 4. Kxc1 Qf7 {-+}) 3... Qxc7 4. Nd4 Qe5 5. e3 b5 6. a3 {Albul a ajuns la pozi&#x163;ia defensiv&#x103; dorit&#x103;. Nu este doar o fort&#x103;rea&#x163;&#x103;, este un &#xEE;ntreg castel...} (6. Kd2 {?} b4 {-+}) 6... Kf7 7. Kd2 {orice mutare &#xEE;n spa&#x163;iul E1-E2-D1-D2 este ok} (7. b4 {?} Qb8 8. Kd2 Qb6 9.Ke2 a5 10. bxa5 Qxa5 {-+}) (7. a4 {?} bxa4 8. bxa4 Qb8 {-+}) (7. Kc2 {?} Qf6 {-+}) 7... Kg8 {Dac&#x103; negrul nu face nimic, albul nu face nimic} (7... Qf6 8. Ke2 {C&#xE2;nd dama neagr&#x103; este pe coloana f, regele alb ap&#x103;r&#x103; f2 mut&#xE2;nd Ke1 <-> Ke2}) (7... Qc7 8. Kd1 {C&#xE2;nd dama neagr&#x103; este pe coloana c, regele alb ap&#x103;r&#x103; c1 mut&#xE2;nd Kd1 <-> Kd2} Qa5 9. Ke2 {C&#xE2;nd dama neagr&#x103; este pe diagonala a5-e1, regele alb ap&#x103;r&#x103; d2 si e1 mut&#xE2;nd Kd1 <-> Ke2} (9. b4 {?} Qb6 {-+})) (7... b4 8.a4 {blocada ab } a5 9. Ke1 Qd6 10. Kd1 Qa6 11. Kd2 {C&#xE2;nd dama neagr&#x103; este pe diagonala a6-f1, regele alb ap&#x103;r&#x103; d3 mut&#xE2;nd Kd2 <-> Ke2;} (11. Kc2 {?} Qf6)) (7... Qb8 8. Kd1 a5 9. Kd2 a4 10. b4 {blocada ab } Qb6 11. Kd1 Kf6 12.Kd2 Ke5 13. Kd1 Qxd4 14. exd4+ Kxd4 15. Kd2 {wK este mereu suficient de aproape de d3})';
            currpgn[1] = '[Event "'+allstudystips[18][1]+'"][Site "StrateGems"][Date "03.2017"][Round "'+allstudynames[18][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[18]+' {Inspired by V Chekover 1947 study (FEN: 7r/p3k3/2p5/1pPp4/3P4/PP4P1/3P1PB1/2K5 w - - 0 1)} 1. Ncxe7+ (1. b4 {?} Rxc6 2. Rxc6 Qd7 {-+}) (1. Nfd4 e5 2. Nxe5 Rxc1+ 3. Kxc1 Qc8+ {followed by Qf8 -+}) 1... Kf8 (1... Kh8 {same as mainline}) (1... Rxe7 2. Rc8+ Qxc8 (2... Kf7 3. Nd6+ {+-}) 3. Nxe7+ Kf7 4. Nxc8 {+-}) (1... Kf7 2. Nd6+ Kxe7 3. Nxb7 {+-}) 2. Ng6+ (2. Rxc7 Qxc7 3. Ng6+ Ke8 {-+}) 2... hxg6 (2... Kg8 3. Nge7+ {=}) (2... Ke8 {or Kf7} 3.Nd6+ {+-}) 3. Rxc7 (3. Nd4 Rxc1+ 4. Kxc1 Qf7 {-+}) 3... Qxc7 4. Nd4 Qe5 5. e3 b5 6. a3 {White has reached the desired defensive position. This is not only a fortress, it is an entire castle...} (6. Kd2 {?} b4 {-+}) 6... Kf7 7. Kd2 {any K move inside the headquarters E1-E2-D1-D2 is fine} (7. b4 {?} Qb8 8. Kd2 Qb6 9.Ke2 a5 10. bxa5 Qxa5 {-+}) (7. a4 {?} bxa4 8. bxa4 Qb8 {-+}) (7. Kc2 {?} Qf6 {-+}) 7... Kg8 {If Black tries nothing, White does nothing} (7... Qf6 8. Ke2 {When the bQ is on the f-file, wK guards f2 by shuffling between Ke1 and Ke2;}) (7... Qc7 8. Kd1 {When the bQ is on the c-file, wK guards c1 by shuffling between Kd1 and Kd2;} Qa5 9. Ke2 {When the bQ is on the a5-e1 diagonal, wK guards d2 and e1 by shuffling between Kd1 and Ke2;} (9. b4 {?} Qb6 {-+})) (7... b4 8.a4 {ab blockade} a5 9. Ke1 Qd6 10. Kd1 Qa6 11. Kd2 {When the bQ is on the a6-f1 diagonal, wK guards d3 by shuffling between Kd2 and Ke2;} (11. Kc2 {?} Qf6)) (7... Qb8 8. Kd1 a5 9. Kd2 a4 10. b4 {ab blockade} Qb6 11. Kd1 Kf6 12.Kd2 Ke5 13. Kd1 Qxd4 14. exd4+ Kxd4 15. Kd2 {wK is always close enough to defend d3})';
            currpgn[2] = '[Event "'+allstudystips[18][2]+'"][Site "StrateGems"][Date "03.2017"][Round "'+allstudynames[18][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[18]+' {Inspiriert von V Chekover 1947 (FEN: 7r/p3k3/2p5/1pPp4/3P4/PP4P1/3P1PB1/2K5 w - - 0 1)} 1. Ncxe7+ (1. b4 {?} Rxc6 2. Rxc6 Qd7 {-+}) (1. Nfd4 e5 2. Nxe5 Rxc1+ 3. Kxc1 Qc8+ {und Qf8 -+}) 1... Kf8 (1... Kh8 {wie im Hauptvariation}) (1... Rxe7 2. Rc8+ Qxc8 (2... Kf7 3. Nd6+ {+-}) 3. Nxe7+ Kf7 4. Nxc8 {+-}) (1... Kf7 2. Nd6+ Kxe7 3. Nxb7 {+-}) 2. Ng6+ (2. Rxc7 Qxc7 3. Ng6+ Ke8 {-+}) 2... hxg6 (2... Kg8 3. Nge7+ {=}) (2... Ke8 {or Kf7} 3.Nd6+ {+-}) 3. Rxc7 (3. Nd4 Rxc1+ 4. Kxc1 Qf7 {-+}) 3... Qxc7 4. Nd4 Qe5 5. e3 b5 6. a3 {Wei&szlig; hat die gew&uuml;nschte Verteidigungsstellung erreicht. Dies ist nicht nur eine Festung, es ist eine ganzes Schloss...} (6. Kd2 {?} b4 {-+}) 6... Kf7 7. Kd2 {jeder K Zug innerhalb des Hauptquartiers E1-E2-D1-D2 ist ok} (7. b4 {?} Qb8 8. Kd2 Qb6 9.Ke2 a5 10. bxa5 Qxa5 {-+}) (7. a4 {?} bxa4 8. bxa4 Qb8 {-+}) (7. Kc2 {?} Qf6 {-+}) 7... Kg8 {Wenn Schwarz nichts versucht, tut Wei&szlig; nichts} (7... Qf6 8. Ke2 {Wenn die schwarze Dame auf die f-Linie ist, bewacht der weiße K&ouml;nig das Feld f2 entweder von e1 oder e2;}) (7... Qc7 8. Kd1 {Wenn die schwarze Dame auf die c-Linie ist, bewacht der weiße K&ouml;nig die Felder c2 und c1 entweder von d1 oder d2} Qa5 9. Ke2 {Wenn die schwarze Dame auf der a5-e1 Diagonale ist, bewacht der weiße K&ouml;nig die Felder d2 und e1 entweder von d1 oder e2} (9. b4 {?} Qb6 {-+})) (7... b4 8.a4 {ab Blockade} a5 9. Ke1 Qd6 10. Kd1 Qa6 11. Kd2 {Wenn die schwarze Dame auf der a6-f1 Diagonale ist, bewacht der weiße K&ouml;nig das Feld d3 entweder von d2 oder e2} (11. Kc2 {?} Qf6)) (7... Qb8 8. Kd1 a5 9. Kd2 a4 10. b4 {ab Blockade} Qb6 11. Kd1 Kf6 12.Kd2 Ke5 13. Kd1 Qxd4 14. exd4+ Kxd4 15. Kd2 {wK ist immer nah genug, um d3 zu verteidigen})';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(183);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul revistei <a href="javascript:void(0);" onClick="openChessObject(182);">StrateGems</a> [2017]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(181);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(182);">StrateGems</a> [2017]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(183);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Awarded an honorable mention in the <a href="javascript:void(0);" onClick="openChessObject(182);">StrateGems</a> Informal Tourney [2017]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(181);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(182);">StrateGems</a> [2017]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(183);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(182);">StrateGems</a> Informal Tourney gewonnen [2017]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(181);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(182);">StrateGems</a> [2017]\
                        ';
            break;
            
            
        case  19: 
            currchessfen = allstudyfens[19];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[19][0]+'"][Site "Probleemblad"][Date "03.2017"][Round "'+allstudynames[19][0]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[19]+' 1. Qxf4 {preg&#x103;tind un &#x15F;ah prin deschidere} (1. c4 {?} Rxb5 2. cxb5 Rxb5 3. Rxb5 Bxb5+ 4. Qxb5 Nc5+ 5. Kd2 Nxe6 {-+}) (1. Red5+ {?} Kc6 2. d8=Q Qxd8 3. Rxd8 Rxb5 4. Qe4+ Rd5+ 5. Kc2 Bd3+ 6. Qxd3 Rxd3 7. Rxd3 Nc5 {-+}) (1. d8=Q+ {?} Qxd8 2. Red5+ Kc6 {la fel cu varianta 1.Red5+}) 1... Rxb5 (1... Rxd7 {?} 2. Ke3 Rxb5 (2... Bxb5 3. exd7 Qxd7 4. Rxb5+ Ke7 (4... Kc6 5. Qc4+ Kb7 6. Rxb3 {+=}) 5. Qh4+ {=}) 3. Rxb5+ Kc6 (3... Kxe6 4. Re5+ Kd6 5. Rxe7+ Kxe7 6. Qb4+ {+-}) 4. Qc4+ Kd6 5. Qf4+ Kc6 6. Qc4+ {=}) (1... Bxb5+ {?} 2. Rxb5+ Kxe6 3. Qf5+ Kd6 4. d8=Q+ Qxd8 5. Rd5+ Kc7 6. Rxd8 Kxd8 7. Qf8+ {=}) 2. Rxb5+ Kxe6 (2... Kc6 {?} 3. Qc4+ Qc5 4. Qe4+ Kc7 5. Qf4+ Kc6 6. Qe4+ {=}) 3. Qc4+ {interpunere a damei pe diagonala a6-d3} (3. Qh6+ {?} Kxd7 4. Qxa6 Nc1+ 5. Kd4 Ne2+ 6. Kd3 Nf4+ 7. Kd4 Ne6+ 8. Kd3 Rxb5 9. Qxb5+ Kc7 {-+}) 3... Kxd7 (3... Kf6 {?} 4. Qf4+ {=}) 4. Rxb7+ Ke8 (4... Kd8 {?} 5. Rb8+ Kd7 6. Rb7+ {la fel ca mai devreme}) (4... Bxb7 {?} 5. Qxb3 {nebun de culoarea gre&#x15F;it&#x103; =}) (4... Kd6 {??} 5. Qxa6+ {#6/0}) 5. Rxe7+ (5. Rb8+ {?} Qd8+ 6. Rxd8+ Kxd8 {d8 este un camp mai bun pentru regele negru decat e7} 7. f4 Bxc4+ 8. Kxc4 Nd2+ {-#36/0}) (5. Rb5 {?} Nc5+ 6. Kc2 {sau Kd4} Bxb5 7. Qxb5+ Kf8 {-+}) (5. Qxa6 {?} Nc5+ 6. Kd4 (6. Kc4 Qe2+ 7. Kxc5 Qxa6 {-+}) 6... Nxa6 7. Rxe7+ Kxe7 {-#36/0}) 5... Kxe7 {Pozi&#x163;ia critic&#x103; pentru opozi&#x163;ia la distan&#x163;&#x103; &#xEE;ntre regele negru &#x15F;i pionul f} 6. f4 (6. Qxa6 {? (prea devreme)} Nc5+ 7. Kc4 Nxa6 {aceast&#x103; variant&#x103; (*) este o lupt&#x103; de tempo-uri / opozi&#x163;ie la distan&#x163;&#x103; &#xEE;ntre regele negru &#x15F;i pionul alb din f, -+} 8. Kb5 Nc7+ {! (mut&#x103;ri unice marcate cu !)} (8... Nb8 9. f4 {sau c4 =}) 9. Kc6 Ke8 (9... Ne8 10. Kb5 Nc7+ 11. Kc6 {repeti&#x163;ie inutil&#x103;}) (9... Kd8 10. f4 Ke7 11. f5 Kf6 12. Kxc7 a5 13. c4 a4 14. c5 a3 15. c6 a2 16. Kb8 {or Kb7} a1=Q 17. c7 {remiza pionului c}) 10. f4 (10. f3 Ke7 {! (Kd8? remiza pionului c)} 11. f4 Kd8 {aceea&#x15F;i variant&#x103; cu mutare &#xEE;n plus}) 10... Kd8 {!} 11. f5 Ne8 {! (Ke8 or Ke7 =)} 12. c4 (12. Kc5 Kd7 {-#32/0}) 12... Kc8 {! (Ke7 remiza pionului c)} 13. c5 Kd8 {! (Nf6 Kb5 =)} 14. Kb5 Nc7+ {! (Kc7 c6 =)} 15. Kc6 (15. Ka5 Ke7 {-#24/0}) 15... a5 {-#23/0}) (6. f3 {? (prea &#xEE;ncet)} Kd7 (6... Bxc4+ {?} 7. Kxc4 {=}) 7. f4 {Alb a pierdut un tempo, -+} Bxc4+ 8. Kxc4 Nd2+ {!} 9. Kb5 Kc7 {or Kc8} 10. c4 Kb7 {!} 11. c5 a6+ {!} 12. Ka5 Nb3+ {!} 13. Kb4 Nd4 {!} 14. Kc4 Nf5 {-#30/0}) 6... Ke8 (6... Bxc4+ {?} 7. Kxc4 {=}) (6... Nc5+ {?} 7. Kd4 Bxc4 8. Kxc5 {nebun de culoarea gre&#x15F;it&#x103; =} (8. Kxc4 {?} Na6 {-#37/0})) (6... Nc1+ {?} 7. Kc2 Bxc4 8. Kxc1 {nebun de culoarea gre&#x15F;it&#x103; =}) (6... Kd6 {?} 7. Qxa6+) (6... Kd8 {?} 7. Qxa6 Nc5+ 8. Kc4 Nxa6 {=}) (6... Kd7 {?} 7. f5 Kd8 {or Ke7 or Ke8 or Kc7 or Kc8} 8. Qxa6 Nc5+ 9. Kc4 Nxa6 {=}) 7. f5 (7. Qxa6 {? (prea devreme)} Nc5+ 8. Kc4 Nxa6 9. Kb5 Nc7+ 10. Kc6 Kd8 {-+, vezi varianta *}) 7... Kd7 (7... Bxc4+ {?} 8. Kxc4 {=}) (7... Kd8 {? or Ke7?} 8. Qxa6 Nc5+ 9. Kc4 Nxa6 {=}) 8. f6 (8. Qxa6 {? (prea devreme)} Nc5+ 9. Kc4 Nxa6 10. Kb5 Nc7+ 11. Kc5 Ne8 {-+, vezi varianta *}) 8... Kd8 (8... Bxc4+ {?} 9. Kxc4 {+=}) (8... Ke8 {?} 9. Qxa6 Nc5+ 10. Kc4 Nxa6 {=}) 9. Qxa6 {!!} (9. f7 {?} Ke7 10. Qxa6 {? (prea t&#xE2;rziu)} Nc5+ 11. Kc4 Nxa6 12. Kb5 Nb8 {-#24/0} (12... Nc7+ {?} 13. Kc6 {=})) 9... Nc5+ 10. Kc4 Nxa6 11. Kb5 {cu pionul la f6, nici Nc7+ nici Nb8 nu merg...} Nc7+ (11... Nb8 12. c4 {or Kc5 =}) 12. Kc6 Ke8 13. f7+ Kf8 (13... Ke7 14. f8=Q+ Kxf8 {la fel ca varianta principal&#x103;}) 14. Kxc7 a5 15. c4 a4 16. c5 a3 17. c6 a2 18. Kb8 {or Kb7} a1=Q 19. c7 {remiza pionului c} ';
            currpgn[1] = '[Event "'+allstudystips[19][1]+'"][Site "Probleemblad"][Date "03.2017"][Round "'+allstudynames[19][1]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[19]+' 1. Qxf4 {preparing for a discovered check} (1. c4 {?} Rxb5 2. cxb5 Rxb5 3. Rxb5 Bxb5+ 4. Qxb5 Nc5+ 5. Kd2 Nxe6 {-+}) (1. Red5+ {?} Kc6 2. d8=Q Qxd8 3. Rxd8 Rxb5 4. Qe4+ Rd5+ 5. Kc2 Bd3+ 6. Qxd3 Rxd3 7. Rxd3 Nc5 {-+}) (1. d8=Q+ {?} Qxd8 2. Red5+ Kc6 {same as 1.Red5+ variation}) 1... Rxb5 (1... Rxd7 {?} 2. Ke3 Rxb5 (2... Bxb5 3. exd7 Qxd7 4. Rxb5+ Ke7 (4... Kc6 5. Qc4+ Kb7 6. Rxb3 {+=}) 5. Qh4+ {=}) 3. Rxb5+ Kc6 (3... Kxe6 4. Re5+ Kd6 5. Rxe7+ Kxe7 6. Qb4+ {+-}) 4. Qc4+ Kd6 5. Qf4+ Kc6 6. Qc4+ {=}) (1... Bxb5+ {?} 2. Rxb5+ Kxe6 3. Qf5+ Kd6 4. d8=Q+ Qxd8 5. Rd5+ Kc7 6. Rxd8 Kxd8 7. Qf8+ {=}) 2. Rxb5+ Kxe6 (2... Kc6 {?} 3. Qc4+ Qc5 4. Qe4+ Kc7 5. Qf4+ Kc6 6. Qe4+ {=}) 3. Qc4+ {interposition of the queen on the a6-d3 diagonal} (3. Qh6+ {?} Kxd7 4. Qxa6 Nc1+ 5. Kd4 Ne2+ 6. Kd3 Nf4+ 7. Kd4 Ne6+ 8. Kd3 Rxb5 9. Qxb5+ Kc7 {-+}) 3... Kxd7 (3... Kf6 {?} 4. Qf4+ {=}) 4. Rxb7+ Ke8 (4... Kd8 {?} 5. Rb8+ Kd7 6. Rb7+ {same as before}) (4... Bxb7 {?} 5. Qxb3 {wrong bishop =}) (4... Kd6 {??} 5. Qxa6+ {#6/0}) 5. Rxe7+ (5. Rb8+ {?} Qd8+ 6. Rxd8+ Kxd8 {d8 is a better square for the bK than e7} 7. f4 Bxc4+ 8. Kxc4 Nd2+ {-#36/0}) (5. Rb5 {?} Nc5+ 6. Kc2 {or Kd4} Bxb5 7. Qxb5+ Kf8 {-+}) (5. Qxa6 {?} Nc5+ 6. Kd4 (6. Kc4 Qe2+ 7. Kxc5 Qxa6 {-+}) 6... Nxa6 7. Rxe7+ Kxe7 {-#36/0}) 5... Kxe7 {Critical position for the distant opposition of bK and f-pawn} 6. f4 (6. Qxa6 {? (too soon)} Nc5+ 7. Kc4 Nxa6 {this (*) variation is a struggle of tempi and an unusual distant opposition between the Black King and the White f-pawn, -+} 8. Kb5 Nc7+ {! (unique moves marked with !)} (8... Nb8 9. f4 {or c4 =}) 9. Kc6 Ke8 (9... Ne8 10. Kb5 Nc7+ 11. Kc6 {unnecessary repetition}) (9... Kd8 10. f4 Ke7 11. f5 Kf6 12. Kxc7 a5 13. c4 a4 14. c5 a3 15. c6 a2 16. Kb8 {or Kb7} a1=Q 17. c7 {c-pawn draw}) 10. f4 (10. f3 Ke7 {! (Kd8? leads to the c-pawn draw)} 11. f4 Kd8 {same variation but with extra move}) 10... Kd8 {!} 11. f5 Ne8 {! (Ke8 or Ke7 =)} 12. c4 (12. Kc5 Kd7 {-#32/0}) 12... Kc8 {! (Ke7 leads to the c-pawn draw)} 13. c5 Kd8 {! (Nf6 Kb5 =)} 14. Kb5 Nc7+ {! (Kc7 c6 =)} 15. Kc6 (15. Ka5 Ke7 {-#24/0}) 15... a5 {-#23/0}) (6. f3 {? (too slow)} Kd7 (6... Bxc4+ {?} 7. Kxc4 {=}) 7. f4 {White has lost a tempo, -+} Bxc4+ 8. Kxc4 Nd2+ {!} 9. Kb5 Kc7 {or Kc8} 10. c4 Kb7 {!} 11. c5 a6+ {!} 12. Ka5 Nb3+ {!} 13. Kb4 Nd4 {!} 14. Kc4 Nf5 {-#30/0}) 6... Ke8 (6... Bxc4+ {?} 7. Kxc4 {=}) (6... Nc5+ {?} 7. Kd4 Bxc4 8. Kxc5 {wrong colour bishop =} (8. Kxc4 {?} Na6 {-#37/0})) (6... Nc1+ {?} 7. Kc2 Bxc4 8. Kxc1 {wrong colour bishop =}) (6... Kd6 {?} 7. Qxa6+) (6... Kd8 {?} 7. Qxa6 Nc5+ 8. Kc4 Nxa6 {=}) (6... Kd7 {?} 7. f5 Kd8 {or Ke7 or Ke8 or Kc7 or Kc8} 8. Qxa6 Nc5+ 9. Kc4 Nxa6 {=}) 7. f5 (7. Qxa6 {? (too soon)} Nc5+ 8. Kc4 Nxa6 9. Kb5 Nc7+ 10. Kc6 Kd8 {-+, see * variation}) 7... Kd7 (7... Bxc4+ {?} 8. Kxc4 {=}) (7... Kd8 {? or Ke7?} 8. Qxa6 Nc5+ 9. Kc4 Nxa6 {=}) 8. f6 (8. Qxa6 {? (too soon)} Nc5+ 9. Kc4 Nxa6 10. Kb5 Nc7+ 11. Kc5 Ne8 {-+, see * variation}) 8... Kd8 (8... Bxc4+ {?} 9. Kxc4 {+=}) (8... Ke8 {?} 9. Qxa6 Nc5+ 10. Kc4 Nxa6 {=}) 9. Qxa6 {!!} (9. f7 {?} Ke7 10. Qxa6 {? (too late)} Nc5+ 11. Kc4 Nxa6 12. Kb5 Nb8 {-#24/0} (12... Nc7+ {?} 13. Kc6 {=})) 9... Nc5+ 10. Kc4 Nxa6 11. Kb5 {with the pawn on f6, neither Nc7+ nor Nb8 work...} Nc7+ (11... Nb8 12. c4 {or Kc5 =}) 12. Kc6 Ke8 13. f7+ Kf8 (13... Ke7 14. f8=Q+ Kxf8 {same as mainline}) 14. Kxc7 a5 15. c4 a4 16. c5 a3 17. c6 a2 18. Kb8 {or Kb7} a1=Q 19. c7 {c-pawn draw} ';
            currpgn[2] = '[Event "'+allstudystips[19][2]+'"][Site "Probleemblad"][Date "03.2017"][Round "'+allstudynames[19][2]+'"][White "Mihai Neghina"][Black "---"][Result "1/2-1/2"]'+allstudyfens[19]+' 1. Qxf4 {f&uuml;r ein entdecktes Schachgebot} (1. c4 {?} Rxb5 2. cxb5 Rxb5 3. Rxb5 Bxb5+ 4. Qxb5 Nc5+ 5. Kd2 Nxe6 {-+}) (1. Red5+ {?} Kc6 2. d8=Q Qxd8 3. Rxd8 Rxb5 4. Qe4+ Rd5+ 5. Kc2 Bd3+ 6. Qxd3 Rxd3 7. Rxd3 Nc5 {-+}) (1. d8=Q+ {?} Qxd8 2. Red5+ Kc6 {wie im 1.Red5+ Variante}) 1... Rxb5 (1... Rxd7 {?} 2. Ke3 Rxb5 (2... Bxb5 3. exd7 Qxd7 4. Rxb5+ Ke7 (4... Kc6 5. Qc4+ Kb7 6. Rxb3 {+=}) 5. Qh4+ {=}) 3. Rxb5+ Kc6 (3... Kxe6 4. Re5+ Kd6 5. Rxe7+ Kxe7 6. Qb4+ {+-}) 4. Qc4+ Kd6 5. Qf4+ Kc6 6. Qc4+ {=}) (1... Bxb5+ {?} 2. Rxb5+ Kxe6 3. Qf5+ Kd6 4. d8=Q+ Qxd8 5. Rd5+ Kc7 6. Rxd8 Kxd8 7. Qf8+ {=}) 2. Rxb5+ Kxe6 (2... Kc6 {?} 3. Qc4+ Qc5 4. Qe4+ Kc7 5. Qf4+ Kc6 6. Qe4+ {=}) 3. Qc4+ {Interposition der Dame auf der a6-d3 Diagonale} (3. Qh6+ {?} Kxd7 4. Qxa6 Nc1+ 5. Kd4 Ne2+ 6. Kd3 Nf4+ 7. Kd4 Ne6+ 8. Kd3 Rxb5 9. Qxb5+ Kc7 {-+}) 3... Kxd7 (3... Kf6 {?} 4. Qf4+ {=}) 4. Rxb7+ Ke8 (4... Kd8 {?} 5. Rb8+ Kd7 6. Rb7+ {das Gleiche wie vorher}) (4... Bxb7 {?} 5. Qxb3 {falsches L&auml;ufer =}) (4... Kd6 {??} 5. Qxa6+ {#6/0}) 5. Rxe7+ (5. Rb8+ {?} Qd8+ 6. Rxd8+ Kxd8 {d8 ist ein besseres Feld f&uuml;r bK als e7} 7. f4 Bxc4+ 8. Kxc4 Nd2+ {-#36/0}) (5. Rb5 {?} Nc5+ 6. Kc2 {oder Kd4} Bxb5 7. Qxb5+ Kf8 {-+}) (5. Qxa6 {?} Nc5+ 6. Kd4 (6. Kc4 Qe2+ 7. Kxc5 Qxa6 {-+}) 6... Nxa6 7. Rxe7+ Kxe7 {-#36/0}) 5... Kxe7 {Kritische Stellung f&uuml;r die Feropposition zwischen den schwarzen K&ouml;nig und den f-Bauern} 6. f4 (6. Qxa6 {? (zu fr&uuml;h)} Nc5+ 7. Kc4 Nxa6 {diese (*) Variante ist ein Tempo-Kampf / ungew&ouml;hnliche Fernopposition zwischen den schwarzen K&ouml;nig und der wei&szlig;e f-Bauer, -+} 8. Kb5 Nc7+ {! (einzige Z&uuml;ge werden mit ! bezeichnet)} (8... Nb8 9. f4 {oder c4 =}) 9. Kc6 Ke8 (9... Ne8 10. Kb5 Nc7+ 11. Kc6 {unn&ouml;tige Wiederholung}) (9... Kd8 10. f4 Ke7 11. f5 Kf6 12. Kxc7 a5 13. c4 a4 14. c5 a3 15. c6 a2 16. Kb8 {or Kb7} a1=Q 17. c7 {c-Bauer Remis}) 10. f4 (10. f3 Ke7 {! (Kd8? c-Bauer Remis)} 11. f4 Kd8 {die selbe Variante, aber mit einen Zug extra}) 10... Kd8 {!} 11. f5 Ne8 {! (Ke8 or Ke7 =)} 12. c4 (12. Kc5 Kd7 {-#32/0}) 12... Kc8 {! (Ke7 c-Bauer Remis)} 13. c5 Kd8 {! (Nf6 Kb5 =)} 14. Kb5 Nc7+ {! (Kc7 c6 =)} 15. Kc6 (15. Ka5 Ke7 {-#24/0}) 15... a5 {-#23/0}) (6. f3 {? (zu langsam)} Kd7 (6... Bxc4+ {?} 7. Kxc4 {=}) 7. f4 {Wei&szlig; hat ein Tempo verloren, -+} Bxc4+ 8. Kxc4 Nd2+ {!} 9. Kb5 Kc7 {or Kc8} 10. c4 Kb7 {!} 11. c5 a6+ {!} 12. Ka5 Nb3+ {!} 13. Kb4 Nd4 {!} 14. Kc4 Nf5 {-#30/0}) 6... Ke8 (6... Bxc4+ {?} 7. Kxc4 {=}) (6... Nc5+ {?} 7. Kd4 Bxc4 8. Kxc5 {falsches L&auml;ufer =} (8. Kxc4 {?} Na6 {-#37/0})) (6... Nc1+ {?} 7. Kc2 Bxc4 8. Kxc1 {falsches L&auml;ufer =}) (6... Kd6 {?} 7. Qxa6+) (6... Kd8 {?} 7. Qxa6 Nc5+ 8. Kc4 Nxa6 {=}) (6... Kd7 {?} 7. f5 Kd8 {or Ke7 or Ke8 or Kc7 or Kc8} 8. Qxa6 Nc5+ 9. Kc4 Nxa6 {=}) 7. f5 (7. Qxa6 {? (zu fr&uuml;h)} Nc5+ 8. Kc4 Nxa6 9. Kb5 Nc7+ 10. Kc6 Kd8 {-+, siehe die * Variante}) 7... Kd7 (7... Bxc4+ {?} 8. Kxc4 {=}) (7... Kd8 {? or Ke7?} 8. Qxa6 Nc5+ 9. Kc4 Nxa6 {=}) 8. f6 (8. Qxa6 {? (zu fr&uuml;h)} Nc5+ 9. Kc4 Nxa6 10. Kb5 Nc7+ 11. Kc5 Ne8 {-+, siehe die * Variante}) 8... Kd8 (8... Bxc4+ {?} 9. Kxc4 {+=}) (8... Ke8 {?} 9. Qxa6 Nc5+ 10. Kc4 Nxa6 {=}) 9. Qxa6 {!!} (9. f7 {?} Ke7 10. Qxa6 {? (zu sp&auml;t)} Nc5+ 11. Kc4 Nxa6 12. Kb5 Nb8 {-#24/0} (12... Nc7+ {?} 13. Kc6 {=})) 9... Nc5+ 10. Kc4 Nxa6 11. Kb5 {mit dem Bauer auf f6 funktionieren weder Nc7 + noch Nb8...} Nc7+ (11... Nb8 12. c4 {or Kc5 =}) 12. Kc6 Ke8 13. f7+ Kf8 (13... Ke7 14. f8=Q+ Kxf8 {wie die Hauptvariante}) 14. Kxc7 a5 15. c4 a4 16. c5 a3 17. c6 a2 18. Kb8 {or Kb7} a1=Q 19. c7 {c-Bauer Remis} ';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(191);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(192);">Probleemblad</a> [2017]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(191);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(192);">Probleemblad</a> [2017]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(191);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(192);">Probleemblad</a> [2017]\
                        ';
            break;
   

        case  20: 
            currchessfen = allstudyfens[20];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[20][0]+'"][Site "Probleemblad"][Date "03.2018"][Round "'+allstudynames[20][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[20]+' 1. Ne1+ (1. Bxb2 {??} Ne4+ 2. Kg1 Nf3+ 3. Kh1 Nf2{#}) 1. .. Kc3 (1. .. Ke4 2. Bxb2 Bd7 3. a6 Nb5 4. Nxh6 {+-}) 2. Ng3 (2. a6 {?} Ne4+ 3. Ke3 Nb5 4. Kxe4 Kd2 {-+}) 2. .. Bd7 3. a6 Bc8 4. a7 Bb7 5. Kg2 (5. g5 {?} hxg5 6. Kg2 g4 {=}) 5. .. Ba8 6. Kh3 (6. g5 {minor dual}) (6. e6 {minor dual}) (6. Kh2 {sau oricare alt c&#xE2;mp negru care permite un &#x15F;ah de cal pierde -+}) 6. .. Bb7 7. g5 (7. e6 {minor dual}) 7. .. hxg5 8. Kg4 Ba8 (8. .. Bc8+ 9. e6 {+-}) 9. Kh5 (9. e6 {?} f5+ {-+}) (9. Kxg5 N2f3+ {-+}) 9. .. Bb7 10. e6 fxe6 11. Kg6 Ba8 12. Kf6 {triangula&#x163;ie prin f6} (12. Kh7 {minor dual}) 12. .. Bb7 13. Kf7 Ba8 14. Ke8 Bb7 15. Kd7 Ba8 16. Kc8 {Zugzwang}  e5 (16. .. Bb7+ 17. Kb8 {+-}) 17. Kd7 Bb7 18. Ke8 Ba8 19. Kf7 Bb7 20. Kf6 Ba8 21. Kg6 Bb7 22. Kf7 Ba8 23. Ke8 Bb7 24. Kd7 Ba8 25. Kc8 {Zugzwang} e4 (25. .. Bb7+ 26. Kb8 {+-}) 26. Kd7 Bb7 27. Ke8 Ba8 28. Kf7 Bb7 29. Kf6 Ba8 30. Kg6 Bb7 31. Kf7 Ba8 32. Ke8 Bb7 33. Kd7 Ba8 34. Kc8 {Zugzwang} e3 (34. .. Bb7+ 35. Kb8 {+-}) 35. Kd7 Bb7 36. Ke8 Ba8 37. Kf7 Bb7 38. Kf6 Ba8 39. Kg6 Bb7 40. Kf7 Ba8 41. Ke8 Bb7 42. Kd7 Ba8 43. Kc8 {Zugzwang} g4 (43. .. Bb7+ 44. Kb8 {+-}) 44. Kd7 Bb7 45. Ke8 Ba8 46. Kf7 Bb7 47. Kg6 {pionul g trebuie eliminat &#xEE;naintea ultimului zugzwang, deoarece doar acum nu mai este ap&#x103;rat indirect de ...Nf3+} (47. Kf6 {?} Ba8 48. Kg6 Bb7 49. Kf7 Ba8 50. Ke8 Bb7 51. Kd7 Ba8 52. Kc8 Bb7+ 53. Kb8 Ba6+ 54. Bxb2+ Kxb2 55. a8=Q Bb5 {=}) 47. .. Ba8 48. Kh5 Bb7 49. Kxg4 Ba8 50. Kh5 Bb7 51. Kg6 Ba8 52. Kf6 Bb7 53. Kf7 Ba8 54. Ke8 Bb7 55. Kd7 Ba8 56. Kc8 {Zugzwang} Bb7+ 57. Kb8 Ba6+ 58. Bxb2+ Kxb2 59. a8=Q {+-}';
            currpgn[1] = '[Event "'+allstudystips[20][1]+'"][Site "Probleemblad"][Date "03.2018"][Round "'+allstudynames[20][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[20]+' 1. Ne1+ (1. Bxb2 {??} Ne4+ 2. Kg1 Nf3+ 3. Kh1 Nf2{#}) 1. .. Kc3 (1. .. Ke4 2. Bxb2 Bd7 3. a6 Nb5 4. Nxh6 {+-}) 2. Ng3 (2. a6 {?} Ne4+ 3. Ke3 Nb5 4. Kxe4 Kd2 {-+}) 2. .. Bd7 3. a6 Bc8 4. a7 Bb7 5. Kg2 (5. g5 {?} hxg5 6. Kg2 g4 {=}) 5. .. Ba8 6. Kh3 (6. g5 {minor dual}) (6. e6 {minor dual}) (6. Kh2 {or any other dark square where Black can check with a knight is losing -+}) 6. .. Bb7 7. g5 (7. e6 {minor dual}) 7. .. hxg5 8. Kg4 Ba8 (8. .. Bc8+ 9. e6 {+-}) 9. Kh5 (9. e6 {?} f5+ {-+}) (9. Kxg5 N2f3+ {-+}) 9. .. Bb7 10. e6 fxe6 11. Kg6 Ba8 12. Kf6 {triangulation over f6} (12. Kh7 {minor dual}) 12. .. Bb7 13. Kf7 Ba8 14. Ke8 Bb7 15. Kd7 Ba8 16. Kc8 {Zugzwang}  e5 (16. .. Bb7+ 17. Kb8 {+-}) 17. Kd7 Bb7 18. Ke8 Ba8 19. Kf7 Bb7 20. Kf6 Ba8 21. Kg6 Bb7 22. Kf7 Ba8 23. Ke8 Bb7 24. Kd7 Ba8 25. Kc8 {Zugzwang} e4 (25. .. Bb7+ 26. Kb8 {+-}) 26. Kd7 Bb7 27. Ke8 Ba8 28. Kf7 Bb7 29. Kf6 Ba8 30. Kg6 Bb7 31. Kf7 Ba8 32. Ke8 Bb7 33. Kd7 Ba8 34. Kc8 {Zugzwang} e3 (34. .. Bb7+ 35. Kb8 {+-}) 35. Kd7 Bb7 36. Ke8 Ba8 37. Kf7 Bb7 38. Kf6 Ba8 39. Kg6 Bb7 40. Kf7 Ba8 41. Ke8 Bb7 42. Kd7 Ba8 43. Kc8 {Zugzwang} g4 (43. .. Bb7+ 44. Kb8 {+-}) 44. Kd7 Bb7 45. Ke8 Ba8 46. Kf7 Bb7 47. Kg6 {the g pawn must be eliminating before the final zugzwang, but it could not be eliminated before because it stood on a dark square that was indirectly guarded by ...Nf3+} (47. Kf6 {?} Ba8 48. Kg6 Bb7 49. Kf7 Ba8 50. Ke8 Bb7 51. Kd7 Ba8 52. Kc8 Bb7+ 53. Kb8 Ba6+ 54. Bxb2+ Kxb2 55. a8=Q Bb5 {=}) 47. .. Ba8 48. Kh5 Bb7 49. Kxg4 Ba8 50. Kh5 Bb7 51. Kg6 Ba8 52. Kf6 Bb7 53. Kf7 Ba8 54. Ke8 Bb7 55. Kd7 Ba8 56. Kc8 {Zugzwang} Bb7+ 57. Kb8 Ba6+ 58. Bxb2+ Kxb2 59. a8=Q {+-}';
            currpgn[2] = '[Event "'+allstudystips[20][2]+'"][Site "Probleemblad"][Date "03.2018"][Round "'+allstudynames[20][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[20]+' 1. Ne1+ (1. Bxb2 {??} Ne4+ 2. Kg1 Nf3+ 3. Kh1 Nf2{#}) 1. .. Kc3 (1. .. Ke4 2. Bxb2 Bd7 3. a6 Nb5 4. Nxh6 {+-}) 2. Ng3 (2. a6 {?} Ne4+ 3. Ke3 Nb5 4. Kxe4 Kd2 {-+}) 2. .. Bd7 3. a6 Bc8 4. a7 Bb7 5. Kg2 (5. g5 {?} hxg5 6. Kg2 g4 {=}) 5. .. Ba8 6. Kh3 (6. g5 {minor dual}) (6. e6 {minor dual}) (6. Kh2 {oder jeder andere dunkle Feld, wo Schwarz ein Springer-schachgebot geben kann, ist verloren -+}) 6. .. Bb7 7. g5 (7. e6 {minor dual}) 7. .. hxg5 8. Kg4 Ba8 (8. .. Bc8+ 9. e6 {+-}) 9. Kh5 (9. e6 {?} f5+ {-+}) (9. Kxg5 N2f3+ {-+}) 9. .. Bb7 10. e6 fxe6 11. Kg6 Ba8 12. Kf6 {Triangulation &uuml;ber f6} (12. Kh7 {minor dual}) 12. .. Bb7 13. Kf7 Ba8 14. Ke8 Bb7 15. Kd7 Ba8 16. Kc8 {Zugzwang}  e5 (16. .. Bb7+ 17. Kb8 {+-}) 17. Kd7 Bb7 18. Ke8 Ba8 19. Kf7 Bb7 20. Kf6 Ba8 21. Kg6 Bb7 22. Kf7 Ba8 23. Ke8 Bb7 24. Kd7 Ba8 25. Kc8 {Zugzwang} e4 (25. .. Bb7+ 26. Kb8 {+-}) 26. Kd7 Bb7 27. Ke8 Ba8 28. Kf7 Bb7 29. Kf6 Ba8 30. Kg6 Bb7 31. Kf7 Ba8 32. Ke8 Bb7 33. Kd7 Ba8 34. Kc8 {Zugzwang} e3 (34. .. Bb7+ 35. Kb8 {+-}) 35. Kd7 Bb7 36. Ke8 Ba8 37. Kf7 Bb7 38. Kf6 Ba8 39. Kg6 Bb7 40. Kf7 Ba8 41. Ke8 Bb7 42. Kd7 Ba8 43. Kc8 {Zugzwang} g4 (43. .. Bb7+ 44. Kb8 {+-}) 44. Kd7 Bb7 45. Ke8 Ba8 46. Kf7 Bb7 47. Kg6 {der g-Bauer muss vor dem letzten Zugzwang geschlagen werden, da er nicht mehr indirekt von ...Nf3+ bewacht ist} (47. Kf6 {?} Ba8 48. Kg6 Bb7 49. Kf7 Ba8 50. Ke8 Bb7 51. Kd7 Ba8 52. Kc8 Bb7+ 53. Kb8 Ba6+ 54. Bxb2+ Kxb2 55. a8=Q Bb5 {=}) 47. .. Ba8 48. Kh5 Bb7 49. Kxg4 Ba8 50. Kh5 Bb7 51. Kg6 Ba8 52. Kf6 Bb7 53. Kf7 Ba8 54. Ke8 Bb7 55. Kd7 Ba8 56. Kc8 {Zugzwang} Bb7+ 57. Kb8 Ba6+ 58. Bxb2+ Kxb2 59. a8=Q {+-}';
            currchessinfo[0] = '\
                        A c&#xE2;&#x15F;tigat o men&#x21B;iune &#xEE;n turneul revistei <a href="javascript:void(0);" onClick="openChessObject(202);">Probleemblad</a> [2017-2018]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(201);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(202);">Probleemblad</a> [2018]\
                        ';
            currchessinfo[1] = '\
                        Awarded an honorable mention in the <a href="javascript:void(0);" onClick="openChessObject(202);">Probleemblad</a> Informal Tourney [2017-2018]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(201);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(202);">Probleemblad</a> [2018]\
                        ';
            currchessinfo[2] = '\
                        Erw&auml;hnung in <a href="javascript:void(0);" onClick="openChessObject(202);">Probleemblad</a> Informal Tourney gewonnen [2017-2018]\
                        <br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(201);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(202);">Probleemblad</a> [2018]\
                        ';
            break;
        
        case  21: 
            currchessfen = allstudyfens[21];
            coauthor = '';
            currpgn[0] = '[Event "'+allstudystips[21][0]+'"][Site "Glarean"][Date "01.2019"][Round "'+allstudynames[21][0]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[21]+' 1. Na5 (1. b4 {sau alte mut&#x103;ri} Bf5 2. Na5 Be4 {cu control asupra b7; dac&#x103; fort&#x103;rea&#x163;a Nd8 nu este creat&#x103;, Nb6 nu se poate da la o parte din drumul poinului}) 1... Bf5 (1... Be2 2. Nb7 Bxb5 3. Nd8 Kh7 (3... Qf8 4. b3 Ba6 (4... Qh6 5. gxh6 Kh7 6. Na4 {+-}) 5. Na4 {+-}) 4. b3 {apoi ca &#xEE;n varianta principal&#x103;}) (1... Bd1 2. Nb7 Be2 3. Nd8 Bxb5 4. b3 {+-}) 2. Nb7 (2. b4 {?} Be4 {cu control asupra b7}) 2... Bd3 (2... Bc2 3. Nd8 Bb3 {incercand sa domine Nb6} 4. Nc8 {+-}) 3. Nd8 Bxb5 (3... Bf1 4. b3 {+-}) 4. b3 (4. b4 {?} Kh7 5. Nc8 Kg8 6. Na7 Ba6 7. b5 Bb7 8. b6 Ba6 9. Nb5 Bxb5 10. b7 {Albul promoveaz&#x103;, dar nu poate c&#xE2;&#x15F;tiga&#8230;}) 4... Bd3 (4... Kh7 5. Na4 {+-} (5. Nc4 {?} Bxc4 6. bxc4 {=})) (4... Qf8 5. Na4 Qh6 6. gxh6 g5 7. Bb6 Ng6 8. h7+ Kxh7 9. Nxf7 {+-}) 5. Na4 Bc2 6. Nc5 Bd1 7. b4 Be2 8. Nb3 Kh7 9. Nd4 Bc4 10. b5 Kg8 11. b6 Bd5 12. Ne2 Kh7 13. Nc1 Kg8 (13... Be4 14. Nb3 Bd5 15. Nc5 {apoi ca &#xEE;n varianta principal&#x103;}) 14. Nd3 Kh7 15. Nc5 Kg8 16. b7 Bxb7 17. Ncxb7 {&#x15F;i acum eliberarea regelui} Kh7 18. Nc5 (18. Bb6 Kg8 19. Bg1 {c&#xE2;&#x15F;tig&#x103; de asemenea}) 18... Qf8 19. Nd3 Kg8 20. Ne1 Qe8 21. Nf3 Kh7 22. Nxh2 gxh2 23. Kxh2 Qf8 24. Kg3 Qg8 25. Kf3 Qe8 26. Ke4 Qg8 27. Kd4 Qf8 28. Kc5 Kg8 29. Kb6 Kh7 30. Kb7 Qe8 31. Bb6 (31. Kc8 {c&#xE2;&#x15F;tig&#x103; de asemenea} Kg8 32. Bb8 Kh7 33. Kc7 Kg8 34. Nb7 Kh7 35. Nc5 {urmat de Nxd7}) 31... Kg8 32. Nc6 Kh7 33. Nb8 Kg8 34. Kc7 Kh7 35. Nxd7 {+-}';
            currpgn[1] = '[Event "'+allstudystips[21][1]+'"][Site "Glarean"][Date "01.2019"][Round "'+allstudynames[21][1]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[21]+' 1. Na5 (1. b4 {or other moves} Bf5 2. Na5 Be4 {controlling b7; if the Nd8 fortress is not be completed, Nb6 cannot move out of the way of the pawn}) 1... Bf5 (1... Be2 2. Nb7 Bxb5 3. Nd8 Kh7 (3... Qf8 4. b3 Ba6 (4... Qh6 5. gxh6 Kh7 6. Na4 {+-}) 5. Na4 {+-}) 4. b3 {and continuing as in the mainline}) (1... Bd1 2. Nb7 Be2 3. Nd8 Bxb5 4. b3 {+-}) 2. Nb7 (2. b4 {?} Be4 {controlling b7}) 2... Bd3 (2... Bc2 3. Nd8 Bb3 {attempting to dominate the Nb6} 4. Nc8 {+-}) 3. Nd8 Bxb5 (3... Bf1 4. b3 {+-}) 4. b3 (4. b4 {?} Kh7 5. Nc8 Kg8 6. Na7 Ba6 7. b5 Bb7 8. b6 Ba6 9. Nb5 Bxb5 10. b7 {White promotes, but cannot win&#8230;}) 4... Bd3 (4... Kh7 5. Na4 {+-} (5. Nc4 {?} Bxc4 6. bxc4 {=})) (4... Qf8 5. Na4 Qh6 6. gxh6 g5 7. Bb6 Ng6 8. h7+ Kxh7 9. Nxf7 {+-}) 5. Na4 Bc2 6. Nc5 Bd1 7. b4 Be2 8. Nb3 Kh7 9. Nd4 Bc4 10. b5 Kg8 11. b6 Bd5 12. Ne2 Kh7 13. Nc1 Kg8 (13... Be4 14. Nb3 Bd5 15. Nc5 {and continuing as in the mainline}) 14. Nd3 Kh7 15. Nc5 Kg8 16. b7 Bxb7 17. Ncxb7 {and now the freeing of the king} Kh7 18. Nc5 (18. Bb6 Kg8 19. Bg1 {also wins}) 18... Qf8 19. Nd3 Kg8 20. Ne1 Qe8 21. Nf3 Kh7 22. Nxh2 gxh2 23. Kxh2 Qf8 24. Kg3 Qg8 25. Kf3 Qe8 26. Ke4 Qg8 27. Kd4 Qf8 28. Kc5 Kg8 29. Kb6 Kh7 30. Kb7 Qe8 31. Bb6 (31. Kc8 {also wins} Kg8 32. Bb8 Kh7 33. Kc7 Kg8 34. Nb7 Kh7 35. Nc5 {followed by Nxd7}) 31... Kg8 32. Nc6 Kh7 33. Nb8 Kg8 34. Kc7 Kh7 35. Nxd7 {+-}';
            currpgn[2] = '[Event "'+allstudystips[21][2]+'"][Site "Glarean"][Date "01.2019"][Round "'+allstudynames[21][2]+'"][White "Mihai Neghina"][Black "---"][Result "1-0"]'+allstudyfens[21]+' 1. Na5 (1. b4 {oder andere Z&uuml;ge} Bf5 2. Na5 Be4 {mit Kontrolle &uuml;ber b7; wenn die Nd8 Festung nicht vervollst&auml;ndigt wird, kann Nb6 dem Bauern nicht aus dem Weg gehen}) 1... Bf5 (1... Be2 2. Nb7 Bxb5 3. Nd8 Kh7 (3... Qf8 4. b3 Ba6 (4... Qh6 5. gxh6 Kh7 6. Na4 {+-}) 5. Na4 {+-}) 4. b3 {und weiter wie in die Hauptvariante}) (1... Bd1 2. Nb7 Be2 3. Nd8 Bxb5 4. b3 {+-}) 2. Nb7 (2. b4 {?} Be4 {mit Kontrolle &uuml;ber b7}) 2... Bd3 (2... Bc2 3. Nd8 Bb3 {Nb6 Dominierungversuch} 4. Nc8 {+-}) 3. Nd8 Bxb5 (3... Bf1 4. b3 {+-}) 4. b3 (4. b4 {?} Kh7 5. Nc8 Kg8 6. Na7 Ba6 7. b5 Bb7 8. b6 Ba6 9. Nb5 Bxb5 10. b7 {Wei&szlig; umwandelt, kann aber nicht gewinnen&#8230;}) 4... Bd3 (4... Kh7 5. Na4 {+-} (5. Nc4 {?} Bxc4 6. bxc4 {=})) (4... Qf8 5. Na4 Qh6 6. gxh6 g5 7. Bb6 Ng6 8. h7+ Kxh7 9. Nxf7 {+-}) 5. Na4 Bc2 6. Nc5 Bd1 7. b4 Be2 8. Nb3 Kh7 9. Nd4 Bc4 10. b5 Kg8 11. b6 Bd5 12. Ne2 Kh7 13. Nc1 Kg8 (13... Be4 14. Nb3 Bd5 15. Nc5 {und weiter wie in die Hauptvariante}) 14. Nd3 Kh7 15. Nc5 Kg8 16. b7 Bxb7 17. Ncxb7 {und nun die K&ouml;nig-Befreiung} Kh7 18. Nc5 (18. Bb6 Kg8 19. Bg1 {gewinnt auch}) 18... Qf8 19. Nd3 Kg8 20. Ne1 Qe8 21. Nf3 Kh7 22. Nxh2 gxh2 23. Kxh2 Qf8 24. Kg3 Qg8 25. Kf3 Qe8 26. Ke4 Qg8 27. Kd4 Qf8 28. Kc5 Kg8 29. Kb6 Kh7 30. Kb7 Qe8 31. Bb6 (31. Kc8 {gewinnt auch} Kg8 32. Bb8 Kh7 33. Kc7 Kg8 34. Nb7 Kh7 35. Nc5 {gefolgt von Nxd7}) 31... Kg8 32. Nc6 Kh7 33. Nb8 Kg8 34. Kc7 Kh7 35. Nxd7 {+-}';
            currchessinfo[0] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(211);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Publicat &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(212);">Glarean</a> [2019]\
						<br/><br/>\
						<a href="javascript:void(0);" onClick="openChessObject(213);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
						A c&#xE2;&#x15F;tigat premiul 1 &#xEE;n <a href="javascript:void(0);" onClick="openChessObject(214);">campionatul na&#x163;ional compozi&#x163;ie &#x15F;ahist&#x103;</a> [2020]\
                        ';
            currchessinfo[1] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(211);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Published in <a href="javascript:void(0);" onClick="openChessObject(212);">Glarean</a> [2019]\
						<br/><br/>\
						<a href="javascript:void(0);" onClick="openChessObject(213);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
						Awarded 1st prize in the <a href="javascript:void(0);" onClick="openChessObject(214);"> national chess composition championship</a> [2020]\
                        ';
            currchessinfo[2] = '\
                        <a href="javascript:void(0);" onClick="openChessObject(211);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
                        Ver&ouml;ffentlicht in <a href="javascript:void(0);" onClick="openChessObject(212);">Glarean</a> [2019]\
						<br/><br/>\
                        <a href="javascript:void(0);" onClick="openChessObject(213);"><img src="Images/C4.Chess/pdf_document.png" width="16" height="16" border="0"/></a>\
						1. Preis in die <a href="javascript:void(0);" onClick="openChessObject(214);"> nationale Schachkompositionsmeisterschaft</a> gewonnen [2020]\
                        ';
            break;
			
        default: 
            currchessfen = allstudyfens[0];
            coauthor = '';
            currpgn[0] = allstudyfens[0];
            currpgn[1] = allstudyfens[0];
            currpgn[2] = allstudyfens[0];
            currchessinfo[0] = '';
            currchessinfo[1] = '';
            currchessinfo[2] = '';
    }
}

function openChessObject(n)
{
    switch(n)
    {	case  11: window.open('Images/C4.Chess/pdf/Homemade01.pdf');	break;
        case  12: window.open('https://glarean-magazin.ch/2009/10/01/studie_glarean_martan_neghina/');	break;
        case  13: window.open('Images/C4.Chess/pdf/Homemade01_book.pdf');	break;
        case  14: window.open('http://www.schach-agentur.de/b%C3%BCcher/');	break;
        case  15: window.open('Images/C4.Chess/pdf/Homemade01_init.pdf');	break;
        case  16: window.open('http://www.matplus.net/start.php');	break;
        case  17: window.open('Images/C4.Chess/pdf/Homemade01_award.pdf');	break;
        case  18: window.open('https://www.cambridge.org/core/journals/royal-institute-of-philosophy-supplements/article/div-classtitlechess-imagination-and-perceptual-understandingdiv/9887F8AED1E3C8EFC2C4121695AB6DAD');  break;    
        case  19: window.open('Images/C4.Chess/pdf/Homemade01_paper.pdf');  break;
        case  21: window.open('Images/C4.Chess/pdf/Homemade02.pdf');	break;
        case  22: window.open('https://glarean-magazin.ch/2009/12/17/die-interessante-schachstudie_mihai-neghina_glarean-magazin/');	break;
        case  31: window.open('Images/C4.Chess/pdf/Homemade03.pdf');	break;
        case  32: window.open('https://glarean-magazin.ch/category/schach-im-glarean-magazin/');	break;
        case  51: window.open('Images/C4.Chess/pdf/Homemade05.pdf');	break;
        case  52: window.open('https://glarean-magazin.ch/2011/03/19/schach_mihai-neghina-stubborness_glarean-magazin/');	break;
        case  61: window.open('http://www.arves.org/arves/index.php/en/awards/awards-replayable/251-van-der-heijden-50-jt-2011');	break;
        case  62: window.open('Images/C4.Chess/pdf/Homemade06.pdf');	break;
        case  63: window.open('http://www.arves.org/arves/index.php/en/magazine-eg/eg-and-ebur');	break;
        case  64: window.open('Images/C4.Chess/pdf/Homemade06_paper.pdf');	break;
        case  65: window.open('https://interstices.info/les-echecs-electroniques-histoire-dune-confrontation-entre-lhumain-et-la-machine/');	break;
        case  71: window.open('Images/C4.Chess/pdf/Homemade07.pdf');	break;
        case  72: window.open('http://pam.soks.sk/pat-a-mat-107/');	break;
        case  73: window.open('http://www.yacpdb.org/#355832');	break;
        case  74: window.open('http://www.jurajlorinc.com/chess/patamat.htm');	break;
        case  81: window.open('Images/C4.Chess/pdf/Homemade08.pdf');	break;
        case  82: window.open('http://www.frsah.ro/index.php?action=listingview&listingID=608');	break;
        case 101: window.open('http://www.euroschach.de/Zeitschrift-Schach-Heft-2012-9.html');	break;
        case 121: window.open('Images/C4.Chess/pdf/Homemade12.pdf');	break;
        case 122: window.open('http://www.frsah.ro/index.php?action=listingview&listingID=608');	break;
        case 123: window.open('Images/C4.Chess/pdf/Homemade12_award.pdf');	break;
        case 131: window.open('Images/C4.Chess/pdf/Homemade13.pdf');	break;
        case 132: window.open('http://www.wfcc.ch/competitions/composing/9_wcct/');	break;
        case 141: window.open('Images/C4.Chess/pdf/Homemade14.pdf');	break;
        case 142: window.open('http://www.arves.org/arves/index.php/en/magazine-eg/eg-and-ebur');	break;
        case 151: window.open('Images/C4.Chess/pdf/Homemade15.pdf');	break;
        case 152: window.open('https://glarean-magazin.ch/2015/10/17/schach-chess-studie-study-mihai-neghina-urdruck-problemschach-glarean-magazin/');	break;    
        case 160: window.open('Images/C4.Chess/pdf/Homemade16_tough.pdf');	break;
        case 161: window.open('Images/C4.Chess/pdf/Homemade16.pdf');	break;
        case 162: window.open('https://www.dieschwalbe.de/dieschwalbe.htm');	break;
        case 163: window.open('Images/C4.Chess/pdf/Homemade16_award.pdf');	break;
        case 171: window.open('Images/C4.Chess/pdf/Homemade17_award.pdf');	break;
        case 172: window.open('http://www.arves.org/arves/index.php/en/awards/awards-replayable/1235-peter-krug-50-jt-2017');	break;
        case 181: window.open('Images/C4.Chess/pdf/Homemade18.pdf');	break;
        case 182: window.open('http://www.strategems.net/');	break;
        case 183: window.open('Images/C4.Chess/pdf/Homemade18_award.pdf');	break;
        case 191: window.open('Images/C4.Chess/pdf/Homemade19.pdf');	break;
        case 192: window.open('http://www.probleemblad.nl/');	break;
        case 201: window.open('Images/C4.Chess/pdf/Homemade20.pdf');	break;
        case 202: window.open('http://www.probleemblad.nl/');	break;
        case 211: window.open('Images/C4.Chess/pdf/Homemade21.pdf');	break;
        case 212: window.open('https://glarean-magazin.ch/2019/01/19/mihai-neghina-urdruck-the-confusion-schach-studie-problemschach/');	break;
		case 213: window.open('Images/C4.Chess/pdf/Homemade21_award.pdf');	break;
        case 214: window.open('http://frsah.ro/index.php/2020/05/20/cn-compozitie-sahista-primele-rezultate/');	break;
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
                    <img src=\"Images/C0.Common/Helpertools/TinyBox/BigXGray.png\" alt=\"X\" \
                    width=\"24\" height=\"24\" border=\"0\" align=\"right\" /> </a> ";
    
    finalcontents = popupcontents.concat( editedcurrlangpgn );          
    
    TINY.box.show(finalcontents,0,0,0,1);
}


function showChessPositionOnHover(n)
{	
    var name, stip, container, v;
    
    //setcurrchessvars(n);
    
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
                            pgnString: allstudyfens[n],
                            pieceSet: 'merida', pieceSize: 35 });
        container = document.getElementById("position-navButtons");
        container.parentNode.removeChild(container);
    }
    
}



