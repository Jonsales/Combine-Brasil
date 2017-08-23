<?php 
//PREENCHA OS DADOS DE CONEXÃO A SEGUIR:
 
//$host= 'mysqlxx.dominio.com.br';
//$host= 'localhost';
//$userbd='root';
$host= 'a2plcpnl0246.prod.iad2.secureserver.net';
$userbd='admincombine';
$senhabd= 'phpadmin';
$bd= 'combinebrasil';
 
// RECEBENDO OS DADOS PREENCHIDOS DO FORMULÁRIO !
$teamName = $_POST ["team_name"];
$address = $_POST ["address"];	
$phone = $_POST ["phone"];	
$email = $_POST ["email"];	
$facebook = $_POST ["facebook"];	
$site = $_POST ["site"];
$championships = $_POST ["championships"];	
$foundation	= $_POST ["foundation"];	
$presidentName = $_POST ["president_name"];
$trainingAddress = $_POST ["training_address"];
$trainingSchedules Z= $_POST ["training_schedules"];
$history = $_POST ["history"];	

//conectando com o localhost - mysql
$conexao = mysql_connect($host, $userbd, $senhabd);
if (!$conexao){
  echo "Error";
}
else{
  if(!mysql_select_db($bd,$conexao)){  
    echo "Error";  
  }
   else{
    $query = "INSERT INTO `team` ( `team_name` , `address` , `email` , `facebook` , `championships` , `foundation` , `president_name` , `history`, `phone`, `site`, `training_address`, `training_schedules` ) 
   VALUES ('$teamName', '$address', '$email', '$facebook', '$championships', '$foundation', '$presidentName', '$history', '$phone', '$site', '$trainingAddress', '$trainingSchedules')";
    
    $response = mysql_query($query,$conexao);
    if($response){
     echo "Sucess";
    }
    else{     
    echo "Error";
    }    
   }
}
?> 