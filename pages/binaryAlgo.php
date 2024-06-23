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
  <title>Quiz - Binary Search Algorithm</title>
  <link rel="shortcut icon" href="../data/images/icon.png" type="image/x-icon" />
  <!-- css -->
  <link rel="stylesheet" href="../styles/main.css" />
</head>

<body>
  <sidebar class="sidebar">
    <div class="sidebar-icons">
      <a href="../main.php">
        <div title="Home">
          <img src="../data/images/home.png" alt="" />
        </div>
      </a>
      <div title="Reset Score" id="reset">
        <img src="../data/images/bin.png" alt="" />
      </div>
      <div title="Hide Sidebar" class="hide-sidebar">
        <img src="../data/images/close.png" alt="" />
      </div>
    </div>
    <div class="sidebar-content">
      <h2 class="sidebar-title">BINARY MATH QUIZ</h2>
      <div class="sidebar-info"></div>
      <div class="sidebar-user-con">
        <div class="sidebar-user">
          <div><img src="../data/images/user.png" alt=""></div>
          <span><?php echo $user ?></span>
          <a href="../php/logout.php">
            <button class="log-out-btn"> Log out</button>
          </a>
        </div>
        <div class="coins">
          <div> <img src="../data/images/coin.gif" alt=""></div>
          <span class="coins-display"></span>
        </div>
      </div>
      <div class="sidebar-content-exercises exercises-container" data-category="Addition">
        <div class="menu-title addition">Addition</div>
        <!-- menu item -->
        <div class="exercises-wrapper">
          <div class="exercises" data-index="0">Exercise 1</div>
          <div class="exercises" data-index="1">Exercise 2</div>
          <div class="exercises" data-index="2">Exercise 3</div>
          <div class="exercises" data-index="3">Exercise 4</div>
          <div class="exercises" data-index="4">Exercise 5</div>
          <div class="exercises" data-index="5">Exercise 6</div>
          <div class="exercises" data-index="6">Exercise 7</div>
          <div class="exercises" data-index="7">Exercise 8</div>
          <div class="exercises" data-index="8">Exercise 9</div>
          <div class="exercises" data-index="9">Exercise 10</div>
        </div>
      </div>
      <div class="sidebar-content-exercises exercises-container" data-category="Subtraction">
        <div class="menu-title subtraction">Subtraction</div>
        <!-- menu item -->
        <div class="exercises-wrapper">
          <div class="exercises" data-index="0">Exercise 1</div>
          <div class="exercises" data-index="1">Exercise 2</div>
          <div class="exercises" data-index="2">Exercise 3</div>
          <div class="exercises" data-index="3">Exercise 4</div>
          <div class="exercises" data-index="4">Exercise 5</div>
          <div class="exercises" data-index="5">Exercise 6</div>
          <div class="exercises" data-index="6">Exercise 7</div>
          <div class="exercises" data-index="7">Exercise 8</div>
          <div class="exercises" data-index="8">Exercise 9</div>
          <div class="exercises" data-index="9">Exercise 10</div>
        </div>
      </div>
      <div class="sidebar-content-exercises exercises-container" data-category="Alphabet">
        <div class="menu-title alphabet">Alphabet</div>
        <!-- menu item -->
        <div class="exercises-wrapper">
          <div class="exercises" data-index="0">Exercise 1</div>
          <div class="exercises" data-index="1">Exercise 2</div>
          <div class="exercises" data-index="2">Exercise 3</div>
          <div class="exercises" data-index="3">Exercise 4</div>
          <div class="exercises" data-index="4">Exercise 5</div>
          <div class="exercises" data-index="5">Exercise 6</div>
          <div class="exercises" data-index="6">Exercise 7</div>
          <div class="exercises" data-index="7">Exercise 8</div>
          <div class="exercises" data-index="8">Exercise 9</div>
          <div class="exercises" data-index="9">Exercise 10</div>
          <div class="exercises" data-index="10">Exercise 11</div>
          <div class="exercises" data-index="11">Exercise 12</div>
          <div class="exercises" data-index="12">Exercise 13</div>
          <div class="exercises" data-index="13">Exercise 14</div>
          <div class="exercises" data-index="14">Exercise 15</div>
          <div class="exercises" data-index="15">Exercise 16</div>
          <div class="exercises" data-index="16">Exercise 17</div>
          <div class="exercises" data-index="17">Exercise 18</div>
          <div class="exercises" data-index="18">Exercise 19</div>
          <div class="exercises" data-index="19">Exercise 20</div>
        </div>
      </div>
    </div>
  </sidebar>
  <main class="main-content">
    <div class="top-bar">
      <div class="hamburger-menu">
        <img src="../data/images/hamburger.png" id="hamburger" title="Show sidebar" alt="hamburger" />
      </div>
    </div>
    <div class="exercise">
      <h1 class="exercise-title">Choose an Exercise on the left!</h1>
      <p class="exercise-instruction">Good luck!</p>
      <div class="exercise-area">
        <div class="exercise-placeholder">
          <div class="instructions">
            Instructions: <br>
            1. Choose a Topic: Click on a topic in the left sidebar. <br>
            2. Select an Exercise: Click on an exercise title to reveal its questions.<br>
            3. Answer Questions: Fill in the blanks in each question with your responses.<br>
            4. Submit Your Answers: Click "Submit Answer" at the bottom after answering all questions.<br>
            <br>
            Additional Information: <br>
            - Correct Answer: You will earn 100 coins for each correct answer.<br>
            - Show Answer: If you cannot answer a question, you can reveal the answer using <br>
            the "Show Answer" button, which costs 300 coins.
          </div>

        </div>
        <div class="button-container">
          <button class="show-button ex-area-btn show-btn">Show Answer (
            <div class="coin-show">
              <img src="../data/images/coin.gif" alt="">
            </div>
            <span>- 300)</span>
          </button>
        </div>
      </div>
      <div class="submit-answer">
        <button class="btn primary submit-answer-button">
          Submit Answer &gt;
        </button>
      </div>
    </div>
  </main>

  <script src="../script/main.js" type="module"></script>
</body>

</html>