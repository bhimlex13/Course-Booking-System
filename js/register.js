
// if (userId !== null) window.history.back();

const registerForm = document.querySelector("#register-form");
// console.log("This is working");

registerForm.addEventListener("submit", e => {
  event.preventDefault();

  const firstName = e.target[0].value;
  const lastName = e.target[1].value;
  const mobileNumber = e.target[2].value;
  const emailAddress = e.target[3].value;
  const password = e.target[4].value;
  const confirmPassword = e.target[5].value;

  // const firstName = document.querySelector("#first-name").value;
  // const lastName = document.querySelector("#last-name").value;
  // const mobileNumber = document.querySelector("#mobile-number").value;
  // const emailAddress = document.querySelector("#email-address").value;
  // const password = document.querySelector("#password").value;
  // const confirmPassword = document.querySelector("#confirm-password").value;

  let userD = {
    firstName,
    lastName,
    mobileNumber
  };

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
    // Check if user (email) already exist
    fetch("https://alex-csp2-app-sever.herokuapp.com/api/users/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ emailAddress })
    })
      .then(res => res.json())
      .then(data => {
        if (!data.data) {
          // Email is good, then register the user
          // Initiate the registration process
          fetch(
            "https://alex-csp2-app-sever.herokuapp.com/api/users/register",
            {
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
            }
          )
            .then(response => {
              return response.json();
            })
            .then(data => {
              if (data.data) {
                alert("Registration was successful.");
                window.location.replace("/login.html");
              } else {
                alert("Cannot create the new user provided.");
              }
            });
        } else {
          // Email already exist
          alert("Email is already in use.");
        }
      });
  } else {
    alert("Required field(s) is/are invalid.");
  }
});


