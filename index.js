let signupButton = document.getElementById('signup');
let loginButon = document.getElementById('login');

function signupUser() {
    console.log("taking you to signup page...");
}

function loginUser() {
    console.log("taking you to login page...");
}

signupButton.onclick = signupUser;
loginButon.onclick = loginUser;