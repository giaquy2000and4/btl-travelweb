// -----------------register---------------------
// Get form fields
const form = document.getElementById('form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('psw');
const repeatPasswordField = document.getElementById('psw-repeat');

// Define validation flags  
let isValidEmail = false;
let isValidPassword = false;
let isMatchingPassword = false;

// Validate email
emailField.addEventListener('blur', () => {
  const email = emailField.value; 
  
  if(email) {  
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Invalid email');
    } else {
      isValidEmail = true;
    }
  }
  
});

// Validate password
passwordField.addEventListener('blur', () => {

  const password = passwordField.value;

  if(password) {  
    if(!password.match(/^\d+$/)) {
      alert('Invalid password');
    } else {
      isValidPassword = true;
    }
  } 

});

// Validate repeat password 
repeatPasswordField.addEventListener('blur', () => {

  if(repeatPasswordField.value && passwordField.value) {
    if(repeatPasswordField.value !== passwordField.value) {
      alert('Passwords do not match');
    } else {
      isMatchingPassword = true;
    }
  }

});

// Submit form  
form.addEventListener('submit', (e) => {
  
  e.preventDefault();

  if(isValidEmail && isValidPassword && isMatchingPassword) {
    alert('Successfully registered!');
  } else {  
    alert('Please check fields');
  }

});