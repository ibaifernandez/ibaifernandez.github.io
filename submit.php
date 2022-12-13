<?php

// specify your email here

$to = 'info@ibaifernandez.com';

	// Assigning data from $_POST array to variables
    if (isset($_POST['name'])) { $name = $_POST['name']; }
    if (isset($_POST['email'])) { $from = $_POST['email']; }
    if (isset($_POST['subject'])) { $subject = $_POST['subject']; }
    if (isset($_POST['message'])) { $message = $_POST['message']; }
	
	// Construct subject of the email
	$subject = 'Has recibido un mensaje desde el portafolio de Ibai Fernández enviado por ' . $name;

	// Construct email body
	$body_message .= 'Name: ' . $name . "\r\n";
	$body_message .= 'Email: ' . $from . "\r\n";
	$body_message .= 'Subject: ' . $subject . "\r\n";
	$body_message .= 'Message: ' . $message . "\r\n";

	// Construct headers of the message
	$headers = 'From: ' . $from . "\r\n";
	$headers .= 'Reply-To: ' . $from . "\r\n";

	$mail_sent = mail($to, $subject, $body_message, $headers);

	if ($mail_sent == true) { 
		echo "Enviado con éxito.";
	}
	else { 
		echo "Ha habido un error. Por favor, inténtalo de nuevo.";
	} 

?>