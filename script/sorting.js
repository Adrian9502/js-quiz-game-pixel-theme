import sweetalert2 from "./sweetAlert.js";
import sortingData from "../data/sorting-question.js";

// Sidebar section
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

let currentExercise;
let completedExercises = 0;

function updateSidebar() {
  const totalExercises = document.querySelectorAll(".exercises").length;
  const sidebarInfo = document.querySelector(".sidebar-info");
  sidebarInfo.textContent = `Completed ${completedExercises} of ${totalExercises} Exercises`;
}

// reset score
function resetScore() {
  const resetBtn = document.getElementById("reset");

  resetBtn.addEventListener("click", () => {
    completedExercises = 0;
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

function displayExercise(exerciseCategory, exerciseIndex) {
  if (
    !(exerciseCategory in sortingData) ||
    typeof sortingData[exerciseCategory][exerciseIndex] === "undefined"
  ) {
    console.error(
      `No exercise found for category "${exerciseCategory}" and index "${exerciseIndex}".`
    );
    return;
  }
  currentExerciseIndex = exerciseIndex;

  currentExercise = sortingData[exerciseCategory][exerciseIndex];

  const exerciseTitleElement = document.querySelector(".exercise-title");
  const exerciseInstructionElement = document.querySelector(
    ".exercise-instruction"
  );

  exerciseTitleElement.textContent = currentExercise.title;
  exerciseInstructionElement.textContent = currentExercise.instruction;

  const exerciseArea = document.querySelector(".exercise-area");

  const buttonContainer = document.querySelector(".button-container");
  exerciseArea.innerHTML = "";
  exerciseArea.appendChild(buttonContainer);

  currentExercise.questions.forEach((question) => {
    const questionElement = document.createElement("pre");
    questionElement.classList.add("sorting");

    const parts = question.split("______");
    parts.forEach((part, index) => {
      questionElement.appendChild(document.createTextNode(part));
      if (index < parts.length - 1) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("question-input");
        input.classList.add("question-input-sorting");
        questionElement.appendChild(input);
      }
    });

    exerciseArea.insertBefore(questionElement, buttonContainer);
  });

  const exerciseElement =
    document.querySelectorAll(".exercises")[currentExerciseIndex];
  if (exerciseElement.classList.contains("answered-correctly")) {
    completedExercises++;
  }
  updateSidebar();
}

let currentExerciseIndex;
let exerciseCategory;
let exerciseIndex;

function playGame() {
  document
    .querySelectorAll(".exercises, .submit-answer-button")
    .forEach((element) => {
      element.addEventListener("click", () => {
        if (element.classList.contains("exercises")) {
          // Exercise click event
          exerciseCategory = element.closest(".exercises-container").dataset
            .category;
          exerciseIndex = parseInt(element.getAttribute("data-index"), 10);

          displayExercise(exerciseCategory, exerciseIndex);
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

            const exerciseElement = document.querySelector(
              `.exercises-container[data-category="${exerciseCategory}"] .exercises[data-index="${exerciseIndex}"]`
            );
            exerciseElement.classList.add("answered-correctly");

            // Update completed exercises count and sidebar
            completedExercises++;
            updateSidebar(); // Update the sidebar after completing an exercise
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
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hideSidebar();
  showSidebar();
  playGame();
  exercises();
  showAnswer();
  resetScore();
  updateSidebar();
});
