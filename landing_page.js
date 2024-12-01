// home tag
document.addEventListener("DOMContentLoaded", function() {
    // Select the link element by its ID
    let homeLink = document.getElementById("homeLink");

    // Set the href attribute to the desired URL
    homeLink.href = "landing-page.html";
});

//categories tag


document.addEventListener("DOMContentLoaded", function() {
    // Select the link element by its ID
    let categories = document.getElementById("categoriesLink");

    // Set the href attribute to the desired URL
    categories.href = "category_landing_page.html";
});

// sign button
document.addEventListener("DOMContentLoaded", function() {
    // Select the button element by its ID
    let signInButton = document.getElementById("signInButton");

    // Add an event listener to handle the click event
    signInButton.addEventListener("click", function() {
        // Navigate to the sign.html page
        window.location.href = "sign-in.html";
    });
});

// sign tag
document.addEventListener("DOMContentLoaded", function() {
    // Function to navigate to sign-in.html
    window.navigateToLogin = function() {
        window.location.href = "sign-in.html";
    };



    // Function to navigate to sign-up-region.html
    window.navigateToSignUp = function() {
        window.location.href = "sign-up-region.html";
    };
});

