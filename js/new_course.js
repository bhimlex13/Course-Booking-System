if (userId !== null && typeof userId === "string") {
    //
  if (isAdmin === "false") {
    window.history.back();
  }
} else {
  window.location.replace("./login.html");
}
