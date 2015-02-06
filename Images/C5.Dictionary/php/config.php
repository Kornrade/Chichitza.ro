<?
$AdresaBazaDate = "localhost";
$UtilizatorBazeDate = "rchi2602";
$ParolaBazeDate = "944122602";
$NumeBazaDate = "rchi2602_dictionar";
$conexiune = mysql_connect($AdresaBazaDate, $UtilizatorBazeDate, $ParolaBazeDate)
or die("Nu ma pot conecta!");
mysql_select_db($NumeBazaDate, $conexiune)
or die("Nu ma pot conecta!");
?>