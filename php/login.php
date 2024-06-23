<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include('db.php');
  include('sanitize.php');

  // Sanitize form input
  $username = sanitize($_POST['username']);
  $password = sanitize($_POST['password']);

  // SQL query to fetch user details based on username
  $sql = "SELECT * FROM users WHERE username = ?";
  $stmt = $conn->prepare($sql);

  if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
  }

  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows == 1) {
    // User found, verify password
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
      $_SESSION['username'] = $user['username'];
      $_SESSION['email'] = $user['email'];
      echo "Login successful!";
      exit();
    } else {
      // Password incorrect
      echo "Incorrect password.";
    }
  } else {
    // User not found
    echo "Username not found.";
  }

  // Close statement and database connection
  $stmt->close();
  $conn->close();
}
