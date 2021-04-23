const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const emailAddress = e.target[0].value;
  const password = e.target[1].value;

  const isUserDataValid = emailAddress !== "" && password !== "";

  if (isUserDataValid) {
    fetch("https://alex-csp2-app-sever.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emailAddress,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          // Authentication
          const { _id: userId } = data.userDetails;
          console.log(userId);

          // Retrieve the compelte user details
          fetch("https://alex-csp2-app-sever.herokuapp.com/api/users/details?id="+userId)
            .then(res => res.json())
            .then(data => {
              window.location.replace("./courses.html");
            });
        } else {
          // User not yet registered
          alert("User account was not found.");
        }
      });
  } else {
    alert("Missing required field(s).");
  }
});
