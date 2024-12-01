// Home tag in navigation bar
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'landing-page.html'; // Redirect to landing-page.html
});


// Signin button
document.getElementById('signInButton').addEventListener('click', function () {
    window.location.href = 'sign-in.html';
});

//log-in button
function redirectToLogin() {
    window.location.href = 'home-page.html';
}

// button continue
document.getElementById('button-continue').addEventListener('click', function() {
    window.location.href = 'sign-up-name.html';
});


// categories
document.addEventListener("DOMContentLoaded", function() {
    // Select the link element by its ID
    let categories = document.getElementById("categoriesLink");

    // Set the href attribute to the desired URL
    categories.href = "category_landing_page.html";
});