// login.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting by default

    // Define the correct username and password
    const correctUsername = "jecomisser"; 
    const correctPassword = "aespar89"; 

    // Get user input
    const usernameInput = document.querySelector('#username').value;
    const passwordInput = document.querySelector('#password').value;

    // Check if the credentials match
    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        window.location.href = "reasons.html"; // Redirect to "Reasons" page on success
    } else {
        alert("Incorrect username or password. Please try again."); // Show error message
    }
    
});