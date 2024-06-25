let logoutBtn = document.getElementById("logoutBtn");

let username = localStorage.getItem("username");
if (username) {
  document.getElementById("username").innerHTML = "Welcome " + username;
}
logoutBtn.addEventListener("click", logout);
function logout() {
  localStorage.removeItem("username");
}
