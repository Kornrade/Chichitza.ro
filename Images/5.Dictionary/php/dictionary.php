<?
session_start();
?>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
</head>
<body>


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
?>

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
  
 </body>
