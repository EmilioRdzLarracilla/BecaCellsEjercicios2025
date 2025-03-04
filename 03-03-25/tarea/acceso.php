<?php
session_start();
if (!isset($_SESSION['NOMBRE'])) {
    echo "Acceso denegado. No estás autenticado.";
    exit;
}

$nombre = $_SESSION['NOMBRE']; 
require_once 'coon.php';  

require_once './option/header.php';
?>

<h1 >pagina de  acceso al usuario</h1>
   
<?php require_once './option/footer.php'; ?>