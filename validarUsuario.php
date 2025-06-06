<?php

include("conexion.php");

if (!empty($_POST["btnIniciarSe"])) {
	if (empty($_POST["usuario"]) and empty($_POST["contrasenia"])) {
		echo'<div style="color: white" >LOS CAMPOS ESTAN VACIOS</div>';
	} else {

		$usuario=$_POST["usuario"];
		$contrasenia=$_POST["contrasenia"];
		$sql=$conexion -> query("select * from usuarios where  usuario ='$usuario' and contrasenia ='$contrasenia'");
		if ($datos=$sql -> fetch_object()) {
			header("location: index.html");

		} else {
			echo '<div style="color: white" >ACCESO DENEGADO</div>';

		}
		
	}
}
	


?>