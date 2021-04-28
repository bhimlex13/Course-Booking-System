const coursesContainerElement = document.querySelector("#courses-container");
// Mini-activity:
// Create a variable to contain the element with admi
let createCourseContainer = document.querySelector("#admin-button");
// console.log(isAdmin);
// console.log(userId);
// Cheack if the current user is an admin
if (!isAdmin || isAdmin == "false") {
  // is not admin
  createCourseContainer.innerHTML = null;
}


// Display all courses

fetch("https://alex-csp2-app-sever.herokuapp.com/api/courses")
.then(res => res.json())
.then(data => {
  console.dir(data.courses);
  for (var i = 1; i < 10; i++){
    coursesContainerElement.innerHTML += data.courses[i];

}
});

