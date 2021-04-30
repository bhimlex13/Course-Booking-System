const queryStringObject = new URLSearchParams(window.location.search);

const courseId = queryStringObject.get("id");

// console.log(courseId)



//

fetch("https://alex-csp2-app-sever.herokuapp.com/api/courses?id="+courseId)
.then(res => res.json())
.then(data => {
      
    const {name, description, price } =  data.course;
    // console.dir(data);
  
    document.querySelector("#course-name").innerText = name;
    document.querySelector("#course-description").innerText = description;
    document.querySelector("#course-price").innerText = price;
});

// Do not allow non-authenticated users or admins to enroll
const btnEnroll = document.querySelector("#btn-enroll");
if (userId === null || isAdmin === "true") {
  btnEnroll.style.display = "none";
} else {
  btnEnroll.addEventListener("click", event => {
    // console.log('enroll button was clicked!');
    
    fetch("https://alex-csp2-app-sever.herokuapp.com/api/users/enroll",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            courseId
        })
    })
      .then(res => res.json())
      .then(data => {
       // console.dir(data.message);  

        if (data.message) {
          alert("New enrollment to a course was successful.");
          window.location.replace("./courses.html");
        } else {
          alert("Error: New enrollment to a course encountered a problem.");
        }
    });
  });
}