<?php

// Mudar Aqui

$email_envio = 'contato@combinebrasil.com'; // E-mail receptor
$email_pass = 'Combine01$'; // Senha do e-mail

$site_name = 'combine brasil'; // Nome do Site
$site_url = 'www.combinebrasil.com'; // URL do Site

$host_smtp = 'smtp.office365.com'; // HOST SMTP Ex: smtp.domain.com.br
$host_port = '587'; // Porta do Host

// Variáveis do Formulário

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

// Conteúdo do Formulário

$body_content = "De: $nome \n E-mail: $email \n Telefone: $telefone \n Mensagem: $mensagem";

// Não mudar a partir daqui

if ($_POST['leaveblank'] != '' or $_POST['dontchange'] != 'http://') {

  echo "Error";
}

else if (isset($_POST['nome'])){
require("./PHPMailer/class.smtp.php");
require("./PHPMailer/class.phpmailer.php");
require ('./PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$mail->isSMTP();
$mail->Host = $host_smtp;
$mail->SMTPAuth = true;
$mail->Username = $email_envio;
$mail->Password = $email_pass;
$mail->Port = $host_port;
$mail->SMTPSecure = 'ssl';

$mail->From = $email;

$mail->addAddress($email_envio);

$mail->FromName = 'Formulário de Contato';
$mail->AddReplyTo($_POST['email'], $_POST['nome']);

$mail->WordWrap = 70;

$mail->Subject = 'Formulário - ' . $site_name . ' - ' . $_POST['nome'];

$mail->Body = $body_content;

if(!$mail->send()) {
  
 echo "Error";
  
} else {

  echo "Success";
}
}
?>