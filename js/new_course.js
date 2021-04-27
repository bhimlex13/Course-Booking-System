if (userId !== null && typeof userId === "string") {
  alert(`User with name: ${userName} is logged-in!`);
} else {
  window.location.replace("./login.html");
}