<form id="form1" name="form1" method="post" action="contact.php">
  <p align="left">Daca stii chichitze pe care merita sa le &quot;auda&quot; si altii, sau daca ai ceva de carcotit referitor la acest site, lasa-ne adresa de e-mail si mesajul tau aici:</p>
  <p align="left"> E-mail <input name="email" type="text"/></p>
  <p align="left">    Mesaj<textarea name="mesaj" cols="35" rows="4" class="bg1"></textarea></p>
  <p align="left">Sau intra pe <a href="http://www.chichitza.com/forum/" target="_blank">www.chichitza.com/forum</a> si posteaza direct acolo ce ai de spus.</p>
  <p align="center">
    <input name="trimite" type="submit" id="Trimite" value="Trimite!" align="middle" />
  </p>
</form>

<? 
$email = $_POST['email'];
$mesaj = $_POST['mesaj'];
   
   if($_POST['trimite'])
   {
   
      if ((strlen($email)<5)and(strlen($mesaj)<1))
   		   echo "<script type='text/javascript'>alert('Atentie! Ai grija ca email-ul sa fie valid si nu uita sa scrii mesajul!')</script>";
	  if ((strlen($email)<5)and(strlen($mesaj)>=1))
   		   echo "<script type='text/javascript'>alert('Atentie! Adresa de e-mail nu este valida!')</script>";
	  if ((strlen($email)>5)and(strlen($mesaj)<1))
   		   echo "<script type='text/javascript'>alert('Atentie! Ai uitat sa scrii mesajul!')</script>";
	  if ((strlen($email)>=5)and(strlen($mesaj)>=1))	
	      {
		   $header = "From:<" . $email . ">";
		   $destinatar = "gaita.catalina@gmail.com";
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
