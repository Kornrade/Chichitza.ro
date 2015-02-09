<? 
$email = $_POST['email'];
$mesaj = $_POST['mesaj'];
   
   if($_POST['trimite'])
   {
	  if ((strlen($email)>=5)and(strlen($mesaj)>=1))	
	      {
		   $header = "From:<" . $email . ">";
		   $destinatar = "chichitza@chichitza.ro";
		   $titlu = 'Mesaj chichitza';
           mail($destinatar, $titlu, $mesaj, $header);
		   ?>
		   <script language=JavaScript>
           window.close();
           </script>
		   <?
		  }
   }
    
?>
