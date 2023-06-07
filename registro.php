<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chismes";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar los datos enviados desde el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $contraseña = $_POST["contraseña"];

    // Insertar los datos en la tabla de usuarios
    $sql = "INSERT INTO registro (nombre, apellido, correo, contraseña)
            VALUES ('$nombre', '$apellido', '$correo', '$contraseña')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar el usuario: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>









<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
 <link rel="stylesheet" href="formulario.css">
</head>
<body>
<form method="post" action="formulario.html">
        <input type="submit"  class="form_submit" name="submit" value="Ir a otra página">
</body>
</html>


