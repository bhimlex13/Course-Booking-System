const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const emailAddress = e.target[0].value;
  const password = e.target[1].value;

  const isUserDataValid = emailAddress !== "" && password !== "";

  if (isUserDataValid) {
    fetch(" https://alex-csp2-app-sever.herokuapp.com/api/users/login", {
      method: "",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        emailAddress,
        password
      })
    })
      .then(res => res.json)
      .then(data => {
          if(data.data) {
            // User not yet registered
            window.location.replace('/courses.html');
          } else {
            // User not het registered
            
          }
    });
  } else {
    alert("Missing Require Field(s)");
  }
});
