<?php
include("conexion.php");
if(!empty($_POST["send"])){

	if(empty($_POST["usuario"]) or empty($_POST["contrasenia"])){
		echo'uno de los campos está vacio';

	} else{
		$usuario= $_POST["usuario"];
		$contrasenia= $_POST["contrasenia"];
		$sql=$conexion -> query ("INSERT INTO `usuarios` (`usuario`, `contrasenia`) VALUES ( '$usuario', '$contrasenia')");



		if ($sql==1) {
			echo"usuario registrado correctamente";
		} else {
			echo"error al registrar";
		}
		
	}

}


?>