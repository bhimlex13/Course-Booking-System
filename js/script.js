// Check if user is logged-in

let isAdmin = localStorage.getItem("isAdmin");

// Mini-activity:
// Create a variable to contain the val

let userId = localStorage.getItem("userId");
let userName = localStorage.getItem("firstName");

let logOutElement = document.querySelector("#log-out");
// Select all navigation elements if user is logged-in
let userLoggedInElements = document.querySelectorAll(".user-is-in");

// Select all navigation elements if user is logged-out
let userLoggedOutElements = document.querySelectorAll(".user-is-out");

if (userId !== null && typeof userId === "string") {
  userLoggedInElements.forEach(el => {
    el.classList.toggle("hide");
    document.getElementById("profile").innerHTML = userName;
  });

  userLoggedOutElements.forEach(el => {
    el.classList.toggle("hide");
  });
}

logOutElement.addEventListener("click", event => {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.clear();
    window.location.replace("./login.html");
  }
});
