<?php
session_start();
if (!isset($_SESSION['NOMBRE'])) {
    echo "Acceso denegado. No estás autenticado.";
    exit;
}

$nombre = $_SESSION['NOMBRE'];  
require_once '.././option/header.php';
?>
<br>
<hr>
<h1>hobies</h1>
<hr>

<ul>
    <li>leer</li>
    <li>video juegos</li>
    <li>salir a caminar</li>
    <li>rompecabezas</li>
</ul>
<?php require_once '.././option/footer.php'; ?>