/* This script and many more are available free online at
The JavaScript Source!! http://javascript.internet.com
Created by: Eni Generalic | http://www.periodni.com/ */

// Scientific Calculator written by Eni Generalic - http://www.periodni.com/
// Copyright © 2008 by EniG. If you use a variant of this in your page, please email me at eni.generalic@gmail.com
// Eni Generalic, Split, Create: 1999/10/14; Update: 2008/03/01
// Atomic Weights of the Elements 2005, Pure & Appl. Chem., Vol. 78, No. 11, (2006) 2051-2066).

var EniG = "";
var que = "";
var ans = 0;
var mem = 0;

var broj = "0";
var tocka = 0;
var eksp = 0;
var baza = "";
var eksponent = 3;
var rjesenje = 0;
var decimala = 14;
var asf = 0;
var rdg = 0;
var sep1000 = 0;
var enter = "";
var mr = "";
var pi = 3.141592653589793;
var e = 2.71828182845905;
var abc = "";

//window.onerror = handleError;

function start(){
	enter = "\r\n";
	mr = document.racunalo.memorija.value;
	document.racunalo.notes.value =  enter + EniG + enter;
	var dan = new Date();
	document.racunalo.notes.value += "    " + dan.toLocaleString() + enter + enter;
	document.racunalo.zadatak.focus();
}

function handleError() {
	//alert("YOU HAVE ENCOUNTERED A JAVASCRIPT ERROR");
	document.racunalo.notes.value += " = Syntax Error\r\n";
	document.racunalo.rezultat.value = "Syntax Error";
 	document.racunalo.zadatak.focus();
	return true;
}

function memory(operator) {

	switch(operator) {
	case 1:		// MS 
		memorija = document.racunalo.rezultat.value;
		memorija = memorija.replace(/ /g,'');
		document.racunalo.memorija.value = memorija;
		document.racunalo.MR.title = mr + " (" + memorija + ")";
		mem = parseFloat(memorija);
		stanje = (document.getElementById('nummem').style.color == '#000') ? '#ccc' : '#000';
		document.getElementById('nummem').style.color = stanje;
		break;    
	case 2:	// MR
		var memorija = document.racunalo.memorija.value;
		if (memorija==0 || slovo(memorija.charAt(0))) {memorija = ""}
		document.racunalo.zadatak.value += memorija;	
		break; 
	case 3:	// CLS
		if (document.racunalo.zadatak.value == "") {document.racunalo.rezultat.value = "";}
		else {document.racunalo.zadatak.value = "";	}	
		break; 
	case 4:	// Mode
		vidi('numformat');
		break; 
	case 5:	// Reset
		document.racunalo.notes.value = enter + EniG + enter;
		document.racunalo.memorija.value = "";
		document.racunalo.MR.title = mr;
		decimala = 14;
		asf = 0;
		rdg = 0;
		sep1000 = 0;
		mem = 0;
		ans = 0;
		document.getElementById('numauto').style.color = '#000';
		document.getElementById('numsci').style.color = '#ccc';
		document.getElementById('numfix').style.color = '#ccc';
		document.getElementById('nummem').style.color = '#ccc';
		document.getElementById('numrad').style.color = '#000';
		document.getElementById('numdeg').style.color = '#ccc';
		document.getElementById('numgrad').style.color = '#ccc';	
		break; 
	}

	document.racunalo.zadatak.focus();
}

function dodajBroj(noviznak) {
	document.racunalo.zadatak.focus();
	document.racunalo.zadatak.value += noviznak
}


function dodajConst(noviznak) {
	document.racunalo.zadatak.focus();
	document.racunalo.zadatak.value += noviznak;
	
	vidi('konstante')
}


function izracunaj(zarez) {
	var pitanje = "";
	var odgovor = "";
	var mem = 0;
	//onerror = handleError;
	
	if (zarez >= 1) {
		if (document.racunalo.zadatak.value == "") {
			broj = document.racunalo.rezultat.value;
		}
		else {
	    	broj = document.racunalo.zadatak.value;
			if (ubacirezultat(broj.charAt(0))) {
				broj = document.racunalo.rezultat.value + broj;
			}
		}
	}

	for (var i=0; i<broj.length; i++) {
		var mm = broj.charAt(i);
		var mmup = broj.charAt(i+1);
		var mmdn = broj.charAt(i-1);

		if (mm == ",") {mm = ".";}
		else if (mm == "}" || mm == "]") {mm = ")";}
		else if (mm == "{" || mm == "[") {mm = "(";}
		else if (mm == " " || mm == "=") {mm = "";}
		else if (mm == "*" && mmup == "*") {mm = "^"; i += 1;}
		else if (mm == "+" && mmup == "-") {mm = "-"; i += 1;}
		else if (mm == "E" && kemilimat(mmup)) {mm = "e";}
	
		if (mm == "." && BrojAtoma(mmdn)==false) {mm = "0.";}
		else if (velikoslovo(mm)) {var kem = 1;}

		if (pitanje == "0") {
			if (operator(mm)) {}
			else if (mm != ".") {pitanje = "";}
		}
		//if (i == 0) {
		//	if (mm == "0" && mmup == "0") {mm = "";}
		//}

		pitanje += mm;
	}

	if (zarez == 1) {
		document.racunalo.notes.value += pitanje;
		document.racunalo.upit.value = pitanje;
		if (kem == 1) {
			//var atom = "+" + pitanje;
			odgovor = masa(pitanje);
		}
		else {
			odgovor = zagrada(pitanje);
		}
	}
	else {
		odgovor = matematika(zarez, pitanje)
	}
	
	odgovor = odgovor.toString();
	document.racunalo.oldrezultat.value = odgovor;
	ans = parseFloat(odgovor);
	
	izgledbroja(odgovor);

	document.racunalo.zadatak.value = "";
 	document.racunalo.zadatak.focus();
}


function matematika(zarez, rjesenje) {
var pitanje = "";
 with (Math) {
	if (zarez == 2) {
		pitanje = rjesenje + "^2";
		rjesenje = pow(rjesenje, 2)
	}
	else if (zarez == 3) {
		pitanje = rjesenje + "^(1/2)";
		rjesenje = sqrt(rjesenje)
	}
	else if (zarez == 4) {
		pitanje = rjesenje + "*(-1)";
		rjesenje = -rjesenje
	}
	else if (zarez == 5) {
		pitanje = "ln(" + rjesenje + ")";
		rjesenje = log(rjesenje)
	}
	else if (zarez == 6) {
		pitanje = "e^" + rjesenje;
		rjesenje = pow(E, rjesenje)
	}
	else if (zarez == 7) {
		pitanje = "1/" + rjesenje;
		rjesenje = 1/rjesenje
	}
	else if (zarez == 8) {
		pitanje = "log(" + rjesenje + ")";
		rjesenje = log(rjesenje)/LN10
	}
	else if (zarez == 9) {
		pitanje = "10^" + rjesenje;
		rjesenje = pow(10, rjesenje)
	}
	else if (zarez >= 10 && zarez <= 12) {
		if (zarez == 10) {
			pitanje = "atan(" + rjesenje + ")";
			rjesenje = atan(rjesenje)
		}
		else if (zarez == 11) {
			pitanje = "acos(" + rjesenje + ")";
			rjesenje = acos(rjesenje)
		}
		else if (zarez == 12) {
			pitanje = "asin(" + rjesenje + ")";
			rjesenje = asin(rjesenje)
		}

		if (document.racunalo.stupnjevi[1].checked) {rjesenje = (rjesenje * 180) / PI}
		else if (document.racunalo.stupnjevi[2].checked) {rjesenje = (rjesenje * 200) / PI}
	}
	else if (zarez >= 14 && zarez <= 16) {
		if (document.racunalo.stupnjevi[1].checked)
			{radijani = (rjesenje / 180) * PI}
		else if (document.racunalo.stupnjevi[2].checked)
			{radijani = (rjesenje / 200) * PI}
		else
			{radijani = rjesenje}

		if (zarez == 14) {
			pitanje = "tan(" + rjesenje + ")";
			rjesenje = tan(radijani)
		}
		else if (zarez == 15) {
			pitanje = "cos(" + rjesenje + ")";
			rjesenje = cos(radijani)
		}
		else if (zarez == 16) {
			pitanje = "sin(" + rjesenje + ")";
			rjesenje = sin(radijani)
		}
	}
	else if (zarez == 17) {
		pitanje = rjesenje + "%";
		rjesenje = rjesenje/100
	}
	else if (zarez == 18) {
		pitanje = rjesenje + "ppm";
		rjesenje = rjesenje/1000000
	}
	else if (zarez == 20) {
		pitanje = rjesenje + "!";
		rjesenje = factorial(rjesenje)
	}
	else if (zarez == 21) {
		eksponent = prompt("Unesite eksponent / Please enter exponent", 3);
		pitanje = rjesenje + "^" + eksponent;
		rjesenje = pow(rjesenje, eksponent)
	}
	else if (zarez == 22) {
		eksponent = prompt("Unesite korijen / Please enter root", 3);
		document.racunalo.notes.value += rjesenje + "^(1/" + eksponent + ")";
		rjesenje = pow(rjesenje, (1/eksponent))
	}
 }
	document.racunalo.notes.value += pitanje;
	document.racunalo.upit.value = pitanje;
	return rjesenje;
}

function zagrada(xbroj) {
    var intZagClose = 0
    var intZagOpen = 0
	var intXbroj = 0
	var strNoviXbroj = ""
	var strNoviZbroj = "";

	do {
//document.racunalo.notes.value += enter + "intXbroj = " + intXbroj;			2+(2*(2+4)+3)^3+5
		xbroj = xbroj.replace(/--/g,"-1*-");
		intZagClose = xbroj.indexOf(")");
		if (intZagClose != -1) {
			for (var i = intZagClose; i >= 0; i--) {
				if (xbroj.charAt(i)=="(") {
					intZagOpen = i;
					strNoviZbroj = xbroj.substring(intZagOpen+1,intZagClose);
					break;
				}
			}
		}
		else {
			strNoviZbroj = xbroj;
		}

		strNoviZbroj = strNoviZbroj + "*1";
		strNoviZbroj = postotak(strNoviZbroj);
		strNoviZbroj = trigonometrija(strNoviZbroj);
		strNoviZbroj = logaritam(strNoviZbroj);
		strNoviZbroj = potencija(strNoviZbroj);
		strNoviZbroj = racun(strNoviZbroj);

		if (intZagClose != -1) {
			xbroj = xbroj.replace(xbroj.substring(intZagOpen, intZagClose+1), strNoviZbroj);
		}
		else {
			xbroj = strNoviZbroj;
		}	
	}
	while (intZagClose > 0)
	
	return xbroj;
}


function racun(zbroj) {
	with (Math) {zbroj = eval(zbroj);}
	return zbroj;
}


function potencija(ulaz) {
    var intZagClose = 0
    var intZagOpen = 0;

	var intXbroj = ulaz.indexOf("^");  //2+2^3+2,15^2+4
	
	while (intXbroj > 0) {
		for (var i = intXbroj - 1; i >= 0; i--) {
			if (operator(ulaz.charAt(i)) && ulaz.charAt(i-1)!="e") {
				//if (i > 0 && operator(ulaz.charAt(i-1))) {
				intZagOpen = i+1;
				break;
			}
		}
		
		if (ulaz.charAt(i) == "-"){
			if (i == 0) {intZagOpen = 0;}
			else if (i > 0 && operator(ulaz.charAt(i-1))) {intZagOpen = i;}
		}
		
		var strNoviXbroj = ulaz.substring(intZagOpen,intXbroj);
		
		for (var i = intXbroj + 2; i < ulaz.length; i++) {
			if (operator(ulaz.charAt(i)) && ulaz.charAt(i-1)!="e") {intZagClose = i-1; break}
		}
		var strNoviYbroj = ulaz.substring(intXbroj+1,intZagClose+1);
 if (strNoviXbroj == 'e') {strNoviXbroj = e}; //cps	
		with (Math) {
			intXbroj = pow(strNoviXbroj, strNoviYbroj);
		}
		//if (i != 0 && ulaz.charAt(i-1)) {}  // za negativne brojeve -3^2 = -9 ili 9
		
		ulaz = ulaz.replace(ulaz.substring(intZagOpen, intZagClose+1), intXbroj);

		intXbroj = ulaz.indexOf("^");
	}

	return ulaz;
}


function postotak(ulaz) {
    var intZagClose = 0;
    var intZagOpen = 0;

	var strDesnoFun = new Array ("!", "%");

	for (var f = 0; f < 2; f++) {
		var intXbroj = ulaz.indexOf(strDesnoFun[f]);
		
		while (intXbroj > 0) {
			for (var i = intXbroj - 1; i >= 0; i--) {
				if (operator(ulaz.charAt(i)) && ulaz.charAt(i-1)!="e") {intZagOpen = i+1; break}
			}
			var strNoviXbroj = ulaz.substring(intZagOpen,intXbroj);
			intZagClose = intXbroj+1;
			with (Math) {
				if (f == 0) {
					intXbroj = factorial(strNoviXbroj);
				}
				else {
					intXbroj = strNoviXbroj/100;
				}
			}
			ulaz = ulaz.replace(ulaz.substring(intZagOpen, intZagClose), intXbroj);
			intXbroj = ulaz.indexOf(strDesnoFun[f]);
		}
	}

	return ulaz;
}


function trigonometrija(kut) {
    var intZagClose = 0
	var intKut = 0
	var strNoviKut = ""
	var strKrozPi = ")"
	var strPiKroz = ")";
	
	switch(rdg) {
	case 1:
		strKrozPi = ")*180/pi";
		strPiKroz = "*pi/180)";
		break;    
	case 2:
		strKrozPi = ")*200/pi";
		strPiKroz = "*pi/200)";
		break;
	default:
		strKrozPi = ")";
		strPiKroz = ")";
	}

	var strTrigFun = new Array ("sin", "cos", "tan");

	for (var f = 0; f < 3; f++) {
		intKut = kut.indexOf(strTrigFun[f]);

		if (intKut >= 0) {
			do {
//document.racunalo.notes.value += enter + intKut + enter;			cos(2*(3+5)+3*(2+4))+1                        2+(2*(2+cos(4))+3)+(3^3+5)*4
				intZagClose = kut.length;
				for (var i = intKut+4; i < intZagClose; i++) {

					if (operator(kut.charAt(i)) && kut.charAt(i-1)!="e") {
						intZagClose = i;
						strNoviKut = kut.substring(intKut+3, intZagClose);
						break;
					}
				}

				if (intKut>0 && kut.charAt(intKut-1)=="a") {
					intKut = intKut - 1;
					strNoviKut = "a" + strTrigFun[f] + "(" + strNoviKut + strKrozPi;
				}
				else {
					strNoviKut = strTrigFun[f] + "(" + strNoviKut + strPiKroz;
				}

				strNoviKut = racun(strNoviKut);
				strNoviKut = Math.round(strNoviKut * Math.pow(10,14)) / Math.pow(10,14);
				
				kut = kut.replace(kut.substring(intKut, intZagClose), strNoviKut);
				
				intKut = kut.indexOf(strTrigFun[f]);

			}
			while (intKut != -1);
		}
	}

	return kut;
}


function logaritam(kut) {
    var intZagClose = 0
	var intKut = 0
	var strNoviKut = ""
	var strKrozPi = ")"
	var strPiKroz = ")";
// var e = 2.71828182845905	

	var strLogFun = new Array ("ln", "log");

	for (var f = 0; f < 2; f++) {
		intKut = kut.indexOf(strLogFun[f]);

		if (intKut >= 0) {
			do {
				intZagClose = kut.length;
				for (var i = intKut; i < intZagClose; i++) {

					if (operator(kut.charAt(i)) && kut.charAt(i-1)!="e") {
						intZagClose = i;
						strNoviKut = kut.substring(intKut+strLogFun[f].length, intZagClose);
						break;
					}
				}

				if (f == 0) {
					if (intKut>0 && kut.charAt(intKut-1)=="a") {
						intKut = intKut - 1;
						strNoviKut = "pow(E," + strNoviKut + ")";
					}
					else {
						strNoviKut = "log(" + strNoviKut + ")";
					}
				}
				else {
					if (intKut>0 && kut.charAt(intKut-1)=="a") {
						intKut = intKut - 1;
						strNoviKut = "pow(10," + strNoviKut + ")";
					}
					else {
						strNoviKut = "log(" + strNoviKut + ")/LN10";
					}
				}

				strNoviKut = racun(strNoviKut);

				kut = kut.replace(kut.substring(intKut, intZagClose), strNoviKut);
				intKut = kut.indexOf(strLogFun[f]);

			}
			while (intKut != -1);
		}
	}

	return kut;
}


function izazareza(novibroj) {
 with (Math) {

	if (eksp == -1) {
		var duzina = tocka;
		if (duzina == -1) {duzina = novibroj.length}
		var desni = "";

		if (duzina > 16) {
			var privremeni = round(novibroj*pow(10, 16)) + " ";
			var novie = privremeni.indexOf("e");
			var lijevi = (privremeni.substring(0,novie));

			lijevi = round(lijevi*pow(10, 15))/pow(10, 15) + " ";
			desni = (privremeni.substring(novie+2,privremeni.length-1));
			desni = "e+" + (desni-18);
		}
		else {
			var lijevi = round(novibroj*pow(10, decimala))/pow(10, decimala) + " ";
		}
	}
	else {
		var lijevi = novibroj.substring(0,eksp);
		var desni = novibroj.substring(eksp,novibroj.length);

		lijevi = round(lijevi*pow(10, decimala))/pow(10, decimala) + " ";
	}

	lijevi = lijevi.substring(0,lijevi.length - 1);

	if (lijevi.charAt(0) == ".") {lijevi = "0" + lijevi;}

	if (decimala < 14) {
		if (lijevi.indexOf(".") == -1 && decimala != 0) {lijevi += "."}
		var nula = (tocka + decimala) - (lijevi.length - 1);
		if (nula > 0 && decimala > 0) {
			for (var n = 0; n < nula; n++) {
				lijevi += "0";
			}
		}
	}

	return (lijevi + desni);
 }
}


function factorial(n) {
	if ((n == 0) || (n == 1)) {
		return 1;
	}
	else {
		var odgovor = (n * factorial(n-1));
		return odgovor;
	}
}


function masa(atom) {
 with (Math) {
 	var atominfo = false;
	var mm="";
	var mmdn="";
	var mmup="";
	var znak="";
	var izraz="";
	var Pi=pi;
	var H=1.0079;
	var He=4.0026;
	var Li=6.941;
	var Be=9.0122;
	var B=10.811;
	var C=12.011;
	var N=14.007;
	var O=15.999;
	var F=18.998;
	var Ne=20.18;
	var Na=22.99;
	var Mg=24.305;
	var Al=26.982;
	var Si=28.086;
	var P=30.974;
	var S=32.065;
	var Cl=35.453;
	var Ar=39.948;
	var K=39.098;
	var Ca=40.078;
	var Sc=44.956;
	var Ti=47.867;
	var V=50.942;
	var Cr=51.996;
	var Mn=54.938;
	var Fe=55.845;
	var Co=58.933;
	var Ni=58.693;
	var Cu=63.546;
	var Zn=65.409;
	var Ga=69.723;
	var Ge=72.64;
	var As=74.922;
	var Se=78.96;
	var Br=79.904;
	var Kr=83.798;
	var Rb=85.468;
	var Sr=87.62;
	var Y=88.906;
	var Zr=91.224;
	var Nb=92.906;
	var Mo=95.94;
	var Tc=98;
	var Ru=101.07;
	var Rh=102.91;
	var Pd=106.42;
	var Ag=107.87;
	var Cd=112.41;
	var In=114.82;
	var Sn=118.71;
	var Sb=121.76;
	var Te=127.6;
	var I=126.9;
	var Xe=131.29;
	var Cs=132.91;
	var Ba=137.33;
	var La=138.91;
	var Ce=140.12;
	var Pr=140.91;
	var Nd=144.24;
	var Pm=145;
	var Sm=150.36;
	var Eu=151.96;
	var Gd=157.25;
	var Tb=158.93;
	var Dy=162.5;
	var Ho=164.93;
	var Er=167.26;
	var Tm=168.93;
	var Yb=173.04;
	var Lu=174.97;
	var Hf=178.49;
	var Ta=180.95;
	var W=183.84;
	var Re=186.21;
	var Os=190.23;
	var Ir=192.22;
	var Pt=195.08;
	var Au=196.97;
	var Hg=200.59;
	var Tl=204.38;
	var Pb=207.2;
	var Bi=208.98;
	var Po=209;
	var At=210;
	var Rn=222;
	var Fr=223;
	var Ra=226;
	var Ac=227;
	var Th=232.04;
	var Pa=231.04;
	var U=238.03;
	var Np=237;
	var Pu=244;
	var Am=243;
	var Cm=247;
	var Bk=247;
	var Cf=251;
	var Es=252;
	var Fm=257;
	var Md=258;
	var No=259;
	var Lr=262;
	var Rf=267;
	var Db=268;
	var Sg=271;
	var Bh=272;
	var Hs=277;
	var Mt=276;
	var Ds=281;
	var Rg=280;
	
	for (var i=0; i<atom.length; i++) {
		mm = atom.charAt(i);
		mmup = atom.charAt(i+1);
		bigup = mm.toUpperCase();
		mmdn = atom.charAt(i-1);

		if (mm == "[") {mm = "("}
		else if (mm == "]") {mm = ")"}
		else if (mm == ",") {mm = "."}

		if (slovo(mm)) {atominfo = true}
		if (matoperator(mm)) {atominfo = false; znak=""}
		if (atominfo) {
			if (matoperator(mmup)) {znak=")"}
			if (matoperator(mmdn)) {izraz += "(" + mm + znak}
			else if (mmdn=="(") {izraz += mm + znak}
			else if (mmdn=="[") {izraz += mm + znak}
			else if (slovo(mm)) {izraz += "+" + mm + znak}
			else if (BrojAtoma(mmdn)) {izraz += mm + znak}
			else if (BrojAtoma(mm)) {izraz += "*" + mm + znak}
			else {izraz += mm + znak}
		}
		else {izraz += mm}
	}
	odgovor = eval(izraz);
	return odgovor;
 }
}


function slovo(znak) {
	var slovo="(ABCDEFGHIKLMNOPRSTUVWXYZ";
	for (var i=0; i<slovo.length; i++)
		if (znak == slovo.charAt(i)) {return true} {return false}
}

function velikoslovo(znak) {
	var slovo="ABCDEFGHIKLMNOPRSTUVWXYZ";
	for (var i=0; i<slovo.length; i++)
		if (znak == slovo.charAt(i)) {return true} {return false}
}

function maloslovo(znak) {
	var slovo="abcdefghiklmnoprstuvwxyz";
	for (var i=0; i<slovo.length; i++)
		if (znak == slovo.charAt(i)) {return true} {return false}
}

function matoperator(znak) {
	var matoperator="*/+-";
	for (var i=0; i<matoperator.length; i++)
		if (znak == matoperator.charAt(i)) {return true}
		if (znak == "") {return true}
		if (znak == null) {return true}
	return false
}

function operator(znak) {
	var matoperator="^*/+-";
	if (matoperator.indexOf(znak) >= 0) {return true} {return false}
}

function ubacirezultat(znak) {
	var ubacirezultat="^*/+";
	for (var i=0; i<ubacirezultat.length; i++)
		if (znak == ubacirezultat.charAt(i)) {return true}
	return false
}

function BrojAtoma(znak) {
	var atom = "1234567890";
	for (var i=0; i<atom.length; i++)
		if (znak == atom.charAt(i)) {return true} {return false}
}

function kemilimat(znak) {
	var atom = "rsu";
	if (atom.indexOf(znak) == -1) {return true} {return false}
}


function numformat(x){
	var kut = new Array("auto", "sci", "fix");
	decimala = x;
	var broj = document.racunalo.oldrezultat.value;

	if (decimala < 13) {
		document.racunalo.notes.value += "[" + kut[asf] + decimala + "]";
	}
	else {
		decimala = 14;
		document.racunalo.notes.value += "[" + kut[asf] + "]";
	}
	
	if (broj != "0" && broj != "") {
		izgledbroja(broj)
	}
	else {
		document.racunalo.notes.value += enter;
	}
	document.racunalo.zadatak.focus();
}


function scifix(x) {
	var kut = new Array("numauto", "numsci", "numfix");

	document.getElementById(kut[asf]).style.color = '#ccc';

	asf = x;
	var broj = document.racunalo.oldrezultat.value;
	switch(x) {
	case 1:
		document.getElementById('numsci').style.color = '#000';
		if (decimala == 14) {
			document.racunalo.notes.value += "[sci]";
		}
		else {
			document.racunalo.notes.value += "[sci" + decimala + "]";
		}
		break;    
	case 2:
		document.getElementById('numfix').style.color = '#000';
		document.racunalo.izaZareza.options[2].selected = true;
		if (decimala == 14) {
			decimala = 2;
			document.racunalo.notes.value += "[fix2]";
		}
		else {
			document.racunalo.notes.value += "[fix" + decimala + "]";
		}
		break;
	default:
		document.getElementById('numauto').style.color = '#000';
		document.racunalo.izaZareza.options[14].selected = true;
		document.racunalo.notes.value += "[auto]";
		decimala = 14;
	}

	if (broj != "0" && broj != "") {izgledbroja(broj)}
	document.racunalo.zadatak.focus();
}


function raddeg(x) {
	var kut = new Array("numrad", "numdeg", "numgrad");

	document.getElementById(kut[rdg]).style.color = "#ccc";
	rdg = x;
	document.getElementById(kut[x]).style.color = "#000";
	document.racunalo.zadatak.focus();
}

function seplk() {
	var broj = document.racunalo.oldrezultat.value;
	if (document.getElementById('seplk').checked) {
		document.getElementById('seplk').checked = false;
		sep1000 = 0;
	}
	else {
		document.getElementById('seplk').checked = true;
		sep1000 = 1;
	}
	if (broj.length > 3) {izgledbroja(broj)}
}


function izgledbroja(broj) {
	var nule = "000000000000000";
	var minus = "";
	if (broj.charAt(0) == "-") {minus = "-";}

	if (asf == 2) {
		if (Math.eval(broj+"*"+minus+"1-1e-"+decimala) < 0) {broj = "0"}
	}
	
	var eplace = broj.indexOf("e");

	if (eplace > 0) {
		var x = broj.substring(0, eplace);
		var y = broj.substring(eplace);
	}
	else if (asf == 1) {
		var x = parseFloat(broj) * 1E50;
		broj = x.toString();
		eplace = broj.indexOf("e");
		x = broj.substring(0, eplace);
		var y = broj.substring(eplace+1);

		y = parseInt(y) - 50;
		y = "e" + y;
	}
	else {
		var x = broj;
		var y = "";
	}
	
	var oplace = broj.indexOf(".");
	broj = parseInt(x);
	if (oplace == -1) {x = "0";} {x = "0" + x.substring(oplace);}
	x = parseFloat(x);

	with (Math) {
		x = round(x * pow(10,decimala)) / pow(10,decimala);
		broj = abs(broj) + x;
	}

	x = broj.toString();

	oplace = x.indexOf(".");
//document.racunalo.notes.value += enter + "oplace_1 = " + oplace;
	if (oplace == 0) {
		broj = "0" + x + nule.substring(0, decimala);
	}
	else if (oplace > 0) {
		x = x.concat(nule);
		broj = x.substring(0, oplace);
		broj += x.substring(oplace, oplace+decimala+1);
	}
	else {
		broj = x + "." + nule.substring(0, decimala);
	}

	if (decimala == 14) {broj = parseFloat(broj)}
	broj = minus.concat(broj, y);

	
//PROBA   POCETAK
	if (sep1000) {
//document.racunalo.notes.value += enter + "separator_1 = " + broj;
		var rezultat = "";
		var strexp = "";

		oplace = broj.indexOf('.');
		//if (oplace == -1) {oplace = 0;}
		eplace = broj.indexOf('e');
		if (eplace == -1) {eplace = broj.length;} {strexp = broj.substring(eplace);}

		var tri = 0;
		for (var i=oplace+1; i<eplace; i++) {
			tri += 1;
			if (tri == 3) {
				rezultat += broj.charAt(i) + " ";
				tri = 0;
			}
			else {
				rezultat += broj.charAt(i);
			}
		}
		rezultat += strexp
//document.racunalo.notes.value += enter + "separator_2 = " + rezultat;			
		if (oplace > -1) {
			rezultat = "." + rezultat;
			tri = 0;
			for (var i=oplace-1; i>=0; i--) {
				if (tri == 3) {
					rezultat = broj.charAt(i) + " " + rezultat;
					tri = 0;
				}
				else {
					rezultat = broj.charAt(i) + rezultat;
				}
				tri += 1;
			}
		}
		rezultat = rezultat.replace("- ", "-");
		broj = rezultat;
//document.racunalo.notes.value += enter + "separator_3 = " + rezultat;
	}
//PROBA   KRAJ

	document.racunalo.rezultat.value = broj;
	document.racunalo.notes.value += " = " + broj + enter;
	
	return broj;
}


function zaokruzi_new(ebroj) {
// max 16 decimala
//var n=16;
var x=ebroj.toExponential(decimala);
document.racunalo.notes.value += enter + "toExponential = " + x + enter;
var x=ebroj.toPrecision(decimala);
document.racunalo.notes.value += "toPrecision = " + x + enter;
var x=ebroj.toFixed(decimala);
document.racunalo.notes.value += "toFixed = " + x + enter;

	document.racunalo.rezultat.value = x;
	document.racunalo.notes.value += " = " + x + enter;
}


function vidi(me) {
	//if (document.getElementById) {
		stanje = (document.getElementById(me).style.display == 'block') ? 'none' : 'block';
		document.getElementById(me).style.display = stanje;
		//document.getElementById(me).style.visibility = stanje
	//}
}

//Eni Generalic, Split, Create: 1999/10/14; Update: 2008/03/01
// Copyright © 2008 by EniG.



