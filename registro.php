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
    $contrasena = $_POST["contrasena"];

    // Insertar los datos en la tabla de usuarios
    $sql = "INSERT INTO registro (nombre, apellido, correo, contrasena)
            VALUES ('$nombre', '$apellido', '$correo', '$contrasena')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar el usuario: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
