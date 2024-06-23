import sweetalert2 from "./sweetAlert.js";
import binaryData from "../data/binary-question.js";
import sortingData from "../data/sorting-question.js";

// initialize user's coins
let userCoins = 600;

// Function to update coin display
function updateCoinDisplay() {
  const coinsDisplay = document.querySelector(".coins-display");
  coinsDisplay.textContent = `Coins: ${userCoins}`;
}

// show exercises
function exercises() {
  const exercisesContainers = document.querySelectorAll(".exercises-container");

  exercisesContainers.forEach(function (container) {
    container.addEventListener("click", function (event) {
      if (event.target.classList.contains("menu-title")) {
        const exercisesWrapper = event.target.nextElementSibling;
        exercisesWrapper.style.display =
          exercisesWrapper.style.display === "block" ? "none" : "block";
        const exercises = exercisesWrapper.querySelectorAll(".exercises");
        exercises.forEach(function (exercise) {
          exercise.style.display =
            exercise.style.display === "block" ? "none" : "block";
        });
      }
    });
  });
}

// hide sidebar
function hideSidebar() {
  const hideSidebarBtn = document.querySelector(".hide-sidebar");
  const sidebar = document.querySelector(".sidebar");

  hideSidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("slide-out-left");
    setTimeout(function () {
      sidebar.style.display = "none";
    }, 300);
  });
}

// show sidebar
function showSidebar() {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("slide-in-left");
    setTimeout(function () {
      sidebar.style.display = "block";
    }, 300);
  });
}
// variables to use
let currentExercise;
let completedExercises = 0;

let currentExerciseIndex;
let exerciseCategory;
let exerciseIndex;

// update sidebar to track user progress
function updateSidebar() {
  const totalExercises = document.querySelectorAll(".exercises").length;
  const sidebarInfo = document.querySelector(".sidebar-info");
  sidebarInfo.textContent = `Completed ${completedExercises} of ${totalExercises} Exercises`;
}

// reset score
function resetScore() {
  const resetBtn = document.getElementById("reset");

  resetBtn.addEventListener("click", () => {
    document
      .querySelectorAll(".exercises.answered-correctly")
      .forEach((exercise) => {
        exercise.classList.remove("answered-correctly");
      });
    sweetalert2.fire({
      title: "Reset Done!",
      text: "Score Reset!",
      icon: "warning",
    });
    updateSidebar();
  });
}

// display exercises based on user interactions
function displayExercise(dataSource, exerciseCategory, exerciseIndex) {
  if (
    !(exerciseCategory in dataSource) ||
    typeof dataSource[exerciseCategory][exerciseIndex] === "undefined"
  ) {
    console.error(
      `No exercise found for category "${exerciseCategory}" and index "${exerciseIndex}".`
    );
    return;
  }
  currentExerciseIndex = exerciseIndex;

  currentExercise = dataSource[exerciseCategory][exerciseIndex];

  const exerciseTitleElement = document.querySelector(".exercise-title");
  const exerciseInstructionElement = document.querySelector(
    ".exercise-instruction"
  );

  exerciseTitleElement.textContent = currentExercise.title;
  exerciseInstructionElement.textContent = currentExercise.instruction;

  const exerciseArea = document.querySelector(".exercise-area");
  const exerciseElement =
    document.querySelectorAll(".exercises")[currentExerciseIndex];
  const buttonContainer = document.querySelector(".button-container");
  exerciseArea.innerHTML = "";
  exerciseArea.appendChild(buttonContainer);

  currentExercise.questions.forEach((question) => {
    const questionElement = document.createElement("pre");

    const parts = question.split("______");
    parts.forEach((part, index) => {
      questionElement.appendChild(document.createTextNode(part));
      if (index < parts.length - 1) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("question-input");
        questionElement.appendChild(input);
      }
    });

    exerciseArea.insertBefore(questionElement, buttonContainer);
  });

  if (exerciseElement.classList.contains("answered-correctly")) {
    completedExercises++;
  }
  updateSidebar();
}
// main function to run the game
function playGame(dataSource) {
  document
    .querySelectorAll(".exercises, .submit-answer-button")
    .forEach((element) => {
      element.addEventListener("click", () => {
        if (element.classList.contains("exercises")) {
          // Exercise click event
          exerciseCategory = element.closest(".exercises-container").dataset
            .category;
          exerciseIndex = parseInt(element.getAttribute("data-index"), 10);

          displayExercise(dataSource, exerciseCategory, exerciseIndex);
        } else if (element.classList.contains("submit-answer-button")) {
          // Submit answer click event
          const inputs = document.querySelectorAll(".question-input");
          const userAnswers = Array.from(inputs).map((input) =>
            input.value.trim()
          );
          const correctAnswers = currentExercise.questions.map(
            () => currentExercise.answer
          );

          let isCorrect = true;

          userAnswers.forEach((answer, index) => {
            if (answer !== correctAnswers[index]) {
              isCorrect = false;
            }
          });

          if (isCorrect) {
            // Check if the exercise is already marked as answered correctly
            const exerciseElement = document.querySelector(
              `.exercises-container[data-category="${exerciseCategory}"] .exercises[data-index="${exerciseIndex}"]`
            );
            if (!exerciseElement.classList.contains("answered-correctly")) {
              // If not marked, proceed
              sweetalert2.fire({
                title: "Correct! Proceed to another exercise!",
                width: 600,
                padding: "1em",
                color: "yellow",
                background: "#0e1f33",
                backdrop: `
              rgba(0,0,123,0.4)
              url("../data/images/toothless-dancing.gif")
              left top
              no-repeat
            `,
              });

              exerciseElement.classList.add("answered-correctly");
              completedExercises++; // Increment by 1
              updateSidebar();

              // Reward user with 50 coins for correct answer
              userCoins += 100;
              updateCoinDisplay();
            }
          } else {
            sweetalert2.fire({
              title: "Wrong Answer! Try again!",
              width: 600,
              padding: "1em",
              color: "yellow",
              background: "#0e1f33",
              backdrop: `
            rgba(0,0,123,0.4)
            url("")
            left top
            no-repeat
          `,
            });
          }
        }
      });
    });
}

function showAnswer() {
  document.querySelectorAll(".show-button").forEach((button) => {
    button.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".question-input");
      if (!inputs) {
        console.error("No input elements found.");
        return;
      }
      const answer = currentExercise.answer;

      // Confirm with user and deduct 300 coins to show answer
      sweetalert2
        .fire({
          title: "Are you sure you want to reveal the answer?",
          text: "This will deduct 300 coins.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, show answer!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (userCoins >= 300) {
              // Deduct 300 coins
              userCoins -= 300;
              updateCoinDisplay();

              // Show answer
              const isAnswerShown = Array.from(inputs).some(
                (input) => input.value.trim() === answer
              );

              inputs.forEach((input) => {
                if (isAnswerShown) {
                  input.value = "";
                } else {
                  input.value = answer;
                }
              });
            } else {
              sweetalert2.fire({
                title: "Insufficient Coins!",
                text: "You need at least 300 coins to reveal the answer.",
                icon: "error",
              });
            }
          }
        });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hideSidebar();
  showSidebar();
  playGame(binaryData);
  playGame(sortingData);
  exercises();
  showAnswer();
  resetScore();
  updateSidebar();
  updateCoinDisplay(); // Initialize coin display
});
