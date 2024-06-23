<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include('db.php');
  include('sanitize.php');

  // Sanitize and store form data
  $username = sanitize($_POST['new-username']);
  $password = sanitize($_POST['new-password']);
  $email = sanitize($_POST['new-email']);
  $age = sanitize($_POST['new-age']);

  // hash password
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  // SQL query to insert data into database
  $sql = "INSERT INTO users (username, password, email, age) VALUES (?,?,?,?)";

  $stmt = $conn->prepare($sql);
  if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
  }

  $stmt->bind_param("sssi", $username, $hashed_password, $email, $age);
  // if insertion is successful
  if ($stmt->execute() === TRUE) {
    echo "Registration successful!";
    exit();
  } else {
    echo "Error adding new user, " . $stmt->error;
  }

  // Close statement and database connection
  $stmt->close();
  $conn->close();
}
