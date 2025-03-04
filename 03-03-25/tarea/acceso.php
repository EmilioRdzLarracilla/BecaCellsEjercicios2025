<?php
session_start();

// Verificar si el usuario está autenticado
if (!isset($_SESSION['NOMBRE'])) {
    echo "Acceso denegado. No estás autenticado.";
    exit;
}

// Obtener la matrícula del usuario desde la sesión
$nombre = $_SESSION['NOMBRE']; 

// Conexión a la base de datos
require_once 'coon.php';  


?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boleta de Calificaciones</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <!-- Botón de Cerrar Sesión -->
        <div class="text-end mb-4">
            <a href="index.php" class="btn btn-danger">Cerrar sesión</a>
        </div>

        <h3><?= $nombre ?></h3>

        
    </div>
</body>
</html>
