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

// Register Elements
const registerEmailInput = document.getElementById("register-email-input");
const registerEmailAlert = document.getElementById("register-email-alert");
const registerPasswordAlert = document.getElementById(
  "register-password-alert"
);
const registerPasswordInput = document.getElementById(
  "register-password-input"
);
const registerConfirmPasswordInput = document.getElementById(
  "register-confirm-password-input"
);
const registerConfirmPasswordAlert = document.getElementById(
  "register-confirm-password-alert"
);
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

// Validate Register Form
registerForm.addEventListener("submit", (e) => {
  if (!validateRegisterForm()) {
    e.preventDefault();
  }
});
// Validate Register Email
registerEmailInput.addEventListener("input", () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.innerText = "Enter valid Email baby !";
  } else {
    registerEmailInput.classList.remove("wrong-input");
    registerEmailAlert.innerText = "";
  }
});

// Validate Register Pssword
registerPasswordInput.addEventListener("input", () => {
  if (registerPasswordInput.value.length < 6) {
    registerPasswordInput.classList.add("wrong-input");
    registerPasswordAlert.innerText = "Enter more than 6 characters !";
  } else {
    registerPasswordInput.classList.remove("wrong-input");
    registerPasswordAlert.innerText = "";
  }
});

// Validate Register Confirm Password
registerConfirmPasswordInput.addEventListener("input", () => {
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.innerText = "Enter more than 6 characters !";
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.remove("wrong-input");
    registerConfirmPasswordAlert.innerText = "Password dosn't match";
  } else {
    registerConfirmPasswordInput.classList.remove("wrong-input");
    registerConfirmPasswordAlert.innerText = "";
  }
});

// Validate Register Form
const validateRegisterForm = () => {
  // Validate Email
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.innerText = "Enter valid Email baby !";
    return false;
  }

  // Validate Password
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.innerText = "Enter more than 6 characters !";
    return false;
  } else {
    registerConfirmPasswordInput.classList.remove("wrong-input");
    registerConfirmPasswordAlert.innerText = "";
  }

  // Validate Confirm Password
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.innerText = "Enter more than 6 characters !";
    return false;
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.remove("wrong-input");
    registerConfirmPasswordAlert.innerText = "Password dosn't match";
    return false;
  }

  return true;  // if inputs true
};




