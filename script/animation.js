function animation() {
  const container = document.getElementById("main-wrapper");

  document.getElementById("sorting").addEventListener("click", function () {
    // Add slide-out-top animation to button
    container.classList.add("slide-out-top");
    // Redirect to sortingAlgo.html after animation completes
    setTimeout(function () {
      window.location.href = "pages/sortingAlgo.html";
    }, 500); // Animation duration
  });

  document.getElementById("binary").addEventListener("click", function () {
    // Add slide-out-top animation to button
    container.classList.add("slide-out-top");
    // Redirect to binaryAlgo.html after animation completes
    setTimeout(function () {
      window.location.href = "pages/binaryAlgo.html";
    }, 500); // Animation duration
  });
}

animation();
