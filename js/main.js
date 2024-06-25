let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");
let loginBtn = document.getElementById("loginBtn");

let signUpArray =
  localStorage.getItem("users") == null
    ? []
    : JSON.parse(localStorage.getItem("users"));

loginBtn.addEventListener("click", login);

function isLoginEmpty() {
  return signinPassword.value == "" || signinEmail.value == "";
}

function login() {
  if (isLoginEmpty()) {
    document.getElementById("incorrect").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }
  let password = signinPassword.value;
  let email = signinEmail.value;
  for (const element of signUpArray) {
    if (
      element.email.toLowerCase() == email.toLowerCase() &&
      element.password.toLowerCase() == password.toLowerCase()
    ) {
      localStorage.setItem("username", element.name);
      window.location = "home.html";
    } else {
      document.getElementById("incorrect").innerHTML =
        '<span class="p-2 text-danger">incorrect email or password</span>';
    }
  }
}

function logout() {
  localStorage.removeItem("username");
}
