// import sweetalert2 from "./sweetAlert.js";

// // form pop up in login/registration
// function formPopup(containerClass, formContainer) {
//   const formCon = document.querySelector(formContainer);
//   const closeBtn = document.querySelectorAll(".close-btn");
//   const loginBtn = document.querySelector(containerClass);
//   const overlay = document.querySelector(".overlay");

//   loginBtn.addEventListener("click", () => {
//     formCon.style.display = "block";
//     overlay.style.display = "block"; // show overlay
//   });

//   closeBtn.forEach((button) => {
//     button.addEventListener("click", () => {
//       formCon.classList.add("slide-out-top");
//       setTimeout(() => {
//         formCon.style.display = "none";
//         formCon.classList.remove("slide-out-top");
//         overlay.style.display = "none"; // hide overlay
//       }, 300);
//     });
//   });
// }
// // send the login/registration credentials to server
// function formFetch(
//   formSelector,
//   successMessage,
//   formActionUrl,
//   formContainer,
//   redirectUrl
// ) {
//   document.addEventListener("submit", function (event) {
//     const container = document.querySelector(formContainer);
//     if (event.target.matches(formSelector)) {
//       event.preventDefault();

//       const formData = new FormData(event.target);
//       fetch(formActionUrl, {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => {
//           if (!response.ok) {
//             // Handle error responses
//             throw new Error("Server error: " + response.status);
//           }
//           return response.text();
//         })
//         .then((data) => {
//           // Check the response for different scenarios
//           if (data.includes(successMessage)) {
//             // Hide the form container
//             container.style.display = "none";
//             sweetalert2
//               .fire({
//                 title: successMessage,
//                 width: 600,
//                 padding: "3em",
//                 color: "#716add",
//                 background: "#fff",
//                 backdrop: `
//                 rgba(0,0,123,0.4)
//                 url("./data/images/welcome.gif")
//                 left top
//                 no-repeat
//               `,
//               })
//               .then(() => {
//                 // Redirect to specified URL
//                 window.location.href = redirectUrl;
//               });
//           } else {
//             console.log("error");
//             // Display the error message returned from the server
//             sweetalert2.fire({
//               title: "Error!",
//               text: data, // Display the error message from the server
//               icon: "error",
//             });
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           if (error.message) {
//             sweetalert2.fire({
//               title: "Error Occurred!",
//               text: "An error occurred: " + error.message,
//               icon: "error",
//             });
//           } else {
//             sweetalert2.fire({
//               title: "Error Occurred!",
//               text: "An unknown error occurred. Please try again later.",
//               icon: "error",
//             });
//           }
//         });
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   formPopup(".js-login-btn", ".form-container-login");
//   formPopup(".js-reg-btn", ".form-container-reg");
//   // registration
//   formFetch(
//     "#reg-form",
//     "Registration successful!",
//     "php/register.php",
//     ".form-container-reg",
//     "./index.php"
//   );
//   // login
//   formFetch(
//     "#login-form",
//     "Login successful!",
//     "php/login.php",
//     ".form-container-login",
//     "./main.php"
//   );
// });
