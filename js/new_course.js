if (userId !== null && typeof userId === "string") {
    //
  if (isAdmin === 'false') {
    history.back();
  }
} else {
  window.location.replace("./login.html");
}
