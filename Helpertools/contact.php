<? 
$email = $_POST['email'];
$mesaj = $_POST['mesaj'];
   
   if($_POST['trimite'])
   {
	  if ((strlen($email)>=5)and(strlen($mesaj)>=1))	
	      {
		   $header = "From:<" . $email . ">";
		   $destinatar = "chichitza@chichitza.ro";
		   $titlu = 'mesaj chichitza';
           mail($destinatar, $titlu, $mesaj, $header);
		   echo "<script type='text/javascript'>alert('Multumim pentru feedback!')</script>";
		   ?>
		   <script language=JavaScript>
           window.close();
           </script>
		   <?
		  }
   }
    
?>
