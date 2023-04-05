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
