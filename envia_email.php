<?php
    session_start();

    $nome = $_POST['nome'];
    $email= $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem= $_POST['mensagem']."<strong>Telefone: </strong>".$telefone;
    $to = "serranorepres@hotmail.com";
    $assunto = "Mensagem de: ".$nome."E-mail: <".$email.">";

    mail($to,$assunto,$mensagem);
  

$_SESSION['email'] = true;

header(Location: 'contato.php');

?>