<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    $description = $_POST["description"];

    // Set email recipient
    $to = "Sbonelodlomo86@gmail.com";

    // Set email subject
    $subject = "New Contact Form Submission";

    // Build email message
    $message = "Name: " . $name . "\n";
    $message .= "Surname: " . $surname . "\n";
    $message .= "Cellphone Number: " . $phone . "\n";
    $message .= "Address: " . $address . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Description: " . $description;

    // Set email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Failed to send your message. Please try again later.";
    }
} else {
    // Redirect back to the contact form if accessed directly
    header("Location: contact.html");
    exit;
}
?>
