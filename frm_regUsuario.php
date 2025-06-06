<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Registrar nuevo usuario</title>
	<link rel="stylesheet" type="text/css" href="CSS/style.css">
</head>
<body>

<form method = "POST" action="" autocomplete="off">
	<h2>Nuevo usuario</h2>
	<?php
		include("conexion.php");

	?>

    <table > 
    	<tr>
    		<td>
    			<img src="images/usuario.jpg" width="70px">  
    		</td>
    		<td>
    			 <input id="usuario" type="text" placeholder="usuario" name="usuario" />
    		 </td>


    	</tr>

    	<tr>
    		<td>
    			<img src="images/contrasenia.jpg" width="70px"> 
    		</td>
    		<td>
    			<input id="contrasenia" type="password" placeholder="contraseña"name="contrasenia" />

    		</td>
    	</tr>
    </table>

		
	
	
	<br>


<br>

	<input class="btn" type="submit" name="send" value="Enviar">
	<br>

	<a href="login.php">Salir</a>

	<br>
	
	<?php
	include("send.php");


?>
    
</body>
</html>