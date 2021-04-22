const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const emailAddress = e.target[0].value;
  const password = e.target[1].value;

  const isUserDataValid = emailAddress !== "" && password !== "";

  if (isUserDataValid) {
    fetch("", "")
      .then()
      .then();
  } else {
    alert("Missing Require Field(s)");
  }
});
