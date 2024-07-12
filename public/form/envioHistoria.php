<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir y sanitizar los datos del formulario
    $pseudonimo = htmlspecialchars(trim($_POST['pseudonimo']));
    $edad = intval($_POST['edad']);
    $genero = htmlspecialchars(trim($_POST['genero']));
    $ciudad = htmlspecialchars(trim($_POST['ciudad']));
    $tituloHistoria = htmlspecialchars(trim($_POST['titulo-historia']));
    $subtituloHistoria = htmlspecialchars(trim($_POST['subtitulo-historia']));
    $historia = htmlspecialchars(trim($_POST['historia']));
    $aceptar = isset($_POST['aceptar']) ? true : false;
} else {
    // Redirigir a la página principal si el acceso no es a través del método POST
    header("Location: /");
    exit();
}
