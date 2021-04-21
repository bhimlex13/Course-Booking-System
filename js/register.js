const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", e => {
  e.preventDefault();

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#first-name").value;
  const mobileNumber = document.querySelector("#first-name").value;
  const firstName = document.querySelector("#first-name").value;
  const firstName = document.querySelector("#first-name").value;
  // const lastName = e.target[1].value;
  // const mobileNumber = e.target[2].value;
  // const emailAddress = e.target[3].value;
  // const password = e.target[4].value;
  // const confirmPassword = e.target[5].value;

  // Simple data validation here
  const isUserDataValid =
    firstName !== "" &&
    lastName !== "" &&
    mobileNumber.length === 13 &&
    emailAddress !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword;

if(isUserDataValid) {
    // Send a client request to the application server
    fetch("https://alex-csp2-app-sever.herokuapp.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
      return response.json();
    })
    .then(data => {
      console.dir(data);
    });
    
  } else {
    alert("Required field(s) is/are invalid.");
  }
});
