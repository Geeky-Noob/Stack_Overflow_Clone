// window.onload = function () {
//   const url = "https://jsonplaceholder.typicode.com/users"; // it should be an API that has a list of users
//   fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const original_div = document.querySelector(".particular_user");
//       const parent_element = original_div.parentElement;
//       data.forEach((user) => {
//         var clone_div = original_div.cloneNode(true);
//         clone_div.class = "user";
//         console.log("done");
//         var username = clone_div.querySelector(".particular_username");
//         var rating = clone_div.querySelector(".particular_rating");
//         var location = clone_div.querySelector(".particular_location");
//         username.innerHTML = user.username;
//         rating.innerHTML = user.address.zipcode;
//         location.innerHTML = user.address.city;
//         parent_element.appendChild(clone_div);
//       });
//     })
//     .catch((error) => console.error(error));
// };
if (window.location.href != "index.html") {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("username="))
    ?.split("=")[1];
}
function login_func() {
  var popupBox = document.querySelector(".pop-outer1");
  popupBox.style.display = "block";
}
function signup_func() {
  var popupBox = document.querySelector(".pop-outer2");
  popupBox.style.display = "block";
}
function cancel() {
  window.location.href = "index.html";
}
function login(e) {
  e.preventDefault();
  var login_form = document.querySelector(".login_form");
  var name = login_form.name1.value;
  var pswrd = login_form.password1.value;
  var body = { username: name, password: pswrd };
  fetch(`http://localhost:5000/user_login?name1=${name}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      // if (data.key == True) {
      //   const username = data.username;
      //   const location = data.location;
      //   const rating = data.user_rating;
      //   document.cookie = `username=${username}; SameSite=None`;
      //   document.cookie = `rating=${rating}; SameSite=None`;
      //   document.cookie = `location=${location}; SameSite=None`;
        alert("Login successful!");
        console.log(data.location);
        window.location.href = "users_page.html";
    // }
      //  else {
      //   alert("Username or password is incorrect!");
      // }
    })
    .catch((error) => console.error(error));
}
function signup(e) {
  e.preventDefault();
  var signup_form = document.querySelector(".signup_form");
  var name = signup_form.name2.value;
  var email = signup_form.email2.value;
  var pswrd = signup_form.password2.value;
  var body = {name2: name, password2: pswrd}
  fetch(`http://localhost:5000/user_signup`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.ok) {
        alert("Sign up successful!");
        signupForm.reset();
        window.location.href = "index.html";
      }
      throw new Error("Network response was not ok.");
    })
    .catch((error) => console.error(error));
}

// function follow() {
//   var x = document.getElementById("follow-btn");
//   if (x.innerHTML === "Follow") {
//     x.innerHTML = "Unfollow";
//   } else {
//     x.innerHTML = "Follow";
//   }
// }
function gotopage() {
  window.location.href = "edit_profile_page.html";
}
function edit_profile() {
  window.location.href = "user_profile_page.html";
}

// function sign_up_call() {
//   console.log(12345);
//   fetch("http://103.27.9.110:5000/members", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: username,
//       email: email,
//       password: password,
//     }),
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.error(error));
// }
