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
<h1>Donde trabaje</h1>
<hr>   

<h2>Empresa SSITEL-Desarrollador web jr</h2>
<p>Un sistema de recursos humanos desarrollado en PHP</p>
<h2>Dialogus</h2>
<p>Proporcionar un monitoreo constante de las cámaras de vigilancia y verificar en el servidor el correcto</p>
<h2>Corporativo icel</h2>
<p>Programador web analista de desarrollo</p>
<?php require_once '.././option/footer.php'; ?>