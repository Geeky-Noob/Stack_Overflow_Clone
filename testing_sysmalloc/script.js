window.onload = function () {
  const url = "https://jsonplaceholder.typicode.com/users"; // it should be an API that has a list of users
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const original_div = document.querySelector(".particular_user");
      const parent_element = original_div.parentElement;
      data.forEach((user) => {
        var clone_div = original_div.cloneNode(true);
        clone_div.class = "user";
        console.log("done");
        var username = clone_div.querySelector(".particular_username");
        var rating = clone_div.querySelector(".particular_rating");
        var location = clone_div.querySelector(".particular_location");
        username.innerHTML = user.username;
        rating.innerHTML = user.address.zipcode;
        location.innerHTML = user.address.city;
        parent_element.appendChild(clone_div);
      });
    })
    .catch((error) => console.error(error));
};

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
function login() {
  var login_form = document.querySelector(".login_form");
  // var name = login_form.name1.value;
  // var pswrd = login_form.password1.value;
  fetch("https://jsonplaceholder.typicode.com/users", {
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
      if (data.key == True) {
        const username = data.username;
        const rating = data.user_rating;
        alert("Login successful!");
        window.location.href = "users_page.html";
      } else {
        alert("Username or password is incorrect!");
      }
    })
    .catch((error) => console.error(error));
}
function signup() {
  var signup_form = document.querySelector(".signup_form");
  var name = signup_form.name2.value;
  var email = signup_form.email2.value;
  var pswrd = signup_form.password2.value;
  fetch("https://jsonplaceholder.typicode.com/users", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, pswrd }),
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
