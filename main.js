// Elements
const loginButton=document.querySelector(".login-btn");
const registerButton=document.querySelector(".register-btn");
const formTitle=document.querySelector(".form-title");
const registerForm=document.querySelector(".register-form");
const loginForm=document.querySelector(".login-form");

// Show Register Form When We Click on the Register Button
registerButton.addEventListener("click",()=>
{
  // Change the Title of Form
  formTitle.innerText="Register Form";

  //Toggle Form Buttons
  registerButton.classList.add("active");
  loginButton.classList.remove("active");

  // Show Register Form and Hide Login Form
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

