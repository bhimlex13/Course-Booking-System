if (userId !== null && typeof userId === "string" && isAdmin === 'true') {
  console.log(`User with name: ${userName} is logged-in!`);
} else {
  window.location.replace("./login.html");
}