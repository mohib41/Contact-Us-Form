const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let valid = true;

  if (nameField.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  if (emailField.value.trim() === '') {
    emailError.textContent = 'Please enter your email.';
    valid = false;
  } else if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (messageField.value.trim() === '') {
    messageError.textContent = 'Please enter a message.';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = 'Thank you! Your message has been submitted.';
    form.reset();
  }
});
