<? 
$email = $_POST['email'];
$mesaj = $_POST['mesaj'];
   
   if($_POST['trimite'])
   {
       $defaultemail = "Anonymous";
       $defaultmesaj = "No message...";
       
	   if ((strlen($email)<1))	
       {
         $email = $defaultemail;
       }
        
       if ((strlen($mesaj)<1))	
       {
         $mesaj = $defaultmesaj;
       }
       
       if( ($email != $defaultemail) || ($mesaj != $defaultmesaj) )
       {
           $header = "From:<" . $email . ">";
           $destinatar = "m_kornrade@yahoo.co.uk";
           $titlu = 'Mesaj chichitza';
           mail($destinatar, $titlu, $mesaj, $header);
       }
       
	   if(isset($_REQUEST["destination"]))
	   {
		  header("Location: {$_REQUEST["destination"]}");
	   }
	   else if(isset($_SERVER["HTTP_REFERER"]))
	   {
		  header("Location: {$_SERVER["HTTP_REFERER"]}");
	   }
	   else
	   {
		   header( 'Location: http://www.chichitza.ro' );
	   }
	   exit();
   }
    
?>
