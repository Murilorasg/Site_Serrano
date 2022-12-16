<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/styles_form.css">
    <title>Serrano Representações - Contato</title>
</head>
<body>
    <header>
        <div class="logo">
            <img src="./images/LOGO.png" alt="Logo" class="logo">
        </div>
        <nav>
            <ul>
                <li><a href="index.html" class="a_header">Home</a></li>
                <li><a href="sobre.html" class="a_header">Sobre a Serrano</a></li>
                <li><a href="representadas.html" class="a_header">Empresas Representadas</a></li>
                <li><a href="contato.php" class="a_header">Contato</a></li>
            </ul>
        </nav>
    </header>
    <div class="principal">
        <section class="formulario">
            <form action="envia_email.php" method="post" name="form_contato">
                <fieldset>
                <label for="Nome">
                   <p class="form_paragraph"> Nome: </label> <input type="text" size="36" name="nome" placeholder="Nome Sobrenome"></p>
                
                <label for="Telefone">
                    <p class="form_paragraph">Telefone: </label><input type="text" size="34" name="telefone" id="telefone" placeholder="(XX)XXXXX-XXXX"></p>
                
                <label for="Email">
                    <p class="form_paragraph"> Email: </label> <input type="email" size="36" name="email" placeholder="exemplo@email.com"></p>
                
                <label for="Mensagem">
                    <p style="text-align: left; margin-top: 10px; margin-bottom:5px;"> Mensagem:</label></p> 
                    <p><textarea name="mensagem" id="" cols="30" rows="10" name="mensagem"></textarea></p>
                    <?php
                    if(!(isset($_SESSION['email']))):
                        ?>
                        <label for="enviar">
                        <p><input type="button" id="enviar" value="Enviar" class="button" onclick="Enviar()"></p>
                        </label>
                        <?php
                        endif;
                ?>
                <?php
                    if(isset($_SESSION['email'])):
                        ?>
                        <p><h5 class="confirma_envio">Mensagem enviada com sucesso</h5></p>
                <?php   
                        endif;
                        unset($_SESSION['email']);
                    ?>
        </fieldset>
            </form>
        </section>
    </div>
    <footer>
        <p><small>Serrano Representações - Representação Comercial</small></p>
        <p><small>+55 19 99305-6739</small></p>
        <p><a href="mailto:serranorepres@hotmail.com" class="a"><small>serranorepres@hotmail.com</small></a></p>
    </footer>
    <script type="text/javascript">
        function Enviar(){
            alert("Email enviado com sucesso!");
            location.reload();
        }
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <script type="text/javascript">
          $(document).ready(function(){
    $("#telefone").mask('(00)00000-0000');
});
    </script>
</body>
</html>

<?php
    unset($_SESSION['email']);
?>