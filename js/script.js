// Check if user is logged-in

let isAdmin = localStorage.getItem("isAdmin");

// Mini-activity:
// Create a variable to contain the val

let userId = localStorage.getItem("userId");

// Select all navigation elements if user is logged-in
let userLoggedInElements = document.querySelectorAll(".user-is-in");

// Select all navigation elements if user is logged-out
let userLoggedOutElements = document.querySelectorAll(".user-is-out");

if(userId !== null) {
  
}