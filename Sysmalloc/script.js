function login_func() {
  var popupBox = document.querySelector(".pop-outer1");
  popupBox.style.display = "block";
}

const username =
  "username" ?? document.querySelector('input[name="name2"]').value;
const email =
  "user@gmail.com" ?? document.querySelector('input[name="email2"]').value;
const password =
  "pswrd1" ?? document.querySelector('input[name="password2"]').value;

console.log(username, email, password);

function sign_up_func() {
  var popupBox = document.querySelector(".pop-outer2");
  popupBox.style.display = "block";
}

function sign_up_call() {
  console.log(12345);
  fetch("http://10.54.18.58:5000/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
}
