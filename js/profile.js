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
  <section >		
          	<div class="mb-3">
            <label for="first-name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="first-name" value="${firstName}" readonly>
          </div>          	<div class="mb-3">
            <label for="last-name" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="last-name" value="${lastName}" readonly>
          </div>          	<div class="mb-3">
            <label for="email-address" class="form-label">Email Address</label>
            <input type="text" class="form-control" id="email-address" value="${emailAddress}" readonly>
          </div>
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
