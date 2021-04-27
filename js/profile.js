// Create a variable to contain the element with `profile-container` ID

const profileContainerElement = document.querySelector("#profile-container");

if (userId !== null && typeof userId === "string") {
  console.log(`User with name: ${userName} is logged-in!`);
} else {
  window.location.replace("./login.html");
}
