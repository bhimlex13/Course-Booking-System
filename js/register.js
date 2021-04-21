const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.dir(event);
});