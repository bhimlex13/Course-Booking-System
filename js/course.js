const queryStringObject = new URLSearchParams(window.location.search);

const courseId = queryStringObject.get("id");

// console.log(courseId)



//

fetch("https://alex-csp2-app-sever.herokuapp.com/api/courses?id="+courseId)
.then()
.then();