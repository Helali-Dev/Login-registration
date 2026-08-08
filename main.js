// Elements
const loginButton = document.querySelector(".login-btn");
const registerButton = document.querySelector(".register-btn");
const formTitle = document.querySelector(".form-title");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");

// Show Register Form When We Click on the Register Button
registerButton.addEventListener("click", () => {
  // Change the Title of Form
  formTitle.innerText = "Register Form";

  //Toggle Form Buttons
  registerButton.classList.add("active");
  loginButton.classList.remove("active");

  // Show Register Form and Hide Login Form
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Show Login Form When We Click on the Login Button
loginButton.addEventListener("click", () => {
  // Change the Title of Form
  formTitle.innerText = "Login Form";

  //Toggle Form Buttons
  registerButton.classList.remove("active");
  loginButton.classList.add("active");

  // Show Login Form and Hide Register Form
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});
