const queryStringObject = new URLSearchParams(window.location.search);

const courseId = queryStringObject.get("id");

// console.log(courseId)



//

fetch("https://alex-csp2-app-sever.herokuapp.com/api/courses?id="+courseId)
.then(res => res.json())
.then(data => {
      
    const {name, description, price } =  data.course;
    console.dir(data);
  
    document.querySelector("#course-name").innerText = name;
    document.querySelector("#course-description").innerText = description;
    document.querySelector("#course-price").innerText = price;
});