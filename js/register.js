const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = event.target[0].value;
  console.log(firstName)
//   let lastName = document.querySelector('#last-name').value;
//   let mobileNumber = document.querySelector('#mobile-number').value;
//   let emailAddress = document.querySelector('#email-address').value;
//   let password = document.querySelector('#password').value;
//   let confirmPassword = document.querySelector('#confirm-password').value;
  
  
  //Simple data validation here
// Simple data validation here
  const isUserDataValid = (firstName !== "" && lastName !== "" && mobileNumber.length === 11 && emailAddress !== "" && password === confirmPassword);
});