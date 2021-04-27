// Create a variable to contain the element with `profile-container` ID

const profileContainerElement = document.querySelector("#profile-container");

if (userId !== null && typeof userId === "string") {
  // User is logged-in
  fetch(
    "https://alex-csp2-app-sever.herokuapp.com/api/users/details?id=" + userId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      data.userDetails;
    });
} else {
  // User is not logged-in
  window.location.replace("./login.html");
}
