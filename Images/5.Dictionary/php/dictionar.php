<?
session_start();
?>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
<style type="text/css">
<!--
a:link {
	color: #006600;
}
a:visited {
	color: #663300;
}
a:hover {
	color: #FF9933;
}
a:active {
	color: #FF9933;
}
-->
</style></head>
<body>
<table width="609" height="416" border="0" bordercolor="#FFFFFF">
  <tr>
    <td width="385" height="30"><a href="dictionar.php?log=A">A</a> <a href="dictionar.php?log=B">B</a> <a href="dictionar.php?log=C">C</a> <a href="dictionar.php?log=D">D</a> <a href="dictionar.php?log=E">E</a> <a href="dictionar.php?log=F">F</a> <a href="dictionar.php?log=G">G</a> <a href="dictionar.php?log=H">H</a> <a href="dictionar.php?log=I">I</a> <a href="dictionar.php?log=Î">Î</a> <a href="dictionar.php?log=J">J</a> <a href="dictionar.php?log=L">L</a> <a href="dictionar.php?log=M">M</a> <a href="dictionar.php?log=N">N</a> <a href="dictionar.php?log=O">O</a> <a href="dictionar.php?log=P">P</a> <a href="dictionar.php?log=R">R</a> <a href="dictionar.php?log=S">S</a> <a href="dictionar.php?log=Ş">Ş</a> <a href="dictionar.php?log=T">T</a> <a href="dictionar.php?log=Ţ">Ţ</a> <a href="dictionar.php?log=U">U</a> <a href="dictionar.php?log=V">V</a> <a href="dictionar.php?log=W">W</a> <a href="dictionar.php?log=X">X</a> <a href="dictionar.php?log=Y">Y</a> <a href="dictionar.php?log=Z">Z</a></td>
    <td width="214"><form id="form1" name="form1" method="post" action="dictionar.php">
      <p>
        <input name="cuvant" type="text" id="cuvant" />
        <input name="cauta" type="submit" id="Submit" value="cauta" />
      </p>
    </form></td>
  </tr>
  <tr>
    <td height="358" colspan="2" valign="top">
	
	 <? 
	 // SE CAUTA DUPA PRIMA LITERA
	 // daca nu se cauta dupa cuvant si daca nu sunt in paginarea de la cautarea dupa cuvant
	 if ((!$_POST['cauta'])&&(!$_GET["page_caut"]))
	 { 
	if (((!isset($_SESSION['primaL']))||(!$_GET["log"])) &&(!$_GET["page"]))
	
  		//$_SESSION['primaL'] = $_GET["log"];
		$_SESSION['primaL'] = "A";
		else{
		$page = $_GET["page"];
		if (!$page)
			$_SESSION['primaL'] = $_GET["log"];
			}
	 $prima_lit = $_SESSION['primaL'];
     require_once('config.php');
//tabelul "dictionar" din baza de date "dictionar" contine: ID, PrimaL, Cuvant, Definitie
// le selectez doar pe cele care incep cu litera "prima_lit"
     $sql_text = "SELECT * FROM dictionar WHERE PrimaL = '{$prima_lit}' collate utf8_romanian_ci";
   
    // Numar de cuvinte pe pagina
	$per_page = 15;
     
	// Daca nu este selectata nicio pagina, atunci implicit va fi 1 
	$page = $_GET["page"];
	if (!$page) { 
    	$page = 1; 
    } 
	$prev_page = $page - 1; 
    $next_page = $page + 1; 
	mysql_query("SET NAMES utf8");
    $query = mysql_query($sql_text);
   
    $page_start = ($per_page * $page) - $per_page; 
    $num_rows = mysql_num_rows($query); 
	if ($num_rows==0){
		echo "Nu există cuvinte care să înceapă cu litera '".'<b>'.$prima_lit.'</b>'."'";
		exit();
		}
    if ($num_rows <= $per_page) { 
    	$num_pages = 1; 
    } else if (($num_rows % $per_page) == 0) { 
    	$num_pages = ($num_rows / $per_page); 
    } else { 
    	$num_pages = ($num_rows / $per_page) + 1; 
    } 
    $num_pages = (int) $num_pages; 
    if (($page > $num_pages) || ($page < 0)) { 
	   	echo "Undeva este o problemă! Anunţaţi chichitza!!!!"; 
    } 
    // 
    // Now the pages are set right, we can perform the actual displaying... 
    $sql_text = $sql_text . " LIMIT $page_start, $per_page"; 
	mysql_query("SET NAMES utf8");
    $query = mysql_query($sql_text); 
    
	while ($result = mysql_fetch_array($query)) 
       	echo '<b>'.($result['Cuvant'].'</b>'.'.'.$result['Definitie']).'<br>';	
	}

   // AFISARE LA CAUTARE
if(($_POST['cauta'])||($_GET["page_caut"]))
    {if (!isset($_SESSION['cuvant'])) 
  	    $_SESSION['cuvant'] = $_POST["cuvant"];
		
	 $page = $_GET["page_caut"];
		if (!$page)
			$_SESSION['cuvant'] = $_POST["cuvant"];
		     
	 $cuvant = $_SESSION['cuvant'];
	     require_once('config.php');
//tabelul "dictionar" din baza de date "dictionar" contine: ID, PrimaL, Cuvant, Definitie
// le selectez doar pe cele care incep cu litera "prima_lit"
     $sql_text = "SELECT * FROM dictionar WHERE Cuvant LIKE '{$cuvant}%'";
   
    // Numar de cuvinte pe pagina
	$per_page = 15;
	//tabelul "dictionar" din baza de date "dictionar" contine: ID, PrimaL, Cuvant, Definitie
	// le selectez doar pe cele care incep cu litera "prima_lit"
        
	$page = $_GET["page_caut"];
	if (!$page) { 
    	$page = 1; 
    } 
	$prev_page = $page - 1; 
    $next_page = $page + 1; 
	mysql_query("SET NAMES utf8");
    $query = mysql_query($sql_text);
 
    $page_start = ($per_page * $page) - $per_page; 
    $num_rows = mysql_num_rows($query); 
		if ($num_rows==0){
		echo "Cuvântul '".'<b>'.$cuvant.'</b>'."' nu există în baza de date!";
		exit();
		}
    if ($num_rows <= $per_page) { 
    	$num_pages_caut = 1; 
    } else if (($num_rows % $per_page) == 0) { 
    	$num_pages_caut = ($num_rows / $per_page); 
    } else { 
    	$num_pages_caut = ($num_rows / $per_page) + 1; 
    } 
    $num_pages_caut = (int) $num_pages_caut; 
    if (($page > $num_pages_caut) || ($page < 0)) { 
	   	echo "Undeva este o problemă! Anunţaţi chichitza!!!!"; 
    } 

    $sql_text = $sql_text . " LIMIT $page_start, $per_page"; 
	mysql_query("SET NAMES utf8");
    $query = mysql_query($sql_text); 
    while ($result = mysql_fetch_array($query)) 
          echo '<b>'.($result['Cuvant'].'</b>'.'.'.$result['Definitie']).'<br>';
	}
?> </td>
  </tr>
  <tr>
  <td colspan="2">
    
      <div align="left">
        <? 
  // PAGINARE
  	echo '<b>'."Pagina".'</b>';
	// daca sunt in primul caz: cautare dupa litera
	if($num_pages)
    for ($i = 1; $i <= $num_pages; $i++) { 
    if ($i != $page) { 
    	echo " <a href='dictionar.php?page=$i?'>$i</a> "; 
    } else { 
    	echo " $i "; 
    } 
    }
	else
	// // daca sunt in al doilea caz: cautare dupa cuvant
	  for ($i = 1; $i <= $num_pages_caut; $i++) { 
    if ($i != $page) { 
    	echo " <a href='dictionar.php?page_caut=$i?'>$i</a> "; 
    } else { 
    	echo " $i "; 
    } 
    } 
  ?>  
    </div></td>
  </tr>
  <td></td>
</table>
<p>&nbsp;</p>
</body>

