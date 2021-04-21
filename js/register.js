const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = e.target[0].value;
  const lastName = e.target[1].value;
  const mobileNumber = e.target[2].value;
  const emailAddress = e.target[3].value;
  const password = e.target[4].value;
  const confirmPassword = e.target[5].value;
  console.log(`This is firstname: ${firstName}`)
  console.log(`This is lastName: ${lastName}`)
  console.log(`This is mobileNumber: ${mobileNumber}`)
  console.log(`This is emailAddress: ${emailAddress}`)
  console.log(`This is password: ${password}`)
  console.log(`This is confirmPassword: ${confirmPassword}`)

//   const firstName = document.querySelector('#first-name').value;
//   const lastName = document.querySelector('#last-name').value;
//   const mobileNumber = document.querySelector('#mobile-number').value;
//   const emailAddress = document.querySelector('#email-address').value;
//   const password = document.querySelector('#password').value;
//   const confirmPassword = document.querySelector('#confirm-password').value;
  
  
  //Simple data validation here
// Simple data validation here
  const isUserDataValid = (firstName !== "" && lastName !== "" && mobileNumber.length === 13 && emailAddress !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword);
  console.log(isUserDataValid);
});