<?php

$ServerName = "localhost";
$Username = "root";
$Password = "";
$NameBD = "techgmpo_Cu";

$mysqli = new mysqli($ServerName, $Username, $Password, $NameBD); 
$mysqli->query("SET lc_time_names = 'es_MX'");

// Verificar si la conexi贸n fue exitosa
if ($mysqli->connect_errno) {
    echo 'Conexi贸n Fallida: ' . $mysqli->connect_error;
    exit();
}
?>
