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
  
   // Filter the active courses if user is unauthenticated or is non-admin
  let coursesList;
  if (isAdmin === null || isAdmin === "false") {
    coursesList = data.courses.filter(course => {
      if (course.isActive === true) {
        return course;
      }
    });
  } else {
    coursesList = data.courses;
  }
  
  // Display all courses on the course page
  const coursesElements = coursesList.map(course => {
    return `
      <div class="col-md-6 my-3">
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
                      <a href="./edit_course.html?id=${course._id}" class="admin_button btn btn-outline-secondary btn-block btn-course btn-update">Edit</a>
                    </div>
                    <div class="col-sm-12 col-md-4 mb-1">
                      <a href="./delete_course.html?id=${course._id}" class="admin_button btn btn-outline-danger btn-block btn-course btn-update">Delete</a>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  });
  
  // console.log(coursesElements.join(""));
  
  document.querySelector("#courses-container").innerHTML = coursesElements.join("");
    // Hide the 'edit' and 'delete' buttons if user is unauthenticated and non-admin
  if (isAdmin === null || isAdmin === "false") {
    document.querySelectorAll(".btn-update").forEach(btn => {
      btn.style.display = "none";
    });
  }
  
});

