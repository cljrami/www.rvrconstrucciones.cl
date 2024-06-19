<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $servicio = htmlspecialchars($_POST['servicio']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = 'ccuevasm@rvrconstrucciones.cl';
    $subject = 'Consulta Desde Sitio Web';
    $message = "Recibiste un nuevo formulario de contacto:\n\n";
    $message .= "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\nComentarios: $mensaje";

    $headers = "From: sitio@rvrconstrucciones.cl\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);

    // Redireccionar a otra página después de enviar el email
    header('Location: https://www.rvrconstrucciones.cl');

    exit;
}
