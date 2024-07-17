<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pseudonimo = htmlspecialchars($_POST['pseudonimo']);
    $edad = htmlspecialchars($_POST['edad']);
    $genero = htmlspecialchars($_POST['genero']);
    $ciudad = htmlspecialchars($_POST['ciudad']);
    $tituloHistoria = htmlspecialchars($_POST['titulo-historia']);
    $subtituloHistoria = htmlspecialchars($_POST['subtitulo-historia']);
    $historia = htmlspecialchars($_POST['historia']);

    $to = "historias@hastalatumba.cl";
    $subject = "Nueva Historia Enviada";
    $message = "
        <html>
        <head>
        <title>Nueva Historia Enviada</title>
        </head>
        <body>
        <h2>Detalles de la Historia:</h2>
        <p><strong>Pseudónimo:</strong> $pseudonimo</p>
        <p><strong>Edad:</strong> $edad</p>
        <p><strong>Género:</strong> $genero</p>
        <p><strong>Ciudad:</strong> $ciudad</p>
        <p><strong>Título de la Historia:</strong> $tituloHistoria</p>
        <p><strong>Subtítulo de la Historia:</strong> $subtituloHistoria</p>
        <p><strong>Historia:</strong></p>
        <p>$historia</p>
        </body>
        </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <webmaster@hastalatumba.cl>' . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: http://www.hastalatumba.cl");
        exit();
    } else {
        echo "Ha ocurrido un error al enviar tu historia. Por favor, intenta nuevamente.";
    }
}
