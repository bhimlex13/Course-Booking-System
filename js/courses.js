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
  const coursesElement = data.courses.map(course => {
  return `<div class="col-md-6 my-3">
    <div class='card'>
        <div class='card-body'>
            <h5 class='card-title'>${course.name}</h5>
            <p class='card-text text-left'>
                ${course.description}
            </p>
            <p class='card-text text-right'>
               ₱ ${course.price}
            </p>
        </div>
        <div class='card-footer'>
            <div class="row">
              <div class="col-sm-12 col-md-4 mb-1">
                <a href="./course.html?id=${course._id}" class="btn btn-outline-primary btn-block btn-course">View</a>
              </div>
              <div class="col-sm-12 col-md-4 mb-1">
                <a href="./edit_course.html?id=${course._id}" class="btn btn-outline-secondary btn-block btn-course">Edit</a>
              </div>
              <div class="col-sm-12 col-md-4 mb-1">
                <a href="./delete_course.html?id=${course._id}" class="btn btn-outline-danger btn-block btn-course">Delete</a>
              </div>
            </div>
        </div>
    </div>
</div>`
  });
  
console.log(coursesElement.join(""));
  
  
});

