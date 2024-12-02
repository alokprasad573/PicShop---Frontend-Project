// sign in page
document.getElementById('signInButton').addEventListener('click', function () {
    window.location.href = 'sign_in.html';
});

// home click
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'landing_page.html'; // Redirect to landing-page.html
});

// log-in button
document.getElementById('loginButton').addEventListener('click', function () {
    window.location.href = 'home_page.html';
});

//create account
function redirectToSignUp() {
    window.location.href = 'sign_up_region.html';
}

// categories
document.addEventListener("DOMContentLoaded", function() {
    // Select the link element by its ID
    let categories = document.getElementById("categoriesLink");

    // Set the href attribute to the desired URL
    categories.href = "category_landing_page.html";
});