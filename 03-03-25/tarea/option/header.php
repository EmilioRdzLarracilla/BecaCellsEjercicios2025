
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boleta de Calificaciones</title>
    <style>
       
    *{
        font-family: Arial, Helvetica, sans-serif;
    }
        nav > ul > li{
            text-align: center;
            float: left;
            display: block;
            padding-right:13rem;

        }

        li:hover{
        display: block;
        color: wheat;
        }

        

        .clearfix{
            clear: both;
            float: none;
        }

        h1{
          text-align: center;  
          line-height: 2000px;

        }

       

        h3{
            text-align: center;
        }

        footer{
            width: 100%;
            margin-top: 200px;
            height: 25px;
             background-color: #2779B7;
            text-align: center;
        }
        
        
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="text-end mb-4">
            <a href="index.php" class="btn btn-danger">Cerrar sesión</a>
        </div>
        <div class="clearfix"></div>
        <h3><?= $nombre ?></h3>
        
        <br>
        <div class="clearfix"></div>
       
        
        <header>
            <nav>
                <ul>
                    <li><a href="../requiere/hacermy.php">Hacerca de mi</a></li>
                    <li><a href="../requiere/donde_estudie.php">Donde estudie</a></li>
                    <li><a href="../requiere/donde_Tabaje.php">Donde trabaje</a></li>
                    <li><a href="../requiere/hobies.php">hobies</a></li>
                </ul>
            </nav>
           

        </header>