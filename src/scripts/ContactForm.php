<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $servicio = htmlspecialchars($_POST['servicio']);
    $comentarios = htmlspecialchars($_POST['comentarios']);

    $to = 'cljrami@gmail.com';
    $subject = 'Cosulta Vía Sitio Web';
    $message = "Recibiste un nuevo formulario de contacto:\n\n";
    $message .= "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nTeléfono: $telefono\nServicio: $servicio\nComentarios: $comentarios";

    $headers = "From: cljrami@gmail.cl\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);

    // Redireccionar a otra página después de enviar el email
    header('Location: https://www.absgroup.cl');

    exit;
}
