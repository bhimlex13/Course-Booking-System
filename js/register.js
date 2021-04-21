const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = e.target[0].value;
  const lastName = e.target[1].value;
  const mobileNumber = e.target[2].value;
  const emailAddress = e.target[3].value;
  const password = e.target[4].value;
  const confirmPassword = e.target[5].value;
 

// Simple data validation here
  const isUserDataValid = (firstName !== "" && lastName !== "" && mobileNumber.length === 13 && emailAddress !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword);

  if(isUserDataValid) {
   // Send a client request to the application sever
    
  } else {
  alert("Required field(s) is/are invalid.");
  }
});