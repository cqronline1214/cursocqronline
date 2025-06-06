<?php  


// Create connection
$conexion = mysqli_connect("localhost","root","","cqr");
// Check connection
if (!$conexion) {
    die("Conexion fallida: " . mysqli_connect_error());
}
echo "Conexion exitosa";
//mysqli_close($conexion);



?>

