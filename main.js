// Elements
const loginButton = document.querySelector(".login-btn");
const registerButton = document.querySelector(".register-btn");
const formTitle = document.querySelector(".form-title");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const eyeButton = document.querySelectorAll(".eye-btn");
const navigateLinks = document.querySelectorAll(".navigate-link");

// Login Elements
const loginEmailInput = document.getElementById("login-email-input");
const loginEmailAlert = document.getElementById("login-email-alert");
const loginPasswordInput = document.getElementById("login-password-input");
const loginPasswordAlert = document.getElementById("login-password-alert");
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

// Show and Hide Password Input
eyeButton.forEach((eye) => {
  eye.addEventListener("click", () => {
    // Get Previous Element
    const input = eye.previousElementSibling;

    // Change Input Type Into Text
    if (input.type === "password") {
      input.type = "text";
      eye.firstElementChild.classList.replace("fa-eye", "fa-eye-slash");
    }

    // Change Input Type Into Password
    else {
      input.type = "password";
      eye.firstElementChild.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

// Toggle Between Register and Login Form
navigateLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const dataLink = link.dataset.link;
    if (dataLink === "register") {
      registerButton.click();
    } else {
      loginButton.click();
    }
  });
});

// Validate Login Form
loginForm.addEventListener("submit", (e) => {
  if (!validateLoginForm()) {
    e.preventDefault();
  }
});

// Validate Login Email
loginEmailInput.addEventListener("input", () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!loginEmailInput.value.match(emailFormat)) {
    loginEmailInput.classList.add("wrong-input");
    loginEmailAlert.innerText = "Enter valid Email baby !";
  } else {
    loginEmailInput.classList.remove("wrong-input");
    loginEmailAlert.innerText = "";
  }
});

// Validate Login Password
loginPasswordInput.addEventListener("input", () => {
  if (loginPasswordInput.value.length < 6) {
    loginPasswordInput.classList.add("wrong-input");
    loginPasswordAlert.innerText = "Enter more than 6 characters !";
  } else {
    loginPasswordInput.classList.remove("wrong-input");
    loginPasswordAlert.innerText = "";
  }
});

const validateLoginForm = () => {
  // Email Validation
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!loginEmailInput.value.match(emailFormat)) {
    loginEmailInput.classList.add("wrong-input");
    loginEmailAlert.innerText = "Enter valid Email baby !";
    return false;
  }
  // Password Validation
  if (loginPasswordInput.value.length < 6) {
    loginPasswordInput.classList.add("wrong-input");
    loginPasswordAlert.innerText = "Enter more than 6 characters !";
    return false;
  }
  return true; // If Inputs Was Correct
};
