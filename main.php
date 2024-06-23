<!DOCTYPE html>
<html lang="en">
<?php
session_start();
$user = "";

if (isset($_SESSION['username'])) {
  $user = $_SESSION['username'];
}
?>


<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Algorithm Quiz Game</title>
  <link rel="stylesheet" href="./styles/style.css" />
  <link rel="shortcut icon" href="data/images/icon.png" type="image/x-icon" />
</head>

<body>
  <div class="login-container">
    <div class="user-con">
      <div class="user-img-con">
        <img src="data/images/user.png" alt="">
      </div>
      <span><?php echo $user; ?></span>
    </div>
    <a href="./php/logout.php"><button>Log out</button></a>
  </div>
  <div class="overlay"></div>
  <div class="form-container-login slide-in-top">
    <div class="close-container"><span class="close-btn">x</span></div>
    <h2>Login to Play!</h2>
    <form id="login-form" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>

      <input type="submit" value="Login">
    </form>
  </div>

  <div class="form-container-reg slide-in-top">
    <div class="close-container"><span class="close-btn">x</span></div>
    <h2>Create New Account</h2>
    <form id="reg-form" method="post">
      <label for="new-username">Username:</label>
      <input type="text" id="new-username" name="new-username" required>

      <label for="new-password">Password:</label>
      <input type="password" id="new-password" name="new-password" required>

      <label for="new-email">Email:</label>
      <input type="email" id="new-email" name="new-email" required>

      <label for="new-age">Age:</label>
      <input type="number" id="new-age" name="new-age" required>
      <input type="submit" name='register' value="Register">
    </form>
  </div>


  <div class="main-wrapper" id="main-wrapper">
    <div class="title-container">
      <h1>
        Ready for a challenge? <br />
        Dive into the game and test your skills!
      </h1>
    </div>

    <div class="button-container">
      <button class="btn primary" id="sorting">Sorting Algorithm</button>
      <button class="btn tertiary" id="binary">Binary Algorithm</button>
    </div>
  </div>
  <div id="bern"></div>
  <div id="bern1"></div>
  <div class="ground">
    <div class="grass"></div>
  </div>

  <script src="script/animation.js"></script>
  </script>
</body>

</html>