let isAdmin = localStorage.getItem("isAdmin");

// Mini-activity:
// Create a variable to contain the val

let userId = localStorage.getItem("userId");


// Mini-activity:
// Create a variable to contain the element with admi
let createCourseContainer = document.querySelector("#admin-button");

// Cheack if the current user is an admin
if(!isAdmin || isAdmin == "false") {
  // is not admin
  createCourseContainer.innerHTML = null;
} else {
  // is an admin
}