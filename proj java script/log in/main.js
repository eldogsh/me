document.getElementById('registrationForm').addEventListener('submit', function (e) {
e.preventDefault()
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let errorMessage = document.getElementById('errorMessage');

  // Reset error message
  errorMessage.textContent = '';

  // Check if password matches confirm password
  if (password !== confirmPassword) {
    return  errorMessage.textContent = 'Passwords do not match!';
  }

  // Simple validation for username and email
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
   return  errorMessage.textContent = 'All fields are required!';
  }
  // Successful registration (here you can add your backend logic)
  alert('Registration successful!');
});
