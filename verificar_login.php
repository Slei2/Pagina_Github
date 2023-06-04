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

// Obtener las credenciales enviadas por el formulario HTML
$usuario = $_POST["usuario"];
$contraseña = $_POST["contraseña"];

// Consultar la base de datos para verificar las credenciales
$sql = "SELECT * FROM registro WHERE nombre = '$usuario' AND contraseña = '$contraseña'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Credenciales válidas
    echo "OK";
} else {
    // Credenciales inválidas
    echo "Error";
}

// Cerrar la conexión
$conn->close();
?>
