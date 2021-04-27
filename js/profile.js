// Create a variable to contain the element with `profile-container` ID

const profileContainerElement = document.querySelector("#profile-container");

if (userId !== null && typeof userId === "string") {
  // User is logged-in
  fetch(
    "https://alex-csp2-app-sever.herokuapp.com/api/users/details?id=" + userId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      let {
        firstName,
        lastName,
        emailAddress,
        mobileNumber,
        enrollments
      } = data.userDetails;
      profileContainerElement.innerHTML = `<div class="col-md-12">
  <section class="jumbotron my-5">		
    <h3 class="text-center">First Name: ${firstName}</h3>
    <h3 class="text-center">Last Name: ${lastName}</h3>
    <h3 class="text-center">Email: ${emailAddress}</h3>
    <h3 class="mt-5">Class Enrollment History</h3>
    <table class="table">
      <thead>
        <tr>
          <th> Course Name </th>
          <th> Enrolled On </th>
          <th> Status </th>
        </tr>
      </thead>
      <tbody>
        ${enrollments}
      </tbody>
    </table> 
  </section>
</div>`;
    });
} else {
  // User is not logged-in
  window.location.replace("./login.html");
}
