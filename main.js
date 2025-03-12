// main.js
function navigate(page) {
    window.location.href = page;
}
document.addEventListener('DOMContentLoaded', function() {
    const pageClass = document.body.className; // Get the class of the page for styling

    if (pageClass === 'login-body') {
        console.log("Welcome to the login page!");
    } else if (pageClass === 'reasons-body') {
        console.log("Here’s your confession letter...");
    } else if (pageClass === 'poems-body') {
        console.log("Enjoy reading your poems!");
    } else if (pageClass === 'spotify-body') {
        console.log("Check out your Spotify playlist!");
    } else if (pageClass === 'secret-body') {
        console.log("Do you like me?");
    }
});