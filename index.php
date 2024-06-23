<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Algorithm Quiz Game - Login</title>
  <link rel="stylesheet" href="./styles/login.css" />
  <link rel="shortcut icon" href="data/images/icon.png" type="image/x-icon" />
</head>

<body>
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


  <div class="wrapper-login" id="main-wrapper">
    <div class="title-container ">
      <h1>
        Master Binary Math <br />
        & <br />
        Sorting Algorithms <br />
        Through Fun and Challenging Quizzes
      </h1>
      <h2>More than 9 topics!</h2>
      <h2>Exciting 50+ Quizzes!</h2>
    </div>

    <div class="login-container">
      <button class="btn primary js-login-btn">Log in</button>
      <button class="btn tertiary js-reg-btn">Register</button>
    </div>
  </div>


  <script src="script/script.js" type="module">

  </script>
</body>

</html>