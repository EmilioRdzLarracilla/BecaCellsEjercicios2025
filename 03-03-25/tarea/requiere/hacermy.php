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
<h1>Hacerca de mi</h1>
<hr>

<p>
Me gustaría adquirir experiencia práctica en el campo de los sistemas computacionales mientras aplico y amplío mis habilidades técnicas en un ambiente profesional. Busco aprender de los expertos en el campo y participar en proyectos de tecnología desafiantes, para contribuir al desarrollo y mejora de los sistemas de la empresa y al mismo tiempo, crecer como profesional en el campo de los sistemas computacionales.
</p>

<?php require_once '.././option/footer.php'; ?>