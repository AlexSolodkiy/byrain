<?php
$to = 'info.byrain@gmail.com'; // тут ввести email

$subject = 'Message from site';
$recepient = 'admin@denissanko.com';

$name       = stripslashes($_POST['name']);
$phone       = stripslashes($_POST['phone']);
$product      = stripslashes($_POST['product']);


$message   .= 'Имя: '.$name."\r\n";
$message   .= 'Телефон: '.$phone."\r\n";
$message   .= 'Название продукта: '.$marka."\r\n";



$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\n");

// mail($recepient, $pagetitle, $message, );
