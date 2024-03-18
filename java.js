
const signInButton = document.getElementById("signInButton");
const loginBox = document.getElementById("loginBox");

function toggleLoginBox() {
    loginBox.classList.toggle("hidden");
}

signInButton.addEventListener("click", toggleLoginBox);