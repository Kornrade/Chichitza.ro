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
           $destinatar = "chichitza@chichitza.ro";
           $titlu = 'Mesaj chichitza';
           mail($destinatar, $titlu, $mesaj, $header);
       }
       
       ?>
       <script language=JavaScript>
       window.close();
       </script>
       <?

   }
    
?>
