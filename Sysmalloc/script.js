//   alert("You clicked the sign up link!");
// Get the sign-up button or link
var signupBtn = document.getElementById("signup-btn");
// Get the pop-up box
var popupBox = document.querySelector(".popup-box");
// When the user clicks on the sign-up button or link, show the pop-up box
signupBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popupBox.style.display = "block";
});
// When the user clicks on the close button or outside the pop-up box, hide the pop-up box
