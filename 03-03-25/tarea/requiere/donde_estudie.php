<?php
session_start();
if (!isset($_SESSION['NOMBRE'])) {
    echo "Acceso denegado. No estás autenticado.";
    exit;
}

$nombre = $_SESSION['NOMBRE'];  
require_once '.././option/header.php';
?>

<h1>Escuela en la que estudie</h1>

<h2>Tecnologico de iztapalapa</h2>
<br>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1881.8710683100169!2d-99.052912!3d19.380315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd0614558e4b%3A0x3760847a107a0b9f!2sTecNM%20%7C%20Tecnol%C3%B3gico%20Nacional%20de%20M%C3%A9xico%20Campus%20Iztapalapa!5e0!3m2!1ses!2sus!4v1741107929193!5m2!1ses!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
<?php require_once '.././option/footer.php'; ?>