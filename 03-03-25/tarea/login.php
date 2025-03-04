<?php
require_once "coon.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    $sql = "SELECT * FROM usuarios WHERE CORREO = ?";
    $stmt = $mysqli->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("s", $correo);
        $stmt->execute();
        $resultado = $stmt->get_result();

        if ($resultado->num_rows == 1) {
            $usuario = $resultado->fetch_assoc();

            if ($contraseña === $usuario['CONTRASEÑA']) {
                $_SESSION['MATRICULA'] = $usuario['MATRICULA'];
                $_SESSION['NOMBRE'] = $usuario['NOMBRE'];
                $_SESSION['NIVEL'] = $usuario['NIVEL'];
                $_SESSION['MATERIA'] = $usuario['MATERIA'];
                $_SESSION['NOM_MATERIA'] = $usuario['NOM_MATERIA'];

                if ($usuario['NIVEL'] = 1) {
                    header("Location: acceso.php");
                }
                
            } else {

                echo '<script>
                alert("Contraseña incontraseña");
                window.location.href = "Index.php";
                </script>';
                exit;
            }
        }else {
            echo '<script>
              alert("Información usuario no existe verifique la informacion");
              window.location.href = "Index.php";
          </script>';
            exit;
        }
    } 

    $stmt->close();
}

$mysqli->close();
