// Mini-activity:
// Create a variable to contain the element with admi
let createCourseContainer = document.querySelector("#admin-button");

// Cheack if the current user is an admin
if(!isAdmin || isAdmin == "false") {
  // is not admin
  createCourseContainer.innerHTML = null;
}