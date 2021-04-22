const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", e => {
  event.preventDefault();

  // const firstName = e.target[0].value;
  // const lastName = e.target[1].value;
  // const mobileNumber = e.target[2].value;
  // const emailAddress = e.target[3].value;
  // const password = e.target[4].value;
  // const confirmPassword = e.target[5].value;

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const mobileNumber = document.querySelector("#mobile-number").value;
  const emailAddress = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  // Simple data validation here
  const isUserDataValid =
    firstName !== "" &&
    lastName !== "" &&
    mobileNumber.length === 13 &&
    emailAddress !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword;

  if (isUserDataValid) {
    // Send a client request to the application server
    fetch("https://alex-csp2-app-sever.herokuapp.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        emailAddress,
        password,
        mobileNumber
      })
    })
      .then(response => {
        return response.json({
          message: "User Successfully Registered",
          data: response
        });
      })
      .then(data => {
        window.location.replace("/login.html");
      })
      .then(data => {
         alert("User successfully registered!");

      });
  } else {
    alert("Required field(s) is/are invalid");
  }
});
