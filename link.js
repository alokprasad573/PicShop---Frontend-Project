// Common
document.getElementById('signInButton').addEventListener('click', function () {
    window.location.href = 'sign-in.html';
});

document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'landing-page.html'; // Redirect to landing-page.html
});

// Landing Page
function navigateToLogin() {
    window.location.href = 'sign-in.html';
}

function navigateToSignUp() {
    window.location.href = 'sign-up-region.html';
}

//Sign-in Page.Sign-up-region Page,Sign-up-name,Sign-up-address
document.getElementById('loginButton').addEventListener('click', function () {
    window.location.href = 'home-page.html';
});

function redirectToSignUp() {
    window.location.href = 'sign-up-region.html';
}

// Sign-up-region Page,Sign-up-name,Sign-up-address
document.getElementById('button-continue').addEventListener('click', function() {
    window.location.href = 'sign-up-name.html';
});

function redirectToLogin() {
    window.location.href = 'sign-in.html';
}

// Common - Except Landing and Home Page
document.getElementById('button-cancel').addEventListener('click', function() {
    window.location.href = 'sign-in.html';
});

document.getElementById('button-continue').addEventListener('click', function() {
    window.location.href = 'sign-up-password.html';
});

// Sign-up-address
document.getElementById('button-create-account').addEventListener('click', function() {
    window.location.href = 'sign-in.html';
});
